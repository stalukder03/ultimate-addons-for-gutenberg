(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[59],{230:function(e,t,a){"use strict";t.a=async function(e,t,a,o){const n=new Image;return n.addEventListener("load",(function(){t({imgTagHeight:this.naturalHeight}),t({imgTagWidth:this.naturalWidth})})),n.src=e,n.height}},308:function(e,t,a){"use strict";var o=a(16),n=a.n(o)()((function(e){return e[1]}));n.push([e.i,'.editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices {\n  padding: 8px 10px;\n  background-color: #fff8e5;\n  border-left: 5px solid #ffb901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices ul {\n    padding-bottom: 0;\n    margin: 0; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices h6 {\n    margin: 0;\n    font-size: inherit;\n    line-height: inherit; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices p {\n    margin: 15px 0 0;\n    color: #555d66;\n    font-size: inherit; }\n\n.editor-styles-wrapper [data-type="uagb/how-to"] .wp-block {\n  margin: 0;\n  max-width: unset; }\n\n.wp-block-uagb-how-to .block-editor-button-block-appender {\n  width: 10%;\n  margin-top: 0;\n  margin-left: 20px; }\n\n.editor-styles-wrapper .uagb-howto__time-wrap h3,\n.editor-styles-wrapper .uagb-howto__cost-wrap h3,\n.editor-styles-wrapper .uagb-how-to-tools__wrap h3,\n.editor-styles-wrapper .uagb-how-to-steps__wrap h3 {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.editor-styles-wrapper .uagb-howto__time-wrap p,\n.editor-styles-wrapper .uagb-howto__cost-wrap p,\n.editor-styles-wrapper .uagb-how-to-tools__wrap p,\n.editor-styles-wrapper .uagb-how-to-steps__wrap p {\n  margin-top: 25px; }\n',""]),t.a=n},549:function(e,t,a){"use strict";a.r(t);var o,n=a(4),r=a.n(n),i=(a(130),a(1)),l=a(6),s=a(5),c=a(0),m=a.n(c),u=a(15),g=a.n(u),d=a(308),b=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return b++||(o=g()(d.a,h)),p},p.unuse=function(){b>0&&!--b&&(o(),o=null)};var w=p,_=a(11),f=a(3),N=a(230),j=["uagb/how-to-step"];"yes"===uagb_blocks_info.uagb_old_user_less_than_2&&(j=["uagb/info-box","uagb/how-to-step"]);const v=e=>{Object(c.useLayoutEffect)(()=>(w.use(),()=>{w.unuse()}),[]);const t=(e=e.parentProps).name.replace("uagb/",""),a=Object(_.a)(),{className:o,attributes:n,setAttributes:u,insertBlocksAfter:g,mergeBlocks:d,onReplace:b,attributes:{currencyType:h,showEstcost:p,showTotaltime:v,showMaterials:O,showTools:y,toolsTitle:x,materialTitle:E,stepsTitle:T,tools:I,materials:k,timeNeeded:M,estCost:R,mainimage:S,headingTitle:C,headingDesc:H,headingTag:q,time:F,cost:D,timeInMins:z,timeInHours:B,timeInDays:L,timeInMonths:Y,timeInYears:A,imgTagHeight:U,imgTagWidth:W}}=e,G=function(e,t){for(var a=arguments.length,o=new Array(a>2?a-2:0),r=2;r<a;r++)o[r-2]=arguments[r];t&&o.push(Object(l.createBlock)("core/paragraph",{content:t})),o.length&&g&&g(o);const{content:i}=n;e?i!==e&&u({content:e}):b([])};let J="",P="",K="";if(void 0!==n.mainimage&&null!==n.mainimage&&""!==n.mainimage&&(J=n.mainimage.url,P=n.mainimage.title),""!==J){const e=n.mainimage.sizes,t=n.imgSize;K=void 0!==e&&void 0!==e[t]?e[t].url:J}let Q="";Object(c.useEffect)(()=>{Object(N.a)(K,u)},[n.imgSize]),S&&S.url&&(Q=m.a.createElement("img",{className:"uagb-howto__source-image",src:K,title:P,alt:"",width:W,height:U,loading:"lazy"}));const V=Object(f.b)(z,"timeInMins",t)?Object(f.b)(z,"timeInMins",t):F,X=[["uagb/how-to-step",{name:"Step 1",description:Object(i.__)("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.","ultimate-addons-for-gutenberg")}],["uagb/how-to-step",{name:"Step 2",description:Object(i.__)("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.","ultimate-addons-for-gutenberg")}],["uagb/how-to-step",{name:"Step 3",description:Object(i.__)("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.","ultimate-addons-for-gutenberg")}]],Z=Object(f.b)(A,"timeInYears",t)>1?Object(i.__)("Years","ultimate-addons-for-gutenberg"):Object(i.__)("Year","ultimate-addons-for-gutenberg"),$=Object(f.b)(Y,"timeInMonths",t)>1?Object(i.__)(" Months ","ultimate-addons-for-gutenberg"):Object(i.__)(" Month ","ultimate-addons-for-gutenberg"),ee=Object(f.b)(L,"timeInDays",t)>1?Object(i.__)(" Days ","ultimate-addons-for-gutenberg"):Object(i.__)(" Day ","ultimate-addons-for-gutenberg"),te=Object(f.b)(B,"timeInHours",t)>1?Object(i.__)("Hours ","ultimate-addons-for-gutenberg"):Object(i.__)(" Hour ","ultimate-addons-for-gutenberg"),ae=V>1?Object(i.__)(" Minutes ","ultimate-addons-for-gutenberg"):Object(i.__)(" Minute ","ultimate-addons-for-gutenberg");return m.a.createElement("div",{className:r()(o,"uagb-editor-preview-mode-"+a.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8),"uagb-how-to-main-wrap")},m.a.createElement(s.RichText,{tagName:q,placeholder:Object(i.__)("How to configure HowTo Schema in UAG?","ultimate-addons-for-gutenberg"),value:C,className:"uagb-howto-heading-text",multiline:!1,onChange:e=>{u({headingTitle:e})},onMerge:d,onSplit:g?function(e,t){u({content:e});for(var a=arguments.length,o=new Array(a>2?a-2:0),n=2;n<a;n++)o[n-2]=arguments[n];g([...o,Object(l.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>b([])}),m.a.createElement(s.RichText,{tagName:"p",placeholder:Object(i.__)("So to get started, you will just need to drag-n-drop the How-to block in the Gutenberg editor. The How-to block can be used on pages which contain a How-to in their title and describe steps to achieve certain requirements.","ultimate-addons-for-gutenberg"),value:H,className:"uagb-howto-desc-text",onChange:e=>u({headingDesc:e}),onMerge:d,onSplit:G,onRemove:()=>b([])}),Q,m.a.createElement("span",{className:"uagb-howto__time-wrap"},v&&m.a.createElement(s.RichText,{tagName:"h4",placeholder:Object(i.__)("Total Time Needed ( Minutes ):","ultimate-addons-for-gutenberg"),value:M,className:"uagb-howto-timeNeeded-text",onChange:e=>u({timeNeeded:e}),onMerge:d,onSplit:G,onRemove:()=>b([])}),v&&m.a.createElement(m.a.Fragment,null,Object(f.b)(A,"timeInYears",t)&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"}," ",Object(f.b)(A,"timeInYears",t)),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"}," ",Z)),Object(f.b)(Y,"timeInMonths",t)&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},Object(f.b)(Y,"timeInMonths",t)),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},$)),Object(f.b)(L,"timeInDays",t)&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},Object(f.b)(L,"timeInDays",t)),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},ee)),Object(f.b)(B,"timeInHours",t)&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},Object(f.b)(B,"timeInHours",t)),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},te)),V&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},V),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},ae)))),m.a.createElement("span",{className:"uagb-howto__cost-wrap"},p&&m.a.createElement(s.RichText,{tagName:"h4",placeholder:Object(i.__)("Total Cost:","ultimate-addons-for-gutenberg"),value:R,className:"uagb-howto-estcost-text",onChange:e=>u({estCost:e}),onMerge:d,onSplit:G,onRemove:()=>b([])}),p&&m.a.createElement(s.RichText,{tagName:"p",placeholder:Object(i.__)("30","ultimate-addons-for-gutenberg"),value:D,className:"uagb-howto-estcost-value",onChange:e=>u({cost:e}),onMerge:d,onSplit:G,onRemove:()=>b([])}),p&&m.a.createElement(s.RichText,{tagName:"p",placeholder:Object(i.__)("USD","ultimate-addons-for-gutenberg"),value:h,className:"uagb-howto-estcost-type",onChange:e=>u({currencyType:e}),onMerge:d,onSplit:G,onRemove:()=>b([])})),y&&m.a.createElement(s.RichText,{tagName:"h4",placeholder:Object(i.__)("requirements tools:","ultimate-addons-for-gutenberg"),value:x,className:"uagb-howto-req-tools-text",onChange:e=>u({toolsTitle:e}),onMerge:d,onSplit:G,onRemove:()=>b([])}),y&&m.a.createElement(m.a.Fragment,null,I.map((e,t)=>m.a.createElement(s.RichText,{tagName:"div",placeholder:Object(i.__)("Requirements Tools:","ultimate-addons-for-gutenberg"),value:e.add_required_tools,onChange:e=>{((e,t)=>{const a=I.map((a,o)=>(t===o&&(a={...a,...e}),a));u({tools:a})})({add_required_tools:e},t)},className:"uagb-tools__label "+t,multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"],key:t}))),O&&m.a.createElement(s.RichText,{tagName:"h4",placeholder:Object(i.__)("requirements materials:","ultimate-addons-for-gutenberg"),value:E,className:"uagb-howto-req-materials-text",onChange:e=>u({materialTitle:e}),onMerge:d,onSplit:G,onRemove:()=>b([])}),O&&m.a.createElement(m.a.Fragment,null,k.map((e,t)=>m.a.createElement(s.RichText,{tagName:"div",placeholder:Object(i.__)("Requirements Materials:","ultimate-addons-for-gutenberg"),value:e.add_required_materials,onChange:e=>{((e,t)=>{const a=k.map((a,o)=>(t===o&&(a={...a,...e}),a));u({materials:a})})({add_required_materials:e},t)},className:"uagb-materials__label "+t,multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"],key:t}))),m.a.createElement(s.RichText,{tagName:"h4",placeholder:Object(i.__)("requirements Steps:","ultimate-addons-for-gutenberg"),value:T,className:"uagb-howto-req-steps-text",onChange:e=>u({stepsTitle:e}),onMerge:d,onSplit:G,onRemove:()=>b([])}),m.a.createElement(s.InnerBlocks,{template:X,allowedBlocks:j}))};t.default=m.a.memo(v)}}]);