(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[48],{362:function(e,t,n){"use strict";var a=n(15),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,'/* The switch - the box around the slider */\n.uagb-switch {\n  position: relative;\n  display: inline-block;\n  /* The slider */ }\n  .uagb-switch input {\n    width: 0;\n    height: 0;\n    opacity: 0; }\n  .uagb-switch .uagb-slider {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    cursor: pointer;\n    transition: 0.4s;\n    -webkit-transition: 0.4s; }\n  .uagb-switch .uagb-slider::before {\n    position: absolute;\n    bottom: 4px;\n    left: 4px;\n    background-color: #fff;\n    transition: 0.4s;\n    content: "";\n    -webkit-transition: 0.4s; }\n\n.uagb-switch input:checked + .uagb-slider::before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n.uagb-slider.round {\n  border-radius: 34px; }\n\n.uagb-slider.round::before {\n  border-radius: 50%; }\n',""]),t.a=r},598:function(e,t,n){"use strict";n.r(t);var a,r=n(4),s=n.n(r),u=n(1),i=n.n(u),o=n(2),l=n(14),c=n.n(l),d=n(362),b=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return b++||(a=c()(d.a,g)),m},m.unuse=function(){b>0&&!--b&&(a(),a=null)};var f=m,p=n(3),h=n(5),w=function(e){Object(u.useLayoutEffect)((function(){return f.use(),function(){f.unuse()}}),[]);var t=e=e.parentProps,n=t.attributes,a=t.setAttributes,r=t.isSelected,l=n.block_id,c=n.toggleRequired,d=n.name,b=n.toggleStatus,g=n.layout,m=n.trueValue,w=n.falseValue,_=c?Object(o.__)("required","ultimate-addons-for-gutenberg"):"";return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:s()("uagb-forms-toggle-wrap","uagb-forms-field-set","uagb-block-".concat(l))},r&&i.a.createElement("div",{className:"uagb-forms-required-wrap"},i.a.createElement(p.ToggleControl,{label:Object(o.__)("Required","ultimate-addons-for-gutenberg"),checked:c,onChange:function(){return a({toggleRequired:!c})}})),i.a.createElement(h.RichText,{tagName:"div",placeholder:Object(o.__)("Name","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return a({name:e})},className:"uagb-forms-toggle-label ".concat(_," uagb-forms-input-label"),multiline:!1,id:l}),i.a.createElement("label",{htmlFor:l,className:"uagb-switch"},i.a.createElement("input",{type:"hidden",className:"uagb-forms-toggle-input",checked:b,"data-truestate":m,"data-falsestate":w,value:b?m:w,required:c,name:l}),i.a.createElement("input",{type:"checkbox",className:"uagb-forms-toggle-input",readOnly:!0,checked:b,"data-truestate":m,"data-falsestate":w,value:b?m:w,required:c,name:l}),i.a.createElement("span",{className:"uagb-slider ".concat(g)}))))};t.default=i.a.memo(w)}}]);