(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[88],{200:function(e,n,t){"use strict";var a,o=t(1),i=t(6),l=t(4),g=t(0),u=t.n(g),r=t(13),s=t.n(r),c=t(201),b=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=c.a.locals||{},d.use=function(){return b++||(a=s()(c.a,m)),d},d.unuse=function(){b>0&&!--b&&(a(),a=null)};var p=d;n.a=e=>{Object(g.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const{onSelectImage:n,backgroundImage:t,onRemoveImage:a,showVideoInput:r,label:s,disableRemove:c=!1,allow:b=["image"]}=e;let m=Object(o.__)("Image","ultimate-addons-for-gutenberg"),d=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),f=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),_=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),v=["image"];return r&&(m=Object(o.__)("Video","ultimate-addons-for-gutenberg"),d=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),f=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),_=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),v=["video"]),m=s||m,m=!1===s?s:m,"Lottie Animation"===s&&(d=Object(o.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),f=Object(o.__)("Replace Lottie Animation","ultimate-addons-for-gutenberg"),_=Object(o.__)("Remove Lottie Animation","ultimate-addons-for-gutenberg"),v=b),u.a.createElement(i.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+s,label:m},u.a.createElement("div",{className:"uagb-bg-image"},u.a.createElement(l.MediaUpload,{title:d,onSelect:n,allowedTypes:v,value:t,render:e=>{let{open:n}=e;return u.a.createElement(i.Button,{isSecondary:!0,onClick:n},null!=t&&t.url?f:d)}}),!c&&(null==t?void 0:t.url)&&u.a.createElement(i.Button,{className:"uagb-rm-btn",onClick:a,isLink:!0,isDestructive:!0},_),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},201:function(e,n,t){"use strict";var a=t(14),o=t.n(a)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  display: flex; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    border-radius: 2px;\n    background-color: #f0f0f0;\n    min-height: 90px;\n    padding: 8px 0;\n    text-align: center;\n    display: flex;\n    width: 100%;\n    transition: all 0.1s ease-out;\n    box-shadow: 0 0 0 0 #0085ba;\n    margin-top: 10px;\n    align-items: center;\n    justify-content: center; }\n    .uagb-bg-image .components-button.is-destructive:hover:not(:disabled) {\n      color: #710d0d;\n      box-shadow: inset 0 0 0 0 #710d0d; }\n    .uagb-bg-image .components-button.is-link.is-destructive:hover:not(:disabled) {\n      background: #f0f0f0; }\n    .uagb-bg-image .components-button.is-link.is-destructive:focus:not(:disabled) {\n      outline: none; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 0; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n\n.uag-background-image .uagb-bg-image,\n.uag-background-video .uagb-bg-image {\n  display: block; }\n  .uag-background-image .uagb-bg-image .components-button,\n  .uag-background-video .uagb-bg-image .components-button {\n    min-height: 55px; }\n  .uag-background-image .uagb-bg-image .components-button:last-child,\n  .uag-background-video .uagb-bg-image .components-button:last-child {\n    margin-left: 0;\n    margin-top: 0; }\n",""]),n.a=o},475:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t(0),i=t.n(o),l=t(4),g=t(200),u=t(78),r=t(24),s=t(16);const c=e=>{e=e.parentProps;const{setAttributes:n,attributes:t}=e,{headingAlign:o,imagePosition:c,image:b}=t;return i.a.createElement(i.a.Fragment,null,i.a.createElement(i.a.Fragment,null,"top"===c&&i.a.createElement(l.BlockControls,{key:"controls"},i.a.createElement(l.AlignmentToolbar,{value:o,onChange:e=>n({headingAlign:e})}))),i.a.createElement(l.InspectorControls,null,i.a.createElement(u.a,{tabs:["general","advance"]},i.a.createElement(r.b,r.a.general,i.a.createElement(s.a,{initialOpen:!0},i.a.createElement("p",{className:"uagb-settings-notice"},Object(a.__)("For the common styling options please select the Parent Block of this Price List Item.")),i.a.createElement(g.a,{onSelectImage:e=>{let t=null;t=e&&e.url?e:null,e.type&&"image"===e.type||(t=null),n({image:t})},backgroundImage:b,onRemoveImage:()=>{n({image:null})}}))),i.a.createElement(r.b,r.a.advance))))};n.default=i.a.memo(c)}}]);