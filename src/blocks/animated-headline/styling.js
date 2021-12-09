/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';

function styling( props ) {
    const {
        headlineAlign
    } = props.attributes;

    const tablet_selectors = {};
    const mobile_selectors = {};

    const selectors = {
        '.wp-block-uagb-animated-headline ':{
            'text-align': headlineAlign,
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