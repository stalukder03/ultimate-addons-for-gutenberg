(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[107],{156:function(t,e,a){"use strict";var o=a(23),n=a.n(o),l=a(157),i=a.n(l),r=a(2);if(void 0===s)var s=[];const u=t=>{const[e,a]=Object(r.useState)([]);Object(r.useEffect)(()=>{u()},[]),Object(r.useEffect)(()=>{const{onStatus:a,config:o}=t;void 0!==e.status&&a(e.status),o!==e.config&&u()},[t]);const o=()=>{a({status:"loading"})},n=()=>{a({status:"active"})},l=()=>{a({status:"inactive"})},u=()=>{var e;s.includes(t.config.google.families[0])||(i.a.load({...t.config,loading:o,active:n,inactive:l}),e=t.config.google.families[0],s.includes(e)||s.push(e))},{children:c}=t;return c||null};u.propTypes={config:n.a.object.isRequired,children:n.a.element,onStatus:n.a.func.isRequired},u.defaultProps={onStatus:()=>{}},e.a=u},157:function(t,e,a){var o;!function(){function n(t,e,a){return t.call.apply(t.bind,arguments)}function l(t,e,a){if(!t)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,o),t.apply(e,a)}}return function(){return t.apply(e,arguments)}}function i(t,e,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var u=!!window.FontFace;function c(t,e,a,o){if(e=t.c.createElement(e),a)for(var n in a)a.hasOwnProperty(n)&&("style"==n?e.style.cssText=a[n]:e.setAttribute(n,a[n]));return o&&e.appendChild(t.c.createTextNode(o)),e}function d(t,e,a){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(a,t.lastChild)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t,e,a){e=e||[],a=a||[];for(var o=t.className.split(/\s+/),n=0;n<e.length;n+=1){for(var l=!1,i=0;i<o.length;i+=1)if(e[n]===o[i]){l=!0;break}l||o.push(e[n])}for(e=[],n=0;n<o.length;n+=1){for(l=!1,i=0;i<a.length;i+=1)if(o[n]===a[i]){l=!0;break}l||e.push(o[n])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(t,e){for(var a=t.className.split(/\s+/),o=0,n=a.length;o<n;o++)if(a[o]==e)return!0;return!1}function f(t,e,a){function o(){r&&n&&l&&(r(i),r=null)}e=c(t,"link",{rel:"stylesheet",href:e,media:"all"});var n=!1,l=!0,i=null,r=a||null;u?(e.onload=function(){n=!0,o()},e.onerror=function(){n=!0,i=Error("Stylesheet failed to load"),o()}):setTimeout((function(){n=!0,o()}),0),d(t,"head",e)}function m(t,e,a,o){var n=t.c.getElementsByTagName("head")[0];if(n){var l=c(t,"script",{src:e}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&n.removeChild(l))},n.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),o||5e3),l}return null}function p(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,w(t)}}function _(t,e){t.c=e,w(t)}function w(t){0==t.a&&t.c&&(t.c(),t.c=null)}function y(t){this.a=t||"-"}function x(t,e){this.c=t,this.f=4,this.a="n";var a=(e||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function S(t){var e=[];t=t.split(/,\s*/);for(var a=0;a<t.length;a++){var o=t[a].replace(/['"]/g,"");-1!=o.indexOf(" ")||/^\d/.test(o)?e.push("'"+o+"'"):e.push(o)}return e.join(",")}function j(t){return t.a+t.f}function O(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function T(t){var e=4,a="n",o=null;return t&&((o=t.match(/(normal|oblique|italic)/i))&&o[1]&&(a=o[1].substr(0,1).toLowerCase()),(o=t.match(/([1-9]00|normal|bold)/i))&&o[1]&&(/bold/i.test(o[1])?e=7:/[1-9]00/.test(o[1])&&(e=parseInt(o[1].substr(0,1),10)))),a+e}function C(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new y("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function E(t){if(t.g){var e=h(t.f,t.a.c("wf","active")),a=[],o=[t.a.c("wf","loading")];e||a.push(t.a.c("wf","inactive")),g(t.f,a,o)}F(t,"inactive")}function F(t,e,a){t.j&&t.h[e]&&(a?t.h[e](a.c,j(a)):t.h[e]())}function H(){this.c={}}function L(t,e){this.c=t,this.f=e,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function P(t){d(t.c,"body",t.a)}function k(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+S(t.c)+";font-style:"+O(t)+";font-weight:"+t.f+"00;"}function z(t,e,a,o,n,l){this.g=t,this.j=e,this.a=o,this.c=a,this.f=n||3e3,this.h=l||void 0}function B(t,e,a,o,n,l,i){this.v=t,this.B=e,this.c=a,this.a=o,this.s=i||"BESbswy",this.f={},this.w=n||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new L(this.c,this.s),this.h=new L(this.c,this.s),this.j=new L(this.c,this.s),this.m=new L(this.c,this.s),t=k(t=new x(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=t,t=k(t=new x(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=t,t=k(t=new x("serif",j(this.a))),this.j.a.style.cssText=t,t=k(t=new x("sans-serif",j(this.a))),this.m.a.style.cssText=t,P(this.g),P(this.h),P(this.j),P(this.m)}y.prototype.c=function(t){for(var e=[],a=0;a<arguments.length;a++)e.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},z.prototype.start=function(){var t=this.c.o.document,e=this,a=r(),o=new Promise((function(o,n){!function l(){r()-a>=e.f?n():t.fonts.load(function(t){return O(t)+" "+t.f+"00 300px "+S(t.c)}(e.a),e.h).then((function(t){1<=t.length?o():setTimeout(l,25)}),(function(){n()}))}()})),n=null,l=new Promise((function(t,a){n=setTimeout(a,e.f)}));Promise.race([l,o]).then((function(){n&&(clearTimeout(n),n=null),e.g(e.a)}),(function(){e.j(e.a)}))};var A={D:"serif",C:"sans-serif"},M=null;function N(){if(null===M){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);M=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return M}function I(t,e,a){for(var o in A)if(A.hasOwnProperty(o)&&e===t.f[A[o]]&&a===t.f[A[o]])return!0;return!1}function W(t,e){setTimeout(i((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),e(this.a)}),t),0)}function D(t,e,a){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=a}B.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(e){var a,o=e.g.a.offsetWidth,n=e.h.a.offsetWidth;(a=o===e.f.serif&&n===e.f["sans-serif"])||(a=N()&&I(e,o,n)),a?r()-e.A>=e.w?N()&&I(e,o,n)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?W(e,e.v):W(e,e.B):function(e){setTimeout(i((function(){t(this)}),e),50)}(e):W(e,e.v)}(this)};var R=null;function G(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&g(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),F(t,"active")):E(t.a))}function U(t){this.j=t,this.a=new H,this.h=0,this.f=this.g=!0}function V(t,e,a,o,n){var l=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=n||null,r=o||{};if(0===a.length&&l)E(e.a);else{e.f+=a.length,l&&(e.j=l);var s,u=[];for(s=0;s<a.length;s++){var c=a[s],d=r[c.c],b=e.a,h=c;if(b.g&&g(b.f,[b.a.c("wf",h.c,j(h).toString(),"loading")]),F(b,"fontloading",h),b=null,null===R)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var f=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);R=h?42<parseInt(h[1],10):!f}else R=!1;b=R?new z(i(e.g,e),i(e.h,e),e.c,c,e.s,d):new B(i(e.g,e),i(e.h,e),e.c,c,e.s,t,d),u.push(b)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function q(t,e){this.c=t,this.a=e}function $(t,e){this.c=t,this.a=e}function J(t,e){this.c=t||K,this.a=[],this.f=[],this.g=e||""}D.prototype.g=function(t){var e=this.a;e.g&&g(e.f,[e.a.c("wf",t.c,j(t).toString(),"active")],[e.a.c("wf",t.c,j(t).toString(),"loading"),e.a.c("wf",t.c,j(t).toString(),"inactive")]),F(e,"fontactive",t),this.m=!0,G(this)},D.prototype.h=function(t){var e=this.a;if(e.g){var a=h(e.f,e.a.c("wf",t.c,j(t).toString(),"active")),o=[],n=[e.a.c("wf",t.c,j(t).toString(),"loading")];a||o.push(e.a.c("wf",t.c,j(t).toString(),"inactive")),g(e.f,o,n)}F(e,"fontinactive",t),G(this)},U.prototype.load=function(t){this.c=new s(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,a){var o=[],n=a.timeout;!function(t){t.g&&g(t.f,[t.a.c("wf","loading")]),F(t,"loading")}(e),o=function(t,e,a){var o,n=[];for(o in e)if(e.hasOwnProperty(o)){var l=t.c[o];l&&n.push(l(e[o],a))}return n}(t.a,a,t.c);var l=new D(t.c,e,n);for(t.h=o.length,e=0,a=o.length;e<a;e++)o[e].load((function(e,a,o){V(t,l,e,a,o)}))}(this,new C(this.c,t),t)},q.prototype.load=function(t){var e=this,a=e.a.projectId,o=e.a.version;if(a){var n=e.c.o;m(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(o?"?v="+o:""),(function(o){o?t([]):(n["__MonotypeConfiguration__"+a]=function(){return e.a},function e(){if(n["__mti_fntLst"+a]){var o,l=n["__mti_fntLst"+a](),i=[];if(l)for(var r=0;r<l.length;r++){var s=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(o=l[r].fontStyle+l[r].fontWeight,i.push(new x(s,o))):i.push(new x(s))}t(i)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+a}else t([])},$.prototype.load=function(t){var e,a,o=this.a.urls||[],n=this.a.families||[],l=this.a.testStrings||{},i=new p;for(e=0,a=o.length;e<a;e++)f(this.c,o[e],v(i));var r=[];for(e=0,a=n.length;e<a;e++)if((o=n[e].split(":"))[1])for(var s=o[1].split(","),u=0;u<s.length;u+=1)r.push(new x(o[0],s[u]));else r.push(new x(o[0]));_(i,(function(){t(r,l)}))};var K="https://fonts.googleapis.com/css";function Q(t){this.f=t,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var at={Arimo:!0,Cousine:!0,Tinos:!0};function ot(t,e){this.c=t,this.a=e}function nt(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new p,a=this.c,o=new J(this.a.api,this.a.text),n=this.a.families;!function(t,e){for(var a=e.length,o=0;o<a;o++){var n=e[o].split(":");3==n.length&&t.f.push(n.pop());var l="";2==n.length&&""!=n[1]&&(l=":"),t.a.push(n.join(l))}}(o,n);var l=new Q(n);!function(t){for(var e=t.f.length,a=0;a<e;a++){var o=t.f[a].split(":"),n=o[0].replace(/\+/g," "),l=["n4"];if(2<=o.length){var i;if(i=[],r=o[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var c;if((c=r[u]).match(/^[\w-]+$/))if(null==(d=tt.exec(c.toLowerCase())))c="";else{if(c=null==(c=d[2])||""==c?"n":Z[c],null==(d=d[1])||""==d)d="4";else var d=Y[d]||(isNaN(d)?"4":d.substr(0,1));c=[c,d].join("")}else c="";c&&i.push(c)}0<i.length&&(l=i),3==o.length&&(i=[],0<(o=(o=o[2])?o.split(","):i).length&&(o=X[o[0]])&&(t.c[n]=o))}for(t.c[n]||(o=X[n])&&(t.c[n]=o),o=0;o<l.length;o+=1)t.a.push(new x(n,l[o]))}}(l),f(a,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,a=[],o=0;o<e;o++)a.push(t.a[o].replace(/ /g,"+"));return e=t.c+"?family="+a.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(o),v(e)),_(e,(function(){t(l.a,l.c,at)}))},ot.prototype.load=function(t){var e=this.a.id,a=this.c.o;e?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){e=a.Typekit.config.fn;for(var o=[],n=0;n<e.length;n+=2)for(var l=e[n],i=e[n+1],r=0;r<i.length;r++)o.push(new x(l,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(o)}}),2e3):t([])},nt.prototype.load=function(t){var e=this.f.id,a=this.c.o,o=this;e?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[e]=function(e,a){for(var n=0,l=a.fonts.length;n<l;++n){var i=a.fonts[n];o.a.push(new x(i.name,T("font-weight:"+i.weight+";font-style:"+i.style)))}t(o.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var lt=new U(window);lt.a.c.custom=function(t,e){return new $(e,t)},lt.a.c.fontdeck=function(t,e){return new nt(e,t)},lt.a.c.monotype=function(t,e){return new q(e,t)},lt.a.c.typekit=function(t,e){return new ot(e,t)},lt.a.c.google=function(t,e){return new et(e,t)};var it={load:i(lt.load,lt)};void 0===(o=function(){return it}.call(e,a,e,t))||(t.exports=o)}()},163:function(t,e,a){"use strict";var o=a(15),n=a.n(o)()((function(t){return t[1]}));n.push([t.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 3px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),e.a=n},165:function(t,e,a){"use strict";var o,n=a(1),l=a(12),i=a(17),r=a(6),s=a(2),u=a(21),c=a(14),d=a.n(c),b=a(163),g=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=b.a.locals||{},f.use=function(){return g++||(o=d()(b.a,h)),f},f.unuse=function(){g>0&&!--g&&(o(),o=null)};var m=f,p=a(0),v=a.n(p);e.a=t=>{Object(p.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]);const[e,a]=Object(s.useState)(!1),{setAttributes:o,boxShadowColor:c,boxShadowHOffset:d,boxShadowVOffset:b,boxShadowBlur:g,boxShadowSpread:h,boxShadowPosition:f}=t;let _;const w=e?"active":"";e&&(_=v.a.createElement("div",{className:"uagb-box-shadow-advanced"},v.a.createElement("div",{className:"uagb-shadow-color"},v.a.createElement(i.a,{label:c.title,colorValue:c.value,onColorChange:t=>o({[c.label]:t})})),v.a.createElement("div",{className:"uagb-horizontal-wrap"},v.a.createElement(l.a,{label:d.title,value:d.value,onChange:t=>o({[d.label]:t}),min:0,max:100,displayUnit:!1})),v.a.createElement("div",{className:"uagb-vertical-wrap"},v.a.createElement(l.a,{label:b.title,value:b.value,onChange:t=>o({[b.label]:t}),min:0,max:100,displayUnit:!1})),v.a.createElement("div",{className:"uagb-blur-wrap"},v.a.createElement(l.a,{label:g.title,value:g.value,onChange:t=>o({[g.label]:t}),min:0,max:100,displayUnit:!1})),v.a.createElement("div",{className:"uagb-spread-wrap"},v.a.createElement(l.a,{label:h.title,value:h.value,onChange:t=>o({[h.label]:t}),min:-100,max:100,displayUnit:!1})),v.a.createElement("div",{className:"uagb-shadow-type"},v.a.createElement(u.a,{setAttributes:o,label:f.title,data:{value:f.value,label:f.label},options:[{value:"outset",label:Object(n.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(n.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const y=v.a.createElement("div",{className:"uag-box-shadow-option-actions"},v.a.createElement("span",{className:"uag-control-label"},Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg")),v.a.createElement(r.Button,{className:"uag-box-shadow-button","aria-pressed":e,onClick:()=>a(!e)},v.a.createElement(r.Dashicon,{icon:"edit"})));return v.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+w},y,e&&_)}},434:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),l=a(1),i=a(8),r=a(156),s=a(11),u=a(28),c=a(165),d=a(52),b=a(17),g=a(54),h=a(22),f=a(40),m=a(12),p=a(55),v=a(21),_=a(41),w=a(6),y=a(4),x=a(16),S=a(33),j=a.n(S);function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t}).apply(this,arguments)}const T=t=>{t=t.parentProps;const{attributes:e,setAttributes:a,taxonomyList:S,termsList:T,deviceType:C}=t,{postType:E,taxonomyType:F,layout:H,columns:L,tcolumns:P,mcolumns:k,bgColor:z,titleColor:B,countColor:A,rowGap:M,columnGap:N,contentTopPadding:I,contentRightPadding:W,contentBottomPadding:D,contentLeftPadding:R,contentTopPaddingTablet:G,contentRightPaddingTablet:U,contentBottomPaddingTablet:V,contentLeftPaddingTablet:q,contentTopPaddingMobile:$,contentRightPaddingMobile:J,contentBottomPaddingMobile:K,contentLeftPaddingMobile:Q,contentPaddingUnit:X,mobileContentPaddingUnit:Y,tabletContentPaddingUnit:Z,contentPaddingLink:tt,titleBottomSpace:et,alignment:at,listStyle:ot,seperatorStyle:nt,seperatorWidth:lt,seperatorThickness:it,seperatorColor:rt,seperatorHoverColor:st,listTextColor:ut,hoverlistTextColor:ct,listBottomMargin:dt,listStyleColor:bt,hoverlistStyleColor:gt,noTaxDisplaytext:ht,boxShadowColor:ft,boxShadowHOffset:mt,boxShadowVOffset:pt,boxShadowBlur:vt,boxShadowSpread:_t,boxShadowPosition:wt,showCount:yt,titleFontSize:xt,titleFontSizeType:St,titleFontSizeMobile:jt,titleFontSizeTablet:Ot,titleFontFamily:Tt,titleFontWeight:Ct,titleFontStyle:Et,titleLineHeightType:Ft,titleLineHeight:Ht,titleLineHeightTablet:Lt,titleLineHeightMobile:Pt,titleLoadGoogleFonts:kt,countFontSize:zt,countFontSizeType:Bt,countFontSizeMobile:At,countFontSizeTablet:Mt,countFontFamily:Nt,countFontWeight:It,countFontStyle:Wt,countLineHeightType:Dt,countLineHeight:Rt,countLineHeightTablet:Gt,countLineHeightMobile:Ut,countLoadGoogleFonts:Vt,listFontSize:qt,listFontSizeType:$t,listFontSizeMobile:Jt,listFontSizeTablet:Kt,listFontFamily:Qt,listFontWeight:Xt,listFontStyle:Yt,listLineHeightType:Zt,listLineHeight:te,listLineHeightTablet:ee,listLineHeightMobile:ae,listLoadGoogleFonts:oe,showEmptyTaxonomy:ne,borderStyle:le,borderThickness:ie,borderColor:re,borderRadius:se,borderHoverColor:ue,listDisplayStyle:ce,showhierarchy:de,titleTag:be,titleTransform:ge,countTransform:he,listTransform:fe,titleDecoration:me,countDecoration:pe,listDecoration:ve}=e,_e=ne?S:T,we=[{value:"",label:Object(l.__)("Select Taxonomy","ultimate-addons-for-gutenberg")}];let ye,xe,Se;if(""!==_e&&void 0!==_e&&Object.keys(_e).map(t=>we.push({value:S[t].name,label:S[t].label})),!0===kt){const t={google:{families:[Tt+(Ct?":"+Ct:"")]}};ye=n.a.createElement(r.a,{config:t})}if(!0===Vt){const t={google:{families:[Nt+(It?":"+It:"")]}};xe=n.a.createElement(r.a,{config:t})}if(!0===oe){const t={google:{families:[Qt+(Xt?":"+Xt:"")]}};Se=n.a.createElement(r.a,{config:t})}const je=n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{label:Object(l.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:ut||"",onColorChange:t=>a({listTextColor:t})}),n.a.createElement("br",null),"none"!==ot&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{label:Object(l.__)("Bullet/Numbers Color","ultimate-addons-for-gutenberg"),colorValue:bt||"",onColorChange:t=>a({listStyleColor:t})}))),Oe=n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{label:Object(l.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:ct||"",onColorChange:t=>a({hoverlistTextColor:t})}),n.a.createElement("br",null),"none"!==ot&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{label:Object(l.__)("Bullet/Numbers Color","ultimate-addons-for-gutenberg"),colorValue:gt||"",onColorChange:t=>a({hoverlistStyleColor:t})}))),Te=n.a.createElement(y.InspectorControls,null,n.a.createElement(g.a,null,n.a.createElement(h.b,h.a.general,n.a.createElement(x.a,{title:Object(l.__)("Query","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(w.SelectControl,{label:Object(l.__)("Post Type","ultimate-addons-for-gutenberg"),value:E,onChange:t=>(t=>{const e=new window.FormData;e.append("action","uagb_get_taxonomy"),e.append("nonce",uagb_blocks_info.uagb_ajax_nonce),j()({url:uagb_blocks_info.ajax_url,method:"POST",body:e}).then(e=>{a({listInJson:e}),a({postType:t}),a({categories:""}),a({taxonomyType:""})})})(t),options:uagb_blocks_info.post_types}),""!==S&&n.a.createElement(w.SelectControl,{label:Object(l.__)("Taxonomy","ultimate-addons-for-gutenberg"),value:F,onChange:t=>(t=>{a({taxonomyType:t}),a({categories:""})})(t),options:we}),""===S&&n.a.createElement(w.TextControl,{autoComplete:"off",label:Object(l.__)("Display Message","ultimate-addons-for-gutenberg"),value:ht,onChange:t=>a({noTaxDisplaytext:t}),help:Object(l.__)("If taxonomy Not Found","ultimate-addons-for-gutenberg")}),n.a.createElement(w.ToggleControl,{label:Object(l.__)("Show Empty Taxonomy","ultimate-addons-for-gutenberg"),checked:ne,onChange:()=>a({showEmptyTaxonomy:!ne}),help:Object(l.__)("Show empty taxonomy in list ")}),n.a.createElement(w.ToggleControl,{label:Object(l.__)("Show Posts Count","ultimate-addons-for-gutenberg"),checked:yt,onChange:()=>a({showCount:!yt}),help:Object(l.__)("Show count of taxonomy ","ultimate-addons-for-gutenberg")}),"list"===H&&"list"===ce&&"post_tag"!==F&&n.a.createElement(w.ToggleControl,{label:Object(l.__)("Show Hierarchy","ultimate-addons-for-gutenberg"),checked:de,onChange:()=>a({showhierarchy:!de}),help:Object(l.__)("Show hierarchy of taxonomy ","ultimate-addons-for-gutenberg")})),(()=>{let t=be;return""===be&&(t="h4","list"===H&&(t="div")),n.a.createElement(x.a,{title:Object(l.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:t,label:"titleTag"},options:[{value:"h1",label:Object(l.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(l.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(l.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(l.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(l.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(l.__)("H6","ultimate-addons-for-gutenberg")},{value:"div",label:Object(l.__)("Div","ultimate-addons-for-gutenberg")}]}),n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:H,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"grid",label:"Grid",tooltip:Object(l.__)("Grid","ultimate-addons-for-gutenberg")},{value:"list",label:"List",tooltip:Object(l.__)("List","ultimate-addons-for-gutenberg")}],showIcons:!1}),"grid"===H&&n.a.createElement(p.a,{label:Object(l.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:L,label:"columns",min:1,max:4},tablet:{value:P,label:"tcolumns",min:1,max:3},mobile:{value:k,label:"mcolumns",min:1,max:2}},min:1,max:4,displayUnit:!1,setAttributes:a}),"list"===H&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("Display Style","ultimate-addons-for-gutenberg"),data:{value:ce,label:"listDisplayStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"list",label:"List",tooltip:Object(l.__)("List","ultimate-addons-for-gutenberg")},{value:"dropdown",label:"Dropdown",tooltip:Object(l.__)("Dropdown","ultimate-addons-for-gutenberg")}],showIcons:!1})),"grid"===H&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:at,label:"alignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(w.Icon,{icon:Object(s.a)("fa fa-align-left")}),tooltip:Object(l.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(w.Icon,{icon:Object(s.a)("fa fa-align-center")}),tooltip:Object(l.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(w.Icon,{icon:Object(s.a)("fa fa-align-right")}),tooltip:Object(l.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),"list"===H&&"dropdown"!==ce&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("List Style","ultimate-addons-for-gutenberg"),data:{value:ot,label:"listStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"disc",icon:n.a.createElement(w.Icon,{icon:Object(s.a)("fa fa-list-ul")}),tooltip:Object(l.__)("Bullet","ultimate-addons-for-gutenberg")},{value:"decimal",icon:n.a.createElement(w.Icon,{icon:Object(s.a)("fa fa-list-ol")}),tooltip:Object(l.__)("Numbers","ultimate-addons-for-gutenberg")},{value:"none",icon:n.a.createElement(w.Icon,{icon:Object(s.a)("fa fa-bars")}),tooltip:Object(l.__)("None","ultimate-addons-for-gutenberg")}],showIcons:!0})))})()),n.a.createElement(h.b,h.a.style,"grid"===H&&"dropdown"!==ce&&n.a.createElement(x.a,{title:Object(l.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(u.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:kt,label:"titleLoadGoogleFonts"},fontFamily:{value:Tt,label:"titleFontFamily"},fontWeight:{value:Ct,label:"titleFontWeight"},fontStyle:{value:Et,label:"titleFontStyle"},fontSizeType:{value:St,label:"titleFontSizeType"},fontSize:{value:xt,label:"titleFontSize"},fontSizeMobile:{value:jt,label:"titleFontSizeMobile"},fontSizeTablet:{value:Ot,label:"titleFontSizeTablet"},lineHeightType:{value:Ft,label:"titleLineHeightType"},lineHeight:{value:Ht,label:"titleLineHeight"},lineHeightMobile:{value:Pt,label:"titleLineHeightMobile"},lineHeightTablet:{value:Lt,label:"titleLineHeightTablet"},transform:{value:ge,label:"titleTransform"},decoration:{value:me,label:"titleDecoration"}}),n.a.createElement(b.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:t=>a({titleColor:t})}),yt&&n.a.createElement(m.a,{label:Object(l.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:et,onChange:t=>a({titleBottomSpace:t}),min:0,max:50,displayUnit:!1})),"grid"===H&&"dropdown"!==ce&&yt&&n.a.createElement(x.a,{title:Object(l.__)("Count","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(b.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:A||"",onColorChange:t=>a({countColor:t})}),n.a.createElement(u.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:Vt,label:"countLoadGoogleFonts"},fontFamily:{value:Nt,label:"countFontFamily"},fontWeight:{value:It,label:"countFontWeight"},fontStyle:{value:Wt,label:"countFontStyle"},fontSizeType:{value:Bt,label:"countFontSizeType"},fontSize:{value:zt,label:"countFontSize"},fontSizeMobile:{value:At,label:"countFontSizeMobile"},fontSizeTablet:{value:Mt,label:"countFontSizeTablet"},lineHeightType:{value:Dt,label:"countLineHeightType"},lineHeight:{value:Rt,label:"countLineHeight"},lineHeightMobile:{value:Ut,label:"countLineHeightMobile"},lineHeightTablet:{value:Gt,label:"countLineHeightTablet"},transform:{value:he,label:"countTransform"},decoration:{value:pe,label:"countDecoration"}})),"grid"===H&&"dropdown"!==ce&&n.a.createElement(x.a,{title:Object(l.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(b.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:z||"",onColorChange:t=>a({bgColor:t})})),"grid"===H&&"dropdown"!==ce&&n.a.createElement(x.a,{title:Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(c.a,{setAttributes:a,label:Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:ft,label:"boxShadowColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:mt,label:"boxShadowHOffset",title:Object(l.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:pt,label:"boxShadowVOffset",title:Object(l.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:vt,label:"boxShadowBlur",title:Object(l.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:_t,label:"boxShadowSpread",title:Object(l.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:wt,label:"boxShadowPosition",title:Object(l.__)("Position","ultimate-addons-for-gutenberg")}})),"grid"===H&&"dropdown"!==ce&&n.a.createElement(x.a,{title:Object(l.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,{setAttributes:a,borderStyle:{value:le,label:"borderStyle",title:Object(l.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:ie,label:"borderThickness",title:Object(l.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:se,label:"borderRadius",title:Object(l.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:re,label:"borderColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:ue,label:"borderHoverColor",title:Object(l.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),"list"===H&&"dropdown"!==ce&&n.a.createElement(x.a,{title:Object(l.__)("List","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(u.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:oe,label:"listLoadGoogleFonts"},fontFamily:{value:Qt,label:"listFontFamily"},fontWeight:{value:Xt,label:"listFontWeight"},fontStyle:{value:Yt,label:"listFontStyle"},fontSizeType:{value:$t,label:"listFontSizeType"},fontSize:{value:qt,label:"listFontSize"},fontSizeMobile:{value:Jt,label:"listFontSizeMobile"},fontSizeTablet:{value:Kt,label:"listFontSizeTablet"},lineHeightType:{value:Zt,label:"listLineHeightType"},lineHeight:{value:te,label:"listLineHeight"},lineHeightMobile:{value:ae,label:"listLineHeightMobile"},lineHeightTablet:{value:ee,label:"listLineHeightTablet"},transform:{value:fe,label:"listTransform"},decoration:{value:ve,label:"listDecoration"}}),n.a.createElement(_.a,{tabs:[{name:"normal",title:Object(l.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(l.__)("Hover","ultimate-addons-for-gutenberg")}],normal:je,hover:Oe,disableBottomSeparator:!0})),"list"===H&&"dropdown"!==ce&&n.a.createElement(x.a,{title:Object(l.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,{setAttributes:a,borderStyle:{value:nt,label:"seperatorStyle",title:Object(l.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:lt,label:"seperatorWidth",title:Object(l.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:it,label:"seperatorThickness",title:Object(l.__)("Thickness","ultimate-addons-for-gutenberg")},borderColor:{value:rt,label:"seperatorColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:st,label:"seperatorHoverColor",title:Object(l.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),"dropdown"!==ce&&n.a.createElement(x.a,{title:Object(l.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},"grid"===H&&n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{label:Object(l.__)("Row Gap","ultimate-addons-for-gutenberg"),setAttributes:a,value:M,onChange:t=>a({rowGap:t}),min:0,max:50,displayUnit:!1}),n.a.createElement(m.a,{label:Object(l.__)("Column Gap","ultimate-addons-for-gutenberg"),setAttributes:a,value:N,onChange:t=>a({columnGap:t}),min:0,max:50,displayUnit:!1}),n.a.createElement(f.a,O({},t,{label:Object(l.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:I,label:"contentTopPadding"},valueRight:{value:W,label:"contentRightPadding"},valueBottom:{value:D,label:"contentBottomPadding"},valueLeft:{value:R,label:"contentLeftPadding"},valueTopTablet:{value:G,label:"contentTopPaddingTablet"},valueRightTablet:{value:U,label:"contentRightPaddingTablet"},valueBottomTablet:{value:V,label:"contentBottomPaddingTablet"},valueLeftTablet:{value:q,label:"contentLeftPaddingTablet"},valueTopMobile:{value:$,label:"contentTopPaddingMobile"},valueRightMobile:{value:J,label:"contentRightPaddingMobile"},valueBottomMobile:{value:K,label:"contentBottomPaddingMobile"},valueLeftMobile:{value:Q,label:"contentLeftPaddingMobile"},unit:{value:X,label:"contentPaddingUnit"},mUnit:{value:Y,label:"mobileContentPaddingUnit"},tUnit:{value:Z,label:"tabletContentPaddingUnit"},deviceType:C,attributes:e,setAttributes:a,link:{value:tt,label:"contentPaddingLink"}}))),"list"===H&&n.a.createElement(m.a,{label:Object(l.__)("Bottom Margin","ultimate-addons-for-gutenberg"),setAttributes:a,value:dt,onChange:t=>a({listBottomMargin:t}),min:0,max:100,displayUnit:!1})),"list"===H&&"dropdown"===ce&&n.a.createElement("p",{className:"uagb-settings-notice"},Object(l.__)("There is no style available for the currently selected layout.","ultimate-addons-for-gutenberg"))),n.a.createElement(h.b,O({},h.a.advance,{parentProps:t}))));return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.Suspense,{fallback:Object(i.a)()},n.a.createElement(y.BlockControls,{key:"controls"},n.a.createElement(y.AlignmentToolbar,{value:at,onChange:t=>a({alignment:t})})),Te,ye,xe,Se))};e.default=n.a.memo(T)}}]);