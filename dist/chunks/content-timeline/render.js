(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[20],{343:function(e,t,n){"use strict";var a=n(17),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,'/*\r\n  Content Timeline.\r\n*/\n#wpwrap .edit-post-visual-editor .block-editor-block-list__block[data-type="uagb/content-timeline"] {\n  padding: 15px; }\n',""]),t.a=r},614:function(e,t,n){"use strict";n.r(t);var a,r=n(4),i=n.n(r),o=n(38),l=n(1),c=n.n(l),u=n(5),s=n(16),m=n.n(s),d=n(343),b=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=d.a.locals||{},f.use=function(){return b++||(a=m()(d.a,p)),f},f.unuse=function(){b>0&&!--b&&(a(),a=null)};var g=f;function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var y=["uagb/content-timeline-child"],v=function(e){Object(l.useLayoutEffect)((function(){return g.use(),function(){g.unuse()}}),[]);var t,n=e=e.parentProps,a=n.className,r=n.deviceType,s=n.attributes,m=s.tm_content,d=s.timelineItem,b=Object(l.useMemo)((function(){for(var e=[],t=0;t<d;t++)e.push(["uagb/content-timeline-child",m[t]]);return e}),[d,m]);return c.a.createElement("div",{className:i.a.apply(void 0,[a,"uagb-timeline__outer-wrap","uagb-editor-preview-mode-".concat(r.toLowerCase()),"uagb-block-".concat(e.clientId),"uagb-timeline__content-wrap"].concat((t=Object(o.a)(e.attributes),function(e){if(Array.isArray(e))return _(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return _(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())))},c.a.createElement("div",{className:"uagb-timeline__main"},c.a.createElement("div",{className:"uagb-timeline__days"},c.a.createElement(u.InnerBlocks,{template:b,templateLock:!1,allowedBlocks:y})),c.a.createElement("div",{className:"uagb-timeline__line"},c.a.createElement("div",{className:"uagb-timeline__line__inner"}))))};t.default=c.a.memo(v)}}]);