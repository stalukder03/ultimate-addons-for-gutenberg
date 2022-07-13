<?php
/**
 * Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */
$border_defaults  = array(
	'borderColor'             => '#000',
	'borderStyle'             => 'none',
);
$border_attribute = UAGB_Block_Helper::uag_generate_border_attribute( 'btn', $border_defaults );

return array_merge(
	array(
		'inheritFromTheme'       => false,
		'block_id'               => '',
		'label'                  => '#Click Here',
		'link'                   => '',
		'opensInNewTab'          => false,
		'target'                 => '',
		'size'                   => '',
		'vPadding'               => '',
		'hPadding'               => '',
		'topTabletPadding'       => '',
		'rightTabletPadding'     => '',
		'bottomTabletPadding'    => '',
		'leftTabletPadding'      => '',
		'topMobilePadding'       => '',
		'rightMobilePadding'     => '',
		'bottomMobilePadding'    => '',
		'leftMobilePadding'      => '',
		'paddingUnit'            => 'px',
		'mobilePaddingUnit'      => 'px',
		'tabletPaddingUnit'      => 'px',
		'paddingLink'            => '',
		'color'                  => '',
		'background'             => '',
		'hColor'                 => '',
		'hBackground'            => '',
		'sizeType'               => 'px',
		'sizeMobile'             => '',
		'sizeTablet'             => '',
		'lineHeight'             => '',
		'lineHeightType'         => 'em',
		'lineHeightMobile'       => '',
		'lineHeightTablet'       => '',
		'icon'                   => '',
		'iconPosition'           => 'after',
		'iconSpace'              => 8,
		'iconSpaceTablet'        => '',
		'iconSpaceMobile'        => '',
		'iconSize'               => 15,
		'iconSizeTablet'         => '',
		'iconSizeMobile'         => '',
		'LoadGoogleFonts'        => '',
		'noFollow'               => false,
		'fontFamily'             => '',
		'fontWeight'             => '',
		'fontStyle'              => '',
		'transform'              => '',
		'decoration'             => '',
		'backgroundType'         => 'color',
		'hoverbackgroundType'    => 'color',
		'topMargin'              => '',
		'rightMargin'            => '',
		'bottomMargin'           => '',
		'leftMargin'             => '',
		'topMarginTablet'        => '',
		'rightMarginTablet'      => '',
		'bottomMarginTablet'     => '',
		'leftMarginTablet'       => '',
		'topMarginMobile'        => '',
		'rightMarginMobile'      => '',
		'bottomMarginMobile'     => '',
		'leftMarginMobile'       => '',
		'marginType'             => 'px',
		'marginLink'             => '',
		'boxShadowColor'         => '#000',
		'boxShadowHOffset'       => 0,
		'boxShadowVOffset'       => 0,
		'boxShadowBlur'          => '',
		'boxShadowSpread'        => '',
		'boxShadowPosition'      => 'outset',
		'iconColor'              => '',
		'iconHColor'             => '',
		'buttonSize'             => '',
		'removeText'             => false,
		'gradientValue'          => '',
		'hovergradientValue'     => '',
		'backgroundOpacity'      => '',
		'backgroundHoverOpacity' => '',
		// letter spacing.
		'letterSpacing'          => '',
		'letterSpacingTablet'    => '',
		'letterSpacingMobile'    => '',
		'letterSpacingType'      => 'px',
	),
	$border_attribute
);
