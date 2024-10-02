/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/user.png":
/*!*************************!*\
  !*** ./images/user.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/user.png\");\n\n//# sourceURL=webpack:///./images/user.png?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/user.png */ \"./images/user.png\");\nvar _this = undefined;\n\n\nvar LOCAL_STORAGE_KEY = 'messages';\nvar USER = 'Владимир Михайлов';\ndocument.addEventListener('DOMContentLoaded', function () {\n  var form = document.querySelector('form');\n  var input = form.querySelector('.form__input');\n  var messagesContainer = document.querySelector('.chat-messages');\n  document.getElementById('user-avatar').setAttribute('src', _images_user_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  form.addEventListener('submit', handleSubmit.bind(_this));\n  form.addEventListener('keypress', handleKeyPress.bind(_this));\n  function handleSubmit(event) {\n    event.preventDefault();\n    var value = input.value;\n    if (!value) {\n      return;\n    }\n    var messageInfo = {\n      time: getCurrentTime(),\n      user: USER,\n      message: value\n    };\n    addMessage(messageInfo);\n    messageHtml(messageInfo);\n    input.value = '';\n  }\n  function handleKeyPress(event) {\n    if (event.keyCode === 13) {\n      form.dispatchEvent(new Event('submit'));\n    }\n  }\n  function addMessage(messageInfo) {\n    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {\n      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));\n    }\n    var messages = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));\n    messages.push(messageInfo);\n    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));\n  }\n  function getCurrentTime() {\n    var date = new Date();\n    var hours = String(date.getHours()).padStart(2, '0');\n    var minutes = String(date.getMinutes()).padStart(2, '0');\n    return \"\".concat(hours, \":\").concat(minutes);\n  }\n  function loadMessages() {\n    var messagesLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);\n    var messages = messagesLocalStorage ? JSON.parse(messagesLocalStorage) : [];\n    messages.forEach(messageHtml);\n  }\n  function messageTemplate(messageInfo) {\n    var messageElement = document.createElement('div');\n    messageElement.classList.add('message');\n    messageElement.innerHTML = \"\\n      <p class=\\\"message__content \".concat(messageInfo.user !== USER ? 'message--participant' : '', \"\\\">\\n        \").concat(messageInfo.message, \"\\n      </p>\\n      <span class=\\\"message__time\\\">\").concat(messageInfo.time, \"</span>\\n    \");\n    return messageElement;\n  }\n  function messageHtml(messageInfo) {\n    var messageElement = messageTemplate(messageInfo);\n    messagesContainer.appendChild(messageElement);\n    messagesContainer.scrollTop = messagesContainer.scrollHeight;\n  }\n  window.onload = function () {\n    messagesContainer.scrollTop = messagesContainer.scrollHeight;\n  };\n  loadMessages();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });