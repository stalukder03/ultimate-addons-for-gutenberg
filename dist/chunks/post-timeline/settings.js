(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{124:function(e,t,a){"use strict";var n=a(10),o=a(25),l=a.n(o),i=a(125),r=a.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===m)var m=[];var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(i,e);var t,a,n,o,l=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(n);if(o){var a=h(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return f(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=l.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){m.includes(e)||m.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){m.includes(t.props.config.google.families[0])||(r.a.load(s(s({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=i,(a=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var a=this.props,n=a.onStatus,o=a.config;t.status!==this.state.status&&n(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&b(t.prototype,a),i}(n.Component);p.propTypes={config:l.a.object.isRequired,children:l.a.element,onStatus:l.a.func.isRequired},p.defaultProps={onStatus:function(){}},t.a=p},125:function(e,t,a){var n;!function(){function o(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function s(e,t,a,n){if(t=e.c.createElement(t),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?t.style.cssText=a[o]:t.setAttribute(o,a[o]));return n&&t.appendChild(e.c.createTextNode(n)),t}function g(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,i=0;i<n.length;i+=1)if(t[o]===n[i]){l=!0;break}l||n.push(t[o])}for(t=[],o=0;o<n.length;o+=1){for(l=!1,i=0;i<a.length;i+=1)if(n[o]===a[i]){l=!0;break}l||t.push(n[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var a=e.className.split(/\s+/),n=0,o=a.length;n<o;n++)if(a[n]==t)return!0;return!1}function h(e,t,a){function n(){r&&o&&l&&(r(i),r=null)}t=s(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,i=null,r=a||null;c?(t.onload=function(){o=!0,n()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),n()}):setTimeout((function(){o=!0,n()}),0),g(e,"head",t)}function m(e,t,a,n){var o=e.c.getElementsByTagName("head")[0];if(o){var l=s(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function C(e){this.a=e||"-"}function O(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function S(e){return e.a+e.f}function F(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function w(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function E(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new C("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function T(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),d(e.f,a,n)}H(e,"inactive")}function H(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,S(a)):e.h[t]())}function P(){this.c={}}function k(e,t){this.c=e,this.f=t,this.a=s(this.c,"span",{"aria-hidden":"true"},this.f)}function z(e){g(e.c,"body",e.a)}function L(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+F(e)+";font-weight:"+e.f+"00;"}function x(e,t,a,n,o,l){this.g=e,this.j=t,this.a=n,this.c=a,this.f=o||3e3,this.h=l||void 0}function B(e,t,a,n,o,l,i){this.v=e,this.B=t,this.c=a,this.a=n,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new k(this.c,this.s),this.h=new k(this.c,this.s),this.j=new k(this.c,this.s),this.m=new k(this.c,this.s),e=L(e=new O(this.a.c+",serif",S(this.a))),this.g.a.style.cssText=e,e=L(e=new O(this.a.c+",sans-serif",S(this.a))),this.h.a.style.cssText=e,e=L(e=new O("serif",S(this.a))),this.j.a.style.cssText=e,e=L(e=new O("sans-serif",S(this.a))),this.m.a.style.cssText=e,z(this.g),z(this.h),z(this.j),z(this.m)}C.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},x.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,o){!function l(){r()-a>=t.f?o():e.fonts.load(function(e){return F(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,a){o=setTimeout(a,t.f)}));Promise.race([l,n]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var R={D:"serif",C:"sans-serif"},N=null;function A(){if(null===N){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return N}function M(e,t,a){for(var n in R)if(R.hasOwnProperty(n)&&t===e.f[R[n]]&&a===e.f[R[n]])return!0;return!1}function I(e,t){setTimeout(i((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function Y(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}B.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(a=n===t.f.serif&&o===t.f["sans-serif"])||(a=A()&&M(t,n,o)),a?r()-t.A>=t.w?A()&&M(t,n,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?I(t,t.v):I(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):I(t,t.v)}(this)};var D=null;function W(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),H(e,"active")):T(e.a))}function G(e){this.j=e,this.a=new P,this.h=0,this.f=this.g=!0}function q(e,t,a,n,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=n||{};if(0===a.length&&l)T(t.a);else{t.f+=a.length,l&&(t.j=l);var u,c=[];for(u=0;u<a.length;u++){var s=a[u],g=r[s.c],b=t.a,f=s;if(b.g&&d(b.f,[b.a.c("wf",f.c,S(f).toString(),"loading")]),H(b,"fontloading",f),b=null,null===D)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=f?42<parseInt(f[1],10):!h}else D=!1;b=D?new x(i(t.g,t),i(t.h,t),t.c,s,t.s,g):new B(i(t.g,t),i(t.h,t),t.c,s,t.s,e,g),c.push(b)}for(u=0;u<c.length;u++)c[u].start()}}),0)}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e,this.a=t}function Q(e,t){this.c=e||U,this.a=[],this.f=[],this.g=t||""}Y.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,S(e).toString(),"active")],[t.a.c("wf",e.c,S(e).toString(),"loading"),t.a.c("wf",e.c,S(e).toString(),"inactive")]),H(t,"fontactive",e),this.m=!0,W(this)},Y.prototype.h=function(e){var t=this.a;if(t.g){var a=f(t.f,t.a.c("wf",e.c,S(e).toString(),"active")),n=[],o=[t.a.c("wf",e.c,S(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,S(e).toString(),"inactive")),d(t.f,n,o)}H(t,"fontinactive",e),W(this)},G.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],o=a.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),H(e,"loading")}(t),n=function(e,t,a){var n,o=[];for(n in t)if(t.hasOwnProperty(n)){var l=e.c[n];l&&o.push(l(t[n],a))}return o}(e.a,a,e.c);var l=new Y(e.c,t,o);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){q(e,l,t,a,n)}))}(this,new E(this.c,e),e)},$.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(o["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(o["__mti_fntLst"+a]){var n,l=o["__mti_fntLst"+a](),i=[];if(l)for(var r=0;r<l.length;r++){var u=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,i.push(new O(u,n))):i.push(new O(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},J.prototype.load=function(e){var t,a,n=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new p;for(t=0,a=n.length;t<a;t++)h(this.c,n[t],v(i));var r=[];for(t=0,a=o.length;t<a;t++)if((n=o[t].split(":"))[1])for(var u=n[1].split(","),c=0;c<u.length;c+=1)r.push(new O(n[0],u[c]));else r.push(new O(n[0]));_(i,(function(){e(r,l)}))};var U="https://fonts.googleapis.com/css";function V(e){this.f=e,this.a=[],this.c={}}var K={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},X={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,n=new Q(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var o=t[n].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(n,o);var l=new V(o);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),o=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var i;if(i=[],r=n[1])for(var r,u=(r=r.split(",")).length,c=0;c<u;c++){var s;if((s=r[c]).match(/^[\w-]+$/))if(null==(g=ee.exec(s.toLowerCase())))s="";else{if(s=null==(s=g[2])||""==s?"n":Z[s],null==(g=g[1])||""==g)g="4";else var g=X[g]||(isNaN(g)?"4":g.substr(0,1));s=[s,g].join("")}else s="";s&&i.push(s)}0<i.length&&(l=i),3==n.length&&(i=[],0<(n=(n=n[2])?n.split(","):i).length&&(n=K[n[0]])&&(e.c[o]=n))}for(e.c[o]||(n=K[o])&&(e.c[o]=n),n=0;n<l.length;n+=1)e.a.push(new O(o,l[n]))}}(l),h(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),_(t,(function(){e(l.a,l.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],o=0;o<t.length;o+=2)for(var l=t[o],i=t[o+1],r=0;r<i.length;r++)n.push(new O(l,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var o=0,l=a.fonts.length;o<l;++o){var i=a.fonts[o];n.a.push(new O(i.name,w("font-weight:"+i.weight+";font-style:"+i.style)))}e(n.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new G(window);le.a.c.custom=function(e,t){return new J(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new $(t,e)},le.a.c.typekit=function(e,t){return new ne(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(n=function(){return ie}.call(t,a,t,e))||(e.exports=n)}()},450:function(e,t,a){"use strict";a.r(t);var n=a(57),o=a(126),l=a.n(o),i=a(12),r=a(1),u=a.n(r),c=a(8),s=a(17),g=a(124),b=a(2),d=a(15),f=a(5),h=a(4),m=Object.keys(n),p=function(e){var t,a,n,o,p,v=e=e.parentProps,_=v.attributes,y=v.categoriesList,C=v.setAttributes,O=v.taxonomyList,j=_.headingColor,S=_.subHeadingColor,F=_.backgroundColor,w=_.separatorColor,E=_.separatorFillColor,T=_.separatorBg,H=_.separatorBorder,P=_.borderFocus,k=_.headingTag,z=_.headFontSizeType,L=_.headFontSize,x=_.headFontSizeTablet,B=_.headFontSizeMobile,R=_.headFontFamily,N=_.headFontWeight,A=_.headFontSubset,M=_.headLineHeightType,I=_.headLineHeight,Y=_.headLineHeightTablet,D=_.headLineHeightMobile,W=_.headLoadGoogleFonts,G=_.timelinAlignment,q=_.arrowlinAlignment,$=_.subHeadFontSizeType,J=_.subHeadFontSize,Q=_.subHeadFontSizeTablet,U=_.subHeadFontSizeMobile,V=_.subHeadFontFamily,K=_.subHeadFontWeight,X=_.subHeadFontSubset,Z=_.subHeadLineHeightType,ee=_.subHeadLineHeight,te=_.subHeadLineHeightTablet,ae=_.subHeadLineHeightMobile,ne=_.subHeadLoadGoogleFonts,oe=_.verticalSpace,le=_.horizontalSpace,ie=_.headSpace,re=_.separatorwidth,ue=_.borderwidth,ce=_.connectorBgsize,se=_.authorSpace,ge=_.contentSpace,be=_.authorColor,de=_.authorFontSizeType,fe=_.authorFontSize,he=_.authorFontSizeTablet,me=_.authorFontSizeMobile,pe=_.authorFontFamily,ve=_.authorFontWeight,_e=_.authorFontSubset,ye=_.authorLineHeightType,Ce=_.authorLineHeight,Oe=_.authorLineHeightTablet,je=_.authorLineHeightMobile,Se=_.authorLoadGoogleFonts,Fe=_.dateBottomspace,we=_.displayPostDate,Ee=_.displayPostExcerpt,Te=_.displayPostAuthor,He=_.displayPostImage,Pe=_.displayPostLink,ke=_.align,ze=_.order,Le=_.orderBy,xe=_.categories,Be=_.postsToShow,Re=_.imageSize,Ne=_.readMoreText,Ae=_.ctaBackground,Me=_.icon,Ie=_.iconColor,Ye=_.dateColor,De=_.ctaColor,We=_.dateFontsizeType,Ge=_.dateFontsize,qe=_.dateFontsizeTablet,$e=_.dateFontsizeMobile,Je=_.dateFontFamily,Qe=_.dateFontWeight,Ue=_.dateFontSubset,Ve=_.dateLineHeightType,Ke=_.dateLineHeight,Xe=_.dateLineHeightTablet,Ze=_.dateLineHeightMobile,et=_.dateLoadGoogleFonts,tt=_.ctaFontSizeType,at=_.ctaFontSize,nt=_.ctaFontSizeTablet,ot=_.ctaFontSizeMobile,lt=_.ctaFontFamily,it=_.ctaFontWeight,rt=_.ctaFontSubset,ut=_.ctaLineHeightType,ct=_.ctaLineHeight,st=_.ctaLineHeightTablet,gt=_.ctaLineHeightMobile,bt=_.ctaLoadGoogleFonts,dt=_.iconSize,ft=_.exerptLength,ht=_.borderRadius,mt=_.bgPadding,pt=_.contentPadding,vt=_.iconFocus,_t=_.iconBgFocus,yt=_.stack,Ct=_.linkTarget,Ot=_.postType,jt=_.taxonomyType,St=_.dateFormat,Ft=_.excludeCurrentPost,wt=[],Et=[{value:"",label:Object(b.__)("All","ultimate-addons-for-gutenberg")}];if(""!=O&&Object.keys(O).map((function(e,t){return wt.push({value:O[e].name,label:O[e].label})})),""!=y&&Object.keys(y).map((function(e,t){return Et.push({value:y[e].id,label:y[e].name})})),1==W){var Tt={google:{families:[R+(N?":"+N:"")]}};t=u.a.createElement(g.a,{config:Tt})}if(1==ne){var Ht={google:{families:[V+(K?":"+K:"")]}};a=u.a.createElement(g.a,{config:Ht})}if(1==et){var Pt={google:{families:[Je+(Qe?":"+Qe:"")]}};n=u.a.createElement(g.a,{config:Pt})}if(1==Se){var kt={google:{families:[pe+(ve?":"+ve:"")]}};o=u.a.createElement(g.a,{config:kt})}if(1==bt){var zt={google:{families:[lt+(it?":"+it:"")]}};p=u.a.createElement(g.a,{config:zt})}var Lt,xt,Bt=new Date,Rt={icons:m,value:Me,onChange:function(t){e.setAttributes({icon:t})},isMulti:!1,renderFunc:i.a,noSelectedPlaceholder:Object(b.__)("Select Icon","ultimate-addons-for-gutenberg")};return Object(b.__)("px","ultimate-addons-for-gutenberg"),Object(b.__)("em","ultimate-addons-for-gutenberg"),u.a.createElement(r.Suspense,{fallback:Object(c.a)()},u.a.createElement(h.BlockControls,null,u.a.createElement(h.BlockAlignmentToolbar,{value:ke,onChange:function(e){C({align:e})},controls:["center","left","right"]})),u.a.createElement(h.InspectorControls,null,u.a.createElement(f.PanelBody,{title:Object(b.__)("Query","ultimate-addons-for-gutenberg"),initialOpen:!0},u.a.createElement(f.SelectControl,{label:Object(b.__)("Post Type","ultimate-addons-for-gutenberg"),value:Ot,onChange:function(t){return function(t){var a=e.setAttributes;a({postType:t}),a({categories:""})}(t)},options:uagb_blocks_info.post_types}),u.a.createElement("hr",{className:"uagb-editor__separator"}),""!=O&&u.a.createElement(f.SelectControl,{label:Object(b.__)("Taxonomy","ultimate-addons-for-gutenberg"),value:jt,onChange:function(t){return function(t){var a=e.setAttributes;a({taxonomyType:t}),a({categories:""})}(t)},options:wt}),""!=y&&u.a.createElement(u.a.Fragment,null,u.a.createElement(f.SelectControl,{label:O[jt].label,value:xe,onChange:function(e){return C({categories:e})},options:Et}),u.a.createElement("hr",{className:"uagb-editor__separator"})),u.a.createElement(f.ToggleControl,{label:Object(b.__)("Exclude Current Post","ultimate-addons-for-gutenberg"),checked:Ft,onChange:function(e){return C({excludeCurrentPost:!Ft})}}),u.a.createElement(f.QueryControls,{order:ze,orderBy:Le,numberOfItems:Be,onNumberOfItemsChange:function(e){return C({postsToShow:e})}}),u.a.createElement(f.SelectControl,{label:Object(b.__)("Order By","ultimate-addons-for-gutenberg"),value:Le,onChange:function(e){return C({orderBy:e})},options:[{value:"date",label:Object(b.__)("Date","ultimate-addons-for-gutenberg")},{value:"title",label:Object(b.__)("Title","ultimate-addons-for-gutenberg")},{value:"rand",label:Object(b.__)("Random","ultimate-addons-for-gutenberg")},{value:"menu_order",label:Object(b.__)("Menu Order","ultimate-addons-for-gutenberg")}]}),u.a.createElement(f.SelectControl,{label:Object(b.__)("Order","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return C({order:e})},options:[{value:"desc",label:Object(b.__)("Descending","ultimate-addons-for-gutenberg")},{value:"asc",label:Object(b.__)("Ascending","ultimate-addons-for-gutenberg")}]})),u.a.createElement(f.PanelBody,{title:Object(b.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(f.SelectControl,{label:Object(b.__)("Orientation","ultimate-addons-for-gutenberg"),value:G,onChange:function(e){return C({timelinAlignment:e})},options:[{value:"left",label:Object(b.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(b.__)("Right","ultimate-addons-for-gutenberg")},{value:"center",label:Object(b.__)("Center","ultimate-addons-for-gutenberg")}]}),u.a.createElement(f.SelectControl,{label:Object(b.__)("Arrow Alignment","ultimate-addons-for-gutenberg"),value:q,onChange:function(e){return C({arrowlinAlignment:e})},options:[{value:"top",label:Object(b.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(b.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"center",label:Object(b.__)("Center","ultimate-addons-for-gutenberg")}]}),u.a.createElement(f.SelectControl,{label:Object(b.__)("Stack on","ultimate-addons-for-gutenberg"),value:yt,options:[{value:"none",label:Object(b.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(b.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(b.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(b.__)("Note: Choose on what breakpoint the Post Timeline will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return C({stack:e})}})),u.a.createElement(f.PanelBody,{title:Object(b.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(f.ToggleControl,{label:Object(b.__)("Display Featured Image","ultimate-addons-for-gutenberg"),checked:He,onChange:function(e){return C({displayPostImage:!He})}}),He&&u.a.createElement(f.SelectControl,{label:Object(b.__)("Featured Image Style","ultimate-addons-for-gutenberg"),options:uagb_blocks_info.image_sizes,value:Re,onChange:function(t){return e.setAttributes({imageSize:t})}})),u.a.createElement(f.PanelBody,{title:Object(b.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(f.ToggleControl,{label:Object(b.__)("Display Post Author","ultimate-addons-for-gutenberg"),checked:Te,onChange:function(e){return C({displayPostAuthor:!Te})}}),u.a.createElement(f.ToggleControl,{label:Object(b.__)("Display Post Date","ultimate-addons-for-gutenberg"),checked:we,onChange:function(e){return C({displayPostDate:!we})}}),we&&u.a.createElement(f.SelectControl,{label:Object(b.__)("Date Format","ultimate-addons-for-gutenberg"),value:St,onChange:function(e){return C({dateFormat:e})},options:[{value:"M j, Y",label:Object(d.dateI18n)("M j, Y",Bt)},{value:"F j, Y",label:Object(d.dateI18n)("F j, Y",Bt)},{value:"m/d/Y",label:Object(d.dateI18n)("m/d/Y",Bt)},{value:"m-d-Y",label:Object(d.dateI18n)("m-d-Y",Bt)},{value:"m.d.Y",label:Object(d.dateI18n)("m.d.Y",Bt)},{value:"d M Y",label:Object(d.dateI18n)("d M Y",Bt)},{value:"d F Y",label:Object(d.dateI18n)("d F Y",Bt)},{value:"d-m-Y",label:Object(d.dateI18n)("d-m-Y",Bt)},{value:"d.m.Y",label:Object(d.dateI18n)("d.m.Y",Bt)},{value:"d/m/Y",label:Object(d.dateI18n)("d/m/Y",Bt)},{value:"Y-m-d",label:Object(d.dateI18n)("Y-m-d",Bt)},{value:"Y.m.d",label:Object(d.dateI18n)("Y.m.d",Bt)},{value:"Y/m/d",label:Object(d.dateI18n)("Y/m/d",Bt)},{value:"M, Y",label:Object(d.dateI18n)("M, Y",Bt)},{value:"M Y",label:Object(d.dateI18n)("M Y",Bt)},{value:"F, Y",label:Object(d.dateI18n)("F, Y",Bt)},{value:"F Y",label:Object(d.dateI18n)("F Y",Bt)}]}),u.a.createElement(f.ToggleControl,{label:Object(b.__)("Display Post Excerpt","ultimate-addons-for-gutenberg"),checked:Ee,onChange:function(e){return C({displayPostExcerpt:!Ee})}}),Ee&&u.a.createElement(f.RangeControl,{label:Object(b.__)("Excerpt Length","ultimate-addons-for-gutenberg"),value:ft,onChange:function(e){return C({exerptLength:e})},min:1,max:50,allowReset:!0}),u.a.createElement(f.ToggleControl,{label:Object(b.__)("Display Continue Reading Link","ultimate-addons-for-gutenberg"),checked:Pe,onChange:function(e){return C({displayPostLink:!Pe})}}),Pe&&u.a.createElement(u.a.Fragment,null,u.a.createElement(f.TextControl,{label:Object(b.__)("CTA Text","ultimate-addons-for-gutenberg"),value:Ne,onChange:function(e){return C({readMoreText:e})}})),u.a.createElement(f.ToggleControl,{label:Object(b.__)("Open links in New Tab","ultimate-addons-for-gutenberg"),checked:Ct,onChange:function(e){return C({linkTarget:!Ct})}})),u.a.createElement(f.PanelBody,{title:Object(b.__)("Timeline Item","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement("h2",null,Object(b.__)("Heading","ultimate-addons-for-gutenberg")),u.a.createElement(f.SelectControl,{label:Object(b.__)("Heading Tag","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return C({headingTag:e})},options:[{value:"h1",label:Object(b.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(b.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(b.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(b.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(b.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(b.__)("H6","ultimate-addons-for-gutenberg")},{value:"p",label:Object(b.__)("P","ultimate-addons-for-gutenberg")},{value:"span",label:Object(b.__)("SPAN","ultimate-addons-for-gutenberg")}]}),u.a.createElement(s.default,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:C,loadGoogleFonts:{value:W,label:"headLoadGoogleFonts"},fontFamily:{value:R,label:"headFontFamily"},fontWeight:{value:N,label:"headFontWeight"},fontSubset:{value:A,label:"headFontSubset"},fontSizeType:{value:z,label:"headFontSizeType"},fontSize:{value:L,label:"headFontSize"},fontSizeMobile:{value:B,label:"headFontSizeMobile"},fontSizeTablet:{value:x,label:"headFontSizeTablet"},lineHeightType:{value:M,label:"headLineHeightType"},lineHeight:{value:I,label:"headLineHeight"},lineHeightMobile:{value:D,label:"headLineHeightMobile"},lineHeightTablet:{value:Y,label:"headLineHeightTablet"}}),Ee&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(b.__)("Content","ultimate-addons-for-gutenberg")),u.a.createElement(s.default,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:C,loadGoogleFonts:{value:ne,label:"subHeadLoadGoogleFonts"},fontFamily:{value:V,label:"subHeadFontFamily"},fontWeight:{value:K,label:"subHeadFontWeight"},fontSubset:{value:X,label:"subHeadFontSubset"},fontSizeType:{value:$,label:"subHeadFontSizeType"},fontSize:{value:J,label:"subHeadFontSize"},fontSizeMobile:{value:U,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:Q,label:"subHeadFontSizeTablet"},lineHeightType:{value:Z,label:"subHeadLineHeightType"},lineHeight:{value:ee,label:"subHeadLineHeight"},lineHeightMobile:{value:ae,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:te,label:"subHeadLineHeightTablet"}})),we&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(b.__)("Date","ultimate-addons-for-gutenberg")),u.a.createElement(s.default,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:C,loadGoogleFonts:{value:et,label:"dateLoadGoogleFonts"},fontFamily:{value:Je,label:"dateFontFamily"},fontWeight:{value:Qe,label:"dateFontWeight"},fontSubset:{value:Ue,label:"dateFontSubset"},fontSizeType:{value:We,label:"dateFontsizeType"},fontSize:{value:Ge,label:"dateFontsize"},fontSizeMobile:{value:$e,label:"dateFontsizeMobile"},fontSizeTablet:{value:qe,label:"dateFontsizeTablet"},lineHeightType:{value:Ve,label:"dateLineHeightType"},lineHeight:{value:Ke,label:"dateLineHeight"},lineHeightMobile:{value:Ze,label:"dateLineHeightMobile"},lineHeightTablet:{value:Xe,label:"dateLineHeightTablet"}})),Te&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(b.__)("Author","ultimate-addons-for-gutenberg")),u.a.createElement(s.default,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:C,loadGoogleFonts:{value:Se,label:"authorLoadGoogleFonts"},fontFamily:{value:pe,label:"authorFontFamily"},fontWeight:{value:ve,label:"authorFontWeight"},fontSubset:{value:_e,label:"authorFontSubset"},fontSizeType:{value:de,label:"authorFontSizeType"},fontSize:{value:fe,label:"authorFontSize"},fontSizeMobile:{value:me,label:"authorFontSizeMobile"},fontSizeTablet:{value:he,label:"authorFontSizeTablet"},lineHeightType:{value:ye,label:"authorLineHeightType"},lineHeight:{value:Ce,label:"authorLineHeight"},lineHeightMobile:{value:je,label:"authorLineHeightMobile"},lineHeightTablet:{value:Oe,label:"authorLineHeightTablet"}})),Pe&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(b.__)("CTA","ultimate-addons-for-gutenberg")),u.a.createElement(s.default,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:C,loadGoogleFonts:{value:bt,label:"ctaLoadGoogleFonts"},fontFamily:{value:lt,label:"ctaFontFamily"},fontWeight:{value:it,label:"ctaFontWeight"},fontSubset:{value:rt,label:"ctaFontSubset"},fontSizeType:{value:tt,label:"ctaFontSizeType"},fontSize:{value:at,label:"ctaFontSize"},fontSizeMobile:{value:ot,label:"ctaFontSizeMobile"},fontSizeTablet:{value:nt,label:"ctaFontSizeTablet"},lineHeightType:{value:ut,label:"ctaLineHeightType"},lineHeight:{value:ct,label:"ctaLineHeight"},lineHeightMobile:{value:gt,label:"ctaLineHeightMobile"},lineHeightTablet:{value:st,label:"ctaLineHeightTablet"}})),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(f.RangeControl,{label:Object(b.__)("Rounded Corners","ultimate-addons-for-gutenberg"),value:ht,onChange:function(e){return C({borderRadius:e})},min:0,initialPosition:10,max:50,allowReset:!0})),u.a.createElement(f.PanelBody,{title:Object(b.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(l.a,Rt),u.a.createElement(f.RangeControl,{label:Object(b.__)("Icon Size","ultimate-addons-for-gutenberg"),value:dt,onChange:function(e){return C({iconSize:e})},min:0,max:30,allowReset:!0}),u.a.createElement(f.RangeControl,{label:Object(b.__)("Icon Background Size","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return C({connectorBgsize:e})},min:25,max:90,allowReset:!0}),u.a.createElement(f.RangeControl,{label:Object(b.__)("Border Width","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return C({borderwidth:e})},min:1,max:10,allowReset:!0}),u.a.createElement(f.RangeControl,{label:Object(b.__)("Connector Width","ultimate-addons-for-gutenberg"),value:re,onChange:function(e){return C({separatorwidth:e})},min:1,max:10,allowReset:!0})),(Lt=u.a.createElement(h.PanelColorSettings,{title:Object(b.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,colorSettings:[{value:w,onChange:function(e){return C({separatorColor:e})},label:Object(b.__)("Line Color","ultimate-addons-for-gutenberg")},{value:Ie,onChange:function(e){return C({iconColor:e})},label:Object(b.__)("Icon Color","ultimate-addons-for-gutenberg")},{value:T,onChange:function(e){return C({separatorBg:e})},label:Object(b.__)("Background Color","ultimate-addons-for-gutenberg")},{value:H,onChange:function(e){return C({separatorBorder:e})},label:Object(b.__)("Border Color","ultimate-addons-for-gutenberg")}]}),xt=u.a.createElement(h.PanelColorSettings,{title:Object(b.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,colorSettings:[{value:E,onChange:function(e){return C({separatorFillColor:e})},label:Object(b.__)("Line Color","ultimate-addons-for-gutenberg")},{value:vt,onChange:function(e){return C({iconFocus:e})},label:Object(b.__)("Icon Color","ultimate-addons-for-gutenberg")},{value:_t,onChange:function(e){return C({iconBgFocus:e})},label:Object(b.__)("Background Color","ultimate-addons-for-gutenberg")},{value:P,onChange:function(e){return C({borderFocus:e})},label:Object(b.__)("Border Color","ultimate-addons-for-gutenberg")}]}),u.a.createElement(f.PanelBody,{title:Object(b.__)("Connector Colors","ultimate-addons-for-gutenberg"),initialOpen:!0},u.a.createElement(f.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(b.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"focus",title:Object(b.__)("Focus","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="focus"===e.name?xt:Lt,u.a.createElement("div",null,t)})))),u.a.createElement(h.PanelColorSettings,{title:Object(b.__)("Color","ultimate-addons-for-gutenberg"),initialOpen:!1,colorSettings:[{value:F,onChange:function(e){return C({backgroundColor:e})},label:Object(b.__)("Background Color","ultimate-addons-for-gutenberg")}]},we&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Date Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ye}}))),u.a.createElement(h.ColorPalette,{value:Ye,onChange:function(e){return C({dateColor:e})},allowReset:!0})),u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Heading Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:j}}))),u.a.createElement(h.ColorPalette,{value:j,onChange:function(e){return C({headingColor:e})},allowReset:!0})),Te&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Author Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:be}}))),u.a.createElement(h.ColorPalette,{value:be,onChange:function(e){return C({authorColor:e})},allowReset:!0})),Ee&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Content Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:S}}))),u.a.createElement(h.ColorPalette,{value:S,onChange:function(e){return C({subHeadingColor:e})},allowReset:!0})),Pe&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("CTA Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:De}}))),u.a.createElement(h.ColorPalette,{value:De,onChange:function(e){return C({ctaColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("CTA Background Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ae}}))),u.a.createElement(h.ColorPalette,{value:Ae,onChange:function(e){return C({ctaBackground:e})},allowReset:!0}))),u.a.createElement(f.PanelBody,{title:Object(b.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(f.RangeControl,{label:Object(b.__)("Block Padding","ultimate-addons-for-gutenberg"),value:mt,onChange:function(e){return C({bgPadding:e})},min:0,initialPosition:10,max:50,allowReset:!0}),u.a.createElement(f.RangeControl,{label:Object(b.__)("Content Padding","ultimate-addons-for-gutenberg"),value:pt,onChange:function(e){return C({contentPadding:e})},min:0,initialPosition:10,max:50,allowReset:!0}),u.a.createElement(f.RangeControl,{label:Object(b.__)("Horizontal Space","ultimate-addons-for-gutenberg"),value:le,onChange:function(e){return C({horizontalSpace:e})},min:0,max:50,initialPosition:10,allowReset:!0}),u.a.createElement(f.RangeControl,{label:Object(b.__)("Vertical Space","ultimate-addons-for-gutenberg"),value:oe,onChange:function(e){return C({verticalSpace:e})},min:0,max:100,initialPosition:10,allowReset:!0}),u.a.createElement(f.RangeControl,{label:Object(b.__)("Heading Bottom Spacing","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return C({headSpace:e})},min:0,max:50,initialPosition:10,allowReset:!0}),Te&&u.a.createElement(f.RangeControl,{label:Object(b.__)("Author Bottom Spacing","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return C({authorSpace:e})},min:0,max:50,initialPosition:10,allowReset:!0}),Ee&&Pe&&u.a.createElement(f.RangeControl,{label:Object(b.__)("Content Bottom Spacing","ultimate-addons-for-gutenberg"),value:ge,onChange:function(e){return C({contentSpace:e})},min:0,max:50,initialPosition:10,allowReset:!0}),we&&"center"!==G&&u.a.createElement(f.RangeControl,{label:Object(b.__)("Date Bottom Spacing","ultimate-addons-for-gutenberg"),value:Fe,onChange:function(e){return C({dateBottomspace:e})},min:0,max:50,initialPosition:10,allowReset:!0}))),t,a,n,o,p)};t.default=u.a.memo(p)}}]);