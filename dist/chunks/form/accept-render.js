(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[26],{362:function(e,a,t){"use strict";var n=t(15),r=t.n(n)()((function(e){return e[1]}));r.push([e.i,".uagb-forms-editor-privacy-link .components-base-control__help {\n  color: #f00; }\n",""]),a.a=r},598:function(e,a,t){"use strict";t.r(a);var n,r=t(3),c=t.n(r),o=t(1),u=t.n(o),l=t(2),s=t(14),i=t.n(s),b=t(362),m=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=b.a.locals||{},g.use=function(){return m++||(n=i()(b.a,f)),g},g.unuse=function(){m>0&&!--m&&(n(),n=null)};var d=g,p=function(e){Object(o.useLayoutEffect)((function(){return d.use(),function(){d.unuse()}}),[]);var a=(e=e.parentProps).attributes,t=a.block_id,n=a.acceptRequired,r=a.acceptText,s=a.showLink,i=a.linkLabel,b=a.link,m=a.linkInNewTab,f=n?Object(l.__)("required","ultimate-addons-for-gutenberg"):"",g=m?Object(l.__)("_blank","ultimate-addons-for-gutenberg"):Object(l.__)("_self","ultimate-addons-for-gutenberg");return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:c()("uagb-forms-accept-wrap","uagb-forms-field-set","uagb-block-".concat(t))},s&&u.a.createElement("div",{className:"uagb-forms-accept-privacy-link"},u.a.createElement("a",{href:b,target:g,rel:"noopener noreferrer"}," ",i," ")),u.a.createElement("input",{type:"checkbox",id:"uagb-forms-accept-".concat(t),className:"uagb-forms-checkbox",name:t,required:n,value:"Agree"}),u.a.createElement("label",{name:t,htmlFor:"uagb-forms-accept-".concat(t),className:"uagb-forms-accept-label ".concat(f)},r),u.a.createElement("br",null)))};a.default=u.a.memo(p)}}]);