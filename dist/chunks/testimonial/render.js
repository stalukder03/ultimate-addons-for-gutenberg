(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[108],{241:function(e,t,a){"use strict";var r=a(16),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.gutenberg-editor-page #wpwrap ul.slick-dots {\n  margin: 0 auto; }\n\n#wpwrap .edit-post-visual-editor button.slick-arrow {\n  line-height: 16px; }\n\n.uagb-tm__desc,\n.editor-block-list__layout .uagb-tm__desc.block-editor-rich-text__editable {\n  margin-bottom: 15px; }\n\n.uagb-tm__author-name,\n.editor-block-list__layout .uagb-tm__author-name.block-editor-rich-text__editable {\n  margin-bottom: 5px;\n  font-size: 30px;\n  line-height: 16px; }\n\n#wpwrap .edit-post-visual-editor ul.slick-dots {\n  margin: 0;\n  padding: 0; }\n",""]),t.a=n},477:function(e,t,a){"use strict";a.r(t);var r,n=a(3),o=a.n(n),s=a(53),i=a(7),l=a(0),u=a.n(l),c=a(8),d=a(43),b=a(50),m=a(51),p=a(52),_=a(15),g=a.n(_),w=a(241),v=0,y={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},h={};h.locals=w.a.locals||{},h.use=function(){return v++||(r=g()(w.a,y)),h},h.unuse=function(){v>0&&!--v&&(r(),r=null)};var k=h,E=a(10);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const x=Object(l.lazy)(()=>a.e(1).then(a.t.bind(null,467,7))),S=e=>{Object(l.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const t=Object(E.a)(),{className:a,setAttributes:r,attributes:n}=e,{test_block:_,imagePosition:g,columns:w,tcolumns:v,mcolumns:y,pauseOnHover:h,infiniteLoop:S,transitionSpeed:N,arrowDots:O,arrowSize:j,arrowBorderSize:T,arrowBorderRadius:z,autoplay:A,autoplaySpeed:C,arrowColor:P}=n,B=()=>u.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:P,borderRadius:z,borderWidth:T}},i.a.carousel_right),I=()=>u.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:P,borderRadius:z,borderWidth:T}},i.a.carousel_left),L={accessibility:!1,slidesToShow:w,slidesToScroll:1,autoplaySpeed:C,autoplay:A,infinite:S,pauseOnHover:h,speed:N,arrows:"arrows"===O||"arrows_dots"===O,dots:"dots"===O||"arrows_dots"===O,rtl:!1,draggable:!1,nextArrow:u.a.createElement(B,{arrowSize:j}),prevArrow:u.a.createElement(I,{arrowSize:j}),responsive:[{breakpoint:1024,settings:{slidesToShow:v,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:y,slidesToScroll:1}}]};return u.a.createElement("div",{className:o()(a,"uagb-slick-carousel uagb-tm__arrow-outside","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},u.a.createElement(l.Suspense,{fallback:Object(c.a)()},u.a.createElement(x,f({className:o()("is-carousel","uagb-tm__columns-"+w,"uagb-tm__items")},L),_.map((t,a)=>u.a.createElement("div",{className:o()("uagb-testimonial__wrap",...Object(s.a)(n)),key:"wrap-"+a},u.a.createElement("div",{className:"uagb-tm__content",key:"tm_content-"+a},u.a.createElement("div",{className:"uagb-tm__overlay"}),("top"===g||"left"===g)&&u.a.createElement(d.a,{attributes:n,index_value:a}),u.a.createElement("div",{className:"uagb-tm__text-wrap"},u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{attributes:n,setAttributes:r,props:e,index_value:a})),u.a.createElement("div",{className:"uagb-tm__meta-inner"},"bottom"===g&&u.a.createElement(d.a,{attributes:n,index_value:a}),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"uagb-testimonial-details",key:"tm_wraps-"+a},u.a.createElement(b.a,{attributes:n,setAttributes:r,props:e,index_value:a}),u.a.createElement(m.a,{attributes:n,setAttributes:r,props:e,index_value:a}))))),"right"===g&&u.a.createElement(d.a,{attributes:n,index_value:a})))))))};t.default=u.a.memo(S)}}]);