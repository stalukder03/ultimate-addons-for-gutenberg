(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[4],{167:function(e,t,a){"use strict";var n,i,o=a(33),l=a.n(o),r=a(168),s=a.n(r),u=a(2);if(void 0===c)var c=[];const h=e=>{const[t,a]=Object(u.useState)([]);Object(u.useEffect)(()=>{l()},[]),Object(u.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&l()},[e]);const n=()=>{a({status:"loading"})},i=()=>{a({status:"active"})},o=()=>{a({status:"inactive"})},l=()=>{var t;c.includes(e.config.google.families[0])||(s.a.load({...e.config,loading:n,active:i,inactive:o}),t=e.config.google.families[0],c.includes(t)||c.push(t))},{children:r}=e;return r||null};h.propTypes={config:null===(n=l.a.object)||void 0===n?void 0:n.isRequired,children:l.a.element,onStatus:null===(i=l.a.func)||void 0===i?void 0:i.isRequired},h.defaultProps={onStatus:()=>{}},t.a=h},168:function(e,t,a){var n;!function(){function i(e,t,a){return e.call.apply(e.bind,arguments)}function o(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function l(e,t,a){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function c(e,t,a,n){if(t=e.c.createElement(t),a)for(var i in a)a.hasOwnProperty(i)&&("style"==i?t.style.cssText=a[i]:t.setAttribute(i,a[i]));return n&&t.appendChild(e.c.createTextNode(n)),t}function h(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var o=!1,l=0;l<n.length;l+=1)if(t[i]===n[l]){o=!0;break}o||n.push(t[i])}for(t=[],i=0;i<n.length;i+=1){for(o=!1,l=0;l<a.length;l+=1)if(n[i]===a[l]){o=!0;break}o||t.push(n[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(e,t){for(var a=e.className.split(/\s+/),n=0,i=a.length;n<i;n++)if(a[n]==t)return!0;return!1}function b(e,t,a){function n(){r&&i&&o&&(r(l),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,o=!0,l=null,r=a||null;u?(t.onload=function(){i=!0,n()},t.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),n()}):setTimeout((function(){i=!0,n()}),0),h(e,"head",t)}function p(e,t,a,n){var i=e.c.getElementsByTagName("head")[0];if(i){var o=c(e,"script",{src:t}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,a&&a(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout((function(){l||(l=!0,a&&a(Error("Script load timeout")))}),n||5e3),o}return null}function v(){this.a=0,this.c=null}function m(e){return e.a++,function(){e.a--,C(e)}}function y(e,t){e.c=t,C(e)}function C(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function H(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function _(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function j(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function x(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function T(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function O(e){if(e.g){var t=g(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),d(e.f,a,n)}E(e,"inactive")}function E(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,j(a)):e.h[t]())}function F(){this.c={}}function M(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function A(e){h(e.c,"body",e.a)}function k(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+_(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function L(e,t,a,n,i,o){this.g=e,this.j=t,this.a=n,this.c=a,this.f=i||3e3,this.h=o||void 0}function z(e,t,a,n,i,o,l){this.v=e,this.B=t,this.c=a,this.a=n,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new M(this.c,this.s),this.h=new M(this.c,this.s),this.j=new M(this.c,this.s),this.m=new M(this.c,this.s),e=k(e=new H(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=e,e=k(e=new H(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=e,e=k(e=new H("serif",j(this.a))),this.j.a.style.cssText=e,e=k(e=new H("sans-serif",j(this.a))),this.m.a.style.cssText=e,A(this.g),A(this.h),A(this.j),A(this.m)}w.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},L.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,i){!function o(){r()-a>=t.f?i():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+_(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(o,25)}),(function(){i()}))}()})),i=null,o=new Promise((function(e,a){i=setTimeout(a,t.f)}));Promise.race([o,n]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var W={D:"serif",C:"sans-serif"},Z=null;function P(){if(null===Z){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);Z=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return Z}function I(e,t,a){for(var n in W)if(W.hasOwnProperty(n)&&t===e.f[W[n]]&&a===e.f[W[n]])return!0;return!1}function B(e,t){setTimeout(l((function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),t(this.a)}),e),0)}function N(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(a=n===t.f.serif&&i===t.f["sans-serif"])||(a=P()&&I(t,n,i)),a?r()-t.A>=t.w?P()&&I(t,n,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?B(t,t.v):B(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):B(t,t.v)}(this)};var D=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),E(e,"active")):O(e.a))}function V(e){this.j=e,this.a=new F,this.h=0,this.f=this.g=!0}function q(e,t,a,n,i){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,r=n||{};if(0===a.length&&o)O(t.a);else{t.f+=a.length,o&&(t.j=o);var s,u=[];for(s=0;s<a.length;s++){var c=a[s],h=r[c.c],f=t.a,g=c;if(f.g&&d(f.f,[f.a.c("wf",g.c,j(g).toString(),"loading")]),E(f,"fontloading",g),f=null,null===D)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var b=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=g?42<parseInt(g[1],10):!b}else D=!1;f=D?new L(l(t.g,t),l(t.h,t),t.c,c,t.s,h):new z(l(t.g,t),l(t.h,t),t.c,c,t.s,e,h),u.push(f)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function R(e,t){this.c=e,this.a=t}function U(e,t){this.c=e,this.a=t}function $(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}N.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,j(e).toString(),"active")],[t.a.c("wf",e.c,j(e).toString(),"loading"),t.a.c("wf",e.c,j(e).toString(),"inactive")]),E(t,"fontactive",e),this.m=!0,G(this)},N.prototype.h=function(e){var t=this.a;if(t.g){var a=g(t.f,t.a.c("wf",e.c,j(e).toString(),"active")),n=[],i=[t.a.c("wf",e.c,j(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,j(e).toString(),"inactive")),d(t.f,n,i)}E(t,"fontinactive",e),G(this)},V.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],i=a.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),E(e,"loading")}(t),n=function(e,t,a){var n,i=[];for(n in t)if(t.hasOwnProperty(n)){var o=e.c[n];o&&i.push(o(t[n],a))}return i}(e.a,a,e.c);var o=new N(e.c,t,i);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){q(e,o,t,a,n)}))}(this,new T(this.c,e),e)},R.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var i=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(i["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(i["__mti_fntLst"+a]){var n,o=i["__mti_fntLst"+a](),l=[];if(o)for(var r=0;r<o.length;r++){var s=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(n=o[r].fontStyle+o[r].fontWeight,l.push(new H(s,n))):l.push(new H(s))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},U.prototype.load=function(e){var t,a,n=this.a.urls||[],i=this.a.families||[],o=this.a.testStrings||{},l=new v;for(t=0,a=n.length;t<a;t++)b(this.c,n[t],m(l));var r=[];for(t=0,a=i.length;t<a;t++)if((n=i[t].split(":"))[1])for(var s=n[1].split(","),u=0;u<s.length;u+=1)r.push(new H(n[0],s[u]));else r.push(new H(n[0]));y(l,(function(){e(r,o)}))};var J="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Y={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new v,a=this.c,n=new $(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var i=t[n].split(":");3==i.length&&e.f.push(i.pop());var o="";2==i.length&&""!=i[1]&&(o=":"),e.a.push(i.join(o))}}(n,i);var o=new K(i);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),i=n[0].replace(/\+/g," "),o=["n4"];if(2<=n.length){var l;if(l=[],r=n[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var c;if((c=r[u]).match(/^[\w-]+$/))if(null==(h=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=h[2])||""==c?"n":Y[c],null==(h=h[1])||""==h)h="4";else var h=Q[h]||(isNaN(h)?"4":h.substr(0,1));c=[c,h].join("")}else c="";c&&l.push(c)}0<l.length&&(o=l),3==n.length&&(l=[],0<(n=(n=n[2])?n.split(","):l).length&&(n=X[n[0]])&&(e.c[i]=n))}for(e.c[i]||(n=X[i])&&(e.c[i]=n),n=0;n<o.length;n+=1)e.a.push(new H(i,o[n]))}}(o),b(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),m(t)),y(t,(function(){e(o.a,o.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],i=0;i<t.length;i+=2)for(var o=t[i],l=t[i+1],r=0;r<l.length;r++)n.push(new H(o,l[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var i=0,o=a.fonts.length;i<o;++i){var l=a.fonts[i];n.a.push(new H(l.name,x("font-weight:"+l.weight+";font-style:"+l.style)))}e(n.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new V(window);oe.a.c.custom=function(e,t){return new U(t,e)},oe.a.c.fontdeck=function(e,t){return new ie(t,e)},oe.a.c.monotype=function(e,t){return new R(t,e)},oe.a.c.typekit=function(e,t){return new ne(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var le={load:l(oe.load,oe)};void 0===(n=function(){return le}.call(t,a,t,e))||(e.exports=n)}()},473:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(8),l=a(29),r=a(167),s=a(64),u=a(23),c=a(17),h=a(11),f=a(21),d=a(1),g=a(19);const b=[{defaultAttributes:a(66).a},{value:"preset-1",label:Object(d.__)("Preset 1","ultimate-addons-for-gutenberg"),attributes:[{label:"headingAlign",value:"left"},{label:"seperatorStyle",value:"none"},{label:"separatorWidth",value:""},{label:"separatorHeight",value:""},{label:"separatorColor",value:""}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="27" width="42" height="2" rx="1" /><rect x="7" y="35" width="58" height="1" rx="0.5" /><rect x="7" y="39" width="58" height="1" rx="0.5" /><path d="M7 43.5C7 43.2239 7.22386 43 7.5 43H50.5C50.7761 43 51 43.2239 51 43.5C51 43.7761 50.7761 44 50.5 44H7.5C7.22386 44 7 43.7761 7 43.5Z" /></svg>'},{value:"preset-2",label:Object(d.__)("Preset 2","ultimate-addons-for-gutenberg"),attributes:[{label:"headingAlign",value:"center"},{label:"seperatorStyle",value:"solid"},{label:"separatorWidth",value:80},{label:"separatorHeight",value:2},{label:"separatorColor",value:"#0170B9"},{label:"separatorWidthType",value:"px"}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="24" width="43" height="2" rx="1" /><path fill-rule="evenodd" clip-rule="evenodd" d="M24 32.5029C24 32.2252 24.2252 32 24.5029 32H24.7544C25.0321 32 25.2573 32.2252 25.2573 32.5029C25.2573 32.7807 25.0321 33.0058 24.7544 33.0058H24.5029C24.2252 33.0058 24 32.7807 24 32.5029ZM26.2631 32.5029C26.2631 32.2252 26.4883 32 26.766 32H27.2689C27.5467 32 27.7718 32.2252 27.7718 32.5029C27.7718 32.7807 27.5467 33.0058 27.2689 33.0058H26.766C26.4883 33.0058 26.2631 32.7807 26.2631 32.5029ZM28.7777 32.5029C28.7777 32.2252 29.0028 32 29.2806 32H29.7835C30.0613 32 30.2864 32.2252 30.2864 32.5029C30.2864 32.7807 30.0613 33.0058 29.7835 33.0058H29.2806C29.0028 33.0058 28.7777 32.7807 28.7777 32.5029ZM31.2922 32.5029C31.2922 32.2252 31.5174 32 31.7952 32H32.2981C32.5758 32 32.801 32.2252 32.801 32.5029C32.801 32.7807 32.5758 33.0058 32.2981 33.0058H31.7952C31.5174 33.0058 31.2922 32.7807 31.2922 32.5029ZM33.8068 32.5029C33.8068 32.2252 34.032 32 34.3097 32H34.8126C35.0904 32 35.3155 32.2252 35.3155 32.5029C35.3155 32.7807 35.0904 33.0058 34.8126 33.0058H34.3097C34.032 33.0058 33.8068 32.7807 33.8068 32.5029ZM36.3214 32.5029C36.3214 32.2252 36.5465 32 36.8243 32H37.3272C37.605 32 37.8301 32.2252 37.8301 32.5029C37.8301 32.7807 37.605 33.0058 37.3272 33.0058H36.8243C36.5465 33.0058 36.3214 32.7807 36.3214 32.5029ZM38.8359 32.5029C38.8359 32.2252 39.0611 32 39.3389 32H39.8418C40.1195 32 40.3447 32.2252 40.3447 32.5029C40.3447 32.7807 40.1195 33.0058 39.8418 33.0058H39.3389C39.0611 33.0058 38.8359 32.7807 38.8359 32.5029ZM41.3505 32.5029C41.3505 32.2252 41.5757 32 41.8534 32H42.3563C42.6341 32 42.8592 32.2252 42.8592 32.5029C42.8592 32.7807 42.6341 33.0058 42.3563 33.0058H41.8534C41.5757 33.0058 41.3505 32.7807 41.3505 32.5029ZM43.8651 32.5029C43.8651 32.2252 44.0902 32 44.368 32H44.8709C45.1487 32 45.3738 32.2252 45.3738 32.5029C45.3738 32.7807 45.1487 33.0058 44.8709 33.0058H44.368C44.0902 33.0058 43.8651 32.7807 43.8651 32.5029ZM46.3796 32.5029C46.3796 32.2252 46.6048 32 46.8826 32H47.134C47.4118 32 47.6369 32.2252 47.6369 32.5029C47.6369 32.7807 47.4118 33.0058 47.134 33.0058H46.8826C46.6048 33.0058 46.3796 32.7807 46.3796 32.5029Z" /><rect x="7" y="39" width="58" height="1" rx="0.5" /><rect x="7" y="43" width="58" height="1" rx="0.5" /><rect x="14" y="47" width="44" height="1" rx="0.5" /></svg>'},{value:"preset-3",label:Object(d.__)("Preset 3","ultimate-addons-for-gutenberg"),attributes:[{label:"headingAlign",value:"left"},{label:"seperatorStyle",value:"solid"},{label:"separatorWidth",value:80},{label:"separatorHeight",value:2},{label:"separatorWidthType",value:"px"},{label:"separatorColor",value:"#0170B9"}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="24" width="43" height="2" rx="1" /><path fill-rule="evenodd" clip-rule="evenodd" d="M7 32.5029C7 32.2252 7.22516 32 7.50291 32H7.75437C8.03212 32 8.25728 32.2252 8.25728 32.5029C8.25728 32.7807 8.03212 33.0058 7.75437 33.0058H7.50291C7.22516 33.0058 7 32.7807 7 32.5029ZM9.26311 32.5029C9.26311 32.2252 9.48827 32 9.76602 32H10.2689C10.5467 32 10.7718 32.2252 10.7718 32.5029C10.7718 32.7807 10.5467 33.0058 10.2689 33.0058H9.76602C9.48827 33.0058 9.26311 32.7807 9.26311 32.5029ZM11.7777 32.5029C11.7777 32.2252 12.0028 32 12.2806 32H12.7835C13.0613 32 13.2864 32.2252 13.2864 32.5029C13.2864 32.7807 13.0613 33.0058 12.7835 33.0058H12.2806C12.0028 33.0058 11.7777 32.7807 11.7777 32.5029ZM14.2922 32.5029C14.2922 32.2252 14.5174 32 14.7952 32H15.2981C15.5758 32 15.801 32.2252 15.801 32.5029C15.801 32.7807 15.5758 33.0058 15.2981 33.0058H14.7952C14.5174 33.0058 14.2922 32.7807 14.2922 32.5029ZM16.8068 32.5029C16.8068 32.2252 17.032 32 17.3097 32H17.8126C18.0904 32 18.3155 32.2252 18.3155 32.5029C18.3155 32.7807 18.0904 33.0058 17.8126 33.0058H17.3097C17.032 33.0058 16.8068 32.7807 16.8068 32.5029ZM19.3214 32.5029C19.3214 32.2252 19.5465 32 19.8243 32H20.3272C20.605 32 20.8301 32.2252 20.8301 32.5029C20.8301 32.7807 20.605 33.0058 20.3272 33.0058H19.8243C19.5465 33.0058 19.3214 32.7807 19.3214 32.5029ZM21.8359 32.5029C21.8359 32.2252 22.0611 32 22.3389 32H22.8418C23.1195 32 23.3447 32.2252 23.3447 32.5029C23.3447 32.7807 23.1195 33.0058 22.8418 33.0058H22.3389C22.0611 33.0058 21.8359 32.7807 21.8359 32.5029ZM24.3505 32.5029C24.3505 32.2252 24.5757 32 24.8534 32H25.3563C25.6341 32 25.8592 32.2252 25.8592 32.5029C25.8592 32.7807 25.6341 33.0058 25.3563 33.0058H24.8534C24.5757 33.0058 24.3505 32.7807 24.3505 32.5029ZM26.8651 32.5029C26.8651 32.2252 27.0902 32 27.368 32H27.8709C28.1487 32 28.3738 32.2252 28.3738 32.5029C28.3738 32.7807 28.1487 33.0058 27.8709 33.0058H27.368C27.0902 33.0058 26.8651 32.7807 26.8651 32.5029ZM29.3796 32.5029C29.3796 32.2252 29.6048 32 29.8826 32H30.134C30.4118 32 30.6369 32.2252 30.6369 32.5029C30.6369 32.7807 30.4118 33.0058 30.134 33.0058H29.8826C29.6048 33.0058 29.3796 32.7807 29.3796 32.5029Z" /><rect x="7" y="39" width="58" height="1" rx="0.5" /><rect x="7" y="43" width="58" height="1" rx="0.5" /><rect x="7" y="47" width="44" height="1" rx="0.5" /></svg>'}];var p=Object(g.applyFilters)("uag_creative_heading_presets",b),v=a(96),m=a(4),y=a(12),C=a(6),w=a(16);function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const _=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{headingAlign:g,headingColor:b,subHeadingColor:_,separatorColor:j,headingTag:S,headFontFamily:x,headFontWeight:T,headFontStyle:O,headFontSizeType:E,headFontSize:F,headFontSizeMobile:M,headFontSizeTablet:A,headLineHeightType:k,headLineHeight:L,headLineHeightMobile:z,headLineHeightTablet:W,subHeadFontFamily:Z,subHeadFontWeight:P,subHeadFontStyle:I,subHeadFontSize:B,subHeadFontSizeType:N,subHeadFontSizeMobile:D,subHeadFontSizeTablet:G,subHeadLineHeight:V,subHeadLineHeightType:q,subHeadLineHeightMobile:R,subHeadLineHeightTablet:U,headTransform:$,headDecoration:J,subHeadTransform:K,subHeadDecoration:X,separatorWidth:Q,separatorWidthType:Y,seperatorStyle:ee,separatorHeight:te,headSpace:ae,separatorSpace:ne,headLoadGoogleFonts:ie,subHeadLoadGoogleFonts:oe}=t;let le,re;if(!0===ie){const e={google:{families:[x+(T?":"+T:"")]}};le=i.a.createElement(r.a,{config:e})}if(!0===oe){const e={google:{families:[Z+(P?":"+P:"")]}};re=i.a.createElement(r.a,{config:e})}return i.a.createElement("div",null,i.a.createElement(m.BlockControls,{key:"controls"},i.a.createElement(m.AlignmentToolbar,{value:g,onChange:e=>a({headingAlign:e})})),i.a.createElement(m.InspectorControls,null,i.a.createElement(s.a,null,i.a.createElement(u.b,u.a.general,i.a.createElement(w.a,{title:Object(d.__)("Presets","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(v.a,{setAttributes:a,presets:p,presetInputType:"radioImage"})),i.a.createElement(w.a,null,i.a.createElement(f.a,{setAttributes:a,label:Object(d.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:g,label:"headingAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(C.Icon,{icon:Object(y.a)("fa fa-align-left")}),tooltip:Object(d.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(C.Icon,{icon:Object(y.a)("fa fa-align-center")}),tooltip:Object(d.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(C.Icon,{icon:Object(y.a)("fa fa-align-right")}),tooltip:Object(d.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),i.a.createElement(f.a,{setAttributes:a,label:Object(d.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:S,label:"headingTag"},options:[{value:"h1",label:Object(d.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(d.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(d.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(d.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(d.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(d.__)("H6","ultimate-addons-for-gutenberg")}]}),i.a.createElement(C.SelectControl,{label:Object(d.__)("Separator Style","ultimate-addons-for-gutenberg"),value:ee,onChange:e=>a({seperatorStyle:e}),options:[{value:"none",label:Object(d.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(d.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(d.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(d.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(d.__)("Dotted","ultimate-addons-for-gutenberg")}]}))),i.a.createElement(u.b,u.a.style,i.a.createElement(w.a,{title:Object(d.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(n.Suspense,{fallback:Object(o.a)()},i.a.createElement(l.a,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:ie,label:"headLoadGoogleFonts"},fontFamily:{value:x,label:"headFontFamily"},fontWeight:{value:T,label:"headFontWeight"},fontStyle:{value:O,label:"headFontStyle"},transform:{value:$,label:"headTransform"},decoration:{value:J,label:"headDecoration"},fontSizeType:{value:E,label:"headFontSizeType"},fontSize:{value:F,label:"headFontSize"},fontSizeMobile:{value:M,label:"headFontSizeMobile"},fontSizeTablet:{value:A,label:"headFontSizeTablet"},lineHeightType:{value:k,label:"headLineHeightType"},lineHeight:{value:L,label:"headLineHeight"},lineHeightMobile:{value:z,label:"headLineHeightMobile"},lineHeightTablet:{value:W,label:"headLineHeightTablet"}})),i.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:b||"",onColorChange:e=>a({headingColor:e})}),i.a.createElement(h.a,{label:Object(d.__)("Bottom Spacing (px)","ultimate-addons-for-gutenberg"),setAttributes:a,value:ae,onChange:e=>a({headSpace:e}),min:0,max:200,displayUnit:!1})),"none"!==ee&&i.a.createElement(w.a,{title:Object(d.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(h.a,{label:Object(d.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:a,value:Q,onChange:e=>a({separatorWidth:e}),min:0,max:"%"===Y?100:500,unit:{value:Y,label:"separatorWidthType"},units:[{name:Object(d.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(d.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),i.a.createElement(h.a,{label:Object(d.__)("Thickness(px)","ultimate-addons-for-gutenberg"),setAttributes:a,value:te,onChange:e=>a({separatorHeight:e}),min:0,max:20,displayUnit:!1}),i.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:j||"",onColorChange:e=>a({separatorColor:e})}),i.a.createElement(h.a,{label:Object(d.__)("Bottom Spacing (px)","ultimate-addons-for-gutenberg"),setAttributes:a,value:ne,onChange:e=>a({separatorSpace:e}),min:0,max:200,displayUnit:!1})),i.a.createElement(w.a,{title:Object(d.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(n.Suspense,{fallback:Object(o.a)()},i.a.createElement(l.a,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:oe,label:"subHeadLoadGoogleFonts"},fontFamily:{value:Z,label:"subHeadFontFamily"},fontWeight:{value:P,label:"subHeadFontWeight"},fontStyle:{value:I,label:"subHeadFontStyle"},transform:{value:K,label:"subHeadTransform"},decoration:{value:X,label:"subHeadDecoration"},fontSizeType:{value:N,label:"subHeadFontSizeType"},fontSize:{value:B,label:"subHeadFontSize"},fontSizeMobile:{value:D,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:G,label:"subHeadFontSizeTablet"},lineHeightType:{value:q,label:"subHeadLineHeightType"},lineHeight:{value:V,label:"subHeadLineHeight"},lineHeightMobile:{value:R,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:U,label:"subHeadLineHeightTablet"}})),i.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:_||"",onColorChange:e=>a({subHeadingColor:e})}))),i.a.createElement(u.b,H({},u.a.advance,{parentProps:e})))),i.a.createElement(n.Suspense,{fallback:Object(o.a)()},le,re))};t.default=i.a.memo(_)}}]);