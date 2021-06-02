import { InspectorControls } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

const Settings = ( props ) => {
	props = props.parentProps;

	const faqChildControls = () => {
		return (
			<p className="uagb-settings-notice">
				{ __(
					'For the styling options please select the Parent Block.'
				) }
			</p>
		);
	};

	return <InspectorControls>{ faqChildControls }</InspectorControls>;
};

export default React.memo( Settings );
