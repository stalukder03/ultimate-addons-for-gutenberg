(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[51],{264:function(e,t,a){"use strict";var n=a(15),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,'/* The switch - the box around the slider */\n.uagb-switch {\n  position: relative;\n  display: inline-block;\n  /* The slider */ }\n  .uagb-switch input {\n    width: 0;\n    height: 0;\n    opacity: 0; }\n  .uagb-switch .uagb-slider {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    cursor: pointer;\n    transition: 0.4s;\n    -webkit-transition: 0.4s; }\n  .uagb-switch .uagb-slider::before {\n    position: absolute;\n    bottom: 4px;\n    left: 4px;\n    background-color: #fff;\n    transition: 0.4s;\n    content: "";\n    -webkit-transition: 0.4s; }\n\n.uagb-switch input:checked + .uagb-slider::before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n.uagb-slider.round {\n  border-radius: 34px; }\n\n.uagb-slider.round::before {\n  border-radius: 50%; }\n',""]),t.a=r},506:function(e,t,a){"use strict";a.r(t);var n,r=a(3),s=a.n(r),i=a(0),l=a.n(i),o=a(1),u=a(14),c=a.n(u),d=a(264),b=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return b++||(n=c()(d.a,g)),m},m.unuse=function(){b>0&&!--b&&(n(),n=null)};var f=m,p=a(6),h=a(4);const w=e=>{Object(i.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]),e=e.parentProps;const{attributes:t,setAttributes:a,isSelected:n}=e,{block_id:r,toggleRequired:u,name:c,toggleStatus:d,layout:b,trueValue:g,falseValue:m}=t,w=u?Object(o.__)("required","ultimate-addons-for-gutenberg"):"";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:s()("uagb-forms-toggle-wrap","uagb-forms-field-set","uagb-block-"+r)},n&&l.a.createElement("div",{className:"uagb-forms-required-wrap"},l.a.createElement(p.ToggleControl,{label:Object(o.__)("Required","ultimate-addons-for-gutenberg"),checked:u,onChange:()=>a({toggleRequired:!u})})),l.a.createElement(h.RichText,{tagName:"div",placeholder:Object(o.__)("Name","ultimate-addons-for-gutenberg"),value:c,onChange:e=>a({name:e}),className:`uagb-forms-toggle-label ${w} uagb-forms-input-label`,multiline:!1,id:r}),l.a.createElement("label",{htmlFor:r,className:"uagb-switch"},l.a.createElement("input",{type:"hidden",className:"uagb-forms-toggle-input",checked:d,"data-truestate":g,"data-falsestate":m,value:d?g:m,required:u,name:r}),l.a.createElement("input",{type:"checkbox",className:"uagb-forms-toggle-input",readOnly:!0,checked:d,"data-truestate":g,"data-falsestate":m,value:d?g:m,required:u,name:r}),l.a.createElement("span",{className:"uagb-slider "+b}))))};t.default=l.a.memo(w)}}]);