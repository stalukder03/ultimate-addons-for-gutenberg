(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[93],{567:function(e,t,a){"use strict";a.r(t);var l=a(22),n=a(73),o=a(2),i=a(5),r=a(6),c=a(51),b=a(20),u=a(14),g=a(13),s=a(18),f=a(12);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}t.default=React.memo(e=>{e=e.parentProps;const{attributes:t,setAttributes:a,attributes:{rating:d,range:_,layout:p,align:v,size:h,gap:R,unmarkedColor:O,color:j,title:E,loadGoogleFonts:y,fontFamily:C,fontWeight:S,fontSubset:z,fontSizeType:T,fontSize:H,fontSizeMobile:A,fontSizeTablet:I,lineHeightType:k,lineHeight:w,lineHeightMobile:G,lineHeightTablet:F,titleColor:M,titleGap:P}}=e;let U;if(1==y){const e={google:{families:[C+(S?":"+S:"")]}};U=React.createElement(n.a,{config:e})}let x=[{value:"left",icon:React.createElement(r.Icon,{icon:Object(f.a)("fa fa-align-left")})},{value:"center",icon:React.createElement(r.Icon,{icon:Object(f.a)("fa fa-align-center")})},{value:"right",icon:React.createElement(r.Icon,{icon:Object(f.a)("fa fa-align-right")})},{value:"full",icon:React.createElement(r.Icon,{icon:Object(f.a)("fa fa-align-justify")})}];"stack"===p&&(x=[{value:"left",icon:React.createElement(r.Icon,{icon:Object(f.a)("fa fa-align-left")})},{value:"center",icon:React.createElement(r.Icon,{icon:Object(f.a)("fa fa-align-center")})},{value:"right",icon:React.createElement(r.Icon,{icon:Object(f.a)("fa fa-align-right")})}],"full"===v&&a({align:"left"}));const B=React.createElement(r.PanelBody,{title:Object(o.__)("General","ultimate-addons-for-gutenberg")},React.createElement(s.a,{setAttributes:a,label:Object(o.__)("Range","ultimate-addons-for-gutenberg"),data:{value:_,label:"range"},options:[{value:"5",label:Object(o.__)("1-5","ultimate-addons-for-gutenberg")},{value:"10",label:Object(o.__)("1-10","ultimate-addons-for-gutenberg")}]}),React.createElement(g.a,{label:Object(o.__)("Rating","ultimate-addons-for-gutenberg"),setAttributes:a,value:d,onChange:e=>a({rating:e}),min:0,max:_,step:.1,displayUnit:!1}),React.createElement(s.a,{setAttributes:a,label:Object(o.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:p,label:"layout"},options:[{value:"inline",label:Object(o.__)("Inline","ultimate-addons-for-gutenberg")},{value:"stack",label:Object(o.__)("Stack","ultimate-addons-for-gutenberg")}]}),React.createElement(s.a,{setAttributes:a,label:Object(o.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:v,label:"align"},options:x,showIcons:!0})),V=React.createElement(r.PanelBody,{title:Object(o.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},React.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M,onColorChange:e=>a({titleColor:e})}),React.createElement(l.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:y,label:"loadGoogleFonts"},fontFamily:{value:C,label:"fontFamily"},fontWeight:{value:S,label:"fontWeight"},fontSubset:{value:z,label:"fontSubset"},fontSizeType:{value:T,label:"fontSizeType"},fontSize:{value:H,label:"fontSize"},fontSizeMobile:{value:A,label:"fontSizeMobile"},fontSizeTablet:{value:I,label:"fontSizeTablet"},lineHeightType:{value:k,label:"lineHeightType"},lineHeight:{value:w,label:"lineHeight"},lineHeightMobile:{value:G,label:"lineHeightMobile"},lineHeightTablet:{value:F,label:"lineHeightTablet"}}),React.createElement(g.a,{label:Object(o.__)("Gap","ultimate-addons-for-gutenberg"),setAttributes:a,value:P,onChange:e=>a({titleGap:e}),min:0,max:50,displayUnit:!1})),W=React.createElement(r.PanelBody,{title:Object(o.__)("Star","ultimate-addons-for-gutenberg"),initialOpen:!0},React.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:j,onColorChange:e=>a({color:e})}),React.createElement(u.a,{label:Object(o.__)("Unmarked Color","ultimate-addons-for-gutenberg"),colorValue:O,onColorChange:e=>a({unmarkedColor:e})}),React.createElement(g.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:h,onChange:e=>a({size:e}),min:0,max:100,displayUnit:!1}),React.createElement(g.a,{label:Object(o.__)("Gap","ultimate-addons-for-gutenberg"),setAttributes:a,value:R,onChange:e=>a({gap:e}),min:0,max:50,displayUnit:!1}));return React.createElement(React.Fragment,null,React.createElement(i.InspectorControls,null,React.createElement(c.a,{tabs:["general","style","advance"]},React.createElement(b.b,b.a.general,B),React.createElement(b.b,b.a.style,W,""!==E&&V),React.createElement(b.b,m({},b.a.advance,{parentProps:e})))),U)})}}]);