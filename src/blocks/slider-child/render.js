import { InnerBlocks } from '@wordpress/block-editor';
import React from 'react';
import { __ } from '@wordpress/i18n';

const Render = () => {

	const SLIDE_CHILD_TEMPLATE = [
		[ 'core/paragraph', { placeholder: __( 'Type / to choose a block', 'ultimate-addons-for-gutenberg' ) } ],
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
