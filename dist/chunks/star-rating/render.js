(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[99],{295:function(e,t,a){"use strict";var n=a(14),s=a.n(n)()((function(e){return e[1]}));s.push([e.i,".wp-block-uagb-star-rating .block-editor-rich-text__editable.uag-star-rating__title {\n  margin: 0;\n  margin-right: 10px; }\n",""]),t.a=s},539:function(e,t,a){"use strict";a.r(t);var n,s=a(3),r=a.n(s),i=a(1),l=a(4),u=a(13),o=a.n(u),c=a(295),g=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=c.a.locals||{},d.use=function(){return g++||(n=o()(c.a,b)),d},d.unuse=function(){g>0&&!--g&&(n(),n=null)};var m=d,p=a(0),_=a.n(p),f=a(10);const w=e=>{Object(p.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]),e=e.parentProps;const t=Object(f.a)(),{className:a,setAttributes:n,attributes:{isPreview:s,rating:u,range:o,title:c,displayTitle:g}}=e,b=parseInt(o),d=[];for(let e=1;e<=b;e++)d.push(_.a.createElement("span",{key:e,className:"uag-star"},"★"));const w=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/star-ratings.png";return s?_.a.createElement("img",{width:"100%",src:w,alt:""}):_.a.createElement("div",{className:r()(a,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},g&&_.a.createElement(l.RichText,{tagName:"p",placeholder:Object(i.__)("Write a title","ultimate-addons-for-gutenberg"),value:c,className:"uag-star-rating__title",onChange:e=>n({title:e})}),_.a.createElement("div",{className:"uag-star-rating",title:`${u}/${o}`},d))};t.default=_.a.memo(w)}}]);