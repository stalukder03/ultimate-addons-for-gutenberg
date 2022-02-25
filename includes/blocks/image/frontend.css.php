<?php

// Add fonts.
UAGB_Block_JS::blocks_advanced_heading_gfont( $attr );

$m_selectors = array();
$t_selectors = array();

$selectors = array(
	'.wp-block-uagb-image img'   => array(
		'width' => (isset($attr['width']) ? $attr['width'] : 'inherit'),
		'height' => (isset($attr['height']) ? $attr['height'] : 'inherit'),
		'border-style' => $attr['imageBorderStyle'],
		'border-color' => $attr['imageBorderColor'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['imageBorderRadius'], 'px' ),
		'border-width' => UAGB_Helper::get_css_value( $attr['imageBorderWidth'], 'px' ),
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
	' .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator' => array(
		'width' => UAGB_Helper::get_css_value( $attr['seperatorWidth'], $attr['separatorWidthType'] ),
		'border-top-width' => UAGB_Helper::get_css_value( $attr['seperatorThickness'], $attr['seperatorThicknessUnit'] ),
		'border-top-color' => $attr['seperatorColor'],
		'border-top-style' => $attr['seperatorStyle'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['seperatorBottomMargin'], $attr['seperatorMarginUnit'] ),
		'margin-top' => UAGB_Helper::get_css_value( $attr['seperatorTopMargin'], $attr['seperatorMarginUnit'] ),
		'margin-left' => UAGB_Helper::get_css_value( $attr['seperatorLeftMargin'], $attr['seperatorMarginUnit'] ),
		'margin-right' => UAGB_Helper::get_css_value( $attr['seperatorRightMargin'], $attr['seperatorMarginUnit'] ),
	)
);


if($attr['maskShape'] !== 'none'){
	$imagePath = UAGB_URL . 'assets/images/masks/' . $attr['maskShape']  . '.svg';
	if($attr['maskShape'] === 'custom'){
		$imagePath = $attr['maskCustomShape']['url'];
	}
	if(!empty($imagePath)){
		$selectors['.wp-block-uagb-image img'] = array(
			'mask-image' =>  'url('.$imagePath.')',
			'-webkit-mask-image' => 'url('.$imagePath.')',
			'mask-size' => $attr['maskSize'],
			'-webkit-mask-size' => $attr['maskSize'],
			'mask-repeat' => $attr['maskRepeat'],
			'-webkit-mask-repeat' => $attr['maskRepeat'],
			'mask-position' => $attr['maskPosition'],
			'-webkit-mask-position' => $attr['maskPosition']
		);
	}
}



$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
