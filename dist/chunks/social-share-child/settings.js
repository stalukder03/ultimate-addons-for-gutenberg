(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[96],{200:function(n,e,t){"use strict";var o,r=t(1),a=t(6),i=t(4),l=t(0),d=t.n(l),p=t(14),c=t.n(p),s=t(201),f=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},u={};u.locals=s.a.locals||{},u.use=function(){return f++||(o=c()(s.a,b)),u},u.unuse=function(){f>0&&!--f&&(o(),o=null)};var g=u;e.a=n=>{Object(l.useLayoutEffect)(()=>(g.use(),()=>{g.unuse()}),[]);const{onSelectImage:e,backgroundImage:t,onRemoveImage:o,showVideoInput:p,label:c}=n;let s=Object(r.__)("Image","ultimate-addons-for-gutenberg"),f=Object(r.__)("Select Image","ultimate-addons-for-gutenberg"),b=Object(r.__)("Replace Image","ultimate-addons-for-gutenberg"),u=Object(r.__)("Remove Image","ultimate-addons-for-gutenberg"),_=["image"];return p&&(s=Object(r.__)("Video","ultimate-addons-for-gutenberg"),f=Object(r.__)("Select Video","ultimate-addons-for-gutenberg"),b=Object(r.__)("Replace Video","ultimate-addons-for-gutenberg"),u=Object(r.__)("Remove Video","ultimate-addons-for-gutenberg"),_=["video"]),s=c||s,d.a.createElement(a.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+c,label:s},d.a.createElement("div",{className:"uagb-bg-image"},d.a.createElement(i.MediaUpload,{title:f,onSelect:e,allowedTypes:_,value:t,render:({open:n})=>d.a.createElement(a.Button,{isSecondary:!0,onClick:n},null!=t&&t.url?b:f)}),(null==t?void 0:t.url)&&d.a.createElement(a.Button,{className:"uagb-rm-btn",onClick:o,isLink:!0,isDestructive:!0},u),n.help&&d.a.createElement("p",{className:"uag-control-help-notice"},n.help)))}},201:function(n,e,t){"use strict";var o=t(15),r=t.n(o)()((function(n){return n[1]}));r.push([n.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),e.a=r},202:function(n,e,t){"use strict";var o=t(15),r=t.n(o)()((function(n){return n[1]}));r.push([n.i,'/*#######################################################################################*/\n/**\n * google-material-color v1.2.6\n * https://github.com/danlevan/google-material-color\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),e.a=r},203:function(n,e,t){"use strict";var o,r=t(205),a=t.n(r),i=t(0),l=t.n(i),d=t(14),p=t.n(d),c=t(202),s=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=c.a.locals||{},b.use=function(){return s++||(o=p()(c.a,f)),b},b.unuse=function(){s>0&&!--s&&(o(),o=null)};var u=b,g=t(11),_=t(1);e.a=n=>(Object(i.useLayoutEffect)(()=>(u.use(),()=>{u.unuse()}),[]),l.a.createElement("div",{className:"components-base-control uag-icon-picker"},l.a.createElement("span",{className:"uag-control-label"},(null==n?void 0:n.label)||Object(_.__)("Icon","ultimate-addons-for-gutenberg")),l.a.createElement(a.a,{icons:(null==n?void 0:n.icons)||wp.UAGBSvgIcons,renderFunc:g.a,theme:"default",value:n.value,onChange:n.onChange,isMulti:n.isMulti||!1,noSelectedPlaceholder:n.noSelectedPlaceholder||Object(_.__)("Select Icon","ultimate-addons-for-gutenberg")}),n.help&&l.a.createElement("p",{className:"uag-control-help-notice"},n.help)))},471:function(n,e,t){"use strict";t.r(e);var o=t(203),r=t(1),a=t(0),i=t.n(a),l=t(4),d=t(6),p=t(17),c=t(78),s=t(23),f=t(19),b=t(51),u=t(200),g=t(16);function _(){return(_=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}const m=n=>{n=n.parentProps;const{attributes:e,setAttributes:t}=n,{type:a,image_icon:m,icon:x,image:h,icon_color:w,icon_hover_color:v,icon_bg_color:y,icon_bg_hover_color:k}=e;return i.a.createElement(l.InspectorControls,null,i.a.createElement(c.a,null,i.a.createElement(s.b,s.a.general,i.a.createElement(g.a,{initialOpen:!0},i.a.createElement(d.SelectControl,{label:Object(r.__)("Type"),value:a,options:[{value:"facebook",label:Object(r.__)("Facebook","ultimate-addons-for-gutenberg")},{value:"twitter",label:Object(r.__)("Twitter","ultimate-addons-for-gutenberg")},{value:"google",label:Object(r.__)("Google Currents","ultimate-addons-for-gutenberg")},{value:"pinterest",label:Object(r.__)("Pinterest","ultimate-addons-for-gutenberg")},{value:"linkedin",label:Object(r.__)("LinkedIn","ultimate-addons-for-gutenberg")},{value:"digg",label:Object(r.__)("Digg","ultimate-addons-for-gutenberg")},{value:"blogger",label:Object(r.__)("Blogger","ultimate-addons-for-gutenberg")},{value:"reddit",label:Object(r.__)("Reddit","ultimate-addons-for-gutenberg")},{value:"stumbleupon",label:Object(r.__)("StumbleUpon","ultimate-addons-for-gutenberg")},{value:"tumblr",label:Object(r.__)("Tumblr","ultimate-addons-for-gutenberg")},{value:"myspace",label:Object(r.__)("Myspace","ultimate-addons-for-gutenberg")},{value:"email",label:Object(r.__)("Email","ultimate-addons-for-gutenberg")},{value:"pocket",label:Object(r.__)("Pocket","ultimate-addons-for-gutenberg")},{value:"vk",label:Object(r.__)("VK","ultimate-addons-for-gutenberg")},{value:"odnoklassniki",label:Object(r.__)("Odnoklassniki","ultimate-addons-for-gutenberg")},{value:"skype",label:Object(r.__)("Skype","ultimate-addons-for-gutenberg")},{value:"telegram",label:Object(r.__)("Telegram","ultimate-addons-for-gutenberg")},{value:"whatsapp",label:Object(r.__)("WhatsApp","ultimate-addons-for-gutenberg")},{value:"xing",label:Object(r.__)("Xing","ultimate-addons-for-gutenberg")},{value:"buffer",label:Object(r.__)("Buffer","ultimate-addons-for-gutenberg")}],onChange:n=>{t({type:n}),t({icon:{facebook:"fab fa-facebook",twitter:"fab fa-twitter-square",google:"fab fa-google-plus-square",pinterest:"fab fa-pinterest-square",linkedin:"fab fa-linkedin",digg:"fab fa-digg",blogger:"fab fa-blogger",reddit:"fab fa-reddit-square",stumbleupon:"fab fa-stumbleupon-circle",tumblr:"fab fa-tumblr-square",myspace:"fas fa-user-friends",email:"fas fa-envelope",pocket:"fab fa-get-pocket",vk:"fab fa-vk",odnoklassniki:"fab fa-odnoklassniki",skype:"fab fa-skype",telegram:"fab fa-telegram",whatsapp:"fab fa-whatsapp",xing:"fab fa-xing",buffer:"fab fa-buffer"}[n]})}}),i.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Image / Icon","ultimate-addons-for-gutenberg"),data:{value:m,label:"image_icon"},className:"uagb-multi-button-alignment-control",options:[{value:"icon",label:Object(r.__)("Icon","ultimate-addons-for-gutenberg"),tooltip:Object(r.__)("Icon","ultimate-addons-for-gutenberg")},{value:"image",label:Object(r.__)("Image","ultimate-addons-for-gutenberg"),tooltip:Object(r.__)("Image","ultimate-addons-for-gutenberg")}],showIcons:!1}),"icon"===m&&i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{label:Object(r.__)("Icon","ultimate-addons-for-gutenberg"),value:x,onChange:n=>t({icon:n})})),"image"===m&&i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{onSelectImage:n=>{n&&n.url&&n.type&&"image"===n.type?t({image:n}):t({image:null})},backgroundImage:h,onRemoveImage:()=>{t({image:""})}})))),i.a.createElement(s.b,s.a.style,(()=>{let n="",e="";return"image"===m?(n=i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{label:Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:y||"",onColorChange:n=>t({icon_bg_color:n})})),e=i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{label:Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:n=>t({icon_bg_hover_color:n})}))):(n=i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{label:Object(r.__)("Color","ultimate-addons-for-gutenberg"),colorValue:w||"",onColorChange:n=>t({icon_color:n})}),i.a.createElement(p.a,{label:Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:y||"",onColorChange:n=>t({icon_bg_color:n})})),e=i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{label:Object(r.__)("Color","ultimate-addons-for-gutenberg"),colorValue:v||"",onColorChange:n=>t({icon_hover_color:n})}),i.a.createElement(p.a,{label:Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:n=>t({icon_bg_hover_color:n})}))),i.a.createElement(g.a,{title:Object(r.__)("Icon Color","ultimate-addons-for-gutenberg")},i.a.createElement(b.a,{tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg")}],normal:n,hover:e,disableBottomSeparator:!0}))})()),i.a.createElement(s.b,_({},s.a.advance,{parentProps:n}))))};e.default=i.a.memo(m)}}]);