/**
 * BLOCK: UAGB - Social profile Edit Class
 */
 import styling from './styling';
 import React, { useEffect,    } from 'react';
 import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
 import Settings from './settings';
 import Render from './render';
 
 let hideLabel;
 
 const SocialShareComponent = ( props ) => {

     useEffect( () => {
         props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
         props.setAttributes( { classMigrate: true } );
         props.setAttributes( { childMigrate: true } );
 
     }, [] );
 
     useEffect( () => {
         const blockStyling = styling( props );
         addBlockEditorDynamicStyles( 'uagb-style-social-profile-' + props.clientId.substr( 0, 8 ), blockStyling );
     }, [ props ] );
 
 
     return (
             <>
             <Settings parentProps={ props }   hideLabel={ hideLabel }/>
             <Render parentProps={ props } />
             </>
     );
 };
 
 export default SocialShareComponent;
 