(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[18],{249:function(e,a,t){"use strict";var o,l=t(2),n=t(6),r=t(5),b=t(1),u=t.n(b),i=t(17),d=t.n(i),g=t(250),c=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return c++||(o=d()(g.a,s)),m},m.unuse=function(){c>0&&!--c&&(o(),o=null)};var v=m;a.a=e=>{Object(b.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:o,showVideoInput:i,label:d}=e;let g=Object(l.__)("Image","ultimate-addons-for-gutenberg"),c=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),s=Object(l.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(l.__)("Remove Image","ultimate-addons-for-gutenberg"),p=["image"];return i&&(g=Object(l.__)("Video","ultimate-addons-for-gutenberg"),c=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),s=Object(l.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(l.__)("Remove Video","ultimate-addons-for-gutenberg"),p=["video"]),g=d||g,u.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+d,label:g},u.a.createElement("div",{className:"uagb-bg-image"},u.a.createElement(r.MediaUpload,{title:c,onSelect:a,allowedTypes:p,value:t,render:({open:e})=>u.a.createElement(n.Button,{isSecondary:!0,onClick:e},null!=t&&t.url?s:c)}),(null==t?void 0:t.url)&&u.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:o,isLink:!0,isDestructive:!0},m),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},250:function(e,a,t){"use strict";var o=t(18),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),a.a=l},256:function(e,a,t){"use strict";var o=t(18),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 3px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),a.a=l},257:function(e,a,t){"use strict";var o=t(18),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient {\n  margin-top: 24px; }\n",""]),a.a=l},261:function(e,a,t){"use strict";var o,l=t(2),n=t(13),r=t(16),b=t(6),u=t(17),i=t.n(u),d=t(257),g=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=d.a.locals||{},s.use=function(){return g++||(o=i()(d.a,c)),s},s.unuse=function(){g>0&&!--g&&(o(),o=null)};var m=s,v=function(e){const{setAttributes:a,backgroundGradient:t}=e;return React.createElement(b.__experimentalGradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})}})},p=t(1),_=t.n(p),f=t(249);a.a=e=>{Object(p.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]);const{setAttributes:a,backgroundImageColor:t,overlayType:o,backgroundSize:u,backgroundRepeat:i,backgroundAttachment:d,backgroundPosition:g,backgroundImage:c,backgroundColor:s,backgroundVideoType:h,backgroundType:O,backgroundVideo:j,backgroundVideoOpacity:k,backgroundVideoColor:y}=e;let x=[];x=[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(l.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(l.__)("Image","ultimate-addons-for-gutenberg")}],h.value&&x.push({value:"video",label:Object(l.__)("Video","ultimate-addons-for-gutenberg")});const C=_.a.createElement(_.a.Fragment,null,_.a.createElement("div",{className:"uag-background-type"},_.a.createElement(b.SelectControl,{value:O.value,onChange:e=>a({[O.label]:e}),options:x,label:Object(l.__)("Type","ultimate-addons-for-gutenberg")})),"color"===O.value&&_.a.createElement("div",{className:"uag-background-color"},_.a.createElement(r.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:s.value?s.value:"",onColorChange:e=>a({[s.label]:e})})),"image"===O.value&&_.a.createElement("div",{className:"uag-background-image"},_.a.createElement(f.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&a({[c.label]:e}):a({[c.label]:null})},backgroundImage:c.value,onRemoveImage:()=>{a({[c.label]:null})}}),c.value&&_.a.createElement(_.a.Fragment,null,_.a.createElement("div",{className:"uag-background-image-position"},_.a.createElement(b.SelectControl,{label:Object(l.__)("Image Position","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>a({[g.label]:e}),options:[{value:"top-left",label:Object(l.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(l.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(l.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(l.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(l.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(l.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(l.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(l.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(l.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),_.a.createElement("div",{className:"uag-background-image-attachment"},_.a.createElement(b.SelectControl,{label:Object(l.__)("Attachment","ultimate-addons-for-gutenberg"),value:d.value,onChange:e=>a({[d.label]:e}),options:[{value:"fixed",label:Object(l.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(l.__)("Scroll","ultimate-addons-for-gutenberg")}]})),_.a.createElement("div",{className:"uag-background-image-repeat"},_.a.createElement(b.SelectControl,{label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg"),value:i.value,onChange:e=>a({[i.label]:e}),options:[{value:"no-repeat",label:Object(l.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(l.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(l.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),_.a.createElement("div",{className:"uag-background-image-size"},_.a.createElement(b.SelectControl,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),value:u.value,onChange:e=>a({[u.label]:e}),options:[{value:"auto",label:Object(l.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(l.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(l.__)("Contain","ultimate-addons-for-gutenberg")}]})),_.a.createElement("div",{className:"uag-background-image-overlay-type"},_.a.createElement(b.SelectControl,{label:Object(l.__)("Overlay Type","ultimate-addons-for-gutenberg"),value:o.value,onChange:e=>a({[o.label]:e}),options:[{value:"color",label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(l.__)("Gradient","ultimate-addons-for-gutenberg")}]})),"color"===o.value&&_.a.createElement("div",{className:"uag-background-image-overlay-color"},_.a.createElement(r.a,{label:Object(l.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:t.value,onColorChange:e=>a({[t.label]:e})})),"gradient"===o.value&&_.a.createElement("div",{className:"uag-background-image-overlay-gradient"},_.a.createElement(v,{backgroundGradient:e.backgroundGradient,setAttributes:a})))),"gradient"===O.value&&_.a.createElement("div",{className:"uag-background-gradient"},_.a.createElement(v,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===O.value&&h.value&&_.a.createElement("div",{className:"uag-background-video"},_.a.createElement(f.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&a({[j.label]:e}):a({[j.label]:null})},backgroundImage:j.value,onRemoveImage:()=>{a({[j.label]:null})},showVideoInput:!0})),"video"===O.value&&j.value&&h.value&&_.a.createElement("div",{className:"uag-background-video-overlay"},_.a.createElement(r.a,{label:Object(l.__)("Video Overlay Color","ultimate-addons-for-gutenberg"),colorValue:y.value,onColorChange:e=>a({[y.label]:e})})),"video"===O.value&&j.value&&h.value&&_.a.createElement("div",{className:"uag-background-video-opacity"},_.a.createElement(n.a,{label:Object(l.__)("Opacity","ultimate-addons-for-gutenberg"),value:k.value,onChange:e=>a({[k.label]:parseInt(e)}),min:0,max:100,displayUnit:!1})));return _.a.createElement("div",{className:"uag-bg-select-control components-base-control"},C)}},262:function(e,a,t){"use strict";var o,l=t(2),n=t(13),r=t(16),b=t(6),u=t(3),i=t(22),d=t(17),g=t.n(d),c=t(256),s=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=c.a.locals||{},v.use=function(){return s++||(o=g()(c.a,m)),v},v.unuse=function(){s>0&&!--s&&(o(),o=null)};var p=v,_=t(1),f=t.n(_);a.a=e=>{Object(_.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const[a,t]=Object(u.useState)(!1),{setAttributes:o,boxShadowColor:d,boxShadowHOffset:g,boxShadowVOffset:c,boxShadowBlur:s,boxShadowSpread:m,boxShadowPosition:v}=e;let h;const O=a?"active":"";a&&(h=f.a.createElement("div",{className:"uagb-box-shadow-advanced"},f.a.createElement("div",{className:"uagb-shadow-color"},f.a.createElement(r.a,{label:d.title,colorValue:d.value,onColorChange:e=>o({[d.label]:e})})),f.a.createElement("div",{className:"uagb-horizontal-wrap"},f.a.createElement(n.a,{label:g.title,value:g.value,onChange:e=>o({[g.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-vertical-wrap"},f.a.createElement(n.a,{label:c.title,value:c.value,onChange:e=>o({[c.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-blur-wrap"},f.a.createElement(n.a,{label:s.title,value:s.value,onChange:e=>o({[s.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-spread-wrap"},f.a.createElement(n.a,{label:m.title,value:m.value,onChange:e=>o({[m.label]:e}),min:-100,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-shadow-type"},f.a.createElement(i.a,{setAttributes:o,label:v.title,data:{value:v.value,label:v.label},options:[{value:"outset",label:Object(l.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(l.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const j=f.a.createElement("div",{className:"uag-box-shadow-option-actions"},f.a.createElement("span",{className:"uag-control-label"},Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg")),f.a.createElement(b.Button,{className:"uag-box-shadow-button","aria-pressed":a,onClick:()=>t(!a)},f.a.createElement(b.Dashicon,{icon:"edit"})));return f.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+O},j,a&&h)}},533:function(e,a,t){"use strict";t.r(a);var o=t(2),l=t(1),n=t.n(l),r=t(11),b=t(262),u=t(22),i=t(41),d=t(261),g=t(57),c=t(16),s=t(13),m=t(63),v=t(21),p=t(64),_=t(42),f=t(5),h=t(6);function O(){return(O=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}const j=e=>{e=e.parentProps;const{attributes:a,setAttributes:t}=e,{stack:j,align:k,vAlign:y,contentWidth:x,width:C,widthType:w,tag:E,columnGap:T,topMarginDesktop:S,rightMarginDesktop:M,leftMarginDesktop:P,bottomMarginDesktop:N,topMarginMobile:A,rightMarginMobile:V,leftMarginMobile:B,bottomMarginMobile:I,topMarginTablet:R,rightMarginTablet:H,leftMarginTablet:L,bottomMarginTablet:W,topPadding:F,bottomPadding:z,leftPadding:U,rightPadding:D,topPaddingTablet:G,bottomPaddingTablet:J,leftPaddingTablet:Z,rightPaddingTablet:X,topPaddingMobile:q,bottomPaddingMobile:K,leftPaddingMobile:Q,rightPaddingMobile:Y,backgroundType:$,backgroundImage:ee,backgroundVideo:ae,backgroundColor:te,backgroundPosition:oe,backgroundAttachment:le,backgroundRepeat:ne,backgroundSize:re,backgroundVideoColor:be,backgroundVideoOpacity:ue,backgroundImageColor:ie,gradientValue:de,overlayType:ge,borderStyle:ce,borderWidth:se,borderRadius:me,borderColor:ve,borderHoverColor:pe,columns:_e,bottomType:fe,bottomColor:he,bottomHeight:Oe,bottomHeightTablet:je,bottomHeightMobile:ke,bottomWidth:ye,topType:xe,topColor:Ce,topHeight:we,topHeightTablet:Ee,topHeightMobile:Te,topWidth:Se,bottomFlip:Me,topFlip:Pe,reverseTablet:Ne,reverseMobile:Ae,topContentAboveShape:Ve,bottomContentAboveShape:Be,mobileMarginType:Ie,tabletMarginType:Re,desktopMarginType:He,mobilePaddingType:Le,tabletPaddingType:We,desktopPaddingType:Fe,paddingLink:ze,marginLink:Ue,boxShadowColor:De,boxShadowHOffset:Ge,boxShadowVOffset:Je,boxShadowBlur:Ze,boxShadowSpread:Xe,boxShadowPosition:qe}=a;return n.a.createElement(l.Suspense,{fallback:Object(r.a)()},n.a.createElement(f.BlockControls,null,n.a.createElement(f.BlockAlignmentToolbar,{value:k,onChange:e=>{t({align:e})},controls:["wide","full"]}),n.a.createElement(f.BlockVerticalAlignmentToolbar,{value:y,onChange:e=>{t({vAlign:e})}})),n.a.createElement(f.InspectorControls,null,n.a.createElement(m.a,null,n.a.createElement(v.b,v.a.general,n.a.createElement(h.PanelBody,{title:Object(o.__)("Layout","ultimate-addons-for-gutenberg")},n.a.createElement(s.a,{label:Object(o.__)("Columns","ultimate-addons-for-gutenberg"),setAttributes:t,value:_e,onChange:e=>t({columns:e}),min:0,max:6,displayUnit:!1}),n.a.createElement(u.a,{setAttributes:t,label:Object(o.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:j,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(o.__)("Tablet & Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Tablet & Mobile","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(o.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(o.__)("Note: Choose on what breakpoint the columns will stack.","ultimate-addons-for-gutenberg")}),n.a.createElement(u.a,{setAttributes:t,label:Object(o.__)("Container Width","ultimate-addons-for-gutenberg"),data:{value:x,label:"contentWidth"},className:"uagb-multi-button-alignment-control",options:[{value:"theme",label:Object(o.__)("Theme Container Width","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Theme Container Width","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}],showIcons:!1}),"custom"===x&&n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{label:Object(o.__)("Inner Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:C,onChange:e=>t({width:e}),min:0,max:"%"===w?100:2e3,unit:{value:w,label:"widthType"},units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),n.a.createElement(u.a,{setAttributes:t,label:Object(o.__)("Gap","ultimate-addons-for-gutenberg"),data:{value:T,label:"columnGap"},className:"uagb-multi-button-alignment-control",options:[{value:"10",label:Object(o.__)("Default","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Default (10px)","ultimate-addons-for-gutenberg")},{value:"0",label:Object(o.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("No Gap (0px)","ultimate-addons-for-gutenberg")},{value:"5",label:Object(o.__)("S","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Narrow (5px)","ultimate-addons-for-gutenberg")},{value:"15",label:Object(o.__)("M","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Extended (15px)","ultimate-addons-for-gutenberg")},{value:"20",label:Object(o.__)("L","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Wide (20px)","ultimate-addons-for-gutenberg")},{value:"30",label:Object(o.__)("XL","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Wider (30px)","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(o.__)("Note: The individual Column Gap can be managed from Column Settings.","ultimate-addons-for-gutenberg")}),n.a.createElement(h.SelectControl,{label:Object(o.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:E,onChange:e=>t({tag:e}),options:[{value:"div",label:Object(o.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(o.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(o.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(o.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(o.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(o.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(o.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(o.__)("nav","ultimate-addons-for-gutenberg")}]}),n.a.createElement(h.ToggleControl,{label:Object(o.__)("Reverse Columns (Tablet & Mobile)","ultimate-addons-for-gutenberg"),checked:Ne,onChange:()=>t({reverseTablet:!Ne})}),n.a.createElement(h.ToggleControl,{label:Object(o.__)("Reverse Columns (Mobile)","ultimate-addons-for-gutenberg"),checked:Ae,onChange:()=>t({reverseMobile:!Ae})}))),n.a.createElement(v.b,v.a.style,(()=>{const e=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"tilt",label:Object(o.__)("Tilt","ultimate-addons-for-gutenberg")},{value:"mountains",label:Object(o.__)("Mountains","ultimate-addons-for-gutenberg")},{value:"wave_brush",label:Object(o.__)("Wave Brush","ultimate-addons-for-gutenberg")},{value:"waves",label:Object(o.__)("Waves","ultimate-addons-for-gutenberg")},{value:"wave_pattern",label:Object(o.__)("Waves Pattern","ultimate-addons-for-gutenberg")},{value:"triangle",label:Object(o.__)("Triangle","ultimate-addons-for-gutenberg")},{value:"drops",label:Object(o.__)("Drops","ultimate-addons-for-gutenberg")},{value:"clouds",label:Object(o.__)("Clouds","ultimate-addons-for-gutenberg")},{value:"zigzag",label:Object(o.__)("ZigZag","ultimate-addons-for-gutenberg")},{value:"pyramids",label:Object(o.__)("Pyramids","ultimate-addons-for-gutenberg")},{value:"triangle_asymmetrical",label:Object(o.__)("Triangle Asymmetrical","ultimate-addons-for-gutenberg")},{value:"tilt_opacity",label:Object(o.__)("Tilt Opacity","ultimate-addons-for-gutenberg")},{value:"fan_opacity",label:Object(o.__)("Fan Opacity","ultimate-addons-for-gutenberg")},{value:"curve",label:Object(o.__)("Curve","ultimate-addons-for-gutenberg")},{value:"curve_asymmetrical",label:Object(o.__)("Curve Asymmetrical","ultimate-addons-for-gutenberg")},{value:"curve_reverse",label:Object(o.__)("Curve Reverse","ultimate-addons-for-gutenberg")},{value:"curve_asym_reverse",label:Object(o.__)("Curve Asymmetrical Reverse","ultimate-addons-for-gutenberg")},{value:"arrow",label:Object(o.__)("Arrow","ultimate-addons-for-gutenberg")},{value:"arrow_split",label:Object(o.__)("Arrow Split","ultimate-addons-for-gutenberg")},{value:"book",label:Object(o.__)("Book","ultimate-addons-for-gutenberg")}],a=n.a.createElement(n.a.Fragment,null,n.a.createElement(h.SelectControl,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:xe,onChange:e=>t({topType:e}),options:e}),"none"!==xe&&n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ce,onColorChange:e=>t({topColor:e})}),n.a.createElement(s.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:Se,onChange:e=>t({topWidth:e}),min:100,max:2e3,displayUnit:!1}),n.a.createElement(p.a,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:we,label:"topHeight"},tablet:{value:Ee,label:"topHeightTablet"},mobile:{value:Te,label:"topHeightMobile"}},min:0,max:500,displayUnit:!1,setAttributes:t}),n.a.createElement(h.ToggleControl,{label:Object(o.__)("Flip","ultimate-addons-for-gutenberg"),checked:Pe,onChange:()=>t({topFlip:!Pe})}),n.a.createElement(h.ToggleControl,{label:Object(o.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:Ve,onChange:()=>t({topContentAboveShape:!Ve})}))),l=n.a.createElement(n.a.Fragment,null,n.a.createElement(h.SelectControl,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:fe,onChange:e=>t({bottomType:e}),options:e}),"none"!==fe&&n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:he,onColorChange:e=>t({bottomColor:e})}),n.a.createElement(s.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:ye,onChange:e=>t({bottomWidth:e}),min:100,max:2e3,displayUnit:!1}),n.a.createElement(p.a,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:Oe,label:"bottomHeight"},tablet:{value:je,label:"bottomHeightTablet"},mobile:{value:ke,label:"bottomHeightMobile"}},min:0,max:500,displayUnit:!1,setAttributes:t}),n.a.createElement(h.ToggleControl,{label:Object(o.__)("Flip","ultimate-addons-for-gutenberg"),checked:Me,onChange:()=>t({bottomFlip:!Me})}),n.a.createElement(h.ToggleControl,{label:Object(o.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:Be,onChange:()=>t({bottomContentAboveShape:!Be})})));return n.a.createElement(h.PanelBody,{title:Object(o.__)("Shape Dividers","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(_.a,{tabs:[{name:"top",title:Object(o.__)("Top","ultimate-addons-for-gutenberg")},{name:"bottom",title:Object(o.__)("Bottom","ultimate-addons-for-gutenberg")}],top:a,bottom:l,disableBottomSeparator:!0}))})(),n.a.createElement(h.PanelBody,{title:Object(o.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,O({setAttributes:t,backgroundGradient:{value:de,label:"gradientValue"},backgroundImageColor:{value:ie,label:"backgroundImageColor"},overlayType:{value:ge,label:"overlayType"},backgroundSize:{value:re,label:"backgroundSize"},backgroundRepeat:{value:ne,label:"backgroundRepeat"},backgroundAttachment:{value:le,label:"backgroundAttachment"},backgroundPosition:{value:oe,label:"backgroundPosition"},backgroundImage:{value:ee,label:"backgroundImage"},backgroundColor:{value:te,label:"backgroundColor"},backgroundType:{value:$,label:"backgroundType"},backgroundVideoType:{value:!0},backgroundVideo:{value:ae,label:"backgroundVideo"},backgroundVideoColor:{value:be,label:"backgroundVideoColor"},backgroundVideoOpacity:{value:ue,label:"backgroundVideoOpacity"}},e))),n.a.createElement(h.PanelBody,{title:Object(o.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(g.a,{setAttributes:t,borderStyle:{value:ce,label:"borderStyle",title:Object(o.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:se,label:"borderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:me,label:"borderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:ve,label:"borderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:pe,label:"borderHoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")}}),n.a.createElement(b.a,{setAttributes:t,label:Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:De,label:"boxShadowColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:Ge,label:"boxShadowHOffset",title:Object(o.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:Je,label:"boxShadowVOffset",title:Object(o.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:Ze,label:"boxShadowBlur",title:Object(o.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:Xe,label:"boxShadowSpread",title:Object(o.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:qe,label:"boxShadowPosition",title:Object(o.__)("Position","ultimate-addons-for-gutenberg")}})),n.a.createElement(h.PanelBody,{title:Object(o.__)("Spacing"),initialOpen:!1},n.a.createElement(i.a,O({},e,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:F,label:"topPadding"},valueRight:{value:D,label:"rightPadding"},valueBottom:{value:z,label:"bottomPadding"},valueLeft:{value:U,label:"leftPadding"},valueTopTablet:{value:G,label:"topPaddingTablet"},valueRightTablet:{value:X,label:"rightPaddingTablet"},valueBottomTablet:{value:J,label:"bottomPaddingTablet"},valueLeftTablet:{value:Z,label:"leftPaddingTablet"},valueTopMobile:{value:q,label:"topPaddingMobile"},valueRightMobile:{value:Y,label:"rightPaddingMobile"},valueBottomMobile:{value:K,label:"bottomPaddingMobile"},valueLeftMobile:{value:Q,label:"leftPaddingMobile"},unit:{value:Fe,label:"desktopPaddingType"},mUnit:{value:Le,label:"mobilePaddingType"},tUnit:{value:We,label:"tabletPaddingType"},attributes:a,setAttributes:t,link:{value:ze,label:"paddingLink"}})),n.a.createElement(i.a,O({},e,{label:Object(o.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:S,label:"topMarginDesktop"},valueRight:{value:M,label:"rightMarginDesktop"},valueBottom:{value:N,label:"bottomMarginDesktop"},valueLeft:{value:P,label:"leftMarginDesktop"},valueTopTablet:{value:R,label:"topMarginTablet"},valueRightTablet:{value:H,label:"rightMarginTablet"},valueBottomTablet:{value:W,label:"bottomMarginTablet"},valueLeftTablet:{value:L,label:"leftMarginTablet"},valueTopMobile:{value:A,label:"topMarginMobile"},valueRightMobile:{value:V,label:"rightMarginMobile"},valueBottomMobile:{value:I,label:"bottomMarginMobile"},valueLeftMobile:{value:B,label:"leftMarginMobile"},unit:{value:He,label:"desktopMarginType"},mUnit:{value:Ie,label:"mobileMarginType"},tUnit:{value:Re,label:"tabletMarginType"},attributes:a,setAttributes:t,link:{value:Ue,label:"marginLink"}})))),n.a.createElement(v.b,O({},v.a.advance,{parentProps:e})))))};a.default=n.a.memo(j)}}]);