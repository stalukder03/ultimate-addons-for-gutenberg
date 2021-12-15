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
		default: 'column',
	},
	directionTablet: {
		type: 'string',
		default: 'column',
	},
	directionMobile: {
		type: 'string',
		default: 'column',
	},
	alignItemsDesktop: {
		type: 'string',
		default: 'flex-start',
	},
	alignItemsTablet: {
		type: 'string',
		default: 'flex-start',
	},
	alignItemsMobile: {
		type: 'string',
		default: 'flex-start',
	},
	justifyContentDesktop: {
		type: 'string',
		default: 'flex-start',
	},
	justifyContentTablet: {
		type: 'string',
		default: 'flex-start',
	},
	justifyContentMobile: {
		type: 'string',
		default: 'flex-start',
	},
	wrapDesktop: {
		type: 'string',
		default: 'nowrap',
	},
	wrapTablet: {
		type: 'string',
		default: 'nowrap',
	},
	wrapMobile: {
		type: 'string',
		default: 'nowrap',
	},
	alignContentDesktop: {
		type: 'string',
		default: 'flex-start',
	},
	alignContentTablet: {
		type: 'string',
		default: 'flex-start',
	},
	alignContentMobile: {
		type: 'string',
		default: 'flex-start',
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
};

export default attributes;
