(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[8],{225:function(e,t,n){"use strict";var o=n(11),a=n.n(o)()((function(e){return e[1]}));a.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=a},226:function(e,t,n){"use strict";var o,a=n(74),i=n.n(a),l=n(0),r=n.n(l),d=n(10),c=n.n(d),b=n(225),u=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=b.a.locals||{},p.use=function(){return u++||(o=c()(b.a,s)),p},p.unuse=function(){u>0&&!--u&&(o(),o=null)};var f=p,g=n(8),m=n(1);t.a=function(e){return Object(l.useLayoutEffect)((function(){return f.use(),function(){f.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(i.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:g.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},356:function(e,t,n){"use strict";n.r(t);var o=n(226),a=n(1),i=n(0),l=n.n(i),r=n(9),d=n(71),c=n(45),b=n(3),u=n(14),s=n(70),p=n(28),f=n(13),g=n(33),m=n(73),_=n(72),h=n(37),x=n(4);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var w=function(e){var t,n,w,y=e=e.parentProps,j=y.setAttributes,O=y.attributes,T=O.textAlign,C=O.titleColor,S=O.descColor,F=O.titleTag,E=O.titleFontSize,k=O.titleFontSizeType,B=O.titleFontSizeMobile,z=O.titleFontSizeTablet,P=O.titleFontFamily,L=O.titleFontWeight,H=O.titleFontSubset,M=O.titleLineHeightType,A=O.titleLineHeight,I=O.titleLineHeightTablet,U=O.titleLineHeightMobile,N=O.titleLoadGoogleFonts,R=O.descFontSize,W=O.descFontSizeType,G=O.descFontSizeMobile,V=O.descFontSizeTablet,D=O.descFontFamily,J=O.descFontWeight,q=O.descFontSubset,K=O.descLineHeightType,Q=O.descLineHeight,X=O.descLineHeightTablet,Y=O.descLineHeightMobile,Z=O.descLoadGoogleFonts,$=O.titleSpace,ee=O.descSpace,te=O.ctaPosition,ne=O.buttonAlign,oe=O.ctaType,ae=O.ctaText,ie=O.ctaLink,le=O.ctaTarget,re=O.ctaIcon,de=O.ctaIconPosition,ce=O.ctaIconSpace,be=O.ctaFontSize,ue=O.ctaFontSizeType,se=O.ctaFontSizeMobile,pe=O.ctaFontSizeTablet,fe=O.ctaFontFamily,ge=O.ctaFontWeight,me=O.ctaFontSubset,_e=O.ctaLoadGoogleFonts,he=O.contentWidth,xe=O.ctaBtnLinkColor,ve=O.ctaBgHoverColor,we=O.ctaBgColor,ye=O.ctaTopPadding,je=O.ctaRightPadding,Oe=O.ctaBottomPadding,Te=O.ctaLeftPadding,Ce=O.ctaTopPaddingTablet,Se=O.ctaRightPaddingTablet,Fe=O.ctaBottomPaddingTablet,Ee=O.ctaLeftPaddingTablet,ke=O.ctaTopPaddingMobile,Be=O.ctaRightPaddingMobile,ze=O.ctaBottomPaddingMobile,Pe=O.ctaLeftPaddingMobile,Le=O.ctaPaddingUnit,He=O.mobileCTAPaddingUnit,Me=O.tabletCTAPaddingUnit,Ae=O.ctaPaddingLink,Ie=O.ctaBorderStyle,Ue=O.ctaBorderColor,Ne=O.ctaBorderhoverColor,Re=O.ctaBorderWidth,We=O.ctaBorderRadius,Ge=O.stack,Ve=O.ctaLeftSpace,De=O.ctaRightSpace,Je=O.ctaLinkHoverColor,qe=O.inheritFromTheme;if(1==_e){var Ke={google:{families:[fe+(ge?":"+ge:"")]}};t=l.a.createElement(c.a,{config:Ke})}if(1==N){var Qe={google:{families:[P+(L?":"+L:"")]}};n=l.a.createElement(c.a,{config:Qe})}if(1==Z){var Xe={google:{families:[D+(J?":"+J:"")]}};w=l.a.createElement(c.a,{config:Xe})}return l.a.createElement(i.Suspense,{fallback:Object(r.a)()},l.a.createElement(b.BlockControls,{key:"controls"},l.a.createElement(b.AlignmentToolbar,{value:T,onChange:function(e){return j({textAlign:e})}})),l.a.createElement(b.InspectorControls,null,l.a.createElement(s.a,null,l.a.createElement(p.b,p.a.general,"all"!==oe&&"none"!==oe&&l.a.createElement(x.PanelBody,{title:Object(a.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(g.a,{setAttributes:j,label:Object(a.__)("Button Position","ultimate-addons-for-gutenberg"),data:{value:te,label:"ctaPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"right",label:Object(a.__)("Normal","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{value:"below-title",label:Object(a.__)("Stack","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Stack","ultimate-addons-for-gutenberg")}],showIcons:!1}),"right"==te&&l.a.createElement(g.a,{setAttributes:j,label:Object(a.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:Ge,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(a.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(a.__)("Tablet","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(a.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(a.__)("Note: Choose on what breakpoint the CTA button will stack.","ultimate-addons-for-gutenberg")}),("text"===oe||"button"===oe)&&l.a.createElement(l.a.Fragment,null,"right"===te&&l.a.createElement(f.a,{label:Object(a.__)("Content Width (%)","ultimate-addons-for-gutenberg"),setAttributes:j,value:he,onChange:function(e){return j({contentWidth:e})},min:0,max:100,displayUnit:!1})),te&&"right"===te&&l.a.createElement(g.a,{setAttributes:j,label:Object(a.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),data:{value:ne,label:"buttonAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:Object(a.__)("Top","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(a.__)("Middle","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Middle","ultimate-addons-for-gutenberg")}],showIcons:!1}),l.a.createElement(g.a,{setAttributes:j,label:Object(a.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:F,label:"titleTag"},options:[{value:"h1",label:Object(a.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(a.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(a.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(a.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(a.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(a.__)("H6","ultimate-addons-for-gutenberg")}]})),l.a.createElement(x.PanelBody,{title:Object(a.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(g.a,{setAttributes:j,label:Object(a.__)("Type","ultimate-addons-for-gutenberg"),data:{value:oe,label:"ctaType"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(a.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("None","ultimate-addons-for-gutenberg")},{value:"text",label:Object(a.__)("Text","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Text","ultimate-addons-for-gutenberg")},{value:"button",label:Object(a.__)("Button","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Button","ultimate-addons-for-gutenberg")},{value:"all",label:Object(a.__)("Complete Box","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Complete Box","ultimate-addons-for-gutenberg")}],showIcons:!1}),("text"===oe||"button"===oe)&&l.a.createElement(l.a.Fragment,null,l.a.createElement(x.TextControl,{label:Object(a.__)("Text","ultimate-addons-for-gutenberg"),value:ae,onChange:function(e){return j({ctaText:e})}}),"button"===oe&&l.a.createElement(x.ToggleControl,{label:Object(a.__)("Inherit from Theme","ultimate-addons-for-gutenberg"),checked:qe,onChange:function(){return j({inheritFromTheme:!qe})}})),"none"!==oe&&l.a.createElement(l.a.Fragment,null,l.a.createElement(x.TextControl,{label:Object(a.__)("Link","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return j({ctaLink:e})}}),l.a.createElement(x.ToggleControl,{label:Object(a.__)("Open in new Window","ultimate-addons-for-gutenberg"),checked:le,onChange:function(){return j({ctaTarget:!le})}})),"all"!==oe&&"none"!==oe&&l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{label:Object(a.__)("Icon","ultimate-addons-for-gutenberg"),value:re,onChange:function(e){return j({ctaIcon:e})}}),""!==re&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{setAttributes:j,label:Object(a.__)("Icon Position","ultimate-addons-for-gutenberg"),data:{value:de,label:"ctaIconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"before",label:Object(a.__)("Before Text","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(a.__)("After Text","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("After Text","ultimate-addons-for-gutenberg")}],showIcons:!1}),l.a.createElement(f.a,{label:Object(a.__)("Icon Spacing","ultimate-addons-for-gutenberg"),setAttributes:j,value:ce,onChange:function(e){return j({ctaIconSpace:e})},min:0,max:50,displayUnit:!1}))))),l.a.createElement(p.b,p.a.style,l.a.createElement(x.PanelBody,{title:Object(a.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(d.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:j,loadGoogleFonts:{value:N,label:"titleLoadGoogleFonts"},fontFamily:{value:P,label:"titleFontFamily"},fontWeight:{value:L,label:"titleFontWeight"},fontSubset:{value:H,label:"titleFontSubset"},fontSizeType:{value:k,label:"titleFontSizeType"},fontSize:{value:E,label:"titleFontSize"},fontSizeMobile:{value:B,label:"titleFontSizeMobile"},fontSizeTablet:{value:z,label:"titleFontSizeTablet"},lineHeightType:{value:M,label:"titleLineHeightType"},lineHeight:{value:A,label:"titleLineHeight"},lineHeightMobile:{value:U,label:"titleLineHeightMobile"},lineHeightTablet:{value:I,label:"titleLineHeightTablet"}}),l.a.createElement(u.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:function(e){return j({titleColor:e})}})),l.a.createElement(x.PanelBody,{title:Object(a.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(d.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:j,loadGoogleFonts:{value:Z,label:"descLoadGoogleFonts"},fontFamily:{value:D,label:"descFontFamily"},fontWeight:{value:J,label:"descFontWeight"},fontSubset:{value:q,label:"descFontSubset"},fontSizeType:{value:W,label:"descFontSizeType"},fontSize:{value:R,label:"descFontSize"},fontSizeMobile:{value:G,label:"descFontSizeMobile"},fontSizeTablet:{value:V,label:"descFontSizeTablet"},lineHeightType:{value:K,label:"descLineHeightType"},lineHeight:{value:Q,label:"descLineHeight"},lineHeightMobile:{value:Y,label:"descLineHeightMobile"},lineHeightTablet:{value:X,label:"descLineHeightTablet"}}),l.a.createElement(u.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:S||"",onColorChange:function(e){return j({descColor:e})}})),!qe&&"all"!==oe&&"none"!==oe&&l.a.createElement(x.PanelBody,{title:Object(a.__)("CTA","ultimate-addons-for-gutenberg"),initialOpen:!1},("text"===oe||"button"===oe)&&l.a.createElement(l.a.Fragment,null,!qe&&"button"===oe||"text"===oe&&l.a.createElement(d.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:j,loadGoogleFonts:{value:_e,label:"ctaLoadGoogleFonts"},fontFamily:{value:fe,label:"ctaFontFamily"},fontWeight:{value:ge,label:"ctaFontWeight"},fontSubset:{value:me,label:"ctaFontSubset"},fontSizeType:{value:ue,label:"ctaFontSizeType"},fontSize:{value:be,label:"ctaFontSize"},fontSizeMobile:{value:se,label:"ctaFontSizeMobile"},fontSizeTablet:{value:pe,label:"ctaFontSizeTablet"},disableLineHeight:!0})),"text"===oe&&l.a.createElement(h.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{label:Object(a.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:xe||"",onColorChange:function(e){return j({ctaBtnLinkColor:e})}})),hover:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{label:Object(a.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Je||"",onColorChange:function(e){return j({ctaLinkHoverColor:e})}})),disableBottomSeparator:!0}),"button"===oe&&!qe&&l.a.createElement(h.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{label:Object(a.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:xe||"",onColorChange:function(e){return j({ctaBtnLinkColor:e})}}),l.a.createElement(u.a,{label:Object(a.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:we||"",onColorChange:function(e){return j({ctaBgColor:e})}})),hover:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{label:Object(a.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Je||"",onColorChange:function(e){return j({ctaLinkHoverColor:e})}}),l.a.createElement(u.a,{label:Object(a.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:ve||"",onColorChange:function(e){return j({ctaBgHoverColor:e})}})),disableBottomSeparator:!0})),"button"==oe&&!qe&&l.a.createElement(x.PanelBody,{title:Object(a.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(m.a,{setAttributes:j,borderStyle:{value:Ie,label:"ctaBorderStyle",title:Object(a.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Re,label:"ctaBorderWidth",title:Object(a.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:We,label:"ctaBorderRadius",title:Object(a.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Ue,label:"ctaBorderColor",title:Object(a.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Ne,label:"ctaBorderhoverColor",title:Object(a.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),l.a.createElement(x.PanelBody,{title:Object(a.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(f.a,{label:Object(a.__)("Heading Bottom Margin","ultimate-addons-for-gutenberg"),setAttributes:j,value:$,onChange:function(e){return j({titleSpace:e})},min:0,max:500,displayUnit:!1}),l.a.createElement(f.a,{label:Object(a.__)("Description Bottom Margin","ultimate-addons-for-gutenberg"),setAttributes:j,value:ee,onChange:function(e){return j({descSpace:e})},min:0,max:500,displayUnit:!1}),"left"===T&&"right"===te&&l.a.createElement(f.a,{label:Object(a.__)("Content Left Margin","ultimate-addons-for-gutenberg"),setAttributes:j,value:Ve,onChange:function(e){return j({ctaLeftSpace:e})},min:0,max:500,displayUnit:!1}),"right"===T&&"right"===te&&l.a.createElement(f.a,{label:Object(a.__)("Content Right Margin","ultimate-addons-for-gutenberg"),setAttributes:j,value:De,onChange:function(e){return j({ctaRightSpace:e})},min:0,max:500,displayUnit:!1}),"button"==oe&&!qe&&l.a.createElement(l.a.Fragment,null,l.a.createElement(_.a,v({},e,{label:Object(a.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ye,label:"ctaTopPadding"},valueRight:{value:je,label:"ctaRightPadding"},valueBottom:{value:Oe,label:"ctaBottomPadding"},valueLeft:{value:Te,label:"ctaLeftPadding"},valueTopTablet:{value:Ce,label:"ctaTopPaddingTablet"},valueRightTablet:{value:Se,label:"ctaRightPaddingTablet"},valueBottomTablet:{value:Fe,label:"ctaBottomPaddingTablet"},valueLeftTablet:{value:Ee,label:"ctaLeftPaddingTablet"},valueTopMobile:{value:ke,label:"ctaTopPaddingMobile"},valueRightMobile:{value:Be,label:"ctaRightPaddingMobile"},valueBottomMobile:{value:ze,label:"ctaBottomPaddingMobile"},valueLeftMobile:{value:Pe,label:"ctaLeftPaddingMobile"},unit:{value:Le,label:"ctaPaddingUnit"},mUnit:{value:He,label:"mobileCTAPaddingUnit"},tUnit:{value:Me,label:"tabletCTAPaddingUnit"},attributes:O,setAttributes:j,link:{value:Ae,label:"ctaPaddingLink"}}))))),l.a.createElement(p.b,p.a.advance))),t,n,w)};t.default=l.a.memo(w)}}]);