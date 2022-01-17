(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/info-box/settings"],{

/***/ "./blocks-config/utils/Helpers.js":
/*!****************************************!*\
  !*** ./blocks-config/utils/Helpers.js ***!
  \****************************************/
/*! exports provided: getImageSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSize", function() { return getImageSize; });
/**
 * Get Image Sizes and return an array of Size.
 *
 * @param {Object} sizes - The sizes object.
 * @return {Object} sizeArr - The sizeArr object.
 */
function getImageSize(sizes) {
  const sizeArr = [];

  for (const size in sizes) {
    if (sizes.hasOwnProperty(size)) {
      const p = {
        value: size,
        label: size
      };
      sizeArr.push(p);
    }
  }

  return sizeArr;
}

/***/ }),

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

/***/ "./src/blocks/info-box/settings.js":
/*!*****************************************!*\
  !*** ./src/blocks/info-box/settings.js ***!
  \*****************************************/
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
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/border */ "./src/components/border/index.js");
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Components_border__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Components_image__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Components_tabs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Utils_Helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @Utils/Helpers */ "./blocks-config/utils/Helpers.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





















let imageSizeOptions = [{
  value: 'thumbnail',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Thumbnail', 'ultimate-addons-for-gutenberg')
}, {
  value: 'medium',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium', 'ultimate-addons-for-gutenberg')
}, {
  value: 'full',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large', 'ultimate-addons-for-gutenberg')
}];


const Settings = props => {
  props = props.parentProps;
  const {
    setAttributes,
    attributes,
    deviceType
  } = props; // Setup the attributes.

  const {
    headingAlign,
    headingColor,
    subHeadingColor,
    prefixColor,
    prefixFontSize,
    prefixFontSizeType,
    prefixFontSizeTablet,
    prefixFontSizeMobile,
    prefixFontFamily,
    prefixFontWeight,
    prefixFontStyle,
    prefixLineHeightType,
    prefixLineHeight,
    prefixLineHeightTablet,
    prefixLineHeightMobile,
    prefixTransform,
    prefixDecoration,
    prefixLoadGoogleFonts,
    headingTag,
    headFontSize,
    headFontSizeType,
    headFontSizeTablet,
    headFontSizeMobile,
    headFontFamily,
    headFontWeight,
    headFontStyle,
    headLineHeightType,
    headLineHeight,
    headLineHeightTablet,
    headLineHeightMobile,
    headLoadGoogleFonts,
    subHeadFontSize,
    subHeadFontSizeType,
    subHeadFontSizeTablet,
    subHeadFontSizeMobile,
    subHeadFontFamily,
    subHeadFontWeight,
    subHeadFontStyle,
    subHeadLineHeightType,
    subHeadLineHeight,
    subHeadLineHeightTablet,
    subHeadLineHeightMobile,
    subHeadTransform,
    subHeadDecoration,
    subHeadLoadGoogleFonts,
    separatorWidthType,
    icon,
    iconColor,
    iconSize,
    iconSizeType,
    iconimgPosition,
    iconHover,
    iconimgBorderRadius,
    iconimgBorderRadiusUnit,
    source_type,
    sourceAlign,
    seperatorPosition,
    seperatorStyle,
    seperatorWidth,
    seperatorColor,
    seperatorThickness,
    thicknessUnit,
    ctaType,
    ctaText,
    ctaLink,
    ctaTarget,
    ctaIcon,
    ctaIconPosition,
    ctaIconSpace,
    ctaIconSpaceType,
    ctaLinkColor,
    ctaFontSize,
    ctaFontSizeType,
    ctaFontSizeMobile,
    ctaFontSizeTablet,
    ctaTransform,
    ctaDecoration,
    ctaFontFamily,
    ctaFontWeight,
    ctaFontStyle,
    ctaLoadGoogleFonts,
    ctaBtnLinkColor,
    ctaLinkHoverColor,
    ctaBgHoverColor,
    ctaBgColor,
    paddingBtnUnit,
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
    ctaBorderStyle,
    ctaBorderColor,
    ctaBorderhoverColor,
    ctaBorderWidth,
    ctaBorderRadius,
    iconLeftMargin,
    iconRightMargin,
    iconTopMargin,
    iconBottomMargin,
    iconMarginTopTablet,
    iconMarginRightTablet,
    iconMarginBottomTablet,
    iconMarginLeftTablet,
    iconMarginTopMobile,
    iconMarginRightMobile,
    iconMarginBottomMobile,
    iconMarginLeftMobile,
    iconMarginUnit,
    iconMobileMarginUnit,
    iconTabletMarginUnit,
    iconImage,
    imageSize,
    imageWidth,
    imageWidthMobile,
    imageWidthTablet,
    imageWidthType,
    imageWidthUnit,
    stack,
    showPrefix,
    showTitle,
    showDesc,
    spacingLink,
    paddingspacingLink,
    headTransform,
    headDecoration,
    prefixTopMargin,
    prefixRightMargin,
    prefixSpace,
    prefixLeftMargin,
    prefixMarginTopTablet,
    prefixMarginRightTablet,
    prefixTabletSpace,
    prefixMarginLeftTablet,
    prefixMarginTopMobile,
    prefixMarginRightMobile,
    prefixMobileSpace,
    prefixMarginLeftMobile,
    prefixSpaceUnit,
    prefixMobileMarginUnit,
    prefixTabletMarginUnit,
    spacingPrefixLink,
    headTopMargin,
    headRightMargin,
    headSpace,
    headLeftMargin,
    headMarginTopTablet,
    headMarginRightTablet,
    headTabletSpace,
    headMarginLeftTablet,
    headMarginTopMobile,
    headMarginRightMobile,
    headMobileSpace,
    headMarginLeftMobile,
    headSpaceUnit,
    headMobilePaddingUnit,
    headTabletPaddingUnit,
    spacingHeadLink,
    separatorTopMargin,
    separatorRightMargin,
    seperatorSpace,
    separatorLeftMargin,
    separatorMarginTopTablet,
    separatorMarginRightTablet,
    seperatorTabletSpace,
    separatorMarginLeftTablet,
    separatorMarginTopMobile,
    separatorMarginRightMobile,
    seperatorMobileSpace,
    separatorMarginLeftMobile,
    seperatorSpaceUnit,
    separatorMobileMarginUnit,
    separatorTabletMarginUnit,
    spacingSeparatorLink,
    subHeadTopMargin,
    subHeadRightMargin,
    subHeadSpace,
    subHeadLeftMargin,
    subHeadMarginTopTablet,
    subHeadMarginRightTablet,
    subHeadTabletSpace,
    subHeadMarginLeftTablet,
    subHeadMarginTopMobile,
    subHeadMarginRightMobile,
    subHeadMobileSpace,
    subHeadMarginLeftMobile,
    subHeadSpaceUnit,
    subHeadMobileMarginUnit,
    subHeadTabletMarginUnit,
    spacingSubheadLink
  } = attributes;
  /*
   * Event to set Image as while adding.
   */

  const onSelectImage = media => {
    if (!media || !media.url) {
      setAttributes({
        iconImage: null
      });
      return;
    }

    if (!media.type || 'image' !== media.type) {
      setAttributes({
        iconImage: null
      });
      return;
    }

    if (media.sizes) {
      const new_img = Object(_Utils_Helpers__WEBPACK_IMPORTED_MODULE_17__["getImageSize"])(media.sizes);
      imageSizeOptions = new_img;
    }

    setAttributes({
      iconImage: media
    });
  };
  /*
   * Event to set Image as null while removing.
   */


  const onRemoveImage = () => {
    setAttributes({
      iconImage: ''
    });
  };

  if (iconImage && iconImage.sizes) {
    imageSizeOptions = Object(_Utils_Helpers__WEBPACK_IMPORTED_MODULE_17__["getImageSize"])(iconImage.sizes);
  }

  let loadPrefixGoogleFonts;
  let loadSubHeadGoogleFonts;
  let loadCtaGoogleFonts;
  let loadHeadGoogleFonts;

  if (prefixLoadGoogleFonts === true) {
    const prefixconfig = {
      google: {
        families: [prefixFontFamily + (prefixFontWeight ? ':' + prefixFontWeight : '')]
      }
    };
    loadPrefixGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: prefixconfig
    });
  }

  if (headLoadGoogleFonts === true) {
    const headconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: headconfig
    });
  }

  if (subHeadLoadGoogleFonts === true) {
    const subHeadconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: subHeadconfig
    });
  }

  if (subHeadLoadGoogleFonts === true) {
    const ctaconfig = {
      google: {
        families: [ctaFontFamily + (ctaFontWeight ? ':' + ctaFontWeight : '')]
      }
    };
    loadCtaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: ctaconfig
    });
  }

  const blockControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["BlockControls"], {
      key: "controls"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["AlignmentToolbar"], {
      value: headingAlign,
      onChange: value => setAttributes({
        headingAlign: value
      })
    }));
  }; // Global Controls.


  const imageIconPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image/Icon', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Position', 'ultimate-addons-for-gutenberg'),
      value: iconimgPosition,
      onChange: value => setAttributes({
        iconimgPosition: value
      }),
      options: [{
        value: 'above-title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Above Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'below-title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Below Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'left-title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left of Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right-title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right of Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left of Text and Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right of Text and Title', 'ultimate-addons-for-gutenberg')
      }]
    }), (iconimgPosition === 'left' || iconimgPosition === 'right') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Stack on', 'ultimate-addons-for-gutenberg'),
      value: stack,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
      }],
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Note: Choose on what breakpoint the Info Box will stack.', 'ultimate-addons-for-gutenberg'),
      onChange: value => setAttributes({
        stack: value
      })
    }), iconimgPosition && iconimgPosition !== 'above-title' && iconimgPosition !== 'below-title' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Vertical Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: sourceAlign,
        label: 'sourceAlign'
      },
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'middle',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Middle', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Source', 'ultimate-addons-for-gutenberg'),
      data: {
        value: source_type,
        label: 'source_type'
      },
      options: [{
        value: 'icon',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'image',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image', 'ultimate-addons-for-gutenberg')
      }]
    }), source_type === 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: icon,
      onChange: value => setAttributes({
        icon: value
      })
    })), source_type === 'image' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_13___default.a, {
      onSelectImage: onSelectImage,
      backgroundImage: iconImage,
      onRemoveImage: onRemoveImage
    }), iconImage && iconImage.url !== 'null' && iconImage.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image Size', 'ultimate-addons-for-gutenberg'),
      options: imageSizeOptions,
      value: imageSize,
      onChange: value => setAttributes({
        imageSize: value
      })
    })));
  }; // Typography settings.


  const typographySettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingAlign,
        label: 'headingAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_19__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_19__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_19__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      checked: showPrefix,
      onChange: () => setAttributes({
        showPrefix: !showPrefix
      }),
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Prefix', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      checked: showTitle,
      onChange: () => setAttributes({
        showTitle: !showTitle
      }),
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Title', 'ultimate-addons-for-gutenberg')
    }), showTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingTag,
        label: 'headingTag'
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H1')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H2')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H3')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H4')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H5')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H6')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('P')
      }]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      checked: showDesc,
      onChange: () => setAttributes({
        showDesc: !showDesc
      }),
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Description', 'ultimate-addons-for-gutenberg')
    }));
  }; // Separator settings.


  const seperatorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Separator', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style'),
      value: seperatorStyle,
      onChange: value => setAttributes({
        seperatorStyle: value
      }),
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }]
    }), 'none' !== seperatorStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Position', 'ultimate-addons-for-gutenberg'),
      value: seperatorPosition,
      onChange: value => setAttributes({
        seperatorPosition: value
      }),
      options: [{
        value: 'after_icon',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Icon/Image', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'after_prefix',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Prefix', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'after_title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'after_desc',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Description', 'ultimate-addons-for-gutenberg')
      }]
    }));
  };

  const ctaSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Call To Action', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Type', 'ultimate-addons-for-gutenberg'),
      value: ctaType,
      onChange: value => setAttributes({
        ctaType: value
      }),
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'text',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'button',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'all',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Complete Box', 'ultimate-addons-for-gutenberg')
      }]
    }), (ctaType === 'text' || ctaType === 'button') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text', 'ultimate-addons-for-gutenberg'),
      value: ctaText,
      onChange: value => setAttributes({
        ctaText: value
      })
    })), ctaType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link', 'ultimate-addons-for-gutenberg'),
      value: ctaLink,
      onChange: value => setAttributes({
        ctaLink: value
      })
    })), ctaType !== 'all' && ctaType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Icon', 'ultimate-addons-for-gutenberg'),
      value: ctaIcon,
      onChange: value => setAttributes({
        ctaIcon: value
      })
    })), ctaIcon !== '' && ctaType !== 'all' && ctaType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon Position', 'ultimate-addons-for-gutenberg'),
      value: ctaIconPosition,
      onChange: value => setAttributes({
        ctaIconPosition: value
      }),
      options: [{
        value: 'before',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Before Text', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'after',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Text', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: ctaIconSpace,
      onChange: value => setAttributes({
        ctaIconSpace: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: ctaIconSpaceType,
        label: 'ctaIconSpaceType'
      }
    })), ctaType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      checked: ctaTarget,
      onChange: () => setAttributes({
        ctaTarget: !ctaTarget
      }),
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open in new Window', 'ultimate-addons-for-gutenberg')
    }));
  };

  const styleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, '' !== icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: "Icon/Image",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, ' ', source_type === 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_15___default.a, {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: iconColor ? iconColor : '',
        onColorChange: value => setAttributes({
          iconColor: value
        })
      }),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: iconHover ? iconHover : '',
        onColorChange: value => setAttributes({
          iconHover: value
        })
      }),
      disableBottomSeparator: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: iconSize,
      onChange: value => setAttributes({
        iconSize: value
      }),
      min: 0,
      max: 300,
      limitMin: {
        'px': 0,
        'em': 0
      } // eslint-disable-line quote-props
      ,
      limitMax: {
        'px': 1500,
        'em': 100
      } // eslint-disable-line quote-props
      ,
      unit: {
        value: iconSizeType,
        label: 'iconSizeType'
      }
    })), source_type === 'image' && iconImage && iconImage.url !== 'null' && iconImage.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      checked: imageWidthType,
      onChange: () => setAttributes({
        imageWidthType: !imageWidthType
      }),
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Custom Width', 'ultimate-addons-for-gutenberg'),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Turn this off to inherit the natural width of Image.', 'ultimate-addons-for-gutenberg')
    }), imageWidthType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_12___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: imageWidth,
          label: 'imageWidth'
        },
        tablet: {
          value: imageWidthTablet,
          label: 'imageWidthTablet'
        },
        mobile: {
          value: imageWidthMobile,
          label: 'imageWidthMobile'
        }
      },
      min: 0,
      max: 500,
      unit: {
        value: imageWidthUnit,
        label: 'imageWidthUnit'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Rounded Corners (px)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: iconimgBorderRadius,
      onChange: value => setAttributes({
        iconimgBorderRadius: value
      }),
      min: 0,
      max: 500,
      unit: {
        value: iconimgBorderRadiusUnit,
        label: 'iconimgBorderRadiusUnit'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: iconTopMargin,
        label: 'iconTopMargin'
      },
      valueRight: {
        value: iconRightMargin,
        label: 'iconRightMargin'
      },
      valueBottom: {
        value: iconBottomMargin,
        label: 'iconBottomMargin'
      },
      valueLeft: {
        value: iconLeftMargin,
        label: 'iconLeftMargin'
      },
      valueTopTablet: {
        value: iconMarginTopTablet,
        label: 'iconMarginTopTablet'
      },
      valueRightTablet: {
        value: iconMarginRightTablet,
        label: 'iconMarginRightTablet'
      },
      valueBottomTablet: {
        value: iconMarginBottomTablet,
        label: 'iconMarginBottomTablet'
      },
      valueLeftTablet: {
        value: iconMarginLeftTablet,
        label: 'iconMarginLeftTablet'
      },
      valueTopMobile: {
        value: iconMarginTopMobile,
        label: 'iconMarginTopMobile'
      },
      valueRightMobile: {
        value: iconMarginRightMobile,
        label: 'iconMarginRightMobile'
      },
      valueBottomMobile: {
        value: iconMarginBottomMobile,
        label: 'iconMarginBottomMobile'
      },
      valueLeftMobile: {
        value: iconMarginLeftMobile,
        label: 'iconMarginLeftMobile'
      },
      unit: {
        value: iconMarginUnit,
        label: 'iconMarginUnit'
      },
      mUnit: {
        value: iconMobileMarginUnit,
        label: 'iconMobileMarginUnit'
      },
      tUnit: {
        value: iconTabletMarginUnit,
        label: 'iconTabletMarginUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingLink,
        label: 'spacingLink'
      }
    })))), showPrefix && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: "Prefix",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: prefixColor ? prefixColor : '',
      onColorChange: value => setAttributes({
        prefixColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: prefixTopMargin,
        label: 'prefixTopMargin'
      },
      valueRight: {
        value: prefixRightMargin,
        label: 'prefixRightMargin'
      },
      valueBottom: {
        value: prefixSpace,
        label: 'prefixSpace'
      },
      valueLeft: {
        value: prefixLeftMargin,
        label: 'prefixLeftMargin'
      },
      valueTopTablet: {
        value: prefixMarginTopTablet,
        label: 'prefixMarginTopTablet'
      },
      valueRightTablet: {
        value: prefixMarginRightTablet,
        label: 'prefixMarginRightTablet'
      },
      valueBottomTablet: {
        value: prefixTabletSpace,
        label: 'prefixTabletSpace'
      },
      valueLeftTablet: {
        value: prefixMarginLeftTablet,
        label: 'prefixMarginLeftTablet'
      },
      valueTopMobile: {
        value: prefixMarginTopMobile,
        label: 'prefixMarginTopMobile'
      },
      valueRightMobile: {
        value: prefixMarginRightMobile,
        label: 'prefixMarginRightMobile'
      },
      valueBottomMobile: {
        value: prefixMobileSpace,
        label: 'prefixMobileSpace'
      },
      valueLeftMobile: {
        value: prefixMarginLeftMobile,
        label: 'prefixMarginLeftMobile'
      },
      unit: {
        value: prefixSpaceUnit,
        label: 'prefixSpaceUnit'
      },
      mUnit: {
        value: prefixMobileMarginUnit,
        label: 'prefixMobileMarginUnit'
      },
      tUnit: {
        value: prefixTabletMarginUnit,
        label: 'prefixTabletMarginUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingPrefixLink,
        label: 'spacingPrefixLink'
      }
    })))), showTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: "Title",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: headingColor ? headingColor : '',
      onColorChange: value => setAttributes({
        headingColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: headLoadGoogleFonts,
        label: 'headLoadGoogleFonts'
      },
      fontFamily: {
        value: headFontFamily,
        label: 'headFontFamily'
      },
      fontWeight: {
        value: headFontWeight,
        label: 'headFontWeight'
      },
      fontStyle: {
        value: headFontStyle,
        label: 'headFontStyle'
      },
      fontSizeType: {
        value: headFontSizeType,
        label: 'headFontSizeType'
      },
      fontSize: {
        value: headFontSize,
        label: 'headFontSize'
      },
      fontSizeMobile: {
        value: headFontSizeMobile,
        label: 'headFontSizeMobile'
      },
      fontSizeTablet: {
        value: headFontSizeTablet,
        label: 'headFontSizeTablet'
      },
      lineHeightType: {
        value: headLineHeightType,
        label: 'headLineHeightType'
      },
      lineHeight: {
        value: headLineHeight,
        label: 'headLineHeight'
      },
      lineHeightMobile: {
        value: headLineHeightMobile,
        label: 'headLineHeightMobile'
      },
      lineHeightTablet: {
        value: headLineHeightTablet,
        label: 'headLineHeightTablet'
      },
      transform: {
        value: headTransform,
        label: 'headTransform'
      },
      decoration: {
        value: headDecoration,
        label: 'headDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: headTopMargin,
        label: 'headTopMargin'
      },
      valueRight: {
        value: headRightMargin,
        label: 'headRightMargin'
      },
      valueBottom: {
        value: headSpace,
        label: 'headSpace'
      },
      valueLeft: {
        value: headLeftMargin,
        label: 'headLeftMargin'
      },
      valueTopTablet: {
        value: headMarginTopTablet,
        label: 'headMarginTopTablet'
      },
      valueRightTablet: {
        value: headMarginRightTablet,
        label: 'headMarginRightTablet'
      },
      valueBottomTablet: {
        value: headTabletSpace,
        label: 'headTabletSpace'
      },
      valueLeftTablet: {
        value: headMarginLeftTablet,
        label: 'headMarginLeftTablet'
      },
      valueTopMobile: {
        value: headMarginTopMobile,
        label: 'headMarginTopMobile'
      },
      valueRightMobile: {
        value: headMarginRightMobile,
        label: 'headMarginRightMobile'
      },
      valueBottomMobile: {
        value: headMobileSpace,
        label: 'headMobileSpace'
      },
      valueLeftMobile: {
        value: headMarginLeftMobile,
        label: 'headMarginLeftMobile'
      },
      unit: {
        value: headSpaceUnit,
        label: 'headSpaceUnit'
      },
      mUnit: {
        value: headMobilePaddingUnit,
        label: 'headMobilePaddingUnit'
      },
      tUnit: {
        value: headTabletPaddingUnit,
        label: 'headTabletPaddingUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingHeadLink,
        label: 'spacingHeadLink'
      }
    }))), 'none' !== seperatorStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: "Separator",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: seperatorWidth,
      onChange: value => setAttributes({
        seperatorWidth: value
      }),
      min: 0,
      max: '%' === separatorWidthType ? 100 : 500,
      unit: {
        value: separatorWidthType,
        label: 'separatorWidthType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Em', 'ultimate-addons-for-gutenberg'),
        unitValue: 'em'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Thickness', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: seperatorThickness,
      onChange: value => setAttributes({
        seperatorThickness: value
      }),
      min: 0,
      max: 10,
      unit: {
        value: thicknessUnit,
        label: 'thicknessUnit'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: seperatorColor ? seperatorColor : '',
      onColorChange: value => setAttributes({
        seperatorColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: separatorTopMargin,
        label: 'separatorTopMargin'
      },
      valueRight: {
        value: separatorRightMargin,
        label: 'separatorRightMargin'
      },
      valueBottom: {
        value: seperatorSpace,
        label: 'seperatorSpace'
      },
      valueLeft: {
        value: separatorLeftMargin,
        label: 'separatorLeftMargin'
      },
      valueTopTablet: {
        value: separatorMarginTopTablet,
        label: 'separatorMarginTopTablet'
      },
      valueRightTablet: {
        value: separatorMarginRightTablet,
        label: 'separatorMarginRightTablet'
      },
      valueBottomTablet: {
        value: seperatorTabletSpace,
        label: 'seperatorTabletSpace'
      },
      valueLeftTablet: {
        value: separatorMarginLeftTablet,
        label: 'separatorMarginLeftTablet'
      },
      valueTopMobile: {
        value: separatorMarginTopMobile,
        label: 'separatorMarginTopMobile'
      },
      valueRightMobile: {
        value: separatorMarginRightMobile,
        label: 'separatorMarginRightMobile'
      },
      valueBottomMobile: {
        value: seperatorMobileSpace,
        label: 'seperatorMobileSpace'
      },
      valueLeftMobile: {
        value: separatorMarginLeftMobile,
        label: 'separatorMarginLeftMobile'
      },
      unit: {
        value: seperatorSpaceUnit,
        label: 'seperatorSpaceUnit'
      },
      mUnit: {
        value: separatorMobileMarginUnit,
        label: 'separatorMobileMarginUnit'
      },
      tUnit: {
        value: separatorTabletMarginUnit,
        label: 'separatorTabletMarginUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingSeparatorLink,
        label: 'spacingSeparatorLink'
      }
    }))), showDesc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: "Description",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: subHeadingColor ? subHeadingColor : '',
      onColorChange: value => setAttributes({
        subHeadingColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: subHeadLoadGoogleFonts,
        label: 'subHeadLoadGoogleFonts'
      },
      fontFamily: {
        value: subHeadFontFamily,
        label: 'subHeadFontFamily'
      },
      fontWeight: {
        value: subHeadFontWeight,
        label: 'subHeadFontWeight'
      },
      fontStyle: {
        value: subHeadFontStyle,
        label: 'subHeadFontStyle'
      },
      fontSizeType: {
        value: subHeadFontSizeType,
        label: 'subHeadFontSizeType'
      },
      fontSize: {
        value: subHeadFontSize,
        label: 'subHeadFontSize'
      },
      fontSizeMobile: {
        value: subHeadFontSizeMobile,
        label: 'subHeadFontSizeMobile'
      },
      fontSizeTablet: {
        value: subHeadFontSizeTablet,
        label: 'subHeadFontSizeTablet'
      },
      lineHeightType: {
        value: subHeadLineHeightType,
        label: 'subHeadLineHeightType'
      },
      lineHeight: {
        value: subHeadLineHeight,
        label: 'subHeadLineHeight'
      },
      lineHeightMobile: {
        value: subHeadLineHeightMobile,
        label: 'subHeadLineHeightMobile'
      },
      lineHeightTablet: {
        value: subHeadLineHeightTablet,
        label: 'subHeadLineHeightTablet'
      },
      transform: {
        value: subHeadTransform,
        label: 'subHeadTransform'
      },
      decoration: {
        value: subHeadDecoration,
        label: 'subHeadDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: subHeadTopMargin,
        label: 'subHeadTopMargin'
      },
      valueRight: {
        value: subHeadRightMargin,
        label: 'subHeadRightMargin'
      },
      valueBottom: {
        value: subHeadSpace,
        label: 'subHeadSpace'
      },
      valueLeft: {
        value: subHeadLeftMargin,
        label: 'subHeadLeftMargin'
      },
      valueTopTablet: {
        value: subHeadMarginTopTablet,
        label: 'subHeadMarginTopTablet'
      },
      valueRightTablet: {
        value: subHeadMarginRightTablet,
        label: 'subHeadMarginRightTablet'
      },
      valueBottomTablet: {
        value: subHeadTabletSpace,
        label: 'subHeadTabletSpace'
      },
      valueLeftTablet: {
        value: subHeadMarginLeftTablet,
        label: 'subHeadMarginLeftTablet'
      },
      valueTopMobile: {
        value: subHeadMarginTopMobile,
        label: 'subHeadMarginTopMobile'
      },
      valueRightMobile: {
        value: subHeadMarginRightMobile,
        label: 'subHeadMarginRightMobile'
      },
      valueBottomMobile: {
        value: subHeadMobileSpace,
        label: 'subHeadMobileSpace'
      },
      valueLeftMobile: {
        value: subHeadMarginLeftMobile,
        label: 'subHeadMarginLeftMobile'
      },
      unit: {
        value: subHeadSpaceUnit,
        label: 'subHeadSpaceUnit'
      },
      mUnit: {
        value: subHeadMobileMarginUnit,
        label: 'subHeadMobileMarginUnit'
      },
      tUnit: {
        value: subHeadTabletMarginUnit,
        label: 'subHeadTabletMarginUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingSubheadLink,
        label: 'spacingSubheadLink'
      }
    })))), 'none' !== ctaType && 'all' !== ctaType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: "Call to Action",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, ctaType === 'text' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_15___default.a, {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaLinkColor ? ctaLinkColor : '',
        onColorChange: value => setAttributes({
          ctaLinkColor: value
        })
      }),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaLinkHoverColor ? ctaLinkHoverColor : '',
        onColorChange: value => setAttributes({
          ctaLinkHoverColor: value
        })
      })
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: ctaLoadGoogleFonts,
        label: 'ctaLoadGoogleFonts'
      },
      fontFamily: {
        value: ctaFontFamily,
        label: 'ctaFontFamily'
      },
      fontWeight: {
        value: ctaFontWeight,
        label: 'ctaFontWeight'
      },
      fontStyle: {
        value: ctaFontStyle,
        label: 'ctaFontStyle'
      },
      fontSizeType: {
        value: ctaFontSizeType,
        label: 'ctaFontSizeType'
      },
      fontSize: {
        value: ctaFontSize,
        label: 'ctaFontSize'
      },
      fontSizeMobile: {
        value: ctaFontSizeMobile,
        label: 'ctaFontSizeMobile'
      },
      fontSizeTablet: {
        value: ctaFontSizeTablet,
        label: 'ctaFontSizeTablet'
      },
      transform: {
        value: ctaTransform,
        label: 'ctaTransform'
      },
      decoration: {
        value: ctaDecoration,
        label: 'ctaDecoration'
      },
      disableLineHeight: true
    }), ctaType === 'button' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_15___default.a, {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaBtnLinkColor ? ctaBtnLinkColor : '',
        onColorChange: value => setAttributes({
          ctaBtnLinkColor: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaBgColor ? ctaBgColor : '',
        onColorChange: value => setAttributes({
          ctaBgColor: value
        })
      })),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaLinkHoverColor ? ctaLinkHoverColor : '',
        onColorChange: value => setAttributes({
          ctaLinkHoverColor: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaBgHoverColor ? ctaBgHoverColor : '',
        onColorChange: value => setAttributes({
          ctaBgHoverColor: value
        })
      }))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_6___default.a, {
      setAttributes: setAttributes,
      borderStyle: {
        value: ctaBorderStyle,
        label: 'ctaBorderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg')
      },
      borderWidth: {
        value: ctaBorderWidth,
        label: 'ctaBorderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg')
      },
      borderRadius: {
        value: ctaBorderRadius,
        label: 'ctaBorderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radius', 'ultimate-addons-for-gutenberg')
      },
      borderColor: {
        value: ctaBorderColor,
        label: 'ctaBorderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      borderHoverColor: {
        value: ctaBorderhoverColor,
        label: 'ctaBorderhoverColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover Color', 'ultimate-addons-for-gutenberg')
      },
      disableBottomSeparator: true
    })))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, (iconimgPosition === 'above-title' || iconimgPosition === 'below-title') && blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["UAGTabs"].general, imageIconPanel(), typographySettings(), seperatorSettings(), ctaSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["UAGTabs"].style, styleSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["UAGTabs"].advance, {
    parentProps: props
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__["default"])()
  }, loadPrefixGoogleFonts, loadSubHeadGoogleFonts, loadCtaGoogleFonts, loadHeadGoogleFonts));
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