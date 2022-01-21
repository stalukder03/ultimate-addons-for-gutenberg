(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[81],{354:function(e,t,a){"use strict";var n=a(19),i=a.n(n)()((function(e){return e[1]}));i.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n#wpwrap .edit-post-visual-editor .uagb-timeline__widget a {\n  color: inherit;\n  text-decoration: none; }\n\n#wpwrap .edit-post-visual-editor .uagb-timeline__heading a,\n.gutenberg-editor-page #wpwrap .edit-post-visual-editor a {\n  margin: 0;\n  color: inherit;\n  font-size: inherit; }\n\n#wpwrap .edit-post-visual-editor .uagb-timeline__heading {\n  margin: 0; }\n\n#wpwrap .edit-post-visual-editor a {\n  pointer-events: none; }\n",""]),t.a=i},579:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a.n(n),r=a(59),l=a(40),s=a(33),o=a(34),c=a(64),m=a(2),u=a(1),_=a.n(u);const d=e=>{const t=e.attributes.headingTag,{post:a,attributes:n}=e;let i="_self";return n.linkTarget&&(i="_blank"),_.a.createElement("div",{className:"uagb-timeline__heading-text"},_.a.createElement(t,{className:"uagb-timeline__heading"},_.a.createElement("a",{href:a.link,target:i,rel:"noopener noreferrer"},Object(c.decodeEntities)(a.title.rendered.trim())||Object(m.__)("(Untitled)"))))};var g=_.a.memo(d);const b=e=>{const{post:t,attributes:a}=e;if(a.displayPostImage&&void 0!==t.uagb_featured_image_src&&a.imageSize&&t.uagb_featured_image_src[a.imageSize]){const e=t.uagb_featured_image_src[a.imageSize];let n="_self";return a.linkTarget&&(n="_blank"),_.a.createElement("div",{className:"uagb-timeline__image"},_.a.createElement("a",{href:t.link,target:n,rel:"noopener noreferrer",style:{textAlign:a.align}},_.a.createElement("img",{src:e[0],alt:Object(c.decodeEntities)(t.title.rendered.trim())||Object(m.__)("(Untitled)")})))}return null};var p=_.a.memo(b);const E=e=>{const{post:t,attributes:a}=e;let n;if(a.displayPostExcerpt&&t.uagb_excerpt){n=t.uagb_excerpt.split(/\s+/).slice(0,a.exerptLength).join(" ");let e="";return a.displayPostLink&&(e=a.contentSpace+"px"),_.a.createElement("div",{className:"uagb-timeline-desc-content",dangerouslySetInnerHTML:{__html:n},style:{marginBottom:e}})}return null};var v=_.a.memo(E);const f=e=>{const{post:t,attributes:a}=e;let n="_self";return a.linkTarget&&(n="_blank"),a.displayPostLink?_.a.createElement("div",{className:"uagb-timeline__link_parent"},_.a.createElement("a",{className:"uagb-timeline__link",href:t.link,target:n,rel:"noopener noreferrer"},a.readMoreText)):null};var h=_.a.memo(f);const w=e=>{const{post:t,attributes:a}=e;let n="_self";return a.linkTarget&&(n="_blank"),_.a.createElement(_.a.Fragment,null,a.displayPostAuthor&&void 0!==t.uagb_author_info&&_.a.createElement("div",{className:"uagb-timeline__author"},_.a.createElement("span",{className:"dashicons-admin-users dashicons"}),_.a.createElement("a",{className:"uagb-timeline__author-link",target:n,href:t.uagb_author_info.author_link,rel:"noopener noreferrer"},t.uagb_author_info.display_name)))};var y=_.a.memo(w),k=a(20);const N=e=>{const{post:t,attributes:a,dateClass:n}=e;return _.a.createElement(_.a.Fragment,null,a.displayPostDate&&t.date_gmt&&_.a.createElement("time",{dateTime:Object(k.format)("c",t.date_gmt),className:n,style:{color:a.dateColor}},Object(k.dateI18n)(a.dateFormat,t.date_gmt)))};var j=_.a.memo(N),O=a(12);const T=e=>{const{attributes:t}=e;return _.a.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon"},_.a.createElement("span",{className:"uagb-timeline__icon-new uagb-timeline__out-view-icon"},Object(O.a)(t.icon)))};var S,P=_.a.memo(T),x=a(8),L=a(18),A=a.n(L),C=a(354),I=0,z={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},B={};B.locals=C.a.locals||{},B.use=function(){return I++||(S=A()(C.a,z)),B},B.unuse=function(){I>0&&!--I&&(S(),S=null)};var F=B;const M=e=>{Object(u.useLayoutEffect)(()=>(F.use(),()=>{F.unuse()}),[]),e=e.parentProps;const{attributes:t,className:a,deviceType:n,latestPosts:c}=e,{displayPostLink:d,timelinAlignment:b,postsToShow:E,contentPadding:f}=t;let w="";return d&&(w="uagb_timeline__cta-enable"),_.a.createElement("div",{className:i()(a,"uagb-timeline__outer-wrap","uagb-timeline__content-wrap","uagb-editor-preview-mode-"+n.toLowerCase(),"uagb-block-"+e.clientId,w,...Object(l.a)(e.attributes))},_.a.createElement("div",{className:"uagb-timeline__main"},(()=>{const a=document.getElementById("uagb-timeline-style-"+e.clientId);if(null!=a&&(a.innerHTML=Object(r.a)(e)),!Array.isArray(c)||!c.length)return _.a.createElement(x.Placeholder,{icon:"admin-post",label:uagb_blocks_info.blocks["uagb/post-timeline"].title},Array.isArray(c)?Object(m.__)("No posts found."):_.a.createElement(x.Spinner,null));const n=c.length>E?c.slice(0,E):c;let i=Object(s.a)(e.attributes,0),l=Object(o.a)(e.attributes,0),u=!1;return _.a.createElement("div",{className:"uagb-timeline__days"},n.map((a,n)=>("center"===b&&(u=!0,i=Object(s.a)(e.attributes,n),l=Object(o.a)(e.attributes,n)),_.a.createElement("article",{className:"uagb-timeline__field uagb-timeline__field-wrap",key:n},_.a.createElement("div",{className:i},_.a.createElement(P,{attributes:t}),_.a.createElement("div",{className:l},_.a.createElement("div",{className:"uagb-timeline__events-inner-new"},_.a.createElement("div",{className:"uagb-timeline__date-hide uagb-timeline__date-inner"},_.a.createElement(j,{post:a,attributes:t,dateClass:"uagb-timeline__inner-date-new"})),_.a.createElement(p,{post:a,attributes:t}),_.a.createElement("div",{className:"uagb-content",style:{padding:f+"px"}},_.a.createElement(g,{post:a,attributes:t}),_.a.createElement(y,{post:a,attributes:t}),_.a.createElement(v,{post:a,attributes:t}),_.a.createElement(h,{post:a,attributes:t}),_.a.createElement("div",{className:"uagb-timeline__arrow"})))),u&&_.a.createElement("div",{className:"uagb-timeline__date-new"},_.a.createElement(j,{post:a,attributes:t,dateClass:"uagb-timeline__date-new"})))))))})(),_.a.createElement("div",{className:"uagb-timeline__line"},_.a.createElement("div",{className:"uagb-timeline__line__inner"}))))};t.default=_.a.memo(M)}}]);