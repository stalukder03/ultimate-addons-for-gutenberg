(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[66],{208:function(e,t,l){"use strict";var a,i,n=l(21),o=l.n(n),r=l(209),s=l.n(r),c=l(2);if(void 0===u)var u=[];const b=e=>{const[t,l]=Object(c.useState)([]);Object(c.useEffect)(()=>{r()},[]),Object(c.useEffect)(()=>{const{onStatus:l,config:a}=e;void 0!==t.status&&l(t.status),a!==t.config&&r()},[e]);const a=()=>{l({status:"loading"})},i=e=>{u.includes(e)||u.push(e)},n=()=>{l({status:"active"})},o=()=>{l({status:"inactive"})},r=()=>{u.includes(e.config.google.families[0])||(s.a.load({...e.config,loading:a,active:n,inactive:o}),i(e.config.google.families[0]));const t=document.getElementsByClassName("is-tablet-preview"),l=document.getElementsByClassName("is-mobile-preview");if(0!==t.length||0!==l.length){const r=(t[0]||l[0]).getElementsByTagName("iframe")[0];r&&(s.a.load({...e.config,loading:a,active:n,inactive:o,context:null==r?void 0:r.contentWindow}),i(e.config.google.families[0]))}},{children:b}=e;return b||null};b.propTypes={config:null===(a=o.a.object)||void 0===a?void 0:a.isRequired,children:o.a.element,onStatus:null===(i=o.a.func)||void 0===i?void 0:i.isRequired},b.defaultProps={onStatus:()=>{}},t.a=b},209:function(e,t,l){var a;!function(){function i(e,t,l){return e.call.apply(e.bind,arguments)}function n(e,t,l){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var l=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(l,a),e.apply(t,l)}}return function(){return e.apply(t,arguments)}}function o(e,t,l){return(o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:n).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function u(e,t,l,a){if(t=e.c.createElement(t),l)for(var i in l)l.hasOwnProperty(i)&&("style"==i?t.style.cssText=l[i]:t.setAttribute(i,l[i]));return a&&t.appendChild(e.c.createTextNode(a)),t}function b(e,t,l){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(l,e.lastChild)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,l){t=t||[],l=l||[];for(var a=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var n=!1,o=0;o<a.length;o+=1)if(t[i]===a[o]){n=!0;break}n||a.push(t[i])}for(t=[],i=0;i<a.length;i+=1){for(n=!1,o=0;o<l.length;o+=1)if(a[i]===l[o]){n=!0;break}n||t.push(a[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(e,t){for(var l=e.className.split(/\s+/),a=0,i=l.length;a<i;a++)if(l[a]==t)return!0;return!1}function h(e,t,l){function a(){r&&i&&n&&(r(o),r=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,n=!0,o=null,r=l||null;c?(t.onload=function(){i=!0,a()},t.onerror=function(){i=!0,o=Error("Stylesheet failed to load"),a()}):setTimeout((function(){i=!0,a()}),0),b(e,"head",t)}function p(e,t,l,a){var i=e.c.getElementsByTagName("head")[0];if(i){var n=u(e,"script",{src:t}),o=!1;return n.onload=n.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,l&&l(null),n.onload=n.onreadystatechange=null,"HEAD"==n.parentNode.tagName&&i.removeChild(n))},i.appendChild(n),setTimeout((function(){o||(o=!0,l&&l(Error("Script load timeout")))}),a||5e3),n}return null}function v(){this.a=0,this.c=null}function m(e){return e.a++,function(){e.a--,w(e)}}function _(e,t){e.c=t,w(e)}function w(e){0==e.a&&e.c&&(e.c(),e.c=null)}function y(e){this.a=e||"-"}function C(e,t){this.c=e,this.f=4,this.a="n";var l=(t||"n4").match(/^([nio])([1-9])$/i);l&&(this.a=l[1],this.f=parseInt(l[2],10))}function M(e){var t=[];e=e.split(/,\s*/);for(var l=0;l<e.length;l++){var a=e[l].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function T(e){return e.a+e.f}function B(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function j(e){var t=4,l="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(l=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),l+t}function k(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new y("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function O(e){if(e.g){var t=g(e.f,e.a.c("wf","active")),l=[],a=[e.a.c("wf","loading")];t||l.push(e.a.c("wf","inactive")),d(e.f,l,a)}L(e,"inactive")}function L(e,t,l){e.j&&e.h[t]&&(l?e.h[t](l.c,T(l)):e.h[t]())}function x(){this.c={}}function S(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function H(e){b(e.c,"body",e.a)}function E(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+M(e.c)+";font-style:"+B(e)+";font-weight:"+e.f+"00;"}function A(e,t,l,a,i,n){this.g=e,this.j=t,this.a=a,this.c=l,this.f=i||3e3,this.h=n||void 0}function V(e,t,l,a,i,n,o){this.v=e,this.B=t,this.c=l,this.a=a,this.s=o||"BESbswy",this.f={},this.w=i||3e3,this.u=n||null,this.m=this.j=this.h=this.g=null,this.g=new S(this.c,this.s),this.h=new S(this.c,this.s),this.j=new S(this.c,this.s),this.m=new S(this.c,this.s),e=E(e=new C(this.a.c+",serif",T(this.a))),this.g.a.style.cssText=e,e=E(e=new C(this.a.c+",sans-serif",T(this.a))),this.h.a.style.cssText=e,e=E(e=new C("serif",T(this.a))),this.j.a.style.cssText=e,e=E(e=new C("sans-serif",T(this.a))),this.m.a.style.cssText=e,H(this.g),H(this.h),H(this.j),H(this.m)}y.prototype.c=function(e){for(var t=[],l=0;l<arguments.length;l++)t.push(arguments[l].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},A.prototype.start=function(){var e=this.c.o.document,t=this,l=r(),a=new Promise((function(a,i){!function n(){r()-l>=t.f?i():e.fonts.load(function(e){return B(e)+" "+e.f+"00 300px "+M(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(n,25)}),(function(){i()}))}()})),i=null,n=new Promise((function(e,l){i=setTimeout(l,t.f)}));Promise.race([n,a]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var z={D:"serif",C:"sans-serif"},D=null;function P(){if(null===D){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return D}function Z(e,t,l){for(var a in z)if(z.hasOwnProperty(a)&&t===e.f[z[a]]&&l===e.f[z[a]])return!0;return!1}function I(e,t){setTimeout(o((function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),t(this.a)}),e),0)}function R(e,t,l){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=l}V.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var l,a=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(l=a===t.f.serif&&i===t.f["sans-serif"])||(l=P()&&Z(t,a,i)),l?r()-t.A>=t.w?P()&&Z(t,a,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?I(t,t.v):I(t,t.B):function(t){setTimeout(o((function(){e(this)}),t),50)}(t):I(t,t.v)}(this)};var N=null;function F(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),L(e,"active")):O(e.a))}function G(e){this.j=e,this.a=new x,this.h=0,this.f=this.g=!0}function W(e,t,l,a,i){var n=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,r=a||{};if(0===l.length&&n)O(t.a);else{t.f+=l.length,n&&(t.j=n);var s,c=[];for(s=0;s<l.length;s++){var u=l[s],b=r[u.c],f=t.a,g=u;if(f.g&&d(f.f,[f.a.c("wf",g.c,T(g).toString(),"loading")]),L(f,"fontloading",g),f=null,null===N)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);N=g?42<parseInt(g[1],10):!h}else N=!1;f=N?new A(o(t.g,t),o(t.h,t),t.c,u,t.s,b):new V(o(t.g,t),o(t.h,t),t.c,u,t.s,e,b),c.push(f)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function U(e,t){this.c=e,this.a=t}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}R.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,T(e).toString(),"active")],[t.a.c("wf",e.c,T(e).toString(),"loading"),t.a.c("wf",e.c,T(e).toString(),"inactive")]),L(t,"fontactive",e),this.m=!0,F(this)},R.prototype.h=function(e){var t=this.a;if(t.g){var l=g(t.f,t.a.c("wf",e.c,T(e).toString(),"active")),a=[],i=[t.a.c("wf",e.c,T(e).toString(),"loading")];l||a.push(t.a.c("wf",e.c,T(e).toString(),"inactive")),d(t.f,a,i)}L(t,"fontinactive",e),F(this)},G.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,l){var a=[],i=l.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),L(e,"loading")}(t),a=function(e,t,l){var a,i=[];for(a in t)if(t.hasOwnProperty(a)){var n=e.c[a];n&&i.push(n(t[a],l))}return i}(e.a,l,e.c);var n=new R(e.c,t,i);for(e.h=a.length,t=0,l=a.length;t<l;t++)a[t].load((function(t,l,a){W(e,n,t,l,a)}))}(this,new k(this.c,e),e)},U.prototype.load=function(e){var t=this,l=t.a.projectId,a=t.a.version;if(l){var i=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+l+".js"+(a?"?v="+a:""),(function(a){a?e([]):(i["__MonotypeConfiguration__"+l]=function(){return t.a},function t(){if(i["__mti_fntLst"+l]){var a,n=i["__mti_fntLst"+l](),o=[];if(n)for(var r=0;r<n.length;r++){var s=n[r].fontfamily;null!=n[r].fontStyle&&null!=n[r].fontWeight?(a=n[r].fontStyle+n[r].fontWeight,o.push(new C(s,a))):o.push(new C(s))}e(o)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+l}else e([])},q.prototype.load=function(e){var t,l,a=this.a.urls||[],i=this.a.families||[],n=this.a.testStrings||{},o=new v;for(t=0,l=a.length;t<l;t++)h(this.c,a[t],m(o));var r=[];for(t=0,l=i.length;t<l;t++)if((a=i[t].split(":"))[1])for(var s=a[1].split(","),c=0;c<s.length;c+=1)r.push(new C(a[0],s[c]));else r.push(new C(a[0]));_(o,(function(){e(r,n)}))};var J="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Y={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var le={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new v,l=this.c,a=new $(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var l=t.length,a=0;a<l;a++){var i=t[a].split(":");3==i.length&&e.f.push(i.pop());var n="";2==i.length&&""!=i[1]&&(n=":"),e.a.push(i.join(n))}}(a,i);var n=new K(i);!function(e){for(var t=e.f.length,l=0;l<t;l++){var a=e.f[l].split(":"),i=a[0].replace(/\+/g," "),n=["n4"];if(2<=a.length){var o;if(o=[],r=a[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(b=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=b[2])||""==u?"n":Y[u],null==(b=b[1])||""==b)b="4";else var b=Q[b]||(isNaN(b)?"4":b.substr(0,1));u=[u,b].join("")}else u="";u&&o.push(u)}0<o.length&&(n=o),3==a.length&&(o=[],0<(a=(a=a[2])?a.split(","):o).length&&(a=X[a[0]])&&(e.c[i]=a))}for(e.c[i]||(a=X[i])&&(e.c[i]=a),a=0;a<n.length;a+=1)e.a.push(new C(i,n[a]))}}(n),h(l,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,l=[],a=0;a<t;a++)l.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+l.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),m(t)),_(t,(function(){e(n.a,n.c,le)}))},ae.prototype.load=function(e){var t=this.a.id,l=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(l.Typekit&&l.Typekit.config&&l.Typekit.config.fn){t=l.Typekit.config.fn;for(var a=[],i=0;i<t.length;i+=2)for(var n=t[i],o=t[i+1],r=0;r<o.length;r++)a.push(new C(n,o[r]));try{l.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,l=this.c.o,a=this;t?(l.__webfontfontdeckmodule__||(l.__webfontfontdeckmodule__={}),l.__webfontfontdeckmodule__[t]=function(t,l){for(var i=0,n=l.fonts.length;i<n;++i){var o=l.fonts[i];a.a.push(new C(o.name,j("font-weight:"+o.weight+";font-style:"+o.style)))}e(a.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ne=new G(window);ne.a.c.custom=function(e,t){return new q(t,e)},ne.a.c.fontdeck=function(e,t){return new ie(t,e)},ne.a.c.monotype=function(e,t){return new U(t,e)},ne.a.c.typekit=function(e,t){return new ae(t,e)},ne.a.c.google=function(e,t){return new te(t,e)};var oe={load:o(ne.load,ne)};void 0===(a=function(){return oe}.call(t,l,t,e))||(e.exports=a)}()},537:function(e,t,l){"use strict";l.r(t);var a=l(0),i=l.n(a),n=l(10),o=l(208),r=l(38),s=l(1),c=l(9),u=l(5),b=l(82),f=l(29),d=l(28),g=l(22),h=l(37),p=l(26),v=l(33),m=l(62);const _=[{defaultAttributes:v.a},{defaultChildAttributes:m.a},{value:"preset-1",label:Object(s.__)("Preset 1","ultimate-addons-for-gutenberg"),attributes:[{label:"size",value:20},{label:"bgSize",value:""},{label:"borderRadius",value:100},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#0170B9"},{label:"icon_bg_color",value:""}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118.8 135.771C118.8 133.903 120.222 132.389 121.975 132.389H247.53C249.283 132.389 250.705 133.903 250.705 135.771C250.705 137.639 249.283 139.153 247.53 139.153H121.975C120.222 139.153 118.8 137.639 118.8 135.771Z" fill="#D2D2D2"/> <circle cx="88.361" cy="135.771" r="14.6561" fill="#B6B6B6"/> <path d="M95.6556 136.301C95.9485 136.008 95.9485 135.533 95.6556 135.24L90.8827 130.467C90.5898 130.175 90.1149 130.175 89.822 130.467C89.5291 130.76 89.5291 131.235 89.822 131.528L94.0646 135.771L89.822 140.013C89.5291 140.306 89.5291 140.781 89.822 141.074C90.1149 141.367 90.5898 141.367 90.8827 141.074L95.6556 136.301ZM95.1253 135.021H81.5966V136.521H95.1253V135.021Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118.8 189.885C118.8 188.017 120.222 186.503 121.975 186.503H247.53C249.283 186.503 250.705 188.017 250.705 189.885C250.705 191.753 249.283 193.268 247.53 193.268H121.975C120.222 193.268 118.8 191.753 118.8 189.885Z" fill="#D2D2D2"/> <circle cx="88.361" cy="189.885" r="14.6561" fill="#B6B6B6"/> <path d="M95.6556 190.416C95.9485 190.123 95.9485 189.648 95.6556 189.355L90.8827 184.582C90.5898 184.289 90.1149 184.289 89.822 184.582C89.5291 184.875 89.5291 185.35 89.822 185.643L94.0646 189.885L89.822 194.128C89.5291 194.421 89.5291 194.896 89.822 195.189C90.1149 195.481 90.5898 195.481 90.8827 195.189L95.6556 190.416ZM95.1253 189.135H81.5966V190.635H95.1253V189.135Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118.8 81.6561C118.8 79.7882 120.222 78.2739 121.975 78.2739H247.53C249.283 78.2739 250.705 79.7882 250.705 81.6561C250.705 83.524 249.283 85.0383 247.53 85.0383H121.975C120.222 85.0383 118.8 83.524 118.8 81.6561Z" fill="#D2D2D2"/> <circle cx="88.361" cy="81.6561" r="14.6561" fill="#B6B6B6"/> <path d="M95.6556 82.1863C95.9485 81.8934 95.9485 81.4186 95.6556 81.1257L90.8827 76.3527C90.5898 76.0598 90.1149 76.0598 89.822 76.3527C89.5291 76.6456 89.5291 77.1205 89.822 77.4134L94.0646 81.656L89.822 85.8986C89.5291 86.1915 89.5291 86.6664 89.822 86.9593C90.1149 87.2522 90.5898 87.2522 90.8827 86.9593L95.6556 82.1863ZM95.1253 80.906H81.5966V82.406H95.1253V80.906Z" fill="white"/> </svg>'},{value:"preset-2",label:Object(s.__)("Preset 2","ultimate-addons-for-gutenberg"),attributes:[{label:"bgSize",value:10},{label:"size",value:20},{label:"borderRadius",value:100},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#fff"},{label:"icon_bg_color",value:"#0170B9"}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 135.771C120.096 133.903 121.517 132.388 123.27 132.388H248.825C250.579 132.388 252 133.903 252 135.771C252 137.639 250.579 139.153 248.825 139.153H123.27C121.517 139.153 120.096 137.639 120.096 135.771Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 189.885C120.096 188.017 121.517 186.503 123.27 186.503H248.825C250.579 186.503 252 188.017 252 189.885C252 191.753 250.579 193.268 248.825 193.268H123.27C121.517 193.268 120.096 191.753 120.096 189.885Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 81.6561C120.096 79.7882 121.517 78.2739 123.27 78.2739H248.825C250.579 78.2739 252 79.7882 252 81.6561C252 83.524 250.579 85.0383 248.825 85.0383H123.27C121.517 85.0383 120.096 83.524 120.096 81.6561Z" fill="#D2D2D2"/> <circle cx="89.6561" cy="81.6561" r="14.6561" fill="#B6B6B6"/> <circle cx="89.6561" cy="81.656" r="11.2739" fill="white"/> <path d="M96.9507 82.1863C97.2436 81.8934 97.2436 81.4186 96.9507 81.1257L92.1777 76.3527C91.8848 76.0598 91.41 76.0598 91.1171 76.3527C90.8242 76.6456 90.8242 77.1205 91.1171 77.4134L95.3597 81.656L91.1171 85.8986C90.8242 86.1915 90.8242 86.6664 91.1171 86.9593C91.41 87.2522 91.8848 87.2522 92.1777 86.9593L96.9507 82.1863ZM96.4204 80.906H82.8917V82.406H96.4204V80.906Z" fill="#B6B6B6"/> <circle cx="89.6561" cy="135.771" r="14.6561" fill="#B6B6B6"/> <circle cx="89.6561" cy="135.771" r="11.2739" fill="white"/> <path d="M96.9507 136.301C97.2436 136.008 97.2436 135.533 96.9507 135.24L92.1777 130.467C91.8848 130.175 91.41 130.175 91.1171 130.467C90.8242 130.76 90.8242 131.235 91.1171 131.528L95.3597 135.771L91.1171 140.013C90.8242 140.306 90.8242 140.781 91.1171 141.074C91.41 141.367 91.8848 141.367 92.1777 141.074L96.9507 136.301ZM96.4204 135.021H82.8917V136.521H96.4204V135.021Z" fill="#B6B6B6"/> <circle cx="89.6561" cy="189.885" r="14.6561" fill="#B6B6B6"/> <circle cx="89.6561" cy="189.885" r="11.2739" fill="white"/> <path d="M96.9507 190.416C97.2436 190.123 97.2436 189.648 96.9507 189.355L92.1777 184.582C91.8848 184.289 91.41 184.289 91.1171 184.582C90.8242 184.875 90.8242 185.35 91.1171 185.643L95.3597 189.885L91.1171 194.128C90.8242 194.421 90.8242 194.896 91.1171 195.189C91.41 195.481 91.8848 195.481 92.1777 195.189L96.9507 190.416ZM96.4204 189.135H82.8917V190.635H96.4204V189.135Z" fill="#B6B6B6"/> </svg>'},{value:"preset-3",label:Object(s.__)("Preset 3","ultimate-addons-for-gutenberg"),attributes:[{label:"bgSize",value:10},{label:"size",value:20},{label:"borderRadius",value:100},{label:"border",value:2}],childAttributes:[{label:"icon_color",value:"#0170B9"},{label:"icon_border_color",value:"#0170B9"},{label:"icon_bg_color",value:""}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 135.771C120.096 133.903 121.517 132.388 123.27 132.388H248.825C250.579 132.388 252 133.903 252 135.771C252 137.639 250.579 139.153 248.825 139.153H123.27C121.517 139.153 120.096 137.639 120.096 135.771Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 189.885C120.096 188.017 121.517 186.503 123.27 186.503H248.825C250.579 186.503 252 188.017 252 189.885C252 191.753 250.579 193.268 248.825 193.268H123.27C121.517 193.268 120.096 191.753 120.096 189.885Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 81.6561C120.096 79.7882 121.517 78.2739 123.27 78.2739H248.825C250.579 78.2739 252 79.7882 252 81.6561C252 83.524 250.579 85.0383 248.825 85.0383H123.27C121.517 85.0383 120.096 83.524 120.096 81.6561Z" fill="#D2D2D2"/> <circle cx="89.6561" cy="81.6561" r="14.1561" stroke="#B6B6B6" fill="none"/> <circle cx="89.656" cy="81.656" r="11.2739" fill="#B6B6B6"/> <path d="M96.9507 82.1863C97.2436 81.8934 97.2436 81.4186 96.9507 81.1257L92.1778 76.3527C91.8849 76.0598 91.41 76.0598 91.1171 76.3527C90.8242 76.6456 90.8242 77.1205 91.1171 77.4134L95.3598 81.656L91.1171 85.8986C90.8242 86.1915 90.8242 86.6664 91.1171 86.9593C91.41 87.2522 91.8849 87.2522 92.1778 86.9593L96.9507 82.1863ZM96.4204 80.906H82.8917V82.406H96.4204V80.906Z" fill="white"/> <circle cx="89.6561" cy="135.771" r="14.1561" stroke="#B6B6B6" fill="none"/> <circle cx="89.656" cy="135.771" r="11.2739" fill="#B6B6B6"/> <path d="M96.9507 136.301C97.2436 136.008 97.2436 135.533 96.9507 135.24L92.1778 130.467C91.8849 130.175 91.41 130.175 91.1171 130.467C90.8242 130.76 90.8242 131.235 91.1171 131.528L95.3598 135.771L91.1171 140.013C90.8242 140.306 90.8242 140.781 91.1171 141.074C91.41 141.367 91.8849 141.367 92.1778 141.074L96.9507 136.301ZM96.4204 135.021H82.8917V136.521H96.4204V135.021Z" fill="white"/> <circle cx="89.6561" cy="189.885" r="14.1561" stroke="#B6B6B6" fill="none"/> <circle cx="89.656" cy="189.885" r="11.2739" fill="#B6B6B6"/> <path d="M96.9507 190.416C97.2436 190.123 97.2436 189.648 96.9507 189.355L92.1778 184.582C91.8849 184.289 91.41 184.289 91.1171 184.582C90.8242 184.875 90.8242 185.35 91.1171 185.643L95.3598 189.885L91.1171 194.128C90.8242 194.421 90.8242 194.896 91.1171 195.189C91.41 195.481 91.8849 195.481 92.1778 195.189L96.9507 190.416ZM96.4204 189.135H82.8917V190.635H96.4204V189.135Z" fill="white"/> </svg>'}];var w=Object(p.applyFilters)("uag_icon_list_presets",_),y=l(79),C=l(13),M=l(8),T=l(18),B=l(60),j=l(17);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}const O=e=>{e=e.parentProps;const{attributes:t,deviceType:l,setAttributes:p,clientId:v}=e,{align:m,alignTablet:_,alignMobile:O,gap:L,gapTablet:x,gapMobile:S,gapType:H,inner_gap:E,innerGapTablet:A,innerGapMobile:V,innerGapType:z,icon_layout:D,iconLayoutTablet:P,iconLayoutMobile:Z,iconPosition:I,iconPositionTablet:R,iconPositionMobile:N,iconPlacement:F,size:G,sizeType:W,sizeMobile:U,sizeTablet:q,hideLabel:$,borderRadius:J,borderRadiusTablet:K,borderRadiusMobile:X,borderRadiusType:Q,bgSize:Y,bgSizeType:ee,bgSizeTablet:te,bgSizeMobile:le,border:ae,borderTablet:ie,borderMobile:ne,borderType:oe,fontSize:re,fontSizeType:se,fontSizeMobile:ce,fontSizeTablet:ue,fontFamily:be,fontWeight:fe,lineHeight:de,lineHeightType:ge,lineHeightMobile:he,lineHeightTablet:pe,loadGoogleFonts:ve,fontStyle:me,fontTransform:_e,fontDecoration:we,labelLetterSpacing:ye,labelLetterSpacingTablet:Ce,labelLetterSpacingMobile:Me,labelLetterSpacingType:Te,iconColor:Be,labelColor:je,iconHoverColor:ke,labelHoverColor:Oe,iconBgColor:Le,iconBgHoverColor:xe,iconBorderColor:Se,iconBorderHoverColor:He,blockTopMargin:Ee,blockRightMargin:Ae,blockLeftMargin:Ve,blockBottomMargin:ze,blockTopMarginTablet:De,blockRightMarginTablet:Pe,blockLeftMarginTablet:Ze,blockBottomMarginTablet:Ie,blockTopMarginMobile:Re,blockRightMarginMobile:Ne,blockLeftMarginMobile:Fe,blockBottomMarginMobile:Ge,blockMarginUnit:We,blockMarginUnitTablet:Ue,blockMarginUnitMobile:qe,blockMarginLink:$e}=t;let Je;if(!0===ve){const e={google:{families:[be+(fe?":"+fe:"")]}};Je=i.a.createElement(o.a,{config:e})}return i.a.createElement(a.Suspense,{fallback:Object(n.a)()},i.a.createElement(u.InspectorControls,null,i.a.createElement(b.a,null,i.a.createElement(f.b,f.a.general,i.a.createElement(T.a,{title:Object(s.__)("Presets","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(y.a,{setAttributes:p,presets:w,presetInputType:"radioImage"})),i.a.createElement(T.a,{title:Object(s.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(g.a,{setAttributes:p,label:Object(s.__)("Layout","ultimate-addons-for-gutenberg"),data:{desktop:{value:D,label:"icon_layout"},tablet:{value:P,label:"iconLayoutTablet"},mobile:{value:Z,label:"iconLayoutMobile"}},options:[{value:"horizontal",label:Object(s.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(s.__)("Vertical","ultimate-addons-for-gutenberg")}],showIcons:!1,responsive:!0}),i.a.createElement(g.a,{setAttributes:p,label:Object(s.__)("Alignment","ultimate-addons-for-gutenberg"),data:{desktop:{value:m,label:"align"},tablet:{value:_,label:"alignTablet"},mobile:{value:O,label:"alignMobile"}},options:[{value:"left",icon:i.a.createElement(M.Icon,{icon:Object(C.a)("fa fa-align-left")}),tooltip:Object(s.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(M.Icon,{icon:Object(C.a)("fa fa-align-center")}),tooltip:Object(s.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(M.Icon,{icon:Object(C.a)("fa fa-align-right")}),tooltip:Object(s.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0,responsive:!0}),!$&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{setAttributes:p,label:Object(s.__)("Icon Alignment","ultimate-addons-for-gutenberg"),data:{desktop:{value:I,label:"iconPosition"},tablet:{value:R,label:"iconPositionTablet"},mobile:{value:N,label:"iconPositionMobile"}},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top"},{value:"middle",label:"Middle"}],showIcons:!1,help:Object(s.__)("Note: This manages the Icon Position with respect to the Label.","ultimate-addons-for-gutenberg"),responsive:!0})),i.a.createElement(M.ToggleControl,{label:Object(s.__)("Hide Labels","ultimate-addons-for-gutenberg"),checked:$,onChange:e=>(e=>{Object(c.select)("core/block-editor").getBlocks(v).forEach(t=>{t.attributes.hideLabel=e}),p({hideLabel:e})})(e)}),!$&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{setAttributes:p,label:Object(s.__)("Icon Position","ultimate-addons-for-gutenberg"),data:{value:F,label:"iconPlacement"},className:"uagb-multi-button-alignment-control",options:[{value:"before",label:"Before"},{value:"after",label:"After"}],showIcons:!1})))),i.a.createElement(f.b,f.a.style,i.a.createElement(T.a,{title:Object(s.__)("Icon/Image","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(d.a,{label:Object(s.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:G,label:"size"},tablet:{value:q,label:"sizeTablet"},mobile:{value:U,label:"sizeMobile"}},min:0,max:200,unit:{value:W,label:"sizeType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(s.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:p}),i.a.createElement(d.a,{label:Object(s.__)("Background Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:Y,label:"bgSize"},tablet:{value:te,label:"bgSizeTablet"},mobile:{value:le,label:"bgSizeMobile"}},setAttributes:p,min:0,max:50,unit:{value:ee,label:"bgSizeType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],help:Object(s.__)("Note: Background Size option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(d.a,{label:Object(s.__)("Border","ultimate-addons-for-gutenberg"),data:{desktop:{value:ae,label:"border"},tablet:{value:ie,label:"borderTablet"},mobile:{value:ne,label:"borderMobile"}},min:0,max:10,unit:{value:oe,label:"borderType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:p,help:Object(s.__)("Note: Border option is useful when one adds border color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(d.a,{label:Object(s.__)("Border Radius","ultimate-addons-for-gutenberg"),data:{desktop:{value:J,label:"borderRadius"},tablet:{value:K,label:"borderRadiusTablet"},mobile:{value:X,label:"borderRadiusMobile"}},min:0,max:100,unit:{value:Q,label:"borderRadiusType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:p,help:Object(s.__)("Note: Border Radius option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(B.a,{tabs:[{name:"normal",title:Object(s.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(s.__)("Hover","ultimate-addons-for-gutenberg")}],normal:i.a.createElement(i.a.Fragment,null,i.a.createElement(j.a,{label:Object(s.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:Be||"",data:{value:Be,label:"iconColor"},setAttributes:p}),i.a.createElement(j.a,{label:Object(s.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Le||"",data:{value:Le,label:"iconBgColor"},setAttributes:p}),i.a.createElement(j.a,{label:Object(s.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:Se||"",data:{value:Se,label:"iconBorderColor"},setAttributes:p})),hover:i.a.createElement(i.a.Fragment,null,i.a.createElement(j.a,{label:Object(s.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:ke||"",data:{value:ke,label:"iconHoverColor"},setAttributes:p}),i.a.createElement(j.a,{label:Object(s.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:xe||"",data:{value:xe,label:"iconBgHoverColor"},setAttributes:p}),i.a.createElement(j.a,{label:Object(s.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:He||"",data:{value:He,label:"iconBorderHoverColor"},setAttributes:p})),disableBottomSeparator:!0})),!$&&i.a.createElement(T.a,{title:Object(s.__)("Label","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{label:Object(s.__)("Gap between Icon and Label","ultimate-addons-for-gutenberg"),data:{desktop:{value:E,label:"inner_gap"},tablet:{value:A,label:"innerGapTablet"},mobile:{value:V,label:"innerGapMobile"}},min:-100,max:100,unit:{value:z,label:"innerGapType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:p}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:p,loadGoogleFonts:{value:ve,label:"loadGoogleFonts"},fontFamily:{value:be,label:"fontFamily"},fontWeight:{value:fe,label:"fontWeight"},fontStyle:{value:me,label:"fontStyle"},transform:{value:_e,label:"fontTransform"},decoration:{value:we,label:"fontDecoration"},fontSizeType:{value:se,label:"fontSizeType"},fontSize:{value:re,label:"fontSize"},fontSizeMobile:{value:ce,label:"fontSizeMobile"},fontSizeTablet:{value:ue,label:"fontSizeTablet"},lineHeightType:{value:ge,label:"lineHeightType"},lineHeight:{value:de,label:"lineHeight"},lineHeightMobile:{value:he,label:"lineHeightMobile"},lineHeightTablet:{value:pe,label:"lineHeightTablet"},letterSpacing:{value:ye,label:"labelLetterSpacing"},letterSpacingTablet:{value:Ce,label:"labelLetterSpacingTablet"},letterSpacingMobile:{value:Me,label:"labelLetterSpacingMobile"},letterSpacingType:{value:Te,label:"labelLetterSpacingType"}}),i.a.createElement(B.a,{tabs:[{name:"normal",title:Object(s.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(s.__)("Hover","ultimate-addons-for-gutenberg")}],normal:i.a.createElement(j.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:je,data:{value:je,label:"labelColor"},setAttributes:p}),hover:i.a.createElement(j.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Oe,data:{value:Oe,label:"labelHoverColor"},setAttributes:p}),disableBottomSeparator:!0})),i.a.createElement(T.a,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{label:Object(s.__)("Gap between Items","ultimate-addons-for-gutenberg"),data:{desktop:{value:L,label:"gap"},tablet:{value:x,label:"gapTablet"},mobile:{value:S,label:"gapMobile"}},min:0,max:100,unit:{value:H,label:"gapType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:p,help:Object(s.__)("Note: For better editing experience, the gap between items might look larger than applied. Viewing in frontend will show the actual results.","ultimate-addons-for-gutenberg")}),i.a.createElement(h.a,{label:Object(s.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Ee,label:"blockTopMargin"},valueRight:{value:Ae,label:"blockRightMargin"},valueBottom:{value:ze,label:"blockBottomMargin"},valueLeft:{value:Ve,label:"blockLeftMargin"},valueTopTablet:{value:De,label:"blockTopMarginTablet"},valueRightTablet:{value:Pe,label:"blockRightMarginTablet"},valueBottomTablet:{value:Ie,label:"blockBottomMarginTablet"},valueLeftTablet:{value:Ze,label:"blockLeftMarginTablet"},valueTopMobile:{value:Re,label:"blockTopMarginMobile"},valueRightMobile:{value:Ne,label:"blockRightMarginMobile"},valueBottomMobile:{value:Ge,label:"blockBottomMarginMobile"},valueLeftMobile:{value:Fe,label:"blockLeftMarginMobile"},unit:{value:We,label:"blockMarginUnit"},mUnit:{value:qe,label:"blockMarginUnitMobile"},tUnit:{value:Ue,label:"blockMarginUnitTablet"},deviceType:l,attributes:t,setAttributes:p,link:{value:$e,label:"blockMarginLink"}}))),i.a.createElement(f.b,k({},f.a.advance,{parentProps:e})))),Je)};t.default=i.a.memo(O)}}]);