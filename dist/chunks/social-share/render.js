(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[98],{252:function(o,a,e){"use strict";var i=e(15),t=e.n(i)()((function(o){return o[1]}));t.push([o.i,'/**\n * Editor styles for the admin\n */\n#wpwrap .edit-post-visual-editor a.uagb-ss__link {\n  color: #3a3a3a; }\n\n.uagb-social-share__layout-vertical .uagb-social-share__outer-wrap > .block-editor-inner-blocks {\n  width: 100%; }\n\n[data-type="uagb/social-share"] .uagb-social-share__layout-horizontal .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: flex; }\n\n[data-type="uagb/social-share"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: 10px;\n  margin-left: 10px; }\n',""]),a.a=t},500:function(o,a,e){"use strict";e.r(a);var i,t=e(3),n=e.n(t),c=e(4),r=e(0),l=e.n(r),s=e(14),u=e.n(s),_=e(252),b=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=_.a.locals||{},d.use=function(){return b++||(i=u()(_.a,g)),d},d.unuse=function(){b>0&&!--b&&(i(),i=null)};var p=d,h=e(10);const f=["uagb/social-share-child"],m=o=>{Object(r.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),o=o.parentProps;const a=Object(h.a)(),{attributes:e}=o,{className:i,social_layout:t}=e;return l.a.createElement("div",{className:n()(i,"uagb-social-share__outer-wrap","uagb-social-share__layout-"+t,"uagb-editor-preview-mode-"+a.toLowerCase(),"uagb-block-"+o.clientId.substr(0,8))},l.a.createElement(c.InnerBlocks,{template:[["uagb/social-share-child",{type:"facebook",image_icon:"icon",icon:"fab fa-facebook",image:"",icon_color:"#3a3a3a",icon_hover_color:"",icon_bg_color:"",icon_bg_hover_color:""}],["uagb/social-share-child",{type:"twitter",image_icon:"icon",icon:"fab fa-twitter-square",image:"",icon_color:"#3a3a3a",icon_hover_color:"",icon_bg_color:"",icon_bg_hover_color:""}],["uagb/social-share-child",{type:"pinterest",image_icon:"icon",icon:"fab fa-pinterest-square",image:"",icon_color:"#3a3a3a",icon_hover_color:"",icon_bg_color:"",icon_bg_hover_color:""}]],templateLock:!1,allowedBlocks:f,__experimentalMoverDirection:t}))};a.default=l.a.memo(m)}}]);