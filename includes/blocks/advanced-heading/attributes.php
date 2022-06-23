<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$highLight_border_attribute = UAGB_Block_Helper::uag_generate_border_attribute( 'highLight' );
return array_merge(
	$highLight_border_attribute,
	array(
		'classMigrate'                 => false,
		'blockBackground'              => '',
		'blockBackgroundType'          => 'classic',
		'blockGradientBackground'      => 'linear-gradient(90deg, rgb(6, 147, 227) 0%, rgb(155, 81, 224) 100%)',
		'headingAlign'                 => 'left',
		'headingAlignTablet'           => '',
		'headingAlignMobile'           => '',
		'headingColor'                 => '',
		'headingColorType'             => 'classic',
		'headingGradientColor'         => 'linear-gradient(90deg, rgb(155, 81, 224) 0%, rgb(6, 147, 227) 100%)',
		'subHeadingColor'              => '',
		'separatorHeightType'          => 'px',
		'separatorSpaceType'           => 'px',
		'separatorColor'               => '#0170b9',
		'seperatorStyle'               => 'solid',
		'separatorHeight'              => 2,
		'separatorWidth'               => 12,
		'separatorWidthTablet'         => '',
		'separatorWidthMobile'         => '',
		'separatorWidthType'           => '%',
		'headFontFamily'               => '',
		'headLoadGoogleFonts'          => false,
		'headFontWeight'               => '',
		'headFontStyle'                => '',
		'headFontSize'                 => '',
		'headFontSizeType'             => 'px',
		'headFontSizeTablet'           => '',
		'headFontSizeMobile'           => '',
		'headSpaceType'                => 'px',
		'headLineHeight'               => '',
		'headLineHeightType'           => 'em',
		'headLineHeightTablet'         => '',
		'headLineHeightMobile'         => '',
		'headLetterSpacing'            => '',
		'headLetterSpacingTablet'      => '',
		'headLetterSpacingMobile'      => '',
		'headLetterSpacingType'        => 'px',
		'headShadowColor'              => '',
		'headShadowHOffset'            => 0,
		'headShadowVOffset'            => 0,
		'headShadowBlur'               => 10,
		'subHeadFontFamily'            => '',
		'subHeadLoadGoogleFonts'       => false,
		'subHeadFontWeight'            => '',
		'subHeadFontStyle'             => '',
		'subHeadFontSize'              => '',
		'subHeadFontSizeType'          => 'px',
		'subHeadFontSizeTablet'        => '',
		'subHeadFontSizeMobile'        => '',
		'subHeadLineHeight'            => '',
		'subHeadLineHeightType'        => 'em',
		'subHeadLineHeightTablet'      => '',
		'subHeadLineHeightMobile'      => '',
		'subHeadLetterSpacing'         => '',
		'subHeadLetterSpacingTablet'   => '',
		'subHeadLetterSpacingMobile'   => '',
		'subHeadLetterSpacingType'     => 'px',
		'headSpace'                    => 15,
		'headSpaceTablet'              => 15,
		'headSpaceMobile'              => 15,
		'separatorSpace'               => 15,
		'separatorSpaceTablet'         => '',
		'separatorSpaceMobile'         => '',
		'separatorHoverColor'          => '',
		'headTransform'                => '',
		'headDecoration'               => '',
		'subHeadTransform'             => '',
		'subHeadDecoration'            => '',
		// padding.
		'blockTopPadding'              => '',
		'blockRightPadding'            => '',
		'blockLeftPadding'             => '',
		'blockBottomPadding'           => '',
		'blockTopPaddingTablet'        => '',
		'blockRightPaddingTablet'      => '',
		'blockLeftPaddingTablet'       => '',
		'blockBottomPaddingTablet'     => '',
		'blockTopPaddingMobile'        => '',
		'blockRightPaddingMobile'      => '',
		'blockLeftPaddingMobile'       => '',
		'blockBottomPaddingMobile'     => '',
		'blockPaddingUnit'             => 'px',
		'blockPaddingUnitTablet'       => 'px',
		'blockPaddingUnitMobile'       => 'px',
		'blockPaddingLink'             => '',
		// margin.
		'blockTopMargin'               => '',
		'blockRightMargin'             => '',
		'blockLeftMargin'              => '',
		'blockBottomMargin'            => '',
		'blockTopMarginTablet'         => '',
		'blockRightMarginTablet'       => '',
		'blockLeftMarginTablet'        => '',
		'blockBottomMarginTablet'      => '',
		'blockTopMarginMobile'         => '',
		'blockRightMarginMobile'       => '',
		'blockLeftMarginMobile'        => '',
		'blockBottomMarginMobile'      => '',
		'blockMarginUnit'              => 'px',
		'blockMarginUnitTablet'        => 'px',
		'blockMarginUnitMobile'        => 'px',
		'blockMarginLink'              => '',
		// link.
		'linkColor'                    => '#6104ff',
		'linkHColor'                   => '',
		// Highlight.
		'highLightColor'               => '#fff',
		'highLightBackground'          => '#6104ff',
		'highLightLoadGoogleFonts'     => false,
		'highLightFontFamily'          => 'Default',
		'highLightFontWeight'          => '',
		'highLightFontStyle'           => 'normal',
		'highLightTransform'           => '',
		'highLightDecoration'          => '',
		'highLightFontSizeType'        => 'px',
		'highLightLineHeightType'      => 'em',
		'highLightFontSize'            => '',
		'highLightFontSizeTablet'      => '',
		'highLightFontSizeMobile'      => '',
		'highLightLineHeight'          => '',
		'highLightLineHeightTablet'    => '',
		'highLightLineHeightMobile'    => '',
		'highLightLetterSpacing'       => '',
		'highLightLetterSpacingTablet' => '',
		'highLightLetterSpacingMobile' => '',
		'highLightLetterSpacingType'   => 'px',
		'highLightTopPadding'          => '',
		'highLightRightPadding'        => '',
		'highLightLeftPadding'         => '',
		'highLightBottomPadding'       => '',
		'highLightTopPaddingTablet'    => '',
		'highLightRightPaddingTablet'  => '',
		'highLightLeftPaddingTablet'   => '',
		'highLightBottomPaddingTablet' => '',
		'highLightTopPaddingMobile'    => '',
		'highLightRightPaddingMobile'  => '',
		'highLightLeftPaddingMobile'   => '',
		'highLightBottomPaddingMobile' => '',
		'highLightPaddingUnit'         => 'px',
		'highLightPaddingUnitTablet'   => 'px',
		'highLightPaddingUnitMobile'   => 'px',
		'highLightPaddingLink'         => '',
	)
);
