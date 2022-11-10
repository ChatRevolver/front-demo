exports.id = 3396;
exports.ids = [3396];
exports.modules = {

/***/ 26600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ SocialsLogin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var shared_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58416);
/* harmony import */ var _socials_login_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3257);
/* harmony import */ var _socials_login_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_socials_login_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);







const SocialsLogin = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* .useIntl */ .YB)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      className: (_socials_login_module_scss__WEBPACK_IMPORTED_MODULE_3___default().divider),
      children: intl.formatMessage({
        id: "auth.social_login.or_with",
        defaultMessage: "or with"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: (_socials_login_module_scss__WEBPACK_IMPORTED_MODULE_3___default().socials),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
        href: `${"https://api.chatrevolver.com"}/api/vk`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(shared_ui__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .J, {
          name: "vk"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
        href: `${"https://api.chatrevolver.com"}/api/google`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(shared_ui__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .J, {
          name: "google"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
        href: `${"https://api.chatrevolver.com"}/api/apple`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(shared_ui__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .J, {
          name: "apple"
        })
      })]
    })]
  });
};
SocialsLogin.defaultProps = {};

/***/ }),

/***/ 64455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ AuthTabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _auth_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50339);
/* harmony import */ var _auth_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_auth_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3325);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const AuthTabs = props => {
  const route = router__WEBPACK_IMPORTED_MODULE_4__/* .default.auth */ .Z.auth;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__/* .useIntl */ .YB)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (_auth_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().auth_tabs),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, route.signup.link), {}, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_auth_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item), props.active === "sign-up" && (_auth_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active)),
        children: intl.formatMessage({
          id: "auth.tabs.sign_up",
          defaultMessage: "Sign up"
        })
      })
    })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, route.login.link), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_auth_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item), props.active === "login" && (_auth_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active)),
        children: [" ", intl.formatMessage({
          id: "auth.tabs.sign_in",
          defaultMessage: "Sign in"
        })]
      })
    }))]
  });
};
AuthTabs.defaultProps = {};

/***/ }),

/***/ 3257:
/***/ ((module) => {

// Exports
module.exports = {
	"divider": "socials-login_divider__391Y0",
	"socials": "socials-login_socials__72ZI4"
};


/***/ }),

/***/ 50339:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "auth-tabs_item__1m2Cu",
	"auth_tabs": "auth-tabs_auth_tabs__3z0mb",
	"active": "auth-tabs_active__3eK06"
};


/***/ })

};
;