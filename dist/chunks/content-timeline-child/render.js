(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[21],{316:function(e,t,n){"use strict";var a=n(16),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,'/*\n  Content Timeline Child.\n*/\n#wpwrap .edit-post-visual-editor .block-editor-block-list__block[data-type="uagb/content-timeline-child"] {\n  padding-left: 0;\n  padding-right: 0; }\n',""]),t.a=i},559:function(e,t,n){"use strict";n.r(t);var a,i=n(4),l=n.n(i),c=n(13),o=n(0),r=n.n(o),s=n(15),u=n.n(s),m=n(316),d=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=m.a.locals||{},_.use=function(){return d++||(a=u()(m.a,g)),_},_.unuse=function(){d>0&&!--d&&(a(),a=null)};var b=_,p=n(23),h=n(1),f=n(6),v=n(5);const w=e=>{Object(o.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]),e=e.parentProps;const{setAttributes:t,insertBlocksAfter:n,mergeBlocks:a,onReplace:i,attributes:{block_id:s,headingTag:u,timelinAlignment:m,icon:d,t_date:g,displayPostDate:_,dateFormat:w,time_heading:k,time_desc:y,content:E}}=e;let N=!1;const j=g;return"center"===m&&(N=!0),r.a.createElement("article",{className:l()("wp-block-uagb-content-timeline-child uagb-timeline__field","uagb-timeline-child-"+s,e.attributes.content_class)},r.a.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon"},Object(c.a)(d)),r.a.createElement("div",{className:l()(e.attributes.dayalign_class,"uagb-timeline__events-inner-new")},!0!==_&&g&&r.a.createElement("div",{className:"uagb-timeline__date-hide uagb-timeline__inner-date-new"},"custom"!==w&&Object(p.format)(w,j)||j),r.a.createElement(v.RichText,{tagName:u,value:k,onChange:e=>t({time_heading:e}),placeholder:Object(h.__)("Write a Heading","ultimate-addons-for-gutenberg"),className:"uagb-timeline__heading",onMerge:a,onSplit:n?function(e,a){t({content:e});for(var i=arguments.length,l=new Array(i>2?i-2:0),c=2;c<i;c++)l[c-2]=arguments[c];n([...l,Object(f.createBlock)("core/paragraph",{content:a})])}:void 0,onRemove:()=>i([])}),r.a.createElement(v.RichText,{tagName:"p",value:y,onChange:e=>t({time_desc:e}),placeholder:Object(h.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-timeline-desc-content",onMerge:a,onSplit:function(e,a){for(var l=arguments.length,c=new Array(l>2?l-2:0),o=2;o<l;o++)c[o-2]=arguments[o];a&&c.push(Object(f.createBlock)("core/paragraph",{content:a})),c.length&&n&&n(c),e?E!==e&&t({content:e}):i([])},onRemove:()=>i([])}),r.a.createElement("div",{className:"uagb-timeline__arrow"})),N&&r.a.createElement("div",{className:"uagb-timeline__date-new"},!0!==_&&g&&r.a.createElement(r.a.Fragment,null,"custom"!==w&&Object(p.format)(w,j)||j)))};t.default=r.a.memo(w)}}]);