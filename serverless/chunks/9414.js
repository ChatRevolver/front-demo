exports.id = 9414;
exports.ids = [9414];
exports.modules = {

/***/ 89414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ PasswordInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _text_input_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56415);
/* harmony import */ var _text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58416);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);






const PasswordInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    0: visible,
    1: setVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text_input), props.error && (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error)),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
      className: (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().label),
      children: props.label
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
      type: visible ? "text" : "password",
      ref: ref,
      name: props.name,
      autoFocus: props.autoFocus,
      onChange: props.onChange,
      onBlur: props.onBlur,
      value: props.value
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().help),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon), (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().clickable)),
        onClick: () => setVisible(!visible),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(shared_ui__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .J, {
          name: visible ? "password-hide" : "password-show",
          className: (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().eye_icon)
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error_text),
        children: props.error
      })]
    })]
  });
});
PasswordInput.defaultProps = {};

/***/ }),

/***/ 56415:
/***/ ((module) => {

// Exports
module.exports = {
	"text_input": "text-input_text_input__2TPeM",
	"label": "text-input_label__jEnAR",
	"error_text": "text-input_error_text__2uspX",
	"disabled": "text-input_disabled__3285C",
	"error": "text-input_error__RarXE",
	"help": "text-input_help__1sQW9",
	"icon": "text-input_icon__2ksgP",
	"clickable": "text-input_clickable__1F_o0",
	"note": "text-input_note__nuzwl",
	"eye_icon": "text-input_eye_icon__3quJu"
};


/***/ })

};
;