(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[73],{312:function(e,t,n){"use strict";var o=n(15),a=n.n(o)()((function(e){return e[1]}));a.push([e.i,".uagb-lottie_upload_wrap {\n  padding: 50px;\n  background: #eee; }\n\n.uagb-lottie_upload_wrap-controller .components-placeholder {\n  box-shadow: none; }\n\n.uagb-show-notice {\n  padding: 20px;\n  background: #eee; }\n\n.uagb-lottie__center {\n  margin: 0 auto; }\n\n.uagb-lottie__right {\n  margin-left: auto; }\n\n.uagb-lottie__left {\n  margin-right: auto; }\n\n.block-editor .block-editor__container .block-editor-media-flow__url-input .block-editor-link-control {\n  width: auto; }\n",""]),t.a=a},558:function(e,t,n){"use strict";n.r(t);var o,a=n(0),r=n.n(a),l=n(3),u=n.n(l),i=n(10),c=n(311),s=n(14),p=n.n(s),d=n(312),b=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=d.a.locals||{},_.use=function(){return b++||(o=p()(d.a,g)),_},_.unuse=function(){b>0&&!--b&&(o(),o=null)};var m=_,f=n(4),w=n(11);const k=e=>{Object(a.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]);const{lottieplayer:t}=e,n=Object(w.a)(),o=(e=e.parentProps).name.replace("uagb/",""),{className:l,attributes:s}=e,{loop:p,speed:d,reverse:b,lottieURl:g,playOn:_,align:k}=s,h=b&&p?-1:1,y=()=>{t.current.setPlayerDirection(h),t.current.play()},v=()=>{t.current.stop()};return r.a.createElement("div",{className:u()(l,"uagb-block-"+e.clientId.substr(0,8),"uagb-lottie__outer-wrap","uagb-lottie__"+k,"uagb-editor-preview-mode-"+n.toLowerCase()),onMouseEnter:"hover"===_?y:v,onMouseLeave:"hover"===_?()=>{t.current.setPlayerDirection(h),t.current.stop()}:v,onClick:"click"===_?y:v},r.a.createElement(a.Suspense,{fallback:Object(i.a)()},r.a.createElement(c.a,{autoplay:!0,ref:t,src:g,loop:p,speed:Object(f.a)(d,"speed",o)})))};t.default=r.a.memo(k)}}]);