(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[68],{200:function(e,a,t){"use strict";var l,o=t(1),n=t(6),i=t(4),r=t(0),b=t.n(r),u=t(13),g=t.n(u),s=t(201),d=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=s.a.locals||{},m.use=function(){return d++||(l=g()(s.a,c)),m},m.unuse=function(){d>0&&!--d&&(l(),l=null)};var h=m;a.a=e=>{Object(r.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:l,showVideoInput:u,label:g}=e;let s=Object(o.__)("Image","ultimate-addons-for-gutenberg"),d=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),c=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),p=["image"];return u&&(s=Object(o.__)("Video","ultimate-addons-for-gutenberg"),d=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),c=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),p=["video"]),s=g||s,s=!1===g?g:s,b.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+g,label:s},b.a.createElement("div",{className:"uagb-bg-image"},b.a.createElement(i.MediaUpload,{title:d,onSelect:a,allowedTypes:p,value:t,render:e=>{let{open:a}=e;return b.a.createElement(n.Button,{isSecondary:!0,onClick:a},null!=t&&t.url?c:d)}}),(null==t?void 0:t.url)&&b.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:l,isLink:!0,isDestructive:!0},m),e.help&&b.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},201:function(e,a,t){"use strict";var l=t(14),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),a.a=o},204:function(e,a,t){"use strict";var l=t(14),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 14px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),a.a=o},206:function(e,a,t){"use strict";var l,o=t(1),n=t(18),i=t(16),r=t(6),b=t(2),u=t(19),g=t(13),s=t.n(g),d=t(204),c=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},h={};h.locals=d.a.locals||{},h.use=function(){return c++||(l=s()(d.a,m)),h},h.unuse=function(){c>0&&!--c&&(l(),l=null)};var p=h,v=t(0),_=t.n(v);a.a=e=>{Object(v.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const[a,t]=Object(b.useState)(!1),{setAttributes:l,boxShadowColor:g,boxShadowHOffset:s,boxShadowVOffset:d,boxShadowBlur:c,boxShadowSpread:m,boxShadowPosition:h}=e;let f;const M=a?"active":"";a&&(f=_.a.createElement("div",{className:"uagb-box-shadow-advanced"},_.a.createElement("div",{className:"uagb-shadow-color"},_.a.createElement(i.a,{label:g.title,colorValue:g.value,onColorChange:e=>l({[g.label]:e})})),_.a.createElement("div",{className:"uagb-horizontal-wrap"},_.a.createElement(n.a,{label:s.title,value:s.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:s.value,label:s.label},onChange:!1})),_.a.createElement("div",{className:"uagb-vertical-wrap"},_.a.createElement(n.a,{label:d.title,value:d.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:d.value,label:d.label},onChange:!1})),_.a.createElement("div",{className:"uagb-blur-wrap"},_.a.createElement(n.a,{label:c.title,value:c.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:c.value,label:c.label},onChange:!1})),_.a.createElement("div",{className:"uagb-spread-wrap"},_.a.createElement(n.a,{label:m.title,value:m.value,min:-100,max:100,displayUnit:!1,setAttributes:l,data:{value:m.value,label:m.label},onChange:!1})),_.a.createElement("div",{className:"uagb-shadow-type"},_.a.createElement(u.a,{setAttributes:l,label:h.title,data:{value:h.value,label:h.label},options:[{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const O=_.a.createElement("div",{className:"uag-box-shadow-option-actions"},_.a.createElement("span",{className:"uag-control-label"},Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg")),_.a.createElement(r.Button,{className:"uag-box-shadow-button","aria-pressed":a,onClick:()=>t(!a)},_.a.createElement(r.Dashicon,{icon:"edit"})));return _.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+M},O,a&&f)}},315:function(e,a,t){"use strict";var l=t(14),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-select-control--layout-inline .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n",""]),a.a=o},316:function(e,a,t){"use strict";var l=t(14),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".block-editor-image-size-control {\n  margin-bottom: 1em; }\n  .block-editor-image-size-control .block-editor-image-size-control__row {\n    display: flex;\n    justify-content: space-between; }\n    .block-editor-image-size-control .block-editor-image-size-control__row .block-editor-image-size-control__width,\n    .block-editor-image-size-control .block-editor-image-size-control__row .block-editor-image-size-control__height {\n      margin-bottom: 0.5em; }\n      .block-editor-image-size-control .block-editor-image-size-control__row .block-editor-image-size-control__width input,\n      .block-editor-image-size-control .block-editor-image-size-control__row .block-editor-image-size-control__height input {\n        line-height: 1.25; }\n    .block-editor-image-size-control .block-editor-image-size-control__row .block-editor-image-size-control__width {\n      margin-right: 5px; }\n    .block-editor-image-size-control .block-editor-image-size-control__row .block-editor-image-size-control__height {\n      margin-left: 5px; }\n",""]),a.a=o},507:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return Y}));var l,o=t(0),n=t.n(o),i=t(8),r=t(31),b=t(12),u=t(79),g=t(24),s=t(16),d=t(51),c=t(18),m=t(77),h=t(200),p=t(206),v=t(9),_=t(1),f=t(19),M=t(6),O=t(13),j=t.n(O),T=t(315),y=0,w={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},S={};S.locals=T.a.locals||{},S.use=function(){return y++||(l=j()(T.a,w)),S},S.unuse=function(){y>0&&!--y&&(l(),l=null)};var x=S,E=t(36),C=t.n(E);const B={label:C.a.string,layout:C.a.string,options:C.a.array,data:C.a.object,setAttributes:C.a.func};function k(e){let{layout:a,label:t,options:l,data:i,setAttributes:r}=e;return Object(o.useLayoutEffect)(()=>(x.use(),()=>{x.unuse()}),[]),n.a.createElement("div",{className:"uagb-select-control uagb-select-control--layout-"+a},n.a.createElement(M.SelectControl,{label:t,value:i.value,onChange:e=>r({[i.label]:e}),options:l}))}k.propTypes=B,k.defaultProps={layout:"inline"};var z,L=t(4),R=t(11),H=t(316),F=0,A={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},I={};I.locals=H.a.locals||{},I.use=function(){return F++||(z=j()(H.a,A)),I},I.unuse=function(){F>0&&!--F&&(z(),z=null)};var U=I,N=t(2),W=t(10),P=t(65);const D=[25,50,75,100];function V(e){let{imageWidth:a,imageHeight:t,imageSizeOptions:l=[],isResizable:i=!0,slug:r,width:b,widthTablet:u,widthMobile:g,height:s,heightTablet:d,heightMobile:c,setAttributes:m,onChange:h,onChangeImage:p}=e;Object(o.useLayoutEffect)(()=>(U.use(),()=>{U.unuse()}),[]);const v=Object(W.a)(),{currentHeight:f,currentWidth:O,updateDimension:j,updateDimensions:T}=function(e,a,t,l,o){const[n,i]=Object(N.useState)(a||l||""),[r,b]=Object(N.useState)(e||t||"");return Object(N.useEffect)(()=>{void 0===a&&void 0!==l&&i(l),void 0===e&&void 0!==t&&b(t)},[l,t]),Object(N.useEffect)(()=>{void 0!==a&&Number.parseInt(a)!==Number.parseInt(n)&&i(a),void 0!==e&&Number.parseInt(e)!==Number.parseInt(r)&&b(e)},[a,e]),{currentHeight:r,currentWidth:n,updateDimension:(e,a)=>{"width"===e?i(a):b(a),o({[e]:""===a?void 0:parseInt(a,10)})},updateDimensions:(e,a)=>{b(e||t||""),b(a||l||""),o({height:e,width:a})}}}(s,b,t,a,h),y={};return y.Desktop=n.a.createElement(n.a.Fragment,null,n.a.createElement(M.TextControl,{type:"number",className:"block-editor-image-size-control__width",label:Object(_.__)("Width"),value:O,min:1,onChange:e=>j("width",e)}),n.a.createElement(M.TextControl,{type:"number",className:"block-editor-image-size-control__height",label:Object(_.__)("Height"),value:f,min:1,onChange:e=>j("height",e)})),y.Tablet=n.a.createElement(n.a.Fragment,null,n.a.createElement(M.TextControl,{type:"number",className:"block-editor-image-size-control__width",label:Object(_.__)("Width"),value:u,min:1,onChange:e=>m({widthTablet:e})}),n.a.createElement(M.TextControl,{type:"number",className:"block-editor-image-size-control__height",label:Object(_.__)("Height"),value:d,min:1,onChange:e=>m({heightTablet:e})})),y.Mobile=n.a.createElement(n.a.Fragment,null,n.a.createElement(M.TextControl,{type:"number",className:"block-editor-image-size-control__width",label:Object(_.__)("Width"),value:g,min:1,onChange:e=>m({widthMobile:e})}),n.a.createElement(M.TextControl,{type:"number",className:"block-editor-image-size-control__height",label:Object(_.__)("Height"),value:c,min:1,onChange:e=>m({heightMobile:e})})),n.a.createElement(n.a.Fragment,null,0!==l.length&&n.a.createElement(M.SelectControl,{label:Object(_.__)("Image size"),value:r,options:l,onChange:p}),i&&n.a.createElement("div",{className:"block-editor-image-size-control"},n.a.createElement(P.a,{label:Object(_.__)("Image dimensions"),responsive:!0}),n.a.createElement("div",{className:"block-editor-image-size-control__row"},y[v]),n.a.createElement("div",{className:"block-editor-image-size-control__row"},n.a.createElement(M.ButtonGroup,{"aria-label":Object(_.__)("Image size presets")},D.map(e=>{const l=Math.round(a*(e/100)),o=Math.round(t*(e/100)),i=O===l&&f===o;return n.a.createElement(M.Button,{key:e,isSmall:!0,variant:i?"primary":void 0,isPressed:i,onClick:()=>((e,a)=>{"Tablet"===v?m({widthTablet:a,heightTablet:e}):"Mobile"===v?m({widthMobile:a,heightMobile:e}):T(e,a)})(o,l)},e,"%")})),n.a.createElement(M.Button,{isSmall:!0,onClick:()=>T()},n.a.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"})))))}var G=t(194),J=t(15);function X(){return(X=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function Y(e){var a,t;e=e.parentProps;const{attributes:l,setAttributes:O,deviceType:j,context:T,isSelected:y,clientId:w}=e,{layout:S,id:x,width:E,widthTablet:C,widthMobile:B,height:z,heightTablet:H,heightMobile:F,align:A,alt:I,sizeSlug:U,imageTopMargin:N,imageRightMargin:W,imageLeftMargin:P,imageBottomMargin:D,imageTopMarginTablet:Y,imageRightMarginTablet:Z,imageLeftMarginTablet:q,imageBottomMarginTablet:K,imageTopMarginMobile:Q,imageRightMarginMobile:$,imageLeftMarginMobile:ee,imageBottomMarginMobile:ae,imageMarginUnit:te,imageMarginUnitTablet:le,imageMarginUnitMobile:oe,imageMarginLink:ne,captionShowOn:ie,captionLoadGoogleFonts:re,captionAlign:be,captionFontFamily:ue,captionFontWeight:ge,captionFontStyle:se,captionFontSize:de,captionColor:ce,captionTransform:me,captionDecoration:he,captionFontSizeType:pe,captionFontSizeMobile:ve,captionFontSizeTablet:_e,captionLineHeight:fe,captionLineHeightType:Me,captionLineHeightMobile:Oe,captionLineHeightTablet:je,captionTopMargin:Te,captionRightMargin:ye,captionLeftMargin:we,captionBottomMargin:Se,captionTopMarginTablet:xe,captionRightMarginTablet:Ee,captionLeftMarginTablet:Ce,captionBottomMarginTablet:Be,captionTopMarginMobile:ke,captionRightMarginMobile:ze,captionLeftMarginMobile:Le,captionBottomMarginMobile:Re,captionMarginUnit:He,captionMarginUnitTablet:Fe,captionMarginUnitMobile:Ae,captionMarginLink:Ie,headingTag:Ue,headingShowOn:Ne,headingLoadGoogleFonts:We,headingFontFamily:Pe,headingFontWeight:De,headingFontStyle:Ve,headingFontSize:Ge,headingColor:Je,headingTransform:Xe,headingDecoration:Ye,headingFontSizeType:Ze,headingFontSizeMobile:qe,headingFontSizeTablet:Ke,headingLineHeight:Qe,headingLineHeightType:$e,headingLineHeightMobile:ea,headingLineHeightTablet:aa,headingTopMargin:ta,headingRightMargin:la,headingLeftMargin:oa,headingBottomMargin:na,headingTopMarginTablet:ia,headingRightMarginTablet:ra,headingLeftMarginTablet:ba,headingBottomMarginTablet:ua,headingTopMarginMobile:ga,headingRightMarginMobile:sa,headingLeftMarginMobile:da,headingBottomMarginMobile:ca,headingMarginUnit:ma,headingMarginUnitTablet:ha,headingMarginUnitMobile:pa,headingMarginLink:va,overlayPositionFromEdge:_a,overlayPositionFromEdgeUnit:fa,overlayContentPosition:Ma,overlayBackground:Oa,overlayOpacity:ja,overlayHoverOpacity:Ta,overlayBorderStyle:ya,overlayBorderWidth:wa,overlayBorderRadius:Sa,overlayBorderColor:xa,overlayBorderHoverColor:Ea,seperatorShowOn:Ca,seperatorStyle:Ba,seperatorWidth:ka,separatorWidthType:za,seperatorThickness:La,seperatorThicknessUnit:Ra,seperatorPosition:Ha,seperatorColor:Fa,seperatorTopMargin:Aa,seperatorRightMargin:Ia,seperatorLeftMargin:Ua,seperatorBottomMargin:Na,seperatorTopMarginTablet:Wa,seperatorRightMarginTablet:Pa,seperatorLeftMarginTablet:Da,seperatorBottomMarginTablet:Va,seperatorTopMarginMobile:Ga,seperatorRightMarginMobile:Ja,seperatorLeftMarginMobile:Xa,seperatorBottomMarginMobile:Ya,seperatorMarginUnit:Za,seperatorMarginUnitTablet:qa,seperatorMarginUnitMobile:Ka,seperatorMarginLink:Qa,imageHoverEffect:$a,imageBorderWidth:et,imageBorderStyle:at,imageBorderRadius:tt,imageBorderColor:lt,imageBorderhoverColor:ot,imageBoxShadowColor:nt,imageBoxShadowHOffset:it,imageBoxShadowVOffset:rt,imageBoxShadowBlur:bt,imageBoxShadowSpread:ut,imageBoxShadowPosition:gt,maskShape:st,maskCustomShape:dt,maskSize:ct,maskPosition:mt,maskRepeat:ht}=l,{imageSizes:pt}=Object(v.useSelect)(e=>{const{getSettings:a}=e(L.store),{imageSizes:t}=a();return{imageSizes:t}},[w]),{image:vt}=Object(v.useSelect)(e=>{const{getMedia:a}=e(G.store);return{image:x&&y?a(x):null}},[x,y]),{allowResize:_t=!0}=T,ft=Object(b.useViewportMatch)("medium"),Mt=["wide","full"].includes(A),Ot=_t&&!(Mt&&ft),jt=pt.reduce((e,a)=>(e.push({value:a.slug,label:a.name}),e),[]),Tt=n.a.createElement(J.a,{title:Object(_.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(f.a,{setAttributes:O,label:Object(_.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:S,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"default",label:Object(_.__)("Normal","ultimate-addons-for-gutenberg")},{value:"overlay",label:Object(_.__)("Overlay","ultimate-addons-for-gutenberg")}],showIcons:!1}),x&&y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(V,{onChangeImage:function(e){var a;const t=null==vt||null===(a=vt.media_details)||void 0===a?void 0:a.sizes[e];if(!t)return null;O({url:null==t?void 0:t.source_url,width:null==t?void 0:t.width,height:null==t?void 0:t.height,sizeSlug:e})},onChange:e=>O(e),slug:U,width:E,widthTablet:C,widthMobile:B,height:z,heightTablet:H,heightMobile:F,setAttributes:O,imageSizeOptions:jt,isResizable:Ot,imageWidth:null==vt||null===(a=vt.media_details)||void 0===a?void 0:a.width,imageHeight:null==vt||null===(t=vt.media_details)||void 0===t?void 0:t.height}),n.a.createElement(M.TextControl,{label:Object(_.__)("Alt Text","ultimate-addons-for-gutenberg"),value:I,onChange:e=>O({alt:e})})),n.a.createElement(M.SelectControl,{label:Object(_.__)("On Hover Image","ultimate-addons-for-gutenberg"),value:$a,onChange:e=>O({imageHoverEffect:e}),options:[{value:"static",label:Object(_.__)("Static","ultimate-addons-for-gutenberg")},{value:"zoomin",label:Object(_.__)("Zoom In","ultimate-addons-for-gutenberg")},{value:"slide",label:Object(_.__)("Slide","ultimate-addons-for-gutenberg")},{value:"grayscale",label:Object(_.__)("Gray Scale","ultimate-addons-for-gutenberg")},{value:"blur",label:Object(_.__)("Blur","ultimate-addons-for-gutenberg")}]})),yt=n.a.createElement(J.a,{title:Object(_.__)("Mask","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(k,{label:Object(_.__)("Mask Shape","ultimate-addons-for-gutenberg"),data:{value:st,label:"maskShape"},setAttributes:O,options:[{value:"none",label:Object(_.__)("None","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(_.__)("Circle","ultimate-addons-for-gutenberg")},{value:"diamond",label:Object(_.__)("Diamond","ultimate-addons-for-gutenberg")},{value:"hexagon",label:Object(_.__)("Hexagon","ultimate-addons-for-gutenberg")},{value:"rounded",label:Object(_.__)("Rounded","ultimate-addons-for-gutenberg")},{value:"blob1",label:Object(_.__)("Blob 1","ultimate-addons-for-gutenberg")},{value:"blob2",label:Object(_.__)("Blob 2","ultimate-addons-for-gutenberg")},{value:"blob3",label:Object(_.__)("Blob 3","ultimate-addons-for-gutenberg")},{value:"blob4",label:Object(_.__)("Blob 4","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(_.__)("Custom","ultimate-addons-for-gutenberg")}]}),"custom"===st&&n.a.createElement(h.a,{label:Object(_.__)("Custom Mask Image","ultimate-addons-for-gutenberg"),onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&O({maskCustomShape:e}):O({maskCustomShape:null})},backgroundImage:dt,onRemoveImage:()=>{O({maskCustomShape:null})}}),"none"!==st&&n.a.createElement(n.a.Fragment,null,n.a.createElement(k,{label:Object(_.__)("Mask Size","ultimate-addons-for-gutenberg"),data:{value:ct,label:"maskSize"},setAttributes:O,options:[{value:"auto",label:Object(_.__)("Auto","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(_.__)("Contain","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(_.__)("Cover","ultimate-addons-for-gutenberg")}]}),n.a.createElement(k,{label:Object(_.__)("Mask Position","ultimate-addons-for-gutenberg"),data:{value:mt,label:"maskPosition"},setAttributes:O,options:[{value:"center top",label:Object(_.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(_.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(_.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left top",label:Object(_.__)("Left Top","ultimate-addons-for-gutenberg")},{value:"left center",label:Object(_.__)("Left Center","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(_.__)("Left Bottom","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(_.__)("Right Top","ultimate-addons-for-gutenberg")},{value:"right center",label:Object(_.__)("Right Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(_.__)("Right Bottom","ultimate-addons-for-gutenberg")}]}),n.a.createElement(k,{label:Object(_.__)("Mask Repeat","ultimate-addons-for-gutenberg"),data:{value:ht,label:"maskRepeat"},setAttributes:O,options:[{value:"no-repeat",label:Object(_.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(_.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(_.__)("Repeat-X","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(_.__)("Repeat-Y","ultimate-addons-for-gutenberg")}]}))),wt=n.a.createElement(J.a,{title:Object(_.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},"none"!==Ba&&n.a.createElement(f.a,{setAttributes:O,label:Object(_.__)("Show On","ultimate-addons-for-gutenberg"),data:{value:Ca,label:"seperatorShowOn"},className:"uagb-multi-button-alignment-control",options:[{value:"always",label:Object(_.__)("Always","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(_.__)("Hover","ultimate-addons-for-gutenberg")}],showIcons:!1}),n.a.createElement(M.SelectControl,{label:Object(_.__)("Style"),value:Ba,onChange:e=>O({seperatorStyle:e}),options:[{value:"none",label:Object(_.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(_.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(_.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(_.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(_.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==Ba&&n.a.createElement(M.SelectControl,{label:Object(_.__)("Position","ultimate-addons-for-gutenberg"),value:Ha,onChange:e=>O({seperatorPosition:e}),options:[{value:"before_title",label:Object(_.__)("Before Title","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(_.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_sub_title",label:Object(_.__)("After Sub Title","ultimate-addons-for-gutenberg")}]})),St=n.a.createElement(J.a,{title:Object(_.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(f.a,{setAttributes:O,label:Object(_.__)("Show On","ultimate-addons-for-gutenberg"),data:{value:Ne,label:"headingShowOn"},className:"uagb-multi-button-alignment-control",options:[{value:"always",label:Object(_.__)("Always","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(_.__)("Hover","ultimate-addons-for-gutenberg")}],showIcons:!1})),xt=n.a.createElement(J.a,{title:Object(_.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(f.a,{setAttributes:O,label:Object(_.__)("Show On","ultimate-addons-for-gutenberg"),data:{value:ie,label:"captionShowOn"},className:"uagb-multi-button-alignment-control",options:[{value:"always",label:Object(_.__)("Always","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(_.__)("Hover","ultimate-addons-for-gutenberg")}],showIcons:!1})),Et=n.a.createElement(J.a,{title:Object(_.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(f.a,{setAttributes:O,label:Object(_.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:Ue,label:"headingTag"},options:[{value:"h1",label:Object(_.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(_.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(_.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(_.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(_.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(_.__)("H6","ultimate-addons-for-gutenberg")}]}),n.a.createElement(o.Suspense,{fallback:Object(i.a)()},n.a.createElement(r.a,{label:Object(_.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:O,loadGoogleFonts:{value:We,label:"headingLoadGoogleFonts"},fontFamily:{value:Pe,label:"headingFontFamily"},fontWeight:{value:De,label:"headingFontWeight"},fontStyle:{value:Ve,label:"headingFontStyle"},transform:{value:Xe,label:"headingTransform"},decoration:{value:Ye,label:"headingDecoration"},fontSizeType:{value:Ze,label:"headingFontSizeType"},fontSize:{value:Ge,label:"headingFontSize"},fontSizeMobile:{value:qe,label:"headingFontSizeMobile"},fontSizeTablet:{value:Ke,label:"headingFontSizeTablet"},lineHeightType:{value:$e,label:"headingLineHeightType"},lineHeight:{value:Qe,label:"headingLineHeight"},lineHeightMobile:{value:ea,label:"headingLineHeightMobile"},lineHeightTablet:{value:aa,label:"headingLineHeightTablet"}})),n.a.createElement(s.a,{label:Object(_.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Je||"",onColorChange:e=>O({headingColor:e})}),n.a.createElement(d.a,{label:Object(_.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:ta,label:"headingTopMargin"},valueRight:{value:la,label:"headingRightMargin"},valueBottom:{value:na,label:"headingBottomMargin"},valueLeft:{value:oa,label:"headingLeftMargin"},valueTopTablet:{value:ia,label:"headingTopMarginTablet"},valueRightTablet:{value:ra,label:"headingRightMarginTablet"},valueBottomTablet:{value:ua,label:"headingBottomMarginTablet"},valueLeftTablet:{value:ba,label:"headingLeftMarginTablet"},valueTopMobile:{value:ga,label:"headingTopMarginMobile"},valueRightMobile:{value:sa,label:"headingRightMarginMobile"},valueBottomMobile:{value:ca,label:"headingBottomMarginMobile"},valueLeftMobile:{value:da,label:"headingLeftMarginMobile"},unit:{value:ma,label:"headingMarginUnit"},mUnit:{value:pa,label:"headingMarginUnitMobile"},tUnit:{value:ha,label:"headingMarginUnitTablet"},deviceType:j,attributes:l,setAttributes:O,link:{value:va,label:"headingMarginLink"}})),Ct=n.a.createElement(J.a,{title:"overlay"===S?Object(_.__)("Description","ultimate-addons-for-gutenberg"):Object(_.__)("Caption","ultimate-addons-for-gutenberg"),initialOpen:!0},"default"===S&&n.a.createElement(f.a,{setAttributes:O,label:Object(_.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:be,label:"captionAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(M.Icon,{icon:Object(R.a)("fa fa-align-left")}),tooltip:Object(_.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(M.Icon,{icon:Object(R.a)("fa fa-align-center")}),tooltip:Object(_.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(M.Icon,{icon:Object(R.a)("fa fa-align-right")}),tooltip:Object(_.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),n.a.createElement(o.Suspense,{fallback:Object(i.a)()},n.a.createElement(r.a,{label:Object(_.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:O,loadGoogleFonts:{value:re,label:"captionLoadGoogleFonts"},fontFamily:{value:ue,label:"captionFontFamily"},fontWeight:{value:ge,label:"captionFontWeight"},fontStyle:{value:se,label:"captionFontStyle"},transform:{value:me,label:"captionTransform"},decoration:{value:he,label:"captionDecoration"},fontSizeType:{value:pe,label:"captionFontSizeType"},fontSize:{value:de,label:"captionFontSize"},fontSizeMobile:{value:ve,label:"captionFontSizeMobile"},fontSizeTablet:{value:_e,label:"captionFontSizeTablet"},lineHeightType:{value:Me,label:"captionLineHeightType"},lineHeight:{value:fe,label:"captionLineHeight"},lineHeightMobile:{value:Oe,label:"captionLineHeightMobile"},lineHeightTablet:{value:je,label:"captionLineHeightTablet"}})),n.a.createElement(s.a,{label:Object(_.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ce||"",onColorChange:e=>O({captionColor:e})}),n.a.createElement(d.a,{label:Object(_.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Te,label:"captionTopMargin"},valueRight:{value:ye,label:"captionRightMargin"},valueBottom:{value:Se,label:"captionBottomMargin"},valueLeft:{value:we,label:"captionLeftMargin"},valueTopTablet:{value:xe,label:"captionTopMarginTablet"},valueRightTablet:{value:Ee,label:"captionRightMarginTablet"},valueBottomTablet:{value:Be,label:"captionBottomMarginTablet"},valueLeftTablet:{value:Ce,label:"captionLeftMarginTablet"},valueTopMobile:{value:ke,label:"captionTopMarginMobile"},valueRightMobile:{value:ze,label:"captionRightMarginMobile"},valueBottomMobile:{value:Re,label:"captionBottomMarginMobile"},valueLeftMobile:{value:Le,label:"captionLeftMarginMobile"},unit:{value:He,label:"captionMarginUnit"},mUnit:{value:Ae,label:"captionMarginUnitMobile"},tUnit:{value:Fe,label:"captionMarginUnitTablet"},deviceType:j,attributes:l,setAttributes:O,link:{value:Ie,label:"captionMarginLink"}})),Bt=n.a.createElement(J.a,{title:Object(_.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(f.a,{setAttributes:O,label:Object(_.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:A,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(M.Icon,{icon:Object(R.a)("fa fa-align-left")}),tooltip:Object(_.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(M.Icon,{icon:Object(R.a)("fa fa-align-center")}),tooltip:Object(_.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(M.Icon,{icon:Object(R.a)("fa fa-align-right")}),tooltip:Object(_.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),"default"===S&&n.a.createElement(m.a,{setAttributes:O,borderStyle:{value:at,label:"imageBorderStyle",title:Object(_.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:et,label:"imageBorderWidth",title:Object(_.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:tt,label:"imageBorderRadius",title:Object(_.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:lt,label:"imageBorderColor",title:Object(_.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:ot,label:"imageBorderhoverColor",title:Object(_.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}),"overlay"===S&&n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:"overlayContentAlign"},Object(_.__)("Content Postion","ultimate-addons-for-gutenberg")),n.a.createElement(M.__experimentalAlignmentMatrixControl,{id:"overlayContentAlign",value:Ma,onChange:e=>O({overlayContentPosition:e})}),n.a.createElement(m.a,{setAttributes:O,borderStyle:{value:ya,label:"overlayBorderStyle",title:Object(_.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:wa,label:"overlayBorderWidth",title:Object(_.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Sa,label:"overlayBorderRadius",title:Object(_.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:xa,label:"overlayBorderColor",title:Object(_.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Ea,label:"overlayBorderHoverColor",title:Object(_.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!1}),n.a.createElement(c.a,{label:Object(_.__)("Border Distance From EDGE","ultimate-addons-for-gutenberg"),setAttributes:O,value:_a,onChange:e=>O({overlayPositionFromEdge:e}),min:0,max:100,unit:{value:fa,label:"overlayPositionFromEdgeUnit"}})),n.a.createElement(d.a,{label:Object(_.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:N,label:"imageTopMargin"},valueRight:{value:W,label:"imageRightMargin"},valueBottom:{value:D,label:"imageBottomMargin"},valueLeft:{value:P,label:"imageLeftMargin"},valueTopTablet:{value:Y,label:"imageTopMarginTablet"},valueRightTablet:{value:Z,label:"imageRightMarginTablet"},valueBottomTablet:{value:K,label:"imageBottomMarginTablet"},valueLeftTablet:{value:q,label:"imageLeftMarginTablet"},valueTopMobile:{value:Q,label:"imageTopMarginMobile"},valueRightMobile:{value:$,label:"imageRightMarginMobile"},valueBottomMobile:{value:ae,label:"imageBottomMarginMobile"},valueLeftMobile:{value:ee,label:"imageLeftMarginMobile"},unit:{value:te,label:"imageMarginUnit"},mUnit:{value:oe,label:"imageMarginUnitMobile"},tUnit:{value:le,label:"imageMarginUnitTablet"},deviceType:j,attributes:l,setAttributes:O,link:{value:ne,label:"imageMarginLink"}}),"static"===$a&&n.a.createElement(p.a,{setAttributes:O,label:Object(_.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:nt,label:"imageBoxShadowColor",title:Object(_.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:it,label:"imageBoxShadowHOffset",title:Object(_.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:rt,label:"imageBoxShadowVOffset",title:Object(_.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:bt,label:"imageBoxShadowBlur",title:Object(_.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:ut,label:"imageBoxShadowSpread",title:Object(_.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:gt,label:"imageBoxShadowPosition",title:Object(_.__)("Position","ultimate-addons-for-gutenberg")}})),kt=n.a.createElement(J.a,{title:Object(_.__)("Overlay","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(s.a,{label:Object(_.__)("Background","ultimate-addons-for-gutenberg"),colorValue:Oa||"",onColorChange:e=>O({overlayBackground:e})}),n.a.createElement(M.RangeControl,{label:Object(_.__)("Overlay Opacity","ultimate-addons-for-gutenberg"),value:ja,onChange:e=>O({overlayOpacity:e}),min:0,max:1,step:.1}),n.a.createElement(M.RangeControl,{label:Object(_.__)("Overlay Hover Opacity","ultimate-addons-for-gutenberg"),value:Ta,onChange:e=>O({overlayHoverOpacity:e}),min:0,max:1,step:.1})),zt=n.a.createElement(J.a,{title:"Separator",initialOpen:!1},n.a.createElement(c.a,{label:Object(_.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:O,value:ka,onChange:e=>O({seperatorWidth:e}),min:0,max:"%"===za?100:500,unit:{value:za,label:"separatorWidthType"},units:[{name:Object(_.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(_.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(_.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),n.a.createElement(c.a,{label:Object(_.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:O,value:La,onChange:e=>O({seperatorThickness:e}),min:0,max:10,unit:{value:Ra,label:"seperatorThicknessUnit"}}),n.a.createElement(s.a,{label:Object(_.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Fa||"",onColorChange:e=>O({seperatorColor:e})}),n.a.createElement(d.a,X({},e,{label:Object(_.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Aa,label:"seperatorTopMargin"},valueRight:{value:Ia,label:"seperatorRightMargin"},valueBottom:{value:Na,label:"seperatorBottomMargin"},valueLeft:{value:Ua,label:"seperatorLeftMargin"},valueTopTablet:{value:Wa,label:"seperatorTopMarginTablet"},valueRightTablet:{value:Pa,label:"seperatorRightMarginTablet"},valueBottomTablet:{value:Va,label:"seperatorBottomMarginTablet"},valueLeftTablet:{value:Da,label:"seperatorLeftMarginTablet"},valueTopMobile:{value:Ga,label:"seperatorTopMarginMobile"},valueRightMobile:{value:Ja,label:"seperatorRightMarginMobile"},valueBottomMobile:{value:Ya,label:"seperatorBottomMarginMobile"},valueLeftMobile:{value:Xa,label:"seperatorLeftMarginMobile"},unit:{value:Za,label:"seperatorMarginUnit"},mUnit:{value:Ka,label:"seperatorMarginUnitMobile"},tUnit:{value:qa,label:"seperatorMarginUnitTablet"},deviceType:j,attributes:l,setAttributes:O,link:{value:Qa,label:"seperatorMarginLink"}})));return n.a.createElement(n.a.Fragment,null,n.a.createElement(L.InspectorControls,null,n.a.createElement(u.a,null,n.a.createElement(g.b,g.a.general,Tt,yt,"overlay"===S&&n.a.createElement(n.a.Fragment,null,St,xt,wt)),n.a.createElement(g.b,g.a.style,Bt,"overlay"===S&&n.a.createElement(n.a.Fragment,null,kt,Et),Ct,"none"!==Ba&&"overlay"===S&&zt),n.a.createElement(g.b,X({},g.a.advance,{parentProps:e})))))}}}]);