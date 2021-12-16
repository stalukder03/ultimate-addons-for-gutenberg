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
	'width'           => UAGB_Helper::get_css_value( $attr['widthDesktop'], $attr['widthType'] ),
	'min-height'      => UAGB_Helper::get_css_value( $attr['minHeightDesktop'], $attr['minHeightType'] ),
	'flex-direction'  => $attr['directionDesktop'],
	'align-items'     => $attr['alignItemsDesktop'],
	'justify-content' => $attr['justifyContentDesktop'],
	'flex-wrap'       => $attr['wrapDesktop'],
	'align-content'   => $attr['alignContentDesktop'],
	'border-style'    => $attr['borderStyle'],
	'border-color'    => $attr['borderColor'],
	'border-radius'   => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	'border-width'    => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
	'box-shadow'      =>
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
);

$container_css = array_merge( $container_css, $container_bg_css );

$selectors = array(
	'.wp-block-uagb-container' => $container_css,
);
$selectors = array(
	'.wp-block-uagb-container'       => $container_css,
	'.wp-block-uagb-container:hover' => array(
		'border-color' => $attr['borderHoverColor'],
	),
);

$t_selectors = array(
	'.wp-block-uagb-container' => array(
		'width'           => UAGB_Helper::get_css_value( $attr['widthTablet'], $attr['widthType'] ),
		'min-height'      => UAGB_Helper::get_css_value( $attr['minHeightTablet'], $attr['minHeightType'] ),
		'flex-direction'  => $attr['directionTablet'],
		'align-items'     => $attr['alignItemsTablet'],
		'justify-content' => $attr['justifyContentTablet'],
		'flex-wrap'       => $attr['wrapTablet'],
		'align-content'   => $attr['alignContentTablet'],
	),
);

$m_selectors = array(
	'.wp-block-uagb-container' => array(
		'width'           => UAGB_Helper::get_css_value( $attr['widthMobile'], $attr['widthType'] ),
		'min-height'      => UAGB_Helper::get_css_value( $attr['minHeightMobile'], $attr['minHeightType'] ),
		'flex-direction'  => $attr['directionMobile'],
		'align-items'     => $attr['alignItemsMobile'],
		'justify-content' => $attr['justifyContentMobile'],
		'flex-wrap'       => $attr['wrapMobile'],
		'align-content'   => $attr['alignContentMobile'],
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
