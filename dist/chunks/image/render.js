(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[67],{459:function(e,t,a){"use strict";a.r(t);var i=a(3),n=a.n(i),l=a(152),c=a(6),o=a(9),r=a(2),s=a(153),d=Object(r.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(s.Path,{d:"M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"})),u=a(4),m=a(1),g=a(10),b=a(7),h=a(13),p=a(155),v=Object(r.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(s.Path,{d:"M17.5 7v8H19V7c0-1.1-.9-2-2-2H9v1.5h8c.3 0 .5.2.5.5zM7 17.5c-.3 0-.5-.2-.5-.5V1H5v4H1v1.5h4V17c0 1.1.9 2 2 2h10.5v4H19v-4h4v-1.5H7z"}));const f=["image"];function R({temporaryURL:e,attributes:{url:t="",alt:a,align:i,id:n,width:l,height:s,caption:d},setAttributes:g,isSelected:b,onCloseModal:R,onSelectImage:E,onSelectURL:O,onUploadError:w,containerRef:j,context:_,clientId:k}){var S;const y=Object(r.useRef)(),{allowResize:B=!0}=(Object(r.useRef)(),_),{toggleSelection:x}=Object(o.useDispatch)(u.store),{multiImageSelection:L}=Object(o.useSelect)(e=>{const{getMultiSelectedBlockClientIds:t,getBlockName:a}=e(u.store),i=t();return{multiImageSelection:i.length&&i.every(e=>"uagb/image"===a(e))}},[n,b]),{imageEditing:I,maxWidth:U}=Object(o.useSelect)(e=>{const{getSettings:t}=e(u.store),{imageEditing:a,maxWidth:i}=t();return{imageEditing:a,maxWidth:i}},[k]),H=Object(h.useViewportMatch)("medium"),C=["wide","full"].includes(i),[{loadedNaturalWidth:T,loadedNaturalHeight:z},W]=Object(r.useState)({}),[P,F]=Object(r.useState)(!1),N=function(e,t){const[a,i]=Object(r.useState)();function n(){i(e.current.clientWidth)}return Object(r.useEffect)(n,t),Object(r.useEffect)(()=>{const{defaultView:t}=e.current.ownerDocument;return t.addEventListener("resize",n),()=>{t.removeEventListener("resize",n)}},[]),a}(j,[i]),A=B&&!(C&&H),{naturalWidth:M,naturalHeight:V}=Object(r.useMemo)(()=>{var e,t;return{naturalWidth:(null===(e=y.current)||void 0===e?void 0:e.naturalWidth)||T||void 0,naturalHeight:(null===(t=y.current)||void 0===t?void 0:t.naturalHeight)||z||void 0}},[T,z,null===(S=y.current)||void 0===S?void 0:S.complete]),D=Object(p.getFilename)(t);let G;G=a||(D?Object(m.sprintf)(
/* translators: %s: file name */
Object(m.__)("This image has an empty alt attribute; its file name is %s"),D):Object(m.__)("This image has an empty alt attribute"));let J,q,K=React.createElement(React.Fragment,null,React.createElement("img",{src:e||t,alt:G,onError:()=>onImageError(),onLoad:e=>{var t,a;W({loadedNaturalWidth:null===(t=e.target)||void 0===t?void 0:t.naturalWidth,loadedNaturalHeight:null===(a=e.target)||void 0===a?void 0:a.naturalHeight})},ref:y}),e&&React.createElement(c.Spinner,null));if(N&&M&&V){const e=M>N,t=V/M;J=e?N:M,q=e?N*t:V}const Q=n&&M&&V&&I,X=!L&&Q&&!P;if(Q&&P)K=React.createElement(u.__experimentalImageEditor,{url:t,width:l,height:s,clientWidth:N,naturalHeight:V,naturalWidth:M});else if(A&&J){const e=l||J,t=s||q,a=M/V,n=M<V?20:20*a,o=V<M?20:20/a,r=2.5*U;let d=!1,u=!1;"center"===i?(d=!0,u=!0):Object(m.isRTL)()?"left"===i?d=!0:u=!0:"right"===i?u=!0:d=!0,K=React.createElement(c.ResizableBox,{size:{width:l||"auto",height:s||"auto"},showHandle:b,minWidth:n,maxWidth:r,minHeight:o,maxHeight:r/a,lockAspectRatio:!0,enable:{top:!1,right:d,bottom:!0,left:u},onResizeStart:function(){x(!1)},onResizeStop:(a,i,n,l)=>{x(!0),g({width:parseInt(e+l.width,10),height:parseInt(t+l.height,10)})}},K)}else K=React.createElement("div",{style:{width:l,height:s}},K);const Y=React.createElement(React.Fragment,null,React.createElement(u.BlockControls,{group:"block"},X&&React.createElement(c.ToolbarButton,{onClick:()=>F(!0),icon:v,label:Object(m.__)("Crop")})),!L&&!P&&React.createElement(u.BlockControls,{group:"other"},React.createElement(u.MediaReplaceFlow,{mediaId:n,mediaURL:t,allowedTypes:f,accept:"image/*",onSelect:E,onSelectURL:O,onError:w,onCloseModal:R})));return React.createElement(React.Fragment,null,React.createElement(u.__experimentalImageEditingProvider,{id:n,url:t,naturalWidth:M,naturalHeight:V,clientWidth:N,onSaveImage:e=>g(e),isEditing:P,onFinishEditing:()=>F(!1)},!e&&Y,K))}function E({attributes:e,isSelected:t,setAttributes:a,captionRef:i}){const{caption:n,heading:l,layout:c}=e,o=Object(r.useRef)();Object(r.useEffect)(()=>{o.current=l},[n]);const s=React.createElement(React.Fragment,null,(!u.RichText.isEmpty(l)||t)&&React.createElement(u.RichText,{ref:o,tagName:"h2",className:"uagb-image-heading","aria-label":Object(m.__)("Image overlay heading text"),placeholder:Object(m.__)("Add Heading"),value:l,onChange:e=>a({heading:e}),inlineToolbar:!0})),d=React.createElement(React.Fragment,null,(!u.RichText.isEmpty(n)||t)&&React.createElement(u.RichText,{ref:i,tagName:"figcaption",className:"uagb-image-caption","aria-label":Object(m.__)("Image caption text"),placeholder:Object(m.__)("Add caption"),value:n,onChange:e=>a({caption:e}),inlineToolbar:!0}));return React.createElement(React.Fragment,null,"overlay"===c?React.createElement(React.Fragment,null,React.createElement("div",{className:"wp-block-uagb-image--layout-overlay__inner"},s,d)):d)}a(23),E.propTypes={},E.defaultProps={};const O=(e,t)=>t&&!e&&!Object(l.isBlobURL)(t);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}const j=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,className:i,isSelected:s,insertBlocksAfter:h,onReplace:p,context:v,clientId:j}=e,{block_id:_,layout:k,url:S,alt:y,caption:B,align:x,id:L}=t,I=Object(g.a)(),{createNotice:U}=Object(o.useDispatch)("core/notices"),[H,C]=Object(r.useState)(),[T,z]=Object(r.useState)(),W=Object(r.useRef)();Object(r.useEffect)(()=>{W.current=y},[y]);const P=Object(r.useRef)();Object(r.useEffect)(()=>{P.current=B},[B]);const F=Object(r.useRef)(),{imageDefaultSize:N,mediaUpload:A}=Object(o.useSelect)(e=>{const{getSettings:t}=e(u.store),{imageDefaultSize:a,mediaUpload:i}=t();return{imageDefaultSize:a,mediaUpload:i}},[]);function M(){(e=>{var t,a;return((null===(t=wp)||void 0===t||null===(a=t.media)||void 0===a?void 0:a.attachment(e))||{}).destroyed})(null==t?void 0:t.id)&&a({url:void 0,id:void 0})}function V(e){U("error",e,{type:"snackbar"})}function D(e){var i,n,c,o,r;if(!e||!e.url)return void a({url:void 0,alt:void 0,id:void 0,title:void 0,caption:void 0});if(Object(l.isBlobURL)(e.url))return void C(e.url);C();let s,d=((e,t)=>{const{alt:a,id:i,link:n,caption:l}=e,c={alt:a,id:i,link:n,caption:l};return c.url=e.url,c})(e);var u,m;P.current&&!get(d,["caption"])&&(d=omit(d,["caption"])),s=e.id&&e.id===L?{url:S}:{width:void 0,height:void 0,sizeSlug:(u=e,m=N,u.hasOwnProperty("sizes")||u.hasOwnProperty("url")||u.hasOwnProperty("media_details")||u.hasOwnProperty("source_url")||void 0!==u[m]?N:"full")};let g,b=t.linkDestination;if(!b)switch((null===(i=wp)||void 0===i||null===(n=i.media)||void 0===n||null===(c=n.view)||void 0===c||null===(o=c.settings)||void 0===o||null===(r=o.defaultProps)||void 0===r?void 0:r.link)||"none"){case"file":case"media":b="media";break;case"post":case"attachment":b="attachment";break;case"custom":b="custom";break;case"none":b="none"}switch(b){case"media":g=e.url;break;case"attachment":g=e.link}d.href=g,a({...d,...s,linkDestination:b})}function G(e){e!==S&&a({url:e,id:void 0,width:void 0,height:void 0,sizeSlug:N})}let J=((e,t)=>!e&&Object(l.isBlobURL)(t))(L,S);Object(r.useEffect)(()=>{if(!J)return;const e=getBlobByURL(S);e&&A({filesList:[e],onFileChange:([e])=>{D(e)},allowedTypes:f,onError:e=>{J=!1,U("error",e,{type:"snackbar"}),a({src:void 0,id:void 0,url:void 0})}})},[]),Object(r.useEffect)(()=>{J?C(S):Object(l.revokeBlobURL)(H)},[J,S]);const q=O(L,S)?S:void 0,K=!!S&&React.createElement("img",{alt:Object(m.__)("Edit image"),title:Object(m.__)("Edit image"),className:"edit-image-preview",src:S});Object(r.useEffect)(()=>{O(L,S)&&s&&!T&&window.fetch(S).then(e=>e.blob()).then(e=>z(e)).catch(()=>{})},[L,S,s,T]);const Q=Object(u.useBlockProps)({ref:F});return React.createElement(React.Fragment,null,React.createElement(u.BlockControls,{group:"block"},React.createElement(u.BlockAlignmentControl,{value:x,onChange:function(e){const t=["wide","full"].includes(e)?{width:void 0,height:void 0}:{};a({...t,align:e})}}),T&&React.createElement(c.ToolbarButton,{onClick:function(){A({filesList:[T],onFileChange([e]){D(e),Object(l.isBlobURL)(null==e?void 0:e.url)||(z(),U("success",Object(m.__)("Image uploaded."),{type:"snackbar"}))},allowedTypes:f,onError(e){U("error",e,{type:"snackbar"})}})},icon:d,label:Object(m.__)("Upload external image")})),React.createElement("figure",w({},Q,{className:n()(i,"uagb-editor-preview-mode-"+I.toLowerCase(),"uagb-block-"+_,"wp-block-uagb-image--layout-"+k,x?"wp-block-uagb-image--align-"+x:"")}),(H||S)&&React.createElement(React.Fragment,null,React.createElement(R,{temporaryURL:H,attributes:t,setAttributes:a,isSelected:s,insertBlocksAfter:h,onReplace:p,onSelectImage:D,onSelectURL:G,onUploadError:V,containerRef:F,context:v,clientId:j,onCloseModal:M,onImageLoadError:function(e=!1){e||a({url:void 0,id:void 0})}}),React.createElement(E,{captionRef:P,attributes:t,setAttributes:a,isSelected:s})),React.createElement(u.MediaPlaceholder,{icon:React.createElement(u.BlockIcon,{icon:b.a.post_masonry}),labels:{title:Object(m.__)("Advanced Image","ultimate-addons-for-gutenberg"),instructions:Object(m.__)("Upload an image file, pick one from your media library, or add one with a URL.","ultimate-addons-for-gutenberg")},onSelect:D,onSelectURL:G,onError:V,onClose:M,accept:"image/*",allowedTypes:f,value:{id:L,src:q},mediaPreview:K,disableMediaButtons:H||S})))};j.propTypes={},j.defaultProps={},t.default=j}}]);