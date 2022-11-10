"use strict";
exports.id = 4427;
exports.ids = [4427];
exports.modules = {

/***/ 84427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sk": () => (/* binding */ isServer)
/* harmony export */ });
/* unused harmony exports delay, onlyUnique, range, array, duplicate, isBrowser, isDev, isProd, pluralize, unflat, shallowEqualObjects, toMap, onlyDigits */
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

/***/ })

};
;