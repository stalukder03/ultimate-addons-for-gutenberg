(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[21],{314:function(e,t,n){"use strict";var a=n(16),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,'/*\n  Content Timeline Child.\n*/\n#wpwrap .edit-post-visual-editor .block-editor-block-list__block[data-type="uagb/content-timeline-child"] {\n  padding-left: 0;\n  padding-right: 0; }\n',""]),t.a=i},557:function(e,t,n){"use strict";n.r(t);var a,i=n(4),l=n.n(i),c=n(13),o=n(0),r=n.n(o),s=n(15),m=n.n(s),u=n(314),d=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=u.a.locals||{},_.use=function(){return d++||(a=m()(u.a,g)),_},_.unuse=function(){d>0&&!--d&&(a(),a=null)};var b=_,p=n(26),h=n(1),f=n(11),v=n(6),w=n(5);const k=e=>{Object(o.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]),e=e.parentProps;const t=Object(f.a)(),{setAttributes:n,insertBlocksAfter:a,mergeBlocks:i,onReplace:s,attributes:m,attributes:{block_id:u,headingTag:d,icon:g,t_date:_,displayPostDate:k,dateFormat:E,time_heading:N,time_desc:j,content:y}}=e;let O=!1;const A=_;return"center"===(void 0!==m["timelinAlignment"+t]?m["timelinAlignment"+t]:m.timelinAlignment)&&(O=!0),r.a.createElement("article",{className:l()("wp-block-uagb-content-timeline-child uagb-timeline__field","uagb-timeline-child-"+u,e.attributes.content_class)},r.a.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon"},Object(c.a)(g)),r.a.createElement("div",{className:l()(e.attributes.dayalign_class,"uagb-timeline__events-inner-new")},r.a.createElement("div",{className:"uagb-timeline__events-inner--content"},!0!==k&&_&&r.a.createElement("div",{className:"uagb-timeline__date-hide uagb-timeline__inner-date-new"},"custom"!==E&&Object(p.format)(E,A)||A),r.a.createElement(w.RichText,{tagName:d,value:N,onChange:e=>n({time_heading:e}),placeholder:Object(h.__)("Write a Heading","ultimate-addons-for-gutenberg"),className:"uagb-timeline__heading",onMerge:i,onSplit:a?function(e,t){n({content:e});for(var i=arguments.length,l=new Array(i>2?i-2:0),c=2;c<i;c++)l[c-2]=arguments[c];a([...l,Object(v.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>s([])}),r.a.createElement(w.RichText,{tagName:"p",value:j,onChange:e=>n({time_desc:e}),placeholder:Object(h.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-timeline-desc-content",onMerge:i,onSplit:function(e,t){for(var i=arguments.length,l=new Array(i>2?i-2:0),c=2;c<i;c++)l[c-2]=arguments[c];t&&l.push(Object(v.createBlock)("core/paragraph",{content:t})),l.length&&a&&a(l),e?y!==e&&n({content:e}):s([])},onRemove:()=>s([])}),r.a.createElement("div",{className:"uagb-timeline__arrow"}))),O&&r.a.createElement("div",{className:"uagb-timeline__date-new"},!0!==k&&_&&r.a.createElement(r.a.Fragment,null,"custom"!==E&&Object(p.format)(E,A)||A)))};t.default=r.a.memo(k)}}]);