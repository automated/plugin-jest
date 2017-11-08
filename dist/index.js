(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: [BABEL] /Users/kirkstrobeck/sync/homedir/git/automated-tools/plugin-jest/lib/runner/index.js: Plugin/Preset files are not allowed to export objects, only functions.\n    at createDescriptor (/Users/kirkstrobeck/sync/homedir/git/automated-tools/plugin-jest/node_modules/@babel/core/lib/config/option-manager.js:365:11)\n    at /Users/kirkstrobeck/sync/homedir/git/automated-tools/plugin-jest/node_modules/@babel/core/lib/config/option-manager.js:188:12\n    at Array.map (native)\n    at /Users/kirkstrobeck/sync/homedir/git/automated-tools/plugin-jest/node_modules/@babel/core/lib/config/option-manager.js:187:48\n    at cachedFunction (/Users/kirkstrobeck/sync/homedir/git/automated-tools/plugin-jest/node_modules/@babel/core/lib/config/caching.js:48:17)\n    at OptionManager.mergeOptions (/Users/kirkstrobeck/sync/homedir/git/automated-tools/plugin-jest/node_modules/@babel/core/lib/config/option-manager.js:53:18)\n    at OptionManager.init (/Users/kirkstrobeck/sync/homedir/git/automated-tools/plugin-jest/node_modules/@babel/core/lib/config/option-manager.js:121:14)\n    at manageOptions (/Users/kirkstrobeck/sync/homedir/git/automated-tools/plugin-jest/node_modules/@babel/core/lib/config/option-manager.js:37:30)\n    at loadConfig (/Users/kirkstrobeck/sync/homedir/git/automated-tools/plugin-jest/node_modules/@babel/core/lib/config/index.js:15:37)\n    at Object.transform (/Users/kirkstrobeck/sync/homedir/git/automated-tools/plugin-jest/node_modules/@babel/core/lib/transform.js:13:36)\n    at transpile (/Users/kirkstrobeck/sync/homedir/git/automated-tools/plugin-jest/node_modules/babel-loader/lib/index.js:55:20)\n    at Object.module.exports (/Users/kirkstrobeck/sync/homedir/git/automated-tools/plugin-jest/node_modules/babel-loader/lib/index.js:179:20)");

/***/ })
/******/ ]);
});