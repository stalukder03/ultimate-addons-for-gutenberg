(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[105],{125:function(e,t,n){"use strict";var a=n(11),o=n(27),l=n.n(o),i=n(126),r=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===d)var d=[];var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,a,o,l=(a=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(a);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=l.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){d.includes(e)||d.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){d.includes(t.props.config.google.families[0])||(r.a.load(s(s({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=i,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&b(t.prototype,n),i}(a.Component);m.propTypes={config:l.a.object.isRequired,children:l.a.element,onStatus:l.a.func.isRequired},m.defaultProps={onStatus:function(){}},t.a=m},126:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function i(e,t,n){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function s(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,i=0;i<a.length;i+=1)if(t[o]===a[i]){l=!0;break}l||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(l=!1,i=0;i<n.length;i+=1)if(a[o]===n[i]){l=!0;break}l||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function h(e,t,n){function a(){r&&o&&l&&(r(i),r=null)}t=s(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,i=null,r=n||null;c?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),f(e,"head",t)}function d(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var l=s(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,n&&n(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,n&&n(Error("Script load timeout")))}),a||5e3),l}return null}function m(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,_(e)}}function y(e,t){e.c=t,_(e)}function _(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function C(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function E(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function S(e){return e.a+e.f}function x(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function O(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function j(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function T(e){if(e.g){var t=g(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),p(e.f,n,a)}R(e,"inactive")}function R(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,S(n)):e.h[t]())}function k(){this.c={}}function P(e,t){this.c=e,this.f=t,this.a=s(this.c,"span",{"aria-hidden":"true"},this.f)}function N(e){f(e.c,"body",e.a)}function F(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+E(e.c)+";font-style:"+x(e)+";font-weight:"+e.f+"00;"}function z(e,t,n,a,o,l){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=l||void 0}function B(e,t,n,a,o,l,i){this.v=e,this.B=t,this.c=n,this.a=a,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new P(this.c,this.s),this.h=new P(this.c,this.s),this.j=new P(this.c,this.s),this.m=new P(this.c,this.s),e=F(e=new C(this.a.c+",serif",S(this.a))),this.g.a.style.cssText=e,e=F(e=new C(this.a.c+",sans-serif",S(this.a))),this.h.a.style.cssText=e,e=F(e=new C("serif",S(this.a))),this.j.a.style.cssText=e,e=F(e=new C("sans-serif",S(this.a))),this.m.a.style.cssText=e,N(this.g),N(this.h),N(this.j),N(this.m)}w.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},z.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),a=new Promise((function(a,o){!function l(){r()-n>=t.f?o():e.fonts.load(function(e){return x(e)+" "+e.f+"00 300px "+E(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([l,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var H={D:"serif",C:"sans-serif"},A=null;function D(){if(null===A){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);A=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return A}function L(e,t,n){for(var a in H)if(H.hasOwnProperty(a)&&t===e.f[H[a]]&&n===e.f[H[a]])return!0;return!1}function I(e,t){setTimeout(i((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function M(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}B.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=D()&&L(t,a,o)),n?r()-t.A>=t.w?D()&&L(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?I(t,t.v):I(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):I(t,t.v)}(this)};var W=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&p(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),R(e,"active")):T(e.a))}function V(e){this.j=e,this.a=new k,this.h=0,this.f=this.g=!0}function q(e,t,n,a,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=a||{};if(0===n.length&&l)T(t.a);else{t.f+=n.length,l&&(t.j=l);var u,c=[];for(u=0;u<n.length;u++){var s=n[u],f=r[s.c],b=t.a,g=s;if(b.g&&p(b.f,[b.a.c("wf",g.c,S(g).toString(),"loading")]),R(b,"fontloading",g),b=null,null===W)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);W=g?42<parseInt(g[1],10):!h}else W=!1;b=W?new z(i(t.g,t),i(t.h,t),t.c,s,t.s,f):new B(i(t.g,t),i(t.h,t),t.c,s,t.s,e,f),c.push(b)}for(u=0;u<c.length;u++)c[u].start()}}),0)}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e,this.a=t}function U(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}M.prototype.g=function(e){var t=this.a;t.g&&p(t.f,[t.a.c("wf",e.c,S(e).toString(),"active")],[t.a.c("wf",e.c,S(e).toString(),"loading"),t.a.c("wf",e.c,S(e).toString(),"inactive")]),R(t,"fontactive",e),this.m=!0,G(this)},M.prototype.h=function(e){var t=this.a;if(t.g){var n=g(t.f,t.a.c("wf",e.c,S(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,S(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,S(e).toString(),"inactive")),p(t.f,a,o)}R(t,"fontinactive",e),G(this)},V.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&p(e.f,[e.a.c("wf","loading")]),R(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var l=e.c[a];l&&o.push(l(t[a],n))}return o}(e.a,n,e.c);var l=new M(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){q(e,l,t,n,a)}))}(this,new j(this.c,e),e)},$.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;d(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,l=o["__mti_fntLst"+n](),i=[];if(l)for(var r=0;r<l.length;r++){var u=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(a=l[r].fontStyle+l[r].fontWeight,i.push(new C(u,a))):i.push(new C(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},J.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new m;for(t=0,n=a.length;t<n;t++)h(this.c,a[t],v(i));var r=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var u=a[1].split(","),c=0;c<u.length;c+=1)r.push(new C(a[0],u[c]));else r.push(new C(a[0]));y(i,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,n=this.c,a=new U(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(a,o);var l=new X(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),l=["n4"];if(2<=a.length){var i;if(i=[],r=a[1])for(var r,u=(r=r.split(",")).length,c=0;c<u;c++){var s;if((s=r[c]).match(/^[\w-]+$/))if(null==(f=ee.exec(s.toLowerCase())))s="";else{if(s=null==(s=f[2])||""==s?"n":Z[s],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));s=[s,f].join("")}else s="";s&&i.push(s)}0<i.length&&(l=i),3==a.length&&(i=[],0<(a=(a=a[2])?a.split(","):i).length&&(a=Q[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=Q[o])&&(e.c[o]=a),a=0;a<l.length;a+=1)e.a.push(new C(o,l[a]))}}(l),h(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),y(t,(function(){e(l.a,l.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?d(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var l=t[o],i=t[o+1],r=0;r<i.length;r++)a.push(new C(l,i[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,l=n.fonts.length;o<l;++o){var i=n.fonts[o];a.a.push(new C(i.name,O("font-weight:"+i.weight+";font-style:"+i.style)))}e(a.a)},d(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new V(window);le.a.c.custom=function(e,t){return new J(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new $(t,e)},le.a.c.typekit=function(e,t){return new ae(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(a=function(){return ie}.call(t,n,t,e))||(e.exports=a)}()},134:function(e,t,n){"use strict";var a=n(2),o=n(4),l=n(5),i=n(11);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(d,e);var t,n,r,g,h=(r=d,g=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(g){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function d(){var e;return u(this,d),(e=h.apply(this,arguments)).onAdvancedControlClick=e.onAdvancedControlClick.bind(b(e)),e.onAdvancedControlReset=e.onAdvancedControlReset.bind(b(e)),e}return t=d,(n=[{key:"onAdvancedControlClick",value:function(){var e=!0,t=Object(a.__)("Hide Advanced","ultimate-addons-for-gutenberg");null!==this.state&&!0===this.state.showAdvancedControls&&(e=!1,t=Object(a.__)("Advanced","ultimate-addons-for-gutenberg")),this.setState({showAdvancedControls:e,showAdvancedControlsLabel:t})}},{key:"onAdvancedControlReset",value:function(){var e=this.props.setAttributes;e({boxShadowColor:""}),e({boxShadowHOffset:""}),e({boxShadowVOffset:""}),e({boxShadowBlur:""}),e({boxShadowSpread:""}),e({boxShadowPosition:""})}},{key:"render",value:function(){var e,t,n,r=this.props,u=r.setAttributes,c=r.boxShadowColor,s=r.boxShadowHOffset,f=r.boxShadowVOffset,b=r.boxShadowBlur,p=r.boxShadowSpread,g=r.boxShadowPosition;return null!==this.state&&!0===this.state.showAdvancedControls&&(e=React.createElement("div",{className:"uagb-box-shadow-advanced"},React.createElement(i.Fragment,null,React.createElement("p",{className:"uagb-setting-label"},c.label,React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:c.value}}))),React.createElement(o.ColorPalette,{value:c.value,onChange:function(e){return u({boxShadowColor:e})},allowReset:!0})),React.createElement(i.Fragment,null,React.createElement("h2",null,s.label),React.createElement(l.RangeControl,{value:s.value,onChange:function(e){return u({boxShadowHOffset:e})},min:-100,max:100,allowReset:!0})),React.createElement(i.Fragment,null,React.createElement("h2",null,f.label),React.createElement(l.RangeControl,{value:f.value,onChange:function(e){return u({boxShadowVOffset:e})},min:-100,max:100,allowReset:!0})),React.createElement(i.Fragment,null,React.createElement("h2",null,b.label),React.createElement(l.RangeControl,{value:b.value,onChange:function(e){return u({boxShadowBlur:e})},min:0,max:100,allowReset:!0})),React.createElement(i.Fragment,null,React.createElement("h2",null,p.label),React.createElement(l.RangeControl,{value:p.value,onChange:function(e){return u({boxShadowSpread:e})},min:0,max:100,allowReset:!0})),React.createElement(i.Fragment,null,React.createElement(l.SelectControl,{label:g.label,value:g.value,onChange:function(e){return u({boxShadowPosition:e})},options:[{value:"inset",label:Object(a.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(a.__)("Outset","ultimate-addons-for-gutenberg")}]})))),n=React.createElement(l.Button,{className:"uagb-size-btn uagb-typography-reset-btn",isSmall:!0,"aria-pressed":null!==this.state,onClick:this.onAdvancedControlReset},React.createElement(l.Dashicon,{icon:"image-rotate"})),t=React.createElement(l.Button,{className:"uagb-size-btn uagb-typography-control-btn",isSmall:!0,"aria-pressed":null!==this.state,onClick:this.onAdvancedControlClick},React.createElement(l.Dashicon,{icon:"admin-tools"})),React.createElement("div",{className:"uag-typography-option-actions"},React.createElement("span",null,this.props.label),t,n,e)}}])&&c(t.prototype,n),d}(i.Component);t.a=g},492:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(6),l=n(53),i=n(19),r=n(134),u=n(125),c=n(1),s=n.n(c),f=n(5),b=n(4),p=function(e){var t,n,c=e=e.parentProps,p=c.attributes,g=c.setAttributes,h=c.deviceType,d=p.layout,m=p.placeholder,v=p.inputSize,y=p.textColor,_=p.inputBgColor,w=p.boxShadowColor,C=p.boxShadowHOffset,E=p.boxShadowVOffset,S=p.boxShadowBlur,x=p.boxShadowSpread,O=p.boxShadowPosition,j=p.borderStyle,T=p.borderWidth,R=p.borderRadius,k=p.borderColor,P=p.buttonBgColor,N=p.buttonBgHoverColor,F=p.buttonIconColor,z=p.buttonIconHoverColor,B=p.buttonWidth,H=p.buttonIconSize,A=p.iconColor,D=p.iconSize,L=p.inputloadGoogleFonts,I=p.inputFontFamily,M=p.inputFontWeight,W=p.inputFontSubset,G=p.inputFontSize,V=p.inputFontSizeType,q=p.inputFontSizeTablet,$=p.inputFontSizeMobile,J=p.inputLineHeight,U=p.inputLineHeightType,K=p.inputLineHeightTablet,X=p.inputLineHeightMobile,Q=p.inputPaddingTypeDesktop,Y=p.vinputPaddingMobile,Z=p.vinputPaddingTablet,ee=p.vinputPaddingDesktop,te=p.hinputPaddingMobile,ne=p.hinputPaddingTablet,ae=p.hinputPaddingDesktop,oe=p.buttonType,le=p.buttonText,ie=p.buttonloadGoogleFonts,re=p.buttonFontFamily,ue=p.buttonFontWeight,ce=p.buttonFontSubset,se=p.buttonFontSize,fe=p.buttonFontSizeType,be=p.buttonFontSizeTablet,pe=p.buttonFontSizeMobile,ge=p.buttonLineHeight,he=p.buttonLineHeightType,de=p.buttonLineHeightTablet,me=p.buttonLineHeightMobile,ve=p.buttonTextColor,ye=p.buttonTextHoverColor,_e=p.inputSizeType;if(1==L){var we={google:{families:[I+(M?":"+M:"")]}};t=s.a.createElement(u.a,{config:we})}if(1==ie){var Ce={google:{families:[re+(ue?":"+ue:"")]}};n=s.a.createElement(u.a,{config:Ce})}return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.InspectorControls,null,s.a.createElement(f.PanelBody,{title:Object(a.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},s.a.createElement(f.SelectControl,{label:Object(a.__)("Layout","ultimate-addons-for-gutenberg"),value:d,options:[{value:"input-button",label:Object(a.__)("Classic","ultimate-addons-for-gutenberg")},{value:"input",label:Object(a.__)("Minimal","ultimate-addons-for-gutenberg")}],onChange:function(e){return g({layout:e})}}),s.a.createElement(s.a.Fragment,null,s.a.createElement(f.TextControl,{label:Object(a.__)("Placeholder","ultimate-addons-for-gutenberg"),value:m,onChange:function(e){return g({placeholder:e})}}),s.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(a.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===_e,"aria-pressed":"px"===_e,onClick:function(){return g({inputSizeType:"px"})}},"px"),s.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===_e,"aria-pressed":"%"===_e,onClick:function(){return g({inputSizeType:"%"})}},"%")),s.a.createElement(f.RangeControl,{label:Object(a.__)("Input Width","ultimate-addons-for-gutenberg"),value:v,onChange:function(e){return g({inputSize:e})},min:0,max:"px"===_e?500:100}))),s.a.createElement(f.PanelBody,{title:Object(a.__)("Input Box","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement("p",{className:"uagb-setting-label"},Object(a.__)("Text Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:y}}))),s.a.createElement(b.ColorPalette,{value:y,onChange:function(e){return g({textColor:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(a.__)("Background Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:_}}))),s.a.createElement(b.ColorPalette,{value:_,onChange:function(e){return g({inputBgColor:e})},allowReset:!0}),s.a.createElement("hr",null),s.a.createElement("h2",null,Object(a.__)("Border","ultimate-addons-for-gutenberg")),s.a.createElement(f.SelectControl,{label:Object(a.__)("Style","ultimate-addons-for-gutenberg"),value:j,options:[{value:"none",label:Object(a.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(a.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(a.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(a.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(a.__)("Double","ultimate-addons-for-gutenberg")}],onChange:function(e){g({borderStyle:e})}}),"none"!==j&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.RangeControl,{label:Object(a.__)("Thickness (px)","ultimate-addons-for-gutenberg"),value:T,onChange:function(e){g({borderWidth:e})},min:0,max:20}),s.a.createElement(f.RangeControl,{label:Object(a.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),value:R,onChange:function(e){g({borderRadius:e})},min:0,max:50}),s.a.createElement("p",{className:"uagb-setting-label"},Object(a.__)("Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:k}}))),s.a.createElement(b.ColorPalette,{value:k,onChange:function(e){return g({borderColor:e})},allowReset:!0})),s.a.createElement("hr",null),s.a.createElement(l.a,null),"Desktop"===h&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(a.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Q,"aria-pressed":"px"===Q,onClick:function(){return g({inputPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Q,"aria-pressed":"%"===Q,onClick:function(){return g({inputPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(a.__)("Padding","ultimate-addons-for-gutenberg")),s.a.createElement(f.RangeControl,{label:o.a.vertical_spacing,className:"uagb-margin-control",value:ee,onChange:function(e){return g({vinputPaddingDesktop:e})},min:0,max:100,allowReset:!0}),s.a.createElement(f.RangeControl,{label:o.a.horizontal_spacing,className:"uagb-margin-control",value:ae,onChange:function(e){return g({hinputPaddingDesktop:e})},min:0,max:100,allowReset:!0})),"Tablet"===h&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(a.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Q,"aria-pressed":"px"===Q,onClick:function(){return g({inputPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Q,"aria-pressed":"%"===Q,onClick:function(){return g({inputPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(a.__)("Padding","ultimate-addons-for-gutenberg")),s.a.createElement(f.RangeControl,{label:o.a.vertical_spacing,className:"uagb-margin-control",value:Z,onChange:function(e){return g({vinputPaddingTablet:e})},min:0,max:100,allowReset:!0}),s.a.createElement(f.RangeControl,{label:o.a.horizontal_spacing,className:"uagb-margin-control",value:ne,onChange:function(e){return g({hinputPaddingTablet:e})},min:0,max:100,allowReset:!0})),"Mobile"===h&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(a.__)("Size Type","ultimate-addons-for-gutenberg")},s.a.createElement(f.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Q,"aria-pressed":"px"===Q,onClick:function(){return g({inputPaddingTypeDesktop:"px"})}},"px"),s.a.createElement(f.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Q,"aria-pressed":"%"===Q,onClick:function(){return g({inputPaddingTypeDesktop:"%"})}},"%")),s.a.createElement("h2",null,Object(a.__)("Padding","ultimate-addons-for-gutenberg")),s.a.createElement(f.RangeControl,{label:o.a.vertical_spacing,className:"uagb-margin-control",value:Y,onChange:function(e){return g({vinputPaddingMobile:e})},min:0,max:100,allowReset:!0}),s.a.createElement(f.RangeControl,{label:o.a.horizontal_spacing,className:"uagb-margin-control",value:te,onChange:function(e){return g({hinputPaddingMobile:e})},min:0,max:100,allowReset:!0})),s.a.createElement("hr",null),s.a.createElement(i.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:p,setAttributes:g,loadGoogleFonts:{value:L,label:"inputloadGoogleFonts"},fontFamily:{value:I,label:"inputFontFamily"},fontWeight:{value:M,label:"inputFontWeight"},fontSubset:{value:W,label:"inputFontSubset"},fontSizeType:{value:V,label:"inputFontSizeType"},fontSize:{value:G,label:"inputFontSize"},fontSizeMobile:{value:$,label:"inputFontSizeMobile"},fontSizeTablet:{value:q,label:"inputFontSizeTablet"},lineHeightType:{value:U,label:"inputLineHeightType"},lineHeight:{value:J,label:"inputLineHeight"},lineHeightMobile:{value:X,label:"inputLineHeightMobile"},lineHeightTablet:{value:K,label:"inputLineHeightTablet"}}),s.a.createElement(r.a,{setAttributes:g,label:Object(a.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:w,label:Object(a.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:C,label:Object(a.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:E,label:Object(a.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:S,label:Object(a.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:x,label:Object(a.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:O,label:Object(a.__)("Position","ultimate-addons-for-gutenberg")}})),"input-button"===d?s.a.createElement(f.PanelBody,{title:Object(a.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(s.a.Fragment,null,s.a.createElement(f.SelectControl,{label:Object(a.__)("Type","ultimate-addons-for-gutenberg"),value:oe,options:[{value:"icon",label:Object(a.__)("Icon","ultimate-addons-for-gutenberg")},{value:"text",label:Object(a.__)("Text","ultimate-addons-for-gutenberg")}],onChange:function(e){g({buttonType:e})}}),"text"===oe&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.TextControl,{label:"Text",value:le,onChange:function(e){g({buttonText:e})}}),s.a.createElement(i.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:p,setAttributes:g,loadGoogleFonts:{value:ie,label:"buttonloadGoogleFonts"},fontFamily:{value:re,label:"buttonFontFamily"},fontWeight:{value:ue,label:"buttonFontWeight"},fontSubset:{value:ce,label:"buttonFontSubset"},fontSizeType:{value:fe,label:"buttonFontSizeType"},fontSize:{value:se,label:"buttonFontSize"},fontSizeMobile:{value:pe,label:"buttonFontSizeMobile"},fontSizeTablet:{value:be,label:"buttonFontSizeTablet"},lineHeightType:{value:he,label:"buttonLineHeightType"},lineHeight:{value:ge,label:"buttonLineHeight"},lineHeightMobile:{value:me,label:"buttonLineHeightMobile"},lineHeightTablet:{value:de,label:"buttonLineHeightTablet"}})),s.a.createElement(f.RangeControl,{label:Object(a.__)("Width","ultimate-addons-for-gutenberg"),value:B,onChange:function(e){g({buttonWidth:e})},min:0,max:500}),s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"uagb-setting-label"},Object(a.__)("Background Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:P}}))),s.a.createElement(b.ColorPalette,{value:P,onChange:function(e){return g({buttonBgColor:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(a.__)("Background Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:N}}))),s.a.createElement(b.ColorPalette,{value:N,onChange:function(e){return g({buttonBgHoverColor:e})},allowReset:!0}),"text"===oe&&s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"uagb-setting-label"},Object(a.__)("Text Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ve}}))),s.a.createElement(b.ColorPalette,{value:ve,onChange:function(e){return g({buttonTextColor:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(a.__)("Text Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ye}}))),s.a.createElement(b.ColorPalette,{value:ye,onChange:function(e){return g({buttonTextHoverColor:e})},allowReset:!0}))),"icon"===oe&&s.a.createElement(s.a.Fragment,null,s.a.createElement("hr",{className:"uagb-editor__separator"}),s.a.createElement("h2",null,Object(a.__)("Icon","ultimate-addons-for-gutenberg")),s.a.createElement(f.RangeControl,{label:Object(a.__)("Size","ultimate-addons-for-gutenberg"),value:H,onChange:function(e){g({buttonIconSize:e})},min:0,max:500}),s.a.createElement("p",{className:"uagb-setting-label"},Object(a.__)("Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:F}}))),s.a.createElement(b.ColorPalette,{value:F,onChange:function(e){return g({buttonIconColor:e})},allowReset:!0}),s.a.createElement("p",{className:"uagb-setting-label"},Object(a.__)("Hover Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:z}}))),s.a.createElement(b.ColorPalette,{value:z,onChange:function(e){return g({buttonIconHoverColor:e})},allowReset:!0})))):"","input"===d?s.a.createElement(f.PanelBody,{title:Object(a.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(s.a.Fragment,null,s.a.createElement(f.RangeControl,{label:Object(a.__)("Size","ultimate-addons-for-gutenberg"),value:D,onChange:function(e){g({iconSize:e})},min:0,max:500}),s.a.createElement("p",{className:"uagb-setting-label"},Object(a.__)("Color","ultimate-addons-for-gutenberg"),s.a.createElement("span",{className:"components-base-control__label"},s.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:A}}))),s.a.createElement(b.ColorPalette,{value:A,onChange:function(e){return g({iconColor:e})},allowReset:!0}))):""),t,n)};t.default=s.a.memo(p)}}]);