(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[100],{272:function(e,n,t){"use strict";var a=t(15),i=t.n(a)()((function(e){return e[1]}));i.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n',""]),n.a=i},276:function(e,n,t){"use strict";var a,i=t(99),o=t.n(i),l=t(1),r=t.n(l),b=t(14),c=t.n(b),d=t(272),u=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=d.a.locals||{},g.use=function(){return u++||(a=c()(d.a,s)),g},g.unuse=function(){u>0&&!--u&&(a(),a=null)};var p=g,f=t(12),m=t(2);n.a=function(e){return Object(l.useLayoutEffect)((function(){return p.use(),function(){p.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("label",{className:"components-base-control__label uag-icon-picker__label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(o.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},519:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),o=t(2),l=t(276),r=t(12),b=t(10),c=t(18),d=t(51),u=t(100),s=t(39),g=t(17),p=t(16),f=t(101),m=t(54),_=t(5),h=t(4);function x(){return(x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var v=[{value:"thumbnail",label:Object(o.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")}],w=function(e){var n,t,w,y=e=e.parentProps,S=y.setAttributes,j=y.attributes,O=y.deviceType,T=j.align,M=j.tag,E=j.titleColor,F=j.prefixColor,L=j.descColor,z=j.titleFontFamily,k=j.titleFontWeight,C=j.titleFontSubset,H=j.titleFontSizeType,I=j.titleFontSize,R=j.titleFontSizeMobile,N=j.titleFontSizeTablet,B=j.titleLineHeightType,U=j.titleLineHeight,A=j.titleLineHeightMobile,P=j.titleLineHeightTablet,W=j.prefixFontFamily,G=j.prefixFontWeight,V=j.prefixFontSubset,q=j.prefixFontSizeType,D=j.prefixFontSize,J=j.prefixFontSizeMobile,K=j.prefixFontSizeTablet,Q=j.prefixLineHeightType,X=j.prefixLineHeight,Y=j.prefixLineHeightMobile,Z=j.prefixLineHeightTablet,$=j.descFontFamily,ee=j.descFontWeight,ne=j.descFontSubset,te=j.descFontSizeType,ae=j.descFontSize,ie=j.descFontSizeMobile,oe=j.descFontSizeTablet,le=j.descLineHeightType,re=j.descLineHeight,be=j.descLineHeightMobile,ce=j.descLineHeightTablet,de=j.socialFontSize,ue=j.socialFontSizeType,se=j.socialFontSizeMobile,ge=j.socialFontSizeTablet,pe=j.titleLoadGoogleFonts,fe=j.prefixLoadGoogleFonts,me=j.descLoadGoogleFonts,_e=j.image,he=j.imgStyle,xe=j.imgAlign,ve=j.imgSize,we=j.imgWidth,ye=j.imgPosition,Se=j.titleSpace,je=j.descSpace,Oe=j.prefixSpace,Te=j.twitterIcon,Me=j.fbIcon,Ee=j.linkedinIcon,Fe=j.pinIcon,Le=j.twitterLink,ze=j.fbLink,ke=j.linkedinLink,Ce=j.pinLink,He=j.socialColor,Ie=j.socialHoverColor,Re=j.socialSpace,Ne=j.socialTarget,Be=j.socialEnable,Ue=j.stack,Ae=j.imageLeftMargin,Pe=j.imageRightMargin,We=j.imageTopMargin,Ge=j.imageBottomMargin,Ve=j.imageMarginTopTablet,qe=j.imageMarginRightTablet,De=j.imageMarginBottomTablet,Je=j.imageMarginLeftTablet,Ke=j.imageMarginTopMobile,Qe=j.imageMarginRightMobile,Xe=j.imageMarginBottomMobile,Ye=j.imageMarginLeftMobile,Ze=j.imageMarginUnit,$e=j.spacingLink;if("above"==ye&&("center"==T?(S({imageLeftMargin:""}),S({imageRightMargin:""}),S({imageMarginLeftMobile:""}),S({imageMarginRightMobile:""}),S({imageMarginLeftTablet:""}),S({imageMarginRightTablet:""})):"left"==T?(S({imageRightMargin:""}),S({imageMarginRightMobile:""}),S({imageMarginRightTablet:""})):"right"==T&&(S({imageLeftMargin:""}),S({imageMarginLeftMobile:""}),S({imageMarginLeftTablet:""}))),_e&&_e.sizes&&(v=function(e){var n=[];for(var t in e)n.push({value:t,label:t});return n}(_e.sizes)),1==pe){var en={google:{families:[z+(k?":"+k:"")]}};n=i.a.createElement(d.a,{config:en})}if(1==fe){var nn={google:{families:[W+(G?":"+G:"")]}};t=i.a.createElement(d.a,{config:nn})}if(1==me){var tn={google:{families:[$+(ee?":"+ee:"")]}};w=i.a.createElement(d.a,{config:tn})}return i.a.createElement(i.a.Fragment,null,"above"==ye&&i.a.createElement(_.BlockControls,{key:"controls"},i.a.createElement(_.AlignmentToolbar,{value:T,onChange:function(e){return S({align:e})}})),i.a.createElement(_.InspectorControls,null,i.a.createElement(u.a,null,i.a.createElement(s.b,s.a.general,i.a.createElement(h.PanelBody,null,i.a.createElement(h.SelectControl,{label:Object(o.__)("Title Tag","ultimate-addons-for-gutenberg"),value:M,onChange:function(e){return S({tag:e})},options:[{value:"h1",label:Object(o.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(o.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(o.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(o.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(o.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(o.__)("H6","ultimate-addons-for-gutenberg")}]}),i.a.createElement("div",{className:"uagb-bg-image"},i.a.createElement(_.MediaUpload,{title:Object(o.__)("Select Background Image","ultimate-addons-for-gutenberg"),onSelect:function(e){return S({image:e})},allowedTypes:["image"],value:_e,render:function(e){var n=e.open;return i.a.createElement(h.Button,{isSecondary:!0,onClick:n},_e?Object(o.__)("Replace image","ultimate-addons-for-gutenberg"):Object(o.__)("Select Image","ultimate-addons-for-gutenberg"))}})),_e&&i.a.createElement(h.Button,{className:"uagb-rm-btn",onClick:function(){return S({image:null})},isLink:!0,isDestructive:!0},Object(o.__)("Remove Image","ultimate-addons-for-gutenberg")),_e&&i.a.createElement(m.a,{setAttributes:S,label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),data:{value:ye,label:"imgPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(h.Icon,{icon:Object(r.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"above",icon:i.a.createElement(h.Icon,{icon:Object(r.a)("fa fa-align-center")}),tooltip:Object(o.__)("Above","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(h.Icon,{icon:Object(r.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),"above"!=ye&&_e&&i.a.createElement(m.a,{setAttributes:S,label:Object(o.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:Ue,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(o.__)("Tablet","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(o.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Mobile","ultimate-addons-for-gutenberg")}]}),_e&&i.a.createElement(m.a,{setAttributes:S,label:Object(o.__)("Style","ultimate-addons-for-gutenberg"),data:{value:he,label:"imgStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"normal",label:Object(o.__)("Normal","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(o.__)("Circle","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Circle","ultimate-addons-for-gutenberg")},{value:"square",label:Object(o.__)("Square","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Square","ultimate-addons-for-gutenberg")}]}),ye&&"above"!==ye&&_e&&i.a.createElement(m.a,{setAttributes:S,label:Object(o.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),data:{value:xe,label:"imgAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:Object(o.__)("Top","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(o.__)("Middle","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Middle","ultimate-addons-for-gutenberg")}]}),_e&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),options:v,value:ve,onChange:function(e){return S({imgSize:e})}}),i.a.createElement(p.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:S,value:we,onChange:function(e){return S({imgWidth:e})},min:0,max:500,displayUnit:!1}))),i.a.createElement(h.PanelBody,{title:Object(o.__)("Social Links","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(h.ToggleControl,{label:Object(o.__)("Enable Social Links","ultimate-addons-for-gutenberg"),checked:Be,onChange:function(){return S({socialEnable:!Be})}}),Be&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.ToggleControl,{label:Object(o.__)("Open Links in New Window","ultimate-addons-for-gutenberg"),checked:Ne,onChange:function(){return S({socialTarget:!Ne})}}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("p",{className:"components-base-control__label"},Object(o.__)("Twitter","ultimate-addons-for-gutenberg")),i.a.createElement(l.a,{label:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),value:Te,onChange:function(e){return S({twitterIcon:e})}}),Te&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"components-base-control__label"},Object(o.__)("URL","ultimate-addons-for-gutenberg")),i.a.createElement(h.TextControl,{value:Le,onChange:function(e){return S({twitterLink:e})},placeholder:Object(o.__)("Enter Twitter URL","ultimate-addons-for-gutenberg")})),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("p",{className:"components-base-control__label"},Object(o.__)("Facebook","ultimate-addons-for-gutenberg")),i.a.createElement(l.a,{label:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),value:Me,onChange:function(e){return S({fbIcon:e})}}),Me&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"components-base-control__label"},Object(o.__)("URL","ultimate-addons-for-gutenberg")),i.a.createElement(h.TextControl,{value:ze,onChange:function(e){return S({fbLink:e})},placeholder:Object(o.__)("Enter Facebook URL","ultimate-addons-for-gutenberg")})),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("p",{className:"components-base-control__label"},Object(o.__)("LinkedIn","ultimate-addons-for-gutenberg")),i.a.createElement(l.a,{label:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return S({linkedinIcon:e})}}),Ee&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"components-base-control__label"},Object(o.__)("URL","ultimate-addons-for-gutenberg")),i.a.createElement(h.TextControl,{value:ke,onChange:function(e){return S({linkedinLink:e})},placeholder:Object(o.__)("Enter LinkedIn URL","ultimate-addons-for-gutenberg")})),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("p",{className:"components-base-control__label"},Object(o.__)("Pinterest","ultimate-addons-for-gutenberg")),i.a.createElement(l.a,{label:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),value:Fe,onChange:function(e){return S({pinIcon:e})}}),Fe&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"components-base-control__label"},Object(o.__)("URL","ultimate-addons-for-gutenberg")),i.a.createElement(h.TextControl,{value:Ce,onChange:function(e){return S({pinLink:e})},placeholder:Object(o.__)("Enter Pinterest URL","ultimate-addons-for-gutenberg")}))))),i.a.createElement(s.b,s.a.style,i.a.createElement(h.PanelBody,{title:Object(o.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:function(e){return S({titleColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:S,loadGoogleFonts:{value:pe,label:"titleLoadGoogleFonts"},fontFamily:{value:z,label:"titleFontFamily"},fontWeight:{value:k,label:"titleFontWeight"},fontSubset:{value:C,label:"titleFontSubset"},fontSizeType:{value:H,label:"titleFontSizeType"},fontSize:{value:I,label:"titleFontSize"},fontSizeMobile:{value:R,label:"titleFontSizeMobile"},fontSizeTablet:{value:N,label:"titleFontSizeTablet"},lineHeightType:{value:B,label:"titleLineHeightType"},lineHeight:{value:U,label:"titleLineHeight"},lineHeightMobile:{value:A,label:"titleLineHeightMobile"},lineHeightTablet:{value:P,label:"titleLineHeightTablet"}}),i.a.createElement(p.a,{label:Object(o.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:S,value:Se,onChange:function(e){return S({titleSpace:e})},min:0,max:50,displayUnit:!1})),i.a.createElement(h.PanelBody,{title:Object(o.__)("Prefix","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:F||"",onColorChange:function(e){return S({prefixColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:S,loadGoogleFonts:{value:fe,label:"prefixLoadGoogleFonts"},fontFamily:{value:W,label:"prefixFontFamily"},fontWeight:{value:G,label:"prefixFontWeight"},fontSubset:{value:V,label:"prefixFontSubset"},fontSizeType:{value:q,label:"prefixFontSizeType"},fontSize:{value:D,label:"prefixFontSize"},fontSizeMobile:{value:J,label:"prefixFontSizeMobile"},fontSizeTablet:{value:K,label:"prefixFontSizeTablet"},lineHeightType:{value:Q,label:"prefixLineHeightType"},lineHeight:{value:X,label:"prefixLineHeight"},lineHeightMobile:{value:Y,label:"prefixLineHeightMobile"},lineHeightTablet:{value:Z,label:"prefixLineHeightTablet"}}),i.a.createElement(p.a,{label:Object(o.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:S,value:Oe,onChange:function(e){return S({prefixSpace:e})},min:0,max:50,displayUnit:!1})),i.a.createElement(h.PanelBody,{title:Object(o.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:L||"",onColorChange:function(e){return S({descColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:S,loadGoogleFonts:{value:me,label:"descLoadGoogleFonts"},fontFamily:{value:$,label:"descFontFamily"},fontWeight:{value:ee,label:"descFontWeight"},fontSubset:{value:ne,label:"descFontSubset"},fontSizeType:{value:te,label:"descFontSizeType"},fontSize:{value:ae,label:"descFontSize"},fontSizeMobile:{value:ie,label:"descFontSizeMobile"},fontSizeTablet:{value:oe,label:"descFontSizeTablet"},lineHeightType:{value:le,label:"descLineHeightType"},lineHeight:{value:re,label:"descLineHeight"},lineHeightMobile:{value:be,label:"descLineHeightMobile"},lineHeightTablet:{value:ce,label:"descLineHeightTablet"}}),i.a.createElement(p.a,{label:Object(o.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:S,value:je,onChange:function(e){return S({descSpace:e})},min:0,max:50,displayUnit:!1})),i.a.createElement(h.PanelBody,{title:Object(o.__)("Social Icons","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:He||"",onColorChange:function(e){return S({socialColor:e})}}),i.a.createElement(g.a,{label:Object(o.__)("Hover","ultimate-addons-for-gutenberg"),colorValue:Ie||"",onColorChange:function(e){return S({socialHoverColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:S,fontSizeType:{value:ue,label:"socialFontSizeType"},fontSize:{value:de,label:"socialFontSize"},fontSizeMobile:{value:se,label:"socialFontSizeMobile"},fontSizeTablet:{value:ge,label:"socialFontSizeTablet"},disableFontFamily:!0,disableLineHeight:!0}),i.a.createElement(p.a,{label:Object(o.__)("Inter Icon Spacing","ultimate-addons-for-gutenberg"),setAttributes:S,value:Re,onChange:function(e){return S({socialSpace:e})},min:0,max:50,displayUnit:!1})),_e&&i.a.createElement(h.PanelBody,{title:Object(o.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(f.a,x({},e,{label:Object(o.__)("Image Margin","ultimate-addons-for-gutenberg"),valueTop:{value:We,label:"imageTopMargin"},valueRight:{value:Pe,label:"imageRightMargin"},valueBottom:{value:Ge,label:"imageBottomMargin"},valueLeft:{value:Ae,label:"imageLeftMargin"},valueTopTablet:{value:Ve,label:"imageMarginTopTablet"},valueRightTablet:{value:qe,label:"imageMarginRightTablet"},valueBottomTablet:{value:De,label:"imageMarginBottomTablet"},valueLeftTablet:{value:Je,label:"imageMarginLeftTablet"},valueTopMobile:{value:Ke,label:"imageMarginTopMobile"},valueRightMobile:{value:Qe,label:"imageMarginRightMobile"},valueBottomMobile:{value:Xe,label:"imageMarginBottomMobile"},valueLeftMobile:{value:Ye,label:"imageMarginLeftMobile"},unit:{value:Ze,label:"imageMarginUnit"},mUnit:{value:Ze,label:"imageMarginUnit"},tUnit:{value:Ze,label:"imageMarginUnit"},deviceType:O,attributes:j,setAttributes:S,link:{value:$e,label:"spacingLink"}})))),i.a.createElement(s.b,s.a.advance))),i.a.createElement(a.Suspense,{fallback:Object(b.a)()},n,t,w))};n.default=i.a.memo(w)}}]);