(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[68],{462:function(e,t,a){var r,i,n,s;n={id:"ev-emitter/ev-emitter",exports:{},loaded:!1},r="function"==typeof(i=function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var a=this._events=this._events||{},r=a[e]=a[e]||[];return-1==r.indexOf(t)&&r.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var a=this._onceEvents=this._onceEvents||{};return(a[e]=a[e]||[])[t]=!0,this}},t.off=function(e,t){var a=this._events&&this._events[e];if(a&&a.length){var r=a.indexOf(t);return-1!=r&&a.splice(r,1),this}},t.emitEvent=function(e,t){var a=this._events&&this._events[e];if(a&&a.length){var r=0,i=a[r];t=t||[];for(var n=this._onceEvents&&this._onceEvents[e];i;){var s=n&&n[i];s&&(this.off(e,i),delete n[i]),i.apply(this,t),i=a[r+=s?0:1]}return this}},e})?i.call(n.exports,a,n.exports,n):i,n.loaded=!0,void 0!==r||(r=n.exports),function(a,i){"use strict";void 0===(s=function(e){return function(e,t){function a(e,t){for(var a in t)e[a]=t[a];return e}function r(e,t,i){return this instanceof r?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=function(e){var t=[];if(Array.isArray(e))t=e;else if("number"==typeof e.length)for(var a=0;a<e.length;a++)t.push(e[a]);else t.push(e);return t}(e),this.options=a({},this.options),"function"==typeof t?i=t:a(this.options,t),i&&this.on("always",i),this.getImages(),s&&(this.jqDeferred=new s.Deferred),void setTimeout(function(){this.check()}.bind(this))):new r(e,t,i)}function i(e){this.img=e}function n(e,t){this.url=e,this.element=t,this.img=new Image}var s=e.jQuery,l=e.console;r.prototype=Object.create(t.prototype),r.prototype.options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&o[t]){for(var a=e.querySelectorAll("img"),r=0;r<a.length;r++){var i=a[r];this.addImage(i)}if("string"==typeof this.options.background){var n=e.querySelectorAll(this.options.background);for(r=0;r<n.length;r++){var s=n[r];this.addElementBackgroundImages(s)}}}};var o={1:!0,9:!0,11:!0};return r.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var a=/url\((['"])?(.*?)\1\)/gi,r=a.exec(t.backgroundImage);null!==r;){var i=r&&r[2];i&&this.addBackground(i,e),r=a.exec(t.backgroundImage)}},r.prototype.addImage=function(e){var t=new i(e);this.images.push(t)},r.prototype.addBackground=function(e,t){var a=new n(e,t);this.images.push(a)},r.prototype.check=function(){function e(e,a,r){setTimeout((function(){t.progress(e,a,r)}))}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach((function(t){t.once("progress",e),t.check()})):void this.complete()},r.prototype.progress=function(e,t,a){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&l&&l.log("progress: "+a,e,t)},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},i.prototype=Object.create(t.prototype),i.prototype.check=function(){return this.getIsImageComplete()?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},i.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},i.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},i.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype=Object.create(i.prototype),n.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},r.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((s=t).fn.imagesLoaded=function(e,t){return new r(this,e,t).jqDeferred.promise(s(this))})},r.makeJQueryPlugin(),r}(a,e)}.apply(t,[r]))||(e.exports=s)}(window)},463:function(e,t,a){"use strict";var r=a(15),i=a.n(r)()((function(e){return e[1]}));i.push([e.i,"/**\n * Editor styles for the admin\n */\n/* stylelint-disable at-rule-no-unknown */\n.spectra-image-gallery-init-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  padding: 2rem;\n  width: 100%; }\n  .spectra-image-gallery-init-wrapper .components-input-control__container {\n    box-sizing: border-box;\n    margin: 0;\n    font-weight: var(--heading-weight-500);\n    border: 1px solid #ddd;\n    min-height: 100%;\n    font-size: 13px;\n    line-height: 1.25em;\n    border-radius: 4px; }\n    .spectra-image-gallery-init-wrapper .components-input-control__container:focus {\n      box-shadow: none;\n      border-color: #aaa;\n      color: #444; }\n    .spectra-image-gallery-init-wrapper .components-input-control__container:hover {\n      color: #444; }\n  .spectra-image-gallery-init-wrapper svg {\n    width: 3em;\n    height: 3em; }\n",""]),t.a=i},524:function(e,t,a){"use strict";a.r(t);var r=a(4),i=a.n(r),n=a(0),s=a.n(n),l=a(1),o=a(7),c=a(5),g=a(8),m=e=>{let{attributes:t,setAttributes:a}=e;const{mediaGallery:r,mediaIDs:i}=t;return"inapplicable"!==a&&s.a.createElement("div",{className:"spectra-image-gallery-init-wrapper"},g.a.image_gallery,s.a.createElement("h3",null,Object(l.__)("Spectra - Image Gallery","ultimate-addons-for-gutenberg")),s.a.createElement("p",null,Object(l.__)("Select your images to get started","ultimate-addons-for-gutenberg")),s.a.createElement(c.MediaUpload,{title:Object(l.__)("Select Images","ultimate-addons-for-gutenberg"),onSelect:e=>{let t=!0,r=[],i=[];e.forEach(e=>{e&&e.url&&e.type&&"image"===e.type?(r.push(e.id),i[e.id]=!1):t=!1}),t&&a({mediaGallery:e,mediaIDs:r,focusList:i,readyToRender:!0})},allowedTypes:["image"],multiple:!0,value:i,gallery:!0,render:e=>{var t;let{open:a}=e;return s.a.createElement(o.Button,{isSecondary:!0,onClick:a},null!==(t=r[0])&&void 0!==t&&t.url?Object(l.__)("Replace Images","ultimate-addons-for-gutenberg"):Object(l.__)("Select Images","ultimate-addons-for-gutenberg"))}}))},d=a(43),p=a(262),u=a.n(p),h=a(446),y=a.n(h),f=(a(462),a(11)),b=a(3);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var v,E=e=>{let{attributes:t,setAttributes:a,name:r}=e;const o=r.replace("uagb/",""),{tileSize:c,focusList:m,mediaGallery:p,feedLayout:h,imageDisplayCaption:v,feedMarginTop:E,feedMarginRight:w,feedMarginBottom:k,feedMarginLeft:j,feedMarginTopTab:I,feedMarginRightTab:O,feedMarginBottomTab:N,feedMarginLeftTab:L,feedMarginTopMob:x,feedMarginRightMob:M,feedMarginBottomMob:S,feedMarginLeftMob:T,feedMarginUnit:A,feedMarginUnitTab:C,feedMarginUnitMob:$,gridImageGap:B,gridImageGapTab:D,gridImageGapMob:z,gridImageGapUnit:P,gridImageGapUnitTab:H,gridImageGapUnitMob:G,imageCaptionLength:V,captionDisplayType:q,imageCaptionAlignment:R,imageDefaultCaption:U,carouselStartAt:W,carouselLoop:J,carouselAutoplay:F,carouselAutoplaySpeed:Q,carouselPauseOnHover:K,carouselTransitionSpeed:X,gridPages:Y,gridPageNumber:Z,generateSpecialTiles:ee,feedPagination:te,paginateUseArrows:ae,paginateUseDots:re,paginateUseLoader:ie,paginateLimit:ne,paginateButtonText:se,columnsDesk:le,columnsTab:oe,columnsMob:ce}=t,ge=Object(b.b)(V,"imageCaptionLength",o),me=Object(b.b)(W,"carouselStartAt",o),de=Object(b.b)(X,"carouselTransitionSpeed",o),pe=Object(b.b)(Q,"carouselAutoplaySpeed",o),ue=Object(b.b)(ne,"paginateLimit",o),he=Object(b.b)(le,"columnsDesk",o),ye=isNaN(oe)?he:oe,fe=isNaN(ce)?ye:ce,be=te&&("grid"===h||"masonry"===h),[_e,ve]=Object(n.useState)(0),[Ee,we]=Object(n.useState)(!1),ke=Object(n.useRef)(null),je=Object(n.useRef)([]),Ie=Object(n.useRef)(null),Oe=Object(f.a)();Object(n.useEffect)(()=>{p.length<he&&a({columnsDesk:p.length}),p.length<ye&&a({columnsTab:p.length}),p.length<fe&&a({columnsMob:p.length}),p&&re&&"carousel"===h?ve(p.length>he?ke.current.children[0].querySelector(".slick-dots").clientHeight:0):"tiled"===h&&p.forEach(e=>{void 0!==je.current[e.id]&&null!==je.current[e.id]&&m[e.id]&&!je.current[e.id].classList.contains("spectra-image-gallery__media-wrapper--focus")&&je.current[e.id].classList.add("spectra-image-gallery__media-wrapper--focus")})},[JSON.stringify(p)]),Object(n.useEffect)(()=>{"tiled"===h&&(Ie.current.style.display="initial",a({tileSize:Math.round(Ie.current.getBoundingClientRect().width)}),imagesLoaded(je.current).on("progress",(e,t)=>{ee&&t.isLoaded&&Se(t.img)}))},[JSON.stringify(p),h,ee,le,oe,ce,E,w,k,j,I,O,N,L,x,M,S,T,A,C,$,B,D,z,P,H,G]),Object(n.useEffect)(()=>{setTimeout(()=>{"tiled"===h&&(Ie.current.style.display="initial",a({tileSize:Math.round(Ie.current.getBoundingClientRect().width)}),imagesLoaded(je.current).on("progress",(e,t)=>{ee&&t.isLoaded&&Se(t.img)}))},250)},[Oe]),Object(n.useEffect)(()=>{setTimeout(()=>{Ie.current.style.display="none"},2e3)},[c]),Object(n.useEffect)(()=>{if(Ee){for(let e=0;e<m.length;e++)void 0!==m[e]&&void 0!==je.current[e]&&null!==je.current[e]&&(m[e]?je.current[e].classList.add("spectra-image-gallery__media-wrapper--focus"):je.current[e].classList.remove("spectra-image-gallery__media-wrapper--focus"));we(!1)}},[Ee]);const Ne=()=>s.a.createElement("button",{type:"button","data-role":"none",className:i()("spectra-image-gallery__control-arrows","spectra-image-gallery__control-arrows--"+h,{"slick-next":"carousel"===h||"tiled"===h,"slick-arrow":"carousel"===h||"tiled"===h}),"aria-label":"Next",tabIndex:"0","data-direction":"Next",onClick:()=>"grid"===h?a({gridPageNumber:Z+1}):"",disabled:"grid"===h&&Z===Y},g.a.carousel_right),Le=()=>s.a.createElement("button",{type:"button","data-role":"none",className:i()("spectra-image-gallery__control-arrows","spectra-image-gallery__control-arrows--"+h,{"slick-prev":"carousel"===h,"slick-arrow":"carousel"===h}),"aria-label":"Prev",tabIndex:"0","data-direction":"Prev",onClick:()=>"grid"===h?a({gridPageNumber:Z-1}):"",disabled:"grid"===h&&1===Z},g.a.carousel_left),xe={arrows:ae,dots:re,initialSlide:me,infinite:J,autoplay:F,autoplaySpeed:pe,pauseOnHover:K,speed:de,slidesToShow:he,nextArrow:s.a.createElement(Ne,null),prevArrow:s.a.createElement(Le,null),responsive:[{breakpoint:1024,settings:{slidesToShow:ye}},{breakpoint:767,settings:{slidesToShow:fe}}]},Me=(e,t)=>{let r=m;r[e.id]=t,a({focusList:r}),we(!0)},Se=e=>{e.naturalWidth>=2*e.naturalHeight-e.naturalHeight/2?(e.parentElement.parentElement.classList.add("spectra-image-gallery__media-wrapper--wide"),e.parentElement.classList.add("spectra-image-gallery__media--tiled-wide")):e.naturalHeight>=2*e.naturalWidth-e.naturalWidth/2&&(e.parentElement.parentElement.classList.add("spectra-image-gallery__media-wrapper--tall"),e.parentElement.classList.add("spectra-image-gallery__media--tiled-tall"))},Te=()=>(be&&a({gridPages:Math.ceil(p.length/ue)}),(be?p.slice((Z-1)*ue,Z*ue):p).map(e=>Ae(e))),Ae=e=>s.a.createElement("div",{className:"spectra-image-gallery__media-wrapper",key:e.id,ref:t=>je.current[e.id]=t},Ce(e),"tiled"===h&&(e=>{return m[e.id]?(t=e,s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"37 0.083 24 24",className:"spectra-image-gallery__control-focus",onClick:()=>Me(t,!1)},s.a.createElement("path",{d:"M45.791,10.375c1.1,0,2-0.9,2-2V4h-1.5v4.375c0,0.3-0.2,0.5-0.5,0.5h-4.376v1.5H45.791z"}),s.a.createElement("path",{d:"M51.041,8.376c0,1.1,0.9,2,2,2h4.375v-1.5h-4.375c-0.299,0-0.5-0.2-0.5-0.5V4h-1.5V8.376z"}),s.a.createElement("path",{d:"M45.791,13.625c1.1,0,2,0.9,2,2V20h-1.5v-4.375c0-0.3-0.2-0.5-0.5-0.5h-4.376v-1.5H45.791z"}),s.a.createElement("path",{d:"M51.041,15.625c0-1.1,0.9-2,2-2h4.375v1.5h-4.375c-0.299,0-0.5,0.199-0.5,0.5V20h-1.5V15.625z"}))):(e=>s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",className:"spectra-image-gallery__control-focus",onClick:()=>Me(e,!0)},s.a.createElement("path",{d:"M6,4C4.9,4,4,4.9,4,6v4.375h1.5V6c0-0.3,0.2-0.5,0.5-0.5h4.376V4H6z"}),s.a.createElement("path",{d:"M20,6c0-1.1-0.9-2-2-2h-4.375v1.5H18c0.299,0,0.5,0.2,0.5,0.5v4.376H20V6z"}),s.a.createElement("path",{d:"M6,20c-1.1,0-2-0.9-2-2v-4.375h1.5V18c0,0.3,0.2,0.5,0.5,0.5h4.376V20H6z"}),s.a.createElement("path",{d:"M20,18c0,1.1-0.9,2-2,2h-4.375v-1.5H18c0.299,0,0.5-0.199,0.5-0.5v-4.375H20V18z"})))(e);var t})(e)),Ce=e=>s.a.createElement(s.a.Fragment,null,"bar-outside"===q&&"top"===Object(d.a)(R,1)&&v&&s.a.createElement("div",{className:i()("spectra-image-gallery__media-thumbnail-caption-wrapper","spectra-image-gallery__media-thumbnail-caption-wrapper--"+q)},$e(e)),s.a.createElement("div",{className:i()("spectra-image-gallery__media","spectra-image-gallery__media--"+h)},s.a.createElement("img",{className:i()("spectra-image-gallery__media-thumbnail","spectra-image-gallery__media-thumbnail--"+h),src:e.url}),s.a.createElement("div",{className:"spectra-image-gallery__media-thumbnail-blurrer"}),v?"bar-outside"!==q&&s.a.createElement("div",{className:i()("spectra-image-gallery__media-thumbnail-caption-wrapper","spectra-image-gallery__media-thumbnail-caption-wrapper--"+q)},$e(e)):s.a.createElement("div",{className:i()("spectra-image-gallery__media-thumbnail-caption-wrapper","spectra-image-gallery__media-thumbnail-caption-wrapper--overlay")})),"bar-outside"===q&&"top"!==Object(d.a)(R,1)&&v&&s.a.createElement("div",{className:i()("spectra-image-gallery__media-thumbnail-caption-wrapper","spectra-image-gallery__media-thumbnail-caption-wrapper--"+q)},$e(e))),$e=e=>{let t=!!e.caption,a=e.caption?e.caption:e.url?U:"Unable to load image";if(t&&e.caption.length<=ge)t=!1;else if(t)switch(a=a.substr(0,ge),-1===a.lastIndexOf(" ")?-1===e.caption.lastIndexOf(" ")?a.length===e.caption.split(" ")[0].length?t=!1:a="":a.length!==e.caption.split(" ")[0].length&&(a=""):a.length===e.caption.length?t=!1:" "!==e.caption.charAt(a.length)&&(a=a.substr(0,Math.min(a.length,a.lastIndexOf(" ")))),a.charAt(a.length-1)){case",":case".":case" ":case"'":a=a.slice(0,a.length-1)}return s.a.createElement("div",{className:i()("spectra-image-gallery__media-thumbnail-caption","spectra-image-gallery__media-thumbnail-caption--"+q)},`${Object(l.__)(a,"ultimate-addons-for-gutenberg")}${t?" ...":""}`)};return p?(()=>{switch(h){case"grid":const e="grid";return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:i()("spectra-image-gallery","spectra-image-gallery__layout--"+e,`spectra-image-gallery__layout--${e}-col-${he}`,`spectra-image-gallery__layout--${e}-col-tab-${ye}`,`spectra-image-gallery__layout--${e}-col-mob-${fe}`)},Te()),te&&s.a.createElement("div",{className:i()("spectra-image-gallery__control-wrapper")},s.a.createElement(Le,null),s.a.createElement("ul",{className:i()("spectra-image-gallery__control-dots")},[...Array(Y)].map((e,t)=>s.a.createElement("li",{key:t,className:i()("spectra-image-gallery__control-dot",{"spectra-image-gallery__control-dot--active":t===Z-1}),"data-go-to":t+1},s.a.createElement("button",{onClick:()=>a({gridPageNumber:t+1})})))),s.a.createElement(Ne,null)));case"masonry":return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{className:i()("spectra-image-gallery","spectra-image-gallery__layout--"+h,`spectra-image-gallery__layout--${h}-col-${he}`,`spectra-image-gallery__layout--${h}-col-tab-${ye}`,`spectra-image-gallery__layout--${h}-col-mob-${fe}`),updateOnEachImageLoad:!0},Te()),te&&s.a.createElement(s.a.Fragment,null,ie?s.a.createElement("div",{className:"spectra-image-gallery__control-loader"},s.a.createElement("div",{className:"spectra-image-gallery__control-loader--1"}),s.a.createElement("div",{className:"spectra-image-gallery__control-loader--2"}),s.a.createElement("div",{className:"spectra-image-gallery__control-loader--3"})):s.a.createElement("div",{className:"spectra-image-gallery__control-wrapper"},s.a.createElement("div",{className:i()("spectra-image-gallery__control-button"),"aria-label":Object(l.__)(se,"ultimate-addons-for-gutenberg"),tabIndex:"0"},Object(l.__)(se,"ultimate-addons-for-gutenberg")))));case"tiled":return s.a.createElement("div",{className:i()("spectra-image-gallery","spectra-image-gallery__layout--"+h,`spectra-image-gallery__layout--${h}-col-${he}`,`spectra-image-gallery__layout--${h}-col-tab-${ye}`,`spectra-image-gallery__layout--${h}-col-mob-${fe}`)},Te(),s.a.createElement("div",{className:"spectra-image-gallery__media-sizer",ref:Ie}));case"carousel":return s.a.createElement("div",{className:i()("spectra-image-gallery","spectra-image-gallery__layout--"+h),ref:ke,style:{"margin-bottom":_e+"px"}},s.a.createElement(y.a,_({className:i()("uagb-slick-carousel")},xe),Te()))}})():s.a.createElement("div",{className:"spectra-image-gallery-init-wrapper"},g.a.image_gallery,s.a.createElement("h3",null,Object(l.__)("Spectra - Image Gallery","ultimate-addons-for-gutenberg")),s.a.createElement("p",null,Object(l.__)("No images to display...","ultimate-addons-for-gutenberg")))},w=a(14),k=a.n(w),j=a(463),I=0,O={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},N={};N.locals=j.a.locals||{},N.use=function(){return I++||(v=k()(j.a,O)),N},N.unuse=function(){I>0&&!--I&&(v(),v=null)};var L=N;const x=e=>{Object(n.useLayoutEffect)(()=>(L.use(),()=>{L.unuse()}),[]),e=e.parentProps;const{attributes:t,setAttributes:a,className:r,name:l}=e,{block_id:o,readyToRender:c,isPreview:g}=t,d=Object(f.a)(),p=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/image-gallery.svg";return s.a.createElement(s.a.Fragment,null,g?s.a.createElement("img",{width:"100%",src:p,alt:""}):s.a.createElement("div",{className:i()(r,"uagb-editor-preview-mode-"+d.toLowerCase(),"uagb-block-"+o)},c?s.a.createElement(E,{attributes:t,setAttributes:a,block_id:o,name:l}):s.a.createElement(m,{attributes:t,setAttributes:a})))};t.default=s.a.memo(x)}}]);