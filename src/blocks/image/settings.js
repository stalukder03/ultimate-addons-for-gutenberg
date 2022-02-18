import React, {Suspense} from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import { useViewportMatch } from '@wordpress/compose';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import {
	store as blockEditorStore,
	__experimentalImageSizeControl as ImageSizeControl,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	TextControl,
	RadioControl,
	__experimentalAlignmentMatrixControl as AlignmentMatrixControl
} from '@wordpress/components';


import { store as coreStore } from '@wordpress/core-data';
// Extend component
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function settings( props ) {
	props = props.parentProps;
	const { attributes, setAttributes, deviceType, context, isSelected, clientId } = props;
	const {
		layout,
		id,
		width,
		height,
		align,
		alt,
		sizeSlug,
		// caption
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
		captionMarginLink,
		// heading
		headingLoadGoogleFonts,
		headingFontFamily,
		headingFontWeight,
		headingFontStyle,
		headingFontSize,
		headingColor,
		headingTransform,
		headingDecoration,
		headingFontSizeType,
		headingFontSizeMobile,
		headingFontSizeTablet,
		headingLineHeight,
		headingLineHeightType,
		headingLineHeightMobile,
		headingLineHeightTablet,
		headingTopMargin,
		headingRightMargin,
		headingLeftMargin,
		headingBottomMargin,
		headingTopMarginTablet,
		headingRightMarginTablet,
		headingLeftMarginTablet,
		headingBottomMarginTablet,
		headingTopMarginMobile,
		headingRightMarginMobile,
		headingLeftMarginMobile,
		headingBottomMarginMobile,
		headingMarginUnit,
		headingMarginUnitTablet,
		headingMarginUnitMobile,
		headingMarginLink,
		// overlay
		overlayContentPosition
	} = attributes;
	const {imageSizes} = useSelect(
		( select ) => {
			const {getSettings} = select( blockEditorStore );
			const {imageSizes} = getSettings()
			return {imageSizes};
		},
		[ clientId ]
	);

	const { image } = useSelect(
		( select ) => {
			const { getMedia } = select( coreStore );
			return {
				image: id && isSelected ? getMedia( id ) : null
			};
		},
		[ id, isSelected ]
	);

	const { allowResize = true } = context;
	const isLargeViewport = useViewportMatch( 'medium' );
	const isWideAligned = [ 'wide', 'full' ].includes( align );
	const isResizable = allowResize && ! ( isWideAligned && isLargeViewport );
	const imageSizeOptions = imageSizes.reduce( ( acc, item ) => {
		acc.push( { value: item.slug, label: item.name } )
		return acc;
	}, [] );


	function updateImage( newSizeSlug ) {
		const newUrl = image?.media_details?.sizes[newSizeSlug]
		if ( ! newUrl ) {
			return null;
		}
		setAttributes( {
			url: newUrl?.source_url,
			width: newUrl?.width,
			height: newUrl?.height,
			sizeSlug: newSizeSlug,
		} );
	}

	const generalPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Image settings', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<RadioControl
				label="Layout"
				selected={ layout }
				options={ [
					{ label: 'Normal View', value: 'default' },
					{ label: 'Overlay View', value: 'overlay' },
				] }
				onChange={ ( value ) => setAttributes({ layout: value}) }
			/>
			{
				id && isSelected && (
					<>
						<ImageSizeControl
							onChangeImage={ updateImage }
							onChange={ ( value ) => setAttributes( value ) }
							slug={ sizeSlug }
							width={ width }
							height={ height }
							imageSizeOptions={ imageSizeOptions }
							isResizable={ isResizable }
							imageWidth={ image?.media_details?.width }
							imageHeight={ image?.media_details?.height }
						/>
						<TextControl
							label={ __( 'Alt text (alternative text)' ) }
							value={ alt }
							onChange={ ( value ) => setAttributes( { alt: value } ) }
						/>
					</>
				)
			}
		</UAGAdvancedPanelBody>
	)

	const headingStylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
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
						value: headingLoadGoogleFonts,
						label: 'headingLoadGoogleFonts',
					} }
					fontFamily={ {
						value: headingFontFamily,
						label: 'headingFontFamily',
					} }
					fontWeight={ {
						value: headingFontWeight,
						label: 'headingFontWeight',
					} }
					fontStyle={ {
						value: headingFontStyle,
						label: 'headingFontStyle',
					} }
					transform={ {
						value: headingTransform,
						label: 'headingTransform',
					} }
					decoration={ {
						value: headingDecoration,
						label: 'headingDecoration',
					} }
					fontSizeType={ {
						value: headingFontSizeType,
						label: 'headingFontSizeType',
					} }
					fontSize={ {
						value: headingFontSize,
						label: 'headingFontSize',
					} }
					fontSizeMobile={ {
						value: headingFontSizeMobile,
						label: 'headingFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: headingFontSizeTablet,
						label: 'headingFontSizeTablet',
					} }
					lineHeightType={ {
						value: headingLineHeightType,
						label: 'headingLineHeightType',
					} }
					lineHeight={ {
						value: headingLineHeight,
						label: 'headingLineHeight',
					} }
					lineHeightMobile={ {
						value: headingLineHeightMobile,
						label: 'headingLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: headingLineHeightTablet,
						label: 'headingLineHeightTablet',
					} }
				/>
			</Suspense>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ headingColor ? headingColor : '' }
				onColorChange={ ( value ) =>
					setAttributes( { headingColor: value } )
				}
			/>
			<SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: headingTopMargin,
					label: 'headingTopMargin',
				} }
				valueRight={ {
					value: headingRightMargin,
					label: 'headingRightMargin',
				} }
				valueBottom={ {
					value: headingBottomMargin,
					label: 'headingBottomMargin',
				} }
				valueLeft={ {
					value: headingLeftMargin,
					label: 'headingLeftMargin',
				} }
				valueTopTablet={ {
					value: headingTopMarginTablet,
					label: 'headingTopMarginTablet',
				} }
				valueRightTablet={ {
					value: headingRightMarginTablet,
					label: 'headingRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: headingBottomMarginTablet,
					label: 'headingBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: headingLeftMarginTablet,
					label: 'headingLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: headingTopMarginMobile,
					label: 'headingTopMarginMobile',
				} }
				valueRightMobile={ {
					value: headingRightMarginMobile,
					label: 'headingRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: headingBottomMarginMobile,
					label: 'headingBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: headingLeftMarginMobile,
					label: 'headingLeftMarginMobile',
				} }
				unit={ {
					value: headingMarginUnit,
					label: 'headingMarginUnit',
				} }
				mUnit={ {
					value: headingMarginUnitMobile,
					label: 'headingMarginUnitMobile',
				} }
				tUnit={ {
					value: headingMarginUnitTablet,
					label: 'headingMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: headingMarginLink,
					label: 'headingMarginLink',
				} }
			/>
		</UAGAdvancedPanelBody>
	)

	const captionStylePanel =  (
		<UAGAdvancedPanelBody
			title={ layout === 'overlay' ?  __( 'Sub Title', 'ultimate-addons-for-gutenberg' ) : __( 'Caption', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
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
	)

	const overlayStylePanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Overlay Settings', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<AlignmentMatrixControl
				label={__('Content Postion', 'ultimate-addons-for-gutenberg')}
				value={ overlayContentPosition }
				onChange={ ( newAlignment ) =>  setAttributes({overlayContentPosition: newAlignment}) }
			/>
		</UAGAdvancedPanelBody>
	)
	return (
		<React.Fragment>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{generalPanel}
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{
							layout === 'overlay' && (
								<>
									{overlayStylePanel}
									{headingStylePanel}
								</>
							)
						}
						{ captionStylePanel }
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
