<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Add fonts.
UAGB_Block_JS::blocks_star_rating_gfont( $attr );

$t_selectors = array();
$m_selectors = array();
$selectors   = array();

$alignment       = 'flex-start';
$stack_alignment = $attr['align'];
if ( '' !== $attr['align'] ) {
	if ( 'right' === $attr['align'] ) {
		$alignment = 'flex-end';
	}
	if ( 'center' === $attr['align'] ) {
		$alignment = 'center';
	}
	if ( 'full' === $attr['align'] ) {
		$alignment       = 'space-between';
		$stack_alignment = 'left';
	}
}

$wrapperCSS = array(
	'margin-top'     => UAGB_Helper::get_css_value(
		$attr['blockTopMargin'],
		$attr['blockMarginUnit']
	),
	'margin-right'   => UAGB_Helper::get_css_value(
		$attr['blockRightMargin'],
		$attr['blockMarginUnit']
	),
	'margin-bottom'  => UAGB_Helper::get_css_value(
		$attr['blockBottomMargin'],
		$attr['blockMarginUnit']
	),
	'margin-left'    => UAGB_Helper::get_css_value(
		$attr['blockLeftMargin'],
		$attr['blockMarginUnit']
	),
	'padding-top'    => UAGB_Helper::get_css_value(
		$attr['blockTopPadding'],
		$attr['blockPaddingUnit']
	),
	'padding-right'  => UAGB_Helper::get_css_value(
		$attr['blockRightPadding'],
		$attr['blockPaddingUnit']
	),
	'padding-bottom' => UAGB_Helper::get_css_value(
		$attr['blockBottomPadding'],
		$attr['blockPaddingUnit']
	),
	'padding-left'   => UAGB_Helper::get_css_value(
		$attr['blockLeftPadding'],
		$attr['blockPaddingUnit']
	),
);

$selectors = array(
	' .uag-star-rating'        => array(
		'font-size' => UAGB_Helper::get_css_value( $attr['size'], 'px' ),
	),
	' .uag-star-rating > span' => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
		'color'        => $attr['unmarkedColor'],
	),
	' .uag-star:nth-child(-n+' . floor( $attr['rating'] ) . ')' => array(
		'color' => $attr['color'],
	),
	' .uag-star-rating__title' => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['fontSize'], $attr['fontSizeType'] ),
		'font-family' => $attr['fontFamily'],
		'font-weight' => $attr['fontWeight'],
		'line-height' => UAGB_Helper::get_css_value( $attr['lineHeight'], $attr['lineHeightType'] ),
		'color'       => $attr['titleColor'],
	),
);

$index = 'margin-right';
if ( 'stack' === $attr['layout'] ) {
	$index                                    = 'margin-bottom';
	$selectors['.wp-block-uagb-star-rating '] = array_merge(
		array(
			'display'    => 'block',
			'text-align' => $stack_alignment,
		),
		$wrapperCSS
	);

	// Since title text is set to flex, we need this property that aligns flex objects.
	$selectors[' .uag-star-rating__title '] = array(
		'justify-content' => UAGB_Block_Helper::text_alignment_to_flex( $stack_alignment ),
	);
	$selectors[' div.uag-star-rating ']     = array(
		'justify-content' => UAGB_Block_Helper::text_alignment_to_flex( $stack_alignment ),
	);
} else {
	$index                                    = 'margin-right';
	$selectors['.wp-block-uagb-star-rating '] = array_merge(
		array(
			'display'         => 'flex',
			'justify-content' => $alignment,
		),
		$wrapperCSS
	);
}


$wrapperCSSTablet = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMarginTablet'], $attr['blockMarginUnitTablet'] ),
);

$index_tablet = 'margin-right';
if ( 'stack' === $attr['layoutTablet'] ) {
	$index_tablet                               = 'margin-bottom';
	$t_selectors['.wp-block-uagb-star-rating '] = array_merge(
		array(
			'display'    => 'block',
			'text-align' => $stack_alignment,
		),
		$wrapperCSSTablet
	);

	// Keeping this here, in case responsive alignment is added in the future.
	// Since title text is set to flex, we need this property that aligns flex objects.
	$t_selectors[' .uag-star-rating__title '] = array(
		'justify-content' => UAGB_Block_Helper::text_alignment_to_flex( $stack_alignment ),
		'margin-right'    => 0,
	);
	$t_selectors[' div.uag-star-rating ']     = array(
		'justify-content' => UAGB_Block_Helper::text_alignment_to_flex( $stack_alignment ),
	);
} else {
	$index_tablet                               = 'margin-right';
	$t_selectors['.wp-block-uagb-star-rating '] = array_merge(
		array(
			'display'         => 'flex',
			'justify-content' => $alignment,
		),
		$wrapperCSSTablet
	);
	$t_selectors[' .uag-star-rating__title ']   = array(
		'margin-bottom' => 0,
	);
}

$wrapperCSSMobile = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMarginMobile'], $attr['blockMarginUnitMobile'] ),
);

$index_mobile = 'margin-right';
if ( 'stack' === $attr['layoutMobile'] ) {
	$index_mobile                               = 'margin-bottom';
	$m_selectors['.wp-block-uagb-star-rating '] = array_merge(
		array(
			'display'    => 'block',
			'text-align' => $stack_alignment,
		),
		$wrapperCSSMobile
	);

	// Keeping this here, in case responsive alignment is added in the future.
	// Since title text is set to flex, we need this property that aligns flex objects.
	$m_selectors[' .uag-star-rating__title '] = array(
		'justify-content' => UAGB_Block_Helper::text_alignment_to_flex( $stack_alignment ),
		'margin-right'    => 0,
	);
	$m_selectors[' div.uag-star-rating ']     = array(
		'justify-content' => UAGB_Block_Helper::text_alignment_to_flex( $stack_alignment ),
	);
} else {
	$index_mobile                               = 'margin-right';
	$m_selectors['.wp-block-uagb-star-rating '] = array_merge(
		array(
			'display'         => 'flex',
			'justify-content' => $alignment,
		),
		$wrapperCSSMobile
	);
	$m_selectors[' .uag-star-rating__title ']   = array(
		'margin-bottom' => 0,
	);
}

$selectors[' .uag-star-rating__title'][ $index ]          = UAGB_Helper::get_css_value( $attr['titleGap'], 'px' );
$t_selectors[' .uag-star-rating__title'][ $index_tablet ] = UAGB_Helper::get_css_value( $attr['titleGapTablet'], 'px' );
$m_selectors[' .uag-star-rating__title'][ $index_mobile ] = UAGB_Helper::get_css_value( $attr['titleGapMobile'], 'px' );
$t_selectors[' .uag-star-rating']                         = array(
	'font-size' => UAGB_Helper::get_css_value( $attr['sizeTablet'], 'px' ),
);
$t_selectors[' .uag-star-rating > span']                  = array(
	'margin-right' => UAGB_Helper::get_css_value( $attr['gapTablet'], 'px' ),
);
$m_selectors[' .uag-star-rating']                         = array(
	'font-size' => UAGB_Helper::get_css_value( $attr['sizeMobile'], 'px' ),
);
$m_selectors[' .uag-star-rating > span']                  = array(
	'margin-right' => UAGB_Helper::get_css_value( $attr['gapMobile'], 'px' ),
);

$remainder = ( $attr['rating'] - floor( $attr['rating'] ) );
$width     = $remainder * 100;

if ( 0 !== $width ) {
	$selectors[ ' .uag-star:nth-child(' . ceil( $attr['rating'] ) . '):before' ] = array(
		'color'    => $attr['color'],
		'width'    => UAGB_Helper::get_css_value( $width, '%' ),
		'position' => 'absolute',
		'content'  => "'★'",
		'overflow' => 'hidden',
	);
	$selectors[ ' .uag-star:nth-child(' . ceil( $attr['rating'] ) . ')' ]        = array(
		'position' => 'relative',
	);
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, '', ' .uag-star-rating__title', $combined_selectors );


return UAGB_Helper::generate_all_css( $combined_selectors, ' .uagb-block-' . substr( $attr['block_id'], 0, 8 ) );
