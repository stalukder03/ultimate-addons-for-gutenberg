(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[15],{315:function(e,n,t){"use strict";var a=t(10),o=t.n(a)()((function(e){return e[1]}));o.push([e.i,".uagb-lottie_upload_wrap {\n  padding: 50px;\n  background: #eee; }\n\n.uagb-lottie_upload_wrap-controller .components-placeholder {\n  box-shadow: none; }\n\n.uagb-show-notice {\n  padding: 20px;\n  background: #eee; }\n\n.uagb-lottie__center {\n  margin: 0 auto; }\n\n.uagb-lottie__right {\n  margin-left: auto; }\n\n.uagb-lottie__left {\n  margin-right: auto; }\n",""]),n.a=o},340:function(e,n,t){"use strict";t.r(n);var a,o=t(0),r=t.n(o),i=t(2),u=t.n(i),l=t(11),c=t(265),s=t.n(c),p=t(9),d=t.n(p),g=t(315),b=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=g.a.locals||{},_.use=function(){return b++||(a=d()(g.a,f)),_},_.unuse=function(){b>0&&!--b&&(a(),a=null)};var m=_,w=function(e){Object(o.useLayoutEffect)((function(){return m.use(),function(){m.unuse()}}),[]);var n=e.lottieplayer,t=e=e.parentProps,a=t.className,i=t.attributes,c=i.loop,p=i.speed,d=i.reverse,g=i.lottieURl,b=i.playOn,f=i.align,_=function(){n.current.anim.play()},w=d&&c?-1:1,h=!0;return"none"!==b&&"scroll"!==b&&void 0!==b||(h=!1),r.a.createElement("div",{className:u()(a,"uagb-block-".concat(e.clientId.substr(0,8)),"uagb-lottie__outer-wrap","uagb-lottie__".concat(f)),onMouseEnter:"hover"===b?_:function(){return h=!0},onMouseLeave:"hover"===b?function(){n.current.anim.stop()}:function(){return h=!0},onClick:"click"===b?_:function(){return h=!0}},r.a.createElement(o.Suspense,{fallback:Object(l.a)()},r.a.createElement(s.a,{key:g,ref:n,options:{loop:c,path:g,rendererSettings:{preserveAspectRatio:"xMidYMid",className:"uagb-lottie-inner-wrap"}},isStopped:h,speed:p,isClickToPauseDisabled:!0,direction:w})))};n.default=r.a.memo(w)}}]);