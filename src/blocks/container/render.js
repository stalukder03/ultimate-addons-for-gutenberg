import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import React from 'react';

const ALLOWED_BLOCKS = [ 'uagb/container-child' ];

const Render = ( props ) => {
	props = props.parentProps;
	const {
		attributes: {
			block_id,
		},
		setAttributes,
		className,
		deviceType,
	} = props;

	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				__experimentalMoverDirection={ 'vertical' }
			/>
		</div>
	);
};
export default React.memo( Render );
