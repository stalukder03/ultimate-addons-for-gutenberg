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
	} = props.attributes;

	
	const selectors = {
		' .block-editor-block-list__layout' : {
			'width' : generateCSSUnit( widthDesktop, widthType ),
			'min-height' : generateCSSUnit( minHeightDesktop, minHeightType ),
			'flex-direction' : directionDesktop,
			'align-items' : alignItemsDesktop,
			'justify-content' : justifyContentDesktop,
			'flex-wrap' : wrapDesktop,
			'align-content' : alignContentDesktop,
		},
	};

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
		...containerBackgroundCSS,
		'border-style': borderStyle,
		'border-color': borderColor,
		'border-radius': generateCSSUnit( borderRadius, 'px' ),
		'border-width': generateCSSUnit( borderWidth, 'px' ),
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

	selectors['.wp-block-uagb-container'] = containerCSS;
	selectors['.wp-block-uagb-container:hover'] = {
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
