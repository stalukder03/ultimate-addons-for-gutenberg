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
					label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: layout,
						label: 'layout',
					} }
					onChange={ onchangeLayout }
					options={ [
						{
							value: 'accordion',
							label: __(
								'Accordion',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'grid',
							label: __(
								'Grid',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ 'accordion' === layout && (
					<>
						<ToggleControl
							label={ __(
								'Collapse other items',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ inactiveOtherItems }
							onChange={ () =>
								setAttributes( {
									inactiveOtherItems: ! inactiveOtherItems,
								} )
							}
						/>
						{ true === inactiveOtherItems && (
							<ToggleControl
								label={ __(
									'Expand First Item',
									'ultimate-addons-for-gutenberg'
								) }
								checked={ expandFirstItem }
								onChange={ () =>
									setAttributes( {
										expandFirstItem: ! expandFirstItem,
									} )
								}
							/>
						) }
						<ToggleControl
							label={ __(
								'Enable Toggle',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ enableToggle }
							onChange={ () =>
								setAttributes( {
									enableToggle: ! enableToggle,
								} )
							}
						/>
					</>
				) }
				<ToggleControl
					label={ __(
						'Enable Schema Support',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ enableSchemaSupport }
					onChange={ () =>
						setAttributes( {
							enableSchemaSupport: ! enableSchemaSupport,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Enable Separator',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ enableSeparator }
					onChange={ () =>
						setAttributes( { enableSeparator: ! enableSeparator } )
					}
				/>
				<SelectControl
					label={ __(
						'Question Tag',
						'ultimate-addons-for-gutenberg'
					) }
					value={ headingTag }
					onChange={ ( value ) => onchangeTag( value ) }
					options={ [
						{
							value: 'span',
							label: __(
								'Span',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'p',
							label: __( 'P', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h1',
							label: __( 'H1', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h2',
							label: __( 'H2', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h3',
							label: __( 'H3', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h4',
							label: __( 'H4', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h5',
							label: __( 'H5', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h6',
							label: __( 'H6', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				{ 'grid' === layout && (
					<ResponsiveSlider
						label={ __(
							'Columns',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							desktop: {
								value: columns,
								label: 'columns',
								min: 1,
								max: 6,
							},
							tablet: {
								value: tcolumns,
								label: 'tcolumns',
								min: 1,
								max: 4,
							},
							mobile: {
								value: mcolumns,
								label: 'mcolumns',
								min: 1,
								max: 2,
							},
						} }
						min={ 1 }
						max={ 6 }
						displayUnit={ false }
						setAttributes={ setAttributes }
					/>
				) }
				{ 'grid' === layout && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Alignment',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: align,
							label: 'align',
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
										icon={ renderSVG(
											'fa fa-align-center'
										) }
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
										icon={ renderSVG(
											'fa fa-align-right'
										) }
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
				) }
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
