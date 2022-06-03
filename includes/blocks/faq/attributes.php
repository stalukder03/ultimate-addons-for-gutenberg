<?php
/**
 * Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$borderDefaults  = array(
	'borderStyle'  => 'solid',
	'borderWidth'  => 1,
	'borderRadius' => 2,
);
$borderAttribute = UAGB_Block_Helper::uag_generate_border_attribute( '', $borderDefaults );

return array(
	'block_id'                     => '',
	'layout'                       => 'accordion',
	'inactiveOtherItems'           => true,
	'expandFirstItem'              => false,
	'enableSchemaSupport'          => false,
	'align'                        => 'left',
	'enableSeparator'              => false,
	'rowsGap'                      => 10,
	'rowsGapTablet'                => 10,
	'rowsGapMobile'                => 10,
	'rowsGapUnit'                  => 'px',
	'boxBgColor'                   => '',
	'boxPaddingTypeMobile'         => 'px',
	'boxPaddingTypeTablet'         => 'px',
	'boxPaddingTypeDesktop'        => 'px',
	'vBoxPaddingMobile'            => 10,
	'hBoxPaddingMobile'            => 10,
	'vBoxPaddingTablet'            => 10,
	'hBoxPaddingTablet'            => 10,
	'vBoxPaddingDesktop'           => 10,
	'hBoxPaddingDesktop'           => 10,
	'questionTextColor'            => '',
	'questionTextActiveColor'      => '',
	'questionPaddingTypeDesktop'   => 'px',
	'questionPaddingTypeTablet'    => 'px',
	'questionPaddingTypeMobile'    => 'px',
	'vquestionPaddingMobile'       => 10,
	'vquestionPaddingTablet'       => 10,
	'vquestionPaddingDesktop'      => 10,
	'hquestionPaddingMobile'       => 10,
	'hquestionPaddingTablet'       => 10,
	'hquestionPaddingDesktop'      => 10,
	'answerTextColor'              => '',
	'answerPaddingTypeDesktop'     => 'px',
	'answerPaddingTypeTablet'      => 'px',
	'answerPaddingTypeMobile'      => 'px',
	'vanswerPaddingMobile'         => 10,
	'vanswerPaddingTablet'         => 10,
	'vanswerPaddingDesktop'        => 10,
	'hanswerPaddingMobile'         => 10,
	'hanswerPaddingTablet'         => 10,
	'hanswerPaddingDesktop'        => 10,
	'iconColor'                    => '',
	'iconActiveColor'              => '',
	'gapBtwIconQUestion'           => 10,
	'gapBtwIconQUestionTablet'     => 10,
	'gapBtwIconQUestionMobile'     => 10,
	'questionloadGoogleFonts'      => false,
	'answerloadGoogleFonts'        => false,
	'questionFontFamily'           => 'Default',
	'questionFontWeight'           => '',
	'questionFontSize'             => '',
	'questionFontSizeType'         => 'px',
	'questionFontSizeTablet'       => '',
	'questionFontSizeMobile'       => '',
	'questionLineHeight'           => '',
	'questionLineHeightType'       => 'em',
	'questionLineHeightTablet'     => '',
	'questionLineHeightMobile'     => '',
	'answerFontFamily'             => 'Default',
	'answerFontWeight'             => '',
	'answerFontSize'               => '',
	'answerFontSizeType'           => 'px',
	'answerFontSizeTablet'         => '',
	'answerFontSizeMobile'         => '',
	'answerLineHeight'             => '',
	'answerLineHeightType'         => 'em',
	'answerLineHeightTablet'       => '',
	'answerLineHeightMobile'       => '',
	'icon'                         => 'fas fa-plus',
	'iconActive'                   => 'fas fa-minus',
	'iconAlign'                    => 'row',
	'iconSize'                     => 12,
	'iconSizeMobile'               => 15,
	'iconSizeTablet'               => 15,
	'iconSizeType'                 => 'px',
	'columnsGap'                   => 10,
	'columnsGapTablet'             => 10,
	'columnsGapMobile'             => 10,
	'columnsGapUnit'               => 'px',
	'columns'                      => 2,
	'tcolumns'                     => 2,
	'mcolumns'                     => 1,
	'schema'                       => '',
	'enableToggle'                 => true,
	'questionLeftPaddingTablet'    => 10,
	'questionBottomPaddingTablet'  => 10,
	'questionLeftPaddingDesktop'   => 10,
	'questionBottomPaddingDesktop' => 10,
	'questionLeftPaddingMobile'    => 10,
	'questionBottomPaddingMobile'  => 10,
	'questionSpacingLink'          => '',
	'answerSpacingLink'            => '',
	'answerTopPadding'             => 10,
	'answerRightPadding'           => 10,
	'answerBottomPadding'          => 10,
	'answerLeftPadding'            => 10,
	'answerTopPaddingTablet'       => 10,
	'answerRightPaddingTablet'     => 10,
	'answerBottomPaddingTablet'    => 10,
	'answerLeftPaddingTablet'      => 10,
	'answerTopPaddingMobile'       => 10,
	'answerRightPaddingMobile'     => 10,
	'answerBottomPaddingMobile'    => 10,
	'answerLeftPaddingMobile'      => 10,
	'questionFontStyle'            => '',
	'questionTransform'            => '',
	'questionDecoration'           => '',
	'answerFontStyle'              => '',
	'answerTransform'              => '',
	'answerDecoration'             => '',
	$borderAttribute,
);
