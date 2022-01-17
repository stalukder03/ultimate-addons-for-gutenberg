(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/tabs/settings"],{

/***/ "./src/blocks/tabs/settings.js":
/*!*************************************!*\
  !*** ./src/blocks/tabs/settings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/icon-picker */ "./src/components/icon-picker/index.js");
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_responsive_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/responsive-select */ "./src/components/responsive-select/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/border */ "./src/components/border/index.js");
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Components_border__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Components_tabs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



















const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes
  } = props;
  const {
    tabsStyleD,
    tabsStyleM,
    tabsStyleT,
    tabActiveFrontend,
    tabHeaders,
    headerBgColor,
    borderStyle,
    borderWidth,
    borderRadius,
    borderColor,
    borderHoverColor,
    headerTextColor,
    activeTabBgColor,
    activeTabTextColor,
    bodyBgColor,
    bodyTextColor,
    tabTitleLeftMargin,
    tabTitleRightMargin,
    tabTitleTopMargin,
    tabTitleBottomMargin,
    tabTitleLeftMarginTablet,
    tabTitleRightMarginTablet,
    tabTitleTopMarginTablet,
    tabTitleBottomMarginTablet,
    tabTitleLeftMarginMobile,
    tabTitleRightMarginMobile,
    tabTitleTopMarginMobile,
    tabTitleBottomMarginMobile,
    tabTitleMarginUnit,
    mobiletabTitleMarginUnit,
    tablettabTitleMarginUnit,
    tabTitleMarginLink,
    tabTitleTopPadding,
    tabTitleRightPadding,
    tabTitleBottomPadding,
    tabTitleLeftPadding,
    tabTitleTopPaddingTablet,
    tabTitleRightPaddingTablet,
    tabTitleBottomPaddingTablet,
    tabTitleLeftPaddingTablet,
    tabTitleTopPaddingMobile,
    tabTitleRightPaddingMobile,
    tabTitleBottomPaddingMobile,
    tabTitleLeftPaddingMobile,
    tabTitlePaddingUnit,
    mobiletabTitlePaddingUnit,
    tablettabTitlePaddingUnit,
    tabTitlePaddingLink,
    tabBodyLeftMargin,
    tabBodyRightMargin,
    tabBodyTopMargin,
    tabBodyBottomMargin,
    tabBodyLeftMarginTablet,
    tabBodyRightMarginTablet,
    tabBodyTopMarginTablet,
    tabBodyBottomMarginTablet,
    tabBodyLeftMarginMobile,
    tabBodyRightMarginMobile,
    tabBodyTopMarginMobile,
    tabBodyBottomMarginMobile,
    tabBodyMarginUnit,
    mobiletabBodyMarginUnit,
    tablettabBodyMarginUnit,
    tabBodyMarginLink,
    tabBodyTopPadding,
    tabBodyRightPadding,
    tabBodyBottomPadding,
    tabBodyLeftPadding,
    tabBodyTopPaddingTablet,
    tabBodyRightPaddingTablet,
    tabBodyBottomPaddingTablet,
    tabBodyLeftPaddingTablet,
    tabBodyTopPaddingMobile,
    tabBodyRightPaddingMobile,
    tabBodyBottomPaddingMobile,
    tabBodyLeftPaddingMobile,
    tabBodyPaddingUnit,
    mobiletabBodyPaddingUnit,
    tablettabBodyPaddingUnit,
    tabBodyPaddingLink,
    titleLoadGoogleFonts,
    titleFontFamily,
    titleFontWeight,
    titleFontSizeType,
    titleFontSize,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleLineHeightType,
    titleLineHeight,
    titleLineHeightMobile,
    titleLineHeightTablet,
    titleTransform,
    titleDecoration,
    titleAlign,
    tabAlign,
    showIcon,
    icon,
    iconColor,
    iconPosition,
    iconSpacing,
    iconSize,
    activeiconColor,
    titleFontStyle
  } = attributes;

  const tabStyleSettings = () => {
    const tabsStyleOptions = {
      desktop: [{
        value: 'hstyle1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle7',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 7', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle8',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 8', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle9',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 9', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle10',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 10', 'ultimate-addons-for-gutenberg')
      }],
      tablet: [{
        value: 'hstyle1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle7',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 7', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle8',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 8', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle9',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 9', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle10',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 10', 'ultimate-addons-for-gutenberg')
      }],
      mobile: [{
        value: 'hstyle1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle7',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 7', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle8',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 8', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle9',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 9', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle10',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 10', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stack1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Stack Style 11', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stack2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Stack Style 12', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stack3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Stack Style 13', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stack4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Stack Style 14', 'ultimate-addons-for-gutenberg')
      }]
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_responsive_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: tabsStyleD,
          label: 'tabsStyleD'
        },
        tablet: {
          value: tabsStyleT,
          label: 'tabsStyleT'
        },
        mobile: {
          value: tabsStyleM,
          label: 'tabsStyleM'
        }
      },
      options: tabsStyleOptions,
      setAttributes: setAttributes
    }));
  };

  const tabTitleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Tabs Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Initial Open Tab', 'ultimate-addons-for-gutenberg'),
      value: tabActiveFrontend,
      options: tabHeaders.map((tab, index) => {
        return {
          value: index,
          label: tab
        };
      }),
      onChange: value => setAttributes({
        tabActiveFrontend: parseInt(value)
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Tab Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: tabAlign,
        label: 'tabAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Text Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: titleAlign,
        label: 'titleAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Enable Icon', 'ultimate-addons-for-gutenberg'),
      checked: showIcon,
      onChange: () => setAttributes({
        showIcon: !showIcon
      })
    }), showIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Tab Icon', 'ultimate-addons-for-gutenberg'),
      value: icon,
      onChange: value => setAttributes({
        icon: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Icon Position', 'ultimate-addons-for-gutenberg'),
      data: {
        value: iconPosition,
        label: 'iconPosition'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Bottom', 'ultimate-addons-for-gutenberg')
      }]
    })));
  };

  const tabBorderSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Border', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_8___default.a, {
      setAttributes: setAttributes,
      borderStyle: {
        value: borderStyle,
        label: 'borderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Style', 'ultimate-addons-for-gutenberg')
      },
      borderWidth: {
        value: borderWidth,
        label: 'borderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Width', 'ultimate-addons-for-gutenberg')
      },
      borderRadius: {
        value: borderRadius,
        label: 'borderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Radius', 'ultimate-addons-for-gutenberg')
      },
      borderColor: {
        value: borderColor,
        label: 'borderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      borderHoverColor: {
        value: borderHoverColor,
        label: 'borderHoverColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Hover Color', 'ultimate-addons-for-gutenberg')
      },
      disableBottomSeparator: true
    }));
  };

  const tabBodySettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Body', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bodyBgColor,
      onColorChange: value => setAttributes({
        bodyBgColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bodyTextColor,
      onColorChange: value => setAttributes({
        bodyTextColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: tabBodyTopMargin,
        label: 'tabBodyTopMargin'
      },
      valueRight: {
        value: tabBodyRightMargin,
        label: 'tabBodyRightMargin'
      },
      valueBottom: {
        value: tabBodyBottomMargin,
        label: 'tabBodyBottomMargin'
      },
      valueLeft: {
        value: tabBodyLeftMargin,
        label: 'tabBodyLeftMargin'
      },
      valueTopTablet: {
        value: tabBodyTopMarginTablet,
        label: 'tabBodyTopMarginTablet'
      },
      valueRightTablet: {
        value: tabBodyRightMarginTablet,
        label: 'tabBodyRightMarginTablet'
      },
      valueBottomTablet: {
        value: tabBodyBottomMarginTablet,
        label: 'tabBodyBottomMarginTablet'
      },
      valueLeftTablet: {
        value: tabBodyLeftMarginTablet,
        label: 'tabBodyLeftMarginTablet'
      },
      valueTopMobile: {
        value: tabBodyTopMarginMobile,
        label: 'tabBodyTopMarginMobile'
      },
      valueRightMobile: {
        value: tabBodyRightMarginMobile,
        label: 'tabBodyRightMarginMobile'
      },
      valueBottomMobile: {
        value: tabBodyBottomMarginMobile,
        label: 'tabBodyBottomMarginMobile'
      },
      valueLeftMobile: {
        value: tabBodyLeftMarginMobile,
        label: 'tabBodyLeftMarginMobile'
      },
      unit: {
        value: tabBodyMarginUnit,
        label: 'tabBodyMarginUnit'
      },
      mUnit: {
        value: mobiletabBodyMarginUnit,
        label: 'mobiletabBodyMarginUnit'
      },
      tUnit: {
        value: tablettabBodyMarginUnit,
        label: 'tablettabBodyMarginUnit'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: tabBodyMarginLink,
        label: 'tabBodyMarginLink'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: tabBodyTopPadding,
        label: 'tabBodyTopPadding'
      },
      valueRight: {
        value: tabBodyRightPadding,
        label: 'tabBodyRightPadding'
      },
      valueBottom: {
        value: tabBodyBottomPadding,
        label: 'tabBodyBottomPadding'
      },
      valueLeft: {
        value: tabBodyLeftPadding,
        label: 'tabBodyLeftPadding'
      },
      valueTopTablet: {
        value: tabBodyTopPaddingTablet,
        label: 'tabBodyTopPaddingTablet'
      },
      valueRightTablet: {
        value: tabBodyRightPaddingTablet,
        label: 'tabBodyRightPaddingTablet'
      },
      valueBottomTablet: {
        value: tabBodyBottomPaddingTablet,
        label: 'tabBodyBottomPaddingTablet'
      },
      valueLeftTablet: {
        value: tabBodyLeftPaddingTablet,
        label: 'tabBodyLeftPaddingTablet'
      },
      valueTopMobile: {
        value: tabBodyTopPaddingMobile,
        label: 'tabBodyTopPaddingMobile'
      },
      valueRightMobile: {
        value: tabBodyRightPaddingMobile,
        label: 'tabBodyRightPaddingMobile'
      },
      valueBottomMobile: {
        value: tabBodyBottomPaddingMobile,
        label: 'tabBodyBottomPaddingMobile'
      },
      valueLeftMobile: {
        value: tabBodyLeftPaddingMobile,
        label: 'tabBodyLeftPaddingMobile'
      },
      unit: {
        value: tabBodyPaddingUnit,
        label: 'tabBodyPaddingUnit'
      },
      mUnit: {
        value: mobiletabBodyPaddingUnit,
        label: 'mobiletabBodyPaddingUnit'
      },
      tUnit: {
        value: tablettabBodyPaddingUnit,
        label: 'tablettabBodyPaddingUnit'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: tabBodyPaddingLink,
        label: 'tabBodyPaddingLink'
      }
    })));
  };

  const tabTitleStyle = () => {
    const tabOutputNormal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: headerTextColor,
      onColorChange: value => setAttributes({
        headerTextColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: headerBgColor,
      onColorChange: value => setAttributes({
        headerBgColor: value
      })
    }));
    const tabOutputActive = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: activeTabTextColor,
      onColorChange: value => setAttributes({
        activeTabTextColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: activeTabBgColor,
      onColorChange: value => setAttributes({
        activeTabBgColor: value
      })
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_11___default.a, {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'active',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Active', 'ultimate-addons-for-gutenberg')
      }],
      normal: tabOutputNormal,
      active: tabOutputActive
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: tabTitleTopMargin,
        label: 'tabTitleTopMargin'
      },
      valueRight: {
        value: tabTitleRightMargin,
        label: 'tabTitleRightMargin'
      },
      valueBottom: {
        value: tabTitleBottomMargin,
        label: 'tabTitleBottomMargin'
      },
      valueLeft: {
        value: tabTitleLeftMargin,
        label: 'tabTitleLeftMargin'
      },
      valueTopTablet: {
        value: tabTitleTopMarginTablet,
        label: 'tabTitleTopMarginTablet'
      },
      valueRightTablet: {
        value: tabTitleRightMarginTablet,
        label: 'tabTitleRightMarginTablet'
      },
      valueBottomTablet: {
        value: tabTitleBottomMarginTablet,
        label: 'tabTitleBottomMarginTablet'
      },
      valueLeftTablet: {
        value: tabTitleLeftMarginTablet,
        label: 'tabTitleLeftMarginTablet'
      },
      valueTopMobile: {
        value: tabTitleTopMarginMobile,
        label: 'tabTitleTopMarginMobile'
      },
      valueRightMobile: {
        value: tabTitleRightMarginMobile,
        label: 'tabTitleRightMarginMobile'
      },
      valueBottomMobile: {
        value: tabTitleBottomMarginMobile,
        label: 'tabTitleBottomMarginMobile'
      },
      valueLeftMobile: {
        value: tabTitleLeftMarginMobile,
        label: 'tabTitleLeftMarginMobile'
      },
      unit: {
        value: tabTitleMarginUnit,
        label: 'tabTitleMarginUnit'
      },
      mUnit: {
        value: mobiletabTitleMarginUnit,
        label: 'mobiletabTitleMarginUnit'
      },
      tUnit: {
        value: tablettabTitleMarginUnit,
        label: 'tablettabTitleMarginUnit'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: tabTitleMarginLink,
        label: 'tabTitleMarginLink'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: tabTitleTopPadding,
        label: 'tabTitleTopPadding'
      },
      valueRight: {
        value: tabTitleRightPadding,
        label: 'tabTitleRightPadding'
      },
      valueBottom: {
        value: tabTitleBottomPadding,
        label: 'tabTitleBottomPadding'
      },
      valueLeft: {
        value: tabTitleLeftPadding,
        label: 'tabTitleLeftPadding'
      },
      valueTopTablet: {
        value: tabTitleTopPaddingTablet,
        label: 'tabTitleTopPaddingTablet'
      },
      valueRightTablet: {
        value: tabTitleRightPaddingTablet,
        label: 'tabTitleRightPaddingTablet'
      },
      valueBottomTablet: {
        value: tabTitleBottomPaddingTablet,
        label: 'tabTitleBottomPaddingTablet'
      },
      valueLeftTablet: {
        value: tabTitleLeftPaddingTablet,
        label: 'tabTitleLeftPaddingTablet'
      },
      valueTopMobile: {
        value: tabTitleTopPaddingMobile,
        label: 'tabTitleTopPaddingMobile'
      },
      valueRightMobile: {
        value: tabTitleRightPaddingMobile,
        label: 'tabTitleRightPaddingMobile'
      },
      valueBottomMobile: {
        value: tabTitleBottomPaddingMobile,
        label: 'tabTitleBottomPaddingMobile'
      },
      valueLeftMobile: {
        value: tabTitleLeftPaddingMobile,
        label: 'tabTitleLeftPaddingMobile'
      },
      unit: {
        value: tabTitlePaddingUnit,
        label: 'tabTitlePaddingUnit'
      },
      mUnit: {
        value: mobiletabTitlePaddingUnit,
        label: 'mobiletabTitlePaddingUnit'
      },
      tUnit: {
        value: tablettabTitlePaddingUnit,
        label: 'tablettabTitlePaddingUnit'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: tabTitlePaddingLink,
        label: 'tabTitlePaddingLink'
      }
    })));
  };

  const tabIconStyle = () => {
    if (!showIcon) {
      return '';
    }

    const tabOutputNormal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: iconColor,
      onColorChange: value => setAttributes({
        iconColor: value
      })
    });
    const tabOutputActive = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: activeiconColor,
      onColorChange: value => setAttributes({
        activeiconColor: value
      })
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: iconSpacing,
      onChange: value => setAttributes({
        iconSpacing: value
      }),
      min: 0,
      max: 500,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_11___default.a, {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'active',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Active', 'ultimate-addons-for-gutenberg')
      }],
      normal: tabOutputNormal,
      active: tabOutputActive
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: iconSize,
      onChange: value => setAttributes({
        iconSize: value
      }),
      min: 0,
      max: 500,
      displayUnit: false
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["BlockControls"], {
    key: "controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["BlockAlignmentToolbar"], {
    value: tabAlign,
    onChange: value => setAttributes({
      tabAlign: value
    }),
    controls: ['left', 'center', 'right']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["AlignmentToolbar"], {
    value: titleAlign,
    onChange: value => setAttributes({
      titleAlign: value
    }),
    controls: ['left', 'center', 'right']
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].general, tabStyleSettings(), tabTitleSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].style, tabTitleStyle(), tabIconStyle(), tabBodySettings(), tabBorderSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].advance, {
    parentProps: props
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/icon-picker/index.js":
/*!*********************************************!*\
  !*** ./src/components/icon-picker/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\babel-loader\\lib\\index.js'\n    at Object.openSync (fs.js:498:3)\n    at Object.readFileSync (fs.js:394:35)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1099:18)\n    at Module.load (internal/modules/cjs/loader.js:937:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:778:12)\n    at Module.require (internal/modules/cjs/loader.js:961:19)\n    at require (internal/modules/cjs/helpers.js:92:18)\n    at loadLoader (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\loadLoader.js:18:17)\n    at iteratePitchingLoaders (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)");

/***/ }),

/***/ "./src/components/responsive-select/index.js":
/*!***************************************************!*\
  !*** ./src/components/responsive-select/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/getPreviewType */ "./blocks-config/uagb-controls/getPreviewType.js");
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _responsive_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../responsive-toggle */ "./src/components/responsive-toggle/index.js");
/**
 * External dependencies
 */





const ResponsiveSelectControl = props => {
  const {
    label,
    data,
    setAttributes,
    options
  } = props;
  const responsive = true;
  const deviceType = Object(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_2__["useDeviceType"])();
  const output = {};
  output.Desktop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    value: data.desktop.value,
    onChange: value => setAttributes({
      [data.desktop.label]: value
    }),
    options: options.desktop
  });
  output.Tablet = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    value: data.tablet.value,
    onChange: value => setAttributes({
      [data.tablet.label]: value
    }),
    options: options.tablet || options.desktop
  });
  output.Mobile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    value: data.mobile.value,
    onChange: value => setAttributes({
      [data.mobile.label]: value
    }),
    options: options.mobile || options.desktop
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "components-base-control uagb-responsive-select-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uagb-size-type-field-tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uagb-control__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_responsive_toggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    responsive: responsive
  })), output[deviceType] ? output[deviceType] : output.Desktop), props.help && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uag-control-help-notice"
  }, props.help));
};

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveSelectControl);

/***/ })

}]);
//# sourceMappingURL=settings.js.map