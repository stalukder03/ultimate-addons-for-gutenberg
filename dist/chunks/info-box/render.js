(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[69],{271:function(e,t,a){"use strict";var n=a(15),i=a.n(n)()((function(e){return e[1]}));i.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-infobox-link-wrap {\n  z-index: -1;\n  color: inherit; }\n\n.uagb-ifb-title-wrap .block-editor-rich-text__editable.uagb-ifb-title.rich-text {\n  line-height: inherit;\n  margin-top: 0; }\n",""]),t.a=i},511:function(e,t,a){"use strict";a.r(t);var n,i=a(3),l=a.n(i),r=a(132),o=a(0),s=a.n(o),c=a(28),u=a(29),b=a(134),m=a(133),g=a(131),f=a(135),p=a(27),d=a(14),w=a.n(d),_=a(271),E=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=_.a.locals||{},v.use=function(){return E++||(n=w()(_.a,h)),v},v.unuse=function(){E>0&&!--E&&(n(),n=null)};var x=v,k=a(10);const y=e=>{Object(o.useLayoutEffect)(()=>(x.use(),()=>{x.unuse()}),[]),e=e.parentProps;const t=Object(k.a)(),{attributes:a,setAttributes:n}=e,{isPreview:i,icon:d,iconimgPosition:w,source_type:_,seperatorPosition:E,seperatorStyle:h,ctaType:v,showPrefix:y,showTitle:F,showDesc:N,block_id:S,prefixTitle:T,infoBoxTitle:j}=a;let A="";A="icon"===_&&""!==d?s.a.createElement(g.a,{attributes:a}):s.a.createElement(f.a,{attributes:a});let P=A,L=E;const O=s.a.createElement(m.a,{attributes:a});let z=!0;"after_icon"!==L||"above-title"!==w&&"below-title"!==w||(z=!1,P=s.a.createElement(s.a.Fragment,null,A,"none"!==h&&O)),"after_icon"!==L||"above-title"===w&&"below-title"===w||(L="after_title"),"below-title"===w&&"after_title"===L&&(z=!1,P=s.a.createElement(s.a.Fragment,null,"none"!==h&&O,A));const B=s.a.createElement(s.a.Fragment,null,"none"!==h&&"after_title"===L&&z&&O,N&&s.a.createElement(u.a,{attributes:a,setAttributes:n,props:e}),"none"!==h&&"after_desc"===L&&O,"none"!==v&&s.a.createElement(b.a,{attributes:a,setAttributes:n})),C=s.a.createElement("div",{className:"uagb-ifb-title-wrap"},y&&""!==T&&s.a.createElement(p.a,{attributes:a,setAttributes:n,props:e}),"none"!==h&&"after_prefix"===L&&O,F&&""!==j&&s.a.createElement(c.a,{attributes:a,setAttributes:n,props:e})),J=s.a.createElement(s.a.Fragment,null,"left"===w&&P,s.a.createElement("div",{className:"uagb-ifb-content"},"above-title"===w&&P,("above-title"===w||"below-title"===w)&&C,"below-title"===w&&P,("above-title"===w||"below-title"===w)&&B,"left-title"===w&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-left-title-image"},P,C),B),"right-title"===w&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-right-title-image"},C,P),B),("left"===w||"right"===w)&&s.a.createElement(s.a.Fragment,null,C,B)),"right"===w&&P),q=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/info-box.png";return i?s.a.createElement("img",{width:"100%",src:q,alt:""}):s.a.createElement("div",{className:l()("uagb-block-"+S,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-infobox__content-wrap","all"===v?" uagb-infobox_cta-type-all":"",...Object(r.a)(a))},"all"===v&&s.a.createElement("a",{className:"uagb-infobox-link-wrap uagb-infbox__link-to-all","aria-label":"Infobox Link",rel:"noopener noreferrer",href:"/"}),J)};t.default=s.a.memo(y)}}]);