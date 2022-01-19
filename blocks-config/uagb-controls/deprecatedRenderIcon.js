/**
 * Set inline CSS class.
 *
 * @param {Object} props - The block object.
 * @return {Array} The inline CSS class.
 */

 import parseSVG from './parseIcon';

 function deprecatedRenderSVG( svg ) {
     svg = parseSVG( svg );
 
     const fontAwesome = uagb_blocks_info.uagb_svg_icons[ svg ];
 
     if ( 'undefined' !== typeof fontAwesome ) {
         const viewbox_array = fontAwesome.svg.hasOwnProperty( 'brands' )
             ? fontAwesome.svg.brands.viewBox
             : fontAwesome.svg.solid.viewBox;
         const path = fontAwesome.svg.hasOwnProperty( 'brands' )
             ? fontAwesome.svg.brands.path
             : fontAwesome.svg.solid.path;
         const viewBox = viewbox_array.join( ' ' );
 
         switch ( svg ) {
             case 'align-center':
                 return (
                     <svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                         <path
                             fillRule="evenodd"
                             clipRule="evenodd"
                             d="M4 2H14V0H4V2ZM0 7H18V5H0V7ZM4 12H14V10H4V12Z"
                         />
                     </svg>
                 );
             case 'align-left':
                 return (
                     <svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                         <path
                             fillRule="evenodd"
                             clipRule="evenodd"
                             d="M10 2H0V0H10V2ZM18 7H0V5H18V7ZM10 12H0V10H10V12Z"
                         />
                     </svg>
                 );
             case 'align-right':
                 return (
                     <svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                         <path
                             fillRule="evenodd"
                             clipRule="evenodd"
                             d="M8 2H18V0H8V2ZM0 7H18V5H0V7ZM8 12H18V10H8V12Z"
                         />
                     </svg>
                 );
         }
 
         return (
             <svg xmlns="http://www.w3.org/2000/svg" viewBox={ viewBox }>
                 <path d={ path }></path>
             </svg>
         );
     }
 }
 
 export default deprecatedRenderSVG;
 