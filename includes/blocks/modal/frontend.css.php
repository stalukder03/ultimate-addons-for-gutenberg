<?php
/**
 * Frontend CSS loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_name      = 'modal';
$m_selectors     = array();
$t_selectors     = array();
$selectors       = array();
$is_rtl          = is_rtl();
$btn_icon_size   = UAGB_Helper::get_css_value( $attr['btnFontSize'], $attr['btnFontSizeType'] );
$t_btn_icon_size = UAGB_Helper::get_css_value( $attr['btnFontSizeTablet'], $attr['btnFontSizeType'] );
$m_btn_icon_size = UAGB_Helper::get_css_value( $attr['btnFontSizeMobile'], $attr['btnFontSizeType'] );

$btn_border_css        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn' );
$btn_border_css_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'tablet' );
$btn_border_css_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'mobile' );

$selectors   = array(
	' .uagb-modal-popup-wrap'                    => array(
		'width'            => UAGB_Helper::get_css_value( $attr['modalWidth'], $attr['modalWidthType'] ),
		'height'           => UAGB_Helper::get_css_value( $attr['modalHeight'], $attr['modalHeightType'] ),
		'background-color' => $attr['modalBgColor'],
	),
	' .uagb-modal-popup-close svg'               => array(
		'width'       => UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'height'      => UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'line-height' => UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'font-size'   => UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'fill'        => $attr['closeIconColor'],
	),
	'.uagb-modal-popup.active'                   => array(
		'background' => $attr['overlayColor'],
	),
	'.uagb-modal-popup-content'                  => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingModalLeft'], $attr['paddingModalUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingModalRight'], $attr['paddingModalUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingModalTop'], $attr['paddingModalUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingModalBottom'], $attr['paddingModalUnit'] ),
	),
	'.uagb-modal-wrapper .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger' => array(
		'padding-left'     => UAGB_Helper::get_css_value( $attr['paddingBtnLeft'], $attr['paddingBtnUnit'] ),
		'padding-right'    => UAGB_Helper::get_css_value( $attr['paddingBtnRight'], $attr['paddingBtnUnit'] ),
		'padding-top'      => UAGB_Helper::get_css_value( $attr['paddingBtnTop'], $attr['paddingBtnUnit'] ),
		'padding-bottom'   => UAGB_Helper::get_css_value( $attr['paddingBtnBottom'], $attr['paddingBtnUnit'] ),
		'color'            => $attr['btnLinkColor'],
		'background-color' => $attr['btnBgColor'],
	),
	' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger:hover' => array(
		'color'            => $attr['btnLinkHoverColor'] ? $attr['btnLinkHoverColor'] : $attr['btnLinkColor'],
		'background-color' => $attr['btnBgHoverColor'],
		'border-color'     => $attr['btnBorderHColor'],
	),
	' .uagb-modal-trigger svg'                   => array(
		'width'       => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
		'height'      => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
		'line-height' => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
		'font-size'   => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
		'fill'        => $attr['iconColor'],
	),
	' .uagb-modal-text.uagb-modal-trigger'       => array(
		'color' => $attr['textColor'],
	),
	'.uagb-modal-wrapper img.uagb-modal-trigger' => array(
		'border-radius' => UAGB_Helper::get_css_value( $attr['iconimgBorderRadius'], $attr['iconimgBorderRadiusUnit'] ),
	),
	' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger svg' => array(
		'width'       => $btn_icon_size,
		'height'      => $btn_icon_size,
		'line-height' => $btn_icon_size,
		'font-size'   => $btn_icon_size,
		'fill'        => $attr['btnLinkColor'],
	),
	' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger:hover svg' => array(
		'fill' => $attr['btnLinkHoverColor'],
	),
);
$t_selectors = array(
	' .uagb-modal-popup-wrap'   => array(
		'width'  => UAGB_Helper::get_css_value( $attr['modalWidthTablet'], $attr['modalWidthType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['modalHeightTablet'], $attr['modalHeightType'] ),
	),
	'.uagb-modal-popup-content' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingModalLeftTablet'], $attr['tabletPaddingModalUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingModalRightTablet'], $attr['tabletPaddingModalUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingModalTopTablet'], $attr['tabletPaddingModalUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingModalBottomTablet'], $attr['tabletPaddingModalUnit'] ),
	),
	'.uagb-modal-wrapper .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftTablet'], $attr['tabletPaddingBtnUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightTablet'], $attr['tabletPaddingBtnUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopTablet'], $attr['tabletPaddingBtnUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomTablet'], $attr['tabletPaddingBtnUnit'] ),
	),
	' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger svg' => array(
		'width'       => $t_btn_icon_size,
		'height'      => $t_btn_icon_size,
		'line-height' => $t_btn_icon_size,
		'font-size'   => $t_btn_icon_size,
	),
);
$m_selectors = array(
	' .uagb-modal-popup-wrap'   => array(
		'width'  => UAGB_Helper::get_css_value( $attr['modalWidthMobile'], $attr['modalWidthType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['modalHeightMobile'], $attr['modalHeightType'] ),
	),
	'.uagb-modal-popup-content' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingModalLeftMobile'], $attr['mobilePaddingModalUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingModalRightMobile'], $attr['mobilePaddingModalUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingModalTopMobile'], $attr['mobilePaddingModalUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingModalBottomMobile'], $attr['mobilePaddingModalUnit'] ),
	),
	'.uagb-modal-wrapper .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftMobile'], $attr['mobilePaddingBtnUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightMobile'], $attr['mobilePaddingBtnUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopMobile'], $attr['mobilePaddingBtnUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomMobile'], $attr['mobilePaddingBtnUnit'] ),
	),
	' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger svg' => array(
		'width'       => $m_btn_icon_size,
		'height'      => $m_btn_icon_size,
		'line-height' => $m_btn_icon_size,
		'font-size'   => $m_btn_icon_size,
	),
);

if ( 'popup-top-right' === $attr['closeIconPosition'] ) {
	$selectors['.uagb-modal-popup.active .uagb-modal-popup-close'] = array(
		'top'   => '-' . UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'right' => '-' . UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
	);
}

if ( 'popup-top-left' === $attr['closeIconPosition'] ) {
	$selectors['.uagb-modal-popup.active .uagb-modal-popup-close'] = array(
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

if ( $is_rtl ) {
	if ( 'button' === $attr['modalTrigger'] ) {
		if ( 'after' === $attr['buttonIconPosition'] ) {
			$selectors[' .uagb-modal-button-link svg ']   = array(
				'margin-right' => UAGB_Helper::get_css_value( $buttonIconSpace_fallback, $attr['buttonIconSpaceType'] ),
			);
			$t_selectors[' .uagb-modal-button-link svg '] = array(
				'margin-right' => UAGB_Helper::get_css_value( $attr['buttonIconSpaceTablet'], $attr['buttonIconSpaceType'] ),
			);
			$m_selectors[' .uagb-modal-button-link svg '] = array(
				'margin-right' => UAGB_Helper::get_css_value( $attr['buttonIconSpaceMobile'], $attr['buttonIconSpaceType'] ),
			);
		} else {
			$selectors[' .uagb-modal-button-link svg']   = array(
				'margin-left' => UAGB_Helper::get_css_value( $buttonIconSpace_fallback, $attr['buttonIconSpaceType'] ),
			);
			$t_selectors[' .uagb-modal-button-link svg'] = array(
				'margin-left' => UAGB_Helper::get_css_value( $attr['buttonIconSpaceTablet'], $attr['buttonIconSpaceType'] ),
			);
			$m_selectors[' .uagb-modal-button-link svg'] = array(
				'margin-left' => UAGB_Helper::get_css_value( $attr['buttonIconSpaceMobile'], $attr['buttonIconSpaceType'] ),
			);
		}
	}
}

if ( 'image' === $attr['modalTrigger'] && $attr['imageWidthType'] ) {
	// Image.
	$selectors[' img.uagb-modal-trigger']   = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidth'], $attr['imageWidthUnit'] ),
	);
	$t_selectors[' img.uagb-modal-trigger'] = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthUnitTablet'] ),
	);
	$m_selectors[' img.uagb-modal-trigger'] = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthUnitMobile'] ),
	);

}

$selectors[' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger']   = $btn_border_css;
$t_selectors[' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger'] = $btn_border_css_tablet;
$m_selectors[' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger'] = $btn_border_css_mobile;

if ( 'full' !== $attr['modalAlign'] ) {
	$selectors['.uagb-modal-wrapper']     = array(
		'text-align' => $attr['modalAlign'],
	);
	$selectors[' .wp-block-button__link'] = array(
		'width' => 'unset',
	);
} else {
	$selectors[' .wp-block-button__link'] = array(
		'width'           => '100%',
		'justify-content' => 'center',
	);
}

if ( 'full' !== $attr['modalAlignMobile'] ) {
	$m_selectors['.uagb-modal-wrapper']     = array(
		'text-align' => $attr['modalAlignMobile'],
	);
	$m_selectors[' .wp-block-button__link'] = array(
		'width' => 'unset',
	);
} else {
	$m_selectors[' .wp-block-button__link'] = array(
		'width'           => '100%',
		'justify-content' => 'center',
	);
}

if ( 'full' !== $attr['modalAlignTablet'] ) {
	$t_selectors['.uagb-modal-wrapper'] = array(
		'text-align' => $attr['modalAlignTablet'],
	);
} else {
	$t_selectors[' .wp-block-button__link'] = array(
		'width'           => '100%',
		'justify-content' => 'center',
	);
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'text', ' .uagb-modal-text.uagb-modal-trigger', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'btn', ' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger', $combined_selectors );

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
