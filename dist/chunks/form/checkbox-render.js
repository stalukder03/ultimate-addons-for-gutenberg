(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[29],{263:function(e,t,n){"use strict";var a=n(18),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,'.uagb-forms-checkbox-wrap input[type="checkbox"],\n.uagb-form-checkbox-option input[type="checkbox"] {\n  vertical-align: middle;\n  margin-right: 15px; }\n\n.uagb-forms-checkbox-controls {\n  margin-top: 10px; }\n\n.uagb-form-checkbox-option-delete.has-icon {\n  vertical-align: middle;\n  padding: 10px;\n  margin: 0; }\n',""]),t.a=o},548:function(e,t,n){"use strict";n.r(t);var a,o=n(3),r=n.n(o),c=n(1),i=n.n(c),l=n(2),u=n(17),s=n.n(u),b=n(263),p=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=b.a.locals||{},g.use=function(){return p++||(a=s()(b.a,m)),g},g.unuse=function(){p>0&&!--p&&(a(),a=null)};var f=g,d=n(5),h=n(4);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){Object(c.useLayoutEffect)((function(){return f.use(),function(){f.unuse()}}),[]);var t=e.setState,n=e=e.parentProps,a=n.attributes,o=n.setAttributes,u=n.isSelected,s=a.block_id,b=a.checkboxRequired,p=a.options,m=a.checkboxName,g=p.map((function(e,t){return i.a.createElement("div",{key:t,className:"uagb-form-checkbox-option"},i.a.createElement("input",{type:"checkbox",name:"checkbox-".concat(s),value:e.optiontitle,id:e.optiontitle}),i.a.createElement("label",{htmlFor:e.optiontitle}),i.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optiontitle,onChange:function(e){return O({optiontitle:e.target.value,optionvalue:e.target.value},t)},type:"text",value:e.optiontitle}),i.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optionvalue,onChange:function(e){return O({optionvalue:e.target.value},t)},type:"text",value:e.optionvalue}),i.a.createElement(d.Button,{className:"uagb-form-checkbox-option-delete",icon:"trash",label:"Remove",onClick:function(){return x(t)}}))})),v=function(){return p.map((function(e,t){var n=e.optionvalue.replace(/\s+/g,"-").toLowerCase();return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"checkbox",className:"uagb-forms-checkbox",id:"checkbox-".concat(n,"-").concat(s),name:"".concat(m,"[]"),value:n,required:b}),i.a.createElement("label",{htmlFor:"checkbox-".concat(n,"-").concat(s)},e.optiontitle),i.a.createElement("br",null))}))},O=function(e,n){var a=p.map((function(t,a){return n===a&&(t=k(k({},t),e)),t}));o({options:a}),t({optionsstate:a})},x=function(e){var n=p.map((function(t,n){return e===n&&(p.splice(e,1),t={options:p}),t}));t({optionsstate:n}),o({deleteOptions:n})},y=b?Object(l.__)("required","ultimate-addons-for-gutenberg"):"";return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:r()("uagb-forms-checkbox-wrap","uagb-forms-field-set","uagb-block-".concat(s))},u&&i.a.createElement("div",{className:"uagb-forms-required-wrap"},i.a.createElement(d.ToggleControl,{label:Object(l.__)("Required","ultimate-addons-for-gutenberg"),checked:b,onChange:function(){return o({checkboxRequired:!b})}})),i.a.createElement(h.RichText,{tagName:"div",placeholder:Object(l.__)("Checkbox Title","ultimate-addons-for-gutenberg"),value:m,onChange:function(e){return o({checkboxName:e})},className:"uagb-forms-checkbox-label ".concat(y," uagb-forms-input-label"),multiline:!1,id:s}),u&&i.a.createElement(i.a.Fragment,null,g,i.a.createElement("div",{className:"uagb-forms-checkbox-controls"},i.a.createElement("div",null,i.a.createElement(d.Button,{isSecondary:!0,onClick:function(){var e={optiontitle:Object(l.__)("Option Name ","ultimate-addons-for-gutenberg")+"".concat(p.length+1),optionvalue:Object(l.__)("Option Value ","ultimate-addons-for-gutenberg")+"".concat(p.length+1)};p[p.length]=e;var n=p.map((function(e){return e}));o({options:n}),t({optionsstate:n})}},Object(l.__)(" + Add Option ","ultimate-addons-for-gutenberg"))))),!u&&i.a.createElement(v,null)))};t.default=i.a.memo(x)}}]);