(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[108],{216:function(e,t,a){"use strict";var l=a(15),n=a.n(l)()((function(e){return e[1]}));n.push([e.i,'/*#######################################################################################*/\n/**\n * google-material-color v1.2.6\n * https://github.com/danlevan/google-material-color\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown .rfipicons__ibox--error {\n    color: #000;\n    text-transform: capitalize;\n    font-size: 14px;\n    font-weight: 500; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=n},217:function(e,t,a){"use strict";var l,n=a(221),i=a.n(n),o=a(0),r=a.n(o),b=a(14),d=a.n(b),u=a(216),s=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=u.a.locals||{},c.use=function(){return s++||(l=d()(u.a,g)),c},c.unuse=function(){s>0&&!--s&&(l(),l=null)};var p=c,f=a(13),v=a(1);t.a=e=>(Object(o.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(v.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(i.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:null==e?void 0:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(v.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help)))},218:function(e,t,a){"use strict";var l,n=a(0),i=a.n(n),o=a(7),r=a(11),b=a(50),d=a(14),u=a.n(d),s=a(220),g=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=s.a.locals||{},p.use=function(){return g++||(l=u()(s.a,c)),p},p.unuse=function(){g>0&&!--g&&(l(),l=null)};var f=p;t.a=e=>{Object(n.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]);const{label:t,data:a,setAttributes:l,options:d}=e,u=Object(r.a)(),s={};return s.Desktop=i.a.createElement(o.SelectControl,{value:a.desktop.value,onChange:e=>l({[a.desktop.label]:e}),options:d.desktop}),s.Tablet=i.a.createElement(o.SelectControl,{value:a.tablet.value,onChange:e=>l({[a.tablet.label]:e}),options:d.tablet||d.desktop}),s.Mobile=i.a.createElement(o.SelectControl,{value:a.mobile.value,onChange:e=>l({[a.mobile.label]:e}),options:d.mobile||d.desktop}),i.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},i.a.createElement("div",{className:"uagb-size-type-field-tabs"},i.a.createElement("div",{className:"uagb-control__header"},i.a.createElement(b.a,{label:t,responsive:!0})),s[u]?s[u]:s.Desktop),e.help&&i.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},220:function(e,t,a){"use strict";var l=a(15),n=a.n(l)()((function(e){return e[1]}));n.push([e.i,".uagb-responsive-select-control .uagb-size-type-field-tabs {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n  .uagb-responsive-select-control .uagb-size-type-field-tabs .uagb-control__header {\n    margin-bottom: 0; }\n",""]),t.a=n},571:function(e,t,a){"use strict";a.r(t);var l=a(217),n=a(13),i=a(39),o=a(218),r=a(21),b=a(17),d=a(38),u=a(75),s=a(27),g=a(79),c=a(31),p=a(60),f=a(24),v=a(0),m=a.n(v),_=a(1),h=a(5),y=a(7),T=a(28);const x=[{defaultAttributes:a(61).a},{value:"preset-1",label:Object(_.__)("Preset 1","ultimate-addons-for-gutenberg"),attributes:[{label:"tabsStyleD",value:"hstyle2"},{label:"tabBodyTopPadding",value:15},{label:"tabBodyRightPadding",value:15},{label:"tabBodyBottomPadding",value:15},{label:"tabBodyLeftPadding",value:0},{label:"tabBorderColor",value:"transparent"},{label:"tabBorderTopLeftRadius",value:0},{label:"tabBorderTopRightRadius",value:0},{label:"tabBorderBottomLeftRadius",value:0},{label:"tabBorderBottomRightRadius",value:0},{label:"tabBorderStyle",value:"solid"}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 138C58 136.343 59.138 135 60.5418 135H266.259C267.663 135 268.801 136.343 268.801 138C268.801 139.657 267.663 141 266.259 141H60.5418C59.138 141 58 139.657 58 138Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 159C58 157.343 59.1317 156 60.5276 156H214.24C215.636 156 216.768 157.343 216.768 159C216.768 160.657 215.636 162 214.24 162H60.5276C59.1317 162 58 160.657 58 159Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 113C58 111.343 59.0884 110 60.4311 110H86.5689C87.9116 110 89 111.343 89 113C89 114.657 87.9116 116 86.5689 116H60.4311C59.0884 116 58 114.657 58 113Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M99 113C99 111.343 100.088 110 101.431 110H127.569C128.912 110 130 111.343 130 113C130 114.657 128.912 116 127.569 116H101.431C100.088 116 99 114.657 99 113Z" fill="#B6B6B6"/> <path d="M140 112.75H151.5" stroke="#B6B6B6" stroke-width="3" fill="none"/> <path d="M145.75 118.5L145.75 107" stroke="#B6B6B6" stroke-width="3" fill="none"/> </svg>'},{value:"preset-2",label:Object(_.__)("Preset 2","ultimate-addons-for-gutenberg"),attributes:[{label:"tabsStyleD",value:"hstyle3"},{label:"titleAlign",value:"left"},{label:"tabBodyTopPadding",value:""},{label:"tabBodyRightPadding",value:""},{label:"tabBodyBottomPadding",value:""},{label:"tabBodyLeftPadding",value:""},{label:"tabBorderColor",value:"#E0E0E0"},{label:"tabBorderTopLeftRadius",value:0},{label:"tabBorderTopRightRadius",value:0},{label:"tabBorderBottomLeftRadius",value:0},{label:"tabBorderBottomRightRadius",value:0},{label:"tabBorderStyle",value:"solid"}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M60 144C60 142.343 61.138 141 62.5418 141H268.259C269.663 141 270.801 142.343 270.801 144C270.801 145.657 269.663 147 268.259 147H62.5418C61.138 147 60 145.657 60 144Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M60 161C60 159.343 61.1317 158 62.5276 158H216.24C217.636 158 218.768 159.343 218.768 161C218.768 162.657 217.636 164 216.24 164H62.5276C61.1317 164 60 162.657 60 161Z" fill="#D2D2D2"/> <path d="M170 112.75H181.5" stroke="#B6B6B6" stroke-width="3" fill="none"/> <path d="M175.75 118.5L175.75 107" stroke="#B6B6B6" stroke-width="3" fill="none"/> <path d="M49.75 122.75H278C279.795 122.75 281.25 124.205 281.25 126V178C281.25 179.795 279.795 181.25 278 181.25H53C51.2051 181.25 49.75 179.795 49.75 178V122.75Z" stroke="#959595" stroke-width="1.5" fill="none"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M98.05 102.5H52C51.1716 102.5 50.5 103.172 50.5 104V122.18H99.55V104C99.55 103.172 98.8784 102.5 98.05 102.5ZM52 101C50.3431 101 49 102.343 49 104V123.5H101.05V104C101.05 102.343 99.7069 101 98.05 101H52Z" fill="#959595"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M159.05 102.5H113C112.172 102.5 111.5 103.172 111.5 104V122.18H160.55V104C160.55 103.172 159.878 102.5 159.05 102.5ZM113 101C111.343 101 110 102.343 110 104V123.5H162.05V104C162.05 102.343 160.707 101 159.05 101H113Z" fill="#959595"/> </svg>'},{value:"preset-3",label:Object(_.__)("Preset 3","ultimate-addons-for-gutenberg"),attributes:[{label:"tabsStyleD",value:"vstyle6"},{label:"titleAlign",value:"center"},{label:"tabBodyTopPadding",value:""},{label:"tabBodyRightPadding",value:""},{label:"tabBodyBottomPadding",value:""},{label:"tabBodyLeftPadding",value:""},{label:"tabBorderColor",value:"#E0E0E0"},{label:"tabBorderTopLeftRadius",value:4},{label:"tabBorderTopRightRadius",value:4},{label:"tabBorderBottomLeftRadius",value:4},{label:"tabBorderBottomRightRadius",value:4},{label:"tabBorderStyle",value:"solid"}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M134 130C134 128.343 135.138 127 136.542 127H252.259C253.663 127 254.801 128.343 254.801 130C254.801 131.657 253.663 133 252.259 133H136.542C135.138 133 134 131.657 134 130Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M134 144C134 142.343 135.132 141 136.528 141H210.24C211.636 141 212.768 142.343 212.768 144C212.768 145.657 211.636 147 210.24 147H136.528C135.132 147 134 145.657 134 144Z" fill="#D2D2D2"/> <rect x="115.75" y="90.75" width="157.5" height="91.5" rx="3.25" stroke="#959595" stroke-width="1.5" fill="none"/> <path d="M52.75 92.7492C52.75 91.6338 53.6369 90.75 54.7059 90.75H101.34C102.409 90.75 103.296 91.6338 103.296 92.7492V109.932C103.296 111.047 102.409 111.931 101.34 111.931H54.7059C53.6369 111.931 52.75 111.047 52.75 109.932V92.7492Z" stroke="#959595" stroke-width="1.5" fill="none"/> <path d="M52.75 120.749C52.75 119.634 53.6369 118.75 54.7059 118.75H101.34C102.409 118.75 103.296 119.634 103.296 120.749V137.932C103.296 139.047 102.409 139.931 101.34 139.931H54.7059C53.6369 139.931 52.75 139.047 52.75 137.932V120.749Z" stroke="#959595" stroke-width="1.5" fill="none"/> <path d="M52.75 148.749C52.75 147.634 53.6369 146.75 54.7059 146.75H101.34C102.409 146.75 103.296 147.634 103.296 148.749V165.932C103.296 167.047 102.409 167.931 101.34 167.931H54.7059C53.6369 167.931 52.75 167.047 52.75 165.932V148.749Z" stroke="#959595" stroke-width="1.5" fill="none"/> </svg>'},{value:"preset-4",label:Object(_.__)("Preset 4","ultimate-addons-for-gutenberg"),attributes:[{label:"tabsStyleD",value:"vstyle8"},{label:"titleAlign",value:"center"},{label:"tabBodyTopPadding",value:""},{label:"tabBodyRightPadding",value:""},{label:"tabBodyBottomPadding",value:""},{label:"tabBodyLeftPadding",value:""},{label:"tabBorderColor",value:"#E0E0E0"},{label:"tabBorderTopLeftRadius",value:0},{label:"tabBorderTopRightRadius",value:0},{label:"tabBorderBottomLeftRadius",value:0},{label:"tabBorderBottomRightRadius",value:0},{label:"tabBorderStyle",value:"solid"}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M134 130C134 128.343 135.138 127 136.542 127H252.259C253.663 127 254.801 128.343 254.801 130C254.801 131.657 253.663 133 252.259 133H136.542C135.138 133 134 131.657 134 130Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M134 144C134 142.343 135.132 141 136.528 141H210.24C211.636 141 212.768 142.343 212.768 144C212.768 145.657 211.636 147 210.24 147H136.528C135.132 147 134 145.657 134 144Z" fill="#D2D2D2"/> <rect x="115.75" y="90.75" width="157.5" height="91.5" rx="3.25" stroke="#959595" stroke-width="1.5" fill="none"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M115.55 98.5H68C67.1716 98.5 66.5 99.1716 66.5 100V116.68C66.5 117.508 67.1716 118.18 68 118.18H115.55V98.5ZM68 97C66.3431 97 65 98.3431 65 100V116.68C65 118.337 66.3431 119.68 68 119.68H116.05V97H68Z" fill="#959595"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M115.55 126.5H68C67.1716 126.5 66.5 127.172 66.5 128V144.68C66.5 145.508 67.1716 146.18 68 146.18H115.55V126.5ZM68 125C66.3431 125 65 126.343 65 128V144.68C65 146.337 66.3431 147.68 68 147.68H116.05V125H68Z" fill="#959595"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M115.55 154.5H68C67.1716 154.5 66.5 155.172 66.5 156V172.68C66.5 173.508 67.1716 174.18 68 174.18H115.55V154.5ZM68 153C66.3431 153 65 154.343 65 156V172.68C65 174.337 66.3431 175.68 68 175.68H116.05V153H68Z" fill="#959595"/> </svg>'}];var B=Object(T.applyFilters)("uag_tabs_presets",x),w=a(76),M=a(18);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const S=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,deviceType:v}=e,{tabsStyleD:T,tabsStyleM:x,tabsStyleT:S,tabActiveFrontend:j,tabHeaders:O,headerBgColor:P,headerTextColor:H,activeTabBgColor:k,activeTabTextColor:L,bodyBgColor:E,bodyTextColor:R,tabTitleLeftMargin:V,tabTitleRightMargin:z,tabTitleTopMargin:A,tabTitleBottomMargin:U,tabTitleLeftMarginTablet:D,tabTitleRightMarginTablet:F,tabTitleTopMarginTablet:Z,tabTitleBottomMarginTablet:I,tabTitleLeftMarginMobile:N,tabTitleRightMarginMobile:G,tabTitleTopMarginMobile:W,tabTitleBottomMarginMobile:J,tabTitleMarginUnit:q,mobiletabTitleMarginUnit:K,tablettabTitleMarginUnit:Q,tabTitleMarginLink:X,tabTitleTopPadding:Y,tabTitleRightPadding:$,tabTitleBottomPadding:ee,tabTitleLeftPadding:te,tabTitleTopPaddingTablet:ae,tabTitleRightPaddingTablet:le,tabTitleBottomPaddingTablet:ne,tabTitleLeftPaddingTablet:ie,tabTitleTopPaddingMobile:oe,tabTitleRightPaddingMobile:re,tabTitleBottomPaddingMobile:be,tabTitleLeftPaddingMobile:de,tabTitlePaddingUnit:ue,mobiletabTitlePaddingUnit:se,tablettabTitlePaddingUnit:ge,tabTitlePaddingLink:ce,tabBodyLeftMargin:pe,tabBodyRightMargin:fe,tabBodyTopMargin:ve,tabBodyBottomMargin:me,tabBodyLeftMarginTablet:_e,tabBodyRightMarginTablet:he,tabBodyTopMarginTablet:ye,tabBodyBottomMarginTablet:Te,tabBodyLeftMarginMobile:xe,tabBodyRightMarginMobile:Be,tabBodyTopMarginMobile:we,tabBodyBottomMarginMobile:Me,tabBodyMarginUnit:Ce,mobiletabBodyMarginUnit:Se,tablettabBodyMarginUnit:je,tabBodyMarginLink:Oe,tabBodyTopPadding:Pe,tabBodyRightPadding:He,tabBodyBottomPadding:ke,tabBodyLeftPadding:Le,tabBodyTopPaddingTablet:Ee,tabBodyRightPaddingTablet:Re,tabBodyBottomPaddingTablet:Ve,tabBodyLeftPaddingTablet:ze,tabBodyTopPaddingMobile:Ae,tabBodyRightPaddingMobile:Ue,tabBodyBottomPaddingMobile:De,tabBodyLeftPaddingMobile:Fe,tabBodyPaddingUnit:Ze,mobiletabBodyPaddingUnit:Ie,tablettabBodyPaddingUnit:Ne,tabBodyPaddingLink:Ge,titleLoadGoogleFonts:We,titleFontFamily:Je,titleFontWeight:qe,titleFontSizeType:Ke,titleFontSize:Qe,titleFontSizeMobile:Xe,titleFontSizeTablet:Ye,titleLineHeightType:$e,titleLineHeight:et,titleLineHeightMobile:tt,titleLineHeightTablet:at,titleLetterSpacing:lt,titleLetterSpacingTablet:nt,titleLetterSpacingMobile:it,titleLetterSpacingType:ot,titleTransform:rt,titleDecoration:bt,titleAlign:dt,tabAlign:ut,showIcon:st,icon:gt,iconColor:ct,iconPosition:pt,iconSpacing:ft,iconSpacingTablet:vt,iconSpacingMobile:mt,iconSize:_t,iconSizeTablet:ht,iconSizeMobile:yt,activeiconColor:Tt,titleFontStyle:xt}=t;return m.a.createElement(h.InspectorControls,null,m.a.createElement(g.a,null,m.a.createElement(c.b,c.a.general,m.a.createElement(M.a,{title:Object(_.__)("Presets","ultimate-addons-for-gutenberg"),initialOpen:!0},m.a.createElement(w.a,{setAttributes:a,presets:B,presetInputType:"radioImage"})),(()=>{const e={desktop:[{value:"hstyle1",label:Object(_.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(_.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(_.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(_.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(_.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(_.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(_.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(_.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(_.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(_.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],tablet:[{value:"hstyle1",label:Object(_.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(_.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(_.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(_.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(_.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(_.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(_.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(_.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(_.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(_.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],mobile:[{value:"hstyle1",label:Object(_.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(_.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(_.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(_.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(_.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(_.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(_.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(_.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(_.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(_.__)("Vertical Style 10","ultimate-addons-for-gutenberg")},{value:"stack1",label:Object(_.__)("Stack Style 11","ultimate-addons-for-gutenberg")},{value:"stack2",label:Object(_.__)("Stack Style 12","ultimate-addons-for-gutenberg")},{value:"stack3",label:Object(_.__)("Stack Style 13","ultimate-addons-for-gutenberg")},{value:"stack4",label:Object(_.__)("Stack Style 14","ultimate-addons-for-gutenberg")}]};return m.a.createElement(M.a,{title:Object(_.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},m.a.createElement(o.a,{label:Object(_.__)("Style","ultimate-addons-for-gutenberg"),data:{desktop:{value:T,label:"tabsStyleD"},tablet:{value:S,label:"tabsStyleT"},mobile:{value:x,label:"tabsStyleM"}},options:e,setAttributes:a}))})(),m.a.createElement(M.a,{title:Object(_.__)("Tabs Title","ultimate-addons-for-gutenberg"),initialOpen:!1},m.a.createElement(s.a,{label:Object(_.__)("Initial Open Tab","ultimate-addons-for-gutenberg"),data:{value:j},onChange:e=>{a({tabActiveFrontend:parseInt(e)})},options:O.map((e,t)=>({value:t,label:e}))}),m.a.createElement(r.a,{setAttributes:a,label:Object(_.__)("Tab Alignment","ultimate-addons-for-gutenberg"),data:{value:ut,label:"tabAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:m.a.createElement(y.Icon,{icon:Object(n.a)("fa fa-align-left")}),tooltip:Object(_.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:m.a.createElement(y.Icon,{icon:Object(n.a)("fa fa-align-center")}),tooltip:Object(_.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:m.a.createElement(y.Icon,{icon:Object(n.a)("fa fa-align-right")}),tooltip:Object(_.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),m.a.createElement(r.a,{setAttributes:a,label:Object(_.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:dt,label:"titleAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:m.a.createElement(y.Icon,{icon:Object(n.a)("fa fa-align-left")}),tooltip:Object(_.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:m.a.createElement(y.Icon,{icon:Object(n.a)("fa fa-align-center")}),tooltip:Object(_.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:m.a.createElement(y.Icon,{icon:Object(n.a)("fa fa-align-right")}),tooltip:Object(_.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),m.a.createElement(y.ToggleControl,{label:Object(_.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:st,onChange:()=>a({showIcon:!st})}),st&&m.a.createElement(m.a.Fragment,null,m.a.createElement(l.a,{label:Object(_.__)("Tab Icon","ultimate-addons-for-gutenberg"),value:gt,onChange:e=>a({icon:e})}),m.a.createElement(r.a,{setAttributes:a,label:Object(_.__)("Icon Position","ultimate-addons-for-gutenberg"),data:{value:pt,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",label:Object(_.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(_.__)("Right","ultimate-addons-for-gutenberg")},{value:"top",label:Object(_.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(_.__)("Bottom","ultimate-addons-for-gutenberg")}]})))),m.a.createElement(c.b,c.a.style,(()=>{const l=m.a.createElement(m.a.Fragment,null,m.a.createElement(b.a,{label:Object(_.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:H,data:{value:H,label:"headerTextColor"},setAttributes:a}),m.a.createElement(b.a,{label:Object(_.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:P,data:{value:P,label:"headerBgColor"},setAttributes:a})),n=m.a.createElement(m.a.Fragment,null,m.a.createElement(b.a,{label:Object(_.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:L,data:{value:L,label:"activeTabTextColor"},setAttributes:a}),m.a.createElement(b.a,{label:Object(_.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:k,data:{value:k,label:"activeTabBgColor"},setAttributes:a}));return m.a.createElement(M.a,{title:Object(_.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},m.a.createElement(p.a,{tabs:[{name:"normal",title:Object(_.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(_.__)("Active","ultimate-addons-for-gutenberg")}],normal:l,active:n}),m.a.createElement(i.a,{label:Object(_.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:We,label:"titleLoadGoogleFonts"},fontFamily:{value:Je,label:"titleFontFamily"},fontWeight:{value:qe,label:"titleFontWeight"},fontStyle:{value:xt,label:"titleFontStyle"},fontSizeType:{value:Ke,label:"titleFontSizeType"},fontSize:{value:Qe,label:"titleFontSize"},fontSizeMobile:{value:Xe,label:"titleFontSizeMobile"},fontSizeTablet:{value:Ye,label:"titleFontSizeTablet"},lineHeightType:{value:$e,label:"titleLineHeightType"},lineHeight:{value:et,label:"titleLineHeight"},lineHeightMobile:{value:tt,label:"titleLineHeightMobile"},lineHeightTablet:{value:at,label:"titleLineHeightTablet"},letterSpacing:{value:lt,label:"titleLetterSpacing"},letterSpacingTablet:{value:nt,label:"titleLetterSpacingTablet"},letterSpacingMobile:{value:it,label:"titleLetterSpacingMobile"},letterSpacingType:{value:ot,label:"titleLetterSpacingType"},transform:{value:rt,label:"titleTransform"},decoration:{value:bt,label:"titleDecoration"}}),m.a.createElement(d.a,C({},e,{label:Object(_.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:A,label:"tabTitleTopMargin"},valueRight:{value:z,label:"tabTitleRightMargin"},valueBottom:{value:U,label:"tabTitleBottomMargin"},valueLeft:{value:V,label:"tabTitleLeftMargin"},valueTopTablet:{value:Z,label:"tabTitleTopMarginTablet"},valueRightTablet:{value:F,label:"tabTitleRightMarginTablet"},valueBottomTablet:{value:I,label:"tabTitleBottomMarginTablet"},valueLeftTablet:{value:D,label:"tabTitleLeftMarginTablet"},valueTopMobile:{value:W,label:"tabTitleTopMarginMobile"},valueRightMobile:{value:G,label:"tabTitleRightMarginMobile"},valueBottomMobile:{value:J,label:"tabTitleBottomMarginMobile"},valueLeftMobile:{value:N,label:"tabTitleLeftMarginMobile"},unit:{value:q,label:"tabTitleMarginUnit"},mUnit:{value:K,label:"mobiletabTitleMarginUnit"},tUnit:{value:Q,label:"tablettabTitleMarginUnit"},attributes:t,setAttributes:a,link:{value:X,label:"tabTitleMarginLink"}})),m.a.createElement(d.a,C({},e,{label:Object(_.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Y,label:"tabTitleTopPadding"},valueRight:{value:$,label:"tabTitleRightPadding"},valueBottom:{value:ee,label:"tabTitleBottomPadding"},valueLeft:{value:te,label:"tabTitleLeftPadding"},valueTopTablet:{value:ae,label:"tabTitleTopPaddingTablet"},valueRightTablet:{value:le,label:"tabTitleRightPaddingTablet"},valueBottomTablet:{value:ne,label:"tabTitleBottomPaddingTablet"},valueLeftTablet:{value:ie,label:"tabTitleLeftPaddingTablet"},valueTopMobile:{value:oe,label:"tabTitleTopPaddingMobile"},valueRightMobile:{value:re,label:"tabTitleRightPaddingMobile"},valueBottomMobile:{value:be,label:"tabTitleBottomPaddingMobile"},valueLeftMobile:{value:de,label:"tabTitleLeftPaddingMobile"},unit:{value:ue,label:"tabTitlePaddingUnit"},mUnit:{value:se,label:"mobiletabTitlePaddingUnit"},tUnit:{value:ge,label:"tablettabTitlePaddingUnit"},attributes:t,setAttributes:a,link:{value:ce,label:"tabTitlePaddingLink"}})))})(),(()=>{if(!st)return"";const e=m.a.createElement(b.a,{label:Object(_.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ct,data:{value:ct,label:"iconColor"},setAttributes:a}),t=m.a.createElement(b.a,{label:Object(_.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Tt,data:{value:Tt,label:"activeiconColor"},setAttributes:a});return m.a.createElement(M.a,{title:Object(_.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},m.a.createElement(f.a,{label:Object(_.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:_t,label:"iconSize"},tablet:{value:ht,label:"iconSizeTablet"},mobile:{value:yt,label:"iconSizeMobile"}},min:0,max:100,displayUnit:!1,setAttributes:a}),m.a.createElement(p.a,{tabs:[{name:"normal",title:Object(_.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(_.__)("Active","ultimate-addons-for-gutenberg")}],normal:e,active:t}),m.a.createElement(f.a,{label:Object(_.__)("Spacing","ultimate-addons-for-gutenberg"),data:{desktop:{value:ft,label:"iconSpacing"},tablet:{value:vt,label:"iconSpacingTablet"},mobile:{value:mt,label:"iconSpacingMobile"}},min:0,max:100,displayUnit:!1,setAttributes:a}))})(),m.a.createElement(M.a,{title:Object(_.__)("Body","ultimate-addons-for-gutenberg"),initialOpen:!1},m.a.createElement(b.a,{label:Object(_.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:R,data:{value:R,label:"bodyTextColor"},setAttributes:a}),m.a.createElement(b.a,{label:Object(_.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:E,data:{value:E,label:"bodyBgColor"},setAttributes:a}),m.a.createElement(d.a,C({},e,{label:Object(_.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:ve,label:"tabBodyTopMargin"},valueRight:{value:fe,label:"tabBodyRightMargin"},valueBottom:{value:me,label:"tabBodyBottomMargin"},valueLeft:{value:pe,label:"tabBodyLeftMargin"},valueTopTablet:{value:ye,label:"tabBodyTopMarginTablet"},valueRightTablet:{value:he,label:"tabBodyRightMarginTablet"},valueBottomTablet:{value:Te,label:"tabBodyBottomMarginTablet"},valueLeftTablet:{value:_e,label:"tabBodyLeftMarginTablet"},valueTopMobile:{value:we,label:"tabBodyTopMarginMobile"},valueRightMobile:{value:Be,label:"tabBodyRightMarginMobile"},valueBottomMobile:{value:Me,label:"tabBodyBottomMarginMobile"},valueLeftMobile:{value:xe,label:"tabBodyLeftMarginMobile"},unit:{value:Ce,label:"tabBodyMarginUnit"},mUnit:{value:Se,label:"mobiletabBodyMarginUnit"},tUnit:{value:je,label:"tablettabBodyMarginUnit"},attributes:t,setAttributes:a,link:{value:Oe,label:"tabBodyMarginLink"}})),m.a.createElement(d.a,C({},e,{label:Object(_.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Pe,label:"tabBodyTopPadding"},valueRight:{value:He,label:"tabBodyRightPadding"},valueBottom:{value:ke,label:"tabBodyBottomPadding"},valueLeft:{value:Le,label:"tabBodyLeftPadding"},valueTopTablet:{value:Ee,label:"tabBodyTopPaddingTablet"},valueRightTablet:{value:Re,label:"tabBodyRightPaddingTablet"},valueBottomTablet:{value:Ve,label:"tabBodyBottomPaddingTablet"},valueLeftTablet:{value:ze,label:"tabBodyLeftPaddingTablet"},valueTopMobile:{value:Ae,label:"tabBodyTopPaddingMobile"},valueRightMobile:{value:Ue,label:"tabBodyRightPaddingMobile"},valueBottomMobile:{value:De,label:"tabBodyBottomPaddingMobile"},valueLeftMobile:{value:Fe,label:"tabBodyLeftPaddingMobile"},unit:{value:Ze,label:"tabBodyPaddingUnit"},mUnit:{value:Ie,label:"mobiletabBodyPaddingUnit"},tUnit:{value:Ne,label:"tablettabBodyPaddingUnit"},attributes:t,setAttributes:a,link:{value:Ge,label:"tabBodyPaddingLink"}}))),m.a.createElement(M.a,{title:Object(_.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},m.a.createElement(u.a,{setAttributes:a,prefix:"tab",attributes:t,deviceType:v,disableBottomSeparator:!0,disabledBorderTitle:!0}))),m.a.createElement(c.b,C({},c.a.advance,{parentProps:e}))))};t.default=m.a.memo(S)}}]);