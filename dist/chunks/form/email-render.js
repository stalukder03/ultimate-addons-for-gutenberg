(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[35],{262:function(e,t,a){"use strict";var n=a(15),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,'.uagb-columns__wrap::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border: 1px dashed #03ddff;\n  content: ""; }\n',""]),t.a=r},502:function(e,t,a){"use strict";a.r(t);var n,r=a(3),u=a.n(r),l=a(0),o=a.n(l),i=a(1),s=a(14),c=a.n(s),d=a(262),m=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=d.a.locals||{},g.use=function(){return m++||(n=c()(d.a,b)),g},g.unuse=function(){m>0&&!--m&&(n(),n=null)};var f=g,p=a(4),_=a(6);const h=e=>{Object(l.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]),e=e.parentProps;const{attributes:t,setAttributes:a,isSelected:n}=e,{block_id:r,name:s,required:c,placeholder:d}=t,m=c?Object(i.__)("required","ultimate-addons-for-gutenberg"):"";return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:u()("uagb-forms-email-wrap","uagb-forms-field-set","uagb-block-"+r)},n&&o.a.createElement("div",{className:"uagb-forms-required-wrap"},o.a.createElement(_.ToggleControl,{label:Object(i.__)("Required","ultimate-addons-for-gutenberg"),checked:c,onChange:()=>a({required:!c})})),o.a.createElement(p.RichText,{tagName:"div",placeholder:Object(i.__)("Email","ultimate-addons-for-gutenberg"),value:s,onChange:e=>a({name:e}),className:`uagb-forms-email-label ${m} uagb-forms-input-label`,multiline:!1,id:r}),o.a.createElement("input",{type:"text",className:"uagb-forms-email-input uagb-forms-input",placeholder:d,required:c,name:r})))};t.default=o.a.memo(h)}}]);