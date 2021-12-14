import { InspectorControls } from '@wordpress/block-editor';
import React from 'react';
import { __ } from '@wordpress/i18n';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import ResponsiveSlider from '@Components/responsive-slider';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = (props) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;
	const {
		widthDesktop,
		widthTablet,
		widthMobile,
		widthType,
		minHeightDesktop,
		minHeightTablet,
		minHeightMobile,
		minHeightType,
	} = attributes;

	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Container', 'ultimate-addons-for-gutenberg' ) }
			>
				<ResponsiveSlider
					label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: widthDesktop,
							label: 'widthDesktop',
						},
						tablet: {
							value: widthTablet,
							label: 'widthTablet',
						},
						mobile: {
							value: widthMobile,
							label: 'widthMobile',
						},
					} }
					min={ 0 }
					max={ 1600 }
					unit={ {
						value: widthType,
						label: 'widthType',
					} }
					units={ [
						{
							name: __(
								'PX',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
						{
							name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'vw',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Min Height', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: minHeightDesktop,
							label: 'minHeightDesktop',
						},
						tablet: {
							value: minHeightTablet,
							label: 'minHeightTablet',
						},
						mobile: {
							value: minHeightMobile,
							label: 'minHeightMobile',
						},
					} }
					min={ 0 }
					max={ 1440 }
					unit={ {
						value: minHeightType,
						label: 'minHeightType',
					} }
					units={ [
						{
							name: __(
								'PX',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( 'VH', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'vh',
						},
					] }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<InspectorControls>
			<InspectorTabs>
				<InspectorTab { ...UAGTabs.general }>
					{ generalSettings() }
				</InspectorTab>
				<InspectorTab
					{ ...UAGTabs.advance }
					parentProps={ props }
				></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};

export default React.memo( Settings );
