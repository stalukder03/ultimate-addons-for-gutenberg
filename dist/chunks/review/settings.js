(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[86],{126:function(e,t,n){"use strict";var a=n(11),o=n(27),r=n.n(o),l=n(127),i=n.n(l);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===m)var m=[];var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(l,e);var t,n,a,o,r=(a=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=r.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){m.includes(e)||m.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){m.includes(t.props.config.google.families[0])||(i.a.load(s(s({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=l,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&b(t.prototype,n),l}(a.Component);p.propTypes={config:r.a.object.isRequired,children:r.a.element,onStatus:r.a.func.isRequired},p.defaultProps={onStatus:function(){}},t.a=p},127:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function r(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:r).apply(null,arguments)}var i=Date.now||function(){return+new Date};function c(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function s(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var r=!1,l=0;l<a.length;l+=1)if(t[o]===a[l]){r=!0;break}r||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(r=!1,l=0;l<n.length;l+=1)if(a[o]===n[l]){r=!0;break}r||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function d(e,t,n){function a(){i&&o&&r&&(i(l),i=null)}t=s(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,r=!0,l=null,i=n||null;u?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),f(e,"head",t)}function m(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var r=s(e,"script",{src:t}),l=!1;return r.onload=r.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),r.onload=r.onreadystatechange=null,"HEAD"==r.parentNode.tagName&&o.removeChild(r))},o.appendChild(r),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),r}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function O(e){this.a=e||"-"}function w(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function S(e){return e.a+e.f}function C(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function E(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function T(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new O("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=h(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),g(e.f,n,a)}k(e,"inactive")}function k(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,S(n)):e.h[t]())}function H(){this.c={}}function P(e,t){this.c=e,this.f=t,this.a=s(this.c,"span",{"aria-hidden":"true"},this.f)}function N(e){f(e.c,"body",e.a)}function A(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+C(e)+";font-weight:"+e.f+"00;"}function x(e,t,n,a,o,r){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=r||void 0}function L(e,t,n,a,o,r,l){this.v=e,this.B=t,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=o||3e3,this.u=r||null,this.m=this.j=this.h=this.g=null,this.g=new P(this.c,this.s),this.h=new P(this.c,this.s),this.j=new P(this.c,this.s),this.m=new P(this.c,this.s),e=A(e=new w(this.a.c+",serif",S(this.a))),this.g.a.style.cssText=e,e=A(e=new w(this.a.c+",sans-serif",S(this.a))),this.h.a.style.cssText=e,e=A(e=new w("serif",S(this.a))),this.j.a.style.cssText=e,e=A(e=new w("sans-serif",S(this.a))),this.m.a.style.cssText=e,N(this.g),N(this.h),N(this.j),N(this.m)}O.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},x.prototype.start=function(){var e=this.c.o.document,t=this,n=i(),a=new Promise((function(a,o){!function r(){i()-n>=t.f?o():e.fonts.load(function(e){return C(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(r,25)}),(function(){o()}))}()})),o=null,r=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([r,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var z={D:"serif",C:"sans-serif"},I=null;function M(){if(null===I){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);I=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return I}function R(e,t,n){for(var a in z)if(z.hasOwnProperty(a)&&t===e.f[z[a]]&&n===e.f[z[a]])return!0;return!1}function D(e,t){setTimeout(l((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function B(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}L.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=i(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=M()&&R(t,a,o)),n?i()-t.A>=t.w?M()&&R(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?D(t,t.v):D(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):D(t,t.v)}(this)};var W=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&g(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),k(e,"active")):F(e.a))}function V(e){this.j=e,this.a=new H,this.h=0,this.f=this.g=!0}function U(e,t,n,a,o){var r=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,i=a||{};if(0===n.length&&r)F(t.a);else{t.f+=n.length,r&&(t.j=r);var c,u=[];for(c=0;c<n.length;c++){var s=n[c],f=i[s.c],b=t.a,h=s;if(b.g&&g(b.f,[b.a.c("wf",h.c,S(h).toString(),"loading")]),k(b,"fontloading",h),b=null,null===W)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);W=h?42<parseInt(h[1],10):!d}else W=!1;b=W?new x(l(t.g,t),l(t.h,t),t.c,s,t.s,f):new L(l(t.g,t),l(t.h,t),t.c,s,t.s,e,f),u.push(b)}for(c=0;c<u.length;c++)u[c].start()}}),0)}function $(e,t){this.c=e,this.a=t}function q(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}B.prototype.g=function(e){var t=this.a;t.g&&g(t.f,[t.a.c("wf",e.c,S(e).toString(),"active")],[t.a.c("wf",e.c,S(e).toString(),"loading"),t.a.c("wf",e.c,S(e).toString(),"inactive")]),k(t,"fontactive",e),this.m=!0,G(this)},B.prototype.h=function(e){var t=this.a;if(t.g){var n=h(t.f,t.a.c("wf",e.c,S(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,S(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,S(e).toString(),"inactive")),g(t.f,a,o)}k(t,"fontinactive",e),G(this)},V.prototype.load=function(e){this.c=new c(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&g(e.f,[e.a.c("wf","loading")]),k(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var r=e.c[a];r&&o.push(r(t[a],n))}return o}(e.a,n,e.c);var r=new B(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){U(e,r,t,n,a)}))}(this,new T(this.c,e),e)},$.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,r=o["__mti_fntLst"+n](),l=[];if(r)for(var i=0;i<r.length;i++){var c=r[i].fontfamily;null!=r[i].fontStyle&&null!=r[i].fontWeight?(a=r[i].fontStyle+r[i].fontWeight,l.push(new w(c,a))):l.push(new w(c))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},q.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],r=this.a.testStrings||{},l=new p;for(t=0,n=a.length;t<n;t++)d(this.c,a[t],v(l));var i=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var c=a[1].split(","),u=0;u<c.length;u+=1)i.push(new w(a[0],c[u]));else i.push(new w(a[0]));_(l,(function(){e(i,r)}))};var K="https://fonts.googleapis.com/css";function Q(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,n=this.c,a=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var r="";2==o.length&&""!=o[1]&&(r=":"),e.a.push(o.join(r))}}(a,o);var r=new Q(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),r=["n4"];if(2<=a.length){var l;if(l=[],i=a[1])for(var i,c=(i=i.split(",")).length,u=0;u<c;u++){var s;if((s=i[u]).match(/^[\w-]+$/))if(null==(f=ee.exec(s.toLowerCase())))s="";else{if(s=null==(s=f[2])||""==s?"n":Z[s],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));s=[s,f].join("")}else s="";s&&l.push(s)}0<l.length&&(r=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=X[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=X[o])&&(e.c[o]=a),a=0;a<r.length;a+=1)e.a.push(new w(o,r[a]))}}(r),d(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),_(t,(function(){e(r.a,r.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var r=t[o],l=t[o+1],i=0;i<l.length;i++)a.push(new w(r,l[i]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,r=n.fonts.length;o<r;++o){var l=n.fonts[o];a.a.push(new w(l.name,E("font-weight:"+l.weight+";font-style:"+l.style)))}e(a.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var re=new V(window);re.a.c.custom=function(e,t){return new q(t,e)},re.a.c.fontdeck=function(e,t){return new oe(t,e)},re.a.c.monotype=function(e,t){return new $(t,e)},re.a.c.typekit=function(e,t){return new ae(t,e)},re.a.c.google=function(e,t){return new te(t,e)};var le={load:l(re.load,re)};void 0===(a=function(){return le}.call(t,n,t,e))||(e.exports=a)}()},494:function(e,t,n){"use strict";n.r(t),n.d(t,"removeFromArray",(function(){return h}));var a=n(6),o=n(19),r=n(126),l=n(2),i=n(1),c=n.n(i),u=n(9),s=n(4),f=n(5);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}$=jQuery;var g=[{value:"thumbnail",label:Object(l.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(l.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(l.__)("Large","ultimate-addons-for-gutenberg")}],h=function(e,t){return e.filter((function(e){return Array.isArray(t)?!t.includes(e):e!==t}))},d=function(e){var t,n,d,m=e=e.parentProps,p=m.attributes,v=m.setAttributes,_=p.enableSchema,y=p.itemType,O=p.itemSubtype,w=p.sku,j=p.identifier,S=p.identifierType,C=p.offerType,E=p.offerCurrency,T=p.offerStatus,F=p.offerPrice,k=p.offerExpiry,H=p.datepublish,P=p.ctaLink,N=p.ctaTarget,A=p.brand,x=p.headingTag,L=p.mainimage,z=p.imgSize,I=p.showFeature,M=p.showAuthor,R=p.starColor,D=p.descColor,B=p.titleColor,W=p.contentColor,G=p.headFontFamily,V=p.headFontWeight,U=p.headFontSubset,q=p.headFontSizeType,J=p.headFontSize,K=p.headFontSizeMobile,Q=p.headFontSizeTablet,X=p.headLineHeightType,Y=p.headLineHeight,Z=p.headLineHeightMobile,ee=p.headLineHeightTablet,te=p.headLoadGoogleFonts,ne=p.subHeadFontFamily,ae=p.subHeadFontWeight,oe=p.subHeadFontSubset,re=p.subHeadFontSize,le=p.subHeadFontSizeType,ie=p.subHeadFontSizeMobile,ce=p.subHeadFontSizeTablet,ue=p.subHeadLineHeight,se=p.subHeadLineHeightType,fe=p.subHeadLineHeightMobile,be=p.subHeadLineHeightTablet,ge=p.subHeadLoadGoogleFonts,he=p.contentLoadGoogleFonts,de=p.contentFontFamily,me=p.contentFontWeight,pe=p.contentFontSubset,ve=p.contentFontSizeType,_e=p.contentLineHeightType,ye=p.contentFontSize,Oe=p.contentFontSizeTablet,we=p.contentFontSizeMobile,je=p.contentLineHeight,Se=p.contentLineHeightTablet,Ce=p.contentLineHeightMobile,Ee=p.contentVrPadding,Te=p.contentHrPadding,Fe=p.authorColor,ke=p.summaryColor,He=p.starActiveColor,Pe=p.starOutlineColor,Ne=p.enableDescription,Ae=p.enableImage,xe=p.overallAlignment,Le=p.isbn,ze=p.bookAuthorName,Ie=p.reviewPublisher,Me=p.provider,Re=p.appCategory,De=p.operatingSystem,Be=p.datecreated,We=p.directorname;if(1==te){var Ge={google:{families:[G+(V?":"+V:"")]}};n=c.a.createElement(r.a,{config:Ge})}if(1==ge){var Ve={google:{families:[ne+(ae?":"+ae:"")]}};d=c.a.createElement(r.a,{config:Ve})}if(1==he){var Ue={google:{families:[de+(me?":"+me:"")]}};t=c.a.createElement(r.a,{config:Ue})}var $e,qe,Je,Ke={Book:[{value:"Audiobook",label:Object(l.__)("Audio book","ultimate-addons-for-gutenberg")}],Product:[{value:"IndividualProduct",label:Object(l.__)("Individual Product","ultimate-addons-for-gutenberg")},{value:"ProductCollection",label:Object(l.__)("Product Collection","ultimate-addons-for-gutenberg")},{value:"ProductGroup",label:Object(l.__)("Product Group","ultimate-addons-for-gutenberg")},{value:"ProductModel",label:Object(l.__)("Product Model","ultimate-addons-for-gutenberg")},{value:"SomeProducts",label:Object(l.__)("Some Products","ultimate-addons-for-gutenberg")},{value:"Vehicle",label:Object(l.__)("Vehicle","ultimate-addons-for-gutenberg")}],SoftwareApplication:[{value:"MobileApplication",label:Object(l.__)("Mobile Application","ultimate-addons-for-gutenberg")},{value:"VideoGame",label:Object(l.__)("Video Game","ultimate-addons-for-gutenberg")},{value:"WebApplication",label:Object(l.__)("Web Application","ultimate-addons-for-gutenberg")}]},Qe=["bookAuthorName","isbn","provider","brand","sku","identifierType","identifier","appCategory","operatingSystem","directorname","datecreated"];switch(y){default:break;case"Book":$e=c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(l.__)("ISBN","ultimate-addons-for-gutenberg"),value:Le,onChange:function(e){return v({isbn:e})},help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),c.a.createElement(f.TextControl,{label:Object(l.__)("Book author name","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return v({bookAuthorName:e})},help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")})),Qe=h(Qe,["isbn","bookAuthorName"]);break;case"Course":$e=c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(l.__)("Provider","ultimate-addons-for-gutenberg"),value:Me,onChange:function(e){return v({provider:e})}})),Qe=h(Qe,["provider"]);break;case"SoftwareApplication":$e=c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(l.__)("Application Category","ultimate-addons-for-gutenberg"),value:Re,onChange:function(e){return v({appCategory:e})}}),c.a.createElement(f.TextControl,{label:Object(l.__)("Operating System","ultimate-addons-for-gutenberg"),value:De,onChange:function(e){return v({operatingSystem:e})}})),Qe=h(Qe,["appCategory","operatingSystem"]);break;case"Movie":$e=c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(l.__)("Director Name","ultimate-addons-for-gutenberg"),value:We,onChange:function(e){return v({directorname:e})}}),c.a.createElement("h2",null,Object(l.__)("Date of create")),c.a.createElement(f.DateTimePicker,{currentDate:Be,onChange:function(e){return v({datecreated:e})},is12Hour:!0})),Qe=h(Qe,["directorname","datecreated"])}return c.a.createElement(i.Suspense,{fallback:Object(u.a)()},c.a.createElement(s.BlockControls,{key:"index"},c.a.createElement(s.AlignmentToolbar,{value:xe,onChange:function(e){return v({overallAlignment:e})}})),c.a.createElement(s.InspectorControls,null,(L&&L.sizes&&(qe=L.sizes,Je=[],$.each(qe,(function(e,t){var n={value:e,label:e};Je.push(n)})),g=Je),c.a.createElement(f.PanelBody,{title:Object(l.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},c.a.createElement("h2",null,Object(l.__)("Review Title","ultimate-addons-for-gutenberg")),c.a.createElement(f.SelectControl,{label:Object(l.__)("Tag","ultimate-addons-for-gutenberg"),value:x,onChange:function(e){return v({headingTag:e})},options:[{value:"h1",label:Object(l.__)("H1")},{value:"h2",label:Object(l.__)("H2")},{value:"h3",label:Object(l.__)("H3")},{value:"h4",label:Object(l.__)("H4")},{value:"h5",label:Object(l.__)("H5")},{value:"h6",label:Object(l.__)("H6")}]}),c.a.createElement("h2",null,Object(l.__)("Link")),c.a.createElement(f.TextControl,{value:P,onChange:function(e){return v({ctaLink:e})}}),c.a.createElement(f.ToggleControl,{label:Object(l.__)("Open in new window","ultimate-addons-for-gutenberg"),checked:N,onChange:function(){v({ctaTarget:!N})}}),c.a.createElement(f.ToggleControl,{label:Object(l.__)("Show review description","ultimate-addons-for-gutenberg"),checked:Ne,onChange:function(e){return v({enableDescription:!Ne})},help:Object(l.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),c.a.createElement(f.ToggleControl,{label:Object(l.__)("Show review author","ultimate-addons-for-gutenberg"),checked:M,onChange:function(e){return v({showAuthor:!M})},help:Object(l.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),c.a.createElement(f.ToggleControl,{label:Object(l.__)("Show review image","ultimate-addons-for-gutenberg"),checked:Ae,onChange:function(e){return v({enableImage:!Ae})},help:Object(l.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),!0===Ae&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,Object(l.__)("Image")),c.a.createElement(s.MediaUpload,{title:Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(e){return v({mainimage:e})},allowedTypes:["image"],value:L,render:function(e){var t=e.open;return c.a.createElement(f.Button,{isSecondary:!0,onClick:t},L.url?Object(l.__)("Replace image","ultimate-addons-for-gutenberg"):Object(l.__)("Select Image","ultimate-addons-for-gutenberg"))}}),L.url&&c.a.createElement(f.Button,{className:"uagb-rm-btn",onClick:function(){return v({mainimage:""})},isLink:!0,isDestructive:!0},Object(l.__)("Remove Image","ultimate-addons-for-gutenberg")),L.url&&c.a.createElement(f.SelectControl,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),options:g,value:z,onChange:function(e){return v({imgSize:e})}})),c.a.createElement(f.ToggleControl,{label:Object(l.__)("Show ratings","ultimate-addons-for-gutenberg"),checked:I,onChange:function(e){return v({showFeature:!I})},help:Object(l.__)("Note: Add feature/section ratings separately.","ultimate-addons-for-gutenberg")}),c.a.createElement(f.ToggleControl,{label:Object(l.__)("Enable schema support","ultimate-addons-for-gutenberg"),checked:_,onChange:function(e){return v({enableSchema:!_})}}))),function(){if(!0===_)return c.a.createElement(f.PanelBody,{title:Object(l.__)("Schema","ultimate-addons-for-gutenberg"),initialOpen:!1},c.a.createElement(f.SelectControl,{label:Object(l.__)("Item type","ultimate-addons-for-gutenberg"),value:y,onChange:function(e){v({itemType:e}),"Movie"===y&&v({enableImage:!0}),"Course"===y&&v({enableDescription:!0}),Ke.hasOwnProperty(y)&&Ke[y].includes(O)||v({itemSubtype:"None"})},options:[{value:"Book",label:Object(l.__)("Book","ultimate-addons-for-gutenberg")},{value:"Course",label:Object(l.__)("Course","ultimate-addons-for-gutenberg")},{value:"Movie",label:Object(l.__)("Movie","ultimate-addons-for-gutenberg")},{value:"Product",label:Object(l.__)("Product","ultimate-addons-for-gutenberg")},{value:"SoftwareApplication",label:Object(l.__)("Software Application","ultimate-addons-for-gutenberg")}]}),Ke.hasOwnProperty(y)&&c.a.createElement(f.SelectControl,{label:Object(l.__)("Item subtype","ultimate-addons-for-gutenberg"),options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")}].concat((t=Ke[y],function(e){if(Array.isArray(e))return b(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return b(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),value:O,onChange:function(e){return v({itemSubtype:e})}}),c.a.createElement("hr",{className:"uagb-editor__separator"}),$e,c.a.createElement(f.TextControl,{label:Object(l.__)("Review publisher","ultimate-addons-for-gutenberg"),value:Ie,onChange:function(e){return v({reviewPublisher:e})},help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),c.a.createElement("h2",null,Object(l.__)("Date of publish","ultimate-addons-for-gutenberg")),c.a.createElement(f.DateTimePicker,{currentDate:H,onChange:function(e){return v({datepublish:e})},is12Hour:!0}),["Product","SoftwareApplication"].includes(y)&&c.a.createElement(c.a.Fragment,null,["Product"].includes(y)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(l.__)("Brand","ultimate-addons-for-gutenberg"),value:A,onChange:function(e){return v({brand:e})}}),c.a.createElement(f.TextControl,{label:Object(l.__)("SKU","ultimate-addons-for-gutenberg"),value:w,onChange:function(e){return v({sku:e})}}),c.a.createElement(f.TextControl,{label:Object(l.__)("Identifier","ultimate-addons-for-gutenberg"),value:j,onChange:function(e){return v({identifier:e})}}),c.a.createElement(f.SelectControl,{label:Object(l.__)("Identifier type","ultimate-addons-for-gutenberg"),value:S,options:["nsn","mpn","gtin8","gtin12","gtin13","gtin14","gtin"].map((function(e){return{label:Object(l.__)(e.toUpperCase()),value:e}})),onChange:function(e){return v({identifierType:e})}})),["Product","SoftwareApplication"].includes(y)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(l.__)("Offer Currency","ultimate-addons-for-gutenberg"),value:E,onChange:function(e){return v({offerCurrency:e})}})),"Offer"==C&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(l.__)("Offer Price","ultimate-addons-for-gutenberg"),value:F,onChange:function(e){return v({offerPrice:e})},help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),c.a.createElement(f.SelectControl,{label:Object(l.__)("Offer Status"),value:T,options:[{value:"https://schema.org/Discontinued",label:Object(l.__)("Discontinued","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStock",label:Object(l.__)("In Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStoreOnly",label:Object(l.__)("In Store Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/LimitedAvailability",label:Object(l.__)("Limited Availability","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OnlineOnly",label:Object(l.__)("Online Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OutOfStock",label:Object(l.__)("Out Of Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreOrder",label:Object(l.__)("Pre Order","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreSale",label:Object(l.__)("Pre Sale","ultimate-addons-for-gutenberg")},{value:"https://schema.org/SoldOut",label:Object(l.__)("Sold Out","ultimate-addons-for-gutenberg")}],onChange:function(t){return e.setAttributes({offerStatus:t})}}),c.a.createElement("h2",null,Object(l.__)("Price Valid Until","ultimate-addons-for-gutenberg")),c.a.createElement(f.DateTimePicker,{currentDate:k,onChange:function(e){return v({offerExpiry:e})},is12Hour:!0}))));var t}(),c.a.createElement(f.PanelBody,{title:Object(l.__)("Style","ultimate-addons-for-gutenberg"),initialOpen:!1},c.a.createElement(o.a,{label:Object(l.__)("Title Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:v,loadGoogleFonts:{value:te,label:"headLoadGoogleFonts"},fontFamily:{value:G,label:"headFontFamily"},fontWeight:{value:V,label:"headFontWeight"},fontSubset:{value:U,label:"headFontSubset"},fontSizeType:{value:q,label:"headFontSizeType"},fontSize:{value:J,label:"headFontSize"},fontSizeMobile:{value:K,label:"headFontSizeMobile"},fontSizeTablet:{value:Q,label:"headFontSizeTablet"},lineHeightType:{value:X,label:"headLineHeightType"},lineHeight:{value:Y,label:"headLineHeight"},lineHeightMobile:{value:Z,label:"headLineHeightMobile"},lineHeightTablet:{value:ee,label:"headLineHeightTablet"}}),c.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Title Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:B}}))),c.a.createElement(s.ColorPalette,{value:B,onChange:function(e){return v({titleColor:e})},allowReset:!0}),!0===Ne&&c.a.createElement(c.a.Fragment,null,c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement(o.a,{label:Object(l.__)("Description Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:v,loadGoogleFonts:{value:ge,label:"subHeadLoadGoogleFonts"},fontFamily:{value:ne,label:"subHeadFontFamily"},fontWeight:{value:ae,label:"subHeadFontWeight"},fontSubset:{value:oe,label:"subHeadFontSubset"},fontSizeType:{value:le,label:"subHeadFontSizeType"},fontSize:{value:re,label:"subHeadFontSize"},fontSizeMobile:{value:ie,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ce,label:"subHeadFontSizeTablet"},lineHeightType:{value:se,label:"subHeadLineHeightType"},lineHeight:{value:ue,label:"subHeadLineHeight"},lineHeightMobile:{value:fe,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:be,label:"subHeadLineHeightTablet"}}),c.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Description Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:D}}))),c.a.createElement(s.ColorPalette,{value:D,onChange:function(e){return v({descColor:e})},allowReset:!0})),!0===M&&c.a.createElement(c.a.Fragment,null,c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Author Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Fe}}))),c.a.createElement(s.ColorPalette,{value:Fe,onChange:function(e){return v({authorColor:e})},allowReset:!0})),!0===I&&c.a.createElement(c.a.Fragment,null,c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Content Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:W}}))),c.a.createElement(s.ColorPalette,{value:W,onChange:function(e){return v({contentColor:e})},allowReset:!0})),c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement(o.a,{label:Object(l.__)("Summary Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:v,loadGoogleFonts:{value:he,label:"contentLoadGoogleFonts"},fontFamily:{value:de,label:"contentFontFamily"},fontWeight:{value:me,label:"contentFontWeight"},fontSubset:{value:pe,label:"contentFontSubset"},fontSizeType:{value:ve,label:"contentFontSizeType"},fontSize:{value:ye,label:"contentFontSize"},fontSizeMobile:{value:we,label:"contentFontSizeMobile"},fontSizeTablet:{value:Oe,label:"contentFontSizeTablet"},lineHeightType:{value:_e,label:"contentLineHeightType"},lineHeight:{value:je,label:"contentLineHeight"},lineHeightMobile:{value:Ce,label:"contentLineHeightMobile"},lineHeightTablet:{value:Se,label:"contentLineHeightTablet"}}),c.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Summary Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ke}}))),c.a.createElement(s.ColorPalette,{value:ke,onChange:function(e){return v({summaryColor:e})},allowReset:!0}),c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Active Star Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:R}}))),c.a.createElement(s.ColorPalette,{value:R,onChange:function(e){return v({starColor:e})},allowReset:!0}),c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Inactive Star Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:He}}))),c.a.createElement(s.ColorPalette,{value:He,onChange:function(e){return v({starActiveColor:e})},allowReset:!0}),c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Star Outline Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Pe}}))),c.a.createElement(s.ColorPalette,{value:Pe,onChange:function(e){return v({starOutlineColor:e})},allowReset:!0}),c.a.createElement("h2",null,Object(l.__)("Overall Padding (px)","ultimate-addons-for-gutenberg")),c.a.createElement(f.RangeControl,{label:a.a.vertical_spacing,className:"uagb-margin-control",value:Ee,onChange:function(e){return v({contentVrPadding:e})},min:0,max:50,allowReset:!0}),c.a.createElement(f.RangeControl,{label:a.a.horizontal_spacing,className:"uagb-margin-control",value:Te,onChange:function(e){return v({contentHrPadding:e})},min:0,max:50,allowReset:!0}))),n,d,t)};t.default=c.a.memo(d)}}]);