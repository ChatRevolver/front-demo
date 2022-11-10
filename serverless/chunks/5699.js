exports.id = 5699;
exports.ids = [5699];
exports.modules = {

/***/ 75124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ ProfileDeleted),
/* harmony export */   "n": () => (/* binding */ ProfileBlocked)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73519);
/* harmony import */ var _profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);





const ProfileDeleted = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* .useIntl */ .YB)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (_profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_3___default().profile_deleted),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
      src: "/img/deleted-icon.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      className: (_profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
      children: intl.formatMessage({
        id: "user.profile_deleted.title",
        defaultMessage: "Профиль был удален"
      })
    })]
  });
};
const ProfileBlocked = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* .useIntl */ .YB)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (_profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_3___default().profile_deleted),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
      src: "/img/deleted-icon.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      className: (_profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
      children: intl.formatMessage({
        id: "user.profile_blocked.title",
        defaultMessage: "Профиль заблокирован"
      })
    })]
  });
};
ProfileDeleted.defaultProps = {};

/***/ }),

/***/ 5699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ UserProfile)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/shared/ui/components/user-card/user-card.tsx + 12 modules
var user_card = __webpack_require__(57537);
// EXTERNAL MODULE: ./src/shared/ui/components/flag-icon/flag-icon.tsx
var flag_icon = __webpack_require__(24844);
// EXTERNAL MODULE: ./src/shared/ui/components/gender/gender.tsx
var gender = __webpack_require__(48864);
// EXTERNAL MODULE: ./src/shared/lib/format/country-and-city.tsx
var country_and_city = __webpack_require__(65604);
// EXTERNAL MODULE: ./src/@yoldi/utils/format/number.ts
var number = __webpack_require__(24965);
// EXTERNAL MODULE: ./node_modules/react-intl/dist/index.js
var dist = __webpack_require__(25050);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/shared/ui/components/distance/distance.tsx




const Distance = props => {
  const intl = (0,dist/* useIntl */.YB)();
  if (props.value === undefined) return null;

  if (props.value < 1) {
    return /*#__PURE__*/jsx_runtime.jsx("div", {
      className: props.className,
      style: props.style,
      children: intl.formatMessage({
        id: "shared.distance.meters",
        defaultMessage: "{dist} m from you"
      }, {
        dist: Math.floor(props.value * 1000)
      })
    });
  }

  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: props.className,
    style: props.style,
    children: intl.formatMessage({
      id: "shared.distance.km",
      defaultMessage: "{dist} km from you"
    }, {
      dist: (0,number/* default */.ZP)(props.value, 1)
    })
  });
};
Distance.defaultProps = {};
// EXTERNAL MODULE: ./src/modules/user/profile-deleted/profile-deleted.tsx
var profile_deleted = __webpack_require__(75124);
;// CONCATENATED MODULE: ./src/modules/user/user-profile/user-profile.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const UserProfile = props => {
  var _props$data$tags, _props$data$tags2;

  if (!props.data) return /*#__PURE__*/jsx_runtime.jsx(user_card/* UserCard.Skeleton */.O.Skeleton, {});
  if (props.data.deleted) return /*#__PURE__*/jsx_runtime.jsx(profile_deleted/* ProfileDeleted */.c, {});
  if (props.data.blocked) return /*#__PURE__*/jsx_runtime.jsx(profile_deleted/* ProfileBlocked */.n, {});
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(user_card/* UserCard */.O, {
    children: [/*#__PURE__*/jsx_runtime.jsx(user_card/* UserCard.Header */.O.Header, _objectSpread({}, props.data)), /*#__PURE__*/(0,jsx_runtime.jsxs)(user_card/* UserCard.Description */.O.Description, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(user_card/* UserCard.Description.Item */.O.Description.Item, {
        children: [/*#__PURE__*/jsx_runtime.jsx(flag_icon/* FlagIcon */.U, {
          country: props.data.country
        }), (0,country_and_city/* formatCountryAndCity */.u)(props.data)]
      }), /*#__PURE__*/jsx_runtime.jsx(user_card/* UserCard.Description.Item */.O.Description.Item, {
        children: /*#__PURE__*/jsx_runtime.jsx(Distance, {
          value: props.data.distance
        })
      }), /*#__PURE__*/jsx_runtime.jsx(user_card/* UserCard.Description.Item */.O.Description.Item, {
        children: /*#__PURE__*/jsx_runtime.jsx(gender/* Gender */.Y, {
          gender: props.data.sex
        })
      })]
    }), (props.data.status || !!((_props$data$tags = props.data.tags) !== null && _props$data$tags !== void 0 && _props$data$tags.length)) && /*#__PURE__*/jsx_runtime.jsx(user_card/* UserCard.Divider */.O.Divider, {}), props.data.status && /*#__PURE__*/jsx_runtime.jsx(user_card/* UserCard.Status */.O.Status, {
      children: props.data.status
    }), !!((_props$data$tags2 = props.data.tags) !== null && _props$data$tags2 !== void 0 && _props$data$tags2.length) && /*#__PURE__*/jsx_runtime.jsx(user_card/* UserCard.Tags */.O.Tags, {
      tags: props.data.tags
    }), props.data.description && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/jsx_runtime.jsx(user_card/* UserCard.Divider */.O.Divider, {}), /*#__PURE__*/jsx_runtime.jsx(user_card/* UserCard.About */.O.About, {
        data: props.data.description
      })]
    })]
  });
};
UserProfile.defaultProps = {};

/***/ }),

/***/ 73519:
/***/ ((module) => {

// Exports
module.exports = {
	"profile_deleted": "profile-deleted_profile_deleted__e9q_p",
	"title": "profile-deleted_title__7RoWX",
	"text": "profile-deleted_text__1limz",
	"button": "profile-deleted_button__14PWt",
	"button--disabled": "profile-deleted_button--disabled__1cq0b"
};


/***/ })

};
;