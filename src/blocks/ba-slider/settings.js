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

                <UAGAdvancedPanelBody title={ __( 'General Slider Settings', 'ultimate-addons-for-gutenberg' ) } initialOpen= { true }>
					<SelectControl
						label={ __( 'Slider Orientation', 'ultimate-addons-for-gutenberg' ) }
						value={ attributes.sliderOrientation }
						options={ [
							{ label: 'Horizontal', value: 0 },
							{ label: 'Vertical', value: 1 },
						] }
						onChange={ ( newSliderOrientation ) => setAttributes( { sliderOrientation: newSliderOrientation } ) }
					/>

					<RangeControl
						label={ __( 'Initial Slider Position', 'ultimate-addons-for-gutenberg' ) }
						value={ attributes.sliderPosition }
						onChange={ ( newSliderPosition ) => setAttributes( { sliderPosition: newSliderPosition } ) }
						min={ 1 }
						max={ 100 }
						step={ 1 }
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
								attributes.hoverSlide
									? __( 'Disables hover-based slider handle controls.', 'ultimate-addons-for-gutenberg' )
									: __( 'Enables hover-based slider handle controls.', 'ultimate-addons-for-gutenberg' )
							}
							checked={ attributes.hoverSlide }
							onChange={ () => {
								setAttributes( { hoverSlide: !attributes.hoverSlide } );
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

					<UAGAdvancedPanelBody title={ __( 'Label Settings', 'ultimate-addons-for-gutenberg' ) } initialOpen= { true }>
						
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

    return(
        <>
            <InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'style', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>
						{ baSliderGeneralSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{/* { baSliderStyleSettings() } */}
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