(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[5],{581:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),d=t(4),s=t.n(d);const l=e=>{e=e.parentProps;const{attributes:{block_id:a,headlineTag:t,animateType:d,rotatingAnimation:l,beforeText:r,highlightedText:m,rotatingText:c,afterText:o},className:g,deviceType:u}=e;Object(n.useEffect)(()=>{UAGBAnimatedHeading.init(".uagb-block-"+e.attributes.block_id,e.attributes)},[e.attributes]);const b=r&&i.a.createElement("span",{className:"uagb-animated-headline__before-text"},r),h=o&&i.a.createElement("span",{className:"uagb-animated-headline__after-text"},o),_="highlighted"===d?m&&i.a.createElement("span",{className:"uagb-animated-headline__text-highlighted"},m):(()=>{if(!c)return;const e=c.split(/\n|\\n/);return i.a.createElement("span",{className:"uagb-animated-headline__text-rotating uagb-animated-headline__text-rotating--"+l},e.length>0&&e.map((e,a)=>i.a.createElement("span",{className:"uagb-animated-headline-dynamic-text "+(0===a?"uagb-animated-headline-dynamic-text--active":"uagb-animated-headline-dynamic-text--inactive"),key:a},e)))})(),p=""+t;return i.a.createElement("div",{className:s()(g,"uagb-editor-preview-mode-"+u.toLowerCase(),"uagb-block-"+a)},i.a.createElement(p,{className:"uagb-animated-headline"},b," ",_," ",h))};a.default=i.a.memo(l)}}]);