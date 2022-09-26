/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from '@Controls/generateCSS';
 import generateCSSUnit from '@Controls/generateCSSUnit';
 import { getFallbackNumber } from '@Controls/getAttributeFallback';
 
 function styling( props ) {
 
     const blockName = props.name.replace( 'uagb/', '' );
 
     const {
         align,
         gap,
         social_layout,
         borderRadius,
         size,
         sizeType,
         bgSize,
         stack,
         iconColor,
         iconHoverColor,
         iconBgColor,
         iconBgHoverColor,
         labelColor,
         fontSize,
		fontSizeType,
        fontStyle,
		fontFamily,
		fontWeight,
		lineHeightType,
		lineHeight,
     } = props.attributes;
 
     const bgSizeFallback = getFallbackNumber( bgSize, 'bgSize', blockName );
     const sizeFallback = getFallbackNumber( size, 'size', blockName );
     const gapFallback = getFallbackNumber( gap, 'gap', blockName );
 
     const selectors = {
         ' a.uagb-ss__link': {
             'color': iconColor,
         },
         ' a.uagb-ss__link svg': {
             'fill': iconColor,
         },
         ' .uagb-ss-repeater:hover a.uagb-ss__link': {
             'color': iconHoverColor,
         },
         ' .uagb-ss-repeater:hover a.uagb-ss__link svg': {
             'fill': iconHoverColor,
         },
         ' .uagb-ss__wrapper': {
             'background': iconBgColor,
         },
         ' .uagb-ss__wrapper:hover': {
             'background': iconBgHoverColor,
         },
         '.uagb-icon-list__label': {
			'color': labelColor,
		},
     };
 
     selectors[ '.uagb-social-profile__layout-vertical .uagb-ss__wrapper' ] = {
         'padding': generateCSSUnit( bgSizeFallback, 'px' ),
         'margin-left': 0,
         'margin-right': 0,
         'margin-bottom': generateCSSUnit( gapFallback, 'px' ),
     };
 
     selectors[
         '.uagb-social-profile__layout-vertical.uagb-social-profile__outer-wrap'
     ] = {
         'flex-direction': 'column',
     };
 
     selectors[ '.uagb-social-profile__layout-horizontal .uagb-ss__wrapper' ] = {
         'padding': generateCSSUnit( bgSizeFallback, 'px' ),
         'margin-left': generateCSSUnit( gapFallback / 2, 'px' ),
         'margin-right': generateCSSUnit( gapFallback / 2, 'px' ),
     };

 
     selectors[ ' .uagb-ss__wrapper.uagb-ss-repeater ' ] = {
         'border-radius': generateCSSUnit( borderRadius, 'px' ),
     };
 
     selectors[ ' .uagb-ss__source-image' ] = {
         'width': generateCSSUnit( sizeFallback, sizeType ),
     };
 
     selectors[ ' .uagb-ss__source-wrap' ] = {
         'width': generateCSSUnit( sizeFallback, sizeType ),
     };
 
     selectors[ ' .uagb-ss__source-wrap svg' ] = {
         'width': generateCSSUnit( sizeFallback, sizeType ),
         'height': generateCSSUnit( sizeFallback, sizeType ),
     };
 
     selectors[ ' .uagb-ss__source-icon' ] = {
         'width': generateCSSUnit( sizeFallback, sizeType ),
         'height': generateCSSUnit( sizeFallback, sizeType ),
         'font-size': generateCSSUnit( sizeFallback, sizeType ),
     };
 
     function getFlexAlignment( textalign ) {
         if ( textalign === 'left' ){
             return 'flex-start';
         } else if( textalign === 'right' ){
             return 'flex-end';
         }
         return 'center';
     }
 
     const alignment = getFlexAlignment( align );
 
     selectors[ '.uagb-social-profile__outer-wrap .block-editor-inner-blocks' ] = {
         'text-align': align,
     };
     selectors[ '.uagb-social-profile__outer-wrap .block-editor-inner-blocks .block-editor-block-list__layout' ] = {
         'justify-content': alignment,
         '-webkit-box-pack': alignment,
         '-ms-flex-pack': alignment,
         '-webkit-box-align': alignment,
         '-ms-flex-align': alignment,
         'align-items': alignment,
     };
 
     selectors[
         '.uagb-social-profile__outer-wrap'
     ] = {
         'justify-content': alignment,
         '-webkit-box-pack': alignment,
         '-ms-flex-pack': alignment,
         '-webkit-box-align': alignment,
         '-ms-flex-align': alignment,
         'align-items': alignment,
     };

     selectors[ '.uagb-icon-list__label' ] = {
		'font-family': fontFamily,
		'font-weight': fontWeight,
        'font-style' : fontStyle,
		'color': labelColor,
	};
 
 
     if ( 'horizontal' === social_layout ) {
         if ( 'desktop' === stack ) {
             selectors[
                 '.uagb-social-profile__layout-horizontal .block-editor-inner-blocks > .block-editor-block-list__layout'
             ] = {
                 'flex-direction': 'column',
             };
 
             selectors[ ' .uagb-ss__wrapper' ] = {
                 'margin-left': 0,
                 'margin-right': 0,
                 'margin-bottom': generateCSSUnit( gapFallback, 'px' ),
                 'background': iconBgColor,
 
             };
 
             selectors[ '.uagb-social-profile__outer-wrap' ] = {
                 'flex-direction': 'column',
                 'justify-content': alignment,
                 '-webkit-box-pack': alignment,
                 '-ms-flex-pack': alignment,
                 '-webkit-box-align': alignment,
                 '-ms-flex-align': alignment,
                 'align-items': alignment,
             };
         }
     }
 
     let stylingCss = '';
     const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;
 
     stylingCss = generateCSS( selectors, id );
 
     return stylingCss;
 }
 
 export default styling;
 