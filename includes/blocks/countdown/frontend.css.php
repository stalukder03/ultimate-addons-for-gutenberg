<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.1.0
 *
 * @package uagb
 */

$block_name = 'countdown';

$m_selectors = array();
$t_selectors = array();

$selectors = array(

	'.wp-block-uagb-countdown .wp-block-uagb-countdown__time' => array(
		'font-family'     => $attr['digitFontFamily'],
		'font-style'      => $attr['digitFontStyle'],
		'text-decoration' => $attr['digitDecoration'],
		'text-transform'  => $attr['digitTransform'],
		'font-weight'     => $attr['digitFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['digitFontSize'], $attr['digitFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['digitLineHeight'], $attr['digitLineHeightType'] ),
		'color'           => $attr['digitColor'],
		'margin-top'      => UAGB_Helper::get_css_value( $attr['digitTopMargin'], $attr['digitMarginUnit'] ),
		'margin-right'    => UAGB_Helper::get_css_value( $attr['digitRightMargin'], $attr['digitMarginUnit'] ),
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['digitBottomMargin'], $attr['digitMarginUnit'] ),
		'margin-left'     => UAGB_Helper::get_css_value( $attr['digitLeftMargin'], $attr['digitMarginUnit'] ),
	),

	'.wp-block-uagb-countdown .wp-block-uagb-countdown__label' => array(
		'font-family'     => $attr['labelFontFamily'],
		'font-style'      => $attr['labelFontStyle'],
		'text-decoration' => $attr['labelDecoration'],
		'text-transform'  => $attr['labelTransform'],
		'font-weight'     => $attr['labelFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['labelFontSize'], $attr['labelFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['labelLineHeight'], $attr['labelLineHeightType'] ),
		'color'           => $attr['labelColor'],
		'margin-top'      => UAGB_Helper::get_css_value( $attr['labelTopMargin'], $attr['labelMarginUnit'] ),
		'margin-right'    => UAGB_Helper::get_css_value( $attr['labelRightMargin'], $attr['labelMarginUnit'] ),
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['labelBottomMargin'], $attr['labelMarginUnit'] ),
		'margin-left'     => UAGB_Helper::get_css_value( $attr['labelLeftMargin'], $attr['labelMarginUnit'] ),
	),

);

// TABLET SELECTORS.

$t_selectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__time'] = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['digitFontSizeTablet'], $attr['digitFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['digitLineHeightTablet'], $attr['digitLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['digitTopMarginTablet'], $attr['digitMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['digitRightMarginTablet'], $attr['digitMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['digitBottomMarginTablet'], $attr['digitMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['digitLeftMarginTablet'], $attr['digitMarginUnitTablet'] ),
);

$t_selectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__label'] = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['labelFontSizeTablet'], $attr['labelFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['labelLineHeightTablet'], $attr['labelLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['labelTopMarginTablet'], $attr['labelMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['labelRightMarginTablet'], $attr['labelMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['labelBottomMarginTablet'], $attr['labelMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['labelLeftMarginTablet'], $attr['labelMarginUnitTablet'] ),
);

// MOBILE SELECTORS.

$m_selectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__time'] = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['digitFontSizeMobile'], $attr['digitFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['digitLineHeightMobile'], $attr['digitLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['digitTopMarginMobile'], $attr['digitMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['digitRightMarginMobile'], $attr['digitMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['digitBottomMarginMobile'], $attr['digitMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['digitLeftMarginMobile'], $attr['digitMarginUnitMobile'] ),
);

$m_selectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__label'] = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['labelFontSizeMobile'], $attr['labelFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['labelLineHeightMobile'], $attr['labelLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['labelTopMarginMobile'], $attr['labelMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['labelRightMarginMobile'], $attr['labelMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['labelBottomMarginMobile'], $attr['labelMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['labelLeftMarginMobile'], $attr['labelMarginUnitMobile'] ),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
