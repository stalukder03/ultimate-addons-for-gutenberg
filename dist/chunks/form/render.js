(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[42],{359:function(a,e,t){"use strict";var n=t(15),o=t.n(n)()((function(a){return a[1]}));o.push([a.i,'.uagb-forms__outer-wrap {\n  border: 2px solid #007cba; }\n  .uagb-forms__outer-wrap .uagb-forms-main-form .uagb-forms-form-hidden-data {\n    display: none; }\n  .uagb-forms__outer-wrap .uagb-forms-main-form .uagb-forms-required-wrap {\n    float: right; }\n  .uagb-forms__outer-wrap .uagb-forms-main-form input[type="checkbox"],\n  .uagb-forms__outer-wrap .uagb-forms-main-form input[type="radio"] {\n    margin-top: 5px;\n    margin-bottom: 5px; }\n  .uagb-forms__outer-wrap .block-editor-block-list__block {\n    padding: 0;\n    margin: 0; }\n\n.uagb-form-notice {\n  padding: 8px 10px;\n  background-color: #fff8e5;\n  border-left: 5px solid #ffb901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n\nselect.uagb-forms-select-box.uagb-forms-input {\n  max-width: 100%; }\n\n.uagb-form-emailto {\n  margin-top: 10px; }\n\n.uagb-size-type-field-tabs.uagb-size-type-field__common-tabs.uagb-inline-margin.uagb-email-controls-tabs .components-tab-panel__tabs {\n  margin-right: 0; }\n\n.uagb-forms-recaptcha-button {\n  display: block;\n  width: 50%;\n  margin-bottom: 15px; }\n\n[data-type="uagb/forms"] .block-editor-block-variation-picker__variations {\n  display: flex;\n  justify-content: center; }\n\n[data-type="uagb/forms"] .block-editor-block-variation-picker__variation.components-button.has-icon {\n  width: 90px; }\n',""]),e.a=o},595:function(a,e,t){"use strict";t.r(e);var n,o=t(3),r=t.n(o),u=t(1),i=t.n(u),m=t(2),s=t(14),c=t.n(s),b=t(359),l=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=b.a.locals||{},g.use=function(){return l++||(n=c()(b.a,f)),g},g.unuse=function(){l>0&&!--l&&(n(),n=null)};var p=g,d=t(5),_=["uagb/forms-name","uagb/forms-email","uagb/forms-hidden","uagb/forms-phone","uagb/forms-textarea","uagb/forms-url","uagb/forms-select","uagb/forms-radio","uagb/forms-checkbox","uagb/forms-toggle","uagb/forms-date","uagb/forms-accept"],h=function(a){Object(u.useLayoutEffect)((function(){return p.use(),function(){p.unuse()}}),[]);var e=a=a.parentProps,t=e.attributes,n=e.setAttributes,o=t.block_id,s=t.submitButtonText,c=t.formLabel,b=t.buttonSize,l=t.reCaptchaEnable,f=t.reCaptchaType,g=t.reCaptchaSecretKeyV2,h=t.reCaptchaSiteKeyV2,k=Object(u.useCallback)((function(a){a.preventDefault()}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:r()("uagb-forms__outer-wrap","uagb-block-".concat(o),"uagb-forms__".concat(b,"-btn"))},i.a.createElement("form",{className:"uagb-forms-main-form",name:"uagb-form-".concat(o)},i.a.createElement(d.InnerBlocks,{allowedBlocks:_}),i.a.createElement("div",{className:"uagb-forms-form-hidden-data"},l&&i.a.createElement("input",{type:"hidden",id:"g-recaptcha-response",className:"uagb-forms-recaptcha"}),i.a.createElement("input",{type:"hidden",name:"uagb_forms_form_label",value:c}),i.a.createElement("input",{type:"hidden",name:"uagb_forms_form_id",value:"uagb-form-".concat(o)})),l&&"v2"===f&&h&&g&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"g-recaptcha uagb-forms-field-set","data-sitekey":h}),i.a.createElement("div",{className:"uagb-form-reacaptcha-error-".concat(o)})),i.a.createElement("div",{className:"uagb-forms-main-submit-button-wrap"},i.a.createElement("button",{onClick:k,className:"uagb-forms-main-submit-button"},i.a.createElement(d.RichText,{tagName:"div",placeholder:Object(m.__)("Submit","ultimate-addons-for-gutenberg"),value:s,onChange:function(a){return n({submitButtonText:a})},className:"uagb-forms-main-submit-button-text",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]}))))))};e.default=i.a.memo(h)}}]);