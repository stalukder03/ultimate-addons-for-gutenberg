(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[80],{213:function(t,e,a){"use strict";a.d(e,"b",(function(){return b})),a.d(e,"a",(function(){return g})),a.d(e,"e",(function(){return m})),a.d(e,"c",(function(){return f})),a.d(e,"d",(function(){return k}));var n=a(126),o=a(129),r=a(127),i=a(123),s=a(124),l=a(128),c=a(2);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}const p=Object(c.createContext)({parentName:"",parentClassName:"",isLoading:!1}),b=t=>{let{parentName:e="",parentClassName:a="",children:n}=t;const o={parentName:e,parentClassName:a};return React.createElement(p.Provider,{value:o},n)},g=[["uagb/post-image"],["uagb/post-taxonomy"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],m=(t,e,a,n,o)=>{if(!a)return;const r=f(t);let i=[];return a.map((a,s)=>{let[l,p={}]=a;p.children&&p.children.length>0&&(i=m(t,e,p.children,n,o));const b=r[l];return b?React.createElement(c.Suspense,{key:s,fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(b,u({},p,{post:e,attributes:n,categoriesList:o}))):null})},d={};function _(t){t.context||(t.context="any"),h(t,"context","string"),h(t,"blockName","string"),w(t,"component");const{context:e,blockName:a,component:n}=t;d[e]||(d[e]={}),d[e][a]=n}const w=(t,e)=>{if(t[e]){if("function"==typeof t[e])return;if(t[e].$$typeof&&t[e].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${e} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},h=(t,e,a)=>{const n=typeof t[e];if(n!==a)throw new Error(`Incorrect value for the ${e} argument when registering a block component. It was a ${n}, but must be a ${a}.`)};_({blockName:"uagb/post-title",component:n.a}),_({blockName:"uagb/post-image",component:r.a}),_({blockName:"uagb/post-taxonomy",component:i.a}),_({blockName:"uagb/post-meta",component:o.a}),_({blockName:"uagb/post-excerpt",component:s.a}),_({blockName:"uagb/post-button",component:l.a});const f=t=>{return{..."object"==typeof d[e=t]&&Object.keys(d[e]).length>0?d[e]:{},...d.any};var e},k=t=>t&&0!==t.length?t.map(t=>[t.name,{...t.attributes,post:void 0,children:t.innerBlocks.length>0?k(t.innerBlocks):[]}]):[]},220:function(t,e,a){"use strict";var n,o=a(13),r=a.n(o),i=a(221),s=0,l={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=i.a.locals||{},c.use=function(){return s++||(n=r()(i.a,l)),c},c.unuse=function(){s>0&&!--s&&(n(),n=null)},e.a=c},221:function(t,e,a){"use strict";var n=a(14),o=a.n(n)()((function(t){return t[1]}));o.push([t.i,"/**\n * Editor styles for the admin\n */\n.uagb-post-grid .uagb-post__inner-wrap {\n  background-clip: content-box !important; }\n  .uagb-post-grid .uagb-post__inner-wrap .uagb-post__taxonomy {\n    flex-wrap: nowrap; }\n\n.uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-post__items {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n  color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n",""]),e.a=o},474:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(8),i=a(213),s=a(1),l=a(5),c=a(6),u=a(4),p=a(220);const b=Object(n.lazy)(()=>a.e(79).then(a.bind(null,317))),g=t=>{Object(n.useLayoutEffect)(()=>(p.a.use(),()=>{p.a.unuse()}),[]);const{isEditing:e}=t.state,{attributes:a,latestPosts:g,categoriesList:m,deviceType:d}=t.parentProps;return e?o.a.createElement(o.a.Fragment,null,(()=>{const e={template:t.parentProps.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(i.c)("uagb/post-grid"))};return 0!==t.parentProps.attributes.layoutConfig.length&&(e.renderAppender=!1),o.a.createElement(c.Placeholder,{label:"Post Grid Layout"},o.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},o.a.createElement(c.Tip,null,Object(s.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post grid.")),o.a.createElement(i.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},o.a.createElement("article",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},o.a.createElement("div",{className:"uagb-post__text"},o.a.createElement(u.InnerBlocks,e)))),o.a.createElement("div",{className:"uagb-block-all-post__actions"},o.a.createElement(c.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:()=>{const{block:e,setAttributes:a}=t.parentProps;a({layoutConfig:Object(i.d)(e)}),t.setStateValue({innerBlocks:e}),t.togglePreview()}},Object(s.__)("Done")),o.a.createElement(c.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:()=>{const{replaceInnerBlocks:e}=t.parentProps,{innerBlocks:a}=t.state;e(t.parentProps.clientId,a),t.togglePreview()}},Object(s.__)("Cancel")),o.a.createElement(c.Button,{className:"uagb-block-all-post__reset-button",onClick:()=>{const{block:e,replaceInnerBlocks:a}=t.parentProps,n=[];i.a.map(t=>{let[e,a]=t;return n.push(Object(l.createBlock)(e,a)),!0}),a(t.parentProps.clientId,n),t.setStateValue({innerBlocks:e})}},Object(s.__)("Reset Layout")))))})()):o.a.createElement(o.a.Fragment,null,o.a.createElement(c.Disabled,null,o.a.createElement(n.Suspense,{fallback:Object(r.a)()},o.a.createElement(b,{attributes:a,className:t.parentProps.className,latestPosts:g,block_id:t.parentProps.clientId.substr(0,8),categoriesList:m,deviceType:d}))))};e.default=o.a.memo(g)}}]);