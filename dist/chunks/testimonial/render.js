(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[103],{336:function(e,t,a){"use strict";var r=a(17),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,"/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.gutenberg-editor-page #wpwrap ul.slick-dots {\n  margin: 0 auto; }\n\n#wpwrap .edit-post-visual-editor button.slick-arrow {\n  line-height: 16px; }\n\n.uagb-tm__desc,\n.editor-block-list__layout .uagb-tm__desc.block-editor-rich-text__editable {\n  margin-bottom: 15px; }\n\n.uagb-tm__author-name,\n.editor-block-list__layout .uagb-tm__author-name.block-editor-rich-text__editable {\n  margin-bottom: 5px;\n  font-size: 30px;\n  line-height: 16px; }\n\n#wpwrap .edit-post-visual-editor ul.slick-dots {\n  margin: 0; }\n",""]),t.a=n},577:function(e,t,a){"use strict";a.r(t);var r,n=a(4),o=a.n(n),s=a(51),i=a(8),l=a(1),u=a.n(l),c=a(11),d=a(42),m=a(48),b=a(49),p=a(50),_=a(16),g=a.n(_),w=a(336),v=0,y={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},h={};h.locals=w.a.locals||{},h.use=function(){return v++||(r=g()(w.a,y)),h},h.unuse=function(){v>0&&!--v&&(r(),r=null)};var k=h;function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const f=Object(l.lazy)(()=>a.e(0).then(a.t.bind(null,569,7))),x=e=>{Object(l.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const{className:t,setAttributes:a,attributes:r,deviceType:n}=e,{test_block:_,imagePosition:g,columns:w,tcolumns:v,mcolumns:y,pauseOnHover:h,infiniteLoop:x,transitionSpeed:S,arrowDots:N,arrowSize:O,arrowBorderSize:T,arrowBorderRadius:j,autoplay:z,autoplaySpeed:A,arrowColor:C}=r,P=()=>u.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:C,borderRadius:j,borderWidth:T}},i.a.carousel_right),B=()=>u.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:C,borderRadius:j,borderWidth:T}},i.a.carousel_left),I={slidesToShow:w,slidesToScroll:1,autoplaySpeed:A,autoplay:z,infinite:x,pauseOnHover:h,speed:S,arrows:"arrows"===N||"arrows_dots"===N,dots:"dots"===N||"arrows_dots"===N,rtl:!1,draggable:!1,nextArrow:u.a.createElement(P,{arrowSize:O}),prevArrow:u.a.createElement(B,{arrowSize:O}),responsive:[{breakpoint:1024,settings:{slidesToShow:v,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:y,slidesToScroll:1}}]};return u.a.createElement("div",{className:o()(t,"uagb-slick-carousel uagb-tm__arrow-outside","uagb-editor-preview-mode-"+n.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},u.a.createElement(l.Suspense,{fallback:Object(c.a)()},u.a.createElement(f,E({className:o()("is-carousel","uagb-tm__columns-"+w,"uagb-tm__items")},I),_.map((t,n)=>u.a.createElement("div",{className:o()("uagb-testimonial__wrap",...Object(s.a)(r)),key:"wrap-"+n},u.a.createElement("div",{className:"uagb-tm__content",key:"tm_content-"+n},u.a.createElement("div",{className:"uagb-tm__overlay"}),("top"===g||"left"===g)&&u.a.createElement(d.a,{attributes:r,index_value:n}),u.a.createElement("div",{className:"uagb-tm__text-wrap"},u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{attributes:r,setAttributes:a,props:e,index_value:n})),u.a.createElement("div",{className:"uagb-tm__meta-inner"},"bottom"===g&&u.a.createElement(d.a,{attributes:r,index_value:n}),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"uagb-testimonial-details",key:"tm_wraps-"+n},u.a.createElement(m.a,{attributes:r,setAttributes:a,props:e,index_value:n}),u.a.createElement(b.a,{attributes:r,setAttributes:a,props:e,index_value:n}))))),"right"===g&&u.a.createElement(d.a,{attributes:r,index_value:n})))))))};t.default=u.a.memo(x)}}]);