(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[70],{269:function(e,t,n){"use strict";var i=n(32),o=n.n(i),a=n(270),l=n.n(a),r=n(3);if(void 0===s)var s=[];const c=e=>{const[t,n]=Object(r.useState)([]);Object(r.useEffect)(()=>{c()},[]),Object(r.useEffect)(()=>{const{onStatus:n,config:i}=e;void 0!==t.status&&n(t.status),i!==t.config&&c()},[e]);const i=()=>{n({status:"loading"})},o=()=>{n({status:"active"})},a=()=>{n({status:"inactive"})},c=()=>{var t;s.includes(e.config.google.families[0])||(l.a.load({...e.config,loading:i,active:o,inactive:a}),t=e.config.google.families[0],s.includes(t)||s.push(t))},{children:d}=e;return d||null};c.propTypes={config:o.a.object.isRequired,children:o.a.element,onStatus:o.a.func.isRequired},c.defaultProps={onStatus:()=>{}},t.a=c},270:function(e,t,n){var i;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function a(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function d(e,t,n,i){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return i&&t.appendChild(e.c.createTextNode(i)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function u(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e,t,n){t=t||[],n=n||[];for(var i=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var a=!1,l=0;l<i.length;l+=1)if(t[o]===i[l]){a=!0;break}a||i.push(t[o])}for(t=[],o=0;o<i.length;o+=1){for(a=!1,l=0;l<n.length;l+=1)if(i[o]===n[l]){a=!0;break}a||t.push(i[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(e,t){for(var n=e.className.split(/\s+/),i=0,o=n.length;i<o;i++)if(n[i]==t)return!0;return!1}function b(e,t,n){function i(){r&&o&&a&&(r(l),r=null)}t=d(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,a=!0,l=null,r=n||null;c?(t.onload=function(){o=!0,i()},t.onerror=function(){o=!0,l=Error("Stylesheet failed to load"),i()}):setTimeout((function(){o=!0,i()}),0),f(e,"head",t)}function h(e,t,n,i){var o=e.c.getElementsByTagName("head")[0];if(o){var a=d(e,"script",{src:t}),l=!1;return a.onload=a.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),i||5e3),a}return null}function m(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,x(e)}}function _(e,t){e.c=t,x(e)}function x(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function y(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function T(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var i=e[n].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?t.push("'"+i+"'"):t.push(i)}return t.join(",")}function P(e){return e.a+e.f}function j(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function S(e){var t=4,n="n",i=null;return e&&((i=e.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=e.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?t=7:/[1-9]00/.test(i[1])&&(t=parseInt(i[1].substr(0,1),10)))),n+t}function k(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function C(e){if(e.g){var t=g(e.f,e.a.c("wf","active")),n=[],i=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),p(e.f,n,i)}O(e,"inactive")}function O(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,P(n)):e.h[t]())}function F(){this.c={}}function E(e,t){this.c=e,this.f=t,this.a=d(this.c,"span",{"aria-hidden":"true"},this.f)}function L(e){f(e.c,"body",e.a)}function M(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(e.c)+";font-style:"+j(e)+";font-weight:"+e.f+"00;"}function z(e,t,n,i,o,a){this.g=e,this.j=t,this.a=i,this.c=n,this.f=o||3e3,this.h=a||void 0}function B(e,t,n,i,o,a,l){this.v=e,this.B=t,this.c=n,this.a=i,this.s=l||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new E(this.c,this.s),this.h=new E(this.c,this.s),this.j=new E(this.c,this.s),this.m=new E(this.c,this.s),e=M(e=new y(this.a.c+",serif",P(this.a))),this.g.a.style.cssText=e,e=M(e=new y(this.a.c+",sans-serif",P(this.a))),this.h.a.style.cssText=e,e=M(e=new y("serif",P(this.a))),this.j.a.style.cssText=e,e=M(e=new y("sans-serif",P(this.a))),this.m.a.style.cssText=e,L(this.g),L(this.h),L(this.j),L(this.m)}w.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},z.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),i=new Promise((function(i,o){!function a(){r()-n>=t.f?o():e.fonts.load(function(e){return j(e)+" "+e.f+"00 300px "+T(e.c)}(t.a),t.h).then((function(e){1<=e.length?i():setTimeout(a,25)}),(function(){o()}))}()})),o=null,a=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([a,i]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var H={D:"serif",C:"sans-serif"},A=null;function U(){if(null===A){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);A=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return A}function R(e,t,n){for(var i in H)if(H.hasOwnProperty(i)&&t===e.f[H[i]]&&n===e.f[H[i]])return!0;return!1}function N(e,t){setTimeout(l((function(){u(this.g.a),u(this.h.a),u(this.j.a),u(this.m.a),t(this.a)}),e),0)}function D(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}B.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,i=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=i===t.f.serif&&o===t.f["sans-serif"])||(n=U()&&R(t,i,o)),n?r()-t.A>=t.w?U()&&R(t,i,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?N(t,t.v):N(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):N(t,t.v)}(this)};var I=null;function W(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&p(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),O(e,"active")):C(e.a))}function G(e){this.j=e,this.a=new F,this.h=0,this.f=this.g=!0}function V(e,t,n,i,o){var a=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=i||{};if(0===n.length&&a)C(t.a);else{t.f+=n.length,a&&(t.j=a);var s,c=[];for(s=0;s<n.length;s++){var d=n[s],f=r[d.c],u=t.a,g=d;if(u.g&&p(u.f,[u.a.c("wf",g.c,P(g).toString(),"loading")]),O(u,"fontloading",g),u=null,null===I)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var b=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);I=g?42<parseInt(g[1],10):!b}else I=!1;u=I?new z(l(t.g,t),l(t.h,t),t.c,d,t.s,f):new B(l(t.g,t),l(t.h,t),t.c,d,t.s,e,f),c.push(u)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}D.prototype.g=function(e){var t=this.a;t.g&&p(t.f,[t.a.c("wf",e.c,P(e).toString(),"active")],[t.a.c("wf",e.c,P(e).toString(),"loading"),t.a.c("wf",e.c,P(e).toString(),"inactive")]),O(t,"fontactive",e),this.m=!0,W(this)},D.prototype.h=function(e){var t=this.a;if(t.g){var n=g(t.f,t.a.c("wf",e.c,P(e).toString(),"active")),i=[],o=[t.a.c("wf",e.c,P(e).toString(),"loading")];n||i.push(t.a.c("wf",e.c,P(e).toString(),"inactive")),p(t.f,i,o)}O(t,"fontinactive",e),W(this)},G.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var i=[],o=n.timeout;!function(e){e.g&&p(e.f,[e.a.c("wf","loading")]),O(e,"loading")}(t),i=function(e,t,n){var i,o=[];for(i in t)if(t.hasOwnProperty(i)){var a=e.c[i];a&&o.push(a(t[i],n))}return o}(e.a,n,e.c);var a=new D(e.c,t,o);for(e.h=i.length,t=0,n=i.length;t<n;t++)i[t].load((function(t,n,i){V(e,a,t,n,i)}))}(this,new k(this.c,e),e)},q.prototype.load=function(e){var t=this,n=t.a.projectId,i=t.a.version;if(n){var o=t.c.o;h(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(i?"?v="+i:""),(function(i){i?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var i,a=o["__mti_fntLst"+n](),l=[];if(a)for(var r=0;r<a.length;r++){var s=a[r].fontfamily;null!=a[r].fontStyle&&null!=a[r].fontWeight?(i=a[r].fontStyle+a[r].fontWeight,l.push(new y(s,i))):l.push(new y(s))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},$.prototype.load=function(e){var t,n,i=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},l=new m;for(t=0,n=i.length;t<n;t++)b(this.c,i[t],v(l));var r=[];for(t=0,n=o.length;t<n;t++)if((i=o[t].split(":"))[1])for(var s=i[1].split(","),c=0;c<s.length;c+=1)r.push(new y(i[0],s[c]));else r.push(new y(i[0]));_(l,(function(){e(r,a)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ie(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,n=this.c,i=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,i=0;i<n;i++){var o=t[i].split(":");3==o.length&&e.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),e.a.push(o.join(a))}}(i,o);var a=new X(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var i=e.f[n].split(":"),o=i[0].replace(/\+/g," "),a=["n4"];if(2<=i.length){var l;if(l=[],r=i[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var d;if((d=r[c]).match(/^[\w-]+$/))if(null==(f=ee.exec(d.toLowerCase())))d="";else{if(d=null==(d=f[2])||""==d?"n":Z[d],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));d=[d,f].join("")}else d="";d&&l.push(d)}0<l.length&&(a=l),3==i.length&&(l=[],0<(i=(i=i[2])?i.split(","):l).length&&(i=Q[i[0]])&&(e.c[o]=i))}for(e.c[o]||(i=Q[o])&&(e.c[o]=i),i=0;i<a.length;i+=1)e.a.push(new y(o,a[i]))}}(a),b(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],i=0;i<t;i++)n.push(e.a[i].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(i),v(t)),_(t,(function(){e(a.a,a.c,ne)}))},ie.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?h(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var i=[],o=0;o<t.length;o+=2)for(var a=t[o],l=t[o+1],r=0;r<l.length;r++)i.push(new y(a,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(i)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,i=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,a=n.fonts.length;o<a;++o){var l=n.fonts[o];i.a.push(new y(l.name,S("font-weight:"+l.weight+";font-style:"+l.style)))}e(i.a)},h(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ae=new G(window);ae.a.c.custom=function(e,t){return new $(t,e)},ae.a.c.fontdeck=function(e,t){return new oe(t,e)},ae.a.c.monotype=function(e,t){return new q(t,e)},ae.a.c.typekit=function(e,t){return new ie(t,e)},ae.a.c.google=function(e,t){return new te(t,e)};var le={load:l(ae.load,ae)};void 0===(i=function(){return le}.call(t,n,t,e))||(e.exports=i)}()},273:function(e,t,n){"use strict";var i=n(19),o=n.n(i)()((function(e){return e[1]}));o.push([e.i,'/*#######################################################################################*/\n/**\n * google-material-color v1.2.6\n * https://github.com/danlevan/google-material-color\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=o},274:function(e,t,n){"use strict";var i,o=n(275),a=n.n(o),l=n(1),r=n.n(l),s=n(18),c=n.n(s),d=n(273),f=0,u={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return f++||(i=c()(d.a,u)),p},p.unuse=function(){f>0&&!--f&&(i(),i=null)};var g=p,b=n(12),h=n(2);t.a=e=>(Object(l.useLayoutEffect)(()=>(g.use(),()=>{g.unuse()}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(h.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(a.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:b.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(h.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help)))},557:function(e,t,n){"use strict";n.r(t);var i=n(274),o=n(1),a=n.n(o),l=n(30),r=n(269),s=n(2),c=n(65),d=n(22),f=n(16),u=n(47),p=n(14),g=n(23),b=n(5),h=n(10),m=n(9),v=n(15);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}const x=e=>{e=e.parentProps;const{attributes:t,setAttributes:n}=e,{icon:o,noticeDismiss:x,cookies:w,close_cookie_days:y,textColor:T,titleColor:P,noticeColor:j,contentBgColor:S,noticeDismissColor:k,noticeAlignment:C,titleFontFamily:O,titleFontWeight:F,titleFontSizeType:E,titleLineHeightType:L,titleFontSize:M,titleFontSizeTablet:z,titleFontSizeMobile:B,titleLineHeight:H,titleLineHeightTablet:A,titleLineHeightMobile:U,descFontFamily:R,descFontWeight:N,descFontSize:D,descFontSizeType:I,descFontSizeTablet:W,descFontSizeMobile:G,descLineHeight:V,descLineHeightType:q,descLineHeightTablet:$,descLineHeightMobile:J,titleLoadGoogleFonts:K,descLoadGoogleFonts:X,titleTopPadding:Q,titleRightPadding:Y,titleBottomPadding:Z,titleLeftPadding:ee,titleTopPaddingTablet:te,titleRightPaddingTablet:ne,titleBottomPaddingTablet:ie,titleLeftPaddingTablet:oe,titleTopPaddingMobile:ae,titleRightPaddingMobile:le,titleBottomPaddingMobile:re,titleLeftPaddingMobile:se,titlePaddingUnit:ce,mobileTitlePaddingUnit:de,tabletTitlePaddingUnit:fe,titlePaddingLink:ue,headingTag:pe,layout:ge,highlightWidth:be,contentTopPadding:he,contentRightPadding:me,contentBottomPadding:ve,contentLeftPadding:_e,contentTopPaddingTablet:xe,contentRightPaddingTablet:we,contentBottomPaddingTablet:ye,contentLeftPaddingTablet:Te,contentTopPaddingMobile:Pe,contentRightPaddingMobile:je,contentBottomPaddingMobile:Se,contentLeftPaddingMobile:ke,contentPaddingUnit:Ce,mobileContentPaddingUnit:Oe,tabletContentPaddingUnit:Fe,contentPaddingLink:Ee,titleTransform:Le,titleDecoration:Me,descTransform:ze,descDecoration:Be,titleFontStyle:He,descFontStyle:Ae}=t;let Ue,Re;if(!0===K){const e={google:{families:[O+(F?":"+F:"")]}};Ue=a.a.createElement(r.a,{config:e})}if(!0===X){const e={google:{families:[R+(N?":"+N:"")]}};Re=a.a.createElement(r.a,{config:e})}const Ne=[{value:"",label:Object(s.__)("Always Show","ultimate-addons-for-gutenberg")},{value:"uagb-dismissable",label:Object(s.__)("Dismissible","ultimate-addons-for-gutenberg")}];return a.a.createElement(a.a.Fragment,null,a.a.createElement(b.BlockControls,{key:"controls"},a.a.createElement(b.AlignmentToolbar,{value:C,onChange:e=>n({noticeAlignment:e})})),a.a.createElement(b.InspectorControls,null,a.a.createElement(c.a,{tabs:["general","style","advance"]},a.a.createElement(d.b,d.a.general,a.a.createElement(v.a,{initialOpen:!0},a.a.createElement(g.a,{setAttributes:n,label:Object(s.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:ge,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"modern",label:"Modern",tooltip:Object(s.__)("Modern","ultimate-addons-for-gutenberg")},{value:"simple",label:"Classic",tooltip:Object(s.__)("Classic","ultimate-addons-for-gutenberg")}],showIcons:!1}),"simple"===ge&&a.a.createElement(p.a,{label:Object(s.__)("Border Width","ultimate-addons-for-gutenberg"),value:be,onChange:e=>n({highlightWidth:e}),min:0,max:50,displayUnit:!1}),a.a.createElement(g.a,{setAttributes:n,label:Object(s.__)("Title Tag","ultimate-addons-for-gutenberg"),data:{value:pe,label:"headingTag"},options:[{value:"h1",label:Object(s.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(s.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(s.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(s.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(s.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(s.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(s.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(s.__)("P","ultimate-addons-for-gutenberg")}]}),a.a.createElement(g.a,{setAttributes:n,label:Object(s.__)("Notice Display","ultimate-addons-for-gutenberg"),data:{value:x,label:"noticeDismiss"},options:Ne}),x&&a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{label:Object(s.__)("Button Icon","ultimate-addons-for-gutenberg"),value:o,onChange:e=>n({icon:e})})),x&&a.a.createElement(m.ToggleControl,{label:Object(s.__)("Enable Cookies","ultimate-addons-for-gutenberg"),checked:w,onChange:e=>{const{getCurrentPostId:t}=Object(h.select)("core/editor"),i=t().toString(),o=(new Date).getTime();n({c_id:i+"-"+o}),n({cookies:e})}}),w&&a.a.createElement(p.a,{label:Object(s.__)("Show Closed Notice After (Days)","ultimate-addons-for-gutenberg"),value:y,onChange:e=>n({close_cookie_days:e}),min:0,max:50,displayUnit:!1}))),a.a.createElement(d.b,d.a.style,a.a.createElement(v.a,{title:Object(s.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},a.a.createElement(f.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:P||"",onColorChange:e=>n({titleColor:e})}),a.a.createElement(f.a,{label:Object(s.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:j||"",onColorChange:e=>n({noticeColor:e})}),x&&a.a.createElement(f.a,{label:Object(s.__)("Dismiss Icon Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:e=>n({noticeDismissColor:e})}),a.a.createElement(l.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:n,loadGoogleFonts:{value:K,label:"titleLoadGoogleFonts"},fontFamily:{value:O,label:"titleFontFamily"},fontWeight:{value:F,label:"titleFontWeight"},fontStyle:{value:He,label:"titleFontStyle"},transform:{value:Le,label:"titleTransform"},decoration:{value:Me,label:"titleDecoration"},fontSizeType:{value:E,label:"titleFontSizeType"},fontSize:{value:M,label:"titleFontSize"},fontSizeMobile:{value:B,label:"titleFontSizeMobile"},fontSizeTablet:{value:z,label:"titleFontSizeTablet"},lineHeightType:{value:L,label:"titleLineHeightType"},lineHeight:{value:H,label:"titleLineHeight"},lineHeightMobile:{value:U,label:"titleLineHeightMobile"},lineHeightTablet:{value:A,label:"titleLineHeightTablet"}}),a.a.createElement(u.a,_({},e,{label:Object(s.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Q,label:"titleTopPadding"},valueRight:{value:Y,label:"titleRightPadding"},valueBottom:{value:Z,label:"titleBottomPadding"},valueLeft:{value:ee,label:"titleLeftPadding"},valueTopTablet:{value:te,label:"titleTopPaddingTablet"},valueRightTablet:{value:ne,label:"titleRightPaddingTablet"},valueBottomTablet:{value:ie,label:"titleBottomPaddingTablet"},valueLeftTablet:{value:oe,label:"titleLeftPaddingTablet"},valueTopMobile:{value:ae,label:"titleTopPaddingMobile"},valueRightMobile:{value:le,label:"titleRightPaddingMobile"},valueBottomMobile:{value:re,label:"titleBottomPaddingMobile"},valueLeftMobile:{value:se,label:"titleLeftPaddingMobile"},unit:{value:ce,label:"titlePaddingUnit"},mUnit:{value:de,label:"mobiletitlePaddingUnit"},tUnit:{value:fe,label:"tablettitlePaddingUnit"},attributes:t,setAttributes:n,link:{value:ue,label:"titlePaddingLink"}}))),a.a.createElement(v.a,{title:Object(s.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},a.a.createElement(f.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:T||"",onColorChange:e=>n({textColor:e})}),a.a.createElement(f.a,{label:Object(s.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:S||"",onColorChange:e=>n({contentBgColor:e})}),a.a.createElement(l.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:n,loadGoogleFonts:{value:X,label:"descLoadGoogleFonts"},fontFamily:{value:R,label:"descFontFamily"},fontWeight:{value:N,label:"descFontWeight"},fontStyle:{value:Ae,label:"descFontStyle"},transform:{value:ze,label:"descTransform"},decoration:{value:Be,label:"descDecoration"},fontSizeType:{value:I,label:"descFontSizeType"},fontSize:{value:D,label:"descFontSize"},fontSizeMobile:{value:G,label:"descFontSizeMobile"},fontSizeTablet:{value:W,label:"descFontSizeTablet"},lineHeightType:{value:q,label:"descLineHeightType"},lineHeight:{value:V,label:"descLineHeight"},lineHeightMobile:{value:J,label:"descLineHeightMobile"},lineHeightTablet:{value:$,label:"descLineHeightTablet"}}),a.a.createElement(u.a,_({},e,{label:Object(s.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:he,label:"contentTopPadding"},valueRight:{value:me,label:"contentRightPadding"},valueBottom:{value:ve,label:"contentBottomPadding"},valueLeft:{value:_e,label:"contentLeftPadding"},valueTopTablet:{value:xe,label:"contentTopPaddingTablet"},valueRightTablet:{value:we,label:"contentRightPaddingTablet"},valueBottomTablet:{value:ye,label:"contentBottomPaddingTablet"},valueLeftTablet:{value:Te,label:"contentLeftPaddingTablet"},valueTopMobile:{value:Pe,label:"contentTopPaddingMobile"},valueRightMobile:{value:je,label:"contentRightPaddingMobile"},valueBottomMobile:{value:Se,label:"contentBottomPaddingMobile"},valueLeftMobile:{value:ke,label:"contentLeftPaddingMobile"},unit:{value:Ce,label:"contentPaddingUnit"},mUnit:{value:Oe,label:"mobileContentPaddingUnit"},tUnit:{value:Fe,label:"tabletContentPaddingUnit"},attributes:t,setAttributes:n,link:{value:Ee,label:"contentPaddingLink"}})))),a.a.createElement(d.b,_({},d.a.advance,{parentProps:e})))),Ue,Re)};t.default=a.a.memo(x)}}]);