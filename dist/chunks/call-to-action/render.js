(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[11],{273:function(t,e,a){"use strict";var r=a(14),n=a.n(r)()((function(t){return t[1]}));n.push([t.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.uagb-cta__content-wrap.uagb-cta__icon-position-above-title {\n  text-align: center; }\n\n.editor-styles-wrapper .edit-post-visual-editor a.uagb-cta__block-link-wrap {\n  color: inherit; }\n\n.editor-styles-wrapper .uagb-cta__title,\n.editor-styles-wrapper .uagb-cta-separator-parent,\n.editor-styles-wrapper .uagb-cta__desc {\n  margin-bottom: 10px; }\n\n.editor-styles-wrapper .uagb-cta__desc {\n  margin: 0; }\n\n.editor-styles-wrapper .uagb-cta__block-link i {\n  font-style: normal; }\n\n.wp-block-uagb-call-to-action.uagb-cta__outer-wrap a.uagb-cta__link-to-all {\n  z-index: 0; }\n\n.editor-styles-wrapper .uagb-cta__outer-wrap .uagb-cta__buttons {\n  display: inline-flex; }\n\n.editor-styles-wrapper .uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper,\n.editor-styles-wrapper .uagb-cta__outer-wrap a.uagb-cta-second__button {\n  text-decoration: none;\n  fill: currentColor; }\n\n.editor-styles-wrapper .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .editor-styles-wrapper .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .editor-styles-wrapper .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n\n.editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n\n.editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n",""]),e.a=n},513:function(t,e,a){"use strict";a.r(e);var r,n=a(3),o=a.n(n),i=a(0),l=a.n(i),c=a(67),u=a(68),s=a(136),b=a(137),p=a(13),_=a.n(p),g=a(273),d=0,w={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return d++||(r=_()(g.a,w)),m},m.unuse=function(){d>0&&!--d&&(r(),r=null)};var f=m,k=a(10);const y=t=>{Object(i.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]),t=t.parentProps;const{setAttributes:e,attributes:a}=t,r=Object(k.a)(),{isPreview:n,block_id:p,ctaType:_,enabledSecondCtaButton:g}=a,d=l.a.createElement(s.a,{attributes:a,setAttributes:e}),w="button"===_&&g?l.a.createElement(b.a,{attributes:a,setAttributes:e}):"",m=l.a.createElement(u.a,{attributes:a,setAttributes:e,props:t}),y=l.a.createElement(c.a,{attributes:a,setAttributes:e,props:t}),h=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"uagb-cta__wrap"},y,m),l.a.createElement("div",{className:"uagb-cta__buttons"},d,w)),v=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/call-to-action.png";return n?l.a.createElement("img",{width:"100%",src:v,alt:""}):l.a.createElement("div",{className:o()("uagb-block-"+p,"uagb-editor-preview-mode-"+r.toLowerCase(),"uagb-cta__outer-wrap","button"===_?"wp-block-button":"")},"all"===_&&l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{href:"/",className:"uagb-cta__link-to-all",rel:"noopener noreferrer"}," "),h()),"all"!==_&&h())};e.default=l.a.memo(y)}}]);