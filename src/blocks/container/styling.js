/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBackgroundCSS from '@Controls/generateBackgroundCSS';

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
		directionDesktop,
		directionTablet,
		directionMobile,
		alignItemsDesktop,
		alignItemsTablet,
		alignItemsMobile,
		justifyContentDesktop,
		justifyContentTablet,
		justifyContentMobile,
		wrapDesktop,
		wrapTablet,
		wrapMobile,
		alignContentDesktop,
		alignContentTablet,
		alignContentMobile,
		backgroundType,
		backgroundImage,
		backgroundColor,
		backgroundPosition,
		backgroundAttachment,
		backgroundRepeat,
		backgroundSize,
		gradientValue,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,

		topPaddingDesktop,
		bottomPaddingDesktop,
		leftPaddingDesktop,
		rightPaddingDesktop,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		paddingType,
		topMarginDesktop,
		bottomMarginDesktop,
		leftMarginDesktop,
		rightMarginDesktop,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		marginType,
	} = props.attributes;

	let backgroundAttributes = {
        backgroundType,
        backgroundImage,
        backgroundColor,
        gradientValue,
        backgroundRepeat,
        backgroundPosition,
        backgroundSize,
        backgroundAttachment,
    };

	let containerBackgroundCSS = generateBackgroundCSS(backgroundAttributes);

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}
	
	let containerCSS = {
		'width' : generateCSSUnit( widthDesktop, widthType ),
		'min-height' : generateCSSUnit( minHeightDesktop, minHeightType ),
		'flex-direction' : directionDesktop,
		'align-items' : alignItemsDesktop,
		'justify-content' : justifyContentDesktop,
		'flex-wrap' : wrapDesktop,
		'align-content' : alignContentDesktop,
		'padding-top': generateCSSUnit( topPaddingDesktop, paddingType ),
		'padding-bottom': generateCSSUnit( bottomPaddingDesktop, paddingType ),
		'padding-left': generateCSSUnit( leftPaddingDesktop, paddingType ),
		'padding-right': generateCSSUnit( rightPaddingDesktop, paddingType ),
		'margin-top': generateCSSUnit( topMarginDesktop, marginType ),
		'margin-bottom': generateCSSUnit( bottomMarginDesktop, marginType ),
		'margin-left': generateCSSUnit( leftMarginDesktop, marginType ),
		'margin-right': generateCSSUnit( rightMarginDesktop, marginType ),
		'border-style': borderStyle,
		'border-color': borderColor,
		'border-radius': generateCSSUnit( borderRadius, 'px' ),
		'border-width': generateCSSUnit( borderWidth, 'px' ),
		...containerBackgroundCSS,
		'box-shadow':
		generateCSSUnit( boxShadowHOffset, 'px' ) +
		' ' +
				generateCSSUnit( boxShadowVOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowBlur, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowSpread, 'px' ) +
				' ' +
				boxShadowColor +
				' ' +
				boxShadowPositionCSS,
	}

	selectors[' .block-editor-block-list__layout'] = containerCSS;
	selectors[' .block-editor-block-list__layout:hover'] = {
		'border-color': borderHoverColor,
	};
	
	const tablet_selectors = {
		' .block-editor-block-list__layout' : {
			'width' : generateCSSUnit( widthTablet, widthType ),
			'min-height' : generateCSSUnit( minHeightTablet, minHeightType ),
			'flex-direction' : directionTablet,
			'align-items' : alignItemsTablet,
			'justify-content' : justifyContentTablet,
			'flex-wrap' : wrapTablet,
			'align-content' : alignContentTablet,
		},
		'.wp-block-uagb-container' : {
			'padding-top': generateCSSUnit( topPaddingTablet, paddingType ),
			'padding-bottom': generateCSSUnit( bottomPaddingTablet, paddingType ),
			'padding-left': generateCSSUnit( leftPaddingTablet, paddingType ),
			'padding-right': generateCSSUnit( rightPaddingTablet, paddingType ),
			'margin-top': generateCSSUnit( topMarginTablet, marginType ),
			'margin-bottom': generateCSSUnit( bottomMarginTablet, marginType ),
			'margin-left': generateCSSUnit( leftMarginTablet, marginType ),
			'margin-right': generateCSSUnit( rightMarginTablet, marginType ),
		},
	};

	const mobile_selectors = {
		' .block-editor-block-list__layout' : {
			'width' : generateCSSUnit( widthMobile, widthType ),
			'min-height' : generateCSSUnit( minHeightMobile, minHeightType ),
			'flex-direction' : directionMobile,
			'align-items' : alignItemsMobile,
			'justify-content' : justifyContentMobile,
			'flex-wrap' : wrapMobile,
			'align-content' : alignContentMobile,
		},
		'.wp-block-uagb-container' : {
			'padding-top': generateCSSUnit( topPaddingMobile, paddingType ),
			'padding-bottom': generateCSSUnit( bottomPaddingMobile, paddingType ),
			'padding-left': generateCSSUnit( leftPaddingMobile, paddingType ),
			'padding-right': generateCSSUnit( rightPaddingMobile, paddingType ),
			'margin-top': generateCSSUnit( topMarginMobile, marginType ),
			'margin-bottom': generateCSSUnit( bottomMarginMobile, marginType ),
			'margin-left': generateCSSUnit( leftMarginMobile, marginType ),
			'margin-right': generateCSSUnit( rightMarginMobile, marginType ),
		},
	};

	const base_selector = `.block-editor-page #wpwrap .uagb-block-${ props.clientId.substr(
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
