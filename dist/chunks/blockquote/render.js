(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[5],{305:function(e,t,o){"use strict";var n=o(16),a=o.n(n)()((function(e){return e[1]}));a.push([e.i,"/**\n * Editor styles for the admin\n */\n.editor-styles-wrapper .uagb-blockquote__skin-quotation blockquote.uagb-blockquote {\n  vertical-align: baseline;\n  padding: 0;\n  margin: 0;\n  background: transparent;\n  border: 0 none;\n  outline: 0;\n  font-size: 100%;\n  font-style: normal;\n  quotes: none; }\n\n.editor-styles-wrapper blockquote.uagb-blockquote {\n  padding: 0;\n  margin: 0; }\n\n.editor-styles-wrapper .uagb-blockquote__skin-border blockquote {\n  padding-left: 10px; }\n\n.editor-styles-wrapper .uagb-blockquote__content,\n.editor-styles-wrapper cite.uagb-blockquote__author,\n.editor-styles-wrapper .uagb-blockquote__author {\n  font-style: normal; }\n\n.editor-styles-wrapper .uagb-blockquote a {\n  box-shadow: none;\n  text-decoration: none;\n  -webkit-box-shadow: none; }\n\n.editor-styles-wrapper .uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button,\n.editor-styles-wrapper .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button {\n  color: #fff; }\n\n.editor-styles-wrapper .uagb-blockquote__align-center a.uagb-blockquote__tweet-button {\n  margin: 0 auto; }\n\n.uagb-editor-preview-mode-tablet .uagb-blockquote__stack-img-tablet footer {\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n  .uagb-editor-preview-mode-tablet .uagb-blockquote__stack-img-tablet footer .uagb-blockquote__tweet-button {\n    align-self: flex-start; }\n\n.uagb-editor-preview-mode-mobile .uagb-blockquote__stack-img-mobile footer {\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n  .uagb-editor-preview-mode-mobile .uagb-blockquote__stack-img-mobile footer .uagb-blockquote__tweet-button {\n    align-self: flex-start; }\n",""]),t.a=a},546:function(e,t,o){"use strict";o.r(t);var n,a=o(4),u=o.n(a),l=o(8),r=o(0),b=o.n(r),i=o(72),s=o(151),c=o(73),g=o(150),_=o(15),d=o.n(_),k=o(305),m=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},w={};w.locals=k.a.locals||{},w.use=function(){return m++||(n=d()(k.a,p)),w},w.unuse=function(){m>0&&!--m&&(n(),n=null)};var q=w,f=o(11);const y=e=>{Object(r.useLayoutEffect)(()=>(q.use(),()=>{q.unuse()}),[]),e=e.parentProps;const{className:t,setAttributes:o,attributes:n}=e,{isPreview:a,skinStyle:_,align:d,stack:k,quoteStyle:m,enableTweet:p,iconView:w,iconSkin:y,authorImage:h,authorImgPosition:v}=n,x=Object(f.a)(),E=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/blockquote.png";return a?b.a.createElement("img",{width:"100%",src:E,alt:""}):b.a.createElement("div",{className:u()(t,"uagb-block-"+e.clientId.substr(0,8),"uagb-editor-preview-mode-"+x.toLowerCase(),"uagb-blockquote__skin-"+_,"border"!==_?"uagb-blockquote__align-"+d:"","quotation"===_?"uagb-blockquote__style-"+m:"",p?`uagb-blockquote__with-tweet uagb-blockquote__tweet-style-${y} uagb-blockquote__tweet-${w}`:"","uagb-blockquote__stack-img-"+k)},b.a.createElement("blockquote",{className:"uagb-blockquote"},"quotation"===_&&b.a.createElement("span",{className:"uagb-blockquote__icon"},l.a.quote_inline_icon),b.a.createElement(i.a,{attributes:n,setAttributes:o,props:e}),b.a.createElement("footer",null,b.a.createElement("div",{className:u()("uagb-blockquote__author-wrap",""!==h?"uagb-blockquote__author-at-"+v:"")},b.a.createElement(s.a,{attributes:n}),b.a.createElement(c.a,{attributes:n,setAttributes:o,props:e})),p&&b.a.createElement(g.a,{attributes:n}))))};t.default=b.a.memo(y)}}]);