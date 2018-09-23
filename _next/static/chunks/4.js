(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./components/vendors/Header/HeaderLinks.jsx":
/*!***************************************************!*\
  !*** ./components/vendors/Header/HeaderLinks.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/Icon/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CustomDropdown_CustomDropdown_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CustomDropdown/CustomDropdown.jsx */ "./components/vendors/CustomDropdown/CustomDropdown.jsx");
/* harmony import */ var _CustomButtons_Button_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CustomButtons/Button.jsx */ "./components/vendors/CustomButtons/Button.jsx");
/* harmony import */ var _static_jss_material_kit_react_components_headerLinksStyle_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../static/jss/material-kit-react/components/headerLinksStyle.jsx */ "./static/jss/material-kit-react/components/headerLinksStyle.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*eslint-disable*/


 // react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components





 // core components





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_2___default()(),
    serverRuntimeConfig = _getConfig.serverRuntimeConfig,
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

function HeaderLinks(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.list
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.listItem
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomDropdown_CustomDropdown_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    noLiPadding: true,
    buttonText: "Components",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: "apps",
    dropdownList: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "".concat(publicRuntimeConfig.appContext)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: classes.dropdownLink
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "".concat(publicRuntimeConfig.appContext, "login")
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: classes.dropdownLink
    }, "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "".concat(publicRuntimeConfig.appContext, "components")
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: classes.dropdownLink
    }, "Components")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "".concat(publicRuntimeConfig.appContext, "posts")
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: classes.dropdownLink
    }, "Posts")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://creativetimofficial.github.io/material-kit-react/#/documentation",
      target: "_blank",
      className: classes.dropdownLink
    }, "Documentation")]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.listItem
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomButtons_Button_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: "https://www.creative-tim.com/product/material-kit-react",
    color: "transparent",
    target: "_blank",
    className: classes.navLink
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.icons
  }, "cloud_download"), "Download")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.listItem
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "instagram-twitter",
    title: "Follow us on twitter",
    placement: window.innerWidth > 959 ? "top" : "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomButtons_Button_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: "https://twitter.com/CreativeTim",
    target: "_blank",
    color: "transparent",
    className: classes.navLink
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socialIcons + " fab fa-twitter"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.listItem
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "instagram-facebook",
    title: "Follow us on facebook",
    placement: window.innerWidth > 959 ? "top" : "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomButtons_Button_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "transparent",
    href: "https://www.facebook.com/CreativeTim",
    target: "_blank",
    className: classes.navLink
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socialIcons + " fab fa-facebook"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.listItem
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "instagram-tooltip",
    title: "Follow us on instagram",
    placement: window.innerWidth > 959 ? "top" : "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomButtons_Button_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "transparent",
    href: "https://www.instagram.com/CreativeTimOfficial",
    target: "_blank",
    className: classes.navLink
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socialIcons + " fab fa-instagram"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_static_jss_material_kit_react_components_headerLinksStyle_jsx__WEBPACK_IMPORTED_MODULE_10__["default"])(HeaderLinks));

/***/ })

}]);
//# sourceMappingURL=4.js.map