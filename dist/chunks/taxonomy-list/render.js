(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[100],{356:function(a,e,t){"use strict";var n=t(18),l=t.n(n)()((function(a){return a[1]}));l.push([a.i,".uagb-tax-not-available {\n  padding: 10px;\n  border: 1px solid;\n  text-align: center; }\n\n.uagb-layout-list .uagb-list-wrap {\n  margin: 0; }\n\n.uagb-list-display-style-group {\n  margin-bottom: 20px !important; }\n",""]),e.a=l},591:function(a,e,t){"use strict";t.r(e);var n,l=t(4),s=t.n(l),r=t(1),i=t.n(r),u=t(17),c=t.n(u),o=t(356),m=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=o.a.locals||{},b.use=function(){return m++||(n=c()(o.a,g)),b},b.unuse=function(){m>0&&!--m&&(n(),n=null)};var d=b;const p=a=>{Object(r.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]),a=a.parentProps;const{attributes:e,categoriesList:t,deviceType:n}=a,{layout:l,seperatorStyle:u,noTaxDisplaytext:c,showCount:o,listDisplayStyle:m,showhierarchy:g,titleTag:b}=e;let p;return"grid"===l?p=b||"H4":"list"===l&&(p=b||"div"),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:s()("uagb-taxonomy__outer-wrap","uagb-editor-preview-mode-"+n.toLowerCase(),"uagb-block-"+a.clientId.substr(0,8))},i.a.createElement("div",{className:s()("uagb-taxonomy-wrap","uagb-layout-"+l)},"grid"===l&&t.map((a,e)=>i.a.createElement("div",{className:"uagb-taxomony-box",key:e},i.a.createElement("a",{className:"uagb-tax-link",href:a.link},i.a.createElement(p,{className:"uagb-tax-title",dangerouslySetInnerHTML:{__html:a.name}}),o&&i.a.createElement("div",{className:"uagb-tax-count"},a.count," ",a.count>"1"?a.singular_name+"s":a.singular_name)))),"list"===l&&"list"===m&&i.a.createElement("ul",{className:"uagb-list-wrap"},t.map((a,e)=>i.a.createElement("li",{className:"uagb-tax-list",key:e},i.a.createElement(p,{className:"uagb-tax-link-wrap"},i.a.createElement("a",{className:"uagb-tax-link",href:a.link,dangerouslySetInnerHTML:{__html:a.name}}),o&&i.a.createElement("span",{className:"uagb-tax-list-count"},` (${a.count})`),g&&null!==a.children&&i.a.createElement("ul",{className:"uagb-taxonomy-list-children"},Object.keys(a.children).map((function(e,t){return i.a.createElement("li",{className:"uagb-tax-list",key:t},i.a.createElement("a",{className:"uagb-tax-link",href:`${a.link}${a.children[e].slug}`},a.children[e].name),o&&i.a.createElement("span",null,` (${a.children[e].count})`))})))),"none"!==u&&i.a.createElement("div",{className:"uagb-tax-separator-wrap"},i.a.createElement("div",{className:"uagb-tax-separator"}))))),"list"===l&&"dropdown"===m&&i.a.createElement("select",{className:"uagb-list-dropdown-wrap"},t.map((a,e)=>i.a.createElement("option",{key:e,value:a.link},a.name,o&&` (${a.count})`)))),""===t&&i.a.createElement("div",{className:"uagb-tax-not-available"},c)))};e.default=i.a.memo(p)}}]);