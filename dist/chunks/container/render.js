(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[19],{464:function(e,n,t){"use strict";t.r(n);var o=t(4),a=t.n(o),r=t(5),l=t(0),c=t.n(l),i=t(105),p=t(9);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}const u=e=>{e=e.parentProps;const{attributes:n,deviceType:t,clientId:o}=e,{block_id:l,htmlTag:u,htmlTagLink:b,topType:d,topFlip:_,topContentAboveShape:g,bottomType:m,bottomFlip:v,bottomContentAboveShape:h,backgroundType:k,backgroundVideo:w,topInvert:f,bottomInvert:B,isBlockRootParent:y,contentWidth:E,innerContentWidth:I}=n,O="row"===n["direction"+t]?"horizontal":"vertical",T="none"!==d&&c.a.createElement("div",{className:a()("uagb-container__shape","uagb-container__shape-top",{"uagb-container__shape-flip":!0===_},{"uagb-container__shape-above-content":!0===g},{"uagb-container__invert":!0===f})},i.a[d]),A="none"!==m&&c.a.createElement("div",{className:a()("uagb-container__shape","uagb-container__shape-bottom",{"uagb-container__shape-flip":!0===v},{"uagb-container__shape-above-content":!0===h},{"uagb-container__invert":!0===B})},i.a[m]),{getBlockOrder:N}=Object(p.select)("core/block-editor"),j=N(o).length>0,C=""+u,P={};"a"===u&&(P.rel="noopener",P.onClick=e=>e.preventDefault(),null!=b&&b.url&&(P.href=null==b?void 0:b.url),null!=b&&b.opensInNewTab&&(P.target="_blank"),null!=b&&b.noFollow&&(P.rel="nofollow noopener"));const F=0!==Object(p.select)("core/block-editor").getBlocks(o).length?"uagb-container-has-children":"",$=Object(r.useBlockProps)({className:`uagb-block-${l} ${E} ${F} uagb-editor-preview-mode-${t.toLowerCase()}`});return c.a.createElement(c.a.Fragment,null,c.a.createElement(C,s({},$,{key:l},P),T,"video"===k&&c.a.createElement("div",{className:"uagb-container__video-wrap"},w&&c.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsinline:!0},c.a.createElement("source",{src:w.url,type:"video/mp4"}))),y&&"alignfull"===E&&"alignwide"===I?c.a.createElement("div",{className:"uagb-container-inner-blocks-wrap"},c.a.createElement(r.InnerBlocks,{__experimentalMoverDirection:O,renderAppender:j?void 0:r.InnerBlocks.ButtonBlockAppender})):c.a.createElement(r.InnerBlocks,{__experimentalMoverDirection:O,renderAppender:j?void 0:r.InnerBlocks.ButtonBlockAppender}),A))};n.default=c.a.memo(u)}}]);