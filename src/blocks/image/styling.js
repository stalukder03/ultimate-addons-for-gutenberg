/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';



export default function styling( props ) {
	const {
		width,
		height,
		align,
		captionFontFamily,
		captionFontWeight,
		captionFontStyle,
		captionFontSize,
		captionColor,
		captionTransform,
		captionDecoration,
		captionFontSizeType,
		captionFontSizeMobile,
		captionFontSizeTablet,
		captionLineHeight,
		captionLineHeightType,
		captionLineHeightMobile,
		captionLineHeightTablet,
		captionTopMargin,
		captionRightMargin,
		captionLeftMargin,
		captionBottomMargin,
		captionTopMarginTablet,
		captionRightMarginTablet,
		captionLeftMarginTablet,
		captionBottomMarginTablet,
		captionTopMarginMobile,
		captionRightMarginMobile,
		captionLeftMarginMobile,
		captionBottomMarginMobile,
		captionMarginUnit,
		captionMarginUnitTablet,
		captionMarginUnitMobile,
	} = props.attributes;

	const selectors = {
		'.wp-block-uagb-image img ':{
			'width': width || 'inherit',
			'height': height || 'inherit',
		},
		'.wp-block-uagb-image figcaption': {
			'font-family': captionFontFamily,
			'font-style' : captionFontStyle,
			'text-decoration': captionDecoration,
			'text-transform': captionTransform,
			'font-weight': captionFontWeight,
			'font-size': generateCSSUnit(
				captionFontSize,
				captionFontSizeType
			),
			'line-height': generateCSSUnit(
				captionLineHeight,
				captionLineHeightType
			),
			'color': captionColor,
			'margin-top': generateCSSUnit(
				captionTopMargin,
				captionMarginUnit
			),
			'margin-right': generateCSSUnit(
				captionRightMargin,
				captionMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				captionBottomMargin,
				captionMarginUnit
			),
			'margin-left': generateCSSUnit(
				captionLeftMargin,
				captionMarginUnit
			),
		}
	}

	if( align === 'right' ){
		selectors[ '.wp-block-uagb-image-align-right' ] = {
			'float': 'right'
		}
	}

	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	const tablet_selectors = {};
	const mobile_selectors = {};

	tablet_selectors[' .wp-block-uagb-image figcaption'] = {
        'font-size': generateCSSUnit(
            captionFontSizeTablet,
            captionFontSizeType
        ),
        'line-height': generateCSSUnit(
            captionLineHeightTablet,
            captionLineHeightType
        ),
		'margin-top': generateCSSUnit(
			captionTopMarginTablet,
			captionMarginUnitTablet
		),
		'margin-right': generateCSSUnit(
			captionRightMarginTablet,
			captionMarginUnitTablet
		),
		'margin-bottom': generateCSSUnit(
			captionBottomMarginTablet,
			captionMarginUnitTablet
		),
		'margin-left': generateCSSUnit(
			captionLeftMarginTablet,
			captionMarginUnitTablet
		),
    }

	mobile_selectors[' .wp-block-uagb-image figcaption'] = {
        'font-size': generateCSSUnit(
            captionFontSizeMobile,
            captionFontSizeType
        ),
        'line-height': generateCSSUnit(
            captionLineHeightMobile,
            captionLineHeightType
        ),
		'margin-top': generateCSSUnit(
			captionTopMarginMobile,
			captionMarginUnitMobile
		),
		'margin-right': generateCSSUnit(
			captionRightMarginMobile,
			captionMarginUnitMobile
		),
		'margin-bottom': generateCSSUnit(
			captionBottomMarginMobile,
			captionMarginUnitMobile
		),
		'margin-left': generateCSSUnit(
			captionLeftMarginMobile,
			captionMarginUnitMobile
		),
    }

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS(
        tablet_selectors,
        `${ base_selector }.uagb-editor-preview-mode-tablet`,
        true,
        'tablet'
    );


    styling_css += generateCSS(
        mobile_selectors,
        `${ base_selector }.uagb-editor-preview-mode-mobile`,
        true,
        'mobile'
    );

	return styling_css;
}
