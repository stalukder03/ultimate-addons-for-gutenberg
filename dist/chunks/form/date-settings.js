(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[31],{559:function(e,a,t){"use strict";t.r(a);var n,l=t(1),o=t.n(l),r=t(2),c=t(4),u=t(5),i=[{label:"YYYY",value:""}],m=[{label:"MM",value:""}],s=[{label:"DD",value:""}];for(n=1930;n<=2030;n++)i.push({label:"".concat(n),value:"".concat(n)});for(n=1;n<=12;n++){var d=n<10?"0".concat(n):"".concat(n);m.push({label:d,value:d})}for(n=1;n<=31;n++){var b=n<10?"0".concat(n):"".concat(n);s.push({label:b,value:b})}var g=function(e){var a=e=e.parentProps,t=a.attributes,n=a.setAttributes,l=t.dateRequired,d=t.additonalVal,b=t.minYear,g=t.minMonth,p=t.minDay,f=t.maxYear,_=t.maxMonth,h=t.maxDay,v="",E="";b&&g&&p&&(v=b+"-"+g+"-"+p),f&&_&&h&&(E=f+"-"+_+"-"+h);var C="";return Date.parse(v)>Date.parse(E)&&(C=o.a.createElement("p",{className:"uagb-forms-date-invalidate"},Object(r.__)("Invalid date range selected","ultimate-addons-for-gutenberg"))),o.a.createElement(o.a.Fragment,null,o.a.createElement(u.InspectorControls,null,o.a.createElement(c.PanelBody,{title:Object(r.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},o.a.createElement(c.ToggleControl,{label:Object(r.__)("Required","ultimate-addons-for-gutenberg"),checked:l,onChange:function(){return n({dateRequired:!l})}}),o.a.createElement(c.ToggleControl,{label:Object(r.__)("Additional Validation","ultimate-addons-for-gutenberg"),checked:d,onChange:function(){return n({additonalVal:!d})},help:Object(r.__)("Helps to set range of calender","ultimate-addons-for-gutenberg")}),d&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,Object(r.__)("From","ultimate-addons-for-gutenberg")," :"),o.a.createElement(c.SelectControl,{className:"minDate",label:"Year",value:b,options:i,onChange:function(e){return n({newMinYear:e})}}),o.a.createElement("b",null," - "),o.a.createElement(c.SelectControl,{className:"minDate",label:"Month",value:g,options:m,onChange:function(e){return n({newMinMonth:e})}}),o.a.createElement("b",null," - "),o.a.createElement(c.SelectControl,{className:"minDate",label:"Date",value:p,options:s,onChange:function(e){return n({newMinDay:e})}}),o.a.createElement("p",null,"To :"),o.a.createElement(c.SelectControl,{className:"maxDate",label:"Year",value:f,options:i,onChange:function(e){return n({newMaxYear:e})}}),o.a.createElement("b",null," - "),o.a.createElement(c.SelectControl,{className:"maxDate",label:"Month",value:_,options:m,onChange:function(e){return n({newMaxMonth:e})}}),o.a.createElement("b",null," - "),o.a.createElement(c.SelectControl,{className:"maxDate",label:"Date",value:h,options:s,onChange:function(e){return n({newMaxDay:e})}}),C))))};a.default=o.a.memo(g)}}]);