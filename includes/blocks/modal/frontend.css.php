<?php
/**
 * Frontend CSS loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_name = 'modal';

$selectors   = array(
	'.uagb-modal-wrapper'          => array(
		'text-align' => $attr['modalAlign'],
	),
	' .uagb-modal-popup-wrap'      => array(
		'width'      => UAGB_Helper::get_css_value( $attr['modalWidth'], $attr['modalWidthType'] ),
		'min-height' => UAGB_Helper::get_css_value( $attr['modalHeight'], $attr['modalHeightType'] ),
	),
	' .uagb-modal-popup-close svg' => array(
		'width'       => UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'height'      => UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'line-height' => UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'font-size'   => UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'fill'			=> $attr['closeIconColor']
	),
	' .uagb-modal-popup.active'          => array(
		'background' => $attr['overlayColor'],
	),
	' .uagb-modal-popup-content' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingModalLeft'], $attr['paddingModalUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingModalRight'], $attr['paddingModalUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingModalTop'], $attr['paddingModalUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingModalBottom'], $attr['paddingModalUnit'] ),
	),
	// ' .uagb-modal-popup-content' => array(
	// 	'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeft'], $attr['paddingBtnUnit'] ),
	// 	'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRight'], $attr['paddingBtnUnit'] ),
	// 	'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTop'], $attr['paddingBtnUnit'] ),
	// 	'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottom'], $attr['paddingBtnUnit'] ),
	// ),
	' .uagb-modal-trigger svg' => array(
		'width'       => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
		'height'      => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
		'line-height' => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
		'font-size'   => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
		'fill'			=> $attr['iconColor']
	),
);
$t_selectors = array(
	'.uagb-modal-wrapper'     => array(
		'text-align' => $attr['modalAlignTablet'],
	),
	' .uagb-modal-popup-wrap' => array(
		'width'      => UAGB_Helper::get_css_value( $attr['modalWidthTablet'], $attr['modalWidthType'] ),
		'min-height' => UAGB_Helper::get_css_value( $attr['modalHeightTablet'], $attr['modalHeightType'] ),
	),
	' .uagb-modal-popup-content' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingModalLeftTablet'], $attr['tabletPaddingModalUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingModalRightTablet'], $attr['tabletPaddingModalUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingModalTopTablet'], $attr['tabletPaddingModalUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingModalBottomTablet'], $attr['tabletPaddingModalUnit'] ),
	),
	// ' .uagb-modal-popup-content' => array(
	// 	'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftTablet'], $attr['tabletPaddingBtnUnit'] ),
	// 	'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightTablet'], $attr['tabletPaddingBtnUnit'] ),
	// 	'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopTablet'], $attr['tabletPaddingBtnUnit'] ),
	// 	'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomTablet'], $attr['tabletPaddingBtnUnit'] ),
	// )
);
$m_selectors = array(
	'.uagb-modal-wrapper'     => array(
		'text-align' => $attr['modalAlignMobile'],
	),
	' .uagb-modal-popup-wrap' => array(
		'width'      => UAGB_Helper::get_css_value( $attr['modalWidthMobile'], $attr['modalWidthType'] ),
		'min-height' => UAGB_Helper::get_css_value( $attr['modalHeightMobile'], $attr['modalHeightType'] ),
	),
	' .uagb-modal-popup-content' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingModalLeftMobile'], $attr['mobilePaddingModalUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingModalRightMobile'], $attr['mobilePaddingModalUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingModalTopMobile'], $attr['mobilePaddingModalUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingModalBottomMobile'], $attr['mobilePaddingModalUnit'] ),
	),
	// ' .uagb-modal-popup-content' => array(
	// 	'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftMobile'], $attr['mobilePaddingBtnUnit'] ),
	// 	'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightMobile'], $attr['mobilePaddingBtnUnit'] ),
	// 	'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopMobile'], $attr['mobilePaddingBtnUnit'] ),
	// 	'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomMobile'], $attr['mobilePaddingBtnUnit'] ),
	// )
);

if ( 'popup-top-right' === $attr['closeIconPosition'] ) {
	$selectors[' .uagb-modal-popup.active .uagb-modal-popup-close'] = array(
		'top'   => '-' . UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'right' => '-' . UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
	);
}

if ( 'popup-top-left' === $attr['closeIconPosition'] ) {
	$selectors[' .uagb-modal-popup.active .uagb-modal-popup-close'] = array(
		'top'  => '-' . UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'left' => '-' . UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
	);
}

$buttonIconSpace_fallback      = UAGB_Block_Helper::get_fallback_number( $attr['buttonIconSpace'], 'buttonIconSpace', $block_name );
$attr['buttonIconSpaceTablet'] = is_numeric( $attr['buttonIconSpaceTablet'] ) ? $attr['buttonIconSpaceTablet'] : $buttonIconSpace_fallback;
$attr['buttonIconSpaceMobile'] = is_numeric( $attr['buttonIconSpaceMobile'] ) ? $attr['buttonIconSpaceMobile'] : $attr['buttonIconSpaceTablet'];

if ( 'button' === $attr['modalTrigger'] ) {
	if ( 'after' === $attr['buttonIconPosition'] ) {
		$selectors[' .uagb-modal-button-link svg ']   = array(
			'margin-left' => UAGB_Helper::get_css_value( $buttonIconSpace_fallback, $attr['buttonIconSpaceType'] ),
		);
		$t_selectors[' .uagb-modal-button-link svg '] = array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['buttonIconSpaceTablet'], $attr['buttonIconSpaceType'] ),
		);
		$m_selectors[' .uagb-modal-button-link svg '] = array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['buttonIconSpaceMobile'], $attr['buttonIconSpaceType'] ),
		);
	} else {
		$selectors[' .uagb-modal-button-link svg']   = array(
			'margin-right' => UAGB_Helper::get_css_value( $buttonIconSpace_fallback, $attr['buttonIconSpaceType'] ),
		);
		$t_selectors[' .uagb-modal-button-link svg'] = array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['buttonIconSpaceTablet'], $attr['buttonIconSpaceType'] ),
		);
		$m_selectors[' .uagb-modal-button-link svg'] = array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['buttonIconSpaceMobile'], $attr['buttonIconSpaceType'] ),
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
