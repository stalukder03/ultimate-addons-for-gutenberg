(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{478:function(e,a,t){"use strict";t.r(a);for(var n=t(3),l=t.n(n),r=t(0),o=wp.components,c=o.PanelBody,u=o.SelectControl,m=o.ToggleControl,i=wp.blockEditor,s=i.InspectorControls,d=(i.RichText,[{label:"YYYY",value:""}]),b=1930;b<=2030;b++)d.push({label:"".concat(b),value:"".concat(b)});var p=[{label:"MM",value:""}];for(b=1;b<=12;b++){var g=b<10?"0".concat(b):"".concat(b);p.push({label:g,value:g})}var h=[{label:"DD",value:""}];for(b=1;b<=31;b++){var v=b<10?"0".concat(b):"".concat(b);h.push({label:v,value:v})}var f=function(e){var a=e=e.parentProps,t=a.attributes,n=a.setAttributes,o=(a.isSelected,t.dateRequired),i=t.additonalVal,b=t.minYear,g=t.minMonth,v=t.minDay,f=t.maxYear,E=t.maxMonth,D=t.maxDay,_="",C="";b&&g&&v&&(_=b+"-"+g+"-"+v),f&&E&&D&&(C=f+"-"+E+"-"+D);var x="";return Date.parse(_)>Date.parse(C)&&(x=l.a.createElement("p",{className:"uagb-forms-date-invalidate"},Object(r.__)("Invalid date range selected","ultimate-addons-for-gutenberg"))),l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null,l.a.createElement(c,{title:Object(r.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},l.a.createElement(m,{label:Object(r.__)("Required","ultimate-addons-for-gutenberg"),checked:o,onChange:function(e){return n({dateRequired:!o})}}),l.a.createElement(m,{label:Object(r.__)("Additional Validation","ultimate-addons-for-gutenberg"),checked:i,onChange:function(e){return n({additonalVal:!i})},help:Object(r.__)("Helps to set range of calender","ultimate-addons-for-gutenberg")}),i&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"From :"),l.a.createElement(u,{className:"minDate",label:"Year",value:b,options:d,onChange:function(e){return n({minYear:e})}}),l.a.createElement("b",null," - "),l.a.createElement(u,{className:"minDate",label:"Month",value:g,options:p,onChange:function(e){return n({minMonth:e})}}),l.a.createElement("b",null," - "),l.a.createElement(u,{className:"minDate",label:"Date",value:v,options:h,onChange:function(e){return n({minDay:e})}}),l.a.createElement("p",null,"To :"),l.a.createElement(u,{className:"maxDate",label:"Year",value:f,options:d,onChange:function(e){return n({maxYear:e})}}),l.a.createElement("b",null," - "),l.a.createElement(u,{className:"maxDate",label:"Month",value:E,options:p,onChange:function(e){return n({maxMonth:e})}}),l.a.createElement("b",null," - "),l.a.createElement(u,{className:"maxDate",label:"Date",value:D,options:h,onChange:function(e){return n({maxDay:e})}}),x))))};a.default=l.a.memo(f)}}]);