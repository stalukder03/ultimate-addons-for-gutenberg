<?php
/**
 * Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$border_attribute = UAGB_Block_Helper::uag_generate_border_attribute(
	'overall',
	array(
		'borderStyle'             => 'solid',
		'borderTopWidth'          => 1,
		'borderRightWidth'        => 1,
		'borderBottomWidth'       => 1,
		'borderLeftWidth'         => 1,
		'borderTopLeftRadius'     => 6,
		'borderTopRightRadius'    => 6,
		'borderBottomLeftRadius'  => 6,
		'borderBottomRightRadius' => 6,
	)
);

return array_merge(
	array(
		'classMigrate'               => false,
		'headingAlign'               => 'center',
		'headingAlignTablet'         => 'center',
		'headingAlignMobile'         => 'center',
		'companyColor'               => '#888888',
		'descColor'                  => '#333',
		'authorColor'                => '#333',
		'nameFontSizeType'           => 'px',
		'nameFontSize'               => 20,
		'nameFontSizeTablet'         => '',
		'nameFontSizeMobile'         => '',
		'nameFontFamily'             => '',
		'nameFontWeight'             => '500',
		'nameFontStyle'              => '',
		'nameLineHeightType'         => 'em',
		'nameLineHeight'             => 2,
		'nameLineHeightTablet'       => '',
		'nameLineHeightMobile'       => '',
		'nameLoadGoogleFonts'        => false,
		'companyFontSizeType'        => 'px',
		'companyFontSize'            => '',
		'companyFontSizeTablet'      => '',
		'companyFontSizeMobile'      => '',
		'companyFontFamily'          => '',
		'companyFontWeight'          => '',
		'companyFontStyle'           => 'normal',
		'companyLineHeightType'      => 'em',
		'companyLineHeight'          => '',
		'companyLineHeightTablet'    => '',
		'companyLineHeightMobile'    => '',
		'companyLoadGoogleFonts'     => false,
		'descFontSizeType'           => 'px',
		'descFontSize'               => 18,
		'descFontSizeTablet'         => '',
		'descFontSizeMobile'         => '',
		'descFontFamily'             => '',
		'descFontWeight'             => '400',
		'descFontStyle'              => '',
		'descLineHeightType'         => 'em',
		'descLineHeight'             => 1.6,
		'descLineHeightTablet'       => '',
		'descLineHeightMobile'       => '',
		'descLoadGoogleFonts'        => false,
		'descSpace'                  => 20,
		'descSpaceTablet'            => '',
		'descSpaceMobile'            => '',
		'block_id'                   => '',
		'nameSpace'                  => 5,
		'nameSpaceMobile'            => '',
		'nameSpaceTablet'            => '',
		'imgVrPadding'               => 10,
		'imgHrPadding'               => 10,
		'imageWidth'                 => 60,
		'imageWidthTablet'           => '',
		'imageWidthMobile'           => '',
		'rowGap'                     => 10,
		'rowGapTablet'               => 10,
		'rowGapMobile'               => 10,
		'columnGap'                  => 10,
		'columnGapTablet'            => 10,
		'columnGapMobile'            => 10,
		'contentPadding'             => 5,
		'backgroundColor'            => '',
		'backgroundImage'            => '',
		'backgroundPosition'         => 'center-center',
		'backgroundSize'             => 'cover',
		'backgroundRepeat'           => 'no-repeat',
		'backgroundImageColor'       => '',
		'arrowColor'                 => '#333',
		'arrowDots'                  => 'arrowDots',
		'arrowBorderSize'            => 0,
		'arrowBorderRadius'          => 0,
		'columns'                    => 1,
		'autoplaySpeed'              => 2000,
		'autoplay'                   => true,
		'infiniteLoop'               => true,
		'pauseOnHover'               => true,
		'transitionSpeed'            => 500,
		'tcolumns'                   => 1,
		'mcolumns'                   => 1,
		'arrowSize'                  => 20,
		'test_item_count'            => 3,
		'imageWidthType'             => 'px',
		'arrowSizeType'              => 'px',
		'rowGapType'                 => 'px',
		'columnGapType'              => 'px',
		'descSpaceType'              => 'px',
		'nameSpaceType'              => 'px',
		'overlayType'                => '',
		'backgroundAttachment'       => '',
		'gradientValue'              => '',
		'descTransform'              => '',
		'descDecoration'             => '',
		'nameTransform'              => '',
		'nameDecoration'             => '',
		'companyTransform'           => '',
		'companyDecoration'          => '',
		'paddingUnit'                => 'px',
		'mobilePaddingUnit'          => 'px',
		'tabletPaddingUnit'          => 'px',
		'paddingTopTablet'           => '',
		'paddingRightTablet'         => '',
		'paddingBottomTablet'        => '',
		'paddingLeftTablet'          => '',
		'paddingTopMobile'           => '',
		'paddingRightMobile'         => '',
		'paddingBottomMobile'        => '',
		'paddingLeftMobile'          => '',
		'imgpaddingTopTablet'        => '',
		'imgpaddingRightTablet'      => '',
		'imgpaddingBottomTablet'     => '',
		'imgpaddingLeftTablet'       => '',
		'imgpaddingTopMobile'        => '',
		'imgpaddingRightMobile'      => '',
		'imgpaddingBottomMobile'     => '',
		'imgpaddingLeftMobile'       => '',
		'imgpaddingUnit'             => 'px',
		'imgmobilePaddingUnit'       => 'px',
		'imgtabletPaddingUnit'       => 'px',
		'backgroundType'             => 'none',
		'backgroundColor'            => '#eeeeee',
		'backgroundHoverColor'       => '',
		'gradientColor1'             => '',
		'gradientColor2'             => '',
		'gradientType'               => 'linear',
		'gradientLocation1'          => 0,
		'gradientLocation2'          => 100,
		'gradientAngle'              => 0,
		'gradientPosition'           => 'center center',
		'equalHeight'                => false,
		'nameLetterSpacing'          => '',
		'nameLetterSpacingTablet'    => '',
		'nameLetterSpacingMobile'    => '',
		'nameLetterSpacingType'      => 'px',
		'descLetterSpacing'          => '',
		'descLetterSpacingTablet'    => '',
		'descLetterSpacingMobile'    => '',
		'descLetterSpacingType'      => 'px',
		'companyLetterSpacing'       => '',
		'companyLetterSpacingTablet' => '',
		'companyLetterSpacingMobile' => '',
		'companyLetterSpacingType'   => 'px',
	),
	$border_attribute,
);
