(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[4],{151:function(e,t,a){"use strict";var n=a(32),i=a.n(n),o=a(152),l=a.n(o),s=a(3);if(void 0===r)var r=[];const u=e=>{const[t,a]=Object(s.useState)([]);Object(s.useEffect)(()=>{u()},[]),Object(s.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&u()},[e]);const n=()=>{a({status:"loading"})},i=()=>{a({status:"active"})},o=()=>{a({status:"inactive"})},u=()=>{var t;r.includes(e.config.google.families[0])||(l.a.load({...e.config,loading:n,active:i,inactive:o}),t=e.config.google.families[0],r.includes(t)||r.push(t))},{children:c}=e;return c||null};u.propTypes={config:i.a.object.isRequired,children:i.a.element,onStatus:i.a.func.isRequired},u.defaultProps={onStatus:()=>{}},t.a=u},152:function(e,t,a){var n;!function(){function i(e,t,a){return e.call.apply(e.bind,arguments)}function o(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function l(e,t,a){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:o).apply(null,arguments)}var s=Date.now||function(){return+new Date};function r(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function c(e,t,a,n){if(t=e.c.createElement(t),a)for(var i in a)a.hasOwnProperty(i)&&("style"==i?t.style.cssText=a[i]:t.setAttribute(i,a[i]));return n&&t.appendChild(e.c.createTextNode(n)),t}function h(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var o=!1,l=0;l<n.length;l+=1)if(t[i]===n[l]){o=!0;break}o||n.push(t[i])}for(t=[],i=0;i<n.length;i+=1){for(o=!1,l=0;l<a.length;l+=1)if(n[i]===a[l]){o=!0;break}o||t.push(n[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(e,t){for(var a=e.className.split(/\s+/),n=0,i=a.length;n<i;n++)if(a[n]==t)return!0;return!1}function b(e,t,a){function n(){s&&i&&o&&(s(l),s=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,o=!0,l=null,s=a||null;u?(t.onload=function(){i=!0,n()},t.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),n()}):setTimeout((function(){i=!0,n()}),0),h(e,"head",t)}function p(e,t,a,n){var i=e.c.getElementsByTagName("head")[0];if(i){var o=c(e,"script",{src:t}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,a&&a(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout((function(){l||(l=!0,a&&a(Error("Script load timeout")))}),n||5e3),o}return null}function m(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,_(e)}}function y(e,t){e.c=t,_(e)}function _(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function j(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function S(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function H(e){return e.a+e.f}function T(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function O(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function F(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function E(e){if(e.g){var t=g(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),d(e.f,a,n)}x(e,"inactive")}function x(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,H(a)):e.h[t]())}function C(){this.c={}}function k(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function A(e){h(e.c,"body",e.a)}function L(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+S(e.c)+";font-style:"+T(e)+";font-weight:"+e.f+"00;"}function z(e,t,a,n,i,o){this.g=e,this.j=t,this.a=n,this.c=a,this.f=i||3e3,this.h=o||void 0}function W(e,t,a,n,i,o,l){this.v=e,this.B=t,this.c=a,this.a=n,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new k(this.c,this.s),this.h=new k(this.c,this.s),this.j=new k(this.c,this.s),this.m=new k(this.c,this.s),e=L(e=new j(this.a.c+",serif",H(this.a))),this.g.a.style.cssText=e,e=L(e=new j(this.a.c+",sans-serif",H(this.a))),this.h.a.style.cssText=e,e=L(e=new j("serif",H(this.a))),this.j.a.style.cssText=e,e=L(e=new j("sans-serif",H(this.a))),this.m.a.style.cssText=e,A(this.g),A(this.h),A(this.j),A(this.m)}w.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},z.prototype.start=function(){var e=this.c.o.document,t=this,a=s(),n=new Promise((function(n,i){!function o(){s()-a>=t.f?i():e.fonts.load(function(e){return T(e)+" "+e.f+"00 300px "+S(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(o,25)}),(function(){i()}))}()})),i=null,o=new Promise((function(e,a){i=setTimeout(a,t.f)}));Promise.race([o,n]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var N={D:"serif",C:"sans-serif"},I=null;function M(){if(null===I){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);I=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return I}function P(e,t,a){for(var n in N)if(N.hasOwnProperty(n)&&t===e.f[N[n]]&&a===e.f[N[n]])return!0;return!1}function D(e,t){setTimeout(l((function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),t(this.a)}),e),0)}function B(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}W.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=s(),function e(t){var a,n=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(a=n===t.f.serif&&i===t.f["sans-serif"])||(a=M()&&P(t,n,i)),a?s()-t.A>=t.w?M()&&P(t,n,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?D(t,t.v):D(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):D(t,t.v)}(this)};var G=null;function V(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),x(e,"active")):E(e.a))}function q(e){this.j=e,this.a=new C,this.h=0,this.f=this.g=!0}function R(e,t,a,n,i){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,s=n||{};if(0===a.length&&o)E(t.a);else{t.f+=a.length,o&&(t.j=o);var r,u=[];for(r=0;r<a.length;r++){var c=a[r],h=s[c.c],f=t.a,g=c;if(f.g&&d(f.f,[f.a.c("wf",g.c,H(g).toString(),"loading")]),x(f,"fontloading",g),f=null,null===G)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var b=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);G=g?42<parseInt(g[1],10):!b}else G=!1;f=G?new z(l(t.g,t),l(t.h,t),t.c,c,t.s,h):new W(l(t.g,t),l(t.h,t),t.c,c,t.s,e,h),u.push(f)}for(r=0;r<u.length;r++)u[r].start()}}),0)}function U(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}B.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,H(e).toString(),"active")],[t.a.c("wf",e.c,H(e).toString(),"loading"),t.a.c("wf",e.c,H(e).toString(),"inactive")]),x(t,"fontactive",e),this.m=!0,V(this)},B.prototype.h=function(e){var t=this.a;if(t.g){var a=g(t.f,t.a.c("wf",e.c,H(e).toString(),"active")),n=[],i=[t.a.c("wf",e.c,H(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,H(e).toString(),"inactive")),d(t.f,n,i)}x(t,"fontinactive",e),V(this)},q.prototype.load=function(e){this.c=new r(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],i=a.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),x(e,"loading")}(t),n=function(e,t,a){var n,i=[];for(n in t)if(t.hasOwnProperty(n)){var o=e.c[n];o&&i.push(o(t[n],a))}return i}(e.a,a,e.c);var o=new B(e.c,t,i);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){R(e,o,t,a,n)}))}(this,new F(this.c,e),e)},U.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var i=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(i["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(i["__mti_fntLst"+a]){var n,o=i["__mti_fntLst"+a](),l=[];if(o)for(var s=0;s<o.length;s++){var r=o[s].fontfamily;null!=o[s].fontStyle&&null!=o[s].fontWeight?(n=o[s].fontStyle+o[s].fontWeight,l.push(new j(r,n))):l.push(new j(r))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,n=this.a.urls||[],i=this.a.families||[],o=this.a.testStrings||{},l=new m;for(t=0,a=n.length;t<a;t++)b(this.c,n[t],v(l));var s=[];for(t=0,a=i.length;t<a;t++)if((n=i[t].split(":"))[1])for(var r=n[1].split(","),u=0;u<r.length;u+=1)s.push(new j(n[0],r[u]));else s.push(new j(n[0]));y(l,(function(){e(s,o)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,a=this.c,n=new J(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var i=t[n].split(":");3==i.length&&e.f.push(i.pop());var o="";2==i.length&&""!=i[1]&&(o=":"),e.a.push(i.join(o))}}(n,i);var o=new X(i);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),i=n[0].replace(/\+/g," "),o=["n4"];if(2<=n.length){var l;if(l=[],s=n[1])for(var s,r=(s=s.split(",")).length,u=0;u<r;u++){var c;if((c=s[u]).match(/^[\w-]+$/))if(null==(h=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=h[2])||""==c?"n":Z[c],null==(h=h[1])||""==h)h="4";else var h=Y[h]||(isNaN(h)?"4":h.substr(0,1));c=[c,h].join("")}else c="";c&&l.push(c)}0<l.length&&(o=l),3==n.length&&(l=[],0<(n=(n=n[2])?n.split(","):l).length&&(n=Q[n[0]])&&(e.c[i]=n))}for(e.c[i]||(n=Q[i])&&(e.c[i]=n),n=0;n<o.length;n+=1)e.a.push(new j(i,o[n]))}}(o),b(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),y(t,(function(){e(o.a,o.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],i=0;i<t.length;i+=2)for(var o=t[i],l=t[i+1],s=0;s<l.length;s++)n.push(new j(o,l[s]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var i=0,o=a.fonts.length;i<o;++i){var l=a.fonts[i];n.a.push(new j(l.name,O("font-weight:"+l.weight+";font-style:"+l.style)))}e(n.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new q(window);oe.a.c.custom=function(e,t){return new $(t,e)},oe.a.c.fontdeck=function(e,t){return new ie(t,e)},oe.a.c.monotype=function(e,t){return new U(t,e)},oe.a.c.typekit=function(e,t){return new ne(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var le={load:l(oe.load,oe)};void 0===(n=function(){return le}.call(t,a,t,e))||(e.exports=n)}()},399:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(10),l=a(29),s=a(151),r=a(58),u=a(23),c=a(16),h=a(13),f=a(21),d=a(2),g=a(5),b=a(11),p=a(7),m=a(15);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const y=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{headingAlign:y,headingColor:_,subHeadingColor:w,separatorColor:j,headingTag:S,headFontFamily:H,headFontWeight:T,headFontStyle:O,headFontSizeType:F,headFontSize:E,headFontSizeMobile:x,headFontSizeTablet:C,headLineHeightType:k,headLineHeight:A,headLineHeightMobile:L,headLineHeightTablet:z,subHeadFontFamily:W,subHeadFontWeight:N,subHeadFontStyle:I,subHeadFontSize:M,subHeadFontSizeType:P,subHeadFontSizeMobile:D,subHeadFontSizeTablet:B,subHeadLineHeight:G,subHeadLineHeightType:V,subHeadLineHeightMobile:q,subHeadLineHeightTablet:R,headTransform:U,headDecoration:$,subHeadTransform:J,subHeadDecoration:K,separatorWidth:X,separatorWidthType:Q,seperatorStyle:Y,separatorHeight:Z,headSpace:ee,separatorSpace:te,headLoadGoogleFonts:ae,subHeadLoadGoogleFonts:ne}=t;let ie,oe;if(!0===ae){const e={google:{families:[H+(T?":"+T:"")]}};ie=i.a.createElement(s.a,{config:e})}if(!0===ne){const e={google:{families:[W+(N?":"+N:"")]}};oe=i.a.createElement(s.a,{config:e})}return i.a.createElement("div",null,i.a.createElement(g.BlockControls,{key:"controls"},i.a.createElement(g.AlignmentToolbar,{value:y,onChange:e=>a({headingAlign:e})})),i.a.createElement(g.InspectorControls,null,i.a.createElement(r.a,null,i.a.createElement(u.b,u.a.general,i.a.createElement(m.a,null,i.a.createElement(f.a,{setAttributes:a,label:Object(d.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:y,label:"headingAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(p.Icon,{icon:Object(b.a)("fa fa-align-left")}),tooltip:Object(d.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(p.Icon,{icon:Object(b.a)("fa fa-align-center")}),tooltip:Object(d.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(p.Icon,{icon:Object(b.a)("fa fa-align-right")}),tooltip:Object(d.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),i.a.createElement(f.a,{setAttributes:a,label:Object(d.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:S,label:"headingTag"},options:[{value:"h1",label:Object(d.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(d.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(d.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(d.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(d.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(d.__)("H6","ultimate-addons-for-gutenberg")}]}),i.a.createElement(p.SelectControl,{label:Object(d.__)("Separator Style","ultimate-addons-for-gutenberg"),value:Y,onChange:e=>a({seperatorStyle:e}),options:[{value:"none",label:Object(d.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(d.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(d.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(d.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(d.__)("Dotted","ultimate-addons-for-gutenberg")}]}))),i.a.createElement(u.b,u.a.style,i.a.createElement(m.a,{title:Object(d.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(n.Suspense,{fallback:Object(o.a)()},i.a.createElement(l.a,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:ae,label:"headLoadGoogleFonts"},fontFamily:{value:H,label:"headFontFamily"},fontWeight:{value:T,label:"headFontWeight"},fontStyle:{value:O,label:"headFontStyle"},transform:{value:U,label:"headTransform"},decoration:{value:$,label:"headDecoration"},fontSizeType:{value:F,label:"headFontSizeType"},fontSize:{value:E,label:"headFontSize"},fontSizeMobile:{value:x,label:"headFontSizeMobile"},fontSizeTablet:{value:C,label:"headFontSizeTablet"},lineHeightType:{value:k,label:"headLineHeightType"},lineHeight:{value:A,label:"headLineHeight"},lineHeightMobile:{value:L,label:"headLineHeightMobile"},lineHeightTablet:{value:z,label:"headLineHeightTablet"}})),i.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:_||"",onColorChange:e=>a({headingColor:e})}),i.a.createElement(h.a,{label:Object(d.__)("Bottom Spacing (px)","ultimate-addons-for-gutenberg"),setAttributes:a,value:ee,onChange:e=>a({headSpace:e}),min:0,max:500,displayUnit:!1})),"none"!==Y&&i.a.createElement(m.a,{title:Object(d.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(h.a,{label:Object(d.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:a,value:X,onChange:e=>a({separatorWidth:e}),min:0,max:"%"===Q?100:500,unit:{value:Q,label:"separatorWidthType"},units:[{name:Object(d.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(d.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),i.a.createElement(h.a,{label:Object(d.__)("Thickness(px)","ultimate-addons-for-gutenberg"),setAttributes:a,value:Z,onChange:e=>a({separatorHeight:e}),min:0,max:20,displayUnit:!1}),i.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:j||"",onColorChange:e=>a({separatorColor:e})}),i.a.createElement(h.a,{label:Object(d.__)("Bottom Spacing (px)","ultimate-addons-for-gutenberg"),setAttributes:a,value:te,onChange:e=>a({separatorSpace:e}),min:0,max:500,displayUnit:!1})),i.a.createElement(m.a,{title:Object(d.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(n.Suspense,{fallback:Object(o.a)()},i.a.createElement(l.a,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:ne,label:"subHeadLoadGoogleFonts"},fontFamily:{value:W,label:"subHeadFontFamily"},fontWeight:{value:N,label:"subHeadFontWeight"},fontStyle:{value:I,label:"subHeadFontStyle"},transform:{value:J,label:"subHeadTransform"},decoration:{value:K,label:"subHeadDecoration"},fontSizeType:{value:P,label:"subHeadFontSizeType"},fontSize:{value:M,label:"subHeadFontSize"},fontSizeMobile:{value:D,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:B,label:"subHeadFontSizeTablet"},lineHeightType:{value:V,label:"subHeadLineHeightType"},lineHeight:{value:G,label:"subHeadLineHeight"},lineHeightMobile:{value:q,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:R,label:"subHeadLineHeightTablet"}})),i.a.createElement(c.a,{label:Object(d.__)("Color","ultimate-addons-for-gutenberg"),colorValue:w||"",onColorChange:e=>a({subHeadingColor:e})}))),i.a.createElement(u.b,v({},u.a.advance,{parentProps:e})))),i.a.createElement(n.Suspense,{fallback:Object(o.a)()},ie,oe))};t.default=i.a.memo(y)}}]);