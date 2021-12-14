/**
 * BLOCK: Container Child - Edit
 */

import React, { lazy, useEffect, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/container/container-child-settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/container/container-child-render" */ './render' )
);

const UAGBContainerChildEdit = ( props ) => {
	useEffect( () => {
		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-container-style-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );

	}, [] );

	return (
		<>
			<Suspense fallback={ lazyLoader() }>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</Suspense>
		</>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { __experimentalGetPreviewDeviceType = null } = select(
			'core/edit-post'
		);
		const deviceType = __experimentalGetPreviewDeviceType
			? __experimentalGetPreviewDeviceType()
			: null;

		return {
			deviceType,
		};
	} )
)( UAGBContainerChildEdit );
