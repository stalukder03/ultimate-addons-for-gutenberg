(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[5],{254:function(t,e,a){"use strict";var o=a(18),n=a.n(o)()((function(t){return t[1]}));n.push([t.i,"/**\r\n * Editor styles for the admin\r\n */\n#wpwrap .edit-post-visual-editor .uagb-blockquote__skin-quotation blockquote.uagb-blockquote {\n  vertical-align: baseline;\n  padding: 0;\n  margin: 0;\n  background: transparent;\n  border: 0 none;\n  outline: 0;\n  font-size: 100%;\n  font-style: normal;\n  quotes: none; }\n\n#wpwrap .edit-post-visual-editor blockquote.uagb-blockquote {\n  padding: 0;\n  margin: 0; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__skin-border blockquote {\n  padding-left: 10px; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__content,\n#wpwrap .edit-post-visual-editor cite.uagb-blockquote__author,\n#wpwrap .edit-post-visual-editor .uagb-blockquote__author {\n  font-style: normal; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote a {\n  box-shadow: none;\n  color: #1da1f2;\n  text-decoration: none;\n  -webkit-box-shadow: none; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button,\n#wpwrap .edit-post-visual-editor .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button {\n  color: #fff; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__align-center a.uagb-blockquote__tweet-button {\n  margin: 0 auto; }\n",""]),e.a=n},540:function(t,e,a){"use strict";a.r(e);var o,n=a(3),u=a.n(n),c=a(6),i=a(1),l=a.n(i),r=a(49),s=a(51),b=a(50),_=a(54),p=a(17),d=a.n(p),g=a(254),k=0,w={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},q={};q.locals=g.a.locals||{},q.use=function(){return k++||(o=d()(g.a,w)),q},q.unuse=function(){k>0&&!--k&&(o(),o=null)};var m=q,f=function(t){Object(i.useLayoutEffect)((function(){return m.use(),function(){m.unuse()}}),[]);var e=t=t.parentProps,a=e.className,o=e.setAttributes,n=e.attributes,p=n.skinStyle,d=n.align,g=n.stack,k=n.quoteStyle,w=n.enableTweet,q=n.iconView,f=n.iconSkin,v=n.authorImage,y=n.authorImgPosition;return l.a.createElement("div",{className:u()(a,"uagb-blockquote__outer-wrap","uagb-block-".concat(t.clientId.substr(0,8)))},l.a.createElement("div",{className:u()("uagb-blockquote__wrap","uagb-blockquote__skin-".concat(p),"border"!==p?"uagb-blockquote__align-".concat(d):"","quotation"===p?"uagb-blockquote__style-".concat(k):"",w?"uagb-blockquote__with-tweet uagb-blockquote__tweet-style-".concat(f," uagb-blockquote__tweet-").concat(q):"","uagb-blockquote__stack-img-".concat(g))},l.a.createElement("blockquote",{className:"uagb-blockquote"},"quotation"===p&&l.a.createElement("div",{className:"uagb-blockquote__icon-wrap"},l.a.createElement("span",{className:"uagb-blockquote__icon"},c.a.quote_inline_icon)," "),l.a.createElement("div",{className:"uagb-blockquote__content-wrap"},l.a.createElement(r.a,{attributes:n,setAttributes:o,props:t}),l.a.createElement("footer",null,l.a.createElement("div",{className:u()("uagb-blockquote__author-wrap",""!==v?"uagb-blockquote__author-at-".concat(y):"")},l.a.createElement(s.a,{attributes:n}),l.a.createElement(b.a,{attributes:n,setAttributes:o,props:t})),w&&l.a.createElement(_.a,{attributes:n}))))))};e.default=l.a.memo(f)}}]);