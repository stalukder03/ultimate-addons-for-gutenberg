import React, { Suspense } from 'react'
import lazyLoader from '@Controls/lazy-loader';
import { __ } from '@wordpress/i18n';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { SelectControl, Icon } from '@wordpress/components';
import renderSVG from '@Controls/renderIcon';
import presets from './presets';
import UAGPresets from '@Components/presets';
import UAGImage from '@Components/image';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import WebfontLoader from '@Components/typography/fontloader';
import TypographyControl from '@Components/typography';

const Settings = (props) => {
	props = props.parentProps;
	const { attributes, setAttributes } = props;
	const {
		seperatorStyle,
		priceCardHeadingTag,
		headingAlign,
		image,
		headFontFamily,
		headFontWeight,
		headFontStyle,
		headFontSizeType,
		headFontSize,
		headFontSizeMobile,
		headFontSizeTablet,
		headLineHeightType,
		headLineHeight,
		headTransform,
		headDecoration,
		headLineHeightMobile,
		headLineHeightTablet,
		headLoadGoogleFonts,
		subHeadLoadGoogleFonts,
		subHeadFontFamily,
		subHeadFontWeight,
		subHeadFontStyle,
		subHeadFontSize,
		subHeadFontSizeType,
		subHeadFontSizeMobile,
		subHeadFontSizeTablet,
		subHeadLineHeight,
		subHeadLineHeightType,
		subHeadLineHeightMobile,
		subHeadLineHeightTablet,
	} = attributes

	const generalPanel = () => {
		return (
			<UAGAdvancedPanelBody>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__('Alignment', 'ultimate-addons-for-gutenberg')}
					data={{
						value: headingAlign,
						label: 'headingAlign',
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: 'left',
							icon: (
								<Icon
									icon={renderSVG('fa fa-align-left')}
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
									icon={renderSVG('fa fa-align-center')}
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
									icon={renderSVG('fa fa-align-right')}
								/>
							),
							tooltip: __(
								'Right',
								'ultimate-addons-for-gutenberg'
							),
						},
					]}
					showIcons={true}
				/>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						'Heading Tag',
						'ultimate-addons-for-gutenberg'
					)}
					data={{
						value: priceCardHeadingTag,
						label: 'priceCardHeadingTag',
					}}
					options={[
						{
							value: 'h1',
							label: __('H1', 'ultimate-addons-for-gutenberg'),
						},
						{
							value: 'h2',
							label: __('H2', 'ultimate-addons-for-gutenberg'),
						},
						{
							value: 'h3',
							label: __('H3', 'ultimate-addons-for-gutenberg'),
						},
						{
							value: 'h4',
							label: __('H4', 'ultimate-addons-for-gutenberg'),
						},
						{
							value: 'h5',
							label: __('H5', 'ultimate-addons-for-gutenberg'),
						},
						{
							value: 'h6',
							label: __('H6', 'ultimate-addons-for-gutenberg'),
						},
					]}
				/>
				<SelectControl
					label={__('Separator Style', 'ultimate-addons-for-gutenberg')}
					value={seperatorStyle}
					onChange={(value) =>
						setAttributes({ seperatorStyle: value })
					}
					options={[
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
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
					]}
				/>

			</UAGAdvancedPanelBody>
		)
	}

	const blockControlSettings = () => {
		return (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={headingAlign}
					onChange={(value) =>
						setAttributes({ headingAlign: value })
					}
				/>
			</BlockControls>
		);
	};

	const presetSettings = () => {
		return <UAGAdvancedPanelBody
			title={__('Presets', 'ultimate-addons-for-gutenberg')}
			initialOpen={true}
		>
			<UAGPresets
				setAttributes={setAttributes}
				presets={presets}
				presetInputType='radioImage'
			/>
		</UAGAdvancedPanelBody>
	};

	const onSelectImage = (media) => {
		let imageUrl = null;
		if (!media || !media.url) {
			imageUrl = null;
		} else {
			imageUrl = media;
		}

		if (!media.type || 'image' !== media.type) {
			imageUrl = null;
		}

		setAttributes({
			image: imageUrl,
		});
	};

	const onRemoveImage = () => {
		setAttributes({
			image: null,
		});
	};
	const imageSettings = () => {
		return <UAGAdvancedPanelBody
			title={__('Image', 'ultimate-addons-for-gutenberg')}
			initialOpen={true}
		>
			<UAGImage
				onSelectImage={onSelectImage}
				backgroundImage={image}
				onRemoveImage={onRemoveImage}
			/>
		</UAGAdvancedPanelBody>
	};


	// work on style part
	// font loading
	let loadHeadingGoogleFonts;
	let loadSubHeadingGoogleFonts;

	if (headLoadGoogleFonts === true) {
		const hconfig = {
			google: {
				families: [
					headFontFamily +
					(headFontWeight ? ':' + headFontWeight : ''),
				],
			},
		};

		loadHeadingGoogleFonts = (
			<WebfontLoader config={hconfig}></WebfontLoader>
		);
	}

	if (subHeadLoadGoogleFonts === true) {
		const sconfig = {
			google: {
				families: [
					subHeadFontFamily +
					(subHeadFontWeight ? ':' + subHeadFontWeight : ''),
				],
			},
		};

		loadSubHeadingGoogleFonts = (
			<WebfontLoader config={sconfig}></WebfontLoader>
		);
	}

	const headingPanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={__('Heading', 'ultimate-addons-for-gutenberg')}
				initialOpen={false}
			>
				<Suspense fallback={lazyLoader()}>
					<TypographyControl
						label={__(
							'Typography',
							'ultimate-addons-for-gutenberg'
						)}
						attributes={attributes}
						setAttributes={setAttributes}
						loadGoogleFonts={{
							value: subHeadLoadGoogleFonts,
							label: 'subHeadLoadGoogleFonts',
						}}
						fontFamily={{
							value: headFontFamily,
							label: 'headFontFamily',
						}}
						fontWeight={{
							value: headFontWeight,
							label: 'headFontWeight',
						}}
						fontStyle={{
							value: headFontStyle,
							label: 'headFontStyle',
						}}
						transform={{
							value: headTransform,
							label: 'headTransform',
						}}
						decoration={{
							value: headDecoration,
							label: 'headDecoration',
						}}
						fontSizeType={{
							value: headFontSizeType,
							label: 'headFontSizeType',
						}}
						fontSize={{
							value: headFontSize,
							label: 'headFontSize',
						}}
						fontSizeMobile={{
							value: headFontSizeMobile,
							label: 'headFontSizeMobile',
						}}
						fontSizeTablet={{
							value: headFontSizeTablet,
							label: 'headFontSizeTablet',
						}}
						lineHeightType={{
							value: headLineHeightType,
							label: 'headLineHeightType',
						}}
						lineHeight={{
							value: headLineHeight,
							label: 'headLineHeight',
						}}
						lineHeightMobile={{
							value: headLineHeightMobile,
							label: 'headLineHeightMobile',
						}}
						lineHeightTablet={{
							value: headLineHeightTablet,
							label: 'headLineHeightTablet',
						}}
					>

					</TypographyControl>
				</Suspense>
			</UAGAdvancedPanelBody>
		)
	}
	return (
		<>
			{blockControlSettings()}
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab {...UAGTabs.general}>
						{imageSettings()}
						{generalPanel()}
					</InspectorTab>
					<InspectorTab {...UAGTabs.style}>
						{headingPanel()}
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}
						parentProps={props}>

					</InspectorTab>

				</InspectorTabs>

			</InspectorControls>
			<Suspense fallback={lazyLoader()}>
				{loadHeadingGoogleFonts}
				{loadSubHeadingGoogleFonts}
			</Suspense>
		</>
	)
}

export default Settings
