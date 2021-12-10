/**
 * BLOCK: How To - Step
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'uagb/container-child', {
	title: __( 'Container Child', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'This block lets you add a Flex Properties Based Container Child.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.name,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/container' ],
	attributes,
	edit,
	supports: {
		anchor: true,
	},
	example: {},
	save,
} );
