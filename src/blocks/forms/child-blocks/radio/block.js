/**
 * BLOCK: Forms - Radio
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/forms-radio', {
	title: __( 'Radio', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block helps to add Radio field.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.radio,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/forms' ],
	attributes,
	edit,
	supports: {
		anchor: true,
	},
	example: {
		attributes: {
			isPreview: true,
		}
	},
	save,
} );
