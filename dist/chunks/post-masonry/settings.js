(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[78],{126:function(t,n,e){"use strict";var i=e(11),o=e(27),a=e.n(o),r=e(127),s=e.n(r);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){u(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function h(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function p(t,n){return(p=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function g(t,n){return!n||"object"!==c(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}if(void 0===v)var v=[];var m=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&p(t,n)}(r,t);var n,e,i,o,a=(i=r,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=d(i);if(o){var e=d(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return g(this,t)});function r(t){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),(n=a.call(this,t)).state={status:void 0},n.handleLoading=function(){n.setState({status:"loading"})},n.addFont=function(t){v.includes(t)||v.push(t)},n.handleActive=function(){n.setState({status:"active"})},n.handleInactive=function(){n.setState({status:"inactive"})},n.loadFonts=function(){v.includes(n.props.config.google.families[0])||(s.a.load(l(l({},n.props.config),{},{loading:n.handleLoading,active:n.handleActive,inactive:n.handleInactive})),n.addFont(n.props.config.google.families[0]))},n}return n=r,(e=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(t,n){var e=this.props,i=e.onStatus,o=e.config;n.status!==this.state.status&&i(this.state.status),t.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&h(n.prototype,e),r}(i.Component);m.propTypes={config:a.a.object.isRequired,children:a.a.element,onStatus:a.a.func.isRequired},m.defaultProps={onStatus:function(){}},n.a=m},127:function(t,n,e){var i;!function(){function o(t,n,e){return t.call.apply(t.bind,arguments)}function a(t,n,e){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,i),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function r(t,n,e){return(r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a).apply(null,arguments)}var s=Date.now||function(){return+new Date};function c(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var f=!!window.FontFace;function l(t,n,e,i){if(n=t.c.createElement(n),e)for(var o in e)e.hasOwnProperty(o)&&("style"==o?n.style.cssText=e[o]:n.setAttribute(o,e[o]));return i&&n.appendChild(t.c.createTextNode(i)),n}function u(t,n,e){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(e,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t,n,e){n=n||[],e=e||[];for(var i=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,r=0;r<i.length;r+=1)if(n[o]===i[r]){a=!0;break}a||i.push(n[o])}for(n=[],o=0;o<i.length;o+=1){for(a=!1,r=0;r<e.length;r+=1)if(i[o]===e[r]){a=!0;break}a||n.push(i[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(t,n){for(var e=t.className.split(/\s+/),i=0,o=e.length;i<o;i++)if(e[i]==n)return!0;return!1}function d(t,n,e){function i(){s&&o&&a&&(s(r),s=null)}n=l(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,a=!0,r=null,s=e||null;f?(n.onload=function(){o=!0,i()},n.onerror=function(){o=!0,r=Error("Stylesheet failed to load"),i()}):setTimeout((function(){o=!0,i()}),0),u(t,"head",n)}function v(t,n,e,i){var o=t.c.getElementsByTagName("head")[0];if(o){var a=l(t,"script",{src:n}),r=!1;return a.onload=a.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,e&&e(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout((function(){r||(r=!0,e&&e(Error("Script load timeout")))}),i||5e3),a}return null}function m(){this.a=0,this.c=null}function y(t){return t.a++,function(){t.a--,b(t)}}function w(t,n){t.c=n,b(t)}function b(t){0==t.a&&t.c&&(t.c(),t.c=null)}function j(t){this.a=t||"-"}function _(t,n){this.c=t,this.f=4,this.a="n";var e=(n||"n4").match(/^([nio])([1-9])$/i);e&&(this.a=e[1],this.f=parseInt(e[2],10))}function O(t){var n=[];t=t.split(/,\s*/);for(var e=0;e<t.length;e++){var i=t[e].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?n.push("'"+i+"'"):n.push(i)}return n.join(",")}function k(t){return t.a+t.f}function x(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function S(t){var n=4,e="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(e=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?n=7:/[1-9]00/.test(i[1])&&(n=parseInt(i[1].substr(0,1),10)))),e+n}function F(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new j("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function T(t){if(t.g){var n=g(t.f,t.a.c("wf","active")),e=[],i=[t.a.c("wf","loading")];n||e.push(t.a.c("wf","inactive")),p(t.f,e,i)}E(t,"inactive")}function E(t,n,e){t.j&&t.h[n]&&(e?t.h[n](e.c,k(e)):t.h[n]())}function P(){this.c={}}function A(t,n){this.c=t,this.f=n,this.a=l(this.c,"span",{"aria-hidden":"true"},this.f)}function C(t){u(t.c,"body",t.a)}function L(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+O(t.c)+";font-style:"+x(t)+";font-weight:"+t.f+"00;"}function N(t,n,e,i,o,a){this.g=t,this.j=n,this.a=i,this.c=e,this.f=o||3e3,this.h=a||void 0}function W(t,n,e,i,o,a,r){this.v=t,this.B=n,this.c=e,this.a=i,this.s=r||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new A(this.c,this.s),this.h=new A(this.c,this.s),this.j=new A(this.c,this.s),this.m=new A(this.c,this.s),t=L(t=new _(this.a.c+",serif",k(this.a))),this.g.a.style.cssText=t,t=L(t=new _(this.a.c+",sans-serif",k(this.a))),this.h.a.style.cssText=t,t=L(t=new _("serif",k(this.a))),this.j.a.style.cssText=t,t=L(t=new _("sans-serif",k(this.a))),this.m.a.style.cssText=t,C(this.g),C(this.h),C(this.j),C(this.m)}j.prototype.c=function(t){for(var n=[],e=0;e<arguments.length;e++)n.push(arguments[e].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},N.prototype.start=function(){var t=this.c.o.document,n=this,e=s(),i=new Promise((function(i,o){!function a(){s()-e>=n.f?o():t.fonts.load(function(t){return x(t)+" "+t.f+"00 300px "+O(t.c)}(n.a),n.h).then((function(t){1<=t.length?i():setTimeout(a,25)}),(function(){o()}))}()})),o=null,a=new Promise((function(t,e){o=setTimeout(e,n.f)}));Promise.race([a,i]).then((function(){o&&(clearTimeout(o),o=null),n.g(n.a)}),(function(){n.j(n.a)}))};var B={D:"serif",C:"sans-serif"},I=null;function D(){if(null===I){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);I=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return I}function R(t,n,e){for(var i in B)if(B.hasOwnProperty(i)&&n===t.f[B[i]]&&e===t.f[B[i]])return!0;return!1}function G(t,n){setTimeout(r((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),n(this.a)}),t),0)}function q(t,n,e){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=e}W.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=s(),function t(n){var e,i=n.g.a.offsetWidth,o=n.h.a.offsetWidth;(e=i===n.f.serif&&o===n.f["sans-serif"])||(e=D()&&R(n,i,o)),e?s()-n.A>=n.w?D()&&R(n,i,o)&&(null===n.u||n.u.hasOwnProperty(n.a.c))?G(n,n.v):G(n,n.B):function(n){setTimeout(r((function(){t(this)}),n),50)}(n):G(n,n.v)}(this)};var $=null;function M(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&p(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),E(t,"active")):T(t.a))}function H(t){this.j=t,this.a=new P,this.h=0,this.f=this.g=!0}function J(t,n,e,i,o){var a=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=o||null,s=i||{};if(0===e.length&&a)T(n.a);else{n.f+=e.length,a&&(n.j=a);var c,f=[];for(c=0;c<e.length;c++){var l=e[c],u=s[l.c],h=n.a,g=l;if(h.g&&p(h.f,[h.a.c("wf",g.c,k(g).toString(),"loading")]),E(h,"fontloading",g),h=null,null===$)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);$=g?42<parseInt(g[1],10):!d}else $=!1;h=$?new N(r(n.g,n),r(n.h,n),n.c,l,n.s,u):new W(r(n.g,n),r(n.h,n),n.c,l,n.s,t,u),f.push(h)}for(c=0;c<f.length;c++)f[c].start()}}),0)}function U(t,n){this.c=t,this.a=n}function z(t,n){this.c=t,this.a=n}function K(t,n){this.c=t||V,this.a=[],this.f=[],this.g=n||""}q.prototype.g=function(t){var n=this.a;n.g&&p(n.f,[n.a.c("wf",t.c,k(t).toString(),"active")],[n.a.c("wf",t.c,k(t).toString(),"loading"),n.a.c("wf",t.c,k(t).toString(),"inactive")]),E(n,"fontactive",t),this.m=!0,M(this)},q.prototype.h=function(t){var n=this.a;if(n.g){var e=g(n.f,n.a.c("wf",t.c,k(t).toString(),"active")),i=[],o=[n.a.c("wf",t.c,k(t).toString(),"loading")];e||i.push(n.a.c("wf",t.c,k(t).toString(),"inactive")),p(n.f,i,o)}E(n,"fontinactive",t),M(this)},H.prototype.load=function(t){this.c=new c(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,n,e){var i=[],o=e.timeout;!function(t){t.g&&p(t.f,[t.a.c("wf","loading")]),E(t,"loading")}(n),i=function(t,n,e){var i,o=[];for(i in n)if(n.hasOwnProperty(i)){var a=t.c[i];a&&o.push(a(n[i],e))}return o}(t.a,e,t.c);var a=new q(t.c,n,o);for(t.h=i.length,n=0,e=i.length;n<e;n++)i[n].load((function(n,e,i){J(t,a,n,e,i)}))}(this,new F(this.c,t),t)},U.prototype.load=function(t){var n=this,e=n.a.projectId,i=n.a.version;if(e){var o=n.c.o;v(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+e+".js"+(i?"?v="+i:""),(function(i){i?t([]):(o["__MonotypeConfiguration__"+e]=function(){return n.a},function n(){if(o["__mti_fntLst"+e]){var i,a=o["__mti_fntLst"+e](),r=[];if(a)for(var s=0;s<a.length;s++){var c=a[s].fontfamily;null!=a[s].fontStyle&&null!=a[s].fontWeight?(i=a[s].fontStyle+a[s].fontWeight,r.push(new _(c,i))):r.push(new _(c))}t(r)}else setTimeout((function(){n()}),50)}())})).id="__MonotypeAPIScript__"+e}else t([])},z.prototype.load=function(t){var n,e,i=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},r=new m;for(n=0,e=i.length;n<e;n++)d(this.c,i[n],y(r));var s=[];for(n=0,e=o.length;n<e;n++)if((i=o[n].split(":"))[1])for(var c=i[1].split(","),f=0;f<c.length;f+=1)s.push(new _(i[0],c[f]));else s.push(new _(i[0]));w(r,(function(){t(s,a)}))};var V="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function nt(t,n){this.c=t,this.a=n}var et={Arimo:!0,Cousine:!0,Tinos:!0};function it(t,n){this.c=t,this.a=n}function ot(t,n){this.c=t,this.f=n,this.a=[]}nt.prototype.load=function(t){var n=new m,e=this.c,i=new K(this.a.api,this.a.text),o=this.a.families;!function(t,n){for(var e=n.length,i=0;i<e;i++){var o=n[i].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}(i,o);var a=new X(o);!function(t){for(var n=t.f.length,e=0;e<n;e++){var i=t.f[e].split(":"),o=i[0].replace(/\+/g," "),a=["n4"];if(2<=i.length){var r;if(r=[],s=i[1])for(var s,c=(s=s.split(",")).length,f=0;f<c;f++){var l;if((l=s[f]).match(/^[\w-]+$/))if(null==(u=tt.exec(l.toLowerCase())))l="";else{if(l=null==(l=u[2])||""==l?"n":Z[l],null==(u=u[1])||""==u)u="4";else var u=Y[u]||(isNaN(u)?"4":u.substr(0,1));l=[l,u].join("")}else l="";l&&r.push(l)}0<r.length&&(a=r),3==i.length&&(r=[],0<(i=(i=i[2])?i.split(","):r).length&&(i=Q[i[0]])&&(t.c[o]=i))}for(t.c[o]||(i=Q[o])&&(t.c[o]=i),i=0;i<a.length;i+=1)t.a.push(new _(o,a[i]))}}(a),d(e,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,e=[],i=0;i<n;i++)e.push(t.a[i].replace(/ /g,"+"));return n=t.c+"?family="+e.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(i),y(n)),w(n,(function(){t(a.a,a.c,et)}))},it.prototype.load=function(t){var n=this.a.id,e=this.c.o;n?v(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",(function(n){if(n)t([]);else if(e.Typekit&&e.Typekit.config&&e.Typekit.config.fn){n=e.Typekit.config.fn;for(var i=[],o=0;o<n.length;o+=2)for(var a=n[o],r=n[o+1],s=0;s<r.length;s++)i.push(new _(a,r[s]));try{e.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(i)}}),2e3):t([])},ot.prototype.load=function(t){var n=this.f.id,e=this.c.o,i=this;n?(e.__webfontfontdeckmodule__||(e.__webfontfontdeckmodule__={}),e.__webfontfontdeckmodule__[n]=function(n,e){for(var o=0,a=e.fonts.length;o<a;++o){var r=e.fonts[o];i.a.push(new _(r.name,S("font-weight:"+r.weight+";font-style:"+r.style)))}t(i.a)},v(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+n+".js",(function(n){n&&t([])}))):t([])};var at=new H(window);at.a.c.custom=function(t,n){return new z(n,t)},at.a.c.fontdeck=function(t,n){return new ot(n,t)},at.a.c.monotype=function(t,n){return new U(n,t)},at.a.c.typekit=function(t,n){return new it(n,t)},at.a.c.google=function(t,n){return new nt(n,t)};var rt={load:r(at.load,at)};void 0===(i=function(){return rt}.call(n,e,n,t))||(t.exports=i)}()},459:function(t,n,e){"use strict";e.r(n);var i=e(126),o=e(2),a=e(1),r=e.n(a),s=e(4),c=e(5),f=function(t){var n,e,a,f,l=t,u=l.state,h=l.togglePreview,p=l.inspectorControls,g=t=t.parentProps,d=g.attributes,v=g.categoriesList,m=g.setAttributes,y=g.taxonomyList,w=d.align,b=d.titleFontFamily,j=d.titleFontWeight,_=d.titleLoadGoogleFonts,O=d.metaFontFamily,k=d.metaFontWeight,x=d.metaLoadGoogleFonts,S=d.excerptFontFamily,F=d.excerptFontWeight,T=d.excerptLoadGoogleFonts,E=d.ctaFontFamily,P=d.ctaFontWeight,A=d.ctaLoadGoogleFonts;if(1==_){var C={google:{families:[b+(j?":"+j:"")]}};n=r.a.createElement(i.a,{config:C})}if(1==x){var L={google:{families:[O+(k?":"+k:"")]}};e=r.a.createElement(i.a,{config:L})}if(1==T){var N={google:{families:[S+(F?":"+F:"")]}};a=r.a.createElement(i.a,{config:N})}if(1==A){var W={google:{families:[E+(P?":"+P:"")]}};f=r.a.createElement(i.a,{config:W})}var B,I=[],D=[{value:"",label:Object(o.__)("All","ultimate-addons-for-gutenberg")}];return""!=y&&Object.keys(y).map((function(t,n){return I.push({value:y[t].name,label:y[t].label})})),""!=v&&Object.keys(v).map((function(t,n){return D.push({value:v[t].id,label:v[t].name})})),r.a.createElement(r.a.Fragment,null,p,r.a.createElement(s.BlockControls,null,r.a.createElement(s.BlockAlignmentToolbar,{value:w,onChange:function(t){m({align:t})},controls:["left","center","right"]}),(B=u.isEditing,r.a.createElement(c.ToolbarGroup,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return h()},isActive:B}]}))),n,e,a,f)};n.default=r.a.memo(f)}}]);