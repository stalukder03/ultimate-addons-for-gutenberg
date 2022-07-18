/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateBorderCSS from '@Controls/generateBorderCSS';

function styling( props ) {

    console.log( props.attributes );
    console.log( "==================================================" );
 
    const borderCSS = generateBorderCSS( props.attributes, 'inner', '' );
    const borderCSSTablet = generateBorderCSS( props.attributes,'inner', 'tablet' );
    const borderCSSMobile = generateBorderCSS( props.attributes,'inner', 'mobile' );

    let selectors = {};
    let tabletSelectors = {};
    let mobileSelectors = {};

    selectors = {
        ' .uagb-faq-item': {
            ...borderCSS
        }
    };

    tabletSelectors = {
        ' .uagb-faq-item': {
            ...borderCSSTablet
        },
    };

    mobileSelectors = {
        ' .uagb-faq-item': {
            ...borderCSSMobile
        },
    };

    let stylingCss = '';
    const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

    stylingCss = generateCSS( selectors, id );

    stylingCss += generateCSS(
        tabletSelectors,
        `${ id }.uagb-editor-preview-mode-tablet`,
        true,
        'tablet'
    );

    stylingCss += generateCSS(
        mobileSelectors,
        `${ id }.uagb-editor-preview-mode-mobile`,
        true,
        'mobile'
    );

    return stylingCss;
}

export default styling;
 