(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[95],{351:function(e,t,a){"use strict";var l=a(18),n=a.n(l)()((function(e){return e[1]}));n.push([e.i,"/**\r\n * Editor styles for the admin\r\n */\n.uagb-toc__list > p {\n  color: #666;\n  font-size: 13px;\n  font-style: italic; }\n\n.block-editor-page .uagb-toc__scroll-top {\n  position: fixed;\n  right: 343px;\n  bottom: 50px;\n  display: none;\n  padding: 10px;\n  background: #ccd0d4;\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1.85714285714286; }\n  .block-editor-page .uagb-toc__scroll-top svg {\n    width: 1.6em;\n    height: 0.6em;\n    margin-left: 0;\n    transform: translate(0, -20%) rotate(180deg);\n    fill: currentColor; }\n  .block-editor-page .uagb-toc__scroll-top.uagb-toc__show-scroll {\n    display: inline-table; }\n\n.uagb-light-font-weight {\n  font-weight: 400; }\n\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list li.uagb-toc__list ul,\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list ul.uagb-toc__list ul {\n  list-style-type: circle; }\n\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list > ul,\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list > li {\n  list-style-type: disc; }\n",""]),t.a=n},567:function(e,t,a){"use strict";a.r(t);var l,n=a(4),o=a.n(n),c=a(2),s=function(e){const{mappingHeaders:t,headers:a}=e;return"undefined"!==t&&a&&a.length>0&&a.filter(e=>t[e.tag-1]).length>0?React.createElement("div",{className:"uagb-toc__list-wrap"},(e=>{let t="",a="",l="",n="";const o="</li></ul>";let c=0;const s={1:0,2:0,3:0,4:0,5:0,6:0};return e.forEach((e,i)=>{const r=e.tag,u=e.content;if(0===i&&(l=r),!(r<l)){if((""===a||r<a)&&(a=r),""!==t)if(r>t)n+='<ul class="uagb-toc__list">',c++,s[r]=c;else if(r===t&&r!==a)n+='<li class="uagb-toc__list">',s[r]=c;else if(r<t){const e=Math.abs(c-s[r]);r>a?(n+=o.repeat(e),c=Math.abs(c-e)):r===a&&(n+=o.repeat(e),n+="</li>")}n+='<li class="uagb-toc__list"><a href="#">'+u+"</a>",t=r}}),n+=o.repeat(t),React.createElement("ol",{className:"uagb-toc__list",dangerouslySetInnerHTML:{__html:n}})})((()=>{const e=[];return a.forEach(a=>{t[a.tag-1]&&e.push(a)}),e})())):React.createElement("p",{className:"uagb_table-of-contents-placeholder"},Object(c.__)("Add a header to begin generating the table of contents"))},i=a(1),r=a.n(i),u=a(12),b=a(5),g=a(17),_=a.n(g),d=a(351),p=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=d.a.locals||{},f.use=function(){return p++||(l=_()(d.a,m)),f},f.unuse=function(){p>0&&!--p&&(l(),l=null)};var h=f;const k=e=>{Object(i.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]),e=e.parentProps;const{attributes:t,setAttributes:a,className:l,headers:n,deviceType:g}=e,{align:_,makeCollapsible:d,initialCollapse:p,icon:m,tColumnsDesktop:f,mappingHeaders:k,headingTitle:w}=t;let y="";return d&&m&&(y=r.a.createElement("span",{className:"uag-toc__collapsible-wrap"},Object(u.a)(m))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:o()(l,"uagb-toc__align-"+_,"uagb-toc__columns-"+f,p?"uagb-toc__collapse":"","uagb-editor-preview-mode-"+g.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},r.a.createElement("div",{className:"uagb-toc__wrap"},r.a.createElement("div",{className:"uagb-toc__title-wrap"},r.a.createElement(b.RichText,{tagName:"div",placeholder:Object(c.__)("Table Of Contents","ultimate-addons-for-gutenberg"),value:w,className:"uagb-toc__title",onChange:e=>a({headingTitle:e}),multiline:!1,onRemove:()=>e.onReplace([])}),y),r.a.createElement(s,{mappingHeaders:k,headers:n}))))};t.default=r.a.memo(k)}}]);