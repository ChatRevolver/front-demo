"use strict";
exports.id = 7189;
exports.ids = [7189];
exports.modules = {

/***/ 17189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useAppForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42283);
/* harmony import */ var _applyBackendErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11360);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const useAppForm = props => {
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__/* .useForm */ .cI)(props);
  const {
    0: globalError,
    1: setGlobalError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const cleanGlobalError = () => setGlobalError(undefined); // useEffect(() => {
  //   form.trigger();
  // }, []);


  const onSubmit = form.handleSubmit(async values => {
    try {
      var _props$onSuccess;

      const resp = await props.onSubmit(values);
      await ((_props$onSuccess = props.onSuccess) === null || _props$onSuccess === void 0 ? void 0 : _props$onSuccess.call(props, resp, values));
      cleanGlobalError();
    } catch (e) {
      try {
        console.error(e);
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
    var _form$formState$error, _form$formState$error2, _form$formState$error3, _form$formState$error4;

    return _objectSpread(_objectSpread({}, form.register(name, _objectSpread({
      required: true
    }, options))), {}, {
      error: ((_form$formState$error = form.formState.errors) === null || _form$formState$error === void 0 ? void 0 : (_form$formState$error2 = _form$formState$error[name]) === null || _form$formState$error2 === void 0 ? void 0 : _form$formState$error2.message) || ((_form$formState$error3 = form.formState.errors) === null || _form$formState$error3 === void 0 ? void 0 : (_form$formState$error4 = _form$formState$error3[name]) === null || _form$formState$error4 === void 0 ? void 0 : _form$formState$error4.type)
    });
  };

  const reg = (name, rules) => {
    return {
      name: name,
      control: form.control,
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
    regField: reg
  });
};

/***/ })

};
;