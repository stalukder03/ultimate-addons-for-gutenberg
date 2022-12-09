/**
 * BLOCK: Forms - Checkbox - Edit
 */

import { __ } from '@wordpress/i18n';
import React, { useState, useEffect } from 'react';


import Settings from './settings';
import Render from './render';

const UAGBFormsCheckboxEdit = ( props ) => {

    const [ state, setState ] = useState( { optionsstate: [ // eslint-disable-line no-unused-vars
		{
			optiontitle: __(
				'Option Name 1',
				'ultimate-addons-for-gutenberg'
			),
		},
	], } );

	useEffect( () => {
		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-forms-checkbox-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/children/form-checkbox.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Settings parentProps={ props } />
				<Render parentProps={ props } setState={ setState } />
			</>
		)
	);
};

export default UAGBFormsCheckboxEdit;
