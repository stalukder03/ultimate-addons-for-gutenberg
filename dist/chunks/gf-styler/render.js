(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[55],{303:function(e,t,n){"use strict";var a=n(17),l=n.n(a)()((function(e){return e[1]}));l.push([e.i,'/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-none .gform_heading,\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-no .gform_heading,\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-yes .gform_heading.custom_gform_heading {\n  display: none; }\n\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-no .gform_heading.custom_gform_heading,\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-yes .gform_heading {\n  display: block; }\n\n.wp-block-uagb-gf-styler .uagb-gf-styler__check-style-enabled input[type="radio"],\n.wp-block-uagb-gf-styler .uagb-gf-styler__check-style-enabled input[type="checkbox"] {\n  -webkit-appearance: none; }\n\n.wp-block-uagb-gf-styler input[type="radio"] {\n  -webkit-appearance: radio; }\n\n.wp-block-uagb-gf-styler input[type="checkbox"] {\n  -webkit-appearance: checkbox; }\n\n.wp-block-uagb-gf-styler input[type="radio"]:focus,\n.wp-block-uagb-gf-styler input[type="checkbox"]:focus,\n.wp-block-uagb-gf-styler input[type="radio"]:checked:focus,\n.wp-block-uagb-gf-styler input[type="checkbox"]:checked:focus {\n  box-shadow: none; }\n\n.wp-block-uagb-gf-styler input[type="radio"]:checked::before,\n.wp-block-uagb-gf-styler input[type="checkbox"]:checked::before {\n  content: "";\n  display: inline;\n  float: unset; }\n\n.wp-block-uagb-gf-styler input[type="number"] {\n  height: auto; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler .button,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler button,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler input,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler select,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler textarea {\n  color: inherit;\n  font-size: 100%;\n  line-height: inherit; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler select,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler .gform_button.button {\n  height: auto; }\n',""]),t.a=l},546:function(e,t,n){"use strict";n.r(t);var a,l=n(3),o=n.n(l),r=n(6),g=n(1),i=n(0),s=n.n(i),u=n(16),b=n.n(u),c=n(303),p=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=c.a.locals||{},f.use=function(){return p++||(a=b()(c.a,d)),f},f.unuse=function(){p>0&&!--p&&(a(),a=null)};var y=f;const _=e=>{Object(i.useLayoutEffect)(()=>(y.use(),()=>{y.unuse()}),[]),e=e.parentProps;const{className:t,attributes:n,setAttributes:a}=e,{isPreview:l,formId:u,align:b,isHtml:c,formJson:p,titleDescStyle:d,fieldStyle:f,buttonAlignment:_,enableLabel:m,enableOveride:k,advancedValidationSettings:w}=n;let h="";p&&p.data.html&&(h=p.data.html);const v=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/gf-cf-styler.png";return 0===parseInt(u)?l?s.a.createElement("img",{width:"100%",src:v,alt:""}):s.a.createElement(s.a.Fragment,null,s.a.createElement(r.Placeholder,{icon:"admin-post",label:Object(g.__)("Select a Gravity Form","ultimate-addons-for-gutenberg")},s.a.createElement(r.SelectControl,{value:u,onChange:e=>{if(!e)return a({isHtml:!1}),void a({formId:null});a({isHtml:!1}),a({formId:e})},options:uagb_blocks_info.gf_forms}))):s.a.createElement("div",{className:o()(t,"uagb-gf-styler__outer-wrap","uagb-block-"+e.clientId.substr(0,8))},s.a.createElement("div",{className:o()("uagb-gf-styler__align-"+b,"uagb-gf-styler__field-style-"+f,"uagb-gf-styler__btn-align-"+_,"uagb-gf-styler__gform-heading-"+d,k?"uagb-gf-styler__check-style-enabled":"",m?"uagb-gf-styler__hide-label":"",w?"uagb-gf-styler__error-yes":"")},c&&s.a.createElement("div",{dangerouslySetInnerHTML:{__html:h}}),!1===c&&s.a.createElement(r.Placeholder,{icon:"admin-post",label:Object(g.__)("Loading","ultimate-addons-for-gutenberg")},s.a.createElement(r.Spinner,null))))};t.default=s.a.memo(_)}}]);