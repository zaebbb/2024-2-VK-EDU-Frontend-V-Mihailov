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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMessage\", function() { return addMessage; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/constants.js\");\n\nvar addMessage = function addMessage(messageInfo, id) {\n  if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"])) {\n    var chats = JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"]));\n    var chatId = chats.findIndex(function (chat) {\n      return Number(chat.id) === Number(id);\n    });\n    chats[chatId].messages.push(messageInfo);\n    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"], JSON.stringify(chats));\n  }\n};\n\n//# sourceURL=webpack:///./components/addMessage.js?");

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
/*! exports provided: LOCAL_STORAGE_KEY, LOCAL_STORAGE_KEY_INIT_MOCK_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOCAL_STORAGE_KEY\", function() { return LOCAL_STORAGE_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOCAL_STORAGE_KEY_INIT_MOCK_DATA\", function() { return LOCAL_STORAGE_KEY_INIT_MOCK_DATA; });\nvar LOCAL_STORAGE_KEY = 'messages';\nvar LOCAL_STORAGE_KEY_INIT_MOCK_DATA = 'initMockData';\n\n//# sourceURL=webpack:///./components/constants.js?");

/***/ }),

/***/ "./components/getRandomFullname.js":
/*!*****************************************!*\
  !*** ./components/getRandomFullname.js ***!
  \*****************************************/
/*! exports provided: getRandomFullname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomFullname\", function() { return getRandomFullname; });\nvar getRandomFullname = function getRandomFullname() {\n  var maleNames = [\"Александр\", \"Сергей\", \"Дмитрий\", \"Андрей\", \"Максим\", \"Евгений\", \"Игорь\", \"Николай\", \"Роман\", \"Владимир\"];\n  var femaleNames = [\"Анна\", \"Екатерина\", \"Мария\", \"Ольга\", \"Дарья\", \"Татьяна\", \"Светлана\", \"Елена\", \"Наталья\", \"Юлия\"];\n  var maleSurnames = [\"Иванов\", \"Петров\", \"Сидоров\", \"Кузнецов\", \"Смирнов\", \"Попов\", \"Лебедев\", \"Козлов\", \"Новиков\", \"Морозов\"];\n  var femaleSurnames = [\"Иванова\", \"Петрова\", \"Сидорова\", \"Кузнецова\", \"Смирнова\", \"Попова\", \"Лебедева\", \"Козлова\", \"Новикова\", \"Морозова\"];\n\n  // Случайный выбор пола\n  var isMale = Math.random() < 0.5;\n  var randomName, randomSurname;\n  if (isMale) {\n    randomName = maleNames[Math.floor(Math.random() * maleNames.length)];\n    randomSurname = maleSurnames[Math.floor(Math.random() * maleSurnames.length)];\n  } else {\n    randomName = femaleNames[Math.floor(Math.random() * femaleNames.length)];\n    randomSurname = femaleSurnames[Math.floor(Math.random() * femaleSurnames.length)];\n  }\n  return \"\".concat(randomName, \" \").concat(randomSurname);\n};\n\n//# sourceURL=webpack:///./components/getRandomFullname.js?");

/***/ }),

/***/ "./components/getUserInfo.js":
/*!***********************************!*\
  !*** ./components/getUserInfo.js ***!
  \***********************************/
/*! exports provided: getUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserInfo\", function() { return getUserInfo; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/constants.js\");\n\nvar getUserInfo = function getUserInfo(id) {\n  var usersLocalStorage = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"]);\n  var users = usersLocalStorage ? JSON.parse(usersLocalStorage) : [];\n  var user = users.find(function (user) {\n    return Number(user.id) === Number(id);\n  });\n  if (user) {\n    return user;\n  }\n};\n\n//# sourceURL=webpack:///./components/getUserInfo.js?");

/***/ }),

/***/ "./components/loadChats.js":
/*!*********************************!*\
  !*** ./components/loadChats.js ***!
  \*********************************/
/*! exports provided: loadChats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadChats\", function() { return loadChats; });\n/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/user.png */ \"./images/user.png\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/constants.js\");\n\n\nvar loadChats = function loadChats() {\n  var users = JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__[\"LOCAL_STORAGE_KEY\"]));\n  var chatsContainer = document.getElementById('chats-list');\n  if (chatsContainer) {\n    users.forEach(function (user) {\n      var lastMessage = user.messages.at(-1);\n      var chat = document.createElement('a');\n      chat.setAttribute('href', \"./chat.html?id=\".concat(user.id));\n      chat.className = 'chat-user';\n      if (!lastMessage) {\n        lastMessage = {\n          time: '',\n          message: 'Новый чат'\n        };\n      }\n      chat.innerHTML = \"\\n        <img \\n          src=\\\"\".concat(_images_user_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \"\\\" \\n          alt=\\\"\").concat(user.name, \"\\\"\\n          class=\\\"chat-user__avatar\\\"\\n        >\\n\\n        <div class=\\\"chat-user-info\\\">\\n          <div class=\\\"chat-user-message\\\">\\n            <h3 class=\\\"user-message__username\\\">\\n              \").concat(user.name, \"\\n            </h3>\\n\\n            <p class=\\\"user-message__text\\\">\\n              \").concat(lastMessage.message, \"\\n            </p>\\n          </div>\\n\\n          <div class=\\\"chat-user-properties\\\">\\n            <span class=\\\"user-properties__time\\\">\\n              \").concat(lastMessage.time, \"\\n            </span>\\n\\n            <span class=\\\"user-properties__status user-properties__status--new-message\\\">\\n              99\\n            </span>\\n          </div>\\n        </div>\\n      \");\n      chatsContainer.appendChild(chat);\n    });\n  }\n};\n\n//# sourceURL=webpack:///./components/loadChats.js?");

/***/ }),

/***/ "./components/loadMessages.js":
/*!************************************!*\
  !*** ./components/loadMessages.js ***!
  \************************************/
/*! exports provided: loadMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMessages\", function() { return loadMessages; });\n/* harmony import */ var _getUserInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUserInfo */ \"./components/getUserInfo.js\");\n/* harmony import */ var _messageHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messageHtml */ \"./components/messageHtml.js\");\n\n\nvar loadMessages = function loadMessages(messageContainer, id) {\n  var user = Object(_getUserInfo__WEBPACK_IMPORTED_MODULE_0__[\"getUserInfo\"])(id);\n  if (user) {\n    var messages = user.messages;\n    messages.forEach(function (message) {\n      Object(_messageHtml__WEBPACK_IMPORTED_MODULE_1__[\"messageHtml\"])(message, messageContainer);\n    });\n  }\n};\n\n//# sourceURL=webpack:///./components/loadMessages.js?");

/***/ }),

/***/ "./components/loadUserInfo.js":
/*!************************************!*\
  !*** ./components/loadUserInfo.js ***!
  \************************************/
/*! exports provided: loadUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadUserInfo\", function() { return loadUserInfo; });\n/* harmony import */ var _getUserInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUserInfo */ \"./components/getUserInfo.js\");\n\nvar loadUserInfo = function loadUserInfo(id) {\n  var user = Object(_getUserInfo__WEBPACK_IMPORTED_MODULE_0__[\"getUserInfo\"])(id);\n  var profileNameElement = document.getElementById('profile-name');\n  if (user && profileNameElement) {\n    profileNameElement.textContent = user.name;\n  }\n};\n\n//# sourceURL=webpack:///./components/loadUserInfo.js?");

/***/ }),

/***/ "./components/messageHtml.js":
/*!***********************************!*\
  !*** ./components/messageHtml.js ***!
  \***********************************/
/*! exports provided: messageHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"messageHtml\", function() { return messageHtml; });\nvar messageTemplate = function messageTemplate(messageInfo) {\n  var messageElement = document.createElement('div');\n  messageElement.classList.add('message');\n  messageElement.classList.add(messageInfo.isUser ? 'message--participant' : 'message--user');\n  messageElement.innerHTML = \"\\n    <p class=\\\"message__content\\\">\\n      \".concat(messageInfo.message, \"\\n    </p>\\n    <span class=\\\"message__time\\\">\").concat(messageInfo.time, \"</span>\\n  \");\n  return messageElement;\n};\nvar messageHtml = function messageHtml(messageInfo, messagesContainer) {\n  var messageElement = messageTemplate(messageInfo);\n  messagesContainer.appendChild(messageElement);\n  messagesContainer.scrollTop = messagesContainer.scrollHeight;\n  requestAnimationFrame(function () {\n    messageElement.classList.add('show');\n  });\n};\n\n//# sourceURL=webpack:///./components/messageHtml.js?");

/***/ }),

/***/ "./components/mockData.js":
/*!********************************!*\
  !*** ./components/mockData.js ***!
  \********************************/
/*! exports provided: mockMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mockMessages\", function() { return mockMessages; });\nvar mockMessages = [{\n  id: 1,\n  name: 'Владимир Михайлов',\n  timeOnline: '11:40',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}, {\n  id: 3,\n  name: 'Игорь Петров',\n  timeOnline: '11:50',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}, {\n  id: 4,\n  name: 'Елена Кузнецова',\n  timeOnline: '12:00',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}, {\n  id: 5,\n  name: 'Ольга Васильева',\n  timeOnline: '12:15',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}, {\n  id: 6,\n  name: 'Сергей Иванов',\n  timeOnline: '12:30',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}, {\n  id: 7,\n  name: 'Мария Федорова',\n  timeOnline: '12:45',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}, {\n  id: 8,\n  name: 'Дмитрий Сидоров',\n  timeOnline: '13:00',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}, {\n  id: 9,\n  name: 'Алексей Громов',\n  timeOnline: '13:15',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}, {\n  id: 10,\n  name: 'Татьяна Лебедева',\n  timeOnline: '13:30',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}, {\n  id: 11,\n  name: 'Кирилл Морозов',\n  timeOnline: '13:45',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}, {\n  id: 12,\n  name: 'Екатерина Соколова',\n  timeOnline: '14:00',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}, {\n  id: 13,\n  name: 'Анастасия Белова',\n  timeOnline: '14:15',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}, {\n  id: 14,\n  name: 'Виктор Станиславов',\n  timeOnline: '14:30',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}, {\n  id: 15,\n  name: 'Людмила Шевченко',\n  timeOnline: '14:45',\n  messages: [{\n    isUser: true,\n    message: 'Привет, Игорь!',\n    time: '11:38'\n  }, {\n    isUser: false,\n    message: 'Привет!',\n    time: '11:39'\n  }, {\n    isUser: true,\n    message: 'Как дела?',\n    time: '11:40'\n  }, {\n    isUser: false,\n    message: 'Все хорошо.',\n    time: '11:41'\n  }, {\n    isUser: true,\n    message: 'Здорово!',\n    time: '11:42'\n  }, {\n    isUser: false,\n    message: 'Чем занимаешься?',\n    time: '11:43'\n  }, {\n    isUser: true,\n    message: 'Работаю над отчетом.',\n    time: '11:44'\n  }, {\n    isUser: false,\n    message: 'Успехов!',\n    time: '11:45'\n  }, {\n    isUser: true,\n    message: 'Спасибо!',\n    time: '11::46'\n  }, {\n    isUser: false,\n    message: 'Когда сдадите?',\n    time: '11::47'\n  }, {\n    isUser: false,\n    message: 'Жду результатов.',\n    time: '11::49'\n  }, {\n    isUser: true,\n    message: 'Обязательно сообщу.',\n    time: '11::50'\n  }, {\n    isUser: false,\n    message: 'Хорошо.',\n    time: '11::51'\n  }, {\n    isUser: true,\n    message: 'Пока!',\n    time: '11::52'\n  }]\n}];\n\n//# sourceURL=webpack:///./components/mockData.js?");

/***/ }),

/***/ "./components/newChat.js":
/*!*******************************!*\
  !*** ./components/newChat.js ***!
  \*******************************/
/*! exports provided: newChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newChat\", function() { return newChat; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/constants.js\");\n/* harmony import */ var _getRandomFullname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRandomFullname */ \"./components/getRandomFullname.js\");\n\n\nvar newChat = function newChat() {\n  var fullName = Object(_getRandomFullname__WEBPACK_IMPORTED_MODULE_1__[\"getRandomFullname\"])();\n  var id = Date.now();\n  var chat = {\n    id: id,\n    name: fullName,\n    timeOnline: '14:45',\n    messages: []\n  };\n  var usersLocalStorage = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"]);\n  var chats = usersLocalStorage ? JSON.parse(usersLocalStorage) : [];\n  chats.push(chat);\n  localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"], JSON.stringify(chats));\n  window.location.href = \"chat.html?id=\".concat(id);\n};\n\n//# sourceURL=webpack:///./components/newChat.js?");

/***/ }),

/***/ "./components/saveMockData.js":
/*!************************************!*\
  !*** ./components/saveMockData.js ***!
  \************************************/
/*! exports provided: saveMockData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveMockData\", function() { return saveMockData; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/constants.js\");\n/* harmony import */ var _mockData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mockData */ \"./components/mockData.js\");\n\n\nvar saveMockData = function saveMockData() {\n  var isInit = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY_INIT_MOCK_DATA\"]);\n  if (!isInit) {\n    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY_INIT_MOCK_DATA\"], JSON.stringify(Boolean(true)));\n    localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__[\"LOCAL_STORAGE_KEY\"], JSON.stringify(_mockData__WEBPACK_IMPORTED_MODULE_1__[\"mockMessages\"]));\n  }\n};\n\n//# sourceURL=webpack:///./components/saveMockData.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/header.css */ \"./styles/header.css\");\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_chat_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/chat-form.css */ \"./styles/chat-form.css\");\n/* harmony import */ var _styles_chat_form_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_chat_form_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chat_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/chat.css */ \"./styles/chat.css\");\n/* harmony import */ var _styles_chat_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_chat_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_add_message_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/add-message.css */ \"./styles/add-message.css\");\n/* harmony import */ var _styles_add_message_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_add_message_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_chats_list_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/chats-list.css */ \"./styles/chats-list.css\");\n/* harmony import */ var _styles_chats_list_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_chats_list_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/avatar */ \"./components/avatar.js\");\n/* harmony import */ var _components_loadMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loadMessages */ \"./components/loadMessages.js\");\n/* harmony import */ var _components_addMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/addMessage */ \"./components/addMessage.js\");\n/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/utils */ \"./components/utils.js\");\n/* harmony import */ var _components_messageHtml__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/messageHtml */ \"./components/messageHtml.js\");\n/* harmony import */ var _components_loadChats__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/loadChats */ \"./components/loadChats.js\");\n/* harmony import */ var _components_loadUserInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/loadUserInfo */ \"./components/loadUserInfo.js\");\n/* harmony import */ var _components_saveMockData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/saveMockData */ \"./components/saveMockData.js\");\n/* harmony import */ var _components_newChat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/newChat */ \"./components/newChat.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var form = document.querySelector('form');\n  var messagesContainer = document.querySelector('.chat-messages');\n  var newChatButton = document.querySelector('.add-message');\n  if (form && messagesContainer) {\n    var handleSubmit = function handleSubmit(event) {\n      event.preventDefault();\n      var value = input.value.trim();\n      if (!value) {\n        return;\n      }\n      var messageInfo = {\n        time: Object(_components_utils__WEBPACK_IMPORTED_MODULE_9__[\"getCurrentTime\"])(),\n        isUser: false,\n        message: value\n      };\n      Object(_components_addMessage__WEBPACK_IMPORTED_MODULE_8__[\"addMessage\"])(messageInfo, id);\n      Object(_components_messageHtml__WEBPACK_IMPORTED_MODULE_10__[\"messageHtml\"])(messageInfo, messagesContainer);\n      input.value = '';\n    };\n    var handleKeyPress = function handleKeyPress(event) {\n      if (event.keyCode === 13) {\n        form.dispatchEvent(new Event('submit'));\n      }\n    };\n    var input = form.querySelector('.form__input');\n    var url = new URLSearchParams(window.location.search);\n    var id = url.get('id');\n    form.addEventListener('submit', handleSubmit.bind(_this));\n    form.addEventListener('keypress', handleKeyPress.bind(_this));\n    window.onload = function () {\n      messagesContainer.scrollTop = messagesContainer.scrollHeight;\n    };\n    Object(_components_loadMessages__WEBPACK_IMPORTED_MODULE_7__[\"loadMessages\"])(messagesContainer, id);\n    Object(_components_loadUserInfo__WEBPACK_IMPORTED_MODULE_12__[\"loadUserInfo\"])(id);\n    Object(_components_avatar__WEBPACK_IMPORTED_MODULE_6__[\"loadUserAvatar\"])();\n  }\n  if (newChatButton) {\n    newChatButton.addEventListener('click', _components_newChat__WEBPACK_IMPORTED_MODULE_14__[\"newChat\"]);\n  }\n  Object(_components_saveMockData__WEBPACK_IMPORTED_MODULE_13__[\"saveMockData\"])();\n  Object(_components_loadChats__WEBPACK_IMPORTED_MODULE_11__[\"loadChats\"])();\n});\n\n//# sourceURL=webpack:///./index.js?");

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