(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[6],{211:function(e,t,a){"use strict";var l,n,o=a(21),i=a.n(o),r=a(212),u=a.n(r),c=a(2);if(void 0===s)var s=[];const b=e=>{const[t,a]=Object(c.useState)([]);Object(c.useEffect)(()=>{r()},[]),Object(c.useEffect)(()=>{const{onStatus:a,config:l}=e;void 0!==t.status&&a(t.status),l!==t.config&&r()},[e]);const l=()=>{a({status:"loading"})},n=e=>{s.includes(e)||s.push(e)},o=()=>{a({status:"active"})},i=()=>{a({status:"inactive"})},r=()=>{s.includes(e.config.google.families[0])||(u.a.load({...e.config,loading:l,active:o,inactive:i}),n(e.config.google.families[0]));const t=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==t.length||0!==a.length){const r=(t[0]||a[0]).getElementsByTagName("iframe")[0];r&&(u.a.load({...e.config,loading:l,active:o,inactive:i,context:null==r?void 0:r.contentWindow}),n(e.config.google.families[0]))}},{children:b}=e;return b||null};b.propTypes={config:null===(l=i.a.object)||void 0===l?void 0:l.isRequired,children:i.a.element,onStatus:null===(n=i.a.func)||void 0===n?void 0:n.isRequired},b.defaultProps={onStatus:()=>{}},t.a=b},212:function(e,t,a){var l;!function(){function n(e,t,a){return e.call.apply(e.bind,arguments)}function o(e,t,a){if(!e)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,l),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function s(e,t,a,l){if(t=e.c.createElement(t),a)for(var n in a)a.hasOwnProperty(n)&&("style"==n?t.style.cssText=a[n]:t.setAttribute(n,a[n]));return l&&t.appendChild(e.c.createTextNode(l)),t}function b(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,a){t=t||[],a=a||[];for(var l=e.className.split(/\s+/),n=0;n<t.length;n+=1){for(var o=!1,i=0;i<l.length;i+=1)if(t[n]===l[i]){o=!0;break}o||l.push(t[n])}for(t=[],n=0;n<l.length;n+=1){for(o=!1,i=0;i<a.length;i+=1)if(l[n]===a[i]){o=!0;break}o||t.push(l[n])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function m(e,t){for(var a=e.className.split(/\s+/),l=0,n=a.length;l<n;l++)if(a[l]==t)return!0;return!1}function h(e,t,a){function l(){r&&n&&o&&(r(i),r=null)}t=s(e,"link",{rel:"stylesheet",href:t,media:"all"});var n=!1,o=!0,i=null,r=a||null;c?(t.onload=function(){n=!0,l()},t.onerror=function(){n=!0,i=Error("Stylesheet failed to load"),l()}):setTimeout((function(){n=!0,l()}),0),b(e,"head",t)}function f(e,t,a,l){var n=e.c.getElementsByTagName("head")[0];if(n){var o=s(e,"script",{src:t}),i=!1;return o.onload=o.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&n.removeChild(o))},n.appendChild(o),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),l||5e3),o}return null}function v(){this.a=0,this.c=null}function p(e){return e.a++,function(){e.a--,T(e)}}function _(e,t){e.c=t,T(e)}function T(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function S(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function y(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var l=e[a].replace(/['"]/g,"");-1!=l.indexOf(" ")||/^\d/.test(l)?t.push("'"+l+"'"):t.push(l)}return t.join(",")}function B(e){return e.a+e.f}function j(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function O(e){var t=4,a="n",l=null;return e&&((l=e.match(/(normal|oblique|italic)/i))&&l[1]&&(a=l[1].substr(0,1).toLowerCase()),(l=e.match(/([1-9]00|normal|bold)/i))&&l[1]&&(/bold/i.test(l[1])?t=7:/[1-9]00/.test(l[1])&&(t=parseInt(l[1].substr(0,1),10)))),a+t}function E(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function L(e){if(e.g){var t=m(e.f,e.a.c("wf","active")),a=[],l=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),d(e.f,a,l)}M(e,"inactive")}function M(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,B(a)):e.h[t]())}function I(){this.c={}}function F(e,t){this.c=e,this.f=t,this.a=s(this.c,"span",{"aria-hidden":"true"},this.f)}function C(e){b(e.c,"body",e.a)}function k(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+y(e.c)+";font-style:"+j(e)+";font-weight:"+e.f+"00;"}function q(e,t,a,l,n,o){this.g=e,this.j=t,this.a=l,this.c=a,this.f=n||3e3,this.h=o||void 0}function A(e,t,a,l,n,o,i){this.v=e,this.B=t,this.c=a,this.a=l,this.s=i||"BESbswy",this.f={},this.w=n||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new F(this.c,this.s),this.h=new F(this.c,this.s),this.j=new F(this.c,this.s),this.m=new F(this.c,this.s),e=k(e=new S(this.a.c+",serif",B(this.a))),this.g.a.style.cssText=e,e=k(e=new S(this.a.c+",sans-serif",B(this.a))),this.h.a.style.cssText=e,e=k(e=new S("serif",B(this.a))),this.j.a.style.cssText=e,e=k(e=new S("sans-serif",B(this.a))),this.m.a.style.cssText=e,C(this.g),C(this.h),C(this.j),C(this.m)}w.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},q.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),l=new Promise((function(l,n){!function o(){r()-a>=t.f?n():e.fonts.load(function(e){return j(e)+" "+e.f+"00 300px "+y(e.c)}(t.a),t.h).then((function(e){1<=e.length?l():setTimeout(o,25)}),(function(){n()}))}()})),n=null,o=new Promise((function(e,a){n=setTimeout(a,t.f)}));Promise.race([o,l]).then((function(){n&&(clearTimeout(n),n=null),t.g(t.a)}),(function(){t.j(t.a)}))};var x={D:"serif",C:"sans-serif"},H=null;function z(){if(null===H){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);H=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return H}function U(e,t,a){for(var l in x)if(x.hasOwnProperty(l)&&t===e.f[x[l]]&&a===e.f[x[l]])return!0;return!1}function R(e,t){setTimeout(i((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),t(this.a)}),e),0)}function P(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}A.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,l=t.g.a.offsetWidth,n=t.h.a.offsetWidth;(a=l===t.f.serif&&n===t.f["sans-serif"])||(a=z()&&U(t,l,n)),a?r()-t.A>=t.w?z()&&U(t,l,n)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?R(t,t.v):R(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):R(t,t.v)}(this)};var N=null;function W(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),M(e,"active")):L(e.a))}function V(e){this.j=e,this.a=new I,this.h=0,this.f=this.g=!0}function G(e,t,a,l,n){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=n||null,r=l||{};if(0===a.length&&o)L(t.a);else{t.f+=a.length,o&&(t.j=o);var u,c=[];for(u=0;u<a.length;u++){var s=a[u],b=r[s.c],g=t.a,m=s;if(g.g&&d(g.f,[g.a.c("wf",m.c,B(m).toString(),"loading")]),M(g,"fontloading",m),g=null,null===N)if(window.FontFace){m=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);N=m?42<parseInt(m[1],10):!h}else N=!1;g=N?new q(i(t.g,t),i(t.h,t),t.c,s,t.s,b):new A(i(t.g,t),i(t.h,t),t.c,s,t.s,e,b),c.push(g)}for(u=0;u<c.length;u++)c[u].start()}}),0)}function D(e,t){this.c=e,this.a=t}function Q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}P.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,B(e).toString(),"active")],[t.a.c("wf",e.c,B(e).toString(),"loading"),t.a.c("wf",e.c,B(e).toString(),"inactive")]),M(t,"fontactive",e),this.m=!0,W(this)},P.prototype.h=function(e){var t=this.a;if(t.g){var a=m(t.f,t.a.c("wf",e.c,B(e).toString(),"active")),l=[],n=[t.a.c("wf",e.c,B(e).toString(),"loading")];a||l.push(t.a.c("wf",e.c,B(e).toString(),"inactive")),d(t.f,l,n)}M(t,"fontinactive",e),W(this)},V.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var l=[],n=a.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),M(e,"loading")}(t),l=function(e,t,a){var l,n=[];for(l in t)if(t.hasOwnProperty(l)){var o=e.c[l];o&&n.push(o(t[l],a))}return n}(e.a,a,e.c);var o=new P(e.c,t,n);for(e.h=l.length,t=0,a=l.length;t<a;t++)l[t].load((function(t,a,l){G(e,o,t,a,l)}))}(this,new E(this.c,e),e)},D.prototype.load=function(e){var t=this,a=t.a.projectId,l=t.a.version;if(a){var n=t.c.o;f(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(l?"?v="+l:""),(function(l){l?e([]):(n["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(n["__mti_fntLst"+a]){var l,o=n["__mti_fntLst"+a](),i=[];if(o)for(var r=0;r<o.length;r++){var u=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(l=o[r].fontStyle+o[r].fontWeight,i.push(new S(u,l))):i.push(new S(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},Q.prototype.load=function(e){var t,a,l=this.a.urls||[],n=this.a.families||[],o=this.a.testStrings||{},i=new v;for(t=0,a=l.length;t<a;t++)h(this.c,l[t],p(i));var r=[];for(t=0,a=n.length;t<a;t++)if((l=n[t].split(":"))[1])for(var u=l[1].split(","),c=0;c<u.length;c+=1)r.push(new S(l[0],u[c]));else r.push(new S(l[0]));_(i,(function(){e(r,o)}))};var J="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function le(e,t){this.c=e,this.a=t}function ne(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new v,a=this.c,l=new $(this.a.api,this.a.text),n=this.a.families;!function(e,t){for(var a=t.length,l=0;l<a;l++){var n=t[l].split(":");3==n.length&&e.f.push(n.pop());var o="";2==n.length&&""!=n[1]&&(o=":"),e.a.push(n.join(o))}}(l,n);var o=new K(n);!function(e){for(var t=e.f.length,a=0;a<t;a++){var l=e.f[a].split(":"),n=l[0].replace(/\+/g," "),o=["n4"];if(2<=l.length){var i;if(i=[],r=l[1])for(var r,u=(r=r.split(",")).length,c=0;c<u;c++){var s;if((s=r[c]).match(/^[\w-]+$/))if(null==(b=ee.exec(s.toLowerCase())))s="";else{if(s=null==(s=b[2])||""==s?"n":Z[s],null==(b=b[1])||""==b)b="4";else var b=Y[b]||(isNaN(b)?"4":b.substr(0,1));s=[s,b].join("")}else s="";s&&i.push(s)}0<i.length&&(o=i),3==l.length&&(i=[],0<(l=(l=l[2])?l.split(","):i).length&&(l=X[l[0]])&&(e.c[n]=l))}for(e.c[n]||(l=X[n])&&(e.c[n]=l),l=0;l<o.length;l+=1)e.a.push(new S(n,o[l]))}}(o),h(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],l=0;l<t;l++)a.push(e.a[l].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(l),p(t)),_(t,(function(){e(o.a,o.c,ae)}))},le.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?f(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var l=[],n=0;n<t.length;n+=2)for(var o=t[n],i=t[n+1],r=0;r<i.length;r++)l.push(new S(o,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(l)}}),2e3):e([])},ne.prototype.load=function(e){var t=this.f.id,a=this.c.o,l=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var n=0,o=a.fonts.length;n<o;++n){var i=a.fonts[n];l.a.push(new S(i.name,O("font-weight:"+i.weight+";font-style:"+i.style)))}e(l.a)},f(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new V(window);oe.a.c.custom=function(e,t){return new Q(t,e)},oe.a.c.fontdeck=function(e,t){return new ne(t,e)},oe.a.c.monotype=function(e,t){return new D(t,e)},oe.a.c.typekit=function(e,t){return new le(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(oe.load,oe)};void 0===(l=function(){return ie}.call(t,a,t,e))||(e.exports=l)}()},213:function(e,t,a){"use strict";var l=a(1),n=a(7),o=a(5),i=a(0),r=a.n(i),u=a(8);t.a=e=>{const{onSelectImage:t,backgroundImage:a,onRemoveImage:i,showVideoInput:c,label:s,disableRemove:b=!1,allow:g=["image"]}=e;let d,m=Object(l.__)("Image","ultimate-addons-for-gutenberg"),h=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),f=Object(l.__)("Change Image","ultimate-addons-for-gutenberg"),v=["image"];c&&(m=Object(l.__)("Video","ultimate-addons-for-gutenberg"),h=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),f=Object(l.__)("Change Video","ultimate-addons-for-gutenberg"),v=["video"],d=u.a.video_placeholder),m=s||m,m=!1===s?s:m,"Lottie Animation"===s&&(h=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),f=Object(l.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),v=g,d=u.a.lottie);const p=e=>r.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},u.a[e]);return r.a.createElement(n.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+s,label:m},r.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!d&&(null==a?void 0:a.url)&&`url("${(e=>{let t=e;switch(/(?:\.([^.]+))?$/.exec(String(t))[1]){case"json":t="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":t=""}return t})(null==a?void 0:a.url)}")`}},d&&(null==a?void 0:a.url)&&r.a.createElement("div",{className:"spectra-media-control__icon"},d),r.a.createElement(o.MediaUpload,{title:h,onSelect:t,allowedTypes:v,value:a,render:e=>{let{open:t}=e;return(e=>{const t=null!=a&&a.url?"replace":"add";return r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+t,onClick:e},"add"===t?p(t):r.a.createElement("div",{className:"uag-control-label"},f))})(t)}}),!b&&(null==a?void 0:a.url)&&r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:i},p("close"))),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},495:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(211),i=a(38),r=a(1),u=a(20),c=a(17),s=a(80),b=a(30),g=a(24),d=a(37),m=a(59),h=a(213),f=a(22),v=a(13),p=a(26),_=a(7),T=a(5),w=a(18);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const y=e=>{e=e.parentProps;const{setAttributes:t,attributes:a,deviceType:l}=e,{skinStyle:y,align:B,authorColor:j,descColor:O,descFontSize:E,descFontSizeType:L,descFontSizeTablet:M,descFontSizeMobile:I,descFontFamily:F,descFontWeight:C,descFontStyle:k,descLineHeightType:q,descLineHeight:A,descLineHeightTablet:x,descLineHeightMobile:H,descLoadGoogleFonts:z,authorFontSize:U,authorFontSizeType:R,authorFontSizeTablet:P,authorFontSizeMobile:N,authorFontFamily:W,authorFontWeight:V,authorFontStyle:G,authorLineHeightType:D,authorLineHeight:Q,authorLineHeightTablet:$,authorLineHeightMobile:J,authorLoadGoogleFonts:K,descSpace:X,descSpaceTablet:Y,descSpaceMobile:Z,authorSpace:ee,authorSpaceTablet:te,authorSpaceMobile:ae,borderColor:le,borderStyle:ne,borderWidth:oe,borderGap:ie,borderGapTablet:re,borderGapMobile:ue,verticalPadding:ce,verticalPaddingTablet:se,verticalPaddingMobile:be,quoteColor:ge,quoteBgColor:de,quoteSize:me,quoteSizeType:he,quoteSizeTablet:fe,quoteSizeMobile:ve,quotePadding:pe,quotePaddingType:_e,quotePaddingTablet:Te,quotePaddingMobile:we,quoteBorderRadius:Se,quoteStyle:ye,enableTweet:Be,tweetLinkColor:je,tweetBtnColor:Oe,tweetBtnHoverColor:Ee,tweetBtnBgColor:Le,tweetBtnBgHoverColor:Me,tweetBtnFontSize:Ie,tweetBtnFontSizeType:Fe,tweetBtnFontSizeTablet:Ce,tweetBtnFontSizeMobile:ke,tweetBtnFontFamily:qe,tweetBtnFontWeight:Ae,tweetBtnFontStyle:xe,tweetBtnLineHeightType:He,tweetBtnLineHeight:ze,tweetBtnLineHeightTablet:Ue,tweetBtnLineHeightMobile:Re,tweetBtnLoadGoogleFonts:Pe,tweetIconSpacing:Ne,tweetIconSpacingUnit:We,iconView:Ve,iconSkin:Ge,iconLabel:De,iconShareVia:Qe,iconTargetUrl:$e,customUrl:Je,authorImage:Ke,authorImageWidth:Xe,authorImageWidthTablet:Ye,authorImageWidthMobile:Ze,authorImageWidthUnit:et,authorImageGap:tt,authorImageGapTablet:at,authorImageGapMobile:lt,authorImageGapUnit:nt,authorImageSize:ot,authorImgBorderRadius:it,authorImgBorderRadiusTablet:rt,authorImgBorderRadiusMobile:ut,authorImgPosition:ct,quoteTopMargin:st,quoteBottomMargin:bt,quoteLeftMargin:gt,quoteRightMargin:dt,quoteHoverColor:mt,quoteBgHoverColor:ht,borderHoverColor:ft,authorImgBorderRadiusUnit:vt,borderWidthUnit:pt,quoteBorderRadiusUnit:_t,quoteUnit:Tt,quotemobileUnit:wt,quotetabletUnit:St,borderGapUnit:yt,descSpaceUnit:Bt,authorSpaceUnit:jt,verticalPaddingUnit:Ot,paddingBtnTop:Et,paddingBtnBottom:Lt,paddingBtnLeft:Mt,paddingBtnRight:It,paddingBtnTopTablet:Ft,paddingBtnRightTablet:Ct,paddingBtnBottomTablet:kt,paddingBtnLeftTablet:qt,paddingBtnTopMobile:At,paddingBtnRightMobile:xt,paddingBtnBottomMobile:Ht,paddingBtnLeftMobile:zt,paddingBtnUnit:Ut,mobilePaddingBtnUnit:Rt,tabletPaddingBtnUnit:Pt,btnspacingLink:Nt,spacingLink:Wt,descTransform:Vt,authorTransform:Gt,tweetBtnTransform:Dt,descDecoration:Qt,authorDecoration:$t,tweetBtnDecoration:Jt,quoteTopMarginTablet:Kt,quoteBottomMarginTablet:Xt,quoteLeftMarginTablet:Yt,quoteRightMarginTablet:Zt,quoteTopMarginMobile:ea,quoteBottomMarginMobile:ta,quoteLeftMarginMobile:aa,quoteRightMarginMobile:la,author:na,descLetterSpacing:oa,descLetterSpacingTablet:ia,descLetterSpacingMobile:ra,descLetterSpacingType:ua,authorLetterSpacing:ca,authorLetterSpacingTablet:sa,authorLetterSpacingMobile:ba,authorLetterSpacingType:ga,tweetBtnLetterSpacing:da,tweetBtnLetterSpacingTablet:ma,tweetBtnLetterSpacingMobile:ha,tweetBtnLetterSpacingType:fa}=a;let va,pa,_a;if(!0===z){const e={google:{families:[F+(C?":"+C:"")]}};va=n.a.createElement(o.a,{config:e})}if(!0===K){const e={google:{families:[W+(V?":"+V:"")]}};pa=n.a.createElement(o.a,{config:e})}if(!0===Pe){const e={google:{families:[qe+(Ae?":"+Ae:"")]}};_a=n.a.createElement(o.a,{config:e})}const Ta=[{value:"thumbnail",label:Object(r.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(r.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(r.__)("Large","ultimate-addons-for-gutenberg")}],wa=n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{label:Object(r.__)("Author Image","ultimate-addons-for-gutenberg"),onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&t({authorImage:e}):t({authorImage:null})},backgroundImage:Ke,onRemoveImage:()=>{t({authorImage:null})}}),Ke&&"null"!==Ke.url&&""!==Ke.url&&n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Author Image Position","ultimate-addons-for-gutenberg"),data:{value:ct,label:"authorImgPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",label:"Left"},{value:"top",label:"Top"},{value:"right",label:"Right"}],showIcons:!1}))),Sa=n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(r.__)("Quote Icon Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:me,label:"quoteSize"},tablet:{value:fe,label:"quoteSizeTablet"},mobile:{value:ve,label:"quoteSizeMobile"}},min:0,max:50,unit:{value:he,label:"quoteSizeType"},setAttributes:t}),n.a.createElement(g.a,{label:Object(r.__)("Background Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:pe,label:"quotePadding"},tablet:{value:Te,label:"quotePaddingTablet"},mobile:{value:we,label:"quotePaddingMobile"}},min:0,max:200,unit:{value:_e,label:"quotePaddingType"},setAttributes:t}),de&&n.a.createElement(u.a,{label:Object(r.__)("Quote Icon Border Radius","ultimate-addons-for-gutenberg"),setAttributes:t,value:Se,data:{value:Se,label:"quoteBorderRadius"},min:0,max:100,unit:{value:_t,label:"quoteBorderRadiusUnit"},units:[{name:Object(r.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(r.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(r.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),ya=n.a.createElement(w.a,{title:Object(r.__)("Layout","ultimate-addons-for-gutenberg")},n.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Type","ultimate-addons-for-gutenberg"),data:{value:y,label:"skinStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"border",label:Object(r.__)("Border","ultimate-addons-for-gutenberg")},{value:"quotation",label:Object(r.__)("Quotation","ultimate-addons-for-gutenberg")}],showIcons:!1}),"quotation"===y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Quotation Type","ultimate-addons-for-gutenberg"),data:{value:ye,label:"quoteStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"style_1",label:Object(r.__)("Normal","ultimate-addons-for-gutenberg")},{value:"style_2",label:Object(r.__)("Inline","ultimate-addons-for-gutenberg")}],showIcons:!1}),n.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:B,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-left")}),tooltip:Object(r.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-center")}),tooltip:Object(r.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-right")}),tooltip:Object(r.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),wa),Ba=n.a.createElement(w.a,{title:Object(r.__)("Quote","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(i.a,{label:Object(r.__)("Quote Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:z,label:"descLoadGoogleFonts"},fontFamily:{value:F,label:"descFontFamily"},fontWeight:{value:C,label:"descFontWeight"},fontStyle:{value:k,label:"descFontStyle"},fontSizeType:{value:L,label:"descFontSizeType"},fontSize:{value:E,label:"descFontSize"},fontSizeMobile:{value:I,label:"descFontSizeMobile"},fontSizeTablet:{value:M,label:"descFontSizeTablet"},lineHeightType:{value:q,label:"descLineHeightType"},lineHeight:{value:A,label:"descLineHeight"},lineHeightMobile:{value:H,label:"descLineHeightMobile"},lineHeightTablet:{value:x,label:"descLineHeightTablet"},letterSpacing:{value:oa,label:"descLetterSpacing"},letterSpacingTablet:{value:ia,label:"descLetterSpacingTablet"},letterSpacingMobile:{value:ra,label:"descLetterSpacingMobile"},letterSpacingType:{value:ua,label:"descLetterSpacingType"},transform:{value:Vt,label:"descTransform"},decoration:{value:Qt,label:"descDecoration"}}),n.a.createElement(c.a,{label:Object(r.__)("Quote Color","ultimate-addons-for-gutenberg"),colorValue:O||"",data:{value:O,label:"descColor"},setAttributes:t})),ja=n.a.createElement(w.a,{title:Object(r.__)("Author","ultimate-addons-for-gutenberg"),initialOpen:!1},""!==na&&n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{label:Object(r.__)("Author Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:K,label:"authorLoadGoogleFonts"},fontFamily:{value:W,label:"authorFontFamily"},fontWeight:{value:V,label:"authorFontWeight"},fontStyle:{value:G,label:"authorFontStyle"},fontSizeType:{value:R,label:"authorFontSizeType"},fontSize:{value:U,label:"authorFontSize"},fontSizeMobile:{value:N,label:"authorFontSizeMobile"},fontSizeTablet:{value:P,label:"authorFontSizeTablet"},lineHeightType:{value:D,label:"authorLineHeightType"},lineHeight:{value:Q,label:"authorLineHeight"},lineHeightMobile:{value:J,label:"authorLineHeightMobile"},lineHeightTablet:{value:$,label:"authorLineHeightTablet"},letterSpacing:{value:ca,label:"authorLetterSpacing"},letterSpacingTablet:{value:sa,label:"authorLetterSpacingTablet"},letterSpacingMobile:{value:ba,label:"authorLetterSpacingMobile"},letterSpacingType:{value:ga,label:"authorLetterSpacingType"},transform:{value:Gt,label:"authorTransform"},decoration:{value:$t,label:"authorDecoration"}}),n.a.createElement(c.a,{label:Object(r.__)("Author Color","ultimate-addons-for-gutenberg"),colorValue:j||"",data:{value:j,label:"authorColor"},setAttributes:t})),Ke&&"null"!==Ke.url&&""!==Ke.url&&n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{label:Object(r.__)("Author Image Size","ultimate-addons-for-gutenberg"),data:{value:ot,label:"authorImageSize"},setAttributes:t,options:Ta}),n.a.createElement(g.a,{label:Object(r.__)("Author Image Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:Xe,label:"authorImageWidth"},tablet:{value:Ye,label:"authorImageWidthTablet"},mobile:{value:Ze,label:"authorImageWidthMobile"}},min:0,max:500,unit:{value:et,label:"authorImageWidthUnit"},setAttributes:t}),n.a.createElement(g.a,{label:Object(r.__)("Image Border Radius","ultimate-addons-for-gutenberg"),data:{desktop:{value:it,label:"authorImgBorderRadius"},tablet:{value:rt,label:"authorImgBorderRadiusTablet"},mobile:{value:ut,label:"authorImgBorderRadiusMobile"}},min:0,max:50,unit:{value:vt,label:"authorImgBorderRadiusUnit"},units:[{name:Object(r.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(r.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],setAttributes:t}))),Oa=n.a.createElement(w.a,{title:Object(r.__)("Twitter Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(_.ToggleControl,{label:Object(r.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:Be,onChange:()=>t({enableTweet:!Be})}),Be&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_.TextControl,{label:Object(r.__)("Twitter Username","ultimate-addons-for-gutenberg"),value:Qe,onChange:e=>t({iconShareVia:e})}),n.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Icon View","ultimate-addons-for-gutenberg"),data:{value:Ve,label:"iconView"},className:"uagb-multi-button-alignment-control",options:[{value:"icon_text",label:Object(r.__)("Both","ultimate-addons-for-gutenberg")},{value:"icon",label:Object(r.__)("Icon","ultimate-addons-for-gutenberg")},{value:"text",label:Object(r.__)("Text","ultimate-addons-for-gutenberg")}],showIcons:!1}),n.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Icon Style","ultimate-addons-for-gutenberg"),data:{value:Ge,label:"iconSkin"},className:"uagb-multi-button-alignment-control",options:[{value:"classic",label:Object(r.__)("Classic","ultimate-addons-for-gutenberg")},{value:"bubble",label:Object(r.__)("Bubble","ultimate-addons-for-gutenberg")},{value:"link",label:Object(r.__)("Link","ultimate-addons-for-gutenberg")}],showIcons:!1}),n.a.createElement(f.a,{setAttributes:t,label:Object(r.__)("Target URL","ultimate-addons-for-gutenberg"),data:{value:$e,label:"iconTargetUrl"},className:"uagb-multi-button-alignment-control",options:[{value:"current",label:Object(r.__)("Current Page","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(r.__)("Custom URL","ultimate-addons-for-gutenberg")}],showIcons:!1}),"custom"===$e&&n.a.createElement(_.TextControl,{label:Object(r.__)("URL","ultimate-addons-for-gutenberg"),value:Je,onChange:e=>t({customUrl:e})})),Be&&"icon"!==Ve&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_.TextControl,{label:Object(r.__)("Label","ultimate-addons-for-gutenberg"),value:De,onChange:e=>t({iconLabel:e})}))),Ea=n.a.createElement(w.a,{title:Object(r.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},Ke&&Ke.url&&n.a.createElement(g.a,{label:Object(r.__)("Author - Image Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:tt,label:"authorImageGap"},tablet:{value:at,label:"authorImageGapTablet"},mobile:{value:lt,label:"authorImageGapMobile"}},min:0,max:500,unit:{value:nt,label:"authorImageGapUnit"},setAttributes:t}),"quotation"===y&&n.a.createElement(d.a,S({},e,{label:Object(r.__)("Quote Icon Margin","ultimate-addons-for-gutenberg"),valueTop:{value:st,label:"quoteTopMargin"},valueRight:{value:dt,label:"quoteRightMargin"},valueBottom:{value:bt,label:"quoteBottomMargin"},valueLeft:{value:gt,label:"quoteLeftMargin"},valueTopTablet:{value:Kt,label:"quoteTopMarginTablet"},valueRightTablet:{value:Zt,label:"quoteRightMarginTablet"},valueBottomTablet:{value:Xt,label:"quoteBottomMarginTablet"},valueLeftTablet:{value:Yt,label:"quoteLeftMarginTablet"},valueTopMobile:{value:ea,label:"quoteTopMarginMobile"},valueRightMobile:{value:la,label:"quoteRightMarginMobile"},valueBottomMobile:{value:ta,label:"quoteBottomMarginMobile"},valueLeftMobile:{value:aa,label:"quoteLeftMarginMobile"},unit:{value:Tt,label:"quoteUnit"},mUnit:{value:wt,label:"quotemobileUnit"},tUnit:{value:St,label:"quotetabletUnit"},deviceType:l,attributes:a,setAttributes:t,link:{value:Wt,label:"spacingLink"}})),"border"===y&&n.a.createElement(g.a,{label:Object(r.__)("Border - Quote Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:ie,label:"borderGap"},tablet:{value:re,label:"borderGapTablet"},mobile:{value:ue,label:"borderGapMobile"}},min:0,max:200,unit:{value:yt,label:"borderGapUnit"},setAttributes:t}),n.a.createElement(g.a,{label:Object(r.__)("Quote Bottom Spacing","ultimate-addons-for-gutenberg"),data:{desktop:{value:X,label:"descSpace"},tablet:{value:Y,label:"descSpaceTablet"},mobile:{value:Z,label:"descSpaceMobile"}},min:0,max:200,unit:{value:Bt,label:"descSpaceUnit"},setAttributes:t}),"center"===B&&"border"!==y&&n.a.createElement(g.a,{label:Object(r.__)("Author Bottom Spacing","ultimate-addons-for-gutenberg"),data:{desktop:{value:ee,label:"authorSpace"},tablet:{value:te,label:"authorSpaceTablet"},mobile:{value:ae,label:"authorSpaceMobile"}},min:0,max:200,unit:{value:jt,label:"authorSpaceUnit"},setAttributes:t}),"border"===y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(r.__)("Vertical Spacing","ultimate-addons-for-gutenberg"),data:{desktop:{value:ce,label:"verticalPadding"},tablet:{value:se,label:"verticalPaddingTablet"},mobile:{value:be,label:"verticalPaddingMobile"}},min:0,max:500,unit:{value:Ot,label:"verticalPaddingUnit"},setAttributes:t})));return n.a.createElement(n.a.Fragment,null,n.a.createElement(T.BlockControls,{key:"controls"}),n.a.createElement(T.InspectorControls,null,n.a.createElement(s.a,null,n.a.createElement(b.b,b.a.general,ya,Oa),n.a.createElement(b.b,b.a.style,(()=>{const e=n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{label:Object(r.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:ge||"",data:{value:ge,label:"quoteColor"},setAttributes:t}),n.a.createElement(c.a,{label:Object(r.__)("Icon Background Color","ultimate-addons-for-gutenberg"),colorValue:de||"",data:{value:de,label:"quoteBgColor"},setAttributes:t})),a=n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{label:Object(r.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:mt||"",data:{value:mt,label:"quoteHoverColor"},setAttributes:t}),n.a.createElement(c.a,{label:Object(r.__)("Icon Background Color","ultimate-addons-for-gutenberg"),colorValue:ht||"",data:{value:ht,label:"quoteBgHoverColor"},setAttributes:t}));return n.a.createElement(w.a,{title:Object(r.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},"border"===y&&(()=>{const e=n.a.createElement(c.a,{label:Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:le||"",data:{value:le,label:"borderColor"},setAttributes:t}),a=n.a.createElement(c.a,{label:Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:ft||"",data:{value:ft,label:"borderHoverColor"},setAttributes:t});return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{label:Object(r.__)("Border Style","ultimate-addons-for-gutenberg"),data:{value:ne,label:"borderStyle"},setAttributes:t,options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(r.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(r.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(r.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(r.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!==ne&&n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{label:Object(r.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:t,value:oe,data:{value:oe,label:"borderWidth"},min:0,max:50,unit:{value:pt,label:"borderWidthUnit"}}),n.a.createElement(m.a,{tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg")}],normal:e,hover:a,disableBottomSeparator:!0})))})(),"quotation"===y&&Sa,"quotation"===y&&n.a.createElement(m.a,{tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg")}],normal:e,hover:a,disableBottomSeparator:!0}))})(),Be&&n.a.createElement(w.a,{title:Object(r.__)("Twitter Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},"icon"!==Ve&&n.a.createElement(i.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:Pe,label:"tweetBtnLoadGoogleFonts"},fontFamily:{value:qe,label:"tweetBtnFontFamily"},fontWeight:{value:Ae,label:"tweetBtnFontWeight"},fontStyle:{value:xe,label:"tweetBtnFontStyle"},fontSizeType:{value:Fe,label:"tweetBtnFontSizeType"},fontSize:{value:Ie,label:"tweetBtnFontSize"},fontSizeMobile:{value:ke,label:"tweetBtnFontSizeMobile"},fontSizeTablet:{value:Ce,label:"tweetBtnFontSizeTablet"},lineHeightType:{value:He,label:"tweetBtnLineHeightType"},lineHeight:{value:ze,label:"tweetBtnLineHeight"},lineHeightMobile:{value:Re,label:"tweetBtnLineHeightMobile"},lineHeightTablet:{value:Ue,label:"tweetBtnLineHeightTablet"},letterSpacing:{value:da,label:"tweetBtnLetterSpacing"},letterSpacingTablet:{value:ma,label:"tweetBtnLetterSpacingTablet"},letterSpacingMobile:{value:ha,label:"tweetBtnLetterSpacingMobile"},letterSpacingType:{value:fa,label:"tweetBtnLetterSpacingType"},transform:{value:Dt,label:"tweetBtnTransform"},decoration:{value:Jt,label:"tweetBtnDecoration"}}),"link"!==Ge&&n.a.createElement(d.a,S({},e,{label:Object(r.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Et,label:"paddingBtnTop"},valueRight:{value:It,label:"paddingBtnRight"},valueBottom:{value:Lt,label:"paddingBtnBottom"},valueLeft:{value:Mt,label:"paddingBtnLeft"},valueTopTablet:{value:Ft,label:"paddingBtnTopTablet"},valueRightTablet:{value:Ct,label:"paddingBtnRightTablet"},valueBottomTablet:{value:kt,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:qt,label:"paddingBtnLeftTablet"},valueTopMobile:{value:At,label:"paddingBtnTopMobile"},valueRightMobile:{value:xt,label:"paddingBtnRightMobile"},valueBottomMobile:{value:Ht,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:zt,label:"paddingBtnLeftMobile"},unit:{value:Ut,label:"paddingBtnUnit"},mUnit:{value:Rt,label:"mobilePaddingBtnUnit"},tUnit:{value:Pt,label:"tabletPaddingBtnUnit"},deviceType:l,attributes:a,setAttributes:t,link:{value:Nt,label:"btnspacingLink"}})),"icon_text"===Ve&&n.a.createElement(u.a,{label:Object(r.__)("Icon & Text Spacing","ultimate-addons-for-gutenberg"),setAttributes:t,value:Ne,data:{value:Ne,label:"tweetIconSpacing"},min:0,max:20,unit:{value:We,label:"tweetIconSpacingUnit"},initialPosition:5}),"link"===Ge&&n.a.createElement(m.a,{tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg")}],normal:n.a.createElement(c.a,{label:Object(r.__)("Color","ultimate-addons-for-gutenberg"),colorValue:je||"",data:{value:je,label:"tweetLinkColor"},setAttributes:t}),hover:n.a.createElement(c.a,{label:Object(r.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ee||"",data:{value:Ee,label:"tweetBtnHoverColor"},setAttributes:t}),disableBottomSeparator:!0}),"link"!==Ge&&n.a.createElement(m.a,{tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg")}],normal:n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{label:Object(r.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Oe||"",data:{value:Oe,label:"tweetBtnColor"},setAttributes:t}),n.a.createElement(c.a,{label:Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Le||"",data:{value:Le,label:"tweetBtnBgColor"},setAttributes:t})),hover:n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{label:Object(r.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ee||"",data:{value:Ee,label:"tweetBtnHoverColor"},setAttributes:t}),n.a.createElement(c.a,{label:Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Me||"",data:{value:Me,label:"tweetBtnBgHoverColor"},setAttributes:t})),disableBottomSeparator:!0})),Ba,ja,Ea),n.a.createElement(b.b,S({},b.a.advance,{parentProps:e})))),va,pa,_a)};t.default=n.a.memo(y)}}]);