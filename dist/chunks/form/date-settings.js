(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[34],{481:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(1),o=t(7),u=t(26),b=t(156),s=t(80),d=t(30),i=t(5),m=t(18);const c=[{label:"YYYY",value:""}],g=[{label:"MM",value:""}],_=[{label:"DD",value:""}];let p;for(p=1930;p<=2030;p++)c.push({label:""+p,value:""+p});for(p=1;p<=12;p++){const e=p<10?"0"+p:""+p;g.push({label:e,value:e})}for(p=1;p<=31;p++){const e=p<10?"0"+p:""+p;_.push({label:e,value:e})}const f=e=>{e=e.parentProps;const{attributes:a,setAttributes:t}=e,{dateRequired:l,additonalVal:p,minYear:f,minMonth:E,minDay:v,maxYear:h,maxMonth:O,maxDay:j}=a;let D="",Y="";f&&E&&v&&(D=f+"-"+E+"-"+v),h&&O&&j&&(Y=h+"-"+O+"-"+j);let A="";return Date.parse(D)>Date.parse(Y)&&(A=n.a.createElement("p",{className:"uagb-forms-date-invalidate"},Object(r.__)("Invalid date range selected","ultimate-addons-for-gutenberg"))),n.a.createElement(n.a.Fragment,null,n.a.createElement(i.InspectorControls,null,n.a.createElement(s.a,{tabs:["general","advance"]},n.a.createElement(d.b,d.a.general,n.a.createElement(m.a,{initialOpen:!0},n.a.createElement(o.ToggleControl,{label:Object(r.__)("Required","ultimate-addons-for-gutenberg"),checked:l,onChange:()=>t({dateRequired:!l})}),n.a.createElement(o.ToggleControl,{label:Object(r.__)("Additional Validation","ultimate-addons-for-gutenberg"),checked:p,onChange:()=>t({additonalVal:!p}),help:Object(r.__)("Helps to set range of calender","ultimate-addons-for-gutenberg")}),p&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,null),n.a.createElement("p",null,Object(r.__)("From","ultimate-addons-for-gutenberg")," :"),n.a.createElement(u.a,{label:Object(r.__)("Year","ultimate-addons-for-gutenberg"),data:{value:f,label:"minYear"},setAttributes:t,options:c}),n.a.createElement(u.a,{label:Object(r.__)("Month","ultimate-addons-for-gutenberg"),data:{value:E,label:"minMonth"},setAttributes:t,options:g}),n.a.createElement(u.a,{label:Object(r.__)("Date","ultimate-addons-for-gutenberg"),data:{value:v,label:"minDay"},setAttributes:t,options:_}),n.a.createElement(b.a,null),n.a.createElement("p",null,Object(r.__)("To","ultimate-addons-for-gutenberg")," :"),n.a.createElement(u.a,{label:Object(r.__)("Year","ultimate-addons-for-gutenberg"),data:{value:h,label:"maxYear"},setAttributes:t,options:c}),n.a.createElement(u.a,{label:Object(r.__)("Month","ultimate-addons-for-gutenberg"),data:{value:O,label:"maxMonth"},setAttributes:t,options:g}),n.a.createElement(u.a,{label:Object(r.__)("Date","ultimate-addons-for-gutenberg"),data:{value:j,label:"maxDay"},setAttributes:t,options:_}),A))),n.a.createElement(d.b,d.a.advance))))};a.default=n.a.memo(f)}}]);