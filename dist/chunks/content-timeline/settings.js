(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[21],{268:function(e,t,n){"use strict";var a=n(17),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=o},269:function(e,t,n){"use strict";var a,o=n(104),l=n.n(o),i=n(1),r=n.n(i),d=n(16),b=n.n(d),c=n(268),u=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=c.a.locals||{},p.use=function(){return u++||(a=b()(c.a,s)),p},p.unuse=function(){u>0&&!--u&&(a(),a=null)};var g=p,f=n(12),m=n(2);t.a=e=>(Object(i.useLayoutEffect)(()=>(g.use(),()=>{g.unuse()}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(l.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help)))},531:function(e,t,n){"use strict";n.r(t);var a=n(269),o=n(1),l=n.n(o),i=n(22),r=n(73),d=n(51),b=n(20),c=n(12),u=n(14),s=n(13),p=n(32),g=n(18),f=n(24),m=n(2),h=n(19),_=n(5),x=n(6),v=n(10);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const j=e=>{e=e.parentProps;const{setAttributes:t,attributes:{headSpace:n,headingColor:o,subHeadingColor:j,backgroundColor:O,separatorColor:y,separatorFillColor:F,separatorBg:M,separatorBorder:T,borderFocus:C,headingTag:H,headFontSizeType:E,headFontSize:k,headFontSizeTablet:S,headFontSizeMobile:z,headFontFamily:B,headFontWeight:P,headFontSubset:L,headLineHeightType:I,headLineHeight:Y,headLineHeightTablet:U,headLineHeightMobile:A,headLoadGoogleFonts:N,timelinAlignment:V,arrowlinAlignment:D,subHeadFontSizeType:G,subHeadFontSize:R,subHeadFontSizeTablet:W,subHeadFontSizeMobile:J,subHeadFontFamily:q,subHeadFontWeight:K,subHeadFontSubset:Q,subHeadLineHeightType:X,subHeadLineHeight:Z,subHeadLineHeightTablet:$,subHeadLineHeightMobile:ee,subHeadLoadGoogleFonts:te,separatorwidth:ne,borderwidth:ae,connectorBgsize:oe,dateBottomspace:le,align:ie,icon:re,iconColor:de,dateColor:be,dateFontsizeType:ce,dateFontsize:ue,dateFontsizeTablet:se,dateFontsizeMobile:pe,dateFontFamily:ge,dateFontWeight:fe,dateFontSubset:me,dateLineHeightType:he,dateLineHeight:_e,dateLineHeightTablet:xe,dateLineHeightMobile:ve,dateLoadGoogleFonts:we,iconSize:je,borderRadius:Oe,iconFocus:ye,iconBgFocus:Fe,displayPostDate:Me,stack:Te,dateFormat:Ce,topMargin:He,rightMargin:Ee,bottomMargin:ke,leftMargin:Se,topMarginTablet:ze,rightMarginTablet:Be,bottomMarginTablet:Pe,leftMarginTablet:Le,topMarginMobile:Ie,rightMarginMobile:Ye,bottomMarginMobile:Ue,leftMarginMobile:Ae,marginUnit:Ne,mobileMarginUnit:Ve,tabletMarginUnit:De,marginLink:Ge,topPadding:Re,rightPadding:We,bottomPadding:Je,leftPadding:qe,topPaddingTablet:Ke,rightPaddingTablet:Qe,bottomPaddingTablet:Xe,leftPaddingTablet:Ze,topPaddingMobile:$e,rightPaddingMobile:et,bottomPaddingMobile:tt,leftPaddingMobile:nt,paddingUnit:at,mobilePaddingUnit:ot,tabletPaddingUnit:lt,paddingLink:it}}=e,rt=new Date;let dt,bt,ct;if(1==N){const e={google:{families:[B+(P?":"+P:"")]}};dt=l.a.createElement(r.a,{config:e})}if(1==te){const e={google:{families:[q+(K?":"+K:"")]}};bt=l.a.createElement(r.a,{config:e})}if(1==we){const e={google:{families:[ge+(fe?":"+fe:"")]}};ct=l.a.createElement(r.a,{config:e})}return l.a.createElement(l.a.Fragment,null,l.a.createElement(_.BlockControls,null,l.a.createElement(_.BlockAlignmentToolbar,{value:ie,onChange:e=>{t({align:e})},controls:["center","left","right"]})),l.a.createElement(_.InspectorControls,null,l.a.createElement(d.a,null,l.a.createElement(b.b,b.a.general,l.a.createElement(x.PanelBody,{title:Object(m.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(g.a,{setAttributes:t,label:Object(m.__)("Orientation","ultimate-addons-for-gutenberg"),data:{value:V,label:"timelinAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:l.a.createElement(x.Icon,{icon:Object(c.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:l.a.createElement(x.Icon,{icon:Object(c.a)("fa fa-align-center")}),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:l.a.createElement(x.Icon,{icon:Object(c.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),l.a.createElement(g.a,{setAttributes:t,label:Object(m.__)("Arrow Alignment","ultimate-addons-for-gutenberg"),data:{value:D,label:"arrowlinAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:Object(m.__)("Top","ultimate-addons-for-gutenberg"),tooltip:Object(m.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(m.__)("Bottom","ultimate-addons-for-gutenberg"),tooltip:Object(m.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"center",label:Object(m.__)("Center","ultimate-addons-for-gutenberg"),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")}],showIcons:!1}),l.a.createElement(g.a,{setAttributes:t,label:Object(m.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:Te,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:"None",tooltip:Object(m.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:"Tablet",tooltip:Object(m.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:"Mobile",tooltip:Object(m.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(m.__)("Note: Choose on what breakpoint the Content Timeline will stack. It will be visible on front end only.","ultimate-addons-for-gutenberg")}),l.a.createElement("h2",null,Object(m.__)("Date")),l.a.createElement(x.ToggleControl,{label:Object(m.__)("Display Date","ultimate-addons-for-gutenberg"),checked:Me,onChange:()=>{Object(v.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.displayPostDate=Me}),t({displayPostDate:!Me})}}),Me&&l.a.createElement(x.SelectControl,{label:Object(m.__)("Date Format","ultimate-addons-for-gutenberg"),value:Ce,onChange:n=>{Object(v.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.dateFormat=n}),t({dateFormat:n})},options:[{value:"M j, Y",label:Object(h.dateI18n)("M j, Y",rt)},{value:"F j, Y",label:Object(h.dateI18n)("F j, Y",rt)},{value:"m/d/Y",label:Object(h.dateI18n)("m/d/Y",rt)},{value:"m-d-Y",label:Object(h.dateI18n)("m-d-Y",rt)},{value:"m.d.Y",label:Object(h.dateI18n)("m.d.Y",rt)},{value:"d M Y",label:Object(h.dateI18n)("d M Y",rt)},{value:"d F Y",label:Object(h.dateI18n)("d F Y",rt)},{value:"d-m-Y",label:Object(h.dateI18n)("d-m-Y",rt)},{value:"d.m.Y",label:Object(h.dateI18n)("d.m.Y",rt)},{value:"d/m/Y",label:Object(h.dateI18n)("d/m/Y",rt)},{value:"Y-m-d",label:Object(h.dateI18n)("Y-m-d",rt)},{value:"Y.m.d",label:Object(h.dateI18n)("Y.m.d",rt)},{value:"Y/m/d",label:Object(h.dateI18n)("Y/m/d",rt)},{value:"M, Y",label:Object(h.dateI18n)("M, Y",rt)},{value:"M Y",label:Object(h.dateI18n)("M Y",rt)},{value:"F, Y",label:Object(h.dateI18n)("F, Y",rt)},{value:"F Y",label:Object(h.dateI18n)("F Y",rt)},{value:"custom",label:Object(m.__)("Normal Text","ultimate-addons-for-gutenberg")}]})),l.a.createElement(x.PanelBody,{title:Object(m.__)("Timeline Item","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(g.a,{setAttributes:t,label:Object(m.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:H,label:"headingTag"},options:[{value:"h1",label:Object(m.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(m.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(m.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(m.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(m.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(m.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(m.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(m.__)("P","ultimate-addons-for-gutenberg")}]}),l.a.createElement(s.a,{label:Object(m.__)("Rounded Corners","ultimate-addons-for-gutenberg"),setAttributes:t,value:Oe,onChange:e=>t({borderRadius:e}),min:0,max:50,displayUnit:!1})),l.a.createElement(x.PanelBody,{title:Object(m.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(a.a,{label:Object(m.__)("Icon","ultimate-addons-for-gutenberg"),value:re,onChange:n=>{Object(v.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.icon=n}),t({icon:n})}}),re&&l.a.createElement(s.a,{label:Object(m.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:t,value:je,onChange:n=>{Object(v.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.iconSize=n}),t({iconSize:n})},min:0,max:30,displayUnit:!1}),l.a.createElement(s.a,{label:Object(m.__)("Icon Background Size","ultimate-addons-for-gutenberg"),setAttributes:t,value:oe,onChange:n=>{Object(v.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.connectorBgsize=n}),t({connectorBgsize:n})},min:25,max:90,displayUnit:!1}),l.a.createElement(s.a,{label:Object(m.__)("Border Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:ae,onChange:n=>{Object(v.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.borderwidth=n}),t({borderwidth:n})},min:1,max:10,displayUnit:!1}),l.a.createElement(s.a,{label:Object(m.__)("Connector Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:ne,onChange:n=>{Object(v.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.separatorwidth=n}),t({separatorwidth:n})},min:1,max:10,displayUnit:!1}))),l.a.createElement(b.b,b.a.style,l.a.createElement(x.PanelBody,{title:Object(m.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(u.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:o||"",onColorChange:e=>t({headingColor:e})}),l.a.createElement(i.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:t,loadGoogleFonts:{value:N,label:"headLoadGoogleFonts"},fontFamily:{value:B,label:"headFontFamily"},fontWeight:{value:P,label:"headFontWeight"},fontSubset:{value:L,label:"headFontSubset"},fontSizeType:{value:E,label:"headFontSizeType"},fontSize:{value:k,label:"headFontSize"},fontSizeMobile:{value:z,label:"headFontSizeMobile"},fontSizeTablet:{value:S,label:"headFontSizeTablet"},lineHeightType:{value:I,label:"headLineHeightType"},lineHeight:{value:Y,label:"headLineHeight"},lineHeightMobile:{value:A,label:"headLineHeightMobile"},lineHeightTablet:{value:U,label:"headLineHeightTablet"}}),l.a.createElement(s.a,{label:Object(m.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:t,value:n,onChange:e=>t({headSpace:e}),min:0,max:50,displayUnit:!1})),l.a.createElement(x.PanelBody,{title:Object(m.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(u.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:j||"",onColorChange:e=>t({subHeadingColor:e})}),l.a.createElement(i.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:t,loadGoogleFonts:{value:te,label:"subHeadLoadGoogleFonts"},fontFamily:{value:q,label:"subHeadFontFamily"},fontWeight:{value:K,label:"subHeadFontWeight"},fontSubset:{value:Q,label:"subHeadFontSubset"},fontSizeType:{value:G,label:"subHeadFontSizeType"},fontSize:{value:R,label:"subHeadFontSize"},fontSizeMobile:{value:J,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:W,label:"subHeadFontSizeTablet"},lineHeightType:{value:X,label:"subHeadLineHeightType"},lineHeight:{value:Z,label:"subHeadLineHeight"},lineHeightMobile:{value:ee,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:$,label:"subHeadLineHeightTablet"}})),Me&&l.a.createElement(x.PanelBody,{title:Object(m.__)("Date","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(u.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:be||"",onColorChange:e=>t({dateColor:e})}),l.a.createElement(i.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:t,loadGoogleFonts:{value:we,label:"dateLoadGoogleFonts"},fontFamily:{value:ge,label:"dateFontFamily"},fontWeight:{value:fe,label:"dateFontWeight"},fontSubset:{value:me,label:"dateFontSubset"},fontSizeType:{value:ce,label:"dateFontsizeType"},fontSize:{value:ue,label:"dateFontsize"},fontSizeMobile:{value:pe,label:"dateFontsizeMobile"},fontSizeTablet:{value:se,label:"dateFontsizeTablet"},lineHeightType:{value:he,label:"dateLineHeightType"},lineHeight:{value:_e,label:"dateLineHeight"},lineHeightMobile:{value:ve,label:"dateLineHeightMobile"},lineHeightTablet:{value:xe,label:"dateLineHeightTablet"}}),"center"!==V&&l.a.createElement(s.a,{label:Object(m.__)("Date Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:t,value:le,onChange:e=>t({dateBottomspace:e}),min:0,max:50,displayUnit:!1})),l.a.createElement(x.PanelBody,{title:Object(m.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(u.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:O||"",onColorChange:e=>t({backgroundColor:e})})),(()=>{const e=l.a.createElement(x.PanelBody,null,l.a.createElement(u.a,{label:Object(m.__)("Line Color","ultimate-addons-for-gutenberg"),colorValue:y||"",onColorChange:e=>t({separatorColor:e})}),l.a.createElement(u.a,{label:Object(m.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:de||"",onColorChange:e=>t({iconColor:e})}),l.a.createElement(u.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:e=>t({separatorBg:e})}),l.a.createElement(u.a,{label:Object(m.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:T||"",onColorChange:e=>t({separatorBorder:e})})),n=l.a.createElement(x.PanelBody,null,l.a.createElement(u.a,{label:Object(m.__)("Line Color","ultimate-addons-for-gutenberg"),colorValue:F||"",onColorChange:e=>t({separatorFillColor:e})}),l.a.createElement(u.a,{label:Object(m.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:ye||"",onColorChange:e=>t({iconFocus:e})}),l.a.createElement(u.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Fe||"",onColorChange:e=>t({iconBgFocus:e})}),l.a.createElement(u.a,{label:Object(m.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:e=>t({borderFocus:e})}));return l.a.createElement(x.PanelBody,{title:Object(m.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(f.a,{tabs:[{name:"normal",title:Object(m.__)("Normal","ultimate-addons-for-gutenberg")},{name:"focus",title:Object(m.__)("Focus","ultimate-addons-for-gutenberg")}],normal:e,focus:n,disableBottomSeparator:!0}))})(),l.a.createElement(x.PanelBody,{title:Object(m.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(p.a,w({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Re,label:"topPadding"},valueRight:{value:We,label:"rightPadding"},valueBottom:{value:Je,label:"bottomPadding"},valueLeft:{value:qe,label:"leftPadding"},valueTopTablet:{value:Ke,label:"topPaddingTablet"},valueRightTablet:{value:Qe,label:"rightPaddingTablet"},valueBottomTablet:{value:Xe,label:"bottomPaddingTablet"},valueLeftTablet:{value:Ze,label:"leftPaddingTablet"},valueTopMobile:{value:$e,label:"topPaddingMobile"},valueRightMobile:{value:et,label:"rightPaddingMobile"},valueBottomMobile:{value:tt,label:"bottomPaddingMobile"},valueLeftMobile:{value:nt,label:"leftPaddingMobile"},unit:{value:at,label:"paddingUnit"},mUnit:{value:ot,label:"mobilePaddingUnit"},tUnit:{value:lt,label:"tabletPaddingUnit"},attributes:e,setAttributes:t,link:{value:it,label:"paddingLink"}})),l.a.createElement(p.a,w({},e,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:He,label:"topMargin"},valueRight:{value:Ee,label:"rightMargin"},valueBottom:{value:ke,label:"bottomMargin"},valueLeft:{value:Se,label:"leftMargin"},valueTopTablet:{value:ze,label:"topMarginTablet"},valueRightTablet:{value:Be,label:"rightMarginTablet"},valueBottomTablet:{value:Pe,label:"bottomMarginTablet"},valueLeftTablet:{value:Le,label:"leftMarginTablet"},valueTopMobile:{value:Ie,label:"topMarginMobile"},valueRightMobile:{value:Ye,label:"rightMarginMobile"},valueBottomMobile:{value:Ue,label:"bottomMarginMobile"},valueLeftMobile:{value:Ae,label:"leftMarginMobile"},unit:{value:Ne,label:"marginUnit"},mUnit:{value:Ve,label:"mobileMarginUnit"},tUnit:{value:De,label:"tabletMarginUnit"},attributes:e,setAttributes:t,link:{value:Ge,label:"marginLink"}})))),l.a.createElement(b.b,w({},b.a.advance,{parentProps:e})))),dt,bt,ct)};t.default=l.a.memo(j)}}]);