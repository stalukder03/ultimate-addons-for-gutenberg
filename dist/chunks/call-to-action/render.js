(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[7],{275:function(t,e,a){"use strict";var r=a(11),n=a.n(r)()((function(t){return t[1]}));n.push([t.i,"/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.uagb-cta__content-wrap.uagb-cta__icon-position-above-title {\n  text-align: center; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-cta__block-link-wrap {\n  color: inherit; }\n\n.block-editor-page #wpwrap .uagb-cta__title,\n.block-editor-page #wpwrap .uagb-cta-separator-parent,\n.block-editor-page #wpwrap .uagb-cta__desc {\n  margin-bottom: 10px; }\n\n.block-editor-page #wpwrap .uagb-cta__desc {\n  margin: 0; }\n\n.block-editor-page #wpwrap .uagb-cta__block-link i {\n  font-style: normal; }\n\n.wp-block-uagb-call-to-action.uagb-cta__outer-wrap a.uagb-cta__link-to-all {\n  z-index: 0; }\n\n.block-editor-page #wpwrap .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .block-editor-page #wpwrap .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .block-editor-page #wpwrap .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n\n.block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n\n.block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .block-editor-page #wpwrap .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n",""]),e.a=n},375:function(t,e,a){"use strict";a.r(e);var r,n=a(2),o=a.n(n),i=a(0),c=a.n(i),l=a(9),u=a(31),b=a(29),p=a(30),g=a(35),_=a(10),s=a.n(_),d=a(275),w=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=d.a.locals||{},f.use=function(){return w++||(r=s()(d.a,m)),f},f.unuse=function(){w>0&&!--w&&(r(),r=null)};var k=f;function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var h=function(t){Object(i.useLayoutEffect)((function(){return k.use(),function(){k.unuse()}}),[]);var e=t=t.parentProps,a=e.className,r=e.setAttributes,n=e.attributes,_=e.deviceType,s=n.block_id,d=n.ctaPosition,w=n.ctaType,m=c.a.createElement(g.a,{attributes:n,setAttributes:r}),f=c.a.createElement("div",{className:"uagb-cta-text-wrap"},c.a.createElement(p.a,{attributes:n,setAttributes:r,props:t})),h=c.a.createElement("div",{className:"uagb-cta__title-wrap"},c.a.createElement(b.a,{attributes:n,setAttributes:r,props:t})),y=function(){return c.a.createElement("div",{className:o.a.apply(void 0,["uagb-cta__content-wrap"].concat((t=Object(u.a)(n),function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return v(t,void 0);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?v(t,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())))},c.a.createElement("div",{className:"uagb-cta__left-right-wrap"},c.a.createElement("div",{className:"uagb-cta__content"},"below-title"==d&&c.a.createElement(c.a.Fragment,null,h,f,m),"right"==d&&c.a.createElement(c.a.Fragment,null,h,f)),"right"==d&&m));var t};return c.a.createElement(i.Suspense,{fallback:Object(l.a)()},c.a.createElement("div",{className:o()(a,"uagb-cta__outer-wrap","uagb-block-".concat(s),"uagb-editor-preview-mode-".concat(_.toLowerCase()))},"all"==w&&c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{href:"/",className:"uagb-cta__block-link-wrap uagb-cta__link-to-all",rel:"noopener noreferrer"}," "),y()),"all"!==w&&y()))};e.default=c.a.memo(h)}}]);