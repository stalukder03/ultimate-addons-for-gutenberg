(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[110],{304:function(e,t,a){"use strict";var r=a(14),o=a.n(r)()((function(e){return e[1]}));o.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.gutenberg-editor-page #wpwrap ul.slick-dots {\n  margin: 0 auto; }\n\n#wpwrap .edit-post-visual-editor button.slick-arrow {\n  line-height: 16px; }\n\n.uagb-tm__desc,\n.editor-block-list__layout .uagb-tm__desc.block-editor-rich-text__editable {\n  margin-bottom: 15px; }\n\n.uagb-tm__author-name,\n.editor-block-list__layout .uagb-tm__author-name.block-editor-rich-text__editable {\n  margin-bottom: 5px;\n  font-size: 30px;\n  line-height: 16px; }\n\n#wpwrap .edit-post-visual-editor ul.slick-dots {\n  margin: 0;\n  padding: 0; }\n\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-tablet.uagb-slick-carousel .slick-slide,\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-mobile.uagb-slick-carousel .slick-slide {\n  height: auto; }\n\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-tablet.uagb-slick-carousel ul.slick-dots,\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-mobile.uagb-slick-carousel ul.slick-dots {\n  padding-left: 0; }\n",""]),t.a=o},551:function(e,t,a){"use strict";a.r(t);var r,o=a(3),s=a.n(o),i=a(53),n=a(7),l=a(0),u=a.n(l),c=a(9),b=a(54),d=a(50),m=a(51),p=a(52),g=a(13),_=a.n(g),w=a(304),k=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=w.a.locals||{},v.use=function(){return k++||(r=_()(w.a,h)),v},v.unuse=function(){k>0&&!--k&&(r(),r=null)};var y=v,f=a(10);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const x=Object(l.lazy)(()=>a.e(1).then(a.t.bind(null,508,7))),S=e=>{Object(l.useLayoutEffect)(()=>(y.use(),()=>{y.unuse()}),[]),e=e.parentProps;const t=Object(f.a)(),{className:a,setAttributes:r,attributes:o}=e,{block_id:g,isPreview:_,test_block:w,imagePosition:k,columns:h,tcolumns:v,mcolumns:S,pauseOnHover:N,infiniteLoop:O,transitionSpeed:j,arrowDots:T,arrowSize:z,arrowBorderSize:A,arrowBorderRadius:C,autoplay:P,autoplaySpeed:q,arrowColor:B,equalHeight:H}=o,I=()=>u.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:B,borderRadius:C,borderWidth:A}},n.a.carousel_right),L=()=>u.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:B,borderRadius:C,borderWidth:A}},n.a.carousel_left),R=H?"uagb-post__carousel_equal-height":"",F={accessibility:!1,slidesToShow:h,slidesToScroll:1,autoplaySpeed:q,autoplay:P,infinite:O,pauseOnHover:N,speed:j,arrows:"arrows"===T||"arrows_dots"===T,dots:"dots"===T||"arrows_dots"===T,rtl:!1,afterChange:()=>{H&&uagb_carousel_height(g)},draggable:!1,nextArrow:u.a.createElement(I,{arrowSize:z}),prevArrow:u.a.createElement(L,{arrowSize:z}),responsive:[{breakpoint:1024,settings:{slidesToShow:v,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:S,slidesToScroll:1}}]},J=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/testimonials.png";return _?u.a.createElement("img",{width:"100%",src:J,alt:""}):u.a.createElement("div",{className:s()(a,"uagb-slick-carousel uagb-tm__arrow-outside","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8),""+R)},u.a.createElement(l.Suspense,{fallback:Object(c.a)()},u.a.createElement(x,E({className:s()("is-carousel","uagb-tm__columns-"+h,"uagb-tm__items")},F),w.map((t,a)=>u.a.createElement("div",{className:s()("uagb-testimonial__wrap",...Object(i.a)(o)),key:"wrap-"+a},u.a.createElement("div",{className:"uagb-tm__content",key:"tm_content-"+a},u.a.createElement("div",{className:"uagb-tm__overlay"}),("top"===k||"left"===k)&&u.a.createElement(b.a,{attributes:o,index_value:a}),u.a.createElement("div",{className:"uagb-tm__text-wrap"},u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{attributes:o,setAttributes:r,props:e,index_value:a})),u.a.createElement("div",{className:"uagb-tm__meta-inner"},"bottom"===k&&u.a.createElement(b.a,{attributes:o,index_value:a}),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"uagb-testimonial-details",key:"tm_wraps-"+a},u.a.createElement(d.a,{attributes:o,setAttributes:r,props:e,index_value:a}),u.a.createElement(m.a,{attributes:o,setAttributes:r,props:e,index_value:a}))))),"right"===k&&u.a.createElement(b.a,{attributes:o,index_value:a})))))))};t.default=u.a.memo(S)}}]);