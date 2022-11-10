exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 30765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ AuthLayout)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _auth_layout_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52389);
/* harmony import */ var _auth_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_auth_layout_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3325);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11163);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25050);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15265);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const AuthLayout = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__/* .useIntl */ .YB)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (_auth_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().auth_layout),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_auth_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, _objectSpread(_objectSpread({}, router__WEBPACK_IMPORTED_MODULE_6__/* .default.index.link */ .Z.index.link), {}, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: (_auth_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: (_auth_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo__img)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: (_auth_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo__text)
          })]
        })
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: (_auth_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().menu),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          href: "https://about.chatrevolver.com",
          target: "_blank",
          children: intl.formatMessage({
            id: "menu.about",
            defaultMessage: "About"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
          href: "/faq/what-is",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
            children: intl.formatMessage({
              id: "menu.faq",
              defaultMessage: "FAQ"
            })
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_auth_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header__right),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_7__/* .LocaleContext.Consumer */ .R.Consumer, {
          children: ({
            currentLocale,
            toggleLocale
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
            className: (_auth_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().language),
            onClick: () => {
              toggleLocale(currentLocale === "ru" ? "en" : "ru");
              router.push({
                pathname: router.pathname,
                query: _objectSpread(_objectSpread({}, router.query), {}, {
                  lang: currentLocale === "ru" ? "en" : "ru"
                })
              });
            },
            children: currentLocale === "ru" ? "en" : "ru"
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_auth_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().background),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("picture", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("source", {
          srcSet: "/img/sign-bg_mobile.jpg",
          media: "(max-width: 767px)"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("source", {
          srcSet: "/img/sign-bg.jpg, /img/sign-bg_retina.jpg 2x"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
          srcSet: "/img/sign-bg.jpg, /img/sign-bg_retina.jpg 2x",
          alt: ""
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_auth_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
      children: props.children
    })]
  });
};
AuthLayout.defaultProps = {};

/***/ }),

/***/ 52389:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "auth-layout_menu__F48JU",
	"language": "auth-layout_language__1_mum",
	"container__back": "auth-layout_container__back__34J1k",
	"auth_layout": "auth-layout_auth_layout__3bI3b",
	"background": "auth-layout_background__1YqO2",
	"header": "auth-layout_header__2dLZ-",
	"logo__img": "auth-layout_logo__img__1uHCY",
	"logo__text": "auth-layout_logo__text__1ps1F",
	"logo": "auth-layout_logo__1XmXO",
	"header__right": "auth-layout_header__right__1UabV",
	"container": "auth-layout_container__5ztYF"
};


/***/ }),

/***/ 67294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(72408);
} else {}


/***/ })

};
;