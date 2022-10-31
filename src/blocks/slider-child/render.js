import { InnerBlocks } from '@wordpress/block-editor';
import React from 'react';
import { select } from '@wordpress/data';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	props = props.parentProps;
	const {
		attributes,
		deviceType,
		clientId
	} = props;

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
