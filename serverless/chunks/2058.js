"use strict";
exports.id = 2058;
exports.ids = [2058];
exports.modules = {

/***/ 32058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "et": () => (/* binding */ KeyName),
/* harmony export */   "K7": () => (/* binding */ useKeyDown),
/* harmony export */   "O8": () => (/* binding */ useClickOutside)
/* harmony export */ });
/* unused harmony exports useDidMount, useInterval, usePageQueryStr, usePageQueryInt */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11163);


const KeyName = {
  ESC: ["Escape", "Esc"],
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight"
};
const useKeyDown = (id, handler) => {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const keys = [id].flat(Infinity);

    const handle = e => {
      if (keys.includes(e.key)) handler(e);
    };

    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [id, handler]);
};
const useDidMount = func => {
  useEffect(() => {
    func();
  }, []);
};
const useInterval = (callback, delay) => {
  const savedCallback = useRef((...args) => {});
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const handler = (...args) => savedCallback.current(...args);

    if (delay !== null) {
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
const useClickOutside = (ref, handler) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
const usePageQueryStr = name => {
  const router = useRouter();
  if (!router.query[name]) return undefined;
  return router.query[name] + "";
};
const usePageQueryInt = name => {
  const router = useRouter();
  if (!router.query[name]) return undefined;
  return parseInt(router.query[name]);
};

/***/ })

};
;