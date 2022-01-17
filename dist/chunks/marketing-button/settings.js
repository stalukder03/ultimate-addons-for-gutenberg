(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/marketing-button/settings"],{

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\prop-types\\index.js'");

/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webfontloader\\webfontloader.js'");

/***/ }),

/***/ "./src/blocks/marketing-button/settings.js":
/*!*************************************************!*\
  !*** ./src/blocks/marketing-button/settings.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/icon-picker */ "./src/components/icon-picker/index.js");
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/border */ "./src/components/border/index.js");
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Components_border__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Components_tabs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Import all of our Text Options requirements.




















const Settings = props => {
  props = props.parentProps;
  const [isURLPickerOpen, setCount] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    attributes,
    setAttributes,
    deviceType
  } = props;
  const {
    align,
    textAlign,
    link,
    linkTarget,
    titleSpace,
    //Icon
    icon,
    iconPosition,
    iconSpace,
    iconFontSize,
    iconFontSizeMobile,
    iconFontSizeTablet,
    //Colors
    titleColor,
    titleHoverColor,
    prefixColor,
    prefixHoverColor,
    iconColor,
    iconHoverColor,
    //Border
    borderStyle,
    borderWidth,
    borderRadius,
    borderColor,
    borderHoverColor,
    //Background
    backgroundType,
    backgroundColor,
    backgroundHoverColor,
    gradientColor1,
    gradientColor2,
    gradientLocation1,
    gradientLocation2,
    gradientType,
    gradientAngle,
    //Typography
    titleFontFamily,
    titleFontWeight,
    titleFontStyle,
    titleFontSize,
    titleFontSizeType,
    titleFontSizeTablet,
    titleFontSizeMobile,
    titleLineHeightType,
    titleLineHeight,
    titleLineHeightTablet,
    titleLineHeightMobile,
    titleTag,
    prefixFontFamily,
    prefixFontWeight,
    prefixFontStyle,
    prefixFontSize,
    prefixFontSizeType,
    prefixFontSizeTablet,
    prefixFontSizeMobile,
    prefixLineHeightType,
    prefixLineHeight,
    prefixLineHeightTablet,
    prefixLineHeightMobile,
    paddingBtnUnit,
    spacingLink,
    mobilePaddingBtnUnit,
    tabletPaddingBtnUnit,
    paddingBtnTop,
    paddingBtnBottom,
    paddingBtnLeft,
    paddingBtnRight,
    paddingBtnTopTablet,
    paddingBtnRightTablet,
    paddingBtnBottomTablet,
    paddingBtnLeftTablet,
    paddingBtnTopMobile,
    paddingBtnRightMobile,
    paddingBtnBottomMobile,
    paddingBtnLeftMobile,
    titleLoadGoogleFonts,
    prefixLoadGoogleFonts,
    titleTransform,
    titleDecoration,
    prefixTransform,
    prefixDecoration
  } = attributes;

  const onChangeOpensInNewTab = value => {
    setAttributes({
      linkTarget: value
    });
  }; // Load Google fonts for heading.


  let loadTitleGoogleFonts;

  if (titleLoadGoogleFonts === true) {
    const titleconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      config: titleconfig
    });
  } // Load Google fonts for prefix.


  let loadPrefixGoogleFonts;

  if (prefixLoadGoogleFonts === true) {
    const prefixconfig = {
      google: {
        families: [prefixFontFamily + (prefixFontWeight ? ':' + prefixFontWeight : '')]
      }
    };
    loadPrefixGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      config: prefixconfig
    });
  }

  const blockControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["BlockAlignmentToolbar"], {
      value: align,
      onChange: value => {
        setAttributes({
          align: value
        });
      },
      controls: ['left', 'center', 'right', 'full']
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["AlignmentToolbar"], {
      value: textAlign,
      onChange: value => {
        setAttributes({
          textAlign: value
        });
      },
      controls: ['left', 'center', 'right']
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToolbarGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToolbarButton"], {
      icon: "admin-links",
      name: "link",
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link', 'ultimate-addons-for-gutenberg'),
      onClick: () => setCount(true)
    })));
  };

  const linkControl = isURLPickerOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Popover"], {
    position: "bottom center",
    onClose: () => setCount(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["__experimentalLinkControl"], {
    value: {
      url: link,
      opensInNewTab: linkTarget
    },
    onChange: _ref => {
      let {
        url: newURL = '',
        opensInNewTab: newOpensInNewTab
      } = _ref;
      setAttributes({
        link: newURL
      });
      setAttributes({
        linkTarget: newOpensInNewTab
      });
      onChangeOpensInNewTab(newOpensInNewTab);
    }
  }));

  const generalSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: align,
        label: 'align'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'full',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"])('fa fa-align-justify')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Full Width', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: textAlign,
        label: 'textAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link', 'ultimate-addons-for-gutenberg'),
      value: link,
      onChange: value => setAttributes({
        link: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open in new Window', 'ultimate-addons-for-gutenberg'),
      checked: linkTarget,
      onChange: () => setAttributes({
        linkTarget: !linkTarget
      })
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Heading'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: titleTag,
        label: 'titleTag'
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('P', 'ultimate-addons-for-gutenberg')
      }]
    })));
  };

  const buttonSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: icon,
      onChange: value => setAttributes({
        icon: value
      })
    }), '' !== icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Position', 'ultimate-addons-for-gutenberg'),
      data: {
        value: iconPosition,
        label: 'iconPosition'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'before',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Before Text', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Before Text', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'after',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Text', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Text', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Gap Between Icon And Text', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: iconSpace,
      onChange: value => setAttributes({
        iconSpace: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_12___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: iconFontSize,
          label: 'iconFontSize'
        },
        tablet: {
          value: iconFontSizeTablet,
          label: 'iconFontSizeTablet'
        },
        mobile: {
          value: iconFontSizeMobile,
          label: 'iconFontSizeMobile'
        }
      },
      min: 0,
      max: 500,
      displayUnit: false,
      setAttributes: setAttributes
    })));
  };

  const titleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Heading', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: titleSpace,
      onChange: value => setAttributes({
        titleSpace: value
      }),
      min: 0,
      max: 20,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: titleLoadGoogleFonts,
        label: 'titleLoadGoogleFonts'
      },
      fontFamily: {
        value: titleFontFamily,
        label: 'titleFontFamily'
      },
      fontWeight: {
        value: titleFontWeight,
        label: 'titleFontWeight'
      },
      fontStyle: {
        value: titleFontStyle,
        label: 'titleFontStyle'
      },
      fontSizeType: {
        value: titleFontSizeType,
        label: 'titleFontSizeType'
      },
      fontSize: {
        value: titleFontSize,
        label: 'titleFontSize'
      },
      fontSizeMobile: {
        value: titleFontSizeMobile,
        label: 'titleFontSizeMobile'
      },
      fontSizeTablet: {
        value: titleFontSizeTablet,
        label: 'titleFontSizeTablet'
      },
      lineHeightType: {
        value: titleLineHeightType,
        label: 'titleLineHeightType'
      },
      lineHeight: {
        value: titleLineHeight,
        label: 'titleLineHeight'
      },
      lineHeightMobile: {
        value: titleLineHeightMobile,
        label: 'titleLineHeightMobile'
      },
      lineHeightTablet: {
        value: titleLineHeightTablet,
        label: 'titleLineHeightTablet'
      },
      transform: {
        value: titleTransform,
        label: 'titleTransform'
      },
      decoration: {
        value: titleDecoration,
        label: 'titleDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_15___default.a, {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: titleColor ? titleColor : '',
        onColorChange: value => setAttributes({
          titleColor: value
        })
      }),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: titleHoverColor ? titleHoverColor : '',
        onColorChange: value => setAttributes({
          titleHoverColor: value
        })
      }),
      disableBottomSeparator: true
    }));
  };

  const descriptionSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Description', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: prefixLoadGoogleFonts,
        label: 'prefixLoadGoogleFonts'
      },
      fontFamily: {
        value: prefixFontFamily,
        label: 'prefixFontFamily'
      },
      fontWeight: {
        value: prefixFontWeight,
        label: 'prefixFontWeight'
      },
      fontStyle: {
        value: prefixFontStyle,
        label: 'prefixFontStyle'
      },
      fontSizeType: {
        value: prefixFontSizeType,
        label: 'prefixFontSizeType'
      },
      fontSize: {
        value: prefixFontSize,
        label: 'prefixFontSize'
      },
      fontSizeMobile: {
        value: prefixFontSizeMobile,
        label: 'prefixFontSizeMobile'
      },
      fontSizeTablet: {
        value: prefixFontSizeTablet,
        label: 'prefixFontSizeTablet'
      },
      lineHeightType: {
        value: prefixLineHeightType,
        label: 'prefixLineHeightType'
      },
      lineHeight: {
        value: prefixLineHeight,
        label: 'prefixLineHeight'
      },
      lineHeightMobile: {
        value: prefixLineHeightMobile,
        label: 'prefixLineHeightMobile'
      },
      lineHeightTablet: {
        value: prefixLineHeightTablet,
        label: 'prefixLineHeightTablet'
      },
      transform: {
        value: prefixTransform,
        label: 'prefixTransform'
      },
      decoration: {
        value: prefixDecoration,
        label: 'prefixDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_15___default.a, {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: prefixColor ? prefixColor : '',
        onColorChange: value => setAttributes({
          prefixColor: value
        })
      }),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: prefixHoverColor ? prefixHoverColor : '',
        onColorChange: value => setAttributes({
          prefixHoverColor: value
        })
      }),
      disableBottomSeparator: true
    }));
  };

  const iconSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_15___default.a, {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: iconColor ? iconColor : '',
        onColorChange: value => setAttributes({
          iconColor: value
        })
      }),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: iconHoverColor ? iconHoverColor : '',
        onColorChange: value => setAttributes({
          iconHoverColor: value
        })
      }),
      disableBottomSeparator: true
    }));
  };

  const btnPaddingSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: paddingBtnTop,
        label: 'paddingBtnTop'
      },
      valueRight: {
        value: paddingBtnRight,
        label: 'paddingBtnRight'
      },
      valueBottom: {
        value: paddingBtnBottom,
        label: 'paddingBtnBottom'
      },
      valueLeft: {
        value: paddingBtnLeft,
        label: 'paddingBtnLeft'
      },
      valueTopTablet: {
        value: paddingBtnTopTablet,
        label: 'paddingBtnTopTablet'
      },
      valueRightTablet: {
        value: paddingBtnRightTablet,
        label: 'paddingBtnRightTablet'
      },
      valueBottomTablet: {
        value: paddingBtnBottomTablet,
        label: 'paddingBtnBottomTablet'
      },
      valueLeftTablet: {
        value: paddingBtnLeftTablet,
        label: 'paddingBtnLeftTablet'
      },
      valueTopMobile: {
        value: paddingBtnTopMobile,
        label: 'paddingBtnTopMobile'
      },
      valueRightMobile: {
        value: paddingBtnRightMobile,
        label: 'paddingBtnRightMobile'
      },
      valueBottomMobile: {
        value: paddingBtnBottomMobile,
        label: 'paddingBtnBottomMobile'
      },
      valueLeftMobile: {
        value: paddingBtnLeftMobile,
        label: 'paddingBtnLeftMobile'
      },
      unit: {
        value: paddingBtnUnit,
        label: 'paddingBtnUnit'
      },
      mUnit: {
        value: mobilePaddingBtnUnit,
        label: 'mobilePaddingBtnUnit'
      },
      tUnit: {
        value: tabletPaddingBtnUnit,
        label: 'tabletPaddingBtnUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingLink,
        label: 'spacingLink'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }]
    })));
  };

  const backgroundSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Type', 'ultimate-addons-for-gutenberg'),
      data: {
        value: backgroundType,
        label: 'backgroundType'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'transparent',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Transparent', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Transparent', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'color',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'gradient',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Gradient', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Gradient', 'ultimate-addons-for-gutenberg')
      }]
    }), 'color' === backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_15___default.a, {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: backgroundColor ? backgroundColor : '',
        onColorChange: value => setAttributes({
          backgroundColor: value
        })
      })),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: backgroundHoverColor ? backgroundHoverColor : '',
        onColorChange: value => setAttributes({
          backgroundHoverColor: value
        })
      })),
      disableBottomSeparator: true
    })), 'gradient' === backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color 1', 'ultimate-addons-for-gutenberg'),
      colorValue: gradientColor2 ? gradientColor2 : '',
      onColorChange: value => setAttributes({
        gradientColor2: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color 2', 'ultimate-addons-for-gutenberg'),
      colorValue: gradientColor1 ? gradientColor1 : '',
      onColorChange: value => setAttributes({
        gradientColor1: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Type', 'ultimate-addons-for-gutenberg'),
      data: {
        value: gradientType,
        label: 'gradientType'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'linear',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Linear', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Linear', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'radial',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radial', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radial', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Location 1', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: gradientLocation1,
      onChange: value => setAttributes({
        gradientLocation1: value
      }),
      min: 0,
      max: 100,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Location 2', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: gradientLocation2,
      onChange: value => setAttributes({
        gradientLocation2: value
      }),
      min: 0,
      max: 100,
      displayUnit: false
    }), 'linear' === gradientType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Angle', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: gradientAngle,
      onChange: value => setAttributes({
        gradientAngle: value
      }),
      min: 0,
      max: 360,
      displayUnit: false
    })));
  };

  const borderSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_13___default.a, {
      setAttributes: setAttributes,
      borderStyle: {
        value: borderStyle,
        label: 'borderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg')
      },
      borderWidth: {
        value: borderWidth,
        label: 'borderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg')
      },
      borderRadius: {
        value: borderRadius,
        label: 'borderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radius', 'ultimate-addons-for-gutenberg')
      },
      borderColor: {
        value: borderColor,
        label: 'borderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      borderHoverColor: {
        value: borderHoverColor,
        label: 'borderHoverColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      },
      disableBottomSeparator: true
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }, blockControls(), linkControl, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["UAGTabs"].general, generalSettings(), buttonSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["UAGTabs"].style, titleSettings(), descriptionSettings(), '' !== icon && iconSettings(), backgroundSettings(), borderSettings(), btnPaddingSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["UAGTabs"].advance, {
    parentProps: props
  })))), loadTitleGoogleFonts, loadPrefixGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/icon-picker/index.js":
/*!*********************************************!*\
  !*** ./src/components/icon-picker/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\babel-loader\\lib\\index.js'\n    at Object.openSync (fs.js:498:3)\n    at Object.readFileSync (fs.js:394:35)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1099:18)\n    at Module.load (internal/modules/cjs/loader.js:937:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:778:12)\n    at Module.require (internal/modules/cjs/loader.js:961:19)\n    at require (internal/modules/cjs/helpers.js:92:18)\n    at loadLoader (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\loadLoader.js:18:17)\n    at iteratePitchingLoaders (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)");

/***/ }),

/***/ "./src/components/typography/fontloader.js":
/*!*************************************************!*\
  !*** ./src/components/typography/fontloader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
if (googlefonts === undefined) {
  var googlefonts = []; // eslint-disable-line no-var
}




const statuses = {
  inactive: 'inactive',
  active: 'active',
  loading: 'loading'
};

const noop = () => {};

const WebfontLoader = props => {
  const [value, setValue] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const status = undefined;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    loadFonts();
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const {
      onStatus,
      config
    } = props;

    if (status !== value.status) {
      onStatus(value.status);
    }

    if (config !== value.config) {
      loadFonts();
    }
  }, [props]);

  const handleLoading = () => {
    setValue({
      status: statuses.loading
    });
  };

  const addFont = font => {
    if (!googlefonts.includes(font)) {
      googlefonts.push(font);
    }
  };

  const handleActive = () => {
    setValue({
      status: statuses.active
    });
  };

  const handleInactive = () => {
    setValue({
      status: statuses.inactive
    });
  };

  const loadFonts = () => {
    if (!googlefonts.includes(props.config.google.families[0])) {
      webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({ ...props.config,
        loading: handleLoading,
        active: handleActive,
        inactive: handleInactive
      });
      addFont(props.config.google.families[0]);
    }
  };

  const {
    children
  } = props;
  return children || null;
};

WebfontLoader.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element,
  onStatus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
WebfontLoader.defaultProps = {
  onStatus: noop
};
/* harmony default export */ __webpack_exports__["default"] = (WebfontLoader);

/***/ })

}]);
//# sourceMappingURL=settings.js.map