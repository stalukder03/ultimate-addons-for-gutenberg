(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[108],{307:function(e,t,a){"use strict";var n=a(19),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,"/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.block-editor-page #wpwrap .edit-post-visual-editor ul.uagb-team__social-list {\n  display: flex;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-team__social-icon a {\n  color: #333; }\n\n.wp-block-uagb-team .components-button:focus:enabled,\n.wp-block-uagb-team .components-button {\n  box-shadow: none;\n  background: transparent;\n  border: none; }\n\n.wp-block-uagb-team p.uagb-team__desc.block-editor-rich-text__editable {\n  margin: 0 0 10px; }\n",""]),t.a=o},504:function(e,t,a){"use strict";a.r(t);var n,o=a(4),i=a.n(o),r=a(1),l=a.n(r),c=a(2),s=a(12),u=a(6),g=a(5),m=a(18),b=a.n(m),p=a(307),d=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=p.a.locals||{},f.use=function(){return d++||(n=b()(p.a,_)),f},f.unuse=function(){d>0&&!--d&&(n(),n=null)};var k=f;const h=e=>{Object(r.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const{className:t,setAttributes:a,attributes:n,mergeBlocks:o,insertBlocksAfter:m,onReplace:b,deviceType:p}=e,{align:d,tag:_,title:f,prefix:h,description_text:v,image:w,imgStyle:E,imgSize:x,imgPosition:y,twitterIcon:N,fbIcon:j,linkedinIcon:S,pinIcon:O,twitterLink:T,fbLink:R,linkedinLink:B,pinLink:L,socialTarget:C,socialEnable:I,stack:z}=n,M=l.a.createElement(l.a.Fragment,null,l.a.createElement(g.RichText,{tagName:_,value:f,className:"uagb-team__title",onChange:e=>a({title:e}),multiline:!1,placeholder:Object(c.__)("Write a Title","ultimate-addons-for-gutenberg"),onMerge:o,onSplit:m?(e,t,...n)=>{a({content:e}),m([...n,Object(u.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>b([])}),l.a.createElement(g.RichText,{tagName:"div",value:h,className:"uagb-team__prefix",onChange:e=>a({prefix:e}),onMerge:o,placeholder:Object(c.__)("Write a Designation","ultimate-addons-for-gutenberg"),onSplit:m?(e,t,...n)=>{a({content:e}),m([...n,Object(u.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>b([])})),W=(e,t,a)=>{const n=a?"_blank":"_self";return l.a.createElement("li",{className:"uagb-team__social-icon"},l.a.createElement("a",{href:t,"aria-label":e,target:n,title:"",rel:"noopener noreferrer"},Object(s.a)(e)))},A=l.a.createElement("ul",{className:"uagb-team__social-list"},""!==N&&W(N,T,C),""!==j&&W(j,R,C),""!==S&&W(S,B,C),""!==O&&W(O,L,C)),D=l.a.createElement(g.RichText,{tagName:"p",value:v,placeholder:Object(c.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-team__desc",onChange:e=>a({description_text:e}),onMerge:o,onSplit:m?(e,t,...n)=>{a({content:e}),m([...n,Object(u.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>b([])});let F="",J="";w&&(F=w.sizes,J=w.sizes&&F[x]?F[x].url:w.url);let P="";return""!==J&&(P=l.a.createElement("img",{className:"uagb-team__image-crop-"+E,src:J,alt:w.alt?w.alt:""})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:i()(t,"uagb-team__image-position-"+y,"uagb-team__align-"+d,"uagb-team__stack-"+z,"uagb-editor-preview-mode-"+p.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},"left"===y&&P,l.a.createElement("div",{className:"uagb-team__content"},"above"===y&&P,M,D,I&&A),"right"===y&&P))};t.default=l.a.memo(h)}}]);