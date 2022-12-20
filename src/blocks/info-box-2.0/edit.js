/**
 * BLOCK: Container
 */
import styling from './styling';
import React, {    useEffect } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';

import Settings from './settings';
import Render from './render';

//  Import CSS.
import './style.scss';

const UAGBContainer = ( props ) => {

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-info-box-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	return (
			<>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>
	);
};

export default UAGBContainer;
