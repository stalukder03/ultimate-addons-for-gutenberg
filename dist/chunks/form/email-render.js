(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[32],{429:function(e,t,n){"use strict";var a=n(18),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,'.uagb-columns__wrap::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border: 1px dashed #03ddff;\n  content: ""; }\n',""]),t.a=r},629:function(e,t,n){"use strict";n.r(t);var a,r=n(4),u=n.n(r),o=n(1),i=n.n(o),l=n(2),s=n(17),c=n.n(s),d=n(429),m=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=d.a.locals||{},f.use=function(){return m++||(a=c()(d.a,b)),f},f.unuse=function(){m>0&&!--m&&(a(),a=null)};var g=f,p=n(5),_=n(3),h=function(e){Object(o.useLayoutEffect)((function(){return g.use(),function(){g.unuse()}}),[]);var t=e=e.parentProps,n=t.attributes,a=t.setAttributes,r=t.isSelected,s=n.block_id,c=n.name,d=n.required,m=n.placeholder,b=d?Object(l.__)("required","ultimate-addons-for-gutenberg"):"";return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:u()("uagb-forms-email-wrap","uagb-forms-field-set","uagb-block-".concat(s))},r&&i.a.createElement("div",{className:"uagb-forms-required-wrap"},i.a.createElement(_.ToggleControl,{label:Object(l.__)("Required","ultimate-addons-for-gutenberg"),checked:d,onChange:function(){return a({required:!d})}})),i.a.createElement(p.RichText,{tagName:"div",placeholder:Object(l.__)("Email","ultimate-addons-for-gutenberg"),value:c,onChange:function(e){return a({name:e})},className:"uagb-forms-email-label ".concat(b," uagb-forms-input-label"),multiline:!1,id:s}),i.a.createElement("input",{type:"text",className:"uagb-forms-email-input uagb-forms-input",placeholder:m,required:d,name:s})))};t.default=i.a.memo(h)}}]);