(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[96],{365:function(e,t,a){"use strict";var l=a(15),o=a.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-responsive-select-control .uagb-size-type-field-tabs .components-tab-panel__tabs {\n  padding-right: 0; }\n",""]),t.a=o},564:function(e,t,a){"use strict";a.r(t);var l,o=a(96),n=a.n(o),i=a(12),b=a(18),r=a(14),u=a.n(r),d=a(365),g=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=d.a.locals||{},s.use=function(){return g++||(l=u()(d.a,c)),s},s.unuse=function(){g>0&&!--g&&(l(),l=null)};var v=s,m=a(1),f=a.n(m),y=a(2),T=a(4),_=a(9),p=a(11);function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}var B=function(e){Object(m.useLayoutEffect)((function(){return v.use(),function(){v.unuse()}}),[]);var t,a,l=(t=Object(p.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,o,n=[],_n=!0,i=!1;try{for(a=a.call(e);!(_n=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);_n=!0);}catch(e){i=!0,o=e}finally{try{_n||null==a.return||a.return()}finally{if(i)throw o}}return n}}(t,a)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?M(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=l[0],n=l[1],i=(e.label,e.data),b=e.setAttributes,r=e.options,u=Object(_.useSelect)((function(e){return e("core/edit-post").__experimentalGetPreviewDeviceType()}),[]),d=Object(_.useDispatch)("core/edit-post").__experimentalSetPreviewDeviceType,g={desktop:f.a.createElement("svg",{width:"8",height:"7",viewBox:"0 0 8 7",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("path",{d:"M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"})),tablet:f.a.createElement("svg",{width:"6",height:"7",viewBox:"0 0 6 7",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("path",{d:"M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"})),mobile:f.a.createElement("svg",{width:"4",height:"7",viewBox:"0 0 4 7",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("path",{d:"M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"}))},c=[{name:"Desktop",title:g.desktop,itemClass:"uagb-desktop-tab uagb-responsive-tabs"},{name:"Tablet",title:g.tablet,itemClass:"uagb-tablet-tab uagb-responsive-tabs"},{name:"Mobile",key:"mobile",title:g.mobile,itemClass:"uagb-mobile-tab uagb-responsive-tabs"}],s={};return s.Desktop=f.a.createElement(T.SelectControl,{value:i.desktop.value,onChange:function(e){return b(h({},i.desktop.label,e))},options:r.desktop}),s.Tablet=f.a.createElement(T.SelectControl,{value:i.tablet.value,onChange:function(e){return b(h({},i.tablet.label,e))},options:r.tablet||r.desktop}),s.Mobile=f.a.createElement(T.SelectControl,{value:i.mobile.value,onChange:function(e){return b(h({},i.mobile.label,e))},options:r.mobile||r.desktop}),f.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},f.a.createElement("div",{className:"uagb-size-type-field-tabs"},f.a.createElement("div",{className:"uagb-control__header"},f.a.createElement("div",{className:"uag-responsive-label-wrap"},e.label&&f.a.createElement("label",{className:"uagb-range-control__label"},e.label),!o&&f.a.createElement(T.Button,{key:"uag-responsive-common-button",className:"uag-responsive-common-button",onClick:function(){n(!o)}},g[u.toLowerCase()]),o&&f.a.createElement(T.ButtonGroup,{className:"uagb-range-control-responsive components-tab-panel__tabs","aria-label":Object(y.__)("Device","ultimate-addons-for-gutenberg")},c.map((function(e){var t=e.name,a=e.key,l=e.title,i=e.itemClass;return f.a.createElement(T.Button,{key:a,className:"components-button components-tab-panel__tabs-item uagb-range-control-responsive-item ".concat(i).concat(t===u?" active-tab":""),"aria-pressed":u===t,onClick:function(){return d(t),void n(!o)}},l)}))))),s[u]?s[u]:s.Desktop))},O=a(53),j=a(17),C=a(98),S=a(16),P=a(104),E=a(97),L=a(60),H=a(5);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var R=function(e){var t,a=e=e.parentProps,l=a.attributes,o=a.setAttributes,r=(a.deviceType,l.tabsStyleD),u=l.tabsStyleM,d=l.tabsStyleT,g=l.tabActiveFrontend,c=l.tabHeaders,s=l.headerBgColor,v=l.borderStyle,m=l.borderWidth,_=l.borderRadius,p=l.borderColor,h=l.borderHoverColor,M=l.headerTextColor,R=l.activeTabBgColor,w=l.activeTabTextColor,V=l.bodyBgColor,U=l.bodyTextColor,z=l.tabTitleLeftMargin,A=l.tabTitleRightMargin,F=l.tabTitleTopMargin,I=l.tabTitleBottomMargin,x=l.tabTitleLeftMarginTablet,D=l.tabTitleRightMarginTablet,N=l.tabTitleTopMarginTablet,Z=l.tabTitleBottomMarginTablet,W=l.tabTitleLeftMarginMobile,G=l.tabTitleRightMarginMobile,J=l.tabTitleTopMarginMobile,$=l.tabTitleBottomMarginMobile,q=l.tabTitleMarginUnit,K=l.mobiletabTitleMarginUnit,Q=l.tablettabTitleMarginUnit,X=l.tabTitleMarginLink,Y=l.tabTitleTopPadding,ee=l.tabTitleRightPadding,te=l.tabTitleBottomPadding,ae=l.tabTitleLeftPadding,le=l.tabTitleTopPaddingTablet,oe=l.tabTitleRightPaddingTablet,ne=l.tabTitleBottomPaddingTablet,ie=l.tabTitleLeftPaddingTablet,be=l.tabTitleTopPaddingMobile,re=l.tabTitleRightPaddingMobile,ue=l.tabTitleBottomPaddingMobile,de=l.tabTitleLeftPaddingMobile,ge=l.tabTitlePaddingUnit,ce=l.mobiletabTitlePaddingUnit,se=l.tablettabTitlePaddingUnit,ve=l.tabTitlePaddingLink,me=l.tabBodyLeftMargin,fe=l.tabBodyRightMargin,ye=l.tabBodyTopMargin,Te=l.tabBodyBottomMargin,_e=l.tabBodyLeftMarginTablet,pe=l.tabBodyRightMarginTablet,he=l.tabBodyTopMarginTablet,Me=l.tabBodyBottomMarginTablet,Be=l.tabBodyLeftMarginMobile,Oe=l.tabBodyRightMarginMobile,je=l.tabBodyTopMarginMobile,Ce=l.tabBodyBottomMarginMobile,Se=l.tabBodyMarginUnit,Pe=l.mobiletabBodyMarginUnit,Ee=l.tablettabBodyMarginUnit,Le=l.tabBodyMarginLink,He=l.tabBodyTopPadding,ke=l.tabBodyRightPadding,Re=l.tabBodyBottomPadding,we=l.tabBodyLeftPadding,Ve=l.tabBodyTopPaddingTablet,Ue=l.tabBodyRightPaddingTablet,ze=l.tabBodyBottomPaddingTablet,Ae=l.tabBodyLeftPaddingTablet,Fe=l.tabBodyTopPaddingMobile,Ie=l.tabBodyRightPaddingMobile,xe=l.tabBodyBottomPaddingMobile,De=l.tabBodyLeftPaddingMobile,Ne=l.tabBodyPaddingUnit,Ze=l.mobiletabBodyPaddingUnit,We=l.tablettabBodyPaddingUnit,Ge=l.tabBodyPaddingLink,Je=l.titleLoadGoogleFonts,$e=l.titleFontFamily,qe=l.titleFontWeight,Ke=l.titleFontSubset,Qe=l.titleFontSizeType,Xe=l.titleFontSize,Ye=l.titleFontSizeMobile,et=l.titleFontSizeTablet,tt=l.titleLineHeightType,at=l.titleLineHeight,lt=l.titleLineHeightMobile,ot=l.titleLineHeightTablet,nt=l.titleTransform,it=l.titleDecoration,bt=l.titleAlign,rt=l.tabAlign,ut=l.showIcon,dt=l.icon,gt=l.iconColor,ct=l.iconPosition,st=l.iconSpacing,vt=l.iconSize,mt=l.activeiconColor;return f.a.createElement(H.InspectorControls,null,f.a.createElement(E.a,null,f.a.createElement(L.a,{key:"general"},(t={desktop:[{value:"hstyle1",label:Object(y.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(y.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(y.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(y.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(y.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(y.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(y.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(y.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(y.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(y.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],tablet:[{value:"hstyle1",label:Object(y.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(y.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(y.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(y.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(y.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(y.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(y.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(y.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(y.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(y.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],mobile:[{value:"hstyle1",label:Object(y.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(y.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(y.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(y.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(y.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(y.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(y.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(y.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(y.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(y.__)("Vertical Style 10","ultimate-addons-for-gutenberg")},{value:"stack1",label:Object(y.__)("Stack Style 11","ultimate-addons-for-gutenberg")},{value:"stack2",label:Object(y.__)("Stack Style 12","ultimate-addons-for-gutenberg")},{value:"stack3",label:Object(y.__)("Stack Style 13","ultimate-addons-for-gutenberg")},{value:"stack4",label:Object(y.__)("Stack Style 14","ultimate-addons-for-gutenberg")}]},f.a.createElement(T.PanelBody,{title:Object(y.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},f.a.createElement(B,{label:Object(y.__)("Style","ultimate-addons-for-gutenberg"),data:{desktop:{value:r,label:"tabsStyleD"},tablet:{value:d,label:"tabsStyleT"},mobile:{value:u,label:"tabsStyleM"}},options:t,setAttributes:o}))),f.a.createElement(T.PanelBody,{title:Object(y.__)("Tabs Title Settings","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(T.SelectControl,{label:Object(y.__)("Initial Open Tab","ultimate-addons-for-gutenberg"),value:g,options:c.map((function(e,t){return{value:t,label:e}})),onChange:function(e){return o({tabActiveFrontend:parseInt(e)})}}),f.a.createElement(O.a,{setAttributes:o,label:Object(y.__)("Tab Alignment","ultimate-addons-for-gutenberg"),data:{value:rt,label:"tabAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:f.a.createElement(T.Icon,{icon:Object(i.a)("fa fa-align-left")}),tooltip:Object(y.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:f.a.createElement(T.Icon,{icon:Object(i.a)("fa fa-align-center")}),tooltip:Object(y.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:f.a.createElement(T.Icon,{icon:Object(i.a)("fa fa-align-right")}),tooltip:Object(y.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),f.a.createElement(O.a,{setAttributes:o,label:Object(y.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:bt,label:"titleAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:f.a.createElement(T.Icon,{icon:Object(i.a)("fa fa-align-left")}),tooltip:Object(y.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:f.a.createElement(T.Icon,{icon:Object(i.a)("fa fa-align-center")}),tooltip:Object(y.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:f.a.createElement(T.Icon,{icon:Object(i.a)("fa fa-align-right")}),tooltip:Object(y.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),f.a.createElement(T.ToggleControl,{label:Object(y.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:ut,onChange:function(){return o({showIcon:!ut})}}),ut&&f.a.createElement(f.a.Fragment,null,f.a.createElement("h2",{className:"components-base-control__label"},Object(y.__)("Icon","ultimate-addons-for-gutenberg")),f.a.createElement(n.a,{icons:wp.UAGBSvgIcons,renderFunc:i.a,theme:"default",value:dt,onChange:function(e){return o({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(y.__)("Select Icon","ultimate-addons-for-gutenberg")}),f.a.createElement(T.SelectControl,{label:Object(y.__)("Icon Position","ultimate-addons-for-gutenberg"),value:ct,options:[{value:"left",label:Object(y.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(y.__)("Right","ultimate-addons-for-gutenberg")},{value:"top",label:Object(y.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(y.__)("Bottom","ultimate-addons-for-gutenberg")}],onChange:function(e){return o({iconPosition:e})}})))),f.a.createElement(L.a,{key:"style"},f.a.createElement(T.PanelBody,{title:Object(y.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(C.a,k({},e,{label:Object(y.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:F,label:"tabTitleTopMargin"},valueRight:{value:A,label:"tabTitleRightMargin"},valueBottom:{value:I,label:"tabTitleBottomMargin"},valueLeft:{value:z,label:"tabTitleLeftMargin"},valueTopTablet:{value:N,label:"tabTitleTopMarginTablet"},valueRightTablet:{value:D,label:"tabTitleRightMarginTablet"},valueBottomTablet:{value:Z,label:"tabTitleBottomMarginTablet"},valueLeftTablet:{value:x,label:"tabTitleLeftMarginTablet"},valueTopMobile:{value:J,label:"tabTitleTopMarginMobile"},valueRightMobile:{value:G,label:"tabTitleRightMarginMobile"},valueBottomMobile:{value:$,label:"tabTitleBottomMarginMobile"},valueLeftMobile:{value:W,label:"tabTitleLeftMarginMobile"},unit:{value:q,label:"tabTitleMarginUnit"},mUnit:{value:K,label:"mobiletabTitleMarginUnit"},tUnit:{value:Q,label:"tablettabTitleMarginUnit"},attributes:l,setAttributes:o,link:{value:X,label:"tabTitleMarginLink"}})),f.a.createElement(C.a,k({},e,{label:Object(y.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Y,label:"tabTitleTopPadding"},valueRight:{value:ee,label:"tabTitleRightPadding"},valueBottom:{value:te,label:"tabTitleBottomPadding"},valueLeft:{value:ae,label:"tabTitleLeftPadding"},valueTopTablet:{value:le,label:"tabTitleTopPaddingTablet"},valueRightTablet:{value:oe,label:"tabTitleRightPaddingTablet"},valueBottomTablet:{value:ne,label:"tabTitleBottomPaddingTablet"},valueLeftTablet:{value:ie,label:"tabTitleLeftPaddingTablet"},valueTopMobile:{value:be,label:"tabTitleTopPaddingMobile"},valueRightMobile:{value:re,label:"tabTitleRightPaddingMobile"},valueBottomMobile:{value:ue,label:"tabTitleBottomPaddingMobile"},valueLeftMobile:{value:de,label:"tabTitleLeftPaddingMobile"},unit:{value:ge,label:"tabTitlePaddingUnit"},mUnit:{value:ce,label:"mobiletabTitlePaddingUnit"},tUnit:{value:se,label:"tablettabTitlePaddingUnit"},attributes:l,setAttributes:o,link:{value:ve,label:"tabTitlePaddingLink"}})),f.a.createElement(j.a,{label:Object(y.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:s,onColorChange:function(e){return o({headerBgColor:e})}}),f.a.createElement(j.a,{label:Object(y.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:M,onColorChange:function(e){return o({headerTextColor:e})}}),f.a.createElement(j.a,{label:Object(y.__)("Active Tab Background Color","ultimate-addons-for-gutenberg"),colorValue:R,onColorChange:function(e){return o({activeTabBgColor:e})}}),f.a.createElement(j.a,{label:Object(y.__)("Active Tab Text Color","ultimate-addons-for-gutenberg"),colorValue:w,onColorChange:function(e){return o({activeTabTextColor:e})}}),f.a.createElement(b.a,{label:Object(y.__)("Typography","ultimate-addons-for-gutenberg"),attributes:l,setAttributes:o,loadGoogleFonts:{value:Je,label:"titleLoadGoogleFonts"},fontFamily:{value:$e,label:"titleFontFamily"},fontWeight:{value:qe,label:"titleFontWeight"},fontSubset:{value:Ke,label:"titleFontSubset"},fontSizeType:{value:Qe,label:"titleFontSizeType"},fontSize:{value:Xe,label:"titleFontSize"},fontSizeMobile:{value:Ye,label:"titleFontSizeMobile"},fontSizeTablet:{value:et,label:"titleFontSizeTablet"},lineHeightType:{value:tt,label:"titleLineHeightType"},lineHeight:{value:at,label:"titleLineHeight"},lineHeightMobile:{value:lt,label:"titleLineHeightMobile"},lineHeightTablet:{value:ot,label:"titleLineHeightTablet"},transform:{value:nt,label:"titleTransform"},decoration:{value:it,label:"titleDecoration"}})),ut?f.a.createElement(T.PanelBody,{title:Object(y.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(S.a,{label:Object(y.__)("Spacing","ultimate-addons-for-gutenberg"),setAttributes:o,value:st,onChange:function(e){return o({iconSpacing:e})},min:0,max:500,displayUnit:!1}),f.a.createElement(j.a,{label:Object(y.__)("Color","ultimate-addons-for-gutenberg"),colorValue:gt,onColorChange:function(e){return o({iconColor:e})}}),f.a.createElement(j.a,{label:Object(y.__)("Active Color","ultimate-addons-for-gutenberg"),colorValue:mt,onColorChange:function(e){return o({activeiconColor:e})}}),f.a.createElement(S.a,{label:Object(y.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:o,value:vt,onChange:function(e){return o({iconSize:e})},min:0,max:500,displayUnit:!1})):"",f.a.createElement(T.PanelBody,{title:Object(y.__)("Body","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(j.a,{label:Object(y.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:V,onColorChange:function(e){return o({bodyBgColor:e})}}),f.a.createElement(j.a,{label:Object(y.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:U,onColorChange:function(e){return o({bodyTextColor:e})}}),f.a.createElement(C.a,k({},e,{label:Object(y.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:ye,label:"tabBodyTopMargin"},valueRight:{value:fe,label:"tabBodyRightMargin"},valueBottom:{value:Te,label:"tabBodyBottomMargin"},valueLeft:{value:me,label:"tabBodyLeftMargin"},valueTopTablet:{value:he,label:"tabBodyTopMarginTablet"},valueRightTablet:{value:pe,label:"tabBodyRightMarginTablet"},valueBottomTablet:{value:Me,label:"tabBodyBottomMarginTablet"},valueLeftTablet:{value:_e,label:"tabBodyLeftMarginTablet"},valueTopMobile:{value:je,label:"tabBodyTopMarginMobile"},valueRightMobile:{value:Oe,label:"tabBodyRightMarginMobile"},valueBottomMobile:{value:Ce,label:"tabBodyBottomMarginMobile"},valueLeftMobile:{value:Be,label:"tabBodyLeftMarginMobile"},unit:{value:Se,label:"tabBodyMarginUnit"},mUnit:{value:Pe,label:"mobiletabBodyMarginUnit"},tUnit:{value:Ee,label:"tablettabBodyMarginUnit"},attributes:l,setAttributes:o,link:{value:Le,label:"tabBodyMarginLink"}})),f.a.createElement(C.a,k({},e,{label:Object(y.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:He,label:"tabBodyTopPadding"},valueRight:{value:ke,label:"tabBodyRightPadding"},valueBottom:{value:Re,label:"tabBodyBottomPadding"},valueLeft:{value:we,label:"tabBodyLeftPadding"},valueTopTablet:{value:Ve,label:"tabBodyTopPaddingTablet"},valueRightTablet:{value:Ue,label:"tabBodyRightPaddingTablet"},valueBottomTablet:{value:ze,label:"tabBodyBottomPaddingTablet"},valueLeftTablet:{value:Ae,label:"tabBodyLeftPaddingTablet"},valueTopMobile:{value:Fe,label:"tabBodyTopPaddingMobile"},valueRightMobile:{value:Ie,label:"tabBodyRightPaddingMobile"},valueBottomMobile:{value:xe,label:"tabBodyBottomPaddingMobile"},valueLeftMobile:{value:De,label:"tabBodyLeftPaddingMobile"},unit:{value:Ne,label:"tabBodyPaddingUnit"},mUnit:{value:Ze,label:"mobiletabBodyPaddingUnit"},tUnit:{value:We,label:"tablettabBodyPaddingUnit"},attributes:l,setAttributes:o,link:{value:Ge,label:"tabBodyPaddingLink"}}))),f.a.createElement(T.PanelBody,{title:Object(y.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(P.a,{setAttributes:o,borderStyle:{value:v,label:"borderStyle",title:Object(y.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:m,label:"borderWidth",title:Object(y.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:_,label:"borderRadius",title:Object(y.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:p,label:"borderColor",title:Object(y.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:h,label:"borderHoverColor",title:Object(y.__)("Hover Color","ultimate-addons-for-gutenberg")}}))),f.a.createElement(L.a,{key:"advance"})))};t.default=f.a.memo(R)}}]);