/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBorderCSS from '@Controls/generateBorderCSS';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
 
export default function styling( props ) {

    const { attributes } = props;

    const {
        // digit.
		digitFontFamily,
		digitFontWeight,
		digitFontStyle,
		digitFontSize,
		digitColor,
		digitTransform,
		digitDecoration,
		digitFontSizeType,
		digitFontSizeMobile,
		digitFontSizeTablet,
		digitLineHeight,
		digitLineHeightType,
		digitLineHeightMobile,
		digitLineHeightTablet,
		digitTopMargin,
		digitRightMargin,
		digitLeftMargin,
		digitBottomMargin,
		digitTopMarginTablet,
		digitRightMarginTablet,
		digitLeftMarginTablet,
		digitBottomMarginTablet,
		digitTopMarginMobile,
		digitRightMarginMobile,
		digitLeftMarginMobile,
		digitBottomMarginMobile,
		digitMarginUnit,
		digitMarginUnitTablet,
		digitMarginUnitMobile,
        // label.
		labelFontFamily,
		labelFontWeight,
		labelFontStyle,
		labelFontSize,
		labelColor,
		labelTransform,
		labelDecoration,
		labelFontSizeType,
		labelFontSizeMobile,
		labelFontSizeTablet,
		labelLineHeight,
		labelLineHeightType,
		labelLineHeightMobile,
		labelLineHeightTablet,
		labelTopMargin,
		labelRightMargin,
		labelLeftMargin,
		labelBottomMargin,
		labelTopMarginTablet,
		labelRightMarginTablet,
		labelLeftMarginTablet,
		labelBottomMarginTablet,
		labelTopMarginMobile,
		labelRightMarginMobile,
		labelLeftMarginMobile,
		labelBottomMarginMobile,
		labelMarginUnit,
		labelMarginUnitTablet,
		labelMarginUnitMobile,
    } = attributes;

    const blockName = props.name.replace( 'uagb/', '' );

	const tabletSelectors = {};
	const mobileSelectors = {};

    const selectors = {

        '.wp-block-uagb-countdown .wp-block-uagb-countdown__time':{
			'font-family': digitFontFamily,
			'font-style' : digitFontStyle,
			'text-decoration': digitDecoration,
			'text-transform': digitTransform,
			'font-weight': digitFontWeight,
			'font-size': generateCSSUnit( digitFontSize, digitFontSizeType ),
			'line-height': generateCSSUnit( digitLineHeight, digitLineHeightType ),
			'color': digitColor,
			'margin-top': generateCSSUnit( digitTopMargin, digitMarginUnit ),
			'margin-right': generateCSSUnit( digitRightMargin, digitMarginUnit ),
			'margin-bottom': generateCSSUnit( digitBottomMargin, digitMarginUnit ),
			'margin-left': generateCSSUnit( digitLeftMargin, digitMarginUnit ),
		},

        '.wp-block-uagb-countdown .wp-block-uagb-countdown__label': {
            'font-family': labelFontFamily,
			'font-style' : labelFontStyle,
			'text-decoration': labelDecoration,
			'text-transform': labelTransform,
			'font-weight': labelFontWeight,
			'font-size': generateCSSUnit( labelFontSize, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeight, labelLineHeightType ),
			'color': labelColor,
			'margin-top': generateCSSUnit( labelTopMargin, labelMarginUnit ),
			'margin-right': generateCSSUnit( labelRightMargin, labelMarginUnit ),
			'margin-bottom': generateCSSUnit( labelBottomMargin, labelMarginUnit ),
			'margin-left': generateCSSUnit( labelLeftMargin, labelMarginUnit ),
        },

    };

    tabletSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__time'] = {
        'font-size': generateCSSUnit( digitFontSizeTablet, digitFontSizeType ),
        'line-height': generateCSSUnit( digitLineHeightTablet, digitLineHeightType ),
        'margin-top': generateCSSUnit( digitTopMarginTablet, digitMarginUnitTablet ),
        'margin-right': generateCSSUnit( digitRightMarginTablet, digitMarginUnitTablet ),
        'margin-bottom': generateCSSUnit( digitBottomMarginTablet, digitMarginUnitTablet ),
        'margin-left': generateCSSUnit( digitLeftMarginTablet, digitMarginUnitTablet ),
    };

    tabletSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__label'] = {
        'font-size': generateCSSUnit( labelFontSizeTablet, labelFontSizeType ),
        'line-height': generateCSSUnit( labelLineHeightTablet, labelLineHeightType ),
        'margin-top': generateCSSUnit( labelTopMarginTablet, labelMarginUnitTablet ),
        'margin-right': generateCSSUnit( labelRightMarginTablet, labelMarginUnitTablet ),
        'margin-bottom': generateCSSUnit( labelBottomMarginTablet, labelMarginUnitTablet ),
        'margin-left': generateCSSUnit( labelLeftMarginTablet, labelMarginUnitTablet ),
    };

    mobileSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__time'] = {
        'font-size': generateCSSUnit( digitFontSizeMobile, digitFontSizeType ),
        'line-height': generateCSSUnit( digitLineHeightMobile, digitLineHeightType ),
        'margin-top': generateCSSUnit( digitTopMarginMobile, digitMarginUnitMobile ),
        'margin-right': generateCSSUnit( digitRightMarginMobile, digitMarginUnitMobile ),
        'margin-bottom': generateCSSUnit( digitBottomMarginMobile, digitMarginUnitMobile ),
        'margin-left': generateCSSUnit( digitLeftMarginMobile, digitMarginUnitMobile ),
    };

    mobileSelectors['.wp-block-uagb-countdown .wp-block-uagb-countdown__label'] = {
        'font-size': generateCSSUnit( labelFontSizeMobile, labelFontSizeType ),
        'line-height': generateCSSUnit( labelLineHeightMobile, labelLineHeightType ),
        'margin-top': generateCSSUnit( labelTopMarginMobile, labelMarginUnitMobile ),
        'margin-right': generateCSSUnit( labelRightMarginMobile, labelMarginUnitMobile ),
        'margin-bottom': generateCSSUnit( labelBottomMarginMobile, labelMarginUnitMobile ),
        'margin-left': generateCSSUnit( labelLeftMarginMobile, labelMarginUnitMobile ),
    };

    const baseSelector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

    let styling_css = generateCSS( selectors, baseSelector );

    styling_css += generateCSS(
        tabletSelectors,
        `${ baseSelector }.uagb-editor-preview-mode-tablet`,
        true,
        'tablet'
    );


    styling_css += generateCSS(
        mobileSelectors,
        `${ baseSelector }.uagb-editor-preview-mode-mobile`,
        true,
        'mobile'
    );

    return styling_css;
}
 