<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Define selectors.
$selectors   = array();
$t_selectors = array();
$m_selectors = array();

// Initialize selectors.

$selectors = array(

	// <img-comparison-slider> variables.
	'  .uagb-ba-slider__img-comparison'    => array(
		'--divider-width' => $attr['dividerWidth'] . 'px',
		'--divider-color' => $attr['dividerColor'],
	),

	// Before Label.
	' .uagb-ba-slider__label-before'       => array(
		'display'          => $attr['showLabels'] ? 'block' : 'none',

		'color'            => $attr['beforeLabelColor'],
		'background-color' => $attr['beforeLabelBgColor'],
		'opacity'          => $attr['beforeLabelOpacity'],
		'top'              => $attr['beforeLabelVerticalAlignment'] . '%',
		'left'             => $attr['beforeLabelHorizontalAlignment'] . '%',

		// Border styles.
		'border-style'     => $attr['labelBorderStyle'],
		'border-width'     => $attr['labelBorderWidth'] . 'px',
		'border-radius'    => $attr['labelBorderRadius'] . 'px',
		'border-color'     => $attr['labelBorderColor'],
	),

	// After Label.
	' .uagb-ba-slider__label-before'       => array(
		'display'          => $attr['showLabels'] ? 'block' : 'none',

		'color'            => $attr['afterLabelColor'],
		'background-color' => $attr['afterLabelBgColor'],
		'opacity'          => $attr['afterLabelOpacity'],
		'top'              => $attr['afterLabelVerticalAlignment'] . '%',
		'left'             => $attr['afterLabelHorizontalAlignment'] . '%',

		// Border styles.
		'border-style'     => $attr['labelBorderStyle'],
		'border-width'     => $attr['labelBorderWidth'] . 'px',
		'border-radius'    => $attr['labelBorderRadius'] . 'px',
		'border-color'     => $attr['labelBorderColor'],
	),

	// Label hover effects.
	' .uagb-ba-slider__label-before:hover' => array(
		'border-color' => $attr['labelBorderHoverColor'],
	),
	' .uagb-ba-slider__label-after:hover'  => array(
		'border-color' => $attr['labelBorderHoverColor'],
	),

	' .uagb-ba-slider__img-comparison:focus' => array(
		'box-shadow'   => $attr['enableSliderElevation'] ? $attr['sliderBoxShadowHOffset'] . 'px ' . $attr['sliderBoxShadowVOffset'] . 'px ' . $attr['sliderBoxShadowBlur'] . 'px ' . $attr['sliderBoxShadowSpread'] . 'px ' . ( ( 'inset' === $attr['sliderBoxShadowPosition'] ) ? 'inset' : '' ) : 'none',
	),

	' .uagb-ba-slider__handle'             => array(
		'transition' => 'transform 0.5s',
	),

	// Slider-handle hover animation.
	' .uagb-ba-slider__handle:hover'       => array(
		'transform' => $attr['handleHoverAnimation'] ? 'scale(1.2)' : 'scale(1)',
	),


);

// Combine selectors.

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);
