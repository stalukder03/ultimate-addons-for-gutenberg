(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[28],{269:function(e,n,t){"use strict";var o=t(32),i=t.n(o),a=t(270),l=t.n(a),r=t(3);if(void 0===s)var s=[];const c=e=>{const[n,t]=Object(r.useState)([]);Object(r.useEffect)(()=>{c()},[]),Object(r.useEffect)(()=>{const{onStatus:t,config:o}=e;void 0!==n.status&&t(n.status),o!==n.config&&c()},[e]);const o=()=>{t({status:"loading"})},i=()=>{t({status:"active"})},a=()=>{t({status:"inactive"})},c=()=>{var n;s.includes(e.config.google.families[0])||(l.a.load({...e.config,loading:o,active:i,inactive:a}),n=e.config.google.families[0],s.includes(n)||s.push(n))},{children:u}=e;return u||null};c.propTypes={config:i.a.object.isRequired,children:i.a.element,onStatus:i.a.func.isRequired},c.defaultProps={onStatus:()=>{}},n.a=c},270:function(e,n,t){var o;!function(){function i(e,n,t){return e.call.apply(e.bind,arguments)}function a(e,n,t){if(!e)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,o),e.apply(n,t)}}return function(){return e.apply(n,arguments)}}function l(e,n,t){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:a).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,n){this.a=e,this.o=n||e,this.c=this.o.document}var c=!!window.FontFace;function u(e,n,t,o){if(n=e.c.createElement(n),t)for(var i in t)t.hasOwnProperty(i)&&("style"==i?n.style.cssText=t[i]:n.setAttribute(i,t[i]));return o&&n.appendChild(e.c.createTextNode(o)),n}function d(e,n,t){(e=e.c.getElementsByTagName(n)[0])||(e=document.documentElement),e.insertBefore(t,e.lastChild)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e,n,t){n=n||[],t=t||[];for(var o=e.className.split(/\s+/),i=0;i<n.length;i+=1){for(var a=!1,l=0;l<o.length;l+=1)if(n[i]===o[l]){a=!0;break}a||o.push(n[i])}for(n=[],i=0;i<o.length;i+=1){for(a=!1,l=0;l<t.length;l+=1)if(o[i]===t[l]){a=!0;break}a||n.push(o[i])}e.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function b(e,n){for(var t=e.className.split(/\s+/),o=0,i=t.length;o<i;o++)if(t[o]==n)return!0;return!1}function g(e,n,t){function o(){r&&i&&a&&(r(l),r=null)}n=u(e,"link",{rel:"stylesheet",href:n,media:"all"});var i=!1,a=!0,l=null,r=t||null;c?(n.onload=function(){i=!0,o()},n.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),o()}):setTimeout((function(){i=!0,o()}),0),d(e,"head",n)}function h(e,n,t,o){var i=e.c.getElementsByTagName("head")[0];if(i){var a=u(e,"script",{src:n}),l=!1;return a.onload=a.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,t&&t(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&i.removeChild(a))},i.appendChild(a),setTimeout((function(){l||(l=!0,t&&t(Error("Script load timeout")))}),o||5e3),a}return null}function m(){this.a=0,this.c=null}function _(e){return e.a++,function(){e.a--,w(e)}}function v(e,n){e.c=n,w(e)}function w(e){0==e.a&&e.c&&(e.c(),e.c=null)}function x(e){this.a=e||"-"}function y(e,n){this.c=e,this.f=4,this.a="n";var t=(n||"n4").match(/^([nio])([1-9])$/i);t&&(this.a=t[1],this.f=parseInt(t[2],10))}function T(e){var n=[];e=e.split(/,\s*/);for(var t=0;t<e.length;t++){var o=e[t].replace(/['"]/g,"");-1!=o.indexOf(" ")||/^\d/.test(o)?n.push("'"+o+"'"):n.push(o)}return n.join(",")}function j(e){return e.a+e.f}function O(e){var n="normal";return"o"===e.a?n="oblique":"i"===e.a&&(n="italic"),n}function S(e){var n=4,t="n",o=null;return e&&((o=e.match(/(normal|oblique|italic)/i))&&o[1]&&(t=o[1].substr(0,1).toLowerCase()),(o=e.match(/([1-9]00|normal|bold)/i))&&o[1]&&(/bold/i.test(o[1])?n=7:/[1-9]00/.test(o[1])&&(n=parseInt(o[1].substr(0,1),10)))),t+n}function k(e,n){this.c=e,this.f=e.o.document.documentElement,this.h=n,this.a=new x("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function C(e){if(e.g){var n=b(e.f,e.a.c("wf","active")),t=[],o=[e.a.c("wf","loading")];n||t.push(e.a.c("wf","inactive")),p(e.f,t,o)}E(e,"inactive")}function E(e,n,t){e.j&&e.h[n]&&(t?e.h[n](t.c,j(t)):e.h[n]())}function P(){this.c={}}function q(e,n){this.c=e,this.f=n,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function F(e){d(e.c,"body",e.a)}function z(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(e.c)+";font-style:"+O(e)+";font-weight:"+e.f+"00;"}function L(e,n,t,o,i,a){this.g=e,this.j=n,this.a=o,this.c=t,this.f=i||3e3,this.h=a||void 0}function M(e,n,t,o,i,a,l){this.v=e,this.B=n,this.c=t,this.a=o,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new q(this.c,this.s),this.h=new q(this.c,this.s),this.j=new q(this.c,this.s),this.m=new q(this.c,this.s),e=z(e=new y(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=e,e=z(e=new y(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=e,e=z(e=new y("serif",j(this.a))),this.j.a.style.cssText=e,e=z(e=new y("sans-serif",j(this.a))),this.m.a.style.cssText=e,F(this.g),F(this.h),F(this.j),F(this.m)}x.prototype.c=function(e){for(var n=[],t=0;t<arguments.length;t++)n.push(arguments[t].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},L.prototype.start=function(){var e=this.c.o.document,n=this,t=r(),o=new Promise((function(o,i){!function a(){r()-t>=n.f?i():e.fonts.load(function(e){return O(e)+" "+e.f+"00 300px "+T(e.c)}(n.a),n.h).then((function(e){1<=e.length?o():setTimeout(a,25)}),(function(){i()}))}()})),i=null,a=new Promise((function(e,t){i=setTimeout(t,n.f)}));Promise.race([a,o]).then((function(){i&&(clearTimeout(i),i=null),n.g(n.a)}),(function(){n.j(n.a)}))};var A={D:"serif",C:"sans-serif"},H=null;function B(){if(null===H){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);H=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return H}function I(e,n,t){for(var o in A)if(A.hasOwnProperty(o)&&n===e.f[A[o]]&&t===e.f[A[o]])return!0;return!1}function N(e,n){setTimeout(l((function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),n(this.a)}),e),0)}function R(e,n,t){this.c=e,this.a=n,this.f=0,this.m=this.j=!1,this.s=t}M.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(n){var t,o=n.g.a.offsetWidth,i=n.h.a.offsetWidth;(t=o===n.f.serif&&i===n.f["sans-serif"])||(t=B()&&I(n,o,i)),t?r()-n.A>=n.w?B()&&I(n,o,i)&&(null===n.u||n.u.hasOwnProperty(n.a.c))?N(n,n.v):N(n,n.B):function(n){setTimeout(l((function(){e(this)}),n),50)}(n):N(n,n.v)}(this)};var D=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&p(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),E(e,"active")):C(e.a))}function W(e){this.j=e,this.a=new P,this.h=0,this.f=this.g=!0}function U(e,n,t,o,i){var a=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,r=o||{};if(0===t.length&&a)C(n.a);else{n.f+=t.length,a&&(n.j=a);var s,c=[];for(s=0;s<t.length;s++){var u=t[s],d=r[u.c],f=n.a,b=u;if(f.g&&p(f.f,[f.a.c("wf",b.c,j(b).toString(),"loading")]),E(f,"fontloading",b),f=null,null===D)if(window.FontFace){b=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=b?42<parseInt(b[1],10):!g}else D=!1;f=D?new L(l(n.g,n),l(n.h,n),n.c,u,n.s,d):new M(l(n.g,n),l(n.h,n),n.c,u,n.s,e,d),c.push(f)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function V(e,n){this.c=e,this.a=n}function Q(e,n){this.c=e,this.a=n}function $(e,n){this.c=e||J,this.a=[],this.f=[],this.g=n||""}R.prototype.g=function(e){var n=this.a;n.g&&p(n.f,[n.a.c("wf",e.c,j(e).toString(),"active")],[n.a.c("wf",e.c,j(e).toString(),"loading"),n.a.c("wf",e.c,j(e).toString(),"inactive")]),E(n,"fontactive",e),this.m=!0,G(this)},R.prototype.h=function(e){var n=this.a;if(n.g){var t=b(n.f,n.a.c("wf",e.c,j(e).toString(),"active")),o=[],i=[n.a.c("wf",e.c,j(e).toString(),"loading")];t||o.push(n.a.c("wf",e.c,j(e).toString(),"inactive")),p(n.f,o,i)}E(n,"fontinactive",e),G(this)},W.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,n,t){var o=[],i=t.timeout;!function(e){e.g&&p(e.f,[e.a.c("wf","loading")]),E(e,"loading")}(n),o=function(e,n,t){var o,i=[];for(o in n)if(n.hasOwnProperty(o)){var a=e.c[o];a&&i.push(a(n[o],t))}return i}(e.a,t,e.c);var a=new R(e.c,n,i);for(e.h=o.length,n=0,t=o.length;n<t;n++)o[n].load((function(n,t,o){U(e,a,n,t,o)}))}(this,new k(this.c,e),e)},V.prototype.load=function(e){var n=this,t=n.a.projectId,o=n.a.version;if(t){var i=n.c.o;h(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+t+".js"+(o?"?v="+o:""),(function(o){o?e([]):(i["__MonotypeConfiguration__"+t]=function(){return n.a},function n(){if(i["__mti_fntLst"+t]){var o,a=i["__mti_fntLst"+t](),l=[];if(a)for(var r=0;r<a.length;r++){var s=a[r].fontfamily;null!=a[r].fontStyle&&null!=a[r].fontWeight?(o=a[r].fontStyle+a[r].fontWeight,l.push(new y(s,o))):l.push(new y(s))}e(l)}else setTimeout((function(){n()}),50)}())})).id="__MonotypeAPIScript__"+t}else e([])},Q.prototype.load=function(e){var n,t,o=this.a.urls||[],i=this.a.families||[],a=this.a.testStrings||{},l=new m;for(n=0,t=o.length;n<t;n++)g(this.c,o[n],_(l));var r=[];for(n=0,t=i.length;n<t;n++)if((o=i[n].split(":"))[1])for(var s=o[1].split(","),c=0;c<s.length;c+=1)r.push(new y(o[0],s[c]));else r.push(new y(o[0]));v(l,(function(){e(r,a)}))};var J="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function ne(e,n){this.c=e,this.a=n}var te={Arimo:!0,Cousine:!0,Tinos:!0};function oe(e,n){this.c=e,this.a=n}function ie(e,n){this.c=e,this.f=n,this.a=[]}ne.prototype.load=function(e){var n=new m,t=this.c,o=new $(this.a.api,this.a.text),i=this.a.families;!function(e,n){for(var t=n.length,o=0;o<t;o++){var i=n[o].split(":");3==i.length&&e.f.push(i.pop());var a="";2==i.length&&""!=i[1]&&(a=":"),e.a.push(i.join(a))}}(o,i);var a=new K(i);!function(e){for(var n=e.f.length,t=0;t<n;t++){var o=e.f[t].split(":"),i=o[0].replace(/\+/g," "),a=["n4"];if(2<=o.length){var l;if(l=[],r=o[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(d=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=d[2])||""==u?"n":Z[u],null==(d=d[1])||""==d)d="4";else var d=Y[d]||(isNaN(d)?"4":d.substr(0,1));u=[u,d].join("")}else u="";u&&l.push(u)}0<l.length&&(a=l),3==o.length&&(l=[],0<(o=(o=o[2])?o.split(","):l).length&&(o=X[o[0]])&&(e.c[i]=o))}for(e.c[i]||(o=X[i])&&(e.c[i]=o),o=0;o<a.length;o+=1)e.a.push(new y(i,a[o]))}}(a),g(t,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var n=e.a.length,t=[],o=0;o<n;o++)t.push(e.a[o].replace(/ /g,"+"));return n=e.c+"?family="+t.join("%7C"),0<e.f.length&&(n+="&subset="+e.f.join(",")),0<e.g.length&&(n+="&text="+encodeURIComponent(e.g)),n}(o),_(n)),v(n,(function(){e(a.a,a.c,te)}))},oe.prototype.load=function(e){var n=this.a.id,t=this.c.o;n?h(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",(function(n){if(n)e([]);else if(t.Typekit&&t.Typekit.config&&t.Typekit.config.fn){n=t.Typekit.config.fn;for(var o=[],i=0;i<n.length;i+=2)for(var a=n[i],l=n[i+1],r=0;r<l.length;r++)o.push(new y(a,l[r]));try{t.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(o)}}),2e3):e([])},ie.prototype.load=function(e){var n=this.f.id,t=this.c.o,o=this;n?(t.__webfontfontdeckmodule__||(t.__webfontfontdeckmodule__={}),t.__webfontfontdeckmodule__[n]=function(n,t){for(var i=0,a=t.fonts.length;i<a;++i){var l=t.fonts[i];o.a.push(new y(l.name,S("font-weight:"+l.weight+";font-style:"+l.style)))}e(o.a)},h(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+n+".js",(function(n){n&&e([])}))):e([])};var ae=new W(window);ae.a.c.custom=function(e,n){return new Q(n,e)},ae.a.c.fontdeck=function(e,n){return new ie(n,e)},ae.a.c.monotype=function(e,n){return new V(n,e)},ae.a.c.typekit=function(e,n){return new oe(n,e)},ae.a.c.google=function(e,n){return new ne(n,e)};var le={load:l(ae.load,ae)};void 0===(o=function(){return le}.call(n,t,n,e))||(e.exports=o)}()},273:function(e,n,t){"use strict";var o=t(16),i=t.n(o)()((function(e){return e[1]}));i.push([e.i,'/*#######################################################################################*/\n/**\n * google-material-color v1.2.6\n * https://github.com/danlevan/google-material-color\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),n.a=i},274:function(e,n,t){"use strict";var o,i=t(275),a=t.n(i),l=t(1),r=t.n(l),s=t(15),c=t.n(s),u=t(273),d=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=u.a.locals||{},p.use=function(){return d++||(o=c()(u.a,f)),p},p.unuse=function(){d>0&&!--d&&(o(),o=null)};var b=p,g=t(12),h=t(2);n.a=e=>(Object(l.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(h.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(a.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:g.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(h.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help)))},555:function(e,n,t){"use strict";t.r(n);var o=t(12),i=t(1),a=t.n(i),l=t(11),r=t(269),s=t(30),c=t(66),u=t(23),d=t(18),f=t(14),p=t(47),b=t(65),g=t(22),h=t(2),m=t(60),_=t(10),v=t(274),w=t(48),x=t(5),y=t(9),T=t(17);function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}const O=e=>{e=e.parentProps;const{attributes:n,setAttributes:t}=e,{layout:O,inactiveOtherItems:S,expandFirstItem:k,enableSchemaSupport:C,rowsGap:E,columnsGap:P,align:q,enableSeparator:F,boxBgColor:z,borderStyle:L,borderWidth:M,borderRadius:A,borderColor:H,borderHoverColor:B,questionTextColor:I,questionTextActiveColor:N,questionPaddingTypeDesktop:R,questionPaddingTypeMobile:D,questionPaddingTypeTablet:G,answerTextColor:W,answerPaddingTypeDesktop:U,answerPaddingTypeMobile:V,answerPaddingTypeTablet:Q,iconColor:$,iconActiveColor:J,gapBtwIconQUestion:K,questionloadGoogleFonts:X,questionFontFamily:Y,questionFontWeight:Z,questionFontSizeType:ee,questionFontSize:ne,questionFontSizeMobile:te,questionFontSizeTablet:oe,questionLineHeightType:ie,questionLineHeight:ae,questionLineHeightMobile:le,questionLineHeightTablet:re,answerloadGoogleFonts:se,answerFontFamily:ce,answerFontWeight:ue,answerFontSizeType:de,answerFontSize:fe,answerFontSizeMobile:pe,answerFontSizeTablet:be,answerLineHeightType:ge,answerLineHeight:he,answerLineHeightMobile:me,answerLineHeightTablet:_e,icon:ve,iconActive:we,iconAlign:xe,iconSizeType:ye,iconSizeMobile:Te,iconSizeTablet:je,iconSize:Oe,columns:Se,tcolumns:ke,mcolumns:Ce,enableToggle:Ee,equalHeight:Pe,questionLeftPaddingTablet:qe,hquestionPaddingTablet:Fe,vquestionPaddingTablet:ze,questionBottomPaddingTablet:Le,questionLeftPaddingDesktop:Me,hquestionPaddingDesktop:Ae,vquestionPaddingDesktop:He,questionBottomPaddingDesktop:Be,questionLeftPaddingMobile:Ie,hquestionPaddingMobile:Ne,vquestionPaddingMobile:Re,questionBottomPaddingMobile:De,headingTag:Ge,answerSpacingLink:We,questionSpacingLink:Ue,answerTopPadding:Ve,answerRightPadding:Qe,answerBottomPadding:$e,answerLeftPadding:Je,answerTopPaddingTablet:Ke,answerRightPaddingTablet:Xe,answerBottomPaddingTablet:Ye,answerLeftPaddingTablet:Ze,answerTopPaddingMobile:en,answerRightPaddingMobile:nn,answerBottomPaddingMobile:tn,answerLeftPaddingMobile:on,answerFontStyle:an,answerTransform:ln,answerDecoration:rn,questionFontStyle:sn,questionTransform:cn,questionDecoration:un}=n;let dn,fn;if(!0===X){const e={google:{families:[Y+(Z?":"+Z:"")]}};dn=a.a.createElement(r.a,{config:e})}if(!0===se){const e={google:{families:[ce+(ue?":"+ue:"")]}};fn=a.a.createElement(r.a,{config:e})}return a.a.createElement(i.Suspense,{fallback:Object(l.a)()},a.a.createElement(x.InspectorControls,null,a.a.createElement(b.a,null,a.a.createElement(g.b,g.a.general,a.a.createElement(T.a,{title:Object(h.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},a.a.createElement(u.a,{setAttributes:t,label:Object(h.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:O,label:"layout"},onChange:n=>{Object(_.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.layout=n}),t({layout:n})},options:[{value:"accordion",label:Object(h.__)("Accordion","ultimate-addons-for-gutenberg")},{value:"grid",label:Object(h.__)("Grid","ultimate-addons-for-gutenberg")}]}),"accordion"===O&&a.a.createElement(a.a.Fragment,null,a.a.createElement(y.ToggleControl,{label:Object(h.__)("Collapse other items","ultimate-addons-for-gutenberg"),checked:S,onChange:()=>t({inactiveOtherItems:!S})}),!0===S&&a.a.createElement(y.ToggleControl,{label:Object(h.__)("Expand First Item","ultimate-addons-for-gutenberg"),checked:k,onChange:()=>t({expandFirstItem:!k})}),a.a.createElement(y.ToggleControl,{label:Object(h.__)("Enable Toggle","ultimate-addons-for-gutenberg"),checked:Ee,onChange:()=>t({enableToggle:!Ee})})),a.a.createElement(y.ToggleControl,{label:Object(h.__)("Enable Schema Support","ultimate-addons-for-gutenberg"),checked:C,onChange:()=>t({enableSchemaSupport:!C})}),a.a.createElement(y.ToggleControl,{label:Object(h.__)("Enable Separator","ultimate-addons-for-gutenberg"),checked:F,onChange:()=>t({enableSeparator:!F})}),a.a.createElement(y.SelectControl,{label:Object(h.__)("Question Tag","ultimate-addons-for-gutenberg"),value:Ge,onChange:n=>(n=>{Object(_.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.headingTag=n}),t({headingTag:n})})(n),options:[{value:"span",label:Object(h.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(h.__)("P","ultimate-addons-for-gutenberg")},{value:"h1",label:Object(h.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(h.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(h.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(h.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(h.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(h.__)("H6","ultimate-addons-for-gutenberg")}]}),"grid"===O&&a.a.createElement(c.a,{label:Object(h.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:Se,label:"columns",min:1,max:6},tablet:{value:ke,label:"tcolumns",min:1,max:4},mobile:{value:Ce,label:"mcolumns",min:1,max:2}},displayUnit:!1,setAttributes:t}),"grid"===O&&a.a.createElement(u.a,{setAttributes:t,label:Object(h.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:q,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:a.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-left")}),tooltip:Object(h.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:a.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-center")}),tooltip:Object(h.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:a.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-right")}),tooltip:Object(h.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),"accordion"===O&&a.a.createElement(T.a,{title:Object(h.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},a.a.createElement(v.a,{label:Object(h.__)("Expand","ultimate-addons-for-gutenberg"),value:ve,onChange:n=>(n=>{Object(_.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.icon=n}),t({icon:n})})(n)}),a.a.createElement(v.a,{label:Object(h.__)("Collapse","ultimate-addons-for-gutenberg"),value:we,onChange:n=>(n=>{Object(_.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.iconActive=n}),t({iconActive:n})})(n)}),a.a.createElement(u.a,{setAttributes:t,label:Object(h.__)("Icon Alignment","ultimate-addons-for-gutenberg"),data:{value:xe,label:"iconAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"row",icon:a.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-left")}),tooltip:Object(h.__)("Left","ultimate-addons-for-gutenberg")},{value:"row-reverse",icon:a.a.createElement(y.Icon,{icon:Object(o.a)("fa fa-align-right")}),tooltip:Object(h.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}))),a.a.createElement(g.b,g.a.style,a.a.createElement(T.a,{title:Object(h.__)("Container","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},a.a.createElement(d.a,{label:Object(h.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:z,onColorChange:e=>t({boxBgColor:e})}),a.a.createElement(f.a,{label:Object(h.__)("Rows Gap (px)","ultimate-addons-for-gutenberg"),setAttributes:t,value:E,onChange:e=>t({rowsGap:e}),min:0,max:50,displayUnit:!1}),"grid"===O&&a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{label:Object(h.__)("Columns Gap (px)","ultimate-addons-for-gutenberg"),setAttributes:t,value:P,onChange:e=>t({columnsGap:e}),min:0,max:50,displayUnit:!1}),a.a.createElement(y.ToggleControl,{label:Object(h.__)("Equal Height","ultimate-addons-for-gutenberg"),checked:Pe,onChange:()=>t({equalHeight:!Pe})})),a.a.createElement("hr",{className:"uagb-editor__separator"}),a.a.createElement("h2",null,Object(h.__)("Border","ultimate-addons-for-gutenberg")),a.a.createElement(m.a,{setAttributes:t,borderStyle:{value:L,label:"borderStyle",title:Object(h.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:M,label:"borderWidth",title:Object(h.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:A,label:"borderRadius",title:Object(h.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:H,label:"borderColor",title:Object(h.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:B,label:"borderHoverColor",title:Object(h.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),"accordion"!==O?"":a.a.createElement(T.a,{title:Object(h.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},a.a.createElement(c.a,{label:Object(h.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:Oe,label:"iconSize"},tablet:{value:je,label:"iconSizeTablet"},mobile:{value:Te,label:"iconSizeMobile"}},min:0,max:100,unit:{value:ye,label:"iconSizeType"},units:[{name:Object(h.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(h.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],setAttributes:t}),a.a.createElement(f.a,{label:Object(h.__)("Gap between Icon and Question","ultimate-addons-for-gutenberg"),setAttributes:t,value:K,onChange:e=>t({gapBtwIconQUestion:e}),min:0,max:100,displayUnit:!1}),a.a.createElement(d.a,{label:Object(h.__)("Expand Color","ultimate-addons-for-gutenberg"),colorValue:$,onColorChange:e=>t({iconColor:e})}),a.a.createElement(d.a,{label:Object(h.__)("Collapse Color","ultimate-addons-for-gutenberg"),colorValue:J,onColorChange:e=>t({iconActiveColor:e})})),a.a.createElement(T.a,{title:Object(h.__)("Question","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},a.a.createElement(s.a,{label:Object(h.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:t,loadGoogleFonts:{value:X,label:"questionloadGoogleFonts"},fontFamily:{value:Y,label:"questionFontFamily"},fontWeight:{value:Z,label:"questionFontWeight"},fontStyle:{value:sn,label:"questionFontStyle"},transform:{value:cn,label:"questionTransform"},decoration:{value:un,label:"questionDecoration"},fontSizeType:{value:ee,label:"questionFontSizeType"},fontSize:{value:ne,label:"questionFontSize"},fontSizeMobile:{value:te,label:"questionFontSizeMobile"},fontSizeTablet:{value:oe,label:"questionFontSizeTablet"},lineHeightType:{value:ie,label:"questionLineHeightType"},lineHeight:{value:ae,label:"questionLineHeight"},lineHeightMobile:{value:le,label:"questionLineHeightMobile"},lineHeightTablet:{value:re,label:"questionLineHeightTablet"}}),a.a.createElement(w.a,{tabs:[{name:"normal",title:Object(h.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(h.__)("Active/Hover","ultimate-addons-for-gutenberg")}],normal:a.a.createElement(d.a,{label:Object(h.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:I,onColorChange:e=>t({questionTextColor:e})}),active:a.a.createElement(d.a,{label:Object(h.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:N,onColorChange:e=>t({questionTextActiveColor:e})})}),a.a.createElement(p.a,j({},e,{label:Object(h.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:He,label:"vquestionPaddingDesktop"},valueRight:{value:Ae,label:"hquestionPaddingDesktop"},valueBottom:{value:Be,label:"questionBottomPaddingDesktop"},valueLeft:{value:Me,label:"questionLeftPaddingDesktop"},valueTopTablet:{value:ze,label:"vquestionPaddingTablet"},valueRightTablet:{value:Fe,label:"hquestionPaddingTablet"},valueBottomTablet:{value:Le,label:"questionBottomPaddingTablet"},valueLeftTablet:{value:qe,label:"questionLeftPaddingTablet"},valueTopMobile:{value:Re,label:"vquestionPaddingMobile"},valueRightMobile:{value:Ne,label:"hquestionPaddingMobile"},valueBottomMobile:{value:De,label:"questionBottomPaddingMobile"},valueLeftMobile:{value:Ie,label:"questionLeftPaddingMobile"},unit:{value:R,label:"questionPaddingTypeDesktop"},mUnit:{value:D,label:"questionPaddingTypeMobile"},tUnit:{value:G,label:"questionPaddingTypeTablet"},attributes:n,setAttributes:t,link:{value:Ue,label:"questionSpacingLink"},units:[{name:Object(h.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(h.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}))),a.a.createElement(T.a,{title:Object(h.__)("Answer","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},a.a.createElement(d.a,{label:Object(h.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:W,onColorChange:e=>t({answerTextColor:e})}),a.a.createElement(s.a,{label:Object(h.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:t,loadGoogleFonts:{value:se,label:"answerloadGoogleFonts"},fontFamily:{value:ce,label:"answerFontFamily"},fontWeight:{value:ue,label:"answerFontWeight"},fontStyle:{value:an,label:"answerFontStyle"},transform:{value:ln,label:"answerTransform"},decoration:{value:rn,label:"answerDecoration"},fontSizeType:{value:de,label:"answerFontSizeType"},fontSize:{value:fe,label:"answerFontSize"},fontSizeMobile:{value:pe,label:"answerFontSizeMobile"},fontSizeTablet:{value:be,label:"answerFontSizeTablet"},lineHeightType:{value:ge,label:"answerLineHeightType"},lineHeight:{value:he,label:"answerLineHeight"},lineHeightMobile:{value:me,label:"answerLineHeightMobile"},lineHeightTablet:{value:_e,label:"answerLineHeightTablet"}}),a.a.createElement(p.a,j({},e,{label:Object(h.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ve,label:"answerTopPadding"},valueRight:{value:Qe,label:"answerRightPadding"},valueBottom:{value:$e,label:"answerBottomPadding"},valueLeft:{value:Je,label:"answerLeftPadding"},valueTopTablet:{value:Ke,label:"answerTopPaddingTablet"},valueRightTablet:{value:Xe,label:"answerRightPaddingTablet"},valueBottomTablet:{value:Ye,label:"answerBottomPaddingTablet"},valueLeftTablet:{value:Ze,label:"answerLeftPaddingTablet"},valueTopMobile:{value:en,label:"answerTopPaddingMobile"},valueRightMobile:{value:nn,label:"answerRightPaddingMobile"},valueBottomMobile:{value:tn,label:"answerBottomPaddingMobile"},valueLeftMobile:{value:on,label:"answerLeftPaddingMobile"},unit:{value:U,label:"answerPaddingTypeDesktop"},mUnit:{value:V,label:"answerPaddingTypeMobile"},tUnit:{value:Q,label:"answerPaddingTypeTablet"},attributes:n,setAttributes:t,link:{value:We,label:"answerSpacingLink"},units:[{name:Object(h.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(h.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})))),a.a.createElement(g.b,j({},g.a.advance,{parentProps:e})))),dn,fn)};n.default=a.a.memo(O)}}]);