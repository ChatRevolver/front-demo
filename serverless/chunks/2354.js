exports.id = 2354;
exports.ids = [2354];
exports.modules = {

/***/ 60760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ ChatCard)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/modules/chat/ui/chat-card/chat-card.module.scss
var chat_card_module = __webpack_require__(91573);
var chat_card_module_default = /*#__PURE__*/__webpack_require__.n(chat_card_module);
// EXTERNAL MODULE: ./src/modules/chat/ui/chat/chat.tsx + 7 modules
var chat = __webpack_require__(7277);
// EXTERNAL MODULE: ./src/modules/chat/ui/chat-skeleton/chat-skeleton.module.scss
var chat_skeleton_module = __webpack_require__(18172);
var chat_skeleton_module_default = /*#__PURE__*/__webpack_require__.n(chat_skeleton_module);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/modules/chat/ui/chat-skeleton/chat-skeleton.tsx





const ChatSkeleton = props => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: classnames_default()((chat_skeleton_module_default()).chat_skeleton, props.className),
    style: props.style,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "chat chat--disabled",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "chat-disabled-top",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "chat-disabled-top__ava"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "chat-disabled-top__content",
          children: [/*#__PURE__*/jsx_runtime.jsx("span", {
            className: "chat-disabled-top__line"
          }), /*#__PURE__*/jsx_runtime.jsx("span", {
            className: "chat-disabled-top__line"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "chat__block chat__block--disabled",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "chat-messages",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "chat-message"
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "chat-message chat-message--my"
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "chat-message"
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "chat-message chat-message--my"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
        className: "chat__bottom",
        children: [/*#__PURE__*/jsx_runtime.jsx("textarea", {
          className: "chat__textarea",
          placeholder: "Write a message ..."
        }), /*#__PURE__*/jsx_runtime.jsx("button", {
          className: "chat__send-button"
        })]
      })]
    })
  });
};
ChatSkeleton.defaultProps = {};
;// CONCATENATED MODULE: ./src/modules/chat/ui/chat-card/chat-card.tsx






const ChatCard = props => {
  if (!props.id) {
    return /*#__PURE__*/jsx_runtime.jsx("div", {
      className: classnames_default()((chat_card_module_default()).chat_card, props.className),
      style: props.style,
      children: /*#__PURE__*/jsx_runtime.jsx(ChatSkeleton, {})
    });
  }

  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: classnames_default()((chat_card_module_default()).chat_card, props.className),
    style: props.style,
    children: /*#__PURE__*/jsx_runtime.jsx(chat/* Chat */.e, {
      id: props.id,
      temporary: props.temporary
    })
  });
};
ChatCard.defaultProps = {};

/***/ }),

/***/ 28935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ WebRtc)
});

;// CONCATENATED MODULE: ./src/modules/video-chat/model/web-rtc.config.tsx
const webRtcConfig = {
  iceServers: [{
    urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302", "stun:stun3.l.google.com:19302", "stun:stun4.l.google.com:19302", "stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302", "stun:stun3.l.google.com:19302", "stun:stun4.l.google.com:19302", "stun:stun.ekiga.net", "stun:stun.ideasip.com", "stun:stun.rixtelecom.se", "stun:stun.schlund.de", "stun:stun.stunprotocol.org:3478", "stun:stun.voiparound.com", "stun:stun.voipbuster.com", "stun:stun.voipstunt.com", "stun:stun.voxgratia.org"]
  }, {
    urls: ["turn:numb.viagenie.ca"],
    credential: "muazkh",
    username: "webrtc@live.com"
  }, {
    urls: ["turn:192.158.29.39:3478?transport=udp"],
    credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
    username: "28224511:1379330808"
  }, {
    urls: ["turn:192.158.29.39:3478?transport=tcp"],
    credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
    username: "28224511:1379330808"
  }, {
    urls: ["turn:turn.bistri.com:80"],
    credential: "homeo",
    username: "homeo"
  }, {
    urls: ["turn:turn.anyfirewall.com:443?transport=tcp"],
    credential: "webrtc",
    username: "webrtc"
  }]
};
;// CONCATENATED MODULE: ./src/modules/video-chat/model/web-rtc.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class WebRtc {
  constructor() {
    _defineProperty(this, "peer", void 0);
  }

  async initialize(id) {
    const peerjs = await Promise.all(/* import() */[__webpack_require__.e(5391), __webpack_require__.e(5784)]).then(__webpack_require__.t.bind(__webpack_require__, 55391, 23));
    const Peer = peerjs.default;
    return new Promise((resolve, reject) => {
      this.peer = new Peer(id, {
        host: "rev.yoldi.agency",
        path: "/peerjs/myapp",
        secure: true,
        port: 443,
        debug: 1,
        config: webRtcConfig
      });
      this.peer.on("open", () => resolve(undefined));
    });
  }

  async call(id, outcomeStream) {
    return new Promise((resolve, reject) => {
      const call = this.peer.call(id, outcomeStream);
      call.on("stream", resolve);
    });
  }

  async answer(outcomeStream) {
    return new Promise((resolve, reject) => {
      this.peer.on("call", async call => {
        call.answer(outcomeStream);
        call.on("stream", resolve);
      });
    });
  }

  disconnect() {
    var _this$peer, _this$peer2;

    (_this$peer = this.peer) === null || _this$peer === void 0 ? void 0 : _this$peer.disconnect();
    (_this$peer2 = this.peer) === null || _this$peer2 === void 0 ? void 0 : _this$peer2.destroy();
  }

}

/***/ }),

/***/ 76464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ MainVideo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var modules_video_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31460);
/* harmony import */ var _main_video_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33266);
/* harmony import */ var _main_video_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_video_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);





const MainVideo = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (_main_video_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main_video),
    children: [props.state === "loading" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
      className: (_main_video_module_scss__WEBPACK_IMPORTED_MODULE_2___default().loader),
      src: "/img/loader.svg"
    }), props.state === "active" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(modules_video_chat__WEBPACK_IMPORTED_MODULE_3__/* .VideoStream */ .h, {
      className: (_main_video_module_scss__WEBPACK_IMPORTED_MODULE_2___default().video),
      src: props.incomeStream
    }), props.state === "init" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_main_video_module_scss__WEBPACK_IMPORTED_MODULE_2___default().placeholder),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
        src: "/img/spin4luck.svg",
        alt: "",
        style: {
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_main_video_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mobile),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(modules_video_chat__WEBPACK_IMPORTED_MODULE_3__/* .VideoStream */ .h, {
        src: props.outcomeStream,
        muted: true
      })
    })]
  });
};
MainVideo.defaultProps = {};

/***/ }),

/***/ 27711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MyVideo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _my_video_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52911);
/* harmony import */ var _my_video_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_my_video_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var modules_video_chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31460);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);







const MyVideo = props => {
  var _props$src;

  const {
    0: enabled,
    1: setEnabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_props$src = props.src) === null || _props$src === void 0 ? void 0 : _props$src.getAudioTracks()[0].enabled);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _props$src2;

    const enabled = (_props$src2 = props.src) === null || _props$src2 === void 0 ? void 0 : _props$src2.getAudioTracks()[0].enabled;
    setEnabled(enabled);
  }, [props.src]);

  const enable = () => {
    if (props.src) {
      props.src.getAudioTracks()[0].enabled = true;
      setEnabled(true);
    }
  };

  const disable = () => {
    if (props.src) {
      props.src.getAudioTracks()[0].enabled = false;
      setEnabled(false);
    }
  };

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* .useIntl */ .YB)();

  if (!props.src) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_my_video_module_scss__WEBPACK_IMPORTED_MODULE_4___default().my_video),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_my_video_module_scss__WEBPACK_IMPORTED_MODULE_4___default().need_access),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
          src: "/img/camera-icon.svg"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
          children: intl.formatMessage({
            id: "video_chat.my_video.no_stream",
            defaultMessage: "your video will appear here"
          })
        })]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (_my_video_module_scss__WEBPACK_IMPORTED_MODULE_4___default().my_video),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(modules_video_chat__WEBPACK_IMPORTED_MODULE_5__/* .VideoStream */ .h, {
      className: (_my_video_module_scss__WEBPACK_IMPORTED_MODULE_4___default().video),
      src: props.src,
      muted: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_my_video_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cover),
      children: [enabled && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_my_video_module_scss__WEBPACK_IMPORTED_MODULE_4___default().audio_control), (_my_video_module_scss__WEBPACK_IMPORTED_MODULE_4___default().on)),
        onClick: disable,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
          className: (_my_video_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hover),
          children: intl.formatMessage({
            id: "video_chat.my_video.micro_off",
            defaultMessage: "Turn off the microphone"
          })
        })
      }), !enabled && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_my_video_module_scss__WEBPACK_IMPORTED_MODULE_4___default().audio_control), (_my_video_module_scss__WEBPACK_IMPORTED_MODULE_4___default().off)),
        onClick: enable,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
          className: (_my_video_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hover),
          children: intl.formatMessage({
            id: "video_chat.my_video.micro_on",
            defaultMessage: "Turn on the microphone"
          })
        })
      })]
    })]
  });
};
MyVideo.defaultProps = {};

/***/ }),

/***/ 52014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ VideoChatBody)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _video_chat_body_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66838);
/* harmony import */ var _video_chat_body_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_video_chat_body_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);




const VideoChatBody = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
  className: (_video_chat_body_module_scss__WEBPACK_IMPORTED_MODULE_2___default().video_chat_body),
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: (_video_chat_body_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main),
    children: props.children
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: (_video_chat_body_module_scss__WEBPACK_IMPORTED_MODULE_2___default().right),
    children: props.controls
  })]
});
VideoChatBody.defaultProps = {};

/***/ }),

/***/ 31460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ VideoStream)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);


const VideoStream = props => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const video = ref.current;

    if (video) {
      video.srcObject = props.src || null;
      video.play();
    }
  }, [ref, props.src]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("video", {
    ref: ref,
    className: props.className,
    playsInline: true,
    muted: props.muted,
    autoPlay: true
  });
};
VideoStream.defaultProps = {};

/***/ }),

/***/ 91573:
/***/ ((module) => {

// Exports
module.exports = {
	"chat_card": "chat-card_chat_card__3rLnu"
};


/***/ }),

/***/ 18172:
/***/ ((module) => {

// Exports
module.exports = {
	"chat_skeleton": "chat-skeleton_chat_skeleton__7lg09"
};


/***/ }),

/***/ 33266:
/***/ ((module) => {

// Exports
module.exports = {
	"main_video": "main-video_main_video__3Stee",
	"loader": "main-video_loader__12Bij",
	"video": "main-video_video__1kbP_",
	"placeholder": "main-video_placeholder__2MMIc",
	"mobile": "main-video_mobile__5an07"
};


/***/ }),

/***/ 52911:
/***/ ((module) => {

// Exports
module.exports = {
	"need_access": "my-video_need_access__2N1g-",
	"my_video": "my-video_my_video__3pUBX",
	"audio_control": "my-video_audio_control__1RWmK",
	"my_video__no-video": "my-video_my_video__no-video__2bJ70",
	"video": "my-video_video__3URdK",
	"cover": "my-video_cover__1r2Bo",
	"hover": "my-video_hover__3EjAX",
	"off": "my-video_off__1Uo2g",
	"on": "my-video_on__1a2bo"
};


/***/ }),

/***/ 66838:
/***/ ((module) => {

// Exports
module.exports = {
	"video_chat_body": "video-chat-body_video_chat_body__25yQ7",
	"main": "video-chat-body_main__3LIsW",
	"right": "video-chat-body_right__1r1B0"
};


/***/ })

};
;