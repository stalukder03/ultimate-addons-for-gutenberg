(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[4],{269:function(e,t,n){"use strict";var a=n(32),i=n.n(a),o=n(270),l=n.n(o),s=n(3);if(void 0===r)var r=[];const u=e=>{const[t,n]=Object(s.useState)([]);Object(s.useEffect)(()=>{u()},[]),Object(s.useEffect)(()=>{const{onStatus:n,config:a}=e;void 0!==t.status&&n(t.status),a!==t.config&&u()},[e]);const a=()=>{n({status:"loading"})},i=()=>{n({status:"active"})},o=()=>{n({status:"inactive"})},u=()=>{var t;r.includes(e.config.google.families[0])||(l.a.load({...e.config,loading:a,active:i,inactive:o}),t=e.config.google.families[0],r.includes(t)||r.push(t))},{children:c}=e;return c||null};u.propTypes={config:i.a.object.isRequired,children:i.a.element,onStatus:i.a.func.isRequired},u.defaultProps={onStatus:()=>{}},t.a=u},270:function(e,t,n){var a;!function(){function i(e,t,n){return e.call.apply(e.bind,arguments)}function o(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:o).apply(null,arguments)}var s=Date.now||function(){return+new Date};function r(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function c(e,t,n,a){if(t=e.c.createElement(t),n)for(var i in n)n.hasOwnProperty(i)&&("style"==i?t.style.cssText=n[i]:t.setAttribute(i,n[i]));return a&&t.appendChild(e.c.createTextNode(a)),t}function h(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var o=!1,l=0;l<a.length;l+=1)if(t[i]===a[l]){o=!0;break}o||a.push(t[i])}for(t=[],i=0;i<a.length;i+=1){for(o=!1,l=0;l<n.length;l+=1)if(a[i]===n[l]){o=!0;break}o||t.push(a[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(e,t){for(var n=e.className.split(/\s+/),a=0,i=n.length;a<i;a++)if(n[a]==t)return!0;return!1}function b(e,t,n){function a(){s&&i&&o&&(s(l),s=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,o=!0,l=null,s=n||null;u?(t.onload=function(){i=!0,a()},t.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){i=!0,a()}),0),h(e,"head",t)}function p(e,t,n,a){var i=e.c.getElementsByTagName("head")[0];if(i){var o=c(e,"script",{src:t}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),o}return null}function m(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,w(e)}}function y(e,t){e.c=t,w(e)}function w(e){0==e.a&&e.c&&(e.c(),e.c=null)}function _(e){this.a=e||"-"}function S(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function H(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function j(e){return e.a+e.f}function T(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function F(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function O(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new _("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function E(e){if(e.g){var t=g(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),d(e.f,n,a)}x(e,"inactive")}function x(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,j(n)):e.h[t]())}function C(){this.c={}}function k(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function z(e){h(e.c,"body",e.a)}function A(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+H(e.c)+";font-style:"+T(e)+";font-weight:"+e.f+"00;"}function L(e,t,n,a,i,o){this.g=e,this.j=t,this.a=a,this.c=n,this.f=i||3e3,this.h=o||void 0}function W(e,t,n,a,i,o,l){this.v=e,this.B=t,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new k(this.c,this.s),this.h=new k(this.c,this.s),this.j=new k(this.c,this.s),this.m=new k(this.c,this.s),e=A(e=new S(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=e,e=A(e=new S(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=e,e=A(e=new S("serif",j(this.a))),this.j.a.style.cssText=e,e=A(e=new S("sans-serif",j(this.a))),this.m.a.style.cssText=e,z(this.g),z(this.h),z(this.j),z(this.m)}_.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},L.prototype.start=function(){var e=this.c.o.document,t=this,n=s(),a=new Promise((function(a,i){!function o(){s()-n>=t.f?i():e.fonts.load(function(e){return T(e)+" "+e.f+"00 300px "+H(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(o,25)}),(function(){i()}))}()})),i=null,o=new Promise((function(e,n){i=setTimeout(n,t.f)}));Promise.race([o,a]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var M={D:"serif",C:"sans-serif"},N=null;function P(){if(null===N){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return N}function D(e,t,n){for(var a in M)if(M.hasOwnProperty(a)&&t===e.f[M[a]]&&n===e.f[M[a]])return!0;return!1}function B(e,t){setTimeout(l((function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),t(this.a)}),e),0)}function I(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}W.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=s(),function e(t){var n,a=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(n=a===t.f.serif&&i===t.f["sans-serif"])||(n=P()&&D(t,a,i)),n?s()-t.A>=t.w?P()&&D(t,a,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?B(t,t.v):B(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):B(t,t.v)}(this)};var G=null;function V(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),x(e,"active")):E(e.a))}function q(e){this.j=e,this.a=new C,this.h=0,this.f=this.g=!0}function U(e,t,n,a,i){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,s=a||{};if(0===n.length&&o)E(t.a);else{t.f+=n.length,o&&(t.j=o);var r,u=[];for(r=0;r<n.length;r++){var c=n[r],h=s[c.c],f=t.a,g=c;if(f.g&&d(f.f,[f.a.c("wf",g.c,j(g).toString(),"loading")]),x(f,"fontloading",g),f=null,null===G)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var b=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);G=g?42<parseInt(g[1],10):!b}else G=!1;f=G?new L(l(t.g,t),l(t.h,t),t.c,c,t.s,h):new W(l(t.g,t),l(t.h,t),t.c,c,t.s,e,h),u.push(f)}for(r=0;r<u.length;r++)u[r].start()}}),0)}function $(e,t){this.c=e,this.a=t}function R(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}I.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,j(e).toString(),"active")],[t.a.c("wf",e.c,j(e).toString(),"loading"),t.a.c("wf",e.c,j(e).toString(),"inactive")]),x(t,"fontactive",e),this.m=!0,V(this)},I.prototype.h=function(e){var t=this.a;if(t.g){var n=g(t.f,t.a.c("wf",e.c,j(e).toString(),"active")),a=[],i=[t.a.c("wf",e.c,j(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,j(e).toString(),"inactive")),d(t.f,a,i)}x(t,"fontinactive",e),V(this)},q.prototype.load=function(e){this.c=new r(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],i=n.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),x(e,"loading")}(t),a=function(e,t,n){var a,i=[];for(a in t)if(t.hasOwnProperty(a)){var o=e.c[a];o&&i.push(o(t[a],n))}return i}(e.a,n,e.c);var o=new I(e.c,t,i);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){U(e,o,t,n,a)}))}(this,new O(this.c,e),e)},$.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var i=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(i["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(i["__mti_fntLst"+n]){var a,o=i["__mti_fntLst"+n](),l=[];if(o)for(var s=0;s<o.length;s++){var r=o[s].fontfamily;null!=o[s].fontStyle&&null!=o[s].fontWeight?(a=o[s].fontStyle+o[s].fontWeight,l.push(new S(r,a))):l.push(new S(r))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},R.prototype.load=function(e){var t,n,a=this.a.urls||[],i=this.a.families||[],o=this.a.testStrings||{},l=new m;for(t=0,n=a.length;t<n;t++)b(this.c,a[t],v(l));var s=[];for(t=0,n=i.length;t<n;t++)if((a=i[t].split(":"))[1])for(var r=a[1].split(","),u=0;u<r.length;u+=1)s.push(new S(a[0],r[u]));else s.push(new S(a[0]));y(l,(function(){e(s,o)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,n=this.c,a=new J(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var i=t[a].split(":");3==i.length&&e.f.push(i.pop());var o="";2==i.length&&""!=i[1]&&(o=":"),e.a.push(i.join(o))}}(a,i);var o=new X(i);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),i=a[0].replace(/\+/g," "),o=["n4"];if(2<=a.length){var l;if(l=[],s=a[1])for(var s,r=(s=s.split(",")).length,u=0;u<r;u++){var c;if((c=s[u]).match(/^[\w-]+$/))if(null==(h=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=h[2])||""==c?"n":Z[c],null==(h=h[1])||""==h)h="4";else var h=Y[h]||(isNaN(h)?"4":h.substr(0,1));c=[c,h].join("")}else c="";c&&l.push(c)}0<l.length&&(o=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=Q[a[0]])&&(e.c[i]=a))}for(e.c[i]||(a=Q[i])&&(e.c[i]=a),a=0;a<o.length;a+=1)e.a.push(new S(i,o[a]))}}(o),b(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),y(t,(function(){e(o.a,o.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],i=0;i<t.length;i+=2)for(var o=t[i],l=t[i+1],s=0;s<l.length;s++)a.push(new S(o,l[s]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var i=0,o=n.fonts.length;i<o;++i){var l=n.fonts[i];a.a.push(new S(l.name,F("font-weight:"+l.weight+";font-style:"+l.style)))}e(a.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new q(window);oe.a.c.custom=function(e,t){return new R(t,e)},oe.a.c.fontdeck=function(e,t){return new ie(t,e)},oe.a.c.monotype=function(e,t){return new $(t,e)},oe.a.c.typekit=function(e,t){return new ae(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var le={load:l(oe.load,oe)};void 0===(a=function(){return le}.call(t,n,t,e))||(e.exports=a)}()},519:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(11),l=n(30),s=n(269),r=n(65),u=n(22),c=n(18),h=n(14),f=n(23),d=n(2),g=n(5),b=n(9),p=n(17);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const v=e=>{e=e.parentProps;const{attributes:t,setAttributes:n}=e,{headingAlign:v,headingColor:y,subHeadingColor:w,separatorColor:_,headingTag:S,headFontFamily:H,headFontWeight:j,headFontStyle:T,headFontSizeType:F,headFontSize:O,headFontSizeMobile:E,headFontSizeTablet:x,headLineHeightType:C,headLineHeight:k,headLineHeightMobile:z,headLineHeightTablet:A,subHeadFontFamily:L,subHeadFontWeight:W,subHeadFontStyle:M,subHeadFontSize:N,subHeadFontSizeType:P,subHeadFontSizeMobile:D,subHeadFontSizeTablet:B,subHeadLineHeight:I,subHeadLineHeightType:G,subHeadLineHeightMobile:V,subHeadLineHeightTablet:q,headTransform:U,headDecoration:$,subHeadTransform:R,subHeadDecoration:J,separatorWidth:K,separatorWidthType:X,seperatorStyle:Q,separatorHeight:Y,headSpace:Z,separatorSpace:ee,headLoadGoogleFonts:te,subHeadLoadGoogleFonts:ne}=t;let ae,ie;if(!0===te){const e={google:{families:[H+(j?":"+j:"")]}};ae=i.a.createElement(s.a,{config:e})}if(!0===ne){const e={google:{families:[L+(W?":"+W:"")]}};ie=i.a.createElement(s.a,{config:e})}return i.a.createElement("div",null,i.a.createElement(g.BlockControls,{key:"controls"},i.a.createElement(g.AlignmentToolbar,{value:v,onChange:e=>n({headingAlign:e})})),i.a.createElement(g.InspectorControls,null,i.a.createElement(r.a,null,i.a.createElement(u.b,u.a.general,i.a.createElement(p.a,null,i.a.createElement(f.a,{setAttributes:n,label:Object(d.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:S,label:"headingTag"},options:[{value:"h1",label:Object(d.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(d.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(d.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(d.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(d.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(d.__)("H6","ultimate-addons-for-gutenberg")}]}))),i.a.createElement(u.b,u.a.style,i.a.createElement(p.a,{title:Object(d.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(a.Suspense,{fallback:Object(o.a)()},i.a.createElement(l.a,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:n,loadGoogleFonts:{value:te,label:"headLoadGoogleFonts"},fontFamily:{value:H,label:"headFontFamily"},fontWeight:{value:j,label:"headFontWeight"},fontStyle:{value:T,label:"headFontStyle"},transform:{value:U,label:"headTransform"},decoration:{value:$,label:"headDecoration"},fontSizeType:{value:F,label:"headFontSizeType"},fontSize:{value:O,label:"headFontSize"},fontSizeMobile:{value:E,label:"headFontSizeMobile"},fontSizeTablet:{value:x,label:"headFontSizeTablet"},lineHeightType:{value:C,label:"headLineHeightType"},lineHeight:{value:k,label:"headLineHeight"},lineHeightMobile:{value:z,label:"headLineHeightMobile"},lineHeightTablet:{value:A,label:"headLineHeightTablet"}})),i.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:y||"",onColorChange:e=>n({headingColor:e})}),i.a.createElement(h.a,{label:Object(d.__)("Bottom Spacing (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:Z,onChange:e=>n({headSpace:e}),min:0,max:500,displayUnit:!1})),i.a.createElement(p.a,{title:Object(d.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(b.SelectControl,{label:Object(d.__)("Style","ultimate-addons-for-gutenberg"),value:Q,onChange:e=>n({seperatorStyle:e}),options:[{value:"none",label:Object(d.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(d.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(d.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(d.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(d.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==Q&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{label:Object(d.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:n,value:K,onChange:e=>n({separatorWidth:e}),min:0,max:"%"===X?100:500,unit:{value:X,label:"separatorWidthType"},units:[{name:Object(d.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(d.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),i.a.createElement(h.a,{label:Object(d.__)("Thickness(px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:Y,onChange:e=>n({separatorHeight:e}),min:0,max:20,displayUnit:!1}),i.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:_||"",onColorChange:e=>n({separatorColor:e})})),"none"!==Q&&i.a.createElement(h.a,{label:Object(d.__)("Bottom Spacing (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:ee,onChange:e=>n({separatorSpace:e}),min:0,max:500,displayUnit:!1})),i.a.createElement(p.a,{title:Object(d.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(a.Suspense,{fallback:Object(o.a)()},i.a.createElement(l.a,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:n,loadGoogleFonts:{value:ne,label:"subHeadLoadGoogleFonts"},fontFamily:{value:L,label:"subHeadFontFamily"},fontWeight:{value:W,label:"subHeadFontWeight"},fontStyle:{value:M,label:"subHeadFontStyle"},transform:{value:R,label:"subHeadTransform"},decoration:{value:J,label:"subHeadDecoration"},fontSizeType:{value:P,label:"subHeadFontSizeType"},fontSize:{value:N,label:"subHeadFontSize"},fontSizeMobile:{value:D,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:B,label:"subHeadFontSizeTablet"},lineHeightType:{value:G,label:"subHeadLineHeightType"},lineHeight:{value:I,label:"subHeadLineHeight"},lineHeightMobile:{value:V,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:q,label:"subHeadLineHeightTablet"}})),i.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:w||"",onColorChange:e=>n({subHeadingColor:e})}))),i.a.createElement(u.b,m({},u.a.advance,{parentProps:e})))),i.a.createElement(a.Suspense,{fallback:Object(o.a)()},ae,ie))};t.default=i.a.memo(v)}}]);