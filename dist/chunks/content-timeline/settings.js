(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[21],{523:function(e,t,a){"use strict";a.r(t);var l=a(96),n=a.n(l),o=a(12),i=a(1),r=a.n(i),b=a(18),u=a(50),d=a(97),c=a(60),g=a(17),s=a(16),m=a(98),f=a(2),h=a(19),_=a(5),v=a(4),p=a(9);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var j=function(e){var t,a,l,i,j,C=e=e.parentProps,F=C.setAttributes,H=C.attributes,T=H.headSpace,y=H.headingColor,E=H.subHeadingColor,S=H.backgroundColor,P=H.separatorColor,z=H.separatorFillColor,B=H.separatorBg,M=H.separatorBorder,L=H.borderFocus,k=H.headingTag,Y=H.headFontSizeType,I=H.headFontSize,A=H.headFontSizeTablet,w=H.headFontSizeMobile,U=H.headFontFamily,V=H.headFontWeight,G=H.headFontSubset,W=H.headLineHeightType,D=H.headLineHeight,x=H.headLineHeightTablet,N=H.headLineHeightMobile,R=H.headLoadGoogleFonts,J=H.timelinAlignment,q=H.arrowlinAlignment,K=H.subHeadFontSizeType,Q=H.subHeadFontSize,X=H.subHeadFontSizeTablet,Z=H.subHeadFontSizeMobile,$=H.subHeadFontFamily,ee=H.subHeadFontWeight,te=H.subHeadFontSubset,ae=H.subHeadLineHeightType,le=H.subHeadLineHeight,ne=H.subHeadLineHeightTablet,oe=H.subHeadLineHeightMobile,ie=H.subHeadLoadGoogleFonts,re=(H.verticalSpace,H.horizontalSpace,H.separatorwidth),be=H.borderwidth,ue=H.connectorBgsize,de=H.dateBottomspace,ce=H.align,ge=H.icon,se=H.iconColor,me=H.dateColor,fe=H.dateFontsizeType,he=H.dateFontsize,_e=H.dateFontsizeTablet,ve=H.dateFontsizeMobile,pe=H.dateFontFamily,Oe=H.dateFontWeight,je=H.dateFontSubset,Ce=H.dateLineHeightType,Fe=H.dateLineHeight,He=H.dateLineHeightTablet,Te=H.dateLineHeightMobile,ye=H.dateLoadGoogleFonts,Ee=H.iconSize,Se=H.borderRadius,Pe=H.bgPadding,ze=H.iconFocus,Be=H.iconBgFocus,Me=H.displayPostDate,Le=H.stack,ke=H.dateFormat,Ye=H.topPadding,Ie=H.rightPadding,Ae=H.bottomPadding,we=H.leftPadding,Ue=H.topPaddingTablet,Ve=H.rightPaddingTablet,Ge=H.bottomPaddingTablet,We=H.leftPaddingTablet,De=H.topPaddingMobile,xe=H.rightPaddingMobile,Ne=H.bottomPaddingMobile,Re=H.leftPaddingMobile,Je=H.paddingUnit,qe=H.mobilePaddingUnit,Ke=H.tabletPaddingUnit,Qe=H.paddingLink,Xe=new Date;if(1==R){var Ze={google:{families:[U+(V?":"+V:"")]}};t=r.a.createElement(u.a,{config:Ze})}if(1==ie){var $e={google:{families:[$+(ee?":"+ee:"")]}};a=r.a.createElement(u.a,{config:$e})}if(1==ye){var et={google:{families:[pe+(Oe?":"+Oe:"")]}};l=r.a.createElement(u.a,{config:et})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.BlockControls,null,r.a.createElement(_.BlockAlignmentToolbar,{value:ce,onChange:function(e){F({align:e})},controls:["center","left","right"]})),r.a.createElement(_.InspectorControls,null,r.a.createElement(d.a,null,r.a.createElement(c.a,{key:"general"},r.a.createElement(v.PanelBody,{title:Object(f.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement("h2",null,Object(f.__)("Layout","ultimate-addons-for-gutenberg")),r.a.createElement(v.SelectControl,{label:Object(f.__)("Orientation","ultimate-addons-for-gutenberg"),value:J,onChange:function(e){return F({timelinAlignment:e})},options:[{value:"left",label:Object(f.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(f.__)("Right","ultimate-addons-for-gutenberg")},{value:"center",label:Object(f.__)("Center","ultimate-addons-for-gutenberg")}]}),r.a.createElement(v.SelectControl,{label:Object(f.__)("Arrow Alignment","ultimate-addons-for-gutenberg"),value:q,onChange:function(e){return F({arrowlinAlignment:e})},options:[{value:"top",label:Object(f.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(f.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"center",label:Object(f.__)("Center","ultimate-addons-for-gutenberg")}]}),r.a.createElement(v.SelectControl,{label:Object(f.__)("Stack on","ultimate-addons-for-gutenberg"),value:Le,options:[{value:"none",label:Object(f.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(f.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(f.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(f.__)("Note: Choose on what breakpoint the Content Timeline will stack. It will be visible on front end only.","ultimate-addons-for-gutenberg"),onChange:function(e){return F({stack:e})}}),r.a.createElement("h2",null,Object(f.__)("Date")),r.a.createElement(v.ToggleControl,{label:Object(f.__)("Display Date","ultimate-addons-for-gutenberg"),checked:Me,onChange:function(){Object(p.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.displayPostDate=Me})),F({displayPostDate:!Me})}}),Me&&r.a.createElement(v.SelectControl,{label:Object(f.__)("Date Format","ultimate-addons-for-gutenberg"),value:ke,onChange:function(t){Object(p.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.dateFormat=t})),F({dateFormat:t})},options:[{value:"M j, Y",label:Object(h.dateI18n)("M j, Y",Xe)},{value:"F j, Y",label:Object(h.dateI18n)("F j, Y",Xe)},{value:"m/d/Y",label:Object(h.dateI18n)("m/d/Y",Xe)},{value:"m-d-Y",label:Object(h.dateI18n)("m-d-Y",Xe)},{value:"m.d.Y",label:Object(h.dateI18n)("m.d.Y",Xe)},{value:"d M Y",label:Object(h.dateI18n)("d M Y",Xe)},{value:"d F Y",label:Object(h.dateI18n)("d F Y",Xe)},{value:"d-m-Y",label:Object(h.dateI18n)("d-m-Y",Xe)},{value:"d.m.Y",label:Object(h.dateI18n)("d.m.Y",Xe)},{value:"d/m/Y",label:Object(h.dateI18n)("d/m/Y",Xe)},{value:"Y-m-d",label:Object(h.dateI18n)("Y-m-d",Xe)},{value:"Y.m.d",label:Object(h.dateI18n)("Y.m.d",Xe)},{value:"Y/m/d",label:Object(h.dateI18n)("Y/m/d",Xe)},{value:"M, Y",label:Object(h.dateI18n)("M, Y",Xe)},{value:"M Y",label:Object(h.dateI18n)("M Y",Xe)},{value:"F, Y",label:Object(h.dateI18n)("F, Y",Xe)},{value:"F Y",label:Object(h.dateI18n)("F Y",Xe)},{value:"custom",label:Object(f.__)("Normal Text","ultimate-addons-for-gutenberg")}]}),Me&&"center"!==J&&r.a.createElement(s.a,{label:Object(f.__)("Date Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:F,value:de,onChange:function(e){return F({dateBottomspace:e})},min:0,max:50,displayUnit:!1})),r.a.createElement(v.PanelBody,{title:Object(f.__)("Timeline Item","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(v.SelectControl,{label:Object(f.__)("Heading Tag","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return F({headingTag:e})},options:[{value:"h1",label:Object(f.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(f.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(f.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(f.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(f.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(f.__)("H6","ultimate-addons-for-gutenberg")},{value:"p",label:Object(f.__)("P","ultimate-addons-for-gutenberg")},{value:"span",label:Object(f.__)("SPAN","ultimate-addons-for-gutenberg")}]}),r.a.createElement(s.a,{label:Object(f.__)("Rounded Corners","ultimate-addons-for-gutenberg"),setAttributes:F,value:Se,onChange:function(e){return F({borderRadius:e})},min:0,max:50,displayUnit:!1}),r.a.createElement(s.a,{label:Object(f.__)("Padding","ultimate-addons-for-gutenberg"),setAttributes:F,value:Pe,onChange:function(e){return F({bgPadding:e})},min:1,max:50,displayUnit:!1})),r.a.createElement(v.PanelBody,{title:Object(f.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(n.a,{icons:wp.UAGBSvgIcons,value:ge,onChange:function(t){Object(p.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.icon=t})),F({icon:t})},isMulti:!1,renderFunc:o.a,noSelectedPlaceholder:Object(f.__)("Select Icon","ultimate-addons-for-gutenberg")}),r.a.createElement(s.a,{label:Object(f.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:F,value:Ee,onChange:function(t){Object(p.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.iconSize=t})),F({iconSize:t})},min:0,max:30,displayUnit:!1}),r.a.createElement(s.a,{label:Object(f.__)("Icon Background Size","ultimate-addons-for-gutenberg"),setAttributes:F,value:ue,onChange:function(t){Object(p.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.connectorBgsize=t})),F({connectorBgsize:t})},min:25,max:90,displayUnit:!1}),r.a.createElement(s.a,{label:Object(f.__)("Border Width","ultimate-addons-for-gutenberg"),setAttributes:F,value:be,onChange:function(t){Object(p.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.borderwidth=t})),F({borderwidth:t})},min:1,max:10,displayUnit:!1}),r.a.createElement(s.a,{label:Object(f.__)("Connector Width","ultimate-addons-for-gutenberg"),setAttributes:F,value:re,onChange:function(t){Object(p.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.separatorwidth=t})),F({separatorwidth:t})},min:1,max:10,displayUnit:!1}))),r.a.createElement(c.a,{key:"style"},r.a.createElement(v.PanelBody,{title:Object(f.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(g.a,{label:Object(f.__)("Color","ultimate-addons-for-gutenberg"),colorValue:y||"",onColorChange:function(e){return F({headingColor:e})}}),r.a.createElement(b.a,{label:Object(f.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:F,loadGoogleFonts:{value:R,label:"headLoadGoogleFonts"},fontFamily:{value:U,label:"headFontFamily"},fontWeight:{value:V,label:"headFontWeight"},fontSubset:{value:G,label:"headFontSubset"},fontSizeType:{value:Y,label:"headFontSizeType"},fontSize:{value:I,label:"headFontSize"},fontSizeMobile:{value:w,label:"headFontSizeMobile"},fontSizeTablet:{value:A,label:"headFontSizeTablet"},lineHeightType:{value:W,label:"headLineHeightType"},lineHeight:{value:D,label:"headLineHeight"},lineHeightMobile:{value:N,label:"headLineHeightMobile"},lineHeightTablet:{value:x,label:"headLineHeightTablet"}})),r.a.createElement(v.PanelBody,{title:Object(f.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(g.a,{label:Object(f.__)("Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:function(e){return F({subHeadingColor:e})}}),r.a.createElement(b.a,{label:Object(f.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:F,loadGoogleFonts:{value:ie,label:"subHeadLoadGoogleFonts"},fontFamily:{value:$,label:"subHeadFontFamily"},fontWeight:{value:ee,label:"subHeadFontWeight"},fontSubset:{value:te,label:"subHeadFontSubset"},fontSizeType:{value:K,label:"subHeadFontSizeType"},fontSize:{value:Q,label:"subHeadFontSize"},fontSizeMobile:{value:Z,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:X,label:"subHeadFontSizeTablet"},lineHeightType:{value:ae,label:"subHeadLineHeightType"},lineHeight:{value:le,label:"subHeadLineHeight"},lineHeightMobile:{value:oe,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:ne,label:"subHeadLineHeightTablet"}})),r.a.createElement(v.PanelBody,{title:Object(f.__)("Date","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(g.a,{label:Object(f.__)("Color","ultimate-addons-for-gutenberg"),colorValue:me||"",onColorChange:function(e){return F({dateColor:e})}}),Me&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{label:Object(f.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:F,loadGoogleFonts:{value:ye,label:"dateLoadGoogleFonts"},fontFamily:{value:pe,label:"dateFontFamily"},fontWeight:{value:Oe,label:"dateFontWeight"},fontSubset:{value:je,label:"dateFontSubset"},fontSizeType:{value:fe,label:"dateFontsizeType"},fontSize:{value:he,label:"dateFontsize"},fontSizeMobile:{value:ve,label:"dateFontsizeMobile"},fontSizeTablet:{value:_e,label:"dateFontsizeTablet"},lineHeightType:{value:Ce,label:"dateLineHeightType"},lineHeight:{value:Fe,label:"dateLineHeight"},lineHeightMobile:{value:Te,label:"dateLineHeightMobile"},lineHeightTablet:{value:He,label:"dateLineHeightTablet"}}))),r.a.createElement(v.PanelBody,{title:Object(f.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(g.a,{label:Object(f.__)("Color","ultimate-addons-for-gutenberg"),colorValue:S||"",onColorChange:function(e){return F({backgroundColor:e})}})),(i=r.a.createElement(v.PanelBody,{title:Object(f.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(g.a,{label:Object(f.__)("Line Color","ultimate-addons-for-gutenberg"),colorValue:P||"",onColorChange:function(e){return F({separatorColor:e})}}),r.a.createElement(g.a,{label:Object(f.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:se||"",onColorChange:function(e){return F({iconColor:e})}}),r.a.createElement(g.a,{label:Object(f.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:function(e){return F({separatorBg:e})}}),r.a.createElement(g.a,{label:Object(f.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:function(e){return F({separatorBorder:e})}})),j=r.a.createElement(v.PanelBody,{title:Object(f.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(g.a,{label:Object(f.__)("Line Color","ultimate-addons-for-gutenberg"),colorValue:z||"",onColorChange:function(e){return F({separatorFillColor:e})}}),r.a.createElement(g.a,{label:Object(f.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:ze||"",onColorChange:function(e){return F({iconFocus:e})}}),r.a.createElement(g.a,{label:Object(f.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Be||"",onColorChange:function(e){return F({iconBgFocus:e})}}),r.a.createElement(g.a,{label:Object(f.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:L||"",onColorChange:function(e){return F({borderFocus:e})}})),r.a.createElement(v.PanelBody,{title:Object(f.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(v.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(f.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"focus",title:Object(f.__)("Focus","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="focus"===e.name?j:i,r.a.createElement("div",null,t)})))),r.a.createElement(v.PanelBody,{title:Object(f.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(m.a,O({},e,{label:Object(f.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ye,label:"topPadding"},valueRight:{value:Ie,label:"rightPadding"},valueBottom:{value:Ae,label:"bottomPadding"},valueLeft:{value:we,label:"leftPadding"},valueTopTablet:{value:Ue,label:"topPaddingTablet"},valueRightTablet:{value:Ve,label:"rightPaddingTablet"},valueBottomTablet:{value:Ge,label:"bottomPaddingTablet"},valueLeftTablet:{value:We,label:"leftPaddingTablet"},valueTopMobile:{value:De,label:"topPaddingMobile"},valueRightMobile:{value:xe,label:"rightPaddingMobile"},valueBottomMobile:{value:Ne,label:"bottomPaddingMobile"},valueLeftMobile:{value:Re,label:"leftPaddingMobile"},unit:{value:Je,label:"paddingUnit"},mUnit:{value:qe,label:"mobilePaddingUnit"},tUnit:{value:Ke,label:"tabletPaddingUnit"},attributes:attributes,setAttributes:F,link:{value:Qe,label:"paddingLink"}})),r.a.createElement(s.a,{label:Object(f.__)("Heading Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:F,value:T,onChange:function(e){return F({headSpace:e})},min:0,max:50,displayUnit:!1}))),r.a.createElement(c.a,{key:"advance"}))),t,a,l)};t.default=r.a.memo(j)}}]);