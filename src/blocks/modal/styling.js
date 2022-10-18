/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

export default function styling( props ) {
	const {
		modalTrigger,
		buttonIconPosition,
		buttonIconSpace,
		buttonIconSpaceTablet,
		buttonIconSpaceMobile,
		buttonIconSpaceType,
		modalAlign,
		modalAlignTablet,
		modalAlignMobile,
		modalWidth,
		modalWidthTablet,
		modalWidthMobile,
		modalWidthType,
		modalHeight,
		modalHeightTablet,
		modalHeightMobile,
		modalHeightType,
	} = props.attributes;

	const blockName = props.name.replace( 'uagb/', '' );
	const buttonIconSpaceFallback = getFallbackNumber( buttonIconSpace, 'buttonIconSpace', blockName );
	const buttonIconSpaceFallbackTablet = isNaN( buttonIconSpaceTablet ) ? buttonIconSpaceFallback : buttonIconSpaceTablet;
	const buttonIconSpaceFallbackMobile = isNaN( buttonIconSpaceMobile ) ? buttonIconSpaceFallbackTablet : buttonIconSpaceMobile;

	const selectors = {
		'.wp-block-uagb-modal' : {
			'text-align': modalAlign,
		},
		' .uagb-modal-popup-wrap' : {
			'width': generateCSSUnit(
				modalWidth,
				modalWidthType
			),
			'min-height': generateCSSUnit(
				modalHeight,
				modalHeightType
			),
		}
	};
	const tabletSelectors = {
		'.wp-block-uagb-modal' : {
			'text-align': modalAlignTablet,
		},
		' .uagb-modal-popup-wrap' : {
			'width': generateCSSUnit(
				modalWidthTablet,
				modalWidthType
			),
			'min-height': generateCSSUnit(
				modalHeightTablet,
				modalHeightType
			),
		}
	};
	const mobileSelectors = {
		'.wp-block-uagb-modal' : {
			'text-align': modalAlignMobile,
		},
		' .uagb-modal-popup-wrap' : {
			'width': generateCSSUnit(
				modalWidthMobile,
				modalWidthType
			),
			'min-height': generateCSSUnit(
				modalHeightMobile,
				modalHeightType
			),
		}
	};
	if( 'button' === modalTrigger ) {
		if( 'after' === buttonIconPosition ){
			selectors[ ' .uagb-modal-button-link svg'] = {
				'margin-left': generateCSSUnit( buttonIconSpaceFallback, buttonIconSpaceType ),
			};
			tabletSelectors[ ' .uagb-modal-button-link svg'] = {
				'margin-left': generateCSSUnit( buttonIconSpaceFallbackTablet, buttonIconSpaceType ),
			};
			mobileSelectors[ ' .uagb-modal-button-link svg'] = {
				'margin-left': generateCSSUnit( buttonIconSpaceFallbackMobile, buttonIconSpaceType ),
			};
		} else {
			selectors[ ' .uagb-modal-button-link svg'] = {
				'margin-right': generateCSSUnit( buttonIconSpaceFallback, buttonIconSpaceType ),
			};
			tabletSelectors[ ' .uagb-modal-button-link svg'] = {
				'margin-right': generateCSSUnit( buttonIconSpaceFallbackTablet, buttonIconSpaceType ),
			};
			mobileSelectors[ ' .uagb-modal-button-link svg'] = {
				'margin-right': generateCSSUnit( buttonIconSpaceFallbackMobile, buttonIconSpaceType ),
			};
		}
	}

	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS(
		tabletSelectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	styling_css += generateCSS(
		mobileSelectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return styling_css;
}
