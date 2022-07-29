(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[101],{305:function(e,t,a){"use strict";var n=a(16),l=a.n(n)()((function(e){return e[1]}));l.push([e.i,"/**\n * Editor styles for the admin\n */\n.uagb-toc__list > p {\n  color: #666;\n  font-size: 13px;\n  font-style: italic; }\n\n.block-editor-page .uagb-toc__scroll-top {\n  position: fixed;\n  right: 343px;\n  bottom: 50px;\n  display: none;\n  padding: 10px;\n  background: #ccd0d4;\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1.85714285714286; }\n  .block-editor-page .uagb-toc__scroll-top svg {\n    width: 1.6em;\n    height: 0.6em;\n    margin-left: 0;\n    transform: translate(0, -20%) rotate(180deg);\n    fill: currentColor; }\n  .block-editor-page .uagb-toc__scroll-top.uagb-toc__show-scroll {\n    display: inline-table; }\n\n.uagb-light-font-weight {\n  font-weight: 400; }\n\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list li.uagb-toc__list ul,\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list ul.uagb-toc__list ul {\n  list-style-type: circle; }\n\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list > ul,\n.block-editor-block-list__block .wp-block-uagb-table-of-contents ol.uagb-toc__list > li {\n  list-style-type: disc; }\n\n.block-editor-block-list__block .wp-block-uagb-table-of-contents .uagb-toc__wrap {\n  box-sizing: border-box; }\n\nol.uagb-toc__list {\n  margin-top: 0; }\n",""]),t.a=l},520:function(e,t,a){"use strict";a.r(t);var n,l=a(4),o=a.n(l),s=a(1),c=function(e){const{mappingHeaders:t,headers:a}=e;return"undefined"!==t&&a&&a.length>0&&a.filter(e=>t[e.tag-1]).length>0?React.createElement("div",{className:"uagb-toc__list-wrap"},(e=>{let t="",a="",n="",l="";const o="</li></ul>";let s=0;const c={1:0,2:0,3:0,4:0,5:0,6:0};return e.forEach((e,i)=>{const r=e.tag,b=e.content;if(0===i&&(n=r),!(r<n)){if((""===a||r<a)&&(a=r),""!==t)if(r>t)l+='<ul class="uagb-toc__list">',s++,c[r]=s;else if(r===t&&r!==a)l+='<li class="uagb-toc__list">',c[r]=s;else if(r<t){const e=Math.abs(s-c[r]);r>a?(l+=o.repeat(e),s=Math.abs(s-e)):r===a&&(l+=o.repeat(e),l+="</li>")}l+='<li class="uagb-toc__list"><a href="#">'+b+"</a>",t=r}}),l+=o.repeat(t),React.createElement("ol",{className:"uagb-toc__list",dangerouslySetInnerHTML:{__html:l}})})((()=>{const e=[];return a.forEach(a=>{t[a.tag-1]&&e.push(a)}),e})())):React.createElement("p",{className:"uagb_table-of-contents-placeholder"},Object(s.__)("Add a header to begin generating the table of contents"))},i=a(0),r=a.n(i),b=a(13),u=a(5),g=a(15),_=a.n(g),p=a(305),d=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=p.a.locals||{},f.use=function(){return d++||(n=_()(p.a,m)),f},f.unuse=function(){d>0&&!--d&&(n(),n=null)};var h=f,k=a(11),w=a(3);const E=e=>{Object(i.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]),Object(i.useEffect)(()=>{UAGBTableOfContents&&UAGBTableOfContents.init()},[]);const t=(e=e.parentProps).name.replace("uagb/",""),a=Object(k.a)(),{attributes:n,setAttributes:l,className:g,headers:_}=e,{align:p,makeCollapsible:d,initialCollapse:m,icon:f,tColumnsDesktop:E,mappingHeaders:y,headingTitle:v,isPreview:C,separatorStyle:O}=n;let T="";d&&f&&(T=Object(b.a)(f));const j=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/table-of-contents.png";return r.a.createElement(r.a.Fragment,null,C?r.a.createElement("img",{width:"100%",src:j,alt:""}):r.a.createElement("div",{className:o()(g,"uagb-toc__align-"+p,"uagb-toc__columns-"+Object(w.b)(E,"tColumnsDesktop",t),m?"uagb-toc__collapse":"","uagb-editor-preview-mode-"+a.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},r.a.createElement("div",{className:"uagb-toc__wrap"},r.a.createElement("div",{className:"uagb-toc__title"},r.a.createElement(u.RichText,{placeholder:Object(s.__)("Table Of Contents","ultimate-addons-for-gutenberg"),value:v,onChange:e=>l({headingTitle:e}),multiline:!1,onRemove:()=>e.onReplace([])}),T),"none"!==O&&r.a.createElement("div",{className:"uagb-toc__separator"}),r.a.createElement(c,{mappingHeaders:y,headers:_}))))};t.default=r.a.memo(E)}}]);