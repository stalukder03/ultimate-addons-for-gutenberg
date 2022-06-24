(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[16],{203:function(e,a,t){"use strict";var l,n=t(1),o=t(7),r=t(5),u=t(0),i=t.n(u),b=t(15),g=t.n(b),c=t(204),d=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=c.a.locals||{},m.use=function(){return d++||(l=g()(c.a,s)),m},m.unuse=function(){d>0&&!--d&&(l(),l=null)};var v=m;a.a=e=>{Object(u.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:l,showVideoInput:b,label:g,disableRemove:c=!1,allow:d=["image"]}=e;let s=Object(n.__)("Image","ultimate-addons-for-gutenberg"),m=Object(n.__)("Select Image","ultimate-addons-for-gutenberg"),p=Object(n.__)("Replace Image","ultimate-addons-for-gutenberg"),_=Object(n.__)("Remove Image","ultimate-addons-for-gutenberg"),f=["image"];return b&&(s=Object(n.__)("Video","ultimate-addons-for-gutenberg"),m=Object(n.__)("Select Video","ultimate-addons-for-gutenberg"),p=Object(n.__)("Replace Video","ultimate-addons-for-gutenberg"),_=Object(n.__)("Remove Video","ultimate-addons-for-gutenberg"),f=["video"]),s=g||s,s=!1===g?g:s,"Lottie Animation"===g&&(m=Object(n.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(n.__)("Replace Lottie Animation","ultimate-addons-for-gutenberg"),_=Object(n.__)("Remove Lottie Animation","ultimate-addons-for-gutenberg"),f=d),i.a.createElement(o.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+g,label:s},i.a.createElement("div",{className:"uagb-bg-image"},i.a.createElement(r.MediaUpload,{title:m,onSelect:a,allowedTypes:f,value:t,render:e=>{let{open:a}=e;return i.a.createElement(o.Button,{isSecondary:!0,onClick:a},null!=t&&t.url?p:m)}}),!c&&(null==t?void 0:t.url)&&i.a.createElement(o.Button,{className:"uagb-rm-btn",onClick:l,isLink:!0,isDestructive:!0},_),e.help&&i.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},204:function(e,a,t){"use strict";var l=t(16),n=t.n(l)()((function(e){return e[1]}));n.push([e.i,".uagb-bg-image {\n  display: flex; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    border-radius: 2px;\n    background-color: #f0f0f0;\n    min-height: 90px;\n    padding: 8px 0;\n    text-align: center;\n    display: flex;\n    width: 100%;\n    transition: all 0.1s ease-out;\n    box-shadow: 0 0 0 0 #0085ba;\n    margin-top: 10px;\n    align-items: center;\n    justify-content: center; }\n    .uagb-bg-image .components-button.is-destructive:hover:not(:disabled) {\n      color: #710d0d;\n      box-shadow: inset 0 0 0 0 #710d0d; }\n    .uagb-bg-image .components-button.is-link.is-destructive:hover:not(:disabled) {\n      background: #f0f0f0; }\n    .uagb-bg-image .components-button.is-link.is-destructive:focus:not(:disabled) {\n      outline: none; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 0; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n\n.uag-background-image .uagb-bg-image,\n.uag-background-video .uagb-bg-image {\n  display: block; }\n  .uag-background-image .uagb-bg-image .components-button,\n  .uag-background-video .uagb-bg-image .components-button {\n    min-height: 55px; }\n  .uag-background-image .uagb-bg-image .components-button:last-child,\n  .uag-background-video .uagb-bg-image .components-button:last-child {\n    margin-left: 0;\n    margin-top: 0; }\n",""]),a.a=n},207:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(7),r=t(11),u=t(67);a.a=e=>{const{label:a,data:t,setAttributes:l,options:i}=e,b=Object(r.a)(),g={};return g.Desktop=n.a.createElement(o.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:i.desktop}),g.Tablet=n.a.createElement(o.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:i.tablet||i.desktop}),g.Mobile=n.a.createElement(o.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:i.mobile||i.desktop}),n.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},n.a.createElement("div",{className:"uagb-size-type-field-tabs"},n.a.createElement("div",{className:"uagb-control__header"},n.a.createElement(u.a,{label:a,responsive:!0})),g[b]?g[b]:g.Desktop),e.help&&n.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},209:function(e,a,t){"use strict";var l=t(7);a.a=e=>{const{setAttributes:a,backgroundGradient:t}=e;return React.createElement(l.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})},className:"uagb-gradient-picker"})}},213:function(e,a,t){"use strict";var l=t(16),n=t.n(l)()((function(e){return e[1]}));n.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient,\n.uag-bg-select-control .uagb-responsive-select-control {\n  margin-top: 24px; }\n\n.uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs {\n  display: block; }\n  .uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 100%; }\n\n.uag-bg-select-control .uagb-size-type-field-tabs {\n  display: flex;\n  justify-content: space-between; }\n  .uag-bg-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 45%; }\n\n.uag-bg-select-control .uag-background-image-overlay-type .components-select-control {\n  flex-direction: row;\n  align-items: center; }\n  .uag-bg-select-control .uag-background-image-overlay-type .components-select-control .components-input-control__container {\n    width: 45%;\n    flex: unset; }\n\n.uag-bg-select-control .uag-background-image-size .uagb-responsive-control-inner > .components-base-control {\n  display: block;\n  margin-top: 24px; }\n\n.uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs {\n  flex-direction: column; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control {\n    width: 100%; }\n",""]),a.a=n},215:function(e,a,t){"use strict";var l,n=t(1),o=t(18),r=t(7),u=t(15),i=t.n(u),b=t(213),g=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=b.a.locals||{},d.use=function(){return g++||(l=i()(b.a,c)),d},d.unuse=function(){g>0&&!--g&&(l(),l=null)};var s=d,m=t(209),v=t(0),p=t.n(v),_=t(203),f=t(26),k=t(207),y=t(11),h=t(67),O=e=>{const{backgroundImage:a,setAttributes:t}=e,l=Object(y.a)(),o=l.toLowerCase(),r=e=>{e&&e.url?e.type&&"image"===e.type?t({[a[o].label]:e}):t({[a[o].label]:null}):t({[a[o].label]:null})},u=()=>{t({[a[o].label]:""})},i={};return i.Desktop=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.desktop.value,onRemoveImage:u,label:!1}),i.Tablet=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.tablet.value,onRemoveImage:u,label:!1}),i.Mobile=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.mobile.value,onRemoveImage:u,label:!1}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(h.a,{label:Object(n.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),i[l]?i[l]:i.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},E=e=>{var a,t,l;const{backgroundPosition:o,backgroundImage:u,setAttributes:i}=e,b=Object(y.a)(),g=b.toLowerCase(),c={},d=null===(a=u[g])||void 0===a||null===(t=a.value)||void 0===t?void 0:t.url,s=null===(l=o[g])||void 0===l?void 0:l.value;return c.Desktop=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;i({[null===(a=o[g])||void 0===a?void 0:a.label]:e})}}),c.Tablet=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;i({[null===(a=o[g])||void 0===a?void 0:a.label]:e})}}),c.Mobile=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;i({[null===(a=o[g])||void 0===a?void 0:a.label]:e})}}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(h.a,{label:Object(n.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),c[b]?c[b]:c.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},j=t(21);a.a=e=>{var a,t;Object(v.useLayoutEffect)(()=>(s.use(),()=>{s.unuse()}),[]);const l=Object(y.a)().toLowerCase(),{setAttributes:u,backgroundImageColor:i,overlayType:b,backgroundSize:g,backgroundRepeat:c,backgroundAttachment:d,backgroundPosition:h,backgroundImage:T,backgroundColor:C,backgroundVideoType:M,backgroundType:P,backgroundVideo:I,backgroundVideoColor:N,onOpacityChange:A,backgroundCustomSize:R,backgroundCustomSizeType:S,imageResponsive:x,gradientOverlay:w}=e;let z=[];z=[{value:"none",label:Object(n.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(n.__)("Classic","ultimate-addons-for-gutenberg")}],w.value&&z.push({value:"gradient",label:Object(n.__)("Gradient","ultimate-addons-for-gutenberg")});let L=[];L=[{value:"none",label:Object(n.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(n.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(n.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(n.__)("Image","ultimate-addons-for-gutenberg")}];let V=[{value:"auto",label:Object(n.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(n.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(n.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(n.__)("Custom","ultimate-addons-for-gutenberg")}];R||(V=[{value:"auto",label:Object(n.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(n.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(n.__)("Contain","ultimate-addons-for-gutenberg")}]),M.value&&L.push({value:"video",label:Object(n.__)("Video","ultimate-addons-for-gutenberg")});const B=p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-type"},p.a.createElement(r.SelectControl,{value:P.value,onChange:e=>u({[P.label]:e}),options:L,label:Object(n.__)("Type","ultimate-addons-for-gutenberg")})),"color"===P.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(o.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C.value?C.value:"",onColorChange:e=>u({[C.label]:e})})),"image"===P.value&&p.a.createElement("div",{className:"uag-background-image"},!x&&p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&u({[T.label]:e}):u({[T.label]:null})},backgroundImage:T.value,onRemoveImage:()=>{u({[T.label]:null})}}),!x&&T.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(r.SelectControl,{label:Object(n.__)("Image Position","ultimate-addons-for-gutenberg"),value:h.value,onChange:e=>u({[h.label]:e}),options:[{value:"left top",label:Object(n.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(n.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(n.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(n.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(n.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(n.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(n.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(n.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(n.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(r.SelectControl,{label:Object(n.__)("Attachment","ultimate-addons-for-gutenberg"),value:d.value,onChange:e=>u({[d.label]:e}),options:[{value:"fixed",label:Object(n.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(n.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(r.SelectControl,{label:Object(n.__)("Repeat","ultimate-addons-for-gutenberg"),value:c.value,onChange:e=>u({[c.label]:e}),options:[{value:"no-repeat",label:Object(n.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(n.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(n.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(n.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(r.SelectControl,{label:Object(n.__)("Size","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>u({[g.label]:e}),options:V}),"custom"===g.value&&R&&p.a.createElement(f.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:R.desktop.value,label:R.desktop.label},tablet:{value:R.tablet.value,label:R.tablet.label},mobile:{value:R.mobile.value,label:R.mobile.label}},min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:S.value,label:S.label},units:[{name:Object(n.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(n.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),x&&T&&p.a.createElement(O,{backgroundImage:T,setAttributes:u}),x&&T[l]&&(null===(a=T[l])||void 0===a?void 0:a.value)&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(E,{backgroundPosition:h,setAttributes:u,backgroundImage:T})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(k.a,{label:Object(n.__)("Attachment","ultimate-addons-for-gutenberg"),data:d,options:{desktop:[{value:"fixed",label:Object(n.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(n.__)("Scroll","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(k.a,{label:Object(n.__)("Repeat","ultimate-addons-for-gutenberg"),data:c,options:{desktop:[{value:"no-repeat",label:Object(n.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(n.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(n.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(n.__)("Repeat-y","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(k.a,{label:Object(n.__)("Size","ultimate-addons-for-gutenberg"),data:g,options:{desktop:[{value:"auto",label:Object(n.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(n.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(n.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(n.__)("Custom","ultimate-addons-for-gutenberg")}]},setAttributes:u}),"custom"===g[l].value&&R&&p.a.createElement(f.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),data:R,min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:S.value,label:S.label},units:[{name:Object(n.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(n.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),b&&T&&(x&&(null===(t=T[l])||void 0===t?void 0:t.value)||!x&&(null==T?void 0:T.value))&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(j.a,{setAttributes:u,label:Object(n.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:b.value,label:b.label},className:"uagb-multi-button-alignment-control",options:z,showIcons:!1})),"color"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(o.a,{label:Object(n.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:i.value,onColorChange:e=>u({[i.label]:e})})),"gradient"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))),w.value&&"gradient"===P.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===P.value&&M.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&u({[I.label]:e}):u({[I.label]:null})},backgroundImage:I.value,onRemoveImage:()=>{u({[I.label]:null})},showVideoInput:!0})),"video"===P.value&&I.value&&M.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},b&&I&&I.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(j.a,{setAttributes:u,label:Object(n.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:b.value,label:b.label},className:"uagb-multi-button-alignment-control",options:z,showIcons:!1})),"color"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(o.a,{label:Object(n.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:N.value,onColorChange:e=>u({[N.label]:e}),onOpacityChange:A})),w.value&&"gradient"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},B)}},502:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(10),r=t(215),u=t(78),i=t(36),b=t(1),g=t(80),c=t(28),d=t(26),s=t(5),m=t(17);function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const p=e=>{e=e.parentProps;const{attributes:{topPadding:a,bottomPadding:t,leftPadding:p,rightPadding:_,topPaddingTablet:f,bottomPaddingTablet:k,leftPaddingTablet:y,rightPaddingTablet:h,topPaddingMobile:O,bottomPaddingMobile:E,leftPaddingMobile:j,rightPaddingMobile:T,topMargin:C,bottomMargin:M,leftMargin:P,rightMargin:I,topMarginTablet:N,bottomMarginTablet:A,leftMarginTablet:R,rightMarginTablet:S,topMarginMobile:x,bottomMarginMobile:w,leftMarginMobile:z,rightMarginMobile:L,backgroundType:V,backgroundImage:B,backgroundColor:G,backgroundPosition:F,backgroundAttachment:W,backgroundRepeat:D,backgroundSize:U,backgroundImageColor:J,gradientValue:X,overlayType:q,mobilePaddingType:H,tabletPaddingType:K,desktopPaddingType:Q,colWidthMobile:Y,colWidthTablet:Z,colWidth:$,paddingLink:ee,marginLink:ae,mobileMarginType:te,tabletMarginType:le,desktopMarginType:ne},deviceType:oe,setAttributes:re}=e;return n.a.createElement(l.Suspense,{fallback:Object(o.a)()},n.a.createElement(s.InspectorControls,null,n.a.createElement(g.a,null,n.a.createElement(c.b,c.a.general,n.a.createElement(m.a,{title:Object(b.__)("Layout","ultimate-addons-for-gutenberg")},n.a.createElement(d.a,{label:Object(b.__)("Content Width (%)","ultimate-addons-for-gutenberg"),data:{desktop:{value:$,label:"colWidth"},tablet:{value:Z,label:"colWidthTablet"},mobile:{value:Y,label:"colWidthMobile"}},min:0,max:100,displayUnit:!1,setAttributes:re}))),n.a.createElement(c.b,c.a.style,n.a.createElement(m.a,{title:Object(b.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(r.a,v({setAttributes:re,backgroundGradient:{value:X,label:"gradientValue"},backgroundImageColor:{value:J,label:"backgroundImageColor"},overlayType:{value:q,label:"overlayType"},gradientOverlay:{value:!1},backgroundSize:{value:U,label:"backgroundSize"},backgroundRepeat:{value:D,label:"backgroundRepeat"},backgroundAttachment:{value:W,label:"backgroundAttachment"},backgroundPosition:{value:F,label:"backgroundPosition"},backgroundImage:{value:B,label:"backgroundImage"},backgroundColor:{value:G,label:"backgroundColor"},backgroundType:{value:V,label:"backgroundType"},backgroundVideoType:{value:!1}},e))),n.a.createElement(m.a,{title:Object(b.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(u.a,{setAttributes:re,prefix:"column",attributes:e.attributes,deviceType:oe,disableBottomSeparator:!0,disabledBorderTitle:!0})),n.a.createElement(m.a,{title:Object(b.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(i.a,v({},e,{label:Object(b.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:a,label:"topPadding"},valueRight:{value:_,label:"rightPadding"},valueBottom:{value:t,label:"bottomPadding"},valueLeft:{value:p,label:"leftPadding"},valueTopTablet:{value:f,label:"topPaddingTablet"},valueRightTablet:{value:h,label:"rightPaddingTablet"},valueBottomTablet:{value:k,label:"bottomPaddingTablet"},valueLeftTablet:{value:y,label:"leftPaddingTablet"},valueTopMobile:{value:O,label:"topPaddingMobile"},valueRightMobile:{value:T,label:"rightPaddingMobile"},valueBottomMobile:{value:E,label:"bottomPaddingMobile"},valueLeftMobile:{value:j,label:"leftPaddingMobile"},unit:{value:Q,label:"desktopPaddingType"},mUnit:{value:H,label:"mobilePaddingType"},tUnit:{value:K,label:"tabletPaddingType"},attributes:e.attributes,setAttributes:re,link:{value:ee,label:"paddingLink"}})),n.a.createElement(i.a,v({},e,{label:Object(b.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:C,label:"topMargin"},valueRight:{value:I,label:"rightMargin"},valueBottom:{value:M,label:"bottomMargin"},valueLeft:{value:P,label:"leftMargin"},valueTopTablet:{value:N,label:"topMarginTablet"},valueRightTablet:{value:S,label:"rightMarginTablet"},valueBottomTablet:{value:A,label:"bottomMarginTablet"},valueLeftTablet:{value:R,label:"leftMarginTablet"},valueTopMobile:{value:x,label:"topMarginMobile"},valueRightMobile:{value:L,label:"rightMarginMobile"},valueBottomMobile:{value:w,label:"bottomMarginMobile"},valueLeftMobile:{value:z,label:"leftMarginMobile"},unit:{value:ne,label:"desktopMarginType"},mUnit:{value:te,label:"mobileMarginType"},tUnit:{value:le,label:"tabletMarginType"},attributes:e.attributes,setAttributes:re,link:{value:ae,label:"marginLink"}})))),n.a.createElement(c.b,v({},c.a.advance,{parentProps:e})))))};a.default=n.a.memo(p)}}]);