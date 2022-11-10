/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 25060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/modules/faq/ui/faq-card/faq-card.tsx + 2 modules
var faq_card = __webpack_require__(70746);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/modules/faq/ui/faq-layout/faq-layout.module.scss
var faq_layout_module = __webpack_require__(99674);
var faq_layout_module_default = /*#__PURE__*/__webpack_require__.n(faq_layout_module);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/modules/faq/ui/faq-layout/faq-layout.tsx






const FaqLayout = props => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
  className: classnames_default()((faq_layout_module_default()).faq_layout, props.className),
  style: props.style,
  children: [/*#__PURE__*/jsx_runtime.jsx("div", {
    className: (faq_layout_module_default()).left,
    children: /*#__PURE__*/jsx_runtime.jsx(faq_card/* FaqCard */.b, {})
  }), props.children]
});
FaqLayout.defaultProps = {};
// EXTERNAL MODULE: ./src/modules/faq/ui/faq-article/faq-article.module.scss
var faq_article_module = __webpack_require__(62097);
var faq_article_module_default = /*#__PURE__*/__webpack_require__.n(faq_article_module);
;// CONCATENATED MODULE: ./src/modules/faq/ui/faq-article/faq-article.tsx





const FaqArticle = props => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("article", {
    className: classnames_default()((faq_article_module_default()).faq_article, props.className),
    style: props.style,
    children: [props.title && /*#__PURE__*/jsx_runtime.jsx("h1", {
      children: props.title
    }), props.content && /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (faq_article_module_default()).content,
      dangerouslySetInnerHTML: {
        __html: props.content
      }
    })]
  });
};
FaqArticle.defaultProps = {};
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(35747);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(85622);
// EXTERNAL MODULE: ./node_modules/gray-matter/index.js
var gray_matter = __webpack_require__(9675);
var gray_matter_default = /*#__PURE__*/__webpack_require__.n(gray_matter);
// EXTERNAL MODULE: ./node_modules/remark/index.js + 114 modules
var remark = __webpack_require__(56037);
// EXTERNAL MODULE: ./node_modules/remark-html/index.js
var remark_html = __webpack_require__(58828);
var remark_html_default = /*#__PURE__*/__webpack_require__.n(remark_html);
;// CONCATENATED MODULE: ./src/modules/faq/model/markdown-to-html.tsx


const markdownToHtml = async markdown => {
  const result = await (0,remark/* remark */.j)().use((remark_html_default())).process(markdown);
  return result.toString();
};
;// CONCATENATED MODULE: ./src/modules/faq/model/faq.model.tsx




const dir = (0,external_path_.join)(process.cwd(), "src/pages/faq");
const getFaqBySlug = async slug => {
  const path = (0,external_path_.join)(dir, `${slug}.md`);
  const file = external_fs_default().readFileSync(path, "utf8");
  const {
    data: meta,
    content: markdown
  } = gray_matter_default()(file);
  const content = await markdownToHtml(markdown);
  return {
    slug,
    content
  };
};
const getFaqSlugs = () => {
  return fs.readdirSync(dir).filter(it => it.endsWith(".md")).map(it => it.replace(/.md$/, ""));
};
;// CONCATENATED MODULE: ./src/pages/faq/[slug].tsx





const FaqPage = props => {
  return /*#__PURE__*/jsx_runtime.jsx(FaqLayout, {
    children: /*#__PURE__*/jsx_runtime.jsx(FaqArticle, {
      title: props.title,
      content: props.content
    })
  }, props.slug);
};

const getServerSideProps = async ({
  params,
  query
}) => {
  const faq = await getFaqBySlug((params === null || params === void 0 ? void 0 : params.slug) + (String(query.lang) === "en" ? "-en" : ""));
  return {
    props: faq
  };
};
/* harmony default export */ const _slug_ = (FaqPage);

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

/***/ 21939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(37203)

      const appMod = __webpack_require__(15390)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(25060)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_2__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_2__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_2__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_2__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_2__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_2__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_1__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_3__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_4__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/faq/[slug]",
        buildId: "WzggJ__plIdHaq8xJ9K4o",
        escapedBuildId: "WzggJ__plIdHaq8xJ9K4o",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"b396f7576ad52988362d9eba0245c7ef",previewModeSigningKey:"070b51ca221e50c30a66182162ebd19013191f1ab05388cb8b183c9a647ff714",previewModeEncryptionKey:"f5e492ef6f6ee94d5baa1061c65463f30c93752e77f325744e8a76bbccf26640"}
      })
      
    

/***/ }),

/***/ 62097:
/***/ ((module) => {

// Exports
module.exports = {
	"faq_article": "faq-article_faq_article__30owg",
	"content": "faq-article_content__1ZcrH",
	"faq_article--hidden": "faq-article_faq_article--hidden__1y5R9"
};


/***/ }),

/***/ 99674:
/***/ ((module) => {

// Exports
module.exports = {
	"faq_layout": "faq-layout_faq_layout__3sy7f",
	"left": "faq-layout_left___8LZ9",
	"left--hidden": "faq-layout_left--hidden__1T2k4"
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

/***/ 64293:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 63129:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 45532:
/***/ ((module) => {

"use strict";
module.exports = require("critters");

/***/ }),

/***/ 76417:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 28614:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 35747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 98605:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 57211:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 11631:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 33700:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 12087:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 85622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 61765:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 71191:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 92413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 24304:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 4016:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 33867:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 78835:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 31669:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 78761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [2838,6259,1163,471,1874,3561,2058,7190,4427,746], () => (__webpack_require__(21939)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			6869: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(2838);
/******/ 			__webpack_require__.e(6259);
/******/ 			__webpack_require__.e(1163);
/******/ 			__webpack_require__.e(471);
/******/ 			__webpack_require__.e(1874);
/******/ 			__webpack_require__.e(3561);
/******/ 			__webpack_require__.e(2058);
/******/ 			__webpack_require__.e(7190);
/******/ 			__webpack_require__.e(4427);
/******/ 			__webpack_require__.e(746);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;