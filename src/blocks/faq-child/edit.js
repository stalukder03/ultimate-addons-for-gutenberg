/**
 * BLOCK: FAQ - Child
 */

import React, { useEffect,    useState } from 'react';
import styling from './styling';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';


import Settings from './settings';
import Render from './render';

let prevState;

const FaqChildComponent = ( props ) => {
	const initialState = {
		isFocused: 'false',
	};

	const [ state, setStateValue ] = useState( initialState );

	useEffect( () => {
		// Replacement for componentDidMount.

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-faq-child-' + props.clientId.substr( 0, 8 ), blockStyling );

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		// Pushing Style tag for this block css.
		prevState = props.isSelected;

	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-faq-child-' + props.clientId.substr( 0, 8 ), blockStyling );

		if ( ! props.isSelected && prevState && state.isFocused ) {
			setStateValue( {
				isFocused: 'false',
			} );
		}
		if ( props.isSelected && ! prevState ) {
			setStateValue( {
				isFocused: true,
			} );
		}
		prevState = props.isSelected;
	}, [ props ] );

	return (
			<>
			<Settings />
			<Render parentProps={ props } state={ state } />
			</>
	);
};

export default FaqChildComponent;
