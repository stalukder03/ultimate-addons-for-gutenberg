(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[76],{445:function(e,t,a){"use strict";a.r(t),a.d(t,"removeFromArray",(function(){return O}));var n=a(94),l=a(67),o=a(2),r=a(1),i=a.n(r),u=a(11),b=a(4),d=a(17),c=a(93),g=a(38),m=(a(51),a(68)),s=a(95),f=a(50),h=a(7);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}$=jQuery;var v=[{value:"thumbnail",label:Object(o.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")}],O=function(e,t){return e.filter((function(e){return Array.isArray(t)?!t.includes(e):e!==t}))},y=function(e){var t,a,O,y=e=e.parentProps,C=y.attributes,T=y.setAttributes,S=C.enableSchema,j=C.itemType,E=C.itemSubtype,F=C.sku,H=C.identifier,P=C.identifierType,A=C.offerType,L=C.offerCurrency,w=C.offerStatus,k=C.offerPrice,z=C.offerExpiry,M=C.datepublish,B=C.ctaLink,I=C.ctaTarget,R=C.brand,x=C.headingTag,D=C.mainimage,N=C.imgSize,G=C.showFeature,V=C.showAuthor,U=C.starColor,W=C.descColor,J=C.titleColor,K=C.contentColor,Q=C.headFontFamily,q=C.headFontWeight,X=C.headFontSubset,Y=C.headFontSizeType,Z=C.headFontSize,ee=C.headFontSizeMobile,te=C.headFontSizeTablet,ae=C.headLineHeightType,ne=C.headLineHeight,le=C.headLineHeightMobile,oe=C.headLineHeightTablet,re=C.headLoadGoogleFonts,ie=C.subHeadFontFamily,ue=C.subHeadFontWeight,be=C.subHeadFontSubset,de=C.subHeadFontSize,ce=C.subHeadFontSizeType,ge=C.subHeadFontSizeMobile,me=C.subHeadFontSizeTablet,se=C.subHeadLineHeight,fe=C.subHeadLineHeightType,he=C.subHeadLineHeightMobile,_e=C.subHeadLineHeightTablet,pe=C.subHeadLoadGoogleFonts,ve=C.contentLoadGoogleFonts,Oe=C.contentFontFamily,ye=C.contentFontWeight,Ce=C.contentFontSubset,Te=C.contentFontSizeType,Se=C.contentLineHeightType,je=C.contentFontSize,Ee=C.contentFontSizeTablet,Fe=C.contentFontSizeMobile,He=C.contentLineHeight,Pe=C.contentLineHeightTablet,Ae=C.contentLineHeightMobile,Le=C.topPadding,we=C.bottomPadding,ke=C.rightPadding,ze=C.leftPadding,Me=C.paddingTopMobile,Be=C.paddingBottomMobile,Ie=C.paddingRightMobile,Re=C.paddingLeftMobile,xe=C.paddingTopTablet,De=C.paddingBottomTablet,Ne=C.paddingRightTablet,Ge=C.paddingLeftTablet,Ve=C.spacingLink,Ue=C.paddingUnit,We=C.mobilePaddingUnit,$e=C.tabletPaddingUnit,Je=C.authorColor,Ke=C.summaryColor,Qe=C.starActiveColor,qe=C.starOutlineColor,Xe=C.enableDescription,Ye=C.enableImage,Ze=C.overallAlignment,et=C.isbn,tt=C.bookAuthorName,at=C.reviewPublisher,nt=C.provider,lt=C.appCategory,ot=C.operatingSystem,rt=C.datecreated,it=C.directorname;if(1==re){var ut={google:{families:[Q+(q?":"+q:"")]}};a=i.a.createElement(l.a,{config:ut})}if(1==pe){var bt={google:{families:[ie+(ue?":"+ue:"")]}};O=i.a.createElement(l.a,{config:bt})}if(1==ve){var dt={google:{families:[Oe+(ye?":"+ye:"")]}};t=i.a.createElement(l.a,{config:dt})}var ct,gt,mt,st={Book:[{value:"Audiobook",label:Object(o.__)("Audio book","ultimate-addons-for-gutenberg")}],Product:[{value:"IndividualProduct",label:Object(o.__)("Individual Product","ultimate-addons-for-gutenberg")},{value:"ProductCollection",label:Object(o.__)("Product Collection","ultimate-addons-for-gutenberg")},{value:"ProductGroup",label:Object(o.__)("Product Group","ultimate-addons-for-gutenberg")},{value:"ProductModel",label:Object(o.__)("Product Model","ultimate-addons-for-gutenberg")},{value:"SomeProducts",label:Object(o.__)("Some Products","ultimate-addons-for-gutenberg")},{value:"Vehicle",label:Object(o.__)("Vehicle","ultimate-addons-for-gutenberg")}],SoftwareApplication:[{value:"MobileApplication",label:Object(o.__)("Mobile Application","ultimate-addons-for-gutenberg")},{value:"VideoGame",label:Object(o.__)("Video Game","ultimate-addons-for-gutenberg")},{value:"WebApplication",label:Object(o.__)("Web Application","ultimate-addons-for-gutenberg")}]};switch(j){default:break;case"Book":ct=i.a.createElement(i.a.Fragment,null,i.a.createElement(h.TextControl,{label:Object(o.__)("ISBN","ultimate-addons-for-gutenberg"),value:et,onChange:function(e){return T({isbn:e})},help:Object(o.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),i.a.createElement(h.TextControl,{label:Object(o.__)("Book author name","ultimate-addons-for-gutenberg"),value:tt,onChange:function(e){return T({bookAuthorName:e})},help:Object(o.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}));break;case"Course":ct=i.a.createElement(i.a.Fragment,null,i.a.createElement(h.TextControl,{label:Object(o.__)("Provider","ultimate-addons-for-gutenberg"),value:nt,onChange:function(e){return T({provider:e})}}));break;case"SoftwareApplication":ct=i.a.createElement(i.a.Fragment,null,i.a.createElement(h.TextControl,{label:Object(o.__)("Application Category","ultimate-addons-for-gutenberg"),value:lt,onChange:function(e){return T({appCategory:e})}}),i.a.createElement(h.TextControl,{label:Object(o.__)("Operating System","ultimate-addons-for-gutenberg"),value:ot,onChange:function(e){return T({operatingSystem:e})}}));break;case"Movie":ct=i.a.createElement(i.a.Fragment,null,i.a.createElement(h.TextControl,{label:Object(o.__)("Director Name","ultimate-addons-for-gutenberg"),value:it,onChange:function(e){return T({directorname:e})}}),i.a.createElement("h2",null,Object(o.__)("Date of create")),i.a.createElement(h.DateTimePicker,{currentDate:rt,onChange:function(e){return T({datecreated:e})},is12Hour:!0}))}return i.a.createElement(r.Suspense,{fallback:Object(u.a)()},i.a.createElement(b.BlockControls,{key:"index"},i.a.createElement(b.AlignmentToolbar,{value:Ze,onChange:function(e){return T({overallAlignment:e})}})),i.a.createElement(b.InspectorControls,null,i.a.createElement(c.a,null,i.a.createElement(g.b,g.a.general,(D&&D.sizes&&(gt=D.sizes,mt=[],$.each(gt,(function(e){var t={value:e,label:e};mt.push(t)})),v=mt),i.a.createElement(h.PanelBody,{title:Object(o.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(f.a,{setAttributes:T,label:Object(o.__)("Review Title Tag","ultimate-addons-for-gutenberg"),data:{value:x,label:"headingTag"},options:[{value:"h1",label:Object(o.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(o.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(o.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(o.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(o.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(o.__)("H6","ultimate-addons-for-gutenberg")}]}),i.a.createElement(h.ToggleControl,{label:Object(o.__)("Enable Schema Support","ultimate-addons-for-gutenberg"),checked:S,onChange:function(){return T({enableSchema:!S})}}),i.a.createElement(h.ToggleControl,{label:Object(o.__)("Show Review Description","ultimate-addons-for-gutenberg"),checked:Xe,onChange:function(){return T({enableDescription:!Xe})},help:Object(o.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),i.a.createElement(h.ToggleControl,{label:Object(o.__)("Show Review Author","ultimate-addons-for-gutenberg"),checked:V,onChange:function(){return T({showAuthor:!V})},help:Object(o.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),i.a.createElement(h.ToggleControl,{label:Object(o.__)("Show Ratings","ultimate-addons-for-gutenberg"),checked:G,onChange:function(){return T({showFeature:!G})},help:Object(o.__)("Note: Add feature/section ratings separately.","ultimate-addons-for-gutenberg")}),i.a.createElement(h.ToggleControl,{label:Object(o.__)("Show Review Image","ultimate-addons-for-gutenberg"),checked:Ye,onChange:function(){return T({enableImage:!Ye})},help:Object(o.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),i.a.createElement("h2",null,Object(o.__)("Link")),i.a.createElement(h.TextControl,{value:B,onChange:function(e){return T({ctaLink:e})}}),i.a.createElement(h.ToggleControl,{label:Object(o.__)("Open in new window","ultimate-addons-for-gutenberg"),checked:I,onChange:function(){T({ctaTarget:!I})}}))),!0===Ye&&i.a.createElement(h.PanelBody,{title:Object(o.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{onSelectImage:function(e){e&&e.url&&e.type&&"image"===e.type?T({mainimage:e}):T({mainimage:null})},backgroundImage:D,onRemoveImage:function(){T({mainimage:""})}}),D&&"null"!==D&&"null"!==D.url&&""!==D.url&&i.a.createElement(h.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),options:v,value:N,onChange:function(e){return T({imgSize:e})}}))),function(){if(!0===S)return i.a.createElement(h.PanelBody,{title:Object(o.__)("Schema","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(h.SelectControl,{label:Object(o.__)("Item Type","ultimate-addons-for-gutenberg"),value:j,onChange:function(e){T({itemType:e}),"Movie"===j&&T({enableImage:!0}),"Course"===j&&T({enableDescription:!0}),st.hasOwnProperty(j)&&st[j].includes(E)||T({itemSubtype:"None"})},options:[{value:"Book",label:Object(o.__)("Book","ultimate-addons-for-gutenberg")},{value:"Course",label:Object(o.__)("Course","ultimate-addons-for-gutenberg")},{value:"Movie",label:Object(o.__)("Movie","ultimate-addons-for-gutenberg")},{value:"Product",label:Object(o.__)("Product","ultimate-addons-for-gutenberg")},{value:"SoftwareApplication",label:Object(o.__)("Software Application","ultimate-addons-for-gutenberg")}]}),st.hasOwnProperty(j)&&i.a.createElement(h.SelectControl,{label:Object(o.__)("Item Subtype","ultimate-addons-for-gutenberg"),options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")}].concat((t=st[j],function(e){if(Array.isArray(e))return p(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return p(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?p(e,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),value:E,onChange:function(e){return T({itemSubtype:e})}}),ct,i.a.createElement(h.TextControl,{label:Object(o.__)("Review Publisher","ultimate-addons-for-gutenberg"),value:at,onChange:function(e){return T({reviewPublisher:e})},help:Object(o.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),i.a.createElement("h2",null,Object(o.__)("Date Of Publish","ultimate-addons-for-gutenberg")),i.a.createElement(h.DateTimePicker,{className:"uagb-date-picker",currentDate:M,onChange:function(e){return T({datepublish:e})},is12Hour:!0}),["Product","SoftwareApplication"].includes(j)&&i.a.createElement(i.a.Fragment,null,["Product"].includes(j)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.TextControl,{label:Object(o.__)("Brand","ultimate-addons-for-gutenberg"),value:R,onChange:function(e){return T({brand:e})}}),i.a.createElement(h.TextControl,{label:Object(o.__)("SKU","ultimate-addons-for-gutenberg"),value:F,onChange:function(e){return T({sku:e})}}),i.a.createElement(h.TextControl,{label:Object(o.__)("Identifier","ultimate-addons-for-gutenberg"),value:H,onChange:function(e){return T({identifier:e})}}),i.a.createElement(h.SelectControl,{label:Object(o.__)("Identifier Type","ultimate-addons-for-gutenberg"),value:P,options:["nsn","mpn","gtin8","gtin12","gtin13","gtin14","gtin"].map((function(e){return{label:Object(o.__)(e.toUpperCase()),value:e}})),onChange:function(e){return T({identifierType:e})}})),["Product","SoftwareApplication"].includes(j)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.TextControl,{label:Object(o.__)("Offer Currency","ultimate-addons-for-gutenberg"),value:L,onChange:function(e){return T({offerCurrency:e})}})),"Offer"==A&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.TextControl,{label:Object(o.__)("Offer Price","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return T({offerPrice:e})},help:Object(o.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),i.a.createElement(h.SelectControl,{label:Object(o.__)("Offer Status"),value:w,options:[{value:"https://schema.org/Discontinued",label:Object(o.__)("Discontinued","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStock",label:Object(o.__)("In Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStoreOnly",label:Object(o.__)("In Store Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/LimitedAvailability",label:Object(o.__)("Limited Availability","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OnlineOnly",label:Object(o.__)("Online Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OutOfStock",label:Object(o.__)("Out Of Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreOrder",label:Object(o.__)("Pre Order","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreSale",label:Object(o.__)("Pre Sale","ultimate-addons-for-gutenberg")},{value:"https://schema.org/SoldOut",label:Object(o.__)("Sold Out","ultimate-addons-for-gutenberg")}],onChange:function(t){return e.setAttributes({offerStatus:t})}}),i.a.createElement("h2",null,Object(o.__)("Price Valid Until","ultimate-addons-for-gutenberg")),i.a.createElement(h.DateTimePicker,{className:"uagb-date-picker",currentDate:z,onChange:function(e){return T({offerExpiry:e})},is12Hour:!0}))));var t}()),i.a.createElement(g.b,g.a.style,i.a.createElement(h.PanelBody,{title:Object(o.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(d.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:J,onColorChange:function(e){return T({titleColor:e})}}),i.a.createElement(n.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:T,loadGoogleFonts:{value:re,label:"headLoadGoogleFonts"},fontFamily:{value:Q,label:"headFontFamily"},fontWeight:{value:q,label:"headFontWeight"},fontSubset:{value:X,label:"headFontSubset"},fontSizeType:{value:Y,label:"headFontSizeType"},fontSize:{value:Z,label:"headFontSize"},fontSizeMobile:{value:ee,label:"headFontSizeMobile"},fontSizeTablet:{value:te,label:"headFontSizeTablet"},lineHeightType:{value:ae,label:"headLineHeightType"},lineHeight:{value:ne,label:"headLineHeight"},lineHeightMobile:{value:le,label:"headLineHeightMobile"},lineHeightTablet:{value:oe,label:"headLineHeightTablet"}})),Xe&&i.a.createElement(h.PanelBody,{title:Object(o.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},!0===Xe&&i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:W,onColorChange:function(e){return T({descColor:e})}}),i.a.createElement(n.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:T,loadGoogleFonts:{value:pe,label:"subHeadLoadGoogleFonts"},fontFamily:{value:ie,label:"subHeadFontFamily"},fontWeight:{value:ue,label:"subHeadFontWeight"},fontSubset:{value:be,label:"subHeadFontSubset"},fontSizeType:{value:ce,label:"subHeadFontSizeType"},fontSize:{value:de,label:"subHeadFontSize"},fontSizeMobile:{value:ge,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:me,label:"subHeadFontSizeTablet"},lineHeightType:{value:fe,label:"subHeadLineHeightType"},lineHeight:{value:se,label:"subHeadLineHeight"},lineHeightMobile:{value:he,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:_e,label:"subHeadLineHeightTablet"}}))),!0===V&&i.a.createElement(h.PanelBody,{title:Object(o.__)("Author","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Je,onColorChange:function(e){return T({authorColor:e})}}))),!0===G&&i.a.createElement(h.PanelBody,{title:Object(o.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:K,onColorChange:function(e){return T({contentColor:e})}}))),i.a.createElement(h.PanelBody,{title:Object(o.__)("Summary","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ke,onColorChange:function(e){return T({summaryColor:e})}}),i.a.createElement(n.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:T,loadGoogleFonts:{value:ve,label:"contentLoadGoogleFonts"},fontFamily:{value:Oe,label:"contentFontFamily"},fontWeight:{value:ye,label:"contentFontWeight"},fontSubset:{value:Ce,label:"contentFontSubset"},fontSizeType:{value:Te,label:"contentFontSizeType"},fontSize:{value:je,label:"contentFontSize"},fontSizeMobile:{value:Fe,label:"contentFontSizeMobile"},fontSizeTablet:{value:Ee,label:"contentFontSizeTablet"},lineHeightType:{value:Se,label:"contentLineHeightType"},lineHeight:{value:He,label:"contentLineHeight"},lineHeightMobile:{value:Ae,label:"contentLineHeightMobile"},lineHeightTablet:{value:Pe,label:"contentLineHeightTablet"}})),i.a.createElement(h.PanelBody,{title:Object(o.__)("Star","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{label:Object(o.__)("Active Color","ultimate-addons-for-gutenberg"),colorValue:U,onColorChange:function(e){return T({starColor:e})}}),i.a.createElement(d.a,{label:Object(o.__)("Inactive Color","ultimate-addons-for-gutenberg"),colorValue:Qe,onColorChange:function(e){return T({starActiveColor:e})}}),i.a.createElement(d.a,{label:Object(o.__)("Outline Color","ultimate-addons-for-gutenberg"),colorValue:qe,onColorChange:function(e){return T({starOutlineColor:e})}})),i.a.createElement(h.PanelBody,{title:Object(o.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(s.a,_({},e,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Le,label:"topPadding"},valueRight:{value:ke,label:"rightPadding"},valueBottom:{value:we,label:"bottomPadding"},valueLeft:{value:ze,label:"leftPadding"},valueTopTablet:{value:xe,label:"paddingTopTablet"},valueRightTablet:{value:Ne,label:"paddingRightTablet"},valueBottomTablet:{value:De,label:"paddingBottomTablet"},valueLeftTablet:{value:Ge,label:"paddingLeftTablet"},valueTopMobile:{value:Me,label:"paddingTopMobile"},valueRightMobile:{value:Ie,label:"paddingRightMobile"},valueBottomMobile:{value:Be,label:"paddingBottomMobile"},valueLeftMobile:{value:Re,label:"paddingLeftMobile"},unit:{value:Ue,label:"paddingUnit"},mUnit:{value:We,label:"mobilePaddingUnit"},tUnit:{value:$e,label:"tabletPaddingUnit"},attributes:C,setAttributes:T,link:{value:Ve,label:"spacingLink"}})))),i.a.createElement(g.b,g.a.advance))),a,O,t)};t.default=i.a.memo(y)}}]);