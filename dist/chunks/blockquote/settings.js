(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[7],{192:function(e,t,a){"use strict";var n,o,l=a(35),i=a.n(l),r=a(193),u=a.n(r),s=a(2);if(void 0===c)var c=[];const g=e=>{const[t,a]=Object(s.useState)([]);Object(s.useEffect)(()=>{i()},[]),Object(s.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&i()},[e]);const n=()=>{a({status:"loading"})},o=()=>{a({status:"active"})},l=()=>{a({status:"inactive"})},i=()=>{var t;c.includes(e.config.google.families[0])||(u.a.load({...e.config,loading:n,active:o,inactive:l}),t=e.config.google.families[0],c.includes(t)||c.push(t))},{children:r}=e;return r||null};g.propTypes={config:null===(n=i.a.object)||void 0===n?void 0:n.isRequired,children:i.a.element,onStatus:null===(o=i.a.func)||void 0===o?void 0:o.isRequired},g.defaultProps={onStatus:()=>{}},t.a=g},193:function(e,t,a){var n;!function(){function o(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function c(e,t,a,n){if(t=e.c.createElement(t),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?t.style.cssText=a[o]:t.setAttribute(o,a[o]));return n&&t.appendChild(e.c.createTextNode(n)),t}function g(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,i=0;i<n.length;i+=1)if(t[o]===n[i]){l=!0;break}l||n.push(t[o])}for(t=[],o=0;o<n.length;o+=1){for(l=!1,i=0;i<a.length;i+=1)if(n[o]===a[i]){l=!0;break}l||t.push(n[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function m(e,t){for(var a=e.className.split(/\s+/),n=0,o=a.length;n<o;n++)if(a[n]==t)return!0;return!1}function h(e,t,a){function n(){r&&o&&l&&(r(i),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,i=null,r=a||null;s?(t.onload=function(){o=!0,n()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),n()}):setTimeout((function(){o=!0,n()}),0),g(e,"head",t)}function f(e,t,a,n){var o=e.c.getElementsByTagName("head")[0];if(o){var l=c(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function v(){this.a=0,this.c=null}function p(e){return e.a++,function(){e.a--,w(e)}}function _(e,t){e.c=t,w(e)}function w(e){0==e.a&&e.c&&(e.c(),e.c=null)}function y(e){this.a=e||"-"}function T(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function B(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function O(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function C(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new y("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function E(e){if(e.g){var t=m(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),d(e.f,a,n)}F(e,"inactive")}function F(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,B(a)):e.h[t]())}function M(){this.c={}}function I(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function L(e){g(e.c,"body",e.a)}function q(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function k(e,t,a,n,o,l){this.g=e,this.j=t,this.a=n,this.c=a,this.f=o||3e3,this.h=l||void 0}function x(e,t,a,n,o,l,i){this.v=e,this.B=t,this.c=a,this.a=n,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new I(this.c,this.s),this.h=new I(this.c,this.s),this.j=new I(this.c,this.s),this.m=new I(this.c,this.s),e=q(e=new T(this.a.c+",serif",B(this.a))),this.g.a.style.cssText=e,e=q(e=new T(this.a.c+",sans-serif",B(this.a))),this.h.a.style.cssText=e,e=q(e=new T("serif",B(this.a))),this.j.a.style.cssText=e,e=q(e=new T("sans-serif",B(this.a))),this.m.a.style.cssText=e,L(this.g),L(this.h),L(this.j),L(this.m)}y.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},k.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,o){!function l(){r()-a>=t.f?o():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,a){o=setTimeout(a,t.f)}));Promise.race([l,n]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var H={D:"serif",C:"sans-serif"},z=null;function A(){if(null===z){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);z=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return z}function U(e,t,a){for(var n in H)if(H.hasOwnProperty(n)&&t===e.f[H[n]]&&a===e.f[H[n]])return!0;return!1}function R(e,t){setTimeout(i((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function P(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}x.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(a=n===t.f.serif&&o===t.f["sans-serif"])||(a=A()&&U(t,n,o)),a?r()-t.A>=t.w?A()&&U(t,n,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?R(t,t.v):R(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):R(t,t.v)}(this)};var N=null;function V(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),F(e,"active")):E(e.a))}function W(e){this.j=e,this.a=new M,this.h=0,this.f=this.g=!0}function G(e,t,a,n,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=n||{};if(0===a.length&&l)E(t.a);else{t.f+=a.length,l&&(t.j=l);var u,s=[];for(u=0;u<a.length;u++){var c=a[u],g=r[c.c],b=t.a,m=c;if(b.g&&d(b.f,[b.a.c("wf",m.c,B(m).toString(),"loading")]),F(b,"fontloading",m),b=null,null===N)if(window.FontFace){m=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);N=m?42<parseInt(m[1],10):!h}else N=!1;b=N?new k(i(t.g,t),i(t.h,t),t.c,c,t.s,g):new x(i(t.g,t),i(t.h,t),t.c,c,t.s,e,g),s.push(b)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function D(e,t){this.c=e,this.a=t}function Q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}P.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,B(e).toString(),"active")],[t.a.c("wf",e.c,B(e).toString(),"loading"),t.a.c("wf",e.c,B(e).toString(),"inactive")]),F(t,"fontactive",e),this.m=!0,V(this)},P.prototype.h=function(e){var t=this.a;if(t.g){var a=m(t.f,t.a.c("wf",e.c,B(e).toString(),"active")),n=[],o=[t.a.c("wf",e.c,B(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,B(e).toString(),"inactive")),d(t.f,n,o)}F(t,"fontinactive",e),V(this)},W.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],o=a.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),F(e,"loading")}(t),n=function(e,t,a){var n,o=[];for(n in t)if(t.hasOwnProperty(n)){var l=e.c[n];l&&o.push(l(t[n],a))}return o}(e.a,a,e.c);var l=new P(e.c,t,o);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){G(e,l,t,a,n)}))}(this,new C(this.c,e),e)},D.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var o=t.c.o;f(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(o["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(o["__mti_fntLst"+a]){var n,l=o["__mti_fntLst"+a](),i=[];if(l)for(var r=0;r<l.length;r++){var u=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,i.push(new T(u,n))):i.push(new T(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},Q.prototype.load=function(e){var t,a,n=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new v;for(t=0,a=n.length;t<a;t++)h(this.c,n[t],p(i));var r=[];for(t=0,a=o.length;t<a;t++)if((n=o[t].split(":"))[1])for(var u=n[1].split(","),s=0;s<u.length;s+=1)r.push(new T(n[0],u[s]));else r.push(new T(n[0]));_(i,(function(){e(r,l)}))};var J="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new v,a=this.c,n=new $(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var o=t[n].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(n,o);var l=new K(o);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),o=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var i;if(i=[],r=n[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var c;if((c=r[s]).match(/^[\w-]+$/))if(null==(g=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=g[2])||""==c?"n":Z[c],null==(g=g[1])||""==g)g="4";else var g=Y[g]||(isNaN(g)?"4":g.substr(0,1));c=[c,g].join("")}else c="";c&&i.push(c)}0<i.length&&(l=i),3==n.length&&(i=[],0<(n=(n=n[2])?n.split(","):i).length&&(n=X[n[0]])&&(e.c[o]=n))}for(e.c[o]||(n=X[o])&&(e.c[o]=n),n=0;n<l.length;n+=1)e.a.push(new T(o,l[n]))}}(l),h(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),p(t)),_(t,(function(){e(l.a,l.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?f(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],o=0;o<t.length;o+=2)for(var l=t[o],i=t[o+1],r=0;r<i.length;r++)n.push(new T(l,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var o=0,l=a.fonts.length;o<l;++o){var i=a.fonts[o];n.a.push(new T(i.name,O("font-weight:"+i.weight+";font-style:"+i.style)))}e(n.a)},f(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new W(window);le.a.c.custom=function(e,t){return new Q(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new D(t,e)},le.a.c.typekit=function(e,t){return new ne(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(n=function(){return ie}.call(t,a,t,e))||(e.exports=n)}()},194:function(e,t,a){"use strict";var n,o=a(1),l=a(6),i=a(4),r=a(0),u=a.n(r),s=a(16),c=a.n(s),g=a(195),b=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return b++||(n=c()(g.a,d)),m},m.unuse=function(){b>0&&!--b&&(n(),n=null)};var h=m;t.a=e=>{Object(r.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]);const{onSelectImage:t,backgroundImage:a,onRemoveImage:n,showVideoInput:s,label:c}=e;let g=Object(o.__)("Image","ultimate-addons-for-gutenberg"),b=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),d=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),f=["image"];return s&&(g=Object(o.__)("Video","ultimate-addons-for-gutenberg"),b=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),d=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),f=["video"]),g=c||g,u.a.createElement(l.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+c,label:g},u.a.createElement("div",{className:"uagb-bg-image"},u.a.createElement(i.MediaUpload,{title:b,onSelect:t,allowedTypes:f,value:a,render:e=>{let{open:t}=e;return u.a.createElement(l.Button,{isSecondary:!0,onClick:t},null!=a&&a.url?d:b)}}),(null==a?void 0:a.url)&&u.a.createElement(l.Button,{className:"uagb-rm-btn",onClick:n,isLink:!0,isDestructive:!0},m),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},195:function(e,t,a){"use strict";var n=a(17),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),t.a=o},487:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(192),i=a(31),r=a(1),u=a(11),s=a(15),c=a(80),g=a(23),b=a(81),d=a(51),m=a(52),h=a(194),f=a(19),v=a(12),p=a(6),_=a(4),w=a(14);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const T=e=>{e=e.parentProps;const{setAttributes:t,attributes:a,deviceType:n}=e,{skinStyle:T,align:j,authorColor:B,descColor:S,descFontSize:O,descFontSizeType:C,descFontSizeTablet:E,descFontSizeMobile:F,descFontFamily:M,descFontWeight:I,descFontStyle:L,descLineHeightType:q,descLineHeight:k,descLineHeightTablet:x,descLineHeightMobile:H,descLoadGoogleFonts:z,authorFontSize:A,authorFontSizeType:U,authorFontSizeTablet:R,authorFontSizeMobile:P,authorFontFamily:N,authorFontWeight:V,authorFontStyle:W,authorLineHeightType:G,authorLineHeight:D,authorLineHeightTablet:Q,authorLineHeightMobile:$,authorLoadGoogleFonts:J,descSpace:K,authorSpace:X,stack:Y,borderColor:Z,borderStyle:ee,borderWidth:te,borderGap:ae,verticalPadding:ne,quoteColor:oe,quoteBgColor:le,quoteSize:ie,quoteSizeType:re,quoteSizeTablet:ue,quoteSizeMobile:se,quotePadding:ce,quotePaddingType:ge,quotePaddingTablet:be,quotePaddingMobile:de,quoteBorderRadius:me,quoteStyle:he,enableTweet:fe,tweetLinkColor:ve,tweetBtnColor:pe,tweetBtnHoverColor:_e,tweetBtnBgColor:we,tweetBtnBgHoverColor:ye,tweetBtnFontSize:Te,tweetBtnFontSizeType:je,tweetBtnFontSizeTablet:Be,tweetBtnFontSizeMobile:Se,tweetBtnFontFamily:Oe,tweetBtnFontWeight:Ce,tweetBtnFontStyle:Ee,tweetBtnLineHeightType:Fe,tweetBtnLineHeight:Me,tweetBtnLineHeightTablet:Ie,tweetBtnLineHeightMobile:Le,tweetBtnLoadGoogleFonts:qe,tweetIconSpacing:ke,tweetIconSpacingUnit:xe,iconView:He,iconSkin:ze,iconLabel:Ae,iconShareVia:Ue,iconTargetUrl:Re,customUrl:Pe,authorImage:Ne,authorImageWidth:Ve,authorImageWidthUnit:We,authorImageSize:Ge,authorImgBorderRadius:De,authorImgPosition:Qe,quoteTopMargin:$e,quoteBottomMargin:Je,quoteLeftMargin:Ke,quoteRightMargin:Xe,quoteHoverColor:Ye,quoteBgHoverColor:Ze,borderHoverColor:et,authorImgBorderRadiusUnit:tt,borderWidthUnit:at,quoteBorderRadiusUnit:nt,quoteUnit:ot,quotemobileUnit:lt,quotetabletUnit:it,borderGapUnit:rt,descSpaceUnit:ut,authorSpaceUnit:st,verticalPaddingUnit:ct,paddingBtnTop:gt,paddingBtnBottom:bt,paddingBtnLeft:dt,paddingBtnRight:mt,paddingBtnTopTablet:ht,paddingBtnRightTablet:ft,paddingBtnBottomTablet:vt,paddingBtnLeftTablet:pt,paddingBtnTopMobile:_t,paddingBtnRightMobile:wt,paddingBtnBottomMobile:yt,paddingBtnLeftMobile:Tt,paddingBtnUnit:jt,mobilePaddingBtnUnit:Bt,tabletPaddingBtnUnit:St,btnspacingLink:Ot,spacingLink:Ct,descTransform:Et,authorTransform:Ft,tweetBtnTransform:Mt,descDecoration:It,authorDecoration:Lt,tweetBtnDecoration:qt,quoteTopMarginTablet:kt,quoteBottomMarginTablet:xt,quoteLeftMarginTablet:Ht,quoteRightMarginTablet:zt,quoteTopMarginMobile:At,quoteBottomMarginMobile:Ut,quoteLeftMarginMobile:Rt,quoteRightMarginMobile:Pt,author:Nt}=a;let Vt,Wt,Gt;if(!0===z){const e={google:{families:[M+(I?":"+I:"")]}};Vt=o.a.createElement(l.a,{config:e})}if(!0===J){const e={google:{families:[N+(V?":"+V:"")]}};Wt=o.a.createElement(l.a,{config:e})}if(!0===qe){const e={google:{families:[Oe+(Ce?":"+Ce:"")]}};Gt=o.a.createElement(l.a,{config:e})}const Dt=[{value:"thumbnail",label:Object(r.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(r.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(r.__)("Large","ultimate-addons-for-gutenberg")}],Qt=o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{label:Object(r.__)("Author Image","ultimate-addons-for-gutenberg"),onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&t({authorImage:e}):t({authorImage:null})},backgroundImage:Ne,onRemoveImage:()=>{t({authorImage:null})}}),Ne&&"null"!==Ne.url&&""!==Ne.url&&o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Author Image Position","ultimate-addons-for-gutenberg"),data:{value:Qe,label:"authorImgPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",label:"Left"},{value:"top",label:"Top"},{value:"right",label:"Right"}],showIcons:!1}),o.a.createElement(p.SelectControl,{label:Object(r.__)("Author Image Size","ultimate-addons-for-gutenberg"),options:Dt,value:Ge,onChange:e=>t({authorImageSize:e})}),o.a.createElement(u.a,{label:Object(r.__)("Author Image Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:Ve,onChange:e=>t({authorImageWidth:e}),min:0,max:500,unit:{value:We,label:"authorImageWidthUnit"}}),o.a.createElement(u.a,{label:Object(r.__)("Author Image Rounded Corners","ultimate-addons-for-gutenberg"),setAttributes:t,value:De,onChange:e=>t({authorImgBorderRadius:e}),min:0,max:50,unit:{value:tt,label:"authorImgBorderRadiusUnit"},units:[{name:Object(r.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(r.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}))),$t=o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{label:Object(r.__)("Quote Icon Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:ie,label:"quoteSize"},tablet:{value:ue,label:"quoteSizeTablet"},mobile:{value:se,label:"quoteSizeMobile"}},min:0,max:50,unit:{value:re,label:"quoteSizeType"},setAttributes:t}),o.a.createElement(b.a,{label:Object(r.__)("Background Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:ce,label:"quotePadding"},tablet:{value:be,label:"quotePaddingTablet"},mobile:{value:de,label:"quotePaddingMobile"}},min:0,max:200,unit:{value:ge,label:"quotePaddingType"},setAttributes:t}),le&&o.a.createElement(u.a,{label:Object(r.__)("Quote Icon Border Radius","ultimate-addons-for-gutenberg"),setAttributes:t,value:me,onChange:e=>t({quoteBorderRadius:e}),min:0,max:100,unit:{value:nt,label:"quoteBorderRadiusUnit"},units:[{name:Object(r.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(r.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(r.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),Jt=o.a.createElement(w.a,{title:Object(r.__)("Layout","ultimate-addons-for-gutenberg")},o.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Type","ultimate-addons-for-gutenberg"),data:{value:T,label:"skinStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"border",label:Object(r.__)("Modern","ultimate-addons-for-gutenberg")},{value:"quotation",label:Object(r.__)("Quotation","ultimate-addons-for-gutenberg")}],showIcons:!1}),"quotation"===T&&o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Quotation Type","ultimate-addons-for-gutenberg"),data:{value:he,label:"quoteStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"style_1",label:Object(r.__)("Normal","ultimate-addons-for-gutenberg")},{value:"style_2",label:Object(r.__)("Inline","ultimate-addons-for-gutenberg")}],showIcons:!1}),o.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:j,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(p.Icon,{icon:Object(v.a)("fa fa-align-left")}),tooltip:Object(r.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(p.Icon,{icon:Object(v.a)("fa fa-align-center")}),tooltip:Object(r.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(p.Icon,{icon:Object(v.a)("fa fa-align-right")}),tooltip:Object(r.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),Qt,o.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:Y,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(r.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(r.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1}),o.a.createElement("p",null,"Note: Choose on what breakpoint the elements will stack.")),Kt=o.a.createElement(w.a,{title:Object(r.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(i.a,{label:Object(r.__)("Quote Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:z,label:"descLoadGoogleFonts"},fontFamily:{value:M,label:"descFontFamily"},fontWeight:{value:I,label:"descFontWeight"},fontStyle:{value:L,label:"descFontStyle"},fontSizeType:{value:C,label:"descFontSizeType"},fontSize:{value:O,label:"descFontSize"},fontSizeMobile:{value:F,label:"descFontSizeMobile"},fontSizeTablet:{value:E,label:"descFontSizeTablet"},lineHeightType:{value:q,label:"descLineHeightType"},lineHeight:{value:k,label:"descLineHeight"},lineHeightMobile:{value:H,label:"descLineHeightMobile"},lineHeightTablet:{value:x,label:"descLineHeightTablet"},transform:{value:Et,label:"descTransform"},decoration:{value:It,label:"descDecoration"}}),o.a.createElement(s.a,{label:Object(r.__)("Quote Color","ultimate-addons-for-gutenberg"),colorValue:S||"",onColorChange:e=>t({descColor:e})}),""!==Nt&&o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{label:Object(r.__)("Author Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:J,label:"authorLoadGoogleFonts"},fontFamily:{value:N,label:"authorFontFamily"},fontWeight:{value:V,label:"authorFontWeight"},fontStyle:{value:W,label:"authorFontStyle"},fontSizeType:{value:U,label:"authorFontSizeType"},fontSize:{value:A,label:"authorFontSize"},fontSizeMobile:{value:P,label:"authorFontSizeMobile"},fontSizeTablet:{value:R,label:"authorFontSizeTablet"},lineHeightType:{value:G,label:"authorLineHeightType"},lineHeight:{value:D,label:"authorLineHeight"},lineHeightMobile:{value:$,label:"authorLineHeightMobile"},lineHeightTablet:{value:Q,label:"authorLineHeightTablet"},transform:{value:Ft,label:"authorTransform"},decoration:{value:Lt,label:"authorDecoration"}}),o.a.createElement(s.a,{label:Object(r.__)("Author Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:e=>t({authorColor:e})}))),Xt=o.a.createElement(w.a,{title:Object(r.__)("Twitter Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(p.ToggleControl,{label:Object(r.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:fe,onChange:()=>t({enableTweet:!fe})}),fe&&o.a.createElement(o.a.Fragment,null,o.a.createElement(p.TextControl,{label:Object(r.__)("Twitter Username","ultimate-addons-for-gutenberg"),value:Ue,onChange:e=>t({iconShareVia:e})}),o.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Icon View","ultimate-addons-for-gutenberg"),data:{value:He,label:"iconView"},className:"uagb-multi-button-alignment-control",options:[{value:"icon_text",label:Object(r.__)("Both","ultimate-addons-for-gutenberg")},{value:"icon",label:Object(r.__)("Icon","ultimate-addons-for-gutenberg")},{value:"text",label:Object(r.__)("Text","ultimate-addons-for-gutenberg")}],showIcons:!1}),o.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Icon Style","ultimate-addons-for-gutenberg"),data:{value:ze,label:"iconSkin"},className:"uagb-multi-button-alignment-control",options:[{value:"classic",label:Object(r.__)("Classic","ultimate-addons-for-gutenberg")},{value:"bubble",label:Object(r.__)("Bubble","ultimate-addons-for-gutenberg")},{value:"link",label:Object(r.__)("Link","ultimate-addons-for-gutenberg")}],showIcons:!1}),o.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Target URL","ultimate-addons-for-gutenberg"),data:{value:Re,label:"iconTargetUrl"},className:"uagb-multi-button-alignment-control",options:[{value:"current",label:Object(r.__)("Current Page","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(r.__)("Custom URL","ultimate-addons-for-gutenberg")}],showIcons:!1}),"custom"===Re&&o.a.createElement(p.TextControl,{label:Object(r.__)("URL","ultimate-addons-for-gutenberg"),value:Pe,onChange:e=>t({customUrl:e})})),fe&&"icon"!==He&&o.a.createElement(o.a.Fragment,null,o.a.createElement(p.TextControl,{label:Object(r.__)("Label","ultimate-addons-for-gutenberg"),value:Ae,onChange:e=>t({iconLabel:e})}))),Yt=o.a.createElement(w.a,{title:Object(r.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},"quotation"===T&&o.a.createElement(d.a,y({},e,{label:Object(r.__)("Quote Icon Margin","ultimate-addons-for-gutenberg"),valueTop:{value:$e,label:"quoteTopMargin"},valueRight:{value:Xe,label:"quoteRightMargin"},valueBottom:{value:Je,label:"quoteBottomMargin"},valueLeft:{value:Ke,label:"quoteLeftMargin"},valueTopTablet:{value:kt,label:"quoteTopMarginTablet"},valueRightTablet:{value:zt,label:"quoteRightMarginTablet"},valueBottomTablet:{value:xt,label:"quoteBottomMarginTablet"},valueLeftTablet:{value:Ht,label:"quoteLeftMarginTablet"},valueTopMobile:{value:At,label:"quoteTopMarginMobile"},valueRightMobile:{value:Pt,label:"quoteRightMarginMobile"},valueBottomMobile:{value:Ut,label:"quoteBottomMarginMobile"},valueLeftMobile:{value:Rt,label:"quoteLeftMarginMobile"},unit:{value:ot,label:"quoteUnit"},mUnit:{value:lt,label:"quotemobileUnit"},tUnit:{value:it,label:"quotetabletUnit"},deviceType:n,attributes:a,setAttributes:t,link:{value:Ct,label:"spacingLink"}})),"border"===T&&o.a.createElement(u.a,{label:Object(r.__)("Gap Between Border and Quote","ultimate-addons-for-gutenberg"),setAttributes:t,value:ae,onChange:e=>t({borderGap:e}),min:0,max:200,unit:{value:rt,label:"borderGapUnit"}}),o.a.createElement(u.a,{label:Object(r.__)("Quote Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:t,value:K,onChange:e=>t({descSpace:e}),min:0,max:200,initialPosition:0,unit:{value:ut,label:"descSpaceUnit"}}),"center"===j&&"border"!==T&&o.a.createElement(u.a,{label:Object(r.__)("Author Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:t,value:X,onChange:e=>t({authorSpace:e}),min:0,max:200,unit:{value:st,label:"authorSpaceUnit"}}),"border"===T&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{label:"Vertical Padding",className:"uagb-margin-control",value:ne,setAttributes:t,onChange:e=>t({verticalPadding:e}),min:0,max:500,unit:{value:ct,label:"verticalPaddingUnit"}})));return o.a.createElement(o.a.Fragment,null,o.a.createElement(_.BlockControls,{key:"controls"}),o.a.createElement(_.InspectorControls,null,o.a.createElement(c.a,null,o.a.createElement(g.b,g.a.general,Jt,Xt),o.a.createElement(g.b,g.a.style,(()=>{const e=o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(r.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:oe||"",onColorChange:e=>t({quoteColor:e})}),o.a.createElement(s.a,{label:Object(r.__)("Icon Background Color","ultimate-addons-for-gutenberg"),colorValue:le||"",onColorChange:e=>t({quoteBgColor:e})})),a=o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(r.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:Ye||"",onColorChange:e=>t({quoteHoverColor:e})}),o.a.createElement(s.a,{label:Object(r.__)("Icon Background Color","ultimate-addons-for-gutenberg"),colorValue:Ze||"",onColorChange:e=>t({quoteBgHoverColor:e})}));return o.a.createElement(w.a,{title:Object(r.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},"border"===T&&(()=>{const e=o.a.createElement(s.a,{label:Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:Z||"",onColorChange:e=>t({borderColor:e})}),a=o.a.createElement(s.a,{label:Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:et||"",onColorChange:e=>t({borderHoverColor:e})});return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.SelectControl,{label:Object(r.__)("Quote Border Style","ultimate-addons-for-gutenberg"),value:ee,onChange:e=>t({borderStyle:e}),options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(r.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(r.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(r.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(r.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!==ee&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{label:Object(r.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:t,value:te,onChange:e=>t({borderWidth:e}),min:0,max:50,unit:{value:at,label:"borderWidthUnit"}}),o.a.createElement(m.a,{tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg")}],normal:e,hover:a,disableBottomSeparator:!0})))})(),"quotation"===T&&$t,"quotation"===T&&o.a.createElement(m.a,{tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg")}],normal:e,hover:a,disableBottomSeparator:!0}))})(),fe&&o.a.createElement(w.a,{title:Object(r.__)("Twitter Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},"icon"!==He&&o.a.createElement(i.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:qe,label:"tweetBtnLoadGoogleFonts"},fontFamily:{value:Oe,label:"tweetBtnFontFamily"},fontWeight:{value:Ce,label:"tweetBtnFontWeight"},fontStyle:{value:Ee,label:"tweetBtnFontStyle"},fontSizeType:{value:je,label:"tweetBtnFontSizeType"},fontSize:{value:Te,label:"tweetBtnFontSize"},fontSizeMobile:{value:Se,label:"tweetBtnFontSizeMobile"},fontSizeTablet:{value:Be,label:"tweetBtnFontSizeTablet"},lineHeightType:{value:Fe,label:"tweetBtnLineHeightType"},lineHeight:{value:Me,label:"tweetBtnLineHeight"},lineHeightMobile:{value:Le,label:"tweetBtnLineHeightMobile"},lineHeightTablet:{value:Ie,label:"tweetBtnLineHeightTablet"},transform:{value:Mt,label:"tweetBtnTransform"},decoration:{value:qt,label:"tweetBtnDecoration"}}),"link"!==ze&&o.a.createElement(d.a,y({},e,{label:Object(r.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:gt,label:"paddingBtnTop"},valueRight:{value:mt,label:"paddingBtnRight"},valueBottom:{value:bt,label:"paddingBtnBottom"},valueLeft:{value:dt,label:"paddingBtnLeft"},valueTopTablet:{value:ht,label:"paddingBtnTopTablet"},valueRightTablet:{value:ft,label:"paddingBtnRightTablet"},valueBottomTablet:{value:vt,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:pt,label:"paddingBtnLeftTablet"},valueTopMobile:{value:_t,label:"paddingBtnTopMobile"},valueRightMobile:{value:wt,label:"paddingBtnRightMobile"},valueBottomMobile:{value:yt,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:Tt,label:"paddingBtnLeftMobile"},unit:{value:jt,label:"paddingBtnUnit"},mUnit:{value:Bt,label:"mobilePaddingBtnUnit"},tUnit:{value:St,label:"tabletPaddingBtnUnit"},deviceType:n,attributes:a,setAttributes:t,link:{value:Ot,label:"btnspacingLink"}})),"icon_text"===He&&o.a.createElement(u.a,{label:Object(r.__)("Icon & Text Spacing","ultimate-addons-for-gutenberg"),setAttributes:t,value:ke,onChange:e=>t({tweetIconSpacing:e}),min:0,max:20,unit:{value:xe,label:"tweetIconSpacingUnit"},initialPosition:5}),"link"===ze&&o.a.createElement(m.a,{tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg")}],normal:o.a.createElement(s.a,{label:Object(r.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ve||"",onColorChange:e=>t({tweetLinkColor:e})}),hover:o.a.createElement(s.a,{label:Object(r.__)("Color","ultimate-addons-for-gutenberg"),colorValue:_e||"",onColorChange:e=>t({tweetBtnHoverColor:e})}),disableBottomSeparator:!0}),"link"!==ze&&o.a.createElement(m.a,{tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg")}],normal:o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(r.__)("Color","ultimate-addons-for-gutenberg"),colorValue:pe||"",onColorChange:e=>t({tweetBtnColor:e})}),o.a.createElement(s.a,{label:Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:we||"",onColorChange:e=>t({tweetBtnBgColor:e})})),hover:o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{label:Object(r.__)("Color","ultimate-addons-for-gutenberg"),colorValue:_e||"",onColorChange:e=>t({tweetBtnHoverColor:e})}),o.a.createElement(s.a,{label:Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:ye||"",onColorChange:e=>t({tweetBtnBgHoverColor:e})})),disableBottomSeparator:!0})),Kt,Yt),o.a.createElement(g.b,y({},g.a.advance,{parentProps:e})))),Vt,Wt,Gt)};t.default=o.a.memo(T)}}]);