(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[67],{322:function(e,n,t){"use strict";var a=t(16),o=t.n(a)()((function(e){return e[1]}));o.push([e.i,".uagb-lottie_upload_wrap {\n  padding: 50px;\n  background: #eee; }\n\n.uagb-lottie_upload_wrap-controller .components-placeholder {\n  box-shadow: none; }\n\n.uagb-show-notice {\n  padding: 20px;\n  background: #eee; }\n\n.uagb-lottie__center {\n  margin: 0 auto; }\n\n.uagb-lottie__right {\n  margin-left: auto; }\n\n.uagb-lottie__left {\n  margin-right: auto; }\n",""]),n.a=o},557:function(e,n,t){"use strict";t.r(n);var a,o=t(1),r=t.n(o),i=t(3),l=t.n(i),s=t(10),u=t(272),c=t.n(u),p=t(15),d=t.n(p),g=t(322),b=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return b++||(a=d()(g.a,_)),m},m.unuse=function(){b>0&&!--b&&(a(),a=null)};var f=m;const w=e=>{Object(o.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]);const{lottieplayer:n}=e;e=e.parentProps;const{className:t,attributes:a}=e,{loop:i,speed:u,reverse:p,lottieURl:d,playOn:g,align:b}=a,_=()=>{n.current.anim.play()},m=p&&i?-1:1;let w=!0;return"none"!==g&&"scroll"!==g&&void 0!==g||(w=!1),r.a.createElement("div",{className:l()(t,"uagb-block-"+e.clientId.substr(0,8),"uagb-lottie__outer-wrap","uagb-lottie__"+b),onMouseEnter:"hover"===g?_:()=>w=!0,onMouseLeave:"hover"===g?()=>{n.current.anim.stop()}:()=>w=!0,onClick:"click"===g?_:()=>w=!0},r.a.createElement(o.Suspense,{fallback:Object(s.a)()},r.a.createElement(c.a,{key:d,ref:n,options:{loop:i,path:d,rendererSettings:{preserveAspectRatio:"xMidYMid",className:"uagb-lottie-inner-wrap"}},isStopped:w,speed:u,isClickToPauseDisabled:!0,direction:m})))};n.default=r.a.memo(w)}}]);