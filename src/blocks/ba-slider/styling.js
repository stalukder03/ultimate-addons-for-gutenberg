/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { _x } from '@wordpress/i18n';

 function styling ( props ) {

	const {
        showLabels,
        showLabelsTablet,
        showLabelsMobile,
		beforeLabelColor,
		afterLabelColor,
		beforeLabelBgColor,
		afterLabelBgColor,
		beforeLabelOpacity,
		afterLabelOpacity,
		beforeLabelVerticalAlignment,
		afterLabelVerticalAlignment,
		beforeLabelHorizontalAlignment,
		afterLabelHorizontalAlignment,
		beforeLabelHorizontalAlignmentTablet,
		beforeLabelVerticalAlignmentTablet,
		afterLabelVerticalAlignmentTablet,
		afterLabelHorizontalAlignmentTablet,
		beforeLabelHorizontalAlignmentMobile,
		beforeLabelVerticalAlignmentMobile,
		afterLabelVerticalAlignmentMobile,
		afterLabelHorizontalAlignmentMobile,
		labelBorderStyle,
		labelBorderWidth,
		labelBorderRadius,
		labelBorderColor,
		labelBorderHoverColor,
        animateSlider,
		enableSliderElevation,
		sliderBoxShadowColor,
		sliderBoxShadowHOffset,
		sliderBoxShadowVOffset,
		sliderBoxShadowBlur,
		sliderBoxShadowSpread,
		sliderBoxShadowPosition,
		dividerWidth,
		dividerColor,
		handleHoverAnimation,
		imageDimDesktop,
		imageDimTablet,
		imageDimMobile,
		sliderWidthDesktop,
		sliderWidthTablet,
		sliderWidthMobile,
		sliderHeightDesktop,
		sliderHeightTablet,
		sliderHeightMobile,
		sliderWidthUnitDesktop,
		sliderWidthUnitTablet,
		sliderWidthUnitMobile,
		sliderHeightUnitDesktop,
		sliderHeightUnitTablet,
		sliderHeightUnitMobile,
	} = props.attributes;

    let selectors = {};
	let tablet_selectors = {};
	let mobile_selectors = {};

	function getDimensions( dimension, newWidth = '100%', newHeight = 'auto' ){

		let width = '100%', height = 'auto';
		let maxWidth = '100%', maxHeight = '100%';

		switch( dimension ) {
			case 'full':
				width = '100%';
				height = 'auto';
				break;
			case 'thumb':
				width = '100%';
				height = 'auto';
				maxWidth = maxHeight = '150px';
				break;
			case 'medium':
				width = '100%';
				height = 'auto';
				maxWidth = 300 + 'px';
				maxHeight = 300 + 'px';
				break;
			case 'large':
				width = '100%';
				height = 'auto';
				maxWidth = 1024 + 'px';
				maxHeight = 1024 + 'px';
				break;
			case 'custom':
				width = newWidth;
				height = newHeight;
				break;
			default:
				break;
		}
		return [width, height, maxWidth, maxHeight];
	}

	const dimsDesktop = getDimensions( imageDimDesktop, sliderWidthDesktop, sliderHeightDesktop );
	const dimsTablet  = getDimensions( imageDimTablet, sliderWidthTablet, sliderHeightTablet );
	const dimsMobile  = getDimensions( imageDimMobile, sliderWidthMobile, sliderHeightMobile );

	selectors = {

		// <img-comparison-slider> variables and sizing.
		' .uagb-ba-slider__img-comparison': {

			'--divider-width': generateCSSUnit( dividerWidth, 'px' ),
			'--divider-color': dividerColor,

			'width': ( dimsDesktop[0] === '100%' ) ?
						'100%' :
						generateCSSUnit( dimsDesktop[0], sliderWidthUnitDesktop ),

			'height': ( dimsDesktop[1] === 'auto' ) ?
						'auto' :
						generateCSSUnit( dimsDesktop[1], sliderHeightUnitDesktop ),

			'max-width': ( imageDimDesktop === 'custom' ) ?
							'none' :
							dimsDesktop[2],

			'max-height': ( imageDimDesktop === 'custom' ) ?
							'none' :
							dimsDesktop[3],

		},

		// Figure -> After (The second image/figure doesn't resize itself, and hence we need the following code).
		' .uagb-ba-slider__figure-after': {
			'height': ( imageDimDesktop === 'custom' ) ? 
						generateCSSUnit( sliderHeightDesktop, sliderHeightUnitDesktop ) :
						'auto',
		},

		// Before Label.
		' .uagb-ba-slider__label-before': {
			'display': showLabels ? 'block' : 'none',
			'color': beforeLabelColor,
			'background-color': beforeLabelBgColor,
			'opacity': beforeLabelOpacity,
			'top': generateCSSUnit( beforeLabelVerticalAlignment, '%' ),
			'left': generateCSSUnit( beforeLabelHorizontalAlignment, '%' ),

			// Border styles.
			'border-style': labelBorderStyle,
			'border-width': generateCSSUnit( labelBorderWidth, 'px' ),
			'border-radius': generateCSSUnit( labelBorderRadius, 'px' ),
			'border-color': labelBorderColor,
		},

		// After Label.
		' .uagb-ba-slider__label-after': {
			'display': showLabels ? 'block' : 'none',
			'color': afterLabelColor,
			'background-color': afterLabelBgColor,
			'opacity': afterLabelOpacity,
			'top': generateCSSUnit( afterLabelVerticalAlignment, '%' ),
			'right': generateCSSUnit( ( 100 - afterLabelHorizontalAlignment ), '%' ),

			// Border styles.
			'border-style': labelBorderStyle,
			'border-width': labelBorderWidth+'px',
			'border-radius': labelBorderRadius+'px',
			'border-color': labelBorderColor,
		},

		// Label hover effects.
		' .uagb-ba-slider__label-before:hover': {
			'border-color': labelBorderHoverColor,
		},

		' .uagb-ba-slider__label-after:hover': {
			'border-color': labelBorderHoverColor,
		},

		' .uagb-ba-slider__img-comparison:focus': {
			'box-shadow': enableSliderElevation ?
							sliderBoxShadowHOffset+'px ' + sliderBoxShadowVOffset+'px ' + sliderBoxShadowBlur+'px ' + sliderBoxShadowSpread+'px '+ sliderBoxShadowColor + ( ( sliderBoxShadowPosition === 'inset' ) ? 'inset' : '' )  :
							'none',
		},

		' .uagb-ba-slider__handle': {
			'transition': 'transform 0.5s',
		},

		// Slider-handle hover animation.
		' .uagb-ba-slider__handle:hover': {
			'transform': handleHoverAnimation ? 'scale(1.2)' : 'scale(1)',
		},

	}

	// If animateSlider is enabled, push this into selector array.
	if( animateSlider ) {
		selectors = {
			...selectors,
			' .uagb-ba-slider__img-comparison:before': {
				'content': _x( '"Animation Enabled"',
								'Since this text is for the content CSS property, please make sure to add the double quotes',
								'ultimate-addons-for-gutenberg'
							),
				'position': 'sticky',
				'z-index': '9999',
				'color': '#ffffff',
				'width': 'fit-content',
				'height': 'fit-content',
				'background-color': 'rgb(97, 4, 255)',
				'top': generateCSSUnit( 1, '%' ),
				'left': generateCSSUnit( 1, '%' ),
				'padding': generateCSSUnit( 5, 'px' ) + ' ' + generateCSSUnit( 7, 'px' ),
				'border-radius': generateCSSUnit( 5, 'px' ),
				'box-shadow': '#7f7f7f 0 0 5px 5px',
			},
		};
	}

	tablet_selectors = {

		// <img-comparison-slider> variables and sizing.
		' .uagb-ba-slider__img-comparison': {

			'--divider-width': generateCSSUnit( dividerWidth, 'px' ),
			'--divider-color': dividerColor,

			'width': ( dimsTablet[0] === '100%' ) ?
						'100%' :
						generateCSSUnit( dimsTablet[0], sliderWidthUnitTablet ),

			'height': ( dimsTablet[1] === 'auto' ) ?
						'auto' :
						generateCSSUnit( dimsTablet[1], sliderHeightUnitTablet ),

			'max-width': ( imageDimTablet === 'custom' ) ?
							'none' :
							dimsTablet[2],

			'max-height': ( imageDimTablet === 'custom' ) ?
							'none' :
							dimsTablet[3],

		},

		// Figure -> After (The second image/figure doesn't resize itself, and hence we need the following code).
		' .uagb-ba-slider__figure-after': {
			'height': ( imageDimTablet === 'custom' ) ? 
						generateCSSUnit( sliderHeightTablet, sliderHeightUnitTablet ) :
						'auto',
		},

		// Before Label.
		' .uagb-ba-slider__label-before': {
			'display': showLabelsTablet ? 'block' : 'none',
			'top': generateCSSUnit( beforeLabelVerticalAlignmentTablet, '%' ),
			'left': generateCSSUnit( beforeLabelHorizontalAlignmentTablet, '%' ),
		},

		// After Label.
		' .uagb-ba-slider__label-after': {
			'display': showLabelsTablet ? 'block' : 'none',
			'top': generateCSSUnit( afterLabelVerticalAlignmentTablet, '%' ),
			'right': generateCSSUnit( ( 100 - afterLabelHorizontalAlignmentTablet ), '%' ),
		},

	}

	mobile_selectors = {

		// <img-comparison-slider> variables and sizing.
		' .uagb-ba-slider__img-comparison': {

			'--divider-width': generateCSSUnit( dividerWidth, 'px' ),
			'--divider-color': dividerColor,

			'width': ( dimsMobile[0] === '100%' ) ?
						'100%' :
						generateCSSUnit( dimsMobile[0], sliderWidthUnitMobile ),

			'height': ( dimsMobile[1] === 'auto' ) ?
						'auto' :
						generateCSSUnit( dimsMobile[1], sliderHeightUnitMobile ),

			'max-width': ( imageDimMobile === 'custom' ) ?
							'none' :
							dimsMobile[2],

			'max-height': ( imageDimMobile === 'custom' ) ?
							'none' :
							dimsMobile[3],

		},
		
		// Figure -> After (The second image/figure doesn't resize itself, and hence we need the following code).
		' .uagb-ba-slider__figure-after': {
			'height': ( imageDimMobile === 'custom' ) ? 
						generateCSSUnit( sliderHeightMobile, sliderHeightUnitMobile ) :
						'auto',
		},

		// Before Label.
		' .uagb-ba-slider__label-before': {
			'display': showLabelsMobile ? 'block' : 'none',
			'top': generateCSSUnit( beforeLabelVerticalAlignmentMobile, '%' ),
			'left': generateCSSUnit( beforeLabelHorizontalAlignmentMobile, '%' ),
		},

		// After Label.
		' .uagb-ba-slider__label-after': {
			'display': showLabelsMobile ? 'block' : 'none',
			'top': generateCSSUnit( afterLabelVerticalAlignmentMobile, '%' ),
			'right': generateCSSUnit( ( 100 - afterLabelHorizontalAlignmentMobile ), '%' ),
		},

	}

    const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS(
		tablet_selectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	styling_css += generateCSS(
		mobile_selectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return styling_css;
 }

 export default styling;