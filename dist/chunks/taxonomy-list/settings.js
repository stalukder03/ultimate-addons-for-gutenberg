(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[107],{199:function(e,t,a){"use strict";var o,n,l=a(38),i=a.n(l),r=a(200),s=a.n(r),u=a(2);if(void 0===c)var c=[];const b=e=>{const[t,a]=Object(u.useState)([]);Object(u.useEffect)(()=>{r()},[]),Object(u.useEffect)(()=>{const{onStatus:a,config:o}=e;void 0!==t.status&&a(t.status),o!==t.config&&r()},[e]);const o=()=>{a({status:"loading"})},n=e=>{c.includes(e)||c.push(e)},l=()=>{a({status:"active"})},i=()=>{a({status:"inactive"})},r=()=>{c.includes(e.config.google.families[0])||(s.a.load({...e.config,loading:o,active:l,inactive:i}),n(e.config.google.families[0]));const t=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==t.length||0!==a.length){const r=(t[0]||a[0]).getElementsByTagName("iframe")[0];r&&(s.a.load({...e.config,loading:o,active:l,inactive:i,context:null==r?void 0:r.contentWindow}),n(e.config.google.families[0]))}},{children:b}=e;return b||null};b.propTypes={config:null===(o=i.a.object)||void 0===o?void 0:o.isRequired,children:i.a.element,onStatus:null===(n=i.a.func)||void 0===n?void 0:n.isRequired},b.defaultProps={onStatus:()=>{}},t.a=b},200:function(e,t,a){var o;!function(){function n(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,o),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function c(e,t,a,o){if(t=e.c.createElement(t),a)for(var n in a)a.hasOwnProperty(n)&&("style"==n?t.style.cssText=a[n]:t.setAttribute(n,a[n]));return o&&t.appendChild(e.c.createTextNode(o)),t}function b(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function d(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e,t,a){t=t||[],a=a||[];for(var o=e.className.split(/\s+/),n=0;n<t.length;n+=1){for(var l=!1,i=0;i<o.length;i+=1)if(t[n]===o[i]){l=!0;break}l||o.push(t[n])}for(t=[],n=0;n<o.length;n+=1){for(l=!1,i=0;i<a.length;i+=1)if(o[n]===a[i]){l=!0;break}l||t.push(o[n])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(e,t){for(var a=e.className.split(/\s+/),o=0,n=a.length;o<n;o++)if(a[o]==t)return!0;return!1}function f(e,t,a){function o(){r&&n&&l&&(r(i),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var n=!1,l=!0,i=null,r=a||null;u?(t.onload=function(){n=!0,o()},t.onerror=function(){n=!0,i=Error("Stylesheet failed to load"),o()}):setTimeout((function(){n=!0,o()}),0),b(e,"head",t)}function m(e,t,a,o){var n=e.c.getElementsByTagName("head")[0];if(n){var l=c(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&n.removeChild(l))},n.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),o||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,_(e)}}function w(e,t){e.c=t,_(e)}function _(e){0==e.a&&e.c&&(e.c(),e.c=null)}function y(e){this.a=e||"-"}function x(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function S(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var o=e[a].replace(/['"]/g,"");-1!=o.indexOf(" ")||/^\d/.test(o)?t.push("'"+o+"'"):t.push(o)}return t.join(",")}function T(e){return e.a+e.f}function j(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function O(e){var t=4,a="n",o=null;return e&&((o=e.match(/(normal|oblique|italic)/i))&&o[1]&&(a=o[1].substr(0,1).toLowerCase()),(o=e.match(/([1-9]00|normal|bold)/i))&&o[1]&&(/bold/i.test(o[1])?t=7:/[1-9]00/.test(o[1])&&(t=parseInt(o[1].substr(0,1),10)))),a+t}function E(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new y("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function C(e){if(e.g){var t=h(e.f,e.a.c("wf","active")),a=[],o=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),g(e.f,a,o)}F(e,"inactive")}function F(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,T(a)):e.h[t]())}function H(){this.c={}}function L(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function k(e){b(e.c,"body",e.a)}function P(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+S(e.c)+";font-style:"+j(e)+";font-weight:"+e.f+"00;"}function B(e,t,a,o,n,l){this.g=e,this.j=t,this.a=o,this.c=a,this.f=n||3e3,this.h=l||void 0}function z(e,t,a,o,n,l,i){this.v=e,this.B=t,this.c=a,this.a=o,this.s=i||"BESbswy",this.f={},this.w=n||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new L(this.c,this.s),this.h=new L(this.c,this.s),this.j=new L(this.c,this.s),this.m=new L(this.c,this.s),e=P(e=new x(this.a.c+",serif",T(this.a))),this.g.a.style.cssText=e,e=P(e=new x(this.a.c+",sans-serif",T(this.a))),this.h.a.style.cssText=e,e=P(e=new x("serif",T(this.a))),this.j.a.style.cssText=e,e=P(e=new x("sans-serif",T(this.a))),this.m.a.style.cssText=e,k(this.g),k(this.h),k(this.j),k(this.m)}y.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},B.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),o=new Promise((function(o,n){!function l(){r()-a>=t.f?n():e.fonts.load(function(e){return j(e)+" "+e.f+"00 300px "+S(e.c)}(t.a),t.h).then((function(e){1<=e.length?o():setTimeout(l,25)}),(function(){n()}))}()})),n=null,l=new Promise((function(e,a){n=setTimeout(a,t.f)}));Promise.race([l,o]).then((function(){n&&(clearTimeout(n),n=null),t.g(t.a)}),(function(){t.j(t.a)}))};var M={D:"serif",C:"sans-serif"},A=null;function N(){if(null===A){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);A=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return A}function G(e,t,a){for(var o in M)if(M.hasOwnProperty(o)&&t===e.f[M[o]]&&a===e.f[M[o]])return!0;return!1}function I(e,t){setTimeout(i((function(){d(this.g.a),d(this.h.a),d(this.j.a),d(this.m.a),t(this.a)}),e),0)}function W(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,o=t.g.a.offsetWidth,n=t.h.a.offsetWidth;(a=o===t.f.serif&&n===t.f["sans-serif"])||(a=N()&&G(t,o,n)),a?r()-t.A>=t.w?N()&&G(t,o,n)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?I(t,t.v):I(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):I(t,t.v)}(this)};var D=null;function R(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&g(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),F(e,"active")):C(e.a))}function U(e){this.j=e,this.a=new H,this.h=0,this.f=this.g=!0}function V(e,t,a,o,n){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=n||null,r=o||{};if(0===a.length&&l)C(t.a);else{t.f+=a.length,l&&(t.j=l);var s,u=[];for(s=0;s<a.length;s++){var c=a[s],b=r[c.c],d=t.a,h=c;if(d.g&&g(d.f,[d.a.c("wf",h.c,T(h).toString(),"loading")]),F(d,"fontloading",h),d=null,null===D)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var f=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=h?42<parseInt(h[1],10):!f}else D=!1;d=D?new B(i(t.g,t),i(t.h,t),t.c,c,t.s,b):new z(i(t.g,t),i(t.h,t),t.c,c,t.s,e,b),u.push(d)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}W.prototype.g=function(e){var t=this.a;t.g&&g(t.f,[t.a.c("wf",e.c,T(e).toString(),"active")],[t.a.c("wf",e.c,T(e).toString(),"loading"),t.a.c("wf",e.c,T(e).toString(),"inactive")]),F(t,"fontactive",e),this.m=!0,R(this)},W.prototype.h=function(e){var t=this.a;if(t.g){var a=h(t.f,t.a.c("wf",e.c,T(e).toString(),"active")),o=[],n=[t.a.c("wf",e.c,T(e).toString(),"loading")];a||o.push(t.a.c("wf",e.c,T(e).toString(),"inactive")),g(t.f,o,n)}F(t,"fontinactive",e),R(this)},U.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var o=[],n=a.timeout;!function(e){e.g&&g(e.f,[e.a.c("wf","loading")]),F(e,"loading")}(t),o=function(e,t,a){var o,n=[];for(o in t)if(t.hasOwnProperty(o)){var l=e.c[o];l&&n.push(l(t[o],a))}return n}(e.a,a,e.c);var l=new W(e.c,t,n);for(e.h=o.length,t=0,a=o.length;t<a;t++)o[t].load((function(t,a,o){V(e,l,t,a,o)}))}(this,new E(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,o=t.a.version;if(a){var n=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(o?"?v="+o:""),(function(o){o?e([]):(n["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(n["__mti_fntLst"+a]){var o,l=n["__mti_fntLst"+a](),i=[];if(l)for(var r=0;r<l.length;r++){var s=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(o=l[r].fontStyle+l[r].fontWeight,i.push(new x(s,o))):i.push(new x(s))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,o=this.a.urls||[],n=this.a.families||[],l=this.a.testStrings||{},i=new p;for(t=0,a=o.length;t<a;t++)f(this.c,o[t],v(i));var r=[];for(t=0,a=n.length;t<a;t++)if((o=n[t].split(":"))[1])for(var s=o[1].split(","),u=0;u<s.length;u+=1)r.push(new x(o[0],s[u]));else r.push(new x(o[0]));w(i,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function Q(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function oe(e,t){this.c=e,this.a=t}function ne(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,o=new J(this.a.api,this.a.text),n=this.a.families;!function(e,t){for(var a=t.length,o=0;o<a;o++){var n=t[o].split(":");3==n.length&&e.f.push(n.pop());var l="";2==n.length&&""!=n[1]&&(l=":"),e.a.push(n.join(l))}}(o,n);var l=new Q(n);!function(e){for(var t=e.f.length,a=0;a<t;a++){var o=e.f[a].split(":"),n=o[0].replace(/\+/g," "),l=["n4"];if(2<=o.length){var i;if(i=[],r=o[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var c;if((c=r[u]).match(/^[\w-]+$/))if(null==(b=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=b[2])||""==c?"n":Z[c],null==(b=b[1])||""==b)b="4";else var b=Y[b]||(isNaN(b)?"4":b.substr(0,1));c=[c,b].join("")}else c="";c&&i.push(c)}0<i.length&&(l=i),3==o.length&&(i=[],0<(o=(o=o[2])?o.split(","):i).length&&(o=X[o[0]])&&(e.c[n]=o))}for(e.c[n]||(o=X[n])&&(e.c[n]=o),o=0;o<l.length;o+=1)e.a.push(new x(n,l[o]))}}(l),f(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],o=0;o<t;o++)a.push(e.a[o].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(o),v(t)),w(t,(function(){e(l.a,l.c,ae)}))},oe.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var o=[],n=0;n<t.length;n+=2)for(var l=t[n],i=t[n+1],r=0;r<i.length;r++)o.push(new x(l,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(o)}}),2e3):e([])},ne.prototype.load=function(e){var t=this.f.id,a=this.c.o,o=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var n=0,l=a.fonts.length;n<l;++n){var i=a.fonts[n];o.a.push(new x(i.name,O("font-weight:"+i.weight+";font-style:"+i.style)))}e(o.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new U(window);le.a.c.custom=function(e,t){return new $(t,e)},le.a.c.fontdeck=function(e,t){return new ne(t,e)},le.a.c.monotype=function(e,t){return new q(t,e)},le.a.c.typekit=function(e,t){return new oe(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(o=function(){return ie}.call(t,a,t,e))||(e.exports=o)}()},206:function(e,t,a){"use strict";var o=a(14),n=a.n(o)()((function(e){return e[1]}));n.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px;\n  position: relative; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 14px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: 25;\n    right: 0;\n    background: #fff;\n    z-index: 99;\n    width: 100%; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),t.a=n},209:function(e,t,a){"use strict";var o,n=a(1),l=a(18),i=a(15),r=a(6),s=a(2),u=a(19),c=a(13),b=a.n(c),d=a(206),g=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=d.a.locals||{},f.use=function(){return g++||(o=b()(d.a,h)),f},f.unuse=function(){g>0&&!--g&&(o(),o=null)};var m=f,p=a(0),v=a.n(p);t.a=e=>{const[t,a]=Object(s.useState)(!1);Object(p.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]),Object(p.useLayoutEffect)(()=>{window.addEventListener("click",(function(e){const t=document.querySelector(".uagb-box-shadow-advanced"),o=document.querySelector(".uag-box-shadow-button");var n,l,i,r;t&&(null!=t&&t.contains(e.target)||null!=o&&o.contains(e.target)||null!==(n=e.target)&&void 0!==n&&null!==(l=n.classList)&&void 0!==l&&l.contains("uagb-advanced-color-indicate")||null!==(i=e.target)&&void 0!==i&&null!==(r=i.parentElement)&&void 0!==r&&r.closest(".uagb-popover-color")||a(!1))}))},[]);const{setAttributes:o,boxShadowColor:c,boxShadowHOffset:b,boxShadowVOffset:d,boxShadowBlur:g,boxShadowSpread:h,boxShadowPosition:f}=e;let w;const _=t?"active":"";t&&(w=v.a.createElement("div",{className:"uagb-box-shadow-advanced"},v.a.createElement("div",{className:"uagb-shadow-color"},v.a.createElement(i.a,{label:c.title,colorValue:c.value,onColorChange:e=>o({[c.label]:e})})),v.a.createElement("div",{className:"uagb-horizontal-wrap"},v.a.createElement(l.a,{label:b.title,value:b.value,min:0,max:100,displayUnit:!1,setAttributes:o,data:{value:b.value,label:b.label},onChange:!1})),v.a.createElement("div",{className:"uagb-vertical-wrap"},v.a.createElement(l.a,{label:d.title,value:d.value,min:0,max:100,displayUnit:!1,setAttributes:o,data:{value:d.value,label:d.label},onChange:!1})),v.a.createElement("div",{className:"uagb-blur-wrap"},v.a.createElement(l.a,{label:g.title,value:g.value,min:0,max:100,displayUnit:!1,setAttributes:o,data:{value:g.value,label:g.label},onChange:!1})),v.a.createElement("div",{className:"uagb-spread-wrap"},v.a.createElement(l.a,{label:h.title,value:h.value,min:-100,max:100,displayUnit:!1,setAttributes:o,data:{value:h.value,label:h.label},onChange:!1})),v.a.createElement("div",{className:"uagb-shadow-type"},v.a.createElement(u.a,{setAttributes:o,label:f.title,data:{value:f.value,label:f.label},options:[{value:"outset",label:Object(n.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(n.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const y=v.a.createElement("div",{className:"uag-box-shadow-option-actions"},v.a.createElement("span",{className:"uag-control-label"},Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg")),v.a.createElement(r.Button,{className:"uag-box-shadow-button","aria-pressed":t,onClick:()=>a(!t)},v.a.createElement(r.Dashicon,{icon:"edit"})));return v.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+_},y,t&&w)}},495:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(1),i=a(9),r=a(199),s=a(11),u=a(33),c=a(209),b=a(77),d=a(15),g=a(79),h=a(25),f=a(55),m=a(18),p=a(24),v=a(19),w=a(56),_=a(6),y=a(4),x=a(16),S=a(34),T=a.n(S);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const O=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,taxonomyList:S,termsList:O,deviceType:E}=e,{postType:C,taxonomyType:F,layout:H,columns:L,tcolumns:k,mcolumns:P,bgColor:B,titleColor:z,countColor:M,rowGap:A,rowGapTablet:N,rowGapMobile:G,columnGap:I,columnGapTablet:W,columnGapMobile:D,contentTopPadding:R,contentRightPadding:U,contentBottomPadding:V,contentLeftPadding:q,contentTopPaddingTablet:$,contentRightPaddingTablet:J,contentBottomPaddingTablet:K,contentLeftPaddingTablet:Q,contentTopPaddingMobile:X,contentRightPaddingMobile:Y,contentBottomPaddingMobile:Z,contentLeftPaddingMobile:ee,contentPaddingUnit:te,mobileContentPaddingUnit:ae,tabletContentPaddingUnit:oe,contentPaddingLink:ne,titleBottomSpace:le,titleBottomSpaceTablet:ie,titleBottomSpaceMobile:re,alignment:se,listStyle:ue,seperatorStyle:ce,seperatorWidth:be,seperatorThickness:de,seperatorColor:ge,seperatorHoverColor:he,listTextColor:fe,hoverlistTextColor:me,listBottomMargin:pe,listStyleColor:ve,hoverlistStyleColor:we,noTaxDisplaytext:_e,boxShadowColor:ye,boxShadowHOffset:xe,boxShadowVOffset:Se,boxShadowBlur:Te,boxShadowSpread:je,boxShadowPosition:Oe,showCount:Ee,titleFontSize:Ce,titleFontSizeType:Fe,titleFontSizeMobile:He,titleFontSizeTablet:Le,titleFontFamily:ke,titleFontWeight:Pe,titleFontStyle:Be,titleLineHeightType:ze,titleLineHeight:Me,titleLineHeightTablet:Ae,titleLineHeightMobile:Ne,titleLoadGoogleFonts:Ge,countFontSize:Ie,countFontSizeType:We,countFontSizeMobile:De,countFontSizeTablet:Re,countFontFamily:Ue,countFontWeight:Ve,countFontStyle:qe,countLineHeightType:$e,countLineHeight:Je,countLineHeightTablet:Ke,countLineHeightMobile:Qe,countLoadGoogleFonts:Xe,listFontSize:Ye,listFontSizeType:Ze,listFontSizeMobile:et,listFontSizeTablet:tt,listFontFamily:at,listFontWeight:ot,listFontStyle:nt,listLineHeightType:lt,listLineHeight:it,listLineHeightTablet:rt,listLineHeightMobile:st,listLoadGoogleFonts:ut,showEmptyTaxonomy:ct,borderStyle:bt,borderThickness:dt,borderColor:gt,borderRadius:ht,borderHoverColor:ft,listDisplayStyle:mt,showhierarchy:pt,titleTag:vt,titleTransform:wt,countTransform:_t,listTransform:yt,titleDecoration:xt,countDecoration:St,listDecoration:Tt}=t,jt=ct?S:O,Ot=[{value:"",label:Object(l.__)("Select Taxonomy","ultimate-addons-for-gutenberg")}];let Et,Ct,Ft;if(""!==jt&&void 0!==jt&&Object.keys(jt).map(e=>Ot.push({value:S[e].name,label:S[e].label})),!0===Ge){const e={google:{families:[ke+(Pe?":"+Pe:"")]}};Et=n.a.createElement(r.a,{config:e})}if(!0===Xe){const e={google:{families:[Ue+(Ve?":"+Ve:"")]}};Ct=n.a.createElement(r.a,{config:e})}if(!0===ut){const e={google:{families:[at+(ot?":"+ot:"")]}};Ft=n.a.createElement(r.a,{config:e})}const Ht=n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{label:Object(l.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:fe||"",onColorChange:e=>a({listTextColor:e})}),n.a.createElement("br",null),"none"!==ue&&n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{label:Object(l.__)("Bullet/Numbers Color","ultimate-addons-for-gutenberg"),colorValue:ve||"",onColorChange:e=>a({listStyleColor:e})}))),Lt=n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{label:Object(l.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:me||"",onColorChange:e=>a({hoverlistTextColor:e})}),n.a.createElement("br",null),"none"!==ue&&n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{label:Object(l.__)("Bullet/Numbers Color","ultimate-addons-for-gutenberg"),colorValue:we||"",onColorChange:e=>a({hoverlistStyleColor:e})}))),kt=n.a.createElement(y.InspectorControls,null,n.a.createElement(g.a,null,n.a.createElement(h.b,h.a.general,n.a.createElement(x.a,{title:Object(l.__)("Query","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(_.SelectControl,{label:Object(l.__)("Post Type","ultimate-addons-for-gutenberg"),value:C,onChange:e=>(e=>{const t=new window.FormData;t.append("action","uagb_get_taxonomy"),t.append("nonce",uagb_blocks_info.uagb_ajax_nonce),T()({url:uagb_blocks_info.ajax_url,method:"POST",body:t}).then(t=>{a({listInJson:t}),a({postType:e}),a({categories:""}),a({taxonomyType:""})})})(e),options:uagb_blocks_info.post_types}),""!==S&&n.a.createElement(_.SelectControl,{label:Object(l.__)("Taxonomy","ultimate-addons-for-gutenberg"),value:F,onChange:e=>(e=>{a({taxonomyType:e}),a({categories:""})})(e),options:Ot}),""===S&&n.a.createElement(_.TextControl,{autoComplete:"off",label:Object(l.__)("Display Message","ultimate-addons-for-gutenberg"),value:_e,onChange:e=>a({noTaxDisplaytext:e}),help:Object(l.__)("If taxonomy Not Found","ultimate-addons-for-gutenberg")}),n.a.createElement(_.ToggleControl,{label:Object(l.__)("Show Empty Taxonomy","ultimate-addons-for-gutenberg"),checked:ct,onChange:()=>a({showEmptyTaxonomy:!ct})}),n.a.createElement(_.ToggleControl,{label:Object(l.__)("Show Posts Count","ultimate-addons-for-gutenberg"),checked:Ee,onChange:()=>a({showCount:!Ee})}),"list"===H&&"list"===mt&&"post_tag"!==F&&n.a.createElement(_.ToggleControl,{label:Object(l.__)("Show Hierarchy","ultimate-addons-for-gutenberg"),checked:pt,onChange:()=>a({showhierarchy:!pt})})),(()=>{let e=vt;return""===vt&&(e="h4","list"===H&&(e="div")),n.a.createElement(x.a,{title:Object(l.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:e,label:"titleTag"},options:[{value:"h1",label:Object(l.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(l.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(l.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(l.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(l.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(l.__)("H6","ultimate-addons-for-gutenberg")},{value:"div",label:Object(l.__)("Div","ultimate-addons-for-gutenberg")}]}),n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:H,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"grid",label:"Grid"},{value:"list",label:"List"}],showIcons:!1}),"grid"===H&&n.a.createElement(p.a,{label:Object(l.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:L,label:"columns",min:1,max:4},tablet:{value:k,label:"tcolumns",min:1,max:3},mobile:{value:P,label:"mcolumns",min:1,max:2}},min:1,max:4,displayUnit:!1,setAttributes:a}),"list"===H&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("Display Style","ultimate-addons-for-gutenberg"),data:{value:mt,label:"listDisplayStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"list",label:"List"},{value:"dropdown",label:"Dropdown"}],showIcons:!1})),"grid"===H&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:se,label:"alignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(_.Icon,{icon:Object(s.a)("fa fa-align-left")}),tooltip:Object(l.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(_.Icon,{icon:Object(s.a)("fa fa-align-center")}),tooltip:Object(l.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(_.Icon,{icon:Object(s.a)("fa fa-align-right")}),tooltip:Object(l.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),"list"===H&&"dropdown"!==mt&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("List Style","ultimate-addons-for-gutenberg"),data:{value:ue,label:"listStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"disc",icon:n.a.createElement(_.Icon,{icon:Object(s.a)("fa fa-list-ul")}),tooltip:Object(l.__)("Bullet","ultimate-addons-for-gutenberg")},{value:"decimal",icon:n.a.createElement(_.Icon,{icon:Object(s.a)("fa fa-list-ol")}),tooltip:Object(l.__)("Numbers","ultimate-addons-for-gutenberg")},{value:"none",icon:n.a.createElement(_.Icon,{icon:Object(s.a)("fa fa-bars")}),tooltip:Object(l.__)("None","ultimate-addons-for-gutenberg")}],showIcons:!0})))})()),n.a.createElement(h.b,h.a.style,"grid"===H&&"dropdown"!==mt&&n.a.createElement(x.a,{title:Object(l.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(u.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:Ge,label:"titleLoadGoogleFonts"},fontFamily:{value:ke,label:"titleFontFamily"},fontWeight:{value:Pe,label:"titleFontWeight"},fontStyle:{value:Be,label:"titleFontStyle"},fontSizeType:{value:Fe,label:"titleFontSizeType"},fontSize:{value:Ce,label:"titleFontSize"},fontSizeMobile:{value:He,label:"titleFontSizeMobile"},fontSizeTablet:{value:Le,label:"titleFontSizeTablet"},lineHeightType:{value:ze,label:"titleLineHeightType"},lineHeight:{value:Me,label:"titleLineHeight"},lineHeightMobile:{value:Ne,label:"titleLineHeightMobile"},lineHeightTablet:{value:Ae,label:"titleLineHeightTablet"},transform:{value:wt,label:"titleTransform"},decoration:{value:xt,label:"titleDecoration"}}),n.a.createElement(d.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:z||"",onColorChange:e=>a({titleColor:e})}),Ee&&n.a.createElement(p.a,{label:Object(l.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),data:{desktop:{value:le,label:"titleBottomSpace"},tablet:{value:ie,label:"titleBottomSpaceTablet"},mobile:{value:re,label:"titleBottomSpaceMobile"}},min:0,max:50,displayUnit:!1,setAttributes:a})),"grid"===H&&"dropdown"!==mt&&Ee&&n.a.createElement(x.a,{title:Object(l.__)("Count","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:e=>a({countColor:e})}),n.a.createElement(u.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:Xe,label:"countLoadGoogleFonts"},fontFamily:{value:Ue,label:"countFontFamily"},fontWeight:{value:Ve,label:"countFontWeight"},fontStyle:{value:qe,label:"countFontStyle"},fontSizeType:{value:We,label:"countFontSizeType"},fontSize:{value:Ie,label:"countFontSize"},fontSizeMobile:{value:De,label:"countFontSizeMobile"},fontSizeTablet:{value:Re,label:"countFontSizeTablet"},lineHeightType:{value:$e,label:"countLineHeightType"},lineHeight:{value:Je,label:"countLineHeight"},lineHeightMobile:{value:Qe,label:"countLineHeightMobile"},lineHeightTablet:{value:Ke,label:"countLineHeightTablet"},transform:{value:_t,label:"countTransform"},decoration:{value:St,label:"countDecoration"}})),"grid"===H&&"dropdown"!==mt&&n.a.createElement(x.a,{title:Object(l.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:e=>a({bgColor:e})})),"grid"===H&&"dropdown"!==mt&&n.a.createElement(x.a,{title:Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(c.a,{setAttributes:a,label:Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:ye,label:"boxShadowColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:xe,label:"boxShadowHOffset",title:Object(l.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:Se,label:"boxShadowVOffset",title:Object(l.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:Te,label:"boxShadowBlur",title:Object(l.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:je,label:"boxShadowSpread",title:Object(l.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Oe,label:"boxShadowPosition",title:Object(l.__)("Position","ultimate-addons-for-gutenberg")}})),"grid"===H&&"dropdown"!==mt&&n.a.createElement(x.a,{title:Object(l.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(b.a,{disabledBorderTitle:!0,setAttributes:a,borderStyle:{value:bt,label:"borderStyle",title:Object(l.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:dt,label:"borderThickness",title:Object(l.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ht,label:"borderRadius",title:Object(l.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:gt,label:"borderColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:ft,label:"borderHoverColor",title:Object(l.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),"list"===H&&"dropdown"!==mt&&n.a.createElement(x.a,{title:Object(l.__)("List","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(u.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:ut,label:"listLoadGoogleFonts"},fontFamily:{value:at,label:"listFontFamily"},fontWeight:{value:ot,label:"listFontWeight"},fontStyle:{value:nt,label:"listFontStyle"},fontSizeType:{value:Ze,label:"listFontSizeType"},fontSize:{value:Ye,label:"listFontSize"},fontSizeMobile:{value:et,label:"listFontSizeMobile"},fontSizeTablet:{value:tt,label:"listFontSizeTablet"},lineHeightType:{value:lt,label:"listLineHeightType"},lineHeight:{value:it,label:"listLineHeight"},lineHeightMobile:{value:st,label:"listLineHeightMobile"},lineHeightTablet:{value:rt,label:"listLineHeightTablet"},transform:{value:yt,label:"listTransform"},decoration:{value:Tt,label:"listDecoration"}}),n.a.createElement(w.a,{tabs:[{name:"normal",title:Object(l.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(l.__)("Hover","ultimate-addons-for-gutenberg")}],normal:Ht,hover:Lt,disableBottomSeparator:!0})),"list"===H&&"dropdown"!==mt&&n.a.createElement(x.a,{title:Object(l.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(b.a,{disabledBorderTitle:!1,setAttributes:a,borderStyle:{value:ce,label:"seperatorStyle",title:Object(l.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:be,label:"seperatorWidth",title:Object(l.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:de,label:"seperatorThickness",title:Object(l.__)("Thickness","ultimate-addons-for-gutenberg")},borderColor:{value:ge,label:"seperatorColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:he,label:"seperatorHoverColor",title:Object(l.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),"dropdown"!==mt&&n.a.createElement(x.a,{title:Object(l.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},"grid"===H&&n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{label:Object(l.__)("Row Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:A,label:"rowGap"},tablet:{value:N,label:"rowGapTablet"},mobile:{value:G,label:"rowGapMobile"}},min:1,max:50,displayUnit:!1,setAttributes:a}),n.a.createElement(p.a,{label:Object(l.__)("Column Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:I,label:"columnGap"},tablet:{value:W,label:"columnGapTablet"},mobile:{value:D,label:"columnGapMobile"}},min:1,max:50,displayUnit:!1,setAttributes:a}),n.a.createElement(f.a,j({},e,{label:Object(l.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:R,label:"contentTopPadding"},valueRight:{value:U,label:"contentRightPadding"},valueBottom:{value:V,label:"contentBottomPadding"},valueLeft:{value:q,label:"contentLeftPadding"},valueTopTablet:{value:$,label:"contentTopPaddingTablet"},valueRightTablet:{value:J,label:"contentRightPaddingTablet"},valueBottomTablet:{value:K,label:"contentBottomPaddingTablet"},valueLeftTablet:{value:Q,label:"contentLeftPaddingTablet"},valueTopMobile:{value:X,label:"contentTopPaddingMobile"},valueRightMobile:{value:Y,label:"contentRightPaddingMobile"},valueBottomMobile:{value:Z,label:"contentBottomPaddingMobile"},valueLeftMobile:{value:ee,label:"contentLeftPaddingMobile"},unit:{value:te,label:"contentPaddingUnit"},mUnit:{value:ae,label:"mobileContentPaddingUnit"},tUnit:{value:oe,label:"tabletContentPaddingUnit"},deviceType:E,attributes:t,setAttributes:a,link:{value:ne,label:"contentPaddingLink"}}))),"list"===H&&n.a.createElement(m.a,{label:Object(l.__)("Bottom Margin","ultimate-addons-for-gutenberg"),setAttributes:a,value:pe,onChange:e=>a({listBottomMargin:e}),min:0,max:100,displayUnit:!1})),"list"===H&&"dropdown"===mt&&n.a.createElement("p",{className:"uagb-settings-notice"},Object(l.__)("There is no style available for the currently selected layout.","ultimate-addons-for-gutenberg"))),n.a.createElement(h.b,j({},h.a.advance,{parentProps:e}))));return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.Suspense,{fallback:Object(i.a)()},n.a.createElement(y.BlockControls,{key:"controls"},n.a.createElement(y.AlignmentToolbar,{value:se,onChange:e=>a({alignment:e})})),kt,Et,Ct,Ft))};t.default=n.a.memo(O)}}]);