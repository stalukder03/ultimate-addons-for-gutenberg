(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[25],{570:function(e,a,t){"use strict";t.r(a);var n=t(14),l=t(126),o=t.n(l),r=t(6),i=t(1),s=t.n(i),u=t(11),c=t(71),m=t(59),g=t(23),b=t(2),d=t(9),p=t(5),f=t(3),_=function(e){var a,t,l=e=e.parentProps,_=l.attributes,h=l.setAttributes,E=l.deviceType,C=_.layout,y=_.inactiveOtherItems,v=_.expandFirstItem,k=_.enableSchemaSupport,T=_.rowsGap,S=_.columnsGap,w=_.align,P=_.enableSeparator,x=_.boxBgColor,O=_.borderStyle,z=_.borderWidth,N=_.borderRadius,j=_.borderColor,R=_.questionTextColor,q=_.questionTextActiveColor,F=_.questionPaddingTypeDesktop,B=_.answerTextColor,D=_.answerPaddingTypeDesktop,H=_.vanswerPaddingMobile,M=_.vanswerPaddingTablet,G=_.vanswerPaddingDesktop,L=_.hanswerPaddingMobile,A=_.hanswerPaddingTablet,I=_.hanswerPaddingDesktop,W=_.iconColor,Q=_.iconActiveColor,U=_.gapBtwIconQUestion,J=_.questionloadGoogleFonts,K=_.questionFontFamily,V=_.questionFontWeight,X=_.questionFontSubset,Y=_.questionFontSizeType,Z=_.questionFontSize,$=_.questionFontSizeMobile,ee=_.questionFontSizeTablet,ae=_.questionLineHeightType,te=_.questionLineHeight,ne=_.questionLineHeightMobile,le=_.questionLineHeightTablet,oe=_.answerloadGoogleFonts,re=_.answerFontFamily,ie=_.answerFontWeight,se=_.answerFontSubset,ue=_.answerFontSizeType,ce=_.answerFontSize,me=_.answerFontSizeMobile,ge=_.answerFontSizeTablet,be=_.answerLineHeightType,de=_.answerLineHeight,pe=_.answerLineHeightMobile,fe=_.answerLineHeightTablet,_e=_.icon,he=_.iconActive,Ee=_.iconAlign,Ce=_.iconSizeType,ye=_.iconSizeMobile,ve=_.iconSizeTablet,ke=_.iconSize,Te=_.columns,Se=_.tcolumns,we=_.mcolumns,Pe=_.enableToggle,xe=_.equalHeight,Oe=_.questionLeftPaddingTablet,ze=_.hquestionPaddingTablet,Ne=_.vquestionPaddingTablet,je=_.questionBottomPaddingTablet,Re=_.questionLeftPaddingDesktop,qe=_.hquestionPaddingDesktop,Fe=_.vquestionPaddingDesktop,Be=_.questionBottomPaddingDesktop,De=_.questionLeftPaddingMobile,He=_.hquestionPaddingMobile,Me=_.vquestionPaddingMobile,Ge=_.questionBottomPaddingMobile,Le=_.headingTag;if(1==J){var Ae={google:{families:[K+(V?":"+V:"")]}};a=s.a.createElement(m.a,{config:Ae})}if(1==oe){var Ie={google:{families:[re+(ie?":"+ie:"")]}};t=s.a.createElement(m.a,{config:Ie})}return s.a.createElement(i.Suspense,{fallback:Object(u.a)()},s.a.createElement(p.InspectorControls,null,s.a.createElement(f.PanelBody,{title:Object(b.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},s.a.createElement(f.SelectControl,{label:Object(b.__)("Layout","ultimate-addons-for-gutenberg"),value:C,options:[{value:"accordion",label:Object(b.__)("Accordion","ultimate-addons-for-gutenberg")},{value:"grid",label:Object(b.__)("Grid","ultimate-addons-for-gutenberg")}],onChange:function(a){return function(a){Object(d.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.layout=a})),h({layout:a})}(a)}}),"accordion"===C&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.ToggleControl,{label:Object(b.__)("Collapse other items","ultimate-addons-for-gutenberg"),checked:y,onChange:function(){return h({inactiveOtherItems:!y})}}),!0===y&&s.a.createElement(f.ToggleControl,{label:Object(b.__)("Expand First Item","ultimate-addons-for-gutenberg"),checked:v,onChange:function(){return h({expandFirstItem:!v})}}),s.a.createElement(f.ToggleControl,{label:Object(b.__)("Enable Toggle","ultimate-addons-for-gutenberg"),checked:Pe,onChange:function(){return h({enableToggle:!Pe})}})),s.a.createElement(f.ToggleControl,{label:Object(b.__)("Enable Schema Support","ultimate-addons-for-gutenberg"),checked:k,onChange:function(){return h({enableSchemaSupport:!k})}}),s.a.createElement("hr",{className:"uagb-editor__separator"}),"grid"===C&&s.a.createElement(f.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:s.a.createElement(f.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:s.a.createElement(f.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:s.a.createElement(f.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var a;return a="mobile"===e.name?s.a.createElement(f.RangeControl,{label:Object(b.__)("Mobile Columns","ultimate-addons-for-gutenberg"),value:we,onChange:function(e){return h({mcolumns:e})},min:1,max:2}):"tablet"===e.name?s.a.createElement(f.RangeControl,{label:Object(b.__)("Tab Columns","ultimate-addons-for-gutenberg"),value:Se,onChange:function(e){return h({tcolumns:e})},min:1,max:4}):s.a.createElement(f.RangeControl,{label:Object(b.__)("Desktop Columns","ultimate-addons-for-gutenberg"),value:Te,onChange:function(e){return h({columns:e})},min:1,max:6}),s.a.createElement("div",null,a)})),"grid"===C&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null," ",Object(b.__)("Alignment","ultimate-addons-for-gutenberg")),s.a.createElement(f.Button,{key:"left",icon:"editor-alignleft",label:"Left",onClick:function(){return h({align:"left"})},"aria-pressed":"left"===w,isPrimary:"left"===w}),s.a.createElement(f.Button,{key:"center",icon:"editor-aligncenter",label:"Right",onClick:function(){return h({align:"center"})},"aria-pressed":"center"===w,isPrimary:"center"===w}),s.a.createElement(f.Button,{key:"right",icon:"editor-alignright",label:"Right",onClick:function(){return h({align:"right"})},"aria-pressed":"right"===w,isPrimary:"right"===w})),"accordion"===C&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null," ",Object(b.__)("Icon","ultimate-addons-for-gutenberg")," "),s.a.createElement("p",{className:"components-base-control__label"},Object(b.__)("Expand","ultimate-addons-for-gutenberg")),s.a.createElement(o.a,{icons:wp.UAGBSvgIcons,renderFunc:n.a,theme:"default",value:_e,onChange:function(a){return function(a){Object(d.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.icon=a})),h({icon:a})}(a)},isMulti:!1,noSelectedPlaceholder:Object(b.__)("Select Icon","ultimate-addons-for-gutenberg")}),s.a.createElement("p",{className:"components-base-control__label"},Object(b.__)("Collapse","ultimate-addons-for-gutenberg")),s.a.createElement(o.a,{icons:wp.UAGBSvgIcons,renderFunc:n.a,theme:"default",value:he,onChange:function(a){return function(a){Object(d.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.iconActive=a})),h({iconActive:a})}(a)},isMulti:!1,noSelectedPlaceholder:Object(b.__)("Select Icon","ultimate-addons-for-gutenberg")}),s.a.createElement("h2",null," ",Object(b.__)("Icon Alignment","ultimate-addons-for-gutenberg")),s.a.createElement(f.Button,{key:"row",icon:"editor-alignleft",label:"Left",onClick:function(){return h({iconAlign:"row"})},"aria-pressed":"row"===Ee,isPrimary:"row"===Ee}),s.a.createElement(f.Button,{key:"row-reverse",icon:"editor-alignright",label:"Right",onClick:function(){return h({iconAlign:"row-reverse"})},"aria-pressed":"row-reverse"===Ee,isPrimary:"row-reverse"===Ee}))),s.a.createElement(f.PanelBody,{title:Object(b.__)("Style","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Background Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:x}}))),s.a.createElement(p.ColorPalette,{value:x,onChange:function(e){return h({boxBgColor:e})},allowReset:!0}),s.a.createElement(f.RangeControl,{label:Object(b.__)("Rows Gap (px)","ultimate-addons-for-gutenberg"),value:T,onChange:function(e){return h({rowsGap:e})},min:0,max:50}),"grid"===C&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.RangeControl,{label:Object(b.__)("Columns Gap (px)","ultimate-addons-for-gutenberg"),value:S,onChange:function(e){return h({columnsGap:e})},min:0,max:50}),s.a.createElement(f.ToggleControl,{label:Object(b.__)("Equal Height","ultimate-addons-for-gutenberg"),checked:xe,onChange:function(){return h({equalHeight:!xe})}})),s.a.createElement(f.ToggleControl,{label:Object(b.__)("Enable Separator","ultimate-addons-for-gutenberg"),checked:P,onChange:function(){return h({enableSeparator:!P})}}),s.a.createElement("hr",{className:"uagb-editor__separator"}),s.a.createElement("h2",null,Object(b.__)("Border","ultimate-addons-for-gutenberg")),s.a.createElement(f.SelectControl,{label:Object(b.__)("Style","ultimate-addons-for-gutenberg"),value:O,options:[{value:"none",label:Object(b.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(b.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(b.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(b.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(b.__)("Double","ultimate-addons-for-gutenberg")}],onChange:function(e){h({borderStyle:e})}}),"none"!==O&&s.a.createElement(f.RangeControl,{label:Object(b.__)("Thickness (px)","ultimate-addons-for-gutenberg"),value:z,onChange:function(e){h({borderWidth:e})},min:0,max:20}),"none"!==O&&s.a.createElement(f.RangeControl,{label:Object(b.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),value:N,onChange:function(e){h({borderRadius:e})},min:0,max:50}),s.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:j}}))),s.a.createElement(p.ColorPalette,{value:j,onChange:function(e){return h({borderColor:e})},allowReset:!0}),"accordion"===C&&s.a.createElement(s.a.Fragment,null,s.a.createElement("hr",{className:"uagb-editor__separator"}),s.a.createElement("h2",null,Object(b.__)("Icon","ultimate-addons-for-gutenberg")),s.a.createElement(c.a,null),"Desktop"===E&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(b.__)("Size Type")},s.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Ce,"aria-pressed":"px"===Ce,onClick:function(){return h({iconSizeType:"px"})}},"px"),s.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Ce,"aria-pressed":"%"===Ce,onClick:function(){return h({iconSizeType:"%"})}},"%")),s.a.createElement("h2",null,Object(b.__)("Size")),s.a.createElement(f.RangeControl,{value:ke,onChange:function(e){return h({iconSize:e})},min:0,max:100,allowReset:!0})),"Tablet"===E&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(b.__)("Size Type")},s.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Ce,"aria-pressed":"px"===Ce,onClick:function(){return h({iconSizeType:"px"})}},"px"),s.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Ce,"aria-pressed":"%"===Ce,onClick:function(){return h({iconSizeType:"%"})}},"%")),s.a.createElement("h2",null,Object(b.__)("Size")),s.a.createElement(f.RangeControl,{value:ve,onChange:function(e){return h({iconSizeTablet:e})},min:0,max:100,allowReset:!0})),"Mobile"===E&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(b.__)("Size Type")},s.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Ce,"aria-pressed":"px"===Ce,onClick:function(){return h({iconSizeType:"px"})}},"px"),s.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Ce,"aria-pressed":"%"===Ce,onClick:function(){return h({iconSizeType:"%"})}},"%")),s.a.createElement("h2",null,Object(b.__)("Size")),s.a.createElement(f.RangeControl,{value:ye,onChange:function(e){return h({iconSizeMobile:e})},min:0,max:100,allowReset:!0})),s.a.createElement(f.RangeControl,{label:Object(b.__)("Gap between Icon and Question","ultimate-addons-for-gutenberg"),value:U,onChange:function(e){return h({gapBtwIconQUestion:e})},min:0,max:100}),s.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Expand Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:W}}))),s.a.createElement(p.ColorPalette,{value:W,onChange:function(e){return h({iconColor:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Collapse Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Q}}))),s.a.createElement(p.ColorPalette,{value:Q,onChange:function(e){return h({iconActiveColor:e})},allowReset:!0}))),s.a.createElement(f.PanelBody,{title:Object(b.__)("Question","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(f.SelectControl,{label:Object(b.__)("Question Tag","ultimate-addons-for-gutenberg"),value:Le,onChange:function(a){return function(a){Object(d.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.headingTag=a})),h({headingTag:a})}(a)},options:[{value:"span",label:Object(b.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(b.__)("P","ultimate-addons-for-gutenberg")},{value:"h1",label:Object(b.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(b.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(b.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(b.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(b.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(b.__)("H6","ultimate-addons-for-gutenberg")}]}),s.a.createElement(g.a,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:h,loadGoogleFonts:{value:J,label:"questionloadGoogleFonts"},fontFamily:{value:K,label:"questionFontFamily"},fontWeight:{value:V,label:"questionFontWeight"},fontSubset:{value:X,label:"questionFontSubset"},fontSizeType:{value:Y,label:"questionFontSizeType"},fontSize:{value:Z,label:"questionFontSize"},fontSizeMobile:{value:$,label:"questionFontSizeMobile"},fontSizeTablet:{value:ee,label:"questionFontSizeTablet"},lineHeightType:{value:ae,label:"questionLineHeightType"},lineHeight:{value:te,label:"questionLineHeight"},lineHeightMobile:{value:ne,label:"questionLineHeightMobile"},lineHeightTablet:{value:le,label:"questionLineHeightTablet"}}),s.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Text Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:R}}))),s.a.createElement(p.ColorPalette,{value:R,onChange:function(e){return h({questionTextColor:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Text Active/Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:q}}))),s.a.createElement(p.ColorPalette,{value:q,onChange:function(e){return h({questionTextActiveColor:e})},allowReset:!0}),s.a.createElement(c.a,null),"Desktop"===E&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(b.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===F,"aria-pressed":"px"===F,onClick:function(){return h({questionPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===F,"aria-pressed":"%"===F,onClick:function(){return h({questionPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(b.__)("Padding")),s.a.createElement(f.RangeControl,{label:r.a.left_margin,className:"uagb-margin-control",value:Re,onChange:function(e){return h({questionLeftPaddingDesktop:e})},min:0,max:50,allowReset:!0}),s.a.createElement(f.RangeControl,{label:r.a.right_margin,className:"uagb-margin-control",value:qe,onChange:function(e){return h({hquestionPaddingDesktop:e})},min:0,max:50,allowReset:!0}),s.a.createElement(f.RangeControl,{label:r.a.top_margin,className:"uagb-margin-control",value:Fe,onChange:function(e){return h({vquestionPaddingDesktop:e})},min:0,max:50,allowReset:!0}),s.a.createElement(f.RangeControl,{label:r.a.bottom_margin,className:"uagb-margin-control",value:Be,onChange:function(e){return h({questionBottomPaddingDesktop:e})},min:0,max:50,allowReset:!0})),"Tablet"===E&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(b.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===F,"aria-pressed":"px"===F,onClick:function(){return h({questionPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===F,"aria-pressed":"%"===F,onClick:function(){return h({questionPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(b.__)("Padding","ultimate-addons-for-gutenberg")),s.a.createElement(f.RangeControl,{label:r.a.left_margin,className:"uagb-margin-control",value:Oe,onChange:function(e){return h({questionLeftPaddingTablet:e})},min:0,max:50,allowReset:!0}),s.a.createElement(f.RangeControl,{label:r.a.right_margin,className:"uagb-margin-control",value:ze,onChange:function(e){return h({hquestionPaddingTablet:e})},min:0,max:50,allowReset:!0}),s.a.createElement(f.RangeControl,{label:r.a.top_margin,className:"uagb-margin-control",value:Ne,onChange:function(e){return h({vquestionPaddingTablet:e})},min:0,max:50,allowReset:!0}),s.a.createElement(f.RangeControl,{label:r.a.bottom_margin,className:"uagb-margin-control",value:je,onChange:function(e){return h({questionBottomPaddingTablet:e})},min:0,max:50,allowReset:!0})),"Mobile"===E&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(b.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===F,"aria-pressed":"px"===F,onClick:function(){return h({questionPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===F,"aria-pressed":"%"===F,onClick:function(){return h({questionPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(b.__)("Padding","ultimate-addons-for-gutenberg")),s.a.createElement(f.RangeControl,{label:r.a.left_margin,className:"uagb-margin-control",value:De,onChange:function(e){return h({questionLeftPaddingMobile:e})},min:0,max:50,allowReset:!0}),s.a.createElement(f.RangeControl,{label:r.a.right_margin,className:"uagb-margin-control",value:He,onChange:function(e){return h({hquestionPaddingMobile:e})},min:0,max:50,allowReset:!0}),s.a.createElement(f.RangeControl,{label:r.a.top_margin,className:"uagb-margin-control",value:Me,onChange:function(e){return h({vquestionPaddingMobile:e})},min:0,max:50,allowReset:!0}),s.a.createElement(f.RangeControl,{label:r.a.bottom_margin,className:"uagb-margin-control",value:Ge,onChange:function(e){return h({questionBottomPaddingMobile:e})},min:0,max:50,allowReset:!0}))),s.a.createElement(f.PanelBody,{title:Object(b.__)("Answer","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(g.a,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:h,loadGoogleFonts:{value:oe,label:"answerloadGoogleFonts"},fontFamily:{value:re,label:"answerFontFamily"},fontWeight:{value:ie,label:"answerFontWeight"},fontSubset:{value:se,label:"answerFontSubset"},fontSizeType:{value:ue,label:"answerFontSizeType"},fontSize:{value:ce,label:"answerFontSize"},fontSizeMobile:{value:me,label:"answerFontSizeMobile"},fontSizeTablet:{value:ge,label:"answerFontSizeTablet"},lineHeightType:{value:be,label:"answerLineHeightType"},lineHeight:{value:de,label:"answerLineHeight"},lineHeightMobile:{value:pe,label:"answerLineHeightMobile"},lineHeightTablet:{value:fe,label:"answerLineHeightTablet"}}),s.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Text Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:B}}))),s.a.createElement(p.ColorPalette,{value:B,onChange:function(e){return h({answerTextColor:e})},allowReset:!0}),s.a.createElement(c.a,null),"Desktop"===E&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(b.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===D,"aria-pressed":"px"===D,onClick:function(){return h({answerPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===D,"aria-pressed":"%"===D,onClick:function(){return h({answerPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(b.__)("Padding","ultimate-addons-for-gutenberg")),s.a.createElement(f.RangeControl,{label:r.a.vertical_spacing,className:"uagb-margin-control",value:G,onChange:function(e){return h({vanswerPaddingDesktop:e})},min:0,max:100,allowReset:!0}),s.a.createElement(f.RangeControl,{label:r.a.horizontal_spacing,className:"uagb-margin-control",value:I,onChange:function(e){return h({hanswerPaddingDesktop:e})},min:0,max:100,allowReset:!0})),"Tablet"===E&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(b.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===D,"aria-pressed":"px"===D,onClick:function(){return h({answerPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===D,"aria-pressed":"%"===D,onClick:function(){return h({answerPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(b.__)("Padding","ultimate-addons-for-gutenberg")),s.a.createElement(f.RangeControl,{label:r.a.vertical_spacing,className:"uagb-margin-control",value:M,onChange:function(e){return h({vanswerPaddingTablet:e})},min:0,max:100,allowReset:!0}),s.a.createElement(f.RangeControl,{label:r.a.horizontal_spacing,className:"uagb-margin-control",value:A,onChange:function(e){return h({hanswerPaddingTablet:e})},min:0,max:100,allowReset:!0})),"Mobile"===E&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(b.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===D,"aria-pressed":"px"===D,onClick:function(){return h({answerPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===D,"aria-pressed":"%"===D,onClick:function(){return h({answerPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(b.__)("Padding","ultimate-addons-for-gutenberg")),s.a.createElement(f.RangeControl,{label:r.a.vertical_spacing,className:"uagb-margin-control",value:H,onChange:function(e){return h({vanswerPaddingMobile:e})},min:0,max:100,allowReset:!0}),s.a.createElement(f.RangeControl,{label:r.a.horizontal_spacing,className:"uagb-margin-control",value:L,onChange:function(e){return h({hanswerPaddingMobile:e})},min:0,max:100,allowReset:!0})))),a,t)};a.default=s.a.memo(_)}}]);