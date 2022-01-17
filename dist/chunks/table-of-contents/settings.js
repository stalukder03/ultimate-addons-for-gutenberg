(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/table-of-contents/settings"],{

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

/***/ "./src/blocks/table-of-contents/settings.js":
/*!**************************************************!*\
  !*** ./src/blocks/table-of-contents/settings.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/icon-picker */ "./src/components/icon-picker/index.js");
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/border */ "./src/components/border/index.js");
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Components_border__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Components_tabs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





















const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes,
    deviceType
  } = props;
  const {
    align,
    disableBullets,
    makeCollapsible,
    initialCollapse,
    icon,
    iconColor,
    bulletColor,
    iconSize,
    smoothScroll,
    smoothScrollOffset,
    smoothScrollDelay,
    scrollToTop,
    scrollToTopColor,
    scrollToTopBgColor,
    customWidth,
    widthDesktop,
    widthTablet,
    widthMobile,
    widthTypeMobile,
    widthTypeTablet,
    widthTypeDesktop,
    tColumnsDesktop,
    tColumnsTablet,
    tColumnsMobile,
    backgroundColor,
    linkColor,
    linkHoverColor,
    headingColor,
    paddingTypeMobile,
    paddingTypeTablet,
    paddingTypeDesktop,
    topPadding,
    rightPadding,
    bottomPadding,
    leftPadding,
    topPaddingTablet,
    rightPaddingTablet,
    bottomPaddingTablet,
    leftPaddingTablet,
    topPaddingMobile,
    rightPaddingMobile,
    bottomPaddingMobile,
    leftPaddingMobile,
    marginLink,
    paddingLink,
    headingBottom,
    contentPaddingDesktop,
    contentPaddingTablet,
    contentPaddingMobile,
    contentPaddingTypeMobile,
    contentPaddingTypeTablet,
    contentPaddingTypeDesktop,
    topMargin,
    rightMargin,
    bottomMargin,
    leftMargin,
    topMarginTablet,
    rightMarginTablet,
    bottomMarginTablet,
    leftMarginTablet,
    topMarginMobile,
    rightMarginMobile,
    bottomMarginMobile,
    leftMarginMobile,
    marginTypeMobile,
    marginTypeTablet,
    marginTypeDesktop,
    borderStyle,
    borderWidth,
    borderRadius,
    borderColor,
    borderHoverColor,
    loadGoogleFonts,
    fontFamily,
    fontWeight,
    fontSize,
    fontSizeType,
    fontSizeTablet,
    fontSizeMobile,
    lineHeightType,
    lineHeight,
    lineHeightTablet,
    lineHeightMobile,
    headingLoadGoogleFonts,
    headingFontFamily,
    headingFontWeight,
    headingFontSize,
    headingFontSizeType,
    headingFontSizeTablet,
    headingFontSizeMobile,
    headingLineHeightType,
    headingLineHeight,
    headingLineHeightTablet,
    headingLineHeightMobile,
    mappingHeaders,
    fontStyle,
    fontTransform,
    fontDecoration,
    headingFontStyle,
    headingTransform,
    headingDecoration
  } = attributes;
  let loadGFonts;
  let headingloadGFonts;

  if (loadGoogleFonts === true) {
    const config = {
      google: {
        families: [fontFamily + (fontWeight ? ':' + fontWeight : '')]
      }
    };
    loadGFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: config
    });
  }

  if (headingLoadGoogleFonts === true) {
    const headingconfig = {
      google: {
        families: [headingFontFamily + (headingFontWeight ? ':' + headingFontWeight : '')]
      }
    };
    headingloadGFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: headingconfig
    });
  }

  const getGeneralPanelBody = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Choose heading tags to generate table', 'ultimate-addons-for-gutenberg')), mappingHeaders.map((a, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["PanelRow"], {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: `ub_toggle_h${i + 1}`
    }, `H${i + 1}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToggleControl"], {
      id: `ub_toggle_h${i + 1}`,
      checked: a,
      onChange: () => setAttributes({
        mappingHeaders: [...mappingHeaders.slice(0, i), !mappingHeaders[i], ...mappingHeaders.slice(i + 1)]
      })
    }))));
  };

  const getScrollPanelBody = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Scroll', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Smooth Scroll', 'ultimate-addons-for-gutenberg'),
      checked: smoothScroll,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('This will be in action only in Front End.', 'ultimate-addons-for-gutenberg'),
      onChange: () => setAttributes({
        smoothScroll: !smoothScroll
      })
    }), smoothScroll && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Smooth Scroll Offset (px)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: smoothScrollOffset,
      onChange: value => setAttributes({
        smoothScrollOffset: value
      }),
      min: 0,
      max: 1000,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Scroll Animation Delay (ms)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: smoothScrollDelay,
      onChange: value => setAttributes({
        smoothScrollDelay: value
      }),
      min: 100,
      max: 5000,
      displayUnit: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show Scroll To Top', 'ultimate-addons-for-gutenberg'),
      checked: scrollToTop,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('This will add a scroll to top arrow at the bottom of page.', 'ultimate-addons-for-gutenberg'),
      onChange: () => setAttributes({
        scrollToTop: !scrollToTop
      })
    }));
  };

  const getTitle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: headingColor ? headingColor : '',
      onColorChange: value => setAttributes({
        headingColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: headingLoadGoogleFonts,
        label: 'headingLoadGoogleFonts'
      },
      fontFamily: {
        value: headingFontFamily,
        label: 'headingFontFamily'
      },
      fontWeight: {
        value: headingFontWeight,
        label: 'headingFontWeight'
      },
      fontStyle: {
        value: headingFontStyle,
        label: 'headingFontStyle'
      },
      transform: {
        value: headingTransform,
        label: 'headingTransform'
      },
      decoration: {
        value: headingDecoration,
        label: 'headingDecoration'
      },
      fontSizeType: {
        value: headingFontSizeType,
        label: 'headingFontSizeType'
      },
      fontSize: {
        value: headingFontSize,
        label: 'headingFontSize'
      },
      fontSizeMobile: {
        value: headingFontSizeMobile,
        label: 'headingFontSizeMobile'
      },
      fontSizeTablet: {
        value: headingFontSizeTablet,
        label: 'headingFontSizeTablet'
      },
      lineHeightType: {
        value: headingLineHeightType,
        label: 'headingLineHeightType'
      },
      lineHeight: {
        value: headingLineHeight,
        label: 'headingLineHeight'
      },
      lineHeightMobile: {
        value: headingLineHeightMobile,
        label: 'headingLineHeightMobile'
      },
      lineHeightTablet: {
        value: headingLineHeightTablet,
        label: 'headingLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Bottom Space', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: headingBottom,
      onChange: value => setAttributes({
        headingBottom: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }));
  };

  const getContent = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_16__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: align,
        label: 'align'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_14__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_14__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_14__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Columns', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: tColumnsDesktop,
          label: 'tColumnsDesktop'
        },
        tablet: {
          value: tColumnsTablet,
          label: 'tColumnsTablet'
        },
        mobile: {
          value: tColumnsMobile,
          label: 'tColumnsMobile'
        }
      },
      min: 1,
      max: 10,
      displayUnit: false,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Gap Between Lists', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: contentPaddingDesktop,
          label: 'contentPaddingDesktop',
          unit: {
            value: contentPaddingTypeDesktop,
            label: 'contentPaddingTypeDesktop'
          }
        },
        tablet: {
          value: contentPaddingTablet,
          label: 'contentPaddingTablet',
          unit: {
            value: contentPaddingTypeTablet,
            label: 'contentPaddingTypeTablet'
          }
        },
        mobile: {
          value: contentPaddingMobile,
          label: 'contentPaddingMobile',
          unit: {
            value: contentPaddingTypeMobile,
            label: 'contentPaddingTypeMobile'
          }
        }
      },
      min: 0,
      max: 100,
      limitMin: {
        'px': 0,
        '%': 0
      },
      limitMax: {
        'px': 1500,
        '%': 100
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }],
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Custom Width', 'ultimate-addons-for-gutenberg'),
      checked: customWidth,
      onChange: () => setAttributes({
        customWidth: !customWidth
      }),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Table's width will be auto if this is kept off.", 'ultimate-addons-for-gutenberg')
    }), customWidth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: widthDesktop,
          label: 'widthDesktop',
          unit: {
            value: widthTypeDesktop,
            label: 'widthTypeDesktop'
          },
          min: 0,
          max: maxDesk
        },
        tablet: {
          value: widthTablet,
          label: 'widthTablet',
          unit: {
            value: widthTypeTablet,
            label: 'widthTypeTablet'
          },
          min: 0,
          max: maxTab
        },
        mobile: {
          value: widthMobile,
          label: 'widthMobile',
          unit: {
            value: widthTypeMobile,
            label: 'widthTypeMobile'
          },
          min: 0,
          max: maxMob
        }
      },
      min: 0,
      max: 100,
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }],
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Disable Bullet Points', 'ultimate-addons-for-gutenberg'),
      checked: disableBullets,
      onChange: () => setAttributes({
        disableBullets: !disableBullets
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Make Content Collapsible', 'ultimate-addons-for-gutenberg'),
      checked: makeCollapsible,
      onChange: () => setAttributes({
        makeCollapsible: !makeCollapsible
      })
    }), makeCollapsible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Keep Collapsed Initially', 'ultimate-addons-for-gutenberg'),
      checked: initialCollapse,
      onChange: () => setAttributes({
        initialCollapse: !initialCollapse
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: icon,
      onChange: value => setAttributes({
        icon: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Icon Size', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: iconSize,
      onChange: value => setAttributes({
        iconSize: value
      }),
      min: 0,
      max: 300,
      displayUnit: false
    })));
  };

  const getBulletStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Bullet Points', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bulletColor ? bulletColor : '',
      onColorChange: value => setAttributes({
        bulletColor: value
      })
    }));
  };

  const getIconStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: iconColor ? iconColor : '',
      onColorChange: value => setAttributes({
        iconColor: value
      })
    }));
  };

  const getContentStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_13___default.a, {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: linkColor ? linkColor : '',
        onColorChange: value => setAttributes({
          linkColor: value
        })
      }),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: linkHoverColor ? linkHoverColor : '',
        onColorChange: value => setAttributes({
          linkHoverColor: value
        })
      }),
      disableBottomSeparator: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: loadGoogleFonts,
        label: 'loadGoogleFonts'
      },
      fontFamily: {
        value: fontFamily,
        label: 'fontFamily'
      },
      fontWeight: {
        value: fontWeight,
        label: 'fontWeight'
      },
      fontStyle: {
        value: fontStyle,
        label: 'fontStyle'
      },
      transform: {
        value: fontTransform,
        label: 'fontTransform'
      },
      decoration: {
        value: fontDecoration,
        label: 'fontDecoration'
      },
      fontSizeType: {
        value: fontSizeType,
        label: 'fontSizeType'
      },
      fontSize: {
        value: fontSize,
        label: 'fontSize'
      },
      fontSizeMobile: {
        value: fontSizeMobile,
        label: 'fontSizeMobile'
      },
      fontSizeTablet: {
        value: fontSizeTablet,
        label: 'fontSizeTablet'
      },
      lineHeightType: {
        value: lineHeightType,
        label: 'lineHeightType'
      },
      lineHeight: {
        value: lineHeight,
        label: 'lineHeight'
      },
      lineHeightMobile: {
        value: lineHeightMobile,
        label: 'lineHeightMobile'
      },
      lineHeightTablet: {
        value: lineHeightTablet,
        label: 'lineHeightTablet'
      }
    }));
  };

  const getScrollToTop = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Scroll To Top', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Icon Color', 'ultimate-addons-for-gutenberg'),
      colorValue: scrollToTopColor ? scrollToTopColor : '',
      onColorChange: value => setAttributes({
        scrollToTopColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: scrollToTopBgColor ? scrollToTopBgColor : '',
      onColorChange: value => setAttributes({
        scrollToTopBgColor: value
      })
    })));
  };

  const maxDesk = '%' === widthTypeDesktop ? 100 : 1000;
  const maxTab = '%' === widthTypeTablet ? 100 : 1000;
  const maxMob = '%' === widthTypeMobile ? 100 : 1000;

  const getBackground = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: backgroundColor ? backgroundColor : '',
      onColorChange: value => setAttributes({
        backgroundColor: value
      })
    }));
  };

  const getBorder = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Border', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_8___default.a, {
      setAttributes: setAttributes,
      borderStyle: {
        value: borderStyle,
        label: 'borderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Style', 'ultimate-addons-for-gutenberg')
      },
      borderWidth: {
        value: borderWidth,
        label: 'borderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Width', 'ultimate-addons-for-gutenberg')
      },
      borderRadius: {
        value: borderRadius,
        label: 'borderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Radius', 'ultimate-addons-for-gutenberg')
      },
      borderColor: {
        value: borderColor,
        label: 'borderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      borderHoverColor: {
        value: borderHoverColor,
        label: 'borderHoverColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Hover Color', 'ultimate-addons-for-gutenberg')
      },
      disableBottomSeparator: true
    }));
  };

  const getSpacing = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
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
        value: paddingTypeDesktop,
        label: 'paddingTypeDesktop'
      },
      mUnit: {
        value: paddingTypeMobile,
        label: 'paddingTypeMobile'
      },
      tUnit: {
        value: paddingTypeTablet,
        label: 'paddingTypeTablet'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: paddingLink,
        label: 'paddingLink'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
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
        value: marginTypeDesktop,
        label: 'marginTypeDesktop'
      },
      mUnit: {
        value: marginTypeMobile,
        label: 'marginTypeMobile'
      },
      tUnit: {
        value: marginTypeTablet,
        label: 'marginTypeTablet'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: marginLink,
        label: 'marginLink'
      }
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }, !customWidth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["AlignmentToolbar"], {
    value: align,
    onChange: value => {
      setAttributes({
        align: value
      });
    },
    controls: ['left', 'center', 'right']
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["UAGTabs"].general, getGeneralPanelBody(), getScrollPanelBody(), getContent()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["UAGTabs"].style, getTitle(), getContentStyle(), !disableBullets && getBulletStyle(), makeCollapsible && getIconStyle(), scrollToTop && getScrollToTop(), getBackground(), getBorder(), getSpacing()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["UAGTabs"].advance, {
    parentProps: props
  })))), loadGFonts, headingloadGFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Settings));

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