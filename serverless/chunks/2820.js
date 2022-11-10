exports.id = 2820;
exports.ids = [2820];
exports.modules = {

/***/ 88956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useVideoChat)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var shared_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21495);
/* harmony import */ var _web_rtc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28935);



const webRtc = new _web_rtc__WEBPACK_IMPORTED_MODULE_1__/* .WebRtc */ .N();
const useVideoChat = (params = {}) => {
  var _room$profile;

  const {
    0: room,
    1: setRoom
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: incomeStream,
    1: _setIncomeStream
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: outcomeStream,
    1: _setOutcomeStream
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: inQueue,
    1: _setInQueue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const setIncomeStream = stream => {
    if (incomeStream) {
      incomeStream.getTracks().forEach(it => it.stop());
    }

    _setIncomeStream(stream);
  };

  const setOutcomeStream = stream => {
    if (outcomeStream) {
      outcomeStream.getTracks().forEach(it => it.stop());
    }

    _setOutcomeStream(stream);
  };

  const startWebCam = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    setOutcomeStream(stream);
  };

  const start = async () => {
    await startWebCam();

    _setInQueue(true);

    shared_api__WEBPACK_IMPORTED_MODULE_2__.ws.videoChat.enterQueue({
      rating: params.rating
    });
  };

  const next = () => {
    webRtc.disconnect();
    shared_api__WEBPACK_IMPORTED_MODULE_2__.ws.videoChat.leaveRoom();
  };

  const stop = () => {
    setOutcomeStream(undefined);

    _setInQueue(false);

    setRoom(undefined);
    webRtc.disconnect();
    shared_api__WEBPACK_IMPORTED_MODULE_2__.ws.videoChat.leaveQueue();
  };

  const onEnterRoom = async room => {
    setRoom(room);
    await webRtc.initialize(room.myId);
    let incomeStream;
    console.log("enterRoom", {
      initiator: room.initiator
    });

    if (room.initiator) {
      incomeStream = await webRtc.call(room.companionId, outcomeStream);
    } else {
      incomeStream = await webRtc.answer(outcomeStream);
    }

    console.log("get income stream");
    setIncomeStream(incomeStream);
  };

  const onLeaveRoom = () => {
    setRoom(undefined);
    setIncomeStream(undefined);
    webRtc.disconnect();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!outcomeStream) return;
    const unsubscribe = [shared_api__WEBPACK_IMPORTED_MODULE_2__.ws.videoChat.onEnterRoom(onEnterRoom), //
    shared_api__WEBPACK_IMPORTED_MODULE_2__.ws.videoChat.onLeaveRoom(onLeaveRoom)];
    return () => {
      stop();
      unsubscribe.forEach(it => it());
    };
  }, [outcomeStream]);
  const state = !inQueue ? "init" : room ? "active" : "loading";
  return {
    state,
    room,
    chatId: params.rating ? room === null || room === void 0 ? void 0 : (_room$profile = room.profile) === null || _room$profile === void 0 ? void 0 : _room$profile.chatId : room === null || room === void 0 ? void 0 : room.roomID,
    incomeStream,
    outcomeStream,
    next,
    stop,
    start
  };
};

/***/ }),

/***/ 35893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ VideoChatControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _video_chat_controls_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14181);
/* harmony import */ var _video_chat_controls_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_video_chat_controls_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);





const VideoChatControls = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* .useIntl */ .YB)();

  if (props.state === "init") {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_video_chat_controls_module_scss__WEBPACK_IMPORTED_MODULE_3___default().video_chat_controls),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
        className: (_video_chat_controls_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
        onClick: props.onStart,
        children: intl.formatMessage({
          id: "video_chat.controls.start",
          defaultMessage: "Start"
        })
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (_video_chat_controls_module_scss__WEBPACK_IMPORTED_MODULE_3___default().video_chat_controls),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
      className: (_video_chat_controls_module_scss__WEBPACK_IMPORTED_MODULE_3___default().stop),
      onClick: props.onStop,
      children: intl.formatMessage({
        id: "video_chat.controls.stop",
        defaultMessage: "Stop"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
      className: (_video_chat_controls_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
      onClick: props.onNext,
      disabled: props.state === "loading",
      children: intl.formatMessage({
        id: "video_chat.controls.next",
        defaultMessage: "Next User"
      })
    })]
  });
};
VideoChatControls.defaultProps = {};

/***/ }),

/***/ 35713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kj": () => (/* binding */ onAccessTokenChange),
/* harmony export */   "hP": () => (/* binding */ getAccessToken)
/* harmony export */ });
/* unused harmony export setAccessToken */
/* harmony import */ var _yoldi_utils_LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25841);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74801);


const onAccessTokenChange = fn => {
  return _yoldi_utils_LocalStorage__WEBPACK_IMPORTED_MODULE_0__/* .default.subscribe */ .Z.subscribe(_config__WEBPACK_IMPORTED_MODULE_1__/* .ACCESS_TOKEN_KEY */ .W, fn);
};
const getAccessToken = () => {
  return _yoldi_utils_LocalStorage__WEBPACK_IMPORTED_MODULE_0__/* .default.getItem */ .Z.getItem(_config__WEBPACK_IMPORTED_MODULE_1__/* .ACCESS_TOKEN_KEY */ .W);
};
const setAccessToken = value => {
  return LocalStorage.setItem(ACCESS_TOKEN_KEY, value);
};

/***/ }),

/***/ 14181:
/***/ ((module) => {

// Exports
module.exports = {
	"video_chat_controls": "video-chat-controls_video_chat_controls__2Y9Vv",
	"button": "video-chat-controls_button__aUV-n",
	"stop": "video-chat-controls_stop__1yFl1"
};


/***/ })

};
;