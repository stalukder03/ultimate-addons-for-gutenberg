(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[30],{394:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),n=a(1),i=a(9),r=a(76),u=a(30),c=a(39),b=a(15),s=a(81),d=a(14),g=a(43),m=a(3),_=a(4),p=function(e){var t=e,a=t.loopLottie,l=t.reverseDirection,p=e=e.parentProps,f=p.setAttributes,h=p.attributes,j=h.align,O=h.height,v=h.heightTablet,E=h.heightMob,w=h.width,y=h.widthTablet,k=h.widthMob,C=h.backgroundColor,L=h.loop,T=h.speed,R=h.reverse,U=h.jsonLottie,A=h.lottieURl,S=h.playOn,H=h.backgroundHColor,M=o.a.createElement(_.PanelBody,{initialOpen:!0},o.a.createElement(c.a,{setAttributes:f,label:Object(n.__)("Play On","ultimate-addons-for-gutenberg"),data:{value:S,label:"playOn"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(n.__)("Default","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Default","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(n.__)("Hover","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("On Hover","ultimate-addons-for-gutenberg")},{value:"click",label:Object(n.__)("Click","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("On Click","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(n.__)("Viewport","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Viewport","ultimate-addons-for-gutenberg")}],help:"scroll"===S?Object(n.__)("This setting will only take effect once you are on the live page, and not while you're editing.","ultimate-addons-for-gutenberg"):""}),o.a.createElement(_.ToggleControl,{label:Object(n.__)("Loop","ultimate-addons-for-gutenberg"),checked:L,onChange:a,help:Object(n.__)("Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.")}),o.a.createElement(d.a,{label:Object(n.__)("Speed","ultimate-addons-for-gutenberg"),setAttributes:f,value:T,onChange:function(e){return f({speed:e})},min:1,max:50,displayUnit:!1}),L&&o.a.createElement(_.ToggleControl,{label:Object(n.__)("Reverse","ultimate-addons-for-gutenberg"),checked:R,onChange:l,help:Object(n.__)("Direction of animation.","ultimate-addons-for-gutenberg")}),o.a.createElement(c.a,{setAttributes:f,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:j,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(_.Icon,{icon:Object(i.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(_.Icon,{icon:Object(i.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(_.Icon,{icon:Object(i.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),N=o.a.createElement(_.PanelBody,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(s.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:w,label:"width"},tablet:{value:y,label:"widthTablet"},mobile:{value:k,label:"widthMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:f}),o.a.createElement(s.a,{label:Object(n.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:O,label:"height"},tablet:{value:v,label:"heightTablet"},mobile:{value:E,label:"heightMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:f}),o.a.createElement(g.a,{tabs:[{name:"normal",title:Object(n.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(n.__)("Hover","ultimate-addons-for-gutenberg")}],normal:o.a.createElement(b.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:function(e){return f({backgroundColor:e})}}),hover:o.a.createElement(b.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:H||"",onColorChange:function(e){return f({backgroundHColor:e})}}),disableBottomSeparator:!0})),P=function(e){e&&e.url?(f({jsonLottie:e}),f({lottieURl:e.url})):f({jsonLottie:null})},B="invalid";if(A&&A.endsWith(".json")&&(B="valid"),!uagb_blocks_info.uagb_mime_type)return o.a.createElement("div",{className:"uagb-show-notice"},o.a.createElement("span",null,Object(n.__)("Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer","ultimate-addons-for-gutenberg"),o.a.createElement("a",{href:"".concat(uagb_blocks_info.uagb_site_url,"/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin"),target:"__blank"}," ",Object(n.__)("this document")," "),Object(n.__)("to know more about it.")));if("invalid"===B){var I=o.a.createElement("span",null," ",Object(n.__)("Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations","ultimate-addons-for-gutenberg"),o.a.createElement("a",{href:"https://lottiefiles.com/",target:"__blank"}," ",Object(n.__)("here on this")," "),Object(n.__)("website."));return o.a.createElement("div",{className:"uagb-lottie_upload_wrap"},o.a.createElement(m.MediaPlaceholder,{labels:{title:Object(n.__)("Lottie","ultimate-addons-for-gutenberg"),instructions:I},allowedTypes:["application/json"],accept:["application/json"],value:U,onSelectURL:function(e){return f({lottieURl:e})},onSelect:P}))}return o.a.createElement(o.a.Fragment,null,"valid"===B&&o.a.createElement(m.BlockControls,null,o.a.createElement(_.ToolbarGroup,null,o.a.createElement(m.MediaReplaceFlow,{mediaURL:A,allowedTypes:["application/json"],accept:["application/json"],onSelectURL:function(e){return f({lottieURl:e})},onSelect:P}))),o.a.createElement(m.InspectorControls,null,o.a.createElement(r.a,{tabs:["general","style","advance"]},o.a.createElement(u.b,u.a.general,M),o.a.createElement(u.b,u.a.style,N),o.a.createElement(u.b,u.a.advance))))};t.default=o.a.memo(p)}}]);