import { __ } from '@wordpress/i18n';


const attributes = {
	block_id: {
		type: 'string',
	},
	priceCardHeadingTitle: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: __('Your Price Card Title', 'ultimate-addons-for-gutenberg'),
	},
	priceCardHeadingTag: {
		type: 'string',
		default: 'h2',
	},
	priceCardHeadingId: {
		type: 'string',
	},
	seperatorStyle: {
		type: 'string',
		default: 'none',
		isUAGStyle: true,
	},
	priceCardDesc: {
		source: 'html',
		selector: 'p',
		default: __('Enter description text here.Lorem ipsum dolor sit amet, consectetur adipiscing. Quo incidunt ullamco.​', 'ultimate-addons-for-gutenberg'),
	},
	image: {
		type: 'object',
		default: null
	},
	imgSize: {
		type: 'string',
		default: 'thumbnail',
		isUAGStyle: true,
	},
}

export default attributes;
