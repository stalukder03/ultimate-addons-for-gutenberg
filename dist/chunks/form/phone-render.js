(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[38],{364:function(e,t,n){"use strict";var a=n(16),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,".uagb-forms-phone-wrap .uagb-form-phone-country-editor {\n  line-height: normal; }\n",""]),t.a=r},600:function(e,t,n){"use strict";n.r(t);var a,r=n(3),u=n.n(r),o=n(130),i=n(1),l=n.n(i),c=n(2),s=n(15),m=n.n(s),p=n(364),d=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=p.a.locals||{},b.use=function(){return d++||(a=m()(p.a,g)),b},b.unuse=function(){d>0&&!--d&&(a(),a=null)};var f=b,h=n(5),_=n(4),v=function(e){Object(i.useLayoutEffect)((function(){return f.use(),function(){f.unuse()}}),[]);var t,n=e=e.parentProps,a=n.attributes,r=n.setAttributes,s=n.isSelected,m=a.block_id,p=a.phoneRequired,d=a.phoneName,g=a.pattern;t=""!=g?l.a.createElement("input",{type:"tel",placeholder:b,pattern:g,required:p,className:"uagb-forms-phone-input uagb-forms-input",name:m}):l.a.createElement("input",{type:"tel",required:p,className:"uagb-forms-phone-input uagb-forms-input",name:m});var b="";"[0-9]{3}-[0-9]{2}-[0-9]{3}"==g?b=Object(c.__)("123-45-678","ultimate-addons-for-gutenberg"):"[0-9]{3}-[0-9]{3}-[0-9]{4}"==g&&(b=Object(c.__)("123-456-6789","ultimate-addons-for-gutenberg"));var v=p?Object(c.__)("required","ultimate-addons-for-gutenberg"):"";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:u()("uagb-forms-phone-wrap","uagb-forms-field-set","uagb-block-".concat(m))},s&&l.a.createElement("div",{className:"uagb-forms-required-wrap"},l.a.createElement(h.ToggleControl,{label:Object(c.__)("Required","ultimate-addons-for-gutenberg"),checked:p,onChange:function(){return r({phoneRequired:!p})}})),l.a.createElement(_.RichText,{tagName:"div",placeholder:Object(c.__)("Phone Name","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return r({phoneName:e})},className:"uagb-forms-phone-label ".concat(v," uagb-forms-input-label"),multiline:!1,id:m}),l.a.createElement("select",{className:"uagb-forms-input uagb-form-phone-country uagb-form-phone-country-editor",id:"uagb-form-country-".concat(m),name:"".concat(d,"[]")},o.a.map((function(e,t){return l.a.createElement("option",{value:e.props.value,key:t},e.props.children)}))),t))};t.default=l.a.memo(v)}}]);