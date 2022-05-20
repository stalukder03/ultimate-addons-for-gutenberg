(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[77],{213:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return g})),a.d(t,"e",(function(){return d})),a.d(t,"c",(function(){return f})),a.d(t,"d",(function(){return k}));var o=a(125),n=a(128),r=a(126),s=a(122),i=a(123),l=a(127),u=a(2);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const b=Object(u.createContext)({parentName:"",parentClassName:"",isLoading:!1}),p=e=>{let{parentName:t="",parentClassName:a="",children:o}=e;const n={parentName:t,parentClassName:a};return React.createElement(b.Provider,{value:n},o)},g=[["uagb/post-image"],["uagb/post-taxonomy"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],d=(e,t,a,o,n)=>{if(!a)return;const r=f(e);let s=[];return a.map((a,i)=>{let[l,b={}]=a;b.children&&b.children.length>0&&(s=d(e,t,b.children,o,n));const p=r[l];return p?React.createElement(u.Suspense,{key:i,fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(p,c({},b,{post:t,attributes:o,categoriesList:n}))):null})},m={};function _(e){e.context||(e.context="any"),h(e,"context","string"),h(e,"blockName","string"),w(e,"component");const{context:t,blockName:a,component:o}=e;m[t]||(m[t]={}),m[t][a]=o}const w=(e,t)=>{if(e[t]){if("function"==typeof e[t])return;if(e[t].$$typeof&&e[t].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${t} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},h=(e,t,a)=>{const o=typeof e[t];if(o!==a)throw new Error(`Incorrect value for the ${t} argument when registering a block component. It was a ${o}, but must be a ${a}.`)};_({blockName:"uagb/post-title",component:o.a}),_({blockName:"uagb/post-image",component:r.a}),_({blockName:"uagb/post-taxonomy",component:s.a}),_({blockName:"uagb/post-meta",component:n.a}),_({blockName:"uagb/post-excerpt",component:i.a}),_({blockName:"uagb/post-button",component:l.a});const f=e=>{return{..."object"==typeof m[t=e]&&Object.keys(m[t]).length>0?m[t]:{},...m.any};var t},k=e=>e&&0!==e.length?e.map(e=>[e.name,{...e.attributes,post:void 0,children:e.innerBlocks.length>0?k(e.innerBlocks):[]}]):[]},220:function(e,t,a){"use strict";var o,n=a(13),r=a.n(n),s=a(221),i=0,l={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},u={};u.locals=s.a.locals||{},u.use=function(){return i++||(o=r()(s.a,l)),u},u.unuse=function(){i>0&&!--i&&(o(),o=null)},t.a=u},221:function(e,t,a){"use strict";var o=a(14),n=a.n(o)()((function(e){return e[1]}));n.push([e.i,'/**\n * Editor styles for the admin\n */\n.uagb-post-grid .uagb-post__inner-wrap {\n  background-clip: content-box !important; }\n  .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode {\n    margin: 20px; }\n    .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode [data-type="uagb/post-meta"] span,\n    .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode [data-type="uagb/post-meta"] time {\n      margin-right: 10px;\n      font-weight: 500; }\n  .uagb-post-grid .uagb-post__inner-wrap .uagb-post__taxonomy {\n    flex-wrap: nowrap; }\n\n.uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-post__items {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots {\n  padding-left: 0; }\n  .block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n    color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n',""]),t.a=n},563:function(e,t,a){"use strict";a.r(t);var o=a(213),n=a(0),r=a.n(n),s=a(3),i=a.n(s),l=a(7),u=a(10),c=a(9);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const p=Object(n.lazy)(()=>a.e(1).then(a.t.bind(null,506,7)));function g(e){const t=Object(n.useRef)(),{attributes:a,className:s,latestPosts:g,block_id:d}=e,m=Object(u.a)(),{isPreview:_,columns:w,tcolumns:h,mcolumns:f,imgPosition:k,postsToShow:v,autoplay:y,pauseOnHover:E,transitionSpeed:N,infiniteLoop:x,arrowSize:O,arrowBorderSize:j,arrowBorderRadius:C,arrowColor:S,arrowDots:B,equalHeight:L,layoutConfig:P,rowGap:T}=a,I=()=>{setTimeout(()=>{if(null!=t&&t.current){var e,a;const o=null==t||null===(e=t.current)||void 0===e?void 0:e.offsetWidth,n=100-T/o*100,r=null==t||null===(a=t.current)||void 0===a?void 0:a.closest(".uagb-post__image-position-background");if(r){const e=null==r?void 0:r.getElementsByClassName("uagb-post__image");for(const t of e)t&&(t.style.width=n+"%",t.style.marginLeft=T/2+"px")}}},100)};Object(n.useEffect)(()=>{I()},[t]),Object(n.useEffect)(()=>{I()},[k]);const R=g.length>v?g.slice(0,v):g;function z(){return r.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:S,borderRadius:C,borderWidth:j}},l.a.carousel_right)}function $(){return r.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:S,borderRadius:C,borderWidth:j}},l.a.carousel_left)}const A=L?"uagb-post__carousel_equal-height":"",D={slidesToShow:w,slidesToScroll:1,autoplaySpeed:2e3,autoplay:y,infinite:x,pauseOnHover:E,speed:N,arrows:"arrows"===B||"arrows_dots"===B,dots:"dots"===B||"arrows_dots"===B,rtl:!1,afterChange:()=>{L&&uagb_carousel_height(d)},nextArrow:r.a.createElement(z,{arrowSize:O}),prevArrow:r.a.createElement($,{arrowSize:O}),responsive:[{breakpoint:1024,settings:{slidesToShow:h,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:f,slidesToScroll:1}}]},H=R.map((a,n)=>r.a.createElement("article",{ref:t,key:n,className:"uagb-post__inner-wrap"},Object(o.e)("uagb/post-carousel",a,P,e.attributes,e.categoriesList)));if(w>=R.length)return r.a.createElement("div",{className:i()("is-carousel","uagb-post__columns-"+w,"uagb-post__columns-tablet-"+h,"uagb-post__columns-mobile-"+f,"uagb-post__items",s,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-"+k,""+A,"uagb-editor-preview-mode-"+m.toLowerCase(),"uagb-block-"+d),"data-blog-id":d},r.a.createElement(o.b,{parentName:"uagb/post-carousel",parentClassName:"uagb-block-grid"},H));const W=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/post-carousel.png";return r.a.createElement(n.Suspense,{fallback:Object(c.a)()},_?r.a.createElement("img",{width:"100%",src:W,alt:""}):r.a.createElement(r.a.Fragment,null,r.a.createElement(p,b({className:i()("is-carousel","uagb-post__columns-"+w,"uagb-post__items",s,"uagb-post-grid","uagb-post__arrow-outside","uagb-slick-carousel","uagb-post__image-position-"+k,""+A,"uagb-editor-preview-mode-"+m.toLowerCase(),"uagb-block-"+d),"data-blog-id":d,style:"dots"===B?{padding:"0 0 35px 0"}:{}},D),H)))}var d=r.a.memo(g),m=a(1),_=a(5),w=a(6),h=a(4),f=a(220);const k=e=>{Object(n.useLayoutEffect)(()=>(f.a.use(),()=>{f.a.unuse()}),[]);const{state:t,setState:a,togglePreview:s}=e;e=e.parentProps;const{attributes:i,categoriesList:l,latestPosts:u,deviceType:c}=e,b=r.a.createElement(w.Disabled,null,r.a.createElement(d,{attributes:i,className:e.className,latestPosts:u,block_id:e.clientId.substr(0,8),categoriesList:l,deviceType:c}));return r.a.createElement(r.a.Fragment,null,t.isEditing?(()=>{const n={template:e.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(o.c)("uagb/post-grid"))};return 0!==e.attributes.layoutConfig.length&&(n.renderAppender=!1),r.a.createElement(w.Placeholder,{label:"Post Carousel Layout"},r.a.createElement("div",{className:"uagb-post-grid uagb-block-all-post-grid-item-template"},r.a.createElement(w.Tip,null,Object(m.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post carousel.")),r.a.createElement(o.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},r.a.createElement("article",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},r.a.createElement("div",{className:"uagb-post__text"},r.a.createElement(h.InnerBlocks,n)))),r.a.createElement("div",{className:"uagb-block-all-post__actions"},r.a.createElement(w.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:()=>{const{block:t,setAttributes:n}=e;n({layoutConfig:Object(o.d)(t)}),a({innerBlocks:t}),s()}},Object(m.__)("Done")),r.a.createElement(w.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:()=>{const{replaceInnerBlocks:a}=e,{innerBlocks:o}=t;a(e.clientId,o),s()}},Object(m.__)("Cancel")),r.a.createElement(w.Button,{className:"uagb-block-all-post__reset-button",onClick:()=>{const{block:t,replaceInnerBlocks:n}=e,r=[];o.a.map(e=>{let[t,a]=e;return r.push(Object(_.createBlock)(t,a)),!0}),n(e.clientId,r),a({innerBlocks:t})}},Object(m.__)("Reset Layout")))))})():b)};t.default=r.a.memo(k)}}]);