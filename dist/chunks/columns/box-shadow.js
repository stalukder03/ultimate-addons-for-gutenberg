(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{288:function(e,t,n){"use strict";n.r(t);var o=n(0);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=wp.blockEditor.ColorPalette,b=wp.components,d=b.Button,p=b.SelectControl,m=b.RangeControl,h=b.Dashicon,v=wp.element,w=v.Component,y=v.Fragment,R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(w,e);var t,n,a,b,v=(a=w,b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=i(a);if(b){var n=i(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function w(){var e;return l(this,w),(e=v.apply(this,arguments)).onAdvancedControlClick=e.onAdvancedControlClick.bind(s(e)),e.onAdvancedControlReset=e.onAdvancedControlReset.bind(s(e)),e}return t=w,(n=[{key:"onAdvancedControlClick",value:function(){var e=!0,t=Object(o.__)("Hide Advanced","ultimate-addons-for-gutenberg");null!==this.state&&!0===this.state.showAdvancedControls&&(e=!1,t=Object(o.__)("Advanced","ultimate-addons-for-gutenberg")),this.setState({showAdvancedControls:e,showAdvancedControlsLabel:t})}},{key:"onAdvancedControlReset",value:function(){var e=this.props.setAttributes;e({boxShadowColor:""}),e({boxShadowHOffset:""}),e({boxShadowVOffset:""}),e({boxShadowBlur:""}),e({boxShadowSpread:""}),e({boxShadowPosition:""})}},{key:"render",value:function(){var e,t,n,a=this.props,l=a.setAttributes,r=a.boxShadowColor,c=a.boxShadowHOffset,u=a.boxShadowVOffset,s=a.boxShadowBlur,i=a.boxShadowSpread,b=a.boxShadowPosition;return null!==this.state&&!0===this.state.showAdvancedControls&&(e=React.createElement("div",{className:"uagb-box-shadow-advanced"},React.createElement(y,null,React.createElement("p",{className:"uagb-setting-label"},r.label,React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:r.value}}))),React.createElement(f,{value:r.value,onChange:function(e){return l({boxShadowColor:e})},allowReset:!0})),React.createElement(y,null,React.createElement("h2",null,c.label),React.createElement(m,{value:c.value,onChange:function(e){return l({boxShadowHOffset:e})},min:-100,max:100,allowReset:!0})),React.createElement(y,null,React.createElement("h2",null,u.label),React.createElement(m,{value:u.value,onChange:function(e){return l({boxShadowVOffset:e})},min:-100,max:100,allowReset:!0})),React.createElement(y,null,React.createElement("h2",null,s.label),React.createElement(m,{value:s.value,onChange:function(e){return l({boxShadowBlur:e})},min:0,max:100,allowReset:!0})),React.createElement(y,null,React.createElement("h2",null,i.label),React.createElement(m,{value:i.value,onChange:function(e){return l({boxShadowSpread:e})},min:0,max:100,allowReset:!0})),React.createElement(y,null,React.createElement(p,{label:b.label,value:b.value,onChange:function(e){return l({boxShadowPosition:e})},options:[{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg")}]})))),n=React.createElement(d,{className:"uagb-size-btn uagb-typography-reset-btn",isSmall:!0,"aria-pressed":null!==this.state,onClick:this.onAdvancedControlReset},React.createElement(h,{icon:"image-rotate"})),t=React.createElement(d,{className:"uagb-size-btn uagb-typography-control-btn",isSmall:!0,"aria-pressed":null!==this.state,onClick:this.onAdvancedControlClick},React.createElement(h,{icon:"admin-tools"})),React.createElement("div",{className:"uag-typography-option-actions"},React.createElement("span",null,this.props.label),t,n,e)}}])&&r(t.prototype,n),w}(w);t.default=R}}]);