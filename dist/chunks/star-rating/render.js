(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[97],{282:function(e,t,a){"use strict";var n=a(17),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,".wp-block-uagb-star-rating .block-editor-rich-text__editable.uag-star-rating__title {\n  margin: 0;\n  margin-right: 10px; }\n",""]),t.a=r},522:function(e,t,a){"use strict";a.r(t);var n,r=a(3),s=a.n(r),i=a(1),u=a(4),l=a(16),o=a.n(l),c=a(282),g=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=c.a.locals||{},d.use=function(){return g++||(n=o()(c.a,b)),d},d.unuse=function(){g>0&&!--g&&(n(),n=null)};var m=d,p=a(0),_=a.n(p),f=a(10);const w=e=>{Object(p.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]),e=e.parentProps;const t=Object(f.a)(),{className:a,setAttributes:n,attributes:{isPreview:r,rating:l,range:o,title:c}}=e,g=parseInt(o),b=[];for(let e=1;e<=g;e++)b.push(_.a.createElement("span",{key:e,className:"uag-star"},"★"));const d=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/star-ratings.png";return r?_.a.createElement("img",{width:"100%",src:d,alt:""}):_.a.createElement("div",{className:s()(a,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},_.a.createElement(u.RichText,{tagName:"p",placeholder:Object(i.__)("Write a title","ultimate-addons-for-gutenberg"),value:c,className:"uag-star-rating__title",onChange:e=>n({title:e})}),_.a.createElement("div",{className:"uag-star-rating",title:`${l}/${o}`},b))};t.default=_.a.memo(w)}}]);