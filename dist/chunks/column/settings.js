(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[16],{210:function(e,a,t){"use strict";var l=t(1),o=t(7),n=t(5),r=t(0),u=t.n(r),i=t(8);a.a=e=>{const{onSelectImage:a,backgroundImage:t,onRemoveImage:r,showVideoInput:c,label:b,disableRemove:g=!1,allow:s=["image"]}=e;let d,m=Object(l.__)("Image","ultimate-addons-for-gutenberg"),v=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Image","ultimate-addons-for-gutenberg"),_=["image"];c&&(m=Object(l.__)("Video","ultimate-addons-for-gutenberg"),v=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Video","ultimate-addons-for-gutenberg"),_=["video"],d=i.a.video_placeholder),m=b||m,m=!1===b?b:m,"Lottie Animation"===b&&(v=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),_=s,d=i.a.lottie);const k=e=>u.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},i.a[e]);return u.a.createElement(o.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+b,label:m},u.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!d&&(null==t?void 0:t.url)&&`url("${(e=>{let a=e;switch(/(?:\.([^.]+))?$/.exec(String(a))[1]){case"json":a="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":a=""}return a})(null==t?void 0:t.url)}")`}},d&&(null==t?void 0:t.url)&&u.a.createElement("div",{className:"spectra-media-control__icon"},d),u.a.createElement(n.MediaUpload,{title:v,onSelect:a,allowedTypes:_,value:t,render:e=>{let{open:a}=e;return(e=>{const a=null!=t&&t.url?"replace":"add";return u.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+a,onClick:e},"add"===a?k(a):u.a.createElement("div",{className:"uag-control-label"},p))})(a)}}),!g&&(null==t?void 0:t.url)&&u.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:r},k("close"))),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},213:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-responsive-select-control .uagb-size-type-field-tabs {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n  .uagb-responsive-select-control .uagb-size-type-field-tabs .uagb-control__header {\n    margin-bottom: 0; }\n",""]),a.a=o},214:function(e,a,t){"use strict";var l,o=t(0),n=t.n(o),r=t(7),u=t(11),i=t(68),c=t(15),b=t.n(c),g=t(213),s=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return s++||(l=b()(g.a,d)),m},m.unuse=function(){s>0&&!--s&&(l(),l=null)};var v=m;a.a=e=>{Object(o.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const{label:a,data:t,setAttributes:l,options:c}=e,b=Object(u.a)(),g={};return g.Desktop=n.a.createElement(r.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:c.desktop}),g.Tablet=n.a.createElement(r.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:c.tablet||c.desktop}),g.Mobile=n.a.createElement(r.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:c.mobile||c.desktop}),n.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},n.a.createElement("div",{className:"uagb-size-type-field-tabs"},n.a.createElement("div",{className:"uagb-control__header"},n.a.createElement(i.a,{label:a,responsive:!0})),g[b]?g[b]:g.Desktop),e.help&&n.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},216:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-gradient-picker .components-custom-gradient-picker__gradient-bar {\n  border-radius: 5px;\n  height: 30px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__control-point-button {\n    top: 9px;\n    width: 12px;\n    height: 12px; }\n  .uagb-gradient-picker .components-custom-gradient-picker__gradient-bar .components-custom-gradient-picker__insert-point {\n    top: 7px; }\n",""]),a.a=o},218:function(e,a,t){"use strict";var l,o=t(15),n=t.n(o),r=t(216),u=0,i={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=r.a.locals||{},c.use=function(){return u++||(l=n()(r.a,i)),c},c.unuse=function(){u>0&&!--u&&(l(),l=null)};var b=c,g=t(7),s=t(0),d=t.n(s);a.a=e=>{Object(s.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]);const{setAttributes:a,backgroundGradient:t}=e;return d.a.createElement(g.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})},className:"uagb-gradient-picker"})}},219:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,"/* stylelint-disable color-hex-case, color-hex-length */\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient,\n.uag-bg-select-control .uagb-responsive-select-control {\n  margin-top: 25px; }\n\n.uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs {\n  display: block; }\n  .uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 100%; }\n\n.uag-bg-select-control .uagb-size-type-field-tabs {\n  display: flex;\n  justify-content: space-between; }\n  .uag-bg-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 45%; }\n\n.uag-bg-select-control .uag-background-image-overlay-type .components-select-control {\n  flex-direction: row;\n  align-items: center; }\n  .uag-bg-select-control .uag-background-image-overlay-type .components-select-control .components-input-control__container {\n    width: 45%;\n    flex: unset; }\n\n.uag-bg-select-control .uag-background-image-size .uagb-responsive-control-inner > .components-base-control {\n  display: block;\n  margin-top: 25px; }\n\n.uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs {\n  flex-direction: column; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control {\n    width: 100%; }\n    .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker {\n      border-radius: 3px;\n      border-color: #E6E7E9; }\n      .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control .components-focal-point-picker img {\n        border-radius: 3px; }\n",""]),a.a=o},221:function(e,a,t){"use strict";var l,o=t(1),n=t(18),r=t(7),u=t(15),i=t.n(u),c=t(219),b=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=c.a.locals||{},s.use=function(){return b++||(l=i()(c.a,g)),s},s.unuse=function(){b>0&&!--b&&(l(),l=null)};var d=s,m=t(218),v=t(0),p=t.n(v),_=t(210),k=t(28),f=t(214),y=t(11),E=t(68),h=e=>{const{backgroundImage:a,setAttributes:t}=e,l=Object(y.a)(),n=l.toLowerCase(),r=e=>{e&&e.url?e.type&&"image"===e.type?t({[a[n].label]:e}):t({[a[n].label]:null}):t({[a[n].label]:null})},u=()=>{t({[a[n].label]:""})},i={};return i.Desktop=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.desktop.value,onRemoveImage:u,label:!1}),i.Tablet=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.tablet.value,onRemoveImage:u,label:!1}),i.Mobile=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.mobile.value,onRemoveImage:u,label:!1}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(E.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),i[l]?i[l]:i.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},O=e=>{var a,t,l;const{backgroundPosition:n,backgroundImage:u,setAttributes:i}=e,c=Object(y.a)(),b=c.toLowerCase(),g={},s=null===(a=u[b])||void 0===a||null===(t=a.value)||void 0===t?void 0:t.url,d=null===(l=n[b])||void 0===l?void 0:l.value;return g.Desktop=p.a.createElement(r.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;i({[null===(a=n[b])||void 0===a?void 0:a.label]:e})}}),g.Tablet=p.a.createElement(r.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;i({[null===(a=n[b])||void 0===a?void 0:a.label]:e})}}),g.Mobile=p.a.createElement(r.FocalPointPicker,{url:s,value:d,onChange:e=>{var a;i({[null===(a=n[b])||void 0===a?void 0:a.label]:e})}}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(E.a,{label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),responsive:!0})),g[c]?g[c]:g.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},j=t(22),T=t(8);a.a=e=>{var a,t;Object(v.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]);const l=Object(y.a)().toLowerCase(),{setAttributes:u,backgroundImageColor:i,overlayType:c,backgroundSize:b,backgroundRepeat:g,backgroundAttachment:s,backgroundPosition:E,backgroundImage:M,backgroundColor:C,backgroundVideoType:P,backgroundType:N,backgroundVideo:I,backgroundVideoColor:A,onOpacityChange:S,backgroundCustomSize:x,backgroundCustomSizeType:R,imageResponsive:z,gradientOverlay:w}=e;let V=[];V=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Classic","ultimate-addons-for-gutenberg")}],w.value&&V.push({value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")});const L=[{value:"color",icon:T.a.bg_color,tooltip:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",icon:T.a.bg_gradient,tooltip:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",icon:T.a.bg_image,tooltip:Object(o.__)("Image","ultimate-addons-for-gutenberg")}];let B=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}];x||(B=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]),P.value&&L.push({value:"video",icon:T.a.bg_video,tooltip:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const G=p.a.createElement(p.a.Fragment,null,p.a.createElement(j.a,{setAttributes:u,label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),data:{value:N.value,label:N.label},options:L,showIcons:!0,colorVariant:"secondary",layoutVariant:"inline"}),"color"===N.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C.value?C.value:"",data:{value:C.value,label:C.label},setAttributes:u})),"image"===N.value&&p.a.createElement("div",{className:"uag-background-image"},!z&&p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&u({[M.label]:e}):u({[M.label]:null})},backgroundImage:M.value,onRemoveImage:()=>{u({[M.label]:null})}}),!z&&M.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:E.value,onChange:e=>u({[E.label]:e}),options:[{value:"left top",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:s.value,onChange:e=>u({[s.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>u({[g.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:b.value,onChange:e=>u({[b.label]:e}),options:B}),"custom"===b.value&&x&&p.a.createElement(k.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:x.desktop.value,label:x.desktop.label},tablet:{value:x.tablet.value,label:x.tablet.label},mobile:{value:x.mobile.value,label:x.mobile.label}},min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:R.value,label:R.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),z&&M&&p.a.createElement(h,{backgroundImage:M,setAttributes:u}),z&&M[l]&&(null===(a=M[l])||void 0===a?void 0:a.value)&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(O,{backgroundPosition:E,setAttributes:u,backgroundImage:M})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(f.a,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),data:s,options:{desktop:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(f.a,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),data:g,options:{desktop:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(f.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:b,options:{desktop:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]},setAttributes:u}),"custom"===b[l].value&&x&&p.a.createElement(k.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:x,min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:R.value,label:R.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),c&&M&&(z&&(null===(t=M[l])||void 0===t?void 0:t.value)||!z&&(null==M?void 0:M.value))&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(j.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:c.value,label:c.label},className:"uagb-multi-button-alignment-control",options:V,showIcons:!1})),"color"===c.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:i.value,data:{value:i.value,label:i.label},setAttributes:u})),"gradient"===c.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))),w.value&&"gradient"===N.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===N.value&&P.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&u({[I.label]:e}):u({[I.label]:null})},backgroundImage:I.value,onRemoveImage:()=>{u({[I.label]:null})},showVideoInput:!0})),"video"===N.value&&I.value&&P.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},c&&I&&I.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(j.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:c.value,label:c.label},className:"uagb-multi-button-alignment-control",options:V,showIcons:!1})),"color"===c.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:A.value,data:{value:A.value,label:A.label},setAttributes:u,onOpacityChange:S})),w.value&&"gradient"===c.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},G)}},336:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(10),r=t(221),u=t(80),i=t(37),c=t(1),b=t(84),g=t(29),s=t(28),d=t(5),m=t(17);function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const p=e=>{e=e.parentProps;const{attributes:{topPadding:a,bottomPadding:t,leftPadding:p,rightPadding:_,topPaddingTablet:k,bottomPaddingTablet:f,leftPaddingTablet:y,rightPaddingTablet:E,topPaddingMobile:h,bottomPaddingMobile:O,leftPaddingMobile:j,rightPaddingMobile:T,topMargin:M,bottomMargin:C,leftMargin:P,rightMargin:N,topMarginTablet:I,bottomMarginTablet:A,leftMarginTablet:S,rightMarginTablet:x,topMarginMobile:R,bottomMarginMobile:z,leftMarginMobile:w,rightMarginMobile:V,backgroundType:L,backgroundImage:B,backgroundColor:G,backgroundPosition:F,backgroundAttachment:W,backgroundRepeat:D,backgroundSize:U,backgroundImageColor:J,gradientValue:X,overlayType:$,mobilePaddingType:q,tabletPaddingType:H,desktopPaddingType:K,colWidthMobile:Q,colWidthTablet:Y,colWidth:Z,paddingLink:ee,marginLink:ae,mobileMarginType:te,tabletMarginType:le,desktopMarginType:oe},deviceType:ne,setAttributes:re}=e;return o.a.createElement(l.Suspense,{fallback:Object(n.a)()},o.a.createElement(d.InspectorControls,null,o.a.createElement(b.a,null,o.a.createElement(g.b,g.a.general,o.a.createElement(m.a,{title:Object(c.__)("Layout","ultimate-addons-for-gutenberg")},o.a.createElement(s.a,{label:Object(c.__)("Content Width (%)","ultimate-addons-for-gutenberg"),data:{desktop:{value:Z,label:"colWidth"},tablet:{value:Y,label:"colWidthTablet"},mobile:{value:Q,label:"colWidthMobile"}},min:0,max:100,displayUnit:!1,setAttributes:re}))),o.a.createElement(g.b,g.a.style,o.a.createElement(m.a,{title:Object(c.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(r.a,v({setAttributes:re,backgroundGradient:{value:X,label:"gradientValue"},backgroundImageColor:{value:J,label:"backgroundImageColor"},overlayType:{value:$,label:"overlayType"},gradientOverlay:{value:!1},backgroundSize:{value:U,label:"backgroundSize"},backgroundRepeat:{value:D,label:"backgroundRepeat"},backgroundAttachment:{value:W,label:"backgroundAttachment"},backgroundPosition:{value:F,label:"backgroundPosition"},backgroundImage:{value:B,label:"backgroundImage"},backgroundColor:{value:G,label:"backgroundColor"},backgroundType:{value:L,label:"backgroundType"},backgroundVideoType:{value:!1}},e))),o.a.createElement(m.a,{title:Object(c.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.a,{setAttributes:re,prefix:"column",attributes:e.attributes,deviceType:ne,disableBottomSeparator:!0,disabledBorderTitle:!0})),o.a.createElement(m.a,{title:Object(c.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(i.a,v({},e,{label:Object(c.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:a,label:"topPadding"},valueRight:{value:_,label:"rightPadding"},valueBottom:{value:t,label:"bottomPadding"},valueLeft:{value:p,label:"leftPadding"},valueTopTablet:{value:k,label:"topPaddingTablet"},valueRightTablet:{value:E,label:"rightPaddingTablet"},valueBottomTablet:{value:f,label:"bottomPaddingTablet"},valueLeftTablet:{value:y,label:"leftPaddingTablet"},valueTopMobile:{value:h,label:"topPaddingMobile"},valueRightMobile:{value:T,label:"rightPaddingMobile"},valueBottomMobile:{value:O,label:"bottomPaddingMobile"},valueLeftMobile:{value:j,label:"leftPaddingMobile"},unit:{value:K,label:"desktopPaddingType"},mUnit:{value:q,label:"mobilePaddingType"},tUnit:{value:H,label:"tabletPaddingType"},attributes:e.attributes,setAttributes:re,link:{value:ee,label:"paddingLink"}})),o.a.createElement(i.a,v({},e,{label:Object(c.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:M,label:"topMargin"},valueRight:{value:N,label:"rightMargin"},valueBottom:{value:C,label:"bottomMargin"},valueLeft:{value:P,label:"leftMargin"},valueTopTablet:{value:I,label:"topMarginTablet"},valueRightTablet:{value:x,label:"rightMarginTablet"},valueBottomTablet:{value:A,label:"bottomMarginTablet"},valueLeftTablet:{value:S,label:"leftMarginTablet"},valueTopMobile:{value:R,label:"topMarginMobile"},valueRightMobile:{value:V,label:"rightMarginMobile"},valueBottomMobile:{value:z,label:"bottomMarginMobile"},valueLeftMobile:{value:w,label:"leftMarginMobile"},unit:{value:oe,label:"desktopMarginType"},mUnit:{value:te,label:"mobileMarginType"},tUnit:{value:le,label:"tabletMarginType"},attributes:e.attributes,setAttributes:re,link:{value:ae,label:"marginLink"}})))),o.a.createElement(g.b,v({},g.a.advance,{parentProps:e})))))};a.default=o.a.memo(p)}}]);