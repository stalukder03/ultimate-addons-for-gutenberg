/**
 * BLOCK: Container
 */
import styling from './styling';
import React, {    useEffect, useLayoutEffect } from 'react';

import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import { migrateBorderAttributes } from '@Controls/generateAttributes';

import Settings from './settings';
import Render from './render';

//  Import CSS.
import './style.scss';
import { __ } from '@wordpress/i18n';

import { select } from '@wordpress/data';

import styles from './editor.lazy.scss';

const UAGBSlider = ( props ) => {

	const deviceType = useDeviceType();

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	if ( props.isParentOfSelectedBlock ) {
		const emptyBlockInserter = document.querySelector( '.block-editor-block-list__empty-block-inserter' );
		if ( emptyBlockInserter ) {
			emptyBlockInserter.style.display = 'none';
		}
	}

	useEffect( () => {
		const isBlockRootParent = 0 === select( 'core/block-editor' ).getBlockParents( props.clientId ).length;

		if ( isBlockRootParent ) {
			props.setAttributes( { isBlockRootParent: true } );
		}

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		const descendants = select( 'core/block-editor' ).getBlocks( props.clientId );

		if ( props.attributes.blockDescendants && descendants.length !== props.attributes.blockDescendants.length ) {
			props.setAttributes( { blockDescendants: descendants } );
		}
		const {
			borderStyle,
			borderWidth,
			borderColor,
			borderHoverColor,
			borderRadius
		} = props.attributes;

		// border
		if( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ){
			migrateBorderAttributes( 'container', {
				label: 'borderWidth',
				value: borderWidth,
			}, {
				label: 'borderRadius',
				value: borderRadius
			}, {
				label: 'borderColor',
				value: borderColor
			}, {
				label: 'borderHoverColor',
				value: borderHoverColor
			},{
				label: 'borderStyle',
				value: borderStyle
			},
			props.setAttributes,
			props.attributes
			);
		}

		if( 0 !== select( 'core/block-editor' ).getBlockParents(  props.clientId ).length ){ // if there is no parent for container when child container moved outside root then do not show variations.
			props.setAttributes( { variationSelected: true } );
		}

	}, [] );

	useEffect( () => {

		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-container-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		const descendants = select( 'core/block-editor' ).getBlocks( props.clientId );

		if ( props.attributes.blockDescendants && descendants.length !== props.attributes.blockDescendants.length ) {
			props.setAttributes( { blockDescendants: descendants } );
		}

	}, [ props ] );

	useEffect( () => {

		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-container-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();

	}, [ deviceType ] );

	return (
		<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</>
	);
};
export default UAGBSlider;
