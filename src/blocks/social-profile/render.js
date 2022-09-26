 import classnames from 'classnames';
 import { InnerBlocks } from '@wordpress/block-editor';
 import React, { useLayoutEffect } from 'react';
 import styles from './editor.lazy.scss';
 import { useDeviceType } from '@Controls/getPreviewType';
 
 const ALLOWED_BLOCKS = [ 'uagb/social-profile-child' ];
 
 const Render = ( props ) => {
    
     useLayoutEffect( () => {
         styles.use();
         return () => {
             styles.unuse();
         };
     }, [] );
 
     props = props.parentProps;
     const deviceType = useDeviceType();
     const { attributes } = props;
 
     const { isPreview, className, social_layout } = attributes;
 
     const getSocialShareTemplate = [
         [
             'uagb/social-profile-child',
             {
                 type: 'facebook',
                 image_icon: 'icon',
                 icon: 'fab fa-address-book',
                 image: '',
                 icon_color: '#3b5998',
                 icon_hover_color: '',
                 icon_bg_color: '',
                 icon_bg_hover_color: '',
                 label:'facebook profile'
             },
         ],
     ];
 
     const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/social-profile.png`;
 
     return (
         isPreview ? <img width='100%' src={previewImageData} alt=''/> :
         <div
             className={ classnames(
                 className,
                 'uagb-social-profile__outer-wrap',
                 `uagb-social-profile__layout-${ social_layout }`,
                 `uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
                 `uagb-block-${ props.clientId.substr( 0, 8 ) }`
             ) }
         >
             <InnerBlocks
                 template={ getSocialShareTemplate }
                 templateLock={ false }
                 allowedBlocks={ ALLOWED_BLOCKS }
                 __experimentalMoverDirection={ social_layout }
             />
         </div>
     );
 };
 
 export default React.memo( Render );
 