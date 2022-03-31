(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[72],{430:function(e,a,t){"use strict";var l=t(15),r=t.n(l)()((function(e){return e[1]}));r.push([e.i,"/**\n * Editor styles for the admin\n */\n.uag-image-gallery-init-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  padding: 2rem;\n  width: 100%; }\n  .uag-image-gallery-init-wrapper .components-input-control__container {\n    box-sizing: border-box;\n    margin: 0;\n    font-weight: var(--heading-weight-500);\n    border: 1px solid #ddd;\n    min-height: 100%;\n    font-size: 13px;\n    line-height: 1.25em;\n    border-radius: 4px; }\n    .uag-image-gallery-init-wrapper .components-input-control__container:focus {\n      box-shadow: none;\n      border-color: #aaa;\n      color: #444; }\n    .uag-image-gallery-init-wrapper .components-input-control__container:hover {\n      color: #444; }\n",""]),a.a=r},486:function(e,a,t){"use strict";t.r(a);var l=t(3),r=t.n(l),i=t(0),n=t.n(i),o=t(1),g=t(6),c=t(4),s=t(7),u=e=>{let{attributes:a,setAttributes:t}=e;const{mediaGallery:l,mediaIDs:r}=a;return"inapplicable"!==t&&n.a.createElement("div",{className:"uag-image-gallery-init-wrapper"},s.a.image_gallery,n.a.createElement("h3",null,Object(o.__)("Spectra - Image Gallery","ultimate-addons-for-gutenberg")),n.a.createElement("p",null,Object(o.__)("Select your images and you're all good to go!","ultimate-addons-for-gutenberg")),n.a.createElement(c.MediaUpload,{title:Object(o.__)("Select Images","ultimate-addons-for-gutenberg"),onSelect:e=>{let a=!0,l=[],r=[];e.forEach(e=>{e&&e.url&&e.type&&"image"===e.type?(l.push(e.id),r[e.id]=!1):a=!1}),a&&t({mediaGallery:e,mediaIDs:l,focusList:r,readyToRender:!0})},allowedTypes:["image"],multiple:!0,value:r,gallery:!0,render:e=>{var a;let{open:t}=e;return n.a.createElement(g.Button,{isSecondary:!0,onClick:t},null!==(a=l[0])&&void 0!==a&&a.url?Object(o.__)("Replace Images","ultimate-addons-for-gutenberg"):Object(o.__)("Select Images","ultimate-addons-for-gutenberg"))}}))},m=t(29),d=t(219),p=t.n(d),y=t(407),b=t.n(y),_=t(423),f=t.n(_);function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var v,w=e=>{let{attributes:a,setAttributes:t,block_id:l}=e;const{tileSize:g,focusList:c,mediaGallery:u,feedLayout:d,useLightbox:y,postDisplayCaption:_,feedMarginTop:v,feedMarginRight:w,feedMarginBottom:E,feedMarginLeft:N,feedMarginTopTab:M,feedMarginRightTab:O,feedMarginBottomTab:j,feedMarginLeftTab:S,feedMarginTopMob:k,feedMarginRightMob:L,feedMarginBottomMob:x,feedMarginLeftMob:T,feedMarginUnit:C,feedMarginUnitTab:$,feedMarginUnitMob:P,gridPostGap:A,gridPostGapTab:I,gridPostGapMob:z,gridPostGapUnit:R,gridPostGapUnitTab:G,gridPostGapUnitMob:U,postCaptionLength:H,captionDisplayType:B,postCaptionAlignment:D,postDefaultCaption:F,carouselStartAt:V,carouselLoop:W,carouselAutoplay:q,carouselAutoplaySpeed:J,carouselPauseOnHover:K,carouselTransitionSpeed:Q,gridPages:X,gridPageNumber:Y,generateSpecialTiles:Z,feedPagination:ee,paginateUseArrows:ae,paginateUseDots:te,paginateUseLoader:le,paginateLimit:re,paginateButtonText:ie,columnsDesk:ne,columnsTab:oe,columnsMob:ge}=a,ce=ee&&("grid"===d||"masonry"===d),[se,ue]=Object(i.useState)(0),[me,de]=Object(i.useState)(!1),[pe,ye]=Object(i.useState)(),[be,_e]=Object(i.useState)(),fe=Object(i.useRef)(null),he=Object(i.useRef)(null),ve=Object(i.useRef)(null),we=Object(i.useRef)(null),Ee=Object(i.useRef)([]);Object(i.useEffect)(()=>{u&&te&&"carousel"===d&&ue(u.length>ne?fe.current.children[0].querySelector(".slick-dots").clientHeight:0),"tiled"===d&&u.forEach(e=>{void 0!==Ee.current[e.id]&&null!==Ee.current[e.id]&&c[e.id]&&!Ee.current[e.id].classList.contains("uag-image-gallery-media-wrapper--focus")&&Ee.current[e.id].classList.add("uag-image-gallery-media-wrapper--focus")})},[u.length]),Object(i.useEffect)(()=>{setTimeout(()=>{switch(d){case"tiled":const e=he.current.querySelector(".uag-image-gallery__layout--tiled");t({tileSize:ve.current.getBoundingClientRect().width}),we.current=new f.a(e,{itemSelector:".uag-image-gallery-media-wrapper",layoutMode:"masonry",masonry:{columnWidth:".uag-image-gallery-media-spacer"}}),imagesLoaded(e).on("progress",(e,a)=>{we.current.layout(),Z&&a.isLoaded&&Se(a.img)}),we.current.layout();break;default:we.current&&we.current.destroy()}},10)},[u.length,d,Z,ne,oe,ge,v,w,E,N,M,O,j,S,k,L,x,T,C,$,P,A,I,z,R,G,U]),Object(i.useEffect)(()=>{if("tiled"===d)if(de(!0),y)for(let e=0;e<Ee.current.length;e++)void 0!==Ee.current[e]&&null!==Ee.current[e]&&Ee.current[e].classList.add("uag-image-gallery-media--clickable");else for(let e=0;e<Ee.current.length;e++)void 0!==Ee.current[e]&&null!==Ee.current[e]&&Ee.current[e].classList.remove("uag-image-gallery-media--clickable")},[y,d]),Object(i.useEffect)(()=>{if(me){for(let e=0;e<c.length;e++)void 0!==c[e]&&void 0!==Ee.current[e]&&null!==Ee.current[e]&&(c[e]?Ee.current[e].classList.add("uag-image-gallery-media-wrapper--focus"):Ee.current[e].classList.remove("uag-image-gallery-media-wrapper--focus"));we.current&&we.current.layout(),de(!1)}},[me]);const Ne=()=>n.a.createElement("button",{type:"button","data-role":"none",className:r()("uag-image-gallery__control-arrows","uag-image-gallery__control-arrows--"+d,{"slick-next":"carousel"===d||"tiled"===d,"slick-arrow":"carousel"===d||"tiled"===d}),"aria-label":"Next",tabIndex:"0","data-direction":"Next",onClick:()=>"grid"===d?t({gridPageNumber:Y+1}):"",disabled:"grid"===d&&Y===X},s.a.carousel_right),Me=()=>n.a.createElement("button",{type:"button","data-role":"none",className:r()("uag-image-gallery__control-arrows","uag-image-gallery__control-arrows--"+d,{"slick-prev":"carousel"===d,"slick-arrow":"carousel"===d}),"aria-label":"Prev",tabIndex:"0","data-direction":"Prev",onClick:()=>"grid"===d?t({gridPageNumber:Y-1}):"",disabled:"grid"===d&&1===Y},s.a.carousel_left),Oe={arrows:ae,dots:te,initialSlide:V,infinite:W,autoplay:q,autoplaySpeed:J,pauseOnHover:K,speed:Q,slidesToShow:ne,nextArrow:n.a.createElement(Ne,null),prevArrow:n.a.createElement(Me,null),responsive:[{breakpoint:1024,settings:{slidesToShow:oe}},{breakpoint:767,settings:{slidesToShow:ge}}]},je=(e,a)=>{let l=c;l[e.id]=a,t({focusList:l}),de(!0)},Se=e=>{e.naturalWidth>=2*e.naturalHeight-e.naturalHeight/2?(e.parentElement.parentElement.classList.add("uag-image-gallery-media-wrapper--wide"),e.parentElement.classList.add("uag-image-gallery-media--tiled-wide"),we.current.layout()):e.naturalHeight>=2*e.naturalWidth-e.naturalWidth/2&&(e.parentElement.parentElement.classList.add("uag-image-gallery-media-wrapper--tall"),e.parentElement.classList.add("uag-image-gallery-media--tiled-tall"),we.current.layout())},ke=()=>(ce&&t({gridPages:Math.ceil(u.length/re)}),(ce?u.slice((Y-1)*re,Y*re):u).map(e=>Le(e))),Le=e=>n.a.createElement("div",{className:r()("uag-image-gallery-media-wrapper",{"uag-image-gallery-media--clickable":"tiled"!==d&&y}),key:e.id,ref:a=>Ee.current[e.id]=a},xe(e),"tiled"===d&&(e=>{return c[e.id]?(a=e,n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"uag-image-gallery__control-focus",onClick:()=>je(a,!1)},n.a.createElement("path",{d:"M128 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32v-96C160 334.3 145.7 320 128 320zM416 320h-96c-17.69 0-32 14.31-32 32v96c0 17.69 14.31 32 32 32s32-14.31 32-32v-64h64c17.69 0 32-14.31 32-32S433.7 320 416 320zM320 192h96c17.69 0 32-14.31 32-32s-14.31-32-32-32h-64V64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96C288 177.7 302.3 192 320 192zM128 32C110.3 32 96 46.31 96 64v64H32C14.31 128 0 142.3 0 160s14.31 32 32 32h96c17.69 0 32-14.31 32-32V64C160 46.31 145.7 32 128 32z"}))):(e=>n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"uag-image-gallery__control-focus",onClick:()=>je(e,!0)},n.a.createElement("path",{d:"M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z"})))(e);var a})(e)),xe=e=>n.a.createElement(n.a.Fragment,null,"bar-outside"===B&&"top"===Object(m.a)(D,1)&&_&&n.a.createElement("div",{className:r()("uag-image-gallery-media__thumbnail-caption-wrapper","uag-image-gallery-media__thumbnail-caption-wrapper--"+B)},Te(e)),n.a.createElement("div",{className:r()("uag-image-gallery-media","uag-image-gallery-media--"+d)},n.a.createElement("img",{className:r()("uag-image-gallery-media__thumbnail","uag-image-gallery-media__thumbnail--"+d),src:e.url}),n.a.createElement("div",{className:"uag-image-gallery-media__thumbnail-blurrer"}),_?"bar-outside"!==B&&n.a.createElement("div",{className:r()("uag-image-gallery-media__thumbnail-caption-wrapper","uag-image-gallery-media__thumbnail-caption-wrapper--"+B)},Te(e)):n.a.createElement("div",{className:r()("uag-image-gallery-media__thumbnail-caption-wrapper","uag-image-gallery-media__thumbnail-caption-wrapper--overlay")})),"bar-outside"===B&&"top"!==Object(m.a)(D,1)&&_&&n.a.createElement("div",{className:r()("uag-image-gallery-media__thumbnail-caption-wrapper","uag-image-gallery-media__thumbnail-caption-wrapper--"+B)},Te(e))),Te=e=>{let a=!!e.caption,t=e.caption?e.caption:e.url?y?"Click to view image":F:"Unable to load image";if(a&&e.caption.length<=H)a=!1;else if(a)switch(t=t.substr(0,H),-1===t.lastIndexOf(" ")?-1===e.caption.lastIndexOf(" ")?t.length===e.caption.split(" ")[0].length?a=!1:t="":t.length!==e.caption.split(" ")[0].length&&(t=""):t.length===e.caption.length?a=!1:" "!==e.caption.charAt(t.length)&&(t=t.substr(0,Math.min(t.length,t.lastIndexOf(" ")))),t.charAt(t.length-1)){case",":case".":case" ":case"'":t=t.slice(0,t.length-1)}return n.a.createElement("div",{className:r()("uag-image-gallery-media__thumbnail-caption","uag-image-gallery-media__thumbnail-caption--"+B)},`${Object(o.__)(t,"ultimate-addons-for-gutenberg")}${a?" ...":""}`)};return u?n.a.createElement("div",{ref:he},(()=>{switch(d){case"grid":const e="grid";return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:r()("uag-image-gallery","uag-image-gallery__layout--"+e,`uag-image-gallery__layout--${e}-col-${ne}`,`uag-image-gallery__layout--${e}-col-tab-${oe}`,`uag-image-gallery__layout--${e}-col-mob-${ge}`)},ke()),ee&&n.a.createElement("div",{className:r()("uag-image-gallery__control-wrapper")},n.a.createElement(Me,null),n.a.createElement("ul",{className:r()("uag-image-gallery__control-dots")},[...Array(X)].map((e,a)=>n.a.createElement("li",{key:a,className:r()("uag-image-gallery__control-dot",{"uag-image-gallery__control-dot--active":a===Y-1}),"data-go-to":a+1},n.a.createElement("button",{onClick:()=>t({gridPageNumber:a+1})})))),n.a.createElement(Ne,null)));case"masonry":return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{className:r()("uag-image-gallery","uag-image-gallery__layout--"+d,`uag-image-gallery__layout--${d}-col-${ne}`,`uag-image-gallery__layout--${d}-col-tab-${oe}`,`uag-image-gallery__layout--${d}-col-mob-${ge}`),updateOnEachImageLoad:!0},ke()),ee&&n.a.createElement(n.a.Fragment,null,le?n.a.createElement("div",{className:"uag-image-gallery__control-loader"},n.a.createElement("div",{className:"uag-image-gallery__control-loader--1"}),n.a.createElement("div",{className:"uag-image-gallery__control-loader--2"}),n.a.createElement("div",{className:"uag-image-gallery__control-loader--3"})):n.a.createElement("div",{className:"uag-image-gallery__control-wrapper"},n.a.createElement("div",{className:r()("uag-image-gallery__control-button"),"aria-label":Object(o.__)(ie,"ultimate-addons-for-gutenberg"),tabIndex:"0"},Object(o.__)(ie,"ultimate-addons-for-gutenberg")))));case"tiled":return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:r()("uag-image-gallery","uag-image-gallery__layout--"+d,`uag-image-gallery__layout--${d}-col-${ne}`,`uag-image-gallery__layout--${d}-col-tab-${oe}`,`uag-image-gallery__layout--${d}-col-mob-${ge}`)},n.a.createElement("div",{className:"uag-image-gallery-media-spacer",ref:ve}),ke()));case"carousel":return n.a.createElement("div",{className:r()("uag-image-gallery","uag-image-gallery__layout--"+d),ref:fe,style:{"margin-bottom":se+"px"}},n.a.createElement(b.a,h({className:r()("uagb-slick-carousel")},Oe),ke()))}})()):n.a.createElement("div",{className:"uag-image-gallery-init-wrapper"},s.a.image_gallery,n.a.createElement("h3",null,Object(o.__)("Spectra - Image Gallery","ultimate-addons-for-gutenberg")),n.a.createElement("p",null,Object(o.__)("No images to display...","ultimate-addons-for-gutenberg")))},E=t(14),N=t.n(E),M=t(430),O=0,j={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},S={};S.locals=M.a.locals||{},S.use=function(){return O++||(v=N()(M.a,j)),S},S.unuse=function(){O>0&&!--O&&(v(),v=null)};var k=S;const L=e=>{Object(i.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const{attributes:a,setAttributes:t,className:l,deviceType:o}=e,{block_id:g,readyToRender:c}=a;return n.a.createElement("div",{className:r()(l,"uagb-editor-preview-mode-"+o.toLowerCase(),"uagb-block-"+g)},c?n.a.createElement(w,{attributes:a,setAttributes:t,block_id:g}):n.a.createElement(u,{attributes:a,setAttributes:t}))};a.default=n.a.memo(L)}}]);