(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[101],{155:function(e,t,a){"use strict";var n=a(19),l=a.n(n)()((function(e){return e[1]}));l.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system,\r BlinkMacSystemFont,\r "Segoe UI",\r "Roboto",\r "Oxygen",\r "Ubuntu",\r "Cantarell",\r "Fira Sans",\r "Droid Sans",\r "Helvetica Neue",\r sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=l},156:function(e,t,a){"use strict";var n,l=a(157),o=a.n(l),i=a(1),r=a.n(i),b=a(18),d=a.n(b),u=a(155),g=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=u.a.locals||{},s.use=function(){return g++||(n=d()(u.a,c)),s},s.unuse=function(){g>0&&!--g&&(n(),n=null)};var p=s,f=a(12),m=a(2);t.a=e=>(Object(i.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(o.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help)))},499:function(e,t,a){"use strict";a.r(t);var n=a(156),l=a(12),o=a(29),i=a(1),r=a.n(i),b=a(7),d=a(24),u=a(48),g=e=>{const{label:t,data:a,setAttributes:n,options:l}=e,o=Object(d.a)(),i={};return i.Desktop=r.a.createElement(b.SelectControl,{value:a.desktop.value,onChange:e=>n({[a.desktop.label]:e}),options:l.desktop}),i.Tablet=r.a.createElement(b.SelectControl,{value:a.tablet.value,onChange:e=>n({[a.tablet.label]:e}),options:l.tablet||l.desktop}),i.Mobile=r.a.createElement(b.SelectControl,{value:a.mobile.value,onChange:e=>n({[a.mobile.label]:e}),options:l.mobile||l.desktop}),r.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},r.a.createElement("div",{className:"uagb-size-type-field-tabs"},r.a.createElement("div",{className:"uagb-control__header"},r.a.createElement(u.a,{label:t,responsive:!0})),i[o]?i[o]:i.Desktop),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help))},c=a(21),s=a(16),p=a(42),f=a(14),m=a(55),_=a(58),v=a(23),h=a(43),y=a(2),x=a(5),T=a(15);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const w=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{tabsStyleD:i,tabsStyleM:d,tabsStyleT:u,tabActiveFrontend:w,tabHeaders:B,headerBgColor:j,borderStyle:O,borderWidth:S,borderRadius:P,borderColor:C,borderHoverColor:k,headerTextColor:E,activeTabBgColor:L,activeTabTextColor:z,bodyBgColor:R,bodyTextColor:U,tabTitleLeftMargin:H,tabTitleRightMargin:A,tabTitleTopMargin:F,tabTitleBottomMargin:V,tabTitleLeftMarginTablet:I,tabTitleRightMarginTablet:N,tabTitleTopMarginTablet:D,tabTitleBottomMarginTablet:W,tabTitleLeftMarginMobile:G,tabTitleRightMarginMobile:J,tabTitleTopMarginMobile:q,tabTitleBottomMarginMobile:K,tabTitleMarginUnit:Q,mobiletabTitleMarginUnit:X,tablettabTitleMarginUnit:Y,tabTitleMarginLink:Z,tabTitleTopPadding:$,tabTitleRightPadding:ee,tabTitleBottomPadding:te,tabTitleLeftPadding:ae,tabTitleTopPaddingTablet:ne,tabTitleRightPaddingTablet:le,tabTitleBottomPaddingTablet:oe,tabTitleLeftPaddingTablet:ie,tabTitleTopPaddingMobile:re,tabTitleRightPaddingMobile:be,tabTitleBottomPaddingMobile:de,tabTitleLeftPaddingMobile:ue,tabTitlePaddingUnit:ge,mobiletabTitlePaddingUnit:ce,tablettabTitlePaddingUnit:se,tabTitlePaddingLink:pe,tabBodyLeftMargin:fe,tabBodyRightMargin:me,tabBodyTopMargin:_e,tabBodyBottomMargin:ve,tabBodyLeftMarginTablet:he,tabBodyRightMarginTablet:ye,tabBodyTopMarginTablet:xe,tabBodyBottomMarginTablet:Te,tabBodyLeftMarginMobile:Me,tabBodyRightMarginMobile:we,tabBodyTopMarginMobile:Be,tabBodyBottomMarginMobile:je,tabBodyMarginUnit:Oe,mobiletabBodyMarginUnit:Se,tablettabBodyMarginUnit:Pe,tabBodyMarginLink:Ce,tabBodyTopPadding:ke,tabBodyRightPadding:Ee,tabBodyBottomPadding:Le,tabBodyLeftPadding:ze,tabBodyTopPaddingTablet:Re,tabBodyRightPaddingTablet:Ue,tabBodyBottomPaddingTablet:He,tabBodyLeftPaddingTablet:Ae,tabBodyTopPaddingMobile:Fe,tabBodyRightPaddingMobile:Ve,tabBodyBottomPaddingMobile:Ie,tabBodyLeftPaddingMobile:Ne,tabBodyPaddingUnit:De,mobiletabBodyPaddingUnit:We,tablettabBodyPaddingUnit:Ge,tabBodyPaddingLink:Je,titleLoadGoogleFonts:qe,titleFontFamily:Ke,titleFontWeight:Qe,titleFontSizeType:Xe,titleFontSize:Ye,titleFontSizeMobile:Ze,titleFontSizeTablet:$e,titleLineHeightType:et,titleLineHeight:tt,titleLineHeightMobile:at,titleLineHeightTablet:nt,titleTransform:lt,titleDecoration:ot,titleAlign:it,tabAlign:rt,showIcon:bt,icon:dt,iconColor:ut,iconPosition:gt,iconSpacing:ct,iconSize:st,activeiconColor:pt,titleFontStyle:ft}=t;return r.a.createElement(x.InspectorControls,null,r.a.createElement(x.BlockControls,{key:"controls"},r.a.createElement(x.BlockAlignmentToolbar,{value:rt,onChange:e=>a({tabAlign:e}),controls:["left","center","right"]}),r.a.createElement(x.AlignmentToolbar,{value:it,onChange:e=>a({titleAlign:e}),controls:["left","center","right"]})),r.a.createElement(_.a,null,r.a.createElement(v.b,v.a.general,(()=>{const e={desktop:[{value:"hstyle1",label:Object(y.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(y.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(y.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(y.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(y.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(y.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(y.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(y.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(y.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(y.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],tablet:[{value:"hstyle1",label:Object(y.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(y.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(y.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(y.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(y.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(y.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(y.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(y.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(y.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(y.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],mobile:[{value:"hstyle1",label:Object(y.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(y.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(y.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(y.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(y.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(y.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(y.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(y.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(y.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(y.__)("Vertical Style 10","ultimate-addons-for-gutenberg")},{value:"stack1",label:Object(y.__)("Stack Style 11","ultimate-addons-for-gutenberg")},{value:"stack2",label:Object(y.__)("Stack Style 12","ultimate-addons-for-gutenberg")},{value:"stack3",label:Object(y.__)("Stack Style 13","ultimate-addons-for-gutenberg")},{value:"stack4",label:Object(y.__)("Stack Style 14","ultimate-addons-for-gutenberg")}]};return r.a.createElement(T.a,{title:Object(y.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(g,{label:Object(y.__)("Style","ultimate-addons-for-gutenberg"),data:{desktop:{value:i,label:"tabsStyleD"},tablet:{value:u,label:"tabsStyleT"},mobile:{value:d,label:"tabsStyleM"}},options:e,setAttributes:a}))})(),r.a.createElement(T.a,{title:Object(y.__)("Tabs Title","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(b.SelectControl,{label:Object(y.__)("Initial Open Tab","ultimate-addons-for-gutenberg"),value:w,options:B.map((e,t)=>({value:t,label:e})),onChange:e=>a({tabActiveFrontend:parseInt(e)})}),r.a.createElement(c.a,{setAttributes:a,label:Object(y.__)("Tab Alignment","ultimate-addons-for-gutenberg"),data:{value:rt,label:"tabAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:r.a.createElement(b.Icon,{icon:Object(l.a)("fa fa-align-left")}),tooltip:Object(y.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:r.a.createElement(b.Icon,{icon:Object(l.a)("fa fa-align-center")}),tooltip:Object(y.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:r.a.createElement(b.Icon,{icon:Object(l.a)("fa fa-align-right")}),tooltip:Object(y.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),r.a.createElement(c.a,{setAttributes:a,label:Object(y.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:it,label:"titleAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:r.a.createElement(b.Icon,{icon:Object(l.a)("fa fa-align-left")}),tooltip:Object(y.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:r.a.createElement(b.Icon,{icon:Object(l.a)("fa fa-align-center")}),tooltip:Object(y.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:r.a.createElement(b.Icon,{icon:Object(l.a)("fa fa-align-right")}),tooltip:Object(y.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),r.a.createElement(b.ToggleControl,{label:Object(y.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:bt,onChange:()=>a({showIcon:!bt})}),bt&&r.a.createElement(r.a.Fragment,null,r.a.createElement(n.a,{label:Object(y.__)("Tab Icon","ultimate-addons-for-gutenberg"),value:dt,onChange:e=>a({icon:e})}),r.a.createElement(c.a,{setAttributes:a,label:Object(y.__)("Icon Position","ultimate-addons-for-gutenberg"),data:{value:gt,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",label:Object(y.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(y.__)("Right","ultimate-addons-for-gutenberg")},{value:"top",label:Object(y.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(y.__)("Bottom","ultimate-addons-for-gutenberg")}]})))),r.a.createElement(v.b,v.a.style,(()=>{const n=r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{label:Object(y.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:E,onColorChange:e=>a({headerTextColor:e})}),r.a.createElement(s.a,{label:Object(y.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:j,onColorChange:e=>a({headerBgColor:e})})),l=r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{label:Object(y.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:z,onColorChange:e=>a({activeTabTextColor:e})}),r.a.createElement(s.a,{label:Object(y.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:L,onColorChange:e=>a({activeTabBgColor:e})}));return r.a.createElement(T.a,{title:Object(y.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(h.a,{tabs:[{name:"normal",title:Object(y.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(y.__)("Active","ultimate-addons-for-gutenberg")}],normal:n,active:l}),r.a.createElement(o.a,{label:Object(y.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:qe,label:"titleLoadGoogleFonts"},fontFamily:{value:Ke,label:"titleFontFamily"},fontWeight:{value:Qe,label:"titleFontWeight"},fontStyle:{value:ft,label:"titleFontStyle"},fontSizeType:{value:Xe,label:"titleFontSizeType"},fontSize:{value:Ye,label:"titleFontSize"},fontSizeMobile:{value:Ze,label:"titleFontSizeMobile"},fontSizeTablet:{value:$e,label:"titleFontSizeTablet"},lineHeightType:{value:et,label:"titleLineHeightType"},lineHeight:{value:tt,label:"titleLineHeight"},lineHeightMobile:{value:at,label:"titleLineHeightMobile"},lineHeightTablet:{value:nt,label:"titleLineHeightTablet"},transform:{value:lt,label:"titleTransform"},decoration:{value:ot,label:"titleDecoration"}}),r.a.createElement(p.a,M({},e,{label:Object(y.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:F,label:"tabTitleTopMargin"},valueRight:{value:A,label:"tabTitleRightMargin"},valueBottom:{value:V,label:"tabTitleBottomMargin"},valueLeft:{value:H,label:"tabTitleLeftMargin"},valueTopTablet:{value:D,label:"tabTitleTopMarginTablet"},valueRightTablet:{value:N,label:"tabTitleRightMarginTablet"},valueBottomTablet:{value:W,label:"tabTitleBottomMarginTablet"},valueLeftTablet:{value:I,label:"tabTitleLeftMarginTablet"},valueTopMobile:{value:q,label:"tabTitleTopMarginMobile"},valueRightMobile:{value:J,label:"tabTitleRightMarginMobile"},valueBottomMobile:{value:K,label:"tabTitleBottomMarginMobile"},valueLeftMobile:{value:G,label:"tabTitleLeftMarginMobile"},unit:{value:Q,label:"tabTitleMarginUnit"},mUnit:{value:X,label:"mobiletabTitleMarginUnit"},tUnit:{value:Y,label:"tablettabTitleMarginUnit"},attributes:t,setAttributes:a,link:{value:Z,label:"tabTitleMarginLink"}})),r.a.createElement(p.a,M({},e,{label:Object(y.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:$,label:"tabTitleTopPadding"},valueRight:{value:ee,label:"tabTitleRightPadding"},valueBottom:{value:te,label:"tabTitleBottomPadding"},valueLeft:{value:ae,label:"tabTitleLeftPadding"},valueTopTablet:{value:ne,label:"tabTitleTopPaddingTablet"},valueRightTablet:{value:le,label:"tabTitleRightPaddingTablet"},valueBottomTablet:{value:oe,label:"tabTitleBottomPaddingTablet"},valueLeftTablet:{value:ie,label:"tabTitleLeftPaddingTablet"},valueTopMobile:{value:re,label:"tabTitleTopPaddingMobile"},valueRightMobile:{value:be,label:"tabTitleRightPaddingMobile"},valueBottomMobile:{value:de,label:"tabTitleBottomPaddingMobile"},valueLeftMobile:{value:ue,label:"tabTitleLeftPaddingMobile"},unit:{value:ge,label:"tabTitlePaddingUnit"},mUnit:{value:ce,label:"mobiletabTitlePaddingUnit"},tUnit:{value:se,label:"tablettabTitlePaddingUnit"},attributes:t,setAttributes:a,link:{value:pe,label:"tabTitlePaddingLink"}})))})(),(()=>{if(!bt)return"";const e=r.a.createElement(s.a,{label:Object(y.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ut,onColorChange:e=>a({iconColor:e})}),t=r.a.createElement(s.a,{label:Object(y.__)("Color","ultimate-addons-for-gutenberg"),colorValue:pt,onColorChange:e=>a({activeiconColor:e})});return r.a.createElement(T.a,{title:Object(y.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(f.a,{label:Object(y.__)("Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:ct,onChange:e=>a({iconSpacing:e}),min:0,max:500,displayUnit:!1}),r.a.createElement(h.a,{tabs:[{name:"normal",title:Object(y.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(y.__)("Active","ultimate-addons-for-gutenberg")}],normal:e,active:t}),r.a.createElement(f.a,{label:Object(y.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:st,onChange:e=>a({iconSize:e}),min:0,max:500,displayUnit:!1}))})(),r.a.createElement(T.a,{title:Object(y.__)("Body","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(s.a,{label:Object(y.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:R,onColorChange:e=>a({bodyBgColor:e})}),r.a.createElement(s.a,{label:Object(y.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:U,onColorChange:e=>a({bodyTextColor:e})}),r.a.createElement(p.a,M({},e,{label:Object(y.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:_e,label:"tabBodyTopMargin"},valueRight:{value:me,label:"tabBodyRightMargin"},valueBottom:{value:ve,label:"tabBodyBottomMargin"},valueLeft:{value:fe,label:"tabBodyLeftMargin"},valueTopTablet:{value:xe,label:"tabBodyTopMarginTablet"},valueRightTablet:{value:ye,label:"tabBodyRightMarginTablet"},valueBottomTablet:{value:Te,label:"tabBodyBottomMarginTablet"},valueLeftTablet:{value:he,label:"tabBodyLeftMarginTablet"},valueTopMobile:{value:Be,label:"tabBodyTopMarginMobile"},valueRightMobile:{value:we,label:"tabBodyRightMarginMobile"},valueBottomMobile:{value:je,label:"tabBodyBottomMarginMobile"},valueLeftMobile:{value:Me,label:"tabBodyLeftMarginMobile"},unit:{value:Oe,label:"tabBodyMarginUnit"},mUnit:{value:Se,label:"mobiletabBodyMarginUnit"},tUnit:{value:Pe,label:"tablettabBodyMarginUnit"},attributes:t,setAttributes:a,link:{value:Ce,label:"tabBodyMarginLink"}})),r.a.createElement(p.a,M({},e,{label:Object(y.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ke,label:"tabBodyTopPadding"},valueRight:{value:Ee,label:"tabBodyRightPadding"},valueBottom:{value:Le,label:"tabBodyBottomPadding"},valueLeft:{value:ze,label:"tabBodyLeftPadding"},valueTopTablet:{value:Re,label:"tabBodyTopPaddingTablet"},valueRightTablet:{value:Ue,label:"tabBodyRightPaddingTablet"},valueBottomTablet:{value:He,label:"tabBodyBottomPaddingTablet"},valueLeftTablet:{value:Ae,label:"tabBodyLeftPaddingTablet"},valueTopMobile:{value:Fe,label:"tabBodyTopPaddingMobile"},valueRightMobile:{value:Ve,label:"tabBodyRightPaddingMobile"},valueBottomMobile:{value:Ie,label:"tabBodyBottomPaddingMobile"},valueLeftMobile:{value:Ne,label:"tabBodyLeftPaddingMobile"},unit:{value:De,label:"tabBodyPaddingUnit"},mUnit:{value:We,label:"mobiletabBodyPaddingUnit"},tUnit:{value:Ge,label:"tablettabBodyPaddingUnit"},attributes:t,setAttributes:a,link:{value:Je,label:"tabBodyPaddingLink"}}))),r.a.createElement(T.a,{title:Object(y.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(m.a,{setAttributes:a,borderStyle:{value:O,label:"borderStyle",title:Object(y.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:S,label:"borderWidth",title:Object(y.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:P,label:"borderRadius",title:Object(y.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:C,label:"borderColor",title:Object(y.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:k,label:"borderHoverColor",title:Object(y.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}))),r.a.createElement(v.b,M({},v.a.advance,{parentProps:e}))))};t.default=r.a.memo(w)}}]);