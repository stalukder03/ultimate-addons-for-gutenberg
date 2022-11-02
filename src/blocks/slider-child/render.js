import { InnerBlocks } from '@wordpress/block-editor';
import React from 'react';
import { __ } from '@wordpress/i18n';

const Render = () => {

	const SLIDE_CHILD_TEMPLATE = [
		[ 'core/paragraph', { placeholder: __( 'Type / to choose a block', 'ultimate-addons-for-gutenberg' ) } ],
	];

	const ALLOWED_BLOCKS = wp.blocks.getBlockTypes().map( block => block.name ).filter( blockName =>  [ 'uagb/slider','uagb/slider-child' ].indexOf( blockName ) === -1 );

	return (
		<div className='swiper-content' >
			<InnerBlocks
				template={ SLIDE_CHILD_TEMPLATE }
				templateLock ={false}
				renderAppender = { false } 
				allowedBlocks = { ALLOWED_BLOCKS }
			/>
		</div>
	);
};

export default React.memo( Render );
