(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[99],{258:function(t,e,a){"use strict";var n=a(15),l=a.n(n)()((function(t){return t[1]}));l.push([t.i,"/**\n * Editor styles for the admin\n */\n.uagb-toc__list > p {\n  color: #666;\n  font-size: 13px;\n  font-style: italic; }\n\n.block-editor-page .uagb-toc__scroll-top {\n  position: fixed;\n  right: 343px;\n  bottom: 50px;\n  display: none;\n  padding: 10px;\n  background: #ccd0d4;\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1.85714285714286; }\n  .block-editor-page .uagb-toc__scroll-top svg {\n    width: 1.6em;\n    height: 0.6em;\n    margin-left: 0;\n    transform: translate(0, -20%) rotate(180deg);\n    fill: currentColor; }\n  .block-editor-page .uagb-toc__scroll-top.uagb-toc__show-scroll {\n    display: inline-table; }\n\n.uagb-light-font-weight {\n  font-weight: 400; }\n\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list li.uagb-toc__list ul,\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list ul.uagb-toc__list ul {\n  list-style-type: circle; }\n\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list > ul,\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list > li {\n  list-style-type: disc; }\n",""]),e.a=l},468:function(t,e,a){"use strict";a.r(e);var n,l=a(3),o=a.n(l),c=a(1),s=function(t){const{mappingHeaders:e,headers:a}=t;return"undefined"!==e&&a&&a.length>0&&a.filter(t=>e[t.tag-1]).length>0?React.createElement("div",{className:"uagb-toc__list-wrap"},(t=>{let e="",a="",n="",l="";const o="</li></ul>";let c=0;const s={1:0,2:0,3:0,4:0,5:0,6:0};return t.forEach((t,i)=>{const r=t.tag,u=t.content;if(0===i&&(n=r),!(r<n)){if((""===a||r<a)&&(a=r),""!==e)if(r>e)l+='<ul class="uagb-toc__list">',c++,s[r]=c;else if(r===e&&r!==a)l+='<li class="uagb-toc__list">',s[r]=c;else if(r<e){const t=Math.abs(c-s[r]);r>a?(l+=o.repeat(t),c=Math.abs(c-t)):r===a&&(l+=o.repeat(t),l+="</li>")}l+='<li class="uagb-toc__list"><a href="#">'+u+"</a>",e=r}}),l+=o.repeat(e),React.createElement("ol",{className:"uagb-toc__list",dangerouslySetInnerHTML:{__html:l}})})((()=>{const t=[];return a.forEach(a=>{e[a.tag-1]&&t.push(a)}),t})())):React.createElement("p",{className:"uagb_table-of-contents-placeholder"},Object(c.__)("Add a header to begin generating the table of contents"))},i=a(0),r=a.n(i),u=a(11),b=a(4),g=a(14),_=a.n(g),d=a(258),p=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return p++||(n=_()(d.a,f)),m},m.unuse=function(){p>0&&!--p&&(n(),n=null)};var h=m,k=a(10);const w=t=>{Object(i.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]),t=t.parentProps;const e=Object(k.a)(),{attributes:a,setAttributes:n,className:l,headers:g}=t,{align:_,makeCollapsible:d,initialCollapse:p,icon:f,tColumnsDesktop:m,mappingHeaders:w,headingTitle:y}=a;let E="";return d&&f&&(E=Object(u.a)(f)),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:o()(l,"uagb-toc__align-"+_,"uagb-toc__columns-"+m,p?"uagb-toc__collapse":"","uagb-editor-preview-mode-"+e.toLowerCase(),"uagb-block-"+t.clientId.substr(0,8))},r.a.createElement("div",{className:"uagb-toc__wrap"},r.a.createElement("div",{className:"uagb-toc__title"},r.a.createElement(b.RichText,{placeholder:Object(c.__)("Table Of Contents","ultimate-addons-for-gutenberg"),value:y,onChange:t=>n({headingTitle:t}),multiline:!1,onRemove:()=>t.onReplace([])}),E),r.a.createElement(s,{mappingHeaders:w,headers:g}))))};e.default=r.a.memo(w)}}]);