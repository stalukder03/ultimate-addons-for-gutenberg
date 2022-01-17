(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/post-masonry/react-masonry-component"],{

/***/ "./node_modules/react-masonry-component/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-masonry-component/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\aksha\\Local Sites\\competition-analysis-gb\\app\\public\\wp-content\\plugins\\ultimate-addons-for-gutenberg\\node_modules\\react-masonry-component\\lib\\index.js'");

/***/ }),

/***/ "./src/blocks/post/post-masonry/blog.js":
/*!**********************************************!*\
  !*** ./src/blocks/post/post-masonry/blog.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/getPreviewType */ "./blocks-config/uagb-controls/getPreviewType.js");
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././function */ "./src/blocks/post/function.js");




const Masonry = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => __webpack_require__.e(/*! import() | chunks/post-masonry/react-masonry-component */ "chunks/post-masonry/react-masonry-component").then(__webpack_require__.t.bind(null, /*! react-masonry-component */ "./node_modules/react-masonry-component/lib/index.js", 7)));


function Blog(props) {
  const {
    attributes,
    className,
    latestPosts,
    block_id
  } = props;
  const deviceType = Object(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_3__["useDeviceType"])();
  const {
    columns,
    tcolumns,
    mcolumns,
    imgPosition,
    postsToShow,
    paginationEventType,
    buttonText,
    paginationType,
    layoutConfig
  } = attributes; // Removing posts from display should be instant.

  const displayPosts = latestPosts.length > postsToShow ? latestPosts.slice(0, postsToShow) : latestPosts;

  const paginationRender = () => {
    if ('infinite' === paginationType) {
      if ('scroll' === paginationEventType) {
        return /*#__PURE__*/React.createElement("div", {
          className: "uagb-post-inf-loader"
        }, /*#__PURE__*/React.createElement("div", {
          className: "uagb-post-loader-1"
        }), /*#__PURE__*/React.createElement("div", {
          className: "uagb-post-loader-2"
        }), /*#__PURE__*/React.createElement("div", {
          className: "uagb-post-loader-3"
        }));
      }

      if ('button' === paginationEventType) {
        return /*#__PURE__*/React.createElement("div", {
          className: "uagb-post__load-more-wrap"
        }, /*#__PURE__*/React.createElement("span", {
          className: "uagb-post-pagination-button"
        }, /*#__PURE__*/React.createElement("a", {
          // eslint-disable-line jsx-a11y/anchor-is-valid
          className: "uagb-post__load-more"
        }, buttonText)));
      }
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-post-grid', 'uagb-post__arrow-outside', `uagb-post__image-position-${imgPosition}`, `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-block-${block_id}`),
    "data-blog-id": block_id
  }, /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }, /*#__PURE__*/React.createElement(Masonry, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('is-masonry', `uagb-post__columns-${columns}`, `uagb-post__columns-tablet-${tcolumns}`, `uagb-post__columns-mobile-${mcolumns}`, 'uagb-post__items', className, 'uagb-post-grid', 'uagb-post__arrow-outside', `uagb-post__image-position-${imgPosition}`, `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-block-${block_id}`),
    "data-blog-id": block_id
  }, /*#__PURE__*/React.createElement(_function__WEBPACK_IMPORTED_MODULE_4__["InnerBlockLayoutContextProvider"], {
    parentName: "uagb/post-masonry",
    parentClassName: "uagb-block-grid"
  }, displayPosts.map((post, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "uagb-post__inner-wrap"
  }, Object(_function__WEBPACK_IMPORTED_MODULE_4__["renderPostLayout"])('uagb/post-masonry', post, layoutConfig, props.attributes, props.categoriesList)))))), paginationRender());
}

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

}]);
//# sourceMappingURL=react-masonry-component.js.map