(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[67],{366:function(e,t,n){"use strict";var a=n(19),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,'.editor-styles-wrapper [data-type="uagb/inline-notice"] .uagb-notice-title {\n  margin: 0; }\n\n.editor-styles-wrapper [data-type="uagb/inline-notice"] p.block-editor-rich-text__editable.uagb-notice-text.rich-text {\n  margin: 0; }\n',""]),t.a=i},603:function(e,t,n){"use strict";n.r(t);var a,i=n(4),o=n.n(i),c=n(12),l=n(5),r=n(2),s=n(1),u=n.n(s),d=n(18),g=n.n(d),b=n(366),p=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=b.a.locals||{},_.use=function(){return p++||(a=g()(b.a,m)),_},_.unuse=function(){p>0&&!--p&&(a(),a=null)};var h=_;const f=e=>{Object(s.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]),e=e.parentProps;const{attributes:{block_id:t,icon:n,noticeTitle:a,noticeContent:i,noticeDismiss:d,noticeAlignment:g,headingTag:b},deviceType:p,setAttributes:m,className:_}=e;let f="";return d&&(f=Object(c.a)(n)),u.a.createElement("div",{className:o()(_,""+d,"uagb-inline_notice__align-"+g,"uagb-block-"+t,"uagb-editor-preview-mode-"+p.toLowerCase())},f,u.a.createElement(l.RichText,{tagName:b,placeholder:Object(r.__)("Notice Title","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:a,className:"uagb-notice-title",onChange:e=>m({noticeTitle:e})}),u.a.createElement(l.RichText,{tagName:"div",multiline:"p",placeholder:Object(r.__)("Add Content…","ultimate-addons-for-gutenberg"),value:i,className:"uagb-notice-text",onChange:e=>m({noticeContent:e})}))};t.default=u.a.memo(f)}}]);