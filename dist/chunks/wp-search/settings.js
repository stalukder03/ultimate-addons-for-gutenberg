(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[108],{551:function(e,t,a){"use strict";a.r(t);var l=a(2),o=a(23),n=a(106),u=a(19),i=a(74),b=a(1),r=a.n(b),d=a(44),g=a(33),p=a(13),c=a(25),m=a(52),s=a(21),v=a(14),_=a(6),f=a(5);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const T=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,deviceType:b}=e,{layout:T,placeholder:S,inputSize:C,textColor:y,inputBgColor:O,boxShadowColor:x,boxShadowHOffset:F,boxShadowVOffset:I,boxShadowBlur:j,boxShadowSpread:E,boxShadowPosition:z,borderStyle:H,borderWidth:B,borderRadius:w,borderHColor:L,borderColor:M,buttonBgColor:P,buttonBgHoverColor:V,buttonIconColor:W,buttonIconHoverColor:R,buttonWidth:A,buttonWidthType:k,buttonIconSize:D,buttonIconSizeType:G,iconColor:N,iconSize:U,inputloadGoogleFonts:J,inputFontFamily:q,inputFontWeight:K,inputFontSubset:Q,inputFontSize:X,inputFontSizeType:Y,inputFontSizeTablet:Z,inputFontSizeMobile:$,inputLineHeight:ee,inputLineHeightType:te,inputLineHeightTablet:ae,inputLineHeightMobile:le,inputPaddingTypeDesktop:oe,buttonType:ne,buttonText:ue,buttonloadGoogleFonts:ie,buttonFontFamily:be,buttonFontWeight:re,buttonFontSubset:de,buttonFontSize:ge,buttonFontSizeType:pe,buttonFontSizeTablet:ce,buttonFontSizeMobile:me,buttonLineHeight:se,buttonLineHeightType:ve,buttonLineHeightTablet:_e,buttonTransform:fe,buttonDecoration:he,buttonLineHeightMobile:Te,buttonTextColor:Se,buttonTextHoverColor:Ce,inputSizeType:ye,paddingInputTop:Oe,paddingInputRight:xe,paddingInputBottom:Fe,paddingInputLeft:Ie,paddingInputTopTablet:je,paddingInputRightTablet:Ee,paddingInputBottomTablet:ze,paddingInputLeftTablet:He,paddingInputTopMobile:Be,paddingInputRightMobile:we,paddingInputBottomMobile:Le,paddingInputLeftMobile:Me,mobilePaddingInputUnit:Pe,tabletPaddingInputUnit:Ve,spacingLink:We,iconSizeType:Re,inputTransform:Ae,inputDecoration:ke}=t;let De,Ge;if(!0===J){const e={google:{families:[q+(K?":"+K:"")]}};De=r.a.createElement(i.a,{config:e})}if(!0===ie){const e={google:{families:[be+(re?":"+re:"")]}};Ge=r.a.createElement(i.a,{config:e})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.InspectorControls,null,r.a.createElement(m.a,null,r.a.createElement(s.b,s.a.general,r.a.createElement(_.PanelBody,{initialOpen:!0},r.a.createElement(u.a,{setAttributes:a,label:Object(l.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:T,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"input-button",label:"Classic"},{value:"input",label:"Minimal"}],showIcons:!1}),r.a.createElement(_.TextControl,{label:Object(l.__)("Placeholder","ultimate-addons-for-gutenberg"),value:S,onChange:e=>a({placeholder:e})}),r.a.createElement(p.a,{label:Object(l.__)("Input Width","ultimate-addons-for-gutenberg"),setAttributes:a,value:C,onChange:e=>a({inputSize:e}),min:0,max:300,units:[{name:Object(l.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(l.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(l.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],unit:{value:ye,label:"inputSizeType"}}),"input-button"===T&&r.a.createElement(u.a,{setAttributes:a,label:Object(l.__)("Button Type","ultimate-addons-for-gutenberg"),data:{value:ne,label:"buttonType"},className:"uagb-multi-button-alignment-control",options:[{value:"icon",label:"Icon"},{value:"text",label:"Text"}],showIcons:!1}),"input-button"===T&&"text"===ne&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_.TextControl,{label:"Text",value:ue,onChange:e=>{a({buttonText:e})}})))),r.a.createElement(s.b,s.a.style,r.a.createElement(_.PanelBody,{title:Object(l.__)("Input Box","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},r.a.createElement(v.a,{label:Object(l.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:y||"",onColorChange:e=>a({textColor:e})}),r.a.createElement(v.a,{label:Object(l.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:O||"",onColorChange:e=>a({inputBgColor:e})}),r.a.createElement(d.a,{setAttributes:a,borderStyle:{value:H,label:"borderStyle",title:Object(l.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:B,label:"borderWidth",title:Object(l.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:w,label:"borderRadius",title:Object(l.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:M,label:"borderColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:L,label:"borderHColor",title:Object(l.__)("Hover Color","ultimate-addons-for-gutenberg")}}),r.a.createElement(g.a,h({},e,{label:Object(l.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Oe,label:"paddingInputTop"},valueRight:{value:xe,label:"paddingInputRight"},valueBottom:{value:Fe,label:"paddingInputBottom"},valueLeft:{value:Ie,label:"paddingInputLeft"},valueTopTablet:{value:je,label:"paddingInputTopTablet"},valueRightTablet:{value:Ee,label:"paddingInputRightTablet"},valueBottomTablet:{value:ze,label:"paddingInputBottomTablet"},valueLeftTablet:{value:He,label:"paddingInputLeftTablet"},valueTopMobile:{value:Be,label:"paddingInputTopMobile"},valueRightMobile:{value:we,label:"paddingInputRightMobile"},valueBottomMobile:{value:Le,label:"paddingInputBottomMobile"},valueLeftMobile:{value:Me,label:"paddingInputLeftMobile"},unit:{value:oe,label:"inputPaddingTypeDesktop"},mUnit:{value:Pe,label:"mobilePaddingInputUnit"},tUnit:{value:Ve,label:"tabletPaddingInputUnit"},deviceType:b,attributes:t,setAttributes:a,link:{value:We,label:"spacingLink"},units:[{name:Object(l.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(l.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(l.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),r.a.createElement(o.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:J,label:"inputloadGoogleFonts"},fontFamily:{value:q,label:"inputFontFamily"},fontWeight:{value:K,label:"inputFontWeight"},fontSubset:{value:Q,label:"inputFontSubset"},fontSizeType:{value:Y,label:"inputFontSizeType"},fontSize:{value:X,label:"inputFontSize"},fontSizeMobile:{value:$,label:"inputFontSizeMobile"},fontSizeTablet:{value:Z,label:"inputFontSizeTablet"},lineHeightType:{value:te,label:"inputLineHeightType"},lineHeight:{value:ee,label:"inputLineHeight"},lineHeightMobile:{value:le,label:"inputLineHeightMobile"},lineHeightTablet:{value:ae,label:"inputLineHeightTablet"},transform:{value:Ae,label:"inputTransform"},decoration:{value:ke,label:"inputDecoration"}}),r.a.createElement(n.a,{setAttributes:a,label:Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:x,label:"boxShadowColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:F,label:"boxShadowHOffset",title:Object(l.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:I,label:"boxShadowVOffset",title:Object(l.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:j,label:"boxShadowBlur",title:Object(l.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:E,label:"boxShadowSpread",title:Object(l.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:z,label:"boxShadowPosition",title:Object(l.__)("Position","ultimate-addons-for-gutenberg")}})),"input"===T?r.a.createElement(_.PanelBody,{title:Object(l.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:U,onChange:e=>{a({iconSize:e})},min:0,max:500,unit:{value:Re,label:"iconSizeType"}}),r.a.createElement(v.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:N||"",onColorChange:e=>a({iconColor:e})}))):"",(()=>{const e=r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{label:Object(l.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:P||"",onColorChange:e=>a({buttonBgColor:e})}),"text"===ne&&r.a.createElement(v.a,{label:Object(l.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Se||"",onColorChange:e=>a({buttonTextColor:e})}),"icon"===ne&&r.a.createElement(v.a,{label:Object(l.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:W||"",onColorChange:e=>a({buttonIconColor:e})})),n=r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{label:Object(l.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:V||"",onColorChange:e=>a({buttonBgHoverColor:e})}),"text"===ne&&r.a.createElement(v.a,{label:Object(l.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ce||"",onColorChange:e=>a({buttonTextHoverColor:e})}),"icon"===ne&&r.a.createElement(v.a,{label:Object(l.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:R||"",onColorChange:e=>a({buttonIconHoverColor:e})}));return"input-button"===T?r.a.createElement(_.PanelBody,{title:Object(l.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},r.a.createElement(p.a,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:a,value:A,onChange:e=>{a({buttonWidth:e})},min:0,max:500,unit:{value:k,label:"buttonWidthType"}}),"icon"===ne&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{label:Object(l.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:D,onChange:e=>{a({buttonIconSize:e})},min:0,max:500,unit:{value:G,label:"buttonIconSizeType"}})),r.a.createElement(c.a,{tabs:[{name:"normal",title:Object(l.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(l.__)("Hover","ultimate-addons-for-gutenberg")}],normal:e,hover:n}),r.a.createElement(o.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:ie,label:"buttonloadGoogleFonts"},fontFamily:{value:be,label:"buttonFontFamily"},fontWeight:{value:re,label:"buttonFontWeight"},fontSubset:{value:de,label:"buttonFontSubset"},fontSizeType:{value:pe,label:"buttonFontSizeType"},fontSize:{value:ge,label:"buttonFontSize"},fontSizeMobile:{value:me,label:"buttonFontSizeMobile"},fontSizeTablet:{value:ce,label:"buttonFontSizeTablet"},lineHeightType:{value:ve,label:"buttonLineHeightType"},lineHeight:{value:se,label:"buttonLineHeight"},lineHeightMobile:{value:Te,label:"buttonLineHeightMobile"},lineHeightTablet:{value:_e,label:"buttonLineHeightTablet"},transform:{value:fe,label:"buttonTransform"},decoration:{value:he,label:"buttonDecoration"}})):""})()),r.a.createElement(s.b,h({},s.a.advance,{parentProps:e})))),De,Ge)};t.default=r.a.memo(T)}}]);