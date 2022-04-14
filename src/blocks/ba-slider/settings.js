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

    return(
        <>
            <InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'style', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>
						{/* { baSliderGeneralSettings() } */}
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
