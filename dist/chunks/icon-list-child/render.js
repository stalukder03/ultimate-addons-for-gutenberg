(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/icon-list-child/render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/icon-list-child/editor.lazy.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/icon-list-child/editor.lazy.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".uagb-icon-list__wrap > .block-editor-inner-blocks {\n  width: 100%; }\n\n.wp-block.block-editor-block-list__block[data-type=\"uagb/icon-list-child\"] {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.uagb-icon-list__layout-vertical .uagb-icon-list__wrap .block-list-appender {\n  margin-top: 28px;\n  width: 60px; }\n\n.uagb-icon-list__layout-horizontal .uagb-icon-list__wrap .block-list-appender {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 20px;\n  width: 52px;\n  height: 52px; }\n", "",{"version":3,"sources":["webpack://./src/blocks/icon-list-child/editor.lazy.scss"],"names":[],"mappings":"AAAA;EACE,WAAW,EAAE;;AAEf;EACE,gBAAgB;EAChB,mBAAmB,EAAE;;AAEvB;EACE,gBAAgB;EAChB,WAAW,EAAE;;AAEf;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,YAAY,EAAE","sourcesContent":[".uagb-icon-list__wrap > .block-editor-inner-blocks {\n  width: 100%; }\n\n.wp-block.block-editor-block-list__block[data-type=\"uagb/icon-list-child\"] {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.uagb-icon-list__layout-vertical .uagb-icon-list__wrap .block-list-appender {\n  margin-top: 28px;\n  width: 60px; }\n\n.uagb-icon-list__layout-horizontal .uagb-icon-list__wrap .block-list-appender {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 20px;\n  width: 52px;\n  height: 52px; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/icon-list-child/editor.lazy.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/icon-list-child/editor.lazy.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/icon-list-child/editor.lazy.scss");

            

var refs = 0;
var update;
var options = {"injectType":"lazySingletonStyleTag","attributes":{"id":"uagb-editor-styles"}};

options.insert = "head";
options.singleton = true;

var exported = {};

exported.locals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {};
exported.use = function() {
  if (!(refs++)) {
    update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  return exported;
};
exported.unuse = function() {
  if (refs > 0 && !--refs) {
    update();
    update = null;
  }
};



;
       /* harmony default export */ __webpack_exports__["default"] = (exported);


/***/ }),

/***/ "./src/blocks/icon-list-child/render.js":
/*!**********************************************!*\
  !*** ./src/blocks/icon-list-child/render.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/icon-list-child/editor.lazy.scss");
// Import classes







const Render = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_5__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_5__["default"].unuse();
    };
  }, []);
  props = props.parentProps;
  const {
    attributes,
    setAttributes
  } = props;
  const {
    className,
    label,
    image_icon,
    icon,
    image,
    block_id,
    link,
    target,
    disableLink,
    hideLabel
  } = attributes;
  let imageIconHtml = '';

  if (image_icon === 'icon') {
    if (icon) {
      imageIconHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "uagb-icon-list__source-icon"
      }, Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(icon));
    }
  } else if (image && image.url) {
    imageIconHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      className: "uagb-icon-list__source-image",
      alt: "",
      src: image.url
    });
  }

  const targetVal = target ? '_blank' : '_self';
  const linkUrl = !disableLink ? link : '/';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-icon-list-repeater', 'uagb-icon-list__wrapper', className, `uagb-block-${block_id}`)
  }, !disableLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    target: targetVal,
    rel: "noopener noreferrer",
    "aria-label": label,
    href: linkUrl
  }, ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "uagb-icon-list__content-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "uagb-icon-list__source-wrap"
  }, imageIconHtml), !hideLabel && '' !== label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "uagb-icon-list__label-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "div",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Label Name', 'ultimate-addons-for-gutenberg'),
    value: label,
    onChange: value => setAttributes({
      label: value
    }),
    className: "uagb-icon-list__label",
    multiline: false,
    allowedFormats: ['core/bold', 'core/italic', 'core/strikethrough']
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map