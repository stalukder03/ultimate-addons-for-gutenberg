(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[106],{307:function(e,a,t){"use strict";var n=t(14),l=t.n(n)()((function(e){return e[1]}));l.push([e.i,".uagb-tax-not-available {\n  padding: 10px;\n  border: 1px solid;\n  text-align: center; }\n\n.uagb-layout-list .uagb-list-wrap {\n  margin: 0; }\n\n.uagb-list-display-style-group {\n  margin-bottom: 20px !important; }\n",""]),a.a=l},553:function(e,a,t){"use strict";t.r(a);var n,l=t(3),s=t.n(l),r=t(0),i=t.n(r),u=t(13),o=t.n(u),c=t(307),m=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=c.a.locals||{},b.use=function(){return m++||(n=o()(c.a,g)),b},b.unuse=function(){m>0&&!--m&&(n(),n=null)};var d=b,p=t(56),y=t(10);const x=e=>{Object(r.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]),e=e.parentProps;const a=Object(y.a)(),{attributes:t,categoriesList:n}=e,{isPreview:l,layout:u,seperatorStyle:o,noTaxDisplaytext:c,showCount:m,listDisplayStyle:g,showhierarchy:b,titleTag:x}=t;let E;"grid"===u?E=x||"h4":"list"===u&&(E=x||"div");const h=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/taxonomy-list.png";return l?i.a.createElement("img",{width:"100%",src:h,alt:""}):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:s()("uagb-taxonomy__outer-wrap","uagb-editor-preview-mode-"+a.toLowerCase(),"uagb-layout-"+u,"uagb-block-"+e.clientId.substr(0,8))},"grid"===u&&n.map((e,a)=>i.a.createElement("div",{className:"uagb-taxomony-box",key:a},i.a.createElement("a",{className:"uagb-tax-link",href:e.link},i.a.createElement(E,{className:"uagb-tax-title",dangerouslySetInnerHTML:{__html:e.name}}),i.a.createElement("div",{className:"uagb-taxonomy-count"},m&&i.a.createElement(i.a.Fragment,null,e.count," ",e.count>"1"?e.singular_name+"s":e.singular_name))))),"list"===u&&"list"===g&&i.a.createElement("ul",{className:"uagb-list-wrap"},n.map((e,a)=>i.a.createElement("li",{className:"uagb-tax-list",key:a},i.a.createElement(E,{className:"uagb-tax-link-wrap"},i.a.createElement("a",{className:"uagb-tax-link",href:e.link,dangerouslySetInnerHTML:{__html:e.name}}),m&&` (${e.count})`,b&&null!==e.children&&i.a.createElement("ul",{className:"uagb-taxonomy-list-children"},Object.keys(e.children).map((function(a,t){return i.a.createElement("li",{className:"uagb-tax-list",key:t},i.a.createElement("a",{className:"uagb-tax-link",href:`${e.link}${e.children[a].slug}`},e.children[a].name),m&&i.a.createElement("span",null,` (${e.children[a].count})`))})))),"none"!==o&&i.a.createElement("div",{className:"uagb-tax-separator"})))),"list"===u&&"dropdown"===g&&i.a.createElement("select",{className:"uagb-list-dropdown-wrap"},n.map((e,a)=>i.a.createElement("option",{key:a,value:e.link},Object(p.decodeEntities)(e.name),m&&` (${e.count})`))),""===n&&i.a.createElement("div",{className:"uagb-tax-not-available"},c)))};a.default=i.a.memo(x)}}]);