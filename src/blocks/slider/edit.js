/**
 * BLOCK: Slider
 */
import React, { useEffect, useLayoutEffect } from 'react';
import { withSelect, useDispatch } from '@wordpress/data';
import styling from './styling';
import Settings from './settings';
import Render from './render';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
//  Import CSS.
import './style.scss';
import { compose } from '@wordpress/compose';
import { useDeviceType } from '@Controls/getPreviewType';
import styles from './editor.lazy.scss';
import { SwiperSlide } from 'swiper/react';

const UAGBSlider = ( props ) => {
	const deviceType = useDeviceType();

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

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-slider-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-slider-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [deviceType] );

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
				...props.wrapperProps
			};

			return <SwiperSlide><BlockListBlock
			{ ...props }
			wrapperProps={ wrapperProps } /></SwiperSlide>;
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
