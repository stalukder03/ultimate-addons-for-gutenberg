(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[92],{191:function(e,a,t){"use strict";var o,l=t(1),n=t(6),r=t(4),u=t(0),b=t.n(u),i=t(15),d=t.n(i),g=t(192),c=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return c++||(o=d()(g.a,s)),m},m.unuse=function(){c>0&&!--c&&(o(),o=null)};var v=m;a.a=e=>{Object(u.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:o,showVideoInput:i,label:d}=e;let g=Object(l.__)("Image","ultimate-addons-for-gutenberg"),c=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),s=Object(l.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(l.__)("Remove Image","ultimate-addons-for-gutenberg"),p=["image"];return i&&(g=Object(l.__)("Video","ultimate-addons-for-gutenberg"),c=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),s=Object(l.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(l.__)("Remove Video","ultimate-addons-for-gutenberg"),p=["video"]),g=d||g,b.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+d,label:g},b.a.createElement("div",{className:"uagb-bg-image"},b.a.createElement(r.MediaUpload,{title:c,onSelect:a,allowedTypes:p,value:t,render:e=>{let{open:a}=e;return b.a.createElement(n.Button,{isSecondary:!0,onClick:a},null!=t&&t.url?s:c)}}),(null==t?void 0:t.url)&&b.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:o,isLink:!0,isDestructive:!0},m),e.help&&b.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},192:function(e,a,t){"use strict";var o=t(16),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),a.a=l},197:function(e,a,t){"use strict";var o=t(16),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 14px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),a.a=l},198:function(e,a,t){"use strict";var o=t(16),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient {\n  margin-top: 24px; }\n",""]),a.a=l},200:function(e,a,t){"use strict";var o,l=t(1),n=t(17),r=t(6),u=t(15),b=t.n(u),i=t(198),d=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=i.a.locals||{},c.use=function(){return d++||(o=b()(i.a,g)),c},c.unuse=function(){d>0&&!--d&&(o(),o=null)};var s=c,m=e=>{const{setAttributes:a,backgroundGradient:t}=e;return React.createElement(r.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})}})},v=t(0),p=t.n(v),h=t(191);a.a=e=>{Object(v.useLayoutEffect)(()=>(s.use(),()=>{s.unuse()}),[]);const{setAttributes:a,backgroundImageColor:t,overlayType:o,backgroundSize:u,backgroundRepeat:b,backgroundAttachment:i,backgroundPosition:d,backgroundImage:g,backgroundColor:c,backgroundVideoType:f,backgroundType:_,backgroundVideo:O,backgroundVideoColor:x,onOpacityChange:k}=e;let w=[];w=[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(l.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(l.__)("Image","ultimate-addons-for-gutenberg")}],f.value&&w.push({value:"video",label:Object(l.__)("Video","ultimate-addons-for-gutenberg")});const y=p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-type"},p.a.createElement(r.SelectControl,{value:_.value,onChange:e=>a({[_.label]:e}),options:w,label:Object(l.__)("Type","ultimate-addons-for-gutenberg")})),"color"===_.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(n.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:c.value?c.value:"",onColorChange:e=>a({[c.label]:e})})),"image"===_.value&&p.a.createElement("div",{className:"uag-background-image"},p.a.createElement(h.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&a({[g.label]:e}):a({[g.label]:null})},backgroundImage:g.value,onRemoveImage:()=>{a({[g.label]:null})}}),g.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Image Position","ultimate-addons-for-gutenberg"),value:d.value,onChange:e=>a({[d.label]:e}),options:[{value:"left top",label:Object(l.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(l.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(l.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(l.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(l.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(l.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(l.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(l.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(l.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Attachment","ultimate-addons-for-gutenberg"),value:i.value,onChange:e=>a({[i.label]:e}),options:[{value:"fixed",label:Object(l.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(l.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg"),value:b.value,onChange:e=>a({[b.label]:e}),options:[{value:"no-repeat",label:Object(l.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(l.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(l.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),value:u.value,onChange:e=>a({[u.label]:e}),options:[{value:"auto",label:Object(l.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(l.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(l.__)("Contain","ultimate-addons-for-gutenberg")}]})),o&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Overlay Type","ultimate-addons-for-gutenberg"),value:o.value,onChange:e=>a({[o.label]:e}),options:[{value:"color",label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(l.__)("Gradient","ultimate-addons-for-gutenberg")}]})),"color"===o.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(l.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:t.value,onColorChange:e=>a({[t.label]:e})})),"gradient"===o.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:a}))))),"gradient"===_.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===_.value&&f.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(h.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&a({[O.label]:e}):a({[O.label]:null})},backgroundImage:O.value,onRemoveImage:()=>{a({[O.label]:null})},showVideoInput:!0})),"video"===_.value&&O.value&&f.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},p.a.createElement(n.a,{label:Object(l.__)("Video Overlay Color","ultimate-addons-for-gutenberg"),colorValue:x.value,onColorChange:e=>a({[x.label]:e}),onOpacityChange:k})));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},y)}},201:function(e,a,t){"use strict";var o,l=t(1),n=t(11),r=t(17),u=t(6),b=t(2),i=t(22),d=t(15),g=t.n(d),c=t(197),s=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=c.a.locals||{},v.use=function(){return s++||(o=g()(c.a,m)),v},v.unuse=function(){s>0&&!--s&&(o(),o=null)};var p=v,h=t(0),f=t.n(h);a.a=e=>{Object(h.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const[a,t]=Object(b.useState)(!1),{setAttributes:o,boxShadowColor:d,boxShadowHOffset:g,boxShadowVOffset:c,boxShadowBlur:s,boxShadowSpread:m,boxShadowPosition:v}=e;let _;const O=a?"active":"";a&&(_=f.a.createElement("div",{className:"uagb-box-shadow-advanced"},f.a.createElement("div",{className:"uagb-shadow-color"},f.a.createElement(r.a,{label:d.title,colorValue:d.value,onColorChange:e=>o({[d.label]:e})})),f.a.createElement("div",{className:"uagb-horizontal-wrap"},f.a.createElement(n.a,{label:g.title,value:g.value,onChange:e=>o({[g.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-vertical-wrap"},f.a.createElement(n.a,{label:c.title,value:c.value,onChange:e=>o({[c.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-blur-wrap"},f.a.createElement(n.a,{label:s.title,value:s.value,onChange:e=>o({[s.label]:e}),min:0,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-spread-wrap"},f.a.createElement(n.a,{label:m.title,value:m.value,onChange:e=>o({[m.label]:e}),min:-100,max:100,displayUnit:!1})),f.a.createElement("div",{className:"uagb-shadow-type"},f.a.createElement(i.a,{setAttributes:o,label:v.title,data:{value:v.value,label:v.label},options:[{value:"outset",label:Object(l.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(l.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const x=f.a.createElement("div",{className:"uag-box-shadow-option-actions"},f.a.createElement("span",{className:"uag-control-label"},Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg")),f.a.createElement(u.Button,{className:"uag-box-shadow-button","aria-pressed":a,onClick:()=>t(!a)},f.a.createElement(u.Dashicon,{icon:"edit"})));return f.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+O},x,a&&_)}},484:function(e,a,t){"use strict";t.r(a);var o=t(0),l=t.n(o),n=t(1),r=t(8),u=t(201),b=t(79),i=t(23),d=t(50),g=t(11),c=t(200),s=t(77),m=t(22),v=t(12),p=t(4),h=t(6),f=t(14);function _(){return(_=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}const O=e=>{e=e.parentProps;const{attributes:a,setAttributes:t,deviceType:O}=e,{align:x,contentWidth:k,width:w,innerWidth:y,innerWidthType:j,tag:E,themeWidth:C,leftPadding:T,rightPadding:S,topPadding:M,bottomPadding:P,leftMargin:I,rightMargin:V,topMargin:N,bottomMargin:R,topPaddingTablet:B,bottomPaddingTablet:A,leftPaddingTablet:L,rightPaddingTablet:W,topMarginTablet:z,bottomMarginTablet:H,leftMarginTablet:U,rightMarginTablet:G,topPaddingMobile:F,bottomPaddingMobile:D,leftPaddingMobile:J,rightPaddingMobile:q,topMarginMobile:K,bottomMarginMobile:Q,leftMarginMobile:X,rightMarginMobile:Y,backgroundType:Z,backgroundImage:$,backgroundVideo:ee,backgroundColor:ae,backgroundPosition:te,backgroundAttachment:oe,backgroundRepeat:le,backgroundSize:ne,backgroundVideoColor:re,backgroundVideoOpacity:ue,backgroundImageColor:be,overlayType:ie,borderStyle:de,borderWidth:ge,borderRadius:ce,borderColor:se,borderHoverColor:me,mobileMarginType:ve,tabletMarginType:pe,desktopMarginType:he,mobilePaddingType:fe,tabletPaddingType:_e,desktopPaddingType:Oe,boxShadowColor:xe,boxShadowHOffset:ke,boxShadowVOffset:we,boxShadowBlur:ye,boxShadowSpread:je,boxShadowPosition:Ee,spacingLink:Ce,marginspacingLink:Te,gradientValue:Se}=a;let Me=["left","center","right"];return"full_width"===k&&(Me=["wide","full"]),l.a.createElement(o.Suspense,{fallback:Object(r.a)()},l.a.createElement(p.BlockControls,null,l.a.createElement(p.AlignmentToolbar,{value:x,onChange:e=>{t({align:e})},controls:Me})),l.a.createElement(p.InspectorControls,null,l.a.createElement(b.a,null,l.a.createElement(i.b,i.a.general,l.a.createElement(f.a,{initialOpen:!0},l.a.createElement(m.a,{setAttributes:t,label:Object(n.__)("Content Width","ultimate-addons-for-gutenberg"),data:{value:k,label:"contentWidth"},className:"uagb-multi-button-alignment-control",options:[{value:"boxed",label:"Boxed"},{value:"full_width",label:"Full Width"}],showIcons:!1}),"boxed"===k&&l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{setAttributes:t,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:x,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:l.a.createElement(h.Icon,{icon:Object(v.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:l.a.createElement(h.Icon,{icon:Object(v.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:l.a.createElement(h.Icon,{icon:Object(v.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),l.a.createElement(g.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:w,onChange:e=>t({width:e}),min:0,max:2e3,displayUnit:!1})),"boxed"!==k&&l.a.createElement(h.ToggleControl,{label:Object(n.__)("Inherit Inner Width from Theme","ultimate-addons-for-gutenberg"),checked:C,onChange:()=>t({themeWidth:!C})}),"boxed"!==k&&!C&&l.a.createElement(g.a,{label:Object(n.__)("Inner Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:y,onChange:e=>t({innerWidth:e}),min:0,max:2e3,unit:{value:j,label:"innerWidthType"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),l.a.createElement(h.SelectControl,{label:Object(n.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:E,onChange:e=>t({tag:e}),options:[{value:"div",label:Object(n.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(n.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(n.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(n.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(n.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(n.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(n.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(n.__)("nav","ultimate-addons-for-gutenberg")}]}))),l.a.createElement(i.b,i.a.style,l.a.createElement(f.a,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(c.a,_({setAttributes:t,backgroundGradient:{value:Se,label:"gradientValue"},backgroundImageColor:{value:be,label:"backgroundImageColor"},overlayType:{value:ie,label:"overlayType"},backgroundSize:{value:ne,label:"backgroundSize"},backgroundRepeat:{value:le,label:"backgroundRepeat"},backgroundAttachment:{value:oe,label:"backgroundAttachment"},backgroundPosition:{value:te,label:"backgroundPosition"},backgroundImage:{value:$,label:"backgroundImage"},backgroundColor:{value:ae,label:"backgroundColor"},backgroundType:{value:Z,label:"backgroundType"},backgroundVideoType:{value:!0},backgroundVideo:{value:ee,label:"backgroundVideo"},backgroundVideoColor:{value:re,label:"backgroundVideoColor"},backgroundVideoOpacity:{value:ue,label:"backgroundVideoOpacity"},onOpacityChange:e=>t({backgroundVideoOpacity:e})},e))),l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{title:Object(n.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{setAttributes:t,borderStyle:{value:de,label:"borderStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:ge,label:"borderWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ce,label:"borderRadius",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:se,label:"borderColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:me,label:"borderHoverColor",title:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),l.a.createElement(f.a,{title:"Box Shadow",initialOpen:!1},l.a.createElement(u.a,{setAttributes:t,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:xe,label:"boxShadowColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:ke,label:"boxShadowHOffset",title:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:we,label:"boxShadowVOffset",title:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:ye,label:"boxShadowBlur",title:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:je,label:"boxShadowSpread",title:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Ee,label:"boxShadowPosition",title:Object(n.__)("Position","ultimate-addons-for-gutenberg")}}))),l.a.createElement(f.a,{title:"Spacing",initialOpen:!1},l.a.createElement(d.a,_({},e,{label:Object(n.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:N,label:"topMargin"},valueRight:{value:V,label:"rightMargin"},valueBottom:{value:R,label:"bottomMargin"},valueLeft:{value:I,label:"leftMargin"},valueTopTablet:{value:z,label:"topMarginTablet"},valueRightTablet:{value:G,label:"rightMarginTablet"},valueBottomTablet:{value:H,label:"bottomMarginTablet"},valueLeftTablet:{value:U,label:"leftMarginTablet"},valueTopMobile:{value:K,label:"topMarginMobile"},valueRightMobile:{value:Y,label:"rightMarginMobile"},valueBottomMobile:{value:Q,label:"bottomMarginMobile"},valueLeftMobile:{value:X,label:"leftMarginMobile"},unit:{value:he,label:"desktopMarginType"},mUnit:{value:ve,label:"mobileMarginType"},tUnit:{value:pe,label:"tabletMarginType"},deviceType:O,attributes:a,setAttributes:t,link:{value:Te,label:"marginspacingLink"}})),l.a.createElement(d.a,_({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:M,label:"topPadding"},valueRight:{value:S,label:"rightPadding"},valueBottom:{value:P,label:"bottomPadding"},valueLeft:{value:T,label:"leftPadding"},valueTopTablet:{value:B,label:"topPaddingTablet"},valueRightTablet:{value:W,label:"rightPaddingTablet"},valueBottomTablet:{value:A,label:"bottomPaddingTablet"},valueLeftTablet:{value:L,label:"leftPaddingTablet"},valueTopMobile:{value:F,label:"topPaddingMobile"},valueRightMobile:{value:q,label:"rightPaddingMobile"},valueBottomMobile:{value:D,label:"bottomPaddingMobile"},valueLeftMobile:{value:J,label:"leftPaddingMobile"},unit:{value:Oe,label:"desktopPaddingType"},mUnit:{value:fe,label:"mobilePaddingType"},tUnit:{value:_e,label:"tabletPaddingType"},deviceType:O,attributes:a,setAttributes:t,link:{value:Ce,label:"spacingLink"}})))),l.a.createElement(i.b,_({},i.a.advance,{parentProps:e})))))};a.default=l.a.memo(O)}}]);