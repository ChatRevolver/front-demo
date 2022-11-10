exports.id = 3561;
exports.ids = [3561];
exports.modules = {

/***/ 25841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LocalStorage)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class LocalStorage {
  static getItem(key) {
    if (typeof localStorage === "undefined") return undefined;
    return localStorage.getItem(key);
  }

  static setItem(key, value) {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(key, value);
    LocalStorage.notify(key, value);
  }

  static removeItem(key) {
    if (typeof localStorage === "undefined") return;
    localStorage.removeItem(key);
    LocalStorage.notify(key, undefined);
  }

  static getJson(key) {
    const raw = LocalStorage.getItem(key);
    if (!raw) return undefined;
    return JSON.parse(raw);
  }

  static setJSON(key, json) {
    const value = JSON.stringify(json);
    LocalStorage.setItem(key, value);
  }

}

_defineProperty(LocalStorage, "subscribers", {});

_defineProperty(LocalStorage, "subscribe", (key, fn) => {
  const unsubscribeFromCurrentPage = LocalStorage.subscribeToCurrentTab(key, fn);
  const unsubscribeFromOtherTabs = LocalStorage.subscribeToOtherTabs(key, fn);
  return () => {
    unsubscribeFromCurrentPage();
    unsubscribeFromOtherTabs();
  };
});

_defineProperty(LocalStorage, "notify", (key, value) => {
  for (const it of LocalStorage.subscribers[key] || []) {
    it(value);
  }
});

_defineProperty(LocalStorage, "subscribeToCurrentTab", (key, fn) => {
  if (!LocalStorage.subscribers[key]) {
    LocalStorage.subscribers[key] = [];
  }

  LocalStorage.subscribers[key].push(fn);
  return () => {
    var _LocalStorage$subscri;

    LocalStorage.subscribers[key] = (_LocalStorage$subscri = LocalStorage.subscribers[key]) === null || _LocalStorage$subscri === void 0 ? void 0 : _LocalStorage$subscri.filter(it => it !== fn);
  };
});

_defineProperty(LocalStorage, "subscribeToOtherTabs", (key, fn) => {
  if (true) return () => {};

  const listener = e => {
    // after localStorage.clear()
    if (e.key == null) {
      fn(undefined);
    }

    if (e.key === key) {
      fn(e.newValue || undefined);
    }
  };

  window.addEventListener("storage", listener);
  return () => {
    window.removeEventListener("storage", listener);
  };
});

/***/ }),

/***/ 24965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports numberWithSpaces, formatNumber */
const numberWithSpaces = x => {
  const parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
  return parts.join(".");
};
const formatNumber = (value, fixed = 4, withSpaces = false) => {
  // Catch "Infinity" value
  if (value && !isFinite(parseFloat(value.toString()))) return "0";
  if (!value || value === "" || parseFloat(value + "") === 0) return "0";

  if (fixed === -1) {
    const parsedNumber = value + "";
    return withSpaces ? numberWithSpaces(parsedNumber) : parsedNumber;
  }

  const parsedNumber = Number(value).toFixed(fixed);
  const match = /(.*?)(\.?0*)$/.exec(parsedNumber);
  const outputValue = match ? match[1] : parsedNumber;
  return withSpaces ? numberWithSpaces(outputValue) : outputValue;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatNumber);

/***/ }),

/***/ 15265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ LocaleContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const LocaleContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  currentLocale: "ru",
  toggleLocale: lang => {}
});

/***/ }),

/***/ 7277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* binding */ Chat)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/shared/api/init.tsx + 49 modules
var init = __webpack_require__(21495);
// EXTERNAL MODULE: ./node_modules/throttle-debounce/index.cjs.js
var index_cjs = __webpack_require__(84971);
// EXTERNAL MODULE: ./node_modules/react-intl/dist/index.js
var dist = __webpack_require__(25050);
;// CONCATENATED MODULE: ./src/modules/chat/model/chat.model.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const useChat = (chatId, temporary = false) => {
  var _messageList$data, _chat$data, _messageList$data2;

  const chat = init/* api.chat.useGetChat */.h.chat.useGetChat(temporary ? undefined : chatId);
  const config = temporary ? {
    fallbackData: [],
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false
  } : undefined;
  const messageList = init/* api.chat.useMessages */.h.chat.useMessages(chatId, undefined, config);

  const onSend = async text => {
    const content = text.trim();
    init.ws.chat.sendMessage(chatId, content);
  };

  const onTyping = (0,react.useCallback)((0,index_cjs/* throttle */.P2)(1000, true, () => init.ws.chat.typing(chatId)), [chatId, temporary]);
  const {
    0: typing,
    1: setTyping
  } = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    let timeout;

    const handleTyping = event => {
      if (event.chatID !== chatId) return;
      setTyping(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setTyping(false), 2500);
    };

    const handleMessage = event => {
      if (event.chatId !== chatId) return;
      console.log(chatId, event);
      setTyping(false);
      clearTimeout(timeout);
      messageList.mutate(data => [event, ...(data || [])], !temporary);
      if (!temporary) chat.mutate();
    };

    const handleRead = event => {
      if (event.chatId !== chatId) return;
      messageList.mutate(data => data === null || data === void 0 ? void 0 : data.map(it => _objectSpread(_objectSpread({}, it), {}, {
        read: true
      })), !temporary);
    };

    const unsubscribe = [() => clearTimeout(timeout), //
    init.ws.chat.onTyping(handleTyping), init.ws.chat.onMessage(handleMessage), init.ws.chat.onRead(handleRead)];
    return () => unsubscribe.forEach(it => it());
  }, [chatId, temporary]); // group messages by date

  const intl = (0,dist/* useIntl */.YB)();
  const now = new Date();
  const messages = (_messageList$data = messageList.data) === null || _messageList$data === void 0 ? void 0 : _messageList$data.map(it => {
    const currentYear = new Date(it.time).getFullYear() === now.getFullYear();
    return _objectSpread(_objectSpread({}, it), {}, {
      day: intl.formatDate(it.time, {
        day: "2-digit",
        month: "long",
        year: currentYear ? undefined : "numeric"
      })
    });
  });
  const messagesGroupMap = messages === null || messages === void 0 ? void 0 : messages.reduce((it, x) => {
    (it[x.day] = it[x.day] || []).push(x);
    return it;
  }, {});
  const messagesByDay = Object.entries(messagesGroupMap || {}).map(([day, messages]) => ({
    day,
    messages
  }));
  return {
    id: chatId,
    messagesByDay,
    user: (_chat$data = chat.data) === null || _chat$data === void 0 ? void 0 : _chat$data.user,
    loading: messageList.data === undefined && messageList.isValidating,
    empty: ((_messageList$data2 = messageList.data) === null || _messageList$data2 === void 0 ? void 0 : _messageList$data2.length) === 0,
    typing,
    onSend,
    onTyping: onTyping
  };
};
// EXTERNAL MODULE: ./src/modules/chat/ui/input-toolbar/input-toolbar.module.scss
var input_toolbar_module = __webpack_require__(51787);
var input_toolbar_module_default = /*#__PURE__*/__webpack_require__.n(input_toolbar_module);
// EXTERNAL MODULE: ./node_modules/react-textarea-autosize/dist/react-textarea-autosize.cjs.prod.js
var react_textarea_autosize_cjs_prod = __webpack_require__(39901);
// EXTERNAL MODULE: ./src/shared/ui/atoms/icon/Icon.tsx
var Icon = __webpack_require__(58416);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/modules/chat/ui/input-toolbar/input-toolbar.tsx







const InputToolbar = props => {
  const textAreaRef = (0,react.useRef)(null);
  const {
    0: message,
    1: _setMessage
  } = (0,react.useState)("");

  const setMessage = value => {
    _setMessage(value);

    if (value) props.onTyping();
  };

  (0,react.useEffect)(() => {
    if (props.value !== undefined) {
      setMessage(props.value);
    }
  }, [props.value]);
  (0,react.useEffect)(() => {
    var _props$onChange;

    return (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, message);
  }, [message]);

  const addNewLine = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    textArea.value = textArea.value.substring(0, start) + "\n" + textArea.value.substring(end);
    textArea.setSelectionRange(start + 1, start + 1);
    setMessage(textArea.value);
  };

  const onPressEnter = e => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    if (e.altKey || e.shiftKey) {
      addNewLine();
    } else {
      onSend();
    }
  };

  const onSend = () => {
    var _textAreaRef$current;

    const msg = message.trim();
    if (msg) props.onSend(msg);
    setMessage("");
    (_textAreaRef$current = textAreaRef.current) === null || _textAreaRef$current === void 0 ? void 0 : _textAreaRef$current.focus();
  };

  const onSubmit = e => {
    e.preventDefault();
    onSend();
  };

  const intl = (0,dist/* useIntl */.YB)();
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (input_toolbar_module_default()).input_toolbar,
    children: /*#__PURE__*/jsx_runtime.jsx("form", {
      onSubmit: onSubmit,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (input_toolbar_module_default()).input_wrapper,
        children: [/*#__PURE__*/jsx_runtime.jsx(react_textarea_autosize_cjs_prod/* default */.Z, {
          ref: textAreaRef,
          value: message,
          maxRows: 6,
          placeholder: intl.formatMessage({
            id: "chat.input_toolbar.placeholder",
            defaultMessage: "Write a message..."
          }),
          onKeyPress: onPressEnter,
          onChange: e => setMessage(e.target.value)
        }), /*#__PURE__*/jsx_runtime.jsx("button", {
          type: "submit",
          disabled: !message,
          children: /*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
            name: "send"
          })
        })]
      })
    })
  });
};
InputToolbar.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/atoms/avatar/avatar.tsx
var avatar = __webpack_require__(72457);
// EXTERNAL MODULE: ./src/modules/chat/ui/chat-empty/chat-empty.module.scss
var chat_empty_module = __webpack_require__(22413);
var chat_empty_module_default = /*#__PURE__*/__webpack_require__.n(chat_empty_module);
;// CONCATENATED MODULE: ./src/modules/chat/ui/chat-empty/chat-empty.tsx






const ChatEmpty = props => {
  const intl = (0,dist/* useIntl */.YB)();
  const helloMessage = intl.formatMessage({
    id: "chat.empty.hello_message",
    defaultMessage: "hello"
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (chat_empty_module_default()).chat_empty,
    children: [/*#__PURE__*/jsx_runtime.jsx(avatar/* Avatar */.q, {
      src: props.image,
      size: 64
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (chat_empty_module_default()).text,
      children: [intl.formatMessage({
        id: "chat.empty.title",
        defaultMessage: "Let’s start to chat!"
      }), /*#__PURE__*/jsx_runtime.jsx("br", {}), /*#__PURE__*/jsx_runtime.jsx("a", {
        onClick: () => props.onSend(helloMessage),
        children: intl.formatMessage({
          id: "chat.empty.say_hello",
          defaultMessage: "Just say ‘{hello_message}’"
        }, {
          hello_message: helloMessage
        })
      })]
    })]
  });
};
ChatEmpty.defaultProps = {};
// EXTERNAL MODULE: ./src/modules/chat/ui/message-container/message-container.module.scss
var message_container_module = __webpack_require__(45550);
var message_container_module_default = /*#__PURE__*/__webpack_require__.n(message_container_module);
;// CONCATENATED MODULE: ./src/modules/chat/ui/message-container/message-container.tsx



const MessageContainer = props => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (message_container_module_default()).message_container,
    children: props.children
  });
};
MessageContainer.defaultProps = {};
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/modules/chat/ui/typing-indicator/typing-indicator.module.scss
var typing_indicator_module = __webpack_require__(27277);
var typing_indicator_module_default = /*#__PURE__*/__webpack_require__.n(typing_indicator_module);
;// CONCATENATED MODULE: ./src/modules/chat/ui/typing-indicator/typing-indicator.tsx





const TypingIndicator = props => {
  const intl = (0,dist/* useIntl */.YB)();
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: classnames_default()((typing_indicator_module_default()).typing_indicator, props.hide && (typing_indicator_module_default()).hide),
    children: props.name ? intl.formatMessage({
      id: "chat.typing_indicator.user_typing",
      defaultMessage: "{name} typing"
    }, {
      name: props.name
    }) : intl.formatMessage({
      id: "chat.typing_indicator.noname_typing",
      defaultMessage: "Typing"
    })
  });
};
TypingIndicator.defaultProps = {};
// EXTERNAL MODULE: ./src/modules/chat/ui/message/message.module.scss
var message_module = __webpack_require__(1396);
var message_module_default = /*#__PURE__*/__webpack_require__.n(message_module);
;// CONCATENATED MODULE: ./src/modules/chat/ui/message/message.tsx







const Message = props => {
  var _props$content, _props$content$trim;

  const intl = (0,dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()((message_module_default()).message, props.mine && (message_module_default()).my),
    children: [/*#__PURE__*/jsx_runtime.jsx("p", {
      className: (message_module_default()).content,
      children: (_props$content = props.content) === null || _props$content === void 0 ? void 0 : (_props$content$trim = _props$content.trim()) === null || _props$content$trim === void 0 ? void 0 : _props$content$trim.split("\n").map((it, key) => /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [it, " ", /*#__PURE__*/jsx_runtime.jsx("br", {})]
      }, key))
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()((message_module_default()).time, props.read && props.mine && (message_module_default()).read),
      children: [/*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
        name: "read",
        className: (message_module_default()).icon
      }), intl.formatTime(props.time)]
    })]
  });
};
Message.defaultProps = {};
// EXTERNAL MODULE: ./src/modules/chat/ui/day/day.module.scss
var day_module = __webpack_require__(91795);
var day_module_default = /*#__PURE__*/__webpack_require__.n(day_module);
;// CONCATENATED MODULE: ./src/modules/chat/ui/day/day.tsx



const Day = props => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (day_module_default()).day,
    children: props.children
  });
};
Day.defaultProps = {};
// EXTERNAL MODULE: ./src/modules/chat/ui/chat/chat.module.scss
var chat_module = __webpack_require__(34661);
var chat_module_default = /*#__PURE__*/__webpack_require__.n(chat_module);
;// CONCATENATED MODULE: ./src/modules/chat/ui/chat/chat.tsx
function chat_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function chat_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { chat_ownKeys(Object(source), true).forEach(function (key) { chat_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { chat_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function chat_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Chat = props => {
  const chat = useChat(props.id, props.temporary);

  if (chat.loading) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()((chat_module_default()).chat, props.theme === "dark" && (chat_module_default()).dark, props.className),
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: (chat_module_default()).loading,
        children: props.theme === "dark" ? /*#__PURE__*/jsx_runtime.jsx("img", {
          src: "/img/loader.svg"
        }) : /*#__PURE__*/jsx_runtime.jsx("img", {
          src: "/img/loader-black.svg"
        })
      }), /*#__PURE__*/jsx_runtime.jsx(InputToolbar, {
        onSend: chat.onSend,
        onTyping: chat.onTyping
      })]
    });
  }

  if (chat.empty) {
    var _chat$user;

    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()((chat_module_default()).chat, props.theme === "dark" && (chat_module_default()).dark, props.className),
      children: [/*#__PURE__*/jsx_runtime.jsx(ChatEmpty, {
        image: (_chat$user = chat.user) === null || _chat$user === void 0 ? void 0 : _chat$user.image,
        onSend: chat.onSend
      }), /*#__PURE__*/jsx_runtime.jsx(InputToolbar, {
        onSend: chat.onSend,
        onTyping: chat.onTyping
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()((chat_module_default()).chat, props.theme === "dark" && (chat_module_default()).dark, props.className),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(MessageContainer, {
      children: [/*#__PURE__*/jsx_runtime.jsx(TypingIndicator, {
        hide: !chat.typing
      }), chat.messagesByDay.map(it => /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [it.messages.map(it => /*#__PURE__*/jsx_runtime.jsx(Message, chat_objectSpread({}, it), it.id)), /*#__PURE__*/jsx_runtime.jsx(Day, {
          children: it.day
        })]
      }, it.day))]
    }), /*#__PURE__*/jsx_runtime.jsx(InputToolbar, {
      onSend: chat.onSend,
      onTyping: chat.onTyping
    })]
  });
};
Chat.defaultProps = {
  theme: "white"
};

/***/ }),

/***/ 58932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ FriendRemoveModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var shared_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27646);
/* harmony import */ var shared_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21495);
/* harmony import */ var shared_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34910);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);






const FriendRemoveModal = props => {
  const form = (0,shared_lib__WEBPACK_IMPORTED_MODULE_2__/* .useModalForm */ .v)(props, {
    onSubmit: () => shared_api__WEBPACK_IMPORTED_MODULE_3__/* .api.user.unfollowUser */ .h.user.unfollowUser(props.id)
  });
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__/* .useIntl */ .YB)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(shared_ui__WEBPACK_IMPORTED_MODULE_5__/* .ModalForm */ .Y, {
    form: form,
    title: intl.formatMessage({
      id: "user.friend_remove_modal.title",
      defaultMessage: "Remove friend?"
    }),
    okText: intl.formatMessage({
      id: "user.friend_remove_modal.ok",
      defaultMessage: "Yes, remove"
    }),
    cancelText: intl.formatMessage({
      id: "user.friend_remove_modal.cancel",
      defaultMessage: "No"
    })
  });
};
FriendRemoveModal.defaultProps = {};

/***/ }),

/***/ 23144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ VipActivateModal)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/shared/ui/modals/modals.tsx
var modals = __webpack_require__(31230);
// EXTERNAL MODULE: ./src/shared/ui/modals/form/modal-form.tsx
var modal_form = __webpack_require__(27646);
// EXTERNAL MODULE: ./src/shared/api/init.tsx + 49 modules
var init = __webpack_require__(21495);
// EXTERNAL MODULE: ./src/shared/lib/forms/useModalForm.ts
var useModalForm = __webpack_require__(34910);
// EXTERNAL MODULE: ./src/shared/ui/modals/modal/modal.tsx
var modal = __webpack_require__(8638);
// EXTERNAL MODULE: ./node_modules/react-intl/dist/index.js
var dist = __webpack_require__(25050);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/modules/user/actions/vip-activate-success.modal.tsx




const VipActivateSuccess = props => {
  const intl = (0,dist/* useIntl */.YB)();
  return /*#__PURE__*/jsx_runtime.jsx(modal/* Modal */.u, {
    title: intl.formatMessage({
      id: "user.vip_activate_modal.success",
      defaultMessage: "VIP activated"
    })
  });
};
VipActivateSuccess.defaultProps = {};
;// CONCATENATED MODULE: ./src/modules/user/actions/vip-activate.modal.tsx







const VipActivateModal = props => {
  const profile = init/* api.user.useGetMe */.h.user.useGetMe();
  const onSuccess = modals/* Modals.prepare */.n.prepare(VipActivateSuccess);
  const form = (0,useModalForm/* useModalForm */.v)(props, {
    onSubmit: init/* api.vip.enableVip */.h.vip.enableVip,
    onSuccess: () => {
      profile.mutate();
      onSuccess();
    }
  });
  const intl = (0,dist/* useIntl */.YB)();
  return /*#__PURE__*/jsx_runtime.jsx(modal_form/* ModalForm */.Y, {
    form: form,
    title: intl.formatMessage({
      id: "user.vip_activate_modal.title",
      defaultMessage: "Activate VIP?"
    }),
    okText: intl.formatMessage({
      id: "user.vip_activate_modal.ok",
      defaultMessage: "Yes, activate"
    }),
    cancelText: intl.formatMessage({
      id: "user.vip_activate_modal.cancel",
      defaultMessage: "No"
    }),
    children: /*#__PURE__*/jsx_runtime.jsx("p", {
      children: intl.formatMessage({
        id: "user.vip_activate_modal.description",
        defaultMessage: "Дарим VIP статус всем пользователям на 100 дней. VIP статус дает возможность писать сообщения всем найденным через поиск анкетам без ограничения."
      })
    })
  });
};

/***/ }),

/***/ 15390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: ./node_modules/@sentry/browser/dist/index.js
var dist = __webpack_require__(87092);
;// CONCATENATED MODULE: ./src/@yoldi/integrations/sentry/index.ts

process.on("unhandledRejection", err => {
  dist.captureException(err);
});
process.on("uncaughtException", err => {
  dist.captureException(err);
});
dist.init({
  dsn: "https://991f8d1058a3442dba9a7aed238d1a83@o165772.ingest.sentry.io/5285363"
}); // add this to _app.ts componentDidCatch

const captureComponentException = (error, errorInfo) => {
  dist.withScope(scope => {
    Object.keys(errorInfo).forEach(key => {
      scope.setExtra(key, errorInfo[key]);
    });
    dist.captureException(error);
  });
};
// EXTERNAL MODULE: ./node_modules/react-intl/dist/index.js
var react_intl_dist = __webpack_require__(25050);
// EXTERNAL MODULE: ./src/shared/api/back/lib/access-token.tsx
var access_token = __webpack_require__(35713);
// EXTERNAL MODULE: ./src/shared/api/hooks.tsx
var hooks = __webpack_require__(75564);
// EXTERNAL MODULE: ./src/@yoldi/utils/helpers.ts
var helpers = __webpack_require__(84427);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./src/shared/ui/modals/modals.tsx
var modals = __webpack_require__(31230);
// EXTERNAL MODULE: ./src/shared/ui/atoms/icon/Icon.tsx
var Icon = __webpack_require__(58416);
// EXTERNAL MODULE: ./src/shared/ui/layout/sidebar/sidebar.module.scss
var sidebar_module = __webpack_require__(47326);
var sidebar_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_module);
// EXTERNAL MODULE: ./src/@yoldi/utils/hooks.ts
var utils_hooks = __webpack_require__(32058);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/shared/ui/layout/sidebar/sidebar.tsx









const Sidebar = props => {
  const ref = (0,react.useRef)(null);
  const {
    modal
  } = modals/* Modals.useCurrent */.n.useCurrent();
  const close = (0,react.useCallback)(() => {
    if (!modal) {
      var _props$onClose;

      props.onClosePanel();
      (_props$onClose = props.onClose) === null || _props$onClose === void 0 ? void 0 : _props$onClose.call(props);
    }
  }, [props.onClose, props.onClosePanel, modal]);
  (0,utils_hooks/* useClickOutside */.O8)(ref, close);
  (0,utils_hooks/* useKeyDown */.K7)(utils_hooks/* KeyName.ESC */.et.ESC, close);
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
    className: classnames_default()((sidebar_module_default()).sidebar_wrap, // !authUseCase.authorized && "sidebar-wrap--unauthorized",
    // me?.deleted && "sidebar-wrap--unauthorized",
    props.panelOpened && (sidebar_module_default()).panel_opened, props.open && (sidebar_module_default()).mobile_opened),
    ref: ref,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (sidebar_module_default()).sidebar,
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: (sidebar_module_default()).logo,
        children: /*#__PURE__*/jsx_runtime.jsx("img", {
          src: "/img/logo-white.svg"
        })
      }), /*#__PURE__*/jsx_runtime.jsx("button", {
        className: (sidebar_module_default()).mobile_close,
        onClick: props.onClose
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: (sidebar_module_default()).menu,
        children: props.menu.map(it => /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
          className: classnames_default()((sidebar_module_default()).link, it.key === props.activeKey && (sidebar_module_default()).active),
          onClick: () => props.onMenuClick(it.key),
          children: [/*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
            name: it.icon
          }), /*#__PURE__*/jsx_runtime.jsx("span", {
            className: (sidebar_module_default()).label,
            children: it.label
          }), !!it.badge && /*#__PURE__*/jsx_runtime.jsx("span", {
            className: (sidebar_module_default()).badge,
            children: it.badge
          })]
        }, it.key))
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (sidebar_module_default()).bottom_menu,
        children: [/*#__PURE__*/jsx_runtime.jsx("a", {
          href: "https://about.chatrevolver.com",
          target: "_blank",
          className: (sidebar_module_default()).link,
          children: intl.formatMessage({
            id: "menu.about",
            defaultMessage: "About"
          })
        }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          href: "/faq/what-is",
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            className: (sidebar_module_default()).link,
            children: intl.formatMessage({
              id: "menu.faq",
              defaultMessage: "FAQ"
            })
          })
        }), /*#__PURE__*/jsx_runtime.jsx("a", {
          className: classnames_default()((sidebar_module_default()).link, (sidebar_module_default()).only_mobile),
          children: "In Eng"
        })]
      })]
    }), props.children]
  });
};
Sidebar.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/layout/sidebar/sidebar-panel.module.scss
var sidebar_panel_module = __webpack_require__(30329);
var sidebar_panel_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_panel_module);
;// CONCATENATED MODULE: ./src/shared/ui/layout/sidebar/sidebar-panel.tsx





const SidebarPanel = props => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
  className: classnames_default()((sidebar_panel_module_default()).sidebar_panel, props.className),
  children: [props.showLogo && /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (sidebar_panel_module_default()).logo,
    children: /*#__PURE__*/jsx_runtime.jsx("img", {
      src: "/img/logo-name-white.svg",
      height: 40
    })
  }), props.onClose && /*#__PURE__*/jsx_runtime.jsx("button", {
    className: (sidebar_panel_module_default()).mobile_close,
    onClick: props.onClose
  }), /*#__PURE__*/jsx_runtime.jsx("div", {
    className: classnames_default()((sidebar_panel_module_default()).content, props.contentClassName),
    children: props.children
  })]
});
SidebarPanel.defaultProps = {
  showLogo: true
};
// EXTERNAL MODULE: ./src/modules/chat/ui/chat/chat.tsx + 7 modules
var chat_chat = __webpack_require__(7277);
// EXTERNAL MODULE: ./src/shared/ui/atoms/avatar/avatar.tsx
var avatar = __webpack_require__(72457);
// EXTERNAL MODULE: ./src/modules/sidebar/chat-panel/chat-panel-header.module.scss
var chat_panel_header_module = __webpack_require__(28640);
var chat_panel_header_module_default = /*#__PURE__*/__webpack_require__.n(chat_panel_header_module);
// EXTERNAL MODULE: ./src/router.ts + 1 modules
var src_router = __webpack_require__(3325);
;// CONCATENATED MODULE: ./src/modules/sidebar/chat-panel/chat-panel-header.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const ChatPanelHeader = props => {
  var _props$user, _props$user2, _props$user3, _props$user4, _props$user5, _props$user6, _props$user7;

  const {
    0: menuOpen,
    1: setMenuOpen
  } = (0,react.useState)(false);
  const profileRef = (0,react.useRef)(null);
  (0,utils_hooks/* useClickOutside */.O8)(profileRef, () => setMenuOpen(false));
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (chat_panel_header_module_default()).chat_panel_header,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
      className: (chat_panel_header_module_default()).back,
      onClick: props.onBack,
      children: [/*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
        name: "arrow-left",
        className: (chat_panel_header_module_default()).icon
      }), " ", /*#__PURE__*/jsx_runtime.jsx("span", {
        className: (chat_panel_header_module_default()).text,
        children: intl.formatMessage({
          id: "sidebar.chat.back",
          defaultMessage: "Back"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (chat_panel_header_module_default()).user,
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: (chat_panel_header_module_default()).name,
        children: (_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.name
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: (chat_panel_header_module_default()).online,
        children: (_props$user2 = props.user) !== null && _props$user2 !== void 0 && _props$user2.online ? intl.formatMessage({
          id: "sidebar.chat.online",
          defaultMessage: "online"
        }) : intl.formatMessage({
          id: "sidebar.chat.offline",
          defaultMessage: "offline"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (chat_panel_header_module_default()).right,
      children: [/*#__PURE__*/jsx_runtime.jsx(avatar/* Avatar */.q, {
        size: 36,
        src: (_props$user3 = props.user) === null || _props$user3 === void 0 ? void 0 : _props$user3.image,
        online: (_props$user4 = props.user) === null || _props$user4 === void 0 ? void 0 : _props$user4.online
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: classnames_default()((chat_panel_header_module_default()).more, menuOpen && (chat_panel_header_module_default()).active),
        onClick: () => setMenuOpen(!menuOpen),
        ref: profileRef,
        children: [/*#__PURE__*/jsx_runtime.jsx("button", {
          className: (chat_panel_header_module_default()).top,
          children: /*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
            name: "more"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: (chat_panel_header_module_default()).menu,
          children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, _objectSpread(_objectSpread({}, src_router/* default.profile.id */.Z.profile.id((_props$user5 = props.user) === null || _props$user5 === void 0 ? void 0 : _props$user5.id).link), {}, {
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              className: (chat_panel_header_module_default()).name,
              children: intl.formatMessage({
                id: "sidebar.chat.profile",
                defaultMessage: "Profile"
              })
            })
          })), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: (chat_panel_header_module_default()).list,
            children: [((_props$user6 = props.user) === null || _props$user6 === void 0 ? void 0 : _props$user6.online) && /*#__PURE__*/jsx_runtime.jsx(next_link.default, _objectSpread(_objectSpread({}, src_router/* default.profile.id */.Z.profile.id((_props$user7 = props.user) === null || _props$user7 === void 0 ? void 0 : _props$user7.id).call.link), {}, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
                className: (chat_panel_header_module_default()).link,
                children: [/*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
                  name: "video",
                  className: (chat_panel_header_module_default()).icon
                }), /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: (chat_panel_header_module_default()).label,
                  children: intl.formatMessage({
                    id: "sidebar.chat.video_call",
                    defaultMessage: "Video Call"
                  })
                })]
              })
            })), /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
              className: (chat_panel_header_module_default()).link,
              onClick: () => props.onChatDelete(),
              children: [/*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
                name: "trash",
                className: (chat_panel_header_module_default()).icon
              }), /*#__PURE__*/jsx_runtime.jsx("span", {
                className: (chat_panel_header_module_default()).label,
                children: intl.formatMessage({
                  id: "sidebar.chat.delete",
                  defaultMessage: "Delete chat"
                })
              })]
            })]
          })]
        })]
      })]
    })]
  });
};
ChatPanelHeader.defaultProps = {};
// EXTERNAL MODULE: ./src/modules/sidebar/chat-panel/chat-panel.module.scss
var chat_panel_module = __webpack_require__(62584);
var chat_panel_module_default = /*#__PURE__*/__webpack_require__.n(chat_panel_module);
// EXTERNAL MODULE: ./src/shared/api/init.tsx + 49 modules
var init = __webpack_require__(21495);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./src/shared/ui/modals/form/modal-form.tsx
var modal_form = __webpack_require__(27646);
// EXTERNAL MODULE: ./src/shared/lib/forms/useModalForm.ts
var useModalForm = __webpack_require__(34910);
;// CONCATENATED MODULE: ./src/modules/user/actions/chat-remove.modal.tsx






const ChatRemoveModal = props => {
  const form = (0,useModalForm/* useModalForm */.v)(props, {
    onSubmit: () => init/* api.chat.deleteChat */.h.chat.deleteChat(props.id)
  });
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/jsx_runtime.jsx(modal_form/* ModalForm */.Y, {
    form: form,
    title: intl.formatMessage({
      id: "user.chat_remove_modal.title",
      defaultMessage: "Delete chat forever?"
    }),
    okText: intl.formatMessage({
      id: "user.chat_remove_modal.ok",
      defaultMessage: "Yes, delete"
    }),
    cancelText: intl.formatMessage({
      id: "user.chat_remove_modal.cancel",
      defaultMessage: "No"
    })
  });
};
ChatRemoveModal.defaultProps = {};
;// CONCATENATED MODULE: ./src/modules/sidebar/chat-panel/chat-panel.tsx










const ChatPanel = props => {
  var _chat$data;

  const chat = init/* api.chat.useGetChat */.h.chat.useGetChat(props.chatId);
  const chatList = init/* api.chat.useGetChats */.h.chat.useGetChats();

  const onBack = () => next_router.default.push(next_router.default.asPath.split("?")[0] + "?chat");

  const onDelete = modals/* Modals.prepare */.n.prepare(ChatRemoveModal, {
    id: props.chatId,
    onSuccess: () => {
      chatList.mutate();
      onBack();
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SidebarPanel, {
    showLogo: false,
    className: (chat_panel_module_default()).chat_panel,
    contentClassName: (chat_panel_module_default()).content,
    children: [/*#__PURE__*/jsx_runtime.jsx(ChatPanelHeader, {
      user: (_chat$data = chat.data) === null || _chat$data === void 0 ? void 0 : _chat$data.user,
      onBack: onBack,
      onChatDelete: onDelete
    }), /*#__PURE__*/jsx_runtime.jsx(chat_chat/* Chat */.e, {
      id: props.chatId,
      theme: "dark",
      className: (chat_panel_module_default()).chat
    })]
  });
};
ChatPanel.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/layout/sidebar/sidebar-panel-empty.module.scss
var sidebar_panel_empty_module = __webpack_require__(85700);
var sidebar_panel_empty_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_panel_empty_module);
;// CONCATENATED MODULE: ./src/shared/ui/layout/sidebar/sidebar-panel-empty.tsx



const SidebarPanelEmpty = props => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (sidebar_panel_empty_module_default()).sidebar_panel_empty,
    children: props.children
  });
};
SidebarPanelEmpty.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/layout/sidebar/sidebar-list-item.module.scss
var sidebar_list_item_module = __webpack_require__(54496);
var sidebar_list_item_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_list_item_module);
;// CONCATENATED MODULE: ./src/shared/ui/layout/sidebar/sidebar-list-item.tsx






const SidebarListItem = props => {
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (sidebar_list_item_module_default()).sidebar_list_item,
    onClick: props.onClick,
    children: [props.avatar, /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (sidebar_list_item_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: (sidebar_list_item_module_default()).title,
        children: props.title
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (sidebar_list_item_module_default()).body,
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: (sidebar_list_item_module_default()).body_text,
          children: props.body
        }), !!props.badge && /*#__PURE__*/jsx_runtime.jsx("span", {
          className: (sidebar_list_item_module_default()).badge,
          children: props.badge
        })]
      })]
    }), props.time && /*#__PURE__*/jsx_runtime.jsx("div", {
      className: classnames_default()((sidebar_list_item_module_default()).time, props.read && (sidebar_list_item_module_default()).sent),
      children: intl.formatTime(props.time)
    }), props.buttons && /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (sidebar_list_item_module_default()).buttons,
      onClick: e => e.stopPropagation(),
      children: props.buttons
    }), props.children]
  });
};
SidebarListItem.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/lib/format/name-and-age.tsx
var name_and_age = __webpack_require__(53795);
// EXTERNAL MODULE: ./src/modules/sidebar/chat-list-panel/chat-list-panel.module.scss
var chat_list_panel_module = __webpack_require__(58731);
var chat_list_panel_module_default = /*#__PURE__*/__webpack_require__.n(chat_list_panel_module);
;// CONCATENATED MODULE: ./src/modules/sidebar/chat-list-panel/chat-list-panel.tsx










const ChatListPanel = props => {
  var _chatList$data, _chatList$data2;

  const chatList = init/* api.chat.useGetChats */.h.chat.useGetChats({
    refreshInterval: 1000
  });
  const intl = (0,react_intl_dist/* useIntl */.YB)();

  if (((_chatList$data = chatList.data) === null || _chatList$data === void 0 ? void 0 : _chatList$data.length) === 0) {
    return /*#__PURE__*/jsx_runtime.jsx(SidebarPanel, {
      onClose: props.onClose,
      children: /*#__PURE__*/jsx_runtime.jsx(SidebarPanelEmpty, {
        children: intl.formatMessage({
          id: "sidebar.chat_list.empty",
          defaultMessage: "No chats"
        })
      })
    });
  }

  return /*#__PURE__*/jsx_runtime.jsx(SidebarPanel, {
    onClose: props.onClose,
    children: (_chatList$data2 = chatList.data) === null || _chatList$data2 === void 0 ? void 0 : _chatList$data2.map(it => {
      var _it$message, _it$message2, _it$message3, _it$message4, _it$message5;

      return /*#__PURE__*/jsx_runtime.jsx(SidebarListItem, {
        avatar: /*#__PURE__*/jsx_runtime.jsx(avatar/* Avatar */.q, {
          src: it.user.image,
          online: it.user.online
        }),
        title: (0,name_and_age/* formatNameAndAge */.V)(it.user),
        body: it.message ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [((_it$message = it.message) === null || _it$message === void 0 ? void 0 : _it$message.mine) && /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: (chat_list_panel_module_default()).message_prefix,
            children: [intl.formatMessage({
              id: "sidebar.chat_list.item.mine",
              defaultMessage: "You"
            }), ": "]
          }), " ", (_it$message2 = it.message) === null || _it$message2 === void 0 ? void 0 : _it$message2.content]
        }) : /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
          children: /*#__PURE__*/jsx_runtime.jsx("span", {
            className: (chat_list_panel_module_default()).message_prefix,
            children: intl.formatMessage({
              id: "sidebar.chat_list.item.empty",
              defaultMessage: "No messages"
            })
          })
        }),
        badge: it.unreadMessages,
        time: (_it$message3 = it.message) === null || _it$message3 === void 0 ? void 0 : _it$message3.time,
        read: ((_it$message4 = it.message) === null || _it$message4 === void 0 ? void 0 : _it$message4.read) && ((_it$message5 = it.message) === null || _it$message5 === void 0 ? void 0 : _it$message5.mine),
        onClick: () => next_router.default.push(next_router.default.asPath.split("?")[0] + "?chat=" + it.chatID)
      });
    })
  });
};
ChatListPanel.defaultProps = {};
// EXTERNAL MODULE: ./src/modules/sidebar/contacts-panel/tab/contacts-tab.module.scss
var contacts_tab_module = __webpack_require__(81664);
var contacts_tab_module_default = /*#__PURE__*/__webpack_require__.n(contacts_tab_module);
;// CONCATENATED MODULE: ./src/modules/sidebar/contacts-panel/tab/contacts-tab.tsx





const ContactsTab = props => /*#__PURE__*/jsx_runtime.jsx("div", {
  className: (contacts_tab_module_default()).contacts_tab,
  children: props.tabs.map(it => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()((contacts_tab_module_default()).item, props.activeKey === it.key && (contacts_tab_module_default()).active),
    onClick: () => props.onChangeActiveKey(it.key),
    children: [it.label, !!it.badge && /*#__PURE__*/jsx_runtime.jsx("span", {
      className: (contacts_tab_module_default()).badge,
      children: it.badge
    })]
  }))
});
ContactsTab.defaultProps = {};
// EXTERNAL MODULE: ./src/modules/sidebar/contacts-panel/friend-list/friend-list.module.scss
var friend_list_module = __webpack_require__(26723);
var friend_list_module_default = /*#__PURE__*/__webpack_require__.n(friend_list_module);
// EXTERNAL MODULE: ./src/shared/lib/format/country-and-city.tsx
var country_and_city = __webpack_require__(65604);
// EXTERNAL MODULE: ./src/modules/user/actions/friend-remove.modal.tsx
var friend_remove_modal = __webpack_require__(58932);
;// CONCATENATED MODULE: ./src/modules/sidebar/contacts-panel/friend-list/friend-list.tsx













const FriendList = props => {
  var _friendList$data, _friendList$data2;

  const friendList = init/* api.user.useFriendList */.h.user.useFriendList();
  const intl = (0,react_intl_dist/* useIntl */.YB)();

  const onVideo = id => {
    src_router/* default.profile.id */.Z.profile.id(id).call.open();
  };

  const onMessage = async id => {
    if (!id) console.error("No chat id");
    await next_router.default.push(next_router.default.asPath.split("?")[0] + "?chat=" + id);
  };

  const onFriendRemove = modals/* Modals.prepare */.n.prepare(friend_remove_modal/* FriendRemoveModal */._, {
    onSuccess: () => friendList.mutate()
  });

  const onUnfollow = async (id, friends) => {
    if (friends) {
      onFriendRemove({
        id
      });
      return;
    }

    await init/* api.user.unfollowUser */.h.user.unfollowUser(id);
    await friendList.mutate();
  };

  if (((_friendList$data = friendList.data) === null || _friendList$data === void 0 ? void 0 : _friendList$data.length) === 0) {
    return /*#__PURE__*/jsx_runtime.jsx(SidebarPanelEmpty, {
      children: intl.formatMessage({
        id: "sidebar.contacts.friends.empty",
        defaultMessage: "No friends"
      })
    });
  }

  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (friend_list_module_default()).friend_list,
    children: (_friendList$data2 = friendList.data) === null || _friendList$data2 === void 0 ? void 0 : _friendList$data2.map(it => /*#__PURE__*/jsx_runtime.jsx(SidebarListItem, {
      avatar: /*#__PURE__*/jsx_runtime.jsx(avatar/* Avatar */.q, {
        src: it.user.image,
        gender: it.user.sex,
        online: it.user.online
      }),
      title: (0,name_and_age/* formatNameAndAge */.V)(it.user),
      body: (0,country_and_city/* formatCountryAndCity */.u)(it.user),
      onClick: src_router/* default.profile.id */.Z.profile.id(it.user.id).open,
      buttons: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/jsx_runtime.jsx("button", {
          onClick: () => onVideo(it.user.id),
          disabled: !it.user.online,
          children: /*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
            name: "video"
          })
        }), /*#__PURE__*/jsx_runtime.jsx("button", {
          onClick: () => onMessage(it.user.chatId),
          children: /*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
            name: "message"
          })
        }), /*#__PURE__*/jsx_runtime.jsx("button", {
          onClick: () => {
            var _it$user$relation;

            return onUnfollow(it.user.id, (_it$user$relation = it.user.relation) === null || _it$user$relation === void 0 ? void 0 : _it$user$relation.friends);
          },
          children: /*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
            name: "unfollow"
          })
        })]
      })
    }))
  });
};
FriendList.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/atoms/follow-button/follow-button.tsx
var follow_button = __webpack_require__(37808);
// EXTERNAL MODULE: ./src/modules/sidebar/contacts-panel/friend-request-list/friend-request-list.module.scss
var friend_request_list_module = __webpack_require__(61271);
var friend_request_list_module_default = /*#__PURE__*/__webpack_require__.n(friend_request_list_module);
;// CONCATENATED MODULE: ./src/modules/sidebar/contacts-panel/friend-request-list/friend-request-list.tsx








const FriendRequestList = props => {
  var _friendRequestList$da, _friendRequestList$da2;

  const friendRequestList = init/* api.user.useIncomingFriendshipRequests */.h.user.useIncomingFriendshipRequests();
  const intl = (0,react_intl_dist/* useIntl */.YB)();

  const onAccept = async id => {
    await init/* api.user.submitIncomingFriendshipRequest */.h.user.submitIncomingFriendshipRequest({
      uid: id,
      accept: true
    });
    await friendRequestList.mutate();
  };

  const onDeny = async id => {
    await init/* api.user.submitIncomingFriendshipRequest */.h.user.submitIncomingFriendshipRequest({
      uid: id,
      accept: false
    });
    await friendRequestList.mutate();
  };

  if (((_friendRequestList$da = friendRequestList.data) === null || _friendRequestList$da === void 0 ? void 0 : _friendRequestList$da.length) === 0) {
    return /*#__PURE__*/jsx_runtime.jsx(SidebarPanelEmpty, {
      children: intl.formatMessage({
        id: "sidebar.contacts.requests.empty",
        defaultMessage: "No friend requests"
      })
    });
  }

  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (friend_request_list_module_default()).friend_request_list,
    children: (_friendRequestList$da2 = friendRequestList.data) === null || _friendRequestList$da2 === void 0 ? void 0 : _friendRequestList$da2.map(it => /*#__PURE__*/jsx_runtime.jsx(SidebarListItem, {
      avatar: /*#__PURE__*/jsx_runtime.jsx(avatar/* Avatar */.q, {
        src: it.from.image,
        gender: it.from.sex,
        online: it.from.online
      }),
      title: (0,name_and_age/* formatNameAndAge */.V)(it.from),
      body: /*#__PURE__*/jsx_runtime.jsx(follow_button/* FollowButton */.e, {
        id: it.from.id,
        relation: it.from.relation,
        onUpdate: friendRequestList.mutate
      }),
      buttons: /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/jsx_runtime.jsx("button", {
          onClick: () => onDeny(it.from.id),
          children: /*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
            name: "trash"
          })
        })
      })
    }))
  });
};
FriendRequestList.defaultProps = {};
;// CONCATENATED MODULE: ./src/modules/sidebar/contacts-panel/contacts-panel.tsx









const ContactsPanel = props => {
  var _friendRequestList$da;

  const friendRequestList = init/* api.user.useIncomingFriendshipRequests */.h.user.useIncomingFriendshipRequests();
  const {
    0: activeKey,
    1: setActiveKey
  } = (0,react.useState)("friends");
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SidebarPanel, {
    onClose: props.onClose,
    children: [/*#__PURE__*/jsx_runtime.jsx(ContactsTab, {
      activeKey: activeKey,
      onChangeActiveKey: setActiveKey,
      tabs: [{
        key: "friends",
        label: intl.formatMessage({
          id: "sidebar.contacts.friends",
          defaultMessage: "Friends"
        })
      }, {
        key: "requests",
        label: intl.formatMessage({
          id: "sidebar.contacts.requests",
          defaultMessage: "Requests"
        }),
        badge: (_friendRequestList$da = friendRequestList.data) === null || _friendRequestList$da === void 0 ? void 0 : _friendRequestList$da.length
      }]
    }), activeKey === "friends" && /*#__PURE__*/jsx_runtime.jsx(FriendList, {}), activeKey === "requests" && /*#__PURE__*/jsx_runtime.jsx(FriendRequestList, {})]
  });
};
ContactsPanel.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/atoms/radio/radio.tsx
var radio_radio = __webpack_require__(64342);
// EXTERNAL MODULE: ./src/shared/ui/atoms/range/range.module.scss
var range_module = __webpack_require__(40880);
var range_module_default = /*#__PURE__*/__webpack_require__.n(range_module);
;// CONCATENATED MODULE: ./src/shared/ui/atoms/range/range.tsx
function range_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function range_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { range_ownKeys(Object(source), true).forEach(function (key) { range_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { range_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function range_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Range = props => {
  var _props$value, _props$value2, _props$value3, _props$value4;

  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()((range_module_default()).range, props.className),
    style: props.style,
    children: [/*#__PURE__*/jsx_runtime.jsx("input", {
      type: "number",
      placeholder: intl.formatMessage({
        id: "input.range.from",
        defaultMessage: "From {value}"
      }, {
        value: 18
      }),
      value: (_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.from,
      onChange: e => {
        var _props$onChange;

        (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, range_objectSpread(range_objectSpread({}, props.value), {}, {
          from: e.target.valueAsNumber || undefined
        }));
      },
      min: 18,
      max: (_props$value2 = props.value) === null || _props$value2 === void 0 ? void 0 : _props$value2.to
    }), /*#__PURE__*/jsx_runtime.jsx("span", {}), /*#__PURE__*/jsx_runtime.jsx("input", {
      type: "number",
      placeholder: intl.formatMessage({
        id: "input.range.to",
        defaultMessage: "To"
      }),
      value: (_props$value3 = props.value) === null || _props$value3 === void 0 ? void 0 : _props$value3.to,
      onChange: e => {
        var _props$onChange2;

        (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 ? void 0 : _props$onChange2.call(props, range_objectSpread(range_objectSpread({}, props.value), {}, {
          to: e.target.valueAsNumber || undefined
        }));
      },
      min: props === null || props === void 0 ? void 0 : (_props$value4 = props.value) === null || _props$value4 === void 0 ? void 0 : _props$value4.from,
      max: 120
    })]
  });
};
Range.defaultProps = {};
;// CONCATENATED MODULE: ./src/modules/sidebar/filters-panel/filters-panel.tsx
function filters_panel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function filters_panel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { filters_panel_ownKeys(Object(source), true).forEach(function (key) { filters_panel_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { filters_panel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function filters_panel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const FiltersPanel = props => {
  const filters = init/* api.user.useQueuePreferences */.h.user.useQueuePreferences();
  const {
    0: _state,
    1: _setState
  } = (0,react.useState)();

  const state = filters_panel_objectSpread(filters_panel_objectSpread({}, filters.data), _state);

  const setState = value => {
    _setState(state => filters_panel_objectSpread(filters_panel_objectSpread({}, state), value));
  };

  (0,react.useEffect)(() => {
    if (filters.data && _state) {
      const data = filters_panel_objectSpread(filters_panel_objectSpread({}, filters.data), _state);

      init/* api.user.updateQueuePreferences */.h.user.updateQueuePreferences(data);
      filters.mutate(data, false);
    }
  }, [filters.data, _state]);
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SidebarPanel, {
    onClose: props.onClose,
    children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
      children: "Search Filter"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("h3", {
      children: [intl.formatMessage({
        id: "dating.filter.gender",
        defaultMessage: "Gender"
      }), ":"]
    }), /*#__PURE__*/jsx_runtime.jsx(radio_radio/* Radio */.Y, {
      value: state.sex,
      onChange: value => setState({
        sex: value
      }),
      options: [{
        value: "MALE",
        label: intl.formatMessage({
          id: "gender.male",
          defaultMessage: "Man"
        })
      }, {
        value: "FEMALE",
        label: intl.formatMessage({
          id: "gender.female",
          defaultMessage: "Woman"
        })
      }, {
        value: "UNDEF",
        label: intl.formatMessage({
          id: "gender.undef",
          defaultMessage: "Any"
        })
      }]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("h3", {
      children: [intl.formatMessage({
        id: "dating.filter.age",
        defaultMessage: "Age"
      }), ":"]
    }), /*#__PURE__*/jsx_runtime.jsx(Range, {
      value: {
        from: state.ageFrom,
        to: state.ageTo
      },
      onChange: value => setState({
        ageFrom: value === null || value === void 0 ? void 0 : value.from,
        ageTo: value === null || value === void 0 ? void 0 : value.to
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("h3", {
      children: [intl.formatMessage({
        id: "dating.filter.location",
        defaultMessage: "Location"
      }), ":"]
    }), /*#__PURE__*/jsx_runtime.jsx(radio_radio/* Radio */.Y, {
      value: state.near,
      onChange: near => setState({
        near
      }),
      options: [{
        value: true,
        label: intl.formatMessage({
          id: "dating.filter.location.near",
          defaultMessage: "The Closest of All"
        })
      }, {
        value: false,
        label: intl.formatMessage({
          id: "dating.filter.location.any",
          defaultMessage: "Any"
        })
      }]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("h3", {
      children: [intl.formatMessage({
        id: "dating.filter.rating",
        defaultMessage: "Rating"
      }), ":"]
    }), /*#__PURE__*/jsx_runtime.jsx(radio_radio/* Radio */.Y, {
      value: state.highRating,
      onChange: highRating => setState({
        highRating
      }),
      options: [{
        value: true,
        label: intl.formatMessage({
          id: "dating.filter.rating.high",
          defaultMessage: "Only with a High Rating"
        })
      }, {
        value: false,
        label: intl.formatMessage({
          id: "dating.filter.rating.any",
          defaultMessage: "Any Rating"
        })
      }]
    })]
  });
};
FiltersPanel.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/atoms/checkbox/checkbox.module.scss
var checkbox_module = __webpack_require__(83571);
var checkbox_module_default = /*#__PURE__*/__webpack_require__.n(checkbox_module);
;// CONCATENATED MODULE: ./src/shared/ui/atoms/checkbox/checkbox.tsx





const Checkbox = /*#__PURE__*/(0,react.forwardRef)((props, ref) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
    className: classnames_default()((checkbox_module_default()).checkbox, props.className),
    style: props.style,
    children: [/*#__PURE__*/jsx_runtime.jsx("input", {
      type: "checkbox",
      ref: ref,
      name: props.name,
      autoFocus: props.autoFocus,
      onChange: props.onChange,
      onBlur: props.onBlur,
      checked: props.checked,
      disabled: props.disabled
    }), /*#__PURE__*/jsx_runtime.jsx("p", {
      children: props.children
    })]
  });
});
Checkbox.defaultProps = {};
;// CONCATENATED MODULE: ./src/modules/user/actions/profile-delete.modal.tsx







const ProfileDeleteModal = props => {
  const profile = init/* api.user.useGetMe */.h.user.useGetMe();
  const form = (0,useModalForm/* useModalForm */.v)(props, {
    onSubmit: () => init/* api.user.deleteProfile */.h.user.deleteProfile(),
    onSuccess: async () => {
      await profile.mutate();
      await src_router/* default.profile.open */.Z.profile.open();
    }
  });
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/jsx_runtime.jsx(modal_form/* ModalForm */.Y, {
    form: form,
    title: intl.formatMessage({
      id: "user.profile_delete_modal.title",
      defaultMessage: "Delete your profile?"
    }),
    okText: intl.formatMessage({
      id: "user.profile_delete_modal.ok",
      defaultMessage: "Yes, delete"
    }),
    cancelText: intl.formatMessage({
      id: "user.profile_delete_modal.cancel",
      defaultMessage: "No"
    })
  });
};
ProfileDeleteModal.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/atoms/text-input/text-input.tsx
var text_input = __webpack_require__(78404);
// EXTERNAL MODULE: ./src/shared/ui/modals/modal/modal.tsx
var modal = __webpack_require__(8638);
;// CONCATENATED MODULE: ./src/modules/user/actions/email-change.modal.tsx
function email_change_modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function email_change_modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { email_change_modal_ownKeys(Object(source), true).forEach(function (key) { email_change_modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { email_change_modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function email_change_modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const EmailChangeModal = props => {
  const onSuccess = modals/* Modals.prepare */.n.prepare(SuccessModal);
  const form = (0,useModalForm/* useModalForm */.v)(props, {
    onSubmit: init/* api.auth.changeEmail */.h.auth.changeEmail,
    onSuccess: () => onSuccess()
  });
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(modal_form/* ModalForm */.Y, {
    form: form,
    title: intl.formatMessage({
      id: "user.email_change_modal.title",
      defaultMessage: "Change email"
    }),
    hideCancel: true,
    children: [/*#__PURE__*/jsx_runtime.jsx("h4", {
      children: intl.formatMessage({
        id: "input.new_email",
        defaultMessage: "New email"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(text_input/* TextInput */.o, email_change_modal_objectSpread({
      autoFocus: true
    }, form.register("newEmail"))), /*#__PURE__*/jsx_runtime.jsx("h4", {
      children: intl.formatMessage({
        id: "input.password",
        defaultMessage: "Password"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(text_input/* TextInput */.o, email_change_modal_objectSpread({
      type: "password"
    }, form.register("password")))]
  });
};

const SuccessModal = props => {
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/jsx_runtime.jsx(modal/* Modal */.u, {
    title: intl.formatMessage({
      id: "user.email_change_modal.success.title",
      defaultMessage: "Confirm new Email"
    }),
    children: /*#__PURE__*/jsx_runtime.jsx("p", {
      children: intl.formatMessage({
        id: "user.email_change_modal.success.description",
        defaultMessage: "We sent an email to your address. Click the link in the letter to confirm your email."
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/modules/user/actions/password-change.modal.tsx
function password_change_modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function password_change_modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { password_change_modal_ownKeys(Object(source), true).forEach(function (key) { password_change_modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { password_change_modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function password_change_modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const PasswordChangeModal = props => {
  const onSuccess = modals/* Modals.prepare */.n.prepare(password_change_modal_SuccessModal);
  const form = (0,useModalForm/* useModalForm */.v)(props, {
    onSubmit: init/* api.auth.changePassword */.h.auth.changePassword,
    onSuccess: () => onSuccess()
  });
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(modal_form/* ModalForm */.Y, {
    form: form,
    title: intl.formatMessage({
      id: "user.password_change_modal.title",
      defaultMessage: "Change password"
    }),
    hideCancel: true,
    children: [/*#__PURE__*/jsx_runtime.jsx("h4", {
      children: intl.formatMessage({
        id: "user.password_change_modal.current_password",
        defaultMessage: "Current password"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(text_input/* TextInput */.o, password_change_modal_objectSpread({
      type: "password",
      autoFocus: true
    }, form.register("oldPassword"))), /*#__PURE__*/jsx_runtime.jsx("h4", {
      children: intl.formatMessage({
        id: "user.password_change_modal.new_password",
        defaultMessage: "New password"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(text_input/* TextInput */.o, password_change_modal_objectSpread({
      type: "password"
    }, form.register("newPassword1"))), /*#__PURE__*/jsx_runtime.jsx("h4", {
      children: intl.formatMessage({
        id: "user.password_change_modal.new_password_repeat",
        defaultMessage: "Repeat new password"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(text_input/* TextInput */.o, password_change_modal_objectSpread({
      type: "password"
    }, form.register("newPassword2")))]
  });
};

const password_change_modal_SuccessModal = props => {
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/jsx_runtime.jsx(modal/* Modal */.u, {
    title: intl.formatMessage({
      id: "user.password_change_modal.success",
      defaultMessage: "Password has been changed"
    })
  });
};
// EXTERNAL MODULE: ./src/modules/sidebar/settings-panel/settings-panel.module.scss
var settings_panel_module = __webpack_require__(15569);
var settings_panel_module_default = /*#__PURE__*/__webpack_require__.n(settings_panel_module);
;// CONCATENATED MODULE: ./src/modules/sidebar/settings-panel/settings-panel.tsx









const SettingsPanel = props => {
  var _myProfile$data, _myProfile$data2;

  const myProfile = init/* api.user.useGetMe */.h.user.useGetMe();
  const privacy = init/* api.user.usePrivacySettings */.h.user.usePrivacySettings();
  const notifications = init/* api.user.useNotificationSettings */.h.user.useNotificationSettings();
  const {
    0: userPic,
    1: setUserPic
  } = (0,react.useState)(true);
  const {
    0: status,
    1: setStatus
  } = (0,react.useState)(true);
  const {
    0: profile,
    1: setProfile
  } = (0,react.useState)(true);
  const {
    0: photos,
    1: setPhotos
  } = (0,react.useState)(true);
  const {
    0: rating,
    1: setRating
  } = (0,react.useState)("EVERYONE");
  (0,react.useEffect)(() => {
    const data = privacy.data;
    if (!data) return;
    setUserPic(data.userPic === "EVERYONE");
    setStatus(data.statusMessage === "EVERYONE");
    setProfile(data.profileInfo === "EVERYONE");
    setPhotos(data.photos === "EVERYONE");
    setRating(data.rating);
  }, [privacy.data]);
  (0,react.useEffect)(() => {
    if (!privacy.data) return;
    init/* api.user.updatePrivacySettings */.h.user.updatePrivacySettings({
      userPic: userPic ? "EVERYONE" : "NOBODY",
      statusMessage: status ? "EVERYONE" : "NOBODY",
      profileInfo: profile ? "EVERYONE" : "NOBODY",
      photos: photos ? "EVERYONE" : "NOBODY",
      rating: rating
    });
  }, [userPic, status, profile, photos, rating]);
  const {
    0: dating,
    1: setDating
  } = (0,react.useState)(true);
  (0,react.useEffect)(() => {
    const data = notifications.data;
    if (!data) return;
    setDating(data.digest);
  }, [notifications.data]);
  (0,react.useEffect)(() => {
    if (!notifications.data) return;
    init/* api.user.updateNotificationSettings */.h.user.updateNotificationSettings({
      digest: dating
    });
  }, [dating]);
  const onProfileDelete = modals/* Modals.prepare */.n.prepare(ProfileDeleteModal);
  const onEmailChange = modals/* Modals.prepare */.n.prepare(EmailChangeModal);
  const onPasswordChange = modals/* Modals.prepare */.n.prepare(PasswordChangeModal);
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  {
    intl.formatMessage({
      id: "sidebar.settings.privacy",
      defaultMessage: "Privacy"
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SidebarPanel, {
    onClose: props.onClose,
    children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
      children: intl.formatMessage({
        id: "sidebar.settings.privacy",
        defaultMessage: "Privacy"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("h3", {
      children: [intl.formatMessage({
        id: "sidebar.settings.everyone",
        defaultMessage: "Everyone can see"
      }), ":"]
    }), /*#__PURE__*/jsx_runtime.jsx(Checkbox, {
      checked: userPic,
      onChange: e => setUserPic(e.target.checked),
      children: intl.formatMessage({
        id: "sidebar.settings.userpic",
        defaultMessage: "Userpic"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(Checkbox, {
      checked: status,
      onChange: e => setStatus(e.target.checked),
      children: intl.formatMessage({
        id: "sidebar.settings.status",
        defaultMessage: "Status Message"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(Checkbox, {
      checked: profile,
      onChange: e => setProfile(e.target.checked),
      children: intl.formatMessage({
        id: "sidebar.settings.profile",
        defaultMessage: "Profile"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(Checkbox, {
      checked: photos,
      onChange: e => setPhotos(e.target.checked),
      children: intl.formatMessage({
        id: "sidebar.settings.photo",
        defaultMessage: "Photos"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("h3", {
      children: [intl.formatMessage({
        id: "sidebar.settings.rating",
        defaultMessage: "My rating can be seen"
      }), ":"]
    }), /*#__PURE__*/jsx_runtime.jsx(radio_radio/* Radio */.Y, {
      value: rating,
      onChange: setRating,
      options: [{
        value: "EVERYONE",
        label: intl.formatMessage({
          id: "sidebar.settings.rating.everyone",
          defaultMessage: "Everyone"
        })
      }, {
        value: "FRIENDS",
        label: intl.formatMessage({
          id: "sidebar.settings.rating.contacts",
          defaultMessage: "Contacts Only"
        })
      }, {
        value: "NOBODY",
        label: intl.formatMessage({
          id: "sidebar.settings.rating.nobody",
          defaultMessage: "Nobody"
        })
      }]
    }), ((_myProfile$data = myProfile.data) === null || _myProfile$data === void 0 ? void 0 : _myProfile$data.email) && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
        children: intl.formatMessage({
          id: "sidebar.settings.email_notifications",
          defaultMessage: "Email notification"
        })
      }), /*#__PURE__*/jsx_runtime.jsx(Checkbox, {
        checked: dating,
        onChange: e => setDating(e.target.checked),
        children: intl.formatMessage({
          id: "sidebar.settings.email_notifications.dating",
          defaultMessage: "Dating Digest"
        })
      }), /*#__PURE__*/jsx_runtime.jsx("h2", {
        children: intl.formatMessage({
          id: "sidebar.settings.security",
          defaultMessage: "Security"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (settings_panel_module_default()).editable,
        onClick: onEmailChange,
        children: [/*#__PURE__*/jsx_runtime.jsx("span", {
          className: (settings_panel_module_default()).label,
          children: intl.formatMessage({
            id: "input.email",
            defaultMessage: "Email"
          })
        }), /*#__PURE__*/jsx_runtime.jsx("span", {
          className: (settings_panel_module_default()).value,
          children: (_myProfile$data2 = myProfile.data) === null || _myProfile$data2 === void 0 ? void 0 : _myProfile$data2.email
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (settings_panel_module_default()).editable,
        onClick: onPasswordChange,
        children: [/*#__PURE__*/jsx_runtime.jsx("span", {
          className: (settings_panel_module_default()).label,
          children: intl.formatMessage({
            id: "input.password",
            defaultMessage: "Password"
          })
        }), /*#__PURE__*/jsx_runtime.jsx("span", {
          className: (settings_panel_module_default()).value,
          children: "********"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("button", {
      onClick: onProfileDelete,
      className: (settings_panel_module_default()).button,
      children: intl.formatMessage({
        id: "sidebar.settings.delete_profile",
        defaultMessage: "Delete Profile"
      })
    })]
  });
};
SettingsPanel.defaultProps = {};
;// CONCATENATED MODULE: ./src/modules/sidebar/sidebar.tsx












const sidebar_Sidebar = props => {
  var _chatList$data, _friendRequests$data;

  const query = props.router.query;
  const isDating = props.router.pathname === "/dating";
  const pathname = props.router.asPath.split("?")[0];
  const keys = ["chat", "contacts", "filters", "settings"];
  let activeKey = keys.find(it => query.hasOwnProperty(it));

  if (isDating && !activeKey) {
    activeKey = "dating";
  }

  const chatId = query.chat && parseInt(query.chat);
  const friendRequests = init/* api.user.useIncomingFriendshipRequests */.h.user.useIncomingFriendshipRequests({
    refreshInterval: 1000
  });
  const chatList = init/* api.chat.useGetChats */.h.chat.useGetChats({
    refreshInterval: 1000
  });
  const unreadChats = (_chatList$data = chatList.data) === null || _chatList$data === void 0 ? void 0 : _chatList$data.map(it => it.unreadMessages ? 1 : 0).reduce((a, b) => a + b, 0);
  const panelOpened = !!activeKey && activeKey !== "dating";

  const onClosePanel = () => {
    if (!panelOpened) return;
    props.router.replace(pathname);
  };

  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Sidebar, {
    menu: [{
      key: "dating",
      icon: "dating",
      label: intl.formatMessage({
        id: "menu.dating",
        defaultMessage: "Dating"
      })
    }, {
      key: "chat",
      icon: "chats",
      label: intl.formatMessage({
        id: "menu.chats",
        defaultMessage: "Chats"
      }),
      badge: unreadChats
    }, {
      key: "contacts",
      icon: "contacts",
      label: intl.formatMessage({
        id: "menu.contacts",
        defaultMessage: "Contacts"
      }),
      badge: (_friendRequests$data = friendRequests.data) === null || _friendRequests$data === void 0 ? void 0 : _friendRequests$data.length
    }, {
      key: "filters",
      icon: "filters",
      label: intl.formatMessage({
        id: "menu.filters",
        defaultMessage: "Filters"
      })
    }, {
      key: "settings",
      icon: "settings",
      label: intl.formatMessage({
        id: "menu.settings",
        defaultMessage: "Settings"
      })
    }],
    activeKey: activeKey,
    onMenuClick: key => {
      if (key === "dating") {
        src_router/* default.dating.open */.Z.dating.open();
        return;
      }

      if (key === activeKey && !chatId) {
        props.router.replace(pathname);
      } else {
        props.router.replace(pathname + "?" + key);
      }
    },
    panelOpened: panelOpened,
    onClosePanel: onClosePanel,
    open: props.open,
    onClose: props.onClose,
    children: [activeKey === "chat" && !chatId && /*#__PURE__*/jsx_runtime.jsx(ChatListPanel, {
      onClose: onClosePanel
    }), activeKey === "chat" && chatId && /*#__PURE__*/jsx_runtime.jsx(ChatPanel, {
      chatId: chatId
    }), activeKey === "contacts" && /*#__PURE__*/jsx_runtime.jsx(ContactsPanel, {
      onClose: onClosePanel
    }), activeKey === "filters" && /*#__PURE__*/jsx_runtime.jsx(FiltersPanel, {
      onClose: onClosePanel
    }), activeKey === "settings" && /*#__PURE__*/jsx_runtime.jsx(SettingsPanel, {
      onClose: onClosePanel
    })]
  });
};
sidebar_Sidebar.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/api/back/lib/logout.tsx
var logout = __webpack_require__(7184);
// EXTERNAL MODULE: ./node_modules/effector-react/effector-react.mjs
var effector_react = __webpack_require__(4190);
// EXTERNAL MODULE: ./node_modules/effector/effector.mjs
var effector = __webpack_require__(98116);
;// CONCATENATED MODULE: ./src/modules/video-chat/model/incoming-call.model.tsx


 // Events

const onCall = (0,effector/* createEvent */.yM)();
const onCallExpired = (0,effector/* createEvent */.yM)();
const onCallAccepted = (0,effector/* createEvent */.yM)();
const declineCall = (0,effector/* createEvent */.yM)(); // Store

const $incomingCall = (0,effector/* createStore */.MT)(null).on(onCall, (_, value) => value).on(onCallExpired, () => null).on(onCallAccepted, () => null); // Subscribe on events

init.ws.call.onCall(data => onCall({
  userId: data.profile.id
}));
init.ws.call.onCallExpired(onCallExpired);
const callDeclined = (0,effector/* sample */.UP)({
  clock: declineCall,
  source: $incomingCall,
  fn: source => source === null || source === void 0 ? void 0 : source.userId
});
$incomingCall.on(callDeclined, () => null);
callDeclined.watch(userId => userId && init.ws.call.endCall(userId));
next_router.default.events.on("routeChangeStart", url => {
  var _$incomingCall$getSta;

  const userId = (_$incomingCall$getSta = $incomingCall.getState()) === null || _$incomingCall$getSta === void 0 ? void 0 : _$incomingCall$getSta.userId;
  if (!userId) return;

  if (url === `/profile/${userId}/call`) {
    onCallAccepted();
  }
});
// EXTERNAL MODULE: ./src/modules/video-chat/ui/incoming-call/incoming-call.module.scss
var incoming_call_module = __webpack_require__(71025);
var incoming_call_module_default = /*#__PURE__*/__webpack_require__.n(incoming_call_module);
;// CONCATENATED MODULE: ./src/modules/video-chat/ui/incoming-call/incoming-call.tsx












const IncomingCall = props => {
  const incomingCall = (0,effector_react/* useStore */.oR)($incomingCall);
  const profile = init/* api.user.useGetUser */.h.user.useGetUser(incomingCall === null || incomingCall === void 0 ? void 0 : incomingCall.userId);
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  const user = profile.data;
  if (!user) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()((incoming_call_module_default()).incoming_call, props.className),
    style: props.style,
    children: [/*#__PURE__*/jsx_runtime.jsx("span", {
      className: (incoming_call_module_default()).close,
      onClick: () => declineCall()
    }), /*#__PURE__*/jsx_runtime.jsx(avatar/* Avatar */.q, {
      size: 64,
      src: user === null || user === void 0 ? void 0 : user.image,
      gender: user === null || user === void 0 ? void 0 : user.sex,
      online: true,
      className: (incoming_call_module_default()).avatar
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (incoming_call_module_default()).info,
      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
        className: (incoming_call_module_default()).name,
        children: (0,name_and_age/* formatNameAndAge */.V)(user)
      }), /*#__PURE__*/jsx_runtime.jsx("p", {
        className: (incoming_call_module_default()).type,
        children: intl.formatMessage({
          id: "video_chat.incoming_call",
          defaultMessage: "Incoming call"
        })
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("audio", {
      src: "/audio/ringer.mp3",
      autoPlay: true,
      loop: true
    }), /*#__PURE__*/jsx_runtime.jsx("button", {
      className: (incoming_call_module_default()).button,
      onClick: src_router/* default.profile.id */.Z.profile.id(user === null || user === void 0 ? void 0 : user.id).call.open,
      children: intl.formatMessage({
        id: "video_chat.incoming_call.answer",
        defaultMessage: "Answer the call"
      })
    })]
  });
};
IncomingCall.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/lib/format/rating.tsx
var rating = __webpack_require__(60887);
// EXTERNAL MODULE: ./src/shared/lib/format/name.tsx
var format_name = __webpack_require__(23293);
// EXTERNAL MODULE: ./src/modules/user/header-user-info/header-user-info.module.scss
var header_user_info_module = __webpack_require__(31169);
var header_user_info_module_default = /*#__PURE__*/__webpack_require__.n(header_user_info_module);
// EXTERNAL MODULE: ./src/modules/user/actions/vip-activate.modal.tsx + 1 modules
var vip_activate_modal = __webpack_require__(23144);
;// CONCATENATED MODULE: ./src/modules/user/header-user-info/header-user-info.tsx
function header_user_info_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function header_user_info_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_user_info_ownKeys(Object(source), true).forEach(function (key) { header_user_info_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_user_info_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_user_info_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const HeaderUserInfo = props => {
  var _profile$data, _profile$data2, _profile$data4, _profile$data5, _profile$data6;

  const {
    0: menuOpen,
    1: setMenuOpen
  } = (0,react.useState)(false);
  const profileRef = (0,react.useRef)(null);
  (0,utils_hooks/* useClickOutside */.O8)(profileRef, () => setMenuOpen(false));
  const profile = init/* api.user.useGetMe */.h.user.useGetMe();
  const deleted = (_profile$data = profile.data) === null || _profile$data === void 0 ? void 0 : _profile$data.deleted;
  const onVipActivate = modals/* Modals.prepare */.n.prepare(vip_activate_modal/* VipActivateModal */.d);
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [!deleted && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/jsx_runtime.jsx(IncomingCall, {}), /*#__PURE__*/jsx_runtime.jsx("span", {
        className: classnames_default()((header_user_info_module_default()).vip, ((_profile$data2 = profile.data) === null || _profile$data2 === void 0 ? void 0 : _profile$data2.vip) && (header_user_info_module_default()).active),
        onClick: () => {
          var _profile$data3;

          if (!((_profile$data3 = profile.data) !== null && _profile$data3 !== void 0 && _profile$data3.vip)) {
            onVipActivate();
          }
        },
        children: "VIP"
      }), /*#__PURE__*/jsx_runtime.jsx("span", {
        className: (header_user_info_module_default()).rate,
        children: (0,rating/* formatRating */.A)((_profile$data4 = profile.data) === null || _profile$data4 === void 0 ? void 0 : _profile$data4.rating)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()((header_user_info_module_default()).profile, menuOpen && (header_user_info_module_default()).active),
      onClick: () => setMenuOpen(!menuOpen),
      ref: profileRef,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (header_user_info_module_default()).top,
        children: [/*#__PURE__*/jsx_runtime.jsx(avatar/* Avatar */.q, {
          src: (_profile$data5 = profile.data) === null || _profile$data5 === void 0 ? void 0 : _profile$data5.image,
          gender: (_profile$data6 = profile.data) === null || _profile$data6 === void 0 ? void 0 : _profile$data6.sex,
          size: 36,
          className: (header_user_info_module_default()).ava
        }), /*#__PURE__*/jsx_runtime.jsx("span", {
          className: (header_user_info_module_default()).arrow
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (header_user_info_module_default()).menu,
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: (header_user_info_module_default()).name,
          children: (0,format_name/* formatName */.K)(profile.data)
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: (header_user_info_module_default()).list,
          children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, header_user_info_objectSpread(header_user_info_objectSpread({}, src_router/* default.profile.link */.Z.profile.link), {}, {
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              className: (header_user_info_module_default()).link,
              children: intl.formatMessage({
                id: "menu.my_profile",
                defaultMessage: "My Profile"
              })
            })
          })), /*#__PURE__*/jsx_runtime.jsx(next_link.default, header_user_info_objectSpread(header_user_info_objectSpread({}, src_router/* default.faq.link */.Z.faq.link), {}, {
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              className: (header_user_info_module_default()).link,
              children: intl.formatMessage({
                id: "menu.help",
                defaultMessage: "Help"
              })
            })
          })), /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
            className: classnames_default()((header_user_info_module_default()).link, (header_user_info_module_default()).log_out),
            onClick: logout/* logout */.k,
            children: [/*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
              name: "logout",
              className: (header_user_info_module_default()).icon
            }), /*#__PURE__*/jsx_runtime.jsx("span", {
              className: (header_user_info_module_default()).label,
              children: intl.formatMessage({
                id: "menu.logout",
                defaultMessage: "Log out"
              })
            })]
          })]
        })]
      })]
    })]
  });
};
HeaderUserInfo.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/layout/header/header-mobile-menu.module.scss
var header_mobile_menu_module = __webpack_require__(4934);
var header_mobile_menu_module_default = /*#__PURE__*/__webpack_require__.n(header_mobile_menu_module);
;// CONCATENATED MODULE: ./src/shared/ui/layout/header/header-mobile-menu.tsx




const HeaderMobileMenu = props => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
    className: (header_mobile_menu_module_default()).header_mobile_menu,
    onClick: props.onClick,
    children: [/*#__PURE__*/jsx_runtime.jsx("span", {}), /*#__PURE__*/jsx_runtime.jsx("span", {}), /*#__PURE__*/jsx_runtime.jsx("span", {})]
  });
};
HeaderMobileMenu.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/layout/header/header-online.module.scss
var header_online_module = __webpack_require__(28494);
var header_online_module_default = /*#__PURE__*/__webpack_require__.n(header_online_module);
;// CONCATENATED MODULE: ./src/shared/ui/layout/header/header-online.tsx



const HeaderOnline = props => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (header_online_module_default()).header_online,
    children: props.children
  });
};
HeaderOnline.defaultProps = {};
// EXTERNAL MODULE: ./src/shared/ui/layout/header/header-language.module.scss
var header_language_module = __webpack_require__(45049);
var header_language_module_default = /*#__PURE__*/__webpack_require__.n(header_language_module);
;// CONCATENATED MODULE: ./src/shared/ui/layout/header/header-language.tsx



const HeaderLanguage = props => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (header_language_module_default()).header_language,
    children: props.children
  });
};
HeaderLanguage.defaultProps = {};
// EXTERNAL MODULE: ./src/modules/user/header/header.module.scss
var header_module = __webpack_require__(87347);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./src/modules/online/model/online.model.tsx


const updateOnline = (0,effector/* createEvent */.yM)();
const onlineStore = (0,effector/* createStore */.MT)(0) //
.on(updateOnline, (state, value) => value);
init.ws.online.onUpdate(({
  count
}) => updateOnline(count));
// EXTERNAL MODULE: ./src/@yoldi/utils/format/number.ts
var number = __webpack_require__(24965);
;// CONCATENATED MODULE: ./src/modules/online/lib/format-online.tsx

const formatOnline = value => {
  if (!value) return "";
  return (0,number/* default */.ZP)(value, 0, true);
};
;// CONCATENATED MODULE: ./src/modules/online/ui/online.tsx






const Online = props => {
  const online = (0,effector_react/* useStore */.oR)(onlineStore);
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/jsx_runtime.jsx("span", {
    className: props.className,
    style: props.style,
    children: intl.formatMessage({
      id: "shared.online",
      defaultMessage: "{value} online"
    }, {
      value: formatOnline(online)
    })
  });
};
Online.defaultProps = {};
;// CONCATENATED MODULE: ./src/modules/user/header/header.tsx
function header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_ownKeys(Object(source), true).forEach(function (key) { header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Header = props => {
  var _profile$data;

  const profile = init/* api.user.useGetMe */.h.user.useGetMe();
  const deleted = (_profile$data = profile.data) === null || _profile$data === void 0 ? void 0 : _profile$data.deleted;
  const isClassic = props.router.pathname === "/";
  const isRating = props.router.pathname === "/rating";
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (header_module_default()).header,
    children: [!deleted && /*#__PURE__*/jsx_runtime.jsx(HeaderMobileMenu, {
      onClick: props.onToggleSidebar
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (header_module_default()).menu,
      children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, header_objectSpread(header_objectSpread({}, src_router/* default.index.link */.Z.index.link), {}, {
        children: /*#__PURE__*/jsx_runtime.jsx("a", {
          className: classnames_default()((header_module_default()).link, isClassic && (header_module_default()).active),
          children: intl.formatMessage({
            id: "menu.classic",
            defaultMessage: "Classic"
          })
        })
      })), !deleted && /*#__PURE__*/jsx_runtime.jsx(next_link.default, header_objectSpread(header_objectSpread({}, src_router/* default.rating.link */.Z.rating.link), {}, {
        children: /*#__PURE__*/jsx_runtime.jsx("a", {
          className: classnames_default()((header_module_default()).link, isRating && (header_module_default()).active),
          children: intl.formatMessage({
            id: "menu.rate",
            defaultMessage: "Rate chat"
          })
        })
      }))]
    }), /*#__PURE__*/jsx_runtime.jsx(HeaderOnline, {
      children: /*#__PURE__*/jsx_runtime.jsx(Online, {})
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (header_module_default()).right,
      children: [/*#__PURE__*/jsx_runtime.jsx(HeaderUserInfo, {}), /*#__PURE__*/jsx_runtime.jsx(HeaderLanguage, {
        children: "EN"
      })]
    })]
  });
};
Header.defaultProps = {};
// EXTERNAL MODULE: ./src/modules/layout/main/main-layout.module.scss
var main_layout_module = __webpack_require__(27957);
var main_layout_module_default = /*#__PURE__*/__webpack_require__.n(main_layout_module);
;// CONCATENATED MODULE: ./src/modules/layout/main/authed-layout.tsx







const AuthedLayout = props => {
  var _profile$data;

  const profile = init/* api.user.useGetMe */.h.user.useGetMe({
    refreshInterval: 3000
  });
  const deleted = (_profile$data = profile.data) === null || _profile$data === void 0 ? void 0 : _profile$data.deleted;
  const {
    0: sidebarOpen,
    1: setSidebarOpen
  } = (0,react.useState)(false);

  const sidebarToggle = () => setSidebarOpen(value => !value);

  const sidebarClose = () => setSidebarOpen(false);

  (0,react.useEffect)(() => {
    props.router.events.on("routeChangeStart", sidebarClose);
    return () => {
      props.router.events.off("routeChangeStart", sidebarClose);
    };
  }, []);
  (0,react.useEffect)(() => {
    if (deleted && ["/rating", "/profile/", "/dating"].find(it => props.router.pathname.startsWith(it))) {
      props.router.replace("/profile");
    }
  }, [deleted, props.router.pathname]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (main_layout_module_default()).main_layout,
    children: [!deleted && /*#__PURE__*/jsx_runtime.jsx(sidebar_Sidebar, {
      router: props.router,
      open: sidebarOpen,
      onClose: sidebarClose
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: (main_layout_module_default()).main,
      children: [/*#__PURE__*/jsx_runtime.jsx(Header, {
        router: props.router,
        onToggleSidebar: sidebarToggle
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: (main_layout_module_default()).main__content,
        children: props.children
      })]
    })]
  });
};
AuthedLayout.defaultProps = {};
// EXTERNAL MODULE: ./src/modules/layout/guest-header/guest-header.module.scss
var guest_header_module = __webpack_require__(36309);
var guest_header_module_default = /*#__PURE__*/__webpack_require__.n(guest_header_module);
// EXTERNAL MODULE: ./src/contexts/LocaleContext.ts
var LocaleContext = __webpack_require__(15265);
;// CONCATENATED MODULE: ./src/modules/layout/guest-header/guest-header.tsx
function guest_header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function guest_header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { guest_header_ownKeys(Object(source), true).forEach(function (key) { guest_header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { guest_header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function guest_header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const GuestHeader = props => {
  const {
    0: menuOpen,
    1: setMenuOpen
  } = (0,react.useState)(false);
  const router = (0,next_router.useRouter)();
  const profileRef = (0,react.useRef)(null);
  (0,utils_hooks/* useClickOutside */.O8)(profileRef, () => setMenuOpen(false));
  const intl = (0,react_intl_dist/* useIntl */.YB)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (guest_header_module_default()).guest_header,
    children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, guest_header_objectSpread(guest_header_objectSpread({}, src_router/* default.index.link */.Z.index.link), {}, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (guest_header_module_default()).logo,
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: (guest_header_module_default()).img
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: (guest_header_module_default()).text
        })]
      })
    })), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (guest_header_module_default()).logo_mobile,
      children: /*#__PURE__*/jsx_runtime.jsx("img", {
        src: "/img/logo-white.svg"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()((guest_header_module_default()).mobile_menu, menuOpen && (guest_header_module_default()).active),
      onClick: () => setMenuOpen(!menuOpen),
      ref: profileRef,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (guest_header_module_default()).top,
        children: [/*#__PURE__*/jsx_runtime.jsx("span", {}), /*#__PURE__*/jsx_runtime.jsx("span", {}), /*#__PURE__*/jsx_runtime.jsx("span", {})]
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: (guest_header_module_default()).menu_list,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: (guest_header_module_default()).list,
          children: [/*#__PURE__*/jsx_runtime.jsx("a", {
            href: "https://about.chatrevolver.com",
            target: "_blank",
            className: classnames_default()((guest_header_module_default()).link, (guest_header_module_default()).textNoWrap),
            children: intl.formatMessage({
              id: "menu.about",
              defaultMessage: "About"
            })
          }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, guest_header_objectSpread(guest_header_objectSpread({}, src_router/* default.faq.link */.Z.faq.link), {}, {
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              className: (guest_header_module_default()).link,
              children: intl.formatMessage({
                id: "menu.faq",
                defaultMessage: "FAQ"
              })
            })
          })), /*#__PURE__*/jsx_runtime.jsx("a", {
            className: classnames_default()((guest_header_module_default()).link),
            children: "EN"
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("button", {
      className: (guest_header_module_default()).mobile_menu
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (guest_header_module_default()).menu,
      children: [/*#__PURE__*/jsx_runtime.jsx("a", {
        className: (guest_header_module_default()).link,
        children: intl.formatMessage({
          id: "menu.classic",
          defaultMessage: "Classic"
        })
      }), /*#__PURE__*/jsx_runtime.jsx("a", {
        className: (guest_header_module_default()).link,
        children: intl.formatMessage({
          id: "menu.rate",
          defaultMessage: "Rate chat"
        })
      }), /*#__PURE__*/jsx_runtime.jsx("a", {
        className: classnames_default()((guest_header_module_default()).link, (guest_header_module_default()).textNoWrap),
        href: "https://about.chatrevolver.com",
        target: "_blank",
        children: intl.formatMessage({
          id: "menu.about" // defaultMessage: "About",

        })
      }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
        href: "/faq/what-is",
        children: /*#__PURE__*/jsx_runtime.jsx("a", {
          className: (guest_header_module_default()).link,
          children: intl.formatMessage({
            id: "menu.faq",
            defaultMessage: "FAQ"
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (guest_header_module_default()).loginBlock,
      children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, guest_header_objectSpread(guest_header_objectSpread({}, src_router/* default.auth.signup.link */.Z.auth.signup.link), {}, {
        children: /*#__PURE__*/jsx_runtime.jsx("a", {
          className: (guest_header_module_default()).sign_up,
          children: intl.formatMessage({
            id: "menu.sign_up_with_email",
            defaultMessage: "Sign up with email"
          })
        })
      })), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (guest_header_module_default()).socials,
        children: [/*#__PURE__*/jsx_runtime.jsx("a", {
          className: (guest_header_module_default()).link,
          href: `${"https://api.chatrevolver.com"}/api/google`,
          children: /*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
            name: "google"
          })
        }), /*#__PURE__*/jsx_runtime.jsx("a", {
          className: (guest_header_module_default()).link,
          href: `${"https://api.chatrevolver.com"}/api/vk`,
          children: /*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
            name: "vk"
          })
        }), /*#__PURE__*/jsx_runtime.jsx("a", {
          className: (guest_header_module_default()).link,
          href: `${"https://api.chatrevolver.com"}/api/apple`,
          children: /*#__PURE__*/jsx_runtime.jsx(Icon/* Icon */.J, {
            name: "apple"
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("span", {
      className: (guest_header_module_default()).online,
      children: /*#__PURE__*/jsx_runtime.jsx(Online, {})
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (guest_header_module_default()).right,
      children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, guest_header_objectSpread(guest_header_objectSpread({}, src_router/* default.auth.signup.link */.Z.auth.signup.link), {}, {
        children: /*#__PURE__*/jsx_runtime.jsx("a", {
          className: classnames_default()((guest_header_module_default()).sign_up, (guest_header_module_default()).combined),
          children: intl.formatMessage({
            id: "menu.sign_up_sign_in",
            defaultMessage: "Sign up / Sign in"
          })
        })
      })), /*#__PURE__*/jsx_runtime.jsx(next_link.default, guest_header_objectSpread(guest_header_objectSpread({}, src_router/* default.auth.login.link */.Z.auth.login.link), {}, {
        children: /*#__PURE__*/jsx_runtime.jsx("a", {
          className: (guest_header_module_default()).sign_in,
          children: intl.formatMessage({
            id: "menu.sign_in",
            defaultMessage: "Sign in"
          })
        })
      })), /*#__PURE__*/jsx_runtime.jsx(LocaleContext/* LocaleContext.Consumer */.R.Consumer, {
        children: ({
          currentLocale,
          toggleLocale
        }) => /*#__PURE__*/jsx_runtime.jsx("button", {
          className: (guest_header_module_default()).language,
          onClick: () => {
            toggleLocale(currentLocale === "ru" ? "en" : "ru");
            router.push({
              pathname: router.pathname,
              query: guest_header_objectSpread(guest_header_objectSpread({}, router.query), {}, {
                lang: currentLocale === "ru" ? "en" : "ru"
              })
            });
          },
          children: currentLocale === "ru" ? "en" : "ru"
        })
      })]
    })]
  });
};
GuestHeader.defaultProps = {};
;// CONCATENATED MODULE: ./src/modules/layout/main/guest-layout.tsx





const GuestLayout = props => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (main_layout_module_default()).main_layout,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: (main_layout_module_default()).main,
      children: [/*#__PURE__*/jsx_runtime.jsx(GuestHeader, {
        router: props.router
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: (main_layout_module_default()).main__content,
        children: props.children
      })]
    })
  });
};
GuestLayout.defaultProps = {};
;// CONCATENATED MODULE: ./src/modules/layout/main/main-layout.tsx
function main_layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function main_layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { main_layout_ownKeys(Object(source), true).forEach(function (key) { main_layout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { main_layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function main_layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MainLayout = props => {
  const authed = (0,hooks/* useAuthed */.p)();
  if ((0,helpers/* isServer */.sk)()) return null;
  if (authed) return /*#__PURE__*/jsx_runtime.jsx(AuthedLayout, main_layout_objectSpread({}, props));
  return /*#__PURE__*/jsx_runtime.jsx(GuestLayout, main_layout_objectSpread({}, props));
};
MainLayout.defaultProps = {};
;// CONCATENATED MODULE: ./src/app/app-layout.tsx





const defaultRedirectTo = "/profile";
let redirectTo;

const authGuard = (router, accessToken) => {
  // auth pages
  if (router.pathname.startsWith("/auth/")) {
    if (accessToken) {
      router.push(redirectTo || defaultRedirectTo);
      redirectTo = undefined;
    }

    return;
  }

  if (router.pathname.startsWith("/profile") || //
  router.pathname === "/rating" || router.pathname == "/dating") {
    if (!accessToken) {
      router.push("/");
    }
  }
};

const AppLayout = ({
  router,
  children
}) => {
  (0,react.useEffect)(() => {
    const accessToken = (0,access_token/* getAccessToken */.hP)();
    const unsubscribe = (0,access_token/* onAccessTokenChange */.Kj)(accessToken => authGuard(router, accessToken));
    authGuard(router, accessToken);
    return unsubscribe;
  }, []);

  if (router.pathname.startsWith("/auth")) {
    return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
      children: children
    });
  }

  return /*#__PURE__*/jsx_runtime.jsx(MainLayout, {
    router: router,
    children: children
  });
};
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const cache = (0,react_intl_dist/* createIntlCache */.Sn)();

const getMessages = locale => {
  return __webpack_require__(9399)(`./${locale.split("-")[0]}.json`);
};

class MyApp extends app.default {
  constructor(props) {
    super(props);

    _app_defineProperty(this, "toggleLocale", lang => {
      this.setState(state => ({
        currentLocale: lang
      }));
    });

    this.state = {
      currentLocale: "ru",
      toggleLocale: this.toggleLocale
    };
  }

  componentDidCatch(error, errorInfo) {
    captureComponentException(error, errorInfo);
  }

  static getIntl(locale) {
    const messages = getMessages(locale);
    return (0,react_intl_dist/* createIntl */.dp)({
      locale: locale,
      messages,
      defaultLocale: "ru"
    }, cache);
  }

  render() {
    let {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
        children: [/*#__PURE__*/jsx_runtime.jsx("title", {
          children: "Revolver Video Chat"
        }), /*#__PURE__*/jsx_runtime.jsx("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1"
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(LocaleContext/* LocaleContext.Provider */.R.Provider, {
        value: this.state,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react_intl_dist/* RawIntlProvider */.eU, {
          value: MyApp.getIntl(this.state.currentLocale),
          children: [/*#__PURE__*/jsx_runtime.jsx(AppLayout, {
            router: this.props.router,
            children: /*#__PURE__*/jsx_runtime.jsx(Component, _app_objectSpread({}, pageProps))
          }), /*#__PURE__*/jsx_runtime.jsx(modals/* ModalsRoot */.i, {})]
        })
      })]
    });
  }

}

/***/ }),

/***/ 37203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyDocument)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(56859);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/@yoldi/integrations/yandex-metrika/html.tsx



const __html = `
 (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
 m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
 (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

 ym("${"1234567"}", "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
 });
`;

const YandexMetrika = () => /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
  children: [/*#__PURE__*/jsx_runtime.jsx("script", {
    type: "text/javascript",
    dangerouslySetInnerHTML: {
      __html
    }
  }), /*#__PURE__*/jsx_runtime.jsx("noscript", {
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      children: /*#__PURE__*/jsx_runtime.jsx("img", {
        src: `https://mc.yandex.ru/watch/${"1234567"}`,
        style: {
          position: "absolute",
          left: -9999
        },
        alt: ""
      })
    })
  })]
});

/* harmony default export */ const html = (YandexMetrika);
;// CONCATENATED MODULE: ./src/@yoldi/integrations/yandex-metrika/index.tsx


const ym = (...args) => {
  if (true) return;
  window.ym("1234567", ...args);
};
router.default.events.on("routeChangeStart", ({
  url,
  as,
  options
}) => {
  ym("hit", as);
  return true;
});
const ymReachGoal = target => {
  ym("reachGoal", target);
};
/* harmony default export */ const yandex_metrika = (html);
;// CONCATENATED MODULE: ./src/pages/_document.tsx






class MyDocument extends next_document.default {
  render() {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(next_document.Html, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(next_document.Head, {
        children: [/*#__PURE__*/jsx_runtime.jsx("meta", {
          charSet: "utf-8"
        }), /*#__PURE__*/jsx_runtime.jsx("link", {
          rel: "icon",
          type: "image/png",
          href: "/img/fav.png"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("body", {
        children: [/*#__PURE__*/jsx_runtime.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime.jsx(next_document.NextScript, {}), /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
          children: /*#__PURE__*/jsx_runtime.jsx(yandex_metrika, {})
        })]
      })]
    });
  }

}

/***/ }),

/***/ 3325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_router)
});

// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
;// CONCATENATED MODULE: ./src/@yoldi/utils/router.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const page = (href, as) => ({
  link: {
    href,
    as
  },
  open: () => router.default.push(href, as)
});
const pageablePage = (href, as) => {
  const createPage = page;
  return _objectSpread(_objectSpread({}, createPage(href, as)), {}, {
    page: (page = 1) => {
      if (page === 1) return createPage(href, as);
      return createPage(`${href}?page=${page}`, as === null || as === void 0 ? void 0 : as.concat(`?page=${page}`));
    }
  });
};
;// CONCATENATED MODULE: ./src/router.ts
function router_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function router_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { router_ownKeys(Object(source), true).forEach(function (key) { router_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { router_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function router_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const AppRouter = {
  index: page("/"),
  dating: page("/dating"),
  rating: page("/rating"),
  vip: page("/vip"),
  faq: page("/faq"),
  auth: {
    login: page("/auth/login"),
    signup: page("/auth/sign-up"),
    recovery: page("/auth/recovery")
  },
  profile: router_objectSpread(router_objectSpread({}, page("/profile")), {}, {
    edit: page("/profile/edit"),
    id: id => router_objectSpread(router_objectSpread({}, page(`/profile/${id}`)), {}, {
      call: page(`/profile/${id}/call`)
    })
  }) // to delete
  // modal: {
  //   support: modal("support", []),
  //   report: modal<{ uid: number }>("report", ["uid"]),
  //   changeEmail: modal("change-email"),
  //   confirmEmailSent: modal("confirmation-sent"),
  //   changePassword: modal("change-password"),
  //   passwordChanged: modal("password-changed"),
  //   deleteProfile: modal("delete-profile"),
  //   deleteChat: modal<{ cid: number }>("delete-chat", ["cid"]),
  //   chatWith: modal<{ id: number }>("chat", ["id"]),
  //
  //   vipInfo: modal("vip-info"),
  //   vipStatus: modal("vip-status"),
  //   buyVip: modal<{ pid?: number }>("buy-vip", ["pid"]),
  // },

};
/* harmony default export */ const src_router = (AppRouter);

/***/ }),

/***/ 11154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T2": () => (/* binding */ BaseAPI),
/* harmony export */   "IC": () => (/* binding */ RequiredError),
/* harmony export */   "VK": () => (/* binding */ Configuration),
/* harmony export */   "Gg": () => (/* binding */ exists),
/* harmony export */   "QG": () => (/* binding */ JSONApiResponse),
/* harmony export */   "dl": () => (/* binding */ VoidApiResponse),
/* harmony export */   "le": () => (/* binding */ TextApiResponse)
/* harmony export */ });
/* unused harmony exports BASE_PATH, COLLECTION_FORMATS, querystring, mapValues, canConsumeForm, BlobApiResponse */
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
const BASE_PATH = "http://localhost".replace(/\/+$/, "");

const isBlob = value => typeof Blob !== "undefined" && value instanceof Blob;
/**
 * This is the base class for all generated API classes.
 */


class BaseAPI {
  constructor(configuration = new Configuration()) {
    this.configuration = configuration;

    _defineProperty(this, "middleware", void 0);

    _defineProperty(this, "fetchApi", async (url, init) => {
      let fetchParams = {
        url,
        init
      };

      for (const middleware of this.middleware) {
        if (middleware.pre) {
          fetchParams = (await middleware.pre(_objectSpread({
            fetch: this.fetchApi
          }, fetchParams))) || fetchParams;
        }
      }

      let response = await this.configuration.fetchApi(fetchParams.url, fetchParams.init);

      for (const middleware of this.middleware) {
        if (middleware.post) {
          response = (await middleware.post({
            fetch: this.fetchApi,
            url,
            init,
            response: response.clone()
          })) || response;
        }
      }

      return response;
    });

    this.middleware = configuration.middleware;
  }

  withMiddleware(...middlewares) {
    const next = this.clone();
    next.middleware = next.middleware.concat(...middlewares);
    return next;
  }

  withPreMiddleware(...preMiddlewares) {
    const middlewares = preMiddlewares.map(pre => ({
      pre
    }));
    return this.withMiddleware(...middlewares);
  }

  withPostMiddleware(...postMiddlewares) {
    const middlewares = postMiddlewares.map(post => ({
      post
    }));
    return this.withMiddleware(...middlewares);
  }

  async request(context) {
    const {
      url,
      init
    } = this.createFetchParams(context);
    const response = await this.fetchApi(url, init);

    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    throw response;
  }

  createFetchParams(context) {
    let url = this.configuration.basePath + context.path;

    if (context.query !== undefined && Object.keys(context.query).length !== 0) {
      // only add the querystring to the URL if there are query parameters.
      // this is done to avoid urls ending with a "?" character which buggy webservers
      // do not handle correctly sometimes.
      url += "?" + this.configuration.queryParamsStringify(context.query);
    }

    const body = typeof FormData !== "undefined" && context.body instanceof FormData || context.body instanceof URLSearchParams || isBlob(context.body) ? context.body : JSON.stringify(context.body);
    const headers = Object.assign({}, this.configuration.headers, context.headers);
    const init = {
      method: context.method,
      headers: headers,
      body,
      credentials: this.configuration.credentials
    };
    return {
      url,
      init
    };
  }

  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  clone() {
    const constructor = this.constructor;
    const next = new constructor(this.configuration);
    next.middleware = this.middleware.slice();
    return next;
  }

}
class RequiredError extends Error {
  constructor(field, msg) {
    super(msg);
    this.field = field;

    _defineProperty(this, "name", "RequiredError");
  }

}
const COLLECTION_FORMATS = {
  csv: ",",
  ssv: " ",
  tsv: "\t",
  pipes: "|"
};
class Configuration {
  constructor(configuration = {}) {
    this.configuration = configuration;
  }

  get basePath() {
    return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
  }

  get fetchApi() {
    return this.configuration.fetchApi || window.fetch.bind(window);
  }

  get middleware() {
    return this.configuration.middleware || [];
  }

  get queryParamsStringify() {
    return this.configuration.queryParamsStringify || querystring;
  }

  get username() {
    return this.configuration.username;
  }

  get password() {
    return this.configuration.password;
  }

  get apiKey() {
    const apiKey = this.configuration.apiKey;

    if (apiKey) {
      return typeof apiKey === "function" ? apiKey : () => apiKey;
    }

    return undefined;
  }

  get accessToken() {
    const accessToken = this.configuration.accessToken;

    if (accessToken) {
      return typeof accessToken === "function" ? accessToken : () => accessToken;
    }

    return undefined;
  }

  get headers() {
    return this.configuration.headers;
  }

  get credentials() {
    return this.configuration.credentials;
  }

}
function exists(json, key) {
  const value = json[key];
  return value !== null && value !== undefined;
}
function querystring(params, prefix = "") {
  return Object.keys(params).map(key => {
    const fullKey = prefix + (prefix.length ? `[${key}]` : key);
    const value = params[key];

    if (value instanceof Array) {
      const multiValue = value.map(singleValue => encodeURIComponent(String(singleValue))).join(`&${encodeURIComponent(fullKey)}=`);
      return `${encodeURIComponent(fullKey)}=${multiValue}`;
    }

    if (value instanceof Object) {
      return querystring(value, fullKey);
    }

    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
  }).filter(part => part.length > 0).join("&");
}
function mapValues(data, fn) {
  return Object.keys(data).reduce((acc, key) => _objectSpread(_objectSpread({}, acc), {}, {
    [key]: fn(data[key])
  }), {});
}
function canConsumeForm(consumes) {
  for (const consume of consumes) {
    if ("multipart/form-data" === consume.contentType) {
      return true;
    }
  }

  return false;
}
class JSONApiResponse {
  constructor(raw, transformer = jsonValue => jsonValue) {
    this.raw = raw;
    this.transformer = transformer;
  }

  async value() {
    return this.transformer(await this.raw.json());
  }

}
class VoidApiResponse {
  constructor(raw) {
    this.raw = raw;
  }

  async value() {
    return undefined;
  }

}
class BlobApiResponse {
  constructor(raw) {
    this.raw = raw;
  }

  async value() {
    return await this.raw.blob();
  }

}
class TextApiResponse {
  constructor(raw) {
    this.raw = raw;
  }

  async value() {
    return await this.raw.text();
  }

}

/***/ }),

/***/ 74801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ ACCESS_TOKEN_KEY),
  "G": () => (/* binding */ BackApiConfig)
});

// EXTERNAL MODULE: ./src/shared/api/back/_generated/runtime.ts
var runtime = __webpack_require__(11154);
// EXTERNAL MODULE: ./src/@yoldi/utils/LocalStorage.ts
var LocalStorage = __webpack_require__(25841);
;// CONCATENATED MODULE: ./src/shared/api/back/middleware/success-auth-middleware.tsx

const baseUrl = "https://api.chatrevolver.com";
const successAuthMiddleware = (accessTokenKey, paths) => {
  return async context => {
    const url = context.url.substring(baseUrl.length);

    if (context.response.ok && paths.find(it => url.startsWith(it))) {
      const response = await context.response.json();
      LocalStorage/* default.setItem */.Z.setItem(accessTokenKey, response.token);
    }
  };
};
// EXTERNAL MODULE: ./src/shared/api/back/lib/logout.tsx
var logout = __webpack_require__(7184);
;// CONCATENATED MODULE: ./src/shared/api/back/middleware/logout-middleware.tsx

const logoutMiddleware = () => {
  return async context => {
    if (context.response.status === 401) {
      (0,logout/* logout */.k)();
    }
  };
};
;// CONCATENATED MODULE: ./src/shared/api/back/config.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ACCESS_TOKEN_KEY = "revolver" + ":access-token";
class BackApiConfig extends runtime/* Configuration */.VK {
  constructor(params) {
    super(_objectSpread(_objectSpread({
      fetchApi: fetch,
      basePath: "https://api.chatrevolver.com"
    }, params), {}, {
      get accessToken() {
        return LocalStorage/* default.getItem */.Z.getItem(ACCESS_TOKEN_KEY);
      },

      middleware: [{
        post: successAuthMiddleware(ACCESS_TOKEN_KEY, ["/api/auth/login", "/api/auth/setNewPassword", "/api/auth/activateEmail"])
      }, {
        post: logoutMiddleware()
      }]
    }));
  }

}

/***/ }),

/***/ 7184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var _yoldi_utils_LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25841);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74801);


const logout = () => {
  _yoldi_utils_LocalStorage__WEBPACK_IMPORTED_MODULE_0__/* .default.removeItem */ .Z.removeItem(_config__WEBPACK_IMPORTED_MODULE_1__/* .ACCESS_TOKEN_KEY */ .W);
};

/***/ }),

/***/ 75564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useAuthed)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35713);


const useAuthed = () => {
  const {
    0: accessToken,
    1: setAccessToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_back__WEBPACK_IMPORTED_MODULE_1__/* .getAccessToken */ .hP)());
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => (0,_back__WEBPACK_IMPORTED_MODULE_1__/* .onAccessTokenChange */ .Kj)(setAccessToken), []);
  return !!accessToken;
};

/***/ }),

/***/ 21495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ api),
  "ws": () => (/* binding */ ws)
});

// EXTERNAL MODULE: ./src/shared/api/back/_generated/runtime.ts
var runtime = __webpack_require__(11154);
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/TokenHold.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface TokenHold
 */
function TokenHoldFromJSON(json) {
  return TokenHoldFromJSONTyped(json, false);
}
function TokenHoldFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    token: json["token"]
  };
}
function TokenHoldToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    token: value.token === undefined ? undefined : value.token
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/ChangeEmailDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface ChangeEmailDTO
 */
function ChangeEmailDTOFromJSON(json) {
  return ChangeEmailDTOFromJSONTyped(json, false);
}
function ChangeEmailDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    newEmail: json["newEmail"],
    password: json["password"]
  };
}
function ChangeEmailDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    newEmail: value.newEmail === undefined ? undefined : value.newEmail,
    password: value.password === undefined ? undefined : value.password
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/ChangePasswordDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface ChangePasswordDTO
 */
function ChangePasswordDTOFromJSON(json) {
  return ChangePasswordDTOFromJSONTyped(json, false);
}
function ChangePasswordDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    oldPassword: json["oldPassword"],
    newPassword1: json["newPassword1"],
    newPassword2: json["newPassword2"]
  };
}
function ChangePasswordDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    oldPassword: value.oldPassword === undefined ? undefined : value.oldPassword,
    newPassword1: value.newPassword1 === undefined ? undefined : value.newPassword1,
    newPassword2: value.newPassword2 === undefined ? undefined : value.newPassword2
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/PasswordRecoveryDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface PasswordRecoveryDTO
 */
function PasswordRecoveryDTOFromJSON(json) {
  return PasswordRecoveryDTOFromJSONTyped(json, false);
}
function PasswordRecoveryDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    email: json["email"]
  };
}
function PasswordRecoveryDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    email: value.email === undefined ? undefined : value.email
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/LoginDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface LoginDTO
 */
function LoginDTOFromJSON(json) {
  return LoginDTOFromJSONTyped(json, false);
}
function LoginDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    email: json["email"],
    password: json["password"]
  };
}
function LoginDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    email: value.email === undefined ? undefined : value.email,
    password: value.password === undefined ? undefined : value.password
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/RegisterDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface RegisterDTO
 */
function RegisterDTOFromJSON(json) {
  return RegisterDTOFromJSONTyped(json, false);
}
function RegisterDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    email: json["email"],
    password: json["password"],
    name: json["name"]
  };
}
function RegisterDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    email: value.email === undefined ? undefined : value.email,
    password: value.password === undefined ? undefined : value.password,
    name: value.name === undefined ? undefined : value.name
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/SetNewPasswordDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface SetNewPasswordDTO
 */
function SetNewPasswordDTOFromJSON(json) {
  return SetNewPasswordDTOFromJSONTyped(json, false);
}
function SetNewPasswordDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    code: json["code"],
    password1: json["password1"],
    password2: json["password2"]
  };
}
function SetNewPasswordDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    code: value.code === undefined ? undefined : value.code,
    password1: value.password1 === undefined ? undefined : value.password1,
    password2: value.password2 === undefined ? undefined : value.password2
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/apis/AuthApi.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 *
 */
class AuthApi extends runtime/* BaseAPI */.T2 {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "activateEmail", async token => {
      const response = await this.activateEmailRaw({
        token: token
      });
      return await response.value();
    });

    _defineProperty(this, "changeEmail", async changeEmailDTO => {
      await this.changeEmailRaw({
        changeEmailDTO: changeEmailDTO
      });
    });

    _defineProperty(this, "changePassword", async changePasswordDTO => {
      await this.changePasswordRaw({
        changePasswordDTO: changePasswordDTO
      });
    });

    _defineProperty(this, "initRecoverPassword", async passwordRecoveryDTO => {
      await this.initRecoverPasswordRaw({
        passwordRecoveryDTO: passwordRecoveryDTO
      });
    });

    _defineProperty(this, "login", async loginDTO => {
      const response = await this.loginRaw({
        loginDTO: loginDTO
      });
      return await response.value();
    });

    _defineProperty(this, "register", async registerDTO => {
      await this.registerRaw({
        registerDTO: registerDTO
      });
    });

    _defineProperty(this, "setNewPassword", async setNewPasswordDTO => {
      const response = await this.setNewPasswordRaw({
        setNewPasswordDTO: setNewPasswordDTO
      });
      return await response.value();
    });
  }

  /**
   */
  async activateEmailRaw(requestParameters) {
    this.activateEmailValidation(requestParameters);
    const context = this.activateEmailContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => TokenHoldFromJSON(jsonValue));
  }
  /**
   */


  activateEmailValidation(requestParameters) {
    if (requestParameters.token === null || requestParameters.token === undefined) {
      throw new runtime/* RequiredError */.IC("token", "Required parameter requestParameters.token was null or undefined when calling activateEmail.");
    }
  }
  /**
   */


  activateEmailContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    return {
      path: `/api/auth/activateEmail/{token}`.replace(`{${"token"}}`, encodeURIComponent(String(requestParameters.token))),
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  /**
   */
  async changeEmailRaw(requestParameters) {
    this.changeEmailValidation(requestParameters);
    const context = this.changeEmailContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  changeEmailValidation(requestParameters) {
    if (requestParameters.changeEmailDTO === null || requestParameters.changeEmailDTO === undefined) {
      throw new runtime/* RequiredError */.IC("changeEmailDTO", "Required parameter requestParameters.changeEmailDTO was null or undefined when calling changeEmail.");
    }
  }
  /**
   */


  changeEmailContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/auth/change_email`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: ChangeEmailDTOToJSON(requestParameters.changeEmailDTO)
    };
  }
  /**
   */


  /**
   */
  async changePasswordRaw(requestParameters) {
    this.changePasswordValidation(requestParameters);
    const context = this.changePasswordContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  changePasswordValidation(requestParameters) {
    if (requestParameters.changePasswordDTO === null || requestParameters.changePasswordDTO === undefined) {
      throw new runtime/* RequiredError */.IC("changePasswordDTO", "Required parameter requestParameters.changePasswordDTO was null or undefined when calling changePassword.");
    }
  }
  /**
   */


  changePasswordContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/auth/change_password`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: ChangePasswordDTOToJSON(requestParameters.changePasswordDTO)
    };
  }
  /**
   */


  /**
   */
  async initRecoverPasswordRaw(requestParameters) {
    this.initRecoverPasswordValidation(requestParameters);
    const context = this.initRecoverPasswordContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  initRecoverPasswordValidation(requestParameters) {
    if (requestParameters.passwordRecoveryDTO === null || requestParameters.passwordRecoveryDTO === undefined) {
      throw new runtime/* RequiredError */.IC("passwordRecoveryDTO", "Required parameter requestParameters.passwordRecoveryDTO was null or undefined when calling initRecoverPassword.");
    }
  }
  /**
   */


  initRecoverPasswordContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";
    return {
      path: `/api/auth/initRecover`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: PasswordRecoveryDTOToJSON(requestParameters.passwordRecoveryDTO)
    };
  }
  /**
   */


  /**
   */
  async loginRaw(requestParameters) {
    this.loginValidation(requestParameters);
    const context = this.loginContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => TokenHoldFromJSON(jsonValue));
  }
  /**
   */


  loginValidation(requestParameters) {
    if (requestParameters.loginDTO === null || requestParameters.loginDTO === undefined) {
      throw new runtime/* RequiredError */.IC("loginDTO", "Required parameter requestParameters.loginDTO was null or undefined when calling login.");
    }
  }
  /**
   */


  loginContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";
    return {
      path: `/api/auth/login`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: LoginDTOToJSON(requestParameters.loginDTO)
    };
  }
  /**
   */


  /**
   */
  async registerRaw(requestParameters) {
    this.registerValidation(requestParameters);
    const context = this.registerContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  registerValidation(requestParameters) {
    if (requestParameters.registerDTO === null || requestParameters.registerDTO === undefined) {
      throw new runtime/* RequiredError */.IC("registerDTO", "Required parameter requestParameters.registerDTO was null or undefined when calling register.");
    }
  }
  /**
   */


  registerContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";
    return {
      path: `/api/auth/register`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: RegisterDTOToJSON(requestParameters.registerDTO)
    };
  }
  /**
   */


  /**
   */
  async setNewPasswordRaw(requestParameters) {
    this.setNewPasswordValidation(requestParameters);
    const context = this.setNewPasswordContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => TokenHoldFromJSON(jsonValue));
  }
  /**
   */


  setNewPasswordValidation(requestParameters) {
    if (requestParameters.setNewPasswordDTO === null || requestParameters.setNewPasswordDTO === undefined) {
      throw new runtime/* RequiredError */.IC("setNewPasswordDTO", "Required parameter requestParameters.setNewPasswordDTO was null or undefined when calling setNewPassword.");
    }
  }
  /**
   */


  setNewPasswordContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";
    return {
      path: `/api/auth/setNewPassword`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: SetNewPasswordDTOToJSON(requestParameters.setNewPasswordDTO)
    };
  }
  /**
   */


}
// EXTERNAL MODULE: ./node_modules/swr/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(52503);
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/CompactUserProfileDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface CompactUserProfileDTO
 */

function CompactUserProfileDTOFromJSON(json) {
  return CompactUserProfileDTOFromJSONTyped(json, false);
}
function CompactUserProfileDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: json["id"],
    online: json["online"],
    name: json["name"],
    image: !(0,runtime/* exists */.Gg)(json, "image") ? undefined : json["image"],
    birthday: !(0,runtime/* exists */.Gg)(json, "birthday") ? undefined : new Date(json["birthday"])
  };
}
function CompactUserProfileDTO_CompactUserProfileDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id === undefined ? undefined : value.id,
    online: value.online === undefined ? undefined : value.online,
    name: value.name === undefined ? undefined : value.name,
    image: value.image === undefined ? undefined : value.image,
    birthday: value.birthday === undefined ? undefined : value.birthday.toISOString()
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/MessageDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface MessageDTO
 */
function MessageDTOFromJSON(json) {
  return MessageDTOFromJSONTyped(json, false);
}
function MessageDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: json["id"],
    content: json["content"],
    time: json["time"],
    mine: json["mine"],
    chatId: json["chatId"],
    temporary: json["temporary"],
    read: json["read"]
  };
}
function MessageDTO_MessageDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id === undefined ? undefined : value.id,
    content: value.content === undefined ? undefined : value.content,
    time: value.time === undefined ? undefined : value.time,
    mine: value.mine === undefined ? undefined : value.mine,
    chatId: value.chatId === undefined ? undefined : value.chatId,
    temporary: value.temporary === undefined ? undefined : value.temporary,
    read: value.read === undefined ? undefined : value.read
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/ChatWithMessageDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 *
 * @export
 * @interface ChatWithMessageDTO
 */

function ChatWithMessageDTOFromJSON(json) {
  return ChatWithMessageDTOFromJSONTyped(json, false);
}
function ChatWithMessageDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    user: CompactUserProfileDTOFromJSON(json["user"]),
    message: !(0,runtime/* exists */.Gg)(json, "message") ? undefined : MessageDTOFromJSON(json["message"]),
    chatID: json["chatID"],
    unreadMessages: json["unreadMessages"]
  };
}
function ChatWithMessageDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    user: CompactUserProfileDTOToJSON(value.user),
    message: MessageDTOToJSON(value.message),
    chatID: value.chatID === undefined ? undefined : value.chatID,
    unreadMessages: value.unreadMessages === undefined ? undefined : value.unreadMessages
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/apis/ChatApi.ts
function ChatApi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */




/**
 *
 */
class ChatApi extends runtime/* BaseAPI */.T2 {
  constructor(...args) {
    super(...args);

    ChatApi_defineProperty(this, "deleteChat", async id => {
      await this.deleteChatRaw({
        id: id
      });
    });

    ChatApi_defineProperty(this, "getChat", async id => {
      const response = await this.getChatRaw({
        id: id
      });
      return await response.value();
    });

    ChatApi_defineProperty(this, "getChats", async () => {
      const response = await this.getChatsRaw();
      return await response.value();
    });

    ChatApi_defineProperty(this, "messages", async (id, createdBefore) => {
      const response = await this.messagesRaw({
        id: id,
        createdBefore: createdBefore
      });
      return await response.value();
    });

    ChatApi_defineProperty(this, "vipChatEntry", async id => {
      const response = await this.vipChatEntryRaw({
        id: id
      });
      return await response.value();
    });
  }

  /**
   */
  async deleteChatRaw(requestParameters) {
    this.deleteChatValidation(requestParameters);
    const context = this.deleteChatContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  deleteChatValidation(requestParameters) {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime/* RequiredError */.IC("id", "Required parameter requestParameters.id was null or undefined when calling deleteChat.");
    }
  }
  /**
   */


  deleteChatContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/chat/{id}/delete`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
      method: "DELETE",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useDeleteChat(id, config) {
    let valid = true;

    if (id === null || id === undefined || Number.isNaN(id)) {
      valid = false;
    }

    const context = this.deleteChatContext({
      id: id
    });
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.deleteChat(id) : null, config);
  }
  /**
   */


  async getChatRaw(requestParameters) {
    this.getChatValidation(requestParameters);
    const context = this.getChatContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => ChatWithMessageDTOFromJSON(jsonValue));
  }
  /**
   */


  getChatValidation(requestParameters) {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime/* RequiredError */.IC("id", "Required parameter requestParameters.id was null or undefined when calling getChat.");
    }
  }
  /**
   */


  getChatContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/chat/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useGetChat(id, config) {
    let valid = true;

    if (id === null || id === undefined || Number.isNaN(id)) {
      valid = false;
    }

    const context = this.getChatContext({
      id: id
    });
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.getChat(id) : null, config);
  }
  /**
   */


  async getChatsRaw() {
    this.getChatsValidation();
    const context = this.getChatsContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => jsonValue.map(ChatWithMessageDTOFromJSON));
  }
  /**
   */


  getChatsValidation() {}
  /**
   */


  getChatsContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/chat/all`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useGetChats(config) {
    let valid = true;
    const context = this.getChatsContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.getChats() : null, config);
  }
  /**
   */


  async messagesRaw(requestParameters) {
    this.messagesValidation(requestParameters);
    const context = this.messagesContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => jsonValue.map(MessageDTOFromJSON));
  }
  /**
   */


  messagesValidation(requestParameters) {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime/* RequiredError */.IC("id", "Required parameter requestParameters.id was null or undefined when calling messages.");
    }
  }
  /**
   */


  messagesContext(requestParameters) {
    const queryParameters = {};

    if (requestParameters.createdBefore !== undefined) {
      queryParameters["createdBefore"] = requestParameters.createdBefore;
    }

    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/chat/{id}/messages`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useMessages(id, createdBefore, config) {
    let valid = true;

    if (id === null || id === undefined || Number.isNaN(id)) {
      valid = false;
    }

    const context = this.messagesContext({
      id: id,
      createdBefore: createdBefore
    });
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.messages(id, createdBefore) : null, config);
  }
  /**
   */


  async vipChatEntryRaw(requestParameters) {
    this.vipChatEntryValidation(requestParameters);
    const context = this.vipChatEntryContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => ChatWithMessageDTOFromJSON(jsonValue));
  }
  /**
   */


  vipChatEntryValidation(requestParameters) {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime/* RequiredError */.IC("id", "Required parameter requestParameters.id was null or undefined when calling vipChatEntry.");
    }
  }
  /**
   */


  vipChatEntryContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/chat/{id}/vip_chat_entry`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/AppVersion.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface AppVersion
 */
function AppVersionFromJSON(json) {
  return AppVersionFromJSONTyped(json, false);
}
function AppVersionFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    value: json["value"]
  };
}
function AppVersionToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    value: value.value === undefined ? undefined : value.value
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/SupportDto.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface SupportDto
 */
function SupportDtoFromJSON(json) {
  return SupportDtoFromJSONTyped(json, false);
}
function SupportDtoFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    email: json["email"],
    type: json["type"],
    text: json["text"]
  };
}
function SupportDtoToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    email: value.email === undefined ? undefined : value.email,
    type: value.type === undefined ? undefined : value.type,
    text: value.text === undefined ? undefined : value.text
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/apis/CommonApi.ts
function CommonApi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */




/**
 *
 */
class CommonApi extends runtime/* BaseAPI */.T2 {
  constructor(...args) {
    super(...args);

    CommonApi_defineProperty(this, "appVersion", async () => {
      const response = await this.appVersionRaw();
      return await response.value();
    });

    CommonApi_defineProperty(this, "support", async supportDto => {
      await this.supportRaw({
        supportDto: supportDto
      });
    });
  }

  /**
   */
  async appVersionRaw() {
    this.appVersionValidation();
    const context = this.appVersionContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => AppVersionFromJSON(jsonValue));
  }
  /**
   */


  appVersionValidation() {}
  /**
   */


  appVersionContext() {
    const queryParameters = {};
    const headerParameters = {};
    return {
      path: `/api/common/app-version`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useAppVersion(config) {
    let valid = true;
    const context = this.appVersionContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.appVersion() : null, config);
  }
  /**
   */


  async supportRaw(requestParameters) {
    this.supportValidation(requestParameters);
    const context = this.supportContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  supportValidation(requestParameters) {
    if (requestParameters.supportDto === null || requestParameters.supportDto === undefined) {
      throw new runtime/* RequiredError */.IC("supportDto", "Required parameter requestParameters.supportDto was null or undefined when calling support.");
    }
  }
  /**
   */


  supportContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";
    return {
      path: `/api/common/support`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: SupportDtoToJSON(requestParameters.supportDto)
    };
  }
  /**
   */


}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/apis/DefaultApi.ts
function DefaultApi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 *
 */

class DefaultApi extends runtime/* BaseAPI */.T2 {
  constructor(...args) {
    super(...args);

    DefaultApi_defineProperty(this, "classic", async () => {
      await this.classicRaw();
    });

    DefaultApi_defineProperty(this, "rating", async () => {
      await this.ratingRaw();
    });
  }

  /**
   */
  async classicRaw() {
    this.classicValidation();
    const context = this.classicContext();
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  classicValidation() {}
  /**
   */


  classicContext() {
    const queryParameters = {};
    const headerParameters = {};
    return {
      path: `/api/queue/classic`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useClassic(config) {
    let valid = true;
    const context = this.classicContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.classic() : null, config);
  }
  /**
   */


  async ratingRaw() {
    this.ratingValidation();
    const context = this.ratingContext();
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  ratingValidation() {}
  /**
   */


  ratingContext() {
    const queryParameters = {};
    const headerParameters = {};
    return {
      path: `/api/queue/rating`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useRating(config) {
    let valid = true;
    const context = this.ratingContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.rating() : null, config);
  }

}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/AccessToken.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface AccessToken
 */
function AccessTokenFromJSON(json) {
  return AccessTokenFromJSONTyped(json, false);
}
function AccessTokenFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    value: json["value"]
  };
}
function AccessTokenToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    value: value.value === undefined ? undefined : value.value
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/apis/SocialAuthApi.ts
function SocialAuthApi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 *
 */
class SocialAuthApi extends runtime/* BaseAPI */.T2 {
  constructor(...args) {
    super(...args);

    SocialAuthApi_defineProperty(this, "vkAuthApp", async accessToken => {
      const response = await this.vkAuthAppRaw({
        accessToken: accessToken
      });
      return await response.value();
    });
  }

  /**
   */
  async vkAuthAppRaw(requestParameters) {
    this.vkAuthAppValidation(requestParameters);
    const context = this.vkAuthAppContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => TokenHoldFromJSON(jsonValue));
  }
  /**
   */


  vkAuthAppValidation(requestParameters) {
    if (requestParameters.accessToken === null || requestParameters.accessToken === undefined) {
      throw new runtime/* RequiredError */.IC("accessToken", "Required parameter requestParameters.accessToken was null or undefined when calling vkAuthApp.");
    }
  }
  /**
   */


  vkAuthAppContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";
    return {
      path: `/api/vk/app`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: AccessTokenToJSON(requestParameters.accessToken)
    };
  }
  /**
   */


}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/ImageEntityDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface ImageEntityDTO
 */
function ImageEntityDTOFromJSON(json) {
  return ImageEntityDTOFromJSONTyped(json, false);
}
function ImageEntityDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: json["id"],
    path: json["path"],
    absolutePath: json["absolutePath"]
  };
}
function ImageEntityDTO_ImageEntityDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id === undefined ? undefined : value.id,
    path: value.path === undefined ? undefined : value.path,
    absolutePath: value.absolutePath === undefined ? undefined : value.absolutePath
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/UserRelationDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface UserRelationDTO
 */
function UserRelationDTOFromJSON(json) {
  return UserRelationDTOFromJSONTyped(json, false);
}
function UserRelationDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    following: json["following"],
    followsMe: json["followsMe"],
    friends: json["friends"]
  };
}
function UserRelationDTO_UserRelationDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    following: value.following === undefined ? undefined : value.following,
    followsMe: value.followsMe === undefined ? undefined : value.followsMe,
    friends: value.friends === undefined ? undefined : value.friends
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/ConnectionDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface ConnectionDTO
 */
function ConnectionDTOFromJSON(json) {
  return ConnectionDTOFromJSONTyped(json, false);
}
function ConnectionDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    social: json["social"]
  };
}
function ConnectionDTO_ConnectionDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    social: value.social === undefined ? undefined : value.social
  };
}
/**
 * @export
 * @enum {string}
 */

let ConnectionDTOSocialEnum;

(function (ConnectionDTOSocialEnum) {
  ConnectionDTOSocialEnum["GOOGLE"] = "GOOGLE";
  ConnectionDTOSocialEnum["VK"] = "VK";
  ConnectionDTOSocialEnum["APPLE"] = "APPLE";
})(ConnectionDTOSocialEnum || (ConnectionDTOSocialEnum = {}));
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/FullUserProfileDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 *
 * @export
 * @interface FullUserProfileDTO
 */

function FullUserProfileDTOFromJSON(json) {
  return FullUserProfileDTOFromJSONTyped(json, false);
}
function FullUserProfileDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: json["id"],
    online: json["online"],
    name: json["name"],
    sex: json["sex"],
    vip: json["vip"],
    birthday: !(0,runtime/* exists */.Gg)(json, "birthday") ? undefined : new Date(json["birthday"]),
    image: !(0,runtime/* exists */.Gg)(json, "image") ? undefined : json["image"],
    imageAbsolutePath: json["imageAbsolutePath"],
    country: !(0,runtime/* exists */.Gg)(json, "country") ? undefined : json["country"],
    city: !(0,runtime/* exists */.Gg)(json, "city") ? undefined : json["city"],
    description: json["description"],
    descriptionPrivate: !(0,runtime/* exists */.Gg)(json, "descriptionPrivate") ? undefined : json["descriptionPrivate"],
    tags: !(0,runtime/* exists */.Gg)(json, "tags") ? undefined : json["tags"],
    rating: !(0,runtime/* exists */.Gg)(json, "rating") ? undefined : json["rating"],
    status: json["status"],
    images: !(0,runtime/* exists */.Gg)(json, "images") ? undefined : json["images"].map(ImageEntityDTOFromJSON),
    relation: !(0,runtime/* exists */.Gg)(json, "relation") ? undefined : UserRelationDTOFromJSON(json["relation"]),
    chatId: !(0,runtime/* exists */.Gg)(json, "chatId") ? undefined : json["chatId"],
    distance: !(0,runtime/* exists */.Gg)(json, "distance") ? undefined : json["distance"],
    blocked: json["blocked"],
    deleted: json["deleted"],
    connections: json["connections"].map(ConnectionDTOFromJSON),
    email: !(0,runtime/* exists */.Gg)(json, "email") ? undefined : json["email"]
  };
}
function FullUserProfileDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id === undefined ? undefined : value.id,
    online: value.online === undefined ? undefined : value.online,
    name: value.name === undefined ? undefined : value.name,
    sex: value.sex === undefined ? undefined : value.sex,
    vip: value.vip === undefined ? undefined : value.vip,
    birthday: value.birthday === undefined ? undefined : value.birthday.toISOString(),
    image: value.image === undefined ? undefined : value.image,
    imageAbsolutePath: value.imageAbsolutePath === undefined ? undefined : value.imageAbsolutePath,
    country: value.country === undefined ? undefined : value.country,
    city: value.city === undefined ? undefined : value.city,
    description: value.description === undefined ? undefined : value.description,
    descriptionPrivate: value.descriptionPrivate === undefined ? undefined : value.descriptionPrivate,
    tags: value.tags === undefined ? undefined : value.tags,
    rating: value.rating === undefined ? undefined : value.rating,
    status: value.status === undefined ? undefined : value.status,
    images: value.images === undefined ? undefined : (value.images || []).map(ImageEntityDTOToJSON),
    relation: UserRelationDTOToJSON(value.relation),
    chatId: value.chatId === undefined ? undefined : value.chatId,
    distance: value.distance === undefined ? undefined : value.distance,
    blocked: value.blocked === undefined ? undefined : value.blocked,
    deleted: value.deleted === undefined ? undefined : value.deleted,
    connections: (value.connections || []).map(ConnectionDTOToJSON),
    email: value.email === undefined ? undefined : value.email
  };
}
/**
 * @export
 * @enum {string}
 */

let FullUserProfileDTOSexEnum;

(function (FullUserProfileDTOSexEnum) {
  FullUserProfileDTOSexEnum["MALE"] = "MALE";
  FullUserProfileDTOSexEnum["FEMALE"] = "FEMALE";
  FullUserProfileDTOSexEnum["UNDEF"] = "UNDEF";
})(FullUserProfileDTOSexEnum || (FullUserProfileDTOSexEnum = {}));
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/AddPushToken.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface AddPushToken
 */
function AddPushTokenFromJSON(json) {
  return AddPushTokenFromJSONTyped(json, false);
}
function AddPushTokenFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    value: json["value"]
  };
}
function AddPushTokenToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    value: value.value === undefined ? undefined : value.value
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/PublicUserProfileDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 *
 * @export
 * @interface PublicUserProfileDTO
 */

function PublicUserProfileDTOFromJSON(json) {
  return PublicUserProfileDTOFromJSONTyped(json, false);
}
function PublicUserProfileDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: json["id"],
    online: json["online"],
    name: json["name"],
    sex: json["sex"],
    vip: json["vip"],
    birthday: !(0,runtime/* exists */.Gg)(json, "birthday") ? undefined : new Date(json["birthday"]),
    image: !(0,runtime/* exists */.Gg)(json, "image") ? undefined : json["image"],
    imageAbsolutePath: json["imageAbsolutePath"],
    country: !(0,runtime/* exists */.Gg)(json, "country") ? undefined : json["country"],
    city: !(0,runtime/* exists */.Gg)(json, "city") ? undefined : json["city"],
    description: json["description"],
    descriptionPrivate: !(0,runtime/* exists */.Gg)(json, "descriptionPrivate") ? undefined : json["descriptionPrivate"],
    tags: !(0,runtime/* exists */.Gg)(json, "tags") ? undefined : json["tags"],
    rating: !(0,runtime/* exists */.Gg)(json, "rating") ? undefined : json["rating"],
    status: json["status"],
    images: !(0,runtime/* exists */.Gg)(json, "images") ? undefined : json["images"].map(ImageEntityDTOFromJSON),
    relation: !(0,runtime/* exists */.Gg)(json, "relation") ? undefined : UserRelationDTOFromJSON(json["relation"]),
    chatId: !(0,runtime/* exists */.Gg)(json, "chatId") ? undefined : json["chatId"],
    distance: !(0,runtime/* exists */.Gg)(json, "distance") ? undefined : json["distance"],
    blocked: json["blocked"],
    deleted: json["deleted"]
  };
}
function PublicUserProfileDTO_PublicUserProfileDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id === undefined ? undefined : value.id,
    online: value.online === undefined ? undefined : value.online,
    name: value.name === undefined ? undefined : value.name,
    sex: value.sex === undefined ? undefined : value.sex,
    vip: value.vip === undefined ? undefined : value.vip,
    birthday: value.birthday === undefined ? undefined : value.birthday.toISOString(),
    image: value.image === undefined ? undefined : value.image,
    imageAbsolutePath: value.imageAbsolutePath === undefined ? undefined : value.imageAbsolutePath,
    country: value.country === undefined ? undefined : value.country,
    city: value.city === undefined ? undefined : value.city,
    description: value.description === undefined ? undefined : value.description,
    descriptionPrivate: value.descriptionPrivate === undefined ? undefined : value.descriptionPrivate,
    tags: value.tags === undefined ? undefined : value.tags,
    rating: value.rating === undefined ? undefined : value.rating,
    status: value.status === undefined ? undefined : value.status,
    images: value.images === undefined ? undefined : (value.images || []).map(ImageEntityDTOToJSON),
    relation: UserRelationDTOToJSON(value.relation),
    chatId: value.chatId === undefined ? undefined : value.chatId,
    distance: value.distance === undefined ? undefined : value.distance,
    blocked: value.blocked === undefined ? undefined : value.blocked,
    deleted: value.deleted === undefined ? undefined : value.deleted
  };
}
/**
 * @export
 * @enum {string}
 */

let PublicUserProfileDTOSexEnum;

(function (PublicUserProfileDTOSexEnum) {
  PublicUserProfileDTOSexEnum["MALE"] = "MALE";
  PublicUserProfileDTOSexEnum["FEMALE"] = "FEMALE";
  PublicUserProfileDTOSexEnum["UNDEF"] = "UNDEF";
})(PublicUserProfileDTOSexEnum || (PublicUserProfileDTOSexEnum = {}));
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/IncomingFollowRequestDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface IncomingFollowRequestDTO
 */

function IncomingFollowRequestDTOFromJSON(json) {
  return IncomingFollowRequestDTOFromJSONTyped(json, false);
}
function IncomingFollowRequestDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    from: PublicUserProfileDTOFromJSON(json["from"]),
    id: json["id"]
  };
}
function IncomingFollowRequestDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    from: PublicUserProfileDTOToJSON(value.from),
    id: value.id === undefined ? undefined : value.id
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/FriendshipDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 *
 * @export
 * @interface FriendshipDTO
 */

function FriendshipDTOFromJSON(json) {
  return FriendshipDTOFromJSONTyped(json, false);
}
function FriendshipDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    user: PublicUserProfileDTOFromJSON(json["user"]),
    message: !(0,runtime/* exists */.Gg)(json, "message") ? undefined : json["message"]
  };
}
function FriendshipDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    user: PublicUserProfileDTOToJSON(value.user),
    message: value.message === undefined ? undefined : value.message
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/NotificationSettingsDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface NotificationSettingsDTO
 */
function NotificationSettingsDTOFromJSON(json) {
  return NotificationSettingsDTOFromJSONTyped(json, false);
}
function NotificationSettingsDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    digest: json["digest"]
  };
}
function NotificationSettingsDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    digest: value.digest === undefined ? undefined : value.digest
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/PendingReviewDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface PendingReviewDTO
 */

function PendingReviewDTOFromJSON(json) {
  return PendingReviewDTOFromJSONTyped(json, false);
}
function PendingReviewDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: json["id"],
    companion: PublicUserProfileDTOFromJSON(json["companion"])
  };
}
function PendingReviewDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id === undefined ? undefined : value.id,
    companion: PublicUserProfileDTOToJSON(value.companion)
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/PostReviewDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface PostReviewDTO
 */
function PostReviewDTOFromJSON(json) {
  return PostReviewDTOFromJSONTyped(json, false);
}
function PostReviewDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    rating: json["rating"]
  };
}
function PostReviewDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    rating: value.rating === undefined ? undefined : value.rating
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/PrivacyDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface PrivacyDTO
 */
function PrivacyDTOFromJSON(json) {
  return PrivacyDTOFromJSONTyped(json, false);
}
function PrivacyDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    uid: json["uid"],
    photos: json["photos"],
    profileInfo: json["profileInfo"],
    rating: json["rating"],
    statusMessage: json["statusMessage"],
    userPic: json["userPic"]
  };
}
function PrivacyDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    uid: value.uid === undefined ? undefined : value.uid,
    photos: value.photos === undefined ? undefined : value.photos,
    profileInfo: value.profileInfo === undefined ? undefined : value.profileInfo,
    rating: value.rating === undefined ? undefined : value.rating,
    statusMessage: value.statusMessage === undefined ? undefined : value.statusMessage,
    userPic: value.userPic === undefined ? undefined : value.userPic
  };
}
/**
 * @export
 * @enum {string}
 */

let PrivacyDTOPhotosEnum;
/**
 * @export
 * @enum {string}
 */

(function (PrivacyDTOPhotosEnum) {
  PrivacyDTOPhotosEnum["EVERYONE"] = "EVERYONE";
  PrivacyDTOPhotosEnum["FRIENDS"] = "FRIENDS";
  PrivacyDTOPhotosEnum["NOBODY"] = "NOBODY";
})(PrivacyDTOPhotosEnum || (PrivacyDTOPhotosEnum = {}));

let PrivacyDTOProfileInfoEnum;
/**
 * @export
 * @enum {string}
 */

(function (PrivacyDTOProfileInfoEnum) {
  PrivacyDTOProfileInfoEnum["EVERYONE"] = "EVERYONE";
  PrivacyDTOProfileInfoEnum["FRIENDS"] = "FRIENDS";
  PrivacyDTOProfileInfoEnum["NOBODY"] = "NOBODY";
})(PrivacyDTOProfileInfoEnum || (PrivacyDTOProfileInfoEnum = {}));

let PrivacyDTORatingEnum;
/**
 * @export
 * @enum {string}
 */

(function (PrivacyDTORatingEnum) {
  PrivacyDTORatingEnum["EVERYONE"] = "EVERYONE";
  PrivacyDTORatingEnum["FRIENDS"] = "FRIENDS";
  PrivacyDTORatingEnum["NOBODY"] = "NOBODY";
})(PrivacyDTORatingEnum || (PrivacyDTORatingEnum = {}));

let PrivacyDTOStatusMessageEnum;
/**
 * @export
 * @enum {string}
 */

(function (PrivacyDTOStatusMessageEnum) {
  PrivacyDTOStatusMessageEnum["EVERYONE"] = "EVERYONE";
  PrivacyDTOStatusMessageEnum["FRIENDS"] = "FRIENDS";
  PrivacyDTOStatusMessageEnum["NOBODY"] = "NOBODY";
})(PrivacyDTOStatusMessageEnum || (PrivacyDTOStatusMessageEnum = {}));

let PrivacyDTOUserPicEnum;

(function (PrivacyDTOUserPicEnum) {
  PrivacyDTOUserPicEnum["EVERYONE"] = "EVERYONE";
  PrivacyDTOUserPicEnum["FRIENDS"] = "FRIENDS";
  PrivacyDTOUserPicEnum["NOBODY"] = "NOBODY";
})(PrivacyDTOUserPicEnum || (PrivacyDTOUserPicEnum = {}));
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/QueuePreferenceDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface QueuePreferenceDTO
 */
function QueuePreferenceDTOFromJSON(json) {
  return QueuePreferenceDTOFromJSONTyped(json, false);
}
function QueuePreferenceDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    near: json["near"],
    ageTo: json["ageTo"],
    ageFrom: json["ageFrom"],
    highRating: json["highRating"],
    sex: json["sex"]
  };
}
function QueuePreferenceDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    near: value.near === undefined ? undefined : value.near,
    ageTo: value.ageTo === undefined ? undefined : value.ageTo,
    ageFrom: value.ageFrom === undefined ? undefined : value.ageFrom,
    highRating: value.highRating === undefined ? undefined : value.highRating,
    sex: value.sex === undefined ? undefined : value.sex
  };
}
/**
 * @export
 * @enum {string}
 */

let QueuePreferenceDTOSexEnum;

(function (QueuePreferenceDTOSexEnum) {
  QueuePreferenceDTOSexEnum["MALE"] = "MALE";
  QueuePreferenceDTOSexEnum["FEMALE"] = "FEMALE";
  QueuePreferenceDTOSexEnum["UNDEF"] = "UNDEF";
})(QueuePreferenceDTOSexEnum || (QueuePreferenceDTOSexEnum = {}));
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/ReportDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface ReportDTO
 */
function ReportDTOFromJSON(json) {
  return ReportDTOFromJSONTyped(json, false);
}
function ReportDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    text: json["text"]
  };
}
function ReportDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    text: value.text === undefined ? undefined : value.text
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/SubmitIncomingRequestDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface SubmitIncomingRequestDTO
 */
function SubmitIncomingRequestDTOFromJSON(json) {
  return SubmitIncomingRequestDTOFromJSONTyped(json, false);
}
function SubmitIncomingRequestDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    uid: json["uid"],
    accept: json["accept"]
  };
}
function SubmitIncomingRequestDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    uid: value.uid === undefined ? undefined : value.uid,
    accept: value.accept === undefined ? undefined : value.accept
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/UpdateGeolocationDto.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface UpdateGeolocationDto
 */
function UpdateGeolocationDtoFromJSON(json) {
  return UpdateGeolocationDtoFromJSONTyped(json, false);
}
function UpdateGeolocationDtoFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    lon: json["lon"],
    lat: json["lat"]
  };
}
function UpdateGeolocationDtoToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    lon: value.lon === undefined ? undefined : value.lon,
    lat: value.lat === undefined ? undefined : value.lat
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/EmailNotificationEntity.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface EmailNotificationEntity
 */
function EmailNotificationEntityFromJSON(json) {
  return EmailNotificationEntityFromJSONTyped(json, false);
}
function EmailNotificationEntityFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    digest: json["digest"]
  };
}
function EmailNotificationEntityToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    digest: value.digest === undefined ? undefined : value.digest
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/UpdatePrivacyDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface UpdatePrivacyDTO
 */

function UpdatePrivacyDTOFromJSON(json) {
  return UpdatePrivacyDTOFromJSONTyped(json, false);
}
function UpdatePrivacyDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    photos: !exists(json, "photos") ? undefined : json["photos"],
    profileInfo: !exists(json, "profileInfo") ? undefined : json["profileInfo"],
    rating: !exists(json, "rating") ? undefined : json["rating"],
    statusMessage: !exists(json, "statusMessage") ? undefined : json["statusMessage"],
    userPic: !exists(json, "userPic") ? undefined : json["userPic"]
  };
}
function UpdatePrivacyDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    photos: value.photos === undefined ? undefined : value.photos,
    profileInfo: value.profileInfo === undefined ? undefined : value.profileInfo,
    rating: value.rating === undefined ? undefined : value.rating,
    statusMessage: value.statusMessage === undefined ? undefined : value.statusMessage,
    userPic: value.userPic === undefined ? undefined : value.userPic
  };
}
/**
 * @export
 * @enum {string}
 */

let UpdatePrivacyDTOPhotosEnum;
/**
 * @export
 * @enum {string}
 */

(function (UpdatePrivacyDTOPhotosEnum) {
  UpdatePrivacyDTOPhotosEnum["EVERYONE"] = "EVERYONE";
  UpdatePrivacyDTOPhotosEnum["FRIENDS"] = "FRIENDS";
  UpdatePrivacyDTOPhotosEnum["NOBODY"] = "NOBODY";
})(UpdatePrivacyDTOPhotosEnum || (UpdatePrivacyDTOPhotosEnum = {}));

let UpdatePrivacyDTOProfileInfoEnum;
/**
 * @export
 * @enum {string}
 */

(function (UpdatePrivacyDTOProfileInfoEnum) {
  UpdatePrivacyDTOProfileInfoEnum["EVERYONE"] = "EVERYONE";
  UpdatePrivacyDTOProfileInfoEnum["FRIENDS"] = "FRIENDS";
  UpdatePrivacyDTOProfileInfoEnum["NOBODY"] = "NOBODY";
})(UpdatePrivacyDTOProfileInfoEnum || (UpdatePrivacyDTOProfileInfoEnum = {}));

let UpdatePrivacyDTORatingEnum;
/**
 * @export
 * @enum {string}
 */

(function (UpdatePrivacyDTORatingEnum) {
  UpdatePrivacyDTORatingEnum["EVERYONE"] = "EVERYONE";
  UpdatePrivacyDTORatingEnum["FRIENDS"] = "FRIENDS";
  UpdatePrivacyDTORatingEnum["NOBODY"] = "NOBODY";
})(UpdatePrivacyDTORatingEnum || (UpdatePrivacyDTORatingEnum = {}));

let UpdatePrivacyDTOStatusMessageEnum;
/**
 * @export
 * @enum {string}
 */

(function (UpdatePrivacyDTOStatusMessageEnum) {
  UpdatePrivacyDTOStatusMessageEnum["EVERYONE"] = "EVERYONE";
  UpdatePrivacyDTOStatusMessageEnum["FRIENDS"] = "FRIENDS";
  UpdatePrivacyDTOStatusMessageEnum["NOBODY"] = "NOBODY";
})(UpdatePrivacyDTOStatusMessageEnum || (UpdatePrivacyDTOStatusMessageEnum = {}));

let UpdatePrivacyDTOUserPicEnum;

(function (UpdatePrivacyDTOUserPicEnum) {
  UpdatePrivacyDTOUserPicEnum["EVERYONE"] = "EVERYONE";
  UpdatePrivacyDTOUserPicEnum["FRIENDS"] = "FRIENDS";
  UpdatePrivacyDTOUserPicEnum["NOBODY"] = "NOBODY";
})(UpdatePrivacyDTOUserPicEnum || (UpdatePrivacyDTOUserPicEnum = {}));
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/UpdateProfileDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface UpdateProfileDTO
 */

function UpdateProfileDTOFromJSON(json) {
  return UpdateProfileDTOFromJSONTyped(json, false);
}
function UpdateProfileDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    name: !exists(json, "name") ? undefined : json["name"],
    sex: !exists(json, "sex") ? undefined : json["sex"],
    birthday: !exists(json, "birthday") ? undefined : new Date(json["birthday"]),
    image: !exists(json, "image") ? undefined : json["image"],
    city: !exists(json, "city") ? undefined : json["city"],
    country: !exists(json, "country") ? undefined : json["country"],
    description: !exists(json, "description") ? undefined : json["description"],
    descriptionPrivate: !exists(json, "descriptionPrivate") ? undefined : json["descriptionPrivate"],
    status: !exists(json, "status") ? undefined : json["status"],
    tags: !exists(json, "tags") ? undefined : json["tags"],
    images: !exists(json, "images") ? undefined : json["images"]
  };
}
function UpdateProfileDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    name: value.name === undefined ? undefined : value.name,
    sex: value.sex === undefined ? undefined : value.sex,
    birthday: value.birthday === undefined ? undefined : value.birthday.toISOString(),
    image: value.image === undefined ? undefined : value.image,
    city: value.city === undefined ? undefined : value.city,
    country: value.country === undefined ? undefined : value.country,
    description: value.description === undefined ? undefined : value.description,
    descriptionPrivate: value.descriptionPrivate === undefined ? undefined : value.descriptionPrivate,
    status: value.status === undefined ? undefined : value.status,
    tags: value.tags === undefined ? undefined : value.tags,
    images: value.images === undefined ? undefined : value.images
  };
}
/**
 * @export
 * @enum {string}
 */

let UpdateProfileDTOSexEnum;

(function (UpdateProfileDTOSexEnum) {
  UpdateProfileDTOSexEnum["MALE"] = "MALE";
  UpdateProfileDTOSexEnum["FEMALE"] = "FEMALE";
  UpdateProfileDTOSexEnum["UNDEF"] = "UNDEF";
})(UpdateProfileDTOSexEnum || (UpdateProfileDTOSexEnum = {}));
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/ImageEntity.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface ImageEntity
 */
function ImageEntityFromJSON(json) {
  return ImageEntityFromJSONTyped(json, false);
}
function ImageEntityFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: json["id"],
    path: json["path"]
  };
}
function ImageEntityToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id === undefined ? undefined : value.id,
    path: value.path === undefined ? undefined : value.path
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/SearchPreference.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface SearchPreference
 */

function SearchPreferenceFromJSON(json) {
  return SearchPreferenceFromJSONTyped(json, false);
}
function SearchPreferenceFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    withPhotos: json["withPhotos"],
    onlyVip: json["onlyVip"],
    near: json["near"],
    ageTo: json["ageTo"],
    ageFrom: json["ageFrom"],
    highRating: json["highRating"],
    sex: json["sex"],
    country: !(0,runtime/* exists */.Gg)(json, "country") ? undefined : json["country"]
  };
}
function SearchPreferenceToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    withPhotos: value.withPhotos === undefined ? undefined : value.withPhotos,
    onlyVip: value.onlyVip === undefined ? undefined : value.onlyVip,
    near: value.near === undefined ? undefined : value.near,
    ageTo: value.ageTo === undefined ? undefined : value.ageTo,
    ageFrom: value.ageFrom === undefined ? undefined : value.ageFrom,
    highRating: value.highRating === undefined ? undefined : value.highRating,
    sex: value.sex === undefined ? undefined : value.sex,
    country: value.country === undefined ? undefined : value.country
  };
}
/**
 * @export
 * @enum {string}
 */

let SearchPreferenceSexEnum;

(function (SearchPreferenceSexEnum) {
  SearchPreferenceSexEnum["MALE"] = "MALE";
  SearchPreferenceSexEnum["FEMALE"] = "FEMALE";
  SearchPreferenceSexEnum["UNDEF"] = "UNDEF";
})(SearchPreferenceSexEnum || (SearchPreferenceSexEnum = {}));
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/apis/UserApi.ts
function UserApi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */




/**
 *
 */
class UserApi extends runtime/* BaseAPI */.T2 {
  constructor(...args) {
    super(...args);

    UserApi_defineProperty(this, "addImage", async id => {
      const response = await this.addImageRaw({
        id: id
      });
      return await response.value();
    });

    UserApi_defineProperty(this, "addPushToken", async addPushToken => {
      await this.addPushTokenRaw({
        addPushToken: addPushToken
      });
    });

    UserApi_defineProperty(this, "deleteProfile", async () => {
      const response = await this.deleteProfileRaw();
      return await response.value();
    });

    UserApi_defineProperty(this, "followUser", async id => {
      const response = await this.followUserRaw({
        id: id
      });
      return await response.value();
    });

    UserApi_defineProperty(this, "friendList", async () => {
      const response = await this.friendListRaw();
      return await response.value();
    });

    UserApi_defineProperty(this, "getMe", async () => {
      const response = await this.getMeRaw();
      return await response.value();
    });

    UserApi_defineProperty(this, "getUser", async id => {
      const response = await this.getUserRaw({
        id: id
      });
      return await response.value();
    });

    UserApi_defineProperty(this, "incomingFriendshipRequests", async () => {
      const response = await this.incomingFriendshipRequestsRaw();
      return await response.value();
    });

    UserApi_defineProperty(this, "notificationSettings", async () => {
      const response = await this.notificationSettingsRaw();
      return await response.value();
    });

    UserApi_defineProperty(this, "pendingReviews", async () => {
      const response = await this.pendingReviewsRaw();
      return await response.value();
    });

    UserApi_defineProperty(this, "postReview", async (id, postReviewDTO) => {
      const response = await this.postReviewRaw({
        id: id,
        postReviewDTO: postReviewDTO
      });
      return await response.value();
    });

    UserApi_defineProperty(this, "privacySettings", async () => {
      const response = await this.privacySettingsRaw();
      return await response.value();
    });

    UserApi_defineProperty(this, "queuePreferences", async () => {
      const response = await this.queuePreferencesRaw();
      return await response.value();
    });

    UserApi_defineProperty(this, "removeAllPushTokens", async () => {
      await this.removeAllPushTokensRaw();
    });

    UserApi_defineProperty(this, "removeImage", async id => {
      const response = await this.removeImageRaw({
        id: id
      });
      return await response.value();
    });

    UserApi_defineProperty(this, "removePushToken", async value => {
      await this.removePushTokenRaw({
        value: value
      });
    });

    UserApi_defineProperty(this, "report", async (id, reportDTO) => {
      await this.reportRaw({
        id: id,
        reportDTO: reportDTO
      });
    });

    UserApi_defineProperty(this, "restoreProfile", async () => {
      const response = await this.restoreProfileRaw();
      return await response.value();
    });

    UserApi_defineProperty(this, "submitIncomingFriendshipRequest", async submitIncomingRequestDTO => {
      const response = await this.submitIncomingFriendshipRequestRaw({
        submitIncomingRequestDTO: submitIncomingRequestDTO
      });
      return await response.value();
    });

    UserApi_defineProperty(this, "unfollowUser", async id => {
      const response = await this.unfollowUserRaw({
        id: id
      });
      return await response.value();
    });

    UserApi_defineProperty(this, "updateGeolocation", async updateGeolocationDto => {
      await this.updateGeolocationRaw({
        updateGeolocationDto: updateGeolocationDto
      });
    });

    UserApi_defineProperty(this, "updateNotificationSettings", async emailNotificationEntity => {
      const response = await this.updateNotificationSettingsRaw({
        emailNotificationEntity: emailNotificationEntity
      });
      return await response.value();
    });

    UserApi_defineProperty(this, "updatePrivacySettings", async updatePrivacyDTO => {
      const response = await this.updatePrivacySettingsRaw({
        updatePrivacyDTO: updatePrivacyDTO
      });
      return await response.value();
    });

    UserApi_defineProperty(this, "updateProfile", async updateProfileDTO => {
      const response = await this.updateProfileRaw({
        updateProfileDTO: updateProfileDTO
      });
      return await response.value();
    });

    UserApi_defineProperty(this, "updateQueuePreferences", async queuePreferenceDTO => {
      const response = await this.updateQueuePreferencesRaw({
        queuePreferenceDTO: queuePreferenceDTO
      });
      return await response.value();
    });

    UserApi_defineProperty(this, "uploadImage", async () => {
      const response = await this.uploadImageRaw();
      return await response.value();
    });

    UserApi_defineProperty(this, "userSearch", async (page, withPhotos, onlyVip, online, near, ageEnd, ageStart, highRating, sex, country, perPage) => {
      const response = await this.userSearchRaw({
        page: page,
        withPhotos: withPhotos,
        onlyVip: onlyVip,
        online: online,
        near: near,
        ageEnd: ageEnd,
        ageStart: ageStart,
        highRating: highRating,
        sex: sex,
        country: country,
        perPage: perPage
      });
      return await response.value();
    });

    UserApi_defineProperty(this, "userSearchPreferences", async () => {
      const response = await this.userSearchPreferencesRaw();
      return await response.value();
    });

    UserApi_defineProperty(this, "userUpdateSearchPreferences", async searchPreference => {
      await this.userUpdateSearchPreferencesRaw({
        searchPreference: searchPreference
      });
    });
  }

  /**
   */
  async addImageRaw(requestParameters) {
    this.addImageValidation(requestParameters);
    const context = this.addImageContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => FullUserProfileDTOFromJSON(jsonValue));
  }
  /**
   */


  addImageValidation(requestParameters) {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime/* RequiredError */.IC("id", "Required parameter requestParameters.id was null or undefined when calling addImage.");
    }
  }
  /**
   */


  addImageContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/image/add/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  /**
   */
  async addPushTokenRaw(requestParameters) {
    this.addPushTokenValidation(requestParameters);
    const context = this.addPushTokenContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  addPushTokenValidation(requestParameters) {
    if (requestParameters.addPushToken === null || requestParameters.addPushToken === undefined) {
      throw new runtime/* RequiredError */.IC("addPushToken", "Required parameter requestParameters.addPushToken was null or undefined when calling addPushToken.");
    }
  }
  /**
   */


  addPushTokenContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";
    return {
      path: `/api/user/push-token`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: AddPushTokenToJSON(requestParameters.addPushToken)
    };
  }
  /**
   */


  /**
   */
  async deleteProfileRaw() {
    this.deleteProfileValidation();
    const context = this.deleteProfileContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => FullUserProfileDTOFromJSON(jsonValue));
  }
  /**
   */


  deleteProfileValidation() {}
  /**
   */


  deleteProfileContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/profile/delete`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  /**
   */
  async followUserRaw(requestParameters) {
    this.followUserValidation(requestParameters);
    const context = this.followUserContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => jsonValue.map(IncomingFollowRequestDTOFromJSON));
  }
  /**
   */


  followUserValidation(requestParameters) {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime/* RequiredError */.IC("id", "Required parameter requestParameters.id was null or undefined when calling followUser.");
    }
  }
  /**
   */


  followUserContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/friendship/requests/follow/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  /**
   */
  async friendListRaw() {
    this.friendListValidation();
    const context = this.friendListContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => jsonValue.map(FriendshipDTOFromJSON));
  }
  /**
   */


  friendListValidation() {}
  /**
   */


  friendListContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/friendship/friends`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useFriendList(config) {
    let valid = true;
    const context = this.friendListContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.friendList() : null, config);
  }
  /**
   */


  async getMeRaw() {
    this.getMeValidation();
    const context = this.getMeContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => FullUserProfileDTOFromJSON(jsonValue));
  }
  /**
   */


  getMeValidation() {}
  /**
   */


  getMeContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/me`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useGetMe(config) {
    let valid = true;
    const context = this.getMeContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.getMe() : null, config);
  }
  /**
   */


  async getUserRaw(requestParameters) {
    this.getUserValidation(requestParameters);
    const context = this.getUserContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => PublicUserProfileDTOFromJSON(jsonValue));
  }
  /**
   */


  getUserValidation(requestParameters) {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime/* RequiredError */.IC("id", "Required parameter requestParameters.id was null or undefined when calling getUser.");
    }
  }
  /**
   */


  getUserContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/id/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useGetUser(id, config) {
    let valid = true;

    if (id === null || id === undefined || Number.isNaN(id)) {
      valid = false;
    }

    const context = this.getUserContext({
      id: id
    });
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.getUser(id) : null, config);
  }
  /**
   */


  async incomingFriendshipRequestsRaw() {
    this.incomingFriendshipRequestsValidation();
    const context = this.incomingFriendshipRequestsContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => jsonValue.map(IncomingFollowRequestDTOFromJSON));
  }
  /**
   */


  incomingFriendshipRequestsValidation() {}
  /**
   */


  incomingFriendshipRequestsContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/friendship/requests/incoming`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useIncomingFriendshipRequests(config) {
    let valid = true;
    const context = this.incomingFriendshipRequestsContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.incomingFriendshipRequests() : null, config);
  }
  /**
   */


  async notificationSettingsRaw() {
    this.notificationSettingsValidation();
    const context = this.notificationSettingsContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => NotificationSettingsDTOFromJSON(jsonValue));
  }
  /**
   */


  notificationSettingsValidation() {}
  /**
   */


  notificationSettingsContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/settings/notification`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useNotificationSettings(config) {
    let valid = true;
    const context = this.notificationSettingsContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.notificationSettings() : null, config);
  }
  /**
   */


  async pendingReviewsRaw() {
    this.pendingReviewsValidation();
    const context = this.pendingReviewsContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => jsonValue.map(PendingReviewDTOFromJSON));
  }
  /**
   */


  pendingReviewsValidation() {}
  /**
   */


  pendingReviewsContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/rating/pendingReviews`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  usePendingReviews(config) {
    let valid = true;
    const context = this.pendingReviewsContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.pendingReviews() : null, config);
  }
  /**
   */


  async postReviewRaw(requestParameters) {
    this.postReviewValidation(requestParameters);
    const context = this.postReviewContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => jsonValue.map(PendingReviewDTOFromJSON));
  }
  /**
   */


  postReviewValidation(requestParameters) {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime/* RequiredError */.IC("id", "Required parameter requestParameters.id was null or undefined when calling postReview.");
    }

    if (requestParameters.postReviewDTO === null || requestParameters.postReviewDTO === undefined) {
      throw new runtime/* RequiredError */.IC("postReviewDTO", "Required parameter requestParameters.postReviewDTO was null or undefined when calling postReview.");
    }
  }
  /**
   */


  postReviewContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/rating/{id}/review`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: PostReviewDTOToJSON(requestParameters.postReviewDTO)
    };
  }
  /**
   */


  /**
   */
  async privacySettingsRaw() {
    this.privacySettingsValidation();
    const context = this.privacySettingsContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => PrivacyDTOFromJSON(jsonValue));
  }
  /**
   */


  privacySettingsValidation() {}
  /**
   */


  privacySettingsContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/privacy`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  usePrivacySettings(config) {
    let valid = true;
    const context = this.privacySettingsContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.privacySettings() : null, config);
  }
  /**
   */


  async queuePreferencesRaw() {
    this.queuePreferencesValidation();
    const context = this.queuePreferencesContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => QueuePreferenceDTOFromJSON(jsonValue));
  }
  /**
   */


  queuePreferencesValidation() {}
  /**
   */


  queuePreferencesContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/filter/preferences`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useQueuePreferences(config) {
    let valid = true;
    const context = this.queuePreferencesContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.queuePreferences() : null, config);
  }
  /**
   */


  async removeAllPushTokensRaw() {
    this.removeAllPushTokensValidation();
    const context = this.removeAllPushTokensContext();
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  removeAllPushTokensValidation() {}
  /**
   */


  removeAllPushTokensContext() {
    const queryParameters = {};
    const headerParameters = {};
    return {
      path: `/api/user/push-token/remove-all`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  /**
   */
  async removeImageRaw(requestParameters) {
    this.removeImageValidation(requestParameters);
    const context = this.removeImageContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => FullUserProfileDTOFromJSON(jsonValue));
  }
  /**
   */


  removeImageValidation(requestParameters) {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime/* RequiredError */.IC("id", "Required parameter requestParameters.id was null or undefined when calling removeImage.");
    }
  }
  /**
   */


  removeImageContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/image/remove/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  /**
   */
  async removePushTokenRaw(requestParameters) {
    this.removePushTokenValidation(requestParameters);
    const context = this.removePushTokenContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  removePushTokenValidation(requestParameters) {
    if (requestParameters.value === null || requestParameters.value === undefined) {
      throw new runtime/* RequiredError */.IC("value", "Required parameter requestParameters.value was null or undefined when calling removePushToken.");
    }
  }
  /**
   */


  removePushTokenContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    return {
      path: `/api/user/push-token/{value}/remove`.replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  /**
   */
  async reportRaw(requestParameters) {
    this.reportValidation(requestParameters);
    const context = this.reportContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  reportValidation(requestParameters) {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime/* RequiredError */.IC("id", "Required parameter requestParameters.id was null or undefined when calling report.");
    }

    if (requestParameters.reportDTO === null || requestParameters.reportDTO === undefined) {
      throw new runtime/* RequiredError */.IC("reportDTO", "Required parameter requestParameters.reportDTO was null or undefined when calling report.");
    }
  }
  /**
   */


  reportContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/rating/{id}/report`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: ReportDTOToJSON(requestParameters.reportDTO)
    };
  }
  /**
   */


  /**
   */
  async restoreProfileRaw() {
    this.restoreProfileValidation();
    const context = this.restoreProfileContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => FullUserProfileDTOFromJSON(jsonValue));
  }
  /**
   */


  restoreProfileValidation() {}
  /**
   */


  restoreProfileContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/profile/restore`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  /**
   */
  async submitIncomingFriendshipRequestRaw(requestParameters) {
    this.submitIncomingFriendshipRequestValidation(requestParameters);
    const context = this.submitIncomingFriendshipRequestContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => jsonValue.map(IncomingFollowRequestDTOFromJSON));
  }
  /**
   */


  submitIncomingFriendshipRequestValidation(requestParameters) {
    if (requestParameters.submitIncomingRequestDTO === null || requestParameters.submitIncomingRequestDTO === undefined) {
      throw new runtime/* RequiredError */.IC("submitIncomingRequestDTO", "Required parameter requestParameters.submitIncomingRequestDTO was null or undefined when calling submitIncomingFriendshipRequest.");
    }
  }
  /**
   */


  submitIncomingFriendshipRequestContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/friendship/requests/incoming/submit`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: SubmitIncomingRequestDTOToJSON(requestParameters.submitIncomingRequestDTO)
    };
  }
  /**
   */


  /**
   */
  async unfollowUserRaw(requestParameters) {
    this.unfollowUserValidation(requestParameters);
    const context = this.unfollowUserContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => jsonValue.map(IncomingFollowRequestDTOFromJSON));
  }
  /**
   */


  unfollowUserValidation(requestParameters) {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime/* RequiredError */.IC("id", "Required parameter requestParameters.id was null or undefined when calling unfollowUser.");
    }
  }
  /**
   */


  unfollowUserContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/friendship/requests/unfollow/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  /**
   */
  async updateGeolocationRaw(requestParameters) {
    this.updateGeolocationValidation(requestParameters);
    const context = this.updateGeolocationContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  updateGeolocationValidation(requestParameters) {
    if (requestParameters.updateGeolocationDto === null || requestParameters.updateGeolocationDto === undefined) {
      throw new runtime/* RequiredError */.IC("updateGeolocationDto", "Required parameter requestParameters.updateGeolocationDto was null or undefined when calling updateGeolocation.");
    }
  }
  /**
   */


  updateGeolocationContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/profile/geolocation`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: UpdateGeolocationDtoToJSON(requestParameters.updateGeolocationDto)
    };
  }
  /**
   */


  /**
   */
  async updateNotificationSettingsRaw(requestParameters) {
    this.updateNotificationSettingsValidation(requestParameters);
    const context = this.updateNotificationSettingsContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => NotificationSettingsDTOFromJSON(jsonValue));
  }
  /**
   */


  updateNotificationSettingsValidation(requestParameters) {
    if (requestParameters.emailNotificationEntity === null || requestParameters.emailNotificationEntity === undefined) {
      throw new runtime/* RequiredError */.IC("emailNotificationEntity", "Required parameter requestParameters.emailNotificationEntity was null or undefined when calling updateNotificationSettings.");
    }
  }
  /**
   */


  updateNotificationSettingsContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/settings/notification`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: EmailNotificationEntityToJSON(requestParameters.emailNotificationEntity)
    };
  }
  /**
   */


  /**
   */
  async updatePrivacySettingsRaw(requestParameters) {
    this.updatePrivacySettingsValidation(requestParameters);
    const context = this.updatePrivacySettingsContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => PrivacyDTOFromJSON(jsonValue));
  }
  /**
   */


  updatePrivacySettingsValidation(requestParameters) {
    if (requestParameters.updatePrivacyDTO === null || requestParameters.updatePrivacyDTO === undefined) {
      throw new runtime/* RequiredError */.IC("updatePrivacyDTO", "Required parameter requestParameters.updatePrivacyDTO was null or undefined when calling updatePrivacySettings.");
    }
  }
  /**
   */


  updatePrivacySettingsContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/privacy`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: UpdatePrivacyDTOToJSON(requestParameters.updatePrivacyDTO)
    };
  }
  /**
   */


  /**
   */
  async updateProfileRaw(requestParameters) {
    this.updateProfileValidation(requestParameters);
    const context = this.updateProfileContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => FullUserProfileDTOFromJSON(jsonValue));
  }
  /**
   */


  updateProfileValidation(requestParameters) {
    if (requestParameters.updateProfileDTO === null || requestParameters.updateProfileDTO === undefined) {
      throw new runtime/* RequiredError */.IC("updateProfileDTO", "Required parameter requestParameters.updateProfileDTO was null or undefined when calling updateProfile.");
    }
  }
  /**
   */


  updateProfileContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/update`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: UpdateProfileDTOToJSON(requestParameters.updateProfileDTO)
    };
  }
  /**
   */


  /**
   */
  async updateQueuePreferencesRaw(requestParameters) {
    this.updateQueuePreferencesValidation(requestParameters);
    const context = this.updateQueuePreferencesContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => QueuePreferenceDTOFromJSON(jsonValue));
  }
  /**
   */


  updateQueuePreferencesValidation(requestParameters) {
    if (requestParameters.queuePreferenceDTO === null || requestParameters.queuePreferenceDTO === undefined) {
      throw new runtime/* RequiredError */.IC("queuePreferenceDTO", "Required parameter requestParameters.queuePreferenceDTO was null or undefined when calling updateQueuePreferences.");
    }
  }
  /**
   */


  updateQueuePreferencesContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/filter/preference`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: QueuePreferenceDTOToJSON(requestParameters.queuePreferenceDTO)
    };
  }
  /**
   */


  /**
   */
  async uploadImageRaw() {
    this.uploadImageValidation();
    const context = this.uploadImageContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => ImageEntityFromJSON(jsonValue));
  }
  /**
   */


  uploadImageValidation() {}
  /**
   */


  uploadImageContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/image/upload`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  /**
   */
  async userSearchRaw(requestParameters) {
    this.userSearchValidation(requestParameters);
    const context = this.userSearchContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => jsonValue.map(PublicUserProfileDTOFromJSON));
  }
  /**
   */


  userSearchValidation(requestParameters) {
    if (requestParameters.page === null || requestParameters.page === undefined) {
      throw new runtime/* RequiredError */.IC("page", "Required parameter requestParameters.page was null or undefined when calling userSearch.");
    }
  }
  /**
   */


  userSearchContext(requestParameters) {
    const queryParameters = {};

    if (requestParameters.withPhotos !== undefined) {
      queryParameters["withPhotos"] = requestParameters.withPhotos;
    }

    if (requestParameters.onlyVip !== undefined) {
      queryParameters["onlyVip"] = requestParameters.onlyVip;
    }

    if (requestParameters.online !== undefined) {
      queryParameters["online"] = requestParameters.online;
    }

    if (requestParameters.near !== undefined) {
      queryParameters["near"] = requestParameters.near;
    }

    if (requestParameters.ageEnd !== undefined) {
      queryParameters["ageEnd"] = requestParameters.ageEnd;
    }

    if (requestParameters.ageStart !== undefined) {
      queryParameters["ageStart"] = requestParameters.ageStart;
    }

    if (requestParameters.highRating !== undefined) {
      queryParameters["highRating"] = requestParameters.highRating;
    }

    if (requestParameters.sex !== undefined) {
      queryParameters["sex"] = requestParameters.sex;
    }

    if (requestParameters.country !== undefined) {
      queryParameters["country"] = requestParameters.country;
    }

    if (requestParameters.page !== undefined) {
      queryParameters["page"] = requestParameters.page;
    }

    if (requestParameters.perPage !== undefined) {
      queryParameters["perPage"] = requestParameters.perPage;
    }

    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/search`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useUserSearch(page, withPhotos, onlyVip, online, near, ageEnd, ageStart, highRating, sex, country, perPage, config) {
    let valid = true;

    if (page === null || page === undefined || Number.isNaN(page)) {
      valid = false;
    }

    const context = this.userSearchContext({
      page: page,
      withPhotos: withPhotos,
      onlyVip: onlyVip,
      online: online,
      near: near,
      ageEnd: ageEnd,
      ageStart: ageStart,
      highRating: highRating,
      sex: sex,
      country: country,
      perPage: perPage
    });
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.userSearch(page, withPhotos, onlyVip, online, near, ageEnd, ageStart, highRating, sex, country, perPage) : null, config);
  }
  /**
   */


  async userSearchPreferencesRaw() {
    this.userSearchPreferencesValidation();
    const context = this.userSearchPreferencesContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => SearchPreferenceFromJSON(jsonValue));
  }
  /**
   */


  userSearchPreferencesValidation() {}
  /**
   */


  userSearchPreferencesContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/search-preferences`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useUserSearchPreferences(config) {
    let valid = true;
    const context = this.userSearchPreferencesContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.userSearchPreferences() : null, config);
  }
  /**
   */


  async userUpdateSearchPreferencesRaw(requestParameters) {
    this.userUpdateSearchPreferencesValidation(requestParameters);
    const context = this.userUpdateSearchPreferencesContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  userUpdateSearchPreferencesValidation(requestParameters) {
    if (requestParameters.searchPreference === null || requestParameters.searchPreference === undefined) {
      throw new runtime/* RequiredError */.IC("searchPreference", "Required parameter requestParameters.searchPreference was null or undefined when calling userUpdateSearchPreferences.");
    }
  }
  /**
   */


  userUpdateSearchPreferencesContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/api/user/search-preferences`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: SearchPreferenceToJSON(requestParameters.searchPreference)
    };
  }
  /**
   */


}
/**
 * @export
 * @enum {string}
 */

let UserSearchSexEnum;

(function (UserSearchSexEnum) {
  UserSearchSexEnum["MALE"] = "MALE";
  UserSearchSexEnum["FEMALE"] = "FEMALE";
  UserSearchSexEnum["UNDEF"] = "UNDEF";
})(UserSearchSexEnum || (UserSearchSexEnum = {}));
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/BuyVipDto.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface BuyVipDto
 */
function BuyVipDtoFromJSON(json) {
  return BuyVipDtoFromJSONTyped(json, false);
}
function BuyVipDtoFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    productId: json["productId"]
  };
}
function BuyVipDtoToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    productId: value.productId === undefined ? undefined : value.productId
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/MoneyDto.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface MoneyDto
 */
function MoneyDtoFromJSON(json) {
  return MoneyDtoFromJSONTyped(json, false);
}
function MoneyDtoFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    currency: json["currency"],
    amount: json["amount"]
  };
}
function MoneyDto_MoneyDtoToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    currency: value.currency === undefined ? undefined : value.currency,
    amount: value.amount === undefined ? undefined : value.amount
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/VipProductDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface VipProductDTO
 */

function VipProductDTOFromJSON(json) {
  return VipProductDTOFromJSONTyped(json, false);
}
function VipProductDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: json["id"],
    days: json["days"],
    amount: MoneyDtoFromJSON(json["amount"])
  };
}
function VipProductDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id === undefined ? undefined : value.id,
    days: value.days === undefined ? undefined : value.days,
    amount: MoneyDtoToJSON(value.amount)
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/VipPaymentDto.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface VipPaymentDto
 */

function VipPaymentDtoFromJSON(json) {
  return VipPaymentDtoFromJSONTyped(json, false);
}
function VipPaymentDtoFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    days: json["days"],
    date: json["date"],
    amount: MoneyDtoFromJSON(json["amount"])
  };
}
function VipPaymentDto_VipPaymentDtoToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    days: value.days === undefined ? undefined : value.days,
    date: value.date === undefined ? undefined : value.date,
    amount: MoneyDtoToJSON(value.amount)
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/models/VipStatusDTO.ts
/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface VipStatusDTO
 */

function VipStatusDTOFromJSON(json) {
  return VipStatusDTOFromJSONTyped(json, false);
}
function VipStatusDTOFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    daysLeft: json["daysLeft"],
    active: json["active"],
    payments: json["payments"].map(VipPaymentDtoFromJSON),
    endDate: new Date(json["endDate"])
  };
}
function VipStatusDTOToJSON(value) {
  if (value === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    daysLeft: value.daysLeft === undefined ? undefined : value.daysLeft,
    active: value.active === undefined ? undefined : value.active,
    payments: (value.payments || []).map(VipPaymentDtoToJSON),
    endDate: value.endDate.toISOString()
  };
}
;// CONCATENATED MODULE: ./src/shared/api/back/_generated/apis/VipApi.ts
function VipApi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* tslint:disable */

/* eslint-disable */

/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */




/**
 *
 */
class VipApi extends runtime/* BaseAPI */.T2 {
  constructor(...args) {
    super(...args);

    VipApi_defineProperty(this, "buyVip", async buyVipDto => {
      const response = await this.buyVipRaw({
        buyVipDto: buyVipDto
      });
      return await response.value();
    });

    VipApi_defineProperty(this, "enableVip", async () => {
      await this.enableVipRaw();
    });

    VipApi_defineProperty(this, "vipProducts", async () => {
      const response = await this.vipProductsRaw();
      return await response.value();
    });

    VipApi_defineProperty(this, "vipStatus", async () => {
      const response = await this.vipStatusRaw();
      return await response.value();
    });
  }

  /**
   */
  async buyVipRaw(requestParameters) {
    this.buyVipValidation(requestParameters);
    const context = this.buyVipContext(requestParameters);
    const response = await this.request(context);
    return new runtime/* TextApiResponse */.le(response);
  }
  /**
   */


  buyVipValidation(requestParameters) {
    if (requestParameters.buyVipDto === null || requestParameters.buyVipDto === undefined) {
      throw new runtime/* RequiredError */.IC("buyVipDto", "Required parameter requestParameters.buyVipDto was null or undefined when calling buyVip.");
    }
  }
  /**
   */


  buyVipContext(requestParameters) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/vip/buy`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: BuyVipDtoToJSON(requestParameters.buyVipDto)
    };
  }
  /**
   */


  /**
   */
  async enableVipRaw() {
    this.enableVipValidation();
    const context = this.enableVipContext();
    const response = await this.request(context);
    return new runtime/* VoidApiResponse */.dl(response);
  }
  /**
   */


  enableVipValidation() {}
  /**
   */


  enableVipContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/vip/enable`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  /**
   */
  async vipProductsRaw() {
    this.vipProductsValidation();
    const context = this.vipProductsContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => jsonValue.map(VipProductDTOFromJSON));
  }
  /**
   */


  vipProductsValidation() {}
  /**
   */


  vipProductsContext() {
    const queryParameters = {};
    const headerParameters = {};
    return {
      path: `/vip/vip_products`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useVipProducts(config) {
    let valid = true;
    const context = this.vipProductsContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.vipProducts() : null, config);
  }
  /**
   */


  async vipStatusRaw() {
    this.vipStatusValidation();
    const context = this.vipStatusContext();
    const response = await this.request(context);
    return new runtime/* JSONApiResponse */.QG(response, jsonValue => VipStatusDTOFromJSON(jsonValue));
  }
  /**
   */


  vipStatusValidation() {}
  /**
   */


  vipStatusContext() {
    const queryParameters = {};
    const headerParameters = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }

    return {
      path: `/vip/vip_status`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }
  /**
   */


  useVipStatus(config) {
    let valid = true;
    const context = this.vipStatusContext();
    return (0,index_esm/* default */.ZP)(JSON.stringify(context), valid ? () => this.vipStatus() : null, config);
  }

}
// EXTERNAL MODULE: ./src/shared/api/back/config.tsx + 2 modules
var config = __webpack_require__(74801);
;// CONCATENATED MODULE: ./src/shared/api/back/back-api.tsx
function back_api_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class BackApi {
  constructor() {
    back_api_defineProperty(this, "config", new config/* BackApiConfig */.G());

    back_api_defineProperty(this, "auth", new AuthApi(this.config));

    back_api_defineProperty(this, "chat", new ChatApi(this.config));

    back_api_defineProperty(this, "common", new CommonApi(this.config));

    back_api_defineProperty(this, "default", new DefaultApi(this.config));

    back_api_defineProperty(this, "socialAuth", new SocialAuthApi(this.config));

    back_api_defineProperty(this, "user", new UserApi(this.config));

    back_api_defineProperty(this, "vip", new VipApi(this.config));
  }

}
// EXTERNAL MODULE: ./node_modules/socket.io-client/lib/index.js
var lib = __webpack_require__(86809);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/shared/api/websocket/messages.tsx
let MessageReceiveType;

(function (MessageReceiveType) {
  MessageReceiveType["AUTHENTICATION_MESSAGE"] = "AUTHENTICATION_MESSAGE";
  MessageReceiveType["ENTER_QUEUE"] = "ENTER_QUEUE";
  MessageReceiveType["LEAVE_QUEUE"] = "LEAVE_QUEUE";
  MessageReceiveType["LEAVE_ROOM"] = "LEAVE_ROOM";
  MessageReceiveType["PING"] = "PING";
  MessageReceiveType["FILTER_SETTINGS"] = "FILTER_SETTINGS";
  MessageReceiveType["MESSAGE"] = "MESSAGE";
  MessageReceiveType["CALL"] = "CALL";
  MessageReceiveType["END_CALL"] = "END_CALL";
  MessageReceiveType["HANGUP"] = "HANGUP";
  MessageReceiveType["TYPING"] = "TYPING";
})(MessageReceiveType || (MessageReceiveType = {}));

let MessageSentType;

(function (MessageSentType) {
  MessageSentType["NEW_STATE"] = "NEW_STATE";
  MessageSentType["ENTER_ROOM"] = "ENTER_ROOM";
  MessageSentType["LEAVE_ROOM"] = "LEAVE_ROOM";
  MessageSentType["PEER_ID_ASSIGN"] = "PEER_ID_ASSIGN";
  MessageSentType["PONG"] = "PONG";
  MessageSentType["ONLINE_NOW"] = "ONLINE_NOW";
  MessageSentType["USER_ONLINE_STATUS"] = "USER_ONLINE_STATUS";
  MessageSentType["MESSAGE"] = "MESSAGE";
  MessageSentType["CALL"] = "CALL";
  MessageSentType["CALL_FINISHED"] = "CALL_FINISHED";
  MessageSentType["CALL_EXPIRED"] = "CALL_EXPIRED";
  MessageSentType["TYPING"] = "TYPING";
  MessageSentType["MESSAGES_READ"] = "MESSAGES_READ";
})(MessageSentType || (MessageSentType = {}));

class IncomingMessage {
  constructor(type) {
    this.type = type;
  }

}
// EXTERNAL MODULE: ./src/shared/api/back/lib/access-token.tsx
var access_token = __webpack_require__(35713);
// EXTERNAL MODULE: ./src/@yoldi/utils/helpers.ts
var helpers = __webpack_require__(84427);
;// CONCATENATED MODULE: ./src/shared/api/websocket/ws.tsx
function ws_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class WebSocketApi {
  constructor() {
    ws_defineProperty(this, "socket", lib_default()("wss://api.chatrevolver.com", {
      transports: ["websocket"],
      autoConnect: false
    }));

    ws_defineProperty(this, "auth", () => {
      var _this$socket;

      (_this$socket = this.socket) === null || _this$socket === void 0 ? void 0 : _this$socket.emit(MessageReceiveType.AUTHENTICATION_MESSAGE, {
        token: (0,access_token/* getAccessToken */.hP)()
      });
    });

    ws_defineProperty(this, "subscribe", (event, handler) => {
      this.socket.on(event, handler);
      return () => {
        this.socket.off(event, handler);
      };
    });

    ws_defineProperty(this, "videoChat", {
      enterQueue: (params = {}) => {
        this.socket.emit(MessageReceiveType.ENTER_QUEUE, {
          forceClassic: !params.rating
        });
      },
      leaveQueue: () => {
        this.socket.emit(MessageReceiveType.LEAVE_QUEUE);
      },
      leaveRoom: () => {
        this.socket.emit(MessageReceiveType.LEAVE_ROOM);
      },
      onEnterRoom: handler => {
        return this.subscribe(MessageSentType.ENTER_ROOM, handler);
      },
      onLeaveRoom: handler => {
        return this.subscribe(MessageSentType.LEAVE_ROOM, handler);
      }
    });

    ws_defineProperty(this, "call", {
      startCall: userId => {
        this.socket.emit(MessageReceiveType.CALL, {
          userID: userId
        });
      },
      endCall: userId => {
        this.socket.emit(MessageReceiveType.END_CALL, {
          userID: userId
        });
      },
      onCall: handler => {
        return this.subscribe(MessageSentType.CALL, handler);
      },
      onCallFinished: handler => {
        return this.subscribe(MessageSentType.CALL_FINISHED, handler);
      },
      onCallExpired: handler => {
        return this.subscribe(MessageSentType.CALL_EXPIRED, handler);
      }
    });

    ws_defineProperty(this, "chat", {
      sendMessage: (chatId, message) => {
        this.socket.emit(MessageReceiveType.MESSAGE, {
          to: chatId,
          content: message
        });
      },
      onMessage: handler => {
        return this.subscribe(MessageSentType.MESSAGE, handler);
      },
      typing: chatId => {
        this.socket.emit(MessageReceiveType.TYPING, {
          chatID: chatId
        });
      },
      onTyping: handler => {
        return this.subscribe(MessageSentType.TYPING, handler);
      },
      onRead: handler => {
        return this.subscribe(MessageSentType.MESSAGES_READ, handler);
      }
    });

    ws_defineProperty(this, "online", {
      onUpdate: handler => {
        return this.subscribe(MessageSentType.ONLINE_NOW, handler);
      }
    });

    if ((0,helpers/* isServer */.sk)()) return;
    this.socket.on("connect", this.auth);
    (0,access_token/* onAccessTokenChange */.Kj)(this.auth);
    this.socket.connect();
  }

}
;// CONCATENATED MODULE: ./src/shared/api/init.tsx


const api = new BackApi();
const ws = new WebSocketApi();

/***/ }),

/***/ 65604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ formatCountryAndCity)
/* harmony export */ });
/* harmony import */ var shared_lib_country_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87190);

const formatCountryAndCity = data => {
  var _countryList$find;

  const country = (_countryList$find = shared_lib_country_list__WEBPACK_IMPORTED_MODULE_0__/* .countryList.find */ .J.find(it => it.code === (data === null || data === void 0 ? void 0 : data.country))) === null || _countryList$find === void 0 ? void 0 : _countryList$find.name;
  const city = data === null || data === void 0 ? void 0 : data.city;
  return [country, city].filter(it => it).join(", ");
};

/***/ }),

/***/ 53795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ formatNameAndAge)
/* harmony export */ });
/* harmony import */ var shared_lib_format_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23293);

const formatNameAndAge = data => {
  if (!data) return "";

  if (data.deleted) {
    return "DELETED";
  }

  const name = (0,shared_lib_format_name__WEBPACK_IMPORTED_MODULE_0__/* .formatName */ .K)(data);

  if (data.birthday) {
    const age = Number(new Date(new Date().getTime() - data.birthday.getTime()).toISOString().slice(0, 4)) - 1970;
    return `${name}, ${age}`;
  }

  return name;
};

/***/ }),

/***/ 23293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ formatName)
/* harmony export */ });
const formatName = data => {
  if (!data) return "";

  if (data.deleted) {
    return "DELETED";
  }

  let name = data.name;

  if (!name && data.id) {
    name = "User" + data.id;
  }

  return name;
};

/***/ }),

/***/ 60887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ formatRating)
/* harmony export */ });
const formatRating = value => {
  if (value === undefined) return "";
  return value.toFixed(1);
};

/***/ }),

/***/ 11360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ applyBackendErrors)
});

// UNUSED EXPORTS: handleSubmit

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/dist/index.js
var dist = __webpack_require__(25050);
;// CONCATENATED MODULE: ./src/shared/lib/backend-errors.i18n.tsx

const messages = (0,dist/* defineMessages */.vU)({
  ACTIVATION_CODE_NOT_FOUND: {
    id: `errors.activation_code_not_found`,
    defaultMessage: "ACTIVATION CODE NOT FOUND"
  },
  USER_BLOCKED: {
    id: `errors.blocked`,
    defaultMessage: "blocked"
  },
  USER_LOCKED: {
    id: `errors.user_locked`,
    defaultMessage: "USER LOCKED"
  },
  EMAIL_INCORRECT_FORMAT: {
    id: `errors.email_incorrect_format`,
    defaultMessage: "Невалидный email"
  },
  BAD_OAUTH: {
    id: `errors.bad_oauth`,
    defaultMessage: "BAD OAUTH"
  },
  NEED_EMAIL: {
    id: `errors.need_email`,
    defaultMessage: "NEED EMAIL"
  },
  UNKNOWN: {
    id: `errors.unknown`,
    defaultMessage: "UNKNOWN"
  },
  USER_NOT_FOUND: {
    id: `errors.user_not_found`,
    defaultMessage: "Пользователь с таким email не существует"
  },
  RECOVERY_CODE_NOT_FOUND: {
    id: `errors.recovery_code_not_found`,
    defaultMessage: "Неверный код восстановления пароля"
  },
  USER_NOT_ACTIVATED: {
    id: `errors.user_not_activated`,
    defaultMessage: "Email не подтвержден"
  },
  WRONG_PASSWORD: {
    id: `errors.wrong_password`,
    defaultMessage: "Неверный пароль"
  },
  EMAIL_IN_USE: {
    id: `errors.email_in_use`,
    defaultMessage: "Этот Email уже существует. Попробуйте войти в аккаунт"
  },
  ILLEGAL_STATE_NO_RIGHTS: {
    id: `errors.ILLEGAL_STATE_NO_RIGHTS`,
    defaultMessage: "ILLEGAL_STATE_NO_RIGHTS"
  },
  [""]: {
    id: `errors._ignore_this_message`,
    defaultMessage: ".."
  }
});
/* harmony default export */ const backend_errors_i18n = ((0,dist/* defineMessages */.vU)(messages));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/shared/lib/forms/apiError.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function apiError(errorCode) {
  return /*#__PURE__*/jsx_runtime.jsx(dist/* FormattedMessage */._H, _objectSpread({}, messages[errorCode]));
}
;// CONCATENATED MODULE: ./src/shared/lib/forms/applyBackendErrors.ts

/**
 *
 * @param errors : { fieldName: errorCode }
 * @param setError
 */

function applyBackendErrors(errors, setError) {
  Object.entries(errors).forEach(([key, value]) => {
    const err = apiError(value);
    setError(key, {
      message: err,
      type: "manual"
    });
  });
}
function handleSubmit(form, submit) {
  return form.handleSubmit(async values => {
    try {
      await submit(values);
    } catch (e) {
      try {
        const response = await e.json();
        applyBackendErrors(response === null || response === void 0 ? void 0 : response.fields, form.setError);
      } catch (e) {
        console.error(e);
      }
    }
  });
}

/***/ }),

/***/ 34910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ useModalForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42283);
/* harmony import */ var _applyBackendErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11360);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const useModalForm = (modal, props) => {
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__/* .useForm */ .cI)(_objectSpread({
    mode: "all"
  }, props));
  const {
    0: globalError,
    1: setGlobalError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const cleanGlobalError = () => setGlobalError(undefined);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    form.trigger();
  }, []);
  const onSubmit = form.handleSubmit(async values => {
    try {
      var _props$onSuccess, _modal$onSuccess;

      const resp = await props.onSubmit(values);
      await ((_props$onSuccess = props.onSuccess) === null || _props$onSuccess === void 0 ? void 0 : _props$onSuccess.call(props, resp, values));
      await ((_modal$onSuccess = modal.onSuccess) === null || _modal$onSuccess === void 0 ? void 0 : _modal$onSuccess.call(modal, resp, values));
      await modal.close();
      cleanGlobalError();
    } catch (e) {
      if (!e.json) {
        console.error(e);
        return;
      }

      try {
        const response = await e.json();

        if (response !== null && response !== void 0 && response.fields) {
          (0,_applyBackendErrors__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(response === null || response === void 0 ? void 0 : response.fields, form.setError);
        }

        if (response !== null && response !== void 0 && response.message) {
          setGlobalError(response === null || response === void 0 ? void 0 : response.message);
        }
      } catch (e) {
        console.error(e);
      }
    }
  });
  const submitProps = {
    loading: form.formState.isSubmitting,
    disabled: !form.formState.isValid
  };

  const register = (name, options) => {
    var _form$formState$error, _form$formState$error2;

    return _objectSpread(_objectSpread({}, form.register(name, _objectSpread({
      required: true
    }, options))), {}, {
      error: (_form$formState$error = form.formState.errors) === null || _form$formState$error === void 0 ? void 0 : (_form$formState$error2 = _form$formState$error[name]) === null || _form$formState$error2 === void 0 ? void 0 : _form$formState$error2.message
    });
  };

  const regField = (name, rules) => {
    return {
      name: name,
      control: form.control,
      error: form.formState.errors[name],
      rules: _objectSpread({
        required: true
      }, rules)
    };
  };

  return _objectSpread(_objectSpread({}, form), {}, {
    onSubmit,
    globalError,
    setGlobalError,
    cleanGlobalError,
    submitProps,
    register,
    regField,
    onCancel: modal.close
  });
};

/***/ }),

/***/ 72457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _avatar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26302);
/* harmony import */ var _avatar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_avatar_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);





const Avatar = props => {
  let src = "/img/avatar_male.jpg";

  if (props.gender === "FEMALE") {
    src = "/img/avatar_female.jpg";
  }

  if (props.src) {
    if (props.src.includes("/")) {
      src = props.src;
    } else {
      src = `${"https://api.chatrevolver.com"}/static/${props.src}`;
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_avatar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().avatar), props.shape === "circle" && (_avatar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().circle), props.onClick && (_avatar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().clickable), props.className),
    style: {
      width: props.size,
      height: props.size
    },
    onClick: props.onClick,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
      src: src,
      alt: ""
    }), props.online && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      className: (_avatar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().online)
    })]
  });
};
Avatar.defaultProps = {
  size: 44,
  shape: "circle"
};

/***/ }),

/***/ 37808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ FollowButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21495);
/* harmony import */ var _follow_button_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66395);
/* harmony import */ var _follow_button_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_follow_button_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_ui_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31230);
/* harmony import */ var modules_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58932);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);







const FollowButton = props => {
  const profile = shared_api__WEBPACK_IMPORTED_MODULE_3__/* .api.user.useGetUser */ .h.user.useGetUser(props.id, {
    fallbackData: props.relation ? {
      relation: props.relation
    } : undefined
  });
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  if (!profile.data) return null;
  const {
    friends,
    following,
    followsMe
  } = profile.data.relation || {};
  const onFriendRemove = shared_ui_modals__WEBPACK_IMPORTED_MODULE_4__/* .Modals.prepare */ .n.prepare(modules_user__WEBPACK_IMPORTED_MODULE_5__/* .FriendRemoveModal */ ._, {
    id: props.id,
    onSuccess: async () => {
      var _props$onUpdate;

      await profile.mutate();
      await ((_props$onUpdate = props.onUpdate) === null || _props$onUpdate === void 0 ? void 0 : _props$onUpdate.call(props));
    }
  });

  const onClick = async e => {
    if (loading) return;

    if (friends) {
      onFriendRemove();
      return;
    }

    try {
      var _props$onUpdate2;

      setLoading(true);

      if (following) {
        await shared_api__WEBPACK_IMPORTED_MODULE_3__/* .api.user.unfollowUser */ .h.user.unfollowUser(props.id);
      } else {
        await shared_api__WEBPACK_IMPORTED_MODULE_3__/* .api.user.followUser */ .h.user.followUser(props.id);
      }

      await profile.mutate();
      await ((_props$onUpdate2 = props.onUpdate) === null || _props$onUpdate2 === void 0 ? void 0 : _props$onUpdate2.call(props));
    } finally {
      setLoading(false);
    }
  };

  const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_follow_button_module_scss__WEBPACK_IMPORTED_MODULE_6___default().follow_button), props.size === "small" && (_follow_button_module_scss__WEBPACK_IMPORTED_MODULE_6___default().small), loading && (_follow_button_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loading), friends && (_follow_button_module_scss__WEBPACK_IMPORTED_MODULE_6___default().unfollow), following && (_follow_button_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cancel), !(friends || following) && (_follow_button_module_scss__WEBPACK_IMPORTED_MODULE_6___default().follow), props.className);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
    className: className,
    onClick: onClick,
    disabled: loading
  });
};
FollowButton.defaultProps = {
  size: "default"
};

/***/ }),

/***/ 58416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85764);
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icon_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);





const loadIcon = (name, overrideColor) => {
  const {
    default: svg
  } = __webpack_require__(13485)(`./${name}.svg`);

  if (!overrideColor) return svg;
  return svg.replace(/fill="(?!none)([^\"]*)"/g, `fill="currentColor"`).replace(/stroke="(?!none)([^\"]*)"/g, `stroke="currentColor"`);
};

const Icon = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_icon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon_wrap), props.className, "app-icon"),
  style: props.style,
  dangerouslySetInnerHTML: {
    __html: loadIcon(props.name, props.overrideColor)
  },
  onClick: props.onClick
});
Icon.defaultProps = {
  overrideColor: true
};

/***/ }),

/***/ 64342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radio_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27197);
/* harmony import */ var _radio_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_radio_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);






const Radio = props => {
  var _props$options;

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: (_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.map((it, key) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_radio_module_scss__WEBPACK_IMPORTED_MODULE_3___default().radio), props.className),
      style: props.style,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
        type: "radio",
        name: props.name,
        checked: props.value === it.value,
        onChange: () => {
          var _props$onChange;

          return (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, it.value);
        },
        disabled: props.disabled
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
        children: it.label
      })]
    }, key))
  });
};
Radio.defaultProps = {};

/***/ }),

/***/ 78404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _text_input_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76742);
/* harmony import */ var _text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);





const TextInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text_input), props.error && (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error)),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
      type: props.type,
      ref: ref,
      name: props.name,
      autoFocus: props.autoFocus,
      onChange: props.onChange,
      onBlur: props.onBlur,
      value: props.value,
      disabled: props.disabled
    }), props.error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_text_input_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error_text),
      children: props.error
    })]
  });
});
TextInput.defaultProps = {};

/***/ }),

/***/ 27646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ModalForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var shared_ui_modals_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8638);
/* harmony import */ var _modal_form_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81535);
/* harmony import */ var _modal_form_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modal_form_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_ui_modals_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31230);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ModalForm = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* .useIntl */ .YB)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(shared_ui_modals_modal__WEBPACK_IMPORTED_MODULE_3__/* .Modal */ .u, {
    title: props.title,
    className: props.className,
    style: props.style,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
      onSubmit: props.form.onSubmit,
      className: (_modal_form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().modal_form),
      children: [props.children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
        className: "form-error",
        children: props.form.globalError
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: (_modal_form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().buttons),
        children: [!props.hideCancel && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
          className: (_modal_form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cancel),
          onClick: () => shared_ui_modals_modals__WEBPACK_IMPORTED_MODULE_5__/* .Modals.close */ .n.close(),
          children: props.cancelText || intl.formatMessage({
            id: "modal.cancel",
            defaultMessage: "Cancel"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", _objectSpread(_objectSpread({
          type: "submit",
          disabled: props.form.submitProps.disabled
        }, props.okProps), {}, {
          children: props.okText || intl.formatMessage({
            id: "modal.ok",
            defaultMessage: "OK"
          })
        }))]
      })]
    })
  });
};

/***/ }),

/***/ 8638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54646);
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modal_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_ui_modals_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31230);
/* harmony import */ var _yoldi_utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);








const close = () => shared_ui_modals_modals__WEBPACK_IMPORTED_MODULE_3__/* .Modals.close */ .n.close();

const Modal = props => {
  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_yoldi_utils_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useClickOutside */ .O8)(contentRef, close);
  (0,_yoldi_utils_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useKeyDown */ .K7)(_yoldi_utils_hooks__WEBPACK_IMPORTED_MODULE_4__/* .KeyName.ESC */ .et.ESC, close);
  const titleCenter = props.children === undefined;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modal), props.className),
    style: props.style,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
      ref: contentRef,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
        className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().close),
        onClick: close
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title), titleCenter && (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().center)),
        children: props.title
      }), props.children]
    })
  });
};
Modal.defaultProps = {};

/***/ }),

/***/ 31230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ Modals),
/* harmony export */   "i": () => (/* binding */ ModalsRoot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable */


let state = {
  modal: null,
  props: {}
};
let updaters = [];

const useCurrentModal = () => {
  const {
    0: value,
    1: update
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(state);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updaters.push(update);
    return () => {
      updaters = updaters.filter(it => it !== update);
    };
  }, []);
  return value;
};

const updateCurrentModal = value => {
  state = value;
  updaters.forEach(it => it(value));
};

class Modals {
  static open(modal, props) {
    updateCurrentModal({
      modal,
      props
    });
  }

  static close(modal) {
    if (modal && state.modal !== modal) return;
    updateCurrentModal({
      modal: null,
      props: {}
    });
  }

  static prepare(modal, initProps = {}) {
    return (...props) => {
      const restProps = props[0] instanceof Event ? {} : props[0];
      updateCurrentModal({
        modal,
        props: _objectSpread(_objectSpread({}, initProps), restProps)
      });
    };
  }

}

_defineProperty(Modals, "useCurrent", useCurrentModal);

const ModalsRoot = () => {
  const state = useCurrentModal();
  if (!state.modal) return null;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(state.modal, _objectSpread({
    close: () => Modals.close(state.modal)
  }, state.props));
};

/***/ }),

/***/ 22413:
/***/ ((module) => {

// Exports
module.exports = {
	"chat_empty": "chat-empty_chat_empty__3SoHa",
	"text": "chat-empty_text__1MbGE"
};


/***/ }),

/***/ 34661:
/***/ ((module) => {

// Exports
module.exports = {
	"chat": "chat_chat__2EivA",
	"dark": "chat_dark__H_fWh",
	"loading": "chat_loading__IZ3Pq"
};


/***/ }),

/***/ 91795:
/***/ ((module) => {

// Exports
module.exports = {
	"day": "day_day__1WPwN"
};


/***/ }),

/***/ 51787:
/***/ ((module) => {

// Exports
module.exports = {
	"input_toolbar": "input-toolbar_input_toolbar__SB-HS",
	"input_wrapper": "input-toolbar_input_wrapper__3ETAg"
};


/***/ }),

/***/ 45550:
/***/ ((module) => {

// Exports
module.exports = {
	"message_container": "message-container_message_container__3_FNj"
};


/***/ }),

/***/ 1396:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "message_content__3yOTU",
	"time": "message_time__2vna2",
	"message": "message_message__1ViAl",
	"my": "message_my__itsbF",
	"icon": "message_icon__3SJDx",
	"read": "message_read__3iRwS"
};


/***/ }),

/***/ 27277:
/***/ ((module) => {

// Exports
module.exports = {
	"typing_indicator": "typing-indicator_typing_indicator__3YUZP",
	"dots": "typing-indicator_dots__2PGf7",
	"hide": "typing-indicator_hide__3RfPT"
};


/***/ }),

/***/ 36309:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "guest-header_menu__2Wwbw",
	"link": "guest-header_link__3S7d4",
	"language": "guest-header_language__3absf",
	"guest_header": "guest-header_guest_header__1RUSE",
	"online": "guest-header_online__2Xgql",
	"mobile_menu": "guest-header_mobile_menu__1EcYW",
	"menu_list": "guest-header_menu_list__2SOgp",
	"name": "guest-header_name__FieHX",
	"sign_in": "guest-header_sign_in__3HSSz",
	"sign_up": "guest-header_sign_up__1GnJc",
	"logo": "guest-header_logo__1PyuV",
	"logo_mobile": "guest-header_logo_mobile__2goo0",
	"loginBlock": "guest-header_loginBlock__37QM6",
	"combined": "guest-header_combined__klWYG",
	"socials": "guest-header_socials__3dNbC",
	"right": "guest-header_right__1a_Uw",
	"active": "guest-header_active__1Y9ek",
	"top": "guest-header_top__14-y2",
	"list": "guest-header_list__1MmVB",
	"log_out": "guest-header_log_out__2MB_e",
	"icon": "guest-header_icon__1yEgd",
	"label": "guest-header_label__1jCwG",
	"img": "guest-header_img__32Lxv",
	"text": "guest-header_text__7fIjd",
	"textNoWrap": "guest-header_textNoWrap__3-txt"
};


/***/ }),

/***/ 27957:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "main-layout_main__1WdiL",
	"main--frozen": "main-layout_main--frozen__iQAEf",
	"main__content": "main-layout_main__content__3LyEd",
	"main__content--classic": "main-layout_main__content--classic__SVKBn",
	"video-content__classic-text": "main-layout_video-content__classic-text__296H1",
	"main__center": "main-layout_main__center__2NrL_",
	"main__right": "main-layout_main__right__z6b5L",
	"main__right-baner": "main-layout_main__right-baner__17___",
	"main__full": "main-layout_main__full__3PVXr"
};


/***/ }),

/***/ 58731:
/***/ ((module) => {

// Exports
module.exports = {
	"message_prefix": "chat-list-panel_message_prefix__354t8"
};


/***/ }),

/***/ 28640:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "chat-panel-header_menu__2-ZJE",
	"name": "chat-panel-header_name__3wqI5",
	"user": "chat-panel-header_user__2UqaU",
	"link": "chat-panel-header_link__H8Zrc",
	"back": "chat-panel-header_back__2bzch",
	"online": "chat-panel-header_online__2tutJ",
	"chat_panel_header": "chat-panel-header_chat_panel_header__2dnR7",
	"text": "chat-panel-header_text__3bX54",
	"right": "chat-panel-header_right__1LR1E",
	"more": "chat-panel-header_more__3a_bF",
	"active": "chat-panel-header_active__3Q1F9",
	"top": "chat-panel-header_top__23NG7",
	"ava": "chat-panel-header_ava__1yUDM",
	"arrow": "chat-panel-header_arrow__IHAwU",
	"list": "chat-panel-header_list__37ZrI",
	"icon": "chat-panel-header_icon__2CsFX",
	"label": "chat-panel-header_label__1hKsv"
};


/***/ }),

/***/ 62584:
/***/ ((module) => {

// Exports
module.exports = {
	"chat_panel": "chat-panel_chat_panel__1lley",
	"content": "chat-panel_content__jfPN4",
	"chat": "chat-panel_chat__3OfLI"
};


/***/ }),

/***/ 26723:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 61271:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 81664:
/***/ ((module) => {

// Exports
module.exports = {
	"contacts_tab": "contacts-tab_contacts_tab__3ySM3",
	"item": "contacts-tab_item__2oh7K",
	"badge": "contacts-tab_badge__1LZFQ",
	"active": "contacts-tab_active__25g2L",
	"disabled": "contacts-tab_disabled__3WyNg"
};


/***/ }),

/***/ 15569:
/***/ ((module) => {

// Exports
module.exports = {
	"editable": "settings-panel_editable__1PSxt",
	"button": "settings-panel_button__3CFZd",
	"label": "settings-panel_label__1xYJo",
	"value": "settings-panel_value__2F8q4",
	"button--disabled": "settings-panel_button--disabled__3SBAh"
};


/***/ }),

/***/ 31169:
/***/ ((module) => {

// Exports
module.exports = {
	"rate": "header-user-info_rate__3SqEc",
	"menu": "header-user-info_menu__2a9gB",
	"name": "header-user-info_name__1Kj3c",
	"link": "header-user-info_link__1VsfP",
	"vip": "header-user-info_vip__1cRJK",
	"active": "header-user-info_active__2z-aB",
	"profile": "header-user-info_profile__2HqQG",
	"ava": "header-user-info_ava__TGrDi",
	"arrow": "header-user-info_arrow__2uY5y",
	"top": "header-user-info_top__H2poq",
	"list": "header-user-info_list__2BU9t",
	"log_out": "header-user-info_log_out__140LY",
	"icon": "header-user-info_icon__1C2vH",
	"label": "header-user-info_label__1jFpF"
};


/***/ }),

/***/ 87347:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "header_menu__2Xbce",
	"link": "header_link__1kAEX",
	"header": "header_header__39YA7",
	"right": "header_right__3keZR",
	"active": "header_active__1FmCt"
};


/***/ }),

/***/ 71025:
/***/ ((module) => {

// Exports
module.exports = {
	"incoming_call": "incoming-call_incoming_call__1Uh0V",
	"name": "incoming-call_name__1BdXu",
	"type": "incoming-call_type__1pn7Y",
	"button": "incoming-call_button__g6ily",
	"close": "incoming-call_close__22CFQ",
	"ava": "incoming-call_ava__3QKiV",
	"avatar": "incoming-call_avatar__1gBUa",
	"info": "incoming-call_info__LXaMz",
	"dots": "incoming-call_dots__2i4vK"
};


/***/ }),

/***/ 26302:
/***/ ((module) => {

// Exports
module.exports = {
	"avatar": "avatar_avatar__1wO8q",
	"circle": "avatar_circle__1Dlec",
	"clickable": "avatar_clickable__2TOrL",
	"online": "avatar_online__3rPyC",
	"offline": "avatar_offline__2qzyO"
};


/***/ }),

/***/ 83571:
/***/ ((module) => {

// Exports
module.exports = {
	"checkbox": "checkbox_checkbox__3LBh-"
};


/***/ }),

/***/ 66395:
/***/ ((module) => {

// Exports
module.exports = {
	"follow_button": "follow-button_follow_button__3i9Ei",
	"follow": "follow-button_follow__2CQjZ",
	"loading": "follow-button_loading__XeJN-",
	"hover": "follow-button_hover__13MwL",
	"cancel": "follow-button_cancel__1oJHq",
	"unfollow": "follow-button_unfollow__1beq1",
	"small": "follow-button_small__38ApT"
};


/***/ }),

/***/ 85764:
/***/ ((module) => {

// Exports
module.exports = {
	"icon_wrap": "icon_icon_wrap__24rDs"
};


/***/ }),

/***/ 27197:
/***/ ((module) => {

// Exports
module.exports = {
	"radio": "radio_radio__2FqpB"
};


/***/ }),

/***/ 40880:
/***/ ((module) => {

// Exports
module.exports = {
	"range": "range_range__SrsBh"
};


/***/ }),

/***/ 76742:
/***/ ((module) => {

// Exports
module.exports = {
	"text_input": "text-input_text_input__3eowW",
	"error_text": "text-input_error_text__1G-GW",
	"error": "text-input_error__14GYC"
};


/***/ }),

/***/ 45049:
/***/ ((module) => {

// Exports
module.exports = {
	"header_language": "header-language_header_language__mRXdG"
};


/***/ }),

/***/ 4934:
/***/ ((module) => {

// Exports
module.exports = {
	"header_mobile_menu": "header-mobile-menu_header_mobile_menu__2nION"
};


/***/ }),

/***/ 28494:
/***/ ((module) => {

// Exports
module.exports = {
	"header_online": "header-online_header_online__cs7TJ"
};


/***/ }),

/***/ 54496:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar_list_item": "sidebar-list-item_sidebar_list_item__3FALX",
	"title": "sidebar-list-item_title__vH2jC",
	"body": "sidebar-list-item_body__1VQCp",
	"badge": "sidebar-list-item_badge__2NOHi",
	"time": "sidebar-list-item_time__SVsPJ",
	"content": "sidebar-list-item_content__R-3s7",
	"sidebar_list_item__info-top": "sidebar-list-item_sidebar_list_item__info-top__2gWTW",
	"read": "sidebar-list-item_read__29hHr",
	"body_text": "sidebar-list-item_body_text__1vTub",
	"buttons": "sidebar-list-item_buttons__5d8YZ"
};


/***/ }),

/***/ 85700:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar_panel_empty": "sidebar-panel-empty_sidebar_panel_empty__35RDg"
};


/***/ }),

/***/ 30329:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar_panel": "sidebar-panel_sidebar_panel__JsEi6",
	"sidebar_panel__security": "sidebar-panel_sidebar_panel__security__2MOED",
	"sidebar_panel__button": "sidebar-panel_sidebar_panel__button__3PN_O",
	"sidebar_panel__age": "sidebar-panel_sidebar_panel__age__36ph0",
	"no_logo": "sidebar-panel_no_logo__37dxs",
	"logo": "sidebar-panel_logo__kbOEY",
	"sidebar_panel--contacts": "sidebar-panel_sidebar_panel--contacts__1yEQc",
	"sidebar-panel__logo": "sidebar-panel_sidebar-panel__logo__2eq8Y",
	"sidebar-panel__content": "sidebar-panel_sidebar-panel__content__AwAbI",
	"sidebar_panel--chat": "sidebar-panel_sidebar_panel--chat__3Zrcx",
	"mobile_close": "sidebar-panel_mobile_close__21Lje",
	"content": "sidebar-panel_content__2zj4-",
	"sidebar-panel-checkbox": "sidebar-panel_sidebar-panel-checkbox__1IpUQ",
	"sidebar-panel-radio": "sidebar-panel_sidebar-panel-radio__lueud",
	"sidebar-panel__security": "sidebar-panel_sidebar-panel__security__18VqX",
	"sidebar-panel__security-label": "sidebar-panel_sidebar-panel__security-label__3DWlr",
	"sidebar_panel__security-label": "sidebar-panel_sidebar_panel__security-label__10PRv",
	"sidebar_panel__security-value": "sidebar-panel_sidebar_panel__security-value__wgLqL",
	"sidebar_panel__button--disabled": "sidebar-panel_sidebar_panel__button--disabled__2g1RQ"
};


/***/ }),

/***/ 47326:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "sidebar_menu__37Z0A",
	"link": "sidebar_link__1KA9y",
	"badge": "sidebar_badge__3jQ_7",
	"label": "sidebar_label__30sED",
	"sidebar": "sidebar_sidebar__3oGmA",
	"bottom_menu": "sidebar_bottom_menu__3kbUJ",
	"sidebar_wrap": "sidebar_sidebar_wrap__yaxgw",
	"mobile_opened": "sidebar_mobile_opened__2ZmJ_",
	"mobile_close": "sidebar_mobile_close__27g3g",
	"unauthorized": "sidebar_unauthorized__YPWHJ",
	"panel_opened": "sidebar_panel_opened__2qRf_",
	"logo": "sidebar_logo__2ohS2",
	"only_mobile": "sidebar_only_mobile__1S2dv",
	"active": "sidebar_active__1UKF6"
};


/***/ }),

/***/ 81535:
/***/ ((module) => {

// Exports
module.exports = {
	"buttons": "modal-form_buttons__2aK6G",
	"modal_form": "modal-form_modal_form__1FuHJ",
	"buttons--join": "modal-form_buttons--join__2MmfU"
};


/***/ }),

/***/ 54646:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "modal_modal__3X6AH",
	"title": "modal_title__sk2tw",
	"description": "modal_description__2FHg_",
	"white": "modal_white__3pGJq",
	"modal__content": "modal_modal__content__X-szN",
	"modal__close": "modal_modal__close__1oYjK",
	"modal__title": "modal_modal__title__2tzHp",
	"video-advantages": "modal_video-advantages__l0jHR",
	"video-advantages__item": "modal_video-advantages__item__3PHCv",
	"socials__link": "modal_socials__link__28Vd2",
	"grey": "modal_grey__3wqc2",
	"w752": "modal_w752__129Ta",
	"w636": "modal_w636__3_zu1",
	"content": "modal_content__19rvM",
	"close": "modal_close__3rp0C",
	"center": "modal_center__eKGBF",
	"sidebar-panel-radio": "modal_sidebar-panel-radio__3Fl8a"
};


/***/ }),

/***/ 39949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M18.0367 20.2C16.9527 21.252 15.7567 21.088 14.6167 20.592C13.4047 20.086 12.2967 20.054 11.0167 20.592C9.42272 21.28 8.57672 21.08 7.61672 20.2C2.19672 14.62 2.99672 6.12 9.15672 5.80001C10.6507 5.88 11.6967 6.626 12.5767 6.688C13.8847 6.422 15.1367 5.66001 16.5367 5.76001C18.2187 5.896 19.4767 6.56 20.3167 7.754C16.8567 9.83399 17.6767 14.394 20.8547 15.674C20.2187 17.344 19.4027 18.994 18.0347 20.214L18.0367 20.2ZM12.4567 5.74001C12.2947 3.26001 14.3047 1.22002 16.6167 1.02002C16.9347 3.88001 14.0167 6.02 12.4567 5.74001Z\" fill=\"black\"/>\n</svg>\n");

/***/ }),

/***/ 35878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"10\" height=\"18\" viewBox=\"0 0 10 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M8.82003 0.660026L9.53003 1.36003L1.89003 9.00003L9.53003 16.64L8.82003 17.34L0.48003 9.00003L8.82003 0.660026Z\" fill=\"#2A2A2A\"/>\n</svg>\n");

/***/ }),

/***/ 29531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6 0.235809C7.5913 0.235809 9.11742 0.843106 10.2426 1.9241C11.3679 3.0051 12 4.47124 12 6C12 7.52876 11.3679 8.99491 10.2426 10.0759C9.11742 11.1569 7.5913 11.7642 6 11.7642C4.4087 11.7642 2.88258 11.1569 1.75736 10.0759C0.632141 8.99491 0 7.52876 0 6C0 4.47124 0.632141 3.0051 1.75736 1.9241C2.88258 0.843106 4.4087 0.235809 6 0.235809V0.235809ZM6 1.19651C5.34339 1.19651 4.69321 1.32075 4.08658 1.56215C3.47995 1.80355 2.92876 2.15737 2.46447 2.60342C1.52678 3.50425 1 4.72604 1 6C1 7.15284 1.425 8.20961 2.13 9.04061L9.165 2.2821C8.27231 1.57969 7.15389 1.19608 6 1.19651ZM6 10.8035C7.32608 10.8035 8.59785 10.2974 9.53553 9.39659C10.4732 8.49576 11 7.27397 11 6C11 4.84716 10.575 3.79039 9.87 2.95939L2.835 9.71791C3.72769 10.4203 4.84611 10.8039 6 10.8035Z\" fill=\"#A0A5AB\"/>\n</svg>\n");

/***/ }),

/***/ 58530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path\n            fill-rule=\"evenodd\"\n            clip-rule=\"evenodd\"\n            d=\"M24 20C24 15.5817 20.4183 12 16 12H8C3.58172 12 0 15.5817 0 20V24C0 28.4183 3.58172 32 8 32V36L12 32H16C20.4183 32 24 28.4183 24 24V20ZM16 13C19.866 13 23 16.134 23 20V24C23 27.866 19.866 31 16 31H11.5858L9 33.5858V31H8C4.13401 31 1 27.866 1 24V20C1 16.134 4.13401 13 8 13H16Z\"\n            fill=\"#F2F7F7\"\n    />\n    <path\n            fill-rule=\"evenodd\"\n            clip-rule=\"evenodd\"\n            d=\"M36 4.5C36 2.01472 33.9853 0 31.5 0H16.5C14.0147 0 12 2.01472 12 4.5V8.1H13V4.5C13 2.567 14.567 1 16.5 1H31.5C33.433 1 35 2.567 35 4.5V15.5C35 17.433 33.433 19 31.5 19H27.8333V20H31.5C33.9853 20 36 17.9853 36 15.5V4.5Z\"\n            fill=\"#F2F7F7\"\n    />\n</svg>\n");

/***/ }),

/***/ 54029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle r=\"7.5\" transform=\"matrix(-1 0 0 1 24 10)\" stroke=\"#F2F7F7\"/>\n    <path\n            fill-rule=\"evenodd\"\n            clip-rule=\"evenodd\"\n            d=\"M13 32.9998V30.8468C13 28.4874 14.2155 26.2944 16.2163 25.0439C20.9786 22.0674 27.0214 22.0674 31.7837 25.0439C33.7845 26.2944 35 28.4874 35 30.8468V32.9998H13ZM32.3137 24.1959C34.6069 25.6291 36 28.1426 36 30.8468V33.9998H12V30.8468C12 28.1426 13.3931 25.6291 15.6863 24.1959C20.7729 21.0167 27.2271 21.0167 32.3137 24.1959Z\"\n            fill=\"#F2F7F7\"\n    />\n    <path\n            fill-rule=\"evenodd\"\n            clip-rule=\"evenodd\"\n            d=\"M14.2765 4.8468C14.5017 4.58997 14.7434 4.34696 15 4.11928C13.8553 2.82275 12.1478 2 10.2404 2C6.79394 2 4 4.68629 4 8C4 11.3137 6.79394 14 10.2404 14C11.2631 14 12.2284 13.7635 13.0802 13.3442C12.9349 13.0409 12.8087 12.7273 12.7031 12.4049C11.9701 12.7846 11.1314 13 10.2404 13C7.36835 13 5.04007 10.7614 5.04007 8C5.04007 5.23858 7.36835 3 10.2404 3C11.8692 3 13.323 3.7199 14.2765 4.8468Z\"\n            fill=\"#F2F7F7\"\n    />\n    <path\n            fill-rule=\"evenodd\"\n            clip-rule=\"evenodd\"\n            d=\"M8.00008 30H1.00008H7.62939e-05V29V25.9173C7.62939e-05 23.7728 1.03575 21.7603 2.78081 20.5138C6.30633 17.9956 10.7561 17.4 14.7188 18.727C14.2151 18.9071 13.7186 19.1138 13.2312 19.347C9.88052 18.5837 6.27915 19.2439 3.36205 21.3275C1.87978 22.3863 1.00008 24.0957 1.00008 25.9173V29H8.00008V30Z\"\n            fill=\"#F2F7F7\"\n    />\n</svg>\n");

/***/ }),

/***/ 28613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"40\" height=\"36\" viewBox=\"0 0 40 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"17.7572\" cy=\"13.7576\" r=\"11.5\" transform=\"rotate(-45 17.7572 13.7576)\" stroke=\"#F2F7F7\"/>\n    <path d=\"M26.2427 22.2429L34.728 30.7281\" stroke=\"#F2F7F7\"/>\n</svg>\n");

/***/ }),

/***/ 65422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"1\" height=\"32\" transform=\"matrix(-1 0 0 1 24.5 4)\" fill=\"#F2F7F7\"/>\n    <rect width=\"1\" height=\"32\" transform=\"matrix(-1 0 0 1 1 4)\" fill=\"#F2F7F7\"/>\n    <rect width=\"1\" height=\"32\" transform=\"matrix(-1 0 0 1 12.5 0)\" fill=\"#F2F7F7\"/>\n    <rect width=\"1\" height=\"32\" transform=\"matrix(-1 0 0 1 36 0)\" fill=\"#F2F7F7\"/>\n    <rect width=\"7\" height=\"1\" transform=\"matrix(-1 0 0 1 27.5 23)\" fill=\"#F2F7F7\"/>\n    <rect width=\"7\" height=\"1\" transform=\"matrix(-1 0 0 1 15.5 12)\" fill=\"#F2F7F7\"/>\n</svg>\n");

/***/ }),

/***/ 93303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"black\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M0.00564079 9.01149C-0.174239 4.37136 3.97412 0.0833128 8.71493 0.0276795C11.1312 -0.174234 13.482 0.745078 15.3105 2.24445C14.5604 3.0525 13.7972 3.85121 12.982 4.59895C11.3722 3.64073 9.43406 2.9105 7.55266 3.55903C4.51813 4.40559 2.68041 7.91594 3.80337 10.8244C4.73335 13.8621 8.50448 15.5292 11.46 14.2531C12.9904 13.7162 13.9994 12.3328 14.4421 10.8462C12.6882 10.812 10.9338 10.8334 9.17992 10.7859C9.17555 9.76351 9.17118 8.745 9.17555 7.72259C12.1005 7.71831 15.0298 7.70975 17.9591 7.73543C18.139 10.2405 17.7617 12.9214 16.0995 14.932C13.8234 17.8019 9.6183 18.6442 6.19741 17.5183C2.56685 16.35 -0.0733794 12.7665 0.00564079 9.01149Z\"/>\n</svg>\n");

/***/ }),

/***/ 25375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M12.42 13.5L12.67 7H11.33L11.58 13.5H12.42ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 15.54C11.8655 15.54 11.734 15.5799 11.6222 15.6546C11.5104 15.7293 11.4232 15.8355 11.3718 15.9598C11.3203 16.084 11.3068 16.2208 11.3331 16.3527C11.3593 16.4846 11.4241 16.6057 11.5192 16.7008C11.6143 16.7959 11.7354 16.8607 11.8673 16.8869C11.9993 16.9132 12.136 16.8997 12.2602 16.8482C12.3845 16.7968 12.4907 16.7096 12.5654 16.5978C12.6401 16.486 12.68 16.3545 12.68 16.22C12.6814 16.1303 12.6647 16.0413 12.631 15.9582C12.5973 15.8751 12.5473 15.7996 12.4838 15.7362C12.4204 15.6727 12.3449 15.6227 12.2618 15.589C12.1787 15.5553 12.0897 15.5387 12 15.54Z\" fill=\"#DD4113\"/>\n</svg>");

/***/ }),

/***/ 83581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M20 11.5C19.8815 9.54963 19.0532 7.71008 17.6716 6.32841C16.2899 4.94675 14.4504 4.11852 12.5 4V1H11.5V4C9.54963 4.11852 7.71008 4.94675 6.32841 6.32841C4.94675 7.71008 4.11852 9.54963 4 11.5H1V12.5H4C4.11852 14.4504 4.94675 16.2899 6.32841 17.6716C7.71008 19.0532 9.54963 19.8815 11.5 20V23H12.5V20C14.4504 19.8815 16.2899 19.0532 17.6716 17.6716C19.0532 16.2899 19.8815 14.4504 20 12.5H23V11.5H20ZM12 19C10.6155 19 9.26215 18.5895 8.11101 17.8203C6.95986 17.0511 6.06266 15.9579 5.53284 14.6788C5.00303 13.3997 4.86441 11.9922 5.1345 10.6344C5.4046 9.2765 6.07128 8.02922 7.05025 7.05025C8.02922 6.07128 9.2765 5.4046 10.6344 5.1345C11.9922 4.86441 13.3997 5.00303 14.6788 5.53284C15.9579 6.06266 17.0511 6.95986 17.8203 8.11101C18.5895 9.26215 19 10.6155 19 12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19ZM12 11.25C11.8517 11.25 11.7067 11.294 11.5833 11.3764C11.46 11.4588 11.3639 11.5759 11.3071 11.713C11.2503 11.85 11.2355 12.0008 11.2644 12.1463C11.2934 12.2918 11.3648 12.4254 11.4697 12.5303C11.5746 12.6352 11.7082 12.7066 11.8537 12.7356C11.9992 12.7645 12.15 12.7497 12.287 12.6929C12.4241 12.6361 12.5412 12.54 12.6236 12.4167C12.706 12.2933 12.75 12.1483 12.75 12C12.7474 11.8019 12.6676 11.6126 12.5275 11.4725C12.3874 11.3324 12.1981 11.2526 12 11.25Z\"\n          stroke=\"red\"/>\n</svg>\n");

/***/ }),

/***/ 18575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"21\" height=\"18\" viewBox=\"0 0 21 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M2.20906 8.5L5.70906 5L4.99906 4.29L0.289062 9L4.99906 13.71L5.70906 13L2.20906 9.5H8.99906V8.5H2.20906ZM8.99906 0V8.5H14.9991V9.5H8.99906V18H20.9991V0H8.99906Z\" fill=\"green\" />\n</svg>\n");

/***/ }),

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M8 12H13V11H8V12ZM8 9H16V8H8V9ZM19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V24L8 18H19C19.7956 18 20.5587 17.6839 21.1213 17.1213C21.6839 16.5587 22 15.7956 22 15V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7.59L7.29 17.29L3 21.59V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z\" fill=\"#F2F7F7\"/>\n</svg>\n");

/***/ }),

/***/ 77029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"20\" height=\"20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M10 4.375a1.042 1.042 0 100-2.083 1.042 1.042 0 000 2.083zm0 4.583a1.042 1.042 0 100 2.084 1.042 1.042 0 000-2.084zm0 6.667a1.041 1.041 0 100 2.083 1.041 1.041 0 000-2.083z\"\n          fill=\"#F2F7F7\"/>\n</svg>\n");

/***/ }),

/***/ 83857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 22.99 12C21.26 7.61 16.99 4.5 11.99 4.5C10.59 4.5 9.25 4.75 8.01 5.2L10.17 7.36C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.74 7.01C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z\"\n          fill=\"#2A2A2A\" fill-opacity=\"0.56\"/>\n</svg>\n");

/***/ }),

/***/ 78822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z\" fill=\"#2A2A2A\" fill-opacity=\"0.56\"/>\n</svg>\n");

/***/ }),

/***/ 5562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M4.74953 9.20014L0.644531 5.09514L1.35453 4.39014L4.74953 7.78514L10.6445 1.89014L11.3545 2.59514L4.74953 9.20014Z\" fill=\"#F2F7F7\"/>\n</svg>\n");

/***/ }),

/***/ 6875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M24 12L2 1L4.8 11.27L19.15 12.01L4.78 12.79L2 23L24 12Z\" fill=\"#2A2A2A\"/>\n</svg>\n");

/***/ }),

/***/ 57144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle r=\"5.5\" transform=\"matrix(-1 0 0 1 18 18)\" stroke=\"#F2F7F7\"/>\n    <path\n            fill-rule=\"evenodd\"\n            clip-rule=\"evenodd\"\n            d=\"M14.0244 5.86378L18 1.03292L21.9756 5.86379C22.4128 6.39499 23.0857 6.67373 23.7704 6.60723L29.9975 6.00246L29.3928 12.2296C29.3263 12.9143 29.605 13.5872 30.1362 14.0244L34.9671 18L30.1362 21.9756C29.605 22.4128 29.3263 23.0857 29.3928 23.7704L29.9975 29.9975L23.7704 29.3928C23.0857 29.3263 22.4128 29.605 21.9756 30.1362L18 34.9671L14.0244 30.1362C13.5872 29.605 12.9143 29.3263 12.2296 29.3928L6.00246 29.9975L6.60722 23.7704C6.67372 23.0857 6.39499 22.4128 5.86378 21.9756L1.03292 18L5.86378 14.0244C6.39499 13.5872 6.67372 12.9143 6.60722 12.2296L6.00246 6.00246L12.2296 6.60723C12.9143 6.67373 13.5872 6.39499 14.0244 5.86378ZM17.2024 0.376557C17.6156 -0.12552 18.3844 -0.125519 18.7976 0.376558L22.7732 5.20742C22.9917 5.47303 23.3282 5.61239 23.6706 5.57914L29.8977 4.97438C30.5449 4.91153 31.0885 5.45512 31.0256 6.10231L30.4209 12.3294C30.3876 12.6718 30.527 13.0083 30.7926 13.2268L35.6234 17.2024C36.1255 17.6156 36.1255 18.3844 35.6234 18.7976L30.7926 22.7732C30.527 22.9918 30.3876 23.3282 30.4209 23.6706L31.0256 29.8977C31.0885 30.5449 30.5449 31.0885 29.8977 31.0256L23.6706 30.4209C23.3282 30.3876 22.9917 30.527 22.7732 30.7926L18.7976 35.6234C18.3844 36.1255 17.6156 36.1255 17.2024 35.6234L13.2268 30.7926C13.0082 30.527 12.6718 30.3876 12.3294 30.4209L6.10231 31.0256C5.45512 31.0885 4.91152 30.5449 4.97438 29.8977L5.57914 23.6706C5.61239 23.3282 5.47302 22.9918 5.20742 22.7732L0.376553 18.7976C-0.125523 18.3844 -0.125523 17.6156 0.376553 17.2024L5.20742 13.2268C5.47302 13.0083 5.61239 12.6718 5.57914 12.3294L4.97438 6.10231C4.91152 5.45512 5.45512 4.91152 6.1023 4.97438L12.3294 5.57914C12.6718 5.61239 13.0082 5.47303 13.2268 5.20742L17.2024 0.376557Z\"\n            fill=\"#F2F7F7\"\n    />\n</svg>\n");

/***/ }),

/***/ 50741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M19.27 5H15V4C15 3.46957 14.7893 2.96086 14.4142 2.58579C14.0391 2.21071 13.5304 2 13 2H11C10.4696 2 9.96086 2.21071 9.58579 2.58579C9.21071 2.96086 9 3.46957 9 4V5H3V6H4.82L6.26 22H17.74L19.18 6H21V5H19.27ZM10 4C10 3.73478 10.1054 3.48043 10.2929 3.29289C10.4804 3.10536 10.7348 3 11 3H13C13.2652 3 13.5196 3.10536 13.7071 3.29289C13.8946 3.48043 14 3.73478 14 4V5H10V4ZM16.82 21H7.18L5.82 6H18.18L16.82 21ZM14.08 10.21L12 12.29L9.92 10.21L9.21 10.92L11.29 13L9.21 15.08L9.92 15.79L12 13.71L14.08 15.79L14.79 15.08L12.71 13L14.79 10.92L14.08 10.21Z\"\n          fill=\"#F2F7F7\"/>\n</svg>\n");

/***/ }),

/***/ 12598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M12 15.5C11.409 15.5011 10.8237 15.385 10.2778 15.1585C9.73197 14.9319 9.23648 14.5993 8.82 14.18L8.11 14.89C8.62076 15.401 9.22719 15.8064 9.89465 16.0829C10.5621 16.3595 11.2775 16.5018 12 16.5018C12.7225 16.5018 13.4379 16.3595 14.1054 16.0829C14.7728 15.8064 15.3792 15.401 15.89 14.89L15.18 14.18C14.7635 14.5993 14.268 14.9319 13.7222 15.1585C13.1764 15.385 12.591 15.5011 12 15.5ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21Z\" fill=\"#F2F7F7\"/>\n</svg>\n");

/***/ }),

/***/ 73646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M8.38 8.55H7.38V11.5H4.43V12.5H7.43V15.45H8.43V12.5H11.37V11.5H8.38V8.55ZM22 5L15 9.9V7C15 6.46957 14.7893 5.96086 14.4142 5.58579C14.0391 5.21071 13.5304 5 13 5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17V14.1L22 19H23V5H22ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H13C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7V17ZM22 17.78L15 12.88V11.12L22 6.22V17.78Z\" fill=\"#F2F7F7\"/>\n</svg>\n");

/***/ }),

/***/ 910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"20\" height=\"12\" viewBox=\"0 0 20 12\" fill=\"black\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M16.5964 6.88114C16.2731 6.46114 16.3656 6.27429 16.5964 5.89886C16.6006 5.89457 19.2698 2.10086 19.5448 0.814286L19.5465 0.813428C19.6832 0.344571 19.5465 0 18.8857 0H16.6989C16.1422 0 15.8856 0.295714 15.748 0.626571C15.748 0.626571 14.6347 3.36771 13.0596 5.14457C12.5513 5.658 12.3163 5.82257 12.0388 5.82257C11.9021 5.82257 11.6896 5.658 11.6896 5.18914V0.813428C11.6896 0.251143 11.5337 0 11.0729 0H7.63443C7.28525 0 7.07775 0.262286 7.07775 0.506572C7.07775 1.03971 7.86527 1.16229 7.94694 2.66229V5.91686C7.94694 6.63 7.8211 6.76114 7.54193 6.76114C6.79857 6.76114 4.99434 4.00886 3.92514 0.858857C3.7093 0.247714 3.49845 0.000857081 2.9376 0.000857081H0.750026C0.125838 0.000857081 0 0.296571 0 0.627428C0 1.212 0.743359 4.11857 3.45679 7.95857C5.26518 10.5797 7.81194 12 10.1287 12C11.5212 12 11.6912 11.6846 11.6912 11.142C11.6912 8.63743 11.5654 8.40086 12.2629 8.40086C12.5863 8.40086 13.143 8.56543 14.443 9.82971C15.9289 11.3289 16.1731 12 17.0048 12H19.1915C19.8149 12 20.1307 11.6846 19.949 11.0623C19.5332 9.75343 16.7231 7.06114 16.5964 6.88114Z\"/>\n</svg>\n");

/***/ }),

/***/ 9399:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.json": 15676,
	"./ru.json": 64550
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9399;

/***/ }),

/***/ 13485:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./apple.svg": 39949,
	"./arrow-left.svg": 35878,
	"./cancel.svg": 29531,
	"./chats.svg": 58530,
	"./contacts.svg": 54029,
	"./dating.svg": 28613,
	"./filters.svg": 65422,
	"./google.svg": 93303,
	"./input-error.svg": 25375,
	"./location.svg": 83581,
	"./logout.svg": 18575,
	"./message.svg": 168,
	"./more.svg": 77029,
	"./password-hide.svg": 83857,
	"./password-show.svg": 78822,
	"./read.svg": 5562,
	"./send.svg": 6875,
	"./settings.svg": 57144,
	"./trash.svg": 50741,
	"./unfollow.svg": 12598,
	"./video.svg": 73646,
	"./vk.svg": 910
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 13485;

/***/ }),

/***/ 72431:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 97020:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/WzggJ__plIdHaq8xJ9K4o/_buildManifest.js","static/WzggJ__plIdHaq8xJ9K4o/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/chunks/937-7e1325f38ce733bf42d9.js","static/css/2375073335fe8709d79a.css","static/chunks/pages/index-7e26e0c5ba0e0b951dbb.js"],"/_app":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/css/162729660e1d01d7584e.css","static/chunks/pages/_app-e27c5a2ecc95e956fa0a.js"],"/_error":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/chunks/pages/_error-737a04e9a0da63c9d162.js"],"/auth/confirm-email":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/css/3aba47416d7abc2eed8b.css","static/chunks/pages/auth/confirm-email-2cfd252eae5bd5fb1ed0.js"],"/auth/login":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/css/a75d582ad56d537540eb.css","static/chunks/pages/auth/login-5a794f25c4fe53e833a0.js"],"/auth/oauth":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/chunks/pages/auth/oauth-ec6d7975071cb71d0477.js"],"/auth/recovery":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/css/8062dd68dcb5d6c447d1.css","static/chunks/pages/auth/recovery-5322ed33a3de41866ec5.js"],"/auth/recovery/new-password":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/css/8062dd68dcb5d6c447d1.css","static/chunks/pages/auth/recovery/new-password-c5ec66ee584c7c6cd73d.js"],"/auth/sign-up":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/css/9b566573a95b6fc63ae3.css","static/chunks/pages/auth/sign-up-078a3982aba59886ae88.js"],"/dating":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/css/ed8b8d11e3668133b7f0.css","static/chunks/pages/dating-b1ebb1e66cacc822e6c7.js"],"/faq":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/chunks/pages/faq-bcde0031b8665320f363.js"],"/faq/[slug]":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/css/63096e39acf556f5a8cc.css","static/chunks/pages/faq/[slug]-f4a5194ae2d865b1549c.js"],"/profile":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/chunks/391-9b8e2f2537368ba605d0.js","static/css/ba95b588071bcc9a880c.css","static/chunks/524-6b4ee05f2dd73b62a426.js","static/css/e2c389bedfd16af63ba6.css","static/chunks/pages/profile-f1049cfcee04a8e8cbe0.js"],"/profile/[id]":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/chunks/391-9b8e2f2537368ba605d0.js","static/css/ba95b588071bcc9a880c.css","static/chunks/524-6b4ee05f2dd73b62a426.js","static/css/ee6bbcaf3fbfbb43a90a.css","static/chunks/pages/profile/[id]-51aec761cba4f38e163e.js"],"/profile/[id]/call":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/chunks/391-9b8e2f2537368ba605d0.js","static/css/ba95b588071bcc9a880c.css","static/chunks/524-6b4ee05f2dd73b62a426.js","static/css/1e51a28b037ea5e4b1e4.css","static/chunks/pages/profile/[id]/call-c2834407584b46dca71b.js"],"/profile/edit":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/chunks/391-9b8e2f2537368ba605d0.js","static/css/3e86e5bbeece4250c17e.css","static/chunks/pages/profile/edit-db45d5036894908e40bb.js"],"/rating":["static/chunks/webpack-f204667324d5318658b8.js","static/chunks/framework-6185f5752b3ea2ba4ba6.js","static/chunks/main-89e612c37cd79392e22d.js","static/chunks/391-9b8e2f2537368ba605d0.js","static/css/ba95b588071bcc9a880c.css","static/chunks/524-6b4ee05f2dd73b62a426.js","static/chunks/937-7e1325f38ce733bf42d9.js","static/css/021d3b871dc47164d86a.css","static/chunks/pages/rating-dad21ebb2711c5a8dfa7.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"../modules/video-chat/model/web-rtc.ts -> peerjs":{"id":5391,"files":["static/chunks/783.5eb7e303d985833de957.js","static/chunks/784.ac5e4d7fc7fb5a5fc8e4.js"]}}');

/***/ }),

/***/ 15676:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"menu.about":"About","menu.faq":"FAQ","menu.sign_up_with_email":"Sign up with email","menu.sign_in":"Sign in","menu.sign_up_sign_in":"Sign up / Sign in","menu.classic":"Classic","menu.rate":"Rate chat","video_chat.my_video.no_stream":"your video will appear here","video_chat.classic.title":"Join us and get access to more features / <a>Learn more</a>","video_chat.advantages.0.title":"Search Filter","video_chat.advantages.0.description":"Chat with only who are needed","video_chat.advantages.1.title":"Contacts","video_chat.advantages.1.description":"You can chat with follow friends","video_chat.advantages.2.title":"Chats","video_chat.advantages.2.description":"You can follow friends","shared.online":"{value} online","video_chat.controls.start":"Start","faq.support_modal.title":"Support help","faq.support_modal.type":"Type of the issue","faq.support_modal.text":"What is the issue?","faq.titles.what-is":"What is Revolver?","faq.titles.register":"How to use Revolver?","faq.titles.rating":"Why do you need a rating?","faq.titles.privacy":"How anonymous is the chat?","faq.titles.help":"How to help the project?","faq.titles.terms-of-use":"Terms of use","faq.titles.privacy-policy":"Processing of personal data","modal.cancel":"Cancel","auth.tabs.sign_up":"Sign up","auth.tabs.sign_in":"Sign in","auth.sign_up.checkbox":"I’m 18 y.o. I agree with <a>service rules</a>","auth.sign_up.submit":"Sign up","auth.login.recovery_link":"I forgot my password","auth.login.submit":"Sign in","auth.social_login.or_with":"or with","input.username":"Username (Max 10 symbols)","input.password":"Password","input.new_password":"Password (Latin, number, min 6 symbols)","test-project.1591897782877.generated_i18n_0":"A user typing ...","test-project.1591897837764.generated_i18n_0":"Photos","test-project.1591897837764.generated_i18n_1":"Add photo","test-project.1591897857715.generated_i18n_0":"Incoming call ...","test-project.1591897857715.generated_i18n_1":"Pick up the phone","test-project.1591897890831.generated_i18n_0":"We sent you a email","test-project.1591897890831.generated_i18n_1":"email","test-project.1591897890831.generated_i18n_2":"Follow the link from the email to complete sign up","test-project.1591897906807.generated_i18n_0":"retain","test-project.1591897919068.generated_i18n_0":"retain","test-project.1591898137150.generated_i18n_0":"Password","test-project.1591898137150.generated_i18n_1":"Your email","test-project.1591898137150.generated_i18n_2":"Your name","test-project.1591897925412.generated_i18n_0":"Confirm new email","test-project.1591897925412.generated_i18n_1":"We sent an email to your email. Clicking the link in the email to confirm your email address.","test-project.1591897926752.generated_i18n_0":"DELETE CHAT FOREVER?","test-project.1591897926752.generated_i18n_1":"NO","test-project.1591897926752.generated_i18n_2":"YES, DELETE IT","test-project.1591897927618.generated_i18n_0":"DELETE PROFILE","test-project.1591897927618.generated_i18n_1":"NO","test-project.1591897927618.generated_i18n_2":"YES, DELETE IT","test-project.1591897930935.generated_i18n_0":"Email sent","test-project.1591897957563.generated_i18n_0":"Sign in","test-project.1591897957563.generated_i18n_1":"Email","test-project.1591897957563.generated_i18n_2":"password","test-project.1591897957563.generated_i18n_3":"I forgot my password","test-project.1591897957563.generated_i18n_4":"SIGN IN","test-project.1591897957563.generated_i18n_5":"Or with","test-project.1591897957563.generated_i18n_6":"In contact with","test-project.1591897957563.generated_i18n_7":"Google","test-project.1591897961732.generated_i18n_0":"Password changed","test-project.1591897963451.generated_i18n_0":"We sent an email to your address. Clicking the link in the email to retrieve the password.","test-project.1591897963451.generated_i18n_1":"Email","test-project.1591897963451.generated_i18n_2":"SEND","test-project.1591897963451.generated_i18n_3":"RESTORE PASSWORD","test-project.1591897980274.generated_i18n_0":"Subscribe","test-project.1591897980274.generated_i18n_1":"Sign in","test-project.1591897980274.generated_i18n_2":"name","test-project.1591897980274.generated_i18n_3":"Email","test-project.1591897980274.generated_i18n_4":"password","test-project.1591897980274.generated_i18n_5":"SUBSCRIBE","test-project.1591897980274.generated_i18n_6":"Or with","test-project.1591897980274.generated_i18n_7":"In contact with","test-project.1591897980274.generated_i18n_8":"Google","test-project.1591897988526.generated_i18n_0":"report sent","test-project.1591898089594.generated_i18n_0":"Your email","test-project.1591898089594.generated_i18n_1":"Submit","test-project.1591898094393.generated_i18n_0":"Describe what\'s wrong","test-project.1591898094393.generated_i18n_1":"Submit","test-project.1591898097307.generated_i18n_0":"report","test-project.1591898110040.generated_i18n_0":"Email","test-project.1591898110040.generated_i18n_1":"SEND","test-project.1591898110040.generated_i18n_2":"RESTORE PASSWORD","test-project.1591898118634.generated_i18n_0":"Password (Latin, number, at least 6 characters)","test-project.1591898118634.generated_i18n_1":"Confirm password","test-project.1591898118634.generated_i18n_2":"SEND","test-project.1591898118634.generated_i18n_3":"RESTORE PASSWORD","test-project.1591898130097.generated_i18n_0":"send","test-project.1591898162812.generated_i18n_0":"How do you rate me?","test-project.1591898162812.generated_i18n_1":"Report this user","test-project.1591898177883.generated_i18n_0":"ago","test-project.1591898184280.generated_i18n_0":"CONTACTS","test-project.1591898184280.generated_i18n_1":"INQUIRIES","test-project.1591898208837.generated_i18n_0":"Man","test-project.1591898208837.generated_i18n_1":"Woman","test-project.1591898208837.generated_i18n_2":"any","test-project.1591898208837.generated_i18n_3":"Age","test-project.1591898208837.generated_i18n_4":"The maximum distance","test-project.1591898208837.generated_i18n_5":"Preferred rating","test-project.1591898208837.generated_i18n_6":"with rated only","test-project.1591898208837.generated_i18n_7":"any","test-project.1591898222477.generated_i18n_0":"CONFIDENTIALITY","test-project.1591898222477.generated_i18n_1":"Everyone can see","test-project.1591898222477.generated_i18n_2":"Userpic","test-project.1591898222477.generated_i18n_3":"Status","test-project.1591898222477.generated_i18n_4":"Profile Information","test-project.1591898222477.generated_i18n_5":"Photos","test-project.1591898222477.generated_i18n_6":"My rating may see","test-project.1591898222477.generated_i18n_7":"SAFETY","test-project.1591898222477.generated_i18n_8":"password","test-project.1591898242295.generated_i18n_0":"Chats","test-project.1591898242295.generated_i18n_1":"contacts","test-project.1591898242295.generated_i18n_2":"Filter","test-project.1591898242295.generated_i18n_3":"settings","test-project.1591898289740.generated_i18n_0":"About me","test-project.1591898296157.generated_i18n_0":"retain","test-project.1591898299412.generated_i18n_0":"Tags","test-project.1591898283897.generated_i18n_0":"km from you","test-project.1591898283897.generated_i18n_1":"report","test-project.1591897637552.generated_i18n_0":"Edit profile","test-project.1591897637552.generated_i18n_1":"User Name","test-project.1591897637552.generated_i18n_2":"Another field","test-project.1591897637552.generated_i18n_3":"Gender","test-project.1591897637552.generated_i18n_4":"Country","test-project.1591897637552.generated_i18n_5":"City","test-project.1591897637552.generated_i18n_6":"Tags","test-project.1591897637552.generated_i18n_7":"About me","test-project.1591897637552.generated_i18n_8":"Save","test-project.1591899546692.generated_i18n_0":"Save","test-project.1591899551748.generated_i18n_0":"Save","test-project.1591899570615.generated_i18n_0":"Sign up","test-project.1591899570615.generated_i18n_1":"Sign in","test-project.1591899570615.generated_i18n_2":"Email","test-project.1591899570615.generated_i18n_3":"Password","test-project.1591899570615.generated_i18n_4":"I\'ve forgot my password","test-project.1591899570615.generated_i18n_5":"SIGN IN","test-project.1591899570615.generated_i18n_6":"or with","test-project.1591899570615.generated_i18n_7":"VK","test-project.1591899570615.generated_i18n_8":"Google","test-project.1591899598846.generated_i18n_0":"We sent an email to your email. Clicking the link in the email to retrieve the password.","test-project.1591899598846.generated_i18n_1":"Email","test-project.1591899598846.generated_i18n_2":"SEND","test-project.1591899598846.generated_i18n_3":"RECOVER PASSWORD","test-project.1591899604768.generated_i18n_0":"Sign up","test-project.1591899604768.generated_i18n_1":"Sign in","test-project.1591899604768.generated_i18n_2":"Name","test-project.1591899604768.generated_i18n_3":"Email","test-project.1591899604768.generated_i18n_4":"Password","test-project.1591899604768.generated_i18n_5":"SIGN UP","test-project.1591899604768.generated_i18n_6":"or with","test-project.1591899604768.generated_i18n_7":"VK","test-project.1591899604768.generated_i18n_8":"Google","test-project.1591899619359.generated_i18n_0":"Email","test-project.1591899619359.generated_i18n_1":"SEND","test-project.1591899619359.generated_i18n_2":"RECOVER PASSWORD","test-project.1591899624252.generated_i18n_0":"Password","test-project.1591899624252.generated_i18n_1":"Confirm password","test-project.1591899624252.generated_i18n_2":"SEND","test-project.1591899624252.generated_i18n_3":"RESTORE PASSWORD","test-project.1591899630439.generated_i18n_0":"Send","test-project.1592824639461.generated_i18n_0":"Id","test-project.1592824639461.generated_i18n_1":"Name","test-project.1592824639461.generated_i18n_2":"Male","test-project.1592824639461.generated_i18n_3":"Female","test-project.1592824639461.generated_i18n_4":"Undefined","test-project.1592824639461.generated_i18n_5":"Any","test-project.1592824639461.generated_i18n_6":"Country","test-project.1592824639461.generated_i18n_7":"City","test-project.1592825145319.generated_i18n_0":"classical","test-project.1592825145319.generated_i18n_1":"rate chat","test-project.1592825145319.generated_i18n_2":"About","test-project.1592825145319.generated_i18n_3":"FAQ","test-project.1592825145319.generated_i18n_4":"Subscribe to email","test-project.1592825145319.generated_i18n_5":"Sign in","test-project.1592825181711.generated_i18n_0":"classic","test-project.1592825181711.generated_i18n_1":"rate chat","test-project.1592825181711.generated_i18n_2":"About","test-project.1592825181711.generated_i18n_3":"Sign up","test-project.1592825181711.generated_i18n_4":"Sign in","test-project.1592825181711.generated_i18n_5":"Sign up / Sing in","test-project.1592825181711.generated_i18n_6":"My profile","test-project.1592825181711.generated_i18n_7":"Help","test-project.1592825181711.generated_i18n_8":"Sing out","test-project.1592824716930.generated_i18n_0":"Report","test-project.1592824716930.generated_i18n_1":"Let\'s start to chat!","test-project.1592824716930.generated_i18n_2":"Just say \'hello\'","test-project.1592824716930.generated_i18n_3":"User is typing ...","test-project.1592824716930.generated_i18n_4":"Back","test-project.1592824716930.generated_i18n_5":"Profile","test-project.1592824716930.generated_i18n_6":"Video call","test-project.1592824716930.generated_i18n_7":"Delete chat","test-project.1592824716930.generated_i18n_8":"Report","test-project.1592824716930.generated_i18n_9":"Let\'s start to chat!","test-project.1592824716930.generated_i18n_10":"Just say \'hello\'","test-project.1592824716930.generated_i18n_11":"User is typing ...","test-project.1592824716930.generated_i18n_12":"You can\'t send messages to user","test-project.1592824819926.generated_i18n_0":"Report sent","test-project.1592824844128.generated_i18n_0":"Report this user","test-project.1592824844128.generated_i18n_1":"What is the problem?","test-project.1592824844128.generated_i18n_2":"Insults and threats","test-project.1592824844128.generated_i18n_3":"Violent threats","test-project.1592824844128.generated_i18n_4":"Child endangerment","test-project.1592824844128.generated_i18n_5":"Hate speech against a protected group","test-project.1592824844128.generated_i18n_6":"Spam and scams","test-project.1592824844128.generated_i18n_7":"Confidentiality","test-project.1592824844128.generated_i18n_8":"None of them is not your problem","test-project.1592824844128.generated_i18n_9":"Report","test-project.1592824903386.generated_i18n_0":"You have no messages","test-project.1592824922431.generated_i18n_0":"You have no contacts","test-project.1592824922431.generated_i18n_1":"Contacts","test-project.1592824922431.generated_i18n_2":"Requests","test-project.1592824963507.generated_i18n_0":"Filter search","test-project.1592824963507.generated_i18n_1":"Do not show sexual content","test-project.1592824963507.generated_i18n_2":"Gender:","test-project.1592824963507.generated_i18n_3":"Male","test-project.1592824963507.generated_i18n_4":"Female","test-project.1592824963507.generated_i18n_5":"Any","test-project.1592824963507.generated_i18n_6":"Age:","test-project.1592824963507.generated_i18n_7":"Location:","test-project.1592824963507.generated_i18n_8":"Closest","test-project.1592824963507.generated_i18n_9":"Any","test-project.1592824963507.generated_i18n_10":"Rating:","test-project.1592824963507.generated_i18n_11":"Only with high rating","test-project.1592824963507.generated_i18n_12":"Any","test-project.1592824992343.generated_i18n_0":"Confidentiality","test-project.1592824992343.generated_i18n_1":"Everyone can see:","test-project.1592824992343.generated_i18n_2":"Userpic","test-project.1592824992343.generated_i18n_3":"Status","test-project.1592824992343.generated_i18n_4":"only for follow-up contacts","test-project.1592824992343.generated_i18n_5":"Profile information","test-project.1592824992343.generated_i18n_6":"Photo","test-project.1592824992343.generated_i18n_7":"My rating you can see:","test-project.1592824992343.generated_i18n_8":"All","test-project.1592824992343.generated_i18n_9":"Contacts only","test-project.1592824992343.generated_i18n_10":"Nobody","test-project.1592824992343.generated_i18n_11":"Safety","test-project.1592824992343.generated_i18n_12":"Password","test-project.1592824992343.generated_i18n_13":"updated a month ago","test-project.1592824992343.generated_i18n_14":"Email","test-project.1592824992343.generated_i18n_15":"a***@gmail.com","test-project.1592824992343.generated_i18n_16":"Email notification","test-project.1592824992343.generated_i18n_17":"New messages","test-project.1592824992343.generated_i18n_18":"Request friend","test-project.1592824992343.generated_i18n_19":"Site news","test-project.1592824992343.generated_i18n_20":"Delete account","test-project.1592825037424.generated_i18n_0":"Chats","test-project.1592825037424.generated_i18n_1":"Contacts","test-project.1592825037424.generated_i18n_2":"Filter","test-project.1592825037424.generated_i18n_3":"Settings","test-project.1592825037424.generated_i18n_4":"About","test-project.1592825037424.generated_i18n_5":"FAQ","test-project.1592825037424.generated_i18n_6":"In Eng","test-project.1592825094540.generated_i18n_0":"Save","test-project.1592825082571.generated_i18n_0":"km from you","test-project.1592825082571.generated_i18n_1":"report","test-project.1592825227411.generated_i18n_0":"Update photo","test-project.1592825227411.generated_i18n_1":"Edit","test-project.1592825227411.generated_i18n_2":"Name","test-project.1592825227411.generated_i18n_3":"Day","test-project.1592825227411.generated_i18n_4":"Date","test-project.1592825227411.generated_i18n_5":"Month","test-project.1592825227411.generated_i18n_6":"Year","test-project.1592825227411.generated_i18n_7":"Gender","test-project.1592825227411.generated_i18n_8":"Not selected, nothing is selected","test-project.1592825227411.generated_i18n_9":"Country","test-project.1592825227411.generated_i18n_10":"Not selected","test-project.1592825227411.generated_i18n_11":"City","test-project.1592825227411.generated_i18n_12":"Tags","test-project.1592825227411.generated_i18n_13":"About me","test-project.1592825227411.generated_i18n_14":"Save","test-project.1592825240673.generated_i18n_0":"Filter search","test-project.1592825240673.generated_i18n_1":"Chat with those who are important to you","test-project.1592825240673.generated_i18n_2":"Сontacts","test-project.1592825240673.generated_i18n_3":"You can follow to friends \' news","test-project.1592825240673.generated_i18n_4":"Chats","test-project.1592825240673.generated_i18n_5":"You can chat with friends","test-project.1592825247569.generated_i18n_0":"Classic chat is anonymous and random /","test-project.1592825247569.generated_i18n_1":"Rating chat will give you a chance to find love","test-project.1592825259743.generated_i18n_0":"FAQ","test-project.1592825259743.generated_i18n_1":"Support","test-project.1592825259743.generated_i18n_2":"What is Revolver?","test-project.1592825259743.generated_i18n_3":"How can I use Revolver?","test-project.1592825259743.generated_i18n_4":"There Revolver for free?","test-project.1592825259743.generated_i18n_5":"Can I use the Revolver anywhere in the world?","test-project.1592825259743.generated_i18n_6":"What is the minimum age?","test-project.1592825259743.generated_i18n_7":"Can I use anywhere in the world?","test-project.1592825279616.generated_i18n_0":"Switch on","test-project.1592825279616.generated_i18n_1":"Microphone OFF","test-project.1592825285483.generated_i18n_0":"Start","test-project.1592825285483.generated_i18n_1":"Stop","test-project.1592825285483.generated_i18n_2":"Stop","test-project.1592825285483.generated_i18n_3":"Next","test-project.1592825285483.generated_i18n_4":"Stop","test-project.1592825292096.generated_i18n_0":"join us and get acsess to a large number of functions /","test-project.1592825292096.generated_i18n_1":"learn more","test-project.1592825306893.generated_i18n_0":"Email","test-project.1592825306893.generated_i18n_1":"Password","test-project.1592825306893.generated_i18n_2":"Send","test-project.1592825317763.generated_i18n_0":"Email confirmed","test-project.1592825317763.generated_i18n_1":"Go to main","test-project.1592825320736.generated_i18n_0":"Enter your email","test-project.1592825320736.generated_i18n_1":"Continue","test-project.1592825364466.generated_i18n_0":"You need to provide access to your camera and microphone to start","test-project.1592825364466.generated_i18n_1":"Report","test-project.1592825364466.generated_i18n_2":"About me:","test-project.1592825364466.generated_i18n_3":"PHOTO","test-project.1592825364466.generated_i18n_4":"Add photos","test-project.1592825364466.generated_i18n_5":"Error loading photos","test-project.1592825364466.generated_i18n_6":"You need to provide access to your camera and microphone to start","test-project.1592825421445.generated_i18n_0":"You need to provide access to your camera and microphone to start","test-project.1592825421445.generated_i18n_1":"Report","test-project.1592825421445.generated_i18n_2":"About me:","test-project.1592825421445.generated_i18n_3":"Video call","test-project.1592825421445.generated_i18n_4":"PHOTO","test-project.1592825421445.generated_i18n_5":"Add photos","test-project.1592825421445.generated_i18n_6":"Error uploading a photo","test-project.1592825433090.generated_i18n_0":"Profile deleted","test-project.1592825437801.generated_i18n_0":"Loading...","test-project.1592825480116.generated_i18n_0":"Loadind...","test-project.1592825480116.generated_i18n_1":"Update photo","test-project.1592825480116.generated_i18n_2":"Редактировать","test-project.1592825480116.generated_i18n_3":"Update location","test-project.1592825480116.generated_i18n_4":"About me:","test-project.1592825480116.generated_i18n_5":"PHOTO","test-project.1592825480116.generated_i18n_6":"Add photos","test-project.1592825364466.title":"Revolver video chat","test-project.1592825364466.description":"Revolver  video chat","test-project.1592825421445.title":"Profile {username}","test-project.1592825421445.description":"User profile","test-project.1592825433090.title":"User deleted","test-project.1592825433090.description":"User deleted","test-project.1592825480116.title":"Profile {username}","test-project.1592825480116.description":"My profile","test-project.1592825317763.title":"Email confirmed!","test-project.1592825317763.description":"Email confirmed!","test-project.1592825320736.title":"Only mail left!","test-project.1592825320736.description":"Only mail left!","test-project.techworks-page.title":"Technical works","test-project.techworks-page.description":"Technical works","test-project.techworks-page.works":"Technical works","test-project.techworks-page.patience":"Thank you for waiting❤️","test-project.1593093663538.generated_i18n_0":"Classic","test-project.1593093663538.generated_i18n_1":"Rate chat","test-project.1593093663538.generated_i18n_2":"About","test-project.1593093663538.generated_i18n_3":"Sign up","test-project.1592825094540.edit_status":"Change status","test-project.stream.there_will_be_yourvideo":"Image from your camera will appear here","test-project.1592825480116.lets_complete":"Let’s complete the profile!","test-project.1592825480116.why_complete":"You should add infomation into your profile for better experience in communication","test-project.1592825480116.man":"Male","test-project.1592825480116.female":"Female","revolver.backend_errors.activation_code_not_found":"ACTIVATION CODE NOT FOUND","revolver.backend_errors.user_locked":"USER LOCKED","revolver.backend_errors.email_incorrect_format":"Invalid email","revolver.backend_errors.bad_oauth":"BAD OAUTH","revolver.backend_errors.need_email":"NEED EMAIL","revolver.backend_errors.unknown":"UNKNOWN","revolver.backend_errors.user_not_found":"The user with this email address does not exist","revolver.backend_errors.recovery_code_not_found":"Invalid password recovery code","revolver.backend_errors.user_not_activated":"Email is not confirmed","revolver.backend_errors.wrong_password":"Wrong password","revolver.backend_errors.email_in_use":"This Email already exists. Try sign in to your account","revolver.backend_errors.ILLEGAL_STATE_NO_RIGHTS":"ILLEGAL_STATE_NO_RIGHTS","revolver.backend_errors._ignore_this_message":"..","revolver.validation.email":"Invalid email","revolver.validation.required":"This field is required","revolver.validation.positive":"Should be positive","revolver.validation.digits":"Invalid phone number","revolver.validation.date":"Time format DD. MM. YYYY","revolver.validation.min_length":"The password is min {len} characters","test-project.1591899604768.title":"Sign up","test-project.1591899604768.description":"Sign up Revolver","revolver.login-page.title":"Sign in","revolver.login-page.description":"Sign in Revolver","revolver.login-page.email":"Email","revolver.recover-password-new-page.title":"Set a new password","revolver.recover-password-new-page.description":"Set a new password","revolver.recover-password-new-page.password_new":"Password (min 6 symbols\')","revolver.recover-password-new-page.password_repeat":"Repeat password","revolver.recover-password-sent-page.title":"The link to the password recovery sent","revolver.recover-password-sent-page.description":"The link to the password recovery sent","revolver.recover-password-sent-page.back":"Back","revolver.recover-password-sent-page.sent":"We sent a message to the specified email. Follow the link to complete registration!","revolver.recover-password-sent-page.recover":"Password recovery","revolver.recover-password-sent-page.email":"Email","revolver.recover-password-page.title":"Password recovery","revolver.recover-password-page.description":"Password recovery","test-project.1592825259743.terms":"Пользовательское соглашение","test-project.1592825259743.privacy":"Обработка персональных данных","revolver.faq-titles._what_is_":"What is Revolver and why do I need it?","revolver.faq-titles.link_what_is":"What is Revolver?","revolver.faq-titles.link_how_use":"How do I use Revolver?","revolver.faq-titles.register":"How and why do I register?","revolver.faq-titles.rating":"Why do I need a rating mode?","revolver.faq-titles.link_rating":"Why do I need a rating?","revolver.faq-titles.privacy":"Is it all anonymous?","revolver.faq-titles.link_privacy":"Is it all anonymous?","revolver.faq-titles.help":"How can I help the project?","revolver.faq-titles.link_help":"How can I help the project?","revolver.faq-titles._terms_of_use_":"Personal data processing agreement","revolver.faq-titles._privacy_policy_":"User agreement","test-project.1591899604768.i_agree":"I am already 18 years old and I agree with","test-project.1591899604768.service_rules":"service rules","test-project.1591899604768.sign_up":"Sign up","revolver.login-page.signup":"Sign up","revolver.login-page.signin":"Sign in","revolver.login-page.or_with":"or with","revolver.login-page.forgot_password":"Fogot password?","revolver.login-page.password":"Password","revolver.login-page.sign_me_in":"Sign in","revolver.faq-titles.terms":"User agreement","revolver.faq-titles.privacy_policy":"Personal data processing","revolver.validation.max_length":""}');

/***/ }),

/***/ 64550:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"menu.about":"О сервисе","menu.faq":"Вопросы и ответы","menu.sign_up_with_email":"Зарегистрируйтесь с почтой","menu.sign_in":"Войти","menu.sign_up_sign_in":"Зарегистрироваться / Войти","menu.classic":"Классический чат","menu.rate":"Чат с рейтингом","video_chat.my_video.no_stream":"ваше видео появится здесь","video_chat.classic.title":"Присоединяйтесь и получите доступ к дополнительным функциям / <a>Узнать больше</a>","video_chat.advantages.0.title":"Фильтр поиска","video_chat.advantages.0.description":"Общайтесь только с теми, кто вам нужен","video_chat.advantages.1.title":"Контакты","video_chat.advantages.1.description":"Вы можете общаться с друзьями","video_chat.advantages.2.title":"Чаты","video_chat.advantages.2.description":"Вы можете подписаться на друзей","shared.online":"{value} в сети","video_chat.controls.start":"Начать","faq.support_modal.title":"Написать в поддержку","faq.support_modal.type":"Тип проблемы","faq.support_modal.text":"В чем проблема?","faq.titles.what-is":"Что такое Revolver?","faq.titles.register":"Как пользоваться Revolver?","faq.titles.rating":"Зачем нужен рейтинг?","faq.titles.privacy":"Насколько все анонимно?","faq.titles.help":"Как помочь проекту?","faq.titles.terms-of-use":"Пользовательское соглашение","faq.titles.privacy-policy":"Обработка персональных данных","modal.cancel":"Отмена","auth.tabs.sign_up":"Регистрация","auth.tabs.sign_in":"Вход","auth.sign_up.checkbox":"Мне есть 18 лет и я согласен с <a>пользовательским соглашением</a>","auth.sign_up.submit":"Зарегистрироваться","auth.login.recovery_link":"Я забыл пароль","auth.login.submit":"Войти","auth.social_login.or_with":"или с помощью","input.username":"Имя пользователя (макс. 10 символов)","input.password":"Пароль","input.new_password":"Пароль (буквы, цифры, мин. 6 символов)","test-project.1591897782877.generated_i18n_0":"Пользователь набрав ...","test-project.1591897837764.generated_i18n_0":"Фотографии","test-project.1591897837764.generated_i18n_1":"Добавить фото","test-project.1591897857715.generated_i18n_0":"Входящий звонок ...","test-project.1591897857715.generated_i18n_1":"Ответить на звонок","test-project.1591897890831.generated_i18n_0":"Мы отправили вам на почту","test-project.1591897890831.generated_i18n_1":"письмо","test-project.1591897890831.generated_i18n_2":"Перейдите по ссылке из почты для завершения регистрации","test-project.1591897906807.generated_i18n_0":"Сохранить","test-project.1591897919068.generated_i18n_0":"Сохранить","test-project.1591898137150.generated_i18n_0":"Пароль","test-project.1591898137150.generated_i18n_1":"Ваш адрес электронной почты","test-project.1591898137150.generated_i18n_2":"Ваше имя","test-project.1591897925412.generated_i18n_0":"Подтвердить новую почту","test-project.1591897925412.generated_i18n_1":"Мы отправили письмо на ваш адрес. Кликнув по ссылке в письме, чтобы подтвердить адрес электронной почты.","test-project.1591897926752.generated_i18n_0":"УДАЛИТЬ ЧАТ НАВСЕГДА?","test-project.1591897926752.generated_i18n_1":"НЕТ","test-project.1591897926752.generated_i18n_2":"ДА, УДАЛИТЬ","test-project.1591897927618.generated_i18n_0":"УД","test-project.1591897927618.generated_i18n_1":"НЕТ","test-project.1591897927618.generated_i18n_2":"ДА, УДАЛИТЬ","test-project.1591897930935.generated_i18n_0":"Письмо отправлено","test-project.1591897957563.generated_i18n_0":"войти в систему","test-project.1591897957563.generated_i18n_1":"Электронное письмо","test-project.1591897957563.generated_i18n_2":"пароль","test-project.1591897957563.generated_i18n_3":"я забыл мой пароль","test-project.1591897957563.generated_i18n_4":"ВОЙТИ В СИСТЕМУ","test-project.1591897957563.generated_i18n_5":"Или с","test-project.1591897957563.generated_i18n_6":"Вконтакте","test-project.1591897957563.generated_i18n_7":"Google","test-project.1591897961732.generated_i18n_0":"Пароль изменен","test-project.1591897963451.generated_i18n_0":"Мы отправили письмо на ваш адрес. Кликнув по ссылке в письме, чтобы восстановить пароль.","test-project.1591897963451.generated_i18n_1":"Электронное письмо","test-project.1591897963451.generated_i18n_2":"ОТПРАВИТЬ","test-project.1591897963451.generated_i18n_3":"ВОССТАНОВИТЬ ПАРОЛЬ","test-project.1591897980274.generated_i18n_0":"Подписаться","test-project.1591897980274.generated_i18n_1":"войти в систему","test-project.1591897980274.generated_i18n_2":"имя","test-project.1591897980274.generated_i18n_3":"Электронное письмо","test-project.1591897980274.generated_i18n_4":"пароль","test-project.1591897980274.generated_i18n_5":"ПОДПИСАТЬСЯ","test-project.1591897980274.generated_i18n_6":"Или с","test-project.1591897980274.generated_i18n_7":"Вконтакте","test-project.1591897980274.generated_i18n_8":"Google","test-project.1591897988526.generated_i18n_0":"отчет отправлен","test-project.1591898089594.generated_i18n_0":"Ваш адрес электронной почты","test-project.1591898089594.generated_i18n_1":"Разместить","test-project.1591898094393.generated_i18n_0":"Опишите, что случилось","test-project.1591898094393.generated_i18n_1":"Сохранить","test-project.1591898097307.generated_i18n_0":"доклад","test-project.1591898110040.generated_i18n_0":"Электронное письмо","test-project.1591898110040.generated_i18n_1":"ОТПРАВИТЬ","test-project.1591898110040.generated_i18n_2":"ВОССТАНОВИТЬ ПАРОЛЬ","test-project.1591898118634.generated_i18n_0":"Пароль (Latin, число, не менее 6 символов)","test-project.1591898118634.generated_i18n_1":"Повторите пароль","test-project.1591898118634.generated_i18n_2":"ОТПРАВИТЬ","test-project.1591898118634.generated_i18n_3":"ВОССТАНОВИТЬ ПАРОЛЬ","test-project.1591898130097.generated_i18n_0":"послать","test-project.1591898162812.generated_i18n_0":"Как вы оцениваете меня?","test-project.1591898162812.generated_i18n_1":"Пожаловаться на пользователя","test-project.1591898177883.generated_i18n_0":"назад","test-project.1591898184280.generated_i18n_0":"КОНТАКТЫ","test-project.1591898184280.generated_i18n_1":"ЗАПРОСЫ","test-project.1591898208837.generated_i18n_0":"мужчина","test-project.1591898208837.generated_i18n_1":"Женщина","test-project.1591898208837.generated_i18n_2":"Любые","test-project.1591898208837.generated_i18n_3":"Возраст","test-project.1591898208837.generated_i18n_4":"Максимальное расстояние","test-project.1591898208837.generated_i18n_5":"Preferred рейтинг","test-project.1591898208837.generated_i18n_6":"Только с высоким рейтингом","test-project.1591898208837.generated_i18n_7":"Любые","test-project.1591898222477.generated_i18n_0":"КОНФИДЕНЦИАЛЬНОСТЬ","test-project.1591898222477.generated_i18n_1":"Каждый может видеть","test-project.1591898222477.generated_i18n_2":"Userpic","test-project.1591898222477.generated_i18n_3":"Положение дел","test-project.1591898222477.generated_i18n_4":"Информация о профиле","test-project.1591898222477.generated_i18n_5":"Фотографии","test-project.1591898222477.generated_i18n_6":"Мой рейтинг может видеть","test-project.1591898222477.generated_i18n_7":"БЕЗОПАСНОСТЬ","test-project.1591898222477.generated_i18n_8":"пароль","test-project.1591898242295.generated_i18n_0":"Чаты","test-project.1591898242295.generated_i18n_1":"контакты","test-project.1591898242295.generated_i18n_2":"Фильтр","test-project.1591898242295.generated_i18n_3":"настройки","test-project.1591898289740.generated_i18n_0":"Обо мне","test-project.1591898296157.generated_i18n_0":"Сохранить","test-project.1591898299412.generated_i18n_0":"Теги","test-project.1591898283897.generated_i18n_0":"км от вас","test-project.1591898283897.generated_i18n_1":"отчет","test-project.1591897637552.generated_i18n_0":"Редактировать","test-project.1591897637552.generated_i18n_1":"Имя","test-project.1591897637552.generated_i18n_2":"Другое поле","test-project.1591897637552.generated_i18n_3":"Пол","test-project.1591897637552.generated_i18n_4":"Страна","test-project.1591897637552.generated_i18n_5":"Город","test-project.1591897637552.generated_i18n_6":"Теги","test-project.1591897637552.generated_i18n_7":"Обо мне","test-project.1591897637552.generated_i18n_8":"Сохранить","test-project.1591899546692.generated_i18n_0":"Сохранить","test-project.1591899551748.generated_i18n_0":"Сохранить","test-project.1591899570615.generated_i18n_0":"Регистрация","test-project.1591899570615.generated_i18n_1":"Войти","test-project.1591899570615.generated_i18n_2":"Эл. адрес","test-project.1591899570615.generated_i18n_3":"Пароль","test-project.1591899570615.generated_i18n_4":"Я забыл свой пароль","test-project.1591899570615.generated_i18n_5":"Вход","test-project.1591899570615.generated_i18n_6":"или через социальные сети","test-project.1591899570615.generated_i18n_7":"Вконтакте","test-project.1591899570615.generated_i18n_8":"Google","test-project.1591899598846.generated_i18n_0":"Sign up","test-project.1591899598846.generated_i18n_1":"Email","test-project.1591899598846.generated_i18n_2":"ОТПРАВИТЬ","test-project.1591899598846.generated_i18n_3":"ВОССТАНОВИТЬ ПАРОЛЬ","test-project.1591899604768.generated_i18n_0":"Регистрация","test-project.1591899604768.generated_i18n_1":"Войти","test-project.1591899604768.generated_i18n_2":"Имя","test-project.1591899604768.generated_i18n_3":"Email","test-project.1591899604768.generated_i18n_4":"Пароль","test-project.1591899604768.generated_i18n_5":"РЕГИСТРАЦИЯ","test-project.1591899604768.generated_i18n_6":"или через социальные сети","test-project.1591899604768.generated_i18n_7":"Вконтакте","test-project.1591899604768.generated_i18n_8":"Google","test-project.1591899619359.generated_i18n_0":"Почта","test-project.1591899619359.generated_i18n_1":"ОТПРАВИТЬ","test-project.1591899619359.generated_i18n_2":"ВОССТАНОВИТЬ ПАРОЛЬ","test-project.1591899624252.generated_i18n_0":"Пароль","test-project.1591899624252.generated_i18n_1":"Повторите пароль","test-project.1591899624252.generated_i18n_2":"ОТПРАВИТЬ","test-project.1591899624252.generated_i18n_3":"ВОССТАНОВИТЬ ПАРОЛЬ","test-project.1591899630439.generated_i18n_0":"Отправить","test-project.1592824639461.generated_i18n_0":"Id","test-project.1592824639461.generated_i18n_1":"Имя","test-project.1592824639461.generated_i18n_2":"Мужчина","test-project.1592824639461.generated_i18n_3":"Женщина","test-project.1592824639461.generated_i18n_4":"Неопределенный","test-project.1592824639461.generated_i18n_5":"Любой","test-project.1592824639461.generated_i18n_6":"Страна","test-project.1592824639461.generated_i18n_7":"Город","test-project.1592825145319.generated_i18n_0":"классический","test-project.1592825145319.generated_i18n_1":"рейтинговый","test-project.1592825145319.generated_i18n_2":"О проекте","test-project.1592825145319.generated_i18n_3":"FAQ","test-project.1592825145319.generated_i18n_4":"Подписаться на новости","test-project.1592825145319.generated_i18n_5":"Вход","test-project.1592825181711.generated_i18n_0":"классика","test-project.1592825181711.generated_i18n_1":"рейтинг","test-project.1592825181711.generated_i18n_2":"О проекте","test-project.1592825181711.generated_i18n_3":"Регистрация","test-project.1592825181711.generated_i18n_4":"Вход","test-project.1592825181711.generated_i18n_5":"Регистрация / Вход","test-project.1592825181711.generated_i18n_6":"Профиль","test-project.1592825181711.generated_i18n_7":"Помощь","test-project.1592825181711.generated_i18n_8":"Выйти","test-project.1592824716930.generated_i18n_0":"Пожаловаться","test-project.1592824716930.generated_i18n_1":"Давайте начнем общаться!","test-project.1592824716930.generated_i18n_2":"Просто скажи \\"Привет\\"","test-project.1592824716930.generated_i18n_3":"Пользователь печатает ...","test-project.1592824716930.generated_i18n_4":"Назад","test-project.1592824716930.generated_i18n_5":"Профиль","test-project.1592824716930.generated_i18n_6":"Видеозвонок","test-project.1592824716930.generated_i18n_7":"Удалить чат","test-project.1592824716930.generated_i18n_8":"Жалоба","test-project.1592824716930.generated_i18n_9":"Давайте начнем общаться!","test-project.1592824716930.generated_i18n_10":"Просто скажи \\"Привет\\"","test-project.1592824716930.generated_i18n_11":"Пользователь печатает ...","test-project.1592824716930.generated_i18n_12":"Вы не можете отправлять сообщения пользователя","test-project.1592824819926.generated_i18n_0":"Жалоба отправлена","test-project.1592824844128.generated_i18n_0":"Пожаловаться на пользователя","test-project.1592824844128.generated_i18n_1":"В чем проблема?","test-project.1592824844128.generated_i18n_2":"Оскорбления и угрозы","test-project.1592824844128.generated_i18n_3":"Насильственные угрозы","test-project.1592824844128.generated_i18n_4":"Насилие над детьми","test-project.1592824844128.generated_i18n_5":"Ненависть к меньшинствам","test-project.1592824844128.generated_i18n_6":"Спам и мошенничество","test-project.1592824844128.generated_i18n_7":"Нарущение конфиденциальности","test-project.1592824844128.generated_i18n_8":"Здесь нет подходящей проблемы","test-project.1592824844128.generated_i18n_9":"Сообщить","test-project.1592824903386.generated_i18n_0":"У вас нет сообщений","test-project.1592824922431.generated_i18n_0":"У вас нет контактов","test-project.1592824922431.generated_i18n_1":"Контакты","test-project.1592824922431.generated_i18n_2":"Заявки","test-project.1592824963507.generated_i18n_0":"Фильтр","test-project.1592824963507.generated_i18n_1":"Не показывать эротический контент","test-project.1592824963507.generated_i18n_2":"Пол:","test-project.1592824963507.generated_i18n_3":"Мужчина","test-project.1592824963507.generated_i18n_4":"Женщина","test-project.1592824963507.generated_i18n_5":"Любой","test-project.1592824963507.generated_i18n_6":"Возраст:","test-project.1592824963507.generated_i18n_7":"Расположение:","test-project.1592824963507.generated_i18n_8":"Ближе всех","test-project.1592824963507.generated_i18n_9":"Любое","test-project.1592824963507.generated_i18n_10":"Рейтинг:","test-project.1592824963507.generated_i18n_11":"Только с высоким рейтингом","test-project.1592824963507.generated_i18n_12":"Любой","test-project.1592824992343.generated_i18n_0":"Конфиденциальность","test-project.1592824992343.generated_i18n_1":"Каждый может видеть:","test-project.1592824992343.generated_i18n_2":"Аватар","test-project.1592824992343.generated_i18n_3":"Статус","test-project.1592824992343.generated_i18n_4":"только для друзей","test-project.1592824992343.generated_i18n_5":"Общая информация","test-project.1592824992343.generated_i18n_6":"Фото","test-project.1592824992343.generated_i18n_7":"Мой рейтинг можно увидеть:","test-project.1592824992343.generated_i18n_8":"Все","test-project.1592824992343.generated_i18n_9":"Только друзья","test-project.1592824992343.generated_i18n_10":"Никто","test-project.1592824992343.generated_i18n_11":"Безопасность","test-project.1592824992343.generated_i18n_12":"Пароль","test-project.1592824992343.generated_i18n_13":"обновлен месяц назад","test-project.1592824992343.generated_i18n_14":"Email","test-project.1592824992343.generated_i18n_15":"a***@gmail.com","test-project.1592824992343.generated_i18n_16":"Уведомление по электронной почте","test-project.1592824992343.generated_i18n_17":"Новые сообщения","test-project.1592824992343.generated_i18n_18":"Запросы в друзья","test-project.1592824992343.generated_i18n_19":"Новости сайта","test-project.1592824992343.generated_i18n_20":"Удалить аккаунт","test-project.1592825037424.generated_i18n_0":"Чаты","test-project.1592825037424.generated_i18n_1":"Контакты","test-project.1592825037424.generated_i18n_2":"Фильтр","test-project.1592825037424.generated_i18n_3":"Настройки","test-project.1592825037424.generated_i18n_4":"О проекте","test-project.1592825037424.generated_i18n_5":"FAQ","test-project.1592825037424.generated_i18n_6":"In Eng","test-project.1592825094540.generated_i18n_0":"Сохранить","test-project.1592825082571.generated_i18n_0":"км от вас","test-project.1592825082571.generated_i18n_1":"жалоба","test-project.1592825227411.generated_i18n_0":"Обновить фото","test-project.1592825227411.generated_i18n_1":"Редактировать","test-project.1592825227411.generated_i18n_2":"Имя","test-project.1592825227411.generated_i18n_3":"День","test-project.1592825227411.generated_i18n_4":"Дата","test-project.1592825227411.generated_i18n_5":"Месяц","test-project.1592825227411.generated_i18n_6":"Год","test-project.1592825227411.generated_i18n_7":"Пол","test-project.1592825227411.generated_i18n_8":"Не выбрано, ничего не выбрано","test-project.1592825227411.generated_i18n_9":"Страна","test-project.1592825227411.generated_i18n_10":"Не выбрано,","test-project.1592825227411.generated_i18n_11":"Город","test-project.1592825227411.generated_i18n_12":"Теги","test-project.1592825227411.generated_i18n_13":"Обо мне","test-project.1592825227411.generated_i18n_14":"Сохранить","test-project.1592825240673.generated_i18n_0":"Фильтр поиска","test-project.1592825240673.generated_i18n_1":"Общайтесь только с важными людьми","test-project.1592825240673.generated_i18n_2":"Контакты","test-project.1592825240673.generated_i18n_3":"Будьте в курсе новостей друзей","test-project.1592825240673.generated_i18n_4":"Чаты","test-project.1592825240673.generated_i18n_5":"Вы можете общаться с друзьями","test-project.1592825247569.generated_i18n_0":"Классический чат анонимный и случайный /","test-project.1592825247569.generated_i18n_1":"Рейтинговый чат даст вам шанс найти вторую половинку","test-project.1592825259743.generated_i18n_0":"FAQ","test-project.1592825259743.generated_i18n_1":"Помощь","test-project.1592825259743.generated_i18n_2":"Что такое Revolver?","test-project.1592825259743.generated_i18n_3":"Как я могу использовать Revolver?","test-project.1592825259743.generated_i18n_4":"Revolver - бесплатный?","test-project.1592825259743.generated_i18n_5":"Могу ли я использовать Revolver в любой точке мира?","test-project.1592825259743.generated_i18n_6":"Каков минимальный возраст?","test-project.1592825259743.generated_i18n_7":"Могу ли я использовать в любой точке мира?","test-project.1592825279616.generated_i18n_0":"Включить","test-project.1592825279616.generated_i18n_1":"Микрофон выключен","test-project.1592825285483.generated_i18n_0":"Начать","test-project.1592825285483.generated_i18n_1":"Стоп","test-project.1592825285483.generated_i18n_2":"Стоп","test-project.1592825285483.generated_i18n_3":"Следующий","test-project.1592825285483.generated_i18n_4":"Стоп","test-project.1592825292096.generated_i18n_0":"присоединиться к нам и получить доступ к большому количеству функций /","test-project.1592825292096.generated_i18n_1":"узнать больше","test-project.1592825306893.generated_i18n_0":"Email","test-project.1592825306893.generated_i18n_1":"Пароль","test-project.1592825306893.generated_i18n_2":"Отправить","test-project.1592825317763.generated_i18n_0":"Email подтвержден","test-project.1592825317763.generated_i18n_1":"Перейти на главную страницу","test-project.1592825320736.generated_i18n_0":"Введите Ваш email","test-project.1592825320736.generated_i18n_1":"Продолжить","test-project.1592825364466.generated_i18n_0":"Вы должны предоставить доступ к вашей камере и микрофону для запуска","test-project.1592825364466.generated_i18n_1":"Жалоба","test-project.1592825364466.generated_i18n_2":"Обо мне:","test-project.1592825364466.generated_i18n_3":"ФОТО","test-project.1592825364466.generated_i18n_4":"Добавить фотографии","test-project.1592825364466.generated_i18n_5":"Ошибка при загрузке фотографии","test-project.1592825364466.generated_i18n_6":"Вы должны предоставить доступ к вашей камере и микрофону для запуска","test-project.1592825421445.generated_i18n_0":"Вы должны предоставить доступ к вашей камере и микрофону для запуска","test-project.1592825421445.generated_i18n_1":"Жалоба","test-project.1592825421445.generated_i18n_2":"Обо мне:","test-project.1592825421445.generated_i18n_3":"Видеозвонок","test-project.1592825421445.generated_i18n_4":"ФОТО","test-project.1592825421445.generated_i18n_5":"Добавить фотографии","test-project.1592825421445.generated_i18n_6":"Ошибка при загрузке фотографии","test-project.1592825433090.generated_i18n_0":"Профиль удален","test-project.1592825437801.generated_i18n_0":"Загрузка","test-project.1592825480116.generated_i18n_0":"Загрузка","test-project.1592825480116.generated_i18n_1":"Обновление Фото","test-project.1592825480116.generated_i18n_2":"Редактировать профиль","test-project.1592825480116.generated_i18n_3":"Обновление местоположения","test-project.1592825480116.generated_i18n_4":"Обо мне:","test-project.1592825480116.generated_i18n_5":"ФОТО","test-project.1592825480116.generated_i18n_6":"Добавить фотографии","test-project.1592825364466.title":"Revolver - рандомный видео-чат с поиском по геолокации и рейтингом","test-project.1592825364466.description":"Revolver видео чат","test-project.1592825421445.title":"Профиль {username}","test-project.1592825421445.description":"Профиль пользователя","test-project.1592825433090.title":"Пользователь удален","test-project.1592825433090.description":"Пользователь удален","test-project.1592825480116.title":"Профиль {username}","test-project.1592825480116.description":"Мой профиль","test-project.1592825317763.title":"Почта подтверждена!","test-project.1592825317763.description":"Почта подтверждена!","test-project.1592825320736.title":"Осталась только почта!","test-project.1592825320736.description":"Осталась только почта!","test-project.techworks-page.title":"Технические работы","test-project.techworks-page.description":"Ведутся технические работы","test-project.techworks-page.works":"Ведутся технические работы","test-project.techworks-page.patience":"Благодарим за ожидание ❤️","test-project.1593093663538.generated_i18n_0":"Классика","test-project.1593093663538.generated_i18n_1":"Рейтинг","test-project.1593093663538.generated_i18n_2":"О проекте","test-project.1593093663538.generated_i18n_3":"Регистрация","test-project.1592825094540.edit_status":"Изменить статус","test-project.stream.there_will_be_yourvideo":"здесь появится изображение с твоей камеры","test-project.1592825480116.lets_complete":"Давай закончим регистрацию!","test-project.1592825480116.why_complete":"Заполни профиль, чтобы другие могли узнать тебя ближе!","test-project.1592825480116.man":"Мужчина","test-project.1592825480116.female":"Женщина","revolver.backend_errors.activation_code_not_found":"ACTIVATION CODE NOT FOUND","revolver.backend_errors.user_locked":"USER LOCKED","revolver.backend_errors.email_incorrect_format":"Невалидный email","revolver.backend_errors.bad_oauth":"BAD OAUTH","revolver.backend_errors.need_email":"NEED EMAIL","revolver.backend_errors.unknown":"UNKNOWN","revolver.backend_errors.user_not_found":"Пользователь с таким email не существует","revolver.backend_errors.recovery_code_not_found":"Неверный код восстановления пароля","revolver.backend_errors.user_not_activated":"Email не подтвержден","revolver.backend_errors.wrong_password":"Неверный пароль","revolver.backend_errors.email_in_use":"Этот Email уже существует. Попробуйте войти в аккаунт","revolver.backend_errors.ILLEGAL_STATE_NO_RIGHTS":"ILLEGAL_STATE_NO_RIGHTS","revolver.backend_errors._ignore_this_message":"..","revolver.validation.email":"Невалидный email","revolver.validation.required":"Это поле обязательное","revolver.validation.positive":"Должно быть положительно","revolver.validation.digits":"Невалидный телефон","revolver.validation.date":"Формат времени ДД.ММ.ГГГГ","revolver.validation.min_length":"Пароль минимум {len} символов","test-project.1591899604768.title":"Регистрация","test-project.1591899604768.description":"Регистрация на Revolver","revolver.login-page.title":"Авторизация","revolver.login-page.description":"Авторизация в Revolver","revolver.login-page.email":"Email","revolver.recover-password-new-page.title":"Придумайте новый пароль","revolver.recover-password-new-page.description":"Задайте новый пароль","revolver.recover-password-new-page.password_new":"Пароль(минимум 6 символов)","revolver.recover-password-new-page.password_repeat":"Повторите пароль","revolver.recover-password-sent-page.title":"Ссылка на восстановление пароля отправлена","revolver.recover-password-sent-page.description":"Ссылка на восстановление пароля отправлена","revolver.recover-password-sent-page.back":"Назад","revolver.recover-password-sent-page.sent":"Мы отправили сообщение на указанную почту. Перейдите по ссылке для завершения регистрации!","revolver.recover-password-sent-page.recover":"Восстановление пароля","revolver.recover-password-sent-page.email":"Email","revolver.recover-password-page.title":"Восстановление пароля","revolver.recover-password-page.description":"Восстановление пароля","test-project.1592825259743.terms":"Пользовательское соглашение","test-project.1592825259743.privacy":"Обработка персональных данных","revolver.faq-titles._what_is_":"Что такое Revolver и зачем он нужен?","revolver.faq-titles.link_what_is":"Что такое Revolver?","revolver.faq-titles.link_how_use":"Как пользоваться Revolver?","revolver.faq-titles.register":"Как и для чего регистрироваться?","revolver.faq-titles.rating":"Для чего нужен рейтинговый режим?","revolver.faq-titles.link_rating":"Зачем нужен рейтинг?","revolver.faq-titles.privacy":"Насколько все анонимно?","revolver.faq-titles.link_privacy":"Насколько все анонимно?","revolver.faq-titles.help":"Как помочь проекту?","revolver.faq-titles.link_help":"Как помочь проекту?","revolver.faq-titles._terms_of_use_":"Соглашение об обработке персональных данных","revolver.faq-titles._privacy_policy_":"Пользовательское соглашение","test-project.1591899604768.i_agree":"Мне есть 18 лет и я согласен с","test-project.1591899604768.service_rules":"правилами сервиса","test-project.1591899604768.sign_up":"Регистрация","revolver.login-page.signup":"Регистрация","revolver.login-page.signin":"Вход","revolver.login-page.or_with":"или через социальные сети","revolver.login-page.forgot_password":"Забыл пароль...","revolver.login-page.password":"Пароль","revolver.login-page.sign_me_in":"Войти","revolver.faq-titles.terms":"","revolver.faq-titles.privacy_policy":"","revolver.validation.max_length":""}');

/***/ })

};
;