(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[57],{305:function(e,a,t){"use strict";var n=t(15),o=t.n(n)()((function(e){return e[1]}));o.push([e.i,".block-editor-block-list__block .uagb-google-map__wrap {\n  padding: 25px; }\n",""]),a.a=o},552:function(e,a,t){"use strict";t.r(a);var n,o=t(0),s=t.n(o),u=t(3),l=t.n(u),i=t(1),r=t(14),g=t.n(r),c=t(305),m=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=c.a.locals||{},b.use=function(){return m++||(n=g()(c.a,p)),b},b.unuse=function(){m>0&&!--m&&(n(),n=null)};var _=b;const d=e=>{Object(o.useLayoutEffect)(()=>(_.use(),()=>{_.unuse()}),[]),e=e.parentProps;const{className:a,attributes:{isPreview:t,height:n,zoom:u,address:r,language:g}}=e,c=encodeURI(r),m=g||"en",p=`https://www.google.com/maps/embed/v1/place?key=${wp.uagb_google_api_key}&q=${c}&zoom=${u}&language=${m}`,b=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/gmap.png";return t?s.a.createElement("img",{width:"100%",src:b,alt:""}):s.a.createElement("div",{className:l()(a,"uagb-google-map__wrap","uagb-block-"+e.clientId.substr(0,8))},s.a.createElement("iframe",{className:"uagb-google-map__iframe",title:Object(i.__)("Google Map for ","ultimate-addons-for-gutenberg")+r,src:p,style:{height:n}}))};a.default=s.a.memo(d)}}]);