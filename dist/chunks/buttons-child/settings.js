(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[4],{232:function(n,e,t){"use strict";var o=t(12),i=t.n(o)()((function(n){return n[1]}));i.push([n.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),e.a=i},233:function(n,e,t){"use strict";var o,i=t(80),r=t.n(i),a=t(0),l=t.n(a),d=t(11),p=t.n(d),b=t(232),s=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=b.a.locals||{},c.use=function(){return s++||(o=p()(b.a,f)),c},c.unuse=function(){s>0&&!--s&&(o(),o=null)};var u=c,g=t(9),_=t(1);e.a=function(n){return Object(a.useLayoutEffect)((function(){return u.use(),function(){u.unuse()}}),[]),l.a.createElement("div",{className:"components-base-control uag-icon-picker"},l.a.createElement("span",{className:"uag-control-label"},(null==n?void 0:n.label)||Object(_.__)("Icon","ultimate-addons-for-gutenberg")),l.a.createElement(r.a,{icons:(null==n?void 0:n.icons)||wp.UAGBSvgIcons,renderFunc:g.a,theme:"default",value:n.value,onChange:n.onChange,isMulti:n.isMulti||!1,noSelectedPlaceholder:n.noSelectedPlaceholder||Object(_.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},372:function(n,e,t){"use strict";t.r(e);var o=t(233),i=t(1),r=t(10),a=t(0),l=t.n(a),d=t(15),p=t(79),b=t(78),s=t(76),f=t(30),c=t(77),u=t(14),g=t(43),_=t(39),m=t(3),x=t(4);function h(){return(h=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}var w=function(n){var e=n.state,t=n.setStateValue,w=n=n.parentProps,v=w.attributes,y=w.setAttributes,k=(w.deviceType,v.link),T=v.size,j=v.topPadding,P=v.rightPadding,O=v.bottomPadding,E=v.leftPadding,C=v.topMobilePadding,z=v.rightMobilePadding,S=v.bottomMobilePadding,B=v.leftMobilePadding,M=v.topTabletPadding,H=v.rightTabletPadding,I=v.bottomTabletPadding,U=v.leftTabletPadding,F=v.paddingUnit,A=v.mobilePaddingUnit,N=v.tabletPaddingUnit,L=v.paddingLink,R=v.borderWidth,V=v.borderRadius,W=v.borderStyle,G=v.borderColor,J=v.borderHColor,D=v.color,q=v.background,K=v.hColor,Q=v.hBackground,X=v.sizeType,Y=v.sizeMobile,Z=v.sizeTablet,$=v.lineHeight,nn=v.lineHeightType,en=v.lineHeightMobile,tn=v.lineHeightTablet,on=v.opensInNewTab,rn=v.inheritFromTheme,an=v.icon,ln=v.iconPosition,dn=v.iconSpace,pn=v.target;return l.a.createElement(a.Suspense,{fallback:Object(r.a)()},l.a.createElement(m.BlockControls,null,l.a.createElement(x.ToolbarGroup,null,l.a.createElement(x.ToolbarButton,{icon:"admin-links",name:"link",title:Object(i.__)("Link"),onClick:function(){"_self"===pn?y({opensInNewTab:!1}):"_blank"===pn&&y({opensInNewTab:!0}),t({isURLPickerOpen:!0})}}))),e.isURLPickerOpen?l.a.createElement(x.Popover,{position:"bottom center",onClose:function(){return t({isURLPickerOpen:!1})}},l.a.createElement(m.__experimentalLinkControl,{value:{url:k,opensInNewTab:on},onChange:function(e){var t=e.url,o=void 0===t?"":t,i=e.opensInNewTab;y({link:o}),y({opensInNewTab:i}),!0===i?n.setAttributes({target:"_blank"}):n.setAttributes({target:"_self"})}})):"",l.a.createElement(m.InspectorControls,null,l.a.createElement(s.a,null,l.a.createElement(f.b,f.a.general,l.a.createElement(x.PanelBody,{title:Object(i.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(x.ToggleControl,{label:Object(i.__)("Inherit from Theme","ultimate-addons-for-gutenberg"),checked:rn,onChange:function(){return y({inheritFromTheme:!rn})}}),l.a.createElement(o.a,{label:Object(i.__)("Icon","ultimate-addons-for-gutenberg"),value:an,onChange:function(n){return y({icon:n})}}),""!==an&&l.a.createElement(l.a.Fragment,null,l.a.createElement(_.a,{setAttributes:y,label:Object(i.__)("Icon Position","ultimate-addons-for-gutenberg"),data:{value:ln,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"before",label:"Before Text",tooltip:Object(i.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:"After Text",tooltip:Object(i.__)("After Text","ultimate-addons-for-gutenberg")}],showIcons:!1}),l.a.createElement(u.a,{label:Object(i.__)("Icon Spacing","ultimate-addons-for-gutenberg"),setAttributes:y,value:dn,onChange:function(n){return y({iconSpace:n})},min:0,max:50,displayUnit:!1})))),l.a.createElement(f.b,f.a.style,!rn&&l.a.createElement(x.PanelBody,{title:Object(i.__)("Text","ultimate-addons-for-gutenberg"),initialOpen:!0},!rn&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{tabs:[{name:"normal",title:Object(i.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(i.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{label:Object(i.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:D||"",onColorChange:function(n){return y({color:n})}}),l.a.createElement(d.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:q||"",onColorChange:function(n){return y({background:n})}})),hover:l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{label:Object(i.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:K||"",onColorChange:function(n){return y({hColor:n})}}),l.a.createElement(d.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Q||"",onColorChange:function(n){return y({hBackground:n})}}))}),l.a.createElement(c.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:v,setAttributes:y,disableFontFamily:!0,disableFontWeight:!0,disableFontSubset:!0,fontSizeType:{value:X,label:"sizeType"},fontSize:{value:T,label:"size"},fontSizeMobile:{value:Y,label:"sizeMobile"},fontSizeTablet:{value:Z,label:"sizeTablet"},lineHeightType:{value:nn,label:"lineHeightType"},lineHeight:{value:$,label:"lineHeight"},lineHeightMobile:{value:en,label:"lineHeightMobile"},lineHeightTablet:{value:tn,label:"lineHeightTablet"}}))),""!==an&&rn&&l.a.createElement(x.PanelBody,{title:Object(i.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(u.a,{label:Object(i.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:y,value:T,onChange:function(n){return y({size:n})},min:0,max:50,unit:{value:X,label:"sizeType"}})),!rn&&l.a.createElement(x.PanelBody,{title:Object(i.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(p.a,{setAttributes:y,borderStyle:{value:W,label:"borderStyle",title:Object(i.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:R,label:"borderWidth",title:Object(i.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:V,label:"borderRadius",title:Object(i.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:G,label:"borderColor",title:Object(i.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:J,label:"borderHColor",title:Object(i.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),!rn&&l.a.createElement(x.PanelBody,{title:Object(i.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(b.a,h({},n,{label:Object(i.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:j,label:"topPadding"},valueRight:{value:P,label:"rightPadding"},valueBottom:{value:O,label:"bottomPadding"},valueLeft:{value:E,label:"leftPadding"},valueTopTablet:{value:M,label:"topTabletPadding"},valueRightTablet:{value:H,label:"rightTabletPadding"},valueBottomTablet:{value:I,label:"bottomTabletPadding"},valueLeftTablet:{value:U,label:"leftTabletPadding"},valueTopMobile:{value:C,label:"topMobilePadding"},valueRightMobile:{value:z,label:"rightMobilePadding"},valueBottomMobile:{value:S,label:"bottomMobilePadding"},valueLeftMobile:{value:B,label:"leftMobilePadding"},unit:{value:F,label:"paddingUnit"},mUnit:{value:A,label:"mobilePaddingUnit"},tUnit:{value:N,label:"tabletPaddingUnit"},attributes:v,setAttributes:y,link:{value:L,label:"paddingLink"}}))),""==an&&rn&&l.a.createElement("p",{className:"uagb-settings-notice"},Object(i.__)("There is no style available for the inheritFromTheme option.","ultimate-addons-for-gutenberg"))),l.a.createElement(f.b,f.a.advance))))};e.default=l.a.memo(w)}}]);