(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[22],{271:function(e,a,t){"use strict";var o,l=t(2),n=t(9),r=t(5),u=t(1),b=t.n(u),i=t(18),s=t.n(i),d=t(272),g=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return g++||(o=s()(d.a,c)),m},m.unuse=function(){g>0&&!--g&&(o(),o=null)};var p=m;a.a=e=>{Object(u.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:o,showVideoInput:i,label:s}=e;let d=Object(l.__)("Image","ultimate-addons-for-gutenberg"),g=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),c=Object(l.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(l.__)("Remove Image","ultimate-addons-for-gutenberg"),v=["image"];return i&&(d=Object(l.__)("Video","ultimate-addons-for-gutenberg"),g=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),c=Object(l.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(l.__)("Remove Video","ultimate-addons-for-gutenberg"),v=["video"]),d=s||d,b.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+s,label:d},b.a.createElement("div",{className:"uagb-bg-image"},b.a.createElement(r.MediaUpload,{title:g,onSelect:a,allowedTypes:v,value:t,render:({open:e})=>b.a.createElement(n.Button,{isSecondary:!0,onClick:e},null!=t&&t.url?c:g)}),(null==t?void 0:t.url)&&b.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:o,isLink:!0,isDestructive:!0},m),e.help&&b.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},272:function(e,a,t){"use strict";var o=t(19),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),a.a=l},276:function(e,a,t){"use strict";var o=t(19),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 3px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),a.a=l},277:function(e,a,t){"use strict";var o=t(19),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient {\n  margin-top: 24px; }\n",""]),a.a=l},278:function(e,a,t){"use strict";var o,l=t(2),n=t(16),r=t(9),u=t(18),b=t.n(u),i=t(277),s=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=i.a.locals||{},g.use=function(){return s++||(o=b()(i.a,d)),g},g.unuse=function(){s>0&&!--s&&(o(),o=null)};var c=g,m=function(e){const{setAttributes:a,backgroundGradient:t}=e;return React.createElement(r.__experimentalGradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})}})},p=t(1),v=t.n(p),_=t(271);a.a=e=>{Object(p.useLayoutEffect)(()=>(c.use(),()=>{c.unuse()}),[]);const{setAttributes:a,backgroundImageColor:t,overlayType:o,backgroundSize:u,backgroundRepeat:b,backgroundAttachment:i,backgroundPosition:s,backgroundImage:d,backgroundColor:g,backgroundVideoType:h,backgroundType:f,backgroundVideo:w,backgroundVideoColor:k,onOpacityChange:x}=e;let C=[];C=[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(l.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(l.__)("Image","ultimate-addons-for-gutenberg")}],h.value&&C.push({value:"video",label:Object(l.__)("Video","ultimate-addons-for-gutenberg")});const O=v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-type"},v.a.createElement(r.SelectControl,{value:f.value,onChange:e=>a({[f.label]:e}),options:C,label:Object(l.__)("Type","ultimate-addons-for-gutenberg")})),"color"===f.value&&v.a.createElement("div",{className:"uag-background-color"},v.a.createElement(n.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:g.value?g.value:"",onColorChange:e=>a({[g.label]:e})})),"image"===f.value&&v.a.createElement("div",{className:"uag-background-image"},v.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&a({[d.label]:e}):a({[d.label]:null})},backgroundImage:d.value,onRemoveImage:()=>{a({[d.label]:null})}}),d.value&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(r.SelectControl,{label:Object(l.__)("Image Position","ultimate-addons-for-gutenberg"),value:s.value,onChange:e=>a({[s.label]:e}),options:[{value:"top-left",label:Object(l.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(l.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(l.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(l.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(l.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(l.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(l.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(l.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(l.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-attachment"},v.a.createElement(r.SelectControl,{label:Object(l.__)("Attachment","ultimate-addons-for-gutenberg"),value:i.value,onChange:e=>a({[i.label]:e}),options:[{value:"fixed",label:Object(l.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(l.__)("Scroll","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-repeat"},v.a.createElement(r.SelectControl,{label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg"),value:b.value,onChange:e=>a({[b.label]:e}),options:[{value:"no-repeat",label:Object(l.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(l.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(l.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-size"},v.a.createElement(r.SelectControl,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),value:u.value,onChange:e=>a({[u.label]:e}),options:[{value:"auto",label:Object(l.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(l.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(l.__)("Contain","ultimate-addons-for-gutenberg")}]})),o&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-overlay-type"},v.a.createElement(r.SelectControl,{label:Object(l.__)("Overlay Type","ultimate-addons-for-gutenberg"),value:o.value,onChange:e=>a({[o.label]:e}),options:[{value:"color",label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(l.__)("Gradient","ultimate-addons-for-gutenberg")}]})),"color"===o.value&&v.a.createElement("div",{className:"uag-background-image-overlay-color"},v.a.createElement(n.a,{label:Object(l.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:t.value,onColorChange:e=>a({[t.label]:e})})),"gradient"===o.value&&v.a.createElement("div",{className:"uag-background-image-overlay-gradient"},v.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:a}))))),"gradient"===f.value&&v.a.createElement("div",{className:"uag-background-gradient"},v.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===f.value&&h.value&&v.a.createElement("div",{className:"uag-background-video"},v.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&a({[w.label]:e}):a({[w.label]:null})},backgroundImage:w.value,onRemoveImage:()=>{a({[w.label]:null})},showVideoInput:!0})),"video"===f.value&&w.value&&h.value&&v.a.createElement("div",{className:"uag-background-video-overlay"},v.a.createElement(n.a,{label:Object(l.__)("Video Overlay Color","ultimate-addons-for-gutenberg"),colorValue:k.value,onColorChange:e=>a({[k.label]:e}),onOpacityChange:x})));return v.a.createElement("div",{className:"uag-bg-select-control components-base-control"},O)}},279:function(e,a,t){"use strict";var o,l=t(2),n=t(14),r=t(16),u=t(9),b=t(3),i=t(23),s=t(18),d=t.n(s),g=t(276),c=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=g.a.locals||{},p.use=function(){return c++||(o=d()(g.a,m)),p},p.unuse=function(){c>0&&!--c&&(o(),o=null)};var v=p,_=t(1),h=t.n(_);a.a=e=>{Object(_.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const[a,t]=Object(b.useState)(!1),{setAttributes:o,boxShadowColor:s,boxShadowHOffset:d,boxShadowVOffset:g,boxShadowBlur:c,boxShadowSpread:m,boxShadowPosition:p}=e;let f;const w=a?"active":"";a&&(f=h.a.createElement("div",{className:"uagb-box-shadow-advanced"},h.a.createElement("div",{className:"uagb-shadow-color"},h.a.createElement(r.a,{label:s.title,colorValue:s.value,onColorChange:e=>o({[s.label]:e})})),h.a.createElement("div",{className:"uagb-horizontal-wrap"},h.a.createElement(n.a,{label:d.title,value:d.value,onChange:e=>o({[d.label]:e}),min:0,max:100,displayUnit:!1})),h.a.createElement("div",{className:"uagb-vertical-wrap"},h.a.createElement(n.a,{label:g.title,value:g.value,onChange:e=>o({[g.label]:e}),min:0,max:100,displayUnit:!1})),h.a.createElement("div",{className:"uagb-blur-wrap"},h.a.createElement(n.a,{label:c.title,value:c.value,onChange:e=>o({[c.label]:e}),min:0,max:100,displayUnit:!1})),h.a.createElement("div",{className:"uagb-spread-wrap"},h.a.createElement(n.a,{label:m.title,value:m.value,onChange:e=>o({[m.label]:e}),min:-100,max:100,displayUnit:!1})),h.a.createElement("div",{className:"uagb-shadow-type"},h.a.createElement(i.a,{setAttributes:o,label:p.title,data:{value:p.value,label:p.label},options:[{value:"outset",label:Object(l.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(l.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const k=h.a.createElement("div",{className:"uag-box-shadow-option-actions"},h.a.createElement("span",{className:"uag-control-label"},Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg")),h.a.createElement(u.Button,{className:"uag-box-shadow-button","aria-pressed":a,onClick:()=>t(!a)},h.a.createElement(u.Dashicon,{icon:"edit"})));return h.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+w},k,a&&f)}},296:function(e,a,t){"use strict";var o=t(1),l=t.n(o),n=t(2),r=t(9),u=t(10),b=t(3);a.a=e=>{const[a,t]=Object(b.useState)(!1),{label:o,data:i,setAttributes:s,options:d}=e,g=Object(u.useSelect)(e=>e("core/edit-post").__experimentalGetPreviewDeviceType(),[]),{__experimentalSetPreviewDeviceType:c}=Object(u.useDispatch)("core/edit-post"),m={desktop:l.a.createElement("svg",{width:"8",height:"7",viewBox:"0 0 8 7",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"})),tablet:l.a.createElement("svg",{width:"6",height:"7",viewBox:"0 0 6 7",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"})),mobile:l.a.createElement("svg",{width:"4",height:"7",viewBox:"0 0 4 7",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"}))},p=[{name:"Desktop",title:m.desktop,itemClass:"uagb-desktop-tab uagb-responsive-tabs"},{name:"Tablet",title:m.tablet,itemClass:"uagb-tablet-tab uagb-responsive-tabs"},{name:"Mobile",key:"mobile",title:m.mobile,itemClass:"uagb-mobile-tab uagb-responsive-tabs"}],v={};return v.Desktop=l.a.createElement(r.SelectControl,{value:i.desktop.value,onChange:e=>s({[i.desktop.label]:e}),options:d.desktop}),v.Tablet=l.a.createElement(r.SelectControl,{value:i.tablet.value,onChange:e=>s({[i.tablet.label]:e}),options:d.tablet||d.desktop}),v.Mobile=l.a.createElement(r.SelectControl,{value:i.mobile.value,onChange:e=>s({[i.mobile.label]:e}),options:d.mobile||d.desktop}),l.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},l.a.createElement("div",{className:"uagb-size-type-field-tabs"},l.a.createElement("div",{className:"uagb-control__header"},l.a.createElement("div",{className:"uag-responsive-label-wrap"},o&&l.a.createElement("span",{className:"uag-control-label"},o),!a&&l.a.createElement(r.Button,{key:"uag-responsive-common-button",className:"uag-responsive-common-button",onClick:()=>{t(!a)}},m[g.toLowerCase()]),a&&l.a.createElement(r.ButtonGroup,{className:"uagb-range-control-responsive components-tab-panel__tabs","aria-label":Object(n.__)("Device","ultimate-addons-for-gutenberg")},p.map(({name:e,key:o,title:n,itemClass:u})=>l.a.createElement(r.Button,{key:o,className:`components-button components-tab-panel__tabs-item uagb-range-control-responsive-item ${u}${e===g?" active-tab":""}`,"aria-pressed":g===e,onClick:()=>(c(e),void t(!a))},n))))),v[g]?v[g]:v.Desktop),e.help&&l.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},583:function(e,a,t){"use strict";t.r(a);var o=t(1),l=t.n(o),n=t(65),r=t(22),u=t(66),b=t(296),i=t(2),s=t(5),d=t(279),g=(t(47),t(278)),c=t(60),m=t(15);function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}const v=e=>{e=e.parentProps;const{attributes:a,setAttributes:t,deviceType:o}=e,{widthDesktop:v,widthTablet:_,widthMobile:h,widthType:f,minHeightDesktop:w,minHeightTablet:k,minHeightMobile:x,minHeightType:C,directionDesktop:O,directionTablet:j,directionMobile:y,alignItemsDesktop:E,alignItemsTablet:S,alignItemsMobile:V,justifyContentDesktop:T,justifyContentTablet:N,justifyContentMobile:H,wrapDesktop:I,wrapTablet:R,wrapMobile:A,alignContentDesktop:M,alignContentTablet:D,alignContentMobile:B,backgroundType:P,backgroundImage:z,backgroundColor:L,backgroundPosition:G,backgroundAttachment:W,backgroundRepeat:Z,backgroundSize:U,backgroundImageColor:F,gradientValue:J,borderStyle:X,borderWidth:$,borderRadius:q,borderColor:K,borderHoverColor:Q,boxShadowColor:Y,boxShadowHOffset:ee,boxShadowVOffset:ae,boxShadowBlur:te,boxShadowSpread:oe,boxShadowPosition:le}=a;return l.a.createElement(s.InspectorControls,null,l.a.createElement(n.a,null,l.a.createElement(r.b,r.a.general,(()=>{const e={desktop:[{value:"row",label:Object(i.__)("Row","ultimate-addons-for-gutenberg")},{value:"column",label:Object(i.__)("Column","ultimate-addons-for-gutenberg")},{value:"row-reverse",label:Object(i.__)("Row Reverse","ultimate-addons-for-gutenberg")},{value:"column-reverse",label:Object(i.__)("Column Reverse","ultimate-addons-for-gutenberg")}]},n={desktop:[{value:"flex-start",label:Object(i.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",label:Object(i.__)("Center","ultimate-addons-for-gutenberg")},{value:"flex-end",label:Object(i.__)("Right","ultimate-addons-for-gutenberg")},{value:"stretch",label:Object(i.__)("Stretch","ultimate-addons-for-gutenberg")}]},r={desktop:[{value:"flex-start",label:Object(i.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",label:Object(i.__)("Center","ultimate-addons-for-gutenberg")},{value:"flex-end",label:Object(i.__)("Right","ultimate-addons-for-gutenberg")},{value:"space-between",label:Object(i.__)("Space Between","ultimate-addons-for-gutenberg")},{value:"space-around",label:Object(i.__)("Space Around","ultimate-addons-for-gutenberg")},{value:"space-evenly",label:Object(i.__)("Space Evenly","ultimate-addons-for-gutenberg")}]},s={desktop:[{value:"wrap",label:Object(i.__)("Wrap","ultimate-addons-for-gutenberg")},{value:"nowrap",label:Object(i.__)("No Wrap","ultimate-addons-for-gutenberg")},{value:"wrap-reverse",label:Object(i.__)("Wrap Reverse","ultimate-addons-for-gutenberg")}]};return l.a.createElement(m.a,{title:Object(i.__)("Container","ultimate-addons-for-gutenberg")},l.a.createElement(u.a,{label:Object(i.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:v,label:"widthDesktop"},tablet:{value:_,label:"widthTablet"},mobile:{value:h,label:"widthMobile"}},min:0,max:1600,unit:{value:f,label:"widthType"},units:[{name:Object(i.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(i.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(i.__)("VW","ultimate-addons-for-gutenberg"),unitValue:"vw"}],setAttributes:t}),l.a.createElement(u.a,{label:Object(i.__)("Min Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:w,label:"minHeightDesktop"},tablet:{value:k,label:"minHeightTablet"},mobile:{value:x,label:"minHeightMobile"}},min:0,max:1440,unit:{value:C,label:"minHeightType"},units:[{name:Object(i.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(i.__)("VH","ultimate-addons-for-gutenberg"),unitValue:"vh"}],setAttributes:t}),l.a.createElement(b.a,{label:Object(i.__)("Direction","ultimate-addons-for-gutenberg"),data:{desktop:{value:O,label:"directionDesktop"},tablet:{value:j,label:"directionTablet"},mobile:{value:y,label:"directionMobile"}},options:e,setAttributes:t}),l.a.createElement(b.a,{label:Object(i.__)("Align Items","ultimate-addons-for-gutenberg"),data:{desktop:{value:E,label:"alignItemsDesktop"},tablet:{value:S,label:"alignItemsTablet"},mobile:{value:V,label:"alignItemsMobile"}},options:n,setAttributes:t}),l.a.createElement(b.a,{label:Object(i.__)("Justify Content","ultimate-addons-for-gutenberg"),data:{desktop:{value:T,label:"justifyContentDesktop"},tablet:{value:N,label:"justifyContentTablet"},mobile:{value:H,label:"justifyContentMobile"}},options:r,setAttributes:t}),l.a.createElement(b.a,{label:Object(i.__)("Wrap","ultimate-addons-for-gutenberg"),data:{desktop:{value:I,label:"wrapDesktop"},tablet:{value:R,label:"wrapTablet"},mobile:{value:A,label:"wrapMobile"}},options:s,setAttributes:t}),"wrap"===a["wrap"+o]&&l.a.createElement(b.a,{label:Object(i.__)("Align Content","ultimate-addons-for-gutenberg"),data:{desktop:{value:M,label:"alignContentDesktop"},tablet:{value:D,label:"alignContentTablet"},mobile:{value:B,label:"alignContentMobile"}},options:r,setAttributes:t}))})()),l.a.createElement(r.b,r.a.style,l.a.createElement(m.a,{title:Object(i.__)("Background","ultimate-addons-for-gutenberg")},l.a.createElement(g.a,p({setAttributes:t,backgroundGradient:{value:J,label:"gradientValue"},backgroundImageColor:{value:F,label:"backgroundImageColor"},backgroundSize:{value:U,label:"backgroundSize"},backgroundRepeat:{value:Z,label:"backgroundRepeat"},backgroundAttachment:{value:W,label:"backgroundAttachment"},backgroundPosition:{value:G,label:"backgroundPosition"},backgroundImage:{value:z,label:"backgroundImage"},backgroundColor:{value:L,label:"backgroundColor"},backgroundType:{value:P,label:"backgroundType"},backgroundVideoType:{value:!1}},e)),l.a.createElement(c.a,{setAttributes:t,borderStyle:{value:X,label:"borderStyle",title:Object(i.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:$,label:"borderWidth",title:Object(i.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:q,label:"borderRadius",title:Object(i.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:K,label:"borderColor",title:Object(i.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Q,label:"borderHoverColor",title:Object(i.__)("Hover Color","ultimate-addons-for-gutenberg")}}),l.a.createElement(d.a,{setAttributes:t,label:Object(i.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:Y,label:"boxShadowColor",title:Object(i.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:ee,label:"boxShadowHOffset",title:Object(i.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:ae,label:"boxShadowVOffset",title:Object(i.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:te,label:"boxShadowBlur",title:Object(i.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:oe,label:"boxShadowSpread",title:Object(i.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:le,label:"boxShadowPosition",title:Object(i.__)("Position","ultimate-addons-for-gutenberg")}}))),l.a.createElement(r.b,p({},r.a.advance,{parentProps:e}))))};a.default=l.a.memo(v)}}]);