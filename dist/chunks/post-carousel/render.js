(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[77],{222:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return d})),a.d(t,"e",(function(){return g})),a.d(t,"c",(function(){return y})),a.d(t,"d",(function(){return f}));var o=a(132),r=a(135),n=a(133),s=a(129),i=a(130),l=a(134),p=a(2);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const c=Object(p.createContext)({parentName:"",parentClassName:"",isLoading:!1}),b=e=>{let{parentName:t="",parentClassName:a="",children:o}=e;const r={parentName:t,parentClassName:a};return React.createElement(c.Provider,{value:r},o)},d=[["uagb/post-image"],["uagb/post-taxonomy"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],g=(e,t,a,o,r)=>{if(!a)return;const n=y(e);let s=[];return a.map((a,i)=>{let[l,c={}]=a;c.children&&c.children.length>0&&(s=g(e,t,c.children,o,r));const b=n[l];return b?React.createElement(p.Suspense,{key:i,fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(b,u({},c,{post:t,attributes:o,categoriesList:r}))):null})},m={};function w(e){e.context||(e.context="any"),h(e,"context","string"),h(e,"blockName","string"),_(e,"component");const{context:t,blockName:a,component:o}=e;m[t]||(m[t]={}),m[t][a]=o}const _=(e,t)=>{if(e[t]){if("function"==typeof e[t])return;if(e[t].$$typeof&&e[t].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${t} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},h=(e,t,a)=>{const o=typeof e[t];if(o!==a)throw new Error(`Incorrect value for the ${t} argument when registering a block component. It was a ${o}, but must be a ${a}.`)};w({blockName:"uagb/post-title",component:o.a}),w({blockName:"uagb/post-image",component:n.a}),w({blockName:"uagb/post-taxonomy",component:s.a}),w({blockName:"uagb/post-meta",component:r.a}),w({blockName:"uagb/post-excerpt",component:i.a}),w({blockName:"uagb/post-button",component:l.a});const y=e=>{return{..."object"==typeof m[t=e]&&Object.keys(m[t]).length>0?m[t]:{},...m.any};var t},f=e=>e&&0!==e.length?e.map(e=>[e.name,{...e.attributes,post:void 0,children:e.innerBlocks.length>0?f(e.innerBlocks):[]}]):[]},223:function(e,t,a){"use strict";var o,r=a(15),n=a.n(r),s=a(224),i=0,l={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=s.a.locals||{},p.use=function(){return i++||(o=n()(s.a,l)),p},p.unuse=function(){i>0&&!--i&&(o(),o=null)},t.a=p},224:function(e,t,a){"use strict";var o=a(16),r=a.n(o)()((function(e){return e[1]}));r.push([e.i,'/**\n * Editor styles for the admin\n */\n.editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap {\n  background-clip: content-box !important; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode {\n    margin: 20px; }\n    .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode [data-type="uagb/post-meta"] span,\n    .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode [data-type="uagb/post-meta"] time {\n      margin-right: 10px;\n      font-weight: 500; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap .uagb-post__taxonomy {\n    flex-wrap: nowrap; }\n\n.editor-styles-wrapper .uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.editor-styles-wrapper .uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-7 article {\n  width: 14.28%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-8 article {\n  width: 12.5%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-post__items {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots {\n  padding-left: 0; }\n  .block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n    color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n',""]),t.a=r},403:function(e,t,a){"use strict";a.r(t);var o=a(222),r=a(0),n=a.n(r),s=a(4),i=a.n(s),l=a(8),p=a(11),u=a(10),c=a(3);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const d=Object(r.lazy)(()=>a.e(1).then(a.t.bind(null,343,7)));function g(e){const t=e.name.replace("uagb/",""),a=Object(r.useRef)(),{attributes:s,className:g,latestPosts:m,block_id:w}=e,_=Object(p.a)(),{isPreview:h,columns:y,tcolumns:f,mcolumns:k,imgPosition:v,postsToShow:E,autoplay:N,pauseOnHover:O,autoplaySpeed:j,transitionSpeed:x,infiniteLoop:S,arrowSize:C,arrowBorderSize:B,arrowBorderRadius:T,arrowColor:L,arrowDots:P,equalHeight:I,layoutConfig:z,rowGap:R}=s,$=Object(c.a)(E,"postsToShow",t),A=Object(c.a)(y,"columns",t),D=Object(c.a)(f,"tcolumns",t),H=Object(c.a)(k,"mcolumns",t),W=Object(c.a)(R,"rowGap",t),q=Object(c.a)(j,"autoplaySpeed",t),F=Object(c.a)(x,"transitionSpeed",t),G=Object(c.a)(C,"arrowSize",t),J=Object(c.a)(B,"arrowBorderSize",t),K=()=>{setTimeout(()=>{if(null!=a&&a.current){var e,t;const o=null==a||null===(e=a.current)||void 0===e?void 0:e.offsetWidth,r=100-W/o*100,n=null==a||null===(t=a.current)||void 0===t?void 0:t.closest(".uagb-post__image-position-background");if(n){const e=null==n?void 0:n.getElementsByClassName("uagb-post__image");for(const t of e)t&&(t.style.width=r+"%",t.style.marginLeft=W/2+"px")}}},100)};Object(r.useEffect)(()=>{K()},[a]),Object(r.useEffect)(()=>{K()},[v]);const M=m.length>$?m.slice(0,$):m;function Q(){return n.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:L,borderRadius:T,borderWidth:J}},l.a.carousel_right)}function U(){return n.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:L,borderRadius:T,borderWidth:J}},l.a.carousel_left)}const V=I?"uagb-post__carousel_equal-height":"",X={slidesToShow:A,slidesToScroll:1,autoplaySpeed:q,autoplay:N,infinite:S,pauseOnHover:O,speed:F,arrows:"arrows"===P||"arrows_dots"===P,dots:"dots"===P||"arrows_dots"===P,rtl:!1,afterChange:()=>{I&&uagb_carousel_height(w)},nextArrow:n.a.createElement(Q,{arrowSize:G}),prevArrow:n.a.createElement(U,{arrowSize:G}),responsive:[{breakpoint:1024,settings:{slidesToShow:D,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:H,slidesToScroll:1}}]},Y=M.map((t,r)=>n.a.createElement("article",{ref:a,key:r,className:"uagb-post__inner-wrap"},Object(o.e)("uagb/post-carousel",t,z,e.attributes,e.categoriesList)));if(A>=M.length)return n.a.createElement("div",{className:i()("is-carousel","uagb-post__columns-"+A,"uagb-post__columns-tablet-"+D,"uagb-post__columns-mobile-"+H,"uagb-post__items",g,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-"+v,""+V,"uagb-editor-preview-mode-"+_.toLowerCase(),"uagb-block-"+w),"data-blog-id":w},n.a.createElement(o.b,{parentName:"uagb/post-carousel",parentClassName:"uagb-block-grid"},Y));const Z=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/post-carousel.png";return n.a.createElement(r.Suspense,{fallback:Object(u.a)()},h?n.a.createElement("img",{width:"100%",src:Z,alt:""}):n.a.createElement(n.a.Fragment,null,n.a.createElement(d,b({className:i()("is-carousel","uagb-post__columns-"+A,"uagb-post__items",g,"uagb-post-grid","uagb-post__arrow-outside","uagb-slick-carousel","uagb-post__image-position-"+v,""+V,"uagb-editor-preview-mode-"+_.toLowerCase(),"uagb-block-"+w),"data-blog-id":w,style:"dots"===P?{padding:"0 0 35px 0"}:{}},X),Y)))}var m=n.a.memo(g),w=a(1),_=a(6),h=a(7),y=a(5),f=a(223);const k=e=>{Object(r.useLayoutEffect)(()=>(f.a.use(),()=>{f.a.unuse()}),[]);const{state:t,setState:a,togglePreview:s}=e;e=e.parentProps;const{attributes:i,categoriesList:l,latestPosts:p,deviceType:u,name:c}=e,b=n.a.createElement(h.Disabled,null,n.a.createElement(m,{attributes:i,className:e.className,latestPosts:p,block_id:e.clientId.substr(0,8),categoriesList:l,deviceType:u,name:c}));return n.a.createElement(n.a.Fragment,null,t.isEditing?(()=>{const r={template:e.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(o.c)("uagb/post-grid"))};return 0!==e.attributes.layoutConfig.length&&(r.renderAppender=!1),n.a.createElement(h.Placeholder,{label:"Post Carousel Layout"},n.a.createElement("div",{className:"uagb-post-grid uagb-block-all-post-grid-item-template"},n.a.createElement(h.Tip,null,Object(w.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post carousel.")),n.a.createElement(o.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},n.a.createElement("article",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},n.a.createElement("div",{className:"uagb-post__text"},n.a.createElement(y.InnerBlocks,r)))),n.a.createElement("div",{className:"uagb-block-all-post__actions"},n.a.createElement(h.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:()=>{const{block:t,setAttributes:r}=e;r({layoutConfig:Object(o.d)(t)}),a({innerBlocks:t}),s()}},Object(w.__)("Done")),n.a.createElement(h.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:()=>{const{replaceInnerBlocks:a}=e,{innerBlocks:o}=t;a(e.clientId,o),s()}},Object(w.__)("Cancel")),n.a.createElement(h.Button,{className:"uagb-block-all-post__reset-button",onClick:()=>{const{block:t,replaceInnerBlocks:r}=e,n=[];o.a.map(e=>{let[t,a]=e;return n.push(Object(_.createBlock)(t,a)),!0}),r(e.clientId,n),a({innerBlocks:t})}},Object(w.__)("Reset Layout")))))})():b)};t.default=n.a.memo(k)}}]);