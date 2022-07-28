import { __ } from '@wordpress/i18n';
import { getBorderAttributes } from '@Controls/generateAttributes';
const btnBorderAttributes = getBorderAttributes( 'btn' );

const attributes = {
	blockName        : {
		type   :'string',
		default:'post-carousel',
	},
	pauseOnHover     : {
		type   :'boolean',
		default:true,
	},
	infiniteLoop     : {
		type   :'boolean',
		default:true,
	},
	transitionSpeed  : {
		type   :'number',
		default:500,
	},
	arrowDots        : {
		type   :'string',
		default:'arrows_dots',
	},
	autoplay         : {
		type   :'boolean',
		default:true,
	},
	autoplaySpeed    : {
		type   :'number',
		default:2000,
	},
	arrowSize        : {
		type   :'number',
		default:24,
	},
	arrowBorderSize  : {
		type   :'number',
		default:0,
	},
	arrowBorderRadius: {
		type   :'number',
		default:0,
	},
	arrowColor       : {
		type   :'string',
		default:'#000',
	},
	equalHeight      : {
		type   :'boolean',
		default:false,
	},
	layoutConfig            : {
		type    : 'array',
		default : [
			['uagb/post-image'],
			['uagb/post-taxonomy'],
			['uagb/post-title'],
			['uagb/post-meta'],
			['uagb/post-excerpt'],
			['uagb/post-button']
		]
	},
	post_type        : {
		type   :'string',
		default:'carousel',
	},
	inheritFromTheme             : {
		type   : 'boolean',
		default: true,
	},
	block_id                     : {
		type   : 'string',
		default: 'not_set',
	},
	categories                   : {
		type: 'string',
	},
	postType                     : {
		type   : 'string',
		default: 'post',
	},
	postDisplaytext              : {
		type   : 'string',
		default: 'No post found!',
	},
	taxonomyType                 : {
		type   : 'string',
		default: 'category',
	},
	postsToShow                  : {
		type   : 'number',
		default: 6,
	},
	postsOffset                  : {
		type   : 'number',
		default: 0,
	},
	displayPostDate              : {
		type   : 'boolean',
		default: true,
	},
	displayPostExcerpt           : {
		type   : 'boolean',
		default: true,
	},
	excerptLength                : {
		type   : 'number',
		default: 15,
	},
	displayPostAuthor            : {
		type   : 'boolean',
		default: false,
	},
	displayPostTitle             : {
		type   : 'boolean',
		default: true,
	},
	displayPostComment           : {
		type   : 'boolean',
		default: true,
	},
	displayPostTaxonomy          : {
		type   : 'boolean',
		default: false,
	},
	hideTaxonomyIcon             : {
		type   : 'boolean',
		default: true,
	},
	taxStyle                     : {
		type   : 'string',
		default: 'default',
	},
	displayPostTaxonomyAboveTitle: {
		type   : 'string',
		default: 'withMeta',
	},
	displayPostImage             : {
		type   : 'boolean',
		default: true,
	},
	imgSize                      : {
		type   : 'string',
		default: 'large',
	},
	imgPosition                  : {
		type   : 'string',
		default: 'top',
	},
	linkBox                      : {
		type: 'boolean',
	},
	bgOverlayColor               : {
		type   : 'string',
		default: '#000000',
	},
	overlayOpacity               : {
		type   : 'number',
		default: '50',
	},
	displayPostLink              : {
		type   : 'boolean',
		default: true,
	},
	newTab                       : {
		type   : 'boolean',
		default: false,
	},
	ctaText                      : {
		type   : 'string',
		default: __( 'Read More', 'ultimate-addons-for-gutenberg' ),
	},
	btnHPadding                  : {
		type   : 'number',
		default: '',
	},
	btnVPadding                  : {
		type   : 'number',
		default: '',
	},
	columns                      : {
		type   : 'number',
		default: 3,
	},
	tcolumns                     : {
		type   : 'number',
		default: 2,
	},
	mcolumns                     : {
		type   : 'number',
		default: 1,
	},
	align                        : {
		type   : 'string',
		default: 'left',
	},
	width                        : {
		type   : 'string',
		default: 'wide',
	},
	order                        : {
		type   : 'string',
		default: 'desc',
	},
	orderBy                      : {
		type   : 'string',
		default: 'date',
	},
	rowGap                       : {
		type   : 'number',
		default: 20,
	},
	rowGapTablet                 : {
		type   : 'number',
		default: 20,
	},
	rowGapMobile                 : {
		type   : 'number',
		default: 20,
	},
	columnGap                    : {
		type   : 'number',
		default: 20,
	},
	columnGapTablet              : {
		type: 'number',
	},
	columnGapMobile              : {
		type: 'number',
	},
	bgColor                      : {
		type   : 'string',
		default: '#f6f6f6',
	},

	// Title Attributes.
	titleColor                   : {
		type: 'string',
	},
	titleTag                     : {
		type   : 'string',
		default: 'h4',
	},
	titleFontSize                : {
		type   : 'number',
		default: '',
	},
	titleFontSizeType            : {
		type   : 'string',
		default: 'px',
	},
	titleFontSizeMobile          : {
		type: 'number',
	},
	titleFontSizeTablet          : {
		type: 'number',
	},
	titleFontFamily              : {
		type   : 'string',
		default: '',
	},
	titleFontWeight              : {
		type: 'string',
	},
	titleFontStyle               : {
		type: 'string',
	},
	titleLineHeightType          : {
		type   : 'string',
		default: 'em',
	},
	titleLineHeight              : {
		type: 'number',
	},
	titleLineHeightTablet        : {
		type: 'number',
	},
	titleLineHeightMobile        : {
		type: 'number',
	},
	titleLoadGoogleFonts         : {
		type   : 'boolean',
		default: false,
	},

	// Meta attributes.
	metaColor                    : {
		type   : 'string',
		default: '',
	},
	highlightedTextColor         : {
		type   : 'string',
		default: '#fff',
	},
	highlightedTextBgColor       : {
		type   : 'string',
		default: '#3182ce',
	},
	metaFontSize                 : {
		type   : 'number',
		default: '',
	},
	metaFontSizeType             : {
		type   : 'string',
		default: 'px',
	},
	metaFontSizeMobile           : {
		type: 'number',
	},
	metaFontSizeTablet           : {
		type: 'number',
	},
	metaFontFamily               : {
		type   : 'string',
		default: '',
	},
	metaFontWeight               : {
		type: 'string',
	},
	metaFontStyle                : {
		type: 'string',
	},
	metaLineHeightType           : {
		type   : 'string',
		default: 'em',
	},
	metaLineHeight               : {
		type: 'number',
	},
	metaLineHeightTablet         : {
		type: 'number',
	},
	metaLineHeightMobile         : {
		type: 'number',
	},
	metaLoadGoogleFonts          : {
		type   : 'boolean',
		default: false,
	},

	// Excerpt Attributes.
	excerptColor                 : {
		type   : 'string',
		default: '',
	},
	excerptFontSize              : {
		type   : 'number',
		default: '',
	},
	excerptFontSizeType          : {
		type   : 'string',
		default: 'px',
	},
	excerptFontSizeMobile        : {
		type: 'number',
	},
	excerptFontSizeTablet        : {
		type: 'number',
	},
	excerptFontFamily            : {
		type   : 'string',
		default: '',
	},
	excerptFontWeight            : {
		type: 'string',
	},
	excerptFontStyle             : {
		type: 'string',
	},
	excerptLineHeightType        : {
		type   : 'string',
		default: 'em',
	},
	excerptLineHeight            : {
		type: 'number',
	},
	excerptLineHeightTablet      : {
		type: 'number',
	},
	excerptLineHeightMobile      : {
		type: 'number',
	},
	excerptLoadGoogleFonts       : {
		type   : 'boolean',
		default: false,
	},
	displayPostContentRadio      : {
		type   : 'string',
		default: 'excerpt',
	},

	// CTA attributes.
	ctaColor                     : {
		type: 'string',
	},
	ctaBgColor                   : {
		type: 'string',
	},
	ctaHColor                    : {
		type: 'string',
	},
	ctaBgHColor                  : {
		type: 'string',
	},
	ctaFontSize                  : {
		type   : 'number',
		default: '',
	},
	ctaFontSizeType              : {
		type   : 'string',
		default: 'px',
	},
	ctaFontSizeMobile            : {
		type: 'number',
	},
	ctaFontSizeTablet            : {
		type: 'number',
	},
	ctaFontFamily                : {
		type   : 'string',
		default: '',
	},
	ctaFontWeight                : {
		type: 'string',
	},
	ctaFontStyle                 : {
		type: 'string',
	},
	ctaLineHeightType            : {
		type   : 'string',
		default: 'em',
	},
	ctaLineHeight                : {
		type: 'number',
	},
	ctaLineHeightTablet          : {
		type: 'number',
	},
	ctaLineHeightMobile          : {
		type: 'number',
	},
	ctaLoadGoogleFonts           : {
		type   : 'boolean',
		default: false,
	},

	// Spacing Attributes.
	paddingTop                   : {
		type: 'number',
	},
	paddingBottom                : {
		type: 'number',
	},
	paddingRight                 : {
		type: 'number',
	},
	paddingLeft                  : {
		type: 'number',
	},
	paddingTopMobile             : {
		type: 'number',
	},
	paddingBottomMobile          : {
		type: 'number',
	},
	paddingRightMobile           : {
		type: 'number',
	},
	paddingLeftMobile            : {
		type: 'number',
	},
	paddingBtnTop                : {
		type: 'number',
	},
	paddingBtnBottom             : {
		type: 'number',
	},
	paddingBtnRight              : {
		type: 'number',
	},
	paddingBtnLeft               : {
		type: 'number',
	},
	contentPadding               : {
		type   : 'number',
		default: 20,
	},
	contentPaddingMobile         : {
		type: 'number',
	},
	ctaBottomSpace               : {
		type   : 'number',
		default: 0,
	},
	ctaBottomSpaceTablet         : {
		type   : 'number',
		default: 0,
	},
	ctaBottomSpaceMobile         : {
		type   : 'number',
		default: 0,
	},
	imageBottomSpace             : {
		type   : 'number',
		default: 15,
	},
	imageBottomSpaceTablet       : {
		type: 'number',
	},
	imageBottomSpaceMobiile      : {
		type: 'number',
	},
	titleBottomSpace             : {
		type   : 'number',
		default: 15,
	},
	titleBottomSpaceTablet       : {
		type: 'number',
	},
	titleBottomSpaceMobile       : {
		type: 'number',
	},
	metaBottomSpace              : {
		type   : 'number',
		default: 15,
	},
	metaBottomSpaceTablet        : {
		type: 'number',
	},
	metaBottomSpaceMobile        : {
		type: 'number',
	},
	excerptBottomSpace           : {
		type   : 'number',
		default: 25,
	},
	excerptBottomSpaceTablet     : {
		type: 'number',
	},
	excerptBottomSpaceMobile     : {
		type: 'number',
	},
	// Exclude Current Post.
	excludeCurrentPost           : {
		type   : 'boolean',
		default: false,
	},
	titleTransform               : {
		type: 'string',
	},
	metaTransform                : {
		type: 'string',
	},
	excerptTransform             : {
		type: 'string',
	},
	ctaTransform                 : {
		type: 'string',
	},
	titleDecoration              : {
		type: 'string',
	},
	metaDecoration               : {
		type: 'string',
	},
	excerptDecoration            : {
		type: 'string',
	},
	ctaDecoration                : {
		type: 'string',
	},
	contentPaddingUnit           : {
		type   : 'string',
		default: 'px',
	},
	rowGapUnit                   : {
		type   : 'string',
		default: 'px',
	},
	columnGapUnit                : {
		type   : 'string',
		default: 'px',
	},
	excerptBottomSpaceUnit       : {
		type   : 'string',
		default: 'px',
	},
	paginationSpacingUnit        : {
		type   : 'string',
		default: 'px',
	},
	imageBottomSpaceUnit         : {
		type   : 'string',
		default: 'px',
	},
	titleBottomSpaceUnit         : {
		type   : 'string',
		default: 'px',
	},
	metaBottomSpaceUnit          : {
		type   : 'string',
		default: 'px',
	},
	ctaBottomSpaceUnit           : {
		type   : 'string',
		default: 'px',
	},
	paddingBtnUnit               : {
		type   : 'string',
		default: 'px',
	},
	mobilePaddingBtnUnit         : {
		type   : 'string',
		default: 'px',
	},
	tabletPaddingBtnUnit         : {
		type   : 'string',
		default: 'px',
	},
	paddingUnit                  : {
		type   : 'string',
		default: 'px',
	},
	mobilePaddingUnit            : {
		type   : 'string',
		default: 'px',
	},
	tabletPaddingUnit            : {
		type   : 'string',
		default: 'px',
	},
	isPreview                    : {
		type   : 'boolean',
		default: false,
	},
	taxDivider                   : {
		type   : 'string',
		default: ', ',
	},
	titleLetterSpacing           : {
		type   : 'number',
		default: '',
	},
	titleLetterSpacingType       : {
		type   : 'string',
		default: 'px',
	},
	titleLetterSpacingMobile     : {
		type: 'number',
	},
	titleLetterSpacingTablet     : {
		type: 'number',
	},
	metaLetterSpacing            : {
		type   : 'number',
		default: '',
	},
	metaLetterSpacingType        : {
		type   : 'string',
		default: 'px',
	},
	metaLetterSpacingMobile      : {
		type: 'number',
	},
	metaLetterSpacingTablet      : {
		type: 'number',
	},
	ctaLetterSpacing             : {
		type   : 'number',
		default: '',
	},
	ctaLetterSpacingType         : {
		type   : 'string',
		default: 'px',
	},
	ctaLetterSpacingMobile       : {
		type: 'number',
	},
	ctaLetterSpacingTablet       : {
		type: 'number',
	},
	excerptLetterSpacing         : {
		type   : 'number',
		default: '',
	},
	excerptLetterSpacingType     : {
		type   : 'string',
		default: 'px',
	},
	excerptLetterSpacingMobile   : {
		type: 'number',
	},
	excerptLetterSpacingTablet   : {
		type: 'number',
	},
	boxShadowColor               : {
		type   : 'string',
		default: '#00000070',
	},
	boxShadowHOffset             : {
		type   : 'number',
		default: 0,
	},
	boxShadowVOffset             : {
		type   : 'number',
		default: 0,
	},
	boxShadowBlur                : {
		type   : 'number',
		default: '',
	},
	boxShadowSpread              : {
		type   : 'number',
		default: '',
	},
	boxShadowPosition            : {
		type   : 'string',
		default: 'outset',
	},
	boxShadowColorHover          : {
		type   : 'string',
		default: '',
	},
	boxShadowHOffsetHover        : {
		type   : 'number',
		default: 0,
	},
	boxShadowVOffsetHover        : {
		type   : 'number',
		default: 0,
	},
	boxShadowBlurHover           : {
		type   : 'number',
		default: '',
	},
	boxShadowSpreadHover         : {
		type   : 'number',
		default: '',
	},
	boxShadowPositionHover       : {
		type   : 'string',
		default: 'outset',
	},
	overallBorderHColor          : {
		type: 'string',
	},
	borderWidth                  : {
		type   : 'number',
		default: '',
	},
	borderStyle                  : {
		type   : 'string',
		default: 'none',
	},
	borderColor                  : {
		type   : 'string',
		default: '',
	},
	borderHColor                 : {
		type: 'string',
	},
	borderRadius                 : {
		type   : 'number',
		default: '',
	},
	...btnBorderAttributes
}

export default attributes;
