(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[17],{427:function(e,a,o){"use strict";o.r(a);var t=o(4),n=o.n(t),l=o(65),s=o(1),u=o.n(s),c=o(24),m=o(5);const b=["uagb/column"],r=e=>{const{attributes:a,isSelected:o,className:t}=e.parentProps,r=Object(c.a)(),{stack:_,align:p,vAlign:i,tag:g,columnGap:d,backgroundType:v,backgroundVideo:h,columns:k,bottomType:w,topType:f,bottomFlip:E,topFlip:y,reverseTablet:N,reverseMobile:T,topContentAboveShape:A,bottomContentAboveShape:C}=a,P=Object(s.useMemo)(()=>{const e=[];for(let a=0;a<k;a++)e.push(["uagb/column",{id:a+1}]);return e},[k]),S="none"!==f&&u.a.createElement("div",{className:n()("uagb-columns__shape","uagb-columns__shape-top",{"uagb-columns__shape-flip":!0===y},{"uagb-columns__shape-above-content":!0===A})},l.a[f]),j="none"!==w&&u.a.createElement("div",{className:n()("uagb-columns__shape","uagb-columns__shape-bottom",{"uagb-columns__shape-flip":!0===E},{"uagb-columns__shape-above-content":!0===C}),"data-negative":"false"},l.a[w]),B=N?"uagb-columns__reverse-tablet":"",F=T?"uagb-columns__reverse-mobile":"",I=""+g,J=o?"active":"not-active",L=void 0!==v?"uagb-columns__background-"+v:"",M=void 0!==i?"uagb-columns__valign-"+i:"",O=void 0!==p?"align"+p:"";return u.a.createElement(I,{className:n()(t,"uagb-columns__wrap",""+L,"uagb-columns__edit-"+J,"uagb-editor-preview-mode-"+r.toLowerCase(),"uagb-columns__stack-"+_,""+M,"uagb-columns__gap-"+d,""+O,B,F,"uagb-block-"+e.parentProps.clientId.substr(0,8),"uagb-columns__columns-"+k)},u.a.createElement("div",{className:"uagb-columns__overlay"}),S,"video"===v&&u.a.createElement("div",{className:"uagb-columns__video-wrap"},h&&u.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsinline:!0},u.a.createElement("source",{src:h.url,type:"video/mp4"}))),u.a.createElement(m.InnerBlocks,{template:P,templateLock:"all",allowedBlocks:b}),j)};a.default=u.a.memo(r)}}]);