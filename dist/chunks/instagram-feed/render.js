(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[72],{430:function(e,a,t){"use strict";var l=t(15),r=t.n(l)()((function(e){return e[1]}));r.push([e.i,"/**\n * Editor styles for the admin\n */\n.uag-image-gallery-init-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  padding: 2rem;\n  width: 100%; }\n  .uag-image-gallery-init-wrapper .components-input-control__container {\n    box-sizing: border-box;\n    margin: 0;\n    font-weight: var(--heading-weight-500);\n    border: 1px solid #ddd;\n    min-height: 100%;\n    font-size: 13px;\n    line-height: 1.25em;\n    border-radius: 4px; }\n    .uag-image-gallery-init-wrapper .components-input-control__container:focus {\n      box-shadow: none;\n      border-color: #aaa;\n      color: #444; }\n    .uag-image-gallery-init-wrapper .components-input-control__container:hover {\n      color: #444; }\n",""]),a.a=r},486:function(e,a,t){"use strict";t.r(a);var l=t(3),r=t.n(l),i=t(0),n=t.n(i),g=t(1),o=t(6),c=t(4),s=t(7),u=e=>{let{attributes:a,setAttributes:t}=e;const{mediaGallery:l,mediaIDs:r}=a;return"inapplicable"!==t&&n.a.createElement("div",{className:"uag-image-gallery-init-wrapper"},s.a.image_gallery,n.a.createElement("h3",null,Object(g.__)("Spectra - Image Gallery","ultimate-addons-for-gutenberg")),n.a.createElement("p",null,Object(g.__)("Select your images and you're all good to go!","ultimate-addons-for-gutenberg")),n.a.createElement(c.MediaUpload,{title:Object(g.__)("Select Images","ultimate-addons-for-gutenberg"),onSelect:e=>{let a=!0,l=[],r=[];e.forEach(e=>{e&&e.url&&e.type&&"image"===e.type?(l.push(e.id),r[e.id]=!1):a=!1}),a&&t({mediaGallery:e,mediaIDs:l,focusList:r,readyToRender:!0})},allowedTypes:["image"],multiple:!0,value:r,gallery:!0,render:e=>{var a;let{open:t}=e;return n.a.createElement(o.Button,{isSecondary:!0,onClick:t},null!==(a=l[0])&&void 0!==a&&a.url?Object(g.__)("Replace Images","ultimate-addons-for-gutenberg"):Object(g.__)("Select Images","ultimate-addons-for-gutenberg"))}}))},m=t(29),d=t(219),p=t.n(d),b=t(407),y=t.n(b),_=t(423),h=t.n(_);function f(){return(f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var v,w=e=>{let{attributes:a,setAttributes:t,block_id:l}=e;const{tileSize:o,focusList:c,mediaGallery:u,feedLayout:d,useLightbox:b,imageDisplayCaption:_,feedMarginTop:v,feedMarginRight:w,feedMarginBottom:E,feedMarginLeft:M,feedMarginTopTab:N,feedMarginRightTab:O,feedMarginBottomTab:S,feedMarginLeftTab:j,feedMarginTopMob:k,feedMarginRightMob:x,feedMarginBottomMob:L,feedMarginLeftMob:T,feedMarginUnit:C,feedMarginUnitTab:I,feedMarginUnitMob:$,gridImageGap:A,gridImageGapTab:z,gridImageGapMob:P,gridImageGapUnit:R,gridImageGapUnitTab:G,gridImageGapUnitMob:U,imageCaptionLength:H,captionDisplayType:D,imageCaptionAlignment:B,imageDefaultCaption:F,imageDefaultCaptionClickable:J,carouselStartAt:V,carouselLoop:W,carouselAutoplay:q,carouselAutoplaySpeed:K,carouselPauseOnHover:Q,carouselTransitionSpeed:X,gridPages:Y,gridPageNumber:Z,generateSpecialTiles:ee,feedPagination:ae,paginateUseArrows:te,paginateUseDots:le,paginateUseLoader:re,paginateLimit:ie,paginateButtonText:ne,columnsDesk:ge,columnsTab:oe,columnsMob:ce}=a,se=ae&&("grid"===d||"masonry"===d),[ue,me]=Object(i.useState)(0),[de,pe]=Object(i.useState)(!1),[be,ye]=Object(i.useState)(),[_e,he]=Object(i.useState)(),fe=Object(i.useRef)(null),ve=Object(i.useRef)(null),we=Object(i.useRef)(null),Ee=Object(i.useRef)(null),Me=Object(i.useRef)([]);Object(i.useEffect)(()=>{t({columnsDesk:Math.min(u.length,Math.max(6,ge))}),t({columnsTab:Math.min(u.length,Math.max(4,ge))}),t({columnsMob:Math.min(u.length,Math.max(3,ge))}),u&&le&&"carousel"===d?me(u.length>ge?fe.current.children[0].querySelector(".slick-dots").clientHeight:0):"tiled"===d&&u.forEach(e=>{void 0!==Me.current[e.id]&&null!==Me.current[e.id]&&c[e.id]&&!Me.current[e.id].classList.contains("uag-image-gallery-media-wrapper--focus")&&Me.current[e.id].classList.add("uag-image-gallery-media-wrapper--focus")})},[JSON.stringify(u)]),Object(i.useEffect)(()=>{setTimeout(()=>{switch(d){case"tiled":const e=ve.current.querySelector(".uag-image-gallery__layout--tiled");t({tileSize:we.current.getBoundingClientRect().width}),Ee.current=new h.a(e,{itemSelector:".uag-image-gallery-media-wrapper",layoutMode:"masonry",masonry:{columnWidth:".uag-image-gallery-media-spacer"}}),imagesLoaded(e).on("progress",(e,a)=>{ee&&a.isLoaded&&(ke(a.img),Ee.current.layout())});break;default:Ee.current&&Ee.current.destroy()}},50)},[JSON.stringify(u),d,ee,ge,oe,ce,v,w,E,M,N,O,S,j,k,x,L,T,C,I,$,A,z,P,R,G,U]),Object(i.useEffect)(()=>{if("tiled"===d)if(pe(!0),b)for(let e=0;e<Me.current.length;e++)void 0!==Me.current[e]&&null!==Me.current[e]&&Me.current[e].classList.add("uag-image-gallery-media--clickable");else for(let e=0;e<Me.current.length;e++)void 0!==Me.current[e]&&null!==Me.current[e]&&Me.current[e].classList.remove("uag-image-gallery-media--clickable")},[b,d]),Object(i.useEffect)(()=>{if(de){for(let e=0;e<c.length;e++)void 0!==c[e]&&void 0!==Me.current[e]&&null!==Me.current[e]&&(c[e]?Me.current[e].classList.add("uag-image-gallery-media-wrapper--focus"):Me.current[e].classList.remove("uag-image-gallery-media-wrapper--focus"));Ee.current&&Ee.current.layout(),pe(!1)}},[de]);const Ne=()=>n.a.createElement("button",{type:"button","data-role":"none",className:r()("uag-image-gallery__control-arrows","uag-image-gallery__control-arrows--"+d,{"slick-next":"carousel"===d||"tiled"===d,"slick-arrow":"carousel"===d||"tiled"===d}),"aria-label":"Next",tabIndex:"0","data-direction":"Next",onClick:()=>"grid"===d?t({gridPageNumber:Z+1}):"",disabled:"grid"===d&&Z===Y},s.a.carousel_right),Oe=()=>n.a.createElement("button",{type:"button","data-role":"none",className:r()("uag-image-gallery__control-arrows","uag-image-gallery__control-arrows--"+d,{"slick-prev":"carousel"===d,"slick-arrow":"carousel"===d}),"aria-label":"Prev",tabIndex:"0","data-direction":"Prev",onClick:()=>"grid"===d?t({gridPageNumber:Z-1}):"",disabled:"grid"===d&&1===Z},s.a.carousel_left),Se={arrows:te,dots:le,initialSlide:V,infinite:W,autoplay:q,autoplaySpeed:K,pauseOnHover:Q,speed:X,slidesToShow:ge,nextArrow:n.a.createElement(Ne,null),prevArrow:n.a.createElement(Oe,null),responsive:[{breakpoint:1024,settings:{slidesToShow:oe}},{breakpoint:767,settings:{slidesToShow:ce}}]},je=(e,a)=>{let l=c;l[e.id]=a,t({focusList:l}),pe(!0)},ke=e=>{e.naturalWidth>=2*e.naturalHeight-e.naturalHeight/2?(e.parentElement.parentElement.classList.add("uag-image-gallery-media-wrapper--wide"),e.parentElement.classList.add("uag-image-gallery-media--tiled-wide")):e.naturalHeight>=2*e.naturalWidth-e.naturalWidth/2&&(e.parentElement.parentElement.classList.add("uag-image-gallery-media-wrapper--tall"),e.parentElement.classList.add("uag-image-gallery-media--tiled-tall"))},xe=()=>(se&&t({gridPages:Math.ceil(u.length/ie)}),(se?u.slice((Z-1)*ie,Z*ie):u).map(e=>Le(e))),Le=e=>n.a.createElement("div",{className:r()("uag-image-gallery-media-wrapper",{"uag-image-gallery-media--clickable":"tiled"!==d&&b}),key:e.id,ref:a=>Me.current[e.id]=a},Te(e),"tiled"===d&&(e=>{return c[e.id]?(a=e,n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"uag-image-gallery__control-focus",onClick:()=>je(a,!1)},n.a.createElement("path",{d:"M128 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32v-96C160 334.3 145.7 320 128 320zM416 320h-96c-17.69 0-32 14.31-32 32v96c0 17.69 14.31 32 32 32s32-14.31 32-32v-64h64c17.69 0 32-14.31 32-32S433.7 320 416 320zM320 192h96c17.69 0 32-14.31 32-32s-14.31-32-32-32h-64V64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96C288 177.7 302.3 192 320 192zM128 32C110.3 32 96 46.31 96 64v64H32C14.31 128 0 142.3 0 160s14.31 32 32 32h96c17.69 0 32-14.31 32-32V64C160 46.31 145.7 32 128 32z"}))):(e=>n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"uag-image-gallery__control-focus",onClick:()=>je(e,!0)},n.a.createElement("path",{d:"M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z"})))(e);var a})(e)),Te=e=>n.a.createElement(n.a.Fragment,null,"bar-outside"===D&&"top"===Object(m.a)(B,1)&&_&&n.a.createElement("div",{className:r()("uag-image-gallery-media__thumbnail-caption-wrapper","uag-image-gallery-media__thumbnail-caption-wrapper--"+D)},Ce(e)),n.a.createElement("div",{className:r()("uag-image-gallery-media","uag-image-gallery-media--"+d)},n.a.createElement("img",{className:r()("uag-image-gallery-media__thumbnail","uag-image-gallery-media__thumbnail--"+d),src:e.url}),n.a.createElement("div",{className:"uag-image-gallery-media__thumbnail-blurrer"}),_?"bar-outside"!==D&&n.a.createElement("div",{className:r()("uag-image-gallery-media__thumbnail-caption-wrapper","uag-image-gallery-media__thumbnail-caption-wrapper--"+D)},Ce(e)):n.a.createElement("div",{className:r()("uag-image-gallery-media__thumbnail-caption-wrapper","uag-image-gallery-media__thumbnail-caption-wrapper--overlay")})),"bar-outside"===D&&"top"!==Object(m.a)(B,1)&&_&&n.a.createElement("div",{className:r()("uag-image-gallery-media__thumbnail-caption-wrapper","uag-image-gallery-media__thumbnail-caption-wrapper--"+D)},Ce(e))),Ce=e=>{let a=!!e.caption,t=e.caption?e.caption:e.url?b?J:F:"Unable to load image";if(a&&e.caption.length<=H)a=!1;else if(a)switch(t=t.substr(0,H),-1===t.lastIndexOf(" ")?-1===e.caption.lastIndexOf(" ")?t.length===e.caption.split(" ")[0].length?a=!1:t="":t.length!==e.caption.split(" ")[0].length&&(t=""):t.length===e.caption.length?a=!1:" "!==e.caption.charAt(t.length)&&(t=t.substr(0,Math.min(t.length,t.lastIndexOf(" ")))),t.charAt(t.length-1)){case",":case".":case" ":case"'":t=t.slice(0,t.length-1)}return n.a.createElement("div",{className:r()("uag-image-gallery-media__thumbnail-caption","uag-image-gallery-media__thumbnail-caption--"+D)},`${Object(g.__)(t,"ultimate-addons-for-gutenberg")}${a?" ...":""}`)};return u?n.a.createElement("div",{className:"uag-image-gallery__iso-ref-wrapper",ref:ve},(()=>{switch(d){case"grid":const e="grid";return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:r()("uag-image-gallery","uag-image-gallery__layout--"+e,`uag-image-gallery__layout--${e}-col-${ge}`,`uag-image-gallery__layout--${e}-col-tab-${oe}`,`uag-image-gallery__layout--${e}-col-mob-${ce}`)},xe()),ae&&n.a.createElement("div",{className:r()("uag-image-gallery__control-wrapper")},n.a.createElement(Oe,null),n.a.createElement("ul",{className:r()("uag-image-gallery__control-dots")},[...Array(Y)].map((e,a)=>n.a.createElement("li",{key:a,className:r()("uag-image-gallery__control-dot",{"uag-image-gallery__control-dot--active":a===Z-1}),"data-go-to":a+1},n.a.createElement("button",{onClick:()=>t({gridPageNumber:a+1})})))),n.a.createElement(Ne,null)));case"masonry":return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{className:r()("uag-image-gallery","uag-image-gallery__layout--"+d,`uag-image-gallery__layout--${d}-col-${ge}`,`uag-image-gallery__layout--${d}-col-tab-${oe}`,`uag-image-gallery__layout--${d}-col-mob-${ce}`),updateOnEachImageLoad:!0},xe()),ae&&n.a.createElement(n.a.Fragment,null,re?n.a.createElement("div",{className:"uag-image-gallery__control-loader"},n.a.createElement("div",{className:"uag-image-gallery__control-loader--1"}),n.a.createElement("div",{className:"uag-image-gallery__control-loader--2"}),n.a.createElement("div",{className:"uag-image-gallery__control-loader--3"})):n.a.createElement("div",{className:"uag-image-gallery__control-wrapper"},n.a.createElement("div",{className:r()("uag-image-gallery__control-button"),"aria-label":Object(g.__)(ne,"ultimate-addons-for-gutenberg"),tabIndex:"0"},Object(g.__)(ne,"ultimate-addons-for-gutenberg")))));case"tiled":return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:r()("uag-image-gallery","uag-image-gallery__layout--"+d,`uag-image-gallery__layout--${d}-col-${ge}`,`uag-image-gallery__layout--${d}-col-tab-${oe}`,`uag-image-gallery__layout--${d}-col-mob-${ce}`)},n.a.createElement("div",{className:"uag-image-gallery-media-spacer",ref:we}),xe()));case"carousel":return n.a.createElement("div",{className:r()("uag-image-gallery","uag-image-gallery__layout--"+d),ref:fe,style:{"margin-bottom":ue+"px"}},n.a.createElement(y.a,f({className:r()("uagb-slick-carousel")},Se),xe()))}})()):n.a.createElement("div",{className:"uag-image-gallery-init-wrapper"},s.a.image_gallery,n.a.createElement("h3",null,Object(g.__)("Spectra - Image Gallery","ultimate-addons-for-gutenberg")),n.a.createElement("p",null,Object(g.__)("No images to display...","ultimate-addons-for-gutenberg")))},E=t(14),M=t.n(E),N=t(430),O=0,S={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},j={};j.locals=N.a.locals||{},j.use=function(){return O++||(v=M()(N.a,S)),j},j.unuse=function(){O>0&&!--O&&(v(),v=null)};var k=j;const x=e=>{Object(i.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const{attributes:a,setAttributes:t,className:l,deviceType:g}=e,{block_id:o,readyToRender:c}=a;return n.a.createElement("div",{className:r()(l,"uagb-editor-preview-mode-"+g.toLowerCase(),"uagb-block-"+o)},c?n.a.createElement(w,{attributes:a,setAttributes:t,block_id:o}):n.a.createElement(u,{attributes:a,setAttributes:t}))};a.default=n.a.memo(x)}}]);