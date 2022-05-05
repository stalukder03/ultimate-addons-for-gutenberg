/**
 * BLOCK: Heading
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import transforms from './transforms';

registerBlockType( 'uagb/advanced-heading', {
	title: __( 'Heading', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'This block lets you add a combination of a heading and a sub-heading with a separator in between.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.advanced_heading,
	keywords: [
		__( 'creative heading', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
		__( 'heading', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	example: {
		attributes: {
			isPreview: true,
		}
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
	deprecated,
	transforms
} );
