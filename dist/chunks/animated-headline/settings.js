(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[6],{580:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),r=a(65),o=a(22),i=a(23),g=a(5),u=a(17),b=a(9),d=a(2);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const h=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{headlineTag:l,animateType:h,beforeText:s,highlightedText:m,rotatingText:_,afterText:p,headlineAlign:f,rotatingAnimation:v,highlightedShape:T}=t;return n.a.createElement("div",null,n.a.createElement(g.BlockControls,{key:"controls"},n.a.createElement(g.AlignmentToolbar,{value:f,onChange:e=>a({headlineAlign:e})})),n.a.createElement(g.InspectorControls,null,n.a.createElement(r.a,null,n.a.createElement(o.b,o.a.general,n.a.createElement(u.a,null,n.a.createElement(i.a,{setAttributes:a,label:Object(d.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:l,label:"headlineTag"},options:[{value:"h1",label:Object(d.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(d.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(d.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(d.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(d.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(d.__)("H6","ultimate-addons-for-gutenberg")}]}),n.a.createElement(b.SelectControl,{label:Object(d.__)("Style","ultimate-addons-for-gutenberg"),value:h,options:[{label:"Highlighted",value:"highlighted"},{label:"Rotating",value:"rotating"}],onChange:e=>a({animateType:e})}),"highlighted"===h?n.a.createElement(b.SelectControl,{label:Object(d.__)("Animation","ultimate-addons-for-gutenberg"),value:v,options:[{label:"Typing",value:"typing"},{label:"Clip",value:"clip"}],onChange:e=>a({rotatingAnimation:e})}):n.a.createElement(b.SelectControl,{label:Object(d.__)("Shape","ultimate-addons-for-gutenberg"),value:T,options:[{label:"Circle",value:"circle"},{label:"Curly",value:"curly"}],onChange:e=>a({highlightedShape:e})}),n.a.createElement(b.TextControl,{label:Object(d.__)("Before Text","ultimate-addons-for-gutenberg"),placeholder:Object(d.__)("Enter Your Headline","ultimate-addons-for-gutenberg"),value:s,onChange:e=>a({beforeText:e})}),"highlighted"===h?n.a.createElement(b.TextControl,{label:Object(d.__)("Highlighted Text","ultimate-addons-for-gutenberg"),value:m,onChange:e=>a({highlightedText:e})}):n.a.createElement(b.TextareaControl,{label:Object(d.__)("Rotating Text","ultimate-addons-for-gutenberg"),placeholder:Object(d.__)("Enter each word in a separate line","ultimate-addons-for-gutenberg"),value:_,onChange:e=>a({rotatingText:e})}),n.a.createElement(b.TextControl,{label:Object(d.__)("After Text","ultimate-addons-for-gutenberg"),placeholder:Object(d.__)("Enter Your Headline","ultimate-addons-for-gutenberg"),value:p,onChange:e=>a({afterText:e})}))),n.a.createElement(o.b,c({},o.a.advance,{parentProps:e})))))};t.default=n.a.memo(h)}}]);