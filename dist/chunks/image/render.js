(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[67],{460:function(e,t,i){"use strict";i.r(t);var a=i(3),n=i.n(a),l=i(152),o=i(6),c=i(9),r=i(2),s=i(153),d=Object(r.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(s.Path,{d:"M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"})),u=i(4),m=i(1),g=Object(r.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(s.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"})),h=i(13),v=i(154),b=(i(155),i(156));const p=(e,t)=>t&&!e&&!Object(l.isBlobURL)(t),f=["image"];function w({temporaryURL:e,attributes:{url:t="",alt:i,caption:a,align:n,id:l,href:s,rel:d,linkClass:g,linkDestination:p,title:f,width:w,height:E,linkTarget:O,sizeSlug:R},setAttributes:j,isSelected:k,insertBlocksAfter:S,onReplace:B,onCloseModal:_,onSelectImage:z,onSelectURL:I,onUploadError:y,containerRef:L,context:U,clientId:C,onImageLoadError:x}){var W;const H=Object(r.useRef)(),{allowResize:P=!0}=(Object(r.useRef)(),Object(h.usePrevious)(t),U),{getBlock:M}=Object(c.useSelect)(u.store),{replaceBlocks:T,toggleSelection:D}=Object(c.useDispatch)(u.store),{image:A,multiImageSelection:N}=Object(c.useSelect)(e=>{const{getMedia:t}=e(b.store),{getMultiSelectedBlockClientIds:i,getBlockName:a}=e(u.store),n=i();return{image:l&&k?t(l):null,multiImageSelection:n.length&&n.every(e=>"core/image"===a(e))}},[l,k]),{canInsertCover:V,imageEditing:F,imageSizes:G,maxWidth:J,mediaUpload:q}=Object(c.useSelect)(e=>{const{getBlockRootClientId:t,getSettings:i,canInsertBlockType:a}=e(u.store),n=t(C),{imageEditing:l,imageSizes:o,maxWidth:c,mediaUpload:r}=i();return{imageEditing:l,imageSizes:o,maxWidth:c,mediaUpload:r,canInsertCover:a("core/cover",n)}},[C]),K=Object(h.useViewportMatch)("medium"),Q=["wide","full"].includes(n),[{loadedNaturalWidth:X,loadedNaturalHeight:Y},Z]=Object(r.useState)({}),[$,ee]=Object(r.useState)(!1),[te,ie]=Object(r.useState)(),ae=function(e,t){const[i,a]=Object(r.useState)();function n(){a(e.current.clientWidth)}return Object(r.useEffect)(n,t),Object(r.useEffect)(()=>{const{defaultView:t}=e.current.ownerDocument;return t.addEventListener("resize",n),()=>{t.removeEventListener("resize",n)}},[]),i}(L,[n]),ne=P&&!(Q&&K),{naturalWidth:le,naturalHeight:oe}=Object(r.useMemo)(()=>{var e,t;return{naturalWidth:(null===(e=H.current)||void 0===e?void 0:e.naturalWidth)||X||void 0,naturalHeight:(null===(t=H.current)||void 0===t?void 0:t.naturalHeight)||Y||void 0}},[X,Y,null===(W=H.current)||void 0===W?void 0:W.complete]),ce=Object(v.getFilename)(t);let re;re=i||(ce?Object(m.sprintf)(
/* translators: %s: file name */
Object(m.__)("This image has an empty alt attribute; its file name is %s"),ce):Object(m.__)("This image has an empty alt attribute"));let se,de,ue=React.createElement(React.Fragment,null,React.createElement("img",{src:e||t,alt:re,onError:()=>onImageError(),onLoad:e=>{var t,i;Z({loadedNaturalWidth:null===(t=e.target)||void 0===t?void 0:t.naturalWidth,loadedNaturalHeight:null===(i=e.target)||void 0===i?void 0:i.naturalHeight})},ref:H}),e&&React.createElement(o.Spinner,null));if(ae&&le&&oe){const e=le>ae,t=oe/le;se=e?ae:le,de=e?ae*t:oe}if(l&&le&&oe&&F&&$)ue=React.createElement(u.__experimentalImageEditor,{url:t,width:w,height:E,clientWidth:ae,naturalHeight:oe,naturalWidth:le});else if(ne&&se){const e=w||se,t=E||de,i=le/oe,a=le<oe?20:20*i,l=oe<le?20:20/i,c=2.5*J;let r=!1,s=!1;"center"===n?(r=!0,s=!0):Object(m.isRTL)()?"left"===n?r=!0:s=!0:"right"===n?s=!0:r=!0,ue=React.createElement(o.ResizableBox,{size:{width:w||"auto",height:E||"auto"},showHandle:k,minWidth:a,maxWidth:c,minHeight:l,maxHeight:c/i,lockAspectRatio:!0,enable:{top:!1,right:r,bottom:!0,left:s},onResizeStart:function(){D(!1)},onResizeStop:(i,a,n,l)=>{D(!0),j({width:parseInt(e+l.width,10),height:parseInt(t+l.height,10)})}},ue)}else ue=React.createElement("div",{style:{width:w,height:E}},ue);return React.createElement(React.Fragment,null,React.createElement(u.__experimentalImageEditingProvider,{id:l,url:t,naturalWidth:le,naturalHeight:oe,clientWidth:ae,onSaveImage:e=>j(e),isEditing:$,onFinishEditing:()=>ee(!1)},ue))}const E=e=>{e=e.parentProps;const{attributes:t,setAttributes:i,className:a,isSelected:s,insertBlocksAfter:h,onReplace:v,context:b,clientId:E}=e,{url:O,alt:R,caption:j,align:k,id:S,href:B,rel:_,linkClass:z,linkDestination:I,title:y,width:L,height:U,linkTarget:C,sizeSlug:x}=t,{createNotice:W}=Object(c.useDispatch)("core/notices"),[H,P]=Object(r.useState)(),[M,T]=Object(r.useState)(),D=Object(r.useRef)();Object(r.useEffect)(()=>{D.current=R},[R]);const A=Object(r.useRef)();Object(r.useEffect)(()=>{A.current=j},[j]);const N=Object(r.useRef)(),{imageDefaultSize:V,mediaUpload:F}=Object(c.useSelect)(e=>{const{getSettings:t}=e(u.store),{imageDefaultSize:i,mediaUpload:a}=t();return{imageDefaultSize:i,mediaUpload:a}},[]);function G(){(e=>{var t,i;return((null===(t=wp)||void 0===t||null===(i=t.media)||void 0===i?void 0:i.attachment(e))||{}).destroyed})(null==t?void 0:t.id)&&i({url:void 0,id:void 0})}function J(e){W("error",e,{type:"snackbar"})}function q(e){var a,n,o,c,r;if(!e||!e.url)return void i({url:void 0,alt:void 0,id:void 0,title:void 0,caption:void 0});if(Object(l.isBlobURL)(e.url))return void P(e.url);P();let s,d=((e,t)=>{const{alt:i,id:a,link:n,caption:l}=e,o={alt:i,id:a,link:n,caption:l};return o.url=e.url,o})(e);var u,m;A.current&&!get(d,["caption"])&&(d=omit(d,["caption"])),s=e.id&&e.id===S?{url:O}:{width:void 0,height:void 0,sizeSlug:(u=e,m=V,u.hasOwnProperty("sizes")||u.hasOwnProperty("url")||u.hasOwnProperty("media_details")||u.hasOwnProperty("source_url")||void 0!==u[m]?V:"full")};let g,h=t.linkDestination;if(!h)switch((null===(a=wp)||void 0===a||null===(n=a.media)||void 0===n||null===(o=n.view)||void 0===o||null===(c=o.settings)||void 0===c||null===(r=c.defaultProps)||void 0===r?void 0:r.link)||"none"){case"file":case"media":h="media";break;case"post":case"attachment":h="attachment";break;case"custom":h="custom";break;case"none":h="none"}switch(h){case"media":g=e.url;break;case"attachment":g=e.link}d.href=g,i({...d,...s,linkDestination:h})}function K(e){e!==O&&i({url:e,id:void 0,width:void 0,height:void 0,sizeSlug:V})}function Q(e){const t=["wide","full"].includes(e)?{width:void 0,height:void 0}:{};i({...t,align:e})}let X=((e,t)=>!e&&Object(l.isBlobURL)(t))(S,O);Object(r.useEffect)(()=>{if(!X)return;const e=getBlobByURL(O);e&&F({filesList:[e],onFileChange:([e])=>{q(e)},allowedTypes:f,onError:e=>{X=!1,W("error",e,{type:"snackbar"}),i({src:void 0,id:void 0,url:void 0})}})},[]),Object(r.useEffect)(()=>{X?P(O):Object(l.revokeBlobURL)(H)},[X,O]);const Y=p(S,O)?O:void 0,Z=!!O&&React.createElement("img",{alt:Object(m.__)("Edit image"),title:Object(m.__)("Edit image"),className:"edit-image-preview",src:O});function Q(e){const t=["wide","full"].includes(e)?{width:void 0,height:void 0}:{};i({...t,align:e})}Object(r.useEffect)(()=>{p(S,O)&&s&&!M&&window.fetch(O).then(e=>e.blob()).then(e=>T(e)).catch(()=>{})},[S,O,s,M]);const $=n()(a,{"is-transient":H,"is-resized":!!L||!!U,["size-"+x]:x}),ee=Object(u.useBlockProps)({ref:N,className:$});return React.createElement(React.Fragment,null,React.createElement(u.BlockControls,{group:"block"},React.createElement(u.BlockAlignmentControl,{value:k,onChange:Q}),M&&React.createElement(o.ToolbarButton,{onClick:function(){F({filesList:[M],onFileChange([e]){q(e),Object(l.isBlobURL)(null==e?void 0:e.url)||(T(),W("success",Object(m.__)("Image uploaded."),{type:"snackbar"}))},allowedTypes:f,onError(e){W("error",e,{type:"snackbar"})}})},icon:d,label:Object(m.__)("Upload external image")})),React.createElement("figure",ee,(H||O)&&React.createElement(w,{temporaryURL:H,attributes:t,setAttributes:i,isSelected:s,insertBlocksAfter:h,onReplace:v,onSelectImage:q,onSelectURL:K,onUploadError:J,containerRef:N,context:b,clientId:E,onCloseModal:G,onImageLoadError:function(e=!1){e||i({url:void 0,id:void 0})}}),!O&&React.createElement(u.BlockControls,{group:"block"},React.createElement(u.BlockAlignmentControl,{value:k,onChange:Q})),React.createElement(u.MediaPlaceholder,{icon:React.createElement(u.BlockIcon,{icon:g}),onSelect:q,onSelectURL:K,onError:J,onClose:G,accept:"image/*",allowedTypes:f,value:{id:S,src:Y},mediaPreview:Z,disableMediaButtons:H||O})))};E.propTypes={},E.defaultProps={},t.default=E}}]);