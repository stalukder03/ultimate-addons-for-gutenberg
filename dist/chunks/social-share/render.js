(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[93],{345:function(e,a,t){"use strict";var o=t(18),n=t.n(o)()((function(e){return e[1]}));n.push([e.i,'/**\r\n * Editor styles for the admin\r\n */\n#wpwrap .edit-post-visual-editor a.uagb-ss__link {\n  color: #3a3a3a; }\n\n.uagb-social-share__layout-vertical .uagb-social-share__outer-wrap > .block-editor-inner-blocks {\n  width: 100%; }\n\n[data-type="uagb/social-share"] .uagb-social-share__layout-horizontal .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: flex; }\n\n[data-type="uagb/social-share"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: 10px;\n  margin-left: 10px; }\n',""]),a.a=n},586:function(e,a,t){"use strict";t.r(a);var o,n=t(4),s=t.n(n),l=t(5),i=t(1),r=t.n(i),c=t(17),u=t.n(c),d=t(345),b=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=d.a.locals||{},_.use=function(){return b++||(o=u()(d.a,p)),_},_.unuse=function(){b>0&&!--b&&(o(),o=null)};var g=_;const h=["uagb/social-share-child"],k=e=>{Object(i.useLayoutEffect)(()=>(g.use(),()=>{g.unuse()}),[]),e=e.parentProps;const{attributes:a,deviceType:t}=e,{className:o,social_count:n,socials:c,social_layout:u}=a,d=Object(i.useMemo)(()=>{const e=[];for(let a=0;a<n;a++)e.push(["uagb/social-share-child",c[a]]);return e},[n,c]);return r.a.createElement("div",{className:s()(o,"uagb-social-share__outer-wrap","uagb-social-share__layout-"+u,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},r.a.createElement(l.InnerBlocks,{template:d,templateLock:!1,allowedBlocks:h,__experimentalMoverDirection:u}))};a.default=r.a.memo(k)}}]);