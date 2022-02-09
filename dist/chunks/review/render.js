(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[91],{251:function(e,t,a){"use strict";var r=a(15),i=a.n(r)()((function(e){return e[1]}));i.push([e.i,'.editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices {\n  padding: 8px 10px;\n  background-color: #fff8e5;\n  border-left: 5px solid #ffb901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices ul {\n    padding-bottom: 0;\n    margin: 0; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices h6 {\n    margin: 0;\n    font-size: inherit;\n    line-height: inherit; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices p {\n    margin: 15px 0 0;\n    color: #555d66;\n    font-size: inherit; }\n\n.editor-styles-wrapper [data-type="uagb/review"] .uagb_review_add_entry.dashicons.dashicons-plus-alt {\n  left: 50%;\n  width: 100%; }\n\n.editor-styles-wrapper [data-type="uagb/review"] .uagb_review_average_stars,\n.editor-styles-wrapper [data-type="uagb/review"] .uagb_review_entry .dashicons-trash {\n  float: right;\n  margin-left: 50px; }\n',""]),t.a=i},456:function(e,t,a){"use strict";a.r(t);var r,i=a(3),l=a.n(i),s=a(4),n=a(1),o=a(63),c=e=>{const{ID:t,items:a,summaryTitle:r,summaryDescription:i,starCount:l,setItems:c,setSummaryDescription:u,setSummaryTitle:m,setTitle:g,setDescription:d,setAuthorName:h,inactiveStarColor:p,activeStarColor:v,selectedStarColor:b,starOutlineColor:_,ctaTarget:w,ctaLink:S,setActiveStarIndex:y,rTitle:f,rContent:C,rAuthor:N,headingTag:E,image_icon_html:R,showfeature:T,imageEnabled:k,descriptionEnabled:O,showauthor:x}=e,{average:D}=e.state,j=a.map(e=>e.value).reduce((e,t)=>e+t)/a.length;D!==j&&e.setStateValue({average:j});let A="_self";return w&&(A="_blank"),React.createElement("div",{className:"uagb_review_block"},React.createElement("a",{href:S,className:"uagb-rating-link-wrapper",target:A,rel:"noopener noreferrer"},React.createElement(s.RichText,{tagName:E,placeholder:Object(n.__)("Title of the review","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:f,className:"uagb-rating-title",onChange:e=>g(e)})),!0===O&&React.createElement(s.RichText,{tagName:"p",placeholder:Object(n.__)("Review Description","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:C,className:"uagb-rating-desc",onChange:e=>d(e)}),!0===x&&React.createElement(s.RichText,{tagName:"p",placeholder:Object(n.__)("Review Author","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:N,className:"uagb-rating-author",onChange:e=>h(e)}),!0===k&&React.createElement("div",{className:"uagb-rating__source-wrap"},R),a.map((r,i)=>!0===T&&React.createElement("div",{className:"uagb_review_entry",key:i},React.createElement(s.RichText,{style:{marginRight:"auto"},placeholder:Object(n.__)("Edit feature"),value:r.label,onChange:e=>c([...a.slice(0,i),{label:e,value:r.value},...a.slice(i+1)])}),React.createElement("div",{style:{marginLeft:"auto",minWidth:a.length>1?120:100}},a.length>1&&React.createElement("div",{className:"dashicons dashicons-trash",onClick:()=>{const t=a.slice(0,i).concat(a.slice(i+1,a.length));c(t),e.setStateValue({average:t.map(e=>e.value).reduce((e,t)=>e+t)/t.length})}}),React.createElement(o.a,{id:`${t}-${i}`,key:i,value:r.value,limit:l,setValue:t=>{const l=[...a.slice(0,i),{label:r.label,value:t},...a.slice(i+1)];c(l),y(i),e.setStateValue({average:l.map(e=>e.value).reduce((e,t)=>e+t)/l.length})},inactiveStarColor:p,activeStarColor:v,selectedStarColor:b,starOutlineColor:_,state:e.starState,setStateValue:e.starSetStateValue})))),!0===T&&React.createElement("div",{title:Object(n.__)("Insert new review entry"),onClick:()=>{c([...a,{label:"",value:0}]),e.setStateValue({average:D/(a.length+1)})},className:"uagb_review_add_entry dashicons dashicons-plus-alt"}),React.createElement("div",{className:"uagb_review_summary"},React.createElement(s.RichText,{className:"uagb_review_summary_title",placeholder:Object(n.__)("Title of the summary goes here","ultimate-addons-for-gutenberg"),tagName:"p",onChange:e=>m(e),value:r}),React.createElement("div",{className:"uagb_review_overall_value"},React.createElement(s.RichText,{placeholder:Object(n.__)("Summary of the review goes here","ultimate-addons-for-gutenberg"),onChange:e=>u(e),value:i}),React.createElement("div",{className:"uagb_review_average"},React.createElement("span",{className:"uagb_review_rating"},Math.round(10*D)/10),React.createElement(o.a,{id:t+"-average",className:"uagb_review_average_stars",onHover:()=>null,onClick:()=>null,value:D,limit:l,inactiveStarColor:p,activeStarColor:v,selectedStarColor:b,starOutlineColor:_,state:e.starState,setStateValue:e.starSetStateValue})))))},u=a(0),m=a.n(u),g=a(14),d=a.n(g),h=a(251),p=0,v={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=h.a.locals||{},b.use=function(){return p++||(r=d()(h.a,v)),b},b.unuse=function(){p>0&&!--p&&(r(),r=null)};var _=b,w=a(10);const S=e=>{Object(u.useLayoutEffect)(()=>(_.use(),()=>{_.unuse()}),[]),e=e.parentProps;const t=Object(w.a)(),{attributes:{block_id:a,authorName:r,itemName:i,description:s,parts:n,starCount:o,summaryTitle:g,summaryDescription:d,inactiveStarColor:h,activeStarColor:p,ctaLink:v,ctaTarget:b,rTitle:S,rContent:y,rAuthor:f,headingTag:C,mainimage:N,imgSize:E,showFeature:R,showAuthor:T,starOutlineColor:k,enableDescription:O,enableImage:x},setAttributes:D,isSelected:j,className:A}=e,V={average:e.attributes.parts.map(e=>e.value).reduce((e,t)=>e+t)/e.attributes.parts.length},[I,z]=Object(u.useState)(V),L={displayValue:e.value,displayColor:e.activeStarColor},[F,P]=Object(u.useState)(L);let J="",$="";void 0!==e.attributes.mainimage&&null!==e.attributes.mainimage&&""!==e.attributes.mainimage&&(J=e.attributes.mainimage.url,$=e.attributes.mainimage.title);let H="";if(""!==J){const t=e.attributes.mainimage.sizes,a=e.attributes.imgSize;H=void 0!==t&&void 0!==t[a]?t[a].url:J}let M="";return N&&N.url&&(M=m.a.createElement("img",{className:"uagb-review__source-image",src:H,title:$,alt:""})),m.a.createElement("div",{className:l()(A,"uagb-ratings__outer-wrap","uagb-block-"+a.substr(0,8),"uagb-editor-preview-mode-"+t.toLowerCase())},m.a.createElement(c,{rTitle:S,setTitle:e=>D({rTitle:e}),ctaLink:v,ctaTarget:b,rContent:y,setDescription:e=>D({rContent:e}),rAuthor:f,setAuthorName:e=>D({rAuthor:e}),headingTag:C,mainimage:N,imgSize:E,image_icon_html:M,isSelected:j,authorName:r,itemName:i,description:s,descriptionEnabled:O,ID:a,imageEnabled:x,items:n,starCount:o,summaryTitle:g,summaryDescription:d,inactiveStarColor:h,activeStarColor:p,selectedStarColor:p,starOutlineColor:k,setItemName:e=>D({itemName:e}),setImage:e=>D({imgID:e.id,imgURL:e.url,imgAlt:e.alt}),setItems:e=>D({parts:e}),setSummaryTitle:e=>D({summaryTitle:e}),setSummaryDescription:e=>D({summaryDescription:e}),hasFocus:j,setEditable:e=>z({editable:e}),setActiveStarIndex:e=>z({editedStar:e}),showfeature:R,showauthor:T,state:I,setStateValue:z,starState:F,starSetStateValue:P}))};t.default=m.a.memo(S)}}]);