(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[14],{269:function(e,t,a){"use strict";var l=a(32),o=a.n(l),n=a(270),i=a.n(n),r=a(3);if(void 0===s)var s=[];const u=e=>{const[t,a]=Object(r.useState)([]);Object(r.useEffect)(()=>{u()},[]),Object(r.useEffect)(()=>{const{onStatus:a,config:l}=e;void 0!==t.status&&a(t.status),l!==t.config&&u()},[e]);const l=()=>{a({status:"loading"})},o=()=>{a({status:"active"})},n=()=>{a({status:"inactive"})},u=()=>{var t;s.includes(e.config.google.families[0])||(i.a.load({...e.config,loading:l,active:o,inactive:n}),t=e.config.google.families[0],s.includes(t)||s.push(t))},{children:g}=e;return g||null};u.propTypes={config:o.a.object.isRequired,children:o.a.element,onStatus:o.a.func.isRequired},u.defaultProps={onStatus:()=>{}},t.a=u},270:function(e,t,a){var l;!function(){function o(e,t,a){return e.call.apply(e.bind,arguments)}function n(e,t,a){if(!e)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,l),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:n).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function g(e,t,a,l){if(t=e.c.createElement(t),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?t.style.cssText=a[o]:t.setAttribute(o,a[o]));return l&&t.appendChild(e.c.createTextNode(l)),t}function d(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function c(e,t,a){t=t||[],a=a||[];for(var l=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var n=!1,i=0;i<l.length;i+=1)if(t[o]===l[i]){n=!0;break}n||l.push(t[o])}for(t=[],o=0;o<l.length;o+=1){for(n=!1,i=0;i<a.length;i+=1)if(l[o]===a[i]){n=!0;break}n||t.push(l[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var a=e.className.split(/\s+/),l=0,o=a.length;l<o;l++)if(a[l]==t)return!0;return!1}function h(e,t,a){function l(){r&&o&&n&&(r(i),r=null)}t=g(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,n=!0,i=null,r=a||null;u?(t.onload=function(){o=!0,l()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),l()}):setTimeout((function(){o=!0,l()}),0),d(e,"head",t)}function m(e,t,a,l){var o=e.c.getElementsByTagName("head")[0];if(o){var n=g(e,"script",{src:t}),i=!1;return n.onload=n.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),n.onload=n.onreadystatechange=null,"HEAD"==n.parentNode.tagName&&o.removeChild(n))},o.appendChild(n),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),l||5e3),n}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function T(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function _(e){this.a=e||"-"}function C(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function S(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var l=e[a].replace(/['"]/g,"");-1!=l.indexOf(" ")||/^\d/.test(l)?t.push("'"+l+"'"):t.push(l)}return t.join(",")}function F(e){return e.a+e.f}function M(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function k(e){var t=4,a="n",l=null;return e&&((l=e.match(/(normal|oblique|italic)/i))&&l[1]&&(a=l[1].substr(0,1).toLowerCase()),(l=e.match(/([1-9]00|normal|bold)/i))&&l[1]&&(/bold/i.test(l[1])?t=7:/[1-9]00/.test(l[1])&&(t=parseInt(l[1].substr(0,1),10)))),a+t}function j(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new _("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function B(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),a=[],l=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),c(e.f,a,l)}O(e,"inactive")}function O(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,F(a)):e.h[t]())}function L(){this.c={}}function P(e,t){this.c=e,this.f=t,this.a=g(this.c,"span",{"aria-hidden":"true"},this.f)}function E(e){d(e.c,"body",e.a)}function w(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+S(e.c)+";font-style:"+M(e)+";font-weight:"+e.f+"00;"}function H(e,t,a,l,o,n){this.g=e,this.j=t,this.a=l,this.c=a,this.f=o||3e3,this.h=n||void 0}function z(e,t,a,l,o,n,i){this.v=e,this.B=t,this.c=a,this.a=l,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=n||null,this.m=this.j=this.h=this.g=null,this.g=new P(this.c,this.s),this.h=new P(this.c,this.s),this.j=new P(this.c,this.s),this.m=new P(this.c,this.s),e=w(e=new C(this.a.c+",serif",F(this.a))),this.g.a.style.cssText=e,e=w(e=new C(this.a.c+",sans-serif",F(this.a))),this.h.a.style.cssText=e,e=w(e=new C("serif",F(this.a))),this.j.a.style.cssText=e,e=w(e=new C("sans-serif",F(this.a))),this.m.a.style.cssText=e,E(this.g),E(this.h),E(this.j),E(this.m)}_.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},H.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),l=new Promise((function(l,o){!function n(){r()-a>=t.f?o():e.fonts.load(function(e){return M(e)+" "+e.f+"00 300px "+S(e.c)}(t.a),t.h).then((function(e){1<=e.length?l():setTimeout(n,25)}),(function(){o()}))}()})),o=null,n=new Promise((function(e,a){o=setTimeout(a,t.f)}));Promise.race([n,l]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var R={D:"serif",C:"sans-serif"},x=null;function D(){if(null===x){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);x=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return x}function A(e,t,a){for(var l in R)if(R.hasOwnProperty(l)&&t===e.f[R[l]]&&a===e.f[R[l]])return!0;return!1}function W(e,t){setTimeout(i((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function V(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,l=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(a=l===t.f.serif&&o===t.f["sans-serif"])||(a=D()&&A(t,l,o)),a?r()-t.A>=t.w?D()&&A(t,l,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?W(t,t.v):W(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):W(t,t.v)}(this)};var I=null;function N(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&c(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),O(e,"active")):B(e.a))}function G(e){this.j=e,this.a=new L,this.h=0,this.f=this.g=!0}function U(e,t,a,l,o){var n=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=l||{};if(0===a.length&&n)B(t.a);else{t.f+=a.length,n&&(t.j=n);var s,u=[];for(s=0;s<a.length;s++){var g=a[s],d=r[g.c],b=t.a,f=g;if(b.g&&c(b.f,[b.a.c("wf",f.c,F(f).toString(),"loading")]),O(b,"fontloading",f),b=null,null===I)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);I=f?42<parseInt(f[1],10):!h}else I=!1;b=I?new H(i(t.g,t),i(t.h,t),t.c,g,t.s,d):new z(i(t.g,t),i(t.h,t),t.c,g,t.s,e,d),u.push(b)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}V.prototype.g=function(e){var t=this.a;t.g&&c(t.f,[t.a.c("wf",e.c,F(e).toString(),"active")],[t.a.c("wf",e.c,F(e).toString(),"loading"),t.a.c("wf",e.c,F(e).toString(),"inactive")]),O(t,"fontactive",e),this.m=!0,N(this)},V.prototype.h=function(e){var t=this.a;if(t.g){var a=f(t.f,t.a.c("wf",e.c,F(e).toString(),"active")),l=[],o=[t.a.c("wf",e.c,F(e).toString(),"loading")];a||l.push(t.a.c("wf",e.c,F(e).toString(),"inactive")),c(t.f,l,o)}O(t,"fontinactive",e),N(this)},G.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var l=[],o=a.timeout;!function(e){e.g&&c(e.f,[e.a.c("wf","loading")]),O(e,"loading")}(t),l=function(e,t,a){var l,o=[];for(l in t)if(t.hasOwnProperty(l)){var n=e.c[l];n&&o.push(n(t[l],a))}return o}(e.a,a,e.c);var n=new V(e.c,t,o);for(e.h=l.length,t=0,a=l.length;t<a;t++)l[t].load((function(t,a,l){U(e,n,t,a,l)}))}(this,new j(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,l=t.a.version;if(a){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(l?"?v="+l:""),(function(l){l?e([]):(o["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(o["__mti_fntLst"+a]){var l,n=o["__mti_fntLst"+a](),i=[];if(n)for(var r=0;r<n.length;r++){var s=n[r].fontfamily;null!=n[r].fontStyle&&null!=n[r].fontWeight?(l=n[r].fontStyle+n[r].fontWeight,i.push(new C(s,l))):i.push(new C(s))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,l=this.a.urls||[],o=this.a.families||[],n=this.a.testStrings||{},i=new p;for(t=0,a=l.length;t<a;t++)h(this.c,l[t],v(i));var r=[];for(t=0,a=o.length;t<a;t++)if((l=o[t].split(":"))[1])for(var s=l[1].split(","),u=0;u<s.length;u+=1)r.push(new C(l[0],s[u]));else r.push(new C(l[0]));T(i,(function(){e(r,n)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function le(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,l=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var a=t.length,l=0;l<a;l++){var o=t[l].split(":");3==o.length&&e.f.push(o.pop());var n="";2==o.length&&""!=o[1]&&(n=":"),e.a.push(o.join(n))}}(l,o);var n=new X(o);!function(e){for(var t=e.f.length,a=0;a<t;a++){var l=e.f[a].split(":"),o=l[0].replace(/\+/g," "),n=["n4"];if(2<=l.length){var i;if(i=[],r=l[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var g;if((g=r[u]).match(/^[\w-]+$/))if(null==(d=ee.exec(g.toLowerCase())))g="";else{if(g=null==(g=d[2])||""==g?"n":Z[g],null==(d=d[1])||""==d)d="4";else var d=Y[d]||(isNaN(d)?"4":d.substr(0,1));g=[g,d].join("")}else g="";g&&i.push(g)}0<i.length&&(n=i),3==l.length&&(i=[],0<(l=(l=l[2])?l.split(","):i).length&&(l=Q[l[0]])&&(e.c[o]=l))}for(e.c[o]||(l=Q[o])&&(e.c[o]=l),l=0;l<n.length;l+=1)e.a.push(new C(o,n[l]))}}(n),h(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],l=0;l<t;l++)a.push(e.a[l].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(l),v(t)),T(t,(function(){e(n.a,n.c,ae)}))},le.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var l=[],o=0;o<t.length;o+=2)for(var n=t[o],i=t[o+1],r=0;r<i.length;r++)l.push(new C(n,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(l)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,a=this.c.o,l=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var o=0,n=a.fonts.length;o<n;++o){var i=a.fonts[o];l.a.push(new C(i.name,k("font-weight:"+i.weight+";font-style:"+i.style)))}e(l.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ne=new G(window);ne.a.c.custom=function(e,t){return new $(t,e)},ne.a.c.fontdeck=function(e,t){return new oe(t,e)},ne.a.c.monotype=function(e,t){return new q(t,e)},ne.a.c.typekit=function(e,t){return new le(t,e)},ne.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(ne.load,ne)};void 0===(l=function(){return ie}.call(t,a,t,e))||(e.exports=l)}()},549:function(e,t,a){"use strict";a.r(t);var l=a(1),o=a.n(l),n=a(2),i=a(11),r=a(269),s=a(30),u=a(60),g=a(18),d=a(65),b=a(22),c=a(47),f=a(14),h=a(23),m=a(48),p=a(12),v=a(5),T=a(9),y=a(17);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const C=e=>{e=e.parentProps;const{setAttributes:t,attributes:a}=e,{formId:C,align:S,fieldStyle:F,fieldBgColor:M,fieldLabelColor:k,fieldInputColor:j,fieldBorderStyle:B,fieldBorderWidth:O,fieldBorderRadius:L,fieldBorderColor:P,fieldBorderFocusColor:E,buttonAlignment:w,buttonTextColor:H,buttonBgColor:z,buttonTextHoverColor:R,buttonBgHoverColor:x,buttonBorderStyle:D,buttonBorderWidth:A,buttonBorderRadius:W,buttonBorderColor:V,buttonBorderHoverColor:I,fieldSpacing:N,fieldLabelSpacing:G,labelFontSize:U,labelFontSizeType:q,labelFontSizeTablet:$,labelFontSizeMobile:J,labelFontFamily:K,labelFontWeight:X,labelLineHeightType:Q,labelLineHeight:Y,labelLineHeightTablet:Z,labelLineHeightMobile:ee,labelLoadGoogleFonts:te,inputFontSize:ae,inputFontSizeType:le,inputFontSizeTablet:oe,inputFontSizeMobile:ne,inputFontFamily:ie,inputFontWeight:re,inputLineHeightType:se,inputLineHeight:ue,inputLineHeightTablet:ge,inputLineHeightMobile:de,inputLoadGoogleFonts:be,buttonFontSize:ce,buttonFontSizeType:fe,buttonFontSizeTablet:he,buttonFontSizeMobile:me,buttonFontFamily:pe,buttonFontWeight:ve,buttonLineHeightType:Te,buttonLineHeight:ye,buttonLineHeightTablet:_e,buttonLineHeightMobile:Ce,buttonLoadGoogleFonts:Se,enableOveride:Fe,radioCheckSize:Me,radioCheckBgColor:ke,radioCheckSelectColor:je,radioCheckLableColor:Be,radioCheckBorderColor:Oe,radioCheckBorderWidth:Le,radioCheckBorderRadius:Pe,radioCheckFontSize:Ee,radioCheckFontSizeType:we,radioCheckFontSizeTablet:He,radioCheckFontSizeMobile:ze,radioCheckFontFamily:Re,radioCheckFontWeight:xe,radioCheckLineHeightType:De,radioCheckLineHeight:Ae,radioCheckLineHeightTablet:We,radioCheckLineHeightMobile:Ve,radioCheckLoadGoogleFonts:Ie,validationMsgPosition:Ne,validationMsgColor:Ge,validationMsgBgColor:Ue,enableHighlightBorder:qe,highlightBorderColor:$e,validationMsgFontSize:Je,validationMsgFontSizeType:Ke,validationMsgFontSizeTablet:Xe,validationMsgFontSizeMobile:Qe,validationMsgFontFamily:Ye,validationMsgFontWeight:Ze,validationMsgLineHeightType:et,validationMsgLineHeight:tt,validationMsgLineHeightTablet:at,validationMsgLineHeightMobile:lt,validationMsgLoadGoogleFonts:ot,successMsgColor:nt,successMsgBgColor:it,successMsgBorderColor:rt,errorMsgColor:st,errorMsgBgColor:ut,errorMsgBorderColor:gt,msgBorderSize:dt,msgBorderRadius:bt,msgFontSize:ct,msgFontSizeType:ft,msgFontSizeTablet:ht,msgFontSizeMobile:mt,msgFontFamily:pt,msgFontWeight:vt,msgLineHeightType:Tt,msgLineHeight:yt,msgLineHeightTablet:_t,msgLineHeightMobile:Ct,msgLoadGoogleFonts:St,radioCheckBorderRadiusType:Ft,msgBorderRadiusType:Mt,fieldBorderRadiusType:kt,buttonBorderRadiusType:jt,messageTopPaddingDesktop:Bt,messageRightPaddingDesktop:Ot,messageBottomPaddingDesktop:Lt,messageLeftPaddingDesktop:Pt,messageTopPaddingTablet:Et,messageRightPaddingTablet:wt,messageBottomPaddingTablet:Ht,messageLeftPaddingTablet:zt,messageTopPaddingMobile:Rt,messageRightPaddingMobile:xt,messageBottomPaddingMobile:Dt,messageLeftPaddingMobile:At,messagePaddingTypeDesktop:Wt,messagePaddingTypeTablet:Vt,messagePaddingTypeMobile:It,messageSpacingLink:Nt,buttonTopPaddingDesktop:Gt,buttonRightPaddingDesktop:Ut,buttonBottomPaddingDesktop:qt,buttonLeftPaddingDesktop:$t,buttonTopPaddingTablet:Jt,buttonRightPaddingTablet:Kt,buttonBottomPaddingTablet:Xt,buttonLeftPaddingTablet:Qt,buttonTopPaddingMobile:Yt,buttonRightPaddingMobile:Zt,buttonBottomPaddingMobile:ea,buttonLeftPaddingMobile:ta,buttonPaddingTypeDesktop:aa,buttonPaddingTypeTablet:la,buttonPaddingTypeMobile:oa,buttonSpacingLink:na,fieldTopPaddingDesktop:ia,fieldRightPaddingDesktop:ra,fieldBottomPaddingDesktop:sa,fieldLeftPaddingDesktop:ua,fieldTopPaddingTablet:ga,fieldRightPaddingTablet:da,fieldBottomPaddingTablet:ba,fieldLeftPaddingTablet:ca,fieldTopPaddingMobile:fa,fieldRightPaddingMobile:ha,fieldBottomPaddingMobile:ma,fieldLeftPaddingMobile:pa,fieldPaddingTypeDesktop:va,fieldPaddingTypeMobile:Ta,fieldPaddingTypeTablet:ya,fieldSpacingLink:_a,labelFontStyle:Ca,labelTransform:Sa,labelDecoration:Fa,inputFontStyle:Ma,inputTransform:ka,inputDecoration:ja,buttonFontStyle:Ba,buttonTransform:Oa,buttonDecoration:La,radioCheckFontStyle:Pa,radioCheckTransform:Ea,radioCheckDecoration:wa,validationMsgFontStyle:Ha,validationMsgTransform:za,validationMsgDecoration:Ra,msgFontStyle:xa,msgTransform:Da,msgDecoration:Aa}=a;let Wa,Va,Ia,Na,Ga,Ua;if(!0===te){const e={google:{families:[K+(X?":"+X:"")]}};Ia=o.a.createElement(r.a,{config:e})}if(!0===be){const e={google:{families:[ie+(re?":"+re:"")]}};Wa=o.a.createElement(r.a,{config:e})}if(!0===Se){const e={google:{families:[pe+(ve?":"+ve:"")]}};Va=o.a.createElement(r.a,{config:e})}if(!0===Ie){const e={google:{families:[Re+(xe?":"+xe:"")]}};Na=o.a.createElement(r.a,{config:e})}if(!0===ot){const e={google:{families:[Ye+(Ze?":"+Ze:"")]}};Ga=o.a.createElement(r.a,{config:e})}if(!0===St){const e={google:{families:[pt+(vt?":"+vt:"")]}};Ua=o.a.createElement(r.a,{config:e})}const qa=o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:H,onColorChange:e=>t({buttonTextColor:e})}),o.a.createElement(g.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:z,onColorChange:e=>t({buttonBgColor:e})})),$a=o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:R,onColorChange:e=>t({buttonTextHoverColor:e})}),o.a.createElement(g.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:x,onColorChange:e=>t({buttonBgHoverColor:e})})),Ja=o.a.createElement(y.a,{title:Object(n.__)("General","ultimate-addons-for-gutenberg")},o.a.createElement(T.SelectControl,{label:Object(n.__)("Select Form","ultimate-addons-for-gutenberg"),value:C,onChange:e=>{if(!e)return t({isHtml:!1}),void t({formId:null});t({isHtml:!1}),t({formId:e})},options:uagb_blocks_info.cf7_forms})),Ka=o.a.createElement(y.a,{title:Object(n.__)("Field","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(h.a,{setAttributes:t,label:Object(n.__)("Style","ultimate-addons-for-gutenberg"),data:{value:F,label:"fieldStyle"},options:[{value:"box",label:Object(n.__)("Box","ultimate-addons-for-gutenberg")},{value:"underline",label:Object(n.__)("Underline","ultimate-addons-for-gutenberg")}]})),Xa=o.a.createElement(y.a,{title:Object(n.__)("Radio & Checkbox","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(T.ToggleControl,{label:Object(n.__)("Override Current Style","ultimate-addons-for-gutenberg"),checked:Fe,onChange:()=>t({enableOveride:!Fe})})),Qa=o.a.createElement(y.a,{title:Object(n.__)("Success / Error Message","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"uagb-settings-notice"},Object(n.__)("Note: This styling can be only seen at frontend","ultimate-addons-for-gutenberg")),o.a.createElement(h.a,{setAttributes:t,label:Object(n.__)("Validation Message Position","ultimate-addons-for-gutenberg"),data:{value:Ne,label:"validationMsgPosition"},options:[{value:"default",label:Object(n.__)("Default","ultimate-addons-for-gutenberg")},{value:"bottom_right",label:Object(n.__)("Bottom Right Side of Field","ultimate-addons-for-gutenberg")}]}),o.a.createElement(T.ToggleControl,{label:Object(n.__)("Highlight Borders","ultimate-addons-for-gutenberg"),checked:qe,onChange:()=>t({enableHighlightBorder:!qe})})),Ya=o.a.createElement(y.a,{title:Object(n.__)("Submit Button","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(h.a,{setAttributes:t,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:w,label:"buttonAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(T.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(T.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(T.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")},{value:"justify",icon:o.a.createElement(T.Icon,{icon:Object(p.a)("fa fa-align-justify")}),tooltip:Object(n.__)("Justified","ultimate-addons-for-gutenberg")}],showIcons:!0})),Za=o.a.createElement(y.a,{title:Object(n.__)("Label & Input","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(g.a,{label:Object(n.__)("Label Color","ultimate-addons-for-gutenberg"),colorValue:k,onColorChange:e=>t({fieldLabelColor:e})}),o.a.createElement(s.a,{label:Object(n.__)("Label Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:te,label:"labelLoadGoogleFonts"},fontFamily:{value:K,label:"labelFontFamily"},fontWeight:{value:X,label:"labelFontWeight"},fontStyle:{value:Ca,label:"labelFontStyle"},transform:{value:Sa,label:"labelTransform"},decoration:{value:Fa,label:"labelDecoration"},fontSizeType:{value:q,label:"labelFontSizeType"},fontSize:{value:U,label:"labelFontSize"},fontSizeMobile:{value:J,label:"labelFontSizeMobile"},fontSizeTablet:{value:$,label:"labelFontSizeTablet"},lineHeightType:{value:Q,label:"labelLineHeightType"},lineHeight:{value:Y,label:"labelLineHeight"},lineHeightMobile:{value:ee,label:"labelLineHeightMobile"},lineHeightTablet:{value:Z,label:"labelLineHeightTablet"}}),o.a.createElement(g.a,{label:Object(n.__)("Input Color","ultimate-addons-for-gutenberg"),colorValue:j,onColorChange:e=>t({fieldInputColor:e})}),o.a.createElement(s.a,{label:Object(n.__)("Input Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:be,label:"inputLoadGoogleFonts"},fontFamily:{value:ie,label:"inputFontFamily"},fontWeight:{value:re,label:"inputFontWeight"},fontStyle:{value:Ma,label:"inputFontStyle"},transform:{value:ka,label:"inputTransform"},decoration:{value:ja,label:"inputDecoration"},fontSizeType:{value:le,label:"inputFontSizeType"},fontSize:{value:ae,label:"inputFontSize"},fontSizeMobile:{value:ne,label:"inputFontSizeMobile"},fontSizeTablet:{value:oe,label:"inputFontSizeTablet"},lineHeightType:{value:se,label:"inputLineHeightType"},lineHeight:{value:ue,label:"inputLineHeight"},lineHeightMobile:{value:de,label:"inputLineHeightMobile"},lineHeightTablet:{value:ge,label:"inputLineHeightTablet"}}),o.a.createElement(g.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:M,onColorChange:e=>t({fieldBgColor:e})}),o.a.createElement(f.a,{label:Object(n.__)("Spacing","ultimate-addons-for-gutenberg"),setAttributes:t,value:G,onChange:e=>t({fieldLabelSpacing:e}),min:0,max:50,displayUnit:!1})),el=o.a.createElement(y.a,{title:Object(n.__)("Field","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.a,{setAttributes:t,borderStyle:{value:B,label:"fieldBorderStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:O,label:"fieldBorderWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:L,label:"fieldBorderRadius",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg"),displayUnit:!0,unit:{value:kt,label:"fieldBorderRadiusType"}},borderColor:{value:P,label:"fieldBorderColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:E,label:"fieldBorderFocusColor",title:Object(n.__)("Focus Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}),o.a.createElement(f.a,{label:Object(n.__)("Fields Space","ultimate-addons-for-gutenberg"),setAttributes:t,value:N,onChange:e=>t({fieldSpacing:e}),min:0,max:50}),o.a.createElement(c.a,_({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ia,label:"fieldTopPaddingDesktop"},valueRight:{value:ra,label:"fieldRightPaddingDesktop"},valueBottom:{value:sa,label:"fieldBottomPaddingDesktop"},valueLeft:{value:ua,label:"fieldLeftPaddingDesktop"},valueTopTablet:{value:ga,label:"fieldTopPaddingTablet"},valueRightTablet:{value:da,label:"fieldRightPaddingTablet"},valueBottomTablet:{value:ba,label:"fieldBottomPaddingTablet"},valueLeftTablet:{value:ca,label:"fieldLeftPaddingTablet"},valueTopMobile:{value:fa,label:"fieldTopPaddingMobile"},valueRightMobile:{value:ha,label:"fieldRightPaddingMobile"},valueBottomMobile:{value:ma,label:"fieldBottomPaddingMobile"},valueLeftMobile:{value:pa,label:"fieldLeftPaddingMobile"},unit:{value:va,label:"fieldPaddingTypeDesktop"},mUnit:{value:Ta,label:"fieldPaddingTypeMobile"},tUnit:{value:ya,label:"fieldPaddingTypeTablet"},attributes:a,setAttributes:t,link:{value:_a,label:"fieldSpacingLink"}}))),tl=o.a.createElement(y.a,{title:Object(n.__)("Radio & Checkbox","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(f.a,{label:Object(n.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:t,value:Me,onChange:e=>t({radioCheckSize:e}),min:0,max:50,displayUnit:!1}),o.a.createElement(g.a,{label:Object(n.__)("Label Color","ultimate-addons-for-gutenberg"),colorValue:Be,onColorChange:e=>t({radioCheckLableColor:e})}),o.a.createElement(s.a,{label:Object(n.__)("Label Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:Ie,label:"radioCheckLoadGoogleFonts"},fontFamily:{value:Re,label:"radioCheckFontFamily"},fontWeight:{value:xe,label:"radioCheckFontWeight"},fontStyle:{value:Pa,label:"radioCheckFontStyle"},transform:{value:Ea,label:"radioCheckTransform"},decoration:{value:wa,label:"radioCheckDecoration"},fontSizeType:{value:we,label:"radioCheckFontSizeType"},fontSize:{value:Ee,label:"radioCheckFontSize"},fontSizeMobile:{value:ze,label:"radioCheckFontSizeMobile"},fontSizeTablet:{value:He,label:"radioCheckFontSizeTablet"},lineHeightType:{value:De,label:"radioCheckLineHeightType"},lineHeight:{value:Ae,label:"radioCheckLineHeight"},lineHeightMobile:{value:Ve,label:"radioCheckLineHeightMobile"},lineHeightTablet:{value:We,label:"radioCheckLineHeightTablet"}}),o.a.createElement(g.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:ke,onColorChange:e=>t({radioCheckBgColor:e})}),o.a.createElement(g.a,{label:Object(n.__)("Selected Color","ultimate-addons-for-gutenberg"),colorValue:je,onColorChange:e=>t({radioCheckSelectColor:e})}),"none"!==B&&o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{label:Object(n.__)("Border Width (px)","ultimate-addons-for-gutenberg"),setAttributes:t,value:Le,onChange:e=>t({radioCheckBorderWidth:e}),min:0,max:50,displayUnit:!1}),o.a.createElement(f.a,{label:Object(n.__)("Border Radius","ultimate-addons-for-gutenberg"),setAttributes:t,value:Pe,onChange:e=>t({radioCheckBorderRadius:e}),min:0,max:100,unit:{value:Ft,label:"radioCheckBorderRadiusType"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),o.a.createElement(g.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Oe,onColorChange:e=>t({radioCheckBorderColor:e})}))),al=o.a.createElement(y.a,{title:Object(n.__)("Submit Button","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(m.a,{tabs:[{name:"normal",title:Object(n.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(n.__)("Hover","ultimate-addons-for-gutenberg")}],normal:qa,hover:$a}),o.a.createElement(u.a,{setAttributes:t,borderStyle:{value:D,label:"buttonBorderStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:A,label:"buttonBorderWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:W,label:"buttonBorderRadius",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg"),displayUnit:!0,unit:{value:jt,label:"buttonBorderRadiusType"}},borderColor:{value:V,label:"buttonBorderColor",title:Object(n.__)("Border Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:I,label:"buttonBorderHoverColor",title:Object(n.__)("Border Color","ultimate-addons-for-gutenberg")}}),o.a.createElement(s.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:Se,label:"buttonLoadGoogleFonts"},fontFamily:{value:pe,label:"buttonFontFamily"},fontWeight:{value:ve,label:"buttonFontWeight"},fontStyle:{value:Ba,label:"buttonFontStyle"},transform:{value:Oa,label:"buttonTransform"},decoration:{value:La,label:"buttonDecoration"},fontSizeType:{value:fe,label:"buttonFontSizeType"},fontSize:{value:ce,label:"buttonFontSize"},fontSizeMobile:{value:me,label:"buttonFontSizeMobile"},fontSizeTablet:{value:he,label:"buttonFontSizeTablet"},lineHeightType:{value:Te,label:"buttonLineHeightType"},lineHeight:{value:ye,label:"buttonLineHeight"},lineHeightMobile:{value:Ce,label:"buttonLineHeightMobile"},lineHeightTablet:{value:_e,label:"buttonLineHeightTablet"}}),o.a.createElement(c.a,_({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Gt,label:"buttonTopPaddingDesktop"},valueRight:{value:Ut,label:"buttonRightPaddingDesktop"},valueBottom:{value:qt,label:"buttonBottomPaddingDesktop"},valueLeft:{value:$t,label:"buttonLeftPaddingDesktop"},valueTopTablet:{value:Jt,label:"buttonTopPaddingTablet"},valueRightTablet:{value:Kt,label:"buttonRightPaddingTablet"},valueBottomTablet:{value:Xt,label:"buttonBottomPaddingTablet"},valueLeftTablet:{value:Qt,label:"buttonLeftPaddingTablet"},valueTopMobile:{value:Yt,label:"buttonTopPaddingMobile"},valueRightMobile:{value:Zt,label:"buttonRightPaddingMobile"},valueBottomMobile:{value:ea,label:"buttonBottomPaddingMobile"},valueLeftMobile:{value:ta,label:"buttonLeftPaddingMobile"},unit:{value:aa,label:"buttonPaddingTypeDesktop"},mUnit:{value:oa,label:"buttonPaddingTypeMobile"},tUnit:{value:la,label:"buttonPaddingTypeTablet"},attributes:a,setAttributes:t,link:{value:na,label:"buttonSpacingLink"}}))),ll=o.a.createElement(y.a,{title:Object(n.__)("Success / Error Message","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"uagb-settings-notice"},Object(n.__)("Note: This styling can be only seen at frontend","ultimate-addons-for-gutenberg")),o.a.createElement(g.a,{label:Object(n.__)("Validation Message Color","ultimate-addons-for-gutenberg"),colorValue:Ge,onColorChange:e=>t({validationMsgColor:e})}),o.a.createElement(s.a,{label:Object(n.__)("Validation Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:ot,label:"validationMsgLoadGoogleFonts"},fontFamily:{value:Ye,label:"validationMsgFontFamily"},fontWeight:{value:Ze,label:"validationMsgFontWeight"},fontStyle:{value:Ha,label:"validationMsgFontStyle"},transform:{value:za,label:"validationMsgTransform"},decoration:{value:Ra,label:"validationMsgDecoration"},fontSizeType:{value:Ke,label:"validationMsgFontSizeType"},fontSize:{value:Je,label:"validationMsgFontSize"},fontSizeMobile:{value:Qe,label:"validationMsgFontSizeMobile"},fontSizeTablet:{value:Xe,label:"validationMsgFontSizeTablet"},lineHeightType:{value:et,label:"validationMsgLineHeightType"},lineHeight:{value:tt,label:"validationMsgLineHeight"},lineHeightMobile:{value:lt,label:"validationMsgLineHeightMobile"},lineHeightTablet:{value:at,label:"validationMsgLineHeightTablet"}}),"bottom_right"===Ne&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{label:Object(n.__)("Message Background Color","ultimate-addons-for-gutenberg"),colorValue:Ue,onColorChange:e=>t({validationMsgBgColor:e})})),qe&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{label:Object(n.__)("Highlight Border Color","ultimate-addons-for-gutenberg"),colorValue:$e,onColorChange:e=>t({highlightBorderColor:e})})),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(n.__)("Form Success / Error Message","ultimate-addons-for-gutenberg")),o.a.createElement(s.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:St,label:"msgLoadGoogleFonts"},fontFamily:{value:pt,label:"msgFontFamily"},fontWeight:{value:vt,label:"msgFontWeight"},fontStyle:{value:xa,label:"msgFontStyle"},transform:{value:Da,label:"msgTransform"},decoration:{value:Aa,label:"msgDecoration"},fontSizeType:{value:ft,label:"msgFontSizeType"},fontSize:{value:ct,label:"msgFontSize"},fontSizeMobile:{value:mt,label:"msgFontSizeMobile"},fontSizeTablet:{value:ht,label:"msgFontSizeTablet"},lineHeightType:{value:Tt,label:"msgLineHeightType"},lineHeight:{value:yt,label:"msgLineHeight"},lineHeightMobile:{value:Ct,label:"msgLineHeightMobile"},lineHeightTablet:{value:_t,label:"msgLineHeightTablet"}}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(n.__)("Success Message","ultimate-addons-for-gutenberg")),o.a.createElement(g.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:nt,onColorChange:e=>t({successMsgColor:e})}),o.a.createElement(g.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:it,onColorChange:e=>t({successMsgBgColor:e})}),o.a.createElement(g.a,{label:Object(n.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:rt,onColorChange:e=>t({successMsgBorderColor:e})}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(n.__)("Error Message","ultimate-addons-for-gutenberg")),o.a.createElement(g.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:st,onColorChange:e=>t({errorMsgColor:e})}),o.a.createElement(g.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:ut,onColorChange:e=>t({errorMsgBgColor:e})}),o.a.createElement(g.a,{label:Object(n.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:gt,onColorChange:e=>t({errorMsgBorderColor:e})}),o.a.createElement(f.a,{label:Object(n.__)("Border Width (px)","ultimate-addons-for-gutenberg"),setAttributes:t,value:dt,onChange:e=>t({msgBorderSize:e}),min:0,max:50,displayUnit:!1}),o.a.createElement(f.a,{label:Object(n.__)("Border Radius","ultimate-addons-for-gutenberg"),setAttributes:t,value:bt,onChange:e=>t({msgBorderRadius:e}),min:0,max:100,unit:{value:Mt,label:"msgBorderRadiusType"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),o.a.createElement(c.a,_({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Bt,label:"messageTopPaddingDesktop"},valueRight:{value:Ot,label:"messageRightPaddingDesktop"},valueBottom:{value:Lt,label:"messageBottomPaddingDesktop"},valueLeft:{value:Pt,label:"messageLeftPaddingDesktop"},valueTopTablet:{value:Et,label:"messageTopPaddingTablet"},valueRightTablet:{value:wt,label:"messageRightPaddingTablet"},valueBottomTablet:{value:Ht,label:"messageBottomPaddingTablet"},valueLeftTablet:{value:zt,label:"messageLeftPaddingTablet"},valueTopMobile:{value:Rt,label:"messageTopPaddingMobile"},valueRightMobile:{value:xt,label:"messageRightPaddingMobile"},valueBottomMobile:{value:Dt,label:"messageBottomPaddingMobile"},valueLeftMobile:{value:At,label:"messageLeftPaddingMobile"},unit:{value:Wt,label:"messagePaddingTypeDesktop"},mUnit:{value:It,label:"messagePaddingTypeMobile"},tUnit:{value:Vt,label:"messagePaddingTypeTablet"},attributes:a,setAttributes:t,link:{value:Nt,label:"messageSpacingLink"}})));return o.a.createElement(l.Suspense,{fallback:Object(i.a)()},o.a.createElement(v.BlockControls,{key:"controls"},o.a.createElement(v.AlignmentToolbar,{value:S,onChange:e=>t({align:e})})),o.a.createElement(v.InspectorControls,null,o.a.createElement(d.a,null,o.a.createElement(b.b,b.a.general,Ja,Ka,Xa,Ya,Qa),o.a.createElement(b.b,b.a.style,"box"===F&&el,Fe&&tl,al,ll,Za),o.a.createElement(b.b,_({},b.a.advance,{parentProps:e})))),Wa,Va,Ia,Na,Ga,Ua)};t.default=o.a.memo(C)}}]);