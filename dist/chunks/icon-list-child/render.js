(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[9],{262:function(e,a,t){"use strict";var n=t(12),i=t.n(n)()((function(e){return e[1]}));i.push([e.i,'.uagb-icon-list__wrap > .block-editor-inner-blocks {\n  width: 100%; }\n\n.wp-block.block-editor-block-list__block[data-type="uagb/icon-list-child"] {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.uagb-icon-list__layout-vertical .uagb-icon-list__wrap .block-list-appender {\n  margin-top: 28px;\n  width: 60px; }\n\n.uagb-icon-list__layout-horizontal .uagb-icon-list__wrap .block-list-appender {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 20px;\n  width: 52px;\n  height: 52px; }\n',""]),a.a=i},340:function(e,a,t){"use strict";t.r(a);var n,i=t(2),l=t.n(i),r=t(7),o=t(1),c=t(5),s=t(0),u=t.n(s),b=t(11),g=t.n(b),_=t(262),p=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=_.a.locals||{},d.use=function(){return p++||(n=g()(_.a,m)),d},d.unuse=function(){p>0&&!--p&&(n(),n=null)};var f=d;function w(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var h=function(e){var a;Object(s.useLayoutEffect)((function(){return f.use(),function(){f.unuse()}}),[]);var t=e=e.parentProps,n=t.attributes,i=t.setAttributes,b=n.className,g=n.label,_=n.image_icon,p=n.icon,m=n.image,d=n.block_id,h=n.link,k=n.target,v=n.disableLink,N=n.hideLabel,y="";"icon"==_?p&&(y=u.a.createElement("span",{className:"uagb-icon-list__source-icon"},Object(r.a)(p))):m&&m.url&&(y=u.a.createElement("img",{className:"uagb-icon-list__source-image",alt:"",src:m.url}));var E=k?"_blank":"_self",x=v?"/":h;return u.a.createElement("div",{className:l()("uagb-icon-list-repeater","uagb-icon-list__wrapper",b,"uagb-block-".concat(d))},!v&&u.a.createElement("a",{target:E,rel:"noopener noreferrer","aria-label":g,href:x}," "),u.a.createElement("div",{className:"uagb-icon-list__content-wrap"},u.a.createElement("span",{className:"uagb-icon-list__source-wrap"},y),!N&&""!=g&&u.a.createElement("div",{className:"uagb-icon-list__label-wrap"},u.a.createElement(c.RichText,(w(a={tagName:"div",placeholder:Object(o.__)("Label Name","ultimate-addons-for-gutenberg"),value:g,onChange:function(e){return i({label:e})},className:"uagb-icon-list__label"},"placeholder",Object(o.__)("Description")),w(a,"multiline",!1),w(a,"allowedFormats",["core/bold","core/italic","core/strikethrough"]),a)))))};a.default=u.a.memo(h)}}]);