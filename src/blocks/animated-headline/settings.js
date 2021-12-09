/**
 * BLOCK: Animated Headline - settings
 */

import React from 'react';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { TextControl, TextareaControl, SelectControl } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const Settings = ( props ) => {
	props = props.parentProps;
	const { attributes, setAttributes } = props;
	const {
		headlineTag,
		animateType,
		beforeText,
		highlightedText,
		rotatingText,
		afterText,
		headlineAlign
	} = attributes;
	
	const blockControlSettings = () => {
		return (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ headlineAlign }
					onChange={ ( value ) =>
						setAttributes( { headlineAlign: value } )
					}
				/>
			</BlockControls>
		)
	}

	const generalPanel = () => {
		return (
			<UAGAdvancedPanelBody>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Heading Tag',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: headlineTag,
						label: 'headlineTag',
					} }
					options={ [
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
				<SelectControl
					label={__( 'Style', 'ultimate-addons-for-gutenberg' )}
					value={ animateType }
					options={ [
						{ label: 'Highlighted', value: 'highlighted' },
						{ label: 'Rotating', value: 'rotating' },
					] }
					onChange={ ( value ) => setAttributes( {animateType: value} ) }
				/>
				<TextControl
					label={__( 'Before Text', 'ultimate-addons-for-gutenberg' )}
					placeholder={__( 'Enter Your Headline', 'ultimate-addons-for-gutenberg' )}
					value={beforeText}
					onChange={ ( value ) => setAttributes( {beforeText: value} ) }
				/>
				<TextControl
					label={__( 'Highlighted Text', 'ultimate-addons-for-gutenberg' )}
					value={highlightedText}
					onChange={ ( value ) => setAttributes( {highlightedText: value} ) }
				/>
				<TextareaControl
					label={__( 'Rotating Text', 'ultimate-addons-for-gutenberg' )}
					placeholder={__( 'Enter each word in a separate line', 'ultimate-addons-for-gutenberg' )}
					value={rotatingText}
					onChange={ ( value ) => setAttributes( {rotatingText: value} ) }
				/>
				<TextControl
					label={__( 'After Text', 'ultimate-addons-for-gutenberg' )}
					placeholder={__( 'Enter Your Headline', 'ultimate-addons-for-gutenberg' )}
					value={afterText}
					onChange={ ( value ) => setAttributes( {afterText: value} ) }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<div>
			{
				blockControlSettings()
			}
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalPanel() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</div>
	);
};
export default React.memo( Settings );
