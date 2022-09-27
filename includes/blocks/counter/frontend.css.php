<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Add fonts.
UAGB_Block_JS::blocks_advanced_heading_gfont( $attr );

$block_name = 'counter';

// <-------------- FALLBACKS -------------->.

// Circle, circle stroke and bar size.
$circle_size_fallback        = UAGB_Block_Helper::get_fallback_number( $attr['circleSize'], 'circleSize', $block_name );
$circle_stroke_size_fallback = UAGB_Block_Helper::get_fallback_number( $attr['circleStokeSize'], 'circleStokeSize', $block_name );
$bar_size_fallback           = UAGB_Block_Helper::get_fallback_number( $attr['barSize'], 'barSize', $block_name );

// Prefix spacing fallbacks.
$prefix_right_distance_fallback    = UAGB_Block_Helper::get_fallback_number( $attr['prefixRightDistance'], 'prefixRightDistance', $block_name );
$attr['prefixRightDistanceTablet'] = is_numeric( $attr['prefixRightDistanceTablet'] ) ? $attr['prefixRightDistanceTablet'] : $prefix_right_distance_fallback;
$attr['prefixRightDistanceMobile'] = is_numeric( $attr['prefixRightDistanceMobile'] ) ? $attr['prefixRightDistanceMobile'] : $attr['prefixRightDistanceTablet'];

// Suffix spacing fallbacks.
$suffix_left_distance_fallback    = UAGB_Block_Helper::get_fallback_number( $attr['suffixLeftDistance'], 'suffixLeftDistance', $block_name );
$attr['suffixLeftDistanceTablet'] = is_numeric( $attr['suffixLeftDistanceTablet'] ) ? $attr['suffixLeftDistanceTablet'] : $suffix_left_distance_fallback;
$attr['suffixLeftDistanceMobile'] = is_numeric( $attr['suffixLeftDistanceMobile'] ) ? $attr['suffixLeftDistanceMobile'] : $attr['suffixLeftDistanceTablet'];

$box_shadow_position_css = $attr['boxShadowPosition'];

if ( 'outset' === $attr['boxShadowPosition'] ) {
	$box_shadow_position_css = '';
}

$box_shadow_position_css_hover = $attr['boxShadowPositionHover'];

if ( 'outset' === $attr['boxShadowPositionHover'] ) {
	$box_shadow_position_css_hover = '';
}

$m_selectors = array();
$t_selectors = array();

$selectors = array(
	'.wp-block-uagb-counter'                               => array(
		'text-align'     => $attr['align'],
		'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMargin'], $attr['blockMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMargin'], $attr['blockMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMargin'], $attr['blockMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMargin'], $attr['blockMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPadding'], $attr['blockPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPadding'], $attr['blockPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPadding'], $attr['blockPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPadding'], $attr['blockPaddingUnit'] ),
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__icon svg' => array(
		'width'  => UAGB_Helper::get_css_value( $attr['iconSize'], $attr['iconSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['iconSize'], $attr['iconSizeType'] ),
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__title' => array(
		'font-family'     => $attr['headingFontFamily'],
		'font-style'      => $attr['headingFontStyle'],
		'text-decoration' => $attr['headingDecoration'],
		'text-transform'  => $attr['headingTransform'],
		'font-weight'     => $attr['headingFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['headingFontSize'], $attr['headingFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['headingLineHeight'], $attr['headingLineHeightType'] ),
		'color'           => $attr['headingColor'],
		'margin-top'      => UAGB_Helper::get_css_value( $attr['headingTopMargin'], $attr['headingMarginUnit'] ),
		'margin-right'    => UAGB_Helper::get_css_value( $attr['headingRightMargin'], $attr['headingMarginUnit'] ),
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['headingBottomMargin'], $attr['headingMarginUnit'] ),
		'margin-left'     => UAGB_Helper::get_css_value( $attr['headingLeftMargin'], $attr['headingMarginUnit'] ),
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__number' => array(
		'font-family'     => $attr['numberFontFamily'],
		'font-style'      => $attr['numberFontStyle'],
		'text-decoration' => $attr['numberDecoration'],
		'text-transform'  => $attr['numberTransform'],
		'font-weight'     => $attr['numberFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['numberFontSize'], $attr['numberFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['numberLineHeight'], $attr['numberLineHeightType'] ),
		'color'           => $attr['numberColor'],
		'margin-top'      => UAGB_Helper::get_css_value( $attr['numberTopMargin'], $attr['numberMarginUnit'] ),
		'margin-right'    => UAGB_Helper::get_css_value( $attr['numberRightMargin'], $attr['numberMarginUnit'] ),
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['numberBottomMargin'], $attr['numberMarginUnit'] ),
		'margin-left'     => UAGB_Helper::get_css_value( $attr['numberLeftMargin'], $attr['numberMarginUnit'] ),
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix' => array(
		'margin-right' => UAGB_Helper::get_css_value( $prefix_right_distance_fallback, 'px' ),
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix' => array(
		'margin-left' => UAGB_Helper::get_css_value( $suffix_left_distance_fallback, 'px' ),
	),
	'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container' => array(
		'width'  => UAGB_Helper::get_css_value( $circle_size_fallback, 'px' ),
		'height' => UAGB_Helper::get_css_value( $circle_size_fallback, 'px' ),
	),
	'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg circle' => array(
		'stroke-width' => UAGB_Helper::get_css_value( $circle_stroke_size_fallback, 'px' ),
		'stroke'       => $attr['circleForeground'],
	),
	'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg #bar' => array(
		'stroke' => $attr['circleBackground'],
	),
	'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container' => array(
		'background'    => $attr['barForeground'],
		'margin-top'    => UAGB_Helper::get_css_value( $attr['numberTopMargin'], $attr['numberMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['numberRightMargin'], $attr['numberMarginUnit'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['numberBottomMargin'], $attr['numberMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['numberLeftMargin'], $attr['numberMarginUnit'] ),
	),
	'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container .wp-block-uagb-counter__number' => array(
		'height'     => UAGB_Helper::get_css_value( $bar_size_fallback, 'px' ),
		'background' => $attr['barBackground'],
	),
);

// tablet.
$t_selectors['.wp-block-uagb-counter'] = array(
	'text-align'     => $attr['alignTablet'],
	'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
);

$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__title']                             = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['headingFontSizeTablet'], $attr['headingFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['headingLineHeightTablet'], $attr['headingLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['headingTopMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['headingRightMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBottomMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['headingLeftMarginTablet'], $attr['headingMarginUnitTablet'] ),
);
$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number']                            = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['numberFontSizeTablet'], $attr['numberFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['numberLineHeightTablet'], $attr['numberLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['numberTopMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['numberRightMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['numberBottomMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['numberLeftMarginTablet'], $attr['numberMarginUnitTablet'] ),
);
$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix'] = array(
	'margin-right' => UAGB_Helper::get_css_value( $attr['prefixRightDistanceTablet'], 'px' ),
);
$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix'] = array(
	'margin-left' => UAGB_Helper::get_css_value( $attr['suffixLeftDistanceTablet'], 'px' ),
);
$t_selectors['.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container']               = array(
	'margin-top'    => UAGB_Helper::get_css_value( $attr['numberTopMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['numberRightMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['numberBottomMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['numberLeftMarginTablet'], $attr['numberMarginUnitTablet'] ),
);

// mobile.
$m_selectors['.wp-block-uagb-counter'] = array(
	'text-align'     => $attr['alignMobile'],
	'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
);

$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__title']                             = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['headingFontSizeMobile'], $attr['headingFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['headingLineHeightMobile'], $attr['headingLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['headingTopMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['headingRightMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBottomMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['headingLeftMarginMobile'], $attr['headingMarginUnitMobile'] ),
);
$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number']                            = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['numberFontSizeMobile'], $attr['numberFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['numberLineHeightMobile'], $attr['numberLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['numberTopMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['numberRightMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['numberBottomMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['numberLeftMarginMobile'], $attr['numberMarginUnitMobile'] ),
);
$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix'] = array(
	'margin-right' => UAGB_Helper::get_css_value( $attr['prefixRightDistanceMobile'], 'px' ),
);
$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix'] = array(
	'margin-left' => UAGB_Helper::get_css_value( $attr['suffixLeftDistanceMobile'], 'px' ),
);
$m_selectors['.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container']               = array(
	'margin-top'    => UAGB_Helper::get_css_value( $attr['numberTopMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['numberRightMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['numberBottomMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['numberLeftMarginMobile'], $attr['numberMarginUnitMobile'] ),
);

// In case of 'Bar' layout, we need to add margin to '.wp-block-uagb-counter-bars-container' element and remove the margin from the inner-element.
if ( 'bars' === $attr['layout'] ) {

	$num_container = '.wp-block-uagb-counter .wp-block-uagb-counter__number';

	$selectors[ $num_container ]['margin-top']    = 'unset';
	$selectors[ $num_container ]['margin-bottom'] = 'unset';
	$selectors[ $num_container ]['margin-left']   = 'unset';
	$selectors[ $num_container ]['margin-right']  = 'unset';

	$t_selectors[ $num_container ]['margin-top']    = 'unset';
	$t_selectors[ $num_container ]['margin-bottom'] = 'unset';
	$t_selectors[ $num_container ]['margin-left']   = 'unset';
	$t_selectors[ $num_container ]['margin-right']  = 'unset';

	$m_selectors[ $num_container ]['margin-top']    = 'unset';
	$m_selectors[ $num_container ]['margin-bottom'] = 'unset';
	$m_selectors[ $num_container ]['margin-left']   = 'unset';
	$m_selectors[ $num_container ]['margin-right']  = 'unset';

	$bar_container       = '.wp-block-uagb-counter .wp-block-uagb-counter-bars-container';
	$bar_container_hover = '.wp-block-uagb-counter:hover .wp-block-uagb-counter-bars-container';

	$selectors[ $bar_container ]['box-shadow'] = UAGB_Helper::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
													' ' .
													UAGB_Helper::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
													' ' .
													UAGB_Helper::get_css_value( $attr['boxShadowBlur'], 'px' ) .
													' ' .
													UAGB_Helper::get_css_value( $attr['boxShadowSpread'], 'px' ) .
													' ' .
													$attr['boxShadowColor'] .
													' ' .
													$box_shadow_position_css;

	// If hover blur or hover color are set, show the hover shadow.
	if ( ( ( '' !== $attr['boxShadowBlurHover'] ) && ( null !== $attr['boxShadowBlurHover'] ) ) || '' !== $attr['boxShadowColorHover'] ) {

		$selectors[ $bar_container_hover ]['box-shadow'] = UAGB_Helper::get_css_value( $attr['boxShadowHOffsetHover'], 'px' ) .
																	' ' .
															UAGB_Helper::get_css_value( $attr['boxShadowVOffsetHover'], 'px' ) .
															' ' .
															UAGB_Helper::get_css_value( $attr['boxShadowBlurHover'], 'px' ) .
															' ' .
															UAGB_Helper::get_css_value( $attr['boxShadowSpreadHover'], 'px' ) .
															' ' .
															$attr['boxShadowColorHover'] .
															' ' .
															$box_shadow_position_css_hover;

	}
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );