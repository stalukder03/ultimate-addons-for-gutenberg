import React from 'react';
import { __ } from '@wordpress/i18n';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import ResponsiveSelectControl from '@Components/responsive-select';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import UAGTabsControl from '@Components/tabs'

import { InspectorControls } from '@wordpress/block-editor';

import { ToggleControl, TextControl } from '@wordpress/components';

import Border from '@Components/border/index.js';
import BoxShadowControl from '@Components/box-shadow/index.js';

// Extend component
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGImage from '@Components/image';
import { useDeviceType } from '@Controls/getPreviewType';
import SpacingControl from '@Components/spacing-control';


const Settings = ( props ) => {
	const deviceType = useDeviceType();
	props = props.parentProps;
	const { attributes, setAttributes } = props;

    /*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = ( imageSelectorID ) => {

		// 0 = Code for Before-Image UAG Selector.
		// 1 = Code for After-Image UAG Selector.

		switch( imageSelectorID ) {

			case 0: setAttributes( { beforeImage: null } );
					break;

			case 1: setAttributes( { afterImage: null } );
					break;

			default: break;

		}

	};

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media, imageSelectorID ) => {

		if ( ! media || ! media.url ) {

			// 0 = Code for Before-Image UAG Selector.
			// 1 = Code for After-Image UAG Selector.

			switch( imageSelectorID ) {

				case 0: setAttributes( { beforeImage: null } );
						return;

				case 1: setAttributes( { afterImage: null } )
						return;

				default: return;

			}

		}

		if ( ! media.type || 'image' !== media.type ) {
			return;
		}

		switch( imageSelectorID ) {

			case 0: setAttributes( { beforeImage: media } );
					break;

			case 1: setAttributes( { afterImage: media } );
					break;

			default: break;

		}

	};

    const baSliderGeneralSettings = () => {

		const imageSizeOptions = [
			{
				value: 'thumb',
				label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'medium',
				label: __( 'Medium', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'large',
				label: __( 'Large', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'full',
				label: __( 'Full', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'custom',
				label: __( 'Custom', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const units = [
			{
				name: __( '%', 'ultimate-addons-for-gutenberg' ),
				unitValue: '%',
			},
			{
				name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
				unitValue: 'px',
			},
			{
				name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
				unitValue: 'em',
			},
		];

		// Recreating the same array for Height Units, without the percentage (since % has no impact on the height).
		const unitsHeight = [ units[1], units[2] ];

        return(
            <>

				{/* Image Selection Settings */}

                <UAGAdvancedPanelBody title={ __( 'Select Images', 'ultimate-addons-for-gutenberg' ) } initialOpen= { true }>
					<UAGImage
						label={ __( 'Before Image', 'ultimate-addons-for-gutenberg' ) }
						onSelectImage={ ( media ) => onSelectImage( media, 0 ) }	// 0 = Code for Before-Image UAG Selector.
						backgroundImage={ attributes.beforeImage }
						onRemoveImage={ () => onRemoveImage( 0 ) }
					/>
                    <UAGImage
						label={ __( 'After Image', 'ultimate-addons-for-gutenberg' ) }
						onSelectImage={ ( media ) => onSelectImage( media, 1 ) }	// 1 = Code for After-Image UAG Selector.
						backgroundImage={ attributes.afterImage }
						onRemoveImage={ () => onRemoveImage( 1 ) }
					/>
					<p><em>
						<strong>
							{ __( 'Note: ', 'ultimate-addons-for-gutenberg' ) }
						</strong>
						{ __( 'For best results, select images with the same aspect ratio.', 'ultimate-addons-for-gutenberg' ) }
					</em></p> 
				</UAGAdvancedPanelBody>

				{/* Image Size Settings */}

                <UAGAdvancedPanelBody title={ __( 'Image Size Settings', 'ultimate-addons-for-gutenberg' ) } initialOpen= { false }>
					<ResponsiveSelectControl
						label={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: attributes.imageDimDesktop,
								label: 'imageDimDesktop',
							},
							tablet: {
								value: attributes.imageDimTablet,
								label: 'imageDimTablet',
							},
							mobile: {
								value: attributes.imageDimMobile,
								label: 'imageDimMobile',
							},
						} }
						options={ {
							desktop: imageSizeOptions,
							tablet: imageSizeOptions,
							mobile: imageSizeOptions,
						} }
						setAttributes={ setAttributes }
					/>

					{/* Custom Width/Height Settings */}

					{ ( ( deviceType === 'Desktop' && attributes.imageDimDesktop==='custom' ) ||
						( deviceType === 'Tablet' && attributes.imageDimTablet==='custom' ) ||
						( deviceType === 'Mobile'&& attributes.imageDimMobile==='custom' ) ) &&

						<>
							<ResponsiveSlider
								label={ __( 'Slider Width', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									desktop: {
										value: attributes.sliderWidthDesktop,
										label: 'sliderWidthDesktop',
										unit: {
											value: attributes.sliderWidthUnitDesktop,
											label: 'sliderWidthUnitDesktop',
										},
									},
									tablet: {
										value: attributes.sliderWidthTablet,
										label: 'sliderWidthTablet',
										unit: {
											value: attributes.sliderWidthUnitTablet,
											label: 'sliderWidthUnitTablet',
										},
									},
									mobile: {
										value: attributes.sliderWidthMobile,
										label: 'sliderWidthMobile',
										unit: {
											value: attributes.sliderWidthUnitMobile,
											label: 'sliderWidthUnitMobile',
										},
									},
								} }
								min={ 0 }
								limitMax={ { '%': 100, 'px': 1600, 'em': 100 } }
								units={ units }
								setAttributes={ setAttributes }
							/>

							<ResponsiveSlider
								label={ __( 'Slider Height', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									desktop: {
										value: attributes.sliderHeightDesktop,
										label: 'sliderHeightDesktop',
										unit: {
											value: attributes.sliderHeightUnitDesktop,
											label: 'sliderHeightUnitDesktop',
										},
									},
									tablet: {
										value: attributes.sliderHeightTablet,
										label: 'sliderHeightTablet',
										unit: {
											value: attributes.sliderHeightUnitTablet,
											label: 'sliderHeightUnitTablet',
										},
									},
									mobile: {
										value: attributes.sliderHeightMobile,
										label: 'sliderHeightMobile',
										unit: {
											value: attributes.sliderHeightUnitMobile,
											label: 'sliderHeightUnitMobile',
										},
									},
								} }
								min={ 0 }
								limitMax={ { px: 1600, em: 100 } }
								units={ unitsHeight }
								setAttributes={ setAttributes }
							/>
						</>			

					}

				</UAGAdvancedPanelBody>

				{/* General Slider Settings */}

                <UAGAdvancedPanelBody title={ __( 'General Slider Settings', 'ultimate-addons-for-gutenberg' ) } initialOpen= { false }>

					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Slider Orientation',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: attributes.sliderOrientation,
							label: 'sliderOrientation',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								label: __( 'Horizontal', 'ultimate-addons-for-gutenberg' ),
								value: 'horizontal'
							},
							{
								label: __( 'Vertical', 'ultimate-addons-for-gutenberg' ),
								value: 'vertical'
							},
						] }
						showIcons={ false }
					/>

					<Range
						label={ __( 'Initial Slider Position', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ attributes.sliderPosition }
						onChange={ ( newSliderPosition ) =>
							setAttributes( { sliderPosition: newSliderPosition } )
						}
						step={ 1 }
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
					/>

					<ToggleControl
						label={ __( 'Animate Slider?', 'ultimate-addons-for-gutenberg' ) }
						help={
							attributes.animateSlider
								? __( 'Note: Slider animation preview is disabled in the editor.', 'ultimate-addons-for-gutenberg' )
								: __( 'Enables animated slider handle.', 'ultimate-addons-for-gutenberg' )
						}
						checked={ attributes.animateSlider }
						onChange={ () => {
							setAttributes( { animateSlider: !attributes.animateSlider } );
						} }
					/>

					<ToggleControl
						label={ __( 'Control slider handle on mouse hover?', 'ultimate-addons-for-gutenberg' ) }
						help={
							attributes.hoverSlider
								? __( 'Disables hover-based slider handle controls.', 'ultimate-addons-for-gutenberg' )
								: __( 'Enables hover-based slider handle controls.', 'ultimate-addons-for-gutenberg' )
						}
						checked={ attributes.hoverSlider }
						onChange={ () => {
							setAttributes( { hoverSlider: !attributes.hoverSlider } );
						} }
					/>

				</UAGAdvancedPanelBody>

				{ attributes.showLabels &&

					<UAGAdvancedPanelBody title={ __( 'Label Settings', 'ultimate-addons-for-gutenberg' ) } initialOpen= { false }>
						
						<TextControl
							label={ __( 'Before-Image Label', 'ultimate-addons-for-gutenberg' ) }
							value={ attributes.beforeLabel }
							onChange={ ( newBeforeLabel ) => setAttributes( { beforeLabel: newBeforeLabel } ) }
						/>

						<TextControl
							label={ __( 'After-Image Label', 'ultimate-addons-for-gutenberg' ) }
							value={ attributes.afterLabel }
							onChange={ ( newAfterLabel ) => setAttributes( { afterLabel: newAfterLabel } ) }
						/>

						<ToggleControl
							label={ __( 'Show Image Labels on Desktop?', 'ultimate-addons-for-gutenberg' ) }
							help={
								attributes.showLabels
									? __( 'Hides labels for images on desktop.', 'ultimate-addons-for-gutenberg' )
									: __( 'Shows labels for images on desktop.', 'ultimate-addons-for-gutenberg' )
							}
							checked={ attributes.showLabels }
							onChange={ () => {
								setAttributes( { showLabels: !attributes.showLabels } );
							} }
						/>

						<ToggleControl
							label={ __( 'Show Image Labels on Tablet?', 'ultimate-addons-for-gutenberg' ) }
							help={
								attributes.showLabelsTablet
									? __( 'Hides labels for images on tablets.', 'ultimate-addons-for-gutenberg' )
									: __( 'Shows labels for images on tablets.', 'ultimate-addons-for-gutenberg' )
							}
							checked={ attributes.showLabelsTablet }
							onChange={ () => setAttributes( { showLabelsTablet: !attributes.showLabelsTablet } ) }
						/>

						<ToggleControl
							label={ __( 'Show Image Labels on Mobile?', 'ultimate-addons-for-gutenberg' ) }
							help={
								attributes.showLabelsMobile
									? __( 'Hides labels for images on mobiles.', 'ultimate-addons-for-gutenberg' )
									: __( 'Shows labels for images on mobiles.', 'ultimate-addons-for-gutenberg' )
							}
							checked={ attributes.showLabelsMobile }
							onChange={ () => setAttributes( { showLabelsMobile: !attributes.showLabelsMobile } ) }
						/>

					</UAGAdvancedPanelBody>

				}

            </>
        );

    }

	const baSliderStyleSettings = () => {

		const beforeLabelStylingSettings = () => {

			return(
				<>
						{/* Before Label */}
						
						<AdvancedPopColorControl
							label={ __( 'Label Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ attributes.beforeLabelColor ? attributes.beforeLabelColor : '' }
							onColorChange={ ( value ) =>
								setAttributes( { beforeLabelColor: value } )
							}
						/>
						<AdvancedPopColorControl
							label={ __( 'Label Background Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ attributes.beforeLabelBgColor ? attributes.beforeLabelBgColor : '' }
							onColorChange={ ( value ) =>
								setAttributes( { beforeLabelBgColor: value } )
							}
						/>
						<Range
							label={ __( 'Label Opacity', 'ultimate-addons-for-gutenberg' ) }
							setAttributes={ setAttributes }
							value={ attributes.beforeLabelOpacity }
							onChange={ ( value ) =>
								setAttributes( { beforeLabelOpacity: value } )
							}
							step={ 0.01 }
							min={ 0 }
							max={ 1 }
							displayUnit={ false }
						/>
						<ResponsiveSlider
							label={ __( 'Vertical Alignment', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: attributes.beforeLabelVerticalAlignment,
									label: 'beforeLabelVerticalAlignment',
								},
								tablet: {
									value: attributes.beforeLabelVerticalAlignmentTablet,
									label: 'beforeLabelVerticalAlignmentTablet',
								},
								mobile: {
									value: attributes.beforeLabelVerticalAlignmentMobile,
									label: 'beforeLabelVerticalAlignmentMobile',
								},
							} }
							step={ 0.1 }
							min={ 1 }
							max={ 100 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
						<ResponsiveSlider
							label={ __( 'Horizontal Alignment', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: attributes.beforeLabelHorizontalAlignment,
									label: 'beforeLabelHorizontalAlignment',
								},
								tablet: {
									value: attributes.beforeLabelHorizontalAlignmentTablet,
									label: 'beforeLabelHorizontalAlignmentTablet',
								},
								mobile: {
									value: attributes.beforeLabelHorizontalAlignmentMobile,
									label: 'beforeLabelHorizontalAlignmentMobile',
								},
							} }
							step={ 0.1 }
							min={ 1 }
							max={ 100 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
				</>
			);

		}

		const afterLabelStylingSettings = () => {
			
			return(
				<>
					{/* After Label */}

					<AdvancedPopColorControl
						label={ __( 'Label Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ attributes.afterLabelColor ? attributes.afterLabelColor : '' }
						onColorChange={ ( value ) =>
							setAttributes( { afterLabelColor: value } )
						}
					/>
					<AdvancedPopColorControl
						label={ __( 'Label Background Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ attributes.afterLabelBgColor ? attributes.afterLabelBgColor : '' }
						onColorChange={ ( value ) =>
							setAttributes( { afterLabelBgColor: value } )
						}
					/>
					<Range
						label={ __( 'Label Opacity', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ attributes.afterLabelOpacity }
						onChange={ ( value ) =>
							setAttributes( { afterLabelOpacity: value } )
						}
						step={ 0.01 }
						min={ 0 }
						max={ 1 }
						displayUnit={ false }
					/>
					<ResponsiveSlider
						label={ __( 'Vertical Alignment', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: attributes.afterLabelVerticalAlignment,
								label: 'afterLabelVerticalAlignment',
							},
							tablet: {
								value: attributes.afterLabelVerticalAlignmentTablet,
								label: 'afterLabelVerticalAlignmentTablet',
							},
							mobile: {
								value: attributes.afterLabelVerticalAlignmentMobile,
								label: 'afterLabelVerticalAlignmentMobile',
							},
						} }
						step={ 0.1 }
						min={ 1 }
						max={ 100 }
						displayUnit={ false }
						setAttributes={ setAttributes }
					/>
					<ResponsiveSlider
						label={ __( 'Horizontal Alignment', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: attributes.afterLabelHorizontalAlignment,
								label: 'afterLabelHorizontalAlignment',
							},
							tablet: {
								value: attributes.afterLabelHorizontalAlignmentTablet,
								label: 'afterLabelHorizontalAlignmentTablet',
							},
							mobile: {
								value: attributes.afterLabelHorizontalAlignmentMobile,
								label: 'afterLabelHorizontalAlignmentMobile',
							},
						} }
						step={ 0.1 }
						min={ 1 }
						max={ 100 }
						displayUnit={ false }
						setAttributes={ setAttributes }
					/>
				</>
			);

		}


		return(
			<>
				{ attributes.showLabels &&

					<UAGAdvancedPanelBody title={ __( 'Label Styling', 'ultimate-addons-for-gutenberg' ) } initialOpen= { true }>

						<UAGTabsControl
							tabs={ [
								{
									name: 'beforeLabel',
									title: __( 'Before', 'ultimate-addons-for-gutenberg' ),
								},
								{
									name: 'afterLabel',
									title: __( 'After', 'ultimate-addons-for-gutenberg' ),
								},
							] }
							beforeLabel={ beforeLabelStylingSettings() }
							afterLabel={ afterLabelStylingSettings() }
							disableBottomSeparator={ false }
						/>

						{/* Label Border Styling */}

						<Border
							setAttributes={ setAttributes }
							borderStyle={ {
								value: attributes.labelBorderStyle,
								label: 'labelBorderStyle',
								title: __( 'Style', 'ultimate-addons-for-gutenberg' ),
							} }
							borderWidth={ {
								value: attributes.labelBorderWidth,
								label: 'labelBorderWidth',
								title: __( 'Width', 'ultimate-addons-for-gutenberg' ),
							} }
							borderRadius={ {
								value: attributes.labelBorderRadius,
								label: 'labelBorderRadius',
								title: __( 'Radius', 'ultimate-addons-for-gutenberg' ),
							} }
							borderColor={ {
								value: attributes.labelBorderColor,
								label: 'labelBorderColor',
								title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
							} }
							borderHoverColor={ {
								value: attributes.labelBorderHoverColor,
								label: 'labelBorderHoverColor',
								title: __(
									'Hover Color',
									'ultimate-addons-for-gutenberg'
								),
							} }
							disableBottomSeparator={ true }
						/>

					</UAGAdvancedPanelBody>

				}

				{/* Divider/Handle Styling */}
				<UAGAdvancedPanelBody title={ __( 'Divider/Handle Styling', 'ultimate-addons-for-gutenberg' ) } initialOpen= { false }>
					<AdvancedPopColorControl
						label={ __( 'Divider Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ attributes.dividerColor }
						onColorChange={ ( value ) =>
							setAttributes( { dividerColor: value } )
						}
					/>
					<Range
						label={ __( 'Divider Width', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ attributes.dividerWidth }
						onChange={ ( value ) => setAttributes( { dividerWidth: value } ) }
						step={ 0.1 }
						min={ 0 }
						max={ 20 }
						displayUnit={ false }
					/>
					<ToggleControl
						label={ __( 'Enable hover animation?', 'ultimate-addons-for-gutenberg' ) }
						help={ __( 'Slightly enlarges handle on hover.', 'ultimate-addons-for-gutenberg' ) }
						checked={ attributes.handleHoverAnimation }
						onChange={ () => setAttributes( { handleHoverAnimation: !attributes.handleHoverAnimation } ) }
					/>
				</UAGAdvancedPanelBody>

				{/* Slider Elevation Styling */}
				<UAGAdvancedPanelBody title={ __( 'Slider Elevation Styling', 'ultimate-addons-for-gutenberg' ) } initialOpen= { false }>

					<ToggleControl
						label={ __( 'Enable Slider Elevation?', 'ultimate-addons-for-gutenberg' ) }
						help={
							attributes.enableSliderElevation
								? __( 'Disables on-focus slider elevation.', 'ultimate-addons-for-gutenberg' )
								: __( 'Enables on-focus slider elevation.', 'ultimate-addons-for-gutenberg' )
						}
						checked={ attributes.enableSliderElevation }
						onChange={ () => {
							setAttributes( { enableSliderElevation: !attributes.enableSliderElevation } );
						} }
					/>

					{ attributes.enableSliderElevation &&

						<>
							<BoxShadowControl
								setAttributes={ setAttributes }
								label={ __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ) }
								boxShadowColor={ {
									value: attributes.sliderBoxShadowColor,
									label: 'sliderBoxShadowColor',
									title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowHOffset={ {
									value: attributes.sliderBoxShadowHOffset,
									label: 'sliderBoxShadowHOffset',
									title: __( 'Horizontal', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowVOffset={ {
									value: attributes.sliderBoxShadowVOffset,
									label: 'sliderBoxShadowVOffset',
									title: __( 'Vertical', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowBlur={ {
									value: attributes.sliderBoxShadowBlur,
									label: 'sliderBoxShadowBlur',
									title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowSpread={ {
									value: attributes.sliderBoxShadowSpread,
									label: 'sliderBoxShadowSpread',
									title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowPosition={ {
									value: attributes.sliderBoxShadowPosition,
									label: 'sliderBoxShadowPosition',
									title: __( 'Position', 'ultimate-addons-for-gutenberg' ),
								} }
							/>
						</>

					}

				</UAGAdvancedPanelBody>

				{/* Spacing */}
				<UAGAdvancedPanelBody title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) } initialOpen= { false }>
					
					<SpacingControl
						{ ...props }
						label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
						valueTop={ {
							value: attributes.topMarginDesktop,
							label: 'topMarginDesktop',
						} }
						valueRight={ {
							value: attributes.rightMarginDesktop,
							label: 'rightMarginDesktop',
						} }
						valueBottom={ {
							value: attributes.bottomMarginDesktop,
							label: 'bottomMarginDesktop',
						} }
						valueLeft={ {
							value: attributes.leftMarginDesktop,
							label: 'leftMarginDesktop',
						} }
						valueTopTablet={ {
							value: attributes.topMarginTablet,
							label: 'topMarginTablet',
						} }
						valueRightTablet={ {
							value: attributes.rightMarginTablet,
							label: 'rightMarginTablet',
						} }
						valueBottomTablet={ {
							value: attributes.bottomMarginTablet,
							label: 'bottomMarginTablet',
						} }
						valueLeftTablet={ {
							value: attributes.leftMarginTablet,
							label: 'leftMarginTablet',
						} }
						valueTopMobile={ {
							value: attributes.topMarginMobile,
							label: 'topMarginMobile',
						} }
						valueRightMobile={ {
							value: attributes.rightMarginMobile,
							label: 'rightMarginMobile',
						} }
						valueBottomMobile={ {
							value: attributes.bottomMarginMobile,
							label: 'bottomMarginMobile',
						} }
						valueLeftMobile={ {
							value: attributes.leftMarginMobile,
							label: 'leftMarginMobile',
						} }
						unit={ {
							value: attributes.marginTypeDesktop,
							label: 'marginType',
						} }
						mUnit={ {
							value: attributes.marginTypeMobile,
							label: 'marginType',
						} }
						tUnit={ {
							value: attributes.marginTypeTablet,
							label: 'marginType',
						} }
						attributes={ attributes }
						setAttributes={ setAttributes }
						link={ {
							value: attributes.marginLink,
							label: 'marginLink',
						} }
					/>

				</UAGAdvancedPanelBody>

			</>
		);
	}

    return(
        <>
            <InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'style', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>
						{ baSliderGeneralSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ baSliderStyleSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
        </>
    );

}

export default React.memo( Settings );
