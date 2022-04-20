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
	
	// <-- GENERAL SETTINGS -->

	// Images.
	beforeImage: {
		type: 'object',
	},
	afterImage: {
		type: 'object',
	},

	// Image Labels.
	showLabels: {
		type: 'boolean',
		default: true,
	},
	beforeLabel: {
		type: 'string',
		default: __( 'Before' , 'ultimate-addons-for-gutenberg' ),
	},
	afterLabel: {
		type: 'string',
		default: __( 'After' , 'ultimate-addons-for-gutenberg' ),
	},

	// Image Labels Styling.
	beforeLabelColor: {
		type: 'string',
		default: '#ffffff',
	},
	afterLabelColor: {
		type: 'string',
		default: '#ffffff',
	},
	beforeLabelBgColor: {
		type: 'string',
		default: '#000000',
	},
	afterLabelBgColor: {
		type: 'string',
		default: '#000000',
	},
	beforeLabelOpacity: {
		type: 'number',
		default: 1,
	},
	afterLabelOpacity: {
		type: 'number',
		default: 1,
	},
	beforeLabelHorizontalAlignment: {
		type: 'number',
		default: 3,
	},
	afterLabelHorizontalAlignment: {
		type: 'number',
		default: 3,
	},
	beforeLabelVerticalAlignment: {
		type: 'number',
		default: 85,
	},
	afterLabelVerticalAlignment: {
		type: 'number',
		default: 85,
	},

	// Image Label Border.
	labelBorderStyle: {
		type: 'string',
		default: 'none',
	},
	labelBorderWidth: {
		type: 'number',
		default: 2,
	},
	labelBorderRadius: {
		type: 'number',
		default: 5,
	},
	labelBorderColor: {
		type: 'string',
		default: '#000000',
	},
	labelBorderHoverColor: {
		type: 'string',
		default: '#ffffff',
	},

	// Slider Orientation.
	sliderOrientation: {
		type: 'string',
		default: 'horizontal',	// Horizontal orientation by default.
	},

	// Slider position in percentage.
	sliderPosition: {
		type: 'number',
		default: 50,
	},

	animateSlider: {
		type: 'boolean',
		default: false,	// Disable animated slider by default.
	},

	// Slide handle on mouse hover.
	hoverSlider: {
		type: 'boolean',
		default: false,
	},

	// Slider Elevation Styling.
	enableSliderElevation: {
		type: 'boolean',
		default: true,
	},

	sliderBoxShadowColor: {
		type: 'string',
		default: '#aaaaaa',
	},

	sliderBoxShadowHOffset: {
		type: 'number',
		default: 0,
	},

	sliderBoxShadowVOffset: {
		type: 'number',
		default: 0,
	},

	sliderBoxShadowBlur: {
		type: 'number',
		default: 15,
	},

	sliderBoxShadowSpread: {
		type: 'number',
		default: 5,
	},

	sliderBoxShadowPosition: {
		type: 'string',
		default: '',
	},

};

export default attributes;