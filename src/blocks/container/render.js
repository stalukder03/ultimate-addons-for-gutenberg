import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import React from 'react';

const Render = ( props ) => {
	props = props.parentProps;
	const {
		attributes,
		setAttributes,
		className,
		deviceType,
	} = props;

	const {
		block_id
	} = attributes;

	let direction = attributes[ 'direction' + deviceType ];
	
	let moverDirection = 'row' === direction ? 'horizontal' : 'vertical';

	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			<InnerBlocks
				__experimentalMoverDirection={ moverDirection }
			/>
		</div>
	);
};
export default React.memo( Render );
