(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/social-share-child/settings"],{

/***/ "./src/blocks/social-share-child/settings.js":
/*!***************************************************!*\
  !*** ./src/blocks/social-share-child/settings.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/icon-picker */ "./src/components/icon-picker/index.js");
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Components_tabs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Components_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * BLOCK: Social Share - Settings.
 */
// Import classes













const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes
  } = props;
  const {
    type,
    image_icon,
    icon,
    image,
    icon_color,
    icon_hover_color,
    icon_bg_color,
    icon_bg_hover_color
  } = attributes;
  /*
   * Event to set Image as while adding.
   */

  const onSelectImage = media => {
    if (!media || !media.url) {
      setAttributes({
        image: null
      });
      return;
    }

    if (!media.type || 'image' !== media.type) {
      setAttributes({
        image: null
      });
      return;
    }

    setAttributes({
      image: media
    });
  };
  /*
   * Event to set Image as null while removing.
   */


  const onRemoveImage = () => {
    setAttributes({
      image: ''
    });
  };

  const onChangeType = value => {
    const icon_mapping = {
      facebook: 'fab fa-facebook',
      twitter: 'fab fa-twitter-square',
      google: 'fab fa-google-plus-square',
      pinterest: 'fab fa-pinterest-square',
      linkedin: 'fab fa-linkedin',
      digg: 'fab fa-digg',
      blogger: 'fab fa-blogger',
      reddit: 'fab fa-reddit-square',
      stumbleupon: 'fab fa-stumbleupon-circle',
      tumblr: 'fab fa-tumblr-square',
      myspace: 'fas fa-user-friends',
      email: 'fas fa-envelope',
      pocket: 'fab fa-get-pocket',
      vk: 'fab fa-vk',
      odnoklassniki: 'fab fa-odnoklassniki',
      skype: 'fab fa-skype',
      telegram: 'fab fa-telegram',
      whatsapp: 'fab fa-whatsapp',
      xing: 'fab fa-xing',
      buffer: 'fab fa-buffer'
    };
    setAttributes({
      type: value
    });
    setAttributes({
      icon: icon_mapping[value]
    });
  };

  const generalSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_11__["default"], {
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Type'),
      value: type,
      options: [{
        value: 'facebook',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Facebook', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'twitter',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Twitter', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'google',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Google Currents', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'pinterest',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pinterest', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'linkedin',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('LinkedIn', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'digg',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Digg', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'blogger',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Blogger', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'reddit',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reddit', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stumbleupon',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('StumbleUpon', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tumblr',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tumblr', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'myspace',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Myspace', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'email',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Email', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'pocket',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pocket', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vk',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('VK', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'odnoklassniki',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Odnoklassniki', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'skype',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Skype', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'telegram',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Telegram', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'whatsapp',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('WhatsApp', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'xing',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Xing', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'buffer',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Buffer', 'ultimate-addons-for-gutenberg')
      }],
      onChange: onChangeType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image / Icon', 'ultimate-addons-for-gutenberg'),
      data: {
        value: image_icon,
        label: 'image_icon'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'icon',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'image',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false
    }), 'icon' === image_icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: icon,
      onChange: value => setAttributes({
        icon: value
      })
    })), 'image' === image_icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_10___default.a, {
      onSelectImage: onSelectImage,
      backgroundImage: image,
      onRemoveImage: onRemoveImage
    })));
  };

  const iconColorSettings = () => {
    let colorControl = '';
    let colorControlHover = '';

    if ('image' === image_icon) {
      colorControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: icon_bg_color ? icon_bg_color : '',
        onColorChange: value => setAttributes({
          icon_bg_color: value
        })
      }));
      colorControlHover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: icon_bg_hover_color ? icon_bg_hover_color : '',
        onColorChange: value => setAttributes({
          icon_bg_hover_color: value
        })
      }));
    } else {
      colorControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: icon_color ? icon_color : '',
        onColorChange: value => setAttributes({
          icon_color: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: icon_bg_color ? icon_bg_color : '',
        onColorChange: value => setAttributes({
          icon_bg_color: value
        })
      }));
      colorControlHover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: icon_hover_color ? icon_hover_color : '',
        onColorChange: value => setAttributes({
          icon_hover_color: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: icon_bg_hover_color ? icon_bg_hover_color : '',
        onColorChange: value => setAttributes({
          icon_bg_hover_color: value
        })
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon Color', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_9___default.a, {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: colorControl,
      hover: colorControlHover,
      disableBottomSeparator: true
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].general, generalSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].style, iconColorSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].advance, {
    parentProps: props
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/icon-picker/index.js":
/*!*********************************************!*\
  !*** ./src/components/icon-picker/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\babel-loader\\lib\\index.js'\n    at Object.openSync (fs.js:498:3)\n    at Object.readFileSync (fs.js:394:35)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1099:18)\n    at Module.load (internal/modules/cjs/loader.js:937:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:778:12)\n    at Module.require (internal/modules/cjs/loader.js:961:19)\n    at require (internal/modules/cjs/helpers.js:92:18)\n    at loadLoader (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\loadLoader.js:18:17)\n    at iteratePitchingLoaders (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)");

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