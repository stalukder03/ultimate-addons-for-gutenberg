<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_table_of_contents_gfont( $attr );

$block_name = 'table-of-contents';

$t_columns_desktop_fallback = UAGB_Block_Helper::get_fallback_number( $attr['tColumnsDesktop'], 'tColumnsDesktop', $block_name );
$t_columns_tablet_fallback  = UAGB_Block_Helper::get_fallback_number( $attr['tColumnsTablet'], 'tColumnsTablet', $block_name );
$t_columns_mobile_fallback  = UAGB_Block_Helper::get_fallback_number( $attr['tColumnsMobile'], 'tColumnsMobile', $block_name );
$width_desktop_fallback     = UAGB_Block_Helper::get_fallback_number( $attr['widthDesktop'], 'widthDesktop', $block_name );

$m_selectors = array();
$t_selectors = array();

$top_padding    = isset( $attr['topPadding'] ) ? $attr['topPadding'] : $attr['vPaddingDesktop'];
$bottom_padding = isset( $attr['bottomPadding'] ) ? $attr['bottomPadding'] : $attr['vPaddingDesktop'];
$left_padding   = isset( $attr['leftPadding'] ) ? $attr['leftPadding'] : $attr['hPaddingDesktop'];
$right_padding  = isset( $attr['rightPadding'] ) ? $attr['rightPadding'] : $attr['hPaddingDesktop'];

$mobile_top_padding    = isset( $attr['topPaddingMobile'] ) ? $attr['topPaddingMobile'] : $attr['vPaddingMobile'];
$mobile_bottom_padding = isset( $attr['bottomPaddingMobile'] ) ? $attr['bottomPaddingMobile'] : $attr['vPaddingMobile'];
$mobile_left_padding   = isset( $attr['leftPaddingMobile'] ) ? $attr['leftPaddingMobile'] : $attr['hPaddingMobile'];
$mobile_right_padding  = isset( $attr['rightPaddingMobile'] ) ? $attr['rightPaddingMobile'] : $attr['hPaddingMobile'];

$tablet_top_padding    = isset( $attr['topPaddingTablet'] ) ? $attr['topPaddingTablet'] : $attr['vPaddingTablet'];
$tablet_bottom_padding = isset( $attr['bottomPaddingTablet'] ) ? $attr['bottomPaddingTablet'] : $attr['vPaddingTablet'];
$tablet_left_padding   = isset( $attr['leftPaddingTablet'] ) ? $attr['leftPaddingTablet'] : $attr['hPaddingTablet'];
$tablet_right_padding  = isset( $attr['rightPaddingTablet'] ) ? $attr['rightPaddingTablet'] : $attr['hPaddingTablet'];

$top_margin    = isset( $attr['topMargin'] ) ? $attr['topMargin'] : $attr['vMarginDesktop'];
$bottom_margin = isset( $attr['bottomMargin'] ) ? $attr['bottomMargin'] : $attr['vMarginDesktop'];
$left_margin   = isset( $attr['leftMargin'] ) ? $attr['leftMargin'] : $attr['hMarginDesktop'];
$right_margin  = isset( $attr['rightMargin'] ) ? $attr['rightMargin'] : $attr['hMarginDesktop'];

$mobile_top_margin    = isset( $attr['topMarginMobile'] ) ? $attr['topMarginMobile'] : $attr['vMarginMobile'];
$mobile_bottom_margin = isset( $attr['bottomMarginMobile'] ) ? $attr['bottomMarginMobile'] : $attr['vMarginMobile'];
$mobile_left_margin   = isset( $attr['leftMarginMobile'] ) ? $attr['leftMarginMobile'] : $attr['hMarginMobile'];
$mobile_right_margin  = isset( $attr['rightMarginMobile'] ) ? $attr['rightMarginMobile'] : $attr['hMarginMobile'];

$tablet_top_margin    = isset( $attr['topMarginTablet'] ) ? $attr['topMarginTablet'] : $attr['vMarginTablet'];
$tablet_bottom_margin = isset( $attr['bottomMarginTablet'] ) ? $attr['bottomMarginTablet'] : $attr['vMarginTablet'];
$tablet_left_margin   = isset( $attr['leftMarginTablet'] ) ? $attr['leftMarginTablet'] : $attr['hMarginTablet'];
$tablet_right_margin  = isset( $attr['rightMarginTablet'] ) ? $attr['rightMarginTablet'] : $attr['hMarginTablet'];
$iconSize             = isset( $attr['iconSize'] ) ? UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ) : '20px';

$overallBorderCSS       = UAGB_Block_Helper::uag_generate_border_css( $attr, 'overall' );
$overallBorderCSS       = UAGB_Block_Helper::uag_generate_deprecated_border_css(
	$overallBorderCSS,
	( isset( $attr['borderWidth'] ) ? $attr['borderWidth'] : '' ),
	( isset( $attr['borderRadius'] ) ? $attr['borderRadius'] : '' ),
	( isset( $attr['borderColor'] ) ? $attr['borderColor'] : '' ),
	( isset( $attr['borderStyle'] ) ? $attr['borderStyle'] : '' )
);
$overallBorderCSSTablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'overall', 'tablet' );
$overallBorderCSSMobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'overall', 'mobile' );


$selectors = array(
	' .uagb-toc__list-wrap ul li'                         => array(
		'font-size' => UAGB_Helper::get_css_value( $attr['fontSize'], $attr['fontSizeType'] ),
	),
	' .uagb-toc__list-wrap ol li'                         => array(
		'font-size' => UAGB_Helper::get_css_value( $attr['fontSize'], $attr['fontSizeType'] ),
	),
	' .uagb-toc__list-wrap li a:hover'                    => array(
		'color' => $attr['linkHoverColor'],
	),
	' .uagb-toc__list-wrap li a'                          => array(
		'color' => $attr['linkColor'],
	),
	' .uagb-toc__title-wrap'                              => array(
		'justify-content' => $attr['align'],
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['headingBottom'], 'px' ),
	),
	' .uagb-toc__title'                                   => array(
		'color'           => $attr['headingColor'],
		'justify-content' => $attr['headingAlignment'],
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['headingBottom'], 'px' ),
	),
	' .uagb-toc__wrap'                                    => array_merge(
		$overallBorderCSS,
		array(
			'padding-left'   => UAGB_Helper::get_css_value( $left_padding, $attr['paddingTypeDesktop'] ),
			'padding-right'  => UAGB_Helper::get_css_value( $right_padding, $attr['paddingTypeDesktop'] ),
			'padding-top'    => UAGB_Helper::get_css_value( $top_padding, $attr['paddingTypeDesktop'] ),
			'padding-bottom' => UAGB_Helper::get_css_value( $bottom_padding, $attr['paddingTypeDesktop'] ),
			'background'     => $attr['backgroundColor'],
		),
	),
	' .uagb-toc__wrap:hover'                              => array(
		'border-color' => $attr['overallBorderHColor'],
	),
	' .uagb-toc__list-wrap'                               => array(
		'column-count' => $t_columns_desktop_fallback,
		'overflow'     => 'hidden',
		'text-align'   => $attr['align'],
	),
	' .uagb-toc__list-wrap > ul.uagb-toc__list > li:first-child' => array(
		'padding-top' => 0,
	),
	' .uagb-toc__list-wrap > ol.uagb-toc__list li'        => array(
		'color' => $attr['bulletColor'],
	),
	' .uagb-toc__list-wrap > li'                          => array(
		'color' => $attr['bulletColor'],
	),
	' .uagb-toc__list-wrap ol.uagb-toc__list:first-child' => array(
		'margin-left'   => UAGB_Helper::get_css_value( $left_margin, $attr['marginTypeDesktop'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $right_margin, $attr['marginTypeDesktop'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $top_margin, $attr['marginTypeDesktop'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $bottom_margin, $attr['marginTypeDesktop'] ),
	),
	' .uagb-toc__list-wrap ul.uagb-toc__list:last-child > li:last-child' => array(
		'padding-bottom' => 0,
	),
	' .uag-toc__collapsible-wrap svg'                     => array(
		'width'  => $iconSize,
		'height' => $iconSize,
		'fill'   => $attr['iconColor'],
	),
	' svg'                                                => array(
		'width'  => $iconSize,
		'height' => $iconSize,
		'fill'   => $attr['iconColor'],
	),
);

if ( '' !== $attr['contentPaddingDesktop'] ) {
	$selectors[' .uagb-toc__list-wrap ol.uagb-toc__list > li']['padding-top']    = 'calc( ' . UAGB_Helper::get_css_value( $attr['contentPaddingDesktop'] . $attr['contentPaddingTypeDesktop'] ) . ' / 2 )';
	$selectors[' .uagb-toc__list-wrap ol.uagb-toc__list > li']['padding-bottom'] = 'calc( ' . UAGB_Helper::get_css_value( $attr['contentPaddingDesktop'] . $attr['contentPaddingTypeDesktop'] ) . ' / 2 )';
	$selectors[' .uagb-toc__list-wrap ul.uagb-toc__list > li']['padding-top']    = 'calc( ' . UAGB_Helper::get_css_value( $attr['contentPaddingDesktop'] . $attr['contentPaddingTypeDesktop'] ) . ' / 2 )';
	$selectors[' .uagb-toc__list-wrap ul.uagb-toc__list > li']['padding-bottom'] = 'calc( ' . UAGB_Helper::get_css_value( $attr['contentPaddingDesktop'] . $attr['contentPaddingTypeDesktop'] ) . ' / 2 )';
}

if ( $attr['customWidth'] ) {
	$selectors[' .uagb-toc__wrap']['width'] = UAGB_Helper::get_css_value( $width_desktop_fallback, $attr['widthTypeDesktop'] );
}

if ( $attr['customWidth'] && $attr['makeCollapsible'] ) {
	$selectors[' .uagb-toc__title']['justify-content'] = 'space-between';
}

if ( $attr['disableBullets'] ) {
	$selectors[' .uagb-toc__list']                 = array(
		'list-style-type' => 'none !important',
	);
	$selectors[' .uagb-toc__list .uagb-toc__list'] = array(
		'list-style-type' => 'none !important',
	);
} else {
	$selectors[' .uagb-toc__list .uagb-toc__list'] = array(
		'list-style-type' => $attr['markerView'] . ' !important',
	);
}

$m_selectors = array(
	' .uagb-toc__list-wrap ul li'                         => array(
		'font-size' => UAGB_Helper::get_css_value( $attr['fontSizeMobile'], $attr['fontSizeType'] ),
	),
	' .uagb-toc__list-wrap ol li'                         => array(
		'font-size' => UAGB_Helper::get_css_value( $attr['fontSizeMobile'], $attr['fontSizeType'] ),
	),
	' .uagb-toc__title'                                   => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBottomMobile'], 'px' ),
	),
	' .uagb-toc__wrap'                                    => array_merge(
		$overallBorderCSSMobile,
		array(
			'width'          => UAGB_Helper::get_css_value( $attr['widthMobile'], $attr['widthTypeMobile'] ),
			'padding-left'   => UAGB_Helper::get_css_value( $mobile_left_padding, $attr['paddingTypeMobile'] ),
			'padding-right'  => UAGB_Helper::get_css_value( $mobile_right_padding, $attr['paddingTypeMobile'] ),
			'padding-top'    => UAGB_Helper::get_css_value( $mobile_top_padding, $attr['paddingTypeMobile'] ),
			'padding-bottom' => UAGB_Helper::get_css_value( $mobile_bottom_padding, $attr['paddingTypeMobile'] ),
		),
	),
	' .uagb-toc__list-wrap ol.uagb-toc__list:first-child' => array(
		'margin-left'   => UAGB_Helper::get_css_value( $mobile_left_margin, $attr['marginTypeMobile'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $mobile_right_margin, $attr['marginTypeMobile'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $mobile_top_margin, $attr['marginTypeMobile'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $mobile_bottom_margin, $attr['marginTypeMobile'] ),
	),
	' .uagb-toc__list-wrap'                               => array(
		'column-count' => $t_columns_mobile_fallback,
		'overflow'     => 'hidden',
		'text-align'   => $attr['align'],
	),
	' .uagb-toc__list-wrap > ul.uagb-toc__list > li:first-child' => array(
		'padding-top' => 0,
	),
	' .uagb-toc__list-wrap ul.uagb-toc__list:last-child > li:last-child' => array(
		'padding-bottom' => 0,
	),
);

$t_selectors = array(
	' .uagb-toc__list-wrap ul li'                         => array(
		'font-size' => UAGB_Helper::get_css_value( $attr['fontSizeTablet'], $attr['fontSizeType'] ),
	),
	' .uagb-toc__list-wrap ol li'                         => array(
		'font-size' => UAGB_Helper::get_css_value( $attr['fontSizeTablet'], $attr['fontSizeType'] ),
	),
	' .uagb-toc__title'                                   => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBottomTablet'], 'px' ),
	),
	' .uagb-toc__wrap'                                    => array_merge(
		$overallBorderCSSTablet,
		array(
			'width'          => UAGB_Helper::get_css_value( $attr['widthTablet'], $attr['widthTypeTablet'] ),
			'padding-left'   => UAGB_Helper::get_css_value( $tablet_left_padding, $attr['paddingTypeTablet'] ),
			'padding-right'  => UAGB_Helper::get_css_value( $tablet_right_padding, $attr['paddingTypeTablet'] ),
			'padding-top'    => UAGB_Helper::get_css_value( $tablet_top_padding, $attr['paddingTypeTablet'] ),
			'padding-bottom' => UAGB_Helper::get_css_value( $tablet_bottom_padding, $attr['paddingTypeTablet'] ),
		),
	),
	' .uagb-toc__list-wrap ol.uagb-toc__list:first-child' => array(
		'margin-left'   => UAGB_Helper::get_css_value( $tablet_left_margin, $attr['marginTypeTablet'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $tablet_right_margin, $attr['marginTypeTablet'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $tablet_top_margin, $attr['marginTypeTablet'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $tablet_bottom_margin, $attr['marginTypeTablet'] ),
	),
	' .uagb-toc__list-wrap'                               => array(
		'column-count' => $t_columns_tablet_fallback,
		'overflow'     => 'hidden',
		'text-align'   => $attr['align'],
	),
	' .uagb-toc__list-wrap > ul.uagb-toc__list > li:first-child' => array(
		'padding-top' => 0,
	),
	' .uagb-toc__list-wrap ul.uagb-toc__list:last-child > li:last-child' => array(
		'padding-bottom' => 0,
	),
);

if ( '' !== $attr['contentPaddingTablet'] ) {
	$t_selectors[' .uagb-toc__list-wrap ol.uagb-toc__list > li'] = array(
		'padding-top'    => 'calc( ' . UAGB_Helper::get_css_value( $attr['contentPaddingTablet'] . $attr['contentPaddingTypeTablet'] ) . ' / 2 )',
		'padding-bottom' => 'calc( ' . UAGB_Helper::get_css_value( $attr['contentPaddingTablet'] . $attr['contentPaddingTypeTablet'] ) . ' / 2 )',
	);
	$t_selectors[' .uagb-toc__list-wrap ul.uagb-toc__list > li'] = array(
		'padding-top'    => 'calc( ' . UAGB_Helper::get_css_value( $attr['contentPaddingTablet'] . $attr['contentPaddingTypeTablet'] ) . ' / 2 )',
		'padding-bottom' => 'calc( ' . UAGB_Helper::get_css_value( $attr['contentPaddingTablet'] . $attr['contentPaddingTypeTablet'] ) . ' / 2 )',
	);
}

if ( '' !== $attr['contentPaddingMobile'] ) {
	$m_selectors[' .uagb-toc__list-wrap ol.uagb-toc__list > li'] = array(
		'padding-top'    => 'calc( ' . UAGB_Helper::get_css_value( $attr['contentPaddingMobile'] . $attr['contentPaddingTypeMobile'] ) . ' / 2 )',
		'padding-bottom' => 'calc( ' . UAGB_Helper::get_css_value( $attr['contentPaddingMobile'] . $attr['contentPaddingTypeMobile'] ) . ' / 2 )',
	);
	$m_selectors[' .uagb-toc__list-wrap ul.uagb-toc__list > li'] = array(
		'padding-top'    => 'calc( ' . UAGB_Helper::get_css_value( $attr['contentPaddingMobile'] . $attr['contentPaddingTypeMobile'] ) . ' / 2 )',
		'padding-bottom' => 'calc( ' . UAGB_Helper::get_css_value( $attr['contentPaddingMobile'] . $attr['contentPaddingTypeMobile'] ) . ' / 2 )',
	);
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'heading', ' .uagb-toc__title', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, '', ' .uagb-toc__list-wrap ol li a', $combined_selectors );

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-toc-';

$desktop = UAGB_Helper::generate_css( $combined_selectors['desktop'], $base_selector . $id );

$tablet = UAGB_Helper::generate_css( $combined_selectors['tablet'], $base_selector . $id );

$mobile = UAGB_Helper::generate_css( $combined_selectors['mobile'], $base_selector . $id );

if ( '' !== $attr['scrollToTopColor'] ) {
	$desktop .= '.uagb-toc__scroll-top { color: ' . $attr['scrollToTopColor'] . '; }';
}

if ( '' !== $attr['scrollToTopBgColor'] ) {
	$desktop .= '.uagb-toc__scroll-top.uagb-toc__show-scroll { background: ' . $attr['scrollToTopBgColor'] . '; }';
}

$generated_css = array(
	'desktop' => $desktop,
	'tablet'  => $tablet,
	'mobile'  => $mobile,
);

return $generated_css;
