(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[20],{153:function(e,a,t){"use strict";var l,o=t(2),n=t(9),r=t(5),b=t(1),u=t.n(b),i=t(15),d=t.n(i),g=t(154),s=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return s++||(l=d()(g.a,c)),m},m.unuse=function(){s>0&&!--s&&(l(),l=null)};var p=m;a.a=e=>{Object(b.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:l,showVideoInput:i,label:d}=e;let g=Object(o.__)("Image","ultimate-addons-for-gutenberg"),s=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),c=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),v=["image"];return i&&(g=Object(o.__)("Video","ultimate-addons-for-gutenberg"),s=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),c=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),v=["video"]),g=d||g,u.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+d,label:g},u.a.createElement("div",{className:"uagb-bg-image"},u.a.createElement(r.MediaUpload,{title:s,onSelect:a,allowedTypes:v,value:t,render:({open:e})=>u.a.createElement(n.Button,{isSecondary:!0,onClick:e},null!=t&&t.url?c:s)}),(null==t?void 0:t.url)&&u.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:l,isLink:!0,isDestructive:!0},m),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},154:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),a.a=o},159:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 3px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),a.a=o},160:function(e,a,t){"use strict";var l=t(16),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient {\n  margin-top: 24px; }\n",""]),a.a=o},162:function(e,a,t){"use strict";var l,o=t(2),n=t(18),r=t(9),b=t(15),u=t.n(b),i=t(160),d=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=i.a.locals||{},s.use=function(){return d++||(l=u()(i.a,g)),s},s.unuse=function(){d>0&&!--d&&(l(),l=null)};var c=s,m=function(e){const{setAttributes:a,backgroundGradient:t}=e;return React.createElement(r.__experimentalGradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})}})},p=t(1),v=t.n(p),_=t(153);a.a=e=>{Object(p.useLayoutEffect)(()=>(c.use(),()=>{c.unuse()}),[]);const{setAttributes:a,backgroundImageColor:t,overlayType:l,backgroundSize:b,backgroundRepeat:u,backgroundAttachment:i,backgroundPosition:d,backgroundImage:g,backgroundColor:s,backgroundVideoType:f,backgroundType:h,backgroundVideo:w,backgroundVideoColor:k,onOpacityChange:O}=e;let j=[];j=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")}],f.value&&j.push({value:"video",label:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const x=v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-type"},v.a.createElement(r.SelectControl,{value:h.value,onChange:e=>a({[h.label]:e}),options:j,label:Object(o.__)("Type","ultimate-addons-for-gutenberg")})),"color"===h.value&&v.a.createElement("div",{className:"uag-background-color"},v.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:s.value?s.value:"",onColorChange:e=>a({[s.label]:e})})),"image"===h.value&&v.a.createElement("div",{className:"uag-background-image"},v.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&a({[g.label]:e}):a({[g.label]:null})},backgroundImage:g.value,onRemoveImage:()=>{a({[g.label]:null})}}),g.value&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-position"},v.a.createElement(r.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:d.value,onChange:e=>a({[d.label]:e}),options:[{value:"top-left",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(o.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(o.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-attachment"},v.a.createElement(r.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:i.value,onChange:e=>a({[i.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-repeat"},v.a.createElement(r.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:u.value,onChange:e=>a({[u.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),v.a.createElement("div",{className:"uag-background-image-size"},v.a.createElement(r.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:b.value,onChange:e=>a({[b.label]:e}),options:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]})),l&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"uag-background-image-overlay-type"},v.a.createElement(r.SelectControl,{label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),value:l.value,onChange:e=>a({[l.label]:e}),options:[{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")}]})),"color"===l.value&&v.a.createElement("div",{className:"uag-background-image-overlay-color"},v.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:t.value,onColorChange:e=>a({[t.label]:e})})),"gradient"===l.value&&v.a.createElement("div",{className:"uag-background-image-overlay-gradient"},v.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:a}))))),"gradient"===h.value&&v.a.createElement("div",{className:"uag-background-gradient"},v.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===h.value&&f.value&&v.a.createElement("div",{className:"uag-background-video"},v.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&a({[w.label]:e}):a({[w.label]:null})},backgroundImage:w.value,onRemoveImage:()=>{a({[w.label]:null})},showVideoInput:!0})),"video"===h.value&&w.value&&f.value&&v.a.createElement("div",{className:"uag-background-video-overlay"},v.a.createElement(n.a,{label:Object(o.__)("Video Overlay Color","ultimate-addons-for-gutenberg"),colorValue:k.value,onColorChange:e=>a({[k.label]:e}),onOpacityChange:O})));return v.a.createElement("div",{className:"uag-bg-select-control components-base-control"},x)}},163:function(e,a,t){"use strict";var l,o=t(2),n=t(14),r=t(18),b=t(9),u=t(3),i=t(23),d=t(15),g=t.n(d),s=t(159),c=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=s.a.locals||{},p.use=function(){return c++||(l=g()(s.a,m)),p},p.unuse=function(){c>0&&!--c&&(l(),l=null)};var v=p,_=t(1),f=t.n(_);a.a=e=>{Object(_.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const[a,t]=Object(u.useState)(!1),{setAttributes:l,boxShadowColor:d,boxShadowHOffset:g,boxShadowVOffset:s,boxShadowBlur:c,boxShadowSpread:m,boxShadowPosition:p}=e;let h;const w=a?"active":"";a&&(h=f.a.createElement("div",{className:"uagb-box-shadow-advanced"},f.a.createElement("div",{className:"uagb-shadow-color"},f.a.createElement(r.a,{label:d.title,colorValue:d.value,onColorChange:e=>l({[d.label]:e})})),f.a.createElement("div",{className:"uagb-horizontal-wrap"},f.a.createElement(n.a,{label:g.title,value:g.value,onChange:e=>l({[g.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-vertical-wrap"},f.a.createElement(n.a,{label:s.title,value:s.value,onChange:e=>l({[s.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-blur-wrap"},f.a.createElement(n.a,{label:c.title,value:c.value,onChange:e=>l({[c.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-spread-wrap"},f.a.createElement(n.a,{label:m.title,value:m.value,onChange:e=>l({[m.label]:e}),min:-100,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-shadow-type"},f.a.createElement(i.a,{setAttributes:l,label:p.title,data:{value:p.value,label:p.label},options:[{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const k=f.a.createElement("div",{className:"uag-box-shadow-option-actions"},f.a.createElement("span",{className:"uag-control-label"},Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg")),f.a.createElement(b.Button,{className:"uag-box-shadow-button","aria-pressed":a,onClick:()=>t(!a)},f.a.createElement(b.Dashicon,{icon:"edit"})));return f.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+w},k,a&&h)}},183:function(e,a,t){"use strict";var l=t(1),o=t.n(l),n=t(9),r=t(33),b=t(48);a.a=e=>{const{label:a,data:t,setAttributes:l,options:u}=e,i=Object(r.a)(),d={};return d.Desktop=o.a.createElement(n.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:u.desktop}),d.Tablet=o.a.createElement(n.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:u.tablet||u.desktop}),d.Mobile=o.a.createElement(n.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:u.mobile||u.desktop}),o.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},o.a.createElement("div",{className:"uagb-size-type-field-tabs"},o.a.createElement("div",{className:"uagb-control__header"},o.a.createElement(b.a,{label:a,responsive:!0})),d[i]?d[i]:d.Desktop),e.help&&o.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},504:function(e,a,t){"use strict";t.r(a);var l=t(1),o=t.n(l),n=t(10),r=t(57),b=t(22),u=t(58),i=t(183),d=t(2),g=t(5),s=t(163),c=t(42),m=t(162),p=t(54),v=t(17),_=t(23),f=t(9),h=function(e){let a="";switch(e){case"align-center":a=React.createElement("svg",{viewBox:"0 0 18 12",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 2H14V0H4V2ZM0 7H18V5H0V7ZM4 12H14V10H4V12Z"}));break;case"align-left":a=React.createElement("svg",{viewBox:"0 0 18 12",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 2H0V0H10V2ZM18 7H0V5H18V7ZM10 12H0V10H10V12Z"}));break;case"align-right":a=React.createElement("svg",{viewBox:"0 0 18 12",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 2H18V0H8V2ZM0 7H18V5H0V7ZM8 12H18V10H8V12Z"}))}return a};function w(){return(w=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const k=e=>{e=e.parentProps;const{attributes:a,setAttributes:t,deviceType:k}=e,{widthDesktop:O,widthTablet:j,widthMobile:x,widthType:E,minHeightDesktop:y,minHeightTablet:C,minHeightMobile:T,minHeightType:M,directionDesktop:S,directionTablet:V,directionMobile:I,alignItemsDesktop:R,alignItemsTablet:P,alignItemsMobile:D,justifyContentDesktop:H,justifyContentTablet:N,justifyContentMobile:A,wrapDesktop:B,wrapTablet:G,wrapMobile:L,alignContentDesktop:z,alignContentTablet:W,alignContentMobile:U,backgroundType:Z,backgroundImage:F,backgroundColor:X,backgroundPosition:J,backgroundAttachment:Q,backgroundRepeat:q,backgroundSize:K,backgroundImageColor:Y,gradientValue:$,borderStyle:ee,borderWidth:ae,borderRadius:te,borderColor:le,borderHoverColor:oe,boxShadowColor:ne,boxShadowHOffset:re,boxShadowVOffset:be,boxShadowBlur:ue,boxShadowSpread:ie,boxShadowPosition:de,topPaddingDesktop:ge,bottomPaddingDesktop:se,leftPaddingDesktop:ce,rightPaddingDesktop:me,topPaddingTablet:pe,bottomPaddingTablet:ve,leftPaddingTablet:_e,rightPaddingTablet:fe,topPaddingMobile:he,bottomPaddingMobile:we,leftPaddingMobile:ke,rightPaddingMobile:Oe,paddingType:je,paddingLink:xe,topMarginDesktop:Ee,bottomMarginDesktop:ye,leftMarginDesktop:Ce,rightMarginDesktop:Te,topMarginTablet:Me,bottomMarginTablet:Se,leftMarginTablet:Ve,rightMarginTablet:Ie,topMarginMobile:Re,bottomMarginMobile:Pe,leftMarginMobile:De,rightMarginMobile:He,marginType:Ne,marginLink:Ae,rowGapDesktop:Be,rowGapTablet:Ge,rowGapMobile:Le,rowGapType:ze,columnGapDesktop:We,columnGapTablet:Ue,columnGapMobile:Ze,columnGapType:Fe}=a;return o.a.createElement(l.Suspense,{fallback:Object(n.a)()},o.a.createElement(g.BlockControls,null,o.a.createElement(f.Toolbar,{className:"uag-container-block-inserter"},o.a.createElement(g.Inserter,{clientId:e.clientId,rootClientId:e.clientId,__experimentalIsQuick:!0,position:"bottom right"}))),o.a.createElement(g.InspectorControls,null,o.a.createElement(r.a,null,o.a.createElement(b.b,b.a.general,(()=>{const e={desktop:[{value:"",label:Object(d.__)("Default","ultimate-addons-for-gutenberg")},{value:"row",label:Object(d.__)("Row","ultimate-addons-for-gutenberg")},{value:"column",label:Object(d.__)("Column","ultimate-addons-for-gutenberg")},{value:"row-reverse",label:Object(d.__)("Row Reverse","ultimate-addons-for-gutenberg")},{value:"column-reverse",label:Object(d.__)("Column Reverse","ultimate-addons-for-gutenberg")}]},l=[{value:"flex-start",tooltip:Object(d.__)("Flex Start","ultimate-addons-for-gutenberg"),icon:o.a.createElement(f.Icon,{icon:h("align-left")})},{value:"center",tooltip:Object(d.__)("Center","ultimate-addons-for-gutenberg"),icon:o.a.createElement(f.Icon,{icon:h("align-center")})},{value:"flex-end",label:Object(d.__)("Flex End","ultimate-addons-for-gutenberg"),icon:o.a.createElement(f.Icon,{icon:h("align-right")})},{value:"stretch",label:Object(d.__)("Stretch","ultimate-addons-for-gutenberg"),icon:o.a.createElement(f.Icon,{icon:h("align-center")})}],n={desktop:[{value:"",label:Object(d.__)("Default","ultimate-addons-for-gutenberg")},{value:"flex-start",label:Object(d.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",label:Object(d.__)("Center","ultimate-addons-for-gutenberg")},{value:"flex-end",label:Object(d.__)("Right","ultimate-addons-for-gutenberg")},{value:"space-between",label:Object(d.__)("Space Between","ultimate-addons-for-gutenberg")},{value:"space-around",label:Object(d.__)("Space Around","ultimate-addons-for-gutenberg")},{value:"space-evenly",label:Object(d.__)("Space Evenly","ultimate-addons-for-gutenberg")}]},r={desktop:[{value:"",label:Object(d.__)("Default","ultimate-addons-for-gutenberg")},{value:"wrap",label:Object(d.__)("Wrap","ultimate-addons-for-gutenberg")},{value:"nowrap",label:Object(d.__)("No Wrap","ultimate-addons-for-gutenberg")},{value:"wrap-reverse",label:Object(d.__)("Wrap Reverse","ultimate-addons-for-gutenberg")}]},b=[{value:25,tooltip:Object(d.__)("25%","ultimate-addons-for-gutenberg"),label:Object(d.__)("25%","ultimate-addons-for-gutenberg")},{value:33,tooltip:Object(d.__)("33%","ultimate-addons-for-gutenberg"),label:Object(d.__)("33%","ultimate-addons-for-gutenberg")},{value:50,label:Object(d.__)("50%","ultimate-addons-for-gutenberg"),tooltip:Object(d.__)("50%","ultimate-addons-for-gutenberg")},{value:66,label:Object(d.__)("66%","ultimate-addons-for-gutenberg"),tooltip:Object(d.__)("66%","ultimate-addons-for-gutenberg")},{value:75,label:Object(d.__)("75%","ultimate-addons-for-gutenberg"),tooltip:Object(d.__)("75%","ultimate-addons-for-gutenberg")},{value:100,label:Object(d.__)("100%","ultimate-addons-for-gutenberg"),tooltip:Object(d.__)("100%","ultimate-addons-for-gutenberg")}];return o.a.createElement(v.a,{title:Object(d.__)("Container","ultimate-addons-for-gutenberg")},o.a.createElement(_.a,{setAttributes:t,label:Object(d.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:O,label:"widthDesktop"},tablet:{value:j,label:"widthTablet"},mobile:{value:x,label:"widthMobile"}},options:b,showIcons:!1,responsive:!0}),o.a.createElement(u.a,{label:Object(d.__)("Custom Width","ultimate\t-addons-for-gutenberg"),data:{desktop:{value:O,label:"widthDesktop"},tablet:{value:j,label:"widthTablet"},mobile:{value:x,label:"widthMobile"}},min:0,max:1600,unit:{value:E,label:"widthType"},units:[{name:Object(d.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(d.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(d.__)("VW","ultimate-addons-for-gutenberg"),unitValue:"vw"}],setAttributes:t}),o.a.createElement(u.a,{label:Object(d.__)("Min Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:y,label:"minHeightDesktop"},tablet:{value:C,label:"minHeightTablet"},mobile:{value:T,label:"minHeightMobile"}},min:0,max:1440,unit:{value:M,label:"minHeightType"},units:[{name:Object(d.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(d.__)("VH","ultimate-addons-for-gutenberg"),unitValue:"vh"}],setAttributes:t}),o.a.createElement(i.a,{label:Object(d.__)("Direction","ultimate-addons-for-gutenberg"),data:{desktop:{value:S,label:"directionDesktop"},tablet:{value:V,label:"directionTablet"},mobile:{value:I,label:"directionMobile"}},options:e,setAttributes:t}),o.a.createElement(_.a,{setAttributes:t,label:Object(d.__)("Align Items","ultimate-addons-for-gutenberg"),data:{desktop:{value:R,label:"alignItemsDesktop"},tablet:{value:P,label:"alignItemsTablet"},mobile:{value:D,label:"alignItemsMobile"}},options:l,showIcons:!0,responsive:!0}),o.a.createElement(i.a,{label:Object(d.__)("Justify Content","ultimate-addons-for-gutenberg"),data:{desktop:{value:H,label:"justifyContentDesktop"},tablet:{value:N,label:"justifyContentTablet"},mobile:{value:A,label:"justifyContentMobile"}},options:n,setAttributes:t}),o.a.createElement(u.a,{label:Object(d.__)("Row Gap","ultimate\t-addons-for-gutenberg"),data:{desktop:{value:Be,label:"rowGapDesktop"},tablet:{value:Ge,label:"rowGapTablet"},mobile:{value:Le,label:"rowGapMobile"}},min:0,max:1600,unit:{value:ze,label:"rowGapType"},units:[{name:Object(d.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(d.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(d.__)("VW","ultimate-addons-for-gutenberg"),unitValue:"vw"}],setAttributes:t}),o.a.createElement(u.a,{label:Object(d.__)("Column Gap","ultimate\t-addons-for-gutenberg"),data:{desktop:{value:We,label:"columnGapDesktop"},tablet:{value:Ue,label:"columnGapTablet"},mobile:{value:Ze,label:"columnGapMobile"}},min:0,max:1600,unit:{value:Fe,label:"columnGapType"},units:[{name:Object(d.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(d.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(d.__)("VW","ultimate-addons-for-gutenberg"),unitValue:"vw"}],setAttributes:t}),o.a.createElement(i.a,{label:Object(d.__)("Wrap","ultimate-addons-for-gutenberg"),data:{desktop:{value:B,label:"wrapDesktop"},tablet:{value:G,label:"wrapTablet"},mobile:{value:L,label:"wrapMobile"}},options:r,setAttributes:t}),"wrap"===a["wrap"+k]&&o.a.createElement(i.a,{label:Object(d.__)("Align Content","ultimate-addons-for-gutenberg"),data:{desktop:{value:z,label:"alignContentDesktop"},tablet:{value:W,label:"alignContentTablet"},mobile:{value:U,label:"alignContentMobile"}},options:n,setAttributes:t}))})()),o.a.createElement(b.b,b.a.style,o.a.createElement(v.a,{title:Object(d.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(m.a,w({setAttributes:t,backgroundGradient:{value:$,label:"gradientValue"},backgroundImageColor:{value:Y,label:"backgroundImageColor"},backgroundSize:{value:K,label:"backgroundSize"},backgroundRepeat:{value:q,label:"backgroundRepeat"},backgroundAttachment:{value:Q,label:"backgroundAttachment"},backgroundPosition:{value:J,label:"backgroundPosition"},backgroundImage:{value:F,label:"backgroundImage"},backgroundColor:{value:X,label:"backgroundColor"},backgroundType:{value:Z,label:"backgroundType"},backgroundVideoType:{value:!1}},e))),o.a.createElement(v.a,{title:Object(d.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(p.a,{setAttributes:t,borderStyle:{value:ee,label:"borderStyle",title:Object(d.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:ae,label:"borderWidth",title:Object(d.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:te,label:"borderRadius",title:Object(d.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:le,label:"borderColor",title:Object(d.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:oe,label:"borderHoverColor",title:Object(d.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),o.a.createElement(v.a,{title:Object(d.__)("Box Shadow","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.a,{setAttributes:t,label:Object(d.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:ne,label:"boxShadowColor",title:Object(d.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:re,label:"boxShadowHOffset",title:Object(d.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:be,label:"boxShadowVOffset",title:Object(d.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:ue,label:"boxShadowBlur",title:Object(d.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:ie,label:"boxShadowSpread",title:Object(d.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:de,label:"boxShadowPosition",title:Object(d.__)("Position","ultimate-addons-for-gutenberg")}})),o.a.createElement(v.a,{title:Object(d.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(c.a,w({},e,{label:Object(d.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ge,label:"topPaddingDesktop"},valueRight:{value:me,label:"rightPaddingDesktop"},valueBottom:{value:se,label:"bottomPaddingDesktop"},valueLeft:{value:ce,label:"leftPaddingDesktop"},valueTopTablet:{value:pe,label:"topPaddingTablet"},valueRightTablet:{value:fe,label:"rightPaddingTablet"},valueBottomTablet:{value:ve,label:"bottomPaddingTablet"},valueLeftTablet:{value:_e,label:"leftPaddingTablet"},valueTopMobile:{value:he,label:"topPaddingMobile"},valueRightMobile:{value:Oe,label:"rightPaddingMobile"},valueBottomMobile:{value:we,label:"bottomPaddingMobile"},valueLeftMobile:{value:ke,label:"leftPaddingMobile"},unit:{value:je,label:"paddingType"},mUnit:{value:je,label:"paddingType"},tUnit:{value:je,label:"paddingType"},attributes:a,setAttributes:t,link:{value:xe,label:"paddingLink"}})),o.a.createElement(c.a,w({},e,{label:Object(d.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Ee,label:"topMarginDesktop"},valueRight:{value:Te,label:"rightMarginDesktop"},valueBottom:{value:ye,label:"bottomMarginDesktop"},valueLeft:{value:Ce,label:"leftMarginDesktop"},valueTopTablet:{value:Me,label:"topMarginTablet"},valueRightTablet:{value:Ie,label:"rightMarginTablet"},valueBottomTablet:{value:Se,label:"bottomMarginTablet"},valueLeftTablet:{value:Ve,label:"leftMarginTablet"},valueTopMobile:{value:Re,label:"topMarginMobile"},valueRightMobile:{value:He,label:"rightMarginMobile"},valueBottomMobile:{value:Pe,label:"bottomMarginMobile"},valueLeftMobile:{value:De,label:"leftMarginMobile"},unit:{value:Ne,label:"marginType"},mUnit:{value:Ne,label:"marginType"},tUnit:{value:Ne,label:"marginType"},attributes:a,setAttributes:t,link:{value:Ae,label:"marginLink"}})))),o.a.createElement(b.b,w({},b.a.advance,{parentProps:e})))))};a.default=o.a.memo(k)}}]);