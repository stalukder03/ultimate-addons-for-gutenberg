(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[67],{560:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),o=a(2),i=a(12),r=a(98),c=a(39),u=a(54),b=a(17),s=a(117),d=a(16),g=a(5),m=a(4),_=function(e){var t=e,a=t.loopLottie,l=t.reverseDirection,_=e=e.parentProps,p=_.setAttributes,f=_.attributes,h=f.align,j=f.height,O=f.heightTablet,v=f.heightMob,E=f.width,w=f.widthTablet,y=f.widthMob,k=f.backgroundColor,C=f.loop,L=f.speed,T=f.reverse,R=f.jsonLottie,U=f.lottieURl,S=f.playOn,A=f.backgroundHColor,M=n.a.createElement(m.PanelBody,{initialOpen:!0},n.a.createElement(m.SelectControl,{label:Object(o.__)("Play On","ultimate-addons-for-gutenberg"),value:S,onChange:function(e){return p({playOn:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(o.__)("On Hover","ultimate-addons-for-gutenberg")},{value:"click",label:Object(o.__)("On Click","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Viewport","ultimate-addons-for-gutenberg")}],help:"scroll"===S?Object(o.__)("This setting will only take effect once you are on the live page, and not while you're editing.","ultimate-addons-for-gutenberg"):""}),n.a.createElement(m.ToggleControl,{label:Object(o.__)("Loop","ultimate-addons-for-gutenberg"),checked:C,onChange:a,help:Object(o.__)("Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.")}),n.a.createElement(d.a,{label:Object(o.__)("Speed","ultimate-addons-for-gutenberg"),setAttributes:p,value:L,onChange:function(e){return p({speed:e})},min:1,max:50,displayUnit:!1}),C&&n.a.createElement(m.ToggleControl,{label:Object(o.__)("Reverse","ultimate-addons-for-gutenberg"),checked:T,onChange:l,help:Object(o.__)("Direction of animation.","ultimate-addons-for-gutenberg")}),n.a.createElement(u.a,{setAttributes:p,label:Object(o.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:h,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(m.Icon,{icon:Object(i.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(m.Icon,{icon:Object(i.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(m.Icon,{icon:Object(i.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),P=n.a.createElement(m.PanelBody,{title:Object(o.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(s.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:E,label:"width"},tablet:{value:w,label:"widthTablet"},mobile:{value:y,label:"widthMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:p}),n.a.createElement(s.a,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:j,label:"height"},tablet:{value:O,label:"heightTablet"},mobile:{value:v,label:"heightMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:p}),n.a.createElement(b.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:function(e){return p({backgroundColor:e})}}),n.a.createElement(b.a,{label:Object(o.__)("Hover","ultimate-addons-for-gutenberg"),colorValue:A||"",onColorChange:function(e){return p({backgroundHColor:e})}})),H=function(e){e&&e.url?(p({jsonLottie:e}),p({lottieURl:e.url})):p({jsonLottie:null})},I="invalid";if(U&&U.endsWith(".json")&&(I="valid"),!uagb_blocks_info.uagb_mime_type)return n.a.createElement("div",{className:"uagb-show-notice"},n.a.createElement("span",null,Object(o.__)("Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer","ultimate-addons-for-gutenberg"),n.a.createElement("a",{href:"".concat(uagb_blocks_info.uagb_site_url,"/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin"),target:"__blank"}," ",Object(o.__)("this document")," "),Object(o.__)("to know more about it.")));if("invalid"===I){var N=n.a.createElement("span",null," ",Object(o.__)("Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations","ultimate-addons-for-gutenberg"),n.a.createElement("a",{href:"https://lottiefiles.com/",target:"__blank"}," ",Object(o.__)("here on this")," "),Object(o.__)("website."));return n.a.createElement("div",{className:"uagb-lottie_upload_wrap"},n.a.createElement(g.MediaPlaceholder,{labels:{title:Object(o.__)("Lottie","ultimate-addons-for-gutenberg"),instructions:N},allowedTypes:["application/json"],accept:["application/json"],value:R,onSelectURL:function(e){return p({lottieURl:e})},onSelect:H}))}return n.a.createElement(n.a.Fragment,null,"valid"===I&&n.a.createElement(g.BlockControls,null,n.a.createElement(m.ToolbarGroup,null,n.a.createElement(g.MediaReplaceFlow,{mediaURL:U,allowedTypes:["application/json"],accept:["application/json"],onSelectURL:function(e){return p({lottieURl:e})},onSelect:H}))),n.a.createElement(g.InspectorControls,null,n.a.createElement(r.a,{tabs:["general","style","advance"]},n.a.createElement(c.b,c.a.general,M),n.a.createElement(c.b,c.a.style,P),n.a.createElement(c.b,c.a.advance))))};t.default=n.a.memo(_)}}]);