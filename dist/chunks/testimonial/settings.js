(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[111],{168:function(e,t,a){"use strict";var n,l,o=a(33),i=a.n(o),r=a(169),u=a.n(r),c=a(2);if(void 0===s)var s=[];const g=e=>{const[t,a]=Object(c.useState)([]);Object(c.useEffect)(()=>{i()},[]),Object(c.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&i()},[e]);const n=()=>{a({status:"loading"})},l=()=>{a({status:"active"})},o=()=>{a({status:"inactive"})},i=()=>{var t;s.includes(e.config.google.families[0])||(u.a.load({...e.config,loading:n,active:l,inactive:o}),t=e.config.google.families[0],s.includes(t)||s.push(t))},{children:r}=e;return r||null};g.propTypes={config:null===(n=i.a.object)||void 0===n?void 0:n.isRequired,children:i.a.element,onStatus:null===(l=i.a.func)||void 0===l?void 0:l.isRequired},g.defaultProps={onStatus:()=>{}},t.a=g},169:function(e,t,a){var n;!function(){function l(e,t,a){return e.call.apply(e.bind,arguments)}function o(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function s(e,t,a,n){if(t=e.c.createElement(t),a)for(var l in a)a.hasOwnProperty(l)&&("style"==l?t.style.cssText=a[l]:t.setAttribute(l,a[l]));return n&&t.appendChild(e.c.createTextNode(n)),t}function g(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),l=0;l<t.length;l+=1){for(var o=!1,i=0;i<n.length;i+=1)if(t[l]===n[i]){o=!0;break}o||n.push(t[l])}for(t=[],l=0;l<n.length;l+=1){for(o=!1,i=0;i<a.length;i+=1)if(n[l]===a[i]){o=!0;break}o||t.push(n[l])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function m(e,t){for(var a=e.className.split(/\s+/),n=0,l=a.length;n<l;n++)if(a[n]==t)return!0;return!1}function f(e,t,a){function n(){r&&l&&o&&(r(i),r=null)}t=s(e,"link",{rel:"stylesheet",href:t,media:"all"});var l=!1,o=!0,i=null,r=a||null;c?(t.onload=function(){l=!0,n()},t.onerror=function(){l=!0,i=Error("Stylesheet failed to load"),n()}):setTimeout((function(){l=!0,n()}),0),g(e,"head",t)}function p(e,t,a,n){var l=e.c.getElementsByTagName("head")[0];if(l){var o=s(e,"script",{src:t}),i=!1;return o.onload=o.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&l.removeChild(o))},l.appendChild(o),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),n||5e3),o}return null}function h(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function T(e){this.a=e||"-"}function j(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function O(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function S(e){return e.a+e.f}function w(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function k(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function C(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new T("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function E(e){if(e.g){var t=m(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),d(e.f,a,n)}F(e,"inactive")}function F(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,S(a)):e.h[t]())}function L(){this.c={}}function A(e,t){this.c=e,this.f=t,this.a=s(this.c,"span",{"aria-hidden":"true"},this.f)}function z(e){g(e.c,"body",e.a)}function x(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+O(e.c)+";font-style:"+w(e)+";font-weight:"+e.f+"00;"}function M(e,t,a,n,l,o){this.g=e,this.j=t,this.a=n,this.c=a,this.f=l||3e3,this.h=o||void 0}function R(e,t,a,n,l,o,i){this.v=e,this.B=t,this.c=a,this.a=n,this.s=i||"BESbswy",this.f={},this.w=l||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new A(this.c,this.s),this.h=new A(this.c,this.s),this.j=new A(this.c,this.s),this.m=new A(this.c,this.s),e=x(e=new j(this.a.c+",serif",S(this.a))),this.g.a.style.cssText=e,e=x(e=new j(this.a.c+",sans-serif",S(this.a))),this.h.a.style.cssText=e,e=x(e=new j("serif",S(this.a))),this.j.a.style.cssText=e,e=x(e=new j("sans-serif",S(this.a))),this.m.a.style.cssText=e,z(this.g),z(this.h),z(this.j),z(this.m)}T.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},M.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,l){!function o(){r()-a>=t.f?l():e.fonts.load(function(e){return w(e)+" "+e.f+"00 300px "+O(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(o,25)}),(function(){l()}))}()})),l=null,o=new Promise((function(e,a){l=setTimeout(a,t.f)}));Promise.race([o,n]).then((function(){l&&(clearTimeout(l),l=null),t.g(t.a)}),(function(){t.j(t.a)}))};var I={D:"serif",C:"sans-serif"},B=null;function H(){if(null===B){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);B=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return B}function N(e,t,a){for(var n in I)if(I.hasOwnProperty(n)&&t===e.f[I[n]]&&a===e.f[I[n]])return!0;return!1}function P(e,t){setTimeout(i((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function G(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,l=t.h.a.offsetWidth;(a=n===t.f.serif&&l===t.f["sans-serif"])||(a=H()&&N(t,n,l)),a?r()-t.A>=t.w?H()&&N(t,n,l)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?P(t,t.v):P(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):P(t,t.v)}(this)};var W=null;function U(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),F(e,"active")):E(e.a))}function V(e){this.j=e,this.a=new L,this.h=0,this.f=this.g=!0}function D(e,t,a,n,l){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=l||null,r=n||{};if(0===a.length&&o)E(t.a);else{t.f+=a.length,o&&(t.j=o);var u,c=[];for(u=0;u<a.length;u++){var s=a[u],g=r[s.c],b=t.a,m=s;if(b.g&&d(b.f,[b.a.c("wf",m.c,S(m).toString(),"loading")]),F(b,"fontloading",m),b=null,null===W)if(window.FontFace){m=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var f=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);W=m?42<parseInt(m[1],10):!f}else W=!1;b=W?new M(i(t.g,t),i(t.h,t),t.c,s,t.s,g):new R(i(t.g,t),i(t.h,t),t.c,s,t.s,e,g),c.push(b)}for(u=0;u<c.length;u++)c[u].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}G.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,S(e).toString(),"active")],[t.a.c("wf",e.c,S(e).toString(),"loading"),t.a.c("wf",e.c,S(e).toString(),"inactive")]),F(t,"fontactive",e),this.m=!0,U(this)},G.prototype.h=function(e){var t=this.a;if(t.g){var a=m(t.f,t.a.c("wf",e.c,S(e).toString(),"active")),n=[],l=[t.a.c("wf",e.c,S(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,S(e).toString(),"inactive")),d(t.f,n,l)}F(t,"fontinactive",e),U(this)},V.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],l=a.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),F(e,"loading")}(t),n=function(e,t,a){var n,l=[];for(n in t)if(t.hasOwnProperty(n)){var o=e.c[n];o&&l.push(o(t[n],a))}return l}(e.a,a,e.c);var o=new G(e.c,t,l);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){D(e,o,t,a,n)}))}(this,new C(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var l=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(l["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(l["__mti_fntLst"+a]){var n,o=l["__mti_fntLst"+a](),i=[];if(o)for(var r=0;r<o.length;r++){var u=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(n=o[r].fontStyle+o[r].fontWeight,i.push(new j(u,n))):i.push(new j(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,n=this.a.urls||[],l=this.a.families||[],o=this.a.testStrings||{},i=new h;for(t=0,a=n.length;t<a;t++)f(this.c,n[t],v(i));var r=[];for(t=0,a=l.length;t<a;t++)if((n=l[t].split(":"))[1])for(var u=n[1].split(","),c=0;c<u.length;c+=1)r.push(new j(n[0],u[c]));else r.push(new j(n[0]));_(i,(function(){e(r,o)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function le(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new h,a=this.c,n=new J(this.a.api,this.a.text),l=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var l=t[n].split(":");3==l.length&&e.f.push(l.pop());var o="";2==l.length&&""!=l[1]&&(o=":"),e.a.push(l.join(o))}}(n,l);var o=new X(l);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),l=n[0].replace(/\+/g," "),o=["n4"];if(2<=n.length){var i;if(i=[],r=n[1])for(var r,u=(r=r.split(",")).length,c=0;c<u;c++){var s;if((s=r[c]).match(/^[\w-]+$/))if(null==(g=ee.exec(s.toLowerCase())))s="";else{if(s=null==(s=g[2])||""==s?"n":Z[s],null==(g=g[1])||""==g)g="4";else var g=Y[g]||(isNaN(g)?"4":g.substr(0,1));s=[s,g].join("")}else s="";s&&i.push(s)}0<i.length&&(o=i),3==n.length&&(i=[],0<(n=(n=n[2])?n.split(","):i).length&&(n=Q[n[0]])&&(e.c[l]=n))}for(e.c[l]||(n=Q[l])&&(e.c[l]=n),n=0;n<o.length;n+=1)e.a.push(new j(l,o[n]))}}(o),f(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),_(t,(function(){e(o.a,o.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],l=0;l<t.length;l+=2)for(var o=t[l],i=t[l+1],r=0;r<i.length;r++)n.push(new j(o,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},le.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var l=0,o=a.fonts.length;l<o;++l){var i=a.fonts[l];n.a.push(new j(i.name,k("font-weight:"+i.weight+";font-style:"+i.style)))}e(n.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new V(window);oe.a.c.custom=function(e,t){return new $(t,e)},oe.a.c.fontdeck=function(e,t){return new le(t,e)},oe.a.c.monotype=function(e,t){return new q(t,e)},oe.a.c.typekit=function(e,t){return new ne(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(oe.load,oe)};void 0===(n=function(){return ie}.call(t,a,t,e))||(e.exports=n)}()},170:function(e,t,a){"use strict";var n,l=a(1),o=a(6),i=a(4),r=a(0),u=a.n(r),c=a(14),s=a.n(c),g=a(171),b=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return b++||(n=s()(g.a,d)),m},m.unuse=function(){b>0&&!--b&&(n(),n=null)};var f=m;t.a=e=>{Object(r.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]);const{onSelectImage:t,backgroundImage:a,onRemoveImage:n,showVideoInput:c,label:s}=e;let g=Object(l.__)("Image","ultimate-addons-for-gutenberg"),b=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),d=Object(l.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(l.__)("Remove Image","ultimate-addons-for-gutenberg"),p=["image"];return c&&(g=Object(l.__)("Video","ultimate-addons-for-gutenberg"),b=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),d=Object(l.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(l.__)("Remove Video","ultimate-addons-for-gutenberg"),p=["video"]),g=s||g,u.a.createElement(o.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+s,label:g},u.a.createElement("div",{className:"uagb-bg-image"},u.a.createElement(i.MediaUpload,{title:b,onSelect:t,allowedTypes:p,value:a,render:e=>{let{open:t}=e;return u.a.createElement(o.Button,{isSecondary:!0,onClick:t},null!=a&&a.url?d:b)}}),(null==a?void 0:a.url)&&u.a.createElement(o.Button,{className:"uagb-rm-btn",onClick:n,isLink:!0,isDestructive:!0},m),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},171:function(e,t,a){"use strict";var n=a(15),l=a.n(n)()((function(e){return e[1]}));l.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),t.a=l},177:function(e,t,a){"use strict";var n=a(15),l=a.n(n)()((function(e){return e[1]}));l.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient {\n  margin-top: 24px; }\n",""]),t.a=l},179:function(e,t,a){"use strict";var n,l=a(1),o=a(17),i=a(6),r=a(14),u=a.n(r),c=a(177),s=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=c.a.locals||{},b.use=function(){return s++||(n=u()(c.a,g)),b},b.unuse=function(){s>0&&!--s&&(n(),n=null)};var d=b,m=e=>{const{setAttributes:t,backgroundGradient:a}=e;return React.createElement(i.GradientPicker,{value:a.value,onChange:e=>{t({[a.label]:e})}})},f=a(0),p=a.n(f),h=a(170);t.a=e=>{Object(f.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]);const{setAttributes:t,backgroundImageColor:a,overlayType:n,backgroundSize:r,backgroundRepeat:u,backgroundAttachment:c,backgroundPosition:s,backgroundImage:g,backgroundColor:b,backgroundVideoType:v,backgroundType:_,backgroundVideo:y,backgroundVideoColor:T,onOpacityChange:j}=e;let O=[];O=[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(l.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(l.__)("Image","ultimate-addons-for-gutenberg")}],v.value&&O.push({value:"video",label:Object(l.__)("Video","ultimate-addons-for-gutenberg")});const S=p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-type"},p.a.createElement(i.SelectControl,{value:_.value,onChange:e=>t({[_.label]:e}),options:O,label:Object(l.__)("Type","ultimate-addons-for-gutenberg")})),"color"===_.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(o.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:b.value?b.value:"",onColorChange:e=>t({[b.label]:e})})),"image"===_.value&&p.a.createElement("div",{className:"uag-background-image"},p.a.createElement(h.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&t({[g.label]:e}):t({[g.label]:null})},backgroundImage:g.value,onRemoveImage:()=>{t({[g.label]:null})}}),g.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(i.SelectControl,{label:Object(l.__)("Image Position","ultimate-addons-for-gutenberg"),value:s.value,onChange:e=>t({[s.label]:e}),options:[{value:"left top",label:Object(l.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(l.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(l.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(l.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(l.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(l.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(l.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(l.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(l.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(i.SelectControl,{label:Object(l.__)("Attachment","ultimate-addons-for-gutenberg"),value:c.value,onChange:e=>t({[c.label]:e}),options:[{value:"fixed",label:Object(l.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(l.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(i.SelectControl,{label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg"),value:u.value,onChange:e=>t({[u.label]:e}),options:[{value:"no-repeat",label:Object(l.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(l.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(l.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(i.SelectControl,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),value:r.value,onChange:e=>t({[r.label]:e}),options:[{value:"auto",label:Object(l.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(l.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(l.__)("Contain","ultimate-addons-for-gutenberg")}]})),n&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(i.SelectControl,{label:Object(l.__)("Overlay Type","ultimate-addons-for-gutenberg"),value:n.value,onChange:e=>t({[n.label]:e}),options:[{value:"color",label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(l.__)("Gradient","ultimate-addons-for-gutenberg")}]})),"color"===n.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(o.a,{label:Object(l.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:a.value,onColorChange:e=>t({[a.label]:e})})),"gradient"===n.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:t}))))),"gradient"===_.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===_.value&&v.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(h.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&t({[y.label]:e}):t({[y.label]:null})},backgroundImage:y.value,onRemoveImage:()=>{t({[y.label]:null})},showVideoInput:!0})),"video"===_.value&&y.value&&v.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},p.a.createElement(o.a,{label:Object(l.__)("Video Overlay Color","ultimate-addons-for-gutenberg"),colorValue:T.value,onColorChange:e=>t({[T.label]:e}),onOpacityChange:j})));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},S)}},426:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a(0),o=a.n(l),i=a(8),r=a(29),u=a(168),c=a(12),s=a(65),g=a(179),b=a(62),d=a(17),m=a(45),f=a(64),p=a(170),h=a(21),v=a(11),_=a(22),y=a(4),T=a(6),j=a(16);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const S=e=>{e=e.parentProps;const{setAttributes:t,attributes:a,deviceType:S}=e,{test_item_count:w,test_block:k,headingAlign:C,companyColor:E,descColor:F,authorColor:L,nameFontSizeType:A,nameFontSize:z,nameFontSizeTablet:x,nameFontSizeMobile:M,nameFontFamily:R,nameFontWeight:I,nameFontStyle:B,nameLineHeightType:H,nameLineHeight:N,nameLineHeightTablet:P,nameLineHeightMobile:G,nameLoadGoogleFonts:W,companyFontSizeType:U,companyFontSize:V,companyFontSizeTablet:D,companyFontSizeMobile:q,companyFontFamily:$,companyFontWeight:J,companyFontStyle:K,companyLineHeightType:X,companyLineHeight:Q,companyLineHeightTablet:Y,companyLineHeightMobile:Z,companyLoadGoogleFonts:ee,descFontSizeType:te,descFontSize:ae,descFontSizeTablet:ne,descFontSizeMobile:le,descFontFamily:oe,descFontWeight:ie,descFontStyle:re,descLineHeightType:ue,descLineHeight:ce,descLineHeightTablet:se,descLineHeightMobile:ge,descLoadGoogleFonts:be,descSpace:de,iconimgStyle:me,imagePosition:fe,imageAlignment:pe,nameSpace:he,imageSize:ve,imageWidth:_e,columns:ye,tcolumns:Te,mcolumns:je,pauseOnHover:Oe,infiniteLoop:Se,transitionSpeed:we,arrowDots:ke,arrowSize:Ce,arrowBorderSize:Ee,arrowBorderRadius:Fe,autoplay:Le,autoplaySpeed:Ae,arrowColor:ze,rowGap:xe,columnGap:Me,backgroundType:Re,backgroundColor:Ie,backgroundImage:Be,backgroundPosition:He,backgroundSize:Ne,backgroundRepeat:Pe,backgroundImageColor:Ge,borderStyle:We,borderWidth:Ue,borderRadius:Ve,borderColor:De,stack:qe,imageWidthType:$e,arrowSizeType:Je,rowGapType:Ke,columnGapType:Xe,descSpaceType:Qe,nameSpaceType:Ye,borderHoverColor:Ze,overlayType:et,backgroundAttachment:tt,gradientValue:at,descTransform:nt,descDecoration:lt,nameTransform:ot,nameDecoration:it,companyTransform:rt,companyDecoration:ut,paddingUnit:ct,mobilePaddingUnit:st,tabletPaddingUnit:gt,paddingTop:bt,paddingBottom:dt,paddingLeft:mt,paddingRight:ft,paddingTopTablet:pt,paddingRightTablet:ht,paddingBottomTablet:vt,paddingLeftTablet:_t,paddingTopMobile:yt,paddingRightMobile:Tt,paddingBottomMobile:jt,paddingLeftMobile:Ot,imgspacingLink:St,spacingLink:wt,imgpaddingTop:kt,imgpaddingRight:Ct,imgpaddingBottom:Et,imgpaddingLeft:Ft,imgpaddingTopTablet:Lt,imgpaddingRightTablet:At,imgpaddingBottomTablet:zt,imgpaddingLeftTablet:xt,imgpaddingTopMobile:Mt,imgpaddingRightMobile:Rt,imgpaddingBottomMobile:It,imgpaddingLeftMobile:Bt,imgpaddingUnit:Ht,imgmobilePaddingUnit:Nt,imgtabletPaddingUnit:Pt}=a;let Gt,Wt,Ut;if(!0===W){const e={google:{families:[R+(I?":"+I:"")]}};Gt=o.a.createElement(u.a,{config:e})}if(!0===ee){const e={google:{families:[$+(J?":"+J:"")]}};Wt=o.a.createElement(u.a,{config:e})}if(!0===be){const e={google:{families:[oe+(ie?":"+ie:"")]}};Ut=o.a.createElement(u.a,{config:e})}const Vt=[{value:"thumbnail",label:Object(n.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(n.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(n.__)("Large","ultimate-addons-for-gutenberg")}],Dt=e=>{let a=null;k[e]&&void 0!==k[e]&&(a=k[e].image);const n=e+1;return o.a.createElement(p.a,{label:"Image "+n,onSelectImage:a=>((e,a)=>{let n=null;n=e&&e.url?e:null,e.type&&"image"===e.type||(n=null);const l=k.map((e,t)=>(a===t&&(e.image=n),e));t({test_block:l})})(a,e),backgroundImage:a,onRemoveImage:()=>(e=>{const a=k.map((t,a)=>(e===a&&(t.image=null),t));t({test_block:a})})(e)})};let qt=0;return k.map((e,t)=>{const a=k[t];if(a&&void 0!==a){const e=a.image;null!=e&&""!==e&&qt++}}),o.a.createElement(l.Suspense,{fallback:Object(i.a)()},o.a.createElement(y.BlockControls,{key:"controls"},o.a.createElement(y.AlignmentToolbar,{value:C,onChange:e=>t({headingAlign:e})})),o.a.createElement(y.InspectorControls,null,o.a.createElement(f.a,null,o.a.createElement(_.b,_.a.general,o.a.createElement(j.a,{title:Object(n.__)("General"),initialOpen:!0},o.a.createElement(c.a,{label:Object(n.__)("Number of Testimonials","ultimate-addons-for-gutenberg"),value:w,onChange:e=>{const a=[...k];if(a.length<e){const n=Math.abs(e-a.length);for(let e=0;e<n;e++)a.push({description:"I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!",name:"John Doe",company:"Company"+(a.length+1),image:""});t({test_block:a})}else{const n=Math.abs(e-a.length),l=a;for(let e=0;e<n;e++)l.pop();t({test_block:l})}t({test_item_count:e})},min:0,max:50,setAttributes:t,displayUnit:!1}),o.a.createElement(s.a,{label:Object(n.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:ye,label:"columns"},tablet:{value:Te,label:"tcolumns"},mobile:{value:je,label:"mcolumns"}},min:1,max:w,displayUnit:!1,setAttributes:t}),o.a.createElement(h.a,{setAttributes:t,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:C,label:"headingAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(T.Icon,{icon:Object(v.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(T.Icon,{icon:Object(v.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(T.Icon,{icon:Object(v.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),o.a.createElement(j.a,{title:Object(n.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},(()=>{const e=[];for(let t=0;t<w;t++)e.push(Dt(t));return e})(),qt>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{setAttributes:t,label:Object(n.__)("Position","ultimate-addons-for-gutenberg"),data:{value:fe,label:"imagePosition"},options:[{value:"top",label:Object(n.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(n.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"left",label:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(n.__)("Right","ultimate-addons-for-gutenberg")}]}),("left"===fe||"right"===fe)&&o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{setAttributes:t,label:Object(n.__)("Vertical ALignment","ultimate-addons-for-gutenberg"),data:{value:pe,label:"imageAlignment"},options:[{value:"top",label:Object(n.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(n.__)("Middle","ultimate-addons-for-gutenberg")}]}),o.a.createElement(h.a,{setAttributes:t,label:Object(n.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:qe,label:"stack"},options:[{value:"none",label:Object(n.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(n.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(n.__)("Mobile","ultimate-addons-for-gutenberg")}]})),o.a.createElement(h.a,{setAttributes:t,label:Object(n.__)("Style","ultimate-addons-for-gutenberg"),data:{value:me,label:"iconimgStyle"},options:[{value:"normal",label:Object(n.__)("Normal","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(n.__)("Circle","ultimate-addons-for-gutenberg")},{value:"square",label:Object(n.__)("Square","ultimate-addons-for-gutenberg")}]}),o.a.createElement(T.SelectControl,{label:Object(n.__)("Size","ultimate-addons-for-gutenberg"),options:Vt,value:ve,onChange:e=>t({imageSize:e})}),o.a.createElement(c.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:_e,onChange:e=>t({imageWidth:e}),min:0,max:500,unit:{value:$e,label:"imageWidthType"}}))),o.a.createElement(j.a,{title:Object(n.__)("Carousel","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(T.ToggleControl,{label:Object(n.__)("Pause On Hover","ultimate-addons-for-gutenberg"),checked:Oe,onChange:()=>{t({pauseOnHover:!Oe})}}),o.a.createElement(T.ToggleControl,{label:Object(n.__)("Autoplay"),checked:Le,onChange:()=>{t({autoplay:!Le})}}),!0===Le&&o.a.createElement(c.a,{label:Object(n.__)("Autoplay Speed (ms)","ultimate-addons-for-gutenberg"),setAttributes:t,value:Ae,onChange:e=>t({autoplaySpeed:e}),min:100,max:1e4,displayUnit:!1}),o.a.createElement(T.ToggleControl,{label:Object(n.__)("Infinite Loop","ultimate-addons-for-gutenberg"),checked:Se,onChange:()=>{t({infiniteLoop:!Se})}}),o.a.createElement(c.a,{label:Object(n.__)("Transition Speed (ms)","ultimate-addons-for-gutenberg"),setAttributes:t,value:we,onChange:e=>t({transitionSpeed:e}),min:100,max:5e3,displayUnit:!1}),o.a.createElement(h.a,{setAttributes:t,label:Object(n.__)("Show Arrows & Dots","ultimate-addons-for-gutenberg"),data:{value:ke,label:"arrowDots"},options:[{value:"arrows",label:Object(n.__)("Arrows","ultimate-addons-for-gutenberg")},{value:"dots",label:Object(n.__)("Dots","ultimate-addons-for-gutenberg")},{value:"arrows_dots",label:Object(n.__)("Both","ultimate-addons-for-gutenberg")}]}))),o.a.createElement(_.b,_.a.style,o.a.createElement(j.a,{title:Object(n.__)("Name","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(d.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:L||"",onColorChange:e=>t({authorColor:e})}),o.a.createElement(r.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:W,label:"nameLoadGoogleFonts"},fontFamily:{value:R,label:"nameFontFamily"},fontWeight:{value:I,label:"nameFontWeight"},fontStyle:{value:B,label:"nameFontStyle"},fontSizeType:{value:A,label:"nameFontSizeType"},fontSize:{value:z,label:"nameFontSize"},fontSizeMobile:{value:M,label:"nameFontSizeMobile"},fontSizeTablet:{value:x,label:"nameFontSizeTablet"},lineHeightType:{value:H,label:"nameLineHeightType"},lineHeight:{value:N,label:"nameLineHeight"},lineHeightMobile:{value:G,label:"nameLineHeightMobile"},lineHeightTablet:{value:P,label:"nameLineHeightTablet"},transform:{value:ot,label:"nameTransform"},decoration:{value:it,label:"nameDecoration"}}),o.a.createElement(c.a,{label:Object(n.__)("Bottom Margin","ultimate-addons-for-gutenberg"),value:he,onChange:e=>t({nameSpace:e}),min:0,max:50,unit:{value:Ye,label:"nameSpaceType"},setAttributes:t})),o.a.createElement(j.a,{title:Object(n.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(d.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:F||"",onColorChange:e=>t({descColor:e})}),o.a.createElement(r.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:be,label:"descLoadGoogleFonts"},fontFamily:{value:oe,label:"descFontFamily"},fontWeight:{value:ie,label:"descFontWeight"},fontStyle:{value:re,label:"descFontStyle"},fontSizeType:{value:te,label:"descFontSizeType"},fontSize:{value:ae,label:"descFontSize"},fontSizeMobile:{value:le,label:"descFontSizeMobile"},fontSizeTablet:{value:ne,label:"descFontSizeTablet"},lineHeightType:{value:ue,label:"descLineHeightType"},lineHeight:{value:ce,label:"descLineHeight"},lineHeightMobile:{value:ge,label:"descLineHeightMobile"},lineHeightTablet:{value:se,label:"descLineHeightTablet"},transform:{value:nt,label:"descTransform"},decoration:{value:lt,label:"descDecoration"}}),o.a.createElement(c.a,{label:Object(n.__)("Bottom Margin","ultimate-addons-for-gutenberg"),value:de,onChange:e=>t({descSpace:e}),min:0,max:50,unit:{value:Qe,label:"descSpaceType"},setAttributes:t}),o.a.createElement(c.a,{label:Object(n.__)("Column Gap","ultimate-addons-for-gutenberg"),value:Me,onChange:e=>t({columnGap:e}),min:0,max:50,unit:{value:Xe,label:"columnGapType"},setAttributes:t}),o.a.createElement(m.a,O({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:bt,label:"paddingTop"},valueRight:{value:ft,label:"paddingRight"},valueBottom:{value:dt,label:"paddingBottom"},valueLeft:{value:mt,label:"paddingLeft"},valueTopTablet:{value:pt,label:"paddingTopTablet"},valueRightTablet:{value:ht,label:"paddingRightTablet"},valueBottomTablet:{value:vt,label:"paddingBottomTablet"},valueLeftTablet:{value:_t,label:"paddingLeftTablet"},valueTopMobile:{value:yt,label:"paddingTopMobile"},valueRightMobile:{value:Tt,label:"paddingRightMobile"},valueBottomMobile:{value:jt,label:"paddingBottomMobile"},valueLeftMobile:{value:Ot,label:"paddingLeftMobile"},unit:{value:ct,label:"paddingUnit"},mUnit:{value:st,label:"mobilePaddingUnit"},tUnit:{value:gt,label:"tabletPaddingUnit"},deviceType:S,attributes:a,setAttributes:t,link:{value:wt,label:"spacingLink"}}))),o.a.createElement(j.a,{title:Object(n.__)("Company","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(d.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:e=>t({companyColor:e})}),o.a.createElement(r.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:ee,label:"companyLoadGoogleFonts"},fontFamily:{value:$,label:"companyFontFamily"},fontWeight:{value:J,label:"companyFontWeight"},fontStyle:{value:K,label:"companyFontStyle"},fontSizeType:{value:U,label:"companyFontSizeType"},fontSize:{value:V,label:"companyFontSize"},fontSizeMobile:{value:q,label:"companyFontSizeMobile"},fontSizeTablet:{value:D,label:"companyFontSizeTablet"},lineHeightType:{value:X,label:"companyLineHeightType"},lineHeight:{value:Q,label:"companyLineHeight"},lineHeightMobile:{value:Z,label:"companyLineHeightMobile"},lineHeightTablet:{value:Y,label:"companyLineHeightTablet"},transform:{value:rt,label:"companyTransform"},decoration:{value:ut,label:"companyDecoration"}})),o.a.createElement(j.a,{title:Object(n.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(m.a,O({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:kt,label:"imgpaddingTop"},valueRight:{value:Ct,label:"imgpaddingRight"},valueBottom:{value:Et,label:"imgpaddingBottom"},valueLeft:{value:Ft,label:"imgpaddingLeft"},valueTopTablet:{value:Lt,label:"imgpaddingTopTablet"},valueRightTablet:{value:At,label:"imgpaddingRightTablet"},valueBottomTablet:{value:zt,label:"imgpaddingBottomTablet"},valueLeftTablet:{value:xt,label:"imgpaddingLeftTablet"},valueTopMobile:{value:Mt,label:"imgpaddingTopMobile"},valueRightMobile:{value:Rt,label:"imgpaddingRightMobile"},valueBottomMobile:{value:It,label:"imgpaddingBottomMobile"},valueLeftMobile:{value:Bt,label:"imgpaddingLeftMobile"},unit:{value:Ht,label:"imgpaddingUnit"},mUnit:{value:Nt,label:"imgmobilePaddingUnit"},tUnit:{value:Pt,label:"imgtabletPaddingUnit"},deviceType:S,attributes:a,setAttributes:t,link:{value:St,label:"imgspacingLink"}}))),o.a.createElement(j.a,{title:Object(n.__)("Arrow & Dots","ultimate-addons-for-gutenberg"),initialOpen:!1},"dots"!==ke&&o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{label:Object(n.__)("Arrow Size","ultimate-addons-for-gutenberg"),setAttributes:t,value:Ce,onChange:e=>t({arrowSize:e}),min:0,max:50,unit:{value:Je,label:"arrowSizeType"}}),o.a.createElement(c.a,{label:Object(n.__)("Arrow Border Size","ultimate-addons-for-gutenberg"),setAttributes:t,value:Ee,onChange:e=>t({arrowBorderSize:e}),min:0,max:50,displayUnit:!1}),o.a.createElement(c.a,{label:Object(n.__)("Arrow Border Radius","ultimate-addons-for-gutenberg"),setAttributes:t,value:Fe,onChange:e=>t({arrowBorderRadius:e}),min:0,max:50,displayUnit:!1})),o.a.createElement(c.a,{label:Object(n.__)("Gap Between Content & Dots","ultimate-addons-for-gutenberg"),value:xe,setAttributes:t,onChange:e=>t({rowGap:e}),min:0,max:50,unit:{value:Ke,label:"rowGapType"}}),o.a.createElement(d.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ze||"",onColorChange:e=>t({arrowColor:e})})),o.a.createElement(j.a,{title:Object(n.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.a,{setAttributes:t,borderStyle:{value:We,label:"borderStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Ue,label:"borderWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Ve,label:"borderRadius",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:De,label:"borderColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Ze,label:"borderHoverColor",title:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),o.a.createElement(j.a,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(g.a,O({setAttributes:t,backgroundGradient:{value:at,label:"gradientValue"},backgroundImageColor:{value:Ge,label:"backgroundImageColor"},overlayType:{value:et,label:"overlayType"},backgroundSize:{value:Ne,label:"backgroundSize"},backgroundRepeat:{value:Pe,label:"backgroundRepeat"},backgroundAttachment:{value:tt,label:"backgroundAttachment"},backgroundPosition:{value:He,label:"backgroundPosition"},backgroundImage:{value:Be,label:"backgroundImage"},backgroundColor:{value:Ie,label:"backgroundColor"},backgroundType:{value:Re,label:"backgroundType"},backgroundVideoType:{value:!1}},e)))),o.a.createElement(_.b,O({},_.a.advance,{parentProps:e})))),Gt,Wt,Ut)};t.default=o.a.memo(S)}}]);