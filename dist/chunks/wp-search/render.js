(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[112],{371:function(e,a,t){"use strict";var r=t(19),n=t.n(r)()((function(e){return e[1]}));n.push([e.i,'[data-type="uagb/wp-search"] .uagb-layout-input-button .uagb-search-submit {\n  border: none;\n  border-radius: 0;\n  color: #fff; }\n\n[data-type="uagb/wp-search"] .uagb-layout-input-button svg {\n  fill: currentColor; }\n\n[data-type="uagb/wp-search"] .uagb-layout-input .uagb-wp-search-icon-wrap {\n  display: flex;\n  align-items: center; }\n\n[data-type="uagb/wp-search"] .uagb-layout-input svg {\n  fill: currentColor;\n  opacity: 0.6; }\n\n[data-type="uagb/wp-search"] .uagb-wp-search__outer-wrap {\n  width: 100%;\n  min-height: 20px; }\n  [data-type="uagb/wp-search"] .uagb-wp-search__outer-wrap .uagb-search-wrapper .uagb-search-form__container {\n    display: flex;\n    overflow: hidden; }\n    [data-type="uagb/wp-search"] .uagb-wp-search__outer-wrap .uagb-search-wrapper .uagb-search-form__container .uagb-search-form__input {\n      width: 100%; }\n',""]),a.a=n},612:function(e,a,t){"use strict";t.r(a);var r,n=t(4),u=t.n(n),o=t(1),c=t.n(o),s=t(12),l=t(2),i=t(18),b=t.n(i),p=t(371),g=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=p.a.locals||{},m.use=function(){return g++||(r=b()(p.a,h)),m},m.unuse=function(){g>0&&!--g&&(r(),r=null)};var d=m,_=t(5);const w=e=>{Object(o.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]),e=e.parentProps;const{attributes:a,setAttributes:t,deviceType:r}=e,{block_id:n,layout:i,placeholder:b,buttonType:p,buttonText:g}=a;return c.a.createElement("div",{className:u()("uagb-wp-search__outer-wrap","uagb-editor-preview-mode-"+r.toLowerCase(),"uagb-block-"+n,"uagb-layout-"+i)},"input-button"===i?c.a.createElement("form",{className:"uagb-search-wrapper",onSubmit:e=>e.preventDefault(),role:"search",action:uagb_blocks_info.uagb_home_url,method:"get"},c.a.createElement("div",{className:"uagb-search-form__container wp-block-button",role:"tablist"},c.a.createElement("input",{placeholder:b,className:"uagb-search-form__input",type:"search",name:"s",title:"Search"}),c.a.createElement("button",{className:"uagb-search-submit wp-block-button__link",type:"submit"},"icon"===p&&c.a.createElement("span",{className:"uagb-wp-search-button-icon-wrap"},Object(s.a)("fas fa-search")),"text"===p&&c.a.createElement(_.RichText,{tagName:"span",placeholder:Object(l.__)("Search","ultimate-addons-for-gutenberg"),value:g,onChange:e=>t({buttonText:e}),className:"uagb-wp-search-button-text",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]})))):"","input"===i?c.a.createElement("form",{className:"uagb-search-wrapper",onSubmit:e=>e.preventDefault(),role:"search",action:uagb_blocks_info.uagb_home_url,method:"get"},c.a.createElement("div",{className:"uagb-search-form__container",role:"tablist"},c.a.createElement("span",{className:"uagb-wp-search-icon-wrap"},Object(s.a)("fas fa-search")),c.a.createElement("input",{placeholder:b,className:"uagb-search-form__input",type:"search",name:"s",title:"Search"}))):"")};a.default=c.a.memo(w)}}]);