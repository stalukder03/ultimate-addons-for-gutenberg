import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import React, { useMemo, useEffect } from 'react';
import { select } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/slider-child' ];
import domReady from '@wordpress/dom-ready';

import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Manipulation, Virtual, EffectFlip } from 'swiper';

const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		clientId,
		attributes: { slide_content },
	} = props;

	const swiperSelector = '#block-' + clientId + ' .uagb-swiper';

	const {
		transitionSpeed,
		autoplay,
		autoplaySpeed,
		slideItem,
		block_id,
		arrowDots,
		transitionEffect,
		infiniteLoop
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
		className: `uagb-block-${ block_id } ${hasChildrenClass}`,
	} );

	const swiperProps = useBlockProps( {
		className: `swiper-wrapper`
	} );

    const innerBlocksProps = useInnerBlocksProps(
        swiperProps,
        { 
			allowedBlocks: ALLOWED_BLOCKS,
			template : getSliderTemplate,
			renderAppender: false
		}
    );

	const settings = {
		slidesPerView: 1,
		autoplay: autoplay ? {
			delay: autoplaySpeed,
			disableOnInteraction: true,
			pauseOnMouseEnter: true
		} : false,
		spaceBetween: 30,
		fadeEffect: {
			crossFade: true
		},
		flipEffect: {
			slideShadows: false,
		},
		observer: true,
		effect: transitionEffect,
		speed: transitionSpeed,
		loop: false,
		pagination: 'arrows' === arrowDots ? false : {
			el: '.swiper-pagination',
			clickable: true,
			hideOnClick: false
		},
		navigation: 'dots' === arrowDots ? false : {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	}

	useEffect( () => {

		setTimeout( function()  {

			new Swiper( swiperSelector, {
				...settings,
				modules: [Navigation, Pagination, Scrollbar,Autoplay,EffectFade, EffectFlip, Manipulation, Virtual],
			} );
		
		}, 200 );
		
	}, [] );

	useEffect( () => {

		const swiperInstance = document.querySelector( swiperSelector ).swiper;

		setTimeout( function()  {
		
			if( swiperInstance ) {
				swiperInstance.updateSlidesClasses();
			}

		}, 500 );

	}, [ props ] );
	
	
	useEffect( () => {
		
		const swiperInstance = document.querySelector( swiperSelector ).swiper;
		
		if( swiperInstance ) {

			swiperInstance.destroy();

			new Swiper( swiperSelector, {
				...settings,
				modules: [Navigation, Pagination, Scrollbar,Autoplay,EffectFade, EffectFlip, Manipulation, Virtual],
			} );
		}

	}, [ transitionSpeed,
		autoplay,
		autoplaySpeed,
		arrowDots,
		transitionEffect,
		infiniteLoop 
	] );
	

	return (
		<div
			{ ...blockProps }
			key = { block_id }
		>
				<div className='uagb-slides uagb-swiper'>	
					<div
						
						{ ...innerBlocksProps }
					/>

					{  'arrows' !== arrowDots && 
						<div className="swiper-pagination"></div>
					}	

					{ 'dots' !== arrowDots && 
						<>
						<div className="swiper-button-prev"></div>
						<div className="swiper-button-next"></div>
						</>
					}
				</div>
		</div>
	);
};
export default React.memo( Render );
