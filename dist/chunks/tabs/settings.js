(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[96],{270:function(e,t,a){"use strict";t.a={general:{key:"general",className:"general"},style:{key:"style",className:"style"},advance:{key:"advance",className:"advance"}}},367:function(e,t,a){"use strict";var l=a(15),o=a.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-responsive-select-control .uagb-size-type-field-tabs .components-tab-panel__tabs {\n  padding-right: 0; }\n",""]),t.a=o},566:function(e,t,a){"use strict";a.r(t);var l,o=a(97),n=a.n(o),i=a(12),b=a(18),r=a(14),u=a.n(r),d=a(367),g=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=d.a.locals||{},s.use=function(){return g++||(l=u()(d.a,c)),s},s.unuse=function(){g>0&&!--g&&(l(),l=null)};var v=s,m=a(1),f=a.n(m),y=a(2),T=a(4),_=a(9),p=a(11);function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}var B=function(e){Object(m.useLayoutEffect)((function(){return v.use(),function(){v.unuse()}}),[]);var t,a,l=(t=Object(p.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,o,n=[],_n=!0,i=!1;try{for(a=a.call(e);!(_n=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);_n=!0);}catch(e){i=!0,o=e}finally{try{_n||null==a.return||a.return()}finally{if(i)throw o}}return n}}(t,a)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?M(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=l[0],n=l[1],i=(e.label,e.data),b=e.setAttributes,r=e.options,u=Object(_.useSelect)((function(e){return e("core/edit-post").__experimentalGetPreviewDeviceType()}),[]),d=Object(_.useDispatch)("core/edit-post").__experimentalSetPreviewDeviceType,g={desktop:f.a.createElement("svg",{width:"8",height:"7",viewBox:"0 0 8 7",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("path",{d:"M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"})),tablet:f.a.createElement("svg",{width:"6",height:"7",viewBox:"0 0 6 7",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("path",{d:"M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"})),mobile:f.a.createElement("svg",{width:"4",height:"7",viewBox:"0 0 4 7",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("path",{d:"M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"}))},c=[{name:"Desktop",title:g.desktop,itemClass:"uagb-desktop-tab uagb-responsive-tabs"},{name:"Tablet",title:g.tablet,itemClass:"uagb-tablet-tab uagb-responsive-tabs"},{name:"Mobile",key:"mobile",title:g.mobile,itemClass:"uagb-mobile-tab uagb-responsive-tabs"}],s={};return s.Desktop=f.a.createElement(T.SelectControl,{value:i.desktop.value,onChange:function(e){return b(h({},i.desktop.label,e))},options:r.desktop}),s.Tablet=f.a.createElement(T.SelectControl,{value:i.tablet.value,onChange:function(e){return b(h({},i.tablet.label,e))},options:r.tablet||r.desktop}),s.Mobile=f.a.createElement(T.SelectControl,{value:i.mobile.value,onChange:function(e){return b(h({},i.mobile.label,e))},options:r.mobile||r.desktop}),f.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},f.a.createElement("div",{className:"uagb-size-type-field-tabs"},f.a.createElement("div",{className:"uagb-control__header"},f.a.createElement("div",{className:"uag-responsive-label-wrap"},e.label&&f.a.createElement("label",{className:"uagb-range-control__label"},e.label),!o&&f.a.createElement(T.Button,{key:"uag-responsive-common-button",className:"uag-responsive-common-button",onClick:function(){n(!o)}},g[u.toLowerCase()]),o&&f.a.createElement(T.ButtonGroup,{className:"uagb-range-control-responsive components-tab-panel__tabs","aria-label":Object(y.__)("Device","ultimate-addons-for-gutenberg")},c.map((function(e){var t=e.name,a=e.key,l=e.title,i=e.itemClass;return f.a.createElement(T.Button,{key:a,className:"components-button components-tab-panel__tabs-item uagb-range-control-responsive-item ".concat(i).concat(t===u?" active-tab":""),"aria-pressed":u===t,onClick:function(){return d(t),void n(!o)}},l)}))))),s[u]?s[u]:s.Desktop))},O=a(53),j=a(17),C=a(99),S=a(16),P=a(109),E=a(98),L=a(62),H=a(270),k=a(5);function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var w=function(e){var t,a=e=e.parentProps,l=a.attributes,o=a.setAttributes,r=(a.deviceType,l.tabsStyleD),u=l.tabsStyleM,d=l.tabsStyleT,g=l.tabActiveFrontend,c=l.tabHeaders,s=l.headerBgColor,v=l.borderStyle,m=l.borderWidth,_=l.borderRadius,p=l.borderColor,h=l.borderHoverColor,M=l.headerTextColor,w=l.activeTabBgColor,V=l.activeTabTextColor,U=l.bodyBgColor,z=l.bodyTextColor,A=l.tabTitleLeftMargin,F=l.tabTitleRightMargin,I=l.tabTitleTopMargin,x=l.tabTitleBottomMargin,N=l.tabTitleLeftMarginTablet,D=l.tabTitleRightMarginTablet,Z=l.tabTitleTopMarginTablet,W=l.tabTitleBottomMarginTablet,G=l.tabTitleLeftMarginMobile,J=l.tabTitleRightMarginMobile,$=l.tabTitleTopMarginMobile,q=l.tabTitleBottomMarginMobile,K=l.tabTitleMarginUnit,Q=l.mobiletabTitleMarginUnit,X=l.tablettabTitleMarginUnit,Y=l.tabTitleMarginLink,ee=l.tabTitleTopPadding,te=l.tabTitleRightPadding,ae=l.tabTitleBottomPadding,le=l.tabTitleLeftPadding,oe=l.tabTitleTopPaddingTablet,ne=l.tabTitleRightPaddingTablet,ie=l.tabTitleBottomPaddingTablet,be=l.tabTitleLeftPaddingTablet,re=l.tabTitleTopPaddingMobile,ue=l.tabTitleRightPaddingMobile,de=l.tabTitleBottomPaddingMobile,ge=l.tabTitleLeftPaddingMobile,ce=l.tabTitlePaddingUnit,se=l.mobiletabTitlePaddingUnit,ve=l.tablettabTitlePaddingUnit,me=l.tabTitlePaddingLink,fe=l.tabBodyLeftMargin,ye=l.tabBodyRightMargin,Te=l.tabBodyTopMargin,_e=l.tabBodyBottomMargin,pe=l.tabBodyLeftMarginTablet,he=l.tabBodyRightMarginTablet,Me=l.tabBodyTopMarginTablet,Be=l.tabBodyBottomMarginTablet,Oe=l.tabBodyLeftMarginMobile,je=l.tabBodyRightMarginMobile,Ce=l.tabBodyTopMarginMobile,Se=l.tabBodyBottomMarginMobile,Pe=l.tabBodyMarginUnit,Ee=l.mobiletabBodyMarginUnit,Le=l.tablettabBodyMarginUnit,He=l.tabBodyMarginLink,ke=l.tabBodyTopPadding,Re=l.tabBodyRightPadding,we=l.tabBodyBottomPadding,Ve=l.tabBodyLeftPadding,Ue=l.tabBodyTopPaddingTablet,ze=l.tabBodyRightPaddingTablet,Ae=l.tabBodyBottomPaddingTablet,Fe=l.tabBodyLeftPaddingTablet,Ie=l.tabBodyTopPaddingMobile,xe=l.tabBodyRightPaddingMobile,Ne=l.tabBodyBottomPaddingMobile,De=l.tabBodyLeftPaddingMobile,Ze=l.tabBodyPaddingUnit,We=l.mobiletabBodyPaddingUnit,Ge=l.tablettabBodyPaddingUnit,Je=l.tabBodyPaddingLink,$e=l.titleLoadGoogleFonts,qe=l.titleFontFamily,Ke=l.titleFontWeight,Qe=l.titleFontSubset,Xe=l.titleFontSizeType,Ye=l.titleFontSize,et=l.titleFontSizeMobile,tt=l.titleFontSizeTablet,at=l.titleLineHeightType,lt=l.titleLineHeight,ot=l.titleLineHeightMobile,nt=l.titleLineHeightTablet,it=l.titleTransform,bt=l.titleDecoration,rt=l.titleAlign,ut=l.tabAlign,dt=l.showIcon,gt=l.icon,ct=l.iconColor,st=l.iconPosition,vt=l.iconSpacing,mt=l.iconSize,ft=l.activeiconColor;return f.a.createElement(k.InspectorControls,null,f.a.createElement(E.a,null,f.a.createElement(L.a,H.a.general,(t={desktop:[{value:"hstyle1",label:Object(y.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(y.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(y.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(y.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(y.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(y.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(y.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(y.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(y.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(y.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],tablet:[{value:"hstyle1",label:Object(y.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(y.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(y.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(y.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(y.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(y.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(y.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(y.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(y.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(y.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],mobile:[{value:"hstyle1",label:Object(y.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(y.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(y.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(y.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(y.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(y.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(y.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(y.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(y.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(y.__)("Vertical Style 10","ultimate-addons-for-gutenberg")},{value:"stack1",label:Object(y.__)("Stack Style 11","ultimate-addons-for-gutenberg")},{value:"stack2",label:Object(y.__)("Stack Style 12","ultimate-addons-for-gutenberg")},{value:"stack3",label:Object(y.__)("Stack Style 13","ultimate-addons-for-gutenberg")},{value:"stack4",label:Object(y.__)("Stack Style 14","ultimate-addons-for-gutenberg")}]},f.a.createElement(T.PanelBody,{title:Object(y.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},f.a.createElement(B,{label:Object(y.__)("Style","ultimate-addons-for-gutenberg"),data:{desktop:{value:r,label:"tabsStyleD"},tablet:{value:d,label:"tabsStyleT"},mobile:{value:u,label:"tabsStyleM"}},options:t,setAttributes:o}))),f.a.createElement(T.PanelBody,{title:Object(y.__)("Tabs Title Settings","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(T.SelectControl,{label:Object(y.__)("Initial Open Tab","ultimate-addons-for-gutenberg"),value:g,options:c.map((function(e,t){return{value:t,label:e}})),onChange:function(e){return o({tabActiveFrontend:parseInt(e)})}}),f.a.createElement(O.a,{setAttributes:o,label:Object(y.__)("Tab Alignment","ultimate-addons-for-gutenberg"),data:{value:ut,label:"tabAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:f.a.createElement(T.Icon,{icon:Object(i.a)("fa fa-align-left")}),tooltip:Object(y.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:f.a.createElement(T.Icon,{icon:Object(i.a)("fa fa-align-center")}),tooltip:Object(y.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:f.a.createElement(T.Icon,{icon:Object(i.a)("fa fa-align-right")}),tooltip:Object(y.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),f.a.createElement(O.a,{setAttributes:o,label:Object(y.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:rt,label:"titleAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:f.a.createElement(T.Icon,{icon:Object(i.a)("fa fa-align-left")}),tooltip:Object(y.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:f.a.createElement(T.Icon,{icon:Object(i.a)("fa fa-align-center")}),tooltip:Object(y.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:f.a.createElement(T.Icon,{icon:Object(i.a)("fa fa-align-right")}),tooltip:Object(y.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),f.a.createElement(T.ToggleControl,{label:Object(y.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:dt,onChange:function(){return o({showIcon:!dt})}}),dt&&f.a.createElement(f.a.Fragment,null,f.a.createElement("h2",{className:"components-base-control__label"},Object(y.__)("Icon","ultimate-addons-for-gutenberg")),f.a.createElement(n.a,{icons:wp.UAGBSvgIcons,renderFunc:i.a,theme:"default",value:gt,onChange:function(e){return o({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(y.__)("Select Icon","ultimate-addons-for-gutenberg")}),f.a.createElement(O.a,{setAttributes:o,label:Object(y.__)("Icon Position","ultimate-addons-for-gutenberg"),data:{value:st,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",label:Object(y.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(y.__)("Right","ultimate-addons-for-gutenberg")},{value:"top",label:Object(y.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(y.__)("Bottom","ultimate-addons-for-gutenberg")}]})))),f.a.createElement(L.a,H.a.style,f.a.createElement(T.PanelBody,{title:Object(y.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(C.a,R({},e,{label:Object(y.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:I,label:"tabTitleTopMargin"},valueRight:{value:F,label:"tabTitleRightMargin"},valueBottom:{value:x,label:"tabTitleBottomMargin"},valueLeft:{value:A,label:"tabTitleLeftMargin"},valueTopTablet:{value:Z,label:"tabTitleTopMarginTablet"},valueRightTablet:{value:D,label:"tabTitleRightMarginTablet"},valueBottomTablet:{value:W,label:"tabTitleBottomMarginTablet"},valueLeftTablet:{value:N,label:"tabTitleLeftMarginTablet"},valueTopMobile:{value:$,label:"tabTitleTopMarginMobile"},valueRightMobile:{value:J,label:"tabTitleRightMarginMobile"},valueBottomMobile:{value:q,label:"tabTitleBottomMarginMobile"},valueLeftMobile:{value:G,label:"tabTitleLeftMarginMobile"},unit:{value:K,label:"tabTitleMarginUnit"},mUnit:{value:Q,label:"mobiletabTitleMarginUnit"},tUnit:{value:X,label:"tablettabTitleMarginUnit"},attributes:l,setAttributes:o,link:{value:Y,label:"tabTitleMarginLink"}})),f.a.createElement(C.a,R({},e,{label:Object(y.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ee,label:"tabTitleTopPadding"},valueRight:{value:te,label:"tabTitleRightPadding"},valueBottom:{value:ae,label:"tabTitleBottomPadding"},valueLeft:{value:le,label:"tabTitleLeftPadding"},valueTopTablet:{value:oe,label:"tabTitleTopPaddingTablet"},valueRightTablet:{value:ne,label:"tabTitleRightPaddingTablet"},valueBottomTablet:{value:ie,label:"tabTitleBottomPaddingTablet"},valueLeftTablet:{value:be,label:"tabTitleLeftPaddingTablet"},valueTopMobile:{value:re,label:"tabTitleTopPaddingMobile"},valueRightMobile:{value:ue,label:"tabTitleRightPaddingMobile"},valueBottomMobile:{value:de,label:"tabTitleBottomPaddingMobile"},valueLeftMobile:{value:ge,label:"tabTitleLeftPaddingMobile"},unit:{value:ce,label:"tabTitlePaddingUnit"},mUnit:{value:se,label:"mobiletabTitlePaddingUnit"},tUnit:{value:ve,label:"tablettabTitlePaddingUnit"},attributes:l,setAttributes:o,link:{value:me,label:"tabTitlePaddingLink"}})),f.a.createElement(j.a,{label:Object(y.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:s,onColorChange:function(e){return o({headerBgColor:e})}}),f.a.createElement(j.a,{label:Object(y.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:M,onColorChange:function(e){return o({headerTextColor:e})}}),f.a.createElement(j.a,{label:Object(y.__)("Active Tab Background Color","ultimate-addons-for-gutenberg"),colorValue:w,onColorChange:function(e){return o({activeTabBgColor:e})}}),f.a.createElement(j.a,{label:Object(y.__)("Active Tab Text Color","ultimate-addons-for-gutenberg"),colorValue:V,onColorChange:function(e){return o({activeTabTextColor:e})}}),f.a.createElement(b.a,{label:Object(y.__)("Typography","ultimate-addons-for-gutenberg"),attributes:l,setAttributes:o,loadGoogleFonts:{value:$e,label:"titleLoadGoogleFonts"},fontFamily:{value:qe,label:"titleFontFamily"},fontWeight:{value:Ke,label:"titleFontWeight"},fontSubset:{value:Qe,label:"titleFontSubset"},fontSizeType:{value:Xe,label:"titleFontSizeType"},fontSize:{value:Ye,label:"titleFontSize"},fontSizeMobile:{value:et,label:"titleFontSizeMobile"},fontSizeTablet:{value:tt,label:"titleFontSizeTablet"},lineHeightType:{value:at,label:"titleLineHeightType"},lineHeight:{value:lt,label:"titleLineHeight"},lineHeightMobile:{value:ot,label:"titleLineHeightMobile"},lineHeightTablet:{value:nt,label:"titleLineHeightTablet"},transform:{value:it,label:"titleTransform"},decoration:{value:bt,label:"titleDecoration"}})),dt?f.a.createElement(T.PanelBody,{title:Object(y.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(S.a,{label:Object(y.__)("Spacing","ultimate-addons-for-gutenberg"),setAttributes:o,value:vt,onChange:function(e){return o({iconSpacing:e})},min:0,max:500,displayUnit:!1}),f.a.createElement(j.a,{label:Object(y.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ct,onColorChange:function(e){return o({iconColor:e})}}),f.a.createElement(j.a,{label:Object(y.__)("Active Color","ultimate-addons-for-gutenberg"),colorValue:ft,onColorChange:function(e){return o({activeiconColor:e})}}),f.a.createElement(S.a,{label:Object(y.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:o,value:mt,onChange:function(e){return o({iconSize:e})},min:0,max:500,displayUnit:!1})):"",f.a.createElement(T.PanelBody,{title:Object(y.__)("Body","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(j.a,{label:Object(y.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:U,onColorChange:function(e){return o({bodyBgColor:e})}}),f.a.createElement(j.a,{label:Object(y.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:z,onColorChange:function(e){return o({bodyTextColor:e})}}),f.a.createElement(C.a,R({},e,{label:Object(y.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Te,label:"tabBodyTopMargin"},valueRight:{value:ye,label:"tabBodyRightMargin"},valueBottom:{value:_e,label:"tabBodyBottomMargin"},valueLeft:{value:fe,label:"tabBodyLeftMargin"},valueTopTablet:{value:Me,label:"tabBodyTopMarginTablet"},valueRightTablet:{value:he,label:"tabBodyRightMarginTablet"},valueBottomTablet:{value:Be,label:"tabBodyBottomMarginTablet"},valueLeftTablet:{value:pe,label:"tabBodyLeftMarginTablet"},valueTopMobile:{value:Ce,label:"tabBodyTopMarginMobile"},valueRightMobile:{value:je,label:"tabBodyRightMarginMobile"},valueBottomMobile:{value:Se,label:"tabBodyBottomMarginMobile"},valueLeftMobile:{value:Oe,label:"tabBodyLeftMarginMobile"},unit:{value:Pe,label:"tabBodyMarginUnit"},mUnit:{value:Ee,label:"mobiletabBodyMarginUnit"},tUnit:{value:Le,label:"tablettabBodyMarginUnit"},attributes:l,setAttributes:o,link:{value:He,label:"tabBodyMarginLink"}})),f.a.createElement(C.a,R({},e,{label:Object(y.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ke,label:"tabBodyTopPadding"},valueRight:{value:Re,label:"tabBodyRightPadding"},valueBottom:{value:we,label:"tabBodyBottomPadding"},valueLeft:{value:Ve,label:"tabBodyLeftPadding"},valueTopTablet:{value:Ue,label:"tabBodyTopPaddingTablet"},valueRightTablet:{value:ze,label:"tabBodyRightPaddingTablet"},valueBottomTablet:{value:Ae,label:"tabBodyBottomPaddingTablet"},valueLeftTablet:{value:Fe,label:"tabBodyLeftPaddingTablet"},valueTopMobile:{value:Ie,label:"tabBodyTopPaddingMobile"},valueRightMobile:{value:xe,label:"tabBodyRightPaddingMobile"},valueBottomMobile:{value:Ne,label:"tabBodyBottomPaddingMobile"},valueLeftMobile:{value:De,label:"tabBodyLeftPaddingMobile"},unit:{value:Ze,label:"tabBodyPaddingUnit"},mUnit:{value:We,label:"mobiletabBodyPaddingUnit"},tUnit:{value:Ge,label:"tablettabBodyPaddingUnit"},attributes:l,setAttributes:o,link:{value:Je,label:"tabBodyPaddingLink"}}))),f.a.createElement(T.PanelBody,{title:Object(y.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(P.a,{setAttributes:o,borderStyle:{value:v,label:"borderStyle",title:Object(y.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:m,label:"borderWidth",title:Object(y.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:_,label:"borderRadius",title:Object(y.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:p,label:"borderColor",title:Object(y.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:h,label:"borderHoverColor",title:Object(y.__)("Hover Color","ultimate-addons-for-gutenberg")}}))),f.a.createElement(L.a,H.a.advance)))};t.default=f.a.memo(w)}}]);