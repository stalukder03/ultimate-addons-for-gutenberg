import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import React, { useLayoutEffect } from 'react';
import styles from './editor.lazy.scss';
import { format } from '@wordpress/date';

import { __ } from '@wordpress/i18n';
import { useDeviceType } from '@Controls/getPreviewType';

import { createBlock } from '@wordpress/blocks';

import { RichText } from '@wordpress/block-editor';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	props = props.parentProps;
	const deviceType = useDeviceType();

	console.log( props );

	return (
		<>{}</>
	);
};

export default React.memo( Render );
