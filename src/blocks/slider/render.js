import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import React, { useMemo, useEffect } from 'react';
import { select } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/slider-child' ];

import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Manipulation, Virtual, EffectFlip } from 'swiper';

const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		clientId,
		attributes: { slide_content },
	} = props;

	const {
		transitionSpeed,
		autoplay,
		autoplaySpeed,
		slideItem,
		block_id,
		contentWidth,
		arrowDots,
		transitionEffect
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

			new Swiper( '.uagb-swiper', {
				...settings,
				modules: [Navigation, Pagination, Scrollbar,Autoplay,EffectFade, EffectFlip, Manipulation, Virtual],
			} );
		
		}, 200 );
		
	}, [] );
	
	useEffect( () => {
		
		const swiperInstance = document.querySelector( '.uagb-swiper' ).swiper;
		
		if( swiperInstance ) {

			swiperInstance.destroy();

			new Swiper( '.uagb-swiper', {
				...settings,
				modules: [Navigation, Pagination, Scrollbar,Autoplay,EffectFade, EffectFlip, Manipulation, Virtual],
			} );
		}

	}, [ props ] );
	

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
