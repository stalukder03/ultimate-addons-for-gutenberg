(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[108],{299:function(e,t,a){"use strict";var n=a(14),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.block-editor-page #wpwrap .edit-post-visual-editor ul.uagb-team__social-list {\n  display: flex;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-team__social-icon a {\n  color: #333; }\n\n.wp-block-uagb-team .components-button:focus:enabled,\n.wp-block-uagb-team .components-button {\n  box-shadow: none;\n  background: transparent;\n  border: none; }\n\n.wp-block-uagb-team p.uagb-team__desc.block-editor-rich-text__editable {\n  margin: 0 0 10px; }\n",""]),t.a=o},546:function(e,t,a){"use strict";a.r(t);var n,o=a(3),i=a.n(o),r=a(0),l=a.n(r),c=a(1),s=a(11),u=a(5),g=a(4),m=a(13),b=a.n(m),p=a(299),d=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=p.a.locals||{},f.use=function(){return d++||(n=b()(p.a,_)),f},f.unuse=function(){d>0&&!--d&&(n(),n=null)};var h=f,k=a(10);const w=e=>{Object(r.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]),e=e.parentProps;const t=Object(k.a)(),{className:a,setAttributes:n,attributes:o,mergeBlocks:m,insertBlocksAfter:b,onReplace:p}=e,{isPreview:d,align:_,tag:f,title:w,prefix:v,description_text:E,image:y,imgStyle:x,imgSize:N,imgPosition:j,twitterIcon:S,fbIcon:O,linkedinIcon:R,pinIcon:T,twitterLink:B,fbLink:L,linkedinLink:A,pinLink:C,socialTarget:I,socialEnable:z,stack:M}=o,P=l.a.createElement(l.a.Fragment,null,l.a.createElement(g.RichText,{tagName:f,value:w,className:"uagb-team__title",onChange:e=>n({title:e}),multiline:!1,placeholder:Object(c.__)("Write a Title","ultimate-addons-for-gutenberg"),onMerge:m,onSplit:b?function(e,t){n({content:e});for(var a=arguments.length,o=new Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];b([...o,Object(u.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>p([])}),l.a.createElement(g.RichText,{tagName:"div",value:v,className:"uagb-team__prefix",onChange:e=>n({prefix:e}),onMerge:m,placeholder:Object(c.__)("Write a Designation","ultimate-addons-for-gutenberg"),onSplit:b?function(e,t){n({content:e});for(var a=arguments.length,o=new Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];b([...o,Object(u.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>p([])})),W=(e,t,a)=>{const n=a?"_blank":"_self";return l.a.createElement("li",{className:"uagb-team__social-icon"},l.a.createElement("a",{href:t,"aria-label":e,target:n,title:"",rel:"noopener noreferrer"},Object(s.a)(e)))},D=l.a.createElement("ul",{className:"uagb-team__social-list"},""!==S&&W(S,B,I),""!==O&&W(O,L,I),""!==R&&W(R,A,I),""!==T&&W(T,C,I)),F=l.a.createElement(g.RichText,{tagName:"p",value:E,placeholder:Object(c.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-team__desc",onChange:e=>n({description_text:e}),onMerge:m,onSplit:b?function(e,t){n({content:e});for(var a=arguments.length,o=new Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];b([...o,Object(u.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>p([])});let J="",q="";y&&(J=y.sizes,q=y.sizes&&J[N]?J[N].url:y.url);let G="";""!==q&&(G=l.a.createElement("img",{className:"uagb-team__image-crop-"+x,src:q,alt:y.alt?y.alt:""}));const H=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/team.png";return l.a.createElement(l.a.Fragment,null,d?l.a.createElement("img",{width:"100%",src:H,alt:""}):l.a.createElement("div",{className:i()(a,"uagb-team__image-position-"+j,"uagb-team__align-"+_,"uagb-team__stack-"+M,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},"left"===j&&G,l.a.createElement("div",{className:"uagb-team__content"},"above"===j&&G,P,F,z&&D),"right"===j&&G))};t.default=l.a.memo(w)}}]);