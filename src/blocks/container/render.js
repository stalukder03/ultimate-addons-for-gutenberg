import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';

const Render = ( props ) => {

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;
	const {
		attributes,
		className,
		deviceType,
	} = props;

	const {
		block_id
	} = attributes;

	const direction = attributes[ 'direction' + deviceType ];
	
	const moverDirection = 'row' === direction ? 'horizontal' : 'vertical';

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
