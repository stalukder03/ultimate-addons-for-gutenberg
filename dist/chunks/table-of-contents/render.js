(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[101],{294:function(e,t,n){"use strict";var a=n(14),l=n.n(a)()((function(e){return e[1]}));l.push([e.i,"/**\n * Editor styles for the admin\n */\n.uagb-toc__list > p {\n  color: #666;\n  font-size: 13px;\n  font-style: italic; }\n\n.block-editor-page .uagb-toc__scroll-top {\n  position: fixed;\n  right: 343px;\n  bottom: 50px;\n  display: none;\n  padding: 10px;\n  background: #ccd0d4;\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1.85714285714286; }\n  .block-editor-page .uagb-toc__scroll-top svg {\n    width: 1.6em;\n    height: 0.6em;\n    margin-left: 0;\n    transform: translate(0, -20%) rotate(180deg);\n    fill: currentColor; }\n  .block-editor-page .uagb-toc__scroll-top.uagb-toc__show-scroll {\n    display: inline-table; }\n\n.uagb-light-font-weight {\n  font-weight: 400; }\n\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list li.uagb-toc__list ul,\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list ul.uagb-toc__list ul {\n  list-style-type: circle; }\n\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list > ul,\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list > li {\n  list-style-type: disc; }\n",""]),t.a=l},512:function(e,t,n){"use strict";n.r(t);var a,l=n(3),o=n.n(l),s=n(1),c=function(e){const{mappingHeaders:t,headers:n}=e;return"undefined"!==t&&n&&n.length>0&&n.filter(e=>t[e.tag-1]).length>0?React.createElement("div",{className:"uagb-toc__list-wrap"},(e=>{let t="",n="",a="",l="";const o="</li></ul>";let s=0;const c={1:0,2:0,3:0,4:0,5:0,6:0};return e.forEach((e,i)=>{const r=e.tag,u=e.content;if(0===i&&(a=r),!(r<a)){if((""===n||r<n)&&(n=r),""!==t)if(r>t)l+='<ul class="uagb-toc__list">',s++,c[r]=s;else if(r===t&&r!==n)l+='<li class="uagb-toc__list">',c[r]=s;else if(r<t){const e=Math.abs(s-c[r]);r>n?(l+=o.repeat(e),s=Math.abs(s-e)):r===n&&(l+=o.repeat(e),l+="</li>")}l+='<li class="uagb-toc__list"><a href="#">'+u+"</a>",t=r}}),l+=o.repeat(t),React.createElement("ol",{className:"uagb-toc__list",dangerouslySetInnerHTML:{__html:l}})})((()=>{const e=[];return n.forEach(n=>{t[n.tag-1]&&e.push(n)}),e})())):React.createElement("p",{className:"uagb_table-of-contents-placeholder"},Object(s.__)("Add a header to begin generating the table of contents"))},i=n(0),r=n.n(i),u=n(11),b=n(4),g=n(13),_=n.n(g),d=n(294),p=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return p++||(a=_()(d.a,f)),m},m.unuse=function(){p>0&&!--p&&(a(),a=null)};var h=m,k=n(10);const w=e=>{Object(i.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]),Object(i.useEffect)(()=>{UAGBTableOfContents&&UAGBTableOfContents.init()},[]),e=e.parentProps;const t=Object(k.a)(),{attributes:n,setAttributes:a,className:l,headers:g}=e,{align:_,makeCollapsible:d,initialCollapse:p,icon:f,tColumnsDesktop:m,mappingHeaders:w,headingTitle:E,isPreview:y}=n;let v="";d&&f&&(v=Object(u.a)(f));const C=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/table-of-contents.png";return r.a.createElement(r.a.Fragment,null,y?r.a.createElement("img",{width:"100%",src:C,alt:""}):r.a.createElement("div",{className:o()(l,"uagb-toc__align-"+_,"uagb-toc__columns-"+m,p?"uagb-toc__collapse":"","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},r.a.createElement("div",{className:"uagb-toc__wrap"},r.a.createElement("div",{className:"uagb-toc__title"},r.a.createElement(b.RichText,{placeholder:Object(s.__)("Table Of Contents","ultimate-addons-for-gutenberg"),value:E,onChange:e=>a({headingTitle:e}),multiline:!1,onRemove:()=>e.onReplace([])}),v),r.a.createElement(c,{mappingHeaders:w,headers:g}))))};t.default=r.a.memo(w)}}]);