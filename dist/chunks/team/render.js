(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[104],{335:function(e,a,t){"use strict";var n=t(18),i=t.n(n)()((function(e){return e[1]}));i.push([e.i,"/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.block-editor-page #wpwrap .edit-post-visual-editor ul.uagb-team__social-list {\n  display: flex;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-team__social-icon a {\n  color: #333; }\n\n.wp-block-uagb-team .components-button:focus:enabled,\n.wp-block-uagb-team .components-button {\n  box-shadow: none;\n  background: transparent;\n  border: none; }\n\n.wp-block-uagb-team p.uagb-team__desc.block-editor-rich-text__editable {\n  margin: 0 0 10px; }\n",""]),a.a=i},576:function(e,a,t){"use strict";t.r(a);var n,i=t(4),o=t.n(i),r=t(1),l=t.n(r),c=t(2),s=t(12),m=t(7),u=t(5),g=t(17),b=t.n(g),p=t(335),d=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=p.a.locals||{},f.use=function(){return d++||(n=b()(p.a,_)),f},f.unuse=function(){d>0&&!--d&&(n(),n=null)};var k=f;const v=e=>{Object(r.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const{className:a,setAttributes:t,attributes:n,mergeBlocks:i,insertBlocksAfter:g,onReplace:b,deviceType:p}=e,{align:d,tag:_,title:f,prefix:v,description_text:w,image:h,imgStyle:E,imgSize:N,imgPosition:x,twitterIcon:y,fbIcon:j,linkedinIcon:S,pinIcon:O,twitterLink:T,fbLink:R,linkedinLink:B,pinLink:L,socialTarget:C,socialEnable:I,stack:z}=n,M=l.a.createElement("div",{className:"uagb-team__title-wrap"},l.a.createElement(u.RichText,{tagName:_,value:f,className:"uagb-team__title",onChange:e=>t({title:e}),multiline:!1,placeholder:Object(c.__)("Write a Title","ultimate-addons-for-gutenberg"),onMerge:i,onSplit:g?(e,a,...n)=>{t({content:e}),g([...n,Object(m.createBlock)("core/paragraph",{content:a})])}:void 0,onRemove:()=>b([])}),l.a.createElement(u.RichText,{tagName:"div",value:v,className:"uagb-team__prefix",onChange:e=>t({prefix:e}),onMerge:i,placeholder:Object(c.__)("Write a Designation","ultimate-addons-for-gutenberg"),onSplit:g?(e,a,...n)=>{t({content:e}),g([...n,Object(m.createBlock)("core/paragraph",{content:a})])}:void 0,onRemove:()=>b([])})),W=(e,a,t)=>{const n=t?"_blank":"_self";return l.a.createElement("li",{className:"uagb-team__social-icon"},l.a.createElement("a",{href:a,"aria-label":e,target:n,title:"",rel:"noopener noreferrer"},Object(s.a)(e)))},A=l.a.createElement("div",{className:"uagb-team__social-icon-wrap"},l.a.createElement("ul",{className:"uagb-team__social-list"},""!==y&&W(y,T,C),""!==j&&W(j,R,C),""!==S&&W(S,B,C),""!==O&&W(O,L,C))),D=l.a.createElement("div",{className:"uagb-team__desc-wrap"},l.a.createElement(u.RichText,{tagName:"p",value:w,placeholder:Object(c.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-team__desc",onChange:e=>t({description_text:e}),onMerge:i,onSplit:g?(e,a,...n)=>{t({content:e}),g([...n,Object(m.createBlock)("core/paragraph",{content:a})])}:void 0,onRemove:()=>b([])}));let J="",P="";h&&(J=h.sizes,P=h.sizes&&J[N]?J[N].url:h.url);let q="";return""!==P&&(q=l.a.createElement("div",{className:o()("uagb-team__image-wrap","uagb-team__image-crop-"+E)},l.a.createElement("img",{className:"",src:P,alt:h.alt?h.alt:""}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:o()(a,"uagb-team","uagb-team__outer-wrap","uagb-team__image-position-"+x,"uagb-team__align-"+d,"uagb-team__stack-"+z,"uagb-editor-preview-mode-"+p.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},l.a.createElement("div",{className:"uagb-team__wrap"},"left"===x&&q,l.a.createElement("div",{className:"uagb-team__content"},"above"===x&&q,M,D,I&&A),"right"===x&&q)))};a.default=l.a.memo(v)}}]);