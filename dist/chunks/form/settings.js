(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[46],{242:function(e,t,a){e.exports=a(245)()},243:function(e,t,a){"use strict";var l=a(242),n=a.n(l),o=a(244),i=a.n(o),r=a(3);if(void 0===u)var u=[];const s=e=>{const[t,a]=Object(r.useState)([]);Object(r.useEffect)(()=>{s()},[]);const l=()=>{a({status:"loading"})},n=()=>{a({status:"active"})},o=()=>{a({status:"inactive"})},s=()=>{var t;u.includes(e.config.google.families[0])||(i.a.load({...e.config,loading:l,active:n,inactive:o}),t=e.config.google.families[0],u.includes(t)||u.push(t))};Object(r.useEffect)(()=>{const{onStatus:a,config:l}=e;void 0!==t.status&&a(t.status),l!==t.config&&s()},[void 0]);const{children:b}=e;return b||null};s.propTypes={config:n.a.object.isRequired,children:n.a.element,onStatus:n.a.func.isRequired},s.defaultProps={onStatus:()=>{}},t.a=s},244:function(e,t,a){var l;!function(){function n(e,t,a){return e.call.apply(e.bind,arguments)}function o(e,t,a){if(!e)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,l),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function b(e,t,a,l){if(t=e.c.createElement(t),a)for(var n in a)a.hasOwnProperty(n)&&("style"==n?t.style.cssText=a[n]:t.setAttribute(n,a[n]));return l&&t.appendChild(e.c.createTextNode(l)),t}function c(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function d(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e,t,a){t=t||[],a=a||[];for(var l=e.className.split(/\s+/),n=0;n<t.length;n+=1){for(var o=!1,i=0;i<l.length;i+=1)if(t[n]===l[i]){o=!0;break}o||l.push(t[n])}for(t=[],n=0;n<l.length;n+=1){for(o=!1,i=0;i<a.length;i+=1)if(l[n]===a[i]){o=!0;break}o||t.push(l[n])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var a=e.className.split(/\s+/),l=0,n=a.length;l<n;l++)if(a[l]==t)return!0;return!1}function m(e,t,a){function l(){r&&n&&o&&(r(i),r=null)}t=b(e,"link",{rel:"stylesheet",href:t,media:"all"});var n=!1,o=!0,i=null,r=a||null;s?(t.onload=function(){n=!0,l()},t.onerror=function(){n=!0,i=Error("Stylesheet failed to load"),l()}):setTimeout((function(){n=!0,l()}),0),c(e,"head",t)}function h(e,t,a,l){var n=e.c.getElementsByTagName("head")[0];if(n){var o=b(e,"script",{src:t}),i=!1;return o.onload=o.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&n.removeChild(o))},n.appendChild(o),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),l||5e3),o}return null}function p(){this.a=0,this.c=null}function _(e){return e.a++,function(){e.a--,T(e)}}function v(e,t){e.c=t,T(e)}function T(e){0==e.a&&e.c&&(e.c(),e.c=null)}function y(e){this.a=e||"-"}function C(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var l=e[a].replace(/['"]/g,"");-1!=l.indexOf(" ")||/^\d/.test(l)?t.push("'"+l+"'"):t.push(l)}return t.join(",")}function O(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function E(e){var t=4,a="n",l=null;return e&&((l=e.match(/(normal|oblique|italic)/i))&&l[1]&&(a=l[1].substr(0,1).toLowerCase()),(l=e.match(/([1-9]00|normal|bold)/i))&&l[1]&&(/bold/i.test(l[1])?t=7:/[1-9]00/.test(l[1])&&(t=parseInt(l[1].substr(0,1),10)))),a+t}function B(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new y("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function w(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),a=[],l=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),g(e.f,a,l)}F(e,"inactive")}function F(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,O(a)):e.h[t]())}function x(){this.c={}}function M(e,t){this.c=e,this.f=t,this.a=b(this.c,"span",{"aria-hidden":"true"},this.f)}function H(e){c(e.c,"body",e.a)}function L(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function A(e,t,a,l,n,o){this.g=e,this.j=t,this.a=l,this.c=a,this.f=n||3e3,this.h=o||void 0}function k(e,t,a,l,n,o,i){this.v=e,this.B=t,this.c=a,this.a=l,this.s=i||"BESbswy",this.f={},this.w=n||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new M(this.c,this.s),this.h=new M(this.c,this.s),this.j=new M(this.c,this.s),this.m=new M(this.c,this.s),e=L(e=new C(this.a.c+",serif",O(this.a))),this.g.a.style.cssText=e,e=L(e=new C(this.a.c+",sans-serif",O(this.a))),this.h.a.style.cssText=e,e=L(e=new C("serif",O(this.a))),this.j.a.style.cssText=e,e=L(e=new C("sans-serif",O(this.a))),this.m.a.style.cssText=e,H(this.g),H(this.h),H(this.j),H(this.m)}y.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},A.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),l=new Promise((function(l,n){!function o(){r()-a>=t.f?n():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?l():setTimeout(o,25)}),(function(){n()}))}()})),n=null,o=new Promise((function(e,a){n=setTimeout(a,t.f)}));Promise.race([o,l]).then((function(){n&&(clearTimeout(n),n=null),t.g(t.a)}),(function(){t.j(t.a)}))};var z={D:"serif",C:"sans-serif"},R=null;function P(){if(null===R){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);R=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return R}function W(e,t,a){for(var l in z)if(z.hasOwnProperty(l)&&t===e.f[z[l]]&&a===e.f[z[l]])return!0;return!1}function N(e,t){setTimeout(i((function(){d(this.g.a),d(this.h.a),d(this.j.a),d(this.m.a),t(this.a)}),e),0)}function V(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}k.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,l=t.g.a.offsetWidth,n=t.h.a.offsetWidth;(a=l===t.f.serif&&n===t.f["sans-serif"])||(a=P()&&W(t,l,n)),a?r()-t.A>=t.w?P()&&W(t,l,n)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?N(t,t.v):N(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):N(t,t.v)}(this)};var U=null;function I(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&g(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),F(e,"active")):w(e.a))}function G(e){this.j=e,this.a=new x,this.h=0,this.f=this.g=!0}function K(e,t,a,l,n){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=n||null,r=l||{};if(0===a.length&&o)w(t.a);else{t.f+=a.length,o&&(t.j=o);var u,s=[];for(u=0;u<a.length;u++){var b=a[u],c=r[b.c],d=t.a,f=b;if(d.g&&g(d.f,[d.a.c("wf",f.c,O(f).toString(),"loading")]),F(d,"fontloading",f),d=null,null===U)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var m=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);U=f?42<parseInt(f[1],10):!m}else U=!1;d=U?new A(i(t.g,t),i(t.h,t),t.c,b,t.s,c):new k(i(t.g,t),i(t.h,t),t.c,b,t.s,e,c),s.push(d)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function D(e,t){this.c=e,this.a=t}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}V.prototype.g=function(e){var t=this.a;t.g&&g(t.f,[t.a.c("wf",e.c,O(e).toString(),"active")],[t.a.c("wf",e.c,O(e).toString(),"loading"),t.a.c("wf",e.c,O(e).toString(),"inactive")]),F(t,"fontactive",e),this.m=!0,I(this)},V.prototype.h=function(e){var t=this.a;if(t.g){var a=f(t.f,t.a.c("wf",e.c,O(e).toString(),"active")),l=[],n=[t.a.c("wf",e.c,O(e).toString(),"loading")];a||l.push(t.a.c("wf",e.c,O(e).toString(),"inactive")),g(t.f,l,n)}F(t,"fontinactive",e),I(this)},G.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var l=[],n=a.timeout;!function(e){e.g&&g(e.f,[e.a.c("wf","loading")]),F(e,"loading")}(t),l=function(e,t,a){var l,n=[];for(l in t)if(t.hasOwnProperty(l)){var o=e.c[l];o&&n.push(o(t[l],a))}return n}(e.a,a,e.c);var o=new V(e.c,t,n);for(e.h=l.length,t=0,a=l.length;t<a;t++)l[t].load((function(t,a,l){K(e,o,t,a,l)}))}(this,new B(this.c,e),e)},D.prototype.load=function(e){var t=this,a=t.a.projectId,l=t.a.version;if(a){var n=t.c.o;h(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(l?"?v="+l:""),(function(l){l?e([]):(n["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(n["__mti_fntLst"+a]){var l,o=n["__mti_fntLst"+a](),i=[];if(o)for(var r=0;r<o.length;r++){var u=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(l=o[r].fontStyle+o[r].fontWeight,i.push(new C(u,l))):i.push(new C(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},q.prototype.load=function(e){var t,a,l=this.a.urls||[],n=this.a.families||[],o=this.a.testStrings||{},i=new p;for(t=0,a=l.length;t<a;t++)m(this.c,l[t],_(i));var r=[];for(t=0,a=n.length;t<a;t++)if((l=n[t].split(":"))[1])for(var u=l[1].split(","),s=0;s<u.length;s+=1)r.push(new C(l[0],u[s]));else r.push(new C(l[0]));v(i,(function(){e(r,o)}))};var J="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Y={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function le(e,t){this.c=e,this.a=t}function ne(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,l=new $(this.a.api,this.a.text),n=this.a.families;!function(e,t){for(var a=t.length,l=0;l<a;l++){var n=t[l].split(":");3==n.length&&e.f.push(n.pop());var o="";2==n.length&&""!=n[1]&&(o=":"),e.a.push(n.join(o))}}(l,n);var o=new X(n);!function(e){for(var t=e.f.length,a=0;a<t;a++){var l=e.f[a].split(":"),n=l[0].replace(/\+/g," "),o=["n4"];if(2<=l.length){var i;if(i=[],r=l[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var b;if((b=r[s]).match(/^[\w-]+$/))if(null==(c=ee.exec(b.toLowerCase())))b="";else{if(b=null==(b=c[2])||""==b?"n":Z[b],null==(c=c[1])||""==c)c="4";else var c=Q[c]||(isNaN(c)?"4":c.substr(0,1));b=[b,c].join("")}else b="";b&&i.push(b)}0<i.length&&(o=i),3==l.length&&(i=[],0<(l=(l=l[2])?l.split(","):i).length&&(l=Y[l[0]])&&(e.c[n]=l))}for(e.c[n]||(l=Y[n])&&(e.c[n]=l),l=0;l<o.length;l+=1)e.a.push(new C(n,o[l]))}}(o),m(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],l=0;l<t;l++)a.push(e.a[l].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(l),_(t)),v(t,(function(){e(o.a,o.c,ae)}))},le.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?h(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var l=[],n=0;n<t.length;n+=2)for(var o=t[n],i=t[n+1],r=0;r<i.length;r++)l.push(new C(o,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(l)}}),2e3):e([])},ne.prototype.load=function(e){var t=this.f.id,a=this.c.o,l=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var n=0,o=a.fonts.length;n<o;++n){var i=a.fonts[n];l.a.push(new C(i.name,E("font-weight:"+i.weight+";font-style:"+i.style)))}e(l.a)},h(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new G(window);oe.a.c.custom=function(e,t){return new q(t,e)},oe.a.c.fontdeck=function(e,t){return new ne(t,e)},oe.a.c.monotype=function(e,t){return new D(t,e)},oe.a.c.typekit=function(e,t){return new le(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(oe.load,oe)};void 0===(l=function(){return ie}.call(t,a,t,e))||(e.exports=l)}()},245:function(e,t,a){"use strict";var l=a(246);function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,o,i){if(i!==l){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return a.PropTypes=a,a}},246:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},548:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),o=a(2),i=a(11),r=a(24),u=a(243),s=a(57),b=a(22),c=a(63),d=a(21),g=a(16),f=a(41),m=a(13),h=a(5),p=a(12),_=a(42),v=a(6);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const y=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,deviceType:y}=e,{formLabel:C,buttonAlign:j,buttonSize:O,confirmationType:S,confirmationMessage:E,failedMessage:B,confirmationUrl:w,sendAfterSubmitEmail:F,afterSubmitToEmail:x,afterSubmitCcEmail:M,afterSubmitBccEmail:H,afterSubmitEmailSubject:L,submitColor:A,submitColorHover:k,submitBgColor:z,submitBgColorHover:R,submitborderStyle:P,submitborderWidth:W,submitborderRadius:N,submitborderColor:V,submitborderHoverColor:U,submitTextloadGoogleFonts:I,submitTextFontFamily:G,submitTextFontWeight:K,submitTextFontSubset:D,submitTextFontSize:q,submitTextFontSizeType:$,submitTextFontSizeTablet:J,submitTextFontSizeMobile:X,submitTextLineHeightType:Y,submitTextLineHeight:Q,submitTextLineHeightTablet:Z,submitTextLineHeightMobile:ee,labelloadGoogleFonts:te,labelFontFamily:ae,labelFontWeight:le,labelFontSubset:ne,labelFontSize:oe,labelFontSizeType:ie,labelFontSizeTablet:re,labelFontSizeMobile:ue,labelLineHeightType:se,labelLineHeight:be,labelLineHeightTablet:ce,labelLineHeightMobile:de,inputloadGoogleFonts:ge,inputFontFamily:fe,inputFontWeight:me,inputFontSubset:he,inputFontSize:pe,inputFontSizeType:_e,inputFontSizeTablet:ve,inputFontSizeMobile:Te,inputLineHeightType:ye,inputLineHeight:Ce,inputLineHeightTablet:je,inputLineHeightMobile:Oe,toggleSize:Se,toggleWidthSize:Ee,toggleHeightSize:Be,toggleActiveColor:we,labelColor:Fe,inputColor:xe,bgColor:Me,inputplaceholderColor:He,inputactiveColor:Le,inputborderStyle:Ae,inputborderWidth:ke,inputborderRadius:ze,inputborderColor:Re,inputborderHoverColor:Pe,fieldGap:We,formStyle:Ne,overallAlignment:Ve,reCaptchaEnable:Ue,reCaptchaType:Ie,reCaptchaSecretKeyV2:Ge,reCaptchaSiteKeyV2:Ke,reCaptchaSecretKeyV3:De,reCaptchaSiteKeyV3:qe,hidereCaptchaBatch:$e,successMessageTextColor:Je,successMessageBGColor:Xe,successMessageBorderColor:Ye,successMessageBorderStyle:Qe,successMessageBorderWidth:Ze,failedMessageTextColor:et,failedMessageBorderColor:tt,failedMessageBorderStyle:at,failedMessageBorderWidth:lt,failedMessageBGColor:nt,successMessageBorderRadius:ot,successMessageHoverBorderColor:it,failedMessageBorderRadius:rt,failedMessageHoverBorderColor:ut,paddingBtnTop:st,paddingBtnRight:bt,paddingBtnBottom:ct,paddingBtnLeft:dt,paddingBtnTopTablet:gt,paddingBtnRightTablet:ft,paddingBtnBottomTablet:mt,paddingBtnLeftTablet:ht,paddingBtnTopMobile:pt,paddingBtnRightMobile:_t,paddingBtnBottomMobile:vt,paddingBtnLeftMobile:Tt,paddingBtnUnit:yt,mobilePaddingBtnUnit:Ct,tabletPaddingBtnUnit:jt,paddingspacingLink:Ot,submitTextTransform:St,submitTextDecoration:Et,labelTextTransform:Bt,labelTextDecoration:wt,inputTransform:Ft,inputDecoration:xt,fieldGapType:Mt,paddingFieldTop:Ht,paddingFieldRight:Lt,paddingFieldBottom:At,paddingFieldLeft:kt,paddingFieldTopTablet:zt,paddingFieldRightTablet:Rt,paddingFieldBottomTablet:Pt,paddingFieldLeftTablet:Wt,paddingFieldTopMobile:Nt,paddingFieldRightMobile:Vt,paddingFieldBottomMobile:Ut,paddingFieldLeftMobile:It,paddingFieldUnit:Gt,paddingFieldUnitmobile:Kt,paddingFieldUnitTablet:Dt,paddingFieldLink:qt,toggleSizeType:$t}=t;let Jt,Xt,Yt;if(!0===I){const e={google:{families:[G+(K?":"+K:"")]}};Jt=n.a.createElement(u.a,{config:e})}if(!0===te){const e={google:{families:[ae+(le?":"+le:"")]}};Xt=n.a.createElement(u.a,{config:e})}if(!0===ge){const e={google:{families:[fe+(me?":"+me:"")]}};Yt=n.a.createElement(u.a,{config:e})}return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.InspectorControls,null,n.a.createElement(c.a,null,n.a.createElement(d.b,d.a.general,n.a.createElement(v.PanelBody,{title:Object(o.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},n.a.createElement(v.TextControl,{label:Object(o.__)("Hidden Field Label","ultimate-addons-for-gutenberg"),value:C,onChange:e=>a({formLabel:e})}),n.a.createElement(b.a,{setAttributes:a,label:Object(o.__)("Style","ultimate-addons-for-gutenberg"),data:{value:Ne,label:"formStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"boxed",label:"Boxed"},{value:"underlined",label:"Underlined"}],showIcons:!1}),n.a.createElement(b.a,{setAttributes:a,label:Object(o.__)("Overall Alignment","ultimate-addons-for-gutenberg"),data:{value:Ve,label:"overallAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(v.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(v.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(v.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),n.a.createElement(b.a,{setAttributes:a,label:Object(o.__)("Confirmation Type","ultimate-addons-for-gutenberg"),data:{value:S,label:"confirmationType"},className:"uagb-multi-button-alignment-control",options:[{value:"message",label:"Message",tooltip:Object(o.__)("Message","ultimate-addons-for-gutenberg")},{value:"url",label:"URL Text",tooltip:Object(o.__)("Url Text","ultimate-addons-for-gutenberg")}],showIcons:!1}),"message"===S&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.TextareaControl,{label:"Success Message Text",help:Object(o.__)("Enter a message you want to display after successfull form submission","ultimate-addons-for-gutenberg"),value:E,onChange:e=>a({confirmationMessage:e})}),n.a.createElement(v.TextareaControl,{label:"Error Message Text",help:Object(o.__)("Enter a message you want to display after unsuccessfull form submission","ultimate-addons-for-gutenberg"),value:B,onChange:e=>a({failedMessage:e})})),"url"===S&&n.a.createElement(v.TextControl,{label:Object(o.__)("Success Redirect URL","ultimate-addons-for-gutenberg"),help:Object(o.__)("Enter a URL you want to redirect your page to after form Submission","ultimate-addons-for-gutenberg"),value:w,onChange:e=>a({confirmationUrl:e})})),n.a.createElement(v.PanelBody,{title:Object(o.__)("After Submit Actions"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(v.ToggleControl,{label:Object(o.__)("Email","ultimate-addons-for-gutenberg"),checked:F,onChange:()=>a({sendAfterSubmitEmail:!F})}),!0===F&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_.a,{tabs:[{name:"to",title:Object(o.__)("To","ultimate-addons-for-gutenberg")},{name:"cc",title:Object(o.__)("CC","ultimate-addons-for-gutenberg")},{name:"bcc",title:Object(o.__)("BCC","ultimate-addons-for-gutenberg")}],to:n.a.createElement(v.TextControl,{placeholder:Object(o.__)("Email","ultimate-addons-for-gutenberg"),value:x,onChange:e=>a({afterSubmitToEmail:e})}),cc:n.a.createElement(v.TextControl,{placeholder:Object(o.__)("Email","ultimate-addons-for-gutenberg"),value:M,onChange:e=>a({afterSubmitCcEmail:e})}),bcc:n.a.createElement(v.TextControl,{placeholder:Object(o.__)("Email","ultimate-addons-for-gutenberg"),value:H,onChange:e=>a({afterSubmitBccEmail:e})}),disableBottomSeparator:!1}),n.a.createElement(v.TextControl,{label:Object(o.__)("Subject","ultimate-addons-for-gutenberg"),placeholder:Object(o.__)("Subject","ultimate-addons-for-gutenberg"),value:L,onChange:e=>a({afterSubmitEmailSubject:e})}))),n.a.createElement(v.PanelBody,{title:Object(o.__)("Google reCAPTCHA","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement("p",{className:"uagb-form-notice"},Object(o.__)("P.S. Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page. ","ultimate-addons-for-gutenberg")),n.a.createElement(v.ToggleControl,{label:Object(o.__)("Enable reCAPTCHA ","ultimate-addons-for-gutenberg"),checked:Ue,onChange:()=>a({reCaptchaEnable:!Ue})}),Ue&&n.a.createElement(b.a,{setAttributes:a,label:Object(o.__)("Select Version","ultimate-addons-for-gutenberg"),data:{value:Ie,label:"reCaptchaType"},className:"uagb-multi-button-alignment-control",options:[{value:"v2",label:"V2",tooltip:Object(o.__)("V2","ultimate-addons-for-gutenberg")},{value:"v3",label:"V3",tooltip:Object(o.__)("V3","ultimate-addons-for-gutenberg")}],showIcons:!1}),Ue&&"v2"===Ie&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.TextControl,{label:Object(o.__)("Site Key","ultimate-addons-for-gutenberg"),value:Ke,onChange:e=>a({reCaptchaSiteKeyV2:e}),placeholder:Object(o.__)("Enter v2 Keys","ultimate-addons-for-gutenberg")}),n.a.createElement(v.TextControl,{label:Object(o.__)("Secret Key","ultimate-addons-for-gutenberg"),value:Ge,onChange:e=>a({reCaptchaSecretKeyV2:e}),placeholder:Object(o.__)("Enter v2 Keys","ultimate-addons-for-gutenberg")})),Ue&&"v3"===Ie&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.TextControl,{label:Object(o.__)("Site Key","ultimate-addons-for-gutenberg"),value:qe,onChange:e=>a({reCaptchaSiteKeyV3:e}),placeholder:Object(o.__)("Enter v3 Keys","ultimate-addons-for-gutenberg")}),n.a.createElement(v.TextControl,{label:Object(o.__)("Secret Key","ultimate-addons-for-gutenberg"),value:De,onChange:e=>a({reCaptchaSecretKeyV3:e}),placeholder:Object(o.__)("Enter v3 Keys","ultimate-addons-for-gutenberg")}),n.a.createElement(v.ToggleControl,{label:Object(o.__)("Hide reCAPTCHA Badge","ultimate-addons-for-gutenberg"),checked:$e,onChange:()=>a({hidereCaptchaBatch:!$e})})),n.a.createElement("h2",null," ",Object(o.__)("Know More","ultimate-addons-for-gutenberg")),n.a.createElement(v.ExternalLink,{href:"https://www.google.com/recaptcha/admin/create"},Object(o.__)("Get Keys","ultimate-addons-for-gutenberg")),n.a.createElement(v.ExternalLink,{href:"https://developers.google.com/recaptcha/intro"},Object(o.__)(" | Documentation","ultimate-addons-for-gutenberg")))),n.a.createElement(d.b,d.a.style,n.a.createElement(v.PanelBody,{title:Object(o.__)("Label","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Fe||"",onColorChange:e=>a({labelColor:e})}),n.a.createElement(r.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:te,label:Object(o.__)("labelloadGoogleFonts","ultimate-addons-for-gutenberg")},fontFamily:{value:ae,label:Object(o.__)("labelFontFamily","ultimate-addons-for-gutenberg")},fontWeight:{value:le,label:Object(o.__)("labelFontWeight","ultimate-addons-for-gutenberg")},fontSubset:{value:ne,label:Object(o.__)("labelFontSubset","ultimate-addons-for-gutenberg")},fontSizeType:{value:ie,label:Object(o.__)("labelFontSizeType","ultimate-addons-for-gutenberg")},fontSize:{value:oe,label:Object(o.__)("labelFontSize","ultimate-addons-for-gutenberg")},fontSizeMobile:{value:ue,label:Object(o.__)("labelFontSizeMobile","ultimate-addons-for-gutenberg")},fontSizeTablet:{value:re,label:Object(o.__)("labelFontSizeTablet","ultimate-addons-for-gutenberg")},lineHeightType:{value:se,label:Object(o.__)("labelLineHeightType","ultimate-addons-for-gutenberg")},lineHeight:{value:be,label:Object(o.__)("labelLineHeight","ultimate-addons-for-gutenberg")},lineHeightMobile:{value:de,label:Object(o.__)("labelLineHeightMobile","ultimate-addons-for-gutenberg")},lineHeightTablet:{value:ce,label:Object(o.__)("labelLineHeightTablet","ultimate-addons-for-gutenberg")},transform:{value:Bt,label:"labelTextTransform"},decoration:{value:wt,label:"labelTextDecoration"}})),n.a.createElement(v.PanelBody,{title:Object(o.__)("Input","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:xe||"",onColorChange:e=>a({inputColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Placeholder Color","ultimate-addons-for-gutenberg"),colorValue:He||"",onColorChange:e=>a({inputplaceholderColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Active Color","ultimate-addons-for-gutenberg"),colorValue:Le||"",onColorChange:e=>a({inputactiveColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Me||"",onColorChange:e=>a({bgColor:e})}),n.a.createElement(r.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:ge,label:Object(o.__)("inputloadGoogleFonts","ultimate-addons-for-gutenberg")},fontFamily:{value:fe,label:Object(o.__)("inputFontFamily","ultimate-addons-for-gutenberg")},fontWeight:{value:me,label:Object(o.__)("inputFontWeight","ultimate-addons-for-gutenberg")},fontSubset:{value:he,label:Object(o.__)("inputFontSubset","ultimate-addons-for-gutenberg")},fontSizeType:{value:_e,label:Object(o.__)("inputFontSizeType","ultimate-addons-for-gutenberg")},fontSize:{value:pe,label:Object(o.__)("inputFontSize","ultimate-addons-for-gutenberg")},fontSizeMobile:{value:Te,label:Object(o.__)("inputFontSizeMobile","ultimate-addons-for-gutenberg")},fontSizeTablet:{value:ve,label:Object(o.__)("inputFontSizeTablet","ultimate-addons-for-gutenberg")},lineHeightType:{value:ye,label:Object(o.__)("inputLineHeightType","ultimate-addons-for-gutenberg")},lineHeight:{value:Ce,label:Object(o.__)("inputLineHeight","ultimate-addons-for-gutenberg")},lineHeightMobile:{value:Oe,label:Object(o.__)("inputLineHeightMobile","ultimate-addons-for-gutenberg")},lineHeightTablet:{value:je,label:Object(o.__)("inputLineHeightTablet","ultimate-addons-for-gutenberg")},transform:{value:Ft,label:"inputTransform"},decoration:{value:xt,label:"inputDecoration"}}),n.a.createElement(s.a,{setAttributes:a,borderStyle:{value:Ae,label:"inputborderStyle",title:Object(o.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:ke,label:"inputborderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ze,label:"inputborderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Re,label:"inputborderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Pe,label:"inputborderHoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),n.a.createElement(v.PanelBody,{title:Object(o.__)("Field","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(m.a,{label:Object(o.__)("Spacing between fields","ultimate-addons-for-gutenberg"),setAttributes:a,className:"uagb-padding-control",value:We,onChange:e=>a({fieldGap:e}),min:0,max:100,unit:{value:Mt,label:"fieldGapType"}}),n.a.createElement(f.a,T({},e,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ht,label:"paddingFieldTop"},valueRight:{value:Lt,label:"paddingFieldRight"},valueBottom:{value:At,label:"paddingFieldBottom"},valueLeft:{value:kt,label:"paddingFieldLeft"},valueTopTablet:{value:zt,label:"paddingFieldTopTablet"},valueRightTablet:{value:Rt,label:"paddingFieldRightTablet"},valueBottomTablet:{value:Pt,label:"paddingFieldBottomTablet"},valueLeftTablet:{value:Wt,label:"paddingFieldLeftTablet"},valueTopMobile:{value:Nt,label:"paddingFieldTopMobile"},valueRightMobile:{value:Vt,label:"paddingFieldRightMobile"},valueBottomMobile:{value:Ut,label:"paddingFieldBottomMobile"},valueLeftMobile:{value:It,label:"paddingFieldLeftMobile"},unit:{value:Gt,label:"paddingFieldUnit"},mUnit:{value:Kt,label:"paddingFieldUnitmobile"},tUnit:{value:Dt,label:"paddingFieldUnitTablet"},deviceType:y,attributes:t,setAttributes:a,link:{value:qt,label:"paddingFieldLink"}}))),n.a.createElement(v.PanelBody,{title:Object(o.__)("Checkbox / Toggle","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(m.a,{label:Object(o.__)("Checkbox/Radio Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:Se,onChange:e=>a({toggleSize:e}),min:0,max:50,unit:{value:$t,label:"toggleSizeType"}}),n.a.createElement(m.a,{label:Object(o.__)("Toggle Width","ultimate-addons-for-gutenberg"),value:Ee,setAttributes:a,onChange:e=>a({toggleWidthSize:e}),min:0,max:50,displayUnit:!1}),n.a.createElement(m.a,{label:Object(o.__)("Toggle Height","ultimate-addons-for-gutenberg"),setAttributes:a,value:Be,onChange:e=>a({toggleHeightSize:e}),min:0,max:50,displayUnit:!1}),n.a.createElement(g.a,{label:Object(o.__)("Toggle Active Color","ultimate-addons-for-gutenberg"),colorValue:we||"",onColorChange:e=>a({toggleActiveColor:e})})),n.a.createElement(v.PanelBody,{title:Object(o.__)("Success Message","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},"message"===S&&n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Je||"",onColorChange:e=>a({successMessageTextColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:Xe||"",onColorChange:e=>a({successMessageBGColor:e})}),n.a.createElement(s.a,{setAttributes:a,borderStyle:{value:Qe,label:"successMessageBorderStyle",title:Object(o.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Ze,label:"successMessageBorderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ot,label:"successMessageBorderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Ye,label:"successMessageBorderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:it,label:"successMessageHoverBorderColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}))),n.a.createElement(v.PanelBody,{title:Object(o.__)("Error Message","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},"message"===S&&n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:et||"",onColorChange:e=>a({failedMessageTextColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:nt||"",onColorChange:e=>a({failedMessageBGColor:e})}),n.a.createElement(s.a,{setAttributes:a,borderStyle:{value:at,label:"failedMessageBorderStyle",title:Object(o.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:lt,label:"failedMessageBorderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:rt,label:"failedMessageBorderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:tt,label:"failedMessageBorderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:ut,label:"failedMessageHoverBorderColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}))),n.a.createElement(v.PanelBody,{title:Object(o.__)("Submit Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(v.SelectControl,{label:Object(o.__)("Button Size","ultimate-addons-for-gutenberg"),value:O,onChange:e=>a({buttonSize:e}),options:[{value:"small",label:Object(o.__)("Small","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"large",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")},{value:"extralarge",label:Object(o.__)("Extra Large","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Full","ultimate-addons-for-gutenberg")}]}),n.a.createElement(b.a,{setAttributes:a,label:Object(o.__)("Button Alignment","ultimate-addons-for-gutenberg"),data:{value:j,label:"buttonAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(v.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(v.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(v.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),n.a.createElement(f.a,T({},e,{label:Object(o.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:st,label:"paddingBtnTop"},valueRight:{value:bt,label:"paddingBtnRight"},valueBottom:{value:ct,label:"paddingBtnBottom"},valueLeft:{value:dt,label:"paddingBtnLeft"},valueTopTablet:{value:gt,label:"paddingBtnTopTablet"},valueRightTablet:{value:ft,label:"paddingBtnRightTablet"},valueBottomTablet:{value:mt,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:ht,label:"paddingBtnLeftTablet"},valueTopMobile:{value:pt,label:"paddingBtnTopMobile"},valueRightMobile:{value:_t,label:"paddingBtnRightMobile"},valueBottomMobile:{value:vt,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:Tt,label:"paddingBtnLeftMobile"},unit:{value:yt,label:"paddingBtnUnit"},mUnit:{value:Ct,label:"mobilePaddingBtnUnit"},tUnit:{value:jt,label:"tabletPaddingBtnUnit"},deviceType:y,attributes:t,setAttributes:a,link:{value:Ot,label:"paddingspacingLink"}})),n.a.createElement(_.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:A||"",onColorChange:e=>a({submitColor:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:z||"",onColorChange:e=>a({submitBgColor:e})})),hover:n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:e=>a({submitColorHover:e})}),n.a.createElement(g.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:R||"",onColorChange:e=>a({submitBgColorHover:e})}))}),n.a.createElement(r.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:I,label:Object(o.__)("submitTextloadGoogleFonts","ultimate-addons-for-gutenberg")},fontFamily:{value:G,label:Object(o.__)("submitTextFontFamily","ultimate-addons-for-gutenberg")},fontWeight:{value:K,label:Object(o.__)("submitTextFontWeight","ultimate-addons-for-gutenberg")},fontSubset:{value:D,label:Object(o.__)("submitTextFontSubset","ultimate-addons-for-gutenberg")},fontSizeType:{value:$,label:Object(o.__)("submitTextFontSizeType","ultimate-addons-for-gutenberg")},fontSize:{value:q,label:Object(o.__)("submitTextFontSize","ultimate-addons-for-gutenberg")},fontSizeMobile:{value:X,label:Object(o.__)("submitTextFontSizeMobile","ultimate-addons-for-gutenberg")},fontSizeTablet:{value:J,label:Object(o.__)("submitTextFontSizeTablet","ultimate-addons-for-gutenberg")},lineHeightType:{value:Y,label:Object(o.__)("submitTextLineHeightType","ultimate-addons-for-gutenberg")},lineHeight:{value:Q,label:Object(o.__)("submitTextLineHeight","ultimate-addons-for-gutenberg")},lineHeightMobile:{value:ee,label:Object(o.__)("submitTextLineHeightMobile","ultimate-addons-for-gutenberg")},lineHeightTablet:{value:Z,label:Object(o.__)("submitTextLineHeightTablet","ultimate-addons-for-gutenberg")},transform:{value:St,label:"submitTextTransform"},decoration:{value:Et,label:"submitTextDecoration"}}),n.a.createElement(s.a,{setAttributes:a,borderStyle:{value:P,label:"submitborderStyle",title:Object(o.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:W,label:"submitborderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:N,label:"submitborderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:V,label:"submitborderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:U,label:"submitborderHoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}))),n.a.createElement(d.b,T({},d.a.advance,{parentProps:e})))),n.a.createElement(l.Suspense,{fallback:Object(i.a)()},Jt,Xt,Yt))};t.default=n.a.memo(y)}}]);