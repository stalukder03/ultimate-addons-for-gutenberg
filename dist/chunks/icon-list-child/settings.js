(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[20],{222:function(n,e,o){"use strict";var t=o(11),r=o.n(t)()((function(n){return n[1]}));r.push([n.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),e.a=r},223:function(n,e,o){"use strict";var t,r=o(72),i=o.n(r),a=o(0),l=o.n(a),d=o(10),p=o.n(d),c=o(222),f=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=c.a.locals||{},b.use=function(){return f++||(t=p()(c.a,s)),b},b.unuse=function(){f>0&&!--f&&(t(),t=null)};var u=b,g=o(8),_=o(1);e.a=function(n){return Object(a.useLayoutEffect)((function(){return u.use(),function(){u.unuse()}}),[]),l.a.createElement("div",{className:"components-base-control uag-icon-picker"},l.a.createElement("span",{className:"uag-control-label"},(null==n?void 0:n.label)||Object(_.__)("Icon","ultimate-addons-for-gutenberg")),l.a.createElement(i.a,{icons:(null==n?void 0:n.icons)||wp.UAGBSvgIcons,renderFunc:g.a,theme:"default",value:n.value,onChange:n.onChange,isMulti:n.isMulti||!1,noSelectedPlaceholder:n.noSelectedPlaceholder||Object(_.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},350:function(n,e,o){"use strict";o.r(e);var t=o(223),r=o(0),i=o.n(r),a=o(1),l=o(3),d=o(69),p=o(27),c=o(14),f=o(32),s=o(36),b=o(45),u=o(4),g=function(n){var e=n.hideLabel,o=n=n.parentProps,r=o.attributes,g=o.setAttributes,_=r.image_icon,m=r.icon,x=r.image,h=r.icon_color,w=r.label_color,v=r.icon_hover_color,y=r.label_hover_color,j=r.icon_bg_color,k=r.icon_bg_hover_color,O=r.icon_border_color,E=r.icon_border_hover_color,C=r.link,S=r.target,z=r.disableLink;return i.a.createElement(l.InspectorControls,null,i.a.createElement(d.a,null,i.a.createElement(p.b,p.a.general,i.a.createElement(u.PanelBody,{initialOpen:!0},i.a.createElement(f.a,{setAttributes:g,label:Object(a.__)("Type","ultimate-addons-for-gutenberg"),data:{value:_,label:"image_icon"},className:"uagb-multi-button-alignment-control",options:[{value:"icon",label:"Icon",tooltip:Object(a.__)("Icon","ultimate-addons-for-gutenberg")},{value:"image",label:"Image",tooltip:Object(a.__)("Image","ultimate-addons-for-gutenberg")}],showIcons:!1}),"icon"==_&&i.a.createElement(i.a.Fragment,null,i.a.createElement(t.a,{label:Object(a.__)("Icon","ultimate-addons-for-gutenberg"),value:m,onChange:function(n){return g({icon:n})}})),"image"==_&&i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{onSelectImage:function(n){n&&n.url&&n.type&&"image"===n.type?g({image:n}):g({image:null})},backgroundImage:x,onRemoveImage:function(){g({image:""})}})),i.a.createElement("h2",null,Object(a.__)("List Item Link","ultimate-addons-for-gutenberg")),i.a.createElement(u.ToggleControl,{label:Object(a.__)("Disable Link","ultimate-addons-for-gutenberg"),checked:z,onChange:function(){return g({disableLink:!z})}}),!z&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"components-base-control__label"},Object(a.__)("URL","ultimate-addons-for-gutenberg")),i.a.createElement(u.TextControl,{value:C,onChange:function(n){return g({link:n})},placeholder:Object(a.__)("Enter URL","ultimate-addons-for-gutenberg")}),i.a.createElement(u.ToggleControl,{label:Object(a.__)("Open in New Tab","ultimate-addons-for-gutenberg"),checked:S,onChange:function(){return g({target:!S})}})))),i.a.createElement(p.b,p.a.style,!e&&i.a.createElement(u.PanelBody,{title:Object(a.__)("Text","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(s.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:i.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:w||"",onColorChange:function(n){return g({label_color:n})}}),hover:i.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:y||"",onColorChange:function(n){return g({label_hover_color:n})}}),disableBottomSeparator:!0})),"icon"==_&&""!==m&&i.a.createElement(u.PanelBody,{title:Object(a.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(s.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:i.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:h||"",onColorChange:function(n){return g({icon_color:n})}}),hover:i.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:v||"",onColorChange:function(n){return g({icon_hover_color:n})}}),disableBottomSeparator:!0})),i.a.createElement(u.PanelBody,{title:Object(a.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(s.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:i.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:j||"",onColorChange:function(n){return g({icon_bg_color:n})}}),hover:i.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:function(n){return g({icon_bg_hover_color:n})}}),disableBottomSeparator:!0})),i.a.createElement(u.PanelBody,{title:Object(a.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(s.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:i.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:O||"",onColorChange:function(n){return g({icon_border_color:n})}}),hover:i.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:function(n){return g({icon_border_hover_color:n})}}),disableBottomSeparator:!0}))),i.a.createElement(p.b,p.a.advance)))};e.default=i.a.memo(g)}}]);