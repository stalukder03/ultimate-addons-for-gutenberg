(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[48],{388:function(e,t,a){"use strict";a.r(t);var l=a(79),n=a(52),o=a(2),i=a(4),r=a(5),u=a(78),b=a(34),g=a(16),c=a(15),s=a(39);t.default=React.memo((function(e){var t,a=e=e.parentProps,d=a.attributes,f=a.setAttributes,m=a.attributes,_=m.rating,v=m.range,p=m.layout,h=m.align,O=m.size,R=m.gap,j=m.unmarkedColor,y=m.color,E=m.title,C=m.loadGoogleFonts,S=m.fontFamily,z=m.fontWeight,T=m.fontSubset,H=m.fontSizeType,A=m.fontSize,k=m.fontSizeMobile,F=m.fontSizeTablet,G=m.lineHeightType,w=m.lineHeight,M=m.lineHeightMobile,U=m.lineHeightTablet,x=m.titleColor,P=m.titleGap;if(1==C){var W={google:{families:[S+(z?":"+z:"")]}};t=React.createElement(n.a,{config:W})}var B=[{value:"left",label:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",label:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",label:Object(o.__)("Right","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Full Width","ultimate-addons-for-gutenberg")}];"stack"===p&&(B=[{value:"left",label:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",label:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",label:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],"full"===h&&f({align:"left"}));var L=React.createElement(r.PanelBody,{title:Object(o.__)("General","ultimate-addons-for-gutenberg")},React.createElement(s.a,{setAttributes:f,label:Object(o.__)("Range","ultimate-addons-for-gutenberg"),data:{value:v,label:"range"},options:[{value:"5",label:Object(o.__)("1-5","ultimate-addons-for-gutenberg")},{value:"10",label:Object(o.__)("1-10","ultimate-addons-for-gutenberg")}]}),React.createElement(c.a,{label:Object(o.__)("Rating","ultimate-addons-for-gutenberg"),setAttributes:f,value:_,onChange:function(e){return f({rating:e})},min:0,max:v,step:.1,displayUnit:!1}),React.createElement(s.a,{setAttributes:f,label:Object(o.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:p,label:"layout"},options:[{value:"inline",label:Object(o.__)("Inline","ultimate-addons-for-gutenberg")},{value:"stack",label:Object(o.__)("Stack","ultimate-addons-for-gutenberg")}]}),React.createElement(s.a,{setAttributes:f,label:Object(o.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:h,label:"align"},options:B})),V=React.createElement(r.PanelBody,{title:Object(o.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},React.createElement(l.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:d,setAttributes:f,loadGoogleFonts:{value:C,label:"loadGoogleFonts"},fontFamily:{value:S,label:"fontFamily"},fontWeight:{value:z,label:"fontWeight"},fontSubset:{value:T,label:"fontSubset"},fontSizeType:{value:H,label:"fontSizeType"},fontSize:{value:A,label:"fontSize"},fontSizeMobile:{value:k,label:"fontSizeMobile"},fontSizeTablet:{value:F,label:"fontSizeTablet"},lineHeightType:{value:G,label:"lineHeightType"},lineHeight:{value:w,label:"lineHeight"},lineHeightMobile:{value:M,label:"lineHeightMobile"},lineHeightTablet:{value:U,label:"lineHeightTablet"}}),React.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:x,onColorChange:function(e){return f({titleColor:e})}}),React.createElement(c.a,{label:Object(o.__)("Gap","ultimate-addons-for-gutenberg"),setAttributes:f,value:P,onChange:function(e){return f({titleGap:e})},min:0,max:50,displayUnit:!1})),I=React.createElement(r.PanelBody,{title:Object(o.__)("Star","ultimate-addons-for-gutenberg"),initialOpen:!0},React.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:y,onColorChange:function(e){return f({color:e})}}),React.createElement(g.a,{label:Object(o.__)("Unmarked Color","ultimate-addons-for-gutenberg"),colorValue:j,onColorChange:function(e){return f({unmarkedColor:e})}}),React.createElement(c.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:f,value:O,onChange:function(e){return f({size:e})},min:0,max:100,displayUnit:!1}),React.createElement(c.a,{label:Object(o.__)("Gap","ultimate-addons-for-gutenberg"),setAttributes:f,value:R,onChange:function(e){return f({gap:e})},min:0,max:50,displayUnit:!1}));return React.createElement(React.Fragment,null,React.createElement(i.InspectorControls,null,React.createElement(u.a,{tabs:["general","style","advance"]},React.createElement(b.b,b.a.general,L),React.createElement(b.b,b.a.style,I,""!==E&&V),React.createElement(b.b,b.a.advance))),t)}))}}]);