(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[107],{204:function(t,e,a){"use strict";var l,n,o=a(22),i=a.n(o),r=a(205),s=a.n(r),u=a(2);if(void 0===c)var c=[];const b=t=>{const[e,a]=Object(u.useState)([]);Object(u.useEffect)(()=>{r()},[]),Object(u.useEffect)(()=>{const{onStatus:a,config:l}=t;void 0!==e.status&&a(e.status),l!==e.config&&r()},[t]);const l=()=>{a({status:"loading"})},n=t=>{c.includes(t)||c.push(t)},o=()=>{a({status:"active"})},i=()=>{a({status:"inactive"})},r=()=>{c.includes(t.config.google.families[0])||(s.a.load({...t.config,loading:l,active:o,inactive:i}),n(t.config.google.families[0]));const e=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==e.length||0!==a.length){const r=(e[0]||a[0]).getElementsByTagName("iframe")[0];r&&(s.a.load({...t.config,loading:l,active:o,inactive:i,context:null==r?void 0:r.contentWindow}),n(t.config.google.families[0]))}},{children:b}=t;return b||null};b.propTypes={config:null===(l=i.a.object)||void 0===l?void 0:l.isRequired,children:i.a.element,onStatus:null===(n=i.a.func)||void 0===n?void 0:n.isRequired},b.defaultProps={onStatus:()=>{}},e.a=b},205:function(t,e,a){var l;!function(){function n(t,e,a){return t.call.apply(t.bind,arguments)}function o(t,e,a){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,l),t.apply(e,a)}}return function(){return t.apply(e,arguments)}}function i(t,e,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var u=!!window.FontFace;function c(t,e,a,l){if(e=t.c.createElement(e),a)for(var n in a)a.hasOwnProperty(n)&&("style"==n?e.style.cssText=a[n]:e.setAttribute(n,a[n]));return l&&e.appendChild(t.c.createTextNode(l)),e}function b(t,e,a){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(a,t.lastChild)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t,e,a){e=e||[],a=a||[];for(var l=t.className.split(/\s+/),n=0;n<e.length;n+=1){for(var o=!1,i=0;i<l.length;i+=1)if(e[n]===l[i]){o=!0;break}o||l.push(e[n])}for(e=[],n=0;n<l.length;n+=1){for(o=!1,i=0;i<a.length;i+=1)if(l[n]===a[i]){o=!0;break}o||e.push(l[n])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(t,e){for(var a=t.className.split(/\s+/),l=0,n=a.length;l<n;l++)if(a[l]==e)return!0;return!1}function h(t,e,a){function l(){r&&n&&o&&(r(i),r=null)}e=c(t,"link",{rel:"stylesheet",href:e,media:"all"});var n=!1,o=!0,i=null,r=a||null;u?(e.onload=function(){n=!0,l()},e.onerror=function(){n=!0,i=Error("Stylesheet failed to load"),l()}):setTimeout((function(){n=!0,l()}),0),b(t,"head",e)}function m(t,e,a,l){var n=t.c.getElementsByTagName("head")[0];if(n){var o=c(t,"script",{src:e}),i=!1;return o.onload=o.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&n.removeChild(o))},n.appendChild(o),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),l||5e3),o}return null}function p(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,_(t)}}function y(t,e){t.c=e,_(t)}function _(t){0==t.a&&t.c&&(t.c(),t.c=null)}function S(t){this.a=t||"-"}function w(t,e){this.c=t,this.f=4,this.a="n";var a=(e||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function T(t){var e=[];t=t.split(/,\s*/);for(var a=0;a<t.length;a++){var l=t[a].replace(/['"]/g,"");-1!=l.indexOf(" ")||/^\d/.test(l)?e.push("'"+l+"'"):e.push(l)}return e.join(",")}function j(t){return t.a+t.f}function O(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function E(t){var e=4,a="n",l=null;return t&&((l=t.match(/(normal|oblique|italic)/i))&&l[1]&&(a=l[1].substr(0,1).toLowerCase()),(l=t.match(/([1-9]00|normal|bold)/i))&&l[1]&&(/bold/i.test(l[1])?e=7:/[1-9]00/.test(l[1])&&(e=parseInt(l[1].substr(0,1),10)))),a+e}function x(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new S("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function L(t){if(t.g){var e=f(t.f,t.a.c("wf","active")),a=[],l=[t.a.c("wf","loading")];e||a.push(t.a.c("wf","inactive")),d(t.f,a,l)}F(t,"inactive")}function F(t,e,a){t.j&&t.h[e]&&(a?t.h[e](a.c,j(a)):t.h[e]())}function C(){this.c={}}function P(t,e){this.c=t,this.f=e,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function H(t){b(t.c,"body",t.a)}function M(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(t.c)+";font-style:"+O(t)+";font-weight:"+t.f+"00;"}function B(t,e,a,l,n,o){this.g=t,this.j=e,this.a=l,this.c=a,this.f=n||3e3,this.h=o||void 0}function A(t,e,a,l,n,o,i){this.v=t,this.B=e,this.c=a,this.a=l,this.s=i||"BESbswy",this.f={},this.w=n||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new P(this.c,this.s),this.h=new P(this.c,this.s),this.j=new P(this.c,this.s),this.m=new P(this.c,this.s),t=M(t=new w(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=t,t=M(t=new w(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=t,t=M(t=new w("serif",j(this.a))),this.j.a.style.cssText=t,t=M(t=new w("sans-serif",j(this.a))),this.m.a.style.cssText=t,H(this.g),H(this.h),H(this.j),H(this.m)}S.prototype.c=function(t){for(var e=[],a=0;a<arguments.length;a++)e.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},B.prototype.start=function(){var t=this.c.o.document,e=this,a=r(),l=new Promise((function(l,n){!function o(){r()-a>=e.f?n():t.fonts.load(function(t){return O(t)+" "+t.f+"00 300px "+T(t.c)}(e.a),e.h).then((function(t){1<=t.length?l():setTimeout(o,25)}),(function(){n()}))}()})),n=null,o=new Promise((function(t,a){n=setTimeout(a,e.f)}));Promise.race([o,l]).then((function(){n&&(clearTimeout(n),n=null),e.g(e.a)}),(function(){e.j(e.a)}))};var k={D:"serif",C:"sans-serif"},z=null;function N(){if(null===z){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);z=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return z}function I(t,e,a){for(var l in k)if(k.hasOwnProperty(l)&&e===t.f[k[l]]&&a===t.f[k[l]])return!0;return!1}function G(t,e){setTimeout(i((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),e(this.a)}),t),0)}function D(t,e,a){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=a}A.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(e){var a,l=e.g.a.offsetWidth,n=e.h.a.offsetWidth;(a=l===e.f.serif&&n===e.f["sans-serif"])||(a=N()&&I(e,l,n)),a?r()-e.A>=e.w?N()&&I(e,l,n)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?G(e,e.v):G(e,e.B):function(e){setTimeout(i((function(){t(this)}),e),50)}(e):G(e,e.v)}(this)};var U=null;function W(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&d(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),F(t,"active")):L(t.a))}function R(t){this.j=t,this.a=new C,this.h=0,this.f=this.g=!0}function V(t,e,a,l,n){var o=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=n||null,r=l||{};if(0===a.length&&o)L(e.a);else{e.f+=a.length,o&&(e.j=o);var s,u=[];for(s=0;s<a.length;s++){var c=a[s],b=r[c.c],g=e.a,f=c;if(g.g&&d(g.f,[g.a.c("wf",f.c,j(f).toString(),"loading")]),F(g,"fontloading",f),g=null,null===U)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);U=f?42<parseInt(f[1],10):!h}else U=!1;g=U?new B(i(e.g,e),i(e.h,e),e.c,c,e.s,b):new A(i(e.g,e),i(e.h,e),e.c,c,e.s,t,b),u.push(g)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function q(t,e){this.c=t,this.a=e}function J(t,e){this.c=t,this.a=e}function $(t,e){this.c=t||K,this.a=[],this.f=[],this.g=e||""}D.prototype.g=function(t){var e=this.a;e.g&&d(e.f,[e.a.c("wf",t.c,j(t).toString(),"active")],[e.a.c("wf",t.c,j(t).toString(),"loading"),e.a.c("wf",t.c,j(t).toString(),"inactive")]),F(e,"fontactive",t),this.m=!0,W(this)},D.prototype.h=function(t){var e=this.a;if(e.g){var a=f(e.f,e.a.c("wf",t.c,j(t).toString(),"active")),l=[],n=[e.a.c("wf",t.c,j(t).toString(),"loading")];a||l.push(e.a.c("wf",t.c,j(t).toString(),"inactive")),d(e.f,l,n)}F(e,"fontinactive",t),W(this)},R.prototype.load=function(t){this.c=new s(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,a){var l=[],n=a.timeout;!function(t){t.g&&d(t.f,[t.a.c("wf","loading")]),F(t,"loading")}(e),l=function(t,e,a){var l,n=[];for(l in e)if(e.hasOwnProperty(l)){var o=t.c[l];o&&n.push(o(e[l],a))}return n}(t.a,a,t.c);var o=new D(t.c,e,n);for(t.h=l.length,e=0,a=l.length;e<a;e++)l[e].load((function(e,a,l){V(t,o,e,a,l)}))}(this,new x(this.c,t),t)},q.prototype.load=function(t){var e=this,a=e.a.projectId,l=e.a.version;if(a){var n=e.c.o;m(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(l?"?v="+l:""),(function(l){l?t([]):(n["__MonotypeConfiguration__"+a]=function(){return e.a},function e(){if(n["__mti_fntLst"+a]){var l,o=n["__mti_fntLst"+a](),i=[];if(o)for(var r=0;r<o.length;r++){var s=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(l=o[r].fontStyle+o[r].fontWeight,i.push(new w(s,l))):i.push(new w(s))}t(i)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+a}else t([])},J.prototype.load=function(t){var e,a,l=this.a.urls||[],n=this.a.families||[],o=this.a.testStrings||{},i=new p;for(e=0,a=l.length;e<a;e++)h(this.c,l[e],v(i));var r=[];for(e=0,a=n.length;e<a;e++)if((l=n[e].split(":"))[1])for(var s=l[1].split(","),u=0;u<s.length;u+=1)r.push(new w(l[0],s[u]));else r.push(new w(l[0]));y(i,(function(){t(r,o)}))};var K="https://fonts.googleapis.com/css";function Q(t){this.f=t,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var at={Arimo:!0,Cousine:!0,Tinos:!0};function lt(t,e){this.c=t,this.a=e}function nt(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new p,a=this.c,l=new $(this.a.api,this.a.text),n=this.a.families;!function(t,e){for(var a=e.length,l=0;l<a;l++){var n=e[l].split(":");3==n.length&&t.f.push(n.pop());var o="";2==n.length&&""!=n[1]&&(o=":"),t.a.push(n.join(o))}}(l,n);var o=new Q(n);!function(t){for(var e=t.f.length,a=0;a<e;a++){var l=t.f[a].split(":"),n=l[0].replace(/\+/g," "),o=["n4"];if(2<=l.length){var i;if(i=[],r=l[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var c;if((c=r[u]).match(/^[\w-]+$/))if(null==(b=tt.exec(c.toLowerCase())))c="";else{if(c=null==(c=b[2])||""==c?"n":Z[c],null==(b=b[1])||""==b)b="4";else var b=Y[b]||(isNaN(b)?"4":b.substr(0,1));c=[c,b].join("")}else c="";c&&i.push(c)}0<i.length&&(o=i),3==l.length&&(i=[],0<(l=(l=l[2])?l.split(","):i).length&&(l=X[l[0]])&&(t.c[n]=l))}for(t.c[n]||(l=X[n])&&(t.c[n]=l),l=0;l<o.length;l+=1)t.a.push(new w(n,o[l]))}}(o),h(a,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,a=[],l=0;l<e;l++)a.push(t.a[l].replace(/ /g,"+"));return e=t.c+"?family="+a.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(l),v(e)),y(e,(function(){t(o.a,o.c,at)}))},lt.prototype.load=function(t){var e=this.a.id,a=this.c.o;e?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){e=a.Typekit.config.fn;for(var l=[],n=0;n<e.length;n+=2)for(var o=e[n],i=e[n+1],r=0;r<i.length;r++)l.push(new w(o,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(l)}}),2e3):t([])},nt.prototype.load=function(t){var e=this.f.id,a=this.c.o,l=this;e?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[e]=function(e,a){for(var n=0,o=a.fonts.length;n<o;++n){var i=a.fonts[n];l.a.push(new w(i.name,E("font-weight:"+i.weight+";font-style:"+i.style)))}t(l.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var ot=new R(window);ot.a.c.custom=function(t,e){return new J(e,t)},ot.a.c.fontdeck=function(t,e){return new nt(e,t)},ot.a.c.monotype=function(t,e){return new q(e,t)},ot.a.c.typekit=function(t,e){return new lt(e,t)},ot.a.c.google=function(t,e){return new et(e,t)};var it={load:i(ot.load,ot)};void 0===(l=function(){return it}.call(e,a,e,t))||(t.exports=l)}()},210:function(t,e,a){"use strict";var l=a(1),n=a(20),o=a(18),i=a(7),r=a(2),s=a(21),u=a(0),c=a.n(u),b=a(9),g=a(24);e.a=t=>{const[e,a]=Object(r.useState)(!1);Object(u.useLayoutEffect)(()=>{window.addEventListener("click",(function(t){const e=document.querySelector(".uagb-box-shadow-advanced"),l=document.querySelector(".uag-box-shadow-button");var n,o,i,r;e&&(null!=e&&e.contains(t.target)||null!=l&&l.contains(t.target)||null!==(n=t.target)&&void 0!==n&&null!==(o=n.classList)&&void 0!==o&&o.contains("uagb-advanced-color-indicate")||null!==(i=t.target)&&void 0!==i&&null!==(r=i.parentElement)&&void 0!==r&&r.closest(".uagb-popover-color")||a(!1))}))},[]);const{setAttributes:d,boxShadowColor:f,boxShadowHOffset:h,boxShadowVOffset:m,boxShadowBlur:p,boxShadowSpread:v,boxShadowPosition:y,label:_=Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),popup:S=!1}=t;let w;const T=e?"active":"",j=c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{label:f.title,colorValue:f.value,data:{value:f.value,label:f.label},setAttributes:d}),c.a.createElement(n.a,{label:h.title,value:h.value,min:0,max:100,displayUnit:!1,setAttributes:d,data:{value:h.value,label:h.label}}),c.a.createElement(n.a,{label:m.title,value:m.value,min:0,max:100,displayUnit:!1,setAttributes:d,data:{value:m.value,label:m.label}}),c.a.createElement(n.a,{label:p.title,value:p.value,min:0,max:100,displayUnit:!1,setAttributes:d,data:{value:p.value,label:p.label}}),c.a.createElement(n.a,{label:v.title,value:v.value,min:-100,max:100,displayUnit:!1,setAttributes:d,data:{value:v.value,label:v.label}}),c.a.createElement(s.a,{setAttributes:d,label:y.title,data:{value:y.value,label:y.label},options:[{value:"outset",label:Object(l.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(l.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}));e&&(w=c.a.createElement("div",{className:"uagb-box-shadow-advanced spectra-control-popup"},j));const O=c.a.createElement("div",{className:"spectra-control-popup__options--action-wrapper"},c.a.createElement("span",{className:"uag-control-label"},_),c.a.createElement(i.Button,{className:"uag-box-shadow-button spectra-control-popup__options--action-button","aria-pressed":e,onClick:()=>{if(a(!e),!e){var t;const{getSelectedBlock:e}=Object(b.select)("core/block-editor"),a=null===(t=e())||void 0===t?void 0:t.name,l=Object(g.a)("uagSettingState"),n={...l,[a]:{...null==l?void 0:l[a],selectedSetting:".uag-box-shadow-options"}},o=Object(g.a)();o&&o.setItem("uagSettingState",JSON.stringify(n))}}},c.a.createElement(i.Dashicon,{icon:"edit"})));return S?c.a.createElement("div",{className:"components-base-control uag-box-shadow-options spectra-control-popup__options "+T},O,e&&w):c.a.createElement(c.a.Fragment,null,j)}},498:function(t,e,a){"use strict";a.r(e);var l=a(0),n=a.n(l),o=a(1),i=a(10),r=a(204),s=a(13),u=a(37),c=a(210),b=a(80),g=a(18),d=a(82),f=a(28),h=a(36),m=a(20),p=a(27),v=a(21),y=a(58),_=a(7),S=a(5),w=a(17),T=a(38),j=a.n(T);function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l])}return t}).apply(this,arguments)}const E=t=>{t=t.parentProps;const{attributes:e,setAttributes:a,taxonomyList:T,termsList:E,deviceType:x}=t,{postType:L,taxonomyType:F,layout:C,columns:P,tcolumns:H,mcolumns:M,bgColor:B,titleColor:A,countColor:k,rowGap:z,rowGapTablet:N,rowGapMobile:I,columnGap:G,columnGapTablet:D,columnGapMobile:U,contentTopPadding:W,contentRightPadding:R,contentBottomPadding:V,contentLeftPadding:q,contentTopPaddingTablet:J,contentRightPaddingTablet:$,contentBottomPaddingTablet:K,contentLeftPaddingTablet:Q,contentTopPaddingMobile:X,contentRightPaddingMobile:Y,contentBottomPaddingMobile:Z,contentLeftPaddingMobile:tt,contentPaddingUnit:et,mobileContentPaddingUnit:at,tabletContentPaddingUnit:lt,contentPaddingLink:nt,titleBottomSpace:ot,titleBottomSpaceTablet:it,titleBottomSpaceMobile:rt,alignment:st,listStyle:ut,listTextColor:ct,hoverlistTextColor:bt,listBottomMargin:gt,listStyleColor:dt,hoverlistStyleColor:ft,noTaxDisplaytext:ht,boxShadowColor:mt,boxShadowHOffset:pt,boxShadowVOffset:vt,boxShadowBlur:yt,boxShadowSpread:_t,boxShadowPosition:St,showCount:wt,titleFontSize:Tt,titleFontSizeType:jt,titleFontSizeMobile:Ot,titleFontSizeTablet:Et,titleFontFamily:xt,titleFontWeight:Lt,titleFontStyle:Ft,titleLineHeightType:Ct,titleLineHeight:Pt,titleLineHeightTablet:Ht,titleLineHeightMobile:Mt,titleLoadGoogleFonts:Bt,countFontSize:At,countFontSizeType:kt,countFontSizeMobile:zt,countFontSizeTablet:Nt,countFontFamily:It,countFontWeight:Gt,countFontStyle:Dt,countLineHeightType:Ut,countLineHeight:Wt,countLineHeightTablet:Rt,countLineHeightMobile:Vt,countLoadGoogleFonts:qt,listFontSize:Jt,listFontSizeType:$t,listFontSizeMobile:Kt,listFontSizeTablet:Qt,listFontFamily:Xt,listFontWeight:Yt,listFontStyle:Zt,listLineHeightType:te,listLineHeight:ee,listLineHeightTablet:ae,listLineHeightMobile:le,listLoadGoogleFonts:ne,showEmptyTaxonomy:oe,listDisplayStyle:ie,showhierarchy:re,titleTag:se,titleTransform:ue,countTransform:ce,listTransform:be,titleDecoration:ge,countDecoration:de,listDecoration:fe,titleLetterSpacing:he,titleLetterSpacingTablet:me,titleLetterSpacingMobile:pe,titleLetterSpacingType:ve,countLetterSpacing:ye,countLetterSpacingTablet:_e,countLetterSpacingMobile:Se,countLetterSpacingType:we,listLetterSpacing:Te,listLetterSpacingTablet:je,listLetterSpacingMobile:Oe,listLetterSpacingType:Ee}=e,xe=oe?T:E,Le=[{value:"",label:Object(o.__)("Select Taxonomy","ultimate-addons-for-gutenberg")}];let Fe,Ce,Pe;if(""!==xe&&void 0!==xe&&Object.keys(xe).map(t=>Le.push({value:T[t].name,label:T[t].label})),!0===Bt){const t={google:{families:[xt+(Lt?":"+Lt:"")]}};Fe=n.a.createElement(r.a,{config:t})}if(!0===qt){const t={google:{families:[It+(Gt?":"+Gt:"")]}};Ce=n.a.createElement(r.a,{config:t})}if(!0===ne){const t={google:{families:[Xt+(Yt?":"+Yt:"")]}};Pe=n.a.createElement(r.a,{config:t})}const He=n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:ct||"",data:{value:ct,label:"listTextColor"},setAttributes:a}),n.a.createElement("br",null),"none"!==ut&&n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Bullet/Numbers Color","ultimate-addons-for-gutenberg"),colorValue:dt||"",data:{value:dt,label:"listStyleColor"},setAttributes:a}))),Me=n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:bt||"",data:{value:bt,label:"hoverlistTextColor"},setAttributes:a}),n.a.createElement("br",null),"none"!==ut&&n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Bullet/Numbers Color","ultimate-addons-for-gutenberg"),colorValue:ft||"",data:{value:ft,label:"hoverlistStyleColor"},setAttributes:a}))),Be=n.a.createElement(S.InspectorControls,null,n.a.createElement(d.a,null,n.a.createElement(f.b,f.a.general,n.a.createElement(w.a,{title:Object(o.__)("Query","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(_.SelectControl,{label:Object(o.__)("Post Type","ultimate-addons-for-gutenberg"),value:L,onChange:t=>(t=>{const e=new window.FormData;e.append("action","uagb_get_taxonomy"),e.append("nonce",uagb_blocks_info.uagb_ajax_nonce),j()({url:uagb_blocks_info.ajax_url,method:"POST",body:e}).then(e=>{a({listInJson:e}),a({postType:t}),a({categories:""}),a({taxonomyType:""})})})(t),options:uagb_blocks_info.post_types}),""!==T&&n.a.createElement(_.SelectControl,{label:Object(o.__)("Taxonomy","ultimate-addons-for-gutenberg"),value:F,onChange:t=>(t=>{a({taxonomyType:t}),a({categories:""})})(t),options:Le}),""===T&&n.a.createElement(_.TextControl,{autoComplete:"off",label:Object(o.__)("Display Message","ultimate-addons-for-gutenberg"),value:ht,onChange:t=>a({noTaxDisplaytext:t}),help:Object(o.__)("If taxonomy Not Found","ultimate-addons-for-gutenberg")}),n.a.createElement(_.ToggleControl,{label:Object(o.__)("Show Empty Taxonomy","ultimate-addons-for-gutenberg"),checked:oe,onChange:()=>a({showEmptyTaxonomy:!oe})}),n.a.createElement(_.ToggleControl,{label:Object(o.__)("Show Posts Count","ultimate-addons-for-gutenberg"),checked:wt,onChange:()=>a({showCount:!wt})}),"list"===C&&"list"===ie&&"post_tag"!==F&&n.a.createElement(_.ToggleControl,{label:Object(o.__)("Show Hierarchy","ultimate-addons-for-gutenberg"),checked:re,onChange:()=>a({showhierarchy:!re})})),(()=>{let t=se;return""===se&&(t="h4","list"===C&&(t="div")),n.a.createElement(w.a,{title:Object(o.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(v.a,{setAttributes:a,label:Object(o.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:t,label:"titleTag"},options:[{value:"h1",label:Object(o.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(o.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(o.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(o.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(o.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(o.__)("H6","ultimate-addons-for-gutenberg")},{value:"div",label:Object(o.__)("Div","ultimate-addons-for-gutenberg")}]}),n.a.createElement(v.a,{setAttributes:a,label:Object(o.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:C,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"grid",label:"Grid"},{value:"list",label:"List"}],showIcons:!1}),"grid"===C&&n.a.createElement(p.a,{label:Object(o.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:P,label:"columns",min:1,max:4},tablet:{value:H,label:"tcolumns",min:1,max:3},mobile:{value:M,label:"mcolumns",min:1,max:2}},min:1,max:4,displayUnit:!1,setAttributes:a}),"list"===C&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{setAttributes:a,label:Object(o.__)("Display Style","ultimate-addons-for-gutenberg"),data:{value:ie,label:"listDisplayStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"list",label:"List"},{value:"dropdown",label:"Dropdown"}],showIcons:!1})),"grid"===C&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{setAttributes:a,label:Object(o.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:st,label:"alignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(_.Icon,{icon:Object(s.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(_.Icon,{icon:Object(s.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(_.Icon,{icon:Object(s.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),"list"===C&&"dropdown"!==ie&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{setAttributes:a,label:Object(o.__)("List Style","ultimate-addons-for-gutenberg"),data:{value:ut,label:"listStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"disc",icon:n.a.createElement(_.Icon,{icon:Object(s.a)("fa fa-list-ul")}),tooltip:Object(o.__)("Bullet","ultimate-addons-for-gutenberg")},{value:"decimal",icon:n.a.createElement(_.Icon,{icon:Object(s.a)("fa fa-list-ol")}),tooltip:Object(o.__)("Numbers","ultimate-addons-for-gutenberg")},{value:"none",icon:n.a.createElement(_.Icon,{icon:Object(s.a)("fa fa-bars")}),tooltip:Object(o.__)("None","ultimate-addons-for-gutenberg")}],showIcons:!0})))})()),n.a.createElement(f.b,f.a.style,"grid"===C&&"dropdown"!==ie&&n.a.createElement(w.a,{title:Object(o.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(u.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:Bt,label:"titleLoadGoogleFonts"},fontFamily:{value:xt,label:"titleFontFamily"},fontWeight:{value:Lt,label:"titleFontWeight"},fontStyle:{value:Ft,label:"titleFontStyle"},fontSizeType:{value:jt,label:"titleFontSizeType"},fontSize:{value:Tt,label:"titleFontSize"},fontSizeMobile:{value:Ot,label:"titleFontSizeMobile"},fontSizeTablet:{value:Et,label:"titleFontSizeTablet"},lineHeightType:{value:Ct,label:"titleLineHeightType"},lineHeight:{value:Pt,label:"titleLineHeight"},lineHeightMobile:{value:Mt,label:"titleLineHeightMobile"},lineHeightTablet:{value:Ht,label:"titleLineHeightTablet"},transform:{value:ue,label:"titleTransform"},decoration:{value:ge,label:"titleDecoration"},letterSpacing:{value:he,label:"titleLetterSpacing"},letterSpacingTablet:{value:me,label:"titleLetterSpacingTablet"},letterSpacingMobile:{value:pe,label:"titleLetterSpacingMobile"},letterSpacingType:{value:ve,label:"titleLetterSpacingType"}}),n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:A||"",data:{value:A,label:"titleColor"},setAttributes:a}),wt&&n.a.createElement(p.a,{label:Object(o.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),data:{desktop:{value:ot,label:"titleBottomSpace"},tablet:{value:it,label:"titleBottomSpaceTablet"},mobile:{value:rt,label:"titleBottomSpaceMobile"}},min:0,max:50,displayUnit:!1,setAttributes:a})),"grid"===C&&"dropdown"!==ie&&wt&&n.a.createElement(w.a,{title:Object(o.__)("Count","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:k||"",data:{value:k,label:"countColor"},setAttributes:a}),n.a.createElement(u.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:qt,label:"countLoadGoogleFonts"},fontFamily:{value:It,label:"countFontFamily"},fontWeight:{value:Gt,label:"countFontWeight"},fontStyle:{value:Dt,label:"countFontStyle"},fontSizeType:{value:kt,label:"countFontSizeType"},fontSize:{value:At,label:"countFontSize"},fontSizeMobile:{value:zt,label:"countFontSizeMobile"},fontSizeTablet:{value:Nt,label:"countFontSizeTablet"},lineHeightType:{value:Ut,label:"countLineHeightType"},lineHeight:{value:Wt,label:"countLineHeight"},lineHeightMobile:{value:Vt,label:"countLineHeightMobile"},lineHeightTablet:{value:Rt,label:"countLineHeightTablet"},transform:{value:ce,label:"countTransform"},decoration:{value:de,label:"countDecoration"},letterSpacing:{value:ye,label:"countLetterSpacing"},letterSpacingTablet:{value:_e,label:"countLetterSpacingTablet"},letterSpacingMobile:{value:Se,label:"countLetterSpacingMobile"},letterSpacingType:{value:we,label:"countLetterSpacingType"}})),"grid"===C&&"dropdown"!==ie&&n.a.createElement(w.a,{title:Object(o.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:B||"",data:{value:B,label:"bgColor"},setAttributes:a})),"grid"===C&&"dropdown"!==ie&&n.a.createElement(w.a,{title:Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(c.a,{setAttributes:a,label:Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:mt,label:"boxShadowColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:pt,label:"boxShadowHOffset",title:Object(o.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:vt,label:"boxShadowVOffset",title:Object(o.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:yt,label:"boxShadowBlur",title:Object(o.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:_t,label:"boxShadowSpread",title:Object(o.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:St,label:"boxShadowPosition",title:Object(o.__)("Position","ultimate-addons-for-gutenberg")}})),"grid"===C&&"dropdown"!==ie&&n.a.createElement(w.a,{title:Object(o.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(b.a,{setAttributes:a,prefix:"overall",attributes:e,deviceType:x,disableBottomSeparator:!0,disabledBorderTitle:!0})),"list"===C&&"dropdown"!==ie&&n.a.createElement(w.a,{title:Object(o.__)("List","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(u.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:ne,label:"listLoadGoogleFonts"},fontFamily:{value:Xt,label:"listFontFamily"},fontWeight:{value:Yt,label:"listFontWeight"},fontStyle:{value:Zt,label:"listFontStyle"},fontSizeType:{value:$t,label:"listFontSizeType"},fontSize:{value:Jt,label:"listFontSize"},fontSizeMobile:{value:Kt,label:"listFontSizeMobile"},fontSizeTablet:{value:Qt,label:"listFontSizeTablet"},lineHeightType:{value:te,label:"listLineHeightType"},lineHeight:{value:ee,label:"listLineHeight"},lineHeightMobile:{value:le,label:"listLineHeightMobile"},lineHeightTablet:{value:ae,label:"listLineHeightTablet"},transform:{value:be,label:"listTransform"},decoration:{value:fe,label:"listDecoration"},letterSpacing:{value:Te,label:"listLetterSpacing"},letterSpacingTablet:{value:je,label:"listLetterSpacingTablet"},letterSpacingMobile:{value:Oe,label:"listLetterSpacingMobile"},letterSpacingType:{value:Ee,label:"listLetterSpacingType"}}),n.a.createElement(y.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:He,hover:Me,disableBottomSeparator:!0})),"list"===C&&"dropdown"!==ie&&n.a.createElement(w.a,{title:Object(o.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(b.a,{setAttributes:a,prefix:"separator",attributes:e,deviceType:x,disableBottomSeparator:!0,disabledBorderTitle:!0})),"dropdown"!==ie&&n.a.createElement(w.a,{title:Object(o.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},"grid"===C&&n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{label:Object(o.__)("Row Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:z,label:"rowGap"},tablet:{value:N,label:"rowGapTablet"},mobile:{value:I,label:"rowGapMobile"}},min:1,max:50,displayUnit:!1,setAttributes:a}),n.a.createElement(p.a,{label:Object(o.__)("Column Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:G,label:"columnGap"},tablet:{value:D,label:"columnGapTablet"},mobile:{value:U,label:"columnGapMobile"}},min:1,max:50,displayUnit:!1,setAttributes:a}),n.a.createElement(h.a,O({},t,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:W,label:"contentTopPadding"},valueRight:{value:R,label:"contentRightPadding"},valueBottom:{value:V,label:"contentBottomPadding"},valueLeft:{value:q,label:"contentLeftPadding"},valueTopTablet:{value:J,label:"contentTopPaddingTablet"},valueRightTablet:{value:$,label:"contentRightPaddingTablet"},valueBottomTablet:{value:K,label:"contentBottomPaddingTablet"},valueLeftTablet:{value:Q,label:"contentLeftPaddingTablet"},valueTopMobile:{value:X,label:"contentTopPaddingMobile"},valueRightMobile:{value:Y,label:"contentRightPaddingMobile"},valueBottomMobile:{value:Z,label:"contentBottomPaddingMobile"},valueLeftMobile:{value:tt,label:"contentLeftPaddingMobile"},unit:{value:et,label:"contentPaddingUnit"},mUnit:{value:at,label:"mobileContentPaddingUnit"},tUnit:{value:lt,label:"tabletContentPaddingUnit"},deviceType:x,attributes:e,setAttributes:a,link:{value:nt,label:"contentPaddingLink"}}))),"list"===C&&n.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),setAttributes:a,value:gt,data:{value:gt,label:"listBottomMargin"},min:0,max:100,displayUnit:!1})),"list"===C&&"dropdown"===ie&&n.a.createElement("p",{className:"uagb-settings-notice"},Object(o.__)("There is no style available for the currently selected layout.","ultimate-addons-for-gutenberg"))),n.a.createElement(f.b,O({},f.a.advance,{parentProps:t}))));return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.Suspense,{fallback:Object(i.a)()},Be,Fe,Ce,Pe))};e.default=n.a.memo(E)}}]);