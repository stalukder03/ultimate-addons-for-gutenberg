(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[47],{373:function(e,a,t){"use strict";var r=t(19),n=t.n(r)()((function(e){return e[1]}));n.push([e.i,'.uagb-forms__outer-wrap {\n  border: 2px solid #007cba;\n  padding: 25px; }\n  .uagb-forms__outer-wrap .uagb-forms-main-form .uagb-forms-form-hidden-data {\n    display: none; }\n  .uagb-forms__outer-wrap .uagb-forms-main-form .uagb-forms-required-wrap {\n    float: right; }\n  .uagb-forms__outer-wrap .uagb-forms-main-form input[type="checkbox"],\n  .uagb-forms__outer-wrap .uagb-forms-main-form input[type="radio"] {\n    margin-top: 5px;\n    margin-bottom: 5px; }\n  .uagb-forms__outer-wrap .block-editor-block-list__block {\n    padding: 0;\n    margin: 0; }\n\n.uagb-form-notice {\n  padding: 8px 10px;\n  background-color: #fff8e5;\n  border-left: 5px solid #ffb901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n\nselect.uagb-forms-select-box.uagb-forms-input {\n  max-width: 100%; }\n\n.uagb-form-emailto {\n  margin-top: 10px; }\n\n.uagb-forms-recaptcha-button {\n  display: block;\n  width: 50%;\n  margin-bottom: 15px; }\n\n[data-type="uagb/forms"] .block-editor-block-variation-picker__variations {\n  display: flex;\n  justify-content: center; }\n\n[data-type="uagb/forms"] .block-editor-block-variation-picker__variation.components-button.has-icon {\n  width: 90px; }\n',""]),a.a=n},614:function(e,a,t){"use strict";t.r(a);var r,n=t(4),o=t.n(n),u=t(1),m=t.n(u),s=t(2),i=t(18),b=t.n(i),c=t(373),l=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=c.a.locals||{},g.use=function(){return l++||(r=b()(c.a,f)),g},g.unuse=function(){l>0&&!--l&&(r(),r=null)};var p=g,d=t(5);const _=["uagb/forms-name","uagb/forms-email","uagb/forms-hidden","uagb/forms-phone","uagb/forms-textarea","uagb/forms-url","uagb/forms-select","uagb/forms-radio","uagb/forms-checkbox","uagb/forms-toggle","uagb/forms-date","uagb/forms-accept"],h=e=>{Object(u.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),e=e.parentProps;const{attributes:a,setAttributes:t,deviceType:r}=e,{block_id:n,submitButtonText:i,formLabel:b,buttonSize:c,reCaptchaEnable:l,reCaptchaType:f,reCaptchaSecretKeyV2:g,reCaptchaSiteKeyV2:h}=a,k=Object(u.useCallback)(e=>{e.preventDefault()});return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:o()("uagb-forms__outer-wrap","uagb-block-"+n,`uagb-forms__${c}-btn`,"uagb-editor-preview-mode-"+r.toLowerCase())},m.a.createElement("form",{className:"uagb-forms-main-form",name:"uagb-form-"+n},m.a.createElement(d.InnerBlocks,{allowedBlocks:_}),m.a.createElement("div",{className:"uagb-forms-form-hidden-data"},l&&m.a.createElement("input",{type:"hidden",id:"g-recaptcha-response",className:"uagb-forms-recaptcha"}),m.a.createElement("input",{type:"hidden",name:"uagb_forms_form_label",value:b}),m.a.createElement("input",{type:"hidden",name:"uagb_forms_form_id",value:"uagb-form-"+n})),l&&"v2"===f&&h&&g&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"g-recaptcha uagb-forms-field-set","data-sitekey":h}),m.a.createElement("div",{className:"uagb-form-reacaptcha-error-"+n})),m.a.createElement("div",{className:"uagb-forms-main-submit-button-wrap"},m.a.createElement("button",{onClick:k,className:"uagb-forms-main-submit-button"},m.a.createElement(d.RichText,{tagName:"div",placeholder:Object(s.__)("Submit","ultimate-addons-for-gutenberg"),value:i,onChange:e=>t({submitButtonText:e}),className:"uagb-forms-main-submit-button-text",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]}))))))};a.default=m.a.memo(h)}}]);