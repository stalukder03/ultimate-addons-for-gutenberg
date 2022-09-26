import UAGB_Block_Icons from '@Controls/block-icons';
 import './style.scss';
 import attributes from './attributes';
 import edit from './edit';
 import save from './save';
 import { __ } from '@wordpress/i18n';
 import { registerBlockType } from '@wordpress/blocks';
 
 registerBlockType( 'uagb/social-profile', {

     title: __( 'Social Profile', 'ultimate-addons-for-gutenberg' ),
     description: __( 'Share your profile on different social media platforms .', 'ultimate-addons-for-gutenberg' ),
     icon: UAGB_Block_Icons.social_share,
     category: uagb_blocks_info.category,
     keywords: [
         __( 'social Profile', 'ultimate-addons-for-gutenberg' ),
         __( 'icon', 'ultimate-addons-for-gutenberg' ),
         __( 'uag', 'ultimate-addons-for-gutenberg' ),
     ],
     supports: {
         anchor: true,
     },
     example: {
         attributes: {
             isPreview: true,
         }
     },
     attributes,
     edit,
     save,

 } );
 