/**
 * BLOCK: Countdown - Attributes
 */
import { getBorderAttributes } from '@Controls/generateAttributes';
import { __ } from '@wordpress/i18n';

const boxBorderAttributes = getBorderAttributes( 'box' );

const attributes = {
	block_id: {
		type: 'string',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	timerType: {
		type: 'string',
		default: 'date',  // date, evergreen, recurring.
	},
	endDateTime: {
		type: 'string',
		default: '2023-01-01T00:00:00Z',
	},
	// Labels.
	showLabels: {
		type: 'boolean',
		default: true,
	},
	labelDays: {
		type: 'string',
		default: __( 'DAYS', 'ultimate-addons-for-gutenberg' ),
	},
	labelHours: {
		type: 'string',
		default: __( 'HOURS', 'ultimate-addons-for-gutenberg' ),
	},
	labelMinutes: {
		type: 'string',
		default: __( 'MINUTES', 'ultimate-addons-for-gutenberg' ),
	},
	labelSeconds: {
		type: 'string',
		default: __( 'SECONDS', 'ultimate-addons-for-gutenberg' ),
	},
	// Separator.
	showSeparator: {
		type: 'boolean',
		default: true,
	},
	separatorType: {
		type: 'string',
		default: 'colon',  // colon, line
	},

	// Countdown Expiry Settings.
		// zero - keep at zero
		// hide - hide timer
		// redirect - redirect to url
		// content - replace with innerblocks based content
	timerEndAction: {
		type: 'string',
		default: 'zero',
	},
	redirectURL: {
		type: 'string',
		default: '',
	},

	// <------------------ STYLE TAB ------------------>

	// Digit.
	digitLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	digitColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'digit-color'
		},
	},
	digitFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-font-family'
		},
	},
	digitFontWeight: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-font-weight'
		},
	},
	digitFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-font-style'
		},
	},
	digitTransform: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-transform'
		}
	},
	digitDecoration: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-decoration'
		}
	},
	digitFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-font-size-type'
		},
	},
	digitLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-line-height-type'
		},
	},
	digitFontSize: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-font-size'
		},
	},
	digitFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-font-tablet'
		},
	},
	digitFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-font-size-mobile'
		},
	},
	digitLineHeight: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-line-height'
		},
	},
	digitLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-line-height-tablet'
		},
	},
	digitLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-line-height-mobile'
		},
	},

	// Digit Margin.
	digitTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	digitRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	digitLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	digitBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	digitTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	digitRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	digitLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	digitBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	digitTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	digitRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	digitLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	digitBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	digitMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	digitMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	digitMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	digitMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},

	// Label.
	labelLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	labelColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'label-color'
		},
	},
	labelFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'label-font-family'
		},
	},
	labelFontWeight: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'label-font-weight'
		},
	},
	labelFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'label-font-style'
		},
	},
	labelTransform: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'label-transform'
		}
	},
	labelDecoration: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'label-decoration'
		}
	},
	labelFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'label-font-size-type'
		},
	},
	labelLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'label-line-height-type'
		},
	},
	labelFontSize: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'label-font-size'
		},
	},
	labelFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'label-font-tablet'
		},
	},
	labelFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'label-font-size-mobile'
		},
	},
	labelLineHeight: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'label-line-height'
		},
	},
	labelLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'label-line-height-tablet'
		},
	},
	labelLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'label-line-height-mobile'
		},
	},

	// Label Margin.
	labelTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	labelRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	labelLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	labelBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	labelTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	labelRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	labelLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	labelBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	labelTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	labelRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	labelLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	labelBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	labelMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	labelMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	labelMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	labelMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Block Margin.
	blockTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	blockTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Block Padding.
	blockTopPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	blockTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockPaddingUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockPaddingUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockPaddingLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Box Padding.
	boxTopPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	boxRightPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	boxLeftPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	boxBottomPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	boxTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	boxRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	boxLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	boxBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	boxTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	boxRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	boxLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	boxBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	boxPaddingUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	boxPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	boxPaddingUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	boxPaddingLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Box Align.
	boxAlign: {
		type: 'string',
		default: 'center',
	},
	boxAlignTablet: {
		type: 'string',
	},
	boxAlignMobile: {
		type: 'string',
	},
};

export default attributes;
