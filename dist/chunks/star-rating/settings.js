(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[103],{212:function(t,e,a){"use strict";var l,n,i=a(20),o=a.n(i),r=a(213),s=a.n(r),c=a(2);if(void 0===u)var u=[];const f=t=>{const[e,a]=Object(c.useState)([]);Object(c.useEffect)(()=>{r()},[]),Object(c.useEffect)(()=>{const{onStatus:a,config:l}=t;void 0!==e.status&&a(e.status),l!==e.config&&r()},[t]);const l=()=>{a({status:"loading"})},n=t=>{u.includes(t)||u.push(t)},i=()=>{a({status:"active"})},o=()=>{a({status:"inactive"})},r=()=>{u.includes(t.config.google.families[0])||(s.a.load({...t.config,loading:l,active:i,inactive:o}),n(t.config.google.families[0]));const e=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==e.length||0!==a.length){const r=(e[0]||a[0]).getElementsByTagName("iframe")[0];r&&(s.a.load({...t.config,loading:l,active:i,inactive:o,context:null==r?void 0:r.contentWindow}),n(t.config.google.families[0]))}},{children:f}=t;return f||null};f.propTypes={config:null===(l=o.a.object)||void 0===l?void 0:l.isRequired,children:o.a.element,onStatus:null===(n=o.a.func)||void 0===n?void 0:n.isRequired},f.defaultProps={onStatus:()=>{}},e.a=f},213:function(t,e,a){var l;!function(){function n(t,e,a){return t.call.apply(t.bind,arguments)}function i(t,e,a){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,l),t.apply(e,a)}}return function(){return t.apply(e,arguments)}}function o(t,e,a){return(o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:i).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var c=!!window.FontFace;function u(t,e,a,l){if(e=t.c.createElement(e),a)for(var n in a)a.hasOwnProperty(n)&&("style"==n?e.style.cssText=a[n]:e.setAttribute(n,a[n]));return l&&e.appendChild(t.c.createTextNode(l)),e}function f(t,e,a){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(a,t.lastChild)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t,e,a){e=e||[],a=a||[];for(var l=t.className.split(/\s+/),n=0;n<e.length;n+=1){for(var i=!1,o=0;o<l.length;o+=1)if(e[n]===l[o]){i=!0;break}i||l.push(e[n])}for(e=[],n=0;n<l.length;n+=1){for(i=!1,o=0;o<a.length;o+=1)if(l[n]===a[o]){i=!0;break}i||e.push(l[n])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(t,e){for(var a=t.className.split(/\s+/),l=0,n=a.length;l<n;l++)if(a[l]==e)return!0;return!1}function d(t,e,a){function l(){r&&n&&i&&(r(o),r=null)}e=u(t,"link",{rel:"stylesheet",href:e,media:"all"});var n=!1,i=!0,o=null,r=a||null;c?(e.onload=function(){n=!0,l()},e.onerror=function(){n=!0,o=Error("Stylesheet failed to load"),l()}):setTimeout((function(){n=!0,l()}),0),f(t,"head",e)}function p(t,e,a,l){var n=t.c.getElementsByTagName("head")[0];if(n){var i=u(t,"script",{src:e}),o=!1;return i.onload=i.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,a&&a(null),i.onload=i.onreadystatechange=null,"HEAD"==i.parentNode.tagName&&n.removeChild(i))},n.appendChild(i),setTimeout((function(){o||(o=!0,a&&a(Error("Script load timeout")))}),l||5e3),i}return null}function v(){this.a=0,this.c=null}function m(t){return t.a++,function(){t.a--,y(t)}}function T(t,e){t.c=e,y(t)}function y(t){0==t.a&&t.c&&(t.c(),t.c=null)}function k(t){this.a=t||"-"}function w(t,e){this.c=t,this.f=4,this.a="n";var a=(e||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function _(t){var e=[];t=t.split(/,\s*/);for(var a=0;a<t.length;a++){var l=t[a].replace(/['"]/g,"");-1!=l.indexOf(" ")||/^\d/.test(l)?e.push("'"+l+"'"):e.push(l)}return e.join(",")}function M(t){return t.a+t.f}function j(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function S(t){var e=4,a="n",l=null;return t&&((l=t.match(/(normal|oblique|italic)/i))&&l[1]&&(a=l[1].substr(0,1).toLowerCase()),(l=t.match(/([1-9]00|normal|bold)/i))&&l[1]&&(/bold/i.test(l[1])?e=7:/[1-9]00/.test(l[1])&&(e=parseInt(l[1].substr(0,1),10)))),a+e}function O(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new k("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function P(t){if(t.g){var e=h(t.f,t.a.c("wf","active")),a=[],l=[t.a.c("wf","loading")];e||a.push(t.a.c("wf","inactive")),g(t.f,a,l)}E(t,"inactive")}function E(t,e,a){t.j&&t.h[e]&&(a?t.h[e](a.c,M(a)):t.h[e]())}function x(){this.c={}}function A(t,e){this.c=t,this.f=e,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function B(t){f(t.c,"body",t.a)}function L(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+_(t.c)+";font-style:"+j(t)+";font-weight:"+t.f+"00;"}function C(t,e,a,l,n,i){this.g=t,this.j=e,this.a=l,this.c=a,this.f=n||3e3,this.h=i||void 0}function R(t,e,a,l,n,i,o){this.v=t,this.B=e,this.c=a,this.a=l,this.s=o||"BESbswy",this.f={},this.w=n||3e3,this.u=i||null,this.m=this.j=this.h=this.g=null,this.g=new A(this.c,this.s),this.h=new A(this.c,this.s),this.j=new A(this.c,this.s),this.m=new A(this.c,this.s),t=L(t=new w(this.a.c+",serif",M(this.a))),this.g.a.style.cssText=t,t=L(t=new w(this.a.c+",sans-serif",M(this.a))),this.h.a.style.cssText=t,t=L(t=new w("serif",M(this.a))),this.j.a.style.cssText=t,t=L(t=new w("sans-serif",M(this.a))),this.m.a.style.cssText=t,B(this.g),B(this.h),B(this.j),B(this.m)}k.prototype.c=function(t){for(var e=[],a=0;a<arguments.length;a++)e.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},C.prototype.start=function(){var t=this.c.o.document,e=this,a=r(),l=new Promise((function(l,n){!function i(){r()-a>=e.f?n():t.fonts.load(function(t){return j(t)+" "+t.f+"00 300px "+_(t.c)}(e.a),e.h).then((function(t){1<=t.length?l():setTimeout(i,25)}),(function(){n()}))}()})),n=null,i=new Promise((function(t,a){n=setTimeout(a,e.f)}));Promise.race([i,l]).then((function(){n&&(clearTimeout(n),n=null),e.g(e.a)}),(function(){e.j(e.a)}))};var U={D:"serif",C:"sans-serif"},z=null;function I(){if(null===z){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);z=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return z}function N(t,e,a){for(var l in U)if(U.hasOwnProperty(l)&&e===t.f[U[l]]&&a===t.f[U[l]])return!0;return!1}function F(t,e){setTimeout(o((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),e(this.a)}),t),0)}function H(t,e,a){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=a}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(e){var a,l=e.g.a.offsetWidth,n=e.h.a.offsetWidth;(a=l===e.f.serif&&n===e.f["sans-serif"])||(a=I()&&N(e,l,n)),a?r()-e.A>=e.w?I()&&N(e,l,n)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?F(e,e.v):F(e,e.B):function(e){setTimeout(o((function(){t(this)}),e),50)}(e):F(e,e.v)}(this)};var G=null;function W(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&g(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),E(t,"active")):P(t.a))}function D(t){this.j=t,this.a=new x,this.h=0,this.f=this.g=!0}function q(t,e,a,l,n){var i=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=n||null,r=l||{};if(0===a.length&&i)P(e.a);else{e.f+=a.length,i&&(e.j=i);var s,c=[];for(s=0;s<a.length;s++){var u=a[s],f=r[u.c],b=e.a,h=u;if(b.g&&g(b.f,[b.a.c("wf",h.c,M(h).toString(),"loading")]),E(b,"fontloading",h),b=null,null===G)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);G=h?42<parseInt(h[1],10):!d}else G=!1;b=G?new C(o(e.g,e),o(e.h,e),e.c,u,e.s,f):new R(o(e.g,e),o(e.h,e),e.c,u,e.s,t,f),c.push(b)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function V(t,e){this.c=t,this.a=e}function $(t,e){this.c=t,this.a=e}function J(t,e){this.c=t||K,this.a=[],this.f=[],this.g=e||""}H.prototype.g=function(t){var e=this.a;e.g&&g(e.f,[e.a.c("wf",t.c,M(t).toString(),"active")],[e.a.c("wf",t.c,M(t).toString(),"loading"),e.a.c("wf",t.c,M(t).toString(),"inactive")]),E(e,"fontactive",t),this.m=!0,W(this)},H.prototype.h=function(t){var e=this.a;if(e.g){var a=h(e.f,e.a.c("wf",t.c,M(t).toString(),"active")),l=[],n=[e.a.c("wf",t.c,M(t).toString(),"loading")];a||l.push(e.a.c("wf",t.c,M(t).toString(),"inactive")),g(e.f,l,n)}E(e,"fontinactive",t),W(this)},D.prototype.load=function(t){this.c=new s(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,a){var l=[],n=a.timeout;!function(t){t.g&&g(t.f,[t.a.c("wf","loading")]),E(t,"loading")}(e),l=function(t,e,a){var l,n=[];for(l in e)if(e.hasOwnProperty(l)){var i=t.c[l];i&&n.push(i(e[l],a))}return n}(t.a,a,t.c);var i=new H(t.c,e,n);for(t.h=l.length,e=0,a=l.length;e<a;e++)l[e].load((function(e,a,l){q(t,i,e,a,l)}))}(this,new O(this.c,t),t)},V.prototype.load=function(t){var e=this,a=e.a.projectId,l=e.a.version;if(a){var n=e.c.o;p(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(l?"?v="+l:""),(function(l){l?t([]):(n["__MonotypeConfiguration__"+a]=function(){return e.a},function e(){if(n["__mti_fntLst"+a]){var l,i=n["__mti_fntLst"+a](),o=[];if(i)for(var r=0;r<i.length;r++){var s=i[r].fontfamily;null!=i[r].fontStyle&&null!=i[r].fontWeight?(l=i[r].fontStyle+i[r].fontWeight,o.push(new w(s,l))):o.push(new w(s))}t(o)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+a}else t([])},$.prototype.load=function(t){var e,a,l=this.a.urls||[],n=this.a.families||[],i=this.a.testStrings||{},o=new v;for(e=0,a=l.length;e<a;e++)d(this.c,l[e],m(o));var r=[];for(e=0,a=n.length;e<a;e++)if((l=n[e].split(":"))[1])for(var s=l[1].split(","),c=0;c<s.length;c+=1)r.push(new w(l[0],s[c]));else r.push(new w(l[0]));T(o,(function(){t(r,i)}))};var K="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var at={Arimo:!0,Cousine:!0,Tinos:!0};function lt(t,e){this.c=t,this.a=e}function nt(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new v,a=this.c,l=new J(this.a.api,this.a.text),n=this.a.families;!function(t,e){for(var a=e.length,l=0;l<a;l++){var n=e[l].split(":");3==n.length&&t.f.push(n.pop());var i="";2==n.length&&""!=n[1]&&(i=":"),t.a.push(n.join(i))}}(l,n);var i=new X(n);!function(t){for(var e=t.f.length,a=0;a<e;a++){var l=t.f[a].split(":"),n=l[0].replace(/\+/g," "),i=["n4"];if(2<=l.length){var o;if(o=[],r=l[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(f=tt.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&o.push(u)}0<o.length&&(i=o),3==l.length&&(o=[],0<(l=(l=l[2])?l.split(","):o).length&&(l=Q[l[0]])&&(t.c[n]=l))}for(t.c[n]||(l=Q[n])&&(t.c[n]=l),l=0;l<i.length;l+=1)t.a.push(new w(n,i[l]))}}(i),d(a,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,a=[],l=0;l<e;l++)a.push(t.a[l].replace(/ /g,"+"));return e=t.c+"?family="+a.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(l),m(e)),T(e,(function(){t(i.a,i.c,at)}))},lt.prototype.load=function(t){var e=this.a.id,a=this.c.o;e?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){e=a.Typekit.config.fn;for(var l=[],n=0;n<e.length;n+=2)for(var i=e[n],o=e[n+1],r=0;r<o.length;r++)l.push(new w(i,o[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(l)}}),2e3):t([])},nt.prototype.load=function(t){var e=this.f.id,a=this.c.o,l=this;e?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[e]=function(e,a){for(var n=0,i=a.fonts.length;n<i;++n){var o=a.fonts[n];l.a.push(new w(o.name,S("font-weight:"+o.weight+";font-style:"+o.style)))}t(l.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var it=new D(window);it.a.c.custom=function(t,e){return new $(e,t)},it.a.c.fontdeck=function(t,e){return new nt(e,t)},it.a.c.monotype=function(t,e){return new V(e,t)},it.a.c.typekit=function(t,e){return new lt(e,t)},it.a.c.google=function(t,e){return new et(e,t)};var ot={load:o(it.load,it)};void 0===(l=function(){return ot}.call(e,a,e,t))||(t.exports=l)}()},507:function(t,e,a){"use strict";a.r(e);var l=a(38),n=a(212),i=a(1),o=a(5),r=a(7),s=a(78),c=a(31),u=a(17),f=a(22),b=a(21),g=a(13),h=a(0),d=a.n(h),p=a(24),v=a(37),m=a(18),T=a(11);function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l])}return t}).apply(this,arguments)}const k=t=>{t=t.parentProps;const{attributes:e,setAttributes:a,attributes:{rating:h,range:k,layout:w,layoutTablet:_,layoutMobile:M,align:j,alignTablet:S,alignMobile:O,size:P,sizeTablet:E,sizeMobile:x,gap:A,gapMobile:B,gapTablet:L,unmarkedColor:C,color:R,title:U,loadGoogleFonts:z,fontFamily:I,fontWeight:N,fontSizeType:F,fontSize:H,fontSizeMobile:G,fontSizeTablet:W,lineHeightType:D,lineHeight:q,lineHeightMobile:V,lineHeightTablet:$,titleColor:J,titleGap:K,titleGapMobile:X,titleGapTablet:Q,fontStyle:Y,fontTransform:Z,fontDecoration:tt,displayTitle:et,letterSpacing:at,letterSpacingTablet:lt,letterSpacingMobile:nt,letterSpacingType:it,blockTopPadding:ot,blockRightPadding:rt,blockLeftPadding:st,blockBottomPadding:ct,blockTopPaddingTablet:ut,blockRightPaddingTablet:ft,blockLeftPaddingTablet:bt,blockBottomPaddingTablet:gt,blockTopPaddingMobile:ht,blockRightPaddingMobile:dt,blockLeftPaddingMobile:pt,blockBottomPaddingMobile:vt,blockPaddingUnit:mt,blockPaddingUnitTablet:Tt,blockPaddingUnitMobile:yt,blockPaddingLink:kt,blockTopMargin:wt,blockRightMargin:_t,blockLeftMargin:Mt,blockBottomMargin:jt,blockTopMarginTablet:St,blockRightMarginTablet:Ot,blockLeftMarginTablet:Pt,blockBottomMarginTablet:Et,blockTopMarginMobile:xt,blockRightMarginMobile:At,blockLeftMarginMobile:Bt,blockBottomMarginMobile:Lt,blockMarginUnit:Ct,blockMarginUnitTablet:Rt,blockMarginUnitMobile:Ut,blockMarginLink:zt,starPosition:It,starPositionTablet:Nt,starPositionMobile:Ft}}=t;let Ht;if(!0===z){const t={google:{families:[I+(N?":"+N:"")]}};Ht=d.a.createElement(n.a,{config:t})}let Gt=[{value:"left",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-left")}),tooltip:Object(i.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-center")}),tooltip:Object(i.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-right")}),tooltip:Object(i.__)("Right","ultimate-addons-for-gutenberg")},{value:"full",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-justify")}),tooltip:Object(i.__)("Full","ultimate-addons-for-gutenberg")}];const Wt=Object(T.a)();("stack"===w||"stack"===_&&"Tablet"===Wt||"stack"===M&&"Mobile"===Wt)&&(Gt=[{value:"left",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-left")}),tooltip:Object(i.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-center")}),tooltip:Object(i.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-right")}),tooltip:Object(i.__)("Right","ultimate-addons-for-gutenberg")}],"full"===j&&a({align:"left"}));const Dt=d.a.createElement(m.a,null,d.a.createElement(r.ToggleControl,{label:Object(i.__)("Enable Title","ultimate-addons-for-gutenberg"),checked:et,onChange:()=>a({displayTitle:!et})}),d.a.createElement(b.a,{setAttributes:a,label:Object(i.__)("Range","ultimate-addons-for-gutenberg"),data:{value:k,label:"range"},options:[{value:"5",label:Object(i.__)("1-5","ultimate-addons-for-gutenberg")},{value:"10",label:Object(i.__)("1-10","ultimate-addons-for-gutenberg")}]}),d.a.createElement(f.a,{label:Object(i.__)("Rating","ultimate-addons-for-gutenberg"),setAttributes:a,value:h,data:{value:h,label:"rating"},min:0,max:k,step:.1,displayUnit:!1}),et&&d.a.createElement(b.a,{setAttributes:a,label:Object(i.__)("Layout","ultimate-addons-for-gutenberg"),data:{desktop:{value:w,label:"layout"},tablet:{value:_,label:"layoutTablet"},mobile:{value:M,label:"layoutMobile"}},options:[{value:"inline",label:Object(i.__)("Inline","ultimate-addons-for-gutenberg")},{value:"stack",label:Object(i.__)("Stack","ultimate-addons-for-gutenberg")}],responsive:!0}),d.a.createElement(b.a,{setAttributes:a,label:Object(i.__)("Star Position","ultimate-addons-for-gutenberg"),data:{desktop:{value:It,label:"starPosition"},tablet:{value:Nt,label:"starPositionTablet"},mobile:{value:Ft,label:"starPositionMobile"}},options:[{value:"before",label:Object(i.__)("Before","ultimate-addons-for-gutenberg")},{value:"after",label:Object(i.__)("After","ultimate-addons-for-gutenberg")}],responsive:!0}),d.a.createElement(b.a,{setAttributes:a,label:Object(i.__)("Alignment","ultimate-addons-for-gutenberg"),data:{desktop:{value:j,label:"align"},tablet:{value:S,label:"alignTablet"},mobile:{value:O,label:"alignMobile"}},options:Gt,showIcons:!0,responsive:!0})),qt=d.a.createElement(m.a,{title:Object(i.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},d.a.createElement(u.a,{label:Object(i.__)("Color","ultimate-addons-for-gutenberg"),colorValue:J,data:{value:J,label:"titleColor"},setAttributes:a}),d.a.createElement(l.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:z,label:"loadGoogleFonts"},fontFamily:{value:I,label:"fontFamily"},fontWeight:{value:N,label:"fontWeight"},fontStyle:{value:Y,label:"fontStyle"},transform:{value:Z,label:"fontTransform"},decoration:{value:tt,label:"fontDecoration"},fontSizeType:{value:F,label:"fontSizeType"},fontSize:{value:H,label:"fontSize"},fontSizeMobile:{value:G,label:"fontSizeMobile"},fontSizeTablet:{value:W,label:"fontSizeTablet"},lineHeightType:{value:D,label:"lineHeightType"},lineHeight:{value:q,label:"lineHeight"},lineHeightMobile:{value:V,label:"lineHeightMobile"},lineHeightTablet:{value:$,label:"lineHeightTablet"},letterSpacing:{value:at,label:"letterSpacing"},letterSpacingTablet:{value:lt,label:"letterSpacingTablet"},letterSpacingMobile:{value:nt,label:"letterSpacingMobile"},letterSpacingType:{value:it,label:"letterSpacingType"}}),d.a.createElement(p.a,{label:Object(i.__)("Gap Between Title And Stars","ultimate-addons-for-gutenberg"),data:{desktop:{value:K,label:"titleGap"},tablet:{value:Q,label:"titleGapTablet"},mobile:{value:X,label:"titleGapMobile"}},min:0,max:50,displayUnit:!1,setAttributes:a})),Vt=d.a.createElement(m.a,{title:Object(i.__)("Star","ultimate-addons-for-gutenberg"),initialOpen:!0},d.a.createElement(u.a,{label:Object(i.__)("Color","ultimate-addons-for-gutenberg"),colorValue:R,data:{value:R,label:"color"},setAttributes:a}),d.a.createElement(u.a,{label:Object(i.__)("Unmarked Color","ultimate-addons-for-gutenberg"),colorValue:C,data:{value:C,label:"unmarkedColor"},setAttributes:a}),d.a.createElement(p.a,{label:Object(i.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:P,label:"size"},tablet:{value:E,label:"sizeTablet"},mobile:{value:x,label:"sizeMobile"}},min:0,max:100,displayUnit:!1,setAttributes:a}),d.a.createElement(p.a,{label:Object(i.__)("Gap Between Stars","ultimate-addons-for-gutenberg"),data:{desktop:{value:A,label:"gap"},tablet:{value:L,label:"gapTablet"},mobile:{value:B,label:"gapMobile"}},min:0,max:100,displayUnit:!1,setAttributes:a})),$t=d.a.createElement(m.a,{title:Object(i.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},d.a.createElement(v.a,{label:Object(i.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ot,label:"blockTopPadding"},valueRight:{value:rt,label:"blockRightPadding"},valueBottom:{value:ct,label:"blockBottomPadding"},valueLeft:{value:st,label:"blockLeftPadding"},valueTopTablet:{value:ut,label:"blockTopPaddingTablet"},valueRightTablet:{value:ft,label:"blockRightPaddingTablet"},valueBottomTablet:{value:gt,label:"blockBottomPaddingTablet"},valueLeftTablet:{value:bt,label:"blockLeftPaddingTablet"},valueTopMobile:{value:ht,label:"blockTopPaddingMobile"},valueRightMobile:{value:dt,label:"blockRightPaddingMobile"},valueBottomMobile:{value:vt,label:"blockBottomPaddingMobile"},valueLeftMobile:{value:pt,label:"blockLeftPaddingMobile"},unit:{value:mt,label:"blockPaddingUnit"},mUnit:{value:yt,label:"blockPaddingUnitMobile"},tUnit:{value:Tt,label:"blockPaddingUnitTablet"},deviceType:Wt,attributes:e,setAttributes:a,link:{value:kt,label:"blockPaddingLink"}}),d.a.createElement(v.a,{label:Object(i.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:wt,label:"blockTopMargin"},valueRight:{value:_t,label:"blockRightMargin"},valueBottom:{value:jt,label:"blockBottomMargin"},valueLeft:{value:Mt,label:"blockLeftMargin"},valueTopTablet:{value:St,label:"blockTopMarginTablet"},valueRightTablet:{value:Ot,label:"blockRightMarginTablet"},valueBottomTablet:{value:Et,label:"blockBottomMarginTablet"},valueLeftTablet:{value:Pt,label:"blockLeftMarginTablet"},valueTopMobile:{value:xt,label:"blockTopMarginMobile"},valueRightMobile:{value:At,label:"blockRightMarginMobile"},valueBottomMobile:{value:Lt,label:"blockBottomMarginMobile"},valueLeftMobile:{value:Bt,label:"blockLeftMarginMobile"},unit:{value:Ct,label:"blockMarginUnit"},mUnit:{value:Ut,label:"blockMarginUnitMobile"},tUnit:{value:Rt,label:"blockMarginUnitTablet"},deviceType:Wt,attributes:e,setAttributes:a,link:{value:zt,label:"blockMarginLink"}}));return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.InspectorControls,null,d.a.createElement(s.a,{tabs:["general","style","advance"]},d.a.createElement(c.b,c.a.general,Dt),d.a.createElement(c.b,c.a.style,Vt,et&&""!==U&&qt,$t),d.a.createElement(c.b,y({},c.a.advance,{parentProps:t})))),Ht)};e.default=d.a.memo(k)}}]);