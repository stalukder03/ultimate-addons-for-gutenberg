/**
 * BLOCK: Container
 */
import styling from './styling';
import React, {    useEffect, useLayoutEffect } from 'react';

import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
import { withSelect, useDispatch, select } from '@wordpress/data';

import Settings from './settings';
import Render from './render';

//  Import CSS.
import './style.scss';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';

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

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

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

        addBlockEditorDynamicStyles( 'uagb-slider-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		// scrollBlockToView();

	}, [ deviceType ] );

	return (
		<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</>
	);
};

const applyWithSelect = withSelect( ( select, props ) => { // eslint-disable-line no-shadow
	const { insertBlock } = useDispatch( 'core/block-editor' );

	return {
		insertBlock,
		block: ( select( 'core/block-editor' ) || select( 'core/editor' ) ).getBlock(
			props.clientId
		),
	};
} );
export default compose( applyWithSelect )( UAGBSlider );

const { createHigherOrderComponent } = wp.compose;

const uagbSlideClass = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

		if( 'uagb/slider-child' === props.name ) {

			const wrapperProps = {
				...props.wrapperProps,
				className : 'swiper-slide'
			};

			return <BlockListBlock
			{ ...props } 
			wrapperProps={ wrapperProps } />;
		}

		return <BlockListBlock
			{ ...props } 
		/>;
        
    };
}, 'uagbSlideClass' );

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'uagb/slider-child',
    uagbSlideClass
);
