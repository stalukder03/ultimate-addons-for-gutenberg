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

};

export default attributes;