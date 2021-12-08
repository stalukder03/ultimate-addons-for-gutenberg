import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	headingTitle: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: __( 'Your Animated headline', 'ultimate-addons-for-gutenberg' ),
	},
	headingId: {
		type: 'string',
	},
	headingAlign: {
		type: 'string',
		default: 'center',
	},
	headingColor: {
		type: 'string',
	},
	
	headingTag: {
		type: 'string',
		default: 'h2',
	},
};

export default attributes;
