(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[99],{251:function(t,e,a){"use strict";var n=a(16),r=a.n(n)()((function(t){return t[1]}));r.push([t.i,".wp-block-uagb-star-rating .block-editor-rich-text__editable.uag-star-rating__title {\n  margin: 0;\n  margin-right: 10px; }\n\n.wp-block-uagb-star-rating p.block-editor-rich-text__editable.uag-star-rating__title {\n  margin-bottom: 0; }\n",""]),e.a=r},377:function(t,e,a){"use strict";a.r(e);var n,r=a(4),i=a.n(r),s=a(1),l=a(5),u=a(15),o=a.n(u),c=a(251),g=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=c.a.locals||{},d.use=function(){return g++||(n=o()(c.a,b)),d},d.unuse=function(){g>0&&!--g&&(n(),n=null)};var m=d,_=a(0),p=a.n(_),f=a(11);const w=t=>{Object(_.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]),t=t.parentProps;const e=Object(f.a)(),{className:a,setAttributes:n,attributes:{isPreview:r,rating:u,range:o,title:c,displayTitle:g}}=t,b=parseInt(o),d=[];for(let t=1;t<=b;t++)d.push(p.a.createElement("span",{key:t,className:"uag-star"},"★"));const w=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/star-ratings.png";return r?p.a.createElement("img",{width:"100%",src:w,alt:""}):p.a.createElement("div",{className:i()(a,"uagb-editor-preview-mode-"+e.toLowerCase(),"uagb-block-"+t.clientId.substr(0,8))},g&&p.a.createElement(l.RichText,{tagName:"p",placeholder:Object(s.__)("Write a title","ultimate-addons-for-gutenberg"),value:c,className:"uag-star-rating__title",onChange:t=>n({title:t})}),p.a.createElement("div",{className:"uag-star-rating",title:`${u}/${o}`},d))};e.default=p.a.memo(w)}}]);