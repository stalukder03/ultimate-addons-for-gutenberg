(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[111],{189:function(t,e,a){"use strict";var n,o,i=a(34),l=a.n(i),r=a(190),u=a.n(r),s=a(2);if(void 0===c)var c=[];const b=t=>{const[e,a]=Object(s.useState)([]);Object(s.useEffect)(()=>{l()},[]),Object(s.useEffect)(()=>{const{onStatus:a,config:n}=t;void 0!==e.status&&a(e.status),n!==e.config&&l()},[t]);const n=()=>{a({status:"loading"})},o=()=>{a({status:"active"})},i=()=>{a({status:"inactive"})},l=()=>{var e;c.includes(t.config.google.families[0])||(u.a.load({...t.config,loading:n,active:o,inactive:i}),e=t.config.google.families[0],c.includes(e)||c.push(e))},{children:r}=t;return r||null};b.propTypes={config:null===(n=l.a.object)||void 0===n?void 0:n.isRequired,children:l.a.element,onStatus:null===(o=l.a.func)||void 0===o?void 0:o.isRequired},b.defaultProps={onStatus:()=>{}},e.a=b},190:function(t,e,a){var n;!function(){function o(t,e,a){return t.call.apply(t.bind,arguments)}function i(t,e,a){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),t.apply(e,a)}}return function(){return t.apply(e,arguments)}}function l(t,e,a){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:i).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var s=!!window.FontFace;function c(t,e,a,n){if(e=t.c.createElement(e),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?e.style.cssText=a[o]:e.setAttribute(o,a[o]));return n&&e.appendChild(t.c.createTextNode(n)),e}function b(t,e,a){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(a,t.lastChild)}function d(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t,e,a){e=e||[],a=a||[];for(var n=t.className.split(/\s+/),o=0;o<e.length;o+=1){for(var i=!1,l=0;l<n.length;l+=1)if(e[o]===n[l]){i=!0;break}i||n.push(e[o])}for(e=[],o=0;o<n.length;o+=1){for(i=!1,l=0;l<a.length;l+=1)if(n[o]===a[l]){i=!0;break}i||e.push(n[o])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(t,e){for(var a=t.className.split(/\s+/),n=0,o=a.length;n<o;n++)if(a[n]==e)return!0;return!1}function f(t,e,a){function n(){r&&o&&i&&(r(l),r=null)}e=c(t,"link",{rel:"stylesheet",href:e,media:"all"});var o=!1,i=!0,l=null,r=a||null;s?(e.onload=function(){o=!0,n()},e.onerror=function(){o=!0,l=Error("Stylesheet failed to load"),n()}):setTimeout((function(){o=!0,n()}),0),b(t,"head",e)}function p(t,e,a,n){var o=t.c.getElementsByTagName("head")[0];if(o){var i=c(t,"script",{src:e}),l=!1;return i.onload=i.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,a&&a(null),i.onload=i.onreadystatechange=null,"HEAD"==i.parentNode.tagName&&o.removeChild(i))},o.appendChild(i),setTimeout((function(){l||(l=!0,a&&a(Error("Script load timeout")))}),n||5e3),i}return null}function m(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,x(t)}}function w(t,e){t.c=e,x(t)}function x(t){0==t.a&&t.c&&(t.c(),t.c=null)}function y(t){this.a=t||"-"}function _(t,e){this.c=t,this.f=4,this.a="n";var a=(e||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function S(t){var e=[];t=t.split(/,\s*/);for(var a=0;a<t.length;a++){var n=t[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?e.push("'"+n+"'"):e.push(n)}return e.join(",")}function T(t){return t.a+t.f}function j(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function C(t){var e=4,a="n",n=null;return t&&((n=t.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=t.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?e=7:/[1-9]00/.test(n[1])&&(e=parseInt(n[1].substr(0,1),10)))),a+e}function O(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new y("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function E(t){if(t.g){var e=g(t.f,t.a.c("wf","active")),a=[],n=[t.a.c("wf","loading")];e||a.push(t.a.c("wf","inactive")),h(t.f,a,n)}I(t,"inactive")}function I(t,e,a){t.j&&t.h[e]&&(a?t.h[e](a.c,T(a)):t.h[e]())}function F(){this.c={}}function z(t,e){this.c=t,this.f=e,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function H(t){b(t.c,"body",t.a)}function B(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+S(t.c)+";font-style:"+j(t)+";font-weight:"+t.f+"00;"}function k(t,e,a,n,o,i){this.g=t,this.j=e,this.a=n,this.c=a,this.f=o||3e3,this.h=i||void 0}function L(t,e,a,n,o,i,l){this.v=t,this.B=e,this.c=a,this.a=n,this.s=l||"BESbswy",this.f={},this.w=o||3e3,this.u=i||null,this.m=this.j=this.h=this.g=null,this.g=new z(this.c,this.s),this.h=new z(this.c,this.s),this.j=new z(this.c,this.s),this.m=new z(this.c,this.s),t=B(t=new _(this.a.c+",serif",T(this.a))),this.g.a.style.cssText=t,t=B(t=new _(this.a.c+",sans-serif",T(this.a))),this.h.a.style.cssText=t,t=B(t=new _("serif",T(this.a))),this.j.a.style.cssText=t,t=B(t=new _("sans-serif",T(this.a))),this.m.a.style.cssText=t,H(this.g),H(this.h),H(this.j),H(this.m)}y.prototype.c=function(t){for(var e=[],a=0;a<arguments.length;a++)e.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},k.prototype.start=function(){var t=this.c.o.document,e=this,a=r(),n=new Promise((function(n,o){!function i(){r()-a>=e.f?o():t.fonts.load(function(t){return j(t)+" "+t.f+"00 300px "+S(t.c)}(e.a),e.h).then((function(t){1<=t.length?n():setTimeout(i,25)}),(function(){o()}))}()})),o=null,i=new Promise((function(t,a){o=setTimeout(a,e.f)}));Promise.race([i,n]).then((function(){o&&(clearTimeout(o),o=null),e.g(e.a)}),(function(){e.j(e.a)}))};var A={D:"serif",C:"sans-serif"},N=null;function P(){if(null===N){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return N}function M(t,e,a){for(var n in A)if(A.hasOwnProperty(n)&&e===t.f[A[n]]&&a===t.f[A[n]])return!0;return!1}function W(t,e){setTimeout(l((function(){d(this.g.a),d(this.h.a),d(this.j.a),d(this.m.a),e(this.a)}),t),0)}function V(t,e,a){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=a}L.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(e){var a,n=e.g.a.offsetWidth,o=e.h.a.offsetWidth;(a=n===e.f.serif&&o===e.f["sans-serif"])||(a=P()&&M(e,n,o)),a?r()-e.A>=e.w?P()&&M(e,n,o)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?W(e,e.v):W(e,e.B):function(e){setTimeout(l((function(){t(this)}),e),50)}(e):W(e,e.v)}(this)};var R=null;function D(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&h(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),I(t,"active")):E(t.a))}function U(t){this.j=t,this.a=new F,this.h=0,this.f=this.g=!0}function G(t,e,a,n,o){var i=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=o||null,r=n||{};if(0===a.length&&i)E(e.a);else{e.f+=a.length,i&&(e.j=i);var u,s=[];for(u=0;u<a.length;u++){var c=a[u],b=r[c.c],d=e.a,g=c;if(d.g&&h(d.f,[d.a.c("wf",g.c,T(g).toString(),"loading")]),I(d,"fontloading",g),d=null,null===R)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var f=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);R=g?42<parseInt(g[1],10):!f}else R=!1;d=R?new k(l(e.g,e),l(e.h,e),e.c,c,e.s,b):new L(l(e.g,e),l(e.h,e),e.c,c,e.s,t,b),s.push(d)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function q(t,e){this.c=t,this.a=e}function $(t,e){this.c=t,this.a=e}function J(t,e){this.c=t||K,this.a=[],this.f=[],this.g=e||""}V.prototype.g=function(t){var e=this.a;e.g&&h(e.f,[e.a.c("wf",t.c,T(t).toString(),"active")],[e.a.c("wf",t.c,T(t).toString(),"loading"),e.a.c("wf",t.c,T(t).toString(),"inactive")]),I(e,"fontactive",t),this.m=!0,D(this)},V.prototype.h=function(t){var e=this.a;if(e.g){var a=g(e.f,e.a.c("wf",t.c,T(t).toString(),"active")),n=[],o=[e.a.c("wf",t.c,T(t).toString(),"loading")];a||n.push(e.a.c("wf",t.c,T(t).toString(),"inactive")),h(e.f,n,o)}I(e,"fontinactive",t),D(this)},U.prototype.load=function(t){this.c=new u(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,a){var n=[],o=a.timeout;!function(t){t.g&&h(t.f,[t.a.c("wf","loading")]),I(t,"loading")}(e),n=function(t,e,a){var n,o=[];for(n in e)if(e.hasOwnProperty(n)){var i=t.c[n];i&&o.push(i(e[n],a))}return o}(t.a,a,t.c);var i=new V(t.c,e,o);for(t.h=n.length,e=0,a=n.length;e<a;e++)n[e].load((function(e,a,n){G(t,i,e,a,n)}))}(this,new O(this.c,t),t)},q.prototype.load=function(t){var e=this,a=e.a.projectId,n=e.a.version;if(a){var o=e.c.o;p(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?t([]):(o["__MonotypeConfiguration__"+a]=function(){return e.a},function e(){if(o["__mti_fntLst"+a]){var n,i=o["__mti_fntLst"+a](),l=[];if(i)for(var r=0;r<i.length;r++){var u=i[r].fontfamily;null!=i[r].fontStyle&&null!=i[r].fontWeight?(n=i[r].fontStyle+i[r].fontWeight,l.push(new _(u,n))):l.push(new _(u))}t(l)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+a}else t([])},$.prototype.load=function(t){var e,a,n=this.a.urls||[],o=this.a.families||[],i=this.a.testStrings||{},l=new m;for(e=0,a=n.length;e<a;e++)f(this.c,n[e],v(l));var r=[];for(e=0,a=o.length;e<a;e++)if((n=o[e].split(":"))[1])for(var u=n[1].split(","),s=0;s<u.length;s+=1)r.push(new _(n[0],u[s]));else r.push(new _(n[0]));w(l,(function(){t(r,i)}))};var K="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var at={Arimo:!0,Cousine:!0,Tinos:!0};function nt(t,e){this.c=t,this.a=e}function ot(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new m,a=this.c,n=new J(this.a.api,this.a.text),o=this.a.families;!function(t,e){for(var a=e.length,n=0;n<a;n++){var o=e[n].split(":");3==o.length&&t.f.push(o.pop());var i="";2==o.length&&""!=o[1]&&(i=":"),t.a.push(o.join(i))}}(n,o);var i=new X(o);!function(t){for(var e=t.f.length,a=0;a<e;a++){var n=t.f[a].split(":"),o=n[0].replace(/\+/g," "),i=["n4"];if(2<=n.length){var l;if(l=[],r=n[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var c;if((c=r[s]).match(/^[\w-]+$/))if(null==(b=tt.exec(c.toLowerCase())))c="";else{if(c=null==(c=b[2])||""==c?"n":Z[c],null==(b=b[1])||""==b)b="4";else var b=Y[b]||(isNaN(b)?"4":b.substr(0,1));c=[c,b].join("")}else c="";c&&l.push(c)}0<l.length&&(i=l),3==n.length&&(l=[],0<(n=(n=n[2])?n.split(","):l).length&&(n=Q[n[0]])&&(t.c[o]=n))}for(t.c[o]||(n=Q[o])&&(t.c[o]=n),n=0;n<i.length;n+=1)t.a.push(new _(o,i[n]))}}(i),f(a,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,a=[],n=0;n<e;n++)a.push(t.a[n].replace(/ /g,"+"));return e=t.c+"?family="+a.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(n),v(e)),w(e,(function(){t(i.a,i.c,at)}))},nt.prototype.load=function(t){var e=this.a.id,a=this.c.o;e?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){e=a.Typekit.config.fn;for(var n=[],o=0;o<e.length;o+=2)for(var i=e[o],l=e[o+1],r=0;r<l.length;r++)n.push(new _(i,l[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(n)}}),2e3):t([])},ot.prototype.load=function(t){var e=this.f.id,a=this.c.o,n=this;e?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[e]=function(e,a){for(var o=0,i=a.fonts.length;o<i;++o){var l=a.fonts[o];n.a.push(new _(l.name,C("font-weight:"+l.weight+";font-style:"+l.style)))}t(n.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var it=new U(window);it.a.c.custom=function(t,e){return new $(e,t)},it.a.c.fontdeck=function(t,e){return new ot(e,t)},it.a.c.monotype=function(t,e){return new q(e,t)},it.a.c.typekit=function(t,e){return new nt(e,t)},it.a.c.google=function(t,e){return new et(e,t)};var lt={load:l(it.load,it)};void 0===(n=function(){return lt}.call(e,a,e,t))||(t.exports=n)}()},197:function(t,e,a){"use strict";var n=a(16),o=a.n(n)()((function(t){return t[1]}));o.push([t.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 14px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),e.a=o},201:function(t,e,a){"use strict";var n,o=a(1),i=a(11),l=a(17),r=a(6),u=a(2),s=a(22),c=a(15),b=a.n(c),d=a(197),h=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=d.a.locals||{},f.use=function(){return h++||(n=b()(d.a,g)),f},f.unuse=function(){h>0&&!--h&&(n(),n=null)};var p=f,m=a(0),v=a.n(m);e.a=t=>{Object(m.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const[e,a]=Object(u.useState)(!1),{setAttributes:n,boxShadowColor:c,boxShadowHOffset:b,boxShadowVOffset:d,boxShadowBlur:h,boxShadowSpread:g,boxShadowPosition:f}=t;let w;const x=e?"active":"";e&&(w=v.a.createElement("div",{className:"uagb-box-shadow-advanced"},v.a.createElement("div",{className:"uagb-shadow-color"},v.a.createElement(l.a,{label:c.title,colorValue:c.value,onColorChange:t=>n({[c.label]:t})})),v.a.createElement("div",{className:"uagb-horizontal-wrap"},v.a.createElement(i.a,{label:b.title,value:b.value,min:0,max:100,displayUnit:!1,setAttributes:n,data:{value:b.value,label:b.label}})),v.a.createElement("div",{className:"uagb-vertical-wrap"},v.a.createElement(i.a,{label:d.title,value:d.value,min:0,max:100,displayUnit:!1,setAttributes:n,data:{value:d.value,label:d.label}})),v.a.createElement("div",{className:"uagb-blur-wrap"},v.a.createElement(i.a,{label:h.title,value:h.value,min:0,max:100,displayUnit:!1,setAttributes:n,data:{value:h.value,label:h.label}})),v.a.createElement("div",{className:"uagb-spread-wrap"},v.a.createElement(i.a,{label:g.title,value:g.value,min:-100,max:100,displayUnit:!1,setAttributes:n,data:{value:g.value,label:g.label}})),v.a.createElement("div",{className:"uagb-shadow-type"},v.a.createElement(s.a,{setAttributes:n,label:f.title,data:{value:f.value,label:f.label},options:[{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const y=v.a.createElement("div",{className:"uag-box-shadow-option-actions"},v.a.createElement("span",{className:"uag-control-label"},Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg")),v.a.createElement(r.Button,{className:"uag-box-shadow-button","aria-pressed":e,onClick:()=>a(!e)},v.a.createElement(r.Dashicon,{icon:"edit"})));return v.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+x},y,e&&w)}},488:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a(30),i=a(201),l=a(22),r=a(189),u=a(0),s=a.n(u),c=a(77),b=a(50),d=a(11),h=a(51),g=a(79),f=a(23),p=a(17),m=a(6),v=a(4),w=a(14);function x(){return(x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}const y=t=>{t=t.parentProps;const{attributes:e,setAttributes:a,deviceType:u}=t,{layout:y,placeholder:_,inputSize:S,textColor:T,inputBgColor:j,boxShadowColor:C,boxShadowHOffset:O,boxShadowVOffset:E,boxShadowBlur:I,boxShadowSpread:F,boxShadowPosition:z,borderStyle:H,borderWidth:B,borderRadius:k,borderHColor:L,borderColor:A,buttonBgColor:N,buttonBgHoverColor:P,buttonIconColor:M,buttonIconHoverColor:W,buttonWidth:V,buttonWidthType:R,buttonIconSize:D,buttonIconSizeType:U,iconColor:G,iconSize:q,inputloadGoogleFonts:$,inputFontFamily:J,inputFontWeight:K,inputFontSize:X,inputFontSizeType:Q,inputFontSizeTablet:Y,inputFontSizeMobile:Z,inputLineHeight:tt,inputLineHeightType:et,inputLineHeightTablet:at,inputLineHeightMobile:nt,inputPaddingTypeDesktop:ot,buttonType:it,buttonText:lt,buttonloadGoogleFonts:rt,buttonFontFamily:ut,buttonFontWeight:st,buttonFontSize:ct,buttonFontSizeType:bt,buttonFontSizeTablet:dt,buttonFontSizeMobile:ht,buttonLineHeight:gt,buttonLineHeightType:ft,buttonLineHeightTablet:pt,buttonTransform:mt,buttonDecoration:vt,buttonLineHeightMobile:wt,buttonTextColor:xt,buttonTextHoverColor:yt,inputSizeType:_t,paddingInputTop:St,paddingInputRight:Tt,paddingInputBottom:jt,paddingInputLeft:Ct,paddingInputTopTablet:Ot,paddingInputRightTablet:Et,paddingInputBottomTablet:It,paddingInputLeftTablet:Ft,paddingInputTopMobile:zt,paddingInputRightMobile:Ht,paddingInputBottomMobile:Bt,paddingInputLeftMobile:kt,mobilePaddingInputUnit:Lt,tabletPaddingInputUnit:At,spacingLink:Nt,iconSizeType:Pt,inputTransform:Mt,inputDecoration:Wt,inputFontStyle:Vt,buttonFontStyle:Rt}=e;let Dt,Ut;if(!0===$){const t={google:{families:[J+(K?":"+K:"")]}};Dt=s.a.createElement(r.a,{config:t})}if(!0===rt){const t={google:{families:[ut+(st?":"+st:"")]}};Ut=s.a.createElement(r.a,{config:t})}return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.InspectorControls,null,s.a.createElement(g.a,null,s.a.createElement(f.b,f.a.general,s.a.createElement(w.a,{initialOpen:!0},s.a.createElement(l.a,{setAttributes:a,label:Object(n.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:y,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"input-button",label:"Classic"},{value:"input",label:"Minimal"}],showIcons:!1}),s.a.createElement(m.TextControl,{label:Object(n.__)("Placeholder","ultimate-addons-for-gutenberg"),value:_,onChange:t=>a({placeholder:t})}),s.a.createElement(d.a,{label:Object(n.__)("Input Width","ultimate-addons-for-gutenberg"),setAttributes:a,value:S,onChange:t=>a({inputSize:t}),min:0,max:200,units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],unit:{value:_t,label:"inputSizeType"}}),"input-button"===y&&s.a.createElement(l.a,{setAttributes:a,label:Object(n.__)("Button Type","ultimate-addons-for-gutenberg"),data:{value:it,label:"buttonType"},className:"uagb-multi-button-alignment-control",options:[{value:"icon",label:"Icon"},{value:"text",label:"Text"}],showIcons:!1}),"input-button"===y&&"text"===it&&s.a.createElement(s.a.Fragment,null,s.a.createElement(m.TextControl,{label:"Text",value:lt,onChange:t=>{a({buttonText:t})}})))),s.a.createElement(f.b,f.a.style,s.a.createElement(w.a,{title:Object(n.__)("Input Box","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(p.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:T||"",onColorChange:t=>a({textColor:t})}),s.a.createElement(p.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:j||"",onColorChange:t=>a({inputBgColor:t})}),s.a.createElement(c.a,{setAttributes:a,borderStyle:{value:H,label:"borderStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:B,label:"borderWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:k,label:"borderRadius",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:A,label:"borderColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:L,label:"borderHColor",title:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")}}),s.a.createElement(b.a,x({},t,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:St,label:"paddingInputTop"},valueRight:{value:Tt,label:"paddingInputRight"},valueBottom:{value:jt,label:"paddingInputBottom"},valueLeft:{value:Ct,label:"paddingInputLeft"},valueTopTablet:{value:Ot,label:"paddingInputTopTablet"},valueRightTablet:{value:Et,label:"paddingInputRightTablet"},valueBottomTablet:{value:It,label:"paddingInputBottomTablet"},valueLeftTablet:{value:Ft,label:"paddingInputLeftTablet"},valueTopMobile:{value:zt,label:"paddingInputTopMobile"},valueRightMobile:{value:Ht,label:"paddingInputRightMobile"},valueBottomMobile:{value:Bt,label:"paddingInputBottomMobile"},valueLeftMobile:{value:kt,label:"paddingInputLeftMobile"},unit:{value:ot,label:"inputPaddingTypeDesktop"},mUnit:{value:Lt,label:"mobilePaddingInputUnit"},tUnit:{value:At,label:"tabletPaddingInputUnit"},deviceType:u,attributes:e,setAttributes:a,link:{value:Nt,label:"spacingLink"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),s.a.createElement(o.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:$,label:"inputloadGoogleFonts"},fontFamily:{value:J,label:"inputFontFamily"},fontWeight:{value:K,label:"inputFontWeight"},fontStyle:{value:Vt,label:"inputFontStyle"},fontSizeType:{value:Q,label:"inputFontSizeType"},fontSize:{value:X,label:"inputFontSize"},fontSizeMobile:{value:Z,label:"inputFontSizeMobile"},fontSizeTablet:{value:Y,label:"inputFontSizeTablet"},lineHeightType:{value:et,label:"inputLineHeightType"},lineHeight:{value:tt,label:"inputLineHeight"},lineHeightMobile:{value:nt,label:"inputLineHeightMobile"},lineHeightTablet:{value:at,label:"inputLineHeightTablet"},transform:{value:Mt,label:"inputTransform"},decoration:{value:Wt,label:"inputDecoration"}}),s.a.createElement(i.a,{setAttributes:a,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:C,label:"boxShadowColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:O,label:"boxShadowHOffset",title:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:E,label:"boxShadowVOffset",title:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:I,label:"boxShadowBlur",title:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:F,label:"boxShadowSpread",title:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:z,label:"boxShadowPosition",title:Object(n.__)("Position","ultimate-addons-for-gutenberg")}})),"input"===y?s.a.createElement(w.a,{title:Object(n.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{label:Object(n.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:q,onChange:t=>{a({iconSize:t})},min:0,max:100,unit:{value:Pt,label:"iconSizeType"}}),s.a.createElement(p.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:G||"",onColorChange:t=>a({iconColor:t})}))):"",(()=>{const t=s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:N||"",onColorChange:t=>a({buttonBgColor:t})}),"text"===it&&s.a.createElement(p.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:xt||"",onColorChange:t=>a({buttonTextColor:t})}),"icon"===it&&s.a.createElement(p.a,{label:Object(n.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:t=>a({buttonIconColor:t})})),i=s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:P||"",onColorChange:t=>a({buttonBgHoverColor:t})}),"text"===it&&s.a.createElement(p.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:yt||"",onColorChange:t=>a({buttonTextHoverColor:t})}),"icon"===it&&s.a.createElement(p.a,{label:Object(n.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:W||"",onColorChange:t=>a({buttonIconHoverColor:t})}));return"input-button"===y?s.a.createElement(w.a,{title:Object(n.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(d.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:a,value:V,onChange:t=>{a({buttonWidth:t})},min:0,max:500,unit:{value:R,label:"buttonWidthType"}}),"icon"===it&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{label:Object(n.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:D,onChange:t=>{a({buttonIconSize:t})},min:0,max:100,unit:{value:U,label:"buttonIconSizeType"}})),s.a.createElement(h.a,{tabs:[{name:"normal",title:Object(n.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(n.__)("Hover","ultimate-addons-for-gutenberg")}],normal:t,hover:i,disableBottomSeparator:!0}),"text"===it&&s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:rt,label:"buttonloadGoogleFonts"},fontFamily:{value:ut,label:"buttonFontFamily"},fontWeight:{value:st,label:"buttonFontWeight"},fontStyle:{value:Rt,label:"buttonFontStyle"},fontSizeType:{value:bt,label:"buttonFontSizeType"},fontSize:{value:ct,label:"buttonFontSize"},fontSizeMobile:{value:ht,label:"buttonFontSizeMobile"},fontSizeTablet:{value:dt,label:"buttonFontSizeTablet"},lineHeightType:{value:ft,label:"buttonLineHeightType"},lineHeight:{value:gt,label:"buttonLineHeight"},lineHeightMobile:{value:wt,label:"buttonLineHeightMobile"},lineHeightTablet:{value:pt,label:"buttonLineHeightTablet"},transform:{value:mt,label:"buttonTransform"},decoration:{value:vt,label:"buttonDecoration"}}))):""})()),s.a.createElement(f.b,x({},f.a.advance,{parentProps:t})))),Dt,Ut)};e.default=s.a.memo(y)}}]);