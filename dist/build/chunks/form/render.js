(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{330:function(e,a,t){"use strict";t.r(a);var r=t(2),o=t.n(r),m=t(1),n=t.n(m),c=t(0),u=["uagb/forms-name","uagb/forms-email","uagb/forms-hidden","uagb/forms-phone","uagb/forms-textarea","uagb/forms-url","uagb/forms-select","uagb/forms-radio","uagb/forms-checkbox","uagb/forms-toggle","uagb/forms-date","uagb/forms-accept"],s=wp.blockEditor,l=s.InnerBlocks,b=s.RichText,i=function(e){var a=e=e.parentProps,t=a.attributes,r=a.setAttributes,s=t.block_id,i=t.submitButtonText,f=t.formLabel,g=t.buttonSize,d=t.reCaptchaEnable,p=t.reCaptchaType,h=t.reCaptchaSecretKeyV2,E=t.reCaptchaSiteKeyV2,v=Object(m.useCallback)((function(e){e.preventDefault()}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:o()("uagb-forms__outer-wrap","uagb-block-".concat(s),"uagb-forms__".concat(g,"-btn"))},n.a.createElement("form",{className:"uagb-forms-main-form",name:"uagb-form-".concat(s)},n.a.createElement(l,{allowedBlocks:u}),n.a.createElement("div",{className:"uagb-forms-form-hidden-data"},d&&n.a.createElement("input",{type:"hidden",id:"g-recaptcha-response",className:"uagb-forms-recaptcha"}),n.a.createElement("input",{type:"hidden",name:"uagb_forms_form_label",value:f}),n.a.createElement("input",{type:"hidden",name:"uagb_forms_form_id",value:"uagb-form-".concat(s)})),d&&"v2"===p&&E&&h&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"g-recaptcha uagb-forms-field-set","data-sitekey":E}),n.a.createElement("div",{className:"uagb-form-reacaptcha-error-".concat(s)})),n.a.createElement("div",{className:"uagb-forms-main-submit-button-wrap"},n.a.createElement("button",{onClick:v,className:"uagb-forms-main-submit-button"},n.a.createElement(b,{tagName:"div",placeholder:Object(c.__)("Submit","ultimate-addons-for-gutenberg"),value:i,onChange:function(e){return r({submitButtonText:e})},className:"uagb-forms-main-submit-button-text",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]}))))))};a.default=n.a.memo(i)}}]);