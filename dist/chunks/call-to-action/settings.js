(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[12],{243:function(e,t,n){"use strict";var o=n(242),a=n.n(o),i=n(244),l=n.n(i),r=n(3);if(void 0===s)var s=[];const c=e=>{const[t,n]=Object(r.useState)([]);Object(r.useEffect)(()=>{c()},[]);const o=()=>{n({status:"loading"})},a=()=>{n({status:"active"})},i=()=>{n({status:"inactive"})},c=()=>{var t;s.includes(e.config.google.families[0])||(l.a.load({...e.config,loading:o,active:a,inactive:i}),t=e.config.google.families[0],s.includes(t)||s.push(t))};Object(r.useEffect)(()=>{const{onStatus:n,config:o}=e;void 0!==t.status&&n(t.status),o!==t.config&&c()},[void 0]);const{children:d}=e;return d||null};c.propTypes={config:a.a.object.isRequired,children:a.a.element,onStatus:a.a.func.isRequired},c.defaultProps={onStatus:()=>{}},t.a=c},244:function(e,t,n){var o;!function(){function a(e,t,n){return e.call.apply(e.bind,arguments)}function i(e,t,n){if(!e)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,o),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:i).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function d(e,t,n,o){if(t=e.c.createElement(t),n)for(var a in n)n.hasOwnProperty(a)&&("style"==a?t.style.cssText=n[a]:t.setAttribute(a,n[a]));return o&&t.appendChild(e.c.createTextNode(o)),t}function u(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t,n){t=t||[],n=n||[];for(var o=e.className.split(/\s+/),a=0;a<t.length;a+=1){for(var i=!1,l=0;l<o.length;l+=1)if(t[a]===o[l]){i=!0;break}i||o.push(t[a])}for(t=[],a=0;a<o.length;a+=1){for(i=!1,l=0;l<n.length;l+=1)if(o[a]===n[l]){i=!0;break}i||t.push(o[a])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function p(e,t){for(var n=e.className.split(/\s+/),o=0,a=n.length;o<a;o++)if(n[o]==t)return!0;return!1}function g(e,t,n){function o(){r&&a&&i&&(r(l),r=null)}t=d(e,"link",{rel:"stylesheet",href:t,media:"all"});var a=!1,i=!0,l=null,r=n||null;c?(t.onload=function(){a=!0,o()},t.onerror=function(){a=!0,l=Error("Stylesheet failed to load"),o()}):setTimeout((function(){a=!0,o()}),0),u(e,"head",t)}function h(e,t,n,o){var a=e.c.getElementsByTagName("head")[0];if(a){var i=d(e,"script",{src:t}),l=!1;return i.onload=i.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),i.onload=i.onreadystatechange=null,"HEAD"==i.parentNode.tagName&&a.removeChild(i))},a.appendChild(i),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),o||5e3),i}return null}function m(){this.a=0,this.c=null}function _(e){return e.a++,function(){e.a--,x(e)}}function v(e,t){e.c=t,x(e)}function x(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function y(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var o=e[n].replace(/['"]/g,"");-1!=o.indexOf(" ")||/^\d/.test(o)?t.push("'"+o+"'"):t.push(o)}return t.join(",")}function T(e){return e.a+e.f}function O(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function S(e){var t=4,n="n",o=null;return e&&((o=e.match(/(normal|oblique|italic)/i))&&o[1]&&(n=o[1].substr(0,1).toLowerCase()),(o=e.match(/([1-9]00|normal|bold)/i))&&o[1]&&(/bold/i.test(o[1])?t=7:/[1-9]00/.test(o[1])&&(t=parseInt(o[1].substr(0,1),10)))),n+t}function C(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=p(e.f,e.a.c("wf","active")),n=[],o=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),b(e.f,n,o)}E(e,"inactive")}function E(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,T(n)):e.h[t]())}function k(){this.c={}}function B(e,t){this.c=e,this.f=t,this.a=d(this.c,"span",{"aria-hidden":"true"},this.f)}function P(e){u(e.c,"body",e.a)}function L(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+O(e)+";font-weight:"+e.f+"00;"}function z(e,t,n,o,a,i){this.g=e,this.j=t,this.a=o,this.c=n,this.f=a||3e3,this.h=i||void 0}function A(e,t,n,o,a,i,l){this.v=e,this.B=t,this.c=n,this.a=o,this.s=l||"BESbswy",this.f={},this.w=a||3e3,this.u=i||null,this.m=this.j=this.h=this.g=null,this.g=new B(this.c,this.s),this.h=new B(this.c,this.s),this.j=new B(this.c,this.s),this.m=new B(this.c,this.s),e=L(e=new y(this.a.c+",serif",T(this.a))),this.g.a.style.cssText=e,e=L(e=new y(this.a.c+",sans-serif",T(this.a))),this.h.a.style.cssText=e,e=L(e=new y("serif",T(this.a))),this.j.a.style.cssText=e,e=L(e=new y("sans-serif",T(this.a))),this.m.a.style.cssText=e,P(this.g),P(this.h),P(this.j),P(this.m)}w.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},z.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),o=new Promise((function(o,a){!function i(){r()-n>=t.f?a():e.fonts.load(function(e){return O(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?o():setTimeout(i,25)}),(function(){a()}))}()})),a=null,i=new Promise((function(e,n){a=setTimeout(n,t.f)}));Promise.race([i,o]).then((function(){a&&(clearTimeout(a),a=null),t.g(t.a)}),(function(){t.j(t.a)}))};var H={D:"serif",C:"sans-serif"},M=null;function I(){if(null===M){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);M=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return M}function N(e,t,n){for(var o in H)if(H.hasOwnProperty(o)&&t===e.f[H[o]]&&n===e.f[H[o]])return!0;return!1}function W(e,t){setTimeout(l((function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),t(this.a)}),e),0)}function R(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}A.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,o=t.g.a.offsetWidth,a=t.h.a.offsetWidth;(n=o===t.f.serif&&a===t.f["sans-serif"])||(n=I()&&N(t,o,a)),n?r()-t.A>=t.w?I()&&N(t,o,a)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?W(t,t.v):W(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):W(t,t.v)}(this)};var U=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&b(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),E(e,"active")):F(e.a))}function V(e){this.j=e,this.a=new k,this.h=0,this.f=this.g=!0}function D(e,t,n,o,a){var i=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=a||null,r=o||{};if(0===n.length&&i)F(t.a);else{t.f+=n.length,i&&(t.j=i);var s,c=[];for(s=0;s<n.length;s++){var d=n[s],u=r[d.c],f=t.a,p=d;if(f.g&&b(f.f,[f.a.c("wf",p.c,T(p).toString(),"loading")]),E(f,"fontloading",p),f=null,null===U)if(window.FontFace){p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);U=p?42<parseInt(p[1],10):!g}else U=!1;f=U?new z(l(t.g,t),l(t.h,t),t.c,d,t.s,u):new A(l(t.g,t),l(t.h,t),t.c,d,t.s,e,u),c.push(f)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}R.prototype.g=function(e){var t=this.a;t.g&&b(t.f,[t.a.c("wf",e.c,T(e).toString(),"active")],[t.a.c("wf",e.c,T(e).toString(),"loading"),t.a.c("wf",e.c,T(e).toString(),"inactive")]),E(t,"fontactive",e),this.m=!0,G(this)},R.prototype.h=function(e){var t=this.a;if(t.g){var n=p(t.f,t.a.c("wf",e.c,T(e).toString(),"active")),o=[],a=[t.a.c("wf",e.c,T(e).toString(),"loading")];n||o.push(t.a.c("wf",e.c,T(e).toString(),"inactive")),b(t.f,o,a)}E(t,"fontinactive",e),G(this)},V.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var o=[],a=n.timeout;!function(e){e.g&&b(e.f,[e.a.c("wf","loading")]),E(e,"loading")}(t),o=function(e,t,n){var o,a=[];for(o in t)if(t.hasOwnProperty(o)){var i=e.c[o];i&&a.push(i(t[o],n))}return a}(e.a,n,e.c);var i=new R(e.c,t,a);for(e.h=o.length,t=0,n=o.length;t<n;t++)o[t].load((function(t,n,o){D(e,i,t,n,o)}))}(this,new C(this.c,e),e)},q.prototype.load=function(e){var t=this,n=t.a.projectId,o=t.a.version;if(n){var a=t.c.o;h(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(o?"?v="+o:""),(function(o){o?e([]):(a["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(a["__mti_fntLst"+n]){var o,i=a["__mti_fntLst"+n](),l=[];if(i)for(var r=0;r<i.length;r++){var s=i[r].fontfamily;null!=i[r].fontStyle&&null!=i[r].fontWeight?(o=i[r].fontStyle+i[r].fontWeight,l.push(new y(s,o))):l.push(new y(s))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},$.prototype.load=function(e){var t,n,o=this.a.urls||[],a=this.a.families||[],i=this.a.testStrings||{},l=new m;for(t=0,n=o.length;t<n;t++)g(this.c,o[t],_(l));var r=[];for(t=0,n=a.length;t<n;t++)if((o=a[t].split(":"))[1])for(var s=o[1].split(","),c=0;c<s.length;c+=1)r.push(new y(o[0],s[c]));else r.push(new y(o[0]));v(l,(function(){e(r,i)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function oe(e,t){this.c=e,this.a=t}function ae(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,n=this.c,o=new J(this.a.api,this.a.text),a=this.a.families;!function(e,t){for(var n=t.length,o=0;o<n;o++){var a=t[o].split(":");3==a.length&&e.f.push(a.pop());var i="";2==a.length&&""!=a[1]&&(i=":"),e.a.push(a.join(i))}}(o,a);var i=new X(a);!function(e){for(var t=e.f.length,n=0;n<t;n++){var o=e.f[n].split(":"),a=o[0].replace(/\+/g," "),i=["n4"];if(2<=o.length){var l;if(l=[],r=o[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var d;if((d=r[c]).match(/^[\w-]+$/))if(null==(u=ee.exec(d.toLowerCase())))d="";else{if(d=null==(d=u[2])||""==d?"n":Z[d],null==(u=u[1])||""==u)u="4";else var u=Y[u]||(isNaN(u)?"4":u.substr(0,1));d=[d,u].join("")}else d="";d&&l.push(d)}0<l.length&&(i=l),3==o.length&&(l=[],0<(o=(o=o[2])?o.split(","):l).length&&(o=Q[o[0]])&&(e.c[a]=o))}for(e.c[a]||(o=Q[a])&&(e.c[a]=o),o=0;o<i.length;o+=1)e.a.push(new y(a,i[o]))}}(i),g(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],o=0;o<t;o++)n.push(e.a[o].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(o),_(t)),v(t,(function(){e(i.a,i.c,ne)}))},oe.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?h(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var o=[],a=0;a<t.length;a+=2)for(var i=t[a],l=t[a+1],r=0;r<l.length;r++)o.push(new y(i,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(o)}}),2e3):e([])},ae.prototype.load=function(e){var t=this.f.id,n=this.c.o,o=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var a=0,i=n.fonts.length;a<i;++a){var l=n.fonts[a];o.a.push(new y(l.name,S("font-weight:"+l.weight+";font-style:"+l.style)))}e(o.a)},h(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ie=new V(window);ie.a.c.custom=function(e,t){return new $(t,e)},ie.a.c.fontdeck=function(e,t){return new ae(t,e)},ie.a.c.monotype=function(e,t){return new q(t,e)},ie.a.c.typekit=function(e,t){return new oe(t,e)},ie.a.c.google=function(e,t){return new te(t,e)};var le={load:l(ie.load,ie)};void 0===(o=function(){return le}.call(t,n,t,e))||(e.exports=o)}()},247:function(e,t,n){"use strict";var o=n(18),a=n.n(o)()((function(e){return e[1]}));a.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system,\r BlinkMacSystemFont,\r "Segoe UI",\r "Roboto",\r "Oxygen",\r "Ubuntu",\r "Cantarell",\r "Fira Sans",\r "Droid Sans",\r "Helvetica Neue",\r sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=a},248:function(e,t,n){"use strict";var o,a=n(251),i=n.n(a),l=n(1),r=n.n(l),s=n(17),c=n.n(s),d=n(247),u=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=d.a.locals||{},b.use=function(){return u++||(o=c()(d.a,f)),b},b.unuse=function(){u>0&&!--u&&(o(),o=null)};var p=b,g=n(12),h=n(2);t.a=e=>(Object(l.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(h.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(i.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:g.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(h.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help)))},531:function(e,t,n){"use strict";n.r(t);var o=n(248),a=n(2),i=n(1),l=n.n(i),r=n(11),s=n(24),c=n(243),d=n(5),u=n(16),f=n(63),b=n(21),p=n(13),g=n(22),h=n(57),m=n(41),_=n(42),v=n(6);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const w=e=>{e=e.parentProps;const{setAttributes:t,attributes:n}=e,{textAlign:w,titleColor:y,descColor:j,titleTag:T,titleFontSize:O,titleFontSizeType:S,titleFontSizeMobile:C,titleFontSizeTablet:F,titleFontFamily:E,titleFontWeight:k,titleFontSubset:B,titleLineHeightType:P,titleLineHeight:L,titleLineHeightTablet:z,titleLineHeightMobile:A,titleLoadGoogleFonts:H,descFontSize:M,descFontSizeType:I,descFontSizeMobile:N,descFontSizeTablet:W,descFontFamily:R,descFontWeight:U,descFontSubset:G,descLineHeightType:V,descLineHeight:D,descLineHeightTablet:q,descLineHeightMobile:$,descLoadGoogleFonts:J,titleSpace:K,descSpace:X,ctaPosition:Q,buttonAlign:Y,ctaType:Z,ctaText:ee,ctaLink:te,ctaTarget:ne,ctaIcon:oe,ctaIconPosition:ae,ctaIconSpace:ie,ctaFontSize:le,ctaFontSizeType:re,ctaFontSizeMobile:se,ctaFontSizeTablet:ce,ctaFontFamily:de,ctaFontWeight:ue,ctaFontSubset:fe,ctaLoadGoogleFonts:be,contentWidth:pe,ctaBtnLinkColor:ge,ctaBgHoverColor:he,ctaBgColor:me,ctaTopPadding:_e,ctaRightPadding:ve,ctaBottomPadding:xe,ctaLeftPadding:we,ctaTopPaddingTablet:ye,ctaRightPaddingTablet:je,ctaBottomPaddingTablet:Te,ctaLeftPaddingTablet:Oe,ctaTopPaddingMobile:Se,ctaRightPaddingMobile:Ce,ctaBottomPaddingMobile:Fe,ctaLeftPaddingMobile:Ee,ctaPaddingUnit:ke,mobileCTAPaddingUnit:Be,tabletCTAPaddingUnit:Pe,ctaPaddingLink:Le,ctaBorderStyle:ze,ctaBorderColor:Ae,ctaBorderhoverColor:He,ctaBorderWidth:Me,ctaBorderRadius:Ie,stack:Ne,ctaLeftSpace:We,ctaRightSpace:Re,ctaLinkHoverColor:Ue,inheritFromTheme:Ge}=n;let Ve,De,qe;if(!0===be){const e={google:{families:[de+(ue?":"+ue:"")]}};Ve=l.a.createElement(c.a,{config:e})}if(!0===H){const e={google:{families:[E+(k?":"+k:"")]}};De=l.a.createElement(c.a,{config:e})}if(!0===J){const e={google:{families:[R+(U?":"+U:"")]}};qe=l.a.createElement(c.a,{config:e})}return l.a.createElement(i.Suspense,{fallback:Object(r.a)()},l.a.createElement(d.BlockControls,{key:"controls"},l.a.createElement(d.AlignmentToolbar,{value:w,onChange:e=>t({textAlign:e})})),l.a.createElement(d.InspectorControls,null,l.a.createElement(f.a,null,l.a.createElement(b.b,b.a.general,l.a.createElement(v.PanelBody,{title:Object(a.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(g.a,{setAttributes:t,label:Object(a.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:T,label:"titleTag"},options:[{value:"h1",label:Object(a.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(a.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(a.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(a.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(a.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(a.__)("H6","ultimate-addons-for-gutenberg")}]}),"all"!==Z&&"none"!==Z&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{setAttributes:t,label:Object(a.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:Q,label:"ctaPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"right",label:Object(a.__)("Inline","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Inline","ultimate-addons-for-gutenberg")},{value:"below-title",label:Object(a.__)("Stack","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Stack","ultimate-addons-for-gutenberg")}],showIcons:!1}),("text"===Z||"button"===Z)&&l.a.createElement(l.a.Fragment,null,"right"===Q&&l.a.createElement(p.a,{label:Object(a.__)("Content Width (%)","ultimate-addons-for-gutenberg"),setAttributes:t,value:pe,onChange:e=>t({contentWidth:e}),min:0,max:100,displayUnit:!1})),Q&&"right"===Q&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{setAttributes:t,label:Object(a.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),data:{value:Y,label:"buttonAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:Object(a.__)("Top","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(a.__)("Middle","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Middle","ultimate-addons-for-gutenberg")}],showIcons:!1}),l.a.createElement(g.a,{setAttributes:t,label:Object(a.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:Ne,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(a.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(a.__)("Tablet","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(a.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(a.__)("Note: Choose on what breakpoint the CTA button will stack.","ultimate-addons-for-gutenberg")})))),l.a.createElement(v.PanelBody,{title:Object(a.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(g.a,{setAttributes:t,label:Object(a.__)("Type","ultimate-addons-for-gutenberg"),data:{value:Z,label:"ctaType"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(a.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("None","ultimate-addons-for-gutenberg")},{value:"text",label:Object(a.__)("Text","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Text","ultimate-addons-for-gutenberg")},{value:"button",label:Object(a.__)("Button","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Button","ultimate-addons-for-gutenberg")},{value:"all",label:Object(a.__)("Complete Box","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Complete Box","ultimate-addons-for-gutenberg")}],showIcons:!1}),("text"===Z||"button"===Z)&&l.a.createElement(l.a.Fragment,null,l.a.createElement(v.TextControl,{label:Object(a.__)("Text","ultimate-addons-for-gutenberg"),value:ee,onChange:e=>t({ctaText:e})})),"none"!==Z&&l.a.createElement(l.a.Fragment,null,l.a.createElement(v.TextControl,{label:Object(a.__)("Link","ultimate-addons-for-gutenberg"),value:te,onChange:e=>t({ctaLink:e})}),l.a.createElement(v.ToggleControl,{label:Object(a.__)("Open in new Window","ultimate-addons-for-gutenberg"),checked:ne,onChange:()=>t({ctaTarget:!ne})})),"button"===Z&&l.a.createElement(l.a.Fragment,null,l.a.createElement(v.ToggleControl,{label:Object(a.__)("Inherit from Theme","ultimate-addons-for-gutenberg"),checked:Ge,onChange:()=>t({inheritFromTheme:!Ge})})),"all"!==Z&&"none"!==Z&&l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{label:Object(a.__)("Icon","ultimate-addons-for-gutenberg"),value:oe,onChange:e=>t({ctaIcon:e})}),""!==oe&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{setAttributes:t,label:Object(a.__)("Icon Position","ultimate-addons-for-gutenberg"),data:{value:ae,label:"ctaIconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"before",label:Object(a.__)("Before Text","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(a.__)("After Text","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("After Text","ultimate-addons-for-gutenberg")}],showIcons:!1}),l.a.createElement(p.a,{label:Object(a.__)("Icon Spacing","ultimate-addons-for-gutenberg"),setAttributes:t,value:ie,onChange:e=>t({ctaIconSpace:e}),min:0,max:50,displayUnit:!1}))))),l.a.createElement(b.b,b.a.style,l.a.createElement(v.PanelBody,{title:Object(a.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:t,loadGoogleFonts:{value:H,label:"titleLoadGoogleFonts"},fontFamily:{value:E,label:"titleFontFamily"},fontWeight:{value:k,label:"titleFontWeight"},fontSubset:{value:B,label:"titleFontSubset"},fontSizeType:{value:S,label:"titleFontSizeType"},fontSize:{value:O,label:"titleFontSize"},fontSizeMobile:{value:C,label:"titleFontSizeMobile"},fontSizeTablet:{value:F,label:"titleFontSizeTablet"},lineHeightType:{value:P,label:"titleLineHeightType"},lineHeight:{value:L,label:"titleLineHeight"},lineHeightMobile:{value:A,label:"titleLineHeightMobile"},lineHeightTablet:{value:z,label:"titleLineHeightTablet"}}),l.a.createElement(u.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:y||"",onColorChange:e=>t({titleColor:e})})),l.a.createElement(v.PanelBody,{title:Object(a.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:t,loadGoogleFonts:{value:J,label:"descLoadGoogleFonts"},fontFamily:{value:R,label:"descFontFamily"},fontWeight:{value:U,label:"descFontWeight"},fontSubset:{value:G,label:"descFontSubset"},fontSizeType:{value:I,label:"descFontSizeType"},fontSize:{value:M,label:"descFontSize"},fontSizeMobile:{value:N,label:"descFontSizeMobile"},fontSizeTablet:{value:W,label:"descFontSizeTablet"},lineHeightType:{value:V,label:"descLineHeightType"},lineHeight:{value:D,label:"descLineHeight"},lineHeightMobile:{value:$,label:"descLineHeightMobile"},lineHeightTablet:{value:q,label:"descLineHeightTablet"}}),l.a.createElement(u.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:j||"",onColorChange:e=>t({descColor:e})})),!Ge&&"all"!==Z&&"none"!==Z&&l.a.createElement(v.PanelBody,{title:Object(a.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1},("text"===Z||"button"===Z)&&l.a.createElement(l.a.Fragment,null,!Ge&&"button"===Z||"text"===Z&&l.a.createElement(s.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:t,loadGoogleFonts:{value:be,label:"ctaLoadGoogleFonts"},fontFamily:{value:de,label:"ctaFontFamily"},fontWeight:{value:ue,label:"ctaFontWeight"},fontSubset:{value:fe,label:"ctaFontSubset"},fontSizeType:{value:re,label:"ctaFontSizeType"},fontSize:{value:le,label:"ctaFontSize"},fontSizeMobile:{value:se,label:"ctaFontSizeMobile"},fontSizeTablet:{value:ce,label:"ctaFontSizeTablet"},disableLineHeight:!0})),"text"===Z&&l.a.createElement(_.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{label:Object(a.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:ge||"",onColorChange:e=>t({ctaBtnLinkColor:e})})),hover:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{label:Object(a.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ue||"",onColorChange:e=>t({ctaLinkHoverColor:e})})),disableBottomSeparator:!0}),"button"===Z&&!Ge&&l.a.createElement(l.a.Fragment,null,l.a.createElement(_.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{label:Object(a.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:ge||"",onColorChange:e=>t({ctaBtnLinkColor:e})}),l.a.createElement(u.a,{label:Object(a.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:me||"",onColorChange:e=>t({ctaBgColor:e})})),hover:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{label:Object(a.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ue||"",onColorChange:e=>t({ctaLinkHoverColor:e})}),l.a.createElement(u.a,{label:Object(a.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:he||"",onColorChange:e=>t({ctaBgHoverColor:e})})),disableBottomSeparator:!0}),l.a.createElement(h.a,{setAttributes:t,borderStyle:{value:ze,label:"ctaBorderStyle",title:Object(a.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Me,label:"ctaBorderWidth",title:Object(a.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Ie,label:"ctaBorderRadius",title:Object(a.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Ae,label:"ctaBorderColor",title:Object(a.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:He,label:"ctaBorderhoverColor",title:Object(a.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}),l.a.createElement(m.a,x({},e,{label:Object(a.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:_e,label:"ctaTopPadding"},valueRight:{value:ve,label:"ctaRightPadding"},valueBottom:{value:xe,label:"ctaBottomPadding"},valueLeft:{value:we,label:"ctaLeftPadding"},valueTopTablet:{value:ye,label:"ctaTopPaddingTablet"},valueRightTablet:{value:je,label:"ctaRightPaddingTablet"},valueBottomTablet:{value:Te,label:"ctaBottomPaddingTablet"},valueLeftTablet:{value:Oe,label:"ctaLeftPaddingTablet"},valueTopMobile:{value:Se,label:"ctaTopPaddingMobile"},valueRightMobile:{value:Ce,label:"ctaRightPaddingMobile"},valueBottomMobile:{value:Fe,label:"ctaBottomPaddingMobile"},valueLeftMobile:{value:Ee,label:"ctaLeftPaddingMobile"},unit:{value:ke,label:"ctaPaddingUnit"},mUnit:{value:Be,label:"mobileCTAPaddingUnit"},tUnit:{value:Pe,label:"tabletCTAPaddingUnit"},attributes:n,setAttributes:t,link:{value:Le,label:"ctaPaddingLink"}})))),l.a.createElement(v.PanelBody,{title:Object(a.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(p.a,{label:Object(a.__)("Heading Bottom Margin (px)","ultimate-addons-for-gutenberg"),setAttributes:t,value:K,onChange:e=>t({titleSpace:e}),min:0,max:500,displayUnit:!1}),"right"!==Q&&l.a.createElement(p.a,{label:Object(a.__)("Description Bottom Margin (px)","ultimate-addons-for-gutenberg"),setAttributes:t,value:X,onChange:e=>t({descSpace:e}),min:0,max:500,displayUnit:!1}),"left"===w&&"right"===Q&&l.a.createElement(p.a,{label:Object(a.__)("Content Left Margin (px)","ultimate-addons-for-gutenberg"),setAttributes:t,value:We,onChange:e=>t({ctaLeftSpace:e}),min:0,max:500,displayUnit:!1}),"right"===w&&"right"===Q&&l.a.createElement(p.a,{label:Object(a.__)("Content Right Margin (px)","ultimate-addons-for-gutenberg"),setAttributes:t,value:Re,onChange:e=>t({ctaRightSpace:e}),min:0,max:500,displayUnit:!1}))),l.a.createElement(b.b,x({},b.a.advance,{parentProps:e})))),Ve,De,qe)};t.default=l.a.memo(w)}}]);