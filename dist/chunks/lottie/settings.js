(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[67],{558:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(2),r=a(5),i=a(3),c=function(e){var t=e,a=t.loopLottie,n=t.reverseDirection,c=e=e.parentProps,s=c.setAttributes,u=c.attributes,b=u.align,m=u.height,g=u.heightTablet,d=u.heightMob,_=u.width,p=u.widthTablet,h=u.widthMob,f=u.backgroundColor,v=u.loop,E=u.speed,w=u.reverse,C=u.jsonLottie,j=u.lottieURl,O=u.playOn,k=u.backgroundHColor,y=l.a.createElement(i.PanelBody,{title:Object(o.__)("Controls","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(i.SelectControl,{label:Object(o.__)("Play On","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){return s({playOn:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(o.__)("On Hover","ultimate-addons-for-gutenberg")},{value:"click",label:Object(o.__)("On Click","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Viewport","ultimate-addons-for-gutenberg")}],help:"scroll"===O?Object(o.__)("This setting will only take effect once you are on the live page, and not while you're editing.","ultimate-addons-for-gutenberg"):""}),l.a.createElement(i.ToggleControl,{label:Object(o.__)("Loop","ultimate-addons-for-gutenberg"),checked:v,onChange:a,help:Object(o.__)("Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.")}),l.a.createElement(i.RangeControl,{label:Object(o.__)("Speed","ultimate-addons-for-gutenberg"),value:E,onChange:function(e){return s({speed:e})},min:1,max:50,allowReset:!0}),v&&l.a.createElement(i.ToggleControl,{label:Object(o.__)("Reverse","ultimate-addons-for-gutenberg"),checked:w,onChange:n,help:Object(o.__)("Direction of animation.","ultimate-addons-for-gutenberg")})),R=l.a.createElement(i.PanelBody,{title:Object(o.__)("Style","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(i.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:l.a.createElement(i.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:l.a.createElement(i.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:l.a.createElement(i.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?l.a.createElement(i.RangeControl,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:h,onChange:function(e){return s({widthMob:e})},min:0,max:1e3,allowReset:!0}):"tablet"===e.name?l.a.createElement(i.RangeControl,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:p,onChange:function(e){return s({widthTablet:e})},min:0,max:1e3,allowReset:!0}):l.a.createElement(i.RangeControl,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:_,onChange:function(e){return s({width:e})},min:0,max:1e3,allowReset:!0}),l.a.createElement("div",null,t)})),l.a.createElement(i.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:l.a.createElement(i.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:l.a.createElement(i.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:l.a.createElement(i.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?l.a.createElement(i.RangeControl,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return s({heightMob:e})},min:0,max:1e3,allowReset:!0}):"tablet"===e.name?l.a.createElement(i.RangeControl,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:g,onChange:function(e){return s({heightTablet:e})},min:0,max:1e3,allowReset:!0}):l.a.createElement(i.RangeControl,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:m,onChange:function(e){return s({height:e})},min:0,max:1e3,allowReset:!0}),l.a.createElement("div",null,t)})),l.a.createElement("br",null),l.a.createElement("h2",null,Object(o.__)("Alignment","ultimate-addons-for-gutenberg")),l.a.createElement(r.BlockAlignmentToolbar,{value:b,onChange:function(e){return s({align:e})},controls:["left","center","right"],isCollapsed:!1}),l.a.createElement("br",null),l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:f}}))),l.a.createElement(r.ColorPalette,{value:f,onChange:function(e){return s({backgroundColor:e})},allowReset:!0}),l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Background Hover Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:k}}))),l.a.createElement(r.ColorPalette,{value:k,onChange:function(e){return s({backgroundHColor:e})},allowReset:!0})),N=function(e){e&&e.url?(s({jsonLottie:e}),s({lottieURl:e.url})):s({jsonLottie:null})},T="invalid";if(j&&j.endsWith(".json")&&(T="valid"),!uagb_blocks_info.uagb_mime_type)return l.a.createElement("div",{className:"uagb-show-notice"},l.a.createElement("span",null,Object(o.__)("Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer","ultimate-addons-for-gutenberg"),l.a.createElement("a",{href:"".concat(uagb_blocks_info.uagb_site_url,"/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin"),target:"__blank"}," ",Object(o.__)("this document")," "),Object(o.__)("to know more about it.")));if("invalid"===T){var L=l.a.createElement("span",null," ",Object(o.__)("Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations","ultimate-addons-for-gutenberg"),l.a.createElement("a",{href:"https://lottiefiles.com/",target:"__blank"}," ",Object(o.__)("here on this")," "),Object(o.__)("website."));return l.a.createElement("div",{className:"uagb-lottie_upload_wrap"},l.a.createElement(r.MediaPlaceholder,{labels:{title:Object(o.__)("Lottie","ultimate-addons-for-gutenberg"),instructions:L},allowedTypes:["application/json"],accept:["application/json"],value:C,onSelectURL:function(e){return s({lottieURl:e})},onSelect:N}))}return l.a.createElement(l.a.Fragment,null,"valid"===T&&l.a.createElement(r.BlockControls,null,l.a.createElement(i.ToolbarGroup,null,l.a.createElement(r.MediaReplaceFlow,{mediaURL:j,allowedTypes:["application/json"],accept:["application/json"],onSelectURL:function(e){return s({lottieURl:e})},onSelect:N}))),l.a.createElement(r.InspectorControls,null,y,R))};t.default=l.a.memo(c)}}]);