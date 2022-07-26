/**
 * WordPress dependencies
 */
 import { postList as icon } from '@wordpress/icons';
import UAGB_Block_Icons from '@Controls/block-icons';

 /**
  * Internal dependencies
  */
 import edit from './edit';
 import metadata from './block.json';
 
 const { name } = metadata;
 export { metadata, name };
 
 export const settings = {
    UAGB_Block_Icons.post_timeline,
     example: {},
     edit,
 };