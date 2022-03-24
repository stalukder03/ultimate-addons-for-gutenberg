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
	//setting style props
	headingAlign: {
		type: 'string',
		default: 'center',
		isUAGStyle: true,
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	headSpace: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	headFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	headFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	headTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	headDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	headFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},

	//heading color
	headingColor: {
		type: 'string',
		isUAGStyle: true,
	},
	// sub heading part
	subHeadFontFamily: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	subHeadFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	subHeadTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	subHeadFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	subHeadLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	separatorSpace: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	separatorHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
}

export default attributes;
