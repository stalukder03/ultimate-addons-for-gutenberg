/**
 * BLOCK: Container
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/container', {
	title: __( 'Container', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'This block lets you add a Flex Properties Based Container.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.advanced_heading,
	keywords: [
		__( 'container', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
		__( 'flex', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
} );
