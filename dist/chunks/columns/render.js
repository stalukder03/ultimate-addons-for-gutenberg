(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[17],{250:function(o,n,l){"use strict";var t=l(18),e=l.n(t)()((function(o){return o[1]}));e.push([o.i,'/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.uagb-columns__wrap:before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border: 1px dashed #03ddff;\n  content: ""; }\n\n.uagb-columns__edit-active.uagb-columns__wrap:before {\n  border-color: #035cff; }\n\n.editor-bg-image-control .components-button,\n.editor-bg-video-control .components-button {\n  vertical-align: middle; }\n\n.editor-bg-image-control .components-button:last-child,\n.editor-bg-video-control .components-button:last-child {\n  margin-left: 10px; }\n\n.uagb-columns__wrap\n> .block-editor-inner-blocks\n> .block-editor-block-list__layout {\n  display: flex;\n  flex-wrap: nowrap; }\n\n.uagb-columns__wrap > .block-editor-inner-blocks,\n.uagb-columns__wrap > .block-editor-block-list__layout {\n  z-index: 2;\n  width: 100%; }\n\n.uagb-columns__columns-1\n.block-editor-block-list__block[data-type="uagb/column"] {\n  width: 100%; }\n\n.uagb-columns__columns-2\n.block-editor-block-list__block[data-type="uagb/column"] {\n  width: 50%; }\n\n.uagb-columns__columns-3\n.block-editor-block-list__block[data-type="uagb/column"] {\n  width: 33.33%; }\n\n.uagb-columns__columns-4\n.block-editor-block-list__block[data-type="uagb/column"] {\n  width: 25%; }\n\n.uagb-columns__columns-5\n.block-editor-block-list__block[data-type="uagb/column"] {\n  width: 20%; }\n\n.uagb-columns__columns-6\n.block-editor-block-list__block[data-type="uagb/column"] {\n  width: 16.66%; }\n\n.wp-block-uagb-columns .block-editor-block-list__layout {\n  margin-right: 0;\n  margin-left: 0; }\n  .wp-block-uagb-columns .block-editor-block-list__layout .editor-block-list__block {\n    max-width: none !important; }\n\n.block-editor-block-list__block[data-type="uagb/columns"] {\n  clear: both; }\n\n.block-editor-block-list__block[data-align="center"][data-type="uagb/columns"] {\n  text-align: inherit; }\n\n.block-editor-block-list__block[data-type="uagb/column"]\n> .editor-block-contextual-toolbar {\n  top: 38px;\n  margin-right: -29px;\n  margin-left: -29px;\n  transform: translateY(-38px); }\n\n.block-editor-block-list__block[data-type="uagb/column"]\n> .editor-block-list__insertion-point {\n  top: 0;\n  margin-top: 0; }\n\n.block-editor-block-list__block[data-align="full"]\n.wp-block-uagb-columns\n> .block-editor-inner-blocks\n> .block-editor-block-list__layout:first-child {\n  margin-left: 30px; }\n\n.block-editor-block-list__block[data-align="full"]\n.wp-block-uagb-columns\n> .block-editor-inner-blocks\n> .block-editor-block-list__layout:last-child {\n  margin-right: 30px; }\n\n.wp-block-uagb-columns.uagb-columns__valign-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.wp-block-uagb-columns.uagb-columns__valign-center {\n  width: 100%; }\n\n.wp-block-uagb-columns.uagb-columns__valign-bottom,\n.wp-block-uagb-columns.uagb-columns__valign-bottom {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end; }\n\n.block-editor-block-list__layout\n.block-editor-block-list__block[data-type="uagb/column"]\n> .block-editor-block-list__block-edit {\n  margin-right: 14px;\n  margin-left: 14px; }\n  .block-editor-block-list__layout\n.block-editor-block-list__block[data-type="uagb/column"]\n> .block-editor-block-list__block-edit > div:not(.editor-block-contextual-toolbar) {\n    width: 100%; }\n  .block-editor-block-list__layout\n.block-editor-block-list__block[data-type="uagb/column"]\n> .block-editor-block-list__block-edit > .editor-block-contextual-toolbar {\n    position: absolute;\n    top: 0;\n    transform: translateY(-39px); }\n\n.wp-block-uagb-columns\n> .block-editor-inner-blocks\n> .block-editor-block-list__layout\n> [data-type="uagb/column"]\n> .block-editor-block-list__block-edit:before {\n  top: 0;\n  bottom: 0; }\n\n.block-editor-block-list__block[data-align="full"] .wp-block-uagb-columns {\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.wp-block-uagb-columns {\n  position: relative;\n  display: flex;\n  z-index: 10;\n  flex-direction: column;\n  margin: 0 auto; }\n  .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    margin-right: 0;\n    margin-left: 0; }\n    .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type="uagb/column"] {\n      display: flex;\n      flex-direction: column;\n      max-width: none;\n      margin-top: 0;\n      margin-bottom: 0; }\n      .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type="uagb/column"] .block-editor-block-list__block-edit {\n        flex-basis: 100%; }\n\n.wp-block-uagb-columns.uagb-columns__valign-center {\n  justify-content: center; }\n\n.wp-block-uagb-columns.uagb-columns__valign-bottom {\n  justify-content: flex-end; }\n\n.wp-block-uagb-columns.uagb-columns__valign-center\n> .block-editor-inner-blocks\n> .block-editor-block-list__layout\n> [data-type="uagb/column"]\n> .block-editor-block-list__block-edit {\n  display: flex;\n  align-items: center; }\n\n.wp-block-uagb-columns.uagb-columns__valign-bottom\n> .block-editor-inner-blocks\n> .block-editor-block-list__layout\n> [data-type="uagb/column"]\n> .block-editor-block-list__block-edit {\n  display: flex;\n  align-items: flex-end; }\n\n.wp-block-uagb-column {\n  width: 100%; }\n\n.block-editor-block-list__layout\n.block-editor-block-list__block[data-align="full"][data-type="uagb/columns"] {\n  margin-right: 0;\n  margin-left: 0; }\n\n.edit-post-visual-editor\n.editor-writing-flow\n.block-editor-block-list__layout\n.block-editor-block-list__block[data-type="uagb/column"]\n> .block-editor-block-list__block-edit {\n  margin-right: 0;\n  margin-left: 0; }\n\n.block-editor-block-list__layout .uagb-column__wrap {\n  z-index: unset; }\n\n.block-editor-block-list__layout .uagb-column__wrap {\n  overflow: visible; }\n\n@media (min-width: 600px) {\n  .edit-post-visual-editor\n.block-editor-block-list__block[data-type="uagb/column"]\n.block-editor-block-list__block-edit {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (max-width: 976px) {\n  .uagb-columns__reverse-tablet.wp-block-uagb-columns\n> .block-editor-inner-blocks\n> .block-editor-block-list__layout {\n    flex-direction: column-reverse; } }\n\n@media (max-width: 767px) {\n  .uagb-columns__reverse-mobile.wp-block-uagb-columns\n> .block-editor-inner-blocks\n> .block-editor-block-list__layout {\n    flex-direction: column-reverse; } }\n\n@media (max-width: 600px) {\n  .wp-block-uagb-columns\n> .block-editor-inner-blocks\n> .block-editor-block-list__layout {\n    flex-direction: column; }\n  .wp-block-uagb-columns\n> .block-editor-inner-blocks\n> .block-editor-block-list__layout\n> [data-type="uagb/column"] {\n    flex: none !important;\n    width: 100%;\n    margin-right: 0; } }\n\n.block-editor-block-list__block[data-type="uagb/columns"]\n> .block-editor-block-list__block-edit:before {\n  pointer-events: inherit; }\n\n.block-editor-block-list__block[data-type="uagb/columns"]\n> .editor-block-list__insertion-point {\n  height: 16px; }\n  .block-editor-block-list__block[data-type="uagb/columns"]\n> .editor-block-list__insertion-point .editor-block-list__insertion-point-inserter {\n    height: 16px; }\n',""]),n.a=e},536:function(o,n,l){"use strict";l.r(n);var t,e=l(3),c=l.n(e),a=l(26),i=l(1),b=l.n(i),u=l(4),s=l(17),r=l.n(s),d=l(250),k=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return k++||(t=r()(d.a,_)),m},m.unuse=function(){k>0&&!--k&&(t(),t=null)};var g=m,p=["uagb/column"],y=function(o){Object(i.useLayoutEffect)((function(){return g.use(),function(){g.unuse()}}),[]);var n=o.parentProps,l=n.attributes,t=n.isSelected,e=n.className,s=n.deviceType,r=l.stack,d=l.align,k=l.vAlign,_=l.tag,m=l.columnGap,y=l.backgroundType,f=l.backgroundVideo,w=l.columns,h=l.bottomType,x=l.topType,v=l.bottomFlip,E=l.topFlip,j=l.reverseTablet,S=l.reverseMobile,T=l.topContentAboveShape,N=l.bottomContentAboveShape,z=Object(i.useMemo)((function(){for(var o=[],n=0;n<w;n++)o.push(["uagb/column",{id:n+1}]);return o}),[w]),C="none"!=x&&b.a.createElement("div",{className:c()("uagb-columns__shape","uagb-columns__shape-top",{"uagb-columns__shape-flip":!0===E},{"uagb-columns__shape-above-content":!0===T})},a.a[x]),A="none"!=h&&b.a.createElement("div",{className:c()("uagb-columns__shape","uagb-columns__shape-bottom",{"uagb-columns__shape-flip":!0===v},{"uagb-columns__shape-above-content":!0===N}),"data-negative":"false"},a.a[h]),B=j?"uagb-columns__reverse-tablet":"",L=S?"uagb-columns__reverse-mobile":"",P="".concat(_),F=t?"active":"not-active";return b.a.createElement(P,{className:c()(e,"uagb-columns__wrap","uagb-columns__background-".concat(y),"uagb-columns__edit-".concat(F),"uagb-editor-preview-mode-".concat(s.toLowerCase()),"uagb-columns__stack-".concat(r),"uagb-columns__valign-".concat(k),"uagb-columns__gap-".concat(m),"align".concat(d),B,L,"uagb-block-".concat(o.parentProps.clientId.substr(0,8)),"uagb-columns__columns-".concat(w))},b.a.createElement("div",{className:"uagb-columns__overlay"}),C,"video"==y&&b.a.createElement("div",{className:"uagb-columns__video-wrap"},f&&b.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsinline:!0},b.a.createElement("source",{src:f.url,type:"video/mp4"}))),b.a.createElement(u.InnerBlocks,{template:z,templateLock:"all",allowedBlocks:p}),A)};n.default=b.a.memo(y)}}]);