/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://127.0.0.1:8080/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/static/js/index.js","vendors~main~main2"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/static/css/divs.css":
/*!*********************************!*\
  !*** ./app/static/css/divs.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./divs.css */ \"./node_modules/css-loader/index.js!./app/static/css/divs.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/static/css/divs.css?");

/***/ }),

/***/ "./app/static/css/explanation.css":
/*!****************************************!*\
  !*** ./app/static/css/explanation.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./explanation.css */ \"./node_modules/css-loader/index.js!./app/static/css/explanation.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/static/css/explanation.css?");

/***/ }),

/***/ "./app/static/css/heroImage.css":
/*!**************************************!*\
  !*** ./app/static/css/heroImage.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./heroImage.css */ \"./node_modules/css-loader/index.js!./app/static/css/heroImage.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/static/css/heroImage.css?");

/***/ }),

/***/ "./app/static/css/numbers.css":
/*!************************************!*\
  !*** ./app/static/css/numbers.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./numbers.css */ \"./node_modules/css-loader/index.js!./app/static/css/numbers.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/static/css/numbers.css?");

/***/ }),

/***/ "./app/static/css/sketch.css":
/*!***********************************!*\
  !*** ./app/static/css/sketch.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./sketch.css */ \"./node_modules/css-loader/index.js!./app/static/css/sketch.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/static/css/sketch.css?");

/***/ }),

/***/ "./app/static/css/title.css":
/*!**********************************!*\
  !*** ./app/static/css/title.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./title.css */ \"./node_modules/css-loader/index.js!./app/static/css/title.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/static/css/title.css?");

/***/ }),

/***/ "./app/static/images/sunflower1.jpg":
/*!******************************************!*\
  !*** ./app/static/images/sunflower1.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c20ba3df0a5ed7aa3c75b553dd8c1c03.jpg\";\n\n//# sourceURL=webpack:///./app/static/images/sunflower1.jpg?");

/***/ }),

/***/ "./app/static/js/drawPhyllotaxis.js":
/*!******************************************!*\
  !*** ./app/static/js/drawPhyllotaxis.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Variables scoped within p5\nvar n = 0;\nvar c = 5;\n\nvar drawPhyllotaxis = function drawPhyllotaxis() {\n  p5.angleMode('DEGREES');\n\n  if (n < 375) {\n    var a = n * 137.5;\n    var r = c * p5.sqrt(n);\n    var x = r * p5.cos(a) + p5.width / 14;\n    var y = r * p5.sin(a) + p5.height / 2;\n    p5.fill(255, n % 256, 25);\n    p5.noStroke();\n    p5.ellipse(x, y, 4, 4);\n    n++; //console.log(x);\n  } else {\n    return;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawPhyllotaxis);\n\n//# sourceURL=webpack:///./app/static/js/drawPhyllotaxis.js?");

/***/ }),

/***/ "./app/static/js/drawPhyllotaxis2.js":
/*!*******************************************!*\
  !*** ./app/static/js/drawPhyllotaxis2.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Variables scoped within p5\nvar n = 0;\nvar c = 5;\n\nvar drawPhyllotaxis2 = function drawPhyllotaxis2() {\n  p5.angleMode('DEGREES');\n\n  if (n < 375) {\n    var a = n * 137.5;\n    var r = c * p5.sqrt(n);\n    var x = r * p5.cos(a) + p5.width * 0.92;\n    var y = r * p5.sin(a) + p5.height / 2;\n    p5.fill(255, n % 256, 25);\n    p5.noStroke();\n    p5.ellipse(x, y, 4, 4);\n    n++; //console.log(x);\n  } else {\n    return;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawPhyllotaxis2);\n\n//# sourceURL=webpack:///./app/static/js/drawPhyllotaxis2.js?");

/***/ }),

/***/ "./app/static/js/drawRecursion.js":
/*!****************************************!*\
  !*** ./app/static/js/drawRecursion.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Variables scoped within p5\nvar drawRecursion = function drawRecursion() {\n  p5.background(0);\n  p5.stroke(255, 50, 50);\n  p5.noFill();\n  drawCircle(p5.width / 2, p5.height / 2, 800);\n};\n\nfunction drawCircle(x, y, d) {\n  p5.ellipse(x, y, d);\n\n  if (d > 4) {\n    drawCircle(x + d * 0.3, y, d * 0.5);\n    drawCircle(x - d * 0.3, y, d * 0.5);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawRecursion);\n\n//# sourceURL=webpack:///./app/static/js/drawRecursion.js?");

/***/ }),

/***/ "./app/static/js/explanation.js":
/*!**************************************!*\
  !*** ./app/static/js/explanation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Explanation = function Explanation() {\n  var explanation_div = document.createElement(\"div\");\n  explanation_div.id = \"explanation_div\";\n  explanation_div.className = \"grid\";\n  var body = document.body;\n  body.appendChild(explanation_div);\n  var explanation = document.createElement(\"p\");\n  var explanation_text = document.createTextNode(\"Can you identify the correct hidden number to unearth it's secrets and progress further? \\\r\n                                                    Cryptic clues abound to help you on your quest, but beware of distractions that lie in wait.\\\r\n                                                     Enjoy the hunt!\");\n  explanation.appendChild(explanation_text);\n  explanation.id = \"explanation\";\n  document.getElementById(\"explanation_div\").appendChild(explanation);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Explanation);\n\n//# sourceURL=webpack:///./app/static/js/explanation.js?");

/***/ }),

/***/ "./app/static/js/heroImage.js":
/*!************************************!*\
  !*** ./app/static/js/heroImage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_sunflower1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/sunflower1.jpg */ \"./app/static/images/sunflower1.jpg\");\n/* harmony import */ var _images_sunflower1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_sunflower1_jpg__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction heroImage() {\n  var img = document.createElement('img');\n  img.alt = 'Image';\n  img.src = _images_sunflower1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a;\n  img.id = \"heroImage\";\n  img.className = \"grid\";\n  var img_div = document.createElement(\"div\");\n  img_div.id = \"img_div\";\n  img_div.className = \"grid\";\n  var body = document.body;\n  body.appendChild(img_div);\n  img_div.appendChild(img);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (heroImage);\n\n//# sourceURL=webpack:///./app/static/js/heroImage.js?");

/***/ }),

/***/ "./app/static/js/index.js":
/*!********************************!*\
  !*** ./app/static/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ \"./node_modules/p5/lib/p5.js\");\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_divs_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/divs.css */ \"./app/static/css/divs.css\");\n/* harmony import */ var _css_divs_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_divs_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _title_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title.js */ \"./app/static/js/title.js\");\n/* harmony import */ var _css_title_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/title.css */ \"./app/static/css/title.css\");\n/* harmony import */ var _css_title_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_title_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _explanation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explanation.js */ \"./app/static/js/explanation.js\");\n/* harmony import */ var _css_explanation_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/explanation.css */ \"./app/static/css/explanation.css\");\n/* harmony import */ var _css_explanation_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_explanation_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _numbers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./numbers.js */ \"./app/static/js/numbers.js\");\n/* harmony import */ var _css_numbers_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/numbers.css */ \"./app/static/css/numbers.css\");\n/* harmony import */ var _css_numbers_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_numbers_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _heroImage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./heroImage.js */ \"./app/static/js/heroImage.js\");\n/* harmony import */ var _css_heroImage_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/heroImage.css */ \"./app/static/css/heroImage.css\");\n/* harmony import */ var _css_heroImage_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_heroImage_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _sketch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sketch.js */ \"./app/static/js/sketch.js\");\n/* harmony import */ var _css_sketch_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/sketch.css */ \"./app/static/css/sketch.css\");\n/* harmony import */ var _css_sketch_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_sketch_css__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n //Index files are the only place where we need to import p5.\n//As here is the only time we initiate it.\n\nnew p5__WEBPACK_IMPORTED_MODULE_0___default.a(_sketch_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\nObject(_title_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nObject(_explanation_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nObject(_numbers_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\nObject(_heroImage_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack:///./app/static/js/index.js?");

/***/ }),

/***/ "./app/static/js/numbers.js":
/*!**********************************!*\
  !*** ./app/static/js/numbers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar numbers = function numbers() {\n  var err_audio = new Audio();\n  err_audio.src = error_audio;\n  err_audio.type = \"audio/wav\";\n  var numbers_div = document.createElement(\"div\");\n  numbers_div.id = \"numbers_div\";\n  numbers_div.className = \"grid\";\n  var body = document.body;\n  body.appendChild(numbers_div); //Here are pi, some pi approximations, Mersenne primes, Euler numbers, Fibonacci sequence, \n  // Some Numberphile numbers, first and second Feigenbaum constants, gamma. \n\n  var number_p = document.createElement(\"p\");\n  var number_p_text = document.createTextNode(\"3.14159... 22/7 333/106 355/113 103993/33102 \\\r\n                                80000 13 17 19 31 61 89 107 127 521 607 1279 2203 2281 3217 4253 4423 \\\r\n                                2.71828... 1 1 5 61 1385 50521 2702765 199360981 19391512145 \\\r\n                                2404879675441 370371188237525 69348874393137901 15514534163557086905\\\r\n                                4087072509293123892361\\\r\n                                0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610\\\r\n                                1.20205... 10958 383 4.66920... 2.50290... 0.57721...\");\n  number_p.appendChild(number_p_text);\n  number_p.id = \"number_p\";\n  document.getElementById(\"numbers_div\").appendChild(number_p);\n\n  number_p.onclick = function () {\n    err_audio.play();\n  }; //Primes A000040\n\n\n  var number_p1 = document.createElement(\"p\");\n  var number_p1_text = document.createTextNode(\"2 3 5 7 11 13 17 19 23 29 31 37 41 43 \\\r\n                                                    47 53 59 61 67 71 73 79 83 89 97 101 103 \\\r\n                                                    107 109 113 127 131 137 139 149 151 157 163 \\\r\n                                                    167 173 179 181 191 193 197 199 211 223 227 \\\r\n                                                    229 233 239 241 251\");\n  number_p1.appendChild(number_p1_text);\n  number_p1.id = \"number_p1\";\n  document.getElementById(\"numbers_div\").appendChild(number_p1);\n\n  number_p1.onclick = function () {\n    err_audio.play();\n  }; //Here is the Golden ratio conjugate\n\n\n  var conjugate = document.createElement(\"p\");\n  var conjugate_text = document.createTextNode(\"-0.61804...\");\n  conjugate.appendChild(conjugate_text);\n  conjugate.id = \"conjugate\";\n  document.getElementById(\"numbers_div\").appendChild(conjugate);\n  var con_audio = new Audio();\n  con_audio.src = conjugate_audio;\n  con_audio.type = \"audio/mp3\";\n\n  conjugate.onclick = function () {\n    console.log(\"I'm very close to the number you seek.\");\n    conjugate.innerHTML = \"Very Close!\";\n    conjugate.style.color = \"red\";\n    con_audio.play();\n  }; //Here are some roots starting with 2 until 7\n\n\n  var number_p2 = document.createElement(\"p\");\n  var number_p2_text = document.createTextNode(\"555 1.41421... 1.73205... 2 2.23606... 2.44848... 2.64575...\");\n  number_p2.appendChild(number_p2_text);\n  number_p2.id = \"number_p2\";\n  document.getElementById(\"numbers_div\").appendChild(number_p2);\n\n  number_p2.onclick = function () {\n    err_audio.play();\n  }; //Here are some powers of 2, Ackermann's sequence n^^n, Ackermannn's function, A039834,\n\n\n  var number_p3 = document.createElement(\"p\");\n  var number_p3_text = document.createTextNode(\"777 1 2 4 8 16 32 64 128 256 512 1024 2048 4096 8192 16384 \\\r\n                                                    1 1 4 7625597484987 1 2 3 5 13 65533 -3 5 -8 13 -21 34 -55 89 \\\r\n                                                     -144 233 -377 610 -987 1597 -2584 4181\\\r\n                                                    1 1 2 5 15 52 203 877 4140 21147 115975 678570 4213597 27644437 190899322 1382958545\");\n  number_p3.appendChild(number_p3_text);\n  number_p3.id = \"number_p3\";\n  document.getElementById(\"numbers_div\").appendChild(number_p3);\n\n  number_p3.onclick = function () {\n    err_audio.play();\n  }; //Binary \"Stairway to Heaven <p>1 _2\", Bell or exponential numbers: A000110,\n\n\n  var number_p31 = document.createElement(\"p\");\n  var number_p31_text = document.createTextNode(\"01010011 01110100 01100001\\\r\n                                                    01101001 01110010 01110111 01100001 01111001 00100000 01110100\\\r\n                                                    01101111 00100000 01001000 01100101 01100001 01110110 01100101\\\r\n                                                    01101110 00100000 00111100 01110000 00111110 00110001 00100000 01011111 00110010\");\n  number_p31.appendChild(number_p31_text);\n  number_p31.id = \"number_p31\";\n  document.getElementById(\"numbers_div\").appendChild(number_p31);\n\n  number_p31.onclick = function () {\n    err_audio.play();\n  }; //Coefficients of iterated exponentials(A000310)\n\n\n  var number_p4 = document.createElement(\"p\");\n  var number_p4_text = document.createTextNode(\"88888 1 4 26 234 2696 37919 630521 12111114 264051201\");\n  number_p4.appendChild(number_p4_text);\n  number_p4.id = \"number_p4\";\n  document.getElementById(\"numbers_div\").appendChild(number_p4);\n\n  number_p4.onclick = function () {\n    err_audio.play();\n  }; //Here is the Golden ratio \n\n\n  var aurum = document.createElement(\"p\");\n  var aurum_text = document.createTextNode(\"1.61803...\");\n  aurum.appendChild(aurum_text);\n  aurum.id = \"aurum\";\n  document.getElementById(\"numbers_div\").appendChild(aurum);\n  var aur_audio = new Audio();\n  aur_audio.src = aurum_audio;\n  aur_audio.type = \"audio/mp3\";\n\n  aurum.onclick = function () {\n    aurum.innerHTML = \"See Below!\";\n    aurum.style.color = \"gold\";\n    document.getElementById(\"button\").hidden = false;\n    aur_audio.play();\n  }; //It's elementary. You seek a number related to the most malleable of all metals: Aurum.\n\n\n  var number_p5 = document.createElement(\"p\");\n  var number_p5_text = document.createTextNode(\"49 74 27 73 20 65 6c 65 6d 65 6e 74 61 72 79\\\r\n                                                     2e 20 59 6f 75 20 73 65 65 6b 20 61 20 6e 75 6d\\\r\n                                                      62 65 72 20 72 65 6c 61 74 65 64 20 74 6f 20 74\\\r\n                                                       68 65 20 6d 6f 73 74 20 6d 61 6c 6c 65 61 62 6c\\\r\n                                                        65 20 6f 66 20 61 6c 6c 20 6d 65 74 61 6c 73 3a\\\r\n                                                         20 41 75 72 75 6d 2e 20\");\n  number_p5.appendChild(number_p5_text);\n  number_p5.id = \"number_p5\";\n  document.getElementById(\"numbers_div\").appendChild(number_p5);\n\n  number_p5.onclick = function () {\n    err_audio.play();\n  }; //Here is infinity \n\n\n  var infinity = document.createElement(\"p\");\n  var infinity_text = document.createTextNode(\"Infinity\");\n  infinity.appendChild(infinity_text);\n  infinity.id = \"infinity\";\n  infinity.className = \"infinity\";\n  document.getElementById(\"numbers_div\").appendChild(infinity);\n\n  infinity.onclick = function () {\n    infinity.innerHTML = \"Did you really think it would be so easy?\";\n    con_audio.play();\n  }; //Exponential convolution of Fibonacci numbers with themselves (A014334)\n  //Negative intergers\n  //Luck\n  //ASCII numbers: \"Greetings Argonaut, what you seek is similar to what Jason sought in his epic quest. Godspeed. \"\n\n\n  var number_p6 = document.createElement(\"p\");\n  var number_p6_text = document.createTextNode(\"0 0 2 6 22 70 230 742 2406 7782 25190 81510\\\r\n                                                     263782 853606 2762342 8939110 28927590 93611622\\\r\n                                                      302933606 980313702 3172361830 10265978470\\\r\n                                                       33221404262 107506722406 347899061862\\\r\n                                                       -3 -4 -5 -6 -7 -8 -9 -10 -11 -12 -13 -14 -15 -16\\\r\n                                                       -17 -18 -19 333 777\\\r\n                                                       071 114 101 101 116 105 110 103 115 032 065 114\\\r\n                                                        103 111 110 097 117 116 044 032 119 104 097 116\\\r\n                                                         032 121 111 117 032 115 101 101 107 032 105 115\\\r\n                                                          032 115 105 109 105 108 097 114 032 116 111\\\r\n                                                           032 119 104 097 116 032 074 097 115 111 110\\\r\n                                                            032 115 111 117 103 104 116 032 105 110 032\\\r\n                                                             104 105 115 032 101 112 105 099 032 113 117\\\r\n                                                              101 115 116 046 032 071 111 100 115 112\\\r\n                                                               101 101 100 046 032\");\n  number_p6.appendChild(number_p6_text);\n  number_p6.id = \"number_p6\";\n  document.getElementById(\"numbers_div\").appendChild(number_p6);\n\n  number_p6.onclick = function () {\n    err_audio.play();\n  };\n\n  var button = document.createElement(\"button\");\n  var button_text = document.createTextNode(\"Well done Number Hunter! Click to proceed\");\n  button.appendChild(button_text);\n  button.id = \"button\";\n  document.getElementById(\"numbers_div\").appendChild(button);\n  document.getElementById(\"button\").hidden = true;\n\n  button.onclick = function () {\n    window.location = 'http://149.28.175.75/result/';\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (numbers);\n\n//# sourceURL=webpack:///./app/static/js/numbers.js?");

/***/ }),

/***/ "./app/static/js/sketch.js":
/*!*********************************!*\
  !*** ./app/static/js/sketch.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawPhyllotaxis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawPhyllotaxis.js */ \"./app/static/js/drawPhyllotaxis.js\");\n/* harmony import */ var _drawPhyllotaxis2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawPhyllotaxis2.js */ \"./app/static/js/drawPhyllotaxis2.js\");\n/* harmony import */ var _drawRecursion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawRecursion.js */ \"./app/static/js/drawRecursion.js\");\n\n\n // Sketch scopepp5\n\nvar sketch = function sketch(p5) {\n  // Variables scoped within p5\n  var canvasWidth2 = window.innerWidth;\n  var canvasHeight2 = window.innerHeight / 3;\n  var canvas2; // make library globally available\n\n  window.p5 = p5; // Setup function\n  // ======================================\n\n  p5.setup = function () {\n    canvas2 = p5.createCanvas(window.innerWidth, window.innerHeight / 3);\n    canvas2.id(\"canvas2\");\n    canvas2.class(\"grid\"); //canvas2.parent(div1);\n\n    p5.background('#000');\n    Object(_drawRecursion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); //canvas2.parent(\"canvas\");\n  }; // Draw function\n  // ======================================\n\n\n  p5.draw = function () {\n    Object(_drawPhyllotaxis_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    Object(_drawPhyllotaxis2_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  };\n\n  p5.windowResized = function () {\n    p5.setup();\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sketch);\n\n//# sourceURL=webpack:///./app/static/js/sketch.js?");

/***/ }),

/***/ "./app/static/js/title.js":
/*!********************************!*\
  !*** ./app/static/js/title.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Title_Module() {\n  var title = document.createElement(\"h1\");\n  var title_text = document.createTextNode(\"Number Quest\");\n  title.appendChild(title_text);\n  title.id = \"title1\";\n  title.className = \"grid\";\n  title.dataset.text = \"Number Quest\";\n  var title_div = document.createElement(\"div\");\n  title_div.id = \"title_div\";\n  title_div.className = \"grid\";\n  var body = document.body;\n  body.appendChild(title_div);\n  title_div.appendChild(title);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title_Module);\n\n//# sourceURL=webpack:///./app/static/js/title.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/static/css/divs.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader!./app/static/css/divs.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"#title_div {\\r\\n    min-height: 33.34%;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n#explanation_div {\\r\\n    min-height: fit-content;\\r\\n    padding: 0.5em 1em;\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n#numbers_div {\\r\\n    min-height: fit-content;\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n\\r\\n#img_div {\\r\\n   \\r\\n   width: 100%;\\r\\n   min-height: fit-content;\\r\\n   bottom: 0;\\r\\n   margin-top: 1em;\\r\\n   padding-top: 2em;\\r\\n   display: block;\\r\\n}\\r\\n\\r\\n\\r\\n@media(min-width: 650px) {\\r\\n    #explanation_div {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;\\r\\n    }\\r\\n\\r\\n    #explanation {\\r\\n        grid-column: 2/4;\\r\\n    }\\r\\n\\r\\n    #numbers_div {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr repeat(6, minmax(auto, 10.5em)) 1fr;\\r\\n    }\\r\\n\\r\\n    #number_p {\\r\\n        grid-column: 2/8;\\r\\n    }\\r\\n\\r\\n    #number_p1 {\\r\\n        grid-column: 2/8;\\r\\n    }\\r\\n\\r\\n    #conjugate {\\r\\n        grid-column: 2/span 1;\\r\\n    }\\r\\n\\r\\n    #number_p2 {\\r\\n        grid-column: 3/span 5;\\r\\n    }\\r\\n\\r\\n    #number_p3 {\\r\\n        grid-column: 2/8;\\r\\n    }\\r\\n    \\r\\n    #number_p31 {\\r\\n        grid-column: 2/8;\\r\\n    }\\r\\n\\r\\n    #number_p4 {\\r\\n        grid-column: 2/span 5;\\r\\n    }\\r\\n\\r\\n    #aurum {\\r\\n        grid-column: 7/span 1;\\r\\n    }\\r\\n\\r\\n    #number_p5 {\\r\\n        grid-column: 2/8;\\r\\n    }\\r\\n\\r\\n    #infinity {\\r\\n        grid-column: 2/8;\\r\\n    }\\r\\n\\r\\n    #number_p6 {\\r\\n        grid-column: 2/8;\\r\\n    }\\r\\n\\r\\n    #button {\\r\\n        grid-column: 2/8;\\r\\n    }\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/static/css/divs.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/static/css/explanation.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader!./app/static/css/explanation.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Montserrat);\", \"\"]);\n\n// module\nexports.push([module.i, \"#explanation {\\r\\n    font-family: 'Montserrat', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    padding: 0.5em; \\r\\n    font-size: 1.6em;\\r\\n    line-height: 1.5;\\r\\n    text-align: center;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/static/css/explanation.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/static/css/heroImage.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader!./app/static/css/heroImage.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\r\\nimg {\\r\\n    content: url(\" + escape(__webpack_require__(/*! ../images/sunflower1.jpg */ \"./app/static/images/sunflower1.jpg\")) + \");\\r\\n    width: 100%;\\r\\n    height: auto;\\r\\n    -khtml-user-select: none;\\r\\n    -o-user-select: none;\\r\\n    -moz-user-select: none;\\r\\n    -webkit-user-select: none;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n\\r\\n#heroImage {\\r\\n    position: relative;\\r\\n    float: none;\\r\\n    display: grid;\\r\\n    background: #000;\\r\\n    background-repeat: no-repeat;\\r\\n    background-size: cover;\\r\\n    background-position: bottom center;\\r\\n    max-width: 100%;\\r\\n    width: auto;\\r\\n    height: auto;\\r\\n    z-index: -1;\\r\\n    opacity: 1;\\r\\n    overflow: hidden;\\r\\n    margin-top: 0%;\\r\\n    margin-right: 25%;\\r\\n    margin-left: 28.5%;\\r\\n    bottom: 0px;\\r\\n    \\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n@media(min-width: 650px) {\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr;\\r\\n    }\\r\\n\\r\\n    #heroImage {\\r\\n        grid-column: span 1;\\r\\n    }\\r\\n\\r\\n    #heroImageDiv {\\r\\n        grid-column: span 1;\\r\\n    }\\r\\n}\\r\\n \\r\\n@media screen and (max-width: 1400px) {\\r\\n    #heroImage {\\r\\n        grid-column: span 1;\\r\\n        width: 60%;\\r\\n        margin-left: 20%;\\r\\n        \\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 1000px) {\\r\\n    #heroImage {\\r\\n        grid-column: span 1;\\r\\n        width: 70%;\\r\\n        margin-left: 15%;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 600px) {\\r\\n    #heroImage {\\r\\n        grid-column: span 1;\\r\\n        width: 100%;\\r\\n        margin: 0%;\\r\\n    }\\r\\n} \", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/static/css/heroImage.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/static/css/numbers.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader!./app/static/css/numbers.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Atomic+Age|Montserrat);\", \"\"]);\n\n// module\nexports.push([module.i, \"#number_p {\\r\\n    font-family: 'Atomic Age', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    margin: 0;\\r\\n    padding: 0.5em 0.5em 0em 0.5em; \\r\\n    font-size: 1.3em;\\r\\n    line-height: 1.5;\\r\\n    letter-spacing: 1.2px;\\r\\n    word-spacing: 16px;\\r\\n    text-align: center;\\r\\n    cursor: pointer;\\r\\n    /* This is to stop highlighting numbers and seeing any margin gaps. Both in blrowser and mobile. */\\r\\n    -webkit-touch-callout: none;\\r\\n    -ms-user-select: none;\\r\\n    -webkit-tap-highlight-color: transparent;\\r\\n    -khtml-user-select: none;\\r\\n    -o-user-select: none;\\r\\n    -moz-user-select: none;\\r\\n    -webkit-user-select: none;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n#number_p1 {\\r\\n    font-family: 'Atomic Age', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    margin: 0;\\r\\n    padding: 0em 0.5em 0em 0.5em; \\r\\n    font-size: 1.3em;\\r\\n    line-height: 1.5;\\r\\n    letter-spacing: 1.2px;\\r\\n    word-spacing: 16px;\\r\\n    text-align: center;\\r\\n    cursor: pointer;\\r\\n    /* This is to stop highlighting numbers and seeing any margin gaps. Both in blrowser and mobile. */\\r\\n    -webkit-touch-callout: none;\\r\\n    -ms-user-select: none;\\r\\n    -webkit-tap-highlight-color: transparent;\\r\\n    -khtml-user-select: none;\\r\\n    -o-user-select: none;\\r\\n    -moz-user-select: none;\\r\\n    -webkit-user-select: none;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n#conjugate {\\r\\n    font-family: 'Atomic Age', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    margin: 0;\\r\\n    padding: 0em 0em 0em 0.5em; \\r\\n    font-size: 1.3em;\\r\\n    line-height: 1.5;\\r\\n    letter-spacing: 1.2px;\\r\\n    word-spacing: 0px;\\r\\n    text-align: center;\\r\\n    cursor: pointer;\\r\\n    /* This is to stop highlighting numbers and seeing any margin gaps. Both in blrowser and mobile. */\\r\\n    -webkit-touch-callout: none;\\r\\n    -ms-user-select: none;\\r\\n    -webkit-tap-highlight-color: transparent;\\r\\n    -khtml-user-select: none;\\r\\n    -o-user-select: none;\\r\\n    -moz-user-select: none;\\r\\n    -webkit-user-select: none;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n#number_p2 {\\r\\n    font-family: 'Atomic Age', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    margin: 0;\\r\\n    padding: 0em 0em 0em 0.5em; \\r\\n    font-size: 1.3em;\\r\\n    line-height: 1.5;\\r\\n    letter-spacing: 1.2px;\\r\\n    word-spacing: 16px;\\r\\n    text-align: left;\\r\\n    cursor: pointer;\\r\\n    /* This is to stop highlighting numbers and seeing any margin gaps. Both in blrowser and mobile. */\\r\\n    -webkit-touch-callout: none;\\r\\n    -ms-user-select: none;\\r\\n    -webkit-tap-highlight-color: transparent;\\r\\n    -khtml-user-select: none;\\r\\n    -o-user-select: none;\\r\\n    -moz-user-select: none;\\r\\n    -webkit-user-select: none;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n#number_p3 {\\r\\n    font-family: 'Atomic Age', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    margin: 0;\\r\\n    padding: 0em 0.5em 0em 0.5em; \\r\\n    font-size: 1.3em;\\r\\n    line-height: 1.5;\\r\\n    letter-spacing: 1.2px;\\r\\n    word-spacing: 16px;\\r\\n    text-align: center;\\r\\n    cursor: pointer;\\r\\n    /* This is to stop highlighting numbers and seeing any margin gaps. Both in blrowser and mobile. */\\r\\n    -webkit-touch-callout: none;\\r\\n    -ms-user-select: none;\\r\\n    -webkit-tap-highlight-color: transparent;\\r\\n    -khtml-user-select: none;\\r\\n    -o-user-select: none;\\r\\n    -moz-user-select: none;\\r\\n    -webkit-user-select: none;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n#number_p31 {\\r\\n    font-family: 'Atomic Age', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    margin: 0;\\r\\n    padding: 0em 0.5em 0em 0.5em; \\r\\n    font-size: 1.3em;\\r\\n    line-height: 1.5;\\r\\n    letter-spacing: 1.2px;\\r\\n    word-spacing: 16px;\\r\\n    text-align: center;\\r\\n    cursor: pointer;\\r\\n    -webkit-touch-callout: none;\\r\\n    -webkit-tap-highlight-color: transparent;\\r\\n}\\r\\n\\r\\n#number_p4 {\\r\\n    font-family: 'Atomic Age', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    margin: 0;\\r\\n    padding: 0em 0em 0em 0.5em; \\r\\n    font-size: 1.3em;\\r\\n    line-height: 1.5;\\r\\n    letter-spacing: 1.2px;\\r\\n    word-spacing: 16px;\\r\\n    text-align: center;\\r\\n    cursor: pointer;\\r\\n   /* This is to stop highlighting numbers and seeing any margin gaps. Both in blrowser and mobile. */\\r\\n   -webkit-touch-callout: none;\\r\\n   -ms-user-select: none;\\r\\n   -webkit-tap-highlight-color: transparent;\\r\\n    -khtml-user-select: none;\\r\\n    -o-user-select: none;\\r\\n    -moz-user-select: none;\\r\\n    -webkit-user-select: none;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n#aurum {\\r\\n    font-family: 'Atomic Age', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    margin: 0;\\r\\n    padding: 0em 0.5em 0em 0em; \\r\\n    font-size: 1.3em;\\r\\n    line-height: 1.5;\\r\\n    letter-spacing: 1.2px;\\r\\n    word-spacing: 0px;\\r\\n    text-align: center;\\r\\n    cursor: pointer;\\r\\n    /* This is to stop highlighting numbers and seeing any margin gaps. Both in blrowser and mobile. */\\r\\n    -webkit-touch-callout: none;\\r\\n    -ms-user-select: none;\\r\\n    -webkit-tap-highlight-color: transparent;\\r\\n    -khtml-user-select: none;\\r\\n    -o-user-select: none;\\r\\n    -moz-user-select: none;\\r\\n    -webkit-user-select: none;\\r\\n    user-select: none;\\r\\n    \\r\\n}\\r\\n\\r\\n#number_p5 {\\r\\n    font-family: 'Atomic Age', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    margin: 0;\\r\\n    padding: 0em 0.5em 0em 0.5em; \\r\\n    font-size: 1.3em;\\r\\n    line-height: 1.5;\\r\\n    letter-spacing: 1.2px;\\r\\n    word-spacing: 16px;\\r\\n    text-align: center;\\r\\n    cursor: pointer;\\r\\n    -webkit-touch-callout: none;\\r\\n    -webkit-tap-highlight-color: transparent;\\r\\n}\\r\\n\\r\\n#infinity {\\r\\n    font-family: 'Montserrat', sans-serif;\\r\\n    color: gold;\\r\\n    width: auto;\\r\\n    margin: 0;\\r\\n    padding: 0em 0.5em 0em 0.5em; \\r\\n    font-size: 2em;\\r\\n    line-height: 1.5;\\r\\n    letter-spacing: 1.2px;\\r\\n    word-spacing: 16px;\\r\\n    text-align: center;\\r\\n    cursor: pointer;\\r\\n    /* This is to stop highlighting numbers and seeing any margin gaps. Both in blrowser and mobile. */\\r\\n    -webkit-touch-callout: none;\\r\\n    -ms-user-select: none;\\r\\n    -webkit-tap-highlight-color: transparent;\\r\\n    -khtml-user-select: none;\\r\\n    -o-user-select: none;\\r\\n    -moz-user-select: none;\\r\\n    -webkit-user-select: none;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n#number_p6 {\\r\\n    font-family: 'Atomic Age', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    margin: 0;\\r\\n    padding: 0em 0.5em 0em 0.5em; \\r\\n    font-size: 1.3em;\\r\\n    line-height: 1.5;\\r\\n    letter-spacing: 1.2px;\\r\\n    word-spacing: 16px;\\r\\n    text-align: center;\\r\\n    cursor: pointer;\\r\\n    -webkit-touch-callout: none;\\r\\n    -webkit-tap-highlight-color: transparent;\\r\\n}\\r\\n\\r\\n#button {\\r\\n    font-family: 'Montserrat', sans-serif;\\r\\n    background-color: gold;\\r\\n    color: black;\\r\\n    border-radius: 8px;\\r\\n    width: auto;\\r\\n    margin-top: 0.9em;\\r\\n    margin-bottom: 0em;\\r\\n    margin-left: 0.2em;\\r\\n    margin-right: 0.2em;\\r\\n    padding: 0.5em; \\r\\n    font-size: 2em;\\r\\n    line-height: 1.5;\\r\\n    letter-spacing: 1px;\\r\\n    text-align: center;\\r\\n    -webkit-transition-duration: 0.4s; /* Safari */\\r\\n    transition-duration: 0.4s;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n#button:hover {\\r\\n    background-color: black;\\r\\n    color: gold;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/static/css/numbers.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/static/css/sketch.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader!./app/static/css/sketch.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\r\\n\\r\\n#canvas2 {\\r\\n    position: absolute;\\r\\n    display: block;\\r\\n    margin: 0;\\r\\n    left: 0;\\r\\n    top: 0%;\\r\\n    min-height: 150px;\\r\\n    text-align: center;\\r\\n    overflow: hidden;\\r\\n    z-index: -1;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/static/css/sketch.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/static/css/title.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader!./app/static/css/title.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Righteous);\", \"\"]);\n\n// module\nexports.push([module.i, \"#title1 {\\r\\n    position: absolute;\\r\\n    width: inherit;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    text-align: center;\\r\\n    font-family: 'Righteous', sans-serif;\\r\\n    color:black;\\r\\n    padding: 0;\\r\\n    padding-top: 0.75em;\\r\\n    padding-bottom: 0.5em;\\r\\n    height: auto;\\r\\n    margin: auto;\\r\\n    text-shadow: 0 0 40px #ff005b;\\r\\n    -webkit-text-fill-color: white;\\r\\n    -webkit-text-stroke-width: 2px;\\r\\n}\\r\\n\\r\\n\\r\\n@media(min-width: 601px) {\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr;\\r\\n    }\\r\\n\\r\\n    #title1 {\\r\\n        grid-column: span 1;\\r\\n        font-size: 4.5rem;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 600px) {\\r\\n    #title1 {\\r\\n        grid-column: span 1;\\r\\n        font-size: 3.2rem;\\r\\n    }\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/static/css/title.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ })

/******/ });