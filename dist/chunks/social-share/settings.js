(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[99],{538:function(e,t,a){"use strict";a.r(t);var l=a(8),o=a(0),n=a.n(o),r=a(11),i=a(81),b=a(80),u=a(23),s=a(19),c=a(1),g=a(12),d=a(4),m=a(6),_=a(14),p=a(20),f=a(37),v=a(66);const h=[{defaultAttributes:f.a},{defaultChildAttributes:v.a},{value:"preset-1",label:Object(c.__)("Preset 1","ultimate-addons-for-gutenberg"),attributes:[{label:"gap",value:15},{label:"bgSize",value:15},{label:"size",value:15},{label:"borderRadius",value:0},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#fff"},{label:"icon_bg_color",value:"#0170B9"}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 28H22V44H6V28Z" /><path d="M28 28H44V44H28V28Z" /><path d="M50 28H66V44H50V28Z" /></svg>'},{value:"preset-2",label:Object(c.__)("Preset 2","ultimate-addons-for-gutenberg"),attributes:[{label:"gap",value:15},{label:"bgSize",value:15},{label:"size",value:15},{label:"borderRadius",value:5}],childAttributes:[{label:"icon_color",value:"#fff"},{label:"icon_bg_color",value:"#0170B9"}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 32C6 29.7909 7.79086 28 10 28H18C20.2091 28 22 29.7909 22 32V40C22 42.2091 20.2091 44 18 44H10C7.79086 44 6 42.2091 6 40V32Z" /><path d="M28 32C28 29.7909 29.7909 28 32 28H40C42.2091 28 44 29.7909 44 32V40C44 42.2091 42.2091 44 40 44H32C29.7909 44 28 42.2091 28 40V32Z" /><path d="M50 32C50 29.7909 51.7909 28 54 28H62C64.2091 28 66 29.7909 66 32V40C66 42.2091 64.2091 44 62 44H54C51.7909 44 50 42.2091 50 40V32Z" /></svg>'},{value:"preset-3",label:Object(c.__)("Preset 3","ultimate-addons-for-gutenberg"),attributes:[{label:"gap",value:15},{label:"bgSize",value:15},{label:"size",value:15},{label:"borderRadius",value:100}],childAttributes:[{label:"icon_color",value:"#fff"},{label:"icon_bg_color",value:"#0170B9"}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 36C6 31.5817 9.58172 28 14 28C18.4183 28 22 31.5817 22 36C22 40.4183 18.4183 44 14 44C9.58172 44 6 40.4183 6 36Z" /><path d="M28 36C28 31.5817 31.5817 28 36 28C40.4183 28 44 31.5817 44 36C44 40.4183 40.4183 44 36 44C31.5817 44 28 40.4183 28 36Z" /><path d="M50 36C50 31.5817 53.5817 28 58 28C62.4183 28 66 31.5817 66 36C66 40.4183 62.4183 44 58 44C53.5817 44 50 40.4183 50 36Z" /></svg>'}];var O=Object(p.applyFilters)("uag_social_share_presets",h),j=a(120);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const w=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{align:p,gap:f,stack:v,social_layout:h,borderRadius:w,size:z,sizeType:E,sizeMobile:k,sizeTablet:A,bgSize:y}=t;return n.a.createElement(o.Suspense,{fallback:Object(l.a)()},n.a.createElement(d.BlockControls,null,n.a.createElement(d.BlockAlignmentToolbar,{value:p,onChange:e=>{a({align:e})},controls:["left","center","right"]})),n.a.createElement(d.InspectorControls,null,n.a.createElement(b.a,null,n.a.createElement(u.b,u.a.general,n.a.createElement(_.a,{title:Object(c.__)("Presets","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(j.a,{setAttributes:a,presets:O,presetInputType:"radioImage"})),n.a.createElement(_.a,{initialOpen:!0},n.a.createElement(s.a,{setAttributes:a,label:Object(c.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:h,label:"social_layout"},className:"uagb-multi-button-alignment-control",options:[{value:"horizontal",label:Object(c.__)("Horizontal","ultimate-addons-for-gutenberg"),tooltip:Object(c.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(c.__)("Vertical","ultimate-addons-for-gutenberg"),tooltip:Object(c.__)("Vertical","ultimate-addons-for-gutenberg")}],showIcons:!1}),n.a.createElement(s.a,{setAttributes:a,label:Object(c.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:p,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(m.Icon,{icon:Object(g.a)("fa fa-align-left")}),tooltip:Object(c.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(m.Icon,{icon:Object(g.a)("fa fa-align-center")}),tooltip:Object(c.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(m.Icon,{icon:Object(g.a)("fa fa-align-right")}),tooltip:Object(c.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),"horizontal"===h&&n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{setAttributes:a,label:Object(c.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:v,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(c.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(c.__)("None","ultimate-addons-for-gutenberg")},{value:"desktop",label:Object(c.__)("Desktop","ultimate-addons-for-gutenberg"),tooltip:Object(c.__)("Desktop","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(c.__)("Tablet","ultimate-addons-for-gutenberg"),tooltip:Object(c.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(c.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(c.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(c.__)("Note: Choose on what breakpoint the Icons will stack.","ultimate-addons-for-gutenberg")})))),n.a.createElement(u.b,u.a.style,n.a.createElement(_.a,{title:Object(c.__)("Common","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(i.a,{label:Object(c.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:z,label:"size"},tablet:{value:A,label:"sizeTablet"},mobile:{value:k,label:"sizeMobile"}},min:0,max:100,unit:{value:E,label:"sizeType"},setAttributes:a}),n.a.createElement(r.a,{label:Object(c.__)("Background Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:y,onChange:e=>a({bgSize:e}),min:0,max:100,displayUnit:!1,help:Object(c.__)("Note: Background Size option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),n.a.createElement(r.a,{label:Object(c.__)("Border Radius","ultimate-addons-for-gutenberg"),setAttributes:a,value:w,onChange:e=>a({borderRadius:e}),min:0,max:100,displayUnit:!1,help:Object(c.__)("Note: Border Radius option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),n.a.createElement(r.a,{label:Object(c.__)("Gap between Items","ultimate-addons-for-gutenberg"),setAttributes:a,value:f,onChange:e=>a({gap:e}),min:0,max:100,displayUnit:!1}))),n.a.createElement(u.b,C({},u.a.advance,{parentProps:e})))))};t.default=n.a.memo(w)}}]);