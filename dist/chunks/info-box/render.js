(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[69],{225:function(e,t,a){"use strict";t.a=async function(e,t,a,n){const i=new Image;return i.addEventListener("load",(function(){t({imgTagHeight:this.naturalHeight}),t({imgTagWidth:this.naturalWidth})})),i.src=e,i.height}},285:function(e,t,a){"use strict";var n=a(16),i=a.n(n)()((function(e){return e[1]}));i.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-infobox-link-wrap {\n  z-index: -1;\n  color: inherit; }\n\n.uagb-ifb-title-wrap .block-editor-rich-text__editable.uagb-ifb-title.rich-text {\n  line-height: inherit;\n  margin-top: 0; }\n",""]),t.a=i},521:function(e,t,a){"use strict";a.r(t);var n,i=a(4),r=a.n(i),l=a(140),o=a(0),s=a.n(o),c=a(35),u=a(36),b=a(142),g=a(141),m=a(139),f=a(143),p=a(34),d=a(15),h=a.n(d),w=a(285),_=0,E={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=w.a.locals||{},v.use=function(){return _++||(n=h()(w.a,E)),v},v.unuse=function(){_>0&&!--_&&(n(),n=null)};var k=v,y=a(11),x=a(225);const j=e=>{Object(o.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const t=Object(y.a)(),{attributes:a,setAttributes:n}=e,{isPreview:i,icon:d,iconimgPosition:h,source_type:w,seperatorPosition:_,seperatorStyle:E,ctaType:v,showPrefix:j,showTitle:F,showDesc:S,block_id:N}=a;let T="";T="icon"===w&&""!==d?s.a.createElement(m.a,{attributes:a}):s.a.createElement(f.a,{attributes:a});let A=T,O=_;const P=s.a.createElement(g.a,{attributes:a});let L=!0;Object(o.useEffect)(()=>{Object(x.a)(a.iconImage.url,n)},[a.imageSize]),"after_icon"!==O||"above-title"!==h&&"below-title"!==h||(L=!1,A=s.a.createElement(s.a.Fragment,null,T,"none"!==E&&P)),"after_icon"!==O||"above-title"===h&&"below-title"===h||(O="after_title"),"below-title"===h&&"after_title"===O&&(L=!1,A=s.a.createElement(s.a.Fragment,null,"none"!==E&&P,T));const z=s.a.createElement(s.a.Fragment,null,"none"!==E&&"after_title"===O&&L&&P,S&&s.a.createElement(u.a,{attributes:a,setAttributes:n,props:e}),"none"!==E&&"after_desc"===O&&P,"none"!==v&&s.a.createElement(b.a,{attributes:a,setAttributes:n})),I=s.a.createElement("div",{className:"uagb-ifb-title-wrap"},j&&s.a.createElement(p.a,{attributes:a,setAttributes:n,props:e}),"none"!==E&&"after_prefix"===O&&P,F&&s.a.createElement(c.a,{attributes:a,setAttributes:n,props:e})),C=s.a.createElement(s.a.Fragment,null,"left"===h&&A,s.a.createElement("div",{className:"uagb-ifb-content"},"above-title"===h&&A,("above-title"===h||"below-title"===h)&&I,"below-title"===h&&A,("above-title"===h||"below-title"===h)&&z,"left-title"===h&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-left-title-image"},A,I),z),"right-title"===h&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-right-title-image"},I,A),z),("left"===h||"right"===h)&&s.a.createElement(s.a.Fragment,null,I,z)),"right"===h&&A),H=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/info-box.png";return i?s.a.createElement("img",{width:"100%",src:H,alt:""}):s.a.createElement("div",{className:r()("uagb-block-"+N,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-infobox__content-wrap","all"===v?" uagb-infobox_cta-type-all":"",...Object(l.a)(a))},"all"===v&&s.a.createElement("a",{className:"uagb-infobox-link-wrap uagb-infbox__link-to-all","aria-label":"Infobox Link",rel:"noopener noreferrer",href:"/"}),C)};t.default=s.a.memo(j)}}]);