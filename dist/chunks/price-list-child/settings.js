(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[84],{271:function(e,t,n){"use strict";var a,o=n(2),l=n(8),i=n(5),r=n(1),s=n.n(r),c=n(15),u=n.n(c),g=n(272),m=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=g.a.locals||{},d.use=function(){return m++||(a=u()(g.a,b)),d},d.unuse=function(){m>0&&!--m&&(a(),a=null)};var p=d;t.a=e=>{Object(r.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const{onSelectImage:t,backgroundImage:n,onRemoveImage:a,showVideoInput:c,label:u}=e;let g=Object(o.__)("Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),b=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),d=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),f=["image"];return c&&(g=Object(o.__)("Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),b=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),d=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),f=["video"]),g=u||g,s.a.createElement(l.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+u,label:g},s.a.createElement("div",{className:"uagb-bg-image"},s.a.createElement(i.MediaUpload,{title:m,onSelect:t,allowedTypes:f,value:n,render:({open:e})=>s.a.createElement(l.Button,{isSecondary:!0,onClick:e},null!=n&&n.url?b:m)}),(null==n?void 0:n.url)&&s.a.createElement(l.Button,{className:"uagb-rm-btn",onClick:a,isLink:!0,isDestructive:!0},d),e.help&&s.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},272:function(e,t,n){"use strict";var a=n(16),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),t.a=o},539:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(1),l=n.n(o),i=n(5),r=n(271),s=n(65),c=n(22),u=n(17);const g=e=>{e=e.parentProps;const{setAttributes:t,attributes:n}=e,{headingAlign:o,imagePosition:g,image:m}=n;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,"top"===g&&l.a.createElement(i.BlockControls,{key:"controls"},l.a.createElement(i.AlignmentToolbar,{value:o,onChange:e=>t({headingAlign:e})}))),l.a.createElement(i.InspectorControls,null,l.a.createElement(s.a,{tabs:["general","advance"]},l.a.createElement(c.b,c.a.general,l.a.createElement(u.a,{initialOpen:!0},l.a.createElement("p",{className:"uagb-settings-notice"},Object(a.__)("For the common styling options please select the Parent Block of this Price List Item.")),l.a.createElement(r.a,{onSelectImage:e=>{let n=null;n=e&&e.url?e:null,e.type&&"image"===e.type||(n=null),t({image:n})},backgroundImage:m,onRemoveImage:()=>{t({image:null})}}))),l.a.createElement(c.b,c.a.advance))))};t.default=l.a.memo(g)}}]);