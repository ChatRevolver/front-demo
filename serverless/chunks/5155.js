exports.id = 5155;
exports.ids = [5155];
exports.modules = {

/***/ 95155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ ReviewsCard)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/shared/api/init.tsx + 49 modules
var init = __webpack_require__(21495);
// EXTERNAL MODULE: ./src/shared/ui/atoms/avatar/avatar.tsx
var avatar = __webpack_require__(72457);
// EXTERNAL MODULE: ./src/shared/ui/atoms/follow-button/follow-button.tsx
var follow_button = __webpack_require__(37808);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/modules/video-chat/ui/reviews-card/stars-input/stars-input.module.scss
var stars_input_module = __webpack_require__(16720);
var stars_input_module_default = /*#__PURE__*/__webpack_require__.n(stars_input_module);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/modules/video-chat/ui/reviews-card/stars-input/stars-input.tsx





const StarsInput = props => {
  const {
    0: value,
    1: setValue
  } = (0,react.useState)(0);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()((stars_input_module_default()).stars_input, props.className),
    style: props.style,
    children: [/*#__PURE__*/jsx_runtime.jsx("span", {
      className: classnames_default()((stars_input_module_default()).item, value >= 1 && (stars_input_module_default()).hover),
      onMouseEnter: () => setValue(1),
      onMouseLeave: () => setValue(0),
      onClick: () => props.onClick(1)
    }), /*#__PURE__*/jsx_runtime.jsx("span", {
      className: classnames_default()((stars_input_module_default()).item, value >= 2 && (stars_input_module_default()).hover),
      onMouseEnter: () => setValue(2),
      onMouseLeave: () => setValue(0),
      onClick: () => props.onClick(2)
    }), /*#__PURE__*/jsx_runtime.jsx("span", {
      className: classnames_default()((stars_input_module_default()).item, value >= 3 && (stars_input_module_default()).hover),
      onMouseEnter: () => setValue(3),
      onMouseLeave: () => setValue(0),
      onClick: () => props.onClick(3)
    }), /*#__PURE__*/jsx_runtime.jsx("span", {
      className: classnames_default()((stars_input_module_default()).item, value >= 4 && (stars_input_module_default()).hover),
      onMouseEnter: () => setValue(4),
      onMouseLeave: () => setValue(0),
      onClick: () => props.onClick(4)
    }), /*#__PURE__*/jsx_runtime.jsx("span", {
      className: classnames_default()((stars_input_module_default()).item, value >= 5 && (stars_input_module_default()).hover),
      onMouseEnter: () => setValue(5),
      onMouseLeave: () => setValue(0),
      onClick: () => props.onClick(5)
    })]
  });
};
StarsInput.defaultProps = {};
// EXTERNAL MODULE: ./src/router.ts + 1 modules
var router = __webpack_require__(3325);
// EXTERNAL MODULE: ./src/modules/video-chat/ui/reviews-card/reviews-card.module.scss
var reviews_card_module = __webpack_require__(16653);
var reviews_card_module_default = /*#__PURE__*/__webpack_require__.n(reviews_card_module);
// EXTERNAL MODULE: ./node_modules/react-intl/dist/index.js
var dist = __webpack_require__(25050);
;// CONCATENATED MODULE: ./src/modules/video-chat/ui/reviews-card/reviews-card.tsx










const ReviewsCard = props => {
  var _reviewList$data, _reviewList$data2;

  const reviewList = init/* api.user.usePendingReviews */.h.user.usePendingReviews({
    refreshInterval: 3000
  });
  const length = ((_reviewList$data = reviewList.data) === null || _reviewList$data === void 0 ? void 0 : _reviewList$data.length) || 0;
  const two = length === 2;
  const many = length > 2;
  const review = (_reviewList$data2 = reviewList.data) === null || _reviewList$data2 === void 0 ? void 0 : _reviewList$data2[0];
  const user = review === null || review === void 0 ? void 0 : review.companion;
  const {
    0: loading,
    1: setLoading
  } = (0,react.useState)(false);

  const onRate = async value => {
    if (!review || loading) return;
    setLoading(true);

    try {
      await init/* api.user.postReview */.h.user.postReview(review.id, {
        rating: value
      });
      await reviewList.mutate();
    } finally {
      setLoading(false);
    }
  };

  const intl = (0,dist/* useIntl */.YB)();
  if (length === 0) return null;
  const openProfile = router/* default.profile.id */.Z.profile.id(user === null || user === void 0 ? void 0 : user.id).open;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()((reviews_card_module_default()).reviews_card, two && (reviews_card_module_default()).two, many && (reviews_card_module_default()).many, loading && (reviews_card_module_default()).loading, props.className),
    style: props.style,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (reviews_card_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime.jsx(avatar/* Avatar */.q, {
        className: (reviews_card_module_default()).ava,
        src: user === null || user === void 0 ? void 0 : user.image,
        gender: user === null || user === void 0 ? void 0 : user.sex,
        online: user === null || user === void 0 ? void 0 : user.online,
        onClick: openProfile
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (reviews_card_module_default()).info,
        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
          className: (reviews_card_module_default()).name,
          onClick: openProfile,
          children: user === null || user === void 0 ? void 0 : user.name
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          className: (reviews_card_module_default()).text,
          children: intl.formatMessage({
            id: "video_chat.review",
            defaultMessage: "How do you rate me?"
          })
        })]
      }), user && /*#__PURE__*/jsx_runtime.jsx(follow_button/* FollowButton */.e, {
        id: user.id,
        size: "small",
        className: (reviews_card_module_default()).follow
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (reviews_card_module_default()).divider
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (reviews_card_module_default()).bottom,
      children: /*#__PURE__*/jsx_runtime.jsx(StarsInput, {
        onClick: onRate
      })
    })]
  });
};
ReviewsCard.defaultProps = {};

/***/ }),

/***/ 16653:
/***/ ((module) => {

// Exports
module.exports = {
	"reviews_card": "reviews-card_reviews_card__1GApT",
	"name": "reviews-card_name__1XPCH",
	"text": "reviews-card_text__1V5b7",
	"two": "reviews-card_two__qtlaz",
	"many": "reviews-card_many__1VzKD",
	"loading": "reviews-card_loading__2g0ZQ",
	"content": "reviews-card_content__tzejP",
	"ava": "reviews-card_ava__3xrx6",
	"info": "reviews-card_info__2Yqmx",
	"follow": "reviews-card_follow__2AsWM",
	"divider": "reviews-card_divider__36dPR",
	"bottom": "reviews-card_bottom__6dd7-",
	"go": "reviews-card_go__2KQAO"
};


/***/ }),

/***/ 16720:
/***/ ((module) => {

// Exports
module.exports = {
	"stars_input": "stars-input_stars_input__2gPsU",
	"item": "stars-input_item__2fbKm",
	"hover": "stars-input_hover__3AAf5"
};


/***/ })

};
;