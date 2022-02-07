/**
 * BLOCK: Count Down Timer
 */

import renderSVG from '@Controls/renderIcon';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import WebfontLoader from '@Components/typography/fontloader';
import TypographyControl from '@Components/typography';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Range from '@Components/range/Range.js';
import SpacingControl from '@Components/spacing-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import { __ } from '@wordpress/i18n';
import Border from '@Components/border';
import { select } from '@wordpress/data';
import UAGIconPicker from '@Components/icon-picker';
import UAGTabsControl from '@Components/tabs';

import { InspectorControls } from '@wordpress/block-editor';

import {
	SelectControl,
	ToggleControl,
	Icon,
} from '@wordpress/components';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;
	const {

	} = attributes;


	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Display Type', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: displayType,
						label: 'displayType',
					} }
					onChange={ onchangeLayout }
					options={ [
						{
							value: 'fixed',
							label: __(
								'Fixed',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'evergreen',
							label: __(
								'Evergreen',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'recurring',
							label: __(
								'Recurring',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ 'fixed' === displayType && (
					<>
						<h2>
							{ __(
								'Due Date and Time',
								'ultimate-addons-for-gutenberg'
							) }
						</h2>
						<DateTimePicker
							className="uagb-date-picker"
							currentDate={ datepublish }
							onChange={ ( value ) =>
								setAttributes( { datepublish: value } )
							}
							is12Hour={ true }
						/>
					</>
				) }
				{ 'evergreen' === displayType && (
					<>
						<TextControl
							label={ __(
								'Days',
								'ultimate-addons-for-gutenberg'
							) }
							value={ days }
							onChange={ ( value ) =>
								setAttributes( { days: value } )
							}
						/>
						<TextControl
							label={ __(
								'Hours',
								'ultimate-addons-for-gutenberg'
							) }
							value={ hours }
							onChange={ ( value ) =>
								setAttributes( { hours: value } )
							}
						/>
						<TextControl
							label={ __(
								'Minutes',
								'ultimate-addons-for-gutenberg'
							) }
							value={ minutes }
							onChange={ ( value ) =>
								setAttributes( { minutes: value } )
							}
						/>
						<TextControl
							label={ __(
								'Reset Timer',
								'ultimate-addons-for-gutenberg'
							) }
							value={ repeatDays }
							onChange={ ( value ) =>
								setAttributes( { repeatDays: value } )
							}
						/>
					</>
				) }
				{ 'recurring' === displayType && (
					<>
						<TextControl
							label={ __(
								'Days',
								'ultimate-addons-for-gutenberg'
							) }
							value={ days }
							onChange={ ( value ) =>
								setAttributes( { days: value } )
							}
						/>
						<TextControl
							label={ __(
								'Hours',
								'ultimate-addons-for-gutenberg'
							) }
							value={ hours }
							onChange={ ( value ) =>
								setAttributes( { hours: value } )
							}
						/>
						<TextControl
							label={ __(
								'Minutes',
								'ultimate-addons-for-gutenberg'
							) }
							value={ minutes }
							onChange={ ( value ) =>
								setAttributes( { minutes: value } )
							}
						/>
						<TextControl
							label={ __(
								'Repeat Timer after ( days )',
								'ultimate-addons-for-gutenberg'
							) }
							value={ repeatDays }
							onChange={ ( value ) =>
								setAttributes( { repeatDays: value } )
							}
						/>
					</>
				) }
				<ToggleControl
					label={ __(
						'Display Days',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayDays }
					onChange={ () =>
						setAttributes( {
							displayDays: ! displayDays,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Display Hours',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayHours }
					onChange={ () =>
						setAttributes( {
							displayHours: ! displayHours,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Display Minutes',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayMinutes }
					onChange={ () =>
						setAttributes( {
							displayMinutes: ! displayMinutes,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Display Seconds',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displaySeconds }
					onChange={ () =>
						setAttributes( {
							displaySeconds: ! displaySeconds,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Display Divider',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayDivider }
					onChange={ () =>
						setAttributes( {
							displayDivider: ! displayDivider,
						} )
					}
				/>
				<TextControl
					label={ __(
						'Counter pre text',
						'ultimate-addons-for-gutenberg'
					) }
					value={ preText }
					onChange={ ( value ) =>
						setAttributes( { preText: value } )
					}
				/>
				<TextControl
					label={ __(
						'Counter Post text',
						'ultimate-addons-for-gutenberg'
					) }
					value={ postText }
					onChange={ ( value ) =>
						setAttributes( { postText: value } )
					}
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Countdown Layout', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: countdownLayout,
						label: 'countdownLayout',
					} }
					onChange={ onchangeLayout }
					options={ [
						{
							value: 'inline',
							label: __(
								'Inline',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'Block',
							label: __(
								'Block',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</Suspense>
	);
};

export default React.memo( Settings );
