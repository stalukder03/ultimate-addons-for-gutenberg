(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{367:function(e,t,a){"use strict";a.r(t);var l=a(17),n=a(18),o=a.n(n),r=a(6),i=a(2),b=a.n(i),u=a(11),c=a(0),d=a(21),g=a(9),s=a(263),m=a(16),h=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,7))})),f=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,10))})),_=Object.keys(l),v=function(e){var t,a,l,n,v,O=e=e.parentProps,j=O.setAttributes,p=O.attributes,C=p.headSpace,F=p.headingColor,H=p.subHeadingColor,S=p.backgroundColor,E=p.separatorColor,y=p.separatorFillColor,T=p.separatorBg,z=p.separatorBorder,B=p.borderFocus,L=p.headingTag,Y=p.headFontSizeType,k=p.headFontSize,I=p.headFontSizeTablet,w=p.headFontSizeMobile,M=p.headFontFamily,P=p.headFontWeight,R=p.headFontSubset,A=p.headLineHeightType,N=p.headLineHeight,D=p.headLineHeightTablet,x=p.headLineHeightMobile,W=p.headLoadGoogleFonts,G=p.timelinAlignment,J=p.arrowlinAlignment,V=p.subHeadFontSizeType,q=p.subHeadFontSize,K=p.subHeadFontSizeTablet,Q=p.subHeadFontSizeMobile,U=p.subHeadFontFamily,X=p.subHeadFontWeight,Z=p.subHeadFontSubset,$=p.subHeadLineHeightType,ee=p.subHeadLineHeight,te=p.subHeadLineHeightTablet,ae=p.subHeadLineHeightMobile,le=p.subHeadLoadGoogleFonts,ne=p.verticalSpace,oe=p.horizontalSpace,re=p.separatorwidth,ie=p.borderwidth,be=p.connectorBgsize,ue=p.dateBottomspace,ce=p.align,de=p.icon,ge=p.iconColor,se=p.dateColor,me=p.dateFontsizeType,he=p.dateFontsize,fe=p.dateFontsizeTablet,_e=p.dateFontsizeMobile,ve=p.dateFontFamily,Oe=p.dateFontWeight,je=p.dateFontSubset,pe=p.dateLineHeightType,Ce=p.dateLineHeight,Fe=p.dateLineHeightTablet,He=p.dateLineHeightMobile,Se=p.dateLoadGoogleFonts,Ee=p.iconSize,ye=p.borderRadius,Te=p.bgPadding,ze=p.iconFocus,Be=p.iconBgFocus,Le=p.displayPostDate,Ye=p.stack,ke=p.dateFormat,Ie=new Date;if(1==W){var we={google:{families:[M+(P?":"+P:"")]}};t=b.a.createElement(f,{config:we})}if(1==le){var Me={google:{families:[U+(X?":"+X:"")]}};a=b.a.createElement(f,{config:Me})}if(1==Se){var Pe={google:{families:[ve+(Oe?":"+Oe:"")]}};l=b.a.createElement(f,{config:Pe})}return b.a.createElement(i.Suspense,{fallback:Object(u.a)()},b.a.createElement(g.BlockControls,null,b.a.createElement(g.BlockAlignmentToolbar,{value:ce,onChange:function(e){j({align:e})},controls:["center","left","right"]})),b.a.createElement(g.InspectorControls,null,b.a.createElement(s.PanelBody,{title:Object(c.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!1},b.a.createElement("h2",null,Object(c.__)("Layout","ultimate-addons-for-gutenberg")),b.a.createElement(s.SelectControl,{label:Object(c.__)("Orientation","ultimate-addons-for-gutenberg"),value:G,onChange:function(e){return j({timelinAlignment:e})},options:[{value:"left",label:Object(c.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(c.__)("Right","ultimate-addons-for-gutenberg")},{value:"center",label:Object(c.__)("Center","ultimate-addons-for-gutenberg")}]}),b.a.createElement(s.SelectControl,{label:Object(c.__)("Arrow Alignment","ultimate-addons-for-gutenberg"),value:J,onChange:function(e){return j({arrowlinAlignment:e})},options:[{value:"top",label:Object(c.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(c.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"center",label:Object(c.__)("Center","ultimate-addons-for-gutenberg")}]}),b.a.createElement(s.SelectControl,{label:Object(c.__)("Stack on","ultimate-addons-for-gutenberg"),value:Ye,options:[{value:"none",label:Object(c.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(c.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(c.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(c.__)("Note: Choose on what breakpoint the Content Timeline will stack. It will be visible on front end only.","ultimate-addons-for-gutenberg"),onChange:function(e){return j({stack:e})}}),b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement("h2",null,Object(c.__)("Date")),b.a.createElement(s.ToggleControl,{label:Object(c.__)("Display Date","ultimate-addons-for-gutenberg"),checked:Le,onChange:function(){var t=e.attributes.displayPostDate,a=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,a){e.attributes.displayPostDate=t})),a({displayPostDate:!t})}}),Le&&b.a.createElement(s.SelectControl,{label:Object(c.__)("Date Format","ultimate-addons-for-gutenberg"),value:ke,onChange:function(t){var a=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,a){e.attributes.dateFormat=t})),a({dateFormat:t})},options:[{value:"M j, Y",label:Object(d.dateI18n)("M j, Y",Ie)},{value:"F j, Y",label:Object(d.dateI18n)("F j, Y",Ie)},{value:"m/d/Y",label:Object(d.dateI18n)("m/d/Y",Ie)},{value:"m-d-Y",label:Object(d.dateI18n)("m-d-Y",Ie)},{value:"m.d.Y",label:Object(d.dateI18n)("m.d.Y",Ie)},{value:"d M Y",label:Object(d.dateI18n)("d M Y",Ie)},{value:"d F Y",label:Object(d.dateI18n)("d F Y",Ie)},{value:"d-m-Y",label:Object(d.dateI18n)("d-m-Y",Ie)},{value:"d.m.Y",label:Object(d.dateI18n)("d.m.Y",Ie)},{value:"d/m/Y",label:Object(d.dateI18n)("d/m/Y",Ie)},{value:"Y-m-d",label:Object(d.dateI18n)("Y-m-d",Ie)},{value:"Y.m.d",label:Object(d.dateI18n)("Y.m.d",Ie)},{value:"Y/m/d",label:Object(d.dateI18n)("Y/m/d",Ie)},{value:"M, Y",label:Object(d.dateI18n)("M, Y",Ie)},{value:"M Y",label:Object(d.dateI18n)("M Y",Ie)},{value:"F, Y",label:Object(d.dateI18n)("F, Y",Ie)},{value:"F Y",label:Object(d.dateI18n)("F Y",Ie)},{value:"custom",label:Object(c.__)("Normal Text","ultimate-addons-for-gutenberg")}]}),Le&&"center"!==G&&b.a.createElement(s.RangeControl,{label:Object(c.__)("Date Bottom Spacing","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return j({dateBottomspace:e})},min:0,max:50,allowReset:!0}),b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement("h2",null,Object(c.__)("Heading","ultimate-addons-for-gutenberg")),b.a.createElement(h,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:j,loadGoogleFonts:{value:W,label:"headLoadGoogleFonts"},fontFamily:{value:M,label:"headFontFamily"},fontWeight:{value:P,label:"headFontWeight"},fontSubset:{value:R,label:"headFontSubset"},fontSizeType:{value:Y,label:"headFontSizeType"},fontSize:{value:k,label:"headFontSize"},fontSizeMobile:{value:w,label:"headFontSizeMobile"},fontSizeTablet:{value:I,label:"headFontSizeTablet"},lineHeightType:{value:A,label:"headLineHeightType"},lineHeight:{value:N,label:"headLineHeight"},lineHeightMobile:{value:x,label:"headLineHeightMobile"},lineHeightTablet:{value:D,label:"headLineHeightTablet"}}),b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement("h2",null,Object(c.__)("Content","ultimate-addons-for-gutenberg")),b.a.createElement(h,{label:Object(c.__)("Content Tag","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:j,loadGoogleFonts:{value:le,label:"subHeadLoadGoogleFonts"},fontFamily:{value:U,label:"subHeadFontFamily"},fontWeight:{value:X,label:"subHeadFontWeight"},fontSubset:{value:Z,label:"subHeadFontSubset"},fontSizeType:{value:V,label:"subHeadFontSizeType"},fontSize:{value:q,label:"subHeadFontSize"},fontSizeMobile:{value:Q,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:K,label:"subHeadFontSizeTablet"},lineHeightType:{value:$,label:"subHeadLineHeightType"},lineHeight:{value:ee,label:"subHeadLineHeight"},lineHeightMobile:{value:ae,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:te,label:"subHeadLineHeightTablet"}}),Le&&b.a.createElement(b.a.Fragment,null,b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement("h2",null,Object(c.__)("Date Typography","ultimate-addons-for-gutenberg")),b.a.createElement(h,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:j,loadGoogleFonts:{value:Se,label:"dateLoadGoogleFonts"},fontFamily:{value:ve,label:"dateFontFamily"},fontWeight:{value:Oe,label:"dateFontWeight"},fontSubset:{value:je,label:"dateFontSubset"},fontSizeType:{value:me,label:"dateFontsizeType"},fontSize:{value:he,label:"dateFontsize"},fontSizeMobile:{value:_e,label:"dateFontsizeMobile"},fontSizeTablet:{value:fe,label:"dateFontsizeTablet"},lineHeightType:{value:pe,label:"dateLineHeightType"},lineHeight:{value:Ce,label:"dateLineHeight"},lineHeightMobile:{value:He,label:"dateLineHeightMobile"},lineHeightTablet:{value:Fe,label:"dateLineHeightTablet"}}),b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement("p",{className:"uagb-setting-label"},Object(c.__)("Date Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:se}}))),b.a.createElement(g.ColorPalette,{value:se,onChange:function(e){return j({dateColor:e})},allowReset:!0}))),b.a.createElement(s.PanelBody,{title:Object(c.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},b.a.createElement(s.RangeControl,{label:Object(c.__)("Horizontal Space","ultimate-addons-for-gutenberg"),value:oe,onChange:function(e){return j({horizontalSpace:e})},min:1,max:50,allowReset:!0}),b.a.createElement(s.RangeControl,{label:Object(c.__)("Vertical Space","ultimate-addons-for-gutenberg"),value:ne,onChange:function(e){return j({verticalSpace:e})},min:1,max:100,allowReset:!0}),b.a.createElement(s.RangeControl,{label:Object(c.__)("Heading Bottom Spacing","ultimate-addons-for-gutenberg"),value:C,onChange:function(e){return j({headSpace:e})},min:0,max:50,allowReset:!0})),b.a.createElement(s.PanelBody,{title:Object(c.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},b.a.createElement(o.a,{icons:_,value:de,onChange:function(t){var a=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,a){e.attributes.icon=t})),a({icon:t})},isMulti:!1,renderFunc:r.a,noSelectedPlaceholder:Object(c.__)("Select Icon","ultimate-addons-for-gutenberg")}),b.a.createElement(s.RangeControl,{label:Object(c.__)("Icon Size","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(t){var a=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,a){e.attributes.iconSize=t})),a({iconSize:t})},min:0,max:30,allowReset:!0}),b.a.createElement(s.RangeControl,{label:Object(c.__)("Icon Background Size","ultimate-addons-for-gutenberg"),value:be,onChange:function(t){var a=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,a){e.attributes.connectorBgsize=t})),a({connectorBgsize:t})},min:25,max:90,allowReset:!0}),b.a.createElement(s.RangeControl,{label:Object(c.__)("Border Width","ultimate-addons-for-gutenberg"),value:ie,onChange:function(t){var a=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,a){e.attributes.borderwidth=t})),a({borderwidth:t})},min:1,max:10,allowReset:!0}),b.a.createElement(s.RangeControl,{label:Object(c.__)("Connector Width","ultimate-addons-for-gutenberg"),value:re,onChange:function(t){var a=e.setAttributes;Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,a){e.attributes.separatorwidth=t})),a({separatorwidth:t})},min:1,max:10,allowReset:!0})),(n=b.a.createElement(g.PanelColorSettings,{title:Object(c.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,colorSettings:[{value:E,onChange:function(e){return j({separatorColor:e})},label:Object(c.__)("Line Color","ultimate-addons-for-gutenberg")},{value:ge,onChange:function(e){return j({iconColor:e})},label:Object(c.__)("Icon Color","ultimate-addons-for-gutenberg")},{value:T,onChange:function(e){return j({separatorBg:e})},label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg")},{value:z,onChange:function(e){return j({separatorBorder:e})},label:Object(c.__)("Border Color","ultimate-addons-for-gutenberg")}]}),v=b.a.createElement(g.PanelColorSettings,{title:Object(c.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,colorSettings:[{value:y,onChange:function(e){return j({separatorFillColor:e})},label:Object(c.__)("Line Color","ultimate-addons-for-gutenberg")},{value:ze,onChange:function(e){return j({iconFocus:e})},label:Object(c.__)("Icon Color","ultimate-addons-for-gutenberg")},{value:Be,onChange:function(e){return j({iconBgFocus:e})},label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg")},{value:B,onChange:function(e){return j({borderFocus:e})},label:Object(c.__)("Border Color","ultimate-addons-for-gutenberg")}]}),b.a.createElement(s.PanelBody,{title:Object(c.__)("Connector Colors","ultimate-addons-for-gutenberg"),initialOpen:!0},b.a.createElement(s.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(c.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"focus",title:Object(c.__)("Focus","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="focus"===e.name?v:n,b.a.createElement("div",null,t)})))),b.a.createElement(s.PanelBody,{title:Object(c.__)("Timeline Item","ultimate-addons-for-gutenberg"),initialOpen:!1},b.a.createElement(s.SelectControl,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),value:L,onChange:function(e){return j({headingTag:e})},options:[{value:"h1",label:Object(c.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(c.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(c.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(c.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(c.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(c.__)("H6","ultimate-addons-for-gutenberg")},{value:"p",label:Object(c.__)("P","ultimate-addons-for-gutenberg")},{value:"span",label:Object(c.__)("SPAN","ultimate-addons-for-gutenberg")}]}),b.a.createElement(s.RangeControl,{label:Object(c.__)("Rounded Corners","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return j({borderRadius:e})},min:0,initialPosition:10,max:50,allowReset:!0}),b.a.createElement(s.RangeControl,{label:Object(c.__)("Padding","ultimate-addons-for-gutenberg"),value:Te,onChange:function(e){return j({bgPadding:e})},min:1,initialPosition:10,max:50,allowReset:!0})),b.a.createElement(g.PanelColorSettings,{title:Object(c.__)("Colors","ultimate-addons-for-gutenberg"),initialOpen:!1,colorSettings:[{value:F,onChange:function(e){return j({headingColor:e})},label:Object(c.__)("Heading Color","ultimate-addons-for-gutenberg")},{value:H,onChange:function(e){return j({subHeadingColor:e})},label:Object(c.__)("Content Color","ultimate-addons-for-gutenberg")},{value:S,onChange:function(e){return j({backgroundColor:e})},label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg")}]})),t,a,l)};t.default=b.a.memo(v)}}]);