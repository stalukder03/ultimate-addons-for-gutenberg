(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[65],{247:function(t,e,n){"use strict";var a=n(16),o=n.n(a)()((function(t){return t[1]}));o.push([t.i,'/**\n * Editor styles for the admin\n */\n#wpwrap .edit-post-visual-editor a.uagb-icon-list__link {\n  color: #3a3a3a; }\n\n#wpwrap .wp-block-uagb-icon-list .wp-block-uagb-icon-list-child span {\n  cursor: text; }\n\n[data-type="uagb/icon-list"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0; }\n',""]),e.a=o},487:function(t,e,n){"use strict";n.r(e);var a,o=n(3),i=n.n(o),l=n(4),s=n(0),c=n.n(s),r=n(15),u=n.n(r),d=n(247),b=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=d.a.locals||{},g.use=function(){return b++||(a=u()(d.a,p)),g},g.unuse=function(){b>0&&!--b&&(a(),a=null)};var w=g,m=n(10);const _=["uagb/icon-list-child"],k=t=>{Object(s.useLayoutEffect)(()=>(w.use(),()=>{w.unuse()}),[]),t=t.parentProps;const e=Object(m.a)(),{attributes:n}=t,{className:a,icon_count:o,block_id:r}=n,u=Object(s.useMemo)(()=>{const t=[];for(let e=0;e<o;e++)t.push(["uagb/icon-list-child",{id:e+1}]);return t},[o]);return c.a.createElement("div",{className:i()(a,"uagb-editor-preview-mode-"+e.toLowerCase(),"uagb-block-"+r)},c.a.createElement("div",{className:"uagb-icon-list__wrap"},c.a.createElement(l.InnerBlocks,{template:u,templateLock:!1,allowedBlocks:_})))};e.default=c.a.memo(k)}}]);