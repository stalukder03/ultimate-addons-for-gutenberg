(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[63],{272:function(e,t,n){"use strict";var a=n(15),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n',""]),t.a=o},276:function(e,t,n){"use strict";var a,o=n(99),l=n.n(o),i=n(1),r=n.n(i),b=n(14),u=n.n(b),d=n(272),c=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=d.a.locals||{},s.use=function(){return c++||(a=u()(d.a,g)),s},s.unuse=function(){c>0&&!--c&&(a(),a=null)};var p=s,f=n(12),m=n(2);t.a=function(e){return Object(i.useLayoutEffect)((function(){return p.use(),function(){p.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(l.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},517:function(e,t,n){"use strict";n.r(t);var a=n(276),o=n(2),l=n(1),i=n.n(l),r=n(10),b=n(18),u=n(51),d=n(111),c=n(17),g=n(100),s=n(39),p=n(101),f=n(16),m=n(134),_=n(81),h=n(54),v=n(5),x=n(4);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}$=jQuery;var S=[{value:"thumbnail",label:Object(o.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")}],y=function(e){var t,n,y,w,O=e=e.parentProps,j=O.setAttributes,C=O.attributes,F=O.deviceType,E=C.headingAlign,H=C.headingColor,B=C.subHeadingColor,M=C.prefixColor,z=C.prefixFontSize,L=C.prefixFontSizeType,k=C.prefixFontSizeTablet,I=C.prefixFontSizeMobile,P=C.prefixFontFamily,A=C.prefixFontWeight,W=C.prefixFontSubset,U=C.prefixLineHeightType,R=C.prefixLineHeight,D=C.prefixLineHeightTablet,G=C.prefixLineHeightMobile,V=C.prefixTextTransform,N=C.prefixTextDecoration,J=C.prefixLoadGoogleFonts,Q=C.headingTag,q=C.headFontSize,K=C.headFontSizeType,X=C.headFontSizeTablet,Y=C.headFontSizeMobile,Z=C.headFontFamily,ee=C.headFontWeight,te=C.headFontSubset,ne=C.headLineHeightType,ae=C.headLineHeight,oe=C.headLineHeightTablet,le=C.headLineHeightMobile,ie=C.headLoadGoogleFonts,re=C.subHeadFontSize,be=C.subHeadFontSizeType,ue=C.subHeadFontSizeTablet,de=C.subHeadFontSizeMobile,ce=C.subHeadFontFamily,ge=C.subHeadFontWeight,se=C.subHeadFontSubset,pe=C.subHeadLineHeightType,fe=C.subHeadLineHeight,me=C.subHeadLineHeightTablet,_e=C.subHeadLineHeightMobile,he=C.subHeadLineTransform,ve=C.subHeadLineDecoration,xe=C.subHeadLoadGoogleFonts,Te=C.separatorWidthType,Se=C.seperatorSpace,ye=C.seperatorTabletSpace,we=C.seperatorMobileSpace,Oe=C.headSpace,je=C.headTabletSpace,Ce=C.headMobileSpace,Fe=C.subHeadSpace,Ee=C.icon,He=C.iconColor,Be=C.iconSize,Me=C.iconSizeType,ze=C.iconimgPosition,Le=C.iconHover,ke=C.iconimgBorderRadius,Ie=C.iconimgBorderRadiusUnit,Pe=C.source_type,Ae=C.sourceAlign,We=C.seperatorPosition,Ue=C.seperatorStyle,Re=C.seperatorWidth,De=C.seperatorColor,Ge=C.seperatorThickness,Ve=C.thicknessUnit,Ne=C.ctaType,Je=C.ctaText,$e=C.ctaLink,Qe=C.ctaTarget,qe=C.ctaIcon,Ke=C.ctaIconPosition,Xe=C.ctaIconSpace,Ye=C.ctaIconSpaceType,Ze=C.ctaLinkColor,et=C.ctaFontSize,tt=C.ctaFontSizeType,nt=C.ctaFontSizeMobile,at=C.ctaFontSizeTablet,ot=C.ctaTextTransform,lt=C.ctaTextDecoration,it=C.ctaFontFamily,rt=C.ctaFontWeight,bt=C.ctaFontSubset,ut=C.ctaLoadGoogleFonts,dt=C.ctaBtnLinkColor,ct=C.ctaLinkHoverColor,gt=C.ctaBgHoverColor,st=C.ctaBgColor,pt=C.paddingBtnUnit,ft=C.mobilePaddingBtnUnit,mt=C.tabletPaddingBtnUnit,_t=C.paddingBtnTop,ht=C.paddingBtnBottom,vt=C.paddingBtnLeft,xt=C.paddingBtnRight,Tt=C.paddingBtnTopTablet,St=C.paddingBtnRightTablet,yt=C.paddingBtnBottomTablet,wt=C.paddingBtnLeftTablet,Ot=C.paddingBtnTopMobile,jt=C.paddingBtnRightMobile,Ct=C.paddingBtnBottomMobile,Ft=C.paddingBtnLeftMobile,Et=C.ctaBorderStyle,Ht=C.ctaBorderColor,Bt=C.ctaBorderhoverColor,Mt=C.ctaBorderWidth,zt=C.ctaBorderRadius,Lt=C.prefixSpace,kt=C.prefixTabletSpace,It=C.prefixMobileSpace,Pt=C.iconLeftMargin,At=C.iconRightMargin,Wt=C.iconTopMargin,Ut=C.iconBottomMargin,Rt=C.iconMarginTopTablet,Dt=C.iconMarginRightTablet,Gt=C.iconMarginBottomTablet,Vt=C.iconMarginLeftTablet,Nt=C.iconMarginTopMobile,Jt=C.iconMarginRightMobile,$t=C.iconMarginBottomMobile,Qt=C.iconMarginLeftMobile,qt=C.iconMarginUnit,Kt=C.iconMobilePaddingUnit,Xt=C.iconTabletPaddingUnit,Yt=C.iconImage,Zt=C.imageSize,en=C.imageWidth,tn=C.imageWidthMobile,nn=C.imageWidthTablet,an=C.imageWidthType,on=C.imageWidthUnit,ln=C.stack,rn=C.showPrefix,bn=C.showTitle,un=C.showDesc,dn=C.inheritFromTheme,cn=C.spacingLink,gn=C.headLineTransform,sn=C.headLineDecoration,pn=C.prefixSpaceUnit,fn=C.headSpaceUnit,mn=C.seperatorSpaceUnit,hn=C.subHeadSpaceUnit,vn=C.subHeadTabletSpace,xn=C.subHeadMobileSpace,Tn=function(e){var t=[];return $.each(e,(function(e){var n={value:e,label:e};t.push(n)})),t};if(Yt&&Yt.sizes&&(S=Tn(Yt.sizes)),Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),Yt&&(null==Yt.url||""==Yt.url?Object(o.__)("Select Image","ultimate-addons-for-gutenberg"):Object(o.__)("Replace Image","ultimate-addons-for-gutenberg")),1==J){var Sn={google:{families:[P+(A?":"+A:"")]}};t=i.a.createElement(u.a,{config:Sn})}if(1==ie){var yn={google:{families:[Z+(ee?":"+ee:"")]}};w=i.a.createElement(u.a,{config:yn})}if(1==xe){var wn={google:{families:[ce+(ge?":"+ge:"")]}};n=i.a.createElement(u.a,{config:wn})}if(1==xe){var On={google:{families:[it+(rt?":"+rt:"")]}};y=i.a.createElement(u.a,{config:On})}return i.a.createElement(i.a.Fragment,null,("above-title"==ze||"below-title"==ze)&&i.a.createElement(v.BlockControls,{key:"controls"},i.a.createElement(v.AlignmentToolbar,{value:E,onChange:function(e){return j({headingAlign:e})}})),i.a.createElement(v.InspectorControls,null,i.a.createElement(g.a,null,i.a.createElement(s.b,s.a.general,i.a.createElement(x.PanelBody,{title:Object(o.__)("Image/Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(x.SelectControl,{label:Object(o.__)("Select Position","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return j({iconimgPosition:e})},options:[{value:"above-title",label:Object(o.__)("Above Title","ultimate-addons-for-gutenberg")},{value:"below-title",label:Object(o.__)("Below Title","ultimate-addons-for-gutenberg")},{value:"left-title",label:Object(o.__)("Left of Title","ultimate-addons-for-gutenberg")},{value:"right-title",label:Object(o.__)("Right of Title","ultimate-addons-for-gutenberg")},{value:"left",label:Object(o.__)("Left of Text and Title","ultimate-addons-for-gutenberg")},{value:"right",label:Object(o.__)("Right of Text and Title","ultimate-addons-for-gutenberg")}]}),("left"==ze||"right"==ze)&&i.a.createElement(x.SelectControl,{label:Object(o.__)("Stack on","ultimate-addons-for-gutenberg"),value:ln,options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(o.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(o.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(o.__)("Note: Choose on what breakpoint the Info Box will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return j({stack:e})}}),i.a.createElement(x.SelectControl,{label:Object(o.__)("Select Source","ultimate-addons-for-gutenberg"),value:Pe,onChange:function(e){return j({source_type:e})},options:[{value:"icon",label:Object(o.__)("Icon","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")}]}),ze&&"above-title"!==ze&&"below-title"!==ze&&i.a.createElement(x.SelectControl,{label:Object(o.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),value:Ae,onChange:function(e){return j({sourceAlign:e})},options:[{value:"top",label:Object(o.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(o.__)("Middle","ultimate-addons-for-gutenberg")}]}),"icon"==Pe&&i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{label:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return j({icon:e})}})),"image"==Pe&&i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,{onSelectImage:function(e){if(e&&e.url)if(e.type&&"image"===e.type){if(e.sizes){var t=Tn(e.sizes);S=t}j({iconImage:e})}else j({iconImage:null});else j({iconImage:null})},backgroundImage:Yt,onRemoveImage:function(){j({iconImage:""})}}),Yt&&"null"!==Yt.url&&""!==Yt.url&&i.a.createElement(x.SelectControl,{label:Object(o.__)("Image Size","ultimate-addons-for-gutenberg"),options:S,value:Zt,onChange:function(e){return j({imageSize:e})}}))),i.a.createElement(x.PanelBody,{title:Object(o.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(x.ToggleControl,{checked:rn,onChange:function(){return j({showPrefix:!rn})},label:Object(o.__)("Enable Prefix","ultimate-addons-for-gutenberg")}),i.a.createElement(x.ToggleControl,{checked:bn,onChange:function(){return j({showTitle:!bn})},label:Object(o.__)("Enable Title","ultimate-addons-for-gutenberg")}),bn&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.SelectControl,{label:Object(o.__)("Title Tag","ultimate-addons-for-gutenberg"),value:Q,onChange:function(e){return j({headingTag:e})},options:[{value:"h1",label:Object(o.__)("H1")},{value:"h2",label:Object(o.__)("H2")},{value:"h3",label:Object(o.__)("H3")},{value:"h4",label:Object(o.__)("H4")},{value:"h5",label:Object(o.__)("H5")},{value:"h6",label:Object(o.__)("H6")}]}),i.a.createElement(h.a,{setAttributes:j,label:Object(o.__)("Title Tag (Temp)","ultimate-addons-for-gutenberg"),data:{value:Q,label:"headingTag"},options:[{value:"h1",label:Object(o.__)("H1")},{value:"h2",label:Object(o.__)("H2")},{value:"h3",label:Object(o.__)("H3")},{value:"h4",label:Object(o.__)("H4")},{value:"h5",label:Object(o.__)("H5")},{value:"h6",label:Object(o.__)("H6")}]})),i.a.createElement(x.ToggleControl,{checked:un,onChange:function(){return j({showDesc:!un})},label:Object(o.__)("Enable Description","ultimate-addons-for-gutenberg")})),i.a.createElement(x.PanelBody,{title:Object(o.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(x.SelectControl,{label:Object(o.__)("Style"),value:Ue,onChange:function(e){return j({seperatorStyle:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(o.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(o.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(o.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(o.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==Ue&&i.a.createElement(x.SelectControl,{label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),value:We,onChange:function(e){return j({seperatorPosition:e})},options:[{value:"after_icon",label:Object(o.__)("After Icon/Image","ultimate-addons-for-gutenberg")},{value:"after_prefix",label:Object(o.__)("After Prefix","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(o.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_desc",label:Object(o.__)("After Description","ultimate-addons-for-gutenberg")}]})),i.a.createElement(x.PanelBody,{title:Object(o.__)("Call To Action","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(x.SelectControl,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:Ne,onChange:function(e){return j({ctaType:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"text",label:Object(o.__)("Text","ultimate-addons-for-gutenberg")},{value:"button",label:Object(o.__)("Button","ultimate-addons-for-gutenberg")},{value:"all",label:Object(o.__)("Complete Box","ultimate-addons-for-gutenberg")}]}),("text"===Ne||"button"===Ne)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.TextControl,{label:Object(o.__)("Text","ultimate-addons-for-gutenberg"),value:Je,onChange:function(e){return j({ctaText:e})}})),"none"!==Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.TextControl,{label:Object(o.__)("Link","ultimate-addons-for-gutenberg"),value:$e,onChange:function(e){return j({ctaLink:e})}})),"all"!==Ne&&"none"!==Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{label:Object(o.__)("Button Icon","ultimate-addons-for-gutenberg"),value:qe,onChange:function(e){return j({ctaIcon:e})}})),""!==qe&&"all"!==Ne&&"none"!==Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.SelectControl,{label:Object(o.__)("Icon Position","ultimate-addons-for-gutenberg"),value:Ke,onChange:function(e){return j({ctaIconPosition:e})},options:[{value:"before",label:Object(o.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(o.__)("After Text","ultimate-addons-for-gutenberg")}]}),i.a.createElement(f.a,{label:Object(o.__)("Icon Spacing","ultimate-addons-for-gutenberg"),setAttributes:j,value:Xe,onChange:function(e){return j({ctaIconSpace:e})},min:0,max:50,unit:{value:Ye,label:"ctaIconSpaceType"}})),"button"===Ne&&i.a.createElement(x.ToggleControl,{checked:dn,onChange:function(){return j({inheritFromTheme:!dn})},label:Object(o.__)("Inherit from Theme","ultimate-addons-for-gutenberg")}),"none"!==Ne&&i.a.createElement(x.ToggleControl,{checked:Qe,onChange:function(){return j({ctaTarget:!Qe})},label:Object(o.__)("Open in new Window","ultimate-addons-for-gutenberg")}))),i.a.createElement(s.b,s.a.style,i.a.createElement(i.a.Fragment,null,""!==Ee&&i.a.createElement(x.PanelBody,{title:"Icon/Image",initialOpen:!1},i.a.createElement(i.a.Fragment,null," ","icon"==Pe&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:He||"",onColorChange:function(e){return j({iconColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg"),colorValue:Le||"",onColorChange:function(e){return j({iconHover:e})}}),i.a.createElement(f.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:j,value:Be,onChange:function(e){return j({iconSize:e})},min:0,max:300,unit:{value:Me,label:"iconSizeType"}})),"image"==Pe&&Yt&&"null"!==Yt.url&&""!==Yt.url&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.ToggleControl,{checked:an,onChange:function(){return j({imageWidthType:!an})},label:Object(o.__)("Custom Width","ultimate-addons-for-gutenberg"),help:Object(o.__)("Turn this off to inherit the natural width of Image.","ultimate-addons-for-gutenberg")}),an&&i.a.createElement(m.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:en,label:"imageWidth"},tablet:{value:nn,label:"imageWidthTablet"},mobile:{value:tn,label:"imageWidthMobile"}},min:0,max:500,unit:{value:on,label:"imageWidthUnit"},setAttributes:j}),i.a.createElement(f.a,{label:Object(o.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),setAttributes:j,value:ke,onChange:function(e){return j({iconimgBorderRadius:e})},min:0,max:500,unit:{value:Ie,label:"iconimgBorderRadiusUnit"}})),i.a.createElement(p.a,T({},e,{label:Object(o.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Wt,label:"iconTopMargin"},valueRight:{value:At,label:"iconRightMargin"},valueBottom:{value:Ut,label:"iconBottomMargin"},valueLeft:{value:Pt,label:"iconLeftMargin"},valueTopTablet:{value:Rt,label:"iconMarginTopTablet"},valueRightTablet:{value:Dt,label:"iconMarginRightTablet"},valueBottomTablet:{value:Gt,label:"iconMarginBottomTablet"},valueLeftTablet:{value:Vt,label:"iconMarginLeftTablet"},valueTopMobile:{value:Nt,label:"iconMarginTopMobile"},valueRightMobile:{value:Jt,label:"iconMarginRightMobile"},valueBottomMobile:{value:$t,label:"iconMarginBottomMobile"},valueLeftMobile:{value:Qt,label:"iconMarginLeftMobile"},unit:{value:qt,label:"iconMarginUnit"},mUnit:{value:Kt,label:"iconMobilePaddingUnit"},tUnit:{value:Xt,label:"iconTabletPaddingUnit"},deviceType:F,attributes:C,setAttributes:j,link:{value:cn,label:"spacingLink"}})))),rn&&i.a.createElement(x.PanelBody,{title:"Prefix",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:function(e){return j({prefixColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:j,loadGoogleFonts:{value:J,label:"prefixLoadGoogleFonts"},fontFamily:{value:P,label:"prefixFontFamily"},fontWeight:{value:A,label:"prefixFontWeight"},fontSubset:{value:W,label:"prefixFontSubset"},fontSizeType:{value:L,label:"prefixFontSizeType"},fontSize:{value:z,label:"prefixFontSize"},fontSizeMobile:{value:I,label:"prefixFontSizeMobile"},fontSizeTablet:{value:k,label:"prefixFontSizeTablet"},lineHeightType:{value:U,label:"prefixLineHeightType"},lineHeight:{value:R,label:"prefixLineHeight"},lineHeightMobile:{value:G,label:"prefixLineHeightMobile"},lineHeightTablet:{value:D,label:"prefixLineHeightTablet"},transform:{value:V,label:"prefixTextTransform"},decoration:{value:N,label:"prefixTextDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Lt,label:"prefixSpace"},tablet:{value:kt,label:"prefixTabletSpace"},mobile:{value:It,label:"prefixMobileSpace"}},min:0,max:50,unit:{value:pn,label:"prefixSpaceUnit"},setAttributes:j}))),bn&&i.a.createElement(x.PanelBody,{title:"Title",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:H||"",onColorChange:function(e){return j({headingColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:j,loadGoogleFonts:{value:ie,label:"headLoadGoogleFonts"},fontFamily:{value:Z,label:"headFontFamily"},fontWeight:{value:ee,label:"headFontWeight"},fontSubset:{value:te,label:"headFontSubset"},fontSizeType:{value:K,label:"headFontSizeType"},fontSize:{value:q,label:"headFontSize"},fontSizeMobile:{value:Y,label:"headFontSizeMobile"},fontSizeTablet:{value:X,label:"headFontSizeTablet"},lineHeightType:{value:ne,label:"headLineHeightType"},lineHeight:{value:ae,label:"headLineHeight"},lineHeightMobile:{value:le,label:"headLineHeightMobile"},lineHeightTablet:{value:oe,label:"headLineHeightTablet"},transform:{value:gn,label:"headLineTransform"},decoration:{value:sn,label:"headLineDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Oe,label:"headSpace"},tablet:{value:je,label:"headTabletSpace"},mobile:{value:Ce,label:"headMobileSpace"}},min:0,max:50,unit:{value:fn,label:"headSpaceUnit"},setAttributes:j}))),"null"!==Ue&&i.a.createElement(x.PanelBody,{title:"Separator",initialOpen:!1},i.a.createElement(i.a.Fragment,null,"none"!==Ue&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:j,value:Re,onChange:function(e){return j({seperatorWidth:e})},min:0,max:"%"==Te?100:500,unit:{value:Te,label:"separatorWidthType"},units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),i.a.createElement(f.a,{label:Object(o.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:j,value:Ge,onChange:function(e){return j({seperatorThickness:e})},min:0,max:10,unit:{value:Ve,label:"thicknessUnit"}})),i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:De||"",onColorChange:function(e){return j({seperatorColor:e})}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Se,label:"seperatorSpace"},tablet:{value:ye,label:"seperatorTabletSpace"},mobile:{value:we,label:"seperatorMobileSpace"}},min:0,max:50,unit:{value:mn,label:"seperatorSpaceUnit"},setAttributes:j}))),un&&i.a.createElement(x.PanelBody,{title:"Description",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:function(e){return j({subHeadingColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:j,loadGoogleFonts:{value:xe,label:"subHeadLoadGoogleFonts"},fontFamily:{value:ce,label:"subHeadFontFamily"},fontWeight:{value:ge,label:"subHeadFontWeight"},fontSubset:{value:se,label:"subHeadFontSubset"},fontSizeType:{value:be,label:"subHeadFontSizeType"},fontSize:{value:re,label:"subHeadFontSize"},fontSizeMobile:{value:de,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ue,label:"subHeadFontSizeTablet"},lineHeightType:{value:pe,label:"subHeadLineHeightType"},lineHeight:{value:fe,label:"subHeadLineHeight"},lineHeightMobile:{value:_e,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:me,label:"subHeadLineHeightTablet"},transform:{value:he,label:"subHeadLineTransform"},decoration:{value:ve,label:"subHeadLineDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Fe,label:"subHeadSpace"},tablet:{value:vn,label:"subHeadTabletSpace"},mobile:{value:xn,label:"subHeadMobileSpace"}},min:0,max:50,unit:{value:hn,label:"subHeadSpaceUnit"},setAttributes:j}))),dn&&"text"===Ne&&i.a.createElement(x.PanelBody,{title:"CTA",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ze||"",onColorChange:function(e){return j({ctaLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:ct||"",onColorChange:function(e){return j({ctaLinkHoverColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:j,loadGoogleFonts:{value:ut,label:"ctaLoadGoogleFonts"},fontFamily:{value:it,label:"ctaFontFamily"},fontWeight:{value:rt,label:"ctaFontWeight"},fontSubset:{value:bt,label:"ctaFontSubset"},fontSizeType:{value:tt,label:"ctaFontSizeType"},fontSize:{value:et,label:"ctaFontSize"},fontSizeMobile:{value:nt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:at,label:"ctaFontSizeTablet"},transform:{value:ot,label:"ctaTextTransform"},decoration:{value:lt,label:"ctaTextDecoration"},disableLineHeight:!0}))),!dn&&"none"!==Ne&&"all"!==Ne&&i.a.createElement(x.PanelBody,{title:"CTA",initialOpen:!1},i.a.createElement(i.a.Fragment,null,"text"===Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ze||"",onColorChange:function(e){return j({ctaLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:ct||"",onColorChange:function(e){return j({ctaLinkHoverColor:e})}})),!dn&&"button"===Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Button Text Color","ultimate-addons-for-gutenberg"),colorValue:dt||"",onColorChange:function(e){return j({ctaBtnLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Button Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:ct||"",onColorChange:function(e){return j({ctaLinkHoverColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:st||"",onColorChange:function(e){return j({ctaBgColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Background Hover Color","ultimate-addons-for-gutenberg"),colorValue:gt||"",onColorChange:function(e){return j({ctaBgHoverColor:e})}})),"text"===Ne&&i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:j,loadGoogleFonts:{value:ut,label:"ctaLoadGoogleFonts"},fontFamily:{value:it,label:"ctaFontFamily"},fontWeight:{value:rt,label:"ctaFontWeight"},fontSubset:{value:bt,label:"ctaFontSubset"},fontSizeType:{value:tt,label:"ctaFontSizeType"},fontSize:{value:et,label:"ctaFontSize"},fontSizeMobile:{value:nt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:at,label:"ctaFontSizeTablet"},transform:{value:ot,label:"ctaTextTransform"},decoration:{value:lt,label:"ctaTextDecoration"},disableLineHeight:!0}),!dn&&"button"===Ne&&i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:j,loadGoogleFonts:{value:ut,label:"ctaLoadGoogleFonts"},fontFamily:{value:it,label:"ctaFontFamily"},fontWeight:{value:rt,label:"ctaFontWeight"},fontSubset:{value:bt,label:"ctaFontSubset"},fontSizeType:{value:tt,label:"ctaFontSizeType"},fontSize:{value:et,label:"ctaFontSize"},fontSizeMobile:{value:nt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:at,label:"ctaFontSizeTablet"},transform:{value:ot,label:"ctaTextTransform"},decoration:{value:lt,label:"ctaTextDecoration"},disableLineHeight:!0}),!dn&&"button"==Ne&&i.a.createElement(p.a,T({},e,{label:Object(o.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:_t,label:"paddingBtnTop"},valueRight:{value:xt,label:"paddingBtnRight"},valueBottom:{value:ht,label:"paddingBtnBottom"},valueLeft:{value:vt,label:"paddingBtnLeft"},valueTopTablet:{value:Tt,label:"paddingBtnTopTablet"},valueRightTablet:{value:St,label:"paddingBtnRightTablet"},valueBottomTablet:{value:yt,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:wt,label:"paddingBtnLeftTablet"},valueTopMobile:{value:Ot,label:"paddingBtnTopMobile"},valueRightMobile:{value:jt,label:"paddingBtnRightMobile"},valueBottomMobile:{value:Ct,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:Ft,label:"paddingBtnLeftMobile"},unit:{value:pt,label:"paddingBtnUnit"},mUnit:{value:ft,label:"mobilePaddingBtnUnit"},tUnit:{value:mt,label:"tabletPaddingBtnUnit"},deviceType:F,attributes:C,setAttributes:j,link:{value:cn,label:"spacingLink"}})),!dn&&"button"==Ne&&i.a.createElement(d.a,{setAttributes:j,borderStyle:{value:Et,label:"ctaBorderStyle",title:Object(o.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Mt,label:"ctaBorderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:zt,label:"ctaBorderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Ht,label:"ctaBorderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Bt,label:"ctaBorderhoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")}}))))),i.a.createElement(s.b,s.a.advance))),i.a.createElement(l.Suspense,{fallback:Object(r.a)()},t,n,y,w))};t.default=i.a.memo(y)}}]);