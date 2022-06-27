<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$pagination_masonry_border_attribute = UAGB_Block_Helper::uag_generate_border_attribute( 'paginationMasonry' );
$btn_border_attribute                = UAGB_Block_Helper::uag_generate_border_attribute( 'btn' );

return array_merge(
	array(
		'blockName'                         => 'post-masonry',
		'postsToShow'                       => 6,
		'postsOffset'                       => 0,
		'post_type'                         => 'masonry',
		'postType'                          => 'post',
		'align'                             => 'left',
		'rowGap'                            => 20,
		'rowGapTablet'                      => '',
		'rowGapMobile'                      => '',
		'columnGap'                         => 20,
		'columnGapTablet'                   => '',
		'columnGapMobile'                   => '',
		'bgColor'                           => '#f6f6f6',
		'titleColor'                        => '#3b3b3b',
		'titleTag'                          => 'h3',
		'titleFontSize'                     => '',
		'titleFontSizeType'                 => 'px',
		'titleFontSizeMobile'               => '',
		'titleFontSizeTablet'               => '',
		'titleFontFamily'                   => '',
		'titleFontWeight'                   => '',
		'titleFontStyle'                    => '',
		'titleLineHeightType'               => 'em',
		'titleLineHeight'                   => '',
		'titleLineHeightTablet'             => '',
		'titleLineHeightMobile'             => '',
		'titleLoadGoogleFonts'              => false,
		'metaFontSize'                      => '',
		'metaFontSizeType'                  => 'px',
		'metaFontSizeMobile'                => '',
		'metaFontSizeTablet'                => '',
		'metaFontFamily'                    => '',
		'metaFontWeight'                    => '',
		'metaFontStyle'                     => '',
		'metaLineHeightType'                => 'em',
		'metaLineHeight'                    => '',
		'metaLineHeightTablet'              => '',
		'metaLineHeightMobile'              => '',
		'metaLoadGoogleFonts'               => false,
		'excerptFontSize'                   => '',
		'excerptFontSizeType'               => 'px',
		'excerptFontSizeMobile'             => '',
		'excerptFontSizeTablet'             => '',
		'excerptFontFamily'                 => '',
		'excerptFontWeight'                 => '',
		'excerptFontStyle'                  => '',
		'excerptLineHeightType'             => 'em',
		'excerptLineHeight'                 => '',
		'excerptLineHeightTablet'           => '',
		'excerptLineHeightMobile'           => '',
		'excerptLoadGoogleFonts'            => false,
		'ctaFontSize'                       => '',
		'ctaFontSizeType'                   => 'px',
		'ctaFontSizeTablet'                 => '',
		'ctaFontSizeMobile'                 => '',
		'ctaFontFamily'                     => '',
		'ctaFontWeight'                     => '',
		'ctaFontStyle'                      => '',
		'ctaLineHeightType'                 => 'em',
		'ctaLineHeight'                     => '',
		'ctaLineHeightTablet'               => '',
		'ctaLineHeightMobile'               => '',
		'ctaLoadGoogleFonts'                => false,
		'metaColor'                         => '#777777',
		'highlightedTextColor'              => '',
		'highlightedTextBgColor'            => '',
		'excerptColor'                      => '',
		'ctaColor'                          => '',
		'ctaBgColor'                        => '',
		'ctaHColor'                         => '',
		'ctaBgHColor'                       => '',
		'contentPadding'                    => '20',
		'contentPaddingMobile'              => '',
		'btnVPadding'                       => '',
		'btnHPadding'                       => '',
		'ctaBottomSpace'                    => '0',
		'ctaBottomSpaceTablet'              => '',
		'ctaBottomSpaceMobile'              => '',
		'imageBottomSpace'                  => '15',
		'imageBottomSpaceTablet'            => '',
		'imageBottomSpaceMobile'            => '',
		'titleBottomSpace'                  => '15',
		'titleBottomSpaceTablet'            => '',
		'titleBottomSpaceMobile'            => '',
		'metaBottomSpace'                   => '15',
		'metaBottomSpaceTablet'             => '',
		'metaBottomSpaceMobile'             => '',
		'excerptBottomSpace'                => '25',
		'excerptBottomSpaceTablet'          => '',
		'excerptBottomSpaceMobile'          => '',
		'overlayOpacity'                    => '50',
		'bgOverlayColor'                    => '#ffffff',
		'ctaText'                           => __( 'Read More', 'ultimate-addons-for-gutenberg' ),
		'paginationType'                    => 'none',
		'paginationEventType'               => 'button',
		'buttonText'                        => 'Load More',
		'paginationAlign'                   => 'center',
		'paginationTextColor'               => '',
		'paginationMasonryBgColor'          => '',
		'paginationBgHoverColor'            => '',
		'paginationTextHoverColor'          => '',
		'paginationMasonryBorderHColor'     => '',
		'paginationFontSize'                => 13,
		'loaderColor'                       => '#0085ba',
		'loaderSize'                        => 18,
		'vpaginationButtonPaddingMobile'    => 8,
		'vpaginationButtonPaddingTablet'    => 8,
		'vpaginationButtonPaddingDesktop'   => 8,
		'hpaginationButtonPaddingMobile'    => 12,
		'hpaginationButtonPaddingTablet'    => 12,
		'hpaginationButtonPaddingDesktop'   => 12,
		'imgPosition'                       => 'top',

		'mobilepaginationButtonPaddingType' => 'px',
		'tabletpaginationButtonPaddingType' => 'px',
		'paginationButtonPaddingType'       => 'px',
		'displayPostContentRadio'           => 'excerpt',
		'excludeCurrentPost'                => '',
		'rowGapUnit'                        => 'px',
		'columnGapUnit'                     => 'px',
		'contentPaddingUnit'                => 'px',
		'excerptBottomSpaceUnit'            => 'px',
		'paginationSpacingUnit'             => 'px',
		'imageBottomSpaceUnit'              => 'px',
		'titleBottomSpaceUnit'              => 'px',
		'metaBottomSpaceUnit'               => 'px',
		'ctaBottomSpaceUnit'                => 'px',
		'paddingBtnUnit'                    => 'px',
		'mobilePaddingBtnUnit'              => 'px',
		'tabletPaddingBtnUnit'              => 'px',
		'contentPaddingUnit'                => 'px',
		'paddingUnit'                       => 'px',
		'mobilePaddingUnit'                 => 'px',
		'tabletPaddingUnit'                 => 'px',
		'titleTransform'                    => '',
		'metaTransform'                     => '',
		'excerptTransform'                  => '',
		'ctaTransform'                      => '',
		'titleDecoration'                   => '',
		'metaDecoration'                    => '',
		'excerptDecoration'                 => '',
		'ctaDecoration'                     => '',
		'paddingBtnTopTablet'               => '',
		'paddingBtnRightTablet'             => '',
		'paddingBtnBottomTablet'            => '',
		'paddingBtnLeftTablet'              => '',
		'paddingBtnTopMobile'               => '',
		'paddingBtnRightMobile'             => '',
		'paddingBtnBottomMobile'            => '',
		'paddingBtnLeftMobile'              => '',
		'spacingLink'                       => '',
		'spacingLinkPadding'                => '',
		'paddingTopTablet'                  => '',
		'paddingRightTablet'                => '',
		'paddingBottomTablet'               => '',
		'paddingLeftTablet'                 => '',
		'paddingTopMobile'                  => '',
		'paddingRightMobile'                => '',
		'paddingBottomMobile'               => '',
		'paddingLeftMobile'                 => '',
		'layoutConfig'                      => array(
			array( 'uagb/post-image' ),
			array( 'uagb/post-title' ),
			array( 'uagb/post-meta' ),
			array( 'uagb/post-taxonomy' ),
			array( 'uagb/post-excerpt' ),
			array( 'uagb/post-button' ),
		),
		'titleLetterSpacing'                => '',
		'titleLetterSpacingTablet'          => '',
		'titleLetterSpacingMobile'          => '',
		'titleLetterSpacingType'            => 'px',
		'metaLetterSpacing'                 => '',
		'metaLetterSpacingTablet'           => '',
		'metaLetterSpacingMobile'           => '',
		'metaLetterSpacingType'             => 'px',
		'excerptLetterSpacing'              => '',
		'excerptLetterSpacingTablet'        => '',
		'excerptLetterSpacingMobile'        => '',
		'excerptLetterSpacingType'          => 'px',
		'ctaLetterSpacing'                  => '',
		'ctaLetterSpacingTablet'            => '',
		'ctaLetterSpacingMobile'            => '',
		'ctaLetterSpacingType'              => 'px',
	),
	$pagination_masonry_border_attribute,
	$btn_border_attribute,
);
