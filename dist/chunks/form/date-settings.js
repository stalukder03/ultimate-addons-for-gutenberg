(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[32],{560:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),o=t(2),r=t(6),c=t(63),s=t(21),m=t(5);const u=[{label:"YYYY",value:""}],i=[{label:"MM",value:""}],d=[{label:"DD",value:""}];let b;for(b=1930;b<=2030;b++)u.push({label:""+b,value:""+b});for(b=1;b<=12;b++){const e=b<10?"0"+b:""+b;i.push({label:e,value:e})}for(b=1;b<=31;b++){const e=b<10?"0"+b:""+b;d.push({label:e,value:e})}const g=e=>{e=e.parentProps;const{attributes:a,setAttributes:t}=e,{dateRequired:n,additonalVal:b,minYear:g,minMonth:p,minDay:h,maxYear:_,maxMonth:E,maxDay:v}=a;let C="",D="";g&&p&&h&&(C=g+"-"+p+"-"+h),_&&E&&v&&(D=_+"-"+E+"-"+v);let f="";return Date.parse(C)>Date.parse(D)&&(f=l.a.createElement("p",{className:"uagb-forms-date-invalidate"},Object(o.__)("Invalid date range selected","ultimate-addons-for-gutenberg"))),l.a.createElement(l.a.Fragment,null,l.a.createElement(m.InspectorControls,null,l.a.createElement(c.a,{tabs:["general","advance"]},l.a.createElement(s.b,s.a.general,l.a.createElement(r.PanelBody,{initialOpen:!0},l.a.createElement(r.ToggleControl,{label:Object(o.__)("Required","ultimate-addons-for-gutenberg"),checked:n,onChange:()=>t({dateRequired:!n})}),l.a.createElement(r.ToggleControl,{label:Object(o.__)("Additional Validation","ultimate-addons-for-gutenberg"),checked:b,onChange:()=>t({additonalVal:!b}),help:Object(o.__)("Helps to set range of calender","ultimate-addons-for-gutenberg")}),b&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,Object(o.__)("From","ultimate-addons-for-gutenberg")," :"),l.a.createElement(r.SelectControl,{className:"minDate",label:"Year",value:g,options:u,onChange:e=>t({newMinYear:e})}),l.a.createElement(r.SelectControl,{className:"minDate",label:"Month",value:p,options:i,onChange:e=>t({newMinMonth:e})}),l.a.createElement(r.SelectControl,{className:"minDate",label:"Date",value:h,options:d,onChange:e=>t({newMinDay:e})}),l.a.createElement("p",null," ",Object(o.__)("To","ultimate-addons-for-gutenberg")," :"),l.a.createElement(r.SelectControl,{className:"maxDate",label:"Year",value:_,options:u,onChange:e=>t({newMaxYear:e})}),l.a.createElement(r.SelectControl,{className:"maxDate",label:"Month",value:E,options:i,onChange:e=>t({newMaxMonth:e})}),l.a.createElement(r.SelectControl,{className:"maxDate",label:"Date",value:v,options:d,onChange:e=>t({newMaxDay:e})}),f))),l.a.createElement(s.b,s.a.advance))))};a.default=l.a.memo(g)}}]);