(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[27],{290:function(a,t,e){"use strict";var o=e(17),i=e.n(o)()((function(a){return a[1]}));i.push([a.i,'[data-type="uagb/faq"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-right: 0;\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0; }\n\n[data-type="uagb/faq"] .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: block; }\n\n[data-type="uagb/faq"] .uagb-faq__outer-wrap {\n  padding: 15px; }\n\n[data-type="uagb/faq"] .uagb-faq-layout-grid .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: grid; }\n\n[data-type="uagb/faq"] .uagb-faq-layout-grid.uagb-faq-equal-height .block-editor-inner-blocks > .block-editor-block-list__layout .block-editor-block-list__block,\n[data-type="uagb/faq"] .uagb-faq-layout-grid.uagb-faq-equal-height .block-editor-inner-blocks > .block-editor-block-list__layout .uagb-faq-child__outer-wrap,\n[data-type="uagb/faq"] .uagb-faq-layout-grid.uagb-faq-equal-height .block-editor-inner-blocks > .block-editor-block-list__layout .uagb-faq-item {\n  height: 100%; }\n',""]),t.a=i},533:function(a,t,e){"use strict";e.r(t);var o,i=e(3),l=e.n(i),n=e(4),u=e(0),r=e.n(u),b=e(16),c=e.n(b),s=e(290),g=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=s.a.locals||{},f.use=function(){return g++||(o=c()(s.a,d)),f},f.unuse=function(){g>0&&!--g&&(o(),o=null)};var k=f,p=e(10);const _=["uagb/faq-child"],q=[],y=a=>{Object(u.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),a=a.parentProps;const t=Object(p.a)(),{attributes:e}=a,{isPreview:o,equalHeight:i}=e,b=Object(u.useMemo)(()=>{const a=[];for(let t=0;t<2;t++)a.push(["uagb/faq-child",q[t]]);return a},[2,q]),c=i?"uagb-faq-equal-height":"",s=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/faq.png";return o?r.a.createElement("img",{width:"100%",src:s,alt:""}):r.a.createElement("div",{className:l()("uagb-faq__outer-wrap","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+a.clientId.substr(0,8),"uagb-faq-icon-"+a.attributes.iconAlign,"uagb-faq-layout-"+a.attributes.layout,"uagb-faq-expand-first-"+a.attributes.expandFirstItem,"uagb-faq-inactive-other-"+a.attributes.inactiveOtherItems,c),"data-faqtoggle":a.attributes.enableToggle,role:"tablist"},r.a.createElement(n.InnerBlocks,{template:b,templateLock:!1,allowedBlocks:_,__experimentalMoverDirection:"vertical"}))};t.default=r.a.memo(y)}}]);