(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[85],{538:function(e,t,a){"use strict";a.r(t),a.d(t,"removeFromArray",(function(){return f}));var n=a(6),l=a(18),o=a(50),r=a(2),i=a(1),u=a.n(i),c=a(10),b=a(5),g=a(17),d=a(3);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}$=jQuery;var m=[{value:"thumbnail",label:Object(r.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(r.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(r.__)("Large","ultimate-addons-for-gutenberg")}],f=function(e,t){return e.filter((function(e){return Array.isArray(t)?!t.includes(e):e!==t}))},h=function(e){var t,a,f,h=e=e.parentProps,_=h.attributes,p=h.setAttributes,v=_.enableSchema,O=_.itemType,C=_.itemSubtype,S=_.sku,y=_.identifier,j=_.identifierType,E=_.offerType,T=_.offerCurrency,F=_.offerStatus,H=_.offerPrice,w=_.offerExpiry,z=_.datepublish,A=_.ctaLink,P=_.ctaTarget,k=_.brand,L=_.headingTag,M=_.mainimage,N=_.imgSize,I=_.showFeature,x=_.showAuthor,D=_.starColor,R=_.descColor,V=_.titleColor,B=_.contentColor,G=_.headFontFamily,W=_.headFontWeight,U=_.headFontSubset,J=_.headFontSizeType,K=_.headFontSize,Q=_.headFontSizeMobile,q=_.headFontSizeTablet,X=_.headLineHeightType,Y=_.headLineHeight,Z=_.headLineHeightMobile,ee=_.headLineHeightTablet,te=_.headLoadGoogleFonts,ae=_.subHeadFontFamily,ne=_.subHeadFontWeight,le=_.subHeadFontSubset,oe=_.subHeadFontSize,re=_.subHeadFontSizeType,ie=_.subHeadFontSizeMobile,ue=_.subHeadFontSizeTablet,ce=_.subHeadLineHeight,be=_.subHeadLineHeightType,ge=_.subHeadLineHeightMobile,de=_.subHeadLineHeightTablet,se=_.subHeadLoadGoogleFonts,me=_.contentLoadGoogleFonts,fe=_.contentFontFamily,he=_.contentFontWeight,_e=_.contentFontSubset,pe=_.contentFontSizeType,ve=_.contentLineHeightType,Oe=_.contentFontSize,Ce=_.contentFontSizeTablet,Se=_.contentFontSizeMobile,ye=_.contentLineHeight,je=_.contentLineHeightTablet,Ee=_.contentLineHeightMobile,Te=_.contentVrPadding,Fe=_.contentHrPadding,He=_.authorColor,we=_.summaryColor,ze=_.starActiveColor,Ae=_.starOutlineColor,Pe=_.enableDescription,ke=_.enableImage,Le=_.overallAlignment,Me=_.isbn,Ne=_.bookAuthorName,Ie=_.reviewPublisher,xe=_.provider,De=_.appCategory,Re=_.operatingSystem,Ve=_.datecreated,Be=_.directorname;if(1==te){var Ge={google:{families:[G+(W?":"+W:"")]}};a=u.a.createElement(o.a,{config:Ge})}if(1==se){var We={google:{families:[ae+(ne?":"+ne:"")]}};f=u.a.createElement(o.a,{config:We})}if(1==me){var Ue={google:{families:[fe+(he?":"+he:"")]}};t=u.a.createElement(o.a,{config:Ue})}var $e,Je,Ke,Qe={Book:[{value:"Audiobook",label:Object(r.__)("Audio book","ultimate-addons-for-gutenberg")}],Product:[{value:"IndividualProduct",label:Object(r.__)("Individual Product","ultimate-addons-for-gutenberg")},{value:"ProductCollection",label:Object(r.__)("Product Collection","ultimate-addons-for-gutenberg")},{value:"ProductGroup",label:Object(r.__)("Product Group","ultimate-addons-for-gutenberg")},{value:"ProductModel",label:Object(r.__)("Product Model","ultimate-addons-for-gutenberg")},{value:"SomeProducts",label:Object(r.__)("Some Products","ultimate-addons-for-gutenberg")},{value:"Vehicle",label:Object(r.__)("Vehicle","ultimate-addons-for-gutenberg")}],SoftwareApplication:[{value:"MobileApplication",label:Object(r.__)("Mobile Application","ultimate-addons-for-gutenberg")},{value:"VideoGame",label:Object(r.__)("Video Game","ultimate-addons-for-gutenberg")},{value:"WebApplication",label:Object(r.__)("Web Application","ultimate-addons-for-gutenberg")}]};switch(O){default:break;case"Book":$e=u.a.createElement(u.a.Fragment,null,u.a.createElement(d.TextControl,{label:Object(r.__)("ISBN","ultimate-addons-for-gutenberg"),value:Me,onChange:function(e){return p({isbn:e})},help:Object(r.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),u.a.createElement(d.TextControl,{label:Object(r.__)("Book author name","ultimate-addons-for-gutenberg"),value:Ne,onChange:function(e){return p({bookAuthorName:e})},help:Object(r.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}));break;case"Course":$e=u.a.createElement(u.a.Fragment,null,u.a.createElement(d.TextControl,{label:Object(r.__)("Provider","ultimate-addons-for-gutenberg"),value:xe,onChange:function(e){return p({provider:e})}}));break;case"SoftwareApplication":$e=u.a.createElement(u.a.Fragment,null,u.a.createElement(d.TextControl,{label:Object(r.__)("Application Category","ultimate-addons-for-gutenberg"),value:De,onChange:function(e){return p({appCategory:e})}}),u.a.createElement(d.TextControl,{label:Object(r.__)("Operating System","ultimate-addons-for-gutenberg"),value:Re,onChange:function(e){return p({operatingSystem:e})}}));break;case"Movie":$e=u.a.createElement(u.a.Fragment,null,u.a.createElement(d.TextControl,{label:Object(r.__)("Director Name","ultimate-addons-for-gutenberg"),value:Be,onChange:function(e){return p({directorname:e})}}),u.a.createElement("h2",null,Object(r.__)("Date of create")),u.a.createElement(d.DateTimePicker,{currentDate:Ve,onChange:function(e){return p({datecreated:e})},is12Hour:!0}))}return u.a.createElement(i.Suspense,{fallback:Object(c.a)()},u.a.createElement(b.BlockControls,{key:"index"},u.a.createElement(b.AlignmentToolbar,{value:Le,onChange:function(e){return p({overallAlignment:e})}})),u.a.createElement(b.InspectorControls,null,(M&&M.sizes&&(Je=M.sizes,Ke=[],$.each(Je,(function(e){var t={value:e,label:e};Ke.push(t)})),m=Ke),u.a.createElement(d.PanelBody,{title:Object(r.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},u.a.createElement("h2",null,Object(r.__)("Review Title","ultimate-addons-for-gutenberg")),u.a.createElement(d.SelectControl,{label:Object(r.__)("Tag","ultimate-addons-for-gutenberg"),value:L,onChange:function(e){return p({headingTag:e})},options:[{value:"h1",label:Object(r.__)("H1")},{value:"h2",label:Object(r.__)("H2")},{value:"h3",label:Object(r.__)("H3")},{value:"h4",label:Object(r.__)("H4")},{value:"h5",label:Object(r.__)("H5")},{value:"h6",label:Object(r.__)("H6")}]}),u.a.createElement("h2",null,Object(r.__)("Link")),u.a.createElement(d.TextControl,{value:A,onChange:function(e){return p({ctaLink:e})}}),u.a.createElement(d.ToggleControl,{label:Object(r.__)("Open in new window","ultimate-addons-for-gutenberg"),checked:P,onChange:function(){p({ctaTarget:!P})}}),u.a.createElement(d.ToggleControl,{label:Object(r.__)("Show review description","ultimate-addons-for-gutenberg"),checked:Pe,onChange:function(){return p({enableDescription:!Pe})},help:Object(r.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),u.a.createElement(d.ToggleControl,{label:Object(r.__)("Show review author","ultimate-addons-for-gutenberg"),checked:x,onChange:function(){return p({showAuthor:!x})},help:Object(r.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),u.a.createElement(d.ToggleControl,{label:Object(r.__)("Show review image","ultimate-addons-for-gutenberg"),checked:ke,onChange:function(){return p({enableImage:!ke})},help:Object(r.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),!0===ke&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,Object(r.__)("Image")),u.a.createElement("div",{className:"uagb-bg-image"},u.a.createElement(b.MediaUpload,{title:Object(r.__)("Select Background Image","ultimate-addons-for-gutenberg"),onSelect:function(e){return p({mainimage:e})},allowedTypes:["image"],value:M,render:function(e){var t=e.open;return u.a.createElement(d.Button,{isSecondary:!0,onClick:t},M.url?Object(r.__)("Replace image","ultimate-addons-for-gutenberg"):Object(r.__)("Select Image","ultimate-addons-for-gutenberg"))}}),M.url&&u.a.createElement(d.Button,{className:"uagb-rm-btn",onClick:function(){return p({mainimage:null})},isLink:!0,isDestructive:!0},Object(r.__)("Remove Image","ultimate-addons-for-gutenberg"))),M.url&&u.a.createElement(d.SelectControl,{label:Object(r.__)("Size","ultimate-addons-for-gutenberg"),options:m,value:N,onChange:function(e){return p({imgSize:e})}})),u.a.createElement(d.ToggleControl,{label:Object(r.__)("Show ratings","ultimate-addons-for-gutenberg"),checked:I,onChange:function(){return p({showFeature:!I})},help:Object(r.__)("Note: Add feature/section ratings separately.","ultimate-addons-for-gutenberg")}),u.a.createElement(d.ToggleControl,{label:Object(r.__)("Enable schema support","ultimate-addons-for-gutenberg"),checked:v,onChange:function(){return p({enableSchema:!v})}}))),function(){if(!0===v)return u.a.createElement(d.PanelBody,{title:Object(r.__)("Schema","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(d.SelectControl,{label:Object(r.__)("Item type","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){p({itemType:e}),"Movie"===O&&p({enableImage:!0}),"Course"===O&&p({enableDescription:!0}),Qe.hasOwnProperty(O)&&Qe[O].includes(C)||p({itemSubtype:"None"})},options:[{value:"Book",label:Object(r.__)("Book","ultimate-addons-for-gutenberg")},{value:"Course",label:Object(r.__)("Course","ultimate-addons-for-gutenberg")},{value:"Movie",label:Object(r.__)("Movie","ultimate-addons-for-gutenberg")},{value:"Product",label:Object(r.__)("Product","ultimate-addons-for-gutenberg")},{value:"SoftwareApplication",label:Object(r.__)("Software Application","ultimate-addons-for-gutenberg")}]}),Qe.hasOwnProperty(O)&&u.a.createElement(d.SelectControl,{label:Object(r.__)("Item subtype","ultimate-addons-for-gutenberg"),options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")}].concat((t=Qe[O],function(e){if(Array.isArray(e))return s(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return s(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),value:C,onChange:function(e){return p({itemSubtype:e})}}),u.a.createElement("hr",{className:"uagb-editor__separator"}),$e,u.a.createElement(d.TextControl,{label:Object(r.__)("Review publisher","ultimate-addons-for-gutenberg"),value:Ie,onChange:function(e){return p({reviewPublisher:e})},help:Object(r.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),u.a.createElement("h2",null,Object(r.__)("Date of publish","ultimate-addons-for-gutenberg")),u.a.createElement(d.DateTimePicker,{currentDate:z,onChange:function(e){return p({datepublish:e})},is12Hour:!0}),["Product","SoftwareApplication"].includes(O)&&u.a.createElement(u.a.Fragment,null,["Product"].includes(O)&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.TextControl,{label:Object(r.__)("Brand","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return p({brand:e})}}),u.a.createElement(d.TextControl,{label:Object(r.__)("SKU","ultimate-addons-for-gutenberg"),value:S,onChange:function(e){return p({sku:e})}}),u.a.createElement(d.TextControl,{label:Object(r.__)("Identifier","ultimate-addons-for-gutenberg"),value:y,onChange:function(e){return p({identifier:e})}}),u.a.createElement(d.SelectControl,{label:Object(r.__)("Identifier type","ultimate-addons-for-gutenberg"),value:j,options:["nsn","mpn","gtin8","gtin12","gtin13","gtin14","gtin"].map((function(e){return{label:Object(r.__)(e.toUpperCase()),value:e}})),onChange:function(e){return p({identifierType:e})}})),["Product","SoftwareApplication"].includes(O)&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.TextControl,{label:Object(r.__)("Offer Currency","ultimate-addons-for-gutenberg"),value:T,onChange:function(e){return p({offerCurrency:e})}})),"Offer"==E&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.TextControl,{label:Object(r.__)("Offer Price","ultimate-addons-for-gutenberg"),value:H,onChange:function(e){return p({offerPrice:e})},help:Object(r.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),u.a.createElement(d.SelectControl,{label:Object(r.__)("Offer Status"),value:F,options:[{value:"https://schema.org/Discontinued",label:Object(r.__)("Discontinued","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStock",label:Object(r.__)("In Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStoreOnly",label:Object(r.__)("In Store Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/LimitedAvailability",label:Object(r.__)("Limited Availability","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OnlineOnly",label:Object(r.__)("Online Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OutOfStock",label:Object(r.__)("Out Of Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreOrder",label:Object(r.__)("Pre Order","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreSale",label:Object(r.__)("Pre Sale","ultimate-addons-for-gutenberg")},{value:"https://schema.org/SoldOut",label:Object(r.__)("Sold Out","ultimate-addons-for-gutenberg")}],onChange:function(t){return e.setAttributes({offerStatus:t})}}),u.a.createElement("h2",null,Object(r.__)("Price Valid Until","ultimate-addons-for-gutenberg")),u.a.createElement(d.DateTimePicker,{currentDate:w,onChange:function(e){return p({offerExpiry:e})},is12Hour:!0}))));var t}(),u.a.createElement(d.PanelBody,{title:Object(r.__)("Style","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(l.a,{label:Object(r.__)("Title Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:p,loadGoogleFonts:{value:te,label:"headLoadGoogleFonts"},fontFamily:{value:G,label:"headFontFamily"},fontWeight:{value:W,label:"headFontWeight"},fontSubset:{value:U,label:"headFontSubset"},fontSizeType:{value:J,label:"headFontSizeType"},fontSize:{value:K,label:"headFontSize"},fontSizeMobile:{value:Q,label:"headFontSizeMobile"},fontSizeTablet:{value:q,label:"headFontSizeTablet"},lineHeightType:{value:X,label:"headLineHeightType"},lineHeight:{value:Y,label:"headLineHeight"},lineHeightMobile:{value:Z,label:"headLineHeightMobile"},lineHeightTablet:{value:ee,label:"headLineHeightTablet"}}),u.a.createElement(g.a,{label:Object(r.__)("Title Color","ultimate-addons-for-gutenberg"),colorValue:V,onColorChange:function(e){return p({titleColor:e})}}),!0===Pe&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(l.a,{label:Object(r.__)("Description Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:p,loadGoogleFonts:{value:se,label:"subHeadLoadGoogleFonts"},fontFamily:{value:ae,label:"subHeadFontFamily"},fontWeight:{value:ne,label:"subHeadFontWeight"},fontSubset:{value:le,label:"subHeadFontSubset"},fontSizeType:{value:re,label:"subHeadFontSizeType"},fontSize:{value:oe,label:"subHeadFontSize"},fontSizeMobile:{value:ie,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ue,label:"subHeadFontSizeTablet"},lineHeightType:{value:be,label:"subHeadLineHeightType"},lineHeight:{value:ce,label:"subHeadLineHeight"},lineHeightMobile:{value:ge,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:de,label:"subHeadLineHeightTablet"}}),u.a.createElement(g.a,{label:Object(r.__)("Description Color","ultimate-addons-for-gutenberg"),colorValue:R,onColorChange:function(e){return p({descColor:e})}})),!0===x&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(g.a,{label:Object(r.__)("Author Color","ultimate-addons-for-gutenberg"),colorValue:He,onColorChange:function(e){return p({authorColor:e})}})),!0===I&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(g.a,{label:Object(r.__)("Content Color","ultimate-addons-for-gutenberg"),colorValue:B,onColorChange:function(e){return p({contentColor:e})}})),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(l.a,{label:Object(r.__)("Summary Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:p,loadGoogleFonts:{value:me,label:"contentLoadGoogleFonts"},fontFamily:{value:fe,label:"contentFontFamily"},fontWeight:{value:he,label:"contentFontWeight"},fontSubset:{value:_e,label:"contentFontSubset"},fontSizeType:{value:pe,label:"contentFontSizeType"},fontSize:{value:Oe,label:"contentFontSize"},fontSizeMobile:{value:Se,label:"contentFontSizeMobile"},fontSizeTablet:{value:Ce,label:"contentFontSizeTablet"},lineHeightType:{value:ve,label:"contentLineHeightType"},lineHeight:{value:ye,label:"contentLineHeight"},lineHeightMobile:{value:Ee,label:"contentLineHeightMobile"},lineHeightTablet:{value:je,label:"contentLineHeightTablet"}}),u.a.createElement(g.a,{label:Object(r.__)("Summary Color","ultimate-addons-for-gutenberg"),colorValue:we,onColorChange:function(e){return p({summaryColor:e})}}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(g.a,{label:Object(r.__)("Active Star Color","ultimate-addons-for-gutenberg"),colorValue:D,onColorChange:function(e){return p({starColor:e})}}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(g.a,{label:Object(r.__)("Inactive Star Color","ultimate-addons-for-gutenberg"),colorValue:ze,onColorChange:function(e){return p({starActiveColor:e})}}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(g.a,{label:Object(r.__)("Star Outline Color","ultimate-addons-for-gutenberg"),colorValue:Ae,onColorChange:function(e){return p({starOutlineColor:e})}}),u.a.createElement("h2",null,Object(r.__)("Overall Padding (px)","ultimate-addons-for-gutenberg")),u.a.createElement(d.RangeControl,{label:n.a.vertical_spacing,className:"uagb-margin-control",value:Te,onChange:function(e){return p({contentVrPadding:e})},min:0,max:50,allowReset:!0}),u.a.createElement(d.RangeControl,{label:n.a.horizontal_spacing,className:"uagb-margin-control",value:Fe,onChange:function(e){return p({contentHrPadding:e})},min:0,max:50,allowReset:!0}))),a,f,t)};t.default=u.a.memo(h)}}]);