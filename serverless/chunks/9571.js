exports.id = 9571;
exports.ids = [9571];
exports.modules = {

/***/ 63826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ PhotoGallery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _photo_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98407);
/* harmony import */ var _photo_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_photo_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _yoldi_utils_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);






const PhotoGallery = props => {
  const {
    0: index,
    1: setIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.initial);

  const next = () => setIndex(value => (value + 1) % props.data.length);

  const prev = () => setIndex(value => (props.data.length + value - 1) % props.data.length);

  (0,_yoldi_utils_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useKeyDown */ .K7)(_yoldi_utils_hooks__WEBPACK_IMPORTED_MODULE_3__/* .KeyName.ESC */ .et.ESC, props.onClose);
  (0,_yoldi_utils_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useKeyDown */ .K7)(_yoldi_utils_hooks__WEBPACK_IMPORTED_MODULE_3__/* .KeyName.ArrowLeft */ .et.ArrowLeft, prev);
  (0,_yoldi_utils_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useKeyDown */ .K7)(_yoldi_utils_hooks__WEBPACK_IMPORTED_MODULE_3__/* .KeyName.ArrowRight */ .et.ArrowRight, next);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_photo_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().photo_gallery), props.className),
    style: props.style,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
      className: (_photo_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().close),
      onClick: props.onClose
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_photo_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
        src: `${"https://api.chatrevolver.com"}/static/${props.data[index].path}`
      })
    }), props.data.length > 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_photo_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button), (_photo_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().prev)),
      onClick: prev
    }), props.data.length > 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_photo_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button), (_photo_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().next)),
      onClick: next
    })]
  });
};
PhotoGallery.defaultProps = {
  initial: 0
};

/***/ }),

/***/ 56997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ PhotoList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var shared_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31294);
/* harmony import */ var shared_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89456);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96627);
/* harmony import */ var _photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var modules_user_photos_photo_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63826);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);









const PhotoList = props => {
  var _props$data, _props$data2, _props$data3;

  const {
    0: gallery,
    1: setGallery
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* .useIntl */ .YB)();

  if (!((_props$data = props.data) !== null && _props$data !== void 0 && _props$data.length)) {
    if (!props.onUpload) {
      return null;
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [gallery !== undefined && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(modules_user_photos_photo_gallery__WEBPACK_IMPORTED_MODULE_4__/* .PhotoGallery */ .B, {
      data: props.data,
      initial: gallery,
      onClose: () => setGallery(undefined)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photo_list), props.className),
      style: props.style,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().top),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
          className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
          children: intl.formatMessage({
            id: "user.photo_list.title",
            defaultMessage: "Photos"
          })
        }), props.onUpload && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(shared_ui__WEBPACK_IMPORTED_MODULE_6__/* .Upload */ .g, {
          onSuccess: data => {
            var _props$onUpload;

            return (_props$onUpload = props.onUpload) === null || _props$onUpload === void 0 ? void 0 : _props$onUpload.call(props, data.id);
          },
          onError: () => shared_ui__WEBPACK_IMPORTED_MODULE_7__/* .message.error */ .y.error(intl.formatMessage({
            id: "user.photo_list.upload_error",
            defaultMessage: "Photo upload error"
          })),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
            className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().add),
            children: intl.formatMessage({
              id: "user.photo_list.add",
              defaultMessage: "Add photos"
            })
          })
        })]
      }), ((_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.length) === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().grid), (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().empty)),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photo)
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photo)
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photo)
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photo)
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().grid),
        children: (_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : _props$data3.map((it, key) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photo),
            onClick: () => setGallery(key),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
              src: `${"https://api.chatrevolver.com"}/static/${it.path}`
            }), props.onDelete && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
              className: (_photo_list_module_scss__WEBPACK_IMPORTED_MODULE_5___default().delete),
              onClick: e => {
                var _props$onDelete;

                e.stopPropagation();
                (_props$onDelete = props.onDelete) === null || _props$onDelete === void 0 ? void 0 : _props$onDelete.call(props, it.id);
              }
            })]
          })
        }, it.id))
      })]
    })]
  });
};
PhotoList.defaultProps = {};

/***/ }),

/***/ 51761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _text_area_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43222);
/* harmony import */ var _text_area_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_text_area_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);





const TextArea = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_text_area_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text_area), props.error && (_text_area_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error)),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("textarea", {
      ref: ref,
      name: props.name,
      autoFocus: props.autoFocus,
      onChange: props.onChange,
      onBlur: props.onBlur,
      value: props.value,
      disabled: props.disabled,
      rows: props.rows
    }), props.error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_text_area_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error_text),
      children: props.error
    })]
  });
});
TextArea.defaultProps = {};

/***/ }),

/***/ 57537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ UserCard)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/shared/ui/components/user-card/skeleton/user-card-skeleton.module.scss
var user_card_skeleton_module = __webpack_require__(96973);
var user_card_skeleton_module_default = /*#__PURE__*/__webpack_require__.n(user_card_skeleton_module);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/shared/ui/components/user-card/skeleton/user-card-skeleton.tsx




const UserCardSkeleton = props => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (user_card_skeleton_module_default()).user_card_skeleton,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (user_card_skeleton_module_default()).top,
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: (user_card_skeleton_module_default()).ava
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (user_card_skeleton_module_default()).main,
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: (user_card_skeleton_module_default()).name
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: (user_card_skeleton_module_default()).about,
          children: [/*#__PURE__*/jsx_runtime.jsx("span", {}), /*#__PURE__*/jsx_runtime.jsx("span", {})]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (user_card_skeleton_module_default()).center,
      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
        className: (user_card_skeleton_module_default()).status
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (user_card_skeleton_module_default()).tags,
        children: [/*#__PURE__*/jsx_runtime.jsx("span", {
          className: (user_card_skeleton_module_default()).tags_item
        }), /*#__PURE__*/jsx_runtime.jsx("span", {
          className: (user_card_skeleton_module_default()).tags_item
        }), /*#__PURE__*/jsx_runtime.jsx("span", {
          className: (user_card_skeleton_module_default()).tags_item
        }), /*#__PURE__*/jsx_runtime.jsx("span", {
          className: (user_card_skeleton_module_default()).tags_item
        })]
      })]
    })]
  });
};
UserCardSkeleton.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/lib/format/name-and-age.tsx
var name_and_age = __webpack_require__(53795);
// EXTERNAL MODULE: ./src/shared/lib/format/rating.tsx
var rating = __webpack_require__(60887);
// EXTERNAL MODULE: ./src/shared/ui/modals/modals.tsx
var modals = __webpack_require__(31230);
// EXTERNAL MODULE: ./src/shared/ui/atoms/avatar/avatar.tsx
var avatar = __webpack_require__(72457);
// EXTERNAL MODULE: ./src/shared/ui/atoms/follow-button/follow-button.tsx
var follow_button = __webpack_require__(37808);
// EXTERNAL MODULE: ./src/shared/api/hooks.tsx
var hooks = __webpack_require__(75564);
// EXTERNAL MODULE: ./src/modules/user/photos/photo-gallery.tsx
var photo_gallery = __webpack_require__(63826);
// EXTERNAL MODULE: ./src/shared/ui/modals/form/modal-form.tsx
var modal_form = __webpack_require__(27646);
// EXTERNAL MODULE: ./src/shared/ui/atoms/radio/radio.tsx
var radio_radio = __webpack_require__(64342);
// EXTERNAL MODULE: ./src/shared/ui/atoms/text-area/text-area.tsx
var text_area = __webpack_require__(51761);
// EXTERNAL MODULE: ./src/shared/api/init.tsx + 49 modules
var init = __webpack_require__(21495);
// EXTERNAL MODULE: ./src/shared/lib/forms/useModalForm.ts
var useModalForm = __webpack_require__(34910);
// EXTERNAL MODULE: ./src/shared/ui/modals/modal/modal.tsx
var modal = __webpack_require__(8638);
// EXTERNAL MODULE: ./node_modules/react-intl/dist/index.js
var dist = __webpack_require__(25050);
;// CONCATENATED MODULE: ./src/modules/user/actions/report/report-sent.modal.tsx




const ReportSentModal = props => {
  const intl = (0,dist/* useIntl */.YB)();
  return /*#__PURE__*/jsx_runtime.jsx(modal/* Modal */.u, {
    title: intl.formatMessage({
      id: "user.report_modal.success",
      defaultMessage: "Report sent"
    })
  });
};
ReportSentModal.defaultProps = {};
;// CONCATENATED MODULE: ./src/modules/user/actions/report/report.modal.tsx








const ReportModal = props => {
  const {
    0: value,
    1: setValue
  } = (0,react.useState)("");
  const {
    0: text,
    1: setText
  } = (0,react.useState)("");
  const intl = (0,dist/* useIntl */.YB)();
  const reportReasons = [intl.formatMessage({
    id: "user.report_modal.reason.0",
    defaultMessage: "Harassment and cyberbullying"
  }), intl.formatMessage({
    id: "user.report_modal.reason.1",
    defaultMessage: "Violent threats"
  }), intl.formatMessage({
    id: "user.report_modal.reason.2",
    defaultMessage: "Child endangerment"
  }), intl.formatMessage({
    id: "user.report_modal.reason.3",
    defaultMessage: "Hate speech against a protected group"
  }), intl.formatMessage({
    id: "user.report_modal.reason.4",
    defaultMessage: "Spam and Scams"
  }), intl.formatMessage({
    id: "user.report_modal.reason.5",
    defaultMessage: "Privacy"
  }), intl.formatMessage({
    id: "user.report_modal.reason.other",
    defaultMessage: "None of these are your issue"
  })];
  const isOther = value === reportReasons[reportReasons.length - 1];
  const onSuccess = modals/* Modals.prepare */.n.prepare(ReportSentModal);
  const form = (0,useModalForm/* useModalForm */.v)(props, {
    onSubmit: () => init/* api.user.report */.h.user.report(props.id, {
      text: isOther ? text : value
    }),
    onSuccess: () => onSuccess()
  });
  const disabled = !value || isOther && !text;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(modal_form/* ModalForm */.Y, {
    title: intl.formatMessage({
      id: "user.report_modal.title",
      defaultMessage: "Report user"
    }),
    form: form,
    okProps: {
      disabled
    },
    children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
      children: intl.formatMessage({
        id: "user.report_modal.reason",
        defaultMessage: "What is the issue?"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(radio_radio/* Radio */.Y, {
      value: value,
      onChange: setValue,
      options: reportReasons.map(it => ({
        value: it,
        label: it
      }))
    }), value === reportReasons[reportReasons.length - 1] && /*#__PURE__*/jsx_runtime.jsx(text_area/* TextArea */.K, {
      autoFocus: true,
      value: text,
      onChange: e => setText(e.target.value)
    })]
  });
};
ReportModal.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/components/user-card/header/user-card-header.module.scss
var user_card_header_module = __webpack_require__(59697);
var user_card_header_module_default = /*#__PURE__*/__webpack_require__.n(user_card_header_module);
;// CONCATENATED MODULE: ./src/shared/ui/components/user-card/header/user-card-header.tsx











const UserCardHeader = props => {
  const {
    0: gallery,
    1: setGallery
  } = (0,react.useState)(false);
  const onReport = modals/* Modals.prepare */.n.prepare(ReportModal, {
    id: props.id
  });
  const authed = (0,hooks/* useAuthed */.p)();
  const intl = (0,dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [gallery && props.image && /*#__PURE__*/jsx_runtime.jsx(photo_gallery/* PhotoGallery */.B, {
      data: [{
        id: "",
        path: props.image,
        absolutePath: ""
      }],
      onClose: () => setGallery(false)
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (user_card_header_module_default()).user_card_header,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (user_card_header_module_default()).top,
        children: [/*#__PURE__*/jsx_runtime.jsx(avatar/* Avatar */.q, {
          className: (user_card_header_module_default()).ava,
          src: props.image,
          gender: props.sex,
          online: props.online,
          onClick: () => setGallery(true)
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: (user_card_header_module_default()).main,
          children: [/*#__PURE__*/jsx_runtime.jsx("p", {
            className: (user_card_header_module_default()).name,
            children: (0,name_and_age/* formatNameAndAge */.V)(props)
          }), /*#__PURE__*/jsx_runtime.jsx(follow_button/* FollowButton */.e, {
            id: props.id
          })]
        }), props.vip && /*#__PURE__*/jsx_runtime.jsx("span", {
          className: (user_card_header_module_default()).vip,
          children: "VIP"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: (user_card_header_module_default()).right,
          children: [props.rating && /*#__PURE__*/jsx_runtime.jsx("span", {
            className: (user_card_header_module_default()).rate,
            children: (0,rating/* formatRating */.A)(props.rating)
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: (user_card_header_module_default()).header_controls,
            children: authed && /*#__PURE__*/jsx_runtime.jsx("span", {
              className: (user_card_header_module_default()).report,
              onClick: onReport,
              children: intl.formatMessage({
                id: "shared.user_card.report",
                defaultMessage: "Report"
              })
            })
          })]
        })]
      })
    })]
  });
};
UserCardHeader.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/components/user-card/header-my/user-card-header-my.module.scss
var user_card_header_my_module = __webpack_require__(13743);
var user_card_header_my_module_default = /*#__PURE__*/__webpack_require__.n(user_card_header_my_module);
;// CONCATENATED MODULE: ./src/shared/ui/components/user-card/header-my/user-card-header-my.tsx



const UserCardHeaderMy = props => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (user_card_header_my_module_default()).user_card_header_my,
    children: props.children
  });
};
UserCardHeaderMy.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/components/user-card/description/user-card-description-item.module.scss
var user_card_description_item_module = __webpack_require__(49447);
var user_card_description_item_module_default = /*#__PURE__*/__webpack_require__.n(user_card_description_item_module);
;// CONCATENATED MODULE: ./src/shared/ui/components/user-card/description/user-card-description-item.tsx



const UserCardDescriptionItem = props => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (user_card_description_item_module_default()).user_card_description_item,
    children: props.children
  });
};
UserCardDescriptionItem.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/components/user-card/description/user-card-description.module.scss
var user_card_description_module = __webpack_require__(80486);
var user_card_description_module_default = /*#__PURE__*/__webpack_require__.n(user_card_description_module);
;// CONCATENATED MODULE: ./src/shared/ui/components/user-card/description/user-card-description.tsx




const UserCardDescription = props => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (user_card_description_module_default()).user_card_description,
    children: props.children
  });
};
UserCardDescription.Item = UserCardDescriptionItem;
UserCardDescription.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/components/user-card/status/user-card-status.module.scss
var user_card_status_module = __webpack_require__(19184);
var user_card_status_module_default = /*#__PURE__*/__webpack_require__.n(user_card_status_module);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/shared/ui/components/user-card/status/user-card-status.tsx




const UserCardStatus = props => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: classnames_default()((user_card_status_module_default()).user_card_status, props.className),
    onClick: props.onClick,
    children: props.children
  });
};
UserCardStatus.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/components/user-card/tags/user-card-tags.module.scss
var user_card_tags_module = __webpack_require__(45540);
var user_card_tags_module_default = /*#__PURE__*/__webpack_require__.n(user_card_tags_module);
;// CONCATENATED MODULE: ./src/shared/ui/components/user-card/tags/user-card-tags.tsx





const UserCardTags = props => {
  const intl = (0,dist/* useIntl */.YB)();
  if (!props.tags) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (user_card_tags_module_default()).user_card_tags,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      className: (user_card_tags_module_default()).label,
      children: [intl.formatMessage({
        id: "shared.user_card.tags",
        defaultMessage: "Tags"
      }), " "]
    }), props.tags.map((it, key) => /*#__PURE__*/jsx_runtime.jsx("span", {
      className: (user_card_tags_module_default()).item,
      children: it
    }, key))]
  });
};
UserCardTags.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/components/user-card/about/user-card-about.module.scss
var user_card_about_module = __webpack_require__(46081);
var user_card_about_module_default = /*#__PURE__*/__webpack_require__.n(user_card_about_module);
;// CONCATENATED MODULE: ./src/shared/ui/components/user-card/about/user-card-about.tsx





const UserCardAbout = props => {
  var _props$data;

  const intl = (0,dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (user_card_about_module_default()).user_card_about,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (user_card_about_module_default()).title,
      children: [intl.formatMessage({
        id: "shared.user_card.about_me",
        defaultMessage: "About me"
      }), ":"]
    }), (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.split("\n").map((it, key) => /*#__PURE__*/jsx_runtime.jsx("p", {
      children: it
    }, key))]
  });
};
UserCardAbout.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/components/user-card/divider/user-card-divider.module.scss
var user_card_divider_module = __webpack_require__(43219);
var user_card_divider_module_default = /*#__PURE__*/__webpack_require__.n(user_card_divider_module);
;// CONCATENATED MODULE: ./src/shared/ui/components/user-card/divider/user-card-divider.tsx



const UserCardDivider = props => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (user_card_divider_module_default()).user_card_divider,
    children: props.children
  });
};
UserCardDivider.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/components/user-card/status-my/status-my.module.scss
var status_my_module = __webpack_require__(13014);
var status_my_module_default = /*#__PURE__*/__webpack_require__.n(status_my_module);
// EXTERNAL MODULE: ./src/@yoldi/utils/hooks.ts
var utils_hooks = __webpack_require__(32058);
// EXTERNAL MODULE: ./node_modules/react-textarea-autosize/dist/react-textarea-autosize.cjs.prod.js
var react_textarea_autosize_cjs_prod = __webpack_require__(39901);
;// CONCATENATED MODULE: ./src/shared/ui/components/user-card/status-my/status-my.tsx










const StatusMy = props => {
  var _profile$data, _profile$data3;

  const {
    0: editable,
    1: setEditable
  } = (0,react.useState)(false);
  const profile = init/* api.user.useGetMe */.h.user.useGetMe();
  const {
    0: value,
    1: setValue
  } = (0,react.useState)((_profile$data = profile.data) === null || _profile$data === void 0 ? void 0 : _profile$data.status);
  const formRef = (0,react.useRef)(null);
  const textAreaRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    var _profile$data2;

    setValue((_profile$data2 = profile.data) === null || _profile$data2 === void 0 ? void 0 : _profile$data2.status);
  }, [(_profile$data3 = profile.data) === null || _profile$data3 === void 0 ? void 0 : _profile$data3.status]);

  const onSubmit = async () => {
    await init/* api.user.updateProfile */.h.user.updateProfile({
      status: value
    });
    await profile.mutate();
    setEditable(false);
  };

  const onCancel = () => {
    var _profile$data4;

    setEditable(false);
    setValue((_profile$data4 = profile.data) === null || _profile$data4 === void 0 ? void 0 : _profile$data4.status);
  };

  (0,utils_hooks/* useKeyDown */.K7)(utils_hooks/* KeyName.ESC */.et.ESC, onCancel);
  (0,utils_hooks/* useClickOutside */.O8)(formRef, onCancel);

  const addNewLine = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    textArea.value = textArea.value.substring(0, start) + "\n" + textArea.value.substring(end);
    textArea.setSelectionRange(start + 1, start + 1);
    setValue(textArea.value);
  };

  const onPressEnter = e => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    if (e.altKey || e.shiftKey) {
      addNewLine();
    } else {
      onSubmit();
    }
  };

  const intl = (0,dist/* useIntl */.YB)();

  if (!editable) {
    var _profile$data5;

    const empty = profile.data && !profile.data.status;
    return /*#__PURE__*/jsx_runtime.jsx(UserCardStatus, {
      className: classnames_default()((status_my_module_default()).status_with_hover, empty && (status_my_module_default()).empty),
      onClick: () => setEditable(true),
      children: empty ? intl.formatMessage({
        id: "shared.user_card.status.placeholder",
        defaultMessage: "Set status..."
      }) : (_profile$data5 = profile.data) === null || _profile$data5 === void 0 ? void 0 : _profile$data5.status
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
    ref: formRef,
    className: classnames_default()((status_my_module_default()).status_my, props.className),
    style: props.style,
    onSubmit: e => {
      e.preventDefault();
      onSubmit();
    },
    children: [/*#__PURE__*/jsx_runtime.jsx(react_textarea_autosize_cjs_prod/* default */.Z, {
      value: value,
      onChange: e => setValue(e.target.value),
      autoFocus: true,
      ref: textAreaRef,
      onKeyPress: onPressEnter
    }), /*#__PURE__*/jsx_runtime.jsx("button", {
      type: "submit",
      children: intl.formatMessage({
        id: "shared.user_card.status.save",
        defaultMessage: "Save"
      })
    })]
  });
};
StatusMy.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/components/user-card/user-card.module.scss
var user_card_module = __webpack_require__(58577);
var user_card_module_default = /*#__PURE__*/__webpack_require__.n(user_card_module);
;// CONCATENATED MODULE: ./src/shared/ui/components/user-card/user-card.tsx












const UserCard = props => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (user_card_module_default()).user_card,
    children: props.children
  });
};
UserCard.Skeleton = UserCardSkeleton;
UserCard.Header = UserCardHeader;
UserCard.HeaderMy = UserCardHeaderMy;
UserCard.Description = UserCardDescription;
UserCard.Status = UserCardStatus;
UserCard.StatusMy = StatusMy;
UserCard.Tags = UserCardTags;
UserCard.About = UserCardAbout;
UserCard.Divider = UserCardDivider;

/***/ }),

/***/ 98407:
/***/ ((module) => {

// Exports
module.exports = {
	"photo_gallery": "photo-gallery_photo_gallery__20Hbu",
	"close": "photo-gallery_close__17fEi",
	"slider": "photo-gallery_slider__UfEgM",
	"image": "photo-gallery_image__3hxpj",
	"button": "photo-gallery_button__h7e5l",
	"prev": "photo-gallery_prev__TVTJ0",
	"next": "photo-gallery_next__3hj6n"
};


/***/ }),

/***/ 96627:
/***/ ((module) => {

// Exports
module.exports = {
	"photo_list": "photo-list_photo_list__3rWwA",
	"title": "photo-list_title__YkPA0",
	"add": "photo-list_add__2yslL",
	"top": "photo-list_top__1XNkT",
	"disabled": "photo-list_disabled__3aQcX",
	"grid": "photo-list_grid__6WqUp",
	"empty": "photo-list_empty__3LW7t",
	"item": "photo-list_item__1NAr7",
	"photo": "photo-list_photo__1yn0h",
	"delete": "photo-list_delete__3r_n8"
};


/***/ }),

/***/ 43222:
/***/ ((module) => {

// Exports
module.exports = {
	"text_area": "text-area_text_area__cFe5A",
	"error_text": "text-area_error_text__JJNLI",
	"error": "text-area_error__12cx2"
};


/***/ }),

/***/ 46081:
/***/ ((module) => {

// Exports
module.exports = {
	"user_card_about": "user-card-about_user_card_about__2viKS",
	"title": "user-card-about_title__3oeE2"
};


/***/ }),

/***/ 49447:
/***/ ((module) => {

// Exports
module.exports = {
	"user_card_description_item": "user-card-description-item_user_card_description_item__QeUf8"
};


/***/ }),

/***/ 80486:
/***/ ((module) => {

// Exports
module.exports = {
	"user_card_description": "user-card-description_user_card_description__fNeEK"
};


/***/ }),

/***/ 43219:
/***/ ((module) => {

// Exports
module.exports = {
	"user_card_divider": "user-card-divider_user_card_divider__KbMGA"
};


/***/ }),

/***/ 13743:
/***/ ((module) => {

// Exports
module.exports = {
	"user_card_header_my": "user-card-header-my_user_card_header_my__J_AGe"
};


/***/ }),

/***/ 59697:
/***/ ((module) => {

// Exports
module.exports = {
	"user_card_header": "user-card-header_user_card_header__1jOPG",
	"right": "user-card-header_right__30sP7",
	"rate": "user-card-header_rate__3ysbG",
	"name": "user-card-header_name__ck-qS",
	"button": "user-card-header_button__3CgBH",
	"report": "user-card-header_report__2R_Cc",
	"cancel": "user-card-header_cancel__QCgxw",
	"top": "user-card-header_top__2qIpF",
	"top--disabled": "user-card-header_top--disabled__3_TdS",
	"ava": "user-card-header_ava___FtAO",
	"ava--disabled": "user-card-header_ava--disabled__3k8O-",
	"main": "user-card-header_main__RaPwr",
	"follow": "user-card-header_follow__SFFiB",
	"unfollow": "user-card-header_unfollow__1PRLq",
	"vip": "user-card-header_vip__3tZYC",
	"header_controls": "user-card-header_header_controls__1_rss",
	"cancel_icon": "user-card-header_cancel_icon__3V6mw",
	"report--disabled": "user-card-header_report--disabled__1xDxT"
};


/***/ }),

/***/ 96973:
/***/ ((module) => {

// Exports
module.exports = {
	"user_card_skeleton": "user-card-skeleton_user_card_skeleton__3XwP_",
	"name": "user-card-skeleton_name__2fQcm",
	"status": "user-card-skeleton_status__1ZeDv",
	"tags": "user-card-skeleton_tags__11V7q",
	"tags_label": "user-card-skeleton_tags_label__1QtVE",
	"about": "user-card-skeleton_about__7-wdT",
	"top": "user-card-skeleton_top__3dL3_",
	"center": "user-card-skeleton_center__2IyUk",
	"ava": "user-card-skeleton_ava__31dD9",
	"main": "user-card-skeleton_main__Xd1-3",
	"user-info__flag": "user-card-skeleton_user-info__flag__b_3M4",
	"tags_item": "user-card-skeleton_tags_item__2Mn8x"
};


/***/ }),

/***/ 13014:
/***/ ((module) => {

// Exports
module.exports = {
	"status_my": "status-my_status_my__3b1Jr",
	"status_with_hover": "status-my_status_with_hover__2_SOu",
	"empty": "status-my_empty__2sZ9T"
};


/***/ }),

/***/ 19184:
/***/ ((module) => {

// Exports
module.exports = {
	"user_card_status": "user-card-status_user_card_status__3uDIC",
	"user_card_status--empty": "user-card-status_user_card_status--empty__fYaEc"
};


/***/ }),

/***/ 45540:
/***/ ((module) => {

// Exports
module.exports = {
	"user_card_tags": "user-card-tags_user_card_tags__y71PK",
	"label": "user-card-tags_label__9XxuP",
	"item": "user-card-tags_item__HEc_U"
};


/***/ }),

/***/ 58577:
/***/ ((module) => {

// Exports
module.exports = {
	"user_card": "user-card_user_card__2E4BL"
};


/***/ })

};
;