exports.id = 9871;
exports.ids = [9871];
exports.modules = {

/***/ 68379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ MyProfileDeleted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _my_profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20350);
/* harmony import */ var _my_profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_my_profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21495);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);






const MyProfileDeleted = props => {
  const profile = shared_api__WEBPACK_IMPORTED_MODULE_2__/* .api.user.useGetMe */ .h.user.useGetMe();

  const onRestore = async () => {
    await shared_api__WEBPACK_IMPORTED_MODULE_2__/* .api.user.restoreProfile */ .h.user.restoreProfile();
    profile.mutate();
  };

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* .useIntl */ .YB)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (_my_profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_4___default().my_profile_deleted),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
      src: "/img/deleted-icon.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      className: (_my_profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
      children: intl.formatMessage({
        id: "user.my_profile_deleted.title",
        defaultMessage: "Ваш профиль был удален"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      className: (_my_profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
      children: intl.formatMessage({
        id: "user.my_profile_deleted.description",
        defaultMessage: "Вы можете восстановить свой профиль"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
      onClick: onRestore,
      className: (_my_profile_deleted_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button),
      children: intl.formatMessage({
        id: "user.my_profile_deleted.restore",
        defaultMessage: "Восстановить"
      })
    })]
  });
};
MyProfileDeleted.defaultProps = {};

/***/ }),

/***/ 49037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ MyProfileLayout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/modules/user/my-profile-layout/my-profile-layout.module.scss
var my_profile_layout_module = __webpack_require__(82987);
var my_profile_layout_module_default = /*#__PURE__*/__webpack_require__.n(my_profile_layout_module);
// EXTERNAL MODULE: ./src/shared/ui/atoms/message/message.tsx
var message = __webpack_require__(89456);
// EXTERNAL MODULE: ./src/shared/ui/atoms/avatar/avatar.tsx
var avatar = __webpack_require__(72457);
// EXTERNAL MODULE: ./src/shared/ui/atoms/upload/upload.tsx
var upload = __webpack_require__(31294);
// EXTERNAL MODULE: ./src/shared/api/init.tsx + 49 modules
var init = __webpack_require__(21495);
// EXTERNAL MODULE: ./src/modules/user/my-photo/my-photo.module.scss
var my_photo_module = __webpack_require__(81961);
var my_photo_module_default = /*#__PURE__*/__webpack_require__.n(my_photo_module);
// EXTERNAL MODULE: ./node_modules/react-intl/dist/index.js
var dist = __webpack_require__(25050);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/modules/user/my-photo/my-photo.tsx







const MyPhoto = props => {
  var _profile$data, _profile$data2;

  const profile = init/* api.user.useGetMe */.h.user.useGetMe();
  const intl = (0,dist/* useIntl */.YB)();

  const updateImage = async image => {
    await init/* api.user.updateProfile */.h.user.updateProfile({
      image: image.id
    });
    await profile.mutate();
  };

  const onError = () => {
    message/* message.error */.y.error(intl.formatMessage({
      id: "user.my_photo.upload_error",
      defaultMessage: "Photo upload error"
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (my_photo_module_default()).my_photo,
    children: [/*#__PURE__*/jsx_runtime.jsx(avatar/* Avatar */.q, {
      shape: "square",
      src: (_profile$data = profile.data) === null || _profile$data === void 0 ? void 0 : _profile$data.image,
      gender: (_profile$data2 = profile.data) === null || _profile$data2 === void 0 ? void 0 : _profile$data2.sex,
      className: (my_photo_module_default()).avatar
    }), /*#__PURE__*/jsx_runtime.jsx(upload/* Upload */.g, {
      onSuccess: updateImage,
      onError: onError,
      children: /*#__PURE__*/jsx_runtime.jsx("button", {
        className: (my_photo_module_default()).photo_update,
        children: intl.formatMessage({
          id: "user.my_photo.update",
          defaultMessage: "Update Photo"
        })
      })
    })]
  });
};
MyPhoto.defaultProps = {};
;// CONCATENATED MODULE: ./src/modules/user/my-profile-layout/my-profile-layout.tsx





const MyProfileLayout = props => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (my_profile_layout_module_default()).my_profile_layout,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (my_profile_layout_module_default()).left,
      children: [/*#__PURE__*/jsx_runtime.jsx(MyPhoto, {}), props.extra]
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (my_profile_layout_module_default()).right,
      children: props.children
    })]
  });
};
MyProfileLayout.defaultProps = {};

/***/ }),

/***/ 81961:
/***/ ((module) => {

// Exports
module.exports = {
	"photo_update": "my-photo_photo_update__Aa6_r",
	"my_photo": "my-photo_my_photo__3HjEg",
	"avatar": "my-photo_avatar__3qmTt"
};


/***/ }),

/***/ 20350:
/***/ ((module) => {

// Exports
module.exports = {
	"my_profile_deleted": "my-profile-deleted_my_profile_deleted__1zBR1",
	"title": "my-profile-deleted_title__1QVs9",
	"text": "my-profile-deleted_text__2fBXs",
	"button": "my-profile-deleted_button__2Q8j6",
	"button--disabled": "my-profile-deleted_button--disabled__31qJ4"
};


/***/ }),

/***/ 82987:
/***/ ((module) => {

// Exports
module.exports = {
	"my_profile_layout": "my-profile-layout_my_profile_layout__18cBD",
	"left": "my-profile-layout_left__1Frhy",
	"right": "my-profile-layout_right___gbdG"
};


/***/ })

};
;