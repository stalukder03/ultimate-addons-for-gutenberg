(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[62],{307:function(e,a,t){"use strict";var n=t(14),r=t.n(n)()((function(e){return e[1]}));r.push([e.i,'[data-type="uagb/wp-search"] .uagb-layout-input-button .uagb-search-submit {\n  border: none;\n  border-radius: 0;\n  color: #fff; }\n\n[data-type="uagb/wp-search"] .uagb-layout-input-button svg {\n  fill: currentColor; }\n\n[data-type="uagb/wp-search"] .uagb-layout-input .uagb-wp-search-icon-wrap {\n  display: flex;\n  align-items: center; }\n\n[data-type="uagb/wp-search"] .uagb-layout-input svg {\n  fill: currentColor;\n  opacity: 0.6; }\n\n[data-type="uagb/wp-search"] .uagb-wp-search__outer-wrap {\n  width: 100%;\n  min-height: 20px; }\n  [data-type="uagb/wp-search"] .uagb-wp-search__outer-wrap .uagb-search-wrapper .uagb-search-form__container {\n    display: flex;\n    overflow: hidden; }\n    [data-type="uagb/wp-search"] .uagb-wp-search__outer-wrap .uagb-search-wrapper .uagb-search-form__container .uagb-search-form__input {\n      width: 100%; }\n',""]),a.a=r},419:function(e,a,t){"use strict";t.r(a);var n,r=t(3),u=t.n(r),c=t(1),o=t.n(c),s=t(10),l=t(2),i=t(13),b=t.n(i),p=t(307),g=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=p.a.locals||{},m.use=function(){return g++||(n=b()(p.a,h)),m},m.unuse=function(){g>0&&!--g&&(n(),n=null)};var d=m,_=t(4),f=function(e){Object(c.useLayoutEffect)((function(){return d.use(),function(){d.unuse()}}),[]);var a=e=e.parentProps,t=a.attributes,n=a.setAttributes,r=a.deviceType,i=t.block_id,b=t.layout,p=t.placeholder,g=t.buttonType,h=t.buttonText;return o.a.createElement("div",{className:u()("uagb-wp-search__outer-wrap","uagb-editor-preview-mode-".concat(r.toLowerCase()),"uagb-block-".concat(i),"uagb-layout-".concat(b))},"input-button"===b?o.a.createElement("form",{className:"uagb-search-wrapper",onSubmit:function(e){return e.preventDefault()},role:"search",action:uagb_blocks_info.uagb_home_url,method:"get"},o.a.createElement("div",{className:"uagb-search-form__container wp-block-button",role:"tablist"},o.a.createElement("input",{placeholder:p,className:"uagb-search-form__input",type:"search",name:"s",title:"Search"}),o.a.createElement("button",{className:"uagb-search-submit wp-block-button__link",type:"submit"},"icon"===g&&o.a.createElement("span",{className:"uagb-wp-search-button-icon-wrap"},Object(s.a)("fas fa-search")),"text"===g&&o.a.createElement(_.RichText,{tagName:"span",placeholder:Object(l.__)("Search","ultimate-addons-for-gutenberg"),value:h,onChange:function(e){return n({buttonText:e})},className:"uagb-wp-search-button-text",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]})))):"","input"===b?o.a.createElement("form",{className:"uagb-search-wrapper",onSubmit:function(e){return e.preventDefault()},role:"search",action:uagb_blocks_info.uagb_home_url,method:"get"},o.a.createElement("div",{className:"uagb-search-form__container",role:"tablist"},o.a.createElement("span",{className:"uagb-wp-search-icon-wrap"},Object(s.a)("fas fa-search")),o.a.createElement("input",{placeholder:p,className:"uagb-search-form__input",type:"search",name:"s",title:"Search"}))):"")};a.default=o.a.memo(f)}}]);