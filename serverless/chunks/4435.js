exports.id = 4435;
exports.ids = [4435];
exports.modules = {

/***/ 31014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ BackButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _back_button_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60414);
/* harmony import */ var _back_button_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_back_button_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const BackButton = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* .useIntl */ .YB)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", _objectSpread(_objectSpread({}, props), {}, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_back_button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().back_button), props.className),
    children: props.children || intl.formatMessage({
      id: "shared.back",
      defaultMessage: "Back"
    })
  }));
};

/***/ }),

/***/ 55609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ AuthForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _auth_form_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35362);
/* harmony import */ var _auth_form_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);



const AuthForm = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("form", {
    className: (_auth_form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().auth_form),
    onSubmit: props.onSubmit,
    children: props.children
  });
};
AuthForm.defaultProps = {};

/***/ }),

/***/ 60414:
/***/ ((module) => {

// Exports
module.exports = {
	"back_button": "back-button_back_button__pNHkN"
};


/***/ }),

/***/ 35362:
/***/ ((module) => {

// Exports
module.exports = {
	"auth_form": "auth-form_auth_form__3lJqN"
};


/***/ })

};
;