(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[91],{238:function(e,t,n){"use strict";var a=n(15),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,'/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.uagb-section__wrap::before {\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  z-index: 0;\n  border: 1px dashed #03ddff;\n  content: ""; }\n\n.uagb-section__edit-active.uagb-section__wrap::before {\n  border-color: #035cff; }\n\n.editor-bg-image-control .components-button,\n.editor-bg-video-control .components-button {\n  vertical-align: middle; }\n\n.editor-bg-image-control .components-button:last-child,\n.editor-bg-video-control .components-button:last-child {\n  margin-left: 10px; }\n\n.editor-block-list__layout .editor-block-list__block[data-align="full"][data-type="uagb/section"] {\n  margin-right: 0;\n  margin-left: 0; }\n',""]),t.a=o},473:function(e,t,n){"use strict";n.r(t);var a,o=n(3),i=n.n(o),r=n(0),c=n.n(r),l=n(4),s=n(14),u=n.n(s),d=n(238),b=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return b++||(a=u()(d.a,g)),p},p.unuse=function(){b>0&&!--b&&(a(),a=null)};var m=p,_=n(10);const f=e=>{Object(r.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]),e=e.parentProps;const t=Object(_.a)(),{attributes:n,isSelected:a,className:o}=e,{align:s,contentWidth:u,tag:d,backgroundType:b,backgroundVideo:g}=n,p=""+d,f=a?"active":"not-active";let v="";return"full_width"===u&&("wide"!==s&&"full"!==s||(v="align"+s)),c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{className:i()(o,"uagb-section__wrap","uagb-section__background-"+b,"uagb-section__edit-"+f,v,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},c.a.createElement("div",{className:"uagb-section__overlay"}),"video"===b&&c.a.createElement("div",{className:"uagb-section__video-wrap"},g&&c.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsinline:!0},c.a.createElement("source",{src:g.url,type:"video/mp4"}))),c.a.createElement("div",{className:"uagb-section__inner-wrap"},c.a.createElement(l.InnerBlocks,{templateLock:!1}))))};t.default=c.a.memo(f)}}]);