(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[87],{547:function(e,t,a){"use strict";a.r(t);var l=a(1),o=a.n(l),n=a(2),r=a(11),i=a(128),b=a(174),u=a(85),d=a(175),g=a(20),c=a(176),m=a(173),s=a(23),v=a(5),_=a(3);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var O=function(e){var t=e=e.parentProps,a=t.attributes,O=t.setAttributes,p=t.deviceType,h=a.align,C=a.contentWidth,j=a.width,y=a.innerWidth,T=a.innerWidthType,M=a.tag,k=a.themeWidth,P=a.leftPadding,E=a.rightPadding,B=a.topPadding,S=a.bottomPadding,w=a.leftMargin,x=a.rightMargin,L=a.topMargin,A=a.bottomMargin,R=a.topPaddingTablet,W=a.bottomPaddingTablet,V=a.leftPaddingTablet,I=a.rightPaddingTablet,H=a.topMarginTablet,z=a.bottomMarginTablet,F=a.leftMarginTablet,U=a.rightMarginTablet,D=a.topPaddingMobile,J=a.bottomPaddingMobile,q=a.leftPaddingMobile,G=a.rightPaddingMobile,K=a.topMarginMobile,N=a.bottomMarginMobile,Q=a.leftMarginMobile,X=a.rightMarginMobile,Y=a.backgroundType,Z=a.backgroundImage,$=a.backgroundVideo,ee=a.backgroundColor,te=a.backgroundPosition,ae=a.backgroundAttachment,le=a.backgroundRepeat,oe=a.backgroundSize,ne=a.backgroundOpacity,re=a.backgroundVideoColor,ie=a.backgroundVideoOpacity,be=a.backgroundImageColor,ue=a.overlayType,de=a.gradientOverlayColor1,ge=a.gradientOverlayColor2,ce=a.gradientOverlayType,me=a.gradientOverlayLocation1,se=a.gradientOverlayLocation2,ve=a.gradientOverlayAngle,_e=a.gradientOverlayPosition,fe=a.borderStyle,Oe=a.borderWidth,pe=a.borderRadius,he=a.borderColor,Ce=a.borderHoverColor,je=a.mobileMarginType,ye=a.tabletMarginType,Te=a.desktopMarginType,Me=a.mobilePaddingType,ke=a.tabletPaddingType,Pe=a.desktopPaddingType,Ee=a.boxShadowColor,Be=a.boxShadowHOffset,Se=a.boxShadowVOffset,we=a.boxShadowBlur,xe=a.boxShadowSpread,Le=a.boxShadowPosition,Ae=a.spacingLink,Re=["left","center","right"];return"full_width"==C&&(Re=["wide","full"]),o.a.createElement(l.Suspense,{fallback:Object(r.a)()},o.a.createElement(v.BlockControls,null,o.a.createElement(v.BlockAlignmentToolbar,{value:h,onChange:function(e){O({align:e})},controls:Re})),o.a.createElement(v.InspectorControls,null,o.a.createElement(b.a,null,o.a.createElement(u.a,{key:"general"},o.a.createElement(_.PanelBody,{title:Object(n.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(_.SelectControl,{label:Object(n.__)("Content Width","ultimate-addons-for-gutenberg"),value:C,onChange:function(e){return O({contentWidth:e})},options:[{value:"boxed",label:Object(n.__)("Boxed","ultimate-addons-for-gutenberg")},{value:"full_width",label:Object(n.__)("Full Width","ultimate-addons-for-gutenberg")}]}),"boxed"==C&&o.a.createElement(g.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:O,value:j,onChange:function(e){return O({width:e})},min:0,max:2e3}),"boxed"!==C&&o.a.createElement(_.ToggleControl,{label:Object(n.__)("Inherit Inner Width from Theme","ultimate-addons-for-gutenberg"),checked:k,onChange:function(){return O({themeWidth:!k})}}),"boxed"!==C&&!k&&o.a.createElement(g.a,{label:Object(n.__)("Inner Width","ultimate-addons-for-gutenberg"),setAttributes:O,value:y,onChange:function(e){return O({innerWidth:e})},min:0,max:2e3,unit:{value:T,label:"innerWidthType"}}),o.a.createElement(_.SelectControl,{label:Object(n.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:M,onChange:function(e){return O({tag:e})},options:[{value:"div",label:Object(n.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(n.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(n.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(n.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(n.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(n.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(n.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(n.__)("nav","ultimate-addons-for-gutenberg")}]})),o.a.createElement(_.PanelBody,{title:"Spacing",initialOpen:!1},o.a.createElement(d.a,f({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:B,label:"topPadding"},valueRight:{value:E,label:"rightPadding"},valueBottom:{value:S,label:"bottomPadding"},valueLeft:{value:P,label:"leftPadding"},valueTopTablet:{value:R,label:"topPaddingTablet"},valueRightTablet:{value:I,label:"rightPaddingTablet"},valueBottomTablet:{value:W,label:"bottomPaddingTablet"},valueLeftTablet:{value:V,label:"leftPaddingTablet"},valueTopMobile:{value:D,label:"topPaddingMobile"},valueRightMobile:{value:G,label:"rightPaddingMobile"},valueBottomMobile:{value:J,label:"bottomPaddingMobile"},valueLeftMobile:{value:q,label:"leftPaddingMobile"},unit:{value:Pe,label:"desktopPaddingType"},mUnit:{value:Me,label:"mobilePaddingType"},tUnit:{value:ke,label:"tabletPaddingType"},deviceType:p,attributes:a,setAttributes:O,link:{value:Ae,label:"spacingLink"}})),o.a.createElement(d.a,f({},e,{label:Object(n.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:L,label:"topMargin"},valueRight:{value:x,label:"rightMargin"},valueBottom:{value:A,label:"bottomMargin"},valueLeft:{value:w,label:"leftMargin"},valueTopTablet:{value:H,label:"topMarginTablet"},valueRightTablet:{value:U,label:"rightMarginTablet"},valueBottomTablet:{value:z,label:"bottomMarginTablet"},valueLeftTablet:{value:F,label:"leftMarginTablet"},valueTopMobile:{value:K,label:"topMarginMobile"},valueRightMobile:{value:X,label:"rightMarginMobile"},valueBottomMobile:{value:N,label:"bottomMarginMobile"},valueLeftMobile:{value:Q,label:"leftMarginMobile"},unit:{value:Te,label:"desktopMarginType"},mUnit:{value:je,label:"mobileMarginType"},tUnit:{value:ye,label:"tabletMarginType"},deviceType:p,attributes:a,setAttributes:O,link:{value:Ae,label:"spacingLink"}}))),o.a.createElement(o.a.Fragment,null,o.a.createElement(_.PanelBody,{title:Object(n.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(m.a,{setAttributes:O,borderStyle:{value:fe,label:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Oe,label:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:pe,label:Object(n.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:he,label:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Ce,label:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")}})),o.a.createElement(_.PanelBody,{title:"Box Shadow",initialOpen:!1},o.a.createElement(i.a,{setAttributes:O,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:Ee,label:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:Be,label:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:Se,label:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:we,label:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:xe,label:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Le,label:Object(n.__)("Position","ultimate-addons-for-gutenberg")}}))),o.a.createElement(_.PanelBody,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(c.a,f({setAttributes:O,backgroundImageColor:{value:be,label:Object(n.__)("Background Image Color","ultimate-addons-for-gutenberg")},overlayType:{value:ue,label:Object(n.__)("Overlay Type","ultimate-addons-for-gutenberg")},backgroundSize:{value:oe,label:Object(n.__)("Background Size","ultimate-addons-for-gutenberg")},backgroundRepeat:{value:le,label:Object(n.__)("Background Repeat","ultimate-addons-for-gutenberg")},backgroundAttachment:{value:ae,label:Object(n.__)("Background Attachement","ultimate-addons-for-gutenberg")},backgroundPosition:{value:te,label:Object(n.__)("Background Image","ultimate-addons-for-gutenberg")},backgroundImage:{value:Z,label:Object(n.__)("Background Image","ultimate-addons-for-gutenberg")},backgroundColor:{value:ee,label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg")},backgroundType:{value:Y,label:Object(n.__)("Background Type","ultimate-addons-for-gutenberg")},backgroundOpacity:{value:ne,label:Object(n.__)("Opacity","ultimate-addons-for-gutenberg")}},e)),"video"==Y&&$&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(n.__)("Video Overlay Color","ultimate-addons-for-gutenberg"),colorValue:re||"",colorDefault:"",onColorChange:function(e){return O({backgroundVideoColor:e})},onColorClassChange:function(e){return O({colorClass:e})}})),"video"==Y&&$&&o.a.createElement(g.a,{label:Object(n.__)("Opacity","ultimate-addons-for-gutenberg"),setAttributes:O,value:ie,onChange:function(e){return O({backgroundVideoOpacity:e})},min:0,max:100}),"gradient"==ue&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(n.__)("Color 1","ultimate-addons-for-gutenberg"),colorValue:de||"",colorDefault:"",onColorChange:function(e){return O({gradientOverlayColor1:e})},onColorClassChange:function(e){return O({colorClass:e})}}),o.a.createElement(g.a,{label:Object(n.__)("Location 1","ultimate-addons-for-gutenberg"),setAttributes:O,value:me,onChange:function(e){return O({gradientOverlayLocation1:e})},min:0,max:100}),o.a.createElement(s.a,{label:Object(n.__)("Color 2","ultimate-addons-for-gutenberg"),colorValue:ge||"",colorDefault:"",onColorChange:function(e){return O({gradientOverlayColor2:e})},onColorClassChange:function(e){return O({colorClass:e})}}),o.a.createElement(g.a,{label:Object(n.__)("Location 2","ultimate-addons-for-gutenberg"),setAttributes:O,value:se,onChange:function(e){return O({gradientOverlayLocation2:e})},min:0,max:100}),o.a.createElement(_.SelectControl,{label:Object(n.__)("Type","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return O({gradientOverlayType:e})},options:[{value:"linear",label:Object(n.__)("Linear","ultimate-addons-for-gutenberg")},{value:"radial",label:Object(n.__)("Radial","ultimate-addons-for-gutenberg")}]}),"linear"==ce&&o.a.createElement(g.a,{label:Object(n.__)("Angle","ultimate-addons-for-gutenberg"),setAttributes:O,value:ve,onChange:function(e){return O({gradientOverlayAngle:e})},min:0,max:360}),"radial"==ce&&o.a.createElement(_.SelectControl,{label:Object(n.__)("Type","ultimate-addons-for-gutenberg"),value:_e,onChange:function(e){return O({gradientOverlayPosition:e})},options:[{value:"center center",label:Object(n.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center left",label:Object(n.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center right",label:Object(n.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"top center",label:Object(n.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top left",label:Object(n.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top right",label:Object(n.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"bottom center",label:Object(n.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom left",label:Object(n.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom right",label:Object(n.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})))),o.a.createElement(u.a,{key:"advance"}))))};t.default=o.a.memo(O)}}]);