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

/***/ "./components/addMessage.js":
/*!**********************************!*\
  !*** ./components/addMessage.js ***!
  \**********************************/
/*! exports provided: addMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMessage\", function() { return addMessage; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/constants.js\");\n\nvar addMessage = function addMessage(messageInfo) {\n  if (!localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"])) {\n    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"], JSON.stringify([]));\n  }\n  var messages = JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"]));\n  messages.push(messageInfo);\n  localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"], JSON.stringify(messages));\n};\n\n//# sourceURL=webpack:///./components/addMessage.js?");

/***/ }),

/***/ "./components/avatar.js":
/*!******************************!*\
  !*** ./components/avatar.js ***!
  \******************************/
/*! exports provided: loadUserAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadUserAvatar\", function() { return loadUserAvatar; });\n/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/user.png */ \"./images/user.png\");\n\nvar loadUserAvatar = function loadUserAvatar() {\n  var userAvatar = document.getElementById('user-avatar');\n  if (userAvatar) {\n    userAvatar.setAttribute('src', _images_user_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n};\n\n//# sourceURL=webpack:///./components/avatar.js?");

/***/ }),

/***/ "./components/constants.js":
/*!*********************************!*\
  !*** ./components/constants.js ***!
  \*********************************/
/*! exports provided: LOCAL_STORAGE_KEY, USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOCAL_STORAGE_KEY\", function() { return LOCAL_STORAGE_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER\", function() { return USER; });\nvar LOCAL_STORAGE_KEY = 'messages';\nvar USER = 'Владимир Михайлов';\n\n//# sourceURL=webpack:///./components/constants.js?");

/***/ }),

/***/ "./components/loadMessages.js":
/*!************************************!*\
  !*** ./components/loadMessages.js ***!
  \************************************/
/*! exports provided: loadMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMessages\", function() { return loadMessages; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/constants.js\");\n/* harmony import */ var _messageHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messageHtml */ \"./components/messageHtml.js\");\n\n\nvar loadMessages = function loadMessages(messageContainer) {\n  var messagesLocalStorage = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"]);\n  var messages = messagesLocalStorage ? JSON.parse(messagesLocalStorage) : [];\n  messages.forEach(function (message) {\n    Object(_messageHtml__WEBPACK_IMPORTED_MODULE_1__[\"messageHtml\"])(message, messageContainer);\n  });\n};\n\n//# sourceURL=webpack:///./components/loadMessages.js?");

/***/ }),

/***/ "./components/messageHtml.js":
/*!***********************************!*\
  !*** ./components/messageHtml.js ***!
  \***********************************/
/*! exports provided: messageHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"messageHtml\", function() { return messageHtml; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/constants.js\");\n\nvar messageTemplate = function messageTemplate(messageInfo) {\n  var messageElement = document.createElement('div');\n  messageElement.classList.add('message');\n  messageElement.innerHTML = \"\\n    <p class=\\\"message__content \".concat(messageInfo.user !== _constants__WEBPACK_IMPORTED_MODULE_0__[\"USER\"] ? 'message--participant' : '', \"\\\">\\n      \").concat(messageInfo.message, \"\\n    </p>\\n    <span class=\\\"message__time\\\">\").concat(messageInfo.time, \"</span>\\n  \");\n  return messageElement;\n};\nvar messageHtml = function messageHtml(messageInfo, messagesContainer) {\n  var messageElement = messageTemplate(messageInfo);\n  messagesContainer.appendChild(messageElement);\n  messagesContainer.scrollTop = messagesContainer.scrollHeight;\n};\n\n//# sourceURL=webpack:///./components/messageHtml.js?");

/***/ }),

/***/ "./components/utils.js":
/*!*****************************!*\
  !*** ./components/utils.js ***!
  \*****************************/
/*! exports provided: getCurrentTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentTime\", function() { return getCurrentTime; });\nvar getCurrentTime = function getCurrentTime() {\n  var date = new Date();\n  var hours = String(date.getHours()).padStart(2, '0');\n  var minutes = String(date.getMinutes()).padStart(2, '0');\n  return \"\".concat(hours, \":\").concat(minutes);\n};\n\n//# sourceURL=webpack:///./components/utils.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/header.css */ \"./styles/header.css\");\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_chat_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/chat-form.css */ \"./styles/chat-form.css\");\n/* harmony import */ var _styles_chat_form_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_chat_form_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chat_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/chat.css */ \"./styles/chat.css\");\n/* harmony import */ var _styles_chat_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_chat_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_add_message_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/add-message.css */ \"./styles/add-message.css\");\n/* harmony import */ var _styles_add_message_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_add_message_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_chats_list_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/chats-list.css */ \"./styles/chats-list.css\");\n/* harmony import */ var _styles_chats_list_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_chats_list_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/avatar */ \"./components/avatar.js\");\n/* harmony import */ var _components_loadMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loadMessages */ \"./components/loadMessages.js\");\n/* harmony import */ var _components_addMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/addMessage */ \"./components/addMessage.js\");\n/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/utils */ \"./components/utils.js\");\n/* harmony import */ var _components_messageHtml__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/messageHtml */ \"./components/messageHtml.js\");\n/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/constants */ \"./components/constants.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var form = document.querySelector('form');\n  var input = form.querySelector('.form__input');\n  var messagesContainer = document.querySelector('.chat-messages');\n  form.addEventListener('submit', handleSubmit.bind(_this));\n  form.addEventListener('keypress', handleKeyPress.bind(_this));\n  function handleSubmit(event) {\n    event.preventDefault();\n    var value = input.value;\n    if (!value) {\n      return;\n    }\n    var messageInfo = {\n      time: Object(_components_utils__WEBPACK_IMPORTED_MODULE_9__[\"getCurrentTime\"])(),\n      user: _components_constants__WEBPACK_IMPORTED_MODULE_11__[\"USER\"],\n      message: value\n    };\n    Object(_components_addMessage__WEBPACK_IMPORTED_MODULE_8__[\"addMessage\"])(messageInfo);\n    Object(_components_messageHtml__WEBPACK_IMPORTED_MODULE_10__[\"messageHtml\"])(messageInfo, messagesContainer);\n    input.value = '';\n  }\n  function handleKeyPress(event) {\n    if (event.keyCode === 13) {\n      form.dispatchEvent(new Event('submit'));\n    }\n  }\n  window.onload = function () {\n    messagesContainer.scrollTop = messagesContainer.scrollHeight;\n  };\n  Object(_components_loadMessages__WEBPACK_IMPORTED_MODULE_7__[\"loadMessages\"])(messagesContainer);\n  Object(_components_avatar__WEBPACK_IMPORTED_MODULE_6__[\"loadUserAvatar\"])();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./styles/add-message.css":
/*!********************************!*\
  !*** ./styles/add-message.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/add-message.css?");

/***/ }),

/***/ "./styles/chat-form.css":
/*!******************************!*\
  !*** ./styles/chat-form.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/chat-form.css?");

/***/ }),

/***/ "./styles/chat.css":
/*!*************************!*\
  !*** ./styles/chat.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/chat.css?");

/***/ }),

/***/ "./styles/chats-list.css":
/*!*******************************!*\
  !*** ./styles/chats-list.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/chats-list.css?");

/***/ }),

/***/ "./styles/header.css":
/*!***************************!*\
  !*** ./styles/header.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/header.css?");

/***/ })

/******/ });