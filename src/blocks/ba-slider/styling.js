/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from '@Controls/generateCSS';
 import generateCSSUnit from '@Controls/generateCSSUnit';

 function styling ( props ) {

	const {
		block_id,
        classMigrate,
        beforeImage,
        afterImage,
        showLabels,
        beforeLabel,
        afterLabel,
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
		labelBorderStyle,
		labelBorderWidth,
		labelBorderRadius,
		labelBorderColor,
		labelBorderHoverColor,
        sliderOrientation,
        sliderPosition,
        animateSlider,
        hoverSlider,
		enableSliderElevation,
		sliderBoxShadowColor,
		sliderBoxShadowHOffset,
		sliderBoxShadowVOffset,
		sliderBoxShadowBlur,
		sliderBoxShadowSpread,
		sliderBoxShadowPosition,
	} = props.attributes;

    let selectors = {};
	let tablet_selectors = {};
	let mobile_selectors = {};

	selectors = {

		// Before Label.
		' .uagb-ba-slider__label-before': {
			'display': showLabels ? 'block' : 'none',
			'color': beforeLabelColor,
			'background-color': beforeLabelBgColor,
			'opacity': beforeLabelOpacity,
			'top': beforeLabelVerticalAlignment+'%',
			'left': beforeLabelHorizontalAlignment+'%',

			// Border styles.
			'border-style': labelBorderStyle,
			'border-width': labelBorderWidth+'px',
			'border-radius': labelBorderRadius+'px',
			'border-color': labelBorderColor,
		},

		// After Label.
		' .uagb-ba-slider__label-after': {
			'display': showLabels ? 'block' : 'none',
			'color': afterLabelColor,
			'background-color': afterLabelBgColor,
			'opacity': afterLabelOpacity,
			'top': afterLabelVerticalAlignment+'%',
			'right': ( 100 - afterLabelHorizontalAlignment )+'%',

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
			'box-shadow': enableSliderElevation ? sliderBoxShadowHOffset+'px '+sliderBoxShadowVOffset+'px '+sliderBoxShadowBlur+'px '+sliderBoxShadowSpread+'px '+( ( sliderBoxShadowPosition === 'inset' ) ? 'inset' : '' )  : 'none',
		},

	}

	tablet_selectors = {

	}

	mobile_selectors = {

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