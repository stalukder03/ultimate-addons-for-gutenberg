<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$bg_obj = array(
	'backgroundType'       => $attr['backgroundType'],
	'backgroundImage'      => $attr['backgroundImage'],
	'backgroundColor'      => $attr['backgroundColor'],
	'gradientValue'        => $attr['gradientValue'],
	'backgroundRepeat'     => $attr['backgroundRepeat'],
	'backgroundPosition'   => $attr['backgroundPosition'],
	'backgroundSize'       => $attr['backgroundSize'],
	'backgroundAttachment' => $attr['backgroundAttachment'],
);

$container_bg_css = UAGB_Block_Helper::uag_get_background_obj( $bg_obj );
$container_css    = array(
	'width'          => UAGB_Helper::get_css_value( $attr['widthDesktop'], $attr['widthType'] ),
	'height'     => UAGB_Helper::get_css_value( $attr['minHeightDesktop'], $attr['minHeightType'] ),
	'border-style'   => $attr['borderStyle'],
	'border-color'   => $attr['borderColor'],
	'border-radius'  => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	'border-width'   => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
	'box-shadow'     =>
			UAGB_Helper::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
			' ' .
			UAGB_Helper::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
			' ' .
			UAGB_Helper::get_css_value( $attr['boxShadowBlur'], 'px' ) .
			' ' .
			UAGB_Helper::get_css_value( $attr['boxShadowSpread'], 'px' ) .
			' ' .
			$attr['boxShadowColor'] .
			' ' .
			$attr['boxShadowPositionCSS'],
	'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingDesktop'], $attr['paddingType'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingDesktop'], $attr['paddingType'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['leftPaddingDesktop'], $attr['paddingType'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingDesktop'], $attr['paddingType'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $attr['topMarginDesktop'], $attr['marginType'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMarginDesktop'], $attr['marginType'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['leftMarginDesktop'], $attr['marginType'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['rightMarginDesktop'], $attr['marginType'] ),
);

$container_css = array_merge( $container_css, $container_bg_css );

$selectors = array(
	'.wp-block-uagb-container-child'       => $container_css,
	'.wp-block-uagb-container-child:hover' => array(
		'border-color' => $attr['borderHoverColor'],
	),
);

$t_selectors = array(
	'.wp-block-uagb-container-child' => array(
		'width'          => UAGB_Helper::get_css_value( $attr['widthTablet'], $attr['widthType'] ),
		'height'     => UAGB_Helper::get_css_value( $attr['minHeightTablet'], $attr['minHeightType'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingTablet'], $attr['paddingType'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingTablet'], $attr['paddingType'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['leftPaddingTablet'], $attr['paddingType'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingTablet'], $attr['paddingType'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['topMarginTablet'], $attr['marginType'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMarginTablet'], $attr['marginType'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['leftMarginTablet'], $attr['marginType'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['rightMarginTablet'], $attr['marginType'] ),
	),
);

$m_selectors = array(
	'.wp-block-uagb-container-child' => array(
		'width'          => UAGB_Helper::get_css_value( $attr['widthMobile'], $attr['widthType'] ),
		'height'     => UAGB_Helper::get_css_value( $attr['minHeightMobile'], $attr['minHeightType'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingMobile'], $attr['paddingType'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingMobile'], $attr['paddingType'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['leftPaddingMobile'], $attr['paddingType'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingMobile'], $attr['paddingType'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['topMarginMobile'], $attr['marginType'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMarginMobile'], $attr['marginType'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['leftMarginMobile'], $attr['marginType'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['rightMarginMobile'], $attr['marginType'] ),
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
