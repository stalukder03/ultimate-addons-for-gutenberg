(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[100],{198:function(t,e,n){"use strict";var a,i,o=n(36),l=n.n(o),r=n(199),s=n.n(r),c=n(2);if(void 0===u)var u=[];const f=t=>{const[e,n]=Object(c.useState)([]);Object(c.useEffect)(()=>{l()},[]),Object(c.useEffect)(()=>{const{onStatus:n,config:a}=t;void 0!==e.status&&n(e.status),a!==e.config&&l()},[t]);const a=()=>{n({status:"loading"})},i=()=>{n({status:"active"})},o=()=>{n({status:"inactive"})},l=()=>{var e;u.includes(t.config.google.families[0])||(s.a.load({...t.config,loading:a,active:i,inactive:o}),e=t.config.google.families[0],u.includes(e)||u.push(e))},{children:r}=t;return r||null};f.propTypes={config:null===(a=l.a.object)||void 0===a?void 0:a.isRequired,children:l.a.element,onStatus:null===(i=l.a.func)||void 0===i?void 0:i.isRequired},f.defaultProps={onStatus:()=>{}},e.a=f},199:function(t,e,n){var a;!function(){function i(t,e,n){return t.call.apply(t.bind,arguments)}function o(t,e,n){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function l(t,e,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var c=!!window.FontFace;function u(t,e,n,a){if(e=t.c.createElement(e),n)for(var i in n)n.hasOwnProperty(i)&&("style"==i?e.style.cssText=n[i]:e.setAttribute(i,n[i]));return a&&e.appendChild(t.c.createTextNode(a)),e}function f(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t,e,n){e=e||[],n=n||[];for(var a=t.className.split(/\s+/),i=0;i<e.length;i+=1){for(var o=!1,l=0;l<a.length;l+=1)if(e[i]===a[l]){o=!0;break}o||a.push(e[i])}for(e=[],i=0;i<a.length;i+=1){for(o=!1,l=0;l<n.length;l+=1)if(a[i]===n[l]){o=!0;break}o||e.push(a[i])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(t,e){for(var n=t.className.split(/\s+/),a=0,i=n.length;a<i;a++)if(n[a]==e)return!0;return!1}function p(t,e,n){function a(){r&&i&&o&&(r(l),r=null)}e=u(t,"link",{rel:"stylesheet",href:e,media:"all"});var i=!1,o=!0,l=null,r=n||null;c?(e.onload=function(){i=!0,a()},e.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){i=!0,a()}),0),f(t,"head",e)}function b(t,e,n,a){var i=t.c.getElementsByTagName("head")[0];if(i){var o=u(t,"script",{src:e}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),o}return null}function m(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,w(t)}}function y(t,e){t.c=e,w(t)}function w(t){0==t.a&&t.c&&(t.c(),t.c=null)}function _(t){this.a=t||"-"}function j(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function O(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var a=t[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?e.push("'"+a+"'"):e.push(a)}return e.join(",")}function T(t){return t.a+t.f}function S(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function E(t){var e=4,n="n",a=null;return t&&((a=t.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=t.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?e=7:/[1-9]00/.test(a[1])&&(e=parseInt(a[1].substr(0,1),10)))),n+e}function k(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new _("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function x(t){if(t.g){var e=d(t.f,t.a.c("wf","active")),n=[],a=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),g(t.f,n,a)}C(t,"inactive")}function C(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,T(n)):t.h[e]())}function A(){this.c={}}function z(t,e){this.c=t,this.f=e,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function I(t){f(t.c,"body",t.a)}function F(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+O(t.c)+";font-style:"+S(t)+";font-weight:"+t.f+"00;"}function H(t,e,n,a,i,o){this.g=t,this.j=e,this.a=a,this.c=n,this.f=i||3e3,this.h=o||void 0}function M(t,e,n,a,i,o,l){this.v=t,this.B=e,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new z(this.c,this.s),this.h=new z(this.c,this.s),this.j=new z(this.c,this.s),this.m=new z(this.c,this.s),t=F(t=new j(this.a.c+",serif",T(this.a))),this.g.a.style.cssText=t,t=F(t=new j(this.a.c+",sans-serif",T(this.a))),this.h.a.style.cssText=t,t=F(t=new j("serif",T(this.a))),this.j.a.style.cssText=t,t=F(t=new j("sans-serif",T(this.a))),this.m.a.style.cssText=t,I(this.g),I(this.h),I(this.j),I(this.m)}_.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},H.prototype.start=function(){var t=this.c.o.document,e=this,n=r(),a=new Promise((function(a,i){!function o(){r()-n>=e.f?i():t.fonts.load(function(t){return S(t)+" "+t.f+"00 300px "+O(t.c)}(e.a),e.h).then((function(t){1<=t.length?a():setTimeout(o,25)}),(function(){i()}))}()})),i=null,o=new Promise((function(t,n){i=setTimeout(n,e.f)}));Promise.race([o,a]).then((function(){i&&(clearTimeout(i),i=null),e.g(e.a)}),(function(){e.j(e.a)}))};var G={D:"serif",C:"sans-serif"},N=null;function P(){if(null===N){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return N}function W(t,e,n){for(var a in G)if(G.hasOwnProperty(a)&&e===t.f[G[a]]&&n===t.f[G[a]])return!0;return!1}function L(t,e){setTimeout(l((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),e(this.a)}),t),0)}function B(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}M.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(e){var n,a=e.g.a.offsetWidth,i=e.h.a.offsetWidth;(n=a===e.f.serif&&i===e.f["sans-serif"])||(n=P()&&W(e,a,i)),n?r()-e.A>=e.w?P()&&W(e,a,i)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?L(e,e.v):L(e,e.B):function(e){setTimeout(l((function(){t(this)}),e),50)}(e):L(e,e.v)}(this)};var R=null;function D(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&g(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),C(t,"active")):x(t.a))}function U(t){this.j=t,this.a=new A,this.h=0,this.f=this.g=!0}function q(t,e,n,a,i){var o=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=i||null,r=a||{};if(0===n.length&&o)x(e.a);else{e.f+=n.length,o&&(e.j=o);var s,c=[];for(s=0;s<n.length;s++){var u=n[s],f=r[u.c],h=e.a,d=u;if(h.g&&g(h.f,[h.a.c("wf",d.c,T(d).toString(),"loading")]),C(h,"fontloading",d),h=null,null===R)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var p=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);R=d?42<parseInt(d[1],10):!p}else R=!1;h=R?new H(l(e.g,e),l(e.h,e),e.c,u,e.s,f):new M(l(e.g,e),l(e.h,e),e.c,u,e.s,t,f),c.push(h)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function V(t,e){this.c=t,this.a=e}function $(t,e){this.c=t,this.a=e}function J(t,e){this.c=t||K,this.a=[],this.f=[],this.g=e||""}B.prototype.g=function(t){var e=this.a;e.g&&g(e.f,[e.a.c("wf",t.c,T(t).toString(),"active")],[e.a.c("wf",t.c,T(t).toString(),"loading"),e.a.c("wf",t.c,T(t).toString(),"inactive")]),C(e,"fontactive",t),this.m=!0,D(this)},B.prototype.h=function(t){var e=this.a;if(e.g){var n=d(e.f,e.a.c("wf",t.c,T(t).toString(),"active")),a=[],i=[e.a.c("wf",t.c,T(t).toString(),"loading")];n||a.push(e.a.c("wf",t.c,T(t).toString(),"inactive")),g(e.f,a,i)}C(e,"fontinactive",t),D(this)},U.prototype.load=function(t){this.c=new s(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var a=[],i=n.timeout;!function(t){t.g&&g(t.f,[t.a.c("wf","loading")]),C(t,"loading")}(e),a=function(t,e,n){var a,i=[];for(a in e)if(e.hasOwnProperty(a)){var o=t.c[a];o&&i.push(o(e[a],n))}return i}(t.a,n,t.c);var o=new B(t.c,e,i);for(t.h=a.length,e=0,n=a.length;e<n;e++)a[e].load((function(e,n,a){q(t,o,e,n,a)}))}(this,new k(this.c,t),t)},V.prototype.load=function(t){var e=this,n=e.a.projectId,a=e.a.version;if(n){var i=e.c.o;b(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?t([]):(i["__MonotypeConfiguration__"+n]=function(){return e.a},function e(){if(i["__mti_fntLst"+n]){var a,o=i["__mti_fntLst"+n](),l=[];if(o)for(var r=0;r<o.length;r++){var s=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(a=o[r].fontStyle+o[r].fontWeight,l.push(new j(s,a))):l.push(new j(s))}t(l)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+n}else t([])},$.prototype.load=function(t){var e,n,a=this.a.urls||[],i=this.a.families||[],o=this.a.testStrings||{},l=new m;for(e=0,n=a.length;e<n;e++)p(this.c,a[e],v(l));var r=[];for(e=0,n=i.length;e<n;e++)if((a=i[e].split(":"))[1])for(var s=a[1].split(","),c=0;c<s.length;c+=1)r.push(new j(a[0],s[c]));else r.push(new j(a[0]));y(l,(function(){t(r,o)}))};var K="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var nt={Arimo:!0,Cousine:!0,Tinos:!0};function at(t,e){this.c=t,this.a=e}function it(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new m,n=this.c,a=new J(this.a.api,this.a.text),i=this.a.families;!function(t,e){for(var n=e.length,a=0;a<n;a++){var i=e[a].split(":");3==i.length&&t.f.push(i.pop());var o="";2==i.length&&""!=i[1]&&(o=":"),t.a.push(i.join(o))}}(a,i);var o=new X(i);!function(t){for(var e=t.f.length,n=0;n<e;n++){var a=t.f[n].split(":"),i=a[0].replace(/\+/g," "),o=["n4"];if(2<=a.length){var l;if(l=[],r=a[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(f=tt.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&l.push(u)}0<l.length&&(o=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=Q[a[0]])&&(t.c[i]=a))}for(t.c[i]||(a=Q[i])&&(t.c[i]=a),a=0;a<o.length;a+=1)t.a.push(new j(i,o[a]))}}(o),p(n,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],a=0;a<e;a++)n.push(t.a[a].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(a),v(e)),y(e,(function(){t(o.a,o.c,nt)}))},at.prototype.load=function(t){var e=this.a.id,n=this.c.o;e?b(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var a=[],i=0;i<e.length;i+=2)for(var o=e[i],l=e[i+1],r=0;r<l.length;r++)a.push(new j(o,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(a)}}),2e3):t([])},it.prototype.load=function(t){var e=this.f.id,n=this.c.o,a=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var i=0,o=n.fonts.length;i<o;++i){var l=n.fonts[i];a.a.push(new j(l.name,E("font-weight:"+l.weight+";font-style:"+l.style)))}t(a.a)},b(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var ot=new U(window);ot.a.c.custom=function(t,e){return new $(e,t)},ot.a.c.fontdeck=function(t,e){return new it(e,t)},ot.a.c.monotype=function(t,e){return new V(e,t)},ot.a.c.typekit=function(t,e){return new at(e,t)},ot.a.c.google=function(t,e){return new et(e,t)};var lt={load:l(ot.load,ot)};void 0===(a=function(){return lt}.call(e,n,e,t))||(t.exports=a)}()},481:function(t,e,n){"use strict";n.r(e);var a=n(31),i=n(198),o=n(1),l=n(4),r=n(6),s=n(79),c=n(24),u=n(16),f=n(18),h=n(19),g=n(11),d=n(0),p=n.n(d),b=n(23),m=n(15);function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}const y=t=>{t=t.parentProps;const{attributes:e,setAttributes:n,attributes:{rating:d,range:y,layout:w,align:_,size:j,sizeTablet:O,sizeMobile:T,gap:S,gapMobile:E,gapTablet:k,unmarkedColor:x,color:C,title:A,loadGoogleFonts:z,fontFamily:I,fontWeight:F,fontSizeType:H,fontSize:M,fontSizeMobile:G,fontSizeTablet:N,lineHeightType:P,lineHeight:W,lineHeightMobile:L,lineHeightTablet:B,titleColor:R,titleGap:D,titleGapMobile:U,titleGapTablet:q,fontStyle:V,fontTransform:$,fontDecoration:J}}=t;let K;if(!0===z){const t={google:{families:[I+(F?":"+F:"")]}};K=p.a.createElement(i.a,{config:t})}let X=[{value:"left",icon:p.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:p.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:p.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")},{value:"full",icon:p.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-justify")}),tooltip:Object(o.__)("Full","ultimate-addons-for-gutenberg")}];"stack"===w&&(X=[{value:"left",icon:p.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:p.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:p.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],"full"===_&&n({align:"left"}));const Q=p.a.createElement(m.a,{title:Object(o.__)("General","ultimate-addons-for-gutenberg")},p.a.createElement(h.a,{setAttributes:n,label:Object(o.__)("Range","ultimate-addons-for-gutenberg"),data:{value:y,label:"range"},options:[{value:"5",label:Object(o.__)("1-5","ultimate-addons-for-gutenberg")},{value:"10",label:Object(o.__)("1-10","ultimate-addons-for-gutenberg")}]}),p.a.createElement(f.a,{label:Object(o.__)("Rating","ultimate-addons-for-gutenberg"),setAttributes:n,value:d,onChange:t=>n({rating:t}),min:0,max:y,step:.1,displayUnit:!1}),p.a.createElement(h.a,{setAttributes:n,label:Object(o.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:w,label:"layout"},options:[{value:"inline",label:Object(o.__)("Inline","ultimate-addons-for-gutenberg")},{value:"stack",label:Object(o.__)("Stack","ultimate-addons-for-gutenberg")}]}),p.a.createElement(h.a,{setAttributes:n,label:Object(o.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:_,label:"align"},options:X,showIcons:!0})),Y=p.a.createElement(m.a,{title:Object(o.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},p.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:R,onColorChange:t=>n({titleColor:t})}),p.a.createElement(a.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:n,loadGoogleFonts:{value:z,label:"loadGoogleFonts"},fontFamily:{value:I,label:"fontFamily"},fontWeight:{value:F,label:"fontWeight"},fontStyle:{value:V,label:"fontStyle"},transform:{value:$,label:"fontTransform"},decoration:{value:J,label:"fontDecoration"},fontSizeType:{value:H,label:"fontSizeType"},fontSize:{value:M,label:"fontSize"},fontSizeMobile:{value:G,label:"fontSizeMobile"},fontSizeTablet:{value:N,label:"fontSizeTablet"},lineHeightType:{value:P,label:"lineHeightType"},lineHeight:{value:W,label:"lineHeight"},lineHeightMobile:{value:L,label:"lineHeightMobile"},lineHeightTablet:{value:B,label:"lineHeightTablet"}}),p.a.createElement(b.a,{label:Object(o.__)("Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:D,label:"titleGap"},tablet:{value:q,label:"titleGapTablet"},mobile:{value:U,label:"titleGapMobile"}},min:0,max:50,displayUnit:!1,setAttributes:n})),Z=p.a.createElement(m.a,{title:Object(o.__)("Star","ultimate-addons-for-gutenberg"),initialOpen:!0},p.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C,onColorChange:t=>n({color:t})}),p.a.createElement(u.a,{label:Object(o.__)("Unmarked Color","ultimate-addons-for-gutenberg"),colorValue:x,onColorChange:t=>n({unmarkedColor:t})}),p.a.createElement(b.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:j,label:"size"},tablet:{value:O,label:"sizeTablet"},mobile:{value:T,label:"sizeMobile"}},min:0,max:100,displayUnit:!1,setAttributes:n}),p.a.createElement(b.a,{label:Object(o.__)("Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:S,label:"gap"},tablet:{value:k,label:"gapTablet"},mobile:{value:E,label:"gapMobile"}},min:0,max:100,displayUnit:!1,setAttributes:n}));return p.a.createElement(p.a.Fragment,null,p.a.createElement(l.InspectorControls,null,p.a.createElement(s.a,{tabs:["general","style","advance"]},p.a.createElement(c.b,c.a.general,Q),p.a.createElement(c.b,c.a.style,Z,""!==A&&Y),p.a.createElement(c.b,v({},c.a.advance,{parentProps:t})))),K)};e.default=p.a.memo(y)}}]);