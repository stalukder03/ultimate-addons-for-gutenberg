/**
 * Returns Dynamic Generated CSS
 */

import generateBorderCSS from '@Controls/generateBorderCSS';
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( props ) {

	const blockName = props.name.replace( 'uagb/', '' );

	const {
		seperatorStyle,
		separatorAlign,
		separatorAlignTablet,
		separatorAlignMobile,
		seperatorWidth,
		seperatorWidthTablet,
		seperatorWidthMobile,
		separatorWidthType,
		seperatorColor,
		seperatorThickness,
		thicknessUnit,
		separatorTopPadding,
		separatorRightPadding,
		seperatorBottomPadding,
		separatorLeftPadding,
		separatorPaddingTopTablet,
		separatorPaddingRightTablet,
		separatorPaddingBottomTablet,
		separatorPaddingLeftTablet,
		separatorPaddingTopMobile,
		separatorPaddingRightMobile,
		separatorPaddingBottomMobile,
		separatorPaddingLeftMobile,
		seperatorPaddingUnit,
		separatorMobilePaddingUnit,
		separatorTabletPaddingUnit,
		separatorPaddingLink,
	} = props.attributes;

	// Responsive Slider
	const seperatorWidthFallback = getFallbackNumber( seperatorWidth, 'seperatorWidth', blockName );
	const seperatorWidthFallbackTablet = getFallbackNumber( seperatorWidthTablet, 'seperatorWidthTablet', blockName );
	const seperatorWidthFallbackMobile = getFallbackNumber( seperatorWidthMobile, 'seperatorWidthMobile', blockName );
	// Thikness
	const seperatorThicknessFallback = getFallbackNumber( seperatorThickness, 'seperatorThickness', blockName );


	const selectors = {
		'.wp-block-uagb-separator': {
			'padding-bottom': generateCSSUnit( seperatorBottomPadding, seperatorPaddingUnit ),
			'padding-top': generateCSSUnit( separatorTopPadding, seperatorPaddingUnit ),
			'padding-left': generateCSSUnit( separatorLeftPadding, seperatorPaddingUnit ),
			'padding-right': generateCSSUnit( separatorRightPadding, seperatorPaddingUnit ),
			'text-align': separatorAlign,
		},
		'.wp-block-uagb-separator .wp-block-uagb-separator__inner': {
			'width': generateCSSUnit( seperatorWidthFallback, separatorWidthType ),
			'border-top-width': generateCSSUnit(
				seperatorThicknessFallback,
				thicknessUnit
			),
			'border-top-color': seperatorColor,
			'border-top-style': seperatorStyle,
		},
	}
	const tablet_selectors = {
		'.wp-block-uagb-separator': {
			'padding-bottom': generateCSSUnit( separatorPaddingBottomTablet, separatorTabletPaddingUnit ),
			'padding-top': generateCSSUnit( separatorPaddingTopTablet, separatorTabletPaddingUnit ),
			'padding-left': generateCSSUnit( separatorPaddingLeftTablet, separatorTabletPaddingUnit ),
			'padding-right': generateCSSUnit( separatorPaddingRightTablet, separatorTabletPaddingUnit ),
			'text-align': separatorAlignTablet,
		},
		'.wp-block-uagb-separator .wp-block-uagb-separator__inner': {
			'width': generateCSSUnit( seperatorWidthFallbackTablet, separatorWidthType ),
		},
	};
	const mobile_selectors = {
		'.wp-block-uagb-separator': {
			'padding-bottom': generateCSSUnit( separatorPaddingBottomMobile, separatorMobilePaddingUnit ),
			'padding-top': generateCSSUnit( separatorPaddingTopMobile, separatorMobilePaddingUnit ),
			'padding-left': generateCSSUnit( separatorPaddingLeftMobile, separatorMobilePaddingUnit ),
			'padding-right': generateCSSUnit( separatorPaddingRightMobile, separatorMobilePaddingUnit ),
			'text-align': separatorAlignMobile,
		},
		'.wp-block-uagb-separator .wp-block-uagb-separator__inner': {
			'width': generateCSSUnit( seperatorWidthFallbackMobile, separatorWidthType ),
		},
	};


	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

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

export default styling;
