(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[14],{241:function(e,t,a){e.exports=a(244)()},242:function(e,t,a){"use strict";var l=a(241),o=a.n(l),n=a(243),i=a.n(n),r=a(3);if(void 0===s)var s=[];const u=e=>{const[t,a]=Object(r.useState)([]);Object(r.useEffect)(()=>{u()},[]),Object(r.useEffect)(()=>{const{onStatus:a,config:l}=e;void 0!==t.status&&a(t.status),l!==t.config&&u()},[e]);const l=()=>{a({status:"loading"})},o=()=>{a({status:"active"})},n=()=>{a({status:"inactive"})},u=()=>{var t;s.includes(e.config.google.families[0])||(i.a.load({...e.config,loading:l,active:o,inactive:n}),t=e.config.google.families[0],s.includes(t)||s.push(t))},{children:d}=e;return d||null};u.propTypes={config:o.a.object.isRequired,children:o.a.element,onStatus:o.a.func.isRequired},u.defaultProps={onStatus:()=>{}},t.a=u},243:function(e,t,a){var l;!function(){function o(e,t,a){return e.call.apply(e.bind,arguments)}function n(e,t,a){if(!e)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,l),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:n).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function d(e,t,a,l){if(t=e.c.createElement(t),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?t.style.cssText=a[o]:t.setAttribute(o,a[o]));return l&&t.appendChild(e.c.createTextNode(l)),t}function g(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function c(e,t,a){t=t||[],a=a||[];for(var l=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var n=!1,i=0;i<l.length;i+=1)if(t[o]===l[i]){n=!0;break}n||l.push(t[o])}for(t=[],o=0;o<l.length;o+=1){for(n=!1,i=0;i<a.length;i+=1)if(l[o]===a[i]){n=!0;break}n||t.push(l[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var a=e.className.split(/\s+/),l=0,o=a.length;l<o;l++)if(a[l]==t)return!0;return!1}function h(e,t,a){function l(){r&&o&&n&&(r(i),r=null)}t=d(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,n=!0,i=null,r=a||null;u?(t.onload=function(){o=!0,l()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),l()}):setTimeout((function(){o=!0,l()}),0),g(e,"head",t)}function m(e,t,a,l){var o=e.c.getElementsByTagName("head")[0];if(o){var n=d(e,"script",{src:t}),i=!1;return n.onload=n.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),n.onload=n.onreadystatechange=null,"HEAD"==n.parentNode.tagName&&o.removeChild(n))},o.appendChild(n),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),l||5e3),n}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,T(e)}}function y(e,t){e.c=t,T(e)}function T(e){0==e.a&&e.c&&(e.c(),e.c=null)}function _(e){this.a=e||"-"}function C(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function S(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var l=e[a].replace(/['"]/g,"");-1!=l.indexOf(" ")||/^\d/.test(l)?t.push("'"+l+"'"):t.push(l)}return t.join(",")}function F(e){return e.a+e.f}function M(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function B(e){var t=4,a="n",l=null;return e&&((l=e.match(/(normal|oblique|italic)/i))&&l[1]&&(a=l[1].substr(0,1).toLowerCase()),(l=e.match(/([1-9]00|normal|bold)/i))&&l[1]&&(/bold/i.test(l[1])?t=7:/[1-9]00/.test(l[1])&&(t=parseInt(l[1].substr(0,1),10)))),a+t}function k(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new _("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function P(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),a=[],l=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),c(e.f,a,l)}j(e,"inactive")}function j(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,F(a)):e.h[t]())}function O(){this.c={}}function L(e,t){this.c=e,this.f=t,this.a=d(this.c,"span",{"aria-hidden":"true"},this.f)}function E(e){g(e.c,"body",e.a)}function w(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+S(e.c)+";font-style:"+M(e)+";font-weight:"+e.f+"00;"}function H(e,t,a,l,o,n){this.g=e,this.j=t,this.a=l,this.c=a,this.f=o||3e3,this.h=n||void 0}function z(e,t,a,l,o,n,i){this.v=e,this.B=t,this.c=a,this.a=l,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=n||null,this.m=this.j=this.h=this.g=null,this.g=new L(this.c,this.s),this.h=new L(this.c,this.s),this.j=new L(this.c,this.s),this.m=new L(this.c,this.s),e=w(e=new C(this.a.c+",serif",F(this.a))),this.g.a.style.cssText=e,e=w(e=new C(this.a.c+",sans-serif",F(this.a))),this.h.a.style.cssText=e,e=w(e=new C("serif",F(this.a))),this.j.a.style.cssText=e,e=w(e=new C("sans-serif",F(this.a))),this.m.a.style.cssText=e,E(this.g),E(this.h),E(this.j),E(this.m)}_.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},H.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),l=new Promise((function(l,o){!function n(){r()-a>=t.f?o():e.fonts.load(function(e){return M(e)+" "+e.f+"00 300px "+S(e.c)}(t.a),t.h).then((function(e){1<=e.length?l():setTimeout(n,25)}),(function(){o()}))}()})),o=null,n=new Promise((function(e,a){o=setTimeout(a,t.f)}));Promise.race([n,l]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var R={D:"serif",C:"sans-serif"},x=null;function D(){if(null===x){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);x=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return x}function A(e,t,a){for(var l in R)if(R.hasOwnProperty(l)&&t===e.f[R[l]]&&a===e.f[R[l]])return!0;return!1}function W(e,t){setTimeout(i((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function V(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,l=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(a=l===t.f.serif&&o===t.f["sans-serif"])||(a=D()&&A(t,l,o)),a?r()-t.A>=t.w?D()&&A(t,l,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?W(t,t.v):W(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):W(t,t.v)}(this)};var I=null;function N(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&c(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),j(e,"active")):P(e.a))}function G(e){this.j=e,this.a=new O,this.h=0,this.f=this.g=!0}function U(e,t,a,l,o){var n=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=l||{};if(0===a.length&&n)P(t.a);else{t.f+=a.length,n&&(t.j=n);var s,u=[];for(s=0;s<a.length;s++){var d=a[s],g=r[d.c],b=t.a,f=d;if(b.g&&c(b.f,[b.a.c("wf",f.c,F(f).toString(),"loading")]),j(b,"fontloading",f),b=null,null===I)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);I=f?42<parseInt(f[1],10):!h}else I=!1;b=I?new H(i(t.g,t),i(t.h,t),t.c,d,t.s,g):new z(i(t.g,t),i(t.h,t),t.c,d,t.s,e,g),u.push(b)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}V.prototype.g=function(e){var t=this.a;t.g&&c(t.f,[t.a.c("wf",e.c,F(e).toString(),"active")],[t.a.c("wf",e.c,F(e).toString(),"loading"),t.a.c("wf",e.c,F(e).toString(),"inactive")]),j(t,"fontactive",e),this.m=!0,N(this)},V.prototype.h=function(e){var t=this.a;if(t.g){var a=f(t.f,t.a.c("wf",e.c,F(e).toString(),"active")),l=[],o=[t.a.c("wf",e.c,F(e).toString(),"loading")];a||l.push(t.a.c("wf",e.c,F(e).toString(),"inactive")),c(t.f,l,o)}j(t,"fontinactive",e),N(this)},G.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var l=[],o=a.timeout;!function(e){e.g&&c(e.f,[e.a.c("wf","loading")]),j(e,"loading")}(t),l=function(e,t,a){var l,o=[];for(l in t)if(t.hasOwnProperty(l)){var n=e.c[l];n&&o.push(n(t[l],a))}return o}(e.a,a,e.c);var n=new V(e.c,t,o);for(e.h=l.length,t=0,a=l.length;t<a;t++)l[t].load((function(t,a,l){U(e,n,t,a,l)}))}(this,new k(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,l=t.a.version;if(a){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(l?"?v="+l:""),(function(l){l?e([]):(o["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(o["__mti_fntLst"+a]){var l,n=o["__mti_fntLst"+a](),i=[];if(n)for(var r=0;r<n.length;r++){var s=n[r].fontfamily;null!=n[r].fontStyle&&null!=n[r].fontWeight?(l=n[r].fontStyle+n[r].fontWeight,i.push(new C(s,l))):i.push(new C(s))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,l=this.a.urls||[],o=this.a.families||[],n=this.a.testStrings||{},i=new p;for(t=0,a=l.length;t<a;t++)h(this.c,l[t],v(i));var r=[];for(t=0,a=o.length;t<a;t++)if((l=o[t].split(":"))[1])for(var s=l[1].split(","),u=0;u<s.length;u+=1)r.push(new C(l[0],s[u]));else r.push(new C(l[0]));y(i,(function(){e(r,n)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Y={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function le(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,l=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var a=t.length,l=0;l<a;l++){var o=t[l].split(":");3==o.length&&e.f.push(o.pop());var n="";2==o.length&&""!=o[1]&&(n=":"),e.a.push(o.join(n))}}(l,o);var n=new X(o);!function(e){for(var t=e.f.length,a=0;a<t;a++){var l=e.f[a].split(":"),o=l[0].replace(/\+/g," "),n=["n4"];if(2<=l.length){var i;if(i=[],r=l[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var d;if((d=r[u]).match(/^[\w-]+$/))if(null==(g=ee.exec(d.toLowerCase())))d="";else{if(d=null==(d=g[2])||""==d?"n":Z[d],null==(g=g[1])||""==g)g="4";else var g=Q[g]||(isNaN(g)?"4":g.substr(0,1));d=[d,g].join("")}else d="";d&&i.push(d)}0<i.length&&(n=i),3==l.length&&(i=[],0<(l=(l=l[2])?l.split(","):i).length&&(l=Y[l[0]])&&(e.c[o]=l))}for(e.c[o]||(l=Y[o])&&(e.c[o]=l),l=0;l<n.length;l+=1)e.a.push(new C(o,n[l]))}}(n),h(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],l=0;l<t;l++)a.push(e.a[l].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(l),v(t)),y(t,(function(){e(n.a,n.c,ae)}))},le.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var l=[],o=0;o<t.length;o+=2)for(var n=t[o],i=t[o+1],r=0;r<i.length;r++)l.push(new C(n,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(l)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,a=this.c.o,l=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var o=0,n=a.fonts.length;o<n;++o){var i=a.fonts[o];l.a.push(new C(i.name,B("font-weight:"+i.weight+";font-style:"+i.style)))}e(l.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ne=new G(window);ne.a.c.custom=function(e,t){return new $(t,e)},ne.a.c.fontdeck=function(e,t){return new oe(t,e)},ne.a.c.monotype=function(e,t){return new q(t,e)},ne.a.c.typekit=function(e,t){return new le(t,e)},ne.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(ne.load,ne)};void 0===(l=function(){return ie}.call(t,a,t,e))||(e.exports=l)}()},244:function(e,t,a){"use strict";var l=a(245);function o(){}function n(){}n.resetWarningCache=o,e.exports=function(){function e(e,t,a,o,n,i){if(i!==l){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:o};return a.PropTypes=a,a}},245:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},537:function(e,t,a){"use strict";a.r(t);var l=a(1),o=a.n(l),n=a(2),i=a(11),r=a(242),s=a(24),u=a(58),d=a(16),g=a(64),b=a(20),c=a(42),f=a(13),h=a(21),m=a(43),p=a(12),v=a(5),y=a(7);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const _=e=>{e=e.parentProps;const{setAttributes:t,attributes:a}=e,{formId:_,align:C,fieldStyle:S,fieldBgColor:F,fieldLabelColor:M,fieldInputColor:B,fieldBorderStyle:k,fieldBorderWidth:P,fieldBorderRadius:j,fieldBorderColor:O,fieldBorderFocusColor:L,buttonAlignment:E,buttonTextColor:w,buttonBgColor:H,buttonTextHoverColor:z,buttonBgHoverColor:R,buttonBorderStyle:x,buttonBorderWidth:D,buttonBorderRadius:A,buttonBorderColor:W,buttonBorderHoverColor:V,fieldSpacing:I,fieldLabelSpacing:N,labelFontSize:G,labelFontSizeType:U,labelFontSizeTablet:q,labelFontSizeMobile:$,labelFontFamily:J,labelFontWeight:K,labelLineHeightType:X,labelLineHeight:Y,labelLineHeightTablet:Q,labelLineHeightMobile:Z,labelLoadGoogleFonts:ee,inputFontSize:te,inputFontSizeType:ae,inputFontSizeTablet:le,inputFontSizeMobile:oe,inputFontFamily:ne,inputFontWeight:ie,inputLineHeightType:re,inputLineHeight:se,inputLineHeightTablet:ue,inputLineHeightMobile:de,inputLoadGoogleFonts:ge,buttonFontSize:be,buttonFontSizeType:ce,buttonFontSizeTablet:fe,buttonFontSizeMobile:he,buttonFontFamily:me,buttonFontWeight:pe,buttonLineHeightType:ve,buttonLineHeight:ye,buttonLineHeightTablet:Te,buttonLineHeightMobile:_e,buttonLoadGoogleFonts:Ce,enableOveride:Se,radioCheckSize:Fe,radioCheckBgColor:Me,radioCheckSelectColor:Be,radioCheckLableColor:ke,radioCheckBorderColor:Pe,radioCheckBorderWidth:je,radioCheckBorderRadius:Oe,radioCheckFontSize:Le,radioCheckFontSizeType:Ee,radioCheckFontSizeTablet:we,radioCheckFontSizeMobile:He,radioCheckFontFamily:ze,radioCheckFontWeight:Re,radioCheckLineHeightType:xe,radioCheckLineHeight:De,radioCheckLineHeightTablet:Ae,radioCheckLineHeightMobile:We,radioCheckLoadGoogleFonts:Ve,validationMsgPosition:Ie,validationMsgColor:Ne,validationMsgBgColor:Ge,enableHighlightBorder:Ue,highlightBorderColor:qe,validationMsgFontSize:$e,validationMsgFontSizeType:Je,validationMsgFontSizeTablet:Ke,validationMsgFontSizeMobile:Xe,validationMsgFontFamily:Ye,validationMsgFontWeight:Qe,validationMsgLineHeightType:Ze,validationMsgLineHeight:et,validationMsgLineHeightTablet:tt,validationMsgLineHeightMobile:at,validationMsgLoadGoogleFonts:lt,successMsgColor:ot,successMsgBgColor:nt,successMsgBorderColor:it,errorMsgColor:rt,errorMsgBgColor:st,errorMsgBorderColor:ut,msgBorderSize:dt,msgBorderRadius:gt,msgFontSize:bt,msgFontSizeType:ct,msgFontSizeTablet:ft,msgFontSizeMobile:ht,msgFontFamily:mt,msgFontWeight:pt,msgLineHeightType:vt,msgLineHeight:yt,msgLineHeightTablet:Tt,msgLineHeightMobile:_t,msgLoadGoogleFonts:Ct,radioCheckBorderRadiusType:St,msgBorderRadiusType:Ft,fieldBorderRadiusType:Mt,buttonBorderRadiusType:Bt,messageTopPaddingDesktop:kt,messageRightPaddingDesktop:Pt,messageBottomPaddingDesktop:jt,messageLeftPaddingDesktop:Ot,messageTopPaddingTablet:Lt,messageRightPaddingTablet:Et,messageBottomPaddingTablet:wt,messageLeftPaddingTablet:Ht,messageTopPaddingMobile:zt,messageRightPaddingMobile:Rt,messageBottomPaddingMobile:xt,messageLeftPaddingMobile:Dt,messagePaddingTypeDesktop:At,messagePaddingTypeTablet:Wt,messagePaddingTypeMobile:Vt,messageSpacingLink:It,buttonTopPaddingDesktop:Nt,buttonRightPaddingDesktop:Gt,buttonBottomPaddingDesktop:Ut,buttonLeftPaddingDesktop:qt,buttonTopPaddingTablet:$t,buttonRightPaddingTablet:Jt,buttonBottomPaddingTablet:Kt,buttonLeftPaddingTablet:Xt,buttonTopPaddingMobile:Yt,buttonRightPaddingMobile:Qt,buttonBottomPaddingMobile:Zt,buttonLeftPaddingMobile:ea,buttonPaddingTypeDesktop:ta,buttonPaddingTypeTablet:aa,buttonPaddingTypeMobile:la,buttonSpacingLink:oa,fieldTopPaddingDesktop:na,fieldRightPaddingDesktop:ia,fieldBottomPaddingDesktop:ra,fieldLeftPaddingDesktop:sa,fieldTopPaddingTablet:ua,fieldRightPaddingTablet:da,fieldBottomPaddingTablet:ga,fieldLeftPaddingTablet:ba,fieldTopPaddingMobile:ca,fieldRightPaddingMobile:fa,fieldBottomPaddingMobile:ha,fieldLeftPaddingMobile:ma,fieldPaddingTypeDesktop:pa,fieldPaddingTypeMobile:va,fieldPaddingTypeTablet:ya,fieldSpacingLink:Ta,labelFontStyle:_a,labelTransform:Ca,labelDecoration:Sa,inputFontStyle:Fa,inputTransform:Ma,inputDecoration:Ba,buttonFontStyle:ka,buttonTransform:Pa,buttonDecoration:ja,radioCheckFontStyle:Oa,radioCheckTransform:La,radioCheckDecoration:Ea,validationMsgFontStyle:wa,validationMsgTransform:Ha,validationMsgDecoration:za,msgFontStyle:Ra,msgTransform:xa,msgDecoration:Da}=a;let Aa,Wa,Va,Ia,Na,Ga;if(!0===ee){const e={google:{families:[J+(K?":"+K:"")]}};Va=o.a.createElement(r.a,{config:e})}if(!0===ge){const e={google:{families:[ne+(ie?":"+ie:"")]}};Aa=o.a.createElement(r.a,{config:e})}if(!0===Ce){const e={google:{families:[me+(pe?":"+pe:"")]}};Wa=o.a.createElement(r.a,{config:e})}if(!0===Ve){const e={google:{families:[ze+(Re?":"+Re:"")]}};Ia=o.a.createElement(r.a,{config:e})}if(!0===lt){const e={google:{families:[Ye+(Qe?":"+Qe:"")]}};Na=o.a.createElement(r.a,{config:e})}if(!0===Ct){const e={google:{families:[mt+(pt?":"+pt:"")]}};Ga=o.a.createElement(r.a,{config:e})}const Ua=o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:w,onColorChange:e=>t({buttonTextColor:e})}),o.a.createElement(d.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:H,onColorChange:e=>t({buttonBgColor:e})})),qa=o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:z,onColorChange:e=>t({buttonTextHoverColor:e})}),o.a.createElement(d.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:R,onColorChange:e=>t({buttonBgHoverColor:e})})),$a=o.a.createElement(y.PanelBody,{title:Object(n.__)("General","ultimate-addons-for-gutenberg")},o.a.createElement(y.SelectControl,{label:Object(n.__)("Select Form","ultimate-addons-for-gutenberg"),value:_,onChange:e=>{if(!e)return t({isHtml:!1}),void t({formId:null});t({isHtml:!1}),t({formId:e})},options:uagb_blocks_info.cf7_forms})),Ja=o.a.createElement(y.PanelBody,{title:Object(n.__)("Field","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(h.a,{setAttributes:t,label:Object(n.__)("Style","ultimate-addons-for-gutenberg"),data:{value:S,label:"fieldStyle"},options:[{value:"box",label:Object(n.__)("Box","ultimate-addons-for-gutenberg")},{value:"underline",label:Object(n.__)("Underline","ultimate-addons-for-gutenberg")}]})),Ka=o.a.createElement(y.PanelBody,{title:Object(n.__)("Radio & Checkbox","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(y.ToggleControl,{label:Object(n.__)("Override Current Style","ultimate-addons-for-gutenberg"),checked:Se,onChange:()=>t({enableOveride:!Se})})),Xa=o.a.createElement(y.PanelBody,{title:Object(n.__)("Success / Error Message","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"uagb-settings-notice"},Object(n.__)("Note: This styling can be only seen at frontend","ultimate-addons-for-gutenberg")),o.a.createElement(h.a,{setAttributes:t,label:Object(n.__)("Validation Message Position","ultimate-addons-for-gutenberg"),data:{value:Ie,label:"validationMsgPosition"},options:[{value:"default",label:Object(n.__)("Default","ultimate-addons-for-gutenberg")},{value:"bottom_right",label:Object(n.__)("Bottom Right Side of Field","ultimate-addons-for-gutenberg")}]}),o.a.createElement(y.ToggleControl,{label:Object(n.__)("Highlight Borders","ultimate-addons-for-gutenberg"),checked:Ue,onChange:()=>t({enableHighlightBorder:!Ue})})),Ya=o.a.createElement(y.PanelBody,{title:Object(n.__)("Submit Button","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(h.a,{setAttributes:t,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:E,label:"buttonAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(y.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(y.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(y.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")},{value:"justify",icon:o.a.createElement(y.Icon,{icon:Object(p.a)("fa fa-align-justify")}),tooltip:Object(n.__)("Justified","ultimate-addons-for-gutenberg")}],showIcons:!0})),Qa=o.a.createElement(y.PanelBody,{title:Object(n.__)("Label & Input","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(d.a,{label:Object(n.__)("Label Color","ultimate-addons-for-gutenberg"),colorValue:M,onColorChange:e=>t({fieldLabelColor:e})}),o.a.createElement(s.a,{label:Object(n.__)("Label Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:ee,label:"labelLoadGoogleFonts"},fontFamily:{value:J,label:"labelFontFamily"},fontWeight:{value:K,label:"labelFontWeight"},fontStyle:{value:_a,label:"labelFontStyle"},transform:{value:Ca,label:"labelTransform"},decoration:{value:Sa,label:"labelDecoration"},fontSizeType:{value:U,label:"labelFontSizeType"},fontSize:{value:G,label:"labelFontSize"},fontSizeMobile:{value:$,label:"labelFontSizeMobile"},fontSizeTablet:{value:q,label:"labelFontSizeTablet"},lineHeightType:{value:X,label:"labelLineHeightType"},lineHeight:{value:Y,label:"labelLineHeight"},lineHeightMobile:{value:Z,label:"labelLineHeightMobile"},lineHeightTablet:{value:Q,label:"labelLineHeightTablet"}}),o.a.createElement(d.a,{label:Object(n.__)("Input Color","ultimate-addons-for-gutenberg"),colorValue:B,onColorChange:e=>t({fieldInputColor:e})}),o.a.createElement(s.a,{label:Object(n.__)("Input Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:ge,label:"inputLoadGoogleFonts"},fontFamily:{value:ne,label:"inputFontFamily"},fontWeight:{value:ie,label:"inputFontWeight"},fontStyle:{value:Fa,label:"inputFontStyle"},transform:{value:Ma,label:"inputTransform"},decoration:{value:Ba,label:"inputDecoration"},fontSizeType:{value:ae,label:"inputFontSizeType"},fontSize:{value:te,label:"inputFontSize"},fontSizeMobile:{value:oe,label:"inputFontSizeMobile"},fontSizeTablet:{value:le,label:"inputFontSizeTablet"},lineHeightType:{value:re,label:"inputLineHeightType"},lineHeight:{value:se,label:"inputLineHeight"},lineHeightMobile:{value:de,label:"inputLineHeightMobile"},lineHeightTablet:{value:ue,label:"inputLineHeightTablet"}}),o.a.createElement(d.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:F,onColorChange:e=>t({fieldBgColor:e})}),o.a.createElement(f.a,{label:Object(n.__)("Spacing","ultimate-addons-for-gutenberg"),setAttributes:t,value:N,onChange:e=>t({fieldLabelSpacing:e}),min:0,max:50,displayUnit:!1})),Za=o.a.createElement(y.PanelBody,{title:Object(n.__)("Field","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.a,{setAttributes:t,borderStyle:{value:k,label:"fieldBorderStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:P,label:"fieldBorderWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:j,label:"fieldBorderRadius",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg"),displayUnit:!0,unit:{value:Mt,label:"fieldBorderRadiusType"}},borderColor:{value:O,label:"fieldBorderColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:L,label:"fieldBorderFocusColor",title:Object(n.__)("Focus Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}),o.a.createElement(f.a,{label:Object(n.__)("Fields Space","ultimate-addons-for-gutenberg"),setAttributes:t,value:I,onChange:e=>t({fieldSpacing:e}),min:0,max:50}),o.a.createElement(c.a,T({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:na,label:"fieldTopPaddingDesktop"},valueRight:{value:ia,label:"fieldRightPaddingDesktop"},valueBottom:{value:ra,label:"fieldBottomPaddingDesktop"},valueLeft:{value:sa,label:"fieldLeftPaddingDesktop"},valueTopTablet:{value:ua,label:"fieldTopPaddingTablet"},valueRightTablet:{value:da,label:"fieldRightPaddingTablet"},valueBottomTablet:{value:ga,label:"fieldBottomPaddingTablet"},valueLeftTablet:{value:ba,label:"fieldLeftPaddingTablet"},valueTopMobile:{value:ca,label:"fieldTopPaddingMobile"},valueRightMobile:{value:fa,label:"fieldRightPaddingMobile"},valueBottomMobile:{value:ha,label:"fieldBottomPaddingMobile"},valueLeftMobile:{value:ma,label:"fieldLeftPaddingMobile"},unit:{value:pa,label:"fieldPaddingTypeDesktop"},mUnit:{value:va,label:"fieldPaddingTypeMobile"},tUnit:{value:ya,label:"fieldPaddingTypeTablet"},attributes:a,setAttributes:t,link:{value:Ta,label:"fieldSpacingLink"}}))),el=o.a.createElement(y.PanelBody,{title:Object(n.__)("Radio & Checkbox","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(f.a,{label:Object(n.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:t,value:Fe,onChange:e=>t({radioCheckSize:e}),min:0,max:50,displayUnit:!1}),o.a.createElement(d.a,{label:Object(n.__)("Label Color","ultimate-addons-for-gutenberg"),colorValue:ke,onColorChange:e=>t({radioCheckLableColor:e})}),o.a.createElement(s.a,{label:Object(n.__)("Label Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:Ve,label:"radioCheckLoadGoogleFonts"},fontFamily:{value:ze,label:"radioCheckFontFamily"},fontWeight:{value:Re,label:"radioCheckFontWeight"},fontStyle:{value:Oa,label:"radioCheckFontStyle"},transform:{value:La,label:"radioCheckTransform"},decoration:{value:Ea,label:"radioCheckDecoration"},fontSizeType:{value:Ee,label:"radioCheckFontSizeType"},fontSize:{value:Le,label:"radioCheckFontSize"},fontSizeMobile:{value:He,label:"radioCheckFontSizeMobile"},fontSizeTablet:{value:we,label:"radioCheckFontSizeTablet"},lineHeightType:{value:xe,label:"radioCheckLineHeightType"},lineHeight:{value:De,label:"radioCheckLineHeight"},lineHeightMobile:{value:We,label:"radioCheckLineHeightMobile"},lineHeightTablet:{value:Ae,label:"radioCheckLineHeightTablet"}}),o.a.createElement(d.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Me,onColorChange:e=>t({radioCheckBgColor:e})}),o.a.createElement(d.a,{label:Object(n.__)("Selected Color","ultimate-addons-for-gutenberg"),colorValue:Be,onColorChange:e=>t({radioCheckSelectColor:e})}),"none"!==k&&o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{label:Object(n.__)("Border Width (px)","ultimate-addons-for-gutenberg"),setAttributes:t,value:je,onChange:e=>t({radioCheckBorderWidth:e}),min:0,max:50,displayUnit:!1}),o.a.createElement(f.a,{label:Object(n.__)("Border Radius","ultimate-addons-for-gutenberg"),setAttributes:t,value:Oe,onChange:e=>t({radioCheckBorderRadius:e}),min:0,max:100,unit:{value:St,label:"radioCheckBorderRadiusType"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),o.a.createElement(d.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Pe,onColorChange:e=>t({radioCheckBorderColor:e})}))),tl=o.a.createElement(y.PanelBody,{title:Object(n.__)("Submit Button","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(m.a,{tabs:[{name:"normal",title:Object(n.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(n.__)("Hover","ultimate-addons-for-gutenberg")}],normal:Ua,hover:qa}),o.a.createElement(u.a,{setAttributes:t,borderStyle:{value:x,label:"buttonBorderStyle",title:Object(n.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:D,label:"buttonBorderWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:A,label:"buttonBorderRadius",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg"),displayUnit:!0,unit:{value:Bt,label:"buttonBorderRadiusType"}},borderColor:{value:W,label:"buttonBorderColor",title:Object(n.__)("Border Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:V,label:"buttonBorderHoverColor",title:Object(n.__)("Border Color","ultimate-addons-for-gutenberg")}}),o.a.createElement(s.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:Ce,label:"buttonLoadGoogleFonts"},fontFamily:{value:me,label:"buttonFontFamily"},fontWeight:{value:pe,label:"buttonFontWeight"},fontStyle:{value:ka,label:"buttonFontStyle"},transform:{value:Pa,label:"buttonTransform"},decoration:{value:ja,label:"buttonDecoration"},fontSizeType:{value:ce,label:"buttonFontSizeType"},fontSize:{value:be,label:"buttonFontSize"},fontSizeMobile:{value:he,label:"buttonFontSizeMobile"},fontSizeTablet:{value:fe,label:"buttonFontSizeTablet"},lineHeightType:{value:ve,label:"buttonLineHeightType"},lineHeight:{value:ye,label:"buttonLineHeight"},lineHeightMobile:{value:_e,label:"buttonLineHeightMobile"},lineHeightTablet:{value:Te,label:"buttonLineHeightTablet"}}),o.a.createElement(c.a,T({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Nt,label:"buttonTopPaddingDesktop"},valueRight:{value:Gt,label:"buttonRightPaddingDesktop"},valueBottom:{value:Ut,label:"buttonBottomPaddingDesktop"},valueLeft:{value:qt,label:"buttonLeftPaddingDesktop"},valueTopTablet:{value:$t,label:"buttonTopPaddingTablet"},valueRightTablet:{value:Jt,label:"buttonRightPaddingTablet"},valueBottomTablet:{value:Kt,label:"buttonBottomPaddingTablet"},valueLeftTablet:{value:Xt,label:"buttonLeftPaddingTablet"},valueTopMobile:{value:Yt,label:"buttonTopPaddingMobile"},valueRightMobile:{value:Qt,label:"buttonRightPaddingMobile"},valueBottomMobile:{value:Zt,label:"buttonBottomPaddingMobile"},valueLeftMobile:{value:ea,label:"buttonLeftPaddingMobile"},unit:{value:ta,label:"buttonPaddingTypeDesktop"},mUnit:{value:la,label:"buttonPaddingTypeMobile"},tUnit:{value:aa,label:"buttonPaddingTypeTablet"},attributes:a,setAttributes:t,link:{value:oa,label:"buttonSpacingLink"}}))),al=o.a.createElement(y.PanelBody,{title:Object(n.__)("Success / Error Message","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"uagb-settings-notice"},Object(n.__)("Note: This styling can be only seen at frontend","ultimate-addons-for-gutenberg")),o.a.createElement(d.a,{label:Object(n.__)("Validation Message Color","ultimate-addons-for-gutenberg"),colorValue:Ne,onColorChange:e=>t({validationMsgColor:e})}),o.a.createElement(s.a,{label:Object(n.__)("Validation Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:lt,label:"validationMsgLoadGoogleFonts"},fontFamily:{value:Ye,label:"validationMsgFontFamily"},fontWeight:{value:Qe,label:"validationMsgFontWeight"},fontStyle:{value:wa,label:"validationMsgFontStyle"},transform:{value:Ha,label:"validationMsgTransform"},decoration:{value:za,label:"validationMsgDecoration"},fontSizeType:{value:Je,label:"validationMsgFontSizeType"},fontSize:{value:$e,label:"validationMsgFontSize"},fontSizeMobile:{value:Xe,label:"validationMsgFontSizeMobile"},fontSizeTablet:{value:Ke,label:"validationMsgFontSizeTablet"},lineHeightType:{value:Ze,label:"validationMsgLineHeightType"},lineHeight:{value:et,label:"validationMsgLineHeight"},lineHeightMobile:{value:at,label:"validationMsgLineHeightMobile"},lineHeightTablet:{value:tt,label:"validationMsgLineHeightTablet"}}),"bottom_right"===Ie&&o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{label:Object(n.__)("Message Background Color","ultimate-addons-for-gutenberg"),colorValue:Ge,onColorChange:e=>t({validationMsgBgColor:e})})),Ue&&o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{label:Object(n.__)("Highlight Border Color","ultimate-addons-for-gutenberg"),colorValue:qe,onColorChange:e=>t({highlightBorderColor:e})})),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(n.__)("Form Success / Error Message","ultimate-addons-for-gutenberg")),o.a.createElement(s.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:Ct,label:"msgLoadGoogleFonts"},fontFamily:{value:mt,label:"msgFontFamily"},fontWeight:{value:pt,label:"msgFontWeight"},fontStyle:{value:Ra,label:"msgFontStyle"},transform:{value:xa,label:"msgTransform"},decoration:{value:Da,label:"msgDecoration"},fontSizeType:{value:ct,label:"msgFontSizeType"},fontSize:{value:bt,label:"msgFontSize"},fontSizeMobile:{value:ht,label:"msgFontSizeMobile"},fontSizeTablet:{value:ft,label:"msgFontSizeTablet"},lineHeightType:{value:vt,label:"msgLineHeightType"},lineHeight:{value:yt,label:"msgLineHeight"},lineHeightMobile:{value:_t,label:"msgLineHeightMobile"},lineHeightTablet:{value:Tt,label:"msgLineHeightTablet"}}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(n.__)("Success Message","ultimate-addons-for-gutenberg")),o.a.createElement(d.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ot,onColorChange:e=>t({successMsgColor:e})}),o.a.createElement(d.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:nt,onColorChange:e=>t({successMsgBgColor:e})}),o.a.createElement(d.a,{label:Object(n.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:it,onColorChange:e=>t({successMsgBorderColor:e})}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(n.__)("Error Message","ultimate-addons-for-gutenberg")),o.a.createElement(d.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:rt,onColorChange:e=>t({errorMsgColor:e})}),o.a.createElement(d.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:st,onColorChange:e=>t({errorMsgBgColor:e})}),o.a.createElement(d.a,{label:Object(n.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:ut,onColorChange:e=>t({errorMsgBorderColor:e})}),o.a.createElement(f.a,{label:Object(n.__)("Border Width (px)","ultimate-addons-for-gutenberg"),setAttributes:t,value:dt,onChange:e=>t({msgBorderSize:e}),min:0,max:50,displayUnit:!1}),o.a.createElement(f.a,{label:Object(n.__)("Border Radius","ultimate-addons-for-gutenberg"),setAttributes:t,value:gt,onChange:e=>t({msgBorderRadius:e}),min:0,max:100,unit:{value:Ft,label:"msgBorderRadiusType"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),o.a.createElement(c.a,T({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:kt,label:"messageTopPaddingDesktop"},valueRight:{value:Pt,label:"messageRightPaddingDesktop"},valueBottom:{value:jt,label:"messageBottomPaddingDesktop"},valueLeft:{value:Ot,label:"messageLeftPaddingDesktop"},valueTopTablet:{value:Lt,label:"messageTopPaddingTablet"},valueRightTablet:{value:Et,label:"messageRightPaddingTablet"},valueBottomTablet:{value:wt,label:"messageBottomPaddingTablet"},valueLeftTablet:{value:Ht,label:"messageLeftPaddingTablet"},valueTopMobile:{value:zt,label:"messageTopPaddingMobile"},valueRightMobile:{value:Rt,label:"messageRightPaddingMobile"},valueBottomMobile:{value:xt,label:"messageBottomPaddingMobile"},valueLeftMobile:{value:Dt,label:"messageLeftPaddingMobile"},unit:{value:At,label:"messagePaddingTypeDesktop"},mUnit:{value:Vt,label:"messagePaddingTypeMobile"},tUnit:{value:Wt,label:"messagePaddingTypeTablet"},attributes:a,setAttributes:t,link:{value:It,label:"messageSpacingLink"}})));return o.a.createElement(l.Suspense,{fallback:Object(i.a)()},o.a.createElement(v.BlockControls,{key:"controls"},o.a.createElement(v.AlignmentToolbar,{value:C,onChange:e=>t({align:e})})),o.a.createElement(v.InspectorControls,null,o.a.createElement(g.a,null,o.a.createElement(b.b,b.a.general,$a,Ja,Ka,Ya,Xa),o.a.createElement(b.b,b.a.style,"box"===S&&Za,Se&&el,tl,al,Qa),o.a.createElement(b.b,T({},b.a.advance,{parentProps:e})))),Aa,Wa,Va,Ia,Na,Ga)};t.default=o.a.memo(_)}}]);