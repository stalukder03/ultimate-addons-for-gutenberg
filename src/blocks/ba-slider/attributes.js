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

	// Image/Slider Dimensions (thumb, medium, large, full, custom).
	imageDimDesktop: {
		type: 'string',
		default: 'full',
	},
	imageDimTablet: {
		type: 'string',
		default: 'full',
	},
	imageDimMobile: {
		type: 'string',
		default: 'full',
	},

	// Slider/Image Height and Widths (Responsive).
	sliderWidthDesktop: {
		type: 'number',
		default: 100,
	},
	sliderHeightDesktop: {
		type: 'number',
		default: 720,
	},
	sliderWidthTablet: {
		type: 'number',
		default: 100,
	},
	sliderHeightTablet: {
		type: 'number',
		default: 360,
	},
	sliderWidthMobile: {
		type: 'number',
		default: 100,
	},
	sliderHeightMobile: {
		type: 'number',
		default: 240,
	},

	// Slider/Image Dimensions Unit (Responsive).
	sliderWidthUnitDesktop: {
		type: 'string',
		default: '%',
	},
	sliderHeightUnitDesktop: {
		type: 'string',
		default: 'px',
	},
	sliderDimUnitTablet: {
		type: 'string',
		default: '%',
	},
	sliderWidthUnitTablet: {
		type: 'string',
		default: '%',
	},
	sliderHeightUnitTablet: {
		type: 'string',
		default: 'px',
	},
	sliderDimUnitMobile: {
		type: 'string',
		default: '%',
	},
	sliderWidthUnitMobile: {
		type: 'string',
		default: '%',
	},
	sliderHeightUnitMobile: {
		type: 'string',
		default: 'px',
	},

	// Image Labels.
	showLabels: {
		type: 'boolean',
		default: true,
	},
	showLabelsTablet: {
		type: 'boolean',
		default: false,
	},
	showLabelsMobile: {
		type: 'boolean',
		default: false,
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

	// Image Label Responsive Alignment.
	beforeLabelHorizontalAlignment: {
		type: 'number',
		default: 3,
	},
	afterLabelHorizontalAlignment: {
		type: 'number',
		default: 97,
	},
	beforeLabelVerticalAlignment: {
		type: 'number',
		default: 85,
	},
	afterLabelVerticalAlignment: {
		type: 'number',
		default: 85,
	},

	// Image Label Responsive Alignment (Tablet).
	beforeLabelHorizontalAlignmentTablet: {
		type: 'number',
		default: 3,
	},
	afterLabelHorizontalAlignmentTablet: {
		type: 'number',
		default: 97,
	},
	beforeLabelVerticalAlignmentTablet: {
		type: 'number',
		default: 85,
	},
	afterLabelVerticalAlignmentTablet: {
		type: 'number',
		default: 85,
	},

	// Image Label Responsive Alignment (Mobile).
	beforeLabelHorizontalAlignmentMobile: {
		type: 'number',
		default: 3,
	},
	afterLabelHorizontalAlignmentMobile: {
		type: 'number',
		default: 97,
	},
	beforeLabelVerticalAlignmentMobile: {
		type: 'number',
		default: 85,
	},
	afterLabelVerticalAlignmentMobile: {
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

	// Divider/Handle Styling Settings.
	dividerColor: {
		type: 'string',
		default: '#ffffff',
	},
	dividerWidth: {
		type: 'number',
		default: 2,
	},
	handleHoverAnimation: {
		type: 'boolean',
		default: false,
	},

	// Misc.
	beforeHeight: {
		type: 'number',
	},
	firstTimeRun: {
		type: 'boolean',
		default: true,
	},
	initialHeight: {
		type: 'number',
	}
};

export default attributes;