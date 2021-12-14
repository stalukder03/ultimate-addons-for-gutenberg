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
};

export default attributes;
