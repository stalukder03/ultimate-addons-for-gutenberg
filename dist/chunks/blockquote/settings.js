(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[6],{242:function(e,t,a){e.exports=a(245)()},243:function(e,t,a){"use strict";var n=a(242),o=a.n(n),l=a(244),i=a.n(l),r=a(3);if(void 0===u)var u=[];const s=e=>{const[t,a]=Object(r.useState)([]);Object(r.useEffect)(()=>{s()},[]),Object(r.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&s()},[e]);const n=()=>{a({status:"loading"})},o=()=>{a({status:"active"})},l=()=>{a({status:"inactive"})},s=()=>{var t;u.includes(e.config.google.families[0])||(i.a.load({...e.config,loading:n,active:o,inactive:l}),t=e.config.google.families[0],u.includes(t)||u.push(t))},{children:c}=e;return c||null};s.propTypes={config:o.a.object.isRequired,children:o.a.element,onStatus:o.a.func.isRequired},s.defaultProps={onStatus:()=>{}},t.a=s},244:function(e,t,a){var n;!function(){function o(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function c(e,t,a,n){if(t=e.c.createElement(t),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?t.style.cssText=a[o]:t.setAttribute(o,a[o]));return n&&t.appendChild(e.c.createTextNode(n)),t}function b(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,i=0;i<n.length;i+=1)if(t[o]===n[i]){l=!0;break}l||n.push(t[o])}for(t=[],o=0;o<n.length;o+=1){for(l=!1,i=0;i<a.length;i+=1)if(n[o]===a[i]){l=!0;break}l||t.push(n[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function m(e,t){for(var a=e.className.split(/\s+/),n=0,o=a.length;n<o;n++)if(a[n]==t)return!0;return!1}function f(e,t,a){function n(){r&&o&&l&&(r(i),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,i=null,r=a||null;s?(t.onload=function(){o=!0,n()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),n()}):setTimeout((function(){o=!0,n()}),0),b(e,"head",t)}function h(e,t,a,n){var o=e.c.getElementsByTagName("head")[0];if(o){var l=c(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function T(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function B(e){return e.a+e.f}function O(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function S(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function C(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function E(e){if(e.g){var t=m(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),d(e.f,a,n)}F(e,"inactive")}function F(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,B(a)):e.h[t]())}function M(){this.c={}}function I(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function L(e){b(e.c,"body",e.a)}function q(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+O(e)+";font-weight:"+e.f+"00;"}function k(e,t,a,n,o,l){this.g=e,this.j=t,this.a=n,this.c=a,this.f=o||3e3,this.h=l||void 0}function x(e,t,a,n,o,l,i){this.v=e,this.B=t,this.c=a,this.a=n,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new I(this.c,this.s),this.h=new I(this.c,this.s),this.j=new I(this.c,this.s),this.m=new I(this.c,this.s),e=q(e=new T(this.a.c+",serif",B(this.a))),this.g.a.style.cssText=e,e=q(e=new T(this.a.c+",sans-serif",B(this.a))),this.h.a.style.cssText=e,e=q(e=new T("serif",B(this.a))),this.j.a.style.cssText=e,e=q(e=new T("sans-serif",B(this.a))),this.m.a.style.cssText=e,L(this.g),L(this.h),L(this.j),L(this.m)}w.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},k.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,o){!function l(){r()-a>=t.f?o():e.fonts.load(function(e){return O(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,a){o=setTimeout(a,t.f)}));Promise.race([l,n]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var H={D:"serif",C:"sans-serif"},z=null;function P(){if(null===z){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);z=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return z}function U(e,t,a){for(var n in H)if(H.hasOwnProperty(n)&&t===e.f[H[n]]&&a===e.f[H[n]])return!0;return!1}function A(e,t){setTimeout(i((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),t(this.a)}),e),0)}function R(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}x.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(a=n===t.f.serif&&o===t.f["sans-serif"])||(a=P()&&U(t,n,o)),a?r()-t.A>=t.w?P()&&U(t,n,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?A(t,t.v):A(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):A(t,t.v)}(this)};var N=null;function V(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),F(e,"active")):E(e.a))}function W(e){this.j=e,this.a=new M,this.h=0,this.f=this.g=!0}function D(e,t,a,n,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=n||{};if(0===a.length&&l)E(t.a);else{t.f+=a.length,l&&(t.j=l);var u,s=[];for(u=0;u<a.length;u++){var c=a[u],b=r[c.c],g=t.a,m=c;if(g.g&&d(g.f,[g.a.c("wf",m.c,B(m).toString(),"loading")]),F(g,"fontloading",m),g=null,null===N)if(window.FontFace){m=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var f=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);N=m?42<parseInt(m[1],10):!f}else N=!1;g=N?new k(i(t.g,t),i(t.h,t),t.c,c,t.s,b):new x(i(t.g,t),i(t.h,t),t.c,c,t.s,e,b),s.push(g)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function G(e,t){this.c=e,this.a=t}function Q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}R.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,B(e).toString(),"active")],[t.a.c("wf",e.c,B(e).toString(),"loading"),t.a.c("wf",e.c,B(e).toString(),"inactive")]),F(t,"fontactive",e),this.m=!0,V(this)},R.prototype.h=function(e){var t=this.a;if(t.g){var a=m(t.f,t.a.c("wf",e.c,B(e).toString(),"active")),n=[],o=[t.a.c("wf",e.c,B(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,B(e).toString(),"inactive")),d(t.f,n,o)}F(t,"fontinactive",e),V(this)},W.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],o=a.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),F(e,"loading")}(t),n=function(e,t,a){var n,o=[];for(n in t)if(t.hasOwnProperty(n)){var l=e.c[n];l&&o.push(l(t[n],a))}return o}(e.a,a,e.c);var l=new R(e.c,t,o);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){D(e,l,t,a,n)}))}(this,new C(this.c,e),e)},G.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var o=t.c.o;h(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(o["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(o["__mti_fntLst"+a]){var n,l=o["__mti_fntLst"+a](),i=[];if(l)for(var r=0;r<l.length;r++){var u=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,i.push(new T(u,n))):i.push(new T(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},Q.prototype.load=function(e){var t,a,n=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new p;for(t=0,a=n.length;t<a;t++)f(this.c,n[t],v(i));var r=[];for(t=0,a=o.length;t<a;t++)if((n=o[t].split(":"))[1])for(var u=n[1].split(","),s=0;s<u.length;s+=1)r.push(new T(n[0],u[s]));else r.push(new T(n[0]));_(i,(function(){e(r,l)}))};var J="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,n=new $(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var o=t[n].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(n,o);var l=new K(o);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),o=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var i;if(i=[],r=n[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var c;if((c=r[s]).match(/^[\w-]+$/))if(null==(b=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=b[2])||""==c?"n":Z[c],null==(b=b[1])||""==b)b="4";else var b=Y[b]||(isNaN(b)?"4":b.substr(0,1));c=[c,b].join("")}else c="";c&&i.push(c)}0<i.length&&(l=i),3==n.length&&(i=[],0<(n=(n=n[2])?n.split(","):i).length&&(n=X[n[0]])&&(e.c[o]=n))}for(e.c[o]||(n=X[o])&&(e.c[o]=n),n=0;n<l.length;n+=1)e.a.push(new T(o,l[n]))}}(l),f(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),_(t,(function(){e(l.a,l.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?h(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],o=0;o<t.length;o+=2)for(var l=t[o],i=t[o+1],r=0;r<i.length;r++)n.push(new T(l,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var o=0,l=a.fonts.length;o<l;++o){var i=a.fonts[o];n.a.push(new T(i.name,S("font-weight:"+i.weight+";font-style:"+i.style)))}e(n.a)},h(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new W(window);le.a.c.custom=function(e,t){return new Q(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new G(t,e)},le.a.c.typekit=function(e,t){return new ne(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(n=function(){return ie}.call(t,a,t,e))||(e.exports=n)}()},245:function(e,t,a){"use strict";var n=a(246);function o(){}function l(){}l.resetWarningCache=o,e.exports=function(){function e(e,t,a,o,l,i){if(i!==n){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:o};return a.PropTypes=a,a}},246:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},247:function(e,t,a){"use strict";var n,o=a(2),l=a(6),i=a(5),r=a(1),u=a.n(r),s=a(17),c=a.n(s),b=a(248),g=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=b.a.locals||{},m.use=function(){return g++||(n=c()(b.a,d)),m},m.unuse=function(){g>0&&!--g&&(n(),n=null)};var f=m;t.a=e=>{Object(r.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]);const{onSelectImage:t,backgroundImage:a,onRemoveImage:n,showVideoInput:s,label:c}=e;let b=Object(o.__)("Image","ultimate-addons-for-gutenberg"),g=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),d=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),h=["image"];return s&&(b=Object(o.__)("Video","ultimate-addons-for-gutenberg"),g=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),d=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),h=["video"]),b=c||b,u.a.createElement(l.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+c,label:b},u.a.createElement("div",{className:"uagb-bg-image"},u.a.createElement(i.MediaUpload,{title:g,onSelect:t,allowedTypes:h,value:a,render:({open:e})=>u.a.createElement(l.Button,{isSecondary:!0,onClick:e},null!=a&&a.url?d:g)}),(null==a?void 0:a.url)&&u.a.createElement(l.Button,{className:"uagb-rm-btn",onClick:n,isLink:!0,isDestructive:!0},m),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},248:function(e,t,a){"use strict";var n=a(18),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),t.a=o},537:function(e,t,a){"use strict";a.r(t);var n=a(4),o=a.n(n),l=a(8),i=a(1),r=a.n(i),u=a(243),s=a(24),c=a(2),b=a(14),g=a(16),d=a(63),m=a(21),f=a(64),h=a(41),p=a(42),v=a(247),_=a(22),y=a(12),w=a(6),T=a(5);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const B=e=>{e=e.parentProps;const{className:t,setAttributes:a,attributes:n,deviceType:i}=e,{skinStyle:B,align:O,authorColor:S,descColor:C,descFontSize:E,descFontSizeType:F,descFontSizeTablet:M,descFontSizeMobile:I,descFontFamily:L,descFontWeight:q,descFontStyle:k,descLineHeightType:x,descLineHeight:H,descLineHeightTablet:z,descLineHeightMobile:P,descLoadGoogleFonts:U,authorFontSize:A,authorFontSizeType:R,authorFontSizeTablet:N,authorFontSizeMobile:V,authorFontFamily:W,authorFontWeight:D,authorFontStyle:G,authorLineHeightType:Q,authorLineHeight:$,authorLineHeightTablet:J,authorLineHeightMobile:K,authorLoadGoogleFonts:X,descSpace:Y,authorSpace:Z,stack:ee,borderColor:te,borderStyle:ae,borderWidth:ne,borderGap:oe,verticalPadding:le,quoteColor:ie,quoteBgColor:re,quoteSize:ue,quoteSizeType:se,quoteSizeTablet:ce,quoteSizeMobile:be,quotePadding:ge,quotePaddingType:de,quotePaddingTablet:me,quotePaddingMobile:fe,quoteBorderRadius:he,quoteStyle:pe,enableTweet:ve,tweetLinkColor:_e,tweetBtnColor:ye,tweetBtnHoverColor:we,tweetBtnBgColor:Te,tweetBtnBgHoverColor:je,tweetBtnFontSize:Be,tweetBtnFontSizeType:Oe,tweetBtnFontSizeTablet:Se,tweetBtnFontSizeMobile:Ce,tweetBtnFontFamily:Ee,tweetBtnFontWeight:Fe,tweetBtnFontStyle:Me,tweetBtnLineHeightType:Ie,tweetBtnLineHeight:Le,tweetBtnLineHeightTablet:qe,tweetBtnLineHeightMobile:ke,tweetBtnLoadGoogleFonts:xe,tweetIconSpacing:He,tweetIconSpacingUnit:ze,iconView:Pe,iconSkin:Ue,iconLabel:Ae,iconShareVia:Re,iconTargetUrl:Ne,customUrl:Ve,authorImage:We,authorImageWidth:De,authorImageWidthUnit:Ge,authorImageSize:Qe,authorImgBorderRadius:$e,authorImgPosition:Je,quoteTopMargin:Ke,quoteBottomMargin:Xe,quoteLeftMargin:Ye,quoteRightMargin:Ze,quoteHoverColor:et,quoteBgHoverColor:tt,borderHoverColor:at,authorImgBorderRadiusUnit:nt,borderWidthUnit:ot,quoteBorderRadiusUnit:lt,quoteUnit:it,quotemobileUnit:rt,quotetabletUnit:ut,borderGapUnit:st,descSpaceUnit:ct,authorSpaceUnit:bt,verticalPaddingUnit:gt,paddingBtnTop:dt,paddingBtnBottom:mt,paddingBtnLeft:ft,paddingBtnRight:ht,paddingBtnTopTablet:pt,paddingBtnRightTablet:vt,paddingBtnBottomTablet:_t,paddingBtnLeftTablet:yt,paddingBtnTopMobile:wt,paddingBtnRightMobile:Tt,paddingBtnBottomMobile:jt,paddingBtnLeftMobile:Bt,paddingBtnUnit:Ot,mobilePaddingBtnUnit:St,tabletPaddingBtnUnit:Ct,btnspacingLink:Et,spacingLink:Ft,descTransform:Mt,authorTransform:It,tweetBtnTransform:Lt,descDecoration:qt,authorDecoration:kt,tweetBtnDecoration:xt,quoteTopMarginTablet:Ht,quoteBottomMarginTablet:zt,quoteLeftMarginTablet:Pt,quoteRightMarginTablet:Ut,quoteTopMarginMobile:At,quoteBottomMarginMobile:Rt,quoteLeftMarginMobile:Nt,quoteRightMarginMobile:Vt}=n;let Wt,Dt,Gt;if(!0===U){const e={google:{families:[L+(q?":"+q:"")]}};Wt=r.a.createElement(u.a,{config:e})}if(!0===X){const e={google:{families:[W+(D?":"+D:"")]}};Dt=r.a.createElement(u.a,{config:e})}if(!0===xe){const e={google:{families:[Ee+(Fe?":"+Fe:"")]}};Gt=r.a.createElement(u.a,{config:e})}const Qt=[{value:"thumbnail",label:Object(c.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(c.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(c.__)("Large","ultimate-addons-for-gutenberg")}],$t=r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{label:Object(c.__)("Author Image","ultimate-addons-for-gutenberg"),onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&a({authorImage:e}):a({authorImage:null})},backgroundImage:We,onRemoveImage:()=>{a({authorImage:null})}}),We&&"null"!==We.url&&""!==We.url&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{setAttributes:a,label:Object(c.__)("Author Image Position","ultimate-addons-for-gutenberg"),data:{value:Je,label:"authorImgPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:r.a.createElement(w.Icon,{icon:Object(y.a)("fa fa-align-left")}),tooltip:Object(c.__)("Left","ultimate-addons-for-gutenberg")},{value:"top",icon:r.a.createElement(w.Icon,{icon:Object(y.a)("fa fa-align-center")}),tooltip:Object(c.__)("Top","ultimate-addons-for-gutenberg")},{value:"right",icon:r.a.createElement(w.Icon,{icon:Object(y.a)("fa fa-align-right")}),tooltip:Object(c.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),r.a.createElement(w.SelectControl,{label:Object(c.__)("Author Image Size","ultimate-addons-for-gutenberg"),options:Qt,value:Qe,onChange:e=>a({authorImageSize:e})}),r.a.createElement(b.a,{label:Object(c.__)("Author Image Width","ultimate-addons-for-gutenberg"),setAttributes:a,value:De,onChange:e=>a({authorImageWidth:e}),min:0,max:500,unit:{value:Ge,label:"authorImageWidthUnit"}}),r.a.createElement(b.a,{label:Object(c.__)("Author Image Rounded Corners","ultimate-addons-for-gutenberg"),setAttributes:a,value:$e,onChange:e=>a({authorImgBorderRadius:e}),min:0,max:100,unit:{value:nt,label:"authorImgBorderRadiusUnit"},units:[{name:Object(c.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(c.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}))),Jt=r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{label:Object(c.__)("Quote Icon Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:ue,label:"quoteSize"},tablet:{value:ce,label:"quoteSizeTablet"},mobile:{value:be,label:"quoteSizeMobile"}},min:0,max:50,unit:{value:se,label:"quoteSizeType"},setAttributes:a}),r.a.createElement(f.a,{label:Object(c.__)("Background Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:ge,label:"quotePadding"},tablet:{value:me,label:"quotePaddingTablet"},mobile:{value:fe,label:"quotePaddingMobile"}},min:0,max:500,unit:{value:de,label:"quotePaddingType"},setAttributes:a}),re&&r.a.createElement(b.a,{label:Object(c.__)("Quote Icon Border Radius","ultimate-addons-for-gutenberg"),setAttributes:a,value:he,onChange:e=>a({quoteBorderRadius:e}),min:0,max:100,unit:{value:lt,label:"quoteBorderRadiusUnit"},units:[{name:Object(c.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(c.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(c.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),Kt=r.a.createElement(w.PanelBody,{title:Object(c.__)("Layout","ultimate-addons-for-gutenberg")},r.a.createElement(_.a,{setAttributes:a,label:Object(c.__)("Type","ultimate-addons-for-gutenberg"),data:{value:B,label:"skinStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"border",label:Object(c.__)("Modern","ultimate-addons-for-gutenberg")},{value:"quotation",label:Object(c.__)("Quotation","ultimate-addons-for-gutenberg")}],showIcons:!1}),$t,r.a.createElement(_.a,{setAttributes:a,label:Object(c.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:ee,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(c.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(c.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(c.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1}),r.a.createElement("p",null,"Note: Choose on what breakpoint the elements will stack.")),Xt=r.a.createElement(w.PanelBody,{title:Object(c.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(s.a,{label:Object(c.__)("Quote Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:a,loadGoogleFonts:{value:U,label:"descLoadGoogleFonts"},fontFamily:{value:L,label:"descFontFamily"},fontWeight:{value:q,label:"descFontWeight"},fontStyle:{value:k,label:"descFontStyle"},fontSizeType:{value:F,label:"descFontSizeType"},fontSize:{value:E,label:"descFontSize"},fontSizeMobile:{value:I,label:"descFontSizeMobile"},fontSizeTablet:{value:M,label:"descFontSizeTablet"},lineHeightType:{value:x,label:"descLineHeightType"},lineHeight:{value:H,label:"descLineHeight"},lineHeightMobile:{value:P,label:"descLineHeightMobile"},lineHeightTablet:{value:z,label:"descLineHeightTablet"},transform:{value:Mt,label:"descTransform"},decoration:{value:qt,label:"descDecoration"}}),r.a.createElement(g.a,{label:Object(c.__)("Quote Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:e=>a({descColor:e})}),r.a.createElement(s.a,{label:Object(c.__)("Author Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:a,loadGoogleFonts:{value:X,label:"authorLoadGoogleFonts"},fontFamily:{value:W,label:"authorFontFamily"},fontWeight:{value:D,label:"authorFontWeight"},fontStyle:{value:G,label:"authorFontStyle"},fontSizeType:{value:R,label:"authorFontSizeType"},fontSize:{value:A,label:"authorFontSize"},fontSizeMobile:{value:V,label:"authorFontSizeMobile"},fontSizeTablet:{value:N,label:"authorFontSizeTablet"},lineHeightType:{value:Q,label:"authorLineHeightType"},lineHeight:{value:$,label:"authorLineHeight"},lineHeightMobile:{value:K,label:"authorLineHeightMobile"},lineHeightTablet:{value:J,label:"authorLineHeightTablet"},transform:{value:It,label:"authorTransform"},decoration:{value:kt,label:"authorDecoration"}}),r.a.createElement(g.a,{label:Object(c.__)("Author Color","ultimate-addons-for-gutenberg"),colorValue:S||"",onColorChange:e=>a({authorColor:e})})),Yt=r.a.createElement(w.PanelBody,{title:Object(c.__)("Twitter Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(w.ToggleControl,{label:Object(c.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:ve,onChange:()=>a({enableTweet:!ve})}),ve&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{setAttributes:a,label:Object(c.__)("Icon View","ultimate-addons-for-gutenberg"),data:{value:Pe,label:"iconView"},className:"uagb-multi-button-alignment-control",options:[{value:"icon_text",label:Object(c.__)("Both","ultimate-addons-for-gutenberg")},{value:"icon",label:Object(c.__)("Icon","ultimate-addons-for-gutenberg")},{value:"text",label:Object(c.__)("Text","ultimate-addons-for-gutenberg")}],showIcons:!1}),r.a.createElement(_.a,{setAttributes:a,label:Object(c.__)("Icon Style","ultimate-addons-for-gutenberg"),data:{value:Ue,label:"iconSkin"},className:"uagb-multi-button-alignment-control",options:[{value:"classic",label:Object(c.__)("Classic","ultimate-addons-for-gutenberg")},{value:"bubble",label:Object(c.__)("Bubble","ultimate-addons-for-gutenberg")},{value:"link",label:Object(c.__)("Link","ultimate-addons-for-gutenberg")}],showIcons:!1}),r.a.createElement(_.a,{setAttributes:a,label:Object(c.__)("Target URL","ultimate-addons-for-gutenberg"),data:{value:Ne,label:"iconTargetUrl"},className:"uagb-multi-button-alignment-control",options:[{value:"current",label:Object(c.__)("Current Page","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(c.__)("Custom URL","ultimate-addons-for-gutenberg")}],showIcons:!1}),"custom"===Ne&&r.a.createElement(w.TextControl,{label:Object(c.__)("URL","ultimate-addons-for-gutenberg"),value:Ve,onChange:e=>a({customUrl:e})})),ve&&"icon"!==Pe&&r.a.createElement(r.a.Fragment,null,r.a.createElement(w.TextControl,{label:Object(c.__)("Label","ultimate-addons-for-gutenberg"),value:Ae,onChange:e=>a({iconLabel:e})}))),Zt=r.a.createElement(w.PanelBody,{title:Object(c.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},"quotation"===B&&r.a.createElement(h.a,j({},e,{label:Object(c.__)("Quote Icon Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Ke,label:"quoteTopMargin"},valueRight:{value:Ze,label:"quoteRightMargin"},valueBottom:{value:Xe,label:"quoteBottomMargin"},valueLeft:{value:Ye,label:"quoteLeftMargin"},valueTopTablet:{value:Ht,label:"quoteTopMarginTablet"},valueRightTablet:{value:Ut,label:"quoteRightMarginTablet"},valueBottomTablet:{value:zt,label:"quoteBottomMarginTablet"},valueLeftTablet:{value:Pt,label:"quoteLeftMarginTablet"},valueTopMobile:{value:At,label:"quoteTopMarginMobile"},valueRightMobile:{value:Vt,label:"quoteRightMarginMobile"},valueBottomMobile:{value:Rt,label:"quoteBottomMarginMobile"},valueLeftMobile:{value:Nt,label:"quoteLeftMarginMobile"},unit:{value:it,label:"quoteUnit"},mUnit:{value:rt,label:"quotemobileUnit"},tUnit:{value:ut,label:"quotetabletUnit"},deviceType:i,attributes:n,setAttributes:a,link:{value:Ft,label:"spacingLink"}})),"border"===B&&r.a.createElement(b.a,{label:Object(c.__)("Gap Between Border and Quote","ultimate-addons-for-gutenberg"),setAttributes:a,value:oe,onChange:e=>a({borderGap:e}),min:0,max:500,unit:{value:st,label:"borderGapUnit"}}),r.a.createElement(b.a,{label:Object(c.__)("Quote Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:Y,onChange:e=>a({descSpace:e}),min:0,max:200,initialPosition:0,unit:{value:ct,label:"descSpaceUnit"}}),"center"===O&&"border"!==B&&r.a.createElement(b.a,{label:Object(c.__)("Author Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:Z,onChange:e=>a({authorSpace:e}),min:0,max:200,unit:{value:bt,label:"authorSpaceUnit"}}),"border"===B&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{label:"Vertical Padding",className:"uagb-margin-control",value:le,setAttributes:a,onChange:e=>a({verticalPadding:e}),min:0,max:500,unit:{value:gt,label:"verticalPaddingUnit"}})));return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.BlockControls,{key:"controls"},"border"!==B&&r.a.createElement(T.AlignmentToolbar,{value:O,onChange:e=>a({align:e})}),"quotation"===B&&r.a.createElement(r.a.Fragment,null,r.a.createElement(w.Toolbar,{label:"Options"},r.a.createElement(w.Tooltip,{text:Object(c.__)("Normal Quote","ultimate-addons-for-gutenberg")},r.a.createElement(w.Button,{className:o()("components-icon-button","components-toolbar__control",{"is-active":"style_1"===pe}),onClick:()=>a({quoteStyle:"style_1"})},l.a.quote_1))),r.a.createElement(w.Toolbar,{label:"Options"},r.a.createElement(w.Tooltip,{text:Object(c.__)("Inline Quote","ultimate-addons-for-gutenberg")},r.a.createElement(w.Button,{className:o()("components-icon-button","components-toolbar__control",{"is-active":"style_2"===pe}),onClick:()=>a({quoteStyle:"style_2"})},l.a.quote_2)))),ve&&r.a.createElement(r.a.Fragment,null,r.a.createElement(w.Toolbar,{label:"Options"},r.a.createElement("label",{"aria-label":Object(c.__)("Twitter Username","ultimate-addons-for-gutenberg"),className:t+"__via-label",htmlFor:t+"__via"}," ",l.a.at_the_rate),r.a.createElement("input",{"aria-label":Object(c.__)("Twitter Username","ultimate-addons-for-gutenberg"),className:t+"__via",id:t+"__via",onChange:e=>a({iconShareVia:e.target.value}),placeholder:Object(c.__)("Username","ultimate-addons-for-gutenberg"),type:"text",value:Re})))),r.a.createElement(T.InspectorControls,null,r.a.createElement(d.a,null,r.a.createElement(m.b,m.a.general,Kt,Yt),r.a.createElement(m.b,m.a.style,(()=>{const e=r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{label:Object(c.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:ie||"",onColorChange:e=>a({quoteColor:e})}),r.a.createElement(g.a,{label:Object(c.__)("Icon Background Color","ultimate-addons-for-gutenberg"),colorValue:re||"",onColorChange:e=>a({quoteBgColor:e})})),t=r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{label:Object(c.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:et||"",onColorChange:e=>a({quoteHoverColor:e})}),r.a.createElement(g.a,{label:Object(c.__)("Icon Background Color","ultimate-addons-for-gutenberg"),colorValue:tt||"",onColorChange:e=>a({quoteBgHoverColor:e})}));return r.a.createElement(w.PanelBody,{title:Object(c.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},"border"===B&&(()=>{const e=r.a.createElement(g.a,{label:Object(c.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:te||"",onColorChange:e=>a({borderColor:e})}),t=r.a.createElement(g.a,{label:Object(c.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:at||"",onColorChange:e=>a({borderHoverColor:e})});return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.SelectControl,{label:Object(c.__)("Quote Border Style","ultimate-addons-for-gutenberg"),value:ae,onChange:e=>a({borderStyle:e}),options:[{value:"none",label:Object(c.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(c.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(c.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(c.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(c.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(c.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(c.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(c.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(c.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!==ae&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{label:Object(c.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:a,value:ne,onChange:e=>a({borderWidth:e}),min:0,max:50,unit:{value:ot,label:"borderWidthUnit"}}),r.a.createElement(p.a,{tabs:[{name:"normal",title:Object(c.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(c.__)("Hover","ultimate-addons-for-gutenberg")}],normal:e,hover:t,disableBottomSeparator:!0})))})(),"quotation"===B&&Jt,"quotation"===B&&r.a.createElement(p.a,{tabs:[{name:"normal",title:Object(c.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(c.__)("Hover","ultimate-addons-for-gutenberg")}],normal:e,hover:t,disableBottomSeparator:!0}))})(),ve&&r.a.createElement(w.PanelBody,{title:Object(c.__)("Twitter Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},"icon"!==Pe&&r.a.createElement(s.a,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:a,loadGoogleFonts:{value:xe,label:"tweetBtnLoadGoogleFonts"},fontFamily:{value:Ee,label:"tweetBtnFontFamily"},fontWeight:{value:Fe,label:"tweetBtnFontWeight"},fontStyle:{value:Me,label:"tweetBtnFontStyle"},fontSizeType:{value:Oe,label:"tweetBtnFontSizeType"},fontSize:{value:Be,label:"tweetBtnFontSize"},fontSizeMobile:{value:Ce,label:"tweetBtnFontSizeMobile"},fontSizeTablet:{value:Se,label:"tweetBtnFontSizeTablet"},lineHeightType:{value:Ie,label:"tweetBtnLineHeightType"},lineHeight:{value:Le,label:"tweetBtnLineHeight"},lineHeightMobile:{value:ke,label:"tweetBtnLineHeightMobile"},lineHeightTablet:{value:qe,label:"tweetBtnLineHeightTablet"},transform:{value:Lt,label:"tweetBtnTransform"},decoration:{value:xt,label:"tweetBtnDecoration"}}),"link"!==Ue&&r.a.createElement(h.a,j({},e,{label:Object(c.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:dt,label:"paddingBtnTop"},valueRight:{value:ht,label:"paddingBtnRight"},valueBottom:{value:mt,label:"paddingBtnBottom"},valueLeft:{value:ft,label:"paddingBtnLeft"},valueTopTablet:{value:pt,label:"paddingBtnTopTablet"},valueRightTablet:{value:vt,label:"paddingBtnRightTablet"},valueBottomTablet:{value:_t,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:yt,label:"paddingBtnLeftTablet"},valueTopMobile:{value:wt,label:"paddingBtnTopMobile"},valueRightMobile:{value:Tt,label:"paddingBtnRightMobile"},valueBottomMobile:{value:jt,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:Bt,label:"paddingBtnLeftMobile"},unit:{value:Ot,label:"paddingBtnUnit"},mUnit:{value:St,label:"mobilePaddingBtnUnit"},tUnit:{value:Ct,label:"tabletPaddingBtnUnit"},deviceType:i,attributes:n,setAttributes:a,link:{value:Et,label:"btnspacingLink"}})),"icon_text"===Pe&&r.a.createElement(b.a,{label:Object(c.__)("Icon & Text Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:He,onChange:e=>a({tweetIconSpacing:e}),min:0,max:20,unit:{value:ze,label:"tweetIconSpacingUnit"},initialPosition:5}),"link"===Ue&&r.a.createElement(p.a,{tabs:[{name:"normal",title:Object(c.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(c.__)("Hover","ultimate-addons-for-gutenberg")}],normal:r.a.createElement(g.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:_e||"",onColorChange:e=>a({tweetLinkColor:e})}),hover:r.a.createElement(g.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:we||"",onColorChange:e=>a({tweetBtnHoverColor:e})}),disableBottomSeparator:!0}),"link"!==Ue&&r.a.createElement(p.a,{tabs:[{name:"normal",title:Object(c.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(c.__)("Hover","ultimate-addons-for-gutenberg")}],normal:r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ye||"",onColorChange:e=>a({tweetBtnColor:e})}),r.a.createElement(g.a,{label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Te||"",onColorChange:e=>a({tweetBtnBgColor:e})})),hover:r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:we||"",onColorChange:e=>a({tweetBtnHoverColor:e})}),r.a.createElement(g.a,{label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:je||"",onColorChange:e=>a({tweetBtnBgHoverColor:e})})),disableBottomSeparator:!0})),Xt,Zt),r.a.createElement(m.b,j({},m.a.advance,{parentProps:e})))),Wt,Dt,Gt)};t.default=r.a.memo(B)}}]);