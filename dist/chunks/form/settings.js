(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[46],{267:function(e,t,a){"use strict";var l=a(30),n=a.n(l),o=a(268),i=a.n(o),r=a(3);if(void 0===u)var u=[];const s=e=>{const[t,a]=Object(r.useState)([]);Object(r.useEffect)(()=>{s()},[]),Object(r.useEffect)(()=>{const{onStatus:a,config:l}=e;void 0!==t.status&&a(t.status),l!==t.config&&s()},[e]);const l=()=>{a({status:"loading"})},n=()=>{a({status:"active"})},o=()=>{a({status:"inactive"})},s=()=>{var t;u.includes(e.config.google.families[0])||(i.a.load({...e.config,loading:l,active:n,inactive:o}),t=e.config.google.families[0],u.includes(t)||u.push(t))},{children:c}=e;return c||null};s.propTypes={config:n.a.object.isRequired,children:n.a.element,onStatus:n.a.func.isRequired},s.defaultProps={onStatus:()=>{}},t.a=s},268:function(e,t,a){var l;!function(){function n(e,t,a){return e.call.apply(e.bind,arguments)}function o(e,t,a){if(!e)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,l),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function c(e,t,a,l){if(t=e.c.createElement(t),a)for(var n in a)a.hasOwnProperty(n)&&("style"==n?t.style.cssText=a[n]:t.setAttribute(n,a[n]));return l&&t.appendChild(e.c.createTextNode(l)),t}function b(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function d(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e,t,a){t=t||[],a=a||[];for(var l=e.className.split(/\s+/),n=0;n<t.length;n+=1){for(var o=!1,i=0;i<l.length;i+=1)if(t[n]===l[i]){o=!0;break}o||l.push(t[n])}for(t=[],n=0;n<l.length;n+=1){for(o=!1,i=0;i<a.length;i+=1)if(l[n]===a[i]){o=!0;break}o||t.push(l[n])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var a=e.className.split(/\s+/),l=0,n=a.length;l<n;l++)if(a[l]==t)return!0;return!1}function m(e,t,a){function l(){r&&n&&o&&(r(i),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var n=!1,o=!0,i=null,r=a||null;s?(t.onload=function(){n=!0,l()},t.onerror=function(){n=!0,i=Error("Stylesheet failed to load"),l()}):setTimeout((function(){n=!0,l()}),0),b(e,"head",t)}function h(e,t,a,l){var n=e.c.getElementsByTagName("head")[0];if(n){var o=c(e,"script",{src:t}),i=!1;return o.onload=o.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&n.removeChild(o))},n.appendChild(o),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),l||5e3),o}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,T(e)}}function _(e,t){e.c=t,T(e)}function T(e){0==e.a&&e.c&&(e.c(),e.c=null)}function C(e){this.a=e||"-"}function y(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var l=e[a].replace(/['"]/g,"");-1!=l.indexOf(" ")||/^\d/.test(l)?t.push("'"+l+"'"):t.push(l)}return t.join(",")}function S(e){return e.a+e.f}function O(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function E(e){var t=4,a="n",l=null;return e&&((l=e.match(/(normal|oblique|italic)/i))&&l[1]&&(a=l[1].substr(0,1).toLowerCase()),(l=e.match(/([1-9]00|normal|bold)/i))&&l[1]&&(/bold/i.test(l[1])?t=7:/[1-9]00/.test(l[1])&&(t=parseInt(l[1].substr(0,1),10)))),a+t}function w(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new C("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),a=[],l=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),g(e.f,a,l)}B(e,"inactive")}function B(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,S(a)):e.h[t]())}function x(){this.c={}}function M(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function H(e){b(e.c,"body",e.a)}function L(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+O(e)+";font-weight:"+e.f+"00;"}function A(e,t,a,l,n,o){this.g=e,this.j=t,this.a=l,this.c=a,this.f=n||3e3,this.h=o||void 0}function z(e,t,a,l,n,o,i){this.v=e,this.B=t,this.c=a,this.a=l,this.s=i||"BESbswy",this.f={},this.w=n||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new M(this.c,this.s),this.h=new M(this.c,this.s),this.j=new M(this.c,this.s),this.m=new M(this.c,this.s),e=L(e=new y(this.a.c+",serif",S(this.a))),this.g.a.style.cssText=e,e=L(e=new y(this.a.c+",sans-serif",S(this.a))),this.h.a.style.cssText=e,e=L(e=new y("serif",S(this.a))),this.j.a.style.cssText=e,e=L(e=new y("sans-serif",S(this.a))),this.m.a.style.cssText=e,H(this.g),H(this.h),H(this.j),H(this.m)}C.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},A.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),l=new Promise((function(l,n){!function o(){r()-a>=t.f?n():e.fonts.load(function(e){return O(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?l():setTimeout(o,25)}),(function(){n()}))}()})),n=null,o=new Promise((function(e,a){n=setTimeout(a,t.f)}));Promise.race([o,l]).then((function(){n&&(clearTimeout(n),n=null),t.g(t.a)}),(function(){t.j(t.a)}))};var k={D:"serif",C:"sans-serif"},R=null;function W(){if(null===R){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);R=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return R}function N(e,t,a){for(var l in k)if(k.hasOwnProperty(l)&&t===e.f[k[l]]&&a===e.f[k[l]])return!0;return!1}function V(e,t){setTimeout(i((function(){d(this.g.a),d(this.h.a),d(this.j.a),d(this.m.a),t(this.a)}),e),0)}function U(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,l=t.g.a.offsetWidth,n=t.h.a.offsetWidth;(a=l===t.f.serif&&n===t.f["sans-serif"])||(a=W()&&N(t,l,n)),a?r()-t.A>=t.w?W()&&N(t,l,n)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?V(t,t.v):V(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):V(t,t.v)}(this)};var P=null;function I(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&g(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),B(e,"active")):F(e.a))}function G(e){this.j=e,this.a=new x,this.h=0,this.f=this.g=!0}function K(e,t,a,l,n){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=n||null,r=l||{};if(0===a.length&&o)F(t.a);else{t.f+=a.length,o&&(t.j=o);var u,s=[];for(u=0;u<a.length;u++){var c=a[u],b=r[c.c],d=t.a,f=c;if(d.g&&g(d.f,[d.a.c("wf",f.c,S(f).toString(),"loading")]),B(d,"fontloading",f),d=null,null===P)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var m=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);P=f?42<parseInt(f[1],10):!m}else P=!1;d=P?new A(i(t.g,t),i(t.h,t),t.c,c,t.s,b):new z(i(t.g,t),i(t.h,t),t.c,c,t.s,e,b),s.push(d)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function D(e,t){this.c=e,this.a=t}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}U.prototype.g=function(e){var t=this.a;t.g&&g(t.f,[t.a.c("wf",e.c,S(e).toString(),"active")],[t.a.c("wf",e.c,S(e).toString(),"loading"),t.a.c("wf",e.c,S(e).toString(),"inactive")]),B(t,"fontactive",e),this.m=!0,I(this)},U.prototype.h=function(e){var t=this.a;if(t.g){var a=f(t.f,t.a.c("wf",e.c,S(e).toString(),"active")),l=[],n=[t.a.c("wf",e.c,S(e).toString(),"loading")];a||l.push(t.a.c("wf",e.c,S(e).toString(),"inactive")),g(t.f,l,n)}B(t,"fontinactive",e),I(this)},G.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var l=[],n=a.timeout;!function(e){e.g&&g(e.f,[e.a.c("wf","loading")]),B(e,"loading")}(t),l=function(e,t,a){var l,n=[];for(l in t)if(t.hasOwnProperty(l)){var o=e.c[l];o&&n.push(o(t[l],a))}return n}(e.a,a,e.c);var o=new U(e.c,t,n);for(e.h=l.length,t=0,a=l.length;t<a;t++)l[t].load((function(t,a,l){K(e,o,t,a,l)}))}(this,new w(this.c,e),e)},D.prototype.load=function(e){var t=this,a=t.a.projectId,l=t.a.version;if(a){var n=t.c.o;h(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(l?"?v="+l:""),(function(l){l?e([]):(n["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(n["__mti_fntLst"+a]){var l,o=n["__mti_fntLst"+a](),i=[];if(o)for(var r=0;r<o.length;r++){var u=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(l=o[r].fontStyle+o[r].fontWeight,i.push(new y(u,l))):i.push(new y(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},q.prototype.load=function(e){var t,a,l=this.a.urls||[],n=this.a.families||[],o=this.a.testStrings||{},i=new p;for(t=0,a=l.length;t<a;t++)m(this.c,l[t],v(i));var r=[];for(t=0,a=n.length;t<a;t++)if((l=n[t].split(":"))[1])for(var u=l[1].split(","),s=0;s<u.length;s+=1)r.push(new y(l[0],u[s]));else r.push(new y(l[0]));_(i,(function(){e(r,o)}))};var J="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function le(e,t){this.c=e,this.a=t}function ne(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,l=new $(this.a.api,this.a.text),n=this.a.families;!function(e,t){for(var a=t.length,l=0;l<a;l++){var n=t[l].split(":");3==n.length&&e.f.push(n.pop());var o="";2==n.length&&""!=n[1]&&(o=":"),e.a.push(n.join(o))}}(l,n);var o=new X(n);!function(e){for(var t=e.f.length,a=0;a<t;a++){var l=e.f[a].split(":"),n=l[0].replace(/\+/g," "),o=["n4"];if(2<=l.length){var i;if(i=[],r=l[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var c;if((c=r[s]).match(/^[\w-]+$/))if(null==(b=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=b[2])||""==c?"n":Z[c],null==(b=b[1])||""==b)b="4";else var b=Y[b]||(isNaN(b)?"4":b.substr(0,1));c=[c,b].join("")}else c="";c&&i.push(c)}0<i.length&&(o=i),3==l.length&&(i=[],0<(l=(l=l[2])?l.split(","):i).length&&(l=Q[l[0]])&&(e.c[n]=l))}for(e.c[n]||(l=Q[n])&&(e.c[n]=l),l=0;l<o.length;l+=1)e.a.push(new y(n,o[l]))}}(o),m(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],l=0;l<t;l++)a.push(e.a[l].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(l),v(t)),_(t,(function(){e(o.a,o.c,ae)}))},le.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?h(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var l=[],n=0;n<t.length;n+=2)for(var o=t[n],i=t[n+1],r=0;r<i.length;r++)l.push(new y(o,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(l)}}),2e3):e([])},ne.prototype.load=function(e){var t=this.f.id,a=this.c.o,l=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var n=0,o=a.fonts.length;n<o;++n){var i=a.fonts[n];l.a.push(new y(i.name,E("font-weight:"+i.weight+";font-style:"+i.style)))}e(l.a)},h(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new G(window);oe.a.c.custom=function(e,t){return new q(t,e)},oe.a.c.fontdeck=function(e,t){return new ne(t,e)},oe.a.c.monotype=function(e,t){return new D(t,e)},oe.a.c.typekit=function(e,t){return new le(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(oe.load,oe)};void 0===(l=function(){return ie}.call(t,a,t,e))||(e.exports=l)}()},559:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),o=a(2),i=a(11),r=a(28),u=a(267),s=a(55),c=a(23),b=a(60),d=a(22),g=a(16),f=a(43),m=a(14),h=a(5),p=a(12),v=a(44),_=a(8),T=a(15);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const y=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,deviceType:y}=e,{formLabel:j,buttonAlign:S,buttonSize:O,confirmationType:E,confirmationMessage:w,failedMessage:F,confirmationUrl:B,sendAfterSubmitEmail:x,afterSubmitToEmail:M,afterSubmitCcEmail:H,afterSubmitBccEmail:L,afterSubmitEmailSubject:A,submitColor:z,submitColorHover:k,submitBgColor:R,submitBgColorHover:W,submitborderStyle:N,submitborderWidth:V,submitborderRadius:U,submitborderColor:P,submitborderHoverColor:I,submitTextloadGoogleFonts:G,submitTextFontFamily:K,submitTextFontWeight:D,submitTextFontSize:q,submitTextFontSizeType:$,submitTextFontSizeTablet:J,submitTextFontSizeMobile:X,submitTextLineHeightType:Q,submitTextLineHeight:Y,submitTextLineHeightTablet:Z,submitTextLineHeightMobile:ee,labelloadGoogleFonts:te,labelFontFamily:ae,labelFontWeight:le,labelFontSize:ne,labelFontSizeType:oe,labelFontSizeTablet:ie,labelFontSizeMobile:re,labelLineHeightType:ue,labelLineHeight:se,labelLineHeightTablet:ce,labelLineHeightMobile:be,inputloadGoogleFonts:de,inputFontFamily:ge,inputFontWeight:fe,inputFontSize:me,inputFontSizeType:he,inputFontSizeTablet:pe,inputFontSizeMobile:ve,inputLineHeightType:_e,inputLineHeight:Te,inputLineHeightTablet:Ce,inputLineHeightMobile:ye,toggleSize:je,toggleWidthSize:Se,toggleHeightSize:Oe,toggleActiveColor:Ee,labelColor:we,inputColor:Fe,bgColor:Be,inputplaceholderColor:xe,inputactiveColor:Me,inputborderStyle:He,inputborderWidth:Le,inputborderRadius:Ae,inputborderColor:ze,inputborderHoverColor:ke,fieldGap:Re,formStyle:We,overallAlignment:Ne,reCaptchaEnable:Ve,reCaptchaType:Ue,reCaptchaSecretKeyV2:Pe,reCaptchaSiteKeyV2:Ie,reCaptchaSecretKeyV3:Ge,reCaptchaSiteKeyV3:Ke,hidereCaptchaBatch:De,successMessageTextColor:qe,successMessageBGColor:$e,successMessageBorderColor:Je,successMessageBorderStyle:Xe,successMessageBorderWidth:Qe,failedMessageTextColor:Ye,failedMessageBorderColor:Ze,failedMessageBorderStyle:et,failedMessageBorderWidth:tt,failedMessageBGColor:at,successMessageBorderRadius:lt,successMessageHoverBorderColor:nt,failedMessageBorderRadius:ot,failedMessageHoverBorderColor:it,paddingBtnTop:rt,paddingBtnRight:ut,paddingBtnBottom:st,paddingBtnLeft:ct,paddingBtnTopTablet:bt,paddingBtnRightTablet:dt,paddingBtnBottomTablet:gt,paddingBtnLeftTablet:ft,paddingBtnTopMobile:mt,paddingBtnRightMobile:ht,paddingBtnBottomMobile:pt,paddingBtnLeftMobile:vt,paddingBtnUnit:_t,mobilePaddingBtnUnit:Tt,tabletPaddingBtnUnit:Ct,paddingspacingLink:yt,submitTextTransform:jt,submitTextDecoration:St,labelTransform:Ot,labelDecoration:Et,inputTransform:wt,inputDecoration:Ft,fieldGapType:Bt,paddingFieldTop:xt,paddingFieldRight:Mt,paddingFieldBottom:Ht,paddingFieldLeft:Lt,paddingFieldTopTablet:At,paddingFieldRightTablet:zt,paddingFieldBottomTablet:kt,paddingFieldLeftTablet:Rt,paddingFieldTopMobile:Wt,paddingFieldRightMobile:Nt,paddingFieldBottomMobile:Vt,paddingFieldLeftMobile:Ut,paddingFieldUnit:Pt,paddingFieldUnitmobile:It,paddingFieldUnitTablet:Gt,paddingFieldLink:Kt,toggleSizeType:Dt,submitTextFontStyle:qt,labelFontStyle:$t,inputFontStyle:Jt}=t;let Xt,Qt,Yt;if(!0===G){const e={google:{families:[K+(D?":"+D:"")]}};Xt=n.a.createElement(u.a,{config:e})}if(!0===te){const e={google:{families:[ae+(le?":"+le:"")]}};Qt=n.a.createElement(u.a,{config:e})}if(!0===de){const e={google:{families:[ge+(fe?":"+fe:"")]}};Yt=n.a.createElement(u.a,{config:e})}return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.InspectorControls,null,n.a.createElement(b.a,null,n.a.createElement(d.b,d.a.general,n.a.createElement(T.a,{title:Object(o.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},n.a.createElement(_.TextControl,{label:Object(o.__)("Hidden Field Label","ultimate-addons-for-gutenberg"),value:j,onChange:e=>a({formLabel:e})}),n.a.createElement(c.a,{setAttributes:a,label:Object(o.__)("Style","ultimate-addons-for-gutenberg"),data:{value:We,label:"formStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"boxed",label:"Boxed"},{value:"underlined",label:"Underlined"}],showIcons:!1}),n.a.createElement(c.a,{setAttributes:a,label:Object(o.__)("Overall Alignment","ultimate-addons-for-gutenberg"),data:{value:Ne,label:"overallAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),n.a.createElement(c.a,{setAttributes:a,label:Object(o.__)("Confirmation Type","ultimate-addons-for-gutenberg"),data:{value:E,label:"confirmationType"},className:"uagb-multi-button-alignment-control",options:[{value:"message",label:"Message",tooltip:Object(o.__)("Message","ultimate-addons-for-gutenberg")},{value:"url",label:"URL Text",tooltip:Object(o.__)("Url Text","ultimate-addons-for-gutenberg")}],showIcons:!1}),"message"===E&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_.TextareaControl,{label:"Success Message Text",help:Object(o.__)("Enter a message you want to display after successfull form submission","ultimate-addons-for-gutenberg"),value:w,onChange:e=>a({confirmationMessage:e})}),n.a.createElement(_.TextareaControl,{label:"Error Message Text",help:Object(o.__)("Enter a message you want to display after unsuccessfull form submission","ultimate-addons-for-gutenberg"),value:F,onChange:e=>a({failedMessage:e})})),"url"===E&&n.a.createElement(_.TextControl,{label:Object(o.__)("Success Redirect URL","ultimate-addons-for-gutenberg"),help:Object(o.__)("Enter a URL you want to redirect your page to after form Submission","ultimate-addons-for-gutenberg"),value:B,onChange:e=>a({confirmationUrl:e})})),n.a.createElement(T.a,{title:Object(o.__)("After Submit Actions"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(_.ToggleControl,{label:Object(o.__)("Email","ultimate-addons-for-gutenberg"),checked:x,onChange:()=>a({sendAfterSubmitEmail:!x})}),!0===x&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{tabs:[{name:"to",title:Object(o.__)("To","ultimate-addons-for-gutenberg")},{name:"cc",title:Object(o.__)("CC","ultimate-addons-for-gutenberg")},{name:"bcc",title:Object(o.__)("BCC","ultimate-addons-for-gutenberg")}],to:n.a.createElement(_.TextControl,{placeholder:Object(o.__)("Email","ultimate-addons-for-gutenberg"),value:M,onChange:e=>a({afterSubmitToEmail:e})}),cc:n.a.createElement(_.TextControl,{placeholder:Object(o.__)("Email","ultimate-addons-for-gutenberg"),value:H,onChange:e=>a({afterSubmitCcEmail:e})}),bcc:n.a.createElement(_.TextControl,{placeholder:Object(o.__)("Email","ultimate-addons-for-gutenberg"),value:L,onChange:e=>a({afterSubmitBccEmail:e})}),disableBottomSeparator:!1}),n.a.createElement(_.TextControl,{label:Object(o.__)("Subject","ultimate-addons-for-gutenberg"),placeholder:Object(o.__)("Subject","ultimate-addons-for-gutenberg"),value:A,onChange:e=>a({afterSubmitEmailSubject:e})}))),n.a.createElement(T.a,{title:Object(o.__)("Google reCAPTCHA","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement("p",{className:"uagb-form-notice"},Object(o.__)("P.S. Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page. ","ultimate-addons-for-gutenberg")),n.a.createElement(_.ToggleControl,{label:Object(o.__)("Enable reCAPTCHA ","ultimate-addons-for-gutenberg"),checked:Ve,onChange:()=>a({reCaptchaEnable:!Ve})}),Ve&&n.a.createElement(c.a,{setAttributes:a,label:Object(o.__)("Select Version","ultimate-addons-for-gutenberg"),data:{value:Ue,label:"reCaptchaType"},className:"uagb-multi-button-alignment-control",options:[{value:"v2",label:"V2",tooltip:Object(o.__)("V2","ultimate-addons-for-gutenberg")},{value:"v3",label:"V3",tooltip:Object(o.__)("V3","ultimate-addons-for-gutenberg")}],showIcons:!1}),Ve&&"v2"===Ue&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_.TextControl,{label:Object(o.__)("Site Key","ultimate-addons-for-gutenberg"),value:Ie,onChange:e=>a({reCaptchaSiteKeyV2:e}),placeholder:Object(o.__)("Enter v2 Keys","ultimate-addons-for-gutenberg")}),n.a.createElement(_.TextControl,{label:Object(o.__)("Secret Key","ultimate-addons-for-gutenberg"),value:Pe,onChange:e=>a({reCaptchaSecretKeyV2:e}),placeholder:Object(o.__)("Enter v2 Keys","ultimate-addons-for-gutenberg")})),Ve&&"v3"===Ue&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_.TextControl,{label:Object(o.__)("Site Key","ultimate-addons-for-gutenberg"),value:Ke,onChange:e=>a({reCaptchaSiteKeyV3:e}),placeholder:Object(o.__)("Enter v3 Keys","ultimate-addons-for-gutenberg")}),n.a.createElement(_.TextControl,{label:Object(o.__)("Secret Key","ultimate-addons-for-gutenberg"),value:Ge,onChange:e=>a({reCaptchaSecretKeyV3:e}),placeholder:Object(o.__)("Enter v3 Keys","ultimate-addons-for-gutenberg")}),n.a.createElement(_.ToggleControl,{label:Object(o.__)("Hide reCAPTCHA Badge","ultimate-addons-for-gutenberg"),checked:De,onChange:()=>a({hidereCaptchaBatch:!De})})),n.a.createElement("h2",null," ",Object(o.__)("Know More","ultimate-addons-for-gutenberg")),n.a.createElement(_.ExternalLink,{href:"https://www.google.com/recaptcha/admin/create"},Object(o.__)("Get Keys","ultimate-addons-for-gutenberg")),n.a.createElement(_.ExternalLink,{href:"https://developers.google.com/recaptcha/intro"},Object(o.__)(" | Documentation","ultimate-addons-for-gutenberg")))),n.a.createElement(d.b,d.a.style,n.a.createElement(T.a,{title:Object(o.__)("Label","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:we||"",onColorChange:e=>a({labelColor:e})}),n.a.createElement(r.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:te,label:"labelloadGoogleFonts"},fontFamily:{value:ae,label:"labelFontFamily"},fontWeight:{value:le,label:"labelFontWeight"},fontStyle:{value:$t,label:"labelFontStyle"},fontSizeType:{value:oe,label:"labelFontSizeType"},fontSize:{value:ne,label:"labelFontSize"},fontSizeMobile:{value:re,label:"labelFontSizeMobile"},fontSizeTablet:{value:ie,label:"labelFontSizeTablet"},lineHeightType:{value:ue,label:"labelLineHeightType"},lineHeight:{value:se,label:"labelLineHeight"},lineHeightMobile:{value:be,label:"labelLineHeightMobile"},lineHeightTablet:{value:ce,label:"labelLineHeightTablet"},transform:{value:Ot,label:"labelTransform"},decoration:{value:Et,label:"labelDecoration"}})),n.a.createElement(T.a,{title:Object(o.__)("Input","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Fe||"",onColorChange:e=>a({inputColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Placeholder Color","ultimate-addons-for-gutenberg"),colorValue:xe||"",onColorChange:e=>a({inputplaceholderColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Active Color","ultimate-addons-for-gutenberg"),colorValue:Me||"",onColorChange:e=>a({inputactiveColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Be||"",onColorChange:e=>a({bgColor:e})}),n.a.createElement(r.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:de,label:"inputloadGoogleFonts"},fontFamily:{value:ge,label:"inputFontFamily"},fontWeight:{value:fe,label:"inputFontWeight"},fontStyle:{value:Jt,label:"inputFontStyle"},fontSizeType:{value:he,label:"inputFontSizeType"},fontSize:{value:me,label:"inputFontSize"},fontSizeMobile:{value:ve,label:"inputFontSizeMobile"},fontSizeTablet:{value:pe,label:"inputFontSizeTablet"},lineHeightType:{value:_e,label:"inputLineHeightType"},lineHeight:{value:Te,label:"inputLineHeight"},lineHeightMobile:{value:ye,label:"inputLineHeightMobile"},lineHeightTablet:{value:Ce,label:"inputLineHeightTablet"},transform:{value:wt,label:"inputTransform"},decoration:{value:Ft,label:"inputDecoration"}}),n.a.createElement(s.a,{setAttributes:a,borderStyle:{value:He,label:"inputborderStyle",title:Object(o.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Le,label:"inputborderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Ae,label:"inputborderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:ze,label:"inputborderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:ke,label:"inputborderHoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),n.a.createElement(T.a,{title:Object(o.__)("Field","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(m.a,{label:Object(o.__)("Spacing between fields","ultimate-addons-for-gutenberg"),setAttributes:a,className:"uagb-padding-control",value:Re,onChange:e=>a({fieldGap:e}),min:0,max:100,unit:{value:Bt,label:"fieldGapType"}}),n.a.createElement(f.a,C({},e,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:xt,label:"paddingFieldTop"},valueRight:{value:Mt,label:"paddingFieldRight"},valueBottom:{value:Ht,label:"paddingFieldBottom"},valueLeft:{value:Lt,label:"paddingFieldLeft"},valueTopTablet:{value:At,label:"paddingFieldTopTablet"},valueRightTablet:{value:zt,label:"paddingFieldRightTablet"},valueBottomTablet:{value:kt,label:"paddingFieldBottomTablet"},valueLeftTablet:{value:Rt,label:"paddingFieldLeftTablet"},valueTopMobile:{value:Wt,label:"paddingFieldTopMobile"},valueRightMobile:{value:Nt,label:"paddingFieldRightMobile"},valueBottomMobile:{value:Vt,label:"paddingFieldBottomMobile"},valueLeftMobile:{value:Ut,label:"paddingFieldLeftMobile"},unit:{value:Pt,label:"paddingFieldUnit"},mUnit:{value:It,label:"paddingFieldUnitmobile"},tUnit:{value:Gt,label:"paddingFieldUnitTablet"},deviceType:y,attributes:t,setAttributes:a,link:{value:Kt,label:"paddingFieldLink"}}))),n.a.createElement(T.a,{title:Object(o.__)("Checkbox / Toggle","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(m.a,{label:Object(o.__)("Checkbox/Radio Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:je,onChange:e=>a({toggleSize:e}),min:0,max:50,unit:{value:Dt,label:"toggleSizeType"}}),n.a.createElement(m.a,{label:Object(o.__)("Toggle Width","ultimate-addons-for-gutenberg"),value:Se,setAttributes:a,onChange:e=>a({toggleWidthSize:e}),min:0,max:50,displayUnit:!1}),n.a.createElement(m.a,{label:Object(o.__)("Toggle Height","ultimate-addons-for-gutenberg"),setAttributes:a,value:Oe,onChange:e=>a({toggleHeightSize:e}),min:0,max:50,displayUnit:!1}),n.a.createElement(g.a,{label:Object(o.__)("Toggle Active Color","ultimate-addons-for-gutenberg"),colorValue:Ee||"",onColorChange:e=>a({toggleActiveColor:e})})),n.a.createElement(T.a,{title:Object(o.__)("Success Message","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},"message"===E&&n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:qe||"",onColorChange:e=>a({successMessageTextColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:$e||"",onColorChange:e=>a({successMessageBGColor:e})}),n.a.createElement(s.a,{setAttributes:a,borderStyle:{value:Xe,label:"successMessageBorderStyle",title:Object(o.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Qe,label:"successMessageBorderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:lt,label:"successMessageBorderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Je,label:"successMessageBorderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:nt,label:"successMessageHoverBorderColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}))),n.a.createElement(T.a,{title:Object(o.__)("Error Message","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},"message"===E&&n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ye||"",onColorChange:e=>a({failedMessageTextColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:at||"",onColorChange:e=>a({failedMessageBGColor:e})}),n.a.createElement(s.a,{setAttributes:a,borderStyle:{value:et,label:"failedMessageBorderStyle",title:Object(o.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:tt,label:"failedMessageBorderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ot,label:"failedMessageBorderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Ze,label:"failedMessageBorderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:it,label:"failedMessageHoverBorderColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}))),n.a.createElement(T.a,{title:Object(o.__)("Submit Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(_.SelectControl,{label:Object(o.__)("Button Size","ultimate-addons-for-gutenberg"),value:O,onChange:e=>a({buttonSize:e}),options:[{value:"small",label:Object(o.__)("Small","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"large",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")},{value:"extralarge",label:Object(o.__)("Extra Large","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Full","ultimate-addons-for-gutenberg")}]}),n.a.createElement(c.a,{setAttributes:a,label:Object(o.__)("Button Alignment","ultimate-addons-for-gutenberg"),data:{value:S,label:"buttonAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),n.a.createElement(f.a,C({},e,{label:Object(o.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:rt,label:"paddingBtnTop"},valueRight:{value:ut,label:"paddingBtnRight"},valueBottom:{value:st,label:"paddingBtnBottom"},valueLeft:{value:ct,label:"paddingBtnLeft"},valueTopTablet:{value:bt,label:"paddingBtnTopTablet"},valueRightTablet:{value:dt,label:"paddingBtnRightTablet"},valueBottomTablet:{value:gt,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:ft,label:"paddingBtnLeftTablet"},valueTopMobile:{value:mt,label:"paddingBtnTopMobile"},valueRightMobile:{value:ht,label:"paddingBtnRightMobile"},valueBottomMobile:{value:pt,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:vt,label:"paddingBtnLeftMobile"},unit:{value:_t,label:"paddingBtnUnit"},mUnit:{value:Tt,label:"mobilePaddingBtnUnit"},tUnit:{value:Ct,label:"tabletPaddingBtnUnit"},deviceType:y,attributes:t,setAttributes:a,link:{value:yt,label:"paddingspacingLink"}})),n.a.createElement(v.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:z||"",onColorChange:e=>a({submitColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:R||"",onColorChange:e=>a({submitBgColor:e})})),hover:n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:e=>a({submitColorHover:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:W||"",onColorChange:e=>a({submitBgColorHover:e})}))}),n.a.createElement(s.a,{setAttributes:a,borderStyle:{value:N,label:"submitborderStyle",title:Object(o.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:V,label:"submitborderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:U,label:"submitborderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:P,label:"submitborderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:I,label:"submitborderHoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!1}),n.a.createElement(r.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:G,label:"submitTextloadGoogleFonts"},fontFamily:{value:K,label:"submitTextFontFamily"},fontWeight:{value:D,label:"submitTextFontWeight"},fontStyle:{value:qt,label:"submitTextFontStyle"},fontSizeType:{value:$,label:"submitTextFontSizeType"},fontSize:{value:q,label:"submitTextFontSize"},fontSizeMobile:{value:X,label:"submitTextFontSizeMobile"},fontSizeTablet:{value:J,label:"submitTextFontSizeTablet"},lineHeightType:{value:Q,label:"submitTextLineHeightType"},lineHeight:{value:Y,label:"submitTextLineHeight"},lineHeightMobile:{value:ee,label:"submitTextLineHeightMobile"},lineHeightTablet:{value:Z,label:"submitTextLineHeightTablet"},transform:{value:jt,label:"submitTextTransform"},decoration:{value:St,label:"submitTextDecoration"}}))),n.a.createElement(d.b,C({},d.a.advance,{parentProps:e})))),n.a.createElement(l.Suspense,{fallback:Object(i.a)()},Xt,Qt,Yt))};t.default=n.a.memo(y)}}]);