(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/faq/settings"],{

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

/***/ "./src/blocks/faq/settings.js":
/*!************************************!*\
  !*** ./src/blocks/faq/settings.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/border */ "./src/components/border/index.js");
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Components_border__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/icon-picker */ "./src/components/icon-picker/index.js");
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Components_tabs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * BLOCK: FAQ
 */





















const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes
  } = props;
  const {
    layout,
    inactiveOtherItems,
    expandFirstItem,
    enableSchemaSupport,
    rowsGap,
    columnsGap,
    align,
    enableSeparator,
    boxBgColor,
    borderStyle,
    borderWidth,
    borderRadius,
    borderColor,
    borderHoverColor,
    questionTextColor,
    questionTextActiveColor,
    questionPaddingTypeDesktop,
    questionPaddingTypeMobile,
    questionPaddingTypeTablet,
    answerTextColor,
    answerPaddingTypeDesktop,
    answerPaddingTypeMobile,
    answerPaddingTypeTablet,
    iconColor,
    iconActiveColor,
    gapBtwIconQUestion,
    questionloadGoogleFonts,
    questionFontFamily,
    questionFontWeight,
    questionFontSizeType,
    questionFontSize,
    questionFontSizeMobile,
    questionFontSizeTablet,
    questionLineHeightType,
    questionLineHeight,
    questionLineHeightMobile,
    questionLineHeightTablet,
    answerloadGoogleFonts,
    answerFontFamily,
    answerFontWeight,
    answerFontSizeType,
    answerFontSize,
    answerFontSizeMobile,
    answerFontSizeTablet,
    answerLineHeightType,
    answerLineHeight,
    answerLineHeightMobile,
    answerLineHeightTablet,
    icon,
    iconActive,
    iconAlign,
    iconSizeType,
    iconSizeMobile,
    iconSizeTablet,
    iconSize,
    columns,
    tcolumns,
    mcolumns,
    enableToggle,
    equalHeight,
    questionLeftPaddingTablet,
    hquestionPaddingTablet,
    vquestionPaddingTablet,
    questionBottomPaddingTablet,
    questionLeftPaddingDesktop,
    hquestionPaddingDesktop,
    vquestionPaddingDesktop,
    questionBottomPaddingDesktop,
    questionLeftPaddingMobile,
    hquestionPaddingMobile,
    vquestionPaddingMobile,
    questionBottomPaddingMobile,
    headingTag,
    answerSpacingLink,
    questionSpacingLink,
    answerTopPadding,
    answerRightPadding,
    answerBottomPadding,
    answerLeftPadding,
    answerTopPaddingTablet,
    answerRightPaddingTablet,
    answerBottomPaddingTablet,
    answerLeftPaddingTablet,
    answerTopPaddingMobile,
    answerRightPaddingMobile,
    answerBottomPaddingMobile,
    answerLeftPaddingMobile,
    answerFontStyle,
    answerTransform,
    answerDecoration,
    questionFontStyle,
    questionTransform,
    questionDecoration
  } = attributes;

  const onchangeIcon = value => {
    const getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_14__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(faqChild => {
      faqChild.attributes.icon = value;
    });
    setAttributes({
      icon: value
    });
  };

  const onchangeActiveIcon = value => {
    const getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_14__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(faqChild => {
      faqChild.attributes.iconActive = value;
    });
    setAttributes({
      iconActive: value
    });
  };

  const onchangeLayout = value => {
    const getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_14__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(faqChild => {
      faqChild.attributes.layout = value;
    });
    setAttributes({
      layout: value
    });
  };

  const onchangeTag = value => {
    const getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_14__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(faqChild => {
      faqChild.attributes.headingTag = value;
    });
    setAttributes({
      headingTag: value
    });
  };

  const faqGeneralSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      data: {
        value: layout,
        label: 'layout'
      },
      onChange: onchangeLayout,
      options: [{
        value: 'accordion',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Accordion', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'grid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Grid', 'ultimate-addons-for-gutenberg')
      }]
    }), 'accordion' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Collapse other items', 'ultimate-addons-for-gutenberg'),
      checked: inactiveOtherItems,
      onChange: () => setAttributes({
        inactiveOtherItems: !inactiveOtherItems
      })
    }), true === inactiveOtherItems && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Expand First Item', 'ultimate-addons-for-gutenberg'),
      checked: expandFirstItem,
      onChange: () => setAttributes({
        expandFirstItem: !expandFirstItem
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Enable Toggle', 'ultimate-addons-for-gutenberg'),
      checked: enableToggle,
      onChange: () => setAttributes({
        enableToggle: !enableToggle
      })
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Enable Schema Support', 'ultimate-addons-for-gutenberg'),
      checked: enableSchemaSupport,
      onChange: () => setAttributes({
        enableSchemaSupport: !enableSchemaSupport
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Enable Separator', 'ultimate-addons-for-gutenberg'),
      checked: enableSeparator,
      onChange: () => setAttributes({
        enableSeparator: !enableSeparator
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Question Tag', 'ultimate-addons-for-gutenberg'),
      value: headingTag,
      onChange: value => onchangeTag(value),
      options: [{
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('P', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }]
    }), 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_5___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Columns', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: columns,
          label: 'columns',
          min: 1,
          max: 6
        },
        tablet: {
          value: tcolumns,
          label: 'tcolumns',
          min: 1,
          max: 4
        },
        mobile: {
          value: mcolumns,
          label: 'mcolumns',
          min: 1,
          max: 2
        }
      },
      min: 1,
      max: 6,
      displayUnit: false,
      setAttributes: setAttributes
    }), 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: align,
        label: 'align'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }));
  };

  const faqIconSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_15___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Expand', 'ultimate-addons-for-gutenberg'),
      value: icon,
      onChange: value => onchangeIcon(value)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_15___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Collapse', 'ultimate-addons-for-gutenberg'),
      value: iconActive,
      onChange: value => onchangeActiveIcon(value)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Icon Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: iconAlign,
        label: 'iconAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'row',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'row-reverse',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }));
  };

  const faqQuestionSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Question', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: questionloadGoogleFonts,
        label: 'questionloadGoogleFonts'
      },
      fontFamily: {
        value: questionFontFamily,
        label: 'questionFontFamily'
      },
      fontWeight: {
        value: questionFontWeight,
        label: 'questionFontWeight'
      },
      fontStyle: {
        value: questionFontStyle,
        label: 'questionFontStyle'
      },
      transform: {
        value: questionTransform,
        label: 'questionTransform'
      },
      decoration: {
        value: questionDecoration,
        label: 'questionDecoration'
      },
      fontSizeType: {
        value: questionFontSizeType,
        label: 'questionFontSizeType'
      },
      fontSize: {
        value: questionFontSize,
        label: 'questionFontSize'
      },
      fontSizeMobile: {
        value: questionFontSizeMobile,
        label: 'questionFontSizeMobile'
      },
      fontSizeTablet: {
        value: questionFontSizeTablet,
        label: 'questionFontSizeTablet'
      },
      lineHeightType: {
        value: questionLineHeightType,
        label: 'questionLineHeightType'
      },
      lineHeight: {
        value: questionLineHeight,
        label: 'questionLineHeight'
      },
      lineHeightMobile: {
        value: questionLineHeightMobile,
        label: 'questionLineHeightMobile'
      },
      lineHeightTablet: {
        value: questionLineHeightTablet,
        label: 'questionLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_16___default.a, {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'active',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Active/Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: questionTextColor,
        onColorChange: value => setAttributes({
          questionTextColor: value
        })
      }),
      active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: questionTextActiveColor,
        onColorChange: value => setAttributes({
          questionTextActiveColor: value
        })
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: vquestionPaddingDesktop,
        label: 'vquestionPaddingDesktop'
      },
      valueRight: {
        value: hquestionPaddingDesktop,
        label: 'hquestionPaddingDesktop'
      },
      valueBottom: {
        value: questionBottomPaddingDesktop,
        label: 'questionBottomPaddingDesktop'
      },
      valueLeft: {
        value: questionLeftPaddingDesktop,
        label: 'questionLeftPaddingDesktop'
      },
      valueTopTablet: {
        value: vquestionPaddingTablet,
        label: 'vquestionPaddingTablet'
      },
      valueRightTablet: {
        value: hquestionPaddingTablet,
        label: 'hquestionPaddingTablet'
      },
      valueBottomTablet: {
        value: questionBottomPaddingTablet,
        label: 'questionBottomPaddingTablet'
      },
      valueLeftTablet: {
        value: questionLeftPaddingTablet,
        label: 'questionLeftPaddingTablet'
      },
      valueTopMobile: {
        value: vquestionPaddingMobile,
        label: 'vquestionPaddingMobile'
      },
      valueRightMobile: {
        value: hquestionPaddingMobile,
        label: 'hquestionPaddingMobile'
      },
      valueBottomMobile: {
        value: questionBottomPaddingMobile,
        label: 'questionBottomPaddingMobile'
      },
      valueLeftMobile: {
        value: questionLeftPaddingMobile,
        label: 'questionLeftPaddingMobile'
      },
      unit: {
        value: questionPaddingTypeDesktop,
        label: 'questionPaddingTypeDesktop'
      },
      mUnit: {
        value: questionPaddingTypeMobile,
        label: 'questionPaddingTypeMobile'
      },
      tUnit: {
        value: questionPaddingTypeTablet,
        label: 'questionPaddingTypeTablet'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: questionSpacingLink,
        label: 'questionSpacingLink'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }]
    })));
  };

  const faqAnswerSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Answer', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: answerTextColor,
      onColorChange: value => setAttributes({
        answerTextColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: answerloadGoogleFonts,
        label: 'answerloadGoogleFonts'
      },
      fontFamily: {
        value: answerFontFamily,
        label: 'answerFontFamily'
      },
      fontWeight: {
        value: answerFontWeight,
        label: 'answerFontWeight'
      },
      fontStyle: {
        value: answerFontStyle,
        label: 'answerFontStyle'
      },
      transform: {
        value: answerTransform,
        label: 'answerTransform'
      },
      decoration: {
        value: answerDecoration,
        label: 'answerDecoration'
      },
      fontSizeType: {
        value: answerFontSizeType,
        label: 'answerFontSizeType'
      },
      fontSize: {
        value: answerFontSize,
        label: 'answerFontSize'
      },
      fontSizeMobile: {
        value: answerFontSizeMobile,
        label: 'answerFontSizeMobile'
      },
      fontSizeTablet: {
        value: answerFontSizeTablet,
        label: 'answerFontSizeTablet'
      },
      lineHeightType: {
        value: answerLineHeightType,
        label: 'answerLineHeightType'
      },
      lineHeight: {
        value: answerLineHeight,
        label: 'answerLineHeight'
      },
      lineHeightMobile: {
        value: answerLineHeightMobile,
        label: 'answerLineHeightMobile'
      },
      lineHeightTablet: {
        value: answerLineHeightTablet,
        label: 'answerLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: answerTopPadding,
        label: 'answerTopPadding'
      },
      valueRight: {
        value: answerRightPadding,
        label: 'answerRightPadding'
      },
      valueBottom: {
        value: answerBottomPadding,
        label: 'answerBottomPadding'
      },
      valueLeft: {
        value: answerLeftPadding,
        label: 'answerLeftPadding'
      },
      valueTopTablet: {
        value: answerTopPaddingTablet,
        label: 'answerTopPaddingTablet'
      },
      valueRightTablet: {
        value: answerRightPaddingTablet,
        label: 'answerRightPaddingTablet'
      },
      valueBottomTablet: {
        value: answerBottomPaddingTablet,
        label: 'answerBottomPaddingTablet'
      },
      valueLeftTablet: {
        value: answerLeftPaddingTablet,
        label: 'answerLeftPaddingTablet'
      },
      valueTopMobile: {
        value: answerTopPaddingMobile,
        label: 'answerTopPaddingMobile'
      },
      valueRightMobile: {
        value: answerRightPaddingMobile,
        label: 'answerRightPaddingMobile'
      },
      valueBottomMobile: {
        value: answerBottomPaddingMobile,
        label: 'answerBottomPaddingMobile'
      },
      valueLeftMobile: {
        value: answerLeftPaddingMobile,
        label: 'answerLeftPaddingMobile'
      },
      unit: {
        value: answerPaddingTypeDesktop,
        label: 'answerPaddingTypeDesktop'
      },
      mUnit: {
        value: answerPaddingTypeMobile,
        label: 'answerPaddingTypeMobile'
      },
      tUnit: {
        value: answerPaddingTypeTablet,
        label: 'answerPaddingTypeTablet'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: answerSpacingLink,
        label: 'answerSpacingLink'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }]
    })));
  };

  const commonStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Container', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: boxBgColor,
      onColorChange: value => setAttributes({
        boxBgColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_8___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Rows Gap (px)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: rowsGap,
      onChange: value => setAttributes({
        rowsGap: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }), 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_8___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Columns Gap (px)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: columnsGap,
      onChange: value => setAttributes({
        columnsGap: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Equal Height', 'ultimate-addons-for-gutenberg'),
      checked: equalHeight,
      onChange: () => setAttributes({
        equalHeight: !equalHeight
      })
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Border', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_13___default.a, {
      setAttributes: setAttributes,
      borderStyle: {
        value: borderStyle,
        label: 'borderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Style', 'ultimate-addons-for-gutenberg')
      },
      borderWidth: {
        value: borderWidth,
        label: 'borderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Width', 'ultimate-addons-for-gutenberg')
      },
      borderRadius: {
        value: borderRadius,
        label: 'borderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Radius', 'ultimate-addons-for-gutenberg')
      },
      borderColor: {
        value: borderColor,
        label: 'borderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      borderHoverColor: {
        value: borderHoverColor,
        label: 'borderHoverColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Hover Color', 'ultimate-addons-for-gutenberg')
      },
      disableBottomSeparator: true
    }));
  };

  const iconStyle = () => {
    if ('accordion' !== layout) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_5___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: iconSize,
          label: 'iconSize'
        },
        tablet: {
          value: iconSizeTablet,
          label: 'iconSizeTablet'
        },
        mobile: {
          value: iconSizeMobile,
          label: 'iconSizeMobile'
        }
      },
      min: 0,
      max: 100,
      unit: {
        value: iconSizeType,
        label: 'iconSizeType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }],
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_8___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Gap between Icon and Question', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: gapBtwIconQUestion,
      onChange: value => setAttributes({
        gapBtwIconQUestion: value
      }),
      min: 0,
      max: 100,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Expand Color', 'ultimate-addons-for-gutenberg'),
      colorValue: iconColor,
      onColorChange: value => setAttributes({
        iconColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Collapse Color', 'ultimate-addons-for-gutenberg'),
      colorValue: iconActiveColor,
      onColorChange: value => setAttributes({
        iconActiveColor: value
      })
    }));
  };

  let loadQuestionGoogleFonts;
  let loadAnswerGoogleFonts;

  if (questionloadGoogleFonts === true) {
    const qconfig = {
      google: {
        families: [questionFontFamily + (questionFontWeight ? ':' + questionFontWeight : '')]
      }
    };
    loadQuestionGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: qconfig
    });
  }

  if (answerloadGoogleFonts === true) {
    const aconfig = {
      google: {
        families: [answerFontFamily + (answerFontWeight ? ':' + answerFontWeight : '')]
      }
    };
    loadAnswerGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: aconfig
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_17__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_11__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_11__["UAGTabs"].general, faqGeneralSettings(), 'accordion' === layout && faqIconSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_11__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_11__["UAGTabs"].style, commonStyle(), iconStyle(), faqQuestionSettings(), faqAnswerSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_11__["UAGTabs"].advance, {
    parentProps: props
  })))), loadQuestionGoogleFonts, loadAnswerGoogleFonts);
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