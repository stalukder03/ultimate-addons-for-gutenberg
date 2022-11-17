/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBorderCSS from '@Controls/generateBorderCSS';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
 
export default function styling( props ) {

    const blockName = props.name.replace( 'uagb/', '' );

    let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};

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
 