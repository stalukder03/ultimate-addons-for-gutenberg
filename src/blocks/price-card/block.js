import { registerBlockType } from '@wordpress/blocks'
import edit from './edit'
import save from './save'
import attributes from './attributes'
import { __ } from '@wordpress/i18n';

registerBlockType('uagb/price-card', {
	title: __('Price Card', 'ultimate-addons-for-gutenberg'),
	description: __(
		'This block lets you create a modern price card.',
		'ultimate-addons-for-gutenberg'
	),
	attributes,
	edit,
	category: uagb_blocks_info.category,
	save,
})
