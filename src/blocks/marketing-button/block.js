/**
 * BLOCK: Marketing Button
 */
import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import './style.scss';

import { __ } from '@wordpress/i18n';

import { registerBlockType, createBlock } from '@wordpress/blocks';

registerBlockType( 'uagb/marketing-button', {
	title: __( 'Marketing Button', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a marketing call to action button with a short description.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.marketing_button,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'marketing button', 'ultimate-addons-for-gutenberg' ),
		__( 'cta', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	edit,
	save,
	example: {
		attributes: {
			isPreview: true,
		}
	},
	deprecated,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/button' ],
				transform: ( { attribute } ) => {
					return createBlock( 'uagb/marketing-button', {
						text: attribute.heading,
						url: attribute.link,
						backgroundColor: attribute.backgroundColor,
						textColor: attribute.titleColor
					} );
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/button' ],
				transform: ( { attribute } ) => {
					return createBlock( 'core/button', {
						heading: attribute.text,
						link: attribute.url,
						backgroundColor: attribute.backgroundColor,
						titleColor: attribute.textColor
					} );
				},
			},
		],
	},
} );
