import React from 'react';

import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Range from '@Components/range/Range.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
} from '@wordpress/block-editor';
import renderSVG from '@Controls/renderIcon';
import { Icon, ToggleControl } from '@wordpress/components';
import SpacingControl from '@Components/spacing-control';
import ColorSwitchControl from '@Components/color-switch-control';
import TextShadowControl from '@Components/text-shadow';
import UAGTabsControl from '@Components/tabs';
import ResponsiveBorder from '@Components/responsive-border'
import ResponsiveSlider from '@Components/responsive-slider';
import UAGSelectControl from '@Components/select-control';
// Extend component
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;
	const { attributes, deviceType, setAttributes } = props;
	const {
		block_id,
		separatorStyle,
		separatorAlign,
		separatorAlignTablet,
		separatorAlignMobile,
		separatorWidth,
		separatorWidthTablet,
		separatorWidthMobile,
		separatorWidthType,
		separatorColor,
		separatorThickness,
		thicknessUnit,
		separatorTopPadding,
		separatorRightPadding,
		separatorBottomPadding,
		separatorLeftPadding,
		separatorPaddingTopTablet,
		separatorPaddingRightTablet,
		separatorPaddingBottomTablet,
		separatorPaddingLeftTablet,
		separatorPaddingTopMobile,
		separatorPaddingRightMobile,
		separatorPaddingBottomMobile,
		separatorPaddingLeftMobile,
		separatorPaddingUnit,
		separatorMobilePaddingUnit,
		separatorTabletPaddingUnit,
		separatorPaddingLink,
	} = attributes;

	// Separator settings.
	const separatorGeneralSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Separator', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<UAGSelectControl
					label={ __(
						'Style',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: separatorStyle,
						label: 'separatorStyle',
					} }
					setAttributes={ setAttributes }
					options={ [
						{
							value: 'solid',
							label: __(
								'Solid',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'double',
							label: __(
								'Double',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dashed',
							label: __(
								'Dashed',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dotted',
							label: __(
								'Dotted',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					responsive={true}
					data={ {
						desktop: {
							value: separatorAlign,
							label: 'separatorAlign',
						},
						tablet: {
							value: separatorAlignTablet,
							label: 'separatorAlignTablet',
						},
						mobile: {
							value: separatorAlignMobile,
							label: 'separatorAlignMobile',
						},
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'left',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-left' ) }
								/>
							),
							tooltip: __(
								'Left',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'center',
							icon: (
								<Icon
									icon={ renderSVG(
										'fa fa-align-center'
									) }
								/>
							),
							tooltip: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'right',
							icon: (
								<Icon
									icon={ renderSVG(
										'fa fa-align-right'
									) }
								/>
							),
							tooltip: __(
								'Right',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const separatorStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title="Separator"
				initialOpen={ true }
			>
				<ResponsiveSlider
					label={ __(
						'Width',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: separatorWidth,
							label: 'separatorWidth',
						},
						tablet: {
							value: separatorWidthTablet,
							label: 'separatorWidthTablet',
						},
						mobile: {
							value: separatorWidthMobile,
							label: 'separatorWidthMobile',
						},
					} }
					min={ 0 }
					max={ '%' === separatorWidthType ? 100 : 500 }
					unit={ {
						value: separatorWidthType,
						label: 'separatorWidthType',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __(
								'%',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: '%',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<Range
					label={ __(
						'Thickness',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ separatorThickness }
					data={ {
						value: separatorThickness,
						label: 'separatorThickness',
					} }
					min={ 0 }
					max={ 10 }
					unit={ {
						value: thicknessUnit,
						label: 'thicknessUnit',
					} }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={
						separatorColor ? separatorColor : ''
					}
					data={ {
						value: separatorColor,
						label: 'separatorColor',
					} }
					setAttributes={ setAttributes }
				/>
				<SpacingControl
					{ ...props }
					label={ __(
						'Padding',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: separatorTopPadding,
						label: 'separatorTopPadding',
					} }
					valueRight={ {
						value: separatorRightPadding,
						label: 'separatorRightPadding',
					} }
					valueBottom={ {
						value: separatorBottomPadding,
						label: 'separatorBottomPadding',
					} }
					valueLeft={ {
						value: separatorLeftPadding,
						label: 'separatorLeftPadding',
					} }
					valueTopTablet={ {
						value: separatorPaddingTopTablet,
						label: 'separatorPaddingTopTablet',
					} }
					valueRightTablet={ {
						value: separatorPaddingRightTablet,
						label: 'separatorPaddingRightTablet',
					} }
					valueBottomTablet={ {
						value: separatorPaddingBottomTablet,
						label: 'separatorPaddingBottomTablet',
					} }
					valueLeftTablet={ {
						value: separatorPaddingLeftTablet,
						label: 'separatorPaddingLeftTablet',
					} }
					valueTopMobile={ {
						value: separatorPaddingTopMobile,
						label: 'separatorPaddingTopMobile',
					} }
					valueRightMobile={ {
						value: separatorPaddingRightMobile,
						label: 'separatorPaddingRightMobile',
					} }
					valueBottomMobile={ {
						value: separatorPaddingBottomMobile,
						label: 'separatorPaddingBottomMobile',
					} }
					valueLeftMobile={ {
						value: separatorPaddingLeftMobile,
						label: 'separatorPaddingLeftMobile',
					} }
					unit={ {
						value: separatorPaddingUnit,
						label: 'separatorPaddingUnit',
					} }
					mUnit={ {
						value: separatorMobilePaddingUnit,
						label: 'separatorMobilePaddingUnit',
					} }
					tUnit={ {
						value: separatorTabletPaddingUnit,
						label: 'separatorTabletPaddingUnit',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: separatorPaddingLink,
						label: 'separatorPaddingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	}

	return (
		<div>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{separatorGeneralSettings()}
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{separatorStyleSettings()}
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
