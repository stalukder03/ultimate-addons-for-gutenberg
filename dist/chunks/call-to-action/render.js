(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[11],{356:function(t,e,a){"use strict";var n=a(19),r=a.n(n)()((function(t){return t[1]}));r.push([t.i,"/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.uagb-cta__content-wrap.uagb-cta__icon-position-above-title {\n  text-align: center; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-cta__block-link-wrap {\n  color: inherit; }\n\n.block-editor-page #wpwrap .uagb-cta__title,\n.block-editor-page #wpwrap .uagb-cta-separator-parent,\n.block-editor-page #wpwrap .uagb-cta__desc {\n  margin-bottom: 10px; }\n\n.block-editor-page #wpwrap .uagb-cta__desc {\n  margin: 0; }\n\n.block-editor-page #wpwrap .uagb-cta__block-link i {\n  font-style: normal; }\n\n.wp-block-uagb-call-to-action.uagb-cta__outer-wrap a.uagb-cta__link-to-all {\n  z-index: 0; }\n\n.block-editor-page #wpwrap .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .block-editor-page #wpwrap .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .block-editor-page #wpwrap .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n\n.block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n\n.block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n",""]),e.a=r},594:function(t,e,a){"use strict";a.r(e);var n,r=a(4),c=a.n(r),o=a(1),i=a.n(o),l=a(11),b=a(52),p=a(50),u=a(51),g=a(130),_=a(18),s=a.n(_),w=a(356),d=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},k={};k.locals=w.a.locals||{},k.use=function(){return d++||(n=s()(w.a,m)),k},k.unuse=function(){d>0&&!--d&&(n(),n=null)};var f=k;const h=t=>{Object(o.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]),t=t.parentProps;const{className:e,setAttributes:a,attributes:n,deviceType:r}=t,{block_id:_,ctaPosition:s,ctaType:w}=n,d=i.a.createElement(g.a,{attributes:n,setAttributes:a}),m=i.a.createElement("div",{className:"uagb-cta-text-wrap"},i.a.createElement(u.a,{attributes:n,setAttributes:a,props:t})),k=i.a.createElement("div",{className:"uagb-cta__title-wrap"},i.a.createElement(p.a,{attributes:n,setAttributes:a,props:t})),h=()=>i.a.createElement("div",{className:c()("uagb-cta__content-wrap",...Object(b.a)(n))},i.a.createElement("div",{className:"uagb-cta__left-right-wrap"},i.a.createElement("div",{className:"uagb-cta__content"},"below-title"===s&&i.a.createElement(i.a.Fragment,null,k,m,d),"right"===s&&i.a.createElement(i.a.Fragment,null,k,m)),"right"===s&&d));return i.a.createElement(o.Suspense,{fallback:Object(l.a)()},i.a.createElement("div",{className:c()(e,"uagb-cta__outer-wrap","uagb-block-"+_,"uagb-editor-preview-mode-"+r.toLowerCase())},"all"===w&&i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{href:"/",className:"uagb-cta__block-link-wrap uagb-cta__link-to-all",rel:"noopener noreferrer"}," "),h()),"all"!==w&&h()))};e.default=i.a.memo(h)}}]);