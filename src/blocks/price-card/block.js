import { registerBlockType } from '@wordpress/blocks'
import edit from './edit'
import attributes from './attributes'
import { __ } from '@wordpress/i18n';

registerBlockType('uagb/price-card', {
	title: __('Price Card', 'ultimate-addons-for-gutenberg'),
	attributes,
	edit,
	category: uagb_blocks_info.category,
	save: function () {
		return <p> Price Card (from the frontend)</p>;
	},
})
