(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[21],{272:function(e,n,t){"use strict";var a=t(15),o=t.n(a)()((function(e){return e[1]}));o.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n',""]),n.a=o},276:function(e,n,t){"use strict";var a,o=t(99),i=t.n(o),l=t(1),r=t.n(l),d=t(14),b=t.n(d),c=t(272),u=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=c.a.locals||{},p.use=function(){return u++||(a=b()(c.a,s)),p},p.unuse=function(){u>0&&!--u&&(a(),a=null)};var f=p,g=t(12),m=t(2);n.a=function(e){return Object(l.useLayoutEffect)((function(){return f.use(),function(){f.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(i.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:g.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},528:function(e,n,t){"use strict";t.r(n),t(99),t(12);var a=t(276),o=t(1),i=t.n(o),l=t(18),r=t(51),d=t(100),b=t(39),c=t(17),u=t(16),s=t(101),p=t(2),f=t(19),g=t(5),m=t(4),_=t(9);function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var x=function(e){var n,t,o,x,v,w=e=e.parentProps,y=w.setAttributes,j=w.attributes,O=j.headSpace,C=j.headingColor,F=j.subHeadingColor,H=j.backgroundColor,M=j.separatorColor,S=j.separatorFillColor,E=j.separatorBg,T=j.separatorBorder,k=j.borderFocus,z=j.headingTag,B=j.headFontSizeType,L=j.headFontSize,I=j.headFontSizeTablet,Y=j.headFontSizeMobile,P=j.headFontFamily,A=j.headFontWeight,U=j.headFontSubset,V=j.headLineHeightType,D=j.headLineHeight,G=j.headLineHeightTablet,N=j.headLineHeightMobile,W=j.headLoadGoogleFonts,R=j.timelinAlignment,J=j.arrowlinAlignment,q=j.subHeadFontSizeType,K=j.subHeadFontSize,Q=j.subHeadFontSizeTablet,X=j.subHeadFontSizeMobile,Z=j.subHeadFontFamily,$=j.subHeadFontWeight,ee=j.subHeadFontSubset,ne=j.subHeadLineHeightType,te=j.subHeadLineHeight,ae=j.subHeadLineHeightTablet,oe=j.subHeadLineHeightMobile,ie=j.subHeadLoadGoogleFonts,le=(j.verticalSpace,j.horizontalSpace,j.separatorwidth),re=j.borderwidth,de=j.connectorBgsize,be=j.dateBottomspace,ce=j.align,ue=j.icon,se=j.iconColor,pe=j.dateColor,fe=j.dateFontsizeType,ge=j.dateFontsize,me=j.dateFontsizeTablet,_e=j.dateFontsizeMobile,he=j.dateFontFamily,xe=j.dateFontWeight,ve=j.dateFontSubset,we=j.dateLineHeightType,ye=j.dateLineHeight,je=j.dateLineHeightTablet,Oe=j.dateLineHeightMobile,Ce=j.dateLoadGoogleFonts,Fe=j.iconSize,He=j.borderRadius,Me=j.bgPadding,Se=j.iconFocus,Ee=j.iconBgFocus,Te=j.displayPostDate,ke=j.stack,ze=j.dateFormat,Be=j.topMargin,Le=j.rightMargin,Ie=j.bottomMargin,Ye=j.leftMargin,Pe=j.topMarginTablet,Ae=j.rightMarginTablet,Ue=j.bottomMarginTablet,Ve=j.leftMarginTablet,De=j.topMarginMobile,Ge=j.rightMarginMobile,Ne=j.bottomMarginMobile,We=j.leftMarginMobile,Re=j.marginUnit,Je=j.mobileMarginUnit,qe=j.tabletMarginUnit,Ke=j.marginLink,Qe=new Date;if(1==W){var Xe={google:{families:[P+(A?":"+A:"")]}};n=i.a.createElement(r.a,{config:Xe})}if(1==ie){var Ze={google:{families:[Z+($?":"+$:"")]}};t=i.a.createElement(r.a,{config:Ze})}if(1==Ce){var $e={google:{families:[he+(xe?":"+xe:"")]}};o=i.a.createElement(r.a,{config:$e})}return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.BlockControls,null,i.a.createElement(g.BlockAlignmentToolbar,{value:ce,onChange:function(e){y({align:e})},controls:["center","left","right"]})),i.a.createElement(g.InspectorControls,null,i.a.createElement(d.a,null,i.a.createElement(b.b,{key:"general"},i.a.createElement(m.PanelBody,{initialOpen:!0},i.a.createElement("h2",null,Object(p.__)("Layout","ultimate-addons-for-gutenberg")),i.a.createElement(m.SelectControl,{label:Object(p.__)("Orientation","ultimate-addons-for-gutenberg"),value:R,onChange:function(e){return y({timelinAlignment:e})},options:[{value:"left",label:Object(p.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(p.__)("Right","ultimate-addons-for-gutenberg")},{value:"center",label:Object(p.__)("Center","ultimate-addons-for-gutenberg")}]}),i.a.createElement(m.SelectControl,{label:Object(p.__)("Arrow Alignment","ultimate-addons-for-gutenberg"),value:J,onChange:function(e){return y({arrowlinAlignment:e})},options:[{value:"top",label:Object(p.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(p.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"center",label:Object(p.__)("Center","ultimate-addons-for-gutenberg")}]}),i.a.createElement(m.SelectControl,{label:Object(p.__)("Stack on","ultimate-addons-for-gutenberg"),value:ke,options:[{value:"none",label:Object(p.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(p.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(p.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(p.__)("Note: Choose on what breakpoint the Content Timeline will stack. It will be visible on front end only.","ultimate-addons-for-gutenberg"),onChange:function(e){return y({stack:e})}}),i.a.createElement("h2",null,Object(p.__)("Date")),i.a.createElement(m.ToggleControl,{label:Object(p.__)("Display Date","ultimate-addons-for-gutenberg"),checked:Te,onChange:function(){Object(_.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.displayPostDate=Te})),y({displayPostDate:!Te})}}),Te&&i.a.createElement(m.SelectControl,{label:Object(p.__)("Date Format","ultimate-addons-for-gutenberg"),value:ze,onChange:function(n){Object(_.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.dateFormat=n})),y({dateFormat:n})},options:[{value:"M j, Y",label:Object(f.dateI18n)("M j, Y",Qe)},{value:"F j, Y",label:Object(f.dateI18n)("F j, Y",Qe)},{value:"m/d/Y",label:Object(f.dateI18n)("m/d/Y",Qe)},{value:"m-d-Y",label:Object(f.dateI18n)("m-d-Y",Qe)},{value:"m.d.Y",label:Object(f.dateI18n)("m.d.Y",Qe)},{value:"d M Y",label:Object(f.dateI18n)("d M Y",Qe)},{value:"d F Y",label:Object(f.dateI18n)("d F Y",Qe)},{value:"d-m-Y",label:Object(f.dateI18n)("d-m-Y",Qe)},{value:"d.m.Y",label:Object(f.dateI18n)("d.m.Y",Qe)},{value:"d/m/Y",label:Object(f.dateI18n)("d/m/Y",Qe)},{value:"Y-m-d",label:Object(f.dateI18n)("Y-m-d",Qe)},{value:"Y.m.d",label:Object(f.dateI18n)("Y.m.d",Qe)},{value:"Y/m/d",label:Object(f.dateI18n)("Y/m/d",Qe)},{value:"M, Y",label:Object(f.dateI18n)("M, Y",Qe)},{value:"M Y",label:Object(f.dateI18n)("M Y",Qe)},{value:"F, Y",label:Object(f.dateI18n)("F, Y",Qe)},{value:"F Y",label:Object(f.dateI18n)("F Y",Qe)},{value:"custom",label:Object(p.__)("Normal Text","ultimate-addons-for-gutenberg")}]}),Te&&"center"!==R&&i.a.createElement(u.a,{label:Object(p.__)("Date Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:y,value:be,onChange:function(e){return y({dateBottomspace:e})},min:0,max:50,displayUnit:!1})),i.a.createElement(m.PanelBody,{title:Object(p.__)("Timeline Item","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(m.SelectControl,{label:Object(p.__)("Heading Tag","ultimate-addons-for-gutenberg"),value:z,onChange:function(e){return y({headingTag:e})},options:[{value:"h1",label:Object(p.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(p.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(p.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(p.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(p.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(p.__)("H6","ultimate-addons-for-gutenberg")},{value:"p",label:Object(p.__)("P","ultimate-addons-for-gutenberg")},{value:"span",label:Object(p.__)("SPAN","ultimate-addons-for-gutenberg")}]}),i.a.createElement(u.a,{label:Object(p.__)("Rounded Corners","ultimate-addons-for-gutenberg"),setAttributes:y,value:He,onChange:function(e){return y({borderRadius:e})},min:0,max:50,displayUnit:!1}),i.a.createElement(u.a,{label:Object(p.__)("Padding","ultimate-addons-for-gutenberg"),setAttributes:y,value:Me,onChange:function(e){return y({bgPadding:e})},min:1,max:50,displayUnit:!1})),i.a.createElement(m.PanelBody,{title:Object(p.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(a.a,{label:Object(p.__)("Icon","ultimate-addons-for-gutenberg"),value:ue,onChange:function(n){Object(_.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.icon=n})),y({icon:n})}}),i.a.createElement(u.a,{label:Object(p.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:y,value:Fe,onChange:function(n){Object(_.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.iconSize=n})),y({iconSize:n})},min:0,max:30,displayUnit:!1}),i.a.createElement(u.a,{label:Object(p.__)("Icon Background Size","ultimate-addons-for-gutenberg"),setAttributes:y,value:de,onChange:function(n){Object(_.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.connectorBgsize=n})),y({connectorBgsize:n})},min:25,max:90,displayUnit:!1}),i.a.createElement(u.a,{label:Object(p.__)("Border Width","ultimate-addons-for-gutenberg"),setAttributes:y,value:re,onChange:function(n){Object(_.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.borderwidth=n})),y({borderwidth:n})},min:1,max:10,displayUnit:!1}),i.a.createElement(u.a,{label:Object(p.__)("Connector Width","ultimate-addons-for-gutenberg"),setAttributes:y,value:le,onChange:function(n){Object(_.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.separatorwidth=n})),y({separatorwidth:n})},min:1,max:10,displayUnit:!1}))),i.a.createElement(b.b,{key:"style"},i.a.createElement(m.PanelBody,{title:Object(p.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(c.a,{label:Object(p.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:function(e){return y({headingColor:e})}}),i.a.createElement(l.a,{label:Object(p.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:y,loadGoogleFonts:{value:W,label:"headLoadGoogleFonts"},fontFamily:{value:P,label:"headFontFamily"},fontWeight:{value:A,label:"headFontWeight"},fontSubset:{value:U,label:"headFontSubset"},fontSizeType:{value:B,label:"headFontSizeType"},fontSize:{value:L,label:"headFontSize"},fontSizeMobile:{value:Y,label:"headFontSizeMobile"},fontSizeTablet:{value:I,label:"headFontSizeTablet"},lineHeightType:{value:V,label:"headLineHeightType"},lineHeight:{value:D,label:"headLineHeight"},lineHeightMobile:{value:N,label:"headLineHeightMobile"},lineHeightTablet:{value:G,label:"headLineHeightTablet"}})),i.a.createElement(m.PanelBody,{title:Object(p.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(c.a,{label:Object(p.__)("Color","ultimate-addons-for-gutenberg"),colorValue:F||"",onColorChange:function(e){return y({subHeadingColor:e})}}),i.a.createElement(l.a,{label:Object(p.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:y,loadGoogleFonts:{value:ie,label:"subHeadLoadGoogleFonts"},fontFamily:{value:Z,label:"subHeadFontFamily"},fontWeight:{value:$,label:"subHeadFontWeight"},fontSubset:{value:ee,label:"subHeadFontSubset"},fontSizeType:{value:q,label:"subHeadFontSizeType"},fontSize:{value:K,label:"subHeadFontSize"},fontSizeMobile:{value:X,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:Q,label:"subHeadFontSizeTablet"},lineHeightType:{value:ne,label:"subHeadLineHeightType"},lineHeight:{value:te,label:"subHeadLineHeight"},lineHeightMobile:{value:oe,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:ae,label:"subHeadLineHeightTablet"}})),i.a.createElement(m.PanelBody,{title:Object(p.__)("Date","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(c.a,{label:Object(p.__)("Color","ultimate-addons-for-gutenberg"),colorValue:pe||"",onColorChange:function(e){return y({dateColor:e})}}),Te&&i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{label:Object(p.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:y,loadGoogleFonts:{value:Ce,label:"dateLoadGoogleFonts"},fontFamily:{value:he,label:"dateFontFamily"},fontWeight:{value:xe,label:"dateFontWeight"},fontSubset:{value:ve,label:"dateFontSubset"},fontSizeType:{value:fe,label:"dateFontsizeType"},fontSize:{value:ge,label:"dateFontsize"},fontSizeMobile:{value:_e,label:"dateFontsizeMobile"},fontSizeTablet:{value:me,label:"dateFontsizeTablet"},lineHeightType:{value:we,label:"dateLineHeightType"},lineHeight:{value:ye,label:"dateLineHeight"},lineHeightMobile:{value:Oe,label:"dateLineHeightMobile"},lineHeightTablet:{value:je,label:"dateLineHeightTablet"}}))),i.a.createElement(m.PanelBody,{title:Object(p.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(c.a,{label:Object(p.__)("Color","ultimate-addons-for-gutenberg"),colorValue:H||"",onColorChange:function(e){return y({backgroundColor:e})}})),(x=i.a.createElement(m.PanelBody,{title:Object(p.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(c.a,{label:Object(p.__)("Line Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:function(e){return y({separatorColor:e})}}),i.a.createElement(c.a,{label:Object(p.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:se||"",onColorChange:function(e){return y({iconColor:e})}}),i.a.createElement(c.a,{label:Object(p.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:function(e){return y({separatorBg:e})}}),i.a.createElement(c.a,{label:Object(p.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:T||"",onColorChange:function(e){return y({separatorBorder:e})}})),v=i.a.createElement(m.PanelBody,{title:Object(p.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(c.a,{label:Object(p.__)("Line Color","ultimate-addons-for-gutenberg"),colorValue:S||"",onColorChange:function(e){return y({separatorFillColor:e})}}),i.a.createElement(c.a,{label:Object(p.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:Se||"",onColorChange:function(e){return y({iconFocus:e})}}),i.a.createElement(c.a,{label:Object(p.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Ee||"",onColorChange:function(e){return y({iconBgFocus:e})}}),i.a.createElement(c.a,{label:Object(p.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:function(e){return y({borderFocus:e})}})),i.a.createElement(m.PanelBody,{title:Object(p.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(m.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(p.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"focus",title:Object(p.__)("Focus","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var n;return n="focus"===e.name?v:x,i.a.createElement("div",null,n)})))),i.a.createElement(m.PanelBody,{title:Object(p.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(u.a,{label:Object(p.__)("Heading Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:y,value:O,onChange:function(e){return y({headSpace:e})},min:0,max:50,displayUnit:!1}),i.a.createElement(s.a,h({},e,{label:Object(p.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Be,label:"topMargin"},valueRight:{value:Le,label:"rightMargin"},valueBottom:{value:Ie,label:"bottomMargin"},valueLeft:{value:Ye,label:"leftMargin"},valueTopTablet:{value:Pe,label:"topMarginTablet"},valueRightTablet:{value:Ae,label:"rightMarginTablet"},valueBottomTablet:{value:Ue,label:"bottomMarginTablet"},valueLeftTablet:{value:Ve,label:"leftMarginTablet"},valueTopMobile:{value:De,label:"topMarginMobile"},valueRightMobile:{value:Ge,label:"rightMarginMobile"},valueBottomMobile:{value:Ne,label:"bottomMarginMobile"},valueLeftMobile:{value:We,label:"leftMarginMobile"},unit:{value:Re,label:"marginUnit"},mUnit:{value:Je,label:"mobileMarginUnit"},tUnit:{value:qe,label:"tabletMarginUnit"},attributes:e,setAttributes:y,link:{value:Ke,label:"marginLink"}})))),i.a.createElement(b.b,{key:"advance"}))),n,t,o)};n.default=i.a.memo(x)}}]);