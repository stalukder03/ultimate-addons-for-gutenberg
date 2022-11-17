import classnames from 'classnames';
import React, { useLayoutEffect, useEffect } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import styles from './editor.lazy.scss';

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
	const { attributes, setAttributes } = props;

    const {
        block_id,
    } = attributes;

    return(
        <div
            className={ classnames(
                `uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
                `uagb-block-${ block_id }`
            ) }
        >
            Yo
        </div>
    );
};

export default Render;
