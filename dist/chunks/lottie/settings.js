(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[74],{210:function(e,t,a){"use strict";var l=a(1),o=a(7),n=a(5),r=a(0),i=a.n(r),c=a(8);t.a=e=>{const{onSelectImage:t,backgroundImage:a,onRemoveImage:r,showVideoInput:u,label:s,disableRemove:b=!1,allow:d=["image"]}=e;let m,g=Object(l.__)("Image","ultimate-addons-for-gutenberg"),_=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Image","ultimate-addons-for-gutenberg"),f=["image"];u&&(g=Object(l.__)("Video","ultimate-addons-for-gutenberg"),_=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Video","ultimate-addons-for-gutenberg"),f=["video"],m=c.a.video_placeholder),g=s||g,g=!1===s?s:g,"Lottie Animation"===s&&(_=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),f=d,m=c.a.lottie);const h=e=>i.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},c.a[e]);return i.a.createElement(o.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+s,label:g},i.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!m&&(null==a?void 0:a.url)&&`url("${(e=>{let t=e;switch(/(?:\.([^.]+))?$/.exec(String(t))[1]){case"json":t="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":t=""}return t})(null==a?void 0:a.url)}")`}},m&&(null==a?void 0:a.url)&&i.a.createElement("div",{className:"spectra-media-control__icon"},m),i.a.createElement(n.MediaUpload,{title:_,onSelect:t,allowedTypes:f,value:a,render:e=>{let{open:t}=e;return(e=>{const t=null!=a&&a.url?"replace":"add";return i.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+t,onClick:e},"add"===t?h(t):i.a.createElement("div",{className:"uag-control-label"},p))})(t)}}),!b&&(null==a?void 0:a.url)&&i.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:r},h("close"))),e.help&&i.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},503:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),n=a(1),r=a(13),i=a(80),c=a(30),u=a(22),s=a(17),b=a(24),d=a(20),m=a(210),g=a(59),_=a(5),p=a(7),f=a(18);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const v=e=>{const{loopLottie:t,reverseDirection:a}=e;e=e.parentProps;const{setAttributes:l,attributes:v}=e,{lottieSource:j,align:O,height:E,heightTablet:w,heightMob:k,width:y,widthTablet:C,widthMob:L,backgroundColor:S,loop:A,speed:I,reverse:N,jsonLottie:R,lottieURl:T,playOn:U,backgroundHColor:M,isPreview:P}=v,V=e=>{e&&e.url?l({jsonLottie:e,lottieURl:e.url,lottieSource:"library"}):l({jsonLottie:null})},B=e=>{l({lottieURl:e,lottieSource:"url"})},x=o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{title:Object(n.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(u.a,{setAttributes:l,label:Object(n.__)("File Source","ultimate-addons-for-gutenberg"),data:{value:j,label:"lottieSource"},options:[{value:"library",label:Object(n.__)("Library","ultimate-addons-for-gutenberg")},{value:"url",label:Object(n.__)("URL","ultimate-addons-for-gutenberg")}]}),"upload"===j&&o.a.createElement(m.a,{label:"Lottie Animation",backgroundImage:R,onSelectImage:V,disableRemove:!0,allow:["application/json"]}),"library"===j&&o.a.createElement(m.a,{label:"Lottie Animation",backgroundImage:R,onSelectImage:V,disableRemove:!0,allow:["application/json"]}),"url"===j&&o.a.createElement(p.TextControl,{label:Object(n.__)("Lottie Animation URL","ultimate-addons-for-gutenberg"),value:T,onChange:e=>l({lottieURl:e})})),o.a.createElement(f.a,{title:Object(n.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.a,{setAttributes:l,label:Object(n.__)("Play On","ultimate-addons-for-gutenberg"),data:{value:U,label:"playOn"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(n.__)("Default","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(n.__)("Hover","ultimate-addons-for-gutenberg")},{value:"click",label:Object(n.__)("Click","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(n.__)("Viewport","ultimate-addons-for-gutenberg")}],help:"scroll"===U||"none"===U?Object(n.__)("This setting will only take effect once you are on the live page, and not while you're editing.","ultimate-addons-for-gutenberg"):""}),o.a.createElement(u.a,{setAttributes:l,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:O,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(p.Icon,{icon:Object(r.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(p.Icon,{icon:Object(r.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(p.Icon,{icon:Object(r.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),o.a.createElement(p.ToggleControl,{label:Object(n.__)("Loop","ultimate-addons-for-gutenberg"),checked:A,onChange:t,help:Object(n.__)("Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.","ultimate-addons-for-gutenberg")}),o.a.createElement(d.a,{label:Object(n.__)("Speed","ultimate-addons-for-gutenberg"),setAttributes:l,value:I,data:{value:I,label:"speed"},min:1,max:50,displayUnit:!1,help:Object(n.__)("This setting will only take effect once you refresh the editor page.","ultimate-addons-for-gutenberg")}),A&&o.a.createElement(p.ToggleControl,{label:Object(n.__)("Reverse","ultimate-addons-for-gutenberg"),checked:N,onChange:a,help:Object(n.__)("Direction of animation.","ultimate-addons-for-gutenberg")}))),F=o.a.createElement(f.a,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(b.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:y,label:"width"},tablet:{value:C,label:"widthTablet"},mobile:{value:L,label:"widthMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:l}),o.a.createElement(b.a,{label:Object(n.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:E,label:"height"},tablet:{value:w,label:"heightTablet"},mobile:{value:k,label:"heightMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:l}),o.a.createElement(g.a,{tabs:[{name:"normal",title:Object(n.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(n.__)("Hover","ultimate-addons-for-gutenberg")}],normal:o.a.createElement(s.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:S||"",data:{value:S,label:"backgroundColor"},setAttributes:l}),hover:o.a.createElement(s.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:M||"",data:{value:M,label:"backgroundHColor"},setAttributes:l}),disableBottomSeparator:!0}));let H="invalid";if(T&&T.endsWith(".json")&&(H="valid"),!uagb_blocks_info.uagb_mime_type)return o.a.createElement("div",{className:"uagb-show-notice"},o.a.createElement("span",null,Object(n.__)("Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer","ultimate-addons-for-gutenberg"),o.a.createElement("a",{href:uagb_blocks_info.uagb_site_url+"/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin",target:"__blank"}," ",Object(n.__)("this document")," "),Object(n.__)("to know more about it.")));if("invalid"===H){const e=o.a.createElement("span",{className:"uagb-lottie-instructions"}," ",Object(n.__)("Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations","ultimate-addons-for-gutenberg"),o.a.createElement("a",{className:"uagb-lottie-instructions__lottie-url",href:"https://lottiefiles.com/",target:"__blank"}," ",Object(n.__)("here on this")," "),Object(n.__)("website.")),t=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/lottie-animation.png";return P?o.a.createElement("img",{width:"100%",src:t,alt:""}):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"uagb-lottie_upload_wrap"},o.a.createElement(_.MediaPlaceholder,{labels:{title:Object(n.__)("Lottie","ultimate-addons-for-gutenberg"),instructions:e},allowedTypes:["application/json"],accept:["application/json"],value:R,onSelectURL:e=>B(e),onSelect:V})))}return o.a.createElement(o.a.Fragment,null,"valid"===H&&o.a.createElement(_.BlockControls,null,o.a.createElement(p.ToolbarGroup,null,o.a.createElement(_.MediaReplaceFlow,{mediaURL:T,allowedTypes:["application/json"],accept:["application/json"],onSelectURL:e=>B(e),onSelect:V}))),o.a.createElement(_.InspectorControls,null,o.a.createElement(i.a,{tabs:["general","style","advance"]},o.a.createElement(c.b,c.a.general,x),o.a.createElement(c.b,c.a.style,F),o.a.createElement(c.b,h({},c.a.advance,{parentProps:e})))))};t.default=o.a.memo(v)}}]);