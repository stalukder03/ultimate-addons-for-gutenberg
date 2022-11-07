import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import React, { useMemo } from 'react';
import { select } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/slider-child' ];
import { useDeviceType } from '@Controls/getPreviewType';

import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Manipulation, EffectFlip } from 'swiper';

import { Swiper } from 'swiper/react';
const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		clientId,
		attributes: { slide_content },
	} = props;

	const deviceType = useDeviceType();

	const {
		isPreview,
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
		className: `uagb-block-${ block_id } ${hasChildrenClass} uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
	} );

	const swiperProps = useBlockProps( {
		className: `swiper-wrapper`,
		slot: 'container-start'
	} );

    const innerBlocksProps = useInnerBlocksProps(
        swiperProps,
        {
			allowedBlocks: ALLOWED_BLOCKS,
			template : getSliderTemplate,
			renderAppender: false
		}
    );

	const setSwiperInstance = ( swiper ) => {
		props.setAttributes( { swiperInstance: swiper } );
	}

	return (
		isPreview ? '' :

		<div
			{ ...blockProps }
			key = { block_id }
		>
				<div className='uagb-slides uagb-swiper'>
					<Swiper
						onSwiper={setSwiperInstance}
						modules={[Navigation, Pagination, Scrollbar,Autoplay,EffectFade, EffectFlip, Manipulation]}
						autoplay={
							autoplay ? {
								delay: autoplaySpeed,
								disableOnInteraction: true,
								pauseOnMouseEnter: true
							}
							: false 
						}
						speed={transitionSpeed}
						pagination={ 
							'arrows' === arrowDots ? {
								clickable: true,
							} : false 
						}
						loop={false}
						effect={transitionEffect}
						navigation={true}
						fadeEffect={{
							crossFade: true
						}}
						flipEffect={{
							slideShadows: false,
						}}
					>
					<div 
						{ ...innerBlocksProps }
					/>
					</Swiper>
				</div>
		</div>
	);
};
export default React.memo( Render );
