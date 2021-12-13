import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import ResponsiveSlider from '@Components/responsive-slider';
import ResponsiveSelectControl from '@Components/responsive-select';

import MultiButtonsControl from '@Components/multi-buttons-control';

import { __ } from '@wordpress/i18n';

import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';

import { SelectControl } from '@wordpress/components';

// Extend component


import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
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
		directionDesktop,
		directionTablet,
		directionMobile,
		alignItemsDesktop,
		alignItemsTablet,
		alignItemsMobile,
		justifyContentDesktop,
		justifyContentTablet,
		justifyContentMobile,
		wrapDesktop,
		wrapTablet,
		wrapMobile,
	} = attributes;

	const generalSettings = () => {

		const directionOptions = {
			desktop: [
				{
					value: 'row',
					label: __( 'Row', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'column',
					label: __( 'Column', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'row-reverse',
					label: __( 'Row Reverse', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'column-reverse',
					label: __( 'Column Reverse', 'ultimate-addons-for-gutenberg' ),
				},
			],
		};

		const alignItemsOptions = {
			desktop: [
				{
					value: 'flex-start',
					label: __( 'Left', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'center',
					label: __( 'Center', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'flex-end',
					label: __( 'Right', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'stretch',
					label: __( 'Stretch', 'ultimate-addons-for-gutenberg' ),
				},
			],
		};

		const justifyContentOptions = {
			desktop: [
				{
					value: 'flex-start',
					label: __( 'Left', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'center',
					label: __( 'Center', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'flex-end',
					label: __( 'Right', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'space-between',
					label: __( 'Space Between', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'space-around',
					label: __( 'Space Around', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'space-evenly',
					label: __( 'Space Evenly', 'ultimate-addons-for-gutenberg' ),
				},
			],
		};

		const wrapOptions = {
			desktop: [
				{
					value: 'wrap',
					label: __( 'Wrap', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'no-wrap',
					label: __( 'No Wrap', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'wrap-reverse',
					label: __( 'Wrap Reverse', 'ultimate-addons-for-gutenberg' ),
				},
			],
		};

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
				
				<ResponsiveSelectControl
					label={ __( 'Direction', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: directionDesktop,
							label: 'directionDesktop',
						},
						tablet: {
							value: directionTablet,
							label: 'directionTablet',
						},
						mobile: {
							value: directionMobile,
							label: 'directionMobile',
						},
					} }
					options={ directionOptions }
					setAttributes={ setAttributes }
				/>

				<ResponsiveSelectControl
					label={ __( 'Align Items', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: alignItemsDesktop,
							label: 'alignItemsDesktop',
						},
						tablet: {
							value: alignItemsTablet,
							label: 'alignItemsTablet',
						},
						mobile: {
							value: alignItemsMobile,
							label: 'alignItemsMobile',
						},
					} }
					options={ alignItemsOptions }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSelectControl
					label={ __( 'Justify Content', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: justifyContentDesktop,
							label: 'justifyContentDesktop',
						},
						tablet: {
							value: justifyContentTablet,
							label: 'justifyContentTablet',
						},
						mobile: {
							value: justifyContentMobile,
							label: 'justifyContentMobile',
						},
					} }
					options={ justifyContentOptions }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSelectControl
					label={ __( 'Wrap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: wrapDesktop,
							label: 'wrapDesktop',
						},
						tablet: {
							value: wrapTablet,
							label: 'wrapTablet',
						},
						mobile: {
							value: wrapMobile,
							label: 'wrapMobile',
						},
					} }
					options={ wrapOptions }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<div>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
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
