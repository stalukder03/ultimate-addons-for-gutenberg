(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[42],{463:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(1),r=a(79),u=a(26),b=a(7),c=a(4),d=a(17);const s=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{phoneRequired:n,pattern:s,autocomplete:g}=t;return l.a.createElement(c.InspectorControls,null,l.a.createElement(r.a,{tabs:["general","advance"]},l.a.createElement(u.b,u.a.general,l.a.createElement(d.a,{initialOpen:!0},l.a.createElement(b.SelectControl,{label:Object(o.__)("Autocomplete","ultimate-addons-for-gutenberg"),value:g,options:[{label:Object(o.__)("Off","ultimate-addons-for-gutenberg"),value:"off"},{label:Object(o.__)("Phone","ultimate-addons-for-gutenberg"),value:"tel-national"}],onChange:e=>a({autocomplete:e})}),l.a.createElement(b.SelectControl,{label:Object(o.__)("Pattern"),value:s,options:[{label:"None",value:""},{label:"123-45-678",value:Object(o.__)("[0-9]{3}-?[0-9]{2}-?[0-9]{3}","ultimate-addons-for-gutenberg")},{label:"123-456-7890",value:Object(o.__)("[0-9]{3}-?[0-9]{3}-?[0-9]{4}","ultimate-addons-for-gutenberg")},{label:"123 456 7890",value:Object(o.__)("[0-9]{3}s?[0-9]{3}s?[0-9]{4}","ultimate-addons-for-gutenberg")}],onChange:e=>a({pattern:e})}),l.a.createElement(b.ToggleControl,{label:Object(o.__)("Required","ultimate-addons-for-gutenberg"),checked:n,onChange:()=>a({phoneRequired:!n})}))),l.a.createElement(u.b,u.a.advance)))};t.default=l.a.memo(s)}}]);