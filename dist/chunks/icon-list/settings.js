(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[61],{527:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),o=a(11),i=a(74),r=a(23),b=a(2),u=a(10),s=a(5),g=a(52),c=a(20),d=a(13),m=a(53),f=a(18),_=a(6);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var h=function(e){var t,a=e=e.parentProps,h=a.attributes,O=a.setAttributes,v=a.clientId,j=h.align,y=h.gap,z=h.inner_gap,E=h.stack,T=h.icon_layout,S=h.iconPosition,w=h.size,k=h.sizeType,H=h.sizeMobile,x=h.sizeTablet,A=h.hideLabel,B=h.borderRadius,M=h.bgSize,C=h.border,I=h.fontSize,N=h.fontSizeType,P=h.fontSizeMobile,F=h.fontSizeTablet,L=h.fontFamily,G=h.fontWeight,U=h.fontSubset,V=h.lineHeight,R=h.lineHeightType,W=h.lineHeightMobile,J=h.lineHeightTablet,q=h.loadGoogleFonts;if(!0===q){var D={google:{families:[L+(G?":"+G:"")]}};t=n.a.createElement(i.a,{config:D})}return n.a.createElement(l.Suspense,{fallback:Object(o.a)()},n.a.createElement(s.BlockControls,null,n.a.createElement(s.BlockAlignmentToolbar,{value:j,onChange:function(e){O({align:e})},controls:["left","center","right"]})),n.a.createElement(s.InspectorControls,null,n.a.createElement(g.a,null,n.a.createElement(c.b,c.a.general,n.a.createElement(_.PanelBody,{initialOpen:!0},n.a.createElement(f.a,{setAttributes:O,label:Object(b.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:T,label:"icon_layout"},className:"uagb-multi-button-alignment-control",options:[{value:"horizontal",label:Object(b.__)("Horizontal","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(b.__)("Vertical","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Vertical","ultimate-addons-for-gutenberg")}],showIcons:!1}),"horizontal"===T&&n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,{setAttributes:O,label:Object(b.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:E,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(b.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(b.__)("Tablet","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(b.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(b.__)("Note: Choose on what breakpoint the Icons will stack.","ultimate-addons-for-gutenberg")})),!A&&n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,{setAttributes:O,label:Object(b.__)("Icon Alignment","ultimate-addons-for-gutenberg"),data:{value:S,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top",tooltip:Object(b.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:"Middle",tooltip:Object(b.__)("Middle","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(b.__)("Note: This manages the Icon Position with respect to the Label.","ultimate-addons-for-gutenberg")})),n.a.createElement(_.ToggleControl,{label:Object(b.__)("Hide Labels","ultimate-addons-for-gutenberg"),checked:A,onChange:function(e){return function(e){Object(u.select)("core/block-editor").getBlocks(v).forEach((function(t){t.attributes.hideLabel=e})),O({hideLabel:e})}(e)}}))),n.a.createElement(c.b,c.a.style,n.a.createElement(_.PanelBody,{title:Object(b.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(m.a,{label:Object(b.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:w,label:"size"},tablet:{value:x,label:"sizeTablet"},mobile:{value:H,label:"sizeMobile"}},min:0,max:500,unit:{value:k,label:"sizeType"},units:[{name:Object(b.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(b.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:O}),n.a.createElement(d.a,{label:Object(b.__)("Background Size (px)","ultimate-addons-for-gutenberg"),setAttributes:O,value:M,onChange:function(e){return O({bgSize:e})},min:0,max:500,displayUnit:!1,help:Object(b.__)("Note: Background Size option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),n.a.createElement(d.a,{label:Object(b.__)("Border (px)","ultimate-addons-for-gutenberg"),setAttributes:O,value:C,onChange:function(e){return O({border:e})},min:0,max:10,displayUnit:!1,help:Object(b.__)("Note: Border option is useful when one adds border color to the icons.","ultimate-addons-for-gutenberg")}),n.a.createElement(d.a,{label:Object(b.__)("Border Radius (px)","ultimate-addons-for-gutenberg"),setAttributes:O,value:B,onChange:function(e){return O({borderRadius:e})},min:0,max:500,displayUnit:!1,help:Object(b.__)("Note: Border Radius option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")})),!A&&n.a.createElement(_.PanelBody,{title:Object(b.__)("Label","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,{label:Object(b.__)("Gap between Icon and Label (px)","ultimate-addons-for-gutenberg"),setAttributes:O,value:z,onChange:function(e){return O({inner_gap:e})},min:0,max:100,displayUnit:!1}),n.a.createElement(r.a,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:O,loadGoogleFonts:{value:q,label:"loadGoogleFonts"},fontFamily:{value:L,label:"fontFamily"},fontWeight:{value:G,label:"fontWeight"},fontSubset:{value:U,label:"fontSubset"},fontSizeType:{value:N,label:"fontSizeType"},fontSize:{value:I,label:"fontSize"},fontSizeMobile:{value:P,label:"fontSizeMobile"},fontSizeTablet:{value:F,label:"fontSizeTablet"},lineHeightType:{value:R,label:"lineHeightType"},lineHeight:{value:V,label:"lineHeight"},lineHeightMobile:{value:W,label:"lineHeightMobile"},lineHeightTablet:{value:J,label:"lineHeightTablet"}})),n.a.createElement(_.PanelBody,{title:Object(b.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,{label:Object(b.__)("Gap between Items (px)","ultimate-addons-for-gutenberg"),setAttributes:O,value:y,onChange:function(e){return O({gap:e})},min:0,max:100,displayUnit:!1,help:Object(b.__)("Note: For better editing experience, the gap between items might look larger than applied. Viewing in frontend will show the actual results.","ultimate-addons-for-gutenberg")}))),n.a.createElement(c.b,p({},c.a.advance,{parentProps:e})))),t)};t.default=n.a.memo(h)}}]);