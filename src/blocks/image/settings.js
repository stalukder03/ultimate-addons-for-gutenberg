import React, {Suspense} from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { __ } from '@wordpress/i18n';
import UAGPresets from '@Components/presets';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import renderSVG from '@Controls/renderIcon';
import { SelectControl, Icon } from '@wordpress/components';

// Extend component
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function settings(props) {
	props = props.parentProps;
	const { attributes, setAttributes, deviceType } = props;
	const {
		captionLoadGoogleFonts,
		captionFontFamily,
		captionFontWeight,
		captionFontStyle,
		captionFontSize,
		captionColor,
		captionTransform,
		captionDecoration,
		captionFontSizeType,
		captionFontSizeMobile,
		captionFontSizeTablet,
		captionLineHeight,
		captionLineHeightType,
		captionLineHeightMobile,
		captionLineHeightTablet,
		captionTopMargin,
		captionRightMargin,
		captionLeftMargin,
		captionBottomMargin,
		captionTopMarginTablet,
		captionRightMarginTablet,
		captionLeftMarginTablet,
		captionBottomMarginTablet,
		captionTopMarginMobile,
		captionRightMarginMobile,
		captionLeftMarginMobile,
		captionBottomMarginMobile,
		captionMarginUnit,
		captionMarginUnitTablet,
		captionMarginUnitMobile,
		captionMarginLink
	} = attributes;

	const stylePanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Caption', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Suspense fallback={ lazyLoader() }>
					<TypographyControl
						label={ __(
							'Typography',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						loadGoogleFonts={ {
							value: captionLoadGoogleFonts,
							label: 'captionLoadGoogleFonts',
						} }
						fontFamily={ {
							value: captionFontFamily,
							label: 'captionFontFamily',
						} }
						fontWeight={ {
							value: captionFontWeight,
							label: 'captionFontWeight',
						} }
						fontStyle={ {
							value: captionFontStyle,
							label: 'captionFontStyle',
						} }
						transform={ {
							value: captionTransform,
							label: 'captionTransform',
						} }
						decoration={ {
							value: captionDecoration,
							label: 'captionDecoration',
						} }
						fontSizeType={ {
							value: captionFontSizeType,
							label: 'captionFontSizeType',
						} }
						fontSize={ {
							value: captionFontSize,
							label: 'captionFontSize',
						} }
						fontSizeMobile={ {
							value: captionFontSizeMobile,
							label: 'captionFontSizeMobile',
						} }
						fontSizeTablet={ {
							value: captionFontSizeTablet,
							label: 'captionFontSizeTablet',
						} }
						lineHeightType={ {
							value: captionLineHeightType,
							label: 'captionLineHeightType',
						} }
						lineHeight={ {
							value: captionLineHeight,
							label: 'captionLineHeight',
						} }
						lineHeightMobile={ {
							value: captionLineHeightMobile,
							label: 'captionLineHeightMobile',
						} }
						lineHeightTablet={ {
							value: captionLineHeightTablet,
							label: 'captionLineHeightTablet',
						} }
					/>
				</Suspense>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ captionColor ? captionColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { captionColor: value } )
					}
				/>
				<SpacingControl
					label={ __(
						'Margin',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: captionTopMargin,
						label: 'captionTopMargin',
					} }
					valueRight={ {
						value: captionRightMargin,
						label: 'captionRightMargin',
					} }
					valueBottom={ {
						value: captionBottomMargin,
						label: 'captionBottomMargin',
					} }
					valueLeft={ {
						value: captionLeftMargin,
						label: 'captionLeftMargin',
					} }
					valueTopTablet={ {
						value: captionTopMarginTablet,
						label: 'captionTopMarginTablet',
					} }
					valueRightTablet={ {
						value: captionRightMarginTablet,
						label: 'captionRightMarginTablet',
					} }
					valueBottomTablet={ {
						value: captionBottomMarginTablet,
						label: 'captionBottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: captionLeftMarginTablet,
						label: 'captionLeftMarginTablet',
					} }
					valueTopMobile={ {
						value: captionTopMarginMobile,
						label: 'captionTopMarginMobile',
					} }
					valueRightMobile={ {
						value: captionRightMarginMobile,
						label: 'captionRightMarginMobile',
					} }
					valueBottomMobile={ {
						value: captionBottomMarginMobile,
						label: 'captionBottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: captionLeftMarginMobile,
						label: 'captionLeftMarginMobile',
					} }
					unit={ {
						value: captionMarginUnit,
						label: 'captionMarginUnit',
					} }
					mUnit={ {
						value: captionMarginUnitMobile,
						label: 'captionMarginUnitMobile',
					} }
					tUnit={ {
						value: captionMarginUnitTablet,
						label: 'captionMarginUnitTablet',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: captionMarginLink,
						label: 'captionMarginLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	}
	return (
		<React.Fragment>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ stylePanel() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</React.Fragment>
	);
}

settings.propTypes = propTypes;
settings.defaultProps = defaultProps;
