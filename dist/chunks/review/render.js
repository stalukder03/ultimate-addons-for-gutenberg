(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[91],{230:function(e,t,a){"use strict";t.a=async function(e,t,a,r){const i=new Image;return i.addEventListener("load",(function(){t({imgTagHeight:this.naturalHeight}),t({imgTagWidth:this.naturalWidth})})),i.src=e,i.height}},317:function(e,t,a){"use strict";var r=a(16),i=a.n(r)()((function(e){return e[1]}));i.push([e.i,'.editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices {\n  padding: 8px 10px;\n  background-color: #fff8e5;\n  border-left: 5px solid #ffb901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices ul {\n    padding-bottom: 0;\n    margin: 0; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices h6 {\n    margin: 0;\n    font-size: inherit;\n    line-height: inherit; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices p {\n    margin: 15px 0 0;\n    color: #555d66;\n    font-size: inherit; }\n\n.editor-styles-wrapper [data-type="uagb/review"] .uagb_review_add_entry.dashicons.dashicons-plus-alt {\n  left: 50%;\n  width: 100%; }\n\n.editor-styles-wrapper [data-type="uagb/review"] .uagb_review_average_stars,\n.editor-styles-wrapper [data-type="uagb/review"] .uagb_review_entry .dashicons-trash {\n  float: right;\n  margin-left: 50px; }\n',""]),t.a=i},520:function(e,t,a){"use strict";a.r(t);var r,i=a(4),n=a.n(i),s=a(5),l=a(1),o=a(106),c=e=>{const{ID:t,items:a,summaryTitle:r,summaryDescription:i,starCount:n,setItems:c,setSummaryDescription:u,setSummaryTitle:m,setTitle:g,setDescription:d,setAuthorName:h,inactiveStarColor:v,activeStarColor:p,selectedStarColor:b,starOutlineColor:_,ctaTarget:w,ctaLink:y,setActiveStarIndex:S,rTitle:f,rContent:C,rAuthor:T,headingTag:E,image_icon_html:N,showfeature:R,imageEnabled:O,descriptionEnabled:k,showauthor:x}=e,{average:j}=e.state,D=a.map(e=>e.value).reduce((e,t)=>e+t)/a.length;j!==D&&e.setStateValue({average:D});let A="_self";return w&&(A="_blank"),React.createElement("div",{className:"uagb_review_block"},React.createElement("a",{href:y,className:"uagb-rating-link-wrapper",target:A,rel:"noopener noreferrer"},React.createElement(s.RichText,{tagName:E,placeholder:Object(l.__)("Title of the review","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:f,className:"uagb-rating-title",onChange:e=>g(e)})),!0===k&&React.createElement(s.RichText,{tagName:"p",placeholder:Object(l.__)("Review Description","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:C,className:"uagb-rating-desc",onChange:e=>d(e)}),!0===x&&React.createElement(s.RichText,{tagName:"p",placeholder:Object(l.__)("Review Author","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:T,className:"uagb-rating-author",onChange:e=>h(e)}),!0===O&&React.createElement("div",{className:"uagb-rating__source-wrap"},N),a.map((r,i)=>!0===R&&React.createElement("div",{className:"uagb_review_entry",key:i},React.createElement(s.RichText,{style:{marginRight:"auto"},placeholder:Object(l.__)("Edit feature"),value:r.label,onChange:e=>c([...a.slice(0,i),{label:e,value:r.value},...a.slice(i+1)])}),React.createElement("div",{style:{marginLeft:"auto",minWidth:a.length>1?120:100}},a.length>1&&React.createElement("div",{className:"dashicons dashicons-trash",onClick:()=>{const t=a.slice(0,i).concat(a.slice(i+1,a.length));c(t),e.setStateValue({average:t.map(e=>e.value).reduce((e,t)=>e+t)/t.length})}}),React.createElement(o.a,{id:`${t}-${i}`,key:i,value:r.value,limit:n,setValue:t=>{const n=[...a.slice(0,i),{label:r.label,value:t},...a.slice(i+1)];c(n),S(i),e.setStateValue({average:n.map(e=>e.value).reduce((e,t)=>e+t)/n.length})},inactiveStarColor:v,activeStarColor:p,selectedStarColor:b,starOutlineColor:_,state:e.starState,setStateValue:e.starSetStateValue})))),!0===R&&React.createElement("div",{title:Object(l.__)("Insert new review entry"),onClick:()=>{c([...a,{label:"",value:0}]),e.setStateValue({average:j/(a.length+1)})},className:"uagb_review_add_entry dashicons dashicons-plus-alt"}),React.createElement("div",{className:"uagb_review_summary"},React.createElement(s.RichText,{className:"uagb_review_summary_title",placeholder:Object(l.__)("Title of the summary goes here","ultimate-addons-for-gutenberg"),tagName:"p",onChange:e=>m(e),value:r}),React.createElement("div",{className:"uagb_review_overall_value"},React.createElement(s.RichText,{placeholder:Object(l.__)("Summary of the review goes here","ultimate-addons-for-gutenberg"),onChange:e=>u(e),value:i}),React.createElement("div",{className:"uagb_review_average"},React.createElement("span",{className:"uagb_review_rating"},Math.round(10*j)/10),React.createElement(o.a,{id:t+"-average",className:"uagb_review_average_stars",onHover:()=>null,onClick:()=>null,value:j,limit:n,inactiveStarColor:v,activeStarColor:p,selectedStarColor:b,starOutlineColor:_,state:e.starState,setStateValue:e.starSetStateValue})))))},u=a(0),m=a.n(u),g=a(15),d=a.n(g),h=a(317),v=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=h.a.locals||{},b.use=function(){return v++||(r=d()(h.a,p)),b},b.unuse=function(){v>0&&!--v&&(r(),r=null)};var _=b,w=a(11),y=a(230);const S=e=>{Object(u.useLayoutEffect)(()=>(_.use(),()=>{_.unuse()}),[]),e=e.parentProps;const t=Object(w.a)(),{attributes:{block_id:a,authorName:r,itemName:i,description:s,parts:l,starCount:o,summaryTitle:g,summaryDescription:d,inactiveStarColor:h,activeStarColor:v,ctaLink:p,ctaTarget:b,rTitle:S,rContent:f,rAuthor:C,headingTag:T,mainimage:E,imgSize:N,showFeature:R,showAuthor:O,starOutlineColor:k,enableDescription:x,enableImage:j,imgTagHeight:D,imgTagWidth:A},setAttributes:I,isSelected:V,className:z}=e,L={average:e.attributes.parts.map(e=>e.value).reduce((e,t)=>e+t)/e.attributes.parts.length},[F,H]=Object(u.useState)(L),P={displayValue:e.value,displayColor:e.activeStarColor},[W,J]=Object(u.useState)(P);let $="",M="";void 0!==e.attributes.mainimage&&null!==e.attributes.mainimage&&""!==e.attributes.mainimage&&($=e.attributes.mainimage.url,M=e.attributes.mainimage.title);let U="";if(""!==$){const t=e.attributes.mainimage.sizes,a=e.attributes.imgSize;U=void 0!==t&&void 0!==t[a]?t[a].url:$}Object(u.useEffect)(()=>{Object(y.a)(U,I)},[U]);let q="";return E&&E.url&&(q=m.a.createElement("img",{className:"uagb-review__source-image",src:U,title:M,alt:"",width:A,height:D,loading:"lazy"})),m.a.createElement("div",{className:n()(z,"uagb-ratings__outer-wrap","uagb-block-"+a.substr(0,8),"uagb-editor-preview-mode-"+t.toLowerCase())},m.a.createElement(c,{rTitle:S,setTitle:e=>I({rTitle:e}),ctaLink:p,ctaTarget:b,rContent:f,setDescription:e=>I({rContent:e}),rAuthor:C,setAuthorName:e=>I({rAuthor:e}),headingTag:T,mainimage:E,imgSize:N,image_icon_html:q,isSelected:V,authorName:r,itemName:i,description:s,descriptionEnabled:x,ID:a,imageEnabled:j,items:l,starCount:o,summaryTitle:g,summaryDescription:d,inactiveStarColor:h,activeStarColor:v,selectedStarColor:v,starOutlineColor:k,setItemName:e=>I({itemName:e}),setImage:e=>I({imgID:e.id,imgURL:e.url,imgAlt:e.alt}),setItems:e=>I({parts:e}),setSummaryTitle:e=>I({summaryTitle:e}),setSummaryDescription:e=>I({summaryDescription:e}),hasFocus:V,setEditable:e=>H({editable:e}),setActiveStarIndex:e=>H({editedStar:e}),showfeature:R,showauthor:O,state:F,setStateValue:H,starState:W,starSetStateValue:J}))};t.default=m.a.memo(S)}}]);