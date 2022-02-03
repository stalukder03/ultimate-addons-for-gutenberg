/**
 * BLOCK: Count Down Timer
 */

import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {

	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;
	const deviceType = useDeviceType();

	return (
		<div
			className={ classnames(
				'uagb-count-down-timer__outer-wrap'
			) }
		>
		</div>
	);
};

export default React.memo( Render );
