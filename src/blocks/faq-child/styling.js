/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateBorderCSS from '@Controls/generateBorderCSS';

function styling( props ) {
    
    const {
        overrideStyle,
        innerBorderHColor
    } = props.attributes;

    let selectors = {};
    let tabletSelectors = {};
    let mobileSelectors = {};
    
    let stylingCss = '';

    if( overrideStyle ) {
        const borderCSS = generateBorderCSS( props.attributes, 'inner', '' );
        const borderCSSTablet = generateBorderCSS( props.attributes, 'inner', 'tablet' );
        const borderCSSMobile = generateBorderCSS( props.attributes, 'inner', 'mobile' );

        const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

        selectors = {
            '.uagb-faq-item.uagb-faq-child__outer-wrap': {
                ...borderCSS
            },
            '.uagb-faq-item.uagb-faq-child__outer-wrap:hover': {
                'border-color': innerBorderHColor,
            },
        };

        tabletSelectors = {
            '.uagb-faq-item.uagb-faq-child__outer-wrap': {
                ...borderCSSTablet
            },
        };

        mobileSelectors = {
            '.uagb-faq-item.uagb-faq-child__outer-wrap': {
                ...borderCSSMobile
            },
        };

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

    }

    return stylingCss;
}

export default styling;
 