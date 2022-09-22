/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

export default function styling( props ) {
	const {attributes} = props
	const {
		align,
		layout,
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
		// Number
		numberFontFamily,
		numberFontWeight,
		numberFontStyle,
		numberFontSize,
		numberColor,
		numberTransform,
		numberDecoration,
		numberFontSizeType,
		numberFontSizeMobile,
		numberFontSizeTablet,
		numberLineHeight,
		numberLineHeightType,
		numberLineHeightMobile,
		numberLineHeightTablet,
		numberTopMargin,
		numberRightMargin,
		numberLeftMargin,
		numberBottomMargin,
		numberTopMarginTablet,
		numberRightMarginTablet,
		numberLeftMarginTablet,
		numberBottomMarginTablet,
		numberTopMarginMobile,
		numberRightMarginMobile,
		numberLeftMarginMobile,
		numberBottomMarginMobile,
		numberMarginUnit,
		numberMarginUnitTablet,
		numberMarginUnitMobile,
		// prefix
		prefixRightDistance,
		prefixRightDistanceTablet,
		prefixRightDistanceMobile,
		suffixLeftDistance,
		suffixLeftDistanceTablet,
		suffixLeftDistanceMobile,
		// circle
		circleSize,
		circleStokeSize,
		circleForeground,
		circleBackground,
		// bar
		barSize,
		barForeground,
		barBackground,
		// Block Margin
		blockTopMargin,
		blockRightMargin,
		blockLeftMargin,
		blockBottomMargin,
		blockTopMarginTablet,
		blockRightMarginTablet,
		blockLeftMarginTablet,
		blockBottomMarginTablet,
		blockTopMarginMobile,
		blockRightMarginMobile,
		blockLeftMarginMobile,
		blockBottomMarginMobile,
		blockMarginUnit,
		blockMarginUnitTablet,
		blockMarginUnitMobile,
		// Block Padding
		blockTopPadding,
		blockRightPadding,
		blockLeftPadding,
		blockBottomPadding,
		blockTopPaddingTablet,
		blockRightPaddingTablet,
		blockLeftPaddingTablet,
		blockBottomPaddingTablet,
		blockTopPaddingMobile,
		blockRightPaddingMobile,
		blockLeftPaddingMobile,
		blockBottomPaddingMobile,
		blockPaddingUnit,
		blockPaddingUnitTablet,
		blockPaddingUnitMobile,
	} = attributes;

	const blockName = props.name.replace( 'uagb/', '' );

	// <---------- FALLBACKS ---------->

	// Circle, circle stroke and bar size.
	const circleSizeFallback        = getFallbackNumber( circleSize, 'circleSize', blockName );
	const circleStrokeSizeFallback  = getFallbackNumber( circleStokeSize, 'circleStokeSize', blockName );
	const barSizeFallback           = getFallbackNumber( barSize, 'barSize', blockName );

	// Prefix spacing fallbacks.
	const prefixRightDistanceFallback       = getFallbackNumber( prefixRightDistance, 'prefixRightDistance', blockName );
	const prefixRightDistanceFallbackTablet = isNaN( prefixRightDistanceTablet ) ? prefixRightDistance : prefixRightDistanceTablet;
	const prefixRightDistanceFallbackMobile = isNaN( prefixRightDistanceMobile ) ? prefixRightDistanceTablet : prefixRightDistanceMobile;

	// Suffix spacing fallbacks.
	const suffixLeftDistanceFallback       = getFallbackNumber( suffixLeftDistance, 'suffixLeftDistance', blockName );
	const suffixLeftDistanceFallbackTablet = isNaN( suffixLeftDistanceTablet ) ? suffixLeftDistance : suffixLeftDistanceTablet;
	const suffixLeftDistanceFallbackMobile = isNaN( suffixLeftDistanceMobile ) ? suffixLeftDistanceTablet : suffixLeftDistanceMobile;	

	const selectors = {
		'.wp-block-uagb-counter':{
			'text-align': align,
			'margin-top': generateCSSUnit(
				blockTopMargin,
				blockMarginUnit
			),
			'margin-right': generateCSSUnit(
				blockRightMargin,
				blockMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				blockBottomMargin,
				blockMarginUnit
			),
			'margin-left': generateCSSUnit(
				blockLeftMargin,
				blockMarginUnit
			),
			'padding-top': generateCSSUnit(
				blockTopPadding,
				blockPaddingUnit
			),
			'padding-right': generateCSSUnit(
				blockRightPadding,
				blockPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				blockBottomPadding,
				blockPaddingUnit
			),
			'padding-left': generateCSSUnit(
				blockLeftPadding,
				blockPaddingUnit
			),
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__title':{
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
		'.wp-block-uagb-counter .wp-block-uagb-counter__number': {
			'font-family': numberFontFamily,
			'font-style' : numberFontStyle,
			'text-decoration': numberDecoration,
			'text-transform': numberTransform,
			'font-weight': numberFontWeight,
			'font-size': generateCSSUnit(
				numberFontSize,
				numberFontSizeType
			),
			'line-height': generateCSSUnit(
				numberLineHeight,
				numberLineHeightType
			),
			'color': numberColor,
			'margin-top': generateCSSUnit(
				numberTopMargin,
				numberMarginUnit
			),
			'margin-right': generateCSSUnit(
				numberRightMargin,
				numberMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				numberBottomMargin,
				numberMarginUnit
			),
			'margin-left': generateCSSUnit(
				numberLeftMargin,
				numberMarginUnit
			),
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix': {
			'margin-right': generateCSSUnit(
				prefixRightDistanceFallback,
				'px'
			)
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix': {
			'margin-left': generateCSSUnit(
				suffixLeftDistanceFallback,
				'px'
			)
		},
		'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container': {
			'width': generateCSSUnit( circleSizeFallback, 'px' ),
			'height': generateCSSUnit( circleSizeFallback, 'px' )
		},
		'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg circle': {
			'stroke-width': generateCSSUnit( circleStrokeSizeFallback, 'px' ),
			'stroke': circleForeground,
		},
		'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg #bar': {
			'stroke': circleBackground
		},
		'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container': {
			'background': barForeground,
			'margin-top'   : generateCSSUnit( numberTopMargin, numberMarginUnit ),
			'margin-right' : generateCSSUnit( numberRightMargin, numberMarginUnit ),
			'margin-bottom': generateCSSUnit( numberBottomMargin, numberMarginUnit ),
			'margin-left'  : generateCSSUnit( numberLeftMargin, numberMarginUnit ),
		},
		'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container .wp-block-uagb-counter__number': {
			'height': generateCSSUnit( barSizeFallback, 'px' ),
			'background': barBackground,
		}
	}



	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	const tablet_selectors = {};
	const mobile_selectors = {};

	tablet_selectors['.wp-block-uagb-counter'] = {
		'margin-top': generateCSSUnit(
			blockTopMarginTablet,
			blockMarginUnitTablet
		),
		'margin-right': generateCSSUnit(
			blockRightMarginTablet,
			blockMarginUnitTablet
		),
		'margin-bottom': generateCSSUnit(
			blockBottomMarginTablet,
			blockMarginUnitTablet
		),
		'margin-left': generateCSSUnit(
			blockLeftMarginTablet,
			blockMarginUnitTablet
		),
		'padding-top': generateCSSUnit(
			blockTopPaddingTablet,
			blockPaddingUnitTablet
		),
		'padding-right': generateCSSUnit(
			blockRightPaddingTablet,
			blockPaddingUnitTablet
		),
		'padding-bottom': generateCSSUnit(
			blockBottomPaddingTablet,
			blockPaddingUnitTablet
		),
		'padding-left': generateCSSUnit(
			blockLeftPaddingTablet,
			blockPaddingUnitTablet
		),
    }

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__title'] = {
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

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number'] = {
		'font-size': generateCSSUnit(
			numberFontSizeTablet,
			numberFontSizeType
		),
		'line-height': generateCSSUnit(
			numberLineHeightTablet,
			numberLineHeightType
		),
		'margin-top': generateCSSUnit(
			numberTopMarginTablet,
			numberMarginUnitTablet
		),
		'margin-right': generateCSSUnit(
			numberRightMarginTablet,
			numberMarginUnitTablet
		),
		'margin-bottom': generateCSSUnit(
			numberBottomMarginTablet,
			numberMarginUnitTablet
		),
		'margin-left': generateCSSUnit(
			numberLeftMarginTablet,
			numberMarginUnitTablet
		),
	}

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix'] = {
		'margin-right': generateCSSUnit(
			prefixRightDistanceFallbackTablet,
			'px'
		)
	}

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix'] = {
		'margin-left': generateCSSUnit(
			suffixLeftDistanceFallbackTablet,
			'px'
		)
	}

	tablet_selectors['.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container'] = {
		'margin-top'   : generateCSSUnit( numberTopMarginTablet, numberMarginUnitTablet ),
		'margin-right' : generateCSSUnit( numberRightMarginTablet, numberMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( numberBottomMarginTablet, numberMarginUnitTablet ),
		'margin-left'  : generateCSSUnit( numberLeftMarginTablet, numberMarginUnitTablet ),
	}



	mobile_selectors['.wp-block-uagb-counter'] = {
		'margin-top': generateCSSUnit(
			blockTopMarginMobile,
			blockMarginUnitMobile
		),
		'margin-right': generateCSSUnit(
			blockRightMarginMobile,
			blockMarginUnitMobile
		),
		'margin-bottom': generateCSSUnit(
			blockBottomMarginMobile,
			blockMarginUnitMobile
		),
		'margin-left': generateCSSUnit(
			blockLeftMarginMobile,
			blockMarginUnitMobile
		),
		'padding-top': generateCSSUnit(
			blockTopPaddingMobile,
			blockPaddingUnitMobile
		),
		'padding-right': generateCSSUnit(
			blockRightPaddingMobile,
			blockPaddingUnitMobile
		),
		'padding-bottom': generateCSSUnit(
			blockBottomPaddingMobile,
			blockPaddingUnitTablet
		),
		'padding-left': generateCSSUnit(
			blockLeftPaddingMobile,
			blockPaddingUnitMobile
		),
    }

	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__title'] = {
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

	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number'] = {
		'font-size': generateCSSUnit(
			numberFontSizeMobile,
			numberFontSizeType
		),
		'line-height': generateCSSUnit(
			numberLineHeightMobile,
			numberLineHeightType
		),
		'margin-top': generateCSSUnit(
			numberTopMarginMobile,
			numberMarginUnitMobile
		),
		'margin-right': generateCSSUnit(
			numberRightMarginMobile,
			numberMarginUnitMobile
		),
		'margin-bottom': generateCSSUnit(
			numberBottomMarginMobile,
			numberMarginUnitMobile
		),
		'margin-left': generateCSSUnit(
			numberLeftMarginMobile,
			numberMarginUnitMobile
		),
	}

	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix'] = {
		'margin-right': generateCSSUnit(
			prefixRightDistanceFallbackMobile,
			'px'
		)
	}

	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix'] = {
		'margin-left': generateCSSUnit(
			suffixLeftDistanceFallbackMobile,
			'px'
		)
	}

	mobile_selectors['.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container'] = {
		'margin-top'   : generateCSSUnit( numberTopMarginMobile, numberMarginUnitMobile ),
		'margin-right' : generateCSSUnit( numberRightMarginMobile, numberMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( numberBottomMarginMobile, numberMarginUnitMobile ),
		'margin-left'  : generateCSSUnit( numberLeftMarginMobile, numberMarginUnitMobile ),
	}

	// In case of 'Bar' layout, we need to add margin to '.wp-block-uagb-counter-bars-container' element and remove the margin from the inner-element.
	if ( layout === 'bars' ) {

		const num_container = '.wp-block-uagb-counter .wp-block-uagb-counter__number';

		selectors[ num_container ]['margin-top']    = 'unset';
		selectors[ num_container ]['margin-bottom'] = 'unset';
		selectors[ num_container ]['margin-left']   = 'unset';
		selectors[ num_container ]['margin-right']  = 'unset';

		tablet_selectors[ num_container ]['margin-top']    = 'unset';
		tablet_selectors[ num_container ]['margin-bottom'] = 'unset';
		tablet_selectors[ num_container ]['margin-left']   = 'unset';
		tablet_selectors[ num_container ]['margin-right']  = 'unset';

		mobile_selectors[ num_container ]['margin-top']    = 'unset';
		mobile_selectors[ num_container ]['margin-bottom'] = 'unset';
		mobile_selectors[ num_container ]['margin-left']   = 'unset';
		mobile_selectors[ num_container ]['margin-right']  = 'unset';

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
