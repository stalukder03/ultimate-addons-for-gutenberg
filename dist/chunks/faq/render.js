(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[13],{279:function(t,a,e){"use strict";var n=e(11),o=e.n(n)()((function(t){return t[1]}));o.push([t.i,'[data-type="uagb/faq"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-right: 0;\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0; }\n\n[data-type="uagb/faq"] .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: block; }\n\n[data-type="uagb/faq"] .uagb-faq__outer-wrap {\n  padding: 15px; }\n\n[data-type="uagb/faq"] .uagb-faq-layout-grid\n.block-editor-inner-blocks\n> .block-editor-block-list__layout {\n  display: grid; }\n\n[data-type="uagb/faq"] .uagb-faq-layout-grid.uagb-faq-equal-height\n.block-editor-inner-blocks\n> .block-editor-block-list__layout .block-editor-block-list__block,\n[data-type="uagb/faq"] .uagb-faq-layout-grid.uagb-faq-equal-height\n.block-editor-inner-blocks\n> .block-editor-block-list__layout .uagb-faq-child__outer-wrap,\n[data-type="uagb/faq"] .uagb-faq-layout-grid.uagb-faq-equal-height\n.block-editor-inner-blocks\n> .block-editor-block-list__layout .uagb-faq-item {\n  height: 100%; }\n',""]),a.a=o},378:function(t,a,e){"use strict";e.r(a);var n,o=e(2),i=e.n(o),l=e(3),u=e(0),r=e.n(u),c=e(10),b=e.n(c),g=e(279),s=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=g.a.locals||{},f.use=function(){return s++||(n=b()(g.a,d)),f},f.unuse=function(){s>0&&!--s&&(n(),n=null)};var k=f,p=["uagb/faq-child"],q=[],_=function(t){Object(u.useLayoutEffect)((function(){return k.use(),function(){k.unuse()}}),[]);var a=t=t.parentProps,e=a.attributes,n=a.deviceType,o=e.equalHeight,c=Object(u.useMemo)((function(){for(var t=[],a=0;a<2;a++)t.push(["uagb/faq-child",q[a]]);return t}),[2,q]),b=o?"uagb-faq-equal-height":"";return r.a.createElement("div",{className:i()("uagb-faq__outer-wrap","uagb-editor-preview-mode-".concat(n.toLowerCase()),"uagb-block-".concat(t.clientId.substr(0,8)),"uagb-faq-icon-".concat(t.attributes.iconAlign),"uagb-faq-layout-".concat(t.attributes.layout),"uagb-faq-expand-first-".concat(t.attributes.expandFirstItem),"uagb-faq-inactive-other-".concat(t.attributes.inactiveOtherItems),b),"data-faqtoggle":t.attributes.enableToggle,role:"tablist"},r.a.createElement(l.InnerBlocks,{template:c,templateLock:!1,allowedBlocks:p,__experimentalMoverDirection:"vertical"}))};a.default=r.a.memo(_)}}]);