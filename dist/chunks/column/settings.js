(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[16],{153:function(e,a,t){"use strict";var l,o=t(1),n=t(6),r=t(4),u=t(0),b=t.n(u),g=t(14),i=t.n(g),d=t(154),c=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return c++||(l=i()(d.a,s)),m},m.unuse=function(){c>0&&!--c&&(l(),l=null)};var v=m;a.a=e=>{Object(u.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:l,showVideoInput:g,label:i}=e;let d=Object(o.__)("Image","ultimate-addons-for-gutenberg"),c=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),s=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),p=["image"];return g&&(d=Object(o.__)("Video","ultimate-addons-for-gutenberg"),c=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),s=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),p=["video"]),d=i||d,b.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+i,label:d},b.a.createElement("div",{className:"uagb-bg-image"},b.a.createElement(r.MediaUpload,{title:c,onSelect:a,allowedTypes:p,value:t,render:({open:e})=>b.a.createElement(n.Button,{isSecondary:!0,onClick:e},null!=t&&t.url?s:c)}),(null==t?void 0:t.url)&&b.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:l,isLink:!0,isDestructive:!0},m),e.help&&b.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},154:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),a.a=o},160:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient {\n  margin-top: 24px; }\n",""]),a.a=o},162:function(e,a,t){"use strict";var l,o=t(1),n=t(17),r=t(6),u=t(14),b=t.n(u),g=t(160),i=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=g.a.locals||{},c.use=function(){return i++||(l=b()(g.a,d)),c},c.unuse=function(){i>0&&!--i&&(l(),l=null)};var s=c,m=function(e){const{setAttributes:a,backgroundGradient:t}=e;return React.createElement(r.__experimentalGradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})}})},v=t(0),p=t.n(v),_=t(153);a.a=e=>{Object(v.useLayoutEffect)(()=>(s.use(),()=>{s.unuse()}),[]);const{setAttributes:a,backgroundImageColor:t,overlayType:l,backgroundSize:u,backgroundRepeat:b,backgroundAttachment:g,backgroundPosition:i,backgroundImage:d,backgroundColor:c,backgroundVideoType:f,backgroundType:k,backgroundVideo:y,backgroundVideoColor:h,onOpacityChange:O}=e;let T=[];T=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")}],f.value&&T.push({value:"video",label:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const j=p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-type"},p.a.createElement(r.SelectControl,{value:k.value,onChange:e=>a({[k.label]:e}),options:T,label:Object(o.__)("Type","ultimate-addons-for-gutenberg")})),"color"===k.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:c.value?c.value:"",onColorChange:e=>a({[c.label]:e})})),"image"===k.value&&p.a.createElement("div",{className:"uag-background-image"},p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&a({[d.label]:e}):a({[d.label]:null})},backgroundImage:d.value,onRemoveImage:()=>{a({[d.label]:null})}}),d.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:i.value,onChange:e=>a({[i.label]:e}),options:[{value:"top-left",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(o.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(o.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>a({[g.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:b.value,onChange:e=>a({[b.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:u.value,onChange:e=>a({[u.label]:e}),options:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]})),l&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),value:l.value,onChange:e=>a({[l.label]:e}),options:[{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")}]})),"color"===l.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:t.value,onColorChange:e=>a({[t.label]:e})})),"gradient"===l.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:a}))))),"gradient"===k.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===k.value&&f.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&a({[y.label]:e}):a({[y.label]:null})},backgroundImage:y.value,onRemoveImage:()=>{a({[y.label]:null})},showVideoInput:!0})),"video"===k.value&&y.value&&f.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},p.a.createElement(n.a,{label:Object(o.__)("Video Overlay Color","ultimate-addons-for-gutenberg"),colorValue:h.value,onColorChange:e=>a({[h.label]:e}),onOpacityChange:O})));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},j)}},418:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(8),r=t(162),u=t(52),b=t(40),g=t(1),i=t(54),d=t(22),c=t(55),s=t(4),m=t(16);function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const p=e=>{e=e.parentProps;const{attributes:{topPadding:a,bottomPadding:t,leftPadding:p,rightPadding:_,topPaddingTablet:f,bottomPaddingTablet:k,leftPaddingTablet:y,rightPaddingTablet:h,topPaddingMobile:O,bottomPaddingMobile:T,leftPaddingMobile:j,rightPaddingMobile:M,topMargin:C,bottomMargin:E,leftMargin:P,rightMargin:R,topMarginTablet:S,bottomMarginTablet:I,leftMarginTablet:N,rightMarginTablet:A,topMarginMobile:L,bottomMarginMobile:V,leftMarginMobile:x,rightMarginMobile:B,backgroundType:w,backgroundImage:W,backgroundColor:z,backgroundPosition:G,backgroundAttachment:U,backgroundRepeat:F,backgroundSize:H,backgroundImageColor:J,gradientValue:D,borderStyle:q,borderWidth:K,borderRadius:Q,borderColor:X,borderHoverColor:Y,overlayType:Z,mobilePaddingType:$,tabletPaddingType:ee,desktopPaddingType:ae,colWidthMobile:te,colWidthTablet:le,colWidth:oe,paddingLink:ne,marginLink:re,mobileMarginType:ue,tabletMarginType:be,desktopMarginType:ge},setAttributes:ie}=e;return o.a.createElement(l.Suspense,{fallback:Object(n.a)()},o.a.createElement(s.InspectorControls,null,o.a.createElement(i.a,null,o.a.createElement(d.b,d.a.general,o.a.createElement(m.a,{title:Object(g.__)("Layout","ultimate-addons-for-gutenberg")},o.a.createElement(c.a,{label:Object(g.__)("Content Width (%)","ultimate-addons-for-gutenberg"),data:{desktop:{value:oe,label:"colWidth"},tablet:{value:le,label:"colWidthTablet"},mobile:{value:te,label:"colWidthMobile"}},min:0,max:100,displayUnit:!1,setAttributes:ie}))),o.a.createElement(d.b,d.a.style,o.a.createElement(m.a,{title:Object(g.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(r.a,v({setAttributes:ie,backgroundGradient:{value:D,label:"gradientValue"},backgroundImageColor:{value:J,label:"backgroundImageColor"},overlayType:{value:Z,label:"overlayType"},backgroundSize:{value:H,label:"backgroundSize"},backgroundRepeat:{value:F,label:"backgroundRepeat"},backgroundAttachment:{value:U,label:"backgroundAttachment"},backgroundPosition:{value:G,label:"backgroundPosition"},backgroundImage:{value:W,label:"backgroundImage"},backgroundColor:{value:z,label:"backgroundColor"},backgroundType:{value:w,label:"backgroundType"},backgroundVideoType:{value:!1}},e))),o.a.createElement(m.a,{title:Object(g.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.a,{setAttributes:ie,borderStyle:{value:q,label:"borderStyle",title:Object(g.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:K,label:"borderWidth",title:Object(g.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Q,label:"borderRadius",title:Object(g.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:X,label:"borderColor",title:Object(g.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Y,label:"borderHoverColor",title:Object(g.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),o.a.createElement(m.a,{title:Object(g.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.a,v({},e,{label:Object(g.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:a,label:"topPadding"},valueRight:{value:_,label:"rightPadding"},valueBottom:{value:t,label:"bottomPadding"},valueLeft:{value:p,label:"leftPadding"},valueTopTablet:{value:f,label:"topPaddingTablet"},valueRightTablet:{value:h,label:"rightPaddingTablet"},valueBottomTablet:{value:k,label:"bottomPaddingTablet"},valueLeftTablet:{value:y,label:"leftPaddingTablet"},valueTopMobile:{value:O,label:"topPaddingMobile"},valueRightMobile:{value:M,label:"rightPaddingMobile"},valueBottomMobile:{value:T,label:"bottomPaddingMobile"},valueLeftMobile:{value:j,label:"leftPaddingMobile"},unit:{value:ae,label:"desktopPaddingType"},mUnit:{value:$,label:"mobilePaddingType"},tUnit:{value:ee,label:"tabletPaddingType"},attributes:e.attributes,setAttributes:ie,link:{value:ne,label:"paddingLink"}})),o.a.createElement(b.a,v({},e,{label:Object(g.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:C,label:"topMargin"},valueRight:{value:R,label:"rightMargin"},valueBottom:{value:E,label:"bottomMargin"},valueLeft:{value:P,label:"leftMargin"},valueTopTablet:{value:S,label:"topMarginTablet"},valueRightTablet:{value:A,label:"rightMarginTablet"},valueBottomTablet:{value:I,label:"bottomMarginTablet"},valueLeftTablet:{value:N,label:"leftMarginTablet"},valueTopMobile:{value:L,label:"topMarginMobile"},valueRightMobile:{value:B,label:"rightMarginMobile"},valueBottomMobile:{value:V,label:"bottomMarginMobile"},valueLeftMobile:{value:x,label:"leftMarginMobile"},unit:{value:ge,label:"desktopMarginType"},mUnit:{value:ue,label:"mobileMarginType"},tUnit:{value:be,label:"tabletMarginType"},attributes:e.attributes,setAttributes:ie,link:{value:re,label:"marginLink"}})))),o.a.createElement(d.b,v({},d.a.advance,{parentProps:e})))))};a.default=o.a.memo(p)}}]);