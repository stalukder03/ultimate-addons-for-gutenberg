(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[66],{208:function(e,t,a){"use strict";var l,i,n=a(21),o=a.n(n),r=a(209),s=a.n(r),c=a(2);if(void 0===u)var u=[];const f=e=>{const[t,a]=Object(c.useState)([]);Object(c.useEffect)(()=>{r()},[]),Object(c.useEffect)(()=>{const{onStatus:a,config:l}=e;void 0!==t.status&&a(t.status),l!==t.config&&r()},[e]);const l=()=>{a({status:"loading"})},i=e=>{u.includes(e)||u.push(e)},n=()=>{a({status:"active"})},o=()=>{a({status:"inactive"})},r=()=>{u.includes(e.config.google.families[0])||(s.a.load({...e.config,loading:l,active:n,inactive:o}),i(e.config.google.families[0]));const t=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==t.length||0!==a.length){const r=(t[0]||a[0]).getElementsByTagName("iframe")[0];r&&(s.a.load({...e.config,loading:l,active:n,inactive:o,context:null==r?void 0:r.contentWindow}),i(e.config.google.families[0]))}},{children:f}=e;return f||null};f.propTypes={config:null===(l=o.a.object)||void 0===l?void 0:l.isRequired,children:o.a.element,onStatus:null===(i=o.a.func)||void 0===i?void 0:i.isRequired},f.defaultProps={onStatus:()=>{}},t.a=f},209:function(e,t,a){var l;!function(){function i(e,t,a){return e.call.apply(e.bind,arguments)}function n(e,t,a){if(!e)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,l),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function o(e,t,a){return(o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:n).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function u(e,t,a,l){if(t=e.c.createElement(t),a)for(var i in a)a.hasOwnProperty(i)&&("style"==i?t.style.cssText=a[i]:t.setAttribute(i,a[i]));return l&&t.appendChild(e.c.createTextNode(l)),t}function f(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,a){t=t||[],a=a||[];for(var l=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var n=!1,o=0;o<l.length;o+=1)if(t[i]===l[o]){n=!0;break}n||l.push(t[i])}for(t=[],i=0;i<l.length;i+=1){for(n=!1,o=0;o<a.length;o+=1)if(l[i]===a[o]){n=!0;break}n||t.push(l[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(e,t){for(var a=e.className.split(/\s+/),l=0,i=a.length;l<i;l++)if(a[l]==t)return!0;return!1}function g(e,t,a){function l(){r&&i&&n&&(r(o),r=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,n=!0,o=null,r=a||null;c?(t.onload=function(){i=!0,l()},t.onerror=function(){i=!0,o=Error("Stylesheet failed to load"),l()}):setTimeout((function(){i=!0,l()}),0),f(e,"head",t)}function p(e,t,a,l){var i=e.c.getElementsByTagName("head")[0];if(i){var n=u(e,"script",{src:t}),o=!1;return n.onload=n.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,a&&a(null),n.onload=n.onreadystatechange=null,"HEAD"==n.parentNode.tagName&&i.removeChild(n))},i.appendChild(n),setTimeout((function(){o||(o=!0,a&&a(Error("Script load timeout")))}),l||5e3),n}return null}function v(){this.a=0,this.c=null}function m(e){return e.a++,function(){e.a--,w(e)}}function _(e,t){e.c=t,w(e)}function w(e){0==e.a&&e.c&&(e.c(),e.c=null)}function C(e){this.a=e||"-"}function y(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var l=e[a].replace(/['"]/g,"");-1!=l.indexOf(" ")||/^\d/.test(l)?t.push("'"+l+"'"):t.push(l)}return t.join(",")}function B(e){return e.a+e.f}function T(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function O(e){var t=4,a="n",l=null;return e&&((l=e.match(/(normal|oblique|italic)/i))&&l[1]&&(a=l[1].substr(0,1).toLowerCase()),(l=e.match(/([1-9]00|normal|bold)/i))&&l[1]&&(/bold/i.test(l[1])?t=7:/[1-9]00/.test(l[1])&&(t=parseInt(l[1].substr(0,1),10)))),a+t}function x(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new C("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function S(e){if(e.g){var t=h(e.f,e.a.c("wf","active")),a=[],l=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),d(e.f,a,l)}H(e,"inactive")}function H(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,B(a)):e.h[t]())}function L(){this.c={}}function M(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function E(e){f(e.c,"body",e.a)}function k(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+T(e)+";font-weight:"+e.f+"00;"}function V(e,t,a,l,i,n){this.g=e,this.j=t,this.a=l,this.c=a,this.f=i||3e3,this.h=n||void 0}function A(e,t,a,l,i,n,o){this.v=e,this.B=t,this.c=a,this.a=l,this.s=o||"BESbswy",this.f={},this.w=i||3e3,this.u=n||null,this.m=this.j=this.h=this.g=null,this.g=new M(this.c,this.s),this.h=new M(this.c,this.s),this.j=new M(this.c,this.s),this.m=new M(this.c,this.s),e=k(e=new y(this.a.c+",serif",B(this.a))),this.g.a.style.cssText=e,e=k(e=new y(this.a.c+",sans-serif",B(this.a))),this.h.a.style.cssText=e,e=k(e=new y("serif",B(this.a))),this.j.a.style.cssText=e,e=k(e=new y("sans-serif",B(this.a))),this.m.a.style.cssText=e,E(this.g),E(this.h),E(this.j),E(this.m)}C.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},V.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),l=new Promise((function(l,i){!function n(){r()-a>=t.f?i():e.fonts.load(function(e){return T(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?l():setTimeout(n,25)}),(function(){i()}))}()})),i=null,n=new Promise((function(e,a){i=setTimeout(a,t.f)}));Promise.race([n,l]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var z={D:"serif",C:"sans-serif"},D=null;function Z(){if(null===D){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return D}function P(e,t,a){for(var l in z)if(z.hasOwnProperty(l)&&t===e.f[z[l]]&&a===e.f[z[l]])return!0;return!1}function I(e,t){setTimeout(o((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function N(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}A.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,l=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(a=l===t.f.serif&&i===t.f["sans-serif"])||(a=Z()&&P(t,l,i)),a?r()-t.A>=t.w?Z()&&P(t,l,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?I(t,t.v):I(t,t.B):function(t){setTimeout(o((function(){e(this)}),t),50)}(t):I(t,t.v)}(this)};var F=null;function R(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),H(e,"active")):S(e.a))}function G(e){this.j=e,this.a=new L,this.h=0,this.f=this.g=!0}function W(e,t,a,l,i){var n=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,r=l||{};if(0===a.length&&n)S(t.a);else{t.f+=a.length,n&&(t.j=n);var s,c=[];for(s=0;s<a.length;s++){var u=a[s],f=r[u.c],b=t.a,h=u;if(b.g&&d(b.f,[b.a.c("wf",h.c,B(h).toString(),"loading")]),H(b,"fontloading",h),b=null,null===F)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);F=h?42<parseInt(h[1],10):!g}else F=!1;b=F?new V(o(t.g,t),o(t.h,t),t.c,u,t.s,f):new A(o(t.g,t),o(t.h,t),t.c,u,t.s,e,f),c.push(b)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}N.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,B(e).toString(),"active")],[t.a.c("wf",e.c,B(e).toString(),"loading"),t.a.c("wf",e.c,B(e).toString(),"inactive")]),H(t,"fontactive",e),this.m=!0,R(this)},N.prototype.h=function(e){var t=this.a;if(t.g){var a=h(t.f,t.a.c("wf",e.c,B(e).toString(),"active")),l=[],i=[t.a.c("wf",e.c,B(e).toString(),"loading")];a||l.push(t.a.c("wf",e.c,B(e).toString(),"inactive")),d(t.f,l,i)}H(t,"fontinactive",e),R(this)},G.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var l=[],i=a.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),H(e,"loading")}(t),l=function(e,t,a){var l,i=[];for(l in t)if(t.hasOwnProperty(l)){var n=e.c[l];n&&i.push(n(t[l],a))}return i}(e.a,a,e.c);var n=new N(e.c,t,i);for(e.h=l.length,t=0,a=l.length;t<a;t++)l[t].load((function(t,a,l){W(e,n,t,a,l)}))}(this,new x(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,l=t.a.version;if(a){var i=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(l?"?v="+l:""),(function(l){l?e([]):(i["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(i["__mti_fntLst"+a]){var l,n=i["__mti_fntLst"+a](),o=[];if(n)for(var r=0;r<n.length;r++){var s=n[r].fontfamily;null!=n[r].fontStyle&&null!=n[r].fontWeight?(l=n[r].fontStyle+n[r].fontWeight,o.push(new y(s,l))):o.push(new y(s))}e(o)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,l=this.a.urls||[],i=this.a.families||[],n=this.a.testStrings||{},o=new v;for(t=0,a=l.length;t<a;t++)g(this.c,l[t],m(o));var r=[];for(t=0,a=i.length;t<a;t++)if((l=i[t].split(":"))[1])for(var s=l[1].split(","),c=0;c<s.length;c+=1)r.push(new y(l[0],s[c]));else r.push(new y(l[0]));_(o,(function(){e(r,n)}))};var K="https://fonts.googleapis.com/css";function U(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Y={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function le(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new v,a=this.c,l=new J(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var a=t.length,l=0;l<a;l++){var i=t[l].split(":");3==i.length&&e.f.push(i.pop());var n="";2==i.length&&""!=i[1]&&(n=":"),e.a.push(i.join(n))}}(l,i);var n=new U(i);!function(e){for(var t=e.f.length,a=0;a<t;a++){var l=e.f[a].split(":"),i=l[0].replace(/\+/g," "),n=["n4"];if(2<=l.length){var o;if(o=[],r=l[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(f=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Y[u],null==(f=f[1])||""==f)f="4";else var f=Q[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&o.push(u)}0<o.length&&(n=o),3==l.length&&(o=[],0<(l=(l=l[2])?l.split(","):o).length&&(l=X[l[0]])&&(e.c[i]=l))}for(e.c[i]||(l=X[i])&&(e.c[i]=l),l=0;l<n.length;l+=1)e.a.push(new y(i,n[l]))}}(n),g(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],l=0;l<t;l++)a.push(e.a[l].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(l),m(t)),_(t,(function(){e(n.a,n.c,ae)}))},le.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var l=[],i=0;i<t.length;i+=2)for(var n=t[i],o=t[i+1],r=0;r<o.length;r++)l.push(new y(n,o[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(l)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,a=this.c.o,l=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var i=0,n=a.fonts.length;i<n;++i){var o=a.fonts[i];l.a.push(new y(o.name,O("font-weight:"+o.weight+";font-style:"+o.style)))}e(l.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ne=new G(window);ne.a.c.custom=function(e,t){return new $(t,e)},ne.a.c.fontdeck=function(e,t){return new ie(t,e)},ne.a.c.monotype=function(e,t){return new q(t,e)},ne.a.c.typekit=function(e,t){return new le(t,e)},ne.a.c.google=function(e,t){return new te(t,e)};var oe={load:o(ne.load,ne)};void 0===(l=function(){return oe}.call(t,a,t,e))||(e.exports=l)}()},537:function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),n=a(10),o=a(208),r=a(38),s=a(1),c=a(9),u=a(5),f=a(84),b=a(29),d=a(28),h=a(22),g=a(23),p=a(33),v=a(61);const m=[{defaultAttributes:p.a},{defaultChildAttributes:v.a},{value:"preset-1",label:Object(s.__)("Preset 1","ultimate-addons-for-gutenberg"),attributes:[{label:"size",value:20},{label:"bgSize",value:""},{label:"borderRadius",value:100},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#0170B9"},{label:"icon_bg_color",value:""}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118.8 135.771C118.8 133.903 120.222 132.389 121.975 132.389H247.53C249.283 132.389 250.705 133.903 250.705 135.771C250.705 137.639 249.283 139.153 247.53 139.153H121.975C120.222 139.153 118.8 137.639 118.8 135.771Z" fill="#D2D2D2"/> <circle cx="88.361" cy="135.771" r="14.6561" fill="#B6B6B6"/> <path d="M95.6556 136.301C95.9485 136.008 95.9485 135.533 95.6556 135.24L90.8827 130.467C90.5898 130.175 90.1149 130.175 89.822 130.467C89.5291 130.76 89.5291 131.235 89.822 131.528L94.0646 135.771L89.822 140.013C89.5291 140.306 89.5291 140.781 89.822 141.074C90.1149 141.367 90.5898 141.367 90.8827 141.074L95.6556 136.301ZM95.1253 135.021H81.5966V136.521H95.1253V135.021Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118.8 189.885C118.8 188.017 120.222 186.503 121.975 186.503H247.53C249.283 186.503 250.705 188.017 250.705 189.885C250.705 191.753 249.283 193.268 247.53 193.268H121.975C120.222 193.268 118.8 191.753 118.8 189.885Z" fill="#D2D2D2"/> <circle cx="88.361" cy="189.885" r="14.6561" fill="#B6B6B6"/> <path d="M95.6556 190.416C95.9485 190.123 95.9485 189.648 95.6556 189.355L90.8827 184.582C90.5898 184.289 90.1149 184.289 89.822 184.582C89.5291 184.875 89.5291 185.35 89.822 185.643L94.0646 189.885L89.822 194.128C89.5291 194.421 89.5291 194.896 89.822 195.189C90.1149 195.481 90.5898 195.481 90.8827 195.189L95.6556 190.416ZM95.1253 189.135H81.5966V190.635H95.1253V189.135Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118.8 81.6561C118.8 79.7882 120.222 78.2739 121.975 78.2739H247.53C249.283 78.2739 250.705 79.7882 250.705 81.6561C250.705 83.524 249.283 85.0383 247.53 85.0383H121.975C120.222 85.0383 118.8 83.524 118.8 81.6561Z" fill="#D2D2D2"/> <circle cx="88.361" cy="81.6561" r="14.6561" fill="#B6B6B6"/> <path d="M95.6556 82.1863C95.9485 81.8934 95.9485 81.4186 95.6556 81.1257L90.8827 76.3527C90.5898 76.0598 90.1149 76.0598 89.822 76.3527C89.5291 76.6456 89.5291 77.1205 89.822 77.4134L94.0646 81.656L89.822 85.8986C89.5291 86.1915 89.5291 86.6664 89.822 86.9593C90.1149 87.2522 90.5898 87.2522 90.8827 86.9593L95.6556 82.1863ZM95.1253 80.906H81.5966V82.406H95.1253V80.906Z" fill="white"/> </svg>'},{value:"preset-2",label:Object(s.__)("Preset 2","ultimate-addons-for-gutenberg"),attributes:[{label:"bgSize",value:10},{label:"size",value:20},{label:"borderRadius",value:100},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#fff"},{label:"icon_bg_color",value:"#0170B9"}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 135.771C120.096 133.903 121.517 132.388 123.27 132.388H248.825C250.579 132.388 252 133.903 252 135.771C252 137.639 250.579 139.153 248.825 139.153H123.27C121.517 139.153 120.096 137.639 120.096 135.771Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 189.885C120.096 188.017 121.517 186.503 123.27 186.503H248.825C250.579 186.503 252 188.017 252 189.885C252 191.753 250.579 193.268 248.825 193.268H123.27C121.517 193.268 120.096 191.753 120.096 189.885Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 81.6561C120.096 79.7882 121.517 78.2739 123.27 78.2739H248.825C250.579 78.2739 252 79.7882 252 81.6561C252 83.524 250.579 85.0383 248.825 85.0383H123.27C121.517 85.0383 120.096 83.524 120.096 81.6561Z" fill="#D2D2D2"/> <circle cx="89.6561" cy="81.6561" r="14.6561" fill="#B6B6B6"/> <circle cx="89.6561" cy="81.656" r="11.2739" fill="white"/> <path d="M96.9507 82.1863C97.2436 81.8934 97.2436 81.4186 96.9507 81.1257L92.1777 76.3527C91.8848 76.0598 91.41 76.0598 91.1171 76.3527C90.8242 76.6456 90.8242 77.1205 91.1171 77.4134L95.3597 81.656L91.1171 85.8986C90.8242 86.1915 90.8242 86.6664 91.1171 86.9593C91.41 87.2522 91.8848 87.2522 92.1777 86.9593L96.9507 82.1863ZM96.4204 80.906H82.8917V82.406H96.4204V80.906Z" fill="#B6B6B6"/> <circle cx="89.6561" cy="135.771" r="14.6561" fill="#B6B6B6"/> <circle cx="89.6561" cy="135.771" r="11.2739" fill="white"/> <path d="M96.9507 136.301C97.2436 136.008 97.2436 135.533 96.9507 135.24L92.1777 130.467C91.8848 130.175 91.41 130.175 91.1171 130.467C90.8242 130.76 90.8242 131.235 91.1171 131.528L95.3597 135.771L91.1171 140.013C90.8242 140.306 90.8242 140.781 91.1171 141.074C91.41 141.367 91.8848 141.367 92.1777 141.074L96.9507 136.301ZM96.4204 135.021H82.8917V136.521H96.4204V135.021Z" fill="#B6B6B6"/> <circle cx="89.6561" cy="189.885" r="14.6561" fill="#B6B6B6"/> <circle cx="89.6561" cy="189.885" r="11.2739" fill="white"/> <path d="M96.9507 190.416C97.2436 190.123 97.2436 189.648 96.9507 189.355L92.1777 184.582C91.8848 184.289 91.41 184.289 91.1171 184.582C90.8242 184.875 90.8242 185.35 91.1171 185.643L95.3597 189.885L91.1171 194.128C90.8242 194.421 90.8242 194.896 91.1171 195.189C91.41 195.481 91.8848 195.481 92.1777 195.189L96.9507 190.416ZM96.4204 189.135H82.8917V190.635H96.4204V189.135Z" fill="#B6B6B6"/> </svg>'},{value:"preset-3",label:Object(s.__)("Preset 3","ultimate-addons-for-gutenberg"),attributes:[{label:"bgSize",value:10},{label:"size",value:20},{label:"borderRadius",value:100},{label:"border",value:2}],childAttributes:[{label:"icon_color",value:"#0170B9"},{label:"icon_border_color",value:"#0170B9"},{label:"icon_bg_color",value:""}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 135.771C120.096 133.903 121.517 132.388 123.27 132.388H248.825C250.579 132.388 252 133.903 252 135.771C252 137.639 250.579 139.153 248.825 139.153H123.27C121.517 139.153 120.096 137.639 120.096 135.771Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 189.885C120.096 188.017 121.517 186.503 123.27 186.503H248.825C250.579 186.503 252 188.017 252 189.885C252 191.753 250.579 193.268 248.825 193.268H123.27C121.517 193.268 120.096 191.753 120.096 189.885Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.096 81.6561C120.096 79.7882 121.517 78.2739 123.27 78.2739H248.825C250.579 78.2739 252 79.7882 252 81.6561C252 83.524 250.579 85.0383 248.825 85.0383H123.27C121.517 85.0383 120.096 83.524 120.096 81.6561Z" fill="#D2D2D2"/> <circle cx="89.6561" cy="81.6561" r="14.1561" stroke="#B6B6B6" fill="none"/> <circle cx="89.656" cy="81.656" r="11.2739" fill="#B6B6B6"/> <path d="M96.9507 82.1863C97.2436 81.8934 97.2436 81.4186 96.9507 81.1257L92.1778 76.3527C91.8849 76.0598 91.41 76.0598 91.1171 76.3527C90.8242 76.6456 90.8242 77.1205 91.1171 77.4134L95.3598 81.656L91.1171 85.8986C90.8242 86.1915 90.8242 86.6664 91.1171 86.9593C91.41 87.2522 91.8849 87.2522 92.1778 86.9593L96.9507 82.1863ZM96.4204 80.906H82.8917V82.406H96.4204V80.906Z" fill="white"/> <circle cx="89.6561" cy="135.771" r="14.1561" stroke="#B6B6B6" fill="none"/> <circle cx="89.656" cy="135.771" r="11.2739" fill="#B6B6B6"/> <path d="M96.9507 136.301C97.2436 136.008 97.2436 135.533 96.9507 135.24L92.1778 130.467C91.8849 130.175 91.41 130.175 91.1171 130.467C90.8242 130.76 90.8242 131.235 91.1171 131.528L95.3598 135.771L91.1171 140.013C90.8242 140.306 90.8242 140.781 91.1171 141.074C91.41 141.367 91.8849 141.367 92.1778 141.074L96.9507 136.301ZM96.4204 135.021H82.8917V136.521H96.4204V135.021Z" fill="white"/> <circle cx="89.6561" cy="189.885" r="14.1561" stroke="#B6B6B6" fill="none"/> <circle cx="89.656" cy="189.885" r="11.2739" fill="#B6B6B6"/> <path d="M96.9507 190.416C97.2436 190.123 97.2436 189.648 96.9507 189.355L92.1778 184.582C91.8849 184.289 91.41 184.289 91.1171 184.582C90.8242 184.875 90.8242 185.35 91.1171 185.643L95.3598 189.885L91.1171 194.128C90.8242 194.421 90.8242 194.896 91.1171 195.189C91.41 195.481 91.8849 195.481 92.1778 195.189L96.9507 190.416ZM96.4204 189.135H82.8917V190.635H96.4204V189.135Z" fill="white"/> </svg>'}];var _=Object(g.applyFilters)("uag_icon_list_presets",m),w=a(81),C=a(13),y=a(7),j=a(17),B=a(58),T=a(18);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const x=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,clientId:g}=e,{align:p,alignTablet:v,alignMobile:m,gap:x,gapTablet:S,gapMobile:H,gapType:L,inner_gap:M,innerGapTablet:E,innerGapMobile:k,innerGapType:V,icon_layout:A,iconLayoutTablet:z,iconLayoutMobile:D,iconPosition:Z,iconPositionTablet:P,iconPositionMobile:I,size:N,sizeType:F,sizeMobile:R,sizeTablet:G,hideLabel:W,borderRadius:q,borderRadiusTablet:$,borderRadiusMobile:J,borderRadiusType:K,bgSize:U,bgSizeType:X,bgSizeTablet:Q,bgSizeMobile:Y,border:ee,borderTablet:te,borderMobile:ae,borderType:le,fontSize:ie,fontSizeType:ne,fontSizeMobile:oe,fontSizeTablet:re,fontFamily:se,fontWeight:ce,lineHeight:ue,lineHeightType:fe,lineHeightMobile:be,lineHeightTablet:de,loadGoogleFonts:he,fontStyle:ge,fontTransform:pe,fontDecoration:ve,labelLetterSpacing:me,labelLetterSpacingTablet:_e,labelLetterSpacingMobile:we,labelLetterSpacingType:Ce,iconColor:ye,labelColor:je,iconHoverColor:Be,labelHoverColor:Te,iconBgColor:Oe,iconBgHoverColor:xe,iconBorderColor:Se,iconBorderHoverColor:He}=t;let Le;if(!0===he){const e={google:{families:[se+(ce?":"+ce:"")]}};Le=i.a.createElement(o.a,{config:e})}return i.a.createElement(l.Suspense,{fallback:Object(n.a)()},i.a.createElement(u.InspectorControls,null,i.a.createElement(f.a,null,i.a.createElement(b.b,b.a.general,i.a.createElement(j.a,{title:Object(s.__)("Presets","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(w.a,{setAttributes:a,presets:_,presetInputType:"radioImage"})),i.a.createElement(j.a,{title:Object(s.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(h.a,{setAttributes:a,label:Object(s.__)("Layout","ultimate-addons-for-gutenberg"),data:{desktop:{value:A,label:"icon_layout"},tablet:{value:z,label:"iconLayoutTablet"},mobile:{value:D,label:"iconLayoutMobile"}},options:[{value:"horizontal",label:Object(s.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(s.__)("Vertical","ultimate-addons-for-gutenberg")}],showIcons:!1,responsive:!0}),i.a.createElement(h.a,{setAttributes:a,label:Object(s.__)("Alignment","ultimate-addons-for-gutenberg"),data:{desktop:{value:p,label:"align"},tablet:{value:v,label:"alignTablet"},mobile:{value:m,label:"alignMobile"}},options:[{value:"left",icon:i.a.createElement(y.Icon,{icon:Object(C.a)("fa fa-align-left")}),tooltip:Object(s.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(y.Icon,{icon:Object(C.a)("fa fa-align-center")}),tooltip:Object(s.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(y.Icon,{icon:Object(C.a)("fa fa-align-right")}),tooltip:Object(s.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0,responsive:!0}),!W&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{setAttributes:a,label:Object(s.__)("Icon Alignment","ultimate-addons-for-gutenberg"),data:{desktop:{value:Z,label:"iconPosition"},tablet:{value:P,label:"iconPositionTablet"},mobile:{value:I,label:"iconPositionMobile"}},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top"},{value:"middle",label:"Middle"}],showIcons:!1,help:Object(s.__)("Note: This manages the Icon Position with respect to the Label.","ultimate-addons-for-gutenberg"),responsive:!0})),i.a.createElement(y.ToggleControl,{label:Object(s.__)("Hide Labels","ultimate-addons-for-gutenberg"),checked:W,onChange:e=>(e=>{Object(c.select)("core/block-editor").getBlocks(g).forEach(t=>{t.attributes.hideLabel=e}),a({hideLabel:e})})(e)}))),i.a.createElement(b.b,b.a.style,i.a.createElement(j.a,{title:Object(s.__)("Icon/Image","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(d.a,{label:Object(s.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:N,label:"size"},tablet:{value:G,label:"sizeTablet"},mobile:{value:R,label:"sizeMobile"}},min:0,max:200,unit:{value:F,label:"sizeType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(s.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:a}),i.a.createElement(d.a,{label:Object(s.__)("Background Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:U,label:"bgSize"},tablet:{value:Q,label:"bgSizeTablet"},mobile:{value:Y,label:"bgSizeMobile"}},setAttributes:a,min:0,max:50,unit:{value:X,label:"bgSizeType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],help:Object(s.__)("Note: Background Size option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(d.a,{label:Object(s.__)("Border","ultimate-addons-for-gutenberg"),data:{desktop:{value:ee,label:"border"},tablet:{value:te,label:"borderTablet"},mobile:{value:ae,label:"borderMobile"}},min:0,max:10,unit:{value:le,label:"borderType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:a,help:Object(s.__)("Note: Border option is useful when one adds border color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(d.a,{label:Object(s.__)("Border Radius","ultimate-addons-for-gutenberg"),data:{desktop:{value:q,label:"borderRadius"},tablet:{value:$,label:"borderRadiusTablet"},mobile:{value:J,label:"borderRadiusMobile"}},min:0,max:100,unit:{value:K,label:"borderRadiusType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:a,help:Object(s.__)("Note: Border Radius option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(B.a,{tabs:[{name:"normal",title:Object(s.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(s.__)("Hover","ultimate-addons-for-gutenberg")}],normal:i.a.createElement(i.a.Fragment,null,i.a.createElement(T.a,{label:Object(s.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:ye||"",data:{value:ye,label:"iconColor"},setAttributes:a}),i.a.createElement(T.a,{label:Object(s.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Oe||"",data:{value:Oe,label:"iconBgColor"},setAttributes:a}),i.a.createElement(T.a,{label:Object(s.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:Se||"",data:{value:Se,label:"iconBorderColor"},setAttributes:a})),hover:i.a.createElement(i.a.Fragment,null,i.a.createElement(T.a,{label:Object(s.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:Be||"",data:{value:Be,label:"iconHoverColor"},setAttributes:a}),i.a.createElement(T.a,{label:Object(s.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:xe||"",data:{value:xe,label:"iconBgHoverColor"},setAttributes:a}),i.a.createElement(T.a,{label:Object(s.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:He||"",data:{value:He,label:"iconBorderHoverColor"},setAttributes:a})),disableBottomSeparator:!0})),!W&&i.a.createElement(j.a,{title:Object(s.__)("Label","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{label:Object(s.__)("Gap between Icon and Label","ultimate-addons-for-gutenberg"),data:{desktop:{value:M,label:"inner_gap"},tablet:{value:E,label:"innerGapTablet"},mobile:{value:k,label:"innerGapMobile"}},max:100,unit:{value:V,label:"innerGapType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:a}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:he,label:"loadGoogleFonts"},fontFamily:{value:se,label:"fontFamily"},fontWeight:{value:ce,label:"fontWeight"},fontStyle:{value:ge,label:"fontStyle"},transform:{value:pe,label:"fontTransform"},decoration:{value:ve,label:"fontDecoration"},fontSizeType:{value:ne,label:"fontSizeType"},fontSize:{value:ie,label:"fontSize"},fontSizeMobile:{value:oe,label:"fontSizeMobile"},fontSizeTablet:{value:re,label:"fontSizeTablet"},lineHeightType:{value:fe,label:"lineHeightType"},lineHeight:{value:ue,label:"lineHeight"},lineHeightMobile:{value:be,label:"lineHeightMobile"},lineHeightTablet:{value:de,label:"lineHeightTablet"},letterSpacing:{value:me,label:"labelLetterSpacing"},letterSpacingTablet:{value:_e,label:"labelLetterSpacingTablet"},letterSpacingMobile:{value:we,label:"labelLetterSpacingMobile"},letterSpacingType:{value:Ce,label:"labelLetterSpacingType"}}),i.a.createElement(B.a,{tabs:[{name:"normal",title:Object(s.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(s.__)("Hover","ultimate-addons-for-gutenberg")}],normal:i.a.createElement(T.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:je,data:{value:je,label:"labelColor"},setAttributes:a}),hover:i.a.createElement(T.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Te,data:{value:Te,label:"labelHoverColor"},setAttributes:a}),disableBottomSeparator:!0})),i.a.createElement(j.a,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{label:Object(s.__)("Gap between Items","ultimate-addons-for-gutenberg"),data:{desktop:{value:x,label:"gap"},tablet:{value:S,label:"gapTablet"},mobile:{value:H,label:"gapMobile"}},min:0,max:100,unit:{value:L,label:"gapType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:a,help:Object(s.__)("Note: For better editing experience, the gap between items might look larger than applied. Viewing in frontend will show the actual results.","ultimate-addons-for-gutenberg")}))),i.a.createElement(b.b,O({},b.a.advance,{parentProps:e})))),Le)};t.default=i.a.memo(x)}}]);