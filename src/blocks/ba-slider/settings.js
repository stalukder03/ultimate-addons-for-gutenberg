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

import { SelectControl, Icon, ToggleControl, TextControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';

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
