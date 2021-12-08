/**
 * BLOCK: Animated Headline - settings
 */

import React from 'react';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import MultiButtonsControl from '@Components/multi-buttons-control';

import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
} from '@wordpress/block-editor';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;
	const { attributes, setAttributes } = props;
	const {
		headingTag,
	} = attributes;

	
	const generalPanel = () => {
		return (
			<UAGAdvancedPanelBody>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Heading Tag',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: headingTag,
						label: 'headingTag',
					} }
					options={ [
						{
							value: 'h1',
							label: __( 'H1', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h2',
							label: __( 'H2', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h3',
							label: __( 'H3', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h4',
							label: __( 'H4', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h5',
							label: __( 'H5', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h6',
							label: __( 'H6', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<div>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalPanel() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</div>
	);
};
export default React.memo( Settings );
