(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[67],{246:function(e,t,n){"use strict";var a=n(19),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,'.editor-styles-wrapper [data-type="uagb/inline-notice"] .uagb-notice-title {\n  margin: 0; }\n\n.editor-styles-wrapper [data-type="uagb/inline-notice"] p.block-editor-rich-text__editable.uagb-notice-text.rich-text {\n  margin: 0; }\n',""]),t.a=i},484:function(e,t,n){"use strict";n.r(t);var a,i=n(4),o=n.n(i),c=n(12),l=n(5),r=n(2),s=n(1),u=n.n(s),d=n(18),g=n.n(d),b=n(246),m=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=b.a.locals||{},_.use=function(){return m++||(a=g()(b.a,p)),_},_.unuse=function(){m>0&&!--m&&(a(),a=null)};var h=_,f=n(24);const w=e=>{Object(s.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]),e=e.parentProps;const t=Object(f.a)(),{attributes:{block_id:n,icon:a,noticeTitle:i,noticeContent:d,noticeDismiss:g,noticeAlignment:b,headingTag:m},setAttributes:p,className:_}=e;let w="";return g&&(w=Object(c.a)(a)),u.a.createElement("div",{className:o()(_,""+g,"uagb-inline_notice__align-"+b,"uagb-block-"+n,"uagb-editor-preview-mode-"+t.toLowerCase())},w,u.a.createElement(l.RichText,{tagName:m,placeholder:Object(r.__)("Notice Title","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:i,className:"uagb-notice-title",onChange:e=>p({noticeTitle:e})}),u.a.createElement(l.RichText,{tagName:"div",multiline:"p",placeholder:Object(r.__)("Add Content…","ultimate-addons-for-gutenberg"),value:d,className:"uagb-notice-text",onChange:e=>p({noticeContent:e})}))};t.default=u.a.memo(w)}}]);