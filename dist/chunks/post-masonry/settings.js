(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[77],{513:function(e,t,a){"use strict";a.r(t);var o=a(73),n=a(2),l=a(1),i=a.n(l),r=a(4),c=a(5),g=function(e){var t,a,l,g,s=e,m=s.state,u=s.togglePreview,f=s.inspectorControls,b=e=e.parentProps,d=b.attributes,F=b.categoriesList,p=b.setAttributes,v=b.taxonomyList,_=d.align,E=d.titleFontFamily,h=d.titleFontWeight,k=d.titleLoadGoogleFonts,w=d.metaFontFamily,y=d.metaFontWeight,L=d.metaLoadGoogleFonts,G=d.excerptFontFamily,j=d.excerptFontWeight,x=d.excerptLoadGoogleFonts,A=d.ctaFontFamily,C=d.ctaFontWeight,O=d.ctaLoadGoogleFonts;if(1==k){var W={google:{families:[E+(h?":"+h:"")]}};t=i.a.createElement(o.a,{config:W})}if(1==L){var B={google:{families:[w+(y?":"+y:"")]}};a=i.a.createElement(o.a,{config:B})}if(1==x){var J={google:{families:[G+(j?":"+j:"")]}};l=i.a.createElement(o.a,{config:J})}if(1==O){var P={google:{families:[A+(C?":"+C:"")]}};g=i.a.createElement(o.a,{config:P})}var T,q=[],z=[{value:"",label:Object(n.__)("All","ultimate-addons-for-gutenberg")}];return""!=v&&Object.keys(v).map((function(e){return q.push({value:v[e].name,label:v[e].label})})),""!=F&&Object.keys(F).map((function(e){return z.push({value:F[e].id,label:F[e].name})})),i.a.createElement(i.a.Fragment,null,f,i.a.createElement(r.BlockControls,null,i.a.createElement(r.BlockAlignmentToolbar,{value:_,onChange:function(e){p({align:e})},controls:["left","center","right"]}),(T=m.isEditing,i.a.createElement(c.ToolbarGroup,{controls:[{icon:"edit",title:Object(n.__)("Edit"),onClick:function(){return u()},isActive:T}]}))),t,a,l,g)};t.default=i.a.memo(g)}}]);