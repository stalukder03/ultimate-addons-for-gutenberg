(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[87],{314:function(e,a,t){"use strict";var n=t(16),r=t.n(n)()((function(e){return e[1]}));r.push([e.i,'/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.block-editor-page #wpwrap .wp-block-uagb-restaurant-menu {\n  padding: 15px;\n  margin: 0;\n  max-width: unset; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu .uagb-rm__title {\n    margin-top: 0; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu .uagb-rm__separator {\n    margin-bottom: 10px; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-3 [data-type="uagb/restaurant-menu-child"],\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-2 [data-type="uagb/restaurant-menu-child"],\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-1 [data-type="uagb/restaurant-menu-child"] {\n    display: inline-block;\n    padding-right: 10px;\n    padding-left: 10px; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-3 [data-type="uagb/restaurant-menu-child"] {\n    width: calc(100% / 3);\n    display: inline-flex; }\n    .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-3 [data-type="uagb/restaurant-menu-child"] .wp-block-uagb-restaurant-menu-child.uagb-rest_menu__wrap.uagb-rm__desk-column-3 {\n      width: unset; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-2 [data-type="uagb/restaurant-menu-child"] {\n    width: calc(100% / 2);\n    display: inline-flex; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-1 [data-type="uagb/restaurant-menu-child"] {\n    width: 100%; }\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu .uagb-rm__desc,\n  .block-editor-page #wpwrap .wp-block-uagb-restaurant-menu .uagb-rm__desc.block-editor-rich-text__editable {\n    margin-bottom: 15px; }\n\n/*\r\n/* Responsive for price-list on tablet in editor\r\n*/\n.uagb-editor-preview-mode-tablet {\n  float: left;\n  padding-right: 10px;\n  padding-left: 10px; }\n  .uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-3 [data-type="uagb/restaurant-menu-child"] {\n    width: 33%; }\n  .uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-2 [data-type="uagb/restaurant-menu-child"] {\n    width: 50%; }\n  .uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-1 [data-type="uagb/restaurant-menu-child"] {\n    width: 100%; }\n\n/*\r\n/* Responsive for price-list on mobile in editor\r\n*/\n.uagb-editor-preview-mode-mobile {\n  float: left;\n  padding-right: 10px;\n  padding-left: 10px; }\n  .uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-3 [data-type="uagb/restaurant-menu-child"] {\n    width: 33%; }\n  .uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-2 [data-type="uagb/restaurant-menu-child"] {\n    width: 50%; }\n  .uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-1 [data-type="uagb/restaurant-menu-child"] {\n    width: 100%; }\n',""]),a.a=r},508:function(e,a,t){"use strict";t.r(a);var n,r=t(4),u=t.n(r),i=t(36),o=t(1),l=t.n(o),d=t(5),b=t(15),p=t.n(b),c=t(314),m=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=c.a.locals||{},g.use=function(){return m++||(n=p()(c.a,s)),g},g.unuse=function(){m>0&&!--m&&(n(),n=null)};var w=g;const _=["uagb/restaurant-menu-child"],k=e=>{Object(o.useLayoutEffect)(()=>(w.use(),()=>{w.unuse()}),[]),e=e.parentProps;const{className:a,attributes:t,deviceType:n}=e,{menu_item_count:r}=t,b=Object(o.useMemo)(()=>{const e=[];for(let a=0;a<r;a++)e.push(["uagb/restaurant-menu-child",{id:a+1}]);return e},[r]);return l.a.createElement("div",{className:u()(a,"uagb-editor-preview-mode-"+n.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8),...Object(i.a)(t))},l.a.createElement(d.InnerBlocks,{template:b,templateLock:!1,allowedBlocks:_,__experimentalMoverDirection:"horizontal"}))};a.default=l.a.memo(k)}}]);