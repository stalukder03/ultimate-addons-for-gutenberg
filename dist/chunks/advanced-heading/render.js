(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[3],{405:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t.n(n),s=t(4),i=t(1),o=t(0),c=t.n(o),l=t(10);const d=e=>{e=e.parentProps;const{attributes:{block_id:a,headingTitle:t,headingDesc:n,headingTag:o,seperatorStyle:d},setAttributes:g,className:u}=e,m=Object(l.a)(),b=c.a.createElement(s.RichText,{tagName:o,placeholder:Object(i.__)("Write a Heading","ultimate-addons-for-gutenberg"),value:t,className:"uagb-heading-text",multiline:!1,onChange:e=>{g({headingTitle:e})}}),p="none"!==d&&c.a.createElement("div",{className:"uagb-separator-wrap"},c.a.createElement("div",{className:"uagb-separator"})),h=c.a.createElement(s.RichText,{tagName:"p",placeholder:Object(i.__)("Write a Description","ultimate-addons-for-gutenberg"),value:n,className:"uagb-desc-text",onChange:e=>g({headingDesc:e})});return c.a.createElement("div",{className:r()(u,"uagb-editor-preview-mode-"+m.toLowerCase(),"uagb-block-"+a)},b,p,h)};a.default=c.a.memo(d)}}]);