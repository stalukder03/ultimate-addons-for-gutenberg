(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[79],{271:function(e,t,a){"use strict";var n=a(30),l=a.n(n),o=a(272),i=a.n(o),r=a(3);if(void 0===u)var u=[];const c=e=>{const[t,a]=Object(r.useState)([]);Object(r.useEffect)(()=>{c()},[]),Object(r.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&c()},[e]);const n=()=>{a({status:"loading"})},l=()=>{a({status:"active"})},o=()=>{a({status:"inactive"})},c=()=>{var t;u.includes(e.config.google.families[0])||(i.a.load({...e.config,loading:n,active:l,inactive:o}),t=e.config.google.families[0],u.includes(t)||u.push(t))},{children:s}=e;return s||null};c.propTypes={config:l.a.object.isRequired,children:l.a.element,onStatus:l.a.func.isRequired},c.defaultProps={onStatus:()=>{}},t.a=c},272:function(e,t,a){var n;!function(){function l(e,t,a){return e.call.apply(e.bind,arguments)}function o(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function s(e,t,a,n){if(t=e.c.createElement(t),a)for(var l in a)a.hasOwnProperty(l)&&("style"==l?t.style.cssText=a[l]:t.setAttribute(l,a[l]));return n&&t.appendChild(e.c.createTextNode(n)),t}function g(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),l=0;l<t.length;l+=1){for(var o=!1,i=0;i<n.length;i+=1)if(t[l]===n[i]){o=!0;break}o||n.push(t[l])}for(t=[],l=0;l<n.length;l+=1){for(o=!1,i=0;i<a.length;i+=1)if(n[l]===a[i]){o=!0;break}o||t.push(n[l])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function m(e,t){for(var a=e.className.split(/\s+/),n=0,l=a.length;n<l;n++)if(a[n]==t)return!0;return!1}function f(e,t,a){function n(){r&&l&&o&&(r(i),r=null)}t=s(e,"link",{rel:"stylesheet",href:t,media:"all"});var l=!1,o=!0,i=null,r=a||null;c?(t.onload=function(){l=!0,n()},t.onerror=function(){l=!0,i=Error("Stylesheet failed to load"),n()}):setTimeout((function(){l=!0,n()}),0),g(e,"head",t)}function p(e,t,a,n){var l=e.c.getElementsByTagName("head")[0];if(l){var o=s(e,"script",{src:t}),i=!1;return o.onload=o.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&l.removeChild(o))},l.appendChild(o),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),n||5e3),o}return null}function h(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function T(e){this.a=e||"-"}function C(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function O(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function j(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function E(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function x(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new T("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function B(e){if(e.g){var t=m(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),d(e.f,a,n)}w(e,"inactive")}function w(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,j(a)):e.h[t]())}function F(){this.c={}}function L(e,t){this.c=e,this.f=t,this.a=s(this.c,"span",{"aria-hidden":"true"},this.f)}function k(e){g(e.c,"body",e.a)}function P(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+O(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function H(e,t,a,n,l,o){this.g=e,this.j=t,this.a=n,this.c=a,this.f=l||3e3,this.h=o||void 0}function M(e,t,a,n,l,o,i){this.v=e,this.B=t,this.c=a,this.a=n,this.s=i||"BESbswy",this.f={},this.w=l||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new L(this.c,this.s),this.h=new L(this.c,this.s),this.j=new L(this.c,this.s),this.m=new L(this.c,this.s),e=P(e=new C(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=e,e=P(e=new C(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=e,e=P(e=new C("serif",j(this.a))),this.j.a.style.cssText=e,e=P(e=new C("sans-serif",j(this.a))),this.m.a.style.cssText=e,k(this.g),k(this.h),k(this.j),k(this.m)}T.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},H.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,l){!function o(){r()-a>=t.f?l():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+O(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(o,25)}),(function(){l()}))}()})),l=null,o=new Promise((function(e,a){l=setTimeout(a,t.f)}));Promise.race([o,n]).then((function(){l&&(clearTimeout(l),l=null),t.g(t.a)}),(function(){t.j(t.a)}))};var A={D:"serif",C:"sans-serif"},z=null;function U(){if(null===z){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);z=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return z}function R(e,t,a){for(var n in A)if(A.hasOwnProperty(n)&&t===e.f[A[n]]&&a===e.f[A[n]])return!0;return!1}function G(e,t){setTimeout(i((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function W(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}M.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,l=t.h.a.offsetWidth;(a=n===t.f.serif&&l===t.f["sans-serif"])||(a=U()&&R(t,n,l)),a?r()-t.A>=t.w?U()&&R(t,n,l)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?G(t,t.v):G(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):G(t,t.v)}(this)};var N=null;function I(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),w(e,"active")):B(e.a))}function D(e){this.j=e,this.a=new F,this.h=0,this.f=this.g=!0}function V(e,t,a,n,l){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=l||null,r=n||{};if(0===a.length&&o)B(t.a);else{t.f+=a.length,o&&(t.j=o);var u,c=[];for(u=0;u<a.length;u++){var s=a[u],g=r[s.c],b=t.a,m=s;if(b.g&&d(b.f,[b.a.c("wf",m.c,j(m).toString(),"loading")]),w(b,"fontloading",m),b=null,null===N)if(window.FontFace){m=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var f=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);N=m?42<parseInt(m[1],10):!f}else N=!1;b=N?new H(i(t.g,t),i(t.h,t),t.c,s,t.s,g):new M(i(t.g,t),i(t.h,t),t.c,s,t.s,e,g),c.push(b)}for(u=0;u<c.length;u++)c[u].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}W.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,j(e).toString(),"active")],[t.a.c("wf",e.c,j(e).toString(),"loading"),t.a.c("wf",e.c,j(e).toString(),"inactive")]),w(t,"fontactive",e),this.m=!0,I(this)},W.prototype.h=function(e){var t=this.a;if(t.g){var a=m(t.f,t.a.c("wf",e.c,j(e).toString(),"active")),n=[],l=[t.a.c("wf",e.c,j(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,j(e).toString(),"inactive")),d(t.f,n,l)}w(t,"fontinactive",e),I(this)},D.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],l=a.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),w(e,"loading")}(t),n=function(e,t,a){var n,l=[];for(n in t)if(t.hasOwnProperty(n)){var o=e.c[n];o&&l.push(o(t[n],a))}return l}(e.a,a,e.c);var o=new W(e.c,t,l);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){V(e,o,t,a,n)}))}(this,new x(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var l=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(l["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(l["__mti_fntLst"+a]){var n,o=l["__mti_fntLst"+a](),i=[];if(o)for(var r=0;r<o.length;r++){var u=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(n=o[r].fontStyle+o[r].fontWeight,i.push(new C(u,n))):i.push(new C(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,n=this.a.urls||[],l=this.a.families||[],o=this.a.testStrings||{},i=new h;for(t=0,a=n.length;t<a;t++)f(this.c,n[t],v(i));var r=[];for(t=0,a=l.length;t<a;t++)if((n=l[t].split(":"))[1])for(var u=n[1].split(","),c=0;c<u.length;c+=1)r.push(new C(n[0],u[c]));else r.push(new C(n[0]));_(i,(function(){e(r,o)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function le(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new h,a=this.c,n=new J(this.a.api,this.a.text),l=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var l=t[n].split(":");3==l.length&&e.f.push(l.pop());var o="";2==l.length&&""!=l[1]&&(o=":"),e.a.push(l.join(o))}}(n,l);var o=new X(l);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),l=n[0].replace(/\+/g," "),o=["n4"];if(2<=n.length){var i;if(i=[],r=n[1])for(var r,u=(r=r.split(",")).length,c=0;c<u;c++){var s;if((s=r[c]).match(/^[\w-]+$/))if(null==(g=ee.exec(s.toLowerCase())))s="";else{if(s=null==(s=g[2])||""==s?"n":Z[s],null==(g=g[1])||""==g)g="4";else var g=Y[g]||(isNaN(g)?"4":g.substr(0,1));s=[s,g].join("")}else s="";s&&i.push(s)}0<i.length&&(o=i),3==n.length&&(i=[],0<(n=(n=n[2])?n.split(","):i).length&&(n=Q[n[0]])&&(e.c[l]=n))}for(e.c[l]||(n=Q[l])&&(e.c[l]=n),n=0;n<o.length;n+=1)e.a.push(new C(l,o[n]))}}(o),f(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),_(t,(function(){e(o.a,o.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],l=0;l<t.length;l+=2)for(var o=t[l],i=t[l+1],r=0;r<i.length;r++)n.push(new C(o,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},le.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var l=0,o=a.fonts.length;l<o;++l){var i=a.fonts[l];n.a.push(new C(i.name,E("font-weight:"+i.weight+";font-style:"+i.style)))}e(n.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new D(window);oe.a.c.custom=function(e,t){return new $(t,e)},oe.a.c.fontdeck=function(e,t){return new le(t,e)},oe.a.c.monotype=function(e,t){return new q(t,e)},oe.a.c.typekit=function(e,t){return new ne(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(oe.load,oe)};void 0===(n=function(){return ie}.call(t,a,t,e))||(e.exports=n)}()},433:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(11),i=a(271),r=a(28),u=a(2),c=a(55),s=a(18),g=a(60),b=a(22),d=a(43),m=a(14),f=a(61),p=a(23),h=a(12),v=a(44),_=a(7),y=a(5),T=a(17);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const O=e=>{const{attributes:t,setAttributes:a,latestPosts:O,categoriesList:j,deviceType:S,taxonomyList:E}=e.parentProps,{displayPostTitle:x,displayPostDate:B,displayPostComment:w,displayPostExcerpt:F,displayPostAuthor:L,displayPostImage:k,displayPostTaxonomy:P,imgSize:H,imgPosition:M,displayPostLink:A,newTab:z,ctaText:U,borderWidth:R,borderStyle:G,borderColor:W,borderHColor:N,borderRadius:I,align:D,columns:V,tcolumns:q,mcolumns:$,order:J,orderBy:K,categories:X,postsToShow:Q,rowGap:Y,columnGap:Z,bgColor:ee,contentPaddingUnit:te,titleColor:ae,titleTag:ne,titleFontSize:le,titleFontSizeType:oe,titleFontSizeMobile:ie,titleFontSizeTablet:re,titleFontFamily:ue,titleFontWeight:ce,titleFontStyle:se,titleLineHeightType:ge,titleLineHeight:be,titleLineHeightTablet:de,titleLineHeightMobile:me,titleLoadGoogleFonts:fe,metaFontSize:pe,metaFontSizeType:he,metaFontSizeMobile:ve,metaFontSizeTablet:_e,metaFontFamily:ye,metaFontWeight:Te,metaFontStyle:Ce,metaLineHeightType:Oe,metaLineHeight:je,metaLineHeightTablet:Se,metaLineHeightMobile:Ee,metaLoadGoogleFonts:xe,excerptFontSize:Be,excerptFontSizeType:we,excerptFontSizeTablet:Fe,excerptFontSizeMobile:Le,excerptFontFamily:ke,excerptFontWeight:Pe,excerptFontStyle:He,excerptLineHeightType:Me,excerptLineHeight:Ae,excerptLineHeightTablet:ze,excerptLineHeightMobile:Ue,excerptLoadGoogleFonts:Re,ctaFontSize:Ge,ctaFontSizeType:We,ctaFontSizeTablet:Ne,ctaFontSizeMobile:Ie,ctaFontFamily:De,ctaFontWeight:Ve,ctaFontStyle:qe,ctaLineHeightType:$e,ctaLineHeight:Je,ctaLineHeightTablet:Ke,ctaLineHeightMobile:Xe,ctaLoadGoogleFonts:Qe,metaColor:Ye,excerptColor:Ze,ctaColor:et,ctaBgColor:tt,ctaHColor:at,ctaBgHColor:nt,imageBottomSpace:lt,titleBottomSpace:ot,metaBottomSpace:it,excerptBottomSpace:rt,excerptBottomSpaceUnit:ut,ctaBottomSpace:ct,equalHeight:st,excerptLength:gt,overlayOpacity:bt,bgOverlayColor:dt,linkBox:mt,postType:ft,taxonomyType:pt,postPagination:ht,pageLimit:vt,paginationColor:_t,paginationBgColor:yt,paginationActiveColor:Tt,paginationBgActiveColor:Ct,paginationLayout:Ot,paginationBorderSize:jt,paginationBorderRadius:St,paginationBorderColor:Et,paginationBorderActiveColor:xt,paginationSpacing:Bt,paginationSpacingUnit:wt,paginationAlignment:Ft,paginationPrevText:Lt,paginationNextText:kt,postDisplaytext:Pt,displayPostContentRadio:Ht,excludeCurrentPost:Mt,rowGapUnit:At,columnGapUnit:zt,imageBottomSpaceUnit:Ut,titleBottomSpaceUnit:Rt,metaBottomSpaceUnit:Gt,ctaBottomSpaceUnit:Wt,titleTransform:Nt,metaTransform:It,excerptTransform:Dt,ctaTransform:Vt,titleDecoration:qt,metaDecoration:$t,excerptDecoration:Jt,ctaDecoration:Kt,paddingBtnTop:Xt,paddingBtnBottom:Qt,paddingBtnLeft:Yt,paddingBtnRight:Zt,paddingBtnTopTablet:ea,paddingBtnRightTablet:ta,paddingBtnBottomTablet:aa,paddingBtnLeftTablet:na,paddingBtnTopMobile:la,paddingBtnRightMobile:oa,paddingBtnBottomMobile:ia,paddingBtnLeftMobile:ra,paddingBtnUnit:ua,mobilePaddingBtnUnit:ca,tabletPaddingBtnUnit:sa,spacingLink:ga,spacingLinkPadding:ba,paddingTop:da,paddingBottom:ma,paddingLeft:fa,paddingRight:pa,paddingTopTablet:ha,paddingRightTablet:va,paddingBottomTablet:_a,paddingLeftTablet:ya,paddingTopMobile:Ta,paddingRightMobile:Ca,paddingBottomMobile:Oa,paddingLeftMobile:ja,mobilePaddingUnit:Sa,tabletPaddingUnit:Ea}=t,xa=e=>{a({postPagination:e}),a({paginationMarkup:"empty"})},Ba=e=>{a({postsToShow:e}),a({paginationMarkup:"empty"})},wa=e=>{a({pageLimit:e}),a({paginationMarkup:"empty"})},Fa=e=>{a({paginationPrevText:e}),a({paginationMarkup:"empty"})},La=e=>{a({paginationNextText:e}),a({paginationMarkup:"empty"})},ka=[],Pa=[{value:"",label:Object(u.__)("All","ultimate-addons-for-gutenberg")}];let Ha,Ma,Aa,za;if(""!==E&&Object.keys(E).map(e=>ka.push({value:E[e].name,label:E[e].label})),""!==j&&Object.keys(j).map(e=>Pa.push({value:j[e].id,label:j[e].name})),!0===fe){const e={google:{families:[ue+(ce?":"+ce:"")]}};Ha=l.a.createElement(i.a,{config:e})}if(!0===xe){const e={google:{families:[ye+(Te?":"+Te:"")]}};Ma=l.a.createElement(i.a,{config:e})}if(!0===Re){const e={google:{families:[ke+(Pe?":"+Pe:"")]}};Aa=l.a.createElement(i.a,{config:e})}if(!0===Qe){const e={google:{families:[De+(Ve?":"+Ve:"")]}};za=l.a.createElement(i.a,{config:e})}const Ua=()=>l.a.createElement(y.InspectorControls,null,l.a.createElement(g.a,null,l.a.createElement(b.b,b.a.general,l.a.createElement(T.a,{title:Object(u.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(_.SelectControl,{label:Object(u.__)("Post Type","ultimate-addons-for-gutenberg"),value:ft,onChange:e=>(e=>{a({postType:e}),a({categories:""})})(e),options:uagb_blocks_info.post_types}),""!==E&&l.a.createElement(_.SelectControl,{label:Object(u.__)("Taxonomy","ultimate-addons-for-gutenberg"),value:pt,onChange:e=>(e=>{a({taxonomyType:e}),a({categories:""})})(e),options:ka}),""!=j&&l.a.createElement(l.a.Fragment,null,l.a.createElement(_.SelectControl,{label:E[pt].label,value:X,onChange:e=>a({categories:e}),options:Pa})),l.a.createElement(_.ToggleControl,{label:Object(u.__)("Exclude Current Post","ultimate-addons-for-gutenberg"),checked:Mt,onChange:()=>a({excludeCurrentPost:!Mt})}),l.a.createElement(m.a,{label:Object(u.__)("Posts Per Page","ultimate-addons-for-gutenberg"),setAttributes:a,value:Q,onChange:Ba,min:0,max:500,displayUnit:!1}),l.a.createElement(p.a,{setAttributes:a,label:Object(u.__)("Order By","ultimate-addons-for-gutenberg"),data:{value:K,label:"orderBy"},options:[{value:"date",label:Object(u.__)("Date","ultimate-addons-for-gutenberg")},{value:"title",label:Object(u.__)("Title","ultimate-addons-for-gutenberg")},{value:"rand",label:Object(u.__)("Random","ultimate-addons-for-gutenberg")},{value:"menu_order",label:Object(u.__)("Menu Order","ultimate-addons-for-gutenberg")}]}),l.a.createElement(p.a,{setAttributes:a,label:Object(u.__)("Order","ultimate-addons-for-gutenberg"),data:{value:J,label:"order"},options:[{value:"desc",label:Object(u.__)("Descending","ultimate-addons-for-gutenberg")},{value:"asc",label:Object(u.__)("Ascending","ultimate-addons-for-gutenberg")}]}),l.a.createElement(f.a,{label:Object(u.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:V,label:"columns"},tablet:{value:q,label:"tcolumns"},mobile:{value:$,label:"mcolumns"}},min:0,max:Ra?Math.min(8,O.length):8,displayUnit:!1,setAttributes:a}),l.a.createElement(_.ToggleControl,{label:Object(u.__)("Equal Height","ultimate-addons-for-gutenberg"),checked:st,onChange:()=>a({equalHeight:!st})}),l.a.createElement(_.ToggleControl,{label:Object(u.__)("Post Pagination","ultimate-addons-for-gutenberg"),checked:ht,onChange:xa}),!0===ht&&l.a.createElement(m.a,{label:Object(u.__)("Page Limit","ultimate-addons-for-gutenberg"),setAttributes:a,value:vt,onChange:wa,min:0,max:100,displayUnit:!1}),l.a.createElement("h2",null,Object(u.__)("If Posts Not Found","ultimate-addons-for-gutenberg")),l.a.createElement(_.TextControl,{autoComplete:"off",label:Object(u.__)("Display Message","ultimate-addons-for-gutenberg"),value:Pt,onChange:e=>a({postDisplaytext:e})})),(()=>{if(!0===ht)return l.a.createElement(T.a,{title:Object(u.__)("Pagination","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(p.a,{setAttributes:a,label:Object(u.__)("Pagination Layout","ultimate-addons-for-gutenberg"),data:{value:Ot,label:"paginationLayout"},className:"uagb-multi-button-alignment-control",options:[{value:"border",label:"Border"},{value:"filled",label:"Filled"}],showIcons:!1}),l.a.createElement(_.TextControl,{label:Object(u.__)("Previous Text","ultimate-addons-for-gutenberg"),value:Lt,onChange:Fa}),l.a.createElement(_.TextControl,{label:Object(u.__)("Next Text","ultimate-addons-for-gutenberg"),value:kt,onChange:La}))})(),l.a.createElement(T.a,{title:Object(u.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(_.ToggleControl,{label:Object(u.__)("Show Featured Image","ultimate-addons-for-gutenberg"),checked:k,onChange:()=>a({displayPostImage:!k})}),!0===k&&l.a.createElement(_.SelectControl,{label:Object(u.__)("Sizes","ultimate-addons-for-gutenberg"),value:H,onChange:e=>a({imgSize:e}),options:uagb_blocks_info.image_sizes}),!0===k&&l.a.createElement(p.a,{setAttributes:a,label:Object(u.__)("Position","ultimate-addons-for-gutenberg"),data:{value:M,label:"imgPosition"},options:[{value:"top",label:Object(u.__)("Top","ultimate-addons-for-gutenberg")},{value:"background",label:Object(u.__)("Background","ultimate-addons-for-gutenberg")}]}),!0===k&&"background"===M&&l.a.createElement(_.ToggleControl,{label:Object(u.__)("Link Complete Box","ultimate-addons-for-gutenberg"),checked:mt,onChange:()=>a({linkBox:!mt})})),l.a.createElement(T.a,{title:Object(u.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(_.ToggleControl,{label:Object(u.__)("Show Title","ultimate-addons-for-gutenberg"),checked:x,onChange:()=>a({displayPostTitle:!x})}),x&&l.a.createElement(p.a,{setAttributes:a,label:Object(u.__)("HTML Tag","ultimate-addons-for-gutenberg"),data:{value:ne,label:"titleTag"},options:[{value:"h1",label:Object(u.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(u.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(u.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(u.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(u.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(u.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(u.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(u.__)("P","ultimate-addons-for-gutenberg")}]}),l.a.createElement(_.ToggleControl,{label:Object(u.__)("Show Author","ultimate-addons-for-gutenberg"),checked:L,onChange:()=>a({displayPostAuthor:!L})}),l.a.createElement(_.ToggleControl,{label:Object(u.__)("Show Date","ultimate-addons-for-gutenberg"),checked:B,onChange:()=>a({displayPostDate:!B})}),l.a.createElement(_.ToggleControl,{label:Object(u.__)("Show Comment","ultimate-addons-for-gutenberg"),checked:w,onChange:()=>a({displayPostComment:!w})}),l.a.createElement(_.ToggleControl,{label:Object(u.__)("Show Taxonomy","ultimate-addons-for-gutenberg"),checked:P,onChange:()=>a({displayPostTaxonomy:!P})}),l.a.createElement(_.ToggleControl,{label:Object(u.__)("Show Excerpt","ultimate-addons-for-gutenberg"),checked:F,onChange:()=>a({displayPostExcerpt:!F})}),F&&l.a.createElement(_.RadioControl,{label:Object(u.__)("Show:","ultimate-addons-for-gutenberg"),selected:Ht,options:[{label:Object(u.__)("Excerpt","ultimate-addons-for-gutenberg"),value:"excerpt"},{label:Object(u.__)("Full post","ultimate-addons-for-gutenberg"),value:"full_post"}],onChange:e=>a({displayPostContentRadio:e})}),F&&"excerpt"===Ht&&l.a.createElement(m.a,{label:Object(u.__)("Max number of words in excerpt","ultimate-addons-for-gutenberg"),setAttributes:a,value:gt,onChange:e=>a({excerptLength:e}),min:1,max:100,displayUnit:!1})),l.a.createElement(T.a,{title:Object(u.__)("Read More Link","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(_.ToggleControl,{label:Object(u.__)("Show Read More Link","ultimate-addons-for-gutenberg"),checked:A,onChange:()=>a({displayPostLink:!A})}),A&&l.a.createElement(l.a.Fragment,null,l.a.createElement(_.ToggleControl,{label:Object(u.__)("Open links in New Tab","ultimate-addons-for-gutenberg"),checked:z,onChange:()=>a({newTab:!z})}),l.a.createElement(_.TextControl,{label:Object(u.__)("Text","ultimate-addons-for-gutenberg"),value:U,onChange:e=>a({ctaText:e})})))),l.a.createElement(b.b,b.a.style,x&&l.a.createElement(T.a,{title:Object(u.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ae,onColorChange:e=>a({titleColor:e})}),l.a.createElement(r.a,{label:Object(u.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:fe,label:"titleLoadGoogleFonts"},fontFamily:{value:ue,label:"titleFontFamily"},fontWeight:{value:ce,label:"titleFontWeight"},fontStyle:{value:se,label:"titleFontStyle"},fontSizeType:{value:oe,label:"titleFontSizeType"},fontSize:{value:le,label:"titleFontSize"},fontSizeMobile:{value:ie,label:"titleFontSizeMobile"},fontSizeTablet:{value:re,label:"titleFontSizeTablet"},lineHeightType:{value:ge,label:"titleLineHeightType"},lineHeight:{value:be,label:"titleLineHeight"},lineHeightMobile:{value:me,label:"titleLineHeightMobile"},lineHeightTablet:{value:de,label:"titleLineHeightTablet"},transform:{value:Nt,label:"titleTransform"},decoration:{value:qt,label:"titleDecoration"}}),l.a.createElement(m.a,{label:Object(u.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:ot,onChange:e=>a({titleBottomSpace:e}),min:0,max:50,unit:{value:Rt,label:"titleBottomSpaceUnit"}})),(L||B||w||P)&&l.a.createElement(T.a,{title:Object(u.__)("Meta","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ye,onColorChange:e=>a({metaColor:e})}),l.a.createElement(r.a,{label:Object(u.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:xe,label:"metaLoadGoogleFonts"},fontFamily:{value:ye,label:"metaFontFamily"},fontWeight:{value:Te,label:"metaFontWeight"},fontStyle:{value:Ce,label:"metaFontStyle"},fontSizeType:{value:he,label:"metaFontSizeType"},fontSize:{value:pe,label:"metaFontSize"},fontSizeMobile:{value:ve,label:"metaFontSizeMobile"},fontSizeTablet:{value:_e,label:"metaFontSizeTablet"},lineHeightType:{value:Oe,label:"metaLineHeightType"},lineHeight:{value:je,label:"metaLineHeight"},lineHeightMobile:{value:Ee,label:"metaLineHeightMobile"},lineHeightTablet:{value:Se,label:"metaLineHeightTablet"},transform:{value:It,label:"metaTransform"},decoration:{value:$t,label:"metaDecoration"}}),l.a.createElement(m.a,{label:Object(u.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:it,onChange:e=>a({metaBottomSpace:e}),min:0,max:50,unit:{value:Gt,label:"metaBottomSpaceUnit"}})),F&&l.a.createElement(T.a,{title:Object(u.__)("Excerpt","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ze,onColorChange:e=>a({excerptColor:e})}),l.a.createElement(r.a,{label:Object(u.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:Re,label:"excerptLoadGoogleFonts"},fontFamily:{value:ke,label:"excerptFontFamily"},fontWeight:{value:Pe,label:"excerptFontWeight"},fontStyle:{value:He,label:"excerptFontStyle"},fontSizeType:{value:we,label:"excerptFontSizeType"},fontSize:{value:Be,label:"excerptFontSize"},fontSizeMobile:{value:Le,label:"excerptFontSizeMobile"},fontSizeTablet:{value:Fe,label:"excerptFontSizeTablet"},lineHeightType:{value:Me,label:"excerptLineHeightType"},lineHeight:{value:Ae,label:"excerptLineHeight"},lineHeightMobile:{value:Ue,label:"excerptLineHeightMobile"},lineHeightTablet:{value:ze,label:"excerptLineHeightTablet"},transform:{value:Dt,label:"excerptTransform"},decoration:{value:Jt,label:"excerptDecoration"}}),l.a.createElement(m.a,{label:Object(u.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:rt,onChange:e=>a({excerptBottomSpace:e}),min:0,max:50,unit:{value:ut,label:"excerptBottomSpaceUnit"}})),A&&l.a.createElement(T.a,{title:Object(u.__)("Read More Link","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(v.a,{tabs:[{name:"normal",title:Object(u.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(u.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:et,onColorChange:e=>a({ctaColor:e})}),l.a.createElement(s.a,{label:Object(u.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:tt,onColorChange:e=>a({ctaBgColor:e})})),hover:l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:at,onColorChange:e=>a({ctaHColor:e})}),l.a.createElement(s.a,{label:Object(u.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:nt,onColorChange:e=>a({ctaBgHColor:e})}))}),l.a.createElement(r.a,{label:Object(u.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:Qe,label:"ctaLoadGoogleFonts"},fontFamily:{value:De,label:"ctaFontFamily"},fontWeight:{value:Ve,label:"ctaFontWeight"},fontStyle:{value:qe,label:"ctaFontStyle"},fontSizeType:{value:We,label:"ctaFontSizeType"},fontSize:{value:Ge,label:"ctaFontSize"},fontSizeMobile:{value:Ie,label:"ctaFontSizeMobile"},fontSizeTablet:{value:Ne,label:"ctaFontSizeTablet"},lineHeightType:{value:$e,label:"ctaLineHeightType"},lineHeight:{value:Je,label:"ctaLineHeight"},lineHeightMobile:{value:Xe,label:"ctaLineHeightMobile"},lineHeightTablet:{value:Ke,label:"ctaLineHeightTablet"},transform:{value:Vt,label:"ctaTransform"},decoration:{value:Kt,label:"ctaDecoration"}}),l.a.createElement(c.a,{disableBottomSeparator:!1,setAttributes:a,borderStyle:{value:G,label:"borderStyle",title:Object(u.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:R,label:"borderWidth",title:Object(u.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:I,label:"borderRadius",title:Object(u.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:W,label:"borderColor",title:Object(u.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:N,label:"borderHColor",title:Object(u.__)("Hover Color","ultimate-addons-for-gutenberg")}}),l.a.createElement(m.a,{label:Object(u.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:ct,onChange:e=>a({ctaBottomSpace:e}),min:0,max:500,unit:{value:Wt,label:"ctaBottomSpaceUnit"}}),l.a.createElement(d.a,C({},e,{label:Object(u.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Xt,label:"paddingBtnTop"},valueRight:{value:Zt,label:"paddingBtnRight"},valueBottom:{value:Qt,label:"paddingBtnBottom"},valueLeft:{value:Yt,label:"paddingBtnLeft"},valueTopTablet:{value:ea,label:"paddingBtnTopTablet"},valueRightTablet:{value:ta,label:"paddingBtnRightTablet"},valueBottomTablet:{value:aa,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:na,label:"paddingBtnLeftTablet"},valueTopMobile:{value:la,label:"paddingBtnTopMobile"},valueRightMobile:{value:oa,label:"paddingBtnRightMobile"},valueBottomMobile:{value:ia,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:ra,label:"paddingBtnLeftMobile"},unit:{value:ua,label:"paddingBtnUnit"},mUnit:{value:ca,label:"mobilePaddingBtnUnit"},tUnit:{value:sa,label:"tabletPaddingBtnUnit"},deviceType:S,attributes:t,setAttributes:a,link:{value:ga,label:"spacingLink"}}))),ht&&l.a.createElement(T.a,{title:Object(u.__)("Pagination","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(p.a,{setAttributes:a,label:Object(u.__)("Pagination Alignment","ultimate-addons-for-gutenberg"),data:{value:Ft,label:"paginationAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:l.a.createElement(_.Icon,{icon:Object(h.a)("fa fa-align-left")}),tooltip:Object(u.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:l.a.createElement(_.Icon,{icon:Object(h.a)("fa fa-align-center")}),tooltip:Object(u.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:l.a.createElement(_.Icon,{icon:Object(h.a)("fa fa-align-right")}),tooltip:Object(u.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),l.a.createElement(v.a,{tabs:[{name:"normal",title:Object(u.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(u.__)("Active","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{label:Object(u.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:_t,onColorChange:e=>a({paginationColor:e})}),"filled"===Ot&&l.a.createElement(s.a,{label:Object(u.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:yt,onColorChange:e=>a({paginationBgColor:e})}),"border"===Ot&&l.a.createElement(s.a,{label:Object(u.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:Et,onColorChange:e=>a({paginationBorderColor:e})})),active:l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{label:Object(u.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Tt,onColorChange:e=>a({paginationActiveColor:e})}),"filled"===Ot&&l.a.createElement(s.a,{label:Object(u.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Ct,onColorChange:e=>a({paginationBgActiveColor:e})}),"border"===Ot&&l.a.createElement(s.a,{label:Object(u.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:xt,onColorChange:e=>a({paginationBorderActiveColor:e})})),disableBottomSeparator:!1}),"border"===Ot&&l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{setAttributes:a,label:Object(u.__)("Border Size","ultimate-addons-for-gutenberg"),value:jt,onChange:e=>a({paginationBorderSize:e}),min:0,max:10,displayUnit:!1}),l.a.createElement(m.a,{setAttributes:a,label:Object(u.__)("Border Radius","ultimate-addons-for-gutenberg"),value:St,onChange:e=>a({paginationBorderRadius:e}),displayUnit:!1,min:0,max:500})),l.a.createElement(m.a,{label:Object(u.__)("Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:Bt,onChange:e=>a({paginationSpacing:e}),help:Object(u.__)("This spacing is between the Post Grid and the Pagination","ultimate-addons-for-gutenberg"),min:0,max:500,unit:{value:wt,label:"paginationSpacingUnit"}})),!0===k&&l.a.createElement(T.a,{title:Object(u.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},"background"===M&&l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{label:Object(u.__)("Background Overlay Color","ultimate-addons-for-gutenberg"),colorValue:dt,onColorChange:e=>a({bgOverlayColor:e})}),l.a.createElement(m.a,{label:Object(u.__)("Overlay Opacity","ultimate-addons-for-gutenberg"),setAttributes:a,value:bt,onChange:e=>a({overlayOpacity:e}),min:0,max:100})),"top"===M&&l.a.createElement(m.a,{label:Object(u.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:lt,onChange:e=>a({imageBottomSpace:e}),min:0,max:50,unit:{value:Ut,label:"imageBottomSpaceUnit"}})),l.a.createElement(T.a,{title:Object(u.__)("Blog Settings","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{label:Object(u.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:ee,onColorChange:e=>a({bgColor:e})}),l.a.createElement(m.a,{label:Object(u.__)("Column Gap","ultimate-addons-for-gutenberg"),setAttributes:a,value:Y,onChange:e=>a({rowGap:e}),min:0,max:50,unit:{value:At,label:"rowGapUnit"}}),l.a.createElement(m.a,{label:Object(u.__)("Row Gap","ultimate-addons-for-gutenberg"),setAttributes:a,value:Z,onChange:e=>a({columnGap:e}),min:0,max:50,unit:{value:zt,label:"columnGapUnit"}}),l.a.createElement(d.a,C({},e,{label:Object(u.__)("Content Padding","ultimate-addons-for-gutenberg"),valueTop:{value:da,label:"paddingTop"},valueRight:{value:pa,label:"paddingRight"},valueBottom:{value:ma,label:"paddingBottom"},valueLeft:{value:fa,label:"paddingLeft"},valueTopTablet:{value:ha,label:"paddingTopTablet"},valueRightTablet:{value:va,label:"paddingRightTablet"},valueBottomTablet:{value:_a,label:"paddingBottomTablet"},valueLeftTablet:{value:ya,label:"paddingLeftTablet"},valueTopMobile:{value:Ta,label:"paddingTopMobile"},valueRightMobile:{value:Ca,label:"paddingRightMobile"},valueBottomMobile:{value:Oa,label:"paddingBottomMobile"},valueLeftMobile:{value:ja,label:"paddingLeftMobile"},unit:{value:te,label:"contentPaddingUnit"},mUnit:{value:Sa,label:"mobilePaddingUnit"},tUnit:{value:Ea,label:"tabletPaddingUnit"},deviceType:S,attributes:t,setAttributes:a,link:{value:ba,label:"spacingLinkPadding"}})))),l.a.createElement(b.b,C({},b.a.advance,{parentProps:e.parentProps})))),Ra=Array.isArray(O)&&O.length;return Ra?l.a.createElement(n.Suspense,{fallback:Object(o.a)()},(()=>{const{isEditing:t}=e.state;return l.a.createElement(y.BlockControls,null,l.a.createElement(y.BlockAlignmentToolbar,{value:D,onChange:e=>{a({align:e})},controls:["left","center","right"]}),l.a.createElement(_.ToolbarGroup,{controls:[{icon:"edit",title:Object(u.__)("Edit"),onClick:()=>e.togglePreview(),isActive:t}]}))})(),Ua(),Ha,Ma,Aa,za):l.a.createElement(l.a.Fragment,null,Ua())};t.default=l.a.memo(O)}}]);