(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[18],{206:function(e,a,t){"use strict";var l=t(1),o=t(7),n=t(5),r=t(0),u=t.n(r),b=t(8);a.a=e=>{const{onSelectImage:a,backgroundImage:t,onRemoveImage:r,showVideoInput:i,label:c,disableRemove:g=!1,allow:d=["image"]}=e;let s,m=Object(l.__)("Image","ultimate-addons-for-gutenberg"),v=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Image","ultimate-addons-for-gutenberg"),_=["image"];i&&(m=Object(l.__)("Video","ultimate-addons-for-gutenberg"),v=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Video","ultimate-addons-for-gutenberg"),_=["video"],s=b.a.video_placeholder),m=c||m,m=!1===c?c:m,"Lottie Animation"===c&&(v=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),_=d,s=b.a.lottie);const f=e=>u.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},b.a[e]);return u.a.createElement(o.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+c,label:m},u.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!s&&(null==t?void 0:t.url)&&`url("${(e=>{let a=e;switch(/(?:\.([^.]+))?$/.exec(String(a))[1]){case"json":a="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":a=""}return a})(null==t?void 0:t.url)}")`}},s&&(null==t?void 0:t.url)&&u.a.createElement("div",{className:"spectra-media-control__icon"},s),u.a.createElement(n.MediaUpload,{title:v,onSelect:a,allowedTypes:_,value:t,render:e=>{let{open:a}=e;return(e=>{const a=null!=t&&t.url?"replace":"add";return u.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+a,onClick:e},"add"===a?f(a):u.a.createElement("div",{className:"uag-control-label"},p))})(a)}}),!g&&(null==t?void 0:t.url)&&u.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:r},f("close"))),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},209:function(e,a,t){"use strict";var l=t(0),o=t.n(l),n=t(7),r=t(11),u=t(68);a.a=e=>{const{label:a,data:t,setAttributes:l,options:b}=e,i=Object(r.a)(),c={};return c.Desktop=o.a.createElement(n.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:b.desktop}),c.Tablet=o.a.createElement(n.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:b.tablet||b.desktop}),c.Mobile=o.a.createElement(n.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:b.mobile||b.desktop}),o.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},o.a.createElement("div",{className:"uagb-size-type-field-tabs"},o.a.createElement("div",{className:"uagb-control__header"},o.a.createElement(u.a,{label:a,responsive:!0})),c[i]?c[i]:c.Desktop),e.help&&o.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},210:function(e,a,t){"use strict";var l=t(1),o=t(20),n=t(18),r=t(7),u=t(2),b=t(21),i=t(0),c=t.n(i),g=t(9),d=t(24);a.a=e=>{const[a,t]=Object(u.useState)(!1);Object(i.useLayoutEffect)(()=>{window.addEventListener("click",(function(e){const a=document.querySelector(".uagb-box-shadow-advanced"),l=document.querySelector(".uag-box-shadow-button");var o,n,r,u;a&&(null!=a&&a.contains(e.target)||null!=l&&l.contains(e.target)||null!==(o=e.target)&&void 0!==o&&null!==(n=o.classList)&&void 0!==n&&n.contains("uagb-advanced-color-indicate")||null!==(r=e.target)&&void 0!==r&&null!==(u=r.parentElement)&&void 0!==u&&u.closest(".uagb-popover-color")||t(!1))}))},[]);const{setAttributes:s,boxShadowColor:m,boxShadowHOffset:v,boxShadowVOffset:p,boxShadowBlur:_,boxShadowSpread:f,boxShadowPosition:O,label:k=Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),popup:h=!1}=e;let j;const E=a?"active":"",y=c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,{label:m.title,colorValue:m.value,data:{value:m.value,label:m.label},setAttributes:s}),c.a.createElement(o.a,{label:v.title,value:v.value,min:0,max:100,displayUnit:!1,setAttributes:s,data:{value:v.value,label:v.label}}),c.a.createElement(o.a,{label:p.title,value:p.value,min:0,max:100,displayUnit:!1,setAttributes:s,data:{value:p.value,label:p.label}}),c.a.createElement(o.a,{label:_.title,value:_.value,min:0,max:100,displayUnit:!1,setAttributes:s,data:{value:_.value,label:_.label}}),c.a.createElement(o.a,{label:f.title,value:f.value,min:-100,max:100,displayUnit:!1,setAttributes:s,data:{value:f.value,label:f.label}}),c.a.createElement(b.a,{setAttributes:s,label:O.title,data:{value:O.value,label:O.label},options:[{value:"outset",label:Object(l.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(l.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}));a&&(j=c.a.createElement("div",{className:"uagb-box-shadow-advanced spectra-control-popup"},y));const C=c.a.createElement("div",{className:"spectra-control-popup__options--action-wrapper"},c.a.createElement("span",{className:"uag-control-label"},k),c.a.createElement(r.Button,{className:"uag-box-shadow-button spectra-control-popup__options--action-button","aria-pressed":a,onClick:()=>{if(t(!a),!a){var e;const{getSelectedBlock:a}=Object(g.select)("core/block-editor"),t=null===(e=a())||void 0===e?void 0:e.name,l=Object(d.a)("uagSettingState"),o={...l,[t]:{...null==l?void 0:l[t],selectedSetting:".uag-box-shadow-options"}},n=Object(d.a)();n&&n.setItem("uagSettingState",JSON.stringify(o))}}},c.a.createElement(r.Dashicon,{icon:"edit"})));return h?c.a.createElement("div",{className:"components-base-control uag-box-shadow-options spectra-control-popup__options "+E},C,a&&j):c.a.createElement(c.a.Fragment,null,y)}},211:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-gradient-picker .components-custom-gradient-picker__gradient-bar {\n  border-radius: 5px;\n  height: 30px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__control-point-button {\n    top: 9px;\n    width: 12px;\n    height: 12px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__insert-point {\n    top: 7px; }\n",""]),a.a=o},213:function(e,a,t){"use strict";var l,o=t(15),n=t.n(o),r=t(211),u=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},i={};i.locals=r.a.locals||{},i.use=function(){return u++||(l=n()(r.a,b)),i},i.unuse=function(){u>0&&!--u&&(l(),l=null)};var c=i,g=t(7),d=t(0),s=t.n(d);a.a=e=>{Object(d.useLayoutEffect)(()=>(c.use(),()=>{c.unuse()}),[]);const{setAttributes:a,backgroundGradient:t}=e;return s.a.createElement(g.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})},className:"uagb-gradient-picker"})}},215:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,"/* stylelint-disable color-hex-case, color-hex-length */\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient,\n.uag-bg-select-control .uagb-responsive-select-control {\n  margin-top: 25px; }\n\n.uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs {\n  display: block; }\n  .uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 100%; }\n\n.uag-bg-select-control .uagb-size-type-field-tabs {\n  display: flex;\n  justify-content: space-between; }\n  .uag-bg-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 45%; }\n\n.uag-bg-select-control .uag-background-image-overlay-type .components-select-control {\n  flex-direction: row;\n  align-items: center; }\n  .uag-bg-select-control .uag-background-image-overlay-type .components-select-control .components-input-control__container {\n    width: 45%;\n    flex: unset; }\n\n.uag-bg-select-control .uag-background-image-size .uagb-responsive-control-inner > .components-base-control {\n  display: block;\n  margin-top: 25px; }\n\n.uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs {\n  flex-direction: column; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control {\n    width: 100%; }\n    .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker {\n      border-radius: 3px;\n      border-color: #E6E7E9; }\n      .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker img {\n        border-radius: 3px; }\n",""]),a.a=o},217:function(e,a,t){"use strict";var l,o=t(1),n=t(18),r=t(7),u=t(15),b=t.n(u),i=t(215),c=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=i.a.locals||{},d.use=function(){return c++||(l=b()(i.a,g)),d},d.unuse=function(){c>0&&!--c&&(l(),l=null)};var s=d,m=t(213),v=t(0),p=t.n(v),_=t(206),f=t(27),O=t(209),k=t(11),h=t(68),j=e=>{const{backgroundImage:a,setAttributes:t}=e,l=Object(k.a)(),n=l.toLowerCase(),r=e=>{e&&e.url?e.type&&"image"===e.type?t({[a[n].label]:e}):t({[a[n].label]:null}):t({[a[n].label]:null})},u=()=>{t({[a[n].label]:""})},b={};return b.Desktop=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.desktop.value,onRemoveImage:u,label:!1}),b.Tablet=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.tablet.value,onRemoveImage:u,label:!1}),b.Mobile=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.mobile.value,onRemoveImage:u,label:!1}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(h.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),b[l]?b[l]:b.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},E=e=>{var a,t,l;const{backgroundPosition:n,backgroundImage:u,setAttributes:b}=e,i=Object(k.a)(),c=i.toLowerCase(),g={},d=null===(a=u[c])||void 0===a||null===(t=a.value)||void 0===t?void 0:t.url,s=null===(l=n[c])||void 0===l?void 0:l.value;return g.Desktop=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;b({[null===(a=n[c])||void 0===a?void 0:a.label]:e})}}),g.Tablet=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;b({[null===(a=n[c])||void 0===a?void 0:a.label]:e})}}),g.Mobile=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;b({[null===(a=n[c])||void 0===a?void 0:a.label]:e})}}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(h.a,{label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),responsive:!0})),g[i]?g[i]:g.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},y=t(21),C=t(8);a.a=e=>{var a,t;Object(v.useLayoutEffect)(()=>(s.use(),()=>{s.unuse()}),[]);const l=Object(k.a)().toLowerCase(),{setAttributes:u,backgroundImageColor:b,overlayType:i,backgroundSize:c,backgroundRepeat:g,backgroundAttachment:d,backgroundPosition:h,backgroundImage:T,backgroundColor:S,backgroundVideoType:x,backgroundType:w,backgroundVideo:M,backgroundVideoColor:A,onOpacityChange:N,backgroundCustomSize:P,backgroundCustomSizeType:I,imageResponsive:V,gradientOverlay:R}=e;let B=[];B=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Classic","ultimate-addons-for-gutenberg")}],R.value&&B.push({value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")});const z=[{value:"color",icon:C.a.bg_color,tooltip:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",icon:C.a.bg_gradient,tooltip:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",icon:C.a.bg_image,tooltip:Object(o.__)("Image","ultimate-addons-for-gutenberg")}];let F=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}];P||(F=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]),x.value&&z.push({value:"video",icon:C.a.bg_video,tooltip:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const L=p.a.createElement(p.a.Fragment,null,p.a.createElement(y.a,{setAttributes:u,label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),data:{value:w.value,label:w.label},options:z,showIcons:!0,colorVariant:"secondary",layoutVariant:"inline"}),"color"===w.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:S.value?S.value:"",data:{value:S.value,label:S.label},setAttributes:u})),"image"===w.value&&p.a.createElement("div",{className:"uag-background-image"},!V&&p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&u({[T.label]:e}):u({[T.label]:null})},backgroundImage:T.value,onRemoveImage:()=>{u({[T.label]:null})}}),!V&&T.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:h.value,onChange:e=>u({[h.label]:e}),options:[{value:"left top",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:d.value,onChange:e=>u({[d.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>u({[g.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:c.value,onChange:e=>u({[c.label]:e}),options:F}),"custom"===c.value&&P&&p.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:P.desktop.value,label:P.desktop.label},tablet:{value:P.tablet.value,label:P.tablet.label},mobile:{value:P.mobile.value,label:P.mobile.label}},min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:I.value,label:I.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),V&&T&&p.a.createElement(j,{backgroundImage:T,setAttributes:u}),V&&T[l]&&(null===(a=T[l])||void 0===a?void 0:a.value)&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(E,{backgroundPosition:h,setAttributes:u,backgroundImage:T})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(O.a,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),data:d,options:{desktop:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(O.a,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),data:g,options:{desktop:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(O.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:c,options:{desktop:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]},setAttributes:u}),"custom"===c[l].value&&P&&p.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:P,min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:I.value,label:I.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),i&&T&&(V&&(null===(t=T[l])||void 0===t?void 0:t.value)||!V&&(null==T?void 0:T.value))&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(y.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:i.value,label:i.label},className:"uagb-multi-button-alignment-control",options:B,showIcons:!1})),"color"===i.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:b.value,data:{value:b.value,label:b.label},setAttributes:u})),"gradient"===i.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))),R.value&&"gradient"===w.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===w.value&&x.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&u({[M.label]:e}):u({[M.label]:null})},backgroundImage:M.value,onRemoveImage:()=>{u({[M.label]:null})},showVideoInput:!0})),"video"===w.value&&M.value&&x.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},i&&M&&M.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(y.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:i.value,label:i.label},className:"uagb-multi-button-alignment-control",options:B,showIcons:!1})),"color"===i.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:A.value,data:{value:A.value,label:A.label},setAttributes:u,onOpacityChange:N})),R.value&&"gradient"===i.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},L)}},503:function(e,a,t){"use strict";t.r(a);var l=t(1),o=t(0),n=t.n(o),r=t(10),u=t(210),b=t(21),i=t(36),c=t(217),g=t(80),d=t(18),s=t(20),m=t(82),v=t(28),p=t(27),_=t(58),f=t(5),O=t(7),k=t(17);function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const j=e=>{e=e.parentProps;const{attributes:a,setAttributes:t,deviceType:j}=e,{stack:E,align:y,vAlign:C,contentWidth:T,width:S,widthType:x,tag:w,columnGap:M,topMarginDesktop:A,rightMarginDesktop:N,leftMarginDesktop:P,bottomMarginDesktop:I,topMarginMobile:V,rightMarginMobile:R,leftMarginMobile:B,bottomMarginMobile:z,topMarginTablet:F,rightMarginTablet:L,leftMarginTablet:W,bottomMarginTablet:H,topPadding:D,bottomPadding:G,leftPadding:U,rightPadding:J,topPaddingTablet:X,bottomPaddingTablet:q,leftPaddingTablet:Z,rightPaddingTablet:$,topPaddingMobile:K,bottomPaddingMobile:Q,leftPaddingMobile:Y,rightPaddingMobile:ee,backgroundType:ae,backgroundImage:te,backgroundVideo:le,backgroundColor:oe,backgroundPosition:ne,backgroundAttachment:re,backgroundRepeat:ue,backgroundSize:be,backgroundVideoColor:ie,backgroundVideoOpacity:ce,backgroundImageColor:ge,gradientValue:de,overlayType:se,columns:me,bottomType:ve,bottomColor:pe,bottomHeight:_e,bottomHeightTablet:fe,bottomHeightMobile:Oe,bottomWidth:ke,topType:he,topColor:je,topHeight:Ee,topHeightTablet:ye,topHeightMobile:Ce,topWidth:Te,bottomFlip:Se,topFlip:xe,reverseTablet:we,reverseMobile:Me,topContentAboveShape:Ae,bottomContentAboveShape:Ne,mobileMarginType:Pe,tabletMarginType:Ie,desktopMarginType:Ve,mobilePaddingType:Re,tabletPaddingType:Be,desktopPaddingType:ze,paddingLink:Fe,marginLink:Le,boxShadowColor:We,boxShadowHOffset:He,boxShadowVOffset:De,boxShadowBlur:Ge,boxShadowSpread:Ue,boxShadowPosition:Je}=a;return n.a.createElement(o.Suspense,{fallback:Object(r.a)()},n.a.createElement(f.InspectorControls,null,n.a.createElement(m.a,null,n.a.createElement(v.b,v.a.general,n.a.createElement(k.a,{title:Object(l.__)("Layout","ultimate-addons-for-gutenberg")},n.a.createElement(s.a,{label:Object(l.__)("Columns","ultimate-addons-for-gutenberg"),setAttributes:t,value:me,data:{value:me,label:"columns"},min:0,max:6,displayUnit:!1}),n.a.createElement(b.a,{setAttributes:t,label:Object(l.__)("Content Width","ultimate-addons-for-gutenberg"),data:{value:y,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"",label:"None"},{value:"wide",label:"Wide"},{value:"full",label:"Full Width"}],showIcons:!1}),n.a.createElement(b.a,{setAttributes:t,label:Object(l.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),data:{value:C,label:"vAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top"},{value:"center",label:"Middle"},{value:"bottom",label:"Bottom"}],showIcons:!1}),n.a.createElement(b.a,{setAttributes:t,label:Object(l.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:E,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(l.__)("Tablet & Mobile","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(l.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(l.__)("Note: Choose on what breakpoint the columns will stack.","ultimate-addons-for-gutenberg")}),n.a.createElement(b.a,{setAttributes:t,label:Object(l.__)("Container Width","ultimate-addons-for-gutenberg"),data:{value:T,label:"contentWidth"},className:"uagb-multi-button-alignment-control",options:[{value:"theme",label:Object(l.__)("Theme Container Width","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(l.__)("Custom","ultimate-addons-for-gutenberg")}],showIcons:!1}),"custom"===T&&n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{label:Object(l.__)("Inner Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:S,data:{value:S,label:"width"},min:0,max:"%"===x?100:2e3,unit:{value:x,label:"widthType"},units:[{name:Object(l.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(l.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),n.a.createElement(b.a,{setAttributes:t,label:Object(l.__)("Gap","ultimate-addons-for-gutenberg"),data:{value:M,label:"columnGap"},className:"uagb-multi-button-alignment-control",options:[{value:"10",label:Object(l.__)("Default","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Default (10px)","ultimate-addons-for-gutenberg")},{value:"0",label:Object(l.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("No Gap (0px)","ultimate-addons-for-gutenberg")},{value:"5",label:Object(l.__)("S","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Narrow (5px)","ultimate-addons-for-gutenberg")},{value:"15",label:Object(l.__)("M","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Extended (15px)","ultimate-addons-for-gutenberg")},{value:"20",label:Object(l.__)("L","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Wide (20px)","ultimate-addons-for-gutenberg")},{value:"30",label:Object(l.__)("XL","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Wider (30px)","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(l.__)("Note: The individual Column Gap can be managed from Column Settings.","ultimate-addons-for-gutenberg")}),n.a.createElement(O.SelectControl,{label:Object(l.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:w,onChange:e=>t({tag:e}),options:[{value:"div",label:Object(l.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(l.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(l.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(l.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(l.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(l.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(l.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(l.__)("nav","ultimate-addons-for-gutenberg")}]}),n.a.createElement(O.ToggleControl,{label:Object(l.__)("Reverse Columns (Tablet & Mobile)","ultimate-addons-for-gutenberg"),checked:we,onChange:()=>t({reverseTablet:!we})}),n.a.createElement(O.ToggleControl,{label:Object(l.__)("Reverse Columns (Mobile)","ultimate-addons-for-gutenberg"),checked:Me,onChange:()=>t({reverseMobile:!Me})}))),n.a.createElement(v.b,v.a.style,n.a.createElement(k.a,{title:Object(l.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(c.a,h({setAttributes:t,backgroundGradient:{value:de,label:"gradientValue"},backgroundImageColor:{value:ge,label:"backgroundImageColor"},overlayType:{value:se,label:"overlayType"},gradientOverlay:{value:!0},backgroundSize:{value:be,label:"backgroundSize"},backgroundRepeat:{value:ue,label:"backgroundRepeat"},backgroundAttachment:{value:re,label:"backgroundAttachment"},backgroundPosition:{value:ne,label:"backgroundPosition"},backgroundImage:{value:te,label:"backgroundImage"},backgroundColor:{value:oe,label:"backgroundColor"},backgroundType:{value:ae,label:"backgroundType"},backgroundVideoType:{value:!0},backgroundVideo:{value:le,label:"backgroundVideo"},backgroundVideoColor:{value:ie,label:"backgroundVideoColor"},backgroundVideoOpacity:{value:ce,label:"backgroundVideoOpacity"},onOpacityChange:e=>t({backgroundVideoOpacity:e})},e))),(()=>{const e=[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"tilt",label:Object(l.__)("Tilt","ultimate-addons-for-gutenberg")},{value:"mountains",label:Object(l.__)("Mountains","ultimate-addons-for-gutenberg")},{value:"wave_brush",label:Object(l.__)("Wave Brush","ultimate-addons-for-gutenberg")},{value:"waves",label:Object(l.__)("Waves","ultimate-addons-for-gutenberg")},{value:"wave_pattern",label:Object(l.__)("Waves Pattern","ultimate-addons-for-gutenberg")},{value:"triangle",label:Object(l.__)("Triangle","ultimate-addons-for-gutenberg")},{value:"drops",label:Object(l.__)("Drops","ultimate-addons-for-gutenberg")},{value:"clouds",label:Object(l.__)("Clouds","ultimate-addons-for-gutenberg")},{value:"zigzag",label:Object(l.__)("ZigZag","ultimate-addons-for-gutenberg")},{value:"pyramids",label:Object(l.__)("Pyramids","ultimate-addons-for-gutenberg")},{value:"triangle_asymmetrical",label:Object(l.__)("Triangle Asymmetrical","ultimate-addons-for-gutenberg")},{value:"tilt_opacity",label:Object(l.__)("Tilt Opacity","ultimate-addons-for-gutenberg")},{value:"fan_opacity",label:Object(l.__)("Fan Opacity","ultimate-addons-for-gutenberg")},{value:"curve",label:Object(l.__)("Curve","ultimate-addons-for-gutenberg")},{value:"curve_asymmetrical",label:Object(l.__)("Curve Asymmetrical","ultimate-addons-for-gutenberg")},{value:"curve_reverse",label:Object(l.__)("Curve Reverse","ultimate-addons-for-gutenberg")},{value:"curve_asym_reverse",label:Object(l.__)("Curve Asymmetrical Reverse","ultimate-addons-for-gutenberg")},{value:"arrow",label:Object(l.__)("Arrow","ultimate-addons-for-gutenberg")},{value:"arrow_split",label:Object(l.__)("Arrow Split","ultimate-addons-for-gutenberg")},{value:"book",label:Object(l.__)("Book","ultimate-addons-for-gutenberg")}],a=n.a.createElement(n.a.Fragment,null,n.a.createElement(O.SelectControl,{label:Object(l.__)("Type","ultimate-addons-for-gutenberg"),value:he,onChange:e=>t({topType:e}),options:e}),"none"!==he&&n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:je,data:{value:je,label:"topColor"},setAttributes:t}),n.a.createElement(s.a,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:Te,data:{value:Te,label:"topWidth"},min:100,max:2e3,displayUnit:!1}),n.a.createElement(p.a,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:Ee,label:"topHeight"},tablet:{value:ye,label:"topHeightTablet"},mobile:{value:Ce,label:"topHeightMobile"}},min:0,max:500,displayUnit:!1,setAttributes:t}),n.a.createElement(O.ToggleControl,{label:Object(l.__)("Flip","ultimate-addons-for-gutenberg"),checked:xe,onChange:()=>t({topFlip:!xe})}),n.a.createElement(O.ToggleControl,{label:Object(l.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:Ae,onChange:()=>t({topContentAboveShape:!Ae})}))),o=n.a.createElement(n.a.Fragment,null,n.a.createElement(O.SelectControl,{label:Object(l.__)("Type","ultimate-addons-for-gutenberg"),value:ve,onChange:e=>t({bottomType:e}),options:e}),"none"!==ve&&n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:pe,data:{value:pe,label:"bottomColor"},setAttributes:t}),n.a.createElement(s.a,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:ke,data:{value:ke,label:"bottomWidth"},min:100,max:2e3,displayUnit:!1}),n.a.createElement(p.a,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:_e,label:"bottomHeight"},tablet:{value:fe,label:"bottomHeightTablet"},mobile:{value:Oe,label:"bottomHeightMobile"}},min:0,max:500,displayUnit:!1,setAttributes:t}),n.a.createElement(O.ToggleControl,{label:Object(l.__)("Flip","ultimate-addons-for-gutenberg"),checked:Se,onChange:()=>t({bottomFlip:!Se})}),n.a.createElement(O.ToggleControl,{label:Object(l.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:Ne,onChange:()=>t({bottomContentAboveShape:!Ne})})));return n.a.createElement(k.a,{title:Object(l.__)("Shape Dividers","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(_.a,{tabs:[{name:"top",title:Object(l.__)("Top","ultimate-addons-for-gutenberg")},{name:"bottom",title:Object(l.__)("Bottom","ultimate-addons-for-gutenberg")}],top:a,bottom:o,disableBottomSeparator:!0}))})(),n.a.createElement(k.a,{title:Object(l.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(g.a,{setAttributes:t,prefix:"columns",attributes:a,deviceType:j,disabledBorderTitle:!0}),n.a.createElement(u.a,{setAttributes:t,label:Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:We,label:"boxShadowColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:He,label:"boxShadowHOffset",title:Object(l.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:De,label:"boxShadowVOffset",title:Object(l.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:Ge,label:"boxShadowBlur",title:Object(l.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:Ue,label:"boxShadowSpread",title:Object(l.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Je,label:"boxShadowPosition",title:Object(l.__)("Position","ultimate-addons-for-gutenberg")}})),n.a.createElement(k.a,{title:Object(l.__)("Spacing"),initialOpen:!1},n.a.createElement(i.a,h({},e,{label:Object(l.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:D,label:"topPadding"},valueRight:{value:J,label:"rightPadding"},valueBottom:{value:G,label:"bottomPadding"},valueLeft:{value:U,label:"leftPadding"},valueTopTablet:{value:X,label:"topPaddingTablet"},valueRightTablet:{value:$,label:"rightPaddingTablet"},valueBottomTablet:{value:q,label:"bottomPaddingTablet"},valueLeftTablet:{value:Z,label:"leftPaddingTablet"},valueTopMobile:{value:K,label:"topPaddingMobile"},valueRightMobile:{value:ee,label:"rightPaddingMobile"},valueBottomMobile:{value:Q,label:"bottomPaddingMobile"},valueLeftMobile:{value:Y,label:"leftPaddingMobile"},unit:{value:ze,label:"desktopPaddingType"},mUnit:{value:Re,label:"mobilePaddingType"},tUnit:{value:Be,label:"tabletPaddingType"},attributes:a,setAttributes:t,link:{value:Fe,label:"paddingLink"}})),n.a.createElement(i.a,h({},e,{label:Object(l.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:A,label:"topMarginDesktop"},valueRight:{value:N,label:"rightMarginDesktop"},valueBottom:{value:I,label:"bottomMarginDesktop"},valueLeft:{value:P,label:"leftMarginDesktop"},valueTopTablet:{value:F,label:"topMarginTablet"},valueRightTablet:{value:L,label:"rightMarginTablet"},valueBottomTablet:{value:H,label:"bottomMarginTablet"},valueLeftTablet:{value:W,label:"leftMarginTablet"},valueTopMobile:{value:V,label:"topMarginMobile"},valueRightMobile:{value:R,label:"rightMarginMobile"},valueBottomMobile:{value:z,label:"bottomMarginMobile"},valueLeftMobile:{value:B,label:"leftMarginMobile"},unit:{value:Ve,label:"desktopMarginType"},mUnit:{value:Pe,label:"mobileMarginType"},tUnit:{value:Ie,label:"tabletMarginType"},attributes:a,setAttributes:t,link:{value:Le,label:"marginLink"}})))),n.a.createElement(v.b,h({},v.a.advance,{parentProps:e})))))};a.default=n.a.memo(j)}}]);