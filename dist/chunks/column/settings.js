(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[17],{215:function(e,a,t){"use strict";var l=t(1),o=t(7),n=t(5),u=t(0),r=t.n(u),i=t(8);a.a=e=>{const{onSelectImage:a,backgroundImage:t,onRemoveImage:u,showVideoInput:b,label:g,disableRemove:c=!1,allow:s=["image"]}=e;let d,m=Object(l.__)("Image","ultimate-addons-for-gutenberg"),p=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Image","ultimate-addons-for-gutenberg"),_=["image"];b&&(m=Object(l.__)("Video","ultimate-addons-for-gutenberg"),p=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Video","ultimate-addons-for-gutenberg"),_=["video"],d=i.a.video_placeholder),m=g||m,m=!1===g?g:m,"Lottie Animation"===g&&(p=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),_=s,d=i.a.lottie);const f=e=>r.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},i.a[e]);return r.a.createElement(o.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+g,label:m},r.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!d&&(null==t?void 0:t.url)&&`url("${(e=>{let a=e;switch(/(?:\.([^.]+))?$/.exec(String(a))[1]){case"json":a="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":a=""}return a})(null==t?void 0:t.url)}")`}},d&&(null==t?void 0:t.url)&&r.a.createElement("div",{className:"spectra-media-control__icon"},d),r.a.createElement(n.MediaUpload,{title:p,onSelect:a,allowedTypes:_,value:t,render:e=>{let{open:a}=e;return(e=>{const a=null!=t&&t.url?"replace":"add";return r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+a,onClick:e},"add"===a?f(a):r.a.createElement("div",{className:"uag-control-label"},v))})(a)}}),!c&&(null==t?void 0:t.url)&&r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:u},f("close"))),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},218:function(e,a,t){"use strict";var l,o=t(0),n=t.n(o),u=t(7),r=t(11),i=t(50),b=t(14),g=t.n(b),c=t(220),s=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=c.a.locals||{},m.use=function(){return s++||(l=g()(c.a,d)),m},m.unuse=function(){s>0&&!--s&&(l(),l=null)};var p=m;a.a=e=>{Object(o.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const{label:a,data:t,setAttributes:l,options:b}=e,g=Object(r.a)(),c={};return c.Desktop=n.a.createElement(u.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:b.desktop}),c.Tablet=n.a.createElement(u.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:b.tablet||b.desktop}),c.Mobile=n.a.createElement(u.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:b.mobile||b.desktop}),n.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},n.a.createElement("div",{className:"uagb-size-type-field-tabs"},n.a.createElement("div",{className:"uagb-control__header"},n.a.createElement(i.a,{label:a,responsive:!0})),c[g]?c[g]:c.Desktop),e.help&&n.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},220:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-responsive-select-control .uagb-size-type-field-tabs {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n  .uagb-responsive-select-control .uagb-size-type-field-tabs .uagb-control__header {\n    margin-bottom: 0; }\n",""]),a.a=o},222:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-gradient-picker .components-custom-gradient-picker__gradient-bar {\n  border-radius: 5px;\n  height: 30px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__control-point-button {\n    top: 9px;\n    width: 12px;\n    height: 12px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__insert-point {\n    top: 7px; }\n",""]),a.a=o},223:function(e,a,t){"use strict";var l,o=t(14),n=t.n(o),u=t(222),r=0,i={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=u.a.locals||{},b.use=function(){return r++||(l=n()(u.a,i)),b},b.unuse=function(){r>0&&!--r&&(l(),l=null)};var g=b,c=t(7),s=t(0),d=t.n(s);a.a=e=>{Object(s.useLayoutEffect)(()=>(g.use(),()=>{g.unuse()}),[]);const{setAttributes:a,backgroundGradient:t}=e;return d.a.createElement(c.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})},className:"uagb-gradient-picker"})}},225:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,"/* stylelint-disable color-hex-case, color-hex-length */\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient,\n.uag-bg-select-control .uagb-responsive-select-control {\n  margin-top: 25px; }\n  .uag-bg-select-control .uag-background-color .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-gradient .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-opacity .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-video .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-video-overlay .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-video-opacity .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-attachment .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-repeat .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-size .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-overlay-type .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-overlay-color .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uag-background-image-overlay-gradient .uagb-size-type-field-tabs,\n  .uag-bg-select-control .uagb-responsive-select-control .uagb-size-type-field-tabs {\n    display: flex;\n    justify-content: space-between; }\n    .uag-bg-select-control .uag-background-color .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-gradient .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-opacity .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-video .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-video-overlay .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-video-opacity .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-attachment .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-repeat .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-size .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-overlay-type .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-overlay-color .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uag-background-image-overlay-gradient .uagb-size-type-field-tabs > .components-base-control,\n    .uag-bg-select-control .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n      width: 45%; }\n\n.uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs {\n  display: block; }\n  .uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 100%; }\n\n.uag-bg-select-control .uag-responsive-image-select.uagb-responsive-select-control .uagb-size-type-field-tabs .uagb-control__header {\n  margin-bottom: 10px; }\n\n.uag-bg-select-control .uag-background-image-overlay-type .components-select-control {\n  flex-direction: row;\n  align-items: center; }\n  .uag-bg-select-control .uag-background-image-overlay-type .components-select-control .components-input-control__container {\n    width: 45%;\n    flex: unset; }\n\n.uag-bg-select-control .uag-background-image-size .uagb-responsive-control-inner > .components-base-control {\n  display: block;\n  margin-top: 25px; }\n\n.uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs {\n  flex-direction: column;\n  align-items: flex-start; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .uagb-control__header {\n    margin-bottom: 10px; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control {\n    width: 100%; }\n    .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker {\n      border-radius: 3px;\n      border-color: #E6E7E9; }\n      .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker img {\n        border-radius: 3px; }\n    .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .focal-point-picker__controls-position-unit-control {\n      width: 115px; }\n",""]),a.a=o},227:function(e,a,t){"use strict";var l,o=t(1),n=t(17),u=t(7),r=t(14),i=t.n(r),b=t(225),g=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=b.a.locals||{},s.use=function(){return g++||(l=i()(b.a,c)),s},s.unuse=function(){g>0&&!--g&&(l(),l=null)};var d=s,m=t(223),p=t(0),v=t.n(p),_=t(215),f=t(24),k=t(218),y=t(11),E=t(50),O=e=>{const{backgroundImage:a,setAttributes:t}=e,l=Object(y.a)(),n=l.toLowerCase(),u=e=>{e&&e.url?e.type&&"image"===e.type?t({[a[n].label]:e}):t({[a[n].label]:null}):t({[a[n].label]:null})},r=()=>{t({[a[n].label]:""})},i={};return i.Desktop=v.a.createElement(_.a,{onSelectImage:u,backgroundImage:a.desktop.value,onRemoveImage:r,label:!1}),i.Tablet=v.a.createElement(_.a,{onSelectImage:u,backgroundImage:a.tablet.value,onRemoveImage:r,label:!1}),i.Mobile=v.a.createElement(_.a,{onSelectImage:u,backgroundImage:a.mobile.value,onRemoveImage:r,label:!1}),v.a.createElement("div",{className:"uag-responsive-image-select components-base-control uagb-responsive-select-control"},v.a.createElement("div",{className:"uagb-size-type-field-tabs"},v.a.createElement("div",{className:"uagb-control__header"},v.a.createElement(E.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),i[l]?i[l]:i.Desktop),e.help&&v.a.createElement("p",{className:"uag-control-help-notice"},e.help))},h=e=>{var a,t,l;const{backgroundPosition:n,backgroundImage:r,setAttributes:i}=e,b=Object(y.a)(),g=b.toLowerCase(),c={},s=null===(a=r[g])||void 0===a||null===(t=a.value)||void 0===t?void 0:t.url,d=null===(l=n[g])||void 0===l?void 0:l.value;return c.Desktop=v.a.createElement(u.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;i({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),c.Tablet=v.a.createElement(u.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;i({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),c.Mobile=v.a.createElement(u.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;i({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),v.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},v.a.createElement("div",{className:"uagb-size-type-field-tabs"},v.a.createElement("div",{className:"uagb-control__header"},v.a.createElement(E.a,{label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),responsive:!0})),c[b]?c[b]:c.Desktop),e.help&&v.a.createElement("p",{className:"uag-control-help-notice"},e.help))},j=t(21),T=t(8);a.a=e=>{var a,t;Object(p.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]);const l=Object(y.a)().toLowerCase(),{setAttributes:r,backgroundImageColor:i,overlayType:b,backgroundSize:g,backgroundRepeat:c,backgroundAttachment:s,backgroundPosition:E,backgroundImage:P,backgroundColor:M,backgroundVideoType:C,backgroundType:z,backgroundVideo:x,backgroundVideoColor:N,onOpacityChange:I,backgroundCustomSize:A,backgroundCustomSizeType:S,imageResponsive:w,gradientOverlay:V,customPosition:R,xPositionDesktop:L,xPositionTablet:B,xPositionMobile:D,xPositionType:W,xPositionTypeTablet:F,xPositionTypeMobile:G,yPositionDesktop:U,yPositionTablet:X,yPositionMobile:J,yPositionType:$,yPositionTypeTablet:Y,yPositionTypeMobile:q}=e;let H=[];H=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Classic","ultimate-addons-for-gutenberg")}],V.value&&H.push({value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")});const K=[{value:"color",icon:T.a.bg_color,tooltip:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",icon:T.a.bg_gradient,tooltip:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",icon:T.a.bg_image,tooltip:Object(o.__)("Image","ultimate-addons-for-gutenberg")}];let Q=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}];A||(Q=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]),C.value&&K.push({value:"video",icon:T.a.bg_video,tooltip:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const Z=v.a.createElement(v.a.Fragment,null,v.a.createElement(j.a,{setAttributes:r,label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),data:{value:z.value,label:z.label},options:K,showIcons:!0,colorVariant:"secondary",layoutVariant:"inline"}),"color"===z.value&&v.a.createElement("div",{className:"uag-background-color"},v.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M.value?M.value:"",data:{value:M.value,label:M.label},setAttributes:r})),"image"===z.value&&v.a.createElement("div",{className:"uag-background-image"},!w&&v.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&r({[P.label]:e}):r({[P.label]:null})},backgroundImage:P.value,onRemoveImage:()=>{r({[P.label]:null})}}),!w&&P.value&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(u.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:E.value,onChange:e=>r({[E.label]:e}),options:[{value:"left top",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-attachment"},v.a.createElement(u.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:s.value,onChange:e=>r({[s.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-repeat"},v.a.createElement(u.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:c.value,onChange:e=>r({[c.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-size"},v.a.createElement(u.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>r({[g.label]:e}),options:Q}),"custom"===g.value&&A&&v.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:A.desktop.value,label:A.desktop.label},tablet:{value:A.tablet.value,label:A.tablet.label},mobile:{value:A.mobile.value,label:A.mobile.label}},min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:S.value,label:S.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:r}))),w&&P&&v.a.createElement(O,{backgroundImage:P,setAttributes:r}),w&&P[l]&&(null===(a=P[l])||void 0===a?void 0:a.value)&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(j.a,{setAttributes:r,label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),data:{value:R.value,label:R.label},options:[{value:"default",label:Object(o.__)("Default")},{value:"custom",label:Object(o.__)("Custom")}]})),"custom"!==R.value&&v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(h,{backgroundPosition:E,setAttributes:r,backgroundImage:P})),"custom"===R.value&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(f.a,{label:Object(o.__)("X Position","ultimate-addons-for-gutenberg"),data:{desktop:{value:L.value,label:"xPositionDesktop",unit:{value:W.value,label:"xPositionType"}},tablet:{value:B.value,label:"xPositionTablet",unit:{value:F.value,label:"xPositionTypeTablet"}},mobile:{value:D.value,label:"xPositionMobile",unit:{value:G.value,label:"xPositionTypeMobile"}}},limitMin:{px:-800,"%":-100,em:-100,vw:-100},limitMax:{px:800,"%":100,em:100,vw:100},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(o.__)("VW","ultimate-addons-for-gutenberg"),unitValue:"vw"}],setAttributes:r})),v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(f.a,{label:Object(o.__)("Y Position","ultimate-addons-for-gutenberg"),data:{desktop:{value:U.value,label:"yPositionDesktop",unit:{value:$.value,label:"yPositionType"}},tablet:{value:X.value,label:"yPositionTablet",unit:{value:Y.value,label:"yPositionTypeTablet"}},mobile:{value:J.value,label:"yPositionMobile",unit:{value:q.value,label:"yPositionTypeMobile"}}},limitMin:{px:-800,"%":-100,em:-100,vw:-100},limitMax:{px:800,"%":100,em:100,vw:100},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(o.__)("VW","ultimate-addons-for-gutenberg"),unitValue:"vw"}],setAttributes:r}))),v.a.createElement("div",{className:"uag-background-image-attachment"},v.a.createElement(k.a,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),data:s,options:{desktop:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]},setAttributes:r})),v.a.createElement("div",{className:"uag-background-image-repeat"},v.a.createElement(k.a,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),data:c,options:{desktop:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]},setAttributes:r})),v.a.createElement("div",{className:"uag-background-image-size"},v.a.createElement(k.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:g,options:{desktop:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]},setAttributes:r}),"custom"===g[l].value&&A&&v.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:A,min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:S.value,label:S.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:r}))),b&&P&&(w&&(null===(t=P[l])||void 0===t?void 0:t.value)||!w&&(null==P?void 0:P.value))&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-overlay-type"},v.a.createElement(j.a,{setAttributes:r,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:b.value,label:b.label},className:"uagb-multi-button-alignment-control",options:H,showIcons:!1})),"color"===b.value&&v.a.createElement("div",{className:"uag-background-image-overlay-color"},v.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:i.value,data:{value:i.value,label:i.label},setAttributes:r})),"gradient"===b.value&&v.a.createElement("div",{className:"uag-background-image-overlay-gradient"},v.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:r})))),V.value&&"gradient"===z.value&&v.a.createElement("div",{className:"uag-background-gradient"},v.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===z.value&&C.value&&v.a.createElement("div",{className:"uag-background-video"},v.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&r({[x.label]:e}):r({[x.label]:null})},backgroundImage:x.value,onRemoveImage:()=>{r({[x.label]:null})},showVideoInput:!0})),"video"===z.value&&x.value&&C.value&&v.a.createElement("div",{className:"uag-background-video-overlay"},b&&x&&x.value&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-overlay-type"},v.a.createElement(j.a,{setAttributes:r,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:b.value,label:b.label},className:"uagb-multi-button-alignment-control",options:H,showIcons:!1})),"color"===b.value&&v.a.createElement("div",{className:"uag-background-image-overlay-color"},v.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:N.value,data:{value:N.value,label:N.label},setAttributes:r,onOpacityChange:I})),V.value&&"gradient"===b.value&&v.a.createElement("div",{className:"uag-background-image-overlay-gradient"},v.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:r})))));return v.a.createElement("div",{className:"uag-bg-select-control components-base-control"},Z)}},516:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(10),u=t(227),r=t(75),i=t(38),b=t(1),g=t(79),c=t(31),s=t(24),d=t(5),m=t(7),p=t(18);function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const _=e=>{e=e.parentProps;const{attributes:{topPadding:a,bottomPadding:t,leftPadding:_,rightPadding:f,topPaddingTablet:k,bottomPaddingTablet:y,leftPaddingTablet:E,rightPaddingTablet:O,topPaddingMobile:h,bottomPaddingMobile:j,leftPaddingMobile:T,rightPaddingMobile:P,topMargin:M,bottomMargin:C,leftMargin:z,rightMargin:x,topMarginTablet:N,bottomMarginTablet:I,leftMarginTablet:A,rightMarginTablet:S,topMarginMobile:w,bottomMarginMobile:V,leftMarginMobile:R,rightMarginMobile:L,backgroundType:B,backgroundImage:D,backgroundColor:W,backgroundPosition:F,backgroundAttachment:G,backgroundRepeat:U,backgroundSize:X,backgroundImageColor:J,gradientValue:$,overlayType:Y,mobilePaddingType:q,tabletPaddingType:H,desktopPaddingType:K,colWidthMobile:Q,colWidthTablet:Z,colWidth:ee,paddingLink:ae,marginLink:te,mobileMarginType:le,tabletMarginType:oe,desktopMarginType:ne},deviceType:ue,setAttributes:re}=e;return o.a.createElement(l.Suspense,{fallback:Object(n.a)()},o.a.createElement(d.InspectorControls,null,o.a.createElement(g.a,null,o.a.createElement(c.b,c.a.general,o.a.createElement(m.Notice,{status:"warning",isDismissible:!1},Object(b.__)("This block has been deprecated. We recommend using the new","ultimate-addons-for-gutenberg")," ",o.a.createElement("strong",null,Object(b.__)("Container","ultimate-addons-for-gutenberg"))," ",Object(b.__)("block instead for more flexibility, and better code markup.","ultimate-addons-for-gutenberg")),o.a.createElement(p.a,{title:Object(b.__)("Layout","ultimate-addons-for-gutenberg")},o.a.createElement(s.a,{label:Object(b.__)("Content Width (%)","ultimate-addons-for-gutenberg"),data:{desktop:{value:ee,label:"colWidth"},tablet:{value:Z,label:"colWidthTablet"},mobile:{value:Q,label:"colWidthMobile"}},min:0,max:100,displayUnit:!1,setAttributes:re}))),o.a.createElement(c.b,c.a.style,o.a.createElement(p.a,{title:Object(b.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(u.a,v({setAttributes:re,backgroundGradient:{value:$,label:"gradientValue"},backgroundImageColor:{value:J,label:"backgroundImageColor"},overlayType:{value:Y,label:"overlayType"},gradientOverlay:{value:!0},backgroundSize:{value:X,label:"backgroundSize"},backgroundRepeat:{value:U,label:"backgroundRepeat"},backgroundAttachment:{value:G,label:"backgroundAttachment"},backgroundPosition:{value:F,label:"backgroundPosition"},backgroundImage:{value:D,label:"backgroundImage"},backgroundColor:{value:W,label:"backgroundColor"},backgroundType:{value:B,label:"backgroundType"},backgroundVideoType:{value:!1}},e))),o.a.createElement(p.a,{title:Object(b.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(r.a,{setAttributes:re,prefix:"column",attributes:e.attributes,deviceType:ue,disableBottomSeparator:!0,disabledBorderTitle:!0})),o.a.createElement(p.a,{title:Object(b.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(i.a,v({},e,{label:Object(b.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:a,label:"topPadding"},valueRight:{value:f,label:"rightPadding"},valueBottom:{value:t,label:"bottomPadding"},valueLeft:{value:_,label:"leftPadding"},valueTopTablet:{value:k,label:"topPaddingTablet"},valueRightTablet:{value:O,label:"rightPaddingTablet"},valueBottomTablet:{value:y,label:"bottomPaddingTablet"},valueLeftTablet:{value:E,label:"leftPaddingTablet"},valueTopMobile:{value:h,label:"topPaddingMobile"},valueRightMobile:{value:P,label:"rightPaddingMobile"},valueBottomMobile:{value:j,label:"bottomPaddingMobile"},valueLeftMobile:{value:T,label:"leftPaddingMobile"},unit:{value:K,label:"desktopPaddingType"},mUnit:{value:q,label:"mobilePaddingType"},tUnit:{value:H,label:"tabletPaddingType"},attributes:e.attributes,setAttributes:re,link:{value:ae,label:"paddingLink"}})),o.a.createElement(i.a,v({},e,{label:Object(b.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:M,label:"topMargin"},valueRight:{value:x,label:"rightMargin"},valueBottom:{value:C,label:"bottomMargin"},valueLeft:{value:z,label:"leftMargin"},valueTopTablet:{value:N,label:"topMarginTablet"},valueRightTablet:{value:S,label:"rightMarginTablet"},valueBottomTablet:{value:I,label:"bottomMarginTablet"},valueLeftTablet:{value:A,label:"leftMarginTablet"},valueTopMobile:{value:w,label:"topMarginMobile"},valueRightMobile:{value:L,label:"rightMarginMobile"},valueBottomMobile:{value:V,label:"bottomMarginMobile"},valueLeftMobile:{value:R,label:"leftMarginMobile"},unit:{value:ne,label:"desktopMarginType"},mUnit:{value:le,label:"mobileMarginType"},tUnit:{value:oe,label:"tabletMarginType"},attributes:e.attributes,setAttributes:re,link:{value:te,label:"marginLink"}})))),o.a.createElement(c.b,v({},c.a.advance,{parentProps:e})))))};a.default=o.a.memo(_)}}]);