(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[97],{281:function(t,e,a){"use strict";var n=a(15),r=a.n(n)()((function(t){return t[1]}));r.push([t.i,".wp-block-uagb-star-rating .block-editor-rich-text__editable.uag-star-rating__title {\n  margin: 0;\n  margin-right: 10px; }\n",""]),e.a=r},519:function(t,e,a){"use strict";a.r(e);var n,r=a(3),s=a.n(r),i=a(1),u=a(4),l=a(14),o=a.n(l),c=a(281),g=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=c.a.locals||{},d.use=function(){return g++||(n=o()(c.a,b)),d},d.unuse=function(){g>0&&!--g&&(n(),n=null)};var m=d,p=a(0),_=a.n(p),f=a(10);const h=t=>{Object(p.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]),t=t.parentProps;const e=Object(f.a)(),{className:a,setAttributes:n,attributes:{rating:r,range:l,title:o}}=t,c=parseInt(l),g=[];for(let t=1;t<=c;t++)g.push(_.a.createElement("span",{key:t,className:"uag-star"},"★"));return _.a.createElement("div",{className:s()(a,"uagb-editor-preview-mode-"+e.toLowerCase(),"uagb-block-"+t.clientId.substr(0,8))},_.a.createElement(u.RichText,{tagName:"p",placeholder:Object(i.__)("Write a title","ultimate-addons-for-gutenberg"),value:o,className:"uag-star-rating__title",onChange:t=>n({title:t})}),_.a.createElement("div",{className:"uag-star-rating",title:`${r}/${l}`},g))};e.default=_.a.memo(h)}}]);