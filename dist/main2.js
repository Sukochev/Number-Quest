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
/******/ 		"main2": 0
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
/******/ 	deferredModules.push(["./app/static/js/result/index2.js","vendors~main~main2"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/static/css/result/divs2.css":
/*!*****************************************!*\
  !*** ./app/static/css/result/divs2.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!./divs2.css */ \"./node_modules/css-loader/index.js!./app/static/css/result/divs2.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/static/css/result/divs2.css?");

/***/ }),

/***/ "./app/static/css/result/explanation2.css":
/*!************************************************!*\
  !*** ./app/static/css/result/explanation2.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!./explanation2.css */ \"./node_modules/css-loader/index.js!./app/static/css/result/explanation2.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/static/css/result/explanation2.css?");

/***/ }),

/***/ "./app/static/css/result/sketch2.css":
/*!*******************************************!*\
  !*** ./app/static/css/result/sketch2.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!./sketch2.css */ \"./node_modules/css-loader/index.js!./app/static/css/result/sketch2.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/static/css/result/sketch2.css?");

/***/ }),

/***/ "./app/static/css/result/title2.css":
/*!******************************************!*\
  !*** ./app/static/css/result/title2.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!./title2.css */ \"./node_modules/css-loader/index.js!./app/static/css/result/title2.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/static/css/result/title2.css?");

/***/ }),

/***/ "./app/static/js/result/explanation2.js":
/*!**********************************************!*\
  !*** ./app/static/js/result/explanation2.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar explanation2 = function explanation2() {\n  var rew_audio = new Audio();\n  rew_audio.src = reward_audio;\n  rew_audio.type = \"audio/mp3\";\n  var explanation2_div = document.createElement(\"div\");\n  explanation2_div.id = \"explanation2_div\";\n  explanation2_div.className = \"grid\";\n  var body = document.body;\n  body.appendChild(explanation2_div);\n  var explanation2 = document.createElement(\"p\");\n  var explanation2_text = document.createTextNode(\"Well done, Hunter. Your ingenuity, knowledge and perseverance\\\r\n                                                        has paid off. You correctly identified that it was the Golden Ratio (1.61803...)\\\r\n                                                        that had to be found...or you just got lucky.\\\r\n                                                        Either way, you have earned a reward! \");\n  explanation2.appendChild(explanation2_text);\n  explanation2.id = \"explanation2\";\n  document.getElementById(\"explanation2_div\").appendChild(explanation2);\n  var explanation2_1 = document.createElement(\"p\");\n  var explanation2_1_text = document.createTextNode(\"But first, did you know that the golden ratio                                                        (often denoted as phi - \\u03C6) can be represented as (1\\xB1\\u221A5)/2 ?                                                         It is also often found in nature.                                                         A number of natural patterns and structures have the golden ratio                                                          as part of their foundation.                                                         For example the order in which a sunflower grows new seeds approximately follows \\u03C6.                                                          Each new seed that grows at the center pushes the previous seed out by 161.8%                                                           of a full revolution before growing.                                                           This ensures that space is being maximised                                                          and there are no big gaps in between seeds.                                                          An interesting question that then arises is 'Why \\u03C6?'.                                                          Part of the answer is pragmatic. A sunflower that optimises it's use of space through \\u03C6                                                           should be able to produce more seeds per flower than one that doesn't and                                                            hence have a greater chance of survival. But if we delve a little deeper,                                                             things get more interesting.\");\n  explanation2_1.appendChild(explanation2_1_text);\n  explanation2_1.id = \"explanation2_1\";\n  document.getElementById(\"explanation2_div\").appendChild(explanation2_1);\n  var explanation3_1 = document.createElement(\"p\");\n  var explanation3_1_text = document.createTextNode(\"The golden ratio is the number of choice for the sunflower                                                         because it is the most irrational number.                                                         Any number that is rational (can be expressed as \\u03B1/\\u03B2                                                             where \\u03B1 and \\u03B2 are whole numbers) will eventually produce a seed pattern                                                             that makes gaps, because the pattern will effectively form 'spokes'                                                              and there will be space in between each 'spoke'.                                                               Other irrational numbers e.g. \\u03C0 will seemingly form spokes as well.                                                              How many? Well, for \\u03C0 about 22 of them can be seen quite early on.                                                               Why? Perhaps one reason is that \\u03C0 can                                                              be fairly well approximated by a rational number... 22/7.                                                              Yet the golden ratio is a number that's as far as it can get from                                                              a rational representation.\");\n  explanation3_1.appendChild(explanation3_1_text);\n  explanation3_1.id = \"explanation3_1\";\n  document.getElementById(\"explanation2_div\").appendChild(explanation3_1);\n  var explanation4_1 = document.createElement(\"p\");\n  var explanation4_1_text = document.createTextNode(\"With that said, enjoy your small but earned reward, Hunter!\");\n  explanation4_1.appendChild(explanation4_1_text);\n  explanation4_1.id = \"explanation4_1\";\n  document.getElementById(\"explanation2_div\").appendChild(explanation4_1);\n  var button2 = document.createElement(\"button2\");\n  var button2_text = document.createTextNode(\"Reward\");\n  button2.appendChild(button2_text);\n  button2.id = \"button2\";\n  document.getElementById(\"explanation2_div\").appendChild(button2);\n\n  button2.onclick = function () {\n    rew_audio.play();\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (explanation2);\n\n//# sourceURL=webpack:///./app/static/js/result/explanation2.js?");

/***/ }),

/***/ "./app/static/js/result/index2.js":
/*!****************************************!*\
  !*** ./app/static/js/result/index2.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ \"./node_modules/p5/lib/p5.js\");\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _title2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title2.js */ \"./app/static/js/result/title2.js\");\n/* harmony import */ var _css_result_title2_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css//result/title2.css */ \"./app/static/css/result/title2.css\");\n/* harmony import */ var _css_result_title2_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_result_title2_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _explanation2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explanation2.js */ \"./app/static/js/result/explanation2.js\");\n/* harmony import */ var _css_result_explanation2_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/result/explanation2.css */ \"./app/static/css/result/explanation2.css\");\n/* harmony import */ var _css_result_explanation2_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_result_explanation2_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_result_divs2_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../css/result/divs2.css */ \"./app/static/css/result/divs2.css\");\n/* harmony import */ var _css_result_divs2_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_result_divs2_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _sketch2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sketch2.js */ \"./app/static/js/result/sketch2.js\");\n/* harmony import */ var _css_result_sketch2_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/result/sketch2.css */ \"./app/static/css/result/sketch2.css\");\n/* harmony import */ var _css_result_sketch2_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_result_sketch2_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n //Index files are the only place where we need to import p5.\n//As here is the only time we initiate it.\n\nnew p5__WEBPACK_IMPORTED_MODULE_0___default.a(_sketch2_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nObject(_title2_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_explanation2_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./app/static/js/result/index2.js?");

/***/ }),

/***/ "./app/static/js/result/sketch2.js":
/*!*****************************************!*\
  !*** ./app/static/js/result/sketch2.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Sketch scopepp5\nvar sketch2 = function sketch2(p5) {\n  // Variables scoped within p5\n  var canvasWidth2 = window.innerWidth;\n  var canvasHeight2 = window.innerHeight / 3;\n  var canvas3;\n  var fireworks = [];\n  var gravity; //Creates a particle\n\n  function Particle(x, y, firework) {\n    this.pos = p5.createVector(x, y);\n    this.firework = firework;\n    this.lifespan = 255;\n\n    if (this.firework) {\n      this.vel = p5.createVector(0, p5.random(-9, -4));\n    } else {\n      this.vel = p5.createVector(p5.random(-7, 7), p5.random(-5, 5));\n    }\n\n    this.acc = p5.createVector(0, 0);\n\n    this.applyForce = function (force) {\n      this.acc.add(force);\n    };\n\n    this.update = function () {\n      if (!this.firework) {\n        this.vel.mult(0.85);\n        this.lifespan -= 4;\n      }\n\n      this.vel.add(this.acc);\n      this.pos.add(this.vel);\n      this.acc.mult(0);\n    };\n\n    this.done = function () {\n      if (this.lifespan < 0) {\n        return true;\n      } else {\n        return false;\n      }\n    };\n\n    this.show = function () {\n      if (!this.firework) {\n        p5.strokeWeight(3);\n        p5.stroke(255, 200, p5.random(140), this.lifespan);\n      } else {\n        p5.strokeWeight(5);\n        p5.stroke(p5.random(180, 250), 90, 20);\n      }\n\n      p5.point(this.pos.x, this.pos.y);\n    };\n  } //Will be responsible to both the main ball and the exploding ones.\n\n\n  function Firework() {\n    this.firework = new Particle(p5.random(p5.width), p5.height, true);\n    this.exploded = false;\n    this.particles = [];\n\n    this.done = function () {\n      if (this.exploded && this.particles.length === 0) {\n        return true;\n      } else {\n        return false;\n      }\n    };\n\n    this.update = function () {\n      if (!this.exploded) {\n        this.firework.applyForce(gravity);\n        this.firework.update();\n\n        if (this.firework.vel.y >= 0) {\n          this.exploded = true;\n          this.explode();\n        }\n      }\n\n      for (var i = this.particles.length - 1; i >= 0; i--) {\n        this.particles[i].applyForce(gravity);\n        this.particles[i].update();\n\n        if (this.particles[i].done()) {\n          this.particles.splice(i, 1);\n        }\n      }\n    };\n\n    this.explode = function () {\n      for (var i = 0; i < 40; i++) {\n        var p = new Particle(this.firework.pos.x, this.firework.pos.y, false);\n        this.particles.push(p); //    var x = 16*p5.pow(p5.sin(i), 3) \n        //    var y = 13*p5.cos(i) - 5*p5.cos(3*i) - p5.cos(4*i)\n      }\n    };\n\n    this.show = function () {\n      if (!this.exploded) {\n        this.firework.show();\n      }\n\n      for (var i = 0; i < this.particles.length; i++) {\n        this.particles[i].show();\n      }\n    };\n  } // make library globally available\n\n\n  window.p5 = p5; //Preload function\n  // ======================================\n  // Setup function\n  // ======================================\n\n  p5.setup = function () {\n    canvas3 = p5.createCanvas(window.innerWidth, window.innerHeight / 3);\n    canvas3.id(\"canvas3\");\n    canvas3.class(\"grid\");\n    gravity = p5.createVector(0, 0.2);\n    p5.stroke(255);\n    p5.strokeWeight(5);\n    p5.background(0);\n  }; // Draw function\n  // ======================================\n\n\n  p5.draw = function () {\n    p5.background(0, 0, 0, 35);\n\n    if (p5.random(1) < 0.045) {\n      fireworks.push(new Firework());\n    }\n\n    for (var i = fireworks.length - 1; i >= 0; i--) {\n      fireworks[i].update();\n      fireworks[i].show();\n\n      if (fireworks[i].done()) {\n        fireworks.splice(i, 1);\n      }\n    }\n  };\n\n  p5.windowResized = function () {\n    p5.setup();\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sketch2);\n\n//# sourceURL=webpack:///./app/static/js/result/sketch2.js?");

/***/ }),

/***/ "./app/static/js/result/title2.js":
/*!****************************************!*\
  !*** ./app/static/js/result/title2.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Title_Module2() {\n  var title2 = document.createElement(\"h1\");\n  var title_text2 = document.createTextNode(\"Congratulations!\");\n  title2.appendChild(title_text2);\n  title2.id = \"title2\";\n  title2.className = \"grid\";\n  title2.dataset.text = \"Congratulations!\";\n  var title_div2 = document.createElement(\"div\");\n  title_div2.id = \"title_div2\";\n  title_div2.className = \"grid\";\n  var body = document.body;\n  body.appendChild(title_div2);\n  title_div2.appendChild(title2);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title_Module2);\n\n//# sourceURL=webpack:///./app/static/js/result/title2.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/static/css/result/divs2.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader!./app/static/css/result/divs2.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"#explanation2_div {\\r\\n    min-height: fit-content;\\r\\n    padding: 0.5em 1em;\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n@media(min-width: 650px) {\\r\\n    #explanation2_div {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;\\r\\n    }\\r\\n\\r\\n    #explanation2 {\\r\\n        grid-column: 2/4;\\r\\n    }\\r\\n\\r\\n    #explanation2_1 {\\r\\n        grid-column: 2/4;\\r\\n    }\\r\\n\\r\\n    #explanation3_1 {\\r\\n        grid-column: 2/4;\\r\\n    }\\r\\n\\r\\n    #explanation4_1 {\\r\\n        grid-column: 2/4;\\r\\n    }\\r\\n\\r\\n    #button2 {\\r\\n        grid-column: 2/4;\\r\\n    }\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/static/css/result/divs2.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/static/css/result/explanation2.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader!./app/static/css/result/explanation2.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Atomic+Age|Montserrat);\", \"\"]);\n\n// module\nexports.push([module.i, \"#explanation2 {\\r\\n    font-family: 'Montserrat', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    padding: 0.5em; \\r\\n    font-size: 1.4em;\\r\\n    line-height: 1.5;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n#explanation2_1 {\\r\\n    font-family: 'Montserrat', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    padding: 0.3em; \\r\\n    font-size: 1.4em;\\r\\n    line-height: 1.5;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n#explanation3_1 {\\r\\n    font-family: 'Montserrat', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    padding: 0.3em; \\r\\n    font-size: 1.4em;\\r\\n    line-height: 1.5;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n#explanation4_1 {\\r\\n    font-family: 'Montserrat', sans-serif;\\r\\n    color: cornsilk;\\r\\n    width: auto;\\r\\n    padding: 0.3em; \\r\\n    font-size: 1.4em;\\r\\n    line-height: 1.5;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n#button2 {\\r\\n    font-family: 'Montserrat', sans-serif;\\r\\n    background-color: black;\\r\\n    color: goldenrod;\\r\\n    border-radius: 20px;\\r\\n    border: 10px solid goldenrod;\\r\\n    width: auto;\\r\\n    display: block;\\r\\n    margin-top: 0.9em;\\r\\n    margin-bottom: 1em;\\r\\n    margin-left: 0.2em;\\r\\n    margin-right: 0.2em;\\r\\n    padding: 0.5em; \\r\\n    font-size: 3em;\\r\\n    line-height: 1.4;\\r\\n    letter-spacing: 1px;\\r\\n    text-align: center;\\r\\n    -webkit-transition-duration: 0.4s; /* Safari */\\r\\n    transition-duration: 0.4s;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/static/css/result/explanation2.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/static/css/result/sketch2.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader!./app/static/css/result/sketch2.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\r\\n\\r\\n#canvas3 {\\r\\n    position: absolute;\\r\\n    display: block;\\r\\n    margin: 0;\\r\\n    left: 0;\\r\\n    top: 0%;\\r\\n    min-height: 150px;\\r\\n    text-align: center;\\r\\n    overflow: hidden;\\r\\n    z-index: -1;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/static/css/result/sketch2.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/static/css/result/title2.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader!./app/static/css/result/title2.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Righteous);\", \"\"]);\n\n// module\nexports.push([module.i, \"#title_div2 {\\r\\n    min-height: 33.34%;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n#title2 {\\r\\n    position: absolute;\\r\\n    width: inherit;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    text-align: center;\\r\\n    font-family: 'Righteous', sans-serif;\\r\\n    color:black;\\r\\n    padding: 0;\\r\\n    padding-top: 0.75em;\\r\\n    padding-bottom: 0.5em;\\r\\n    height: auto;\\r\\n    margin: auto;\\r\\n    text-shadow: 0 0 40px #ff005b;\\r\\n    -webkit-text-fill-color: whitesmoke;\\r\\n    -webkit-text-stroke-width: 2px;\\r\\n}\\r\\n\\r\\n\\r\\n@media(min-width: 601px) {\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr;\\r\\n    }\\r\\n\\r\\n    #title2 {\\r\\n        grid-column: span 1;\\r\\n        font-size: 4.5rem;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 600px) {\\r\\n    #title2 {\\r\\n        grid-column: span 1;\\r\\n        font-size: 2.2rem;\\r\\n    }\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/static/css/result/title2.css?./node_modules/css-loader");

/***/ })

/******/ });