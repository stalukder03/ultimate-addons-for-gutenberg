(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[18],{512:function(e,a,o){"use strict";o.r(a);var t=o(4),n=o.n(t),l=o(109),s=o(0),u=o.n(s),c=o(11),m=o(5);const _=["uagb/column"],b=e=>{const{attributes:a,isSelected:o,className:t}=e.parentProps,b=Object(c.a)(),{stack:r,align:i,vAlign:p,tag:g,columnGap:d,backgroundType:v,backgroundVideo:h,columns:w,bottomType:k,topType:f,bottomFlip:E,topFlip:y,reverseTablet:N,reverseMobile:T,topContentAboveShape:A,bottomContentAboveShape:C,contentWidth:P}=a,S=Object(s.useMemo)(()=>{const e=[];for(let a=0;a<w;a++)e.push(["uagb/column",{id:a+1}]);return e},[w]),j="none"!==f&&u.a.createElement("div",{className:n()("uagb-columns__shape","uagb-columns__shape-top",{"uagb-columns__shape-flip":!0===y},{"uagb-columns__shape-above-content":!0===A})},l.a[f]),B="none"!==k&&u.a.createElement("div",{className:n()("uagb-columns__shape","uagb-columns__shape-bottom",{"uagb-columns__shape-flip":!0===E},{"uagb-columns__shape-above-content":!0===C}),"data-negative":"false"},l.a[k]),F=N?"uagb-columns__reverse-tablet":"",I=T?"uagb-columns__reverse-mobile":"",J=""+g,L=o?"active":"not-active",M=void 0!==v?"uagb-columns__background-"+v:"",O=void 0!==p?"uagb-columns__valign-"+p:"",x=void 0!==i?"align"+i:"";return u.a.createElement(J,{className:n()(t,"uagb-columns__wrap",""+M,"uagb-columns__edit-"+L,"uagb-editor-preview-mode-"+b.toLowerCase(),"uagb-columns__stack-"+r,""+O,"uagb-columns__gap-"+d,""+x,F,I,"uagb-block-"+e.parentProps.clientId.substr(0,8),"uagb-columns__columns-"+w,"uagb-columns__max_width-"+P)},u.a.createElement("div",{className:"uagb-columns__overlay"}),j,"video"===v&&u.a.createElement("div",{className:"uagb-columns__video-wrap"},h&&u.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsinline:!0},u.a.createElement("source",{src:h.url,type:"video/mp4"}))),u.a.createElement(m.InnerBlocks,{template:S,templateLock:"all",allowedBlocks:_}),B)};a.default=u.a.memo(b)}}]);