(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/price-list-child/settings"],{

/***/ "./src/blocks/price-list-child/settings.js":
/*!*************************************************!*\
  !*** ./src/blocks/price-list-child/settings.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Components_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");








const Settings = props => {
  props = props.parentProps;
  const {
    setAttributes,
    attributes
  } = props; // Setup the attributes.

  const {
    headingAlign,
    imagePosition,
    image
  } = attributes;

  const onSelectRestImage = media => {
    let imageUrl = null;

    if (!media || !media.url) {
      imageUrl = null;
    } else {
      imageUrl = media;
    }

    if (!media.type || 'image' !== media.type) {
      imageUrl = null;
    }

    setAttributes({
      image: imageUrl
    });
  };
  /*
   * Event to set Image as null while removing.
   */


  const onRemoveRestImage = () => {
    setAttributes({
      image: null
    });
  };

  const blockControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, imagePosition === 'top' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], {
      key: "controls"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["AlignmentToolbar"], {
      value: headingAlign,
      onChange: value => setAttributes({
        headingAlign: value
      })
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tabs: ['general', 'advance']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].general, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_6__["default"], {
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "uagb-settings-notice"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('For the common styling options please select the Parent Block of this Price List Item.')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onSelectImage: onSelectRestImage,
    backgroundImage: image,
    onRemoveImage: onRemoveRestImage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].advance))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/image/index.js":
/*!***************************************!*\
  !*** ./src/components/image/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\babel-loader\\lib\\index.js'\n    at Object.openSync (fs.js:498:3)\n    at Object.readFileSync (fs.js:394:35)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1099:18)\n    at Module.load (internal/modules/cjs/loader.js:937:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:778:12)\n    at Module.require (internal/modules/cjs/loader.js:961:19)\n    at require (internal/modules/cjs/helpers.js:92:18)\n    at loadLoader (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\loadLoader.js:18:17)\n    at iteratePitchingLoaders (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)");

/***/ })

}]);
//# sourceMappingURL=settings.js.map