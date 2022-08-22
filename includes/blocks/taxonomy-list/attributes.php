<?php
/**
 * Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$border_attribute = UAGB_Block_Helper::uag_generate_border_attribute(
	'overall'
);

return array_merge(
	array(
		'block_id'                 => '',
		'postType'                 => 'post',
		'taxonomyType'             => 'category',
		'titleTag'                 => '',
		'categories'               => '',
		'order'                    => 'desc',
		'orderBy'                  => 'date',
		'postsToShow'              => 8,
		'layout'                   => 'grid',
		'columns'                  => 3,
		'tcolumns'                 => 2,
		'mcolumns'                 => 1,
		'bgColor'                  => '#f5f5f5',
		'titleColor'               => '#3b3b3b',
		'countColor'               => '#777777',
		'listTextColor'            => '#3b3b3b',
		'hoverlistTextColor'       => '#3b3b3b',
		'listStyleColor'           => '#3b3b3b',
		'hoverlistStyleColor'      => '#3b3b3b',
		'rowGap'                   => 20,
		'rowGapTablet'             => '',
		'rowGapMobile'             => '',
		'columnGap'                => 20,
		'columnGapTablet'          => '',
		'columnGapMobile'          => '',
		'contentPadding'           => 20,
		'contentPaddingMobile'     => 15,
		'contentPaddingTablet'     => 15,
		'titleBottomSpace'         => 5,
		'titleBottomSpaceTablet'   => '',
		'titleBottomSpaceMobile'   => '',
		'listBottomMargin'         => 10,
		'alignment'                => 'center',
		'listStyle'                => 'disc',
		'boxShadowColor'           => '',
		'boxShadowHOffset'         => 0,
		'boxShadowVOffset'         => 0,
		'boxShadowBlur'            => '',
		'boxShadowSpread'          => '',
		'boxShadowPosition'        => 'outset',
		'titleFontSize'            => '',
		'titleFontSizeType'        => 'px',
		'titleFontSizeMobile'      => '',
		'titleFontSizeTablet'      => '',
		'titleFontFamily'          => '',
		'titleFontWeight'          => '',
		'titleFontStyle'           => '',
		'titleLineHeightType'      => 'em',
		'titleLineHeight'          => '',
		'titleLineHeightTablet'    => '',
		'titleLineHeightMobile'    => '',
		'titleLoadGoogleFonts'     => false,
		'countFontSize'            => '',
		'countFontSizeType'        => 'px',
		'countFontSizeMobile'      => '',
		'countFontSizeTablet'      => '',
		'countFontFamily'          => '',
		'countFontWeight'          => '',
		'countFontStyle'           => '',
		'countLineHeightType'      => 'em',
		'countLineHeight'          => '',
		'countLineHeightTablet'    => '',
		'countLineHeightMobile'    => '',
		'countLoadGoogleFonts'     => false,
		'listFontSize'             => '',
		'listFontSizeType'         => 'px',
		'listFontSizeMobile'       => '',
		'listFontSizeTablet'       => '',
		'listFontFamily'           => '',
		'listFontWeight'           => '',
		'listFontStyle'            => '',
		'listLineHeightType'       => 'em',
		'listLineHeight'           => '',
		'listLineHeightTablet'     => '',
		'listLineHeightMobile'     => '',
		'listLoadGoogleFonts'      => false,
		'noTaxDisplaytext'         => __( 'Taxonomy Not Available.', 'ultimate-addons-for-gutenberg' ),
		'showCount'                => true,
		'showEmptyTaxonomy'        => false,
		'showhierarchy'            => false,
		'listDisplayStyle'         => 'list',
		'contentPaddingUnit'       => 'px',
		'mobileContentPaddingUnit' => 'px',
		'tabletContentPaddingUnit' => 'px',
		'contentPaddingLink'       => false,
		'titleTransform'           => '',
		'countTransform'           => '',
		'listTransform'            => '',
		'titleDecoration'          => '',
		'countDecoration'          => '',
		'listDecoration'           => '',
		// letter spacing.
		'titleLetterSpacing'       => 0,
		'titleLetterSpacingTablet' => '',
		'titleLetterSpacingMobile' => '',
		'titleLetterSpacingType'   => 'px',
		'countLetterSpacing'       => '',
		'countLetterSpacingTablet' => '',
		'countLetterSpacingMobile' => '',
		'countLetterSpacingType'   => 'px',
		'listLetterSpacing'        => '',
		'listLetterSpacingTablet'  => '',
		'listLetterSpacingMobile'  => '',
		'listLetterSpacingType'    => 'px',
		'seperatorStyle'           => 'none',
		'seperatorWidth'           => 100,
		'seperatorThickness'       => 1,
		'seperatorColor'           => '#b2b4b5',
		'seperatorHoverColor'      => '#b2b4b5',
	),
	$border_attribute
);
