(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[98],{542:function(e,t,l){"use strict";l.r(t);var a=l(1),o=l.n(a),n=l(2),i=l(10),r=l(51),u=l(12),b=l(18),d=l(100),g=l(101),c=l(17),s=l(98),m=l(39),f=l(99),_=l(16),h=l(117),v=l(54),p=l(4),y=l(5);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}var S=function(e){var t,l,S,T=e=e.parentProps,C=T.attributes,j=T.setAttributes,E=T.taxonomyList,F=T.termsList,H=T.deviceType,P=C.postType,w=C.taxonomyType,x=C.layout,L=C.columns,z=C.tcolumns,B=C.mcolumns,M=C.bgColor,A=C.titleColor,k=C.countColor,G=C.rowGap,R=C.columnGap,W=(C.contentPadding,C.contentPaddingMobile,C.contentPaddingTablet,C.contentTopPadding),N=C.contentRightPadding,U=C.contentBottomPadding,I=C.contentLeftPadding,V=C.contentTopPaddingTablet,D=C.contentRightPaddingTablet,J=C.contentBottomPaddingTablet,Q=C.contentLeftPaddingTablet,q=C.contentTopPaddingMobile,K=C.contentRightPaddingMobile,X=C.contentBottomPaddingMobile,Y=C.contentLeftPaddingMobile,Z=C.contentPaddingUnit,$=C.mobileContentPaddingUnit,ee=C.tabletContentPaddingUnit,te=C.contentPaddingLink,le=C.titleBottomSpace,ae=C.alignment,oe=C.listStyle,ne=C.seperatorStyle,ie=C.seperatorWidth,re=C.seperatorThickness,ue=C.seperatorColor,be=C.seperatorHoverColor,de=C.listTextColor,ge=C.hoverlistTextColor,ce=C.listBottomMargin,se=C.listStyleColor,me=(C.hoverlistStyleColor,C.noTaxDisplaytext),fe=C.boxShadowColor,_e=C.boxShadowHOffset,he=C.boxShadowVOffset,ve=C.boxShadowBlur,pe=C.boxShadowSpread,ye=C.boxShadowPosition,Oe=C.showCount,Se=C.titleFontSize,Te=C.titleFontSizeType,Ce=C.titleFontSizeMobile,je=C.titleFontSizeTablet,Ee=C.titleFontFamily,Fe=C.titleFontWeight,He=C.titleFontSubset,Pe=C.titleLineHeightType,we=C.titleLineHeight,xe=C.titleLineHeightTablet,Le=C.titleLineHeightMobile,ze=C.titleLoadGoogleFonts,Be=C.countFontSize,Me=C.countFontSizeType,Ae=C.countFontSizeMobile,ke=C.countFontSizeTablet,Ge=C.countFontFamily,Re=C.countFontWeight,We=C.countFontSubset,Ne=C.countLineHeightType,Ue=C.countLineHeight,Ie=C.countLineHeightTablet,Ve=C.countLineHeightMobile,De=C.countLoadGoogleFonts,Je=C.listFontSize,Qe=C.listFontSizeType,qe=C.listFontSizeMobile,Ke=C.listFontSizeTablet,Xe=C.listFontFamily,Ye=C.listFontWeight,Ze=C.listFontSubset,$e=C.listLineHeightType,et=C.listLineHeight,tt=C.listLineHeightTablet,lt=C.listLineHeightMobile,at=C.listLoadGoogleFonts,ot=C.showEmptyTaxonomy,nt=C.borderStyle,it=C.borderThickness,rt=C.borderColor,ut=C.borderRadius,bt=C.borderHoverColor,dt=C.listDisplayStyle,gt=C.showhierarchy,ct=C.titleTag,st=ot?E:F,mt=[{value:"",label:Object(n.__)("Select Taxonomy","ultimate-addons-for-gutenberg")}];if(""!=st&&null!=st&&Object.keys(st).map((function(e,t){return mt.push({value:E[e].name,label:E[e].label})})),1==ze){var ft={google:{families:[Ee+(Fe?":"+Fe:"")]}};t=o.a.createElement(r.a,{config:ft})}if(1==De){var _t={google:{families:[Ge+(Re?":"+Re:"")]}};l=o.a.createElement(r.a,{config:_t})}if(1==at){var ht={google:{families:[Xe+(Ye?":"+Ye:"")]}};S=o.a.createElement(r.a,{config:ht})}var vt=o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:de||"",onColorChange:function(e){return j({listTextColor:e})}}),o.a.createElement("br",null),"none"!=oe&&o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{label:Object(n.__)("Bullet/Numbers Color","ultimate-addons-for-gutenberg"),colorValue:se||"",onColorChange:function(e){return j({listStyleColor:e})}}))),pt=o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:ge||"",onColorChange:function(e){return j({hoverlistTextColor:e})}}),o.a.createElement("br",null),"none"!=oe&&o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{label:Object(n.__)("Bullet/Numbers Color","ultimate-addons-for-gutenberg"),colorValue:ge||"",onColorChange:function(e){return j({hoverlistTextColor:e})}}))),yt=o.a.createElement(y.InspectorControls,null,o.a.createElement(s.a,null,o.a.createElement(m.b,m.a.general,o.a.createElement(p.PanelBody,null,o.a.createElement(p.SelectControl,{label:Object(n.__)("Heading Tag","ultimate-addons-for-gutenberg"),value:ct,onChange:function(e){return j({titleTag:e})},options:[{value:"div",label:Object(n.__)("Div","ultimate-addons-for-gutenberg")},{value:"h1",label:Object(n.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(n.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(n.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(n.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(n.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(n.__)("H6","ultimate-addons-for-gutenberg")}]}),o.a.createElement(v.a,{setAttributes:j,label:Object(n.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:x,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"grid",label:"Grid",tooltip:Object(n.__)("Grid","ultimate-addons-for-gutenberg")},{value:"list",label:"List",tooltip:Object(n.__)("List","ultimate-addons-for-gutenberg")}],showIcons:!1}),"grid"===x&&o.a.createElement(h.a,{label:Object(n.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:L,label:"columns",min:1,max:4},tablet:{value:z,label:"tcolumns",min:1,max:3},mobile:{value:B,label:"mcolumns",min:1,max:2}},displayUnit:!1,setAttributes:j}),"list"==x&&o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{setAttributes:j,label:Object(n.__)("Display Style","ultimate-addons-for-gutenberg"),data:{value:dt,label:"listDisplayStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"list",label:"List",tooltip:Object(n.__)("List","ultimate-addons-for-gutenberg")},{value:"dropdown",label:"Dropdown",tooltip:Object(n.__)("Dropdown","ultimate-addons-for-gutenberg")}],showIcons:!1})),"grid"==x&&o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{setAttributes:j,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:ae,label:"alignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(p.Icon,{icon:Object(u.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(p.Icon,{icon:Object(u.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(p.Icon,{icon:Object(u.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),"list"==x&&"dropdown"!==dt&&o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{setAttributes:j,label:Object(n.__)("List Style","ultimate-addons-for-gutenberg"),data:{value:oe,label:"listStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"disc",icon:o.a.createElement(p.Icon,{icon:Object(u.a)("fa fa-list-ul")}),tooltip:Object(n.__)("Bullet","ultimate-addons-for-gutenberg")},{value:"decimal",icon:o.a.createElement(p.Icon,{icon:Object(u.a)("fa fa-list-ol")}),tooltip:Object(n.__)("Numbers","ultimate-addons-for-gutenberg")},{value:"none",icon:o.a.createElement(p.Icon,{icon:Object(u.a)("fa fa-bars")}),tooltip:Object(n.__)("None","ultimate-addons-for-gutenberg")}],showIcons:!0}))),o.a.createElement(p.PanelBody,{title:Object(n.__)("Query","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(p.SelectControl,{label:Object(n.__)("Post Type","ultimate-addons-for-gutenberg"),value:P,onChange:function(e){return function(e){j({postType:e}),j({categories:""}),j({taxonomyType:""})}(e)},options:uagb_blocks_info.post_types}),""!=E&&o.a.createElement(p.SelectControl,{label:Object(n.__)("Taxonomy","ultimate-addons-for-gutenberg"),value:w,onChange:function(e){return function(e){j({taxonomyType:e}),j({categories:""})}(e)},options:mt}),""==E&&o.a.createElement(p.TextControl,{autoComplete:"off",label:Object(n.__)("Display Message","ultimate-addons-for-gutenberg"),value:me,onChange:function(e){return j({noTaxDisplaytext:e})},help:Object(n.__)("If Taxonomy Not Found","ultimate-addons-for-gutenberg")}),o.a.createElement(p.ToggleControl,{label:Object(n.__)("Show Empty Taxonomy","ultimate-addons-for-gutenberg"),checked:ot,onChange:function(){return j({showEmptyTaxonomy:!ot})},help:Object(n.__)("Show Empty Taxonomy in list ")}),o.a.createElement(p.ToggleControl,{label:Object(n.__)("Show Posts Count","ultimate-addons-for-gutenberg"),checked:Oe,onChange:function(){return j({showCount:!Oe})},help:Object(n.__)("Show Count of taxonomy ","ultimate-addons-for-gutenberg")}),"list"==x&&"list"==dt&&"post_tag"!==w&&o.a.createElement(p.ToggleControl,{label:Object(n.__)("Show Hierarchy","ultimate-addons-for-gutenberg"),checked:gt,onChange:function(){return j({showhierarchy:!gt})},help:Object(n.__)("Show Hierarchy of taxonomy ","ultimate-addons-for-gutenberg")}))),o.a.createElement(m.b,m.a.style,"dropdown"!==dt&&"list"!==x&&o.a.createElement(p.PanelBody,{title:Object(n.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(c.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:A||"",onColorChange:function(e){return j({titleColor:e})}}),o.a.createElement(b.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:j,loadGoogleFonts:{value:ze,label:"titleLoadGoogleFonts"},fontFamily:{value:Ee,label:"titleFontFamily"},fontWeight:{value:Fe,label:"titleFontWeight"},fontSubset:{value:He,label:"titleFontSubset"},fontSizeType:{value:Te,label:"titleFontSizeType"},fontSize:{value:Se,label:"titleFontSize"},fontSizeMobile:{value:Ce,label:"titleFontSizeMobile"},fontSizeTablet:{value:je,label:"titleFontSizeTablet"},lineHeightType:{value:Pe,label:"titleLineHeightType"},lineHeight:{value:we,label:"titleLineHeight"},lineHeightMobile:{value:Le,label:"titleLineHeightMobile"},lineHeightTablet:{value:xe,label:"titleLineHeightTablet"}})),"dropdown"!==dt&&Oe&&"list"!==x&&o.a.createElement(p.PanelBody,{title:Object(n.__)("Count","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(c.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:function(e){return j({countColor:e})}}),o.a.createElement(b.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:j,loadGoogleFonts:{value:De,label:"countLoadGoogleFonts"},fontFamily:{value:Ge,label:"countFontFamily"},fontWeight:{value:Re,label:"countFontWeight"},fontSubset:{value:We,label:"countFontSubset"},fontSizeType:{value:Me,label:"countFontSizeType"},fontSize:{value:Be,label:"countFontSize"},fontSizeMobile:{value:Ae,label:"countFontSizeMobile"},fontSizeTablet:{value:ke,label:"countFontSizeTablet"},lineHeightType:{value:Ne,label:"countLineHeightType"},lineHeight:{value:Ue,label:"countLineHeight"},lineHeightMobile:{value:Ve,label:"countLineHeightMobile"},lineHeightTablet:{value:Ie,label:"countLineHeightTablet"}})),"dropdown"!==dt&&"list"!==x&&o.a.createElement(p.PanelBody,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(c.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:function(e){return j({bgColor:e})}})),"dropdown"!==dt&&"list"!==x&&o.a.createElement(p.PanelBody,{title:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(d.a,{setAttributes:j,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:fe,label:"boxShadowColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:_e,label:"boxShadowHOffset",title:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:he,label:"boxShadowVOffset",title:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:ve,label:"boxShadowBlur",title:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:pe,label:"boxShadowSpread",title:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:ye,label:"boxShadowPosition",title:Object(n.__)("Position","ultimate-addons-for-gutenberg")}})),"grid"==x&&o.a.createElement(p.PanelBody,{title:Object(n.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(g.a,{setAttributes:j,borderStyle:{value:nt,label:"borderStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:it,label:"borderThickness",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ut,label:"borderRadius",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:rt,label:"borderColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:bt,label:"borderHoverColor",title:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")}})),"list"==x&&o.a.createElement(p.PanelBody,{title:Object(n.__)("List","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:j,loadGoogleFonts:{value:at,label:"listLoadGoogleFonts"},fontFamily:{value:Xe,label:"listFontFamily"},fontWeight:{value:Ye,label:"listFontWeight"},fontSubset:{value:Ze,label:"listFontSubset"},fontSizeType:{value:Qe,label:"listFontSizeType"},fontSize:{value:Je,label:"listFontSize"},fontSizeMobile:{value:qe,label:"listFontSizeMobile"},fontSizeTablet:{value:Ke,label:"listFontSizeTablet"},lineHeightType:{value:$e,label:"listLineHeightType"},lineHeight:{value:et,label:"listLineHeight"},lineHeightMobile:{value:lt,label:"listLineHeightMobile"},lineHeightTablet:{value:tt,label:"listLineHeightTablet"}}),o.a.createElement(p.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(n.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(n.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-hover-tab"}]},(function(e){var t;return t="normal"===e.name?vt:pt,o.a.createElement("div",null,t)}))),"list"==x&&o.a.createElement(p.PanelBody,{title:Object(n.__)("Seprator","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(g.a,{setAttributes:j,borderStyle:{value:ne,label:"seperatorStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:ie,label:"seperatorWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:re,label:"seperatorThickness",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:ue,label:"seperatorColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:be,label:"seperatorHoverColor",title:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")}})),o.a.createElement(p.PanelBody,{title:Object(n.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},"grid"==x&&o.a.createElement(o.a.Fragment,null,o.a.createElement(_.a,{label:Object(n.__)("Row Gap","ultimate-addons-for-gutenberg"),setAttributes:j,value:G,onChange:function(e){return j({rowGap:e})},min:0,max:50,displayUnit:!1}),o.a.createElement(_.a,{label:Object(n.__)("Column Gap","ultimate-addons-for-gutenberg"),setAttributes:j,value:R,onChange:function(e){return j({columnGap:e})},min:0,max:50,displayUnit:!1}),Oe&&o.a.createElement(_.a,{label:Object(n.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:j,value:le,onChange:function(e){return j({titleBottomSpace:e})},min:0,max:50,displayUnit:!1}),o.a.createElement(f.a,O({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:W,label:"contentTopPadding"},valueRight:{value:N,label:"contentRightPadding"},valueBottom:{value:U,label:"contentBottomPadding"},valueLeft:{value:I,label:"contentLeftPadding"},valueTopTablet:{value:V,label:"contentTopPaddingTablet"},valueRightTablet:{value:D,label:"contentRightPaddingTablet"},valueBottomTablet:{value:J,label:"contentBottomPaddingTablet"},valueLeftTablet:{value:Q,label:"contentLeftPaddingTablet"},valueTopMobile:{value:q,label:"contentTopPaddingMobile"},valueRightMobile:{value:K,label:"contentRightPaddingMobile"},valueBottomMobile:{value:X,label:"contentBottomPaddingMobile"},valueLeftMobile:{value:Y,label:"contentLeftPaddingMobile"},unit:{value:Z,label:"contentPaddingUnit"},mUnit:{value:$,label:"mobileContentPaddingUnit"},tUnit:{value:ee,label:"tabletContentPaddingUnit"},deviceType:H,attributes:C,setAttributes:j,link:{value:te,label:"contentPaddingLink"}}))),"list"==x&&o.a.createElement(_.a,{label:Object(n.__)("Bottom Margin","ultimate-addons-for-gutenberg"),setAttributes:j,value:ce,onChange:function(e){return j({listBottomMargin:e})},min:0,max:100,displayUnit:!1}))),o.a.createElement(m.b,m.a.advance)));return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Suspense,{fallback:Object(i.a)()},yt,t,l,S))};t.default=o.a.memo(S)}}]);