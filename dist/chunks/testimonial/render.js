(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[110],{299:function(e,t,a){"use strict";var r=a(14),s=a.n(r)()((function(e){return e[1]}));s.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.gutenberg-editor-page #wpwrap ul.slick-dots {\n  margin: 0 auto; }\n\n#wpwrap .edit-post-visual-editor button.slick-arrow {\n  line-height: 16px; }\n\n.uagb-tm__desc,\n.editor-block-list__layout .uagb-tm__desc.block-editor-rich-text__editable {\n  margin-bottom: 15px; }\n\n.uagb-tm__author-name,\n.editor-block-list__layout .uagb-tm__author-name.block-editor-rich-text__editable {\n  margin-bottom: 5px;\n  font-size: 30px;\n  line-height: 16px; }\n\n#wpwrap .edit-post-visual-editor ul.slick-dots {\n  margin: 0;\n  padding: 0; }\n\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-tablet.uagb-slick-carousel .slick-slide,\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-mobile.uagb-slick-carousel .slick-slide {\n  height: auto; }\n\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-tablet.uagb-slick-carousel ul.slick-dots,\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-mobile.uagb-slick-carousel ul.slick-dots {\n  padding-left: 0; }\n",""]),t.a=s},546:function(e,t,a){"use strict";a.r(t);var r,s=a(3),o=a.n(s),i=a(64),n=a(7),l=a(0),u=a.n(l),c=a(8),b=a(50),d=a(61),m=a(62),p=a(63),g=a(13),_=a.n(g),w=a(299),k=0,v={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},h={};h.locals=w.a.locals||{},h.use=function(){return k++||(r=_()(w.a,v)),h},h.unuse=function(){k>0&&!--k&&(r(),r=null)};var y=h,f=a(10);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const x=Object(l.lazy)(()=>a.e(1).then(a.t.bind(null,503,7))),S=e=>{Object(l.useLayoutEffect)(()=>(y.use(),()=>{y.unuse()}),[]),e=e.parentProps;const t=Object(f.a)(),{className:a,setAttributes:r,attributes:s}=e,{isPreview:g,test_block:_,imagePosition:w,columns:k,tcolumns:v,mcolumns:h,pauseOnHover:S,infiniteLoop:N,transitionSpeed:O,arrowDots:j,arrowSize:T,arrowBorderSize:z,arrowBorderRadius:A,autoplay:C,autoplaySpeed:P,arrowColor:B}=s,I=()=>u.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:B,borderRadius:A,borderWidth:z}},n.a.carousel_right),L=()=>u.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:B,borderRadius:A,borderWidth:z}},n.a.carousel_left),R={accessibility:!1,slidesToShow:k,slidesToScroll:1,autoplaySpeed:P,autoplay:C,infinite:N,pauseOnHover:S,speed:O,arrows:"arrows"===j||"arrows_dots"===j,dots:"dots"===j||"arrows_dots"===j,rtl:!1,draggable:!1,nextArrow:u.a.createElement(I,{arrowSize:T}),prevArrow:u.a.createElement(L,{arrowSize:T}),responsive:[{breakpoint:1024,settings:{slidesToShow:v,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:h,slidesToScroll:1}}]},F=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/testimonials.png";return g?u.a.createElement("img",{width:"100%",src:F,alt:""}):u.a.createElement("div",{className:o()(a,"uagb-slick-carousel uagb-tm__arrow-outside","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},u.a.createElement(l.Suspense,{fallback:Object(c.a)()},u.a.createElement(x,E({className:o()("is-carousel","uagb-tm__columns-"+k,"uagb-tm__items")},R),_.map((t,a)=>u.a.createElement("div",{className:o()("uagb-testimonial__wrap",...Object(i.a)(s)),key:"wrap-"+a},u.a.createElement("div",{className:"uagb-tm__content",key:"tm_content-"+a},u.a.createElement("div",{className:"uagb-tm__overlay"}),("top"===w||"left"===w)&&u.a.createElement(b.a,{attributes:s,index_value:a}),u.a.createElement("div",{className:"uagb-tm__text-wrap"},u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{attributes:s,setAttributes:r,props:e,index_value:a})),u.a.createElement("div",{className:"uagb-tm__meta-inner"},"bottom"===w&&u.a.createElement(b.a,{attributes:s,index_value:a}),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"uagb-testimonial-details",key:"tm_wraps-"+a},u.a.createElement(d.a,{attributes:s,setAttributes:r,props:e,index_value:a}),u.a.createElement(m.a,{attributes:s,setAttributes:r,props:e,index_value:a}))))),"right"===w&&u.a.createElement(b.a,{attributes:s,index_value:a})))))))};t.default=u.a.memo(S)}}]);