(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[94],{211:function(e,a,t){"use strict";var l=t(1),o=t(7),n=t(5),u=t(0),i=t.n(u),r=t(8);a.a=e=>{const{onSelectImage:a,backgroundImage:t,onRemoveImage:u,showVideoInput:b,label:c,disableRemove:g=!1,allow:s=["image"]}=e;let d,m=Object(l.__)("Image","ultimate-addons-for-gutenberg"),p=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Image","ultimate-addons-for-gutenberg"),_=["image"];b&&(m=Object(l.__)("Video","ultimate-addons-for-gutenberg"),p=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Video","ultimate-addons-for-gutenberg"),_=["video"],d=r.a.video_placeholder),m=c||m,m=!1===c?c:m,"Lottie Animation"===c&&(p=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),_=s,d=r.a.lottie);const f=e=>i.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},r.a[e]);return i.a.createElement(o.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+c,label:m},i.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!d&&(null==t?void 0:t.url)&&`url("${(e=>{let a=e;switch(/(?:\.([^.]+))?$/.exec(String(a))[1]){case"json":a="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":a=""}return a})(null==t?void 0:t.url)}")`}},d&&(null==t?void 0:t.url)&&i.a.createElement("div",{className:"spectra-media-control__icon"},d),i.a.createElement(n.MediaUpload,{title:p,onSelect:a,allowedTypes:_,value:t,render:e=>{let{open:a}=e;return(e=>{const a=null!=t&&t.url?"replace":"add";return i.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+a,onClick:e},"add"===a?f(a):i.a.createElement("div",{className:"uag-control-label"},v))})(a)}}),!g&&(null==t?void 0:t.url)&&i.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:u},f("close"))),e.help&&i.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},214:function(e,a,t){"use strict";var l,o=t(0),n=t.n(o),u=t(7),i=t(11),r=t(49),b=t(14),c=t.n(b),g=t(216),s=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return s++||(l=c()(g.a,d)),m},m.unuse=function(){s>0&&!--s&&(l(),l=null)};var p=m;a.a=e=>{Object(o.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const{label:a,data:t,setAttributes:l,options:b}=e,c=Object(i.a)(),g={};return g.Desktop=n.a.createElement(u.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:b.desktop}),g.Tablet=n.a.createElement(u.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:b.tablet||b.desktop}),g.Mobile=n.a.createElement(u.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:b.mobile||b.desktop}),n.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},n.a.createElement("div",{className:"uagb-size-type-field-tabs"},n.a.createElement("div",{className:"uagb-control__header"},n.a.createElement(r.a,{label:a,responsive:!0})),g[c]?g[c]:g.Desktop),e.help&&n.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},215:function(e,a,t){"use strict";var l=t(1),o=t(24),n=t(17),u=t(7),i=t(2),r=t(23),b=t(0),c=t.n(b),g=t(9),s=t(21),d=t(26);a.a=e=>{const[a,t]=Object(i.useState)(!1);Object(b.useLayoutEffect)(()=>{window.addEventListener("click",(function(e){var a,l,o,n,u,i;const r=document.querySelector(`.active.popup-${E} .spectra-control-popup__options--action-button`),b=document.querySelector(`.active.popup-${E} .spectra-control-popup`);if(r&&(null==r||!r.contains(e.target))&&b&&(null==b||!b.contains(e.target))&&(null===(a=e.target)||void 0===a||null===(l=a.classList)||void 0===l||!l.contains("uagb-advanced-color-indicate"))&&(null===(o=e.target)||void 0===o||null===(n=o.parentElement)||void 0===n||!n.closest(".uagb-popover-color"))&&(null===(u=e.target)||void 0===u||null===(i=u.parentElement)||void 0===i||!i.closest(".uagb-reset"))){var c;t(!1);const e=null===(c=S())||void 0===c?void 0:c.name,a=Object(s.a)("uagSettingState"),l={...a,[e]:{...null==a?void 0:a[e],selectedSetting:!1}},o=Object(s.a)();o&&o.setItem("uagSettingState",JSON.stringify(l))}}))},[]);const{setAttributes:m,boxShadowColor:p,boxShadowHOffset:v,boxShadowVOffset:_,boxShadowBlur:f,boxShadowSpread:k,boxShadowPosition:y,label:h=Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),popup:O=!1,blockId:E}=e;let j;const T=a?"active":"",x=[p.label,v.label,_.label,f.label,k.label,y.label],{getSelectedBlock:S}=Object(g.select)("core/block-editor"),P=O&&(()=>{var e;const a=(()=>{var e;const a=null===(e=S())||void 0===e?void 0:e.name.replace("uagb/","");let t=!1;return void 0!==d.a[a]&&x.forEach(e=>{if(e){var l,o;const n=void 0!==(null===(l=d.a[a][e])||void 0===l?void 0:l.default)?null===(o=d.a[a][e])||void 0===o?void 0:o.default:"";t={...t,[e]:n}}}),t})(),t=null===(e=S())||void 0===e?void 0:e.attributes;let l=!1;return x.forEach(e=>{null!=t&&t[e]&&(null==t?void 0:t[e])!==(null==a?void 0:a[e])&&(l=!0)}),l})(),M=c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,{label:p.title,colorValue:p.value,data:{value:p.value,label:p.label},setAttributes:m}),c.a.createElement(o.a,{label:v.title,value:v.value,min:-100,max:100,displayUnit:!1,setAttributes:m,data:{value:v.value,label:v.label}}),c.a.createElement(o.a,{label:_.title,value:_.value,min:-100,max:100,displayUnit:!1,setAttributes:m,data:{value:_.value,label:_.label}}),c.a.createElement(o.a,{label:f.title,value:f.value,min:0,max:100,displayUnit:!1,setAttributes:m,data:{value:f.value,label:f.label}}),c.a.createElement(o.a,{label:k.title,value:k.value,min:-100,max:100,displayUnit:!1,setAttributes:m,data:{value:k.value,label:k.label}}),c.a.createElement(r.a,{setAttributes:m,label:y.title,data:{value:y.value,label:y.label},options:[{value:"outset",label:Object(l.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(l.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}));a&&(j=c.a.createElement("div",{className:"uagb-box-shadow-advanced spectra-control-popup"},M));const C=c.a.createElement("div",{className:"spectra-control-popup__options--action-wrapper"},c.a.createElement("span",{className:"uag-control-label"},h,P&&c.a.createElement("div",{className:"spectra__change-indicator--dot-right"})),c.a.createElement(u.Button,{className:"uag-box-shadow-button spectra-control-popup__options--action-button","aria-pressed":a,onClick:()=>{var e;const l=document.querySelectorAll(".spectra-control-popup__options");if(l&&0<l.length)for(let e=0;e<l.length;e++){var o;const a=null===(o=l[e])||void 0===o?void 0:o.querySelector(".spectra-control-popup__options.active .spectra-control-popup__options--action-button");null==a||a.click()}t(!a);const n=null===(e=S())||void 0===e?void 0:e.name,u=Object(s.a)("uagSettingState");let i={...u,[n]:{...null==u?void 0:u[n],selectedSetting:".uag-box-shadow-options"}};a&&(i={...u,[n]:{...null==u?void 0:u[n],selectedSetting:!1}});const r=Object(s.a)();r&&r.setItem("uagSettingState",JSON.stringify(i))}},c.a.createElement(u.Dashicon,{icon:"edit"})));return O?c.a.createElement("div",{className:`components-base-control uag-box-shadow-options spectra-control-popup__options popup-${E} ${T}`},C,a&&j):c.a.createElement(c.a.Fragment,null,M)}},216:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-responsive-select-control .uagb-size-type-field-tabs {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n  .uagb-responsive-select-control .uagb-size-type-field-tabs .uagb-control__header {\n    margin-bottom: 0; }\n",""]),a.a=o},218:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-gradient-picker .components-custom-gradient-picker__gradient-bar {\n  border-radius: 5px;\n  height: 30px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__control-point-button {\n    top: 9px;\n    width: 12px;\n    height: 12px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__insert-point {\n    top: 7px; }\n",""]),a.a=o},219:function(e,a,t){"use strict";var l,o=t(14),n=t.n(o),u=t(218),i=0,r={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=u.a.locals||{},b.use=function(){return i++||(l=n()(u.a,r)),b},b.unuse=function(){i>0&&!--i&&(l(),l=null)};var c=b,g=t(7),s=t(0),d=t.n(s);a.a=e=>{Object(s.useLayoutEffect)(()=>(c.use(),()=>{c.unuse()}),[]);const{setAttributes:a,backgroundGradient:t}=e;return d.a.createElement(g.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})},className:"uagb-gradient-picker"})}},221:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,"/* stylelint-disable color-hex-case, color-hex-length */\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient,\n.uag-bg-select-control .uagb-responsive-select-control {\n  margin-top: 25px; }\n  .uag-bg-select-control .uag-background-color .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-gradient .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-opacity .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-video .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-video-overlay .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-video-opacity .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-attachment .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-repeat .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-size .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-overlay-type .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-overlay-color .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-overlay-gradient .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uagb-responsive-select-control .uagb-size-type-field-tabs {\n    display: flex;\n    justify-content: space-between; }\n    .uag-bg-select-control .uag-background-color .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-gradient .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-opacity .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-video .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-video-overlay .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-video-opacity .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-attachment .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-repeat .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-size .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-overlay-type .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-overlay-color .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-overlay-gradient .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n      width: 45%; }\n\n.uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs {\n  display: block; }\n  .uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 100%; }\n\n.uag-bg-select-control .uag-responsive-image-select.uagb-responsive-select-control .uagb-size-type-field-tabs .uagb-control__header {\n  margin-bottom: 10px; }\n\n.uag-bg-select-control .uag-background-image-overlay-type .components-select-control {\n  flex-direction: row;\n  align-items: center; }\n  .uag-bg-select-control .uag-background-image-overlay-type .components-select-control .components-input-control__container {\n    width: 45%;\n    flex: unset; }\n\n.uag-bg-select-control .uag-background-image-size .uagb-responsive-control-inner > .components-base-control {\n  display: block;\n  margin-top: 25px; }\n\n.uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs {\n  flex-direction: column;\n  align-items: flex-start; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .uagb-control__header {\n    margin-bottom: 10px; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control {\n    width: 100%; }\n    .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker {\n      border-radius: 3px;\n      border-color: #E6E7E9; }\n      .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker img {\n        border-radius: 3px; }\n    .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .focal-point-picker__controls-position-unit-control {\n      width: 115px; }\n",""]),a.a=o},223:function(e,a,t){"use strict";var l,o=t(1),n=t(17),u=t(7),i=t(14),r=t.n(i),b=t(221),c=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=b.a.locals||{},s.use=function(){return c++||(l=r()(b.a,g)),s},s.unuse=function(){c>0&&!--c&&(l(),l=null)};var d=s,m=t(219),p=t(0),v=t.n(p),_=t(211),f=t(25),k=t(214),y=t(11),h=t(49),O=e=>{const{backgroundImage:a,setAttributes:t}=e,l=Object(y.a)(),n=l.toLowerCase(),u=e=>{e&&e.url?e.type&&"image"===e.type?t({[a[n].label]:e}):t({[a[n].label]:null}):t({[a[n].label]:null})},i=()=>{t({[a[n].label]:""})},r={};return r.Desktop=v.a.createElement(_.a,{onSelectImage:u,backgroundImage:a.desktop.value,onRemoveImage:i,label:!1}),r.Tablet=v.a.createElement(_.a,{onSelectImage:u,backgroundImage:a.tablet.value,onRemoveImage:i,label:!1}),r.Mobile=v.a.createElement(_.a,{onSelectImage:u,backgroundImage:a.mobile.value,onRemoveImage:i,label:!1}),v.a.createElement("div",{className:"uag-responsive-image-select components-base-control uagb-responsive-select-control"},v.a.createElement("div",{className:"uagb-size-type-field-tabs"},v.a.createElement("div",{className:"uagb-control__header"},v.a.createElement(h.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),r[l]?r[l]:r.Desktop),e.help&&v.a.createElement("p",{className:"uag-control-help-notice"},e.help))},E=e=>{var a,t,l;const{backgroundPosition:n,backgroundImage:i,setAttributes:r}=e,b=Object(y.a)(),c=b.toLowerCase(),g={},s=null===(a=i[c])||void 0===a||null===(t=a.value)||void 0===t?void 0:t.url,d=null===(l=n[c])||void 0===l?void 0:l.value;return g.Desktop=v.a.createElement(u.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;r({[null===(a=n[c])||void 0===a?void 0:a.label]:e})}}),g.Tablet=v.a.createElement(u.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;r({[null===(a=n[c])||void 0===a?void 0:a.label]:e})}}),g.Mobile=v.a.createElement(u.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;r({[null===(a=n[c])||void 0===a?void 0:a.label]:e})}}),v.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},v.a.createElement("div",{className:"uagb-size-type-field-tabs"},v.a.createElement("div",{className:"uagb-control__header"},v.a.createElement(h.a,{label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),responsive:!0})),g[b]?g[b]:g.Desktop),e.help&&v.a.createElement("p",{className:"uag-control-help-notice"},e.help))},j=t(23),T=t(8);a.a=e=>{var a,t;Object(p.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]);const l=Object(y.a)().toLowerCase(),{setAttributes:i,backgroundImageColor:r,overlayType:b,backgroundSize:c,backgroundRepeat:g,backgroundAttachment:s,backgroundPosition:h,backgroundImage:x,backgroundColor:S,backgroundVideoType:P,backgroundType:M,backgroundVideo:C,backgroundVideoColor:w,onOpacityChange:z,backgroundCustomSize:I,backgroundCustomSizeType:N,imageResponsive:A,gradientOverlay:V,customPosition:R,xPositionDesktop:B,xPositionTablet:L,xPositionMobile:W,xPositionType:F,xPositionTypeTablet:D,xPositionTypeMobile:G,yPositionDesktop:U,yPositionTablet:H,yPositionMobile:$,yPositionType:X,yPositionTypeTablet:q,yPositionTypeMobile:J,backgroundVideoOpacity:Y}=e;let K=[];K=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Classic","ultimate-addons-for-gutenberg")}],V.value&&K.push({value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")});const Q=[{value:"color",icon:T.a.bg_color,tooltip:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",icon:T.a.bg_gradient,tooltip:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",icon:T.a.bg_image,tooltip:Object(o.__)("Image","ultimate-addons-for-gutenberg")}];let Z=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}];I||(Z=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]),P.value&&Q.push({value:"video",icon:T.a.bg_video,tooltip:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const ee=v.a.createElement(v.a.Fragment,null,v.a.createElement(j.a,{setAttributes:i,label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),data:{value:M.value,label:M.label},options:Q,showIcons:!0,colorVariant:"secondary",layoutVariant:"inline"}),"color"===M.value&&v.a.createElement("div",{className:"uag-background-color"},v.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:S.value?S.value:"",data:{value:S.value,label:S.label},setAttributes:i})),"image"===M.value&&v.a.createElement("div",{className:"uag-background-image"},!A&&v.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&i({[x.label]:e}):i({[x.label]:null})},backgroundImage:x.value,onRemoveImage:()=>{i({[x.label]:null})}}),!A&&x.value&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(u.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:h.value,onChange:e=>i({[h.label]:e}),options:[{value:"left top",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-attachment"},v.a.createElement(u.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:s.value,onChange:e=>i({[s.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-repeat"},v.a.createElement(u.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>i({[g.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-size"},v.a.createElement(u.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:c.value,onChange:e=>i({[c.label]:e}),options:Z}),"custom"===c.value&&I&&v.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:I.desktop.value,label:I.desktop.label},tablet:{value:I.tablet.value,label:I.tablet.label},mobile:{value:I.mobile.value,label:I.mobile.label}},min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:N.value,label:N.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:i}))),A&&x&&v.a.createElement(O,{backgroundImage:x,setAttributes:i}),A&&x[l]&&(null===(a=x[l])||void 0===a?void 0:a.value)&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(j.a,{setAttributes:i,label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),data:{value:R.value,label:R.label},options:[{value:"default",label:Object(o.__)("Default")},{value:"custom",label:Object(o.__)("Custom")}]})),"custom"!==R.value&&v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(E,{backgroundPosition:h,setAttributes:i,backgroundImage:x})),"custom"===R.value&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(f.a,{label:Object(o.__)("X Position","ultimate-addons-for-gutenberg"),data:{desktop:{value:B.value,label:"xPositionDesktop",unit:{value:F.value,label:"xPositionType"}},tablet:{value:L.value,label:"xPositionTablet",unit:{value:D.value,label:"xPositionTypeTablet"}},mobile:{value:W.value,label:"xPositionMobile",unit:{value:G.value,label:"xPositionTypeMobile"}}},limitMin:{px:-800,"%":-100,em:-100,vw:-100},limitMax:{px:800,"%":100,em:100,vw:100},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(o.__)("VW","ultimate-addons-for-gutenberg"),unitValue:"vw"}],setAttributes:i})),v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(f.a,{label:Object(o.__)("Y Position","ultimate-addons-for-gutenberg"),data:{desktop:{value:U.value,label:"yPositionDesktop",unit:{value:X.value,label:"yPositionType"}},tablet:{value:H.value,label:"yPositionTablet",unit:{value:q.value,label:"yPositionTypeTablet"}},mobile:{value:$.value,label:"yPositionMobile",unit:{value:J.value,label:"yPositionTypeMobile"}}},limitMin:{px:-800,"%":-100,em:-100,vw:-100},limitMax:{px:800,"%":100,em:100,vw:100},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(o.__)("VW","ultimate-addons-for-gutenberg"),unitValue:"vw"}],setAttributes:i}))),v.a.createElement("div",{className:"uag-background-image-attachment"},v.a.createElement(k.a,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),data:s,options:{desktop:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]},setAttributes:i})),v.a.createElement("div",{className:"uag-background-image-repeat"},v.a.createElement(k.a,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),data:g,options:{desktop:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]},setAttributes:i})),v.a.createElement("div",{className:"uag-background-image-size"},v.a.createElement(k.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:c,options:{desktop:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]},setAttributes:i}),"custom"===c[l].value&&I&&v.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:I,min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:N.value,label:N.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:i}))),b&&x&&(A&&(null===(t=x[l])||void 0===t?void 0:t.value)||!A&&(null==x?void 0:x.value))&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-overlay-type"},v.a.createElement(j.a,{setAttributes:i,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:b.value,label:b.label},className:"uagb-multi-button-alignment-control",options:K,showIcons:!1})),"color"===b.value&&v.a.createElement("div",{className:"uag-background-image-overlay-color"},v.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:r.value,data:{value:r.value,label:r.label},setAttributes:i})),"gradient"===b.value&&v.a.createElement("div",{className:"uag-background-image-overlay-gradient"},v.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:i})))),V.value&&"gradient"===M.value&&v.a.createElement("div",{className:"uag-background-gradient"},v.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===M.value&&P.value&&v.a.createElement("div",{className:"uag-background-video"},v.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&i({[C.label]:e}):i({[C.label]:null})},backgroundImage:C.value,onRemoveImage:()=>{i({[C.label]:null})},showVideoInput:!0})),"video"===M.value&&C.value&&P.value&&v.a.createElement("div",{className:"uag-background-video-overlay"},b&&C&&C.value&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-overlay-type"},v.a.createElement(j.a,{setAttributes:i,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:b.value,label:b.label},className:"uagb-multi-button-alignment-control",options:K,showIcons:!1})),"color"===b.value&&v.a.createElement("div",{className:"uag-background-image-overlay-color"},v.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:w.value,data:{value:w.value,label:w.label},setAttributes:i,onOpacityChange:z,backgroundVideoOpacity:{value:Y.value,label:Y.label}})),V.value&&"gradient"===b.value&&v.a.createElement("div",{className:"uag-background-image-overlay-gradient"},v.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:i})))));return v.a.createElement("div",{className:"uag-bg-select-control components-base-control"},ee)}},506:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(1),u=t(10),i=t(215),r=t(77),b=t(31),c=t(37),g=t(24),s=t(223),d=t(73),m=t(23),p=t(28),v=t(13),_=t(5),f=t(7),k=t(18);function y(){return(y=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const h=e=>{e=e.parentProps;const{attributes:a,setAttributes:t,deviceType:h}=e,{block_id:O,align:E,contentWidth:j,width:T,innerWidth:x,innerWidthType:S,tag:P,themeWidth:M,leftPadding:C,rightPadding:w,topPadding:z,bottomPadding:I,leftMargin:N,rightMargin:A,topMargin:V,bottomMargin:R,topPaddingTablet:B,bottomPaddingTablet:L,leftPaddingTablet:W,rightPaddingTablet:F,topMarginTablet:D,bottomMarginTablet:G,leftMarginTablet:U,rightMarginTablet:H,topPaddingMobile:$,bottomPaddingMobile:X,leftPaddingMobile:q,rightPaddingMobile:J,topMarginMobile:Y,bottomMarginMobile:K,leftMarginMobile:Q,rightMarginMobile:Z,backgroundType:ee,backgroundImage:ae,backgroundVideo:te,backgroundColor:le,backgroundPosition:oe,backgroundAttachment:ne,backgroundRepeat:ue,backgroundSize:ie,backgroundVideoColor:re,backgroundVideoOpacity:be,backgroundImageColor:ce,overlayType:ge,mobileMarginType:se,tabletMarginType:de,desktopMarginType:me,mobilePaddingType:pe,tabletPaddingType:ve,desktopPaddingType:_e,boxShadowColor:fe,boxShadowHOffset:ke,boxShadowVOffset:ye,boxShadowBlur:he,boxShadowSpread:Oe,boxShadowPosition:Ee,spacingLink:je,marginspacingLink:Te,gradientValue:xe}=a;let Se=["left","center","right"];return"full_width"===j&&(Se=["wide","full"]),o.a.createElement(l.Suspense,{fallback:Object(u.a)()},o.a.createElement(_.BlockControls,null,o.a.createElement(_.AlignmentToolbar,{value:E,onChange:e=>{t({align:e})},controls:Se})),o.a.createElement(_.InspectorControls,null,o.a.createElement(r.a,null,o.a.createElement(b.b,b.a.general,o.a.createElement(k.a,{initialOpen:!0},o.a.createElement(m.a,{setAttributes:t,label:Object(n.__)("Content Width","ultimate-addons-for-gutenberg"),data:{value:j,label:"contentWidth"},className:"uagb-multi-button-alignment-control",options:[{value:"boxed",label:"Boxed"},{value:"full_width",label:"Full Width"}],showIcons:!1}),"boxed"===j&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{setAttributes:t,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:E,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(f.Icon,{icon:Object(v.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(f.Icon,{icon:Object(v.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(f.Icon,{icon:Object(v.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),o.a.createElement(g.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:T,data:{value:T,label:"width"},min:0,max:2e3,displayUnit:!1})),"boxed"!==j&&o.a.createElement(f.ToggleControl,{label:Object(n.__)("Inherit Inner Width from Theme","ultimate-addons-for-gutenberg"),checked:M,onChange:()=>t({themeWidth:!M})}),"boxed"!==j&&!M&&o.a.createElement(g.a,{label:Object(n.__)("Inner Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:x,data:{value:x,label:"innerWidth"},min:0,max:2e3,unit:{value:S,label:"innerWidthType"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),o.a.createElement(p.a,{label:Object(n.__)("HTML Tag","ultimate-addons-for-gutenberg"),data:{value:P,label:"tag"},setAttributes:t,options:[{value:"div",label:Object(n.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(n.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(n.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(n.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(n.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(n.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(n.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(n.__)("nav","ultimate-addons-for-gutenberg")}]}))),o.a.createElement(b.b,b.a.style,o.a.createElement(k.a,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(s.a,y({setAttributes:t,backgroundGradient:{value:xe,label:"gradientValue"},backgroundImageColor:{value:ce,label:"backgroundImageColor"},overlayType:{value:ge,label:"overlayType"},gradientOverlay:{value:!0},backgroundSize:{value:ie,label:"backgroundSize"},backgroundRepeat:{value:ue,label:"backgroundRepeat"},backgroundAttachment:{value:ne,label:"backgroundAttachment"},backgroundPosition:{value:oe,label:"backgroundPosition"},backgroundImage:{value:ae,label:"backgroundImage"},backgroundColor:{value:le,label:"backgroundColor"},backgroundType:{value:ee,label:"backgroundType"},backgroundVideoType:{value:!0},backgroundVideo:{value:te,label:"backgroundVideo"},backgroundVideoColor:{value:re,label:"backgroundVideoColor"},backgroundVideoOpacity:{value:be,label:"backgroundVideoOpacity"},onOpacityChange:e=>t({backgroundVideoOpacity:e})},e))),o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{title:Object(n.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(d.a,{setAttributes:t,prefix:"overall",attributes:a,deviceType:h,disableBottomSeparator:!0,disabledBorderTitle:!0})),o.a.createElement(k.a,{title:"Box Shadow",initialOpen:!1},o.a.createElement(i.a,{blockId:O,setAttributes:t,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:fe,label:"boxShadowColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:ke,label:"boxShadowHOffset",title:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:ye,label:"boxShadowVOffset",title:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:he,label:"boxShadowBlur",title:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:Oe,label:"boxShadowSpread",title:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Ee,label:"boxShadowPosition",title:Object(n.__)("Position","ultimate-addons-for-gutenberg")}}))),o.a.createElement(k.a,{title:"Spacing",initialOpen:!1},o.a.createElement(c.a,y({},e,{label:Object(n.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:V,label:"topMargin"},valueRight:{value:A,label:"rightMargin"},valueBottom:{value:R,label:"bottomMargin"},valueLeft:{value:N,label:"leftMargin"},valueTopTablet:{value:D,label:"topMarginTablet"},valueRightTablet:{value:H,label:"rightMarginTablet"},valueBottomTablet:{value:G,label:"bottomMarginTablet"},valueLeftTablet:{value:U,label:"leftMarginTablet"},valueTopMobile:{value:Y,label:"topMarginMobile"},valueRightMobile:{value:Z,label:"rightMarginMobile"},valueBottomMobile:{value:K,label:"bottomMarginMobile"},valueLeftMobile:{value:Q,label:"leftMarginMobile"},unit:{value:me,label:"desktopMarginType"},mUnit:{value:se,label:"mobileMarginType"},tUnit:{value:de,label:"tabletMarginType"},deviceType:h,attributes:a,setAttributes:t,link:{value:Te,label:"marginspacingLink"}})),o.a.createElement(c.a,y({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:z,label:"topPadding"},valueRight:{value:w,label:"rightPadding"},valueBottom:{value:I,label:"bottomPadding"},valueLeft:{value:C,label:"leftPadding"},valueTopTablet:{value:B,label:"topPaddingTablet"},valueRightTablet:{value:F,label:"rightPaddingTablet"},valueBottomTablet:{value:L,label:"bottomPaddingTablet"},valueLeftTablet:{value:W,label:"leftPaddingTablet"},valueTopMobile:{value:$,label:"topPaddingMobile"},valueRightMobile:{value:J,label:"rightPaddingMobile"},valueBottomMobile:{value:X,label:"bottomPaddingMobile"},valueLeftMobile:{value:q,label:"leftPaddingMobile"},unit:{value:_e,label:"desktopPaddingType"},mUnit:{value:pe,label:"mobilePaddingType"},tUnit:{value:ve,label:"tabletPaddingType"},deviceType:h,attributes:a,setAttributes:t,link:{value:je,label:"spacingLink"}})))),o.a.createElement(b.b,y({},b.a.advance,{parentProps:e})))))};a.default=o.a.memo(h)}}]);