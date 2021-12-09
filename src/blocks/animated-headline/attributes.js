import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	// General
	headlineTag: {
		type: 'string',
		default: 'h2',
	},
	animateType: {
		type: 'string',
		default: 'highlighted'
	},
	beforeText: {
		type: 'string',
		default: __( 'This Page is', 'ultimate-addons-for-gutenberg' )
	},
	highlightedText: {
		type: 'string',
		default: __( 'Amazing', 'ultimate-addons-for-gutenberg' )
	},
	rotatingText: {
		type: 'string',
		default: 'Better\nBigger\nFaster'
	},
	afterText: {
		type: 'string',
		default: ''
	},
	// Advanced
	headlineId: {
		type: 'string',
	},
};

export default attributes;
