(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[57],{232:function(e,a,t){"use strict";var n=t(15),o=t.n(n)()((function(e){return e[1]}));o.push([e.i,".block-editor-block-list__block .uagb-google-map__wrap {\n  padding: 25px; }\n",""]),a.a=o},469:function(e,a,t){"use strict";t.r(a);var n,o=t(0),s=t.n(o),u=t(3),l=t.n(u),r=t(1),g=t(14),i=t.n(g),c=t(232),p=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=c.a.locals||{},d.use=function(){return p++||(n=i()(c.a,b)),d},d.unuse=function(){p>0&&!--p&&(n(),n=null)};var _=d;const m=e=>{Object(o.useLayoutEffect)(()=>(_.use(),()=>{_.unuse()}),[]),e=e.parentProps;const{className:a,attributes:{height:t,zoom:n,address:u,language:g}}=e,i=encodeURI(u),c=g||"en",p=`https://www.google.com/maps/embed/v1/place?key=${wp.uagb_google_api_key}&q=${i}&zoom=${n}&language=${c}`;return s.a.createElement("div",{className:l()(a,"uagb-google-map__wrap","uagb-block-"+e.clientId.substr(0,8))},s.a.createElement("iframe",{className:"uagb-google-map__iframe",title:Object(r.__)("Google Map for ","ultimate-addons-for-gutenberg")+u,src:p,style:{height:t}}))};a.default=s.a.memo(m)}}]);