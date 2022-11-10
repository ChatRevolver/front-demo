"use strict";
exports.id = 6342;
exports.ids = [6342];
exports.modules = {

/***/ 24844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ FlagIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);


const FlagIcon = props => {
  if (!props.country) return null; // return <img src={`https://www.countryflags.io/${props.country}/flat/${props.size}.png`} alt={props.country} />;

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
    src: `https://countryflagsapi.com/svg/${props.country}`,
    alt: props.country,
    style: {
      width: props.size,
      height: "auto"
    }
  });
};
FlagIcon.defaultProps = {
  size: 24
};

/***/ }),

/***/ 48864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ Gender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);



const Gender = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* .useIntl */ .YB)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
    className: props.className,
    style: props.style,
    children: [props.gender === "MALE" && intl.formatMessage({
      id: "gender.male",
      defaultMessage: "Man"
    }), props.gender === "FEMALE" && intl.formatMessage({
      id: "gender.female",
      defaultMessage: "Woman"
    })]
  });
};
Gender.defaultProps = {};

/***/ })

};
;