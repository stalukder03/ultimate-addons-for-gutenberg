(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[48],{189:function(e,t,a){"use strict";var l,n,o=a(35),i=a.n(o),r=a(190),u=a.n(r),s=a(2);if(void 0===d)var d=[];const b=e=>{const[t,a]=Object(s.useState)([]);Object(s.useEffect)(()=>{i()},[]),Object(s.useEffect)(()=>{const{onStatus:a,config:l}=e;void 0!==t.status&&a(t.status),l!==t.config&&i()},[e]);const l=()=>{a({status:"loading"})},n=()=>{a({status:"active"})},o=()=>{a({status:"inactive"})},i=()=>{var t;d.includes(e.config.google.families[0])||(u.a.load({...e.config,loading:l,active:n,inactive:o}),t=e.config.google.families[0],d.includes(t)||d.push(t))},{children:r}=e;return r||null};b.propTypes={config:null===(l=i.a.object)||void 0===l?void 0:l.isRequired,children:i.a.element,onStatus:null===(n=i.a.func)||void 0===n?void 0:n.isRequired},b.defaultProps={onStatus:()=>{}},t.a=b},190:function(e,t,a){var l;!function(){function n(e,t,a){return e.call.apply(e.bind,arguments)}function o(e,t,a){if(!e)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,l),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function d(e,t,a,l){if(t=e.c.createElement(t),a)for(var n in a)a.hasOwnProperty(n)&&("style"==n?t.style.cssText=a[n]:t.setAttribute(n,a[n]));return l&&t.appendChild(e.c.createTextNode(l)),t}function b(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function c(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e,t,a){t=t||[],a=a||[];for(var l=e.className.split(/\s+/),n=0;n<t.length;n+=1){for(var o=!1,i=0;i<l.length;i+=1)if(t[n]===l[i]){o=!0;break}o||l.push(t[n])}for(t=[],n=0;n<l.length;n+=1){for(o=!1,i=0;i<a.length;i+=1)if(l[n]===a[i]){o=!0;break}o||t.push(l[n])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var a=e.className.split(/\s+/),l=0,n=a.length;l<n;l++)if(a[l]==t)return!0;return!1}function m(e,t,a){function l(){r&&n&&o&&(r(i),r=null)}t=d(e,"link",{rel:"stylesheet",href:t,media:"all"});var n=!1,o=!0,i=null,r=a||null;s?(t.onload=function(){n=!0,l()},t.onerror=function(){n=!0,i=Error("Stylesheet failed to load"),l()}):setTimeout((function(){n=!0,l()}),0),b(e,"head",t)}function h(e,t,a,l){var n=e.c.getElementsByTagName("head")[0];if(n){var o=d(e,"script",{src:t}),i=!1;return o.onload=o.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&n.removeChild(o))},n.appendChild(o),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),l||5e3),o}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,C(e)}}function _(e,t){e.c=t,C(e)}function C(e){0==e.a&&e.c&&(e.c(),e.c=null)}function T(e){this.a=e||"-"}function y(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function H(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var l=e[a].replace(/['"]/g,"");-1!=l.indexOf(" ")||/^\d/.test(l)?t.push("'"+l+"'"):t.push(l)}return t.join(",")}function j(e){return e.a+e.f}function M(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function O(e){var t=4,a="n",l=null;return e&&((l=e.match(/(normal|oblique|italic)/i))&&l[1]&&(a=l[1].substr(0,1).toLowerCase()),(l=e.match(/([1-9]00|normal|bold)/i))&&l[1]&&(/bold/i.test(l[1])?t=7:/[1-9]00/.test(l[1])&&(t=parseInt(l[1].substr(0,1),10)))),a+t}function S(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new T("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function w(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),a=[],l=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),g(e.f,a,l)}E(e,"inactive")}function E(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,j(a)):e.h[t]())}function F(){this.c={}}function B(e,t){this.c=e,this.f=t,this.a=d(this.c,"span",{"aria-hidden":"true"},this.f)}function V(e){b(e.c,"body",e.a)}function x(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+H(e.c)+";font-style:"+M(e)+";font-weight:"+e.f+"00;"}function L(e,t,a,l,n,o){this.g=e,this.j=t,this.a=l,this.c=a,this.f=n||3e3,this.h=o||void 0}function Z(e,t,a,l,n,o,i){this.v=e,this.B=t,this.c=a,this.a=l,this.s=i||"BESbswy",this.f={},this.w=n||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new B(this.c,this.s),this.h=new B(this.c,this.s),this.j=new B(this.c,this.s),this.m=new B(this.c,this.s),e=x(e=new y(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=e,e=x(e=new y(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=e,e=x(e=new y("serif",j(this.a))),this.j.a.style.cssText=e,e=x(e=new y("sans-serif",j(this.a))),this.m.a.style.cssText=e,V(this.g),V(this.h),V(this.j),V(this.m)}T.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},L.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),l=new Promise((function(l,n){!function o(){r()-a>=t.f?n():e.fonts.load(function(e){return M(e)+" "+e.f+"00 300px "+H(e.c)}(t.a),t.h).then((function(e){1<=e.length?l():setTimeout(o,25)}),(function(){n()}))}()})),n=null,o=new Promise((function(e,a){n=setTimeout(a,t.f)}));Promise.race([o,l]).then((function(){n&&(clearTimeout(n),n=null),t.g(t.a)}),(function(){t.j(t.a)}))};var A={D:"serif",C:"sans-serif"},k=null;function z(){if(null===k){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);k=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return k}function R(e,t,a){for(var l in A)if(A.hasOwnProperty(l)&&t===e.f[A[l]]&&a===e.f[A[l]])return!0;return!1}function W(e,t){setTimeout(i((function(){c(this.g.a),c(this.h.a),c(this.j.a),c(this.m.a),t(this.a)}),e),0)}function N(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}Z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,l=t.g.a.offsetWidth,n=t.h.a.offsetWidth;(a=l===t.f.serif&&n===t.f["sans-serif"])||(a=z()&&R(t,l,n)),a?r()-t.A>=t.w?z()&&R(t,l,n)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?W(t,t.v):W(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):W(t,t.v)}(this)};var P=null;function U(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&g(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),E(e,"active")):w(e.a))}function I(e){this.j=e,this.a=new F,this.h=0,this.f=this.g=!0}function G(e,t,a,l,n){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=n||null,r=l||{};if(0===a.length&&o)w(t.a);else{t.f+=a.length,o&&(t.j=o);var u,s=[];for(u=0;u<a.length;u++){var d=a[u],b=r[d.c],c=t.a,f=d;if(c.g&&g(c.f,[c.a.c("wf",f.c,j(f).toString(),"loading")]),E(c,"fontloading",f),c=null,null===P)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var m=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);P=f?42<parseInt(f[1],10):!m}else P=!1;c=P?new L(i(t.g,t),i(t.h,t),t.c,d,t.s,b):new Z(i(t.g,t),i(t.h,t),t.c,d,t.s,e,b),s.push(c)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function D(e,t){this.c=e,this.a=t}function q(e,t){this.c=e,this.a=t}function K(e,t){this.c=e||$,this.a=[],this.f=[],this.g=t||""}N.prototype.g=function(e){var t=this.a;t.g&&g(t.f,[t.a.c("wf",e.c,j(e).toString(),"active")],[t.a.c("wf",e.c,j(e).toString(),"loading"),t.a.c("wf",e.c,j(e).toString(),"inactive")]),E(t,"fontactive",e),this.m=!0,U(this)},N.prototype.h=function(e){var t=this.a;if(t.g){var a=f(t.f,t.a.c("wf",e.c,j(e).toString(),"active")),l=[],n=[t.a.c("wf",e.c,j(e).toString(),"loading")];a||l.push(t.a.c("wf",e.c,j(e).toString(),"inactive")),g(t.f,l,n)}E(t,"fontinactive",e),U(this)},I.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var l=[],n=a.timeout;!function(e){e.g&&g(e.f,[e.a.c("wf","loading")]),E(e,"loading")}(t),l=function(e,t,a){var l,n=[];for(l in t)if(t.hasOwnProperty(l)){var o=e.c[l];o&&n.push(o(t[l],a))}return n}(e.a,a,e.c);var o=new N(e.c,t,n);for(e.h=l.length,t=0,a=l.length;t<a;t++)l[t].load((function(t,a,l){G(e,o,t,a,l)}))}(this,new S(this.c,e),e)},D.prototype.load=function(e){var t=this,a=t.a.projectId,l=t.a.version;if(a){var n=t.c.o;h(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(l?"?v="+l:""),(function(l){l?e([]):(n["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(n["__mti_fntLst"+a]){var l,o=n["__mti_fntLst"+a](),i=[];if(o)for(var r=0;r<o.length;r++){var u=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(l=o[r].fontStyle+o[r].fontWeight,i.push(new y(u,l))):i.push(new y(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},q.prototype.load=function(e){var t,a,l=this.a.urls||[],n=this.a.families||[],o=this.a.testStrings||{},i=new p;for(t=0,a=l.length;t<a;t++)m(this.c,l[t],v(i));var r=[];for(t=0,a=n.length;t<a;t++)if((l=n[t].split(":"))[1])for(var u=l[1].split(","),s=0;s<u.length;s+=1)r.push(new y(l[0],u[s]));else r.push(new y(l[0]));_(i,(function(){e(r,o)}))};var $="https://fonts.googleapis.com/css";function J(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Y={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function le(e,t){this.c=e,this.a=t}function ne(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,l=new K(this.a.api,this.a.text),n=this.a.families;!function(e,t){for(var a=t.length,l=0;l<a;l++){var n=t[l].split(":");3==n.length&&e.f.push(n.pop());var o="";2==n.length&&""!=n[1]&&(o=":"),e.a.push(n.join(o))}}(l,n);var o=new J(n);!function(e){for(var t=e.f.length,a=0;a<t;a++){var l=e.f[a].split(":"),n=l[0].replace(/\+/g," "),o=["n4"];if(2<=l.length){var i;if(i=[],r=l[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var d;if((d=r[s]).match(/^[\w-]+$/))if(null==(b=ee.exec(d.toLowerCase())))d="";else{if(d=null==(d=b[2])||""==d?"n":Y[d],null==(b=b[1])||""==b)b="4";else var b=Q[b]||(isNaN(b)?"4":b.substr(0,1));d=[d,b].join("")}else d="";d&&i.push(d)}0<i.length&&(o=i),3==l.length&&(i=[],0<(l=(l=l[2])?l.split(","):i).length&&(l=X[l[0]])&&(e.c[n]=l))}for(e.c[n]||(l=X[n])&&(e.c[n]=l),l=0;l<o.length;l+=1)e.a.push(new y(n,o[l]))}}(o),m(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],l=0;l<t;l++)a.push(e.a[l].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(l),v(t)),_(t,(function(){e(o.a,o.c,ae)}))},le.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?h(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var l=[],n=0;n<t.length;n+=2)for(var o=t[n],i=t[n+1],r=0;r<i.length;r++)l.push(new y(o,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(l)}}),2e3):e([])},ne.prototype.load=function(e){var t=this.f.id,a=this.c.o,l=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var n=0,o=a.fonts.length;n<o;++n){var i=a.fonts[n];l.a.push(new y(i.name,O("font-weight:"+i.weight+";font-style:"+i.style)))}e(l.a)},h(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new I(window);oe.a.c.custom=function(e,t){return new q(t,e)},oe.a.c.fontdeck=function(e,t){return new ne(t,e)},oe.a.c.monotype=function(e,t){return new D(t,e)},oe.a.c.typekit=function(e,t){return new le(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(oe.load,oe)};void 0===(l=function(){return ie}.call(t,a,t,e))||(e.exports=l)}()},501:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(1),i=a(8),r=a(30),u=a(189),s=a(77),d=a(22),b=a(79),c=a(23),g=a(17),f=a(51),m=a(11),h=a(4),p=a(12),v=a(52),_=a(6),C=a(19);const T=[{defaultAttributes:a(24).a},{value:"preset-1",label:Object(o.__)("Preset 1","ultimate-addons-for-gutenberg"),attributes:[{label:"bgColor",value:"#ffffff"},{label:"inputborderRadius",value:2},{label:"paddingFieldTop",value:12},{label:"paddingFieldRight",value:12},{label:"paddingFieldBottom",value:12},{label:"paddingFieldLeft",value:12},{label:"formStyle",value:"boxed"}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 53C14.8954 53 14 53.8954 14 55C14 56.1046 14.8954 57 16 57H29C30.1046 57 31 56.1046 31 55C31 53.8954 30.1046 53 29 53H22.5H16Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M56 42H16V49H56V42ZM56 40H16C14.8954 40 14 40.8954 14 42V49C14 50.1046 14.8954 51 16 51H56C57.1046 51 58 50.1046 58 49V42C58 40.8954 57.1046 40 56 40ZM56 24H16C14.8954 24 14 24.8954 14 26V28C14 29.1046 14.8954 30 16 30H56C57.1046 30 58 29.1046 58 28V26C58 24.8954 57.1046 24 56 24ZM56 26H16V28H56V26ZM56 34H16V36H56V34ZM56 18H16V20H56V18ZM16 16C14.8954 16 14 16.8954 14 18V20C14 21.1046 14.8954 22 16 22H56C57.1046 22 58 21.1046 58 20V18C58 16.8954 57.1046 16 56 16H16ZM14 34C14 32.8954 14.8954 32 16 32H56C57.1046 32 58 32.8954 58 34V36C58 37.1046 57.1046 38 56 38H16C14.8954 38 14 37.1046 14 36V34Z" /></svg>'},{value:"preset-2",label:Object(o.__)("Preset 2","ultimate-addons-for-gutenberg"),attributes:[{label:"bgColor",value:"#ffffff"},{label:"inputborderRadius",value:3},{label:"paddingFieldTop",value:0},{label:"paddingFieldRight",value:10},{label:"paddingFieldBottom",value:10},{label:"paddingFieldLeft",value:0},{label:"formStyle",value:"underlined"}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_179_65" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M56 38H16V45H56V38ZM16 36C14.8954 36 14 36.8954 14 38V45C14 46.1046 14.8954 47 16 47H56C57.1046 47 58 46.1046 58 45V38C58 36.8954 57.1046 36 56 36H16Z"/><path d="M14 25C14 24.4477 14.4477 24 15 24H57C57.5523 24 58 24.4477 58 25C58 25.5523 57.5523 26 57 26H15C14.4477 26 14 25.5523 14 25Z"/><path d="M14 31C14 30.4477 14.4477 30 15 30H57C57.5523 30 58 30.4477 58 31C58 31.5523 57.5523 32 57 32H15C14.4477 32 14 31.5523 14 31Z"/><path d="M14 53C14 51.8954 14.8954 51 16 51H29C30.1046 51 31 51.8954 31 53C31 54.1046 30.1046 55 29 55H16C14.8954 55 14 54.1046 14 53Z"/><path d="M14 19C14 18.4477 14.4477 18 15 18H57C57.5523 18 58 18.4477 58 19C58 19.5523 57.5523 20 57 20H15C14.4477 20 14 19.5523 14 19Z"/></mask><path d="M16 38V36H14V38H16ZM56 38H58V36H56V38ZM16 45H14V47H16V45ZM56 45V47H58V45H56ZM16 40H56V36H16V40ZM18 45V38H14V45H18ZM56 43H16V47H56V43ZM54 38V45H58V38H54ZM16 38V34C13.7909 34 12 35.7909 12 38H16ZM16 45V38H12V45H16ZM16 45H16H12C12 47.2091 13.7909 49 16 49V45ZM56 45H16V49H56V45ZM56 45V49C58.2091 49 60 47.2091 60 45H56ZM56 38V45H60V38H56ZM56 38H60C60 35.7909 58.2091 34 56 34V38ZM16 38H56V34H16V38ZM15 26H57V22H15V26ZM57 24H15V28H57V24ZM15 24C15.5523 24 16 24.4477 16 25H12C12 26.6569 13.3431 28 15 28V24ZM56 25C56 24.4477 56.4477 24 57 24V28C58.6569 28 60 26.6569 60 25H56ZM57 26C56.4477 26 56 25.5523 56 25H60C60 23.3431 58.6569 22 57 22V26ZM15 22C13.3431 22 12 23.3431 12 25H16C16 25.5523 15.5523 26 15 26V22ZM15 32H57V28H15V32ZM57 30H15V34H57V30ZM15 30C15.5523 30 16 30.4477 16 31H12C12 32.6569 13.3431 34 15 34V30ZM56 31C56 30.4477 56.4477 30 57 30V34C58.6569 34 60 32.6569 60 31H56ZM57 32C56.4477 32 56 31.5523 56 31H60C60 29.3431 58.6569 28 57 28V32ZM15 28C13.3431 28 12 29.3431 12 31H16C16 31.5523 15.5523 32 15 32V28ZM16 53H29V49H16V53ZM29 53H16V57H29V53ZM16 53H16H12C12 55.2091 13.7909 57 16 57V53ZM29 53V57C31.2091 57 33 55.2091 33 53H29ZM29 53H33C33 50.7909 31.2091 49 29 49V53ZM16 49C13.7909 49 12 50.7909 12 53H16V49ZM15 20H57V16H15V20ZM57 18H15V22H57V18ZM15 18C15.5523 18 16 18.4477 16 19H12C12 20.6569 13.3431 22 15 22V18ZM56 19C56 18.4477 56.4477 18 57 18V22C58.6569 22 60 20.6569 60 19H56ZM57 20C56.4477 20 56 19.5523 56 19H60C60 17.3431 58.6569 16 57 16V20ZM15 16C13.3431 16 12 17.3431 12 19H16C16 19.5523 15.5523 20 15 20V16Z"  mask="url(#path-1-inside-1_179_65)"/></svg>'}];var y=Object(C.applyFilters)("uag_forms_presets",T),H=a(118),j=a(14);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const O=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,deviceType:C}=e,{formLabel:T,buttonAlign:O,buttonSize:S,confirmationType:w,confirmationMessage:E,failedMessage:F,confirmationUrl:B,sendAfterSubmitEmail:V,afterSubmitToEmail:x,afterSubmitCcEmail:L,afterSubmitBccEmail:Z,afterSubmitEmailSubject:A,submitColor:k,submitColorHover:z,submitBgColor:R,submitBgColorHover:W,submitborderStyle:N,submitborderWidth:P,submitborderRadius:U,submitborderColor:I,submitborderHoverColor:G,submitTextloadGoogleFonts:D,submitTextFontFamily:q,submitTextFontWeight:K,submitTextFontSize:$,submitTextFontSizeType:J,submitTextFontSizeTablet:X,submitTextFontSizeMobile:Q,submitTextLineHeightType:Y,submitTextLineHeight:ee,submitTextLineHeightTablet:te,submitTextLineHeightMobile:ae,labelloadGoogleFonts:le,labelFontFamily:ne,labelFontWeight:oe,labelFontSize:ie,labelFontSizeType:re,labelFontSizeTablet:ue,labelFontSizeMobile:se,labelLineHeightType:de,labelLineHeight:be,labelLineHeightTablet:ce,labelLineHeightMobile:ge,inputloadGoogleFonts:fe,inputFontFamily:me,inputFontWeight:he,inputFontSize:pe,inputFontSizeType:ve,inputFontSizeTablet:_e,inputFontSizeMobile:Ce,inputLineHeightType:Te,inputLineHeight:ye,inputLineHeightTablet:He,inputLineHeightMobile:je,toggleSize:Me,toggleWidthSize:Oe,toggleHeightSize:Se,toggleActiveColor:we,labelColor:Ee,inputColor:Fe,bgColor:Be,inputplaceholderColor:Ve,inputactiveColor:xe,inputborderStyle:Le,inputborderWidth:Ze,inputborderRadius:Ae,inputborderColor:ke,inputborderHoverColor:ze,fieldGap:Re,formStyle:We,overallAlignment:Ne,reCaptchaEnable:Pe,reCaptchaType:Ue,successMessageTextColor:Ie,successMessageBGColor:Ge,successMessageBorderColor:De,successMessageBorderStyle:qe,successMessageBorderWidth:Ke,failedMessageTextColor:$e,failedMessageBorderColor:Je,failedMessageBorderStyle:Xe,failedMessageBorderWidth:Qe,failedMessageBGColor:Ye,successMessageBorderRadius:et,successMessageHoverBorderColor:tt,failedMessageBorderRadius:at,failedMessageHoverBorderColor:lt,paddingBtnTop:nt,paddingBtnRight:ot,paddingBtnBottom:it,paddingBtnLeft:rt,paddingBtnTopTablet:ut,paddingBtnRightTablet:st,paddingBtnBottomTablet:dt,paddingBtnLeftTablet:bt,paddingBtnTopMobile:ct,paddingBtnRightMobile:gt,paddingBtnBottomMobile:ft,paddingBtnLeftMobile:mt,paddingBtnUnit:ht,mobilePaddingBtnUnit:pt,tabletPaddingBtnUnit:vt,paddingspacingLink:_t,submitTextTransform:Ct,submitTextDecoration:Tt,labelTransform:yt,labelDecoration:Ht,inputTransform:jt,inputDecoration:Mt,fieldGapType:Ot,paddingFieldTop:St,paddingFieldRight:wt,paddingFieldBottom:Et,paddingFieldLeft:Ft,paddingFieldTopTablet:Bt,paddingFieldRightTablet:Vt,paddingFieldBottomTablet:xt,paddingFieldLeftTablet:Lt,paddingFieldTopMobile:Zt,paddingFieldRightMobile:At,paddingFieldBottomMobile:kt,paddingFieldLeftMobile:zt,paddingFieldUnit:Rt,paddingFieldUnitmobile:Wt,paddingFieldUnitTablet:Nt,paddingFieldLink:Pt,toggleSizeType:Ut,submitTextFontStyle:It,labelFontStyle:Gt,inputFontStyle:Dt}=t;let qt,Kt,$t;if(!0===D){const e={google:{families:[q+(K?":"+K:"")]}};qt=n.a.createElement(u.a,{config:e})}if(!0===le){const e={google:{families:[ne+(oe?":"+oe:"")]}};Kt=n.a.createElement(u.a,{config:e})}if(!0===fe){const e={google:{families:[me+(he?":"+he:"")]}};$t=n.a.createElement(u.a,{config:e})}return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.InspectorControls,null,n.a.createElement(b.a,null,n.a.createElement(c.b,c.a.general,n.a.createElement(j.a,{title:Object(o.__)("Presets","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(H.a,{setAttributes:a,presets:y,presetInputType:"radioImage"})),n.a.createElement(j.a,{title:Object(o.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(_.TextControl,{label:Object(o.__)("Hidden Field Label","ultimate-addons-for-gutenberg"),value:T,onChange:e=>a({formLabel:e})}),n.a.createElement(d.a,{setAttributes:a,label:Object(o.__)("Style","ultimate-addons-for-gutenberg"),data:{value:We,label:"formStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"boxed",label:"Boxed"},{value:"underlined",label:"Underlined"}],showIcons:!1}),n.a.createElement(d.a,{setAttributes:a,label:Object(o.__)("Overall Alignment","ultimate-addons-for-gutenberg"),data:{value:Ne,label:"overallAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),n.a.createElement(d.a,{setAttributes:a,label:Object(o.__)("Confirmation Type","ultimate-addons-for-gutenberg"),data:{value:w,label:"confirmationType"},className:"uagb-multi-button-alignment-control",options:[{value:"message",label:"Message",tooltip:Object(o.__)("Message","ultimate-addons-for-gutenberg")},{value:"url",label:"URL Text",tooltip:Object(o.__)("Url Text","ultimate-addons-for-gutenberg")}],showIcons:!1}),"message"===w&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_.TextareaControl,{label:"Success Message Text",help:Object(o.__)("Enter a message you want to display after successfull form submission","ultimate-addons-for-gutenberg"),value:E,onChange:e=>a({confirmationMessage:e})}),n.a.createElement(_.TextareaControl,{label:"Error Message Text",help:Object(o.__)("Enter a message you want to display after unsuccessfull form submission","ultimate-addons-for-gutenberg"),value:F,onChange:e=>a({failedMessage:e})})),"url"===w&&n.a.createElement(_.TextControl,{label:Object(o.__)("Success Redirect URL","ultimate-addons-for-gutenberg"),help:Object(o.__)("Enter a URL you want to redirect your page to after form Submission","ultimate-addons-for-gutenberg"),value:B,onChange:e=>a({confirmationUrl:e})})),n.a.createElement(j.a,{title:Object(o.__)("Actions"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(_.ToggleControl,{label:Object(o.__)("Email","ultimate-addons-for-gutenberg"),checked:V,onChange:()=>a({sendAfterSubmitEmail:!V})}),!0===V&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{tabs:[{name:"to",title:Object(o.__)("To","ultimate-addons-for-gutenberg")},{name:"cc",title:Object(o.__)("CC","ultimate-addons-for-gutenberg")},{name:"bcc",title:Object(o.__)("BCC","ultimate-addons-for-gutenberg")}],to:n.a.createElement(_.TextControl,{placeholder:Object(o.__)("Email","ultimate-addons-for-gutenberg"),value:x,onChange:e=>a({afterSubmitToEmail:e})}),cc:n.a.createElement(_.TextControl,{placeholder:Object(o.__)("Email","ultimate-addons-for-gutenberg"),value:L,onChange:e=>a({afterSubmitCcEmail:e})}),bcc:n.a.createElement(_.TextControl,{placeholder:Object(o.__)("Email","ultimate-addons-for-gutenberg"),value:Z,onChange:e=>a({afterSubmitBccEmail:e})}),disableBottomSeparator:!1}),n.a.createElement(_.TextControl,{label:Object(o.__)("Subject","ultimate-addons-for-gutenberg"),placeholder:Object(o.__)("Subject","ultimate-addons-for-gutenberg"),value:A,onChange:e=>a({afterSubmitEmailSubject:e})}))),n.a.createElement(j.a,{title:Object(o.__)("Google reCAPTCHA","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement("p",{className:"uagb-form-notice"},Object(o.__)("P.S. Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page. ","ultimate-addons-for-gutenberg")),n.a.createElement("p",{className:"uagb-form-notice"},Object(o.__)("To enter Google Recaptcha site and secret key you need to check admin dashboard page.","ultimate-addons-for-gutenberg")),n.a.createElement(_.ToggleControl,{label:Object(o.__)("Enable reCAPTCHA ","ultimate-addons-for-gutenberg"),checked:Pe,onChange:()=>a({reCaptchaEnable:!Pe})}),Pe&&n.a.createElement(d.a,{setAttributes:a,label:Object(o.__)("Select Version","ultimate-addons-for-gutenberg"),data:{value:Ue,label:"reCaptchaType"},className:"uagb-multi-button-alignment-control",options:[{value:"v2",label:"V2",tooltip:Object(o.__)("V2","ultimate-addons-for-gutenberg")},{value:"v3",label:"V3",tooltip:Object(o.__)("V3","ultimate-addons-for-gutenberg")}],showIcons:!1}),n.a.createElement("h2",null," ",Object(o.__)("Know More","ultimate-addons-for-gutenberg")),n.a.createElement(_.ExternalLink,{href:"https://www.google.com/recaptcha/admin/create"},Object(o.__)("Get Keys","ultimate-addons-for-gutenberg")),n.a.createElement(_.ExternalLink,{href:"https://developers.google.com/recaptcha/intro"},Object(o.__)(" | Documentation","ultimate-addons-for-gutenberg")))),n.a.createElement(c.b,c.a.style,n.a.createElement(j.a,{title:Object(o.__)("Label","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ee||"",onColorChange:e=>a({labelColor:e})}),n.a.createElement(r.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:le,label:"labelloadGoogleFonts"},fontFamily:{value:ne,label:"labelFontFamily"},fontWeight:{value:oe,label:"labelFontWeight"},fontStyle:{value:Gt,label:"labelFontStyle"},fontSizeType:{value:re,label:"labelFontSizeType"},fontSize:{value:ie,label:"labelFontSize"},fontSizeMobile:{value:se,label:"labelFontSizeMobile"},fontSizeTablet:{value:ue,label:"labelFontSizeTablet"},lineHeightType:{value:de,label:"labelLineHeightType"},lineHeight:{value:be,label:"labelLineHeight"},lineHeightMobile:{value:ge,label:"labelLineHeightMobile"},lineHeightTablet:{value:ce,label:"labelLineHeightTablet"},transform:{value:yt,label:"labelTransform"},decoration:{value:Ht,label:"labelDecoration"}})),n.a.createElement(j.a,{title:Object(o.__)("Input","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Fe||"",onColorChange:e=>a({inputColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Placeholder Color","ultimate-addons-for-gutenberg"),colorValue:Ve||"",onColorChange:e=>a({inputplaceholderColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Active Color","ultimate-addons-for-gutenberg"),colorValue:xe||"",onColorChange:e=>a({inputactiveColor:e})}),"underlined"!==We&&n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Be||"",onColorChange:e=>a({bgColor:e})}),n.a.createElement(r.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:fe,label:"inputloadGoogleFonts"},fontFamily:{value:me,label:"inputFontFamily"},fontWeight:{value:he,label:"inputFontWeight"},fontStyle:{value:Dt,label:"inputFontStyle"},fontSizeType:{value:ve,label:"inputFontSizeType"},fontSize:{value:pe,label:"inputFontSize"},fontSizeMobile:{value:Ce,label:"inputFontSizeMobile"},fontSizeTablet:{value:_e,label:"inputFontSizeTablet"},lineHeightType:{value:Te,label:"inputLineHeightType"},lineHeight:{value:ye,label:"inputLineHeight"},lineHeightMobile:{value:je,label:"inputLineHeightMobile"},lineHeightTablet:{value:He,label:"inputLineHeightTablet"},transform:{value:jt,label:"inputTransform"},decoration:{value:Mt,label:"inputDecoration"}}),n.a.createElement(s.a,{setAttributes:a,borderStyle:{value:Le,label:"inputborderStyle",title:Object(o.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Ze,label:"inputborderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Ae,label:"inputborderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:ke,label:"inputborderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:ze,label:"inputborderHoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),n.a.createElement(j.a,{title:Object(o.__)("Field","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(m.a,{label:Object(o.__)("Spacing between fields","ultimate-addons-for-gutenberg"),setAttributes:a,className:"uagb-padding-control",value:Re,onChange:e=>a({fieldGap:e}),min:0,max:100,unit:{value:Ot,label:"fieldGapType"}}),n.a.createElement(f.a,M({},e,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:St,label:"paddingFieldTop"},valueRight:{value:wt,label:"paddingFieldRight"},valueBottom:{value:Et,label:"paddingFieldBottom"},valueLeft:{value:Ft,label:"paddingFieldLeft"},valueTopTablet:{value:Bt,label:"paddingFieldTopTablet"},valueRightTablet:{value:Vt,label:"paddingFieldRightTablet"},valueBottomTablet:{value:xt,label:"paddingFieldBottomTablet"},valueLeftTablet:{value:Lt,label:"paddingFieldLeftTablet"},valueTopMobile:{value:Zt,label:"paddingFieldTopMobile"},valueRightMobile:{value:At,label:"paddingFieldRightMobile"},valueBottomMobile:{value:kt,label:"paddingFieldBottomMobile"},valueLeftMobile:{value:zt,label:"paddingFieldLeftMobile"},unit:{value:Rt,label:"paddingFieldUnit"},mUnit:{value:Wt,label:"paddingFieldUnitmobile"},tUnit:{value:Nt,label:"paddingFieldUnitTablet"},deviceType:C,attributes:t,setAttributes:a,link:{value:Pt,label:"paddingFieldLink"}}))),n.a.createElement(j.a,{title:Object(o.__)("Checkbox / Toggle","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(m.a,{label:Object(o.__)("Checkbox/Radio Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:Me,onChange:e=>a({toggleSize:e}),min:0,max:50,unit:{value:Ut,label:"toggleSizeType"}}),n.a.createElement(m.a,{label:Object(o.__)("Toggle Width","ultimate-addons-for-gutenberg"),value:Oe,setAttributes:a,onChange:e=>a({toggleWidthSize:e}),min:0,max:50,displayUnit:!1}),n.a.createElement(m.a,{label:Object(o.__)("Toggle Height","ultimate-addons-for-gutenberg"),setAttributes:a,value:Se,onChange:e=>a({toggleHeightSize:e}),min:0,max:50,displayUnit:!1}),n.a.createElement(g.a,{label:Object(o.__)("Toggle Active Color","ultimate-addons-for-gutenberg"),colorValue:we||"",onColorChange:e=>a({toggleActiveColor:e})})),n.a.createElement(j.a,{title:Object(o.__)("Success Message","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},"message"===w&&n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ie||"",onColorChange:e=>a({successMessageTextColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Ge||"",onColorChange:e=>a({successMessageBGColor:e})}),n.a.createElement(s.a,{setAttributes:a,borderStyle:{value:qe,label:"successMessageBorderStyle",title:Object(o.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Ke,label:"successMessageBorderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:et,label:"successMessageBorderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:De,label:"successMessageBorderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:tt,label:"successMessageHoverBorderColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}))),n.a.createElement(j.a,{title:Object(o.__)("Error Message","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},"message"===w&&n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:$e||"",onColorChange:e=>a({failedMessageTextColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Ye||"",onColorChange:e=>a({failedMessageBGColor:e})}),n.a.createElement(s.a,{setAttributes:a,borderStyle:{value:Xe,label:"failedMessageBorderStyle",title:Object(o.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Qe,label:"failedMessageBorderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:at,label:"failedMessageBorderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Je,label:"failedMessageBorderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:lt,label:"failedMessageHoverBorderColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}))),n.a.createElement(j.a,{title:Object(o.__)("Submit","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(_.SelectControl,{label:Object(o.__)("Button Size","ultimate-addons-for-gutenberg"),value:S,onChange:e=>a({buttonSize:e}),options:[{value:"small",label:Object(o.__)("Small","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"large",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")},{value:"extralarge",label:Object(o.__)("Extra Large","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Full","ultimate-addons-for-gutenberg")}]}),n.a.createElement(d.a,{setAttributes:a,label:Object(o.__)("Button Alignment","ultimate-addons-for-gutenberg"),data:{value:O,label:"buttonAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),n.a.createElement(f.a,M({},e,{label:Object(o.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:nt,label:"paddingBtnTop"},valueRight:{value:ot,label:"paddingBtnRight"},valueBottom:{value:it,label:"paddingBtnBottom"},valueLeft:{value:rt,label:"paddingBtnLeft"},valueTopTablet:{value:ut,label:"paddingBtnTopTablet"},valueRightTablet:{value:st,label:"paddingBtnRightTablet"},valueBottomTablet:{value:dt,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:bt,label:"paddingBtnLeftTablet"},valueTopMobile:{value:ct,label:"paddingBtnTopMobile"},valueRightMobile:{value:gt,label:"paddingBtnRightMobile"},valueBottomMobile:{value:ft,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:mt,label:"paddingBtnLeftMobile"},unit:{value:ht,label:"paddingBtnUnit"},mUnit:{value:pt,label:"mobilePaddingBtnUnit"},tUnit:{value:vt,label:"tabletPaddingBtnUnit"},deviceType:C,attributes:t,setAttributes:a,link:{value:_t,label:"paddingspacingLink"}})),n.a.createElement(v.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:e=>a({submitColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:R||"",onColorChange:e=>a({submitBgColor:e})})),hover:n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:z||"",onColorChange:e=>a({submitColorHover:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:W||"",onColorChange:e=>a({submitBgColorHover:e})}))}),n.a.createElement(s.a,{setAttributes:a,borderStyle:{value:N,label:"submitborderStyle",title:Object(o.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:P,label:"submitborderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:U,label:"submitborderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:I,label:"submitborderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:G,label:"submitborderHoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!1}),n.a.createElement(r.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:D,label:"submitTextloadGoogleFonts"},fontFamily:{value:q,label:"submitTextFontFamily"},fontWeight:{value:K,label:"submitTextFontWeight"},fontStyle:{value:It,label:"submitTextFontStyle"},fontSizeType:{value:J,label:"submitTextFontSizeType"},fontSize:{value:$,label:"submitTextFontSize"},fontSizeMobile:{value:Q,label:"submitTextFontSizeMobile"},fontSizeTablet:{value:X,label:"submitTextFontSizeTablet"},lineHeightType:{value:Y,label:"submitTextLineHeightType"},lineHeight:{value:ee,label:"submitTextLineHeight"},lineHeightMobile:{value:ae,label:"submitTextLineHeightMobile"},lineHeightTablet:{value:te,label:"submitTextLineHeightTablet"},transform:{value:Ct,label:"submitTextTransform"},decoration:{value:Tt,label:"submitTextDecoration"}}))),n.a.createElement(c.b,M({},c.a.advance,{parentProps:e})))),n.a.createElement(l.Suspense,{fallback:Object(i.a)()},qt,Kt,$t))};t.default=n.a.memo(O)}}]);