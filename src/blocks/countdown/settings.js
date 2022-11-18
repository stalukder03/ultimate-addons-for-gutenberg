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
        showLabels,
        labelDays,
        labelHours,
        labelMinutes,
        labelSeconds,
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

    const labelGeneralPanel = (
        <UAGAdvancedPanelBody
			title={ __( 'Labels', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
            <ToggleControl
                label={ __( 'Show Labels', 'ultimate-addons-for-gutenberg' ) }
                checked={ showLabels }
                onChange={ () =>
                    setAttributes( { showLabels: ! showLabels } )
                }
            />
            { showLabels &&
                <>
                    <UAGTextControl
                        label={ __( 'Days', 'ultimate-addons-for-gutenberg' ) }
                        variant='full-width'
                        value={ labelDays }
                        data={{
                            value: labelDays,
                            label: 'labelDays',
                        }}
                        setAttributes={ setAttributes }
                    />
                    <UAGTextControl
                        label={ __( 'Hours', 'ultimate-addons-for-gutenberg' ) }
                        variant='full-width'
                        value={ labelHours }
                        data={{
                            value: labelHours,
                            label: 'labelHours',
                        }}
                        setAttributes={ setAttributes }
                    />
                    <UAGTextControl
                        label={ __( 'Minutes', 'ultimate-addons-for-gutenberg' ) }
                        variant='full-width'
                        value={ labelMinutes }
                        data={{
                            value: labelMinutes,
                            label: 'labelMinutes',
                        }}
                        setAttributes={ setAttributes }
                    />
                    <UAGTextControl
                        label={ __( 'Seconds', 'ultimate-addons-for-gutenberg' ) }
                        variant='full-width'
                        value={ labelSeconds }
                        data={{
                            value: labelSeconds,
                            label: 'labelSeconds',
                        }}
                        setAttributes={ setAttributes }
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
                        { labelGeneralPanel }
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