(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[13],{305:function(n,e,t){"use strict";var l=t(15),o=t.n(l)()((function(n){return n[1]}));o.push([n.i,'/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.wp-block-uagb-cf7-styler .wpcf7 form {\n  position: relative; }\n\n.wp-block-uagb-cf7-styler .wpcf7 form > div,\n.wp-block-uagb-cf7-styler .wpcf7 form > p {\n  margin-bottom: 1.2em; }\n\n.wp-block-uagb-cf7-styler .wpcf7 .wpcf7-form-control-wrap {\n  display: block;\n  width: 100%; }\n\n.wp-block-uagb-cf7-styler .wpcf7 input:not([type="submit"]):focus,\n.wp-block-uagb-cf7-styler .wpcf7 select:focus,\n.wp-block-uagb-cf7-styler .wpcf7 textarea:focus {\n  box-shadow: none;\n  background: #fff;\n  border-color: #eaeaea;\n  outline: 0;\n  -webkit-box-shadow: none; }\n\n.wp-block-uagb-cf7-styler .wpcf7 input:not([type="submit"]),\n.wp-block-uagb-cf7-styler .wpcf7 select,\n.wp-block-uagb-cf7-styler .wpcf7 textarea {\n  width: 100%;\n  padding: 0.75em; }\n\n.wp-block-uagb-cf7-styler .wpcf7 input[type="file"] {\n  height: auto;\n  box-shadow: none;\n  box-sizing: border-box;\n  background: #fafafa;\n  border-color: #eaeaea;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 2px;\n  color: #666;\n  transition: all 0.2s linear;\n  -webkit-border-radius: 2px;\n  -webkit-box-shadow: none;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-transition: all 0.2s linear; }\n\n.wp-block-uagb-cf7-styler .wpcf7 input[type="checkbox"],\n.wp-block-uagb-cf7-styler .wpcf7 input[type="radio"] {\n  display: none;\n  vertical-align: middle;\n  width: 1.4em;\n  height: 1.2em;\n  min-width: 1.4em;\n  padding: 0;\n  margin: -3px 4px 0 0;\n  background: #e9eef2;\n  border-radius: 0.2em;\n  outline: 0;\n  cursor: pointer;\n  color: #555;\n  text-align: center;\n  line-height: 0;\n  transition: all 0.2s linear;\n  clear: none;\n  -webkit-border-radius: 0.2em;\n  -webkit-transition: all 0.2s linear; }\n\n.wp-block-uagb-cf7-styler .wpcf7 .wpcf7-validation-errors {\n  border-color: #f00; }\n\n.wp-block-uagb-cf7-styler div.wpcf7 {\n  padding: 0;\n  margin: 0; }\n\n.wp-block-uagb-cf7-styler div.wpcf7 .screen-reader-response {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px); }\n\n.wp-block-uagb-cf7-styler div.wpcf7-response-output {\n  padding: 0.2em 1em;\n  margin: 2em 0.5em 1em; }\n\n.wp-block-uagb-cf7-styler div.wpcf7-mail-sent-ok {\n  border: 2px solid #398f14; }\n\n.wp-block-uagb-cf7-styler div.wpcf7-mail-sent-ng,\n.wp-block-uagb-cf7-styler div.wpcf7-aborted {\n  border: 2px solid #f00; }\n\n.wp-block-uagb-cf7-styler div.wpcf7-spam-blocked {\n  border: 2px solid #ffa500; }\n\n.wp-block-uagb-cf7-styler div.wpcf7-validation-errors,\n.wp-block-uagb-cf7-styler div.wpcf7-acceptance-missing {\n  border: 2px solid #f7e700; }\n\n.wp-block-uagb-cf7-styler .wpcf7-form-control-wrap {\n  position: relative; }\n\n.wp-block-uagb-cf7-styler span.wpcf7-not-valid-tip {\n  display: block;\n  color: #f00;\n  font-size: 16px;\n  font-weight: 400; }\n\n.wp-block-uagb-cf7-styler .use-floating-validation-tip span.wpcf7-not-valid-tip {\n  position: absolute;\n  top: 20%;\n  left: 20%;\n  z-index: 100;\n  padding: 0.2em 0.8em;\n  background: #fff;\n  border: 1px solid #f00; }\n\n.wp-block-uagb-cf7-styler span.wpcf7-list-item {\n  display: inline-block;\n  margin: 0 1em 0 0; }\n\n.wp-block-uagb-cf7-styler span.wpcf7-list-item-label::before,\n.wp-block-uagb-cf7-styler span.wpcf7-list-item-label::after {\n  content: " "; }\n\n.wp-block-uagb-cf7-styler .wpcf7-display-none {\n  display: none; }\n\n.wp-block-uagb-cf7-styler div.wpcf7 .ajax-loader {\n  display: inline-block;\n  vertical-align: middle;\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  margin: 0 0 0 4px;\n  visibility: hidden;\n  border: none; }\n\n.wp-block-uagb-cf7-styler div.wpcf7 .ajax-loader.is-active {\n  visibility: visible; }\n\n.wp-block-uagb-cf7-styler div.wpcf7 div.ajax-error {\n  display: none; }\n\n.wp-block-uagb-cf7-styler div.wpcf7 .placeheld {\n  color: #888; }\n\n.wp-block-uagb-cf7-styler div.wpcf7 input[type="file"] {\n  cursor: pointer; }\n\n.wp-block-uagb-cf7-styler div.wpcf7 input[type="file"]:disabled {\n  cursor: default; }\n\n.wp-block-uagb-cf7-styler div.wpcf7 .wpcf7-submit:disabled {\n  cursor: not-allowed; }\n\n.wp-block-uagb-cf7-styler .wpcf7-acceptance input[type="checkbox"]:checked + span::before,\n.wp-block-uagb-cf7-styler .wpcf7-checkbox input[type="checkbox"]:checked + span::before {\n  line-height: 1.2;\n  content: "\\2714"; }\n\n.editor-styles-wrapper .wp-block-uagb-cf7-styler .button,\n.editor-styles-wrapper .wp-block-uagb-cf7-styler button,\n.editor-styles-wrapper .wp-block-uagb-cf7-styler input,\n.editor-styles-wrapper .wp-block-uagb-cf7-styler select,\n.editor-styles-wrapper .wp-block-uagb-cf7-styler textarea {\n  color: inherit;\n  font-size: 100%; }\n',""]),e.a=o},546:function(n,e,t){"use strict";t.r(e);var l,o=t(3),a=t.n(o),r=t(0),i=t.n(r),c=t(1),s=t(14),p=t.n(s),b=t(305),d=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},u={};u.locals=b.a.locals||{},u.use=function(){return d++||(l=p()(b.a,f)),u},u.unuse=function(){d>0&&!--d&&(l(),l=null)};var w=u,g=t(6);const y=n=>{Object(r.useLayoutEffect)(()=>(w.use(),()=>{w.unuse()}),[]),n=n.parentProps;const{className:e,attributes:t}=n,{isPreview:l,formId:o,align:s,isHtml:p,formJson:b,fieldStyle:d,buttonAlignment:f,enableOveride:u,validationMsgPosition:y,enableHighlightBorder:m}=t;let k="";b&&b.data.html&&(k=b.data.html);const h=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/gf-cf-styler.png";return 0===parseInt(o)?l?i.a.createElement("img",{width:"100%",src:h,alt:""}):i.a.createElement(g.Placeholder,{icon:"admin-post",label:Object(c.__)("Select a Contact Form 7","ultimate-addons-for-gutenberg")},i.a.createElement(g.SelectControl,{value:o,onChange:e=>{const{setAttributes:t}=n;if(!e)return t({isHtml:!1}),void t({formId:null});t({isHtml:!1}),t({formId:e})},options:uagb_blocks_info.cf7_forms})):i.a.createElement("div",{className:a()(e,"uagb-cf7-styler__outer-wrap","uagb-block-"+n.clientId.substr(0,8))},i.a.createElement("div",{className:a()("uagb-cf7-styler__align-"+s,"uagb-cf7-styler__field-style-"+d,"uagb-cf7-styler__btn-align-"+f,"uagb-cf7-styler__highlight-style-"+y,u?"uagb-cf7-styler__check-style-enabled":"",m?"uagb-cf7-styler__highlight-border":"")},p&&i.a.createElement("div",{dangerouslySetInnerHTML:{__html:k}}),!1===p&&i.a.createElement(g.Placeholder,{icon:"admin-post",label:Object(c.__)("Loading","ultimate-addons-for-gutenberg")},i.a.createElement(g.Spinner,null))))};e.default=i.a.memo(y)}}]);