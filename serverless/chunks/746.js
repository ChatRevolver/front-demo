exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 70746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ FaqCard)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/modules/faq/ui/faq-card/faq-card.module.scss
var faq_card_module = __webpack_require__(58854);
var faq_card_module_default = /*#__PURE__*/__webpack_require__.n(faq_card_module);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./src/shared/ui/modals/modals.tsx
var modals = __webpack_require__(31230);
// EXTERNAL MODULE: ./src/shared/ui/modals/form/modal-form.tsx
var modal_form = __webpack_require__(27646);
// EXTERNAL MODULE: ./src/shared/ui/atoms/text-input/text-input.tsx
var text_input = __webpack_require__(78404);
// EXTERNAL MODULE: ./src/shared/ui/atoms/text-area/text-area.tsx
var text_area = __webpack_require__(51761);
// EXTERNAL MODULE: ./src/shared/lib/forms/useModalForm.ts
var useModalForm = __webpack_require__(34910);
// EXTERNAL MODULE: ./src/shared/api/init.tsx + 49 modules
var init = __webpack_require__(21495);
// EXTERNAL MODULE: ./src/shared/api/hooks.tsx
var hooks = __webpack_require__(75564);
// EXTERNAL MODULE: ./src/shared/ui/modals/modal/modal.tsx
var modal = __webpack_require__(8638);
// EXTERNAL MODULE: ./node_modules/react-intl/dist/index.js
var dist = __webpack_require__(25050);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/modules/faq/actions/support-help-success.modal.tsx




const SupportHelpSuccessModal = props => {
  const intl = (0,dist/* useIntl */.YB)();
  return /*#__PURE__*/jsx_runtime.jsx(modal/* Modal */.u, {
    title: intl.formatMessage({
      id: "faq.support_modal.success.title",
      defaultMessage: "Letter sent"
    })
  });
};
SupportHelpSuccessModal.defaultProps = {};
;// CONCATENATED MODULE: ./src/modules/faq/actions/support-help.modal.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const SupportHelpModal = props => {
  const onSuccess = modals/* Modals.prepare */.n.prepare(SupportHelpSuccessModal);
  const form = (0,useModalForm/* useModalForm */.v)(props, {
    onSubmit: init/* api.common.support */.h.common.support,
    onSuccess: () => onSuccess()
  });
  const authed = (0,hooks/* useAuthed */.p)();
  const intl = (0,dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(modal_form/* ModalForm */.Y, {
    title: intl.formatMessage({
      id: "faq.support_modal.title",
      defaultMessage: "Support help"
    }),
    form: form,
    children: [!authed && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/jsx_runtime.jsx("h4", {
        children: intl.formatMessage({
          id: "input.email",
          defaultMessage: "Email"
        })
      }), /*#__PURE__*/jsx_runtime.jsx(text_input/* TextInput */.o, _objectSpread({}, form.register("email", {
        shouldUnregister: true
      })))]
    }), /*#__PURE__*/jsx_runtime.jsx("h4", {
      children: intl.formatMessage({
        id: "faq.support_modal.type",
        defaultMessage: "Type of the issue"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(text_input/* TextInput */.o, _objectSpread({}, form.register("type"))), /*#__PURE__*/jsx_runtime.jsx("h4", {
      children: intl.formatMessage({
        id: "faq.support_modal.text",
        defaultMessage: "What is the issue?"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(text_area/* TextArea */.K, _objectSpread({}, form.register("text")))]
  });
};
SupportHelpModal.defaultProps = {};
// EXTERNAL MODULE: ./src/contexts/LocaleContext.ts
var LocaleContext = __webpack_require__(15265);
;// CONCATENATED MODULE: ./src/modules/faq/ui/faq-card/faq-card.tsx











const menu = [{
  slug: "what-is",
  titleId: "faq.titles.what-is"
}, {
  slug: "register",
  titleId: "faq.titles.register"
}, {
  slug: "rating",
  titleId: "faq.titles.rating"
}, {
  slug: "privacy",
  titleId: "faq.titles.privacy"
}, {
  slug: "help",
  titleId: "faq.titles.help"
}, {
  slug: "terms-of-use",
  titleId: "faq.titles.terms-of-use"
}, {
  slug: "privacy-policy",
  titleId: "faq.titles.privacy-policy"
}];
const FaqCard = props => {
  const router = (0,next_router.useRouter)();
  const slug = router.query.slug;
  const onSupportHelp = modals/* Modals.prepare */.n.prepare(SupportHelpModal);
  const intl = (0,dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()((faq_card_module_default()).faq_card, props.className),
    style: props.style,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (faq_card_module_default()).header,
      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
        className: (faq_card_module_default()).title,
        children: intl.formatMessage({
          id: "menu.faq",
          defaultMessage: "FAQ"
        })
      }), /*#__PURE__*/jsx_runtime.jsx("a", {
        className: (faq_card_module_default()).support_link,
        onClick: onSupportHelp,
        children: intl.formatMessage({
          id: "faq.support_modal.title",
          defaultMessage: "Support help"
        })
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (faq_card_module_default()).content,
      children: /*#__PURE__*/jsx_runtime.jsx(LocaleContext/* LocaleContext.Consumer */.R.Consumer, {
        children: ({
          currentLocale,
          toggleLocale
        }) => {
          let lang;

          if (router.asPath.includes("?lang")) {
            const position = router.asPath.indexOf("?lang");
            lang = router.asPath.slice(position);
          } else {
            lang = "";
          }

          return menu.map((it, ind) => /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: `/faq/${it.slug}${lang}`,
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              className: classnames_default()((faq_card_module_default()).link, it.slug === slug && (faq_card_module_default()).active),
              children: intl.formatMessage({
                id: `${it.titleId}`
              })
            })
          }, ind));
        }
      })
    })]
  });
};
FaqCard.defaultProps = {};

/***/ }),

/***/ 58854:
/***/ ((module) => {

// Exports
module.exports = {
	"faq_card": "faq-card_faq_card__3vM1S",
	"title": "faq-card_title__21OU5",
	"link": "faq-card_link__3kCHy",
	"support_link": "faq-card_support_link__YjdUT",
	"header": "faq-card_header__QF6xz",
	"content": "faq-card_content__3RG8e",
	"active": "faq-card_active__2L6uo"
};


/***/ })

};
;