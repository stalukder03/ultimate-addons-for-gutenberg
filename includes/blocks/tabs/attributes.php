<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$border_defaults  = array(
	'borderTopWidth'    => 1,
	'borderRightWidth'  => 1,
	'borderBottomWidth' => 1,
	'borderLeftWidth'   => 1,
	'borderColor'       => '#e0e0e0',
	'borderStyle'       => 'solid',
);
$border_attribute = UAGB_Block_Helper::uag_generate_border_attribute( 'tab', $border_defaults );

return array_merge(
	array(
		'tabHeaders'                  => array( 'Tab 1', 'Tab 2', 'Tab 3' ),
		'tabAlign'                    => 'left',
		'tabActive'                   => 0,
		'tabActiveFrontend'           => 0,
		'tabsStyleD'                  => 'hstyle1',
		'tabsStyleT'                  => 'vstyle6',
		'tabsStyleM'                  => 'stack1',
		'headerBgColor'               => '',
		'headerTextColor'             => '',
		'bodyBgColor'                 => '',
		'bodyTextColor'               => '',
		'activeTabBgColor'            => '',
		'activeTabTextColor'          => '',
		'activeiconColor'             => '',
		'tabTitleLeftMargin'          => '',
		'tabTitleRightMargin'         => '',
		'tabTitleTopMargin'           => '',
		'tabTitleBottomMargin'        => '',
		'tabTitleLeftMarginTablet'    => '',
		'tabTitleRightMarginTablet'   => '',
		'tabTitleTopMarginTablet'     => '',
		'tabTitleBottomMarginTablet'  => '',
		'tabTitleLeftMarginMobile'    => '',
		'tabTitleRightMarginMobile'   => '',
		'tabTitleTopMarginMobile'     => '',
		'tabTitleBottomMarginMobile'  => '',
		'tabTitleMarginUnit'          => 'px',
		'mobiletabTitleMarginUnit'    => 'px',
		'tablettabTitleMarginUnit'    => 'px',
		'tabTitleMarginLink'          => '',
		'tabTitleTopPaddingTablet'    => '',
		'tabTitleRightPaddingTablet'  => '',
		'tabTitleBottomPaddingTablet' => '',
		'tabTitleLeftPaddingTablet'   => '',
		'tabTitleTopPaddingMobile'    => '',
		'tabTitleRightPaddingMobile'  => '',
		'tabTitleBottomPaddingMobile' => '',
		'tabTitleLeftPaddingMobile'   => '',
		'tabTitlePaddingUnit'         => 'px',
		'mobiletabTitlePaddingUnit'   => 'px',
		'tablettabTitlePaddingUnit'   => 'px',
		'tabTitlePaddingLink'         => '',
		'tabBodyLeftMargin'           => '',
		'tabBodyRightMargin'          => '',
		'tabBodyTopMargin'            => '',
		'tabBodyBottomMargin'         => '',
		'tabBodyLeftMarginTablet'     => '',
		'tabBodyRightMarginTablet'    => '',
		'tabBodyTopMarginTablet'      => '',
		'tabBodyBottomMarginTablet'   => '',
		'tabBodyLeftMarginMobile'     => '',
		'tabBodyRightMarginMobile'    => '',
		'tabBodyTopMarginMobile'      => '',
		'tabBodyBottomMarginMobile'   => '',
		'tabBodyMarginUnit'           => 'px',
		'mobiletabBodyMarginUnit'     => 'px',
		'tablettabBodyMarginUnit'     => 'px',
		'tabBodyMarginLink'           => '',
		'tabBodyTopPaddingTablet'     => '',
		'tabBodyRightPaddingTablet'   => '',
		'tabBodyBottomPaddingTablet'  => '',
		'tabBodyLeftPaddingTablet'    => '',
		'tabBodyTopPaddingMobile'     => '',
		'tabBodyRightPaddingMobile'   => '',
		'tabBodyBottomPaddingMobile'  => '',
		'tabBodyLeftPaddingMobile'    => '',
		'tabBodyPaddingUnit'          => 'px',
		'mobiletabBodyPaddingUnit'    => 'px',
		'tablettabBodyPaddingUnit'    => 'px',
		'tabBodyPaddingLink'          => '',
		'tabBodyVertPadding'          => '',
		'tabBodyHrPadding'            => '',
		'tabTitleVertPadding'         => '',
		'tabTitleHrPadding'           => '',
		'titleFontSize'               => '',
		'titleFontSizeType'           => 'px',
		'titleFontSizeTablet'         => '',
		'titleFontSizeMobile'         => '',
		'titleFontFamily'             => 'Default',
		'titleFontWeight'             => '500',
		'titleFontStyle'              => '',
		'titleLineHeightType'         => 'em',
		'titleLineHeight'             => '',
		'titleLineHeightTablet'       => '',
		'titleLineHeightMobile'       => '',
		'titleLoadGoogleFonts'        => false,
		'titleAlign'                  => 'center',
		'titleTransform'              => '',
		'titleDecoration'             => '',
		'showIcon'                    => false,
		'icon'                        => '',
		'iconColor'                   => '',
		'iconSize'                    => 16,
		'iconSizeTablet'              => '',
		'iconSizeMobile'              => '',
		'iconPosition'                => 'left',
		'iconSpacing'                 => 10,
		'iconSpacingTablet'           => '',
		'iconSpacingMobile'           => '',
		'titleLetterSpacing'          => '',
		'titleLetterSpacingTablet'    => '',
		'titleLetterSpacingMobile'    => '',
		'titleLetterSpacingType'      => 'px',
	),
	$border_attribute
);
