(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{434:function(e,t,a){"use strict";a.r(t);var l=a(57),n=a(126),o=a.n(n),c=a(12),r=a(2),u=a(4),b=a(5),s=Object.keys(l);t.default=React.memo((function(e){var t,a,l=e=e.parentProps,n=l.attributes,g=l.setAttributes,i=n.type,m=n.image_icon,d=n.icon,_=n.image,f=n.icon_color,p=n.icon_hover_color,R=n.icon_bg_color,v=n.icon_bg_hover_color;return React.createElement(u.InspectorControls,null,React.createElement(b.PanelBody,{title:Object(r.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},React.createElement(b.SelectControl,{label:Object(r.__)("Type"),value:i,options:[{value:"facebook",label:Object(r.__)("Facebook","ultimate-addons-for-gutenberg")},{value:"twitter",label:Object(r.__)("Twitter","ultimate-addons-for-gutenberg")},{value:"google",label:Object(r.__)("Google Currents","ultimate-addons-for-gutenberg")},{value:"pinterest",label:Object(r.__)("Pinterest","ultimate-addons-for-gutenberg")},{value:"linkedin",label:Object(r.__)("LinkedIn","ultimate-addons-for-gutenberg")},{value:"digg",label:Object(r.__)("Digg","ultimate-addons-for-gutenberg")},{value:"blogger",label:Object(r.__)("Blogger","ultimate-addons-for-gutenberg")},{value:"reddit",label:Object(r.__)("Reddit","ultimate-addons-for-gutenberg")},{value:"stumbleupon",label:Object(r.__)("StumbleUpon","ultimate-addons-for-gutenberg")},{value:"tumblr",label:Object(r.__)("Tumblr","ultimate-addons-for-gutenberg")},{value:"myspace",label:Object(r.__)("Myspace","ultimate-addons-for-gutenberg")},{value:"email",label:Object(r.__)("Email","ultimate-addons-for-gutenberg")},{value:"pocket",label:Object(r.__)("Pocket","ultimate-addons-for-gutenberg")},{value:"vk",label:Object(r.__)("VK","ultimate-addons-for-gutenberg")},{value:"odnoklassniki",label:Object(r.__)("Odnoklassniki","ultimate-addons-for-gutenberg")},{value:"skype",label:Object(r.__)("Skype","ultimate-addons-for-gutenberg")},{value:"telegram",label:Object(r.__)("Telegram","ultimate-addons-for-gutenberg")},{value:"whatsapp",label:Object(r.__)("WhatsApp","ultimate-addons-for-gutenberg")},{value:"xing",label:Object(r.__)("Xing","ultimate-addons-for-gutenberg")},{value:"buffer",label:Object(r.__)("Buffer","ultimate-addons-for-gutenberg")}],onChange:function(t){var a=e.setAttributes;a({type:t}),a({icon:{facebook:"fab fa-facebook",twitter:"fab fa-twitter-square",google:"fab fa-google-plus-square",pinterest:"fab fa-pinterest-square",linkedin:"fab fa-linkedin",digg:"fab fa-digg",blogger:"fab fa-blogger",reddit:"fab fa-reddit-square",stumbleupon:"fab fa-stumbleupon-circle",tumblr:"fab fa-tumblr-square",myspace:"fas fa-user-friends",email:"fas fa-envelope",pocket:"fab fa-get-pocket",vk:"fab fa-vk",odnoklassniki:"fab fa-odnoklassniki",skype:"fab fa-skype",telegram:"fab fa-telegram",whatsapp:"fab fa-whatsapp",xing:"fab fa-xing",buffer:"fab fa-buffer"}[t]})}}),React.createElement(b.SelectControl,{label:Object(r.__)("Image / Icon","ultimate-addons-for-gutenberg"),value:m,options:[{value:"icon",label:Object(r.__)("Icon","ultimate-addons-for-gutenberg")},{value:"image",label:Object(r.__)("Image","ultimate-addons-for-gutenberg")}],onChange:function(e){return g({image_icon:e})}}),"icon"==m&&React.createElement(React.Fragment,null,React.createElement("p",{className:"components-base-control__label"},Object(r.__)("Icon","ultimate-addons-for-gutenberg")),React.createElement(o.a,{icons:s,renderFunc:c.a,theme:"default",value:d,onChange:function(e){return g({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(r.__)("Select Icon","ultimate-addons-for-gutenberg")})),"image"==m&&React.createElement(React.Fragment,null,React.createElement(u.MediaUpload,{title:Object(r.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(e){return g({image:e})},allowedTypes:["image"],value:_,render:function(e){var t=e.open;return React.createElement(b.Button,{isSecondary:!0,onClick:t},_?Object(r.__)("Replace image","ultimate-addons-for-gutenberg"):Object(r.__)("Select Image","ultimate-addons-for-gutenberg"))}}),_&&React.createElement(b.Button,{className:"uagb-rm-btn",onClick:function(){return g({image:null})},isLink:!0,isDestructive:!0},Object(r.__)("Remove Image","ultimate-addons-for-gutenberg")))),(t="",a="","image"==m?(t=React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Image Background Color","ultimate-addons-for-gutenberg"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:R}}))),React.createElement(u.ColorPalette,{value:R,onChange:function(e){return g({icon_bg_color:e})},allowReset:!0})),a=React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Image Background Hover Color","ultimate-addons-for-gutenberg"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:v}}))),React.createElement(u.ColorPalette,{value:v,onChange:function(e){return g({icon_bg_hover_color:e})},allowReset:!0}))):(t=React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Color"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:f}}))),React.createElement(u.ColorPalette,{value:f,onChange:function(e){return g({icon_color:e})},allowReset:!0}),React.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Background Color","ultimate-addons-for-gutenberg"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:R}}))),React.createElement(u.ColorPalette,{value:R,onChange:function(e){return g({icon_bg_color:e})},allowReset:!0})),a=React.createElement(React.Fragment,null,React.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Hover Color","ultimate-addons-for-gutenberg"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:p}}))),React.createElement(u.ColorPalette,{value:p,onChange:function(e){return g({icon_hover_color:e})},allowReset:!0}),React.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Background Hover Color","ultimate-addons-for-gutenberg"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:v}}))),React.createElement(u.ColorPalette,{value:v,onChange:function(e){return g({icon_bg_hover_color:e})},allowReset:!0}))),React.createElement(b.PanelBody,{title:Object(r.__)("Icon Color","ultimate-addons-for-gutenberg")},React.createElement(b.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-hover-tab"}]},(function(e){var l;return l="normal"===e.name?t:a,React.createElement("div",null,l)})))))}))}}]);