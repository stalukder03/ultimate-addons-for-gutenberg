(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[77],{281:function(t,e,a){"use strict";a.r(e);var s=a(3),o=a.n(s),i=a(180),n=a(10),r=a(0),u=a.n(r);const l=t=>{const e=Object(r.useRef)(),{attributes:a,className:s,latestPosts:l,block_id:g}=t,c=Object(n.a)(),{columns:p,tcolumns:b,mcolumns:m,imgPosition:_,postsToShow:d,equalHeight:f,paginationMarkup:h,postPagination:w,layoutConfig:v,rowGap:k,highlighFirstPost:E}=a,N=()=>{setTimeout(()=>{if(null!=e&&e.current){var t,a;const s=null==e||null===(t=e.current)||void 0===t?void 0:t.offsetWidth,o=100-k/s*100,i=null==e||null===(a=e.current)||void 0===a?void 0:a.parentNode;if(i&&i.classList.contains("uagb-post__image-position-background")){const t=null==i?void 0:i.getElementsByClassName("uagb-post__image");for(const e of t)e&&(e.style.width=o+"%",e.style.marginLeft=k/2+"px")}}},100)};Object(r.useEffect)(()=>{N()},[e]),Object(r.useEffect)(()=>{N()},[_]);const y=f?"uagb-post__equal-height":"",j=l.length>d?l.slice(0,d):l,L=E?"uagb-post__inner-wrap uagb-highlight-first-post":"uagb-post__inner-wrap";return u.a.createElement("div",{className:o()("is-grid","uagb-post__columns-"+p,"uagb-post__columns-tablet-"+b,"uagb-post__columns-mobile-"+m,"uagb-post__items",""+y,s,"uagb-post-grid","uagb-post__image-position-"+_,"uagb-editor-preview-mode-"+c.toLowerCase(),"uagb-block-"+g)},u.a.createElement(i.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},j.map((a={},s)=>u.a.createElement(u.a.Fragment,null,0===s&&u.a.createElement("article",{ref:e,key:s,className:""+L},Object(i.e)("uagb/post-grid",a,v,t.attributes,t.categoriesList,e))||u.a.createElement("article",{ref:e,key:s,className:"uagb-post__inner-wrap"},Object(i.e)("uagb/post-grid",a,v,t.attributes,t.categoriesList,e))))),!0===w&&"empty"!==h&&u.a.createElement("div",{dangerouslySetInnerHTML:{__html:h},className:"uagb-post-pagination-wrap"}))};e.default=u.a.memo(l)}}]);