(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[10],{130:function(t,e,n){"use strict";var i=n(10),o=n(27),a=n.n(o),r=n(131),s=n.n(r);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}if(void 0===m)var m=[];var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(r,t);var e,n,i,o,a=(i=r,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(i);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return g(this,t)});function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=a.call(this,t)).state={status:void 0},e.handleLoading=function(){e.setState({status:"loading"})},e.addFont=function(t){m.includes(t)||m.push(t)},e.handleActive=function(){e.setState({status:"active"})},e.handleInactive=function(){e.setState({status:"inactive"})},e.loadFonts=function(){m.includes(e.props.config.google.families[0])||(s.a.load(u(u({},e.props.config),{},{loading:e.handleLoading,active:e.handleActive,inactive:e.handleInactive})),e.addFont(e.props.config.google.families[0]))},e}return e=r,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(t,e){var n=this.props,i=n.onStatus,o=n.config;e.status!==this.state.status&&i(this.state.status),t.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&h(e.prototype,n),r}(i.Component);v.propTypes={config:a.a.object.isRequired,children:a.a.element,onStatus:a.a.func.isRequired},v.defaultProps={onStatus:function(){}},e.a=v},131:function(t,e,n){var i;!function(){function o(t,e,n){return t.call.apply(t.bind,arguments)}function a(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function r(t,e,n){return(r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a).apply(null,arguments)}var s=Date.now||function(){return+new Date};function l(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var c=!!window.FontFace;function u(t,e,n,i){if(e=t.c.createElement(e),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?e.style.cssText=n[o]:e.setAttribute(o,n[o]));return i&&e.appendChild(t.c.createTextNode(i)),e}function f(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t,e,n){e=e||[],n=n||[];for(var i=t.className.split(/\s+/),o=0;o<e.length;o+=1){for(var a=!1,r=0;r<i.length;r+=1)if(e[o]===i[r]){a=!0;break}a||i.push(e[o])}for(e=[],o=0;o<i.length;o+=1){for(a=!1,r=0;r<n.length;r+=1)if(i[o]===n[r]){a=!0;break}a||e.push(i[o])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(t,e){for(var n=t.className.split(/\s+/),i=0,o=n.length;i<o;i++)if(n[i]==e)return!0;return!1}function d(t,e,n){function i(){s&&o&&a&&(s(r),s=null)}e=u(t,"link",{rel:"stylesheet",href:e,media:"all"});var o=!1,a=!0,r=null,s=n||null;c?(e.onload=function(){o=!0,i()},e.onerror=function(){o=!0,r=Error("Stylesheet failed to load"),i()}):setTimeout((function(){o=!0,i()}),0),f(t,"head",e)}function m(t,e,n,i){var o=t.c.getElementsByTagName("head")[0];if(o){var a=u(t,"script",{src:e}),r=!1;return a.onload=a.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,n&&n(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout((function(){r||(r=!0,n&&n(Error("Script load timeout")))}),i||5e3),a}return null}function v(){this.a=0,this.c=null}function b(t){return t.a++,function(){t.a--,w(t)}}function y(t,e){t.c=e,w(t)}function w(t){0==t.a&&t.c&&(t.c(),t.c=null)}function _(t){this.a=t||"-"}function j(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function O(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var i=t[n].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?e.push("'"+i+"'"):e.push(i)}return e.join(",")}function S(t){return t.a+t.f}function k(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function x(t){var e=4,n="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?e=7:/[1-9]00/.test(i[1])&&(e=parseInt(i[1].substr(0,1),10)))),n+e}function E(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new _("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function T(t){if(t.g){var e=g(t.f,t.a.c("wf","active")),n=[],i=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),p(t.f,n,i)}P(t,"inactive")}function P(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,S(n)):t.h[e]())}function C(){this.c={}}function A(t,e){this.c=t,this.f=e,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function F(t){f(t.c,"body",t.a)}function N(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+O(t.c)+";font-style:"+k(t)+";font-weight:"+t.f+"00;"}function B(t,e,n,i,o,a){this.g=t,this.j=e,this.a=i,this.c=n,this.f=o||3e3,this.h=a||void 0}function I(t,e,n,i,o,a,r){this.v=t,this.B=e,this.c=n,this.a=i,this.s=r||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new A(this.c,this.s),this.h=new A(this.c,this.s),this.j=new A(this.c,this.s),this.m=new A(this.c,this.s),t=N(t=new j(this.a.c+",serif",S(this.a))),this.g.a.style.cssText=t,t=N(t=new j(this.a.c+",sans-serif",S(this.a))),this.h.a.style.cssText=t,t=N(t=new j("serif",S(this.a))),this.j.a.style.cssText=t,t=N(t=new j("sans-serif",S(this.a))),this.m.a.style.cssText=t,F(this.g),F(this.h),F(this.j),F(this.m)}_.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},B.prototype.start=function(){var t=this.c.o.document,e=this,n=s(),i=new Promise((function(i,o){!function a(){s()-n>=e.f?o():t.fonts.load(function(t){return k(t)+" "+t.f+"00 300px "+O(t.c)}(e.a),e.h).then((function(t){1<=t.length?i():setTimeout(a,25)}),(function(){o()}))}()})),o=null,a=new Promise((function(t,n){o=setTimeout(n,e.f)}));Promise.race([a,i]).then((function(){o&&(clearTimeout(o),o=null),e.g(e.a)}),(function(){e.j(e.a)}))};var D={D:"serif",C:"sans-serif"},W=null;function R(){if(null===W){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);W=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return W}function L(t,e,n){for(var i in D)if(D.hasOwnProperty(i)&&e===t.f[D[i]]&&n===t.f[D[i]])return!0;return!1}function G(t,e){setTimeout(r((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),e(this.a)}),t),0)}function q(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}I.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=s(),function t(e){var n,i=e.g.a.offsetWidth,o=e.h.a.offsetWidth;(n=i===e.f.serif&&o===e.f["sans-serif"])||(n=R()&&L(e,i,o)),n?s()-e.A>=e.w?R()&&L(e,i,o)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?G(e,e.v):G(e,e.B):function(e){setTimeout(r((function(){t(this)}),e),50)}(e):G(e,e.v)}(this)};var M=null;function $(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&p(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),P(t,"active")):T(t.a))}function H(t){this.j=t,this.a=new C,this.h=0,this.f=this.g=!0}function z(t,e,n,i,o){var a=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=o||null,s=i||{};if(0===n.length&&a)T(e.a);else{e.f+=n.length,a&&(e.j=a);var l,c=[];for(l=0;l<n.length;l++){var u=n[l],f=s[u.c],h=e.a,g=u;if(h.g&&p(h.f,[h.a.c("wf",g.c,S(g).toString(),"loading")]),P(h,"fontloading",g),h=null,null===M)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);M=g?42<parseInt(g[1],10):!d}else M=!1;h=M?new B(r(e.g,e),r(e.h,e),e.c,u,e.s,f):new I(r(e.g,e),r(e.h,e),e.c,u,e.s,t,f),c.push(h)}for(l=0;l<c.length;l++)c[l].start()}}),0)}function J(t,e){this.c=t,this.a=e}function U(t,e){this.c=t,this.a=e}function V(t,e){this.c=t||K,this.a=[],this.f=[],this.g=e||""}q.prototype.g=function(t){var e=this.a;e.g&&p(e.f,[e.a.c("wf",t.c,S(t).toString(),"active")],[e.a.c("wf",t.c,S(t).toString(),"loading"),e.a.c("wf",t.c,S(t).toString(),"inactive")]),P(e,"fontactive",t),this.m=!0,$(this)},q.prototype.h=function(t){var e=this.a;if(e.g){var n=g(e.f,e.a.c("wf",t.c,S(t).toString(),"active")),i=[],o=[e.a.c("wf",t.c,S(t).toString(),"loading")];n||i.push(e.a.c("wf",t.c,S(t).toString(),"inactive")),p(e.f,i,o)}P(e,"fontinactive",t),$(this)},H.prototype.load=function(t){this.c=new l(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var i=[],o=n.timeout;!function(t){t.g&&p(t.f,[t.a.c("wf","loading")]),P(t,"loading")}(e),i=function(t,e,n){var i,o=[];for(i in e)if(e.hasOwnProperty(i)){var a=t.c[i];a&&o.push(a(e[i],n))}return o}(t.a,n,t.c);var a=new q(t.c,e,o);for(t.h=i.length,e=0,n=i.length;e<n;e++)i[e].load((function(e,n,i){z(t,a,e,n,i)}))}(this,new E(this.c,t),t)},J.prototype.load=function(t){var e=this,n=e.a.projectId,i=e.a.version;if(n){var o=e.c.o;m(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(i?"?v="+i:""),(function(i){i?t([]):(o["__MonotypeConfiguration__"+n]=function(){return e.a},function e(){if(o["__mti_fntLst"+n]){var i,a=o["__mti_fntLst"+n](),r=[];if(a)for(var s=0;s<a.length;s++){var l=a[s].fontfamily;null!=a[s].fontStyle&&null!=a[s].fontWeight?(i=a[s].fontStyle+a[s].fontWeight,r.push(new j(l,i))):r.push(new j(l))}t(r)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+n}else t([])},U.prototype.load=function(t){var e,n,i=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},r=new v;for(e=0,n=i.length;e<n;e++)d(this.c,i[e],b(r));var s=[];for(e=0,n=o.length;e<n;e++)if((i=o[e].split(":"))[1])for(var l=i[1].split(","),c=0;c<l.length;c+=1)s.push(new j(i[0],l[c]));else s.push(new j(i[0]));y(r,(function(){t(s,a)}))};var K="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var nt={Arimo:!0,Cousine:!0,Tinos:!0};function it(t,e){this.c=t,this.a=e}function ot(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new v,n=this.c,i=new V(this.a.api,this.a.text),o=this.a.families;!function(t,e){for(var n=e.length,i=0;i<n;i++){var o=e[i].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}(i,o);var a=new X(o);!function(t){for(var e=t.f.length,n=0;n<e;n++){var i=t.f[n].split(":"),o=i[0].replace(/\+/g," "),a=["n4"];if(2<=i.length){var r;if(r=[],s=i[1])for(var s,l=(s=s.split(",")).length,c=0;c<l;c++){var u;if((u=s[c]).match(/^[\w-]+$/))if(null==(f=tt.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&r.push(u)}0<r.length&&(a=r),3==i.length&&(r=[],0<(i=(i=i[2])?i.split(","):r).length&&(i=Q[i[0]])&&(t.c[o]=i))}for(t.c[o]||(i=Q[o])&&(t.c[o]=i),i=0;i<a.length;i+=1)t.a.push(new j(o,a[i]))}}(a),d(n,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],i=0;i<e;i++)n.push(t.a[i].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(i),b(e)),y(e,(function(){t(a.a,a.c,nt)}))},it.prototype.load=function(t){var e=this.a.id,n=this.c.o;e?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var i=[],o=0;o<e.length;o+=2)for(var a=e[o],r=e[o+1],s=0;s<r.length;s++)i.push(new j(a,r[s]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(i)}}),2e3):t([])},ot.prototype.load=function(t){var e=this.f.id,n=this.c.o,i=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var o=0,a=n.fonts.length;o<a;++o){var r=n.fonts[o];i.a.push(new j(r.name,x("font-weight:"+r.weight+";font-style:"+r.style)))}t(i.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var at=new H(window);at.a.c.custom=function(t,e){return new U(e,t)},at.a.c.fontdeck=function(t,e){return new ot(e,t)},at.a.c.monotype=function(t,e){return new J(e,t)},at.a.c.typekit=function(t,e){return new it(e,t)},at.a.c.google=function(t,e){return new et(e,t)};var rt={load:r(at.load,at)};void 0===(i=function(){return rt}.call(e,n,e,t))||(t.exports=i)}()},467:function(t,e,n){"use strict";n.r(e);var i=n(8),o=n(1),a=n.n(o),r=n(2),s=n(4),l=n(5),c=n(19),u=n(130),f=function(t){var e,n=t=t.parentProps,f=n.attributes,h=n.setAttributes,p=f.align,g=f.gap,d=f.stack,m=f.loadGoogleFonts,v=f.fontFamily,b=f.fontWeight,y=f.fontSubset;if(1==m){var w={google:{families:[v+(b?":"+b:"")]}};e=a.a.createElement(u.a,{config:w})}return a.a.createElement(o.Suspense,{fallback:Object(i.a)()},a.a.createElement(s.InspectorControls,null,a.a.createElement(l.PanelBody,{title:Object(r.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},a.a.createElement(l.BaseControl,null,a.a.createElement(l.BaseControl.VisualLabel,null,Object(r.__)("Alignment","ultimate-addons-for-gutenberg")),a.a.createElement(s.BlockAlignmentToolbar,{value:p,onChange:function(t){return h({align:t})},controls:["left","center","right","full"],isCollapsed:!1})),a.a.createElement("h2",null,Object(r.__)("Spacing","ultimate-addons-for-gutenberg")),a.a.createElement(l.RangeControl,{label:Object(r.__)("Gap Between Buttons","ultimate-addons-for-gutenberg"),value:g,onChange:function(t){return h({gap:t})},help:Object(r.__)("Note: The gap between the buttons will seem larger in the editor, for better user edit experience. But at frontend the gap will be exactly what is set from here.","ultimate-addons-for-gutenberg"),min:0,max:500}),a.a.createElement("hr",{className:"uagb-editor__separator"}),a.a.createElement(l.SelectControl,{label:Object(r.__)("Stack on","ultimate-addons-for-gutenberg"),value:d,options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"desktop",label:Object(r.__)("Desktop","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(r.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(r.__)("Mobile","ultimate-addons-for-gutenberg")}],onChange:function(t){return h({stack:t})},help:Object(r.__)("Note: Choose on what breakpoint the buttons will stack.","ultimate-addons-for-gutenberg")}),a.a.createElement("hr",{className:"uagb-editor__separator"}),a.a.createElement("h2",null,Object(r.__)("Typography","ultimate-addons-for-gutenberg")),a.a.createElement(c.default,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:f,setAttributes:h,loadGoogleFonts:{value:m,label:"loadGoogleFonts"},fontFamily:{value:v,label:"fontFamily"},fontWeight:{value:b,label:"fontWeight"},fontSubset:{value:y,label:"fontSubset"},disableFontSize:!0,disableLineHeight:!0}))),e)};e.default=a.a.memo(f)}}]);