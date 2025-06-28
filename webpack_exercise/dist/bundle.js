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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

eval("var showSecret = false;\r\n\r\nsecretButton.addEventListener(\"click\", toggleSecretState);\r\nupdateSecretParagraph();\r\n\r\nfunction toggleSecretState() {\r\n    showSecret = !showSecret;\r\n    updateSecretParagraph();\r\n    updateSecretButton();\r\n}\r\n\r\nfunction updateSecretButton() {\r\n    if (showSecret) {\r\n        secretButton.textContent = \"Hide the Secret\";\r\n    } else {\r\n        secretButton.textContent = \"Show the Secret\";\r\n    }\r\n}\r\n\r\nfunction updateSecretParagraph() {\r\n    if (showSecret) {\r\n        secretParagraph.style.display = \"block\";\r\n    } else {\r\n        secretParagraph.style.display = \"none\";\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_exercise/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"]();
/******/ 	
/******/ })()
;