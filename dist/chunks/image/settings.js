(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[68],{193:function(e,a,t){"use strict";var l,o=t(1),n=t(6),i=t(4),r=t(0),b=t.n(r),g=t(15),u=t.n(g),d=t(194),s=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return s++||(l=u()(d.a,c)),m},m.unuse=function(){s>0&&!--s&&(l(),l=null)};var p=m;a.a=e=>{Object(r.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:l,showVideoInput:g,label:u}=e;let d=Object(o.__)("Image","ultimate-addons-for-gutenberg"),s=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),c=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),v=["image"];return g&&(d=Object(o.__)("Video","ultimate-addons-for-gutenberg"),s=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),c=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),v=["video"]),d=u||d,b.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+u,label:d},b.a.createElement("div",{className:"uagb-bg-image"},b.a.createElement(i.MediaUpload,{title:s,onSelect:a,allowedTypes:v,value:t,render:e=>{let{open:a}=e;return b.a.createElement(n.Button,{isSecondary:!0,onClick:a},null!=t&&t.url?c:s)}}),(null==t?void 0:t.url)&&b.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:l,isLink:!0,isDestructive:!0},m),e.help&&b.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},194:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),a.a=o},198:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 14px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),a.a=o},200:function(e,a,t){"use strict";var l,o=t(1),n=t(12),i=t(17),r=t(6),b=t(2),g=t(22),u=t(15),d=t.n(u),s=t(198),c=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=s.a.locals||{},p.use=function(){return c++||(l=d()(s.a,m)),p},p.unuse=function(){c>0&&!--c&&(l(),l=null)};var v=p,h=t(0),f=t.n(h);a.a=e=>{Object(h.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const[a,t]=Object(b.useState)(!1),{setAttributes:l,boxShadowColor:u,boxShadowHOffset:d,boxShadowVOffset:s,boxShadowBlur:c,boxShadowSpread:m,boxShadowPosition:p}=e;let _;const M=a?"active":"";a&&(_=f.a.createElement("div",{className:"uagb-box-shadow-advanced"},f.a.createElement("div",{className:"uagb-shadow-color"},f.a.createElement(i.a,{label:u.title,colorValue:u.value,onColorChange:e=>l({[u.label]:e})})),f.a.createElement("div",{className:"uagb-horizontal-wrap"},f.a.createElement(n.a,{label:d.title,value:d.value,onChange:e=>l({[d.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-vertical-wrap"},f.a.createElement(n.a,{label:s.title,value:s.value,onChange:e=>l({[s.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-blur-wrap"},f.a.createElement(n.a,{label:c.title,value:c.value,onChange:e=>l({[c.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-spread-wrap"},f.a.createElement(n.a,{label:m.title,value:m.value,onChange:e=>l({[m.label]:e}),min:-100,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-shadow-type"},f.a.createElement(g.a,{setAttributes:l,label:p.title,data:{value:p.value,label:p.label},options:[{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const O=f.a.createElement("div",{className:"uag-box-shadow-option-actions"},f.a.createElement("span",{className:"uag-control-label"},Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg")),f.a.createElement(r.Button,{className:"uag-box-shadow-button","aria-pressed":a,onClick:()=>t(!a)},f.a.createElement(r.Dashicon,{icon:"edit"})));return f.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+M},O,a&&_)}},471:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var l=t(0),o=t.n(l),n=t(8),i=t(29),r=t(13),b=t(77),g=t(23),u=t(17),d=t(49),s=t(12),c=t(75),m=t(193),p=t(200),v=t(9),h=t(1),f=t(22),_=t(4),M=t(6),O=t(11),T=t(187),j=t(14);function S(){return(S=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function y(e){var a,t;e=e.parentProps;const{attributes:y,setAttributes:x,deviceType:w,context:C,isSelected:E,clientId:B}=e,{layout:L,id:R,width:F,height:k,align:z,alt:H,sizeSlug:U,imageTopMargin:I,imageRightMargin:A,imageLeftMargin:P,imageBottomMargin:N,imageTopMarginTablet:W,imageRightMarginTablet:V,imageLeftMarginTablet:D,imageBottomMarginTablet:G,imageTopMarginMobile:J,imageRightMarginMobile:X,imageLeftMarginMobile:Y,imageBottomMarginMobile:Z,imageMarginUnit:q,imageMarginUnitTablet:K,imageMarginUnitMobile:Q,imageMarginLink:$,captionLoadGoogleFonts:ee,captionAlign:ae,captionFontFamily:te,captionFontWeight:le,captionFontStyle:oe,captionFontSize:ne,captionColor:ie,captionTransform:re,captionDecoration:be,captionFontSizeType:ge,captionFontSizeMobile:ue,captionFontSizeTablet:de,captionLineHeight:se,captionLineHeightType:ce,captionLineHeightMobile:me,captionLineHeightTablet:pe,captionTopMargin:ve,captionRightMargin:he,captionLeftMargin:fe,captionBottomMargin:_e,captionTopMarginTablet:Me,captionRightMarginTablet:Oe,captionLeftMarginTablet:Te,captionBottomMarginTablet:je,captionTopMarginMobile:Se,captionRightMarginMobile:ye,captionLeftMarginMobile:xe,captionBottomMarginMobile:we,captionMarginUnit:Ce,captionMarginUnitTablet:Ee,captionMarginUnitMobile:Be,captionMarginLink:Le,headingLoadGoogleFonts:Re,headingFontFamily:Fe,headingFontWeight:ke,headingFontStyle:ze,headingFontSize:He,headingColor:Ue,headingTransform:Ie,headingDecoration:Ae,headingFontSizeType:Pe,headingFontSizeMobile:Ne,headingFontSizeTablet:We,headingLineHeight:Ve,headingLineHeightType:De,headingLineHeightMobile:Ge,headingLineHeightTablet:Je,headingTopMargin:Xe,headingRightMargin:Ye,headingLeftMargin:Ze,headingBottomMargin:qe,headingTopMarginTablet:Ke,headingRightMarginTablet:Qe,headingLeftMarginTablet:$e,headingBottomMarginTablet:ea,headingTopMarginMobile:aa,headingRightMarginMobile:ta,headingLeftMarginMobile:la,headingBottomMarginMobile:oa,headingMarginUnit:na,headingMarginUnitTablet:ia,headingMarginUnitMobile:ra,headingMarginLink:ba,overlayPositionFromEdge:ga,overlayPositionFromEdgeUnit:ua,overlayContentPosition:da,overlayBackground:sa,overlayOpacity:ca,overlayHoverOpacity:ma,overlayBorderStyle:pa,overlayBorderWidth:va,overlayBorderRadius:ha,overlayBorderColor:fa,overlayBorderHoverColor:_a,seperatorStyle:Ma,seperatorWidth:Oa,separatorWidthType:Ta,seperatorThickness:ja,seperatorThicknessUnit:Sa,seperatorPosition:ya,seperatorColor:xa,seperatorTopMargin:wa,seperatorRightMargin:Ca,seperatorLeftMargin:Ea,seperatorBottomMargin:Ba,seperatorTopMarginTablet:La,seperatorRightMarginTablet:Ra,seperatorLeftMarginTablet:Fa,seperatorBottomMarginTablet:ka,seperatorTopMarginMobile:za,seperatorRightMarginMobile:Ha,seperatorLeftMarginMobile:Ua,seperatorBottomMarginMobile:Ia,seperatorMarginUnit:Aa,seperatorMarginUnitTablet:Pa,seperatorMarginUnitMobile:Na,seperatorMarginLink:Wa,imageHoverEffect:Va,imageBorderWidth:Da,imageBorderStyle:Ga,imageBorderRadius:Ja,imageBorderColor:Xa,imageBorderhoverColor:Ya,imageBoxShadowColor:Za,imageBoxShadowHOffset:qa,imageBoxShadowVOffset:Ka,imageBoxShadowBlur:Qa,imageBoxShadowSpread:$a,imageBoxShadowPosition:et,maskShape:at,maskCustomShape:tt,maskSize:lt,maskPosition:ot,maskRepeat:nt}=y,{imageSizes:it}=Object(v.useSelect)(e=>{const{getSettings:a}=e(_.store),{imageSizes:t}=a();return{imageSizes:t}},[B]),{image:rt}=Object(v.useSelect)(e=>{const{getMedia:a}=e(T.store);return{image:R&&E?a(R):null}},[R,E]),{allowResize:bt=!0}=C,gt=Object(r.useViewportMatch)("medium"),ut=["wide","full"].includes(z),dt=bt&&!(ut&&gt),st=it.reduce((e,a)=>(e.push({value:a.slug,label:a.name}),e),[]),ct=o.a.createElement(j.a,{title:Object(h.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(f.a,{setAttributes:x,label:Object(h.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:L,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"default",label:Object(h.__)("Normal","ultimate-addons-for-gutenberg")},{value:"overlay",label:Object(h.__)("Overlay","ultimate-addons-for-gutenberg")}],showIcons:!1}),R&&E&&o.a.createElement(o.a.Fragment,null,o.a.createElement(_.__experimentalImageSizeControl,{onChangeImage:function(e){var a;const t=null==rt||null===(a=rt.media_details)||void 0===a?void 0:a.sizes[e];if(!t)return null;x({url:null==t?void 0:t.source_url,width:null==t?void 0:t.width,height:null==t?void 0:t.height,sizeSlug:e})},onChange:e=>x(e),slug:U,width:F,height:k,imageSizeOptions:st,isResizable:dt,imageWidth:null==rt||null===(a=rt.media_details)||void 0===a?void 0:a.width,imageHeight:null==rt||null===(t=rt.media_details)||void 0===t?void 0:t.height}),o.a.createElement(M.TextControl,{label:Object(h.__)("Alt Text","ultimate-addons-for-gutenberg"),value:H,onChange:e=>x({alt:e})})),o.a.createElement(M.SelectControl,{label:Object(h.__)("On Hover Image","ultimate-addons-for-gutenberg"),value:Va,onChange:e=>x({imageHoverEffect:e}),options:[{value:"static",label:Object(h.__)("Static","ultimate-addons-for-gutenberg")},{value:"zoomin",label:Object(h.__)("Zoom In","ultimate-addons-for-gutenberg")},{value:"slide",label:Object(h.__)("Slide","ultimate-addons-for-gutenberg")},{value:"grayscale",label:Object(h.__)("Gray Scale","ultimate-addons-for-gutenberg")},{value:"blur",label:Object(h.__)("Blur","ultimate-addons-for-gutenberg")}]})),mt=o.a.createElement(j.a,{title:Object(h.__)("Mask","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(M.SelectControl,{label:Object(h.__)("Mask Shape","ultimate-addons-for-gutenberg"),value:at,onChange:e=>x({maskShape:e}),options:[{value:"none",label:Object(h.__)("None","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(h.__)("Circle","ultimate-addons-for-gutenberg")},{value:"diamond",label:Object(h.__)("Diamond","ultimate-addons-for-gutenberg")},{value:"hexagon",label:Object(h.__)("Hexagon","ultimate-addons-for-gutenberg")},{value:"rounded",label:Object(h.__)("Rounded","ultimate-addons-for-gutenberg")},{value:"blob1",label:Object(h.__)("Blob 1","ultimate-addons-for-gutenberg")},{value:"blob2",label:Object(h.__)("Blob 2","ultimate-addons-for-gutenberg")},{value:"blob3",label:Object(h.__)("Blob 3","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(h.__)("Custom","ultimate-addons-for-gutenberg")}]}),"custom"===at&&o.a.createElement(m.a,{label:Object(h.__)("Custom Mask Image","ultimate-addons-for-gutenberg"),onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&x({maskCustomShape:e}):x({maskCustomShape:null})},backgroundImage:tt,onRemoveImage:()=>{x({maskCustomShape:null})}}),"none"!==at&&o.a.createElement(o.a.Fragment,null,o.a.createElement(M.SelectControl,{label:Object(h.__)("Mask Size","ultimate-addons-for-gutenberg"),value:lt,onChange:e=>x({maskSize:e}),options:[{value:"auto",label:Object(h.__)("Auto","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(h.__)("Contain","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(h.__)("Cover","ultimate-addons-for-gutenberg")}]}),o.a.createElement(M.SelectControl,{label:Object(h.__)("Mask Position","ultimate-addons-for-gutenberg"),value:ot,onChange:e=>x({maskPosition:e}),options:[{value:"center top",label:Object(h.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(h.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(h.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left top",label:Object(h.__)("Left Top","ultimate-addons-for-gutenberg")},{value:"left center",label:Object(h.__)("Left Center","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(h.__)("Left Bottom","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(h.__)("Right Top","ultimate-addons-for-gutenberg")},{value:"right center",label:Object(h.__)("Right Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(h.__)("Right Bottom","ultimate-addons-for-gutenberg")}]}),o.a.createElement(M.SelectControl,{label:Object(h.__)("Mask Repeat","ultimate-addons-for-gutenberg"),value:nt,onChange:e=>x({maskRepeat:e}),options:[{value:"no-repeat",label:Object(h.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(h.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(h.__)("Repeat-X","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(h.__)("Repeat-Y","ultimate-addons-for-gutenberg")}]}))),pt=o.a.createElement(j.a,{title:Object(h.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(M.SelectControl,{label:Object(h.__)("Style"),value:Ma,onChange:e=>x({seperatorStyle:e}),options:[{value:"none",label:Object(h.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(h.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(h.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(h.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(h.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==Ma&&o.a.createElement(M.SelectControl,{label:Object(h.__)("Position","ultimate-addons-for-gutenberg"),value:ya,onChange:e=>x({seperatorPosition:e}),options:[{value:"before_title",label:Object(h.__)("Before Title","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(h.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_sub_title",label:Object(h.__)("After Sub Title","ultimate-addons-for-gutenberg")}]})),vt=o.a.createElement(j.a,{title:Object(h.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(l.Suspense,{fallback:Object(n.a)()},o.a.createElement(i.a,{label:Object(h.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:x,loadGoogleFonts:{value:Re,label:"headingLoadGoogleFonts"},fontFamily:{value:Fe,label:"headingFontFamily"},fontWeight:{value:ke,label:"headingFontWeight"},fontStyle:{value:ze,label:"headingFontStyle"},transform:{value:Ie,label:"headingTransform"},decoration:{value:Ae,label:"headingDecoration"},fontSizeType:{value:Pe,label:"headingFontSizeType"},fontSize:{value:He,label:"headingFontSize"},fontSizeMobile:{value:Ne,label:"headingFontSizeMobile"},fontSizeTablet:{value:We,label:"headingFontSizeTablet"},lineHeightType:{value:De,label:"headingLineHeightType"},lineHeight:{value:Ve,label:"headingLineHeight"},lineHeightMobile:{value:Ge,label:"headingLineHeightMobile"},lineHeightTablet:{value:Je,label:"headingLineHeightTablet"}})),o.a.createElement(u.a,{label:Object(h.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ue||"",onColorChange:e=>x({headingColor:e})}),o.a.createElement(d.a,{label:Object(h.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Xe,label:"headingTopMargin"},valueRight:{value:Ye,label:"headingRightMargin"},valueBottom:{value:qe,label:"headingBottomMargin"},valueLeft:{value:Ze,label:"headingLeftMargin"},valueTopTablet:{value:Ke,label:"headingTopMarginTablet"},valueRightTablet:{value:Qe,label:"headingRightMarginTablet"},valueBottomTablet:{value:ea,label:"headingBottomMarginTablet"},valueLeftTablet:{value:$e,label:"headingLeftMarginTablet"},valueTopMobile:{value:aa,label:"headingTopMarginMobile"},valueRightMobile:{value:ta,label:"headingRightMarginMobile"},valueBottomMobile:{value:oa,label:"headingBottomMarginMobile"},valueLeftMobile:{value:la,label:"headingLeftMarginMobile"},unit:{value:na,label:"headingMarginUnit"},mUnit:{value:ra,label:"headingMarginUnitMobile"},tUnit:{value:ia,label:"headingMarginUnitTablet"},deviceType:w,attributes:y,setAttributes:x,link:{value:ba,label:"headingMarginLink"}})),ht=o.a.createElement(j.a,{title:"overlay"===L?Object(h.__)("Sub Title","ultimate-addons-for-gutenberg"):Object(h.__)("Caption","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(f.a,{setAttributes:x,label:Object(h.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:ae,label:"captionAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(M.Icon,{icon:Object(O.a)("fa fa-align-left")}),tooltip:Object(h.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(M.Icon,{icon:Object(O.a)("fa fa-align-center")}),tooltip:Object(h.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(M.Icon,{icon:Object(O.a)("fa fa-align-right")}),tooltip:Object(h.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),o.a.createElement(l.Suspense,{fallback:Object(n.a)()},o.a.createElement(i.a,{label:Object(h.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:x,loadGoogleFonts:{value:ee,label:"captionLoadGoogleFonts"},fontFamily:{value:te,label:"captionFontFamily"},fontWeight:{value:le,label:"captionFontWeight"},fontStyle:{value:oe,label:"captionFontStyle"},transform:{value:re,label:"captionTransform"},decoration:{value:be,label:"captionDecoration"},fontSizeType:{value:ge,label:"captionFontSizeType"},fontSize:{value:ne,label:"captionFontSize"},fontSizeMobile:{value:ue,label:"captionFontSizeMobile"},fontSizeTablet:{value:de,label:"captionFontSizeTablet"},lineHeightType:{value:ce,label:"captionLineHeightType"},lineHeight:{value:se,label:"captionLineHeight"},lineHeightMobile:{value:me,label:"captionLineHeightMobile"},lineHeightTablet:{value:pe,label:"captionLineHeightTablet"}})),o.a.createElement(u.a,{label:Object(h.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ie||"",onColorChange:e=>x({captionColor:e})}),o.a.createElement(d.a,{label:Object(h.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:ve,label:"captionTopMargin"},valueRight:{value:he,label:"captionRightMargin"},valueBottom:{value:_e,label:"captionBottomMargin"},valueLeft:{value:fe,label:"captionLeftMargin"},valueTopTablet:{value:Me,label:"captionTopMarginTablet"},valueRightTablet:{value:Oe,label:"captionRightMarginTablet"},valueBottomTablet:{value:je,label:"captionBottomMarginTablet"},valueLeftTablet:{value:Te,label:"captionLeftMarginTablet"},valueTopMobile:{value:Se,label:"captionTopMarginMobile"},valueRightMobile:{value:ye,label:"captionRightMarginMobile"},valueBottomMobile:{value:we,label:"captionBottomMarginMobile"},valueLeftMobile:{value:xe,label:"captionLeftMarginMobile"},unit:{value:Ce,label:"captionMarginUnit"},mUnit:{value:Be,label:"captionMarginUnitMobile"},tUnit:{value:Ee,label:"captionMarginUnitTablet"},deviceType:w,attributes:y,setAttributes:x,link:{value:Le,label:"captionMarginLink"}})),ft=o.a.createElement(j.a,{title:Object(h.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(f.a,{setAttributes:x,label:Object(h.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:z,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(M.Icon,{icon:Object(O.a)("fa fa-align-left")}),tooltip:Object(h.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(M.Icon,{icon:Object(O.a)("fa fa-align-center")}),tooltip:Object(h.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(M.Icon,{icon:Object(O.a)("fa fa-align-right")}),tooltip:Object(h.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),"default"===L&&o.a.createElement(c.a,{setAttributes:x,borderStyle:{value:Ga,label:"imageBorderStyle",title:Object(h.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Da,label:"imageBorderWidth",title:Object(h.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Ja,label:"imageBorderRadius",title:Object(h.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Xa,label:"imageBorderColor",title:Object(h.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Ya,label:"imageBorderhoverColor",title:Object(h.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}),"overlay"===L&&o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{htmlFor:"overlayContentAlign"},Object(h.__)("Content Postion","ultimate-addons-for-gutenberg")),o.a.createElement(M.__experimentalAlignmentMatrixControl,{id:"overlayContentAlign",value:da,onChange:e=>x({overlayContentPosition:e})}),o.a.createElement(c.a,{setAttributes:x,borderStyle:{value:pa,label:"overlayBorderStyle",title:Object(h.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:va,label:"overlayBorderWidth",title:Object(h.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ha,label:"overlayBorderRadius",title:Object(h.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:fa,label:"overlayBorderColor",title:Object(h.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:_a,label:"overlayBorderHoverColor",title:Object(h.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!1}),o.a.createElement(s.a,{label:Object(h.__)("Border Distance From EDGE","ultimate-addons-for-gutenberg"),setAttributes:x,value:ga,onChange:e=>x({overlayPositionFromEdge:e}),min:0,max:100,unit:{value:ua,label:"overlayPositionFromEdgeUnit"}})),o.a.createElement(d.a,{label:Object(h.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:I,label:"imageTopMargin"},valueRight:{value:A,label:"imageRightMargin"},valueBottom:{value:N,label:"imageBottomMargin"},valueLeft:{value:P,label:"imageLeftMargin"},valueTopTablet:{value:W,label:"imageTopMarginTablet"},valueRightTablet:{value:V,label:"imageRightMarginTablet"},valueBottomTablet:{value:G,label:"imageBottomMarginTablet"},valueLeftTablet:{value:D,label:"imageLeftMarginTablet"},valueTopMobile:{value:J,label:"imageTopMarginMobile"},valueRightMobile:{value:X,label:"imageRightMarginMobile"},valueBottomMobile:{value:Z,label:"imageBottomMarginMobile"},valueLeftMobile:{value:Y,label:"imageLeftMarginMobile"},unit:{value:q,label:"imageMarginUnit"},mUnit:{value:Q,label:"imageMarginUnitMobile"},tUnit:{value:K,label:"imageMarginUnitTablet"},deviceType:w,attributes:y,setAttributes:x,link:{value:$,label:"imageMarginLink"}}),o.a.createElement(p.a,{setAttributes:x,label:Object(h.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:Za,label:"imageBoxShadowColor",title:Object(h.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:qa,label:"imageBoxShadowHOffset",title:Object(h.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:Ka,label:"imageBoxShadowVOffset",title:Object(h.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:Qa,label:"imageBoxShadowBlur",title:Object(h.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:$a,label:"imageBoxShadowSpread",title:Object(h.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:et,label:"imageBoxShadowPosition",title:Object(h.__)("Position","ultimate-addons-for-gutenberg")}})),_t=o.a.createElement(j.a,{title:Object(h.__)("Overlay","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.a,{label:Object(h.__)("Background","ultimate-addons-for-gutenberg"),colorValue:sa||"",onColorChange:e=>x({overlayBackground:e})}),o.a.createElement(M.RangeControl,{label:Object(h.__)("Overlay Opacity","ultimate-addons-for-gutenberg"),value:ca,onChange:e=>x({overlayOpacity:e}),min:0,max:1,step:.1}),o.a.createElement(M.RangeControl,{label:Object(h.__)("Overlay Hover Opacity","ultimate-addons-for-gutenberg"),value:ma,onChange:e=>x({overlayHoverOpacity:e}),min:0,max:1})),Mt=o.a.createElement(j.a,{title:"Separator",initialOpen:!1},o.a.createElement(s.a,{label:Object(h.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:x,value:Oa,onChange:e=>x({seperatorWidth:e}),min:0,max:"%"===Ta?100:500,unit:{value:Ta,label:"separatorWidthType"},units:[{name:Object(h.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(h.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(h.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),o.a.createElement(s.a,{label:Object(h.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:x,value:ja,onChange:e=>x({seperatorThickness:e}),min:0,max:10,unit:{value:Sa,label:"seperatorThicknessUnit"}}),o.a.createElement(u.a,{label:Object(h.__)("Color","ultimate-addons-for-gutenberg"),colorValue:xa||"",onColorChange:e=>x({seperatorColor:e})}),o.a.createElement(d.a,S({},e,{label:Object(h.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:wa,label:"seperatorTopMargin"},valueRight:{value:Ca,label:"seperatorRightMargin"},valueBottom:{value:Ba,label:"seperatorBottomMargin"},valueLeft:{value:Ea,label:"seperatorLeftMargin"},valueTopTablet:{value:La,label:"seperatorTopMarginTablet"},valueRightTablet:{value:Ra,label:"seperatorRightMarginTablet"},valueBottomTablet:{value:ka,label:"seperatorBottomMarginTablet"},valueLeftTablet:{value:Fa,label:"seperatorLeftMarginTablet"},valueTopMobile:{value:za,label:"seperatorTopMarginMobile"},valueRightMobile:{value:Ha,label:"seperatorRightMarginMobile"},valueBottomMobile:{value:Ia,label:"seperatorBottomMarginMobile"},valueLeftMobile:{value:Ua,label:"seperatorLeftMarginMobile"},unit:{value:Aa,label:"seperatorMarginUnit"},mUnit:{value:Na,label:"seperatorMarginUnitMobile"},tUnit:{value:Pa,label:"seperatorMarginUnitTablet"},deviceType:w,attributes:y,setAttributes:x,link:{value:Wa,label:"seperatorMarginLink"}})));return o.a.createElement(o.a.Fragment,null,o.a.createElement(_.InspectorControls,null,o.a.createElement(b.a,null,o.a.createElement(g.b,g.a.general,ct,mt,"overlay"===L&&o.a.createElement(o.a.Fragment,null,pt)),o.a.createElement(g.b,g.a.style,ft,"overlay"===L&&o.a.createElement(o.a.Fragment,null,_t,vt),ht,"none"!==Ma&&"overlay"===L&&Mt),o.a.createElement(g.b,S({},g.a.advance,{parentProps:e})))))}}}]);