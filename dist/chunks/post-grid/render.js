(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[80],{223:function(t,e,o){"use strict";o.d(e,"b",(function(){return g})),o.d(e,"a",(function(){return d})),o.d(e,"e",(function(){return c})),o.d(e,"c",(function(){return y})),o.d(e,"d",(function(){return h}));var a=o(131),r=o(134),n=o(132),s=o(128),i=o(129),p=o(133),l=o(2);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t}).apply(this,arguments)}const b=Object(l.createContext)({parentName:"",parentClassName:"",isLoading:!1}),g=t=>{let{parentName:e="",parentClassName:o="",children:a}=t;const r={parentName:e,parentClassName:o};return React.createElement(b.Provider,{value:r},a)},d=[["uagb/post-image"],["uagb/post-taxonomy"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],c=(t,e,o,a,r)=>{if(!o)return;const n=y(t);let s=[];return o.map((o,i)=>{let[p,b={}]=o;b.children&&b.children.length>0&&(s=c(t,e,b.children,a,r));const g=n[p];return g?React.createElement(l.Suspense,{key:i,fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(g,u({},b,{post:e,attributes:a,categoriesList:r}))):null})},m={};function w(t){t.context||(t.context="any"),k(t,"context","string"),k(t,"blockName","string"),_(t,"component");const{context:e,blockName:o,component:a}=t;m[e]||(m[e]={}),m[e][o]=a}const _=(t,e)=>{if(t[e]){if("function"==typeof t[e])return;if(t[e].$$typeof&&t[e].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${e} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},k=(t,e,o)=>{const a=typeof t[e];if(a!==o)throw new Error(`Incorrect value for the ${e} argument when registering a block component. It was a ${a}, but must be a ${o}.`)};w({blockName:"uagb/post-title",component:a.a}),w({blockName:"uagb/post-image",component:n.a}),w({blockName:"uagb/post-taxonomy",component:s.a}),w({blockName:"uagb/post-meta",component:r.a}),w({blockName:"uagb/post-excerpt",component:i.a}),w({blockName:"uagb/post-button",component:p.a});const y=t=>{return{..."object"==typeof m[e=t]&&Object.keys(m[e]).length>0?m[e]:{},...m.any};var e},h=t=>t&&0!==t.length?t.map(t=>[t.name,{...t.attributes,post:void 0,children:t.innerBlocks.length>0?h(t.innerBlocks):[]}]):[]},230:function(t,e,o){"use strict";var a,r=o(15),n=o.n(r),s=o(231),i=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},l={};l.locals=s.a.locals||{},l.use=function(){return i++||(a=n()(s.a,p)),l},l.unuse=function(){i>0&&!--i&&(a(),a=null)},e.a=l},231:function(t,e,o){"use strict";var a=o(16),r=o.n(a)()((function(t){return t[1]}));r.push([t.i,'/**\n * Editor styles for the admin\n */\n.editor-styles-wrapper .uagb-post-grid:not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap {\n  background-clip: content-box !important; }\n  .editor-styles-wrapper .uagb-post-grid:not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap.uagb-post__edit-mode {\n    margin: 20px; }\n    .editor-styles-wrapper .uagb-post-grid:not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap.uagb-post__edit-mode [data-type="uagb/post-meta"] span,\n    .editor-styles-wrapper .uagb-post-grid:not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap.uagb-post__edit-mode [data-type="uagb/post-meta"] time {\n      margin-right: 10px;\n      font-weight: 500; }\n  .editor-styles-wrapper .uagb-post-grid:not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap .uagb-post__taxonomy {\n    flex-wrap: nowrap; }\n\n.editor-styles-wrapper .uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.editor-styles-wrapper .uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-1 {\n  grid-template-columns: auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-2 {\n  grid-template-columns: auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-3 {\n  grid-template-columns: auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-4 {\n  grid-template-columns: auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-5 {\n  grid-template-columns: auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-6 {\n  grid-template-columns: auto auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-7 {\n  grid-template-columns: auto auto auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-8 {\n  grid-template-columns: auto auto auto auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-7 article {\n  width: 14.28%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-8 article {\n  width: 12.5%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-1 {\n  grid-template-columns: auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-2 {\n  grid-template-columns: auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-3 {\n  grid-template-columns: auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-4 {\n  grid-template-columns: auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-5 {\n  grid-template-columns: auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-6 {\n  grid-template-columns: auto auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-7 {\n  grid-template-columns: auto auto auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-8 {\n  grid-template-columns: auto auto auto auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid:not(.is-grid).uagb-post__items {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.editor-styles-wrapper .uagb-post-grid.is_grid {\n  display: grid; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots {\n  padding-left: 0; }\n  .block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n    color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n',""]),e.a=r},485:function(t,e,o){"use strict";o.r(e);var a=o(0),r=o.n(a),n=o(10),s=o(223),i=o(1),p=o(6),l=o(7),u=o(5),b=o(230);const g=Object(a.lazy)(()=>o.e(79).then(o.bind(null,329))),d=t=>{Object(a.useLayoutEffect)(()=>(b.a.use(),()=>{b.a.unuse()}),[]);const{isEditing:e}=t.state,{attributes:o,latestPosts:d,categoriesList:c,deviceType:m,name:w}=t.parentProps;return e?r.a.createElement(r.a.Fragment,null,(()=>{const e={template:t.parentProps.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(s.c)("uagb/post-grid"))};return 0!==t.parentProps.attributes.layoutConfig.length&&(e.renderAppender=!1),r.a.createElement(l.Placeholder,{label:"Post Grid Layout"},r.a.createElement("div",{className:"uagb-post-grid uagb-block-all-post-grid-item-template"},r.a.createElement(l.Tip,null,Object(i.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post grid.")),r.a.createElement(s.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},r.a.createElement("article",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},r.a.createElement("div",{className:"uagb-post__text"},r.a.createElement(u.InnerBlocks,e)))),r.a.createElement("div",{className:"uagb-block-all-post__actions"},r.a.createElement(l.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:()=>{const{block:e,setAttributes:o}=t.parentProps;o({layoutConfig:Object(s.d)(e)}),t.setStateValue({innerBlocks:e}),t.togglePreview()}},Object(i.__)("Done")),r.a.createElement(l.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:()=>{const{replaceInnerBlocks:e}=t.parentProps,{innerBlocks:o}=t.state;e(t.parentProps.clientId,o),t.togglePreview()}},Object(i.__)("Cancel")),r.a.createElement(l.Button,{className:"uagb-block-all-post__reset-button",onClick:()=>{const{block:e,replaceInnerBlocks:o}=t.parentProps,a=[];s.a.map(t=>{let[e,o]=t;return a.push(Object(p.createBlock)(e,o)),!0}),o(t.parentProps.clientId,a),t.setStateValue({innerBlocks:e})}},Object(i.__)("Reset Layout")))))})()):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Disabled,null,r.a.createElement(a.Suspense,{fallback:Object(n.a)()},r.a.createElement(g,{attributes:o,className:t.parentProps.className,latestPosts:d,block_id:t.parentProps.clientId.substr(0,8),categoriesList:c,deviceType:m,name:w}))))};e.default=r.a.memo(d)}}]);