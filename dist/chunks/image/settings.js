(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[68],{200:function(e,a,t){"use strict";var l,o=t(1),n=t(6),i=t(4),r=t(0),b=t.n(r),u=t(13),g=t.n(u),d=t(201),s=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return s++||(l=g()(d.a,c)),m},m.unuse=function(){s>0&&!--s&&(l(),l=null)};var p=m;a.a=e=>{Object(r.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:l,showVideoInput:u,label:g}=e;let d=Object(o.__)("Image","ultimate-addons-for-gutenberg"),s=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),c=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),v=["image"];return u&&(d=Object(o.__)("Video","ultimate-addons-for-gutenberg"),s=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),c=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),v=["video"]),d=g||d,d=!1===g?g:d,b.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+g,label:d},b.a.createElement("div",{className:"uagb-bg-image"},b.a.createElement(i.MediaUpload,{title:s,onSelect:a,allowedTypes:v,value:t,render:e=>{let{open:a}=e;return b.a.createElement(n.Button,{isSecondary:!0,onClick:a},null!=t&&t.url?c:s)}}),(null==t?void 0:t.url)&&b.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:l,isLink:!0,isDestructive:!0},m),e.help&&b.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},201:function(e,a,t){"use strict";var l=t(14),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),a.a=o},204:function(e,a,t){"use strict";var l=t(14),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 14px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),a.a=o},206:function(e,a,t){"use strict";var l,o=t(1),n=t(18),i=t(15),r=t(6),b=t(2),u=t(19),g=t(13),d=t.n(g),s=t(204),c=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=s.a.locals||{},p.use=function(){return c++||(l=d()(s.a,m)),p},p.unuse=function(){c>0&&!--c&&(l(),l=null)};var v=p,h=t(0),f=t.n(h);a.a=e=>{Object(h.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const[a,t]=Object(b.useState)(!1),{setAttributes:l,boxShadowColor:g,boxShadowHOffset:d,boxShadowVOffset:s,boxShadowBlur:c,boxShadowSpread:m,boxShadowPosition:p}=e;let _;const M=a?"active":"";a&&(_=f.a.createElement("div",{className:"uagb-box-shadow-advanced"},f.a.createElement("div",{className:"uagb-shadow-color"},f.a.createElement(i.a,{label:g.title,colorValue:g.value,onColorChange:e=>l({[g.label]:e})})),f.a.createElement("div",{className:"uagb-horizontal-wrap"},f.a.createElement(n.a,{label:d.title,value:d.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:d.value,label:d.label},onChange:!1})),f.a.createElement("div",{className:"uagb-vertical-wrap"},f.a.createElement(n.a,{label:s.title,value:s.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:s.value,label:s.label},onChange:!1})),f.a.createElement("div",{className:"uagb-blur-wrap"},f.a.createElement(n.a,{label:c.title,value:c.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:c.value,label:c.label},onChange:!1})),f.a.createElement("div",{className:"uagb-spread-wrap"},f.a.createElement(n.a,{label:m.title,value:m.value,min:-100,max:100,displayUnit:!1,setAttributes:l,data:{value:m.value,label:m.label},onChange:!1})),f.a.createElement("div",{className:"uagb-shadow-type"},f.a.createElement(u.a,{setAttributes:l,label:p.title,data:{value:p.value,label:p.label},options:[{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const O=f.a.createElement("div",{className:"uag-box-shadow-option-actions"},f.a.createElement("span",{className:"uag-control-label"},Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg")),f.a.createElement(r.Button,{className:"uag-box-shadow-button","aria-pressed":a,onClick:()=>t(!a)},f.a.createElement(r.Dashicon,{icon:"edit"})));return f.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+M},O,a&&_)}},315:function(e,a,t){"use strict";var l=t(14),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-select-control--layout-inline .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n",""]),a.a=o},508:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return z}));var l,o=t(0),n=t.n(o),i=t(8),r=t(31),b=t(12),u=t(79),g=t(24),d=t(15),s=t(51),c=t(18),m=t(77),p=t(200),v=t(206),h=t(9),f=t(1),_=t(19),M=t(6),O=t(13),j=t.n(O),T=t(315),y=0,S={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},w={};w.locals=T.a.locals||{},w.use=function(){return y++||(l=j()(T.a,S)),w},w.unuse=function(){y>0&&!--y&&(l(),l=null)};var x=w,E=t(36),B=t.n(E);const C={label:B.a.string,layout:B.a.string,options:B.a.array,data:B.a.object,setAttributes:B.a.func};function L(e){let{layout:a,label:t,options:l,data:i,setAttributes:r}=e;return Object(o.useLayoutEffect)(()=>(x.use(),()=>{x.unuse()}),[]),n.a.createElement("div",{className:"uagb-select-control uagb-select-control--layout-"+a},n.a.createElement(M.SelectControl,{label:t,value:i.value,onChange:e=>r({[i.label]:e}),options:l}))}L.propTypes=C,L.defaultProps={layout:"inline"};var R=t(4),H=t(11),F=t(194),k=t(16);function A(){return(A=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function z(e){var a,t;e=e.parentProps;const{attributes:l,setAttributes:O,deviceType:j,context:T,isSelected:y,clientId:S}=e,{layout:w,id:x,width:E,height:B,align:C,alt:z,sizeSlug:U,imageTopMargin:I,imageRightMargin:N,imageLeftMargin:P,imageBottomMargin:W,imageTopMarginTablet:V,imageRightMarginTablet:D,imageLeftMarginTablet:G,imageBottomMarginTablet:J,imageTopMarginMobile:X,imageRightMarginMobile:Y,imageLeftMarginMobile:Z,imageBottomMarginMobile:q,imageMarginUnit:K,imageMarginUnitTablet:Q,imageMarginUnitMobile:$,imageMarginLink:ee,captionShowOn:ae,captionLoadGoogleFonts:te,captionAlign:le,captionFontFamily:oe,captionFontWeight:ne,captionFontStyle:ie,captionFontSize:re,captionColor:be,captionTransform:ue,captionDecoration:ge,captionFontSizeType:de,captionFontSizeMobile:se,captionFontSizeTablet:ce,captionLineHeight:me,captionLineHeightType:pe,captionLineHeightMobile:ve,captionLineHeightTablet:he,captionTopMargin:fe,captionRightMargin:_e,captionLeftMargin:Me,captionBottomMargin:Oe,captionTopMarginTablet:je,captionRightMarginTablet:Te,captionLeftMarginTablet:ye,captionBottomMarginTablet:Se,captionTopMarginMobile:we,captionRightMarginMobile:xe,captionLeftMarginMobile:Ee,captionBottomMarginMobile:Be,captionMarginUnit:Ce,captionMarginUnitTablet:Le,captionMarginUnitMobile:Re,captionMarginLink:He,headingTag:Fe,headingShowOn:ke,headingLoadGoogleFonts:Ae,headingFontFamily:ze,headingFontWeight:Ue,headingFontStyle:Ie,headingFontSize:Ne,headingColor:Pe,headingTransform:We,headingDecoration:Ve,headingFontSizeType:De,headingFontSizeMobile:Ge,headingFontSizeTablet:Je,headingLineHeight:Xe,headingLineHeightType:Ye,headingLineHeightMobile:Ze,headingLineHeightTablet:qe,headingTopMargin:Ke,headingRightMargin:Qe,headingLeftMargin:$e,headingBottomMargin:ea,headingTopMarginTablet:aa,headingRightMarginTablet:ta,headingLeftMarginTablet:la,headingBottomMarginTablet:oa,headingTopMarginMobile:na,headingRightMarginMobile:ia,headingLeftMarginMobile:ra,headingBottomMarginMobile:ba,headingMarginUnit:ua,headingMarginUnitTablet:ga,headingMarginUnitMobile:da,headingMarginLink:sa,overlayPositionFromEdge:ca,overlayPositionFromEdgeUnit:ma,overlayContentPosition:pa,overlayBackground:va,overlayOpacity:ha,overlayHoverOpacity:fa,overlayBorderStyle:_a,overlayBorderWidth:Ma,overlayBorderRadius:Oa,overlayBorderColor:ja,overlayBorderHoverColor:Ta,seperatorShowOn:ya,seperatorStyle:Sa,seperatorWidth:wa,separatorWidthType:xa,seperatorThickness:Ea,seperatorThicknessUnit:Ba,seperatorPosition:Ca,seperatorColor:La,seperatorTopMargin:Ra,seperatorRightMargin:Ha,seperatorLeftMargin:Fa,seperatorBottomMargin:ka,seperatorTopMarginTablet:Aa,seperatorRightMarginTablet:za,seperatorLeftMarginTablet:Ua,seperatorBottomMarginTablet:Ia,seperatorTopMarginMobile:Na,seperatorRightMarginMobile:Pa,seperatorLeftMarginMobile:Wa,seperatorBottomMarginMobile:Va,seperatorMarginUnit:Da,seperatorMarginUnitTablet:Ga,seperatorMarginUnitMobile:Ja,seperatorMarginLink:Xa,imageHoverEffect:Ya,imageBorderWidth:Za,imageBorderStyle:qa,imageBorderRadius:Ka,imageBorderColor:Qa,imageBorderhoverColor:$a,imageBoxShadowColor:et,imageBoxShadowHOffset:at,imageBoxShadowVOffset:tt,imageBoxShadowBlur:lt,imageBoxShadowSpread:ot,imageBoxShadowPosition:nt,maskShape:it,maskCustomShape:rt,maskSize:bt,maskPosition:ut,maskRepeat:gt}=l,{imageSizes:dt}=Object(h.useSelect)(e=>{const{getSettings:a}=e(R.store),{imageSizes:t}=a();return{imageSizes:t}},[S]),{image:st}=Object(h.useSelect)(e=>{const{getMedia:a}=e(F.store);return{image:x&&y?a(x):null}},[x,y]),{allowResize:ct=!0}=T,mt=Object(b.useViewportMatch)("medium"),pt=["wide","full"].includes(C),vt=ct&&!(pt&&mt),ht=dt.reduce((e,a)=>(e.push({value:a.slug,label:a.name}),e),[]),ft=n.a.createElement(k.a,{title:Object(f.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(_.a,{setAttributes:O,label:Object(f.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:w,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"default",label:Object(f.__)("Normal","ultimate-addons-for-gutenberg")},{value:"overlay",label:Object(f.__)("Overlay","ultimate-addons-for-gutenberg")}],showIcons:!1}),x&&y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(R.__experimentalImageSizeControl,{onChangeImage:function(e){var a;const t=null==st||null===(a=st.media_details)||void 0===a?void 0:a.sizes[e];if(!t)return null;O({url:null==t?void 0:t.source_url,width:null==t?void 0:t.width,height:null==t?void 0:t.height,sizeSlug:e})},onChange:e=>O(e),slug:U,width:E,height:B,imageSizeOptions:ht,isResizable:vt,imageWidth:null==st||null===(a=st.media_details)||void 0===a?void 0:a.width,imageHeight:null==st||null===(t=st.media_details)||void 0===t?void 0:t.height}),n.a.createElement(M.TextControl,{label:Object(f.__)("Alt Text","ultimate-addons-for-gutenberg"),value:z,onChange:e=>O({alt:e})})),n.a.createElement(M.SelectControl,{label:Object(f.__)("On Hover Image","ultimate-addons-for-gutenberg"),value:Ya,onChange:e=>O({imageHoverEffect:e}),options:[{value:"static",label:Object(f.__)("Static","ultimate-addons-for-gutenberg")},{value:"zoomin",label:Object(f.__)("Zoom In","ultimate-addons-for-gutenberg")},{value:"slide",label:Object(f.__)("Slide","ultimate-addons-for-gutenberg")},{value:"grayscale",label:Object(f.__)("Gray Scale","ultimate-addons-for-gutenberg")},{value:"blur",label:Object(f.__)("Blur","ultimate-addons-for-gutenberg")}]})),_t=n.a.createElement(k.a,{title:Object(f.__)("Mask","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(L,{label:Object(f.__)("Mask Shape","ultimate-addons-for-gutenberg"),data:{value:it,label:"maskShape"},setAttributes:O,options:[{value:"none",label:Object(f.__)("None","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(f.__)("Circle","ultimate-addons-for-gutenberg")},{value:"diamond",label:Object(f.__)("Diamond","ultimate-addons-for-gutenberg")},{value:"hexagon",label:Object(f.__)("Hexagon","ultimate-addons-for-gutenberg")},{value:"rounded",label:Object(f.__)("Rounded","ultimate-addons-for-gutenberg")},{value:"blob1",label:Object(f.__)("Blob 1","ultimate-addons-for-gutenberg")},{value:"blob2",label:Object(f.__)("Blob 2","ultimate-addons-for-gutenberg")},{value:"blob3",label:Object(f.__)("Blob 3","ultimate-addons-for-gutenberg")},{value:"blob4",label:Object(f.__)("Blob 4","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(f.__)("Custom","ultimate-addons-for-gutenberg")}]}),"custom"===it&&n.a.createElement(p.a,{label:Object(f.__)("Custom Mask Image","ultimate-addons-for-gutenberg"),onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&O({maskCustomShape:e}):O({maskCustomShape:null})},backgroundImage:rt,onRemoveImage:()=>{O({maskCustomShape:null})}}),"none"!==it&&n.a.createElement(n.a.Fragment,null,n.a.createElement(L,{label:Object(f.__)("Mask Size","ultimate-addons-for-gutenberg"),data:{value:bt,label:"maskSize"},setAttributes:O,options:[{value:"auto",label:Object(f.__)("Auto","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(f.__)("Contain","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(f.__)("Cover","ultimate-addons-for-gutenberg")}]}),n.a.createElement(L,{label:Object(f.__)("Mask Position","ultimate-addons-for-gutenberg"),data:{value:ut,label:"maskPosition"},setAttributes:O,options:[{value:"center top",label:Object(f.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(f.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(f.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left top",label:Object(f.__)("Left Top","ultimate-addons-for-gutenberg")},{value:"left center",label:Object(f.__)("Left Center","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(f.__)("Left Bottom","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(f.__)("Right Top","ultimate-addons-for-gutenberg")},{value:"right center",label:Object(f.__)("Right Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(f.__)("Right Bottom","ultimate-addons-for-gutenberg")}]}),n.a.createElement(L,{label:Object(f.__)("Mask Repeat","ultimate-addons-for-gutenberg"),data:{value:gt,label:"maskRepeat"},setAttributes:O,options:[{value:"no-repeat",label:Object(f.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(f.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(f.__)("Repeat-X","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(f.__)("Repeat-Y","ultimate-addons-for-gutenberg")}]}))),Mt=n.a.createElement(k.a,{title:Object(f.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},"none"!==Sa&&n.a.createElement(_.a,{setAttributes:O,label:Object(f.__)("Show On","ultimate-addons-for-gutenberg"),data:{value:ya,label:"seperatorShowOn"},className:"uagb-multi-button-alignment-control",options:[{value:"always",label:Object(f.__)("Always","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(f.__)("Hover","ultimate-addons-for-gutenberg")}],showIcons:!1}),n.a.createElement(M.SelectControl,{label:Object(f.__)("Style"),value:Sa,onChange:e=>O({seperatorStyle:e}),options:[{value:"none",label:Object(f.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(f.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(f.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(f.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(f.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==Sa&&n.a.createElement(M.SelectControl,{label:Object(f.__)("Position","ultimate-addons-for-gutenberg"),value:Ca,onChange:e=>O({seperatorPosition:e}),options:[{value:"before_title",label:Object(f.__)("Before Title","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(f.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_sub_title",label:Object(f.__)("After Sub Title","ultimate-addons-for-gutenberg")}]})),Ot=n.a.createElement(k.a,{title:Object(f.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(_.a,{setAttributes:O,label:Object(f.__)("Show On","ultimate-addons-for-gutenberg"),data:{value:ke,label:"headingShowOn"},className:"uagb-multi-button-alignment-control",options:[{value:"always",label:Object(f.__)("Always","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(f.__)("Hover","ultimate-addons-for-gutenberg")}],showIcons:!1})),jt=n.a.createElement(k.a,{title:Object(f.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(_.a,{setAttributes:O,label:Object(f.__)("Show On","ultimate-addons-for-gutenberg"),data:{value:ae,label:"captionShowOn"},className:"uagb-multi-button-alignment-control",options:[{value:"always",label:Object(f.__)("Always","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(f.__)("Hover","ultimate-addons-for-gutenberg")}],showIcons:!1})),Tt=n.a.createElement(k.a,{title:Object(f.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(_.a,{setAttributes:O,label:Object(f.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:Fe,label:"headingTag"},options:[{value:"h1",label:Object(f.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(f.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(f.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(f.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(f.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(f.__)("H6","ultimate-addons-for-gutenberg")}]}),n.a.createElement(o.Suspense,{fallback:Object(i.a)()},n.a.createElement(r.a,{label:Object(f.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:O,loadGoogleFonts:{value:Ae,label:"headingLoadGoogleFonts"},fontFamily:{value:ze,label:"headingFontFamily"},fontWeight:{value:Ue,label:"headingFontWeight"},fontStyle:{value:Ie,label:"headingFontStyle"},transform:{value:We,label:"headingTransform"},decoration:{value:Ve,label:"headingDecoration"},fontSizeType:{value:De,label:"headingFontSizeType"},fontSize:{value:Ne,label:"headingFontSize"},fontSizeMobile:{value:Ge,label:"headingFontSizeMobile"},fontSizeTablet:{value:Je,label:"headingFontSizeTablet"},lineHeightType:{value:Ye,label:"headingLineHeightType"},lineHeight:{value:Xe,label:"headingLineHeight"},lineHeightMobile:{value:Ze,label:"headingLineHeightMobile"},lineHeightTablet:{value:qe,label:"headingLineHeightTablet"}})),n.a.createElement(d.a,{label:Object(f.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Pe||"",onColorChange:e=>O({headingColor:e})}),n.a.createElement(s.a,{label:Object(f.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Ke,label:"headingTopMargin"},valueRight:{value:Qe,label:"headingRightMargin"},valueBottom:{value:ea,label:"headingBottomMargin"},valueLeft:{value:$e,label:"headingLeftMargin"},valueTopTablet:{value:aa,label:"headingTopMarginTablet"},valueRightTablet:{value:ta,label:"headingRightMarginTablet"},valueBottomTablet:{value:oa,label:"headingBottomMarginTablet"},valueLeftTablet:{value:la,label:"headingLeftMarginTablet"},valueTopMobile:{value:na,label:"headingTopMarginMobile"},valueRightMobile:{value:ia,label:"headingRightMarginMobile"},valueBottomMobile:{value:ba,label:"headingBottomMarginMobile"},valueLeftMobile:{value:ra,label:"headingLeftMarginMobile"},unit:{value:ua,label:"headingMarginUnit"},mUnit:{value:da,label:"headingMarginUnitMobile"},tUnit:{value:ga,label:"headingMarginUnitTablet"},deviceType:j,attributes:l,setAttributes:O,link:{value:sa,label:"headingMarginLink"}})),yt=n.a.createElement(k.a,{title:"overlay"===w?Object(f.__)("Description","ultimate-addons-for-gutenberg"):Object(f.__)("Caption","ultimate-addons-for-gutenberg"),initialOpen:!0},"default"===w&&n.a.createElement(_.a,{setAttributes:O,label:Object(f.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:le,label:"captionAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(M.Icon,{icon:Object(H.a)("fa fa-align-left")}),tooltip:Object(f.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(M.Icon,{icon:Object(H.a)("fa fa-align-center")}),tooltip:Object(f.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(M.Icon,{icon:Object(H.a)("fa fa-align-right")}),tooltip:Object(f.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),n.a.createElement(o.Suspense,{fallback:Object(i.a)()},n.a.createElement(r.a,{label:Object(f.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:O,loadGoogleFonts:{value:te,label:"captionLoadGoogleFonts"},fontFamily:{value:oe,label:"captionFontFamily"},fontWeight:{value:ne,label:"captionFontWeight"},fontStyle:{value:ie,label:"captionFontStyle"},transform:{value:ue,label:"captionTransform"},decoration:{value:ge,label:"captionDecoration"},fontSizeType:{value:de,label:"captionFontSizeType"},fontSize:{value:re,label:"captionFontSize"},fontSizeMobile:{value:se,label:"captionFontSizeMobile"},fontSizeTablet:{value:ce,label:"captionFontSizeTablet"},lineHeightType:{value:pe,label:"captionLineHeightType"},lineHeight:{value:me,label:"captionLineHeight"},lineHeightMobile:{value:ve,label:"captionLineHeightMobile"},lineHeightTablet:{value:he,label:"captionLineHeightTablet"}})),n.a.createElement(d.a,{label:Object(f.__)("Color","ultimate-addons-for-gutenberg"),colorValue:be||"",onColorChange:e=>O({captionColor:e})}),n.a.createElement(s.a,{label:Object(f.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:fe,label:"captionTopMargin"},valueRight:{value:_e,label:"captionRightMargin"},valueBottom:{value:Oe,label:"captionBottomMargin"},valueLeft:{value:Me,label:"captionLeftMargin"},valueTopTablet:{value:je,label:"captionTopMarginTablet"},valueRightTablet:{value:Te,label:"captionRightMarginTablet"},valueBottomTablet:{value:Se,label:"captionBottomMarginTablet"},valueLeftTablet:{value:ye,label:"captionLeftMarginTablet"},valueTopMobile:{value:we,label:"captionTopMarginMobile"},valueRightMobile:{value:xe,label:"captionRightMarginMobile"},valueBottomMobile:{value:Be,label:"captionBottomMarginMobile"},valueLeftMobile:{value:Ee,label:"captionLeftMarginMobile"},unit:{value:Ce,label:"captionMarginUnit"},mUnit:{value:Re,label:"captionMarginUnitMobile"},tUnit:{value:Le,label:"captionMarginUnitTablet"},deviceType:j,attributes:l,setAttributes:O,link:{value:He,label:"captionMarginLink"}})),St=n.a.createElement(k.a,{title:Object(f.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(_.a,{setAttributes:O,label:Object(f.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:C,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(M.Icon,{icon:Object(H.a)("fa fa-align-left")}),tooltip:Object(f.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(M.Icon,{icon:Object(H.a)("fa fa-align-center")}),tooltip:Object(f.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(M.Icon,{icon:Object(H.a)("fa fa-align-right")}),tooltip:Object(f.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),"default"===w&&n.a.createElement(m.a,{setAttributes:O,borderStyle:{value:qa,label:"imageBorderStyle",title:Object(f.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Za,label:"imageBorderWidth",title:Object(f.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Ka,label:"imageBorderRadius",title:Object(f.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Qa,label:"imageBorderColor",title:Object(f.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:$a,label:"imageBorderhoverColor",title:Object(f.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}),"overlay"===w&&n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:"overlayContentAlign"},Object(f.__)("Content Postion","ultimate-addons-for-gutenberg")),n.a.createElement(M.__experimentalAlignmentMatrixControl,{id:"overlayContentAlign",value:pa,onChange:e=>O({overlayContentPosition:e})}),n.a.createElement(m.a,{setAttributes:O,borderStyle:{value:_a,label:"overlayBorderStyle",title:Object(f.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Ma,label:"overlayBorderWidth",title:Object(f.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Oa,label:"overlayBorderRadius",title:Object(f.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:ja,label:"overlayBorderColor",title:Object(f.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Ta,label:"overlayBorderHoverColor",title:Object(f.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!1}),n.a.createElement(c.a,{label:Object(f.__)("Border Distance From EDGE","ultimate-addons-for-gutenberg"),setAttributes:O,value:ca,onChange:e=>O({overlayPositionFromEdge:e}),min:0,max:100,unit:{value:ma,label:"overlayPositionFromEdgeUnit"}})),n.a.createElement(s.a,{label:Object(f.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:I,label:"imageTopMargin"},valueRight:{value:N,label:"imageRightMargin"},valueBottom:{value:W,label:"imageBottomMargin"},valueLeft:{value:P,label:"imageLeftMargin"},valueTopTablet:{value:V,label:"imageTopMarginTablet"},valueRightTablet:{value:D,label:"imageRightMarginTablet"},valueBottomTablet:{value:J,label:"imageBottomMarginTablet"},valueLeftTablet:{value:G,label:"imageLeftMarginTablet"},valueTopMobile:{value:X,label:"imageTopMarginMobile"},valueRightMobile:{value:Y,label:"imageRightMarginMobile"},valueBottomMobile:{value:q,label:"imageBottomMarginMobile"},valueLeftMobile:{value:Z,label:"imageLeftMarginMobile"},unit:{value:K,label:"imageMarginUnit"},mUnit:{value:$,label:"imageMarginUnitMobile"},tUnit:{value:Q,label:"imageMarginUnitTablet"},deviceType:j,attributes:l,setAttributes:O,link:{value:ee,label:"imageMarginLink"}}),"static"===Ya&&n.a.createElement(v.a,{setAttributes:O,label:Object(f.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:et,label:"imageBoxShadowColor",title:Object(f.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:at,label:"imageBoxShadowHOffset",title:Object(f.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:tt,label:"imageBoxShadowVOffset",title:Object(f.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:lt,label:"imageBoxShadowBlur",title:Object(f.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:ot,label:"imageBoxShadowSpread",title:Object(f.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:nt,label:"imageBoxShadowPosition",title:Object(f.__)("Position","ultimate-addons-for-gutenberg")}})),wt=n.a.createElement(k.a,{title:Object(f.__)("Overlay","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,{label:Object(f.__)("Background","ultimate-addons-for-gutenberg"),colorValue:va||"",onColorChange:e=>O({overlayBackground:e})}),n.a.createElement(M.RangeControl,{label:Object(f.__)("Overlay Opacity","ultimate-addons-for-gutenberg"),value:ha,onChange:e=>O({overlayOpacity:e}),min:0,max:1,step:.1}),n.a.createElement(M.RangeControl,{label:Object(f.__)("Overlay Hover Opacity","ultimate-addons-for-gutenberg"),value:fa,onChange:e=>O({overlayHoverOpacity:e}),min:0,max:1,step:.1})),xt=n.a.createElement(k.a,{title:"Separator",initialOpen:!1},n.a.createElement(c.a,{label:Object(f.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:O,value:wa,onChange:e=>O({seperatorWidth:e}),min:0,max:"%"===xa?100:500,unit:{value:xa,label:"separatorWidthType"},units:[{name:Object(f.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(f.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(f.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),n.a.createElement(c.a,{label:Object(f.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:O,value:Ea,onChange:e=>O({seperatorThickness:e}),min:0,max:10,unit:{value:Ba,label:"seperatorThicknessUnit"}}),n.a.createElement(d.a,{label:Object(f.__)("Color","ultimate-addons-for-gutenberg"),colorValue:La||"",onColorChange:e=>O({seperatorColor:e})}),n.a.createElement(s.a,A({},e,{label:Object(f.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Ra,label:"seperatorTopMargin"},valueRight:{value:Ha,label:"seperatorRightMargin"},valueBottom:{value:ka,label:"seperatorBottomMargin"},valueLeft:{value:Fa,label:"seperatorLeftMargin"},valueTopTablet:{value:Aa,label:"seperatorTopMarginTablet"},valueRightTablet:{value:za,label:"seperatorRightMarginTablet"},valueBottomTablet:{value:Ia,label:"seperatorBottomMarginTablet"},valueLeftTablet:{value:Ua,label:"seperatorLeftMarginTablet"},valueTopMobile:{value:Na,label:"seperatorTopMarginMobile"},valueRightMobile:{value:Pa,label:"seperatorRightMarginMobile"},valueBottomMobile:{value:Va,label:"seperatorBottomMarginMobile"},valueLeftMobile:{value:Wa,label:"seperatorLeftMarginMobile"},unit:{value:Da,label:"seperatorMarginUnit"},mUnit:{value:Ja,label:"seperatorMarginUnitMobile"},tUnit:{value:Ga,label:"seperatorMarginUnitTablet"},deviceType:j,attributes:l,setAttributes:O,link:{value:Xa,label:"seperatorMarginLink"}})));return n.a.createElement(n.a.Fragment,null,n.a.createElement(R.InspectorControls,null,n.a.createElement(u.a,null,n.a.createElement(g.b,g.a.general,ft,_t,"overlay"===w&&n.a.createElement(n.a.Fragment,null,Ot,jt,Mt)),n.a.createElement(g.b,g.a.style,St,"overlay"===w&&n.a.createElement(n.a.Fragment,null,wt,Tt),yt,"none"!==Sa&&"overlay"===w&&xt),n.a.createElement(g.b,A({},g.a.advance,{parentProps:e})))))}}}]);