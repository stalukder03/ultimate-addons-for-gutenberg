import React, { lazy, useEffect, Suspense } from 'react'
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
const Settings = lazy(() =>
	import( /* webpackChunkName: "chunks/blockquote/settings" */ './settings')
)
const Render = lazy(() =>
	import( /* webpackChunkName: "chunks/blockquote/render" */ './render')
);
const SpectraPriceCard = (props) => {
	return (
		<Suspense fallback={lazyLoader()}>
			<Settings  parentProps={props}/>
			<Render parentProps={props} />
		</Suspense>
	)
}

export default SpectraPriceCard
