(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[15],{253:function(n,e,o){"use strict";var t=o(15),a=o.n(t)()((function(n){return n[1]}));a.push([n.i,'/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.wp-block[data-type="uagb/column"]::before {\n  content: "";\n  position: absolute;\n  border: 1px dashed #a3aeb6;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n  width: 100%;\n  height: 100%; }\n\n.is-selected.wp-block[data-type="uagb/column"]::before {\n  border-color: #59646c; }\n\n.editor-bg-image-control .components-button,\n.editor-bg-video-control .components-button {\n  vertical-align: middle; }\n\n.editor-bg-image-control .components-button:last-child,\n.editor-bg-video-control .components-button:last-child {\n  margin-left: 10px; }\n\n.wp-block[data-type="uagb/column"] .block-editor-block-list__block-edit {\n  height: 100%; }\n\n.uagb-column__inner-wrap .block-editor-block-list__block {\n  margin-left: 0;\n  margin-right: 0; }\n\n.wp-block-uagb-column.uagb-column__wrap .uagb-column__inner-wrap,\n.wp-block-uagb-column.uagb-column__wrap .block-editor-inner-blocks {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 2; }\n\n.wp-block-uagb-columns.uagb-editor-preview-mode-mobile > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.wp-block-uagb-columns.uagb-editor-preview-mode-tablet > .block-editor-inner-blocks > .block-editor-block-list__layout {\n  flex-wrap: wrap; }\n\n.wp-block-uagb-columns > .editor-inner-blocks > .editor-block-list__layout > [data-type="uagb/column"] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: -14px;\n  margin-right: -14px;\n  min-width: 0;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  flex-basis: 100%; }\n\n.edit-post-visual-editor .uagb-column__inner-wrap .block-editor-block-list__block > .editor-block-mover {\n  left: -30px; }\n\n@media (max-width: 449px) {\n  .block-editor-page #wpwrap .uagb-columns__inner-wrap .block-editor-block-list__block {\n    background-attachment: scroll !important; } }\n',""]),e.a=a},491:function(n,e,o){"use strict";o.r(e);var t,a=o(3),l=o.n(a),i=o(4),r=o(0),c=o.n(r),b=o(14),u=o.n(b),d=o(253),s=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return s++||(t=u()(d.a,g)),m},m.unuse=function(){s>0&&!--s&&(t(),t=null)};var p=m,_=o(10);const k=n=>{Object(r.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const e=Object(_.a)(),{attributes:{align:o,backgroundType:t,alignMobile:a,alignTablet:b},isSelected:u,className:d}=n.parentProps,s=u?"active":"not-active",g="center"===o?"":"uagb-column__align-"+o,m=""===a?"":"uagb-column__align-mobile-"+a,k=""===b?"":"uagb-column__align-tablet-"+b;return c.a.createElement("div",{className:l()(d,"uagb-column__wrap","uagb-column__background-"+t,"uagb-column__edit-"+s,g,m,k,"uagb-editor-preview-mode-"+e.toLowerCase(),"uagb-block-"+n.parentProps.clientId.substr(0,8))},c.a.createElement("div",{className:"uagb-column__overlay"}),c.a.createElement(i.InnerBlocks,{templateLock:!1}))};e.default=c.a.memo(k)}}]);