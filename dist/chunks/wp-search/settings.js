(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[104],{577:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(6),o=a(71),r=a(22),i=a(127),u=a(59),b=a(1),c=a.n(b),s=a(3),g=a(5),m=function(e){var t,a,b=e=e.parentProps,m=b.attributes,d=b.setAttributes,p=b.deviceType,_=m.layout,f=m.placeholder,C=m.inputSize,h=m.textColor,E=m.inputBgColor,v=m.boxShadowColor,y=m.boxShadowHOffset,S=m.boxShadowVOffset,x=m.boxShadowBlur,T=m.boxShadowSpread,O=m.boxShadowPosition,z=m.borderStyle,N=m.borderWidth,F=m.borderRadius,j=m.borderColor,P=m.buttonBgColor,k=m.buttonBgHoverColor,H=m.buttonIconColor,w=m.buttonIconHoverColor,B=m.buttonWidth,R=m.buttonIconSize,M=m.iconColor,L=m.iconSize,D=m.inputloadGoogleFonts,I=m.inputFontFamily,W=m.inputFontWeight,G=m.inputFontSubset,A=m.inputFontSize,V=m.inputFontSizeType,J=m.inputFontSizeTablet,q=m.inputFontSizeMobile,K=m.inputLineHeight,Q=m.inputLineHeightType,U=m.inputLineHeightTablet,X=m.inputLineHeightMobile,Y=m.inputPaddingTypeDesktop,Z=m.vinputPaddingMobile,$=m.vinputPaddingTablet,ee=m.vinputPaddingDesktop,te=m.hinputPaddingMobile,ae=m.hinputPaddingTablet,ne=m.hinputPaddingDesktop,le=m.buttonType,oe=m.buttonText,re=m.buttonloadGoogleFonts,ie=m.buttonFontFamily,ue=m.buttonFontWeight,be=m.buttonFontSubset,ce=m.buttonFontSize,se=m.buttonFontSizeType,ge=m.buttonFontSizeTablet,me=m.buttonFontSizeMobile,de=m.buttonLineHeight,pe=m.buttonLineHeightType,_e=m.buttonLineHeightTablet,fe=m.buttonLineHeightMobile,Ce=m.buttonTextColor,he=m.buttonTextHoverColor,Ee=m.inputSizeType;if(1==D){var ve={google:{families:[I+(W?":"+W:"")]}};t=c.a.createElement(u.a,{config:ve})}if(1==re){var ye={google:{families:[ie+(ue?":"+ue:"")]}};a=c.a.createElement(u.a,{config:ye})}return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.InspectorControls,null,c.a.createElement(s.PanelBody,{title:Object(n.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},c.a.createElement(s.SelectControl,{label:Object(n.__)("Layout","ultimate-addons-for-gutenberg"),value:_,options:[{value:"input-button",label:Object(n.__)("Classic","ultimate-addons-for-gutenberg")},{value:"input",label:Object(n.__)("Minimal","ultimate-addons-for-gutenberg")}],onChange:function(e){return d({layout:e})}}),c.a.createElement(c.a.Fragment,null,c.a.createElement(s.TextControl,{label:Object(n.__)("Placeholder","ultimate-addons-for-gutenberg"),value:f,onChange:function(e){return d({placeholder:e})}}),c.a.createElement(s.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type","ultimate-addons-for-gutenberg")},c.a.createElement(s.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Ee,"aria-pressed":"px"===Ee,onClick:function(){return d({inputSizeType:"px"})}},"px"),c.a.createElement(s.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Ee,"aria-pressed":"%"===Ee,onClick:function(){return d({inputSizeType:"%"})}},"%")),c.a.createElement(s.RangeControl,{label:Object(n.__)("Input Width","ultimate-addons-for-gutenberg"),value:C,onChange:function(e){return d({inputSize:e})},min:0,max:"px"===Ee?500:100}))),c.a.createElement(s.PanelBody,{title:Object(n.__)("Input Box","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},c.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:h}}))),c.a.createElement(g.ColorPalette,{value:h,onChange:function(e){return d({textColor:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:E}}))),c.a.createElement(g.ColorPalette,{value:E,onChange:function(e){return d({inputBgColor:e})},allowReset:!0}),c.a.createElement("hr",null),c.a.createElement("h2",null,Object(n.__)("Border","ultimate-addons-for-gutenberg")),c.a.createElement(s.SelectControl,{label:Object(n.__)("Style","ultimate-addons-for-gutenberg"),value:z,options:[{value:"none",label:Object(n.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(n.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(n.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(n.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(n.__)("Double","ultimate-addons-for-gutenberg")}],onChange:function(e){d({borderStyle:e})}}),"none"!==z&&c.a.createElement(c.a.Fragment,null,c.a.createElement(s.RangeControl,{label:Object(n.__)("Thickness (px)","ultimate-addons-for-gutenberg"),value:N,onChange:function(e){d({borderWidth:e})},min:0,max:20}),c.a.createElement(s.RangeControl,{label:Object(n.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),value:F,onChange:function(e){d({borderRadius:e})},min:0,max:50}),c.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:j}}))),c.a.createElement(g.ColorPalette,{value:j,onChange:function(e){return d({borderColor:e})},allowReset:!0})),c.a.createElement("hr",null),c.a.createElement(o.a,null),"Desktop"===p&&c.a.createElement(c.a.Fragment,null,c.a.createElement(s.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type","ultimate-addons-for-gutenberg")},c.a.createElement(s.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Y,"aria-pressed":"px"===Y,onClick:function(){return d({inputPaddingTypeDesktop:"px"})}},"px"),c.a.createElement(s.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Y,"aria-pressed":"%"===Y,onClick:function(){return d({inputPaddingTypeDesktop:"%"})}},"%")),c.a.createElement("h2",null,Object(n.__)("Padding","ultimate-addons-for-gutenberg")),c.a.createElement(s.RangeControl,{label:l.a.vertical_spacing,className:"uagb-margin-control",value:ee,onChange:function(e){return d({vinputPaddingDesktop:e})},min:0,max:100,allowReset:!0}),c.a.createElement(s.RangeControl,{label:l.a.horizontal_spacing,className:"uagb-margin-control",value:ne,onChange:function(e){return d({hinputPaddingDesktop:e})},min:0,max:100,allowReset:!0})),"Tablet"===p&&c.a.createElement(c.a.Fragment,null,c.a.createElement(s.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type","ultimate-addons-for-gutenberg")},c.a.createElement(s.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Y,"aria-pressed":"px"===Y,onClick:function(){return d({inputPaddingTypeDesktop:"px"})}},"px"),c.a.createElement(s.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Y,"aria-pressed":"%"===Y,onClick:function(){return d({inputPaddingTypeDesktop:"%"})}},"%")),c.a.createElement("h2",null,Object(n.__)("Padding","ultimate-addons-for-gutenberg")),c.a.createElement(s.RangeControl,{label:l.a.vertical_spacing,className:"uagb-margin-control",value:$,onChange:function(e){return d({vinputPaddingTablet:e})},min:0,max:100,allowReset:!0}),c.a.createElement(s.RangeControl,{label:l.a.horizontal_spacing,className:"uagb-margin-control",value:ae,onChange:function(e){return d({hinputPaddingTablet:e})},min:0,max:100,allowReset:!0})),"Mobile"===p&&c.a.createElement(c.a.Fragment,null,c.a.createElement(s.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(n.__)("Size Type","ultimate-addons-for-gutenberg")},c.a.createElement(s.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Y,"aria-pressed":"px"===Y,onClick:function(){return d({inputPaddingTypeDesktop:"px"})}},"px"),c.a.createElement(s.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Y,"aria-pressed":"%"===Y,onClick:function(){return d({inputPaddingTypeDesktop:"%"})}},"%")),c.a.createElement("h2",null,Object(n.__)("Padding","ultimate-addons-for-gutenberg")),c.a.createElement(s.RangeControl,{label:l.a.vertical_spacing,className:"uagb-margin-control",value:Z,onChange:function(e){return d({vinputPaddingMobile:e})},min:0,max:100,allowReset:!0}),c.a.createElement(s.RangeControl,{label:l.a.horizontal_spacing,className:"uagb-margin-control",value:te,onChange:function(e){return d({hinputPaddingMobile:e})},min:0,max:100,allowReset:!0})),c.a.createElement("hr",null),c.a.createElement(r.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:m,setAttributes:d,loadGoogleFonts:{value:D,label:"inputloadGoogleFonts"},fontFamily:{value:I,label:"inputFontFamily"},fontWeight:{value:W,label:"inputFontWeight"},fontSubset:{value:G,label:"inputFontSubset"},fontSizeType:{value:V,label:"inputFontSizeType"},fontSize:{value:A,label:"inputFontSize"},fontSizeMobile:{value:q,label:"inputFontSizeMobile"},fontSizeTablet:{value:J,label:"inputFontSizeTablet"},lineHeightType:{value:Q,label:"inputLineHeightType"},lineHeight:{value:K,label:"inputLineHeight"},lineHeightMobile:{value:X,label:"inputLineHeightMobile"},lineHeightTablet:{value:U,label:"inputLineHeightTablet"}}),c.a.createElement(i.a,{setAttributes:d,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:v,label:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:y,label:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:S,label:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:x,label:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:T,label:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:O,label:Object(n.__)("Position","ultimate-addons-for-gutenberg")}})),"input-button"===_?c.a.createElement(s.PanelBody,{title:Object(n.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},c.a.createElement(c.a.Fragment,null,c.a.createElement(s.SelectControl,{label:Object(n.__)("Type","ultimate-addons-for-gutenberg"),value:le,options:[{value:"icon",label:Object(n.__)("Icon","ultimate-addons-for-gutenberg")},{value:"text",label:Object(n.__)("Text","ultimate-addons-for-gutenberg")}],onChange:function(e){d({buttonType:e})}}),"text"===le&&c.a.createElement(c.a.Fragment,null,c.a.createElement(s.TextControl,{label:"Text",value:oe,onChange:function(e){d({buttonText:e})}}),c.a.createElement(r.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:m,setAttributes:d,loadGoogleFonts:{value:re,label:"buttonloadGoogleFonts"},fontFamily:{value:ie,label:"buttonFontFamily"},fontWeight:{value:ue,label:"buttonFontWeight"},fontSubset:{value:be,label:"buttonFontSubset"},fontSizeType:{value:se,label:"buttonFontSizeType"},fontSize:{value:ce,label:"buttonFontSize"},fontSizeMobile:{value:me,label:"buttonFontSizeMobile"},fontSizeTablet:{value:ge,label:"buttonFontSizeTablet"},lineHeightType:{value:pe,label:"buttonLineHeightType"},lineHeight:{value:de,label:"buttonLineHeight"},lineHeightMobile:{value:fe,label:"buttonLineHeightMobile"},lineHeightTablet:{value:_e,label:"buttonLineHeightTablet"}})),c.a.createElement(s.RangeControl,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),value:B,onChange:function(e){d({buttonWidth:e})},min:0,max:500}),c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:P}}))),c.a.createElement(g.ColorPalette,{value:P,onChange:function(e){return d({buttonBgColor:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Background Hover Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:k}}))),c.a.createElement(g.ColorPalette,{value:k,onChange:function(e){return d({buttonBgHoverColor:e})},allowReset:!0}),"text"===le&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ce}}))),c.a.createElement(g.ColorPalette,{value:Ce,onChange:function(e){return d({buttonTextColor:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Text Hover Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:he}}))),c.a.createElement(g.ColorPalette,{value:he,onChange:function(e){return d({buttonTextHoverColor:e})},allowReset:!0}))),"icon"===le&&c.a.createElement(c.a.Fragment,null,c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement("h2",null,Object(n.__)("Icon","ultimate-addons-for-gutenberg")),c.a.createElement(s.RangeControl,{label:Object(n.__)("Size","ultimate-addons-for-gutenberg"),value:R,onChange:function(e){d({buttonIconSize:e})},min:0,max:500}),c.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:H}}))),c.a.createElement(g.ColorPalette,{value:H,onChange:function(e){return d({buttonIconColor:e})},allowReset:!0}),c.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Hover Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:w}}))),c.a.createElement(g.ColorPalette,{value:w,onChange:function(e){return d({buttonIconHoverColor:e})},allowReset:!0})))):"","input"===_?c.a.createElement(s.PanelBody,{title:Object(n.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},c.a.createElement(c.a.Fragment,null,c.a.createElement(s.RangeControl,{label:Object(n.__)("Size","ultimate-addons-for-gutenberg"),value:L,onChange:function(e){d({iconSize:e})},min:0,max:500}),c.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:M}}))),c.a.createElement(g.ColorPalette,{value:M,onChange:function(e){return d({iconColor:e})},allowReset:!0}))):""),t,a)};t.default=c.a.memo(m)}}]);