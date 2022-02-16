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
		default: 'left',
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
	},
	// caption
	captionText: {
		type: 'string',
		default: '',
	},
	captionLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	captionColor: {
		type: 'string',
		isUAGStyle: true,
	},
	captionFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	captionFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	captionFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	captionTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	captionDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	captionFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	captionLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	captionFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	captionFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	captionFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	captionLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	captionLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	captionLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	captionTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	captionRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	captionLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	captionBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	captionTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	captionRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	captionLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	captionBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	captionTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	captionRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	captionLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	captionBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	captionMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	captionMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	captionMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	captionMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
};

export default attributes;
