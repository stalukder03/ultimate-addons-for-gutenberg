(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[65],{277:function(t,e,n){"use strict";var a=n(15),i=n.n(a)()((function(t){return t[1]}));i.push([t.i,'/**\n * Editor styles for the admin\n */\n#wpwrap .edit-post-visual-editor a.uagb-icon-list__link {\n  color: #3a3a3a; }\n\n#wpwrap .wp-block-uagb-icon-list .wp-block-uagb-icon-list-child span {\n  cursor: text; }\n\n[data-type="uagb/icon-list"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0; }\n',""]),e.a=i},517:function(t,e,n){"use strict";n.r(e);var a,i=n(3),o=n.n(i),s=n(4),l=n(0),c=n.n(l),r=n(14),u=n.n(r),d=n(277),b=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return b++||(a=u()(d.a,g)),p},p.unuse=function(){b>0&&!--b&&(a(),a=null)};var m=p,w=n(10);const _=["uagb/icon-list-child"],k=t=>{Object(l.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]),t=t.parentProps;const e=Object(w.a)(),{attributes:n}=t,{isPreview:a,className:i,icon_count:r,block_id:u}=n,d=Object(l.useMemo)(()=>{const t=[];for(let e=0;e<r;e++)t.push(["uagb/icon-list-child",{id:e+1}]);return t},[r]),b=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/icon-list.png";return a?c.a.createElement("img",{width:"100%",src:b,alt:""}):c.a.createElement("div",{className:o()(i,"uagb-editor-preview-mode-"+e.toLowerCase(),"uagb-block-"+u)},c.a.createElement("div",{className:"uagb-icon-list__wrap"},c.a.createElement(s.InnerBlocks,{template:d,templateLock:!1,allowedBlocks:_})))};e.default=c.a.memo(k)}}]);