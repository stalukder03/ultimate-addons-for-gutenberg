(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[65],{351:function(t,n,e){"use strict";var i=e(19),o=e.n(i)()((function(t){return t[1]}));o.push([t.i,'/**\n * Editor styles for the admin\n */\n#wpwrap .edit-post-visual-editor a.uagb-icon-list__link {\n  color: #3a3a3a; }\n\n#wpwrap .uagb-icon-list__outer-wrap .uagb-icon-list__label-wrap {\n  cursor: text; }\n\n[data-type="uagb/icon-list"] .uagb-icon-list__layout-horizontal .block-editor-inner-blocks > .block-editor-block-list__layout [data-type="uagb/icon-list-child"] {\n  display: inline-flex; }\n\n[data-type="uagb/icon-list"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0; }\n',""]),n.a=o},594:function(t,n,e){"use strict";e.r(n);var i,o=e(4),a=e.n(o),l=e(5),c=e(1),s=e.n(c),u=e(18),r=e.n(u),b=e(351),d=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=b.a.locals||{},p.use=function(){return d++||(i=r()(b.a,_)),p},p.unuse=function(){d>0&&!--d&&(i(),i=null)};var g=p;const w=["uagb/icon-list-child"],k=t=>{Object(c.useLayoutEffect)(()=>(g.use(),()=>{g.unuse()}),[]),t=t.parentProps;const{attributes:n,deviceType:e}=t,{className:i,icon_count:o,icon_layout:u,iconPosition:r,hideLabel:b,block_id:d}=n,_=b?"uagb-icon-list__no-label":"",p=Object(c.useMemo)(()=>{const t=[];for(let n=0;n<o;n++)t.push(["uagb/icon-list-child",{id:n+1}]);return t},[o]);return s.a.createElement("div",{className:a()(i,"uagb-icon-list__outer-wrap","uagb-icon-list__layout-"+u,"top"===r?"uagb-icon-list__icon-at-top":"",_,"uagb-editor-preview-mode-"+e.toLowerCase(),"uagb-block-"+d)},s.a.createElement("div",{className:"uagb-icon-list__wrap"},s.a.createElement(l.InnerBlocks,{template:p,templateLock:!1,allowedBlocks:w,orientation:u})))};n.default=s.a.memo(k)}}]);