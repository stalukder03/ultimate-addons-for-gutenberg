(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[23],{355:function(a,e,t){"use strict";var n=t(18),i=t.n(n)()((function(a){return a[1]}));i.push([a.i,'.uagb-faq-layout-accordion .uagb-faq-child__outer-wrap .uagb-faq-questions-button {\n  cursor: pointer; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-questions-button {\n  display: flex;\n  align-items: center;\n  width: 100%; }\n  [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-questions-button .uagb-faq-icon-wrap {\n    display: inline-block;\n    vertical-align: middle; }\n  [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-questions-button .uagb-question {\n    width: 100%;\n    margin-top: 0;\n    margin-bottom: 0; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-content p {\n  margin: 0; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-content {\n  border-width: 0; }\n  [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-content span {\n    display: inline-block; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item .uagb-icon-active,\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item.uagb-faq-item-active .uagb-icon {\n  display: none; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item .uagb-icon,\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item.uagb-faq-item-active .uagb-icon-active {\n  display: inline-block; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active .uagb-faq-item .uagb-faq-content {\n  display: block; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active .uagb-faq-item .uagb-icon {\n  display: none; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active .uagb-faq-item .uagb-icon-active {\n  display: inline-block; }\n\n.uagb-faq-layout-grid [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active .uagb-faq-item .uagb-icon-active {\n  display: none; }\n\n.uagb-faq-layout-grid [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active .uagb-faq-item .uagb-icon {\n  display: none; }\n\n.uagb-faq-layout-grid [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item .uagb-icon,\n.uagb-faq-layout-grid [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item.uagb-faq-item-active .uagb-icon-active {\n  display: none; }\n',""]),e.a=i},592:function(a,e,t){"use strict";t.r(e);var n,i=t(4),u=t.n(i),c=t(12),o=t(2),l=t(17),b=t.n(l),g=t(355),r=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=g.a.locals||{},s.use=function(){return r++||(n=b()(g.a,d)),s},s.unuse=function(){r>0&&!--r&&(n(),n=null)};var f=s,q=t(5),p=t(1),_=t.n(p);const h=a=>{Object(p.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]);const e=a.state;a=a.parentProps;const{attributes:t,setAttributes:n}=a,{question:i,answer:l,icon:b,iconActive:g,layout:r,headingTag:d}=t;return _.a.createElement("div",{className:u()("uagb-faq-child__outer-wrap","uagb-block-"+a.clientId.substr(0,8),a.isSelected&&!1!==e.isFocused?"uagb-faq__active":"")},_.a.createElement("div",{className:"uagb-faq-item",role:"tab",tabIndex:"0"},_.a.createElement("div",{className:"uagb-faq-questions-button uagb-faq-questions"},"accordion"===r&&_.a.createElement(_.a.Fragment,null,_.a.createElement("span",{className:"uagb-icon uagb-faq-icon-wrap"},Object(c.a)(b)),_.a.createElement("span",{className:"uagb-icon-active uagb-faq-icon-wrap"},Object(c.a)(g))),_.a.createElement(q.RichText,{tagName:"span"!==d?d:"div",placeholder:Object(o.__)("Question"),value:i,onChange:a=>n({question:a}),className:"uagb-question",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]})),_.a.createElement("div",{className:"uagb-faq-content"},_.a.createElement("span",null,_.a.createElement(q.RichText,{tagName:"p",placeholder:Object(o.__)("Answer"),value:l,onChange:a=>n({answer:a}),multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough","core/link"]})))))};e.default=_.a.memo(h)}}]);