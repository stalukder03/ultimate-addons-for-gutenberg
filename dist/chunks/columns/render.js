(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/columns/render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/columns/editor.lazy.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/columns/editor.lazy.scss ***!
  \****************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.uagb-columns__wrap::before {\n  content: \"\";\n  position: absolute;\n  border: 1px dashed #03ddff;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1; }\n\n.uagb-columns__edit-active.uagb-columns__wrap::before {\n  border-color: #035cff; }\n\n.editor-bg-image-control .components-button,\n.editor-bg-video-control .components-button {\n  vertical-align: middle; }\n\n.uagb-editor-preview-mode-tablet.uagb-columns__stack-tablet .block-editor-block-list__layout {\n  flex-direction: column; }\n\n.uagb-editor-preview-mode-mobile.uagb-columns__stack-tablet .block-editor-block-list__layout {\n  flex-direction: column; }\n\n.uagb-editor-preview-mode-mobile.uagb-columns__stack-mobile .block-editor-block-list__layout {\n  flex-direction: column; }\n\n.editor-bg-image-control .components-button:last-child,\n.editor-bg-video-control .components-button:last-child {\n  margin-left: 10px; }\n\n.uagb-columns__wrap > .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: flex;\n  flex-wrap: nowrap; }\n\n.uagb-columns__wrap > .block-editor-inner-blocks,\n.uagb-columns__wrap > .block-editor-block-list__layout {\n  width: 100%;\n  z-index: 2; }\n\n.uagb-columns__columns-1 .block-editor-block-list__block[data-type=\"uagb/column\"] {\n  width: 100%; }\n\n.uagb-columns__columns-2 .block-editor-block-list__block[data-type=\"uagb/column\"] {\n  width: 50%; }\n\n.uagb-columns__columns-3 .block-editor-block-list__block[data-type=\"uagb/column\"] {\n  width: 33.33%; }\n\n.uagb-columns__columns-4 .block-editor-block-list__block[data-type=\"uagb/column\"] {\n  width: 25%; }\n\n.uagb-columns__columns-5 .block-editor-block-list__block[data-type=\"uagb/column\"] {\n  width: 20%; }\n\n.uagb-columns__columns-6 .block-editor-block-list__block[data-type=\"uagb/column\"] {\n  width: 16.66%; }\n\n.wp-block-uagb-columns .block-editor-block-list__layout {\n  margin-left: 0;\n  margin-right: 0; }\n  .wp-block-uagb-columns .block-editor-block-list__layout .editor-block-list__block {\n    max-width: none !important; }\n\n.block-editor-block-list__block[data-type=\"uagb/columns\"] {\n  clear: both; }\n\n.block-editor-block-list__block[data-align=\"center\"][data-type=\"uagb/columns\"] {\n  text-align: inherit; }\n\n.block-editor-block-list__block[data-type=\"uagb/column\"] > .editor-block-contextual-toolbar {\n  top: 38px;\n  transform: translateY(-38px);\n  margin-left: -29px;\n  margin-right: -29px; }\n\n.block-editor-block-list__block[data-type=\"uagb/column\"] > .editor-block-list__insertion-point {\n  top: 0;\n  margin-top: 0; }\n\n.block-editor-block-list__block[data-align=\"full\"] .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout:first-child {\n  margin-left: 30px; }\n\n.block-editor-block-list__block[data-align=\"full\"] .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout:last-child {\n  margin-right: 30px; }\n\n.wp-block-uagb-columns.uagb-columns__valign-center {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.wp-block-uagb-columns.uagb-columns__valign-bottom {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"uagb/column\"] > .block-editor-block-list__block-edit {\n  margin-left: 14px;\n  margin-right: 14px; }\n  .block-editor-block-list__layout .block-editor-block-list__block[data-type=\"uagb/column\"] > .block-editor-block-list__block-edit > div:not(.editor-block-contextual-toolbar) {\n    width: 100%; }\n  .block-editor-block-list__layout .block-editor-block-list__block[data-type=\"uagb/column\"] > .block-editor-block-list__block-edit > .editor-block-contextual-toolbar {\n    position: absolute;\n    top: 0;\n    transform: translateY(-39px); }\n\n.wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"uagb/column\"] > .block-editor-block-list__block-edit::before {\n  bottom: 0;\n  top: 0; }\n\n.block-editor-block-list__block[data-align=\"full\"] .wp-block-uagb-columns {\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.wp-block-uagb-columns {\n  position: relative;\n  z-index: 10;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column; }\n  .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    margin-left: 0;\n    margin-right: 0; }\n    .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"uagb/column\"] {\n      display: flex;\n      flex-direction: column;\n      max-width: none;\n      margin-top: 0;\n      margin-bottom: 0; }\n      .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"uagb/column\"] .block-editor-block-list__block-edit {\n        flex-basis: 100%; }\n\n.wp-block-uagb-columns.uagb-columns__valign-center > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"uagb/column\"] > .block-editor-block-list__block-edit {\n  align-items: center;\n  display: flex; }\n\n.wp-block-uagb-columns.uagb-columns__valign-bottom > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"uagb/column\"] > .block-editor-block-list__block-edit {\n  align-items: flex-end;\n  display: flex; }\n\n.wp-block-uagb-column {\n  width: 100%; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-align=\"full\"][data-type=\"uagb/columns\"] {\n  margin-left: 0;\n  margin-right: 0; }\n\n.edit-post-visual-editor .editor-writing-flow .block-editor-block-list__layout .block-editor-block-list__block[data-type=\"uagb/column\"] > .block-editor-block-list__block-edit {\n  margin-left: 0;\n  margin-right: 0; }\n\n.block-editor-block-list__layout .uagb-column__wrap {\n  z-index: unset;\n  overflow: visible; }\n\n.edit-post-visual-editor .uagb-editor-preview-mode-mobile .block-editor-block-list__block[data-type=\"uagb/column\"] .block-editor-block-list__block-edit {\n  padding-left: 0;\n  padding-right: 0; }\n\n.uagb-editor-preview-mode-tablet.uagb-columns__reverse-tablet.uagb-columns__stack-none > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-mobile.uagb-columns__reverse-tablet.uagb-columns__stack-none > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-mobile.uagb-columns__reverse-mobile.uagb-columns__stack-none > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-tablet.uagb-columns__reverse-tablet.uagb-columns__stack-mobile > .block-editor-inner-blocks > .block-editor-block-list__layout {\n  flex-direction: row-reverse; }\n\n.uagb-editor-preview-mode-mobile.uagb-columns__reverse-mobile.uagb-columns__stack-tablet > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-mobile.uagb-columns__reverse-tablet.uagb-columns__stack-tablet > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-mobile.uagb-columns__reverse-tablet.uagb-columns__stack-mobile > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-mobile.uagb-columns__reverse-mobile.uagb-columns__stack-mobile > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-tablet.uagb-columns__reverse-tablet.uagb-columns__stack-tablet > .block-editor-inner-blocks > .block-editor-block-list__layout {\n  flex-direction: column-reverse; }\n\n#wpwrap .edit-post-visual-editor .uagb-editor-preview-mode-mobile.uagb-columns__stack-mobile > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"uagb/column\"] {\n  flex: none !important;\n  width: 100% !important;\n  margin-right: 0; }\n\n.block-editor-block-list__block[data-type=\"uagb/columns\"] > .block-editor-block-list__block-edit::before {\n  pointer-events: inherit; }\n\n.block-editor-block-list__block[data-type=\"uagb/columns\"] > .editor-block-list__insertion-point {\n  height: 16px; }\n  .block-editor-block-list__block[data-type=\"uagb/columns\"] > .editor-block-list__insertion-point .editor-block-list__insertion-point-inserter {\n    height: 16px; }\n", "",{"version":3,"sources":["webpack://./src/blocks/columns/editor.lazy.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,WAAW;EACX,kBAAkB;EAClB,0BAA0B;EAC1B,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,UAAU,EAAE;;AAEd;EACE,qBAAqB,EAAE;;AAEzB;;EAEE,sBAAsB,EAAE;;AAE1B;EACE,sBAAsB,EAAE;;AAE1B;EACE,sBAAsB,EAAE;;AAE1B;EACE,sBAAsB,EAAE;;AAE1B;;EAEE,iBAAiB,EAAE;;AAErB;EACE,aAAa;EACb,iBAAiB,EAAE;;AAErB;;EAEE,WAAW;EACX,UAAU,EAAE;;AAEd;EACE,WAAW,EAAE;;AAEf;EACE,UAAU,EAAE;;AAEd;EACE,aAAa,EAAE;;AAEjB;EACE,UAAU,EAAE;;AAEd;EACE,UAAU,EAAE;;AAEd;EACE,aAAa,EAAE;;AAEjB;EACE,cAAc;EACd,eAAe,EAAE;EACjB;IACE,0BAA0B,EAAE;;AAEhC;EACE,WAAW,EAAE;;AAEf;EACE,mBAAmB,EAAE;;AAEvB;EACE,SAAS;EACT,4BAA4B;EAC5B,kBAAkB;EAClB,mBAAmB,EAAE;;AAEvB;EACE,MAAM;EACN,aAAa,EAAE;;AAEjB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB,EAAE;;AAEtB;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB,EAAE;;AAE3B;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB,EAAE;;AAE7B;EACE,iBAAiB;EACjB,kBAAkB,EAAE;EACpB;IACE,WAAW,EAAE;EACf;IACE,kBAAkB;IAClB,MAAM;IACN,4BAA4B,EAAE;;AAElC;EACE,SAAS;EACT,MAAM,EAAE;;AAEV;EACE,kBAAkB;EAClB,mBAAmB,EAAE;;AAEvB;EACE,kBAAkB;EAClB,WAAW;EACX,cAAc;EACd,aAAa;EACb,sBAAsB,EAAE;EACxB;IACE,aAAa;IACb,iBAAiB;IACjB,8BAA8B;IAC9B,cAAc;IACd,eAAe,EAAE;IACjB;MACE,aAAa;MACb,sBAAsB;MACtB,eAAe;MACf,aAAa;MACb,gBAAgB,EAAE;MAClB;QACE,gBAAgB,EAAE;;AAE1B;EACE,mBAAmB;EACnB,aAAa,EAAE;;AAEjB;EACE,qBAAqB;EACrB,aAAa,EAAE;;AAEjB;EACE,WAAW,EAAE;;AAEf;EACE,cAAc;EACd,eAAe,EAAE;;AAEnB;EACE,cAAc;EACd,eAAe,EAAE;;AAEnB;EACE,cAAc;EACd,iBAAiB,EAAE;;AAErB;EACE,eAAe;EACf,gBAAgB,EAAE;;AAEpB;;;;EAIE,2BAA2B,EAAE;;AAE/B;;;;;EAKE,8BAA8B,EAAE;;AAElC;EACE,qBAAqB;EACrB,sBAAsB;EACtB,eAAe,EAAE;;AAEnB;EACE,uBAAuB,EAAE;;AAE3B;EACE,YAAY,EAAE;EACd;IACE,YAAY,EAAE","sourcesContent":["/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.uagb-columns__wrap::before {\n  content: \"\";\n  position: absolute;\n  border: 1px dashed #03ddff;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1; }\n\n.uagb-columns__edit-active.uagb-columns__wrap::before {\n  border-color: #035cff; }\n\n.editor-bg-image-control .components-button,\n.editor-bg-video-control .components-button {\n  vertical-align: middle; }\n\n.uagb-editor-preview-mode-tablet.uagb-columns__stack-tablet .block-editor-block-list__layout {\n  flex-direction: column; }\n\n.uagb-editor-preview-mode-mobile.uagb-columns__stack-tablet .block-editor-block-list__layout {\n  flex-direction: column; }\n\n.uagb-editor-preview-mode-mobile.uagb-columns__stack-mobile .block-editor-block-list__layout {\n  flex-direction: column; }\n\n.editor-bg-image-control .components-button:last-child,\n.editor-bg-video-control .components-button:last-child {\n  margin-left: 10px; }\n\n.uagb-columns__wrap > .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: flex;\n  flex-wrap: nowrap; }\n\n.uagb-columns__wrap > .block-editor-inner-blocks,\n.uagb-columns__wrap > .block-editor-block-list__layout {\n  width: 100%;\n  z-index: 2; }\n\n.uagb-columns__columns-1 .block-editor-block-list__block[data-type=\"uagb/column\"] {\n  width: 100%; }\n\n.uagb-columns__columns-2 .block-editor-block-list__block[data-type=\"uagb/column\"] {\n  width: 50%; }\n\n.uagb-columns__columns-3 .block-editor-block-list__block[data-type=\"uagb/column\"] {\n  width: 33.33%; }\n\n.uagb-columns__columns-4 .block-editor-block-list__block[data-type=\"uagb/column\"] {\n  width: 25%; }\n\n.uagb-columns__columns-5 .block-editor-block-list__block[data-type=\"uagb/column\"] {\n  width: 20%; }\n\n.uagb-columns__columns-6 .block-editor-block-list__block[data-type=\"uagb/column\"] {\n  width: 16.66%; }\n\n.wp-block-uagb-columns .block-editor-block-list__layout {\n  margin-left: 0;\n  margin-right: 0; }\n  .wp-block-uagb-columns .block-editor-block-list__layout .editor-block-list__block {\n    max-width: none !important; }\n\n.block-editor-block-list__block[data-type=\"uagb/columns\"] {\n  clear: both; }\n\n.block-editor-block-list__block[data-align=\"center\"][data-type=\"uagb/columns\"] {\n  text-align: inherit; }\n\n.block-editor-block-list__block[data-type=\"uagb/column\"] > .editor-block-contextual-toolbar {\n  top: 38px;\n  transform: translateY(-38px);\n  margin-left: -29px;\n  margin-right: -29px; }\n\n.block-editor-block-list__block[data-type=\"uagb/column\"] > .editor-block-list__insertion-point {\n  top: 0;\n  margin-top: 0; }\n\n.block-editor-block-list__block[data-align=\"full\"] .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout:first-child {\n  margin-left: 30px; }\n\n.block-editor-block-list__block[data-align=\"full\"] .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout:last-child {\n  margin-right: 30px; }\n\n.wp-block-uagb-columns.uagb-columns__valign-center {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.wp-block-uagb-columns.uagb-columns__valign-bottom {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"uagb/column\"] > .block-editor-block-list__block-edit {\n  margin-left: 14px;\n  margin-right: 14px; }\n  .block-editor-block-list__layout .block-editor-block-list__block[data-type=\"uagb/column\"] > .block-editor-block-list__block-edit > div:not(.editor-block-contextual-toolbar) {\n    width: 100%; }\n  .block-editor-block-list__layout .block-editor-block-list__block[data-type=\"uagb/column\"] > .block-editor-block-list__block-edit > .editor-block-contextual-toolbar {\n    position: absolute;\n    top: 0;\n    transform: translateY(-39px); }\n\n.wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"uagb/column\"] > .block-editor-block-list__block-edit::before {\n  bottom: 0;\n  top: 0; }\n\n.block-editor-block-list__block[data-align=\"full\"] .wp-block-uagb-columns {\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.wp-block-uagb-columns {\n  position: relative;\n  z-index: 10;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column; }\n  .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    margin-left: 0;\n    margin-right: 0; }\n    .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"uagb/column\"] {\n      display: flex;\n      flex-direction: column;\n      max-width: none;\n      margin-top: 0;\n      margin-bottom: 0; }\n      .wp-block-uagb-columns > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"uagb/column\"] .block-editor-block-list__block-edit {\n        flex-basis: 100%; }\n\n.wp-block-uagb-columns.uagb-columns__valign-center > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"uagb/column\"] > .block-editor-block-list__block-edit {\n  align-items: center;\n  display: flex; }\n\n.wp-block-uagb-columns.uagb-columns__valign-bottom > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"uagb/column\"] > .block-editor-block-list__block-edit {\n  align-items: flex-end;\n  display: flex; }\n\n.wp-block-uagb-column {\n  width: 100%; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-align=\"full\"][data-type=\"uagb/columns\"] {\n  margin-left: 0;\n  margin-right: 0; }\n\n.edit-post-visual-editor .editor-writing-flow .block-editor-block-list__layout .block-editor-block-list__block[data-type=\"uagb/column\"] > .block-editor-block-list__block-edit {\n  margin-left: 0;\n  margin-right: 0; }\n\n.block-editor-block-list__layout .uagb-column__wrap {\n  z-index: unset;\n  overflow: visible; }\n\n.edit-post-visual-editor .uagb-editor-preview-mode-mobile .block-editor-block-list__block[data-type=\"uagb/column\"] .block-editor-block-list__block-edit {\n  padding-left: 0;\n  padding-right: 0; }\n\n.uagb-editor-preview-mode-tablet.uagb-columns__reverse-tablet.uagb-columns__stack-none > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-mobile.uagb-columns__reverse-tablet.uagb-columns__stack-none > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-mobile.uagb-columns__reverse-mobile.uagb-columns__stack-none > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-tablet.uagb-columns__reverse-tablet.uagb-columns__stack-mobile > .block-editor-inner-blocks > .block-editor-block-list__layout {\n  flex-direction: row-reverse; }\n\n.uagb-editor-preview-mode-mobile.uagb-columns__reverse-mobile.uagb-columns__stack-tablet > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-mobile.uagb-columns__reverse-tablet.uagb-columns__stack-tablet > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-mobile.uagb-columns__reverse-tablet.uagb-columns__stack-mobile > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-mobile.uagb-columns__reverse-mobile.uagb-columns__stack-mobile > .block-editor-inner-blocks > .block-editor-block-list__layout,\n.uagb-editor-preview-mode-tablet.uagb-columns__reverse-tablet.uagb-columns__stack-tablet > .block-editor-inner-blocks > .block-editor-block-list__layout {\n  flex-direction: column-reverse; }\n\n#wpwrap .edit-post-visual-editor .uagb-editor-preview-mode-mobile.uagb-columns__stack-mobile > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type=\"uagb/column\"] {\n  flex: none !important;\n  width: 100% !important;\n  margin-right: 0; }\n\n.block-editor-block-list__block[data-type=\"uagb/columns\"] > .block-editor-block-list__block-edit::before {\n  pointer-events: inherit; }\n\n.block-editor-block-list__block[data-type=\"uagb/columns\"] > .editor-block-list__insertion-point {\n  height: 16px; }\n  .block-editor-block-list__block[data-type=\"uagb/columns\"] > .editor-block-list__insertion-point .editor-block-list__insertion-point-inserter {\n    height: 16px; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/columns/editor.lazy.scss":
/*!*********************************************!*\
  !*** ./src/blocks/columns/editor.lazy.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/columns/editor.lazy.scss");

            

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

/***/ "./src/blocks/columns/render.js":
/*!**************************************!*\
  !*** ./src/blocks/columns/render.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapes */ "./src/blocks/columns/shapes.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/columns/editor.lazy.scss");
/**
 * BLOCK: Columns - Editor Render.
 */



const ALLOWED_BLOCKS = ['uagb/column'];



const Render = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].unuse();
    };
  }, []);
  const {
    attributes,
    isSelected,
    className,
    deviceType
  } = props.parentProps;
  const {
    stack,
    align,
    vAlign,
    tag,
    columnGap,
    backgroundType,
    backgroundVideo,
    columns,
    bottomType,
    topType,
    bottomFlip,
    topFlip,
    reverseTablet,
    reverseMobile,
    topContentAboveShape,
    bottomContentAboveShape
  } = attributes;
  const getColumnsTemplate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    const childColumns = [];

    for (let i = 0; i < columns; i++) {
      childColumns.push(['uagb/column', {
        id: i + 1
      }]);
    }

    return childColumns;
  }, [columns]);
  const topDividerHtml = topType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-columns__shape', 'uagb-columns__shape-top', {
      'uagb-columns__shape-flip': topFlip === true
    }, {
      'uagb-columns__shape-above-content': topContentAboveShape === true
    })
  }, _shapes__WEBPACK_IMPORTED_MODULE_1__["default"][topType]);
  const bottomDividerHtml = bottomType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-columns__shape', 'uagb-columns__shape-bottom', {
      'uagb-columns__shape-flip': bottomFlip === true
    }, {
      'uagb-columns__shape-above-content': bottomContentAboveShape === true
    }),
    "data-negative": "false"
  }, _shapes__WEBPACK_IMPORTED_MODULE_1__["default"][bottomType]);
  const reverseTabletClass = reverseTablet ? 'uagb-columns__reverse-tablet' : '';
  const reverseMobileClass = reverseMobile ? 'uagb-columns__reverse-mobile' : '';
  const CustomTag = `${tag}`;
  const active = isSelected ? 'active' : 'not-active';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomTag, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-columns__wrap', `uagb-columns__background-${backgroundType}`, `uagb-columns__edit-${active}`, `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-columns__stack-${stack}`, `uagb-columns__valign-${vAlign}`, `uagb-columns__gap-${columnGap}`, `align${align}`, reverseTabletClass, reverseMobileClass, `uagb-block-${props.parentProps.clientId.substr(0, 8)}`, `uagb-columns__columns-${columns}`)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-columns__overlay"
  }), topDividerHtml, 'video' === backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-columns__video-wrap"
  }, backgroundVideo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    playsinline: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("source", {
    src: backgroundVideo.url,
    type: "video/mp4"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
    template: getColumnsTemplate,
    templateLock: "all",
    allowedBlocks: ALLOWED_BLOCKS
  }), bottomDividerHtml);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map