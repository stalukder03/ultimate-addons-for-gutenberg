(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[5],{581:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),l=t(4),s=t.n(l);a.default=e=>{e=e.parentProps;const{attributes:{block_id:a,headlineTag:t,animateType:l,rotatingAnimation:d,beforeText:r,highlightedText:m,rotatingText:c,afterText:g},className:u,deviceType:b}=e;Object(n.useEffect)(()=>{UAGBAnimatedHeading.init(".uagb-block-"+e.attributes.block_id,e.attributes)},[e.attributes]);const o=r&&i.a.createElement("span",{className:"uagb-animated-headline__before-text"},r),h=g&&i.a.createElement("span",{className:"uagb-animated-headline__after-text"},g),p="highlighted"===l?m&&i.a.createElement("span",{className:"uagb-animated-headline__text-highlighted"},m):(()=>{if(!c)return;const e=c.split(/\n|\\n/),a=["typing","swirl","blinds","wave"];return i.a.createElement("span",{className:"uagb-animated-headline__text-rotating uagb-animated-headline__text-rotating--"+d},e.length>0&&e.map((e,t)=>i.a.createElement("span",{className:"uagb-animated-headline-dynamic-text uagb-animated-headline-dynamic-text--"+(0===t?"active":"inactive"),key:t},-1!==a.indexOf(d)?i.a.createElement(i.a.Fragment,null,e.split("").map((e,a)=>i.a.createElement("span",{className:"uagb-animated-headline-dynamic-letter",key:a},e))):e)))})(),_=""+t;return i.a.createElement("div",{className:s()(u,"uagb-editor-preview-mode-"+b.toLowerCase(),"uagb-block-"+a)},i.a.createElement(_,{className:"uagb-animated-headline"},o," ",p," ",h))}}}]);