(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[11],{240:function(t,e,a){"use strict";var n=a(15),r=a.n(n)()((function(t){return t[1]}));r.push([t.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.uagb-cta__content-wrap.uagb-cta__icon-position-above-title {\n  text-align: center; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-cta__block-link-wrap {\n  color: inherit; }\n\n.block-editor-page #wpwrap .uagb-cta__title,\n.block-editor-page #wpwrap .uagb-cta-separator-parent,\n.block-editor-page #wpwrap .uagb-cta__desc {\n  margin-bottom: 10px; }\n\n.block-editor-page #wpwrap .uagb-cta__desc {\n  margin: 0; }\n\n.block-editor-page #wpwrap .uagb-cta__block-link i {\n  font-style: normal; }\n\n.wp-block-uagb-call-to-action.uagb-cta__outer-wrap a.uagb-cta__link-to-all {\n  z-index: 0; }\n\n.block-editor-page #wpwrap .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .block-editor-page #wpwrap .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .block-editor-page #wpwrap .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n\n.block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n\n.block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n",""]),e.a=r},478:function(t,e,a){"use strict";a.r(e);var n,r=a(3),o=a.n(r),i=a(0),c=a.n(i),l=a(47),b=a(48),p=a(98),u=a(14),g=a.n(u),_=a(240),w=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=_.a.locals||{},s.use=function(){return w++||(n=g()(_.a,d)),s},s.unuse=function(){w>0&&!--w&&(n(),n=null)};var m=s,k=a(10);const f=t=>{Object(i.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]),t=t.parentProps;const{setAttributes:e,attributes:a}=t,n=Object(k.a)(),{block_id:r,ctaPosition:u,ctaType:g,stack:_}=a,w=c.a.createElement(p.a,{attributes:a,setAttributes:e}),d=c.a.createElement(b.a,{attributes:a,setAttributes:e,props:t}),s=c.a.createElement(l.a,{attributes:a,setAttributes:e,props:t}),f=()=>c.a.createElement(c.a.Fragment,null,"below-title"===u&&c.a.createElement(c.a.Fragment,null,s,d,w),"right"===u&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"uagb-cta__wrap"},s,d),w));let h;return"right"===u&&"none"!==_&&(h="uagb-cta__content-stacked-"+_+" "),c.a.createElement("div",{className:o()("uagb-block-"+r,"uagb-editor-preview-mode-"+n.toLowerCase(),"uagb-cta__outer-wrap","button"===g?"wp-block-button":"",h)},"all"===g&&c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{href:"/",className:"uagb-cta__link-to-all",rel:"noopener noreferrer"}," "),f()),"all"!==g&&f())};e.default=c.a.memo(f)}}]);