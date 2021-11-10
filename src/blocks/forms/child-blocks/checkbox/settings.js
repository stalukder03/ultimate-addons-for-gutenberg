import React from 'react';
import { __ } from '@wordpress/i18n';

import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';

import { InspectorControls } from '@wordpress/block-editor';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { checkboxRequired, uniqueId } = attributes;

	const checkboxInspectorControls = () => {
		return (
			<PanelBody initialOpen={ true }>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ checkboxRequired }
					onChange={ () =>
						setAttributes( {
							checkboxRequired: ! checkboxRequired,
						} )
					}
				/>
				<TextControl
					label="ID"
					value={ uniqueId }
					onChange={ ( value ) =>
						setAttributes( { uniqueId: value } )
					}
					placeholder={ __(
						'Please make sure ID is unique.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
			</PanelBody>
		);
	};

	return (
		<InspectorControls>
			<InspectorTabs tabs={ [ 'general', 'advance' ] }>
				<InspectorTab { ...UAGTabs.general }>
					{ checkboxInspectorControls() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.advance }></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};

export default React.memo( Settings );
