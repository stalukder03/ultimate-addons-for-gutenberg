(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[61],{388:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a(79),l=a(84),u=a(39),i=a(52),b=a(1),r=a.n(b),d=a(82),g=a(80),p=a(15),c=a(40),m=a(78),s=a(34),f=a(16),v=a(5),h=a(4);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var T=function(e){var t,a,b,T,S=e=e.parentProps,C=S.attributes,y=S.setAttributes,O=S.deviceType,x=C.layout,I=C.placeholder,F=C.inputSize,j=C.textColor,E=C.inputBgColor,z=C.boxShadowColor,H=C.boxShadowHOffset,B=C.boxShadowVOffset,w=C.boxShadowBlur,L=C.boxShadowSpread,M=C.boxShadowPosition,P=C.borderStyle,V=C.borderWidth,W=C.borderRadius,R=C.borderHColor,k=C.borderColor,A=C.buttonBgColor,D=C.buttonBgHoverColor,U=C.buttonIconColor,G=C.buttonIconHoverColor,N=C.buttonWidth,J=C.buttonWidthType,q=C.buttonIconSize,K=C.buttonIconSizeType,Q=C.iconColor,X=C.iconSize,Y=C.inputloadGoogleFonts,Z=C.inputFontFamily,$=C.inputFontWeight,ee=C.inputFontSubset,te=C.inputFontSize,ae=C.inputFontSizeType,ne=C.inputFontSizeTablet,oe=C.inputFontSizeMobile,le=C.inputLineHeight,ue=C.inputLineHeightType,ie=C.inputLineHeightTablet,be=C.inputLineHeightMobile,re=C.inputPaddingTypeDesktop,de=(C.vinputPaddingMobile,C.vinputPaddingTablet,C.vinputPaddingDesktop,C.hinputPaddingMobile,C.hinputPaddingTablet,C.hinputPaddingDesktop,C.buttonType),ge=C.buttonText,pe=C.buttonloadGoogleFonts,ce=C.buttonFontFamily,me=C.buttonFontWeight,se=C.buttonFontSubset,fe=C.buttonFontSize,ve=C.buttonFontSizeType,he=C.buttonFontSizeTablet,_e=C.buttonFontSizeMobile,Te=C.buttonLineHeight,Se=C.buttonLineHeightType,Ce=C.buttonLineHeightTablet,ye=C.buttonTransform,Oe=C.buttonDecoration,xe=C.buttonLineHeightMobile,Ie=C.buttonTextColor,Fe=C.buttonTextHoverColor,je=C.inputSizeType,Ee=C.paddingInputTop,ze=C.paddingInputRight,He=C.paddingInputBottom,Be=C.paddingInputLeft,we=C.paddingInputTopTablet,Le=C.paddingInputRightTablet,Me=C.paddingInputBottomTablet,Pe=C.paddingInputLeftTablet,Ve=C.paddingInputTopMobile,We=C.paddingInputRightMobile,Re=C.paddingInputBottomMobile,ke=C.paddingInputLeftMobile,Ae=(C.paddingInputUnit,C.mobilePaddingInputUnit),De=C.tabletPaddingInputUnit,Ue=C.spacingLink,Ge=C.iconSizeType,Ne=C.inputTransform,Je=C.inputDecoration;if(1==Y){var qe={google:{families:[Z+($?":"+$:"")]}};t=r.a.createElement(i.a,{config:qe})}if(1==pe){var Ke={google:{families:[ce+(me?":"+me:"")]}};a=r.a.createElement(i.a,{config:Ke})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.InspectorControls,null,r.a.createElement(m.a,null,r.a.createElement(s.b,s.a.general,r.a.createElement(v.PanelBody,{initialOpen:!0},r.a.createElement(u.a,{setAttributes:y,label:Object(n.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:x,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"input-button",label:"Classic"},{value:"input",label:"Minimal"}],showIcons:!1}),r.a.createElement(v.TextControl,{label:Object(n.__)("Placeholder","ultimate-addons-for-gutenberg"),value:I,onChange:function(e){return y({placeholder:e})}}),r.a.createElement(p.a,{label:Object(n.__)("Input Width","ultimate-addons-for-gutenberg"),setAttributes:y,value:F,onChange:function(e){return y({inputSize:e})},min:0,max:300,units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],unit:{value:je,label:"inputSizeType"}}),"input-button"==x&&r.a.createElement(u.a,{setAttributes:y,label:Object(n.__)("Button Type","ultimate-addons-for-gutenberg"),data:{value:de,label:"buttonType"},className:"uagb-multi-button-alignment-control",options:[{value:"icon",label:"Icon"},{value:"text",label:"Text"}],showIcons:!1}),"input-button"==x&&"text"===de&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:"Text",value:ge,onChange:function(e){y({buttonText:e})}})))),r.a.createElement(s.b,s.a.style,r.a.createElement(v.PanelBody,{title:Object(n.__)("Input Box","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},r.a.createElement(f.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:j||"",onColorChange:function(e){return y({textColor:e})}}),r.a.createElement(f.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:function(e){return y({inputBgColor:e})}}),r.a.createElement(d.a,{setAttributes:y,borderStyle:{value:P,label:"borderStyle",title:Object(n.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:V,label:"borderWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:W,label:"borderRadius",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:k,label:"borderColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:R,label:"borderHColor",title:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")}}),r.a.createElement(g.a,_({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ee,label:"paddingInputTop"},valueRight:{value:ze,label:"paddingInputRight"},valueBottom:{value:He,label:"paddingInputBottom"},valueLeft:{value:Be,label:"paddingInputLeft"},valueTopTablet:{value:we,label:"paddingInputTopTablet"},valueRightTablet:{value:Le,label:"paddingInputRightTablet"},valueBottomTablet:{value:Me,label:"paddingInputBottomTablet"},valueLeftTablet:{value:Pe,label:"paddingInputLeftTablet"},valueTopMobile:{value:Ve,label:"paddingInputTopMobile"},valueRightMobile:{value:We,label:"paddingInputRightMobile"},valueBottomMobile:{value:Re,label:"paddingInputBottomMobile"},valueLeftMobile:{value:ke,label:"paddingInputLeftMobile"},unit:{value:re,label:"inputPaddingTypeDesktop"},mUnit:{value:Ae,label:"mobilePaddingInputUnit"},tUnit:{value:De,label:"tabletPaddingInputUnit"},deviceType:O,attributes:C,setAttributes:y,link:{value:Ue,label:"spacingLink"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),r.a.createElement(o.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:y,loadGoogleFonts:{value:Y,label:"inputloadGoogleFonts"},fontFamily:{value:Z,label:"inputFontFamily"},fontWeight:{value:$,label:"inputFontWeight"},fontSubset:{value:ee,label:"inputFontSubset"},fontSizeType:{value:ae,label:"inputFontSizeType"},fontSize:{value:te,label:"inputFontSize"},fontSizeMobile:{value:oe,label:"inputFontSizeMobile"},fontSizeTablet:{value:ne,label:"inputFontSizeTablet"},lineHeightType:{value:ue,label:"inputLineHeightType"},lineHeight:{value:le,label:"inputLineHeight"},lineHeightMobile:{value:be,label:"inputLineHeightMobile"},lineHeightTablet:{value:ie,label:"inputLineHeightTablet"},transform:{value:Ne,label:"inputTransform"},decoration:{value:Je,label:"inputDecoration"}}),r.a.createElement(l.a,{setAttributes:y,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:z,label:"boxShadowColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:H,label:"boxShadowHOffset",title:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:B,label:"boxShadowVOffset",title:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:w,label:"boxShadowBlur",title:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:L,label:"boxShadowSpread",title:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:M,label:"boxShadowPosition",title:Object(n.__)("Position","ultimate-addons-for-gutenberg")}})),"input"===x?r.a.createElement(v.PanelBody,{title:Object(n.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{label:Object(n.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:y,value:X,onChange:function(e){y({iconSize:e})},min:0,max:500,unit:{value:Ge,label:"iconSizeType"}}),r.a.createElement(f.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Q||"",onColorChange:function(e){return y({iconColor:e})}}))):"",(b=r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:A||"",onColorChange:function(e){return y({buttonBgColor:e})}}),"text"===de&&r.a.createElement(f.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ie||"",onColorChange:function(e){return y({buttonTextColor:e})}}),"icon"===de&&r.a.createElement(f.a,{label:Object(n.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:U||"",onColorChange:function(e){return y({buttonIconColor:e})}})),T=r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:D||"",onColorChange:function(e){return y({buttonBgHoverColor:e})}}),"text"===de&&r.a.createElement(f.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Fe||"",onColorChange:function(e){return y({buttonTextHoverColor:e})}}),"icon"===de&&r.a.createElement(f.a,{label:Object(n.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:G||"",onColorChange:function(e){return y({buttonIconHoverColor:e})}})),"input-button"===x?r.a.createElement(v.PanelBody,{title:Object(n.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},r.a.createElement(p.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:y,value:N,onChange:function(e){y({buttonWidth:e})},min:0,max:500,unit:{value:J,label:"buttonWidthType"}}),r.a.createElement(o.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:y,loadGoogleFonts:{value:pe,label:"buttonloadGoogleFonts"},fontFamily:{value:ce,label:"buttonFontFamily"},fontWeight:{value:me,label:"buttonFontWeight"},fontSubset:{value:se,label:"buttonFontSubset"},fontSizeType:{value:ve,label:"buttonFontSizeType"},fontSize:{value:fe,label:"buttonFontSize"},fontSizeMobile:{value:_e,label:"buttonFontSizeMobile"},fontSizeTablet:{value:he,label:"buttonFontSizeTablet"},lineHeightType:{value:Se,label:"buttonLineHeightType"},lineHeight:{value:Te,label:"buttonLineHeight"},lineHeightMobile:{value:xe,label:"buttonLineHeightMobile"},lineHeightTablet:{value:Ce,label:"buttonLineHeightTablet"},transform:{value:ye,label:"buttonTransform"},decoration:{value:Oe,label:"buttonDecoration"}}),"icon"===de&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{label:Object(n.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:y,value:q,onChange:function(e){y({buttonIconSize:e})},min:0,max:500,unit:{value:K,label:"buttonIconSizeType"}})),r.a.createElement(c.a,{tabs:[{name:"normal",title:Object(n.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(n.__)("Hover","ultimate-addons-for-gutenberg")}],normal:b,hover:T,disableBottomSeparator:!0})):"")),r.a.createElement(s.b,_({},s.a.advance,{parentProps:e})))),t,a)};t.default=r.a.memo(T)}}]);