/**
 * BLOCK: Buttons Child - Edit Class
 */

// Import classes
import UAGIconPicker from '@Components/icon-picker';
import { __ } from '@wordpress/i18n';
import lazyLoader from '@Controls/lazy-loader';
import React, { Suspense } from 'react';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import ResponsiveBorder from '@Components/responsive-border';
import SpacingControl from '@Components/spacing-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import TypographyControl from '@Components/typography';
import UAGTabsControl from '@Components/tabs';
import MultiButtonsControl from '@Components/multi-buttons-control';
import BoxShadowControl from '@Components/box-shadow';
import WebfontLoader from '@Components/typography/fontloader';
import ResponsiveSlider from '@Components/responsive-slider';
import GradientSettings from '@Components/gradient-settings';

import {
	InspectorControls
} from '@wordpress/block-editor';

import {
	ToggleControl,
	TextControl
} from '@wordpress/components';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {

	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;

	const {
		link,
		size,
		topPadding,
		rightPadding,
		bottomPadding,
		leftPadding,
		//Mobile
		topMobilePadding,
		rightMobilePadding,
		bottomMobilePadding,
		leftMobilePadding,
		//Tablet
		topTabletPadding,
		rightTabletPadding,
		bottomTabletPadding,
		leftTabletPadding,
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
		paddingLink,
		color,
		background,
		hColor,
		hBackground,
		sizeType,
		sizeMobile,
		sizeTablet,
		lineHeight,
		lineHeightType,
		lineHeightMobile,
		lineHeightTablet,
		icon,
		iconPosition,
		iconSpace,
		iconSpaceTablet,
		iconSpaceMobile,
		opensInNewTab,

		loadGoogleFonts,
		fontFamily,
		fontWeight,
		fontStyle,
		transform,
		decoration,
		backgroundType,
		hoverbackgroundType,
		gradientValue,
		hovergradientValue,
		topMargin,
		rightMargin,
		bottomMargin,
		leftMargin,
		topMarginTablet,
		rightMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		topMarginMobile,
		rightMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		marginType,
		marginLink,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		iconColor,
		iconHColor,
		iconSize,
		iconSizeTablet,
		iconSizeMobile,
		removeText,
		noFollow,

		// letter spacing
		fontLetterSpacing,
		fontLetterSpacingTablet,
		fontLetterSpacingMobile,
		fontLetterSpacingType,

	} = attributes;

	const buttonSettings = () => {
		return (
			<UAGAdvancedPanelBody>
				<UAGIconPicker
					label={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
					value={ icon }
					onChange={ ( value ) => setAttributes( { icon: value } ) }
				/>
				{ '' !== icon && !removeText && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Icon Position',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: iconPosition,
								label: 'iconPosition',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'before',
									label: 'Before Text',
								},
								{
									value: 'after',
									label: 'After Text',
								},
							] }
							showIcons={ false }
						/>
					</>
				) }
				<TextControl
					label={ __(
						'Link',
						'ultimate-addons-for-gutenberg'
					) }
					value={ link }
					onChange={ ( value ) =>
						setAttributes( { link: value } )
					}
				/>
				<ToggleControl
					label={ __(
						'Open in new window',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ opensInNewTab }
					onChange={ () =>
						setAttributes( { opensInNewTab : ! opensInNewTab } )
					}
				/>
				<ToggleControl
					label={ __(
						'Add "nofollow" to link',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ noFollow }
					onChange={ () =>
						setAttributes( { noFollow : ! noFollow } )
					}
				/>
				{ '' !== icon && (
					<ToggleControl
						label={ __(
							'Remove Text',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ removeText }
						onChange={ () =>
							setAttributes( { removeText: ! removeText } )
						}
					/>
				)}
			</UAGAdvancedPanelBody>
		);
	};

	let loadBtnGoogleFonts;

	if ( loadGoogleFonts === true ) {
		const btnconfig = {
			google: {
				families: [
					fontFamily + ( fontWeight ? ':' + fontWeight : '' ),
				],
			},
		};

		loadBtnGoogleFonts = (
			<WebfontLoader config={ btnconfig }></WebfontLoader>
		);
	}

	const textSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Text', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: loadGoogleFonts,
						label: 'loadGoogleFonts',
					} }
					fontFamily={ {
						value: fontFamily,
						label: 'fontFamily',
					} }
					fontWeight={ {
						value: fontWeight,
						label: 'fontWeight',
					} }
					fontStyle={ {
						value: fontStyle,
						label: 'fontStyle',
					} }
					transform={ {
						value: transform,
						label: 'transform',
					} }
					decoration={ {
						value: decoration,
						label: 'decoration',
					} }
					fontSizeType={ {
						value: sizeType,
						label: 'sizeType',
					} }
					fontSize={ {
						value: size,
						label: 'size',
					} }
					fontSizeMobile={ {
						value: sizeMobile,
						label: 'sizeMobile',
					} }
					fontSizeTablet={ {
						value: sizeTablet,
						label: 'sizeTablet',
					} }
					lineHeightType={ {
						value: lineHeightType,
						label: 'lineHeightType',
					} }
					lineHeight={ {
						value: lineHeight,
						label: 'lineHeight',
					} }
					lineHeightMobile={ {
						value: lineHeightMobile,
						label: 'lineHeightMobile',
					} }
					lineHeightTablet={ {
						value: lineHeightTablet,
						label: 'lineHeightTablet',
					} }
					letterSpacing={ {
						value: fontLetterSpacing,
						label: 'fontLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: fontLetterSpacingTablet,
						label: 'fontLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: fontLetterSpacingMobile,
						label: 'fontLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: fontLetterSpacingType,
						label: 'fontLetterSpacingType',
					} }
				/>
				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __(
								'Normal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							name: 'hover',
							title: __(
								'Hover',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ color ? color : '' }
								data={ {
									value: color,
									label: 'color',
								} }
								setAttributes={ setAttributes }
							/>
						</>
					}
					hover={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ hColor ? hColor : '' }
								data={ {
									value: hColor,
									label: 'hColor',
								} }
								setAttributes={ setAttributes }
							/>
						</>
					}

					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const backgroundSettings = () => {
		return <UAGAdvancedPanelBody
					title={__( 'Background','ultimate-addons-for-gutenberg' )}
					initialOpen={false}
				>
					<UAGTabsControl
						tabs={ [
							{
								name: 'normal',
								title: __(
									'Normal',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								name: 'hover',
								title: __(
									'Hover',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
						normal={
							<>
								<MultiButtonsControl
									setAttributes={ setAttributes }
									label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										value: backgroundType,
										label: 'backgroundType',
									} }
									className="uagb-multi-button-alignment-control"
									options={ [
										{
											value: 'transparent',
											label: __(
												'Transparent',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'color',
											label: __(
												'Color',
												'ultimate-addons-for-gutenberg'
											),
											},
										{
											value: 'gradient',
											label: __(
												'Gradient',
												'ultimate-addons-for-gutenberg'
											),
											},
									] }
								/>
								{ 'color' === backgroundType && (
									<>

										<AdvancedPopColorControl
											label={ __(
												'Color',
												'ultimate-addons-for-gutenberg'
											) }
											colorValue={
												background
													? background
													: ''
											}
											data={ {
												value: background,
												label: 'background',
											} }
											setAttributes={ setAttributes }
										/>
									</>
								) }
								{ 'gradient' === backgroundType && (
									<GradientSettings
										backgroundGradient={ {
											value: gradientValue,
											label: 'gradientValue',
										}}
										setAttributes={ setAttributes }
									/>
								) }
							</>
						}
						hover={
							<>
								<MultiButtonsControl
									setAttributes={ setAttributes }
									label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										value: hoverbackgroundType,
										label: 'hoverbackgroundType',
									} }
									className="uagb-multi-button-alignment-control"
									options={ [
										{
											value: 'transparent',
											label: __(
												'Transparent',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'color',
											label: __(
												'Color',
												'ultimate-addons-for-gutenberg'
											),
											},
										{
											value: 'gradient',
											label: __(
												'Gradient',
												'ultimate-addons-for-gutenberg'
											),
											},
									] }
								/>
								{ 'color' === hoverbackgroundType && (
									<>
										<AdvancedPopColorControl
											label={ __(
												'Color',
												'ultimate-addons-for-gutenberg'
											) }
											colorValue={
												hBackground
													? hBackground
													: ''
											}
											data={ {
												value: hBackground,
												label: 'hBackground',
											} }
											setAttributes={ setAttributes }
										/>
									</>
								) }
								{ 'gradient' === hoverbackgroundType && (
									<GradientSettings
										backgroundGradient={ {
											value: hovergradientValue,
											label: 'hovergradientValue',
										}}
										setAttributes={ setAttributes }
									/>
								) }
							</>
						}
						disableBottomSeparator={ true }
					/>
				</UAGAdvancedPanelBody>
	};

	const boxShadowSettings = () => {
		return <UAGAdvancedPanelBody
					title={__( 'Box Shadow','ultimate-addons-for-gutenberg' )}
					initialOpen={false}
				>
					<BoxShadowControl
						setAttributes={ setAttributes }
						boxShadowColor={ {
							value: boxShadowColor,
							label: 'boxShadowColor',
							title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
						} }
						boxShadowHOffset={ {
							value: boxShadowHOffset,
							label: 'boxShadowHOffset',
							title: __(
								'Horizontal',
								'ultimate-addons-for-gutenberg'
							),
						} }
						boxShadowVOffset={ {
							value: boxShadowVOffset,
							label: 'boxShadowVOffset',
							title: __(
								'Vertical',
								'ultimate-addons-for-gutenberg'
							),
						} }
						boxShadowBlur={ {
							value: boxShadowBlur,
							label: 'boxShadowBlur',
							title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
						} }
						boxShadowSpread={ {
							value: boxShadowSpread,
							label: 'boxShadowSpread',
							title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
						} }
						boxShadowPosition={ {
							value: boxShadowPosition,
							label: 'boxShadowPosition',
							title: __(
								'Position',
								'ultimate-addons-for-gutenberg'
							),
						} }
					/>
				</UAGAdvancedPanelBody>
	};

	const IconSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveSlider
					label={ __(
						'Size',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: iconSize,
							label: 'iconSize',
						},
						tablet: {
							value: iconSizeTablet,
							label: 'iconSizeTablet',
						},
						mobile: {
							value: iconSizeMobile,
							label: 'iconSizeMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
				{ '' !== icon && !removeText && (
					<ResponsiveSlider
						label={ __(
							'Icon Spacing',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							desktop: {
								value: iconSpace,
								label: 'iconSpace',
							},
							tablet: {
								value: iconSpaceTablet,
								label: 'iconSpaceTablet',
							},
							mobile: {
								value: iconSpaceMobile,
								label: 'iconSpaceMobile',
							},
						} }
						min={ 0 }
						max={ 200 }
						displayUnit={ false }
						setAttributes={ setAttributes }
					/>
				)}
				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __(
								'Normal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							name: 'hover',
							title: __(
								'Hover',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ iconColor ? iconColor : '' }
								data={ {
									value: iconColor,
									label: 'iconColor',
								} }
								setAttributes={ setAttributes }
							/>
					}
					hover={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ iconHColor ? iconHColor : '' }
								data={ {
									value: iconHColor,
									label: 'iconHColor',
								} }
								setAttributes={ setAttributes }
							/>
						</>
					}

					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const borderSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={'btn'}
					attributes={ attributes }
					deviceType={deviceType}
					disableBottomSeparator={ true }
					disabledBorderTitle= { true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const spacingSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topPadding,
						label: 'topPadding',
					} }
					valueRight={ {
						value: rightPadding,
						label: 'rightPadding',
					} }
					valueBottom={ {
						value: bottomPadding,
						label: 'bottomPadding',
					} }
					valueLeft={ {
						value: leftPadding,
						label: 'leftPadding',
					} }
					valueTopTablet={ {
						value: topTabletPadding,
						label: 'topTabletPadding',
					} }
					valueRightTablet={ {
						value: rightTabletPadding,
						label: 'rightTabletPadding',
					} }
					valueBottomTablet={ {
						value: bottomTabletPadding,
						label: 'bottomTabletPadding',
					} }
					valueLeftTablet={ {
						value: leftTabletPadding,
						label: 'leftTabletPadding',
					} }
					valueTopMobile={ {
						value: topMobilePadding,
						label: 'topMobilePadding',
					} }
					valueRightMobile={ {
						value: rightMobilePadding,
						label: 'rightMobilePadding',
					} }
					valueBottomMobile={ {
						value: bottomMobilePadding,
						label: 'bottomMobilePadding',
					} }
					valueLeftMobile={ {
						value: leftMobilePadding,
						label: 'leftMobilePadding',
					} }
					unit={ {
						value: paddingUnit,
						label: 'paddingUnit',
					} }
					mUnit={ {
						value: mobilePaddingUnit,
						label: 'mobilePaddingUnit',
					} }
					tUnit={ {
						value: tabletPaddingUnit,
						label: 'tabletPaddingUnit',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: paddingLink,
						label: 'paddingLink',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topMargin,
						label: 'topMargin',
					} }
					valueRight={ {
						value: rightMargin,
						label: 'rightMargin',
					} }
					valueBottom={ {
						value: bottomMargin,
						label: 'bottomMargin',
					} }
					valueLeft={ {
						value: leftMargin,
						label: 'leftMargin',
					} }
					valueTopTablet={ {
						value: topMarginTablet,
						label: 'topMarginTablet',
					} }
					valueRightTablet={ {
						value: rightMarginTablet,
						label: 'rightMarginTablet',
					} }
					valueBottomTablet={ {
						value: bottomMarginTablet,
						label: 'bottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: leftMarginTablet,
						label: 'leftMarginTablet',
					} }
					valueTopMobile={ {
						value: topMarginMobile,
						label: 'topMarginMobile',
					} }
					valueRightMobile={ {
						value: rightMarginMobile,
						label: 'rightMarginMobile',
					} }
					valueBottomMobile={ {
						value: bottomMarginMobile,
						label: 'bottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: leftMarginMobile,
						label: 'leftMarginMobile',
					} }
					unit={ {
						value: marginType,
						label: 'marginType',
					} }
					mUnit={ {
						value: marginType,
						label: 'marginType',
					} }
					tUnit={ {
						value: marginType,
						label: 'marginType',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: marginLink,
						label: 'marginLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ buttonSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ !removeText && textSettings() }
						{ '' !== icon && IconSettings() }
						{ borderSettings() }
						{ backgroundSettings() }
						{ boxShadowSettings() }
						{ spacingSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{loadBtnGoogleFonts}
		</Suspense>
	);
};

export default React.memo( Settings );
