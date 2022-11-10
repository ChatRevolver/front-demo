exports.id = 6352;
exports.ids = [6352];
exports.modules = {

/***/ 46352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ VipPromoCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var shared_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31230);
/* harmony import */ var shared_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28064);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3325);
/* harmony import */ var _vip_promo_card_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76363);
/* harmony import */ var _vip_promo_card_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vip_promo_card_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var modules_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23144);
/* harmony import */ var shared_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21495);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const VipPromoCard = props => {
  const profile = shared_api__WEBPACK_IMPORTED_MODULE_3__/* .api.user.useGetMe */ .h.user.useGetMe();
  const onVipActivate = shared_ui__WEBPACK_IMPORTED_MODULE_4__/* .Modals.prepare */ .n.prepare(modules_user__WEBPACK_IMPORTED_MODULE_5__/* .VipActivateModal */ .d);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* .useIntl */ .YB)();
  if (!profile.data) return null;
  if (profile.data.vip) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (_vip_promo_card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().vip_promo_card),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
      src: "/img/vip-promo.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
      children: intl.formatMessage({
        id: "vip.promo_card.title",
        defaultMessage: "Общение без ограничений"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      children: intl.formatMessage({
        id: "vip.promo_card.description",
        defaultMessage: "Пользователи с VIP статусом могут писать личные сообщения всем, кого найдет через <a>поиск анкет</a>"
      }, {
        a: text => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, _objectSpread(_objectSpread({}, router__WEBPACK_IMPORTED_MODULE_8__/* .default.dating.link */ .Z.dating.link), {}, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
            children: text
          })
        }))
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(shared_ui__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z, {
      type: "primary",
      onClick: () => onVipActivate(),
      children: intl.formatMessage({
        id: "vip.promo_card.submit",
        defaultMessage: "Станьте VIP"
      })
    })]
  });
};
VipPromoCard.defaultProps = {};

/***/ }),

/***/ 76363:
/***/ ((module) => {

// Exports
module.exports = {
	"vip_promo_card": "vip-promo-card_vip_promo_card__2jIcy"
};


/***/ })

};
;