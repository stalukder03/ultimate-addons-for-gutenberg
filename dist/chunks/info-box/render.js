(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[67],{346:function(e,t,a){"use strict";var r=a(19),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,"/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-infobox-link-wrap {\n  z-index: -1;\n  color: inherit; }\n\n.block-editor-page #wpwrap .uagb-ifb-title-wrap h1,\n.block-editor-page #wpwrap .uagb-ifb-title-wrap h2,\n.block-editor-page #wpwrap .uagb-ifb-title-wrap h3,\n.block-editor-page #wpwrap .uagb-ifb-title-wrap h4,\n.block-editor-page #wpwrap .uagb-ifb-title-wrap h5,\n.block-editor-page #wpwrap .uagb-ifb-title-wrap h6 {\n  margin-top: 0; }\n",""]),t.a=n},590:function(e,t,a){"use strict";a.r(t);var r,n=a(4),l=a.n(n),i=a(28),o=a(1),s=a.n(o),b=a(26),c=a(27),u=a(129),p=a(29),g=a(35),m=a(36),f=a(25),w=a(18),d=a.n(w),E=a(346),_=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=E.a.locals||{},v.use=function(){return _++||(r=d()(E.a,h)),v},v.unuse=function(){_>0&&!--_&&(r(),r=null)};var k=v;const y=e=>{Object(o.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const{className:t,attributes:a,setAttributes:r,deviceType:n}=e,{icon:w,iconimgPosition:d,source_type:E,seperatorPosition:_,seperatorStyle:h,ctaType:v,showPrefix:y,showTitle:x,showDesc:N,block_id:F}=a;let S="";S="icon"===E&&""!==w?s.a.createElement(g.a,{attributes:a}):s.a.createElement(m.a,{attributes:a});let A=S,T=_;const j=s.a.createElement(p.a,{attributes:a});let P=!0;"after_icon"!==_||"above-title"!==d&&"below-title"!==d||(P=!1,A=s.a.createElement(s.a.Fragment,null,S,"none"!==h&&j)),"after_icon"!==_||"above-title"===d&&"below-title"===d||(T="after_title"),"below-title"===d&&"after_title"===_&&(P=!1,A=s.a.createElement(s.a.Fragment,null,"none"!==h&&j,S));const L=s.a.createElement(s.a.Fragment,null,"none"!==h&&"after_title"===T&&P&&j,s.a.createElement("div",{className:"uagb-ifb-text-wrap"},N&&s.a.createElement(c.a,{attributes:a,setAttributes:r,props:e}),"none"!==h&&"after_desc"===T&&j,s.a.createElement(u.a,{attributes:a,setAttributes:r}))),z=s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-title-wrap"},y&&s.a.createElement(f.a,{attributes:a,setAttributes:r,props:e}),"none"!==h&&"after_prefix"===T&&j,x&&s.a.createElement(b.a,{attributes:a,setAttributes:r,props:e}))),C=s.a.createElement("div",{className:l()("uagb-infobox__content-wrap","all"===v?" uagb-infobox_cta-type-all":"",...Object(i.a)(a))},s.a.createElement("div",{className:"uagb-ifb-left-right-wrap"},"left"===d&&A,s.a.createElement("div",{className:"uagb-ifb-content"},"above-title"===d&&A,("above-title"===d||"below-title"===d)&&z,"below-title"===d&&A,("above-title"===d||"below-title"===d)&&L,"left-title"===d&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-left-title-image"},A,z),L),"right-title"===d&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-right-title-image"},z,A),L),("left"===d||"right"===d)&&s.a.createElement(s.a.Fragment,null,z,L)),"right"===d&&A));return s.a.createElement("div",{className:l()(t,"uagb-infobox__outer-wrap","uagb-block-"+F,"uagb-editor-preview-mode-"+n.toLowerCase())},"all"===v&&s.a.createElement(s.a.Fragment,null,s.a.createElement("a",{className:"uagb-infobox-link-wrap uagb-infbox__link-to-all","aria-label":"Infobox Link",rel:"noopener noreferrer",href:"/"}),C),"all"!==v&&C)};t.default=s.a.memo(y)}}]);