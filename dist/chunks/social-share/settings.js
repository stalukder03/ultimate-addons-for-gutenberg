(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[91],{515:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a(1),o=a.n(l),r=a(16),i=a(116),u=a(97),b=a(60),s=a(2),c=a(5),d=a(4),m=function(e){var t=e=e.parentProps,a=t.attributes,m=t.setAttributes,g=(t.deviceType,a.align),_=a.gap,p=a.stack,f=a.social_layout,y=a.borderRadius,k=a.size,v=a.sizeType,O=a.sizeMobile,j=a.sizeTablet,E=a.bgSize,z=[{key:"px",name:Object(s.__)("px","ultimate-addons-for-gutenberg")},{key:"em",name:Object(s.__)("em","ultimate-addons-for-gutenberg")}];return d.ButtonGroup,Object(s.__)("Size Type","ultimate-addons-for-gutenberg"),z.map((function(e){var t=e.name,a=e.key;return o.a.createElement(d.Button,{key:a,className:"uagb-size-btn",isSmall:!0,isPrimary:v===a,"aria-pressed":v===a,onClick:function(){return m({sizeType:a})}},t)})),o.a.createElement(l.Suspense,{fallback:Object(n.a)()},o.a.createElement(c.BlockControls,null,o.a.createElement(c.BlockAlignmentToolbar,{value:g,onChange:function(e){m({align:e})},controls:["left","center","right"]})),o.a.createElement(c.InspectorControls,null,o.a.createElement(u.a,{tabs:["general","style","advance"]},o.a.createElement(b.a,{key:"general"},o.a.createElement(d.PanelBody,{title:Object(s.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(d.SelectControl,{label:Object(s.__)("Layout","ultimate-addons-for-gutenberg"),value:f,options:[{value:"horizontal",label:Object(s.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(s.__)("Vertical","ultimate-addons-for-gutenberg")}],onChange:function(e){return m({social_layout:e})}}),"horizontal"==f&&o.a.createElement(o.a.Fragment,null,o.a.createElement(d.SelectControl,{label:Object(s.__)("Stack on","ultimate-addons-for-gutenberg"),value:p,options:[{value:"none",label:Object(s.__)("None","ultimate-addons-for-gutenberg")},{value:"desktop",label:Object(s.__)("Desktop","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(s.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(s.__)("Mobile","ultimate-addons-for-gutenberg")}],onChange:function(e){return m({stack:e})},help:Object(s.__)("Note: Choose on what breakpoint the Icons will stack.","ultimate-addons-for-gutenberg")})))),o.a.createElement(b.a,{key:"style"},o.a.createElement(d.PanelBody,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(i.a,{label:Object(s.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:k,label:"size"},tablet:{value:j,label:"sizeTablet"},mobile:{value:O,label:"sizeMobile"}},min:0,max:500,displayUnit:!1,setAttributes:m}),o.a.createElement(r.a,{label:Object(s.__)("Background Size","ultimate-addons-for-gutenberg"),setAttributes:m,value:E,onChange:function(e){return m({bgSize:e})},min:0,max:500,displayUnit:!1}),o.a.createElement(r.a,{label:Object(s.__)("Border Radius","ultimate-addons-for-gutenberg"),setAttributes:m,value:y,onChange:function(e){return m({borderRadius:e})},min:0,max:500,displayUnit:!1}),o.a.createElement(r.a,{label:Object(s.__)("Gap between Items","ultimate-addons-for-gutenberg"),setAttributes:m,value:_,onChange:function(e){return m({gap:e})},min:0,max:100,displayUnit:!1}))),o.a.createElement(b.a,{key:"advance"}))))};t.default=o.a.memo(m)}}]);