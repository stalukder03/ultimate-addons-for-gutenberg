(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[43],{552:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(2),o=a(64),u=a(20),c=a(7),b=a(5);const d=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{phoneRequired:n,pattern:d}=t;return l.a.createElement(b.InspectorControls,null,l.a.createElement(o.a,{tabs:["general","advance"]},l.a.createElement(u.b,u.a.general,l.a.createElement(c.PanelBody,{initialOpen:!0},l.a.createElement(c.ToggleControl,{label:Object(r.__)("Required","ultimate-addons-for-gutenberg"),checked:n,onChange:()=>a({phoneRequired:!n})}),l.a.createElement(c.SelectControl,{label:Object(r.__)("Pattern"),value:d,options:[{label:"None",value:""},{label:"123-45-678",value:Object(r.__)("[0-9]{3}-[0-9]{2}-[0-9]{3}","ultimate-addons-for-gutenberg")},{label:"123-456-6789",value:Object(r.__)("[0-9]{3}-[0-9]{3}-[0-9]{4}","ultimate-addons-for-gutenberg")}],onChange:e=>a({pattern:e})}))),l.a.createElement(u.b,u.a.advance)))};t.default=l.a.memo(d)}}]);