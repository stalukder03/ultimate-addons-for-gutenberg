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

	// Slider Orientation ( 0 = Horizontal, 1 = Vertical ).
	sliderOrientation: {
		type: 'number',
		default: 0,	// Horizontal orientation by default.
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