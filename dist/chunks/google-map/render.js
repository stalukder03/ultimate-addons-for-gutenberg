(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[57],{304:function(e,a,t){"use strict";var n=t(14),o=t.n(n)()((function(e){return e[1]}));o.push([e.i,".block-editor-block-list__block .uagb-google-map__wrap {\n  padding: 25px; }\n",""]),a.a=o},551:function(e,a,t){"use strict";t.r(a);var n,o=t(0),s=t.n(o),u=t(3),l=t.n(u),g=t(1),i=t(13),r=t.n(i),c=t(304),b=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=c.a.locals||{},p.use=function(){return b++||(n=r()(c.a,m)),p},p.unuse=function(){b>0&&!--b&&(n(),n=null)};var _=p,d=t(17);const f=e=>{Object(o.useLayoutEffect)(()=>(_.use(),()=>{_.unuse()}),[]);const a=(e=e.parentProps).name.replace("uagb/",""),{className:t,attributes:{isPreview:n,height:u,zoom:i,address:r,language:c}}=e,b=encodeURI(r),m=c||"en",p=`https://www.google.com/maps/embed/v1/place?key=${wp.uagb_google_api_key}&q=${b}&zoom=${Object(d.a)(i,"zoom",a)}&language=${m}`,f=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/gmap.png";return n?s.a.createElement("img",{width:"100%",src:f,alt:""}):s.a.createElement("div",{className:l()(t,"uagb-google-map__wrap","uagb-block-"+e.clientId.substr(0,8))},s.a.createElement("iframe",{className:"uagb-google-map__iframe",title:Object(g.__)("Google Map for ","ultimate-addons-for-gutenberg")+r,src:p,style:{height:Object(d.a)(u,"height",a)}}))};a.default=s.a.memo(f)}}]);