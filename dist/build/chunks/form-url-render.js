(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{473:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),l=t(3),u=t.n(l),o=t(0),c=wp.components,i=c.ToggleControl,m=(c.TextControl,wp.blockEditor.RichText),s=function(e){var a=e=e.parentProps,t=a.attributes,r=a.setAttributes,l=a.isSelected,c=t.block_id,s=t.required,d=t.name,b=t.placeholder,g=s?Object(o.__)("required","ultimate-addons-for-gutenberg"):"";return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:n()("uagb-forms-url-wrap","uagb-forms-field-set","uagb-block-".concat(c))},l&&u.a.createElement("div",{className:"uagb-forms-required-wrap"},u.a.createElement(i,{label:Object(o.__)("Required","ultimate-addons-for-gutenberg"),checked:s,onChange:function(e){return r({required:!s})}})),u.a.createElement(m,{tagName:"div",placeholder:Object(o.__)("URL Name","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return r({name:e})},className:"uagb-forms-url-label ".concat(g," uagb-forms-input-label"),multiline:!1,id:c}),u.a.createElement("input",{type:"url",name:c,placeholder:b,required:s,className:"uagb-forms-url-input uagb-forms-input"})))};a.default=u.a.memo(s)}}]);