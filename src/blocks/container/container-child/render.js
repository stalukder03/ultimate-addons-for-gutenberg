import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { InnerBlocks } from '@wordpress/block-editor';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;

	const { 
		block_id,
	} = attributes;

	return (
		<div
			className={ classnames(
				`uagb-block-${ block_id }`
			) }
		>
			<InnerBlocks />
		</div>
	);
};
export default React.memo( Render );
