(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[87],{232:function(e,a,t){"use strict";var n=t(15),r=t.n(n)()((function(e){return e[1]}));r.push([e.i,'/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.block-editor-page #wpwrap .wp-block-uagb-restaurant-menu {\n  padding: 15px;\n  margin: 0;\n  max-width: unset;\n  /*\r\n\t/* Responsive for price-list on tablet in editor\r\n\t*/\n  /*\r\n\t/* Responsive for price-list on mobile in editor\r\n\t*/ }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu .uagb-rm__title {\n    margin-top: 0; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu .uagb-rm__separator {\n    margin-bottom: 10px; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-3 [data-type="uagb/restaurant-menu-child"],\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-2 [data-type="uagb/restaurant-menu-child"],\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-1 [data-type="uagb/restaurant-menu-child"] {\n    display: inline-block;\n    padding-right: 10px;\n    padding-left: 10px; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-3 [data-type="uagb/restaurant-menu-child"] {\n    width: calc(100% / 3);\n    display: inline-flex; }\n    .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-3 [data-type="uagb/restaurant-menu-child"] .wp-block-uagb-restaurant-menu-child.uagb-rest_menu__wrap.uagb-rm__desk-column-3 {\n      width: unset; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-2 [data-type="uagb/restaurant-menu-child"] {\n    width: calc(100% / 2);\n    display: inline-flex; }\n    .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-2 [data-type="uagb/restaurant-menu-child"] .uagb-rm__desk-column-2 {\n      width: unset; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu .uagb-rest_menu__wrap.uagb-rm__align-left .uagb-rm__price {\n    display: table-cell;\n    text-align: right; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-1 [data-type="uagb/restaurant-menu-child"] {\n    width: 100%; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu .uagb-rm__desc,\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu .uagb-rm__desc.block-editor-rich-text__editable {\n    margin-bottom: 15px; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-tablet {\n    float: left;\n    padding-right: 10px;\n    padding-left: 10px; }\n    .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-3 [data-type="uagb/restaurant-menu-child"] {\n      width: 33%; }\n    .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-2 [data-type="uagb/restaurant-menu-child"] {\n      width: 50%; }\n    .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-1 [data-type="uagb/restaurant-menu-child"] {\n      width: 100%; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-mobile {\n    float: left;\n    padding-right: 10px;\n    padding-left: 10px; }\n    .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-3 [data-type="uagb/restaurant-menu-child"] {\n      width: 33%; }\n    .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-2 [data-type="uagb/restaurant-menu-child"] {\n      width: 50%; }\n    .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-1 [data-type="uagb/restaurant-menu-child"] {\n      width: 100%; }\n',""]),a.a=r},471:function(e,a,t){"use strict";t.r(a);var n,r=t(3),u=t.n(r),o=t(34),l=t(0),p=t.n(l),i=t(4),b=t(14),d=t.n(b),c=t(232),g=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=c.a.locals||{},s.use=function(){return g++||(n=d()(c.a,m)),s},s.unuse=function(){g>0&&!--g&&(n(),n=null)};var w=s,k=t(10);const _=["uagb/restaurant-menu-child"],h=e=>{Object(l.useLayoutEffect)(()=>(w.use(),()=>{w.unuse()}),[]),e=e.parentProps;const a=Object(k.a)(),{className:t,attributes:n}=e,{menu_item_count:r}=n,b=Object(l.useMemo)(()=>{const e=[];for(let a=0;a<r;a++)e.push(["uagb/restaurant-menu-child",{id:a+1}]);return e},[r]);return p.a.createElement("div",{className:u()(t,"uagb-editor-preview-mode-"+a.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8),...Object(o.a)(n))},p.a.createElement(i.InnerBlocks,{template:b,templateLock:!1,allowedBlocks:_,__experimentalMoverDirection:"horizontal"}))};a.default=p.a.memo(h)}}]);