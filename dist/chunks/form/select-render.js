(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{446:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),o=n(2),l=n.n(o),i=n(1);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=wp.components,m=p.Button,b=p.ToggleControl,f=wp.blockEditor.RichText,g=function(e){var t=e.setState,n=e=e.parentProps,a=n.attributes,o=n.setAttributes,c=n.isSelected,s=a.block_id,p=a.selectRequired,g=a.options,d=a.selectName,v=g.map((function(e,t){return l.a.createElement("div",{key:t,className:"uagb-form-select-option"},l.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optiontitle,onChange:function(e){return E({optiontitle:e.target.value,optionvalue:e.target.value},t)},type:"text",value:e.optiontitle}),l.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optionvalue,onChange:function(e){return E({optionvalue:e.target.value},t)},type:"text",value:e.optionvalue}),l.a.createElement(m,{className:"uagb-form-select-option-delete",icon:"trash",label:"Remove",onClick:function(){return j(t)}}))})),O=function(){var e=g.map((function(e,t){return l.a.createElement("option",{key:t,value:e.optionvalue},e.optiontitle)}));return l.a.createElement("select",{className:"uagb-forms-select-box uagb-forms-input",required:p,name:s,defaultValue:""},l.a.createElement("option",{value:"",disabled:!0},Object(i.__)("Select your option","ultimate-addons-for-gutenberg")),e)},E=function(e,n){var a=g.map((function(t,a){return n===a&&(t=u(u({},t),e)),t}));o({options:a}),t({optionsstate:a})},j=function(e){var n=g.map((function(t,n){return e===n&&(g.splice(e,1),t={options:g}),t}));t({optionsstate:n}),o({deleteCurrentOptions:n})},w=p?Object(i.__)("required","ultimate-addons-for-gutenberg"):"";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:r()("uagb-forms-select-wrap","uagb-forms-field-set","uagb-block-".concat(s))},c&&l.a.createElement("div",{className:"uagb-forms-required-wrap"},l.a.createElement(b,{label:Object(i.__)("Required","ultimate-addons-for-gutenberg"),checked:p,onChange:function(){return o({selectRequired:!p})}})),l.a.createElement(f,{tagName:"div",placeholder:Object(i.__)("Select Title","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return o({selectName:e})},className:"uagb-forms-select-label ".concat(w," uagb-forms-input-label"),multiline:!1,id:s}),c&&l.a.createElement(l.a.Fragment,null,v,l.a.createElement("div",{className:"uagb-forms-select-controls"},l.a.createElement("div",null,l.a.createElement(m,{isSecondary:!0,onClick:function(){var e={optiontitle:Object(i.__)("Option Name ","ultimate-addons-for-gutenberg")+"".concat(g.length+1),optionvalue:Object(i.__)("Option Value ","ultimate-addons-for-gutenberg")+"".concat(g.length+1)};g[g.length]=e;var n=g.map((function(e){return e}));o({options:n}),t({optionsstate:n})}},Object(i.__)(" + Add Option ","ultimate-addons-for-gutenberg"))))),!c&&l.a.createElement(O,null)))};t.default=l.a.memo(g)}}]);