(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[65],{332:function(e,t,a){"use strict";var n=a(18),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,"/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-infobox-link-wrap {\n  z-index: -1;\n  color: inherit; }\n",""]),t.a=r},573:function(e,t,a){"use strict";a.r(t);var n,r=a(4),l=a.n(r),i=a(28),o=a(1),s=a.n(o),c=a(26),u=a(27),b=a(38),m=a(29),f=a(37),g=a(40),p=a(25),d=a(17),w=a.n(d),E=a(332),_=0,v={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},h={};h.locals=E.a.locals||{},h.use=function(){return _++||(n=w()(E.a,v)),h},h.unuse=function(){_>0&&!--_&&(n(),n=null)};var y=h;const k=e=>{Object(o.useLayoutEffect)(()=>(y.use(),()=>{y.unuse()}),[]),e=e.parentProps;const{className:t,attributes:a,setAttributes:n,deviceType:r}=e,{icon:d,iconimgPosition:w,source_type:E,seperatorPosition:_,seperatorStyle:v,ctaType:h,showPrefix:k,showTitle:x,showDesc:N,block_id:F}=a;let S="";S="icon"===E&&""!==d?s.a.createElement(f.a,{attributes:a}):s.a.createElement(g.a,{attributes:a});let A=S,T=_;const j=s.a.createElement(m.a,{attributes:a});let P=!0;"after_icon"!==_||"above-title"!==w&&"below-title"!==w||(P=!1,A=s.a.createElement(s.a.Fragment,null,S,"none"!==v&&j)),"after_icon"!==_||"above-title"===w&&"below-title"===w||(T="after_title"),"below-title"===w&&"after_title"===_&&(P=!1,A=s.a.createElement(s.a.Fragment,null,"none"!==v&&j,S));const L=s.a.createElement(s.a.Fragment,null,"none"!==v&&"after_title"===T&&P&&j,s.a.createElement("div",{className:"uagb-ifb-text-wrap"},N&&s.a.createElement(u.a,{attributes:a,setAttributes:n,props:e}),"none"!==v&&"after_desc"===T&&j,s.a.createElement(b.a,{attributes:a,setAttributes:n}))),z=s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-title-wrap"},k&&s.a.createElement(p.a,{attributes:a,setAttributes:n,props:e}),"none"!==v&&"after_prefix"===T&&j,x&&s.a.createElement(c.a,{attributes:a,setAttributes:n,props:e}))),C=s.a.createElement("div",{className:l()("uagb-infobox__content-wrap","all"===h?" uagb-infobox_cta-type-all":"",...Object(i.a)(a))},s.a.createElement("div",{className:"uagb-ifb-left-right-wrap"},"left"===w&&A,s.a.createElement("div",{className:"uagb-ifb-content"},"above-title"===w&&A,("above-title"===w||"below-title"===w)&&z,"below-title"===w&&A,("above-title"===w||"below-title"===w)&&L,"left-title"===w&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-left-title-image"},A,z),L),"right-title"===w&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-right-title-image"},z,A),L),("left"===w||"right"===w)&&s.a.createElement(s.a.Fragment,null,z,L)),"right"===w&&A));return s.a.createElement("div",{className:l()(t,"uagb-infobox__outer-wrap","uagb-block-"+F,"uagb-editor-preview-mode-"+r.toLowerCase())},"all"===h&&s.a.createElement(s.a.Fragment,null,s.a.createElement("a",{className:"uagb-infobox-link-wrap uagb-infbox__link-to-all","aria-label":"Infobox Link",rel:"noopener noreferrer",href:"/"}),C),"all"!==h&&C)};t.default=s.a.memo(k)}}]);