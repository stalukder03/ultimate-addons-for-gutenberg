(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[63],{285:function(e,t,a){"use strict";var n=a(14),l=a.n(n)()((function(e){return e[1]}));l.push([e.i,'.uagb-icon-list__wrap > .block-editor-inner-blocks {\n  width: 100%; }\n\n.wp-block.block-editor-block-list__block[data-type="uagb/icon-list-child"] a {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: unset; }\n',""]),t.a=l},529:function(e,t,a){"use strict";a.r(t);var n,l=a(3),o=a.n(l),i=a(11),r=a(1),c=a(4),s=a(0),u=a.n(s),b=a(13),d=a.n(b),m=a(285),g=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:function(e){let t=document.querySelector("#sepctra-frame"),a=!1;a=t?t.contentWindow.document.head:document.head,a&&a.appendChild(e),window._lastElementInsertedByStyleLoader=e},singleton:!0},p={};p.locals=m.a.locals||{},p.use=function(){return g++||(n=d()(m.a,_)),p},p.unuse=function(){g>0&&!--g&&(n(),n=null)};var f=p;const h=e=>{Object(s.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]),e=e.parentProps;const{attributes:t,setAttributes:a,className:n}=e,{label:l,image_icon:b,icon:d,image:m,block_id:g,link:_,target:p,disableLink:h,hideLabel:w}=t;let k="";"icon"===b?d&&(k=Object(i.a)(d)):m&&m.url&&(k=u.a.createElement("img",{className:"uagb-icon-list__source-image",alt:"",src:m.url}));const y=p?"_blank":"_self",E=h?_:"/";return u.a.createElement("div",{className:o()(n,"uagb-block-"+g)},h&&u.a.createElement("a",{target:y,rel:"noopener noreferrer","aria-label":l,href:E}," "),u.a.createElement("span",{className:"uagb-icon-list__source-wrap"},k),!w&&u.a.createElement(c.RichText,{tagName:"span",placeholder:Object(r.__)("Label Name","ultimate-addons-for-gutenberg"),value:l,onChange:e=>a({label:e}),className:"uagb-icon-list__label",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]}))};t.default=u.a.memo(h)}}]);