import { InnerBlocks } from '@wordpress/block-editor';
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
	const ALLOWED_BLOCKS = parentBlocks.map( block => block.name ).filter( blockName => [ 'uagb/slider' ].indexOf( blockName ) === -1 );

	return (
		<div className='swiper-content'>
			<InnerBlocks
				templateLock ={false}
				allowedBlocks = { ALLOWED_BLOCKS }
				renderAppender = { innerBlocks.length > 0
					? undefined
					: InnerBlocks.ButtonBlockAppender }
			/>
		</div>
	);
};

export default React.memo( Render );
