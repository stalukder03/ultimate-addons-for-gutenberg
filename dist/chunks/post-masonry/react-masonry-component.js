(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[82],{317:function(e,a,t){"use strict";t.r(a);var s=t(3),o=t.n(s),n=t(8),i=t(10),l=t(0),r=t.n(l),u=t(212);const c=Object(l.lazy)(()=>Promise.all([t.e(116),t.e(82)]).then(t.t.bind(null,333,7)));a.default=function(e){const a=Object(l.useRef)(),{attributes:t,className:s,latestPosts:m,block_id:b}=e,g=Object(i.a)(),{isPreview:p,columns:d,tcolumns:_,mcolumns:f,imgPosition:w,postsToShow:v,paginationEventType:E,buttonText:N,paginationType:y,layoutConfig:k,rowGap:h}=t,j=()=>{setTimeout(()=>{if(null!=a&&a.current){var e,t;const s=null==a||null===(e=a.current)||void 0===e?void 0:e.offsetWidth,o=100-h/s*100,n=null==a||null===(t=a.current)||void 0===t?void 0:t.parentNode;if(n&&n.classList.contains("uagb-post__image-position-background")){const e=null==n?void 0:n.getElementsByClassName("uagb-post__image");for(const a of e)a&&(a.style.width=o+"%",a.style.marginLeft=h/2+"px")}}},100)};Object(l.useEffect)(()=>{j()},[a]),Object(l.useEffect)(()=>{j()},[w]);const O=m.length>v?m.slice(0,v):m,C=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/post-masonry.png";return p?r.a.createElement("img",{width:"100%",src:C,alt:""}):r.a.createElement("div",{className:o()(s,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-"+w,"uagb-editor-preview-mode-"+g.toLowerCase(),"uagb-block-"+b),"data-blog-id":b},r.a.createElement(l.Suspense,{fallback:Object(n.a)()},r.a.createElement(c,{className:o()("is-masonry","uagb-post__columns-"+d,"uagb-post__columns-tablet-"+_,"uagb-post__columns-mobile-"+f,"uagb-post__items",s,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-"+w,"uagb-editor-preview-mode-"+g.toLowerCase(),"uagb-block-"+b),"data-blog-id":b},r.a.createElement(u.b,{parentName:"uagb/post-masonry",parentClassName:"uagb-block-grid"},O.map((t,s)=>r.a.createElement("article",{ref:a,key:s,className:"uagb-post__inner-wrap"},Object(u.e)("uagb/post-masonry",t,k,e.attributes,e.categoriesList)))))),(()=>{if("infinite"===y){if("scroll"===E)return r.a.createElement("div",{className:"uagb-post-inf-loader"},r.a.createElement("div",{className:"uagb-post-loader-1"}),r.a.createElement("div",{className:"uagb-post-loader-2"}),r.a.createElement("div",{className:"uagb-post-loader-3"}));if("button"===E)return r.a.createElement("div",{className:"uagb-post__load-more-wrap"},r.a.createElement("span",{className:"uagb-post-pagination-button"},r.a.createElement("a",{className:"uagb-post__load-more"},N)))}})())}}}]);