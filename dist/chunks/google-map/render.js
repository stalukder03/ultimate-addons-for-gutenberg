(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[43],{277:function(e,a,t){"use strict";var n=t(11),o=t.n(n)()((function(e){return e[1]}));o.push([e.i,".block-editor-block-list__block .uagb-google-map__wrap {\n  padding: 25px; }\n",""]),a.a=o},407:function(e,a,t){"use strict";t.r(a);var n,o=t(0),u=t.n(o),c=t(2),s=t.n(c),r=t(1),l=t(10),i=t.n(l),g=t(277),p=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=g.a.locals||{},d.use=function(){return p++||(n=i()(g.a,b)),d},d.unuse=function(){p>0&&!--p&&(n(),n=null)};var _=d,m=function(e){Object(o.useLayoutEffect)((function(){return _.use(),function(){_.unuse()}}),[]);var a=e=e.parentProps,t=a.className,n=a.attributes,c=n.height,l=n.zoom,i=n.address,g=n.language,p=encodeURI(i),b=g||"en",d="https://www.google.com/maps/embed/v1/place?key=".concat(wp.uagb_google_api_key,"&q=").concat(p,"&zoom=").concat(l,"&language=").concat(b);return u.a.createElement("div",{className:s()(t,"uagb-google-map__wrap","uagb-block-".concat(e.clientId.substr(0,8)))},u.a.createElement("iframe",{className:"uagb-google-map__iframe",title:Object(r.__)("Google Map for ","ultimate-addons-for-gutenberg")+i,src:d,style:{height:c}}))};a.default=u.a.memo(m)}}]);