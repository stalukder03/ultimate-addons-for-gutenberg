(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[3],{441:function(e,a,t){"use strict";t.r(a);var n=t(3),i=t.n(n),r=t(4),s=t(1),c=t(0),o=t.n(c),l=t(10);const g=e=>{e=e.parentProps;const{attributes:{isPreview:a,block_id:t,headingTitle:n,headingDesc:c,headingTag:g,seperatorStyle:d},setAttributes:u,className:m}=e,b=Object(l.a)(),p=o.a.createElement(r.RichText,{tagName:g,placeholder:Object(s.__)("Write a Heading","ultimate-addons-for-gutenberg"),value:n,className:"uagb-heading-text",multiline:!1,onChange:e=>{u({headingTitle:e})}}),_="none"!==d&&o.a.createElement("div",{className:"uagb-separator-wrap"},o.a.createElement("div",{className:"uagb-separator"})),h=o.a.createElement(r.RichText,{tagName:"p",placeholder:Object(s.__)("Write a Description","ultimate-addons-for-gutenberg"),value:c,className:"uagb-desc-text",onChange:e=>u({headingDesc:e})}),w=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/creative-heading.png";return a?o.a.createElement("img",{width:"100%",src:w,alt:""}):o.a.createElement("div",{className:i()(m,"uagb-editor-preview-mode-"+b.toLowerCase(),"uagb-block-"+t)},p,_,h)};a.default=o.a.memo(g)}}]);