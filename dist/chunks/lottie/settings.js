(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[68],{518:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(2),i=wp.blockEditor,r=i.InspectorControls,s=i.ColorPalette,c=i.MediaPlaceholder,u=i.BlockControls,b=i.MediaReplaceFlow,m=wp.components,g=m.PanelBody,d=m.RangeControl,_=m.ToggleControl,p=m.TabPanel,h=m.Dashicon,f=m.SelectControl,v=m.ToolbarGroup,E=function(e){var t=e,a=t.loopLottie,n=t.reverseDirection,i=e=e.parentProps,m=i.setAttributes,E=i.attributes,w=E.height,j=E.heightTablet,O=E.heightMob,k=E.width,C=E.widthTablet,y=E.widthMob,R=E.backgroundColor,N=E.loop,L=E.speed,T=E.reverse,S=E.jsonLottie,x=E.lottieURl,H=E.playOn,P=E.backgroundHColor,U=l.a.createElement(g,{title:Object(o.__)("Controls","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(f,{label:Object(o.__)("Play On","ultimate-addons-for-gutenberg"),value:H,onChange:function(e){return m({playOn:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(o.__)("On Hover","ultimate-addons-for-gutenberg")},{value:"click",label:Object(o.__)("On Click","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Viewport","ultimate-addons-for-gutenberg")}],help:"scroll"===H?Object(o.__)("This setting will only take effect once you are on the live page, and not while you're editing.","ultimate-addons-for-gutenberg"):""}),l.a.createElement(_,{label:Object(o.__)("Loop","ultimate-addons-for-gutenberg"),checked:N,onChange:a,help:Object(o.__)("Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.")}),l.a.createElement(d,{label:Object(o.__)("Speed","ultimate-addons-for-gutenberg"),value:L,onChange:function(e){return m({speed:e})},min:1,max:50,allowReset:!0}),N&&l.a.createElement(_,{label:Object(o.__)("Reverse","ultimate-addons-for-gutenberg"),checked:T,onChange:n,help:Object(o.__)("Direction of animation.","ultimate-addons-for-gutenberg")})),M=l.a.createElement(g,{title:Object(o.__)("Style","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(p,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:l.a.createElement(h,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:l.a.createElement(h,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:l.a.createElement(h,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?l.a.createElement(d,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:y,onChange:function(e){return m({widthMob:e})},min:0,max:1e3,allowReset:!0}):"tablet"===e.name?l.a.createElement(d,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:C,onChange:function(e){return m({widthTablet:e})},min:0,max:1e3,allowReset:!0}):l.a.createElement(d,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return m({width:e})},min:0,max:1e3,allowReset:!0}),l.a.createElement("div",null,t)})),l.a.createElement(p,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:l.a.createElement(h,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:l.a.createElement(h,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:l.a.createElement(h,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?l.a.createElement(d,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){return m({heightMob:e})},min:0,max:1e3,allowReset:!0}):"tablet"===e.name?l.a.createElement(d,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:j,onChange:function(e){return m({heightTablet:e})},min:0,max:1e3,allowReset:!0}):l.a.createElement(d,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:w,onChange:function(e){return m({height:e})},min:0,max:1e3,allowReset:!0}),l.a.createElement("div",null,t)})),l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:R}}))),l.a.createElement(s,{value:R,onChange:function(e){return m({backgroundColor:e})},allowReset:!0}),l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Background Hover Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:P}}))),l.a.createElement(s,{value:P,onChange:function(e){return m({backgroundHColor:e})},allowReset:!0})),z=function(t){var a=e.setAttributes;t&&t.url?(a({jsonLottie:t}),a({lottieURl:t.url})):a({jsonLottie:null})},B="invalid";if(x&&x.endsWith(".json")&&(B="valid"),!uagb_blocks_info.uagb_mime_type)return l.a.createElement("div",{className:"uagb-show-notice"},l.a.createElement("span",null,Object(o.__)("Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer","ultimate-addons-for-gutenberg"),l.a.createElement("a",{href:"".concat(uagb_blocks_info.uagb_site_url,"/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin"),target:"__blank"}," ",Object(o.__)("this document")," "),Object(o.__)("to know more about it.")));if("invalid"===B){var W=l.a.createElement("span",null," ",Object(o.__)("Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations","ultimate-addons-for-gutenberg"),l.a.createElement("a",{href:"https://lottiefiles.com/",target:"__blank"}," ",Object(o.__)("here on this")," "),Object(o.__)("website."));return l.a.createElement("div",{className:"uagb-lottie_upload_wrap"},l.a.createElement(c,{labels:{title:Object(o.__)("Lottie","ultimate-addons-for-gutenberg"),instructions:W},allowedTypes:["application/json"],accept:["application/json"],value:S,onSelectURL:function(e){return m({lottieURl:e})},onSelect:z}))}return l.a.createElement(l.a.Fragment,null,"valid"===B&&l.a.createElement(u,null,l.a.createElement(v,null,l.a.createElement(b,{mediaURL:x,allowedTypes:["application/json"],accept:["application/json"],onSelectURL:function(e){return m({lottieURl:e})},onSelect:z}))),l.a.createElement(r,null,U,M))};t.default=l.a.memo(E)}}]);