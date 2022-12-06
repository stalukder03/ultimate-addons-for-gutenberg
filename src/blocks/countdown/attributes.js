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
		UAGCopyPaste: {
			styleType: 'countdown-show-labels'
		},
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
		UAGCopyPaste: {
			styleType: 'countdown-show-separator'
		},
	},
	separatorType: {
		type: 'string',
		default: 'colon',  // colon, line
		UAGCopyPaste: {
			styleType: 'countdown-separator-type'
		},
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
		UAGCopyPaste: {
			styleType: 'countdown-digit-top-margin-desktop'
		},
	},
	digitRightMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-right-margin-desktop'
		},
	},
	digitLeftMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-left-margin-desktop'
		},
	},
	digitBottomMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-bottom-margin-desktop'
		},
	},
	digitTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-top-margin-desktop'
		},
	},
	digitRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-right-margin-tablet'
		},
	},
	digitLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-left-margin-tablet'
		},
	},
	digitBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-bottom-margin-tablet'
		},
	},
	digitTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-top-margin-mobile'
		},
	},
	digitRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-right-margin-mobile'
		},
	},
	digitLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-left-margin-mobile'
		},
	},
	digitBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-bottom-margin-mobile'
		},
	},
	digitMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-margin-unit'
		},
	},
	digitMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-margin-unit-tablet'
		},
	},
	digitMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-digit-margin-unit-mobile'
		},
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
		UAGCopyPaste: {
			styleType: 'countdown-label-top-margin-desktop'
		},
	},
	labelRightMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-right-margin-desktop'
		},
	},
	labelLeftMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-left-margin-desktop'
		},
	},
	labelBottomMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-bottom-margin-desktop'
		},
	},
	labelTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-top-margin-desktop'
		},
	},
	labelRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-right-margin-tablet'
		},
	},
	labelLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-left-margin-tablet'
		},
	},
	labelBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-bottom-margin-tablet'
		},
	},
	labelTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-top-margin-mobile'
		},
	},
	labelRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-right-margin-mobile'
		},
	},
	labelLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-left-margin-mobile'
		},
	},
	labelBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-bottom-margin-mobile'
		},
	},
	labelMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-margin-unit'
		},
	},
	labelMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-margin-unit-tablet'
		},
	},
	labelMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-label-margin-unit-mobile'
		},
	},
	labelMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Separator Styles.
	separatorLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	separatorColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'separator-color'
		},
	},
	separatorFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-font-family'
		},
	},
	separatorFontWeight: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-font-weight'
		},
	},
	separatorFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-font-style'
		},
	},
	separatorTransform: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-transform'
		}
	},
	separatorDecoration: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-decoration'
		}
	},
	separatorFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-font-size-type'
		},
	},
	separatorLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-line-height-type'
		},
	},
	separatorFontSize: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-font-size'
		},
	},
	separatorFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-font-tablet'
		},
	},
	separatorFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-font-size-mobile'
		},
	},
	separatorLineHeight: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-line-height'
		},
	},
	separatorLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-line-height-tablet'
		},
	},
	separatorLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-line-height-mobile'
		},
	},
	separatorRightSpacing: {
		type: 'number',
		default: 26,
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-right-spacing'
		},
	},
	separatorRightSpacingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-right-spacing-tablet'
		},
	},
	separatorRightSpacingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-right-spacing-mobile'
		},
	},
	separatorTopSpacing: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-top-spacing'
		},
	},
	separatorTopSpacingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-top-spacing-tablet'
		},
	},
	separatorTopSpacingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-top-spacing-mobile'
		},
	},
	// Block Margin.
	blockTopMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-margin-desktop'
		},
	},
	blockRightMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-margin-desktop'
		},
	},
	blockLeftMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-margin-desktop'
		},
	},
	blockBottomMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-margin-desktop'
		},
	},
	blockTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-margin-desktop'
		},
	},
	blockRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-margin-tablet'
		},
	},
	blockLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-margin-tablet'
		},
	},
	blockBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-margin-tablet'
		},
	},
	blockTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-margin-mobile'
		},
	},
	blockRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-margin-mobile'
		},
	},
	blockLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-margin-mobile'
		},
	},
	blockBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-margin-mobile'
		},
	},
	blockMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-margin-unit'
		},
	},
	blockMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-margin-unit-tablet'
		},
	},
	blockMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-margin-unit-mobile'
		},
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
		UAGCopyPaste: {
			styleType: 'block-top-padding-desktop'
		},
	},
	blockRightPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-padding-desktop'
		},
	},
	blockLeftPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-padding-desktop'
		},
	},
	blockBottomPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-desktop'
		},
	},
	blockTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-padding-tablet'
		},
	},
	blockRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-padding-tablet'
		},
	},
	blockLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-padding-tablet'
		},
	},
	blockBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-tablet'
		},
	},
	blockTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-padding-mobile'
		},
	},
	blockRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-padding-mobile'
		},
	},
	blockLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-padding-mobile'
		},
	},
	blockBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-mobile'
		},
	},
	blockPaddingUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-padding-unit'
		},
	},
	blockPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-padding-unit-tablet'
		},
	},
	blockPaddingUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-padding-unit-mobile'
		},
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
		UAGCopyPaste: {
			styleType: 'countdown-box-top-padding-desktop'
		},
	},
	boxRightPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-right-padding-desktop'
		},
	},
	boxLeftPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-left-padding-desktop'
		},
	},
	boxBottomPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-bottom-padding-desktop'
		},
	},
	boxTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-top-padding-tablet'
		},
	},
	boxRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-right-padding-tablet'
		},
	},
	boxLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-left-padding-tablet'
		},
	},
	boxBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-bottom-padding-tablet'
		},
	},
	boxTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-top-padding-mobile'
		},
	},
	boxRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-right-padding-mobile'
		},
	},
	boxLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-left-padding-mobile'
		},
	},
	boxBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-bottom-padding-mobile'
		},
	},
	boxPaddingUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-padding-unit'
		},
	},
	boxPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-padding-unit-tablet'
		},
	},
	boxPaddingUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-padding-unit-mobile'
		},
	},
	boxPaddingLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Overall Align.
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		},
	},
	alignTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet'
		},
	},
	alignMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile'
		},
	},
	// Box Align.
	boxAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'countdown-box-alignment'
		},
	},
	boxAlignTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'countdown-box-alignmen-tablet'
		},
	},
	boxAlignMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'countdown-box-alignment-mobile'
		},
	},
	// Box Spacing.
	boxSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'countdown-box-gap'
		},
	},
	boxSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'countdown-box-gap-tablet'
		},
	},
	boxSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'countdown-box-gap-mobile'
		},
	},
	// Box Flex.
	boxFlex: {
		type: 'string',
		default: 'column',
		UAGCopyPaste: {
			styleType: 'countdown-box-flex-direction'
		},
	},
	boxFlexTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'countdown-box-flex-direction-tablet'
		},
	},
	boxFlexMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'countdown-box-flex-direction-mobile'
		},
	},
	// Box Background.
	boxBgType: {
		type: 'string',
		default: 'transparent',
		UAGCopyPaste: {
			styleType: 'countdown-box-bg-type'
		},
	},
	boxBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'countdown-box-bg-color'
		},
	},
	// Box Shadow for Boxes.
	boxShadowColor: {
		type: 'string',
		default: '#00000070',
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-color'
		},
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-hoffset'
		},
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-voffset'
		},
	},
	boxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-blur'
		},
	},
	boxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-spread'
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-position'
		},
	},

	boxShadowColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-color-hover'
		},
	},
	boxShadowHOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-hoffset-hover'
		},
	},
	boxShadowVOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-voffset-hover'
		},
	},
	boxShadowBlurHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-blur-hover'
		},
	},
	boxShadowSpreadHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-spread-hover'
		},
	},
	boxShadowPositionHover: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-position-hover'
		},
	},
	...boxBorderAttributes,
};

export default attributes;
