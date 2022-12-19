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
		separatorStyle,
		separatorAlign,
		separatorAlignTablet,
		separatorAlignMobile,
		separatorWidth,
		separatorWidthTablet,
		separatorWidthMobile,
		separatorWidthType,
		separatorColor,
		separatorThickness,
		thicknessUnit,
		separatorTopPadding,
		separatorRightPadding,
		separatorBottomPadding,
		separatorLeftPadding,
		separatorPaddingTopTablet,
		separatorPaddingRightTablet,
		separatorPaddingBottomTablet,
		separatorPaddingLeftTablet,
		separatorPaddingTopMobile,
		separatorPaddingRightMobile,
		separatorPaddingBottomMobile,
		separatorPaddingLeftMobile,
		separatorPaddingUnit,
		separatorMobilePaddingUnit,
		separatorTabletPaddingUnit,
		separatorPaddingLink,
		elementType
	} = props.attributes;

	// Responsive Slider
	const separatorWidthFallback = getFallbackNumber( separatorWidth, 'separatorWidth', blockName );
	const separatorWidthFallbackTablet = getFallbackNumber( separatorWidthTablet, 'separatorWidthTablet', blockName );
	const separatorWidthFallbackMobile = getFallbackNumber( separatorWidthMobile, 'separatorWidthMobile', blockName );
	// Thikness
	const separatorThicknessFallback = getFallbackNumber( separatorThickness, 'separatorThickness', blockName );


	const borderCSS = {
		'border-top-width': generateCSSUnit(
			separatorThicknessFallback,
			thicknessUnit
		),
		'border-top-color': separatorColor,
		'border-top-style': separatorStyle,
	}
	let borderStyle = {}
	if(elementType === 'none'){
		borderStyle = {
			'.wp-block-uagb-separator .wp-block-uagb-separator__inner': {
				'width': generateCSSUnit( separatorWidthFallback, separatorWidthType ),
				...borderCSS
			}
		}
	} else {
		let alignCSS = {}
		if(separatorAlign === 'left'){
			alignCSS = {
				'margin-left': 0
			}
		}
		if(separatorAlign === 'right'){
			alignCSS = {
				'margin-right': 0
			}
		}
		borderStyle = {
			'.wp-block-uagb-separator .wp-block-uagb-separator__inner': {
				'width': generateCSSUnit( separatorWidthFallback, separatorWidthType ),
				...alignCSS
			},
			'.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before': borderCSS,
			'.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before': borderCSS,
			'.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after': borderCSS,
			'.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after': borderCSS
		}
	}


	const selectors = {
		'.wp-block-uagb-separator': {
			'padding-bottom': generateCSSUnit( separatorBottomPadding, separatorPaddingUnit ),
			'padding-top': generateCSSUnit( separatorTopPadding, separatorPaddingUnit ),
			'padding-left': generateCSSUnit( separatorLeftPadding, separatorPaddingUnit ),
			'padding-right': generateCSSUnit( separatorRightPadding, separatorPaddingUnit ),
			'text-align': separatorAlign,
		},
		...borderStyle
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
			'width': generateCSSUnit( separatorWidthFallbackTablet, separatorWidthType ),
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
			'width': generateCSSUnit( separatorWidthFallbackMobile, separatorWidthType ),
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
