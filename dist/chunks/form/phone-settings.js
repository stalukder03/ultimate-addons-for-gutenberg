(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[40],{446:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(2),o=a(57),u=a(23),c=a(7),b=a(5),s=a(15);const d=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{phoneRequired:n,pattern:d}=t;return r.a.createElement(b.InspectorControls,null,r.a.createElement(o.a,{tabs:["general","advance"]},r.a.createElement(u.b,u.a.general,r.a.createElement(s.a,{initialOpen:!0},r.a.createElement(c.ToggleControl,{label:Object(l.__)("Required","ultimate-addons-for-gutenberg"),checked:n,onChange:()=>a({phoneRequired:!n})}),r.a.createElement(c.SelectControl,{label:Object(l.__)("Pattern"),value:d,options:[{label:"None",value:""},{label:"123-45-678",value:Object(l.__)("[0-9]{3}-[0-9]{2}-[0-9]{3}","ultimate-addons-for-gutenberg")},{label:"123-456-6789",value:Object(l.__)("[0-9]{3}-[0-9]{3}-[0-9]{4}","ultimate-addons-for-gutenberg")}],onChange:e=>a({pattern:e})}))),r.a.createElement(u.b,u.a.advance)))};t.default=r.a.memo(d)}}]);