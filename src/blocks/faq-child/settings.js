import { InspectorControls } from '@wordpress/block-editor';
import ResponsiveBorder from '@Components/responsive-border';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import React from 'react';
import { __ } from '@wordpress/i18n';

const Settings = (props) => {
	props = props.parentProps;

	const { setAttributes, attributes, deviceType } = props;

	const commonStyle = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<p className="uagb-settings-notice">
					{ __(
						'For the common styling options please select the Parent Block.'
					) }
				</p>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'inner' }
					disabledBorderTitle= {false}
					attributes={ attributes }
					deviceType={deviceType}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return <InspectorControls>
			<InspectorTabs tabs={ [ 'style', 'advance' ] }>
				<InspectorTab { ...UAGTabs.style }>
					{ commonStyle() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.advance }></InspectorTab>
			</InspectorTabs>
		</InspectorControls>;
};

export default React.memo( Settings );
