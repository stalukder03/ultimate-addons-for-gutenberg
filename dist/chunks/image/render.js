(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[67],{285:function(e,t,a){"use strict";var i=a(16),n=a.n(i)()((function(e){return e[1]}));n.push([e.i,".uagb-inspector-tab .block-editor-image-size-control .block-editor-image-size-control__row {\n  text-transform: capitalize; }\n",""]),t.a=n},495:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(3),o=a.n(l),r=a(188),c=a(6),s=a(9),u=a(2),d=a(189),m=Object(u.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(u.createElement)(d.Path,{d:"M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"})),g=a(4),b=a(187),h=a(1),p=a(10),v=a(7),f=a(13),E=a(190),w=Object(u.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(u.createElement)(d.Path,{d:"M17.5 7v8H19V7c0-1.1-.9-2-2-2H9v1.5h8c.3 0 .5.2.5.5zM7 17.5c-.3 0-.5-.2-.5-.5V1H5v4H1v1.5h4V17c0 1.1.9 2 2 2h10.5v4H19v-4h4v-1.5H7z"}));const O=["image"];function j(e){var t;let{temporaryURL:a,attributes:{url:i="",alt:n,align:l,id:o,width:r,height:d},setAttributes:m,isSelected:b,onCloseModal:p,onSelectImage:v,onSelectURL:j,onUploadError:_,containerRef:R,context:k,clientId:y}=e;const S=Object(u.useRef)(),{allowResize:L=!0}=k,{toggleSelection:U}=Object(s.useDispatch)(g.store),{multiImageSelection:x}=Object(s.useSelect)(e=>{const{getMultiSelectedBlockClientIds:t,getBlockName:a}=e(g.store),i=t();return{multiImageSelection:i.length&&i.every(e=>"uagb/image"===a(e))}},[o,b]),{imageEditing:B,maxWidth:I}=Object(s.useSelect)(e=>{const{getSettings:t}=e(g.store),{imageEditing:a,maxWidth:i}=t();return{imageEditing:a,maxWidth:i}},[y]),C=Object(f.useViewportMatch)("medium"),H=["wide","full"].includes(l),[{loadedNaturalWidth:z,loadedNaturalHeight:T},N]=Object(u.useState)({}),[P,W]=Object(u.useState)(!1),M=function(e,t){const[a,i]=Object(u.useState)();function n(){i(e.current.clientWidth)}return Object(u.useEffect)(n,t),Object(u.useEffect)(()=>{const{defaultView:t}=e.current.ownerDocument;return t.addEventListener("resize",n),()=>{t.removeEventListener("resize",n)}},[]),a}(R,[l]),F=L&&!(H&&C),{naturalWidth:A,naturalHeight:D}=Object(u.useMemo)(()=>{var e,t;return{naturalWidth:(null===(e=S.current)||void 0===e?void 0:e.naturalWidth)||z||void 0,naturalHeight:(null===(t=S.current)||void 0===t?void 0:t.naturalHeight)||T||void 0}},[z,T,null===(t=S.current)||void 0===t?void 0:t.complete]),V=Object(E.getFilename)(i);let G;G=n||(V?Object(h.sprintf)(
/* translators: %s: file name */
Object(h.__)("This image has an empty alt attribute; its file name is %s"),V):Object(h.__)("This image has an empty alt attribute"));let J,q,K=React.createElement(React.Fragment,null,React.createElement("img",{src:a||i,alt:G,onLoad:e=>{var t,a;N({loadedNaturalWidth:null===(t=e.target)||void 0===t?void 0:t.naturalWidth,loadedNaturalHeight:null===(a=e.target)||void 0===a?void 0:a.naturalHeight})},ref:S}),a&&React.createElement(c.Spinner,null));if(M&&A&&D){const e=A>M,t=D/A;J=e?M:A,q=e?M*t:D}const Q=o&&A&&D&&B,X=!x&&Q&&!P;if(Q&&P)K=React.createElement(g.__experimentalImageEditor,{url:i,width:r,height:d,clientWidth:M,naturalHeight:D,naturalWidth:A});else if(F&&J){const e=r||J,t=d||q,a=A/D,i=A<D?20:20*a,n=D<A?20:20/a,o=2.5*I;let s=!1,u=!1;"center"===l?(s=!0,u=!0):Object(h.isRTL)()?"left"===l?s=!0:u=!0:"right"===l?u=!0:s=!0,K=React.createElement(c.ResizableBox,{size:{width:r||"auto",height:d||"auto"},showHandle:b,minWidth:i,maxWidth:o,minHeight:n,maxHeight:o/a,lockAspectRatio:!0,enable:{top:!1,right:s,bottom:!0,left:u},onResizeStart:function(){U(!1)},onResizeStop:(a,i,n,l)=>{U(!0),m({width:Math.abs(parseInt(e+l.width,10)),height:Math.abs(parseInt(t+l.height,10))})}},K)}else K=React.createElement("div",{style:{width:r,height:d}},K);const Y=React.createElement(React.Fragment,null,React.createElement(g.BlockControls,{group:"block"},X&&React.createElement(c.ToolbarButton,{onClick:()=>W(!0),icon:w,label:Object(h.__)("Crop")})),!x&&!P&&React.createElement(g.BlockControls,{group:"other"},React.createElement(g.MediaReplaceFlow,{mediaId:o,mediaURL:i,allowedTypes:O,accept:"image/*",onSelect:v,onSelectURL:j,onError:_,onCloseModal:p})));return React.createElement(React.Fragment,null,React.createElement(g.__experimentalImageEditingProvider,{id:o,url:i,naturalWidth:A,naturalHeight:D,clientWidth:M,onSaveImage:e=>m(e),isEditing:P,onFinishEditing:()=>W(!1)},!a&&Y,K))}function _(e){let{attributes:t,isSelected:a,setAttributes:l,captionRef:o}=e;const{caption:r,heading:c,layout:s,overlayContentPosition:u,seperatorStyle:d,seperatorPosition:m}=t,b=Object(i.useRef)();Object(i.useEffect)(()=>{b.current=c},[r]);const p=n.a.createElement(n.a.Fragment,null,(!g.RichText.isEmpty(c)||a)&&n.a.createElement(g.RichText,{ref:b,tagName:"h2",className:"uagb-image-heading","aria-label":Object(h.__)("Image overlay heading text"),placeholder:Object(h.__)("Add Heading"),value:c,onChange:e=>l({heading:e}),inlineToolbar:!0})),v=n.a.createElement(n.a.Fragment,null,(!g.RichText.isEmpty(r)||a)&&n.a.createElement(g.RichText,{ref:o,tagName:"figcaption",className:"uagb-image-caption","aria-label":Object(h.__)("Image caption text"),placeholder:Object(h.__)("Add caption"),value:r,onChange:e=>l({caption:e}),inlineToolbar:!0})),f="none"!==d&&n.a.createElement("div",{className:"uagb-image-separator"});return n.a.createElement(n.a.Fragment,null,"overlay"===s?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"wp-block-uagb-image--layout-overlay__color-wrapper"}),n.a.createElement("div",{className:"wp-block-uagb-image--layout-overlay__inner "+u.replace(" ","-")},"before_title"===m&&f,p,"after_title"===m&&f,v,"after_sub_title"===m&&f)):v)}var R,k=a(15),y=a.n(k),S=a(285),L=0,U={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},x={};x.locals=S.a.locals||{},x.use=function(){return L++||(R=y()(S.a,U)),x},x.unuse=function(){L>0&&!--L&&(R(),R=null)};var B=x;const I=(e,t)=>t&&!e&&!Object(r.isBlobURL)(t),C=(e,t)=>e.hasOwnProperty("sizes")||e.hasOwnProperty("url")||e.hasOwnProperty("media_details")||e.hasOwnProperty("source_url")||void 0!==e[t];function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}const z=e=>{const{attributes:t,setAttributes:a,className:l,isSelected:u,insertBlocksAfter:d,onReplace:f,context:E,clientId:w}=e.parentProps,{block_id:R,layout:k,url:y,alt:S,caption:L,align:U,id:x,linkTarget:z,linkClass:T,rel:N,imageHoverEffect:P,href:W,linkDestination:M}=t;Object(i.useLayoutEffect)(()=>(B.use(),()=>{B.unuse()}),[]);const F=Object(p.a)(),{createNotice:A}=Object(s.useDispatch)("core/notices"),[D,V]=Object(i.useState)(),[G,J]=Object(i.useState)(),q=Object(i.useRef)();Object(i.useEffect)(()=>{q.current=S},[S]);const K=Object(i.useRef)();Object(i.useEffect)(()=>{K.current=L},[L]);const Q=Object(i.useRef)(),{imageDefaultSize:X,mediaUpload:Y}=Object(s.useSelect)(e=>{const{getSettings:t}=e(g.store),{imageDefaultSize:a,mediaUpload:i}=t();return{imageDefaultSize:a,mediaUpload:i}},[]),{image:Z}=Object(s.useSelect)(e=>{const{getMedia:t}=e(b.store);return{image:x&&u?t(x):null}},[x,u]);function $(){(e=>{var t,a;return((null===(t=wp)||void 0===t||null===(a=t.media)||void 0===a?void 0:a.attachment(e))||{}).destroyed})(null==t?void 0:t.id)&&a({url:void 0,id:void 0})}function ee(e){A("error",e,{type:"snackbar"})}function te(e){var i,n,l,o,c;if(!e||!e.url)return void a({url:void 0,alt:void 0,id:void 0,title:void 0,caption:void 0});if(Object(r.isBlobURL)(e.url))return void V(e.url);V();let s,u=e;K.current&&!u.caption&&(u={...u,alt:u.alt,id:u.id,link:u.link}),s=e.id&&e.id===x?{url:y}:{width:void 0,height:void 0,sizeSlug:C(e,X)?X:"full"};let d,m=t.linkDestination;if(!m)switch((null===(i=wp)||void 0===i||null===(n=i.media)||void 0===n||null===(l=n.view)||void 0===l||null===(o=l.settings)||void 0===o||null===(c=o.defaultProps)||void 0===c?void 0:c.link)||"none"){case"file":case"media":m="media";break;case"post":case"attachment":m="attachment";break;case"custom":m="custom";break;case"none":m="none"}switch(m){case"media":d=e.url;break;case"attachment":d=e.link}u.href=d,a({...u,...s,linkDestination:m})}function ae(e){e!==y&&a({url:e,id:void 0,width:void 0,height:void 0,sizeSlug:X})}let ie=((e,t)=>!e&&Object(r.isBlobURL)(t))(x,y);Object(i.useEffect)(()=>{if(!ie)return;const e=Object(r.getBlobByURL)(y);e&&Y({filesList:[e],onFileChange:e=>{let[t]=e;te(t)},allowedTypes:O,onError:e=>{ie=!1,A("error",e,{type:"snackbar"}),a({src:void 0,id:void 0,url:void 0})}})},[]),Object(i.useEffect)(()=>{ie?V(y):Object(r.revokeBlobURL)(D)},[ie,y]);const ne=I(x,y)?y:void 0,le=!!y&&n.a.createElement("img",{alt:Object(h.__)("Edit image"),title:Object(h.__)("Edit image"),className:"edit-image-preview",src:y});Object(i.useEffect)(()=>{I(x,y)&&u&&!G&&window.fetch(y).then(e=>e.blob()).then(e=>J(e)).catch(()=>{})},[x,y,u,G]);const oe=Object(g.useBlockProps)({ref:Q});return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.BlockControls,{group:"block"},n.a.createElement(g.BlockAlignmentControl,{value:U,onChange:function(e){const t=["wide","full"].includes(e)?{width:void 0,height:void 0}:{};a({...t,align:e})}}),n.a.createElement(g.__experimentalImageURLInputUI,{url:W||"",onChangeUrl:function(e){a(e)},linkDestination:M,mediaUrl:Z&&Z.source_url||y,mediaLink:Z&&Z.link,linkTarget:z,linkClass:T,rel:N}),G&&n.a.createElement(c.ToolbarButton,{onClick:function(){Y({filesList:[G],onFileChange(e){let[t]=e;te(t),Object(r.isBlobURL)(null==t?void 0:t.url)||(J(),A("success",Object(h.__)("Image uploaded."),{type:"snackbar"}))},allowedTypes:O,onError(e){A("error",e,{type:"snackbar"})}})},icon:m,label:Object(h.__)("Upload external image")})),n.a.createElement("div",H({},oe,{className:o()(l,"uagb-editor-preview-mode-"+F.toLowerCase(),"uagb-block-"+R,"wp-block-uagb-image--layout-"+k,"wp-block-uagb-image--effect-"+P,"wp-block-uagb-image--align-"+(U||"none"))}),n.a.createElement("figure",{className:"wp-block-uagb-image__figure"},(D||y)&&n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{temporaryURL:D,attributes:t,setAttributes:a,isSelected:u,insertBlocksAfter:d,onReplace:f,onSelectImage:te,onSelectURL:ae,onUploadError:ee,containerRef:Q,context:E,clientId:w,onCloseModal:$,onImageLoadError:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e||a({url:void 0,id:void 0})}}),n.a.createElement(_,{captionRef:K,attributes:t,setAttributes:a,isSelected:u})),n.a.createElement(g.MediaPlaceholder,{icon:n.a.createElement(g.BlockIcon,{icon:v.a.post_masonry}),labels:{title:Object(h.__)("Advanced Image","ultimate-addons-for-gutenberg"),instructions:Object(h.__)("Upload an image file, pick one from your media library, or add one with a URL.","ultimate-addons-for-gutenberg")},onSelect:te,onSelectURL:ae,onError:ee,onClose:$,accept:"image/*",allowedTypes:O,value:{id:x,src:ne},mediaPreview:le,disableMediaButtons:D||y}))))};z.propTypes={},z.defaultProps={},t.default=z}}]);