(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[39],{373:function(e,t,a){"use strict";var n=a(18),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,".uagb-forms-phone-wrap .uagb-form-phone-country-editor {\n  line-height: normal; }\n",""]),t.a=r},609:function(e,t,a){"use strict";a.r(t);var n,r=a(4),o=a.n(r),u=a(132),l=a(1),s=a.n(l),i=a(2),c=a(17),m=a.n(c),p=a(373),d=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=p.a.locals||{},b.use=function(){return d++||(n=m()(p.a,g)),b},b.unuse=function(){d>0&&!--d&&(n(),n=null)};var f=b,h=a(6),_=a(5);const y=e=>{Object(l.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]),e=e.parentProps;const{attributes:t,setAttributes:a,isSelected:n}=e,{block_id:r,phoneRequired:c,phoneName:m,pattern:p}=t;let d="",g="";"[0-9]{3}-[0-9]{2}-[0-9]{3}"===p?g=Object(i.__)("123-45-678","ultimate-addons-for-gutenberg"):"[0-9]{3}-[0-9]{3}-[0-9]{4}"===p&&(g=Object(i.__)("123-456-6789","ultimate-addons-for-gutenberg")),d=""!==p?s.a.createElement("input",{type:"tel",placeholder:g,pattern:p,required:c,className:"uagb-forms-phone-input uagb-forms-input",name:r}):s.a.createElement("input",{type:"tel",required:c,className:"uagb-forms-phone-input uagb-forms-input",name:r});const b=c?Object(i.__)("required","ultimate-addons-for-gutenberg"):"";return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:o()("uagb-forms-phone-wrap","uagb-forms-field-set","uagb-block-"+r)},n&&s.a.createElement("div",{className:"uagb-forms-required-wrap"},s.a.createElement(h.ToggleControl,{label:Object(i.__)("Required","ultimate-addons-for-gutenberg"),checked:c,onChange:()=>a({phoneRequired:!c})})),s.a.createElement(_.RichText,{tagName:"div",placeholder:Object(i.__)("Phone Name","ultimate-addons-for-gutenberg"),value:m,onChange:e=>a({phoneName:e}),className:`uagb-forms-phone-label ${b} uagb-forms-input-label`,multiline:!1,id:r}),s.a.createElement("select",{className:"uagb-forms-input uagb-form-phone-country uagb-form-phone-country-editor",id:"uagb-form-country-"+r,name:m+"[]"},u.a.map((e,t)=>s.a.createElement("option",{value:e.props.value,key:t},e.props.children))),d))};t.default=s.a.memo(y)}}]);