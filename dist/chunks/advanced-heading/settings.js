(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[4],{242:function(e,t,n){e.exports=n(245)()},243:function(e,t,n){"use strict";var a=n(242),i=n.n(a),o=n(244),l=n.n(o),s=n(3);if(void 0===r)var r=[];const u=e=>{const[t,n]=Object(s.useState)([]);Object(s.useEffect)(()=>{u()},[]);const a=()=>{n({status:"loading"})},i=()=>{n({status:"active"})},o=()=>{n({status:"inactive"})},u=()=>{var t;r.includes(e.config.google.families[0])||(l.a.load({...e.config,loading:a,active:i,inactive:o}),t=e.config.google.families[0],r.includes(t)||r.push(t))};Object(s.useEffect)(()=>{const{onStatus:n,config:a}=e;void 0!==t.status&&n(t.status),a!==t.config&&u()},[void 0]);const{children:c}=e;return c||null};u.propTypes={config:i.a.object.isRequired,children:i.a.element,onStatus:i.a.func.isRequired},u.defaultProps={onStatus:()=>{}},t.a=u},244:function(e,t,n){var a;!function(){function i(e,t,n){return e.call.apply(e.bind,arguments)}function o(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:o).apply(null,arguments)}var s=Date.now||function(){return+new Date};function r(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function c(e,t,n,a){if(t=e.c.createElement(t),n)for(var i in n)n.hasOwnProperty(i)&&("style"==i?t.style.cssText=n[i]:t.setAttribute(i,n[i]));return a&&t.appendChild(e.c.createTextNode(a)),t}function h(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var o=!1,l=0;l<a.length;l+=1)if(t[i]===a[l]){o=!0;break}o||a.push(t[i])}for(t=[],i=0;i<a.length;i+=1){for(o=!1,l=0;l<n.length;l+=1)if(a[i]===n[l]){o=!0;break}o||t.push(a[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(e,t){for(var n=e.className.split(/\s+/),a=0,i=n.length;a<i;a++)if(n[a]==t)return!0;return!1}function b(e,t,n){function a(){s&&i&&o&&(s(l),s=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,o=!0,l=null,s=n||null;u?(t.onload=function(){i=!0,a()},t.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){i=!0,a()}),0),h(e,"head",t)}function p(e,t,n,a){var i=e.c.getElementsByTagName("head")[0];if(i){var o=c(e,"script",{src:t}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),o}return null}function m(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,_(e)}}function y(e,t){e.c=t,_(e)}function _(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function S(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function T(e){return e.a+e.f}function H(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function O(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function F(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function E(e){if(e.g){var t=g(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),d(e.f,n,a)}x(e,"inactive")}function x(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,T(n)):e.h[t]())}function C(){this.c={}}function k(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function L(e){h(e.c,"body",e.a)}function A(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+H(e)+";font-weight:"+e.f+"00;"}function z(e,t,n,a,i,o){this.g=e,this.j=t,this.a=a,this.c=n,this.f=i||3e3,this.h=o||void 0}function P(e,t,n,a,i,o,l){this.v=e,this.B=t,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new k(this.c,this.s),this.h=new k(this.c,this.s),this.j=new k(this.c,this.s),this.m=new k(this.c,this.s),e=A(e=new S(this.a.c+",serif",T(this.a))),this.g.a.style.cssText=e,e=A(e=new S(this.a.c+",sans-serif",T(this.a))),this.h.a.style.cssText=e,e=A(e=new S("serif",T(this.a))),this.j.a.style.cssText=e,e=A(e=new S("sans-serif",T(this.a))),this.m.a.style.cssText=e,L(this.g),L(this.h),L(this.j),L(this.m)}w.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},z.prototype.start=function(){var e=this.c.o.document,t=this,n=s(),a=new Promise((function(a,i){!function o(){s()-n>=t.f?i():e.fonts.load(function(e){return H(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(o,25)}),(function(){i()}))}()})),i=null,o=new Promise((function(e,n){i=setTimeout(n,t.f)}));Promise.race([o,a]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var W={D:"serif",C:"sans-serif"},B=null;function N(){if(null===B){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);B=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return B}function I(e,t,n){for(var a in W)if(W.hasOwnProperty(a)&&t===e.f[W[a]]&&n===e.f[W[a]])return!0;return!1}function M(e,t){setTimeout(l((function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),t(this.a)}),e),0)}function D(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}P.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=s(),function e(t){var n,a=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(n=a===t.f.serif&&i===t.f["sans-serif"])||(n=N()&&I(t,a,i)),n?s()-t.A>=t.w?N()&&I(t,a,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?M(t,t.v):M(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):M(t,t.v)}(this)};var R=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),x(e,"active")):E(e.a))}function V(e){this.j=e,this.a=new C,this.h=0,this.f=this.g=!0}function U(e,t,n,a,i){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,s=a||{};if(0===n.length&&o)E(t.a);else{t.f+=n.length,o&&(t.j=o);var r,u=[];for(r=0;r<n.length;r++){var c=n[r],h=s[c.c],f=t.a,g=c;if(f.g&&d(f.f,[f.a.c("wf",g.c,T(g).toString(),"loading")]),x(f,"fontloading",g),f=null,null===R)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var b=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);R=g?42<parseInt(g[1],10):!b}else R=!1;f=R?new z(l(t.g,t),l(t.h,t),t.c,c,t.s,h):new P(l(t.g,t),l(t.h,t),t.c,c,t.s,e,h),u.push(f)}for(r=0;r<u.length;r++)u[r].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}D.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,T(e).toString(),"active")],[t.a.c("wf",e.c,T(e).toString(),"loading"),t.a.c("wf",e.c,T(e).toString(),"inactive")]),x(t,"fontactive",e),this.m=!0,G(this)},D.prototype.h=function(e){var t=this.a;if(t.g){var n=g(t.f,t.a.c("wf",e.c,T(e).toString(),"active")),a=[],i=[t.a.c("wf",e.c,T(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,T(e).toString(),"inactive")),d(t.f,a,i)}x(t,"fontinactive",e),G(this)},V.prototype.load=function(e){this.c=new r(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],i=n.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),x(e,"loading")}(t),a=function(e,t,n){var a,i=[];for(a in t)if(t.hasOwnProperty(a)){var o=e.c[a];o&&i.push(o(t[a],n))}return i}(e.a,n,e.c);var o=new D(e.c,t,i);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){U(e,o,t,n,a)}))}(this,new F(this.c,e),e)},q.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var i=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(i["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(i["__mti_fntLst"+n]){var a,o=i["__mti_fntLst"+n](),l=[];if(o)for(var s=0;s<o.length;s++){var r=o[s].fontfamily;null!=o[s].fontStyle&&null!=o[s].fontWeight?(a=o[s].fontStyle+o[s].fontWeight,l.push(new S(r,a))):l.push(new S(r))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},$.prototype.load=function(e){var t,n,a=this.a.urls||[],i=this.a.families||[],o=this.a.testStrings||{},l=new m;for(t=0,n=a.length;t<n;t++)b(this.c,a[t],v(l));var s=[];for(t=0,n=i.length;t<n;t++)if((a=i[t].split(":"))[1])for(var r=a[1].split(","),u=0;u<r.length;u+=1)s.push(new S(a[0],r[u]));else s.push(new S(a[0]));y(l,(function(){e(s,o)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Y={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,n=this.c,a=new J(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var i=t[a].split(":");3==i.length&&e.f.push(i.pop());var o="";2==i.length&&""!=i[1]&&(o=":"),e.a.push(i.join(o))}}(a,i);var o=new X(i);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),i=a[0].replace(/\+/g," "),o=["n4"];if(2<=a.length){var l;if(l=[],s=a[1])for(var s,r=(s=s.split(",")).length,u=0;u<r;u++){var c;if((c=s[u]).match(/^[\w-]+$/))if(null==(h=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=h[2])||""==c?"n":Z[c],null==(h=h[1])||""==h)h="4";else var h=Q[h]||(isNaN(h)?"4":h.substr(0,1));c=[c,h].join("")}else c="";c&&l.push(c)}0<l.length&&(o=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=Y[a[0]])&&(e.c[i]=a))}for(e.c[i]||(a=Y[i])&&(e.c[i]=a),a=0;a<o.length;a+=1)e.a.push(new S(i,o[a]))}}(o),b(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),y(t,(function(){e(o.a,o.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],i=0;i<t.length;i+=2)for(var o=t[i],l=t[i+1],s=0;s<l.length;s++)a.push(new S(o,l[s]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var i=0,o=n.fonts.length;i<o;++i){var l=n.fonts[i];a.a.push(new S(l.name,O("font-weight:"+l.weight+";font-style:"+l.style)))}e(a.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new V(window);oe.a.c.custom=function(e,t){return new $(t,e)},oe.a.c.fontdeck=function(e,t){return new ie(t,e)},oe.a.c.monotype=function(e,t){return new q(t,e)},oe.a.c.typekit=function(e,t){return new ae(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var le={load:l(oe.load,oe)};void 0===(a=function(){return le}.call(t,n,t,e))||(e.exports=a)}()},245:function(e,t,n){"use strict";var a=n(246);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,l){if(l!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},246:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},507:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(11),l=n(24),s=n(243),r=n(63),u=n(21),c=n(16),h=n(13),f=n(22),d=n(2),g=n(5),b=n(6);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const m=e=>{e=e.parentProps;const{attributes:t,setAttributes:n}=e,{headingAlign:m,headingColor:v,subHeadingColor:y,separatorColor:_,headingTag:w,headFontFamily:S,headFontWeight:j,headFontSubset:T,headFontSizeType:H,headFontSize:O,headFontSizeMobile:F,headFontSizeTablet:E,headLineHeightType:x,headLineHeight:C,headLineHeightMobile:k,headLineHeightTablet:L,subHeadFontFamily:A,subHeadFontWeight:z,subHeadFontSubset:P,subHeadFontSize:W,subHeadFontSizeType:B,subHeadFontSizeMobile:N,subHeadFontSizeTablet:I,subHeadLineHeight:M,subHeadLineHeightType:D,subHeadLineHeightMobile:R,subHeadLineHeightTablet:G,separatorWidth:V,separatorWidthType:U,seperatorStyle:q,separatorHeight:$,headSpace:J,separatorSpace:K,headLoadGoogleFonts:X,subHeadLoadGoogleFonts:Y}=t;let Q,Z;if(!0===X){const e={google:{families:[S+(j?":"+j:"")]}};Q=i.a.createElement(s.a,{config:e})}if(!0===Y){const e={google:{families:[A+(z?":"+z:"")]}};Z=i.a.createElement(s.a,{config:e})}return i.a.createElement("div",null,i.a.createElement(g.BlockControls,{key:"controls"},i.a.createElement(g.AlignmentToolbar,{value:m,onChange:e=>n({headingAlign:e})})),i.a.createElement(g.InspectorControls,null,i.a.createElement(r.a,null,i.a.createElement(u.b,u.a.general,i.a.createElement(b.PanelBody,null,i.a.createElement(f.a,{setAttributes:n,label:Object(d.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:w,label:"headingTag"},options:[{value:"h1",label:Object(d.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(d.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(d.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(d.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(d.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(d.__)("H6","ultimate-addons-for-gutenberg")}]}))),i.a.createElement(u.b,u.a.style,i.a.createElement(b.PanelBody,{title:Object(d.__)("Heading","ultimate-addons-for-gutenberg")},i.a.createElement(a.Suspense,{fallback:Object(o.a)()},i.a.createElement(l.a,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:n,loadGoogleFonts:{value:X,label:"headLoadGoogleFonts"},fontFamily:{value:S,label:"headFontFamily"},fontWeight:{value:j,label:"headFontWeight"},fontSubset:{value:T,label:"headFontSubset"},fontSizeType:{value:H,label:"headFontSizeType"},fontSize:{value:O,label:"headFontSize"},fontSizeMobile:{value:F,label:"headFontSizeMobile"},fontSizeTablet:{value:E,label:"headFontSizeTablet"},lineHeightType:{value:x,label:"headLineHeightType"},lineHeight:{value:C,label:"headLineHeight"},lineHeightMobile:{value:k,label:"headLineHeightMobile"},lineHeightTablet:{value:L,label:"headLineHeightTablet"}})),i.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:v||"",onColorChange:e=>n({headingColor:e})}),i.a.createElement(h.a,{label:Object(d.__)("Bottom Spacing (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:J,onChange:e=>n({headSpace:e}),min:0,max:500,displayUnit:!1})),i.a.createElement(b.PanelBody,{title:Object(d.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(b.SelectControl,{label:Object(d.__)("Style","ultimate-addons-for-gutenberg"),value:q,onChange:e=>n({seperatorStyle:e}),options:[{value:"none",label:Object(d.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(d.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(d.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(d.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(d.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==q&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{label:Object(d.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:n,value:V,onChange:e=>n({separatorWidth:e}),min:0,max:"%"===U?100:500,unit:{value:U,label:"separatorWidthType"},units:[{name:Object(d.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(d.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),i.a.createElement(h.a,{label:Object(d.__)("Thickness(px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:$,onChange:e=>n({separatorHeight:e}),min:0,max:20,displayUnit:!1}),i.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:_||"",onColorChange:e=>n({separatorColor:e})})),"none"!==q&&i.a.createElement(h.a,{label:Object(d.__)("Bottom Spacing (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:K,onChange:e=>n({separatorSpace:e}),min:0,max:500,displayUnit:!1})),i.a.createElement(b.PanelBody,{title:Object(d.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(a.Suspense,{fallback:Object(o.a)()},i.a.createElement(l.a,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:n,loadGoogleFonts:{value:Y,label:"subHeadLoadGoogleFonts"},fontFamily:{value:A,label:"subHeadFontFamily"},fontWeight:{value:z,label:"subHeadFontWeight"},fontSubset:{value:P,label:"subHeadFontSubset"},fontSizeType:{value:B,label:"subHeadFontSizeType"},fontSize:{value:W,label:"subHeadFontSize"},fontSizeMobile:{value:N,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:I,label:"subHeadFontSizeTablet"},lineHeightType:{value:D,label:"subHeadLineHeightType"},lineHeight:{value:M,label:"subHeadLineHeight"},lineHeightMobile:{value:R,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:G,label:"subHeadLineHeightTablet"}})),i.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:y||"",onColorChange:e=>n({subHeadingColor:e})}))),i.a.createElement(u.b,p({},u.a.advance,{parentProps:e})))),i.a.createElement(a.Suspense,{fallback:Object(o.a)()},Q,Z))};t.default=i.a.memo(m)}}]);