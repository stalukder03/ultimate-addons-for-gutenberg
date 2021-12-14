import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import React from 'react';

const Render = ( props ) => {
	props = props.parentProps;

	const { attributes, className } = props;

	const { 
		block_id,
	} = attributes;

	return (
		<div
			className={ classnames(
				className,
				`uagb-block-${ block_id }`
			) }
		>
			<InnerBlocks />
		</div>
	);
};
export default React.memo( Render );
