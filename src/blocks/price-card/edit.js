import React, { lazy, useEffect, Suspense } from 'react'
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import styling from './styling';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';

const Settings = lazy(() =>
	import( /* webpackChunkName: "chunks/blockquote/settings" */ './settings')
)
const Render = lazy(() =>
	import( /* webpackChunkName: "chunks/blockquote/render" */ './render')
);
import './style.scss'
const SpectraPriceCard = (props) => {
	const deviceType = useDeviceType();
	useEffect( () => {

		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );


	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-adv-heading-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-adv-heading-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	return (
		<Suspense fallback={lazyLoader()}>
			<Settings  parentProps={props}/>
			<Render parentProps={props} />
		</Suspense>
	)
}

export default SpectraPriceCard
