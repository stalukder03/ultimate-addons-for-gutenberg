(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[61],{301:function(e,t,a){"use strict";var n=a(15),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,".uagb-step-link-all {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  z-index: 3;\n  box-shadow: none;\n  text-decoration: none;\n  color: inherit; }\n",""]),t.a=o},546:function(e,t,a){"use strict";a.r(t);var n,o=a(4),r=a.n(o),i=a(0),l=a.n(i),s=a(1),c=a(14),u=a.n(c),g=a(301),m=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=g.a.locals||{},d.use=function(){return m++||(n=u()(g.a,p)),d},d.unuse=function(){m>0&&!--m&&(n(),n=null)};var b=d,h=a(5),f=a(6),w=a(11);const v=e=>{Object(i.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]),e=e.parentProps;const t=Object(w.a)(),{attributes:a,setAttributes:n,mergeBlocks:o,insertBlocksAfter:c,onReplace:u}=e,{block_id:g,name:m,description:p,url:d,urlType:v,image:_,imageSize:k,urlText:N,urlTarget:E,imgPosition:x}=a;let y="";null!=_&&""!==_&&(y=_.url);let T="";if(""!==y){const e=_.sizes;T=void 0!==e&&void 0!==e[k]?e[k].url:y}let j="_self";E&&(j="_blank");const O=l.a.createElement("img",{className:"uagb-how-to-step-image",src:T,alt:_.alt}),S=l.a.createElement("div",{className:"uagb-step-content-wrap"},l.a.createElement(h.RichText,{tagName:"div",className:"uagb-how-to-step-name",placeholder:Object(s.__)("Name","ultimate-addons-for-gutenberg"),value:m,onChange:e=>n({name:e}),multiline:!1}),l.a.createElement(h.RichText,{tagName:"p",value:p,placeholder:Object(s.__)("Write a Description"),className:"uagb-how-to-step-description",onChange:e=>n({description:e}),onMerge:o,onSplit:c?function(e,t){n({description:e});for(var a=arguments.length,o=new Array(a>2?a-2:0),r=2;r<a;r++)o[r-2]=arguments[r];c([...o,Object(f.createBlock)("core/paragraph",{description:t})])}:void 0,onRemove:()=>u([])}),"text"===v&&l.a.createElement("a",{href:d,target:j,className:"uagb-step-link"},l.a.createElement("span",{className:"uagb-step-link-text"},N)));return l.a.createElement("div",{className:r()("uagb-how-to-step-wrap","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+g)},"all"===v&&l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{className:"uagb-step-link","aria-label":"Step Link",rel:"noopener noreferrer",target:j}),l.a.createElement("div",{className:"uagb-step-image-content-wrap uag-image-position-"+x},T&&O,S)),"text"===v&&l.a.createElement("div",{className:"uagb-step-image-content-wrap uag-image-position-"+x},T&&O,S))};t.default=l.a.memo(v)}}]);