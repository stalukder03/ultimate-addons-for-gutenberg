(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[95],{569:function(e,t,a){"use strict";a.r(t);var l=a(22),n=a(73),o=a(2),i=a(5),r=a(6),c=a(51),u=a(20),b=a(14),g=a(13),f=a(18),s=a(12);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}t.default=React.memo((function(e){var t,a=e=e.parentProps,d=a.attributes,_=a.setAttributes,v=a.attributes,p=v.rating,h=v.range,R=v.layout,O=v.align,j=v.size,E=v.gap,y=v.unmarkedColor,C=v.color,S=v.title,z=v.loadGoogleFonts,T=v.fontFamily,H=v.fontWeight,A=v.fontSubset,I=v.fontSizeType,k=v.fontSize,w=v.fontSizeMobile,G=v.fontSizeTablet,F=v.lineHeightType,M=v.lineHeight,P=v.lineHeightMobile,U=v.lineHeightTablet,x=v.titleColor,B=v.titleGap;if(1==z){var V={google:{families:[T+(H?":"+H:"")]}};t=React.createElement(n.a,{config:V})}var W=[{value:"left",icon:React.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-left")})},{value:"center",icon:React.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-center")})},{value:"right",icon:React.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-right")})},{value:"full",icon:React.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-justify")})}];"stack"===R&&(W=[{value:"left",icon:React.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-left")})},{value:"center",icon:React.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-center")})},{value:"right",icon:React.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-right")})}],"full"===O&&_({align:"left"}));var J=React.createElement(r.PanelBody,{title:Object(o.__)("General","ultimate-addons-for-gutenberg")},React.createElement(f.a,{setAttributes:_,label:Object(o.__)("Range","ultimate-addons-for-gutenberg"),data:{value:h,label:"range"},options:[{value:"5",label:Object(o.__)("1-5","ultimate-addons-for-gutenberg")},{value:"10",label:Object(o.__)("1-10","ultimate-addons-for-gutenberg")}]}),React.createElement(g.a,{label:Object(o.__)("Rating","ultimate-addons-for-gutenberg"),setAttributes:_,value:p,onChange:function(e){return _({rating:e})},min:0,max:h,step:.1,displayUnit:!1}),React.createElement(f.a,{setAttributes:_,label:Object(o.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:R,label:"layout"},options:[{value:"inline",label:Object(o.__)("Inline","ultimate-addons-for-gutenberg")},{value:"stack",label:Object(o.__)("Stack","ultimate-addons-for-gutenberg")}]}),React.createElement(f.a,{setAttributes:_,label:Object(o.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:O,label:"align"},options:W,showIcons:!0})),L=React.createElement(r.PanelBody,{title:Object(o.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},React.createElement(b.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:x,onColorChange:function(e){return _({titleColor:e})}}),React.createElement(l.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:d,setAttributes:_,loadGoogleFonts:{value:z,label:"loadGoogleFonts"},fontFamily:{value:T,label:"fontFamily"},fontWeight:{value:H,label:"fontWeight"},fontSubset:{value:A,label:"fontSubset"},fontSizeType:{value:I,label:"fontSizeType"},fontSize:{value:k,label:"fontSize"},fontSizeMobile:{value:w,label:"fontSizeMobile"},fontSizeTablet:{value:G,label:"fontSizeTablet"},lineHeightType:{value:F,label:"lineHeightType"},lineHeight:{value:M,label:"lineHeight"},lineHeightMobile:{value:P,label:"lineHeightMobile"},lineHeightTablet:{value:U,label:"lineHeightTablet"}}),React.createElement(g.a,{label:Object(o.__)("Gap","ultimate-addons-for-gutenberg"),setAttributes:_,value:B,onChange:function(e){return _({titleGap:e})},min:0,max:50,displayUnit:!1})),q=React.createElement(r.PanelBody,{title:Object(o.__)("Star","ultimate-addons-for-gutenberg"),initialOpen:!0},React.createElement(b.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C,onColorChange:function(e){return _({color:e})}}),React.createElement(b.a,{label:Object(o.__)("Unmarked Color","ultimate-addons-for-gutenberg"),colorValue:y,onColorChange:function(e){return _({unmarkedColor:e})}}),React.createElement(g.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:_,value:j,onChange:function(e){return _({size:e})},min:0,max:100,displayUnit:!1}),React.createElement(g.a,{label:Object(o.__)("Gap","ultimate-addons-for-gutenberg"),setAttributes:_,value:E,onChange:function(e){return _({gap:e})},min:0,max:50,displayUnit:!1}));return React.createElement(React.Fragment,null,React.createElement(i.InspectorControls,null,React.createElement(c.a,{tabs:["general","style","advance"]},React.createElement(u.b,u.a.general,J),React.createElement(u.b,u.a.style,q,""!==S&&L),React.createElement(u.b,m({},u.a.advance,{parentProps:e})))),t)}))}}]);