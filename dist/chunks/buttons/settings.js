(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[10],{200:function(t,e,a){"use strict";var n,i,l=a(37),o=a.n(l),r=a(201),s=a.n(r),u=a(2);if(void 0===c)var c=[];const f=t=>{const[e,a]=Object(u.useState)([]);Object(u.useEffect)(()=>{r()},[]),Object(u.useEffect)(()=>{const{onStatus:a,config:n}=t;void 0!==e.status&&a(e.status),n!==e.config&&r()},[t]);const n=()=>{a({status:"loading"})},i=t=>{c.includes(t)||c.push(t)},l=()=>{a({status:"active"})},o=()=>{a({status:"inactive"})},r=()=>{c.includes(t.config.google.families[0])||(s.a.load({...t.config,loading:n,active:l,inactive:o}),i(t.config.google.families[0]));const e=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==e.length||0!==a.length){const r=(e[0]||a[0]).getElementsByTagName("iframe")[0];r&&(s.a.load({...t.config,loading:n,active:l,inactive:o,context:null==r?void 0:r.contentWindow}),i(t.config.google.families[0]))}},{children:f}=t;return f||null};f.propTypes={config:null===(n=o.a.object)||void 0===n?void 0:n.isRequired,children:o.a.element,onStatus:null===(i=o.a.func)||void 0===i?void 0:i.isRequired},f.defaultProps={onStatus:()=>{}},e.a=f},201:function(t,e,a){var n;!function(){function i(t,e,a){return t.call.apply(t.bind,arguments)}function l(t,e,a){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),t.apply(e,a)}}return function(){return t.apply(e,arguments)}}function o(t,e,a){return(o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var u=!!window.FontFace;function c(t,e,a,n){if(e=t.c.createElement(e),a)for(var i in a)a.hasOwnProperty(i)&&("style"==i?e.style.cssText=a[i]:e.setAttribute(i,a[i]));return n&&e.appendChild(t.c.createTextNode(n)),e}function f(t,e,a){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(a,t.lastChild)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t,e,a){e=e||[],a=a||[];for(var n=t.className.split(/\s+/),i=0;i<e.length;i+=1){for(var l=!1,o=0;o<n.length;o+=1)if(e[i]===n[o]){l=!0;break}l||n.push(e[i])}for(e=[],i=0;i<n.length;i+=1){for(l=!1,o=0;o<a.length;o+=1)if(n[i]===a[o]){l=!0;break}l||e.push(n[i])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function b(t,e){for(var a=t.className.split(/\s+/),n=0,i=a.length;n<i;n++)if(a[n]==e)return!0;return!1}function d(t,e,a){function n(){r&&i&&l&&(r(o),r=null)}e=c(t,"link",{rel:"stylesheet",href:e,media:"all"});var i=!1,l=!0,o=null,r=a||null;u?(e.onload=function(){i=!0,n()},e.onerror=function(){i=!0,o=Error("Stylesheet failed to load"),n()}):setTimeout((function(){i=!0,n()}),0),f(t,"head",e)}function p(t,e,a,n){var i=t.c.getElementsByTagName("head")[0];if(i){var l=c(t,"script",{src:e}),o=!1;return l.onload=l.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&i.removeChild(l))},i.appendChild(l),setTimeout((function(){o||(o=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function v(){this.a=0,this.c=null}function m(t){return t.a++,function(){t.a--,w(t)}}function y(t,e){t.c=e,w(t)}function w(t){0==t.a&&t.c&&(t.c(),t.c=null)}function T(t){this.a=t||"-"}function _(t,e){this.c=t,this.f=4,this.a="n";var a=(e||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function M(t){var e=[];t=t.split(/,\s*/);for(var a=0;a<t.length;a++){var n=t[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?e.push("'"+n+"'"):e.push(n)}return e.join(",")}function S(t){return t.a+t.f}function j(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function k(t){var e=4,a="n",n=null;return t&&((n=t.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=t.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?e=7:/[1-9]00/.test(n[1])&&(e=parseInt(n[1].substr(0,1),10)))),a+e}function E(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new T("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function O(t){if(t.g){var e=b(t.f,t.a.c("wf","active")),a=[],n=[t.a.c("wf","loading")];e||a.push(t.a.c("wf","inactive")),h(t.f,a,n)}P(t,"inactive")}function P(t,e,a){t.j&&t.h[e]&&(a?t.h[e](a.c,S(a)):t.h[e]())}function x(){this.c={}}function C(t,e){this.c=t,this.f=e,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function L(t){f(t.c,"body",t.a)}function A(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+M(t.c)+";font-style:"+j(t)+";font-weight:"+t.f+"00;"}function N(t,e,a,n,i,l){this.g=t,this.j=e,this.a=n,this.c=a,this.f=i||3e3,this.h=l||void 0}function z(t,e,a,n,i,l,o){this.v=t,this.B=e,this.c=a,this.a=n,this.s=o||"BESbswy",this.f={},this.w=i||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new C(this.c,this.s),this.h=new C(this.c,this.s),this.j=new C(this.c,this.s),this.m=new C(this.c,this.s),t=A(t=new _(this.a.c+",serif",S(this.a))),this.g.a.style.cssText=t,t=A(t=new _(this.a.c+",sans-serif",S(this.a))),this.h.a.style.cssText=t,t=A(t=new _("serif",S(this.a))),this.j.a.style.cssText=t,t=A(t=new _("sans-serif",S(this.a))),this.m.a.style.cssText=t,L(this.g),L(this.h),L(this.j),L(this.m)}T.prototype.c=function(t){for(var e=[],a=0;a<arguments.length;a++)e.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},N.prototype.start=function(){var t=this.c.o.document,e=this,a=r(),n=new Promise((function(n,i){!function l(){r()-a>=e.f?i():t.fonts.load(function(t){return j(t)+" "+t.f+"00 300px "+M(t.c)}(e.a),e.h).then((function(t){1<=t.length?n():setTimeout(l,25)}),(function(){i()}))}()})),i=null,l=new Promise((function(t,a){i=setTimeout(a,e.f)}));Promise.race([l,n]).then((function(){i&&(clearTimeout(i),i=null),e.g(e.a)}),(function(){e.j(e.a)}))};var I={D:"serif",C:"sans-serif"},B=null;function F(){if(null===B){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);B=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return B}function H(t,e,a){for(var n in I)if(I.hasOwnProperty(n)&&e===t.f[I[n]]&&a===t.f[I[n]])return!0;return!1}function W(t,e){setTimeout(o((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),e(this.a)}),t),0)}function U(t,e,a){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(e){var a,n=e.g.a.offsetWidth,i=e.h.a.offsetWidth;(a=n===e.f.serif&&i===e.f["sans-serif"])||(a=F()&&H(e,n,i)),a?r()-e.A>=e.w?F()&&H(e,n,i)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?W(e,e.v):W(e,e.B):function(e){setTimeout(o((function(){t(this)}),e),50)}(e):W(e,e.v)}(this)};var D=null;function R(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&h(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),P(t,"active")):O(t.a))}function G(t){this.j=t,this.a=new x,this.h=0,this.f=this.g=!0}function q(t,e,a,n,i){var l=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=i||null,r=n||{};if(0===a.length&&l)O(e.a);else{e.f+=a.length,l&&(e.j=l);var s,u=[];for(s=0;s<a.length;s++){var c=a[s],f=r[c.c],g=e.a,b=c;if(g.g&&h(g.f,[g.a.c("wf",b.c,S(b).toString(),"loading")]),P(g,"fontloading",b),g=null,null===D)if(window.FontFace){b=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=b?42<parseInt(b[1],10):!d}else D=!1;g=D?new N(o(e.g,e),o(e.h,e),e.c,c,e.s,f):new z(o(e.g,e),o(e.h,e),e.c,c,e.s,t,f),u.push(g)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function $(t,e){this.c=t,this.a=e}function J(t,e){this.c=t,this.a=e}function K(t,e){this.c=t||Q,this.a=[],this.f=[],this.g=e||""}U.prototype.g=function(t){var e=this.a;e.g&&h(e.f,[e.a.c("wf",t.c,S(t).toString(),"active")],[e.a.c("wf",t.c,S(t).toString(),"loading"),e.a.c("wf",t.c,S(t).toString(),"inactive")]),P(e,"fontactive",t),this.m=!0,R(this)},U.prototype.h=function(t){var e=this.a;if(e.g){var a=b(e.f,e.a.c("wf",t.c,S(t).toString(),"active")),n=[],i=[e.a.c("wf",t.c,S(t).toString(),"loading")];a||n.push(e.a.c("wf",t.c,S(t).toString(),"inactive")),h(e.f,n,i)}P(e,"fontinactive",t),R(this)},G.prototype.load=function(t){this.c=new s(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,a){var n=[],i=a.timeout;!function(t){t.g&&h(t.f,[t.a.c("wf","loading")]),P(t,"loading")}(e),n=function(t,e,a){var n,i=[];for(n in e)if(e.hasOwnProperty(n)){var l=t.c[n];l&&i.push(l(e[n],a))}return i}(t.a,a,t.c);var l=new U(t.c,e,i);for(t.h=n.length,e=0,a=n.length;e<a;e++)n[e].load((function(e,a,n){q(t,l,e,a,n)}))}(this,new E(this.c,t),t)},$.prototype.load=function(t){var e=this,a=e.a.projectId,n=e.a.version;if(a){var i=e.c.o;p(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?t([]):(i["__MonotypeConfiguration__"+a]=function(){return e.a},function e(){if(i["__mti_fntLst"+a]){var n,l=i["__mti_fntLst"+a](),o=[];if(l)for(var r=0;r<l.length;r++){var s=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,o.push(new _(s,n))):o.push(new _(s))}t(o)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+a}else t([])},J.prototype.load=function(t){var e,a,n=this.a.urls||[],i=this.a.families||[],l=this.a.testStrings||{},o=new v;for(e=0,a=n.length;e<a;e++)d(this.c,n[e],m(o));var r=[];for(e=0,a=i.length;e<a;e++)if((n=i[e].split(":"))[1])for(var s=n[1].split(","),u=0;u<s.length;u+=1)r.push(new _(n[0],s[u]));else r.push(new _(n[0]));y(o,(function(){t(r,l)}))};var Q="https://fonts.googleapis.com/css";function V(t){this.f=t,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var at={Arimo:!0,Cousine:!0,Tinos:!0};function nt(t,e){this.c=t,this.a=e}function it(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new v,a=this.c,n=new K(this.a.api,this.a.text),i=this.a.families;!function(t,e){for(var a=e.length,n=0;n<a;n++){var i=e[n].split(":");3==i.length&&t.f.push(i.pop());var l="";2==i.length&&""!=i[1]&&(l=":"),t.a.push(i.join(l))}}(n,i);var l=new V(i);!function(t){for(var e=t.f.length,a=0;a<e;a++){var n=t.f[a].split(":"),i=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var o;if(o=[],r=n[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var c;if((c=r[u]).match(/^[\w-]+$/))if(null==(f=tt.exec(c.toLowerCase())))c="";else{if(c=null==(c=f[2])||""==c?"n":Z[c],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));c=[c,f].join("")}else c="";c&&o.push(c)}0<o.length&&(l=o),3==n.length&&(o=[],0<(n=(n=n[2])?n.split(","):o).length&&(n=X[n[0]])&&(t.c[i]=n))}for(t.c[i]||(n=X[i])&&(t.c[i]=n),n=0;n<l.length;n+=1)t.a.push(new _(i,l[n]))}}(l),d(a,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,a=[],n=0;n<e;n++)a.push(t.a[n].replace(/ /g,"+"));return e=t.c+"?family="+a.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(n),m(e)),y(e,(function(){t(l.a,l.c,at)}))},nt.prototype.load=function(t){var e=this.a.id,a=this.c.o;e?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){e=a.Typekit.config.fn;for(var n=[],i=0;i<e.length;i+=2)for(var l=e[i],o=e[i+1],r=0;r<o.length;r++)n.push(new _(l,o[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(n)}}),2e3):t([])},it.prototype.load=function(t){var e=this.f.id,a=this.c.o,n=this;e?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[e]=function(e,a){for(var i=0,l=a.fonts.length;i<l;++i){var o=a.fonts[i];n.a.push(new _(o.name,k("font-weight:"+o.weight+";font-style:"+o.style)))}t(n.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var lt=new G(window);lt.a.c.custom=function(t,e){return new J(e,t)},lt.a.c.fontdeck=function(t,e){return new it(e,t)},lt.a.c.monotype=function(t,e){return new $(e,t)},lt.a.c.typekit=function(t,e){return new nt(e,t)},lt.a.c.google=function(t,e){return new et(e,t)};var ot={load:o(lt.load,lt)};void 0===(n=function(){return ot}.call(e,a,e,t))||(t.exports=n)}()},206:function(t,e,a){"use strict";var n=a(0),i=a.n(n),l=a(6),o=a(10),r=a(64);e.a=t=>{const{label:e,data:a,setAttributes:n,options:s}=t,u=Object(o.a)(),c={};return c.Desktop=i.a.createElement(l.SelectControl,{value:a.desktop.value,onChange:t=>n({[a.desktop.label]:t}),options:s.desktop}),c.Tablet=i.a.createElement(l.SelectControl,{value:a.tablet.value,onChange:t=>n({[a.tablet.label]:t}),options:s.tablet||s.desktop}),c.Mobile=i.a.createElement(l.SelectControl,{value:a.mobile.value,onChange:t=>n({[a.mobile.label]:t}),options:s.mobile||s.desktop}),i.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},i.a.createElement("div",{className:"uagb-size-type-field-tabs"},i.a.createElement("div",{className:"uagb-control__header"},i.a.createElement(r.a,{label:e,responsive:!0})),c[u]?c[u]:c.Desktop),t.help&&i.a.createElement("p",{className:"uag-control-help-notice"},t.help))}},503:function(t,e,a){"use strict";a.r(e);var n=a(9),i=a(0),l=a.n(i),o=a(1),r=a(4),s=a(32),u=a(200),c=a(19),f=a(11),g=a(24),h=a(54),b=a(206),d=a(6),p=a(80),v=a(25),m=a(16);function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}const w=t=>{t=t.parentProps;const{attributes:e,setAttributes:a}=t,{align:w,gap:T,gapTablet:_,gapMobile:M,stack:S,loadGoogleFonts:j,fontFamily:k,fontWeight:E,fontStyle:O,fontTransform:P,fontDecoration:x,alignTablet:C,alignMobile:L,fontSizeType:A,fontSize:N,fontSizeMobile:z,fontSizeTablet:I,lineHeightType:B,lineHeight:F,lineHeightMobile:H,lineHeightTablet:W,buttonSize:U,buttonSizeTablet:D,buttonSizeMobile:R,paddingUnit:G,mobilePaddingUnit:q,tabletPaddingUnit:$,paddingLink:J,topPadding:K,rightPadding:Q,bottomPadding:V,leftPadding:X,topMobilePadding:Y,rightMobilePadding:Z,bottomMobilePadding:tt,leftMobilePadding:et,topTabletPadding:at,rightTabletPadding:nt,bottomTabletPadding:it,leftTabletPadding:lt,topMargin:ot,rightMargin:rt,bottomMargin:st,leftMargin:ut,topMarginTablet:ct,rightMarginTablet:ft,bottomMarginTablet:gt,leftMarginTablet:ht,topMarginMobile:bt,rightMarginMobile:dt,bottomMarginMobile:pt,leftMarginMobile:vt,marginType:mt,marginLink:yt,fontLetterSpacing:wt,fontLetterSpacingTablet:Tt,fontLetterSpacingMobile:_t,fontLetterSpacingType:Mt}=e,St=[{value:"default",label:Object(o.__)("Default","ultimate-addons-for-gutenberg")},{value:"small",label:Object(o.__)("Small","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"large",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")},{value:"extralarge",label:Object(o.__)("Extra Large","ultimate-addons-for-gutenberg")}];let jt;if(!0===j){const t={google:{families:[k+(E?":"+E:"")]}};jt=l.a.createElement(u.a,{config:t})}return l.a.createElement(i.Suspense,{fallback:Object(n.a)()},l.a.createElement(r.BlockControls,null,l.a.createElement(d.Toolbar,{className:"uag-container-block-inserter"},l.a.createElement(r.Inserter,{clientId:t.clientId,rootClientId:t.clientId,__experimentalIsQuick:!0,position:"bottom right"}))),l.a.createElement(r.InspectorControls,null,l.a.createElement(p.a,null,l.a.createElement(v.b,v.a.general,l.a.createElement(m.a,{initialOpen:!0},l.a.createElement(c.a,{setAttributes:a,label:Object(o.__)("Overall Alignment","ultimate-addons-for-gutenberg"),data:{desktop:{value:w,label:"align"},tablet:{value:C,label:"alignTablet"},mobile:{value:L,label:"alignMobile"}},options:[{value:"left",icon:l.a.createElement(d.Icon,{icon:Object(f.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:l.a.createElement(d.Icon,{icon:Object(f.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:l.a.createElement(d.Icon,{icon:Object(f.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")},{value:"full",icon:l.a.createElement(d.Icon,{icon:Object(f.a)("fa fa-align-justify")}),tooltip:Object(o.__)("Full Width","ultimate-addons-for-gutenberg")}],showIcons:!0,responsive:!0}),l.a.createElement(c.a,{setAttributes:a,label:Object(o.__)("Stack Orientation","ultimate-addons-for-gutenberg"),data:{value:S,label:"stack"},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"desktop",label:Object(o.__)("Desktop","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(o.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(o.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(o.__)("Note: Choose on what breakpoint the buttons will stack.","ultimate-addons-for-gutenberg")}),l.a.createElement(g.a,{label:Object(o.__)("Gap Between Buttons","ultimate-addons-for-gutenberg"),data:{desktop:{value:T,label:"gap"},tablet:{value:_,label:"gapTablet"},mobile:{value:M,label:"gapMobile"}},min:0,max:200,displayUnit:!1,setAttributes:a}),l.a.createElement(b.a,{label:Object(o.__)("Button Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:U,label:"buttonSize"},tablet:{value:D,label:"buttonSizeTablet"},mobile:{value:R,label:"buttonSizeMobile"}},options:{desktop:St,tablet:St,mobile:St},setAttributes:a}))),l.a.createElement(v.b,v.a.style,l.a.createElement(m.a,{title:Object(o.__)("Text","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(s.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:j,label:"loadGoogleFonts"},fontFamily:{value:k,label:"fontFamily"},fontWeight:{value:E,label:"fontWeight"},fontStyle:{value:O,label:"fontStyle"},transform:{value:P,label:"fontTransform"},decoration:{value:x,label:"fontDecoration"},fontSizeType:{value:A,label:"fontSizeType"},fontSize:{value:N,label:"fontSize"},fontSizeMobile:{value:z,label:"fontSizeMobile"},fontSizeTablet:{value:I,label:"fontSizeTablet"},lineHeightType:{value:B,label:"lineHeightType"},lineHeight:{value:F,label:"lineHeight"},lineHeightMobile:{value:H,label:"lineHeightMobile"},lineHeightTablet:{value:W,label:"lineHeightTablet"},letterSpacing:{value:wt,label:"fontLetterSpacing"},letterSpacingTablet:{value:Tt,label:"fontLetterSpacingTablet"},letterSpacingMobile:{value:_t,label:"fontLetterSpacingMobile"},letterSpacingType:{value:Mt,label:"fontLetterSpacingType"}})),l.a.createElement(m.a,{title:Object(o.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(h.a,y({},t,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:K,label:"topPadding"},valueRight:{value:Q,label:"rightPadding"},valueBottom:{value:V,label:"bottomPadding"},valueLeft:{value:X,label:"leftPadding"},valueTopTablet:{value:at,label:"topTabletPadding"},valueRightTablet:{value:nt,label:"rightTabletPadding"},valueBottomTablet:{value:it,label:"bottomTabletPadding"},valueLeftTablet:{value:lt,label:"leftTabletPadding"},valueTopMobile:{value:Y,label:"topMobilePadding"},valueRightMobile:{value:Z,label:"rightMobilePadding"},valueBottomMobile:{value:tt,label:"bottomMobilePadding"},valueLeftMobile:{value:et,label:"leftMobilePadding"},unit:{value:G,label:"paddingUnit"},mUnit:{value:q,label:"mobilePaddingUnit"},tUnit:{value:$,label:"tabletPaddingUnit"},attributes:e,setAttributes:a,link:{value:J,label:"paddingLink"}})),l.a.createElement(h.a,y({},t,{label:Object(o.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:ot,label:"topMargin"},valueRight:{value:rt,label:"rightMargin"},valueBottom:{value:st,label:"bottomMargin"},valueLeft:{value:ut,label:"leftMargin"},valueTopTablet:{value:ct,label:"topMarginTablet"},valueRightTablet:{value:ft,label:"rightMarginTablet"},valueBottomTablet:{value:gt,label:"bottomMarginTablet"},valueLeftTablet:{value:ht,label:"leftMarginTablet"},valueTopMobile:{value:bt,label:"topMarginMobile"},valueRightMobile:{value:dt,label:"rightMarginMobile"},valueBottomMobile:{value:pt,label:"bottomMarginMobile"},valueLeftMobile:{value:vt,label:"leftMarginMobile"},unit:{value:mt,label:"marginType"},mUnit:{value:mt,label:"marginType"},tUnit:{value:mt,label:"marginType"},attributes:e,setAttributes:a,link:{value:yt,label:"marginLink"}})))),l.a.createElement(v.b,y({},v.a.advance,{parentProps:t})))),jt)};e.default=l.a.memo(w)}}]);