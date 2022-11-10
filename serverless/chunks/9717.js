"use strict";
exports.id = 9717;
exports.ids = [9717];
exports.modules = {

/***/ 49717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _text_input_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56415);
/* harmony import */ var _text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58416);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);






const TextInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text_input), props.error && (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error), props.disabled && (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().disabled)),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
      className: (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().label),
      children: props.label
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
      type: "text",
      ref: ref,
      name: props.name,
      autoFocus: props.autoFocus,
      onChange: props.onChange,
      onBlur: props.onBlur,
      value: props.value,
      disabled: props.disabled
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().help),
      children: [props.error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(shared_ui__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .J, {
        name: "input-error",
        overrideColor: false,
        className: (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error_text),
        children: props.error
      })]
    })]
  });
});
TextInput.defaultProps = {};

/***/ })

};
;