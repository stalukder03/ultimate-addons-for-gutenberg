(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[24],{499:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(12),i=a(58),r=a(21),u=(a(94),a(2)),b=a(5),s=a(14),g=a(41),d=a(19),c=a(13),m=a(60),h=a(4),f=a(18);function p(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return _(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}$=jQuery;var v=[{value:"thumbnail",label:Object(u.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(u.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(u.__)("Large","ultimate-addons-for-gutenberg")}],y=function(e){var t,a,_=e=e.parentProps,y=_.attributes,H=_.setAttributes,S=_.attributes,T=S.overallAlignment,O=S.showEstcost,F=S.showTotaltime,j=S.showMaterials,E=S.showTools,C=S.showTotaltimecolor,z=S.tools_count,M=S.material_count,L=S.tools,w=S.materials,A=S.mainimage,I=S.imgSize,k=S.headingColor,x=S.subHeadingColor,B=S.headingTag,P=S.headFontFamily,U=S.headFontWeight,G=S.headFontSubset,W=S.headFontSizeType,N=S.headFontSize,D=S.headFontSizeMobile,V=S.headFontSizeTablet,Y=S.headLineHeightType,q=S.headLineHeight,J=S.headLineHeightMobile,R=S.headLineHeightTablet,Q=S.subHeadFontFamily,K=S.subHeadFontWeight,X=S.subHeadFontSubset,Z=S.subHeadFontSize,ee=S.subHeadFontSizeType,te=S.subHeadFontSizeMobile,ae=S.subHeadFontSizeTablet,ne=S.subHeadLineHeight,le=S.subHeadLineHeightType,oe=S.subHeadLineHeightMobile,ie=S.subHeadLineHeightTablet,re=S.headLoadGoogleFonts,ue=S.subHeadLoadGoogleFonts,be=S.priceFontSizeType,se=S.priceFontSize,ge=S.priceFontSizeTablet,de=S.priceFontSizeMobile,ce=S.priceFontFamily,me=S.priceFontWeight,he=S.priceFontSubset,fe=S.priceLineHeightType,pe=S.priceLineHeight,_e=S.priceLineHeightTablet,ve=S.priceLineHeightMobile,ye=S.priceLoadGoogleFonts,He=S.timeSpace,Se=S.costSpace,Te=S.row_gap,Oe=S.step_gap,Fe=S.timeInHours,je=S.timeInDays,Ee=S.timeInMonths,Ce=S.timeInYears,ze=S.timeInMins,Me=S.time;A&&A.sizes&&(t=A.sizes,a=[],$.each(t,(function(e){var t={value:e,label:e};a.push(t)})),v=a);var Le,we,Ae,Ie=ze||Me;if(!0===re){var ke={google:{families:[P+(U?":"+U:"")]}};Le=l.a.createElement(i.a,{config:ke})}if(!0===ue){var xe={google:{families:[Q+(K?":"+K:"")]}};we=l.a.createElement(i.a,{config:xe})}if(!0===ye){var Be={google:{families:[ce+(me?":"+me:"")]}};Ae=l.a.createElement(i.a,{config:Be})}return l.a.createElement(n.Suspense,{fallback:Object(o.a)()},l.a.createElement(b.BlockControls,{key:"index"},l.a.createElement(b.AlignmentToolbar,{value:T,onChange:function(e){return H({overallAlignment:e})}})),l.a.createElement(b.InspectorControls,null,l.a.createElement(g.a,null,l.a.createElement(d.b,d.a.general,l.a.createElement(h.PanelBody,{title:Object(u.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(f.a,{setAttributes:H,label:Object(u.__)("Tag","ultimate-addons-for-gutenberg"),data:{value:B,label:"headingTag"},options:[{value:"h1",label:Object(u.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(u.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(u.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(u.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(u.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(u.__)("H6","ultimate-addons-for-gutenberg")}]})),l.a.createElement(h.PanelBody,{title:Object(u.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(m.a,{onSelectImage:function(e){e&&e.url&&e.type&&"image"===e.type?H({mainimage:e}):H({mainimage:null})},backgroundImage:A,onRemoveImage:function(){H({mainimage:""})}}),A&&"null"!==A.url&&""!==A.url&&l.a.createElement(h.SelectControl,{label:Object(u.__)("Image Size","ultimate-addons-for-gutenberg"),options:v,value:I,onChange:function(e){return H({imgSize:e})}})),l.a.createElement(h.PanelBody,{title:Object(u.__)("Time","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(h.ToggleControl,{label:Object(u.__)("Show Total Time","ultimate-addons-for-gutenberg"),checked:F,onChange:function(){return H({showTotaltime:!F})},help:Object(u.__)("Note: Time is recommended field for schema. It should be ON","ultimate-addons-for-gutenberg")}),F&&l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{label:Object(u.__)("Years","ultimate-addons-for-gutenberg"),setAttributes:H,value:Ce,onChange:function(e){return H({timeInYears:e})},min:1,max:10,displayUnit:!1}),l.a.createElement(c.a,{label:Object(u.__)("Months","ultimate-addons-for-gutenberg"),setAttributes:H,value:Ee,onChange:function(e){return H({timeInMonths:e})},min:1,max:12,displayUnit:!1}),l.a.createElement(c.a,{label:Object(u.__)("Days","ultimate-addons-for-gutenberg"),setAttributes:H,value:je,onChange:function(e){return H({timeInDays:e})},min:1,max:31,displayUnit:!1}),l.a.createElement(c.a,{label:Object(u.__)("Hours","ultimate-addons-for-gutenberg"),setAttributes:H,value:Fe,onChange:function(e){return H({timeInHours:e})},min:1,max:24,displayUnit:!1}),l.a.createElement(c.a,{label:Object(u.__)("Minutes","ultimate-addons-for-gutenberg"),setAttributes:H,value:Ie,onChange:function(e){return H({timeInMins:e})},min:1,max:60,displayUnit:!1}))),l.a.createElement(h.PanelBody,{title:Object(u.__)("Cost","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(h.ToggleControl,{label:Object(u.__)("Show Estimated Cost","ultimate-addons-for-gutenberg"),checked:O,onChange:function(){return H({showEstcost:!O})},help:Object(u.__)("Note: Cost is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),l.a.createElement(h.ExternalLink,{href:"https://en.wikipedia.org/wiki/List_of_circulating_currencies"},Object(u.__)("Click here to find your countrys ISO code.","ultimate-addons-for-gutenberg"))),l.a.createElement(h.PanelBody,{title:Object(u.__)("Tools","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(h.ToggleControl,{label:Object(u.__)("Show Tools","ultimate-addons-for-gutenberg"),checked:E,onChange:function(){return H({showTools:!E})},help:Object(u.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),E&&l.a.createElement(c.a,{label:Object(u.__)("Number of Tools","ultimate-addons-for-gutenberg"),setAttributes:H,value:z,onChange:function(e){var t=p(L);if(t.length<e){for(var a=Math.abs(e-t.length),n=0;n<a;n++)t.push({add_required_tools:"- A Computer"+(t.length+1)});H({tools:t})}else{for(var l=Math.abs(e-t.length),o=t,i=0;i<l;i++)o.pop();H({tools:o})}H({tools_count:e})},min:1,max:50,displayUnit:!1})),l.a.createElement(h.PanelBody,{title:Object(u.__)("Materials","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(h.ToggleControl,{label:Object(u.__)("Show Materials","ultimate-addons-for-gutenberg"),checked:j,onChange:function(){return H({showMaterials:!j})},help:Object(u.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),j&&l.a.createElement(c.a,{label:Object(u.__)("Number of Materials","ultimate-addons-for-gutenberg"),setAttributes:H,value:M,onChange:function(e){var t=p(w);if(t.length<e){for(var a=Math.abs(e-t.length),n=0;n<a;n++)t.push({add_required_materials:"- A WordPress Website"+(t.length+1)});H({materials:t})}else{for(var l=Math.abs(e-t.length),o=t,i=0;i<l;i++)o.pop();H({materials:o})}H({material_count:e})},min:1,max:50,displayUnit:!1}))),l.a.createElement(d.b,d.a.style,l.a.createElement(h.PanelBody,{title:Object(u.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(s.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:function(e){return H({headingColor:e})}}),l.a.createElement(r.a,{label:Object(u.__)("Typography","ultimate-addons-for-gutenberg"),attributes:y,setAttributes:H,loadGoogleFonts:{value:re,label:"headLoadGoogleFonts"},fontFamily:{value:P,label:"headFontFamily"},fontWeight:{value:U,label:"headFontWeight"},fontSubset:{value:G,label:"headFontSubset"},fontSizeType:{value:W,label:"headFontSizeType"},fontSize:{value:N,label:"headFontSize"},fontSizeMobile:{value:D,label:"headFontSizeMobile"},fontSizeTablet:{value:V,label:"headFontSizeTablet"},lineHeightType:{value:Y,label:"headLineHeightType"},lineHeight:{value:q,label:"headLineHeight"},lineHeightMobile:{value:J,label:"headLineHeightMobile"},lineHeightTablet:{value:R,label:"headLineHeightTablet"}})),l.a.createElement(h.PanelBody,{title:Object(u.__)("Secondary Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:function(e){return H({showTotaltimecolor:e})}}),l.a.createElement(r.a,{label:Object(u.__)("Typography","ultimate-addons-for-gutenberg"),attributes:y,setAttributes:H,loadGoogleFonts:{value:ye,label:"priceLoadGoogleFonts"},fontFamily:{value:ce,label:"priceFontFamily"},fontWeight:{value:me,label:"priceFontWeight"},fontSubset:{value:he,label:"priceFontSubset"},fontSizeType:{value:be,label:"priceFontSizeType"},fontSize:{value:se,label:"priceFontSize"},fontSizeMobile:{value:de,label:"priceFontSizeMobile"},fontSizeTablet:{value:ge,label:"priceFontSizeTablet"},lineHeightType:{value:fe,label:"priceLineHeightType"},lineHeight:{value:pe,label:"priceLineHeight"},lineHeightMobile:{value:ve,label:"priceLineHeightMobile"},lineHeightTablet:{value:_e,label:"priceLineHeightTablet"}})),l.a.createElement(h.PanelBody,{title:Object(u.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:x||"",onColorChange:function(e){return H({subHeadingColor:e})}}),l.a.createElement(r.a,{label:Object(u.__)("Typography","ultimate-addons-for-gutenberg"),attributes:y,setAttributes:H,loadGoogleFonts:{value:ue,label:"subHeadLoadGoogleFonts"},fontFamily:{value:Q,label:"subHeadFontFamily"},fontWeight:{value:K,label:"subHeadFontWeight"},fontSubset:{value:X,label:"subHeadFontSubset"},fontSizeType:{value:ee,label:"subHeadFontSizeType"},fontSize:{value:Z,label:"subHeadFontSize"},fontSizeMobile:{value:te,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ae,label:"subHeadFontSizeTablet"},lineHeightType:{value:le,label:"subHeadLineHeightType"},lineHeight:{value:ne,label:"subHeadLineHeight"},lineHeightMobile:{value:oe,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:ie,label:"subHeadLineHeightTablet"}})),l.a.createElement(h.PanelBody,{title:Object(u.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},F&&l.a.createElement(c.a,{label:Object(u.__)("Time Margin","ultimate-addons-for-gutenberg"),setAttributes:H,value:He,onChange:function(e){return H({timeSpace:e})},min:0,max:50,displayUnit:!1}),O&&l.a.createElement(c.a,{label:Object(u.__)("Cost Margin","ultimate-addons-for-gutenberg"),setAttributes:H,value:Se,onChange:function(e){return H({costSpace:e})},min:0,max:50,displayUnit:!1}),l.a.createElement(c.a,{label:Object(u.__)("Row Gap","ultimate-addons-for-gutenberg"),setAttributes:H,value:Te,onChange:function(e){return H({row_gap:e})},min:0,max:500,displayUnit:!1}),l.a.createElement(c.a,{label:Object(u.__)("Gap Between Steps","ultimate-addons-for-gutenberg"),setAttributes:H,value:Oe,onChange:function(e){return H({step_gap:e})},min:0,max:500,displayUnit:!1}))),l.a.createElement(d.b,d.a.advance))),Le,we,Ae)};t.default=l.a.memo(y)}}]);