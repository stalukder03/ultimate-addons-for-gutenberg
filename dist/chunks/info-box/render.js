(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[69],{284:function(e,t,a){"use strict";var n=a(16),i=a.n(n)()((function(e){return e[1]}));i.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-infobox-link-wrap {\n  z-index: -1;\n  color: inherit; }\n\n.uagb-ifb-title-wrap .block-editor-rich-text__editable.uagb-ifb-title.rich-text {\n  line-height: inherit;\n  margin-top: 0; }\n",""]),t.a=i},520:function(e,t,a){"use strict";a.r(t);var n,i=a(4),r=a.n(i),l=a(140),o=a(0),s=a.n(o),c=a(35),u=a(36),b=a(142),m=a(141),g=a(139),f=a(143),p=a(34),d=a(15),w=a.n(d),_=a(284),E=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=_.a.locals||{},v.use=function(){return E++||(n=w()(_.a,h)),v},v.unuse=function(){E>0&&!--E&&(n(),n=null)};var k=v,x=a(11);const y=e=>{Object(o.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const t=Object(x.a)(),{attributes:a,setAttributes:n}=e,{isPreview:i,icon:d,iconimgPosition:w,source_type:_,seperatorPosition:E,seperatorStyle:h,ctaType:v,showPrefix:y,showTitle:F,showDesc:N,block_id:S}=a;let j="";j="icon"===_&&""!==d?s.a.createElement(g.a,{attributes:a}):s.a.createElement(f.a,{attributes:a});let A=j,P=E;const T=s.a.createElement(m.a,{attributes:a});let L=!0;"after_icon"!==P||"above-title"!==w&&"below-title"!==w||(L=!1,A=s.a.createElement(s.a.Fragment,null,j,"none"!==h&&T)),"after_icon"!==P||"above-title"===w&&"below-title"===w||(P="after_title"),"below-title"===w&&"after_title"===P&&(L=!1,A=s.a.createElement(s.a.Fragment,null,"none"!==h&&T,j));const O=s.a.createElement(s.a.Fragment,null,"none"!==h&&"after_title"===P&&L&&T,N&&s.a.createElement(u.a,{attributes:a,setAttributes:n,props:e}),"none"!==h&&"after_desc"===P&&T,"none"!==v&&s.a.createElement(b.a,{attributes:a,setAttributes:n})),z=s.a.createElement("div",{className:"uagb-ifb-title-wrap"},y&&s.a.createElement(p.a,{attributes:a,setAttributes:n,props:e}),"none"!==h&&"after_prefix"===P&&T,F&&s.a.createElement(c.a,{attributes:a,setAttributes:n,props:e})),C=s.a.createElement(s.a.Fragment,null,"left"===w&&A,s.a.createElement("div",{className:"uagb-ifb-content"},"above-title"===w&&A,("above-title"===w||"below-title"===w)&&z,"below-title"===w&&A,("above-title"===w||"below-title"===w)&&O,"left-title"===w&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-left-title-image"},A,z),O),"right-title"===w&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-right-title-image"},z,A),O),("left"===w||"right"===w)&&s.a.createElement(s.a.Fragment,null,z,O)),"right"===w&&A),J=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/info-box.png";return i?s.a.createElement("img",{width:"100%",src:J,alt:""}):s.a.createElement("div",{className:r()("uagb-block-"+S,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-infobox__content-wrap","all"===v?" uagb-infobox_cta-type-all":"",...Object(l.a)(a))},"all"===v&&s.a.createElement("a",{className:"uagb-infobox-link-wrap uagb-infbox__link-to-all","aria-label":"Infobox Link",rel:"noopener noreferrer",href:"/"}),C)};t.default=s.a.memo(y)}}]);