(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[83],{317:function(e,t,a){"use strict";var n=a(16),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,"/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__field {\n  margin: 0; }\n  .edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__field a {\n    color: inherit;\n    text-decoration: none;\n    font-size: inherit;\n    margin: 0; }\n\n.edit-post-visual-editor .block-editor-block-list__block a {\n  pointer-events: none; }\n",""]),t.a=r},495:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),i=a(59),l=a(40),s=a(33),o=a(34),c=a(64),m=a(2),u=a(1),_=a.n(u);const b=e=>{const t=e.attributes.headingTag,{post:a,attributes:n}=e;let r="_self";return n.linkTarget&&(r="_blank"),_.a.createElement(t,{className:"uagb-timeline__heading"},_.a.createElement("a",{href:a.link,target:r,rel:"noopener noreferrer"},Object(c.decodeEntities)(a.title.rendered.trim())||Object(m.__)("(Untitled)")))};var d=_.a.memo(b);const g=e=>{const{post:t,attributes:a}=e;if(a.displayPostImage&&void 0!==t.uagb_featured_image_src&&a.imageSize&&t.uagb_featured_image_src[a.imageSize]){const e=t.uagb_featured_image_src[a.imageSize];let n="_self";return a.linkTarget&&(n="_blank"),_.a.createElement("a",{href:t.link,target:n,rel:"noopener noreferrer",style:{textAlign:a.align},className:"uagb-timeline__image"},_.a.createElement("img",{src:e[0],alt:Object(c.decodeEntities)(t.title.rendered.trim())||Object(m.__)("(Untitled)")}))}return null};var p=_.a.memo(g);const f=e=>{const{post:t,attributes:a}=e;let n;if(a.displayPostExcerpt&&t.uagb_excerpt){n=t.uagb_excerpt.split(/\s+/).slice(0,a.exerptLength).join(" ");let e="";return a.displayPostLink&&(e=a.contentSpace+"px"),_.a.createElement("div",{className:"uagb-timeline-desc-content",dangerouslySetInnerHTML:{__html:n},style:{marginBottom:e}})}return null};var E=_.a.memo(f);const k=e=>{const{post:t,attributes:a}=e;let n="_self";return a.linkTarget&&(n="_blank"),a.displayPostLink?_.a.createElement("a",{className:"uagb-timeline__link",href:t.link,target:n,rel:"noopener noreferrer"},a.readMoreText):null};var h=_.a.memo(k);const y=e=>{const{post:t,attributes:a}=e;let n="_self";return a.linkTarget&&(n="_blank"),_.a.createElement(_.a.Fragment,null,a.displayPostAuthor&&void 0!==t.uagb_author_info&&_.a.createElement(_.a.Fragment,null,_.a.createElement("span",{className:"dashicons-admin-users dashicons"}),_.a.createElement("a",{className:"uagb-timeline__author-link",target:n,href:t.uagb_author_info.author_link,rel:"noopener noreferrer"},t.uagb_author_info.display_name)))};var v=_.a.memo(y),j=a(20);const w=e=>{const{post:t,attributes:a,dateClass:n}=e;return _.a.createElement(_.a.Fragment,null,a.displayPostDate&&t.date_gmt&&_.a.createElement("time",{dateTime:Object(j.format)("c",t.date_gmt),className:n,style:{color:a.dateColor}},Object(j.dateI18n)(a.dateFormat,t.date_gmt)))};var N=_.a.memo(w),O=a(12);const T=e=>{const{attributes:t}=e;return _.a.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon uagb-timeline__icon-new"},Object(O.a)(t.icon))};var S,P=_.a.memo(T),x=a(7),L=a(15),A=a.n(L),C=a(317),F=0,I={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},z={};z.locals=C.a.locals||{},z.use=function(){return F++||(S=A()(C.a,I)),z},z.unuse=function(){F>0&&!--F&&(S(),S=null)};var B=z;const M=e=>{Object(u.useLayoutEffect)(()=>(B.use(),()=>{B.unuse()}),[]),e=e.parentProps;const{attributes:t,className:a,deviceType:n,latestPosts:c}=e,{displayPostLink:b,timelinAlignment:g,postsToShow:f}=t;let k="";return b&&(k="uagb_timeline__cta-enable"),_.a.createElement("div",{className:r()(a,"uagb-timeline__outer-wrap","uagb-timeline__content-wrap","uagb-editor-preview-mode-"+n.toLowerCase(),"uagb-block-"+e.clientId,k,...Object(l.a)(e.attributes))},(()=>{const a=document.getElementById("uagb-timeline-style-"+e.clientId);if(null!=a&&(a.innerHTML=Object(i.a)(e)),!Array.isArray(c)||!c.length)return _.a.createElement(x.Placeholder,{icon:"admin-post",label:uagb_blocks_info.blocks["uagb/post-timeline"].title},Array.isArray(c)?Object(m.__)("No posts found."):_.a.createElement(x.Spinner,null));const n=c.length>f?c.slice(0,f):c;let l=Object(s.a)(e.attributes,0),u=Object(o.a)(e.attributes,0),b=!1;return _.a.createElement(_.a.Fragment,null,n.map((a,n)=>("center"===g&&(b=!0,l=Object(s.a)(e.attributes,n),u=Object(o.a)(e.attributes,n)),_.a.createElement("article",{className:r()("uagb-timeline__field ",l),key:n},_.a.createElement(P,{attributes:t}),_.a.createElement("div",{className:r()(u,"uagb-timeline__events-inner-new")},_.a.createElement(N,{post:a,attributes:t,dateClass:"uagb-timeline__date-hide uagb-timeline__inner-date-new"}),_.a.createElement(p,{post:a,attributes:t}),_.a.createElement(d,{post:a,attributes:t}),_.a.createElement(v,{post:a,attributes:t}),_.a.createElement(E,{post:a,attributes:t}),_.a.createElement(h,{post:a,attributes:t}),_.a.createElement("div",{className:"uagb-timeline__arrow"})),b&&_.a.createElement(_.a.Fragment,null,_.a.createElement(N,{post:a,attributes:t,dateClass:"uagb-timeline__date-new"}))))))})(),_.a.createElement("div",{className:"uagb-timeline__line"},_.a.createElement("div",{className:"uagb-timeline__line__inner"})))};t.default=_.a.memo(M)}}]);