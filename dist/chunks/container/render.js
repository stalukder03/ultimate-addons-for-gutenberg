(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[19],{458:function(e,a,t){"use strict";t.r(a);var n=t(4),o=t.n(n),r=t(5),c=t(0),i=t.n(c),p=t(103),l=t(9);const s=e=>{e=e.parentProps;const{attributes:a,className:t,deviceType:n,clientId:c}=e,{block_id:s,topType:b,topFlip:_,topContentAboveShape:d,bottomType:u,bottomFlip:m,bottomContentAboveShape:v,backgroundType:g,backgroundVideo:h,topInvert:k,bottomInvert:w}=a,y="row"===a["direction"+n]?"horizontal":"vertical",E="none"!==b&&i.a.createElement("div",{className:o()("uagb-container__shape","uagb-container__shape-top",{"uagb-container__shape-flip":!0===_},{"uagb-container__shape-above-content":!0===d},{"uagb-container__invert":!0===k})},p.a[b]),f="none"!==u&&i.a.createElement("div",{className:o()("uagb-container__shape","uagb-container__shape-bottom",{"uagb-container__shape-flip":!0===m},{"uagb-container__shape-above-content":!0===v},{"uagb-container__invert":!0===w})},p.a[u]),{getBlockOrder:N}=Object(l.select)("core/block-editor"),B=N(c).length>0;return i.a.createElement("div",{className:o()(t,"uagb-block-"+s),key:s},E,"video"===g&&i.a.createElement("div",{className:"uagb-container__video-wrap"},h&&i.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsinline:!0},i.a.createElement("source",{src:h.url,type:"video/mp4"}))),i.a.createElement("div",{className:"uagb-container-inner-blocks-wrap"},i.a.createElement(r.InnerBlocks,{__experimentalMoverDirection:y,renderAppender:B?void 0:r.InnerBlocks.ButtonBlockAppender})),f)};a.default=i.a.memo(s)}}]);