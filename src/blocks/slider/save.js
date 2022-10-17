import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import React, { useMemo, useRef } from 'react';
import { select } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/slider-child' ];
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import Slider from 'react-slick';


export default function save( props ) {

    props = props.parentProps;
	const {
		attributes,
		clientId,
		attributes: { slide_content, slideItem },
	} = props;

	const blockName = props.name.replace( 'uagb/', '' );

	const {
		pauseOnHover,
		infiniteLoop,
		transitionSpeed,
		arrowDots,
		arrowSize,
		arrowBorderSize,
		arrowBorderRadius,
		autoplay,
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
		slidesToShow: 1, // eslint-disable-line no-nested-ternary
		slidesToScroll: 1,
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

    const innerBlocksProps = useInnerBlocksProps(
        blockProps,
        { 
			allowedBlocks: ALLOWED_BLOCKS,
			template : getSliderTemplate 
		}
    );

    return (
		<>
			<div
				{ ...blockProps }
				key = { block_id }
			>
				<div className='uagb-slider'
				>	
					<div className='uagb-slides'>
						<Slider
							className={ classnames(
								'is-carousel',
								'uagb-slider__items',
							) }
							{ ...settings }
							ref={ sliderRef }
						>
							<div 
								{...innerBlocksProps}
							/>
						</Slider>
					</div>
				</div>
			</div>
		</>
	);

    
}