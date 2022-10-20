import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import React, { useMemo, useRef, useEffect } from 'react';
import { select } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/slider-child' ];
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import UAGB_Block_Icons from '@Controls/block-icons';
import domReady from '@wordpress/dom-ready';

import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		clientId,
		attributes: { slide_content, slideItem },
	} = props;

	const blockName = props.name.replace( 'uagb/', '' );
	const sliderWrapAdded = false;

	const {
		pauseOnHover,
		infiniteLoop,
		transitionSpeed,
		arrowDots,
		arrowSize,
		arrowBorderSize,
		arrowBorderRadius,
		autoplay,
		columns,
		tcolumns,
		mcolumns,
		autoplaySpeed,
		arrowColor,
	} = attributes;

	const sliderRef = useRef();

	const NextArrow = ( { onClick } ) => {
		return (
			<button
				type="button"
				data-role="none"
				className="slick-next slick-arrow"
				aria-label="Next"
				tabIndex="0"
				style={ {
					borderColor: arrowColor,
					borderRadius: arrowBorderRadius,
					borderWidth: getFallbackNumber( arrowBorderSize, 'arrowBorderSize', blockName ),
				} }
				onClick = { onClick }
			>
				{ UAGB_Block_Icons.carousel_right }
			</button>
		);
	};

	const PrevArrow = ( { onClick } ) => {
		return (
			<button
				type="button"
				data-role="none"
				className="slick-prev slick-arrow"
				aria-label="Previous"
				tabIndex="0"
				style={ {
					borderColor: arrowColor,
					borderRadius: arrowBorderRadius,
					borderWidth: getFallbackNumber( arrowBorderSize, 'arrowBorderSize', blockName ),
				} }
				onClick= { onClick }
			>
				{ UAGB_Block_Icons.carousel_left }
			</button>
		);
	};

	const dots =
		'dots' === arrowDots || 'arrows_dots' === arrowDots ? true : false;
	const arrows =
		'arrows' === arrowDots || 'arrows_dots' === arrowDots ? true : false;

	const settings = {
		accessibility: false,
		// slidesToShow: 1, // eslint-disable-line no-nested-ternary
		// slidesToScroll: 1,
		autoplaySpeed: getFallbackNumber( autoplaySpeed, 'autoplaySpeed', blockName ),
		autoplay,
		infinite: infiniteLoop,
		pauseOnHover,
		speed: getFallbackNumber( transitionSpeed, 'transitionSpeed', blockName ),
		arrows,
		dots,
		rtl: false,
		draggable: false,
		nextArrow: <NextArrow arrowSize={ arrowSize } onClick={sliderRef.slickNext} />,
		prevArrow: <PrevArrow arrowSize={ arrowSize } onClick={sliderRef.slickPrev} />,
	};

	const {
		block_id,
		contentWidth
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
	} );

    const innerBlocksProps = useInnerBlocksProps(
        swiperProps,
        { 
			allowedBlocks: ALLOWED_BLOCKS,
			template : getSliderTemplate 
		}
    );


	useEffect( () => {

		setTimeout( function()  {
		
			const sliderChilds = document.querySelectorAll( '[data-type="uagb/slider-child"]' );

			if( sliderChilds ) {

				[].forEach.call( sliderChilds, function( div ) {

					const wrapper = document.createElement( 'div' );

					// do whatever
					wrapper.classList.add( 'swiper-slide' );

					div.parentNode.insertBefore( wrapper, div );
					
					wrapper.appendChild( div );
					
				} );

				new Swiper( '.swiper', {
					// Install modules
					modules: [Navigation, Pagination, Scrollbar],
					speed: 500,
					navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					},
					// ...
				} );
			}
				
		} );
		
		
	}, [] )
	

	return (
		<div
			{ ...blockProps }
			key = { block_id }
		>
			<div className='uagb-slider'
			>	
				<div className='uagb-slides swiper uagb-slick-carousel uagb-slide__arrow-outside'>	
					<div
						
						{ ...innerBlocksProps }
					/>
					<div className="swiper-pagination"></div>

					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</div>
			</div>
		</div>
	);
};
export default React.memo( Render );
