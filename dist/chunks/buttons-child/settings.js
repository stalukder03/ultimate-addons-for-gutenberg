(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[7],{511:function(e,a,t){"use strict";t.r(a);var n=t(7),l=t(100),o=t.n(l),r=t(12),i=t(2),s=t(10),c=t(1),u=t.n(c),m=t(136),b=t(4),g=t(5),d=function(e){var a=e.state,t=e.setStateValue,l=e=e.parentProps,d=l.attributes,p=l.setAttributes,_=l.deviceType,f=d.link,E=d.size,C=d.vPadding,h=d.hPadding,y=d.borderWidth,k=d.borderRadius,x=d.borderStyle,N=d.borderColor,v=d.borderHColor,O=d.color,T=d.background,j=d.hColor,z=d.hBackground,P=d.sizeType,S=d.sizeMobile,B=d.sizeTablet,R=d.lineHeight,w=d.lineHeightType,H=d.lineHeightMobile,I=d.lineHeightTablet,F=d.opensInNewTab,G=d.inheritFromTheme,L=d.icon,M=d.iconPosition,A=d.iconSpace,D=d.target;return u.a.createElement(c.Suspense,{fallback:Object(s.a)()},u.a.createElement(b.BlockControls,null,u.a.createElement(g.ToolbarGroup,null,u.a.createElement(g.ToolbarButton,{icon:"admin-links",name:"link",title:Object(i.__)("Link"),onClick:function(){"_self"===D?p({opensInNewTab:!1}):"_blank"===D&&p({opensInNewTab:!0}),t({isURLPickerOpen:!0})}}))),a.isURLPickerOpen?u.a.createElement(g.Popover,{position:"bottom center",onClose:function(){return t({isURLPickerOpen:!1})}},u.a.createElement(b.__experimentalLinkControl,{value:{url:f,opensInNewTab:F},onChange:function(a){var t=a.url,n=void 0===t?"":t,l=a.opensInNewTab;p({link:n}),p({opensInNewTab:l}),!0===l?e.setAttributes({target:"_blank"}):e.setAttributes({target:"_self"})}})):"",u.a.createElement(b.InspectorControls,null,u.a.createElement(g.PanelBody,{title:Object(i.__)("Button Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},u.a.createElement(g.ToggleControl,{label:Object(i.__)("Inherit from Theme","ultimate-addons-for-gutenberg"),checked:G,onChange:function(){return p({inheritFromTheme:!G})}}),u.a.createElement("h2",null,Object(i.__)("Button Icon","ultimate-addons-for-gutenberg")),u.a.createElement(o.a,{icons:wp.UAGBSvgIcons,renderFunc:r.a,theme:"default",value:L,onChange:function(e){return p({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg")}),""!==L&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.SelectControl,{label:Object(i.__)("Icon Position","ultimate-addons-for-gutenberg"),value:M,onChange:function(e){return p({iconPosition:e})},options:[{value:"before",label:Object(i.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(i.__)("After Text","ultimate-addons-for-gutenberg")}]}),u.a.createElement(g.RangeControl,{label:Object(i.__)("Icon Spacing","ultimate-addons-for-gutenberg"),value:A,onChange:function(e){return p({iconSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0})),!G&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,Object(i.__)(" Color Settings","ultimate-addons-for-gutenberg")),u.a.createElement(g.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(i.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(i.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-hover-tab"}]},(function(e){var a;return a="normal"===e.name?u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Text Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:O}}))),u.a.createElement(b.ColorPalette,{value:O,onChange:function(e){return p({color:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:T}}))),u.a.createElement(b.ColorPalette,{value:T,onChange:function(e){return p({background:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Border Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:N}}))),u.a.createElement(b.ColorPalette,{value:N,onChange:function(e){return p({borderColor:e})},allowReset:!0})):u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Text Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:j}}))),u.a.createElement(b.ColorPalette,{value:j,onChange:function(e){return p({hColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Background Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:z}}))),u.a.createElement(b.ColorPalette,{value:z,onChange:function(e){return p({hBackground:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Border Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:v}}))),u.a.createElement(b.ColorPalette,{value:v,onChange:function(e){return p({borderHColor:e})},allowReset:!0})),u.a.createElement("div",null,a)})),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(i.__)("Padding (px)","ultimate-addons-for-gutenberg")),u.a.createElement(g.RangeControl,{label:n.a.vertical_spacing,className:"uagb-margin-control",value:C,onChange:function(e){p({vPadding:e})},min:0,max:100}),u.a.createElement(g.RangeControl,{label:n.a.horizontal_spacing,className:"uagb-margin-control",value:h,onChange:function(e){p({hPadding:e})},min:0,max:100}),u.a.createElement("h2",null,Object(i.__)("Border","ultimate-addons-for-gutenberg")),u.a.createElement(g.SelectControl,{label:Object(i.__)("Style","ultimate-addons-for-gutenberg"),value:x,options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(i.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(i.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(i.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(i.__)("Double","ultimate-addons-for-gutenberg")}],onChange:function(e){p({borderStyle:e})}}),"none"!=x&&u.a.createElement(g.RangeControl,{label:Object(i.__)("Thickness","ultimate-addons-for-gutenberg"),value:y,onChange:function(e){p({borderWidth:e})},min:0,max:20}),u.a.createElement(g.RangeControl,{label:Object(i.__)("Rounded Corners","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){p({borderRadius:e})},min:0,max:50}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(m.a,null),"Desktop"===_&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(i.__)("Size Type","ultimate-addons-for-gutenberg")},u.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===P,"aria-pressed":"px"===P,onClick:function(){return p({sizeType:"px"})}},"px"),u.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===P,"aria-pressed":"%"===P,onClick:function(){return p({sizeType:"%"})}},"%")),u.a.createElement(g.RangeControl,{label:Object(i.__)("Font Size","ultimate-addons-for-gutenberg"),value:E,onChange:function(e){p({size:e})},min:0,max:100,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:16})),"Tablet"===_&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(i.__)("Size Type")},u.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===P,"aria-pressed":"px"===P,onClick:function(){return p({sizeType:"px"})}},"px"),u.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===P,"aria-pressed":"%"===P,onClick:function(){return p({sizeType:"%"})}},"%")),u.a.createElement(g.RangeControl,{label:Object(i.__)("Font Size","ultimate-addons-for-gutenberg"),value:B,onChange:function(e){p({sizeTablet:e})},min:0,max:100,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:16})),"Mobile"===_&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(i.__)("Size Type","ultimate-addons-for-gutenberg")},u.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===P,"aria-pressed":"px"===P,onClick:function(){return p({sizeType:"px"})}},"px"),u.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===P,"aria-pressed":"%"===P,onClick:function(){return p({sizeType:"%"})}},"%")),u.a.createElement(g.RangeControl,{label:Object(i.__)("Font Size","ultimate-addons-for-gutenberg"),value:S,onChange:function(e){p({sizeMobile:e})},min:0,max:100,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:16})),u.a.createElement(m.a,null),"Desktop"===_&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(i.__)("Size Type","ultimate-addons-for-gutenberg")},u.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===w,"aria-pressed":"px"===w,onClick:function(){return p({lineHeightType:"px"})}},"px"),u.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===w,"aria-pressed":"%"===w,onClick:function(){return p({lineHeightType:"%"})}},"%")),u.a.createElement(g.RangeControl,{label:Object(i.__)("Line Height","ultimate-addons-for-gutenberg"),value:R,onChange:function(e){p({lineHeight:e})},min:0,max:100,step:.1,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:16})),"Tablet"===_&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(i.__)("Size Type","ultimate-addons-for-gutenberg")},u.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===w,"aria-pressed":"px"===w,onClick:function(){return p({lineHeightType:"px"})}},"px"),u.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===w,"aria-pressed":"%"===w,onClick:function(){return p({lineHeightType:"%"})}},"%")),u.a.createElement(g.RangeControl,{label:Object(i.__)("Line Height","ultimate-addons-for-gutenberg"),value:I,onChange:function(e){p({lineHeightTablet:e})},min:0,max:100,beforeIcon:"editor-textcolor",allowReset:!0,step:.1,initialPosition:16})),"Mobile"===_&&u.a.createElement(u.a.Fragment,null,u.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(i.__)("Size Type","ultimate-addons-for-gutenberg")},u.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===w,"aria-pressed":"px"===w,onClick:function(){return p({lineHeightType:"px"})}},"px"),u.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===w,"aria-pressed":"%"===w,onClick:function(){return p({lineHeightType:"%"})}},"%")),u.a.createElement(g.RangeControl,{label:Object(i.__)("Line Height","ultimate-addons-for-gutenberg"),value:H,onChange:function(e){p({lineHeightMobile:e})},min:0,max:100,beforeIcon:"editor-textcolor",allowReset:!0,initialPosition:16})),u.a.createElement("hr",{className:"uagb-editor__separator"})))))};a.default=u.a.memo(d)}}]);