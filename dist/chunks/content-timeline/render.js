(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[24],{301:function(e,t,n){"use strict";var i=n(17),l=n.n(i)()((function(e){return e[1]}));l.push([e.i,'/*\n  Content Timeline.\n*/\n.block-editor-inner-blocks .block-editor-block-list__layout .block-editor-block-list__block {\n  padding: 0;\n  margin: 0;\n  max-width: unset; }\n\n.edit-post-visual-editor .block-editor-block-list__block[data-type="uagb/content-timeline"] {\n  padding: 15px; }\n  .edit-post-visual-editor .block-editor-block-list__block[data-type="uagb/content-timeline"] .components-button svg {\n    fill: #fff;\n    width: 24px; }\n\n.edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__outer-wrap.uagb-timeline__left-block .uagb-timeline__line {\n  right: auto;\n  left: 34px; }\n\n.edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__outer-wrap.uagb-timeline__right-block .uagb-timeline__line {\n  right: 31px;\n  left: auto; }\n',""]),t.a=l},553:function(e,t,n){"use strict";n.r(t);var i,l=n(3),a=n.n(l),o=n(47),c=n(0),s=n.n(c),u=n(4),r=n(16),b=n.n(r),_=n(301),d=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=_.a.locals||{},g.use=function(){return d++||(i=b()(_.a,m)),g},g.unuse=function(){d>0&&!--d&&(i(),i=null)};var p=g,k=n(10);const f=["uagb/content-timeline-child"],w=e=>{Object(c.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),e=e.parentProps;const t=Object(k.a)(),{className:n,attributes:{isPreview:i,tm_content:l,timelineItem:r}}=e,b=Object(c.useMemo)(()=>{const e=[];for(let t=0;t<r;t++)e.push(["uagb/content-timeline-child",l[t]]);return e},[r,l]),_=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/content-timeline.png";return i?s.a.createElement("img",{width:"100%",src:_,alt:""}):s.a.createElement("div",{className:a()(n,"uagb-timeline__outer-wrap","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId,"uagb-timeline__content-wrap",...Object(o.a)(e.attributes))},s.a.createElement(u.InnerBlocks,{template:b,templateLock:!1,allowedBlocks:f}),s.a.createElement("div",{className:"uagb-timeline__line"},s.a.createElement("div",{className:"uagb-timeline__line__inner"})))};t.default=s.a.memo(w)}}]);