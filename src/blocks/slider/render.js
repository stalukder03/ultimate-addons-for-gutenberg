import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import React, { useMemo, useRef, useEffect } from 'react';
import { select } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/slider-child' ];

import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Manipulation, Virtual } from 'swiper';

const Render = ( props ) => {

	const sliderElement = useRef();

	props = props.parentProps;
	const {
		attributes,
		setAttributes,
		clientId,
		attributes: { slide_content },
	} = props;

	const {
		infiniteLoop,
		transitionSpeed,
		autoplay,
		autoplaySpeed,
		slideItem,
		block_id,
		contentWidth,
		activeSlide
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
		className: `uagb-block-${ block_id } ${contentWidth} ${hasChildrenClass}`,
	} );

	const swiperProps = useBlockProps( {
		className: `swiper-wrapper`,
		ref: sliderElement
	} );

    const innerBlocksProps = useInnerBlocksProps(
        swiperProps,
        { 
			allowedBlocks: ALLOWED_BLOCKS,
			template : getSliderTemplate 
		}
    );

	const settings = {
		slidesPerView: 1,
		autoplay: autoplay ? {
			delay: autoplaySpeed,
		} : false,
		spaceBetween: 30,
		observer: true,
		// effect: 'fade', 
		// fadeEffect: {
		// 	crossFade: true
		// },
		speed: transitionSpeed,
		loop: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	}

	useEffect( () => {

		setTimeout( function()  {
		
			const sliderChilds = document.querySelectorAll( '[data-type="uagb/slider-child"]' );

			if( sliderChilds ) {

				[].forEach.call( sliderChilds, function( div ) {
					// div.classList.add( 'swiper-slide' );

					// create wrapper container
					const wrapper = document.createElement( 'div' );

					wrapper.classList.add( 'swiper-slide' );

					// insert wrapper before el in the DOM tree
					div.parentNode.insertBefore( wrapper, div );

					// move el into wrapper
					wrapper.appendChild( div );

				} );

				new Swiper( '.uagb-swiper', {
					...settings,
					modules: [Navigation, Pagination, Scrollbar,Autoplay,EffectFade, Manipulation, Virtual],
				} );
			}	
		}, 200 );
		
	}, [] );

	return (
		<div
			{ ...blockProps }
			key = { block_id }
		>
				<div className='uagb-slides uagb-swiper'>	
					<div
						
						{ ...innerBlocksProps }
					/>
					<div className="swiper-pagination"></div>

					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</div>
		</div>
	);
};
export default React.memo( Render );
