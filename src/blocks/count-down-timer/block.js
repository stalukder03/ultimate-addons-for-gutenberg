/**
 * BLOCK: Count Down Timer
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/count-down-timer', {
	title: __( 'count-down-timer', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block helps you add count-down-timer or Accordion with automatically adding count-down-timer Schema to your page.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.count-down-timer,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'count-down-timer', 'ultimate-addons-for-gutenberg' ),
	],
	example: { },
	attributes,
	edit,
	supports: {
		anchor: true,
	},
	save,
} );

