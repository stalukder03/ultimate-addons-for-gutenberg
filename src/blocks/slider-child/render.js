import { InnerBlocks } from '@wordpress/block-editor';
import React from 'react';


const Render = ( props ) => {

	props = props.parentProps;

	const {
		innerBlocks,
	} = props;

	const ALLOWED_BLOCKS = wp.blocks.getBlockTypes().map( block => block.name ).filter( blockName =>  [ 'uagb/slider','uagb/slider-child' ].indexOf( blockName ) === -1 );

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
