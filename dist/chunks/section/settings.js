(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[94],{206:function(e,a,t){"use strict";var l=t(1),o=t(7),n=t(5),r=t(0),u=t.n(r),i=t(8);a.a=e=>{const{onSelectImage:a,backgroundImage:t,onRemoveImage:r,showVideoInput:b,label:c,disableRemove:g=!1,allow:d=["image"]}=e;let s,m=Object(l.__)("Image","ultimate-addons-for-gutenberg"),v=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Image","ultimate-addons-for-gutenberg"),_=["image"];b&&(m=Object(l.__)("Video","ultimate-addons-for-gutenberg"),v=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Video","ultimate-addons-for-gutenberg"),_=["video"],s=i.a.video_placeholder),m=c||m,m=!1===c?c:m,"Lottie Animation"===c&&(v=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),_=d,s=i.a.lottie);const f=e=>u.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},i.a[e]);return u.a.createElement(o.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+c,label:m},u.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!s&&(null==t?void 0:t.url)&&`url("${(e=>{let a=e;switch(/(?:\.([^.]+))?$/.exec(String(a))[1]){case"json":a="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":a=""}return a})(null==t?void 0:t.url)}")`}},s&&(null==t?void 0:t.url)&&u.a.createElement("div",{className:"spectra-media-control__icon"},s),u.a.createElement(n.MediaUpload,{title:v,onSelect:a,allowedTypes:_,value:t,render:e=>{let{open:a}=e;return(e=>{const a=null!=t&&t.url?"replace":"add";return u.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+a,onClick:e},"add"===a?f(a):u.a.createElement("div",{className:"uag-control-label"},p))})(a)}}),!g&&(null==t?void 0:t.url)&&u.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:r},f("close"))),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},209:function(e,a,t){"use strict";var l=t(0),o=t.n(l),n=t(7),r=t(11),u=t(68);a.a=e=>{const{label:a,data:t,setAttributes:l,options:i}=e,b=Object(r.a)(),c={};return c.Desktop=o.a.createElement(n.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:i.desktop}),c.Tablet=o.a.createElement(n.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:i.tablet||i.desktop}),c.Mobile=o.a.createElement(n.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:i.mobile||i.desktop}),o.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},o.a.createElement("div",{className:"uagb-size-type-field-tabs"},o.a.createElement("div",{className:"uagb-control__header"},o.a.createElement(u.a,{label:a,responsive:!0})),c[b]?c[b]:c.Desktop),e.help&&o.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},210:function(e,a,t){"use strict";var l=t(1),o=t(20),n=t(18),r=t(7),u=t(2),i=t(21),b=t(0),c=t.n(b),g=t(9),d=t(24);a.a=e=>{const[a,t]=Object(u.useState)(!1);Object(b.useLayoutEffect)(()=>{window.addEventListener("click",(function(e){const a=document.querySelector(".uagb-box-shadow-advanced"),l=document.querySelector(".uag-box-shadow-button");var o,n,r,u;a&&(null!=a&&a.contains(e.target)||null!=l&&l.contains(e.target)||null!==(o=e.target)&&void 0!==o&&null!==(n=o.classList)&&void 0!==n&&n.contains("uagb-advanced-color-indicate")||null!==(r=e.target)&&void 0!==r&&null!==(u=r.parentElement)&&void 0!==u&&u.closest(".uagb-popover-color")||t(!1))}))},[]);const{setAttributes:s,boxShadowColor:m,boxShadowHOffset:v,boxShadowVOffset:p,boxShadowBlur:_,boxShadowSpread:f,boxShadowPosition:k,label:h=Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),popup:O=!1}=e;let E;const j=a?"active":"",y=c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,{label:m.title,colorValue:m.value,data:{value:m.value,label:m.label},setAttributes:s}),c.a.createElement(o.a,{label:v.title,value:v.value,min:0,max:100,displayUnit:!1,setAttributes:s,data:{value:v.value,label:v.label}}),c.a.createElement(o.a,{label:p.title,value:p.value,min:0,max:100,displayUnit:!1,setAttributes:s,data:{value:p.value,label:p.label}}),c.a.createElement(o.a,{label:_.title,value:_.value,min:0,max:100,displayUnit:!1,setAttributes:s,data:{value:_.value,label:_.label}}),c.a.createElement(o.a,{label:f.title,value:f.value,min:-100,max:100,displayUnit:!1,setAttributes:s,data:{value:f.value,label:f.label}}),c.a.createElement(i.a,{setAttributes:s,label:k.title,data:{value:k.value,label:k.label},options:[{value:"outset",label:Object(l.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(l.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}));a&&(E=c.a.createElement("div",{className:"uagb-box-shadow-advanced spectra-control-popup"},y));const T=c.a.createElement("div",{className:"spectra-control-popup__options--action-wrapper"},c.a.createElement("span",{className:"uag-control-label"},h),c.a.createElement(r.Button,{className:"uag-box-shadow-button spectra-control-popup__options--action-button","aria-pressed":a,onClick:()=>{if(t(!a),!a){var e;const{getSelectedBlock:a}=Object(g.select)("core/block-editor"),t=null===(e=a())||void 0===e?void 0:e.name,l=Object(d.a)("uagSettingState"),o={...l,[t]:{...null==l?void 0:l[t],selectedSetting:".uag-box-shadow-options"}},n=Object(d.a)();n&&n.setItem("uagSettingState",JSON.stringify(o))}}},c.a.createElement(r.Dashicon,{icon:"edit"})));return O?c.a.createElement("div",{className:"components-base-control uag-box-shadow-options spectra-control-popup__options "+j},T,a&&E):c.a.createElement(c.a.Fragment,null,y)}},211:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-gradient-picker .components-custom-gradient-picker__gradient-bar {\n  border-radius: 5px;\n  height: 30px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__control-point-button {\n    top: 9px;\n    width: 12px;\n    height: 12px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__insert-point {\n    top: 7px; }\n",""]),a.a=o},213:function(e,a,t){"use strict";var l,o=t(15),n=t.n(o),r=t(211),u=0,i={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=r.a.locals||{},b.use=function(){return u++||(l=n()(r.a,i)),b},b.unuse=function(){u>0&&!--u&&(l(),l=null)};var c=b,g=t(7),d=t(0),s=t.n(d);a.a=e=>{Object(d.useLayoutEffect)(()=>(c.use(),()=>{c.unuse()}),[]);const{setAttributes:a,backgroundGradient:t}=e;return s.a.createElement(g.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})},className:"uagb-gradient-picker"})}},215:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,"/* stylelint-disable color-hex-case, color-hex-length */\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient,\n.uag-bg-select-control .uagb-responsive-select-control {\n  margin-top: 25px; }\n\n.uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs {\n  display: block; }\n  .uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 100%; }\n\n.uag-bg-select-control .uagb-size-type-field-tabs {\n  display: flex;\n  justify-content: space-between; }\n  .uag-bg-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 45%; }\n\n.uag-bg-select-control .uag-background-image-overlay-type .components-select-control {\n  flex-direction: row;\n  align-items: center; }\n  .uag-bg-select-control .uag-background-image-overlay-type .components-select-control .components-input-control__container {\n    width: 45%;\n    flex: unset; }\n\n.uag-bg-select-control .uag-background-image-size .uagb-responsive-control-inner > .components-base-control {\n  display: block;\n  margin-top: 25px; }\n\n.uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs {\n  flex-direction: column; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control {\n    width: 100%; }\n    .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker {\n      border-radius: 3px;\n      border-color: #E6E7E9; }\n      .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker img {\n        border-radius: 3px; }\n",""]),a.a=o},217:function(e,a,t){"use strict";var l,o=t(1),n=t(18),r=t(7),u=t(15),i=t.n(u),b=t(215),c=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=b.a.locals||{},d.use=function(){return c++||(l=i()(b.a,g)),d},d.unuse=function(){c>0&&!--c&&(l(),l=null)};var s=d,m=t(213),v=t(0),p=t.n(v),_=t(206),f=t(27),k=t(209),h=t(11),O=t(68),E=e=>{const{backgroundImage:a,setAttributes:t}=e,l=Object(h.a)(),n=l.toLowerCase(),r=e=>{e&&e.url?e.type&&"image"===e.type?t({[a[n].label]:e}):t({[a[n].label]:null}):t({[a[n].label]:null})},u=()=>{t({[a[n].label]:""})},i={};return i.Desktop=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.desktop.value,onRemoveImage:u,label:!1}),i.Tablet=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.tablet.value,onRemoveImage:u,label:!1}),i.Mobile=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.mobile.value,onRemoveImage:u,label:!1}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(O.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),i[l]?i[l]:i.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},j=e=>{var a,t,l;const{backgroundPosition:n,backgroundImage:u,setAttributes:i}=e,b=Object(h.a)(),c=b.toLowerCase(),g={},d=null===(a=u[c])||void 0===a||null===(t=a.value)||void 0===t?void 0:t.url,s=null===(l=n[c])||void 0===l?void 0:l.value;return g.Desktop=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;i({[null===(a=n[c])||void 0===a?void 0:a.label]:e})}}),g.Tablet=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;i({[null===(a=n[c])||void 0===a?void 0:a.label]:e})}}),g.Mobile=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;i({[null===(a=n[c])||void 0===a?void 0:a.label]:e})}}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(O.a,{label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),responsive:!0})),g[b]?g[b]:g.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},y=t(21),T=t(8);a.a=e=>{var a,t;Object(v.useLayoutEffect)(()=>(s.use(),()=>{s.unuse()}),[]);const l=Object(h.a)().toLowerCase(),{setAttributes:u,backgroundImageColor:i,overlayType:b,backgroundSize:c,backgroundRepeat:g,backgroundAttachment:d,backgroundPosition:O,backgroundImage:x,backgroundColor:C,backgroundVideoType:S,backgroundType:w,backgroundVideo:M,backgroundVideoColor:I,onOpacityChange:P,backgroundCustomSize:N,backgroundCustomSizeType:A,imageResponsive:V,gradientOverlay:R}=e;let B=[];B=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Classic","ultimate-addons-for-gutenberg")}],R.value&&B.push({value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")});const z=[{value:"color",icon:T.a.bg_color,tooltip:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",icon:T.a.bg_gradient,tooltip:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",icon:T.a.bg_image,tooltip:Object(o.__)("Image","ultimate-addons-for-gutenberg")}];let L=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}];N||(L=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]),S.value&&z.push({value:"video",icon:T.a.bg_video,tooltip:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const F=p.a.createElement(p.a.Fragment,null,p.a.createElement(y.a,{setAttributes:u,label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),data:{value:w.value,label:w.label},options:z,showIcons:!0,colorVariant:"secondary",layoutVariant:"inline"}),"color"===w.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C.value?C.value:"",data:{value:C.value,label:C.label},setAttributes:u})),"image"===w.value&&p.a.createElement("div",{className:"uag-background-image"},!V&&p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&u({[x.label]:e}):u({[x.label]:null})},backgroundImage:x.value,onRemoveImage:()=>{u({[x.label]:null})}}),!V&&x.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:O.value,onChange:e=>u({[O.label]:e}),options:[{value:"left top",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:d.value,onChange:e=>u({[d.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>u({[g.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:c.value,onChange:e=>u({[c.label]:e}),options:L}),"custom"===c.value&&N&&p.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:N.desktop.value,label:N.desktop.label},tablet:{value:N.tablet.value,label:N.tablet.label},mobile:{value:N.mobile.value,label:N.mobile.label}},min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:A.value,label:A.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),V&&x&&p.a.createElement(E,{backgroundImage:x,setAttributes:u}),V&&x[l]&&(null===(a=x[l])||void 0===a?void 0:a.value)&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(j,{backgroundPosition:O,setAttributes:u,backgroundImage:x})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(k.a,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),data:d,options:{desktop:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(k.a,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),data:g,options:{desktop:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(k.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:c,options:{desktop:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]},setAttributes:u}),"custom"===c[l].value&&N&&p.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:N,min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:A.value,label:A.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),b&&x&&(V&&(null===(t=x[l])||void 0===t?void 0:t.value)||!V&&(null==x?void 0:x.value))&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(y.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:b.value,label:b.label},className:"uagb-multi-button-alignment-control",options:B,showIcons:!1})),"color"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:i.value,data:{value:i.value,label:i.label},setAttributes:u})),"gradient"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))),R.value&&"gradient"===w.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===w.value&&S.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&u({[M.label]:e}):u({[M.label]:null})},backgroundImage:M.value,onRemoveImage:()=>{u({[M.label]:null})},showVideoInput:!0})),"video"===w.value&&M.value&&S.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},b&&M&&M.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(y.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:b.value,label:b.label},className:"uagb-multi-button-alignment-control",options:B,showIcons:!1})),"color"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:I.value,data:{value:I.value,label:I.label},setAttributes:u,onOpacityChange:P})),R.value&&"gradient"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},F)}},505:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(1),r=t(10),u=t(210),i=t(82),b=t(28),c=t(36),g=t(20),d=t(217),s=t(80),m=t(21),v=t(13),p=t(5),_=t(7),f=t(17);function k(){return(k=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const h=e=>{e=e.parentProps;const{attributes:a,setAttributes:t,deviceType:h}=e,{align:O,contentWidth:E,width:j,innerWidth:y,innerWidthType:T,tag:x,themeWidth:C,leftPadding:S,rightPadding:w,topPadding:M,bottomPadding:I,leftMargin:P,rightMargin:N,topMargin:A,bottomMargin:V,topPaddingTablet:R,bottomPaddingTablet:B,leftPaddingTablet:z,rightPaddingTablet:L,topMarginTablet:F,bottomMarginTablet:W,leftMarginTablet:G,rightMarginTablet:U,topPaddingMobile:D,bottomPaddingMobile:H,leftPaddingMobile:J,rightPaddingMobile:q,topMarginMobile:X,bottomMarginMobile:$,leftMarginMobile:K,rightMarginMobile:Q,backgroundType:Y,backgroundImage:Z,backgroundVideo:ee,backgroundColor:ae,backgroundPosition:te,backgroundAttachment:le,backgroundRepeat:oe,backgroundSize:ne,backgroundVideoColor:re,backgroundVideoOpacity:ue,backgroundImageColor:ie,overlayType:be,mobileMarginType:ce,tabletMarginType:ge,desktopMarginType:de,mobilePaddingType:se,tabletPaddingType:me,desktopPaddingType:ve,boxShadowColor:pe,boxShadowHOffset:_e,boxShadowVOffset:fe,boxShadowBlur:ke,boxShadowSpread:he,boxShadowPosition:Oe,spacingLink:Ee,marginspacingLink:je,gradientValue:ye}=a;let Te=["left","center","right"];return"full_width"===E&&(Te=["wide","full"]),o.a.createElement(l.Suspense,{fallback:Object(r.a)()},o.a.createElement(p.BlockControls,null,o.a.createElement(p.AlignmentToolbar,{value:O,onChange:e=>{t({align:e})},controls:Te})),o.a.createElement(p.InspectorControls,null,o.a.createElement(i.a,null,o.a.createElement(b.b,b.a.general,o.a.createElement(f.a,{initialOpen:!0},o.a.createElement(m.a,{setAttributes:t,label:Object(n.__)("Content Width","ultimate-addons-for-gutenberg"),data:{value:E,label:"contentWidth"},className:"uagb-multi-button-alignment-control",options:[{value:"boxed",label:"Boxed"},{value:"full_width",label:"Full Width"}],showIcons:!1}),"boxed"===E&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{setAttributes:t,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:O,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),o.a.createElement(g.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:j,data:{value:j,label:"width"},min:0,max:2e3,displayUnit:!1})),"boxed"!==E&&o.a.createElement(_.ToggleControl,{label:Object(n.__)("Inherit Inner Width from Theme","ultimate-addons-for-gutenberg"),checked:C,onChange:()=>t({themeWidth:!C})}),"boxed"!==E&&!C&&o.a.createElement(g.a,{label:Object(n.__)("Inner Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:y,data:{value:y,label:"innerWidth"},min:0,max:2e3,unit:{value:T,label:"innerWidthType"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),o.a.createElement(_.SelectControl,{label:Object(n.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:x,onChange:e=>t({tag:e}),options:[{value:"div",label:Object(n.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(n.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(n.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(n.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(n.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(n.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(n.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(n.__)("nav","ultimate-addons-for-gutenberg")}]}))),o.a.createElement(b.b,b.a.style,o.a.createElement(f.a,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(d.a,k({setAttributes:t,backgroundGradient:{value:ye,label:"gradientValue"},backgroundImageColor:{value:ie,label:"backgroundImageColor"},overlayType:{value:be,label:"overlayType"},gradientOverlay:{value:!0},backgroundSize:{value:ne,label:"backgroundSize"},backgroundRepeat:{value:oe,label:"backgroundRepeat"},backgroundAttachment:{value:le,label:"backgroundAttachment"},backgroundPosition:{value:te,label:"backgroundPosition"},backgroundImage:{value:Z,label:"backgroundImage"},backgroundColor:{value:ae,label:"backgroundColor"},backgroundType:{value:Y,label:"backgroundType"},backgroundVideoType:{value:!0},backgroundVideo:{value:ee,label:"backgroundVideo"},backgroundVideoColor:{value:re,label:"backgroundVideoColor"},backgroundVideoOpacity:{value:ue,label:"backgroundVideoOpacity"},onOpacityChange:e=>t({backgroundVideoOpacity:e})},e))),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{title:Object(n.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.a,{setAttributes:t,prefix:"overall",attributes:a,deviceType:h,disableBottomSeparator:!0,disabledBorderTitle:!0})),o.a.createElement(f.a,{title:"Box Shadow",initialOpen:!1},o.a.createElement(u.a,{setAttributes:t,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:pe,label:"boxShadowColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:_e,label:"boxShadowHOffset",title:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:fe,label:"boxShadowVOffset",title:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:ke,label:"boxShadowBlur",title:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:he,label:"boxShadowSpread",title:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Oe,label:"boxShadowPosition",title:Object(n.__)("Position","ultimate-addons-for-gutenberg")}}))),o.a.createElement(f.a,{title:"Spacing",initialOpen:!1},o.a.createElement(c.a,k({},e,{label:Object(n.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:A,label:"topMargin"},valueRight:{value:N,label:"rightMargin"},valueBottom:{value:V,label:"bottomMargin"},valueLeft:{value:P,label:"leftMargin"},valueTopTablet:{value:F,label:"topMarginTablet"},valueRightTablet:{value:U,label:"rightMarginTablet"},valueBottomTablet:{value:W,label:"bottomMarginTablet"},valueLeftTablet:{value:G,label:"leftMarginTablet"},valueTopMobile:{value:X,label:"topMarginMobile"},valueRightMobile:{value:Q,label:"rightMarginMobile"},valueBottomMobile:{value:$,label:"bottomMarginMobile"},valueLeftMobile:{value:K,label:"leftMarginMobile"},unit:{value:de,label:"desktopMarginType"},mUnit:{value:ce,label:"mobileMarginType"},tUnit:{value:ge,label:"tabletMarginType"},deviceType:h,attributes:a,setAttributes:t,link:{value:je,label:"marginspacingLink"}})),o.a.createElement(c.a,k({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:M,label:"topPadding"},valueRight:{value:w,label:"rightPadding"},valueBottom:{value:I,label:"bottomPadding"},valueLeft:{value:S,label:"leftPadding"},valueTopTablet:{value:R,label:"topPaddingTablet"},valueRightTablet:{value:L,label:"rightPaddingTablet"},valueBottomTablet:{value:B,label:"bottomPaddingTablet"},valueLeftTablet:{value:z,label:"leftPaddingTablet"},valueTopMobile:{value:D,label:"topPaddingMobile"},valueRightMobile:{value:q,label:"rightPaddingMobile"},valueBottomMobile:{value:H,label:"bottomPaddingMobile"},valueLeftMobile:{value:J,label:"leftPaddingMobile"},unit:{value:ve,label:"desktopPaddingType"},mUnit:{value:se,label:"mobilePaddingType"},tUnit:{value:me,label:"tabletPaddingType"},deviceType:h,attributes:a,setAttributes:t,link:{value:Ee,label:"spacingLink"}})))),o.a.createElement(b.b,k({},b.a.advance,{parentProps:e})))))};a.default=o.a.memo(h)}}]);