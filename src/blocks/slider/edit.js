/**
 * BLOCK: Slider
 */
import React, {    useEffect, useLayoutEffect } from 'react';
import { withSelect, useDispatch } from '@wordpress/data';

import Settings from './settings';
import Render from './render';

//  Import CSS.
import './style.scss';
import { compose } from '@wordpress/compose';

import styles from './editor.lazy.scss';

const UAGBSlider = ( props ) => {

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	useEffect( () => {

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

	}, [] );

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
