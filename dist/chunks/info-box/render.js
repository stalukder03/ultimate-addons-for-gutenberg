(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[69],{271:function(e,t,a){"use strict";var n=a(14),i=a.n(n)()((function(e){return e[1]}));i.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-infobox-link-wrap {\n  z-index: -1;\n  color: inherit; }\n\n.uagb-ifb-title-wrap .block-editor-rich-text__editable.uagb-ifb-title.rich-text {\n  line-height: inherit;\n  margin-top: 0; }\n",""]),t.a=i},510:function(e,t,a){"use strict";a.r(t);var n,i=a(3),r=a.n(i),l=a(131),o=a(0),s=a.n(o),c=a(29),u=a(30),b=a(133),m=a(132),g=a(130),f=a(134),d=a(28),p=a(13),w=a.n(p),_=a(271),h=0,E={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:function(e){let t=document.querySelector("#sepctra-frame"),a=!1;a=t?t.contentWindow.document.head:document.head,a&&a.appendChild(e),window._lastElementInsertedByStyleLoader=e},singleton:!0},v={};v.locals=_.a.locals||{},v.use=function(){return h++||(n=w()(_.a,E)),v},v.unuse=function(){h>0&&!--h&&(n(),n=null)};var y=v,k=a(10);const x=e=>{Object(o.useLayoutEffect)(()=>(y.use(),()=>{y.unuse()}),[]),e=e.parentProps;const t=Object(k.a)(),{attributes:a,setAttributes:n}=e,{isPreview:i,icon:p,iconimgPosition:w,source_type:_,seperatorPosition:h,seperatorStyle:E,ctaType:v,showPrefix:x,showTitle:S,showDesc:F,block_id:N}=a;let j="";j="icon"===_&&""!==p?s.a.createElement(g.a,{attributes:a}):s.a.createElement(f.a,{attributes:a});let A=j,P=h;const L=s.a.createElement(m.a,{attributes:a});let T=!0;"after_icon"!==P||"above-title"!==w&&"below-title"!==w||(T=!1,A=s.a.createElement(s.a.Fragment,null,j,"none"!==E&&L)),"after_icon"!==P||"above-title"===w&&"below-title"===w||(P="after_title"),"below-title"===w&&"after_title"===P&&(T=!1,A=s.a.createElement(s.a.Fragment,null,"none"!==E&&L,j));const C=s.a.createElement(s.a.Fragment,null,"none"!==E&&"after_title"===P&&T&&L,F&&s.a.createElement(u.a,{attributes:a,setAttributes:n,props:e}),"none"!==E&&"after_desc"===P&&L,"none"!==v&&s.a.createElement(b.a,{attributes:a,setAttributes:n})),O=s.a.createElement("div",{className:"uagb-ifb-title-wrap"},x&&s.a.createElement(d.a,{attributes:a,setAttributes:n,props:e}),"none"!==E&&"after_prefix"===P&&L,S&&s.a.createElement(c.a,{attributes:a,setAttributes:n,props:e})),q=s.a.createElement(s.a.Fragment,null,"left"===w&&A,s.a.createElement("div",{className:"uagb-ifb-content"},"above-title"===w&&A,("above-title"===w||"below-title"===w)&&O,"below-title"===w&&A,("above-title"===w||"below-title"===w)&&C,"left-title"===w&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-left-title-image"},A,O),C),"right-title"===w&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-right-title-image"},O,A),C),("left"===w||"right"===w)&&s.a.createElement(s.a.Fragment,null,O,C)),"right"===w&&A),z=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/info-box.png";return i?s.a.createElement("img",{width:"100%",src:z,alt:""}):s.a.createElement("div",{className:r()("uagb-block-"+N,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-infobox__content-wrap","all"===v?" uagb-infobox_cta-type-all":"",...Object(l.a)(a))},"all"===v&&s.a.createElement("a",{className:"uagb-infobox-link-wrap uagb-infbox__link-to-all","aria-label":"Infobox Link",rel:"noopener noreferrer",href:"/"}),q)};t.default=s.a.memo(x)}}]);