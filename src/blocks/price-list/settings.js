import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import MultiButtonsControl from '@Components/multi-buttons-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import renderSVG from '@Controls/renderIcon';
import presets from './presets';
import UAGPresets from '@Components/presets';

const maxColumns = 3;

import { InspectorControls } from '@wordpress/block-editor';

import { SelectControl, Icon, ToggleControl } from '@wordpress/components';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;
	const { setAttributes, attributes, deviceType } = props;

	// Setup the attributes.
	const {
		menu_item_count,
		titleSpace,
		columns,
		tcolumns,
		mcolumns,
		rowGap,
		columnGap,
		priceColor,
		descColor,
		titleColor,
		seperatorStyle,
		seperatorWidth,
		seperatorThickness,
		seperatorColor,
		priceLoadGoogleFonts,
		titleLoadGoogleFonts,
		descLoadGoogleFonts,
		titleFontSizeType,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleFontFamily,
		titleFontWeight,
		titleFontStyle,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		priceFontSizeType,
		priceFontSize,
		priceFontSizeTablet,
		priceFontSizeMobile,
		priceFontFamily,
		priceFontWeight,
		priceFontStyle,
		priceLineHeightType,
		priceLineHeight,
		priceLineHeightTablet,
		priceLineHeightMobile,
		descFontSizeType,
		descFontSize,
		descFontSizeTablet,
		descFontSizeMobile,
		descFontFamily,
		descFontWeight,
		descFontStyle,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		headingTag,
		imagePosition,
		imageAlignment,
		imageSize,
		imageWidth,
		stack,
		imageWidthType,
		seperatorWidthType,
		rowGapType,
		columnGapType,
		titleSpaceType,
		contentPaddingTop,
		contentPaddingRight,
		contentPaddingBottom,
		contentPaddingLeft,
		contentPaddingTopTablet,
		contentPaddingRightTablet,
		contentPaddingBottomTablet,
		contentPaddingLeftTablet,
		contentPaddingTopMobile,
		contentPaddingRightMobile,
		contentPaddingBottomMobile,
		contentPaddingLeftMobile,
		contentPaddingUnit,
		contentMobilePaddingUnit,
		contentTabletPaddingUnit,
		contentSpacingLink,
		imgPaddingTop,
		imgPaddingRight,
		imgPaddingBottom,
		imgPaddingLeft,
		imgPaddingTopTablet,
		imgPaddingRightTablet,
		imgPaddingBottomTablet,
		imgPaddingLeftTablet,
		imgPaddingTopMobile,
		imgPaddingRightMobile,
		imgPaddingBottomMobile,
		imgPaddingLeftMobile,
		imgPaddingUnit,
		imgMobilePaddingUnit,
		imgTabletPaddingUnit,
		imgSpacingLink,
		titleTransform,
		titleDecoration,
		descTransform,
		descDecoration,
		priceTransform,
		priceDecoration,
		showTitle,
		showContent,
		showPrice,
		showImg,
		headingAlign,
		imgAlign
	} = attributes;

	const setimageSize = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( pricelistChild ) => {
			pricelistChild.attributes.imageSize = value;
		} );
		setAttributes( { imageSize: value } );
	};

	let loadTitleGoogleFonts;
	let loadDescGoogleFonts;
	let loadPriceGoogleFonts;

	if ( titleLoadGoogleFonts === true ) {
		const titleconfig = {
			google: {
				families: [
					titleFontFamily +
						( titleFontWeight ? ':' + titleFontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ titleconfig }></WebfontLoader>
		);
	}

	if ( descLoadGoogleFonts === true ) {
		const descconfig = {
			google: {
				families: [
					descFontFamily +
						( descFontWeight ? ':' + descFontWeight : '' ),
				],
			},
		};

		loadDescGoogleFonts = (
			<WebfontLoader config={ descconfig }></WebfontLoader>
		);
	}

	if ( priceLoadGoogleFonts === true ) {
		const priceconfig = {
			google: {
				families: [
					priceFontFamily +
						( priceFontWeight ? ':' + priceFontWeight : '' ),
				],
			},
		};

		loadPriceGoogleFonts = (
			<WebfontLoader config={ priceconfig }></WebfontLoader>
		);
	}

	// Margin Settings.
	const marginSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Spacing' ) } initialOpen={ false }>
				<Range
					label={ __( 'Row Gap' ) }
					setAttributes={ setAttributes }
					value={ rowGap }
					onChange={ ( value ) => setAttributes( { rowGap: value } ) }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: rowGapType,
						label: 'rowGapType',
					} }
				/>
				<Range
					label={ __( 'Column Gap' ) }
					setAttributes={ setAttributes }
					value={ columnGap }
					onChange={ ( value ) =>
						setAttributes( { columnGap: value } )
					}
					min={ 0 }
					max={ 50 }
					unit={ {
						value: columnGapType,
						label: 'columnGapType',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __(
						'Item Padding',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: contentPaddingTop,
						label: 'contentPaddingTop',
					} }
					valueRight={ {
						value: contentPaddingRight,
						label: 'contentPaddingRight',
					} }
					valueBottom={ {
						value: contentPaddingBottom,
						label: 'contentPaddingBottom',
					} }
					valueLeft={ {
						value: contentPaddingLeft,
						label: 'contentPaddingLeft',
					} }
					valueTopTablet={ {
						value: contentPaddingTopTablet,
						label: 'contentPaddingTopTablet',
					} }
					valueRightTablet={ {
						value: contentPaddingRightTablet,
						label: 'contentPaddingRightTablet',
					} }
					valueBottomTablet={ {
						value: contentPaddingBottomTablet,
						label: 'contentPaddingBottomTablet',
					} }
					valueLeftTablet={ {
						value: contentPaddingLeftTablet,
						label: 'contentPaddingLeftTablet',
					} }
					valueTopMobile={ {
						value: contentPaddingTopMobile,
						label: 'contentPaddingTopMobile',
					} }
					valueRightMobile={ {
						value: contentPaddingRightMobile,
						label: 'contentPaddingRightMobile',
					} }
					valueBottomMobile={ {
						value: contentPaddingBottomMobile,
						label: 'contentPaddingBottomMobile',
					} }
					valueLeftMobile={ {
						value: contentPaddingLeftMobile,
						label: 'contentPaddingLeftMobile',
					} }
					unit={ {
						value: contentPaddingUnit,
						label: 'contentPaddingUnit',
					} }
					mUnit={ {
						value: contentMobilePaddingUnit,
						label: 'contentMobilePaddingUnit',
					} }
					tUnit={ {
						value: contentTabletPaddingUnit,
						label: 'contentTabletPaddingUnit',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: contentSpacingLink,
						label: 'contentSpacingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	// Image sizes.
	const imageSizeOptions = [
		{ value: 'thumbnail', label: __( 'Thumbnail' ) },
		{ value: 'medium', label: __( 'Medium' ) },
		{ value: 'full', label: __( 'Large' ) },
	];

	//Image Setting
	const imageSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Image' ) } initialOpen={ false }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Position',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: imgAlign,
						label: 'imgAlign',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'top',
							label: 'Top',
						},
						{
							value: 'side',
							label: 'Side',
						},
					] }
					showIcons={ false }
				/>
				{ ( imgAlign === 'side' ) && (
					<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: imagePosition,
						label: 'imagePosition',
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
							value: 'right',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-right' ) }
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
				)}
				{ ( imgAlign === 'top' ) && (
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: headingAlign,
						label: 'headingAlign',
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
									icon={ renderSVG( 'fa fa-align-center' ) }
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
									icon={ renderSVG( 'fa fa-align-right' ) }
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
				)}
				{ ( imagePosition === 'left' || imagePosition === 'right' ) && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Stack on',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: stack,
								label: 'stack',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'none',
									label: 'None',
								},
								{
									value: 'tablet',
									label: 'Tablet',
								},
								{
									value: 'mobile',
									label: 'Mobile',
								},
							] }
							help={ __(
								'Note: Choose on what breakpoint the Images will stack.'
							) }
							showIcons={ false }
						/>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Vertical Alignment',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: imageAlignment,
								label: 'imageAlignment',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'top',
									label: 'Top',
								},
								{
									value: 'middle',
									label: 'Middle',
								},
							] }
							showIcons={ false }
						/>
					</>
				) }
				<SelectControl
					label={ __( 'Size' ) }
					options={ imageSizeOptions }
					value={ imageSize }
					onChange={ setimageSize }
				/>
				<Range
					label={ __( 'Width' ) }
					value={ imageWidth }
					setAttributes={ setAttributes }
					onChange={ ( value ) =>
						setAttributes( { imageWidth: value } )
					}
					min={ 0 }
					max={ 500 }
					unit={ {
						value: imageWidthType,
						label: 'imageWidthType',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	//Image Setting
	const imageStyles = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Image' ) } initialOpen={ false }>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: imgPaddingTop,
						label: 'imgPaddingTop',
					} }
					valueRight={ {
						value: imgPaddingRight,
						label: 'imgPaddingRight',
					} }
					valueBottom={ {
						value: imgPaddingBottom,
						label: 'imgPaddingBottom',
					} }
					valueLeft={ {
						value: imgPaddingLeft,
						label: 'imgPaddingLeft',
					} }
					valueTopTablet={ {
						value: imgPaddingTopTablet,
						label: 'imgPaddingTopTablet',
					} }
					valueRightTablet={ {
						value: imgPaddingRightTablet,
						label: 'imgPaddingRightTablet',
					} }
					valueBottomTablet={ {
						value: imgPaddingBottomTablet,
						label: 'imgPaddingBottomTablet',
					} }
					valueLeftTablet={ {
						value: imgPaddingLeftTablet,
						label: 'imgPaddingLeftTablet',
					} }
					valueTopMobile={ {
						value: imgPaddingTopMobile,
						label: 'imgPaddingTopMobile',
					} }
					valueRightMobile={ {
						value: imgPaddingRightMobile,
						label: 'imgPaddingRightMobile',
					} }
					valueBottomMobile={ {
						value: imgPaddingBottomMobile,
						label: 'imgPaddingBottomMobile',
					} }
					valueLeftMobile={ {
						value: imgPaddingLeftMobile,
						label: 'imgPaddingLeftMobile',
					} }
					unit={ {
						value: imgPaddingUnit,
						label: 'imgPaddingUnit',
					} }
					mUnit={ {
						value: imgMobilePaddingUnit,
						label: 'imgMobilePaddingUnit',
					} }
					tUnit={ {
						value: imgTabletPaddingUnit,
						label: 'imgTabletPaddingUnit',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: imgSpacingLink,
						label: 'imgSpacingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	//Color settings
	const contentSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Content' ) } initialOpen={ false }>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ descColor ? descColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( {
							descColor: value,
						} )
					}
				/>
				<TypographyControl
					label={ __( 'Typography' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: descLoadGoogleFonts,
						label: 'descLoadGoogleFonts',
					} }
					fontFamily={ {
						value: descFontFamily,
						label: 'descFontFamily',
					} }
					fontWeight={ {
						value: descFontWeight,
						label: 'descFontWeight',
					} }
					fontStyle={ {
						value: descFontStyle,
						label: 'descFontStyle',
					} }
					fontSizeType={ {
						value: descFontSizeType,
						label: 'descFontSizeType',
					} }
					fontSize={ {
						value: descFontSize,
						label: 'descFontSize',
					} }
					fontSizeMobile={ {
						value: descFontSizeMobile,
						label: 'descFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: descFontSizeTablet,
						label: 'descFontSizeTablet',
					} }
					lineHeightType={ {
						value: descLineHeightType,
						label: 'descLineHeightType',
					} }
					lineHeight={ {
						value: descLineHeight,
						label: 'descLineHeight',
					} }
					lineHeightMobile={ {
						value: descLineHeightMobile,
						label: 'descLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: descLineHeightTablet,
						label: 'descLineHeightTablet',
					} }
					transform={ {
						value: descTransform,
						label: 'descTransform',
					} }
					decoration={ {
						value: descDecoration,
						label: 'descDecoration',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	//seperator setting
	const separatorSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Separator' ) } initialOpen={ false }>
				<SelectControl
					label={ __( 'Style' ) }
					value={ seperatorStyle }
					onChange={ ( value ) =>
						setAttributes( { seperatorStyle: value } )
					}
					options={ [
						{ value: 'none', label: __( 'None' ) },
						{ value: 'solid', label: __( 'Solid' ) },
						{ value: 'dotted', label: __( 'Dotted' ) },
						{ value: 'dashed', label: __( 'Dashed' ) },
						{ value: 'double', label: __( 'Double' ) },
						{ value: 'groove', label: __( 'Groove' ) },
						{ value: 'inset', label: __( 'Inset' ) },
						{ value: 'outset', label: __( 'Outset' ) },
						{ value: 'ridge', label: __( 'Ridge' ) },
					] }
				/>
				{ 'none' !== seperatorStyle && (
					<>
						<Range
							label={ __( 'Width' ) }
							setAttributes={ setAttributes }
							value={ seperatorWidth }
							onChange={ ( value ) =>
								setAttributes( { seperatorWidth: value } )
							}
							min={ 0 }
							max={ 100 }
							unit={ {
								value: seperatorWidthType,
								label: 'seperatorWidthType',
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
										'Em',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'em',
								},
								{
									name: __(
										'%',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: '%',
								},
							] }
						/>
						<Range
							label={ __( 'Thickness' ) }
							setAttributes={ setAttributes }
							value={ seperatorThickness }
							onChange={ ( value ) =>
								setAttributes( { seperatorThickness: value } )
							}
							min={ 0 }
							max={ 20 }
							displayUnit={ false }
						/>
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ seperatorColor ? seperatorColor : '' }
							onColorChange={ ( value ) =>
								setAttributes( {
									seperatorColor: value,
								} )
							}
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	// Typography settings.
	const priceSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Price' ) } initialOpen={ false }>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ priceColor ? priceColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( {
							priceColor: value,
						} )
					}
				/>
				<TypographyControl
					label={ __( 'Typography' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: priceLoadGoogleFonts,
						label: 'priceLoadGoogleFonts',
					} }
					fontFamily={ {
						value: priceFontFamily,
						label: 'priceFontFamily',
					} }
					fontWeight={ {
						value: priceFontWeight,
						label: 'priceFontWeight',
					} }
					fontStyle={ {
						value: priceFontStyle,
						label: 'priceFontStyle',
					} }
					fontSizeType={ {
						value: priceFontSizeType,
						label: 'priceFontSizeType',
					} }
					fontSize={ {
						value: priceFontSize,
						label: 'priceFontSize',
					} }
					fontSizeMobile={ {
						value: priceFontSizeMobile,
						label: 'priceFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: priceFontSizeTablet,
						label: 'priceFontSizeTablet',
					} }
					lineHeightType={ {
						value: priceLineHeightType,
						label: 'priceLineHeightType',
					} }
					lineHeight={ {
						value: priceLineHeight,
						label: 'priceLineHeight',
					} }
					lineHeightMobile={ {
						value: priceLineHeightMobile,
						label: 'priceLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: priceLineHeightTablet,
						label: 'priceLineHeightTablet',
					} }
					transform={ {
						value: priceTransform,
						label: 'priceTransform',
					} }
					decoration={ {
						value: priceDecoration,
						label: 'priceDecoration',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const titleSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Title' ) } initialOpen={ false }>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ titleColor ? titleColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( {
							titleColor: value,
						} )
					}
				/>
				<TypographyControl
					label={ __( 'Typography' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: titleLoadGoogleFonts,
						label: 'titleLoadGoogleFonts',
					} }
					fontFamily={ {
						value: titleFontFamily,
						label: 'titleFontFamily',
					} }
					fontWeight={ {
						value: titleFontWeight,
						label: 'titleFontWeight',
					} }
					fontStyle={ {
						value: titleFontStyle,
						label: 'titleFontStyle',
					} }
					fontSizeType={ {
						value: titleFontSizeType,
						label: 'titleFontSizeType',
					} }
					fontSize={ {
						value: titleFontSize,
						label: 'titleFontSize',
					} }
					fontSizeMobile={ {
						value: titleFontSizeMobile,
						label: 'titleFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: titleFontSizeTablet,
						label: 'titleFontSizeTablet',
					} }
					lineHeightType={ {
						value: titleLineHeightType,
						label: 'titleLineHeightType',
					} }
					lineHeight={ {
						value: titleLineHeight,
						label: 'titleLineHeight',
					} }
					lineHeightMobile={ {
						value: titleLineHeightMobile,
						label: 'titleLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: titleLineHeightTablet,
						label: 'titleLineHeightTablet',
					} }
					transform={ {
						value: titleTransform,
						label: 'titleTransform',
					} }
					decoration={ {
						value: titleDecoration,
						label: 'titleDecoration',
					} }
				/>
				<Range
					label={ __( 'Bottom Margin' ) }
					value={ titleSpace }
					setAttributes={ setAttributes }
					onChange={ ( value ) =>
						setAttributes( { titleSpace: value } )
					}
					min={ 0 }
					max={ 50 }
					unit={ {
						value: titleSpaceType,
						label: 'titleSpaceType',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const presetSettings = () => {
		return <UAGAdvancedPanelBody
					title={ __( 'Presets', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
				>
					<UAGPresets
						setAttributes = { setAttributes }
						presets = { presets }
						presetInputType = 'radioImage'
					/>
				</UAGAdvancedPanelBody>
	};
	const inspectControl = () => {
		return (
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ presetSettings() }
						<UAGAdvancedPanelBody
							title={ __( 'General' ) }
							initialOpen={ true }
						>
							<ToggleControl
								label={ __(
									'Enable Title',
									'ultimate-addons-for-gutenberg'
								) }
								checked={ showTitle }
								onChange={ () =>
									setAttributes( { showTitle: ! showTitle } )
								}
							/>
							<ToggleControl
								label={ __(
									'Enable Content',
									'ultimate-addons-for-gutenberg'
								) }
								checked={ showContent }
								onChange={ () =>
									setAttributes( { showContent: ! showContent } )
								}
							/>
							<ToggleControl
								label={ __(
									'Enable Price',
									'ultimate-addons-for-gutenberg'
								) }
								checked={ showPrice }
								onChange={ () =>
									setAttributes( { showPrice: ! showPrice } )
								}
							/>
							<ToggleControl
								label={ __(
									'Enable Image',
									'ultimate-addons-for-gutenberg'
								) }
								checked={ showImg }
								onChange={ () =>
									setAttributes( { showImg: ! showImg } )
								}
							/>
							<ResponsiveSlider
								label={ __(
									'Columns',
									'ultimate-addons-for-gutenberg'
								) }
								data={ {
									desktop: {
										value: columns,
										label: 'columns',
									},
									tablet: {
										value: tcolumns,
										label: 'tcolumns',
									},
									mobile: {
										value: mcolumns,
										label: 'mcolumns',
									},
								} }
								min={ 1 }
								max={ Math.min( maxColumns, menu_item_count ) }
								displayUnit={ false }
								setAttributes={ setAttributes }
							/>
							{ showTitle &&
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
										label: __(
											'H1',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'h2',
										label: __(
											'H2',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'h3',
										label: __(
											'H3',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'h4',
										label: __(
											'H4',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'h5',
										label: __(
											'H5',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'h6',
										label: __(
											'H6',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'span',
										label: __(
											'Span',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'p',
										label: __(
											'P',
											'ultimate-addons-for-gutenberg'
										),
									},
								] }
							/>
							}
						</UAGAdvancedPanelBody>
						{ showImg && imageSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ showTitle && titleSettings() }
						{ separatorSettings() }
						{ showImg && imageStyles() }
						{ showContent && contentSettings() }
						{ showPrice && priceSettings() }
						{ marginSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	};

	return (
		<>
			{ inspectControl() }
			<Suspense fallback={ lazyLoader() }>
				{ loadTitleGoogleFonts }
				{ loadDescGoogleFonts }
				{ loadPriceGoogleFonts }
			</Suspense>
		</>
	);
};

export default React.memo( Settings );
