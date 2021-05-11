(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/team/settings"],{

/***/ "./src/blocks/team/settings.js":
/*!*************************************!*\
  !*** ./src/blocks/team/settings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Controls_UAGBIcon_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/UAGBIcon.json */ "./blocks-config/uagb-controls/UAGBIcon.json");
var _Controls_UAGBIcon_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @Controls/UAGBIcon.json */ "./blocks-config/uagb-controls/UAGBIcon.json", 1);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");






var TypographyControl = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../components/typography */ "./src/components/typography/index.js"));
});
var WebfontLoader = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../components/typography/fontloader */ "./src/components/typography/fontloader.js"));
});
var FontIconPicker = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js", 7));
});
var imageSizeOptions = [{
  value: 'thumbnail',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Thumbnail', 'ultimate-addons-for-gutenberg')
}, {
  value: 'medium',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Medium', 'ultimate-addons-for-gutenberg')
}, {
  value: 'full',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Large', 'ultimate-addons-for-gutenberg')
}];
var _wp$blockEditor = wp.blockEditor,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    BaseControl = _wp$components.BaseControl,
    ToggleControl = _wp$components.ToggleControl;

var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      setAttributes = _props.setAttributes,
      attributes = _props.attributes;
  var align = attributes.align,
      tag = attributes.tag,
      titleColor = attributes.titleColor,
      prefixColor = attributes.prefixColor,
      descColor = attributes.descColor,
      titleFontFamily = attributes.titleFontFamily,
      titleFontWeight = attributes.titleFontWeight,
      titleFontSubset = attributes.titleFontSubset,
      titleFontSizeType = attributes.titleFontSizeType,
      titleFontSize = attributes.titleFontSize,
      titleFontSizeMobile = attributes.titleFontSizeMobile,
      titleFontSizeTablet = attributes.titleFontSizeTablet,
      titleLineHeightType = attributes.titleLineHeightType,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightMobile = attributes.titleLineHeightMobile,
      titleLineHeightTablet = attributes.titleLineHeightTablet,
      prefixFontFamily = attributes.prefixFontFamily,
      prefixFontWeight = attributes.prefixFontWeight,
      prefixFontSubset = attributes.prefixFontSubset,
      prefixFontSizeType = attributes.prefixFontSizeType,
      prefixFontSize = attributes.prefixFontSize,
      prefixFontSizeMobile = attributes.prefixFontSizeMobile,
      prefixFontSizeTablet = attributes.prefixFontSizeTablet,
      prefixLineHeightType = attributes.prefixLineHeightType,
      prefixLineHeight = attributes.prefixLineHeight,
      prefixLineHeightMobile = attributes.prefixLineHeightMobile,
      prefixLineHeightTablet = attributes.prefixLineHeightTablet,
      descFontFamily = attributes.descFontFamily,
      descFontWeight = attributes.descFontWeight,
      descFontSubset = attributes.descFontSubset,
      descFontSizeType = attributes.descFontSizeType,
      descFontSize = attributes.descFontSize,
      descFontSizeMobile = attributes.descFontSizeMobile,
      descFontSizeTablet = attributes.descFontSizeTablet,
      descLineHeightType = attributes.descLineHeightType,
      descLineHeight = attributes.descLineHeight,
      descLineHeightMobile = attributes.descLineHeightMobile,
      descLineHeightTablet = attributes.descLineHeightTablet,
      socialFontSize = attributes.socialFontSize,
      socialFontSizeType = attributes.socialFontSizeType,
      socialFontSizeMobile = attributes.socialFontSizeMobile,
      socialFontSizeTablet = attributes.socialFontSizeTablet,
      titleLoadGoogleFonts = attributes.titleLoadGoogleFonts,
      prefixLoadGoogleFonts = attributes.prefixLoadGoogleFonts,
      descLoadGoogleFonts = attributes.descLoadGoogleFonts,
      image = attributes.image,
      imgStyle = attributes.imgStyle,
      imgAlign = attributes.imgAlign,
      imgSize = attributes.imgSize,
      imgWidth = attributes.imgWidth,
      imgPosition = attributes.imgPosition,
      titleSpace = attributes.titleSpace,
      descSpace = attributes.descSpace,
      prefixSpace = attributes.prefixSpace,
      imgLeftMargin = attributes.imgLeftMargin,
      imgRightMargin = attributes.imgRightMargin,
      imgTopMargin = attributes.imgTopMargin,
      imgBottomMargin = attributes.imgBottomMargin,
      twitterIcon = attributes.twitterIcon,
      fbIcon = attributes.fbIcon,
      linkedinIcon = attributes.linkedinIcon,
      pinIcon = attributes.pinIcon,
      twitterLink = attributes.twitterLink,
      fbLink = attributes.fbLink,
      linkedinLink = attributes.linkedinLink,
      pinLink = attributes.pinLink,
      socialColor = attributes.socialColor,
      socialHoverColor = attributes.socialHoverColor,
      socialSpace = attributes.socialSpace,
      socialTarget = attributes.socialTarget,
      socialEnable = attributes.socialEnable,
      stack = attributes.stack;

  var onRemoveImage = function onRemoveImage() {
    setAttributes({
      image: null
    });
  };

  var getImageSize = function getImageSize(sizes) {
    var size_arr = [];

    for (var item in sizes) {
      size_arr.push({
        value: item,
        label: item
      });
    }

    return size_arr;
  };

  var onSelectImage = function onSelectImage(media) {
    var _props2 = props,
        setAttributes = _props2.setAttributes;

    if (!media || !media.url) {
      setAttributes({
        image: null
      });
      return;
    }

    if (!media.type || 'image' != media.type) {
      return;
    }

    setAttributes({
      image: media
    });

    if (media.sizes) {
      var new_img = getImageSize(media.sizes);
      imageSizeOptions = new_img;
    }
  };

  var svg_icons = Object.keys(_Controls_UAGBIcon_json__WEBPACK_IMPORTED_MODULE_3__);

  if (image && image.sizes) {
    imageSizeOptions = getImageSize(image.sizes);
  }

  var loadTitleGoogleFonts;
  var loadPrefixGoogleFonts;
  var loadDescGoogleFonts;

  if (titleLoadGoogleFonts == true) {
    var tconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WebfontLoader, {
      config: tconfig
    });
  }

  if (prefixLoadGoogleFonts == true) {
    var pconfig = {
      google: {
        families: [prefixFontFamily + (prefixFontWeight ? ':' + prefixFontWeight : '')]
      }
    };
    loadPrefixGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WebfontLoader, {
      config: pconfig
    });
  }

  if (descLoadGoogleFonts == true) {
    var dconfig = {
      google: {
        families: [descFontFamily + (descFontWeight ? ':' + descFontWeight : '')]
      }
    };
    loadDescGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WebfontLoader, {
      config: dconfig
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, imgPosition == 'above' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlockControls, {
    key: "controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlignmentToolbar, {
    value: align,
    onChange: function onChange(value) {
      return setAttributes({
        align: value
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InspectorControls, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseControl, {
    id: "team-settings",
    className: "editor-bg-image-control",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Team Member Image', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MediaUpload, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Image', 'ultimate-addons-for-gutenberg'),
    onSelect: onSelectImage,
    allowedTypes: ['image'],
    value: image,
    render: function render(_ref) {
      var open = _ref.open;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        isSecondary: true,
        onClick: open
      }, !image ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Image', 'ultimate-addons-for-gutenberg') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Replace image', 'ultimate-addons-for-gutenberg'));
    }
  }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    className: "uagb-rm-btn",
    onClick: onRemoveImage,
    isLink: true,
    isDestructive: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove Image', 'ultimate-addons-for-gutenberg'))), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Position', 'ultimate-addons-for-gutenberg'),
    value: imgPosition,
    onChange: function onChange(value) {
      return setAttributes({
        imgPosition: value
      });
    },
    options: [{
      value: 'above',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Above', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'left',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'right',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Right', 'ultimate-addons-for-gutenberg')
    }]
  }), imgPosition != 'above' && image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Stack on', 'ultimate-addons-for-gutenberg'),
    value: stack,
    options: [{
      value: 'none',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'tablet',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'mobile',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
    }],
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Note: Choose on what breakpoint the Team will stack.'),
    onChange: function onChange(value) {
      return setAttributes({
        stack: value
      });
    }
  }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image Style', 'ultimate-addons-for-gutenberg'),
    value: imgStyle,
    onChange: function onChange(value) {
      return setAttributes({
        imgStyle: value
      });
    },
    options: [{
      value: 'normal',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Normal', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'circle',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Circle', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'square',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Square', 'ultimate-addons-for-gutenberg')
    }]
  }), imgPosition && imgPosition !== 'above' && image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Vertical Alignment', 'ultimate-addons-for-gutenberg'),
    value: imgAlign,
    onChange: function onChange(value) {
      return setAttributes({
        imgAlign: value
      });
    },
    options: [{
      value: 'top',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'middle',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Middle', 'ultimate-addons-for-gutenberg')
    }]
  }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size', 'ultimate-addons-for-gutenberg'),
    options: imageSizeOptions,
    value: imgSize,
    onChange: function onChange(value) {
      return setAttributes({
        imgSize: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Width', 'ultimate-addons-for-gutenberg'),
    value: imgWidth,
    onChange: function onChange(value) {
      return setAttributes({
        imgWidth: value
      });
    },
    min: 0,
    max: 500,
    allowReset: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Social Links', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToggleControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable Social Links', 'ultimate-addons-for-gutenberg'),
    checked: socialEnable,
    onChange: function onChange() {
      return setAttributes({
        socialEnable: !socialEnable
      });
    }
  }), socialEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToggleControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Open Links in New Window', 'ultimate-addons-for-gutenberg'),
    checked: socialTarget,
    onChange: function onChange() {
      return setAttributes({
        socialTarget: !socialTarget
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Twitter', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontIconPicker, {
    icons: svg_icons,
    renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
    theme: "default",
    value: twitterIcon,
    onChange: function onChange(value) {
      return setAttributes({
        twitterIcon: value
      });
    },
    isMulti: false,
    noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('URL', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextControl, {
    value: twitterLink,
    onChange: function onChange(value) {
      return setAttributes({
        twitterLink: value
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter Twitter URL', 'ultimate-addons-for-gutenberg')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Facebook', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontIconPicker, {
    icons: svg_icons,
    renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
    theme: "default",
    value: fbIcon,
    onChange: function onChange(value) {
      return setAttributes({
        fbIcon: value
      });
    },
    isMulti: false,
    noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('URL', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextControl, {
    value: fbLink,
    onChange: function onChange(value) {
      return setAttributes({
        fbLink: value
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter Facebook URL', 'ultimate-addons-for-gutenberg')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('LinkedIn', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontIconPicker, {
    icons: svg_icons,
    renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
    noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Icon', 'ultimate-addons-for-gutenberg'),
    theme: "default",
    value: linkedinIcon,
    onChange: function onChange(value) {
      return setAttributes({
        linkedinIcon: value
      });
    },
    isMulti: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('URL', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextControl, {
    value: linkedinLink,
    onChange: function onChange(value) {
      return setAttributes({
        linkedinLink: value
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter LinkedIn URL', 'ultimate-addons-for-gutenberg')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Pinterest', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontIconPicker, {
    icons: svg_icons,
    renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
    noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Icon', 'ultimate-addons-for-gutenberg'),
    theme: "default",
    value: pinIcon,
    onChange: function onChange(value) {
      return setAttributes({
        pinIcon: value
      });
    },
    isMulti: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('URL', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextControl, {
    value: pinLink,
    onChange: function onChange(value) {
      return setAttributes({
        pinLink: value
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter Pinterest URL', 'ultimate-addons-for-gutenberg')
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title Tag', 'ultimate-addons-for-gutenberg'),
    value: tag,
    onChange: function onChange(value) {
      return setAttributes({
        tag: value
      });
    },
    options: [{
      value: 'h1',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H1', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'h2',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H2', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'h3',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H3', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'h4',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H4', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'h5',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H5', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'h6',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H6', 'ultimate-addons-for-gutenberg')
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_5__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypographyControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
    fontSubset: {
      value: titleFontSubset,
      label: 'titleFontSubset'
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
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Prefix', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_5__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypographyControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
    fontSubset: {
      value: prefixFontSubset,
      label: 'prefixFontSubset'
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
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_5__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypographyControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: descLoadGoogleFonts,
      label: 'descLoadGoogleFonts'
    },
    fontFamily: {
      value: descFontFamily,
      label: 'descFontFamily'
    },
    fontWeight: {
      value: descFontWeight,
      label: 'descFontWeight'
    },
    fontSubset: {
      value: descFontSubset,
      label: 'descFontSubset'
    },
    fontSizeType: {
      value: descFontSizeType,
      label: 'descFontSizeType'
    },
    fontSize: {
      value: descFontSize,
      label: 'descFontSize'
    },
    fontSizeMobile: {
      value: descFontSizeMobile,
      label: 'descFontSizeMobile'
    },
    fontSizeTablet: {
      value: descFontSizeTablet,
      label: 'descFontSizeTablet'
    },
    lineHeightType: {
      value: descLineHeightType,
      label: 'descLineHeightType'
    },
    lineHeight: {
      value: descLineHeight,
      label: 'descLineHeight'
    },
    lineHeightMobile: {
      value: descLineHeightMobile,
      label: 'descLineHeightMobile'
    },
    lineHeightTablet: {
      value: descLineHeightTablet,
      label: 'descLineHeightTablet'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Social Icons', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_5__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypographyControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    fontSizeType: {
      value: socialFontSizeType,
      label: 'socialFontSizeType'
    },
    fontSize: {
      value: socialFontSize,
      label: 'socialFontSize'
    },
    fontSizeMobile: {
      value: socialFontSizeMobile,
      label: 'socialFontSizeMobile'
    },
    fontSizeTablet: {
      value: socialFontSizeTablet,
      label: 'socialFontSizeTablet'
    },
    disableFontFamily: true,
    disableLineHeight: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelColorSettings, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color Settings', 'ultimate-addons-for-gutenberg'),
    initialOpen: false,
    colorSettings: [{
      value: titleColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          titleColor: colorValue
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title Color', 'ultimate-addons-for-gutenberg')
    }, {
      value: prefixColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          prefixColor: colorValue
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Designation Color', 'ultimate-addons-for-gutenberg')
    }, {
      value: descColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          descColor: colorValue
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description Color', 'ultimate-addons-for-gutenberg')
    }, {
      value: socialColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          socialColor: colorValue
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Social Icon Color', 'ultimate-addons-for-gutenberg')
    }, {
      value: socialHoverColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          socialHoverColor: colorValue
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Social Icon Hover Color', 'ultimate-addons-for-gutenberg')
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title Bottom Spacing', 'ultimate-addons-for-gutenberg'),
    value: titleSpace,
    onChange: function onChange(value) {
      return setAttributes({
        titleSpace: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true,
    initialPosition: 0
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Designation Bottom Spacing', 'ultimate-addons-for-gutenberg'),
    value: prefixSpace,
    onChange: function onChange(value) {
      return setAttributes({
        prefixSpace: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true,
    initialPosition: 0
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description Bottom Spacing', 'ultimate-addons-for-gutenberg'),
    value: descSpace,
    onChange: function onChange(value) {
      return setAttributes({
        descSpace: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Inter Social Icon Spacing', 'ultimate-addons-for-gutenberg'),
    value: socialSpace,
    onChange: function onChange(value) {
      return setAttributes({
        socialSpace: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image Margin (px)', 'ultimate-addons-for-gutenberg')), imgPosition != 'above' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].left_margin,
    className: 'uagb-margin-control',
    value: imgLeftMargin,
    onChange: function onChange(value) {
      return setAttributes({
        imgLeftMargin: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), imgPosition != 'above' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].right_margin,
    className: 'uagb-margin-control',
    value: imgRightMargin,
    onChange: function onChange(value) {
      return setAttributes({
        imgRightMargin: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].top_margin,
    className: 'uagb-margin-control',
    value: imgTopMargin,
    onChange: function onChange(value) {
      return setAttributes({
        imgTopMargin: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].bottom_margin,
    className: 'uagb-margin-control',
    value: imgBottomMargin,
    onChange: function onChange(value) {
      return setAttributes({
        imgBottomMargin: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_5__["default"])()
  }, loadTitleGoogleFonts, loadPrefixGoogleFonts, loadDescGoogleFonts));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map