(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[77],{215:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return d})),a.d(t,"e",(function(){return g})),a.d(t,"c",(function(){return f})),a.d(t,"d",(function(){return y}));var o=a(126),r=a(129),n=a(127),s=a(123),i=a(124),l=a(128),p=a(2);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const c=Object(p.createContext)({parentName:"",parentClassName:"",isLoading:!1}),b=e=>{let{parentName:t="",parentClassName:a="",children:o}=e;const r={parentName:t,parentClassName:a};return React.createElement(c.Provider,{value:r},o)},d=[["uagb/post-image"],["uagb/post-taxonomy"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],g=(e,t,a,o,r)=>{if(!a)return;const n=f(e);let s=[];return a.map((a,i)=>{let[l,c={}]=a;c.children&&c.children.length>0&&(s=g(e,t,c.children,o,r));const b=n[l];return b?React.createElement(p.Suspense,{key:i,fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(b,u({},c,{post:t,attributes:o,categoriesList:r}))):null})},m={};function w(e){e.context||(e.context="any"),h(e,"context","string"),h(e,"blockName","string"),_(e,"component");const{context:t,blockName:a,component:o}=e;m[t]||(m[t]={}),m[t][a]=o}const _=(e,t)=>{if(e[t]){if("function"==typeof e[t])return;if(e[t].$$typeof&&e[t].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${t} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},h=(e,t,a)=>{const o=typeof e[t];if(o!==a)throw new Error(`Incorrect value for the ${t} argument when registering a block component. It was a ${o}, but must be a ${a}.`)};w({blockName:"uagb/post-title",component:o.a}),w({blockName:"uagb/post-image",component:n.a}),w({blockName:"uagb/post-taxonomy",component:s.a}),w({blockName:"uagb/post-meta",component:r.a}),w({blockName:"uagb/post-excerpt",component:i.a}),w({blockName:"uagb/post-button",component:l.a});const f=e=>{return{..."object"==typeof m[t=e]&&Object.keys(m[t]).length>0?m[t]:{},...m.any};var t},y=e=>e&&0!==e.length?e.map(e=>[e.name,{...e.attributes,post:void 0,children:e.innerBlocks.length>0?y(e.innerBlocks):[]}]):[]},222:function(e,t,a){"use strict";var o,r=a(13),n=a.n(r),s=a(223),i=0,l={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=s.a.locals||{},p.use=function(){return i++||(o=n()(s.a,l)),p},p.unuse=function(){i>0&&!--i&&(o(),o=null)},t.a=p},223:function(e,t,a){"use strict";var o=a(14),r=a.n(o)()((function(e){return e[1]}));r.push([e.i,'/**\n * Editor styles for the admin\n */\n.editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap {\n  background-clip: content-box !important; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode {\n    margin: 20px; }\n    .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode [data-type="uagb/post-meta"] span,\n    .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode [data-type="uagb/post-meta"] time {\n      margin-right: 10px;\n      font-weight: 500; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap .uagb-post__taxonomy {\n    flex-wrap: nowrap; }\n\n.editor-styles-wrapper .uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.editor-styles-wrapper .uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-7 article {\n  width: 14.28%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-8 article {\n  width: 12.5%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-post__items {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots {\n  padding-left: 0; }\n  .block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n    color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n',""]),t.a=r},565:function(e,t,a){"use strict";a.r(t);var o=a(215),r=a(0),n=a.n(r),s=a(3),i=a.n(s),l=a(7),p=a(10),u=a(9);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const b=Object(r.lazy)(()=>a.e(1).then(a.t.bind(null,507,7)));function d(e){const t=Object(r.useRef)(),{attributes:a,className:s,latestPosts:d,block_id:g}=e,m=Object(p.a)(),{isPreview:w,columns:_,tcolumns:h,mcolumns:f,imgPosition:y,postsToShow:k,autoplay:v,pauseOnHover:E,transitionSpeed:N,infiniteLoop:x,arrowSize:O,arrowBorderSize:j,arrowBorderRadius:C,arrowColor:S,arrowDots:B,equalHeight:L,layoutConfig:P,rowGap:T}=a,I=()=>{setTimeout(()=>{if(null!=t&&t.current){var e,a;const o=null==t||null===(e=t.current)||void 0===e?void 0:e.offsetWidth,r=100-T/o*100,n=null==t||null===(a=t.current)||void 0===a?void 0:a.closest(".uagb-post__image-position-background");if(n){const e=null==n?void 0:n.getElementsByClassName("uagb-post__image");for(const t of e)t&&(t.style.width=r+"%",t.style.marginLeft=T/2+"px")}}},100)};Object(r.useEffect)(()=>{I()},[t]),Object(r.useEffect)(()=>{I()},[y]);const R=d.length>k?d.slice(0,k):d;function z(){return n.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:S,borderRadius:C,borderWidth:j}},l.a.carousel_right)}function $(){return n.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:S,borderRadius:C,borderWidth:j}},l.a.carousel_left)}const A=L?"uagb-post__carousel_equal-height":"",D={slidesToShow:_,slidesToScroll:1,autoplaySpeed:2e3,autoplay:v,infinite:x,pauseOnHover:E,speed:N,arrows:"arrows"===B||"arrows_dots"===B,dots:"dots"===B||"arrows_dots"===B,rtl:!1,afterChange:()=>{L&&uagb_carousel_height(g)},nextArrow:n.a.createElement(z,{arrowSize:O}),prevArrow:n.a.createElement($,{arrowSize:O}),responsive:[{breakpoint:1024,settings:{slidesToShow:h,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:f,slidesToScroll:1}}]},H=R.map((a,r)=>n.a.createElement("article",{ref:t,key:r,className:"uagb-post__inner-wrap"},Object(o.e)("uagb/post-carousel",a,P,e.attributes,e.categoriesList)));if(_>=R.length)return n.a.createElement("div",{className:i()("is-carousel","uagb-post__columns-"+_,"uagb-post__columns-tablet-"+h,"uagb-post__columns-mobile-"+f,"uagb-post__items",s,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-"+y,""+A,"uagb-editor-preview-mode-"+m.toLowerCase(),"uagb-block-"+g),"data-blog-id":g},n.a.createElement(o.b,{parentName:"uagb/post-carousel",parentClassName:"uagb-block-grid"},H));const W=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/post-carousel.png";return n.a.createElement(r.Suspense,{fallback:Object(u.a)()},w?n.a.createElement("img",{width:"100%",src:W,alt:""}):n.a.createElement(n.a.Fragment,null,n.a.createElement(b,c({className:i()("is-carousel","uagb-post__columns-"+_,"uagb-post__items",s,"uagb-post-grid","uagb-post__arrow-outside","uagb-slick-carousel","uagb-post__image-position-"+y,""+A,"uagb-editor-preview-mode-"+m.toLowerCase(),"uagb-block-"+g),"data-blog-id":g,style:"dots"===B?{padding:"0 0 35px 0"}:{}},D),H)))}var g=n.a.memo(d),m=a(1),w=a(5),_=a(6),h=a(4),f=a(222);const y=e=>{Object(r.useLayoutEffect)(()=>(f.a.use(),()=>{f.a.unuse()}),[]);const{state:t,setState:a,togglePreview:s}=e;e=e.parentProps;const{attributes:i,categoriesList:l,latestPosts:p,deviceType:u}=e,c=n.a.createElement(_.Disabled,null,n.a.createElement(g,{attributes:i,className:e.className,latestPosts:p,block_id:e.clientId.substr(0,8),categoriesList:l,deviceType:u}));return n.a.createElement(n.a.Fragment,null,t.isEditing?(()=>{const r={template:e.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(o.c)("uagb/post-grid"))};return 0!==e.attributes.layoutConfig.length&&(r.renderAppender=!1),n.a.createElement(_.Placeholder,{label:"Post Carousel Layout"},n.a.createElement("div",{className:"uagb-post-grid uagb-block-all-post-grid-item-template"},n.a.createElement(_.Tip,null,Object(m.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post carousel.")),n.a.createElement(o.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},n.a.createElement("article",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},n.a.createElement("div",{className:"uagb-post__text"},n.a.createElement(h.InnerBlocks,r)))),n.a.createElement("div",{className:"uagb-block-all-post__actions"},n.a.createElement(_.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:()=>{const{block:t,setAttributes:r}=e;r({layoutConfig:Object(o.d)(t)}),a({innerBlocks:t}),s()}},Object(m.__)("Done")),n.a.createElement(_.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:()=>{const{replaceInnerBlocks:a}=e,{innerBlocks:o}=t;a(e.clientId,o),s()}},Object(m.__)("Cancel")),n.a.createElement(_.Button,{className:"uagb-block-all-post__reset-button",onClick:()=>{const{block:t,replaceInnerBlocks:r}=e,n=[];o.a.map(e=>{let[t,a]=e;return n.push(Object(w.createBlock)(t,a)),!0}),r(e.clientId,n),a({innerBlocks:t})}},Object(m.__)("Reset Layout")))))})():c)};t.default=n.a.memo(y)}}]);