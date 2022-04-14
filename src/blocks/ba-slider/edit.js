/**
 * BLOCK: Image Comparison Slider / Before-After Slider
 */

 import styling from './styling';
 import React, { lazy, Suspense, useEffect } from 'react';
 import lazyLoader from '@Controls/lazy-loader';
 import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
 import { useDeviceType } from '@Controls/getPreviewType';
 const Settings = lazy( () =>
     import(
         /* webpackChunkName: "chunks/ba-slider/settings" */ './settings'
     )
 );
 const Render = lazy( () =>
     import(
         /* webpackChunkName: "chunks/ba-slider/render" */ './render'
     )
 );
 
 //  Import CSS.
 import './style.scss';

 const UAGBBASlider = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {

        const { className, clientId, attributes, setAttributes } = props;

        const {
            block_id,
            classMigrate,
		} = attributes;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-ba-slider-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-ba-slider-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ deviceType ] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default UAGBBASlider;