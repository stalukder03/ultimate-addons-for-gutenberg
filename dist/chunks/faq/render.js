(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[27],{302:function(a,t,e){"use strict";var o=e(14),i=e.n(o)()((function(a){return a[1]}));i.push([a.i,'[data-type="uagb/faq"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-right: 0;\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0; }\n\n[data-type="uagb/faq"] .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: block; }\n\n[data-type="uagb/faq"] .uagb-faq__outer-wrap {\n  padding: 15px; }\n\n[data-type="uagb/faq"] .uagb-faq-layout-grid .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: grid; }\n\n[data-type="uagb/faq"] .uagb-faq-layout-grid.uagb-faq-equal-height .block-editor-inner-blocks > .block-editor-block-list__layout .block-editor-block-list__block,\n[data-type="uagb/faq"] .uagb-faq-layout-grid.uagb-faq-equal-height .block-editor-inner-blocks > .block-editor-block-list__layout .uagb-faq-child__outer-wrap,\n[data-type="uagb/faq"] .uagb-faq-layout-grid.uagb-faq-equal-height .block-editor-inner-blocks > .block-editor-block-list__layout .uagb-faq-item {\n  height: 100%; }\n\n[data-type="uagb/faq"] .uagb-editor-preview-mode-mobile.uagb-faq-layout-grid.uagb-faq-equal-height .block-editor-inner-blocks > .block-editor-block-list__layout .block-editor-block-list__block,\n[data-type="uagb/faq"] .uagb-editor-preview-mode-mobile.uagb-faq-layout-grid.uagb-faq-equal-height .block-editor-inner-blocks > .block-editor-block-list__layout .uagb-faq-child__outer-wrap,\n[data-type="uagb/faq"] .uagb-editor-preview-mode-mobile.uagb-faq-layout-grid.uagb-faq-equal-height .block-editor-inner-blocks > .block-editor-block-list__layout .uagb-faq-item {\n  height: auto; }\n',""]),t.a=i},545:function(a,t,e){"use strict";e.r(t);var o,i=e(3),l=e.n(i),u=e(4),b=e(0),n=e.n(b),r=e(13),c=e.n(r),g=e(302),d=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=g.a.locals||{},f.use=function(){return d++||(o=c()(g.a,s)),f},f.unuse=function(){d>0&&!--d&&(o(),o=null)};var k=f,q=e(10);const p=["uagb/faq-child"],_=[],y=a=>{Object(b.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),a=a.parentProps;const t=Object(q.a)(),{attributes:e}=a,{isPreview:o,equalHeight:i}=e,r=Object(b.useMemo)(()=>{const a=[];for(let t=0;t<2;t++)a.push(["uagb/faq-child",_[t]]);return a},[2,_]),c=i?"uagb-faq-equal-height":"",g=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/faq.png";return o?n.a.createElement("img",{width:"100%",src:g,alt:""}):n.a.createElement("div",{className:l()("uagb-faq__outer-wrap","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+a.clientId.substr(0,8),"uagb-faq-icon-"+a.attributes.iconAlign,"uagb-faq-layout-"+a.attributes.layout,"uagb-faq-expand-first-"+a.attributes.expandFirstItem,"uagb-faq-inactive-other-"+a.attributes.inactiveOtherItems,c),"data-faqtoggle":a.attributes.enableToggle,role:"tablist"},n.a.createElement(u.InnerBlocks,{template:r,templateLock:!1,allowedBlocks:p,__experimentalMoverDirection:"vertical"}))};t.default=n.a.memo(y)}}]);