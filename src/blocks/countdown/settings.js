import { __ } from '@wordpress/i18n';
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
        timerType,
        endDateTime,
    } = attributes;

    const generalPanel = (
        <UAGAdvancedPanelBody
			title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
            { timerType && 
                <>
                    <h2>Timer End Date &amp; Time</h2>
                    <DateTimePicker
						className="uagb-date-picker"
						currentDate={ endDateTime }
						onChange={ ( value ) =>
							setAttributes( { endDateTime: value } )
						}
						is12Hour={ true }
					/>
                </>
            }
        </UAGAdvancedPanelBody>
    );

    return (
        <>
            <InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
                        { generalPanel }
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