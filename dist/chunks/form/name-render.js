(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{399:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),o=t(1),u=t.n(o),l=t(0),c=wp.components.ToggleControl,m=wp.blockEditor.RichText,i=function(e){var a=e=e.parentProps,t=a.attributes,n=a.setAttributes,o=a.isSelected,i=t.block_id,s=t.nameRequired,d=t.name,b=t.placeholder,g=s?Object(l.__)("required","ultimate-addons-for-gutenberg"):"";return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:r()("uagb-forms-name-wrap","uagb-forms-field-set","uagb-block-".concat(i))},o&&u.a.createElement("div",{className:"uagb-forms-required-wrap"},u.a.createElement(c,{label:Object(l.__)("Required","ultimate-addons-for-gutenberg"),checked:s,onChange:function(){return n({nameRequired:!s})}})),u.a.createElement(m,{tagName:"div",placeholder:Object(l.__)("Name","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return n({name:e})},className:"uagb-forms-name-label ".concat(g," uagb-forms-input-label"),multiline:!1,id:i}),u.a.createElement("input",{type:"text",placeholder:b,required:s,className:"uagb-forms-name-input uagb-forms-input",name:i})))};a.default=u.a.memo(i)}}]);