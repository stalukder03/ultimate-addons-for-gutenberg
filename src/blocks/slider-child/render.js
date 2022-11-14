import { InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';
import React from 'react';


const Render = ( props ) => {

	props = props.parentProps;

	const {
		innerBlocks,
	} = props;

	// Only parent blocks.
	const parentBlocks = wp.blocks.getBlockTypes().filter( function( item ) { 
		return ! item.parent
	} );

	// Hide slider block.
	const ALLOWED_BLOCKS = parentBlocks.map( block => block.name ).filter( blockName => [ 'uagb/slider', 'uagb/post-carousel', 'uagb/testimonial' ].indexOf( blockName ) === -1 );

	const innerBlocksProps = useInnerBlocksProps(
        {
			className: `swiper-content`,
			slot: 'container-start'
		},
        {
			allowedBlocks: ALLOWED_BLOCKS,
			renderAppender: innerBlocks.length > 0
				? undefined
				: InnerBlocks.ButtonBlockAppender,
			templateLock: false
		}
    );

	return (
		<div
			{ ...innerBlocksProps }
		/>
	);
};

export default React.memo( Render );
