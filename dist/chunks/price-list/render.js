(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[89],{300:function(e,t,a){"use strict";var o=a(15),r=a.n(o)()((function(e){return e[1]}));r.push([e.i,'/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.editor-styles-wrapper [data-type="uagb/restaurant-menu"].block-editor-block-list__block {\n  display: flex;\n  width: 100%; }\n\n.editor-styles-wrapper .wp-block-uagb-restaurant-menu {\n  width: 100%;\n  display: block;\n  /*\n\t\t/* Responsive for price-list on tablet in editor\n\t\t*/\n  /*\n\t\t/* Responsive for price-list on mobile in editor\n\t\t*/ }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu .block-editor-block-list__layout {\n    display: grid; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu .uagb-rm__title {\n    margin-top: 0; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu .uagb-rm__separator {\n    margin-bottom: 10px; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu .uagb-rm__price.rich-text {\n    min-width: fit-content !important; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu .uagb-rest_menu__wrap .uagb-rm__content {\n    padding-left: unset;\n    padding-right: unset;\n    display: inline-flex; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu .uagb-rm__desc,\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu .uagb-rm__desc.block-editor-rich-text__editable {\n    margin-bottom: 15px; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-desktop.uagb-rm__desk-column-1 .block-editor-block-list__layout {\n    grid-template-columns: auto; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-desktop.uagb-rm__desk-column-2 .block-editor-block-list__layout {\n    grid-template-columns: auto auto; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-desktop.uagb-rm__desk-column-3 .block-editor-block-list__layout {\n    grid-template-columns: auto auto auto; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-desktop.uagb-rm__desk-column-4 .block-editor-block-list__layout {\n    grid-template-columns: auto auto auto auto; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-tablet .uagb-rm__content .uagb-rm-details .uagb-rm__title {\n    display: contents; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-1 .block-editor-block-list__layout {\n    grid-template-columns: auto; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-2 .block-editor-block-list__layout {\n    grid-template-columns: auto auto; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-3 .block-editor-block-list__layout {\n    grid-template-columns: auto auto auto; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-4 .block-editor-block-list__layout {\n    grid-template-columns: auto auto auto auto; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-mobile .uagb-rm__content .uagb-rm-details .uagb-rm__title {\n    display: contents; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-mobile.uagb-rm__mcolumn-1 .block-editor-block-list__layout {\n    grid-template-columns: auto; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-mobile.uagb-rm__mcolumn-2 .block-editor-block-list__layout {\n    grid-template-columns: auto auto; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-mobile.uagb-rm__mcolumn-3 .block-editor-block-list__layout {\n    grid-template-columns: auto auto auto; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-mobile.uagb-rm__mcolumn-4 .block-editor-block-list__layout {\n    grid-template-columns: auto auto auto auto; }\n',""]),t.a=r},542:function(e,t,a){"use strict";a.r(t);var o,r=a(4),u=a.n(r),n=a(0),l=a.n(n),i=a(5),s=a(14),b=a.n(s),m=a(300),p=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=m.a.locals||{},d.use=function(){return p++||(o=b()(m.a,c)),d},d.unuse=function(){p>0&&!--p&&(o(),o=null)};var g=d,_=a(11);const w=["uagb/restaurant-menu-child"],k=e=>{Object(n.useLayoutEffect)(()=>(g.use(),()=>{g.unuse()}),[]),e=e.parentProps;const t=Object(_.a)(),{className:a,attributes:o}=e,{isPreview:r,menu_item_count:s,columns:b,tcolumns:m,mcolumns:p}=o,c=Object(n.useMemo)(()=>{const e=[];for(let t=0;t<s;t++)e.push(["uagb/restaurant-menu-child",{id:t+1}]);return e},[s]),d=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/price-list.png";return r?l.a.createElement("img",{width:"100%",src:d,alt:""}):l.a.createElement("div",{className:u()(a,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8),"uagb-rm__desk-column-"+b,"uagb-rm__tablet-column-"+m,"uagb-rm__mobile-column-"+p)},l.a.createElement(i.InnerBlocks,{template:c,templateLock:!1,allowedBlocks:w,__experimentalMoverDirection:"horizontal"}))};t.default=l.a.memo(k)}}]);