(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[31],{268:function(e,t,a){"use strict";var n=a(17),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,'.uagb-forms-checkbox-wrap input[type="checkbox"],\n.uagb-form-checkbox-option input[type="checkbox"] {\n  vertical-align: middle;\n  margin-right: 15px; }\n\n.uagb-forms-checkbox-controls {\n  margin-top: 10px; }\n\n.uagb-form-checkbox-option-delete.has-icon {\n  vertical-align: middle;\n  padding: 10px;\n  margin: 0; }\n',""]),t.a=o},507:function(e,t,a){"use strict";a.r(t);var n,o=a(3),l=a.n(o),c=a(0),i=a.n(c),r=a(1),u=a(16),s=a.n(u),m=a(268),b=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=m.a.locals||{},g.use=function(){return b++||(n=s()(m.a,p)),g},g.unuse=function(){b>0&&!--b&&(n(),n=null)};var d=g,h=a(6),f=a(4);const k=e=>{Object(c.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]);const{setState:t}=e;e=e.parentProps;const{attributes:a,setAttributes:n,isSelected:o}=e,{block_id:u,checkboxRequired:s,options:m,checkboxName:b}=a,p=m.map((e,t)=>i.a.createElement("div",{key:t,className:"uagb-form-checkbox-option"},i.a.createElement("input",{type:"checkbox",name:"checkbox-"+u,value:e.optiontitle,id:e.optiontitle}),i.a.createElement("label",{htmlFor:e.optiontitle}," "),i.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optiontitle,onChange:e=>k({optiontitle:e.target.value,optionvalue:e.target.value},t),type:"text",value:e.optiontitle}),i.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optionvalue,onChange:e=>k({optionvalue:e.target.value},t),type:"text",value:e.optionvalue}),i.a.createElement(h.Button,{className:"uagb-form-checkbox-option-delete",icon:"trash",label:"Remove",onClick:()=>v(t)}))),g=()=>m.map(e=>{const t=e.optionvalue.replace(/\s+/g,"-").toLowerCase();return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"checkbox",className:"uagb-forms-checkbox",id:`checkbox-${t}-${u}`,name:b+"[]",value:t,required:s}),i.a.createElement("label",{htmlFor:`checkbox-${t}-${u}`},e.optiontitle),i.a.createElement("br",null))}),k=(e,a)=>{const o=m.map((t,n)=>(a===n&&(t={...t,...e}),t));n({options:o}),t({optionsstate:o})},v=e=>{const a=m.map((t,a)=>(e===a&&(m.splice(e,1),t={options:m}),t));t({optionsstate:a}),n({deleteOptions:a})},x=s?Object(r.__)("required","ultimate-addons-for-gutenberg"):"";return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:l()("uagb-forms-checkbox-wrap","uagb-forms-field-set","uagb-block-"+u)},o&&i.a.createElement("div",{className:"uagb-forms-required-wrap"},i.a.createElement(h.ToggleControl,{label:Object(r.__)("Required","ultimate-addons-for-gutenberg"),checked:s,onChange:()=>n({checkboxRequired:!s})})),i.a.createElement(f.RichText,{tagName:"div",placeholder:Object(r.__)("Checkbox Title","ultimate-addons-for-gutenberg"),value:b,onChange:e=>n({checkboxName:e}),className:`uagb-forms-checkbox-label ${x} uagb-forms-input-label`,multiline:!1,id:u}),o&&i.a.createElement(i.a.Fragment,null,p,i.a.createElement("div",{className:"uagb-forms-checkbox-controls"},i.a.createElement("div",null,i.a.createElement(h.Button,{isSecondary:!0,onClick:()=>{const e={optiontitle:Object(r.__)("Option Name ","ultimate-addons-for-gutenberg")+""+(m.length+1),optionvalue:Object(r.__)("Option Value ","ultimate-addons-for-gutenberg")+""+(m.length+1)};m[m.length]=e;const a=m.map(e=>e);n({options:a}),t({optionsstate:a})}},Object(r.__)(" + Add Option ","ultimate-addons-for-gutenberg"))))),!o&&i.a.createElement(g,null)))};t.default=i.a.memo(k)}}]);