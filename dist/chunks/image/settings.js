(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[68],{468:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return M}));var n=t(0),l=t.n(n),i=t(8),r=t(29),o=t(64),b=t(22),u=t(17),g=t(45),m=t(1),d=t(4),c=t(6),h=t(12),s=t(16);function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function M(e){const{attributes:a,deviceType:t,setAttributes:M}=e.parentProps,{startNumber:f,endNumber:T,align:p,totalNumber:_,numberPrefix:S,numberSuffix:C,animationDuration:F,thousandSeparator:L,layout:y,headingLoadGoogleFonts:O,headingFontFamily:E,headingFontWeight:j,headingFontStyle:z,headingFontSize:B,headingColor:H,headingTransform:k,headingDecoration:x,headingFontSizeType:U,headingFontSizeMobile:R,headingFontSizeTablet:N,headingLineHeight:A,headingLineHeightType:D,headingLineHeightMobile:w,headingLineHeightTablet:G,headingTopMargin:P,headingRightMargin:V,headingLeftMargin:W,headingBottomMargin:J,headingTopMarginTablet:I,headingRightMarginTablet:q,headingLeftMarginTablet:K,headingBottomMarginTablet:Q,headingTopMarginMobile:X,headingRightMarginMobile:Y,headingLeftMarginMobile:Z,headingBottomMarginMobile:$,headingMarginUnit:ee,headingMarginUnitTablet:ae,headingMarginUnitMobile:te,headingMarginLink:ne,numberLoadGoogleFonts:le,numberFontFamily:ie,numberFontWeight:re,numberFontStyle:oe,numberFontSize:be,numberColor:ue,numberTransform:ge,numberDecoration:me,numberFontSizeType:de,numberFontSizeMobile:ce,numberFontSizeTablet:he,numberLineHeight:se,numberLineHeightType:ve,numberLineHeightMobile:Me,numberLineHeightTablet:fe,numberTopMargin:Te,numberRightMargin:pe,numberLeftMargin:_e,numberBottomMargin:Se,numberTopMarginTablet:Ce,numberRightMarginTablet:Fe,numberLeftMarginTablet:Le,numberBottomMarginTablet:ye,numberTopMarginMobile:Oe,numberRightMarginMobile:Ee,numberLeftMarginMobile:je,numberBottomMarginMobile:ze,numberMarginUnit:Be,numberMarginUnitTablet:He,numberMarginUnitMobile:ke,numberMarginLink:xe,prefixRightDistance:Ue,suffixLeftDistance:Re,circleSize:Ne,circleStokeSize:Ae,circleForeground:De,circleBackground:we,barSize:Ge,barForeground:Pe,barBackground:Ve}=a,We=l.a.createElement(s.a,{title:Object(m.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(c.SelectControl,{label:Object(m.__)("Layout","ultimate-addons-for-gutenberg"),value:y,options:[{label:Object(m.__)("Number Counter","ultimate-addons-for-gutenberg"),value:"number"},{label:Object(m.__)("Circle Counter","ultimate-addons-for-gutenberg"),value:"circle"},{label:Object(m.__)("Bars Counter","ultimate-addons-for-gutenberg"),value:"bars"}],onChange:e=>M({layout:e})}),l.a.createElement(c.TextControl,{label:Object(m.__)("Starting Number","ultimate-addons-for-gutenberg"),value:f,onChange:e=>M({startNumber:e})}),l.a.createElement(c.TextControl,{label:Object(m.__)("Ending Number","ultimate-addons-for-gutenberg"),value:T,onChange:e=>M({endNumber:e})}),"number"!==y&&l.a.createElement(c.TextControl,{label:Object(m.__)("Total Number","ultimate-addons-for-gutenberg"),value:_,onChange:e=>M({totalNumber:e})}),l.a.createElement(c.TextControl,{label:Object(m.__)("Number Prefix","ultimate-addons-for-gutenberg"),value:S,onChange:e=>M({numberPrefix:e})}),l.a.createElement(c.TextControl,{label:Object(m.__)("Number Suffix","ultimate-addons-for-gutenberg"),value:C,onChange:e=>M({numberSuffix:e})}),l.a.createElement(h.a,{label:Object(m.__)("Animation Duration","ultimate-addons-for-gutenberg"),setAttributes:M,value:F,onChange:e=>M({animationDuration:e}),min:.1,step:.1,max:25,displayUnit:!1}),l.a.createElement(c.SelectControl,{label:Object(m.__)("Thousand Separator","ultimate-addons-for-gutenberg"),value:L,onChange:e=>{M({thousandSeparator:e})},options:[{value:"none",label:"None"},{value:",",label:","},{value:".",label:"."}]})),Je=l.a.createElement(s.a,{title:Object(m.__)("Headline","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(n.Suspense,{fallback:Object(i.a)()},l.a.createElement(r.a,{label:Object(m.__)("Title Typography","ultimate-addons-for-gutenberg"),setAttributes:M,loadGoogleFonts:{value:O,label:"headingLoadGoogleFonts"},fontFamily:{value:E,label:"headingFontFamily"},fontWeight:{value:j,label:"headingFontWeight"},fontStyle:{value:z,label:"headingFontStyle"},transform:{value:k,label:"headingTransform"},decoration:{value:x,label:"headingDecoration"},fontSizeType:{value:U,label:"headingFontSizeType"},fontSize:{value:B,label:"headingFontSize"},fontSizeMobile:{value:R,label:"headingFontSizeMobile"},fontSizeTablet:{value:N,label:"headingFontSizeTablet"},lineHeightType:{value:D,label:"headingLineHeightType"},lineHeight:{value:A,label:"headingLineHeight"},lineHeightMobile:{value:w,label:"headingLineHeightMobile"},lineHeightTablet:{value:G,label:"headingLineHeightTablet"}}),l.a.createElement(u.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:H||"",onColorChange:e=>M({headingColor:e})}),l.a.createElement(g.a,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:P,label:"headingTopMargin"},valueRight:{value:V,label:"headingRightMargin"},valueBottom:{value:J,label:"headingBottomMargin"},valueLeft:{value:W,label:"headingLeftMargin"},valueTopTablet:{value:I,label:"headingTopMarginTablet"},valueRightTablet:{value:q,label:"headingRightMarginTablet"},valueBottomTablet:{value:Q,label:"headingBottomMarginTablet"},valueLeftTablet:{value:K,label:"headingLeftMarginTablet"},valueTopMobile:{value:X,label:"headingTopMarginMobile"},valueRightMobile:{value:Y,label:"headingRightMarginMobile"},valueBottomMobile:{value:$,label:"headingBottomMarginMobile"},valueLeftMobile:{value:Z,label:"headingLeftMarginMobile"},unit:{value:ee,label:"headingMarginUnit"},mUnit:{value:te,label:"headingMarginUnitMobile"},tUnit:{value:ae,label:"headingMarginUnitTablet"},deviceType:t,attributes:a,setAttributes:M,link:{value:ne,label:"headingMarginLink"}}))),Ie=l.a.createElement(s.a,{title:Object(m.__)("Number","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(n.Suspense,{fallback:Object(i.a)()},l.a.createElement(r.a,{label:Object(m.__)("Number Typography","ultimate-addons-for-gutenberg"),setAttributes:M,loadGoogleFonts:{value:le,label:"numberLoadGoogleFonts"},fontFamily:{value:ie,label:"numberFontFamily"},fontWeight:{value:re,label:"numberFontWeight"},fontStyle:{value:oe,label:"numberFontStyle"},transform:{value:ge,label:"numberTransform"},decoration:{value:me,label:"numberDecoration"},fontSizeType:{value:de,label:"numberFontSizeType"},fontSize:{value:be,label:"numberFontSize"},fontSizeMobile:{value:ce,label:"numberFontSizeMobile"},fontSizeTablet:{value:he,label:"numberFontSizeTablet"},lineHeightType:{value:ve,label:"numberLineHeightType"},lineHeight:{value:se,label:"numberLineHeight"},lineHeightMobile:{value:Me,label:"numberLineHeightMobile"},lineHeightTablet:{value:fe,label:"numberLineHeightTablet"}}),l.a.createElement(u.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ue||"",onColorChange:e=>M({numberColor:e})}),l.a.createElement(g.a,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Te,label:"numberTopMargin"},valueRight:{value:pe,label:"numberRightMargin"},valueBottom:{value:Se,label:"numberBottomMargin"},valueLeft:{value:_e,label:"numberLeftMargin"},valueTopTablet:{value:Ce,label:"numberTopMarginTablet"},valueRightTablet:{value:Fe,label:"numberRightMarginTablet"},valueBottomTablet:{value:ye,label:"numberBottomMarginTablet"},valueLeftTablet:{value:Le,label:"numberLeftMarginTablet"},valueTopMobile:{value:Oe,label:"numberTopMarginMobile"},valueRightMobile:{value:Ee,label:"numberRightMarginMobile"},valueBottomMobile:{value:ze,label:"numberBottomMarginMobile"},valueLeftMobile:{value:je,label:"numberLeftMarginMobile"},unit:{value:Be,label:"numberMarginUnit"},mUnit:{value:ke,label:"numberMarginUnitMobile"},tUnit:{value:He,label:"numberMarginUnitTablet"},deviceType:t,attributes:a,setAttributes:M,link:{value:xe,label:"numberMarginLink"}}),l.a.createElement(h.a,{label:Object(m.__)("Prefix Right Distance","ultimate-addons-for-gutenberg"),setAttributes:M,value:Ue,onChange:e=>M({prefixRightDistance:e}),min:0,step:1,max:100,displayUnit:!1}),l.a.createElement(h.a,{label:Object(m.__)("Suffix Left Distance","ultimate-addons-for-gutenberg"),setAttributes:M,value:Re,onChange:e=>M({suffixLeftDistance:e}),min:0,step:1,max:100,displayUnit:!1}))),qe=l.a.createElement(s.a,{title:Object(m.__)("Circle","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(n.Suspense,{fallback:Object(i.a)()},l.a.createElement(h.a,{label:Object(m.__)("Circle Size","ultimate-addons-for-gutenberg"),setAttributes:M,value:Ne,onChange:e=>M({circleSize:e}),min:10,step:10,max:500,displayUnit:!1}),l.a.createElement(h.a,{label:Object(m.__)("Stoke Size","ultimate-addons-for-gutenberg"),setAttributes:M,value:Ae,onChange:e=>M({circleStokeSize:e}),min:0,step:1,max:100,displayUnit:!1}),l.a.createElement(u.a,{label:Object(m.__)("Foreground","ultimate-addons-for-gutenberg"),colorValue:De||"",onColorChange:e=>M({circleForeground:e})}),l.a.createElement(u.a,{label:Object(m.__)("background","ultimate-addons-for-gutenberg"),colorValue:we||"",onColorChange:e=>M({circleBackground:e})}))),Ke=l.a.createElement(s.a,{title:Object(m.__)("Bars","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(n.Suspense,{fallback:Object(i.a)()},l.a.createElement(h.a,{label:Object(m.__)("Bar Size","ultimate-addons-for-gutenberg"),setAttributes:M,value:Ge,onChange:e=>M({barSize:e}),min:0,step:1,max:100,displayUnit:!1}),l.a.createElement(u.a,{label:Object(m.__)("Foreground","ultimate-addons-for-gutenberg"),colorValue:Pe?De:"",onColorChange:e=>M({barForeground:e})}),l.a.createElement(u.a,{label:Object(m.__)("background","ultimate-addons-for-gutenberg"),colorValue:Ve||"",onColorChange:e=>M({barBackground:e})})));return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.BlockControls,{key:"controls"},l.a.createElement(d.AlignmentToolbar,{value:p,onChange:e=>M({align:e})})),l.a.createElement(d.InspectorControls,null,l.a.createElement(o.a,null,l.a.createElement(b.b,b.a.general,We),l.a.createElement(b.b,b.a.style,Je,Ie,"circle"===y&&qe,"bars"===y&&Ke),l.a.createElement(b.b,v({},b.a.advance,{parentProps:e})))))}}}]);