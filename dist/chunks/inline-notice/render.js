(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[71],{291:function(e,t,n){"use strict";var a=n(14),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,'.editor-styles-wrapper [data-type="uagb/inline-notice"] .uagb-notice-title {\n  margin: 0; }\n\n.editor-styles-wrapper [data-type="uagb/inline-notice"] p.block-editor-rich-text__editable.uagb-notice-text.rich-text {\n  margin: 0; }\n',""]),t.a=i},535:function(e,t,n){"use strict";n.r(t);var a,i=n(3),o=n.n(i),c=n(11),l=n(4),r=n(1),s=n(0),u=n.n(s),d=n(13),g=n.n(d),b=n(291),m=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:function(e){let t=document.querySelector("#sepctra-frame"),n=!1;n=t?t.contentWindow.document.head:document.head,n&&n.appendChild(e),window._lastElementInsertedByStyleLoader=e},singleton:!0},_={};_.locals=b.a.locals||{},_.use=function(){return m++||(a=g()(b.a,p)),_},_.unuse=function(){m>0&&!--m&&(a(),a=null)};var h=_,w=n(10);const f=e=>{Object(s.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]),e=e.parentProps;const t=Object(w.a)(),{attributes:{isPreview:n,block_id:a,icon:i,noticeTitle:d,noticeContent:g,noticeDismiss:b,noticeAlignment:m,headingTag:p},setAttributes:_,className:f}=e;let y="";b&&(y=Object(c.a)(i));const v=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/inline-notice.png";return n?u.a.createElement("img",{width:"100%",src:v,alt:""}):u.a.createElement("div",{className:o()(f,""+b,"uagb-inline_notice__align-"+m,"uagb-block-"+a,"uagb-editor-preview-mode-"+t.toLowerCase())},y,u.a.createElement(l.RichText,{tagName:p,placeholder:Object(r.__)("Notice Title","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:d,className:"uagb-notice-title",onChange:e=>_({noticeTitle:e})}),u.a.createElement(l.RichText,{tagName:"div",multiline:"p",placeholder:Object(r.__)("Add Content…","ultimate-addons-for-gutenberg"),value:g,className:"uagb-notice-text",onChange:e=>_({noticeContent:e})}))};t.default=u.a.memo(f)}}]);