(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[94],{202:function(e,a,t){"use strict";var l,o=t(1),n=t(7),r=t(5),u=t(0),i=t.n(u),b=t(14),g=t.n(b),d=t(203),c=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return c++||(l=g()(d.a,s)),m},m.unuse=function(){c>0&&!--c&&(l(),l=null)};var v=m;a.a=e=>{Object(u.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:l,showVideoInput:b,label:g,disableRemove:d=!1,allow:c=["image"]}=e;let s=Object(o.__)("Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),p=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),f=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),_=["image"];return b&&(s=Object(o.__)("Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),p=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),f=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),_=["video"]),s=g||s,s=!1===g?g:s,"Lottie Animation"===g&&(m=Object(o.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(o.__)("Replace Lottie Animation","ultimate-addons-for-gutenberg"),f=Object(o.__)("Remove Lottie Animation","ultimate-addons-for-gutenberg"),_=c),i.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+g,label:s},i.a.createElement("div",{className:"uagb-bg-image"},i.a.createElement(r.MediaUpload,{title:m,onSelect:a,allowedTypes:_,value:t,render:e=>{let{open:a}=e;return i.a.createElement(n.Button,{isSecondary:!0,onClick:a},null!=t&&t.url?p:m)}}),!d&&(null==t?void 0:t.url)&&i.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:l,isLink:!0,isDestructive:!0},f),e.help&&i.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},203:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  display: flex; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    border-radius: 2px;\n    background-color: #f0f0f0;\n    min-height: 90px;\n    padding: 8px 0;\n    text-align: center;\n    display: flex;\n    width: 100%;\n    transition: all 0.1s ease-out;\n    box-shadow: 0 0 0 0 #0085ba;\n    margin-top: 10px;\n    align-items: center;\n    justify-content: center; }\n    .uagb-bg-image .components-button.is-destructive:hover:not(:disabled) {\n      color: #710d0d;\n      box-shadow: inset 0 0 0 0 #710d0d; }\n    .uagb-bg-image .components-button.is-link.is-destructive:hover:not(:disabled) {\n      background: #f0f0f0; }\n    .uagb-bg-image .components-button.is-link.is-destructive:focus:not(:disabled) {\n      outline: none; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 0; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n\n.uag-background-image .uagb-bg-image,\n.uag-background-video .uagb-bg-image {\n  display: block; }\n  .uag-background-image .uagb-bg-image .components-button,\n  .uag-background-video .uagb-bg-image .components-button {\n    min-height: 55px; }\n  .uag-background-image .uagb-bg-image .components-button:last-child,\n  .uag-background-video .uagb-bg-image .components-button:last-child {\n    margin-left: 0;\n    margin-top: 0; }\n",""]),a.a=o},206:function(e,a,t){"use strict";var l=t(0),o=t.n(l),n=t(7),r=t(11),u=t(66);a.a=e=>{const{label:a,data:t,setAttributes:l,options:i}=e,b=Object(r.a)(),g={};return g.Desktop=o.a.createElement(n.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:i.desktop}),g.Tablet=o.a.createElement(n.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:i.tablet||i.desktop}),g.Mobile=o.a.createElement(n.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:i.mobile||i.desktop}),o.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},o.a.createElement("div",{className:"uagb-size-type-field-tabs"},o.a.createElement("div",{className:"uagb-control__header"},o.a.createElement(u.a,{label:a,responsive:!0})),g[b]?g[b]:g.Desktop),e.help&&o.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},207:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px;\n  position: relative; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 14px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: 25;\n    right: 0;\n    background: #fff;\n    z-index: 99;\n    width: 100%; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),a.a=o},208:function(e,a,t){"use strict";var l=t(7);a.a=e=>{const{setAttributes:a,backgroundGradient:t}=e;return React.createElement(l.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})},className:"uagb-gradient-picker"})}},210:function(e,a,t){"use strict";var l,o=t(1),n=t(19),r=t(16),u=t(7),i=t(2),b=t(20),g=t(14),d=t.n(g),c=t(207),s=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=c.a.locals||{},v.use=function(){return s++||(l=d()(c.a,m)),v},v.unuse=function(){s>0&&!--s&&(l(),l=null)};var p=v,f=t(0),_=t.n(f),h=t(9),k=t(22);a.a=e=>{const[a,t]=Object(i.useState)(!1);Object(f.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),Object(f.useLayoutEffect)(()=>{window.addEventListener("click",(function(e){const a=document.querySelector(".uagb-box-shadow-advanced"),l=document.querySelector(".uag-box-shadow-button");var o,n,r,u;a&&(null!=a&&a.contains(e.target)||null!=l&&l.contains(e.target)||null!==(o=e.target)&&void 0!==o&&null!==(n=o.classList)&&void 0!==n&&n.contains("uagb-advanced-color-indicate")||null!==(r=e.target)&&void 0!==r&&null!==(u=r.parentElement)&&void 0!==u&&u.closest(".uagb-popover-color")||t(!1))}))},[]);const{setAttributes:l,boxShadowColor:g,boxShadowHOffset:d,boxShadowVOffset:c,boxShadowBlur:s,boxShadowSpread:m,boxShadowPosition:v}=e;let O;const j=a?"active":"";a&&(O=_.a.createElement("div",{className:"uagb-box-shadow-advanced"},_.a.createElement("div",{className:"uagb-shadow-color"},_.a.createElement(r.a,{label:g.title,colorValue:g.value,onColorChange:e=>l({[g.label]:e})})),_.a.createElement("div",{className:"uagb-horizontal-wrap"},_.a.createElement(n.a,{label:d.title,value:d.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:d.value,label:d.label},onChange:!1})),_.a.createElement("div",{className:"uagb-vertical-wrap"},_.a.createElement(n.a,{label:c.title,value:c.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:c.value,label:c.label},onChange:!1})),_.a.createElement("div",{className:"uagb-blur-wrap"},_.a.createElement(n.a,{label:s.title,value:s.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:s.value,label:s.label},onChange:!1})),_.a.createElement("div",{className:"uagb-spread-wrap"},_.a.createElement(n.a,{label:m.title,value:m.value,min:-100,max:100,displayUnit:!1,setAttributes:l,data:{value:m.value,label:m.label},onChange:!1})),_.a.createElement("div",{className:"uagb-shadow-type"},_.a.createElement(b.a,{setAttributes:l,label:v.title,data:{value:v.value,label:v.label},options:[{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const x=_.a.createElement("div",{className:"uag-box-shadow-option-actions"},_.a.createElement("span",{className:"uag-control-label"},Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg")),_.a.createElement(u.Button,{className:"uag-box-shadow-button","aria-pressed":a,onClick:()=>{if(t(!a),!a){var e;const{getSelectedBlock:a}=Object(h.select)("core/block-editor"),t=null===(e=a())||void 0===e?void 0:e.name,l=Object(k.a)("uagSettingState"),o={...l,[t]:{...null==l?void 0:l[t],selectedSetting:".uag-box-shadow-options"}},n=Object(k.a)();n&&n.setItem("uagSettingState",JSON.stringify(o))}}},_.a.createElement(u.Dashicon,{icon:"edit"})));return _.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+j},x,a&&O)}},212:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient,\n.uag-bg-select-control .uagb-responsive-select-control {\n  margin-top: 24px; }\n\n.uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs {\n  display: block; }\n  .uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 100%; }\n\n.uag-bg-select-control .uagb-size-type-field-tabs {\n  display: flex;\n  justify-content: space-between; }\n  .uag-bg-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 45%; }\n\n.uag-bg-select-control .uag-background-image-overlay-type .components-select-control {\n  flex-direction: row;\n  align-items: center; }\n  .uag-bg-select-control .uag-background-image-overlay-type .components-select-control .components-input-control__container {\n    width: 45%;\n    flex: unset; }\n\n.uag-bg-select-control .uag-background-image-size .uagb-responsive-control-inner > .components-base-control {\n  display: block;\n  margin-top: 24px; }\n\n.uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs {\n  flex-direction: column; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control {\n    width: 100%; }\n",""]),a.a=o},214:function(e,a,t){"use strict";var l,o=t(1),n=t(16),r=t(7),u=t(14),i=t.n(u),b=t(212),g=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=b.a.locals||{},c.use=function(){return g++||(l=i()(b.a,d)),c},c.unuse=function(){g>0&&!--g&&(l(),l=null)};var s=c,m=t(208),v=t(0),p=t.n(v),f=t(202),_=t(25),h=t(206),k=t(11),O=t(66),j=e=>{const{backgroundImage:a,setAttributes:t}=e,l=Object(k.a)(),n=l.toLowerCase(),r=e=>{e&&e.url?e.type&&"image"===e.type?t({[a[n].label]:e}):t({[a[n].label]:null}):t({[a[n].label]:null})},u=()=>{t({[a[n].label]:""})},i={};return i.Desktop=p.a.createElement(f.a,{onSelectImage:r,backgroundImage:a.desktop.value,onRemoveImage:u,label:!1}),i.Tablet=p.a.createElement(f.a,{onSelectImage:r,backgroundImage:a.tablet.value,onRemoveImage:u,label:!1}),i.Mobile=p.a.createElement(f.a,{onSelectImage:r,backgroundImage:a.mobile.value,onRemoveImage:u,label:!1}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(O.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),i[l]?i[l]:i.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},x=e=>{var a,t,l;const{backgroundPosition:n,backgroundImage:u,setAttributes:i}=e,b=Object(k.a)(),g=b.toLowerCase(),d={},c=null===(a=u[g])||void 0===a||null===(t=a.value)||void 0===t?void 0:t.url,s=null===(l=n[g])||void 0===l?void 0:l.value;return d.Desktop=p.a.createElement(r.FocalPointPicker,{url:c,value:s,onChange:e=>{var a;i({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),d.Tablet=p.a.createElement(r.FocalPointPicker,{url:c,value:s,onChange:e=>{var a;i({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),d.Mobile=p.a.createElement(r.FocalPointPicker,{url:c,value:s,onChange:e=>{var a;i({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(O.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),d[b]?d[b]:d.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},y=t(20);a.a=e=>{var a,t;Object(v.useLayoutEffect)(()=>(s.use(),()=>{s.unuse()}),[]);const l=Object(k.a)().toLowerCase(),{setAttributes:u,backgroundImageColor:i,overlayType:b,backgroundSize:g,backgroundRepeat:d,backgroundAttachment:c,backgroundPosition:O,backgroundImage:E,backgroundColor:w,backgroundVideoType:C,backgroundType:S,backgroundVideo:T,backgroundVideoColor:M,onOpacityChange:N,backgroundCustomSize:I,backgroundCustomSizeType:P,imageResponsive:A,gradientOverlay:R}=e;let V=[];V=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Classic","ultimate-addons-for-gutenberg")}],R.value&&V.push({value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")});let B=[];B=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")}];let z=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}];I||(z=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]),C.value&&B.push({value:"video",label:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const L=p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-type"},p.a.createElement(r.SelectControl,{value:S.value,onChange:e=>u({[S.label]:e}),options:B,label:Object(o.__)("Type","ultimate-addons-for-gutenberg")})),"color"===S.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:w.value?w.value:"",onColorChange:e=>u({[w.label]:e})})),"image"===S.value&&p.a.createElement("div",{className:"uag-background-image"},!A&&p.a.createElement(f.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&u({[E.label]:e}):u({[E.label]:null})},backgroundImage:E.value,onRemoveImage:()=>{u({[E.label]:null})}}),!A&&E.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:O.value,onChange:e=>u({[O.label]:e}),options:[{value:"left top",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:c.value,onChange:e=>u({[c.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:d.value,onChange:e=>u({[d.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>u({[g.label]:e}),options:z}),"custom"===g.value&&I&&p.a.createElement(_.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:I.desktop.value,label:I.desktop.label},tablet:{value:I.tablet.value,label:I.tablet.label},mobile:{value:I.mobile.value,label:I.mobile.label}},min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:P.value,label:P.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),A&&E&&p.a.createElement(j,{backgroundImage:E,setAttributes:u}),A&&E[l]&&(null===(a=E[l])||void 0===a?void 0:a.value)&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(x,{backgroundPosition:O,setAttributes:u,backgroundImage:E})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(h.a,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),data:c,options:{desktop:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(h.a,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),data:d,options:{desktop:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(h.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:g,options:{desktop:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]},setAttributes:u}),"custom"===g[l].value&&I&&p.a.createElement(_.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:I,min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:P.value,label:P.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),b&&E&&(A&&(null===(t=E[l])||void 0===t?void 0:t.value)||!A&&(null==E?void 0:E.value))&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(y.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:b.value,label:b.label},className:"uagb-multi-button-alignment-control",options:V,showIcons:!1})),"color"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:i.value,onColorChange:e=>u({[i.label]:e})})),"gradient"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))),R.value&&"gradient"===S.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===S.value&&C.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(f.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&u({[T.label]:e}):u({[T.label]:null})},backgroundImage:T.value,onRemoveImage:()=>{u({[T.label]:null})},showVideoInput:!0})),"video"===S.value&&T.value&&C.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},b&&T&&T.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(y.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:b.value,label:b.label},className:"uagb-multi-button-alignment-control",options:V,showIcons:!1})),"color"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:M.value,onColorChange:e=>u({[M.label]:e}),onOpacityChange:N})),R.value&&"gradient"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},L)}},504:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(1),r=t(10),u=t(210),i=t(79),b=t(26),g=t(55),d=t(19),c=t(214),s=t(77),m=t(20),v=t(12),p=t(5),f=t(7),_=t(17);function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const k=e=>{e=e.parentProps;const{attributes:a,setAttributes:t,deviceType:k}=e,{align:O,contentWidth:j,width:x,innerWidth:y,innerWidthType:E,tag:w,themeWidth:C,leftPadding:S,rightPadding:T,topPadding:M,bottomPadding:N,leftMargin:I,rightMargin:P,topMargin:A,bottomMargin:R,topPaddingTablet:V,bottomPaddingTablet:B,leftPaddingTablet:z,rightPaddingTablet:L,topMarginTablet:W,bottomMarginTablet:F,leftMarginTablet:G,rightMarginTablet:H,topPaddingMobile:U,bottomPaddingMobile:D,leftPaddingMobile:J,rightPaddingMobile:q,topMarginMobile:X,bottomMarginMobile:K,leftMarginMobile:Q,rightMarginMobile:Y,backgroundType:Z,backgroundImage:$,backgroundVideo:ee,backgroundColor:ae,backgroundPosition:te,backgroundAttachment:le,backgroundRepeat:oe,backgroundSize:ne,backgroundVideoColor:re,backgroundVideoOpacity:ue,backgroundImageColor:ie,overlayType:be,borderStyle:ge,borderWidth:de,borderRadius:ce,borderColor:se,borderHoverColor:me,mobileMarginType:ve,tabletMarginType:pe,desktopMarginType:fe,mobilePaddingType:_e,tabletPaddingType:he,desktopPaddingType:ke,boxShadowColor:Oe,boxShadowHOffset:je,boxShadowVOffset:xe,boxShadowBlur:ye,boxShadowSpread:Ee,boxShadowPosition:we,spacingLink:Ce,marginspacingLink:Se,gradientValue:Te}=a;let Me=["left","center","right"];return"full_width"===j&&(Me=["wide","full"]),o.a.createElement(l.Suspense,{fallback:Object(r.a)()},o.a.createElement(p.BlockControls,null,o.a.createElement(p.AlignmentToolbar,{value:O,onChange:e=>{t({align:e})},controls:Me})),o.a.createElement(p.InspectorControls,null,o.a.createElement(i.a,null,o.a.createElement(b.b,b.a.general,o.a.createElement(_.a,{initialOpen:!0},o.a.createElement(m.a,{setAttributes:t,label:Object(n.__)("Content Width","ultimate-addons-for-gutenberg"),data:{value:j,label:"contentWidth"},className:"uagb-multi-button-alignment-control",options:[{value:"boxed",label:"Boxed"},{value:"full_width",label:"Full Width"}],showIcons:!1}),"boxed"===j&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{setAttributes:t,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:O,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(f.Icon,{icon:Object(v.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(f.Icon,{icon:Object(v.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(f.Icon,{icon:Object(v.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),o.a.createElement(d.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:x,onChange:e=>t({width:e}),min:0,max:2e3,displayUnit:!1})),"boxed"!==j&&o.a.createElement(f.ToggleControl,{label:Object(n.__)("Inherit Inner Width from Theme","ultimate-addons-for-gutenberg"),checked:C,onChange:()=>t({themeWidth:!C})}),"boxed"!==j&&!C&&o.a.createElement(d.a,{label:Object(n.__)("Inner Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:y,onChange:e=>t({innerWidth:e}),min:0,max:2e3,unit:{value:E,label:"innerWidthType"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),o.a.createElement(f.SelectControl,{label:Object(n.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:w,onChange:e=>t({tag:e}),options:[{value:"div",label:Object(n.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(n.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(n.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(n.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(n.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(n.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(n.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(n.__)("nav","ultimate-addons-for-gutenberg")}]}))),o.a.createElement(b.b,b.a.style,o.a.createElement(_.a,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(c.a,h({setAttributes:t,backgroundGradient:{value:Te,label:"gradientValue"},backgroundImageColor:{value:ie,label:"backgroundImageColor"},overlayType:{value:be,label:"overlayType"},gradientOverlay:{value:!1},backgroundSize:{value:ne,label:"backgroundSize"},backgroundRepeat:{value:oe,label:"backgroundRepeat"},backgroundAttachment:{value:le,label:"backgroundAttachment"},backgroundPosition:{value:te,label:"backgroundPosition"},backgroundImage:{value:$,label:"backgroundImage"},backgroundColor:{value:ae,label:"backgroundColor"},backgroundType:{value:Z,label:"backgroundType"},backgroundVideoType:{value:!0},backgroundVideo:{value:ee,label:"backgroundVideo"},backgroundVideoColor:{value:re,label:"backgroundVideoColor"},backgroundVideoOpacity:{value:ue,label:"backgroundVideoOpacity"},onOpacityChange:e=>t({backgroundVideoOpacity:e})},e))),o.a.createElement(o.a.Fragment,null,o.a.createElement(_.a,{title:Object(n.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.a,{disabledBorderTitle:!0,setAttributes:t,borderStyle:{value:ge,label:"borderStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:de,label:"borderWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ce,label:"borderRadius",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:se,label:"borderColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:me,label:"borderHoverColor",title:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),o.a.createElement(_.a,{title:"Box Shadow",initialOpen:!1},o.a.createElement(u.a,{setAttributes:t,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:Oe,label:"boxShadowColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:je,label:"boxShadowHOffset",title:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:xe,label:"boxShadowVOffset",title:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:ye,label:"boxShadowBlur",title:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:Ee,label:"boxShadowSpread",title:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:we,label:"boxShadowPosition",title:Object(n.__)("Position","ultimate-addons-for-gutenberg")}}))),o.a.createElement(_.a,{title:"Spacing",initialOpen:!1},o.a.createElement(g.a,h({},e,{label:Object(n.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:A,label:"topMargin"},valueRight:{value:P,label:"rightMargin"},valueBottom:{value:R,label:"bottomMargin"},valueLeft:{value:I,label:"leftMargin"},valueTopTablet:{value:W,label:"topMarginTablet"},valueRightTablet:{value:H,label:"rightMarginTablet"},valueBottomTablet:{value:F,label:"bottomMarginTablet"},valueLeftTablet:{value:G,label:"leftMarginTablet"},valueTopMobile:{value:X,label:"topMarginMobile"},valueRightMobile:{value:Y,label:"rightMarginMobile"},valueBottomMobile:{value:K,label:"bottomMarginMobile"},valueLeftMobile:{value:Q,label:"leftMarginMobile"},unit:{value:fe,label:"desktopMarginType"},mUnit:{value:ve,label:"mobileMarginType"},tUnit:{value:pe,label:"tabletMarginType"},deviceType:k,attributes:a,setAttributes:t,link:{value:Se,label:"marginspacingLink"}})),o.a.createElement(g.a,h({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:M,label:"topPadding"},valueRight:{value:T,label:"rightPadding"},valueBottom:{value:N,label:"bottomPadding"},valueLeft:{value:S,label:"leftPadding"},valueTopTablet:{value:V,label:"topPaddingTablet"},valueRightTablet:{value:L,label:"rightPaddingTablet"},valueBottomTablet:{value:B,label:"bottomPaddingTablet"},valueLeftTablet:{value:z,label:"leftPaddingTablet"},valueTopMobile:{value:U,label:"topPaddingMobile"},valueRightMobile:{value:q,label:"rightPaddingMobile"},valueBottomMobile:{value:D,label:"bottomPaddingMobile"},valueLeftMobile:{value:J,label:"leftPaddingMobile"},unit:{value:ke,label:"desktopPaddingType"},mUnit:{value:_e,label:"mobilePaddingType"},tUnit:{value:he,label:"tabletPaddingType"},deviceType:k,attributes:a,setAttributes:t,link:{value:Ce,label:"spacingLink"}})))),o.a.createElement(b.b,h({},b.a.advance,{parentProps:e})))))};a.default=o.a.memo(k)}}]);