/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';



export default function styling( props ) {
	const {
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
		// heading
		headingFontFamily,
		headingFontWeight,
		headingFontStyle,
		headingFontSize,
		headingColor,
		headingTransform,
		headingDecoration,
		headingFontSizeType,
		headingFontSizeMobile,
		headingFontSizeTablet,
		headingLineHeight,
		headingLineHeightType,
		headingLineHeightMobile,
		headingLineHeightTablet,
		headingTopMargin,
		headingRightMargin,
		headingLeftMargin,
		headingBottomMargin,
		headingTopMarginTablet,
		headingRightMarginTablet,
		headingLeftMarginTablet,
		headingBottomMarginTablet,
		headingTopMarginMobile,
		headingRightMarginMobile,
		headingLeftMarginMobile,
		headingBottomMarginMobile,
		headingMarginUnit,
		headingMarginUnitTablet,
		headingMarginUnitMobile,
		// overlay
		overlayBackground,
		// seperator
		seperatorStyle,
		seperatorWidth,
		separatorWidthType,
		seperatorThickness,
		seperatorThicknessUnit,
		seperatorPosition,
		seperatorColor,
		seperatorTopMargin,
		seperatorRightMargin,
		seperatorLeftMargin,
		seperatorBottomMargin,
		seperatorTopMarginTablet,
		seperatorRightMarginTablet,
		seperatorLeftMarginTablet,
		seperatorBottomMarginTablet,
		seperatorTopMarginMobile,
		seperatorRightMarginMobile,
		seperatorLeftMarginMobile,
		seperatorBottomMarginMobile,
		seperatorMarginUnit,
		seperatorMarginUnitTablet,
		seperatorMarginUnitMobile,
		seperatorMarginLink,
	} = props.attributes;

	const selectors = {
		' .wp-block-uagb-image img':{
			'width': 'inherit',
			'height': 'inherit',
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
		},
		' .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading': {
			'font-family': headingFontFamily,
			'font-style' : headingFontStyle,
			'text-decoration': headingDecoration,
			'text-transform': headingTransform,
			'font-weight': headingFontWeight,
			'font-size': generateCSSUnit(
				headingFontSize,
				headingFontSizeType
			),
			'line-height': generateCSSUnit(
				headingLineHeight,
				headingLineHeightType
			),
			'color': headingColor,
			'margin-top': generateCSSUnit(
				headingTopMargin,
				headingMarginUnit
			),
			'margin-right': generateCSSUnit(
				headingRightMargin,
				headingMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				headingBottomMargin,
				headingMarginUnit
			),
			'margin-left': generateCSSUnit(
				headingLeftMargin,
				headingMarginUnit
			),
		},
		' .wp-block-uagb-image--layout-overlay__inner': {
			'background': overlayBackground
		},
		// Seperator
		' .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator': {
			'width': generateCSSUnit( seperatorWidth, separatorWidthType ),
			'border-top-width': generateCSSUnit(
				seperatorThickness,
				seperatorThicknessUnit
			),
			'border-top-color': seperatorColor,
			'border-top-style': seperatorStyle,
			'margin-bottom': generateCSSUnit( seperatorBottomMargin, seperatorMarginUnit ),
			'margin-top': generateCSSUnit( seperatorTopMargin, seperatorMarginUnit ),
			'margin-left': generateCSSUnit( seperatorLeftMargin, seperatorMarginUnit ),
			'margin-right': generateCSSUnit( seperatorRightMargin, seperatorMarginUnit ),
		},
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

	tablet_selectors[' .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading'] = {
        'font-size': generateCSSUnit(
            headingFontSizeTablet,
            headingFontSizeType
        ),
        'line-height': generateCSSUnit(
            headingLineHeightTablet,
            headingLineHeightType
        ),
		'margin-top': generateCSSUnit(
			headingTopMarginTablet,
			headingMarginUnitTablet
		),
		'margin-right': generateCSSUnit(
			headingRightMarginTablet,
			headingMarginUnitTablet
		),
		'margin-bottom': generateCSSUnit(
			headingBottomMarginTablet,
			headingMarginUnitTablet
		),
		'margin-left': generateCSSUnit(
			headingLeftMarginTablet,
			headingMarginUnitTablet
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

	mobile_selectors[' .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading'] = {
        'font-size': generateCSSUnit(
            headingFontSizeMobile,
            headingFontSizeType
        ),
        'line-height': generateCSSUnit(
            headingLineHeightMobile,
            headingLineHeightType
        ),
		'margin-top': generateCSSUnit(
			headingTopMarginMobile,
			headingMarginUnitMobile
		),
		'margin-right': generateCSSUnit(
			headingRightMarginMobile,
			headingMarginUnitMobile
		),
		'margin-bottom': generateCSSUnit(
			headingBottomMarginMobile,
			headingMarginUnitMobile
		),
		'margin-left': generateCSSUnit(
			headingLeftMarginMobile,
			headingMarginUnitMobile
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
