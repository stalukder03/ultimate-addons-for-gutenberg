(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[88],{212:function(e,t,a){"use strict";var l=a(1),n=a(7),o=a(5),c=a(0),r=a.n(c),s=a(8);t.a=e=>{const{onSelectImage:t,backgroundImage:a,onRemoveImage:c,showVideoInput:i,label:m,disableRemove:u=!1,allow:d=["image"]}=e;let g,b=Object(l.__)("Image","ultimate-addons-for-gutenberg"),_=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Image","ultimate-addons-for-gutenberg"),v=["image"];i&&(b=Object(l.__)("Video","ultimate-addons-for-gutenberg"),_=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Video","ultimate-addons-for-gutenberg"),v=["video"],g=s.a.video_placeholder),b=m||b,b=!1===m?m:b,"Lottie Animation"===m&&(_=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),v=d,g=s.a.lottie);const E=e=>r.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},s.a[e]);return r.a.createElement(n.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+m,label:b},r.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!g&&(null==a?void 0:a.url)&&`url("${(e=>{let t=e;switch(/(?:\.([^.]+))?$/.exec(String(t))[1]){case"json":t="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":t=""}return t})(null==a?void 0:a.url)}")`}},g&&(null==a?void 0:a.url)&&r.a.createElement("div",{className:"spectra-media-control__icon"},g),r.a.createElement(o.MediaUpload,{title:_,onSelect:t,allowedTypes:v,value:a,render:e=>{let{open:t}=e;return(e=>{const t=null!=a&&a.url?"replace":"add";return r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+t,onClick:e},"add"===t?E(t):r.a.createElement("div",{className:"uag-control-label"},p))})(t)}}),!u&&(null==a?void 0:a.url)&&r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:c},E("close"))),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},497:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a(0),o=a.n(n),c=a(5),r=a(212),s=a(77),i=a(31),m=a(18);const u=e=>{e=e.parentProps;const{setAttributes:t,attributes:a}=e,{image:n,showImage:u}=a;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.InspectorControls,null,o.a.createElement(s.a,{tabs:["general","advance"]},o.a.createElement(i.b,i.a.general,o.a.createElement(m.a,{initialOpen:!0},o.a.createElement("p",{className:"uagb-settings-notice"},u?Object(l.__)("For the common styling options please select the Parent Block of this Price List Item.","ultimate-addons-for-gutenberg"):Object(l.__)("For the common styling options and enabling images, please select the Parent Block of this Price List Item.","ultimate-addons-for-gutenberg")),u&&o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{onSelectImage:e=>{let a=null;a=e&&e.url?e:null,e.type&&"image"===e.type||(a=null),t({image:a})},backgroundImage:n,onRemoveImage:()=>{t({image:null})}})))),o.a.createElement(i.b,i.a.advance))))};t.default=o.a.memo(u)}}]);