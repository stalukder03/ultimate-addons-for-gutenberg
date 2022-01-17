(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/post-timeline/settings"],{

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

/***/ "./src/blocks/timeline/post-timeline/settings.js":
/*!*******************************************************!*\
  !*** ./src/blocks/timeline/post-timeline/settings.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/icon-picker */ "./src/components/icon-picker/index.js");
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Components_tabs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



















const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    categoriesList,
    setAttributes,
    taxonomyList
  } = props;
  const {
    headingColor,
    subHeadingColor,
    backgroundColor,
    separatorColor,
    separatorFillColor,
    separatorBg,
    separatorBorder,
    borderFocus,
    headingTag,
    headFontSizeType,
    headFontSize,
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
    timelinAlignment,
    arrowlinAlignment,
    subHeadFontSizeType,
    subHeadFontSize,
    subHeadFontSizeTablet,
    subHeadFontSizeMobile,
    subHeadFontFamily,
    subHeadFontWeight,
    subHeadFontStyle,
    subHeadLineHeightType,
    subHeadLineHeight,
    subHeadLineHeightTablet,
    subHeadLineHeightMobile,
    subHeadLoadGoogleFonts,
    headSpace,
    separatorwidth,
    borderwidth,
    connectorBgsize,
    authorSpace,
    contentSpace,
    authorColor,
    authorFontSizeType,
    authorFontSize,
    authorFontSizeTablet,
    authorFontSizeMobile,
    authorFontFamily,
    authorFontWeight,
    authorFontStyle,
    authorLineHeightType,
    authorLineHeight,
    authorLineHeightTablet,
    authorLineHeightMobile,
    authorLoadGoogleFonts,
    dateBottomspace,
    displayPostDate,
    displayPostExcerpt,
    displayPostAuthor,
    displayPostImage,
    displayPostLink,
    align,
    order,
    orderBy,
    categories,
    postsToShow,
    imageSize,
    readMoreText,
    ctaBackground,
    icon,
    iconColor,
    dateColor,
    ctaColor,
    dateFontsizeType,
    dateFontsize,
    dateFontsizeTablet,
    dateFontsizeMobile,
    dateFontFamily,
    dateFontWeight,
    dateFontStyle,
    dateLineHeightType,
    dateLineHeight,
    dateLineHeightTablet,
    dateLineHeightMobile,
    dateLoadGoogleFonts,
    ctaFontSizeType,
    ctaFontSize,
    ctaFontSizeTablet,
    ctaFontSizeMobile,
    ctaFontFamily,
    ctaFontWeight,
    ctaFontStyle,
    ctaLineHeightType,
    ctaLineHeight,
    ctaLineHeightTablet,
    ctaLineHeightMobile,
    ctaLoadGoogleFonts,
    iconSize,
    exerptLength,
    borderRadius,
    contentPadding,
    iconFocus,
    iconBgFocus,
    stack,
    linkTarget,
    postType,
    taxonomyType,
    dateFormat,
    excludeCurrentPost,
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
    marginUnit,
    mobileMarginUnit,
    tabletMarginUnit,
    marginLink,
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
    paddingUnit,
    mobilePaddingUnit,
    tabletPaddingUnit,
    paddingLink,
    headTransform,
    authorTransform,
    subHeadTransform,
    dateTransform,
    ctaTransform,
    headDecoration,
    authorDecoration,
    subHeadDecoration,
    dateDecoration,
    ctaDecoration
  } = attributes;

  const onSelectPostType = value => {
    setAttributes({
      postType: value
    });
    setAttributes({
      categories: ''
    });
  };

  const onSelectTaxonomyType = value => {
    setAttributes({
      taxonomyType: value
    });
    setAttributes({
      categories: ''
    });
  };

  const getTimelineicon = value => {
    props.setAttributes({
      icon: value
    });
  };

  const taxonomyListOptions = [];
  const categoryListOptions = [{
    value: '',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('All', 'ultimate-addons-for-gutenberg')
  }];

  if ('' !== taxonomyList) {
    Object.keys(taxonomyList).map(item => {
      return taxonomyListOptions.push({
        value: taxonomyList[item].name,
        label: taxonomyList[item].label
      });
    });
  }

  if ('' !== categoriesList) {
    Object.keys(categoriesList).map(item => {
      return categoryListOptions.push({
        value: categoriesList[item].id,
        label: categoriesList[item].name
      });
    });
  }

  let loadHeadGoogleFonts;
  let loadSubHeadGoogleFonts;
  let loadDateGoogleFonts;
  let loadAuthorGoogleFonts;
  let loadCtaGoogleFonts;

  if (headLoadGoogleFonts === true) {
    const headconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: headconfig
    });
  }

  if (subHeadLoadGoogleFonts === true) {
    const subHeadconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: subHeadconfig
    });
  }

  if (dateLoadGoogleFonts === true) {
    const dateconfig = {
      google: {
        families: [dateFontFamily + (dateFontWeight ? ':' + dateFontWeight : '')]
      }
    };
    loadDateGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: dateconfig
    });
  }

  if (authorLoadGoogleFonts === true) {
    const authorconfig = {
      google: {
        families: [authorFontFamily + (authorFontWeight ? ':' + authorFontWeight : '')]
      }
    };
    loadAuthorGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: authorconfig
    });
  }

  if (ctaLoadGoogleFonts === true) {
    const ctaconfig = {
      google: {
        families: [ctaFontFamily + (ctaFontWeight ? ':' + ctaFontWeight : '')]
      }
    };
    loadCtaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: ctaconfig
    });
  }

  const today = new Date();

  const querySettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Query', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Post Type', 'ultimate-addons-for-gutenberg'),
      value: postType,
      onChange: value => onSelectPostType(value),
      options: uagb_blocks_info.post_types
    }), '' !== taxonomyList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Taxonomy', 'ultimate-addons-for-gutenberg'),
      value: taxonomyType,
      onChange: value => onSelectTaxonomyType(value),
      options: taxonomyListOptions
    }), '' != categoriesList &&
    /*#__PURE__*/
    // eslint-disable-line eqeqeq
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: taxonomyList[taxonomyType].label,
      value: categories,
      onChange: value => setAttributes({
        categories: value
      }),
      options: categoryListOptions
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Exclude Current Post', 'ultimate-addons-for-gutenberg'),
      checked: excludeCurrentPost,
      onChange: () => setAttributes({
        excludeCurrentPost: !excludeCurrentPost
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["QueryControls"], {
      order,
      orderBy,
      numberOfItems: postsToShow,
      onNumberOfItemsChange: value => setAttributes({
        postsToShow: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Order By', 'ultimate-addons-for-gutenberg'),
      data: {
        value: orderBy,
        label: 'orderBy'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'date',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Date', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'rand',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Random', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'menu_order',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Menu Order', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Order', 'ultimate-addons-for-gutenberg'),
      data: {
        value: order,
        label: 'order'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'desc',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Descending', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'asc',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Ascending', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false
    }));
  };

  const layoutSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Orientation', 'ultimate-addons-for-gutenberg'),
      data: {
        value: timelinAlignment,
        label: 'timelinAlignment'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: align,
        label: 'align'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Arrow Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: arrowlinAlignment,
        label: 'arrowlinAlignment'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Top', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Center', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Stack On', 'ultimate-addons-for-gutenberg'),
      data: {
        value: stack,
        label: 'stack'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'none',
        label: 'None',
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: 'Tablet',
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: 'Mobile',
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Note: Choose on what breakpoint the Content Timeline will stack. It will be visible on front end only.', 'ultimate-addons-for-gutenberg')
    }));
  };

  const ImageSetting = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Display Featured Image', 'ultimate-addons-for-gutenberg'),
      checked: displayPostImage,
      onChange: () => setAttributes({
        displayPostImage: !displayPostImage
      })
    }), displayPostImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Featured Image Style', 'ultimate-addons-for-gutenberg'),
      options: uagb_blocks_info.image_sizes,
      value: imageSize,
      onChange: value => props.setAttributes({
        imageSize: value
      })
    }));
  };

  const contentSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Heading Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingTag,
        label: 'headingTag'
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('P', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Display Post Author', 'ultimate-addons-for-gutenberg'),
      checked: displayPostAuthor,
      onChange: () => setAttributes({
        displayPostAuthor: !displayPostAuthor
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Display Post Date', 'ultimate-addons-for-gutenberg'),
      checked: displayPostDate,
      onChange: () => setAttributes({
        displayPostDate: !displayPostDate
      })
    }), displayPostDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Date Format', 'ultimate-addons-for-gutenberg'),
      value: dateFormat,
      onChange: value => setAttributes({
        dateFormat: value
      }),
      options: [{
        value: 'M j, Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('M j, Y', today)
      }, {
        value: 'F j, Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('F j, Y', today)
      }, {
        value: 'm/d/Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('m/d/Y', today)
      }, {
        value: 'm-d-Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('m-d-Y', today)
      }, {
        value: 'm.d.Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('m.d.Y', today)
      }, {
        value: 'd M Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('d M Y', today)
      }, {
        value: 'd F Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('d F Y', today)
      }, {
        value: 'd-m-Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('d-m-Y', today)
      }, {
        value: 'd.m.Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('d.m.Y', today)
      }, {
        value: 'd/m/Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('d/m/Y', today)
      }, {
        value: 'Y-m-d',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('Y-m-d', today)
      }, {
        value: 'Y.m.d',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('Y.m.d', today)
      }, {
        value: 'Y/m/d',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('Y/m/d', today)
      }, {
        value: 'M, Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('M, Y', today)
      }, {
        value: 'M Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('M Y', today)
      }, {
        value: 'F, Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('F, Y', today)
      }, {
        value: 'F Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_13__["dateI18n"])('F Y', today)
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Display Post Excerpt', 'ultimate-addons-for-gutenberg'),
      checked: displayPostExcerpt,
      onChange: () => setAttributes({
        displayPostExcerpt: !displayPostExcerpt
      })
    }), displayPostExcerpt && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Excerpt Length', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: exerptLength,
      onChange: value => setAttributes({
        exerptLength: value
      }),
      min: 1,
      max: 50,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Display Continue Reading Link', 'ultimate-addons-for-gutenberg'),
      checked: displayPostLink,
      onChange: () => setAttributes({
        displayPostLink: !displayPostLink
      })
    }), displayPostLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('CTA Text', 'ultimate-addons-for-gutenberg'),
      value: readMoreText,
      onChange: value => setAttributes({
        readMoreText: value
      })
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Open links in New Tab', 'ultimate-addons-for-gutenberg'),
      checked: linkTarget,
      onChange: () => setAttributes({
        linkTarget: !linkTarget
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Rounded Corners', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: borderRadius,
      onChange: value => setAttributes({
        borderRadius: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }));
  };

  const connectorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Connector', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: icon,
      onChange: getTimelineicon
    }), icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Icon Size', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: iconSize,
      onChange: value => setAttributes({
        iconSize: value
      }),
      min: 0,
      max: 30,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Icon Background Size', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: connectorBgsize,
      onChange: value => setAttributes({
        connectorBgsize: value
      }),
      min: 25,
      max: 90,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: borderwidth,
      onChange: value => setAttributes({
        borderwidth: value
      }),
      min: 1,
      max: 10,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Connector Width', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: separatorwidth,
      onChange: value => setAttributes({
        separatorwidth: value
      }),
      min: 1,
      max: 10,
      displayUnit: false
    }));
  };

  const connectorColorsSettings = () => {
    const iconColorSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Line Color', 'ultimate-addons-for-gutenberg'),
      colorValue: separatorColor ? separatorColor : '',
      onColorChange: value => setAttributes({
        separatorColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Icon Color', 'ultimate-addons-for-gutenberg'),
      colorValue: iconColor ? iconColor : '',
      onColorChange: value => setAttributes({
        iconColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Icon Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: separatorBg ? separatorBg : '',
      onColorChange: value => setAttributes({
        separatorBg: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
      colorValue: separatorBorder ? separatorBorder : '',
      onColorChange: value => setAttributes({
        separatorBorder: value
      })
    }));
    const iconFocusSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Line Color', 'ultimate-addons-for-gutenberg'),
      colorValue: separatorFillColor ? separatorFillColor : '',
      onColorChange: value => setAttributes({
        separatorFillColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Icon Color', 'ultimate-addons-for-gutenberg'),
      colorValue: iconFocus ? iconFocus : '',
      onColorChange: value => setAttributes({
        iconFocus: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Icon Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: iconBgFocus ? iconBgFocus : '',
      onColorChange: value => setAttributes({
        iconBgFocus: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
      colorValue: borderFocus ? borderFocus : '',
      onColorChange: value => setAttributes({
        borderFocus: value
      })
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Connector', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_11___default.a, {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'focus',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Focus', 'ultimate-addons-for-gutenberg')
      }],
      normal: iconColorSettings,
      focus: iconFocusSettings,
      disableBottomSeparator: true
    }));
  };

  const headingStyleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Heading', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: headingColor ? headingColor : '',
      onColorChange: value => setAttributes({
        headingColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: props.attributes,
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: headSpace,
      onChange: value => setAttributes({
        headSpace: value
      }),
      min: 0,
      max: 100,
      displayUnit: false
    }));
  };

  const authorStyleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Author', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: authorColor ? authorColor : '',
      onColorChange: value => setAttributes({
        authorColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: authorLoadGoogleFonts,
        label: 'authorLoadGoogleFonts'
      },
      fontFamily: {
        value: authorFontFamily,
        label: 'authorFontFamily'
      },
      fontWeight: {
        value: authorFontWeight,
        label: 'authorFontWeight'
      },
      fontStyle: {
        value: authorFontStyle,
        label: 'authorFontStyle'
      },
      fontSizeType: {
        value: authorFontSizeType,
        label: 'authorFontSizeType'
      },
      fontSize: {
        value: authorFontSize,
        label: 'authorFontSize'
      },
      fontSizeMobile: {
        value: authorFontSizeMobile,
        label: 'authorFontSizeMobile'
      },
      fontSizeTablet: {
        value: authorFontSizeTablet,
        label: 'authorFontSizeTablet'
      },
      lineHeightType: {
        value: authorLineHeightType,
        label: 'authorLineHeightType'
      },
      lineHeight: {
        value: authorLineHeight,
        label: 'authorLineHeight'
      },
      lineHeightMobile: {
        value: authorLineHeightMobile,
        label: 'authorLineHeightMobile'
      },
      lineHeightTablet: {
        value: authorLineHeightTablet,
        label: 'authorLineHeightTablet'
      },
      transform: {
        value: authorTransform,
        label: 'authorTransform'
      },
      decoration: {
        value: authorDecoration,
        label: 'authorDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: authorSpace,
      onChange: value => setAttributes({
        authorSpace: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }));
  };

  const contentStyleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: subHeadingColor ? subHeadingColor : '',
      onColorChange: value => setAttributes({
        subHeadingColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: props.attributes,
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
    }), displayPostLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: contentSpace,
      onChange: value => setAttributes({
        contentSpace: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }));
  };

  const dateStyleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Date', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: dateColor ? dateColor : '',
      onColorChange: value => setAttributes({
        dateColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: props.attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: dateLoadGoogleFonts,
        label: 'dateLoadGoogleFonts'
      },
      fontFamily: {
        value: dateFontFamily,
        label: 'dateFontFamily'
      },
      fontWeight: {
        value: dateFontWeight,
        label: 'dateFontWeight'
      },
      fontStyle: {
        value: dateFontStyle,
        label: 'dateFontStyle'
      },
      fontSizeType: {
        value: dateFontsizeType,
        label: 'dateFontsizeType'
      },
      fontSize: {
        value: dateFontsize,
        label: 'dateFontsize'
      },
      fontSizeMobile: {
        value: dateFontsizeMobile,
        label: 'dateFontsizeMobile'
      },
      fontSizeTablet: {
        value: dateFontsizeTablet,
        label: 'dateFontsizeTablet'
      },
      lineHeightType: {
        value: dateLineHeightType,
        label: 'dateLineHeightType'
      },
      lineHeight: {
        value: dateLineHeight,
        label: 'dateLineHeight'
      },
      lineHeightMobile: {
        value: dateLineHeightMobile,
        label: 'dateLineHeightMobile'
      },
      lineHeightTablet: {
        value: dateLineHeightTablet,
        label: 'dateLineHeightTablet'
      },
      transform: {
        value: dateTransform,
        label: 'dateTransform'
      },
      decoration: {
        value: dateDecoration,
        label: 'dateDecoration'
      }
    }), timelinAlignment !== 'center' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: dateBottomspace,
      onChange: value => setAttributes({
        dateBottomspace: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }));
  };

  const ctaStyleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('CTA', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: ctaColor ? ctaColor : '',
      onColorChange: value => setAttributes({
        ctaColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: ctaBackground ? ctaBackground : '',
      onColorChange: value => setAttributes({
        ctaBackground: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      lineHeightType: {
        value: ctaLineHeightType,
        label: 'ctaLineHeightType'
      },
      lineHeight: {
        value: ctaLineHeight,
        label: 'ctaLineHeight'
      },
      lineHeightMobile: {
        value: ctaLineHeightMobile,
        label: 'ctaLineHeightMobile'
      },
      lineHeightTablet: {
        value: ctaLineHeightTablet,
        label: 'ctaLineHeightTablet'
      },
      transform: {
        value: ctaTransform,
        label: 'ctaTransform'
      },
      decoration: {
        value: ctaDecoration,
        label: 'ctaDecoration'
      }
    }));
  };

  const backgroundColorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: backgroundColor ? backgroundColor : '',
      onColorChange: value => setAttributes({
        backgroundColor: value
      })
    }));
  };

  const spacingSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6___default.a, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content Padding', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: contentPadding,
      onChange: value => setAttributes({
        contentPadding: value
      }),
      min: 1,
      max: 50,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Block Padding', 'ultimate-addons-for-gutenberg'),
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
        value: paddingUnit,
        label: 'paddingUnit'
      },
      mUnit: {
        value: mobilePaddingUnit,
        label: 'mobilePaddingUnit'
      },
      tUnit: {
        value: tabletPaddingUnit,
        label: 'tabletPaddingUnit'
      },
      attributes: props,
      setAttributes: setAttributes,
      link: {
        value: paddingLink,
        label: 'paddingLink'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Block Margin', 'ultimate-addons-for-gutenberg'),
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
        value: marginUnit,
        label: 'marginUnit'
      },
      mUnit: {
        value: mobileMarginUnit,
        label: 'mobileMarginUnit'
      },
      tUnit: {
        value: tabletMarginUnit,
        label: 'tabletMarginUnit'
      },
      attributes: props,
      setAttributes: setAttributes,
      link: {
        value: marginLink,
        label: 'marginLink'
      }
    })));
  };

  const blockControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["BlockAlignmentToolbar"], {
      value: timelinAlignment,
      onChange: value => {
        setAttributes({
          timelinAlignment: value
        });
      },
      controls: ['left', 'center', 'right']
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["AlignmentToolbar"], {
      value: align,
      onChange: value => {
        setAttributes({
          align: value
        });
      },
      controls: ['left', 'center', 'right']
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].general, querySettings(), layoutSettings(), ImageSetting(), contentSettings(), connectorSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].style, headingStyleSettings(), displayPostAuthor && authorStyleSettings(), displayPostExcerpt && contentStyleSettings(), displayPostDate && dateStyleSettings(), displayPostLink && ctaStyleSettings(), backgroundColorSettings(), connectorColorsSettings(), spacingSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].advance, {
    parentProps: props
  })))), loadHeadGoogleFonts, loadSubHeadGoogleFonts, loadDateGoogleFonts, loadAuthorGoogleFonts, loadCtaGoogleFonts);
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