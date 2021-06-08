(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[68],{519:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(2),i=a(4),r=a(5),s=function(e){var t=e,a=t.loopLottie,n=t.reverseDirection,s=e=e.parentProps,c=s.setAttributes,u=s.attributes,b=u.height,m=u.heightTablet,g=u.heightMob,d=u.width,_=u.widthTablet,p=u.widthMob,h=u.backgroundColor,f=u.loop,v=u.speed,E=u.reverse,w=u.jsonLottie,C=u.lottieURl,j=u.playOn,O=u.backgroundHColor,k=l.a.createElement(r.PanelBody,{title:Object(o.__)("Controls","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(r.SelectControl,{label:Object(o.__)("Play On","ultimate-addons-for-gutenberg"),value:j,onChange:function(e){return c({playOn:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(o.__)("On Hover","ultimate-addons-for-gutenberg")},{value:"click",label:Object(o.__)("On Click","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Viewport","ultimate-addons-for-gutenberg")}],help:"scroll"===j?Object(o.__)("This setting will only take effect once you are on the live page, and not while you're editing.","ultimate-addons-for-gutenberg"):""}),l.a.createElement(r.ToggleControl,{label:Object(o.__)("Loop","ultimate-addons-for-gutenberg"),checked:f,onChange:a,help:Object(o.__)("Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.")}),l.a.createElement(r.RangeControl,{label:Object(o.__)("Speed","ultimate-addons-for-gutenberg"),value:v,onChange:function(e){return c({speed:e})},min:1,max:50,allowReset:!0}),f&&l.a.createElement(r.ToggleControl,{label:Object(o.__)("Reverse","ultimate-addons-for-gutenberg"),checked:E,onChange:n,help:Object(o.__)("Direction of animation.","ultimate-addons-for-gutenberg")})),y=l.a.createElement(r.PanelBody,{title:Object(o.__)("Style","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(r.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:l.a.createElement(r.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:l.a.createElement(r.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:l.a.createElement(r.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?l.a.createElement(r.RangeControl,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:p,onChange:function(e){return c({widthMob:e})},min:0,max:1e3,allowReset:!0}):"tablet"===e.name?l.a.createElement(r.RangeControl,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:_,onChange:function(e){return c({widthTablet:e})},min:0,max:1e3,allowReset:!0}):l.a.createElement(r.RangeControl,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return c({width:e})},min:0,max:1e3,allowReset:!0}),l.a.createElement("div",null,t)})),l.a.createElement(r.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:l.a.createElement(r.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:l.a.createElement(r.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:l.a.createElement(r.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?l.a.createElement(r.RangeControl,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:g,onChange:function(e){return c({heightMob:e})},min:0,max:1e3,allowReset:!0}):"tablet"===e.name?l.a.createElement(r.RangeControl,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:m,onChange:function(e){return c({heightTablet:e})},min:0,max:1e3,allowReset:!0}):l.a.createElement(r.RangeControl,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:b,onChange:function(e){return c({height:e})},min:0,max:1e3,allowReset:!0}),l.a.createElement("div",null,t)})),l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:h}}))),l.a.createElement(i.ColorPalette,{value:h,onChange:function(e){return c({backgroundColor:e})},allowReset:!0}),l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Background Hover Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:O}}))),l.a.createElement(i.ColorPalette,{value:O,onChange:function(e){return c({backgroundHColor:e})},allowReset:!0})),R=function(e){e&&e.url?(c({jsonLottie:e}),c({lottieURl:e.url})):c({jsonLottie:null})},N="invalid";if(C&&C.endsWith(".json")&&(N="valid"),!uagb_blocks_info.uagb_mime_type)return l.a.createElement("div",{className:"uagb-show-notice"},l.a.createElement("span",null,Object(o.__)("Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer","ultimate-addons-for-gutenberg"),l.a.createElement("a",{href:"".concat(uagb_blocks_info.uagb_site_url,"/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin"),target:"__blank"}," ",Object(o.__)("this document")," "),Object(o.__)("to know more about it.")));if("invalid"===N){var T=l.a.createElement("span",null," ",Object(o.__)("Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations","ultimate-addons-for-gutenberg"),l.a.createElement("a",{href:"https://lottiefiles.com/",target:"__blank"}," ",Object(o.__)("here on this")," "),Object(o.__)("website."));return l.a.createElement("div",{className:"uagb-lottie_upload_wrap"},l.a.createElement(i.MediaPlaceholder,{labels:{title:Object(o.__)("Lottie","ultimate-addons-for-gutenberg"),instructions:T},allowedTypes:["application/json"],accept:["application/json"],value:w,onSelectURL:function(e){return c({lottieURl:e})},onSelect:R}))}return l.a.createElement(l.a.Fragment,null,"valid"===N&&l.a.createElement(i.BlockControls,null,l.a.createElement(r.ToolbarGroup,null,l.a.createElement(i.MediaReplaceFlow,{mediaURL:C,allowedTypes:["application/json"],accept:["application/json"],onSelectURL:function(e){return c({lottieURl:e})},onSelect:R}))),l.a.createElement(i.InspectorControls,null,k,y))};t.default=l.a.memo(s)}}]);