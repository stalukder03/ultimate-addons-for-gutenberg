(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[52],{349:function(e,t,n){"use strict";var a=n(17),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,'/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-none .gform_heading,\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-no .gform_heading,\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-yes .gform_heading.custom_gform_heading {\n  display: none; }\n\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-no .gform_heading.custom_gform_heading,\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-yes .gform_heading {\n  display: block; }\n\n.wp-block-uagb-gf-styler .uagb-gf-styler__check-style-enabled input[type="radio"],\n.wp-block-uagb-gf-styler .uagb-gf-styler__check-style-enabled input[type="checkbox"] {\n  -webkit-appearance: none; }\n\n.wp-block-uagb-gf-styler input[type="radio"] {\n  -webkit-appearance: radio; }\n\n.wp-block-uagb-gf-styler input[type="checkbox"] {\n  -webkit-appearance: checkbox; }\n\n.wp-block-uagb-gf-styler input[type="radio"]:focus,\n.wp-block-uagb-gf-styler input[type="checkbox"]:focus,\n.wp-block-uagb-gf-styler input[type="radio"]:checked:focus,\n.wp-block-uagb-gf-styler input[type="checkbox"]:checked:focus {\n  box-shadow: none; }\n\n.wp-block-uagb-gf-styler input[type="radio"]:checked::before,\n.wp-block-uagb-gf-styler input[type="checkbox"]:checked::before {\n  content: "";\n  display: inline;\n  float: unset; }\n\n.wp-block-uagb-gf-styler input[type="number"] {\n  height: auto; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler .button,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler button,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler input,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler select,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler textarea {\n  color: inherit;\n  font-size: 100%; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler select,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler .gform_button.button {\n  height: auto; }\n',""]),t.a=o},587:function(e,t,n){"use strict";n.r(t);var a,o=n(4),l=n.n(o),r=n(6),g=n(2),i=n(1),s=n.n(i),c=n(16),u=n.n(c),b=n(349),p=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=b.a.locals||{},f.use=function(){return p++||(a=u()(b.a,d)),f},f.unuse=function(){p>0&&!--p&&(a(),a=null)};var y=f,_=function(e){Object(i.useLayoutEffect)((function(){return y.use(),function(){y.unuse()}}),[]);var t=e=e.parentProps,n=t.className,a=t.attributes,o=t.setAttributes,c=a.formId,u=a.align,b=a.isHtml,p=a.formJson,d=a.titleDescStyle,f=a.fieldStyle,_=a.buttonAlignment,k=a.enableLabel,m=a.enableOveride,w=a.advancedValidationSettings,h="";return p&&p.data.html&&(h=p.data.html),0==c?s.a.createElement(r.Placeholder,{icon:"admin-post",label:Object(g.__)("Select a Gravity Form","ultimate-addons-for-gutenberg")},s.a.createElement(r.SelectControl,{value:c,onChange:function(e){if(!e)return o({isHtml:!1}),void o({formId:null});o({isHtml:!1}),o({formId:e})},options:uagb_blocks_info.gf_forms})):s.a.createElement("div",{className:l()(n,"uagb-gf-styler__outer-wrap","uagb-block-".concat(e.clientId.substr(0,8)))},s.a.createElement("div",{className:l()("uagb-gf-styler__align-".concat(u),"uagb-gf-styler__field-style-".concat(f),"uagb-gf-styler__btn-align-".concat(_),"uagb-gf-styler__gform-heading-".concat(d),m?"uagb-gf-styler__check-style-enabled":"",k?"uagb-gf-styler__hide-label":"",w?"uagb-gf-styler__error-yes":"")},b&&s.a.createElement("div",{dangerouslySetInnerHTML:{__html:h}}),0==b&&s.a.createElement(r.Placeholder,{icon:"admin-post",label:Object(g.__)("Loading","ultimate-addons-for-gutenberg")},s.a.createElement(r.Spinner,null))))};t.default=s.a.memo(_)}}]);