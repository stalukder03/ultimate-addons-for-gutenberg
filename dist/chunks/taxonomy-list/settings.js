(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[103],{242:function(e,t,a){e.exports=a(245)()},243:function(e,t,a){"use strict";var o=a(242),n=a.n(o),l=a(244),i=a.n(l),r=a(3);if(void 0===s)var s=[];const u=e=>{const[t,a]=Object(r.useState)([]);Object(r.useEffect)(()=>{u()},[]);const o=()=>{a({status:"loading"})},n=()=>{a({status:"active"})},l=()=>{a({status:"inactive"})},u=()=>{var t;s.includes(e.config.google.families[0])||(i.a.load({...e.config,loading:o,active:n,inactive:l}),t=e.config.google.families[0],s.includes(t)||s.push(t))};Object(r.useEffect)(()=>{const{onStatus:a,config:o}=e;void 0!==t.status&&a(t.status),o!==t.config&&u()},[void 0]);const{children:c}=e;return c||null};u.propTypes={config:n.a.object.isRequired,children:n.a.element,onStatus:n.a.func.isRequired},u.defaultProps={onStatus:()=>{}},t.a=u},244:function(e,t,a){var o;!function(){function n(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,o),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function c(e,t,a,o){if(t=e.c.createElement(t),a)for(var n in a)a.hasOwnProperty(n)&&("style"==n?t.style.cssText=a[n]:t.setAttribute(n,a[n]));return o&&t.appendChild(e.c.createTextNode(o)),t}function d(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e,t,a){t=t||[],a=a||[];for(var o=e.className.split(/\s+/),n=0;n<t.length;n+=1){for(var l=!1,i=0;i<o.length;i+=1)if(t[n]===o[i]){l=!0;break}l||o.push(t[n])}for(t=[],n=0;n<o.length;n+=1){for(l=!1,i=0;i<a.length;i+=1)if(o[n]===a[i]){l=!0;break}l||t.push(o[n])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(e,t){for(var a=e.className.split(/\s+/),o=0,n=a.length;o<n;o++)if(a[o]==t)return!0;return!1}function f(e,t,a){function o(){r&&n&&l&&(r(i),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var n=!1,l=!0,i=null,r=a||null;u?(t.onload=function(){n=!0,o()},t.onerror=function(){n=!0,i=Error("Stylesheet failed to load"),o()}):setTimeout((function(){n=!0,o()}),0),d(e,"head",t)}function m(e,t,a,o){var n=e.c.getElementsByTagName("head")[0];if(n){var l=c(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&n.removeChild(l))},n.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),o||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,w(e)}}function _(e,t){e.c=t,w(e)}function w(e){0==e.a&&e.c&&(e.c(),e.c=null)}function y(e){this.a=e||"-"}function x(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function S(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var o=e[a].replace(/['"]/g,"");-1!=o.indexOf(" ")||/^\d/.test(o)?t.push("'"+o+"'"):t.push(o)}return t.join(",")}function O(e){return e.a+e.f}function j(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function T(e){var t=4,a="n",o=null;return e&&((o=e.match(/(normal|oblique|italic)/i))&&o[1]&&(a=o[1].substr(0,1).toLowerCase()),(o=e.match(/([1-9]00|normal|bold)/i))&&o[1]&&(/bold/i.test(o[1])?t=7:/[1-9]00/.test(o[1])&&(t=parseInt(o[1].substr(0,1),10)))),a+t}function C(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new y("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function E(e){if(e.g){var t=h(e.f,e.a.c("wf","active")),a=[],o=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),g(e.f,a,o)}F(e,"inactive")}function F(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,O(a)):e.h[t]())}function P(){this.c={}}function H(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function L(e){d(e.c,"body",e.a)}function B(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+S(e.c)+";font-style:"+j(e)+";font-weight:"+e.f+"00;"}function k(e,t,a,o,n,l){this.g=e,this.j=t,this.a=o,this.c=a,this.f=n||3e3,this.h=l||void 0}function z(e,t,a,o,n,l,i){this.v=e,this.B=t,this.c=a,this.a=o,this.s=i||"BESbswy",this.f={},this.w=n||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new H(this.c,this.s),this.h=new H(this.c,this.s),this.j=new H(this.c,this.s),this.m=new H(this.c,this.s),e=B(e=new x(this.a.c+",serif",O(this.a))),this.g.a.style.cssText=e,e=B(e=new x(this.a.c+",sans-serif",O(this.a))),this.h.a.style.cssText=e,e=B(e=new x("serif",O(this.a))),this.j.a.style.cssText=e,e=B(e=new x("sans-serif",O(this.a))),this.m.a.style.cssText=e,L(this.g),L(this.h),L(this.j),L(this.m)}y.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},k.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),o=new Promise((function(o,n){!function l(){r()-a>=t.f?n():e.fonts.load(function(e){return j(e)+" "+e.f+"00 300px "+S(e.c)}(t.a),t.h).then((function(e){1<=e.length?o():setTimeout(l,25)}),(function(){n()}))}()})),n=null,l=new Promise((function(e,a){n=setTimeout(a,t.f)}));Promise.race([l,o]).then((function(){n&&(clearTimeout(n),n=null),t.g(t.a)}),(function(){t.j(t.a)}))};var A={D:"serif",C:"sans-serif"},M=null;function N(){if(null===M){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);M=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return M}function I(e,t,a){for(var o in A)if(A.hasOwnProperty(o)&&t===e.f[A[o]]&&a===e.f[A[o]])return!0;return!1}function W(e,t){setTimeout(i((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function R(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,o=t.g.a.offsetWidth,n=t.h.a.offsetWidth;(a=o===t.f.serif&&n===t.f["sans-serif"])||(a=N()&&I(t,o,n)),a?r()-t.A>=t.w?N()&&I(t,o,n)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?W(t,t.v):W(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):W(t,t.v)}(this)};var U=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&g(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),F(e,"active")):E(e.a))}function D(e){this.j=e,this.a=new P,this.h=0,this.f=this.g=!0}function V(e,t,a,o,n){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=n||null,r=o||{};if(0===a.length&&l)E(t.a);else{t.f+=a.length,l&&(t.j=l);var s,u=[];for(s=0;s<a.length;s++){var c=a[s],d=r[c.c],b=t.a,h=c;if(b.g&&g(b.f,[b.a.c("wf",h.c,O(h).toString(),"loading")]),F(b,"fontloading",h),b=null,null===U)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var f=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);U=h?42<parseInt(h[1],10):!f}else U=!1;b=U?new k(i(t.g,t),i(t.h,t),t.c,c,t.s,d):new z(i(t.g,t),i(t.h,t),t.c,c,t.s,e,d),u.push(b)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}R.prototype.g=function(e){var t=this.a;t.g&&g(t.f,[t.a.c("wf",e.c,O(e).toString(),"active")],[t.a.c("wf",e.c,O(e).toString(),"loading"),t.a.c("wf",e.c,O(e).toString(),"inactive")]),F(t,"fontactive",e),this.m=!0,G(this)},R.prototype.h=function(e){var t=this.a;if(t.g){var a=h(t.f,t.a.c("wf",e.c,O(e).toString(),"active")),o=[],n=[t.a.c("wf",e.c,O(e).toString(),"loading")];a||o.push(t.a.c("wf",e.c,O(e).toString(),"inactive")),g(t.f,o,n)}F(t,"fontinactive",e),G(this)},D.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var o=[],n=a.timeout;!function(e){e.g&&g(e.f,[e.a.c("wf","loading")]),F(e,"loading")}(t),o=function(e,t,a){var o,n=[];for(o in t)if(t.hasOwnProperty(o)){var l=e.c[o];l&&n.push(l(t[o],a))}return n}(e.a,a,e.c);var l=new R(e.c,t,n);for(e.h=o.length,t=0,a=o.length;t<a;t++)o[t].load((function(t,a,o){V(e,l,t,a,o)}))}(this,new C(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,o=t.a.version;if(a){var n=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(o?"?v="+o:""),(function(o){o?e([]):(n["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(n["__mti_fntLst"+a]){var o,l=n["__mti_fntLst"+a](),i=[];if(l)for(var r=0;r<l.length;r++){var s=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(o=l[r].fontStyle+l[r].fontWeight,i.push(new x(s,o))):i.push(new x(s))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,o=this.a.urls||[],n=this.a.families||[],l=this.a.testStrings||{},i=new p;for(t=0,a=o.length;t<a;t++)f(this.c,o[t],v(i));var r=[];for(t=0,a=n.length;t<a;t++)if((o=n[t].split(":"))[1])for(var s=o[1].split(","),u=0;u<s.length;u+=1)r.push(new x(o[0],s[u]));else r.push(new x(o[0]));_(i,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function Q(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function oe(e,t){this.c=e,this.a=t}function ne(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,o=new J(this.a.api,this.a.text),n=this.a.families;!function(e,t){for(var a=t.length,o=0;o<a;o++){var n=t[o].split(":");3==n.length&&e.f.push(n.pop());var l="";2==n.length&&""!=n[1]&&(l=":"),e.a.push(n.join(l))}}(o,n);var l=new Q(n);!function(e){for(var t=e.f.length,a=0;a<t;a++){var o=e.f[a].split(":"),n=o[0].replace(/\+/g," "),l=["n4"];if(2<=o.length){var i;if(i=[],r=o[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var c;if((c=r[u]).match(/^[\w-]+$/))if(null==(d=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=d[2])||""==c?"n":Z[c],null==(d=d[1])||""==d)d="4";else var d=Y[d]||(isNaN(d)?"4":d.substr(0,1));c=[c,d].join("")}else c="";c&&i.push(c)}0<i.length&&(l=i),3==o.length&&(i=[],0<(o=(o=o[2])?o.split(","):i).length&&(o=X[o[0]])&&(e.c[n]=o))}for(e.c[n]||(o=X[n])&&(e.c[n]=o),o=0;o<l.length;o+=1)e.a.push(new x(n,l[o]))}}(l),f(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],o=0;o<t;o++)a.push(e.a[o].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(o),v(t)),_(t,(function(){e(l.a,l.c,ae)}))},oe.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var o=[],n=0;n<t.length;n+=2)for(var l=t[n],i=t[n+1],r=0;r<i.length;r++)o.push(new x(l,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(o)}}),2e3):e([])},ne.prototype.load=function(e){var t=this.f.id,a=this.c.o,o=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var n=0,l=a.fonts.length;n<l;++n){var i=a.fonts[n];o.a.push(new x(i.name,T("font-weight:"+i.weight+";font-style:"+i.style)))}e(o.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new D(window);le.a.c.custom=function(e,t){return new $(t,e)},le.a.c.fontdeck=function(e,t){return new ne(t,e)},le.a.c.monotype=function(e,t){return new q(t,e)},le.a.c.typekit=function(e,t){return new oe(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(o=function(){return ie}.call(t,a,t,e))||(e.exports=o)}()},245:function(e,t,a){"use strict";var o=a(246);function n(){}function l(){}l.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,l,i){if(i!==o){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:n};return a.PropTypes=a,a}},246:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},256:function(e,t,a){"use strict";var o=a(18),n=a.n(o)()((function(e){return e[1]}));n.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 3px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),t.a=n},262:function(e,t,a){"use strict";var o,n=a(2),l=a(13),i=a(16),r=a(6),s=a(3),u=a(21),c=a(17),d=a.n(c),b=a(256),g=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=b.a.locals||{},f.use=function(){return g++||(o=d()(b.a,h)),f},f.unuse=function(){g>0&&!--g&&(o(),o=null)};var m=f,p=a(1),v=a.n(p);t.a=e=>{Object(p.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]);const[t,a]=Object(s.useState)(!1),{setAttributes:o,boxShadowColor:c,boxShadowHOffset:d,boxShadowVOffset:b,boxShadowBlur:g,boxShadowSpread:h,boxShadowPosition:f}=e;let _;const w=t?"active":"";t&&(_=v.a.createElement("div",{className:"uagb-box-shadow-advanced"},v.a.createElement("div",{className:"uagb-shadow-color"},v.a.createElement(i.a,{label:c.title,colorValue:c.value,onColorChange:e=>o({[c.label]:e})})),v.a.createElement("div",{className:"uagb-horizontal-wrap"},v.a.createElement(l.a,{label:d.title,value:d.value,onChange:e=>o({[d.label]:e}),min:0,max:100,displayUnit:!1})),v.a.createElement("div",{className:"uagb-vertical-wrap"},v.a.createElement(l.a,{label:b.title,value:b.value,onChange:e=>o({[b.label]:e}),min:0,max:100,displayUnit:!1})),v.a.createElement("div",{className:"uagb-blur-wrap"},v.a.createElement(l.a,{label:g.title,value:g.value,onChange:e=>o({[g.label]:e}),min:0,max:100,displayUnit:!1})),v.a.createElement("div",{className:"uagb-spread-wrap"},v.a.createElement(l.a,{label:h.title,value:h.value,onChange:e=>o({[h.label]:e}),min:-100,max:100,displayUnit:!1})),v.a.createElement("div",{className:"uagb-shadow-type"},v.a.createElement(u.a,{setAttributes:o,label:f.title,data:{value:f.value,label:f.label},options:[{value:"outset",label:Object(n.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(n.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const y=v.a.createElement("div",{className:"uag-box-shadow-option-actions"},v.a.createElement("span",{className:"uag-control-label"},Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg")),v.a.createElement(r.Button,{className:"uag-box-shadow-button","aria-pressed":t,onClick:()=>a(!t)},v.a.createElement(r.Dashicon,{icon:"edit"})));return v.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+w},y,t&&_)}},545:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),l=a(2),i=a(11),r=a(243),s=a(12),u=a(23),c=a(262),d=a(57),b=a(16),g=a(63),h=a(34),f=a(41),m=a(13),p=a(64),v=a(21),_=a(42),w=a(6),y=a(5);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const S=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,taxonomyList:S,termsList:O,deviceType:j}=e,{postType:T,taxonomyType:C,layout:E,columns:F,tcolumns:P,mcolumns:H,bgColor:L,titleColor:B,countColor:k,rowGap:z,columnGap:A,contentTopPadding:M,contentRightPadding:N,contentBottomPadding:I,contentLeftPadding:W,contentTopPaddingTablet:R,contentRightPaddingTablet:U,contentBottomPaddingTablet:G,contentLeftPaddingTablet:D,contentTopPaddingMobile:V,contentRightPaddingMobile:q,contentBottomPaddingMobile:$,contentLeftPaddingMobile:J,contentPaddingUnit:K,mobileContentPaddingUnit:Q,tabletContentPaddingUnit:X,contentPaddingLink:Y,titleBottomSpace:Z,alignment:ee,listStyle:te,seperatorStyle:ae,seperatorWidth:oe,seperatorThickness:ne,seperatorColor:le,seperatorHoverColor:ie,listTextColor:re,hoverlistTextColor:se,listBottomMargin:ue,listStyleColor:ce,hoverlistStyleColor:de,noTaxDisplaytext:be,boxShadowColor:ge,boxShadowHOffset:he,boxShadowVOffset:fe,boxShadowBlur:me,boxShadowSpread:pe,boxShadowPosition:ve,showCount:_e,titleFontSize:we,titleFontSizeType:ye,titleFontSizeMobile:xe,titleFontSizeTablet:Se,titleFontFamily:Oe,titleFontWeight:je,titleFontSubset:Te,titleLineHeightType:Ce,titleLineHeight:Ee,titleLineHeightTablet:Fe,titleLineHeightMobile:Pe,titleLoadGoogleFonts:He,countFontSize:Le,countFontSizeType:Be,countFontSizeMobile:ke,countFontSizeTablet:ze,countFontFamily:Ae,countFontWeight:Me,countFontSubset:Ne,countLineHeightType:Ie,countLineHeight:We,countLineHeightTablet:Re,countLineHeightMobile:Ue,countLoadGoogleFonts:Ge,listFontSize:De,listFontSizeType:Ve,listFontSizeMobile:qe,listFontSizeTablet:$e,listFontFamily:Je,listFontWeight:Ke,listFontSubset:Qe,listLineHeightType:Xe,listLineHeight:Ye,listLineHeightTablet:Ze,listLineHeightMobile:et,listLoadGoogleFonts:tt,showEmptyTaxonomy:at,borderStyle:ot,borderThickness:nt,borderColor:lt,borderRadius:it,borderHoverColor:rt,listDisplayStyle:st,showhierarchy:ut,titleTag:ct}=t,dt=at?S:O,bt=[{value:"",label:Object(l.__)("Select Taxonomy","ultimate-addons-for-gutenberg")}];let gt,ht,ft;if(""!==dt&&void 0!==dt&&Object.keys(dt).map(e=>bt.push({value:S[e].name,label:S[e].label})),!0===He){const e={google:{families:[Oe+(je?":"+je:"")]}};gt=n.a.createElement(r.a,{config:e})}if(!0===Ge){const e={google:{families:[Ae+(Me?":"+Me:"")]}};ht=n.a.createElement(r.a,{config:e})}if(!0===tt){const e={google:{families:[Je+(Ke?":"+Ke:"")]}};ft=n.a.createElement(r.a,{config:e})}const mt=n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{label:Object(l.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:re||"",onColorChange:e=>a({listTextColor:e})}),n.a.createElement("br",null),"none"!==te&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{label:Object(l.__)("Bullet/Numbers Color","ultimate-addons-for-gutenberg"),colorValue:ce||"",onColorChange:e=>a({listStyleColor:e})}))),pt=n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{label:Object(l.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:se||"",onColorChange:e=>a({hoverlistTextColor:e})}),n.a.createElement("br",null),"none"!==te&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{label:Object(l.__)("Bullet/Numbers Color","ultimate-addons-for-gutenberg"),colorValue:de||"",onColorChange:e=>a({hoverlistStyleColor:e})}))),vt=n.a.createElement(y.InspectorControls,null,n.a.createElement(g.a,null,n.a.createElement(h.b,h.a.general,(()=>{let e=ct;return""===ct&&(e="h4","list"===E&&(e="div")),n.a.createElement(w.PanelBody,{title:Object(l.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:e,label:"titleTag"},options:[{value:"h1",label:Object(l.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(l.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(l.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(l.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(l.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(l.__)("H6","ultimate-addons-for-gutenberg")},{value:"div",label:Object(l.__)("Div","ultimate-addons-for-gutenberg")}]}),n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:E,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"grid",label:"Grid",tooltip:Object(l.__)("Grid","ultimate-addons-for-gutenberg")},{value:"list",label:"List",tooltip:Object(l.__)("List","ultimate-addons-for-gutenberg")}],showIcons:!1}),"grid"===E&&n.a.createElement(p.a,{label:Object(l.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:F,label:"columns",min:1,max:4},tablet:{value:P,label:"tcolumns",min:1,max:3},mobile:{value:H,label:"mcolumns",min:1,max:2}},displayUnit:!1,setAttributes:a}),"list"===E&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("Display Style","ultimate-addons-for-gutenberg"),data:{value:st,label:"listDisplayStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"list",label:"List",tooltip:Object(l.__)("List","ultimate-addons-for-gutenberg")},{value:"dropdown",label:"Dropdown",tooltip:Object(l.__)("Dropdown","ultimate-addons-for-gutenberg")}],showIcons:!1})),"grid"===E&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:ee,label:"alignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(w.Icon,{icon:Object(s.a)("fa fa-align-left")}),tooltip:Object(l.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(w.Icon,{icon:Object(s.a)("fa fa-align-center")}),tooltip:Object(l.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(w.Icon,{icon:Object(s.a)("fa fa-align-right")}),tooltip:Object(l.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),"list"===E&&"dropdown"!==st&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{setAttributes:a,label:Object(l.__)("List Style","ultimate-addons-for-gutenberg"),data:{value:te,label:"listStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"disc",icon:n.a.createElement(w.Icon,{icon:Object(s.a)("fa fa-list-ul")}),tooltip:Object(l.__)("Bullet","ultimate-addons-for-gutenberg")},{value:"decimal",icon:n.a.createElement(w.Icon,{icon:Object(s.a)("fa fa-list-ol")}),tooltip:Object(l.__)("Numbers","ultimate-addons-for-gutenberg")},{value:"none",icon:n.a.createElement(w.Icon,{icon:Object(s.a)("fa fa-bars")}),tooltip:Object(l.__)("None","ultimate-addons-for-gutenberg")}],showIcons:!0})))})(),n.a.createElement(w.PanelBody,{title:Object(l.__)("Query","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(w.SelectControl,{label:Object(l.__)("Post Type","ultimate-addons-for-gutenberg"),value:T,onChange:e=>(e=>{a({postType:e}),a({categories:""}),a({taxonomyType:""})})(e),options:uagb_blocks_info.post_types}),""!==S&&n.a.createElement(w.SelectControl,{label:Object(l.__)("Taxonomy","ultimate-addons-for-gutenberg"),value:C,onChange:e=>(e=>{a({taxonomyType:e}),a({categories:""})})(e),options:bt}),""===S&&n.a.createElement(w.TextControl,{autoComplete:"off",label:Object(l.__)("Display Message","ultimate-addons-for-gutenberg"),value:be,onChange:e=>a({noTaxDisplaytext:e}),help:Object(l.__)("If taxonomy Not Found","ultimate-addons-for-gutenberg")}),n.a.createElement(w.ToggleControl,{label:Object(l.__)("Show Empty Taxonomy","ultimate-addons-for-gutenberg"),checked:at,onChange:()=>a({showEmptyTaxonomy:!at}),help:Object(l.__)("Show empty taxonomy in list ")}),n.a.createElement(w.ToggleControl,{label:Object(l.__)("Show Posts Count","ultimate-addons-for-gutenberg"),checked:_e,onChange:()=>a({showCount:!_e}),help:Object(l.__)("Show count of taxonomy ","ultimate-addons-for-gutenberg")}),"list"===E&&"list"===st&&"post_tag"!==C&&n.a.createElement(w.ToggleControl,{label:Object(l.__)("Show Hierarchy","ultimate-addons-for-gutenberg"),checked:ut,onChange:()=>a({showhierarchy:!ut}),help:Object(l.__)("Show hierarchy of taxonomy ","ultimate-addons-for-gutenberg")}))),n.a.createElement(h.b,h.a.style,"grid"===E&&"dropdown"!==st&&n.a.createElement(w.PanelBody,{title:Object(l.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(b.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:e=>a({titleColor:e})}),n.a.createElement(u.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:He,label:"titleLoadGoogleFonts"},fontFamily:{value:Oe,label:"titleFontFamily"},fontWeight:{value:je,label:"titleFontWeight"},fontSubset:{value:Te,label:"titleFontSubset"},fontSizeType:{value:ye,label:"titleFontSizeType"},fontSize:{value:we,label:"titleFontSize"},fontSizeMobile:{value:xe,label:"titleFontSizeMobile"},fontSizeTablet:{value:Se,label:"titleFontSizeTablet"},lineHeightType:{value:Ce,label:"titleLineHeightType"},lineHeight:{value:Ee,label:"titleLineHeight"},lineHeightMobile:{value:Pe,label:"titleLineHeightMobile"},lineHeightTablet:{value:Fe,label:"titleLineHeightTablet"}})),"grid"===E&&"dropdown"!==st&&_e&&n.a.createElement(w.PanelBody,{title:Object(l.__)("Count","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(b.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:e=>a({countColor:e})}),n.a.createElement(u.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:Ge,label:"countLoadGoogleFonts"},fontFamily:{value:Ae,label:"countFontFamily"},fontWeight:{value:Me,label:"countFontWeight"},fontSubset:{value:Ne,label:"countFontSubset"},fontSizeType:{value:Be,label:"countFontSizeType"},fontSize:{value:Le,label:"countFontSize"},fontSizeMobile:{value:ke,label:"countFontSizeMobile"},fontSizeTablet:{value:ze,label:"countFontSizeTablet"},lineHeightType:{value:Ie,label:"countLineHeightType"},lineHeight:{value:We,label:"countLineHeight"},lineHeightMobile:{value:Ue,label:"countLineHeightMobile"},lineHeightTablet:{value:Re,label:"countLineHeightTablet"}})),"grid"===E&&"dropdown"!==st&&n.a.createElement(w.PanelBody,{title:Object(l.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(b.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:L||"",onColorChange:e=>a({bgColor:e})})),"grid"===E&&"dropdown"!==st&&n.a.createElement(w.PanelBody,{title:Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(c.a,{setAttributes:a,label:Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:ge,label:"boxShadowColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:he,label:"boxShadowHOffset",title:Object(l.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:fe,label:"boxShadowVOffset",title:Object(l.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:me,label:"boxShadowBlur",title:Object(l.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:pe,label:"boxShadowSpread",title:Object(l.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:ve,label:"boxShadowPosition",title:Object(l.__)("Position","ultimate-addons-for-gutenberg")}})),"grid"===E&&"dropdown"!==st&&n.a.createElement(w.PanelBody,{title:Object(l.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,{setAttributes:a,borderStyle:{value:ot,label:"borderStyle",title:Object(l.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:nt,label:"borderThickness",title:Object(l.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:it,label:"borderRadius",title:Object(l.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:lt,label:"borderColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:rt,label:"borderHoverColor",title:Object(l.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),"list"===E&&"dropdown"!==st&&n.a.createElement(w.PanelBody,{title:Object(l.__)("List","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(u.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:tt,label:"listLoadGoogleFonts"},fontFamily:{value:Je,label:"listFontFamily"},fontWeight:{value:Ke,label:"listFontWeight"},fontSubset:{value:Qe,label:"listFontSubset"},fontSizeType:{value:Ve,label:"listFontSizeType"},fontSize:{value:De,label:"listFontSize"},fontSizeMobile:{value:qe,label:"listFontSizeMobile"},fontSizeTablet:{value:$e,label:"listFontSizeTablet"},lineHeightType:{value:Xe,label:"listLineHeightType"},lineHeight:{value:Ye,label:"listLineHeight"},lineHeightMobile:{value:et,label:"listLineHeightMobile"},lineHeightTablet:{value:Ze,label:"listLineHeightTablet"}}),n.a.createElement(_.a,{tabs:[{name:"normal",title:Object(l.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(l.__)("Hover","ultimate-addons-for-gutenberg")}],normal:mt,hover:pt,disableBottomSeparator:!0})),"list"===E&&"dropdown"!==st&&n.a.createElement(w.PanelBody,{title:Object(l.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,{setAttributes:a,borderStyle:{value:ae,label:"seperatorStyle",title:Object(l.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:oe,label:"seperatorWidth",title:Object(l.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ne,label:"seperatorThickness",title:Object(l.__)("Thickness","ultimate-addons-for-gutenberg")},borderColor:{value:le,label:"seperatorColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:ie,label:"seperatorHoverColor",title:Object(l.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),"dropdown"!==st&&n.a.createElement(w.PanelBody,{title:Object(l.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},"grid"===E&&n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{label:Object(l.__)("Row Gap","ultimate-addons-for-gutenberg"),setAttributes:a,value:z,onChange:e=>a({rowGap:e}),min:0,max:50,displayUnit:!1}),n.a.createElement(m.a,{label:Object(l.__)("Column Gap","ultimate-addons-for-gutenberg"),setAttributes:a,value:A,onChange:e=>a({columnGap:e}),min:0,max:50,displayUnit:!1}),_e&&n.a.createElement(m.a,{label:Object(l.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:Z,onChange:e=>a({titleBottomSpace:e}),min:0,max:50,displayUnit:!1}),n.a.createElement(f.a,x({},e,{label:Object(l.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:M,label:"contentTopPadding"},valueRight:{value:N,label:"contentRightPadding"},valueBottom:{value:I,label:"contentBottomPadding"},valueLeft:{value:W,label:"contentLeftPadding"},valueTopTablet:{value:R,label:"contentTopPaddingTablet"},valueRightTablet:{value:U,label:"contentRightPaddingTablet"},valueBottomTablet:{value:G,label:"contentBottomPaddingTablet"},valueLeftTablet:{value:D,label:"contentLeftPaddingTablet"},valueTopMobile:{value:V,label:"contentTopPaddingMobile"},valueRightMobile:{value:q,label:"contentRightPaddingMobile"},valueBottomMobile:{value:$,label:"contentBottomPaddingMobile"},valueLeftMobile:{value:J,label:"contentLeftPaddingMobile"},unit:{value:K,label:"contentPaddingUnit"},mUnit:{value:Q,label:"mobileContentPaddingUnit"},tUnit:{value:X,label:"tabletContentPaddingUnit"},deviceType:j,attributes:t,setAttributes:a,link:{value:Y,label:"contentPaddingLink"}}))),"list"===E&&n.a.createElement(m.a,{label:Object(l.__)("Bottom Margin","ultimate-addons-for-gutenberg"),setAttributes:a,value:ue,onChange:e=>a({listBottomMargin:e}),min:0,max:100,displayUnit:!1})),"list"===E&&"dropdown"===st&&n.a.createElement("p",{className:"uagb-settings-notice"},Object(l.__)("There is no style available for the currently selected layout.","ultimate-addons-for-gutenberg"))),n.a.createElement(h.b,x({},h.a.advance,{parentProps:e}))));return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.Suspense,{fallback:Object(i.a)()},vt,gt,ht,ft))};t.default=n.a.memo(S)}}]);