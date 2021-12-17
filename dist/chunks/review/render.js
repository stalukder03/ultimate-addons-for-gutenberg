(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[87],{368:function(e,t,a){"use strict";var r=a(19),i=a.n(r)()((function(e){return e[1]}));i.push([e.i,'.editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices {\n  padding: 8px 10px;\n  background-color: #fff8e5;\n  border-left: 5px solid #ffb901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices ul {\n    padding-bottom: 0;\n    margin: 0; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices h6 {\n    margin: 0;\n    font-size: inherit;\n    line-height: inherit; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices p {\n    margin: 15px 0 0;\n    color: #555d66;\n    font-size: inherit; }\n\n.dashicons.dashicons-plus-alt {\n  left: 50%;\n  width: 100%; }\n\n.dashicons.dashicons-trash {\n  margin-left: 50px; }\n\n.uagb_review_average_stars,\n.uagb_review_entry .dashicons-trash {\n  float: right; }\n',""]),t.a=i},581:function(e,t,a){"use strict";a.r(t);var r,i=a(4),s=a.n(i),n=a(5),l=a(2),o=a(81),c=e=>{const{ID:t,items:a,summaryTitle:r,summaryDescription:i,starCount:s,setItems:c,setSummaryDescription:u,setSummaryTitle:m,setTitle:g,setDescription:d,setAuthorName:h,inactiveStarColor:v,activeStarColor:b,selectedStarColor:p,starOutlineColor:_,ctaTarget:S,ctaLink:w,setActiveStarIndex:y,rTitle:f,rContent:C,rAuthor:N,headingTag:E,image_icon_html:R,showfeature:T,imageEnabled:k,descriptionEnabled:O,showauthor:x}=e,{average:D}=e.state,A=a.map(e=>e.value).reduce((e,t)=>e+t)/a.length;D!==A&&e.setStateValue({average:A});let V="_self";return S&&(V="_blank"),React.createElement("div",{className:"uagb_review_block"},React.createElement("a",{href:w,className:"uagb-rating-link-wrapper",target:V,rel:"noopener noreferrer"},React.createElement(n.RichText,{tagName:E,placeholder:Object(l.__)("Title of the review","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:f,className:"uagb-rating-title",onChange:e=>g(e)})),!0===O&&React.createElement(n.RichText,{tagName:"p",placeholder:Object(l.__)("Review Description","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:C,className:"uagb-rating-desc",onChange:e=>d(e)}),!0===x&&React.createElement(n.RichText,{tagName:"p",placeholder:Object(l.__)("Review Author","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:N,className:"uagb-rating-author",onChange:e=>h(e)}),!0===k&&React.createElement("div",{className:"uagb-rating__source-wrap"},R),a.map((r,i)=>!0===T&&React.createElement("div",{className:"uagb_review_entry",key:i},React.createElement(n.RichText,{style:{marginRight:"auto"},placeholder:Object(l.__)("Edit feature"),value:r.label,onChange:e=>c([...a.slice(0,i),{label:e,value:r.value},...a.slice(i+1)])}),React.createElement("div",{style:{marginLeft:"auto",minWidth:a.length>1?120:100}},a.length>1&&React.createElement("div",{className:"dashicons dashicons-trash",onClick:()=>{const t=a.slice(0,i).concat(a.slice(i+1,a.length));c(t),e.setStateValue({average:t.map(e=>e.value).reduce((e,t)=>e+t)/t.length})}}),React.createElement(o.a,{id:`${t}-${i}`,key:i,value:r.value,limit:s,setValue:t=>{const s=[...a.slice(0,i),{label:r.label,value:t},...a.slice(i+1)];c(s),y(i),e.setStateValue({average:s.map(e=>e.value).reduce((e,t)=>e+t)/s.length})},inactiveStarColor:v,activeStarColor:b,selectedStarColor:p,starOutlineColor:_,state:e.starState,setStateValue:e.starSetStateValue})))),!0===T&&React.createElement("div",{title:Object(l.__)("Insert new review entry"),onClick:()=>{c([...a,{label:"",value:0}]),e.setStateValue({average:D/(a.length+1)})},className:"uagb_review_add_entry dashicons dashicons-plus-alt"}),React.createElement("div",{className:"uagb_review_summary"},React.createElement(n.RichText,{className:"uagb_review_summary_title",placeholder:Object(l.__)("Title of the summary goes here","ultimate-addons-for-gutenberg"),tagName:"p",onChange:e=>m(e),value:r}),React.createElement("div",{className:"uagb_review_overall_value"},React.createElement(n.RichText,{placeholder:Object(l.__)("Summary of the review goes here","ultimate-addons-for-gutenberg"),onChange:e=>u(e),value:i}),React.createElement("div",{className:"uagb_review_average"},React.createElement("span",{className:"uagb_review_rating"},Math.round(10*D)/10),React.createElement(o.a,{id:t+"-average",className:"uagb_review_average_stars",onHover:()=>null,onClick:()=>null,value:D,limit:s,inactiveStarColor:v,activeStarColor:b,selectedStarColor:p,starOutlineColor:_,state:e.starState,setStateValue:e.starSetStateValue})))))},u=a(1),m=a.n(u),g=a(18),d=a.n(g),h=a(368),v=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=h.a.locals||{},p.use=function(){return v++||(r=d()(h.a,b)),p},p.unuse=function(){v>0&&!--v&&(r(),r=null)};var _=p;const S=e=>{Object(u.useLayoutEffect)(()=>(_.use(),()=>{_.unuse()}),[]),e=e.parentProps;const{attributes:{block_id:t,authorName:a,itemName:r,description:i,parts:n,starCount:l,summaryTitle:o,summaryDescription:g,inactiveStarColor:d,activeStarColor:h,ctaLink:v,ctaTarget:b,rTitle:p,rContent:S,rAuthor:w,headingTag:y,mainimage:f,imgSize:C,showFeature:N,showAuthor:E,starOutlineColor:R,enableDescription:T,enableImage:k},setAttributes:O,isSelected:x,className:D,deviceType:A}=e,V={average:e.attributes.parts.map(e=>e.value).reduce((e,t)=>e+t)/e.attributes.parts.length},[j,I]=Object(u.useState)(V),z={displayValue:e.value,displayColor:e.activeStarColor},[L,F]=Object(u.useState)(z);let P="",J="";void 0!==e.attributes.mainimage&&null!==e.attributes.mainimage&&""!==e.attributes.mainimage&&(P=e.attributes.mainimage.url,J=e.attributes.mainimage.title);let $="";if(""!==P){const t=e.attributes.mainimage.sizes,a=e.attributes.imgSize;$=void 0!==t&&void 0!==t[a]?t[a].url:P}let H="";return f&&f.url&&(H=m.a.createElement("img",{className:"uagb-review__source-image",src:$,title:J,alt:""})),m.a.createElement("div",{className:s()(D,"uagb-ratings__outer-wrap","uagb-block-"+t.substr(0,8),"uagb-editor-preview-mode-"+A.toLowerCase())},m.a.createElement(c,{rTitle:p,setTitle:e=>O({rTitle:e}),ctaLink:v,ctaTarget:b,rContent:S,setDescription:e=>O({rContent:e}),rAuthor:w,setAuthorName:e=>O({rAuthor:e}),headingTag:y,mainimage:f,imgSize:C,image_icon_html:H,isSelected:x,authorName:a,itemName:r,description:i,descriptionEnabled:T,ID:t,imageEnabled:k,items:n,starCount:l,summaryTitle:o,summaryDescription:g,inactiveStarColor:d,activeStarColor:h,selectedStarColor:h,starOutlineColor:R,setItemName:e=>O({itemName:e}),setImage:e=>O({imgID:e.id,imgURL:e.url,imgAlt:e.alt}),setItems:e=>O({parts:e}),setSummaryTitle:e=>O({summaryTitle:e}),setSummaryDescription:e=>O({summaryDescription:e}),hasFocus:x,setEditable:e=>I({editable:e}),setActiveStarIndex:e=>I({editedStar:e}),showfeature:N,showauthor:E,state:j,setStateValue:I,starState:L,starSetStateValue:F}))};t.default=m.a.memo(S)}}]);