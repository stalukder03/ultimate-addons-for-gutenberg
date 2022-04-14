/**
 * BLOCK: Image Comparison Slider / Before-After Slider
 */

 import UAGB_Block_Icons from '@Controls/block-icons';
 import attributes from './attributes';
 import edit from './edit';
 import save from './save';
 import './style.scss';
 import { __ } from '@wordpress/i18n';
 import { registerBlockType, createBlock } from '@wordpress/blocks';

 registerBlockType( 'uagb/ba-slider', {
	title: __( 'Image Comparison Slider', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'This block allows visitors to compare two images using a slider.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.ba_slider_icon,
	keywords: [
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
		__( 'before', 'ultimate-addons-for-gutenberg' ),
		__( 'after', 'ultimate-addons-for-gutenberg' ),
		__( 'slider', 'ultimate-addons-for-gutenberg' ),
		__( 'comparison', 'ultimate-addons-for-gutenberg' ),
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
} );
