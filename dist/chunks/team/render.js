(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[108],{243:function(e,t,a){"use strict";var n=a(15),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.block-editor-page #wpwrap .edit-post-visual-editor ul.uagb-team__social-list {\n  display: flex;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-team__social-icon a {\n  color: #333; }\n\n.wp-block-uagb-team .components-button:focus:enabled,\n.wp-block-uagb-team .components-button {\n  box-shadow: none;\n  background: transparent;\n  border: none; }\n\n.wp-block-uagb-team p.uagb-team__desc.block-editor-rich-text__editable {\n  margin: 0 0 10px; }\n",""]),t.a=o},482:function(e,t,a){"use strict";a.r(t);var n,o=a(3),r=a.n(o),i=a(0),l=a.n(i),c=a(1),s=a(11),u=a(5),g=a(4),m=a(14),b=a.n(m),p=a(243),d=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=p.a.locals||{},f.use=function(){return d++||(n=b()(p.a,_)),f},f.unuse=function(){d>0&&!--d&&(n(),n=null)};var h=f,k=a(10);const v=e=>{Object(i.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]),e=e.parentProps;const t=Object(k.a)(),{className:a,setAttributes:n,attributes:o,mergeBlocks:m,insertBlocksAfter:b,onReplace:p}=e,{align:d,tag:_,title:f,prefix:v,description_text:w,image:y,imgStyle:E,imgSize:x,imgPosition:N,twitterIcon:j,fbIcon:S,linkedinIcon:O,pinIcon:R,twitterLink:T,fbLink:B,linkedinLink:L,pinLink:A,socialTarget:C,socialEnable:I,stack:z}=o,M=l.a.createElement(l.a.Fragment,null,l.a.createElement(g.RichText,{tagName:_,value:f,className:"uagb-team__title",onChange:e=>n({title:e}),multiline:!1,placeholder:Object(c.__)("Write a Title","ultimate-addons-for-gutenberg"),onMerge:m,onSplit:b?function(e,t){n({content:e});for(var a=arguments.length,o=new Array(a>2?a-2:0),r=2;r<a;r++)o[r-2]=arguments[r];b([...o,Object(u.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>p([])}),l.a.createElement(g.RichText,{tagName:"div",value:v,className:"uagb-team__prefix",onChange:e=>n({prefix:e}),onMerge:m,placeholder:Object(c.__)("Write a Designation","ultimate-addons-for-gutenberg"),onSplit:b?function(e,t){n({content:e});for(var a=arguments.length,o=new Array(a>2?a-2:0),r=2;r<a;r++)o[r-2]=arguments[r];b([...o,Object(u.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>p([])})),W=(e,t,a)=>{const n=a?"_blank":"_self";return l.a.createElement("li",{className:"uagb-team__social-icon"},l.a.createElement("a",{href:t,"aria-label":e,target:n,title:"",rel:"noopener noreferrer"},Object(s.a)(e)))},D=l.a.createElement("ul",{className:"uagb-team__social-list"},""!==j&&W(j,T,C),""!==S&&W(S,B,C),""!==O&&W(O,L,C),""!==R&&W(R,A,C)),F=l.a.createElement(g.RichText,{tagName:"p",value:w,placeholder:Object(c.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-team__desc",onChange:e=>n({description_text:e}),onMerge:m,onSplit:b?function(e,t){n({content:e});for(var a=arguments.length,o=new Array(a>2?a-2:0),r=2;r<a;r++)o[r-2]=arguments[r];b([...o,Object(u.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>p([])});let J="",P="";y&&(J=y.sizes,P=y.sizes&&J[x]?J[x].url:y.url);let q="";return""!==P&&(q=l.a.createElement("img",{className:"uagb-team__image-crop-"+E,src:P,alt:y.alt?y.alt:""})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:r()(a,"uagb-team__image-position-"+N,"uagb-team__align-"+d,"uagb-team__stack-"+z,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},"left"===N&&q,l.a.createElement("div",{className:"uagb-team__content"},"above"===N&&q,M,F,I&&D),"right"===N&&q))};t.default=l.a.memo(v)}}]);