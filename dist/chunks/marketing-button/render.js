(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[75],{301:function(e,t,n){"use strict";var a=n(17),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,"/**\n * Editor styles for the admin\n */\np.uagb-marketing-btn__prefix.block-editor-rich-text__editable {\n  margin-bottom: 0 !important; }\n\n#wpwrap .edit-post-visual-editor a.uagb-marketing-btn__link {\n  pointer-events: all; }\n\n.uagb-marketing-btn__align-text-center .uagb-marketing-btn__link {\n  text-align: center; }\n\n.uagb-marketing-btn__align-text-left .uagb-marketing-btn__link {\n  text-align: left; }\n\n.uagb-marketing-btn__align-text-right .uagb-marketing-btn__link {\n  text-align: right; }\n",""]),t.a=i},545:function(e,t,n){"use strict";n.r(t);var a,i=n(3),r=n.n(i),l=n(11),o=n(0),g=n.n(o),u=n(1),c=n(4),s=n(16),b=n.n(s),m=n(301),_=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=m.a.locals||{},p.use=function(){return _++||(a=b()(m.a,d)),p},p.unuse=function(){_>0&&!--_&&(a(),a=null)};var k=p,f=n(10);const h=e=>{Object(o.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const t=Object(f.a)(),{attributes:n,setAttributes:a,className:i,mergeBlocks:s,insertBlocksAfter:b,createBlock:m,onReplace:_}=e,{isPreview:d,block_id:p,align:h,textAlign:w,heading:v,prefix:x,icon:E,iconPosition:y,titleTag:A,showDescription:N}=n,j=g.a.createElement(g.a.Fragment,null,""!==E&&Object(l.a)(E)),F=g.a.createElement(g.a.Fragment,null,g.a.createElement(c.RichText,{placeholder:Object(u.__)("Add Button Title…","ultimate-addons-for-gutenberg"),value:v,tagName:A,onChange:e=>a({heading:e}),allowedFormats:["bold","italic","strikethrough"],className:"uagb-marketing-btn__title",onRemove:()=>_([]),multiline:!1,onMerge:s,onSplit:b?function(e,t){a({content:e});for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];b([...i,m("core/paragraph",{content:t})])}:void 0})),T=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/marketing-button.png";return d?g.a.createElement("img",{width:"100%",src:T,alt:""}):g.a.createElement("div",{className:r()(i,"uagb-marketing-btn__align-"+h,"uagb-marketing-btn__align-text-"+w,"uagb-marketing-btn__icon-"+y,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+p,"wp-block-button")},g.a.createElement("a",{className:"uagb-marketing-btn__link wp-block-button__link"},"before"===y&&g.a.createElement(g.a.Fragment,null,j,F),"after"===y&&g.a.createElement(g.a.Fragment,null,F,j),N&&g.a.createElement(c.RichText,{placeholder:Object(u.__)("Add Button Description…","ultimate-addons-for-gutenberg"),value:x,tagName:"p",onChange:e=>a({prefix:e}),allowedFormats:["bold","italic","strikethrough"],className:"uagb-marketing-btn__prefix",onRemove:()=>_([]),multiline:!1,onMerge:s,onSplit:b?function(e,t){a({content:e});for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];b([...i,m("core/paragraph",{content:t})])}:void 0})))};t.default=g.a.memo(h)}}]);