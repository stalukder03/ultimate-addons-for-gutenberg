(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[74],{199:function(e,t,a){"use strict";var n,o=a(1),l=a(6),i=a(4),r=a(0),u=a.n(r),b=a(13),c=a.n(b),g=a(200),s=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return s++||(n=c()(g.a,d)),m},m.unuse=function(){s>0&&!--s&&(n(),n=null)};var _=m;t.a=e=>{Object(r.useLayoutEffect)(()=>(_.use(),()=>{_.unuse()}),[]);const{onSelectImage:t,backgroundImage:a,onRemoveImage:n,showVideoInput:b,label:c,disableRemove:g=!1,allow:s=["image"]}=e;let d=Object(o.__)("Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),p=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),f=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),h=["image"];return b&&(d=Object(o.__)("Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),p=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),f=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),h=["video"]),d=c||d,d=!1===c?c:d,"Lottie Animation"===c&&(m=Object(o.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(o.__)("Replace Lottie Animation","ultimate-addons-for-gutenberg"),f=Object(o.__)("Remove Lottie Animation","ultimate-addons-for-gutenberg"),h=s),u.a.createElement(l.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+c,label:d},u.a.createElement("div",{className:"uagb-bg-image"},u.a.createElement(i.MediaUpload,{title:m,onSelect:t,allowedTypes:h,value:a,render:({open:e})=>u.a.createElement(l.Button,{isSecondary:!0,onClick:e},null!=a&&a.url?p:m)}),!g&&(null==a?void 0:a.url)&&u.a.createElement(l.Button,{className:"uagb-rm-btn",onClick:n,isLink:!0,isDestructive:!0},f),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},200:function(e,t,a){"use strict";var n=a(14),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  display: flex; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    border-radius: 2px;\n    background-color: #f0f0f0;\n    min-height: 90px;\n    padding: 8px 0;\n    text-align: center;\n    display: flex;\n    width: 100%;\n    transition: all 0.1s ease-out;\n    box-shadow: 0 0 0 0 #0085ba;\n    margin-top: 10px;\n    align-items: center;\n    justify-content: center; }\n    .uagb-bg-image .components-button.is-destructive:hover:not(:disabled) {\n      color: #710d0d;\n      box-shadow: inset 0 0 0 0 #710d0d; }\n    .uagb-bg-image .components-button.is-link.is-destructive:hover:not(:disabled) {\n      background: #f0f0f0; }\n    .uagb-bg-image .components-button.is-link.is-destructive:focus:not(:disabled) {\n      outline: none; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 0; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n\n.uag-background-image .uagb-bg-image,\n.uag-background-video .uagb-bg-image {\n  display: block; }\n  .uag-background-image .uagb-bg-image .components-button,\n  .uag-background-video .uagb-bg-image .components-button {\n    min-height: 55px; }\n  .uag-background-image .uagb-bg-image .components-button:last-child,\n  .uag-background-video .uagb-bg-image .components-button:last-child {\n    margin-left: 0;\n    margin-top: 0; }\n",""]),t.a=o},491:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(1),i=a(11),r=a(79),u=a(24),b=a(19),c=a(15),g=a(23),s=a(18),d=a(199),m=a(52),_=a(4),p=a(6),f=a(16);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const v=e=>{const{loopLottie:t,reverseDirection:a}=e;e=e.parentProps;const{setAttributes:n,attributes:v}=e,{lottieSource:j,align:O,height:E,heightTablet:y,heightMob:k,width:w,widthTablet:C,widthMob:L,backgroundColor:S,loop:R,speed:A,reverse:I,jsonLottie:T,lottieURl:x,playOn:U,backgroundHColor:N,isPreview:B}=v,V=e=>{e&&e.url?n({jsonLottie:e,lottieURl:e.url,lottieSource:"library"}):n({jsonLottie:null})},M=e=>{n({lottieURl:e,lottieSource:"url"})},P=o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{title:Object(l.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(b.a,{setAttributes:n,label:Object(l.__)("File Source","ultimate-addons-for-gutenberg"),data:{value:j,label:"lottieSource"},options:[{value:"library",label:Object(l.__)("Library","ultimate-addons-for-gutenberg")},{value:"url",label:Object(l.__)("URL","ultimate-addons-for-gutenberg")}]}),"upload"===j&&o.a.createElement(d.a,{label:"Lottie Animation",backgroundImage:T,onSelectImage:V,disableRemove:!0,allow:["application/json"]}),"library"===j&&o.a.createElement(d.a,{label:"Lottie Animation",backgroundImage:T,onSelectImage:V,disableRemove:!0,allow:["application/json"]}),"url"===j&&o.a.createElement(p.TextControl,{label:Object(l.__)("Lottie Animation URL","ultimate-addons-for-gutenberg"),value:x,onChange:e=>n({lottieURl:e})})),o.a.createElement(f.a,{title:Object(l.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.a,{setAttributes:n,label:Object(l.__)("Play On","ultimate-addons-for-gutenberg"),data:{value:U,label:"playOn"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(l.__)("Default","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(l.__)("Hover","ultimate-addons-for-gutenberg")},{value:"click",label:Object(l.__)("Click","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(l.__)("Viewport","ultimate-addons-for-gutenberg")}],help:"scroll"===U||"none"===U?Object(l.__)("This setting will only take effect once you are on the live page, and not while you're editing.","ultimate-addons-for-gutenberg"):""}),o.a.createElement(b.a,{setAttributes:n,label:Object(l.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:O,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(p.Icon,{icon:Object(i.a)("fa fa-align-left")}),tooltip:Object(l.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(p.Icon,{icon:Object(i.a)("fa fa-align-center")}),tooltip:Object(l.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(p.Icon,{icon:Object(i.a)("fa fa-align-right")}),tooltip:Object(l.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),o.a.createElement(p.ToggleControl,{label:Object(l.__)("Loop","ultimate-addons-for-gutenberg"),checked:R,onChange:t,help:Object(l.__)("Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.")}),o.a.createElement(s.a,{label:Object(l.__)("Speed","ultimate-addons-for-gutenberg"),setAttributes:n,value:A,onChange:e=>n({speed:e}),min:1,max:50,displayUnit:!1}),R&&o.a.createElement(p.ToggleControl,{label:Object(l.__)("Reverse","ultimate-addons-for-gutenberg"),checked:I,onChange:a,help:Object(l.__)("Direction of animation.","ultimate-addons-for-gutenberg")}))),F=o.a.createElement(f.a,{title:Object(l.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(g.a,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:w,label:"width"},tablet:{value:C,label:"widthTablet"},mobile:{value:L,label:"widthMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:n}),o.a.createElement(g.a,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:E,label:"height"},tablet:{value:y,label:"heightTablet"},mobile:{value:k,label:"heightMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:n}),o.a.createElement(m.a,{tabs:[{name:"normal",title:Object(l.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(l.__)("Hover","ultimate-addons-for-gutenberg")}],normal:o.a.createElement(c.a,{label:Object(l.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:S||"",onColorChange:e=>n({backgroundColor:e})}),hover:o.a.createElement(c.a,{label:Object(l.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:N||"",onColorChange:e=>n({backgroundHColor:e})}),disableBottomSeparator:!0}));let H="invalid";if(x&&x.endsWith(".json")&&(H="valid"),!uagb_blocks_info.uagb_mime_type)return o.a.createElement("div",{className:"uagb-show-notice"},o.a.createElement("span",null,Object(l.__)("Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer","ultimate-addons-for-gutenberg"),o.a.createElement("a",{href:uagb_blocks_info.uagb_site_url+"/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin",target:"__blank"}," ",Object(l.__)("this document")," "),Object(l.__)("to know more about it.")));if("invalid"===H){const e=o.a.createElement("span",null," ",Object(l.__)("Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations","ultimate-addons-for-gutenberg"),o.a.createElement("a",{href:"https://lottiefiles.com/",target:"__blank"}," ",Object(l.__)("here on this")," "),Object(l.__)("website.")),t=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/lottie-animation.png";return B?o.a.createElement("img",{width:"100%",src:t,alt:""}):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"uagb-lottie_upload_wrap"},o.a.createElement(_.MediaPlaceholder,{labels:{title:Object(l.__)("Lottie","ultimate-addons-for-gutenberg"),instructions:e},allowedTypes:["application/json"],accept:["application/json"],value:T,onSelectURL:e=>M(e),onSelect:V})))}return o.a.createElement(o.a.Fragment,null,"valid"===H&&o.a.createElement(_.BlockControls,null,o.a.createElement(p.ToolbarGroup,null,o.a.createElement(_.MediaReplaceFlow,{mediaURL:x,allowedTypes:["application/json"],accept:["application/json"],onSelectURL:e=>M(e),onSelect:V})),o.a.createElement(_.AlignmentToolbar,{value:O,onChange:e=>n({align:e})})),o.a.createElement(_.InspectorControls,null,o.a.createElement(r.a,{tabs:["general","style","advance"]},o.a.createElement(u.b,u.a.general,P),o.a.createElement(u.b,u.a.style,F),o.a.createElement(u.b,h({},u.a.advance,{parentProps:e})))))};t.default=o.a.memo(v)}}]);