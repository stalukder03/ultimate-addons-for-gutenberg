import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: 'string',
	},
	layout: {
		type: 'string',
		default: 'default',
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
	// heading
	heading: {
		type: 'string',
		default: '',
	},
	headingLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	headingColor: {
		type: 'string',
		isUAGStyle: true,
	},
	headingFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	headingFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	headingFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	headingTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	headingDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	headingFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	headingFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	headingFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
};

export default attributes;
