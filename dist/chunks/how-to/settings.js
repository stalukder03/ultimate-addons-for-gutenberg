(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/how-to/settings"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/image/editor.lazy.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/image/editor.lazy.scss ***!
  \******************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n", "",{"version":3,"sources":["webpack://./src/components/image/editor.lazy.scss"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,2BAA2B;EAC3B,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB,EAAE;EACzB;IACE,SAAS;IACT,UAAU,EAAE;EACd;IACE,iBAAiB,EAAE;;AAEvB;;;;;EAKE,gBAAgB,EAAE","sourcesContent":[".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/how-to/settings.js":
/*!***************************************!*\
  !*** ./src/blocks/how-to/settings.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/how-to/style.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















let imageSizeOptions = [{
  value: 'thumbnail',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Thumbnail', 'ultimate-addons-for-gutenberg')
}, {
  value: 'medium',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Medium', 'ultimate-addons-for-gutenberg')
}, {
  value: 'full',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Large', 'ultimate-addons-for-gutenberg')
}];

const Settings = props => {
  props = props.parentProps; // Setup the attributes

  const {
    attributes,
    setAttributes,
    attributes: {
      overallAlignment,
      showEstcost,
      showTotaltime,
      showMaterials,
      showTools,
      showTotaltimecolor,
      tools_count,
      material_count,
      tools,
      materials,
      mainimage,
      imgSize,
      headingColor,
      subHeadingColor,
      headingTag,
      headFontFamily,
      headFontWeight,
      headFontSubset,
      headFontSizeType,
      headFontSize,
      headFontSizeMobile,
      headFontSizeTablet,
      headLineHeightType,
      headLineHeight,
      headLineHeightMobile,
      headLineHeightTablet,
      subHeadFontFamily,
      subHeadFontWeight,
      subHeadFontSubset,
      subHeadFontSize,
      subHeadFontSizeType,
      subHeadFontSizeMobile,
      subHeadFontSizeTablet,
      subHeadLineHeight,
      subHeadLineHeightType,
      subHeadLineHeightMobile,
      subHeadLineHeightTablet,
      headLoadGoogleFonts,
      subHeadLoadGoogleFonts,
      //Total time.
      priceFontSizeType,
      priceFontSize,
      priceFontSizeTablet,
      priceFontSizeMobile,
      priceFontFamily,
      priceFontWeight,
      priceFontSubset,
      priceLineHeightType,
      priceLineHeight,
      priceLineHeightTablet,
      priceLineHeightMobile,
      priceLoadGoogleFonts,
      timeSpace,
      costSpace,
      row_gap,
      step_gap,
      timeInHours,
      timeInDays,
      timeInMonths,
      timeInYears,
      timeInMins,
      time
    }
  } = props;
  /*
   * Event to set Image as while adding.
   */

  const onSelectImage = media => {
    if (!media || !media.url) {
      setAttributes({
        mainimage: null
      });
      return;
    }

    if (!media.type || 'image' !== media.type) {
      setAttributes({
        mainimage: null
      });
      return;
    }

    setAttributes({
      mainimage: media
    });
  };
  /*
   * Event to set Image as null while removing.
   */


  const onRemoveImage = () => {
    setAttributes({
      mainimage: ''
    });
  };

  const getImageSize = sizes => {
    const sizeArr = [];
    jquery__WEBPACK_IMPORTED_MODULE_4___default.a.each(sizes, function (index) {
      const name = index;
      const p = {
        value: name,
        label: name
      };
      sizeArr.push(p);
    });
    return sizeArr;
  };

  if (mainimage && mainimage.sizes) {
    imageSizeOptions = getImageSize(mainimage.sizes);
  }

  const minsValue = timeInMins ? timeInMins : time;
  let loadHeadingGoogleFonts;
  let loadSubHeadingGoogleFonts;
  let loadPriceGoogleFonts;

  if (true === headLoadGoogleFonts) {
    const hconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: hconfig
    });
  }

  if (true === subHeadLoadGoogleFonts) {
    const sconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: sconfig
    });
  }

  if (true === priceLoadGoogleFonts) {
    const pconfig = {
      google: {
        families: [priceFontFamily + (priceFontWeight ? ':' + priceFontWeight : '')]
      }
    };
    loadPriceGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: pconfig
    });
  }

  const titleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingTag,
        label: 'headingTag'
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }]
    }));
  };

  const imageSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onSelectImage: onSelectImage,
      backgroundImage: mainimage,
      onRemoveImage: onRemoveImage
    }), mainimage && mainimage.url !== 'null' && mainimage.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Image Size', 'ultimate-addons-for-gutenberg'),
      options: imageSizeOptions,
      value: imgSize,
      onChange: value => setAttributes({
        imgSize: value
      })
    }));
  };

  const timeSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Time', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Show Total Time', 'ultimate-addons-for-gutenberg'),
      checked: showTotaltime,
      onChange: () => setAttributes({
        showTotaltime: !showTotaltime
      }),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Note: Time is recommended field for schema. It should be ON', 'ultimate-addons-for-gutenberg')
    }), showTotaltime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Years', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: timeInYears,
      onChange: value => setAttributes({
        timeInYears: value
      }),
      min: 1,
      max: 10,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Months', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: timeInMonths,
      onChange: value => setAttributes({
        timeInMonths: value
      }),
      min: 1,
      max: 12,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Days', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: timeInDays,
      onChange: value => setAttributes({
        timeInDays: value
      }),
      min: 1,
      max: 31,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Hours', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: timeInHours,
      onChange: value => setAttributes({
        timeInHours: value
      }),
      min: 1,
      max: 24,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Minutes', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: minsValue,
      onChange: value => setAttributes({
        timeInMins: value
      }),
      min: 1,
      max: 60,
      displayUnit: false
    })));
  };

  const costSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Cost', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Show Estimated Cost', 'ultimate-addons-for-gutenberg'),
      checked: showEstcost,
      onChange: () => setAttributes({
        showEstcost: !showEstcost
      }),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Note: Cost is recommended field for schema.It should be ON', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["ExternalLink"], {
      href: 'https://en.wikipedia.org/wiki/List_of_circulating_currencies'
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Click here to find your countrys ISO code.', 'ultimate-addons-for-gutenberg')));
  };

  const toolsSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Tools', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Show Tools', 'ultimate-addons-for-gutenberg'),
      checked: showTools,
      onChange: () => setAttributes({
        showTools: !showTools
      }),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Note: This is recommended field for schema.It should be ON', 'ultimate-addons-for-gutenberg')
    }), showTools && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Number of Tools', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: tools_count,
      onChange: newCount => {
        const cloneIcons = [...tools];

        if (cloneIcons.length < newCount) {
          const incAmount = Math.abs(newCount - cloneIcons.length);
          {
            for (let i = 0; i < incAmount; i++) {
              cloneIcons.push({
                add_required_tools: '- A Computer' + (cloneIcons.length + 1)
              });
            }
          }
          setAttributes({
            tools: cloneIcons
          });
        } else {
          const incAmount = Math.abs(newCount - cloneIcons.length);
          const data_new = cloneIcons;

          for (let i = 0; i < incAmount; i++) {
            data_new.pop();
          }

          setAttributes({
            tools: data_new
          });
        }

        setAttributes({
          tools_count: newCount
        });
      },
      min: 1,
      max: 50,
      displayUnit: false
    }));
  };

  const materialsSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Materials', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Show Materials', 'ultimate-addons-for-gutenberg'),
      checked: showMaterials,
      onChange: () => setAttributes({
        showMaterials: !showMaterials
      }),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Note: This is recommended field for schema.It should be ON', 'ultimate-addons-for-gutenberg')
    }), showMaterials && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Number of Materials', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: material_count,
      onChange: newCount => {
        const cloneIcons = [...materials];

        if (cloneIcons.length < newCount) {
          const incAmount = Math.abs(newCount - cloneIcons.length);
          {
            for (let i = 0; i < incAmount; i++) {
              cloneIcons.push({
                add_required_materials: '- A WordPress Website' + (cloneIcons.length + 1)
              });
            }
          }
          setAttributes({
            materials: cloneIcons
          });
        } else {
          const incAmount = Math.abs(newCount - cloneIcons.length);
          const data_new = cloneIcons;

          for (let i = 0; i < incAmount; i++) {
            data_new.pop();
          }

          setAttributes({
            materials: data_new
          });
        }

        setAttributes({
          material_count: newCount
        });
      },
      min: 1,
      max: 50,
      displayUnit: false
    }));
  };

  const headingColorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Heading', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: headingColor ? headingColor : '',
      onColorChange: value => setAttributes({
        headingColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      fontSubset: {
        value: headFontSubset,
        label: 'headFontSubset'
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
      }
    }));
  };

  const secheadingColorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Secondary Heading', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: showTotaltimecolor ? showTotaltimecolor : '',
      onColorChange: value => setAttributes({
        showTotaltimecolor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: priceLoadGoogleFonts,
        label: 'priceLoadGoogleFonts'
      },
      fontFamily: {
        value: priceFontFamily,
        label: 'priceFontFamily'
      },
      fontWeight: {
        value: priceFontWeight,
        label: 'priceFontWeight'
      },
      fontSubset: {
        value: priceFontSubset,
        label: 'priceFontSubset'
      },
      fontSizeType: {
        value: priceFontSizeType,
        label: 'priceFontSizeType'
      },
      fontSize: {
        value: priceFontSize,
        label: 'priceFontSize'
      },
      fontSizeMobile: {
        value: priceFontSizeMobile,
        label: 'priceFontSizeMobile'
      },
      fontSizeTablet: {
        value: priceFontSizeTablet,
        label: 'priceFontSizeTablet'
      },
      lineHeightType: {
        value: priceLineHeightType,
        label: 'priceLineHeightType'
      },
      lineHeight: {
        value: priceLineHeight,
        label: 'priceLineHeight'
      },
      lineHeightMobile: {
        value: priceLineHeightMobile,
        label: 'priceLineHeightMobile'
      },
      lineHeightTablet: {
        value: priceLineHeightTablet,
        label: 'priceLineHeightTablet'
      }
    }));
  };

  const descriptionColorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Description', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: subHeadingColor ? subHeadingColor : '',
      onColorChange: value => setAttributes({
        subHeadingColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      fontSubset: {
        value: subHeadFontSubset,
        label: 'subHeadFontSubset'
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
      }
    }));
  };

  const spacingSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, showTotaltime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Time Margin', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: timeSpace,
      onChange: value => setAttributes({
        timeSpace: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }), showEstcost && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Cost Margin', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: costSpace,
      onChange: value => setAttributes({
        costSpace: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Row Gap', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: row_gap,
      onChange: value => setAttributes({
        row_gap: value
      }),
      min: 0,
      max: 500,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Gap Between Steps', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: step_gap,
      onChange: value => setAttributes({
        step_gap: value
      }),
      min: 0,
      max: 500,
      displayUnit: false
    }));
  };

  const blockControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockControls"], {
      key: "index"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["AlignmentToolbar"], {
      value: overallAlignment,
      onChange: value => setAttributes({
        overallAlignment: value
      })
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].general, titleSettings(), imageSettings(), timeSettings(), costSettings(), toolsSettings(), materialsSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].style, headingColorSettings(), secheadingColorSettings(), descriptionColorSettings(), spacingSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].advance, {
    parentProps: props
  })))), loadHeadingGoogleFonts, loadSubHeadingGoogleFonts, loadPriceGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/image/editor.lazy.scss":
/*!***********************************************!*\
  !*** ./src/components/image/editor.lazy.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/image/editor.lazy.scss");

            

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

/***/ "./src/components/image/index.js":
/*!***************************************!*\
  !*** ./src/components/image/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/image/editor.lazy.scss");






const UAGImage = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].unuse();
    };
  }, []);
  const {
    onSelectImage,
    backgroundImage,
    onRemoveImage,
    showVideoInput,
    label
  } = props;

  let labelText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image', 'ultimate-addons-for-gutenberg');

  let selectImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Image', 'ultimate-addons-for-gutenberg');

  let replaceImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Replace Image', 'ultimate-addons-for-gutenberg');

  let removeImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove Image', 'ultimate-addons-for-gutenberg');

  let allowedTypes = ['image'];

  if (showVideoInput) {
    labelText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Video', 'ultimate-addons-for-gutenberg');
    selectImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Video', 'ultimate-addons-for-gutenberg');
    replaceImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Replace Video', 'ultimate-addons-for-gutenberg');
    removeImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove Video', 'ultimate-addons-for-gutenberg');
    allowedTypes = ['video'];
  }

  labelText = label ? label : labelText;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    className: "editor-bg-image-control",
    id: `uagb-option-selector-${label}`,
    label: labelText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "uagb-bg-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    title: selectImageLabel,
    onSelect: onSelectImage,
    allowedTypes: allowedTypes,
    value: backgroundImage,
    render: ({
      open
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isSecondary: true,
      onClick: open
    }, !(backgroundImage !== null && backgroundImage !== void 0 && backgroundImage.url) ? selectImageLabel : replaceImageLabel)
  }), (backgroundImage === null || backgroundImage === void 0 ? void 0 : backgroundImage.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "uagb-rm-btn",
    onClick: onRemoveImage,
    isLink: true,
    isDestructive: true
  }, removeImageLabel), props.help && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "uag-control-help-notice"
  }, props.help)));
};

/* harmony default export */ __webpack_exports__["default"] = (UAGImage);

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