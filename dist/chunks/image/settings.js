(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[68],{271:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uag-link-control__link {\n  display: flex;\n  margin-bottom: 10px; }\n\n.uag-link-control__options .block-editor-block-inspector .components-base-control {\n  margin-bottom: 10px !important; }\n",""]),a.a=o},463:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return z}));var l,o=t(0),n=t.n(o),i=t(8),r=t(28),g=t(13),b=t(54),u=t(22),d=t(17),c=t(40),s=t(12),v=t(6),m=t(2),p=t(1),h=t(14),M=t.n(h),f=t(271),_=0,T={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},y={};y.locals=f.a.locals||{},y.use=function(){return _++||(l=M()(f.a,T)),y},y.unuse=function(){_>0&&!--_&&(l(),l=null)};var O=y,S=t(23),C=t.n(S);const j={setAttributes:C.a.func,link:C.a.object,target:C.a.object,noFollow:C.a.object};function E({setAttributes:e,link:a,target:t,noFollow:l}){const[o,i]=Object(m.useState)(!1);return Object(m.useLayoutEffect)(()=>(O.use(),()=>{O.unuse()}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"uag-link-control"},n.a.createElement("label",null,a.label),n.a.createElement("div",{className:"uag-link-control__link"},n.a.createElement("input",{type:"url",value:a.value,placeholder:Object(p.__)("https://","ultimate-addons-for-gutenberg"),onChange:t=>e({[a.label]:t.target.value})}),n.a.createElement("button",{onClick:()=>i(!o)},n.a.createElement("span",{className:"dashicons dashicons-admin-generic"}))),o&&n.a.createElement("div",{className:"uag-link-control__options"},n.a.createElement(v.CheckboxControl,{label:"Open in new window",checked:t.value,onChange:a=>e({[t.label]:a})}),n.a.createElement(v.CheckboxControl,{label:"Add Nofollow",checked:l.value,onChange:a=>e({[l.label]:a})}))))}E.propTypes=j,E.defaultProps={setAttributes:()=>{},link:{},target:{}};var L=t(52),F=t(9),B=t(4),k=(t(41),t(154)),R=t(16);function H(){return(H=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function z(e){var a,t;e=e.parentProps;const{attributes:l,setAttributes:m,deviceType:h,context:M,isSelected:f,clientId:_}=e,{layout:T,id:y,width:O,height:S,align:C,alt:j,sizeSlug:z,imageLink:U,imageLinkTarget:w,imageLinkNoFollow:A,captionLoadGoogleFonts:W,captionFontFamily:x,captionFontWeight:P,captionFontStyle:V,captionFontSize:N,captionColor:D,captionTransform:G,captionDecoration:I,captionFontSizeType:J,captionFontSizeMobile:Z,captionFontSizeTablet:q,captionLineHeight:K,captionLineHeightType:Q,captionLineHeightMobile:X,captionLineHeightTablet:Y,captionTopMargin:$,captionRightMargin:ee,captionLeftMargin:ae,captionBottomMargin:te,captionTopMarginTablet:le,captionRightMarginTablet:oe,captionLeftMarginTablet:ne,captionBottomMarginTablet:ie,captionTopMarginMobile:re,captionRightMarginMobile:ge,captionLeftMarginMobile:be,captionBottomMarginMobile:ue,captionMarginUnit:de,captionMarginUnitTablet:ce,captionMarginUnitMobile:se,captionMarginLink:ve,headingLoadGoogleFonts:me,headingFontFamily:pe,headingFontWeight:he,headingFontStyle:Me,headingFontSize:fe,headingColor:_e,headingTransform:Te,headingDecoration:ye,headingFontSizeType:Oe,headingFontSizeMobile:Se,headingFontSizeTablet:Ce,headingLineHeight:je,headingLineHeightType:Ee,headingLineHeightMobile:Le,headingLineHeightTablet:Fe,headingTopMargin:Be,headingRightMargin:ke,headingLeftMargin:Re,headingBottomMargin:He,headingTopMarginTablet:ze,headingRightMarginTablet:Ue,headingLeftMarginTablet:we,headingBottomMarginTablet:Ae,headingTopMarginMobile:We,headingRightMarginMobile:xe,headingLeftMarginMobile:Pe,headingBottomMarginMobile:Ve,headingMarginUnit:Ne,headingMarginUnitTablet:De,headingMarginUnitMobile:Ge,headingMarginLink:Ie,overlayPositionFromEdge:Je,overlayPositionFromEdgeUnit:Ze,overlayContentPosition:qe,overlayBackground:Ke,overlayOpacity:Qe,overlayHoverOpacity:Xe,overlayBorderStyle:Ye,overlayBorderWidth:$e,overlayBorderRadius:ea,overlayBorderColor:aa,overlayBorderHoverColor:ta,seperatorStyle:la,seperatorWidth:oa,separatorWidthType:na,seperatorThickness:ia,seperatorThicknessUnit:ra,seperatorPosition:ga,seperatorColor:ba,seperatorTopMargin:ua,seperatorRightMargin:da,seperatorLeftMargin:ca,seperatorBottomMargin:sa,seperatorTopMarginTablet:va,seperatorRightMarginTablet:ma,seperatorLeftMarginTablet:pa,seperatorBottomMarginTablet:ha,seperatorTopMarginMobile:Ma,seperatorRightMarginMobile:fa,seperatorLeftMarginMobile:_a,seperatorBottomMarginMobile:Ta,seperatorMarginUnit:ya,seperatorMarginUnitTablet:Oa,seperatorMarginUnitMobile:Sa,seperatorMarginLink:Ca,imageHoverEffect:ja,imageBorderWidth:Ea,imageBorderStyle:La,imageBorderRadius:Fa,imageBorderColor:Ba,imageBorderhoverColor:ka}=l,{imageSizes:Ra}=Object(F.useSelect)(e=>{const{getSettings:a}=e(B.store),{imageSizes:t}=a();return{imageSizes:t}},[_]),{image:Ha}=Object(F.useSelect)(e=>{const{getMedia:a}=e(k.store);return{image:y&&f?a(y):null}},[y,f]),{allowResize:za=!0}=M,Ua=Object(g.useViewportMatch)("medium"),wa=["wide","full"].includes(C),Aa=za&&!(wa&&Ua),Wa=Ra.reduce((e,a)=>(e.push({value:a.slug,label:a.name}),e),[]),xa=n.a.createElement(R.a,{title:Object(p.__)("Image settings","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(v.RadioControl,{label:"Layout",selected:T,options:[{label:"Normal View",value:"default"},{label:"Overlay View",value:"overlay"}],onChange:e=>m({layout:e})}),y&&f&&n.a.createElement(n.a.Fragment,null,n.a.createElement(B.__experimentalImageSizeControl,{onChangeImage:function(e){var a;const t=null==Ha||null===(a=Ha.media_details)||void 0===a?void 0:a.sizes[e];if(!t)return null;m({url:null==t?void 0:t.source_url,width:null==t?void 0:t.width,height:null==t?void 0:t.height,sizeSlug:e})},onChange:e=>m(e),slug:z,width:O,height:S,imageSizeOptions:Wa,isResizable:Aa,imageWidth:null==Ha||null===(a=Ha.media_details)||void 0===a?void 0:a.width,imageHeight:null==Ha||null===(t=Ha.media_details)||void 0===t?void 0:t.height}),n.a.createElement(v.TextControl,{label:Object(p.__)("Alt text (alternative text)"),value:j,onChange:e=>m({alt:e})})),n.a.createElement(E,{setAttributes:m,link:{label:"imageLink",value:U},target:{label:"imageLinkTarget",value:w},noFollow:{label:"imageLinkNoFollow",value:A}}),n.a.createElement(v.SelectControl,{label:Object(p.__)("On Hover Image","ultimate-addons-for-gutenberg"),value:ja,onChange:e=>m({imageHoverEffect:e}),options:[{value:"static",label:Object(p.__)("Static","ultimate-addons-for-gutenberg")},{value:"zoomin",label:Object(p.__)("Zoom In","ultimate-addons-for-gutenberg")},{value:"slide",label:Object(p.__)("Slide","ultimate-addons-for-gutenberg")},{value:"grayscale",label:Object(p.__)("Gray Scale","ultimate-addons-for-gutenberg")},{value:"blur",label:Object(p.__)("Blur","ultimate-addons-for-gutenberg")}]})),Pa=n.a.createElement(R.a,{title:Object(p.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(v.SelectControl,{label:Object(p.__)("Style"),value:la,onChange:e=>m({seperatorStyle:e}),options:[{value:"none",label:Object(p.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(p.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(p.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(p.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(p.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==la&&n.a.createElement(v.SelectControl,{label:Object(p.__)("Position","ultimate-addons-for-gutenberg"),value:ga,onChange:e=>m({seperatorPosition:e}),options:[{value:"before_title",label:Object(p.__)("Before Title","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(p.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_sub_title",label:Object(p.__)("After Sub Title","ultimate-addons-for-gutenberg")}]})),Va=n.a.createElement(R.a,{title:Object(p.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(o.Suspense,{fallback:Object(i.a)()},n.a.createElement(r.a,{label:Object(p.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:m,loadGoogleFonts:{value:me,label:"headingLoadGoogleFonts"},fontFamily:{value:pe,label:"headingFontFamily"},fontWeight:{value:he,label:"headingFontWeight"},fontStyle:{value:Me,label:"headingFontStyle"},transform:{value:Te,label:"headingTransform"},decoration:{value:ye,label:"headingDecoration"},fontSizeType:{value:Oe,label:"headingFontSizeType"},fontSize:{value:fe,label:"headingFontSize"},fontSizeMobile:{value:Se,label:"headingFontSizeMobile"},fontSizeTablet:{value:Ce,label:"headingFontSizeTablet"},lineHeightType:{value:Ee,label:"headingLineHeightType"},lineHeight:{value:je,label:"headingLineHeight"},lineHeightMobile:{value:Le,label:"headingLineHeightMobile"},lineHeightTablet:{value:Fe,label:"headingLineHeightTablet"}})),n.a.createElement(d.a,{label:Object(p.__)("Color","ultimate-addons-for-gutenberg"),colorValue:_e||"",onColorChange:e=>m({headingColor:e})}),n.a.createElement(c.a,{label:Object(p.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Be,label:"headingTopMargin"},valueRight:{value:ke,label:"headingRightMargin"},valueBottom:{value:He,label:"headingBottomMargin"},valueLeft:{value:Re,label:"headingLeftMargin"},valueTopTablet:{value:ze,label:"headingTopMarginTablet"},valueRightTablet:{value:Ue,label:"headingRightMarginTablet"},valueBottomTablet:{value:Ae,label:"headingBottomMarginTablet"},valueLeftTablet:{value:we,label:"headingLeftMarginTablet"},valueTopMobile:{value:We,label:"headingTopMarginMobile"},valueRightMobile:{value:xe,label:"headingRightMarginMobile"},valueBottomMobile:{value:Ve,label:"headingBottomMarginMobile"},valueLeftMobile:{value:Pe,label:"headingLeftMarginMobile"},unit:{value:Ne,label:"headingMarginUnit"},mUnit:{value:Ge,label:"headingMarginUnitMobile"},tUnit:{value:De,label:"headingMarginUnitTablet"},deviceType:h,attributes:l,setAttributes:m,link:{value:Ie,label:"headingMarginLink"}})),Na=n.a.createElement(R.a,{title:"overlay"===T?Object(p.__)("Sub Title","ultimate-addons-for-gutenberg"):Object(p.__)("Caption","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(o.Suspense,{fallback:Object(i.a)()},n.a.createElement(r.a,{label:Object(p.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:m,loadGoogleFonts:{value:W,label:"captionLoadGoogleFonts"},fontFamily:{value:x,label:"captionFontFamily"},fontWeight:{value:P,label:"captionFontWeight"},fontStyle:{value:V,label:"captionFontStyle"},transform:{value:G,label:"captionTransform"},decoration:{value:I,label:"captionDecoration"},fontSizeType:{value:J,label:"captionFontSizeType"},fontSize:{value:N,label:"captionFontSize"},fontSizeMobile:{value:Z,label:"captionFontSizeMobile"},fontSizeTablet:{value:q,label:"captionFontSizeTablet"},lineHeightType:{value:Q,label:"captionLineHeightType"},lineHeight:{value:K,label:"captionLineHeight"},lineHeightMobile:{value:X,label:"captionLineHeightMobile"},lineHeightTablet:{value:Y,label:"captionLineHeightTablet"}})),n.a.createElement(d.a,{label:Object(p.__)("Color","ultimate-addons-for-gutenberg"),colorValue:D||"",onColorChange:e=>m({captionColor:e})}),n.a.createElement(c.a,{label:Object(p.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:$,label:"captionTopMargin"},valueRight:{value:ee,label:"captionRightMargin"},valueBottom:{value:te,label:"captionBottomMargin"},valueLeft:{value:ae,label:"captionLeftMargin"},valueTopTablet:{value:le,label:"captionTopMarginTablet"},valueRightTablet:{value:oe,label:"captionRightMarginTablet"},valueBottomTablet:{value:ie,label:"captionBottomMarginTablet"},valueLeftTablet:{value:ne,label:"captionLeftMarginTablet"},valueTopMobile:{value:re,label:"captionTopMarginMobile"},valueRightMobile:{value:ge,label:"captionRightMarginMobile"},valueBottomMobile:{value:ue,label:"captionBottomMarginMobile"},valueLeftMobile:{value:be,label:"captionLeftMarginMobile"},unit:{value:de,label:"captionMarginUnit"},mUnit:{value:se,label:"captionMarginUnitMobile"},tUnit:{value:ce,label:"captionMarginUnitTablet"},deviceType:h,attributes:l,setAttributes:m,link:{value:ve,label:"captionMarginLink"}})),Da=n.a.createElement(R.a,{title:Object(p.__)("Image Style","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(L.a,{setAttributes:m,borderStyle:{value:La,label:"imageBorderStyle",title:Object(p.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Ea,label:"imageBorderWidth",title:Object(p.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Fa,label:"imageBorderRadius",title:Object(p.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Ba,label:"imageBorderColor",title:Object(p.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:ka,label:"imageBorderhoverColor",title:Object(p.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),Ga=n.a.createElement(R.a,{title:Object(p.__)("Overlay Settings","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,{label:Object(p.__)("Background","ultimate-addons-for-gutenberg"),colorValue:Ke||"",onColorChange:e=>m({overlayBackground:e})}),n.a.createElement(v.RangeControl,{label:Object(p.__)("Overlay Opacity","ultimate-addons-for-gutenberg"),value:Qe,onChange:e=>m({overlayOpacity:e}),min:0,max:1}),n.a.createElement(v.RangeControl,{label:Object(p.__)("Overlay Hover Opacity","ultimate-addons-for-gutenberg"),value:Xe,onChange:e=>m({overlayHoverOpacity:e}),min:0,max:1}),n.a.createElement("label",null,Object(p.__)("Content Postion","ultimate-addons-for-gutenberg"),n.a.createElement(v.__experimentalAlignmentMatrixControl,{value:qe,onChange:e=>m({overlayContentPosition:e})})),n.a.createElement(L.a,{setAttributes:m,borderStyle:{value:Ye,label:"overlayBorderStyle",title:Object(p.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:$e,label:"overlayBorderWidth",title:Object(p.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ea,label:"overlayBorderRadius",title:Object(p.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:aa,label:"overlayBorderColor",title:Object(p.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:ta,label:"overlayBorderHoverColor",title:Object(p.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!1}),n.a.createElement(s.a,{label:Object(p.__)("Overlay Position From EDGE","ultimate-addons-for-gutenberg"),setAttributes:m,value:Je,onChange:e=>m({overlayPositionFromEdge:e}),min:0,max:100,unit:{value:Ze,label:"overlayPositionFromEdgeUnit"}})),Ia=n.a.createElement(R.a,{title:"Separator",initialOpen:!1},n.a.createElement(s.a,{label:Object(p.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:m,value:oa,onChange:e=>m({seperatorWidth:e}),min:0,max:"%"===na?100:500,unit:{value:na,label:"separatorWidthType"},units:[{name:Object(p.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(p.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(p.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),n.a.createElement(s.a,{label:Object(p.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:m,value:ia,onChange:e=>m({seperatorThickness:e}),min:0,max:10,unit:{value:ra,label:"seperatorThicknessUnit"}}),n.a.createElement(d.a,{label:Object(p.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ba||"",onColorChange:e=>m({seperatorColor:e})}),n.a.createElement(c.a,H({},e,{label:Object(p.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:ua,label:"seperatorTopMargin"},valueRight:{value:da,label:"seperatorRightMargin"},valueBottom:{value:sa,label:"seperatorBottomMargin"},valueLeft:{value:ca,label:"seperatorLeftMargin"},valueTopTablet:{value:va,label:"seperatorTopMarginTablet"},valueRightTablet:{value:ma,label:"seperatorRightMarginTablet"},valueBottomTablet:{value:ha,label:"seperatorBottomMarginTablet"},valueLeftTablet:{value:pa,label:"seperatorLeftMarginTablet"},valueTopMobile:{value:Ma,label:"seperatorTopMarginMobile"},valueRightMobile:{value:fa,label:"seperatorRightMarginMobile"},valueBottomMobile:{value:Ta,label:"seperatorBottomMarginMobile"},valueLeftMobile:{value:_a,label:"seperatorLeftMarginMobile"},unit:{value:ya,label:"seperatorMarginUnit"},mUnit:{value:Sa,label:"seperatorMarginUnitMobile"},tUnit:{value:Oa,label:"seperatorMarginUnitTablet"},deviceType:h,attributes:l,setAttributes:m,link:{value:Ca,label:"seperatorMarginLink"}})));return n.a.createElement(n.a.Fragment,null,n.a.createElement(B.InspectorControls,null,n.a.createElement(b.a,null,n.a.createElement(u.b,u.a.general,xa,"overlay"===T&&n.a.createElement(n.a.Fragment,null,Pa)),n.a.createElement(u.b,u.a.style,Da,"overlay"===T&&n.a.createElement(n.a.Fragment,null,Ga,Va,Ia),Na),n.a.createElement(u.b,H({},u.a.advance,{parentProps:e})))))}z.propTypes={},z.defaultProps={}}}]);