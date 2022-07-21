(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[74],{211:function(e,t,a){"use strict";var l=a(1),o=a(8),n=a(5),r=a(9);t.a=e=>{const{getSelectedBlock:t}=Object(r.select)("core/block-editor"),{name:a,attributes:i}=t(),{dynamicContent:c}=i,{onSelectImage:s,backgroundImage:u,onRemoveImage:b,showVideoInput:d,label:m,disableRemove:g=!1,allow:_=["image"]}=e;let p,f=Object(l.__)("Image","ultimate-addons-for-gutenberg"),h=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Image","ultimate-addons-for-gutenberg"),j=["image"];d&&(f=Object(l.__)("Video","ultimate-addons-for-gutenberg"),h=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Video","ultimate-addons-for-gutenberg"),j=["video"],p=UAGB_Block_Icons.video_placeholder),f=m||f,f=!1===m?m:f;let O=wp.hooks.applyFilters("uagb.registerImageExtender","",a,s);"Lottie Animation"===m&&(h=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),v=Object(l.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),j=_,p=UAGB_Block_Icons.lottie);const E=e=>React.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},UAGB_Block_Icons[e]);return React.createElement(o.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+m,label:f},(!c||!c.bgImage||!0!==c.bgImage.enable)&&React.createElement(React.Fragment,null,React.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!p&&(null==u?void 0:u.url)&&`url("${(e=>{let t=e;switch(/(?:\.([^.]+))?$/.exec(String(t))[1]){case"json":t="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":t=""}return t})(null==u?void 0:u.url)}")`}},p&&(null==u?void 0:u.url)&&React.createElement("div",{className:"spectra-media-control__icon"},p),React.createElement(n.MediaUpload,{title:h,onSelect:s,allowedTypes:j,value:u,render:e=>{let{open:t}=e;return(e=>{const t=null!=u&&u.url?"replace":"add";return React.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+t,onClick:e},"add"===t?E(t):React.createElement("div",{className:"uag-control-label"},v))})(t)}}),!g&&(null==u?void 0:u.url)&&React.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:b},E("close"))),e.help&&React.createElement("p",{className:"uag-control-help-notice"},e.help)),O)}},503:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),n=a(1),r=a(13),i=a(82),c=a(29),s=a(22),u=a(17),b=a(28),d=a(20),m=a(211),g=a(59),_=a(5),p=a(8),f=a(18);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const v=e=>{const{loopLottie:t,reverseDirection:a}=e;e=e.parentProps;const{setAttributes:l,attributes:v}=e,{lottieSource:j,align:O,height:E,heightTablet:k,heightMob:w,width:y,widthTablet:R,widthMob:C,backgroundColor:I,loop:L,speed:S,reverse:A,jsonLottie:N,lottieURl:U,playOn:T,backgroundHColor:B,isPreview:F}=v,M=e=>{e&&e.url?l({jsonLottie:e,lottieURl:e.url,lottieSource:"library"}):l({jsonLottie:null})},P=e=>{l({lottieURl:e,lottieSource:"url"})},V=o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{title:Object(n.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(s.a,{setAttributes:l,label:Object(n.__)("File Source","ultimate-addons-for-gutenberg"),data:{value:j,label:"lottieSource"},options:[{value:"library",label:Object(n.__)("Library","ultimate-addons-for-gutenberg")},{value:"url",label:Object(n.__)("URL","ultimate-addons-for-gutenberg")}]}),"upload"===j&&o.a.createElement(m.a,{label:"Lottie Animation",backgroundImage:N,onSelectImage:M,disableRemove:!0,allow:["application/json"]}),"library"===j&&o.a.createElement(m.a,{label:"Lottie Animation",backgroundImage:N,onSelectImage:M,disableRemove:!0,allow:["application/json"]}),"url"===j&&o.a.createElement(p.TextControl,{label:Object(n.__)("Lottie Animation URL","ultimate-addons-for-gutenberg"),value:U,onChange:e=>l({lottieURl:e})})),o.a.createElement(f.a,{title:Object(n.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.a,{setAttributes:l,label:Object(n.__)("Play On","ultimate-addons-for-gutenberg"),data:{value:T,label:"playOn"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(n.__)("Default","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(n.__)("Hover","ultimate-addons-for-gutenberg")},{value:"click",label:Object(n.__)("Click","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(n.__)("Viewport","ultimate-addons-for-gutenberg")}],help:"scroll"===T||"none"===T?Object(n.__)("This setting will only take effect once you are on the live page, and not while you're editing.","ultimate-addons-for-gutenberg"):""}),o.a.createElement(s.a,{setAttributes:l,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:O,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(p.Icon,{icon:Object(r.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(p.Icon,{icon:Object(r.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(p.Icon,{icon:Object(r.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),o.a.createElement(p.ToggleControl,{label:Object(n.__)("Loop","ultimate-addons-for-gutenberg"),checked:L,onChange:t,help:Object(n.__)("Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.","ultimate-addons-for-gutenberg")}),o.a.createElement(d.a,{label:Object(n.__)("Speed","ultimate-addons-for-gutenberg"),setAttributes:l,value:S,data:{value:S,label:"speed"},min:1,max:50,displayUnit:!1,help:Object(n.__)("This setting will only take effect once you refresh the editor page.","ultimate-addons-for-gutenberg")}),L&&o.a.createElement(p.ToggleControl,{label:Object(n.__)("Reverse","ultimate-addons-for-gutenberg"),checked:A,onChange:a,help:Object(n.__)("Direction of animation.","ultimate-addons-for-gutenberg")}))),x=o.a.createElement(f.a,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(b.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:y,label:"width"},tablet:{value:R,label:"widthTablet"},mobile:{value:C,label:"widthMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:l}),o.a.createElement(b.a,{label:Object(n.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:E,label:"height"},tablet:{value:k,label:"heightTablet"},mobile:{value:w,label:"heightMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:l}),o.a.createElement(g.a,{tabs:[{name:"normal",title:Object(n.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(n.__)("Hover","ultimate-addons-for-gutenberg")}],normal:o.a.createElement(u.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:I||"",data:{value:I,label:"backgroundColor"},setAttributes:l}),hover:o.a.createElement(u.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:B||"",data:{value:B,label:"backgroundHColor"},setAttributes:l}),disableBottomSeparator:!0}));let G="invalid";if(U&&U.endsWith(".json")&&(G="valid"),!uagb_blocks_info.uagb_mime_type)return o.a.createElement("div",{className:"uagb-show-notice"},o.a.createElement("span",null,Object(n.__)("Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer","ultimate-addons-for-gutenberg"),o.a.createElement("a",{href:uagb_blocks_info.uagb_site_url+"/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin",target:"__blank"}," ",Object(n.__)("this document")," "),Object(n.__)("to know more about it.")));if("invalid"===G){const e=o.a.createElement("span",{className:"uagb-lottie-instructions"}," ",Object(n.__)("Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations","ultimate-addons-for-gutenberg"),o.a.createElement("a",{className:"uagb-lottie-instructions__lottie-url",href:"https://lottiefiles.com/",target:"__blank"}," ",Object(n.__)("here on this")," "),Object(n.__)("website.")),t=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/lottie-animation.png";return F?o.a.createElement("img",{width:"100%",src:t,alt:""}):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"uagb-lottie_upload_wrap"},o.a.createElement(_.MediaPlaceholder,{labels:{title:Object(n.__)("Lottie","ultimate-addons-for-gutenberg"),instructions:e},allowedTypes:["application/json"],accept:["application/json"],value:N,onSelectURL:e=>P(e),onSelect:M})))}return o.a.createElement(o.a.Fragment,null,"valid"===G&&o.a.createElement(_.BlockControls,null,o.a.createElement(p.ToolbarGroup,null,o.a.createElement(_.MediaReplaceFlow,{mediaURL:U,allowedTypes:["application/json"],accept:["application/json"],onSelectURL:e=>P(e),onSelect:M}))),o.a.createElement(_.InspectorControls,null,o.a.createElement(i.a,{tabs:["general","style","advance"]},o.a.createElement(c.b,c.a.general,V),o.a.createElement(c.b,c.a.style,x),o.a.createElement(c.b,h({},c.a.advance,{parentProps:e})))))};t.default=o.a.memo(v)}}]);