(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[25],{269:function(e,n,t){"use strict";var o=t(17),a=t.n(o)()((function(e){return e[1]}));a.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),n.a=a},270:function(e,n,t){"use strict";var o,a=t(105),i=t.n(a),l=t(1),r=t.n(l),d=t(16),s=t.n(d),b=t(269),u=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=b.a.locals||{},p.use=function(){return u++||(o=s()(b.a,c)),p},p.unuse=function(){u>0&&!--u&&(o(),o=null)};var g=p,f=t(12),m=t(2);n.a=e=>(Object(l.useLayoutEffect)(()=>(g.use(),()=>{g.unuse()}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(i.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help)))},544:function(e,n,t){"use strict";t.r(n);var o=t(12),a=t(1),i=t.n(a),l=t(11),r=t(74),d=t(23),s=t(53),b=t(19),u=t(14),c=t(13),p=t(33),g=t(52),f=t(21),m=t(2),_=t(44),h=t(10),x=t(270),v=t(25),w=t(5),y=t(6);function T(){return(T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}const j=e=>{e=e.parentProps;const{attributes:n,setAttributes:t}=e,{layout:j,inactiveOtherItems:O,expandFirstItem:P,enableSchemaSupport:S,rowsGap:C,columnsGap:E,align:k,enableSeparator:q,boxBgColor:z,borderStyle:F,borderWidth:M,borderRadius:L,borderColor:H,borderHoverColor:B,questionTextColor:A,questionTextActiveColor:I,questionPaddingTypeDesktop:R,questionPaddingTypeMobile:G,questionPaddingTypeTablet:N,answerTextColor:U,answerPaddingTypeDesktop:D,answerPaddingTypeMobile:V,answerPaddingTypeTablet:W,iconColor:Q,iconActiveColor:J,gapBtwIconQUestion:K,questionloadGoogleFonts:X,questionFontFamily:Y,questionFontWeight:Z,questionFontSubset:$,questionFontSizeType:ee,questionFontSize:ne,questionFontSizeMobile:te,questionFontSizeTablet:oe,questionLineHeightType:ae,questionLineHeight:ie,questionLineHeightMobile:le,questionLineHeightTablet:re,answerloadGoogleFonts:de,answerFontFamily:se,answerFontWeight:be,answerFontSubset:ue,answerFontSizeType:ce,answerFontSize:pe,answerFontSizeMobile:ge,answerFontSizeTablet:fe,answerLineHeightType:me,answerLineHeight:_e,answerLineHeightMobile:he,answerLineHeightTablet:xe,icon:ve,iconActive:we,iconAlign:ye,iconSizeType:Te,iconSizeMobile:je,iconSizeTablet:Oe,iconSize:Pe,columns:Se,tcolumns:Ce,mcolumns:Ee,enableToggle:ke,equalHeight:qe,questionLeftPaddingTablet:ze,hquestionPaddingTablet:Fe,vquestionPaddingTablet:Me,questionBottomPaddingTablet:Le,questionLeftPaddingDesktop:He,hquestionPaddingDesktop:Be,vquestionPaddingDesktop:Ae,questionBottomPaddingDesktop:Ie,questionLeftPaddingMobile:Re,hquestionPaddingMobile:Ge,vquestionPaddingMobile:Ne,questionBottomPaddingMobile:Ue,headingTag:De,answerSpacingLink:Ve,questionSpacingLink:We,answerTopPadding:Qe,answerRightPadding:Je,answerBottomPadding:Ke,answerLeftPadding:Xe,answerTopPaddingTablet:Ye,answerRightPaddingTablet:Ze,answerBottomPaddingTablet:$e,answerLeftPaddingTablet:en,answerTopPaddingMobile:nn,answerRightPaddingMobile:tn,answerBottomPaddingMobile:on,answerLeftPaddingMobile:an}=n;let ln,rn;if(!0===X){const e={google:{families:[Y+(Z?":"+Z:"")]}};ln=i.a.createElement(r.a,{config:e})}if(!0===de){const e={google:{families:[se+(be?":"+be:"")]}};rn=i.a.createElement(r.a,{config:e})}return i.a.createElement(a.Suspense,{fallback:Object(l.a)()},i.a.createElement(w.InspectorControls,null,i.a.createElement(g.a,null,i.a.createElement(f.b,f.a.general,i.a.createElement(y.PanelBody,{title:Object(m.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},i.a.createElement(b.a,{setAttributes:t,label:Object(m.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:j,label:"layout"},onChange:n=>{Object(h.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.layout=n}),t({layout:n})},options:[{value:"accordion",label:Object(m.__)("Accordion","ultimate-addons-for-gutenberg")},{value:"grid",label:Object(m.__)("Grid","ultimate-addons-for-gutenberg")}]}),"accordion"===j&&i.a.createElement(i.a.Fragment,null,i.a.createElement(y.ToggleControl,{label:Object(m.__)("Collapse other items","ultimate-addons-for-gutenberg"),checked:O,onChange:()=>t({inactiveOtherItems:!O})}),!0===O&&i.a.createElement(y.ToggleControl,{label:Object(m.__)("Expand First Item","ultimate-addons-for-gutenberg"),checked:P,onChange:()=>t({expandFirstItem:!P})}),i.a.createElement(y.ToggleControl,{label:Object(m.__)("Enable Toggle","ultimate-addons-for-gutenberg"),checked:ke,onChange:()=>t({enableToggle:!ke})})),i.a.createElement(y.ToggleControl,{label:Object(m.__)("Enable Schema Support","ultimate-addons-for-gutenberg"),checked:S,onChange:()=>t({enableSchemaSupport:!S})}),i.a.createElement(y.ToggleControl,{label:Object(m.__)("Enable Separator","ultimate-addons-for-gutenberg"),checked:q,onChange:()=>t({enableSeparator:!q})}),i.a.createElement(y.SelectControl,{label:Object(m.__)("Question Tag","ultimate-addons-for-gutenberg"),value:De,onChange:n=>(n=>{Object(h.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.headingTag=n}),t({headingTag:n})})(n),options:[{value:"span",label:Object(m.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(m.__)("P","ultimate-addons-for-gutenberg")},{value:"h1",label:Object(m.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(m.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(m.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(m.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(m.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(m.__)("H6","ultimate-addons-for-gutenberg")}]}),"grid"===j&&i.a.createElement(s.a,{label:Object(m.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:Se,label:"columns",min:1,max:6},tablet:{value:Ce,label:"tcolumns",min:1,max:4},mobile:{value:Ee,label:"mcolumns",min:1,max:2}},displayUnit:!1,setAttributes:t}),"grid"===j&&i.a.createElement(b.a,{setAttributes:t,label:Object(m.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:k,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-center")}),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),"accordion"===j&&i.a.createElement(y.PanelBody,{title:Object(m.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},i.a.createElement(x.a,{label:Object(m.__)("Expand","ultimate-addons-for-gutenberg"),value:ve,onChange:n=>(n=>{Object(h.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.icon=n}),t({icon:n})})(n)}),i.a.createElement(x.a,{label:Object(m.__)("Collapse","ultimate-addons-for-gutenberg"),value:we,onChange:n=>(n=>{Object(h.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.iconActive=n}),t({iconActive:n})})(n)}),i.a.createElement(b.a,{setAttributes:t,label:Object(m.__)("Icon Alignment","ultimate-addons-for-gutenberg"),data:{value:ye,label:"iconAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"row",icon:i.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"row-reverse",icon:i.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}))),i.a.createElement(f.b,f.a.style,i.a.createElement(y.PanelBody,{title:Object(m.__)("Container","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},i.a.createElement(u.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:z,onColorChange:e=>t({boxBgColor:e})}),i.a.createElement(c.a,{label:Object(m.__)("Rows Gap (px)","ultimate-addons-for-gutenberg"),setAttributes:t,value:C,onChange:e=>t({rowsGap:e}),min:0,max:50,displayUnit:!1}),"grid"===j&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(m.__)("Columns Gap (px)","ultimate-addons-for-gutenberg"),setAttributes:t,value:E,onChange:e=>t({columnsGap:e}),min:0,max:50,displayUnit:!1}),i.a.createElement(y.ToggleControl,{label:Object(m.__)("Equal Height","ultimate-addons-for-gutenberg"),checked:qe,onChange:()=>t({equalHeight:!qe})})),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(m.__)("Border","ultimate-addons-for-gutenberg")),i.a.createElement(_.a,{setAttributes:t,borderStyle:{value:F,label:"borderStyle",title:Object(m.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:M,label:"borderWidth",title:Object(m.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:L,label:"borderRadius",title:Object(m.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:H,label:"borderColor",title:Object(m.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:B,label:"borderHoverColor",title:Object(m.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),"accordion"!==j?"":i.a.createElement(y.PanelBody,{title:Object(m.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},i.a.createElement(s.a,{label:Object(m.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:Pe,label:"iconSize"},tablet:{value:Oe,label:"iconSizeTablet"},mobile:{value:je,label:"iconSizeMobile"}},min:0,max:100,unit:{value:Te,label:"iconSizeType"},units:[{name:Object(m.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(m.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],setAttributes:t}),i.a.createElement(c.a,{label:Object(m.__)("Gap between Icon and Question","ultimate-addons-for-gutenberg"),setAttributes:t,value:K,onChange:e=>t({gapBtwIconQUestion:e}),min:0,max:100,displayUnit:!1}),i.a.createElement(u.a,{label:Object(m.__)("Expand Color","ultimate-addons-for-gutenberg"),colorValue:Q,onColorChange:e=>t({iconColor:e})}),i.a.createElement(u.a,{label:Object(m.__)("Collapse Color","ultimate-addons-for-gutenberg"),colorValue:J,onColorChange:e=>t({iconActiveColor:e})})),i.a.createElement(y.PanelBody,{title:Object(m.__)("Question","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},i.a.createElement(d.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:t,loadGoogleFonts:{value:X,label:"questionloadGoogleFonts"},fontFamily:{value:Y,label:"questionFontFamily"},fontWeight:{value:Z,label:"questionFontWeight"},fontSubset:{value:$,label:"questionFontSubset"},fontSizeType:{value:ee,label:"questionFontSizeType"},fontSize:{value:ne,label:"questionFontSize"},fontSizeMobile:{value:te,label:"questionFontSizeMobile"},fontSizeTablet:{value:oe,label:"questionFontSizeTablet"},lineHeightType:{value:ae,label:"questionLineHeightType"},lineHeight:{value:ie,label:"questionLineHeight"},lineHeightMobile:{value:le,label:"questionLineHeightMobile"},lineHeightTablet:{value:re,label:"questionLineHeightTablet"}}),i.a.createElement(v.a,{tabs:[{name:"normal",title:Object(m.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(m.__)("Active/Hover","ultimate-addons-for-gutenberg")}],normal:i.a.createElement(u.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:A,onColorChange:e=>t({questionTextColor:e})}),active:i.a.createElement(u.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:I,onColorChange:e=>t({questionTextActiveColor:e})})}),i.a.createElement(p.a,T({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ae,label:"vquestionPaddingDesktop"},valueRight:{value:Be,label:"hquestionPaddingDesktop"},valueBottom:{value:Ie,label:"questionBottomPaddingDesktop"},valueLeft:{value:He,label:"questionLeftPaddingDesktop"},valueTopTablet:{value:Me,label:"vquestionPaddingTablet"},valueRightTablet:{value:Fe,label:"hquestionPaddingTablet"},valueBottomTablet:{value:Le,label:"questionBottomPaddingTablet"},valueLeftTablet:{value:ze,label:"questionLeftPaddingTablet"},valueTopMobile:{value:Ne,label:"vquestionPaddingMobile"},valueRightMobile:{value:Ge,label:"hquestionPaddingMobile"},valueBottomMobile:{value:Ue,label:"questionBottomPaddingMobile"},valueLeftMobile:{value:Re,label:"questionLeftPaddingMobile"},unit:{value:R,label:"questionPaddingTypeDesktop"},mUnit:{value:G,label:"questionPaddingTypeMobile"},tUnit:{value:N,label:"questionPaddingTypeTablet"},attributes:n,setAttributes:t,link:{value:We,label:"questionSpacingLink"},units:[{name:Object(m.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(m.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}))),i.a.createElement(y.PanelBody,{title:Object(m.__)("Answer","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},i.a.createElement(u.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:U,onColorChange:e=>t({answerTextColor:e})}),i.a.createElement(d.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:t,loadGoogleFonts:{value:de,label:"answerloadGoogleFonts"},fontFamily:{value:se,label:"answerFontFamily"},fontWeight:{value:be,label:"answerFontWeight"},fontSubset:{value:ue,label:"answerFontSubset"},fontSizeType:{value:ce,label:"answerFontSizeType"},fontSize:{value:pe,label:"answerFontSize"},fontSizeMobile:{value:ge,label:"answerFontSizeMobile"},fontSizeTablet:{value:fe,label:"answerFontSizeTablet"},lineHeightType:{value:me,label:"answerLineHeightType"},lineHeight:{value:_e,label:"answerLineHeight"},lineHeightMobile:{value:he,label:"answerLineHeightMobile"},lineHeightTablet:{value:xe,label:"answerLineHeightTablet"}}),i.a.createElement(p.a,T({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Qe,label:"answerTopPadding"},valueRight:{value:Je,label:"answerRightPadding"},valueBottom:{value:Ke,label:"answerBottomPadding"},valueLeft:{value:Xe,label:"answerLeftPadding"},valueTopTablet:{value:Ye,label:"answerTopPaddingTablet"},valueRightTablet:{value:Ze,label:"answerRightPaddingTablet"},valueBottomTablet:{value:$e,label:"answerBottomPaddingTablet"},valueLeftTablet:{value:en,label:"answerLeftPaddingTablet"},valueTopMobile:{value:nn,label:"answerTopPaddingMobile"},valueRightMobile:{value:tn,label:"answerRightPaddingMobile"},valueBottomMobile:{value:on,label:"answerBottomPaddingMobile"},valueLeftMobile:{value:an,label:"answerLeftPaddingMobile"},unit:{value:D,label:"answerPaddingTypeDesktop"},mUnit:{value:V,label:"answerPaddingTypeMobile"},tUnit:{value:W,label:"answerPaddingTypeTablet"},attributes:n,setAttributes:t,link:{value:Ve,label:"answerSpacingLink"},units:[{name:Object(m.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(m.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})))),i.a.createElement(f.b,T({},f.a.advance,{parentProps:e})))),ln,rn)};n.default=i.a.memo(j)}}]);