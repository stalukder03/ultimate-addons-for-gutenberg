(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[94],{210:function(e,a,t){"use strict";var l=t(1),o=t(7),n=t(5),r=t(0),u=t.n(r),i=t(8);a.a=e=>{const{onSelectImage:a,backgroundImage:t,onRemoveImage:r,showVideoInput:c,label:b,disableRemove:g=!1,allow:s=["image"]}=e;let d,m=Object(l.__)("Image","ultimate-addons-for-gutenberg"),p=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Image","ultimate-addons-for-gutenberg"),_=["image"];c&&(m=Object(l.__)("Video","ultimate-addons-for-gutenberg"),p=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Video","ultimate-addons-for-gutenberg"),_=["video"],d=i.a.video_placeholder),m=b||m,m=!1===b?b:m,"Lottie Animation"===b&&(p=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),_=s,d=i.a.lottie);const f=e=>u.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},i.a[e]);return u.a.createElement(o.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+b,label:m},u.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!d&&(null==t?void 0:t.url)&&`url("${(e=>{let a=e;switch(/(?:\.([^.]+))?$/.exec(String(a))[1]){case"json":a="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":a=""}return a})(null==t?void 0:t.url)}")`}},d&&(null==t?void 0:t.url)&&u.a.createElement("div",{className:"spectra-media-control__icon"},d),u.a.createElement(n.MediaUpload,{title:p,onSelect:a,allowedTypes:_,value:t,render:e=>{let{open:a}=e;return(e=>{const a=null!=t&&t.url?"replace":"add";return u.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+a,onClick:e},"add"===a?f(a):u.a.createElement("div",{className:"uag-control-label"},v))})(a)}}),!g&&(null==t?void 0:t.url)&&u.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:r},f("close"))),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},213:function(e,a,t){"use strict";var l,o=t(0),n=t.n(o),r=t(7),u=t(11),i=t(68),c=t(15),b=t.n(c),g=t(214),s=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return s++||(l=b()(g.a,d)),m},m.unuse=function(){s>0&&!--s&&(l(),l=null)};var p=m;a.a=e=>{Object(o.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const{label:a,data:t,setAttributes:l,options:c}=e,b=Object(u.a)(),g={};return g.Desktop=n.a.createElement(r.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:c.desktop}),g.Tablet=n.a.createElement(r.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:c.tablet||c.desktop}),g.Mobile=n.a.createElement(r.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:c.mobile||c.desktop}),n.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},n.a.createElement("div",{className:"uagb-size-type-field-tabs"},n.a.createElement("div",{className:"uagb-control__header"},n.a.createElement(i.a,{label:a,responsive:!0})),g[b]?g[b]:g.Desktop),e.help&&n.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},214:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-responsive-select-control .uagb-size-type-field-tabs {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n  .uagb-responsive-select-control .uagb-size-type-field-tabs .uagb-control__header {\n    margin-bottom: 0; }\n",""]),a.a=o},215:function(e,a,t){"use strict";var l=t(1),o=t(20),n=t(18),r=t(7),u=t(2),i=t(22),c=t(0),b=t.n(c),g=t(9),s=t(24);a.a=e=>{const[a,t]=Object(u.useState)(!1);Object(c.useLayoutEffect)(()=>{window.addEventListener("click",(function(e){const a=document.querySelector(`.active.popup-${O} .spectra-control-popup__options--action-button`);!a||null!=a&&a.contains(e.target)||t(!1)}))},[]);const{setAttributes:d,boxShadowColor:m,boxShadowHOffset:p,boxShadowVOffset:v,boxShadowBlur:_,boxShadowSpread:f,boxShadowPosition:k,label:y=Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),popup:h=!1,blockId:O}=e;let E;const j=a?"active":"",T=b.a.createElement(b.a.Fragment,null,b.a.createElement(n.a,{label:m.title,colorValue:m.value,data:{value:m.value,label:m.label},setAttributes:d}),b.a.createElement(o.a,{label:p.title,value:p.value,min:0,max:100,displayUnit:!1,setAttributes:d,data:{value:p.value,label:p.label}}),b.a.createElement(o.a,{label:v.title,value:v.value,min:0,max:100,displayUnit:!1,setAttributes:d,data:{value:v.value,label:v.label}}),b.a.createElement(o.a,{label:_.title,value:_.value,min:0,max:100,displayUnit:!1,setAttributes:d,data:{value:_.value,label:_.label}}),b.a.createElement(o.a,{label:f.title,value:f.value,min:-100,max:100,displayUnit:!1,setAttributes:d,data:{value:f.value,label:f.label}}),b.a.createElement(i.a,{setAttributes:d,label:k.title,data:{value:k.value,label:k.label},options:[{value:"outset",label:Object(l.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(l.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}));a&&(E=b.a.createElement("div",{className:"uagb-box-shadow-advanced spectra-control-popup"},T));const S=b.a.createElement("div",{className:"spectra-control-popup__options--action-wrapper"},b.a.createElement("span",{className:"uag-control-label"},y),b.a.createElement(r.Button,{className:"uag-box-shadow-button spectra-control-popup__options--action-button","aria-pressed":a,onClick:()=>{const e=document.querySelectorAll(".spectra-control-popup__options");if(e&&0<e.length)for(let a=0;a<e.length;a++){var l;const t=null===(l=e[a])||void 0===l?void 0:l.querySelector(".spectra-control-popup__options.active .spectra-control-popup__options--action-button");null==t||t.click()}if(t(!a),!a){var o;const{getSelectedBlock:e}=Object(g.select)("core/block-editor"),a=null===(o=e())||void 0===o?void 0:o.name,t=Object(s.a)("uagSettingState"),l={...t,[a]:{...null==t?void 0:t[a],selectedSetting:".uag-box-shadow-options"}},n=Object(s.a)();n&&n.setItem("uagSettingState",JSON.stringify(l))}}},b.a.createElement(r.Dashicon,{icon:"edit"})));return h?b.a.createElement("div",{className:`components-base-control uag-box-shadow-options spectra-control-popup__options popup-${O} ${j}`},S,a&&E):b.a.createElement(b.a.Fragment,null,T)}},216:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-gradient-picker .components-custom-gradient-picker__gradient-bar {\n  border-radius: 5px;\n  height: 30px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__control-point-button {\n    top: 9px;\n    width: 12px;\n    height: 12px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__insert-point {\n    top: 7px; }\n",""]),a.a=o},218:function(e,a,t){"use strict";var l,o=t(15),n=t.n(o),r=t(216),u=0,i={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=r.a.locals||{},c.use=function(){return u++||(l=n()(r.a,i)),c},c.unuse=function(){u>0&&!--u&&(l(),l=null)};var b=c,g=t(7),s=t(0),d=t.n(s);a.a=e=>{Object(s.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]);const{setAttributes:a,backgroundGradient:t}=e;return d.a.createElement(g.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})},className:"uagb-gradient-picker"})}},220:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,"/* stylelint-disable color-hex-case, color-hex-length */\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient,\n.uag-bg-select-control .uagb-responsive-select-control {\n  margin-top: 25px; }\n  .uag-bg-select-control .uag-background-color .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-gradient .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-opacity .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-video .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-video-overlay .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-video-opacity .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-attachment .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-repeat .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-size .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-overlay-type .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-overlay-color .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-overlay-gradient .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uagb-responsive-select-control .uagb-size-type-field-tabs {\n    display: flex;\n    justify-content: space-between; }\n    .uag-bg-select-control .uag-background-color .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-gradient .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-opacity .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-video .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-video-overlay .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-video-opacity .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-attachment .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-repeat .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-size .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-overlay-type .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-overlay-color .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-overlay-gradient .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n      width: 45%; }\n\n.uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs {\n  display: block; }\n  .uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 100%; }\n\n.uag-bg-select-control .uag-responsive-image-select.uagb-responsive-select-control .uagb-size-type-field-tabs .uagb-control__header {\n  margin-bottom: 10px; }\n\n.uag-bg-select-control .uag-background-image-overlay-type .components-select-control {\n  flex-direction: row;\n  align-items: center; }\n  .uag-bg-select-control .uag-background-image-overlay-type .components-select-control .components-input-control__container {\n    width: 45%;\n    flex: unset; }\n\n.uag-bg-select-control .uag-background-image-size .uagb-responsive-control-inner > .components-base-control {\n  display: block;\n  margin-top: 25px; }\n\n.uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs {\n  flex-direction: column; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .uagb-control__header {\n    margin-bottom: 10px; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control {\n    width: 100%; }\n    .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker {\n      border-radius: 3px;\n      border-color: #E6E7E9; }\n      .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker img {\n        border-radius: 3px; }\n",""]),a.a=o},222:function(e,a,t){"use strict";var l,o=t(1),n=t(18),r=t(7),u=t(15),i=t.n(u),c=t(220),b=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=c.a.locals||{},s.use=function(){return b++||(l=i()(c.a,g)),s},s.unuse=function(){b>0&&!--b&&(l(),l=null)};var d=s,m=t(218),p=t(0),v=t.n(p),_=t(210),f=t(28),k=t(213),y=t(11),h=t(68),O=e=>{const{backgroundImage:a,setAttributes:t}=e,l=Object(y.a)(),n=l.toLowerCase(),r=e=>{e&&e.url?e.type&&"image"===e.type?t({[a[n].label]:e}):t({[a[n].label]:null}):t({[a[n].label]:null})},u=()=>{t({[a[n].label]:""})},i={};return i.Desktop=v.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.desktop.value,onRemoveImage:u,label:!1}),i.Tablet=v.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.tablet.value,onRemoveImage:u,label:!1}),i.Mobile=v.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.mobile.value,onRemoveImage:u,label:!1}),v.a.createElement("div",{className:"uag-responsive-image-select components-base-control uagb-responsive-select-control"},v.a.createElement("div",{className:"uagb-size-type-field-tabs"},v.a.createElement("div",{className:"uagb-control__header"},v.a.createElement(h.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),i[l]?i[l]:i.Desktop),e.help&&v.a.createElement("p",{className:"uag-control-help-notice"},e.help))},E=e=>{var a,t,l;const{backgroundPosition:n,backgroundImage:u,setAttributes:i}=e,c=Object(y.a)(),b=c.toLowerCase(),g={},s=null===(a=u[b])||void 0===a||null===(t=a.value)||void 0===t?void 0:t.url,d=null===(l=n[b])||void 0===l?void 0:l.value;return g.Desktop=v.a.createElement(r.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;i({[null===(a=n[b])||void 0===a?void 0:a.label]:e})}}),g.Tablet=v.a.createElement(r.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;i({[null===(a=n[b])||void 0===a?void 0:a.label]:e})}}),g.Mobile=v.a.createElement(r.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;i({[null===(a=n[b])||void 0===a?void 0:a.label]:e})}}),v.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},v.a.createElement("div",{className:"uagb-size-type-field-tabs"},v.a.createElement("div",{className:"uagb-control__header"},v.a.createElement(h.a,{label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),responsive:!0})),g[c]?g[c]:g.Desktop),e.help&&v.a.createElement("p",{className:"uag-control-help-notice"},e.help))},j=t(22),T=t(8);a.a=e=>{var a,t;Object(p.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]);const l=Object(y.a)().toLowerCase(),{setAttributes:u,backgroundImageColor:i,overlayType:c,backgroundSize:b,backgroundRepeat:g,backgroundAttachment:s,backgroundPosition:h,backgroundImage:S,backgroundColor:x,backgroundVideoType:C,backgroundType:w,backgroundVideo:M,backgroundVideoColor:z,onOpacityChange:I,backgroundCustomSize:P,backgroundCustomSizeType:A,imageResponsive:N,gradientOverlay:V}=e;let R=[];R=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Classic","ultimate-addons-for-gutenberg")}],V.value&&R.push({value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")});const B=[{value:"color",icon:T.a.bg_color,tooltip:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",icon:T.a.bg_gradient,tooltip:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",icon:T.a.bg_image,tooltip:Object(o.__)("Image","ultimate-addons-for-gutenberg")}];let L=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}];P||(L=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]),C.value&&B.push({value:"video",icon:T.a.bg_video,tooltip:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const F=v.a.createElement(v.a.Fragment,null,v.a.createElement(j.a,{setAttributes:u,label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),data:{value:w.value,label:w.label},options:B,showIcons:!0,colorVariant:"secondary",layoutVariant:"inline"}),"color"===w.value&&v.a.createElement("div",{className:"uag-background-color"},v.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:x.value?x.value:"",data:{value:x.value,label:x.label},setAttributes:u})),"image"===w.value&&v.a.createElement("div",{className:"uag-background-image"},!N&&v.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&u({[S.label]:e}):u({[S.label]:null})},backgroundImage:S.value,onRemoveImage:()=>{u({[S.label]:null})}}),!N&&S.value&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(r.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:h.value,onChange:e=>u({[h.label]:e}),options:[{value:"left top",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-attachment"},v.a.createElement(r.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:s.value,onChange:e=>u({[s.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-repeat"},v.a.createElement(r.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>u({[g.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-size"},v.a.createElement(r.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:b.value,onChange:e=>u({[b.label]:e}),options:L}),"custom"===b.value&&P&&v.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:P.desktop.value,label:P.desktop.label},tablet:{value:P.tablet.value,label:P.tablet.label},mobile:{value:P.mobile.value,label:P.mobile.label}},min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:A.value,label:A.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),N&&S&&v.a.createElement(O,{backgroundImage:S,setAttributes:u}),N&&S[l]&&(null===(a=S[l])||void 0===a?void 0:a.value)&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(E,{backgroundPosition:h,setAttributes:u,backgroundImage:S})),v.a.createElement("div",{className:"uag-background-image-attachment"},v.a.createElement(k.a,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),data:s,options:{desktop:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]},setAttributes:u})),v.a.createElement("div",{className:"uag-background-image-repeat"},v.a.createElement(k.a,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),data:g,options:{desktop:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]},setAttributes:u})),v.a.createElement("div",{className:"uag-background-image-size"},v.a.createElement(k.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:b,options:{desktop:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]},setAttributes:u}),"custom"===b[l].value&&P&&v.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:P,min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:A.value,label:A.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),c&&S&&(N&&(null===(t=S[l])||void 0===t?void 0:t.value)||!N&&(null==S?void 0:S.value))&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-overlay-type"},v.a.createElement(j.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:c.value,label:c.label},className:"uagb-multi-button-alignment-control",options:R,showIcons:!1})),"color"===c.value&&v.a.createElement("div",{className:"uag-background-image-overlay-color"},v.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:i.value,data:{value:i.value,label:i.label},setAttributes:u})),"gradient"===c.value&&v.a.createElement("div",{className:"uag-background-image-overlay-gradient"},v.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))),V.value&&"gradient"===w.value&&v.a.createElement("div",{className:"uag-background-gradient"},v.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===w.value&&C.value&&v.a.createElement("div",{className:"uag-background-video"},v.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&u({[M.label]:e}):u({[M.label]:null})},backgroundImage:M.value,onRemoveImage:()=>{u({[M.label]:null})},showVideoInput:!0})),"video"===w.value&&M.value&&C.value&&v.a.createElement("div",{className:"uag-background-video-overlay"},c&&M&&M.value&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-overlay-type"},v.a.createElement(j.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:c.value,label:c.label},className:"uagb-multi-button-alignment-control",options:R,showIcons:!1})),"color"===c.value&&v.a.createElement("div",{className:"uag-background-image-overlay-color"},v.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:z.value,data:{value:z.value,label:z.label},setAttributes:u,onOpacityChange:I})),V.value&&"gradient"===c.value&&v.a.createElement("div",{className:"uag-background-image-overlay-gradient"},v.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))));return v.a.createElement("div",{className:"uag-bg-select-control components-base-control"},F)}},508:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(1),r=t(10),u=t(215),i=t(84),c=t(29),b=t(37),g=t(20),s=t(222),d=t(80),m=t(22),p=t(25),v=t(13),_=t(5),f=t(7),k=t(17);function y(){return(y=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const h=e=>{e=e.parentProps;const{attributes:a,setAttributes:t,deviceType:h}=e,{block_id:O,align:E,contentWidth:j,width:T,innerWidth:S,innerWidthType:x,tag:C,themeWidth:w,leftPadding:M,rightPadding:z,topPadding:I,bottomPadding:P,leftMargin:A,rightMargin:N,topMargin:V,bottomMargin:R,topPaddingTablet:B,bottomPaddingTablet:L,leftPaddingTablet:F,rightPaddingTablet:W,topMarginTablet:G,bottomMarginTablet:U,leftMarginTablet:D,rightMarginTablet:H,topPaddingMobile:$,bottomPaddingMobile:q,leftPaddingMobile:J,rightPaddingMobile:X,topMarginMobile:K,bottomMarginMobile:Q,leftMarginMobile:Y,rightMarginMobile:Z,backgroundType:ee,backgroundImage:ae,backgroundVideo:te,backgroundColor:le,backgroundPosition:oe,backgroundAttachment:ne,backgroundRepeat:re,backgroundSize:ue,backgroundVideoColor:ie,backgroundVideoOpacity:ce,backgroundImageColor:be,overlayType:ge,mobileMarginType:se,tabletMarginType:de,desktopMarginType:me,mobilePaddingType:pe,tabletPaddingType:ve,desktopPaddingType:_e,boxShadowColor:fe,boxShadowHOffset:ke,boxShadowVOffset:ye,boxShadowBlur:he,boxShadowSpread:Oe,boxShadowPosition:Ee,spacingLink:je,marginspacingLink:Te,gradientValue:Se}=a;let xe=["left","center","right"];return"full_width"===j&&(xe=["wide","full"]),o.a.createElement(l.Suspense,{fallback:Object(r.a)()},o.a.createElement(_.BlockControls,null,o.a.createElement(_.AlignmentToolbar,{value:E,onChange:e=>{t({align:e})},controls:xe})),o.a.createElement(_.InspectorControls,null,o.a.createElement(i.a,null,o.a.createElement(c.b,c.a.general,o.a.createElement(k.a,{initialOpen:!0},o.a.createElement(m.a,{setAttributes:t,label:Object(n.__)("Content Width","ultimate-addons-for-gutenberg"),data:{value:j,label:"contentWidth"},className:"uagb-multi-button-alignment-control",options:[{value:"boxed",label:"Boxed"},{value:"full_width",label:"Full Width"}],showIcons:!1}),"boxed"===j&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{setAttributes:t,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:E,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(f.Icon,{icon:Object(v.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(f.Icon,{icon:Object(v.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(f.Icon,{icon:Object(v.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),o.a.createElement(g.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:T,data:{value:T,label:"width"},min:0,max:2e3,displayUnit:!1})),"boxed"!==j&&o.a.createElement(f.ToggleControl,{label:Object(n.__)("Inherit Inner Width from Theme","ultimate-addons-for-gutenberg"),checked:w,onChange:()=>t({themeWidth:!w})}),"boxed"!==j&&!w&&o.a.createElement(g.a,{label:Object(n.__)("Inner Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:S,data:{value:S,label:"innerWidth"},min:0,max:2e3,unit:{value:x,label:"innerWidthType"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),o.a.createElement(p.a,{label:Object(n.__)("HTML Tag","ultimate-addons-for-gutenberg"),data:{value:C,label:"tag"},setAttributes:t,options:[{value:"div",label:Object(n.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(n.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(n.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(n.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(n.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(n.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(n.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(n.__)("nav","ultimate-addons-for-gutenberg")}]}))),o.a.createElement(c.b,c.a.style,o.a.createElement(k.a,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(s.a,y({setAttributes:t,backgroundGradient:{value:Se,label:"gradientValue"},backgroundImageColor:{value:be,label:"backgroundImageColor"},overlayType:{value:ge,label:"overlayType"},gradientOverlay:{value:!0},backgroundSize:{value:ue,label:"backgroundSize"},backgroundRepeat:{value:re,label:"backgroundRepeat"},backgroundAttachment:{value:ne,label:"backgroundAttachment"},backgroundPosition:{value:oe,label:"backgroundPosition"},backgroundImage:{value:ae,label:"backgroundImage"},backgroundColor:{value:le,label:"backgroundColor"},backgroundType:{value:ee,label:"backgroundType"},backgroundVideoType:{value:!0},backgroundVideo:{value:te,label:"backgroundVideo"},backgroundVideoColor:{value:ie,label:"backgroundVideoColor"},backgroundVideoOpacity:{value:ce,label:"backgroundVideoOpacity"},onOpacityChange:e=>t({backgroundVideoOpacity:e})},e))),o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{title:Object(n.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(d.a,{setAttributes:t,prefix:"overall",attributes:a,deviceType:h,disableBottomSeparator:!0,disabledBorderTitle:!0})),o.a.createElement(k.a,{title:"Box Shadow",initialOpen:!1},o.a.createElement(u.a,{blockId:O,setAttributes:t,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:fe,label:"boxShadowColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:ke,label:"boxShadowHOffset",title:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:ye,label:"boxShadowVOffset",title:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:he,label:"boxShadowBlur",title:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:Oe,label:"boxShadowSpread",title:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Ee,label:"boxShadowPosition",title:Object(n.__)("Position","ultimate-addons-for-gutenberg")}}))),o.a.createElement(k.a,{title:"Spacing",initialOpen:!1},o.a.createElement(b.a,y({},e,{label:Object(n.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:V,label:"topMargin"},valueRight:{value:N,label:"rightMargin"},valueBottom:{value:R,label:"bottomMargin"},valueLeft:{value:A,label:"leftMargin"},valueTopTablet:{value:G,label:"topMarginTablet"},valueRightTablet:{value:H,label:"rightMarginTablet"},valueBottomTablet:{value:U,label:"bottomMarginTablet"},valueLeftTablet:{value:D,label:"leftMarginTablet"},valueTopMobile:{value:K,label:"topMarginMobile"},valueRightMobile:{value:Z,label:"rightMarginMobile"},valueBottomMobile:{value:Q,label:"bottomMarginMobile"},valueLeftMobile:{value:Y,label:"leftMarginMobile"},unit:{value:me,label:"desktopMarginType"},mUnit:{value:se,label:"mobileMarginType"},tUnit:{value:de,label:"tabletMarginType"},deviceType:h,attributes:a,setAttributes:t,link:{value:Te,label:"marginspacingLink"}})),o.a.createElement(b.a,y({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:I,label:"topPadding"},valueRight:{value:z,label:"rightPadding"},valueBottom:{value:P,label:"bottomPadding"},valueLeft:{value:M,label:"leftPadding"},valueTopTablet:{value:B,label:"topPaddingTablet"},valueRightTablet:{value:W,label:"rightPaddingTablet"},valueBottomTablet:{value:L,label:"bottomPaddingTablet"},valueLeftTablet:{value:F,label:"leftPaddingTablet"},valueTopMobile:{value:$,label:"topPaddingMobile"},valueRightMobile:{value:X,label:"rightPaddingMobile"},valueBottomMobile:{value:q,label:"bottomPaddingMobile"},valueLeftMobile:{value:J,label:"leftPaddingMobile"},unit:{value:_e,label:"desktopPaddingType"},mUnit:{value:pe,label:"mobilePaddingType"},tUnit:{value:ve,label:"tabletPaddingType"},deviceType:h,attributes:a,setAttributes:t,link:{value:je,label:"spacingLink"}})))),o.a.createElement(c.b,y({},c.a.advance,{parentProps:e})))))};a.default=o.a.memo(h)}}]);