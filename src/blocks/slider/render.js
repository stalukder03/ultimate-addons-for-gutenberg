import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import React, { useMemo, useEffect, useRef } from 'react';
import { select } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/slider-child' ];
import { useDeviceType } from '@Controls/getPreviewType';

import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

// import { Swiper } from 'swiper/react';
const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		clientId,
		attributes: { slide_content },
	} = props;

	const deviceType = useDeviceType();
	const swiperRef = useRef();
	const sliderWrapRef = React.useRef();
	const sliderPaginationRef = useRef();
	const sliderNavPrevRef = useRef();
	const sliderNavNextRef = useRef();

	const {
		isPreview,
		transitionSpeed,
		slideItem,
		block_id,
		transitionEffect,
		swiperInstance,
		displayArrows,
		displayDots
	} = attributes;

	const getSliderTemplate = useMemo( () => {
		const childSlide = [];

		for ( let i = 0; i < slideItem; i++ ) {
			childSlide.push( [
				'uagb/slider-child',
				slide_content[ i ],
			] );
		}
		return childSlide;
	}, [ slideItem, slide_content ] );

	const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length;
	const hasChildrenClass = hasChildren ? 'uagb-slider-has-children' : '';
	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id } ${hasChildrenClass} uagb-slider-container uagb-slider-editor-wrap uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
	} );

    const innerBlocksProps = useInnerBlocksProps(
        {
			className: `swiper-wrapper`,
			slot: 'container-start'
		},
        {
			allowedBlocks: ALLOWED_BLOCKS,
			template : getSliderTemplate,
			renderAppender: false
		}
    );

	const setSwiperInstance = ( swiper ) => {
		props.setAttributes( { swiperInstance: swiper } );
	}

	useEffect( () => {

		setTimeout( () => {
			
			if( sliderWrapRef.current ) {

				new Swiper( sliderWrapRef.current, {
					modules: [Navigation, Pagination,Autoplay,EffectFade],
					speed: 400,
					spaceBetween: 20,
					loop: true,
					slidesPerView: 1.1,
					centeredSlides: true,
					pagination: {
						el: sliderPaginationRef.current,
						clickable: true,
					},
					allowTouchMove:false,
					navigation: {
						nextEl: sliderNavNextRef.current,
						prevEl: sliderNavPrevRef.current,
					},
					on: {
						init ( swiperInst ) {
							swiperRef.current = swiperInst;
							setSwiperInstance( swiperInst );
						},
					},
				} );
			}

		}, 500 );
		
	}, [] );

	useEffect( () => {
		
		const { getSelectedBlock } = select( 'core/block-editor' );
        const selectedBlockData = getSelectedBlock();

		if( selectedBlockData && 'uagb/slider-child' === selectedBlockData.name ) {
			const {getBlockIndex} = select( 'core/block-editor' );
			
			const slideIndex = getBlockIndex( selectedBlockData.clientId ); 

			if( swiperInstance ) {
				swiperInstance.slideTo( slideIndex, transitionSpeed, false );
			}
		}

		if( swiperInstance ) {
			swiperInstance.update();
		}
		
	}, [ props ] );

	return (
		isPreview ? '' :

		<div
			{ ...blockProps }
			key = { block_id }
		>
			<div className="swiper" ref={sliderWrapRef}>
				<div 
					{ ...innerBlocksProps }
				/>
				<div className="swiper-pagination" ref={sliderPaginationRef}></div>

				<div className="swiper-button-prev" ref={sliderNavPrevRef}></div>
				<div className="swiper-button-next" ref={sliderNavNextRef}></div>
			</div>
		</div>
	);
};
export default React.memo( Render );
