(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[82],{332:function(e,a,t){"use strict";t.r(a);var o=t(4),s=t.n(o),n=t(10),l=t(11),i=t(0),r=t.n(i),c=t(3),u=t(226);const b=Object(i.lazy)(()=>Promise.all([t.e(116),t.e(82)]).then(t.t.bind(null,348,7)));a.default=function(e){const a=e.name.replace("uagb/",""),t=Object(i.useRef)(),{attributes:o,className:m,latestPosts:g,block_id:p}=e,d=Object(l.a)(),{isPreview:_,columns:f,tcolumns:w,mcolumns:v,imgPosition:E,postsToShow:N,paginationEventType:j,buttonText:y,paginationType:O,layoutConfig:k,rowGap:h}=o,T=Object(c.b)(N,"postsToShow",a),C=Object(c.b)(f,"columns",a),L=Object(c.b)(w,"tcolumns",a),P=Object(c.b)(v,"mcolumns",a),S=Object(c.b)(h,"rowGap",a),x=()=>{setTimeout(()=>{if(null!=t&&t.current){var e,a;const o=null==t||null===(e=t.current)||void 0===e?void 0:e.offsetWidth,s=100-S/o*100,n=null==t||null===(a=t.current)||void 0===a?void 0:a.parentNode;if(n&&n.classList.contains("uagb-post__image-position-background")){const e=null==n?void 0:n.getElementsByClassName("uagb-post__image");for(const a of e)a&&(a.style.width=s+"%",a.style.marginLeft=S/2+"px")}}},100)};Object(i.useEffect)(()=>{x()},[t]),Object(i.useEffect)(()=>{x()},[E]);const G=g.length>T?g.slice(0,T):g,J=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/post-masonry.png";return _?r.a.createElement("img",{width:"100%",src:J,alt:""}):r.a.createElement("div",{className:s()(m,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-"+E,"uagb-editor-preview-mode-"+d.toLowerCase(),"uagb-block-"+p),"data-blog-id":p},r.a.createElement(i.Suspense,{fallback:Object(n.a)()},r.a.createElement(b,{className:s()("is-masonry","uagb-post__columns-"+C,"uagb-post__columns-tablet-"+L,"uagb-post__columns-mobile-"+P,"uagb-post__items",m,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-"+E,"uagb-editor-preview-mode-"+d.toLowerCase(),"uagb-block-"+p),"data-blog-id":p},r.a.createElement(u.b,{parentName:"uagb/post-masonry",parentClassName:"uagb-block-grid"},G.map((a,o)=>r.a.createElement("article",{ref:t,key:o,className:"uagb-post__inner-wrap"},Object(u.e)("uagb/post-masonry",a,k,e.attributes,e.categoriesList)))))),(()=>{if("infinite"===O){if("scroll"===j)return r.a.createElement("div",{className:"uagb-post-inf-loader"},r.a.createElement("div",{className:"uagb-post-loader-1"}),r.a.createElement("div",{className:"uagb-post-loader-2"}),r.a.createElement("div",{className:"uagb-post-loader-3"}));if("button"===j)return r.a.createElement("div",{className:"uagb-post__load-more-wrap"},r.a.createElement("span",{className:"uagb-post-pagination-button"},r.a.createElement("a",{className:"uagb-post__load-more"},y)))}})())}}}]);