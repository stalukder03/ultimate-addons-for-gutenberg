(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[63],{212:function(e,t,i){"use strict";var n,a,l=i(20),o=i.n(l),r=i(213),s=i.n(r),c=i(2);if(void 0===u)var u=[];const f=e=>{const[t,i]=Object(c.useState)([]);Object(c.useEffect)(()=>{r()},[]),Object(c.useEffect)(()=>{const{onStatus:i,config:n}=e;void 0!==t.status&&i(t.status),n!==t.config&&r()},[e]);const n=()=>{i({status:"loading"})},a=e=>{u.includes(e)||u.push(e)},l=()=>{i({status:"active"})},o=()=>{i({status:"inactive"})},r=()=>{u.includes(e.config.google.families[0])||(s.a.load({...e.config,loading:n,active:l,inactive:o}),a(e.config.google.families[0]));const t=document.getElementsByClassName("is-tablet-preview"),i=document.getElementsByClassName("is-mobile-preview");if(0!==t.length||0!==i.length){const r=(t[0]||i[0]).getElementsByTagName("iframe")[0];r&&(s.a.load({...e.config,loading:n,active:l,inactive:o,context:null==r?void 0:r.contentWindow}),a(e.config.google.families[0]))}},{children:f}=e;return f||null};f.propTypes={config:null===(n=o.a.object)||void 0===n?void 0:n.isRequired,children:o.a.element,onStatus:null===(a=o.a.func)||void 0===a?void 0:a.isRequired},f.defaultProps={onStatus:()=>{}},t.a=f},213:function(e,t,i){var n;!function(){function a(e,t,i){return e.call.apply(e.bind,arguments)}function l(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function o(e,t,i){return(o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function u(e,t,i,n){if(t=e.c.createElement(t),i)for(var a in i)i.hasOwnProperty(a)&&("style"==a?t.style.cssText=i[a]:t.setAttribute(a,i[a]));return n&&t.appendChild(e.c.createTextNode(n)),t}function f(e,t,i){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(i,e.lastChild)}function h(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e,t,i){t=t||[],i=i||[];for(var n=e.className.split(/\s+/),a=0;a<t.length;a+=1){for(var l=!1,o=0;o<n.length;o+=1)if(t[a]===n[o]){l=!0;break}l||n.push(t[a])}for(t=[],a=0;a<n.length;a+=1){for(l=!1,o=0;o<i.length;o+=1)if(n[a]===i[o]){l=!0;break}l||t.push(n[a])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function p(e,t){for(var i=e.className.split(/\s+/),n=0,a=i.length;n<a;n++)if(i[n]==t)return!0;return!1}function d(e,t,i){function n(){r&&a&&l&&(r(o),r=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var a=!1,l=!0,o=null,r=i||null;c?(t.onload=function(){a=!0,n()},t.onerror=function(){a=!0,o=Error("Stylesheet failed to load"),n()}):setTimeout((function(){a=!0,n()}),0),f(e,"head",t)}function b(e,t,i,n){var a=e.c.getElementsByTagName("head")[0];if(a){var l=u(e,"script",{src:t}),o=!1;return l.onload=l.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,i&&i(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&a.removeChild(l))},a.appendChild(l),setTimeout((function(){o||(o=!0,i&&i(Error("Script load timeout")))}),n||5e3),l}return null}function m(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,_(e)}}function y(e,t){e.c=t,_(e)}function _(e){0==e.a&&e.c&&(e.c(),e.c=null)}function S(e){this.a=e||"-"}function w(e,t){this.c=e,this.f=4,this.a="n";var i=(t||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function T(e){var t=[];e=e.split(/,\s*/);for(var i=0;i<e.length;i++){var n=e[i].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function F(e){return e.a+e.f}function j(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function L(e){var t=4,i="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(i=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),i+t}function E(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new S("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function O(e){if(e.g){var t=p(e.f,e.a.c("wf","active")),i=[],n=[e.a.c("wf","loading")];t||i.push(e.a.c("wf","inactive")),g(e.f,i,n)}x(e,"inactive")}function x(e,t,i){e.j&&e.h[t]&&(i?e.h[t](i.c,F(i)):e.h[t]())}function z(){this.c={}}function k(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function C(e){f(e.c,"body",e.a)}function H(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(e.c)+";font-style:"+j(e)+";font-weight:"+e.f+"00;"}function M(e,t,i,n,a,l){this.g=e,this.j=t,this.a=n,this.c=i,this.f=a||3e3,this.h=l||void 0}function A(e,t,i,n,a,l,o){this.v=e,this.B=t,this.c=i,this.a=n,this.s=o||"BESbswy",this.f={},this.w=a||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new k(this.c,this.s),this.h=new k(this.c,this.s),this.j=new k(this.c,this.s),this.m=new k(this.c,this.s),e=H(e=new w(this.a.c+",serif",F(this.a))),this.g.a.style.cssText=e,e=H(e=new w(this.a.c+",sans-serif",F(this.a))),this.h.a.style.cssText=e,e=H(e=new w("serif",F(this.a))),this.j.a.style.cssText=e,e=H(e=new w("sans-serif",F(this.a))),this.m.a.style.cssText=e,C(this.g),C(this.h),C(this.j),C(this.m)}S.prototype.c=function(e){for(var t=[],i=0;i<arguments.length;i++)t.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},M.prototype.start=function(){var e=this.c.o.document,t=this,i=r(),n=new Promise((function(n,a){!function l(){r()-i>=t.f?a():e.fonts.load(function(e){return j(e)+" "+e.f+"00 300px "+T(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(l,25)}),(function(){a()}))}()})),a=null,l=new Promise((function(e,i){a=setTimeout(i,t.f)}));Promise.race([l,n]).then((function(){a&&(clearTimeout(a),a=null),t.g(t.a)}),(function(){t.j(t.a)}))};var N={D:"serif",C:"sans-serif"},I=null;function W(){if(null===I){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);I=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return I}function P(e,t,i){for(var n in N)if(N.hasOwnProperty(n)&&t===e.f[N[n]]&&i===e.f[N[n]])return!0;return!1}function B(e,t){setTimeout(o((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),t(this.a)}),e),0)}function D(e,t,i){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=i}A.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var i,n=t.g.a.offsetWidth,a=t.h.a.offsetWidth;(i=n===t.f.serif&&a===t.f["sans-serif"])||(i=W()&&P(t,n,a)),i?r()-t.A>=t.w?W()&&P(t,n,a)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?B(t,t.v):B(t,t.B):function(t){setTimeout(o((function(){e(this)}),t),50)}(t):B(t,t.v)}(this)};var G=null;function V(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&g(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),x(e,"active")):O(e.a))}function R(e){this.j=e,this.a=new z,this.h=0,this.f=this.g=!0}function $(e,t,i,n,a){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=a||null,r=n||{};if(0===i.length&&l)O(t.a);else{t.f+=i.length,l&&(t.j=l);var s,c=[];for(s=0;s<i.length;s++){var u=i[s],f=r[u.c],h=t.a,p=u;if(h.g&&g(h.f,[h.a.c("wf",p.c,F(p).toString(),"loading")]),x(h,"fontloading",p),h=null,null===G)if(window.FontFace){p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);G=p?42<parseInt(p[1],10):!d}else G=!1;h=G?new M(o(t.g,t),o(t.h,t),t.c,u,t.s,f):new A(o(t.g,t),o(t.h,t),t.c,u,t.s,e,f),c.push(h)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function U(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}D.prototype.g=function(e){var t=this.a;t.g&&g(t.f,[t.a.c("wf",e.c,F(e).toString(),"active")],[t.a.c("wf",e.c,F(e).toString(),"loading"),t.a.c("wf",e.c,F(e).toString(),"inactive")]),x(t,"fontactive",e),this.m=!0,V(this)},D.prototype.h=function(e){var t=this.a;if(t.g){var i=p(t.f,t.a.c("wf",e.c,F(e).toString(),"active")),n=[],a=[t.a.c("wf",e.c,F(e).toString(),"loading")];i||n.push(t.a.c("wf",e.c,F(e).toString(),"inactive")),g(t.f,n,a)}x(t,"fontinactive",e),V(this)},R.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,i){var n=[],a=i.timeout;!function(e){e.g&&g(e.f,[e.a.c("wf","loading")]),x(e,"loading")}(t),n=function(e,t,i){var n,a=[];for(n in t)if(t.hasOwnProperty(n)){var l=e.c[n];l&&a.push(l(t[n],i))}return a}(e.a,i,e.c);var l=new D(e.c,t,a);for(e.h=n.length,t=0,i=n.length;t<i;t++)n[t].load((function(t,i,n){$(e,l,t,i,n)}))}(this,new E(this.c,e),e)},q.prototype.load=function(e){var t=this,i=t.a.projectId,n=t.a.version;if(i){var a=t.c.o;b(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+i+".js"+(n?"?v="+n:""),(function(n){n?e([]):(a["__MonotypeConfiguration__"+i]=function(){return t.a},function t(){if(a["__mti_fntLst"+i]){var n,l=a["__mti_fntLst"+i](),o=[];if(l)for(var r=0;r<l.length;r++){var s=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,o.push(new w(s,n))):o.push(new w(s))}e(o)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+i}else e([])},U.prototype.load=function(e){var t,i,n=this.a.urls||[],a=this.a.families||[],l=this.a.testStrings||{},o=new m;for(t=0,i=n.length;t<i;t++)d(this.c,n[t],v(o));var r=[];for(t=0,i=a.length;t<i;t++)if((n=a[t].split(":"))[1])for(var s=n[1].split(","),c=0;c<s.length;c+=1)r.push(new w(n[0],s[c]));else r.push(new w(n[0]));y(o,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ie={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function ae(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,i=this.c,n=new J(this.a.api,this.a.text),a=this.a.families;!function(e,t){for(var i=t.length,n=0;n<i;n++){var a=t[n].split(":");3==a.length&&e.f.push(a.pop());var l="";2==a.length&&""!=a[1]&&(l=":"),e.a.push(a.join(l))}}(n,a);var l=new X(a);!function(e){for(var t=e.f.length,i=0;i<t;i++){var n=e.f[i].split(":"),a=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var o;if(o=[],r=n[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(f=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&o.push(u)}0<o.length&&(l=o),3==n.length&&(o=[],0<(n=(n=n[2])?n.split(","):o).length&&(n=Q[n[0]])&&(e.c[a]=n))}for(e.c[a]||(n=Q[a])&&(e.c[a]=n),n=0;n<l.length;n+=1)e.a.push(new w(a,l[n]))}}(l),d(i,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,i=[],n=0;n<t;n++)i.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+i.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),y(t,(function(){e(l.a,l.c,ie)}))},ne.prototype.load=function(e){var t=this.a.id,i=this.c.o;t?b(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){t=i.Typekit.config.fn;for(var n=[],a=0;a<t.length;a+=2)for(var l=t[a],o=t[a+1],r=0;r<o.length;r++)n.push(new w(l,o[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},ae.prototype.load=function(e){var t=this.f.id,i=this.c.o,n=this;t?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[t]=function(t,i){for(var a=0,l=i.fonts.length;a<l;++a){var o=i.fonts[a];n.a.push(new w(o.name,L("font-weight:"+o.weight+";font-style:"+o.style)))}e(n.a)},b(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new R(window);le.a.c.custom=function(e,t){return new U(t,e)},le.a.c.fontdeck=function(e,t){return new ae(t,e)},le.a.c.monotype=function(e,t){return new q(t,e)},le.a.c.typekit=function(e,t){return new ne(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var oe={load:o(le.load,le)};void 0===(n=function(){return oe}.call(t,i,t,e))||(e.exports=n)}()},214:function(e,t,i){"use strict";var n=i(1),a=i(7),l=i(5),o=i(0),r=i.n(o),s=i(8);t.a=e=>{const{onSelectImage:t,backgroundImage:i,onRemoveImage:o,showVideoInput:c,label:u,disableRemove:f=!1,allow:h=["image"]}=e;let g,p=Object(n.__)("Image","ultimate-addons-for-gutenberg"),d=Object(n.__)("Select Image","ultimate-addons-for-gutenberg"),b=Object(n.__)("Change Image","ultimate-addons-for-gutenberg"),m=["image"];c&&(p=Object(n.__)("Video","ultimate-addons-for-gutenberg"),d=Object(n.__)("Select Video","ultimate-addons-for-gutenberg"),b=Object(n.__)("Change Video","ultimate-addons-for-gutenberg"),m=["video"],g=s.a.video_placeholder),p=u||p,p=!1===u?u:p,"Lottie Animation"===u&&(d=Object(n.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),b=Object(n.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),m=h,g=s.a.lottie);const v=e=>r.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},s.a[e]);return r.a.createElement(a.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+u,label:p},r.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!g&&(null==i?void 0:i.url)&&`url("${(e=>{let t=e;switch(/(?:\.([^.]+))?$/.exec(String(t))[1]){case"json":t="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":t=""}return t})(null==i?void 0:i.url)}")`}},g&&(null==i?void 0:i.url)&&r.a.createElement("div",{className:"spectra-media-control__icon"},g),r.a.createElement(l.MediaUpload,{title:d,onSelect:t,allowedTypes:m,value:i,render:e=>{let{open:t}=e;return(e=>{const t=null!=i&&i.url?"replace":"add";return r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+t,onClick:e},"add"===t?v(t):r.a.createElement("div",{className:"uag-control-label"},b))})(t)}}),!f&&(null==i?void 0:i.url)&&r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:o},v("close"))),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},225:function(e,t,i){"use strict";function n(e){const t=[];for(const i in e)if(e.hasOwnProperty(i)){const e={value:i,label:i};t.push(e)}return t}i.d(t,"a",(function(){return n}))},496:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),l=i(1),o=i(78),r=i(31),s=i(214),c=i(5),u=i(38),f=i(212),h=i(17),g=i(27),p=i(225),d=i(7),b=i(18);let m=[{value:"thumbnail",label:Object(l.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(l.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(l.__)("Large","ultimate-addons-for-gutenberg")}];const v=e=>{e=e.parentProps;const{attributes:t,setAttributes:i}=e,{url:n,urlType:v,image:y,imageSize:_,urlText:S,urlFontSize:w,urlFontSizeType:T,urlFontSizeMobile:F,urlFontSizeTablet:j,urlFontFamily:L,urlFontWeight:E,urlLoadGoogleFonts:O,titleFontSize:x,titleFontSizeType:z,titleFontSizeMobile:k,titleFontSizeTablet:C,titleFontFamily:H,titleFontWeight:M,titleLoadGoogleFonts:A,descriptionFontSize:N,descriptionFontSizeType:I,descriptionFontSizeMobile:W,descriptionFontSizeTablet:P,descriptionFontFamily:B,descriptionFontWeight:D,descriptionLoadGoogleFonts:G,urlTarget:V,imgPosition:R,titleColor:$,descriptionColor:q,urlColor:U,urlFontStyle:J,urlTransform:K,urlDecoration:X,titleFontStyle:Q,titleTransform:Y,titleDecoration:Z,descriptionFontStyle:ee,descriptionTransform:te,descriptionDecoration:ie,titleLetterSpacing:ne,titleLetterSpacingTablet:ae,titleLetterSpacingMobile:le,titleLetterSpacingType:oe,descriptionLetterSpacing:re,descriptionLetterSpacingTablet:se,descriptionLetterSpacingMobile:ce,descriptionLetterSpacingType:ue,titleLineHeight:fe,titleLineHeightTablet:he,titleLineHeightMobile:ge,titleLineHeightType:pe,descriptionLineHeight:de,descriptionLineHeightType:be,descriptionLineHeightTablet:me,descriptionLineHeightMobile:ve,urlLineHeight:ye,urlLineHeightTablet:_e,urlLineHeightMobile:Se,urlLineHeightType:we,urlLetterSpacing:Te,urlLetterSpacingTablet:Fe,urlLetterSpacingMobile:je,urlLetterSpacingType:Le}=t;let Ee,Oe,xe;if(m.map(e=>(e.label=e.label.replace(/\w/,e=>e.toUpperCase()),e)),!0===O){const e={google:{families:[L+(E?":"+E:"")]}};Ee=a.a.createElement(f.a,{config:e})}if(!0===A){const e={google:{families:[H+(M?":"+M:"")]}};Oe=a.a.createElement(f.a,{config:e})}if(!0===G){const e={google:{families:[B+(D?":"+D:"")]}};xe=a.a.createElement(f.a,{config:e})}return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.InspectorControls,null,a.a.createElement(o.a,null,a.a.createElement(r.b,r.a.general,a.a.createElement(b.a,{initialOpen:!0,title:Object(l.__)("Image","ultimate-addons-for-gutenberg")},a.a.createElement(s.a,{onSelectImage:e=>{e&&e.url&&e.type&&"image"===e.type?(e.sizes&&(m=Object(p.a)(e.sizes)),i({image:e})):i({image:null})},backgroundImage:y,onRemoveImage:()=>{i({image:""})}}),y&&"null"!==y.url&&""!==y.url&&a.a.createElement(a.a.Fragment,null,a.a.createElement(g.a,{label:Object(l.__)("Image Size","ultimate-addons-for-gutenberg"),data:{value:_,label:"imageSize"},setAttributes:i,options:m}),a.a.createElement(g.a,{label:Object(l.__)("Select Position","ultimate-addons-for-gutenberg"),data:{value:R,label:"imgPosition"},setAttributes:i,options:[{value:"above-title",label:Object(l.__)("Above Title")},{value:"left-title",label:Object(l.__)("Left of Title")},{value:"right-title",label:Object(l.__)("Right of Title")}]}))),a.a.createElement(b.a,{title:Object(l.__)("Add Link"),initialOpen:!1},a.a.createElement(g.a,{label:Object(l.__)("Type","ultimate-addons-for-gutenberg"),data:{value:v,label:"urlType"},setAttributes:i,options:[{value:"text",label:Object(l.__)("Text")},{value:"all",label:Object(l.__)("Complete Box")}]}),"text"===v&&a.a.createElement(a.a.Fragment,null,a.a.createElement(d.TextControl,{label:Object(l.__)("Text"),value:S,onChange:e=>i({urlText:e})})),"none"!==v&&a.a.createElement(a.a.Fragment,null,a.a.createElement(d.TextControl,{label:Object(l.__)("Link"),value:n,onChange:e=>i({url:e})}),a.a.createElement(d.ToggleControl,{label:Object(l.__)("Open in new window"),checked:V,onChange:()=>i({urlTarget:!V})})))),a.a.createElement(r.b,r.a.style,a.a.createElement(b.a,{title:Object(l.__)("Title"),initialOpen:!0},a.a.createElement(u.a,{label:Object(l.__)("Typography"),attributes:t,setAttributes:i,loadGoogleFonts:{value:A,label:"titleLoadGoogleFonts"},fontFamily:{value:H,label:"titleFontFamily"},fontWeight:{value:M,label:"titleFontWeight"},fontStyle:{value:Q,label:"titleFontStyle"},transform:{value:Y,label:"titleTransform"},decoration:{value:Z,label:"titleDecoration"},fontSizeType:{value:z,label:"titleFontSizeType"},fontSize:{value:x,label:"titleFontSize"},fontSizeMobile:{value:k,label:"titleFontSizeMobile"},fontSizeTablet:{value:C,label:"titleFontSizeTablet"},lineHeightType:{value:pe,label:"titleLineHeightType"},lineHeight:{value:fe,label:"titleLineHeight"},lineHeightMobile:{value:ge,label:"titleLineHeightMobile"},lineHeightTablet:{value:he,label:"titleLineHeightTablet"},letterSpacing:{value:ne,label:"titleLetterSpacing"},letterSpacingTablet:{value:ae,label:"titleLetterSpacingTablet"},letterSpacingMobile:{value:le,label:"titleLetterSpacingMobile"},letterSpacingType:{value:oe,label:"titleLetterSpacingType"}}),a.a.createElement(h.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:$||"",data:{value:$,label:"titleColor"},setAttributes:i})),a.a.createElement(b.a,{title:Object(l.__)("Description"),initialOpen:!1},a.a.createElement(u.a,{label:Object(l.__)("Typography"),attributes:t,setAttributes:i,loadGoogleFonts:{value:G,label:"descriptionLoadGoogleFonts"},fontFamily:{value:B,label:"descriptionFontFamily"},fontWeight:{value:D,label:"descriptionFontWeight"},fontStyle:{value:ee,label:"descriptionFontStyle"},transform:{value:te,label:"descriptionTransform"},decoration:{value:ie,label:"descriptionDecoration"},fontSizeType:{value:I,label:"descriptionFontSizeType"},fontSize:{value:N,label:"descriptionFontSize"},fontSizeMobile:{value:W,label:"descriptionFontSizeMobile"},fontSizeTablet:{value:P,label:"descriptionFontSizeTablet"},lineHeightType:{value:be,label:"descriptionLineHeightType"},lineHeight:{value:de,label:"descriptionLineHeight"},lineHeightMobile:{value:ve,label:"descriptionLineHeightMobile"},lineHeightTablet:{value:me,label:"descriptionLineHeightTablet"},letterSpacing:{value:re,label:"descriptionLetterSpacing"},letterSpacingTablet:{value:se,label:"descriptionLetterSpacingTablet"},letterSpacingMobile:{value:ce,label:"descriptionLetterSpacingMobile"},letterSpacingType:{value:ue,label:"descriptionLetterSpacingType"}}),a.a.createElement(h.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:q||"",data:{value:q,label:"descriptionColor"},setAttributes:i})),"text"===v&&a.a.createElement(b.a,{title:Object(l.__)("Link"),initialOpen:!0},a.a.createElement(u.a,{label:Object(l.__)("Typography"),attributes:t,setAttributes:i,loadGoogleFonts:{value:O,label:"urlLoadGoogleFonts"},fontFamily:{value:L,label:"urlFontFamily"},fontWeight:{value:E,label:"urlFontWeight"},fontStyle:{value:J,label:"urlFontStyle"},transform:{value:K,label:"urlTransform"},decoration:{value:X,label:"urlDecoration"},fontSizeType:{value:T,label:"urlFontSizeType"},fontSize:{value:w,label:"urlFontSize"},fontSizeMobile:{value:F,label:"urlFontSizeMobile"},fontSizeTablet:{value:j,label:"urlFontSizeTablet"},lineHeightType:{value:we,label:"urlLineHeightType"},lineHeight:{value:ye,label:"urlLineHeight"},lineHeightMobile:{value:Se,label:"urlLineHeightMobile"},lineHeightTablet:{value:_e,label:"urlLineHeightTablet"},letterSpacing:{value:Te,label:"urlLetterSpacing"},letterSpacingTablet:{value:Fe,label:"urlLetterSpacingTablet"},letterSpacingMobile:{value:je,label:"urlLetterSpacingMobile"},letterSpacingType:{value:Le,label:"urlLetterSpacingType"}}),a.a.createElement(h.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:U||"",data:{value:U,label:"urlColor"},setAttributes:i}))),a.a.createElement(r.b,r.a.advance))),Ee,Oe,xe)};t.default=a.a.memo(v)}}]);