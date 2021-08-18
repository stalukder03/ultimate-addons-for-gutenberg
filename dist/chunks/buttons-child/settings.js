(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[7],{265:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(2),l=a(5),o=a(9);function r(e){var t=Object(o.useSelect)((function(e){return e("core/edit-post").__experimentalGetPreviewDeviceType()}),[]),a=Object(o.useDispatch)("core/edit-post").__experimentalSetPreviewDeviceType,r=[{name:"Desktop",title:React.createElement(l.Dashicon,{icon:"desktop"}),itemClass:"uagb-desktop-tab uagb-responsive-tabs"},{name:"Tablet",title:React.createElement(l.Dashicon,{icon:"tablet"}),itemClass:"uagb-tablet-tab uagb-responsive-tabs"},{name:"Mobile",key:"mobile",title:React.createElement(l.Dashicon,{icon:"smartphone"}),itemClass:"uagb-mobile-tab uagb-responsive-tabs"}],i={};return i.Desktop=React.createElement(React.Fragment,null),i.Tablet=React.createElement(React.Fragment,null),i.Mobile=React.createElement(React.Fragment,null),React.createElement("div",{className:"uag-typography-range-options"},React.createElement("div",{className:"uagb-size-type-field-tabs"},React.createElement(l.ButtonGroup,{className:"components-tab-panel__tabs","aria-label":Object(n.__)("Device","ultimate-addons-for-gutenberg")},function(e){var n=[];return e.map((function(e){return n.push(React.createElement(l.Button,{key:e.key,className:"components-button components-tab-panel__tabs-item ".concat(e.itemClass).concat(e.name===t?" active-tab":""),"aria-pressed":t===e.name,onClick:function(){return t=e.name,void a(t);var t}},e.title))})),n}(r)),React.createElement("div",{className:"uagb-responsive-control-inner"},i[t]?i[t]:i.Desktop)))}},511:function(e,t,a){"use strict";a.r(t);var n=a(7),l=a(100),o=a.n(l),r=a(12),i=a(2),c=a(10),s=a(1),u=a.n(s),m=a(265),b=a(4),g=a(5),d=function(e){var t=e.state,a=e.setStateValue,l=e=e.parentProps,d=l.attributes,p=l.setAttributes,_=l.deviceType,f=d.link,E=d.size,C=d.vPadding,h=d.hPadding,y=d.borderWidth,v=d.borderRadius,k=d.borderStyle,N=d.borderColor,x=d.borderHColor,T=d.color,O=d.background,j=d.hColor,R=d.hBackground,z=d.sizeType,P=d.sizeMobile,S=d.sizeTablet,B=d.lineHeight,w=d.lineHeightType,H=d.lineHeightMobile,I=d.lineHeightTablet,F=d.opensInNewTab,D=d.inheritFromTheme,G=d.icon,M=d.iconPosition,L=d.iconSpace,A=d.target;return u.a.createElement(s.Suspense,{fallback:Object(c.a)()},u.a.createElement(b.BlockControls,null,u.a.createElement(g.ToolbarGroup,null,u.a.createElement(g.ToolbarButton,{icon:"admin-links",name:"link",title:Object(i.__)("Link"),onClick:function(){"_self"===A?p({opensInNewTab:!1}):"_blank"===A&&p({opensInNewTab:!0}),a({isURLPickerOpen:!0})}}))),t.isURLPickerOpen?u.a.createElement(g.Popover,{position:"bottom center",onClose:function(){return a({isURLPickerOpen:!1})}},u.a.createElement(b.__experimentalLinkControl,{value:{url:f,opensInNewTab:F},onChange:function(t){var a=t.url,n=void 0===a?"":a,l=t.opensInNewTab;p({link:n}),p({opensInNewTab:l}),!0===l?e.setAttributes({target:"_blank"}):e.setAttributes({target:"_self"})}})):"",u.a.createElement(b.InspectorControls,null,u.a.createElement(g.PanelBody,{title:Object(i.__)("Button Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},u.a.createElement(g.ToggleControl,{label:Object(i.__)("Inherit from Theme","ultimate-addons-for-gutenberg"),checked:D,onChange:function(){return p({inheritFromTheme:!D})}}),u.a.createElement("h2",null,Object(i.__)("Button Icon","ultimate-addons-for-gutenberg")),u.a.createElement(o.a,{icons:wp.UAGBSvgIcons,renderFunc:r.a,theme:"default",value:G,onChange:function(e){return p({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg")}),""!==G&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.SelectControl,{label:Object(i.__)("Icon Position","ultimate-addons-for-gutenberg"),value:M,onChange:function(e){return p({iconPosition:e})},options:[{value:"before",label:Object(i.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(i.__)("After Text","ultimate-addons-for-gutenberg")}]}),u.a.createElement(g.RangeControl,{label:Object(i.__)("Icon Spacing","ultimate-addons-for-gutenberg"),value:L,onChange:function(e){return p({iconSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0})),!D&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,Object(i.__)(" Color Settings","ultimate-addons-for-gutenberg")),u.a.createElement(g.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(i.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(i.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-hover-tab"}]},(function(e){var t;return t="normal"===e.name?u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Text Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:T}}))),u.a.createElement(b.ColorPalette,{value:T,onChange:function(e){return p({color:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:O}}))),u.a.createElement(b.ColorPalette,{value:O,onChange:function(e){return p({background:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Border Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:N}}))),u.a.createElement(b.ColorPalette,{value:N,onChange:function(e){return p({borderColor:e})},allowReset:!0})):u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Text Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:j}}))),u.a.createElement(b.ColorPalette,{value:j,onChange:function(e){return p({hColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Background Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:R}}))),u.a.createElement(b.ColorPalette,{value:R,onChange:function(e){return p({hBackground:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Border Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:x}}))),u.a.createElement(b.ColorPalette,{value:x,onChange:function(e){return p({borderHColor:e})},allowReset:!0})),u.a.createElement("div",null,t)})),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(i.__)("Padding (px)","ultimate-addons-for-gutenberg")),u.a.createElement(g.RangeControl,{label:n.a.vertical_spacing,className:"uagb-margin-control",value:C,onChange:function(e){p({vPadding:e})},min:0,max:100}),u.a.createElement(g.RangeControl,{label:n.a.horizontal_spacing,className:"uagb-margin-control",value:h,onChange:function(e){p({hPadding:e})},min:0,max:100}),u.a.createElement("h2",null,Object(i.__)("Border","ultimate-addons-for-gutenberg")),u.a.createElement(g.SelectControl,{label:Object(i.__)("Style","ultimate-addons-for-gutenberg"),value:k,options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(i.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(i.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(i.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(i.__)("Double","ultimate-addons-for-gutenberg")}],onChange:function(e){p({borderStyle:e})}}),"none"!=k&&u.a.createElement(g.RangeControl,{label:Object(i.__)("Thickness","ultimate-addons-for-gutenberg"),value:y,onChange:function(e){p({borderWidth:e})},min:0,max:20}),u.a.createElement(g.RangeControl,{label:Object(i.__)("Rounded Corners","ultimate-addons-for-gutenberg"),value:v,onChange:function(e){p({borderRadius:e})},min:0,max:50}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(m.a,null),"Desktop"===_&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(i.__)("Size Type","ultimate-addons-for-gutenberg")},u.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===z,"aria-pressed":"px"===z,onClick:function(){return p({sizeType:"px"})}},"px"),u.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===z,"aria-pressed":"%"===z,onClick:function(){return p({sizeType:"%"})}},"%")),u.a.createElement(g.RangeControl,{label:Object(i.__)("Font Size","ultimate-addons-for-gutenberg"),value:E,onChange:function(e){p({size:e})},min:0,max:100,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:16})),"Tablet"===_&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(i.__)("Size Type")},u.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===z,"aria-pressed":"px"===z,onClick:function(){return p({sizeType:"px"})}},"px"),u.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===z,"aria-pressed":"%"===z,onClick:function(){return p({sizeType:"%"})}},"%")),u.a.createElement(g.RangeControl,{label:Object(i.__)("Font Size","ultimate-addons-for-gutenberg"),value:S,onChange:function(e){p({sizeTablet:e})},min:0,max:100,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:16})),"Mobile"===_&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(i.__)("Size Type","ultimate-addons-for-gutenberg")},u.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===z,"aria-pressed":"px"===z,onClick:function(){return p({sizeType:"px"})}},"px"),u.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===z,"aria-pressed":"%"===z,onClick:function(){return p({sizeType:"%"})}},"%")),u.a.createElement(g.RangeControl,{label:Object(i.__)("Font Size","ultimate-addons-for-gutenberg"),value:P,onChange:function(e){p({sizeMobile:e})},min:0,max:100,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:16})),u.a.createElement(m.a,null),"Desktop"===_&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(i.__)("Size Type","ultimate-addons-for-gutenberg")},u.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===w,"aria-pressed":"px"===w,onClick:function(){return p({lineHeightType:"px"})}},"px"),u.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===w,"aria-pressed":"%"===w,onClick:function(){return p({lineHeightType:"%"})}},"%")),u.a.createElement(g.RangeControl,{label:Object(i.__)("Line Height","ultimate-addons-for-gutenberg"),value:B,onChange:function(e){p({lineHeight:e})},min:0,max:100,step:.1,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:16})),"Tablet"===_&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(i.__)("Size Type","ultimate-addons-for-gutenberg")},u.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===w,"aria-pressed":"px"===w,onClick:function(){return p({lineHeightType:"px"})}},"px"),u.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===w,"aria-pressed":"%"===w,onClick:function(){return p({lineHeightType:"%"})}},"%")),u.a.createElement(g.RangeControl,{label:Object(i.__)("Line Height","ultimate-addons-for-gutenberg"),value:I,onChange:function(e){p({lineHeightTablet:e})},min:0,max:100,beforeIcon:"editor-textcolor",allowReset:!0,step:.1,initialPosition:16})),"Mobile"===_&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(i.__)("Size Type","ultimate-addons-for-gutenberg")},u.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===w,"aria-pressed":"px"===w,onClick:function(){return p({lineHeightType:"px"})}},"px"),u.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===w,"aria-pressed":"%"===w,onClick:function(){return p({lineHeightType:"%"})}},"%")),u.a.createElement(g.RangeControl,{label:Object(i.__)("Line Height","ultimate-addons-for-gutenberg"),value:H,onChange:function(e){p({lineHeightMobile:e})},min:0,max:100,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:16})),u.a.createElement("hr",{className:"uagb-editor__separator"})))))};t.default=u.a.memo(d)}}]);