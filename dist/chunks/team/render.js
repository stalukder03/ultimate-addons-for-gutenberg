(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[48],{282:function(e,t,a){"use strict";var n=a(12),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,"/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.block-editor-page #wpwrap .edit-post-visual-editor ul.uagb-team__social-list {\n  display: flex;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-team__social-icon a {\n  color: #333; }\n\n.wp-block-uagb-team .components-button:focus:enabled,\n.wp-block-uagb-team .components-button {\n  box-shadow: none;\n  background: transparent;\n  border: none; }\n\n.wp-block-uagb-team p.uagb-team__desc.block-editor-rich-text__editable {\n  margin: 0 0 10px; }\n",""]),t.a=r},404:function(e,t,a){"use strict";a.r(t);var n,r=a(2),o=a.n(r),c=a(0),i=a.n(c),l=a(1),s=a(9),u=a(6),m=a(3),g=a(11),b=a.n(g),p=a(282),d=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=p.a.locals||{},f.use=function(){return d++||(n=b()(p.a,_)),f},f.unuse=function(){d>0&&!--d&&(n(),n=null)};var v=f,w=function(e){Object(c.useLayoutEffect)((function(){return v.use(),function(){v.unuse()}}),[]);var t=e=e.parentProps,a=t.className,n=t.setAttributes,r=t.attributes,g=t.mergeBlocks,b=t.insertBlocksAfter,p=t.onReplace,d=t.deviceType,_=r.align,f=r.tag,w=r.title,h=r.prefix,k=r.description_text,E=r.image,N=r.imgStyle,y=r.imgSize,x=r.imgPosition,j=r.twitterIcon,S=r.fbIcon,O=r.linkedinIcon,T=r.pinIcon,R=r.twitterLink,B=r.fbLink,L=r.linkedinLink,A=r.pinLink,C=r.socialTarget,I=r.socialEnable,z=r.stack,M=i.a.createElement("div",{className:"uagb-team__title-wrap"},i.a.createElement(m.RichText,{tagName:f,value:w,className:"uagb-team__title",onChange:function(e){return n({title:e})},multiline:!1,placeholder:Object(l.__)("Write a Title","ultimate-addons-for-gutenberg"),onMerge:g,onSplit:b?function(e,t){n({content:e});for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];b([].concat(r,[Object(u.createBlock)("core/paragraph",{content:t})]))}:void 0,onRemove:function(){return p([])}}),i.a.createElement(m.RichText,{tagName:"div",value:h,className:"uagb-team__prefix",onChange:function(e){return n({prefix:e})},onMerge:g,placeholder:Object(l.__)("Write a Designation","ultimate-addons-for-gutenberg"),onSplit:b?function(e,t){n({content:e});for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];b([].concat(r,[Object(u.createBlock)("core/paragraph",{content:t})]))}:void 0,onRemove:function(){return p([])}})),W=function(e,t,a){var n=a?"_blank":"_self";return i.a.createElement("li",{className:"uagb-team__social-icon"},i.a.createElement("a",{href:t,"aria-label":e,target:n,title:"",rel:"noopener noreferrer"},Object(s.a)(e)))},D=i.a.createElement("div",{className:"uagb-team__social-icon-wrap"},i.a.createElement("ul",{className:"uagb-team__social-list"},""!=j&&W(j,R,C),""!=S&&W(S,B,C),""!=O&&W(O,L,C),""!=T&&W(T,A,C))),J=i.a.createElement("div",{className:"uagb-team__desc-wrap"},i.a.createElement(m.RichText,{tagName:"p",value:k,placeholder:Object(l.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-team__desc",onChange:function(e){return n({description_text:e})},onMerge:g,onSplit:b?function(e,t){n({content:e});for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];b([].concat(r,[Object(u.createBlock)("core/paragraph",{content:t})]))}:void 0,onRemove:function(){return p([])}})),P="",q="";E&&(P=E.sizes,q=E.sizes&&P[y]?P[y].url:E.url);var F="";return""!=q&&(F=i.a.createElement("div",{className:o()("uagb-team__image-wrap","uagb-team__image-crop-".concat(N))},i.a.createElement("img",{className:"",src:q,alt:E.alt?E.alt:""}))),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:o()(a,"uagb-team","uagb-team__outer-wrap","uagb-team__image-position-".concat(x),"uagb-team__align-".concat(_),"uagb-team__stack-".concat(z),"uagb-editor-preview-mode-".concat(d.toLowerCase()),"uagb-block-".concat(e.clientId.substr(0,8)))},i.a.createElement("div",{className:"uagb-team__wrap"},"left"==x&&F,i.a.createElement("div",{className:"uagb-team__content"},"above"==x&&F,M,J,I&&D),"right"==x&&F)))};t.default=i.a.memo(w)}}]);