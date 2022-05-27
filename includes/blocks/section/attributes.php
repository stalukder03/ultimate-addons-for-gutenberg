<?php
/**
 * Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$overallBorderAttributes = UAGB_Block_Helper::uag_generate_border_attribute(
	'overall',
	array(
		'borderTopWidth'    => 1,
		'borderRightWidth'  => 1,
		'borderLeftWidth'   => 1,
		'borderBottomWidth' => 1,
	)
);


return array_merge(
	array(
		'classMigrate'             => false,
		'topPadding'               => '20',
		'bottomPadding'            => '20',
		'leftPadding'              => '20',
		'rightPadding'             => '20',
		'topMargin'                => '0',
		'bottomMargin'             => '0',
		'leftMargin'               => '0',
		'rightMargin'              => '0',
		'topPaddingTablet'         => '',
		'bottomPaddingTablet'      => '',
		'leftPaddingTablet'        => '',
		'rightPaddingTablet'       => '',
		'topPaddingMobile'         => '',
		'bottomPaddingMobile'      => '',
		'leftPaddingMobile'        => '',
		'rightPaddingMobile'       => '',
		'topMarginMobile'          => '',
		'bottomMarginMobile'       => '',
		'leftMarginMobile'         => '',
		'rightMarginMobile'        => '',
		'topMarginTablet'          => '',
		'bottomMarginTablet'       => '',
		'leftMarginTablet'         => '',
		'rightMarginTablet'        => '',
		'contentWidth'             => 'boxed',
		'width'                    => '900',
		'innerWidth'               => '1140',
		'innerWidthType'           => 'px',
		'tag'                      => 'section',
		'backgroundType'           => 'none',
		'gradientColor1'           => '',
		'gradientColor2'           => '',
		'backgroundVideoColor'     => '',
		'backgroundPosition'       => 'center-center',
		'backgroundSize'           => 'cover',
		'backgroundRepeat'         => 'no-repeat',
		'backgroundAttachment'     => 'scroll',
		'gradientType'             => 'linear',
		'gradientLocation1'        => '0',
		'gradientLocation2'        => '100',
		'gradientAngle'            => '0',
		'gradientPosition'         => 'center center',
		'backgroundColor'          => '',
		'backgroundVideoOpacity'   => '50',
		'backgroundImageColor'     => '',
		'align'                    => 'center',
		'borderHoverColor'         => '',
		'themeWidth'               => false,
		'mobileMarginType'         => 'px',
		'tabletMarginType'         => 'px',
		'desktopMarginType'        => 'px',
		'mobilePaddingType'        => 'px',
		'tabletPaddingType'        => 'px',
		'desktopPaddingType'       => 'px',
		'overlayType'              => 'color',
		'gradientOverlayColor1'    => '',
		'gradientOverlayColor2'    => '',
		'gradientOverlayType'      => 'linear',
		'gradientOverlayLocation1' => '0',
		'gradientOverlayLocation2' => '100',
		'gradientOverlayAngle'     => '0',
		'gradientOverlayPosition'  => 'center center',
		'boxShadowColor'           => '',
		'boxShadowHOffset'         => 0,
		'boxShadowVOffset'         => 0,
		'boxShadowBlur'            => '',
		'boxShadowSpread'          => '',
		'boxShadowPosition'        => 'outset',
		'gradientValue'            => '',
	),
	$overallBorderAttributes
);
