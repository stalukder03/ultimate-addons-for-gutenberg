(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[6],{166:function(e,t,a){"use strict";var n,o,l=a(33),i=a.n(l),r=a(167),u=a.n(r),s=a(2);if(void 0===c)var c=[];const g=e=>{const[t,a]=Object(s.useState)([]);Object(s.useEffect)(()=>{i()},[]),Object(s.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&i()},[e]);const n=()=>{a({status:"loading"})},o=()=>{a({status:"active"})},l=()=>{a({status:"inactive"})},i=()=>{var t;c.includes(e.config.google.families[0])||(u.a.load({...e.config,loading:n,active:o,inactive:l}),t=e.config.google.families[0],c.includes(t)||c.push(t))},{children:r}=e;return r||null};g.propTypes={config:null===(n=i.a.object)||void 0===n?void 0:n.isRequired,children:i.a.element,onStatus:null===(o=i.a.func)||void 0===o?void 0:o.isRequired},g.defaultProps={onStatus:()=>{}},t.a=g},167:function(e,t,a){var n;!function(){function o(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function c(e,t,a,n){if(t=e.c.createElement(t),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?t.style.cssText=a[o]:t.setAttribute(o,a[o]));return n&&t.appendChild(e.c.createTextNode(n)),t}function g(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,i=0;i<n.length;i+=1)if(t[o]===n[i]){l=!0;break}l||n.push(t[o])}for(t=[],o=0;o<n.length;o+=1){for(l=!1,i=0;i<a.length;i+=1)if(n[o]===a[i]){l=!0;break}l||t.push(n[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function m(e,t){for(var a=e.className.split(/\s+/),n=0,o=a.length;n<o;n++)if(a[n]==t)return!0;return!1}function h(e,t,a){function n(){r&&o&&l&&(r(i),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,i=null,r=a||null;s?(t.onload=function(){o=!0,n()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),n()}):setTimeout((function(){o=!0,n()}),0),g(e,"head",t)}function f(e,t,a,n){var o=e.c.getElementsByTagName("head")[0];if(o){var l=c(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function v(){this.a=0,this.c=null}function p(e){return e.a++,function(){e.a--,w(e)}}function _(e,t){e.c=t,w(e)}function w(e){0==e.a&&e.c&&(e.c(),e.c=null)}function y(e){this.a=e||"-"}function T(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function B(e){return e.a+e.f}function O(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function S(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function C(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new y("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function E(e){if(e.g){var t=m(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),d(e.f,a,n)}F(e,"inactive")}function F(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,B(a)):e.h[t]())}function M(){this.c={}}function q(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function L(e){g(e.c,"body",e.a)}function I(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+O(e)+";font-weight:"+e.f+"00;"}function k(e,t,a,n,o,l){this.g=e,this.j=t,this.a=n,this.c=a,this.f=o||3e3,this.h=l||void 0}function x(e,t,a,n,o,l,i){this.v=e,this.B=t,this.c=a,this.a=n,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new q(this.c,this.s),this.h=new q(this.c,this.s),this.j=new q(this.c,this.s),this.m=new q(this.c,this.s),e=I(e=new T(this.a.c+",serif",B(this.a))),this.g.a.style.cssText=e,e=I(e=new T(this.a.c+",sans-serif",B(this.a))),this.h.a.style.cssText=e,e=I(e=new T("serif",B(this.a))),this.j.a.style.cssText=e,e=I(e=new T("sans-serif",B(this.a))),this.m.a.style.cssText=e,L(this.g),L(this.h),L(this.j),L(this.m)}y.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},k.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,o){!function l(){r()-a>=t.f?o():e.fonts.load(function(e){return O(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,a){o=setTimeout(a,t.f)}));Promise.race([l,n]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var H={D:"serif",C:"sans-serif"},z=null;function A(){if(null===z){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);z=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return z}function U(e,t,a){for(var n in H)if(H.hasOwnProperty(n)&&t===e.f[H[n]]&&a===e.f[H[n]])return!0;return!1}function R(e,t){setTimeout(i((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function N(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}x.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(a=n===t.f.serif&&o===t.f["sans-serif"])||(a=A()&&U(t,n,o)),a?r()-t.A>=t.w?A()&&U(t,n,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?R(t,t.v):R(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):R(t,t.v)}(this)};var P=null;function V(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),F(e,"active")):E(e.a))}function W(e){this.j=e,this.a=new M,this.h=0,this.f=this.g=!0}function G(e,t,a,n,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=n||{};if(0===a.length&&l)E(t.a);else{t.f+=a.length,l&&(t.j=l);var u,s=[];for(u=0;u<a.length;u++){var c=a[u],g=r[c.c],b=t.a,m=c;if(b.g&&d(b.f,[b.a.c("wf",m.c,B(m).toString(),"loading")]),F(b,"fontloading",m),b=null,null===P)if(window.FontFace){m=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);P=m?42<parseInt(m[1],10):!h}else P=!1;b=P?new k(i(t.g,t),i(t.h,t),t.c,c,t.s,g):new x(i(t.g,t),i(t.h,t),t.c,c,t.s,e,g),s.push(b)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function D(e,t){this.c=e,this.a=t}function Q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}N.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,B(e).toString(),"active")],[t.a.c("wf",e.c,B(e).toString(),"loading"),t.a.c("wf",e.c,B(e).toString(),"inactive")]),F(t,"fontactive",e),this.m=!0,V(this)},N.prototype.h=function(e){var t=this.a;if(t.g){var a=m(t.f,t.a.c("wf",e.c,B(e).toString(),"active")),n=[],o=[t.a.c("wf",e.c,B(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,B(e).toString(),"inactive")),d(t.f,n,o)}F(t,"fontinactive",e),V(this)},W.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],o=a.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),F(e,"loading")}(t),n=function(e,t,a){var n,o=[];for(n in t)if(t.hasOwnProperty(n)){var l=e.c[n];l&&o.push(l(t[n],a))}return o}(e.a,a,e.c);var l=new N(e.c,t,o);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){G(e,l,t,a,n)}))}(this,new C(this.c,e),e)},D.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var o=t.c.o;f(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(o["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(o["__mti_fntLst"+a]){var n,l=o["__mti_fntLst"+a](),i=[];if(l)for(var r=0;r<l.length;r++){var u=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,i.push(new T(u,n))):i.push(new T(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},Q.prototype.load=function(e){var t,a,n=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new v;for(t=0,a=n.length;t<a;t++)h(this.c,n[t],p(i));var r=[];for(t=0,a=o.length;t<a;t++)if((n=o[t].split(":"))[1])for(var u=n[1].split(","),s=0;s<u.length;s+=1)r.push(new T(n[0],u[s]));else r.push(new T(n[0]));_(i,(function(){e(r,l)}))};var J="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new v,a=this.c,n=new $(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var o=t[n].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(n,o);var l=new K(o);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),o=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var i;if(i=[],r=n[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var c;if((c=r[s]).match(/^[\w-]+$/))if(null==(g=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=g[2])||""==c?"n":Z[c],null==(g=g[1])||""==g)g="4";else var g=Y[g]||(isNaN(g)?"4":g.substr(0,1));c=[c,g].join("")}else c="";c&&i.push(c)}0<i.length&&(l=i),3==n.length&&(i=[],0<(n=(n=n[2])?n.split(","):i).length&&(n=X[n[0]])&&(e.c[o]=n))}for(e.c[o]||(n=X[o])&&(e.c[o]=n),n=0;n<l.length;n+=1)e.a.push(new T(o,l[n]))}}(l),h(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),p(t)),_(t,(function(){e(l.a,l.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?f(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],o=0;o<t.length;o+=2)for(var l=t[o],i=t[o+1],r=0;r<i.length;r++)n.push(new T(l,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var o=0,l=a.fonts.length;o<l;++o){var i=a.fonts[o];n.a.push(new T(i.name,S("font-weight:"+i.weight+";font-style:"+i.style)))}e(n.a)},f(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new W(window);le.a.c.custom=function(e,t){return new Q(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new D(t,e)},le.a.c.typekit=function(e,t){return new ne(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(n=function(){return ie}.call(t,a,t,e))||(e.exports=n)}()},168:function(e,t,a){"use strict";var n,o=a(1),l=a(6),i=a(4),r=a(0),u=a.n(r),s=a(14),c=a.n(s),g=a(169),b=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return b++||(n=c()(g.a,d)),m},m.unuse=function(){b>0&&!--b&&(n(),n=null)};var h=m;t.a=e=>{Object(r.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]);const{onSelectImage:t,backgroundImage:a,onRemoveImage:n,showVideoInput:s,label:c}=e;let g=Object(o.__)("Image","ultimate-addons-for-gutenberg"),b=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),d=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),f=["image"];return s&&(g=Object(o.__)("Video","ultimate-addons-for-gutenberg"),b=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),d=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),f=["video"]),g=c||g,u.a.createElement(l.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+c,label:g},u.a.createElement("div",{className:"uagb-bg-image"},u.a.createElement(i.MediaUpload,{title:b,onSelect:t,allowedTypes:f,value:a,render:({open:e})=>u.a.createElement(l.Button,{isSecondary:!0,onClick:e},null!=a&&a.url?d:b)}),(null==a?void 0:a.url)&&u.a.createElement(l.Button,{className:"uagb-rm-btn",onClick:n,isLink:!0,isDestructive:!0},m),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},169:function(e,t,a){"use strict";var n=a(15),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),t.a=o},438:function(e,t,a){"use strict";a.r(t);var n=a(3),o=a.n(n),l=a(7),i=a(0),r=a.n(i),u=a(166),s=a(29),c=a(1),g=a(12),b=a(17),d=a(63),m=a(22),h=a(64),f=a(45),v=a(46),p=a(168),_=a(21),w=a(11),y=a(6),T=a(4),j=a(16);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const O=e=>{e=e.parentProps;const{className:t,setAttributes:a,attributes:n,deviceType:i}=e,{skinStyle:O,align:S,authorColor:C,descColor:E,descFontSize:F,descFontSizeType:M,descFontSizeTablet:q,descFontSizeMobile:L,descFontFamily:I,descFontWeight:k,descFontStyle:x,descLineHeightType:H,descLineHeight:z,descLineHeightTablet:A,descLineHeightMobile:U,descLoadGoogleFonts:R,authorFontSize:N,authorFontSizeType:P,authorFontSizeTablet:V,authorFontSizeMobile:W,authorFontFamily:G,authorFontWeight:D,authorFontStyle:Q,authorLineHeightType:$,authorLineHeight:J,authorLineHeightTablet:K,authorLineHeightMobile:X,authorLoadGoogleFonts:Y,descSpace:Z,authorSpace:ee,stack:te,borderColor:ae,borderStyle:ne,borderWidth:oe,borderGap:le,verticalPadding:ie,quoteColor:re,quoteBgColor:ue,quoteSize:se,quoteSizeType:ce,quoteSizeTablet:ge,quoteSizeMobile:be,quotePadding:de,quotePaddingType:me,quotePaddingTablet:he,quotePaddingMobile:fe,quoteBorderRadius:ve,quoteStyle:pe,enableTweet:_e,tweetLinkColor:we,tweetBtnColor:ye,tweetBtnHoverColor:Te,tweetBtnBgColor:je,tweetBtnBgHoverColor:Be,tweetBtnFontSize:Oe,tweetBtnFontSizeType:Se,tweetBtnFontSizeTablet:Ce,tweetBtnFontSizeMobile:Ee,tweetBtnFontFamily:Fe,tweetBtnFontWeight:Me,tweetBtnFontStyle:qe,tweetBtnLineHeightType:Le,tweetBtnLineHeight:Ie,tweetBtnLineHeightTablet:ke,tweetBtnLineHeightMobile:xe,tweetBtnLoadGoogleFonts:He,tweetIconSpacing:ze,tweetIconSpacingUnit:Ae,iconView:Ue,iconSkin:Re,iconLabel:Ne,iconShareVia:Pe,iconTargetUrl:Ve,customUrl:We,authorImage:Ge,authorImageWidth:De,authorImageWidthUnit:Qe,authorImageSize:$e,authorImgBorderRadius:Je,authorImgPosition:Ke,quoteTopMargin:Xe,quoteBottomMargin:Ye,quoteLeftMargin:Ze,quoteRightMargin:et,quoteHoverColor:tt,quoteBgHoverColor:at,borderHoverColor:nt,authorImgBorderRadiusUnit:ot,borderWidthUnit:lt,quoteBorderRadiusUnit:it,quoteUnit:rt,quotemobileUnit:ut,quotetabletUnit:st,borderGapUnit:ct,descSpaceUnit:gt,authorSpaceUnit:bt,verticalPaddingUnit:dt,paddingBtnTop:mt,paddingBtnBottom:ht,paddingBtnLeft:ft,paddingBtnRight:vt,paddingBtnTopTablet:pt,paddingBtnRightTablet:_t,paddingBtnBottomTablet:wt,paddingBtnLeftTablet:yt,paddingBtnTopMobile:Tt,paddingBtnRightMobile:jt,paddingBtnBottomMobile:Bt,paddingBtnLeftMobile:Ot,paddingBtnUnit:St,mobilePaddingBtnUnit:Ct,tabletPaddingBtnUnit:Et,btnspacingLink:Ft,spacingLink:Mt,descTransform:qt,authorTransform:Lt,tweetBtnTransform:It,descDecoration:kt,authorDecoration:xt,tweetBtnDecoration:Ht,quoteTopMarginTablet:zt,quoteBottomMarginTablet:At,quoteLeftMarginTablet:Ut,quoteRightMarginTablet:Rt,quoteTopMarginMobile:Nt,quoteBottomMarginMobile:Pt,quoteLeftMarginMobile:Vt,quoteRightMarginMobile:Wt,author:Gt}=n;let Dt,Qt,$t;if(!0===R){const e={google:{families:[I+(k?":"+k:"")]}};Dt=r.a.createElement(u.a,{config:e})}if(!0===Y){const e={google:{families:[G+(D?":"+D:"")]}};Qt=r.a.createElement(u.a,{config:e})}if(!0===He){const e={google:{families:[Fe+(Me?":"+Me:"")]}};$t=r.a.createElement(u.a,{config:e})}const Jt=[{value:"thumbnail",label:Object(c.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(c.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(c.__)("Large","ultimate-addons-for-gutenberg")}],Kt=r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{label:Object(c.__)("Author Image","ultimate-addons-for-gutenberg"),onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&a({authorImage:e}):a({authorImage:null})},backgroundImage:Ge,onRemoveImage:()=>{a({authorImage:null})}}),Ge&&"null"!==Ge.url&&""!==Ge.url&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{setAttributes:a,label:Object(c.__)("Author Image Position","ultimate-addons-for-gutenberg"),data:{value:Ke,label:"authorImgPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",label:"Left"},{value:"top",label:"Top"},{value:"right",label:"Right"}],showIcons:!1}),r.a.createElement(y.SelectControl,{label:Object(c.__)("Author Image Size","ultimate-addons-for-gutenberg"),options:Jt,value:$e,onChange:e=>a({authorImageSize:e})}),r.a.createElement(g.a,{label:Object(c.__)("Author Image Width","ultimate-addons-for-gutenberg"),setAttributes:a,value:De,onChange:e=>a({authorImageWidth:e}),min:0,max:500,unit:{value:Qe,label:"authorImageWidthUnit"}}),r.a.createElement(g.a,{label:Object(c.__)("Author Image Rounded Corners","ultimate-addons-for-gutenberg"),setAttributes:a,value:Je,onChange:e=>a({authorImgBorderRadius:e}),min:0,max:100,unit:{value:ot,label:"authorImgBorderRadiusUnit"},units:[{name:Object(c.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(c.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}))),Xt=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{label:Object(c.__)("Quote Icon Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:se,label:"quoteSize"},tablet:{value:ge,label:"quoteSizeTablet"},mobile:{value:be,label:"quoteSizeMobile"}},min:0,max:50,unit:{value:ce,label:"quoteSizeType"},setAttributes:a}),r.a.createElement(h.a,{label:Object(c.__)("Background Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:de,label:"quotePadding"},tablet:{value:he,label:"quotePaddingTablet"},mobile:{value:fe,label:"quotePaddingMobile"}},min:0,max:500,unit:{value:me,label:"quotePaddingType"},setAttributes:a}),ue&&r.a.createElement(g.a,{label:Object(c.__)("Quote Icon Border Radius","ultimate-addons-for-gutenberg"),setAttributes:a,value:ve,onChange:e=>a({quoteBorderRadius:e}),min:0,max:100,unit:{value:it,label:"quoteBorderRadiusUnit"},units:[{name:Object(c.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(c.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(c.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),Yt=r.a.createElement(j.a,{title:Object(c.__)("Layout","ultimate-addons-for-gutenberg")},r.a.createElement(_.a,{setAttributes:a,label:Object(c.__)("Type","ultimate-addons-for-gutenberg"),data:{value:O,label:"skinStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"border",label:Object(c.__)("Modern","ultimate-addons-for-gutenberg")},{value:"quotation",label:Object(c.__)("Quotation","ultimate-addons-for-gutenberg")}],showIcons:!1}),"quotation"===O&&r.a.createElement(_.a,{setAttributes:a,label:Object(c.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:S,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:r.a.createElement(y.Icon,{icon:Object(w.a)("fa fa-align-left")}),tooltip:Object(c.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:r.a.createElement(y.Icon,{icon:Object(w.a)("fa fa-align-center")}),tooltip:Object(c.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:r.a.createElement(y.Icon,{icon:Object(w.a)("fa fa-align-right")}),tooltip:Object(c.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),Kt,r.a.createElement(_.a,{setAttributes:a,label:Object(c.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:te,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(c.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(c.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(c.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1}),r.a.createElement("p",null,"Note: Choose on what breakpoint the elements will stack.")),Zt=r.a.createElement(j.a,{title:Object(c.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(s.a,{label:Object(c.__)("Quote Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:a,loadGoogleFonts:{value:R,label:"descLoadGoogleFonts"},fontFamily:{value:I,label:"descFontFamily"},fontWeight:{value:k,label:"descFontWeight"},fontStyle:{value:x,label:"descFontStyle"},fontSizeType:{value:M,label:"descFontSizeType"},fontSize:{value:F,label:"descFontSize"},fontSizeMobile:{value:L,label:"descFontSizeMobile"},fontSizeTablet:{value:q,label:"descFontSizeTablet"},lineHeightType:{value:H,label:"descLineHeightType"},lineHeight:{value:z,label:"descLineHeight"},lineHeightMobile:{value:U,label:"descLineHeightMobile"},lineHeightTablet:{value:A,label:"descLineHeightTablet"},transform:{value:qt,label:"descTransform"},decoration:{value:kt,label:"descDecoration"}}),r.a.createElement(b.a,{label:Object(c.__)("Quote Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:e=>a({descColor:e})}),""!==Gt&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{label:Object(c.__)("Author Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:a,loadGoogleFonts:{value:Y,label:"authorLoadGoogleFonts"},fontFamily:{value:G,label:"authorFontFamily"},fontWeight:{value:D,label:"authorFontWeight"},fontStyle:{value:Q,label:"authorFontStyle"},fontSizeType:{value:P,label:"authorFontSizeType"},fontSize:{value:N,label:"authorFontSize"},fontSizeMobile:{value:W,label:"authorFontSizeMobile"},fontSizeTablet:{value:V,label:"authorFontSizeTablet"},lineHeightType:{value:$,label:"authorLineHeightType"},lineHeight:{value:J,label:"authorLineHeight"},lineHeightMobile:{value:X,label:"authorLineHeightMobile"},lineHeightTablet:{value:K,label:"authorLineHeightTablet"},transform:{value:Lt,label:"authorTransform"},decoration:{value:xt,label:"authorDecoration"}}),r.a.createElement(b.a,{label:Object(c.__)("Author Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:e=>a({authorColor:e})}))),ea=r.a.createElement(j.a,{title:Object(c.__)("Twitter Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(y.ToggleControl,{label:Object(c.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:_e,onChange:()=>a({enableTweet:!_e})}),_e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{setAttributes:a,label:Object(c.__)("Icon View","ultimate-addons-for-gutenberg"),data:{value:Ue,label:"iconView"},className:"uagb-multi-button-alignment-control",options:[{value:"icon_text",label:Object(c.__)("Both","ultimate-addons-for-gutenberg")},{value:"icon",label:Object(c.__)("Icon","ultimate-addons-for-gutenberg")},{value:"text",label:Object(c.__)("Text","ultimate-addons-for-gutenberg")}],showIcons:!1}),r.a.createElement(_.a,{setAttributes:a,label:Object(c.__)("Icon Style","ultimate-addons-for-gutenberg"),data:{value:Re,label:"iconSkin"},className:"uagb-multi-button-alignment-control",options:[{value:"classic",label:Object(c.__)("Classic","ultimate-addons-for-gutenberg")},{value:"bubble",label:Object(c.__)("Bubble","ultimate-addons-for-gutenberg")},{value:"link",label:Object(c.__)("Link","ultimate-addons-for-gutenberg")}],showIcons:!1}),r.a.createElement(_.a,{setAttributes:a,label:Object(c.__)("Target URL","ultimate-addons-for-gutenberg"),data:{value:Ve,label:"iconTargetUrl"},className:"uagb-multi-button-alignment-control",options:[{value:"current",label:Object(c.__)("Current Page","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(c.__)("Custom URL","ultimate-addons-for-gutenberg")}],showIcons:!1}),"custom"===Ve&&r.a.createElement(y.TextControl,{label:Object(c.__)("URL","ultimate-addons-for-gutenberg"),value:We,onChange:e=>a({customUrl:e})})),_e&&"icon"!==Ue&&r.a.createElement(r.a.Fragment,null,r.a.createElement(y.TextControl,{label:Object(c.__)("Label","ultimate-addons-for-gutenberg"),value:Ne,onChange:e=>a({iconLabel:e})}))),ta=r.a.createElement(j.a,{title:Object(c.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},"quotation"===O&&r.a.createElement(f.a,B({},e,{label:Object(c.__)("Quote Icon Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Xe,label:"quoteTopMargin"},valueRight:{value:et,label:"quoteRightMargin"},valueBottom:{value:Ye,label:"quoteBottomMargin"},valueLeft:{value:Ze,label:"quoteLeftMargin"},valueTopTablet:{value:zt,label:"quoteTopMarginTablet"},valueRightTablet:{value:Rt,label:"quoteRightMarginTablet"},valueBottomTablet:{value:At,label:"quoteBottomMarginTablet"},valueLeftTablet:{value:Ut,label:"quoteLeftMarginTablet"},valueTopMobile:{value:Nt,label:"quoteTopMarginMobile"},valueRightMobile:{value:Wt,label:"quoteRightMarginMobile"},valueBottomMobile:{value:Pt,label:"quoteBottomMarginMobile"},valueLeftMobile:{value:Vt,label:"quoteLeftMarginMobile"},unit:{value:rt,label:"quoteUnit"},mUnit:{value:ut,label:"quotemobileUnit"},tUnit:{value:st,label:"quotetabletUnit"},deviceType:i,attributes:n,setAttributes:a,link:{value:Mt,label:"spacingLink"}})),"border"===O&&r.a.createElement(g.a,{label:Object(c.__)("Gap Between Border and Quote","ultimate-addons-for-gutenberg"),setAttributes:a,value:le,onChange:e=>a({borderGap:e}),min:0,max:500,unit:{value:ct,label:"borderGapUnit"}}),r.a.createElement(g.a,{label:Object(c.__)("Quote Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:Z,onChange:e=>a({descSpace:e}),min:0,max:200,initialPosition:0,unit:{value:gt,label:"descSpaceUnit"}}),"center"===S&&"border"!==O&&r.a.createElement(g.a,{label:Object(c.__)("Author Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:ee,onChange:e=>a({authorSpace:e}),min:0,max:200,unit:{value:bt,label:"authorSpaceUnit"}}),"border"===O&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{label:"Vertical Padding",className:"uagb-margin-control",value:ie,setAttributes:a,onChange:e=>a({verticalPadding:e}),min:0,max:500,unit:{value:dt,label:"verticalPaddingUnit"}})));return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.BlockControls,{key:"controls"},"border"!==O&&r.a.createElement(T.AlignmentToolbar,{value:S,onChange:e=>a({align:e})}),"quotation"===O&&r.a.createElement(r.a.Fragment,null,r.a.createElement(y.Toolbar,{label:"Options"},r.a.createElement(y.Tooltip,{text:Object(c.__)("Normal Quote","ultimate-addons-for-gutenberg")},r.a.createElement(y.Button,{className:o()("components-icon-button","components-toolbar__control",{"is-active":"style_1"===pe}),onClick:()=>a({quoteStyle:"style_1"})},l.a.quote_1))),r.a.createElement(y.Toolbar,{label:"Options"},r.a.createElement(y.Tooltip,{text:Object(c.__)("Inline Quote","ultimate-addons-for-gutenberg")},r.a.createElement(y.Button,{className:o()("components-icon-button","components-toolbar__control",{"is-active":"style_2"===pe}),onClick:()=>a({quoteStyle:"style_2"})},l.a.quote_2)))),_e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(y.Toolbar,{label:"Options"},r.a.createElement("label",{"aria-label":Object(c.__)("Twitter Username","ultimate-addons-for-gutenberg"),className:t+"__via-label",htmlFor:t+"__via"}," ",l.a.at_the_rate),r.a.createElement("input",{"aria-label":Object(c.__)("Twitter Username","ultimate-addons-for-gutenberg"),className:t+"__via",id:t+"__via",onChange:e=>a({iconShareVia:e.target.value}),placeholder:Object(c.__)("Username","ultimate-addons-for-gutenberg"),type:"text",value:Pe})))),r.a.createElement(T.InspectorControls,null,r.a.createElement(d.a,null,r.a.createElement(m.b,m.a.general,Yt,ea),r.a.createElement(m.b,m.a.style,(()=>{const e=r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{label:Object(c.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:re||"",onColorChange:e=>a({quoteColor:e})}),r.a.createElement(b.a,{label:Object(c.__)("Icon Background Color","ultimate-addons-for-gutenberg"),colorValue:ue||"",onColorChange:e=>a({quoteBgColor:e})})),t=r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{label:Object(c.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:tt||"",onColorChange:e=>a({quoteHoverColor:e})}),r.a.createElement(b.a,{label:Object(c.__)("Icon Background Color","ultimate-addons-for-gutenberg"),colorValue:at||"",onColorChange:e=>a({quoteBgHoverColor:e})}));return r.a.createElement(j.a,{title:Object(c.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},"border"===O&&(()=>{const e=r.a.createElement(b.a,{label:Object(c.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:ae||"",onColorChange:e=>a({borderColor:e})}),t=r.a.createElement(b.a,{label:Object(c.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:nt||"",onColorChange:e=>a({borderHoverColor:e})});return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.SelectControl,{label:Object(c.__)("Quote Border Style","ultimate-addons-for-gutenberg"),value:ne,onChange:e=>a({borderStyle:e}),options:[{value:"none",label:Object(c.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(c.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(c.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(c.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(c.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(c.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(c.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(c.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(c.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!==ne&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{label:Object(c.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:a,value:oe,onChange:e=>a({borderWidth:e}),min:0,max:50,unit:{value:lt,label:"borderWidthUnit"}}),r.a.createElement(v.a,{tabs:[{name:"normal",title:Object(c.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(c.__)("Hover","ultimate-addons-for-gutenberg")}],normal:e,hover:t,disableBottomSeparator:!0})))})(),"quotation"===O&&Xt,"quotation"===O&&r.a.createElement(v.a,{tabs:[{name:"normal",title:Object(c.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(c.__)("Hover","ultimate-addons-for-gutenberg")}],normal:e,hover:t,disableBottomSeparator:!0}))})(),_e&&r.a.createElement(j.a,{title:Object(c.__)("Twitter Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},"icon"!==Ue&&r.a.createElement(s.a,{label:Object(c.__)("Typography","ultimate-addons-for-gutenberg"),attributes:n,setAttributes:a,loadGoogleFonts:{value:He,label:"tweetBtnLoadGoogleFonts"},fontFamily:{value:Fe,label:"tweetBtnFontFamily"},fontWeight:{value:Me,label:"tweetBtnFontWeight"},fontStyle:{value:qe,label:"tweetBtnFontStyle"},fontSizeType:{value:Se,label:"tweetBtnFontSizeType"},fontSize:{value:Oe,label:"tweetBtnFontSize"},fontSizeMobile:{value:Ee,label:"tweetBtnFontSizeMobile"},fontSizeTablet:{value:Ce,label:"tweetBtnFontSizeTablet"},lineHeightType:{value:Le,label:"tweetBtnLineHeightType"},lineHeight:{value:Ie,label:"tweetBtnLineHeight"},lineHeightMobile:{value:xe,label:"tweetBtnLineHeightMobile"},lineHeightTablet:{value:ke,label:"tweetBtnLineHeightTablet"},transform:{value:It,label:"tweetBtnTransform"},decoration:{value:Ht,label:"tweetBtnDecoration"}}),"link"!==Re&&r.a.createElement(f.a,B({},e,{label:Object(c.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:mt,label:"paddingBtnTop"},valueRight:{value:vt,label:"paddingBtnRight"},valueBottom:{value:ht,label:"paddingBtnBottom"},valueLeft:{value:ft,label:"paddingBtnLeft"},valueTopTablet:{value:pt,label:"paddingBtnTopTablet"},valueRightTablet:{value:_t,label:"paddingBtnRightTablet"},valueBottomTablet:{value:wt,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:yt,label:"paddingBtnLeftTablet"},valueTopMobile:{value:Tt,label:"paddingBtnTopMobile"},valueRightMobile:{value:jt,label:"paddingBtnRightMobile"},valueBottomMobile:{value:Bt,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:Ot,label:"paddingBtnLeftMobile"},unit:{value:St,label:"paddingBtnUnit"},mUnit:{value:Ct,label:"mobilePaddingBtnUnit"},tUnit:{value:Et,label:"tabletPaddingBtnUnit"},deviceType:i,attributes:n,setAttributes:a,link:{value:Ft,label:"btnspacingLink"}})),"icon_text"===Ue&&r.a.createElement(g.a,{label:Object(c.__)("Icon & Text Spacing","ultimate-addons-for-gutenberg"),setAttributes:a,value:ze,onChange:e=>a({tweetIconSpacing:e}),min:0,max:20,unit:{value:Ae,label:"tweetIconSpacingUnit"},initialPosition:5}),"link"===Re&&r.a.createElement(v.a,{tabs:[{name:"normal",title:Object(c.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(c.__)("Hover","ultimate-addons-for-gutenberg")}],normal:r.a.createElement(b.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:we||"",onColorChange:e=>a({tweetLinkColor:e})}),hover:r.a.createElement(b.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Te||"",onColorChange:e=>a({tweetBtnHoverColor:e})}),disableBottomSeparator:!0}),"link"!==Re&&r.a.createElement(v.a,{tabs:[{name:"normal",title:Object(c.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(c.__)("Hover","ultimate-addons-for-gutenberg")}],normal:r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ye||"",onColorChange:e=>a({tweetBtnColor:e})}),r.a.createElement(b.a,{label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:je||"",onColorChange:e=>a({tweetBtnBgColor:e})})),hover:r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Te||"",onColorChange:e=>a({tweetBtnHoverColor:e})}),r.a.createElement(b.a,{label:Object(c.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Be||"",onColorChange:e=>a({tweetBtnBgHoverColor:e})})),disableBottomSeparator:!0})),Zt,ta),r.a.createElement(m.b,B({},m.a.advance,{parentProps:e})))),Dt,Qt,$t)};t.default=r.a.memo(O)}}]);