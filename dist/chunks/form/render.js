(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[45],{268:function(e,a,t){"use strict";var n=t(17),o=t.n(n)()((function(e){return e[1]}));o.push([e.i,'.uagb-forms__outer-wrap {\n  border: 2px solid #007cba;\n  padding: 25px; }\n  .uagb-forms__outer-wrap .uagb-forms-main-form .uagb-forms-form-hidden-data {\n    display: none; }\n  .uagb-forms__outer-wrap .uagb-forms-main-form .uagb-forms-required-wrap {\n    float: right; }\n  .uagb-forms__outer-wrap .uagb-forms-main-form input[type="checkbox"],\n  .uagb-forms__outer-wrap .uagb-forms-main-form input[type="radio"] {\n    margin-top: 5px;\n    margin-bottom: 5px; }\n  .uagb-forms__outer-wrap .block-editor-block-list__block {\n    padding: 0;\n    margin: 0; }\n\n.uagb-form-notice {\n  padding: 8px 10px;\n  background-color: #fff8e5;\n  border-left: 5px solid #ffb901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n\nselect.uagb-forms-select-box.uagb-forms-input {\n  max-width: 100%; }\n\n.uagb-form-emailto {\n  margin-top: 10px; }\n\n.uagb-forms-recaptcha-button {\n  display: block;\n  width: 50%;\n  margin-bottom: 15px; }\n\n[data-type="uagb/forms"] .block-editor-block-variation-picker__variations {\n  display: flex;\n  justify-content: center; }\n\n[data-type="uagb/forms"] .block-editor-block-variation-picker__variation.components-button.has-icon {\n  width: 90px; }\n',""]),a.a=o},509:function(e,a,t){"use strict";t.r(a);var n,o=t(3),r=t.n(o),u=t(0),m=t.n(u),s=t(1),i=t(16),b=t.n(i),c=t(268),l=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=c.a.locals||{},g.use=function(){return l++||(n=b()(c.a,f)),g},g.unuse=function(){l>0&&!--l&&(n(),n=null)};var p=g,d=t(10),_=t(4);const h=["uagb/forms-name","uagb/forms-email","uagb/forms-hidden","uagb/forms-phone","uagb/forms-textarea","uagb/forms-url","uagb/forms-select","uagb/forms-radio","uagb/forms-checkbox","uagb/forms-toggle","uagb/forms-date","uagb/forms-accept"],k=e=>{Object(u.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),e=e.parentProps;const a=Object(d.a)(),{attributes:t,setAttributes:n}=e,{block_id:o,submitButtonText:i,formLabel:b,buttonSize:c,reCaptchaEnable:l,reCaptchaType:f,reCaptchaSecretKeyV2:g,reCaptchaSiteKeyV2:k}=t,w=Object(u.useCallback)(e=>{e.preventDefault()});return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:r()("uagb-forms__outer-wrap","uagb-block-"+o,`uagb-forms__${c}-btn`,"uagb-editor-preview-mode-"+a.toLowerCase())},m.a.createElement("form",{className:"uagb-forms-main-form",name:"uagb-form-"+o},m.a.createElement(_.InnerBlocks,{allowedBlocks:h}),m.a.createElement("div",{className:"uagb-forms-form-hidden-data"},l&&m.a.createElement("input",{type:"hidden",id:"g-recaptcha-response",className:"uagb-forms-recaptcha"}),m.a.createElement("input",{type:"hidden",name:"uagb_forms_form_label",value:b}),m.a.createElement("input",{type:"hidden",name:"uagb_forms_form_id",value:"uagb-form-"+o})),l&&"v2"===f&&k&&g&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"g-recaptcha uagb-forms-field-set","data-sitekey":k}),m.a.createElement("div",{className:"uagb-form-reacaptcha-error-"+o})),m.a.createElement("div",{className:"uagb-forms-main-submit-button-wrap wp-block-button"},m.a.createElement("button",{onClick:w,className:"uagb-forms-main-submit-button wp-block-button__link"},m.a.createElement(_.RichText,{tagName:"div",placeholder:Object(s.__)("Submit","ultimate-addons-for-gutenberg"),value:i,onChange:e=>n({submitButtonText:e}),className:"uagb-forms-main-submit-button-text",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]}))))))};a.default=m.a.memo(k)}}]);