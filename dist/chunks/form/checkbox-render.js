(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[31],{300:function(e,t,a){"use strict";var n=a(15),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,'.uagb-forms-checkbox-wrap input[type="checkbox"],\n.uagb-form-checkbox-option input[type="checkbox"] {\n  vertical-align: middle;\n  margin-right: 15px; }\n\n.uagb-forms-checkbox-controls {\n  margin-top: 10px; }\n\n.uagb-form-checkbox-option-delete.has-icon {\n  vertical-align: middle;\n  padding: 10px;\n  margin: 0; }\n\n.uagb-form-checkbox-option .uagb-inner-input-view {\n  margin-right: 20px; }\n',""]),t.a=o},539:function(e,t,a){"use strict";a.r(t);var n,o=a(4),l=a.n(o),i=a(0),c=a.n(i),r=a(1),u=a(14),s=a.n(u),m=a(300),b=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=m.a.locals||{},g.use=function(){return b++||(n=s()(m.a,p)),g},g.unuse=function(){b>0&&!--b&&(n(),n=null)};var d=g,h=a(7),f=a(5);const k=e=>{Object(i.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]);const{setState:t}=e;e=e.parentProps;const{attributes:a,setAttributes:n,isSelected:o}=e,{block_id:u,checkboxRequired:s,options:m,checkboxName:b}=a,p=m.map((e,t)=>c.a.createElement("div",{key:t,className:"uagb-form-checkbox-option"},c.a.createElement("input",{type:"checkbox",name:"checkbox-"+u,value:e.optiontitle,id:e.optiontitle}),c.a.createElement("label",{htmlFor:e.optiontitle}," "),c.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optiontitle,onChange:e=>k({optiontitle:e.target.value,optionvalue:e.target.value},t),type:"text",value:e.optiontitle}),c.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optionvalue,onChange:e=>k({optionvalue:e.target.value},t),type:"text",value:e.optionvalue}),c.a.createElement(h.Button,{className:"uagb-form-checkbox-option-delete",icon:"trash",label:"Remove",onClick:()=>x(t)}))),g=()=>m.map(e=>{const t=e.optionvalue.replace(/\s+/g,"-").toLowerCase();return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"checkbox",className:"uagb-forms-checkbox",id:`checkbox-${t}-${u}`,name:b+"[]",value:t,required:s}),c.a.createElement("label",{htmlFor:`checkbox-${t}-${u}`},e.optiontitle),c.a.createElement("br",null))}),k=(e,a)=>{const o=m.map((t,n)=>(a===n&&(t={...t,...e}),t));n({options:o}),t({optionsstate:o})},x=e=>{const a=m.map((t,a)=>(e===a&&(m.splice(e,1),t={options:m}),t));t({optionsstate:a}),n({deleteOptions:a})},v=s?Object(r.__)("required","ultimate-addons-for-gutenberg"):"";return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:l()("uagb-forms-checkbox-wrap","uagb-forms-field-set","uagb-block-"+u)},o&&c.a.createElement("div",{className:"uagb-forms-required-wrap"},c.a.createElement(h.ToggleControl,{label:Object(r.__)("Required","ultimate-addons-for-gutenberg"),checked:s,onChange:()=>n({checkboxRequired:!s})})),c.a.createElement(f.RichText,{tagName:"div",placeholder:Object(r.__)("Checkbox Title","ultimate-addons-for-gutenberg"),value:b,onChange:e=>n({checkboxName:e}),className:`uagb-forms-checkbox-label ${v} uagb-forms-input-label`,multiline:!1,id:u}),o&&c.a.createElement(c.a.Fragment,null,p,c.a.createElement("div",{className:"uagb-forms-checkbox-controls"},c.a.createElement("div",null,c.a.createElement(h.Button,{isSecondary:!0,onClick:()=>{const e={optiontitle:Object(r.__)("Option Name ","ultimate-addons-for-gutenberg")+""+(m.length+1),optionvalue:Object(r.__)("Option Value ","ultimate-addons-for-gutenberg")+""+(m.length+1)};m[m.length]=e;const a=m.map(e=>e);n({options:a}),t({optionsstate:a})}},Object(r.__)(" + Add Option ","ultimate-addons-for-gutenberg"))))),!o&&c.a.createElement(g,null)))};t.default=c.a.memo(k)}}]);