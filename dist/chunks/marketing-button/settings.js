(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[72],{243:function(e,t,n){"use strict";var i=n(242),o=n.n(i),a=n(244),r=n.n(a),l=n(3);if(void 0===s)var s=[];const c=e=>{const[t,n]=Object(l.useState)([]);Object(l.useEffect)(()=>{c()},[]);const i=()=>{n({status:"loading"})},o=()=>{n({status:"active"})},a=()=>{n({status:"inactive"})},c=()=>{var t;s.includes(e.config.google.families[0])||(r.a.load({...e.config,loading:i,active:o,inactive:a}),t=e.config.google.families[0],s.includes(t)||s.push(t))};Object(l.useEffect)(()=>{const{onStatus:n,config:i}=e;void 0!==t.status&&n(t.status),i!==t.config&&c()},[void 0]);const{children:d}=e;return d||null};c.propTypes={config:o.a.object.isRequired,children:o.a.element,onStatus:o.a.func.isRequired},c.defaultProps={onStatus:()=>{}},t.a=c},244:function(e,t,n){var i;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function a(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function r(e,t,n){return(r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a).apply(null,arguments)}var l=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function d(e,t,n,i){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return i&&t.appendChild(e.c.createTextNode(i)),t}function u(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e,t,n){t=t||[],n=n||[];for(var i=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var a=!1,r=0;r<i.length;r+=1)if(t[o]===i[r]){a=!0;break}a||i.push(t[o])}for(t=[],o=0;o<i.length;o+=1){for(a=!1,r=0;r<n.length;r+=1)if(i[o]===n[r]){a=!0;break}a||t.push(i[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function b(e,t){for(var n=e.className.split(/\s+/),i=0,o=n.length;i<o;i++)if(n[i]==t)return!0;return!1}function g(e,t,n){function i(){l&&o&&a&&(l(r),l=null)}t=d(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,a=!0,r=null,l=n||null;c?(t.onload=function(){o=!0,i()},t.onerror=function(){o=!0,r=Error("Stylesheet failed to load"),i()}):setTimeout((function(){o=!0,i()}),0),u(e,"head",t)}function h(e,t,n,i){var o=e.c.getElementsByTagName("head")[0];if(o){var a=d(e,"script",{src:t}),r=!1;return a.onload=a.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,n&&n(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout((function(){r||(r=!0,n&&n(Error("Script load timeout")))}),i||5e3),a}return null}function m(){this.a=0,this.c=null}function _(e){return e.a++,function(){e.a--,x(e)}}function v(e,t){e.c=t,x(e)}function x(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function y(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var i=e[n].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?t.push("'"+i+"'"):t.push(i)}return t.join(",")}function O(e){return e.a+e.f}function T(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function C(e){var t=4,n="n",i=null;return e&&((i=e.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=e.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?t=7:/[1-9]00/.test(i[1])&&(t=parseInt(i[1].substr(0,1),10)))),n+t}function S(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function k(e){if(e.g){var t=b(e.f,e.a.c("wf","active")),n=[],i=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),p(e.f,n,i)}E(e,"inactive")}function E(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,O(n)):e.h[t]())}function B(){this.c={}}function F(e,t){this.c=e,this.f=t,this.a=d(this.c,"span",{"aria-hidden":"true"},this.f)}function H(e){u(e.c,"body",e.a)}function z(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+T(e)+";font-weight:"+e.f+"00;"}function L(e,t,n,i,o,a){this.g=e,this.j=t,this.a=i,this.c=n,this.f=o||3e3,this.h=a||void 0}function A(e,t,n,i,o,a,r){this.v=e,this.B=t,this.c=n,this.a=i,this.s=r||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new F(this.c,this.s),this.h=new F(this.c,this.s),this.j=new F(this.c,this.s),this.m=new F(this.c,this.s),e=z(e=new y(this.a.c+",serif",O(this.a))),this.g.a.style.cssText=e,e=z(e=new y(this.a.c+",sans-serif",O(this.a))),this.h.a.style.cssText=e,e=z(e=new y("serif",O(this.a))),this.j.a.style.cssText=e,e=z(e=new y("sans-serif",O(this.a))),this.m.a.style.cssText=e,H(this.g),H(this.h),H(this.j),H(this.m)}w.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},L.prototype.start=function(){var e=this.c.o.document,t=this,n=l(),i=new Promise((function(i,o){!function a(){l()-n>=t.f?o():e.fonts.load(function(e){return T(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?i():setTimeout(a,25)}),(function(){o()}))}()})),o=null,a=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([a,i]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var P={D:"serif",C:"sans-serif"},M=null;function N(){if(null===M){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);M=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return M}function I(e,t,n){for(var i in P)if(P.hasOwnProperty(i)&&t===e.f[P[i]]&&n===e.f[P[i]])return!0;return!1}function U(e,t){setTimeout(r((function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),t(this.a)}),e),0)}function R(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}A.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=l(),function e(t){var n,i=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=i===t.f.serif&&o===t.f["sans-serif"])||(n=N()&&I(t,i,o)),n?l()-t.A>=t.w?N()&&I(t,i,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?U(t,t.v):U(t,t.B):function(t){setTimeout(r((function(){e(this)}),t),50)}(t):U(t,t.v)}(this)};var W=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&p(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),E(e,"active")):k(e.a))}function V(e){this.j=e,this.a=new B,this.h=0,this.f=this.g=!0}function D(e,t,n,i,o){var a=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,l=i||{};if(0===n.length&&a)k(t.a);else{t.f+=n.length,a&&(t.j=a);var s,c=[];for(s=0;s<n.length;s++){var d=n[s],u=l[d.c],f=t.a,b=d;if(f.g&&p(f.f,[f.a.c("wf",b.c,O(b).toString(),"loading")]),E(f,"fontloading",b),f=null,null===W)if(window.FontFace){b=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);W=b?42<parseInt(b[1],10):!g}else W=!1;f=W?new L(r(t.g,t),r(t.h,t),t.c,d,t.s,u):new A(r(t.g,t),r(t.h,t),t.c,d,t.s,e,u),c.push(f)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}R.prototype.g=function(e){var t=this.a;t.g&&p(t.f,[t.a.c("wf",e.c,O(e).toString(),"active")],[t.a.c("wf",e.c,O(e).toString(),"loading"),t.a.c("wf",e.c,O(e).toString(),"inactive")]),E(t,"fontactive",e),this.m=!0,G(this)},R.prototype.h=function(e){var t=this.a;if(t.g){var n=b(t.f,t.a.c("wf",e.c,O(e).toString(),"active")),i=[],o=[t.a.c("wf",e.c,O(e).toString(),"loading")];n||i.push(t.a.c("wf",e.c,O(e).toString(),"inactive")),p(t.f,i,o)}E(t,"fontinactive",e),G(this)},V.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var i=[],o=n.timeout;!function(e){e.g&&p(e.f,[e.a.c("wf","loading")]),E(e,"loading")}(t),i=function(e,t,n){var i,o=[];for(i in t)if(t.hasOwnProperty(i)){var a=e.c[i];a&&o.push(a(t[i],n))}return o}(e.a,n,e.c);var a=new R(e.c,t,o);for(e.h=i.length,t=0,n=i.length;t<n;t++)i[t].load((function(t,n,i){D(e,a,t,n,i)}))}(this,new S(this.c,e),e)},q.prototype.load=function(e){var t=this,n=t.a.projectId,i=t.a.version;if(n){var o=t.c.o;h(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(i?"?v="+i:""),(function(i){i?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var i,a=o["__mti_fntLst"+n](),r=[];if(a)for(var l=0;l<a.length;l++){var s=a[l].fontfamily;null!=a[l].fontStyle&&null!=a[l].fontWeight?(i=a[l].fontStyle+a[l].fontWeight,r.push(new y(s,i))):r.push(new y(s))}e(r)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},$.prototype.load=function(e){var t,n,i=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},r=new m;for(t=0,n=i.length;t<n;t++)g(this.c,i[t],_(r));var l=[];for(t=0,n=o.length;t<n;t++)if((i=o[t].split(":"))[1])for(var s=i[1].split(","),c=0;c<s.length;c+=1)l.push(new y(i[0],s[c]));else l.push(new y(i[0]));v(r,(function(){e(l,a)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ie(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,n=this.c,i=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,i=0;i<n;i++){var o=t[i].split(":");3==o.length&&e.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),e.a.push(o.join(a))}}(i,o);var a=new X(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var i=e.f[n].split(":"),o=i[0].replace(/\+/g," "),a=["n4"];if(2<=i.length){var r;if(r=[],l=i[1])for(var l,s=(l=l.split(",")).length,c=0;c<s;c++){var d;if((d=l[c]).match(/^[\w-]+$/))if(null==(u=ee.exec(d.toLowerCase())))d="";else{if(d=null==(d=u[2])||""==d?"n":Z[d],null==(u=u[1])||""==u)u="4";else var u=Y[u]||(isNaN(u)?"4":u.substr(0,1));d=[d,u].join("")}else d="";d&&r.push(d)}0<r.length&&(a=r),3==i.length&&(r=[],0<(i=(i=i[2])?i.split(","):r).length&&(i=Q[i[0]])&&(e.c[o]=i))}for(e.c[o]||(i=Q[o])&&(e.c[o]=i),i=0;i<a.length;i+=1)e.a.push(new y(o,a[i]))}}(a),g(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],i=0;i<t;i++)n.push(e.a[i].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(i),_(t)),v(t,(function(){e(a.a,a.c,ne)}))},ie.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?h(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var i=[],o=0;o<t.length;o+=2)for(var a=t[o],r=t[o+1],l=0;l<r.length;l++)i.push(new y(a,r[l]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(i)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,i=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,a=n.fonts.length;o<a;++o){var r=n.fonts[o];i.a.push(new y(r.name,C("font-weight:"+r.weight+";font-style:"+r.style)))}e(i.a)},h(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ae=new V(window);ae.a.c.custom=function(e,t){return new $(t,e)},ae.a.c.fontdeck=function(e,t){return new oe(t,e)},ae.a.c.monotype=function(e,t){return new q(t,e)},ae.a.c.typekit=function(e,t){return new ie(t,e)},ae.a.c.google=function(e,t){return new te(t,e)};var re={load:r(ae.load,ae)};void 0===(i=function(){return re}.call(t,n,t,e))||(e.exports=i)}()},249:function(e,t,n){"use strict";var i=n(18),o=n.n(i)()((function(e){return e[1]}));o.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system,\r BlinkMacSystemFont,\r "Segoe UI",\r "Roboto",\r "Oxygen",\r "Ubuntu",\r "Cantarell",\r "Fira Sans",\r "Droid Sans",\r "Helvetica Neue",\r sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=o},250:function(e,t,n){"use strict";var i,o=n(251),a=n.n(o),r=n(1),l=n.n(r),s=n(17),c=n.n(s),d=n(249),u=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return u++||(i=c()(d.a,f)),p},p.unuse=function(){u>0&&!--u&&(i(),i=null)};var b=p,g=n(12),h=n(2);t.a=e=>(Object(r.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]),l.a.createElement("div",{className:"components-base-control uag-icon-picker"},l.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(h.__)("Icon","ultimate-addons-for-gutenberg")),l.a.createElement(a.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:g.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(h.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&l.a.createElement("p",{className:"uag-control-help-notice"},e.help)))},538:function(e,t,n){"use strict";n.r(t);var i=n(250),o=n(2),a=n(12),r=n(1),l=n.n(r),s=n(11),c=n(24),d=n(243),u=n(16),f=n(63),p=n(21),b=n(41),g=n(13),h=n(64),m=n(57),_=n(22),v=n(42),x=n(5),w=n(6);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}const j=e=>{e=e.parentProps;const[t,n]=Object(r.useState)(!1),{attributes:j,setAttributes:O,deviceType:T}=e,{align:C,textAlign:S,link:k,linkTarget:E,titleSpace:B,icon:F,iconPosition:H,iconSpace:z,iconFontSize:L,iconFontSizeMobile:A,iconFontSizeTablet:P,titleColor:M,titleHoverColor:N,prefixColor:I,prefixHoverColor:U,iconColor:R,iconHoverColor:W,borderStyle:G,borderWidth:V,borderRadius:D,borderColor:q,borderHoverColor:$,backgroundType:J,backgroundColor:K,backgroundHoverColor:X,gradientColor1:Q,gradientColor2:Y,gradientLocation1:Z,gradientLocation2:ee,gradientType:te,gradientAngle:ne,backgroundOpacity:ie,backgroundHoverOpacity:oe,titleFontFamily:ae,titleFontWeight:re,titleFontSubset:le,titleFontSize:se,titleFontSizeType:ce,titleFontSizeTablet:de,titleFontSizeMobile:ue,titleLineHeightType:fe,titleLineHeight:pe,titleLineHeightTablet:be,titleLineHeightMobile:ge,titleTag:he,prefixFontFamily:me,prefixFontWeight:_e,prefixFontSubset:ve,prefixFontSize:xe,prefixFontSizeType:we,prefixFontSizeTablet:ye,prefixFontSizeMobile:je,prefixLineHeightType:Oe,prefixLineHeight:Te,prefixLineHeightTablet:Ce,prefixLineHeightMobile:Se,paddingBtnUnit:ke,spacingLink:Ee,mobilePaddingBtnUnit:Be,tabletPaddingBtnUnit:Fe,paddingBtnTop:He,paddingBtnBottom:ze,paddingBtnLeft:Le,paddingBtnRight:Ae,paddingBtnTopTablet:Pe,paddingBtnRightTablet:Me,paddingBtnBottomTablet:Ne,paddingBtnLeftTablet:Ie,paddingBtnTopMobile:Ue,paddingBtnRightMobile:Re,paddingBtnBottomMobile:We,paddingBtnLeftMobile:Ge,titleLoadGoogleFonts:Ve,prefixLoadGoogleFonts:De}=j;let qe,$e;if(!0===Ve){const e={google:{families:[ae+(re?":"+re:"")]}};qe=l.a.createElement(d.a,{config:e})}if(!0===De){const e={google:{families:[me+(_e?":"+_e:"")]}};$e=l.a.createElement(d.a,{config:e})}const Je=t&&l.a.createElement(w.Popover,{position:"bottom center",onClose:()=>n(!1)},l.a.createElement(x.__experimentalLinkControl,{value:{url:k,opensInNewTab:E},onChange:({url:e="",opensInNewTab:t})=>{O({link:e}),O({linkTarget:t}),O({linkTarget:t})}}));return l.a.createElement(r.Suspense,{fallback:Object(s.a)()},l.a.createElement(x.BlockControls,null,l.a.createElement(x.BlockAlignmentToolbar,{value:C,onChange:e=>{O({align:e})},controls:["left","center","right","full"]}),l.a.createElement(w.ToolbarGroup,null,l.a.createElement(w.ToolbarButton,{icon:"admin-links",name:"link",title:Object(o.__)("Link","ultimate-addons-for-gutenberg"),onClick:()=>n(!0)}))),Je,l.a.createElement(x.InspectorControls,null,l.a.createElement(f.a,null,l.a.createElement(p.b,p.a.general,l.a.createElement(l.a.Fragment,null,l.a.createElement(w.PanelBody,{title:Object(o.__)("Content"),initialOpen:!0},l.a.createElement(_.a,{setAttributes:O,label:Object(o.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:S,label:"textAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:l.a.createElement(w.Icon,{icon:Object(a.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:l.a.createElement(w.Icon,{icon:Object(a.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:l.a.createElement(w.Icon,{icon:Object(a.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),l.a.createElement(w.PanelBody,{title:Object(o.__)("Heading"),initialOpen:!1},l.a.createElement(_.a,{setAttributes:O,label:Object(o.__)("Tag","ultimate-addons-for-gutenberg"),data:{value:he,label:"titleTag"},options:[{value:"h1",label:Object(o.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(o.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(o.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(o.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(o.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(o.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(o.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(o.__)("P","ultimate-addons-for-gutenberg")}]}))),l.a.createElement(w.PanelBody,{title:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(i.a,{label:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),value:F,onChange:e=>O({icon:e})}),""!==F&&l.a.createElement(l.a.Fragment,null,l.a.createElement(_.a,{setAttributes:O,label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),data:{value:H,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"before",label:Object(o.__)("Before Text","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(o.__)("After Text","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("After Text","ultimate-addons-for-gutenberg")}]}),l.a.createElement(g.a,{label:Object(o.__)("Gap Between Icon And Text","ultimate-addons-for-gutenberg"),setAttributes:O,value:z,onChange:e=>O({iconSpace:e}),min:0,max:50,displayUnit:!1}),l.a.createElement(h.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:L,label:"iconFontSize"},tablet:{value:P,label:"iconFontSizeTablet"},mobile:{value:A,label:"iconFontSizeMobile"}},min:0,max:500,displayUnit:!1,setAttributes:O})))),l.a.createElement(p.b,p.a.style,l.a.createElement(w.PanelBody,{title:Object(o.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(g.a,{label:Object(o.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:O,value:B,onChange:e=>O({titleSpace:e}),min:0,max:20,displayUnit:!1}),l.a.createElement(c.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:O,loadGoogleFonts:{value:Ve,label:"titleLoadGoogleFonts"},fontFamily:{value:ae,label:"titleFontFamily"},fontWeight:{value:re,label:"titleFontWeight"},fontSubset:{value:le,label:"titleFontSubset"},fontSizeType:{value:ce,label:"titleFontSizeType"},fontSize:{value:se,label:"titleFontSize"},fontSizeMobile:{value:ue,label:"titleFontSizeMobile"},fontSizeTablet:{value:de,label:"titleFontSizeTablet"},lineHeightType:{value:fe,label:"titleLineHeightType"},lineHeight:{value:pe,label:"titleLineHeight"},lineHeightMobile:{value:ge,label:"titleLineHeightMobile"},lineHeightTablet:{value:be,label:"titleLineHeightTablet"}}),l.a.createElement(v.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:e=>O({titleColor:e})}),hover:l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:N||"",onColorChange:e=>O({titleHoverColor:e})}),disableBottomSeparator:!0})),l.a.createElement(w.PanelBody,{title:Object(o.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(c.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:O,loadGoogleFonts:{value:De,label:"prefixLoadGoogleFonts"},fontFamily:{value:me,label:"prefixFontFamily"},fontWeight:{value:_e,label:"prefixFontWeight"},fontSubset:{value:ve,label:"prefixFontSubset"},fontSizeType:{value:we,label:"prefixFontSizeType"},fontSize:{value:xe,label:"prefixFontSize"},fontSizeMobile:{value:je,label:"prefixFontSizeMobile"},fontSizeTablet:{value:ye,label:"prefixFontSizeTablet"},lineHeightType:{value:Oe,label:"prefixLineHeightType"},lineHeight:{value:Te,label:"prefixLineHeight"},lineHeightMobile:{value:Se,label:"prefixLineHeightMobile"},lineHeightTablet:{value:Ce,label:"prefixLineHeightTablet"}}),l.a.createElement(v.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:I||"",onColorChange:e=>O({prefixColor:e})}),hover:l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:U||"",onColorChange:e=>O({prefixHoverColor:e})}),disableBottomSeparator:!0})),""!==F&&l.a.createElement(w.PanelBody,{title:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(v.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:R||"",onColorChange:e=>O({iconColor:e})}),hover:l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:W||"",onColorChange:e=>O({iconHoverColor:e})}),disableBottomSeparator:!0})),l.a.createElement(w.PanelBody,{title:Object(o.__)("Background"),initialOpen:!1},l.a.createElement(_.a,{setAttributes:O,label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),data:{value:J,label:"backgroundType"},className:"uagb-multi-button-alignment-control",options:[{value:"transparent",label:Object(o.__)("Transparent","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Transparent","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")}]}),"color"===J&&l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:K||"",onColorChange:e=>O({backgroundColor:e})}),l.a.createElement(g.a,{label:Object(o.__)("Opacity","ultimate-addons-for-gutenberg"),setAttributes:O,value:ie,onChange:e=>O({backgroundOpacity:e}),min:0,max:100,displayUnit:!1})),hover:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:X||"",onColorChange:e=>O({backgroundHoverColor:e})}),l.a.createElement(g.a,{label:Object(o.__)("Opacity","ultimate-addons-for-gutenberg"),setAttributes:O,value:oe,onChange:e=>O({backgroundHoverOpacity:e}),min:0,max:100,displayUnit:!1})),disableBottomSeparator:!0})),"gradient"===J&&l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{label:Object(o.__)("Color 1","ultimate-addons-for-gutenberg"),colorValue:Y||"",onColorChange:e=>O({gradientColor2:e})}),l.a.createElement(u.a,{label:Object(o.__)("Color 2","ultimate-addons-for-gutenberg"),colorValue:Q||"",onColorChange:e=>O({gradientColor1:e})}),l.a.createElement(_.a,{setAttributes:O,label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),data:{value:te,label:"gradientType"},className:"uagb-multi-button-alignment-control",options:[{value:"linear",label:Object(o.__)("Linear","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Linear","ultimate-addons-for-gutenberg")},{value:"radial",label:Object(o.__)("Radial","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Radial","ultimate-addons-for-gutenberg")}]}),l.a.createElement(g.a,{label:Object(o.__)("Location 1","ultimate-addons-for-gutenberg"),setAttributes:O,value:Z,onChange:e=>O({gradientLocation1:e}),min:0,max:100,displayUnit:!1}),l.a.createElement(g.a,{label:Object(o.__)("Location 2","ultimate-addons-for-gutenberg"),setAttributes:O,value:ee,onChange:e=>O({gradientLocation2:e}),min:0,max:100,displayUnit:!1}),l.a.createElement(g.a,{label:Object(o.__)("Opacity","ultimate-addons-for-gutenberg"),setAttributes:O,value:ie,onChange:e=>O({backgroundOpacity:e}),min:0,max:100,displayUnit:!1}),"linear"===te&&l.a.createElement(g.a,{label:Object(o.__)("Angle","ultimate-addons-for-gutenberg"),setAttributes:O,value:ne,onChange:e=>O({gradientAngle:e}),min:0,max:360,displayUnit:!1}))),l.a.createElement(w.PanelBody,{title:Object(o.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(m.a,{setAttributes:O,borderStyle:{value:G,label:"borderStyle",title:Object(o.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:V,label:"borderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:D,label:"borderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:q,label:"borderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:$,label:"borderHoverColor",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),l.a.createElement(w.PanelBody,{title:Object(o.__)("Spacing"),initialOpen:!1},l.a.createElement(b.a,y({},e,{label:Object(o.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:He,label:"paddingBtnTop"},valueRight:{value:Ae,label:"paddingBtnRight"},valueBottom:{value:ze,label:"paddingBtnBottom"},valueLeft:{value:Le,label:"paddingBtnLeft"},valueTopTablet:{value:Pe,label:"paddingBtnTopTablet"},valueRightTablet:{value:Me,label:"paddingBtnRightTablet"},valueBottomTablet:{value:Ne,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:Ie,label:"paddingBtnLeftTablet"},valueTopMobile:{value:Ue,label:"paddingBtnTopMobile"},valueRightMobile:{value:Re,label:"paddingBtnRightMobile"},valueBottomMobile:{value:We,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:Ge,label:"paddingBtnLeftMobile"},unit:{value:ke,label:"paddingBtnUnit"},mUnit:{value:Be,label:"mobilePaddingBtnUnit"},tUnit:{value:Fe,label:"tabletPaddingBtnUnit"},deviceType:T,attributes:j,setAttributes:O,link:{value:Ee,label:"spacingLink"},units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})))),l.a.createElement(p.b,y({},p.a.advance,{parentProps:e})))),qe,$e)};t.default=l.a.memo(j)}}]);