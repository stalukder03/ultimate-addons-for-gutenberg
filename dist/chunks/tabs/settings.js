(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[99],{247:function(e,t,a){"use strict";var n=a(18),l=a.n(n)()((function(e){return e[1]}));l.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system,\r BlinkMacSystemFont,\r "Segoe UI",\r "Roboto",\r "Oxygen",\r "Ubuntu",\r "Cantarell",\r "Fira Sans",\r "Droid Sans",\r "Helvetica Neue",\r sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=l},248:function(e,t,a){"use strict";var n,l=a(251),o=a.n(l),i=a(1),r=a.n(i),b=a(17),d=a.n(b),u=a(247),s=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=u.a.locals||{},c.use=function(){return s++||(n=d()(u.a,g)),c},c.unuse=function(){s>0&&!--s&&(n(),n=null)};var p=c,f=a(12),m=a(2);t.a=e=>(Object(i.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(o.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help)))},604:function(e,t,a){"use strict";a.r(t);var n=a(248),l=a(12),o=a(23),i=a(1),r=a.n(i),b=a(2),d=a(6),u=a(10),s=a(3),g=e=>{const[t,a]=Object(s.useState)(!1),{label:n,data:l,setAttributes:o,options:i}=e,g=Object(u.useSelect)(e=>e("core/edit-post").__experimentalGetPreviewDeviceType(),[]),{__experimentalSetPreviewDeviceType:c}=Object(u.useDispatch)("core/edit-post"),p={desktop:r.a.createElement("svg",{width:"8",height:"7",viewBox:"0 0 8 7",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"})),tablet:r.a.createElement("svg",{width:"6",height:"7",viewBox:"0 0 6 7",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"})),mobile:r.a.createElement("svg",{width:"4",height:"7",viewBox:"0 0 4 7",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"}))},f=[{name:"Desktop",title:p.desktop,itemClass:"uagb-desktop-tab uagb-responsive-tabs"},{name:"Tablet",title:p.tablet,itemClass:"uagb-tablet-tab uagb-responsive-tabs"},{name:"Mobile",key:"mobile",title:p.mobile,itemClass:"uagb-mobile-tab uagb-responsive-tabs"}],m={};return m.Desktop=r.a.createElement(d.SelectControl,{value:l.desktop.value,onChange:e=>o({[l.desktop.label]:e}),options:i.desktop}),m.Tablet=r.a.createElement(d.SelectControl,{value:l.tablet.value,onChange:e=>o({[l.tablet.label]:e}),options:i.tablet||i.desktop}),m.Mobile=r.a.createElement(d.SelectControl,{value:l.mobile.value,onChange:e=>o({[l.mobile.label]:e}),options:i.mobile||i.desktop}),r.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},r.a.createElement("div",{className:"uagb-size-type-field-tabs"},r.a.createElement("div",{className:"uagb-control__header"},r.a.createElement("div",{className:"uag-responsive-label-wrap"},n&&r.a.createElement("span",{className:"uag-control-label"},n),!t&&r.a.createElement(d.Button,{key:"uag-responsive-common-button",className:"uag-responsive-common-button",onClick:()=>{a(!t)}},p[g.toLowerCase()]),t&&r.a.createElement(d.ButtonGroup,{className:"uagb-range-control-responsive components-tab-panel__tabs","aria-label":Object(b.__)("Device","ultimate-addons-for-gutenberg")},f.map(({name:e,key:n,title:l,itemClass:o})=>r.a.createElement(d.Button,{key:n,className:`components-button components-tab-panel__tabs-item uagb-range-control-responsive-item ${o}${e===g?" active-tab":""}`,"aria-pressed":g===e,onClick:()=>(c(e),void a(!t))},l))))),m[g]?m[g]:m.Desktop),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help))},c=a(21),p=a(16),f=a(41),m=a(13),_=a(57),v=a(63),h=a(34),y=a(42),x=a(5);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const w=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{tabsStyleD:i,tabsStyleM:u,tabsStyleT:s,tabActiveFrontend:w,tabHeaders:M,headerBgColor:B,borderStyle:j,borderWidth:O,borderRadius:C,borderColor:S,borderHoverColor:P,headerTextColor:k,activeTabBgColor:E,activeTabTextColor:L,bodyBgColor:H,bodyTextColor:z,tabTitleLeftMargin:R,tabTitleRightMargin:V,tabTitleTopMargin:U,tabTitleBottomMargin:F,tabTitleLeftMarginTablet:A,tabTitleRightMarginTablet:I,tabTitleTopMarginTablet:N,tabTitleBottomMarginTablet:D,tabTitleLeftMarginMobile:Z,tabTitleRightMarginMobile:G,tabTitleTopMarginMobile:W,tabTitleBottomMarginMobile:J,tabTitleMarginUnit:$,mobiletabTitleMarginUnit:q,tablettabTitleMarginUnit:K,tabTitleMarginLink:Q,tabTitleTopPadding:X,tabTitleRightPadding:Y,tabTitleBottomPadding:ee,tabTitleLeftPadding:te,tabTitleTopPaddingTablet:ae,tabTitleRightPaddingTablet:ne,tabTitleBottomPaddingTablet:le,tabTitleLeftPaddingTablet:oe,tabTitleTopPaddingMobile:ie,tabTitleRightPaddingMobile:re,tabTitleBottomPaddingMobile:be,tabTitleLeftPaddingMobile:de,tabTitlePaddingUnit:ue,mobiletabTitlePaddingUnit:se,tablettabTitlePaddingUnit:ge,tabTitlePaddingLink:ce,tabBodyLeftMargin:pe,tabBodyRightMargin:fe,tabBodyTopMargin:me,tabBodyBottomMargin:_e,tabBodyLeftMarginTablet:ve,tabBodyRightMarginTablet:he,tabBodyTopMarginTablet:ye,tabBodyBottomMarginTablet:xe,tabBodyLeftMarginMobile:Te,tabBodyRightMarginMobile:we,tabBodyTopMarginMobile:Me,tabBodyBottomMarginMobile:Be,tabBodyMarginUnit:je,mobiletabBodyMarginUnit:Oe,tablettabBodyMarginUnit:Ce,tabBodyMarginLink:Se,tabBodyTopPadding:Pe,tabBodyRightPadding:ke,tabBodyBottomPadding:Ee,tabBodyLeftPadding:Le,tabBodyTopPaddingTablet:He,tabBodyRightPaddingTablet:ze,tabBodyBottomPaddingTablet:Re,tabBodyLeftPaddingTablet:Ve,tabBodyTopPaddingMobile:Ue,tabBodyRightPaddingMobile:Fe,tabBodyBottomPaddingMobile:Ae,tabBodyLeftPaddingMobile:Ie,tabBodyPaddingUnit:Ne,mobiletabBodyPaddingUnit:De,tablettabBodyPaddingUnit:Ze,tabBodyPaddingLink:Ge,titleLoadGoogleFonts:We,titleFontFamily:Je,titleFontWeight:$e,titleFontSubset:qe,titleFontSizeType:Ke,titleFontSize:Qe,titleFontSizeMobile:Xe,titleFontSizeTablet:Ye,titleLineHeightType:et,titleLineHeight:tt,titleLineHeightMobile:at,titleLineHeightTablet:nt,titleTransform:lt,titleDecoration:ot,titleAlign:it,tabAlign:rt,showIcon:bt,icon:dt,iconColor:ut,iconPosition:st,iconSpacing:gt,iconSize:ct,activeiconColor:pt}=t;return r.a.createElement(x.InspectorControls,null,r.a.createElement(v.a,null,r.a.createElement(h.b,h.a.general,(()=>{const e={desktop:[{value:"hstyle1",label:Object(b.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(b.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(b.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(b.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(b.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(b.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(b.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(b.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(b.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(b.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],tablet:[{value:"hstyle1",label:Object(b.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(b.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(b.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(b.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(b.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(b.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(b.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(b.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(b.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(b.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],mobile:[{value:"hstyle1",label:Object(b.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(b.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(b.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(b.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(b.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(b.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(b.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(b.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(b.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(b.__)("Vertical Style 10","ultimate-addons-for-gutenberg")},{value:"stack1",label:Object(b.__)("Stack Style 11","ultimate-addons-for-gutenberg")},{value:"stack2",label:Object(b.__)("Stack Style 12","ultimate-addons-for-gutenberg")},{value:"stack3",label:Object(b.__)("Stack Style 13","ultimate-addons-for-gutenberg")},{value:"stack4",label:Object(b.__)("Stack Style 14","ultimate-addons-for-gutenberg")}]};return r.a.createElement(d.PanelBody,{title:Object(b.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(g,{label:Object(b.__)("Style","ultimate-addons-for-gutenberg"),data:{desktop:{value:i,label:"tabsStyleD"},tablet:{value:s,label:"tabsStyleT"},mobile:{value:u,label:"tabsStyleM"}},options:e,setAttributes:a}))})(),r.a.createElement(d.PanelBody,{title:Object(b.__)("Tabs Title","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(d.SelectControl,{label:Object(b.__)("Initial Open Tab","ultimate-addons-for-gutenberg"),value:w,options:M.map((e,t)=>({value:t,label:e})),onChange:e=>a({tabActiveFrontend:parseInt(e)})}),r.a.createElement(c.a,{setAttributes:a,label:Object(b.__)("Tab Alignment","ultimate-addons-for-gutenberg"),data:{value:rt,label:"tabAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:r.a.createElement(d.Icon,{icon:Object(l.a)("fa fa-align-left")}),tooltip:Object(b.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:r.a.createElement(d.Icon,{icon:Object(l.a)("fa fa-align-center")}),tooltip:Object(b.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:r.a.createElement(d.Icon,{icon:Object(l.a)("fa fa-align-right")}),tooltip:Object(b.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),r.a.createElement(c.a,{setAttributes:a,label:Object(b.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:it,label:"titleAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:r.a.createElement(d.Icon,{icon:Object(l.a)("fa fa-align-left")}),tooltip:Object(b.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:r.a.createElement(d.Icon,{icon:Object(l.a)("fa fa-align-center")}),tooltip:Object(b.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:r.a.createElement(d.Icon,{icon:Object(l.a)("fa fa-align-right")}),tooltip:Object(b.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),r.a.createElement(d.ToggleControl,{label:Object(b.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:bt,onChange:()=>a({showIcon:!bt})}),bt&&r.a.createElement(r.a.Fragment,null,r.a.createElement(n.a,{label:Object(b.__)("Tab Icon","ultimate-addons-for-gutenberg"),value:dt,onChange:e=>a({icon:e})}),r.a.createElement(c.a,{setAttributes:a,label:Object(b.__)("Icon Position","ultimate-addons-for-gutenberg"),data:{value:st,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",label:Object(b.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(b.__)("Right","ultimate-addons-for-gutenberg")},{value:"top",label:Object(b.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(b.__)("Bottom","ultimate-addons-for-gutenberg")}]})))),r.a.createElement(h.b,h.a.style,(()=>{const n=r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{label:Object(b.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:k,onColorChange:e=>a({headerTextColor:e})}),r.a.createElement(p.a,{label:Object(b.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:B,onColorChange:e=>a({headerBgColor:e})})),l=r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{label:Object(b.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:L,onColorChange:e=>a({activeTabTextColor:e})}),r.a.createElement(p.a,{label:Object(b.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:E,onColorChange:e=>a({activeTabBgColor:e})}));return r.a.createElement(d.PanelBody,{title:Object(b.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(y.a,{tabs:[{name:"normal",title:Object(b.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(b.__)("Active","ultimate-addons-for-gutenberg")}],normal:n,active:l}),r.a.createElement(o.a,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:We,label:"titleLoadGoogleFonts"},fontFamily:{value:Je,label:"titleFontFamily"},fontWeight:{value:$e,label:"titleFontWeight"},fontSubset:{value:qe,label:"titleFontSubset"},fontSizeType:{value:Ke,label:"titleFontSizeType"},fontSize:{value:Qe,label:"titleFontSize"},fontSizeMobile:{value:Xe,label:"titleFontSizeMobile"},fontSizeTablet:{value:Ye,label:"titleFontSizeTablet"},lineHeightType:{value:et,label:"titleLineHeightType"},lineHeight:{value:tt,label:"titleLineHeight"},lineHeightMobile:{value:at,label:"titleLineHeightMobile"},lineHeightTablet:{value:nt,label:"titleLineHeightTablet"},transform:{value:lt,label:"titleTransform"},decoration:{value:ot,label:"titleDecoration"}}),r.a.createElement(f.a,T({},e,{label:Object(b.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:U,label:"tabTitleTopMargin"},valueRight:{value:V,label:"tabTitleRightMargin"},valueBottom:{value:F,label:"tabTitleBottomMargin"},valueLeft:{value:R,label:"tabTitleLeftMargin"},valueTopTablet:{value:N,label:"tabTitleTopMarginTablet"},valueRightTablet:{value:I,label:"tabTitleRightMarginTablet"},valueBottomTablet:{value:D,label:"tabTitleBottomMarginTablet"},valueLeftTablet:{value:A,label:"tabTitleLeftMarginTablet"},valueTopMobile:{value:W,label:"tabTitleTopMarginMobile"},valueRightMobile:{value:G,label:"tabTitleRightMarginMobile"},valueBottomMobile:{value:J,label:"tabTitleBottomMarginMobile"},valueLeftMobile:{value:Z,label:"tabTitleLeftMarginMobile"},unit:{value:$,label:"tabTitleMarginUnit"},mUnit:{value:q,label:"mobiletabTitleMarginUnit"},tUnit:{value:K,label:"tablettabTitleMarginUnit"},attributes:t,setAttributes:a,link:{value:Q,label:"tabTitleMarginLink"}})),r.a.createElement(f.a,T({},e,{label:Object(b.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:X,label:"tabTitleTopPadding"},valueRight:{value:Y,label:"tabTitleRightPadding"},valueBottom:{value:ee,label:"tabTitleBottomPadding"},valueLeft:{value:te,label:"tabTitleLeftPadding"},valueTopTablet:{value:ae,label:"tabTitleTopPaddingTablet"},valueRightTablet:{value:ne,label:"tabTitleRightPaddingTablet"},valueBottomTablet:{value:le,label:"tabTitleBottomPaddingTablet"},valueLeftTablet:{value:oe,label:"tabTitleLeftPaddingTablet"},valueTopMobile:{value:ie,label:"tabTitleTopPaddingMobile"},valueRightMobile:{value:re,label:"tabTitleRightPaddingMobile"},valueBottomMobile:{value:be,label:"tabTitleBottomPaddingMobile"},valueLeftMobile:{value:de,label:"tabTitleLeftPaddingMobile"},unit:{value:ue,label:"tabTitlePaddingUnit"},mUnit:{value:se,label:"mobiletabTitlePaddingUnit"},tUnit:{value:ge,label:"tablettabTitlePaddingUnit"},attributes:t,setAttributes:a,link:{value:ce,label:"tabTitlePaddingLink"}})))})(),(()=>{if(!bt)return"";const e=r.a.createElement(p.a,{label:Object(b.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ut,onColorChange:e=>a({iconColor:e})}),t=r.a.createElement(p.a,{label:Object(b.__)("Color","ultimate-addons-for-gutenberg"),colorValue:pt,onColorChange:e=>a({activeiconColor:e})});return r.a.createElement(d.PanelBody,{title:Object(b.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(m.a,{label:Object(b.__)("Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:gt,onChange:e=>a({iconSpacing:e}),min:0,max:500,displayUnit:!1}),r.a.createElement(y.a,{tabs:[{name:"normal",title:Object(b.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(b.__)("Active","ultimate-addons-for-gutenberg")}],normal:e,active:t}),r.a.createElement(m.a,{label:Object(b.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:ct,onChange:e=>a({iconSize:e}),min:0,max:500,displayUnit:!1}))})(),r.a.createElement(d.PanelBody,{title:Object(b.__)("Body","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(p.a,{label:Object(b.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:H,onColorChange:e=>a({bodyBgColor:e})}),r.a.createElement(p.a,{label:Object(b.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:z,onColorChange:e=>a({bodyTextColor:e})}),r.a.createElement(f.a,T({},e,{label:Object(b.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:me,label:"tabBodyTopMargin"},valueRight:{value:fe,label:"tabBodyRightMargin"},valueBottom:{value:_e,label:"tabBodyBottomMargin"},valueLeft:{value:pe,label:"tabBodyLeftMargin"},valueTopTablet:{value:ye,label:"tabBodyTopMarginTablet"},valueRightTablet:{value:he,label:"tabBodyRightMarginTablet"},valueBottomTablet:{value:xe,label:"tabBodyBottomMarginTablet"},valueLeftTablet:{value:ve,label:"tabBodyLeftMarginTablet"},valueTopMobile:{value:Me,label:"tabBodyTopMarginMobile"},valueRightMobile:{value:we,label:"tabBodyRightMarginMobile"},valueBottomMobile:{value:Be,label:"tabBodyBottomMarginMobile"},valueLeftMobile:{value:Te,label:"tabBodyLeftMarginMobile"},unit:{value:je,label:"tabBodyMarginUnit"},mUnit:{value:Oe,label:"mobiletabBodyMarginUnit"},tUnit:{value:Ce,label:"tablettabBodyMarginUnit"},attributes:t,setAttributes:a,link:{value:Se,label:"tabBodyMarginLink"}})),r.a.createElement(f.a,T({},e,{label:Object(b.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Pe,label:"tabBodyTopPadding"},valueRight:{value:ke,label:"tabBodyRightPadding"},valueBottom:{value:Ee,label:"tabBodyBottomPadding"},valueLeft:{value:Le,label:"tabBodyLeftPadding"},valueTopTablet:{value:He,label:"tabBodyTopPaddingTablet"},valueRightTablet:{value:ze,label:"tabBodyRightPaddingTablet"},valueBottomTablet:{value:Re,label:"tabBodyBottomPaddingTablet"},valueLeftTablet:{value:Ve,label:"tabBodyLeftPaddingTablet"},valueTopMobile:{value:Ue,label:"tabBodyTopPaddingMobile"},valueRightMobile:{value:Fe,label:"tabBodyRightPaddingMobile"},valueBottomMobile:{value:Ae,label:"tabBodyBottomPaddingMobile"},valueLeftMobile:{value:Ie,label:"tabBodyLeftPaddingMobile"},unit:{value:Ne,label:"tabBodyPaddingUnit"},mUnit:{value:De,label:"mobiletabBodyPaddingUnit"},tUnit:{value:Ze,label:"tablettabBodyPaddingUnit"},attributes:t,setAttributes:a,link:{value:Ge,label:"tabBodyPaddingLink"}}))),r.a.createElement(d.PanelBody,{title:Object(b.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(_.a,{setAttributes:a,borderStyle:{value:j,label:"borderStyle",title:Object(b.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:O,label:"borderWidth",title:Object(b.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:C,label:"borderRadius",title:Object(b.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:S,label:"borderColor",title:Object(b.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:P,label:"borderHoverColor",title:Object(b.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}))),r.a.createElement(h.b,T({},h.a.advance,{parentProps:e}))))};t.default=r.a.memo(w)}}]);