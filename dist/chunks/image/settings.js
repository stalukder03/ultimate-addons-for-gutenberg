(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[68],{456:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var l=t(0),i=t.n(l),n=t(8),o=t(28),r=t(13),g=t(54),b=t(22),u=t(17),d=t(40),c=t(12),s=t(9),p=t(1),v=t(4),h=t(6),m=t(154),M=t(16);function T(){return(T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function f(e){var a,t;e=e.parentProps;const{attributes:f,setAttributes:_,deviceType:S,context:y,isSelected:O,clientId:L}=e,{layout:j,id:F,width:E,height:C,align:z,alt:B,sizeSlug:R,captionLoadGoogleFonts:H,captionFontFamily:U,captionFontWeight:k,captionFontStyle:w,captionFontSize:A,captionColor:W,captionTransform:x,captionDecoration:P,captionFontSizeType:V,captionFontSizeMobile:I,captionFontSizeTablet:D,captionLineHeight:G,captionLineHeightType:J,captionLineHeightMobile:N,captionLineHeightTablet:Z,captionTopMargin:q,captionRightMargin:K,captionLeftMargin:Q,captionBottomMargin:X,captionTopMarginTablet:Y,captionRightMarginTablet:$,captionLeftMarginTablet:ee,captionBottomMarginTablet:ae,captionTopMarginMobile:te,captionRightMarginMobile:le,captionLeftMarginMobile:ie,captionBottomMarginMobile:ne,captionMarginUnit:oe,captionMarginUnitTablet:re,captionMarginUnitMobile:ge,captionMarginLink:be,headingLoadGoogleFonts:ue,headingFontFamily:de,headingFontWeight:ce,headingFontStyle:se,headingFontSize:pe,headingColor:ve,headingTransform:he,headingDecoration:me,headingFontSizeType:Me,headingFontSizeMobile:Te,headingFontSizeTablet:fe,headingLineHeight:_e,headingLineHeightType:Se,headingLineHeightMobile:ye,headingLineHeightTablet:Oe,headingTopMargin:Le,headingRightMargin:je,headingLeftMargin:Fe,headingBottomMargin:Ee,headingTopMarginTablet:Ce,headingRightMarginTablet:ze,headingLeftMarginTablet:Be,headingBottomMarginTablet:Re,headingTopMarginMobile:He,headingRightMarginMobile:Ue,headingLeftMarginMobile:ke,headingBottomMarginMobile:we,headingMarginUnit:Ae,headingMarginUnitTablet:We,headingMarginUnitMobile:xe,headingMarginLink:Pe,overlayContentPosition:Ve,overlayBackground:Ie,seperatorStyle:De,seperatorWidth:Ge,separatorWidthType:Je,seperatorThickness:Ne,seperatorThicknessUnit:Ze,seperatorPosition:qe,seperatorColor:Ke,seperatorTopMargin:Qe,seperatorRightMargin:Xe,seperatorLeftMargin:Ye,seperatorBottomMargin:$e,seperatorTopMarginTablet:ea,seperatorRightMarginTablet:aa,seperatorLeftMarginTablet:ta,seperatorBottomMarginTablet:la,seperatorTopMarginMobile:ia,seperatorRightMarginMobile:na,seperatorLeftMarginMobile:oa,seperatorBottomMarginMobile:ra,seperatorMarginUnit:ga,seperatorMarginUnitTablet:ba,seperatorMarginUnitMobile:ua,seperatorMarginLink:da,imageHoverEffect:ca}=f,{imageSizes:sa}=Object(s.useSelect)(e=>{const{getSettings:a}=e(v.store),{imageSizes:t}=a();return{imageSizes:t}},[L]),{image:pa}=Object(s.useSelect)(e=>{const{getMedia:a}=e(m.store);return{image:F&&O?a(F):null}},[F,O]),{allowResize:va=!0}=y,ha=Object(r.useViewportMatch)("medium"),ma=["wide","full"].includes(z),Ma=va&&!(ma&&ha),Ta=sa.reduce((e,a)=>(e.push({value:a.slug,label:a.name}),e),[]),fa=i.a.createElement(M.a,{title:Object(p.__)("Image settings","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(h.RadioControl,{label:"Layout",selected:j,options:[{label:"Normal View",value:"default"},{label:"Overlay View",value:"overlay"}],onChange:e=>_({layout:e})}),F&&O&&i.a.createElement(i.a.Fragment,null,i.a.createElement(v.__experimentalImageSizeControl,{onChangeImage:function(e){var a;const t=null==pa||null===(a=pa.media_details)||void 0===a?void 0:a.sizes[e];if(!t)return null;_({url:null==t?void 0:t.source_url,width:null==t?void 0:t.width,height:null==t?void 0:t.height,sizeSlug:e})},onChange:e=>_(e),slug:R,width:E,height:C,imageSizeOptions:Ta,isResizable:Ma,imageWidth:null==pa||null===(a=pa.media_details)||void 0===a?void 0:a.width,imageHeight:null==pa||null===(t=pa.media_details)||void 0===t?void 0:t.height}),i.a.createElement(h.TextControl,{label:Object(p.__)("Alt text (alternative text)"),value:B,onChange:e=>_({alt:e})})),i.a.createElement(h.SelectControl,{label:Object(p.__)("On Hover Image","ultimate-addons-for-gutenberg"),value:ca,onChange:e=>_({imageHoverEffect:e}),options:[{value:"static",label:Object(p.__)("Static","ultimate-addons-for-gutenberg")},{value:"zoomin",label:Object(p.__)("Zoom In","ultimate-addons-for-gutenberg")},{value:"slide",label:Object(p.__)("Slide","ultimate-addons-for-gutenberg")},{value:"grayscale",label:Object(p.__)("Gray Scale","ultimate-addons-for-gutenberg")},{value:"blur",label:Object(p.__)("Blur","ultimate-addons-for-gutenberg")}]})),_a=i.a.createElement(M.a,{title:Object(p.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(h.SelectControl,{label:Object(p.__)("Style"),value:De,onChange:e=>_({seperatorStyle:e}),options:[{value:"none",label:Object(p.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(p.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(p.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(p.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(p.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==De&&i.a.createElement(h.SelectControl,{label:Object(p.__)("Position","ultimate-addons-for-gutenberg"),value:qe,onChange:e=>_({seperatorPosition:e}),options:[{value:"before_title",label:Object(p.__)("Before Title","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(p.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_sub_title",label:Object(p.__)("After Sub Title","ultimate-addons-for-gutenberg")}]})),Sa=i.a.createElement(M.a,{title:Object(p.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(l.Suspense,{fallback:Object(n.a)()},i.a.createElement(o.a,{label:Object(p.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:_,loadGoogleFonts:{value:ue,label:"headingLoadGoogleFonts"},fontFamily:{value:de,label:"headingFontFamily"},fontWeight:{value:ce,label:"headingFontWeight"},fontStyle:{value:se,label:"headingFontStyle"},transform:{value:he,label:"headingTransform"},decoration:{value:me,label:"headingDecoration"},fontSizeType:{value:Me,label:"headingFontSizeType"},fontSize:{value:pe,label:"headingFontSize"},fontSizeMobile:{value:Te,label:"headingFontSizeMobile"},fontSizeTablet:{value:fe,label:"headingFontSizeTablet"},lineHeightType:{value:Se,label:"headingLineHeightType"},lineHeight:{value:_e,label:"headingLineHeight"},lineHeightMobile:{value:ye,label:"headingLineHeightMobile"},lineHeightTablet:{value:Oe,label:"headingLineHeightTablet"}})),i.a.createElement(u.a,{label:Object(p.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ve||"",onColorChange:e=>_({headingColor:e})}),i.a.createElement(d.a,{label:Object(p.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Le,label:"headingTopMargin"},valueRight:{value:je,label:"headingRightMargin"},valueBottom:{value:Ee,label:"headingBottomMargin"},valueLeft:{value:Fe,label:"headingLeftMargin"},valueTopTablet:{value:Ce,label:"headingTopMarginTablet"},valueRightTablet:{value:ze,label:"headingRightMarginTablet"},valueBottomTablet:{value:Re,label:"headingBottomMarginTablet"},valueLeftTablet:{value:Be,label:"headingLeftMarginTablet"},valueTopMobile:{value:He,label:"headingTopMarginMobile"},valueRightMobile:{value:Ue,label:"headingRightMarginMobile"},valueBottomMobile:{value:we,label:"headingBottomMarginMobile"},valueLeftMobile:{value:ke,label:"headingLeftMarginMobile"},unit:{value:Ae,label:"headingMarginUnit"},mUnit:{value:xe,label:"headingMarginUnitMobile"},tUnit:{value:We,label:"headingMarginUnitTablet"},deviceType:S,attributes:f,setAttributes:_,link:{value:Pe,label:"headingMarginLink"}})),ya=i.a.createElement(M.a,{title:"overlay"===j?Object(p.__)("Sub Title","ultimate-addons-for-gutenberg"):Object(p.__)("Caption","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(l.Suspense,{fallback:Object(n.a)()},i.a.createElement(o.a,{label:Object(p.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:_,loadGoogleFonts:{value:H,label:"captionLoadGoogleFonts"},fontFamily:{value:U,label:"captionFontFamily"},fontWeight:{value:k,label:"captionFontWeight"},fontStyle:{value:w,label:"captionFontStyle"},transform:{value:x,label:"captionTransform"},decoration:{value:P,label:"captionDecoration"},fontSizeType:{value:V,label:"captionFontSizeType"},fontSize:{value:A,label:"captionFontSize"},fontSizeMobile:{value:I,label:"captionFontSizeMobile"},fontSizeTablet:{value:D,label:"captionFontSizeTablet"},lineHeightType:{value:J,label:"captionLineHeightType"},lineHeight:{value:G,label:"captionLineHeight"},lineHeightMobile:{value:N,label:"captionLineHeightMobile"},lineHeightTablet:{value:Z,label:"captionLineHeightTablet"}})),i.a.createElement(u.a,{label:Object(p.__)("Color","ultimate-addons-for-gutenberg"),colorValue:W||"",onColorChange:e=>_({captionColor:e})}),i.a.createElement(d.a,{label:Object(p.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:q,label:"captionTopMargin"},valueRight:{value:K,label:"captionRightMargin"},valueBottom:{value:X,label:"captionBottomMargin"},valueLeft:{value:Q,label:"captionLeftMargin"},valueTopTablet:{value:Y,label:"captionTopMarginTablet"},valueRightTablet:{value:$,label:"captionRightMarginTablet"},valueBottomTablet:{value:ae,label:"captionBottomMarginTablet"},valueLeftTablet:{value:ee,label:"captionLeftMarginTablet"},valueTopMobile:{value:te,label:"captionTopMarginMobile"},valueRightMobile:{value:le,label:"captionRightMarginMobile"},valueBottomMobile:{value:ne,label:"captionBottomMarginMobile"},valueLeftMobile:{value:ie,label:"captionLeftMarginMobile"},unit:{value:oe,label:"captionMarginUnit"},mUnit:{value:ge,label:"captionMarginUnitMobile"},tUnit:{value:re,label:"captionMarginUnitTablet"},deviceType:S,attributes:f,setAttributes:_,link:{value:be,label:"captionMarginLink"}})),Oa=i.a.createElement(M.a,{title:Object(p.__)("Image Style","ultimate-addons-for-gutenberg"),initialOpen:!1}),La=i.a.createElement(M.a,{title:Object(p.__)("Overlay Settings","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(u.a,{label:Object(p.__)("Background","ultimate-addons-for-gutenberg"),colorValue:Ie||"",onColorChange:e=>_({overlayBackground:e})}),i.a.createElement("label",null,Object(p.__)("Content Postion","ultimate-addons-for-gutenberg"),i.a.createElement(h.__experimentalAlignmentMatrixControl,{value:Ve,onChange:e=>_({overlayContentPosition:e})}))),ja=i.a.createElement(M.a,{title:"Separator",initialOpen:!1},i.a.createElement(c.a,{label:Object(p.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:_,value:Ge,onChange:e=>_({seperatorWidth:e}),min:0,max:"%"===Je?100:500,unit:{value:Je,label:"separatorWidthType"},units:[{name:Object(p.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(p.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(p.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),i.a.createElement(c.a,{label:Object(p.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:_,value:Ne,onChange:e=>_({seperatorThickness:e}),min:0,max:10,unit:{value:Ze,label:"seperatorThicknessUnit"}}),i.a.createElement(u.a,{label:Object(p.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ke||"",onColorChange:e=>_({seperatorColor:e})}),i.a.createElement(d.a,T({},e,{label:Object(p.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Qe,label:"seperatorTopMargin"},valueRight:{value:Xe,label:"seperatorRightMargin"},valueBottom:{value:$e,label:"seperatorBottomMargin"},valueLeft:{value:Ye,label:"seperatorLeftMargin"},valueTopTablet:{value:ea,label:"seperatorTopMarginTablet"},valueRightTablet:{value:aa,label:"seperatorRightMarginTablet"},valueBottomTablet:{value:la,label:"seperatorBottomMarginTablet"},valueLeftTablet:{value:ta,label:"seperatorLeftMarginTablet"},valueTopMobile:{value:ia,label:"seperatorTopMarginMobile"},valueRightMobile:{value:na,label:"seperatorRightMarginMobile"},valueBottomMobile:{value:ra,label:"seperatorBottomMarginMobile"},valueLeftMobile:{value:oa,label:"seperatorLeftMarginMobile"},unit:{value:ga,label:"seperatorMarginUnit"},mUnit:{value:ua,label:"seperatorMarginUnitMobile"},tUnit:{value:ba,label:"seperatorMarginUnitTablet"},deviceType:S,attributes:f,setAttributes:_,link:{value:da,label:"seperatorMarginLink"}})));return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.InspectorControls,null,i.a.createElement(g.a,null,i.a.createElement(b.b,b.a.general,fa,"overlay"===j&&i.a.createElement(i.a.Fragment,null,_a)),i.a.createElement(b.b,b.a.style,Oa,"overlay"===j&&i.a.createElement(i.a.Fragment,null,La,Sa,ja),ya),i.a.createElement(b.b,T({},b.a.advance,{parentProps:e})))))}t(23),f.propTypes={},f.defaultProps={}}}]);