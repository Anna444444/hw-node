/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/index.js":
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./public/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.js */ \"./public/slider.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loginForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginForm.js */ \"./public/loginForm.js\");\n/* harmony import */ var _loginForm_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loginForm_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://classwork/./public/index.js?");

/***/ }),

/***/ "./public/loginForm.js":
/*!*****************************!*\
  !*** ./public/loginForm.js ***!
  \*****************************/
/***/ (() => {

eval("const form = document.querySelector('.login-form');\r\nconst usernameInput = form.querySelector('input[type=\"text\"]');\r\nconst passwordInput = form.querySelector('input[type=\"password\"]');\r\n\r\nform.addEventListener('submit', handleSubmit);\r\n\r\nfunction handleSubmit(event) {\r\n  event.preventDefault(); // Предотвращаем отправку формы\r\n\r\n  const username = usernameInput.value;\r\n  const password = passwordInput.value;\r\n\r\n  // Выполняем проверку данных и обрабатываем результат\r\n  if (username === 'admin' && password === 'password') {\r\n    // Успешная авторизация\r\n    console.log('Авторизация успешна!');\r\n    form.reset(); // Очищаем поля формы\r\n  } else {\r\n    // Неудачная авторизация\r\n    console.log('Неверное имя пользователя или пароль');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://classwork/./public/loginForm.js?");

/***/ }),

/***/ "./public/menu.js":
/*!************************!*\
  !*** ./public/menu.js ***!
  \************************/
/***/ (() => {

eval("const menuItems = document.querySelectorAll('.main-menu ul li a');\r\n\r\n// Обработчик клика на пункт меню\r\nfunction handleClick(event) {\r\n  // Удаление активного класса у всех пунктов меню\r\n  menuItems.forEach((menuItem) => {\r\n    menuItem.classList.remove('active');\r\n  });\r\n\r\n  // Добавление активного класса к выбранному пункту меню\r\n  event.target.classList.add('active');\r\n}\r\n\r\n// Назначение обработчика клика для каждого пункта меню\r\nmenuItems.forEach((menuItem) => {\r\n  menuItem.addEventListener('click', handleClick);\r\n});\r\n\n\n//# sourceURL=webpack://classwork/./public/menu.js?");

/***/ }),

/***/ "./public/slider.js":
/*!**************************!*\
  !*** ./public/slider.js ***!
  \**************************/
/***/ (() => {

eval("// Получение всех слайдов\r\nconst slider = document.querySelector('.slider');\r\nconst slides = slider.querySelectorAll('img');\r\nconst totalSlides = slides.length;\r\n\r\n// Индекс текущего слайда\r\nlet currentSlide = 0;\r\n\r\n// Интервал переключения слайдов (в миллисекундах)\r\nconst interval = 3000;\r\n\r\n// Функция для отображения текущего слайда\r\nfunction showSlide(slideIndex) {\r\n  slides.forEach((slide, index) => {\r\n    if (index === slideIndex) {\r\n      slide.style.display = 'block';\r\n    } else {\r\n      slide.style.display = 'none';\r\n    }\r\n  });\r\n}\r\n\r\n// Функция для переключения на следующий слайд\r\nfunction nextSlide() {\r\n  currentSlide++;\r\n  if (currentSlide >= totalSlides) {\r\n    currentSlide = 0;\r\n  }\r\n  showSlide(currentSlide);\r\n}\r\n\r\n// Автоматическое переключение слайдов\r\nsetInterval(nextSlide, interval);\r\n\r\n// Отображение первого слайда\r\nshowSlide(currentSlide);\r\n\n\n//# sourceURL=webpack://classwork/./public/slider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/index.js");
/******/ 	
/******/ })()
;