(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[64],{357:function(e,t,n){"use strict";var a=n(16),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,'.editor-styles-wrapper [data-type="uagb/inline-notice"] .uagb-notice-title {\n  margin: 0; }\n',""]),t.a=i},594:function(e,t,n){"use strict";n.r(t);var a,i=n(3),o=n.n(i),c=n(11),u=n(4),r=n(2),s=n(1),l=n.n(s),g=n(15),d=n.n(g),b=n(357),m=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=b.a.locals||{},_.use=function(){return m++||(a=d()(b.a,p)),_},_.unuse=function(){m>0&&!--m&&(a(),a=null)};var f=_,h=function(e){Object(s.useLayoutEffect)((function(){return f.use(),function(){f.unuse()}}),[]);var t=e=e.parentProps,n=t.attributes,a=n.block_id,i=n.icon,g=n.noticeTitle,d=n.noticeContent,b=n.noticeDismiss,m=n.noticeAlignment,p=n.headingTag,_=t.deviceType,h=t.setAttributes,v=t.className,w="";return b&&(w=l.a.createElement("span",{className:"uagb-notice-dismiss"},Object(c.a)(i))),l.a.createElement("div",{className:o()(v,"uagb-inline_notice__outer-wrap","".concat(b),"uagb-inline_notice__align-".concat(m),"uagb-block-".concat(a),"uagb-editor-preview-mode-".concat(_.toLowerCase()))},w,l.a.createElement(u.RichText,{tagName:p,placeholder:Object(r.__)("Notice Title","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:g,className:"uagb-notice-title",onChange:function(e){return h({noticeTitle:e})}}),l.a.createElement(u.RichText,{tagName:"div",multiline:"p",placeholder:Object(r.__)("Add Content…","ultimate-addons-for-gutenberg"),value:d,className:"uagb-notice-text",onChange:function(e){return h({noticeContent:e})}}))};t.default=l.a.memo(h)}}]);