(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[18],{566:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a.n(n),c=a(14),r=a(1),l=a.n(r),m=a(25),o=a(2),s=a(7),u=a(5),d=function(e){var t=e=e.parentProps,a=t.setAttributes,n=t.insertBlocksAfter,r=t.mergeBlocks,d=t.onReplace,_=t.attributes,g=_.block_id,b=_.headingTag,v=_.timelinAlignment,p=_.icon,h=_.t_date,f=_.displayPostDate,w=_.dateFormat,N=_.time_heading,E=_.time_desc,k=_.content,j=!1,O=h;return"center"==v&&(j=!0),l.a.createElement("article",{className:i()("uagb-timeline__field uagb-timeline__field-wrap","uagb-timeline-child-".concat(g))},l.a.createElement("div",{className:e.attributes.content_class},l.a.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon"},l.a.createElement("span",{className:"uagb-timeline__icon-new uagb-timeline__out-view-icon "},Object(c.a)(p))),l.a.createElement("div",{className:e.attributes.dayalign_class},l.a.createElement("div",{className:"uagb-timeline__events-inner-new"},l.a.createElement("div",{className:"uagb-timeline__date-hide uagb-timeline__date-inner"},1!=f&&h&&l.a.createElement("div",{className:"uagb-timeline__inner-date-new"},"custom"!=w&&Object(m.dateI18n)(w,O)||O)),l.a.createElement("div",{className:"uagb-content"},l.a.createElement("div",{className:"uagb-timeline__heading-text"},l.a.createElement(u.RichText,{tagName:b,value:N,onChange:function(e){return a({time_heading:e})},placeholder:Object(o.__)("Write a Heading","ultimate-addons-for-gutenberg"),className:"uagb-timeline__heading",onMerge:r,onSplit:n?function(e,t){a({content:e});for(var i=arguments.length,c=new Array(i>2?i-2:0),r=2;r<i;r++)c[r-2]=arguments[r];n([].concat(c,[Object(s.createBlock)("core/paragraph",{content:t})]))}:void 0,onRemove:function(){return d([])}})),l.a.createElement(u.RichText,{tagName:"p",value:E,onChange:function(e){return a({time_desc:e})},placeholder:Object(o.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-timeline-desc-content",onMerge:r,onSplit:function(e,t){for(var i=arguments.length,c=new Array(i>2?i-2:0),r=2;r<i;r++)c[r-2]=arguments[r];t&&c.push(Object(s.createBlock)("core/paragraph",{content:t})),c.length&&n&&n(c),e?k!==e&&a({content:e}):d([])},onRemove:function(){return d([])}}),l.a.createElement("div",{className:"uagb-timeline__arrow"})))),j&&l.a.createElement("div",{className:"uagb-timeline__date-new"},1!=f&&h&&l.a.createElement("div",{className:"uagb-timeline__date-new"},"custom"!=w&&Object(m.dateI18n)(w,O)||O))))};t.default=l.a.memo(d)}}]);