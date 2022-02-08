/**
 * BLOCK: Count Down Timer
 */

import renderSVG from '@Controls/renderIcon';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import WebfontLoader from '@Components/typography/fontloader';
import TypographyControl from '@Components/typography';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Range from '@Components/range/Range.js';
import SpacingControl from '@Components/spacing-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import { __ } from '@wordpress/i18n';
import Border from '@Components/border';
import { select } from '@wordpress/data';
import UAGIconPicker from '@Components/icon-picker';
import UAGTabsControl from '@Components/tabs';

import { InspectorControls } from '@wordpress/block-editor';

import {
	SelectControl,
	ToggleControl,
	Icon,
} from '@wordpress/components';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;
	const {

	} = attributes;


	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Display Type', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: displayType,
						label: 'displayType',
					} }
					onChange={ onchangeLayout }
					options={ [
						{
							value: 'fixed',
							label: __(
								'Fixed',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'evergreen',
							label: __(
								'Evergreen',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'recurring',
							label: __(
								'Recurring',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ 'fixed' === displayType && (
					<>
						<h2>
							{ __(
								'Due Date and Time',
								'ultimate-addons-for-gutenberg'
							) }
						</h2>
						<DateTimePicker
							className="uagb-date-picker"
							currentDate={ datepublish }
							onChange={ ( value ) =>
								setAttributes( { datepublish: value } )
							}
							is12Hour={ true }
						/>
					</>
				) }
				{ 'evergreen' === displayType && (
					<>
						<TextControl
							label={ __(
								'Days',
								'ultimate-addons-for-gutenberg'
							) }
							value={ days }
							onChange={ ( value ) =>
								setAttributes( { days: value } )
							}
						/>
						<TextControl
							label={ __(
								'Hours',
								'ultimate-addons-for-gutenberg'
							) }
							value={ hours }
							onChange={ ( value ) =>
								setAttributes( { hours: value } )
							}
						/>
						<TextControl
							label={ __(
								'Minutes',
								'ultimate-addons-for-gutenberg'
							) }
							value={ minutes }
							onChange={ ( value ) =>
								setAttributes( { minutes: value } )
							}
						/>
						<TextControl
							label={ __(
								'Reset Timer',
								'ultimate-addons-for-gutenberg'
							) }
							value={ repeatDays }
							onChange={ ( value ) =>
								setAttributes( { repeatDays: value } )
							}
						/>
					</>
				) }
				{ 'recurring' === displayType && (
					<>
						<TextControl
							label={ __(
								'Days',
								'ultimate-addons-for-gutenberg'
							) }
							value={ days }
							onChange={ ( value ) =>
								setAttributes( { days: value } )
							}
						/>
						<TextControl
							label={ __(
								'Hours',
								'ultimate-addons-for-gutenberg'
							) }
							value={ hours }
							onChange={ ( value ) =>
								setAttributes( { hours: value } )
							}
						/>
						<TextControl
							label={ __(
								'Minutes',
								'ultimate-addons-for-gutenberg'
							) }
							value={ minutes }
							onChange={ ( value ) =>
								setAttributes( { minutes: value } )
							}
						/>
						<TextControl
							label={ __(
								'Repeat Timer after ( days )',
								'ultimate-addons-for-gutenberg'
							) }
							value={ repeatDays }
							onChange={ ( value ) =>
								setAttributes( { repeatDays: value } )
							}
						/>
					</>
				) }
				<ToggleControl
					label={ __(
						'Display Days',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayDays }
					onChange={ () =>
						setAttributes( {
							displayDays: ! displayDays,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Display Hours',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayHours }
					onChange={ () =>
						setAttributes( {
							displayHours: ! displayHours,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Display Minutes',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayMinutes }
					onChange={ () =>
						setAttributes( {
							displayMinutes: ! displayMinutes,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Display Seconds',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displaySeconds }
					onChange={ () =>
						setAttributes( {
							displaySeconds: ! displaySeconds,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Display Divider',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayDivider }
					onChange={ () =>
						setAttributes( {
							displayDivider: ! displayDivider,
						} )
					}
				/>
				<TextControl
					label={ __(
						'Counter pre text',
						'ultimate-addons-for-gutenberg'
					) }
					value={ preText }
					onChange={ ( value ) =>
						setAttributes( { preText: value } )
					}
				/>
				<TextControl
					label={ __(
						'Counter Post text',
						'ultimate-addons-for-gutenberg'
					) }
					value={ postText }
					onChange={ ( value ) =>
						setAttributes( { postText: value } )
					}
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Countdown Layout', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: countdownLayout,
						label: 'countdownLayout',
					} }
					onChange={ onchangeLayout }
					options={ [
						{
							value: 'inline',
							label: __(
								'Inline',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'Block',
							label: __(
								'Block',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const stylingSettings = () => {
		return <UAGAdvancedPanelBody
				title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<SelectControl
					label={ __(
						'Question Tag',
						'ultimate-addons-for-gutenberg'
					) }
					value={ headingTag }
					onChange={ ( value ) => onchangeTag( value ) }
					options={ [
						{
							value: 'Square',
							label: __( 'Square',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'Rounded',
							label: __( 'Rounded', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'Circle',
							label: __( 'Circle', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'None',
							label: __( 'None', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				<Border
					setAttributes={ setAttributes }
					borderStyle={ {
						value: borderStyle,
						label: 'borderStyle',
						title: __( 'Style', 'ultimate-addons-for-gutenberg' ),
					} }
					borderWidth={ {
						value: borderWidth,
						label: 'borderWidth',
						title: __( 'Width', 'ultimate-addons-for-gutenberg' ),
					} }
					borderRadius={ {
						value: borderRadius,
						label: 'borderRadius',
						title: __( 'Radius', 'ultimate-addons-for-gutenberg' ),
					} }
					borderColor={ {
						value: borderColor,
						label: 'borderColor',
						title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					} }
					borderHoverColor={ {
						value: borderHoverColor,
						label: 'borderHoverColor',
						title: __(
							'Hover Color',
							'ultimate-addons-for-gutenberg'
						),
					} }
					disableBottomSeparator={ true }
				/>
				<ToggleControl
					label={ __(
						'Separator',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayHours }
					onChange={ () =>
						setAttributes( {
							displayHours: ! displayHours,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Flash Animation',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayHours }
					onChange={ () =>
						setAttributes( {
							displayHours: ! displayHours,
						} )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ questionTextColor }
					onColorChange={ ( value ) =>
						setAttributes( { questionTextColor: value } )
					}
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: align,
						label: 'align',
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
	}
	const itemsSettings = () => {
		return <UAGAdvancedPanelBody
				title={ __( 'Count Down Items', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<ResponsiveSlider
					label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
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
					max={ 100 }
					unit={ {
						value: iconSizeType,
						label: 'iconSizeType',
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
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<Range
					label={ __(
						'Gap between Icon and Question',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ gapBtwIconQUestion }
					onChange={ ( value ) =>
						setAttributes( { gapBtwIconQUestion: value } )
					}
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
				/>
				<Range
					label={ __(
						'Gap between Icon and Question',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ gapBtwIconQUestion }
					onChange={ ( value ) =>
						setAttributes( { gapBtwIconQUestion: value } )
					}
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: vquestionPaddingDesktop,
						label: 'vquestionPaddingDesktop',
					} }
					valueRight={ {
						value: hquestionPaddingDesktop,
						label: 'hquestionPaddingDesktop',
					} }
					valueBottom={ {
						value: questionBottomPaddingDesktop,
						label: 'questionBottomPaddingDesktop',
					} }
					valueLeft={ {
						value: questionLeftPaddingDesktop,
						label: 'questionLeftPaddingDesktop',
					} }
					valueTopTablet={ {
						value: vquestionPaddingTablet,
						label: 'vquestionPaddingTablet',
					} }
					valueRightTablet={ {
						value: hquestionPaddingTablet,
						label: 'hquestionPaddingTablet',
					} }
					valueBottomTablet={ {
						value: questionBottomPaddingTablet,
						label: 'questionBottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: questionLeftPaddingTablet,
						label: 'questionLeftPaddingTablet',
					} }
					valueTopMobile={ {
						value: vquestionPaddingMobile,
						label: 'vquestionPaddingMobile',
					} }
					valueRightMobile={ {
						value: hquestionPaddingMobile,
						label: 'hquestionPaddingMobile',
					} }
					valueBottomMobile={ {
						value: questionBottomPaddingMobile,
						label: 'questionBottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: questionLeftPaddingMobile,
						label: 'questionLeftPaddingMobile',
					} }
					unit={ {
						value: questionPaddingTypeDesktop,
						label: 'questionPaddingTypeDesktop',
					} }
					mUnit={ {
						value: questionPaddingTypeMobile,
						label: 'questionPaddingTypeMobile',
					} }
					tUnit={ {
						value: questionPaddingTypeTablet,
						label: 'questionPaddingTypeTablet',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: questionSpacingLink,
						label: 'questionSpacingLink',
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
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
				/>
			</UAGAdvancedPanelBody>
	}
	const preTextSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Answer', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<AdvancedPopColorControl
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ answerTextColor }
					onColorChange={ ( value ) =>
						setAttributes( { answerTextColor: value } )
					}
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: answerloadGoogleFonts,
						label: 'answerloadGoogleFonts',
					} }
					fontFamily={ {
						value: answerFontFamily,
						label: 'answerFontFamily',
					} }
					fontWeight={ {
						value: answerFontWeight,
						label: 'answerFontWeight',
					} }
					fontStyle={ {
						value: answerFontStyle,
						label: 'answerFontStyle',
					} }
					transform={ {
						value: answerTransform,
						label: 'answerTransform',
					} }
					decoration={ {
						value: answerDecoration,
						label: 'answerDecoration',
					} }
					fontSizeType={ {
						value: answerFontSizeType,
						label: 'answerFontSizeType',
					} }
					fontSize={ {
						value: answerFontSize,
						label: 'answerFontSize',
					} }
					fontSizeMobile={ {
						value: answerFontSizeMobile,
						label: 'answerFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: answerFontSizeTablet,
						label: 'answerFontSizeTablet',
					} }
					lineHeightType={ {
						value: answerLineHeightType,
						label: 'answerLineHeightType',
					} }
					lineHeight={ {
						value: answerLineHeight,
						label: 'answerLineHeight',
					} }
					lineHeightMobile={ {
						value: answerLineHeightMobile,
						label: 'answerLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: answerLineHeightTablet,
						label: 'answerLineHeightTablet',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: answerTopPadding,
						label: 'answerTopPadding',
					} }
					valueRight={ {
						value: answerRightPadding,
						label: 'answerRightPadding',
					} }
					valueBottom={ {
						value: answerBottomPadding,
						label: 'answerBottomPadding',
					} }
					valueLeft={ {
						value: answerLeftPadding,
						label: 'answerLeftPadding',
					} }
					valueTopTablet={ {
						value: answerTopPaddingTablet,
						label: 'answerTopPaddingTablet',
					} }
					valueRightTablet={ {
						value: answerRightPaddingTablet,
						label: 'answerRightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: answerBottomPaddingTablet,
						label: 'answerBottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: answerLeftPaddingTablet,
						label: 'answerLeftPaddingTablet',
					} }
					valueTopMobile={ {
						value: answerTopPaddingMobile,
						label: 'answerTopPaddingMobile',
					} }
					valueRightMobile={ {
						value: answerRightPaddingMobile,
						label: 'answerRightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: answerBottomPaddingMobile,
						label: 'answerBottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: answerLeftPaddingMobile,
						label: 'answerLeftPaddingMobile',
					} }
					unit={ {
						value: answerPaddingTypeDesktop,
						label: 'answerPaddingTypeDesktop',
					} }
					mUnit={ {
						value: answerPaddingTypeMobile,
						label: 'answerPaddingTypeMobile',
					} }
					tUnit={ {
						value: answerPaddingTypeTablet,
						label: 'answerPaddingTypeTablet',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: answerSpacingLink,
						label: 'answerSpacingLink',
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
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const postTextSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Answer', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<AdvancedPopColorControl
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ answerTextColor }
					onColorChange={ ( value ) =>
						setAttributes( { answerTextColor: value } )
					}
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: answerloadGoogleFonts,
						label: 'answerloadGoogleFonts',
					} }
					fontFamily={ {
						value: answerFontFamily,
						label: 'answerFontFamily',
					} }
					fontWeight={ {
						value: answerFontWeight,
						label: 'answerFontWeight',
					} }
					fontStyle={ {
						value: answerFontStyle,
						label: 'answerFontStyle',
					} }
					transform={ {
						value: answerTransform,
						label: 'answerTransform',
					} }
					decoration={ {
						value: answerDecoration,
						label: 'answerDecoration',
					} }
					fontSizeType={ {
						value: answerFontSizeType,
						label: 'answerFontSizeType',
					} }
					fontSize={ {
						value: answerFontSize,
						label: 'answerFontSize',
					} }
					fontSizeMobile={ {
						value: answerFontSizeMobile,
						label: 'answerFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: answerFontSizeTablet,
						label: 'answerFontSizeTablet',
					} }
					lineHeightType={ {
						value: answerLineHeightType,
						label: 'answerLineHeightType',
					} }
					lineHeight={ {
						value: answerLineHeight,
						label: 'answerLineHeight',
					} }
					lineHeightMobile={ {
						value: answerLineHeightMobile,
						label: 'answerLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: answerLineHeightTablet,
						label: 'answerLineHeightTablet',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: answerTopPadding,
						label: 'answerTopPadding',
					} }
					valueRight={ {
						value: answerRightPadding,
						label: 'answerRightPadding',
					} }
					valueBottom={ {
						value: answerBottomPadding,
						label: 'answerBottomPadding',
					} }
					valueLeft={ {
						value: answerLeftPadding,
						label: 'answerLeftPadding',
					} }
					valueTopTablet={ {
						value: answerTopPaddingTablet,
						label: 'answerTopPaddingTablet',
					} }
					valueRightTablet={ {
						value: answerRightPaddingTablet,
						label: 'answerRightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: answerBottomPaddingTablet,
						label: 'answerBottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: answerLeftPaddingTablet,
						label: 'answerLeftPaddingTablet',
					} }
					valueTopMobile={ {
						value: answerTopPaddingMobile,
						label: 'answerTopPaddingMobile',
					} }
					valueRightMobile={ {
						value: answerRightPaddingMobile,
						label: 'answerRightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: answerBottomPaddingMobile,
						label: 'answerBottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: answerLeftPaddingMobile,
						label: 'answerLeftPaddingMobile',
					} }
					unit={ {
						value: answerPaddingTypeDesktop,
						label: 'answerPaddingTypeDesktop',
					} }
					mUnit={ {
						value: answerPaddingTypeMobile,
						label: 'answerPaddingTypeMobile',
					} }
					tUnit={ {
						value: answerPaddingTypeTablet,
						label: 'answerPaddingTypeTablet',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: answerSpacingLink,
						label: 'answerSpacingLink',
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
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	return (
		<Suspense fallback={ lazyLoader() }>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ stylingSettings() }
						{ itemsSettings() }
						{ preTextSettings() }
						{ postTextSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</Suspense>
	);
};

export default React.memo( Settings );
