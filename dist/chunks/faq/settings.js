(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[25],{269:function(e,n,t){"use strict";var o=t(17),a=t.n(o)()((function(e){return e[1]}));a.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),n.a=a},270:function(e,n,t){"use strict";var o,a=t(105),i=t.n(a),l=t(1),r=t.n(l),d=t(16),u=t.n(d),b=t(269),s=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=b.a.locals||{},p.use=function(){return s++||(o=u()(b.a,c)),p},p.unuse=function(){s>0&&!--s&&(o(),o=null)};var g=p,f=t(12),m=t(2);n.a=function(e){return Object(l.useLayoutEffect)((function(){return g.use(),function(){g.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(i.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},544:function(e,n,t){"use strict";t.r(n);var o=t(12),a=t(1),i=t.n(a),l=t(11),r=t(74),d=t(23),u=t(53),b=t(18),s=t(14),c=t(13),p=t(33),g=t(52),f=t(20),m=t(2),_=t(44),h=t(10),x=t(270),v=t(25),w=t(5),y=t(6);function T(){return(T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var j=function(e){var n,t,j=e=e.parentProps,O=j.attributes,P=j.setAttributes,S=O.layout,C=O.inactiveOtherItems,E=O.expandFirstItem,k=O.enableSchemaSupport,q=O.rowsGap,z=O.columnsGap,F=O.align,M=O.enableSeparator,L=O.boxBgColor,H=O.borderStyle,B=O.borderWidth,A=O.borderRadius,I=O.borderColor,R=O.borderHoverColor,G=O.questionTextColor,N=O.questionTextActiveColor,U=O.questionPaddingTypeDesktop,D=O.questionPaddingTypeMobile,V=O.questionPaddingTypeTablet,W=O.answerTextColor,Q=O.answerPaddingTypeDesktop,J=O.answerPaddingTypeMobile,K=O.answerPaddingTypeTablet,X=O.iconColor,Y=O.iconActiveColor,Z=O.gapBtwIconQUestion,$=O.questionloadGoogleFonts,ee=O.questionFontFamily,ne=O.questionFontWeight,te=O.questionFontSubset,oe=O.questionFontSizeType,ae=O.questionFontSize,ie=O.questionFontSizeMobile,le=O.questionFontSizeTablet,re=O.questionLineHeightType,de=O.questionLineHeight,ue=O.questionLineHeightMobile,be=O.questionLineHeightTablet,se=O.answerloadGoogleFonts,ce=O.answerFontFamily,pe=O.answerFontWeight,ge=O.answerFontSubset,fe=O.answerFontSizeType,me=O.answerFontSize,_e=O.answerFontSizeMobile,he=O.answerFontSizeTablet,xe=O.answerLineHeightType,ve=O.answerLineHeight,we=O.answerLineHeightMobile,ye=O.answerLineHeightTablet,Te=O.icon,je=O.iconActive,Oe=O.iconAlign,Pe=O.iconSizeType,Se=O.iconSizeMobile,Ce=O.iconSizeTablet,Ee=O.iconSize,ke=O.columns,qe=O.tcolumns,ze=O.mcolumns,Fe=O.enableToggle,Me=O.equalHeight,Le=O.questionLeftPaddingTablet,He=O.hquestionPaddingTablet,Be=O.vquestionPaddingTablet,Ae=O.questionBottomPaddingTablet,Ie=O.questionLeftPaddingDesktop,Re=O.hquestionPaddingDesktop,Ge=O.vquestionPaddingDesktop,Ne=O.questionBottomPaddingDesktop,Ue=O.questionLeftPaddingMobile,De=O.hquestionPaddingMobile,Ve=O.vquestionPaddingMobile,We=O.questionBottomPaddingMobile,Qe=O.headingTag,Je=O.answerSpacingLink,Ke=O.questionSpacingLink,Xe=O.answerTopPadding,Ye=O.answerRightPadding,Ze=O.answerBottomPadding,$e=O.answerLeftPadding,en=O.answerTopPaddingTablet,nn=O.answerRightPaddingTablet,tn=O.answerBottomPaddingTablet,on=O.answerLeftPaddingTablet,an=O.answerTopPaddingMobile,ln=O.answerRightPaddingMobile,rn=O.answerBottomPaddingMobile,dn=O.answerLeftPaddingMobile;if(!0===$){var un={google:{families:[ee+(ne?":"+ne:"")]}};n=i.a.createElement(r.a,{config:un})}if(!0===se){var bn={google:{families:[ce+(pe?":"+pe:"")]}};t=i.a.createElement(r.a,{config:bn})}return i.a.createElement(a.Suspense,{fallback:Object(l.a)()},i.a.createElement(w.InspectorControls,null,i.a.createElement(g.a,null,i.a.createElement(f.b,f.a.general,i.a.createElement(y.PanelBody,{title:Object(m.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},i.a.createElement(b.a,{setAttributes:P,label:Object(m.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:S,label:"layout"},onChange:function(n){Object(h.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.layout=n})),P({layout:n})},options:[{value:"accordion",label:Object(m.__)("Accordion","ultimate-addons-for-gutenberg")},{value:"grid",label:Object(m.__)("Grid","ultimate-addons-for-gutenberg")}]}),"accordion"===S&&i.a.createElement(i.a.Fragment,null,i.a.createElement(y.ToggleControl,{label:Object(m.__)("Collapse other items","ultimate-addons-for-gutenberg"),checked:C,onChange:function(){return P({inactiveOtherItems:!C})}}),!0===C&&i.a.createElement(y.ToggleControl,{label:Object(m.__)("Expand First Item","ultimate-addons-for-gutenberg"),checked:E,onChange:function(){return P({expandFirstItem:!E})}}),i.a.createElement(y.ToggleControl,{label:Object(m.__)("Enable Toggle","ultimate-addons-for-gutenberg"),checked:Fe,onChange:function(){return P({enableToggle:!Fe})}})),i.a.createElement(y.ToggleControl,{label:Object(m.__)("Enable Schema Support","ultimate-addons-for-gutenberg"),checked:k,onChange:function(){return P({enableSchemaSupport:!k})}}),i.a.createElement(y.ToggleControl,{label:Object(m.__)("Enable Separator","ultimate-addons-for-gutenberg"),checked:M,onChange:function(){return P({enableSeparator:!M})}}),i.a.createElement(y.SelectControl,{label:Object(m.__)("Question Tag","ultimate-addons-for-gutenberg"),value:Qe,onChange:function(n){return function(n){Object(h.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.headingTag=n})),P({headingTag:n})}(n)},options:[{value:"span",label:Object(m.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(m.__)("P","ultimate-addons-for-gutenberg")},{value:"h1",label:Object(m.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(m.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(m.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(m.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(m.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(m.__)("H6","ultimate-addons-for-gutenberg")}]}),"grid"===S&&i.a.createElement(u.a,{label:Object(m.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:ke,label:"columns",min:1,max:6},tablet:{value:qe,label:"tcolumns",min:1,max:4},mobile:{value:ze,label:"mcolumns",min:1,max:2}},displayUnit:!1,setAttributes:P}),"grid"===S&&i.a.createElement(b.a,{setAttributes:P,label:Object(m.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:F,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-center")}),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),"accordion"===S&&i.a.createElement(y.PanelBody,{title:Object(m.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},i.a.createElement(x.a,{label:Object(m.__)("Expand","ultimate-addons-for-gutenberg"),value:Te,onChange:function(n){return function(n){Object(h.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.icon=n})),P({icon:n})}(n)}}),i.a.createElement(x.a,{label:Object(m.__)("Collapse","ultimate-addons-for-gutenberg"),value:je,onChange:function(n){return function(n){Object(h.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.iconActive=n})),P({iconActive:n})}(n)}}),i.a.createElement(b.a,{setAttributes:P,label:Object(m.__)("Icon Alignment","ultimate-addons-for-gutenberg"),data:{value:Oe,label:"iconAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"row",icon:i.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"row-reverse",icon:i.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}))),i.a.createElement(f.b,f.a.style,i.a.createElement(y.PanelBody,{title:Object(m.__)("Container","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},i.a.createElement(s.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:L,onColorChange:function(e){return P({boxBgColor:e})}}),i.a.createElement(c.a,{label:Object(m.__)("Rows Gap (px)","ultimate-addons-for-gutenberg"),setAttributes:P,value:q,onChange:function(e){return P({rowsGap:e})},min:0,max:50,displayUnit:!1}),"grid"===S&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(m.__)("Columns Gap (px)","ultimate-addons-for-gutenberg"),setAttributes:P,value:z,onChange:function(e){return P({columnsGap:e})},min:0,max:50,displayUnit:!1}),i.a.createElement(y.ToggleControl,{label:Object(m.__)("Equal Height","ultimate-addons-for-gutenberg"),checked:Me,onChange:function(){return P({equalHeight:!Me})}})),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(m.__)("Border","ultimate-addons-for-gutenberg")),i.a.createElement(_.a,{setAttributes:P,borderStyle:{value:H,label:"borderStyle",title:Object(m.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:B,label:"borderWidth",title:Object(m.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:A,label:"borderRadius",title:Object(m.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:I,label:"borderColor",title:Object(m.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:R,label:"borderHoverColor",title:Object(m.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),"accordion"!==S?"":i.a.createElement(y.PanelBody,{title:Object(m.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},i.a.createElement(u.a,{label:Object(m.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:Ee,label:"iconSize"},tablet:{value:Ce,label:"iconSizeTablet"},mobile:{value:Se,label:"iconSizeMobile"}},min:0,max:100,unit:{value:Pe,label:"iconSizeType"},units:[{name:Object(m.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(m.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],setAttributes:P}),i.a.createElement(c.a,{label:Object(m.__)("Gap between Icon and Question","ultimate-addons-for-gutenberg"),setAttributes:P,value:Z,onChange:function(e){return P({gapBtwIconQUestion:e})},min:0,max:100,displayUnit:!1}),i.a.createElement(s.a,{label:Object(m.__)("Expand Color","ultimate-addons-for-gutenberg"),colorValue:X,onColorChange:function(e){return P({iconColor:e})}}),i.a.createElement(s.a,{label:Object(m.__)("Collapse Color","ultimate-addons-for-gutenberg"),colorValue:Y,onColorChange:function(e){return P({iconActiveColor:e})}})),i.a.createElement(y.PanelBody,{title:Object(m.__)("Question","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},i.a.createElement(d.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:P,loadGoogleFonts:{value:$,label:"questionloadGoogleFonts"},fontFamily:{value:ee,label:"questionFontFamily"},fontWeight:{value:ne,label:"questionFontWeight"},fontSubset:{value:te,label:"questionFontSubset"},fontSizeType:{value:oe,label:"questionFontSizeType"},fontSize:{value:ae,label:"questionFontSize"},fontSizeMobile:{value:ie,label:"questionFontSizeMobile"},fontSizeTablet:{value:le,label:"questionFontSizeTablet"},lineHeightType:{value:re,label:"questionLineHeightType"},lineHeight:{value:de,label:"questionLineHeight"},lineHeightMobile:{value:ue,label:"questionLineHeightMobile"},lineHeightTablet:{value:be,label:"questionLineHeightTablet"}}),i.a.createElement(v.a,{tabs:[{name:"normal",title:Object(m.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(m.__)("Active/Hover","ultimate-addons-for-gutenberg")}],normal:i.a.createElement(s.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:G,onColorChange:function(e){return P({questionTextColor:e})}}),active:i.a.createElement(s.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:N,onColorChange:function(e){return P({questionTextActiveColor:e})}})}),i.a.createElement(p.a,T({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ge,label:"vquestionPaddingDesktop"},valueRight:{value:Re,label:"hquestionPaddingDesktop"},valueBottom:{value:Ne,label:"questionBottomPaddingDesktop"},valueLeft:{value:Ie,label:"questionLeftPaddingDesktop"},valueTopTablet:{value:Be,label:"vquestionPaddingTablet"},valueRightTablet:{value:He,label:"hquestionPaddingTablet"},valueBottomTablet:{value:Ae,label:"questionBottomPaddingTablet"},valueLeftTablet:{value:Le,label:"questionLeftPaddingTablet"},valueTopMobile:{value:Ve,label:"vquestionPaddingMobile"},valueRightMobile:{value:De,label:"hquestionPaddingMobile"},valueBottomMobile:{value:We,label:"questionBottomPaddingMobile"},valueLeftMobile:{value:Ue,label:"questionLeftPaddingMobile"},unit:{value:U,label:"questionPaddingTypeDesktop"},mUnit:{value:D,label:"questionPaddingTypeMobile"},tUnit:{value:V,label:"questionPaddingTypeTablet"},attributes:O,setAttributes:P,link:{value:Ke,label:"questionSpacingLink"},units:[{name:Object(m.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(m.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}))),i.a.createElement(y.PanelBody,{title:Object(m.__)("Answer","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},i.a.createElement(s.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:W,onColorChange:function(e){return P({answerTextColor:e})}}),i.a.createElement(d.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:P,loadGoogleFonts:{value:se,label:"answerloadGoogleFonts"},fontFamily:{value:ce,label:"answerFontFamily"},fontWeight:{value:pe,label:"answerFontWeight"},fontSubset:{value:ge,label:"answerFontSubset"},fontSizeType:{value:fe,label:"answerFontSizeType"},fontSize:{value:me,label:"answerFontSize"},fontSizeMobile:{value:_e,label:"answerFontSizeMobile"},fontSizeTablet:{value:he,label:"answerFontSizeTablet"},lineHeightType:{value:xe,label:"answerLineHeightType"},lineHeight:{value:ve,label:"answerLineHeight"},lineHeightMobile:{value:we,label:"answerLineHeightMobile"},lineHeightTablet:{value:ye,label:"answerLineHeightTablet"}}),i.a.createElement(p.a,T({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Xe,label:"answerTopPadding"},valueRight:{value:Ye,label:"answerRightPadding"},valueBottom:{value:Ze,label:"answerBottomPadding"},valueLeft:{value:$e,label:"answerLeftPadding"},valueTopTablet:{value:en,label:"answerTopPaddingTablet"},valueRightTablet:{value:nn,label:"answerRightPaddingTablet"},valueBottomTablet:{value:tn,label:"answerBottomPaddingTablet"},valueLeftTablet:{value:on,label:"answerLeftPaddingTablet"},valueTopMobile:{value:an,label:"answerTopPaddingMobile"},valueRightMobile:{value:ln,label:"answerRightPaddingMobile"},valueBottomMobile:{value:rn,label:"answerBottomPaddingMobile"},valueLeftMobile:{value:dn,label:"answerLeftPaddingMobile"},unit:{value:Q,label:"answerPaddingTypeDesktop"},mUnit:{value:J,label:"answerPaddingTypeMobile"},tUnit:{value:K,label:"answerPaddingTypeTablet"},attributes:O,setAttributes:P,link:{value:Je,label:"answerSpacingLink"},units:[{name:Object(m.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(m.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})))),i.a.createElement(f.b,T({},f.a.advance,{parentProps:e})))),n,t)};n.default=i.a.memo(j)}}]);