(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[57],{542:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(10),i=a(72),r=a(22),u=(a(109),a(2)),b=a(4),s=a(14),g=a(51),d=a(19),c=a(13),m=a(73),h=a(5),f=a(18);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return v(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?v(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}$=jQuery;var y=[{value:"thumbnail",label:Object(u.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(u.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(u.__)("Large","ultimate-addons-for-gutenberg")}],H=function(e){var t,a,v=e=e.parentProps,H=v.attributes,O=v.setAttributes,S=v.attributes,T=S.overallAlignment,F=S.showEstcost,j=S.showTotaltime,E=S.showMaterials,C=S.showTools,z=S.showTotaltimecolor,M=S.tools_count,L=S.material_count,w=S.tools,A=S.materials,I=S.mainimage,k=S.imgSize,P=S.headingColor,x=S.subHeadingColor,B=S.headingTag,U=S.headFontFamily,G=S.headFontWeight,W=S.headFontSubset,N=S.headFontSizeType,D=S.headFontSize,V=S.headFontSizeMobile,Y=S.headFontSizeTablet,q=S.headLineHeightType,J=S.headLineHeight,R=S.headLineHeightMobile,Q=S.headLineHeightTablet,K=S.subHeadFontFamily,X=S.subHeadFontWeight,Z=S.subHeadFontSubset,ee=S.subHeadFontSize,te=S.subHeadFontSizeType,ae=S.subHeadFontSizeMobile,ne=S.subHeadFontSizeTablet,le=S.subHeadLineHeight,oe=S.subHeadLineHeightType,ie=S.subHeadLineHeightMobile,re=S.subHeadLineHeightTablet,ue=S.headLoadGoogleFonts,be=S.subHeadLoadGoogleFonts,se=S.priceFontSizeType,ge=S.priceFontSize,de=S.priceFontSizeTablet,ce=S.priceFontSizeMobile,me=S.priceFontFamily,he=S.priceFontWeight,fe=S.priceFontSubset,pe=S.priceLineHeightType,_e=S.priceLineHeight,ve=S.priceLineHeightTablet,ye=S.priceLineHeightMobile,He=S.priceLoadGoogleFonts,Oe=S.timeSpace,Se=S.costSpace,Te=S.row_gap,Fe=S.step_gap,je=S.timeInHours,Ee=S.timeInDays,Ce=S.timeInMonths,ze=S.timeInYears,Me=S.timeInMins,Le=S.time;I&&I.sizes&&(t=I.sizes,a=[],$.each(t,(function(e){var t={value:e,label:e};a.push(t)})),y=a);var we,Ae,Ie,ke=Me||Le;if(!0===ue){var Pe={google:{families:[U+(G?":"+G:"")]}};we=l.a.createElement(i.a,{config:Pe})}if(!0===be){var xe={google:{families:[K+(X?":"+X:"")]}};Ae=l.a.createElement(i.a,{config:xe})}if(!0===He){var Be={google:{families:[me+(he?":"+he:"")]}};Ie=l.a.createElement(i.a,{config:Be})}return l.a.createElement(n.Suspense,{fallback:Object(o.a)()},l.a.createElement(b.BlockControls,{key:"index"},l.a.createElement(b.AlignmentToolbar,{value:T,onChange:function(e){return O({overallAlignment:e})}})),l.a.createElement(b.InspectorControls,null,l.a.createElement(g.a,null,l.a.createElement(d.b,d.a.general,l.a.createElement(h.PanelBody,{title:Object(u.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(f.a,{setAttributes:O,label:Object(u.__)("Tag","ultimate-addons-for-gutenberg"),data:{value:B,label:"headingTag"},options:[{value:"h1",label:Object(u.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(u.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(u.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(u.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(u.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(u.__)("H6","ultimate-addons-for-gutenberg")}]})),l.a.createElement(h.PanelBody,{title:Object(u.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(m.a,{onSelectImage:function(e){e&&e.url&&e.type&&"image"===e.type?O({mainimage:e}):O({mainimage:null})},backgroundImage:I,onRemoveImage:function(){O({mainimage:""})}}),I&&"null"!==I.url&&""!==I.url&&l.a.createElement(h.SelectControl,{label:Object(u.__)("Image Size","ultimate-addons-for-gutenberg"),options:y,value:k,onChange:function(e){return O({imgSize:e})}})),l.a.createElement(h.PanelBody,{title:Object(u.__)("Time","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(h.ToggleControl,{label:Object(u.__)("Show Total Time","ultimate-addons-for-gutenberg"),checked:j,onChange:function(){return O({showTotaltime:!j})},help:Object(u.__)("Note: Time is recommended field for schema. It should be ON","ultimate-addons-for-gutenberg")}),j&&l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{label:Object(u.__)("Years","ultimate-addons-for-gutenberg"),setAttributes:O,value:ze,onChange:function(e){return O({timeInYears:e})},min:1,max:10,displayUnit:!1}),l.a.createElement(c.a,{label:Object(u.__)("Months","ultimate-addons-for-gutenberg"),setAttributes:O,value:Ce,onChange:function(e){return O({timeInMonths:e})},min:1,max:12,displayUnit:!1}),l.a.createElement(c.a,{label:Object(u.__)("Days","ultimate-addons-for-gutenberg"),setAttributes:O,value:Ee,onChange:function(e){return O({timeInDays:e})},min:1,max:31,displayUnit:!1}),l.a.createElement(c.a,{label:Object(u.__)("Hours","ultimate-addons-for-gutenberg"),setAttributes:O,value:je,onChange:function(e){return O({timeInHours:e})},min:1,max:24,displayUnit:!1}),l.a.createElement(c.a,{label:Object(u.__)("Minutes","ultimate-addons-for-gutenberg"),setAttributes:O,value:ke,onChange:function(e){return O({timeInMins:e})},min:1,max:60,displayUnit:!1}))),l.a.createElement(h.PanelBody,{title:Object(u.__)("Cost","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(h.ToggleControl,{label:Object(u.__)("Show Estimated Cost","ultimate-addons-for-gutenberg"),checked:F,onChange:function(){return O({showEstcost:!F})},help:Object(u.__)("Note: Cost is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),l.a.createElement(h.ExternalLink,{href:"https://en.wikipedia.org/wiki/List_of_circulating_currencies"},Object(u.__)("Click here to find your countrys ISO code.","ultimate-addons-for-gutenberg"))),l.a.createElement(h.PanelBody,{title:Object(u.__)("Tools","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(h.ToggleControl,{label:Object(u.__)("Show Tools","ultimate-addons-for-gutenberg"),checked:C,onChange:function(){return O({showTools:!C})},help:Object(u.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),C&&l.a.createElement(c.a,{label:Object(u.__)("Number of Tools","ultimate-addons-for-gutenberg"),setAttributes:O,value:M,onChange:function(e){var t=_(w);if(t.length<e){for(var a=Math.abs(e-t.length),n=0;n<a;n++)t.push({add_required_tools:"- A Computer"+(t.length+1)});O({tools:t})}else{for(var l=Math.abs(e-t.length),o=t,i=0;i<l;i++)o.pop();O({tools:o})}O({tools_count:e})},min:1,max:50,displayUnit:!1})),l.a.createElement(h.PanelBody,{title:Object(u.__)("Materials","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(h.ToggleControl,{label:Object(u.__)("Show Materials","ultimate-addons-for-gutenberg"),checked:E,onChange:function(){return O({showMaterials:!E})},help:Object(u.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),E&&l.a.createElement(c.a,{label:Object(u.__)("Number of Materials","ultimate-addons-for-gutenberg"),setAttributes:O,value:L,onChange:function(e){var t=_(A);if(t.length<e){for(var a=Math.abs(e-t.length),n=0;n<a;n++)t.push({add_required_materials:"- A WordPress Website"+(t.length+1)});O({materials:t})}else{for(var l=Math.abs(e-t.length),o=t,i=0;i<l;i++)o.pop();O({materials:o})}O({material_count:e})},min:1,max:50,displayUnit:!1}))),l.a.createElement(d.b,d.a.style,l.a.createElement(h.PanelBody,{title:Object(u.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(s.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:P||"",onColorChange:function(e){return O({headingColor:e})}}),l.a.createElement(r.a,{label:Object(u.__)("Typography","ultimate-addons-for-gutenberg"),attributes:H,setAttributes:O,loadGoogleFonts:{value:ue,label:"headLoadGoogleFonts"},fontFamily:{value:U,label:"headFontFamily"},fontWeight:{value:G,label:"headFontWeight"},fontSubset:{value:W,label:"headFontSubset"},fontSizeType:{value:N,label:"headFontSizeType"},fontSize:{value:D,label:"headFontSize"},fontSizeMobile:{value:V,label:"headFontSizeMobile"},fontSizeTablet:{value:Y,label:"headFontSizeTablet"},lineHeightType:{value:q,label:"headLineHeightType"},lineHeight:{value:J,label:"headLineHeight"},lineHeightMobile:{value:R,label:"headLineHeightMobile"},lineHeightTablet:{value:Q,label:"headLineHeightTablet"}})),l.a.createElement(h.PanelBody,{title:Object(u.__)("Secondary Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:z||"",onColorChange:function(e){return O({showTotaltimecolor:e})}}),l.a.createElement(r.a,{label:Object(u.__)("Typography","ultimate-addons-for-gutenberg"),attributes:H,setAttributes:O,loadGoogleFonts:{value:He,label:"priceLoadGoogleFonts"},fontFamily:{value:me,label:"priceFontFamily"},fontWeight:{value:he,label:"priceFontWeight"},fontSubset:{value:fe,label:"priceFontSubset"},fontSizeType:{value:se,label:"priceFontSizeType"},fontSize:{value:ge,label:"priceFontSize"},fontSizeMobile:{value:ce,label:"priceFontSizeMobile"},fontSizeTablet:{value:de,label:"priceFontSizeTablet"},lineHeightType:{value:pe,label:"priceLineHeightType"},lineHeight:{value:_e,label:"priceLineHeight"},lineHeightMobile:{value:ye,label:"priceLineHeightMobile"},lineHeightTablet:{value:ve,label:"priceLineHeightTablet"}})),l.a.createElement(h.PanelBody,{title:Object(u.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:x||"",onColorChange:function(e){return O({subHeadingColor:e})}}),l.a.createElement(r.a,{label:Object(u.__)("Typography","ultimate-addons-for-gutenberg"),attributes:H,setAttributes:O,loadGoogleFonts:{value:be,label:"subHeadLoadGoogleFonts"},fontFamily:{value:K,label:"subHeadFontFamily"},fontWeight:{value:X,label:"subHeadFontWeight"},fontSubset:{value:Z,label:"subHeadFontSubset"},fontSizeType:{value:te,label:"subHeadFontSizeType"},fontSize:{value:ee,label:"subHeadFontSize"},fontSizeMobile:{value:ae,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ne,label:"subHeadFontSizeTablet"},lineHeightType:{value:oe,label:"subHeadLineHeightType"},lineHeight:{value:le,label:"subHeadLineHeight"},lineHeightMobile:{value:ie,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:re,label:"subHeadLineHeightTablet"}})),l.a.createElement(h.PanelBody,{title:Object(u.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},j&&l.a.createElement(c.a,{label:Object(u.__)("Time Margin","ultimate-addons-for-gutenberg"),setAttributes:O,value:Oe,onChange:function(e){return O({timeSpace:e})},min:0,max:50,displayUnit:!1}),F&&l.a.createElement(c.a,{label:Object(u.__)("Cost Margin","ultimate-addons-for-gutenberg"),setAttributes:O,value:Se,onChange:function(e){return O({costSpace:e})},min:0,max:50,displayUnit:!1}),l.a.createElement(c.a,{label:Object(u.__)("Row Gap","ultimate-addons-for-gutenberg"),setAttributes:O,value:Te,onChange:function(e){return O({row_gap:e})},min:0,max:500,displayUnit:!1}),l.a.createElement(c.a,{label:Object(u.__)("Gap Between Steps","ultimate-addons-for-gutenberg"),setAttributes:O,value:Fe,onChange:function(e){return O({step_gap:e})},min:0,max:500,displayUnit:!1}))),l.a.createElement(d.b,p({},d.a.advance,{parentProps:e})))),we,Ae,Ie)};t.default=l.a.memo(H)}}]);