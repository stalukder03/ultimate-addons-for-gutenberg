(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[79],{331:function(t,e,o){"use strict";o.r(e);var a=o(4),s=o.n(a),n=o(225),i=o(11),l=o(0),u=o.n(l),c=o(3);const r=t=>{const e=t.name.replace("uagb/",""),o=Object(l.useRef)(),{attributes:a,className:r,latestPosts:g,block_id:b}=t,m=Object(i.a)(),{isPreview:p,columns:d,tcolumns:_,mcolumns:f,imgPosition:w,postsToShow:v,equalHeight:h,paginationMarkup:j,postPagination:k,layoutConfig:y,rowGap:O}=a,E=Object(c.b)(v,"postsToShow",e),N=Object(c.b)(d,"columns",e),L=Object(c.b)(_,"tcolumns",e),P=Object(c.b)(f,"mcolumns",e),C=Object(c.b)(O,"rowGap",e),T=()=>{setTimeout(()=>{if(null!=o&&o.current){var t,e;const s=null==o||null===(t=o.current)||void 0===t?void 0:t.offsetWidth,n=100-C/s*100,i=null==o||null===(e=o.current)||void 0===e?void 0:e.parentNode;if("background"===a.imgPosition&&i&&i.classList.contains("uagb-post__image-position-background")){const t=null==i?void 0:i.getElementsByClassName("uagb-post__image");for(const e of t)e&&(e.style.width=n+"%",e.style.marginLeft=C/2+"px")}if("top"===a.imgPosition){const t=null==i?void 0:i.getElementsByClassName("uagb-post__image");for(const e of t)e&&(e.style.width=null,e.style.marginLeft=null)}}},100)};Object(l.useEffect)(()=>{T()},[o]),Object(l.useEffect)(()=>{T()},[w]);const S=h?"uagb-post__equal-height":"",q=g.length>E?g.slice(0,E):g,B=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/post-grid.png";return p?u.a.createElement("img",{width:"100%",src:B,alt:""}):u.a.createElement("div",{className:s()("is-grid","uagb-post__columns-"+N,"uagb-post__columns-tablet-"+L,"uagb-post__columns-mobile-"+P,"uagb-post__items",""+S,r,"uagb-post-grid","uagb-post__image-position-"+w,"uagb-editor-preview-mode-"+m.toLowerCase(),"uagb-block-"+b)},u.a.createElement(n.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},q.map((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return u.a.createElement("article",{ref:o,key:a,className:"uagb-post__inner-wrap"},Object(n.e)("uagb/post-grid",e,y,t.attributes,t.categoriesList,o))}))),!0===k&&"empty"!==j&&u.a.createElement("div",{dangerouslySetInnerHTML:{__html:j},className:"uagb-post-pagination-wrap"}))};e.default=u.a.memo(r)}}]);