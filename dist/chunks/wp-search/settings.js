(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[113],{198:function(t,e,n){"use strict";var a,o,i=n(34),l=n.n(i),r=n(199),u=n.n(r),s=n(2);if(void 0===c)var c=[];const b=t=>{const[e,n]=Object(s.useState)([]);Object(s.useEffect)(()=>{l()},[]),Object(s.useEffect)(()=>{const{onStatus:n,config:a}=t;void 0!==e.status&&n(e.status),a!==e.config&&l()},[t]);const a=()=>{n({status:"loading"})},o=()=>{n({status:"active"})},i=()=>{n({status:"inactive"})},l=()=>{var e;c.includes(t.config.google.families[0])||(u.a.load({...t.config,loading:a,active:o,inactive:i}),e=t.config.google.families[0],c.includes(e)||c.push(e))},{children:r}=t;return r||null};b.propTypes={config:null===(a=l.a.object)||void 0===a?void 0:a.isRequired,children:l.a.element,onStatus:null===(o=l.a.func)||void 0===o?void 0:o.isRequired},b.defaultProps={onStatus:()=>{}},e.a=b},199:function(t,e,n){var a;!function(){function o(t,e,n){return t.call.apply(t.bind,arguments)}function i(t,e,n){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function l(t,e,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:i).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var s=!!window.FontFace;function c(t,e,n,a){if(e=t.c.createElement(e),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?e.style.cssText=n[o]:e.setAttribute(o,n[o]));return a&&e.appendChild(t.c.createTextNode(a)),e}function b(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function d(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t,e,n){e=e||[],n=n||[];for(var a=t.className.split(/\s+/),o=0;o<e.length;o+=1){for(var i=!1,l=0;l<a.length;l+=1)if(e[o]===a[l]){i=!0;break}i||a.push(e[o])}for(e=[],o=0;o<a.length;o+=1){for(i=!1,l=0;l<n.length;l+=1)if(a[o]===n[l]){i=!0;break}i||e.push(a[o])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(t,e){for(var n=t.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==e)return!0;return!1}function f(t,e,n){function a(){r&&o&&i&&(r(l),r=null)}e=c(t,"link",{rel:"stylesheet",href:e,media:"all"});var o=!1,i=!0,l=null,r=n||null;s?(e.onload=function(){o=!0,a()},e.onerror=function(){o=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),b(t,"head",e)}function p(t,e,n,a){var o=t.c.getElementsByTagName("head")[0];if(o){var i=c(t,"script",{src:e}),l=!1;return i.onload=i.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),i.onload=i.onreadystatechange=null,"HEAD"==i.parentNode.tagName&&o.removeChild(i))},o.appendChild(i),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),i}return null}function m(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,x(t)}}function w(t,e){t.c=e,x(t)}function x(t){0==t.a&&t.c&&(t.c(),t.c=null)}function y(t){this.a=t||"-"}function _(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function S(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var a=t[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?e.push("'"+a+"'"):e.push(a)}return e.join(",")}function T(t){return t.a+t.f}function C(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function j(t){var e=4,n="n",a=null;return t&&((a=t.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=t.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?e=7:/[1-9]00/.test(a[1])&&(e=parseInt(a[1].substr(0,1),10)))),n+e}function O(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new y("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function E(t){if(t.g){var e=g(t.f,t.a.c("wf","active")),n=[],a=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),h(t.f,n,a)}I(t,"inactive")}function I(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,T(n)):t.h[e]())}function F(){this.c={}}function z(t,e){this.c=t,this.f=e,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function H(t){b(t.c,"body",t.a)}function B(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+S(t.c)+";font-style:"+C(t)+";font-weight:"+t.f+"00;"}function k(t,e,n,a,o,i){this.g=t,this.j=e,this.a=a,this.c=n,this.f=o||3e3,this.h=i||void 0}function L(t,e,n,a,o,i,l){this.v=t,this.B=e,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=o||3e3,this.u=i||null,this.m=this.j=this.h=this.g=null,this.g=new z(this.c,this.s),this.h=new z(this.c,this.s),this.j=new z(this.c,this.s),this.m=new z(this.c,this.s),t=B(t=new _(this.a.c+",serif",T(this.a))),this.g.a.style.cssText=t,t=B(t=new _(this.a.c+",sans-serif",T(this.a))),this.h.a.style.cssText=t,t=B(t=new _("serif",T(this.a))),this.j.a.style.cssText=t,t=B(t=new _("sans-serif",T(this.a))),this.m.a.style.cssText=t,H(this.g),H(this.h),H(this.j),H(this.m)}y.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},k.prototype.start=function(){var t=this.c.o.document,e=this,n=r(),a=new Promise((function(a,o){!function i(){r()-n>=e.f?o():t.fonts.load(function(t){return C(t)+" "+t.f+"00 300px "+S(t.c)}(e.a),e.h).then((function(t){1<=t.length?a():setTimeout(i,25)}),(function(){o()}))}()})),o=null,i=new Promise((function(t,n){o=setTimeout(n,e.f)}));Promise.race([i,a]).then((function(){o&&(clearTimeout(o),o=null),e.g(e.a)}),(function(){e.j(e.a)}))};var A={D:"serif",C:"sans-serif"},N=null;function P(){if(null===N){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return N}function M(t,e,n){for(var a in A)if(A.hasOwnProperty(a)&&e===t.f[A[a]]&&n===t.f[A[a]])return!0;return!1}function W(t,e){setTimeout(l((function(){d(this.g.a),d(this.h.a),d(this.j.a),d(this.m.a),e(this.a)}),t),0)}function V(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}L.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(e){var n,a=e.g.a.offsetWidth,o=e.h.a.offsetWidth;(n=a===e.f.serif&&o===e.f["sans-serif"])||(n=P()&&M(e,a,o)),n?r()-e.A>=e.w?P()&&M(e,a,o)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?W(e,e.v):W(e,e.B):function(e){setTimeout(l((function(){t(this)}),e),50)}(e):W(e,e.v)}(this)};var R=null;function D(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&h(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),I(t,"active")):E(t.a))}function U(t){this.j=t,this.a=new F,this.h=0,this.f=this.g=!0}function G(t,e,n,a,o){var i=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=o||null,r=a||{};if(0===n.length&&i)E(e.a);else{e.f+=n.length,i&&(e.j=i);var u,s=[];for(u=0;u<n.length;u++){var c=n[u],b=r[c.c],d=e.a,g=c;if(d.g&&h(d.f,[d.a.c("wf",g.c,T(g).toString(),"loading")]),I(d,"fontloading",g),d=null,null===R)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var f=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);R=g?42<parseInt(g[1],10):!f}else R=!1;d=R?new k(l(e.g,e),l(e.h,e),e.c,c,e.s,b):new L(l(e.g,e),l(e.h,e),e.c,c,e.s,t,b),s.push(d)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function q(t,e){this.c=t,this.a=e}function $(t,e){this.c=t,this.a=e}function J(t,e){this.c=t||K,this.a=[],this.f=[],this.g=e||""}V.prototype.g=function(t){var e=this.a;e.g&&h(e.f,[e.a.c("wf",t.c,T(t).toString(),"active")],[e.a.c("wf",t.c,T(t).toString(),"loading"),e.a.c("wf",t.c,T(t).toString(),"inactive")]),I(e,"fontactive",t),this.m=!0,D(this)},V.prototype.h=function(t){var e=this.a;if(e.g){var n=g(e.f,e.a.c("wf",t.c,T(t).toString(),"active")),a=[],o=[e.a.c("wf",t.c,T(t).toString(),"loading")];n||a.push(e.a.c("wf",t.c,T(t).toString(),"inactive")),h(e.f,a,o)}I(e,"fontinactive",t),D(this)},U.prototype.load=function(t){this.c=new u(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var a=[],o=n.timeout;!function(t){t.g&&h(t.f,[t.a.c("wf","loading")]),I(t,"loading")}(e),a=function(t,e,n){var a,o=[];for(a in e)if(e.hasOwnProperty(a)){var i=t.c[a];i&&o.push(i(e[a],n))}return o}(t.a,n,t.c);var i=new V(t.c,e,o);for(t.h=a.length,e=0,n=a.length;e<n;e++)a[e].load((function(e,n,a){G(t,i,e,n,a)}))}(this,new O(this.c,t),t)},q.prototype.load=function(t){var e=this,n=e.a.projectId,a=e.a.version;if(n){var o=e.c.o;p(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?t([]):(o["__MonotypeConfiguration__"+n]=function(){return e.a},function e(){if(o["__mti_fntLst"+n]){var a,i=o["__mti_fntLst"+n](),l=[];if(i)for(var r=0;r<i.length;r++){var u=i[r].fontfamily;null!=i[r].fontStyle&&null!=i[r].fontWeight?(a=i[r].fontStyle+i[r].fontWeight,l.push(new _(u,a))):l.push(new _(u))}t(l)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+n}else t([])},$.prototype.load=function(t){var e,n,a=this.a.urls||[],o=this.a.families||[],i=this.a.testStrings||{},l=new m;for(e=0,n=a.length;e<n;e++)f(this.c,a[e],v(l));var r=[];for(e=0,n=o.length;e<n;e++)if((a=o[e].split(":"))[1])for(var u=a[1].split(","),s=0;s<u.length;s+=1)r.push(new _(a[0],u[s]));else r.push(new _(a[0]));w(l,(function(){t(r,i)}))};var K="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var nt={Arimo:!0,Cousine:!0,Tinos:!0};function at(t,e){this.c=t,this.a=e}function ot(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new m,n=this.c,a=new J(this.a.api,this.a.text),o=this.a.families;!function(t,e){for(var n=e.length,a=0;a<n;a++){var o=e[a].split(":");3==o.length&&t.f.push(o.pop());var i="";2==o.length&&""!=o[1]&&(i=":"),t.a.push(o.join(i))}}(a,o);var i=new X(o);!function(t){for(var e=t.f.length,n=0;n<e;n++){var a=t.f[n].split(":"),o=a[0].replace(/\+/g," "),i=["n4"];if(2<=a.length){var l;if(l=[],r=a[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var c;if((c=r[s]).match(/^[\w-]+$/))if(null==(b=tt.exec(c.toLowerCase())))c="";else{if(c=null==(c=b[2])||""==c?"n":Z[c],null==(b=b[1])||""==b)b="4";else var b=Y[b]||(isNaN(b)?"4":b.substr(0,1));c=[c,b].join("")}else c="";c&&l.push(c)}0<l.length&&(i=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=Q[a[0]])&&(t.c[o]=a))}for(t.c[o]||(a=Q[o])&&(t.c[o]=a),a=0;a<i.length;a+=1)t.a.push(new _(o,i[a]))}}(i),f(n,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],a=0;a<e;a++)n.push(t.a[a].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(a),v(e)),w(e,(function(){t(i.a,i.c,nt)}))},at.prototype.load=function(t){var e=this.a.id,n=this.c.o;e?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var a=[],o=0;o<e.length;o+=2)for(var i=e[o],l=e[o+1],r=0;r<l.length;r++)a.push(new _(i,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(a)}}),2e3):t([])},ot.prototype.load=function(t){var e=this.f.id,n=this.c.o,a=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var o=0,i=n.fonts.length;o<i;++o){var l=n.fonts[o];a.a.push(new _(l.name,j("font-weight:"+l.weight+";font-style:"+l.style)))}t(a.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var it=new U(window);it.a.c.custom=function(t,e){return new $(e,t)},it.a.c.fontdeck=function(t,e){return new ot(e,t)},it.a.c.monotype=function(t,e){return new q(e,t)},it.a.c.typekit=function(t,e){return new at(e,t)},it.a.c.google=function(t,e){return new et(e,t)};var lt={load:l(it.load,it)};void 0===(a=function(){return lt}.call(e,n,e,t))||(t.exports=a)}()},204:function(t,e,n){"use strict";var a=n(15),o=n.n(a)()((function(t){return t[1]}));o.push([t.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 14px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),e.a=o},206:function(t,e,n){"use strict";var a,o=n(1),i=n(12),l=n(17),r=n(6),u=n(2),s=n(19),c=n(14),b=n.n(c),d=n(204),h=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=d.a.locals||{},f.use=function(){return h++||(a=b()(d.a,g)),f},f.unuse=function(){h>0&&!--h&&(a(),a=null)};var p=f,m=n(0),v=n.n(m);e.a=t=>{Object(m.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const[e,n]=Object(u.useState)(!1),{setAttributes:a,boxShadowColor:c,boxShadowHOffset:b,boxShadowVOffset:d,boxShadowBlur:h,boxShadowSpread:g,boxShadowPosition:f}=t;let w;const x=e?"active":"";e&&(w=v.a.createElement("div",{className:"uagb-box-shadow-advanced"},v.a.createElement("div",{className:"uagb-shadow-color"},v.a.createElement(l.a,{label:c.title,colorValue:c.value,onColorChange:t=>a({[c.label]:t})})),v.a.createElement("div",{className:"uagb-horizontal-wrap"},v.a.createElement(i.a,{label:b.title,value:b.value,min:0,max:100,displayUnit:!1,setAttributes:a,data:{value:b.value,label:b.label},onChange:!1})),v.a.createElement("div",{className:"uagb-vertical-wrap"},v.a.createElement(i.a,{label:d.title,value:d.value,min:0,max:100,displayUnit:!1,setAttributes:a,data:{value:d.value,label:d.label},onChange:!1})),v.a.createElement("div",{className:"uagb-blur-wrap"},v.a.createElement(i.a,{label:h.title,value:h.value,min:0,max:100,displayUnit:!1,setAttributes:a,data:{value:h.value,label:h.label},onChange:!1})),v.a.createElement("div",{className:"uagb-spread-wrap"},v.a.createElement(i.a,{label:g.title,value:g.value,min:-100,max:100,displayUnit:!1,setAttributes:a,data:{value:g.value,label:g.label},onChange:!1})),v.a.createElement("div",{className:"uagb-shadow-type"},v.a.createElement(s.a,{setAttributes:a,label:f.title,data:{value:f.value,label:f.label},options:[{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const y=v.a.createElement("div",{className:"uag-box-shadow-option-actions"},v.a.createElement("span",{className:"uag-control-label"},Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg")),v.a.createElement(r.Button,{className:"uag-box-shadow-button","aria-pressed":e,onClick:()=>n(!e)},v.a.createElement(r.Dashicon,{icon:"edit"})));return v.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+x},y,e&&w)}},502:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n(30),i=n(206),l=n(19),r=n(198),u=n(0),s=n.n(u),c=n(77),b=n(50),d=n(12),h=n(51),g=n(79),f=n(23),p=n(17),m=n(6),v=n(4),w=n(16);function x(){return(x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}const y=t=>{t=t.parentProps;const{attributes:e,setAttributes:n,deviceType:u}=t,{layout:y,placeholder:_,inputSize:S,textColor:T,inputBgColor:C,boxShadowColor:j,boxShadowHOffset:O,boxShadowVOffset:E,boxShadowBlur:I,boxShadowSpread:F,boxShadowPosition:z,borderStyle:H,borderWidth:B,borderRadius:k,borderHColor:L,borderColor:A,buttonBgColor:N,buttonBgHoverColor:P,buttonIconColor:M,buttonIconHoverColor:W,buttonWidth:V,buttonWidthType:R,buttonIconSize:D,buttonIconSizeType:U,iconColor:G,iconSize:q,inputloadGoogleFonts:$,inputFontFamily:J,inputFontWeight:K,inputFontSize:X,inputFontSizeType:Q,inputFontSizeTablet:Y,inputFontSizeMobile:Z,inputLineHeight:tt,inputLineHeightType:et,inputLineHeightTablet:nt,inputLineHeightMobile:at,inputPaddingTypeDesktop:ot,buttonType:it,buttonText:lt,buttonloadGoogleFonts:rt,buttonFontFamily:ut,buttonFontWeight:st,buttonFontSize:ct,buttonFontSizeType:bt,buttonFontSizeTablet:dt,buttonFontSizeMobile:ht,buttonLineHeight:gt,buttonLineHeightType:ft,buttonLineHeightTablet:pt,buttonTransform:mt,buttonDecoration:vt,buttonLineHeightMobile:wt,buttonTextColor:xt,buttonTextHoverColor:yt,inputSizeType:_t,paddingInputTop:St,paddingInputRight:Tt,paddingInputBottom:Ct,paddingInputLeft:jt,paddingInputTopTablet:Ot,paddingInputRightTablet:Et,paddingInputBottomTablet:It,paddingInputLeftTablet:Ft,paddingInputTopMobile:zt,paddingInputRightMobile:Ht,paddingInputBottomMobile:Bt,paddingInputLeftMobile:kt,mobilePaddingInputUnit:Lt,tabletPaddingInputUnit:At,spacingLink:Nt,iconSizeType:Pt,inputTransform:Mt,inputDecoration:Wt,inputFontStyle:Vt,buttonFontStyle:Rt}=e;let Dt,Ut;if(!0===$){const t={google:{families:[J+(K?":"+K:"")]}};Dt=s.a.createElement(r.a,{config:t})}if(!0===rt){const t={google:{families:[ut+(st?":"+st:"")]}};Ut=s.a.createElement(r.a,{config:t})}return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.InspectorControls,null,s.a.createElement(g.a,null,s.a.createElement(f.b,f.a.general,s.a.createElement(w.a,{initialOpen:!0},s.a.createElement(l.a,{setAttributes:n,label:Object(a.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:y,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"input-button",label:"Classic"},{value:"input",label:"Minimal"}],showIcons:!1}),s.a.createElement(m.TextControl,{label:Object(a.__)("Placeholder","ultimate-addons-for-gutenberg"),value:_,onChange:t=>n({placeholder:t})}),s.a.createElement(d.a,{label:Object(a.__)("Input Width","ultimate-addons-for-gutenberg"),setAttributes:n,value:S,onChange:t=>n({inputSize:t}),min:0,max:200,units:[{name:Object(a.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(a.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(a.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],unit:{value:_t,label:"inputSizeType"}}),"input-button"===y&&s.a.createElement(l.a,{setAttributes:n,label:Object(a.__)("Button Type","ultimate-addons-for-gutenberg"),data:{value:it,label:"buttonType"},className:"uagb-multi-button-alignment-control",options:[{value:"icon",label:"Icon"},{value:"text",label:"Text"}],showIcons:!1}),"input-button"===y&&"text"===it&&s.a.createElement(s.a.Fragment,null,s.a.createElement(m.TextControl,{label:"Text",value:lt,onChange:t=>{n({buttonText:t})}})))),s.a.createElement(f.b,f.a.style,s.a.createElement(w.a,{title:Object(a.__)("Input Box","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(p.a,{label:Object(a.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:T||"",onColorChange:t=>n({textColor:t})}),s.a.createElement(p.a,{label:Object(a.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:t=>n({inputBgColor:t})}),s.a.createElement(c.a,{setAttributes:n,borderStyle:{value:H,label:"borderStyle",title:Object(a.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:B,label:"borderWidth",title:Object(a.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:k,label:"borderRadius",title:Object(a.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:A,label:"borderColor",title:Object(a.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:L,label:"borderHColor",title:Object(a.__)("Hover Color","ultimate-addons-for-gutenberg")}}),s.a.createElement(b.a,x({},t,{label:Object(a.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:St,label:"paddingInputTop"},valueRight:{value:Tt,label:"paddingInputRight"},valueBottom:{value:Ct,label:"paddingInputBottom"},valueLeft:{value:jt,label:"paddingInputLeft"},valueTopTablet:{value:Ot,label:"paddingInputTopTablet"},valueRightTablet:{value:Et,label:"paddingInputRightTablet"},valueBottomTablet:{value:It,label:"paddingInputBottomTablet"},valueLeftTablet:{value:Ft,label:"paddingInputLeftTablet"},valueTopMobile:{value:zt,label:"paddingInputTopMobile"},valueRightMobile:{value:Ht,label:"paddingInputRightMobile"},valueBottomMobile:{value:Bt,label:"paddingInputBottomMobile"},valueLeftMobile:{value:kt,label:"paddingInputLeftMobile"},unit:{value:ot,label:"inputPaddingTypeDesktop"},mUnit:{value:Lt,label:"mobilePaddingInputUnit"},tUnit:{value:At,label:"tabletPaddingInputUnit"},deviceType:u,attributes:e,setAttributes:n,link:{value:Nt,label:"spacingLink"},units:[{name:Object(a.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(a.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(a.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),s.a.createElement(o.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:n,loadGoogleFonts:{value:$,label:"inputloadGoogleFonts"},fontFamily:{value:J,label:"inputFontFamily"},fontWeight:{value:K,label:"inputFontWeight"},fontStyle:{value:Vt,label:"inputFontStyle"},fontSizeType:{value:Q,label:"inputFontSizeType"},fontSize:{value:X,label:"inputFontSize"},fontSizeMobile:{value:Z,label:"inputFontSizeMobile"},fontSizeTablet:{value:Y,label:"inputFontSizeTablet"},lineHeightType:{value:et,label:"inputLineHeightType"},lineHeight:{value:tt,label:"inputLineHeight"},lineHeightMobile:{value:at,label:"inputLineHeightMobile"},lineHeightTablet:{value:nt,label:"inputLineHeightTablet"},transform:{value:Mt,label:"inputTransform"},decoration:{value:Wt,label:"inputDecoration"}}),s.a.createElement(i.a,{setAttributes:n,label:Object(a.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:j,label:"boxShadowColor",title:Object(a.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:O,label:"boxShadowHOffset",title:Object(a.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:E,label:"boxShadowVOffset",title:Object(a.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:I,label:"boxShadowBlur",title:Object(a.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:F,label:"boxShadowSpread",title:Object(a.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:z,label:"boxShadowPosition",title:Object(a.__)("Position","ultimate-addons-for-gutenberg")}})),"input"===y?s.a.createElement(w.a,{title:Object(a.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{label:Object(a.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:n,value:q,onChange:t=>{n({iconSize:t})},min:0,max:100,unit:{value:Pt,label:"iconSizeType"}}),s.a.createElement(p.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:G||"",onColorChange:t=>n({iconColor:t})}))):"",(()=>{const t=s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{label:Object(a.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:N||"",onColorChange:t=>n({buttonBgColor:t})}),"text"===it&&s.a.createElement(p.a,{label:Object(a.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:xt||"",onColorChange:t=>n({buttonTextColor:t})}),"icon"===it&&s.a.createElement(p.a,{label:Object(a.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:t=>n({buttonIconColor:t})})),i=s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{label:Object(a.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:P||"",onColorChange:t=>n({buttonBgHoverColor:t})}),"text"===it&&s.a.createElement(p.a,{label:Object(a.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:yt||"",onColorChange:t=>n({buttonTextHoverColor:t})}),"icon"===it&&s.a.createElement(p.a,{label:Object(a.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:W||"",onColorChange:t=>n({buttonIconHoverColor:t})}));return"input-button"===y?s.a.createElement(w.a,{title:Object(a.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(d.a,{label:Object(a.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:n,value:V,onChange:t=>{n({buttonWidth:t})},min:0,max:500,unit:{value:R,label:"buttonWidthType"}}),"icon"===it&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{label:Object(a.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:n,value:D,onChange:t=>{n({buttonIconSize:t})},min:0,max:100,unit:{value:U,label:"buttonIconSizeType"}})),s.a.createElement(h.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:t,hover:i,disableBottomSeparator:!0}),"text"===it&&s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:n,loadGoogleFonts:{value:rt,label:"buttonloadGoogleFonts"},fontFamily:{value:ut,label:"buttonFontFamily"},fontWeight:{value:st,label:"buttonFontWeight"},fontStyle:{value:Rt,label:"buttonFontStyle"},fontSizeType:{value:bt,label:"buttonFontSizeType"},fontSize:{value:ct,label:"buttonFontSize"},fontSizeMobile:{value:ht,label:"buttonFontSizeMobile"},fontSizeTablet:{value:dt,label:"buttonFontSizeTablet"},lineHeightType:{value:ft,label:"buttonLineHeightType"},lineHeight:{value:gt,label:"buttonLineHeight"},lineHeightMobile:{value:wt,label:"buttonLineHeightMobile"},lineHeightTablet:{value:pt,label:"buttonLineHeightTablet"},transform:{value:mt,label:"buttonTransform"},decoration:{value:vt,label:"buttonDecoration"}}))):""})()),s.a.createElement(f.b,x({},f.a.advance,{parentProps:t})))),Dt,Ut)};e.default=s.a.memo(y)}}]);