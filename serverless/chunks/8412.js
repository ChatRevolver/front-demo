exports.id = 8412;
exports.ids = [8412];
exports.modules = {

/***/ 28412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ CheckboxInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checkbox_input_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43323);
/* harmony import */ var _checkbox_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_checkbox_input_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);






const CheckboxInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_checkbox_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkbox_input), props.className),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
        type: "checkbox",
        ref: ref,
        name: props.name,
        checked: props.checked,
        onChange: props.onChange,
        onBlur: props.onBlur
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
        className: (_checkbox_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
        children: props.children
      })]
    }), props.error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_checkbox_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error),
      children: props.error
    })]
  });
});
CheckboxInput.defaultProps = {};

/***/ }),

/***/ 43323:
/***/ ((module) => {

// Exports
module.exports = {
	"checkbox_input": "checkbox-input_checkbox_input__3wuxi",
	"text": "checkbox-input_text__gpM6s",
	"error": "checkbox-input_error__11Z1N"
};


/***/ })

};
;