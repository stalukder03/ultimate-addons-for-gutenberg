(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[71],{321:function(e,t,n){"use strict";var a=n(19),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,"/**\r\n * Editor styles for the admin\r\n */\np.uagb-marketing-btn__prefix.block-editor-rich-text__editable {\n  margin-bottom: 0 !important; }\n\n#wpwrap .edit-post-visual-editor a.uagb-marketing-btn__link {\n  pointer-events: all; }\n\n.uagb-marketing-btn__align-text-center .uagb-marketing-btn__link {\n  text-align: center; }\n\n.uagb-marketing-btn__align-text-left .uagb-marketing-btn__link {\n  text-align: left; }\n\n.uagb-marketing-btn__align-text-right .uagb-marketing-btn__link {\n  text-align: right; }\n",""]),t.a=i},510:function(e,t,n){"use strict";n.r(t);var a,i=n(4),r=n.n(i),l=n(12),o=n(1),g=n.n(o),u=n(2),c=n(5),b=n(18),s=n.n(b),m=n(321),_=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=m.a.locals||{},p.use=function(){return _++||(a=s()(m.a,d)),p},p.unuse=function(){_>0&&!--_&&(a(),a=null)};var k=p;const f=e=>{Object(o.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const{attributes:t,setAttributes:n,className:a,deviceType:i,mergeBlocks:b,insertBlocksAfter:s,createBlock:m,onReplace:_}=e,{block_id:d,align:p,textAlign:f,heading:h,prefix:x,icon:v,iconPosition:w,titleTag:E}=t,y=g.a.createElement(g.a.Fragment,null,""!==v&&Object(l.a)(v)),N=g.a.createElement(g.a.Fragment,null,g.a.createElement(c.RichText,{placeholder:Object(u.__)("Add Button Title…","ultimate-addons-for-gutenberg"),value:h,tagName:E,onChange:e=>n({heading:e}),allowedFormats:["bold","italic","strikethrough"],className:"uagb-marketing-btn__title",onRemove:()=>_([]),multiline:!1,onMerge:b,onSplit:s?(e,t,...a)=>{n({content:e}),s([...a,m("core/paragraph",{content:t})])}:void 0}));return g.a.createElement("div",{className:r()(a,"uagb-marketing-btn__align-"+p,"uagb-marketing-btn__align-text-"+f,"uagb-marketing-btn__icon-"+w,"uagb-editor-preview-mode-"+i.toLowerCase(),"uagb-block-"+d,"wp-block-button")},g.a.createElement("a",{className:"uagb-marketing-btn__link wp-block-button__link"},"before"===w&&g.a.createElement(g.a.Fragment,null,y,N),"after"===w&&g.a.createElement(g.a.Fragment,null,N,y),g.a.createElement(c.RichText,{placeholder:Object(u.__)("Add Button Description…","ultimate-addons-for-gutenberg"),value:x,tagName:"p",onChange:e=>n({prefix:e}),allowedFormats:["bold","italic","strikethrough"],className:"uagb-marketing-btn__prefix",onRemove:()=>_([]),multiline:!1,onMerge:b,onSplit:s?(e,t,...a)=>{n({content:e}),s([...a,m("core/paragraph",{content:t})])}:void 0})))};t.default=g.a.memo(f)}}]);