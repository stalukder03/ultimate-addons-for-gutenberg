(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[18],{238:function(e,n,t){"use strict";var a=t(14),o=t.n(a)()((function(e){return e[1]}));o.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),n.a=o},239:function(e,n,t){"use strict";var a,o=t(81),l=t.n(o),i=t(1),r=t.n(i),d=t(13),b=t.n(d),u=t(238),c=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=u.a.locals||{},p.use=function(){return c++||(a=b()(u.a,s)),p},p.unuse=function(){c>0&&!--c&&(a(),a=null)};var g=p,f=t(10),m=t(2);n.a=function(e){return Object(i.useLayoutEffect)((function(){return g.use(),function(){g.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(l.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},375:function(e,n,t){"use strict";t.r(n);var a=t(239),o=t(1),l=t.n(o),i=t(79),r=t(52),d=t(78),b=t(34),u=t(10),c=t(16),s=t(15),p=t(80),g=t(39),f=t(40),m=t(2),h=t(17),_=t(4),v=t(5),x=t(8);function w(){return(w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var j=function(e){var n,t,o,j,O,y=e=e.parentProps,F=y.setAttributes,M=y.attributes,T=M.headSpace,C=M.headingColor,H=M.subHeadingColor,E=M.backgroundColor,k=M.separatorColor,S=M.separatorFillColor,z=M.separatorBg,B=M.separatorBorder,P=M.borderFocus,L=M.headingTag,I=M.headFontSizeType,Y=M.headFontSize,U=M.headFontSizeTablet,A=M.headFontSizeMobile,V=M.headFontFamily,D=M.headFontWeight,G=M.headFontSubset,N=M.headLineHeightType,R=M.headLineHeight,W=M.headLineHeightTablet,J=M.headLineHeightMobile,q=M.headLoadGoogleFonts,K=M.timelinAlignment,Q=M.arrowlinAlignment,X=M.subHeadFontSizeType,Z=M.subHeadFontSize,$=M.subHeadFontSizeTablet,ee=M.subHeadFontSizeMobile,ne=M.subHeadFontFamily,te=M.subHeadFontWeight,ae=M.subHeadFontSubset,oe=M.subHeadLineHeightType,le=M.subHeadLineHeight,ie=M.subHeadLineHeightTablet,re=M.subHeadLineHeightMobile,de=M.subHeadLoadGoogleFonts,be=M.separatorwidth,ue=M.borderwidth,ce=M.connectorBgsize,se=M.dateBottomspace,pe=M.align,ge=M.icon,fe=M.iconColor,me=M.dateColor,he=M.dateFontsizeType,_e=M.dateFontsize,ve=M.dateFontsizeTablet,xe=M.dateFontsizeMobile,we=M.dateFontFamily,je=M.dateFontWeight,Oe=M.dateFontSubset,ye=M.dateLineHeightType,Fe=M.dateLineHeight,Me=M.dateLineHeightTablet,Te=M.dateLineHeightMobile,Ce=M.dateLoadGoogleFonts,He=M.iconSize,Ee=M.borderRadius,ke=M.iconFocus,Se=M.iconBgFocus,ze=M.displayPostDate,Be=M.stack,Pe=M.dateFormat,Le=M.topMargin,Ie=M.rightMargin,Ye=M.bottomMargin,Ue=M.leftMargin,Ae=M.topMarginTablet,Ve=M.rightMarginTablet,De=M.bottomMarginTablet,Ge=M.leftMarginTablet,Ne=M.topMarginMobile,Re=M.rightMarginMobile,We=M.bottomMarginMobile,Je=M.leftMarginMobile,qe=M.marginUnit,Ke=M.mobileMarginUnit,Qe=M.tabletMarginUnit,Xe=M.marginLink,Ze=M.topPadding,$e=M.rightPadding,en=M.bottomPadding,nn=M.leftPadding,tn=M.topPaddingTablet,an=M.rightPaddingTablet,on=M.bottomPaddingTablet,ln=M.leftPaddingTablet,rn=M.topPaddingMobile,dn=M.rightPaddingMobile,bn=M.bottomPaddingMobile,un=M.leftPaddingMobile,cn=M.paddingUnit,sn=M.mobilePaddingUnit,pn=M.tabletPaddingUnit,gn=M.paddingLink,fn=new Date;if(1==q){var mn={google:{families:[V+(D?":"+D:"")]}};n=l.a.createElement(r.a,{config:mn})}if(1==de){var hn={google:{families:[ne+(te?":"+te:"")]}};t=l.a.createElement(r.a,{config:hn})}if(1==Ce){var vn={google:{families:[we+(je?":"+je:"")]}};o=l.a.createElement(r.a,{config:vn})}return l.a.createElement(l.a.Fragment,null,l.a.createElement(_.BlockControls,null,l.a.createElement(_.BlockAlignmentToolbar,{value:pe,onChange:function(e){F({align:e})},controls:["center","left","right"]})),l.a.createElement(_.InspectorControls,null,l.a.createElement(d.a,null,l.a.createElement(b.b,b.a.general,l.a.createElement(v.PanelBody,{title:Object(m.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(g.a,{setAttributes:F,label:Object(m.__)("Orientation","ultimate-addons-for-gutenberg"),data:{value:K,label:"timelinAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:l.a.createElement(v.Icon,{icon:Object(u.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:l.a.createElement(v.Icon,{icon:Object(u.a)("fa fa-align-center")}),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:l.a.createElement(v.Icon,{icon:Object(u.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),l.a.createElement(g.a,{setAttributes:F,label:Object(m.__)("Arrow Alignment","ultimate-addons-for-gutenberg"),data:{value:Q,label:"arrowlinAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:Object(m.__)("Top","ultimate-addons-for-gutenberg"),tooltip:Object(m.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(m.__)("Bottom","ultimate-addons-for-gutenberg"),tooltip:Object(m.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"center",label:Object(m.__)("Center","ultimate-addons-for-gutenberg"),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")}],showIcons:!1}),l.a.createElement(g.a,{setAttributes:F,label:Object(m.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:Be,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:"None",tooltip:Object(m.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:"Tablet",tooltip:Object(m.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:"Mobile",tooltip:Object(m.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(m.__)("Note: Choose on what breakpoint the Content Timeline will stack. It will be visible on front end only.","ultimate-addons-for-gutenberg")}),l.a.createElement("h2",null,Object(m.__)("Date")),l.a.createElement(v.ToggleControl,{label:Object(m.__)("Display Date","ultimate-addons-for-gutenberg"),checked:ze,onChange:function(){Object(x.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.displayPostDate=ze})),F({displayPostDate:!ze})}}),ze&&l.a.createElement(v.SelectControl,{label:Object(m.__)("Date Format","ultimate-addons-for-gutenberg"),value:Pe,onChange:function(n){Object(x.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.dateFormat=n})),F({dateFormat:n})},options:[{value:"M j, Y",label:Object(h.dateI18n)("M j, Y",fn)},{value:"F j, Y",label:Object(h.dateI18n)("F j, Y",fn)},{value:"m/d/Y",label:Object(h.dateI18n)("m/d/Y",fn)},{value:"m-d-Y",label:Object(h.dateI18n)("m-d-Y",fn)},{value:"m.d.Y",label:Object(h.dateI18n)("m.d.Y",fn)},{value:"d M Y",label:Object(h.dateI18n)("d M Y",fn)},{value:"d F Y",label:Object(h.dateI18n)("d F Y",fn)},{value:"d-m-Y",label:Object(h.dateI18n)("d-m-Y",fn)},{value:"d.m.Y",label:Object(h.dateI18n)("d.m.Y",fn)},{value:"d/m/Y",label:Object(h.dateI18n)("d/m/Y",fn)},{value:"Y-m-d",label:Object(h.dateI18n)("Y-m-d",fn)},{value:"Y.m.d",label:Object(h.dateI18n)("Y.m.d",fn)},{value:"Y/m/d",label:Object(h.dateI18n)("Y/m/d",fn)},{value:"M, Y",label:Object(h.dateI18n)("M, Y",fn)},{value:"M Y",label:Object(h.dateI18n)("M Y",fn)},{value:"F, Y",label:Object(h.dateI18n)("F, Y",fn)},{value:"F Y",label:Object(h.dateI18n)("F Y",fn)},{value:"custom",label:Object(m.__)("Normal Text","ultimate-addons-for-gutenberg")}]})),l.a.createElement(v.PanelBody,{title:Object(m.__)("Timeline Item","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(g.a,{setAttributes:F,label:Object(m.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:L,label:"headingTag"},options:[{value:"h1",label:Object(m.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(m.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(m.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(m.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(m.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(m.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(m.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(m.__)("P","ultimate-addons-for-gutenberg")}]}),l.a.createElement(s.a,{label:Object(m.__)("Rounded Corners","ultimate-addons-for-gutenberg"),setAttributes:F,value:Ee,onChange:function(e){return F({borderRadius:e})},min:0,max:50,displayUnit:!1})),l.a.createElement(v.PanelBody,{title:Object(m.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(a.a,{label:Object(m.__)("Icon","ultimate-addons-for-gutenberg"),value:ge,onChange:function(n){Object(x.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.icon=n})),F({icon:n})}}),ge&&l.a.createElement(s.a,{label:Object(m.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:F,value:He,onChange:function(n){Object(x.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.iconSize=n})),F({iconSize:n})},min:0,max:30,displayUnit:!1}),l.a.createElement(s.a,{label:Object(m.__)("Icon Background Size","ultimate-addons-for-gutenberg"),setAttributes:F,value:ce,onChange:function(n){Object(x.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.connectorBgsize=n})),F({connectorBgsize:n})},min:25,max:90,displayUnit:!1}),l.a.createElement(s.a,{label:Object(m.__)("Border Width","ultimate-addons-for-gutenberg"),setAttributes:F,value:ue,onChange:function(n){Object(x.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.borderwidth=n})),F({borderwidth:n})},min:1,max:10,displayUnit:!1}),l.a.createElement(s.a,{label:Object(m.__)("Connector Width","ultimate-addons-for-gutenberg"),setAttributes:F,value:be,onChange:function(n){Object(x.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.separatorwidth=n})),F({separatorwidth:n})},min:1,max:10,displayUnit:!1}))),l.a.createElement(b.b,b.a.style,l.a.createElement(v.PanelBody,{title:Object(m.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(c.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:function(e){return F({headingColor:e})}}),l.a.createElement(i.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:F,loadGoogleFonts:{value:q,label:"headLoadGoogleFonts"},fontFamily:{value:V,label:"headFontFamily"},fontWeight:{value:D,label:"headFontWeight"},fontSubset:{value:G,label:"headFontSubset"},fontSizeType:{value:I,label:"headFontSizeType"},fontSize:{value:Y,label:"headFontSize"},fontSizeMobile:{value:A,label:"headFontSizeMobile"},fontSizeTablet:{value:U,label:"headFontSizeTablet"},lineHeightType:{value:N,label:"headLineHeightType"},lineHeight:{value:R,label:"headLineHeight"},lineHeightMobile:{value:J,label:"headLineHeightMobile"},lineHeightTablet:{value:W,label:"headLineHeightTablet"}})),l.a.createElement(v.PanelBody,{title:Object(m.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(c.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:H||"",onColorChange:function(e){return F({subHeadingColor:e})}}),l.a.createElement(i.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:F,loadGoogleFonts:{value:de,label:"subHeadLoadGoogleFonts"},fontFamily:{value:ne,label:"subHeadFontFamily"},fontWeight:{value:te,label:"subHeadFontWeight"},fontSubset:{value:ae,label:"subHeadFontSubset"},fontSizeType:{value:X,label:"subHeadFontSizeType"},fontSize:{value:Z,label:"subHeadFontSize"},fontSizeMobile:{value:ee,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:$,label:"subHeadFontSizeTablet"},lineHeightType:{value:oe,label:"subHeadLineHeightType"},lineHeight:{value:le,label:"subHeadLineHeight"},lineHeightMobile:{value:re,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:ie,label:"subHeadLineHeightTablet"}})),l.a.createElement(v.PanelBody,{title:Object(m.__)("Date","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(c.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:me||"",onColorChange:function(e){return F({dateColor:e})}}),ze&&l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:F,loadGoogleFonts:{value:Ce,label:"dateLoadGoogleFonts"},fontFamily:{value:we,label:"dateFontFamily"},fontWeight:{value:je,label:"dateFontWeight"},fontSubset:{value:Oe,label:"dateFontSubset"},fontSizeType:{value:he,label:"dateFontsizeType"},fontSize:{value:_e,label:"dateFontsize"},fontSizeMobile:{value:xe,label:"dateFontsizeMobile"},fontSizeTablet:{value:ve,label:"dateFontsizeTablet"},lineHeightType:{value:ye,label:"dateLineHeightType"},lineHeight:{value:Fe,label:"dateLineHeight"},lineHeightMobile:{value:Te,label:"dateLineHeightMobile"},lineHeightTablet:{value:Me,label:"dateLineHeightTablet"}}))),l.a.createElement(v.PanelBody,{title:Object(m.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(c.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:function(e){return F({backgroundColor:e})}})),(j=l.a.createElement(v.PanelBody,null,l.a.createElement(c.a,{label:Object(m.__)("Line Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:function(e){return F({separatorColor:e})}}),l.a.createElement(c.a,{label:Object(m.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:fe||"",onColorChange:function(e){return F({iconColor:e})}}),l.a.createElement(c.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:z||"",onColorChange:function(e){return F({separatorBg:e})}}),l.a.createElement(c.a,{label:Object(m.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:function(e){return F({separatorBorder:e})}})),O=l.a.createElement(v.PanelBody,null,l.a.createElement(c.a,{label:Object(m.__)("Line Color","ultimate-addons-for-gutenberg"),colorValue:S||"",onColorChange:function(e){return F({separatorFillColor:e})}}),l.a.createElement(c.a,{label:Object(m.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:ke||"",onColorChange:function(e){return F({iconFocus:e})}}),l.a.createElement(c.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Se||"",onColorChange:function(e){return F({iconBgFocus:e})}}),l.a.createElement(c.a,{label:Object(m.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:P||"",onColorChange:function(e){return F({borderFocus:e})}})),l.a.createElement(v.PanelBody,{title:Object(m.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(f.a,{tabs:[{name:"normal",title:Object(m.__)("Normal","ultimate-addons-for-gutenberg")},{name:"focus",title:Object(m.__)("Focus","ultimate-addons-for-gutenberg")}],normal:j,focus:O,disableBottomSeparator:!0}))),l.a.createElement(v.PanelBody,{title:Object(m.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{label:Object(m.__)("Heading Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:F,value:T,onChange:function(e){return F({headSpace:e})},min:0,max:50,displayUnit:!1}),ze&&"center"!==K&&l.a.createElement(s.a,{label:Object(m.__)("Date Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:F,value:se,onChange:function(e){return F({dateBottomspace:e})},min:0,max:50,displayUnit:!1}),l.a.createElement(p.a,w({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ze,label:"topPadding"},valueRight:{value:$e,label:"rightPadding"},valueBottom:{value:en,label:"bottomPadding"},valueLeft:{value:nn,label:"leftPadding"},valueTopTablet:{value:tn,label:"topPaddingTablet"},valueRightTablet:{value:an,label:"rightPaddingTablet"},valueBottomTablet:{value:on,label:"bottomPaddingTablet"},valueLeftTablet:{value:ln,label:"leftPaddingTablet"},valueTopMobile:{value:rn,label:"topPaddingMobile"},valueRightMobile:{value:dn,label:"rightPaddingMobile"},valueBottomMobile:{value:bn,label:"bottomPaddingMobile"},valueLeftMobile:{value:un,label:"leftPaddingMobile"},unit:{value:cn,label:"paddingUnit"},mUnit:{value:sn,label:"mobilePaddingUnit"},tUnit:{value:pn,label:"tabletPaddingUnit"},attributes:e,setAttributes:F,link:{value:gn,label:"paddingLink"}})),l.a.createElement(p.a,w({},e,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Le,label:"topMargin"},valueRight:{value:Ie,label:"rightMargin"},valueBottom:{value:Ye,label:"bottomMargin"},valueLeft:{value:Ue,label:"leftMargin"},valueTopTablet:{value:Ae,label:"topMarginTablet"},valueRightTablet:{value:Ve,label:"rightMarginTablet"},valueBottomTablet:{value:De,label:"bottomMarginTablet"},valueLeftTablet:{value:Ge,label:"leftMarginTablet"},valueTopMobile:{value:Ne,label:"topMarginMobile"},valueRightMobile:{value:Re,label:"rightMarginMobile"},valueBottomMobile:{value:We,label:"bottomMarginMobile"},valueLeftMobile:{value:Je,label:"leftMarginMobile"},unit:{value:qe,label:"marginUnit"},mUnit:{value:Ke,label:"mobileMarginUnit"},tUnit:{value:Qe,label:"tabletMarginUnit"},attributes:e,setAttributes:F,link:{value:Xe,label:"marginLink"}})))),l.a.createElement(b.b,b.a.advance))),n,t,o)};n.default=l.a.memo(j)}}]);