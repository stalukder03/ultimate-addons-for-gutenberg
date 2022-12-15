<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_name = 'separator';

$m_selectors = array();
$t_selectors = array();

$selectors = array(
	'.wp-block-uagb-separator' => array(
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['separatorBottomPadding'], $attr['separatorPaddingUnit'] ),
		'padding-top' => UAGB_Helper::get_css_value( $attr['separatorTopPadding'], $attr['separatorPaddingUnit'] ),
		'padding-left' => UAGB_Helper::get_css_value( $attr['separatorLeftPadding'], $attr['separatorPaddingUnit'] ),
		'padding-right' => UAGB_Helper::get_css_value( $attr['separatorRightPadding'], $attr['separatorPaddingUnit'] ),
		'text-align' => $attr['separatorAlign'],
	),
	'.wp-block-uagb-separator .wp-block-uagb-separator__inner' => array(
		'width' => UAGB_Helper::get_css_value(
			UAGB_Block_Helper::get_fallback_number( $attr['separatorWidth'], 'separatorWidth', $block_name ),
			$attr['separatorWidthType']
		),
		'border-top-width' => UAGB_Helper::get_css_value(
			UAGB_Block_Helper::get_fallback_number( $attr['separatorThickness'], 'separatorThickness', $block_name ),
			$attr['thicknessUnit']
		),
		'border-top-color' => $attr['separatorColor'],
		'border-top-style' => $attr['separatorStyle'],
	)
);

$t_selectors['.wp-block-uagb-separator'] = array(
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['separatorPaddingBottomTablet'], $attr['separatorTabletPaddingUnit'] ),
	'padding-top' => UAGB_Helper::get_css_value( $attr['separatorPaddingTopTablet'], $attr['separatorTabletPaddingUnit'] ),
	'padding-left' => UAGB_Helper::get_css_value( $attr['separatorPaddingLeftTablet'], $attr['separatorTabletPaddingUnit'] ),
	'padding-right' => UAGB_Helper::get_css_value( $attr['separatorPaddingRightTablet'], $attr['separatorTabletPaddingUnit'] ),
	'text-align' => $attr['separatorAlignTablet'],
);

$t_selectors['.wp-block-uagb-separator .wp-block-uagb-separator__inner'] = array(
	'width' => UAGB_Helper::get_css_value(
		UAGB_Block_Helper::get_fallback_number( $attr['separatorWidthTablet'], 'separatorWidthTablet', $block_name ),
		$attr['separatorWidthType']
	),
);

$m_selectors['.wp-block-uagb-separator'] = array(
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['separatorPaddingBottomMobile'], $attr['separatorMobilePaddingUnit'] ),
	'padding-top' => UAGB_Helper::get_css_value( $attr['separatorPaddingTopMobile'], $attr['separatorMobilePaddingUnit'] ),
	'padding-left' => UAGB_Helper::get_css_value( $attr['separatorPaddingLeftMobile'], $attr['separatorMobilePaddingUnit'] ),
	'padding-right' => UAGB_Helper::get_css_value( $attr['separatorPaddingRightMobile'], $attr['separatorMobilePaddingUnit'] ),
	'text-align' => $attr['separatorAlignMobile'],
);

$m_selectors['.wp-block-uagb-separator .wp-block-uagb-separator__inner'] = array(
	'width' => UAGB_Helper::get_css_value(
		UAGB_Block_Helper::get_fallback_number( $attr['separatorWidthMobile'], 'separatorWidthMobile', $block_name ),
		$attr['separatorWidthType']
	),
);


$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
