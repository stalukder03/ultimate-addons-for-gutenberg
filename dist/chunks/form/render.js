(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[45],{285:function(a,e,t){"use strict";var o=t(16),n=t.n(o)()((function(a){return a[1]}));n.push([a.i,'.uagb-forms__outer-wrap {\n  padding: 25px; }\n  .uagb-forms__outer-wrap .uagb-forms-main-form .uagb-forms-form-hidden-data {\n    display: none; }\n  .uagb-forms__outer-wrap .uagb-forms-main-form .uagb-forms-required-wrap {\n    float: right; }\n  .uagb-forms__outer-wrap .uagb-forms-main-form input[type="checkbox"],\n  .uagb-forms__outer-wrap .uagb-forms-main-form input[type="radio"] {\n    margin-top: 5px;\n    margin-bottom: 5px; }\n  .uagb-forms__outer-wrap .block-editor-block-list__block {\n    padding: 0;\n    margin: 0; }\n\n.uagb-form-notice {\n  padding: 8px 10px;\n  background-color: #fff8e5;\n  border-left: 5px solid #ffb901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n\nselect.uagb-forms-select-box.uagb-forms-input {\n  max-width: 100%; }\n\n.uagb-form-emailto {\n  margin-top: 10px; }\n\n.uagb-forms-recaptcha-button {\n  display: block;\n  width: 50%;\n  margin-bottom: 15px; }\n\n[data-type="uagb/forms"] .block-editor-block-variation-picker__variations {\n  display: flex;\n  justify-content: center; }\n\n[data-type="uagb/forms"] .block-editor-block-variation-picker__variation.components-button.has-icon {\n  width: 90px; }\n\n.uagb-forms-phone-wrap .uagb-forms-phone-flex {\n  display: flex;\n  width: 100%; }\n  .uagb-forms-phone-wrap .uagb-forms-phone-flex .components-base-control__field {\n    height: calc(100% - 8px); }\n  .uagb-forms-phone-wrap .uagb-forms-phone-flex .uagb-form-phone-country {\n    width: auto !important; }\n  .uagb-forms-phone-wrap .uagb-forms-phone-flex .uagb-forms-phone-input {\n    margin-bottom: 8px; }\n',""]),e.a=n},525:function(a,e,t){"use strict";t.r(e);var o,n=t(4),r=t.n(n),u=t(0),m=t.n(u),s=t(1),i=t(15),b=t.n(i),l=t(285),c=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=l.a.locals||{},g.use=function(){return c++||(o=b()(l.a,f)),g},g.unuse=function(){c>0&&!--c&&(o(),o=null)};var p=g,d=t(11),h=t(5);const _=["uagb/forms-name","uagb/forms-email","uagb/forms-hidden","uagb/forms-phone","uagb/forms-textarea","uagb/forms-url","uagb/forms-select","uagb/forms-radio","uagb/forms-checkbox","uagb/forms-toggle","uagb/forms-date","uagb/forms-accept"],w=a=>{Object(u.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),a=a.parentProps;const e=Object(d.a)(),{attributes:t,setAttributes:o}=a,{block_id:n,submitButtonText:i,formLabel:b,buttonSize:l,reCaptchaEnable:c,reCaptchaType:f}=t,g=Object(u.useCallback)(a=>{a.preventDefault()});return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:r()("uagb-forms__outer-wrap","uagb-block-"+n,`uagb-forms__${l}-btn`,"uagb-editor-preview-mode-"+e.toLowerCase())},m.a.createElement("form",{className:"uagb-forms-main-form",name:"uagb-form-"+n},m.a.createElement(h.InnerBlocks,{allowedBlocks:_}),m.a.createElement("div",{className:"uagb-forms-form-hidden-data"},c&&m.a.createElement("input",{type:"hidden",id:"g-recaptcha-response",className:"uagb-forms-recaptcha"}),m.a.createElement("input",{type:"hidden",name:"uagb_forms_form_label",value:b}),m.a.createElement("input",{type:"hidden",name:"uagb_forms_form_id",value:"uagb-form-"+n})),c&&"v2"===f&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"g-recaptcha uagb-forms-field-set","data-sitekey":""})),m.a.createElement("div",{className:"uagb-form-reacaptcha-error-"+n}),m.a.createElement("div",{className:"uagb-forms-main-submit-button-wrap wp-block-button"},m.a.createElement("button",{onClick:g,className:"uagb-forms-main-submit-button wp-block-button__link"},m.a.createElement(h.RichText,{tagName:"div",placeholder:Object(s.__)("Submit","ultimate-addons-for-gutenberg"),value:i,onChange:a=>o({submitButtonText:a}),className:"uagb-forms-main-submit-button-text",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]}))))))};e.default=m.a.memo(w)}}]);