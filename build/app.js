/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Constants/constants.js":
/*!************************************!*\
  !*** ./src/Constants/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OPEN_WEATHER_MAP: () => (/* binding */ OPEN_WEATHER_MAP)\n/* harmony export */ });\nvar OPEN_WEATHER_MAP = \"3bceb3bcb8dfde5c093bb5f845da74a6\";\n\n//# sourceURL=webpack://weatherapp/./src/Constants/constants.js?");

/***/ }),

/***/ "./src/Fetch/fetch.js":
/*!****************************!*\
  !*** ./src/Fetch/fetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   weatherForecast: () => (/* binding */ weatherForecast)\n/* harmony export */ });\n//Forecast 5 days / 3 hour interval\nfunction weatherForecast(cityName, key) {\n  return new Promise(function (resolve, reject) {\n    fetch(\"http://api.openweathermap.org/data/2.5/forecast?q=\".concat(cityName, \"&appid=\").concat(key)).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return resolve(data);\n    })[\"catch\"](function (err) {\n      return reject(err);\n    });\n  });\n}\n\n//# sourceURL=webpack://weatherapp/./src/Fetch/fetch.js?");

/***/ }),

/***/ "./src/JSONManipulator/groupInfoByDay.js":
/*!***********************************************!*\
  !*** ./src/JSONManipulator/groupInfoByDay.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   groupInfoByDay: () => (/* binding */ groupInfoByDay)\n/* harmony export */ });\n/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date */ \"./src/utils/date.js\");\n\nvar groupInfoByDay = function groupInfoByDay(_ref) {\n  var list = _ref.list;\n  var groupedInfo = {};\n  //Mientras estemos en los limites del array\n  var i = 0;\n  while (i < list.length) {\n    //coger del primer elemento el nombre del dia\n    var day = (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.getDateName)(list[i][\"dt_txt\"]);\n    console.log(day, list[i][\"dt_txt\"], new Date(list[i][\"dt_txt\"]).getDay());\n    //mirar si el dia no esta en el objeto\n    //si no esta inicializar un array donde se guardara la informacion de cada dia\n    //if (!(day in groupedInfo)) groupedInfo[day] = [];\n    //guardar informacion en objeto\n    /*while (i < list.length && day === getDateName(list[i][\"dt_txt\"])) {\r\n      groupedInfo[day].push(list[i]);\r\n      i++;\r\n    }*/\n    i++;\n  }\n  //return groupedInfo;\n};\n\n//# sourceURL=webpack://weatherapp/./src/JSONManipulator/groupInfoByDay.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants/constants */ \"./src/Constants/constants.js\");\n/* harmony import */ var _Fetch_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fetch/fetch */ \"./src/Fetch/fetch.js\");\n/* harmony import */ var _JSONManipulator_groupInfoByDay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JSONManipulator/groupInfoByDay */ \"./src/JSONManipulator/groupInfoByDay.js\");\nconsole.log(\"Hola\");\n\n\n\ntry {\n  var data = await (0,_Fetch_fetch__WEBPACK_IMPORTED_MODULE_1__.weatherForecast)(\"London\", _Constants_constants__WEBPACK_IMPORTED_MODULE_0__.OPEN_WEATHER_MAP);\n  console.log((0,_JSONManipulator_groupInfoByDay__WEBPACK_IMPORTED_MODULE_2__.groupInfoByDay)(data));\n} catch (err) {\n  console.log(err);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://weatherapp/./src/app.js?");

/***/ }),

/***/ "./src/utils/date.js":
/*!***************************!*\
  !*** ./src/utils/date.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDateName: () => (/* binding */ getDateName),\n/* harmony export */   isDateEqual: () => (/* binding */ isDateEqual)\n/* harmony export */ });\n//Take a date text. Ej \"2023-08-05 09:00:00\"\nvar isDateEqual = function isDateEqual(baseDate, dateToCompare) {\n  return new Date(baseDate).toDateString() === new Date(dateToCompare).toDateString();\n};\nvar numToDayName = {\n  0: \"Monday\",\n  1: \"Tuesday\",\n  2: \"Wednesday\",\n  3: \"Thursday\",\n  4: \"Friday\",\n  5: \"Saturday\",\n  6: \"Sunday\"\n};\n\n//Take a date text. Ej \"2023-08-05 09:00:00\"\nvar getDateNumber = function getDateNumber(dateTxt) {\n  return new Date(dateTxt).getDay();\n};\nvar getDateName = function getDateName(dateTxt) {\n  return numToDayName[getDateNumber(dateTxt)];\n};\n\n//# sourceURL=webpack://weatherapp/./src/utils/date.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;