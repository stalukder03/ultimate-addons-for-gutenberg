(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[61],{225:function(e,t,a){"use strict";t.a=async function(e,t,a,n){const i=new Image;return i.addEventListener("load",(function(){t({imgTagHeight:this.naturalHeight}),t({imgTagWidth:this.naturalWidth})})),i.src=e,i.height}},309:function(e,t,a){"use strict";var n=a(16),i=a.n(n)()((function(e){return e[1]}));i.push([e.i,".uagb-step-link-all {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  z-index: 3;\n  box-shadow: none;\n  text-decoration: none;\n  color: inherit; }\n",""]),t.a=i},550:function(e,t,a){"use strict";a.r(t);var n,i=a(4),o=a.n(i),r=a(0),s=a.n(r),l=a(1),c=a(15),u=a.n(c),g=a(309),m=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=g.a.locals||{},d.use=function(){return m++||(n=u()(g.a,p)),d},d.unuse=function(){m>0&&!--m&&(n(),n=null)};var b=d,h=a(5),f=a(6),w=a(11),v=a(225);const _=e=>{Object(r.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]),e=e.parentProps;const t=Object(w.a)(),{attributes:a,setAttributes:n,mergeBlocks:i,insertBlocksAfter:c,onReplace:u}=e,{block_id:g,name:m,description:p,url:d,urlType:_,image:E,imageSize:k,urlText:N,urlTarget:T,imgPosition:x,imgTagHeight:y,imgTagWidth:j}=a;let O="";null!=E&&""!==E&&(O=E.url);let z="";if(""!==O){const e=E.sizes;z=void 0!==e&&void 0!==e[k]?e[k].url:O}let S="_self";T&&(S="_blank"),Object(r.useEffect)(()=>{Object(v.a)(z,n)},[z]);const L=s.a.createElement("img",{className:"uagb-how-to-step-image",src:z,alt:E.alt,width:j,height:y,loading:"lazy"}),R=s.a.createElement("div",{className:"uagb-step-content-wrap"},s.a.createElement(h.RichText,{tagName:"div",className:"uagb-how-to-step-name",placeholder:Object(l.__)("Name","ultimate-addons-for-gutenberg"),value:m,onChange:e=>n({name:e}),multiline:!1}),s.a.createElement(h.RichText,{tagName:"p",value:p,placeholder:Object(l.__)("Write a Description"),className:"uagb-how-to-step-description",onChange:e=>n({description:e}),onMerge:i,onSplit:c?function(e,t){n({description:e});for(var a=arguments.length,i=new Array(a>2?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o];c([...i,Object(f.createBlock)("core/paragraph",{description:t})])}:void 0,onRemove:()=>u([])}),"text"===_&&s.a.createElement("a",{href:d,target:S,className:"uagb-step-link"},s.a.createElement("span",{className:"uagb-step-link-text"},N)));return s.a.createElement("div",{className:o()("uagb-how-to-step-wrap","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+g)},"all"===_&&s.a.createElement(s.a.Fragment,null,s.a.createElement("a",{className:"uagb-step-link","aria-label":"Step Link",rel:"noopener noreferrer",target:S}),s.a.createElement("div",{className:"uagb-step-image-content-wrap uag-image-position-"+x},z&&L,R)),"text"===_&&s.a.createElement("div",{className:"uagb-step-image-content-wrap uag-image-position-"+x},z&&L,R))};t.default=s.a.memo(_)}}]);