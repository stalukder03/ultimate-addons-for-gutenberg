(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[26],{227:function(e,n,t){"use strict";var i=t(12),o=t.n(i)()((function(e){return e[1]}));o.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),n.a=o},228:function(e,n,t){"use strict";var i,o=t(77),l=t.n(o),a=t(0),r=t.n(a),d=t(11),b=t.n(d),p=t(227),c=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=p.a.locals||{},f.use=function(){return c++||(i=b()(p.a,s)),f},f.unuse=function(){c>0&&!--c&&(i(),i=null)};var u=f,g=t(9),h=t(1);n.a=function(e){return Object(a.useLayoutEffect)((function(){return u.use(),function(){u.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(h.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(l.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:g.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(h.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},362:function(e,n,t){"use strict";t.r(n);var i=t(228),o=t(0),l=t.n(o),a=t(75),r=t(49),d=t(1),b=t(74),p=t(28),c=t(15),s=t(76),f=t(13),u=t(33),g=t(3),h=t(8),m=t(4);function _(){return(_=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var x=function(e){var n,t,o=e=e.parentProps,x=o.attributes,v=o.setAttributes,w=x.icon,y=x.noticeDismiss,T=x.cookies,P=x.close_cookie_days,C=x.textColor,j=x.titleColor,S=x.noticeColor,k=x.contentBgColor,F=x.noticeDismissColor,L=x.noticeAlignment,O=x.titleFontFamily,M=x.titleFontWeight,z=x.titleFontSubset,E=x.titleFontSizeType,H=x.titleLineHeightType,B=x.titleFontSize,U=x.titleFontSizeTablet,R=x.titleFontSizeMobile,A=x.titleLineHeight,D=x.titleLineHeightTablet,I=x.titleLineHeightMobile,G=x.descFontFamily,W=x.descFontWeight,N=x.descFontSubset,V=x.descFontSize,J=x.descFontSizeType,q=x.descFontSizeTablet,K=x.descFontSizeMobile,Q=x.descLineHeight,X=x.descLineHeightType,Y=x.descLineHeightTablet,Z=x.descLineHeightMobile,$=x.titleLoadGoogleFonts,ee=x.descLoadGoogleFonts,ne=x.titleTopPadding,te=x.titleRightPadding,ie=x.titleBottomPadding,oe=x.titleLeftPadding,le=x.titleTopPaddingTablet,ae=x.titleRightPaddingTablet,re=x.titleBottomPaddingTablet,de=x.titleLeftPaddingTablet,be=x.titleTopPaddingMobile,pe=x.titleRightPaddingMobile,ce=x.titleBottomPaddingMobile,se=x.titleLeftPaddingMobile,fe=x.titlePaddingUnit,ue=x.mobileTitlePaddingUnit,ge=x.tabletTitlePaddingUnit,he=x.titlePaddingLink,me=x.headingTag,_e=x.layout,xe=x.highlightWidth,ve=x.contentTopPadding,we=x.contentRightPadding,ye=x.contentBottomPadding,Te=x.contentLeftPadding,Pe=x.contentTopPaddingTablet,Ce=x.contentRightPaddingTablet,je=x.contentBottomPaddingTablet,Se=x.contentLeftPaddingTablet,ke=x.contentTopPaddingMobile,Fe=x.contentRightPaddingMobile,Le=x.contentBottomPaddingMobile,Oe=x.contentLeftPaddingMobile,Me=x.contentPaddingUnit,ze=x.mobileContentPaddingUnit,Ee=x.tabletContentPaddingUnit,He=x.contentPaddingLink;if(!0===$){var Be={google:{families:[O+(M?":"+M:"")]}};n=l.a.createElement(r.a,{config:Be})}if(!0===ee){var Ue={google:{families:[G+(W?":"+W:"")]}};t=l.a.createElement(r.a,{config:Ue})}var Re=[{value:"",label:Object(d.__)("Always Show","ultimate-addons-for-gutenberg")},{value:"uagb-dismissable",label:Object(d.__)("Dismissible","ultimate-addons-for-gutenberg")}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.BlockControls,{key:"controls"},l.a.createElement(g.AlignmentToolbar,{value:L,onChange:function(e){return v({noticeAlignment:e})}})),l.a.createElement(g.InspectorControls,null,l.a.createElement(b.a,{tabs:["general","style","advance"]},l.a.createElement(p.b,p.a.general,l.a.createElement(m.PanelBody,{initialOpen:!0},l.a.createElement(u.a,{setAttributes:v,label:Object(d.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:_e,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"simple",label:"Classic",tooltip:Object(d.__)("Classic","ultimate-addons-for-gutenberg")},{value:"modern",label:"Modern",tooltip:Object(d.__)("Modern","ultimate-addons-for-gutenberg")}],showIcons:!1}),"simple"===_e&&l.a.createElement(f.a,{label:Object(d.__)("Highlight width","ultimate-addons-for-gutenberg"),value:xe,onChange:function(e){return v({highlightWidth:e})},min:0,max:50,displayUnit:!1}),l.a.createElement(m.SelectControl,{label:Object(d.__)("Title Tag"),value:me,onChange:function(e){return v({headingTag:e})},options:[{value:"h1",label:Object(d.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(d.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(d.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(d.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(d.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(d.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(d.__)("span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(d.__)("p","ultimate-addons-for-gutenberg")}]}),l.a.createElement(m.SelectControl,{label:Object(d.__)("Notice Display","ultimate-addons-for-gutenberg"),options:Re,value:y,onChange:function(e){return v({noticeDismiss:e})}}),y&&l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{label:Object(d.__)("Button Icon","ultimate-addons-for-gutenberg"),value:w,onChange:function(e){return v({icon:e})}})),y&&l.a.createElement(m.ToggleControl,{label:Object(d.__)("Enable Cookies","ultimate-addons-for-gutenberg"),checked:T,onChange:function(e){var n=(0,Object(h.select)("core/editor").getCurrentPostId)().toString(),t=(new Date).getTime();v({c_id:n+"-"+t}),v({cookies:e})}}),T&&l.a.createElement(f.a,{label:Object(d.__)("Show Closed Notice After (Days)","ultimate-addons-for-gutenberg"),value:P,onChange:function(e){return v({close_cookie_days:e})},min:0,max:50,displayUnit:!1}))),l.a.createElement(p.b,p.a.style,l.a.createElement(m.PanelBody,{title:Object(d.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:j||"",onColorChange:function(e){return v({titleColor:e})}}),l.a.createElement(c.a,{label:Object(d.__)("Highlight Color","ultimate-addons-for-gutenberg"),colorValue:S||"",onColorChange:function(e){return v({noticeColor:e})}}),y&&l.a.createElement(c.a,{label:Object(d.__)("Dismiss Icon Color","ultimate-addons-for-gutenberg"),colorValue:F||"",onColorChange:function(e){return v({noticeDismissColor:e})}}),l.a.createElement(a.a,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:x,setAttributes:v,loadGoogleFonts:{value:$,label:"titleLoadGoogleFonts"},fontFamily:{value:O,label:"titleFontFamily"},fontWeight:{value:M,label:"titleFontWeight"},fontSubset:{value:z,label:"titleFontSubset"},fontSizeType:{value:E,label:"titleFontSizeType"},fontSize:{value:B,label:"titleFontSize"},fontSizeMobile:{value:R,label:"titleFontSizeMobile"},fontSizeTablet:{value:U,label:"titleFontSizeTablet"},lineHeightType:{value:H,label:"titleLineHeightType"},lineHeight:{value:A,label:"titleLineHeight"},lineHeightMobile:{value:I,label:"titleLineHeightMobile"},lineHeightTablet:{value:D,label:"titleLineHeightTablet"}}),l.a.createElement(s.a,_({},e,{label:Object(d.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ne,label:"titleTopPadding"},valueRight:{value:te,label:"titleRightPadding"},valueBottom:{value:ie,label:"titleBottomPadding"},valueLeft:{value:oe,label:"titleLeftPadding"},valueTopTablet:{value:le,label:"titleTopPaddingTablet"},valueRightTablet:{value:ae,label:"titleRightPaddingTablet"},valueBottomTablet:{value:re,label:"titleBottomPaddingTablet"},valueLeftTablet:{value:de,label:"titleLeftPaddingTablet"},valueTopMobile:{value:be,label:"titleTopPaddingMobile"},valueRightMobile:{value:pe,label:"titleRightPaddingMobile"},valueBottomMobile:{value:ce,label:"titleBottomPaddingMobile"},valueLeftMobile:{value:se,label:"titleLeftPaddingMobile"},unit:{value:fe,label:"titlePaddingUnit"},mUnit:{value:ue,label:"mobiletitlePaddingUnit"},tUnit:{value:ge,label:"tablettitlePaddingUnit"},attributes:x,setAttributes:v,link:{value:he,label:"titlePaddingLink"}}))),l.a.createElement(m.PanelBody,{title:Object(d.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:function(e){return v({textColor:e})}}),l.a.createElement(c.a,{label:Object(d.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:function(e){return v({contentBgColor:e})}}),l.a.createElement(a.a,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:x,setAttributes:v,loadGoogleFonts:{value:ee,label:"descLoadGoogleFonts"},fontFamily:{value:G,label:"descFontFamily"},fontWeight:{value:W,label:"descFontWeight"},fontSubset:{value:N,label:"descFontSubset"},fontSizeType:{value:J,label:"descFontSizeType"},fontSize:{value:V,label:"descFontSize"},fontSizeMobile:{value:K,label:"descFontSizeMobile"},fontSizeTablet:{value:q,label:"descFontSizeTablet"},lineHeightType:{value:X,label:"descLineHeightType"},lineHeight:{value:Q,label:"descLineHeight"},lineHeightMobile:{value:Z,label:"descLineHeightMobile"},lineHeightTablet:{value:Y,label:"descLineHeightTablet"}}),l.a.createElement(s.a,_({},e,{label:Object(d.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ve,label:"contentTopPadding"},valueRight:{value:we,label:"contentRightPadding"},valueBottom:{value:ye,label:"contentBottomPadding"},valueLeft:{value:Te,label:"contentLeftPadding"},valueTopTablet:{value:Pe,label:"contentTopPaddingTablet"},valueRightTablet:{value:Ce,label:"contentRightPaddingTablet"},valueBottomTablet:{value:je,label:"contentBottomPaddingTablet"},valueLeftTablet:{value:Se,label:"contentLeftPaddingTablet"},valueTopMobile:{value:ke,label:"contentTopPaddingMobile"},valueRightMobile:{value:Fe,label:"contentRightPaddingMobile"},valueBottomMobile:{value:Le,label:"contentBottomPaddingMobile"},valueLeftMobile:{value:Oe,label:"contentLeftPaddingMobile"},unit:{value:Me,label:"contentPaddingUnit"},mUnit:{value:ze,label:"mobileContentPaddingUnit"},tUnit:{value:Ee,label:"tabletContentPaddingUnit"},attributes:x,setAttributes:v,link:{value:He,label:"contentPaddingLink"}})))),l.a.createElement(p.b,p.a.advance))),n,t)};n.default=l.a.memo(x)}}]);