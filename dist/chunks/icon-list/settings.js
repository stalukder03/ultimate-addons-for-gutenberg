(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[66],{189:function(t,e,n){"use strict";var a,i,o=n(35),l=n.n(o),r=n(190),s=n.n(r),c=n(2);if(void 0===u)var u=[];const f=t=>{const[e,n]=Object(c.useState)([]);Object(c.useEffect)(()=>{l()},[]),Object(c.useEffect)(()=>{const{onStatus:n,config:a}=t;void 0!==e.status&&n(e.status),a!==e.config&&l()},[t]);const a=()=>{n({status:"loading"})},i=()=>{n({status:"active"})},o=()=>{n({status:"inactive"})},l=()=>{var e;u.includes(t.config.google.families[0])||(s.a.load({...t.config,loading:a,active:i,inactive:o}),e=t.config.google.families[0],u.includes(e)||u.push(e))},{children:r}=t;return r||null};f.propTypes={config:null===(a=l.a.object)||void 0===a?void 0:a.isRequired,children:l.a.element,onStatus:null===(i=l.a.func)||void 0===i?void 0:i.isRequired},f.defaultProps={onStatus:()=>{}},e.a=f},190:function(t,e,n){var a;!function(){function i(t,e,n){return t.call.apply(t.bind,arguments)}function o(t,e,n){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function l(t,e,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var c=!!window.FontFace;function u(t,e,n,a){if(e=t.c.createElement(e),n)for(var i in n)n.hasOwnProperty(i)&&("style"==i?e.style.cssText=n[i]:e.setAttribute(i,n[i]));return a&&e.appendChild(t.c.createTextNode(a)),e}function f(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t,e,n){e=e||[],n=n||[];for(var a=t.className.split(/\s+/),i=0;i<e.length;i+=1){for(var o=!1,l=0;l<a.length;l+=1)if(e[i]===a[l]){o=!0;break}o||a.push(e[i])}for(e=[],i=0;i<a.length;i+=1){for(o=!1,l=0;l<n.length;l+=1)if(a[i]===n[l]){o=!0;break}o||e.push(a[i])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(t,e){for(var n=t.className.split(/\s+/),a=0,i=n.length;a<i;a++)if(n[a]==e)return!0;return!1}function b(t,e,n){function a(){r&&i&&o&&(r(l),r=null)}e=u(t,"link",{rel:"stylesheet",href:e,media:"all"});var i=!1,o=!0,l=null,r=n||null;c?(e.onload=function(){i=!0,a()},e.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){i=!0,a()}),0),f(t,"head",e)}function p(t,e,n,a){var i=t.c.getElementsByTagName("head")[0];if(i){var o=u(t,"script",{src:e}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),o}return null}function m(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,w(t)}}function _(t,e){t.c=e,w(t)}function w(t){0==t.a&&t.c&&(t.c(),t.c=null)}function y(t){this.a=t||"-"}function j(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function C(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var a=t[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?e.push("'"+a+"'"):e.push(a)}return e.join(",")}function O(t){return t.a+t.f}function S(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function T(t){var e=4,n="n",a=null;return t&&((a=t.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=t.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?e=7:/[1-9]00/.test(a[1])&&(e=parseInt(a[1].substr(0,1),10)))),n+e}function x(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new y("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function E(t){if(t.g){var e=d(t.f,t.a.c("wf","active")),n=[],a=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),g(t.f,n,a)}k(t,"inactive")}function k(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,O(n)):t.h[e]())}function L(){this.c={}}function z(t,e){this.c=t,this.f=e,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function A(t){f(t.c,"body",t.a)}function I(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+C(t.c)+";font-style:"+S(t)+";font-weight:"+t.f+"00;"}function N(t,e,n,a,i,o){this.g=t,this.j=e,this.a=a,this.c=n,this.f=i||3e3,this.h=o||void 0}function H(t,e,n,a,i,o,l){this.v=t,this.B=e,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new z(this.c,this.s),this.h=new z(this.c,this.s),this.j=new z(this.c,this.s),this.m=new z(this.c,this.s),t=I(t=new j(this.a.c+",serif",O(this.a))),this.g.a.style.cssText=t,t=I(t=new j(this.a.c+",sans-serif",O(this.a))),this.h.a.style.cssText=t,t=I(t=new j("serif",O(this.a))),this.j.a.style.cssText=t,t=I(t=new j("sans-serif",O(this.a))),this.m.a.style.cssText=t,A(this.g),A(this.h),A(this.j),A(this.m)}y.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},N.prototype.start=function(){var t=this.c.o.document,e=this,n=r(),a=new Promise((function(a,i){!function o(){r()-n>=e.f?i():t.fonts.load(function(t){return S(t)+" "+t.f+"00 300px "+C(t.c)}(e.a),e.h).then((function(t){1<=t.length?a():setTimeout(o,25)}),(function(){i()}))}()})),i=null,o=new Promise((function(t,n){i=setTimeout(n,e.f)}));Promise.race([o,a]).then((function(){i&&(clearTimeout(i),i=null),e.g(e.a)}),(function(){e.j(e.a)}))};var B={D:"serif",C:"sans-serif"},M=null;function P(){if(null===M){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);M=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return M}function F(t,e,n){for(var a in B)if(B.hasOwnProperty(a)&&e===t.f[B[a]]&&n===t.f[B[a]])return!0;return!1}function R(t,e){setTimeout(l((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),e(this.a)}),t),0)}function W(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}H.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(e){var n,a=e.g.a.offsetWidth,i=e.h.a.offsetWidth;(n=a===e.f.serif&&i===e.f["sans-serif"])||(n=P()&&F(e,a,i)),n?r()-e.A>=e.w?P()&&F(e,a,i)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?R(e,e.v):R(e,e.B):function(e){setTimeout(l((function(){t(this)}),e),50)}(e):R(e,e.v)}(this)};var D=null;function G(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&g(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),k(t,"active")):E(t.a))}function U(t){this.j=t,this.a=new L,this.h=0,this.f=this.g=!0}function V(t,e,n,a,i){var o=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=i||null,r=a||{};if(0===n.length&&o)E(e.a);else{e.f+=n.length,o&&(e.j=o);var s,c=[];for(s=0;s<n.length;s++){var u=n[s],f=r[u.c],h=e.a,d=u;if(h.g&&g(h.f,[h.a.c("wf",d.c,O(d).toString(),"loading")]),k(h,"fontloading",d),h=null,null===D)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var b=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=d?42<parseInt(d[1],10):!b}else D=!1;h=D?new N(l(e.g,e),l(e.h,e),e.c,u,e.s,f):new H(l(e.g,e),l(e.h,e),e.c,u,e.s,t,f),c.push(h)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function Z(t,e){this.c=t,this.a=e}function q(t,e){this.c=t,this.a=e}function $(t,e){this.c=t||J,this.a=[],this.f=[],this.g=e||""}W.prototype.g=function(t){var e=this.a;e.g&&g(e.f,[e.a.c("wf",t.c,O(t).toString(),"active")],[e.a.c("wf",t.c,O(t).toString(),"loading"),e.a.c("wf",t.c,O(t).toString(),"inactive")]),k(e,"fontactive",t),this.m=!0,G(this)},W.prototype.h=function(t){var e=this.a;if(e.g){var n=d(e.f,e.a.c("wf",t.c,O(t).toString(),"active")),a=[],i=[e.a.c("wf",t.c,O(t).toString(),"loading")];n||a.push(e.a.c("wf",t.c,O(t).toString(),"inactive")),g(e.f,a,i)}k(e,"fontinactive",t),G(this)},U.prototype.load=function(t){this.c=new s(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var a=[],i=n.timeout;!function(t){t.g&&g(t.f,[t.a.c("wf","loading")]),k(t,"loading")}(e),a=function(t,e,n){var a,i=[];for(a in e)if(e.hasOwnProperty(a)){var o=t.c[a];o&&i.push(o(e[a],n))}return i}(t.a,n,t.c);var o=new W(t.c,e,i);for(t.h=a.length,e=0,n=a.length;e<n;e++)a[e].load((function(e,n,a){V(t,o,e,n,a)}))}(this,new x(this.c,t),t)},Z.prototype.load=function(t){var e=this,n=e.a.projectId,a=e.a.version;if(n){var i=e.c.o;p(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?t([]):(i["__MonotypeConfiguration__"+n]=function(){return e.a},function e(){if(i["__mti_fntLst"+n]){var a,o=i["__mti_fntLst"+n](),l=[];if(o)for(var r=0;r<o.length;r++){var s=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(a=o[r].fontStyle+o[r].fontWeight,l.push(new j(s,a))):l.push(new j(s))}t(l)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+n}else t([])},q.prototype.load=function(t){var e,n,a=this.a.urls||[],i=this.a.families||[],o=this.a.testStrings||{},l=new m;for(e=0,n=a.length;e<n;e++)b(this.c,a[e],v(l));var r=[];for(e=0,n=i.length;e<n;e++)if((a=i[e].split(":"))[1])for(var s=a[1].split(","),c=0;c<s.length;c+=1)r.push(new j(a[0],s[c]));else r.push(new j(a[0]));_(l,(function(){t(r,o)}))};var J="https://fonts.googleapis.com/css";function K(t){this.f=t,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Y={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var nt={Arimo:!0,Cousine:!0,Tinos:!0};function at(t,e){this.c=t,this.a=e}function it(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new m,n=this.c,a=new $(this.a.api,this.a.text),i=this.a.families;!function(t,e){for(var n=e.length,a=0;a<n;a++){var i=e[a].split(":");3==i.length&&t.f.push(i.pop());var o="";2==i.length&&""!=i[1]&&(o=":"),t.a.push(i.join(o))}}(a,i);var o=new K(i);!function(t){for(var e=t.f.length,n=0;n<e;n++){var a=t.f[n].split(":"),i=a[0].replace(/\+/g," "),o=["n4"];if(2<=a.length){var l;if(l=[],r=a[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(f=tt.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Y[u],null==(f=f[1])||""==f)f="4";else var f=Q[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&l.push(u)}0<l.length&&(o=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=X[a[0]])&&(t.c[i]=a))}for(t.c[i]||(a=X[i])&&(t.c[i]=a),a=0;a<o.length;a+=1)t.a.push(new j(i,o[a]))}}(o),b(n,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],a=0;a<e;a++)n.push(t.a[a].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(a),v(e)),_(e,(function(){t(o.a,o.c,nt)}))},at.prototype.load=function(t){var e=this.a.id,n=this.c.o;e?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var a=[],i=0;i<e.length;i+=2)for(var o=e[i],l=e[i+1],r=0;r<l.length;r++)a.push(new j(o,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(a)}}),2e3):t([])},it.prototype.load=function(t){var e=this.f.id,n=this.c.o,a=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var i=0,o=n.fonts.length;i<o;++i){var l=n.fonts[i];a.a.push(new j(l.name,T("font-weight:"+l.weight+";font-style:"+l.style)))}t(a.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var ot=new U(window);ot.a.c.custom=function(t,e){return new q(e,t)},ot.a.c.fontdeck=function(t,e){return new it(e,t)},ot.a.c.monotype=function(t,e){return new Z(e,t)},ot.a.c.typekit=function(t,e){return new at(e,t)},ot.a.c.google=function(t,e){return new et(e,t)};var lt={load:l(ot.load,ot)};void 0===(a=function(){return lt}.call(e,n,e,t))||(t.exports=a)}()},512:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(8),l=n(189),r=n(30),s=n(1),c=n(9),u=n(4),f=n(79),h=n(23),g=n(11),d=n(80),b=n(22),p=n(19),m=n(26),v=n(54);const _=[{defaultAttributes:m.a},{defaultChildAttributes:v.a},{value:"preset-1",label:Object(s.__)("Preset 1","ultimate-addons-for-gutenberg"),attributes:[{label:"size",value:20},{label:"bgSize",value:""},{label:"borderRadius",value:100},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#0170B9"},{label:"icon_bg_color",value:""}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.049 19.9271C35.3483 19.0057 36.6518 19.0057 36.9511 19.9271L40.0413 29.4377C40.1752 29.8497 40.5591 30.1287 40.9924 30.1287H50.9924C51.9612 30.1287 52.3639 31.3683 51.5802 31.9377L43.49 37.8156C43.1395 38.0702 42.9928 38.5216 43.1267 38.9336L46.2169 48.4443C46.5163 49.3656 45.4618 50.1317 44.6781 49.5623L36.5878 43.6844C36.2373 43.4298 35.7627 43.4298 35.4123 43.6844L27.322 49.5623C26.5383 50.1317 25.4838 49.3656 25.7832 48.4443L28.8734 38.9336C29.0073 38.5216 28.8606 38.0702 28.5101 37.8156L20.4199 31.9377C19.6362 31.3683 20.0389 30.1287 21.0077 30.1287H31.0077C31.441 30.1287 31.8249 29.8497 31.9588 29.4377L35.049 19.9271Z" /></svg>'},{value:"preset-2",label:Object(s.__)("Preset 2","ultimate-addons-for-gutenberg"),attributes:[{label:"bgSize",value:10},{label:"size",value:20},{label:"borderRadius",value:100},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#fff"},{label:"icon_bg_color",value:"#0170B9"}],icon:'<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.5829 56C47.6286 56 56.5829 47.0457 56.5829 36C56.5829 24.9543 47.6286 16 36.5829 16C25.5372 16 16.5829 24.9543 16.5829 36C16.5829 47.0457 25.5372 56 36.5829 56ZM39.2771 31.2918L37.5339 25.9271C37.2346 25.0057 35.9312 25.0057 35.6318 25.9271L33.8887 31.2918C33.7548 31.7038 33.3709 31.9828 32.9377 31.9828H27.2968C26.3281 31.9828 25.9253 33.2224 26.7091 33.7918L31.2726 37.1074C31.6231 37.362 31.7697 37.8134 31.6358 38.2254L29.8927 43.5902C29.5934 44.5115 30.6479 45.2776 31.4316 44.7082L35.9951 41.3926C36.3456 41.138 36.8202 41.138 37.1707 41.3926L41.7342 44.7082C42.5179 45.2776 43.5724 44.5115 43.273 43.5902L41.5299 38.2254C41.3961 37.8134 41.5427 37.362 41.8932 37.1074L46.4567 33.7918C47.2404 33.2224 46.8377 31.9828 45.8689 31.9828H40.2281C39.7949 31.9828 39.4109 31.7038 39.2771 31.2918Z" /></svg>'},{value:"preset-3",label:Object(s.__)("Preset 3","ultimate-addons-for-gutenberg"),attributes:[{label:"bgSize",value:10},{label:"size",value:20},{label:"borderRadius",value:100},{label:"border",value:2}],childAttributes:[{label:"icon_color",value:"#0170B9"},{label:"icon_border_color",value:"#0170B9"},{label:"icon_bg_color",value:""}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.2146 25.9271C35.5139 25.0057 36.8174 25.0057 37.1167 25.9271L38.8598 31.2918C38.9937 31.7038 39.3777 31.9828 39.8109 31.9828H45.4517C46.4204 31.9828 46.8232 33.2224 46.0395 33.7918L41.476 37.1074C41.1255 37.362 40.9788 37.8134 41.1127 38.2254L42.8558 43.5902C43.1552 44.5115 42.1007 45.2776 41.317 44.7082L36.7534 41.3926C36.403 41.138 35.9284 41.138 35.5779 41.3926L31.0143 44.7082C30.2306 45.2776 29.1761 44.5115 29.4755 43.5902L31.2186 38.2254C31.3525 37.8134 31.2058 37.362 30.8553 37.1074L26.2918 33.7918C25.5081 33.2224 25.9109 31.9828 26.8796 31.9828H32.5204C32.9537 31.9828 33.3376 31.7038 33.4715 31.2918L35.2146 25.9271Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M36.1658 54C46.1069 54 54.1658 45.9411 54.1658 36C54.1658 26.0589 46.1069 18 36.1658 18C26.2246 18 18.1658 26.0589 18.1658 36C18.1658 45.9411 26.2246 54 36.1658 54ZM36.1658 56C47.2115 56 56.1658 47.0457 56.1658 36C56.1658 24.9543 47.2115 16 36.1658 16C25.1201 16 16.1658 24.9543 16.1658 36C16.1658 47.0457 25.1201 56 36.1658 56Z" /></svg>'}];var w=Object(p.applyFilters)("uag_icon_list_presets",_),y=n(118),j=n(12),C=n(6),O=n(14);function S(){return(S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}const T=t=>{t=t.parentProps;const{attributes:e,setAttributes:n,clientId:p}=t,{align:m,gap:v,inner_gap:_,stack:T,icon_layout:x,iconPosition:E,size:k,sizeType:L,sizeMobile:z,sizeTablet:A,hideLabel:I,borderRadius:N,bgSize:H,border:B,fontSize:M,fontSizeType:P,fontSizeMobile:F,fontSizeTablet:R,fontFamily:W,fontWeight:D,lineHeight:G,lineHeightType:U,lineHeightMobile:V,lineHeightTablet:Z,loadGoogleFonts:q,fontStyle:$,fontTransform:J,fontDecoration:K}=e;let X;if(!0===q){const t={google:{families:[W+(D?":"+D:"")]}};X=i.a.createElement(l.a,{config:t})}return i.a.createElement(a.Suspense,{fallback:Object(o.a)()},i.a.createElement(u.BlockControls,null,i.a.createElement(u.AlignmentToolbar,{value:m,onChange:t=>{n({align:t})},controls:["left","center","right"]})),i.a.createElement(u.InspectorControls,null,i.a.createElement(f.a,null,i.a.createElement(h.b,h.a.general,i.a.createElement(O.a,{title:Object(s.__)("Presets","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(y.a,{setAttributes:n,presets:w,presetInputType:"radioImage"})),i.a.createElement(O.a,{initialOpen:!0},i.a.createElement(b.a,{setAttributes:n,label:Object(s.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:x,label:"icon_layout"},className:"uagb-multi-button-alignment-control",options:[{value:"horizontal",label:Object(s.__)("Horizontal","ultimate-addons-for-gutenberg"),tooltip:Object(s.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(s.__)("Vertical","ultimate-addons-for-gutenberg"),tooltip:Object(s.__)("Vertical","ultimate-addons-for-gutenberg")}],showIcons:!1}),i.a.createElement(b.a,{setAttributes:n,label:Object(s.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:m,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(C.Icon,{icon:Object(j.a)("fa fa-align-left")}),tooltip:Object(s.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(C.Icon,{icon:Object(j.a)("fa fa-align-center")}),tooltip:Object(s.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(C.Icon,{icon:Object(j.a)("fa fa-align-right")}),tooltip:Object(s.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),"horizontal"===x&&i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{setAttributes:n,label:Object(s.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:T,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(s.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(s.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(s.__)("Tablet + Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(s.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(s.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(s.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(s.__)("Note: Choose on what breakpoint the Icons will stack.","ultimate-addons-for-gutenberg")})),!I&&i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{setAttributes:n,label:Object(s.__)("Icon Alignment","ultimate-addons-for-gutenberg"),data:{value:E,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top",tooltip:Object(s.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:"Middle",tooltip:Object(s.__)("Middle","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(s.__)("Note: This manages the Icon Position with respect to the Label.","ultimate-addons-for-gutenberg")})),i.a.createElement(C.ToggleControl,{label:Object(s.__)("Hide Labels","ultimate-addons-for-gutenberg"),checked:I,onChange:t=>(t=>{Object(c.select)("core/block-editor").getBlocks(p).forEach(e=>{e.attributes.hideLabel=t}),n({hideLabel:t})})(t)}))),i.a.createElement(h.b,h.a.style,i.a.createElement(O.a,{title:Object(s.__)("Icon/Image","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{label:Object(s.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:k,label:"size"},tablet:{value:A,label:"sizeTablet"},mobile:{value:z,label:"sizeMobile"}},min:0,max:200,unit:{value:L,label:"sizeType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(s.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:n}),i.a.createElement(g.a,{label:Object(s.__)("Background Size (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:H,onChange:t=>n({bgSize:t}),min:0,max:50,displayUnit:!1,help:Object(s.__)("Note: Background Size option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(g.a,{label:Object(s.__)("Border (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:B,onChange:t=>n({border:t}),min:0,max:10,displayUnit:!1,help:Object(s.__)("Note: Border option is useful when one adds border color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(g.a,{label:Object(s.__)("Border Radius (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:N,onChange:t=>n({borderRadius:t}),min:0,max:100,displayUnit:!1,help:Object(s.__)("Note: Border Radius option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")})),!I&&i.a.createElement(O.a,{title:Object(s.__)("Label","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(g.a,{label:Object(s.__)("Gap between Icon and Label (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:_,onChange:t=>n({inner_gap:t}),min:0,max:100,displayUnit:!1}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:n,loadGoogleFonts:{value:q,label:"loadGoogleFonts"},fontFamily:{value:W,label:"fontFamily"},fontWeight:{value:D,label:"fontWeight"},fontStyle:{value:$,label:"fontStyle"},transform:{value:J,label:"fontTransform"},decoration:{value:K,label:"fontDecoration"},fontSizeType:{value:P,label:"fontSizeType"},fontSize:{value:M,label:"fontSize"},fontSizeMobile:{value:F,label:"fontSizeMobile"},fontSizeTablet:{value:R,label:"fontSizeTablet"},lineHeightType:{value:U,label:"lineHeightType"},lineHeight:{value:G,label:"lineHeight"},lineHeightMobile:{value:V,label:"lineHeightMobile"},lineHeightTablet:{value:Z,label:"lineHeightTablet"}})),i.a.createElement(O.a,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(g.a,{label:Object(s.__)("Gap between Items (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:v,onChange:t=>n({gap:t}),min:0,max:100,displayUnit:!1,help:Object(s.__)("Note: For better editing experience, the gap between items might look larger than applied. Viewing in frontend will show the actual results.","ultimate-addons-for-gutenberg")}))),i.a.createElement(h.b,S({},h.a.advance,{parentProps:t})))),X)};e.default=i.a.memo(T)}}]);