(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{371:function(e,t,a){"use strict";a.r(t);var n=a(17),l=a(18),o=a.n(l),r=a(6),i=a(2),u=a.n(i),b=a(11),c=a(0),g=a(21),s=a(263),d=a(9),m=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,7))})),h=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,10))})),_=Object.keys(n),f=function(e){var t,a,n,l,f,p=e=e.parentProps,v=p.attributes,C=p.categoriesList,O=p.setAttributes,F=p.taxonomyList,j=v.headingColor,S=v.subHeadingColor,E=v.backgroundColor,y=v.separatorColor,T=v.separatorFillColor,H=v.separatorBg,z=v.separatorBorder,L=v.borderFocus,P=v.headingTag,k=v.headFontSizeType,M=v.headFontSize,B=v.headFontSizeTablet,R=v.headFontSizeMobile,w=v.headFontFamily,N=v.headFontWeight,Y=v.headFontSubset,x=v.headLineHeightType,I=v.headLineHeight,A=v.headLineHeightTablet,W=v.headLineHeightMobile,D=v.headLoadGoogleFonts,G=v.timelinAlignment,J=v.arrowlinAlignment,Q=v.subHeadFontSizeType,V=v.subHeadFontSize,q=v.subHeadFontSizeTablet,K=v.subHeadFontSizeMobile,U=v.subHeadFontFamily,X=v.subHeadFontWeight,Z=v.subHeadFontSubset,$=v.subHeadLineHeightType,ee=v.subHeadLineHeight,te=v.subHeadLineHeightTablet,ae=v.subHeadLineHeightMobile,ne=v.subHeadLoadGoogleFonts,le=v.verticalSpace,oe=v.horizontalSpace,re=v.headSpace,ie=v.separatorwidth,ue=v.borderwidth,be=v.connectorBgsize,ce=v.authorSpace,ge=v.contentSpace,se=v.authorColor,de=v.authorFontSizeType,me=v.authorFontSize,he=v.authorFontSizeTablet,_e=v.authorFontSizeMobile,fe=v.authorFontFamily,pe=v.authorFontWeight,ve=v.authorFontSubset,Ce=v.authorLineHeightType,Oe=v.authorLineHeight,Fe=v.authorLineHeightTablet,je=v.authorLineHeightMobile,Se=v.authorLoadGoogleFonts,Ee=v.dateBottomspace,ye=v.displayPostDate,Te=v.displayPostExcerpt,He=v.displayPostAuthor,ze=v.displayPostImage,Le=v.displayPostLink,Pe=v.align,ke=v.order,Me=v.orderBy,Be=v.categories,Re=v.postsToShow,we=v.imageSize,Ne=v.readMoreText,Ye=v.ctaBackground,xe=v.icon,Ie=v.iconColor,Ae=v.dateColor,We=v.ctaColor,De=v.dateFontsizeType,Ge=v.dateFontsize,Je=v.dateFontsizeTablet,Qe=v.dateFontsizeMobile,Ve=v.dateFontFamily,qe=v.dateFontWeight,Ke=v.dateFontSubset,Ue=v.dateLineHeightType,Xe=v.dateLineHeight,Ze=v.dateLineHeightTablet,$e=v.dateLineHeightMobile,et=v.dateLoadGoogleFonts,tt=v.ctaFontSizeType,at=v.ctaFontSize,nt=v.ctaFontSizeTablet,lt=v.ctaFontSizeMobile,ot=v.ctaFontFamily,rt=v.ctaFontWeight,it=v.ctaFontSubset,ut=v.ctaLineHeightType,bt=v.ctaLineHeight,ct=v.ctaLineHeightTablet,gt=v.ctaLineHeightMobile,st=v.ctaLoadGoogleFonts,dt=v.iconSize,mt=v.exerptLength,ht=v.borderRadius,_t=v.bgPadding,ft=v.contentPadding,pt=v.iconFocus,vt=v.iconBgFocus,Ct=v.stack,Ot=v.linkTarget,Ft=v.postType,jt=v.taxonomyType,St=v.dateFormat,Et=v.excludeCurrentPost,yt=[],Tt=[{value:"",label:Object(c.__)("All","ultimate-addons-for-gutenberg")}];if(""!=F&&Object.keys(F).map((function(e,t){return yt.push({value:F[e].name,label:F[e].label})})),""!=C&&Object.keys(C).map((function(e,t){return Tt.push({value:C[e].id,label:C[e].name})})),1==D){var Ht={google:{families:[w+(N?":"+N:"")]}};t=u.a.createElement(h,{config:Ht})}if(1==ne){var zt={google:{families:[U+(X?":"+X:"")]}};a=u.a.createElement(h,{config:zt})}if(1==et){var Lt={google:{families:[Ve+(qe?":"+qe:"")]}};n=u.a.createElement(h,{config:Lt})}if(1==Se){var Pt={google:{families:[fe+(pe?":"+pe:"")]}};l=u.a.createElement(h,{config:Pt})}if(1==st){var kt={google:{families:[ot+(rt?":"+rt:"")]}};f=u.a.createElement(h,{config:kt})}var Mt,Bt,Rt=new Date,wt={icons:_,value:xe,onChange:function(t){e.setAttributes({icon:t})},isMulti:!1,renderFunc:r.a,noSelectedPlaceholder:Object(c.__)("Select Icon","ultimate-addons-for-gutenberg")};return Object(c.__)("px","ultimate-addons-for-gutenberg"),Object(c.__)("em","ultimate-addons-for-gutenberg"),u.a.createElement(i.Suspense,{fallback:Object(b.a)()},u.a.createElement(d.BlockControls,null,u.a.createElement(d.BlockAlignmentToolbar,{value:Pe,onChange:function(e){O({align:e})},controls:["center","left","right"]})),u.a.createElement(d.InspectorControls,null,u.a.createElement(s.PanelBody,{title:Object(c.__)("Query","ultimate-addons-for-gutenberg"),initialOpen:!0},u.a.createElement(s.SelectControl,{label:Object(c.__)("Post Type","ultimate-addons-for-gutenberg"),value:Ft,onChange:function(t){return function(t){var a=e.setAttributes;a({postType:t}),a({categories:""})}(t)},options:uagb_blocks_info.post_types}),u.a.createElement("hr",{className:"uagb-editor__separator"}),""!=F&&u.a.createElement(s.SelectControl,{label:Object(c.__)("Taxonomy","ultimate-addons-for-gutenberg"),value:jt,onChange:function(t){return function(t){var a=e.setAttributes;a({taxonomyType:t}),a({categories:""})}(t)},options:yt}),""!=C&&u.a.createElement(u.a.Fragment,null,u.a.createElement(s.SelectControl,{label:F[jt].label,value:Be,onChange:function(e){return O({categories:e})},options:Tt}),u.a.createElement("hr",{className:"uagb-editor__separator"})),u.a.createElement(s.ToggleControl,{label:Object(c.__)("Exclude Current Post","ultimate-addons-for-gutenberg"),checked:Et,onChange:function(e){return O({excludeCurrentPost:!Et})}}),u.a.createElement(s.QueryControls,{order:ke,orderBy:Me,numberOfItems:Re,onNumberOfItemsChange:function(e){return O({postsToShow:e})}}),u.a.createElement(s.SelectControl,{label:Object(c.__)("Order By","ultimate-addons-for-gutenberg"),value:Me,onChange:function(e){return O({orderBy:e})},options:[{value:"date",label:Object(c.__)("Date","ultimate-addons-for-gutenberg")},{value:"title",label:Object(c.__)("Title","ultimate-addons-for-gutenberg")},{value:"rand",label:Object(c.__)("Random","ultimate-addons-for-gutenberg")},{value:"menu_order",label:Object(c.__)("Menu Order","ultimate-addons-for-gutenberg")}]}),u.a.createElement(s.SelectControl,{label:Object(c.__)("Order","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return O({order:e})},options:[{value:"desc",label:Object(c.__)("Descending","ultimate-addons-for-gutenberg")},{value:"asc",label:Object(c.__)("Ascending","ultimate-addons-for-gutenberg")}]})),u.a.createElement(s.PanelBody,{title:Object(c.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(s.SelectControl,{label:Object(c.__)("Orientation","ultimate-addons-for-gutenberg"),value:G,onChange:function(e){return O({timelinAlignment:e})},options:[{value:"left",label:Object(c.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(c.__)("Right","ultimate-addons-for-gutenberg")},{value:"center",label:Object(c.__)("Center","ultimate-addons-for-gutenberg")}]}),u.a.createElement(s.SelectControl,{label:Object(c.__)("Arrow Alignment","ultimate-addons-for-gutenberg"),value:J,onChange:function(e){return O({arrowlinAlignment:e})},options:[{value:"top",label:Object(c.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(c.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"center",label:Object(c.__)("Center","ultimate-addons-for-gutenberg")}]}),u.a.createElement(s.SelectControl,{label:Object(c.__)("Stack on","ultimate-addons-for-gutenberg"),value:Ct,options:[{value:"none",label:Object(c.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(c.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(c.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(c.__)("Note: Choose on what breakpoint the Post Timeline will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return O({stack:e})}})),u.a.createElement(s.PanelBody,{title:Object(c.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(s.ToggleControl,{label:Object(c.__)("Display Featured Image","ultimate-addons-for-gutenberg"),checked:ze,onChange:function(e){return O({displayPostImage:!ze})}}),ze&&u.a.createElement(s.SelectControl,{label:Object(c.__)("Featured Image Style","ultimate-addons-for-gutenberg"),options:uagb_blocks_info.image_sizes,value:we,onChange:function(t){return e.setAttributes({imageSize:t})}})),u.a.createElement(s.PanelBody,{title:Object(c.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(s.ToggleControl,{label:Object(c.__)("Display Post Author","ultimate-addons-for-gutenberg"),checked:He,onChange:function(e){return O({displayPostAuthor:!He})}}),u.a.createElement(s.ToggleControl,{label:Object(c.__)("Display Post Date","ultimate-addons-for-gutenberg"),checked:ye,onChange:function(e){return O({displayPostDate:!ye})}}),ye&&u.a.createElement(s.SelectControl,{label:Object(c.__)("Date Format","ultimate-addons-for-gutenberg"),value:St,onChange:function(e){return O({dateFormat:e})},options:[{value:"M j, Y",label:Object(g.dateI18n)("M j, Y",Rt)},{value:"F j, Y",label:Object(g.dateI18n)("F j, Y",Rt)},{value:"m/d/Y",label:Object(g.dateI18n)("m/d/Y",Rt)},{value:"m-d-Y",label:Object(g.dateI18n)("m-d-Y",Rt)},{value:"m.d.Y",label:Object(g.dateI18n)("m.d.Y",Rt)},{value:"d M Y",label:Object(g.dateI18n)("d M Y",Rt)},{value:"d F Y",label:Object(g.dateI18n)("d F Y",Rt)},{value:"d-m-Y",label:Object(g.dateI18n)("d-m-Y",Rt)},{value:"d.m.Y",label:Object(g.dateI18n)("d.m.Y",Rt)},{value:"d/m/Y",label:Object(g.dateI18n)("d/m/Y",Rt)},{value:"Y-m-d",label:Object(g.dateI18n)("Y-m-d",Rt)},{value:"Y.m.d",label:Object(g.dateI18n)("Y.m.d",Rt)},{value:"Y/m/d",label:Object(g.dateI18n)("Y/m/d",Rt)},{value:"M, Y",label:Object(g.dateI18n)("M, Y",Rt)},{value:"M Y",label:Object(g.dateI18n)("M Y",Rt)},{value:"F, Y",label:Object(g.dateI18n)("F, Y",Rt)},{value:"F Y",label:Object(g.dateI18n)("F Y",Rt)}]}),u.a.createElement(s.ToggleControl,{label:Object(c.__)("Display Post Excerpt","ultimate-addons-for-gutenberg"),checked:Te,onChange:function(e){return O({displayPostExcerpt:!Te})}}),Te&&u.a.createElement(s.RangeControl,{label:Object(c.__)("Excerpt Length","ultimate-addons-for-gutenberg"),value:mt,onChange:function(e){return O({exerptLength:e})},min:1,max:50,allowReset:!0}),u.a.createElement(s.ToggleControl,{label:Object(c.__)("Display Continue Reading Link","ultimate-addons-for-gutenberg"),checked:Le,onChange:function(e){return O({displayPostLink:!Le})}}),Le&&u.a.createElement(u.a.Fragment,null,u.a.createElement(s.TextControl,{label:Object(c.__)("CTA Text","ultimate-addons-for-gutenberg"),value:Ne,onChange:function(e){return O({readMoreText:e})}})),u.a.createElement(s.ToggleControl,{label:Object(c.__)("Open links in New Tab","ultimate-addons-for-gutenberg"),checked:Ot,onChange:function(e){return O({linkTarget:!Ot})}})),u.a.createElement(s.PanelBody,{title:Object(c.__)("Timeline Item","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement("h2",null,Object(c.__)("Heading","ultimate-addons-for-gutenberg")),u.a.createElement(s.SelectControl,{label:Object(c.__)("Heading Tag","ultimate-addons-for-gutenberg"),value:P,onChange:function(e){return O({headingTag:e})},options:[{value:"h1",label:Object(c.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(c.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(c.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(c.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(c.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(c.__)("H6","ultimate-addons-for-gutenberg")},{value:"p",label:Object(c.__)("P","ultimate-addons-for-gutenberg")},{value:"span",label:Object(c.__)("SPAN","ultimate-addons-for-gutenberg")}]}),u.a.createElement(m,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:O,loadGoogleFonts:{value:D,label:"headLoadGoogleFonts"},fontFamily:{value:w,label:"headFontFamily"},fontWeight:{value:N,label:"headFontWeight"},fontSubset:{value:Y,label:"headFontSubset"},fontSizeType:{value:k,label:"headFontSizeType"},fontSize:{value:M,label:"headFontSize"},fontSizeMobile:{value:R,label:"headFontSizeMobile"},fontSizeTablet:{value:B,label:"headFontSizeTablet"},lineHeightType:{value:x,label:"headLineHeightType"},lineHeight:{value:I,label:"headLineHeight"},lineHeightMobile:{value:W,label:"headLineHeightMobile"},lineHeightTablet:{value:A,label:"headLineHeightTablet"}}),Te&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(c.__)("Content","ultimate-addons-for-gutenberg")),u.a.createElement(m,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:O,loadGoogleFonts:{value:ne,label:"subHeadLoadGoogleFonts"},fontFamily:{value:U,label:"subHeadFontFamily"},fontWeight:{value:X,label:"subHeadFontWeight"},fontSubset:{value:Z,label:"subHeadFontSubset"},fontSizeType:{value:Q,label:"subHeadFontSizeType"},fontSize:{value:V,label:"subHeadFontSize"},fontSizeMobile:{value:K,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:q,label:"subHeadFontSizeTablet"},lineHeightType:{value:$,label:"subHeadLineHeightType"},lineHeight:{value:ee,label:"subHeadLineHeight"},lineHeightMobile:{value:ae,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:te,label:"subHeadLineHeightTablet"}})),ye&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(c.__)("Date","ultimate-addons-for-gutenberg")),u.a.createElement(m,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:O,loadGoogleFonts:{value:et,label:"dateLoadGoogleFonts"},fontFamily:{value:Ve,label:"dateFontFamily"},fontWeight:{value:qe,label:"dateFontWeight"},fontSubset:{value:Ke,label:"dateFontSubset"},fontSizeType:{value:De,label:"dateFontsizeType"},fontSize:{value:Ge,label:"dateFontsize"},fontSizeMobile:{value:Qe,label:"dateFontsizeMobile"},fontSizeTablet:{value:Je,label:"dateFontsizeTablet"},lineHeightType:{value:Ue,label:"dateLineHeightType"},lineHeight:{value:Xe,label:"dateLineHeight"},lineHeightMobile:{value:$e,label:"dateLineHeightMobile"},lineHeightTablet:{value:Ze,label:"dateLineHeightTablet"}})),He&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(c.__)("Author","ultimate-addons-for-gutenberg")),u.a.createElement(m,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:v,setAttributes:O,loadGoogleFonts:{value:Se,label:"authorLoadGoogleFonts"},fontFamily:{value:fe,label:"authorFontFamily"},fontWeight:{value:pe,label:"authorFontWeight"},fontSubset:{value:ve,label:"authorFontSubset"},fontSizeType:{value:de,label:"authorFontSizeType"},fontSize:{value:me,label:"authorFontSize"},fontSizeMobile:{value:_e,label:"authorFontSizeMobile"},fontSizeTablet:{value:he,label:"authorFontSizeTablet"},lineHeightType:{value:Ce,label:"authorLineHeightType"},lineHeight:{value:Oe,label:"authorLineHeight"},lineHeightMobile:{value:je,label:"authorLineHeightMobile"},lineHeightTablet:{value:Fe,label:"authorLineHeightTablet"}})),Le&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(c.__)("CTA","ultimate-addons-for-gutenberg")),u.a.createElement(m,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:v,setAttributes:O,loadGoogleFonts:{value:st,label:"ctaLoadGoogleFonts"},fontFamily:{value:ot,label:"ctaFontFamily"},fontWeight:{value:rt,label:"ctaFontWeight"},fontSubset:{value:it,label:"ctaFontSubset"},fontSizeType:{value:tt,label:"ctaFontSizeType"},fontSize:{value:at,label:"ctaFontSize"},fontSizeMobile:{value:lt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:nt,label:"ctaFontSizeTablet"},lineHeightType:{value:ut,label:"ctaLineHeightType"},lineHeight:{value:bt,label:"ctaLineHeight"},lineHeightMobile:{value:gt,label:"ctaLineHeightMobile"},lineHeightTablet:{value:ct,label:"ctaLineHeightTablet"}})),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(s.RangeControl,{label:Object(c.__)("Rounded Corners","ultimate-addons-for-gutenberg"),value:ht,onChange:function(e){return O({borderRadius:e})},min:0,initialPosition:10,max:50,allowReset:!0})),u.a.createElement(s.PanelBody,{title:Object(c.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(o.a,wt),u.a.createElement(s.RangeControl,{label:Object(c.__)("Icon Size","ultimate-addons-for-gutenberg"),value:dt,onChange:function(e){return O({iconSize:e})},min:0,max:30,allowReset:!0}),u.a.createElement(s.RangeControl,{label:Object(c.__)("Icon Background Size","ultimate-addons-for-gutenberg"),value:be,onChange:function(e){return O({connectorBgsize:e})},min:25,max:90,allowReset:!0}),u.a.createElement(s.RangeControl,{label:Object(c.__)("Border Width","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return O({borderwidth:e})},min:1,max:10,allowReset:!0}),u.a.createElement(s.RangeControl,{label:Object(c.__)("Connector Width","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return O({separatorwidth:e})},min:1,max:10,allowReset:!0})),(Mt=u.a.createElement(d.PanelColorSettings,{title:Object(c.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,colorSettings:[{value:y,onChange:function(e){return O({separatorColor:e})},label:Object(c.__)("Line Color","ultimate-addons-for-gutenberg")},{value:Ie,onChange:function(e){return O({iconColor:e})},label:Object(c.__)("Icon Color","ultimate-addons-for-gutenberg")},{value:H,onChange:function(e){return O({separatorBg:e})},label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg")},{value:z,onChange:function(e){return O({separatorBorder:e})},label:Object(c.__)("Border Color","ultimate-addons-for-gutenberg")}]}),Bt=u.a.createElement(d.PanelColorSettings,{title:Object(c.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,colorSettings:[{value:T,onChange:function(e){return O({separatorFillColor:e})},label:Object(c.__)("Line Color","ultimate-addons-for-gutenberg")},{value:pt,onChange:function(e){return O({iconFocus:e})},label:Object(c.__)("Icon Color","ultimate-addons-for-gutenberg")},{value:vt,onChange:function(e){return O({iconBgFocus:e})},label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg")},{value:L,onChange:function(e){return O({borderFocus:e})},label:Object(c.__)("Border Color","ultimate-addons-for-gutenberg")}]}),u.a.createElement(s.PanelBody,{title:Object(c.__)("Connector Colors","ultimate-addons-for-gutenberg"),initialOpen:!0},u.a.createElement(s.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(c.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"focus",title:Object(c.__)("Focus","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="focus"===e.name?Bt:Mt,u.a.createElement("div",null,t)})))),u.a.createElement(d.PanelColorSettings,{title:Object(c.__)("Color","ultimate-addons-for-gutenberg"),initialOpen:!1,colorSettings:[{value:E,onChange:function(e){return O({backgroundColor:e})},label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg")}]},ye&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(c.__)("Date Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ae}}))),u.a.createElement(d.ColorPalette,{value:Ae,onChange:function(e){return O({dateColor:e})},allowReset:!0})),u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(c.__)("Heading Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:j}}))),u.a.createElement(d.ColorPalette,{value:j,onChange:function(e){return O({headingColor:e})},allowReset:!0})),He&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(c.__)("Author Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:se}}))),u.a.createElement(d.ColorPalette,{value:se,onChange:function(e){return O({authorColor:e})},allowReset:!0})),Te&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(c.__)("Content Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:S}}))),u.a.createElement(d.ColorPalette,{value:S,onChange:function(e){return O({subHeadingColor:e})},allowReset:!0})),Le&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(c.__)("CTA Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:We}}))),u.a.createElement(d.ColorPalette,{value:We,onChange:function(e){return O({ctaColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(c.__)("CTA Background Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ye}}))),u.a.createElement(d.ColorPalette,{value:Ye,onChange:function(e){return O({ctaBackground:e})},allowReset:!0}))),u.a.createElement(s.PanelBody,{title:Object(c.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(s.RangeControl,{label:Object(c.__)("Block Padding","ultimate-addons-for-gutenberg"),value:_t,onChange:function(e){return O({bgPadding:e})},min:0,initialPosition:10,max:50,allowReset:!0}),u.a.createElement(s.RangeControl,{label:Object(c.__)("Content Padding","ultimate-addons-for-gutenberg"),value:ft,onChange:function(e){return O({contentPadding:e})},min:0,initialPosition:10,max:50,allowReset:!0}),u.a.createElement(s.RangeControl,{label:Object(c.__)("Horizontal Space","ultimate-addons-for-gutenberg"),value:oe,onChange:function(e){return O({horizontalSpace:e})},min:0,max:50,initialPosition:10,allowReset:!0}),u.a.createElement(s.RangeControl,{label:Object(c.__)("Vertical Space","ultimate-addons-for-gutenberg"),value:le,onChange:function(e){return O({verticalSpace:e})},min:0,max:100,initialPosition:10,allowReset:!0}),u.a.createElement(s.RangeControl,{label:Object(c.__)("Heading Bottom Spacing","ultimate-addons-for-gutenberg"),value:re,onChange:function(e){return O({headSpace:e})},min:0,max:50,initialPosition:10,allowReset:!0}),He&&u.a.createElement(s.RangeControl,{label:Object(c.__)("Author Bottom Spacing","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return O({authorSpace:e})},min:0,max:50,initialPosition:10,allowReset:!0}),Te&&Le&&u.a.createElement(s.RangeControl,{label:Object(c.__)("Content Bottom Spacing","ultimate-addons-for-gutenberg"),value:ge,onChange:function(e){return O({contentSpace:e})},min:0,max:50,initialPosition:10,allowReset:!0}),ye&&"center"!==G&&u.a.createElement(s.RangeControl,{label:Object(c.__)("Date Bottom Spacing","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return O({dateBottomspace:e})},min:0,max:50,initialPosition:10,allowReset:!0}))),t,a,n,l,f)};t.default=u.a.memo(f)}}]);