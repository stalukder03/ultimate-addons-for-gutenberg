(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[64],{349:function(e,t,n){"use strict";var a=n(15),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,'.editor-styles-wrapper [data-type="uagb/inline-notice"] .uagb-notice-title {\n  margin: 0; }\n',""]),t.a=i},586:function(e,t,n){"use strict";n.r(t);var a,i=n(3),c=n.n(i),o=n(12),u=n(5),l=n(2),s=n(1),r=n.n(s),g=n(14),d=n.n(g),b=n(349),m=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=b.a.locals||{},p.use=function(){return m++||(a=d()(b.a,_)),p},p.unuse=function(){m>0&&!--m&&(a(),a=null)};var f=p,h=function(e){Object(s.useLayoutEffect)((function(){return f.use(),function(){f.unuse()}}),[]);var t=e=e.parentProps,n=t.attributes,a=n.block_id,i=n.icon,g=n.noticeTitle,d=n.noticeContent,b=n.noticeDismiss,m=n.noticeAlignment,_=n.headingTag,p=t.setAttributes,h=t.className,v="";return b&&(v=r.a.createElement("span",{className:"uagb-notice-dismiss"},Object(o.a)(i))),r.a.createElement("div",{className:c()(h,"uagb-inline_notice__outer-wrap","".concat(b),"uagb-inline_notice__align-".concat(m),"uagb-block-".concat(a))},v,r.a.createElement(u.RichText,{tagName:_,placeholder:Object(l.__)("Notice Title","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:g,className:"uagb-notice-title",onChange:function(e){return p({noticeTitle:e})}}),r.a.createElement(u.RichText,{tagName:"div",multiline:"p",placeholder:Object(l.__)("Add notice text…","ultimate-addons-for-gutenberg"),value:d,className:"uagb-notice-text",onChange:function(e){return p({noticeContent:e})}}))};t.default=r.a.memo(h)}}]);