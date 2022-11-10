exports.id = 1994;
exports.ids = [1994];
exports.modules = {

/***/ 35713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kj": () => (/* binding */ onAccessTokenChange),
/* harmony export */   "hP": () => (/* binding */ getAccessToken)
/* harmony export */ });
/* unused harmony export setAccessToken */
/* harmony import */ var _yoldi_utils_LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25841);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74801);


const onAccessTokenChange = fn => {
  return _yoldi_utils_LocalStorage__WEBPACK_IMPORTED_MODULE_0__/* .default.subscribe */ .Z.subscribe(_config__WEBPACK_IMPORTED_MODULE_1__/* .ACCESS_TOKEN_KEY */ .W, fn);
};
const getAccessToken = () => {
  return _yoldi_utils_LocalStorage__WEBPACK_IMPORTED_MODULE_0__/* .default.getItem */ .Z.getItem(_config__WEBPACK_IMPORTED_MODULE_1__/* .ACCESS_TOKEN_KEY */ .W);
};
const setAccessToken = value => {
  return LocalStorage.setItem(ACCESS_TOKEN_KEY, value);
};

/***/ }),

/***/ 28064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18497);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);




const Button = props => {
  const {
    0: _loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const loading = props.loading || _loading;

  const onClick = async e => {
    if (loading || props.disabled) return;

    try {
      var _props$onClick;

      setLoading(true);
      await ((_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, e));
    } finally {
      setLoading(false);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button), props.type === "primary" && (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().primary), props.type === "secondary" && (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().secondary), props.type === "danger" && (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().danger), loading && (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().loading), props.className),
    style: props.style,
    onClick: onClick,
    type: props.htmlType,
    disabled: loading || props.disabled,
    children: props.children
  });
};
Button.defaultProps = {};

/***/ }),

/***/ 18497:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "button_button__2sYlk",
	"disabled": "button_disabled__1Vpbe",
	"primary": "button_primary__3_MGe",
	"black": "button_black__3TL-i",
	"secondary": "button_secondary__31sKl",
	"button__hidden-xs": "button_button__hidden-xs__3EL4V",
	"light": "button_light__govQT",
	"loading": "button_loading__3FlsY",
	"slide": "button_slide__1aFDe",
	"danger": "button_danger__19Fs7"
};


/***/ })

};
;