(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[14],{198:function(e,t,a){"use strict";var l,o,i=a(36),n=a.n(i),r=a(199),u=a.n(r),s=a(2);if(void 0===d)var d=[];const b=e=>{const[t,a]=Object(s.useState)([]);Object(s.useEffect)(()=>{r()},[]),Object(s.useEffect)(()=>{const{onStatus:a,config:l}=e;void 0!==t.status&&a(t.status),l!==t.config&&r()},[e]);const l=()=>{a({status:"loading"})},o=e=>{d.includes(e)||d.push(e)},i=()=>{a({status:"active"})},n=()=>{a({status:"inactive"})},r=()=>{d.includes(e.config.google.families[0])||(u.a.load({...e.config,loading:l,active:i,inactive:n}),o(e.config.google.families[0]));const t=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==t.length||0!==a.length){const r=(t[0]||a[0]).getElementsByTagName("iframe")[0];r&&(u.a.load({...e.config,loading:l,active:i,inactive:n,context:null==r?void 0:r.contentWindow}),o(e.config.google.families[0]))}},{children:b}=e;return b||null};b.propTypes={config:null===(l=n.a.object)||void 0===l?void 0:l.isRequired,children:n.a.element,onStatus:null===(o=n.a.func)||void 0===o?void 0:o.isRequired},b.defaultProps={onStatus:()=>{}},t.a=b},199:function(e,t,a){var l;!function(){function o(e,t,a){return e.call.apply(e.bind,arguments)}function i(e,t,a){if(!e)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,l),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function n(e,t,a){return(n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:i).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function d(e,t,a,l){if(t=e.c.createElement(t),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?t.style.cssText=a[o]:t.setAttribute(o,a[o]));return l&&t.appendChild(e.c.createTextNode(l)),t}function b(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function c(e,t,a){t=t||[],a=a||[];for(var l=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var i=!1,n=0;n<l.length;n+=1)if(t[o]===l[n]){i=!0;break}i||l.push(t[o])}for(t=[],o=0;o<l.length;o+=1){for(i=!1,n=0;n<a.length;n+=1)if(l[o]===a[n]){i=!0;break}i||t.push(l[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var a=e.className.split(/\s+/),l=0,o=a.length;l<o;l++)if(a[l]==t)return!0;return!1}function h(e,t,a){function l(){r&&o&&i&&(r(n),r=null)}t=d(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,i=!0,n=null,r=a||null;s?(t.onload=function(){o=!0,l()},t.onerror=function(){o=!0,n=Error("Stylesheet failed to load"),l()}):setTimeout((function(){o=!0,l()}),0),b(e,"head",t)}function m(e,t,a,l){var o=e.c.getElementsByTagName("head")[0];if(o){var i=d(e,"script",{src:t}),n=!1;return i.onload=i.onreadystatechange=function(){n||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(n=!0,a&&a(null),i.onload=i.onreadystatechange=null,"HEAD"==i.parentNode.tagName&&o.removeChild(i))},o.appendChild(i),setTimeout((function(){n||(n=!0,a&&a(Error("Script load timeout")))}),l||5e3),i}return null}function v(){this.a=0,this.c=null}function p(e){return e.a++,function(){e.a--,_(e)}}function T(e,t){e.c=t,_(e)}function _(e){0==e.a&&e.c&&(e.c(),e.c=null)}function y(e){this.a=e||"-"}function C(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function S(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var l=e[a].replace(/['"]/g,"");-1!=l.indexOf(" ")||/^\d/.test(l)?t.push("'"+l+"'"):t.push(l)}return t.join(",")}function M(e){return e.a+e.f}function k(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function F(e){var t=4,a="n",l=null;return e&&((l=e.match(/(normal|oblique|italic)/i))&&l[1]&&(a=l[1].substr(0,1).toLowerCase()),(l=e.match(/([1-9]00|normal|bold)/i))&&l[1]&&(/bold/i.test(l[1])?t=7:/[1-9]00/.test(l[1])&&(t=parseInt(l[1].substr(0,1),10)))),a+t}function j(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new y("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function B(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),a=[],l=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),c(e.f,a,l)}O(e,"inactive")}function O(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,M(a)):e.h[t]())}function L(){this.c={}}function E(e,t){this.c=e,this.f=t,this.a=d(this.c,"span",{"aria-hidden":"true"},this.f)}function P(e){b(e.c,"body",e.a)}function w(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+S(e.c)+";font-style:"+k(e)+";font-weight:"+e.f+"00;"}function H(e,t,a,l,o,i){this.g=e,this.j=t,this.a=l,this.c=a,this.f=o||3e3,this.h=i||void 0}function z(e,t,a,l,o,i,n){this.v=e,this.B=t,this.c=a,this.a=l,this.s=n||"BESbswy",this.f={},this.w=o||3e3,this.u=i||null,this.m=this.j=this.h=this.g=null,this.g=new E(this.c,this.s),this.h=new E(this.c,this.s),this.j=new E(this.c,this.s),this.m=new E(this.c,this.s),e=w(e=new C(this.a.c+",serif",M(this.a))),this.g.a.style.cssText=e,e=w(e=new C(this.a.c+",sans-serif",M(this.a))),this.h.a.style.cssText=e,e=w(e=new C("serif",M(this.a))),this.j.a.style.cssText=e,e=w(e=new C("sans-serif",M(this.a))),this.m.a.style.cssText=e,P(this.g),P(this.h),P(this.j),P(this.m)}y.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},H.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),l=new Promise((function(l,o){!function i(){r()-a>=t.f?o():e.fonts.load(function(e){return k(e)+" "+e.f+"00 300px "+S(e.c)}(t.a),t.h).then((function(e){1<=e.length?l():setTimeout(i,25)}),(function(){o()}))}()})),o=null,i=new Promise((function(e,a){o=setTimeout(a,t.f)}));Promise.race([i,l]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var x={D:"serif",C:"sans-serif"},R=null;function D(){if(null===R){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);R=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return R}function W(e,t,a){for(var l in x)if(x.hasOwnProperty(l)&&t===e.f[x[l]]&&a===e.f[x[l]])return!0;return!1}function A(e,t){setTimeout(n((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),t(this.a)}),e),0)}function V(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,l=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(a=l===t.f.serif&&o===t.f["sans-serif"])||(a=D()&&W(t,l,o)),a?r()-t.A>=t.w?D()&&W(t,l,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?A(t,t.v):A(t,t.B):function(t){setTimeout(n((function(){e(this)}),t),50)}(t):A(t,t.v)}(this)};var I=null;function N(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&c(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),O(e,"active")):B(e.a))}function G(e){this.j=e,this.a=new L,this.h=0,this.f=this.g=!0}function U(e,t,a,l,o){var i=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=l||{};if(0===a.length&&i)B(t.a);else{t.f+=a.length,i&&(t.j=i);var u,s=[];for(u=0;u<a.length;u++){var d=a[u],b=r[d.c],g=t.a,f=d;if(g.g&&c(g.f,[g.a.c("wf",f.c,M(f).toString(),"loading")]),O(g,"fontloading",f),g=null,null===I)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);I=f?42<parseInt(f[1],10):!h}else I=!1;g=I?new H(n(t.g,t),n(t.h,t),t.c,d,t.s,b):new z(n(t.g,t),n(t.h,t),t.c,d,t.s,e,b),s.push(g)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}V.prototype.g=function(e){var t=this.a;t.g&&c(t.f,[t.a.c("wf",e.c,M(e).toString(),"active")],[t.a.c("wf",e.c,M(e).toString(),"loading"),t.a.c("wf",e.c,M(e).toString(),"inactive")]),O(t,"fontactive",e),this.m=!0,N(this)},V.prototype.h=function(e){var t=this.a;if(t.g){var a=f(t.f,t.a.c("wf",e.c,M(e).toString(),"active")),l=[],o=[t.a.c("wf",e.c,M(e).toString(),"loading")];a||l.push(t.a.c("wf",e.c,M(e).toString(),"inactive")),c(t.f,l,o)}O(t,"fontinactive",e),N(this)},G.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var l=[],o=a.timeout;!function(e){e.g&&c(e.f,[e.a.c("wf","loading")]),O(e,"loading")}(t),l=function(e,t,a){var l,o=[];for(l in t)if(t.hasOwnProperty(l)){var i=e.c[l];i&&o.push(i(t[l],a))}return o}(e.a,a,e.c);var i=new V(e.c,t,o);for(e.h=l.length,t=0,a=l.length;t<a;t++)l[t].load((function(t,a,l){U(e,i,t,a,l)}))}(this,new j(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,l=t.a.version;if(a){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(l?"?v="+l:""),(function(l){l?e([]):(o["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(o["__mti_fntLst"+a]){var l,i=o["__mti_fntLst"+a](),n=[];if(i)for(var r=0;r<i.length;r++){var u=i[r].fontfamily;null!=i[r].fontStyle&&null!=i[r].fontWeight?(l=i[r].fontStyle+i[r].fontWeight,n.push(new C(u,l))):n.push(new C(u))}e(n)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,l=this.a.urls||[],o=this.a.families||[],i=this.a.testStrings||{},n=new v;for(t=0,a=l.length;t<a;t++)h(this.c,l[t],p(n));var r=[];for(t=0,a=o.length;t<a;t++)if((l=o[t].split(":"))[1])for(var u=l[1].split(","),s=0;s<u.length;s+=1)r.push(new C(l[0],u[s]));else r.push(new C(l[0]));T(n,(function(){e(r,i)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function le(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new v,a=this.c,l=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var a=t.length,l=0;l<a;l++){var o=t[l].split(":");3==o.length&&e.f.push(o.pop());var i="";2==o.length&&""!=o[1]&&(i=":"),e.a.push(o.join(i))}}(l,o);var i=new X(o);!function(e){for(var t=e.f.length,a=0;a<t;a++){var l=e.f[a].split(":"),o=l[0].replace(/\+/g," "),i=["n4"];if(2<=l.length){var n;if(n=[],r=l[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var d;if((d=r[s]).match(/^[\w-]+$/))if(null==(b=ee.exec(d.toLowerCase())))d="";else{if(d=null==(d=b[2])||""==d?"n":Z[d],null==(b=b[1])||""==b)b="4";else var b=Y[b]||(isNaN(b)?"4":b.substr(0,1));d=[d,b].join("")}else d="";d&&n.push(d)}0<n.length&&(i=n),3==l.length&&(n=[],0<(l=(l=l[2])?l.split(","):n).length&&(l=Q[l[0]])&&(e.c[o]=l))}for(e.c[o]||(l=Q[o])&&(e.c[o]=l),l=0;l<i.length;l+=1)e.a.push(new C(o,i[l]))}}(i),h(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],l=0;l<t;l++)a.push(e.a[l].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(l),p(t)),T(t,(function(){e(i.a,i.c,ae)}))},le.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var l=[],o=0;o<t.length;o+=2)for(var i=t[o],n=t[o+1],r=0;r<n.length;r++)l.push(new C(i,n[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(l)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,a=this.c.o,l=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var o=0,i=a.fonts.length;o<i;++o){var n=a.fonts[o];l.a.push(new C(n.name,F("font-weight:"+n.weight+";font-style:"+n.style)))}e(l.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ie=new G(window);ie.a.c.custom=function(e,t){return new $(t,e)},ie.a.c.fontdeck=function(e,t){return new oe(t,e)},ie.a.c.monotype=function(e,t){return new q(t,e)},ie.a.c.typekit=function(e,t){return new le(t,e)},ie.a.c.google=function(e,t){return new te(t,e)};var ne={load:n(ie.load,ie)};void 0===(l=function(){return ne}.call(t,a,t,e))||(e.exports=l)}()},497:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),i=a(1),n=a(9),r=a(198),u=a(31),s=a(76),d=a(15),b=a(78),g=a(24),c=a(54),f=a(18),h=a(19),m=a(55),v=a(11),p=a(23),T=a(4),_=a(6),y=a(16);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const S=e=>{e=e.parentProps;const{setAttributes:t,attributes:a}=e,{formId:S,align:M,fieldStyle:k,fieldBgColor:F,fieldLabelColor:j,fieldInputColor:B,fieldBorderStyle:O,fieldBorderWidth:L,fieldBorderRadius:E,fieldBorderColor:P,fieldBorderFocusColor:w,buttonAlignment:H,buttonTextColor:z,buttonBgColor:x,buttonTextHoverColor:R,buttonBgHoverColor:D,buttonBorderStyle:W,buttonBorderWidth:A,buttonBorderRadius:V,buttonBorderColor:I,buttonBorderHoverColor:N,fieldSpacing:G,fieldSpacingTablet:U,fieldSpacingMobile:q,fieldLabelSpacing:$,fieldLabelSpacingTablet:J,fieldLabelSpacingMobile:K,labelFontSize:X,labelFontSizeType:Q,labelFontSizeTablet:Y,labelFontSizeMobile:Z,labelFontFamily:ee,labelFontWeight:te,labelLineHeightType:ae,labelLineHeight:le,labelLineHeightTablet:oe,labelLineHeightMobile:ie,labelLoadGoogleFonts:ne,inputFontSize:re,inputFontSizeType:ue,inputFontSizeTablet:se,inputFontSizeMobile:de,inputFontFamily:be,inputFontWeight:ge,inputLineHeightType:ce,inputLineHeight:fe,inputLineHeightTablet:he,inputLineHeightMobile:me,inputLoadGoogleFonts:ve,buttonFontSize:pe,buttonFontSizeType:Te,buttonFontSizeTablet:_e,buttonFontSizeMobile:ye,buttonFontFamily:Ce,buttonFontWeight:Se,buttonLineHeightType:Me,buttonLineHeight:ke,buttonLineHeightTablet:Fe,buttonLineHeightMobile:je,buttonLoadGoogleFonts:Be,enableOveride:Oe,radioCheckSize:Le,radioCheckSizeTablet:Ee,radioCheckSizeMobile:Pe,radioCheckBgColor:we,radioCheckSelectColor:He,radioCheckLableColor:ze,radioCheckBorderColor:xe,radioCheckBorderWidth:Re,radioCheckBorderWidthTablet:De,radioCheckBorderWidthMobile:We,radioCheckBorderWidthUnit:Ae,radioCheckBorderRadius:Ve,radioCheckFontSize:Ie,radioCheckFontSizeType:Ne,radioCheckFontSizeTablet:Ge,radioCheckFontSizeMobile:Ue,radioCheckFontFamily:qe,radioCheckFontWeight:$e,radioCheckLineHeightType:Je,radioCheckLineHeight:Ke,radioCheckLineHeightTablet:Xe,radioCheckLineHeightMobile:Qe,radioCheckLoadGoogleFonts:Ye,validationMsgPosition:Ze,validationMsgColor:et,validationMsgBgColor:tt,enableHighlightBorder:at,highlightBorderColor:lt,validationMsgFontSize:ot,validationMsgFontSizeType:it,validationMsgFontSizeTablet:nt,validationMsgFontSizeMobile:rt,validationMsgFontFamily:ut,validationMsgFontWeight:st,validationMsgLineHeightType:dt,validationMsgLineHeight:bt,validationMsgLineHeightTablet:gt,validationMsgLineHeightMobile:ct,validationMsgLoadGoogleFonts:ft,successMsgColor:ht,successMsgBgColor:mt,successMsgBorderColor:vt,errorMsgColor:pt,errorMsgBgColor:Tt,errorMsgBorderColor:_t,msgBorderSize:yt,msgBorderSizeUnit:Ct,msgBorderRadius:St,msgFontSize:Mt,msgFontSizeType:kt,msgFontSizeTablet:Ft,msgFontSizeMobile:jt,msgFontFamily:Bt,msgFontWeight:Ot,msgLineHeightType:Lt,msgLineHeight:Et,msgLineHeightTablet:Pt,msgLineHeightMobile:wt,msgLoadGoogleFonts:Ht,radioCheckBorderRadiusType:zt,msgBorderRadiusType:xt,fieldBorderRadiusType:Rt,buttonBorderRadiusType:Dt,messageTopPaddingDesktop:Wt,messageRightPaddingDesktop:At,messageBottomPaddingDesktop:Vt,messageLeftPaddingDesktop:It,messageTopPaddingTablet:Nt,messageRightPaddingTablet:Gt,messageBottomPaddingTablet:Ut,messageLeftPaddingTablet:qt,messageTopPaddingMobile:$t,messageRightPaddingMobile:Jt,messageBottomPaddingMobile:Kt,messageLeftPaddingMobile:Xt,messagePaddingTypeDesktop:Qt,messagePaddingTypeTablet:Yt,messagePaddingTypeMobile:Zt,messageSpacingLink:ea,buttonTopPaddingDesktop:ta,buttonRightPaddingDesktop:aa,buttonBottomPaddingDesktop:la,buttonLeftPaddingDesktop:oa,buttonTopPaddingTablet:ia,buttonRightPaddingTablet:na,buttonBottomPaddingTablet:ra,buttonLeftPaddingTablet:ua,buttonTopPaddingMobile:sa,buttonRightPaddingMobile:da,buttonBottomPaddingMobile:ba,buttonLeftPaddingMobile:ga,buttonPaddingTypeDesktop:ca,buttonPaddingTypeTablet:fa,buttonPaddingTypeMobile:ha,buttonSpacingLink:ma,fieldTopPaddingDesktop:va,fieldRightPaddingDesktop:pa,fieldBottomPaddingDesktop:Ta,fieldLeftPaddingDesktop:_a,fieldTopPaddingTablet:ya,fieldRightPaddingTablet:Ca,fieldBottomPaddingTablet:Sa,fieldLeftPaddingTablet:Ma,fieldTopPaddingMobile:ka,fieldRightPaddingMobile:Fa,fieldBottomPaddingMobile:ja,fieldLeftPaddingMobile:Ba,fieldPaddingTypeDesktop:Oa,fieldPaddingTypeMobile:La,fieldPaddingTypeTablet:Ea,fieldSpacingLink:Pa,labelFontStyle:wa,labelTransform:Ha,labelDecoration:za,inputFontStyle:xa,inputTransform:Ra,inputDecoration:Da,buttonFontStyle:Wa,buttonTransform:Aa,buttonDecoration:Va,radioCheckFontStyle:Ia,radioCheckTransform:Na,radioCheckDecoration:Ga,validationMsgFontStyle:Ua,validationMsgTransform:qa,validationMsgDecoration:$a,msgFontStyle:Ja,msgTransform:Ka,msgDecoration:Xa}=a;let Qa,Ya,Za,el,tl,al;if(!0===ne){const e={google:{families:[ee+(te?":"+te:"")]}};Za=o.a.createElement(r.a,{config:e})}if(!0===ve){const e={google:{families:[be+(ge?":"+ge:"")]}};Qa=o.a.createElement(r.a,{config:e})}if(!0===Be){const e={google:{families:[Ce+(Se?":"+Se:"")]}};Ya=o.a.createElement(r.a,{config:e})}if(!0===Ye){const e={google:{families:[qe+($e?":"+$e:"")]}};el=o.a.createElement(r.a,{config:e})}if(!0===ft){const e={google:{families:[ut+(st?":"+st:"")]}};tl=o.a.createElement(r.a,{config:e})}if(!0===Ht){const e={google:{families:[Bt+(Ot?":"+Ot:"")]}};al=o.a.createElement(r.a,{config:e})}const ll=o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{label:Object(i.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:z,onColorChange:e=>t({buttonTextColor:e})}),o.a.createElement(d.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:x,onColorChange:e=>t({buttonBgColor:e})})),ol=o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{label:Object(i.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:R,onColorChange:e=>t({buttonTextHoverColor:e})}),o.a.createElement(d.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:D,onColorChange:e=>t({buttonBgHoverColor:e})})),il=o.a.createElement(y.a,{title:Object(i.__)("General","ultimate-addons-for-gutenberg")},o.a.createElement(_.SelectControl,{label:Object(i.__)("Select Form","ultimate-addons-for-gutenberg"),value:S,onChange:e=>{if(!e)return t({isHtml:!1}),void t({formId:null});t({isHtml:!1}),t({formId:e})},options:uagb_blocks_info.cf7_forms}),o.a.createElement(h.a,{setAttributes:t,label:Object(i.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:M,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-left")}),tooltip:Object(i.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-center")}),tooltip:Object(i.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-right")}),tooltip:Object(i.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),nl=o.a.createElement(y.a,{title:Object(i.__)("Field","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(h.a,{setAttributes:t,label:Object(i.__)("Style","ultimate-addons-for-gutenberg"),data:{value:k,label:"fieldStyle"},options:[{value:"box",label:Object(i.__)("Box","ultimate-addons-for-gutenberg")},{value:"underline",label:Object(i.__)("Underline","ultimate-addons-for-gutenberg")}]})),rl=o.a.createElement(y.a,{title:Object(i.__)("Radio & Checkbox","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(_.ToggleControl,{label:Object(i.__)("Override Current Style","ultimate-addons-for-gutenberg"),checked:Oe,onChange:()=>t({enableOveride:!Oe})})),ul=o.a.createElement(y.a,{title:Object(i.__)("Success/Error Message","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"uagb-settings-notice"},Object(i.__)("Note: This styling can be only seen at frontend","ultimate-addons-for-gutenberg")),o.a.createElement(h.a,{setAttributes:t,label:Object(i.__)("Validation Message Position","ultimate-addons-for-gutenberg"),data:{value:Ze,label:"validationMsgPosition"},options:[{value:"default",label:Object(i.__)("Default","ultimate-addons-for-gutenberg")},{value:"bottom_right",label:Object(i.__)("Bottom Right Side of Field","ultimate-addons-for-gutenberg")}]}),o.a.createElement(_.ToggleControl,{label:Object(i.__)("Highlight Borders","ultimate-addons-for-gutenberg"),checked:at,onChange:()=>t({enableHighlightBorder:!at})})),sl=o.a.createElement(y.a,{title:Object(i.__)("Submit Button","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(h.a,{setAttributes:t,label:Object(i.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:H,label:"buttonAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-left")}),tooltip:Object(i.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-center")}),tooltip:Object(i.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-right")}),tooltip:Object(i.__)("Right","ultimate-addons-for-gutenberg")},{value:"justify",icon:o.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-justify")}),tooltip:Object(i.__)("Justified","ultimate-addons-for-gutenberg")}],showIcons:!0})),dl=o.a.createElement(y.a,{title:Object(i.__)("Label & Input","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(d.a,{label:Object(i.__)("Label Color","ultimate-addons-for-gutenberg"),colorValue:j,onColorChange:e=>t({fieldLabelColor:e})}),o.a.createElement(u.a,{label:Object(i.__)("Label Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:ne,label:"labelLoadGoogleFonts"},fontFamily:{value:ee,label:"labelFontFamily"},fontWeight:{value:te,label:"labelFontWeight"},fontStyle:{value:wa,label:"labelFontStyle"},transform:{value:Ha,label:"labelTransform"},decoration:{value:za,label:"labelDecoration"},fontSizeType:{value:Q,label:"labelFontSizeType"},fontSize:{value:X,label:"labelFontSize"},fontSizeMobile:{value:Z,label:"labelFontSizeMobile"},fontSizeTablet:{value:Y,label:"labelFontSizeTablet"},lineHeightType:{value:ae,label:"labelLineHeightType"},lineHeight:{value:le,label:"labelLineHeight"},lineHeightMobile:{value:ie,label:"labelLineHeightMobile"},lineHeightTablet:{value:oe,label:"labelLineHeightTablet"}}),o.a.createElement(d.a,{label:Object(i.__)("Input Color","ultimate-addons-for-gutenberg"),colorValue:B,onColorChange:e=>t({fieldInputColor:e})}),o.a.createElement(u.a,{label:Object(i.__)("Input Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:ve,label:"inputLoadGoogleFonts"},fontFamily:{value:be,label:"inputFontFamily"},fontWeight:{value:ge,label:"inputFontWeight"},fontStyle:{value:xa,label:"inputFontStyle"},transform:{value:Ra,label:"inputTransform"},decoration:{value:Da,label:"inputDecoration"},fontSizeType:{value:ue,label:"inputFontSizeType"},fontSize:{value:re,label:"inputFontSize"},fontSizeMobile:{value:de,label:"inputFontSizeMobile"},fontSizeTablet:{value:se,label:"inputFontSizeTablet"},lineHeightType:{value:ce,label:"inputLineHeightType"},lineHeight:{value:fe,label:"inputLineHeight"},lineHeightMobile:{value:me,label:"inputLineHeightMobile"},lineHeightTablet:{value:he,label:"inputLineHeightTablet"}}),o.a.createElement(d.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:F,onColorChange:e=>t({fieldBgColor:e})}),o.a.createElement(p.a,{label:Object(i.__)("Spacing Between Labels & Input","ultimate-addons-for-gutenberg"),data:{desktop:{value:$,label:"fieldLabelSpacing"},tablet:{value:J,label:"fieldLabelSpacingTablet"},mobile:{value:K,label:"fieldLabelSpacingMobile"}},min:0,max:30,displayUnit:!1,setAttributes:t})),bl=o.a.createElement(y.a,{title:Object(i.__)("Field","ultimate-addons-for-gutenberg"),initialOpen:!0},"box"===k&&o.a.createElement(s.a,{disabledBorderTitle:!1,setAttributes:t,borderStyle:{value:O,label:"fieldBorderStyle",title:Object(i.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:L,label:"fieldBorderWidth",title:Object(i.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:E,label:"fieldBorderRadius",title:Object(i.__)("Radius","ultimate-addons-for-gutenberg"),displayUnit:!0,unit:{value:Rt,label:"fieldBorderRadiusType"}},borderColor:{value:P,label:"fieldBorderColor",title:Object(i.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:!1,disableBottomSeparator:!1}),o.a.createElement(d.a,{label:Object(i.__)("Active Color","ultimate-addons-for-gutenberg"),colorValue:w,onColorChange:e=>t({fieldBorderFocusColor:e})}),o.a.createElement(p.a,{label:Object(i.__)("Fields Space","ultimate-addons-for-gutenberg"),data:{desktop:{value:G,label:"fieldSpacing"},tablet:{value:U,label:"fieldSpacingTablet"},mobile:{value:q,label:"fieldSpacingMobile"}},min:0,max:50,displayUnit:!1,setAttributes:t}),o.a.createElement(c.a,C({},e,{label:Object(i.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:va,label:"fieldTopPaddingDesktop"},valueRight:{value:pa,label:"fieldRightPaddingDesktop"},valueBottom:{value:Ta,label:"fieldBottomPaddingDesktop"},valueLeft:{value:_a,label:"fieldLeftPaddingDesktop"},valueTopTablet:{value:ya,label:"fieldTopPaddingTablet"},valueRightTablet:{value:Ca,label:"fieldRightPaddingTablet"},valueBottomTablet:{value:Sa,label:"fieldBottomPaddingTablet"},valueLeftTablet:{value:Ma,label:"fieldLeftPaddingTablet"},valueTopMobile:{value:ka,label:"fieldTopPaddingMobile"},valueRightMobile:{value:Fa,label:"fieldRightPaddingMobile"},valueBottomMobile:{value:ja,label:"fieldBottomPaddingMobile"},valueLeftMobile:{value:Ba,label:"fieldLeftPaddingMobile"},unit:{value:Oa,label:"fieldPaddingTypeDesktop"},mUnit:{value:La,label:"fieldPaddingTypeMobile"},tUnit:{value:Ea,label:"fieldPaddingTypeTablet"},attributes:a,setAttributes:t,link:{value:Pa,label:"fieldSpacingLink"}}))),gl=o.a.createElement(y.a,{title:Object(i.__)("Radio & Checkbox","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(p.a,{label:Object(i.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:Le,label:"radioCheckSize"},tablet:{value:Ee,label:"radioCheckSizeTablet"},mobile:{value:Pe,label:"radioCheckSizeMobile"}},min:0,max:50,displayUnit:!1,setAttributes:t}),o.a.createElement(d.a,{label:Object(i.__)("Label Color","ultimate-addons-for-gutenberg"),colorValue:ze,onColorChange:e=>t({radioCheckLableColor:e})}),o.a.createElement(u.a,{label:Object(i.__)("Label Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:Ye,label:"radioCheckLoadGoogleFonts"},fontFamily:{value:qe,label:"radioCheckFontFamily"},fontWeight:{value:$e,label:"radioCheckFontWeight"},fontStyle:{value:Ia,label:"radioCheckFontStyle"},transform:{value:Na,label:"radioCheckTransform"},decoration:{value:Ga,label:"radioCheckDecoration"},fontSizeType:{value:Ne,label:"radioCheckFontSizeType"},fontSize:{value:Ie,label:"radioCheckFontSize"},fontSizeMobile:{value:Ue,label:"radioCheckFontSizeMobile"},fontSizeTablet:{value:Ge,label:"radioCheckFontSizeTablet"},lineHeightType:{value:Je,label:"radioCheckLineHeightType"},lineHeight:{value:Ke,label:"radioCheckLineHeight"},lineHeightMobile:{value:Qe,label:"radioCheckLineHeightMobile"},lineHeightTablet:{value:Xe,label:"radioCheckLineHeightTablet"}}),o.a.createElement(d.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:we,onColorChange:e=>t({radioCheckBgColor:e})}),o.a.createElement(d.a,{label:Object(i.__)("Selected Color","ultimate-addons-for-gutenberg"),colorValue:He,onColorChange:e=>t({radioCheckSelectColor:e})}),"none"!==O&&o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{label:Object(i.__)("Border Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:Re,label:"radioCheckBorderWidth"},tablet:{value:De,label:"radioCheckBorderWidthTablet"},mobile:{value:We,label:"radioCheckBorderWidthMobile"}},min:0,max:50,unit:{value:Ae,label:"radioCheckBorderWidthUnit"},units:[{name:Object(i.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:t}),o.a.createElement(d.a,{label:Object(i.__)("Color","ultimate-addons-for-gutenberg"),colorValue:xe,onColorChange:e=>t({radioCheckBorderColor:e})})),o.a.createElement(f.a,{label:Object(i.__)("Checkbox Rounded Corners","ultimate-addons-for-gutenberg"),setAttributes:t,value:Ve,onChange:e=>t({radioCheckBorderRadius:e}),min:0,max:100,unit:{value:zt,label:"radioCheckBorderRadiusType"},units:[{name:Object(i.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(i.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),cl=o.a.createElement(y.a,{title:Object(i.__)("Submit Button","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(m.a,{tabs:[{name:"normal",title:Object(i.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(i.__)("Hover","ultimate-addons-for-gutenberg")}],normal:ll,hover:ol,disableBottomSeparator:!1}),o.a.createElement(s.a,{disabledBorderTitle:!1,setAttributes:t,borderStyle:{value:W,label:"buttonBorderStyle",title:Object(i.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:A,label:"buttonBorderWidth",title:Object(i.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:V,label:"buttonBorderRadius",title:Object(i.__)("Radius","ultimate-addons-for-gutenberg"),displayUnit:!0,unit:{value:Dt,label:"buttonBorderRadiusType"}},borderColor:{value:I,label:"buttonBorderColor",title:Object(i.__)("Border Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:N,label:"buttonBorderHoverColor",title:Object(i.__)("Border Color","ultimate-addons-for-gutenberg")}}),o.a.createElement(u.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:Be,label:"buttonLoadGoogleFonts"},fontFamily:{value:Ce,label:"buttonFontFamily"},fontWeight:{value:Se,label:"buttonFontWeight"},fontStyle:{value:Wa,label:"buttonFontStyle"},transform:{value:Aa,label:"buttonTransform"},decoration:{value:Va,label:"buttonDecoration"},fontSizeType:{value:Te,label:"buttonFontSizeType"},fontSize:{value:pe,label:"buttonFontSize"},fontSizeMobile:{value:ye,label:"buttonFontSizeMobile"},fontSizeTablet:{value:_e,label:"buttonFontSizeTablet"},lineHeightType:{value:Me,label:"buttonLineHeightType"},lineHeight:{value:ke,label:"buttonLineHeight"},lineHeightMobile:{value:je,label:"buttonLineHeightMobile"},lineHeightTablet:{value:Fe,label:"buttonLineHeightTablet"}}),o.a.createElement(c.a,C({},e,{label:Object(i.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ta,label:"buttonTopPaddingDesktop"},valueRight:{value:aa,label:"buttonRightPaddingDesktop"},valueBottom:{value:la,label:"buttonBottomPaddingDesktop"},valueLeft:{value:oa,label:"buttonLeftPaddingDesktop"},valueTopTablet:{value:ia,label:"buttonTopPaddingTablet"},valueRightTablet:{value:na,label:"buttonRightPaddingTablet"},valueBottomTablet:{value:ra,label:"buttonBottomPaddingTablet"},valueLeftTablet:{value:ua,label:"buttonLeftPaddingTablet"},valueTopMobile:{value:sa,label:"buttonTopPaddingMobile"},valueRightMobile:{value:da,label:"buttonRightPaddingMobile"},valueBottomMobile:{value:ba,label:"buttonBottomPaddingMobile"},valueLeftMobile:{value:ga,label:"buttonLeftPaddingMobile"},unit:{value:ca,label:"buttonPaddingTypeDesktop"},mUnit:{value:ha,label:"buttonPaddingTypeMobile"},tUnit:{value:fa,label:"buttonPaddingTypeTablet"},attributes:a,setAttributes:t,link:{value:ma,label:"buttonSpacingLink"}}))),fl=o.a.createElement(y.a,{title:Object(i.__)("Success/Error Message","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"uagb-settings-notice"},Object(i.__)("Note: This styling can be only seen at frontend","ultimate-addons-for-gutenberg")),o.a.createElement(d.a,{label:Object(i.__)("Validation Message Color","ultimate-addons-for-gutenberg"),colorValue:et,onColorChange:e=>t({validationMsgColor:e})}),o.a.createElement(u.a,{label:Object(i.__)("Validation Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:ft,label:"validationMsgLoadGoogleFonts"},fontFamily:{value:ut,label:"validationMsgFontFamily"},fontWeight:{value:st,label:"validationMsgFontWeight"},fontStyle:{value:Ua,label:"validationMsgFontStyle"},transform:{value:qa,label:"validationMsgTransform"},decoration:{value:$a,label:"validationMsgDecoration"},fontSizeType:{value:it,label:"validationMsgFontSizeType"},fontSize:{value:ot,label:"validationMsgFontSize"},fontSizeMobile:{value:rt,label:"validationMsgFontSizeMobile"},fontSizeTablet:{value:nt,label:"validationMsgFontSizeTablet"},lineHeightType:{value:dt,label:"validationMsgLineHeightType"},lineHeight:{value:bt,label:"validationMsgLineHeight"},lineHeightMobile:{value:ct,label:"validationMsgLineHeightMobile"},lineHeightTablet:{value:gt,label:"validationMsgLineHeightTablet"}}),"bottom_right"===Ze&&o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{label:Object(i.__)("Message Background Color","ultimate-addons-for-gutenberg"),colorValue:tt,onColorChange:e=>t({validationMsgBgColor:e})})),at&&o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{label:Object(i.__)("Highlight Border Color","ultimate-addons-for-gutenberg"),colorValue:lt,onColorChange:e=>t({highlightBorderColor:e})})),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(i.__)("Success/Error Message","ultimate-addons-for-gutenberg")),o.a.createElement(u.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:Ht,label:"msgLoadGoogleFonts"},fontFamily:{value:Bt,label:"msgFontFamily"},fontWeight:{value:Ot,label:"msgFontWeight"},fontStyle:{value:Ja,label:"msgFontStyle"},transform:{value:Ka,label:"msgTransform"},decoration:{value:Xa,label:"msgDecoration"},fontSizeType:{value:kt,label:"msgFontSizeType"},fontSize:{value:Mt,label:"msgFontSize"},fontSizeMobile:{value:jt,label:"msgFontSizeMobile"},fontSizeTablet:{value:Ft,label:"msgFontSizeTablet"},lineHeightType:{value:Lt,label:"msgLineHeightType"},lineHeight:{value:Et,label:"msgLineHeight"},lineHeightMobile:{value:wt,label:"msgLineHeightMobile"},lineHeightTablet:{value:Pt,label:"msgLineHeightTablet"}}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(i.__)("Success Message","ultimate-addons-for-gutenberg")),o.a.createElement(d.a,{label:Object(i.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ht,onColorChange:e=>t({successMsgColor:e})}),o.a.createElement(d.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:mt,onColorChange:e=>t({successMsgBgColor:e})}),o.a.createElement(d.a,{label:Object(i.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:vt,onColorChange:e=>t({successMsgBorderColor:e})}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(i.__)("Error Message","ultimate-addons-for-gutenberg")),o.a.createElement(d.a,{label:Object(i.__)("Color","ultimate-addons-for-gutenberg"),colorValue:pt,onColorChange:e=>t({errorMsgColor:e})}),o.a.createElement(d.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Tt,onColorChange:e=>t({errorMsgBgColor:e})}),o.a.createElement(d.a,{label:Object(i.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:_t,onColorChange:e=>t({errorMsgBorderColor:e})}),o.a.createElement(f.a,{label:Object(i.__)("Border Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:yt,onChange:e=>t({msgBorderSize:e}),min:0,max:50,unit:{value:Ct,label:"msgBorderSizeUnit"},units:[{name:Object(i.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}]}),o.a.createElement(f.a,{label:Object(i.__)("Border Radius","ultimate-addons-for-gutenberg"),setAttributes:t,value:St,onChange:e=>t({msgBorderRadius:e}),min:0,max:100,unit:{value:xt,label:"msgBorderRadiusType"},units:[{name:Object(i.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(i.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),o.a.createElement(c.a,C({},e,{label:Object(i.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Wt,label:"messageTopPaddingDesktop"},valueRight:{value:At,label:"messageRightPaddingDesktop"},valueBottom:{value:Vt,label:"messageBottomPaddingDesktop"},valueLeft:{value:It,label:"messageLeftPaddingDesktop"},valueTopTablet:{value:Nt,label:"messageTopPaddingTablet"},valueRightTablet:{value:Gt,label:"messageRightPaddingTablet"},valueBottomTablet:{value:Ut,label:"messageBottomPaddingTablet"},valueLeftTablet:{value:qt,label:"messageLeftPaddingTablet"},valueTopMobile:{value:$t,label:"messageTopPaddingMobile"},valueRightMobile:{value:Jt,label:"messageRightPaddingMobile"},valueBottomMobile:{value:Kt,label:"messageBottomPaddingMobile"},valueLeftMobile:{value:Xt,label:"messageLeftPaddingMobile"},unit:{value:Qt,label:"messagePaddingTypeDesktop"},mUnit:{value:Zt,label:"messagePaddingTypeMobile"},tUnit:{value:Yt,label:"messagePaddingTypeTablet"},attributes:a,setAttributes:t,link:{value:ea,label:"messageSpacingLink"}})));return o.a.createElement(l.Suspense,{fallback:Object(n.a)()},o.a.createElement(T.BlockControls,{key:"controls"},o.a.createElement(T.AlignmentToolbar,{value:M,onChange:e=>t({align:e})})),o.a.createElement(T.InspectorControls,null,o.a.createElement(b.a,null,o.a.createElement(g.b,g.a.general,il,nl,rl,sl,ul),o.a.createElement(g.b,g.a.style,bl,dl,Oe&&gl,cl,fl),o.a.createElement(g.b,C({},g.a.advance,{parentProps:e})))),Qa,Ya,Za,el,tl,al)};t.default=o.a.memo(S)}}]);