(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[60],{198:function(e,t,a){"use strict";var n,i,o=a(37),l=a.n(o),r=a(199),s=a.n(r),c=a(2);if(void 0===u)var u=[];const g=e=>{const[t,a]=Object(c.useState)([]);Object(c.useEffect)(()=>{r()},[]),Object(c.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&r()},[e]);const n=()=>{a({status:"loading"})},i=e=>{u.includes(e)||u.push(e)},o=()=>{a({status:"active"})},l=()=>{a({status:"inactive"})},r=()=>{u.includes(e.config.google.families[0])||(s.a.load({...e.config,loading:n,active:o,inactive:l}),i(e.config.google.families[0]));const t=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==t.length||0!==a.length){const r=(t[0]||a[0]).getElementsByTagName("iframe")[0];r&&(s.a.load({...e.config,loading:n,active:o,inactive:l,context:null==r?void 0:r.contentWindow}),i(e.config.google.families[0]))}},{children:g}=e;return g||null};g.propTypes={config:null===(n=l.a.object)||void 0===n?void 0:n.isRequired,children:l.a.element,onStatus:null===(i=l.a.func)||void 0===i?void 0:i.isRequired},g.defaultProps={onStatus:()=>{}},t.a=g},199:function(e,t,a){var n;!function(){function i(e,t,a){return e.call.apply(e.bind,arguments)}function o(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function l(e,t,a){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function u(e,t,a,n){if(t=e.c.createElement(t),a)for(var i in a)a.hasOwnProperty(i)&&("style"==i?t.style.cssText=a[i]:t.setAttribute(i,a[i]));return n&&t.appendChild(e.c.createTextNode(n)),t}function g(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var o=!1,l=0;l<n.length;l+=1)if(t[i]===n[l]){o=!0;break}o||n.push(t[i])}for(t=[],i=0;i<n.length;i+=1){for(o=!1,l=0;l<a.length;l+=1)if(n[i]===a[l]){o=!0;break}o||t.push(n[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(e,t){for(var a=e.className.split(/\s+/),n=0,i=a.length;n<i;n++)if(a[n]==t)return!0;return!1}function f(e,t,a){function n(){r&&i&&o&&(r(l),r=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,o=!0,l=null,r=a||null;c?(t.onload=function(){i=!0,n()},t.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),n()}):setTimeout((function(){i=!0,n()}),0),g(e,"head",t)}function m(e,t,a,n){var i=e.c.getElementsByTagName("head")[0];if(i){var o=u(e,"script",{src:t}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,a&&a(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout((function(){l||(l=!0,a&&a(Error("Script load timeout")))}),n||5e3),o}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function S(e){this.a=e||"-"}function w(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function T(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function j(e){return e.a+e.f}function O(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function H(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function E(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new S("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function L(e){if(e.g){var t=d(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),h(e.f,a,n)}F(e,"inactive")}function F(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,j(a)):e.h[t]())}function C(){this.c={}}function x(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function k(e){g(e.c,"body",e.a)}function M(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(e.c)+";font-style:"+O(e)+";font-weight:"+e.f+"00;"}function z(e,t,a,n,i,o){this.g=e,this.j=t,this.a=n,this.c=a,this.f=i||3e3,this.h=o||void 0}function A(e,t,a,n,i,o,l){this.v=e,this.B=t,this.c=a,this.a=n,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new x(this.c,this.s),this.h=new x(this.c,this.s),this.j=new x(this.c,this.s),this.m=new x(this.c,this.s),e=M(e=new w(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=e,e=M(e=new w(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=e,e=M(e=new w("serif",j(this.a))),this.j.a.style.cssText=e,e=M(e=new w("sans-serif",j(this.a))),this.m.a.style.cssText=e,k(this.g),k(this.h),k(this.j),k(this.m)}S.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},z.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,i){!function o(){r()-a>=t.f?i():e.fonts.load(function(e){return O(e)+" "+e.f+"00 300px "+T(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(o,25)}),(function(){i()}))}()})),i=null,o=new Promise((function(e,a){i=setTimeout(a,t.f)}));Promise.race([o,n]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var I={D:"serif",C:"sans-serif"},N=null;function W(){if(null===N){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return N}function G(e,t,a){for(var n in I)if(I.hasOwnProperty(n)&&t===e.f[I[n]]&&a===e.f[I[n]])return!0;return!1}function B(e,t){setTimeout(l((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function D(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}A.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(a=n===t.f.serif&&i===t.f["sans-serif"])||(a=W()&&G(t,n,i)),a?r()-t.A>=t.w?W()&&G(t,n,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?B(t,t.v):B(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):B(t,t.v)}(this)};var P=null;function R(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&h(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),F(e,"active")):L(e.a))}function U(e){this.j=e,this.a=new C,this.h=0,this.f=this.g=!0}function V(e,t,a,n,i){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,r=n||{};if(0===a.length&&o)L(t.a);else{t.f+=a.length,o&&(t.j=o);var s,c=[];for(s=0;s<a.length;s++){var u=a[s],g=r[u.c],b=t.a,d=u;if(b.g&&h(b.f,[b.a.c("wf",d.c,j(d).toString(),"loading")]),F(b,"fontloading",d),b=null,null===P)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var f=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);P=d?42<parseInt(d[1],10):!f}else P=!1;b=P?new z(l(t.g,t),l(t.h,t),t.c,u,t.s,g):new A(l(t.g,t),l(t.h,t),t.c,u,t.s,e,g),c.push(b)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function Y(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}D.prototype.g=function(e){var t=this.a;t.g&&h(t.f,[t.a.c("wf",e.c,j(e).toString(),"active")],[t.a.c("wf",e.c,j(e).toString(),"loading"),t.a.c("wf",e.c,j(e).toString(),"inactive")]),F(t,"fontactive",e),this.m=!0,R(this)},D.prototype.h=function(e){var t=this.a;if(t.g){var a=d(t.f,t.a.c("wf",e.c,j(e).toString(),"active")),n=[],i=[t.a.c("wf",e.c,j(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,j(e).toString(),"inactive")),h(t.f,n,i)}F(t,"fontinactive",e),R(this)},U.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],i=a.timeout;!function(e){e.g&&h(e.f,[e.a.c("wf","loading")]),F(e,"loading")}(t),n=function(e,t,a){var n,i=[];for(n in t)if(t.hasOwnProperty(n)){var o=e.c[n];o&&i.push(o(t[n],a))}return i}(e.a,a,e.c);var o=new D(e.c,t,i);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){V(e,o,t,a,n)}))}(this,new E(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var i=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(i["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(i["__mti_fntLst"+a]){var n,o=i["__mti_fntLst"+a](),l=[];if(o)for(var r=0;r<o.length;r++){var s=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(n=o[r].fontStyle+o[r].fontWeight,l.push(new w(s,n))):l.push(new w(s))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,n=this.a.urls||[],i=this.a.families||[],o=this.a.testStrings||{},l=new p;for(t=0,a=n.length;t<a;t++)f(this.c,n[t],v(l));var r=[];for(t=0,a=i.length;t<a;t++)if((n=i[t].split(":"))[1])for(var s=n[1].split(","),c=0;c<s.length;c+=1)r.push(new w(n[0],s[c]));else r.push(new w(n[0]));_(l,(function(){e(r,o)}))};var J="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,n=new Y(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var i=t[n].split(":");3==i.length&&e.f.push(i.pop());var o="";2==i.length&&""!=i[1]&&(o=":"),e.a.push(i.join(o))}}(n,i);var o=new K(i);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),i=n[0].replace(/\+/g," "),o=["n4"];if(2<=n.length){var l;if(l=[],r=n[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(g=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=g[2])||""==u?"n":Z[u],null==(g=g[1])||""==g)g="4";else var g=Q[g]||(isNaN(g)?"4":g.substr(0,1));u=[u,g].join("")}else u="";u&&l.push(u)}0<l.length&&(o=l),3==n.length&&(l=[],0<(n=(n=n[2])?n.split(","):l).length&&(n=X[n[0]])&&(e.c[i]=n))}for(e.c[i]||(n=X[i])&&(e.c[i]=n),n=0;n<o.length;n+=1)e.a.push(new w(i,o[n]))}}(o),f(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),_(t,(function(){e(o.a,o.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],i=0;i<t.length;i+=2)for(var o=t[i],l=t[i+1],r=0;r<l.length;r++)n.push(new w(o,l[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var i=0,o=a.fonts.length;i<o;++i){var l=a.fonts[i];n.a.push(new w(l.name,H("font-weight:"+l.weight+";font-style:"+l.style)))}e(n.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new U(window);oe.a.c.custom=function(e,t){return new $(t,e)},oe.a.c.fontdeck=function(e,t){return new ie(t,e)},oe.a.c.monotype=function(e,t){return new q(t,e)},oe.a.c.typekit=function(e,t){return new ne(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var le={load:l(oe.load,oe)};void 0===(n=function(){return le}.call(t,a,t,e))||(e.exports=n)}()},200:function(e,t,a){"use strict";var n,i=a(1),o=a(6),l=a(4),r=a(0),s=a.n(r),c=a(13),u=a.n(c),g=a(201),b=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=g.a.locals||{},d.use=function(){return b++||(n=u()(g.a,h)),d},d.unuse=function(){b>0&&!--b&&(n(),n=null)};var f=d;t.a=e=>{Object(r.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]);const{onSelectImage:t,backgroundImage:a,onRemoveImage:n,showVideoInput:c,label:u,disableRemove:g=!1,allow:b=["image"]}=e;let h=Object(i.__)("Image","ultimate-addons-for-gutenberg"),d=Object(i.__)("Select Image","ultimate-addons-for-gutenberg"),m=Object(i.__)("Replace Image","ultimate-addons-for-gutenberg"),p=Object(i.__)("Remove Image","ultimate-addons-for-gutenberg"),v=["image"];return c&&(h=Object(i.__)("Video","ultimate-addons-for-gutenberg"),d=Object(i.__)("Select Video","ultimate-addons-for-gutenberg"),m=Object(i.__)("Replace Video","ultimate-addons-for-gutenberg"),p=Object(i.__)("Remove Video","ultimate-addons-for-gutenberg"),v=["video"]),h=u||h,h=!1===u?u:h,"Lottie Animation"===u&&(d=Object(i.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),m=Object(i.__)("Replace Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(i.__)("Remove Lottie Animation","ultimate-addons-for-gutenberg"),v=b),s.a.createElement(o.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+u,label:h},s.a.createElement("div",{className:"uagb-bg-image"},s.a.createElement(l.MediaUpload,{title:d,onSelect:t,allowedTypes:v,value:a,render:e=>{let{open:t}=e;return s.a.createElement(o.Button,{isSecondary:!0,onClick:t},null!=a&&a.url?m:d)}}),!g&&(null==a?void 0:a.url)&&s.a.createElement(o.Button,{className:"uagb-rm-btn",onClick:n,isLink:!0,isDestructive:!0},p),e.help&&s.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},201:function(e,t,a){"use strict";var n=a(14),i=a.n(n)()((function(e){return e[1]}));i.push([e.i,".uagb-bg-image {\n  display: flex; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    border-radius: 2px;\n    background-color: #f0f0f0;\n    min-height: 90px;\n    padding: 8px 0;\n    text-align: center;\n    display: flex;\n    width: 100%;\n    transition: all 0.1s ease-out;\n    box-shadow: 0 0 0 0 #0085ba;\n    margin-top: 10px;\n    align-items: center;\n    justify-content: center; }\n    .uagb-bg-image .components-button.is-destructive:hover:not(:disabled) {\n      color: #710d0d;\n      box-shadow: inset 0 0 0 0 #710d0d; }\n    .uagb-bg-image .components-button.is-link.is-destructive:hover:not(:disabled) {\n      background: #f0f0f0; }\n    .uagb-bg-image .components-button.is-link.is-destructive:focus:not(:disabled) {\n      outline: none; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 0; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n\n.uag-background-image .uagb-bg-image,\n.uag-background-video .uagb-bg-image {\n  display: block; }\n  .uag-background-image .uagb-bg-image .components-button,\n  .uag-background-video .uagb-bg-image .components-button {\n    min-height: 55px; }\n  .uag-background-image .uagb-bg-image .components-button:last-child,\n  .uag-background-video .uagb-bg-image .components-button:last-child {\n    margin-left: 0;\n    margin-top: 0; }\n",""]),t.a=i},211:function(e,t,a){"use strict";function n(e){const t=[];for(const a in e)if(e.hasOwnProperty(a)){const e={value:a,label:a};t.push(e)}return t}a.d(t,"a",(function(){return n}))},486:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(9),l=a(198),r=a(32),s=(a(124),a(1)),c=a(4),u=a(15),g=a(78),b=a(25),h=a(18),d=a(200),f=a(211),m=a(11),p=a(6),v=a(19),_=a(24),y=a(16);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let w=[{value:"thumbnail",label:Object(s.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(s.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(s.__)("Large","ultimate-addons-for-gutenberg")}];const T=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,attributes:{overallAlignment:T,showEstcost:j,showTotaltime:O,showMaterials:H,showTools:E,showTotaltimecolor:L,tools_count:F,material_count:C,tools:x,materials:k,mainimage:M,imgSize:z,headingColor:A,subHeadingColor:I,headingTag:N,headFontFamily:W,headFontWeight:G,headFontSizeType:B,headFontSize:D,headFontSizeMobile:P,headFontSizeTablet:R,headLineHeightType:U,headLineHeight:V,headLineHeightMobile:q,headLineHeightTablet:$,subHeadFontFamily:Y,subHeadFontWeight:J,subHeadFontSize:K,subHeadFontSizeType:X,subHeadFontSizeMobile:Q,subHeadFontSizeTablet:Z,subHeadLineHeight:ee,subHeadLineHeightType:te,subHeadLineHeightMobile:ae,subHeadLineHeightTablet:ne,headLoadGoogleFonts:ie,subHeadLoadGoogleFonts:oe,priceFontSizeType:le,priceFontSize:re,priceFontSizeTablet:se,priceFontSizeMobile:ce,priceFontFamily:ue,priceFontWeight:ge,priceLineHeightType:be,priceLineHeight:he,priceLineHeightTablet:de,priceLineHeightMobile:fe,priceLoadGoogleFonts:me,timeSpace:pe,costSpace:ve,row_gap:_e,rowGapTablet:ye,rowGapMobile:Se,step_gap:we,timeInHours:Te,timeInDays:je,timeInMonths:Oe,timeInYears:He,timeInMins:Ee,time:Le,priceFontStyle:Fe,priceTransform:Ce,priceDecoration:xe,headFontStyle:ke,headTransform:Me,headDecoration:ze,subHeadFontStyle:Ae,subHeadTransform:Ie,subHeadDecoration:Ne,headLetterSpacing:We,headLetterSpacingTablet:Ge,headLetterSpacingMobile:Be,headLetterSpacingType:De,priceLetterSpacing:Pe,priceLetterSpacingTablet:Re,priceLetterSpacingMobile:Ue,priceLetterSpacingType:Ve,subHeadLetterSpacing:qe,subHeadLetterSpacingTablet:$e,subHeadLetterSpacingMobile:Ye,subHeadLetterSpacingType:Je}}=e;M&&M.sizes&&(w=Object(f.a)(M.sizes));const Ke=Ee||Le;let Xe,Qe,Ze;if(!0===ie){const e={google:{families:[W+(G?":"+G:"")]}};Xe=i.a.createElement(l.a,{config:e})}if(!0===oe){const e={google:{families:[Y+(J?":"+J:"")]}};Qe=i.a.createElement(l.a,{config:e})}if(!0===me){const e={google:{families:[ue+(ge?":"+ge:"")]}};Ze=i.a.createElement(l.a,{config:e})}return i.a.createElement(n.Suspense,{fallback:Object(o.a)()},i.a.createElement(c.BlockControls,{key:"index"},i.a.createElement(c.AlignmentToolbar,{value:T,onChange:e=>a({overallAlignment:e})})),i.a.createElement(c.InspectorControls,null,i.a.createElement(g.a,null,i.a.createElement(b.b,b.a.general,i.a.createElement(y.a,{title:Object(s.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(v.a,{setAttributes:a,label:Object(s.__)("Tag","ultimate-addons-for-gutenberg"),data:{value:N,label:"headingTag"},options:[{value:"h1",label:Object(s.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(s.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(s.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(s.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(s.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(s.__)("H6","ultimate-addons-for-gutenberg")}]}),i.a.createElement(v.a,{setAttributes:a,label:Object(s.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:T,label:"overallAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(p.Icon,{icon:Object(m.a)("fa fa-align-left")}),tooltip:Object(s.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(p.Icon,{icon:Object(m.a)("fa fa-align-center")}),tooltip:Object(s.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(p.Icon,{icon:Object(m.a)("fa fa-align-right")}),tooltip:Object(s.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),i.a.createElement(y.a,{title:Object(s.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{onSelectImage:e=>{e&&e.url&&e.type&&"image"===e.type?a({mainimage:e}):a({mainimage:null})},backgroundImage:M,onRemoveImage:()=>{a({mainimage:""})}}),M&&"null"!==M.url&&""!==M.url&&i.a.createElement(p.SelectControl,{label:Object(s.__)("Image Size","ultimate-addons-for-gutenberg"),options:w,value:z,onChange:e=>a({imgSize:e})})),i.a.createElement(y.a,{title:Object(s.__)("Time","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Total Time","ultimate-addons-for-gutenberg"),checked:O,onChange:()=>a({showTotaltime:!O}),help:Object(s.__)("Note: Time is recommended field for schema. It should be ON","ultimate-addons-for-gutenberg")}),O&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{label:Object(s.__)("Years","ultimate-addons-for-gutenberg"),setAttributes:a,value:He,onChange:e=>a({timeInYears:e}),min:1,max:10,displayUnit:!1}),i.a.createElement(h.a,{label:Object(s.__)("Months","ultimate-addons-for-gutenberg"),setAttributes:a,value:Oe,onChange:e=>a({timeInMonths:e}),min:1,max:12,displayUnit:!1}),i.a.createElement(h.a,{label:Object(s.__)("Days","ultimate-addons-for-gutenberg"),setAttributes:a,value:je,onChange:e=>a({timeInDays:e}),min:1,max:31,displayUnit:!1}),i.a.createElement(h.a,{label:Object(s.__)("Hours","ultimate-addons-for-gutenberg"),setAttributes:a,value:Te,onChange:e=>a({timeInHours:e}),min:1,max:24,displayUnit:!1}),i.a.createElement(h.a,{label:Object(s.__)("Minutes","ultimate-addons-for-gutenberg"),setAttributes:a,value:Ke,onChange:e=>a({timeInMins:e}),min:1,max:60,displayUnit:!1}))),i.a.createElement(y.a,{title:Object(s.__)("Cost","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Estimated Cost","ultimate-addons-for-gutenberg"),checked:j,onChange:()=>a({showEstcost:!j}),help:Object(s.__)("Note: Cost is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),i.a.createElement(p.ExternalLink,{href:"https://en.wikipedia.org/wiki/List_of_circulating_currencies"},Object(s.__)("Click here to find your countrys ISO code.","ultimate-addons-for-gutenberg"))),i.a.createElement(y.a,{title:Object(s.__)("Tools","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Tools","ultimate-addons-for-gutenberg"),checked:E,onChange:()=>a({showTools:!E}),help:Object(s.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),E&&i.a.createElement(h.a,{label:Object(s.__)("Number of Tools","ultimate-addons-for-gutenberg"),setAttributes:a,value:F,onChange:e=>{const t=[...x];if(t.length<e){const n=Math.abs(e-t.length);for(let e=0;e<n;e++)t.push({add_required_tools:"- A Computer"+(t.length+1)});a({tools:t})}else{const n=Math.abs(e-t.length),i=t;for(let e=0;e<n;e++)i.pop();a({tools:i})}a({tools_count:e})},min:1,max:50,displayUnit:!1})),i.a.createElement(y.a,{title:Object(s.__)("Materials","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Materials","ultimate-addons-for-gutenberg"),checked:H,onChange:()=>a({showMaterials:!H}),help:Object(s.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),H&&i.a.createElement(h.a,{label:Object(s.__)("Number of Materials","ultimate-addons-for-gutenberg"),setAttributes:a,value:C,onChange:e=>{const t=[...k];if(t.length<e){const n=Math.abs(e-t.length);for(let e=0;e<n;e++)t.push({add_required_materials:"- A WordPress Website"+(t.length+1)});a({materials:t})}else{const n=Math.abs(e-t.length),i=t;for(let e=0;e<n;e++)i.pop();a({materials:i})}a({material_count:e})},min:1,max:50,displayUnit:!1}))),i.a.createElement(b.b,b.a.style,i.a.createElement(y.a,{title:Object(s.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(u.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:A||"",onColorChange:e=>a({headingColor:e})}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:ie,label:"headLoadGoogleFonts"},fontFamily:{value:W,label:"headFontFamily"},fontWeight:{value:G,label:"headFontWeight"},fontStyle:{value:ke,label:"headFontStyle"},transform:{value:Me,label:"headTransform"},decoration:{value:ze,label:"headDecoration"},fontSizeType:{value:B,label:"headFontSizeType"},fontSize:{value:D,label:"headFontSize"},fontSizeMobile:{value:P,label:"headFontSizeMobile"},fontSizeTablet:{value:R,label:"headFontSizeTablet"},lineHeightType:{value:U,label:"headLineHeightType"},lineHeight:{value:V,label:"headLineHeight"},lineHeightMobile:{value:q,label:"headLineHeightMobile"},lineHeightTablet:{value:$,label:"headLineHeightTablet"},letterSpacing:{value:We,label:"headLetterSpacing"},letterSpacingTablet:{value:Ge,label:"headLetterSpacingTablet"},letterSpacingMobile:{value:Be,label:"headLetterSpacingMobile"},letterSpacingType:{value:De,label:"headLetterSpacingType"}})),i.a.createElement(y.a,{title:Object(s.__)("Secondary Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(u.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:L||"",onColorChange:e=>a({showTotaltimecolor:e})}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:me,label:"priceLoadGoogleFonts"},fontFamily:{value:ue,label:"priceFontFamily"},fontWeight:{value:ge,label:"priceFontWeight"},fontStyle:{value:Fe,label:"priceFontStyle"},transform:{value:Ce,label:"priceTransform"},decoration:{value:xe,label:"priceDecoration"},fontSizeType:{value:le,label:"priceFontSizeType"},fontSize:{value:re,label:"priceFontSize"},fontSizeMobile:{value:ce,label:"priceFontSizeMobile"},fontSizeTablet:{value:se,label:"priceFontSizeTablet"},lineHeightType:{value:be,label:"priceLineHeightType"},lineHeight:{value:he,label:"priceLineHeight"},lineHeightMobile:{value:fe,label:"priceLineHeightMobile"},lineHeightTablet:{value:de,label:"priceLineHeightTablet"},letterSpacing:{value:Pe,label:"priceLetterSpacing"},letterSpacingTablet:{value:Re,label:"priceLetterSpacingTablet"},letterSpacingMobile:{value:Ue,label:"priceLetterSpacingMobile"},letterSpacingType:{value:Ve,label:"priceLetterSpacingType"}})),i.a.createElement(y.a,{title:Object(s.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(u.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:I||"",onColorChange:e=>a({subHeadingColor:e})}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:oe,label:"subHeadLoadGoogleFonts"},fontFamily:{value:Y,label:"subHeadFontFamily"},fontWeight:{value:J,label:"subHeadFontWeight"},fontStyle:{value:Ae,label:"subHeadFontStyle"},transform:{value:Ie,label:"subHeadTransform"},decoration:{value:Ne,label:"subHeadDecoration"},fontSizeType:{value:X,label:"subHeadFontSizeType"},fontSize:{value:K,label:"subHeadFontSize"},fontSizeMobile:{value:Q,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:Z,label:"subHeadFontSizeTablet"},lineHeightType:{value:te,label:"subHeadLineHeightType"},lineHeight:{value:ee,label:"subHeadLineHeight"},lineHeightMobile:{value:ae,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:ne,label:"subHeadLineHeightTablet"},letterSpacing:{value:qe,label:"subHeadLetterSpacing"},letterSpacingTablet:{value:$e,label:"subHeadLetterSpacingTablet"},letterSpacingMobile:{value:Ye,label:"subHeadLetterSpacingMobile"},letterSpacingType:{value:Je,label:"subHeadLetterSpacingType"}})),i.a.createElement(y.a,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},O&&i.a.createElement(h.a,{label:Object(s.__)("Time Margin","ultimate-addons-for-gutenberg"),setAttributes:a,value:pe,onChange:e=>a({timeSpace:e}),min:0,max:50,displayUnit:!1}),j&&i.a.createElement(h.a,{label:Object(s.__)("Cost Margin","ultimate-addons-for-gutenberg"),setAttributes:a,value:ve,onChange:e=>a({costSpace:e}),min:0,max:50,displayUnit:!1}),i.a.createElement(_.a,{label:Object(s.__)("Row Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:_e,label:"row_gap"},tablet:{value:ye,label:"rowGapTablet"},mobile:{value:Se,label:"rowGapMobile"}},min:0,max:200,displayUnit:!1,setAttributes:a}),i.a.createElement(h.a,{label:Object(s.__)("Gap Between Steps","ultimate-addons-for-gutenberg"),setAttributes:a,value:we,onChange:e=>a({step_gap:e}),min:0,max:200,displayUnit:!1}))),i.a.createElement(b.b,S({},b.a.advance,{parentProps:e})))),Xe,Qe,Ze)};t.default=i.a.memo(T)}}]);