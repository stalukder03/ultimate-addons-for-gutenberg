(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[41],{283:function(e,t,n){"use strict";var a=n(14),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,".editor-styles-wrapper .uagb-forms-phone-wrap .uagb-form-phone-country-editor {\n  line-height: normal; }\n  .editor-styles-wrapper .uagb-forms-phone-wrap .uagb-form-phone-country-editor .components-input-control__backdrop {\n    border: none; }\n\n.editor-styles-wrapper .uagb-forms-phone-wrap .components-base-control {\n  width: 30%; }\n\n.editor-styles-wrapper .uagb-forms-phone-wrap .uagb-forms-phone-input {\n  width: 70%; }\n",""]),t.a=o},524:function(e,t,n){"use strict";n.r(t);var a,o=n(3),r=n.n(o),u=n(139),s=n(0),l=n.n(s),p=n(1),i=n(13),c=n.n(i),m=n(283),d=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=m.a.locals||{},g.use=function(){return d++||(a=c()(m.a,b)),g},g.unuse=function(){d>0&&!--d&&(a(),a=null)};var f=g,h=n(6),_=n(4);const w=e=>{Object(s.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]),e=e.parentProps;const{attributes:t,setAttributes:n,isSelected:a}=e,{block_id:o,phoneRequired:i,phoneName:c,pattern:m,selectPhoneCode:d,autocomplete:b}=t;let g="",w="";"[0-9]{3}-?[0-9]{2}-?[0-9]{3}"===m?w=Object(p.__)("123-45-678","ultimate-addons-for-gutenberg"):"[0-9]{3}-?[0-9]{3}-?[0-9]{4}"===m?w=Object(p.__)("123-456-7890","ultimate-addons-for-gutenberg"):"[0-9]{3}s?[0-9]{3}s?[0-9]{4}"===m&&(w=Object(p.__)("123 456 7890","ultimate-addons-for-gutenberg")),g=""!==m?l.a.createElement("input",{type:"tel",placeholder:w,pattern:m,required:i,className:"uagb-forms-phone-input uagb-forms-input",name:o,autoComplete:b}):l.a.createElement("input",{type:"tel",required:i,className:"uagb-forms-phone-input uagb-forms-input",name:o,autoComplete:b});const y=[];u.a.map((e,t)=>y.push({value:e.props.value,label:e.props.children}));const v=i?Object(p.__)("required","ultimate-addons-for-gutenberg"):"";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:r()("uagb-forms-phone-wrap","uagb-forms-field-set","uagb-block-"+o)},a&&l.a.createElement("div",{className:"uagb-forms-required-wrap"},l.a.createElement(h.ToggleControl,{label:Object(p.__)("Required","ultimate-addons-for-gutenberg"),checked:i,onChange:()=>n({phoneRequired:!i})})),l.a.createElement(_.RichText,{tagName:"div",placeholder:Object(p.__)("Phone Name","ultimate-addons-for-gutenberg"),value:c,onChange:e=>n({phoneName:e}),className:`uagb-forms-phone-label ${v} uagb-forms-input-label`,multiline:!1,id:o}),l.a.createElement("div",{className:"uagb-forms-phone-flex"},l.a.createElement(h.SelectControl,{className:"uagb-forms-input uagb-form-phone-country uagb-form-phone-country-editor",options:y,value:d,onChange:e=>n({selectPhoneCode:e})}),g)))};t.default=l.a.memo(w)}}]);