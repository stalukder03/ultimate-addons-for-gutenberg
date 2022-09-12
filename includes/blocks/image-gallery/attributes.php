<?php
/**
 * Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$arrow_border_attributes  = UAGB_Block_Helper::uag_generate_border_attribute(
	'arrow',
	array(
		'borderTopWidth'          => 4,
		'borderRightWidth'        => 4,
		'borderBottomWidth'       => 4,
		'borderLeftWidth'         => 4,
		'borderTopLeftRadius'     => 50,
		'borderTopRightRadius'    => 50,
		'borderBottomLeftRadius'  => 50,
		'borderBottomRightRadius' => 50,
	)
);
$btn_border_attributes = UAGB_Block_Helper::uag_generate_border_attribute(
	'btn',
	array(
		'borderTopLeftRadius'     => 50,
		'borderTopRightRadius'    => 50,
		'borderBottomLeftRadius'  => 50,
		'borderBottomRightRadius' => 50,
	)
);
$main_title_border_attributes = UAGB_Block_Helper::uag_generate_border_attribute(
	'mainTitle',
	array(
		'borderTopWidth'    => 2,
		'borderRightWidth'  => 0,
		'borderBottomWidth' => 2,
		'borderLeftWidth'   => 0,
	)
);

return array_merge(
	array(
		// Block Requirements
		'block_id'                           => '',
		'classMigrate'                       => false,
		// Editor Requirements
		'readyToRender'                      => false,
		'tileSize'                           => 0,
		'focusList'                          => array(),
		// Gallery Settings
		'mediaGallery'                       => array(),
		'mediaIDs'                           => array(),
		'feedLayout'                         => 'tiled',
		'imageDisplayCaption'                => true,
		// Caption Settings
		'imageCaptionLength'                 => 30,
		'captionVisibility'                  => 'hover',
		'captionDisplayType'                 => 'overlay',
		'imageCaptionAlignment'              => 'center center',
		'imageCaptionAlignment01'            => 'center',
		'imageCaptionAlignment02'            => 'center',
		'imageDefaultCaption'                => 'No Caption',
		'captionPaddingTop'                  => 8,
		'captionPaddingRight'                => 8,
		'captionPaddingBottom'               => 8,
		'captionPaddingLeft'                 => 8,
		'captionPaddingTopTab'               => 8,
		'captionPaddingRightTab'             => 8,
		'captionPaddingBottomTab'            => 8,
		'captionPaddingLeftTab'              => 8,
		'captionPaddingTopMob'               => 8,
		'captionPaddingRightMob'             => 8,
		'captionPaddingBottomMob'            => 8,
		'captionPaddingLeftMob'              => 8,
		'captionPaddingUnit'                 => 'px',
		'captionPaddingUnitTab'              => 'px',
		'captionPaddingUnitMob'              => 'px',
		'captionPaddingUnitLink'             => true,
		'captionGap'                         => 4,
		'captionGapUnit'                     => 'px',
		// Layout Settings
		'columnsDesk'                        => 6,
		'columnsTab'                         => 4,
		'columnsMob'                         => 3,
		'gridImageGap'                       => 2,
		'gridImageGapTab'                    => 2,
		'gridImageGapMob'                    => 2,
		'gridImageGapUnit'                   => 'px',
		'gridImageGapUnitTab'                => 'px',
		'gridImageGapUnitMob'                => 'px',
		'feedMarginTop'                      => 0,
		'feedMarginRight'                    => 0,
		'feedMarginBottom'                   => 0,
		'feedMarginLeft'                     => 0,
		'feedMarginTopTab'                   => 0,
		'feedMarginRightTab'                 => 0,
		'feedMarginBottomTab'                => 0,
		'feedMarginLeftTab'                  => 0,
		'feedMarginTopMob'                   => 0,
		'feedMarginRightMob'                 => 0,
		'feedMarginBottomMob'                => 0,
		'feedMarginLeftMob'                  => 0,
		'feedMarginUnit'                     => 'px',
		'feedMarginUnitTab'                  => 'px',
		'feedMarginUnitMob'                  => 'px',
		'feedMarginUnitLink'                 => true,
		// Layout Specific Settings	
		'carouselStartAt'                    => 0,
		'carouselSquares'                    => false,
		'carouselLoop'                       => true,
		'carouselAutoplay'                   => true,
		'carouselAutoplaySpeed'              => 2000,
		'carouselPauseOnHover'               => true,
		'carouselTransitionSpeed'            => 500,
		'gridPages'                          => 1,
		'gridPageNumber'                     => 1,
		// Pagination Settings
		'feedPagination'                     => false,
		'paginateUseArrows'                  => true,
		'paginateUseDots'                    => true,
		'paginateUseLoader'                  => true,
		'paginateLimit'                      => 9,
		'paginateButtonAlign'                => 'center',
		'paginateButtonText'                 => 'Load More Images',
		'paginateButtonPaddingTop'           => 8,
		'paginateButtonPaddingRight'         => 16,
		'paginateButtonPaddingBottom'        => 8,
		'paginateButtonPaddingLeft'          => 16,
		'paginateButtonPaddingTopTab'        => 8,
		'paginateButtonPaddingRightTab'      => 16,
		'paginateButtonPaddingBottomTab'     => 8,
		'paginateButtonPaddingLeftTab'       => 16,
		'paginateButtonPaddingTopMob'        => 8,
		'paginateButtonPaddingRightMob'      => 16,
		'paginateButtonPaddingBottomMob'     => 8,
		'paginateButtonPaddingLeftMob'       => 16,
		'paginateButtonPaddingUnit'          => 'px',
		'paginateButtonPaddingUnitTab'       => 'px',
		'paginateButtonPaddingUnitMob'       => 'px',
		'paginateButtonPaddingUnitLink'      => false,
		// Image Styling
		'imageBorderTopLeftRadius'           => '',
		'imageBorderTopRightRadius'          => '',
		'imageBorderBottomRightRadius'       => '',
		'imageBorderBottomLeftRadius'        => '',
		'imageBorderTopLeftRadiusTablet'     => '',
		'imageBorderTopRightRadiusTablet'    => '',
		'imageBorderBottomRightRadiusTablet' => '',
		'imageBorderBottomLeftRadiusTablet'  => '',
		'imageBorderTopLeftRadiusMobile'     => '',
		'imageBorderTopRightRadiusMobile'    => '',
		'imageBorderBottomRightRadiusMobile' => '',
		'imageBorderBottomLeftRadiusMobile'  => '',
		'imageBorderRadiusUnit'              => 'px',
		'imageBorderRadiusUnitTablet'        => 'px',
		'imageBorderRadiusUnitMobile'        => 'px',
		'imageBorderRadiusUnitLink'          => true,
		'imageEnableZoom'                    => true,
		'imageZoomType'                      => 'zoom-in',
		'captionBackgroundEnableBlur'        => false,
		'captionBackgroundBlurAmount'        => 10,
		'captionBackgroundBlurOpacity'       => 0,
		'captionBackgroundBlurOpacityHover'  => 0,
		// Caption Typography Styling
		'captionLoadGoogleFonts'             => false,
		'captionFontFamily'                  => 'Default',
		'captionFontWeight'                  => '',
		'captionFontStyle'                   => 'normal',
		'captionTransform'                   => '',
		'captionDecoration'                  => 'none',
		'captionFontSizeType'                => 'px',
		'captionFontSize'                    => '',
		'captionFontSizeTab'                 => '',
		'captionFontSizeMob'                 => '',
		'captionLineHeightType'              => 'em',
		'captionLineHeight'                  => '',
		'captionLineHeightTab'               => '',
		'captionLineHeightMob'               => '',
		// Pagination Button Typography Styling
		'loadMoreLoadGoogleFonts'            => false,
		'loadMoreFontFamily'                 => 'Default',
		'loadMoreFontWeight'                 => '',
		'loadMoreFontStyle'                  => 'normal',
		'loadMoreTransform'                  => '',
		'loadMoreDecoration'                 => 'none',
		'loadMoreFontSizeType'               => 'px',
		'loadMoreFontSize'                   => '',
		'loadMoreFontSizeTab'                => '',
		'loadMoreFontSizeMob'                => '',
		'loadMoreLineHeightType'             => 'em',
		'loadMoreLineHeight'                 => '',
		'loadMoreLineHeightTab'              => '',
		'loadMoreLineHeightMob'              => '',
		// Hoverable Styling
		'captionBackgroundEffect'            => 'none',
		'captionBackgroundEffectHover'       => 'none',
		'captionBackgroundEffectAmount'      => 100,
		'captionBackgroundEffectAmountHover' => 0,
		'captionColor'                       => 'rgba(255,255,255,1)',
		'captionColorHover'                  => 'rgba(255,255,255,1)',
		'captionBackgroundColor'             => 'rgba(0,0,0,0.75)',
		'captionBackgroundColorHover'        => 'rgba(0,0,0,0.75)',
		'overlayColor'                       => 'rgba(0,0,0,0)',
		'overlayColorHover'                  => 'rgba(0,0,0,0)',
		'captionSeparateColors'              => false,
		// Pagination Styling
		'paginateArrowDistance'              => -24,
		'paginateArrowDistanceUnit'          => 'px',
		'paginateLoaderSize'                 => 18,
		'paginateButtonTextColor'            => '#ffffff',
		'paginateButtonTextColorHover'       => '#4a01e0',
		'paginateColor'                      => '#4a01e0',
		'paginateColorHover'                 => '#de99ec',
	),
	$arrow_border_attributes,
	$btn_border_attributes,
	$main_title_border_attributes,
);
