(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/column/settings"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/background/editor.lazy.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/background/editor.lazy.scss ***!
  \***********************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient {\n  margin-top: 24px; }\n", "",{"version":3,"sources":["webpack://./src/components/background/editor.lazy.scss"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,aAAa;EACb,8BAA8B,EAAE;;AAElC;;;;;;;;;;;;;;EAcE,gBAAgB,EAAE","sourcesContent":[".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient {\n  margin-top: 24px; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/column/settings.js":
/*!***************************************!*\
  !*** ./src/blocks/column/settings.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/background */ "./src/components/background/index.js");
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/border */ "./src/components/border/index.js");
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Components_border__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * BLOCK: Column - Settings.
 */












const Settings = props => {
  props = props.parentProps;
  const {
    attributes: {
      topPadding,
      bottomPadding,
      leftPadding,
      rightPadding,
      topPaddingTablet,
      bottomPaddingTablet,
      leftPaddingTablet,
      rightPaddingTablet,
      topPaddingMobile,
      bottomPaddingMobile,
      leftPaddingMobile,
      rightPaddingMobile,
      topMargin,
      bottomMargin,
      leftMargin,
      rightMargin,
      topMarginTablet,
      bottomMarginTablet,
      leftMarginTablet,
      rightMarginTablet,
      topMarginMobile,
      bottomMarginMobile,
      leftMarginMobile,
      rightMarginMobile,
      backgroundType,
      backgroundImage,
      backgroundColor,
      backgroundPosition,
      backgroundAttachment,
      backgroundRepeat,
      backgroundSize,
      backgroundImageColor,
      gradientValue,
      borderStyle,
      borderWidth,
      borderRadius,
      borderColor,
      borderHoverColor,
      overlayType,
      mobilePaddingType,
      tabletPaddingType,
      desktopPaddingType,
      colWidthMobile,
      colWidthTablet,
      colWidth,
      paddingLink,
      marginLink,
      mobileMarginType,
      tabletMarginType,
      desktopMarginType
    },
    setAttributes
  } = props;

  const layoutSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Layout', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content Width (%)', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: colWidth,
          label: 'colWidth'
        },
        tablet: {
          value: colWidthTablet,
          label: 'colWidthTablet'
        },
        mobile: {
          value: colWidthMobile,
          label: 'colWidthMobile'
        }
      },
      min: 0,
      max: 100,
      displayUnit: false,
      setAttributes: setAttributes
    }));
  };

  const spacingSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: topPadding,
        label: 'topPadding'
      },
      valueRight: {
        value: rightPadding,
        label: 'rightPadding'
      },
      valueBottom: {
        value: bottomPadding,
        label: 'bottomPadding'
      },
      valueLeft: {
        value: leftPadding,
        label: 'leftPadding'
      },
      valueTopTablet: {
        value: topPaddingTablet,
        label: 'topPaddingTablet'
      },
      valueRightTablet: {
        value: rightPaddingTablet,
        label: 'rightPaddingTablet'
      },
      valueBottomTablet: {
        value: bottomPaddingTablet,
        label: 'bottomPaddingTablet'
      },
      valueLeftTablet: {
        value: leftPaddingTablet,
        label: 'leftPaddingTablet'
      },
      valueTopMobile: {
        value: topPaddingMobile,
        label: 'topPaddingMobile'
      },
      valueRightMobile: {
        value: rightPaddingMobile,
        label: 'rightPaddingMobile'
      },
      valueBottomMobile: {
        value: bottomPaddingMobile,
        label: 'bottomPaddingMobile'
      },
      valueLeftMobile: {
        value: leftPaddingMobile,
        label: 'leftPaddingMobile'
      },
      unit: {
        value: desktopPaddingType,
        label: 'desktopPaddingType'
      },
      mUnit: {
        value: mobilePaddingType,
        label: 'mobilePaddingType'
      },
      tUnit: {
        value: tabletPaddingType,
        label: 'tabletPaddingType'
      },
      attributes: props.attributes,
      setAttributes: setAttributes,
      link: {
        value: paddingLink,
        label: 'paddingLink'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: topMargin,
        label: 'topMargin'
      },
      valueRight: {
        value: rightMargin,
        label: 'rightMargin'
      },
      valueBottom: {
        value: bottomMargin,
        label: 'bottomMargin'
      },
      valueLeft: {
        value: leftMargin,
        label: 'leftMargin'
      },
      valueTopTablet: {
        value: topMarginTablet,
        label: 'topMarginTablet'
      },
      valueRightTablet: {
        value: rightMarginTablet,
        label: 'rightMarginTablet'
      },
      valueBottomTablet: {
        value: bottomMarginTablet,
        label: 'bottomMarginTablet'
      },
      valueLeftTablet: {
        value: leftMarginTablet,
        label: 'leftMarginTablet'
      },
      valueTopMobile: {
        value: topMarginMobile,
        label: 'topMarginMobile'
      },
      valueRightMobile: {
        value: rightMarginMobile,
        label: 'rightMarginMobile'
      },
      valueBottomMobile: {
        value: bottomMarginMobile,
        label: 'bottomMarginMobile'
      },
      valueLeftMobile: {
        value: leftMarginMobile,
        label: 'leftMarginMobile'
      },
      unit: {
        value: desktopMarginType,
        label: 'desktopMarginType'
      },
      mUnit: {
        value: mobileMarginType,
        label: 'mobileMarginType'
      },
      tUnit: {
        value: tabletMarginType,
        label: 'tabletMarginType'
      },
      attributes: props.attributes,
      setAttributes: setAttributes,
      link: {
        value: marginLink,
        label: 'marginLink'
      }
    })));
  };

  const backgroundSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_background__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      setAttributes: setAttributes,
      backgroundGradient: {
        value: gradientValue,
        label: 'gradientValue'
      },
      backgroundImageColor: {
        value: backgroundImageColor,
        label: 'backgroundImageColor'
      },
      overlayType: {
        value: overlayType,
        label: 'overlayType'
      },
      backgroundSize: {
        value: backgroundSize,
        label: 'backgroundSize'
      },
      backgroundRepeat: {
        value: backgroundRepeat,
        label: 'backgroundRepeat'
      },
      backgroundAttachment: {
        value: backgroundAttachment,
        label: 'backgroundAttachment'
      },
      backgroundPosition: {
        value: backgroundPosition,
        label: 'backgroundPosition'
      },
      backgroundImage: {
        value: backgroundImage,
        label: 'backgroundImage'
      },
      backgroundColor: {
        value: backgroundColor,
        label: 'backgroundColor'
      },
      backgroundType: {
        value: backgroundType,
        label: 'backgroundType'
      },
      backgroundVideoType: {
        value: false
      }
    }, props)));
  };

  const borderSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_3___default.a, {
      setAttributes: setAttributes,
      borderStyle: {
        value: borderStyle,
        label: 'borderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Style', 'ultimate-addons-for-gutenberg')
      },
      borderWidth: {
        value: borderWidth,
        label: 'borderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Width', 'ultimate-addons-for-gutenberg')
      },
      borderRadius: {
        value: borderRadius,
        label: 'borderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Radius', 'ultimate-addons-for-gutenberg')
      },
      borderColor: {
        value: borderColor,
        label: 'borderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      borderHoverColor: {
        value: borderHoverColor,
        label: 'borderHoverColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Hover Color', 'ultimate-addons-for-gutenberg')
      },
      disableBottomSeparator: true
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].general, layoutSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].style, backgroundSettings(), borderSettings(), spacingSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].advance, {
    parentProps: props
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/background/editor.lazy.scss":
/*!****************************************************!*\
  !*** ./src/components/background/editor.lazy.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/background/editor.lazy.scss");

            

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

/***/ "./src/components/background/index.js":
/*!********************************************!*\
  !*** ./src/components/background/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/background/editor.lazy.scss");
/* harmony import */ var _Components_gradient_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/gradient-settings */ "./src/components/gradient-settings/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Components_image__WEBPACK_IMPORTED_MODULE_6__);








const Background = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__["default"].unuse();
    };
  }, []);
  const {
    setAttributes,
    backgroundImageColor,
    overlayType,
    backgroundSize,
    backgroundRepeat,
    backgroundAttachment,
    backgroundPosition,
    backgroundImage,
    backgroundColor,
    backgroundVideoType,
    backgroundType,
    backgroundVideo,
    backgroundVideoColor,
    onOpacityChange
  } = props;

  const onRemoveImage = () => {
    setAttributes({
      [backgroundImage.label]: null
    });
  };

  const onSelectImage = media => {
    if (!media || !media.url) {
      setAttributes({
        [backgroundImage.label]: null
      });
      return;
    }

    if (!media.type || 'image' !== media.type) {
      return;
    }

    setAttributes({
      [backgroundImage.label]: media
    });
  };

  const onRemoveVideo = () => {
    setAttributes({
      [backgroundVideo.label]: null
    });
  };

  const onSelectVideo = media => {
    if (!media || !media.url) {
      setAttributes({
        [backgroundVideo.label]: null
      });
      return;
    }

    if (!media.type || 'video' !== media.type) {
      return;
    }

    setAttributes({
      [backgroundVideo.label]: media
    });
  };

  let bgOptions = [];
  bgOptions = [{
    value: 'none',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('None', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'color',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'gradient',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Gradient', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'image',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image', 'ultimate-addons-for-gutenberg')
  }];

  if (backgroundVideoType.value) {
    bgOptions.push({
      value: 'video',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Video', 'ultimate-addons-for-gutenberg')
    });
  }

  const advancedControls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-background-type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    value: backgroundType.value,
    onChange: value => setAttributes({
      [backgroundType.label]: value
    }),
    options: bgOptions,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Type', 'ultimate-addons-for-gutenberg')
  })), 'color' === backgroundType.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-background-color"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg'),
    colorValue: backgroundColor.value ? backgroundColor.value : '',
    onColorChange: value => setAttributes({
      [backgroundColor.label]: value
    })
  })), 'image' === backgroundType.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-background-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onSelectImage: onSelectImage,
    backgroundImage: backgroundImage.value,
    onRemoveImage: onRemoveImage
  }), backgroundImage.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-background-image-position"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image Position', 'ultimate-addons-for-gutenberg'),
    value: backgroundPosition.value,
    onChange: value => setAttributes({
      [backgroundPosition.label]: value
    }),
    options: [{
      value: 'top-left',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Top Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'top-center',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Top Center', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'top-right',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Top Right', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'center-left',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Center Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'center-center',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Center Center', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'center-right',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Center Right', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'bottom-left',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Bottom Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'bottom-center',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Bottom Center', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'bottom-right',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Bottom Right', 'ultimate-addons-for-gutenberg')
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-background-image-attachment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Attachment', 'ultimate-addons-for-gutenberg'),
    value: backgroundAttachment.value,
    onChange: value => setAttributes({
      [backgroundAttachment.label]: value
    }),
    options: [{
      value: 'fixed',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Fixed', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'scroll',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Scroll', 'ultimate-addons-for-gutenberg')
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-background-image-repeat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Repeat', 'ultimate-addons-for-gutenberg'),
    value: backgroundRepeat.value,
    onChange: value => setAttributes({
      [backgroundRepeat.label]: value
    }),
    options: [{
      value: 'no-repeat',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('No Repeat', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'repeat',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Repeat', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'repeat-x',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Repeat-x', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'repeat-y',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Repeat-y', 'ultimate-addons-for-gutenberg')
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-background-image-size"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size', 'ultimate-addons-for-gutenberg'),
    value: backgroundSize.value,
    onChange: value => setAttributes({
      [backgroundSize.label]: value
    }),
    options: [{
      value: 'auto',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Auto', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'cover',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Cover', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'contain',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Contain', 'ultimate-addons-for-gutenberg')
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-background-image-overlay-type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Overlay Type', 'ultimate-addons-for-gutenberg'),
    value: overlayType.value,
    onChange: value => setAttributes({
      [overlayType.label]: value
    }),
    options: [{
      value: 'color',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'gradient',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Gradient', 'ultimate-addons-for-gutenberg')
    }]
  })), 'color' === overlayType.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-background-image-overlay-color"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image Overlay Color', 'ultimate-addons-for-gutenberg'),
    colorValue: backgroundImageColor.value,
    onColorChange: value => setAttributes({
      [backgroundImageColor.label]: value
    })
  })), 'gradient' === overlayType.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-background-image-overlay-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_gradient_settings__WEBPACK_IMPORTED_MODULE_4__["default"], {
    backgroundGradient: props.backgroundGradient,
    setAttributes: setAttributes
  })))), 'gradient' === backgroundType.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-background-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_gradient_settings__WEBPACK_IMPORTED_MODULE_4__["default"], {
    backgroundGradient: props.backgroundGradient,
    setAttributes: props.setAttributes
  })), 'video' === backgroundType.value && backgroundVideoType.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-background-video"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onSelectImage: onSelectVideo,
    backgroundImage: backgroundVideo.value,
    onRemoveImage: onRemoveVideo,
    showVideoInput: true
  })), 'video' === backgroundType.value && backgroundVideo.value && backgroundVideoType.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-background-video-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Video Overlay Color', 'ultimate-addons-for-gutenberg'),
    colorValue: backgroundVideoColor.value,
    onColorChange: value => setAttributes({
      [backgroundVideoColor.label]: value
    }),
    onOpacityChange: onOpacityChange
  })));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "uag-bg-select-control components-base-control"
  }, advancedControls);
};

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./src/components/gradient-settings/index.js":
/*!***************************************************!*\
  !*** ./src/components/gradient-settings/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);


function GradientSettings(props) {
  const {
    setAttributes,
    backgroundGradient
  } = props;

  const onGradientChange = value => {
    setAttributes({
      [backgroundGradient.label]: value
    });
  };

  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["__experimentalGradientPicker"], {
    value: backgroundGradient.value,
    onChange: onGradientChange
  });
}

/* harmony default export */ __webpack_exports__["default"] = (GradientSettings);

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