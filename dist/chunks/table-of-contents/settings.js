(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[93],{535:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t(6),o=t(12),r=t(1),i=t.n(r),c=t(10),s=t(18),u=t(97),m=t.n(u),g=t(60),b=t(51),d=t(5),p=t(3);function h(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,a){if(e){if("string"==typeof e)return f(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var _=function(e){var a,t,u=e=e.parentProps,f=u.attributes,_=u.setAttributes,C=u.deviceType,E=f.align,y=f.disableBullets,T=f.makeCollapsible,k=f.initialCollapse,v=f.icon,S=f.iconColor,x=f.bulletColor,O=f.iconSize,N=f.smoothScroll,j=f.smoothScrollOffset,z=f.smoothScrollDelay,P=f.scrollToTop,w=f.scrollToTopColor,R=f.scrollToTopBgColor,B=f.customWidth,M=f.widthDesktop,F=f.widthTablet,D=f.widthMobile,H=f.widthTypeMobile,G=f.widthTypeTablet,A=f.widthTypeDesktop,L=f.tColumnsDesktop,W=f.tColumnsTablet,I=f.tColumnsMobile,J=f.backgroundColor,U=f.linkColor,K=f.linkHoverColor,$=f.headingColor,q=f.vPaddingDesktop,Q=f.vPaddingTablet,V=f.vPaddingMobile,X=f.hPaddingDesktop,Y=f.hPaddingTablet,Z=f.hPaddingMobile,ee=f.paddingTypeMobile,ae=f.paddingTypeTablet,te=f.paddingTypeDesktop,ne=f.vMarginDesktop,le=f.vMarginTablet,oe=f.vMarginMobile,re=f.hMarginDesktop,ie=f.hMarginTablet,ce=f.hMarginMobile,se=f.marginTypeMobile,ue=f.marginTypeTablet,me=f.marginTypeDesktop,ge=f.headingBottom,be=f.contentPaddingDesktop,de=f.contentPaddingTablet,pe=f.contentPaddingMobile,he=f.contentPaddingTypeMobile,fe=f.contentPaddingTypeTablet,_e=f.contentPaddingTypeDesktop,Ce=f.borderStyle,Ee=f.borderWidth,ye=f.borderRadius,Te=f.borderColor,ke=f.loadGoogleFonts,ve=f.fontFamily,Se=f.fontWeight,xe=f.fontSubset,Oe=f.fontSize,Ne=f.fontSizeType,je=f.fontSizeTablet,ze=f.fontSizeMobile,Pe=f.lineHeightType,we=f.lineHeight,Re=f.lineHeightTablet,Be=f.lineHeightMobile,Me=f.headingLoadGoogleFonts,Fe=f.headingFontFamily,De=f.headingFontWeight,He=f.headingFontSubset,Ge=f.headingFontSize,Ae=f.headingFontSizeType,Le=f.headingFontSizeTablet,We=f.headingFontSizeMobile,Ie=f.headingLineHeightType,Je=f.headingLineHeight,Ue=f.headingLineHeightTablet,Ke=f.headingLineHeightMobile,$e=f.mappingHeaders,qe=f.headingAlignment,Qe={icons:wp.UAGBSvgIcons,value:v,onChange:function(a){e.setAttributes({icon:a})},isMulti:!1,renderFunc:o.a,noSelectedPlaceholder:Object(n.__)("Select Icon","ultimate-addons-for-gutenberg")};if(1==ke){var Ve={google:{families:[ve+(Se?":"+Se:"")]}};a=i.a.createElement(b.a,{config:Ve})}if(1==Me){var Xe={google:{families:[Fe+(De?":"+De:"")]}};t=i.a.createElement(b.a,{config:Xe})}return i.a.createElement(r.Suspense,{fallback:Object(c.a)()},i.a.createElement(d.BlockControls,null,i.a.createElement(d.BlockAlignmentToolbar,{value:E,onChange:function(e){_({align:e})},controls:["left","center","right"]})),i.a.createElement(d.InspectorControls,null,i.a.createElement(p.PanelBody,{title:Object(n.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement("h2",null,Object(n.__)("Select the heading to consider when generating the table","ultimate-addons-for-gutenberg")),$e.map((function(e,a){return i.a.createElement(p.PanelRow,{key:a},i.a.createElement("label",{htmlFor:"ub_toggle_h".concat(a+1)},"H".concat(a+1)),i.a.createElement(p.ToggleControl,{id:"ub_toggle_h".concat(a+1),checked:e,onChange:function(){return _({mappingHeaders:[].concat(h($e.slice(0,a)),[!$e[a]],h($e.slice(a+1)))})}}))}))),i.a.createElement(p.PanelBody,{title:Object(n.__)("Scroll","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(n.__)("Smooth Scroll","ultimate-addons-for-gutenberg"),checked:N,help:Object(n.__)("This will be in Action only in Front End.","ultimate-addons-for-gutenberg"),onChange:function(){return _({smoothScroll:!N})}}),N&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.RangeControl,{label:Object(n.__)("Smooth Scroll Offset (px)","ultimate-addons-for-gutenberg"),value:j,onChange:function(e){return _({smoothScrollOffset:e})},min:0,max:1e3}),i.a.createElement(p.RangeControl,{label:Object(n.__)("Scroll Animation Delay (ms)","ultimate-addons-for-gutenberg"),value:z,onChange:function(e){return _({smoothScrollDelay:e})},min:100,max:5e3})),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(p.ToggleControl,{label:Object(n.__)("Show Scroll To Top","ultimate-addons-for-gutenberg"),checked:P,help:Object(n.__)("This will add a Scroll to Top arrow at the bottom of page.","ultimate-addons-for-gutenberg"),onChange:function(){return _({scrollToTop:!P})}}),P&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Icon Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:w}}))),i.a.createElement(d.ColorPalette,{value:w,onChange:function(e){return _({scrollToTopColor:e})},allowReset:!0}),i.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:R}}))),i.a.createElement(d.ColorPalette,{value:R,onChange:function(e){return _({scrollToTopBgColor:e})},allowReset:!0}))),i.a.createElement(p.PanelBody,{title:Object(n.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement("h2",null,Object(n.__)("Heading","ultimate-addons-for-gutenberg")),i.a.createElement(p.SelectControl,{label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),value:qe,onChange:function(e){return _({headingAlignment:e})},options:[{value:"left",label:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",label:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",label:Object(n.__)("Right","ultimate-addons-for-gutenberg")}]}),i.a.createElement(p.RangeControl,{label:Object(n.__)("Bottom Space","ultimate-addons-for-gutenberg"),value:ge,onChange:function(e){return _({headingBottom:e})},min:0,max:50,allowReset:!0}),i.a.createElement(s.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:f,setAttributes:_,loadGoogleFonts:{value:Me,label:"headingLoadGoogleFonts"},fontFamily:{value:Fe,label:"headingFontFamily"},fontWeight:{value:De,label:"headingFontWeight"},fontSubset:{value:He,label:"headingFontSubset"},fontSizeType:{value:Ae,label:"headingFontSizeType"},fontSize:{value:Ge,label:"headingFontSize"},fontSizeMobile:{value:We,label:"headingFontSizeMobile"},fontSizeTablet:{value:Le,label:"headingFontSizeTablet"},lineHeightType:{value:Ie,label:"headingLineHeightType"},lineHeight:{value:Je,label:"headingLineHeight"},lineHeightMobile:{value:Ke,label:"headingLineHeightMobile"},lineHeightTablet:{value:Ue,label:"headingLineHeightTablet"}}),i.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Heading Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:$}}))),i.a.createElement(d.ColorPalette,{value:$,onChange:function(e){return _({headingColor:e})},allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(n.__)("Collapsible","ultimate-addons-for-gutenberg")),i.a.createElement(p.ToggleControl,{label:Object(n.__)("Make Content Collapsible","ultimate-addons-for-gutenberg"),checked:T,onChange:function(){return _({makeCollapsible:!T})}}),T&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.ToggleControl,{label:Object(n.__)("Keep Collapsed Initially","ultimate-addons-for-gutenberg"),checked:k,onChange:function(){return _({initialCollapse:!k})}}),i.a.createElement(m.a,Qe),i.a.createElement(p.RangeControl,{label:Object(n.__)("Icon Size","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){return _({iconSize:e})},min:0,max:300,beforeIcon:"",allowReset:!0}),i.a.createElement(d.ColorPalette,{value:S,onChange:function(e){return _({iconColor:e})},allowReset:!0})),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(n.__)("Content","ultimate-addons-for-gutenberg")),i.a.createElement(p.ToggleControl,{label:Object(n.__)("Disable Bullet Points","ultimate-addons-for-gutenberg"),checked:y,onChange:function(){return _({disableBullets:!y})}}),!y&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Bullet Points Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:x}}))),i.a.createElement(d.ColorPalette,{value:x,onChange:function(e){return _({bulletColor:e})},allowReset:!0})),i.a.createElement(g.a,null),"Desktop"===C&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type")},i.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===_e,"aria-pressed":"px"===_e,onClick:function(){return _({contentPaddingTypeDesktop:"px"})}},"px"),i.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===_e,"aria-pressed":"%"===_e,onClick:function(){return _({contentPaddingTypeDesktop:"%"})}},"%")),i.a.createElement("h2",{className:"uagb-light-font-weight"},Object(n.__)("Gap Between Lists")),i.a.createElement(p.RangeControl,{className:"uagb-gap-control",value:be,onChange:function(e){return _({contentPaddingDesktop:e})},min:0,max:100,allowReset:!0})),"Tablet"===C&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type")},i.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===fe,"aria-pressed":"px"===fe,onClick:function(){return _({contentPaddingTypeTablet:"px"})}},"px"),i.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===fe,"aria-pressed":"%"===fe,onClick:function(){return _({contentPaddingTypeTablet:"%"})}},"%")),i.a.createElement("h2",{className:"uagb-lighter-font-weight"},Object(n.__)("Gap Between Lists")),i.a.createElement(p.RangeControl,{className:"uagb-margin-control",value:de,onChange:function(e){return _({contentPaddingTablet:e})},min:0,max:100,allowReset:!0})),"Mobile"===C&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type")},i.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===he,"aria-pressed":"px"===he,onClick:function(){return _({contentPaddingTypeMobile:"px"})}},"px"),i.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===he,"aria-pressed":"%"===he,onClick:function(){return _({contentPaddingTypeMobile:"%"})}},"%")),i.a.createElement("h2",{className:"uagb-light-font-weight"},Object(n.__)("Gap Between Lists")),i.a.createElement(p.RangeControl,{className:"uagb-margin-control",value:pe,onChange:function(e){return _({contentPaddingMobile:e})},min:0,max:100,allowReset:!0})),i.a.createElement(s.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:f,setAttributes:_,loadGoogleFonts:{value:ke,label:"loadGoogleFonts"},fontFamily:{value:ve,label:"fontFamily"},fontWeight:{value:Se,label:"fontWeight"},fontSubset:{value:xe,label:"fontSubset"},fontSizeType:{value:Ne,label:"fontSizeType"},fontSize:{value:Oe,label:"fontSize"},fontSizeMobile:{value:ze,label:"fontSizeMobile"},fontSizeTablet:{value:je,label:"fontSizeTablet"},lineHeightType:{value:Pe,label:"lineHeightType"},lineHeight:{value:we,label:"lineHeight"},lineHeightMobile:{value:Be,label:"lineHeightMobile"},lineHeightTablet:{value:Re,label:"lineHeightTablet"}}),i.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Content Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:U}}))),i.a.createElement(d.ColorPalette,{value:U,onChange:function(e){return _({linkColor:e})},allowReset:!0}),i.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Content Hover Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:K}}))),i.a.createElement(d.ColorPalette,{value:K,onChange:function(e){return _({linkHoverColor:e})},allowReset:!0})),i.a.createElement(p.PanelBody,{title:Object(n.__)("Style","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement("h2",null,Object(n.__)("Background","ultimate-addons-for-gutenberg")),i.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:J}}))),i.a.createElement(d.ColorPalette,{value:J,onChange:function(e){return _({backgroundColor:e})},allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(p.ToggleControl,{label:Object(n.__)("Custom Width","ultimate-addons-for-gutenberg"),checked:B,onChange:function(){return _({customWidth:!B})},help:Object(n.__)("Table's width will be auto if this is kept off.","ultimate-addons-for-gutenberg")}),B&&i.a.createElement(g.a,null),"Desktop"===C&&B&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type")},i.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===A,"aria-pressed":"px"===A,onClick:function(){return _({widthTypeDesktop:"px"})}},"px"),i.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===A,"aria-pressed":"%"===A,onClick:function(){return _({widthTypeDesktop:"%"})}},"%")),i.a.createElement(p.RangeControl,{label:Object(n.__)("Width"),value:M,onChange:function(e){return _({widthDesktop:e})},min:0,max:"%"==A?100:1e3,beforeIcon:"",allowReset:!0})),"Tablet"===C&&B&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type")},i.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===G,"aria-pressed":"px"===G,onClick:function(){return _({widthTypeTablet:"px"})}},"px"),i.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===G,"aria-pressed":"%"===G,onClick:function(){return _({widthTypeTablet:"%"})}},"%")),i.a.createElement(p.RangeControl,{label:Object(n.__)("Width"),value:F,onChange:function(e){return _({widthTablet:e})},min:0,max:"%"==G?100:1e3,beforeIcon:"",allowReset:!0})),"Mobile"===C&&B&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type")},i.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===H,"aria-pressed":"px"===H,onClick:function(){return _({widthTypeMobile:"px"})}},"px"),i.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===H,"aria-pressed":"%"===H,onClick:function(){return _({widthTypeMobile:"%"})}},"%")),i.a.createElement(p.RangeControl,{label:Object(n.__)("Width"),value:D,onChange:function(e){return _({widthMobile:e})},min:0,max:"%"==H?100:1e3,beforeIcon:"",allowReset:!0})),i.a.createElement(g.a,null),"Desktop"===C&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.RangeControl,{label:Object(n.__)("Columns"),value:L,onChange:function(e){return _({tColumnsDesktop:e})},min:1,max:10})),"Tablet"===C&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.RangeControl,{label:Object(n.__)("Columns"),value:W,onChange:function(e){return _({tColumnsTablet:e})},min:1,max:10})),"Mobile"===C&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.RangeControl,{label:Object(n.__)("Columns"),value:I,onChange:function(e){return _({tColumnsMobile:e})},min:1,max:10})),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(g.a,null),"Desktop"===C&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type")},i.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===te,"aria-pressed":"px"===te,onClick:function(){return _({paddingTypeDesktop:"px"})}},"px"),i.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===te,"aria-pressed":"%"===te,onClick:function(){return _({paddingTypeDesktop:"%"})}},"%")),i.a.createElement("h2",null,Object(n.__)("Padding")),i.a.createElement(p.RangeControl,{label:l.a.vertical_spacing,className:"uagb-margin-control",value:q,onChange:function(e){return _({vPaddingDesktop:e})},min:0,max:100,allowReset:!0}),i.a.createElement(p.RangeControl,{label:l.a.horizontal_spacing,className:"uagb-margin-control",value:X,onChange:function(e){return _({hPaddingDesktop:e})},min:0,max:100,allowReset:!0})),"Tablet"===C&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type")},i.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===ae,"aria-pressed":"px"===ae,onClick:function(){return _({paddingTypeTablet:"px"})}},"px"),i.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===ae,"aria-pressed":"%"===ae,onClick:function(){return _({paddingTypeTablet:"%"})}},"%")),i.a.createElement("h2",null,Object(n.__)("Padding")),i.a.createElement(p.RangeControl,{label:l.a.vertical_spacing,className:"uagb-margin-control",value:Q,onChange:function(e){return _({vPaddingTablet:e})},min:0,max:100,allowReset:!0}),i.a.createElement(p.RangeControl,{label:l.a.horizontal_spacing,className:"uagb-margin-control",value:Y,onChange:function(e){return _({hPaddingTablet:e})},min:0,max:100,allowReset:!0})),"Mobile"===C&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type")},i.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===ee,"aria-pressed":"px"===ee,onClick:function(){return _({paddingTypeMobile:"px"})}},"px"),i.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===ee,"aria-pressed":"%"===ee,onClick:function(){return _({paddingTypeMobile:"%"})}},"%")),i.a.createElement("h2",null,Object(n.__)("Padding")),i.a.createElement(p.RangeControl,{label:l.a.vertical_spacing,className:"uagb-margin-control",value:V,onChange:function(e){return _({vPaddingMobile:e})},min:0,max:100,allowReset:!0}),i.a.createElement(p.RangeControl,{label:l.a.horizontal_spacing,className:"uagb-margin-control",value:Z,onChange:function(e){return _({hPaddingMobile:e})},min:0,max:100,allowReset:!0})),i.a.createElement(g.a,null),"Desktop"===C&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type")},i.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===me,"aria-pressed":"px"===me,onClick:function(){return _({marginTypeDesktop:"px"})}},"px"),i.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===me,"aria-pressed":"%"===me,onClick:function(){return _({marginTypeDesktop:"%"})}},"%")),i.a.createElement("h2",null,Object(n.__)("List Margin")),i.a.createElement(p.RangeControl,{label:l.a.vertical_spacing,className:"uagb-margin-control",value:ne,onChange:function(e){return _({vMarginDesktop:e})},min:0,max:100,allowReset:!0}),i.a.createElement(p.RangeControl,{label:l.a.horizontal_spacing,className:"uagb-margin-control",value:re,onChange:function(e){return _({hMarginDesktop:e})},min:0,max:100,allowReset:!0})),"Tablet"===C&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type")},i.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===ue,"aria-pressed":"px"===ue,onClick:function(){return _({marginTypeTablet:"px"})}},"px"),i.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===ue,"aria-pressed":"%"===ue,onClick:function(){return _({marginTypeTablet:"%"})}},"%")),i.a.createElement("h2",null,Object(n.__)("List Margin")),i.a.createElement(p.RangeControl,{label:l.a.vertical_spacing,className:"uagb-margin-control",value:le,onChange:function(e){return _({vMarginTablet:e})},min:0,max:100,allowReset:!0}),i.a.createElement(p.RangeControl,{label:l.a.horizontal_spacing,className:"uagb-margin-control",value:ie,onChange:function(e){return _({hMarginTablet:e})},min:0,max:100,allowReset:!0})),"Mobile"===C&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type")},i.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===se,"aria-pressed":"px"===se,onClick:function(){return _({marginTypeMobile:"px"})}},"px"),i.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===se,"aria-pressed":"%"===se,onClick:function(){return _({marginTypeMobile:"%"})}},"%")),i.a.createElement("h2",null,Object(n.__)("List Margin")),i.a.createElement(p.RangeControl,{label:l.a.vertical_spacing,className:"uagb-margin-control",value:oe,onChange:function(e){return _({vMarginMobile:e})},min:0,max:100,allowReset:!0}),i.a.createElement(p.RangeControl,{label:l.a.horizontal_spacing,className:"uagb-margin-control",value:ce,onChange:function(e){return _({hMarginMobile:e})},min:0,max:100,allowReset:!0})),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(n.__)("Border","ultimate-addons-for-gutenberg")),i.a.createElement(p.SelectControl,{label:Object(n.__)("Border Style","ultimate-addons-for-gutenberg"),value:Ce,onChange:function(e){return _({borderStyle:e})},options:[{value:"none",label:Object(n.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(n.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(n.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(n.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(n.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(n.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(n.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(n.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(n.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=Ce&&i.a.createElement(p.RangeControl,{label:Object(n.__)("Border Width","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return _({borderWidth:e})},min:0,max:50,allowReset:!0}),i.a.createElement(p.RangeControl,{label:Object(n.__)("Border Radius","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return _({borderRadius:e})},min:0,max:1e3,allowReset:!0}),"none"!=Ce&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Border Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Te}}))),i.a.createElement(d.ColorPalette,{value:Te,onChange:function(e){return _({borderColor:e})},allowReset:!0})))),a,t)};a.default=i.a.memo(_)}}]);