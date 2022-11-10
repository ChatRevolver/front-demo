"use strict";
exports.id = 5053;
exports.ids = [5053,4427];
exports.modules = {

/***/ 84427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jU": () => (/* binding */ isBrowser),
/* harmony export */   "sk": () => (/* binding */ isServer)
/* harmony export */ });
/* unused harmony exports delay, onlyUnique, range, array, duplicate, isDev, isProd, pluralize, unflat, shallowEqualObjects, toMap, onlyDigits */
// await delay(1000)
const delay = ms => new Promise(res => setTimeout(res, ms)); // [1, 2, 2, 2, 3, 3].filter(onlyUnique) == [1, 2, 3]

const onlyUnique = (value, index, array) => array.indexOf(value) === index; // range(4, 10) === [4, 5, 6, 7, 8, 9, 10]

const range = (from, to) => {
  const res = [];

  if (from < to) {
    for (let i = from; i <= to; i++) {
      res.push(i);
    }
  } else {
    for (let i = from; i >= to; i--) {
      res.push(i);
    }
  }

  return res;
}; // array(5, it => it) => [0, 1, 2, 3, 4]

const array = (size, init) => {
  return range(0, size - 1).map(init);
}; // duplicate("123", 3) => ["123", "123", "123"]

const duplicate = (item, count) => array(count, () => item);
const isBrowser = () => false;
const isServer = () => true;
const isDev = () => false;
const isProd = () => false;
const pluralize = (num, options) => {
  if (options["value" + num]) return options["value" + num](num);
  if (!num) return options.many(0);

  const _num = Math.abs(num);

  const res = _num % 100;
  if (11 <= res && res <= 20) return options.many(num);
  const rest = _num % 10;
  if (rest === 0) return options.many(num);
  if (rest === 1) return options.one(num);
  if (rest < 5) return options.few(num);
  return options.many(num);
};
const unflat = (arr, step) => {
  const size = Math.ceil(arr.length / step);
  const result = array(size, it => [it * step, it * step + step]);
  return result.map(([start, end]) => arr.slice(start, end));
};
function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (!objA || !objB) {
    return false;
  }

  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  const len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    const key = aKeys[i];

    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }

  return true;
}
const toMap = (obj, {
  key,
  value
}) => {
  obj[key] = value;
  return obj;
};
const onlyDigits = value => value.replace(/[^0-9]/g, "");

/***/ }),

/***/ 89456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ message)
/* harmony export */ });
/* harmony import */ var rc_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86276);
/* harmony import */ var _yoldi_utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84427);


let notification = null;

if ((0,_yoldi_utils_helpers__WEBPACK_IMPORTED_MODULE_1__/* .isBrowser */ .jU)()) {
  rc_notification__WEBPACK_IMPORTED_MODULE_0__/* .default.newInstance */ .Z.newInstance({
    maxCount: 5,
    prefixCls: "message",
    style: {
      top: 10,
      left: "50%"
    }
  }, it => notification = it);
}

const message = {
  error: (content, duration = 3) => {
    var _notification;

    (_notification = notification) === null || _notification === void 0 ? void 0 : _notification.notice({
      className: "error",
      duration,
      content
    });
  },
  success: (content, duration = 3) => {
    var _notification2;

    (_notification2 = notification) === null || _notification2 === void 0 ? void 0 : _notification2.notice({
      className: "success",
      duration,
      content
    });
  },
  loading: (content, duration = 0) => {
    var _notification3;

    const key = Math.random();
    (_notification3 = notification) === null || _notification3 === void 0 ? void 0 : _notification3.notice({
      className: "loading",
      duration,
      content,
      key: key
    });
    return () => {
      var _notification4;

      return (_notification4 = notification) === null || _notification4 === void 0 ? void 0 : _notification4.removeNotice(key);
    };
  }
};

/***/ }),

/***/ 31294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Upload)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var rc_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88332);
/* harmony import */ var shared_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35713);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const headers = {
  get authorization() {
    return `Bearer ${(0,shared_api__WEBPACK_IMPORTED_MODULE_3__/* .getAccessToken */ .hP)()}`;
  }

};
const Upload = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(rc_upload__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _objectSpread(_objectSpread({
    action: "https://api.chatrevolver.com" + "/api/image/upload",
    accept: "image/png, image/jpeg",
    headers: headers,
    name: "image"
  }, props), {}, {
    onSuccess: props.onSuccess // className={cx(styles.upload, props.className)}
    ,
    children: props.children
  }));
};
Upload.defaultProps = {};

/***/ })

};
;