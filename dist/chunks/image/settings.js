(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[68],{456:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var l=t(0),o=t.n(l),i=t(8),n=t(28),r=t(13),g=t(54),b=t(22),u=t(17),d=t(40),s=t(12),c=t(52),v=t(9),m=t(1),p=t(4),h=t(6),M=t(41),_=t(154),f=t(16);function T(){return(T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function y(e){var a,t;e=e.parentProps;const{attributes:y,setAttributes:O,deviceType:S,context:j,isSelected:B,clientId:C}=e,{layout:L,id:E,width:F,height:R,align:H,alt:z,sizeSlug:U,captionLoadGoogleFonts:k,captionFontFamily:W,captionFontWeight:w,captionFontStyle:P,captionFontSize:A,captionColor:x,captionTransform:V,captionDecoration:D,captionFontSizeType:G,captionFontSizeMobile:I,captionFontSizeTablet:N,captionLineHeight:J,captionLineHeightType:Z,captionLineHeightMobile:q,captionLineHeightTablet:K,captionTopMargin:Q,captionRightMargin:X,captionLeftMargin:Y,captionBottomMargin:$,captionTopMarginTablet:ee,captionRightMarginTablet:ae,captionLeftMarginTablet:te,captionBottomMarginTablet:le,captionTopMarginMobile:oe,captionRightMarginMobile:ie,captionLeftMarginMobile:ne,captionBottomMarginMobile:re,captionMarginUnit:ge,captionMarginUnitTablet:be,captionMarginUnitMobile:ue,captionMarginLink:de,headingLoadGoogleFonts:se,headingFontFamily:ce,headingFontWeight:ve,headingFontStyle:me,headingFontSize:pe,headingColor:he,headingTransform:Me,headingDecoration:_e,headingFontSizeType:fe,headingFontSizeMobile:Te,headingFontSizeTablet:ye,headingLineHeight:Oe,headingLineHeightType:Se,headingLineHeightMobile:je,headingLineHeightTablet:Be,headingTopMargin:Ce,headingRightMargin:Le,headingLeftMargin:Ee,headingBottomMargin:Fe,headingTopMarginTablet:Re,headingRightMarginTablet:He,headingLeftMarginTablet:ze,headingBottomMarginTablet:Ue,headingTopMarginMobile:ke,headingRightMarginMobile:We,headingLeftMarginMobile:we,headingBottomMarginMobile:Pe,headingMarginUnit:Ae,headingMarginUnitTablet:xe,headingMarginUnitMobile:Ve,headingMarginLink:De,overlayPositionFromEdge:Ge,overlayPositionFromEdgeUnit:Ie,overlayContentPosition:Ne,overlayBackground:Je,overlayHoverBackground:Ze,overlayBorderStyle:qe,overlayBorderWidth:Ke,overlayBorderRadius:Qe,overlayBorderColor:Xe,overlayBorderHoverColor:Ye,seperatorStyle:$e,seperatorWidth:ea,separatorWidthType:aa,seperatorThickness:ta,seperatorThicknessUnit:la,seperatorPosition:oa,seperatorColor:ia,seperatorTopMargin:na,seperatorRightMargin:ra,seperatorLeftMargin:ga,seperatorBottomMargin:ba,seperatorTopMarginTablet:ua,seperatorRightMarginTablet:da,seperatorLeftMarginTablet:sa,seperatorBottomMarginTablet:ca,seperatorTopMarginMobile:va,seperatorRightMarginMobile:ma,seperatorLeftMarginMobile:pa,seperatorBottomMarginMobile:ha,seperatorMarginUnit:Ma,seperatorMarginUnitTablet:_a,seperatorMarginUnitMobile:fa,seperatorMarginLink:Ta,imageHoverEffect:ya,imageBorderWidth:Oa,imageBorderStyle:Sa,imageBorderRadius:ja,imageBorderColor:Ba,imageBorderhoverColor:Ca}=y,{imageSizes:La}=Object(v.useSelect)(e=>{const{getSettings:a}=e(p.store),{imageSizes:t}=a();return{imageSizes:t}},[C]),{image:Ea}=Object(v.useSelect)(e=>{const{getMedia:a}=e(_.store);return{image:E&&B?a(E):null}},[E,B]),{allowResize:Fa=!0}=j,Ra=Object(r.useViewportMatch)("medium"),Ha=["wide","full"].includes(H),za=Fa&&!(Ha&&Ra),Ua=La.reduce((e,a)=>(e.push({value:a.slug,label:a.name}),e),[]),ka=o.a.createElement(f.a,{title:Object(m.__)("Image settings","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(h.RadioControl,{label:"Layout",selected:L,options:[{label:"Normal View",value:"default"},{label:"Overlay View",value:"overlay"}],onChange:e=>O({layout:e})}),E&&B&&o.a.createElement(o.a.Fragment,null,o.a.createElement(p.__experimentalImageSizeControl,{onChangeImage:function(e){var a;const t=null==Ea||null===(a=Ea.media_details)||void 0===a?void 0:a.sizes[e];if(!t)return null;O({url:null==t?void 0:t.source_url,width:null==t?void 0:t.width,height:null==t?void 0:t.height,sizeSlug:e})},onChange:e=>O(e),slug:U,width:F,height:R,imageSizeOptions:Ua,isResizable:za,imageWidth:null==Ea||null===(a=Ea.media_details)||void 0===a?void 0:a.width,imageHeight:null==Ea||null===(t=Ea.media_details)||void 0===t?void 0:t.height}),o.a.createElement(h.TextControl,{label:Object(m.__)("Alt text (alternative text)"),value:z,onChange:e=>O({alt:e})})),o.a.createElement(h.SelectControl,{label:Object(m.__)("On Hover Image","ultimate-addons-for-gutenberg"),value:ya,onChange:e=>O({imageHoverEffect:e}),options:[{value:"static",label:Object(m.__)("Static","ultimate-addons-for-gutenberg")},{value:"zoomin",label:Object(m.__)("Zoom In","ultimate-addons-for-gutenberg")},{value:"slide",label:Object(m.__)("Slide","ultimate-addons-for-gutenberg")},{value:"grayscale",label:Object(m.__)("Gray Scale","ultimate-addons-for-gutenberg")},{value:"blur",label:Object(m.__)("Blur","ultimate-addons-for-gutenberg")}]})),Wa=o.a.createElement(f.a,{title:Object(m.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(h.SelectControl,{label:Object(m.__)("Style"),value:$e,onChange:e=>O({seperatorStyle:e}),options:[{value:"none",label:Object(m.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(m.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(m.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(m.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(m.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==$e&&o.a.createElement(h.SelectControl,{label:Object(m.__)("Position","ultimate-addons-for-gutenberg"),value:oa,onChange:e=>O({seperatorPosition:e}),options:[{value:"before_title",label:Object(m.__)("Before Title","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(m.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_sub_title",label:Object(m.__)("After Sub Title","ultimate-addons-for-gutenberg")}]})),wa=o.a.createElement(f.a,{title:Object(m.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(l.Suspense,{fallback:Object(i.a)()},o.a.createElement(n.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:O,loadGoogleFonts:{value:se,label:"headingLoadGoogleFonts"},fontFamily:{value:ce,label:"headingFontFamily"},fontWeight:{value:ve,label:"headingFontWeight"},fontStyle:{value:me,label:"headingFontStyle"},transform:{value:Me,label:"headingTransform"},decoration:{value:_e,label:"headingDecoration"},fontSizeType:{value:fe,label:"headingFontSizeType"},fontSize:{value:pe,label:"headingFontSize"},fontSizeMobile:{value:Te,label:"headingFontSizeMobile"},fontSizeTablet:{value:ye,label:"headingFontSizeTablet"},lineHeightType:{value:Se,label:"headingLineHeightType"},lineHeight:{value:Oe,label:"headingLineHeight"},lineHeightMobile:{value:je,label:"headingLineHeightMobile"},lineHeightTablet:{value:Be,label:"headingLineHeightTablet"}})),o.a.createElement(u.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:he||"",onColorChange:e=>O({headingColor:e})}),o.a.createElement(d.a,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Ce,label:"headingTopMargin"},valueRight:{value:Le,label:"headingRightMargin"},valueBottom:{value:Fe,label:"headingBottomMargin"},valueLeft:{value:Ee,label:"headingLeftMargin"},valueTopTablet:{value:Re,label:"headingTopMarginTablet"},valueRightTablet:{value:He,label:"headingRightMarginTablet"},valueBottomTablet:{value:Ue,label:"headingBottomMarginTablet"},valueLeftTablet:{value:ze,label:"headingLeftMarginTablet"},valueTopMobile:{value:ke,label:"headingTopMarginMobile"},valueRightMobile:{value:We,label:"headingRightMarginMobile"},valueBottomMobile:{value:Pe,label:"headingBottomMarginMobile"},valueLeftMobile:{value:we,label:"headingLeftMarginMobile"},unit:{value:Ae,label:"headingMarginUnit"},mUnit:{value:Ve,label:"headingMarginUnitMobile"},tUnit:{value:xe,label:"headingMarginUnitTablet"},deviceType:S,attributes:y,setAttributes:O,link:{value:De,label:"headingMarginLink"}})),Pa=o.a.createElement(f.a,{title:"overlay"===L?Object(m.__)("Sub Title","ultimate-addons-for-gutenberg"):Object(m.__)("Caption","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(l.Suspense,{fallback:Object(i.a)()},o.a.createElement(n.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:O,loadGoogleFonts:{value:k,label:"captionLoadGoogleFonts"},fontFamily:{value:W,label:"captionFontFamily"},fontWeight:{value:w,label:"captionFontWeight"},fontStyle:{value:P,label:"captionFontStyle"},transform:{value:V,label:"captionTransform"},decoration:{value:D,label:"captionDecoration"},fontSizeType:{value:G,label:"captionFontSizeType"},fontSize:{value:A,label:"captionFontSize"},fontSizeMobile:{value:I,label:"captionFontSizeMobile"},fontSizeTablet:{value:N,label:"captionFontSizeTablet"},lineHeightType:{value:Z,label:"captionLineHeightType"},lineHeight:{value:J,label:"captionLineHeight"},lineHeightMobile:{value:q,label:"captionLineHeightMobile"},lineHeightTablet:{value:K,label:"captionLineHeightTablet"}})),o.a.createElement(u.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:x||"",onColorChange:e=>O({captionColor:e})}),o.a.createElement(d.a,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Q,label:"captionTopMargin"},valueRight:{value:X,label:"captionRightMargin"},valueBottom:{value:$,label:"captionBottomMargin"},valueLeft:{value:Y,label:"captionLeftMargin"},valueTopTablet:{value:ee,label:"captionTopMarginTablet"},valueRightTablet:{value:ae,label:"captionRightMarginTablet"},valueBottomTablet:{value:le,label:"captionBottomMarginTablet"},valueLeftTablet:{value:te,label:"captionLeftMarginTablet"},valueTopMobile:{value:oe,label:"captionTopMarginMobile"},valueRightMobile:{value:ie,label:"captionRightMarginMobile"},valueBottomMobile:{value:re,label:"captionBottomMarginMobile"},valueLeftMobile:{value:ne,label:"captionLeftMarginMobile"},unit:{value:ge,label:"captionMarginUnit"},mUnit:{value:ue,label:"captionMarginUnitMobile"},tUnit:{value:be,label:"captionMarginUnitTablet"},deviceType:S,attributes:y,setAttributes:O,link:{value:de,label:"captionMarginLink"}})),Aa=o.a.createElement(f.a,{title:Object(m.__)("Image Style","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(c.a,{setAttributes:O,borderStyle:{value:Sa,label:"imageBorderStyle",title:Object(m.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Oa,label:"imageBorderWidth",title:Object(m.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ja,label:"imageBorderRadius",title:Object(m.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Ba,label:"imageBorderColor",title:Object(m.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Ca,label:"imageBorderhoverColor",title:Object(m.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),xa=o.a.createElement(f.a,{title:Object(m.__)("Overlay Settings","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("label",null,Object(m.__)("Content Postion","ultimate-addons-for-gutenberg"),o.a.createElement(h.__experimentalAlignmentMatrixControl,{value:Ne,onChange:e=>O({overlayContentPosition:e})})),o.a.createElement(c.a,{setAttributes:O,borderStyle:{value:qe,label:"overlayBorderStyle",title:Object(m.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Ke,label:"overlayBorderWidth",title:Object(m.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Qe,label:"overlayBorderRadius",title:Object(m.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Xe,label:"overlayBorderColor",title:Object(m.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Ye,label:"overlayBorderHoverColor",title:Object(m.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!1}),o.a.createElement(s.a,{label:Object(m.__)("Overlay Position From EDGE","ultimate-addons-for-gutenberg"),setAttributes:O,value:Ge,onChange:e=>O({overlayPositionFromEdge:e}),min:0,max:100,unit:{value:Ie,label:"overlayPositionFromEdgeUnit"}}),o.a.createElement(M.a,{tabs:[{name:"normal",title:Object(m.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(m.__)("Hover","ultimate-addons-for-gutenberg")}],normal:o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{label:Object(m.__)("Background","ultimate-addons-for-gutenberg"),colorValue:Je||"",onColorChange:e=>O({overlayBackground:e})})),hover:o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{label:Object(m.__)("Background","ultimate-addons-for-gutenberg"),colorValue:Ze||"",onColorChange:e=>O({overlayHoverBackground:e})})),disableBottomSeparator:!1})),Va=o.a.createElement(f.a,{title:"Separator",initialOpen:!1},o.a.createElement(s.a,{label:Object(m.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:O,value:ea,onChange:e=>O({seperatorWidth:e}),min:0,max:"%"===aa?100:500,unit:{value:aa,label:"separatorWidthType"},units:[{name:Object(m.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(m.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(m.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),o.a.createElement(s.a,{label:Object(m.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:O,value:ta,onChange:e=>O({seperatorThickness:e}),min:0,max:10,unit:{value:la,label:"seperatorThicknessUnit"}}),o.a.createElement(u.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ia||"",onColorChange:e=>O({seperatorColor:e})}),o.a.createElement(d.a,T({},e,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:na,label:"seperatorTopMargin"},valueRight:{value:ra,label:"seperatorRightMargin"},valueBottom:{value:ba,label:"seperatorBottomMargin"},valueLeft:{value:ga,label:"seperatorLeftMargin"},valueTopTablet:{value:ua,label:"seperatorTopMarginTablet"},valueRightTablet:{value:da,label:"seperatorRightMarginTablet"},valueBottomTablet:{value:ca,label:"seperatorBottomMarginTablet"},valueLeftTablet:{value:sa,label:"seperatorLeftMarginTablet"},valueTopMobile:{value:va,label:"seperatorTopMarginMobile"},valueRightMobile:{value:ma,label:"seperatorRightMarginMobile"},valueBottomMobile:{value:ha,label:"seperatorBottomMarginMobile"},valueLeftMobile:{value:pa,label:"seperatorLeftMarginMobile"},unit:{value:Ma,label:"seperatorMarginUnit"},mUnit:{value:fa,label:"seperatorMarginUnitMobile"},tUnit:{value:_a,label:"seperatorMarginUnitTablet"},deviceType:S,attributes:y,setAttributes:O,link:{value:Ta,label:"seperatorMarginLink"}})));return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.InspectorControls,null,o.a.createElement(g.a,null,o.a.createElement(b.b,b.a.general,ka,"overlay"===L&&o.a.createElement(o.a.Fragment,null,Wa)),o.a.createElement(b.b,b.a.style,Aa,"overlay"===L&&o.a.createElement(o.a.Fragment,null,xa,wa,Va),Pa),o.a.createElement(b.b,T({},b.a.advance,{parentProps:e})))))}t(23),y.propTypes={},y.defaultProps={}}}]);