(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[67],{460:function(e,t,i){"use strict";i.r(t);var a=i(3),n=i.n(a),l=i(152),o=i(6),c=i(9),r=i(2),s=i(153),d=Object(r.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(s.Path,{d:"M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"})),u=i(4),m=i(1),g=i(10),h=Object(r.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(s.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"})),b=i(13),v=i(154),p=Object(r.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(s.Path,{d:"M17.5 7v8H19V7c0-1.1-.9-2-2-2H9v1.5h8c.3 0 .5.2.5.5zM7 17.5c-.3 0-.5-.2-.5-.5V1H5v4H1v1.5h4V17c0 1.1.9 2 2 2h10.5v4H19v-4h4v-1.5H7z"})),f=(i(155),i(156));const w=(e,t)=>t&&!e&&!Object(l.isBlobURL)(t),O=["image"];function E({temporaryURL:e,attributes:{url:t="",alt:i,caption:a,align:n,id:l,href:s,rel:d,linkClass:g,linkDestination:h,title:w,width:O,height:E,linkTarget:R,sizeSlug:j},setAttributes:k,isSelected:S,insertBlocksAfter:B,onReplace:_,onCloseModal:y,onSelectImage:z,onSelectURL:C,onUploadError:I,containerRef:L,context:H,clientId:U,onImageLoadError:x}){var P;const W=Object(r.useRef)(),{allowResize:M=!0}=(Object(r.useRef)(),Object(b.usePrevious)(t),H),{getBlock:V}=Object(c.useSelect)(u.store),{replaceBlocks:T,toggleSelection:D}=Object(c.useDispatch)(u.store),{image:A,multiImageSelection:N}=Object(c.useSelect)(e=>{const{getMedia:t}=e(f.store),{getMultiSelectedBlockClientIds:i,getBlockName:a}=e(u.store),n=i();return{image:l&&S?t(l):null,multiImageSelection:n.length&&n.every(e=>"core/image"===a(e))}},[l,S]),{canInsertCover:F,imageEditing:G,imageSizes:J,maxWidth:q,mediaUpload:K}=Object(c.useSelect)(e=>{const{getBlockRootClientId:t,getSettings:i,canInsertBlockType:a}=e(u.store),n=t(U),{imageEditing:l,imageSizes:o,maxWidth:c,mediaUpload:r}=i();return{imageEditing:l,imageSizes:o,maxWidth:c,mediaUpload:r,canInsertCover:a("core/cover",n)}},[U]),Q=Object(b.useViewportMatch)("medium"),X=["wide","full"].includes(n),[{loadedNaturalWidth:Y,loadedNaturalHeight:Z},$]=Object(r.useState)({}),[ee,te]=Object(r.useState)(!1),[ie,ae]=Object(r.useState)(),ne=function(e,t){const[i,a]=Object(r.useState)();function n(){a(e.current.clientWidth)}return Object(r.useEffect)(n,t),Object(r.useEffect)(()=>{const{defaultView:t}=e.current.ownerDocument;return t.addEventListener("resize",n),()=>{t.removeEventListener("resize",n)}},[]),i}(L,[n]),le=M&&!(X&&Q),{naturalWidth:oe,naturalHeight:ce}=Object(r.useMemo)(()=>{var e,t;return{naturalWidth:(null===(e=W.current)||void 0===e?void 0:e.naturalWidth)||Y||void 0,naturalHeight:(null===(t=W.current)||void 0===t?void 0:t.naturalHeight)||Z||void 0}},[Y,Z,null===(P=W.current)||void 0===P?void 0:P.complete]),re=Object(v.getFilename)(t);let se;se=i||(re?Object(m.sprintf)(
/* translators: %s: file name */
Object(m.__)("This image has an empty alt attribute; its file name is %s"),re):Object(m.__)("This image has an empty alt attribute"));let de,ue,me=React.createElement(React.Fragment,null,React.createElement("img",{src:e||t,alt:se,onError:()=>onImageError(),onLoad:e=>{var t,i;$({loadedNaturalWidth:null===(t=e.target)||void 0===t?void 0:t.naturalWidth,loadedNaturalHeight:null===(i=e.target)||void 0===i?void 0:i.naturalHeight})},ref:W}),e&&React.createElement(o.Spinner,null));if(ne&&oe&&ce){const e=oe>ne,t=ce/oe;de=e?ne:oe,ue=e?ne*t:ce}const ge=l&&oe&&ce&&G,he=!N&&ge&&!ee;if(ge&&ee)me=React.createElement(u.__experimentalImageEditor,{url:t,width:O,height:E,clientWidth:ne,naturalHeight:ce,naturalWidth:oe});else if(le&&de){const e=O||de,t=E||ue,i=oe/ce,a=oe<ce?20:20*i,l=ce<oe?20:20/i,c=2.5*q;let r=!1,s=!1;"center"===n?(r=!0,s=!0):Object(m.isRTL)()?"left"===n?r=!0:s=!0:"right"===n?s=!0:r=!0,me=React.createElement(o.ResizableBox,{size:{width:O||"auto",height:E||"auto"},showHandle:S,minWidth:a,maxWidth:c,minHeight:l,maxHeight:c/i,lockAspectRatio:!0,enable:{top:!1,right:r,bottom:!0,left:s},onResizeStart:function(){D(!1)},onResizeStop:(i,a,n,l)=>{D(!0),k({width:parseInt(e+l.width,10),height:parseInt(t+l.height,10)})}},me)}else me=React.createElement("div",{style:{width:O,height:E}},me);const be=React.createElement(React.Fragment,null,React.createElement(u.BlockControls,{group:"block"},he&&React.createElement(o.ToolbarButton,{onClick:()=>te(!0),icon:p,label:Object(m.__)("Crop")})));return React.createElement(React.Fragment,null,React.createElement(u.__experimentalImageEditingProvider,{id:l,url:t,naturalWidth:oe,naturalHeight:ce,clientWidth:ne,onSaveImage:e=>k(e),isEditing:ee,onFinishEditing:()=>te(!1)},!e&&be,me))}function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}const j=e=>{e=e.parentProps;const{attributes:t,setAttributes:i,className:a,isSelected:s,insertBlocksAfter:b,onReplace:v,context:p,clientId:f}=e,{block_id:j,url:k,alt:S,caption:B,align:_,id:y,href:z,rel:C,linkClass:I,linkDestination:L,title:H,width:U,height:x,linkTarget:P,sizeSlug:W}=t,M=Object(g.a)(),{createNotice:V}=Object(c.useDispatch)("core/notices"),[T,D]=Object(r.useState)(),[A,N]=Object(r.useState)(),F=Object(r.useRef)();Object(r.useEffect)(()=>{F.current=S},[S]);const G=Object(r.useRef)();Object(r.useEffect)(()=>{G.current=B},[B]);const J=Object(r.useRef)(),{imageDefaultSize:q,mediaUpload:K}=Object(c.useSelect)(e=>{const{getSettings:t}=e(u.store),{imageDefaultSize:i,mediaUpload:a}=t();return{imageDefaultSize:i,mediaUpload:a}},[]);function Q(){(e=>{var t,i;return((null===(t=wp)||void 0===t||null===(i=t.media)||void 0===i?void 0:i.attachment(e))||{}).destroyed})(null==t?void 0:t.id)&&i({url:void 0,id:void 0})}function X(e){V("error",e,{type:"snackbar"})}function Y(e){var a,n,o,c,r;if(!e||!e.url)return void i({url:void 0,alt:void 0,id:void 0,title:void 0,caption:void 0});if(Object(l.isBlobURL)(e.url))return void D(e.url);D();let s,d=((e,t)=>{const{alt:i,id:a,link:n,caption:l}=e,o={alt:i,id:a,link:n,caption:l};return o.url=e.url,o})(e);var u,m;G.current&&!get(d,["caption"])&&(d=omit(d,["caption"])),s=e.id&&e.id===y?{url:k}:{width:void 0,height:void 0,sizeSlug:(u=e,m=q,u.hasOwnProperty("sizes")||u.hasOwnProperty("url")||u.hasOwnProperty("media_details")||u.hasOwnProperty("source_url")||void 0!==u[m]?q:"full")};let g,h=t.linkDestination;if(!h)switch((null===(a=wp)||void 0===a||null===(n=a.media)||void 0===n||null===(o=n.view)||void 0===o||null===(c=o.settings)||void 0===c||null===(r=c.defaultProps)||void 0===r?void 0:r.link)||"none"){case"file":case"media":h="media";break;case"post":case"attachment":h="attachment";break;case"custom":h="custom";break;case"none":h="none"}switch(h){case"media":g=e.url;break;case"attachment":g=e.link}d.href=g,i({...d,...s,linkDestination:h})}function Z(e){e!==k&&i({url:e,id:void 0,width:void 0,height:void 0,sizeSlug:q})}function $(e){const t=["wide","full"].includes(e)?{width:void 0,height:void 0}:{};i({...t,align:e})}let ee=((e,t)=>!e&&Object(l.isBlobURL)(t))(y,k);Object(r.useEffect)(()=>{if(!ee)return;const e=getBlobByURL(k);e&&K({filesList:[e],onFileChange:([e])=>{Y(e)},allowedTypes:O,onError:e=>{ee=!1,V("error",e,{type:"snackbar"}),i({src:void 0,id:void 0,url:void 0})}})},[]),Object(r.useEffect)(()=>{ee?D(k):Object(l.revokeBlobURL)(T)},[ee,k]);const te=w(y,k)?k:void 0,ie=!!k&&React.createElement("img",{alt:Object(m.__)("Edit image"),title:Object(m.__)("Edit image"),className:"edit-image-preview",src:k});function $(e){const t=["wide","full"].includes(e)?{width:void 0,height:void 0}:{};i({...t,align:e})}Object(r.useEffect)(()=>{w(y,k)&&s&&!A&&window.fetch(k).then(e=>e.blob()).then(e=>N(e)).catch(()=>{})},[y,k,s,A]);const ae=Object(u.useBlockProps)({ref:J});return React.createElement(React.Fragment,null,React.createElement(u.BlockControls,{group:"block"},React.createElement(u.BlockAlignmentControl,{value:_,onChange:$}),A&&React.createElement(o.ToolbarButton,{onClick:function(){K({filesList:[A],onFileChange([e]){Y(e),Object(l.isBlobURL)(null==e?void 0:e.url)||(N(),V("success",Object(m.__)("Image uploaded."),{type:"snackbar"}))},allowedTypes:O,onError(e){V("error",e,{type:"snackbar"})}})},icon:d,label:Object(m.__)("Upload external image")})),React.createElement("figure",R({},ae,{className:n()(a,"uagb-editor-preview-mode-"+M.toLowerCase(),"uagb-block-"+j,"wp-block-uagb-image-align-"+_)}),(T||k)&&React.createElement(E,{temporaryURL:T,attributes:t,setAttributes:i,isSelected:s,insertBlocksAfter:b,onReplace:v,onSelectImage:Y,onSelectURL:Z,onUploadError:X,containerRef:J,context:p,clientId:f,onCloseModal:Q,onImageLoadError:function(e=!1){e||i({url:void 0,id:void 0})}}),!k&&React.createElement(u.BlockControls,{group:"block"},React.createElement(u.BlockAlignmentControl,{value:_,onChange:$})),React.createElement(u.MediaPlaceholder,{icon:React.createElement(u.BlockIcon,{icon:h}),onSelect:Y,onSelectURL:Z,onError:X,onClose:Q,accept:"image/*",allowedTypes:O,value:{id:y,src:te},mediaPreview:ie,disableMediaButtons:T||k})))};j.propTypes={},j.defaultProps={},t.default=j}}]);