(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[19],{450:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(4),c=n(0),i=n.n(c),p=n(100),_=n(9);const s=e=>{e=e.parentProps;const{attributes:t,className:n,deviceType:a,clientId:c}=e,{block_id:s,topType:b,topFlip:l,topContentAboveShape:u,bottomType:d,bottomFlip:m,bottomContentAboveShape:g,topInvert:v,bottomInvert:h}=t,k="row"===t["direction"+a]?"horizontal":"vertical",w="none"!==b&&i.a.createElement("div",{className:o()("uagb-container__shape","uagb-container__shape-top",{"uagb-container__shape-flip":!0===l},{"uagb-container__shape-above-content":!0===u},{"uagb-container__invert":!0===v})},p.a[b]),f="none"!==d&&i.a.createElement("div",{className:o()("uagb-container__shape","uagb-container__shape-bottom",{"uagb-container__shape-flip":!0===m},{"uagb-container__shape-above-content":!0===g},{"uagb-container__invert":!0===h})},p.a[d]),{getBlockOrder:B}=Object(_.select)("core/block-editor"),I=B(c).length>0;return i.a.createElement("div",{className:o()(n,"uagb-block-"+s),key:s},w,i.a.createElement(r.InnerBlocks,{__experimentalMoverDirection:k,renderAppender:I?void 0:r.InnerBlocks.ButtonBlockAppender}),f)};t.default=i.a.memo(s)}}]);