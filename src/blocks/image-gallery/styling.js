/* eslint-disable no-nested-ternary */
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import getMatrixAlignment from '@Controls/getMatrixAlignment';
import generateBorderRadius from '@Controls/generateBorderRadius';
import generateBorderCSS from '@Controls/generateBorderCSS';
import generateSpacing from '@Controls/generateSpacing';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( props ) {
	const blockName = props.name.replace( 'uagb/', '' );
	const {
		// Tile Calcualtion
		tileSize,

		// Block Layout.
		feedLayout,
		imageDisplayCaption,

		// Gallery Layout Settings.
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

		// Caption Settings.
		captionVisibility,
		captionDisplayType,
		imageCaptionAlignment,
		captionPaddingTop,
		captionPaddingRight,
		captionPaddingBottom,
		captionPaddingLeft,
		captionPaddingTopTab,
		captionPaddingRightTab,
		captionPaddingBottomTab,
		captionPaddingLeftTab,
		captionPaddingTopMob,
		captionPaddingRightMob,
		captionPaddingBottomMob,
		captionPaddingLeftMob,
		captionPaddingUnit,
		captionPaddingUnitTab,
		captionPaddingUnitMob,
		captionGap,
		captionGapUnit,

		// Carousel Specific Settings.
		carouselSquares,

		// Pagination Settings.
		feedPagination,
		paginateUseLoader,
		paginateButtonAlign,
		paginateButtonPaddingTop,
		paginateButtonPaddingRight,
		paginateButtonPaddingBottom,
		paginateButtonPaddingLeft,
		paginateButtonPaddingTopTab,
		paginateButtonPaddingRightTab,
		paginateButtonPaddingBottomTab,
		paginateButtonPaddingLeftTab,
		paginateButtonPaddingTopMob,
		paginateButtonPaddingRightMob,
		paginateButtonPaddingBottomMob,
		paginateButtonPaddingLeftMob,
		paginateButtonPaddingUnit,
		paginateButtonPaddingUnitTab,
		paginateButtonPaddingUnitMob,
		
		// Image Styling.
		imageBorderTopLeftRadius,
		imageBorderTopRightRadius,
		imageBorderBottomRightRadius,
		imageBorderBottomLeftRadius,
		imageBorderTopLeftRadiusTablet,
		imageBorderTopRightRadiusTablet,
		imageBorderBottomRightRadiusTablet,
		imageBorderBottomLeftRadiusTablet,
		imageBorderTopLeftRadiusMobile,
		imageBorderTopRightRadiusMobile,
		imageBorderBottomRightRadiusMobile,
		imageBorderBottomLeftRadiusMobile,
		imageBorderRadiusUnit,
		imageBorderRadiusUnitTablet,
		imageBorderRadiusUnitMobile,
		imageEnableZoom,
		imageZoomType,
		captionBackgroundEnableBlur,
		captionBackgroundBlurAmount,

		// Caption Font.
		captionFontFamily,
		captionFontWeight,
		captionFontStyle,
		captionTransform,
		captionDecoration,
		captionFontSizeType,
		captionFontSize,
		captionFontSizeTab,
		captionFontSizeMob,
		captionLineHeightType,
		captionLineHeight,
		captionLineHeightTab,
		captionLineHeightMob,

		// Pagination Font.
		loadMoreFontFamily,
		loadMoreFontWeight,
		loadMoreFontStyle,
		loadMoreTransform,
		loadMoreDecoration,
		loadMoreFontSizeType,
		loadMoreFontSize,
		loadMoreFontSizeTab,
		loadMoreFontSizeMob,
		loadMoreLineHeightType,
		loadMoreLineHeight,
		loadMoreLineHeightTab,
		loadMoreLineHeightMob,

		// Caption Styling.
		captionBackgroundBlurOpacity,
		captionBackgroundBlurOpacityHover,
		captionBackgroundEffect,
		captionBackgroundEffectHover,
		captionBackgroundEffectAmount,
		captionBackgroundEffectAmountHover,
		captionColor,
		captionColorHover,
		captionBackgroundColor,
		captionBackgroundColorHover,
		overlayColor,
		overlayColorHover,
		captionSeparateColors,

		// Pagination Styling.
		paginateArrowDistance,
		paginateArrowDistanceUnit,
		paginateLoaderSize,
		paginateButtonTextColor,
		paginateButtonTextColorHover,
		paginateColor,
		paginateColorHover,

		// Border Hover Colors.
		btnBorderHColor,
		arrowBorderHColor,
		mainTitleBorderColor,
		mainTitleBorderHColor,
	} = props.attributes;

	// Range Fallback.
	const captionBackgroundBlurOpacityFallback = getFallbackNumber( captionBackgroundBlurOpacity, 'captionBackgroundBlurOpacity', blockName );
	const captionBackgroundBlurOpacityHoverFallback = getFallbackNumber( captionBackgroundBlurOpacityHover, 'captionBackgroundBlurOpacityHover', blockName );
	const captionBackgroundEffectAmountFallback = getFallbackNumber( captionBackgroundEffectAmount, 'captionBackgroundEffectAmount', blockName );
	const captionBackgroundEffectAmountHoverFallback = getFallbackNumber( captionBackgroundEffectAmountHover, 'captionBackgroundEffectAmountHover', blockName );
	const captionGapFallback = getFallbackNumber( captionGap, 'captionGap', blockName );
	const captionBackgroundBlurAmountFallback = getFallbackNumber( captionBackgroundBlurAmount, 'captionBackgroundBlurAmount', blockName );
	const paginateArrowDistanceFallback = getFallbackNumber( paginateArrowDistance, 'paginateArrowDistance', blockName );
	const paginateLoaderSizeFallback = getFallbackNumber( paginateLoaderSize, 'paginateLoaderSize', blockName );
	const gridImageGapFallback = getFallbackNumber( gridImageGap, 'gridImageGap', blockName );

	// Spacing Fallback
	const feedMarginTopFallback = isNaN( feedMarginTop ) ? 0 : feedMarginTop;
	const feedMarginRightFallback = isNaN( feedMarginRight ) ? 0 : feedMarginRight;
	const feedMarginBottomFallback = isNaN( feedMarginBottom ) ? 0 : feedMarginBottom;
	const feedMarginLeftFallback = isNaN( feedMarginLeft ) ? 0 : feedMarginLeft;
	const feedMarginTopTabFallback = isNaN( feedMarginTopTab ) ? 0 : feedMarginTopTab;
	const feedMarginRightTabFallback = isNaN( feedMarginRightTab ) ? 0 : feedMarginRightTab;
	const feedMarginBottomTabFallback = isNaN( feedMarginBottomTab ) ? 0 : feedMarginBottomTab;
	const feedMarginLeftTabFallback = isNaN( feedMarginLeftTab ) ? 0 : feedMarginLeftTab;
	const feedMarginTopMobFallback = isNaN( feedMarginTopMob ) ? 0 : feedMarginTopMob;
	const feedMarginRightMobFallback = isNaN( feedMarginRightMob ) ? 0 : feedMarginRightMob;
	const feedMarginBottomMobFallback = isNaN( feedMarginBottomMob ) ? 0 : feedMarginBottomMob;
	const feedMarginLeftMobFallback = isNaN( feedMarginLeftMob ) ? 0 : feedMarginLeftMob;

	// Responsive Slider Fallback.
	const gridImageGapTabFallback = isNaN( gridImageGapTab ) ? gridImageGapFallback : gridImageGapTab;
	const gridImageGapMobFallback = isNaN( gridImageGapMob ) ? gridImageGapTabFallback : gridImageGapMob;

	// Border Attributes.
	const arrowBorderCSS = generateBorderCSS( props.attributes, 'arrow' );
	const arrowBorderCSSTablet = generateBorderCSS( props.attributes, 'arrow', 'tablet' );
	const arrowBorderCSSMobile = generateBorderCSS( props.attributes, 'arrow', 'mobile' );
	const btnBorderCSS = generateBorderCSS( props.attributes, 'btn' );
	const btnBorderCSSTablet = generateBorderCSS( props.attributes, 'btn', 'tablet' );
	const btnBorderCSSMobile = generateBorderCSS( props.attributes, 'btn', 'mobile' );
	const mainTitleBorderCSS = generateBorderCSS( props.attributes, 'mainTitle' );
	const mainTitleBorderCSSTablet = generateBorderCSS( props.attributes, 'mainTitle', 'tablet' );
	const mainTitleBorderCSSMobile = generateBorderCSS( props.attributes, 'mainTitle', 'mobile' );
	
	const selectors = {

		// Feed Selectors

		'.wp-block-uagb-image-gallery': {
			'padding': generateSpacing(
				feedMarginUnit,
				feedMarginTopFallback,
				feedMarginRightFallback,
				( 'carousel' === feedLayout ) ? ( feedMarginBottomFallback + 5 ) : feedMarginBottomFallback, // Editor Only Fix for the Carousel Dots.
				feedMarginLeftFallback
			),
		},

		// Control Settings

		' .spectra-image-gallery__control-arrows svg': {
			'fill': paginateColor,
		},
		' .spectra-image-gallery__control-arrows:hover svg': {
			'fill': paginateColorHover,
		},
		' .spectra-image-gallery__control-arrows--carousel': {
			...arrowBorderCSS,
		},
		' .spectra-image-gallery__control-arrows--carousel:hover': {
			'border-color': arrowBorderHColor,
		},
		' .spectra-image-gallery__control-arrows--carousel.slick-prev': {
			'left': generateCSSUnit( paginateArrowDistanceFallback, paginateArrowDistanceUnit ),
		},		
		' .spectra-image-gallery__control-arrows--carousel.slick-next': {
			'right': generateCSSUnit( paginateArrowDistanceFallback, paginateArrowDistanceUnit ),
		},
		' .spectra-image-gallery__layout--carousel ul.slick-dots li button:before': {
			'color': paginateColor,
		},
		' .spectra-image-gallery__layout--carousel ul.slick-dots li button:hover:before': {
			'color': paginateColorHover,
		},
		' .spectra-image-gallery__control-dots li button::before': {
			'color': paginateColor,
		},
		' .spectra-image-gallery__control-dots li button:hover::before': {
			'color': paginateColorHover,
		},
		' .spectra-image-gallery__control-loader div': {
			'background-color': paginateColor,
			'width': generateCSSUnit( paginateLoaderSizeFallback, 'px' ),
			'height': generateCSSUnit( paginateLoaderSizeFallback, 'px' ),
		},
		' .spectra-image-gallery__control-button': {
			'padding': generateSpacing(
				paginateButtonPaddingUnit,
				paginateButtonPaddingTop,
				paginateButtonPaddingRight,
				paginateButtonPaddingBottom,
				paginateButtonPaddingLeft
			),
			'color': paginateButtonTextColor,
			'background-color': paginateColor,
			'font-family': ( 'Default' === loadMoreFontFamily ) ? '' : loadMoreFontFamily,
			'font-weight': loadMoreFontWeight,
			'font-style': loadMoreFontStyle,
			'text-decoration': loadMoreDecoration,
			'text-transform': loadMoreTransform,
			'font-size': generateCSSUnit( loadMoreFontSize, loadMoreFontSizeType ),
			'line-height': generateCSSUnit( loadMoreLineHeight, loadMoreLineHeightType ),
			...btnBorderCSS,
		},
		' .spectra-image-gallery__control-button:hover': {
			'color': paginateButtonTextColorHover,
			'background-color': paginateColorHover,
			'border-color': btnBorderHColor,
		},
		' .spectra-image-gallery__control-lightbox': {
			'top': `calc( ${
				document.getElementById( 'wpadminbar' ).classList.contains( 'mobile' )
					? document.getElementById( 'wpadminbar' ).offsetHeight
					: 0
			}px + ${
				document.querySelector( '.interface-interface-skeleton__header' ).offsetHeight
			}px )`,
			'width': `calc( 100vw - ${
				document.querySelector( '.interface-interface-skeleton__sidebar' )
					? document.querySelector( '.interface-interface-skeleton__sidebar' ).offsetWidth
					: 0
			}px )`,
			'height': `calc( 100vh - ${
				document.getElementById( 'wpadminbar' ).classList.contains( 'mobile' )
					? document.getElementById( 'wpadminbar' ).offsetHeight
					: 0
			}px - ${
				document.querySelector( '.interface-interface-skeleton__header' ).offsetHeight
			}px - ${
				document.querySelector( '.interface-interface-skeleton__footer' )
					? document.querySelector( '.interface-interface-skeleton__footer' ).offsetHeight
					: 0
			}px )`,
		},

		// Layout and Media Wrapper Selectors
		
		' .spectra-image-gallery__layout--grid': {
			'grid-gap': generateCSSUnit(
				gridImageGapFallback,
				gridImageGapUnit
			),
		},
		' .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnit,
				gridImageGapFallback,
			),
		},
		' .spectra-image-gallery__layout--carousel': {
			'margin': '0px'
		},
		' .spectra-image-gallery__layout--carousel .spectra-image-gallery__media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnit,
				gridImageGapFallback,
			),
		},
		' .spectra-image-gallery__layout--tiled': {
			'grid-gap': generateCSSUnit(
				gridImageGapFallback,
				gridImageGapUnit
			),
			'grid-auto-rows': generateCSSUnit( tileSize, 'px' ),
		},
		' .spectra-image-gallery__media': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnit,
				imageBorderTopLeftRadius,
				imageBorderTopRightRadius,
				imageBorderBottomRightRadius,
				imageBorderBottomLeftRadius,
			),
		},


		// Thumbnail Selectors
		' .spectra-image-gallery__media-thumbnail-blurrer': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnit,
				imageBorderTopLeftRadius,
				imageBorderTopRightRadius,
				imageBorderBottomRightRadius,
				imageBorderBottomLeftRadius,
			),
			'-webkit-backdrop-filter': `blur( ${ generateCSSUnit(
				captionBackgroundBlurAmountFallback,
				'px'
			) } )`,
			'backdrop-filter': `blur( ${ generateCSSUnit(
				captionBackgroundBlurAmountFallback,
				'px'
			) } )`,
			'opacity': generateCSSUnit(
				captionBackgroundBlurOpacityFallback,
				'%'
			),
		},
		' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-blurrer': {
			'opacity': generateCSSUnit(
				captionBackgroundBlurOpacityHoverFallback,
				'%'
			),
		},

		// Caption Wrapper Selectors
		' .spectra-image-gallery__media-thumbnail-caption-wrapper--overlay': {
			'background-color': (
				( imageDisplayCaption ) ? (
					( 'hover' === captionVisibility ) ? (
						'rgba(0,0,0,0)'
					) : (
						captionBackgroundColor
					)
				) : (
					overlayColor
				)
			),
		},
		' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-caption-wrapper--overlay': {
			'background-color': (
				( imageDisplayCaption ) ? (
					( 'antiHover' === captionVisibility ) ? (
						'rgba(0,0,0,0)'
					) : (
						( 'always' === captionVisibility && captionSeparateColors ) ? (
							captionBackgroundColorHover
						) : (
							captionBackgroundColor
						)
					)
				) : (
					overlayColorHover
				)
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption-wrapper--bar-inside': {
			'-webkit-align-items': getMatrixAlignment( imageCaptionAlignment, 1, 'flex' ),
			'align-items': getMatrixAlignment( imageCaptionAlignment, 1, 'flex' ),
			'-webkit-justify-content': getMatrixAlignment( imageCaptionAlignment, 2, 'flex' ),
			'justify-content': getMatrixAlignment( imageCaptionAlignment, 2, 'flex' ),
		},

		// Caption Selectors

		' .spectra-image-gallery__media-thumbnail-caption': {
			'color': ( 'hover' === captionVisibility ) ? 'rgba(0,0,0,0)' : captionColor,
			'text-align': getMatrixAlignment( imageCaptionAlignment, 2 ),
			'font-family': ( 'Default' === captionFontFamily ) ? '' : captionFontFamily,
			'font-weight': captionFontWeight,
			'font-style': captionFontStyle,
			'text-decoration': captionDecoration,
			'text-transform': captionTransform,
			'font-size': generateCSSUnit( captionFontSize, captionFontSizeType ),
			'line-height': generateCSSUnit( captionLineHeight, captionLineHeightType ),
			'padding-top': generateCSSUnit(
				captionPaddingTop,
				captionPaddingUnit
			),
			'padding-right': generateCSSUnit(
				captionPaddingRight,
				captionPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				captionPaddingBottom,
				captionPaddingUnit
			),
			'padding-left': generateCSSUnit(
				captionPaddingLeft,
				captionPaddingUnit
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption--overlay': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnit,
				imageBorderTopLeftRadius,
				imageBorderTopRightRadius,
				imageBorderBottomRightRadius,
				imageBorderBottomLeftRadius,
			),
			'-webkit-align-items': getMatrixAlignment( imageCaptionAlignment, 1, 'flex' ),
			'align-items': getMatrixAlignment( imageCaptionAlignment, 1, 'flex' ),
			'-webkit-justify-content': getMatrixAlignment( imageCaptionAlignment, 2, 'flex' ),
			'justify-content': getMatrixAlignment( imageCaptionAlignment, 2, 'flex' ),
		},		
		' .spectra-image-gallery__media-thumbnail-caption--bar-inside': {
			'background-color': ( 'hover' === captionVisibility ) ? 'rgba(0,0,0,0)' : captionBackgroundColor,
			...mainTitleBorderCSS,
			'border-color': ( 'hover' === captionVisibility ) ? 'rgba(0,0,0,0)' : mainTitleBorderColor,
		},
		' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-caption--bar-inside': {
			'background-color': (
				( captionVisibility === 'antiHover' ) ? (
					'rgba(0,0,0,0)'
				) : (
					( 'always' === captionVisibility && captionSeparateColors ) ? (
						captionBackgroundColorHover
					) : (
						captionBackgroundColor
					)
				)
			),
			'border-color': (
				( 'antiHover' === captionVisibility ) ? (
					'rgba(0,0,0,0)'
				) : (
					( 'always' === captionVisibility && captionSeparateColors ) ? (
						mainTitleBorderHColor
					) : (
						mainTitleBorderColor
					)
				)
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption--bar-outside': {
			'background-color': captionBackgroundColor,
			...mainTitleBorderCSS,
		},
		' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-caption--bar-outside': {
			'background-color': captionSeparateColors ? captionBackgroundColorHover : captionBackgroundColor,
			'border-color': captionSeparateColors ? mainTitleBorderHColor : mainTitleBorderColor,
		},
		' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-caption': {
			'color': (
				( 'antiHover' === captionVisibility ) ? (
					'rgba(0,0,0,0)'
				) : (
					( 'always' === captionVisibility && captionSeparateColors ) ? (
						captionColorHover
					) : (
						captionColor
					)
				)
			),
		},
	};

	const tabletSelectors = {
		'.wp-block-uagb-image-gallery': {
			'padding': generateSpacing(
				feedMarginUnitTab,
				feedMarginTopTabFallback,
				feedMarginRightTabFallback,
				( 'carousel' === feedLayout ) ? ( feedMarginBottomTabFallback + 5 ) : feedMarginBottomTabFallback, // Editor Only Fix for the Carousel Dots.
				feedMarginLeftTabFallback
			),
		},
		' .spectra-image-gallery__control-arrows--carousel': {
			...arrowBorderCSSTablet,
		},
		' .spectra-image-gallery__control-button': {
			'padding': generateSpacing(
				paginateButtonPaddingUnitTab,
				paginateButtonPaddingTopTab,
				paginateButtonPaddingRightTab,
				paginateButtonPaddingBottomTab,
				paginateButtonPaddingLeftTab
			),
			'font-size': generateCSSUnit( loadMoreFontSizeTab, loadMoreFontSizeType ),
			'line-height': generateCSSUnit( loadMoreLineHeightTab, loadMoreLineHeightType ),
			...btnBorderCSSTablet,
		},
		' .spectra-image-gallery__layout--grid': {
			'grid-gap': generateCSSUnit(
				gridImageGapTabFallback,
				gridImageGapUnitTab
			),
		},
		' .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnitTab,
				gridImageGapTabFallback,
			),
		},
		' .spectra-image-gallery__layout--carousel .spectra-image-gallery__media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnitTab,
				gridImageGapTabFallback,
			),
		},
		' .spectra-image-gallery__layout--tiled': {
			'grid-gap': generateCSSUnit(
				gridImageGapTabFallback,
				gridImageGapUnitTab
			),
		},
		' .spectra-image-gallery__media': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnitTablet,
				imageBorderTopLeftRadiusTablet,
				imageBorderTopRightRadiusTablet,
				imageBorderBottomRightRadiusTablet,
				imageBorderBottomLeftRadiusTablet,
			),
		},
		' .spectra-image-gallery__media-thumbnail-blurrer': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnitTablet,
				imageBorderTopLeftRadiusTablet,
				imageBorderTopRightRadiusTablet,
				imageBorderBottomRightRadiusTablet,
				imageBorderBottomLeftRadiusTablet,
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption-wrapper': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnitTablet,
				imageBorderTopLeftRadiusTablet,
				imageBorderTopRightRadiusTablet,
				imageBorderBottomRightRadiusTablet,
				imageBorderBottomLeftRadiusTablet,
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption--overlay': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnitTablet,
				imageBorderTopLeftRadiusTablet,
				imageBorderTopRightRadiusTablet,
				imageBorderBottomRightRadiusTablet,
				imageBorderBottomLeftRadiusTablet,
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption': {
			'font-size': generateCSSUnit( captionFontSizeTab, captionFontSizeType ),
			'line-height': generateCSSUnit( captionLineHeightTab, captionLineHeightType ),
			'padding-top': generateCSSUnit(
				captionPaddingTopTab,
				captionPaddingUnitTab
			),
			'padding-right': generateCSSUnit(
				captionPaddingRightTab,
				captionPaddingUnitTab
			),
			'padding-bottom': generateCSSUnit(
				captionPaddingBottomTab,
				captionPaddingUnitTab
			),
			'padding-left': generateCSSUnit(
				captionPaddingLeftTab,
				captionPaddingUnitTab
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption--bar-inside': {
			...mainTitleBorderCSSTablet,
		},

		' .spectra-image-gallery__media-thumbnail-caption--bar-outside': {
			...mainTitleBorderCSSTablet,
		},
	};

	const mobileSelectors = {
		'.wp-block-uagb-image-gallery': {
			'padding': generateSpacing(
				feedMarginUnitMob,
				feedMarginTopMobFallback,
				feedMarginRightMobFallback,
				( 'carousel' === feedLayout ) ? ( feedMarginBottomMobFallback + 5 ) : feedMarginBottomMobFallback, // Editor Only Fix for the Carousel Dots.
				feedMarginLeftMobFallback
			),
		},
		' .spectra-image-gallery__control-arrows--carousel': {
			...arrowBorderCSSMobile,
		},
		' .spectra-image-gallery__control-button': {
			'padding': generateSpacing(
				paginateButtonPaddingUnitMob,
				paginateButtonPaddingTopMob,
				paginateButtonPaddingRightMob,
				paginateButtonPaddingBottomMob,
				paginateButtonPaddingLeftMob
			),
			'font-size': generateCSSUnit( loadMoreFontSizeMob, loadMoreFontSizeType ),
			'line-height': generateCSSUnit( loadMoreLineHeightMob, loadMoreLineHeightType ),
			...btnBorderCSSMobile,
		},
		' .spectra-image-gallery__layout--grid': {
			'grid-gap': generateCSSUnit(
				gridImageGapMobFallback,
				gridImageGapUnitMob
			),
		},
		' .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnitMob,
				gridImageGapMobFallback,
			),
		},
		' .spectra-image-gallery__layout--carousel .spectra-image-gallery__media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnitMob,
				gridImageGapMobFallback,
			),
		},
		' .spectra-image-gallery__layout--tiled': {
			'grid-gap': generateCSSUnit(
				gridImageGapMobFallback,
				gridImageGapUnitMob
			),
		},
		' .spectra-image-gallery__media': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnitMobile,
				imageBorderTopLeftRadiusMobile,
				imageBorderTopRightRadiusMobile,
				imageBorderBottomRightRadiusMobile,
				imageBorderBottomLeftRadiusMobile,
			),
		},
		' .spectra-image-gallery__media-thumbnail-blurrer': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnitMobile,
				imageBorderTopLeftRadiusMobile,
				imageBorderTopRightRadiusMobile,
				imageBorderBottomRightRadiusMobile,
				imageBorderBottomLeftRadiusMobile,
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption-wrapper': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnitMobile,
				imageBorderTopLeftRadiusMobile,
				imageBorderTopRightRadiusMobile,
				imageBorderBottomRightRadiusMobile,
				imageBorderBottomLeftRadiusMobile,
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption--overlay': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnitMobile,
				imageBorderTopLeftRadiusMobile,
				imageBorderTopRightRadiusMobile,
				imageBorderBottomRightRadiusMobile,
				imageBorderBottomLeftRadiusMobile,
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption': {
			'font-size': generateCSSUnit( captionFontSizeMob, captionFontSizeType ),
			'line-height': generateCSSUnit( captionLineHeightMob, captionLineHeightType ),
			'padding-top': generateCSSUnit(
				captionPaddingTopMob,
				captionPaddingUnitMob
			),
			'padding-right': generateCSSUnit(
				captionPaddingRightMob,
				captionPaddingUnitMob
			),
			'padding-bottom': generateCSSUnit(
				captionPaddingBottomMob,
				captionPaddingUnitMob
			),
			'padding-left': generateCSSUnit(
				captionPaddingLeftMob,
				captionPaddingUnitMob
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption--bar-inside': {
			...mainTitleBorderCSSMobile,
		},

		' .spectra-image-gallery__media-thumbnail-caption--bar-outside': {
			...mainTitleBorderCSSMobile,
		},
	};

	// Background Effect based styling.
	switch( captionBackgroundEffect ){
		case 'none':
			selectors[ ' .spectra-image-gallery__media-thumbnail' ] = {
				...selectors[ ' .spectra-image-gallery__media-thumbnail' ],
				'-webkit-filter': `none`,
				'filter': `none`,
			};
			break;
		case 'grayscale':
		case 'sepia':
			selectors[ ' .spectra-image-gallery__media-thumbnail' ] = {
				...selectors[ ' .spectra-image-gallery__media-thumbnail' ],
				'-webkit-filter': `${ captionBackgroundEffect }( ${ generateCSSUnit(
					captionBackgroundEffectAmountFallback,
					'%'
				) } )`,
				'filter': `${ captionBackgroundEffect }( ${ generateCSSUnit(
					captionBackgroundEffectAmountFallback,
					'%'
				) } )`,
			};
			break;
	};	
	switch( captionBackgroundEffectHover ){
		case 'none':
			selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail' ] = {
				'-webkit-filter': `none`,
				'filter': `none`,
			};
			break;
		case 'grayscale':
		case 'sepia':
			selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail' ] = {
				'-webkit-filter': `${ captionBackgroundEffectHover }( ${ generateCSSUnit(
					captionBackgroundEffectAmountHoverFallback,
					'%'
				) } )`,
				'filter': `${ captionBackgroundEffectHover }( ${ generateCSSUnit(
					captionBackgroundEffectAmountHoverFallback,
					'%'
				) } )`,
			};
			break;
	};
	if ( ! captionBackgroundEnableBlur ){
		selectors[ ' .spectra-image-gallery__media-thumbnail-blurrer' ] = {
			...selectors[ ' .spectra-image-gallery__media-thumbnail-blurrer' ],
			'-webkit-backdrop-filter': 'none',
			'backdrop-filter': 'none',
		};
	}

	// Caption Type based styling.
	if ( imageDisplayCaption && ( 'bar-outside' === captionDisplayType && 'center' === getMatrixAlignment( imageCaptionAlignment, 1 ) ) ) {
		selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper' ] = {
			...selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper' ],
			'margin-top': generateCSSUnit(
				captionGapFallback,
				captionGapUnit
			),
		};
	}

	// Carousel based styling.
	if ( feedLayout === 'carousel' ) {
		if ( carouselSquares ){
			selectors[ ' .spectra-image-gallery__media--carousel' ] = {
				'aspect-ratio': 1,
			};
			selectors[ ' .spectra-image-gallery__media-thumbnail--carousel' ] = {
				'height': '100%',
				'width': '100%',
				'-o-object-fit': 'cover',
				'object-fit': 'cover',
			};
		}
	}

	// Masonry based styling.
	if ( feedLayout === 'masonry' && feedPagination && ! paginateUseLoader ){ 
		selectors[ ' .spectra-image-gallery__control-wrapper' ] = {
			'min-height': '58px',
			'-webkit-justify-content': paginateButtonAlign,
			'justify-content': paginateButtonAlign,
			'-webkit-align-items': 'center',
			'align-items': 'center',
		};
	}

	// New Zoom Effect on Hover.
	switch ( imageZoomType ) {
		case 'zoom-in':
			if( imageEnableZoom ){
				selectors[ ' .spectra-image-gallery__media-thumbnail' ] = {
					...selectors[ ' .spectra-image-gallery__media-thumbnail' ],
					'transform': 'scale3d(1.005, 1.005, 1.005)',
				};
				selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail' ] = {
					...selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail' ],
					'transform': 'scale3d(1.1, 1.1, 1.1)',
				};
			}
			break;
		case 'zoom-out':
			if( imageEnableZoom ){
				selectors[ ' .spectra-image-gallery__media-thumbnail' ] = {
					...selectors[ ' .spectra-image-gallery__media-thumbnail' ],
					'transform': 'scale3d(1.1, 1.1, 1.1)',
				};
				selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail' ] = {
					...selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail' ],
					'transform': 'scale3d(1.005, 1.005, 1.005)',
				};
			}
			break;
	}

	const baseSelector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	let stylingCss = generateCSS( selectors, baseSelector );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ baseSelector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ baseSelector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
