(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[63],{551:function(e,t,a){"use strict";a.r(t);var n=a(127),l=a.n(n),o=a(6),r=a(2),i=a(14),c=a(1),u=a.n(c),b=a(11),s=a(22),g=a(59),m=a(5),d=a(3);$=jQuery;var f=[{value:"thumbnail",label:Object(r.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(r.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(r.__)("Large","ultimate-addons-for-gutenberg")}],_=function(e){var t=e=e.parentProps,a=t.setAttributes,n=t.attributes,_=n.headingAlign,p=n.headingColor,h=n.subHeadingColor,v=n.prefixColor,C=n.prefixFontSize,E=n.prefixFontSizeType,S=n.prefixFontSizeTablet,O=n.prefixFontSizeMobile,j=n.prefixFontFamily,F=n.prefixFontWeight,T=n.prefixFontSubset,y=n.prefixLineHeightType,H=n.prefixLineHeight,x=n.prefixLineHeightTablet,N=n.prefixLineHeightMobile,z=n.prefixLoadGoogleFonts,R=n.headingTag,w=n.headFontSize,k=n.headFontSizeType,B=n.headFontSizeTablet,I=n.headFontSizeMobile,L=n.headFontFamily,P=n.headFontWeight,M=n.headFontSubset,W=n.headLineHeightType,A=n.headLineHeight,G=n.headLineHeightTablet,D=n.headLineHeightMobile,U=n.headLoadGoogleFonts,V=n.subHeadFontSize,J=n.subHeadFontSizeType,Q=n.subHeadFontSizeTablet,q=n.subHeadFontSizeMobile,K=n.subHeadFontFamily,X=n.subHeadFontWeight,Y=n.subHeadFontSubset,Z=n.subHeadLineHeightType,ee=n.subHeadLineHeight,te=n.subHeadLineHeightTablet,ae=n.subHeadLineHeightMobile,ne=n.subHeadLoadGoogleFonts,le=n.separatorWidthType,oe=n.seperatorSpace,re=n.headSpace,ie=n.subHeadSpace,ce=n.icon,ue=n.iconColor,be=n.iconSize,se=n.iconimgPosition,ge=n.iconHover,me=n.iconimgBorderRadius,de=n.source_type,fe=n.sourceAlign,_e=n.seperatorPosition,pe=n.seperatorStyle,he=n.seperatorWidth,ve=n.seperatorColor,Ce=n.seperatorThickness,Ee=n.ctaType,Se=n.ctaText,Oe=n.ctaLink,je=n.ctaTarget,Fe=n.ctaIcon,Te=n.ctaIconPosition,ye=n.ctaIconSpace,He=n.ctaLinkColor,xe=n.ctaFontSize,Ne=n.ctaFontSizeType,ze=n.ctaFontSizeMobile,Re=n.ctaFontSizeTablet,we=n.ctaFontFamily,ke=n.ctaFontWeight,Be=n.ctaFontSubset,Ie=n.ctaLoadGoogleFonts,Le=n.ctaBtnLinkColor,Pe=n.ctaLinkHoverColor,Me=n.ctaBgHoverColor,We=n.ctaBgColor,Ae=n.ctaBtnVertPadding,Ge=n.ctaBtnHrPadding,De=n.ctaBorderStyle,Ue=n.ctaBorderColor,Ve=n.ctaBorderhoverColor,Je=n.ctaBorderWidth,$e=n.ctaBorderRadius,Qe=n.prefixSpace,qe=n.iconLeftMargin,Ke=n.iconRightMargin,Xe=n.iconTopMargin,Ye=n.iconBottomMargin,Ze=n.iconImage,et=n.imageSize,tt=n.imageWidth,at=n.imageWidthType,nt=n.stack,lt=n.showPrefix,ot=n.showTitle,rt=n.showDesc,it=n.inheritFromTheme,ct=function(e){var t=[];return $.each(e,(function(e){var a={value:e,label:e};t.push(a)})),t};Ze&&Ze.sizes&&(f=ct(Ze.sizes));var ut,bt,st,gt,mt=Object(r.__)("Select Image","ultimate-addons-for-gutenberg");if(Ze&&(mt=null==Ze.url||""==Ze.url?Object(r.__)("Select Image","ultimate-addons-for-gutenberg"):Object(r.__)("Replace Image","ultimate-addons-for-gutenberg")),1==z){var dt={google:{families:[j+(F?":"+F:"")]}};ut=u.a.createElement(g.a,{config:dt})}if(1==U){var ft={google:{families:[L+(P?":"+P:"")]}};gt=u.a.createElement(g.a,{config:ft})}if(1==ne){var _t={google:{families:[K+(X?":"+X:"")]}};bt=u.a.createElement(g.a,{config:_t})}if(1==ne){var pt={google:{families:[we+(ke?":"+ke:"")]}};st=u.a.createElement(g.a,{config:pt})}return u.a.createElement(u.a.Fragment,null,("above-title"==se||"below-title"==se)&&u.a.createElement(m.BlockControls,{key:"controls"},u.a.createElement(m.AlignmentToolbar,{value:_,onChange:function(e){return a({headingAlign:e})}})),u.a.createElement(m.InspectorControls,null,u.a.createElement(d.PanelBody,{title:Object(r.__)("Image/Icon","ultimate-addons-for-gutenberg")},u.a.createElement(d.SelectControl,{label:Object(r.__)("Select Position","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return a({iconimgPosition:e})},options:[{value:"above-title",label:Object(r.__)("Above Title","ultimate-addons-for-gutenberg")},{value:"below-title",label:Object(r.__)("Below Title","ultimate-addons-for-gutenberg")},{value:"left-title",label:Object(r.__)("Left of Title","ultimate-addons-for-gutenberg")},{value:"right-title",label:Object(r.__)("Right of Title","ultimate-addons-for-gutenberg")},{value:"left",label:Object(r.__)("Left of Text and Title","ultimate-addons-for-gutenberg")},{value:"right",label:Object(r.__)("Right of Text and Title","ultimate-addons-for-gutenberg")}]}),("left"==se||"right"==se)&&u.a.createElement(d.SelectControl,{label:Object(r.__)("Stack on","ultimate-addons-for-gutenberg"),value:nt,options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(r.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(r.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(r.__)("Note: Choose on what breakpoint the Info Box will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return a({stack:e})}}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(d.SelectControl,{label:Object(r.__)("Select Source","ultimate-addons-for-gutenberg"),value:de,onChange:function(e){return a({source_type:e})},options:[{value:"icon",label:Object(r.__)("Icon","ultimate-addons-for-gutenberg")},{value:"image",label:Object(r.__)("Image","ultimate-addons-for-gutenberg")}]}),se&&"above-title"!==se&&"below-title"!==se&&u.a.createElement(d.SelectControl,{label:Object(r.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),value:fe,onChange:function(e){return a({sourceAlign:e})},options:[{value:"top",label:Object(r.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(r.__)("Middle","ultimate-addons-for-gutenberg")}]}),"icon"==de&&u.a.createElement(u.a.Fragment,null,u.a.createElement(l.a,{icons:wp.UAGBSvgIcons,renderFunc:i.a,value:ce,onChange:function(e){return a({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(r.__)("Select Icon","ultimate-addons-for-gutenberg")}),u.a.createElement(d.RangeControl,{label:Object(r.__)("Icon Size","ultimate-addons-for-gutenberg"),value:be,onChange:function(e){return a({iconSize:e})},min:10,max:300,beforeIcon:"",allowReset:!0}),u.a.createElement(d.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="normal"===e.name?u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ue}}))),u.a.createElement(m.ColorPalette,{value:ue,onChange:function(e){return a({iconColor:e})},allowReset:!0})):u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ge}}))),u.a.createElement(m.ColorPalette,{value:ge,onChange:function(e){return a({iconHover:e})},allowReset:!0})),u.a.createElement("div",null,t)}))),"image"==de&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.BaseControl,{className:"editor-bg-image-control",label:Object(r.__)("Image","ultimate-addons-for-gutenberg"),id:Object(r.__)("Image","ultimate-addons-for-gutenberg")},u.a.createElement(m.MediaUpload,{title:Object(r.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(e){if(e&&e.url)if(e.type&&"image"===e.type){if(e.sizes){var t=ct(e.sizes);f=t}a({iconImage:e})}else a({iconImage:null});else a({iconImage:null})},allowedTypes:["image"],value:Ze,render:function(e){var t=e.open;return u.a.createElement(d.Button,{isSecondary:!0,onClick:t},mt)}}),Ze&&"null"!==Ze.url&&""!==Ze.url&&u.a.createElement(d.Button,{className:"uagb-rm-btn",onClick:function(){a({iconImage:""})},isLink:!0,isDestructive:!0},Object(r.__)("Remove Image","ultimate-addons-for-gutenberg"))),Ze&&"null"!==Ze.url&&""!==Ze.url&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.SelectControl,{label:Object(r.__)("Image Size","ultimate-addons-for-gutenberg"),options:f,value:et,onChange:function(e){return a({imageSize:e})}}),u.a.createElement(d.ToggleControl,{label:Object(r.__)("Custom Width","ultimate-addons-for-gutenberg"),checked:at,onChange:function(){return a({imageWidthType:!at})},help:Object(r.__)("Turn this off to inherit the natural width of Image.","ultimate-addons-for-gutenberg")}),at&&u.a.createElement(d.RangeControl,{label:Object(r.__)("Width (px)","ultimate-addons-for-gutenberg"),value:tt,onChange:function(e){return a({imageWidth:e})},min:0,max:500,beforeIcon:"",allowReset:!0}),u.a.createElement(d.RangeControl,{label:Object(r.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),value:me,onChange:function(e){return a({iconimgBorderRadius:e})},min:0,max:500,beforeIcon:"",allowReset:!0})))),u.a.createElement(d.PanelBody,{title:Object(r.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(d.ToggleControl,{label:Object(r.__)("Enable Prefix","ultimate-addons-for-gutenberg"),checked:lt,onChange:function(){return a({showPrefix:!lt})}}),lt&&u.a.createElement(u.a.Fragment,null,u.a.createElement(c.Suspense,{fallback:Object(b.a)()},u.a.createElement(s.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:a,loadGoogleFonts:{value:z,label:"prefixLoadGoogleFonts"},fontFamily:{value:j,label:"prefixFontFamily"},fontWeight:{value:F,label:"prefixFontWeight"},fontSubset:{value:T,label:"prefixFontSubset"},fontSizeType:{value:E,label:"prefixFontSizeType"},fontSize:{value:C,label:"prefixFontSize"},fontSizeMobile:{value:O,label:"prefixFontSizeMobile"},fontSizeTablet:{value:S,label:"prefixFontSizeTablet"},lineHeightType:{value:y,label:"prefixLineHeightType"},lineHeight:{value:H,label:"prefixLineHeight"},lineHeightMobile:{value:N,label:"prefixLineHeightMobile"},lineHeightTablet:{value:x,label:"prefixLineHeightTablet"}})),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Prefix Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:v}}))),u.a.createElement(m.ColorPalette,{value:v,onChange:function(e){return a({prefixColor:e})},allowReset:!0}),u.a.createElement("hr",{className:"uagb-editor__separator"})),u.a.createElement(d.ToggleControl,{label:Object(r.__)("Enable Title","ultimate-addons-for-gutenberg"),checked:ot,onChange:function(){return a({showTitle:!ot})}}),ot&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.SelectControl,{label:Object(r.__)("Title Tag","ultimate-addons-for-gutenberg"),value:R,onChange:function(e){return a({headingTag:e})},options:[{value:"h1",label:Object(r.__)("H1")},{value:"h2",label:Object(r.__)("H2")},{value:"h3",label:Object(r.__)("H3")},{value:"h4",label:Object(r.__)("H4")},{value:"h5",label:Object(r.__)("H5")},{value:"h6",label:Object(r.__)("H6")}]}),u.a.createElement(c.Suspense,{fallback:Object(b.a)()},u.a.createElement(s.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:a,loadGoogleFonts:{value:U,label:"headLoadGoogleFonts"},fontFamily:{value:L,label:"headFontFamily"},fontWeight:{value:P,label:"headFontWeight"},fontSubset:{value:M,label:"headFontSubset"},fontSizeType:{value:k,label:"headFontSizeType"},fontSize:{value:w,label:"headFontSize"},fontSizeMobile:{value:I,label:"headFontSizeMobile"},fontSizeTablet:{value:B,label:"headFontSizeTablet"},lineHeightType:{value:W,label:"headLineHeightType"},lineHeight:{value:A,label:"headLineHeight"},lineHeightMobile:{value:D,label:"headLineHeightMobile"},lineHeightTablet:{value:G,label:"headLineHeightTablet"}})),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Title Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:p}}))),u.a.createElement(m.ColorPalette,{value:p,onChange:function(e){return a({headingColor:e})},allowReset:!0}),u.a.createElement("hr",{className:"uagb-editor__separator"})),u.a.createElement(d.ToggleControl,{label:Object(r.__)("Enable Description","ultimate-addons-for-gutenberg"),checked:rt,onChange:function(){return a({showDesc:!rt})}}),rt&&u.a.createElement(u.a.Fragment,null,u.a.createElement(c.Suspense,{fallback:Object(b.a)()},u.a.createElement(s.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:a,loadGoogleFonts:{value:ne,label:"subHeadLoadGoogleFonts"},fontFamily:{value:K,label:"subHeadFontFamily"},fontWeight:{value:X,label:"subHeadFontWeight"},fontSubset:{value:Y,label:"subHeadFontSubset"},fontSizeType:{value:J,label:"subHeadFontSizeType"},fontSize:{value:V,label:"subHeadFontSize"},fontSizeMobile:{value:q,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:Q,label:"subHeadFontSizeTablet"},lineHeightType:{value:Z,label:"subHeadLineHeightType"},lineHeight:{value:ee,label:"subHeadLineHeight"},lineHeightMobile:{value:ae,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:te,label:"subHeadLineHeightTablet"}})),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Description Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:h}}))),u.a.createElement(m.ColorPalette,{value:h,onChange:function(e){return a({subHeadingColor:e})},allowReset:!0}))),u.a.createElement(d.PanelBody,{title:Object(r.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(d.SelectControl,{label:Object(r.__)("Position","ultimate-addons-for-gutenberg"),value:_e,onChange:function(e){return a({seperatorPosition:e})},options:[{value:"after_icon",label:Object(r.__)("After Icon/Image","ultimate-addons-for-gutenberg")},{value:"after_prefix",label:Object(r.__)("After Prefix","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(r.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_desc",label:Object(r.__)("After Description","ultimate-addons-for-gutenberg")}]}),u.a.createElement(d.SelectControl,{label:Object(r.__)("Style"),value:pe,onChange:function(e){return a({seperatorStyle:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==pe&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.RangeControl,{label:Object(r.__)("Thickness","ultimate-addons-for-gutenberg"),value:Ce,onChange:function(e){return a({seperatorThickness:e})},min:0,max:10,beforeIcon:"",allowReset:!0}),u.a.createElement(d.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type","ultimate-addons-for-gutenberg")},u.a.createElement(d.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===le,"aria-pressed":"px"===le,onClick:function(){return a({separatorWidthType:"px"})}},"px"),u.a.createElement(d.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===le,"aria-pressed":"%"===le,onClick:function(){return a({separatorWidthType:"%"})}},"%")),u.a.createElement(d.RangeControl,{label:Object(r.__)("Width","ultimate-addons-for-gutenberg"),value:he,onChange:function(e){return a({seperatorWidth:e})},min:0,max:"%"==le?100:500,beforeIcon:"",allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Separator Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ve}}))),u.a.createElement(m.ColorPalette,{value:ve,onChange:function(e){return a({seperatorColor:e})},allowReset:!0}))),u.a.createElement(d.PanelBody,{title:Object(r.__)("Call To Action","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(d.SelectControl,{label:Object(r.__)("Type","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return a({ctaType:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"text",label:Object(r.__)("Text","ultimate-addons-for-gutenberg")},{value:"button",label:Object(r.__)("Button","ultimate-addons-for-gutenberg")},{value:"all",label:Object(r.__)("Complete Box","ultimate-addons-for-gutenberg")}]}),("text"===Ee||"button"===Ee)&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.TextControl,{label:Object(r.__)("Text","ultimate-addons-for-gutenberg"),value:Se,onChange:function(e){return a({ctaText:e})}}),"button"===Ee&&u.a.createElement(d.ToggleControl,{label:Object(r.__)("Inherit from Theme","ultimate-addons-for-gutenberg"),checked:it,onChange:function(){return a({inheritFromTheme:!it})}}),"text"===Ee&&u.a.createElement(s.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:a,loadGoogleFonts:{value:Ie,label:"ctaLoadGoogleFonts"},fontFamily:{value:we,label:"ctaFontFamily"},fontWeight:{value:ke,label:"ctaFontWeight"},fontSubset:{value:Be,label:"ctaFontSubset"},fontSizeType:{value:Ne,label:"ctaFontSizeType"},fontSize:{value:xe,label:"ctaFontSize"},fontSizeMobile:{value:ze,label:"ctaFontSizeMobile"},fontSizeTablet:{value:Re,label:"ctaFontSizeTablet"},disableLineHeight:!0}),!it&&"button"===Ee&&u.a.createElement(s.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:a,loadGoogleFonts:{value:Ie,label:"ctaLoadGoogleFonts"},fontFamily:{value:we,label:"ctaFontFamily"},fontWeight:{value:ke,label:"ctaFontWeight"},fontSubset:{value:Be,label:"ctaFontSubset"},fontSizeType:{value:Ne,label:"ctaFontSizeType"},fontSize:{value:xe,label:"ctaFontSize"},fontSizeMobile:{value:ze,label:"ctaFontSizeMobile"},fontSizeTablet:{value:Re,label:"ctaFontSizeTablet"},disableLineHeight:!0})),"none"!==Ee&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.TextControl,{label:Object(r.__)("Link","ultimate-addons-for-gutenberg"),value:Oe,onChange:function(e){return a({ctaLink:e})}}),u.a.createElement(d.ToggleControl,{label:Object(r.__)("Open in new Window","ultimate-addons-for-gutenberg"),checked:je,onChange:function(){return a({ctaTarget:!je})}})),"all"!==Ee&&"none"!==Ee&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(r.__)("Button Icon","ultimate-addons-for-gutenberg")),u.a.createElement(l.a,{icons:wp.UAGBSvgIcons,renderFunc:i.a,value:Fe,onChange:function(e){return a({ctaIcon:e})},isMulti:!1,noSelectedPlaceholder:Object(r.__)("Select Icon","ultimate-addons-for-gutenberg")}),""!==Fe&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.SelectControl,{label:Object(r.__)("Icon Position","ultimate-addons-for-gutenberg"),value:Te,onChange:function(e){return a({ctaIconPosition:e})},options:[{value:"before",label:Object(r.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(r.__)("After Text","ultimate-addons-for-gutenberg")}]}),u.a.createElement(d.RangeControl,{label:Object(r.__)("Icon Spacing","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return a({ctaIconSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0})),u.a.createElement("hr",{className:"uagb-editor__separator"})),!it&&"button"==Ee&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,Object(r.__)("Button Padding","ultimate-addons-for-gutenberg")),u.a.createElement(d.RangeControl,{label:o.a.vertical_spacing,value:Ae,onChange:function(e){return a({ctaBtnVertPadding:e})},min:0,max:50,className:"uagb-margin-control",allowReset:!0}),u.a.createElement(d.RangeControl,{label:o.a.horizontal_spacing,value:Ge,onChange:function(e){return a({ctaBtnHrPadding:e})},min:0,max:50,className:"uagb-margin-control",allowReset:!0}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(r.__)("Button Border","ultimate-addons-for-gutenberg")),u.a.createElement(d.SelectControl,{label:Object(r.__)("Style","ultimate-addons-for-gutenberg"),value:De,onChange:function(e){return a({ctaBorderStyle:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==De&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.RangeControl,{label:Object(r.__)("Width","ultimate-addons-for-gutenberg"),value:Je,onChange:function(e){return a({ctaBorderWidth:e})},min:0,max:10,beforeIcon:"",allowReset:!0})),u.a.createElement(d.RangeControl,{label:Object(r.__)("Rounded Corner","ultimate-addons-for-gutenberg"),value:$e,onChange:function(e){return a({ctaBorderRadius:e})},min:0,max:100,beforeIcon:"",allowReset:!0}),u.a.createElement("hr",{className:"uagb-editor__separator"})),"text"===Ee&&u.a.createElement(d.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="normal"===e.name?u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Text Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:He}}))),u.a.createElement(m.ColorPalette,{value:He,onChange:function(e){return a({ctaLinkColor:e})},allowReset:!0})):u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Text Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Pe}}))),u.a.createElement(m.ColorPalette,{value:Pe,onChange:function(e){return a({ctaLinkHoverColor:e})},allowReset:!0})),u.a.createElement("div",null,t)})),!it&&"button"==Ee&&u.a.createElement(d.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="normal"===e.name?u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Text Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Le}}))),u.a.createElement(m.ColorPalette,{value:Le,onChange:function(e){return a({ctaBtnLinkColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:We}}))),u.a.createElement(m.ColorPalette,{value:We,onChange:function(e){return a({ctaBgColor:e})},allowReset:!0}),"none"!==De&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ue}}))),u.a.createElement(m.ColorPalette,{value:Ue,onChange:function(e){return a({ctaBorderColor:e})},allowReset:!0}))):u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Text Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Pe}}))),u.a.createElement(m.ColorPalette,{value:Pe,onChange:function(e){return a({ctaLinkHoverColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Me}}))),u.a.createElement(m.ColorPalette,{value:Me,onChange:function(e){return a({ctaBgHoverColor:e})},allowReset:!0}),"none"!==De&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ve}}))),u.a.createElement(m.ColorPalette,{value:Ve,onChange:function(e){return a({ctaBorderhoverColor:e})},allowReset:!0}))),u.a.createElement("div",null,t)}))),u.a.createElement(d.PanelBody,{title:Object(r.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},lt&&u.a.createElement(d.RangeControl,{label:Object(r.__)("Prefix Bottom Margin","ultimate-addons-for-gutenberg"),value:Qe,onChange:function(e){return a({prefixSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0}),ot&&u.a.createElement(d.RangeControl,{label:Object(r.__)("Title Bottom Margin","ultimate-addons-for-gutenberg"),value:re,onChange:function(e){return a({headSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0}),"none"!==pe&&u.a.createElement(d.RangeControl,{label:Object(r.__)("Separator Bottom Margin","ultimate-addons-for-gutenberg"),value:oe,onChange:function(e){return a({seperatorSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0}),rt&&u.a.createElement(d.RangeControl,{label:Object(r.__)("Description Bottom Margin","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return a({subHeadSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(r.__)("Image/Icon Margin (px)","ultimate-addons-for-gutenberg")),u.a.createElement(d.RangeControl,{label:o.a.left_margin,className:"uagb-margin-control",value:qe,onChange:function(e){return a({iconLeftMargin:e})},min:0,max:50,allowReset:!0}),u.a.createElement(d.RangeControl,{label:o.a.right_margin,className:"uagb-margin-control",value:Ke,onChange:function(e){return a({iconRightMargin:e})},min:0,max:50,allowReset:!0}),u.a.createElement(d.RangeControl,{label:o.a.top_margin,className:"uagb-margin-control",value:Xe,onChange:function(e){return a({iconTopMargin:e})},min:0,max:50,allowReset:!0}),u.a.createElement(d.RangeControl,{label:o.a.bottom_margin,className:"uagb-margin-control",value:Ye,onChange:function(e){return a({iconBottomMargin:e})},min:0,max:50,allowReset:!0}))),u.a.createElement(c.Suspense,{fallback:Object(b.a)()},ut,bt,st,gt))};t.default=u.a.memo(_)}}]);