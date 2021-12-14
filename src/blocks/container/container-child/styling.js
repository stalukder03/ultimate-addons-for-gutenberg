/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		widthDesktop,
		widthTablet,
		widthMobile,
		widthType,
		minHeightDesktop,
		minHeightTablet,
		minHeightMobile,
		minHeightType,
	} = props.attributes;

	
	const selectors = {
		'.block-editor-block-list__block' : {
			'width' : generateCSSUnit( widthDesktop, widthType ),
			'min-height' : generateCSSUnit( minHeightDesktop, minHeightType ),
		},
	};
	const tablet_selectors = {
		'.block-editor-block-list__block' : {
			'width' : generateCSSUnit( widthTablet, widthType ),
			'min-height' : generateCSSUnit( minHeightTablet, minHeightType ),
		},
	};
	const mobile_selectors = {
		'.block-editor-block-list__block' : {
			'width' : generateCSSUnit( widthMobile, widthType ),
			'min-height' : generateCSSUnit( minHeightMobile, minHeightType ),
		},
	};

	const base_selector = `.block-editor-page #wpwrap #block-${ props.clientId }`;

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
