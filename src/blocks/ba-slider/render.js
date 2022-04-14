import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import React, { useLayoutEffect, useMemo, useEffect, useState } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {

    props = props.parentProps;
	const deviceType = useDeviceType();
	const { className, clientId, attributes, setAttributes } = props;

    const {
        block_id,
        classMigrate,
    } = attributes;

    return(
        <div
        className={ classnames(
            className,
            `uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
            `uagb-block-${ block_id }`
        ) }
        >

        </div>
    );
}

export default React.memo( Render );
