(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[58],{131:function(e,t,n){"use strict";var a=n(11),o=n(27),i=n.n(o),l=n(132),r=n.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===m)var m=[];var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(l,e);var t,n,a,o,i=(a=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(a);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){m.includes(e)||m.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){m.includes(t.props.config.google.families[0])||(r.a.load(c(c({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=l,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&h(t.prototype,n),l}(a.Component);p.propTypes={config:i.a.object.isRequired,children:i.a.element,onStatus:i.a.func.isRequired},p.defaultProps={onStatus:function(){}},t.a=p},132:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function i(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:i).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function c(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function h(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var i=!1,l=0;l<a.length;l+=1)if(t[o]===a[l]){i=!0;break}i||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(i=!1,l=0;l<n.length;l+=1)if(a[o]===n[l]){i=!0;break}i||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function b(e,t,n){function a(){r&&o&&i&&(r(l),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,i=!0,l=null,r=n||null;u?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),f(e,"head",t)}function m(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var i=c(e,"script",{src:t}),l=!1;return i.onload=i.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),i.onload=i.onreadystatechange=null,"HEAD"==i.parentNode.tagName&&o.removeChild(i))},o.appendChild(i),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),i}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,_(e)}}function y(e,t){e.c=t,_(e)}function _(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function S(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function O(e){return e.a+e.f}function T(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function E(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function H(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function C(e){if(e.g){var t=d(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),g(e.f,n,a)}F(e,"inactive")}function F(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,O(n)):e.h[t]())}function k(){this.c={}}function x(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function z(e){f(e.c,"body",e.a)}function L(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+T(e)+";font-weight:"+e.f+"00;"}function M(e,t,n,a,o,i){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=i||void 0}function N(e,t,n,a,o,i,l){this.v=e,this.B=t,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=o||3e3,this.u=i||null,this.m=this.j=this.h=this.g=null,this.g=new x(this.c,this.s),this.h=new x(this.c,this.s),this.j=new x(this.c,this.s),this.m=new x(this.c,this.s),e=L(e=new S(this.a.c+",serif",O(this.a))),this.g.a.style.cssText=e,e=L(e=new S(this.a.c+",sans-serif",O(this.a))),this.h.a.style.cssText=e,e=L(e=new S("serif",O(this.a))),this.j.a.style.cssText=e,e=L(e=new S("sans-serif",O(this.a))),this.m.a.style.cssText=e,z(this.g),z(this.h),z(this.j),z(this.m)}w.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},M.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),a=new Promise((function(a,o){!function i(){r()-n>=t.f?o():e.fonts.load(function(e){return T(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(i,25)}),(function(){o()}))}()})),o=null,i=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([i,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var R={D:"serif",C:"sans-serif"},I=null;function P(){if(null===I){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);I=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return I}function A(e,t,n){for(var a in R)if(R.hasOwnProperty(a)&&t===e.f[R[a]]&&n===e.f[R[a]])return!0;return!1}function W(e,t){setTimeout(l((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),t(this.a)}),e),0)}function B(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}N.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=P()&&A(t,a,o)),n?r()-t.A>=t.w?P()&&A(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?W(t,t.v):W(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):W(t,t.v)}(this)};var D=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&g(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),F(e,"active")):C(e.a))}function $(e){this.j=e,this.a=new k,this.h=0,this.f=this.g=!0}function q(e,t,n,a,o){var i=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=a||{};if(0===n.length&&i)C(t.a);else{t.f+=n.length,i&&(t.j=i);var s,u=[];for(s=0;s<n.length;s++){var c=n[s],f=r[c.c],h=t.a,d=c;if(h.g&&g(h.f,[h.a.c("wf",d.c,O(d).toString(),"loading")]),F(h,"fontloading",d),h=null,null===D)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var b=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=d?42<parseInt(d[1],10):!b}else D=!1;h=D?new M(l(t.g,t),l(t.h,t),t.c,c,t.s,f):new N(l(t.g,t),l(t.h,t),t.c,c,t.s,e,f),u.push(h)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function U(e,t){this.c=e,this.a=t}function Y(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}B.prototype.g=function(e){var t=this.a;t.g&&g(t.f,[t.a.c("wf",e.c,O(e).toString(),"active")],[t.a.c("wf",e.c,O(e).toString(),"loading"),t.a.c("wf",e.c,O(e).toString(),"inactive")]),F(t,"fontactive",e),this.m=!0,G(this)},B.prototype.h=function(e){var t=this.a;if(t.g){var n=d(t.f,t.a.c("wf",e.c,O(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,O(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,O(e).toString(),"inactive")),g(t.f,a,o)}F(t,"fontinactive",e),G(this)},$.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&g(e.f,[e.a.c("wf","loading")]),F(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var i=e.c[a];i&&o.push(i(t[a],n))}return o}(e.a,n,e.c);var i=new B(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){q(e,i,t,n,a)}))}(this,new H(this.c,e),e)},U.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,i=o["__mti_fntLst"+n](),l=[];if(i)for(var r=0;r<i.length;r++){var s=i[r].fontfamily;null!=i[r].fontStyle&&null!=i[r].fontWeight?(a=i[r].fontStyle+i[r].fontWeight,l.push(new S(s,a))):l.push(new S(s))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},Y.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],i=this.a.testStrings||{},l=new p;for(t=0,n=a.length;t<n;t++)b(this.c,a[t],v(l));var r=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var s=a[1].split(","),u=0;u<s.length;u+=1)r.push(new S(a[0],s[u]));else r.push(new S(a[0]));y(l,(function(){e(r,i)}))};var K="https://fonts.googleapis.com/css";function Q(e){this.f=e,this.a=[],this.c={}}var V={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},X={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,n=this.c,a=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var i="";2==o.length&&""!=o[1]&&(i=":"),e.a.push(o.join(i))}}(a,o);var i=new Q(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),i=["n4"];if(2<=a.length){var l;if(l=[],r=a[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var c;if((c=r[u]).match(/^[\w-]+$/))if(null==(f=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=f[2])||""==c?"n":Z[c],null==(f=f[1])||""==f)f="4";else var f=X[f]||(isNaN(f)?"4":f.substr(0,1));c=[c,f].join("")}else c="";c&&l.push(c)}0<l.length&&(i=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=V[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=V[o])&&(e.c[o]=a),a=0;a<i.length;a+=1)e.a.push(new S(o,i[a]))}}(i),b(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),y(t,(function(){e(i.a,i.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var i=t[o],l=t[o+1],r=0;r<l.length;r++)a.push(new S(i,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,i=n.fonts.length;o<i;++o){var l=n.fonts[o];a.a.push(new S(l.name,E("font-weight:"+l.weight+";font-style:"+l.style)))}e(a.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ie=new $(window);ie.a.c.custom=function(e,t){return new Y(t,e)},ie.a.c.fontdeck=function(e,t){return new oe(t,e)},ie.a.c.monotype=function(e,t){return new U(t,e)},ie.a.c.typekit=function(e,t){return new ae(t,e)},ie.a.c.google=function(e,t){return new te(t,e)};var le={load:l(ie.load,ie)};void 0===(a=function(){return le}.call(t,n,t,e))||(e.exports=a)}()},494:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(9),l=n(131),r=n(19),s=(n(67),n(2)),u=n(4),c=n(5);function f(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return h(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}$=jQuery;var g=[{value:"thumbnail",label:Object(s.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(s.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(s.__)("Large","ultimate-addons-for-gutenberg")}],d=function(e){var t,n,h=e=e.parentProps,d=h.attributes,b=h.setAttributes,m=h.attributes,p=m.overallAlignment,v=m.showEstcost,y=m.showTotaltime,_=m.showMaterials,w=m.showTools,S=m.showTotaltimecolor,j=m.tools_count,O=m.material_count,T=m.tools,E=m.materials,H=m.mainimage,C=m.imgSize,F=m.headingColor,k=m.subHeadingColor,x=m.headingTag,z=m.headFontFamily,L=m.headFontWeight,M=m.headFontSubset,N=m.headFontSizeType,R=m.headFontSize,I=m.headFontSizeMobile,P=m.headFontSizeTablet,A=m.headLineHeightType,W=m.headLineHeight,B=m.headLineHeightMobile,D=m.headLineHeightTablet,G=m.subHeadFontFamily,q=m.subHeadFontWeight,U=m.subHeadFontSubset,Y=m.subHeadFontSize,J=m.subHeadFontSizeType,K=m.subHeadFontSizeMobile,Q=m.subHeadFontSizeTablet,V=m.subHeadLineHeight,X=m.subHeadLineHeightType,Z=m.subHeadLineHeightMobile,ee=m.subHeadLineHeightTablet,te=m.headLoadGoogleFonts,ne=m.subHeadLoadGoogleFonts,ae=m.priceFontSizeType,oe=m.priceFontSize,ie=m.priceFontSizeTablet,le=m.priceFontSizeMobile,re=m.priceFontFamily,se=m.priceFontWeight,ue=m.priceFontSubset,ce=m.priceLineHeightType,fe=m.priceLineHeight,he=m.priceLineHeightTablet,ge=m.priceLineHeightMobile,de=m.priceLoadGoogleFonts,be=m.timeSpace,me=m.costSpace,pe=m.row_gap,ve=m.step_gap,ye=m.timeInHours,_e=m.timeInDays,we=m.timeInMonths,Se=m.timeInYears,je=m.timeInMins,Oe=m.time;H&&H.sizes&&(t=H.sizes,n=[],$.each(t,(function(e,t){var a={value:e,label:e};n.push(a)})),g=n);var Te,Ee,He,Ce=je||Oe;if(!0===te){var Fe={google:{families:[z+(L?":"+L:"")]}};Te=o.a.createElement(l.a,{config:Fe})}if(!0===ne){var ke={google:{families:[G+(q?":"+q:"")]}};Ee=o.a.createElement(l.a,{config:ke})}if(!0===de){var xe={google:{families:[re+(se?":"+se:"")]}};He=o.a.createElement(l.a,{config:xe})}return o.a.createElement(a.Suspense,{fallback:Object(i.a)()},o.a.createElement(u.BlockControls,{key:"index"},o.a.createElement(u.AlignmentToolbar,{value:p,onChange:function(e){return b({overallAlignment:e})}})),o.a.createElement(u.InspectorControls,null,o.a.createElement(c.PanelBody,{title:Object(s.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement("h2",null,Object(s.__)("Image","ultimate-addons-for-gutenberg")),o.a.createElement(u.MediaUpload,{title:Object(s.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(e){return b({mainimage:e})},allowedTypes:["image"],value:H,render:function(e){var t=e.open;return o.a.createElement(c.Button,{isSecondary:!0,onClick:t},H.url?Object(s.__)("Replace image","ultimate-addons-for-gutenberg"):Object(s.__)("Select Image","ultimate-addons-for-gutenberg"))}}),H.url&&o.a.createElement(c.Button,{className:"uagb-rm-btn",onClick:function(){return b({mainimage:""})},isLink:!0,isDestructive:!0},Object(s.__)("Remove Image","ultimate-addons-for-gutenberg")),H.url&&o.a.createElement(c.SelectControl,{label:Object(s.__)("Size","ultimate-addons-for-gutenberg"),options:g,value:C,onChange:function(e){return b({imgSize:e})}}),o.a.createElement("h2",null,Object(s.__)("Primary Heading","ultimate-addons-for-gutenberg")),o.a.createElement(c.SelectControl,{label:Object(s.__)("Tag"),value:x,onChange:function(e){return b({headingTag:e})},options:[{value:"h1",label:Object(s.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(s.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(s.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(s.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(s.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(s.__)("H6","ultimate-addons-for-gutenberg")}]}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement(c.ToggleControl,{label:Object(s.__)("Show Total Time","ultimate-addons-for-gutenberg"),checked:y,onChange:function(e){return b({showTotaltime:!y})},help:Object(s.__)("Note: Time is recommended field for schema. It should be ON","ultimate-addons-for-gutenberg")}),y&&o.a.createElement(c.PanelBody,{title:Object(s.__)("Time","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb-editor-howto-timepanel"},o.a.createElement(o.a.Fragment,null,o.a.createElement(c.RangeControl,{label:Object(s.__)("Years","ultimate-addons-for-gutenberg"),value:Se,onChange:function(e){return b({timeInYears:e})},min:1,max:10,allowReset:!0}),o.a.createElement(c.RangeControl,{label:Object(s.__)("Months","ultimate-addons-for-gutenberg"),value:we,onChange:function(e){return b({timeInMonths:e})},min:1,max:12,allowReset:!0}),o.a.createElement(c.RangeControl,{label:Object(s.__)("Days","ultimate-addons-for-gutenberg"),value:_e,onChange:function(e){return b({timeInDays:e})},min:1,max:31,allowReset:!0}),o.a.createElement(c.RangeControl,{label:Object(s.__)("Hours","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return b({timeInHours:e})},min:1,max:24,allowReset:!0}),o.a.createElement(c.RangeControl,{label:Object(s.__)("Minutes","ultimate-addons-for-gutenberg"),value:Ce,onChange:function(e){return b({timeInMins:e})},min:1,max:60,allowReset:!0}))),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement(c.ToggleControl,{label:Object(s.__)("Show Estimated Cost","ultimate-addons-for-gutenberg"),checked:v,onChange:function(e){return b({showEstcost:!v})},help:Object(s.__)("Note: Cost is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),o.a.createElement(c.ExternalLink,{href:"https://en.wikipedia.org/wiki/List_of_circulating_currencies"},Object(s.__)("Click here to find your countrys ISO code.","ultimate-addons-for-gutenberg")),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement(c.ToggleControl,{label:Object(s.__)("Show Tools","ultimate-addons-for-gutenberg"),checked:w,onChange:function(e){return b({showTools:!w})},help:Object(s.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),w&&o.a.createElement(c.RangeControl,{label:Object(s.__)("Number of Tools","ultimate-addons-for-gutenberg"),value:j,onChange:function(e){var t=f(T);if(t.length<e){for(var n=Math.abs(e-t.length),a=0;a<n;a++)t.push({add_required_tools:"- A Computer"+(t.length+1)});b({tools:t})}else{for(var o=Math.abs(e-t.length),i=t,l=0;l<o;l++)i.pop();b({tools:i})}b({tools_count:e})},min:1,max:50}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement(c.ToggleControl,{label:Object(s.__)("Show Materials","ultimate-addons-for-gutenberg"),checked:_,onChange:function(e){return b({showMaterials:!_})},help:Object(s.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),_&&o.a.createElement(c.RangeControl,{label:Object(s.__)("Number of Materials","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){var t=f(E);if(t.length<e){for(var n=Math.abs(e-t.length),a=0;a<n;a++)t.push({add_required_materials:"- A WordPress Website"+(t.length+1)});b({materials:t})}else{for(var o=Math.abs(e-t.length),i=t,l=0;l<o;l++)i.pop();b({materials:i})}b({material_count:e})},min:1,max:50})),o.a.createElement(c.PanelBody,{title:Object(s.__)("Style","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("h2",null,Object(s.__)("Colors")),o.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Heading","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:F}}))),o.a.createElement(u.ColorPalette,{value:F,onChange:function(e){return b({headingColor:e})},allowReset:!0}),o.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Secondary Heading","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:S}}))),o.a.createElement(u.ColorPalette,{value:S,onChange:function(e){return b({showTotaltimecolor:e})},allowReset:!0}),o.a.createElement("p",{className:"uagb-setting-label"},Object(s.__)("Description","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:k}}))),o.a.createElement(u.ColorPalette,{value:k,onChange:function(e){return b({subHeadingColor:e})},allowReset:!0}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(s.__)("Typography","ultimate-addons-for-gutenberg")),o.a.createElement(r.default,{label:Object(s.__)("Heading","ultimate-addons-for-gutenberg"),attributes:d,setAttributes:b,loadGoogleFonts:{value:te,label:"headLoadGoogleFonts"},fontFamily:{value:z,label:"headFontFamily"},fontWeight:{value:L,label:"headFontWeight"},fontSubset:{value:M,label:"headFontSubset"},fontSizeType:{value:N,label:"headFontSizeType"},fontSize:{value:R,label:"headFontSize"},fontSizeMobile:{value:I,label:"headFontSizeMobile"},fontSizeTablet:{value:P,label:"headFontSizeTablet"},lineHeightType:{value:A,label:"headLineHeightType"},lineHeight:{value:W,label:"headLineHeight"},lineHeightMobile:{value:B,label:"headLineHeightMobile"},lineHeightTablet:{value:D,label:"headLineHeightTablet"}}),o.a.createElement(r.default,{label:Object(s.__)("Secondary Heading","ultimate-addons-for-gutenberg"),attributes:d,setAttributes:b,loadGoogleFonts:{value:de,label:"priceLoadGoogleFonts"},fontFamily:{value:re,label:"priceFontFamily"},fontWeight:{value:se,label:"priceFontWeight"},fontSubset:{value:ue,label:"priceFontSubset"},fontSizeType:{value:ae,label:"priceFontSizeType"},fontSize:{value:oe,label:"priceFontSize"},fontSizeMobile:{value:le,label:"priceFontSizeMobile"},fontSizeTablet:{value:ie,label:"priceFontSizeTablet"},lineHeightType:{value:ce,label:"priceLineHeightType"},lineHeight:{value:fe,label:"priceLineHeight"},lineHeightMobile:{value:ge,label:"priceLineHeightMobile"},lineHeightTablet:{value:he,label:"priceLineHeightTablet"}}),o.a.createElement(r.default,{label:Object(s.__)("Description","ultimate-addons-for-gutenberg"),attributes:d,setAttributes:b,loadGoogleFonts:{value:ne,label:"subHeadLoadGoogleFonts"},fontFamily:{value:G,label:"subHeadFontFamily"},fontWeight:{value:q,label:"subHeadFontWeight"},fontSubset:{value:U,label:"subHeadFontSubset"},fontSizeType:{value:J,label:"subHeadFontSizeType"},fontSize:{value:Y,label:"subHeadFontSize"},fontSizeMobile:{value:K,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:Q,label:"subHeadFontSizeTablet"},lineHeightType:{value:X,label:"subHeadLineHeightType"},lineHeight:{value:V,label:"subHeadLineHeight"},lineHeightMobile:{value:Z,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:ee,label:"subHeadLineHeightTablet"}}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(s.__)("Spacing","ultimate-addons-for-gutenberg")),y&&o.a.createElement(c.RangeControl,{label:Object(s.__)("Time Margin","ultimate-addons-for-gutenberg"),value:be,onChange:function(e){return b({timeSpace:e})},min:0,max:50,allowReset:!0}),v&&o.a.createElement(c.RangeControl,{label:Object(s.__)("Cost Margin","ultimate-addons-for-gutenberg"),value:me,onChange:function(e){return b({costSpace:e})},min:0,max:50,allowReset:!0}),o.a.createElement(c.RangeControl,{label:Object(s.__)("Row Gap","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return b({row_gap:e})},min:0,max:500,allowReset:!0}),o.a.createElement(c.RangeControl,{label:Object(s.__)("Gap Between Steps","ultimate-addons-for-gutenberg"),value:ve,onChange:function(e){return b({step_gap:e})},min:0,max:500,allowReset:!0}))),Te,Ee,He)};t.default=o.a.memo(d)}}]);