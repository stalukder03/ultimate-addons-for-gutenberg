(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[5],{349:function(e,t,o){"use strict";var a=o(18),n=o.n(a)()((function(e){return e[1]}));n.push([e.i,"/**\r\n * Editor styles for the admin\r\n */\n#wpwrap .edit-post-visual-editor .uagb-blockquote__skin-quotation blockquote.uagb-blockquote {\n  vertical-align: baseline;\n  padding: 0;\n  margin: 0;\n  background: transparent;\n  border: 0 none;\n  outline: 0;\n  font-size: 100%;\n  font-style: normal;\n  quotes: none; }\n\n#wpwrap .edit-post-visual-editor blockquote.uagb-blockquote {\n  padding: 0;\n  margin: 0; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__skin-border blockquote {\n  padding-left: 10px; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__content,\n#wpwrap .edit-post-visual-editor cite.uagb-blockquote__author,\n#wpwrap .edit-post-visual-editor .uagb-blockquote__author {\n  font-style: normal; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote a {\n  box-shadow: none;\n  color: #1da1f2;\n  text-decoration: none;\n  -webkit-box-shadow: none; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button,\n#wpwrap .edit-post-visual-editor .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button {\n  color: #fff; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__align-center a.uagb-blockquote__tweet-button {\n  margin: 0 auto; }\n\n.uagb-editor-preview-mode-tablet .uagb-blockquote__stack-img-tablet footer {\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n  .uagb-editor-preview-mode-tablet .uagb-blockquote__stack-img-tablet footer .uagb-blockquote__tweet-button {\n    align-self: flex-start; }\n\n.uagb-editor-preview-mode-mobile .uagb-blockquote__stack-img-mobile footer {\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n  .uagb-editor-preview-mode-mobile .uagb-blockquote__stack-img-mobile footer .uagb-blockquote__tweet-button {\n    align-self: flex-start; }\n",""]),t.a=n},585:function(e,t,o){"use strict";o.r(t);var a,n=o(4),u=o.n(n),i=o(8),l=o(1),b=o.n(l),r=o(54),c=o(56),s=o(55),_=o(61),d=o(17),g=o.n(d),p=o(349),k=0,w={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=p.a.locals||{},m.use=function(){return k++||(a=g()(p.a,w)),m},m.unuse=function(){k>0&&!--k&&(a(),a=null)};var q=m;const f=e=>{Object(l.useLayoutEffect)(()=>(q.use(),()=>{q.unuse()}),[]),e=e.parentProps;const{className:t,setAttributes:o,attributes:a,deviceType:n}=e,{skinStyle:d,align:g,stack:p,quoteStyle:k,enableTweet:w,iconView:m,iconSkin:f,authorImage:v,authorImgPosition:y}=a;return b.a.createElement("div",{className:u()(t,"uagb-blockquote__outer-wrap","uagb-block-"+e.clientId.substr(0,8),"uagb-editor-preview-mode-"+n.toLowerCase())},b.a.createElement("div",{className:u()("uagb-blockquote__wrap","uagb-blockquote__skin-"+d,"border"!==d?"uagb-blockquote__align-"+g:"","quotation"===d?"uagb-blockquote__style-"+k:"",w?`uagb-blockquote__with-tweet uagb-blockquote__tweet-style-${f} uagb-blockquote__tweet-${m}`:"","uagb-blockquote__stack-img-"+p)},b.a.createElement("blockquote",{className:"uagb-blockquote"},"quotation"===d&&b.a.createElement("div",{className:"uagb-blockquote__icon-wrap"},b.a.createElement("span",{className:"uagb-blockquote__icon"},i.a.quote_inline_icon)," "),b.a.createElement("div",{className:"uagb-blockquote__content-wrap"},b.a.createElement(r.a,{attributes:a,setAttributes:o,props:e}),b.a.createElement("footer",null,b.a.createElement("div",{className:u()("uagb-blockquote__author-wrap",""!==v?"uagb-blockquote__author-at-"+y:"")},b.a.createElement(c.a,{attributes:a}),b.a.createElement(s.a,{attributes:a,setAttributes:o,props:e})),w&&b.a.createElement(_.a,{attributes:a}))))))};t.default=b.a.memo(f)}}]);