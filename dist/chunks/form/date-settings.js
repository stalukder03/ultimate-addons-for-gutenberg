(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[22],{393:function(e,a,t){"use strict";t.r(a);var n,l=t(0),o=t.n(l),r=t(1),c=t(4),u=t(70),i=t(28),m=t(3),s=[{label:"YYYY",value:""}],d=[{label:"MM",value:""}],b=[{label:"DD",value:""}];for(n=1930;n<=2030;n++)s.push({label:"".concat(n),value:"".concat(n)});for(n=1;n<=12;n++){var g=n<10?"0".concat(n):"".concat(n);d.push({label:g,value:g})}for(n=1;n<=31;n++){var p=n<10?"0".concat(n):"".concat(n);b.push({label:p,value:p})}var f=function(e){var a=e=e.parentProps,t=a.attributes,n=a.setAttributes,l=t.dateRequired,g=t.additonalVal,p=t.minYear,f=t.minMonth,v=t.minDay,h=t.maxYear,_=t.maxMonth,E=t.maxDay,C="",D="";p&&f&&v&&(C=p+"-"+f+"-"+v),h&&_&&E&&(D=h+"-"+_+"-"+E);var M="";return Date.parse(C)>Date.parse(D)&&(M=o.a.createElement("p",{className:"uagb-forms-date-invalidate"},Object(r.__)("Invalid date range selected","ultimate-addons-for-gutenberg"))),o.a.createElement(o.a.Fragment,null,o.a.createElement(m.InspectorControls,null,o.a.createElement(u.a,{tabs:["general","advance"]},o.a.createElement(i.b,i.a.general,o.a.createElement(c.PanelBody,{initialOpen:!0},o.a.createElement(c.ToggleControl,{label:Object(r.__)("Required","ultimate-addons-for-gutenberg"),checked:l,onChange:function(){return n({dateRequired:!l})}}),o.a.createElement(c.ToggleControl,{label:Object(r.__)("Additional Validation","ultimate-addons-for-gutenberg"),checked:g,onChange:function(){return n({additonalVal:!g})},help:Object(r.__)("Helps to set range of calender","ultimate-addons-for-gutenberg")}),g&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,Object(r.__)("From","ultimate-addons-for-gutenberg")," :"),o.a.createElement(c.SelectControl,{className:"minDate",label:"Year",value:p,options:s,onChange:function(e){return n({newMinYear:e})}}),o.a.createElement(c.SelectControl,{className:"minDate",label:"Month",value:f,options:d,onChange:function(e){return n({newMinMonth:e})}}),o.a.createElement(c.SelectControl,{className:"minDate",label:"Date",value:v,options:b,onChange:function(e){return n({newMinDay:e})}}),o.a.createElement("p",null," ",Object(r.__)("To","ultimate-addons-for-gutenberg")," :"),o.a.createElement(c.SelectControl,{className:"maxDate",label:"Year",value:h,options:s,onChange:function(e){return n({newMaxYear:e})}}),o.a.createElement(c.SelectControl,{className:"maxDate",label:"Month",value:_,options:d,onChange:function(e){return n({newMaxMonth:e})}}),o.a.createElement(c.SelectControl,{className:"maxDate",label:"Date",value:E,options:b,onChange:function(e){return n({newMaxDay:e})}}),M))),o.a.createElement(i.b,i.a.advance))))};a.default=o.a.memo(f)}}]);