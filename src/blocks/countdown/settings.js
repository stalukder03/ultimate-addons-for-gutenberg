import UAGTextControl from '@Components/text-control';
import UAGSelectControl from '@Components/select-control';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import {
    ToggleControl,
	DateTimePicker,
} from '@wordpress/components';
import {
    BlockControls,
    InspectorControls
} from '@wordpress/block-editor';

export default function Settings( props ) {

    props = props.parentProps;
	const { setAttributes, attributes } = props;

    const {
        block_id,
    } = attributes;

    return (
        <>
            <InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
        </>
    );
};