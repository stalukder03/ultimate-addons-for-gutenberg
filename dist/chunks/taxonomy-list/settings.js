(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[47],{364:function(e,t,l){"use strict";l.r(t);var a=l(0),o=l.n(a),n=l(1),i=l(9),r=l(45),u=l(8),b=l(71),d=l(76),g=l(73),s=l(14),c=l(70),m=l(28),f=l(72),_=l(13),h=l(75),p=l(33),v=l(37),y=l(4),O=l(3);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}var T=function(e){var t,l,T,j=e=e.parentProps,C=j.attributes,E=j.setAttributes,F=j.taxonomyList,w=j.termsList,H=j.deviceType,P=C.postType,L=C.taxonomyType,x=C.layout,B=C.columns,z=C.tcolumns,M=C.mcolumns,k=C.bgColor,A=C.titleColor,G=C.countColor,R=C.rowGap,W=C.columnGap,U=(C.contentPadding,C.contentPaddingMobile,C.contentPaddingTablet,C.contentTopPadding),I=C.contentRightPadding,N=C.contentBottomPadding,V=C.contentLeftPadding,D=C.contentTopPaddingTablet,J=C.contentRightPaddingTablet,Q=C.contentBottomPaddingTablet,q=C.contentLeftPaddingTablet,K=C.contentTopPaddingMobile,X=C.contentRightPaddingMobile,Y=C.contentBottomPaddingMobile,Z=C.contentLeftPaddingMobile,$=C.contentPaddingUnit,ee=C.mobileContentPaddingUnit,te=C.tabletContentPaddingUnit,le=C.contentPaddingLink,ae=C.titleBottomSpace,oe=C.alignment,ne=C.listStyle,ie=C.seperatorStyle,re=C.seperatorWidth,ue=C.seperatorThickness,be=C.seperatorColor,de=C.seperatorHoverColor,ge=C.listTextColor,se=C.hoverlistTextColor,ce=C.listBottomMargin,me=C.listStyleColor,fe=C.hoverlistStyleColor,_e=C.noTaxDisplaytext,he=C.boxShadowColor,pe=C.boxShadowHOffset,ve=C.boxShadowVOffset,ye=C.boxShadowBlur,Oe=C.boxShadowSpread,Se=C.boxShadowPosition,Te=C.showCount,je=C.titleFontSize,Ce=C.titleFontSizeType,Ee=C.titleFontSizeMobile,Fe=C.titleFontSizeTablet,we=C.titleFontFamily,He=C.titleFontWeight,Pe=C.titleFontSubset,Le=C.titleLineHeightType,xe=C.titleLineHeight,Be=C.titleLineHeightTablet,ze=C.titleLineHeightMobile,Me=C.titleLoadGoogleFonts,ke=C.countFontSize,Ae=C.countFontSizeType,Ge=C.countFontSizeMobile,Re=C.countFontSizeTablet,We=C.countFontFamily,Ue=C.countFontWeight,Ie=C.countFontSubset,Ne=C.countLineHeightType,Ve=C.countLineHeight,De=C.countLineHeightTablet,Je=C.countLineHeightMobile,Qe=C.countLoadGoogleFonts,qe=C.listFontSize,Ke=C.listFontSizeType,Xe=C.listFontSizeMobile,Ye=C.listFontSizeTablet,Ze=C.listFontFamily,$e=C.listFontWeight,et=C.listFontSubset,tt=C.listLineHeightType,lt=C.listLineHeight,at=C.listLineHeightTablet,ot=C.listLineHeightMobile,nt=C.listLoadGoogleFonts,it=C.showEmptyTaxonomy,rt=C.borderStyle,ut=C.borderThickness,bt=C.borderColor,dt=C.borderRadius,gt=C.borderHoverColor,st=C.listDisplayStyle,ct=C.showhierarchy,mt=C.titleTag,ft=it?F:w,_t=[{value:"",label:Object(n.__)("Select Taxonomy","ultimate-addons-for-gutenberg")}];if(""!=ft&&null!=ft&&Object.keys(ft).map((function(e,t){return _t.push({value:F[e].name,label:F[e].label})})),1==Me){var ht={google:{families:[we+(He?":"+He:"")]}};t=o.a.createElement(r.a,{config:ht})}if(1==Qe){var pt={google:{families:[We+(Ue?":"+Ue:"")]}};l=o.a.createElement(r.a,{config:pt})}if(1==nt){var vt={google:{families:[Ze+($e?":"+$e:"")]}};T=o.a.createElement(r.a,{config:vt})}var yt,Ot=o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:ge||"",onColorChange:function(e){return E({listTextColor:e})}}),o.a.createElement("br",null),"none"!=ne&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(n.__)("Bullet/Numbers Color","ultimate-addons-for-gutenberg"),colorValue:me||"",onColorChange:function(e){return E({listStyleColor:e})}}))),St=o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:se||"",onColorChange:function(e){return E({hoverlistTextColor:e})}}),o.a.createElement("br",null),"none"!=ne&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(n.__)("Bullet/Numbers Color","ultimate-addons-for-gutenberg"),colorValue:fe||"",onColorChange:function(e){return E({hoverlistStyleColor:e})}}))),Tt=o.a.createElement(O.InspectorControls,null,o.a.createElement(c.a,null,o.a.createElement(m.b,m.a.general,(yt=mt,""===mt&&(yt="h4","list"===x&&(yt="div")),o.a.createElement(y.PanelBody,{title:Object(n.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(p.a,{setAttributes:E,label:Object(n.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:yt,label:"titleTag"},options:[{value:"h1",label:Object(n.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(n.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(n.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(n.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(n.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(n.__)("H6","ultimate-addons-for-gutenberg")},{value:"div",label:Object(n.__)("Div","ultimate-addons-for-gutenberg")}]}),o.a.createElement(p.a,{setAttributes:E,label:Object(n.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:x,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"grid",label:"Grid",tooltip:Object(n.__)("Grid","ultimate-addons-for-gutenberg")},{value:"list",label:"List",tooltip:Object(n.__)("List","ultimate-addons-for-gutenberg")}],showIcons:!1}),"grid"===x&&o.a.createElement(h.a,{label:Object(n.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:B,label:"columns",min:1,max:4},tablet:{value:z,label:"tcolumns",min:1,max:3},mobile:{value:M,label:"mcolumns",min:1,max:2}},displayUnit:!1,setAttributes:E}),"list"==x&&o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{setAttributes:E,label:Object(n.__)("Display Style","ultimate-addons-for-gutenberg"),data:{value:st,label:"listDisplayStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"list",label:"List",tooltip:Object(n.__)("List","ultimate-addons-for-gutenberg")},{value:"dropdown",label:"Dropdown",tooltip:Object(n.__)("Dropdown","ultimate-addons-for-gutenberg")}],showIcons:!1})),"grid"==x&&o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{setAttributes:E,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:oe,label:"alignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(y.Icon,{icon:Object(u.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(y.Icon,{icon:Object(u.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(y.Icon,{icon:Object(u.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),"list"==x&&"dropdown"!==st&&o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{setAttributes:E,label:Object(n.__)("List Style","ultimate-addons-for-gutenberg"),data:{value:ne,label:"listStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"disc",icon:o.a.createElement(y.Icon,{icon:Object(u.a)("fa fa-list-ul")}),tooltip:Object(n.__)("Bullet","ultimate-addons-for-gutenberg")},{value:"decimal",icon:o.a.createElement(y.Icon,{icon:Object(u.a)("fa fa-list-ol")}),tooltip:Object(n.__)("Numbers","ultimate-addons-for-gutenberg")},{value:"none",icon:o.a.createElement(y.Icon,{icon:Object(u.a)("fa fa-bars")}),tooltip:Object(n.__)("None","ultimate-addons-for-gutenberg")}],showIcons:!0})))),o.a.createElement(y.PanelBody,{title:Object(n.__)("Query","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(y.SelectControl,{label:Object(n.__)("Post Type","ultimate-addons-for-gutenberg"),value:P,onChange:function(e){return function(e){E({postType:e}),E({categories:""}),E({taxonomyType:""})}(e)},options:uagb_blocks_info.post_types}),""!=F&&o.a.createElement(y.SelectControl,{label:Object(n.__)("Taxonomy","ultimate-addons-for-gutenberg"),value:L,onChange:function(e){return function(e){E({taxonomyType:e}),E({categories:""})}(e)},options:_t}),""==F&&o.a.createElement(y.TextControl,{autoComplete:"off",label:Object(n.__)("Display Message","ultimate-addons-for-gutenberg"),value:_e,onChange:function(e){return E({noTaxDisplaytext:e})},help:Object(n.__)("If taxonomy Not Found","ultimate-addons-for-gutenberg")}),o.a.createElement(y.ToggleControl,{label:Object(n.__)("Show Empty Taxonomy","ultimate-addons-for-gutenberg"),checked:it,onChange:function(){return E({showEmptyTaxonomy:!it})},help:Object(n.__)("Show empty taxonomy in list ")}),o.a.createElement(y.ToggleControl,{label:Object(n.__)("Show Posts Count","ultimate-addons-for-gutenberg"),checked:Te,onChange:function(){return E({showCount:!Te})},help:Object(n.__)("Show count of taxonomy ","ultimate-addons-for-gutenberg")}),"list"==x&&"list"==st&&"post_tag"!==L&&o.a.createElement(y.ToggleControl,{label:Object(n.__)("Show Hierarchy","ultimate-addons-for-gutenberg"),checked:ct,onChange:function(){return E({showhierarchy:!ct})},help:Object(n.__)("Show hierarchy of taxonomy ","ultimate-addons-for-gutenberg")}))),o.a.createElement(m.b,m.a.style,"grid"===x&&"dropdown"!==st&&o.a.createElement(y.PanelBody,{title:Object(n.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(s.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:A||"",onColorChange:function(e){return E({titleColor:e})}}),o.a.createElement(b.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:E,loadGoogleFonts:{value:Me,label:"titleLoadGoogleFonts"},fontFamily:{value:we,label:"titleFontFamily"},fontWeight:{value:He,label:"titleFontWeight"},fontSubset:{value:Pe,label:"titleFontSubset"},fontSizeType:{value:Ce,label:"titleFontSizeType"},fontSize:{value:je,label:"titleFontSize"},fontSizeMobile:{value:Ee,label:"titleFontSizeMobile"},fontSizeTablet:{value:Fe,label:"titleFontSizeTablet"},lineHeightType:{value:Le,label:"titleLineHeightType"},lineHeight:{value:xe,label:"titleLineHeight"},lineHeightMobile:{value:ze,label:"titleLineHeightMobile"},lineHeightTablet:{value:Be,label:"titleLineHeightTablet"}})),"grid"===x&&"dropdown"!==st&&Te&&o.a.createElement(y.PanelBody,{title:Object(n.__)("Count","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:G||"",onColorChange:function(e){return E({countColor:e})}}),o.a.createElement(b.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:E,loadGoogleFonts:{value:Qe,label:"countLoadGoogleFonts"},fontFamily:{value:We,label:"countFontFamily"},fontWeight:{value:Ue,label:"countFontWeight"},fontSubset:{value:Ie,label:"countFontSubset"},fontSizeType:{value:Ae,label:"countFontSizeType"},fontSize:{value:ke,label:"countFontSize"},fontSizeMobile:{value:Ge,label:"countFontSizeMobile"},fontSizeTablet:{value:Re,label:"countFontSizeTablet"},lineHeightType:{value:Ne,label:"countLineHeightType"},lineHeight:{value:Ve,label:"countLineHeight"},lineHeightMobile:{value:Je,label:"countLineHeightMobile"},lineHeightTablet:{value:De,label:"countLineHeightTablet"}})),"grid"===x&&"dropdown"!==st&&o.a.createElement(y.PanelBody,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:function(e){return E({bgColor:e})}})),"grid"===x&&"dropdown"!==st&&o.a.createElement(y.PanelBody,{title:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(d.a,{setAttributes:E,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:he,label:"boxShadowColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:pe,label:"boxShadowHOffset",title:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:ve,label:"boxShadowVOffset",title:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:ye,label:"boxShadowBlur",title:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:Oe,label:"boxShadowSpread",title:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Se,label:"boxShadowPosition",title:Object(n.__)("Position","ultimate-addons-for-gutenberg")}})),"grid"===x&&"dropdown"!==st&&o.a.createElement(y.PanelBody,{title:Object(n.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(g.a,{setAttributes:E,borderStyle:{value:rt,label:"borderStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:ut,label:"borderThickness",title:Object(n.__)("Thickness","ultimate-addons-for-gutenberg")},borderRadius:{value:dt,label:"borderRadius",title:Object(n.__)("Rounded Corners","ultimate-addons-for-gutenberg")},borderColor:{value:bt,label:"borderColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:gt,label:"borderHoverColor",title:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),"list"===x&&"dropdown"!==st&&o.a.createElement(y.PanelBody,{title:Object(n.__)("List","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:E,loadGoogleFonts:{value:nt,label:"listLoadGoogleFonts"},fontFamily:{value:Ze,label:"listFontFamily"},fontWeight:{value:$e,label:"listFontWeight"},fontSubset:{value:et,label:"listFontSubset"},fontSizeType:{value:Ke,label:"listFontSizeType"},fontSize:{value:qe,label:"listFontSize"},fontSizeMobile:{value:Xe,label:"listFontSizeMobile"},fontSizeTablet:{value:Ye,label:"listFontSizeTablet"},lineHeightType:{value:tt,label:"listLineHeightType"},lineHeight:{value:lt,label:"listLineHeight"},lineHeightMobile:{value:ot,label:"listLineHeightMobile"},lineHeightTablet:{value:at,label:"listLineHeightTablet"}}),o.a.createElement(v.a,{tabs:[{name:"normal",title:Object(n.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(n.__)("Hover","ultimate-addons-for-gutenberg")}],normal:Ot,hover:St,disableBottomSeparator:!0})),"list"===x&&"dropdown"!==st&&o.a.createElement(y.PanelBody,{title:Object(n.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(g.a,{setAttributes:E,borderStyle:{value:ie,label:"seperatorStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:re,label:"seperatorWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ue,label:"seperatorThickness",title:Object(n.__)("Thickness","ultimate-addons-for-gutenberg")},borderColor:{value:be,label:"seperatorColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:de,label:"seperatorHoverColor",title:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),"dropdown"!==st&&o.a.createElement(y.PanelBody,{title:Object(n.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},"grid"==x&&o.a.createElement(o.a.Fragment,null,o.a.createElement(_.a,{label:Object(n.__)("Row Gap","ultimate-addons-for-gutenberg"),setAttributes:E,value:R,onChange:function(e){return E({rowGap:e})},min:0,max:50,displayUnit:!1}),o.a.createElement(_.a,{label:Object(n.__)("Column Gap","ultimate-addons-for-gutenberg"),setAttributes:E,value:W,onChange:function(e){return E({columnGap:e})},min:0,max:50,displayUnit:!1}),Te&&o.a.createElement(_.a,{label:Object(n.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:E,value:ae,onChange:function(e){return E({titleBottomSpace:e})},min:0,max:50,displayUnit:!1}),o.a.createElement(f.a,S({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:U,label:"contentTopPadding"},valueRight:{value:I,label:"contentRightPadding"},valueBottom:{value:N,label:"contentBottomPadding"},valueLeft:{value:V,label:"contentLeftPadding"},valueTopTablet:{value:D,label:"contentTopPaddingTablet"},valueRightTablet:{value:J,label:"contentRightPaddingTablet"},valueBottomTablet:{value:Q,label:"contentBottomPaddingTablet"},valueLeftTablet:{value:q,label:"contentLeftPaddingTablet"},valueTopMobile:{value:K,label:"contentTopPaddingMobile"},valueRightMobile:{value:X,label:"contentRightPaddingMobile"},valueBottomMobile:{value:Y,label:"contentBottomPaddingMobile"},valueLeftMobile:{value:Z,label:"contentLeftPaddingMobile"},unit:{value:$,label:"contentPaddingUnit"},mUnit:{value:ee,label:"mobileContentPaddingUnit"},tUnit:{value:te,label:"tabletContentPaddingUnit"},deviceType:H,attributes:C,setAttributes:E,link:{value:le,label:"contentPaddingLink"}}))),"list"==x&&o.a.createElement(_.a,{label:Object(n.__)("Bottom Margin","ultimate-addons-for-gutenberg"),setAttributes:E,value:ce,onChange:function(e){return E({listBottomMargin:e})},min:0,max:100,displayUnit:!1})),"list"===x&&"dropdown"===st&&o.a.createElement("p",{className:"uagb-settings-notice"},Object(n.__)("There is no style available for the currently selected layout.","ultimate-addons-for-gutenberg"))),o.a.createElement(m.b,m.a.advance)));return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Suspense,{fallback:Object(i.a)()},Tt,t,l,T))};t.default=o.a.memo(T)}}]);