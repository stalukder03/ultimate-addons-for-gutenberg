/**
 * BLOCK: UAGB How To - Step Attributes
 */
import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: 'string',
	},
	name: {
		type: 'string',
		default: __( 'Step', 'ultimate-addons-for-gutenberg' ),
	},
	description: {
		type: 'string',
		default: __( 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.', 'ultimate-addons-for-gutenberg' ),
	},
	url: {
		type: 'string',
		default: '#',
	},
	urlType: {
		type: 'string',
		default: 'all',
	},
	urlText: {
		type: 'string',
		default: __( 'Read More', 'ultimate-addons-for-gutenberg' ),
	},
	urlTarget: {
		type: 'boolean',
		default: false,
	},
	image: {
		type: 'object',
		default: {
			url: '',
			alt: 'Image Placeholder',
		},
	},
	imageSize: {
		type: 'string',
		default: 'thumbnail',
	},
	urlFontSize: {
		type: 'number',
	},
	urlFontSizeType: {
		type: 'string',
		default: 'px',
	},
	urlFontSizeMobile: {
		type: 'number',
	},
	urlFontSizeTablet: {
		type: 'number',
	},
	urlFontFamily: {
		type: 'string',
		default: 'Default',
	},
	urlFontWeight: {
		type: 'string',
	},
	urlFontSubset: {
		type: 'string',
	},
	urlLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

};
export default attributes;
