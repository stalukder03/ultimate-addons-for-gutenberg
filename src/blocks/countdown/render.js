import classnames from 'classnames';
import React, { useLayoutEffect, useEffect } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import styles from './editor.lazy.scss';

import CountdownBox from './components/CountdownBox';

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
        endDateTime,
        showLabels,
        labelDays,
        labelHours,
        labelMinutes,
        labelSeconds,
    } = attributes;

    useEffect( () => {
		UAGBCountdown.init( '.uagb-block-' + block_id, attributes ) // eslint-disable-line no-undef
	}, [ block_id, endDateTime ] )

    return(
        <div
            className={ classnames(
                props.className,
                `uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
                `uagb-block-${ block_id }`,
                'wp-block-uagb-countdown',
            ) }
        >
            <CountdownBox unitType='days' showLabels={ showLabels } label={ labelDays } />
            <CountdownBox unitType='hours' showLabels={ showLabels } label={ labelHours } />
            <CountdownBox unitType='minutes' showLabels={ showLabels } label={ labelMinutes } />
            <CountdownBox unitType='seconds' showLabels={ showLabels } label={ labelSeconds } />
        </div>
    );
};

export default Render;