(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[68],{346:function(t,e,n){"use strict";var a=n(15),i=n.n(a)()((function(t){return t[1]}));i.push([t.i,"/**\r\n * Editor styles for the admin\r\n */\np.uagb-marketing-btn__prefix.block-editor-rich-text__editable {\n  margin: 0 !important; }\n\n#wpwrap .edit-post-visual-editor a.uagb-marketing-btn__link {\n  pointer-events: all; }\n\n.uagb-marketing-btn__align-text-center .uagb-marketing-btn__link {\n  text-align: center; }\n\n.uagb-marketing-btn__align-text-left .uagb-marketing-btn__link {\n  text-align: left; }\n\n.uagb-marketing-btn__align-text-right .uagb-marketing-btn__link {\n  text-align: right; }\n",""]),e.a=i},584:function(t,e,n){"use strict";n.r(e);var a,i=n(3),r=n.n(i),o=n(12),l=n(1),c=n.n(l),g=n(2),u=n(5),s=n(14),b=n.n(s),m=n(346),_=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=m.a.locals||{},p.use=function(){return _++||(a=b()(m.a,d)),p},p.unuse=function(){_>0&&!--_&&(a(),a=null)};var k=p,f=function(t){Object(l.useLayoutEffect)((function(){return k.use(),function(){k.unuse()}}),[]);var e=t=t.parentProps,n=e.attributes,a=e.setAttributes,i=e.className,s=e.deviceType,b=e.mergeBlocks,m=e.insertBlocksAfter,_=e.createBlock,d=e.onReplace,p=n.block_id,f=n.align,h=n.textAlign,v=n.heading,w=n.prefix,x=n.icon,N=n.iconPosition,E=n.titleTag;return c.a.createElement("div",{className:r()(i,"uagb-marketing-btn__outer-wrap","uagb-marketing-btn__align-".concat(f),"uagb-marketing-btn__align-text-".concat(h),"uagb-marketing-btn__icon-".concat(N),"uagb-editor-preview-mode-".concat(s.toLowerCase()),"uagb-block-".concat(p))},c.a.createElement("div",{className:"uagb-marketing-btn__wrap"},c.a.createElement("a",{className:"uagb-marketing-btn__link"},c.a.createElement("div",{className:"uagb-marketing-btn__title-wrap"},""!==x&&c.a.createElement("div",{className:"uagb-marketing-btn__icon-wrap"},Object(o.a)(x)),c.a.createElement(u.RichText,{placeholder:Object(g.__)("Add Button Title…","ultimate-addons-for-gutenberg"),value:v,tagName:E,onChange:function(t){return a({heading:t})},allowedFormats:["bold","italic","strikethrough"],className:"uagb-marketing-btn__title",onRemove:function(){return d([])},multiline:!1,onMerge:b,onSplit:m?function(t,e){a({content:t});for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];m([].concat(i,[_("core/paragraph",{content:e})]))}:void 0})),c.a.createElement("div",{className:"uagb-marketing-btn__prefix-wrap"},c.a.createElement(u.RichText,{placeholder:Object(g.__)("Add Button Description…","ultimate-addons-for-gutenberg"),value:w,tagName:"p",onChange:function(t){return a({prefix:t})},allowedFormats:["bold","italic","strikethrough"],className:"uagb-marketing-btn__prefix",onRemove:function(){return d([])},multiline:!1,onMerge:b,onSplit:m?function(t,e){a({content:t});for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];m([].concat(i,[_("core/paragraph",{content:e})]))}:void 0})))))};e.default=c.a.memo(f)}}]);