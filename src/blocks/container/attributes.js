const attributes = {
	block_id: {
		type: 'string',
	},
	widthDesktop: {
		type: 'number',
		default: 100,
	},
	widthTablet: {
		type: 'number',
		default: 100,
	},
	widthMobile: {
		type: 'number',
		default: 100,
	},
	widthType: {
		type: 'string',
		default: '%',
	},
	minHeightDesktop: {
		type: 'number',
	},
	minHeightTablet: {
		type: 'number',
	},
	minHeightMobile: {
		type: 'number',
	},
	minHeightType: {
		type: 'string',
		default: 'px',
	},
	directionDesktop: {
		type: 'string',
		default: '',
	},
	directionTablet: {
		type: 'string',
		default: '',
	},
	directionMobile: {
		type: 'string',
		default: '',
	},
	alignItemsDesktop: {
		type: 'string',
		default: '',
	},
	alignItemsTablet: {
		type: 'string',
		default: '',
	},
	alignItemsMobile: {
		type: 'string',
		default: '',
	},
	justifyContentDesktop: {
		type: 'string',
		default: '',
	},
	justifyContentTablet: {
		type: 'string',
		default: '',
	},
	justifyContentMobile: {
		type: 'string',
		default: '',
	},
	wrapDesktop: {
		type: 'string',
		default: '',
	},
	wrapTablet: {
		type: 'string',
		default: '',
	},
	wrapMobile: {
		type: 'string',
		default: '',
	},
	alignContentDesktop: {
		type: 'string',
		default: '',
	},
	alignContentTablet: {
		type: 'string',
		default: '',
	},
	alignContentMobile: {
		type: 'string',
		default: '',
	},

	backgroundType: {
		type: 'string',
	},
	backgroundImage: {
		type: 'object',
	},
	backgroundPosition: {
		type: 'string',
		default: 'center-center',
	},
	backgroundSize: {
		type: 'string',
		default: 'cover',
	},
	backgroundRepeat: {
		type: 'string',
		default: 'no-repeat',
	},
	backgroundAttachment: {
		type: 'string',
		default: 'scroll',
	},
	backgroundColor: {
		type: 'string',
	},
	backgroundOpacity: {
		type: 'number',
	},
	backgroundImageColor: {
		type: 'string',
	},
	gradientValue: {
		type: 'string',
		default: '',
	},

	borderStyle: {
		type: 'string',
		default: 'none',
	},
	borderWidth: {
		type: 'number',
		default: 1,
	},
	borderRadius: {
		type: 'number',
	},
	borderColor: {
		type: 'string',
	},
	borderHoverColor: {
		type: 'string',
	},
	boxShadowColor: {
		type: 'string',
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
	},
	boxShadowBlur: {
		type: 'number',
	},
	boxShadowSpread: {
		type: 'number',
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
	},

	topPaddingDesktop: {
		type: 'number',
		default: 20,
	},
	bottomPaddingDesktop: {
		type: 'number',
		default: 20,
	},
	leftPaddingDesktop: {
		type: 'number',
		default: 20,
	},
	rightPaddingDesktop: {
		type: 'number',
		default: 20,
	},
	topPaddingTablet: {
		type: 'number',
	},
	bottomPaddingTablet: {
		type: 'number',
	},
	leftPaddingTablet: {
		type: 'number',
	},
	rightPaddingTablet: {
		type: 'number',
	},
	topPaddingMobile: {
		type: 'number',
	},
	bottomPaddingMobile: {
		type: 'number',
	},
	leftPaddingMobile: {
		type: 'number',
	},
	rightPaddingMobile: {
		type: 'number',
	},
	paddingType: {
		type: 'string',
		default: 'px',
	},
	paddingLink: {
		type: 'boolean',
		default: false,
	},

	topMarginDesktop: {
		type: 'number',
	},
	bottomMarginDesktop: {
		type: 'number',
	},
	leftMarginDesktop: {
		type: 'number',
	},
	rightMarginDesktop: {
		type: 'number',
	},
	topMarginTablet: {
		type: 'number',
	},
	bottomMarginTablet: {
		type: 'number',
	},
	leftMarginTablet: {
		type: 'number',
	},
	rightMarginTablet: {
		type: 'number',
	},
	topMarginMobile: {
		type: 'number',
	},
	bottomMarginMobile: {
		type: 'number',
	},
	leftMarginMobile: {
		type: 'number',
	},
	rightMarginMobile: {
		type: 'number',
	},
	marginType: {
		type: 'string',
		default: 'px',
	},
	marginLink: {
		type: 'boolean',
		default: false,
	},
	variationSelected: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
