/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useRef } from 'react';
import { __ } from '@wordpress/i18n';
import UAGB_Block_Icons from '@Controls/block-icons';
import getMatrixAlignment from '@Controls/getMatrixAlignment';
import Masonry from 'react-masonry-component';
import Slider from 'react-slick';
import '/assets/js/imagesloaded.min';
import { useDeviceType } from '@Controls/getPreviewType';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import { RichText } from '@wordpress/block-editor';

const classNames = ( ...classes ) => ( classes.filter( Boolean ).join( ' ' ) );

const ImageGallery = ( { attributes, setAttributes, name } ) => {
	const blockName = name.replace( 'uagb/', '' );
	const {
		tileSize,
		focusList,

		mediaGallery,
		feedLayout,
		imageDisplayCaption,

		feedMarginTop,
		feedMarginRight,
		feedMarginBottom,
		feedMarginLeft,
		feedMarginTopTab,
		feedMarginRightTab,
		feedMarginBottomTab,
		feedMarginLeftTab,
		feedMarginTopMob,
		feedMarginRightMob,
		feedMarginBottomMob,
		feedMarginLeftMob,
		feedMarginUnit,
		feedMarginUnitTab,
		feedMarginUnitMob,
		gridImageGap,
		gridImageGapTab,
		gridImageGapMob,
		gridImageGapUnit,
		gridImageGapUnitTab,
		gridImageGapUnitMob,

		captionDisplayType,
		imageCaptionAlignment,
		imageDefaultCaption,

		carouselStartAt,
		carouselLoop,
		carouselAutoplay,
		carouselAutoplaySpeed,
		carouselPauseOnHover,
		carouselTransitionSpeed,
		gridPages,
		gridPageNumber,

		feedPagination,
		paginateUseArrows,
		paginateUseDots,
		paginateUseLoader,
		paginateLimit,
		paginateButtonText,

		columnsDesk,
		columnsTab,
		columnsMob,
	} = attributes;

	// Range Fallback.
	const carouselStartAtFallback = getFallbackNumber( carouselStartAt, 'carouselStartAt', blockName );
	const carouselTransitionSpeedFallback = getFallbackNumber( carouselTransitionSpeed, 'carouselTransitionSpeed', blockName );
	const carouselAutoplaySpeedFallback = getFallbackNumber( carouselAutoplaySpeed, 'carouselAutoplaySpeed', blockName );
	const paginateLimitFallback = getFallbackNumber( paginateLimit, 'paginateLimit', blockName );
	const columnsDeskFallback = getFallbackNumber( columnsDesk, 'columnsDesk', blockName );

	// Responsive Slider Fallback.
	const columnsTabFallback = isNaN( columnsTab ) ? columnsDeskFallback : columnsTab;
	const columnsMobFallback = isNaN( columnsMob ) ? columnsTabFallback : columnsMob;

	const isGridPagesNeeded = feedPagination && ( feedLayout === 'grid' || feedLayout === 'masonry' );
	const [ slickDotHeight, setSlickDotHeight ] = useState( 0 );
	const [ focusUpdate, setFocusUpdate ] = useState( false );
	const [ tileResizeTrigger, setTileResizeTrigger ] = useState( false );
	const slickCarousel = useRef( null );
	const tiledImages = useRef( [] );
	const tileSizer = useRef( null );
	const deviceType = useDeviceType();

	// Update the required properties when the Gallery is updated.
	useEffect( () => {
		// First check if media items selected are less than the column count currently used.
		if ( mediaGallery.length < columnsDeskFallback ) {
			setAttributes( { columnsDesk: mediaGallery.length } );
		}
		if ( mediaGallery.length < columnsTabFallback ) {
			setAttributes( { columnsTab: mediaGallery.length } );
		}
		if ( mediaGallery.length < columnsMobFallback ) {
			setAttributes( { columnsMob: mediaGallery.length } );
		}
		// Next Check if this is a carousel that needs dots, and set the height of the dots wrapper.
		if ( ( mediaGallery && paginateUseDots ) && ( feedLayout === 'carousel' ) ){
			setSlickDotHeight(
				( mediaGallery.length > columnsDeskFallback )
				? slickCarousel.current.children[0].querySelector( '.slick-dots' ).clientHeight
				: 0
			);
		}
		// Else check if this is tiled and load all images previously focused by the user.
		else if ( feedLayout === 'tiled' ){
			mediaGallery.forEach( ( image ) => {
				if ( tiledImages.current[ image.id ] !== undefined && tiledImages.current[ image.id ] !== null ){
					if ( focusList[ image.id ] && ! tiledImages.current[ image.id ].classList.contains( 'spectra-image-gallery__media-wrapper--focus' ) ){
						tiledImages.current[ image.id ].classList.add( 'spectra-image-gallery__media-wrapper--focus' );
					}
				}
			} );
		}
	}, [
		feedLayout,
		JSON.stringify( mediaGallery ),
	] );

	// Update Tile Sizer Tile when needed.
	useEffect( () => {
		if ( 'tiled' === feedLayout ) {
			tileSizer.current.style.display = 'initial';
			setAttributes( { tileSize: Math.round( tileSizer?.current.getBoundingClientRect().width ) } );
			setTileResizeTrigger( false );
		}
	}, [
		tileResizeTrigger,
		deviceType,
		feedLayout,
		columnsDesk,
		columnsTab,
		columnsMob,
		feedMarginTop,
		feedMarginRight,
		feedMarginBottom,
		feedMarginLeft,
		feedMarginTopTab,
		feedMarginRightTab,
		feedMarginBottomTab,
		feedMarginLeftTab,
		feedMarginTopMob,
		feedMarginRightMob,
		feedMarginBottomMob,
		feedMarginLeftMob,
		feedMarginUnit,
		feedMarginUnitTab,
		feedMarginUnitMob,
		gridImageGap,
		gridImageGapTab,
		gridImageGapMob,
		gridImageGapUnit,
		gridImageGapUnitTab,
		gridImageGapUnitMob,
	] );

	// Load Special Classes on Images when needed.
	useEffect( () => {
		if ( 'tiled' === feedLayout ) {
			setTimeout( () => {
				const gallery = tiledImages.current;
				// Delete the Object's KV Pairs that are null.
				for ( const imageID in gallery ) {
					if ( null === gallery[ imageID ] ) {
						delete gallery[ imageID ];
					}
				}
				/* eslint-disable no-undef */
				imagesLoaded( gallery ).on( 'progress', createSpecialTile );
				imagesLoaded( gallery ).off( 'progress', createSpecialTile );
				imagesLoaded( gallery ).on( 'always', () => setTileResizeTrigger( true ) );
				/* eslint-enable no-undef */
			}, 250 );
		}
	}, [
		feedLayout,
		JSON.stringify( mediaGallery ),
	] );

	// Remove the Tile Sizer when the size is acquired.
	useEffect( () => {
		if( tileSizer && tileSizer.current ) {  // Check if typeSizer and current is null or not to avoid console errors.
			setTimeout( () => {
				tileSizer.current.style.display = 'none';
			}, 1000 );
		}
	}, [ tileSize ] );

	// Update the Focused Images based on the Focus List.
	useEffect ( () => {
		if ( ! focusUpdate ) {
			return;
		}
		for ( let i = 0; i < focusList.length; i++ ){
			if (
				focusList[ i ] !== undefined && (
					tiledImages.current[ i ] !== undefined && tiledImages.current[ i ] !== null
				)
			) {
				if ( focusList[ i ] ) {
					tiledImages.current[ i ].classList.add( 'spectra-image-gallery__media-wrapper--focus' );
				}
				else {
					tiledImages.current[ i ].classList.remove( 'spectra-image-gallery__media-wrapper--focus' );
				}
			}
		}
		setFocusUpdate( false );
	}, [ focusUpdate ] );

	const SlickNextArrow = () => (
		<button
			type="button"
			data-role="none"
			className={ classNames(
				'spectra-image-gallery__control-arrows',
				`spectra-image-gallery__control-arrows--${ feedLayout }`,
				( 'carousel' === feedLayout ) ? 'slick-next' : '',
				( 'carousel' === feedLayout ) ? 'slick-arrow' : '',
			) }
			aria-label="Next"
			tabIndex="0"
			data-direction="Next"
			onClick={ () => (
				( 'grid' === feedLayout )
					? setAttributes( { gridPageNumber: gridPageNumber + 1 } )
					: ''
			) }
			disabled={ ( 'grid' === feedLayout && gridPageNumber === gridPages ) }
		>
			{ UAGB_Block_Icons.carousel_right }
		</button>
	);

	const SlickPrevArrow = () => (
		<button
			type="button"
			data-role="none"
			className={ classNames(
				'spectra-image-gallery__control-arrows',
				`spectra-image-gallery__control-arrows--${ feedLayout }`,
				( 'carousel' === feedLayout ) ? 'slick-prev' : '',
				( 'carousel' === feedLayout ) ? 'slick-arrow' : '',
			) }
			aria-label="Prev"
			tabIndex="0"
			data-direction="Prev"
			onClick={ () => (
				( 'grid' === feedLayout )
					? setAttributes( { gridPageNumber: gridPageNumber - 1 } )
					: ''
			) }
			disabled={ ( 'grid' === feedLayout && 1 === gridPageNumber ) }
		>
			{ UAGB_Block_Icons.carousel_left }
		</button>
	);

	// To dynamically update slides to show based on the current selected device.

	let howManySlides = columnsDeskFallback;

	switch( deviceType ) {
		case 'Tablet':
			howManySlides = columnsTabFallback;
			break;
		case 'Mobile':
			howManySlides = columnsMobFallback;
			break;
		default:
			howManySlides = columnsDeskFallback;
			break;
	}

	const carouselSettings = {
		arrows: paginateUseArrows,
		dots: paginateUseDots,
		initialSlide: carouselStartAtFallback,
		infinite: carouselLoop,
		autoplay: carouselAutoplay,
		autoplaySpeed: carouselAutoplaySpeedFallback,
		pauseOnHover: carouselPauseOnHover,
		speed: carouselTransitionSpeedFallback,
		slidesToShow: howManySlides,
		nextArrow: <SlickNextArrow />,
		prevArrow: <SlickPrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: columnsTabFallback,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: columnsMobFallback,
				},
			},
		],
	};

	const svgFocus = ( image ) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24px"
			height="24px"
			viewBox="0 0 24 24"
			className="spectra-image-gallery__control-focus"
			onClick={ () => alterFocus( image, true ) }
		>
			<path d="M6,4C4.9,4,4,4.9,4,6v4.375h1.5V6c0-0.3,0.2-0.5,0.5-0.5h4.376V4H6z"/>
			<path d="M20,6c0-1.1-0.9-2-2-2h-4.375v1.5H18c0.299,0,0.5,0.2,0.5,0.5v4.376H20V6z"/>
			<path d="M6,20c-1.1,0-2-0.9-2-2v-4.375h1.5V18c0,0.3,0.2,0.5,0.5,0.5h4.376V20H6z"/>
			<path d="M20,18c0,1.1-0.9,2-2,2h-4.375v-1.5H18c0.299,0,0.5-0.199,0.5-0.5v-4.375H20V18z"/>
		</svg>
	);

	const svgUnfocus = ( image ) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24px"
			height="24px"
			viewBox="37 0.083 24 24"
			className="spectra-image-gallery__control-focus"
			onClick={ () => alterFocus( image, false ) }
		>
			<path d="M45.791,10.375c1.1,0,2-0.9,2-2V4h-1.5v4.375c0,0.3-0.2,0.5-0.5,0.5h-4.376v1.5H45.791z"/>
			<path d="M51.041,8.376c0,1.1,0.9,2,2,2h4.375v-1.5h-4.375c-0.299,0-0.5-0.2-0.5-0.5V4h-1.5V8.376z"/>
			<path d="M45.791,13.625c1.1,0,2,0.9,2,2V20h-1.5v-4.375c0-0.3-0.2-0.5-0.5-0.5h-4.376v-1.5H45.791z"/>
			<path d="M51.041,15.625c0-1.1,0.9-2,2-2h4.375v1.5h-4.375c-0.299,0-0.5,0.199-0.5,0.5V20h-1.5V15.625z"/>
		</svg>
	);

	const getGridPageChunk = ( allMedia ) => allMedia.slice(
		( gridPageNumber - 1 ) * paginateLimitFallback,
		gridPageNumber * paginateLimitFallback
	);

	const alterFocus = ( image, needsFocus ) => {
		const updatedFocusPairs = focusList;
		updatedFocusPairs[ image.id ] = needsFocus;
		setAttributes( { focusList: updatedFocusPairs } );
		setFocusUpdate( true );
	}

	const createSpecialTile = ( instance, image ) => {
		if ( image && image.isLoaded ){
			const imageElement = image.img;
			const imageWrapper = imageElement.parentElement;
			const tileWrapper = imageElement.parentElement.parentElement;
			if ( ! tileWrapper.classList.contains( 'spectra-image-gallery__media-wrapper--focus' ) ) {
				// Check if one dimension is greater than ( 2 times - half ) of the other dimension.
				if ( imageElement.naturalWidth >= ( imageElement.naturalHeight * 2 ) - ( imageElement.naturalHeight / 2 ) ){
					tileWrapper.classList.add( 'spectra-image-gallery__media-wrapper--wide' );
					imageWrapper.classList.add( 'spectra-image-gallery__media--tiled-wide' );
				}
				else if ( imageElement.naturalHeight >= ( imageElement.naturalWidth * 2 ) - ( imageElement.naturalWidth / 2 ) ){
					tileWrapper.classList.add( 'spectra-image-gallery__media-wrapper--tall' );
					imageWrapper.classList.add( 'spectra-image-gallery__media--tiled-tall' );
				}
			}
		}
	};

	const renderGridPagintion = () => (
		<div className="spectra-image-gallery__control-wrapper">
			<SlickPrevArrow />
			<ul className="spectra-image-gallery__control-dots">
				{ [ ...Array( gridPages ) ].map( ( pageData, pageIndex ) => (
					<li
						key={ pageIndex }
						className={ classNames(
							'spectra-image-gallery__control-dot',
							( pageIndex === gridPageNumber - 1 ) ? 'spectra-image-gallery__control-dot--active' : '',
						) }
						data-go-to={ pageIndex + 1 }
					>
						<button onClick={ () => setAttributes( { gridPageNumber: pageIndex + 1 } ) } />
					</li>
				) ) }
			</ul>
			<SlickNextArrow />
		</div>
	);

	const renderMasonryPagintion = () => (
		<>
			{ paginateUseLoader ? (
				<div className="spectra-image-gallery__control-loader wp-block-button">
					<div className="wp-block-button__link spectra-image-gallery__control-loader--1"></div>
					<div className="wp-block-button__link spectra-image-gallery__control-loader--2"></div>
					<div className="wp-block-button__link spectra-image-gallery__control-loader--3"></div>
				</div>
			) : (
				<div className="spectra-image-gallery__control-wrapper wp-block-button">
					<RichText
						tagName="div"
						placeholder={ __(
							'Load More Images',
							'ultimate-addons-for-gutenberg'
						) }
						value={ paginateButtonText }
						onChange={ ( value ) =>
							setAttributes( {
								paginateButtonText: value,
							} )
						}
						className="spectra-image-gallery__control-button wp-block-button__link"
						multiline={ false }
						allowedFormats={ [
							'core/bold',
							'core/italic',
							'core/strikethrough',
						] }
					/>
				</div>
			) }
		</>
	);

	const renderFocusControl = ( mediaObject ) => (
		focusList[ mediaObject.id ] ? svgUnfocus( mediaObject ) : svgFocus( mediaObject )
	);

	const renderGallery = () => {
		switch ( feedLayout ) {
			case 'grid':
				const gridLayout = 'grid';
				return (
					<>
						<div
							className={ classNames(
								'spectra-image-gallery',
								`spectra-image-gallery__layout--${ gridLayout }`,
								`spectra-image-gallery__layout--${ gridLayout }-col-${ columnsDeskFallback }`,
								`spectra-image-gallery__layout--${ gridLayout }-col-tab-${ columnsTabFallback }`,
								`spectra-image-gallery__layout--${ gridLayout }-col-mob-${ columnsMobFallback }`
							) }
						>
							{ renderImageLooper() }
						</div>
						{ feedPagination && renderGridPagintion() }
					</>
				);
			case 'masonry':
				return (
					<>
						<Masonry
							className={ classNames(
								'spectra-image-gallery',
								`spectra-image-gallery__layout--${ feedLayout }`,
								`spectra-image-gallery__layout--${ feedLayout }-col-${ columnsDeskFallback }`,
								`spectra-image-gallery__layout--${ feedLayout }-col-tab-${ columnsTabFallback }`,
								`spectra-image-gallery__layout--${ feedLayout }-col-mob-${ columnsMobFallback }`
							) }
							updateOnEachImageLoad={ true }
						>
							{ renderImageLooper() }
						</Masonry>
						{ feedPagination && renderMasonryPagintion() }
					</>
				);
			case 'tiled':
				return (
					<div
						className={ classNames(
							'spectra-image-gallery',
							`spectra-image-gallery__layout--${ feedLayout }`,
							`spectra-image-gallery__layout--${ feedLayout }-col-${ columnsDeskFallback }`,
							`spectra-image-gallery__layout--${ feedLayout }-col-tab-${ columnsTabFallback }`,
							`spectra-image-gallery__layout--${ feedLayout }-col-mob-${ columnsMobFallback }`
						) }
					>
						{ renderImageLooper() }
						<div className="spectra-image-gallery__media-sizer" ref={ tileSizer }></div>
					</div>
				);
			case 'carousel':
				return (
					<div
						className={ classNames(
							'spectra-image-gallery',
							`spectra-image-gallery__layout--${ feedLayout }`
						) }
						ref={ slickCarousel }
						style={ { 'margin-bottom': `${ slickDotHeight }px` } }
					>
						<Slider
							className="uagb-slick-carousel"
							{ ...carouselSettings }
						>
							{ renderImageLooper() }
						</Slider>
					</div>
				);
		}
	};

	const renderImageLooper = () => {
		if ( isGridPagesNeeded ) {
			setAttributes( {
				gridPages: Math.ceil( mediaGallery.length / paginateLimitFallback ),
			} );
		}
		const paginatedMedia = isGridPagesNeeded
			? getGridPageChunk( mediaGallery )
			: mediaGallery;
		return paginatedMedia.map( ( media ) => renderImage( media ) );
	};

	const renderImage = ( mediaObject ) => (
		<div
			className="spectra-image-gallery__media-wrapper"
			key={ mediaObject.id }
			ref={ ( element ) => ( tiledImages.current[ mediaObject.id ] = element ) }
		>
			{ renderThumbnail( mediaObject ) }
			{ ( 'tiled' === feedLayout ) && renderFocusControl( mediaObject ) }
		</div>
	);

	const renderThumbnail = ( mediaObject ) => (
		<>
			{ ( imageDisplayCaption && ( 'bar-outside' === captionDisplayType && 'top' === getMatrixAlignment( imageCaptionAlignment, 1 ) ) ) && (
				<div className={ classNames(
					'spectra-image-gallery__media-thumbnail-caption-wrapper',
					`spectra-image-gallery__media-thumbnail-caption-wrapper--${ captionDisplayType }`
				) } >
					{ renderCaption( mediaObject ) }
				</div>
			) }
			<div className={ classNames(
				'spectra-image-gallery__media',
				`spectra-image-gallery__media--${ feedLayout }`,
			) } >
				<img
					className={ classNames(
						'spectra-image-gallery__media-thumbnail',
						`spectra-image-gallery__media-thumbnail--${ feedLayout }`
					) }
					src={ mediaObject.url }
					alt={ mediaObject.alt }
				/>
				<div className="spectra-image-gallery__media-thumbnail-blurrer" />
				{ imageDisplayCaption ? (
					( 'bar-outside' !== captionDisplayType ) && (
						<div
							className={ classNames(
								'spectra-image-gallery__media-thumbnail-caption-wrapper',
								`spectra-image-gallery__media-thumbnail-caption-wrapper--${ captionDisplayType }`
							) }
						>
							{ renderCaption( mediaObject ) }
						</div>
					)
				) : (
					<div className={ classNames(
						'spectra-image-gallery__media-thumbnail-caption-wrapper',
						'spectra-image-gallery__media-thumbnail-caption-wrapper--overlay'
					) } />
				) }
			</div>
			{ ( imageDisplayCaption && ( 'bar-outside' === captionDisplayType && getMatrixAlignment( imageCaptionAlignment, 1 ) !== 'top' ) ) && (
				<div className={ classNames(
					'spectra-image-gallery__media-thumbnail-caption-wrapper',
					`spectra-image-gallery__media-thumbnail-caption-wrapper--${ captionDisplayType }`
				) } >
					{ renderCaption( mediaObject ) }
				</div>
			) }
		</>
	);

	const renderCaption = ( mediaObject ) => (
		mediaObject.caption ? (
			<RichText
				tagName="div"
				placeholder={ imageDefaultCaption }
				value={ mediaObject.caption }
				onChange={ ( value ) => ( mediaObject.caption = value ) }
				className={ classNames(
					'spectra-image-gallery__media-thumbnail-caption',
					`spectra-image-gallery__media-thumbnail-caption--${ captionDisplayType }`
				) }
				multiline={ false }
			/>
		) : (
			mediaObject.url ? (
				<RichText
					tagName="div"
					placeholder={ __( 'No Caption', 'ultimate-addons-for-gutenberg' ) }
					value={ imageDefaultCaption }
					onChange={ ( value ) => ( setAttributes( { imageDefaultCaption: value } ) ) }
					className={ classNames(
						'spectra-image-gallery__media-thumbnail-caption',
						`spectra-image-gallery__media-thumbnail-caption--${ captionDisplayType }`
					) }
					multiline={ false }
				/>
			) : (
				__( 'Unable to load image', 'ultimate-addons-for-gutenberg' )
			)
		)
	);

	const renderEmpty = () => (
		<div className="spectra-image-gallery-init-wrapper">
			{ UAGB_Block_Icons.image_gallery }
			<h3>
				{ __( `Spectra - Image Gallery`, 'ultimate-addons-for-gutenberg' ) }
			</h3>
			<p>
				{ __( 'No images to display…', 'ultimate-addons-for-gutenberg' ) }
			</p>
		</div>
	);


	return ( mediaGallery ) ? renderGallery() : renderEmpty();
};

export default ImageGallery;