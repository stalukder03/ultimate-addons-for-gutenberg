(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[81],{522:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n(1),o=n.n(l),r=n(4),c=n(5),i=function(e){var t=e=e.parentProps,n=t.setAttributes,l=t.attributes,i=l.headingAlign,m=l.imagePosition,u=l.image;return o.a.createElement(o.a.Fragment,null,o.a.createElement(o.a.Fragment,null,"top"==m&&o.a.createElement(r.BlockControls,{key:"controls"},o.a.createElement(r.AlignmentToolbar,{value:i,onChange:function(e){return n({headingAlign:e})}}))),o.a.createElement(r.InspectorControls,null,o.a.createElement("p",{className:"uagb-settings-notice"},Object(a.__)("For the common styling options please select the Parent Block of this Price List Item.")),o.a.createElement(c.PanelBody,{title:Object(a.__)("Image"),initialOpen:!0},o.a.createElement(c.BaseControl,{id:"Image",className:"editor-bg-image-control",label:Object(a.__)("")},o.a.createElement(r.MediaUpload,{title:Object(a.__)("Select Image"),onSelect:function(e){!function(e){var t=null;t=e&&e.url?e:null,e.type&&"image"===e.type||(t=null),n({image:t})}(e)},allowedTypes:["image"],value:u,render:function(e){var t,n,l=e.open;return o.a.createElement(c.Button,{isSecondary:!0,onClick:l},(t=u,n=Object(a.__)("Select Image"),t&&(n=null==t.url||""==t.url?Object(a.__)("Select Image"):Object(a.__)("Replace Image")),n))}}),u&&o.a.createElement(c.Button,{className:"uagb-rm-btn",onClick:function(){n({image:null})},isLink:!0,isDestructive:!0},Object(a.__)("Remove Image"))))))};t.default=o.a.memo(i)}}]);