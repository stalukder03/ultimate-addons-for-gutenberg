(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[61],{526:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),o=a(11),i=a(73),r=a(22),b=a(2),u=a(10),s=a(5),g=a(51),d=a(20),c=a(13),m=a(52),_=a(18),p=a(6);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const h=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,deviceType:h,clientId:O}=e,{align:v,gap:j,inner_gap:y,stack:z,icon_layout:E,iconPosition:T,size:S,sizeType:w,sizeMobile:k,sizeTablet:H,hideLabel:x,borderRadius:A,bgSize:B,border:M,fontSize:C,fontSizeType:I,fontSizeMobile:N,fontSizeTablet:P,fontFamily:F,fontWeight:L,fontSubset:G,lineHeight:U,lineHeightType:V,lineHeightMobile:R,lineHeightTablet:W,loadGoogleFonts:J}=t;let q;if(1==J){const e={google:{families:[F+(L?":"+L:"")]}};q=n.a.createElement(i.a,{config:e})}return n.a.createElement(l.Suspense,{fallback:Object(o.a)()},n.a.createElement(s.BlockControls,null,n.a.createElement(s.BlockAlignmentToolbar,{value:v,onChange:e=>{a({align:e})},controls:["left","center","right"]})),n.a.createElement(s.InspectorControls,null,n.a.createElement(g.a,null,n.a.createElement(d.b,d.a.general,n.a.createElement(p.PanelBody,{initialOpen:!0},n.a.createElement(_.a,{setAttributes:a,label:Object(b.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:E,label:"icon_layout"},className:"uagb-multi-button-alignment-control",options:[{value:"horizontal",label:Object(b.__)("Horizontal","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(b.__)("Vertical","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Vertical","ultimate-addons-for-gutenberg")}],showIcons:!1}),"horizontal"==E&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_.a,{setAttributes:a,label:Object(b.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:z,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(b.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(b.__)("Tablet","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(b.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(b.__)("Note: Choose on what breakpoint the Icons will stack.","ultimate-addons-for-gutenberg")})),!x&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_.a,{setAttributes:a,label:Object(b.__)("Icon Alignment","ultimate-addons-for-gutenberg"),data:{value:T,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top",tooltip:Object(b.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:"Middle",tooltip:Object(b.__)("Middle","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(b.__)("Note: This manages the Icon Position with respect to the Label.","ultimate-addons-for-gutenberg")})),n.a.createElement(p.ToggleControl,{label:Object(b.__)("Hide Labels","ultimate-addons-for-gutenberg"),checked:x,onChange:e=>(e=>{Object(u.select)("core/block-editor").getBlocks(O).forEach(t=>{t.attributes.hideLabel=e}),a({hideLabel:e})})(e)}))),n.a.createElement(d.b,d.a.style,n.a.createElement(p.PanelBody,{title:Object(b.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(m.a,{label:Object(b.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:S,label:"size"},tablet:{value:H,label:"sizeTablet"},mobile:{value:k,label:"sizeMobile"}},min:0,max:500,unit:{value:w,label:"sizeType"},units:[{name:Object(b.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(b.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:a}),n.a.createElement(c.a,{label:Object(b.__)("Background Size (px)","ultimate-addons-for-gutenberg"),setAttributes:a,value:B,onChange:e=>a({bgSize:e}),min:0,max:500,displayUnit:!1,help:Object(b.__)("Note: Background Size option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),n.a.createElement(c.a,{label:Object(b.__)("Border (px)","ultimate-addons-for-gutenberg"),setAttributes:a,value:M,onChange:e=>a({border:e}),min:0,max:10,displayUnit:!1,help:Object(b.__)("Note: Border option is useful when one adds border color to the icons.","ultimate-addons-for-gutenberg")}),n.a.createElement(c.a,{label:Object(b.__)("Border Radius (px)","ultimate-addons-for-gutenberg"),setAttributes:a,value:A,onChange:e=>a({borderRadius:e}),min:0,max:500,displayUnit:!1,help:Object(b.__)("Note: Border Radius option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")})),!x&&n.a.createElement(p.PanelBody,{title:Object(b.__)("Label","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(c.a,{label:Object(b.__)("Gap between Icon and Label (px)","ultimate-addons-for-gutenberg"),setAttributes:a,value:y,onChange:e=>a({inner_gap:e}),min:0,max:100,displayUnit:!1}),n.a.createElement(r.a,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:J,label:"loadGoogleFonts"},fontFamily:{value:F,label:"fontFamily"},fontWeight:{value:L,label:"fontWeight"},fontSubset:{value:G,label:"fontSubset"},fontSizeType:{value:I,label:"fontSizeType"},fontSize:{value:C,label:"fontSize"},fontSizeMobile:{value:N,label:"fontSizeMobile"},fontSizeTablet:{value:P,label:"fontSizeTablet"},lineHeightType:{value:V,label:"lineHeightType"},lineHeight:{value:U,label:"lineHeight"},lineHeightMobile:{value:R,label:"lineHeightMobile"},lineHeightTablet:{value:W,label:"lineHeightTablet"}})),n.a.createElement(p.PanelBody,{title:Object(b.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(c.a,{label:Object(b.__)("Gap between Items (px)","ultimate-addons-for-gutenberg"),setAttributes:a,value:j,onChange:e=>a({gap:e}),min:0,max:100,displayUnit:!1,help:Object(b.__)("Note: For better editing experience, the gap between items might look larger than applied.  Viewing in frontend will show the actual results.","ultimate-addons-for-gutenberg")}))),n.a.createElement(d.b,f({},d.a.advance,{parentProps:e})))),q)};t.default=n.a.memo(h)}}]);