(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[66],{153:function(t,e,n){"use strict";var a=n(31),i=n.n(a),o=n(154),l=n.n(o),s=n(3);if(void 0===r)var r=[];const c=t=>{const[e,n]=Object(s.useState)([]);Object(s.useEffect)(()=>{c()},[]),Object(s.useEffect)(()=>{const{onStatus:n,config:a}=t;void 0!==e.status&&n(e.status),a!==e.config&&c()},[t]);const a=()=>{n({status:"loading"})},i=()=>{n({status:"active"})},o=()=>{n({status:"inactive"})},c=()=>{var e;r.includes(t.config.google.families[0])||(l.a.load({...t.config,loading:a,active:i,inactive:o}),e=t.config.google.families[0],r.includes(e)||r.push(e))},{children:u}=t;return u||null};c.propTypes={config:i.a.object.isRequired,children:i.a.element,onStatus:i.a.func.isRequired},c.defaultProps={onStatus:()=>{}},e.a=c},154:function(t,e,n){var a;!function(){function i(t,e,n){return t.call.apply(t.bind,arguments)}function o(t,e,n){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function l(t,e,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:o).apply(null,arguments)}var s=Date.now||function(){return+new Date};function r(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var c=!!window.FontFace;function u(t,e,n,a){if(e=t.c.createElement(e),n)for(var i in n)n.hasOwnProperty(i)&&("style"==i?e.style.cssText=n[i]:e.setAttribute(i,n[i]));return a&&e.appendChild(t.c.createTextNode(a)),e}function f(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t,e,n){e=e||[],n=n||[];for(var a=t.className.split(/\s+/),i=0;i<e.length;i+=1){for(var o=!1,l=0;l<a.length;l+=1)if(e[i]===a[l]){o=!0;break}o||a.push(e[i])}for(e=[],i=0;i<a.length;i+=1){for(o=!1,l=0;l<n.length;l+=1)if(a[i]===n[l]){o=!0;break}o||e.push(a[i])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(t,e){for(var n=t.className.split(/\s+/),a=0,i=n.length;a<i;a++)if(n[a]==e)return!0;return!1}function b(t,e,n){function a(){s&&i&&o&&(s(l),s=null)}e=u(t,"link",{rel:"stylesheet",href:e,media:"all"});var i=!1,o=!0,l=null,s=n||null;c?(e.onload=function(){i=!0,a()},e.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){i=!0,a()}),0),f(t,"head",e)}function p(t,e,n,a){var i=t.c.getElementsByTagName("head")[0];if(i){var o=u(t,"script",{src:e}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),o}return null}function m(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,w(t)}}function _(t,e){t.c=e,w(t)}function w(t){0==t.a&&t.c&&(t.c(),t.c=null)}function y(t){this.a=t||"-"}function j(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function O(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var a=t[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?e.push("'"+a+"'"):e.push(a)}return e.join(",")}function T(t){return t.a+t.f}function S(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function E(t){var e=4,n="n",a=null;return t&&((a=t.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=t.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?e=7:/[1-9]00/.test(a[1])&&(e=parseInt(a[1].substr(0,1),10)))),n+e}function x(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new y("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function k(t){if(t.g){var e=d(t.f,t.a.c("wf","active")),n=[],a=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),g(t.f,n,a)}z(t,"inactive")}function z(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,T(n)):t.h[e]())}function A(){this.c={}}function C(t,e){this.c=t,this.f=e,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function I(t){f(t.c,"body",t.a)}function N(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+O(t.c)+";font-style:"+S(t)+";font-weight:"+t.f+"00;"}function H(t,e,n,a,i,o){this.g=t,this.j=e,this.a=a,this.c=n,this.f=i||3e3,this.h=o||void 0}function F(t,e,n,a,i,o,l){this.v=t,this.B=e,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new C(this.c,this.s),this.h=new C(this.c,this.s),this.j=new C(this.c,this.s),this.m=new C(this.c,this.s),t=N(t=new j(this.a.c+",serif",T(this.a))),this.g.a.style.cssText=t,t=N(t=new j(this.a.c+",sans-serif",T(this.a))),this.h.a.style.cssText=t,t=N(t=new j("serif",T(this.a))),this.j.a.style.cssText=t,t=N(t=new j("sans-serif",T(this.a))),this.m.a.style.cssText=t,I(this.g),I(this.h),I(this.j),I(this.m)}y.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},H.prototype.start=function(){var t=this.c.o.document,e=this,n=s(),a=new Promise((function(a,i){!function o(){s()-n>=e.f?i():t.fonts.load(function(t){return S(t)+" "+t.f+"00 300px "+O(t.c)}(e.a),e.h).then((function(t){1<=t.length?a():setTimeout(o,25)}),(function(){i()}))}()})),i=null,o=new Promise((function(t,n){i=setTimeout(n,e.f)}));Promise.race([o,a]).then((function(){i&&(clearTimeout(i),i=null),e.g(e.a)}),(function(){e.j(e.a)}))};var P={D:"serif",C:"sans-serif"},B=null;function M(){if(null===B){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);B=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return B}function L(t,e,n){for(var a in P)if(P.hasOwnProperty(a)&&e===t.f[P[a]]&&n===t.f[P[a]])return!0;return!1}function W(t,e){setTimeout(l((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),e(this.a)}),t),0)}function R(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}F.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=s(),function t(e){var n,a=e.g.a.offsetWidth,i=e.h.a.offsetWidth;(n=a===e.f.serif&&i===e.f["sans-serif"])||(n=M()&&L(e,a,i)),n?s()-e.A>=e.w?M()&&L(e,a,i)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?W(e,e.v):W(e,e.B):function(e){setTimeout(l((function(){t(this)}),e),50)}(e):W(e,e.v)}(this)};var D=null;function G(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&g(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),z(t,"active")):k(t.a))}function U(t){this.j=t,this.a=new A,this.h=0,this.f=this.g=!0}function V(t,e,n,a,i){var o=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=i||null,s=a||{};if(0===n.length&&o)k(e.a);else{e.f+=n.length,o&&(e.j=o);var r,c=[];for(r=0;r<n.length;r++){var u=n[r],f=s[u.c],h=e.a,d=u;if(h.g&&g(h.f,[h.a.c("wf",d.c,T(d).toString(),"loading")]),z(h,"fontloading",d),h=null,null===D)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var b=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=d?42<parseInt(d[1],10):!b}else D=!1;h=D?new H(l(e.g,e),l(e.h,e),e.c,u,e.s,f):new F(l(e.g,e),l(e.h,e),e.c,u,e.s,t,f),c.push(h)}for(r=0;r<c.length;r++)c[r].start()}}),0)}function q(t,e){this.c=t,this.a=e}function $(t,e){this.c=t,this.a=e}function J(t,e){this.c=t||K,this.a=[],this.f=[],this.g=e||""}R.prototype.g=function(t){var e=this.a;e.g&&g(e.f,[e.a.c("wf",t.c,T(t).toString(),"active")],[e.a.c("wf",t.c,T(t).toString(),"loading"),e.a.c("wf",t.c,T(t).toString(),"inactive")]),z(e,"fontactive",t),this.m=!0,G(this)},R.prototype.h=function(t){var e=this.a;if(e.g){var n=d(e.f,e.a.c("wf",t.c,T(t).toString(),"active")),a=[],i=[e.a.c("wf",t.c,T(t).toString(),"loading")];n||a.push(e.a.c("wf",t.c,T(t).toString(),"inactive")),g(e.f,a,i)}z(e,"fontinactive",t),G(this)},U.prototype.load=function(t){this.c=new r(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var a=[],i=n.timeout;!function(t){t.g&&g(t.f,[t.a.c("wf","loading")]),z(t,"loading")}(e),a=function(t,e,n){var a,i=[];for(a in e)if(e.hasOwnProperty(a)){var o=t.c[a];o&&i.push(o(e[a],n))}return i}(t.a,n,t.c);var o=new R(t.c,e,i);for(t.h=a.length,e=0,n=a.length;e<n;e++)a[e].load((function(e,n,a){V(t,o,e,n,a)}))}(this,new x(this.c,t),t)},q.prototype.load=function(t){var e=this,n=e.a.projectId,a=e.a.version;if(n){var i=e.c.o;p(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?t([]):(i["__MonotypeConfiguration__"+n]=function(){return e.a},function e(){if(i["__mti_fntLst"+n]){var a,o=i["__mti_fntLst"+n](),l=[];if(o)for(var s=0;s<o.length;s++){var r=o[s].fontfamily;null!=o[s].fontStyle&&null!=o[s].fontWeight?(a=o[s].fontStyle+o[s].fontWeight,l.push(new j(r,a))):l.push(new j(r))}t(l)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+n}else t([])},$.prototype.load=function(t){var e,n,a=this.a.urls||[],i=this.a.families||[],o=this.a.testStrings||{},l=new m;for(e=0,n=a.length;e<n;e++)b(this.c,a[e],v(l));var s=[];for(e=0,n=i.length;e<n;e++)if((a=i[e].split(":"))[1])for(var r=a[1].split(","),c=0;c<r.length;c+=1)s.push(new j(a[0],r[c]));else s.push(new j(a[0]));_(l,(function(){t(s,o)}))};var K="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var nt={Arimo:!0,Cousine:!0,Tinos:!0};function at(t,e){this.c=t,this.a=e}function it(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new m,n=this.c,a=new J(this.a.api,this.a.text),i=this.a.families;!function(t,e){for(var n=e.length,a=0;a<n;a++){var i=e[a].split(":");3==i.length&&t.f.push(i.pop());var o="";2==i.length&&""!=i[1]&&(o=":"),t.a.push(i.join(o))}}(a,i);var o=new X(i);!function(t){for(var e=t.f.length,n=0;n<e;n++){var a=t.f[n].split(":"),i=a[0].replace(/\+/g," "),o=["n4"];if(2<=a.length){var l;if(l=[],s=a[1])for(var s,r=(s=s.split(",")).length,c=0;c<r;c++){var u;if((u=s[c]).match(/^[\w-]+$/))if(null==(f=tt.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&l.push(u)}0<l.length&&(o=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=Q[a[0]])&&(t.c[i]=a))}for(t.c[i]||(a=Q[i])&&(t.c[i]=a),a=0;a<o.length;a+=1)t.a.push(new j(i,o[a]))}}(o),b(n,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],a=0;a<e;a++)n.push(t.a[a].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(a),v(e)),_(e,(function(){t(o.a,o.c,nt)}))},at.prototype.load=function(t){var e=this.a.id,n=this.c.o;e?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var a=[],i=0;i<e.length;i+=2)for(var o=e[i],l=e[i+1],s=0;s<l.length;s++)a.push(new j(o,l[s]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(a)}}),2e3):t([])},it.prototype.load=function(t){var e=this.f.id,n=this.c.o,a=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var i=0,o=n.fonts.length;i<o;++i){var l=n.fonts[i];a.a.push(new j(l.name,E("font-weight:"+l.weight+";font-style:"+l.style)))}t(a.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var ot=new U(window);ot.a.c.custom=function(t,e){return new $(e,t)},ot.a.c.fontdeck=function(t,e){return new it(e,t)},ot.a.c.monotype=function(t,e){return new q(e,t)},ot.a.c.typekit=function(t,e){return new at(e,t)},ot.a.c.google=function(t,e){return new et(e,t)};var lt={load:l(ot.load,ot)};void 0===(a=function(){return lt}.call(e,n,e,t))||(t.exports=a)}()},418:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),o=n(10),l=n(153),s=n(29),r=n(2),c=n(11),u=n(5),f=n(57),h=n(23),g=n(14),d=n(58),b=n(21),p=n(12),m=n(7),v=n(17);function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}const w=t=>{t=t.parentProps;const{attributes:e,setAttributes:n,clientId:w}=t,{align:y,gap:j,inner_gap:O,stack:T,icon_layout:S,iconPosition:E,size:x,sizeType:k,sizeMobile:z,sizeTablet:A,hideLabel:C,borderRadius:I,bgSize:N,border:H,fontSize:F,fontSizeType:P,fontSizeMobile:B,fontSizeTablet:M,fontFamily:L,fontWeight:W,lineHeight:R,lineHeightType:D,lineHeightMobile:G,lineHeightTablet:U,loadGoogleFonts:V,fontStyle:q,fontTransform:$,fontDecoration:J}=e;let K;if(!0===V){const t={google:{families:[L+(W?":"+W:"")]}};K=i.a.createElement(l.a,{config:t})}return i.a.createElement(a.Suspense,{fallback:Object(o.a)()},i.a.createElement(u.BlockControls,null,i.a.createElement(u.AlignmentToolbar,{value:y,onChange:t=>{n({align:t})},controls:["left","center","right"]})),i.a.createElement(u.InspectorControls,null,i.a.createElement(f.a,null,i.a.createElement(h.b,h.a.general,i.a.createElement(v.a,{initialOpen:!0},i.a.createElement(b.a,{setAttributes:n,label:Object(r.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:S,label:"icon_layout"},className:"uagb-multi-button-alignment-control",options:[{value:"horizontal",label:Object(r.__)("Horizontal","ultimate-addons-for-gutenberg"),tooltip:Object(r.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(r.__)("Vertical","ultimate-addons-for-gutenberg"),tooltip:Object(r.__)("Vertical","ultimate-addons-for-gutenberg")}],showIcons:!1}),i.a.createElement(b.a,{setAttributes:n,label:Object(r.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:y,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(m.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(r.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(m.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(r.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(m.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(r.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),"horizontal"===S&&i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{setAttributes:n,label:Object(r.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:T,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(r.__)("Tablet + Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(r.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(r.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(r.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(r.__)("Note: Choose on what breakpoint the Icons will stack.","ultimate-addons-for-gutenberg")})),!C&&i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{setAttributes:n,label:Object(r.__)("Icon Alignment","ultimate-addons-for-gutenberg"),data:{value:E,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top",tooltip:Object(r.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:"Middle",tooltip:Object(r.__)("Middle","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(r.__)("Note: This manages the Icon Position with respect to the Label.","ultimate-addons-for-gutenberg")})),i.a.createElement(m.ToggleControl,{label:Object(r.__)("Hide Labels","ultimate-addons-for-gutenberg"),checked:C,onChange:t=>(t=>{Object(c.select)("core/block-editor").getBlocks(w).forEach(e=>{e.attributes.hideLabel=t}),n({hideLabel:t})})(t)}))),i.a.createElement(h.b,h.a.style,i.a.createElement(v.a,{title:Object(r.__)("Icon/Image","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{label:Object(r.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:x,label:"size"},tablet:{value:A,label:"sizeTablet"},mobile:{value:z,label:"sizeMobile"}},min:0,max:500,unit:{value:k,label:"sizeType"},units:[{name:Object(r.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(r.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:n}),i.a.createElement(g.a,{label:Object(r.__)("Background Size (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:N,onChange:t=>n({bgSize:t}),min:0,max:500,displayUnit:!1,help:Object(r.__)("Note: Background Size option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(g.a,{label:Object(r.__)("Border (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:H,onChange:t=>n({border:t}),min:0,max:10,displayUnit:!1,help:Object(r.__)("Note: Border option is useful when one adds border color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(g.a,{label:Object(r.__)("Border Radius (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:I,onChange:t=>n({borderRadius:t}),min:0,max:500,displayUnit:!1,help:Object(r.__)("Note: Border Radius option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")})),!C&&i.a.createElement(v.a,{title:Object(r.__)("Label","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(g.a,{label:Object(r.__)("Gap between Icon and Label (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:O,onChange:t=>n({inner_gap:t}),min:0,max:100,displayUnit:!1}),i.a.createElement(s.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:n,loadGoogleFonts:{value:V,label:"loadGoogleFonts"},fontFamily:{value:L,label:"fontFamily"},fontWeight:{value:W,label:"fontWeight"},fontStyle:{value:q,label:"fontStyle"},transform:{value:$,label:"fontTransform"},decoration:{value:J,label:"fontDecoration"},fontSizeType:{value:P,label:"fontSizeType"},fontSize:{value:F,label:"fontSize"},fontSizeMobile:{value:B,label:"fontSizeMobile"},fontSizeTablet:{value:M,label:"fontSizeTablet"},lineHeightType:{value:D,label:"lineHeightType"},lineHeight:{value:R,label:"lineHeight"},lineHeightMobile:{value:G,label:"lineHeightMobile"},lineHeightTablet:{value:U,label:"lineHeightTablet"}})),i.a.createElement(v.a,{title:Object(r.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(g.a,{label:Object(r.__)("Gap between Items (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:j,onChange:t=>n({gap:t}),min:0,max:100,displayUnit:!1,help:Object(r.__)("Note: For better editing experience, the gap between items might look larger than applied. Viewing in frontend will show the actual results.","ultimate-addons-for-gutenberg")}))),i.a.createElement(h.b,_({},h.a.advance,{parentProps:t})))),K)};e.default=i.a.memo(w)}}]);