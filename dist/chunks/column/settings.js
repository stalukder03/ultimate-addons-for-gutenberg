(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[16],{210:function(e,a,t){"use strict";var l=t(1),o=t(7),n=t(5),r=t(0),u=t.n(r),i=t(8);a.a=e=>{const{onSelectImage:a,backgroundImage:t,onRemoveImage:r,showVideoInput:g,label:c,disableRemove:b=!1,allow:s=["image"]}=e;let d,m=Object(l.__)("Image","ultimate-addons-for-gutenberg"),p=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Image","ultimate-addons-for-gutenberg"),_=["image"];g&&(m=Object(l.__)("Video","ultimate-addons-for-gutenberg"),p=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Video","ultimate-addons-for-gutenberg"),_=["video"],d=i.a.video_placeholder),m=c||m,m=!1===c?c:m,"Lottie Animation"===c&&(p=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),_=s,d=i.a.lottie);const k=e=>u.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},i.a[e]);return u.a.createElement(o.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+c,label:m},u.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!d&&(null==t?void 0:t.url)&&`url("${(e=>{let a=e;switch(/(?:\.([^.]+))?$/.exec(String(a))[1]){case"json":a="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":a=""}return a})(null==t?void 0:t.url)}")`}},d&&(null==t?void 0:t.url)&&u.a.createElement("div",{className:"spectra-media-control__icon"},d),u.a.createElement(n.MediaUpload,{title:p,onSelect:a,allowedTypes:_,value:t,render:e=>{let{open:a}=e;return(e=>{const a=null!=t&&t.url?"replace":"add";return u.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+a,onClick:e},"add"===a?k(a):u.a.createElement("div",{className:"uag-control-label"},v))})(a)}}),!b&&(null==t?void 0:t.url)&&u.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:r},k("close"))),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},213:function(e,a,t){"use strict";var l,o=t(0),n=t.n(o),r=t(7),u=t(11),i=t(64),g=t(15),c=t.n(g),b=t(215),s=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=b.a.locals||{},m.use=function(){return s++||(l=c()(b.a,d)),m},m.unuse=function(){s>0&&!--s&&(l(),l=null)};var p=m;a.a=e=>{Object(o.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const{label:a,data:t,setAttributes:l,options:g}=e,c=Object(u.a)(),b={};return b.Desktop=n.a.createElement(r.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:g.desktop}),b.Tablet=n.a.createElement(r.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:g.tablet||g.desktop}),b.Mobile=n.a.createElement(r.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:g.mobile||g.desktop}),n.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},n.a.createElement("div",{className:"uagb-size-type-field-tabs"},n.a.createElement("div",{className:"uagb-control__header"},n.a.createElement(i.a,{label:a,responsive:!0})),b[c]?b[c]:b.Desktop),e.help&&n.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},215:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-responsive-select-control .uagb-size-type-field-tabs {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n  .uagb-responsive-select-control .uagb-size-type-field-tabs .uagb-control__header {\n    margin-bottom: 0; }\n",""]),a.a=o},217:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-gradient-picker .components-custom-gradient-picker__gradient-bar {\n  border-radius: 5px;\n  height: 30px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__control-point-button {\n    top: 9px;\n    width: 12px;\n    height: 12px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__insert-point {\n    top: 7px; }\n",""]),a.a=o},218:function(e,a,t){"use strict";var l,o=t(15),n=t.n(o),r=t(217),u=0,i={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=r.a.locals||{},g.use=function(){return u++||(l=n()(r.a,i)),g},g.unuse=function(){u>0&&!--u&&(l(),l=null)};var c=g,b=t(7),s=t(0),d=t.n(s);a.a=e=>{Object(s.useLayoutEffect)(()=>(c.use(),()=>{c.unuse()}),[]);const{setAttributes:a,backgroundGradient:t}=e;return d.a.createElement(b.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})},className:"uagb-gradient-picker"})}},220:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,"/* stylelint-disable color-hex-case, color-hex-length */\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient,\n.uag-bg-select-control .uagb-responsive-select-control {\n  margin-top: 25px; }\n  .uag-bg-select-control .uag-background-color .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-gradient .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-opacity .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-video .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-video-overlay .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-video-opacity .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-attachment .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-repeat .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-size .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-overlay-type .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-overlay-color .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-overlay-gradient .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uagb-responsive-select-control .uagb-size-type-field-tabs {\n    display: flex;\n    justify-content: space-between; }\n    .uag-bg-select-control .uag-background-color .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-gradient .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-opacity .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-video .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-video-overlay .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-video-opacity .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-attachment .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-repeat .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-size .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-overlay-type .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-overlay-color .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-overlay-gradient .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n      width: 45%; }\n\n.uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs {\n  display: block; }\n  .uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 100%; }\n\n.uag-bg-select-control .uag-responsive-image-select.uagb-responsive-select-control .uagb-size-type-field-tabs .uagb-control__header {\n  margin-bottom: 10px; }\n\n.uag-bg-select-control .uag-background-image-overlay-type .components-select-control {\n  flex-direction: row;\n  align-items: center; }\n  .uag-bg-select-control .uag-background-image-overlay-type .components-select-control .components-input-control__container {\n    width: 45%;\n    flex: unset; }\n\n.uag-bg-select-control .uag-background-image-size .uagb-responsive-control-inner > .components-base-control {\n  display: block;\n  margin-top: 25px; }\n\n.uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs {\n  flex-direction: column; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .uagb-control__header {\n    margin-bottom: 10px; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control {\n    width: 100%; }\n    .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker {\n      border-radius: 3px;\n      border-color: #E6E7E9; }\n      .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker img {\n        border-radius: 3px; }\n",""]),a.a=o},222:function(e,a,t){"use strict";var l,o=t(1),n=t(17),r=t(7),u=t(15),i=t.n(u),g=t(220),c=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=g.a.locals||{},s.use=function(){return c++||(l=i()(g.a,b)),s},s.unuse=function(){c>0&&!--c&&(l(),l=null)};var d=s,m=t(218),p=t(0),v=t.n(p),_=t(210),k=t(25),f=t(213),y=t(11),h=t(64),E=e=>{const{backgroundImage:a,setAttributes:t}=e,l=Object(y.a)(),n=l.toLowerCase(),r=e=>{e&&e.url?e.type&&"image"===e.type?t({[a[n].label]:e}):t({[a[n].label]:null}):t({[a[n].label]:null})},u=()=>{t({[a[n].label]:""})},i={};return i.Desktop=v.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.desktop.value,onRemoveImage:u,label:!1}),i.Tablet=v.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.tablet.value,onRemoveImage:u,label:!1}),i.Mobile=v.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.mobile.value,onRemoveImage:u,label:!1}),v.a.createElement("div",{className:"uag-responsive-image-select components-base-control uagb-responsive-select-control"},v.a.createElement("div",{className:"uagb-size-type-field-tabs"},v.a.createElement("div",{className:"uagb-control__header"},v.a.createElement(h.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),i[l]?i[l]:i.Desktop),e.help&&v.a.createElement("p",{className:"uag-control-help-notice"},e.help))},O=e=>{var a,t,l;const{backgroundPosition:n,backgroundImage:u,setAttributes:i}=e,g=Object(y.a)(),c=g.toLowerCase(),b={},s=null===(a=u[c])||void 0===a||null===(t=a.value)||void 0===t?void 0:t.url,d=null===(l=n[c])||void 0===l?void 0:l.value;return b.Desktop=v.a.createElement(r.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;i({[null===(a=n[c])||void 0===a?void 0:a.label]:e})}}),b.Tablet=v.a.createElement(r.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;i({[null===(a=n[c])||void 0===a?void 0:a.label]:e})}}),b.Mobile=v.a.createElement(r.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;i({[null===(a=n[c])||void 0===a?void 0:a.label]:e})}}),v.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},v.a.createElement("div",{className:"uagb-size-type-field-tabs"},v.a.createElement("div",{className:"uagb-control__header"},v.a.createElement(h.a,{label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),responsive:!0})),b[g]?b[g]:b.Desktop),e.help&&v.a.createElement("p",{className:"uag-control-help-notice"},e.help))},j=t(22),T=t(8);a.a=e=>{var a,t;Object(p.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]);const l=Object(y.a)().toLowerCase(),{setAttributes:u,backgroundImageColor:i,overlayType:g,backgroundSize:c,backgroundRepeat:b,backgroundAttachment:s,backgroundPosition:h,backgroundImage:M,backgroundColor:C,backgroundVideoType:z,backgroundType:P,backgroundVideo:N,backgroundVideoColor:I,onOpacityChange:A,backgroundCustomSize:S,backgroundCustomSizeType:x,imageResponsive:R,gradientOverlay:w}=e;let V=[];V=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Classic","ultimate-addons-for-gutenberg")}],w.value&&V.push({value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")});const L=[{value:"color",icon:T.a.bg_color,tooltip:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",icon:T.a.bg_gradient,tooltip:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",icon:T.a.bg_image,tooltip:Object(o.__)("Image","ultimate-addons-for-gutenberg")}];let B=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}];S||(B=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]),z.value&&L.push({value:"video",icon:T.a.bg_video,tooltip:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const G=v.a.createElement(v.a.Fragment,null,v.a.createElement(j.a,{setAttributes:u,label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),data:{value:P.value,label:P.label},options:L,showIcons:!0,colorVariant:"secondary",layoutVariant:"inline"}),"color"===P.value&&v.a.createElement("div",{className:"uag-background-color"},v.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C.value?C.value:"",data:{value:C.value,label:C.label},setAttributes:u})),"image"===P.value&&v.a.createElement("div",{className:"uag-background-image"},!R&&v.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&u({[M.label]:e}):u({[M.label]:null})},backgroundImage:M.value,onRemoveImage:()=>{u({[M.label]:null})}}),!R&&M.value&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(r.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:h.value,onChange:e=>u({[h.label]:e}),options:[{value:"left top",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-attachment"},v.a.createElement(r.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:s.value,onChange:e=>u({[s.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-repeat"},v.a.createElement(r.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:b.value,onChange:e=>u({[b.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-size"},v.a.createElement(r.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:c.value,onChange:e=>u({[c.label]:e}),options:B}),"custom"===c.value&&S&&v.a.createElement(k.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:S.desktop.value,label:S.desktop.label},tablet:{value:S.tablet.value,label:S.tablet.label},mobile:{value:S.mobile.value,label:S.mobile.label}},min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:x.value,label:x.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),R&&M&&v.a.createElement(E,{backgroundImage:M,setAttributes:u}),R&&M[l]&&(null===(a=M[l])||void 0===a?void 0:a.value)&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(O,{backgroundPosition:h,setAttributes:u,backgroundImage:M})),v.a.createElement("div",{className:"uag-background-image-attachment"},v.a.createElement(f.a,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),data:s,options:{desktop:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]},setAttributes:u})),v.a.createElement("div",{className:"uag-background-image-repeat"},v.a.createElement(f.a,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),data:b,options:{desktop:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]},setAttributes:u})),v.a.createElement("div",{className:"uag-background-image-size"},v.a.createElement(f.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:c,options:{desktop:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]},setAttributes:u}),"custom"===c[l].value&&S&&v.a.createElement(k.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:S,min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:x.value,label:x.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),g&&M&&(R&&(null===(t=M[l])||void 0===t?void 0:t.value)||!R&&(null==M?void 0:M.value))&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-overlay-type"},v.a.createElement(j.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:g.value,label:g.label},className:"uagb-multi-button-alignment-control",options:V,showIcons:!1})),"color"===g.value&&v.a.createElement("div",{className:"uag-background-image-overlay-color"},v.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:i.value,data:{value:i.value,label:i.label},setAttributes:u})),"gradient"===g.value&&v.a.createElement("div",{className:"uag-background-image-overlay-gradient"},v.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))),w.value&&"gradient"===P.value&&v.a.createElement("div",{className:"uag-background-gradient"},v.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===P.value&&z.value&&v.a.createElement("div",{className:"uag-background-video"},v.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&u({[N.label]:e}):u({[N.label]:null})},backgroundImage:N.value,onRemoveImage:()=>{u({[N.label]:null})},showVideoInput:!0})),"video"===P.value&&N.value&&z.value&&v.a.createElement("div",{className:"uag-background-video-overlay"},g&&N&&N.value&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-overlay-type"},v.a.createElement(j.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:g.value,label:g.label},className:"uagb-multi-button-alignment-control",options:V,showIcons:!1})),"color"===g.value&&v.a.createElement("div",{className:"uag-background-image-overlay-color"},v.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:I.value,data:{value:I.value,label:I.label},setAttributes:u,onOpacityChange:A})),w.value&&"gradient"===g.value&&v.a.createElement("div",{className:"uag-background-image-overlay-gradient"},v.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))));return v.a.createElement("div",{className:"uag-bg-select-control components-base-control"},G)}},506:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(10),r=t(222),u=t(75),i=t(37),g=t(1),c=t(79),b=t(30),s=t(25),d=t(5),m=t(7),p=t(18);function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const _=e=>{e=e.parentProps;const{attributes:{topPadding:a,bottomPadding:t,leftPadding:_,rightPadding:k,topPaddingTablet:f,bottomPaddingTablet:y,leftPaddingTablet:h,rightPaddingTablet:E,topPaddingMobile:O,bottomPaddingMobile:j,leftPaddingMobile:T,rightPaddingMobile:M,topMargin:C,bottomMargin:z,leftMargin:P,rightMargin:N,topMarginTablet:I,bottomMarginTablet:A,leftMarginTablet:S,rightMarginTablet:x,topMarginMobile:R,bottomMarginMobile:w,leftMarginMobile:V,rightMarginMobile:L,backgroundType:B,backgroundImage:G,backgroundColor:F,backgroundPosition:W,backgroundAttachment:D,backgroundRepeat:U,backgroundSize:J,backgroundImageColor:X,gradientValue:$,overlayType:q,mobilePaddingType:H,tabletPaddingType:K,desktopPaddingType:Q,colWidthMobile:Y,colWidthTablet:Z,colWidth:ee,paddingLink:ae,marginLink:te,mobileMarginType:le,tabletMarginType:oe,desktopMarginType:ne},deviceType:re,setAttributes:ue}=e;return o.a.createElement(l.Suspense,{fallback:Object(n.a)()},o.a.createElement(d.InspectorControls,null,o.a.createElement(c.a,null,o.a.createElement(b.b,b.a.general,o.a.createElement(m.Notice,{status:"warning",isDismissible:!1},Object(g.__)("This block has been deprecated. We recommend using the new","ultimate-addons-for-gutenberg")," ",o.a.createElement("strong",null,Object(g.__)("Container","ultimate-addons-for-gutenberg"))," ",Object(g.__)("block instead for more flexibility, and better code markup.","ultimate-addons-for-gutenberg")),o.a.createElement(p.a,{title:Object(g.__)("Layout","ultimate-addons-for-gutenberg")},o.a.createElement(s.a,{label:Object(g.__)("Content Width (%)","ultimate-addons-for-gutenberg"),data:{desktop:{value:ee,label:"colWidth"},tablet:{value:Z,label:"colWidthTablet"},mobile:{value:Y,label:"colWidthMobile"}},min:0,max:100,displayUnit:!1,setAttributes:ue}))),o.a.createElement(b.b,b.a.style,o.a.createElement(p.a,{title:Object(g.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(r.a,v({setAttributes:ue,backgroundGradient:{value:$,label:"gradientValue"},backgroundImageColor:{value:X,label:"backgroundImageColor"},overlayType:{value:q,label:"overlayType"},gradientOverlay:{value:!1},backgroundSize:{value:J,label:"backgroundSize"},backgroundRepeat:{value:U,label:"backgroundRepeat"},backgroundAttachment:{value:D,label:"backgroundAttachment"},backgroundPosition:{value:W,label:"backgroundPosition"},backgroundImage:{value:G,label:"backgroundImage"},backgroundColor:{value:F,label:"backgroundColor"},backgroundType:{value:B,label:"backgroundType"},backgroundVideoType:{value:!1}},e))),o.a.createElement(p.a,{title:Object(g.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.a,{setAttributes:ue,prefix:"column",attributes:e.attributes,deviceType:re,disableBottomSeparator:!0,disabledBorderTitle:!0})),o.a.createElement(p.a,{title:Object(g.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(i.a,v({},e,{label:Object(g.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:a,label:"topPadding"},valueRight:{value:k,label:"rightPadding"},valueBottom:{value:t,label:"bottomPadding"},valueLeft:{value:_,label:"leftPadding"},valueTopTablet:{value:f,label:"topPaddingTablet"},valueRightTablet:{value:E,label:"rightPaddingTablet"},valueBottomTablet:{value:y,label:"bottomPaddingTablet"},valueLeftTablet:{value:h,label:"leftPaddingTablet"},valueTopMobile:{value:O,label:"topPaddingMobile"},valueRightMobile:{value:M,label:"rightPaddingMobile"},valueBottomMobile:{value:j,label:"bottomPaddingMobile"},valueLeftMobile:{value:T,label:"leftPaddingMobile"},unit:{value:Q,label:"desktopPaddingType"},mUnit:{value:H,label:"mobilePaddingType"},tUnit:{value:K,label:"tabletPaddingType"},attributes:e.attributes,setAttributes:ue,link:{value:ae,label:"paddingLink"}})),o.a.createElement(i.a,v({},e,{label:Object(g.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:C,label:"topMargin"},valueRight:{value:N,label:"rightMargin"},valueBottom:{value:z,label:"bottomMargin"},valueLeft:{value:P,label:"leftMargin"},valueTopTablet:{value:I,label:"topMarginTablet"},valueRightTablet:{value:x,label:"rightMarginTablet"},valueBottomTablet:{value:A,label:"bottomMarginTablet"},valueLeftTablet:{value:S,label:"leftMarginTablet"},valueTopMobile:{value:R,label:"topMarginMobile"},valueRightMobile:{value:L,label:"rightMarginMobile"},valueBottomMobile:{value:w,label:"bottomMarginMobile"},valueLeftMobile:{value:V,label:"leftMarginMobile"},unit:{value:ne,label:"desktopMarginType"},mUnit:{value:le,label:"mobileMarginType"},tUnit:{value:oe,label:"tabletMarginType"},attributes:e.attributes,setAttributes:ue,link:{value:te,label:"marginLink"}})))),o.a.createElement(b.b,v({},b.a.advance,{parentProps:e})))))};a.default=o.a.memo(_)}}]);