(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[68],{462:function(e,a,t){var r,i,l,n;l={id:"ev-emitter/ev-emitter",exports:{},loaded:!1},r="function"==typeof(i=function(){function e(){}var a=e.prototype;return a.on=function(e,a){if(e&&a){var t=this._events=this._events||{},r=t[e]=t[e]||[];return-1==r.indexOf(a)&&r.push(a),this}},a.once=function(e,a){if(e&&a){this.on(e,a);var t=this._onceEvents=this._onceEvents||{};return(t[e]=t[e]||[])[a]=!0,this}},a.off=function(e,a){var t=this._events&&this._events[e];if(t&&t.length){var r=t.indexOf(a);return-1!=r&&t.splice(r,1),this}},a.emitEvent=function(e,a){var t=this._events&&this._events[e];if(t&&t.length){var r=0,i=t[r];a=a||[];for(var l=this._onceEvents&&this._onceEvents[e];i;){var n=l&&l[i];n&&(this.off(e,i),delete l[i]),i.apply(this,a),i=t[r+=n?0:1]}return this}},e})?i.call(l.exports,t,l.exports,l):i,l.loaded=!0,void 0!==r||(r=l.exports),function(t,i){"use strict";void 0===(n=function(e){return function(e,a){function t(e,a){for(var t in a)e[t]=a[t];return e}function r(e,a,i){return this instanceof r?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=function(e){var a=[];if(Array.isArray(e))a=e;else if("number"==typeof e.length)for(var t=0;t<e.length;t++)a.push(e[t]);else a.push(e);return a}(e),this.options=t({},this.options),"function"==typeof a?i=a:t(this.options,a),i&&this.on("always",i),this.getImages(),n&&(this.jqDeferred=new n.Deferred),void setTimeout(function(){this.check()}.bind(this))):new r(e,a,i)}function i(e){this.img=e}function l(e,a){this.url=e,this.element=a,this.img=new Image}var n=e.jQuery,o=e.console;r.prototype=Object.create(a.prototype),r.prototype.options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var a=e.nodeType;if(a&&s[a]){for(var t=e.querySelectorAll("img"),r=0;r<t.length;r++){var i=t[r];this.addImage(i)}if("string"==typeof this.options.background){var l=e.querySelectorAll(this.options.background);for(r=0;r<l.length;r++){var n=l[r];this.addElementBackgroundImages(n)}}}};var s={1:!0,9:!0,11:!0};return r.prototype.addElementBackgroundImages=function(e){var a=getComputedStyle(e);if(a)for(var t=/url\((['"])?(.*?)\1\)/gi,r=t.exec(a.backgroundImage);null!==r;){var i=r&&r[2];i&&this.addBackground(i,e),r=t.exec(a.backgroundImage)}},r.prototype.addImage=function(e){var a=new i(e);this.images.push(a)},r.prototype.addBackground=function(e,a){var t=new l(e,a);this.images.push(t)},r.prototype.check=function(){function e(e,t,r){setTimeout((function(){a.progress(e,t,r)}))}var a=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach((function(a){a.once("progress",e),a.check()})):void this.complete()},r.prototype.progress=function(e,a,t){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,a]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+t,e,a)},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var a=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[a](this)}},i.prototype=Object.create(a.prototype),i.prototype.check=function(){return this.getIsImageComplete()?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},i.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},i.prototype.confirm=function(e,a){this.isLoaded=e,this.emitEvent("progress",[this,this.img,a])},i.prototype.handleEvent=function(e){var a="on"+e.type;this[a]&&this[a](e)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype=Object.create(i.prototype),l.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},l.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype.confirm=function(e,a){this.isLoaded=e,this.emitEvent("progress",[this,this.element,a])},r.makeJQueryPlugin=function(a){(a=a||e.jQuery)&&((n=a).fn.imagesLoaded=function(e,a){return new r(this,e,a).jqDeferred.promise(n(this))})},r.makeJQueryPlugin(),r}(t,e)}.apply(a,[r]))||(e.exports=n)}(window)},463:function(e,a,t){"use strict";var r=t(15),i=t.n(r)()((function(e){return e[1]}));i.push([e.i,"/**\n * Editor styles for the admin\n */\n/* stylelint-disable at-rule-no-unknown */\n.spectra-image-gallery-init-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  padding: 2rem;\n  width: 100%; }\n  .spectra-image-gallery-init-wrapper .components-input-control__container {\n    box-sizing: border-box;\n    margin: 0;\n    font-weight: var(--heading-weight-500);\n    border: 1px solid #ddd;\n    min-height: 100%;\n    font-size: 13px;\n    line-height: 1.25em;\n    border-radius: 4px; }\n    .spectra-image-gallery-init-wrapper .components-input-control__container:focus {\n      box-shadow: none;\n      border-color: #aaa;\n      color: #444; }\n    .spectra-image-gallery-init-wrapper .components-input-control__container:hover {\n      color: #444; }\n  .spectra-image-gallery-init-wrapper svg {\n    width: 3em;\n    height: 3em; }\n\n.uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--masonry,\n.uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--masonry {\n  height: initial !important;\n  display: grid;\n  grid-auto-flow: dense; }\n  .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper,\n  .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper {\n    width: auto !important;\n    height: auto !important;\n    aspect-ratio: 1; }\n    .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper--wide,\n    .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper--wide {\n      grid-column: span 2;\n      aspect-ratio: 2/1; }\n      .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper--wide .spectra-image-gallery__media--tiled-wide,\n      .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper--wide .spectra-image-gallery__media--tiled-wide {\n        width: 100% !important;\n        height: 100% !important; }\n    .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper--tall,\n    .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper--tall {\n      grid-row: span 2;\n      aspect-ratio: 1/2; }\n      .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper--tall .spectra-image-gallery__media--tiled-tall,\n      .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper--tall .spectra-image-gallery__media--tiled-tall {\n        width: 100% !important;\n        height: 100% !important; }\n    .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper--focus,\n    .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper--focus {\n      grid-row: span 2;\n      grid-column: span 2; }\n    .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper .spectra-image-gallery__media--masonry,\n    .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper .spectra-image-gallery__media-thumbnail--masonry,\n    .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper .spectra-image-gallery__media--masonry,\n    .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper .spectra-image-gallery__media-thumbnail--masonry {\n      width: 100% !important;\n      height: 100% !important; }\n\n.uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--tiled,\n.uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--tiled {\n  height: initial !important;\n  display: grid;\n  grid-auto-flow: dense; }\n  .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper,\n  .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper {\n    width: auto !important;\n    height: auto !important;\n    aspect-ratio: 1; }\n    .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper--wide,\n    .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper--wide {\n      grid-column: span 2;\n      aspect-ratio: 2/1; }\n      .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper--wide .spectra-image-gallery__media--tiled-wide,\n      .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper--wide .spectra-image-gallery__media--tiled-wide {\n        width: 100% !important;\n        height: 100% !important; }\n    .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper--tall,\n    .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper--tall {\n      grid-row: span 2;\n      aspect-ratio: 1/2; }\n      .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper--tall .spectra-image-gallery__media--tiled-tall,\n      .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper--tall .spectra-image-gallery__media--tiled-tall {\n        width: 100% !important;\n        height: 100% !important; }\n    .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper--focus,\n    .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper--focus {\n      grid-row: span 2;\n      grid-column: span 2; }\n    .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper .spectra-image-gallery__media--masonry,\n    .uagb-editor-preview-mode-tablet .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper .spectra-image-gallery__media-thumbnail--masonry,\n    .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper .spectra-image-gallery__media--masonry,\n    .uagb-editor-preview-mode-mobile .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper .spectra-image-gallery__media-thumbnail--masonry {\n      width: 100% !important;\n      height: 100% !important; }\n\n.editor-styles-wrapper .is-root-container.edit-site-block-editor__block-list.wp-site-blocks .spectra-image-gallery__layout--masonry,\n.editor-styles-wrapper .is-root-container.edit-site-block-editor__block-list.wp-site-blocks .spectra-image-gallery__layout--tiled {\n  height: initial !important; }\n",""]),a.a=i},524:function(e,a,t){"use strict";t.r(a);var r=t(4),i=t.n(r),l=t(0),n=t.n(l),o=t(1),s=t(7),m=t(5),g=t(8),c=e=>{let{attributes:a,setAttributes:t}=e;const{mediaGallery:r,mediaIDs:i}=a;return"inapplicable"!==t&&n.a.createElement("div",{className:"spectra-image-gallery-init-wrapper"},g.a.image_gallery,n.a.createElement("h3",null,Object(o.__)("Spectra - Image Gallery","ultimate-addons-for-gutenberg")),n.a.createElement("p",null,Object(o.__)("Select your images to get started","ultimate-addons-for-gutenberg")),n.a.createElement(m.MediaUpload,{title:Object(o.__)("Select Images","ultimate-addons-for-gutenberg"),onSelect:e=>{let a=!0,r=[],i=[];e.forEach(e=>{e&&e.url&&e.type&&"image"===e.type?(r.push(e.id),i[e.id]=!1):a=!1}),a&&t({mediaGallery:e,mediaIDs:r,focusList:i,readyToRender:!0})},allowedTypes:["image"],multiple:!0,value:i,gallery:!0,render:e=>{var a;let{open:t}=e;return n.a.createElement(s.Button,{isSecondary:!0,onClick:t},null!==(a=r[0])&&void 0!==a&&a.url?Object(o.__)("Replace Images","ultimate-addons-for-gutenberg"):Object(o.__)("Select Images","ultimate-addons-for-gutenberg"))}}))},p=t(43),d=t(262),u=t.n(d),y=t(446),_=t.n(y),h=(t(462),t(11)),b=t(3);function f(){return(f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var v,w=e=>{let{attributes:a,setAttributes:t,name:r}=e;const s=r.replace("uagb/",""),{tileSize:m,focusList:c,mediaGallery:d,feedLayout:y,imageDisplayCaption:v,feedMarginTop:w,feedMarginRight:E,feedMarginBottom:k,feedMarginLeft:j,feedMarginTopTab:I,feedMarginRightTab:N,feedMarginBottomTab:O,feedMarginLeftTab:x,feedMarginTopMob:L,feedMarginRightMob:M,feedMarginBottomMob:S,feedMarginLeftMob:T,feedMarginUnit:A,feedMarginUnitTab:C,feedMarginUnitMob:$,gridImageGap:B,gridImageGapTab:D,gridImageGapMob:P,gridImageGapUnit:z,gridImageGapUnitTab:H,gridImageGapUnitMob:G,imageCaptionLength:V,captionDisplayType:q,imageCaptionAlignment:U,imageDefaultCaption:R,carouselStartAt:W,carouselLoop:J,carouselAutoplay:F,carouselAutoplaySpeed:Q,carouselPauseOnHover:K,carouselTransitionSpeed:X,gridPages:Y,gridPageNumber:Z,generateSpecialTiles:ee,feedPagination:ae,paginateUseArrows:te,paginateUseDots:re,paginateUseLoader:ie,paginateLimit:le,paginateButtonText:ne,columnsDesk:oe,columnsTab:se,columnsMob:me}=a,ge=Object(b.b)(V,"imageCaptionLength",s),ce=Object(b.b)(W,"carouselStartAt",s),pe=Object(b.b)(X,"carouselTransitionSpeed",s),de=Object(b.b)(Q,"carouselAutoplaySpeed",s),ue=Object(b.b)(le,"paginateLimit",s),ye=Object(b.b)(oe,"columnsDesk",s),_e=isNaN(se)?ye:se,he=isNaN(me)?_e:me,be=ae&&("grid"===y||"masonry"===y),[fe,ve]=Object(l.useState)(0),[we,Ee]=Object(l.useState)(!1),ke=Object(l.useRef)(null),je=Object(l.useRef)([]),Ie=Object(l.useRef)(null);Object(h.a)(),Object(l.useEffect)(()=>{d.length<ye&&t({columnsDesk:d.length}),d.length<_e&&t({columnsTab:d.length}),d.length<he&&t({columnsMob:d.length}),d&&re&&"carousel"===y?ve(d.length>ye?ke.current.children[0].querySelector(".slick-dots").clientHeight:0):"tiled"===y&&d.forEach(e=>{void 0!==je.current[e.id]&&null!==je.current[e.id]&&c[e.id]&&!je.current[e.id].classList.contains("spectra-image-gallery__media-wrapper--focus")&&je.current[e.id].classList.add("spectra-image-gallery__media-wrapper--focus")})},[JSON.stringify(d)]),Object(l.useEffect)(()=>{"tiled"===y&&(Ie.current.style.display="initial",t({tileSize:Math.round(Ie.current.getBoundingClientRect().width)}),imagesLoaded(je.current).on("progress",(e,a)=>{ee&&a.isLoaded&&Me(a.img)}))},[JSON.stringify(d),y,ee,oe,se,me,w,E,k,j,I,N,O,x,L,M,S,T,A,C,$,B,D,P,z,H,G]),Object(l.useEffect)(()=>{setTimeout(()=>{Ie.current.style.display="none"},2e3)},[m]),Object(l.useEffect)(()=>{if(we){for(let e=0;e<c.length;e++)void 0!==c[e]&&void 0!==je.current[e]&&null!==je.current[e]&&(c[e]?je.current[e].classList.add("spectra-image-gallery__media-wrapper--focus"):je.current[e].classList.remove("spectra-image-gallery__media-wrapper--focus"));Ee(!1)}},[we]);const Ne=()=>n.a.createElement("button",{type:"button","data-role":"none",className:i()("spectra-image-gallery__control-arrows","spectra-image-gallery__control-arrows--"+y,{"slick-next":"carousel"===y||"tiled"===y,"slick-arrow":"carousel"===y||"tiled"===y}),"aria-label":"Next",tabIndex:"0","data-direction":"Next",onClick:()=>"grid"===y?t({gridPageNumber:Z+1}):"",disabled:"grid"===y&&Z===Y},g.a.carousel_right),Oe=()=>n.a.createElement("button",{type:"button","data-role":"none",className:i()("spectra-image-gallery__control-arrows","spectra-image-gallery__control-arrows--"+y,{"slick-prev":"carousel"===y,"slick-arrow":"carousel"===y}),"aria-label":"Prev",tabIndex:"0","data-direction":"Prev",onClick:()=>"grid"===y?t({gridPageNumber:Z-1}):"",disabled:"grid"===y&&1===Z},g.a.carousel_left),xe={arrows:te,dots:re,initialSlide:ce,infinite:J,autoplay:F,autoplaySpeed:de,pauseOnHover:K,speed:pe,slidesToShow:ye,nextArrow:n.a.createElement(Ne,null),prevArrow:n.a.createElement(Oe,null),responsive:[{breakpoint:1024,settings:{slidesToShow:_e}},{breakpoint:767,settings:{slidesToShow:he}}]},Le=(e,a)=>{let r=c;r[e.id]=a,t({focusList:r}),Ee(!0)},Me=e=>{e.naturalWidth>=2*e.naturalHeight-e.naturalHeight/2?(e.parentElement.parentElement.classList.add("spectra-image-gallery__media-wrapper--wide"),e.parentElement.classList.add("spectra-image-gallery__media--tiled-wide")):e.naturalHeight>=2*e.naturalWidth-e.naturalWidth/2&&(e.parentElement.parentElement.classList.add("spectra-image-gallery__media-wrapper--tall"),e.parentElement.classList.add("spectra-image-gallery__media--tiled-tall"))},Se=()=>(be&&t({gridPages:Math.ceil(d.length/ue)}),(be?d.slice((Z-1)*ue,Z*ue):d).map(e=>Te(e))),Te=e=>n.a.createElement("div",{className:"spectra-image-gallery__media-wrapper",key:e.id,ref:a=>je.current[e.id]=a},Ae(e),"tiled"===y&&(e=>{return c[e.id]?(a=e,n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"37 0.083 24 24",className:"spectra-image-gallery__control-focus",onClick:()=>Le(a,!1)},n.a.createElement("path",{d:"M45.791,10.375c1.1,0,2-0.9,2-2V4h-1.5v4.375c0,0.3-0.2,0.5-0.5,0.5h-4.376v1.5H45.791z"}),n.a.createElement("path",{d:"M51.041,8.376c0,1.1,0.9,2,2,2h4.375v-1.5h-4.375c-0.299,0-0.5-0.2-0.5-0.5V4h-1.5V8.376z"}),n.a.createElement("path",{d:"M45.791,13.625c1.1,0,2,0.9,2,2V20h-1.5v-4.375c0-0.3-0.2-0.5-0.5-0.5h-4.376v-1.5H45.791z"}),n.a.createElement("path",{d:"M51.041,15.625c0-1.1,0.9-2,2-2h4.375v1.5h-4.375c-0.299,0-0.5,0.199-0.5,0.5V20h-1.5V15.625z"}))):(e=>n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",className:"spectra-image-gallery__control-focus",onClick:()=>Le(e,!0)},n.a.createElement("path",{d:"M6,4C4.9,4,4,4.9,4,6v4.375h1.5V6c0-0.3,0.2-0.5,0.5-0.5h4.376V4H6z"}),n.a.createElement("path",{d:"M20,6c0-1.1-0.9-2-2-2h-4.375v1.5H18c0.299,0,0.5,0.2,0.5,0.5v4.376H20V6z"}),n.a.createElement("path",{d:"M6,20c-1.1,0-2-0.9-2-2v-4.375h1.5V18c0,0.3,0.2,0.5,0.5,0.5h4.376V20H6z"}),n.a.createElement("path",{d:"M20,18c0,1.1-0.9,2-2,2h-4.375v-1.5H18c0.299,0,0.5-0.199,0.5-0.5v-4.375H20V18z"})))(e);var a})(e)),Ae=e=>n.a.createElement(n.a.Fragment,null,"bar-outside"===q&&"top"===Object(p.a)(U,1)&&v&&n.a.createElement("div",{className:i()("spectra-image-gallery__media-thumbnail-caption-wrapper","spectra-image-gallery__media-thumbnail-caption-wrapper--"+q)},Ce(e)),n.a.createElement("div",{className:i()("spectra-image-gallery__media","spectra-image-gallery__media--"+y)},n.a.createElement("img",{className:i()("spectra-image-gallery__media-thumbnail","spectra-image-gallery__media-thumbnail--"+y),src:e.url}),n.a.createElement("div",{className:"spectra-image-gallery__media-thumbnail-blurrer"}),v?"bar-outside"!==q&&n.a.createElement("div",{className:i()("spectra-image-gallery__media-thumbnail-caption-wrapper","spectra-image-gallery__media-thumbnail-caption-wrapper--"+q)},Ce(e)):n.a.createElement("div",{className:i()("spectra-image-gallery__media-thumbnail-caption-wrapper","spectra-image-gallery__media-thumbnail-caption-wrapper--overlay")})),"bar-outside"===q&&"top"!==Object(p.a)(U,1)&&v&&n.a.createElement("div",{className:i()("spectra-image-gallery__media-thumbnail-caption-wrapper","spectra-image-gallery__media-thumbnail-caption-wrapper--"+q)},Ce(e))),Ce=e=>{let a=!!e.caption,t=e.caption?e.caption:e.url?R:"Unable to load image";if(a&&e.caption.length<=ge)a=!1;else if(a)switch(t=t.substr(0,ge),-1===t.lastIndexOf(" ")?-1===e.caption.lastIndexOf(" ")?t.length===e.caption.split(" ")[0].length?a=!1:t="":t.length!==e.caption.split(" ")[0].length&&(t=""):t.length===e.caption.length?a=!1:" "!==e.caption.charAt(t.length)&&(t=t.substr(0,Math.min(t.length,t.lastIndexOf(" ")))),t.charAt(t.length-1)){case",":case".":case" ":case"'":t=t.slice(0,t.length-1)}return n.a.createElement("div",{className:i()("spectra-image-gallery__media-thumbnail-caption","spectra-image-gallery__media-thumbnail-caption--"+q)},`${Object(o.__)(t,"ultimate-addons-for-gutenberg")}${a?" ...":""}`)};return d?(()=>{switch(y){case"grid":const e="grid";return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:i()("spectra-image-gallery","spectra-image-gallery__layout--"+e,`spectra-image-gallery__layout--${e}-col-${ye}`,`spectra-image-gallery__layout--${e}-col-tab-${_e}`,`spectra-image-gallery__layout--${e}-col-mob-${he}`)},Se()),ae&&n.a.createElement("div",{className:i()("spectra-image-gallery__control-wrapper")},n.a.createElement(Oe,null),n.a.createElement("ul",{className:i()("spectra-image-gallery__control-dots")},[...Array(Y)].map((e,a)=>n.a.createElement("li",{key:a,className:i()("spectra-image-gallery__control-dot",{"spectra-image-gallery__control-dot--active":a===Z-1}),"data-go-to":a+1},n.a.createElement("button",{onClick:()=>t({gridPageNumber:a+1})})))),n.a.createElement(Ne,null)));case"masonry":return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{className:i()("spectra-image-gallery","spectra-image-gallery__layout--"+y,`spectra-image-gallery__layout--${y}-col-${ye}`,`spectra-image-gallery__layout--${y}-col-tab-${_e}`,`spectra-image-gallery__layout--${y}-col-mob-${he}`),updateOnEachImageLoad:!0},Se()),ae&&n.a.createElement(n.a.Fragment,null,ie?n.a.createElement("div",{className:"spectra-image-gallery__control-loader"},n.a.createElement("div",{className:"spectra-image-gallery__control-loader--1"}),n.a.createElement("div",{className:"spectra-image-gallery__control-loader--2"}),n.a.createElement("div",{className:"spectra-image-gallery__control-loader--3"})):n.a.createElement("div",{className:"spectra-image-gallery__control-wrapper"},n.a.createElement("div",{className:i()("spectra-image-gallery__control-button"),"aria-label":Object(o.__)(ne,"ultimate-addons-for-gutenberg"),tabIndex:"0"},Object(o.__)(ne,"ultimate-addons-for-gutenberg")))));case"tiled":return n.a.createElement("div",{className:i()("spectra-image-gallery","spectra-image-gallery__layout--"+y,`spectra-image-gallery__layout--${y}-col-${ye}`,`spectra-image-gallery__layout--${y}-col-tab-${_e}`,`spectra-image-gallery__layout--${y}-col-mob-${he}`)},Se(),n.a.createElement("div",{className:"spectra-image-gallery__media-sizer",ref:Ie}));case"carousel":return n.a.createElement("div",{className:i()("spectra-image-gallery","spectra-image-gallery__layout--"+y),ref:ke,style:{"margin-bottom":fe+"px"}},n.a.createElement(_.a,f({className:i()("uagb-slick-carousel")},xe),Se()))}})():n.a.createElement("div",{className:"spectra-image-gallery-init-wrapper"},g.a.image_gallery,n.a.createElement("h3",null,Object(o.__)("Spectra - Image Gallery","ultimate-addons-for-gutenberg")),n.a.createElement("p",null,Object(o.__)("No images to display...","ultimate-addons-for-gutenberg")))},E=t(14),k=t.n(E),j=t(463),I=0,N={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},O={};O.locals=j.a.locals||{},O.use=function(){return I++||(v=k()(j.a,N)),O},O.unuse=function(){I>0&&!--I&&(v(),v=null)};var x=O;const L=e=>{Object(l.useLayoutEffect)(()=>(x.use(),()=>{x.unuse()}),[]),e=e.parentProps;const{attributes:a,setAttributes:t,className:r,name:o}=e,{block_id:s,readyToRender:m,isPreview:g}=a,p=Object(h.a)(),d=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/image-gallery.svg";return n.a.createElement(n.a.Fragment,null,g?n.a.createElement("img",{width:"100%",src:d,alt:""}):n.a.createElement("div",{className:i()(r,"uagb-editor-preview-mode-"+p.toLowerCase(),"uagb-block-"+s)},m?n.a.createElement(w,{attributes:a,setAttributes:t,block_id:s,name:o}):n.a.createElement(c,{attributes:a,setAttributes:t})))};a.default=n.a.memo(L)}}]);