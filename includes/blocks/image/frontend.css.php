<?php

// Add fonts.
UAGB_Block_JS::blocks_advanced_heading_gfont( $attr );

$m_selectors = array();
$t_selectors = array();

$selectors = array(
	' .wp-block-uagb-image img'   => array(
		'width' => (isset($attr['width']) ? $attr['width'] : 'inherit'),
		'height' => (isset($attr['height']) ? $attr['height'] : 'inherit'),
	),
	'.wp-block-uagb-image figcaption' => array(
		'font-family' => $attr['captionFontFamily'],
		'font-style' => $attr['captionFontStyle'],
		'text-decoration' => $attr['captionDecoration'],
		'text-transform' => $attr['captionTransform'],
		'font-weight' => $attr['captionFontWeight'],
		'font-size' => UAGB_Helper::get_css_value( $attr['captionFontSize'], $attr['captionFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['captionLineHeight'], $attr['captionLineHeightType'] ),
		'color' =>  $attr['captionColor'],
		'margin-top' => UAGB_Helper::get_css_value( $attr['captionTopMargin'], $attr['captionMarginUnit'] ),
		'margin-right' => UAGB_Helper::get_css_value( $attr['captionRightMargin'], $attr['captionMarginUnit'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['captionBottomMargin'], $attr['captionMarginUnit'] ),
		'margin-left' => UAGB_Helper::get_css_value( $attr['captionLeftMargin'], $attr['captionMarginUnit'] ),
	),
);



$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
