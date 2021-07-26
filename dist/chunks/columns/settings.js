(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[17],{567:function(e,t,a){"use strict";a.r(t),a(6);var l=a(2),o=a(1),n=a.n(o),r=a(11),b=(a(73),a(71),a(127)),i=a(69),u=a(141),g=a(142),d=a(140),c=a(23),m=a(20),s=a(5),_=a(3);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var p=function(e){var t,a,p,f=e.parentProps,h=f.attributes,O=f.setAttributes,j=(f.deviceType,h.stack),C=h.align,T=h.vAlign,y=h.contentWidth,k=h.width,E=h.widthType,M=h.tag,P=h.columnGap,S=h.topMargin,w=h.bottomMargin,x=h.topMarginMobile,B=h.bottomMarginMobile,A=h.topMarginTablet,H=h.bottomMarginTablet,N=h.topPadding,W=h.bottomPadding,R=h.leftPadding,z=h.rightPadding,D=h.topPaddingTablet,F=h.bottomPaddingTablet,L=h.leftPaddingTablet,U=h.rightPaddingTablet,I=h.topPaddingMobile,V=h.bottomPaddingMobile,G=h.leftPaddingMobile,J=h.rightPaddingMobile,Z=h.backgroundType,X=h.backgroundImage,q=(h.backgroundVideo,h.backgroundColor),K=h.backgroundPosition,Q=h.backgroundAttachment,Y=h.backgroundRepeat,$=h.backgroundSize,ee=h.backgroundOpacity,te=(h.backgroundVideoColor,h.backgroundVideoOpacity,h.backgroundImageColor),ae=h.overlayType,le=h.borderStyle,oe=h.borderWidth,ne=h.borderRadius,re=h.borderColor,be=h.borderHoverColor,ie=h.columns,ue=h.bottomType,ge=h.bottomColor,de=h.bottomHeight,ce=h.bottomHeightTablet,me=h.bottomHeightMobile,se=h.bottomWidth,_e=h.topType,ve=h.topColor,pe=h.topHeight,fe=h.topHeightTablet,he=h.topHeightMobile,Oe=h.topWidth,je=h.bottomFlip,Ce=h.topFlip,Te=h.reverseTablet,ye=h.reverseMobile,ke=h.topDividerOpacity,Ee=h.bottomDividerOpacity,Me=h.topContentAboveShape,Pe=h.bottomContentAboveShape,Se=h.mobileMarginType,we=h.tabletMarginType,xe=h.desktopMarginType,Be=h.mobilePaddingType,Ae=h.tabletPaddingType,He=h.desktopPaddingType,Ne=h.paddingLink,We=h.marginLink,Re=h.boxShadowColor,ze=h.boxShadowHOffset,De=h.boxShadowVOffset,Fe=h.boxShadowBlur,Le=h.boxShadowSpread,Ue=h.boxShadowPosition;return n.a.createElement(o.Suspense,{fallback:Object(r.a)()},n.a.createElement(s.BlockControls,null,n.a.createElement(s.BlockAlignmentToolbar,{value:C,onChange:function(e){O({align:e})},controls:["wide","full"]}),n.a.createElement(s.BlockVerticalAlignmentToolbar,{value:T,onChange:function(e){O({vAlign:e})}})),n.a.createElement(s.InspectorControls,null,n.a.createElement(_.PanelBody,{title:Object(l.__)("Layout","ultimate-addons-for-gutenberg")},n.a.createElement(_.RangeControl,{label:Object(l.__)("Columns","ultimate-addons-for-gutenberg"),value:ie,min:0,max:6,onChange:function(e){return O({columns:e})}}),n.a.createElement(_.SelectControl,{label:Object(l.__)("Stack on","ultimate-addons-for-gutenberg"),value:j,options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(l.__)("Tablet & Mobile","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(l.__)("Mobile","ultimate-addons-for-gutenberg")}],onChange:function(e){return O({stack:e})},help:Object(l.__)("Note: Choose on what breakpoint the columns will stack.","ultimate-addons-for-gutenberg")}),n.a.createElement(_.SelectControl,{label:Object(l.__)("Container Width","ultimate-addons-for-gutenberg"),value:y,onChange:function(e){return O({contentWidth:e})},options:[{value:"theme",label:Object(l.__)("Theme Container Width","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(l.__)("Custom","ultimate-addons-for-gutenberg")}]}),"custom"==y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(l.__)("Size Type","ultimate-addons-for-gutenberg")},n.a.createElement(_.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===E,"aria-pressed":"px"===E,min:0,max:2e3,onClick:function(){return O({widthType:"px"})}},"px"),n.a.createElement(_.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===E,"aria-pressed":"%"===E,min:0,max:100,onClick:function(){return O({widthType:"%"})}},"%")),n.a.createElement(_.RangeControl,{label:Object(l.__)("Inner Width","ultimate-addons-for-gutenberg"),value:k,min:0,max:"%"==E?100:2e3,onChange:function(e){return O({width:e})}})),n.a.createElement(i.a,{setAttributes:O,label:Object(l.__)("Gap","ultimate-addons-for-gutenberg"),data:{value:P,label:"columnGap"},className:"uagb-multi-button-alignment-control",options:[{value:"10",label:Object(l.__)("Default","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Default (10px)","ultimate-addons-for-gutenberg")},{value:"0",label:Object(l.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("No Gap (0px)","ultimate-addons-for-gutenberg")},{value:"5",label:Object(l.__)("S","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Narrow (5px)","ultimate-addons-for-gutenberg")},{value:"15",label:Object(l.__)("M","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Extended (15px)","ultimate-addons-for-gutenberg")},{value:"20",label:Object(l.__)("L","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Wide (20px)","ultimate-addons-for-gutenberg")},{value:"30",label:Object(l.__)("XL","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Wider (30px)","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(l.__)("Note: The individual Column Gap can be managed from Column Settings.","ultimate-addons-for-gutenberg")}),n.a.createElement(_.SelectControl,{label:Object(l.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:M,onChange:function(e){return O({tag:e})},options:[{value:"div",label:Object(l.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(l.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(l.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(l.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(l.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(l.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(l.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(l.__)("nav","ultimate-addons-for-gutenberg")}]}),n.a.createElement(_.ToggleControl,{label:Object(l.__)("Reverse Columns (Tablet & Mobile)","ultimate-addons-for-gutenberg"),checked:Te,onChange:function(){return O({reverseTablet:!Te})}}),n.a.createElement(_.ToggleControl,{label:Object(l.__)("Reverse Columns (Mobile)","ultimate-addons-for-gutenberg"),checked:ye,onChange:function(){return O({reverseMobile:!ye})}})),n.a.createElement(_.PanelBody,{title:Object(l.__)("Spacing"),initialOpen:!1},n.a.createElement(u.a,v({},e.parentProps,{label:Object(l.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:N,label:"topPadding"},valueRight:{value:z,label:"rightPadding"},valueBottom:{value:W,label:"bottomPadding"},valueLeft:{value:R,label:"leftPadding"},valueTopTablet:{value:D,label:"topPaddingTablet"},valueRightTablet:{value:U,label:"rightPaddingTablet"},valueBottomTablet:{value:F,label:"bottomPaddingTablet"},valueLeftTablet:{value:L,label:"leftPaddingTablet"},valueTopMobile:{value:I,label:"topPaddingMobile"},valueRightMobile:{value:J,label:"rightPaddingMobile"},valueBottomMobile:{value:V,label:"bottomPaddingMobile"},valueLeftMobile:{value:G,label:"leftPaddingMobile"},unit:{value:He,label:"desktopPaddingType"},mUnit:{value:Be,label:"mobilePaddingType"},tUnit:{value:Ae,label:"tabletPaddingType"},attributes:h,setAttributes:O,link:{value:Ne,label:"paddingLink"}})),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement(u.a,v({},e.parentProps,{label:Object(l.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:S,label:"topMargin"},valueRight:{value:S,label:"topMargin"},valueBottom:{value:w,label:"bottomMargin"},valueLeft:{value:w,label:"bottomMargin"},valueTopTablet:{value:A,label:"topMarginTablet"},valueRightTablet:{value:A,label:"topMarginTablet"},valueBottomTablet:{value:H,label:"bottomMarginTablet"},valueLeftTablet:{value:H,label:"bottomMarginTablet"},valueTopMobile:{value:x,label:"topMarginMobile"},valueRightMobile:{value:x,label:"topMarginMobile"},valueBottomMobile:{value:B,label:"bottomMarginMobile"},valueLeftMobile:{value:B,label:"bottomMarginMobile"},unit:{value:xe,label:"desktopMarginType"},mUnit:{value:Se,label:"mobileMarginType"},tUnit:{value:we,label:"tabletMarginType"},attributes:h,setAttributes:O,link:{value:We,label:"marginLink"}}))),n.a.createElement(_.PanelBody,{title:Object(l.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(g.a,v({setAttributes:O,backgroundImageColor:{value:te,label:Object(l.__)("Background Image Color","ultimate-addons-for-gutenberg")},overlayType:{value:ae,label:Object(l.__)("Overlay Type","ultimate-addons-for-gutenberg")},backgroundSize:{value:$,label:Object(l.__)("Background Size","ultimate-addons-for-gutenberg")},backgroundRepeat:{value:Y,label:Object(l.__)("Background Repeat","ultimate-addons-for-gutenberg")},backgroundAttachment:{value:Q,label:Object(l.__)("Background Attachement","ultimate-addons-for-gutenberg")},backgroundPosition:{value:K,label:Object(l.__)("Background Image","ultimate-addons-for-gutenberg")},backgroundImage:{value:X,label:Object(l.__)("Background Image","ultimate-addons-for-gutenberg")},backgroundColor:{value:q,label:Object(l.__)("Background Color","ultimate-addons-for-gutenberg")},backgroundType:{value:Z,label:Object(l.__)("Background Type","ultimate-addons-for-gutenberg")},backgroundOpacity:{value:ee,label:Object(l.__)("Opacity","ultimate-addons-for-gutenberg")}},e.parentProps))),(t=[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"tilt",label:Object(l.__)("Tilt","ultimate-addons-for-gutenberg")},{value:"mountains",label:Object(l.__)("Mountains","ultimate-addons-for-gutenberg")},{value:"wave_brush",label:Object(l.__)("Wave Brush","ultimate-addons-for-gutenberg")},{value:"waves",label:Object(l.__)("Waves","ultimate-addons-for-gutenberg")},{value:"wave_pattern",label:Object(l.__)("Waves Pattern","ultimate-addons-for-gutenberg")},{value:"triangle",label:Object(l.__)("Triangle","ultimate-addons-for-gutenberg")},{value:"drops",label:Object(l.__)("Drops","ultimate-addons-for-gutenberg")},{value:"clouds",label:Object(l.__)("Clouds","ultimate-addons-for-gutenberg")},{value:"zigzag",label:Object(l.__)("ZigZag","ultimate-addons-for-gutenberg")},{value:"pyramids",label:Object(l.__)("Pyramids","ultimate-addons-for-gutenberg")},{value:"triangle_asymmetrical",label:Object(l.__)("Triangle Asymmetrical","ultimate-addons-for-gutenberg")},{value:"tilt_opacity",label:Object(l.__)("Tilt Opacity","ultimate-addons-for-gutenberg")},{value:"fan_opacity",label:Object(l.__)("Fan Opacity","ultimate-addons-for-gutenberg")},{value:"curve",label:Object(l.__)("Curve","ultimate-addons-for-gutenberg")},{value:"curve_asymmetrical",label:Object(l.__)("Curve Asymmetrical","ultimate-addons-for-gutenberg")},{value:"curve_reverse",label:Object(l.__)("Curve Reverse","ultimate-addons-for-gutenberg")},{value:"curve_asym_reverse",label:Object(l.__)("Curve Asymmetrical Reverse","ultimate-addons-for-gutenberg")},{value:"arrow",label:Object(l.__)("Arrow","ultimate-addons-for-gutenberg")},{value:"arrow_split",label:Object(l.__)("Arrow Split","ultimate-addons-for-gutenberg")},{value:"book",label:Object(l.__)("Book","ultimate-addons-for-gutenberg")}],a=n.a.createElement(n.a.Fragment,null,n.a.createElement(_.SelectControl,{label:Object(l.__)("Type","ultimate-addons-for-gutenberg"),value:_e,onChange:function(e){return O({topType:e})},options:t}),"none"!=_e&&n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ve,onColorChange:function(e){return O({topColor:e})}}),n.a.createElement(m.a,{label:Object(l.__)("Opacity","ultimate-addons-for-gutenberg"),setAttributes:O,value:ke,onChange:function(e){return O({topDividerOpacity:e})},min:0,max:100,displayUnit:!1}),n.a.createElement(m.a,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:O,value:Oe,onChange:function(e){return O({topWidth:e})},min:100,max:2e3,displayUnit:!1}),n.a.createElement(_.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:n.a.createElement(_.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:n.a.createElement(_.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:n.a.createElement(_.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?n.a.createElement(m.a,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),setAttributes:O,value:he,onChange:function(e){return O({topHeightMobile:e})},min:0,max:500,displayUnit:!1}):"tablet"===e.name?n.a.createElement(m.a,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),setAttributes:O,value:fe,onChange:function(e){return O({topHeightTablet:e})},min:0,max:500,displayUnit:!1}):n.a.createElement(m.a,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),setAttributes:O,value:pe,onChange:function(e){return O({topHeight:e})},min:0,max:500,displayUnit:!1}),n.a.createElement("div",null,t)})),n.a.createElement(_.ToggleControl,{label:Object(l.__)("Flip","ultimate-addons-for-gutenberg"),checked:Ce,onChange:function(){return O({topFlip:!Ce})}}),n.a.createElement(_.ToggleControl,{label:Object(l.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:Me,onChange:function(){return O({topContentAboveShape:!Me})}}))),p=n.a.createElement(n.a.Fragment,null,n.a.createElement(_.SelectControl,{label:Object(l.__)("Type","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return O({bottomType:e})},options:t}),"none"!=ue&&n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ge,onColorChange:function(e){return O({bottomColor:e})}}),n.a.createElement(m.a,{label:Object(l.__)("Opacity","ultimate-addons-for-gutenberg"),setAttributes:O,value:Ee,onChange:function(e){return O({bottomDividerOpacity:e})},min:0,max:100,displayUnit:!1}),n.a.createElement(m.a,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:O,value:se,onChange:function(e){return O({bottomWidth:e})},min:100,max:2e3,displayUnit:!1}),n.a.createElement(_.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:n.a.createElement(_.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:n.a.createElement(_.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:n.a.createElement(_.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?n.a.createElement(m.a,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),setAttributes:O,value:me,onChange:function(e){return O({bottomHeightMobile:e})},min:0,max:500,displayUnit:!1}):"tablet"===e.name?n.a.createElement(m.a,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),setAttributes:O,value:ce,onChange:function(e){return O({bottomHeightTablet:e})},min:0,max:500,displayUnit:!1}):n.a.createElement(m.a,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),setAttributes:O,value:de,onChange:function(e){return O({bottomHeight:e})},min:0,max:500,displayUnit:!1}),n.a.createElement("div",null,t)})),n.a.createElement(_.ToggleControl,{label:Object(l.__)("Flip","ultimate-addons-for-gutenberg"),checked:je,onChange:function(){return O({bottomFlip:!je})}}),n.a.createElement(_.ToggleControl,{label:Object(l.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:Pe,onChange:function(){return O({bottomContentAboveShape:!Pe})}}))),n.a.createElement(_.PanelBody,{title:Object(l.__)("Shape Dividers","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(_.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"top",title:Object(l.__)("Top","ultimate-addons-for-gutenberg"),className:"uagb-top-tab"},{name:"bottom",title:Object(l.__)("Bottom","ultimate-addons-for-gutenberg"),className:"uagb-bottom-tab"}]},(function(e){var t;return t="bottom"===e.name?p:a,n.a.createElement("div",null,t)})))),n.a.createElement(_.PanelBody,{title:Object(l.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,{setAttributes:O,borderStyle:{value:le,label:Object(l.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:oe,label:Object(l.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ne,label:Object(l.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:re,label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:be,label:Object(l.__)("Hover Color","ultimate-addons-for-gutenberg")}}),n.a.createElement(b.a,{setAttributes:O,label:Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:Re,label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:ze,label:Object(l.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:De,label:Object(l.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:Fe,label:Object(l.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:Le,label:Object(l.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Ue,label:Object(l.__)("Position","ultimate-addons-for-gutenberg")}}))))};t.default=n.a.memo(p)}}]);