(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[79],{241:function(e,t,a){e.exports=a(244)()},242:function(e,t,a){"use strict";var n=a(241),o=a.n(n),l=a(243),i=a.n(l),r=a(3);if(void 0===c)var c=[];const u=e=>{const[t,a]=Object(r.useState)([]);Object(r.useEffect)(()=>{u()},[]),Object(r.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&u()},[e]);const n=()=>{a({status:"loading"})},o=()=>{a({status:"active"})},l=()=>{a({status:"inactive"})},u=()=>{var t;c.includes(e.config.google.families[0])||(i.a.load({...e.config,loading:n,active:o,inactive:l}),t=e.config.google.families[0],c.includes(t)||c.push(t))},{children:s}=e;return s||null};u.propTypes={config:o.a.object.isRequired,children:o.a.element,onStatus:o.a.func.isRequired},u.defaultProps={onStatus:()=>{}},t.a=u},243:function(e,t,a){var n;!function(){function o(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function c(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function s(e,t,a,n){if(t=e.c.createElement(t),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?t.style.cssText=a[o]:t.setAttribute(o,a[o]));return n&&t.appendChild(e.c.createTextNode(n)),t}function g(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,i=0;i<n.length;i+=1)if(t[o]===n[i]){l=!0;break}l||n.push(t[o])}for(t=[],o=0;o<n.length;o+=1){for(l=!1,i=0;i<a.length;i+=1)if(n[o]===a[i]){l=!0;break}l||t.push(n[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function m(e,t){for(var a=e.className.split(/\s+/),n=0,o=a.length;n<o;n++)if(a[n]==t)return!0;return!1}function f(e,t,a){function n(){r&&o&&l&&(r(i),r=null)}t=s(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,i=null,r=a||null;u?(t.onload=function(){o=!0,n()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),n()}):setTimeout((function(){o=!0,n()}),0),g(e,"head",t)}function p(e,t,a,n){var o=e.c.getElementsByTagName("head")[0];if(o){var l=s(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function h(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function T(e){this.a=e||"-"}function C(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function O(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function j(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function B(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function E(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new T("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function x(e){if(e.g){var t=m(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),d(e.f,a,n)}w(e,"inactive")}function w(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,j(a)):e.h[t]())}function F(){this.c={}}function P(e,t){this.c=e,this.f=t,this.a=s(this.c,"span",{"aria-hidden":"true"},this.f)}function L(e){g(e.c,"body",e.a)}function k(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+O(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function H(e,t,a,n,o,l){this.g=e,this.j=t,this.a=n,this.c=a,this.f=o||3e3,this.h=l||void 0}function M(e,t,a,n,o,l,i){this.v=e,this.B=t,this.c=a,this.a=n,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new P(this.c,this.s),this.h=new P(this.c,this.s),this.j=new P(this.c,this.s),this.m=new P(this.c,this.s),e=k(e=new C(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=e,e=k(e=new C(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=e,e=k(e=new C("serif",j(this.a))),this.j.a.style.cssText=e,e=k(e=new C("sans-serif",j(this.a))),this.m.a.style.cssText=e,L(this.g),L(this.h),L(this.j),L(this.m)}T.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},H.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,o){!function l(){r()-a>=t.f?o():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+O(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,a){o=setTimeout(a,t.f)}));Promise.race([l,n]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var A={D:"serif",C:"sans-serif"},z=null;function R(){if(null===z){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);z=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return z}function U(e,t,a){for(var n in A)if(A.hasOwnProperty(n)&&t===e.f[A[n]]&&a===e.f[A[n]])return!0;return!1}function W(e,t){setTimeout(i((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function G(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}M.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(a=n===t.f.serif&&o===t.f["sans-serif"])||(a=R()&&U(t,n,o)),a?r()-t.A>=t.w?R()&&U(t,n,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?W(t,t.v):W(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):W(t,t.v)}(this)};var I=null;function N(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),w(e,"active")):x(e.a))}function D(e){this.j=e,this.a=new F,this.h=0,this.f=this.g=!0}function V(e,t,a,n,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=n||{};if(0===a.length&&l)x(t.a);else{t.f+=a.length,l&&(t.j=l);var c,u=[];for(c=0;c<a.length;c++){var s=a[c],g=r[s.c],b=t.a,m=s;if(b.g&&d(b.f,[b.a.c("wf",m.c,j(m).toString(),"loading")]),w(b,"fontloading",m),b=null,null===I)if(window.FontFace){m=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var f=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);I=m?42<parseInt(m[1],10):!f}else I=!1;b=I?new H(i(t.g,t),i(t.h,t),t.c,s,t.s,g):new M(i(t.g,t),i(t.h,t),t.c,s,t.s,e,g),u.push(b)}for(c=0;c<u.length;c++)u[c].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}G.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,j(e).toString(),"active")],[t.a.c("wf",e.c,j(e).toString(),"loading"),t.a.c("wf",e.c,j(e).toString(),"inactive")]),w(t,"fontactive",e),this.m=!0,N(this)},G.prototype.h=function(e){var t=this.a;if(t.g){var a=m(t.f,t.a.c("wf",e.c,j(e).toString(),"active")),n=[],o=[t.a.c("wf",e.c,j(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,j(e).toString(),"inactive")),d(t.f,n,o)}w(t,"fontinactive",e),N(this)},D.prototype.load=function(e){this.c=new c(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],o=a.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),w(e,"loading")}(t),n=function(e,t,a){var n,o=[];for(n in t)if(t.hasOwnProperty(n)){var l=e.c[n];l&&o.push(l(t[n],a))}return o}(e.a,a,e.c);var l=new G(e.c,t,o);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){V(e,l,t,a,n)}))}(this,new E(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var o=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(o["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(o["__mti_fntLst"+a]){var n,l=o["__mti_fntLst"+a](),i=[];if(l)for(var r=0;r<l.length;r++){var c=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,i.push(new C(c,n))):i.push(new C(c))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,n=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new h;for(t=0,a=n.length;t<a;t++)f(this.c,n[t],v(i));var r=[];for(t=0,a=o.length;t<a;t++)if((n=o[t].split(":"))[1])for(var c=n[1].split(","),u=0;u<c.length;u+=1)r.push(new C(n[0],c[u]));else r.push(new C(n[0]));_(i,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Y={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new h,a=this.c,n=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var o=t[n].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(n,o);var l=new X(o);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),o=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var i;if(i=[],r=n[1])for(var r,c=(r=r.split(",")).length,u=0;u<c;u++){var s;if((s=r[u]).match(/^[\w-]+$/))if(null==(g=ee.exec(s.toLowerCase())))s="";else{if(s=null==(s=g[2])||""==s?"n":Z[s],null==(g=g[1])||""==g)g="4";else var g=Q[g]||(isNaN(g)?"4":g.substr(0,1));s=[s,g].join("")}else s="";s&&i.push(s)}0<i.length&&(l=i),3==n.length&&(i=[],0<(n=(n=n[2])?n.split(","):i).length&&(n=Y[n[0]])&&(e.c[o]=n))}for(e.c[o]||(n=Y[o])&&(e.c[o]=n),n=0;n<l.length;n+=1)e.a.push(new C(o,l[n]))}}(l),f(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),_(t,(function(){e(l.a,l.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],o=0;o<t.length;o+=2)for(var l=t[o],i=t[o+1],r=0;r<i.length;r++)n.push(new C(l,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var o=0,l=a.fonts.length;o<l;++o){var i=a.fonts[o];n.a.push(new C(i.name,B("font-weight:"+i.weight+";font-style:"+i.style)))}e(n.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new D(window);le.a.c.custom=function(e,t){return new $(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new q(t,e)},le.a.c.typekit=function(e,t){return new ne(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(n=function(){return ie}.call(t,a,t,e))||(e.exports=n)}()},244:function(e,t,a){"use strict";var n=a(245);function o(){}function l(){}l.resetWarningCache=o,e.exports=function(){function e(e,t,a,o,l,i){if(i!==n){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:o};return a.PropTypes=a,a}},245:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},510:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(11),i=a(242),r=a(24),c=a(2),u=a(58),s=a(16),g=a(64),b=a(20),d=a(42),m=a(13),f=a(65),p=a(21),h=a(12),v=a(43),_=a(7),y=a(5);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const C=e=>{const{attributes:t,setAttributes:a,latestPosts:C,categoriesList:O,deviceType:j,taxonomyList:S}=e.parentProps,{displayPostTitle:B,displayPostDate:E,displayPostComment:x,displayPostExcerpt:w,displayPostAuthor:F,displayPostImage:P,displayPostTaxonomy:L,imgSize:k,imgPosition:H,displayPostLink:M,newTab:A,ctaText:z,borderWidth:R,borderStyle:U,borderColor:W,borderHColor:G,borderRadius:I,align:N,columns:D,tcolumns:V,mcolumns:q,order:$,orderBy:J,categories:K,postsToShow:X,rowGap:Y,columnGap:Q,bgColor:Z,contentPaddingUnit:ee,titleColor:te,titleTag:ae,titleFontSize:ne,titleFontSizeType:oe,titleFontSizeMobile:le,titleFontSizeTablet:ie,titleFontFamily:re,titleFontWeight:ce,titleFontStyle:ue,titleLineHeightType:se,titleLineHeight:ge,titleLineHeightTablet:be,titleLineHeightMobile:de,titleLoadGoogleFonts:me,metaFontSize:fe,metaFontSizeType:pe,metaFontSizeMobile:he,metaFontSizeTablet:ve,metaFontFamily:_e,metaFontWeight:ye,metaFontStyle:Te,metaLineHeightType:Ce,metaLineHeight:Oe,metaLineHeightTablet:je,metaLineHeightMobile:Se,metaLoadGoogleFonts:Be,excerptFontSize:Ee,excerptFontSizeType:xe,excerptFontSizeTablet:we,excerptFontSizeMobile:Fe,excerptFontFamily:Pe,excerptFontWeight:Le,excerptFontStyle:ke,excerptLineHeightType:He,excerptLineHeight:Me,excerptLineHeightTablet:Ae,excerptLineHeightMobile:ze,excerptLoadGoogleFonts:Re,ctaFontSize:Ue,ctaFontSizeType:We,ctaFontSizeTablet:Ge,ctaFontSizeMobile:Ie,ctaFontFamily:Ne,ctaFontWeight:De,ctaFontStyle:Ve,ctaLineHeightType:qe,ctaLineHeight:$e,ctaLineHeightTablet:Je,ctaLineHeightMobile:Ke,ctaLoadGoogleFonts:Xe,metaColor:Ye,excerptColor:Qe,ctaColor:Ze,ctaBgColor:et,ctaHColor:tt,ctaBgHColor:at,imageBottomSpace:nt,titleBottomSpace:ot,metaBottomSpace:lt,excerptBottomSpace:it,excerptBottomSpaceUnit:rt,ctaBottomSpace:ct,equalHeight:ut,excerptLength:st,overlayOpacity:gt,bgOverlayColor:bt,linkBox:dt,postType:mt,taxonomyType:ft,postPagination:pt,pageLimit:ht,paginationColor:vt,paginationBgColor:_t,paginationActiveColor:yt,paginationBgActiveColor:Tt,paginationLayout:Ct,paginationBorderSize:Ot,paginationBorderRadius:jt,paginationBorderColor:St,paginationBorderActiveColor:Bt,paginationSpacing:Et,paginationSpacingUnit:xt,paginationAlignment:wt,paginationPrevText:Ft,paginationNextText:Pt,inheritFromTheme:Lt,postDisplaytext:kt,displayPostContentRadio:Ht,excludeCurrentPost:Mt,rowGapUnit:At,columnGapUnit:zt,imageBottomSpaceUnit:Rt,titleBottomSpaceUnit:Ut,metaBottomSpaceUnit:Wt,ctaBottomSpaceUnit:Gt,titleTransform:It,metaTransform:Nt,excerptTransform:Dt,ctaTransform:Vt,titleDecoration:qt,metaDecoration:$t,excerptDecoration:Jt,ctaDecoration:Kt,paddingBtnTop:Xt,paddingBtnBottom:Yt,paddingBtnLeft:Qt,paddingBtnRight:Zt,paddingBtnTopTablet:ea,paddingBtnRightTablet:ta,paddingBtnBottomTablet:aa,paddingBtnLeftTablet:na,paddingBtnTopMobile:oa,paddingBtnRightMobile:la,paddingBtnBottomMobile:ia,paddingBtnLeftMobile:ra,paddingBtnUnit:ca,mobilePaddingBtnUnit:ua,tabletPaddingBtnUnit:sa,spacingLink:ga,spacingLinkPadding:ba,paddingTop:da,paddingBottom:ma,paddingLeft:fa,paddingRight:pa,paddingTopTablet:ha,paddingRightTablet:va,paddingBottomTablet:_a,paddingLeftTablet:ya,paddingTopMobile:Ta,paddingRightMobile:Ca,paddingBottomMobile:Oa,paddingLeftMobile:ja,mobilePaddingUnit:Sa,tabletPaddingUnit:Ba}=t,Ea=e=>{a({postPagination:e}),a({paginationMarkup:"empty"})},xa=e=>{a({postsToShow:e}),a({paginationMarkup:"empty"})},wa=e=>{a({pageLimit:e}),a({paginationMarkup:"empty"})},Fa=e=>{a({paginationPrevText:e}),a({paginationMarkup:"empty"})},Pa=e=>{a({paginationNextText:e}),a({paginationMarkup:"empty"})},La=[],ka=[{value:"",label:Object(c.__)("All","ultimate-addons-for-gutenberg")}];let Ha,Ma,Aa,za;if(""!==S&&Object.keys(S).map(e=>La.push({value:S[e].name,label:S[e].label})),""!==O&&Object.keys(O).map(e=>ka.push({value:O[e].id,label:O[e].name})),!0===me){const e={google:{families:[re+(ce?":"+ce:"")]}};Ha=o.a.createElement(i.a,{config:e})}if(!0===Be){const e={google:{families:[_e+(ye?":"+ye:"")]}};Ma=o.a.createElement(i.a,{config:e})}if(!0===Re){const e={google:{families:[Pe+(Le?":"+Le:"")]}};Aa=o.a.createElement(i.a,{config:e})}if(!0===Xe){const e={google:{families:[Ne+(De?":"+De:"")]}};za=o.a.createElement(i.a,{config:e})}const Ra=()=>o.a.createElement(y.InspectorControls,null,o.a.createElement(g.a,null,o.a.createElement(b.b,b.a.general,o.a.createElement(_.PanelBody,{title:Object(c.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(_.SelectControl,{label:Object(c.__)("Post Type","ultimate-addons-for-gutenberg"),value:mt,onChange:e=>(e=>{a({postType:e}),a({categories:""})})(e),options:uagb_blocks_info.post_types}),""!==S&&o.a.createElement(_.SelectControl,{label:Object(c.__)("Taxonomy","ultimate-addons-for-gutenberg"),value:ft,onChange:e=>(e=>{a({taxonomyType:e}),a({categories:""})})(e),options:La}),""!=O&&o.a.createElement(o.a.Fragment,null,o.a.createElement(_.SelectControl,{label:S[ft].label,value:K,onChange:e=>a({categories:e}),options:ka})),o.a.createElement(_.ToggleControl,{label:Object(c.__)("Exclude Current Post","ultimate-addons-for-gutenberg"),checked:Mt,onChange:()=>a({excludeCurrentPost:!Mt})}),o.a.createElement(m.a,{label:Object(c.__)("Posts Per Page","ultimate-addons-for-gutenberg"),setAttributes:a,value:X,onChange:xa,min:0,max:500,displayUnit:!1}),o.a.createElement(p.a,{setAttributes:a,label:Object(c.__)("Order By","ultimate-addons-for-gutenberg"),data:{value:J,label:"orderBy"},options:[{value:"date",label:Object(c.__)("Date","ultimate-addons-for-gutenberg")},{value:"title",label:Object(c.__)("Title","ultimate-addons-for-gutenberg")},{value:"rand",label:Object(c.__)("Random","ultimate-addons-for-gutenberg")},{value:"menu_order",label:Object(c.__)("Menu Order","ultimate-addons-for-gutenberg")}]}),o.a.createElement(p.a,{setAttributes:a,label:Object(c.__)("Order","ultimate-addons-for-gutenberg"),data:{value:$,label:"order"},options:[{value:"desc",label:Object(c.__)("Descending","ultimate-addons-for-gutenberg")},{value:"asc",label:Object(c.__)("Ascending","ultimate-addons-for-gutenberg")}]}),o.a.createElement(f.a,{label:Object(c.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:D,label:"columns"},tablet:{value:V,label:"tcolumns"},mobile:{value:q,label:"mcolumns"}},min:0,max:Ua?Math.min(8,C.length):8,displayUnit:!1,setAttributes:a}),o.a.createElement(_.ToggleControl,{label:Object(c.__)("Equal Height","ultimate-addons-for-gutenberg"),checked:ut,onChange:()=>a({equalHeight:!ut})}),o.a.createElement(_.ToggleControl,{label:Object(c.__)("Post Pagination","ultimate-addons-for-gutenberg"),checked:pt,onChange:Ea}),!0===pt&&o.a.createElement(m.a,{label:Object(c.__)("Page Limit","ultimate-addons-for-gutenberg"),setAttributes:a,value:ht,onChange:wa,min:0,max:100,displayUnit:!1}),o.a.createElement("h2",null,Object(c.__)("If Posts Not Found","ultimate-addons-for-gutenberg")),o.a.createElement(_.TextControl,{autoComplete:"off",label:Object(c.__)("Display Message","ultimate-addons-for-gutenberg"),value:kt,onChange:e=>a({postDisplaytext:e})}),o.a.createElement(_.ToggleControl,{label:Object(c.__)("Inherit Styling from Theme","ultimate-addons-for-gutenberg"),checked:Lt,onChange:()=>a({inheritFromTheme:!Lt}),help:Object(c.__)("This will inherit all the Typography and colors for Title, Meta, Excerpt and Read More button from the theme.","ultimate-addons-for-gutenberg")})),(()=>{if(!0===pt)return o.a.createElement(_.PanelBody,{title:Object(c.__)("Pagination","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(p.a,{setAttributes:a,label:Object(c.__)("Pagination Layout","ultimate-addons-for-gutenberg"),data:{value:Ct,label:"paginationLayout"},className:"uagb-multi-button-alignment-control",options:[{value:"border",label:"Border"},{value:"filled",label:"Filled"}],showIcons:!1}),o.a.createElement(_.TextControl,{label:Object(c.__)("Previous Text","ultimate-addons-for-gutenberg"),value:Ft,onChange:Fa}),o.a.createElement(_.TextControl,{label:Object(c.__)("Next Text","ultimate-addons-for-gutenberg"),value:Pt,onChange:Pa}))})(),o.a.createElement(_.PanelBody,{title:Object(c.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(_.ToggleControl,{label:Object(c.__)("Show Featured Image","ultimate-addons-for-gutenberg"),checked:P,onChange:()=>a({displayPostImage:!P})}),!0===P&&o.a.createElement(_.SelectControl,{label:Object(c.__)("Sizes","ultimate-addons-for-gutenberg"),value:k,onChange:e=>a({imgSize:e}),options:uagb_blocks_info.image_sizes}),!0===P&&o.a.createElement(p.a,{setAttributes:a,label:Object(c.__)("Position","ultimate-addons-for-gutenberg"),data:{value:H,label:"imgPosition"},options:[{value:"top",label:Object(c.__)("Top","ultimate-addons-for-gutenberg")},{value:"background",label:Object(c.__)("Background","ultimate-addons-for-gutenberg")}]}),!0===P&&"background"===H&&o.a.createElement(_.ToggleControl,{label:Object(c.__)("Link Complete Box","ultimate-addons-for-gutenberg"),checked:dt,onChange:()=>a({linkBox:!dt})})),o.a.createElement(_.PanelBody,{title:Object(c.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(_.ToggleControl,{label:Object(c.__)("Show Title","ultimate-addons-for-gutenberg"),checked:B,onChange:()=>a({displayPostTitle:!B})}),B&&o.a.createElement(p.a,{setAttributes:a,label:Object(c.__)("HTML Tag","ultimate-addons-for-gutenberg"),data:{value:ae,label:"titleTag"},options:[{value:"h1",label:Object(c.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(c.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(c.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(c.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(c.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(c.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(c.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(c.__)("P","ultimate-addons-for-gutenberg")}]}),o.a.createElement(_.ToggleControl,{label:Object(c.__)("Show Author","ultimate-addons-for-gutenberg"),checked:F,onChange:()=>a({displayPostAuthor:!F})}),o.a.createElement(_.ToggleControl,{label:Object(c.__)("Show Date","ultimate-addons-for-gutenberg"),checked:E,onChange:()=>a({displayPostDate:!E})}),o.a.createElement(_.ToggleControl,{label:Object(c.__)("Show Comment","ultimate-addons-for-gutenberg"),checked:x,onChange:()=>a({displayPostComment:!x})}),o.a.createElement(_.ToggleControl,{label:Object(c.__)("Show Taxonomy","ultimate-addons-for-gutenberg"),checked:L,onChange:()=>a({displayPostTaxonomy:!L})}),o.a.createElement(_.ToggleControl,{label:Object(c.__)("Show Excerpt","ultimate-addons-for-gutenberg"),checked:w,onChange:()=>a({displayPostExcerpt:!w})}),w&&o.a.createElement(_.RadioControl,{label:Object(c.__)("Show:","ultimate-addons-for-gutenberg"),selected:Ht,options:[{label:Object(c.__)("Excerpt","ultimate-addons-for-gutenberg"),value:"excerpt"},{label:Object(c.__)("Full post","ultimate-addons-for-gutenberg"),value:"full_post"}],onChange:e=>a({displayPostContentRadio:e})}),w&&"excerpt"===Ht&&o.a.createElement(m.a,{label:Object(c.__)("Max number of words in excerpt","ultimate-addons-for-gutenberg"),setAttributes:a,value:st,onChange:e=>a({excerptLength:e}),min:1,max:100,displayUnit:!1})),o.a.createElement(_.PanelBody,{title:Object(c.__)("Read More Link","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(_.ToggleControl,{label:Object(c.__)("Show Read More Link","ultimate-addons-for-gutenberg"),checked:M,onChange:()=>a({displayPostLink:!M})}),M&&o.a.createElement(o.a.Fragment,null,o.a.createElement(_.ToggleControl,{label:Object(c.__)("Open links in New Tab","ultimate-addons-for-gutenberg"),checked:A,onChange:()=>a({newTab:!A})}),o.a.createElement(_.TextControl,{label:Object(c.__)("Text","ultimate-addons-for-gutenberg"),value:z,onChange:e=>a({ctaText:e})})))),o.a.createElement(b.b,b.a.style,!Lt&&o.a.createElement(o.a.Fragment,null,B&&o.a.createElement(_.PanelBody,{title:Object(c.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},!Lt&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:te,onColorChange:e=>a({titleColor:e})}),o.a.createElement(r.a,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:me,label:"titleLoadGoogleFonts"},fontFamily:{value:re,label:"titleFontFamily"},fontWeight:{value:ce,label:"titleFontWeight"},fontStyle:{value:ue,label:"titleFontStyle"},fontSizeType:{value:oe,label:"titleFontSizeType"},fontSize:{value:ne,label:"titleFontSize"},fontSizeMobile:{value:le,label:"titleFontSizeMobile"},fontSizeTablet:{value:ie,label:"titleFontSizeTablet"},lineHeightType:{value:se,label:"titleLineHeightType"},lineHeight:{value:ge,label:"titleLineHeight"},lineHeightMobile:{value:de,label:"titleLineHeightMobile"},lineHeightTablet:{value:be,label:"titleLineHeightTablet"},transform:{value:It,label:"titleTransform"},decoration:{value:qt,label:"titleDecoration"}}),o.a.createElement(m.a,{label:Object(c.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:ot,onChange:e=>a({titleBottomSpace:e}),min:0,max:50,unit:{value:Ut,label:"titleBottomSpaceUnit"}}))),(F||E||x||L)&&o.a.createElement(_.PanelBody,{title:Object(c.__)("Meta","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ye,onColorChange:e=>a({metaColor:e})}),o.a.createElement(r.a,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:Be,label:"metaLoadGoogleFonts"},fontFamily:{value:_e,label:"metaFontFamily"},fontWeight:{value:ye,label:"metaFontWeight"},fontStyle:{value:Te,label:"metaFontStyle"},fontSizeType:{value:pe,label:"metaFontSizeType"},fontSize:{value:fe,label:"metaFontSize"},fontSizeMobile:{value:he,label:"metaFontSizeMobile"},fontSizeTablet:{value:ve,label:"metaFontSizeTablet"},lineHeightType:{value:Ce,label:"metaLineHeightType"},lineHeight:{value:Oe,label:"metaLineHeight"},lineHeightMobile:{value:Se,label:"metaLineHeightMobile"},lineHeightTablet:{value:je,label:"metaLineHeightTablet"},transform:{value:Nt,label:"metaTransform"},decoration:{value:$t,label:"metaDecoration"}}),o.a.createElement(m.a,{label:Object(c.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:lt,onChange:e=>a({metaBottomSpace:e}),min:0,max:50,unit:{value:Wt,label:"metaBottomSpaceUnit"}})),w&&o.a.createElement(_.PanelBody,{title:Object(c.__)("Excerpt","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Qe,onColorChange:e=>a({excerptColor:e})}),o.a.createElement(r.a,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:Re,label:"excerptLoadGoogleFonts"},fontFamily:{value:Pe,label:"excerptFontFamily"},fontWeight:{value:Le,label:"excerptFontWeight"},fontStyle:{value:ke,label:"excerptFontStyle"},fontSizeType:{value:xe,label:"excerptFontSizeType"},fontSize:{value:Ee,label:"excerptFontSize"},fontSizeMobile:{value:Fe,label:"excerptFontSizeMobile"},fontSizeTablet:{value:we,label:"excerptFontSizeTablet"},lineHeightType:{value:He,label:"excerptLineHeightType"},lineHeight:{value:Me,label:"excerptLineHeight"},lineHeightMobile:{value:ze,label:"excerptLineHeightMobile"},lineHeightTablet:{value:Ae,label:"excerptLineHeightTablet"},transform:{value:Dt,label:"excerptTransform"},decoration:{value:Jt,label:"excerptDecoration"}}),o.a.createElement(m.a,{label:Object(c.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:it,onChange:e=>a({excerptBottomSpace:e}),min:0,max:50,unit:{value:rt,label:"excerptBottomSpaceUnit"}})),M&&o.a.createElement(_.PanelBody,{title:Object(c.__)("Read More Link","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(v.a,{tabs:[{name:"normal",title:Object(c.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(c.__)("Hover","ultimate-addons-for-gutenberg")}],normal:o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ze,onColorChange:e=>a({ctaColor:e})}),o.a.createElement(s.a,{label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:et,onColorChange:e=>a({ctaBgColor:e})})),hover:o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:tt,onColorChange:e=>a({ctaHColor:e})}),o.a.createElement(s.a,{label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:at,onColorChange:e=>a({ctaBgHColor:e})}))}),o.a.createElement(r.a,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:Xe,label:"ctaLoadGoogleFonts"},fontFamily:{value:Ne,label:"ctaFontFamily"},fontWeight:{value:De,label:"ctaFontWeight"},fontStyle:{value:Ve,label:"ctaFontStyle"},fontSizeType:{value:We,label:"ctaFontSizeType"},fontSize:{value:Ue,label:"ctaFontSize"},fontSizeMobile:{value:Ie,label:"ctaFontSizeMobile"},fontSizeTablet:{value:Ge,label:"ctaFontSizeTablet"},lineHeightType:{value:qe,label:"ctaLineHeightType"},lineHeight:{value:$e,label:"ctaLineHeight"},lineHeightMobile:{value:Ke,label:"ctaLineHeightMobile"},lineHeightTablet:{value:Je,label:"ctaLineHeightTablet"},transform:{value:Vt,label:"ctaTransform"},decoration:{value:Kt,label:"ctaDecoration"}}),o.a.createElement(u.a,{disableBottomSeparator:!0,setAttributes:a,borderStyle:{value:U,label:"borderStyle",title:Object(c.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:R,label:"borderWidth",title:Object(c.__)("Border Width","ultimate-addons-for-gutenberg")},borderRadius:{value:I,label:"borderRadius",title:Object(c.__)("Border Radius","ultimate-addons-for-gutenberg")},borderColor:{value:W,label:"borderColor",title:Object(c.__)("Border Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:G,label:"borderHColor",title:Object(c.__)("Border Hover Color","ultimate-addons-for-gutenberg")}}),o.a.createElement(m.a,{label:Object(c.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:ct,onChange:e=>a({ctaBottomSpace:e}),min:0,max:500,unit:{value:Gt,label:"ctaBottomSpaceUnit"}}),o.a.createElement(d.a,T({},e,{label:Object(c.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Xt,label:"paddingBtnTop"},valueRight:{value:Zt,label:"paddingBtnRight"},valueBottom:{value:Yt,label:"paddingBtnBottom"},valueLeft:{value:Qt,label:"paddingBtnLeft"},valueTopTablet:{value:ea,label:"paddingBtnTopTablet"},valueRightTablet:{value:ta,label:"paddingBtnRightTablet"},valueBottomTablet:{value:aa,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:na,label:"paddingBtnLeftTablet"},valueTopMobile:{value:oa,label:"paddingBtnTopMobile"},valueRightMobile:{value:la,label:"paddingBtnRightMobile"},valueBottomMobile:{value:ia,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:ra,label:"paddingBtnLeftMobile"},unit:{value:ca,label:"paddingBtnUnit"},mUnit:{value:ua,label:"mobilePaddingBtnUnit"},tUnit:{value:sa,label:"tabletPaddingBtnUnit"},deviceType:j,attributes:t,setAttributes:a,link:{value:ga,label:"spacingLink"}})))),pt&&o.a.createElement(_.PanelBody,{title:Object(c.__)("Pagination","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(p.a,{setAttributes:a,label:Object(c.__)("Pagination Alignment","ultimate-addons-for-gutenberg"),data:{value:wt,label:"paginationAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(_.Icon,{icon:Object(h.a)("fa fa-align-left")}),tooltip:Object(c.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(_.Icon,{icon:Object(h.a)("fa fa-align-center")}),tooltip:Object(c.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(_.Icon,{icon:Object(h.a)("fa fa-align-right")}),tooltip:Object(c.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),o.a.createElement(v.a,{tabs:[{name:"normal",title:Object(c.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(c.__)("Active","ultimate-addons-for-gutenberg")}],normal:o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(c.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:vt,onColorChange:e=>a({paginationColor:e})}),"filled"===Ct&&o.a.createElement(s.a,{label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:_t,onColorChange:e=>a({paginationBgColor:e})}),"border"===Ct&&o.a.createElement(s.a,{label:Object(c.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:St,onColorChange:e=>a({paginationBorderColor:e})})),active:o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(c.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:yt,onColorChange:e=>a({paginationActiveColor:e})}),"filled"===Ct&&o.a.createElement(s.a,{label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Tt,onColorChange:e=>a({paginationBgActiveColor:e})}),"border"===Ct&&o.a.createElement(s.a,{label:Object(c.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:Bt,onColorChange:e=>a({paginationBorderActiveColor:e})})),disableBottomSeparator:!1}),"border"===Ct&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{setAttributes:a,label:Object(c.__)("Border Size","ultimate-addons-for-gutenberg"),value:Ot,onChange:e=>a({paginationBorderSize:e}),min:0,max:10,displayUnit:!1}),o.a.createElement(m.a,{setAttributes:a,label:Object(c.__)("Border Radius","ultimate-addons-for-gutenberg"),value:jt,onChange:e=>a({paginationBorderRadius:e}),displayUnit:!1,min:0,max:500})),o.a.createElement(m.a,{label:Object(c.__)("Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:Et,onChange:e=>a({paginationSpacing:e}),help:Object(c.__)("This spacing is between the Post Grid and the Pagination","ultimate-addons-for-gutenberg"),min:0,max:500,unit:{value:xt,label:"paginationSpacingUnit"}})),!0===P&&o.a.createElement(_.PanelBody,{title:Object(c.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},"background"===H&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(c.__)("Background Overlay Color","ultimate-addons-for-gutenberg"),colorValue:bt,onColorChange:e=>a({bgOverlayColor:e})}),o.a.createElement(m.a,{label:Object(c.__)("Overlay Opacity","ultimate-addons-for-gutenberg"),setAttributes:a,value:gt,onChange:e=>a({overlayOpacity:e}),min:0,max:100})),"top"===H&&o.a.createElement(m.a,{label:Object(c.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:nt,onChange:e=>a({imageBottomSpace:e}),min:0,max:50,unit:{value:Rt,label:"imageBottomSpaceUnit"}})),o.a.createElement(_.PanelBody,{title:Object(c.__)("Blog Settings","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.a,{label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Z,onColorChange:e=>a({bgColor:e})}),o.a.createElement(m.a,{label:Object(c.__)("Column Gap","ultimate-addons-for-gutenberg"),setAttributes:a,value:Y,onChange:e=>a({rowGap:e}),min:0,max:50,unit:{value:At,label:"rowGapUnit"}}),o.a.createElement(m.a,{label:Object(c.__)("Row Gap","ultimate-addons-for-gutenberg"),setAttributes:a,value:Q,onChange:e=>a({columnGap:e}),min:0,max:50,unit:{value:zt,label:"columnGapUnit"}}),o.a.createElement(d.a,T({},e,{label:Object(c.__)("Content Padding","ultimate-addons-for-gutenberg"),valueTop:{value:da,label:"paddingTop"},valueRight:{value:pa,label:"paddingRight"},valueBottom:{value:ma,label:"paddingBottom"},valueLeft:{value:fa,label:"paddingLeft"},valueTopTablet:{value:ha,label:"paddingTopTablet"},valueRightTablet:{value:va,label:"paddingRightTablet"},valueBottomTablet:{value:_a,label:"paddingBottomTablet"},valueLeftTablet:{value:ya,label:"paddingLeftTablet"},valueTopMobile:{value:Ta,label:"paddingTopMobile"},valueRightMobile:{value:Ca,label:"paddingRightMobile"},valueBottomMobile:{value:Oa,label:"paddingBottomMobile"},valueLeftMobile:{value:ja,label:"paddingLeftMobile"},unit:{value:ee,label:"contentPaddingUnit"},mUnit:{value:Sa,label:"mobilePaddingUnit"},tUnit:{value:Ba,label:"tabletPaddingUnit"},deviceType:j,attributes:t,setAttributes:a,link:{value:ba,label:"spacingLinkPadding"}})))),o.a.createElement(b.b,T({},b.a.advance,{parentProps:e.parentProps})))),Ua=Array.isArray(C)&&C.length;return Ua?o.a.createElement(n.Suspense,{fallback:Object(l.a)()},(()=>{const{isEditing:t}=e.state;return o.a.createElement(y.BlockControls,null,o.a.createElement(y.BlockAlignmentToolbar,{value:N,onChange:e=>{a({align:e})},controls:["left","center","right"]}),o.a.createElement(_.ToolbarGroup,{controls:[{icon:"edit",title:Object(c.__)("Edit"),onClick:()=>e.togglePreview(),isActive:t}]}))})(),Ra(),Ha,Ma,Aa,za):o.a.createElement(o.a.Fragment,null,Ra())};t.default=o.a.memo(C)}}]);