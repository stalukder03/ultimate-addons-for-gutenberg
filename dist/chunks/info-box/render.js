(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[69],{230:function(e,t,a){"use strict";var n=a(15),i=a.n(n)()((function(e){return e[1]}));i.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-infobox-link-wrap {\n  z-index: -1;\n  color: inherit; }\n\n.uagb-infobox__content-wrap .uagb-ifb-title-wrap .block-editor-rich-text__editable.uagb-ifb-title.rich-text {\n  margin: 0;\n  line-height: inherit; }\n",""]),t.a=i},466:function(e,t,a){"use strict";a.r(t);var n,i=a(3),l=a.n(i),r=a(94),o=a(0),s=a.n(o),c=a(26),u=a(27),b=a(96),m=a(95),f=a(93),g=a(97),p=a(25),d=a(14),w=a.n(d),_=a(230),E=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=_.a.locals||{},v.use=function(){return E++||(n=w()(_.a,h)),v},v.unuse=function(){E>0&&!--E&&(n(),n=null)};var x=v,k=a(10);const y=e=>{Object(o.useLayoutEffect)(()=>(x.use(),()=>{x.unuse()}),[]),e=e.parentProps;const t=Object(k.a)(),{attributes:a,setAttributes:n}=e,{icon:i,iconimgPosition:d,source_type:w,seperatorPosition:_,seperatorStyle:E,ctaType:h,showPrefix:v,showTitle:y,showDesc:F,block_id:N,prefixTitle:S,infoBoxTitle:T}=a;let j="";j="icon"===w&&""!==i?s.a.createElement(f.a,{attributes:a}):s.a.createElement(g.a,{attributes:a});let A=j,P=_;const L=s.a.createElement(m.a,{attributes:a});let O=!0;"after_icon"!==P||"above-title"!==d&&"below-title"!==d||(O=!1,A=s.a.createElement(s.a.Fragment,null,j,"none"!==E&&L)),"after_icon"!==P||"above-title"===d&&"below-title"===d||(P="after_title"),"below-title"===d&&"after_title"===P&&(O=!1,A=s.a.createElement(s.a.Fragment,null,"none"!==E&&L,j));const z=s.a.createElement(s.a.Fragment,null,"none"!==E&&"after_title"===P&&O&&L,F&&s.a.createElement(u.a,{attributes:a,setAttributes:n,props:e}),"none"!==E&&"after_desc"===P&&L,"none"!==h&&s.a.createElement(b.a,{attributes:a,setAttributes:n})),B=s.a.createElement("div",{className:"uagb-ifb-title-wrap"},v&&""!==S&&s.a.createElement(p.a,{attributes:a,setAttributes:n,props:e}),"none"!==E&&"after_prefix"===P&&L,y&&""!==T&&s.a.createElement(c.a,{attributes:a,setAttributes:n,props:e})),C=s.a.createElement(s.a.Fragment,null,"left"===d&&A,s.a.createElement("div",{className:"uagb-ifb-content"},"above-title"===d&&A,("above-title"===d||"below-title"===d)&&B,"below-title"===d&&A,("above-title"===d||"below-title"===d)&&z,"left-title"===d&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-left-title-image"},A,B),z),"right-title"===d&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-right-title-image"},B,A),z),("left"===d||"right"===d)&&s.a.createElement(s.a.Fragment,null,B,z)),"right"===d&&A);return s.a.createElement("div",{className:l()("uagb-block-"+N,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-infobox__content-wrap","all"===h?" uagb-infobox_cta-type-all":"",...Object(r.a)(a))},"all"===h&&s.a.createElement("a",{className:"uagb-infobox-link-wrap uagb-infbox__link-to-all","aria-label":"Infobox Link",rel:"noopener noreferrer",href:"/"}),C)};t.default=s.a.memo(y)}}]);