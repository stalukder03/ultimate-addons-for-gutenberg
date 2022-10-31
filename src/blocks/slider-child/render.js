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

	const {
		block_id,
		backgroundType,
		backgroundVideo,
		isBlockRootParent,
		contentWidth,
	} = attributes;

	const { getBlockOrder } = select( 'core/block-editor' );

	const hasChildBlocks = getBlockOrder( clientId ).length > 0;

	const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length;

	return (
		<InnerBlocks
			templateLock ={false}
			renderAppender = { false } 
		/>
	);
};

export default React.memo( Render );
