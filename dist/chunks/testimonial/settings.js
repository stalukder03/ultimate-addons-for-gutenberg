(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[35],{356:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t(0),o=t.n(n),i=t(10),r=t(76),u=t(50),b=t(13),g=t(80),d=t(82),m=t(78),c=t(14),s=t(77),p=t(75),v=t(29),f=t(5),y=t(3);function _(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,l=new Array(a);t<a;t++)l[t]=e[t];return l}function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var T=function(e){var a,t,T,S=e=e.parentProps,O=S.setAttributes,C=S.attributes,j=S.deviceType,F=C.test_item_count,k=C.test_block,E=C.headingAlign,L=C.companyColor,M=C.descColor,z=C.authorColor,w=C.nameFontSizeType,A=C.nameFontSize,H=C.nameFontSizeTablet,B=C.nameFontSizeMobile,R=C.nameFontFamily,P=C.nameFontWeight,I=C.nameFontSubset,U=C.nameLineHeightType,G=C.nameLineHeight,W=C.nameLineHeightTablet,D=C.nameLineHeightMobile,x=C.nameLoadGoogleFonts,V=C.companyFontSizeType,N=C.companyFontSize,J=C.companyFontSizeTablet,q=C.companyFontSizeMobile,$=C.companyFontFamily,K=C.companyFontWeight,Q=C.companyFontSubset,X=C.companyLineHeightType,Y=C.companyLineHeight,Z=C.companyLineHeightTablet,ee=C.companyLineHeightMobile,ae=C.companyLoadGoogleFonts,te=C.descFontSizeType,le=C.descFontSize,ne=C.descFontSizeTablet,oe=C.descFontSizeMobile,ie=C.descFontFamily,re=C.descFontWeight,ue=C.descFontSubset,be=C.descLineHeightType,ge=C.descLineHeight,de=C.descLineHeightTablet,me=C.descLineHeightMobile,ce=C.descLoadGoogleFonts,se=C.descSpace,pe=C.iconimgStyle,ve=C.imagePosition,fe=C.imageAlignment,ye=C.nameSpace,_e=(C.imgHrPadding,C.imgVrPadding,C.imageSize),he=C.imageWidth,Te=C.columns,Se=C.tcolumns,Oe=C.mcolumns,Ce=C.pauseOnHover,je=C.infiniteLoop,Fe=C.transitionSpeed,ke=C.arrowDots,Ee=C.arrowSize,Le=C.arrowBorderSize,Me=C.arrowBorderRadius,ze=C.autoplay,we=C.autoplaySpeed,Ae=C.arrowColor,He=C.rowGap,Be=C.columnGap,Re=(C.contentPadding,C.backgroundType),Pe=C.backgroundColor,Ie=C.backgroundImage,Ue=C.backgroundPosition,Ge=C.backgroundSize,We=C.backgroundRepeat,De=C.backgroundImageColor,xe=C.backgroundOpacity,Ve=C.borderStyle,Ne=C.borderWidth,Je=C.borderRadius,qe=C.borderColor,$e=C.stack,Ke=C.imageWidthType,Qe=C.arrowSizeType,Xe=C.rowGapType,Ye=C.columnGapType,Ze=C.descSpaceType,ea=C.nameSpaceType,aa=C.borderHoverColor,ta=C.overlayType,la=C.backgroundAttachment,na=C.gradientValue,oa=C.descTransform,ia=C.descDecoration,ra=C.nameTransform,ua=C.nameDecoration,ba=C.companyTransform,ga=C.companyDecoration,da=C.paddingUnit,ma=C.mobilePaddingUnit,ca=C.tabletPaddingUnit,sa=C.paddingTop,pa=C.paddingBottom,va=C.paddingLeft,fa=C.paddingRight,ya=C.paddingTopTablet,_a=C.paddingRightTablet,ha=C.paddingBottomTablet,Ta=C.paddingLeftTablet,Sa=C.paddingTopMobile,Oa=C.paddingRightMobile,Ca=C.paddingBottomMobile,ja=C.paddingLeftMobile,Fa=C.imgspacingLink,ka=C.spacingLink,Ea=C.imgpaddingTop,La=C.imgpaddingRight,Ma=C.imgpaddingBottom,za=C.imgpaddingLeft,wa=C.imgpaddingTopTablet,Aa=C.imgpaddingRightTablet,Ha=C.imgpaddingBottomTablet,Ba=C.imgpaddingLeftTablet,Ra=C.imgpaddingTopMobile,Pa=C.imgpaddingRightMobile,Ia=C.imgpaddingBottomMobile,Ua=C.imgpaddingLeftMobile,Ga=C.imgpaddingUnit,Wa=C.imgmobilePaddingUnit,Da=C.imgtabletPaddingUnit;if(1==x){var xa={google:{families:[R+(P?":"+P:"")]}};a=o.a.createElement(u.a,{config:xa})}if(1==ae){var Va={google:{families:[$+(K?":"+K:"")]}};t=o.a.createElement(u.a,{config:Va})}if(1==ce){var Na={google:{families:[ie+(re?":"+re:"")]}};T=o.a.createElement(u.a,{config:Na})}var Ja=[{value:"thumbnail",label:Object(l.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(l.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(l.__)("Large","ultimate-addons-for-gutenberg")}],qa=function(e){var a=null;return k[e]&&void 0!==k[e]&&(a=k[e].image),o.a.createElement(y.PanelBody,{key:e,title:Object(l.__)("Image","ultimate-addons-for-gutenberg")+" "+(e+1)+" "+Object(l.__)("Settings","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb-repeater-panel"},o.a.createElement(y.BaseControl,{id:"",className:"editor-bg-image-control",label:Object(l.__)("")},o.a.createElement(f.MediaUpload,{title:Object(l.__)("Select Image"+(e+1)),onSelect:function(a){!function(e,a){var t=null;t=e&&e.url?e:null,e.type&&"image"===e.type||(t=null);var l=k.map((function(e,l){return a===l&&(e.image=t),e}));O({test_block:l})}(a,e)},allowedTypes:["image"],value:a,render:function(a){var t,n,i=a.open;return o.a.createElement(y.Button,{isSecondary:!0,onClick:i},(t=k[e].image,n=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),t&&(n=null==t.url||""==t.url?Object(l.__)("Select Image","ultimate-addons-for-gutenberg"):Object(l.__)("Replace Image","ultimate-addons-for-gutenberg")),n))}}),a&&null!==k[e].image.url&&""!==k[e].image.url&&o.a.createElement(y.Button,{className:"uagb-rm-btn",key:e,onClick:function(){!function(e){var a=k.map((function(a,t){return e===t&&(a.image=null),a}));O({test_block:a})}(e)},isLink:!0,isDestructive:!0},Object(l.__)("Remove Image"))))},$a=0;return k.map((function(e,a){var t=k[a];if(t&&void 0!==t){var l=t.image;null!=l&&""!==l&&$a++}})),o.a.createElement(n.Suspense,{fallback:Object(i.a)()},o.a.createElement(f.BlockControls,{key:"controls"},o.a.createElement(f.AlignmentToolbar,{value:E,onChange:function(e){return O({headingAlign:e})}})),o.a.createElement(f.InspectorControls,null,o.a.createElement(p.a,null,o.a.createElement(v.b,v.a.general,o.a.createElement(y.PanelBody,{title:Object(l.__)("General"),initialOpen:!0},o.a.createElement(b.a,{label:Object(l.__)("Number of Testimonials","ultimate-addons-for-gutenberg"),value:F,onChange:function(e){var a,t=function(e){if(Array.isArray(e))return _(e)}(a=k)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,a){if(e){if("string"==typeof e)return _(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_(e,void 0):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();if(t.length<e){for(var l=Math.abs(e-t.length),n=0;n<l;n++)t.push({description:"I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!",name:"John Doe",company:"Company"+(t.length+1),image:""});O({test_block:t})}else{for(var o=Math.abs(e-t.length),i=t,r=0;r<o;r++)i.pop();O({test_block:i})}O({test_item_count:e})},min:0,max:50,setAttributes:O,displayUnit:!1}),o.a.createElement(g.a,{label:Object(l.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:Te,label:"columns"},tablet:{value:Se,label:"tcolumns"},mobile:{value:Oe,label:"mcolumns"}},min:1,max:F,displayUnit:!1,setAttributes:O})),o.a.createElement(y.PanelBody,{title:Object(l.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},function(){for(var e=[],a=0;a<F;a++)e.push(qa(a));return e}(),$a>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(y.SelectControl,{label:Object(l.__)("Image Position"),value:ve,onChange:function(e){return O({imagePosition:e})},options:[{value:"top",label:Object(l.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(l.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"left",label:Object(l.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(l.__)("Right","ultimate-addons-for-gutenberg")}]}),("left"==ve||"right"==ve)&&o.a.createElement(o.a.Fragment,null,o.a.createElement(y.SelectControl,{label:Object(l.__)("Vertical ALignment","ultimate-addons-for-gutenberg"),value:fe,onChange:function(e){return O({imageAlignment:e})},options:[{value:"top",label:Object(l.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(l.__)("Middle","ultimate-addons-for-gutenberg")}]}),o.a.createElement(y.SelectControl,{label:Object(l.__)("Stack on","ultimate-addons-for-gutenberg"),value:$e,options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(l.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(l.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(l.__)("Note: Choose on what breakpoint the Info Box will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return O({stack:e})}})),o.a.createElement(y.SelectControl,{label:Object(l.__)("Image Style","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return O({iconimgStyle:e})},options:[{value:"normal",label:Object(l.__)("Normal","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(l.__)("Circle","ultimate-addons-for-gutenberg")},{value:"square",label:Object(l.__)("Square","ultimate-addons-for-gutenberg")}]}),o.a.createElement(y.SelectControl,{label:Object(l.__)("Image Size","ultimate-addons-for-gutenberg"),options:Ja,value:_e,onChange:function(e){return O({imageSize:e})}}),o.a.createElement(b.a,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:O,value:he,onChange:function(e){return O({imageWidth:e})},min:0,max:500,unit:{value:Ke,label:"imageWidthType"}}))),o.a.createElement(y.PanelBody,{title:Object(l.__)("Carousel","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(y.ToggleControl,{label:Object(l.__)("Pause On Hover","ultimate-addons-for-gutenberg"),checked:Ce,onChange:function(){O({pauseOnHover:!Ce})}}),o.a.createElement(y.ToggleControl,{label:Object(l.__)("Autoplay"),checked:ze,onChange:function(){O({autoplay:!ze})}}),1==ze&&o.a.createElement(b.a,{label:Object(l.__)("Autoplay Speed (ms)","ultimate-addons-for-gutenberg"),setAttributes:O,value:we,onChange:function(e){return O({autoplaySpeed:e})},min:100,max:1e4,displayUnit:!1}),o.a.createElement(y.ToggleControl,{label:Object(l.__)("Infinite Loop","ultimate-addons-for-gutenberg"),checked:je,onChange:function(){O({infiniteLoop:!je})}}),o.a.createElement(b.a,{label:Object(l.__)("Transition Speed (ms)","ultimate-addons-for-gutenberg"),setAttributes:O,value:Fe,onChange:function(e){return O({transitionSpeed:e})},min:100,max:5e3,displayUnit:!1}),o.a.createElement(y.SelectControl,{label:Object(l.__)("Show Arrows & Dots","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return O({arrowDots:e})},options:[{value:"arrows",label:Object(l.__)("Only Arrows","ultimate-addons-for-gutenberg")},{value:"dots",label:Object(l.__)("Only Dots","ultimate-addons-for-gutenberg")},{value:"arrows_dots",label:Object(l.__)("Both Arrows & Dots","ultimate-addons-for-gutenberg")}]}))),o.a.createElement(v.b,v.a.style,o.a.createElement(y.PanelBody,{title:Object(l.__)("Name","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(r.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:O,loadGoogleFonts:{value:x,label:"nameLoadGoogleFonts"},fontFamily:{value:R,label:"nameFontFamily"},fontWeight:{value:P,label:"nameFontWeight"},fontSubset:{value:I,label:"nameFontSubset"},fontSizeType:{value:w,label:"nameFontSizeType"},fontSize:{value:A,label:"nameFontSize"},fontSizeMobile:{value:B,label:"nameFontSizeMobile"},fontSizeTablet:{value:H,label:"nameFontSizeTablet"},lineHeightType:{value:U,label:"nameLineHeightType"},lineHeight:{value:G,label:"nameLineHeight"},lineHeightMobile:{value:D,label:"nameLineHeightMobile"},lineHeightTablet:{value:W,label:"nameLineHeightTablet"},transform:{value:ra,label:"nameTransform"},decoration:{value:ua,label:"nameDecoration"}}),o.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:z||"",onColorChange:function(e){return O({authorColor:e})}}),o.a.createElement(b.a,{label:Object(l.__)("Bottom Margin","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return O({nameSpace:e})},min:0,max:50,unit:{value:ea,label:"nameSpaceType"},setAttributes:O})),o.a.createElement(y.PanelBody,{title:Object(l.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:function(e){return O({descColor:e})}}),o.a.createElement(b.a,{label:Object(l.__)("Bottom Margin","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return O({descSpace:e})},min:0,max:50,unit:{value:Ze,label:"descSpaceType"},setAttributes:O}),o.a.createElement(r.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:O,loadGoogleFonts:{value:ce,label:"descLoadGoogleFonts"},fontFamily:{value:ie,label:"descFontFamily"},fontWeight:{value:re,label:"descFontWeight"},fontSubset:{value:ue,label:"descFontSubset"},fontSizeType:{value:te,label:"descFontSizeType"},fontSize:{value:le,label:"descFontSize"},fontSizeMobile:{value:oe,label:"descFontSizeMobile"},fontSizeTablet:{value:ne,label:"descFontSizeTablet"},lineHeightType:{value:be,label:"descLineHeightType"},lineHeight:{value:ge,label:"descLineHeight"},lineHeightMobile:{value:me,label:"descLineHeightMobile"},lineHeightTablet:{value:de,label:"descLineHeightTablet"},transform:{value:oa,label:"descTransform"},decoration:{value:ia,label:"descDecoration"}}),o.a.createElement(s.a,h({},e,{label:Object(l.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:sa,label:"paddingTop"},valueRight:{value:fa,label:"paddingRight"},valueBottom:{value:pa,label:"paddingBottom"},valueLeft:{value:va,label:"paddingLeft"},valueTopTablet:{value:ya,label:"paddingTopTablet"},valueRightTablet:{value:_a,label:"paddingRightTablet"},valueBottomTablet:{value:ha,label:"paddingBottomTablet"},valueLeftTablet:{value:Ta,label:"paddingLeftTablet"},valueTopMobile:{value:Sa,label:"paddingTopMobile"},valueRightMobile:{value:Oa,label:"paddingRightMobile"},valueBottomMobile:{value:Ca,label:"paddingBottomMobile"},valueLeftMobile:{value:ja,label:"paddingLeftMobile"},unit:{value:da,label:"paddingUnit"},mUnit:{value:ma,label:"mobilePaddingUnit"},tUnit:{value:ca,label:"tabletPaddingUnit"},deviceType:j,attributes:C,setAttributes:O,link:{value:ka,label:"spacingLink"}}))),o.a.createElement(y.PanelBody,{title:Object(l.__)("Company","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(c.a,{label:Object(l.__)("Company Color","ultimate-addons-for-gutenberg"),colorValue:L||"",onColorChange:function(e){return O({companyColor:e})}}),o.a.createElement(r.a,{label:Object(l.__)("Company Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:O,loadGoogleFonts:{value:ae,label:"companyLoadGoogleFonts"},fontFamily:{value:$,label:"companyFontFamily"},fontWeight:{value:K,label:"companyFontWeight"},fontSubset:{value:Q,label:"companyFontSubset"},fontSizeType:{value:V,label:"companyFontSizeType"},fontSize:{value:N,label:"companyFontSize"},fontSizeMobile:{value:q,label:"companyFontSizeMobile"},fontSizeTablet:{value:J,label:"companyFontSizeTablet"},lineHeightType:{value:X,label:"companyLineHeightType"},lineHeight:{value:Y,label:"companyLineHeight"},lineHeightMobile:{value:ee,label:"companyLineHeightMobile"},lineHeightTablet:{value:Z,label:"companyLineHeightTablet"},transform:{value:ba,label:"companyTransform"},decoration:{value:ga,label:"companyDecoration"}})),o.a.createElement(y.PanelBody,{title:Object(l.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.a,h({},e,{label:Object(l.__)("Image Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ea,label:"imgpaddingTop"},valueRight:{value:La,label:"imgpaddingRight"},valueBottom:{value:Ma,label:"imgpaddingBottom"},valueLeft:{value:za,label:"imgpaddingLeft"},valueTopTablet:{value:wa,label:"imgpaddingTopTablet"},valueRightTablet:{value:Aa,label:"imgpaddingRightTablet"},valueBottomTablet:{value:Ha,label:"imgpaddingBottomTablet"},valueLeftTablet:{value:Ba,label:"imgpaddingLeftTablet"},valueTopMobile:{value:Ra,label:"imgpaddingTopMobile"},valueRightMobile:{value:Pa,label:"imgpaddingRightMobile"},valueBottomMobile:{value:Ia,label:"imgpaddingBottomMobile"},valueLeftMobile:{value:Ua,label:"imgpaddingLeftMobile"},unit:{value:Ga,label:"imgpaddingUnit"},mUnit:{value:Wa,label:"imgmobilePaddingUnit"},tUnit:{value:Da,label:"imgtabletPaddingUnit"},deviceType:j,attributes:C,setAttributes:O,link:{value:Fa,label:"imgspacingLink"}}))),o.a.createElement(y.PanelBody,{title:Object(l.__)("Carousel Style","ultimate-addons-for-gutenberg"),initialOpen:!1},"dots"!=ke&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{label:Object(l.__)("Arrow Size","ultimate-addons-for-gutenberg"),setAttributes:O,value:Ee,onChange:function(e){return O({arrowSize:e})},min:0,max:50,unit:{value:Qe,label:"arrowSizeType"}}),o.a.createElement(b.a,{label:Object(l.__)("Arrow Border Size","ultimate-addons-for-gutenberg"),setAttributes:O,value:Le,onChange:function(e){return O({arrowBorderSize:e})},min:0,max:50,displayUnit:!1}),o.a.createElement(b.a,{label:Object(l.__)("Arrow Border Radius","ultimate-addons-for-gutenberg"),setAttributes:O,value:Me,onChange:function(e){return O({arrowBorderRadius:e})},min:0,max:50,displayUnit:!1})),o.a.createElement(b.a,{label:Object(l.__)("Gap Between Content & Dots","ultimate-addons-for-gutenberg"),value:He,setAttributes:O,onChange:function(e){return O({rowGap:e})},min:0,max:50,unit:{value:Xe,label:"rowGapType"}}),o.a.createElement(b.a,{label:Object(l.__)("Row Gap","ultimate-addons-for-gutenberg"),value:Be,onChange:function(e){return O({columnGap:e})},min:0,max:50,unit:{value:Ye,label:"columnGapType"},setAttributes:O}),o.a.createElement(c.a,{label:Object(l.__)("Arrow & Dots Color","ultimate-addons-for-gutenberg"),colorValue:Ae||"",onColorChange:function(e){return O({arrowColor:e})}}),o.a.createElement(m.a,{setAttributes:O,borderStyle:{value:Ve,label:"borderStyle",title:Object(l.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Ne,label:"borderWidth",title:Object(l.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Je,label:"borderRadius",title:Object(l.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:qe,label:"borderColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:aa,label:"borderHoverColor",title:Object(l.__)("Hover Color","ultimate-addons-for-gutenberg")}}),o.a.createElement(d.a,h({setAttributes:O,backgroundGradient:{value:na,label:"gradientValue"},backgroundImageColor:{value:De,label:"backgroundImageColor"},overlayType:{value:ta,label:"overlayType"},backgroundSize:{value:Ge,label:"backgroundSize"},backgroundRepeat:{value:We,label:"backgroundRepeat"},backgroundAttachment:{value:la,label:"backgroundAttachment"},backgroundPosition:{value:Ue,label:"backgroundPosition"},backgroundImage:{value:Ie,label:"backgroundImage"},backgroundColor:{value:Pe,label:"backgroundColor"},backgroundType:{value:Re,label:"backgroundType"},backgroundOpacity:{value:xe,label:"backgroundOpacity"},backgroundVideoType:{value:!1}},e)))),o.a.createElement(v.b,v.a.advance))),a,t,T)};a.default=o.a.memo(T)}}]);