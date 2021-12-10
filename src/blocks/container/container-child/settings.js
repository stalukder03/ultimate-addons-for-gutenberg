import { InspectorControls } from '@wordpress/block-editor';
import React from 'react';
import { __ } from '@wordpress/i18n';

const Settings = () => {
	const containerChildControls = () => {
		return (
			<p className="uagb-settings-notice">
				{ __(
					'For the styling options please select the Parent Block.'
				) }
			</p>
		);
	};

	return <InspectorControls>{ containerChildControls }</InspectorControls>;
};

export default React.memo( Settings );
