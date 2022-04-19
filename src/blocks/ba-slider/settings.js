import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import ResponsiveSelectControl from '@Components/responsive-select';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import MultiButtonsControl from '@Components/multi-buttons-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import renderSVG from '@Controls/renderIcon';
import UAGPresets from '@Components/presets';
import UAGTabsControl from '@Components/tabs'

import { InspectorControls } from '@wordpress/block-editor';

import { SelectControl, RangeControl, Icon, ToggleControl, TextControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';

// Extend component
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGImage from '@Components/image';

const Settings = ( props ) => {
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

        return(
            <>

				{/* Image Settings */}

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
								? __( 'Disables animated slider handle.', 'ultimate-addons-for-gutenberg' )
								: __( 'Enables animated slider handle.', 'ultimate-addons-for-gutenberg' )
						}
						checked={ attributes.animateSlider }
						onChange={ () => {
							setAttributes( { animateSlider: !attributes.animateSlider } );
						} }
					/>

					{ ! attributes.animateSlider &&

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

					}

					<ToggleControl
						label={ __( 'Show Image Labels?', 'ultimate-addons-for-gutenberg' ) }
						help={
							attributes.showLabels
								? __( 'Hides labels for images.', 'ultimate-addons-for-gutenberg' )
								: __( 'Shows labels for images.', 'ultimate-addons-for-gutenberg' )
						}
						checked={ attributes.showLabels }
						onChange={ () => {
							setAttributes( { showLabels: !attributes.showLabels } );
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
							label={ __( 'Before Label Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ attributes.beforeLabelColor ? attributes.beforeLabelColor : '' }
							onColorChange={ ( value ) =>
								setAttributes( { beforeLabelColor: value } )
							}
						/>
						<AdvancedPopColorControl
							label={ __( 'Before Label Background Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ attributes.beforeLabelBgColor ? attributes.beforeLabelBgColor : '' }
							onColorChange={ ( value ) =>
								setAttributes( { beforeLabelBgColor: value } )
							}
						/>
						<Range
							label={ __( 'Left Label Opacity', 'ultimate-addons-for-gutenberg' ) }
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
				</>
			);

		}

		const afterLabelStylingSettings = () => {
			
			return(
				<>
					{/* After Label */}

					<AdvancedPopColorControl
						label={ __( 'After Label Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ attributes.afterLabelColor ? attributes.afterLabelColor : '' }
						onColorChange={ ( value ) =>
							setAttributes( { afterLabelColor: value } )
						}
					/>
					<AdvancedPopColorControl
						label={ __( 'After Label Background Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ attributes.afterLabelBgColor ? attributes.afterLabelBgColor : '' }
						onColorChange={ ( value ) =>
							setAttributes( { afterLabelBgColor: value } )
						}
					/>
					<Range
						label={ __( 'Right Label Opacity', 'ultimate-addons-for-gutenberg' ) }
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

					</UAGAdvancedPanelBody>

				}
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
