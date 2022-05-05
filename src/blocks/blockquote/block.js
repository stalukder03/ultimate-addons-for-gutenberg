/**
 * BLOCK: Quote
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import attributes from './attributes';
import { __ } from '@wordpress/i18n';
import transforms from './transforms';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/blockquote', {
	title: __( 'Blockquote', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'This block allows you to display your Blockquote.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.blockquote,
	keywords: [
		__( 'blockquote', 'ultimate-addons-for-gutenberg' ),
		__( 'quote', 'ultimate-addons-for-gutenberg' ),
		__( 'uagb', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
	example: {
		attributes: {
			isPreview: true,
		}
	},
	deprecated,
	transforms,
} );
