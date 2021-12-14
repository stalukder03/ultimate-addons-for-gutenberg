<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selectors = array(
	'.wp-block-uagb-container-child' => array(
		'width'      => UAGB_Helper::get_css_value( $attr['widthDesktop'], $attr['widthType'] ),
		'min-height' => UAGB_Helper::get_css_value( $attr['minHeightDesktop'], $attr['minHeightType'] ),
	),
);

$t_selectors = array(
	'.wp-block-uagb-container-child' => array(
		'width'      => UAGB_Helper::get_css_value( $attr['widthTablet'], $attr['widthType'] ),
		'min-height' => UAGB_Helper::get_css_value( $attr['minHeightTablet'], $attr['minHeightType'] ),
	),
);

$m_selectors = array(
	'.wp-block-uagb-container-child' => array(
		'width'      => UAGB_Helper::get_css_value( $attr['widthMobile'], $attr['widthType'] ),
		'min-height' => UAGB_Helper::get_css_value( $attr['minHeightMobile'], $attr['minHeightType'] ),
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
