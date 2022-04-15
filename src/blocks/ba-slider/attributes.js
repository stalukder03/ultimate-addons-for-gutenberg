import { __ } from '@wordpress/i18n';

const attributes = {
    // Block Requirements.
    block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	beforeImage: {
		type: 'object',
	},
	afterImage: {
		type: 'object',
	},
};

export default attributes;