(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[20],{224:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return y})),n.d(e,"e",(function(){return v})),n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return j}));var r=n(83),o=n(86),a=n(84),i=n(82),l=n(85),c=n(4);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(){return(g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=Object(c.createContext)({parentName:"",parentClassName:"",isLoading:!1}),f=function(t){var e=t.parentName,n=void 0===e?"":e,r=t.parentClassName,o=void 0===r?"":r,a=t.children,i={parentName:n,parentClassName:o};return React.createElement(d.Provider,{value:i},a)},y=[["uagb/post-image"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],v=function t(e,n,r,o,a){if(r){var i=O(e);return r.map((function(r){var l,u,s=(u=2,function(t){if(Array.isArray(t))return t}(l=r)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],_n=!0,i=!1;try{for(n=n.call(t);!(_n=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);_n=!0);}catch(t){i=!0,o=t}finally{try{_n||null==n.return||n.return()}finally{if(i)throw o}}return a}}(l,u)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(l,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=s[0],p=s[1],d=void 0===p?{}:p;d.children&&d.children.length>0&&t(e,n,d.children,o,a);var f=i[b];return f?React.createElement(c.Suspense,{fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(f,g({},d,{post:n,attributes:o,categoriesList:a}))):null}))}},h={};function w(t){t.context||(t.context="any"),k(t,"context","string"),k(t,"blockName","string"),_(t,"component");var e=t.context,n=t.blockName,r=t.component;h[e]||(h[e]={}),h[e][n]=r}var _=function(t,e){if(t[e]){if("function"==typeof t[e])return;if(t[e].$$typeof&&t[e].$$typeof===Symbol.for("react.lazy"))return}throw new Error("Incorrect value for the ".concat(e," argument when registering a block component. Component must be a valid React Element or Lazy callback."))},k=function(t,e,n){var r=p(t[e]);if(r!==n)throw new Error("Incorrect value for the ".concat(e," argument when registering a block component. It was a ").concat(r,", but must be a ").concat(n,"."))};w({blockName:"uagb/post-title",component:r.a}),w({blockName:"uagb/post-image",component:a.a}),w({blockName:"uagb/post-meta",component:o.a}),w({blockName:"uagb/post-excerpt",component:i.a}),w({blockName:"uagb/post-button",component:l.a});var O=function(t){return s(s({},"object"===p(h[e=t])&&Object.keys(h[e]).length>0?h[e]:{}),h.any);var e},j=function t(e){return e&&0!==e.length?e.map((function(e){return[e.name,s(s({},e.attributes),{},{post:void 0,children:e.innerBlocks.length>0?t(e.innerBlocks):[]})]})):[]}},236:function(t,e,n){"use strict";var r,o=n(12),a=n.n(o),i=n(237),l=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},u={};u.locals=i.a.locals||{},u.use=function(){return l++||(r=a()(i.a,c)),u},u.unuse=function(){l>0&&!--l&&(r(),r=null)},e.a=u},237:function(t,e,n){"use strict";var r=n(13),o=n.n(r)()((function(t){return t[1]}));o.push([t.i,"/**\r\n * Editor styles for the admin\r\n */\n.uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n  color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n",""]),e.a=o},434:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(14),i=n(224),l=n(1),c=n(6),u=n(2),s=n(5),b=n(236);function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var g=Object(r.lazy)((function(){return n.e(19).then(n.bind(null,347))})),m=function(t){Object(r.useLayoutEffect)((function(){return b.a.use(),function(){b.a.unuse()}}),[]);var e,n=t.state.isEditing,m=t.parentProps,d=m.attributes,f=m.latestPosts,y=m.categoriesList,v=m.deviceType;return n?o.a.createElement(o.a.Fragment,null,(e={template:t.parentProps.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(i.c)("uagb/post-grid"))},0!==t.parentProps.attributes.layoutConfig.length&&(e.renderAppender=!1),o.a.createElement(u.Placeholder,{label:"Post Grid Layout"},o.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},o.a.createElement(u.Tip,null,Object(l.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post grid.")),o.a.createElement(i.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},o.a.createElement("article",null,o.a.createElement("div",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},o.a.createElement("div",{className:"uagb-post__text"},o.a.createElement(s.InnerBlocks,e))))),o.a.createElement("div",{className:"uagb-block-all-post__actions"},o.a.createElement(u.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:function(){var e=t.parentProps,n=e.block;(0,e.setAttributes)({layoutConfig:Object(i.d)(n)}),t.setStateValue({innerBlocks:n}),t.togglePreview()}},Object(l.__)("Done")),o.a.createElement(u.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:function(){var e=t.parentProps.replaceInnerBlocks,n=t.state.innerBlocks;e(t.parentProps.clientId,n),t.togglePreview()}},Object(l.__)("Cancel")),o.a.createElement(u.Button,{className:"uagb-block-all-post__reset-button",onClick:function(){var e=t.parentProps,n=e.block,r=e.replaceInnerBlocks,o=[];i.a.map((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],_n=!0,i=!1;try{for(n=n.call(t);!(_n=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);_n=!0);}catch(t){i=!0,o=t}finally{try{_n||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],i=r[1];return o.push(Object(c.createBlock)(a,i)),!0})),r(t.parentProps.clientId,o),t.setStateValue({innerBlocks:n})}},Object(l.__)("Reset Layout"))))))):o.a.createElement(o.a.Fragment,null,o.a.createElement(u.Disabled,null,o.a.createElement(r.Suspense,{fallback:Object(a.a)()},o.a.createElement(g,{attributes:d,className:t.parentProps.className,latestPosts:f,block_id:t.parentProps.clientId.substr(0,8),categoriesList:y,deviceType:v}))))};e.default=o.a.memo(m)}}]);