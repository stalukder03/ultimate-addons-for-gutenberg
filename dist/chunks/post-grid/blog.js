(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[79],{346:function(e,t,a){"use strict";a.r(t);var s=a(4),o=a.n(s),i=a(225),n=a(11),g=a(0),u=a.n(g),l=a(3);const b=e=>{const t=e.name.replace("uagb/",""),a=Object(g.useRef)(),{attributes:s,className:b,latestPosts:r,block_id:c}=e,m=Object(n.a)(),{isPreview:p,columns:_,tcolumns:d,mcolumns:w,imgPosition:h,postsToShow:f,equalHeight:k,paginationMarkup:v,postPagination:j,layoutConfig:O}=s,N=Object(l.b)(f,"postsToShow",t),y=Object(l.b)(_,"columns",t),E=Object(l.b)(d,"tcolumns",t),P=Object(l.b)(w,"mcolumns",t),C=k?"uagb-post__equal-height":"",L=r.length>N?r.slice(0,N):r,S=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/post-grid.png",T=!0===s.displayPostImage?"uagb-post__image-enabled":"uagb-post__image-disabled";return p?u.a.createElement("img",{width:"100%",src:S,alt:""}):u.a.createElement("div",{className:o()("is-grid","uagb-post__columns-"+y,"uagb-post__columns-tablet-"+E,"uagb-post__columns-mobile-"+P,"uagb-post__items",""+C,""+T,b,"uagb-post-grid","uagb-post__image-position-"+h,"uagb-editor-preview-mode-"+m.toLowerCase(),"uagb-block-"+c)},u.a.createElement(i.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},L.map((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return u.a.createElement("article",{ref:a,key:s,className:"uagb-post__inner-wrap"},Object(i.e)("uagb/post-grid",t,O,e.attributes,e.categoriesList,a))}))),!0===j&&"empty"!==v&&u.a.createElement("div",{dangerouslySetInnerHTML:{__html:v},className:"uagb-post-pagination-wrap"}))};t.default=u.a.memo(b)}}]);