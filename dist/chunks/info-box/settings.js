(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[63],{272:function(e,t,n){"use strict";var a=n(15),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n',""]),t.a=o},276:function(e,t,n){"use strict";var a,o=n(99),l=n.n(o),i=n(1),r=n.n(i),b=n(14),u=n.n(b),d=n(272),c=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return c++||(a=u()(d.a,g)),p},p.unuse=function(){c>0&&!--c&&(a(),a=null)};var s=p,f=n(12),m=n(2);t.a=function(e){return Object(i.useLayoutEffect)((function(){return s.use(),function(){s.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("label",{className:"components-base-control__label uag-icon-picker__label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(l.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},517:function(e,t,n){"use strict";n.r(t);var a=n(276),o=n(2),l=n(1),i=n.n(l),r=n(10),b=n(18),u=n(51),d=n(111),c=n(17),g=n(100),p=n(39),s=n(101),f=n(16),m=n(134),_=n(81),h=n(5),v=n(4);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}$=jQuery;var T=[{value:"thumbnail",label:Object(o.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")}],S=function(e){var t,n,S,y,w=e=e.parentProps,C=w.setAttributes,F=w.attributes,O=w.deviceType,j=F.headingAlign,E=F.headingColor,H=F.subHeadingColor,B=F.prefixColor,M=F.prefixFontSize,z=F.prefixFontSizeType,L=F.prefixFontSizeTablet,k=F.prefixFontSizeMobile,I=F.prefixFontFamily,P=F.prefixFontWeight,W=F.prefixFontSubset,A=F.prefixLineHeightType,U=F.prefixLineHeight,R=F.prefixLineHeightTablet,D=F.prefixLineHeightMobile,G=F.prefixTextTransform,V=F.prefixTextDecoration,N=F.prefixLoadGoogleFonts,J=F.headingTag,Q=F.headFontSize,q=F.headFontSizeType,K=F.headFontSizeTablet,X=F.headFontSizeMobile,Y=F.headFontFamily,Z=F.headFontWeight,ee=F.headFontSubset,te=F.headLineHeightType,ne=F.headLineHeight,ae=F.headLineHeightTablet,oe=F.headLineHeightMobile,le=F.headLoadGoogleFonts,ie=F.subHeadFontSize,re=F.subHeadFontSizeType,be=F.subHeadFontSizeTablet,ue=F.subHeadFontSizeMobile,de=F.subHeadFontFamily,ce=F.subHeadFontWeight,ge=F.subHeadFontSubset,pe=F.subHeadLineHeightType,se=F.subHeadLineHeight,fe=F.subHeadLineHeightTablet,me=F.subHeadLineHeightMobile,_e=F.subHeadLineTransform,he=F.subHeadLineDecoration,ve=F.subHeadLoadGoogleFonts,xe=F.separatorWidthType,Te=F.seperatorSpace,Se=F.seperatorTabletSpace,ye=F.seperatorMobileSpace,we=F.headSpace,Ce=F.headTabletSpace,Fe=F.headMobileSpace,Oe=F.subHeadSpace,je=F.icon,Ee=F.iconColor,He=F.iconSize,Be=F.iconSizeType,Me=F.iconimgPosition,ze=F.iconHover,Le=F.iconimgBorderRadius,ke=F.iconimgBorderRadiusUnit,Ie=F.source_type,Pe=F.sourceAlign,We=F.seperatorPosition,Ae=F.seperatorStyle,Ue=F.seperatorWidth,Re=F.seperatorColor,De=F.seperatorThickness,Ge=F.thicknessUnit,Ve=F.ctaType,Ne=F.ctaText,Je=F.ctaLink,$e=F.ctaTarget,Qe=F.ctaIcon,qe=F.ctaIconPosition,Ke=F.ctaIconSpace,Xe=F.ctaIconSpaceType,Ye=F.ctaLinkColor,Ze=F.ctaFontSize,et=F.ctaFontSizeType,tt=F.ctaFontSizeMobile,nt=F.ctaFontSizeTablet,at=F.ctaTextTransform,ot=F.ctaTextDecoration,lt=F.ctaFontFamily,it=F.ctaFontWeight,rt=F.ctaFontSubset,bt=F.ctaLoadGoogleFonts,ut=F.ctaBtnLinkColor,dt=F.ctaLinkHoverColor,ct=F.ctaBgHoverColor,gt=F.ctaBgColor,pt=F.paddingBtnUnit,st=F.mobilePaddingBtnUnit,ft=F.tabletPaddingBtnUnit,mt=F.paddingBtnTop,_t=F.paddingBtnBottom,ht=F.paddingBtnLeft,vt=F.paddingBtnRight,xt=F.paddingBtnTopTablet,Tt=F.paddingBtnRightTablet,St=F.paddingBtnBottomTablet,yt=F.paddingBtnLeftTablet,wt=F.paddingBtnTopMobile,Ct=F.paddingBtnRightMobile,Ft=F.paddingBtnBottomMobile,Ot=F.paddingBtnLeftMobile,jt=F.ctaBorderStyle,Et=F.ctaBorderColor,Ht=F.ctaBorderhoverColor,Bt=F.ctaBorderWidth,Mt=F.ctaBorderRadius,zt=F.prefixSpace,Lt=F.prefixTabletSpace,kt=F.prefixMobileSpace,It=F.iconLeftMargin,Pt=F.iconRightMargin,Wt=F.iconTopMargin,At=F.iconBottomMargin,Ut=F.iconMarginTopTablet,Rt=F.iconMarginRightTablet,Dt=F.iconMarginBottomTablet,Gt=F.iconMarginLeftTablet,Vt=F.iconMarginTopMobile,Nt=F.iconMarginRightMobile,Jt=F.iconMarginBottomMobile,$t=F.iconMarginLeftMobile,Qt=F.iconMarginUnit,qt=F.iconMobilePaddingUnit,Kt=F.iconTabletPaddingUnit,Xt=F.iconImage,Yt=F.imageSize,Zt=F.imageWidth,en=F.imageWidthMobile,tn=F.imageWidthTablet,nn=F.imageWidthType,an=F.imageWidthUnit,on=F.stack,ln=F.showPrefix,rn=F.showTitle,bn=F.showDesc,un=F.inheritFromTheme,dn=F.spacingLink,cn=F.headLineTransform,gn=F.headLineDecoration,pn=F.prefixSpaceUnit,sn=F.headSpaceUnit,fn=F.seperatorSpaceUnit,mn=F.subHeadSpaceUnit,hn=F.subHeadTabletSpace,vn=F.subHeadMobileSpace,xn=function(e){var t=[];return $.each(e,(function(e){var n={value:e,label:e};t.push(n)})),t};if(Xt&&Xt.sizes&&(T=xn(Xt.sizes)),Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),Xt&&(null==Xt.url||""==Xt.url?Object(o.__)("Select Image","ultimate-addons-for-gutenberg"):Object(o.__)("Replace Image","ultimate-addons-for-gutenberg")),1==N){var Tn={google:{families:[I+(P?":"+P:"")]}};t=i.a.createElement(u.a,{config:Tn})}if(1==le){var Sn={google:{families:[Y+(Z?":"+Z:"")]}};y=i.a.createElement(u.a,{config:Sn})}if(1==ve){var yn={google:{families:[de+(ce?":"+ce:"")]}};n=i.a.createElement(u.a,{config:yn})}if(1==ve){var wn={google:{families:[lt+(it?":"+it:"")]}};S=i.a.createElement(u.a,{config:wn})}return i.a.createElement(i.a.Fragment,null,("above-title"==Me||"below-title"==Me)&&i.a.createElement(h.BlockControls,{key:"controls"},i.a.createElement(h.AlignmentToolbar,{value:j,onChange:function(e){return C({headingAlign:e})}})),i.a.createElement(h.InspectorControls,null,i.a.createElement(g.a,null,i.a.createElement(p.b,p.a.general,i.a.createElement(v.PanelBody,{title:Object(o.__)("Image/Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(v.SelectControl,{label:Object(o.__)("Select Position","ultimate-addons-for-gutenberg"),value:Me,onChange:function(e){return C({iconimgPosition:e})},options:[{value:"above-title",label:Object(o.__)("Above Title","ultimate-addons-for-gutenberg")},{value:"below-title",label:Object(o.__)("Below Title","ultimate-addons-for-gutenberg")},{value:"left-title",label:Object(o.__)("Left of Title","ultimate-addons-for-gutenberg")},{value:"right-title",label:Object(o.__)("Right of Title","ultimate-addons-for-gutenberg")},{value:"left",label:Object(o.__)("Left of Text and Title","ultimate-addons-for-gutenberg")},{value:"right",label:Object(o.__)("Right of Text and Title","ultimate-addons-for-gutenberg")}]}),("left"==Me||"right"==Me)&&i.a.createElement(v.SelectControl,{label:Object(o.__)("Stack on","ultimate-addons-for-gutenberg"),value:on,options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(o.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(o.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(o.__)("Note: Choose on what breakpoint the Info Box will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return C({stack:e})}}),i.a.createElement(v.SelectControl,{label:Object(o.__)("Select Source","ultimate-addons-for-gutenberg"),value:Ie,onChange:function(e){return C({source_type:e})},options:[{value:"icon",label:Object(o.__)("Icon","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")}]}),Me&&"above-title"!==Me&&"below-title"!==Me&&i.a.createElement(v.SelectControl,{label:Object(o.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),value:Pe,onChange:function(e){return C({sourceAlign:e})},options:[{value:"top",label:Object(o.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(o.__)("Middle","ultimate-addons-for-gutenberg")}]}),"icon"==Ie&&i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{label:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),value:je,onChange:function(e){return C({icon:e})}})),"image"==Ie&&i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,{onSelectImage:function(e){if(e&&e.url)if(e.type&&"image"===e.type){if(e.sizes){var t=xn(e.sizes);T=t}C({iconImage:e})}else C({iconImage:null});else C({iconImage:null})},backgroundImage:Xt,onRemoveImage:function(){C({iconImage:""})}}),Xt&&"null"!==Xt.url&&""!==Xt.url&&i.a.createElement(v.SelectControl,{label:Object(o.__)("Image Size","ultimate-addons-for-gutenberg"),options:T,value:Yt,onChange:function(e){return C({imageSize:e})}}))),i.a.createElement(v.PanelBody,{title:Object(o.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(v.ToggleControl,{checked:ln,onChange:function(){return C({showPrefix:!ln})},label:Object(o.__)("Enable Prefix","ultimate-addons-for-gutenberg")}),i.a.createElement(v.ToggleControl,{checked:rn,onChange:function(){return C({showTitle:!rn})},label:Object(o.__)("Enable Title","ultimate-addons-for-gutenberg")}),rn&&i.a.createElement(i.a.Fragment,null,i.a.createElement(v.SelectControl,{label:Object(o.__)("Title Tag","ultimate-addons-for-gutenberg"),value:J,onChange:function(e){return C({headingTag:e})},options:[{value:"h1",label:Object(o.__)("H1")},{value:"h2",label:Object(o.__)("H2")},{value:"h3",label:Object(o.__)("H3")},{value:"h4",label:Object(o.__)("H4")},{value:"h5",label:Object(o.__)("H5")},{value:"h6",label:Object(o.__)("H6")}]})),i.a.createElement(v.ToggleControl,{checked:bn,onChange:function(){return C({showDesc:!bn})},label:Object(o.__)("Enable Description","ultimate-addons-for-gutenberg")})),i.a.createElement(v.PanelBody,{title:Object(o.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(v.SelectControl,{label:Object(o.__)("Style"),value:Ae,onChange:function(e){return C({seperatorStyle:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(o.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(o.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(o.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(o.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==Ae&&i.a.createElement(v.SelectControl,{label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),value:We,onChange:function(e){return C({seperatorPosition:e})},options:[{value:"after_icon",label:Object(o.__)("After Icon/Image","ultimate-addons-for-gutenberg")},{value:"after_prefix",label:Object(o.__)("After Prefix","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(o.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_desc",label:Object(o.__)("After Description","ultimate-addons-for-gutenberg")}]})),i.a.createElement(v.PanelBody,{title:Object(o.__)("Call To Action","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(v.SelectControl,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:Ve,onChange:function(e){return C({ctaType:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"text",label:Object(o.__)("Text","ultimate-addons-for-gutenberg")},{value:"button",label:Object(o.__)("Button","ultimate-addons-for-gutenberg")},{value:"all",label:Object(o.__)("Complete Box","ultimate-addons-for-gutenberg")}]}),("text"===Ve||"button"===Ve)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(v.TextControl,{label:Object(o.__)("Text","ultimate-addons-for-gutenberg"),value:Ne,onChange:function(e){return C({ctaText:e})}})),"none"!==Ve&&i.a.createElement(i.a.Fragment,null,i.a.createElement(v.TextControl,{label:Object(o.__)("Link","ultimate-addons-for-gutenberg"),value:Je,onChange:function(e){return C({ctaLink:e})}})),"all"!==Ve&&"none"!==Ve&&i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{label:Object(o.__)("Button Icon","ultimate-addons-for-gutenberg"),value:Qe,onChange:function(e){return C({ctaIcon:e})}})),""!==Qe&&"all"!==Ve&&"none"!==Ve&&i.a.createElement(i.a.Fragment,null,i.a.createElement(v.SelectControl,{label:Object(o.__)("Icon Position","ultimate-addons-for-gutenberg"),value:qe,onChange:function(e){return C({ctaIconPosition:e})},options:[{value:"before",label:Object(o.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(o.__)("After Text","ultimate-addons-for-gutenberg")}]}),i.a.createElement(f.a,{label:Object(o.__)("Icon Spacing","ultimate-addons-for-gutenberg"),setAttributes:C,value:Ke,onChange:function(e){return C({ctaIconSpace:e})},min:0,max:50,unit:{value:Xe,label:"ctaIconSpaceType"}})),"button"===Ve&&i.a.createElement(v.ToggleControl,{checked:un,onChange:function(){return C({inheritFromTheme:!un})},label:Object(o.__)("Inherit from Theme","ultimate-addons-for-gutenberg")}),"none"!==Ve&&i.a.createElement(v.ToggleControl,{checked:$e,onChange:function(){return C({ctaTarget:!$e})},label:Object(o.__)("Open in new Window","ultimate-addons-for-gutenberg")}))),i.a.createElement(p.b,p.a.style,i.a.createElement(i.a.Fragment,null,""!==je&&i.a.createElement(v.PanelBody,{title:"Icon/Image",initialOpen:!1},i.a.createElement(i.a.Fragment,null," ","icon"==Ie&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ee||"",onColorChange:function(e){return C({iconColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg"),colorValue:ze||"",onColorChange:function(e){return C({iconHover:e})}}),i.a.createElement(f.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:C,value:He,onChange:function(e){return C({iconSize:e})},min:0,max:300,unit:{value:Be,label:"iconSizeType"}})),"image"==Ie&&Xt&&"null"!==Xt.url&&""!==Xt.url&&i.a.createElement(i.a.Fragment,null,i.a.createElement(v.ToggleControl,{checked:nn,onChange:function(){return C({imageWidthType:!nn})},label:Object(o.__)("Custom Width","ultimate-addons-for-gutenberg"),help:Object(o.__)("Turn this off to inherit the natural width of Image.","ultimate-addons-for-gutenberg")}),nn&&i.a.createElement(m.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:Zt,label:"imageWidth"},tablet:{value:tn,label:"imageWidthTablet"},mobile:{value:en,label:"imageWidthMobile"}},min:0,max:500,unit:{value:an,label:"imageWidthUnit"},setAttributes:C}),i.a.createElement(f.a,{label:Object(o.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),setAttributes:C,value:Le,onChange:function(e){return C({iconimgBorderRadius:e})},min:0,max:500,unit:{value:ke,label:"iconimgBorderRadiusUnit"}})),i.a.createElement(s.a,x({},e,{label:Object(o.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Wt,label:"iconTopMargin"},valueRight:{value:Pt,label:"iconRightMargin"},valueBottom:{value:At,label:"iconBottomMargin"},valueLeft:{value:It,label:"iconLeftMargin"},valueTopTablet:{value:Ut,label:"iconMarginTopTablet"},valueRightTablet:{value:Rt,label:"iconMarginRightTablet"},valueBottomTablet:{value:Dt,label:"iconMarginBottomTablet"},valueLeftTablet:{value:Gt,label:"iconMarginLeftTablet"},valueTopMobile:{value:Vt,label:"iconMarginTopMobile"},valueRightMobile:{value:Nt,label:"iconMarginRightMobile"},valueBottomMobile:{value:Jt,label:"iconMarginBottomMobile"},valueLeftMobile:{value:$t,label:"iconMarginLeftMobile"},unit:{value:Qt,label:"iconMarginUnit"},mUnit:{value:qt,label:"iconMobilePaddingUnit"},tUnit:{value:Kt,label:"iconTabletPaddingUnit"},deviceType:O,attributes:F,setAttributes:C,link:{value:dn,label:"spacingLink"}})))),ln&&i.a.createElement(v.PanelBody,{title:"Prefix",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:function(e){return C({prefixColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:F,setAttributes:C,loadGoogleFonts:{value:N,label:"prefixLoadGoogleFonts"},fontFamily:{value:I,label:"prefixFontFamily"},fontWeight:{value:P,label:"prefixFontWeight"},fontSubset:{value:W,label:"prefixFontSubset"},fontSizeType:{value:z,label:"prefixFontSizeType"},fontSize:{value:M,label:"prefixFontSize"},fontSizeMobile:{value:k,label:"prefixFontSizeMobile"},fontSizeTablet:{value:L,label:"prefixFontSizeTablet"},lineHeightType:{value:A,label:"prefixLineHeightType"},lineHeight:{value:U,label:"prefixLineHeight"},lineHeightMobile:{value:D,label:"prefixLineHeightMobile"},lineHeightTablet:{value:R,label:"prefixLineHeightTablet"},transform:{value:G,label:"prefixTextTransform"},decoration:{value:V,label:"prefixTextDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:zt,label:"prefixSpace"},tablet:{value:Lt,label:"prefixTabletSpace"},mobile:{value:kt,label:"prefixMobileSpace"}},min:0,max:50,unit:{value:pn,label:"prefixSpaceUnit"},setAttributes:C}))),rn&&i.a.createElement(v.PanelBody,{title:"Title",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:function(e){return C({headingColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:F,setAttributes:C,loadGoogleFonts:{value:le,label:"headLoadGoogleFonts"},fontFamily:{value:Y,label:"headFontFamily"},fontWeight:{value:Z,label:"headFontWeight"},fontSubset:{value:ee,label:"headFontSubset"},fontSizeType:{value:q,label:"headFontSizeType"},fontSize:{value:Q,label:"headFontSize"},fontSizeMobile:{value:X,label:"headFontSizeMobile"},fontSizeTablet:{value:K,label:"headFontSizeTablet"},lineHeightType:{value:te,label:"headLineHeightType"},lineHeight:{value:ne,label:"headLineHeight"},lineHeightMobile:{value:oe,label:"headLineHeightMobile"},lineHeightTablet:{value:ae,label:"headLineHeightTablet"},transform:{value:cn,label:"headLineTransform"},decoration:{value:gn,label:"headLineDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:we,label:"headSpace"},tablet:{value:Ce,label:"headTabletSpace"},mobile:{value:Fe,label:"headMobileSpace"}},min:0,max:50,unit:{value:sn,label:"headSpaceUnit"},setAttributes:C}))),"null"!==Ae&&i.a.createElement(v.PanelBody,{title:"Separator",initialOpen:!1},i.a.createElement(i.a.Fragment,null,"none"!==Ae&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:C,value:Ue,onChange:function(e){return C({seperatorWidth:e})},min:0,max:"%"==xe?100:500,unit:{value:xe,label:"separatorWidthType"},units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),i.a.createElement(f.a,{label:Object(o.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:C,value:De,onChange:function(e){return C({seperatorThickness:e})},min:0,max:10,unit:{value:Ge,label:"thicknessUnit"}})),i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Re||"",onColorChange:function(e){return C({seperatorColor:e})}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Te,label:"seperatorSpace"},tablet:{value:Se,label:"seperatorTabletSpace"},mobile:{value:ye,label:"seperatorMobileSpace"}},min:0,max:50,unit:{value:fn,label:"seperatorSpaceUnit"},setAttributes:C}))),bn&&i.a.createElement(v.PanelBody,{title:"Description",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:H||"",onColorChange:function(e){return C({subHeadingColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:F,setAttributes:C,loadGoogleFonts:{value:ve,label:"subHeadLoadGoogleFonts"},fontFamily:{value:de,label:"subHeadFontFamily"},fontWeight:{value:ce,label:"subHeadFontWeight"},fontSubset:{value:ge,label:"subHeadFontSubset"},fontSizeType:{value:re,label:"subHeadFontSizeType"},fontSize:{value:ie,label:"subHeadFontSize"},fontSizeMobile:{value:ue,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:be,label:"subHeadFontSizeTablet"},lineHeightType:{value:pe,label:"subHeadLineHeightType"},lineHeight:{value:se,label:"subHeadLineHeight"},lineHeightMobile:{value:me,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:fe,label:"subHeadLineHeightTablet"},transform:{value:_e,label:"subHeadLineTransform"},decoration:{value:he,label:"subHeadLineDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Oe,label:"subHeadSpace"},tablet:{value:hn,label:"subHeadTabletSpace"},mobile:{value:vn,label:"subHeadMobileSpace"}},min:0,max:50,unit:{value:mn,label:"subHeadSpaceUnit"},setAttributes:C}))),un&&"text"===Ve&&i.a.createElement(v.PanelBody,{title:"CTA",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ye||"",onColorChange:function(e){return C({ctaLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:dt||"",onColorChange:function(e){return C({ctaLinkHoverColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:F,setAttributes:C,loadGoogleFonts:{value:bt,label:"ctaLoadGoogleFonts"},fontFamily:{value:lt,label:"ctaFontFamily"},fontWeight:{value:it,label:"ctaFontWeight"},fontSubset:{value:rt,label:"ctaFontSubset"},fontSizeType:{value:et,label:"ctaFontSizeType"},fontSize:{value:Ze,label:"ctaFontSize"},fontSizeMobile:{value:tt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:nt,label:"ctaFontSizeTablet"},transform:{value:at,label:"ctaTextTransform"},decoration:{value:ot,label:"ctaTextDecoration"},disableLineHeight:!0}))),!un&&"none"!==Ve&&"all"!==Ve&&i.a.createElement(v.PanelBody,{title:"CTA",initialOpen:!1},i.a.createElement(i.a.Fragment,null,"text"===Ve&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ye||"",onColorChange:function(e){return C({ctaLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:dt||"",onColorChange:function(e){return C({ctaLinkHoverColor:e})}})),!un&&"button"===Ve&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Button Text Color","ultimate-addons-for-gutenberg"),colorValue:ut||"",onColorChange:function(e){return C({ctaBtnLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Button Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:dt||"",onColorChange:function(e){return C({ctaLinkHoverColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:gt||"",onColorChange:function(e){return C({ctaBgColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Background Hover Color","ultimate-addons-for-gutenberg"),colorValue:ct||"",onColorChange:function(e){return C({ctaBgHoverColor:e})}})),"text"===Ve&&i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:F,setAttributes:C,loadGoogleFonts:{value:bt,label:"ctaLoadGoogleFonts"},fontFamily:{value:lt,label:"ctaFontFamily"},fontWeight:{value:it,label:"ctaFontWeight"},fontSubset:{value:rt,label:"ctaFontSubset"},fontSizeType:{value:et,label:"ctaFontSizeType"},fontSize:{value:Ze,label:"ctaFontSize"},fontSizeMobile:{value:tt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:nt,label:"ctaFontSizeTablet"},transform:{value:at,label:"ctaTextTransform"},decoration:{value:ot,label:"ctaTextDecoration"},disableLineHeight:!0}),!un&&"button"===Ve&&i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:F,setAttributes:C,loadGoogleFonts:{value:bt,label:"ctaLoadGoogleFonts"},fontFamily:{value:lt,label:"ctaFontFamily"},fontWeight:{value:it,label:"ctaFontWeight"},fontSubset:{value:rt,label:"ctaFontSubset"},fontSizeType:{value:et,label:"ctaFontSizeType"},fontSize:{value:Ze,label:"ctaFontSize"},fontSizeMobile:{value:tt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:nt,label:"ctaFontSizeTablet"},transform:{value:at,label:"ctaTextTransform"},decoration:{value:ot,label:"ctaTextDecoration"},disableLineHeight:!0}),!un&&"button"==Ve&&i.a.createElement(s.a,x({},e,{label:Object(o.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:mt,label:"paddingBtnTop"},valueRight:{value:vt,label:"paddingBtnRight"},valueBottom:{value:_t,label:"paddingBtnBottom"},valueLeft:{value:ht,label:"paddingBtnLeft"},valueTopTablet:{value:xt,label:"paddingBtnTopTablet"},valueRightTablet:{value:Tt,label:"paddingBtnRightTablet"},valueBottomTablet:{value:St,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:yt,label:"paddingBtnLeftTablet"},valueTopMobile:{value:wt,label:"paddingBtnTopMobile"},valueRightMobile:{value:Ct,label:"paddingBtnRightMobile"},valueBottomMobile:{value:Ft,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:Ot,label:"paddingBtnLeftMobile"},unit:{value:pt,label:"paddingBtnUnit"},mUnit:{value:st,label:"mobilePaddingBtnUnit"},tUnit:{value:ft,label:"tabletPaddingBtnUnit"},deviceType:O,attributes:F,setAttributes:C,link:{value:dn,label:"spacingLink"}})),!un&&"button"==Ve&&i.a.createElement(d.a,{setAttributes:C,borderStyle:{value:jt,label:"ctaBorderStyle",title:Object(o.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Bt,label:"ctaBorderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Mt,label:"ctaBorderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Et,label:"ctaBorderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Ht,label:"ctaBorderhoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")}}))))),i.a.createElement(p.b,p.a.advance))),i.a.createElement(l.Suspense,{fallback:Object(r.a)()},t,n,S,y))};t.default=i.a.memo(S)}}]);