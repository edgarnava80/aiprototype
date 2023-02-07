"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MyPage() {\n    const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    async function handleSubmit(e) {\n        e.preventDefault();\n        setIsLoading(true);\n        const response = await fetch(\"/api/get-answer\", {\n            method: \"POST\",\n            headers: {\n                \"Accept\": \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                prompt: prompt\n            })\n        });\n        const data = await response.json();\n        setAnswer(data.text.trim());\n        setIsLoading(false);\n    }\n    function handleChange(e) {\n        setPrompt(e.target.value);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Give Any Instruction\"\n            }, void 0, false, {\n                fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"our-form\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"prompt-field\",\n                        type: \"text\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prompt-button\",\n                        children: \"Go!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loading-spinner\"\n            }, void 0, false, {\n                fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"answer-area\",\n                children: answer\n            }, void 0, false, {\n                fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFFakIsU0FBU0MsU0FBUztJQUMvQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhELGVBQWVRLGFBQWFDLENBQUMsRUFBRTtRQUM3QkEsRUFBRUMsY0FBYztRQUNoQkgsYUFBYSxJQUFJO1FBRWpCLE1BQU1JLFdBQVcsTUFBTUMsTUFBTSxtQkFBbUI7WUFDOUNDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxVQUFVO2dCQUNWLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVmLFFBQVFBO1lBQU87UUFDeEM7UUFDQSxNQUFNZ0IsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO1FBQ2hDZCxVQUFVYSxLQUFLRSxJQUFJLENBQUNDLElBQUk7UUFDeEJkLGFBQWEsS0FBSztJQUNwQjtJQUVBLFNBQVNlLGFBQWFiLENBQUMsRUFBRTtRQUN2Qk4sVUFBVU0sRUFBRWMsTUFBTSxDQUFDQyxLQUFLO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0YsV0FBVTtnQkFBV0csVUFBVXJCOztrQ0FDbkMsOERBQUNzQjt3QkFBTUosV0FBVTt3QkFBZUssTUFBSzt3QkFBT0MsVUFBVVY7Ozs7OztrQ0FDdEQsOERBQUNXO3dCQUFPUCxXQUFVO2tDQUFnQjs7Ozs7Ozs7Ozs7O1lBR25DcEIsMkJBQWEsOERBQUNtQjtnQkFBSUMsV0FBVTs7Ozs7OzBCQUU3Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQWV0Qjs7Ozs7Ozs7Ozs7O0FBR3BDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVBhZ2UoKSB7XHJcbiAgY29uc3QgW3Byb21wdCwgc2V0UHJvbXB0XSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZXQtYW5zd2VyXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJvbXB0OiBwcm9tcHQgfSlcclxuICAgIH0pXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICBzZXRBbnN3ZXIoZGF0YS50ZXh0LnRyaW0oKSlcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBzZXRQcm9tcHQoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxPkdpdmUgQW55IEluc3RydWN0aW9uPC9oMT5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwib3VyLWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicHJvbXB0LWZpZWxkXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJvbXB0LWJ1dHRvblwiPkdvITwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+fVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItYXJlYVwiPnthbnN3ZXJ9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTXlQYWdlIiwicHJvbXB0Iiwic2V0UHJvbXB0IiwiYW5zd2VyIiwic2V0QW5zd2VyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwidGV4dCIsInRyaW0iLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();