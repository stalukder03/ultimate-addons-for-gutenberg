(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[98],{267:function(e,t,n){"use strict";var o=n(32),i=n.n(o),a=n(268),l=n.n(a),r=n(3);if(void 0===s)var s=[];const c=e=>{const[t,n]=Object(r.useState)([]);Object(r.useEffect)(()=>{c()},[]),Object(r.useEffect)(()=>{const{onStatus:n,config:o}=e;void 0!==t.status&&n(t.status),o!==t.config&&c()},[e]);const o=()=>{n({status:"loading"})},i=()=>{n({status:"active"})},a=()=>{n({status:"inactive"})},c=()=>{var t;s.includes(e.config.google.families[0])||(l.a.load({...e.config,loading:o,active:i,inactive:a}),t=e.config.google.families[0],s.includes(t)||s.push(t))},{children:d}=e;return d||null};c.propTypes={config:i.a.object.isRequired,children:i.a.element,onStatus:i.a.func.isRequired},c.defaultProps={onStatus:()=>{}},t.a=c},268:function(e,t,n){var o;!function(){function i(e,t,n){return e.call.apply(e.bind,arguments)}function a(e,t,n){if(!e)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,o),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:a).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function d(e,t,n,o){if(t=e.c.createElement(t),n)for(var i in n)n.hasOwnProperty(i)&&("style"==i?t.style.cssText=n[i]:t.setAttribute(i,n[i]));return o&&t.appendChild(e.c.createTextNode(o)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function u(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e,t,n){t=t||[],n=n||[];for(var o=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var a=!1,l=0;l<o.length;l+=1)if(t[i]===o[l]){a=!0;break}a||o.push(t[i])}for(t=[],i=0;i<o.length;i+=1){for(a=!1,l=0;l<n.length;l+=1)if(o[i]===n[l]){a=!0;break}a||t.push(o[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function b(e,t){for(var n=e.className.split(/\s+/),o=0,i=n.length;o<i;o++)if(n[o]==t)return!0;return!1}function g(e,t,n){function o(){r&&i&&a&&(r(l),r=null)}t=d(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,a=!0,l=null,r=n||null;c?(t.onload=function(){i=!0,o()},t.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),o()}):setTimeout((function(){i=!0,o()}),0),f(e,"head",t)}function h(e,t,n,o){var i=e.c.getElementsByTagName("head")[0];if(i){var a=d(e,"script",{src:t}),l=!1;return a.onload=a.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&i.removeChild(a))},i.appendChild(a),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),o||5e3),a}return null}function m(){this.a=0,this.c=null}function _(e){return e.a++,function(){e.a--,x(e)}}function v(e,t){e.c=t,x(e)}function x(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function y(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function T(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var o=e[n].replace(/['"]/g,"");-1!=o.indexOf(" ")||/^\d/.test(o)?t.push("'"+o+"'"):t.push(o)}return t.join(",")}function j(e){return e.a+e.f}function C(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function k(e){var t=4,n="n",o=null;return e&&((o=e.match(/(normal|oblique|italic)/i))&&o[1]&&(n=o[1].substr(0,1).toLowerCase()),(o=e.match(/([1-9]00|normal|bold)/i))&&o[1]&&(/bold/i.test(o[1])?t=7:/[1-9]00/.test(o[1])&&(t=parseInt(o[1].substr(0,1),10)))),n+t}function S(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function O(e){if(e.g){var t=b(e.f,e.a.c("wf","active")),n=[],o=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),p(e.f,n,o)}M(e,"inactive")}function M(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,j(n)):e.h[t]())}function E(){this.c={}}function P(e,t){this.c=e,this.f=t,this.a=d(this.c,"span",{"aria-hidden":"true"},this.f)}function z(e){f(e.c,"body",e.a)}function B(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(e.c)+";font-style:"+C(e)+";font-weight:"+e.f+"00;"}function F(e,t,n,o,i,a){this.g=e,this.j=t,this.a=o,this.c=n,this.f=i||3e3,this.h=a||void 0}function H(e,t,n,o,i,a,l){this.v=e,this.B=t,this.c=n,this.a=o,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new P(this.c,this.s),this.h=new P(this.c,this.s),this.j=new P(this.c,this.s),this.m=new P(this.c,this.s),e=B(e=new y(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=e,e=B(e=new y(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=e,e=B(e=new y("serif",j(this.a))),this.j.a.style.cssText=e,e=B(e=new y("sans-serif",j(this.a))),this.m.a.style.cssText=e,z(this.g),z(this.h),z(this.j),z(this.m)}w.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},F.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),o=new Promise((function(o,i){!function a(){r()-n>=t.f?i():e.fonts.load(function(e){return C(e)+" "+e.f+"00 300px "+T(e.c)}(t.a),t.h).then((function(e){1<=e.length?o():setTimeout(a,25)}),(function(){i()}))}()})),i=null,a=new Promise((function(e,n){i=setTimeout(n,t.f)}));Promise.race([a,o]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var A={D:"serif",C:"sans-serif"},L=null;function D(){if(null===L){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);L=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return L}function I(e,t,n){for(var o in A)if(A.hasOwnProperty(o)&&t===e.f[A[o]]&&n===e.f[A[o]])return!0;return!1}function W(e,t){setTimeout(l((function(){u(this.g.a),u(this.h.a),u(this.j.a),u(this.m.a),t(this.a)}),e),0)}function N(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}H.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,o=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(n=o===t.f.serif&&i===t.f["sans-serif"])||(n=D()&&I(t,o,i)),n?r()-t.A>=t.w?D()&&I(t,o,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?W(t,t.v):W(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):W(t,t.v)}(this)};var R=null;function U(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&p(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),M(e,"active")):O(e.a))}function V(e){this.j=e,this.a=new E,this.h=0,this.f=this.g=!0}function G(e,t,n,o,i){var a=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,r=o||{};if(0===n.length&&a)O(t.a);else{t.f+=n.length,a&&(t.j=a);var s,c=[];for(s=0;s<n.length;s++){var d=n[s],f=r[d.c],u=t.a,b=d;if(u.g&&p(u.f,[u.a.c("wf",b.c,j(b).toString(),"loading")]),M(u,"fontloading",b),u=null,null===R)if(window.FontFace){b=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);R=b?42<parseInt(b[1],10):!g}else R=!1;u=R?new F(l(t.g,t),l(t.h,t),t.c,d,t.s,f):new H(l(t.g,t),l(t.h,t),t.c,d,t.s,e,f),c.push(u)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}N.prototype.g=function(e){var t=this.a;t.g&&p(t.f,[t.a.c("wf",e.c,j(e).toString(),"active")],[t.a.c("wf",e.c,j(e).toString(),"loading"),t.a.c("wf",e.c,j(e).toString(),"inactive")]),M(t,"fontactive",e),this.m=!0,U(this)},N.prototype.h=function(e){var t=this.a;if(t.g){var n=b(t.f,t.a.c("wf",e.c,j(e).toString(),"active")),o=[],i=[t.a.c("wf",e.c,j(e).toString(),"loading")];n||o.push(t.a.c("wf",e.c,j(e).toString(),"inactive")),p(t.f,o,i)}M(t,"fontinactive",e),U(this)},V.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var o=[],i=n.timeout;!function(e){e.g&&p(e.f,[e.a.c("wf","loading")]),M(e,"loading")}(t),o=function(e,t,n){var o,i=[];for(o in t)if(t.hasOwnProperty(o)){var a=e.c[o];a&&i.push(a(t[o],n))}return i}(e.a,n,e.c);var a=new N(e.c,t,i);for(e.h=o.length,t=0,n=o.length;t<n;t++)o[t].load((function(t,n,o){G(e,a,t,n,o)}))}(this,new S(this.c,e),e)},q.prototype.load=function(e){var t=this,n=t.a.projectId,o=t.a.version;if(n){var i=t.c.o;h(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(o?"?v="+o:""),(function(o){o?e([]):(i["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(i["__mti_fntLst"+n]){var o,a=i["__mti_fntLst"+n](),l=[];if(a)for(var r=0;r<a.length;r++){var s=a[r].fontfamily;null!=a[r].fontStyle&&null!=a[r].fontWeight?(o=a[r].fontStyle+a[r].fontWeight,l.push(new y(s,o))):l.push(new y(s))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},$.prototype.load=function(e){var t,n,o=this.a.urls||[],i=this.a.families||[],a=this.a.testStrings||{},l=new m;for(t=0,n=o.length;t<n;t++)g(this.c,o[t],_(l));var r=[];for(t=0,n=i.length;t<n;t++)if((o=i[t].split(":"))[1])for(var s=o[1].split(","),c=0;c<s.length;c+=1)r.push(new y(o[0],s[c]));else r.push(new y(o[0]));v(l,(function(){e(r,a)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function oe(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,n=this.c,o=new J(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var n=t.length,o=0;o<n;o++){var i=t[o].split(":");3==i.length&&e.f.push(i.pop());var a="";2==i.length&&""!=i[1]&&(a=":"),e.a.push(i.join(a))}}(o,i);var a=new X(i);!function(e){for(var t=e.f.length,n=0;n<t;n++){var o=e.f[n].split(":"),i=o[0].replace(/\+/g," "),a=["n4"];if(2<=o.length){var l;if(l=[],r=o[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var d;if((d=r[c]).match(/^[\w-]+$/))if(null==(f=ee.exec(d.toLowerCase())))d="";else{if(d=null==(d=f[2])||""==d?"n":Z[d],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));d=[d,f].join("")}else d="";d&&l.push(d)}0<l.length&&(a=l),3==o.length&&(l=[],0<(o=(o=o[2])?o.split(","):l).length&&(o=Q[o[0]])&&(e.c[i]=o))}for(e.c[i]||(o=Q[i])&&(e.c[i]=o),o=0;o<a.length;o+=1)e.a.push(new y(i,a[o]))}}(a),g(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],o=0;o<t;o++)n.push(e.a[o].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(o),_(t)),v(t,(function(){e(a.a,a.c,ne)}))},oe.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?h(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var o=[],i=0;i<t.length;i+=2)for(var a=t[i],l=t[i+1],r=0;r<l.length;r++)o.push(new y(a,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(o)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,n=this.c.o,o=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var i=0,a=n.fonts.length;i<a;++i){var l=n.fonts[i];o.a.push(new y(l.name,k("font-weight:"+l.weight+";font-style:"+l.style)))}e(o.a)},h(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ae=new V(window);ae.a.c.custom=function(e,t){return new $(t,e)},ae.a.c.fontdeck=function(e,t){return new ie(t,e)},ae.a.c.monotype=function(e,t){return new q(t,e)},ae.a.c.typekit=function(e,t){return new oe(t,e)},ae.a.c.google=function(e,t){return new te(t,e)};var le={load:l(ae.load,ae)};void 0===(o=function(){return le}.call(t,n,t,e))||(e.exports=o)}()},271:function(e,t,n){"use strict";var o=n(18),i=n.n(o)()((function(e){return e[1]}));i.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system,\r BlinkMacSystemFont,\r "Segoe UI",\r "Roboto",\r "Oxygen",\r "Ubuntu",\r "Cantarell",\r "Fira Sans",\r "Droid Sans",\r "Helvetica Neue",\r sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=i},272:function(e,t,n){"use strict";var o,i=n(273),a=n.n(i),l=n(1),r=n.n(l),s=n(17),c=n.n(s),d=n(271),f=0,u={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return f++||(o=c()(d.a,u)),p},p.unuse=function(){f>0&&!--f&&(o(),o=null)};var b=p,g=n(12),h=n(2);t.a=e=>(Object(l.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(h.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(a.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:g.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(h.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help)))},550:function(e,t,n){"use strict";n.r(t);var o=n(2),i=n(1),a=n.n(i),l=n(11),r=n(25),s=n(272),c=n(12),d=n(267),f=n(15),u=n(69),p=n(61),b=n(44),g=n(14),h=n(68),m=n(21),_=n(22),v=n(45),x=n(5),w=n(6);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const T=e=>{e=e.parentProps;const{attributes:t,setAttributes:n,deviceType:T}=e,{align:j,disableBullets:C,makeCollapsible:k,initialCollapse:S,icon:O,iconColor:M,bulletColor:E,iconSize:P,smoothScroll:z,smoothScrollOffset:B,smoothScrollDelay:F,scrollToTop:H,scrollToTopColor:A,scrollToTopBgColor:L,customWidth:D,widthDesktop:I,widthTablet:W,widthMobile:N,widthTypeMobile:R,widthTypeTablet:U,widthTypeDesktop:V,tColumnsDesktop:G,tColumnsTablet:q,tColumnsMobile:$,backgroundColor:J,linkColor:K,linkHoverColor:X,headingColor:Q,paddingTypeMobile:Y,paddingTypeTablet:Z,paddingTypeDesktop:ee,topPadding:te,rightPadding:ne,bottomPadding:oe,leftPadding:ie,topPaddingTablet:ae,rightPaddingTablet:le,bottomPaddingTablet:re,leftPaddingTablet:se,topPaddingMobile:ce,rightPaddingMobile:de,bottomPaddingMobile:fe,leftPaddingMobile:ue,marginLink:pe,paddingLink:be,headingBottom:ge,contentPaddingDesktop:he,contentPaddingTablet:me,contentPaddingMobile:_e,contentPaddingTypeMobile:ve,contentPaddingTypeTablet:xe,contentPaddingTypeDesktop:we,topMargin:ye,rightMargin:Te,bottomMargin:je,leftMargin:Ce,topMarginTablet:ke,rightMarginTablet:Se,bottomMarginTablet:Oe,leftMarginTablet:Me,topMarginMobile:Ee,rightMarginMobile:Pe,bottomMarginMobile:ze,leftMarginMobile:Be,marginTypeMobile:Fe,marginTypeTablet:He,marginTypeDesktop:Ae,borderStyle:Le,borderWidth:De,borderRadius:Ie,borderColor:We,borderHoverColor:Ne,loadGoogleFonts:Re,fontFamily:Ue,fontWeight:Ve,fontSize:Ge,fontSizeType:qe,fontSizeTablet:$e,fontSizeMobile:Je,lineHeightType:Ke,lineHeight:Xe,lineHeightTablet:Qe,lineHeightMobile:Ye,headingLoadGoogleFonts:Ze,headingFontFamily:et,headingFontWeight:tt,headingFontSize:nt,headingFontSizeType:ot,headingFontSizeTablet:it,headingFontSizeMobile:at,headingLineHeightType:lt,headingLineHeight:rt,headingLineHeightTablet:st,headingLineHeightMobile:ct,mappingHeaders:dt,headingAlignment:ft,fontStyle:ut,fontTransform:pt,fontDecoration:bt,headingFontStyle:gt,headingTransform:ht,headingDecoration:mt}=t;let _t,vt;if(!0===Re){const e={google:{families:[Ue+(Ve?":"+Ve:"")]}};_t=a.a.createElement(d.a,{config:e})}if(!0===Ze){const e={google:{families:[et+(tt?":"+tt:"")]}};vt=a.a.createElement(d.a,{config:e})}const xt="%"===V?100:1e3,wt="%"===U?100:1e3,yt="%"===R?100:1e3;return a.a.createElement(i.Suspense,{fallback:Object(l.a)()},a.a.createElement(x.BlockControls,null,a.a.createElement(x.BlockAlignmentToolbar,{value:j,onChange:e=>{n({align:e})},controls:["left","center","right"]})),a.a.createElement(x.InspectorControls,null,a.a.createElement(h.a,null,a.a.createElement(m.b,m.a.general,a.a.createElement(w.PanelBody,{title:Object(o.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},a.a.createElement("h2",null,Object(o.__)("Choose heading tags to generate table","ultimate-addons-for-gutenberg")),dt.map((e,t)=>a.a.createElement(w.PanelRow,{key:t},a.a.createElement("label",{htmlFor:"ub_toggle_h"+(t+1)},"H"+(t+1)),a.a.createElement(w.ToggleControl,{id:"ub_toggle_h"+(t+1),checked:e,onChange:()=>n({mappingHeaders:[...dt.slice(0,t),!dt[t],...dt.slice(t+1)]})})))),a.a.createElement(w.PanelBody,{title:Object(o.__)("Scroll","ultimate-addons-for-gutenberg"),initialOpen:!1},a.a.createElement(w.ToggleControl,{label:Object(o.__)("Smooth Scroll","ultimate-addons-for-gutenberg"),checked:z,help:Object(o.__)("This will be in action only in Front End.","ultimate-addons-for-gutenberg"),onChange:()=>n({smoothScroll:!z})}),z&&a.a.createElement(a.a.Fragment,null,a.a.createElement(g.a,{label:Object(o.__)("Smooth Scroll Offset (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:B,onChange:e=>n({smoothScrollOffset:e}),min:0,max:1e3,displayUnit:!1}),a.a.createElement(g.a,{label:Object(o.__)("Scroll Animation Delay (ms)","ultimate-addons-for-gutenberg"),setAttributes:n,value:F,onChange:e=>n({smoothScrollDelay:e}),min:100,max:5e3,displayUnit:!1})),a.a.createElement(w.ToggleControl,{label:Object(o.__)("Show Scroll To Top","ultimate-addons-for-gutenberg"),checked:H,help:Object(o.__)("This will add a scroll to top arrow at the bottom of page.","ultimate-addons-for-gutenberg"),onChange:()=>n({scrollToTop:!H})})),a.a.createElement(w.PanelBody,{title:Object(o.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},a.a.createElement(_.a,{setAttributes:n,label:Object(o.__)("Title Alignment","ultimate-addons-for-gutenberg"),data:{value:ft,label:"headingAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:a.a.createElement(w.Icon,{icon:Object(c.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:a.a.createElement(w.Icon,{icon:Object(c.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:a.a.createElement(w.Icon,{icon:Object(c.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),a.a.createElement(u.a,{label:Object(o.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:G,label:"tColumnsDesktop"},tablet:{value:q,label:"tColumnsTablet"},mobile:{value:$,label:"tColumnsMobile"}},min:1,max:10,displayUnit:!1,setAttributes:n}),a.a.createElement(u.a,{label:Object(o.__)("Gap Between Lists","ultimate-addons-for-gutenberg"),data:{desktop:{value:he,label:"contentPaddingDesktop",unit:{value:we,label:"contentPaddingTypeDesktop"}},tablet:{value:me,label:"contentPaddingTablet",unit:{value:xe,label:"contentPaddingTypeTablet"}},mobile:{value:_e,label:"contentPaddingMobile",unit:{value:ve,label:"contentPaddingTypeMobile"}}},min:0,max:100,units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],setAttributes:n}),a.a.createElement(w.ToggleControl,{label:Object(o.__)("Custom Width","ultimate-addons-for-gutenberg"),checked:D,onChange:()=>n({customWidth:!D}),help:Object(o.__)("Table's width will be auto if this is kept off.","ultimate-addons-for-gutenberg")}),D&&a.a.createElement(u.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:I,label:"widthDesktop",unit:{value:V,label:"widthTypeDesktop"},min:0,max:xt},tablet:{value:W,label:"widthTablet",unit:{value:U,label:"widthTypeTablet"},min:0,max:wt},mobile:{value:N,label:"widthMobile",unit:{value:R,label:"widthTypeMobile"},min:0,max:yt}},units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],setAttributes:n}),a.a.createElement(w.ToggleControl,{label:Object(o.__)("Disable Bullet Points","ultimate-addons-for-gutenberg"),checked:C,onChange:()=>n({disableBullets:!C})}),a.a.createElement(w.ToggleControl,{label:Object(o.__)("Make Content Collapsible","ultimate-addons-for-gutenberg"),checked:k,onChange:()=>n({makeCollapsible:!k})}),k&&a.a.createElement(a.a.Fragment,null,a.a.createElement(w.ToggleControl,{label:Object(o.__)("Keep Collapsed Initially","ultimate-addons-for-gutenberg"),checked:S,onChange:()=>n({initialCollapse:!S})}),a.a.createElement(s.a,{label:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),value:O,onChange:e=>n({icon:e})}),a.a.createElement(g.a,{label:Object(o.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:n,value:P,onChange:e=>n({iconSize:e}),min:0,max:300,displayUnit:!1})))),a.a.createElement(m.b,m.a.style,a.a.createElement(w.PanelBody,{title:Object(o.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},a.a.createElement(f.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Q||"",onColorChange:e=>n({headingColor:e})}),a.a.createElement(r.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:n,loadGoogleFonts:{value:Ze,label:"headingLoadGoogleFonts"},fontFamily:{value:et,label:"headingFontFamily"},fontWeight:{value:tt,label:"headingFontWeight"},fontStyle:{value:gt,label:"headingFontStyle"},transform:{value:ht,label:"headingTransform"},decoration:{value:mt,label:"headingDecoration"},fontSizeType:{value:ot,label:"headingFontSizeType"},fontSize:{value:nt,label:"headingFontSize"},fontSizeMobile:{value:at,label:"headingFontSizeMobile"},fontSizeTablet:{value:it,label:"headingFontSizeTablet"},lineHeightType:{value:lt,label:"headingLineHeightType"},lineHeight:{value:rt,label:"headingLineHeight"},lineHeightMobile:{value:ct,label:"headingLineHeightMobile"},lineHeightTablet:{value:st,label:"headingLineHeightTablet"}}),a.a.createElement(g.a,{label:Object(o.__)("Bottom Space","ultimate-addons-for-gutenberg"),setAttributes:n,value:ge,onChange:e=>n({headingBottom:e}),min:0,max:50,displayUnit:!1})),a.a.createElement(w.PanelBody,{title:Object(o.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},a.a.createElement(v.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:a.a.createElement(f.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:K||"",onColorChange:e=>n({linkColor:e})}),hover:a.a.createElement(f.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:X||"",onColorChange:e=>n({linkHoverColor:e})}),disableBottomSeparator:!1}),a.a.createElement(r.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:n,loadGoogleFonts:{value:Re,label:"loadGoogleFonts"},fontFamily:{value:Ue,label:"fontFamily"},fontWeight:{value:Ve,label:"fontWeight"},fontStyle:{value:ut,label:"fontStyle"},transform:{value:pt,label:"fontTransform"},decoration:{value:bt,label:"fontDecoration"},fontSizeType:{value:qe,label:"fontSizeType"},fontSize:{value:Ge,label:"fontSize"},fontSizeMobile:{value:Je,label:"fontSizeMobile"},fontSizeTablet:{value:$e,label:"fontSizeTablet"},lineHeightType:{value:Ke,label:"lineHeightType"},lineHeight:{value:Xe,label:"lineHeight"},lineHeightMobile:{value:Ye,label:"lineHeightMobile"},lineHeightTablet:{value:Qe,label:"lineHeightTablet"}})),!C&&a.a.createElement(w.PanelBody,{title:Object(o.__)("Bullet Points","ultimate-addons-for-gutenberg"),initialOpen:!1},a.a.createElement(f.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:e=>n({bulletColor:e})})),k&&a.a.createElement(w.PanelBody,{title:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},a.a.createElement(f.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:e=>n({iconColor:e})})),H&&a.a.createElement(w.PanelBody,{title:Object(o.__)("Scroll To Top","ultimate-addons-for-gutenberg"),initialOpen:!1},a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{label:Object(o.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:A||"",onColorChange:e=>n({scrollToTopColor:e})}),a.a.createElement(f.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:L||"",onColorChange:e=>n({scrollToTopBgColor:e})}))),a.a.createElement(w.PanelBody,{title:Object(o.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},a.a.createElement(f.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:J||"",onColorChange:e=>n({backgroundColor:e})})),a.a.createElement(w.PanelBody,{title:Object(o.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},a.a.createElement(p.a,{setAttributes:n,borderStyle:{value:Le,label:"borderStyle",title:Object(o.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:De,label:"borderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Ie,label:"borderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:We,label:"borderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Ne,label:"borderHoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),a.a.createElement(w.PanelBody,{title:Object(o.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},a.a.createElement(b.a,y({},e,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:te,label:"topPadding"},valueRight:{value:ne,label:"rightPadding"},valueBottom:{value:oe,label:"bottomPadding"},valueLeft:{value:ie,label:"leftPadding"},valueTopTablet:{value:ae,label:"topPaddingTablet"},valueRightTablet:{value:le,label:"rightPaddingTablet"},valueBottomTablet:{value:re,label:"bottomPaddingTablet"},valueLeftTablet:{value:se,label:"leftPaddingTablet"},valueTopMobile:{value:ce,label:"topPaddingMobile"},valueRightMobile:{value:de,label:"rightPaddingMobile"},valueBottomMobile:{value:fe,label:"bottomPaddingMobile"},valueLeftMobile:{value:ue,label:"leftPaddingMobile"},unit:{value:ee,label:"paddingTypeDesktop"},mUnit:{value:Y,label:"paddingTypeMobile"},tUnit:{value:Z,label:"paddingTypeTablet"},deviceType:T,attributes:t,setAttributes:n,link:{value:be,label:"paddingLink"}})),a.a.createElement(b.a,y({},e,{label:Object(o.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:ye,label:"topMargin"},valueRight:{value:Te,label:"rightMargin"},valueBottom:{value:je,label:"bottomMargin"},valueLeft:{value:Ce,label:"leftMargin"},valueTopTablet:{value:ke,label:"topMarginTablet"},valueRightTablet:{value:Se,label:"rightMarginTablet"},valueBottomTablet:{value:Oe,label:"bottomMarginTablet"},valueLeftTablet:{value:Me,label:"leftMarginTablet"},valueTopMobile:{value:Ee,label:"topMarginMobile"},valueRightMobile:{value:Pe,label:"rightMarginMobile"},valueBottomMobile:{value:ze,label:"bottomMarginMobile"},valueLeftMobile:{value:Be,label:"leftMarginMobile"},unit:{value:Ae,label:"marginTypeDesktop"},mUnit:{value:Fe,label:"marginTypeMobile"},tUnit:{value:He,label:"marginTypeTablet"},deviceType:T,attributes:t,setAttributes:n,link:{value:pe,label:"marginLink"}})))),a.a.createElement(m.b,y({},m.a.advance,{parentProps:e})))),_t,vt)};t.default=a.a.memo(T)}}]);