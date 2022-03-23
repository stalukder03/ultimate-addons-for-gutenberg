(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[75],{180:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return N})),a.d(e,"e",(function(){return g})),a.d(e,"c",(function(){return p})),a.d(e,"d",(function(){return d}));var o=a(100),i=a(103),n=a(101),s=a(98),r=a(102),u=a(2);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t}).apply(this,arguments)}const M=Object(u.createContext)({parentName:"",parentClassName:"",isLoading:!1}),c=t=>{let{parentName:e="",parentClassName:a="",children:o}=t;const i={parentName:e,parentClassName:a};return React.createElement(M.Provider,{value:i},o)},N=[["uagb/post-image"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],g=(t,e,a,o,i)=>{if(!a)return;const n=p(t);let s=[];return a.map((a,r)=>{let[M,c={}]=a;c.children&&c.children.length>0&&(s=g(t,e,c.children,o,i));const N=n[M];return N?React.createElement(u.Suspense,{key:r,fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(N,l({},c,{post:e,attributes:o,categoriesList:i}))):null})},b={};function w(t){t.context||(t.context="any"),j(t,"context","string"),j(t,"blockName","string"),L(t,"component");const{context:e,blockName:a,component:o}=t;b[e]||(b[e]={}),b[e][a]=o}const L=(t,e)=>{if(t[e]){if("function"==typeof t[e])return;if(t[e].$$typeof&&t[e].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${e} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},j=(t,e,a)=>{const o=typeof t[e];if(o!==a)throw new Error(`Incorrect value for the ${e} argument when registering a block component. It was a ${o}, but must be a ${a}.`)};w({blockName:"uagb/post-title",component:o.a}),w({blockName:"uagb/post-image",component:n.a}),w({blockName:"uagb/post-meta",component:i.a}),w({blockName:"uagb/post-excerpt",component:s.a}),w({blockName:"uagb/post-button",component:r.a});const p=t=>{return{..."object"==typeof b[e=t]&&Object.keys(b[e]).length>0?b[e]:{},...b.any};var e},d=t=>t&&0!==t.length?t.map(t=>[t.name,{...t.attributes,post:void 0,children:t.innerBlocks.length>0?d(t.innerBlocks):[]}]):[]},187:function(t,e,a){"use strict";var o,i=a(15),n=a.n(i),s=a(188),r=0,u={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},l={};l.locals=s.a.locals||{},l.use=function(){return r++||(o=n()(s.a,u)),l},l.unuse=function(){r>0&&!--r&&(o(),o=null)},e.a=l},188:function(t,e,a){"use strict";var o=a(16),i=a.n(o)()((function(t){return t[1]}));i.push([t.i,"/**\n * Editor styles for the admin\n */\n.uagb-post-grid .uagb-post__inner-wrap {\n  background-clip: content-box !important; }\n\n.uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-post__items {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n  color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n",""]),e.a=i},520:function(t,e,a){"use strict";a.r(e);var o=a(180),i=a(0),n=a.n(i),s=a(3),r=a.n(s),u=a(7),l=a(10),M=a(8);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t}).apply(this,arguments)}const N=Object(i.lazy)(()=>a.e(1).then(a.t.bind(null,467,7)));function g(t){const e=Object(i.useRef)(),{attributes:a,className:s,latestPosts:g,block_id:b}=t,w=Object(l.a)(),{isPreview:L,columns:j,tcolumns:p,mcolumns:d,imgPosition:D,postsToShow:y,autoplay:m,pauseOnHover:C,transitionSpeed:z,infiniteLoop:T,arrowSize:I,arrowBorderSize:E,arrowBorderRadius:k,arrowColor:Q,arrowDots:O,equalHeight:x,layoutConfig:Y,rowGap:_}=a,h=()=>{setTimeout(()=>{if(null!=e&&e.current){var t,a;const o=null==e||null===(t=e.current)||void 0===t?void 0:t.offsetWidth,i=100-_/o*100,n=null==e||null===(a=e.current)||void 0===a?void 0:a.closest(".uagb-post__image-position-background");if(n){const t=null==n?void 0:n.getElementsByClassName("uagb-post__image");for(const e of t)e&&(e.style.width=i+"%",e.style.marginLeft=_/2+"px")}}},100)};Object(i.useEffect)(()=>{h()},[e]),Object(i.useEffect)(()=>{h()},[D]);const S=g.length>y?g.slice(0,y):g;function A(){return n.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:Q,borderRadius:k,borderWidth:E}},u.a.carousel_right)}function v(){return n.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:Q,borderRadius:k,borderWidth:E}},u.a.carousel_left)}const f=x?"uagb-post__carousel_equal-height":"",J={slidesToShow:j,slidesToScroll:1,autoplaySpeed:2e3,autoplay:m,infinite:T,pauseOnHover:C,speed:z,arrows:"arrows"===O||"arrows_dots"===O,dots:"dots"===O||"arrows_dots"===O,rtl:!1,afterChange:()=>{x&&uagb_carousel_height(b)},nextArrow:n.a.createElement(A,{arrowSize:I}),prevArrow:n.a.createElement(v,{arrowSize:I}),responsive:[{breakpoint:1024,settings:{slidesToShow:p,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:d,slidesToScroll:1}}]},R=S.map((a,i)=>n.a.createElement("article",{ref:e,key:i,className:"uagb-post__inner-wrap"},Object(o.e)("uagb/post-carousel",a,Y,t.attributes,t.categoriesList)));return j>=S.length?n.a.createElement("div",{className:r()("is-carousel","uagb-post__columns-"+j,"uagb-post__columns-tablet-"+p,"uagb-post__columns-mobile-"+d,"uagb-post__items",s,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-"+D,""+f,"uagb-editor-preview-mode-"+w.toLowerCase(),"uagb-block-"+b),"data-blog-id":b},n.a.createElement(o.b,{parentName:"uagb/post-carousel",parentClassName:"uagb-block-grid"},R)):n.a.createElement(i.Suspense,{fallback:Object(M.a)()},L?n.a.createElement("img",{width:"100%",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRjFGMUYyIiBkPSJNMTY3LjgzLDI0OC4wNTdjMCw0LjU4NC0zLjcxNyw4LjMwMi04LjMwMiw4LjMwMkgyOS40NjVjLTQuNTg1LDAtOC4zMDItMy43MTgtOC4zMDItOC4zMDJWMTAxLjk0Mw0KCQkJYzAtNC41ODUsMy43MTYtOC4zMDIsOC4zMDItOC4zMDJoMTMwLjA2M2M0LjU4NCwwLDguMzAyLDMuNzE2LDguMzAyLDguMzAyVjI0OC4wNTdMMTY3LjgzLDI0OC4wNTd6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTEzOC4zMywxMzUuODg3YzAsMi44MDctMi4yNzUsNS4wODItNS4wODIsNS4wODJINTUuNzQ2Yy0yLjgwNywwLTUuMDgyLTIuMjc1LTUuMDgyLTUuMDgydjAuMzA4DQoJCQkJYzAtMi44MDYsMi4yNzUtNS4wODIsNS4wODItNS4wODJoNzcuNTAyYzIuODA3LDAsNS4wODIsMi4yNzYsNS4wODIsNS4wODJWMTM1Ljg4N3oiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMjAuMDEyLDE0OS45ODhjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0Nkg3MS42MjdjLTEuNDYzLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODQtMi42NDcsMi42NDYtMi42NDdoNDUuNzM4QzExOC44MjksMTQ3LjM0LDEyMC4wMTIsMTQ4LjUyNSwxMjAuMDEyLDE0OS45ODhMMTIwLjAxMiwxNDkuOTg4eiIvPg0KCQkJPGc+DQoJCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTEzNS4wMjQsMTY2LjUyNWMwLDEuNDYyLTEuMTg0LDIuNjQ2LTIuNjQ2LDIuNjQ2SDU2LjYxNmMtMS40NjMsMC0yLjY0Ni0xLjE4NC0yLjY0Ni0yLjY0NmwwLDANCgkJCQkJYzAtMS40NjMsMS4xODQtMi42NDcsMi42NDYtMi42NDdoNzUuNzYyQzEzMy44NCwxNjMuODc3LDEzNS4wMjQsMTY1LjA2MiwxMzUuMDI0LDE2Ni41MjVMMTM1LjAyNCwxNjYuNTI1eiIvPg0KCQkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMzUuMDI0LDE3Ni4xOTFjMCwxLjQ2MS0xLjE4NCwyLjY0NS0yLjY0NiwyLjY0NUg1Ni42MTZjLTEuNDYzLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDVsMCwwDQoJCQkJCWMwLTEuNDYzLDEuMTg0LTIuNjQ4LDIuNjQ2LTIuNjQ4aDc1Ljc2MkMxMzMuODQsMTczLjU0MywxMzUuMDI0LDE3NC43MjgsMTM1LjAyNCwxNzYuMTkxTDEzNS4wMjQsMTc2LjE5MXoiLz4NCgkJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTM1LjAyNCwxODYuODU3YzAsMS40NjMtMS4xODQsMi42NDYtMi42NDYsMi42NDZINTYuNjE2Yy0xLjQ2MywwLTIuNjQ2LTEuMTg0LTIuNjQ2LTIuNjQ2bDAsMA0KCQkJCQljMC0xLjQ2MywxLjE4NC0yLjY0NiwyLjY0Ni0yLjY0Nmg3NS43NjJDMTMzLjg0LDE4NC4yMTEsMTM1LjAyNCwxODUuMzk1LDEzNS4wMjQsMTg2Ljg1N0wxMzUuMDI0LDE4Ni44NTd6Ii8+DQoJCQk8L2c+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTMzLjY1NCwyMTEuNTA4YzAsNC4wNzYtMy4zMDUsNy4zNzktNy4zODEsNy4zNzlINjIuNzJjLTQuMDc2LDAtNy4zODEtMy4zMDMtNy4zODEtNy4zNzlsMCwwDQoJCQkJYzAtNC4wNzYsMy4zMDUtNy4zODEsNy4zODEtNy4zODFoNjMuNTUzQzEzMC4zNDksMjA0LjEyNywxMzMuNjU0LDIwNy40MzIsMTMzLjY1NCwyMTEuNTA4TDEzMy42NTQsMjExLjUwOHoiLz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0YxRjFGMiIgZD0iTTMyOC44MzcsMjQ4LjA1N2MwLDQuNTg0LTMuNzE4LDguMzAyLTguMzAyLDguMzAySDE5MC40NzJjLTQuNTg1LDAtOC4zMDItMy43MTgtOC4zMDItOC4zMDJWMTAxLjk0Mw0KCQkJYzAtNC41ODUsMy43MTctOC4zMDIsOC4zMDItOC4zMDJoMTMwLjA2M2M0LjU4NCwwLDguMzAyLDMuNzE2LDguMzAyLDguMzAyVjI0OC4wNTdMMzI4LjgzNywyNDguMDU3eiIvPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTkuMzM2LDEzNS44ODhjMCwyLjgwNy0yLjI3NSw1LjA4Mi01LjA4Miw1LjA4MmgtNzcuNTAyYy0yLjgwNywwLTUuMDgyLTIuMjc1LTUuMDgyLTUuMDgydjAuMzA4DQoJCQkJYzAtMi44MDYsMi4yNzUtNS4wODIsNS4wODItNS4wODJoNzcuNTAyYzIuODA3LDAsNS4wODIsMi4yNzYsNS4wODIsNS4wODJWMTM1Ljg4OHoiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yODEuMDIsMTQ5Ljk4OGMwLDEuNDYyLTEuMTg0LDIuNjQ2LTIuNjQ2LDIuNjQ2aC00NS43MzhjLTEuNDYzLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODQtMi42NDcsMi42NDYtMi42NDdoNDUuNzM4QzI3OS44MzYsMTQ3LjM0MSwyODEuMDIsMTQ4LjUyNSwyODEuMDIsMTQ5Ljk4OEwyODEuMDIsMTQ5Ljk4OHoiLz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTYuMDMxLDE2Ni41MjVjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0NmgtNzUuNzYyYy0xLjQ2MywwLTIuNjQ2LTEuMTg0LTIuNjQ2LTIuNjQ2bDAsMA0KCQkJCQljMC0xLjQ2MywxLjE4NC0yLjY0NywyLjY0Ni0yLjY0N2g3NS43NjJDMjk0Ljg0OCwxNjMuODc4LDI5Ni4wMzEsMTY1LjA2MywyOTYuMDMxLDE2Ni41MjVMMjk2LjAzMSwxNjYuNTI1eiIvPg0KCQkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTYuMDMxLDE3Ni4xOTFjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0NmgtNzUuNzYyYy0xLjQ2MywwLTIuNjQ2LTEuMTg0LTIuNjQ2LTIuNjQ2bDAsMA0KCQkJCQljMC0xLjQ2MywxLjE4NC0yLjY0NywyLjY0Ni0yLjY0N2g3NS43NjJDMjk0Ljg0OCwxNzMuNTQ0LDI5Ni4wMzEsMTc0LjcyOSwyOTYuMDMxLDE3Ni4xOTFMMjk2LjAzMSwxNzYuMTkxeiIvPg0KCQkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTYuMDMxLDE4Ni44NThjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0NmgtNzUuNzYyYy0xLjQ2MywwLTIuNjQ2LTEuMTg0LTIuNjQ2LTIuNjQ2bDAsMA0KCQkJCQljMC0xLjQ2MywxLjE4NC0yLjY0NywyLjY0Ni0yLjY0N2g3NS43NjJDMjk0Ljg0OCwxODQuMjExLDI5Ni4wMzEsMTg1LjM5NiwyOTYuMDMxLDE4Ni44NThMMjk2LjAzMSwxODYuODU4eiIvPg0KCQkJPC9nPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI5NC42NiwyMTEuNTA4YzAsNC4wNzYtMy4zMDUsNy4zNzktNy4zODEsNy4zNzloLTYzLjU1M2MtNC4wNzYsMC03LjM4MS0zLjMwMy03LjM4MS03LjM3OWwwLDANCgkJCQljMC00LjA3NiwzLjMwNS03LjM4MSw3LjM4MS03LjM4MWg2My41NTNDMjkxLjM1NSwyMDQuMTI3LDI5NC42NiwyMDcuNDMyLDI5NC42NiwyMTEuNTA4TDI5NC42NiwyMTEuNTA4eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=",alt:""}):n.a.createElement(n.a.Fragment,null,n.a.createElement(N,c({className:r()("is-carousel","uagb-post__columns-"+j,"uagb-post__items",s,"uagb-post-grid","uagb-post__arrow-outside","uagb-slick-carousel","uagb-post__image-position-"+D,""+f,"uagb-block-"+b),"data-blog-id":b,style:"dots"===O?{padding:"0 0 35px 0"}:{}},J),R)))}var b=n.a.memo(g),w=a(1),L=a(5),j=a(6),p=a(4),d=a(187);const D=t=>{Object(i.useLayoutEffect)(()=>(d.a.use(),()=>{d.a.unuse()}),[]);const{state:e,setState:a,togglePreview:s}=t;t=t.parentProps;const{attributes:r,categoriesList:u,latestPosts:l,deviceType:M}=t,c=n.a.createElement(j.Disabled,null,n.a.createElement(b,{attributes:r,className:t.className,latestPosts:l,block_id:t.clientId.substr(0,8),categoriesList:u,deviceType:M}));return n.a.createElement(n.a.Fragment,null,e.isEditing?(()=>{const i={template:t.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(o.c)("uagb/post-grid"))};return 0!==t.attributes.layoutConfig.length&&(i.renderAppender=!1),n.a.createElement(j.Placeholder,{label:"Post Carousel Layout"},n.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},n.a.createElement(j.Tip,null,Object(w.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post carousel.")),n.a.createElement(o.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},n.a.createElement("article",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},n.a.createElement("div",{className:"uagb-post__text"},n.a.createElement(p.InnerBlocks,i)))),n.a.createElement("div",{className:"uagb-block-all-post__actions"},n.a.createElement(j.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:()=>{const{block:e,setAttributes:i}=t;i({layoutConfig:Object(o.d)(e)}),a({innerBlocks:e}),s()}},Object(w.__)("Done")),n.a.createElement(j.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:()=>{const{replaceInnerBlocks:a}=t,{innerBlocks:o}=e;a(t.clientId,o),s()}},Object(w.__)("Cancel")),n.a.createElement(j.Button,{className:"uagb-block-all-post__reset-button",onClick:()=>{const{block:e,replaceInnerBlocks:i}=t,n=[];o.a.map(t=>{let[e,a]=t;return n.push(Object(L.createBlock)(e,a)),!0}),i(t.clientId,n),a({innerBlocks:e})}},Object(w.__)("Reset Layout")))))})():c)};e.default=n.a.memo(D)}}]);