(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[110],{304:function(e,t,a){"use strict";var r=a(15),o=a.n(r)()((function(e){return e[1]}));o.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.gutenberg-editor-page #wpwrap ul.slick-dots {\n  margin: 0 auto; }\n\n#wpwrap .edit-post-visual-editor button.slick-arrow {\n  line-height: 16px; }\n\n.uagb-tm__desc,\n.editor-block-list__layout .uagb-tm__desc.block-editor-rich-text__editable {\n  margin-bottom: 15px; }\n\n.uagb-tm__author-name,\n.editor-block-list__layout .uagb-tm__author-name.block-editor-rich-text__editable {\n  margin-bottom: 5px;\n  font-size: 30px;\n  line-height: 16px; }\n\n#wpwrap .edit-post-visual-editor ul.slick-dots {\n  margin: 0;\n  padding: 0; }\n\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-tablet.uagb-slick-carousel .slick-slide,\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-mobile.uagb-slick-carousel .slick-slide {\n  height: auto; }\n\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-tablet.uagb-slick-carousel ul.slick-dots,\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-mobile.uagb-slick-carousel ul.slick-dots {\n  padding-left: 0; }\n",""]),t.a=o},551:function(e,t,a){"use strict";a.r(t);var r,o=a(3),i=a.n(o),s=a(53),n=a(7),l=a(0),u=a.n(l),c=a(10),b=a(54),d=a(50),m=a(51),p=a(52),g=a(14),_=a.n(g),w=a(304),k=0,v={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},h={};h.locals=w.a.locals||{},h.use=function(){return k++||(r=_()(w.a,v)),h},h.unuse=function(){k>0&&!--k&&(r(),r=null)};var y=h,f=a(11),E=a(9);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const x=Object(l.lazy)(()=>a.e(1).then(a.t.bind(null,508,7))),O=e=>{Object(l.useLayoutEffect)(()=>(y.use(),()=>{y.unuse()}),[]),e=e.parentProps;const t=Object(f.a)(),a=e.name.replace("uagb/",""),{className:r,setAttributes:o,attributes:g}=e,{block_id:_,isPreview:w,test_block:k,imagePosition:v,columns:h,tcolumns:O,mcolumns:j,pauseOnHover:N,infiniteLoop:C,transitionSpeed:z,arrowDots:T,arrowSize:A,arrowBorderSize:P,arrowBorderRadius:B,autoplay:R,autoplaySpeed:q,arrowColor:H,equalHeight:I}=g,L=Object(l.useRef)(),F=e=>{let{onClick:t}=e;return u.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:H,borderRadius:B,borderWidth:Object(E.a)(P,"arrowBorderSize",a)},onClick:t},n.a.carousel_right)},J=e=>{let{onClick:t}=e;return u.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:H,borderRadius:B,borderWidth:Object(E.a)(P,"arrowBorderSize",a)},onClick:t},n.a.carousel_left)},W="dots"===T||"arrows_dots"===T,D="arrows"===T||"arrows_dots"===T,G=I?"uagb-post__carousel_equal-height":"",K={accessibility:!1,slidesToShow:Object(E.a)(h,"columns",a),slidesToScroll:1,autoplaySpeed:Object(E.a)(q,"autoplaySpeed",a),autoplay:R,infinite:C,pauseOnHover:N,speed:Object(E.a)(z,"transitionSpeed",a),arrows:D,dots:W,rtl:!1,afterChange:()=>{I&&uagb_carousel_height(_)},draggable:!1,nextArrow:u.a.createElement(F,{arrowSize:A,onClick:L.slickNext}),prevArrow:u.a.createElement(J,{arrowSize:A,onClick:L.slickPrev}),responsive:[{breakpoint:1024,settings:{slidesToShow:Object(E.a)(O,"tcolumns",a),slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:Object(E.a)(j,"mcolumns",a),slidesToScroll:1}}]},M=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/testimonials.png";return w?u.a.createElement("img",{width:"100%",src:M,alt:""}):u.a.createElement("div",{className:i()(r,"uagb-slick-carousel uagb-tm__arrow-outside","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8),""+G)},u.a.createElement(l.Suspense,{fallback:Object(c.a)()},u.a.createElement(x,S({className:i()("is-carousel","uagb-tm__columns-"+Object(E.a)(h,"columns",a),"uagb-tm__items")},K,{ref:L}),k.map((t,a)=>u.a.createElement("div",{className:i()("uagb-testimonial__wrap",...Object(s.a)(g)),key:"wrap-"+a},u.a.createElement("div",{className:"uagb-tm__content",key:"tm_content-"+a},u.a.createElement("div",{className:"uagb-tm__overlay"}),("top"===v||"left"===v)&&u.a.createElement(b.a,{attributes:g,index_value:a}),u.a.createElement("div",{className:"uagb-tm__text-wrap"},u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{attributes:g,setAttributes:o,props:e,index_value:a})),u.a.createElement("div",{className:"uagb-tm__meta-inner"},"bottom"===v&&u.a.createElement(b.a,{attributes:g,index_value:a}),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"uagb-testimonial-details",key:"tm_wraps-"+a},u.a.createElement(d.a,{attributes:g,setAttributes:o,props:e,index_value:a}),u.a.createElement(m.a,{attributes:g,setAttributes:o,props:e,index_value:a}))))),"right"===v&&u.a.createElement(b.a,{attributes:g,index_value:a})))))))};t.default=u.a.memo(O)}}]);