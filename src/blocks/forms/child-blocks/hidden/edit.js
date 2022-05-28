/**
 * BLOCK: Forms - hidden - Edit
 */

import React, { lazy, useEffect, Suspense } from 'react';

import lazyLoader from '@Controls/lazy-loader';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/form/hidden-settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/form/hidden-render" */ './render' )
);

const UAGBFormsHiddenEdit = ( props ) => {
	useEffect( () => {
		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-forms-hidden-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/form-hidden.svg`;

	return (
		<>
			{ props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
				<Suspense fallback={ lazyLoader() }>
					<Settings parentProps={ props } />
					<Render parentProps={ props } />
				</Suspense>
			) }
		</>
	);
};

export default UAGBFormsHiddenEdit;
