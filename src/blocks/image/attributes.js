import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: 'string',
	},
	url: {
		type: 'string',
		default: '',
	},
	alt: {
		type: 'string',
		default: '',
	},
	caption: {
		type: 'string',
		default: '',
	},
	align: {
		type: 'string',
		default: '',
	},
	id: {
		type: 'integer',
		default: '',
	},
	href: {
		type: 'string',
		default: '',
	},
	rel: {
		type: 'string',
		default: '',
	},
	linkClass: {
		type: 'string',
		default: '',
	},
	linkDestination: {
		type: 'string',
		default: '',
	},
	title: {
		type: 'string',
		default: '',
	},
	width: {
		type: 'integer',
		default: '',
	},
	height: {
		type: 'integer',
		default: '',
	},
	linkTarget: {
		type: 'string',
		default: '',
	},
	sizeSlug: {
		type: 'string',
		default: '',
	}
};

export default attributes;
