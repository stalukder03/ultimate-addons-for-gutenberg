(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[92],{273:function(e,a,t){"use strict";var o,l=t(2),n=t(7),r=t(5),u=t(1),b=t.n(u),i=t(15),d=t.n(i),g=t(274),c=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return c++||(o=d()(g.a,s)),m},m.unuse=function(){c>0&&!--c&&(o(),o=null)};var v=m;a.a=e=>{Object(u.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:o,showVideoInput:i,label:d}=e;let g=Object(l.__)("Image","ultimate-addons-for-gutenberg"),c=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),s=Object(l.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(l.__)("Remove Image","ultimate-addons-for-gutenberg"),p=["image"];return i&&(g=Object(l.__)("Video","ultimate-addons-for-gutenberg"),c=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),s=Object(l.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(l.__)("Remove Video","ultimate-addons-for-gutenberg"),p=["video"]),g=d||g,b.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+d,label:g},b.a.createElement("div",{className:"uagb-bg-image"},b.a.createElement(r.MediaUpload,{title:c,onSelect:a,allowedTypes:p,value:t,render:({open:e})=>b.a.createElement(n.Button,{isSecondary:!0,onClick:e},null!=t&&t.url?s:c)}),(null==t?void 0:t.url)&&b.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:o,isLink:!0,isDestructive:!0},m),e.help&&b.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},274:function(e,a,t){"use strict";var o=t(16),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),a.a=l},278:function(e,a,t){"use strict";var o=t(16),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 3px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),a.a=l},279:function(e,a,t){"use strict";var o=t(16),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient {\n  margin-top: 24px; }\n",""]),a.a=l},281:function(e,a,t){"use strict";var o,l=t(2),n=t(18),r=t(7),u=t(15),b=t.n(u),i=t(279),d=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=i.a.locals||{},c.use=function(){return d++||(o=b()(i.a,g)),c},c.unuse=function(){d>0&&!--d&&(o(),o=null)};var s=c,m=function(e){const{setAttributes:a,backgroundGradient:t}=e;return React.createElement(r.__experimentalGradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})}})},v=t(1),p=t.n(v),h=t(273);a.a=e=>{Object(v.useLayoutEffect)(()=>(s.use(),()=>{s.unuse()}),[]);const{setAttributes:a,backgroundImageColor:t,overlayType:o,backgroundSize:u,backgroundRepeat:b,backgroundAttachment:i,backgroundPosition:d,backgroundImage:g,backgroundColor:c,backgroundVideoType:f,backgroundType:_,backgroundVideo:x,backgroundVideoColor:O,onOpacityChange:k}=e;let w=[];w=[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(l.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(l.__)("Image","ultimate-addons-for-gutenberg")}],f.value&&w.push({value:"video",label:Object(l.__)("Video","ultimate-addons-for-gutenberg")});const y=p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-type"},p.a.createElement(r.SelectControl,{value:_.value,onChange:e=>a({[_.label]:e}),options:w,label:Object(l.__)("Type","ultimate-addons-for-gutenberg")})),"color"===_.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(n.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:c.value?c.value:"",onColorChange:e=>a({[c.label]:e})})),"image"===_.value&&p.a.createElement("div",{className:"uag-background-image"},p.a.createElement(h.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&a({[g.label]:e}):a({[g.label]:null})},backgroundImage:g.value,onRemoveImage:()=>{a({[g.label]:null})}}),g.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Image Position","ultimate-addons-for-gutenberg"),value:d.value,onChange:e=>a({[d.label]:e}),options:[{value:"top-left",label:Object(l.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(l.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(l.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(l.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(l.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(l.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(l.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(l.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(l.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Attachment","ultimate-addons-for-gutenberg"),value:i.value,onChange:e=>a({[i.label]:e}),options:[{value:"fixed",label:Object(l.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(l.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg"),value:b.value,onChange:e=>a({[b.label]:e}),options:[{value:"no-repeat",label:Object(l.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(l.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(l.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),value:u.value,onChange:e=>a({[u.label]:e}),options:[{value:"auto",label:Object(l.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(l.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(l.__)("Contain","ultimate-addons-for-gutenberg")}]})),o&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Overlay Type","ultimate-addons-for-gutenberg"),value:o.value,onChange:e=>a({[o.label]:e}),options:[{value:"color",label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(l.__)("Gradient","ultimate-addons-for-gutenberg")}]})),"color"===o.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(l.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:t.value,onColorChange:e=>a({[t.label]:e})})),"gradient"===o.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:a}))))),"gradient"===_.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===_.value&&f.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(h.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&a({[x.label]:e}):a({[x.label]:null})},backgroundImage:x.value,onRemoveImage:()=>{a({[x.label]:null})},showVideoInput:!0})),"video"===_.value&&x.value&&f.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},p.a.createElement(n.a,{label:Object(l.__)("Video Overlay Color","ultimate-addons-for-gutenberg"),colorValue:O.value,onColorChange:e=>a({[O.label]:e}),onOpacityChange:k})));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},y)}},282:function(e,a,t){"use strict";var o,l=t(2),n=t(14),r=t(18),u=t(7),b=t(3),i=t(23),d=t(15),g=t.n(d),c=t(278),s=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=c.a.locals||{},v.use=function(){return s++||(o=g()(c.a,m)),v},v.unuse=function(){s>0&&!--s&&(o(),o=null)};var p=v,h=t(1),f=t.n(h);a.a=e=>{Object(h.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const[a,t]=Object(b.useState)(!1),{setAttributes:o,boxShadowColor:d,boxShadowHOffset:g,boxShadowVOffset:c,boxShadowBlur:s,boxShadowSpread:m,boxShadowPosition:v}=e;let _;const x=a?"active":"";a&&(_=f.a.createElement("div",{className:"uagb-box-shadow-advanced"},f.a.createElement("div",{className:"uagb-shadow-color"},f.a.createElement(r.a,{label:d.title,colorValue:d.value,onColorChange:e=>o({[d.label]:e})})),f.a.createElement("div",{className:"uagb-horizontal-wrap"},f.a.createElement(n.a,{label:g.title,value:g.value,onChange:e=>o({[g.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-vertical-wrap"},f.a.createElement(n.a,{label:c.title,value:c.value,onChange:e=>o({[c.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-blur-wrap"},f.a.createElement(n.a,{label:s.title,value:s.value,onChange:e=>o({[s.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-spread-wrap"},f.a.createElement(n.a,{label:m.title,value:m.value,onChange:e=>o({[m.label]:e}),min:-100,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-shadow-type"},f.a.createElement(i.a,{setAttributes:o,label:v.title,data:{value:v.value,label:v.label},options:[{value:"outset",label:Object(l.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(l.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const O=f.a.createElement("div",{className:"uag-box-shadow-option-actions"},f.a.createElement("span",{className:"uag-control-label"},Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg")),f.a.createElement(u.Button,{className:"uag-box-shadow-button","aria-pressed":a,onClick:()=>t(!a)},f.a.createElement(u.Dashicon,{icon:"edit"})));return f.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+x},O,a&&_)}},438:function(e,a,t){"use strict";t.r(a);var o=t(1),l=t.n(o),n=t(2),r=t(11),u=t(282),b=t(60),i=t(22),d=t(43),g=t(14),c=t(281),s=t(55),m=t(23),v=t(5),p=t(7),h=t(17);function f(){return(f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}const _=e=>{e=e.parentProps;const{attributes:a,setAttributes:t,deviceType:_}=e,{align:x,contentWidth:O,width:k,innerWidth:w,innerWidthType:y,tag:j,themeWidth:E,leftPadding:C,rightPadding:T,topPadding:S,bottomPadding:M,leftMargin:P,rightMargin:V,topMargin:I,bottomMargin:N,topPaddingTablet:R,bottomPaddingTablet:B,leftPaddingTablet:A,rightPaddingTablet:L,topMarginTablet:W,bottomMarginTablet:z,leftMarginTablet:H,rightMarginTablet:U,topPaddingMobile:G,bottomPaddingMobile:F,leftPaddingMobile:D,rightPaddingMobile:J,topMarginMobile:q,bottomMarginMobile:K,leftMarginMobile:Q,rightMarginMobile:X,backgroundType:Y,backgroundImage:Z,backgroundVideo:$,backgroundColor:ee,backgroundPosition:ae,backgroundAttachment:te,backgroundRepeat:oe,backgroundSize:le,backgroundVideoColor:ne,backgroundVideoOpacity:re,backgroundImageColor:ue,overlayType:be,borderStyle:ie,borderWidth:de,borderRadius:ge,borderColor:ce,borderHoverColor:se,mobileMarginType:me,tabletMarginType:ve,desktopMarginType:pe,mobilePaddingType:he,tabletPaddingType:fe,desktopPaddingType:_e,boxShadowColor:xe,boxShadowHOffset:Oe,boxShadowVOffset:ke,boxShadowBlur:we,boxShadowSpread:ye,boxShadowPosition:je,spacingLink:Ee,marginspacingLink:Ce,gradientValue:Te}=a;let Se=["left","center","right"];return"full_width"===O&&(Se=["wide","full"]),l.a.createElement(o.Suspense,{fallback:Object(r.a)()},l.a.createElement(v.BlockControls,null,l.a.createElement(v.BlockAlignmentToolbar,{value:x,onChange:e=>{t({align:e})},controls:Se})),l.a.createElement(v.InspectorControls,null,l.a.createElement(b.a,null,l.a.createElement(i.b,i.a.general,l.a.createElement(h.a,{initialOpen:!0},l.a.createElement(m.a,{setAttributes:t,label:Object(n.__)("Content Width","ultimate-addons-for-gutenberg"),data:{value:O,label:"contentWidth"},className:"uagb-multi-button-alignment-control",options:[{value:"boxed",label:"Boxed"},{value:"full_width",label:"Full Width"}],showIcons:!1}),"boxed"===O&&l.a.createElement(g.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:k,onChange:e=>t({width:e}),min:0,max:2e3,displayUnit:!1}),"boxed"!==O&&l.a.createElement(p.ToggleControl,{label:Object(n.__)("Inherit Inner Width from Theme","ultimate-addons-for-gutenberg"),checked:E,onChange:()=>t({themeWidth:!E})}),"boxed"!==O&&!E&&l.a.createElement(g.a,{label:Object(n.__)("Inner Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:w,onChange:e=>t({innerWidth:e}),min:0,max:2e3,unit:{value:y,label:"innerWidthType"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),l.a.createElement(p.SelectControl,{label:Object(n.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:j,onChange:e=>t({tag:e}),options:[{value:"div",label:Object(n.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(n.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(n.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(n.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(n.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(n.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(n.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(n.__)("nav","ultimate-addons-for-gutenberg")}]}))),l.a.createElement(i.b,i.a.style,l.a.createElement(h.a,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(c.a,f({setAttributes:t,backgroundGradient:{value:Te,label:"gradientValue"},backgroundImageColor:{value:ue,label:"backgroundImageColor"},overlayType:{value:be,label:"overlayType"},backgroundSize:{value:le,label:"backgroundSize"},backgroundRepeat:{value:oe,label:"backgroundRepeat"},backgroundAttachment:{value:te,label:"backgroundAttachment"},backgroundPosition:{value:ae,label:"backgroundPosition"},backgroundImage:{value:Z,label:"backgroundImage"},backgroundColor:{value:ee,label:"backgroundColor"},backgroundType:{value:Y,label:"backgroundType"},backgroundVideoType:{value:!0},backgroundVideo:{value:$,label:"backgroundVideo"},backgroundVideoColor:{value:ne,label:"backgroundVideoColor"},backgroundVideoOpacity:{value:re,label:"backgroundVideoOpacity"},onOpacityChange:e=>t({backgroundVideoOpacity:e})},e))),l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{title:Object(n.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{setAttributes:t,borderStyle:{value:ie,label:"borderStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:de,label:"borderWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ge,label:"borderRadius",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:ce,label:"borderColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:se,label:"borderHoverColor",title:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),l.a.createElement(h.a,{title:"Box Shadow",initialOpen:!1},l.a.createElement(u.a,{setAttributes:t,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:xe,label:"boxShadowColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:Oe,label:"boxShadowHOffset",title:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:ke,label:"boxShadowVOffset",title:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:we,label:"boxShadowBlur",title:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:ye,label:"boxShadowSpread",title:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:je,label:"boxShadowPosition",title:Object(n.__)("Position","ultimate-addons-for-gutenberg")}}))),l.a.createElement(h.a,{title:"Spacing",initialOpen:!1},l.a.createElement(d.a,f({},e,{label:Object(n.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:I,label:"topMargin"},valueRight:{value:V,label:"rightMargin"},valueBottom:{value:N,label:"bottomMargin"},valueLeft:{value:P,label:"leftMargin"},valueTopTablet:{value:W,label:"topMarginTablet"},valueRightTablet:{value:U,label:"rightMarginTablet"},valueBottomTablet:{value:z,label:"bottomMarginTablet"},valueLeftTablet:{value:H,label:"leftMarginTablet"},valueTopMobile:{value:q,label:"topMarginMobile"},valueRightMobile:{value:X,label:"rightMarginMobile"},valueBottomMobile:{value:K,label:"bottomMarginMobile"},valueLeftMobile:{value:Q,label:"leftMarginMobile"},unit:{value:pe,label:"desktopMarginType"},mUnit:{value:me,label:"mobileMarginType"},tUnit:{value:ve,label:"tabletMarginType"},deviceType:_,attributes:a,setAttributes:t,link:{value:Ce,label:"marginspacingLink"}})),l.a.createElement(d.a,f({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:S,label:"topPadding"},valueRight:{value:T,label:"rightPadding"},valueBottom:{value:M,label:"bottomPadding"},valueLeft:{value:C,label:"leftPadding"},valueTopTablet:{value:R,label:"topPaddingTablet"},valueRightTablet:{value:L,label:"rightPaddingTablet"},valueBottomTablet:{value:B,label:"bottomPaddingTablet"},valueLeftTablet:{value:A,label:"leftPaddingTablet"},valueTopMobile:{value:G,label:"topPaddingMobile"},valueRightMobile:{value:J,label:"rightPaddingMobile"},valueBottomMobile:{value:F,label:"bottomPaddingMobile"},valueLeftMobile:{value:D,label:"leftPaddingMobile"},unit:{value:_e,label:"desktopPaddingType"},mUnit:{value:he,label:"mobilePaddingType"},tUnit:{value:fe,label:"tabletPaddingType"},deviceType:_,attributes:a,setAttributes:t,link:{value:Ee,label:"spacingLink"}})))),l.a.createElement(i.b,f({},i.a.advance,{parentProps:e})))))};a.default=l.a.memo(_)}}]);