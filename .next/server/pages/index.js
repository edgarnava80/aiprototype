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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MyPage() {\n    const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    async function handleSubmit(e) {\n        e.preventDefault();\n        setIsLoading(true);\n        const response = await fetch(\"/api/get-answer\", {\n            method: \"POST\",\n            headers: {\n                \"Accept\": \"application/json\",\n                \"Content-Type\": \"application/json\",\n                \"Access-Control-Allow-Credentials\": true,\n                \"Access-Control-Allow-Origin\": \"*\",\n                \"Access-Control-Allow-Methods\": \"GET,PUT,POST,DELETE,PATCH,OPTIONS\",\n                \"Access-Control-Allow-Headers\": \"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version\"\n            },\n            body: JSON.stringify({\n                prompt: prompt\n            })\n        });\n        const data = await response.json();\n        setAnswer(data.text.trim());\n        setIsLoading(false);\n    }\n    function handleChange(e) {\n        setPrompt(e.target.value);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Give Any Instruction\"\n            }, void 0, false, {\n                fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"our-form\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"prompt-field\",\n                        type: \"text\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prompt-button\",\n                        children: \"Go!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loading-spinner\"\n            }, void 0, false, {\n                fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"answer-area\",\n                children: answer\n            }, void 0, false, {\n                fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/enava/learning/aiprototype/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFFakIsU0FBU0MsU0FBUztJQUMvQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhELGVBQWVRLGFBQWFDLENBQUMsRUFBRTtRQUM3QkEsRUFBRUMsY0FBYztRQUNoQkgsYUFBYSxJQUFJO1FBRWpCLE1BQU1JLFdBQVcsTUFBTUMsTUFBTSxtQkFBbUI7WUFDOUNDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxVQUFVO2dCQUNWLGdCQUFnQjtnQkFDaEIsb0NBQW9DLElBQUk7Z0JBQ3hDLCtCQUErQjtnQkFDL0IsZ0NBQWdDO2dCQUNoQyxnQ0FBZ0M7WUFDbEM7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFZixRQUFRQTtZQUFPO1FBQ3hDO1FBQ0EsTUFBTWdCLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtRQUNoQ2QsVUFBVWEsS0FBS0UsSUFBSSxDQUFDQyxJQUFJO1FBQ3hCZCxhQUFhLEtBQUs7SUFDcEI7SUFFQSxTQUFTZSxhQUFhYixDQUFDLEVBQUU7UUFDdkJOLFVBQVVNLEVBQUVjLE1BQU0sQ0FBQ0MsS0FBSztJQUMxQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtGLFdBQVU7Z0JBQVdHLFVBQVVyQjs7a0NBQ25DLDhEQUFDc0I7d0JBQU1KLFdBQVU7d0JBQWVLLE1BQUs7d0JBQU9DLFVBQVVWOzs7Ozs7a0NBQ3RELDhEQUFDVzt3QkFBT1AsV0FBVTtrQ0FBZ0I7Ozs7Ozs7Ozs7OztZQUduQ3BCLDJCQUFhLDhEQUFDbUI7Z0JBQUlDLFdBQVU7Ozs7OzswQkFFN0IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFldEI7Ozs7Ozs7Ozs7OztBQUdwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlQYWdlKCkge1xyXG4gIGNvbnN0IFtwcm9tcHQsIHNldFByb21wdF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2V0LWFuc3dlclwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCI6IHRydWUsXHJcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCI6IFwiR0VULFBVVCxQT1NULERFTEVURSxQQVRDSCxPUFRJT05TXCIsXHJcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCI6IFwiWC1DU1JGLVRva2VuLCBYLVJlcXVlc3RlZC1XaXRoLCBBY2NlcHQsIEFjY2VwdC1WZXJzaW9uLCBDb250ZW50LUxlbmd0aCwgQ29udGVudC1NRDUsIENvbnRlbnQtVHlwZSwgRGF0ZSwgWC1BcGktVmVyc2lvblwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJvbXB0OiBwcm9tcHQgfSlcclxuICAgIH0pXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICBzZXRBbnN3ZXIoZGF0YS50ZXh0LnRyaW0oKSlcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBzZXRQcm9tcHQoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxPkdpdmUgQW55IEluc3RydWN0aW9uPC9oMT5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwib3VyLWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicHJvbXB0LWZpZWxkXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJvbXB0LWJ1dHRvblwiPkdvITwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+fVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItYXJlYVwiPnthbnN3ZXJ9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTXlQYWdlIiwicHJvbXB0Iiwic2V0UHJvbXB0IiwiYW5zd2VyIiwic2V0QW5zd2VyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwidGV4dCIsInRyaW0iLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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