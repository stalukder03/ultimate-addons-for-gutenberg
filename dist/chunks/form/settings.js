(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/form/settings"],{

/***/ "./src/blocks/forms/settings.js":
/*!**************************************!*\
  !*** ./src/blocks/forms/settings.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/border */ "./src/components/border/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes,
    deviceType
  } = props;
  const {
    formLabel,
    buttonAlign,
    buttonSize,
    confirmationType,
    confirmationMessage,
    failedMessage,
    confirmationUrl,
    sendAfterSubmitEmail,
    afterSubmitToEmail,
    afterSubmitCcEmail,
    afterSubmitBccEmail,
    afterSubmitEmailSubject,
    submitColor,
    submitColorHover,
    submitBgColor,
    submitBgColorHover,
    submitborderStyle,
    submitborderWidth,
    submitborderRadius,
    submitborderColor,
    submitborderHoverColor,
    submitTextloadGoogleFonts,
    submitTextFontFamily,
    submitTextFontWeight,
    submitTextFontSubset,
    submitTextFontSize,
    submitTextFontSizeType,
    submitTextFontSizeTablet,
    submitTextFontSizeMobile,
    submitTextLineHeightType,
    submitTextLineHeight,
    submitTextLineHeightTablet,
    submitTextLineHeightMobile,
    labelloadGoogleFonts,
    labelFontFamily,
    labelFontWeight,
    labelFontSubset,
    labelFontSize,
    labelFontSizeType,
    labelFontSizeTablet,
    labelFontSizeMobile,
    labelLineHeightType,
    labelLineHeight,
    labelLineHeightTablet,
    labelLineHeightMobile,
    inputloadGoogleFonts,
    inputFontFamily,
    inputFontWeight,
    inputFontSubset,
    inputFontSize,
    inputFontSizeType,
    inputFontSizeTablet,
    inputFontSizeMobile,
    inputLineHeightType,
    inputLineHeight,
    inputLineHeightTablet,
    inputLineHeightMobile,
    toggleSize,
    toggleWidthSize,
    toggleHeightSize,
    toggleActiveColor,
    labelColor,
    inputColor,
    bgColor,
    inputplaceholderColor,
    inputactiveColor,
    inputborderStyle,
    inputborderWidth,
    inputborderRadius,
    inputborderColor,
    inputborderHoverColor,
    fieldGap,
    formStyle,
    overallAlignment,
    reCaptchaEnable,
    reCaptchaType,
    reCaptchaSecretKeyV2,
    reCaptchaSiteKeyV2,
    reCaptchaSecretKeyV3,
    reCaptchaSiteKeyV3,
    hidereCaptchaBatch,
    successMessageTextColor,
    successMessageBGColor,
    successMessageBorderColor,
    successMessageBorderStyle,
    successMessageBorderWidth,
    failedMessageTextColor,
    failedMessageBorderColor,
    failedMessageBorderStyle,
    failedMessageBorderWidth,
    failedMessageBGColor,
    successMessageBorderRadius,
    successMessageHoverBorderColor,
    failedMessageBorderRadius,
    failedMessageHoverBorderColor,
    paddingBtnTop,
    paddingBtnRight,
    paddingBtnBottom,
    paddingBtnLeft,
    paddingBtnTopTablet,
    paddingBtnRightTablet,
    paddingBtnBottomTablet,
    paddingBtnLeftTablet,
    paddingBtnTopMobile,
    paddingBtnRightMobile,
    paddingBtnBottomMobile,
    paddingBtnLeftMobile,
    paddingBtnUnit,
    mobilePaddingBtnUnit,
    tabletPaddingBtnUnit,
    paddingspacingLink,
    submitTextTransform,
    submitTextDecoration,
    labelTextTransform,
    labelTextDecoration,
    inputTransform,
    inputDecoration,
    fieldGapType,
    paddingFieldTop,
    paddingFieldRight,
    paddingFieldBottom,
    paddingFieldLeft,
    paddingFieldTopTablet,
    paddingFieldRightTablet,
    paddingFieldBottomTablet,
    paddingFieldLeftTablet,
    paddingFieldTopMobile,
    paddingFieldRightMobile,
    paddingFieldBottomMobile,
    paddingFieldLeftMobile,
    paddingFieldUnit,
    paddingFieldUnitmobile,
    paddingFieldUnitTablet,
    paddingFieldLink,
    toggleSizeType
  } = attributes;

  const generalSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hidden Field Label', 'ultimate-addons-for-gutenberg'),
      value: formLabel,
      onChange: value => setAttributes({
        formLabel: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      data: {
        value: formStyle,
        label: 'formStyle'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'boxed',
        label: 'Boxed'
      }, {
        value: 'underlined',
        label: 'Underlined'
      }],
      showIcons: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Overall Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: overallAlignment,
        label: 'overallAlignment'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Confirmation Type', 'ultimate-addons-for-gutenberg'),
      data: {
        value: confirmationType,
        label: 'confirmationType'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'message',
        label: 'Message',
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'url',
        label: 'URL Text',
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Url Text', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false
    }), 'message' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextareaControl"], {
      label: "Success Message Text",
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter a message you want to display after successfull form submission', 'ultimate-addons-for-gutenberg'),
      value: confirmationMessage,
      onChange: value => setAttributes({
        confirmationMessage: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextareaControl"], {
      label: "Error Message Text",
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter a message you want to display after unsuccessfull form submission', 'ultimate-addons-for-gutenberg'),
      value: failedMessage,
      onChange: value => setAttributes({
        failedMessage: value
      })
    })), 'url' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success Redirect URL', 'ultimate-addons-for-gutenberg'),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter a URL you want to redirect your page to after form Submission', 'ultimate-addons-for-gutenberg'),
      value: confirmationUrl,
      onChange: value => setAttributes({
        confirmationUrl: value
      })
    }));
  };

  const successMessageStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success Message', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, 'message' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: successMessageTextColor ? successMessageTextColor : '',
      onColorChange: value => setAttributes({
        successMessageTextColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: successMessageBGColor ? successMessageBGColor : '',
      onColorChange: value => setAttributes({
        successMessageBGColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
      setAttributes: setAttributes,
      borderStyle: {
        value: successMessageBorderStyle,
        label: 'successMessageBorderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Style', 'ultimate-addons-for-gutenberg')
      },
      borderWidth: {
        value: successMessageBorderWidth,
        label: 'successMessageBorderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg')
      },
      borderRadius: {
        value: successMessageBorderRadius,
        label: 'successMessageBorderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radius', 'ultimate-addons-for-gutenberg')
      },
      borderColor: {
        value: successMessageBorderColor,
        label: 'successMessageBorderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      borderHoverColor: {
        value: successMessageHoverBorderColor,
        label: 'successMessageHoverBorderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover Color', 'ultimate-addons-for-gutenberg')
      },
      disableBottomSeparator: true
    })));
  };

  const failedMessageStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Error Message', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, 'message' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: failedMessageTextColor ? failedMessageTextColor : '',
      onColorChange: value => setAttributes({
        failedMessageTextColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: failedMessageBGColor ? failedMessageBGColor : '',
      onColorChange: value => setAttributes({
        failedMessageBGColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
      setAttributes: setAttributes,
      borderStyle: {
        value: failedMessageBorderStyle,
        label: 'failedMessageBorderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Style', 'ultimate-addons-for-gutenberg')
      },
      borderWidth: {
        value: failedMessageBorderWidth,
        label: 'failedMessageBorderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg')
      },
      borderRadius: {
        value: failedMessageBorderRadius,
        label: 'failedMessageBorderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radius', 'ultimate-addons-for-gutenberg')
      },
      borderColor: {
        value: failedMessageBorderColor,
        label: 'failedMessageBorderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      borderHoverColor: {
        value: failedMessageHoverBorderColor,
        label: 'failedMessageHoverBorderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover Color', 'ultimate-addons-for-gutenberg')
      },
      disableBottomSeparator: true
    })));
  };

  const submitButtonStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Submit Button', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Size', 'ultimate-addons-for-gutenberg'),
      value: buttonSize,
      onChange: value => setAttributes({
        buttonSize: value
      }),
      options: [{
        value: 'small',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'medium',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'large',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'extralarge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Extra Large', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'full',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Full', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: buttonAlign,
        label: 'buttonAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
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
        value: paddingspacingLink,
        label: 'paddingspacingLink'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: submitColor ? submitColor : '',
        onColorChange: value => setAttributes({
          submitColor: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: submitBgColor ? submitBgColor : '',
        onColorChange: value => setAttributes({
          submitBgColor: value
        })
      })),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: submitColorHover ? submitColorHover : '',
        onColorChange: value => setAttributes({
          submitColorHover: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: submitBgColorHover ? submitBgColorHover : '',
        onColorChange: value => setAttributes({
          submitBgColorHover: value
        })
      }))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: submitTextloadGoogleFonts,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('submitTextloadGoogleFonts', 'ultimate-addons-for-gutenberg')
      },
      fontFamily: {
        value: submitTextFontFamily,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('submitTextFontFamily', 'ultimate-addons-for-gutenberg')
      },
      fontWeight: {
        value: submitTextFontWeight,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('submitTextFontWeight', 'ultimate-addons-for-gutenberg')
      },
      fontSubset: {
        value: submitTextFontSubset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('submitTextFontSubset', 'ultimate-addons-for-gutenberg')
      },
      fontSizeType: {
        value: submitTextFontSizeType,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('submitTextFontSizeType', 'ultimate-addons-for-gutenberg')
      },
      fontSize: {
        value: submitTextFontSize,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('submitTextFontSize', 'ultimate-addons-for-gutenberg')
      },
      fontSizeMobile: {
        value: submitTextFontSizeMobile,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('submitTextFontSizeMobile', 'ultimate-addons-for-gutenberg')
      },
      fontSizeTablet: {
        value: submitTextFontSizeTablet,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('submitTextFontSizeTablet', 'ultimate-addons-for-gutenberg')
      },
      lineHeightType: {
        value: submitTextLineHeightType,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('submitTextLineHeightType', 'ultimate-addons-for-gutenberg')
      },
      lineHeight: {
        value: submitTextLineHeight,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('submitTextLineHeight', 'ultimate-addons-for-gutenberg')
      },
      lineHeightMobile: {
        value: submitTextLineHeightMobile,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('submitTextLineHeightMobile', 'ultimate-addons-for-gutenberg')
      },
      lineHeightTablet: {
        value: submitTextLineHeightTablet,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('submitTextLineHeightTablet', 'ultimate-addons-for-gutenberg')
      },
      transform: {
        value: submitTextTransform,
        label: 'submitTextTransform'
      },
      decoration: {
        value: submitTextDecoration,
        label: 'submitTextDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
      setAttributes: setAttributes,
      borderStyle: {
        value: submitborderStyle,
        label: 'submitborderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Style', 'ultimate-addons-for-gutenberg')
      },
      borderWidth: {
        value: submitborderWidth,
        label: 'submitborderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg')
      },
      borderRadius: {
        value: submitborderRadius,
        label: 'submitborderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radius', 'ultimate-addons-for-gutenberg')
      },
      borderColor: {
        value: submitborderColor,
        label: 'submitborderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      borderHoverColor: {
        value: submitborderHoverColor,
        label: 'submitborderHoverColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover Color', 'ultimate-addons-for-gutenberg')
      },
      disableBottomSeparator: true
    }));
  };

  const afterSubmitActions = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Submit Actions'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Email', 'ultimate-addons-for-gutenberg'),
      checked: sendAfterSubmitEmail,
      onChange: () => setAttributes({
        sendAfterSubmitEmail: !sendAfterSubmitEmail
      })
    }), true === sendAfterSubmitEmail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
      tabs: [{
        name: 'to',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('To', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'cc',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('CC', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'bcc',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('BCC', 'ultimate-addons-for-gutenberg')
      }],
      to: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Email', 'ultimate-addons-for-gutenberg'),
        value: afterSubmitToEmail,
        onChange: value => setAttributes({
          afterSubmitToEmail: value
        })
      }),
      cc: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Email', 'ultimate-addons-for-gutenberg'),
        value: afterSubmitCcEmail,
        onChange: value => setAttributes({
          afterSubmitCcEmail: value
        })
      }),
      bcc: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Email', 'ultimate-addons-for-gutenberg'),
        value: afterSubmitBccEmail,
        onChange: value => setAttributes({
          afterSubmitBccEmail: value
        })
      }),
      disableBottomSeparator: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Subject', 'ultimate-addons-for-gutenberg'),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Subject', 'ultimate-addons-for-gutenberg'),
      value: afterSubmitEmailSubject,
      onChange: value => setAttributes({
        afterSubmitEmailSubject: value
      })
    })));
  };

  const labelSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: labelColor ? labelColor : '',
      onColorChange: value => setAttributes({
        labelColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: labelloadGoogleFonts,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('labelloadGoogleFonts', 'ultimate-addons-for-gutenberg')
      },
      fontFamily: {
        value: labelFontFamily,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('labelFontFamily', 'ultimate-addons-for-gutenberg')
      },
      fontWeight: {
        value: labelFontWeight,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('labelFontWeight', 'ultimate-addons-for-gutenberg')
      },
      fontSubset: {
        value: labelFontSubset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('labelFontSubset', 'ultimate-addons-for-gutenberg')
      },
      fontSizeType: {
        value: labelFontSizeType,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('labelFontSizeType', 'ultimate-addons-for-gutenberg')
      },
      fontSize: {
        value: labelFontSize,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('labelFontSize', 'ultimate-addons-for-gutenberg')
      },
      fontSizeMobile: {
        value: labelFontSizeMobile,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('labelFontSizeMobile', 'ultimate-addons-for-gutenberg')
      },
      fontSizeTablet: {
        value: labelFontSizeTablet,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('labelFontSizeTablet', 'ultimate-addons-for-gutenberg')
      },
      lineHeightType: {
        value: labelLineHeightType,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('labelLineHeightType', 'ultimate-addons-for-gutenberg')
      },
      lineHeight: {
        value: labelLineHeight,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('labelLineHeight', 'ultimate-addons-for-gutenberg')
      },
      lineHeightMobile: {
        value: labelLineHeightMobile,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('labelLineHeightMobile', 'ultimate-addons-for-gutenberg')
      },
      lineHeightTablet: {
        value: labelLineHeightTablet,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('labelLineHeightTablet', 'ultimate-addons-for-gutenberg')
      },
      transform: {
        value: labelTextTransform,
        label: 'labelTextTransform'
      },
      decoration: {
        value: labelTextDecoration,
        label: 'labelTextDecoration'
      }
    }));
  };

  const inputSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Input', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: inputColor ? inputColor : '',
      onColorChange: value => setAttributes({
        inputColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Placeholder Color', 'ultimate-addons-for-gutenberg'),
      colorValue: inputplaceholderColor ? inputplaceholderColor : '',
      onColorChange: value => setAttributes({
        inputplaceholderColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Active Color', 'ultimate-addons-for-gutenberg'),
      colorValue: inputactiveColor ? inputactiveColor : '',
      onColorChange: value => setAttributes({
        inputactiveColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bgColor ? bgColor : '',
      onColorChange: value => setAttributes({
        bgColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: inputloadGoogleFonts,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('inputloadGoogleFonts', 'ultimate-addons-for-gutenberg')
      },
      fontFamily: {
        value: inputFontFamily,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('inputFontFamily', 'ultimate-addons-for-gutenberg')
      },
      fontWeight: {
        value: inputFontWeight,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('inputFontWeight', 'ultimate-addons-for-gutenberg')
      },
      fontSubset: {
        value: inputFontSubset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('inputFontSubset', 'ultimate-addons-for-gutenberg')
      },
      fontSizeType: {
        value: inputFontSizeType,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('inputFontSizeType', 'ultimate-addons-for-gutenberg')
      },
      fontSize: {
        value: inputFontSize,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('inputFontSize', 'ultimate-addons-for-gutenberg')
      },
      fontSizeMobile: {
        value: inputFontSizeMobile,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('inputFontSizeMobile', 'ultimate-addons-for-gutenberg')
      },
      fontSizeTablet: {
        value: inputFontSizeTablet,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('inputFontSizeTablet', 'ultimate-addons-for-gutenberg')
      },
      lineHeightType: {
        value: inputLineHeightType,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('inputLineHeightType', 'ultimate-addons-for-gutenberg')
      },
      lineHeight: {
        value: inputLineHeight,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('inputLineHeight', 'ultimate-addons-for-gutenberg')
      },
      lineHeightMobile: {
        value: inputLineHeightMobile,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('inputLineHeightMobile', 'ultimate-addons-for-gutenberg')
      },
      lineHeightTablet: {
        value: inputLineHeightTablet,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('inputLineHeightTablet', 'ultimate-addons-for-gutenberg')
      },
      transform: {
        value: inputTransform,
        label: 'inputTransform'
      },
      decoration: {
        value: inputDecoration,
        label: 'inputDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
      setAttributes: setAttributes,
      borderStyle: {
        value: inputborderStyle,
        label: 'inputborderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Style', 'ultimate-addons-for-gutenberg')
      },
      borderWidth: {
        value: inputborderWidth,
        label: 'inputborderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg')
      },
      borderRadius: {
        value: inputborderRadius,
        label: 'inputborderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radius', 'ultimate-addons-for-gutenberg')
      },
      borderColor: {
        value: inputborderColor,
        label: 'inputborderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      borderHoverColor: {
        value: inputborderHoverColor,
        label: 'inputborderHoverColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover Color', 'ultimate-addons-for-gutenberg')
      },
      disableBottomSeparator: true
    }));
  };

  const fieldSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Field', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing between fields', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      className: 'uagb-padding-control',
      value: fieldGap,
      onChange: value => setAttributes({
        fieldGap: value
      }),
      min: 0,
      max: 100,
      unit: {
        value: fieldGapType,
        label: 'fieldGapType'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: paddingFieldTop,
        label: 'paddingFieldTop'
      },
      valueRight: {
        value: paddingFieldRight,
        label: 'paddingFieldRight'
      },
      valueBottom: {
        value: paddingFieldBottom,
        label: 'paddingFieldBottom'
      },
      valueLeft: {
        value: paddingFieldLeft,
        label: 'paddingFieldLeft'
      },
      valueTopTablet: {
        value: paddingFieldTopTablet,
        label: 'paddingFieldTopTablet'
      },
      valueRightTablet: {
        value: paddingFieldRightTablet,
        label: 'paddingFieldRightTablet'
      },
      valueBottomTablet: {
        value: paddingFieldBottomTablet,
        label: 'paddingFieldBottomTablet'
      },
      valueLeftTablet: {
        value: paddingFieldLeftTablet,
        label: 'paddingFieldLeftTablet'
      },
      valueTopMobile: {
        value: paddingFieldTopMobile,
        label: 'paddingFieldTopMobile'
      },
      valueRightMobile: {
        value: paddingFieldRightMobile,
        label: 'paddingFieldRightMobile'
      },
      valueBottomMobile: {
        value: paddingFieldBottomMobile,
        label: 'paddingFieldBottomMobile'
      },
      valueLeftMobile: {
        value: paddingFieldLeftMobile,
        label: 'paddingFieldLeftMobile'
      },
      unit: {
        value: paddingFieldUnit,
        label: 'paddingFieldUnit'
      },
      mUnit: {
        value: paddingFieldUnitmobile,
        label: 'paddingFieldUnitmobile'
      },
      tUnit: {
        value: paddingFieldUnitTablet,
        label: 'paddingFieldUnitTablet'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: paddingFieldLink,
        label: 'paddingFieldLink'
      }
    })));
  };

  const checkboxSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Checkbox / Toggle', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Checkbox/Radio Size', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: toggleSize,
      onChange: value => setAttributes({
        toggleSize: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: toggleSizeType,
        label: 'toggleSizeType'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Toggle Width', 'ultimate-addons-for-gutenberg'),
      value: toggleWidthSize,
      setAttributes: setAttributes,
      onChange: value => setAttributes({
        toggleWidthSize: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Toggle Height', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: toggleHeightSize,
      onChange: value => setAttributes({
        toggleHeightSize: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Toggle Active Color', 'ultimate-addons-for-gutenberg'),
      colorValue: toggleActiveColor ? toggleActiveColor : '',
      onColorChange: value => setAttributes({
        toggleActiveColor: value
      })
    }));
  };

  const googleReCaptcha = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Google reCAPTCHA', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-form-notice"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('P.S. Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page. ', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable reCAPTCHA ', 'ultimate-addons-for-gutenberg'),
      checked: reCaptchaEnable,
      onChange: () => setAttributes({
        reCaptchaEnable: !reCaptchaEnable
      })
    }), reCaptchaEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Version', 'ultimate-addons-for-gutenberg'),
      data: {
        value: reCaptchaType,
        label: 'reCaptchaType'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'v2',
        label: 'V2',
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('V2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'v3',
        label: 'V3',
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('V3', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false
    }), reCaptchaEnable && 'v2' === reCaptchaType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Site Key', 'ultimate-addons-for-gutenberg'),
      value: reCaptchaSiteKeyV2,
      onChange: value => setAttributes({
        reCaptchaSiteKeyV2: value
      }),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter v2 Keys', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Secret Key', 'ultimate-addons-for-gutenberg'),
      value: reCaptchaSecretKeyV2,
      onChange: value => setAttributes({
        reCaptchaSecretKeyV2: value
      }),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter v2 Keys', 'ultimate-addons-for-gutenberg')
    })), reCaptchaEnable && 'v3' === reCaptchaType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Site Key', 'ultimate-addons-for-gutenberg'),
      value: reCaptchaSiteKeyV3,
      onChange: value => setAttributes({
        reCaptchaSiteKeyV3: value
      }),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter v3 Keys', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Secret Key', 'ultimate-addons-for-gutenberg'),
      value: reCaptchaSecretKeyV3,
      onChange: value => setAttributes({
        reCaptchaSecretKeyV3: value
      }),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter v3 Keys', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hide reCAPTCHA Badge', 'ultimate-addons-for-gutenberg'),
      checked: hidereCaptchaBatch,
      onChange: () => setAttributes({
        hidereCaptchaBatch: !hidereCaptchaBatch
      })
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Know More', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ExternalLink"], {
      href: "https://www.google.com/recaptcha/admin/create"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Get Keys', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ExternalLink"], {
      href: "https://developers.google.com/recaptcha/intro"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])(' | Documentation', 'ultimate-addons-for-gutenberg')));
  };

  let loadsubmittextGoogleFonts;

  if (submitTextloadGoogleFonts === true) {
    const qconfig = {
      google: {
        families: [submitTextFontFamily + (submitTextFontWeight ? ':' + submitTextFontWeight : '')]
      }
    };
    loadsubmittextGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: qconfig
    });
  }

  let loadlabelGoogleFonts;

  if (labelloadGoogleFonts === true) {
    const qconfig = {
      google: {
        families: [labelFontFamily + (labelFontWeight ? ':' + labelFontWeight : '')]
      }
    };
    loadlabelGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: qconfig
    });
  }

  let loadinputGoogleFonts;

  if (inputloadGoogleFonts === true) {
    const qconfig = {
      google: {
        families: [inputFontFamily + (inputFontWeight ? ':' + inputFontWeight : '')]
      }
    };
    loadinputGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: qconfig
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].general, generalSettings(), afterSubmitActions(), googleReCaptcha()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].style, labelSettings(), inputSettings(), fieldSettings(), checkboxSettings(), successMessageStyle(), failedMessageStyle(), submitButtonStyle()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].advance, {
    parentProps: props
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }, loadsubmittextGoogleFonts, loadlabelGoogleFonts, loadinputGoogleFonts));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

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
  }, [status]);
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