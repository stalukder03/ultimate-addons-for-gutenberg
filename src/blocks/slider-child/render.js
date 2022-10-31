import { InnerBlocks } from '@wordpress/block-editor';
import React from 'react';

const Render = () => {

	const SLIDE_CHILD_TEMPLATE = [
		[ 'core/paragraph', { placeholder: 'Type / to choose a block' } ],
	];

	return (
		<div className='swiper-content' >
			<InnerBlocks
				template={ SLIDE_CHILD_TEMPLATE }
				templateLock ={false}
				renderAppender = { false } 
			/>
		</div>
	);
};

export default React.memo( Render );
