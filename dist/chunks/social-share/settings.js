(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[94],{156:function(e,t,a){"use strict";var l=a(19),n=a.n(l)()((function(e){return e[1]}));n.push([e.i,".uagb-presets-radio-image-wrap {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap; }\n  .uagb-presets-radio-image-wrap .uag-presets-radio-input {\n    display: none; }\n  .uagb-presets-radio-image-wrap .uag-presets-radio-input-label {\n    position: relative;\n    display: flex; }\n  .uagb-presets-radio-image-wrap svg {\n    width: 72px;\n    height: 70px;\n    margin-right: 10px;\n    margin-bottom: 10px;\n    border: 1px solid #4b596c;\n    border-radius: 4px;\n    fill: #4b596c;\n    color: #4b596c; }\n  .uagb-presets-radio-image-wrap .uag-presets-radio-input:checked + .uag-presets-radio-input-label svg {\n    background: #4b596c;\n    color: #fff;\n    fill: #fff; }\n  .uagb-presets-radio-image-wrap .uag-presets-radio-image-clickable {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%; }\n\n.uagb-inspector-tab .components-panel__body .uag-presets-label {\n  line-height: 2.4; }\n",""]),t.a=n},157:function(e,t,a){"use strict";var l,n=a(7),o=a(2),r=a(3),i=a(18),s=a.n(i),u=a(156),b=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=u.a.locals||{},g.use=function(){return b++||(l=s()(u.a,c)),g},g.unuse=function(){b>0&&!--b&&(l(),l=null)};var d=g,p=a(1),m=a.n(p),f=a(11);const _=e=>{Object(p.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]);const{setAttributes:t,presets:a,presetInputType:l,label:o}=e,[i,s]=Object(r.useState)(""),u=e=>{s(e),a&&a.map(a=>("default"!==e&&"default"===a.value&&a.attributes&&a.attributes.map(e=>(t({[e.label]:e.value}),e)),a.value&&a.value===e&&a.attributes&&(a.attributes.map(e=>(t({[e.label]:e.value}),e)),a.childAttributes&&b(a)),a))},b=e=>{const{getSelectedBlock:t}=Object(f.select)("core/block-editor");let a=[];t().innerBlocks&&(a=t().innerBlocks);const l=[];a.map(e=>(e.clientId&&l.push(e.clientId),e));const n={};e.childAttributes.map(e=>(n[e.label]=e.value,e)),l.map(e=>(Object(f.dispatch)("core/block-editor").updateBlockAttributes(e,n),e))},c=a.map(e=>{const t=e.value,a=i===t;return m.a.createElement(m.a.Fragment,null,m.a.createElement("input",{key:t,className:"uag-presets-radio-input",type:"radio",value:t,checked:a,onChange:()=>u(t),onClick:()=>u(t)}),m.a.createElement("label",{htmlFor:t,className:"uag-presets-radio-input-label"},m.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.icon}}),m.a.createElement("span",{className:"uag-presets-radio-image-clickable",onClick:()=>u(t),title:e.label})," "))}),g=m.a.createElement(n.SelectControl,{className:"uagb-presets-dropdown",onChange:u,options:a,label:o}),_=m.a.createElement(m.a.Fragment,null,m.a.createElement("label",{htmlFor:"uag-presets-label",className:"uag-presets-label"},o),m.a.createElement("div",{className:"uagb-presets-radio-image-wrap"},c));return m.a.createElement("div",{className:"uagb-presets-main-wrap"},"dropdown"===l&&g,"radioImage"===l&&_)};_.defaultProps={presetInputType:"dropdown",label:Object(o.__)("Select Preset","ultimate-addons-for-gutenberg")},t.a=m.a.memo(_)},464:function(e,t,a){"use strict";a.r(t);var l=a(10),n=a(1),o=a.n(n),r=a(13),i=a(58),s=a(57),u=a(23),b=a(22),c=a(2),g=a(12),d=a(5),p=a(7),m=a(15),f=a(21);const _=[{value:"preset-1",label:Object(c.__)("Preset 1","ultimate-addons-for-gutenberg"),attributes:[{label:"gap",value:15},{label:"bgSize",value:15},{label:"size",value:15},{label:"borderRadius",value:0},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#fff"},{label:"icon_bg_color",value:"#0170B9"}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 28H22V44H6V28Z" /><path d="M28 28H44V44H28V28Z" /><path d="M50 28H66V44H50V28Z" /></svg>'},{value:"preset-2",label:Object(c.__)("Preset 2","ultimate-addons-for-gutenberg"),attributes:[{label:"gap",value:15},{label:"bgSize",value:15},{label:"size",value:15},{label:"borderRadius",value:5},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#fff"},{label:"icon_bg_color",value:"#0170B9"}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 32C6 29.7909 7.79086 28 10 28H18C20.2091 28 22 29.7909 22 32V40C22 42.2091 20.2091 44 18 44H10C7.79086 44 6 42.2091 6 40V32Z" /><path d="M28 32C28 29.7909 29.7909 28 32 28H40C42.2091 28 44 29.7909 44 32V40C44 42.2091 42.2091 44 40 44H32C29.7909 44 28 42.2091 28 40V32Z" /><path d="M50 32C50 29.7909 51.7909 28 54 28H62C64.2091 28 66 29.7909 66 32V40C66 42.2091 64.2091 44 62 44H54C51.7909 44 50 42.2091 50 40V32Z" /></svg>'},{value:"preset-3",label:Object(c.__)("Preset 3","ultimate-addons-for-gutenberg"),attributes:[{label:"gap",value:15},{label:"bgSize",value:15},{label:"size",value:15},{label:"borderRadius",value:100},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#fff"},{label:"icon_bg_color",value:"#0170B9"}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 36C6 31.5817 9.58172 28 14 28C18.4183 28 22 31.5817 22 36C22 40.4183 18.4183 44 14 44C9.58172 44 6 40.4183 6 36Z" /><path d="M28 36C28 31.5817 31.5817 28 36 28C40.4183 28 44 31.5817 44 36C44 40.4183 40.4183 44 36 44C31.5817 44 28 40.4183 28 36Z" /><path d="M50 36C50 31.5817 53.5817 28 58 28C62.4183 28 66 31.5817 66 36C66 40.4183 62.4183 44 58 44C53.5817 44 50 40.4183 50 36Z" /></svg>'}];var h=Object(f.applyFilters)("uag_social_share_presets",_),v=a(157);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const O=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{align:f,gap:_,stack:O,social_layout:j,borderRadius:C,size:E,sizeType:k,sizeMobile:y,sizeTablet:z,bgSize:x}=t;return o.a.createElement(n.Suspense,{fallback:Object(l.a)()},o.a.createElement(d.BlockControls,null,o.a.createElement(d.BlockAlignmentToolbar,{value:f,onChange:e=>{a({align:e})},controls:["left","center","right"]})),o.a.createElement(d.InspectorControls,null,o.a.createElement(s.a,null,o.a.createElement(u.b,u.a.general,o.a.createElement(m.a,{title:Object(c.__)("Presets","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(v.a,{setAttributes:a,presets:h,presetInputType:"radioImage"})),o.a.createElement(m.a,{initialOpen:!0},o.a.createElement(b.a,{setAttributes:a,label:Object(c.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:j,label:"social_layout"},className:"uagb-multi-button-alignment-control",options:[{value:"horizontal",label:Object(c.__)("Horizontal","ultimate-addons-for-gutenberg"),tooltip:Object(c.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(c.__)("Vertical","ultimate-addons-for-gutenberg"),tooltip:Object(c.__)("Vertical","ultimate-addons-for-gutenberg")}],showIcons:!1}),o.a.createElement(b.a,{setAttributes:a,label:Object(c.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:f,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(p.Icon,{icon:Object(g.a)("fa fa-align-left")}),tooltip:Object(c.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(p.Icon,{icon:Object(g.a)("fa fa-align-center")}),tooltip:Object(c.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(p.Icon,{icon:Object(g.a)("fa fa-align-right")}),tooltip:Object(c.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),"horizontal"===j&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{setAttributes:a,label:Object(c.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:O,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(c.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(c.__)("None","ultimate-addons-for-gutenberg")},{value:"desktop",label:Object(c.__)("Desktop","ultimate-addons-for-gutenberg"),tooltip:Object(c.__)("Desktop","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(c.__)("Tablet","ultimate-addons-for-gutenberg"),tooltip:Object(c.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(c.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(c.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(c.__)("Note: Choose on what breakpoint the Icons will stack.","ultimate-addons-for-gutenberg")})))),o.a.createElement(u.b,u.a.style,o.a.createElement(m.a,{title:Object(c.__)("Common","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(i.a,{label:Object(c.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:E,label:"size"},tablet:{value:z,label:"sizeTablet"},mobile:{value:y,label:"sizeMobile"}},min:0,max:100,unit:{value:k,label:"sizeType"},setAttributes:a}),o.a.createElement(r.a,{label:Object(c.__)("Background Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:x,onChange:e=>a({bgSize:e}),min:0,max:100,displayUnit:!1,help:Object(c.__)("Note: Background Size option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),o.a.createElement(r.a,{label:Object(c.__)("Border Radius","ultimate-addons-for-gutenberg"),setAttributes:a,value:C,onChange:e=>a({borderRadius:e}),min:0,max:100,displayUnit:!1,help:Object(c.__)("Note: Border Radius option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),o.a.createElement(r.a,{label:Object(c.__)("Gap between Items","ultimate-addons-for-gutenberg"),setAttributes:a,value:_,onChange:e=>a({gap:e}),min:0,max:100,displayUnit:!1,help:Object(c.__)("Note: The gap between the items will seen larger in the editor, for better user edit experience. But at frontend the gap will be exactly what is set from here.","ultimate-addons-for-gutenberg")}))),o.a.createElement(u.b,w({},u.a.advance,{parentProps:e})))))};t.default=o.a.memo(O)}}]);