(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[72],{487:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),n=a(1),i=a(12),r=a(79),c=a(23),u=a(22),b=a(17),s=a(80),g=a(11),d=a(50),m=a(4),_=a(6),p=a(14);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const h=e=>{const{loopLottie:t,reverseDirection:a}=e;e=e.parentProps;const{setAttributes:l,attributes:h}=e,{align:O,height:j,heightTablet:v,heightMob:w,width:E,widthTablet:y,widthMob:k,backgroundColor:C,loop:L,speed:T,reverse:R,jsonLottie:U,lottieURl:A,playOn:S,backgroundHColor:P,isPreview:H}=h,M=o.a.createElement(p.a,{title:Object(n.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(u.a,{setAttributes:l,label:Object(n.__)("Play On","ultimate-addons-for-gutenberg"),data:{value:S,label:"playOn"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(n.__)("Default","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Default","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(n.__)("Hover","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("On Hover","ultimate-addons-for-gutenberg")},{value:"click",label:Object(n.__)("Click","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("On Click","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(n.__)("Viewport","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Viewport","ultimate-addons-for-gutenberg")}],help:"scroll"===S?Object(n.__)("This setting will only take effect once you are on the live page, and not while you're editing.","ultimate-addons-for-gutenberg"):""}),o.a.createElement(u.a,{setAttributes:l,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:O,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(_.Icon,{icon:Object(i.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(_.Icon,{icon:Object(i.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(_.Icon,{icon:Object(i.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),o.a.createElement(_.ToggleControl,{label:Object(n.__)("Loop","ultimate-addons-for-gutenberg"),checked:L,onChange:t,help:Object(n.__)("Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.")}),o.a.createElement(g.a,{label:Object(n.__)("Speed","ultimate-addons-for-gutenberg"),setAttributes:l,value:T,onChange:e=>l({speed:e}),min:1,max:50,displayUnit:!1}),L&&o.a.createElement(_.ToggleControl,{label:Object(n.__)("Reverse","ultimate-addons-for-gutenberg"),checked:R,onChange:a,help:Object(n.__)("Direction of animation.","ultimate-addons-for-gutenberg")})),N=o.a.createElement(p.a,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(s.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:E,label:"width"},tablet:{value:y,label:"widthTablet"},mobile:{value:k,label:"widthMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:l}),o.a.createElement(s.a,{label:Object(n.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:j,label:"height"},tablet:{value:v,label:"heightTablet"},mobile:{value:w,label:"heightMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:l}),o.a.createElement(d.a,{tabs:[{name:"normal",title:Object(n.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(n.__)("Hover","ultimate-addons-for-gutenberg")}],normal:o.a.createElement(b.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:e=>l({backgroundColor:e})}),hover:o.a.createElement(b.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:P||"",onColorChange:e=>l({backgroundHColor:e})}),disableBottomSeparator:!0})),I=e=>{e&&e.url?(l({jsonLottie:e}),l({lottieURl:e.url})):l({jsonLottie:null})};let D="invalid";if(A&&A.endsWith(".json")&&(D="valid"),!uagb_blocks_info.uagb_mime_type)return o.a.createElement("div",{className:"uagb-show-notice"},o.a.createElement("span",null,Object(n.__)("Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer","ultimate-addons-for-gutenberg"),o.a.createElement("a",{href:uagb_blocks_info.uagb_site_url+"/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin",target:"__blank"}," ",Object(n.__)("this document")," "),Object(n.__)("to know more about it.")));if("invalid"===D){const e=o.a.createElement("span",null," ",Object(n.__)("Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations","ultimate-addons-for-gutenberg"),o.a.createElement("a",{href:"https://lottiefiles.com/",target:"__blank"}," ",Object(n.__)("here on this")," "),Object(n.__)("website.")),t=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/lottie-animation.png";return H?o.a.createElement("img",{width:"100%",src:t,alt:""}):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"uagb-lottie_upload_wrap"},o.a.createElement(m.MediaPlaceholder,{labels:{title:Object(n.__)("Lottie","ultimate-addons-for-gutenberg"),instructions:e},allowedTypes:["application/json"],accept:["application/json"],value:U,onSelectURL:e=>l({lottieURl:e}),onSelect:I})))}return o.a.createElement(o.a.Fragment,null,"valid"===D&&o.a.createElement(m.BlockControls,null,o.a.createElement(_.ToolbarGroup,null,o.a.createElement(m.MediaReplaceFlow,{mediaURL:A,allowedTypes:["application/json"],accept:["application/json"],onSelectURL:e=>l({lottieURl:e}),onSelect:I})),o.a.createElement(m.AlignmentToolbar,{value:O,onChange:e=>l({align:e})})),o.a.createElement(m.InspectorControls,null,o.a.createElement(r.a,{tabs:["general","style","advance"]},o.a.createElement(c.b,c.a.general,M),o.a.createElement(c.b,c.a.style,N),o.a.createElement(c.b,f({},c.a.advance,{parentProps:e})))))};t.default=o.a.memo(h)}}]);