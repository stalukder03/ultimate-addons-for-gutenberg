(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[90],{198:function(e,t,l){"use strict";var a,i,n=l(35),o=l.n(n),r=l(199),u=l.n(r),s=l(2);if(void 0===c)var c=[];const d=e=>{const[t,l]=Object(s.useState)([]);Object(s.useEffect)(()=>{o()},[]),Object(s.useEffect)(()=>{const{onStatus:l,config:a}=e;void 0!==t.status&&l(t.status),a!==t.config&&o()},[e]);const a=()=>{l({status:"loading"})},i=()=>{l({status:"active"})},n=()=>{l({status:"inactive"})},o=()=>{var t;c.includes(e.config.google.families[0])||(u.a.load({...e.config,loading:a,active:i,inactive:n}),t=e.config.google.families[0],c.includes(t)||c.push(t))},{children:r}=e;return r||null};d.propTypes={config:null===(a=o.a.object)||void 0===a?void 0:a.isRequired,children:o.a.element,onStatus:null===(i=o.a.func)||void 0===i?void 0:i.isRequired},d.defaultProps={onStatus:()=>{}},t.a=d},199:function(e,t,l){var a;!function(){function i(e,t,l){return e.call.apply(e.bind,arguments)}function n(e,t,l){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var l=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(l,a),e.apply(t,l)}}return function(){return e.apply(t,arguments)}}function o(e,t,l){return(o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:n).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function c(e,t,l,a){if(t=e.c.createElement(t),l)for(var i in l)l.hasOwnProperty(i)&&("style"==i?t.style.cssText=l[i]:t.setAttribute(i,l[i]));return a&&t.appendChild(e.c.createTextNode(a)),t}function d(e,t,l){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(l,e.lastChild)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t,l){t=t||[],l=l||[];for(var a=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var n=!1,o=0;o<a.length;o+=1)if(t[i]===a[o]){n=!0;break}n||a.push(t[i])}for(t=[],i=0;i<a.length;i+=1){for(n=!1,o=0;o<l.length;o+=1)if(a[i]===l[o]){n=!0;break}n||t.push(a[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(e,t){for(var l=e.className.split(/\s+/),a=0,i=l.length;a<i;a++)if(l[a]==t)return!0;return!1}function f(e,t,l){function a(){r&&i&&n&&(r(o),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,n=!0,o=null,r=l||null;s?(t.onload=function(){i=!0,a()},t.onerror=function(){i=!0,o=Error("Stylesheet failed to load"),a()}):setTimeout((function(){i=!0,a()}),0),d(e,"head",t)}function p(e,t,l,a){var i=e.c.getElementsByTagName("head")[0];if(i){var n=c(e,"script",{src:t}),o=!1;return n.onload=n.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,l&&l(null),n.onload=n.onreadystatechange=null,"HEAD"==n.parentNode.tagName&&i.removeChild(n))},i.appendChild(n),setTimeout((function(){o||(o=!0,l&&l(Error("Script load timeout")))}),a||5e3),n}return null}function m(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,C(e)}}function _(e,t){e.c=t,C(e)}function C(e){0==e.a&&e.c&&(e.c(),e.c=null)}function T(e){this.a=e||"-"}function y(e,t){this.c=e,this.f=4,this.a="n";var l=(t||"n4").match(/^([nio])([1-9])$/i);l&&(this.a=l[1],this.f=parseInt(l[2],10))}function w(e){var t=[];e=e.split(/,\s*/);for(var l=0;l<e.length;l++){var a=e[l].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function j(e){return e.a+e.f}function H(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function P(e){var t=4,l="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(l=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),l+t}function O(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new T("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function S(e){if(e.g){var t=h(e.f,e.a.c("wf","active")),l=[],a=[e.a.c("wf","loading")];t||l.push(e.a.c("wf","inactive")),b(e.f,l,a)}M(e,"inactive")}function M(e,t,l){e.j&&e.h[t]&&(l?e.h[t](l.c,j(l)):e.h[t]())}function E(){this.c={}}function F(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function A(e){d(e.c,"body",e.a)}function L(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+w(e.c)+";font-style:"+H(e)+";font-weight:"+e.f+"00;"}function k(e,t,l,a,i,n){this.g=e,this.j=t,this.a=a,this.c=l,this.f=i||3e3,this.h=n||void 0}function x(e,t,l,a,i,n,o){this.v=e,this.B=t,this.c=l,this.a=a,this.s=o||"BESbswy",this.f={},this.w=i||3e3,this.u=n||null,this.m=this.j=this.h=this.g=null,this.g=new F(this.c,this.s),this.h=new F(this.c,this.s),this.j=new F(this.c,this.s),this.m=new F(this.c,this.s),e=L(e=new y(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=e,e=L(e=new y(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=e,e=L(e=new y("serif",j(this.a))),this.j.a.style.cssText=e,e=L(e=new y("sans-serif",j(this.a))),this.m.a.style.cssText=e,A(this.g),A(this.h),A(this.j),A(this.m)}T.prototype.c=function(e){for(var t=[],l=0;l<arguments.length;l++)t.push(arguments[l].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},k.prototype.start=function(){var e=this.c.o.document,t=this,l=r(),a=new Promise((function(a,i){!function n(){r()-l>=t.f?i():e.fonts.load(function(e){return H(e)+" "+e.f+"00 300px "+w(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(n,25)}),(function(){i()}))}()})),i=null,n=new Promise((function(e,l){i=setTimeout(l,t.f)}));Promise.race([n,a]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var W={D:"serif",C:"sans-serif"},z=null;function B(){if(null===z){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);z=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return z}function Z(e,t,l){for(var a in W)if(W.hasOwnProperty(a)&&t===e.f[W[a]]&&l===e.f[W[a]])return!0;return!1}function G(e,t){setTimeout(o((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),t(this.a)}),e),0)}function R(e,t,l){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=l}x.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var l,a=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(l=a===t.f.serif&&i===t.f["sans-serif"])||(l=B()&&Z(t,a,i)),l?r()-t.A>=t.w?B()&&Z(t,a,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?G(t,t.v):G(t,t.B):function(t){setTimeout(o((function(){e(this)}),t),50)}(t):G(t,t.v)}(this)};var I=null;function V(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&b(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),M(e,"active")):S(e.a))}function N(e){this.j=e,this.a=new E,this.h=0,this.f=this.g=!0}function U(e,t,l,a,i){var n=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,r=a||{};if(0===l.length&&n)S(t.a);else{t.f+=l.length,n&&(t.j=n);var u,s=[];for(u=0;u<l.length;u++){var c=l[u],d=r[c.c],g=t.a,h=c;if(g.g&&b(g.f,[g.a.c("wf",h.c,j(h).toString(),"loading")]),M(g,"fontloading",h),g=null,null===I)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var f=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);I=h?42<parseInt(h[1],10):!f}else I=!1;g=I?new k(o(t.g,t),o(t.h,t),t.c,c,t.s,d):new x(o(t.g,t),o(t.h,t),t.c,c,t.s,e,d),s.push(g)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function D(e,t){this.c=e,this.a=t}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}R.prototype.g=function(e){var t=this.a;t.g&&b(t.f,[t.a.c("wf",e.c,j(e).toString(),"active")],[t.a.c("wf",e.c,j(e).toString(),"loading"),t.a.c("wf",e.c,j(e).toString(),"inactive")]),M(t,"fontactive",e),this.m=!0,V(this)},R.prototype.h=function(e){var t=this.a;if(t.g){var l=h(t.f,t.a.c("wf",e.c,j(e).toString(),"active")),a=[],i=[t.a.c("wf",e.c,j(e).toString(),"loading")];l||a.push(t.a.c("wf",e.c,j(e).toString(),"inactive")),b(t.f,a,i)}M(t,"fontinactive",e),V(this)},N.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,l){var a=[],i=l.timeout;!function(e){e.g&&b(e.f,[e.a.c("wf","loading")]),M(e,"loading")}(t),a=function(e,t,l){var a,i=[];for(a in t)if(t.hasOwnProperty(a)){var n=e.c[a];n&&i.push(n(t[a],l))}return i}(e.a,l,e.c);var n=new R(e.c,t,i);for(e.h=a.length,t=0,l=a.length;t<l;t++)a[t].load((function(t,l,a){U(e,n,t,l,a)}))}(this,new O(this.c,e),e)},D.prototype.load=function(e){var t=this,l=t.a.projectId,a=t.a.version;if(l){var i=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+l+".js"+(a?"?v="+a:""),(function(a){a?e([]):(i["__MonotypeConfiguration__"+l]=function(){return t.a},function t(){if(i["__mti_fntLst"+l]){var a,n=i["__mti_fntLst"+l](),o=[];if(n)for(var r=0;r<n.length;r++){var u=n[r].fontfamily;null!=n[r].fontStyle&&null!=n[r].fontWeight?(a=n[r].fontStyle+n[r].fontWeight,o.push(new y(u,a))):o.push(new y(u))}e(o)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+l}else e([])},q.prototype.load=function(e){var t,l,a=this.a.urls||[],i=this.a.families||[],n=this.a.testStrings||{},o=new m;for(t=0,l=a.length;t<l;t++)f(this.c,a[t],v(o));var r=[];for(t=0,l=i.length;t<l;t++)if((a=i[t].split(":"))[1])for(var u=a[1].split(","),s=0;s<u.length;s+=1)r.push(new y(a[0],u[s]));else r.push(new y(a[0]));_(o,(function(){e(r,n)}))};var J="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Y={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var le={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,l=this.c,a=new $(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var l=t.length,a=0;a<l;a++){var i=t[a].split(":");3==i.length&&e.f.push(i.pop());var n="";2==i.length&&""!=i[1]&&(n=":"),e.a.push(i.join(n))}}(a,i);var n=new K(i);!function(e){for(var t=e.f.length,l=0;l<t;l++){var a=e.f[l].split(":"),i=a[0].replace(/\+/g," "),n=["n4"];if(2<=a.length){var o;if(o=[],r=a[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var c;if((c=r[s]).match(/^[\w-]+$/))if(null==(d=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=d[2])||""==c?"n":Y[c],null==(d=d[1])||""==d)d="4";else var d=Q[d]||(isNaN(d)?"4":d.substr(0,1));c=[c,d].join("")}else c="";c&&o.push(c)}0<o.length&&(n=o),3==a.length&&(o=[],0<(a=(a=a[2])?a.split(","):o).length&&(a=X[a[0]])&&(e.c[i]=a))}for(e.c[i]||(a=X[i])&&(e.c[i]=a),a=0;a<n.length;a+=1)e.a.push(new y(i,n[a]))}}(n),f(l,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,l=[],a=0;a<t;a++)l.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+l.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),_(t,(function(){e(n.a,n.c,le)}))},ae.prototype.load=function(e){var t=this.a.id,l=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(l.Typekit&&l.Typekit.config&&l.Typekit.config.fn){t=l.Typekit.config.fn;for(var a=[],i=0;i<t.length;i+=2)for(var n=t[i],o=t[i+1],r=0;r<o.length;r++)a.push(new y(n,o[r]));try{l.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,l=this.c.o,a=this;t?(l.__webfontfontdeckmodule__||(l.__webfontfontdeckmodule__={}),l.__webfontfontdeckmodule__[t]=function(t,l){for(var i=0,n=l.fonts.length;i<n;++i){var o=l.fonts[i];a.a.push(new y(o.name,P("font-weight:"+o.weight+";font-style:"+o.style)))}e(a.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ne=new N(window);ne.a.c.custom=function(e,t){return new q(t,e)},ne.a.c.fontdeck=function(e,t){return new ie(t,e)},ne.a.c.monotype=function(e,t){return new D(t,e)},ne.a.c.typekit=function(e,t){return new ae(t,e)},ne.a.c.google=function(e,t){return new te(t,e)};var oe={load:o(ne.load,ne)};void 0===(a=function(){return oe}.call(t,l,t,e))||(e.exports=a)}()},532:function(e,t,l){"use strict";l.r(t);var a=l(0),i=l.n(a),n=l(8),o=l(31),r=l(198),u=l(1),s=l(9),c=l(18),d=l(21),g=l(16),b=l(51),h=l(19),f=l(80),p=l(24),m=l(11),v=l(20),_=l(47),C=l(84);const T=[{defaultAttributes:_.a},{defaultChildAttributes:C.a},{value:"preset-1",label:Object(u.__)("Preset 1","ultimate-addons-for-gutenberg"),attributes:[{label:"imgAlign",value:"side"},{label:"imageAlignment",value:"middle"},{label:"imageWidth",value:150},{label:"imgPaddingRight",value:10},{label:"columnGap",value:50},{label:"contentPaddingTop",value:25},{label:"contentPaddingBottom",value:35},{label:"columns",value:2},{label:"headingAlign",value:""},{label:"seperatorStyle",value:"dashed"},{label:"seperatorWidth",value:100},{label:"seperatorThickness",value:1},{label:"seperatorColor",value:"#dddddd"},{label:"imgPaddingBottom",value:""},{label:"imagePosition",value:"left"}],childAttributes:[{label:"image",value:{url:uagb_blocks_info.uagb_url+"/admin/assets/images/uag-placeholder.svg"}}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M56 27.5C56 27.7761 55.7761 28 55.5 28H28.5C28.2239 28 28 27.7761 28 27.5C28 27.2239 28.2239 27 28.5 27H55.5C55.7761 27 56 27.2239 56 27.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66 23.5C66 23.7761 65.7761 24 65.5 24H28.5C28.2239 24 28 23.7761 28 23.5C28 23.2239 28.2239 23 28.5 23H65.5C65.7761 23 66 23.2239 66 23.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66 16C66 16.5523 65.5523 17 65 17H61C60.4477 17 60 16.5523 60 16C60 15.4477 60.4477 15 61 15H65C65.5523 15 66 15.4477 66 16Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M54 16C54 16.5523 53.5523 17 53 17H29C28.4477 17 28 16.5523 28 16C28 15.4477 28.4477 15 29 15H53C53.5523 15 54 15.4477 54 16Z" /><path d="M7 17C7 15.8954 7.89543 15 9 15H18C19.1046 15 20 15.8954 20 17V26C20 27.1046 19.1046 28 18 28H9C7.89543 28 7 27.1046 7 26V17Z" stroke="" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M56 55.5C56 55.7761 55.7761 56 55.5 56H28.5C28.2239 56 28 55.7761 28 55.5C28 55.2239 28.2239 55 28.5 55H55.5C55.7761 55 56 55.2239 56 55.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66 51.5C66 51.7761 65.7761 52 65.5 52H28.5C28.2239 52 28 51.7761 28 51.5C28 51.2239 28.2239 51 28.5 51H65.5C65.7761 51 66 51.2239 66 51.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66 44C66 44.5523 65.5523 45 65 45H61C60.4477 45 60 44.5523 60 44C60 43.4477 60.4477 43 61 43H65C65.5523 43 66 43.4477 66 44Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M54 44C54 44.5523 53.5523 45 53 45H29C28.4477 45 28 44.5523 28 44C28 43.4477 28.4477 43 29 43H53C53.5523 43 54 43.4477 54 44Z" /><path d="M7 45C7 43.8954 7.89543 43 9 43H18C19.1046 43 20 43.8954 20 45V54C20 55.1046 19.1046 56 18 56H9C7.89543 56 7 55.1046 7 54V45Z" stroke="" stroke-width="2"/></svg>'},{value:"preset-2",label:Object(u.__)("Preset 2","ultimate-addons-for-gutenberg"),attributes:[{label:"columns",value:2},{label:"imgAlign",value:"top"},{label:"headingAlign",value:"center"},{label:"imageWidth",value:150},{label:"seperatorStyle",value:"none"},{label:"imgPaddingBottom",value:20},{label:"columnGap",value:40},{label:"contentPaddingTop",value:5},{label:"contentPaddingBottom",value:5},{label:"imageAlignment",value:""},{label:"imgPaddingRight",value:""}],childAttributes:[{label:"image",value:{url:uagb_blocks_info.uagb_url+"/admin/assets/images/uag-placeholder.svg"}}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M50 46.5C50 46.7761 49.7761 47 49.5 47H22.5C22.2239 47 22 46.7761 22 46.5C22 46.2239 22.2239 46 22.5 46H49.5C49.7761 46 50 46.2239 50 46.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M55 42.5C55 42.7761 54.7761 43 54.5 43H17.5C17.2239 43 17 42.7761 17 42.5C17 42.2239 17.2239 42 17.5 42H54.5C54.7761 42 55 42.2239 55 42.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39 51C39 51.5523 38.5523 52 38 52H34C33.4477 52 33 51.5523 33 51C33 50.4477 33.4477 50 34 50H38C38.5523 50 39 50.4477 39 51Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49 38C49 38.5523 48.5523 39 48 39H24C23.4477 39 23 38.5523 23 38C23 37.4477 23.4477 37 24 37H48C48.5523 37 49 37.4477 49 38Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.8 22C31.3582 22 31 22.3582 31 22.8V31.2C31 31.6418 31.3582 32 31.8 32H40.2C40.6418 32 41 31.6418 41 31.2V22.8C41 22.3582 40.6418 22 40.2 22H31.8ZM31.8 20C30.2536 20 29 21.2536 29 22.8V31.2C29 32.7464 30.2536 34 31.8 34H40.2C41.7464 34 43 32.7464 43 31.2V22.8C43 21.2536 41.7464 20 40.2 20H31.8Z"/></svg>'},{value:"preset-3",label:Object(u.__)("Preset 3","ultimate-addons-for-gutenberg"),attributes:[{label:"columns",value:1},{label:"imgAlign",value:"top"},{label:"headingAlign",value:"center"},{label:"imageWidth",value:150},{label:"seperatorStyle",value:"solid"},{label:"seperatorWidth",value:33},{label:"seperatorThickness",value:1},{label:"seperatorColor",value:"#dddddd"},{label:"imgPaddingBottom",value:20},{label:"columnGap",value:40},{label:"contentPaddingTop",value:10},{label:"contentPaddingBottom",value:10},{label:"imageAlignment",value:""},{label:"imgPaddingRight",value:""}],childAttributes:[{label:"image.url",value:""}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M47 53.5C47 53.7761 46.8241 54 46.6071 54H25.3929C25.1759 54 25 53.7761 25 53.5C25 53.2239 25.1759 53 25.3929 53H46.6071C46.8241 53 47 53.2239 47 53.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M55 49.5C55 49.7761 54.7761 50 54.5 50H17.5C17.2239 50 17 49.7761 17 49.5C17 49.2239 17.2239 49 17.5 49H54.5C54.7761 49 55 49.2239 55 49.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M39 58C39 58.5523 38.5523 59 38 59H34C33.4477 59 33 58.5523 33 58C33 57.4477 33.4477 57 34 57H38C38.5523 57 39 57.4477 39 58Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M47 45C47 45.5523 46.6212 46 46.1538 46H25.8462C25.3788 46 25 45.5523 25 45C25 44.4477 25.3788 44 25.8462 44H46.1538C46.6212 44 47 44.4477 47 45Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M47 28.5C47 28.7761 46.8241 29 46.6071 29H25.3929C25.1759 29 25 28.7761 25 28.5C25 28.2239 25.1759 28 25.3929 28H46.6071C46.8241 28 47 28.2239 47 28.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M55 24.5C55 24.7761 54.7761 25 54.5 25H17.5C17.2239 25 17 24.7761 17 24.5C17 24.2239 17.2239 24 17.5 24H54.5C54.7761 24 55 24.2239 55 24.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M39 33C39 33.5523 38.5523 34 38 34H34C33.4477 34 33 33.5523 33 33C33 32.4477 33.4477 32 34 32H38C38.5523 32 39 32.4477 39 33Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M47 20C47 20.5523 46.6212 21 46.1538 21H25.8462C25.3788 21 25 20.5523 25 20C25 19.4477 25.3788 19 25.8462 19H46.1538C46.6212 19 47 19.4477 47 20Z" /></svg>'},{value:"preset-4",label:Object(u.__)("Preset 4","ultimate-addons-for-gutenberg"),attributes:[{label:"columns",value:2},{label:"imgAlign",value:"side"},{label:"headingAlign",value:"center"},{label:"imageWidth",value:100},{label:"seperatorStyle",value:"solid"},{label:"seperatorWidth",value:33},{label:"seperatorThickness",value:1},{label:"seperatorColor",value:"#dddddd"},{label:"imgPaddingBottom",value:""},{label:"columnGap",value:50},{label:"contentPaddingTop",value:10},{label:"contentPaddingBottom",value:10},{label:"imageAlignment",value:""},{label:"imgPaddingRight",value:""},{label:"imagePosition",value:"left"}],childAttributes:[{label:"image",value:{url:""}}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M33 31C33 31.5523 32.7015 32 32.3333 32H29.6667C29.2985 32 29 31.5523 29 31C29 30.4477 29.2985 30 29.6667 30H32.3333C32.7015 30 33 30.4477 33 31Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M33 36C33 36.5523 32.7015 37 32.3333 37H29.6667C29.2985 37 29 36.5523 29 36C29 35.4477 29.2985 35 29.6667 35H32.3333C32.7015 35 33 35.4477 33 36Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M33 41C33 41.5523 32.7015 42 32.3333 42H29.6667C29.2985 42 29 41.5523 29 41C29 40.4477 29.2985 40 29.6667 40H32.3333C32.7015 40 33 40.4477 33 41Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M27 31C27 31.5523 26.6556 32 26.2308 32H7.76923C7.3444 32 7 31.5523 7 31C7 30.4477 7.3444 30 7.76923 30H26.2308C26.6556 30 27 30.4477 27 31Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M27 36C27 36.5523 26.6556 37 26.2308 37H7.76923C7.3444 37 7 36.5523 7 36C7 35.4477 7.3444 35 7.76923 35H26.2308C26.6556 35 27 35.4477 27 36Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M27 41C27 41.5523 26.6556 42 26.2308 42H7.76923C7.3444 42 7 41.5523 7 41C7 40.4477 7.3444 40 7.76923 40H26.2308C26.6556 40 27 40.4477 27 41Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M65 31C65 31.5523 64.7015 32 64.3333 32H61.6667C61.2985 32 61 31.5523 61 31C61 30.4477 61.2985 30 61.6667 30H64.3333C64.7015 30 65 30.4477 65 31Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M65 36C65 36.5523 64.7015 37 64.3333 37H61.6667C61.2985 37 61 36.5523 61 36C61 35.4477 61.2985 35 61.6667 35H64.3333C64.7015 35 65 35.4477 65 36Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M65 41C65 41.5523 64.7015 42 64.3333 42H61.6667C61.2985 42 61 41.5523 61 41C61 40.4477 61.2985 40 61.6667 40H64.3333C64.7015 40 65 40.4477 65 41Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M59 31C59 31.5523 58.6556 32 58.2308 32H39.7692C39.3444 32 39 31.5523 39 31C39 30.4477 39.3444 30 39.7692 30H58.2308C58.6556 30 59 30.4477 59 31Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M59 36C59 36.5523 58.6556 37 58.2308 37H39.7692C39.3444 37 39 36.5523 39 36C39 35.4477 39.3444 35 39.7692 35H58.2308C58.6556 35 59 35.4477 59 36Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M59 41C59 41.5523 58.6556 42 58.2308 42H39.7692C39.3444 42 39 41.5523 39 41C39 40.4477 39.3444 40 39.7692 40H58.2308C58.6556 40 59 40.4477 59 41Z" /></svg>'}];var y=Object(v.applyFilters)("uag_price_list_presets",T),w=l(120),j=l(4),H=l(6),P=l(15);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}const S=e=>{e=e.parentProps;const{setAttributes:t,attributes:l,deviceType:v}=e,{menu_item_count:_,titleSpace:C,titleSpaceTablet:T,titleSpaceMobile:S,columns:M,tcolumns:E,mcolumns:F,rowGap:A,rowGapTablet:L,rowGapMobile:k,columnGap:x,columnGapTablet:W,columnGapMobile:z,priceColor:B,descColor:Z,titleColor:G,seperatorStyle:R,seperatorWidth:I,seperatorWidthTablet:V,seperatorWidthMobile:N,seperatorThickness:U,seperatorColor:D,priceLoadGoogleFonts:q,titleLoadGoogleFonts:$,descLoadGoogleFonts:J,titleFontSizeType:K,titleFontSize:X,titleFontSizeTablet:Q,titleFontSizeMobile:Y,titleFontFamily:ee,titleFontWeight:te,titleFontStyle:le,titleLineHeightType:ae,titleLineHeight:ie,titleLineHeightTablet:ne,titleLineHeightMobile:oe,priceFontSizeType:re,priceFontSize:ue,priceFontSizeTablet:se,priceFontSizeMobile:ce,priceFontFamily:de,priceFontWeight:ge,priceFontStyle:be,priceLineHeightType:he,priceLineHeight:fe,priceLineHeightTablet:pe,priceLineHeightMobile:me,descFontSizeType:ve,descFontSize:_e,descFontSizeTablet:Ce,descFontSizeMobile:Te,descFontFamily:ye,descFontWeight:we,descFontStyle:je,descLineHeightType:He,descLineHeight:Pe,descLineHeightTablet:Oe,descLineHeightMobile:Se,headingTag:Me,imagePosition:Ee,imageAlignment:Fe,imageSize:Ae,imageWidth:Le,imageWidthTablet:ke,imageWidthMobile:xe,stack:We,imageWidthType:ze,seperatorWidthType:Be,rowGapType:Ze,columnGapType:Ge,titleSpaceType:Re,contentPaddingTop:Ie,contentPaddingRight:Ve,contentPaddingBottom:Ne,contentPaddingLeft:Ue,contentPaddingTopTablet:De,contentPaddingRightTablet:qe,contentPaddingBottomTablet:$e,contentPaddingLeftTablet:Je,contentPaddingTopMobile:Ke,contentPaddingRightMobile:Xe,contentPaddingBottomMobile:Qe,contentPaddingLeftMobile:Ye,contentPaddingUnit:et,contentMobilePaddingUnit:tt,contentTabletPaddingUnit:lt,contentSpacingLink:at,imgPaddingTop:it,imgPaddingRight:nt,imgPaddingBottom:ot,imgPaddingLeft:rt,imgPaddingTopTablet:ut,imgPaddingRightTablet:st,imgPaddingBottomTablet:ct,imgPaddingLeftTablet:dt,imgPaddingTopMobile:gt,imgPaddingRightMobile:bt,imgPaddingBottomMobile:ht,imgPaddingLeftMobile:ft,imgPaddingUnit:pt,imgMobilePaddingUnit:mt,imgTabletPaddingUnit:vt,imgSpacingLink:_t,titleTransform:Ct,titleDecoration:Tt,descTransform:yt,descDecoration:wt,priceTransform:jt,priceDecoration:Ht,headingAlign:Pt,imgAlign:Ot}=l;let St,Mt,Et;if(!0===$){const e={google:{families:[ee+(te?":"+te:"")]}};St=i.a.createElement(r.a,{config:e})}if(!0===J){const e={google:{families:[ye+(we?":"+we:"")]}};Mt=i.a.createElement(r.a,{config:e})}if(!0===q){const e={google:{families:[de+(ge?":"+ge:"")]}};Et=i.a.createElement(r.a,{config:e})}const Ft=[{value:"thumbnail",label:Object(u.__)("Thumbnail")},{value:"medium",label:Object(u.__)("Medium")},{value:"full",label:Object(u.__)("Large")}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(j.InspectorControls,null,i.a.createElement(f.a,null,i.a.createElement(p.b,p.a.general,i.a.createElement(P.a,{title:Object(u.__)("Presets","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(w.a,{setAttributes:t,presets:y,presetInputType:"radioImage"})),i.a.createElement(P.a,{title:Object(u.__)("General"),initialOpen:!0},i.a.createElement(d.a,{label:Object(u.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:M,label:"columns"},tablet:{value:E,label:"tcolumns"},mobile:{value:F,label:"mcolumns"}},min:1,max:Math.min(3,_),displayUnit:!1,setAttributes:t}),i.a.createElement(h.a,{setAttributes:t,label:Object(u.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:Me,label:"headingTag"},options:[{value:"h1",label:Object(u.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(u.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(u.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(u.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(u.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(u.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(u.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(u.__)("P","ultimate-addons-for-gutenberg")}]})),i.a.createElement(P.a,{title:Object(u.__)("Image"),initialOpen:!1},i.a.createElement(h.a,{setAttributes:t,label:Object(u.__)("Position","ultimate-addons-for-gutenberg"),data:{value:Ot,label:"imgAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top"},{value:"side",label:"Side"}],showIcons:!1}),"side"===Ot&&i.a.createElement(h.a,{setAttributes:t,label:Object(u.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:Ee,label:"imagePosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(H.Icon,{icon:Object(m.a)("fa fa-align-left")}),tooltip:Object(u.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(H.Icon,{icon:Object(m.a)("fa fa-align-right")}),tooltip:Object(u.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),"top"===Ot&&i.a.createElement(h.a,{setAttributes:t,label:Object(u.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:Pt,label:"headingAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(H.Icon,{icon:Object(m.a)("fa fa-align-left")}),tooltip:Object(u.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(H.Icon,{icon:Object(m.a)("fa fa-align-center")}),tooltip:Object(u.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(H.Icon,{icon:Object(m.a)("fa fa-align-right")}),tooltip:Object(u.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),("left"===Ee||"right"===Ee)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{setAttributes:t,label:Object(u.__)("Stack on","ultimate-addons-for-gutenberg"),data:{value:We,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:"None"},{value:"tablet",label:"Tablet"},{value:"mobile",label:"Mobile"}],help:Object(u.__)("Note: Choose on what breakpoint the Images will stack."),showIcons:!1}),i.a.createElement(h.a,{setAttributes:t,label:Object(u.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),data:{value:Fe,label:"imageAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top"},{value:"middle",label:"Middle"}],showIcons:!1})),i.a.createElement(H.SelectControl,{label:Object(u.__)("Size"),options:Ft,value:Ae,onChange:l=>{Object(s.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.imageSize=l}),t({imageSize:l})}}),i.a.createElement(d.a,{label:Object(u.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:Le,label:"imageWidth"},tablet:{value:ke,label:"imageWidthTablet"},mobile:{value:xe,label:"imageWidthMobile"}},min:0,max:500,unit:{value:ze,label:"imageWidthType"},units:[{name:Object(u.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(u.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:t}))),i.a.createElement(p.b,p.a.style,i.a.createElement(P.a,{title:Object(u.__)("Title"),initialOpen:!1},i.a.createElement(g.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:G||"",onColorChange:e=>t({titleColor:e})}),i.a.createElement(o.a,{label:Object(u.__)("Typography"),attributes:l,setAttributes:t,loadGoogleFonts:{value:$,label:"titleLoadGoogleFonts"},fontFamily:{value:ee,label:"titleFontFamily"},fontWeight:{value:te,label:"titleFontWeight"},fontStyle:{value:le,label:"titleFontStyle"},fontSizeType:{value:K,label:"titleFontSizeType"},fontSize:{value:X,label:"titleFontSize"},fontSizeMobile:{value:Y,label:"titleFontSizeMobile"},fontSizeTablet:{value:Q,label:"titleFontSizeTablet"},lineHeightType:{value:ae,label:"titleLineHeightType"},lineHeight:{value:ie,label:"titleLineHeight"},lineHeightMobile:{value:oe,label:"titleLineHeightMobile"},lineHeightTablet:{value:ne,label:"titleLineHeightTablet"},transform:{value:Ct,label:"titleTransform"},decoration:{value:Tt,label:"titleDecoration"}}),i.a.createElement(d.a,{label:Object(u.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:C,label:"titleSpace"},tablet:{value:T,label:"titleSpaceTablet"},mobile:{value:S,label:"titleSpaceMobile"}},min:0,max:50,unit:{value:Re,label:"titleSpaceType"},units:[{name:Object(u.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(u.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:t})),i.a.createElement(P.a,{title:Object(u.__)("Separator"),initialOpen:!1},i.a.createElement(H.SelectControl,{label:Object(u.__)("Style"),value:R,onChange:e=>t({seperatorStyle:e}),options:[{value:"none",label:Object(u.__)("None")},{value:"solid",label:Object(u.__)("Solid")},{value:"dotted",label:Object(u.__)("Dotted")},{value:"dashed",label:Object(u.__)("Dashed")},{value:"double",label:Object(u.__)("Double")},{value:"groove",label:Object(u.__)("Groove")},{value:"inset",label:Object(u.__)("Inset")},{value:"outset",label:Object(u.__)("Outset")},{value:"ridge",label:Object(u.__)("Ridge")}]}),"none"!==R&&i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{label:Object(u.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:I,label:"seperatorWidth"},tablet:{value:V,label:"seperatorWidthTablet"},mobile:{value:N,label:"seperatorWidthMobile"}},min:0,max:100,unit:{value:Be,label:"seperatorWidthType"},units:[{name:Object(u.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(u.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(u.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],setAttributes:t}),i.a.createElement(c.a,{label:Object(u.__)("Thickness"),setAttributes:t,value:U,onChange:e=>t({seperatorThickness:e}),min:0,max:20,displayUnit:!1}),i.a.createElement(g.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:D||"",onColorChange:e=>t({seperatorColor:e})}))),i.a.createElement(P.a,{title:Object(u.__)("Image"),initialOpen:!1},i.a.createElement(b.a,O({},e,{label:Object(u.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:it,label:"imgPaddingTop"},valueRight:{value:nt,label:"imgPaddingRight"},valueBottom:{value:ot,label:"imgPaddingBottom"},valueLeft:{value:rt,label:"imgPaddingLeft"},valueTopTablet:{value:ut,label:"imgPaddingTopTablet"},valueRightTablet:{value:st,label:"imgPaddingRightTablet"},valueBottomTablet:{value:ct,label:"imgPaddingBottomTablet"},valueLeftTablet:{value:dt,label:"imgPaddingLeftTablet"},valueTopMobile:{value:gt,label:"imgPaddingTopMobile"},valueRightMobile:{value:bt,label:"imgPaddingRightMobile"},valueBottomMobile:{value:ht,label:"imgPaddingBottomMobile"},valueLeftMobile:{value:ft,label:"imgPaddingLeftMobile"},unit:{value:pt,label:"imgPaddingUnit"},mUnit:{value:mt,label:"imgMobilePaddingUnit"},tUnit:{value:vt,label:"imgTabletPaddingUnit"},deviceType:v,attributes:l,setAttributes:t,link:{value:_t,label:"imgSpacingLink"}}))),i.a.createElement(P.a,{title:Object(u.__)("Content"),initialOpen:!1},i.a.createElement(g.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Z||"",onColorChange:e=>t({descColor:e})}),i.a.createElement(o.a,{label:Object(u.__)("Typography"),attributes:l,setAttributes:t,loadGoogleFonts:{value:J,label:"descLoadGoogleFonts"},fontFamily:{value:ye,label:"descFontFamily"},fontWeight:{value:we,label:"descFontWeight"},fontStyle:{value:je,label:"descFontStyle"},fontSizeType:{value:ve,label:"descFontSizeType"},fontSize:{value:_e,label:"descFontSize"},fontSizeMobile:{value:Te,label:"descFontSizeMobile"},fontSizeTablet:{value:Ce,label:"descFontSizeTablet"},lineHeightType:{value:He,label:"descLineHeightType"},lineHeight:{value:Pe,label:"descLineHeight"},lineHeightMobile:{value:Se,label:"descLineHeightMobile"},lineHeightTablet:{value:Oe,label:"descLineHeightTablet"},transform:{value:yt,label:"descTransform"},decoration:{value:wt,label:"descDecoration"}})),i.a.createElement(P.a,{title:Object(u.__)("Price"),initialOpen:!1},i.a.createElement(g.a,{label:Object(u.__)("Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:e=>t({priceColor:e})}),i.a.createElement(o.a,{label:Object(u.__)("Typography"),attributes:l,setAttributes:t,loadGoogleFonts:{value:q,label:"priceLoadGoogleFonts"},fontFamily:{value:de,label:"priceFontFamily"},fontWeight:{value:ge,label:"priceFontWeight"},fontStyle:{value:be,label:"priceFontStyle"},fontSizeType:{value:re,label:"priceFontSizeType"},fontSize:{value:ue,label:"priceFontSize"},fontSizeMobile:{value:ce,label:"priceFontSizeMobile"},fontSizeTablet:{value:se,label:"priceFontSizeTablet"},lineHeightType:{value:he,label:"priceLineHeightType"},lineHeight:{value:fe,label:"priceLineHeight"},lineHeightMobile:{value:me,label:"priceLineHeightMobile"},lineHeightTablet:{value:pe,label:"priceLineHeightTablet"},transform:{value:jt,label:"priceTransform"},decoration:{value:Ht,label:"priceDecoration"}})),i.a.createElement(P.a,{title:Object(u.__)("Spacing"),initialOpen:!1},i.a.createElement(d.a,{label:Object(u.__)("Row Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:A,label:"rowGap"},tablet:{value:L,label:"rowGapTablet"},mobile:{value:k,label:"rowGapMobile"}},min:0,max:50,unit:{value:Ze,label:"rowGapType"},units:[{name:Object(u.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(u.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:t}),i.a.createElement(d.a,{label:Object(u.__)("Column Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:x,label:"columnGap"},tablet:{value:W,label:"columnGapTablet"},mobile:{value:z,label:"columnGapMobile"}},min:0,max:50,unit:{value:Ge,label:"columnGapType"},units:[{name:Object(u.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(u.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:t}),i.a.createElement(b.a,O({},e,{label:Object(u.__)("Item Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ie,label:"contentPaddingTop"},valueRight:{value:Ve,label:"contentPaddingRight"},valueBottom:{value:Ne,label:"contentPaddingBottom"},valueLeft:{value:Ue,label:"contentPaddingLeft"},valueTopTablet:{value:De,label:"contentPaddingTopTablet"},valueRightTablet:{value:qe,label:"contentPaddingRightTablet"},valueBottomTablet:{value:$e,label:"contentPaddingBottomTablet"},valueLeftTablet:{value:Je,label:"contentPaddingLeftTablet"},valueTopMobile:{value:Ke,label:"contentPaddingTopMobile"},valueRightMobile:{value:Xe,label:"contentPaddingRightMobile"},valueBottomMobile:{value:Qe,label:"contentPaddingBottomMobile"},valueLeftMobile:{value:Ye,label:"contentPaddingLeftMobile"},unit:{value:et,label:"contentPaddingUnit"},mUnit:{value:tt,label:"contentMobilePaddingUnit"},tUnit:{value:lt,label:"contentTabletPaddingUnit"},deviceType:v,attributes:l,setAttributes:t,link:{value:at,label:"contentSpacingLink"}})))),i.a.createElement(p.b,O({},p.a.advance,{parentProps:e})))),i.a.createElement(a.Suspense,{fallback:Object(n.a)()},St,Mt,Et))};t.default=i.a.memo(S)}}]);