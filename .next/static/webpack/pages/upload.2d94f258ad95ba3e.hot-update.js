"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/upload",{

/***/ "./components/uploadForm/uploadForm.js":
/*!*********************************************!*\
  !*** ./components/uploadForm/uploadForm.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UploadForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _upload_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload.module.scss */ \"./components/uploadForm/upload.module.scss\");\n/* harmony import */ var _upload_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_upload_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _uploadPDF_uploadPDF__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uploadPDF/uploadPDF */ \"./components/uploadPDF/uploadPDF.js\");\n/* harmony import */ var _uploadIMG_uploadIMG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uploadIMG/uploadIMG */ \"./components/uploadIMG/uploadIMG.js\");\n/* harmony import */ var _uploadVID_uploadVID__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../uploadVID/uploadVID */ \"./components/uploadVID/uploadVID.js\");\n/* harmony import */ var _deleteVID_deleteVID__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../deleteVID/deleteVID */ \"./components/deleteVID/deleteVID.js\");\n/* harmony import */ var _deletePDF_deletePDF__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../deletePDF/deletePDF */ \"./components/deletePDF/deletePDF.js\");\n/* harmony import */ var _deleteIMG_deleteIMG__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../deleteIMG/deleteIMG */ \"./components/deleteIMG/deleteIMG.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction UploadForm() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), showPDF = ref[0], setShowPDF = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showImage = ref1[0], setShowImage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showVideo = ref2[0], setShowVideo = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showDeletePDF = ref3[0], setShowDeletePDF = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showDeleteIMG = ref4[0], setShowDeleteIMG = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showDeleteVID = ref5[0], setShowDeleteVID = ref5[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_upload_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"upload-form-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_upload_module_scss__WEBPACK_IMPORTED_MODULE_9___default()[\"toggle-buttons\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: showPDF ? (_upload_module_scss__WEBPACK_IMPORTED_MODULE_9___default().active) : \"\",\n                        onClick: function() {\n                            setShowPDF(true);\n                            setShowImage(false);\n                            setShowVideo(false);\n                            setShowDeletePDF(false);\n                            setShowDeleteIMG(false);\n                            setShowDeleteVID(false);\n                        },\n                        children: \"Upload PDF\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: showImage ? (_upload_module_scss__WEBPACK_IMPORTED_MODULE_9___default().active) : \"\",\n                        onClick: function() {\n                            setShowPDF(false);\n                            setShowImage(true);\n                            setShowVideo(false);\n                            setShowDeletePDF(false);\n                            setShowDeleteIMG(false);\n                            setShowDeleteVID(false);\n                        },\n                        children: \"Upload Image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: showVideo ? (_upload_module_scss__WEBPACK_IMPORTED_MODULE_9___default().active) : \"\",\n                        onClick: function() {\n                            setShowPDF(false);\n                            setShowImage(false);\n                            setShowVideo(true);\n                            setShowDeletePDF(false);\n                            setShowDeleteIMG(false);\n                            setShowDeleteVID(false);\n                        },\n                        children: \"Upload Video\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: showVideo ? (_upload_module_scss__WEBPACK_IMPORTED_MODULE_9___default().active) : \"\",\n                        onClick: function() {\n                            setShowPDF(false);\n                            setShowImage(false);\n                            setShowVideo(false);\n                            setShowDeletePDF(true);\n                            setShowDeleteIMG(false);\n                            setShowDeleteVID(false);\n                        },\n                        children: \"Delete PDF\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: showVideo ? (_upload_module_scss__WEBPACK_IMPORTED_MODULE_9___default().active) : \"\",\n                        onClick: function() {\n                            setShowPDF(false);\n                            setShowImage(false);\n                            setShowVideo(false);\n                            setShowDeletePDF(false);\n                            setShowDeleteIMG(true);\n                            setShowDeleteVID(false);\n                        },\n                        children: \"Delete Image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: showVideo ? (_upload_module_scss__WEBPACK_IMPORTED_MODULE_9___default().active) : \"\",\n                        onClick: function() {\n                            setShowPDF(false);\n                            setShowImage(false);\n                            setShowVideo(false);\n                            setShowDeletePDF(false);\n                            setShowDeleteIMG(false);\n                            setShowDeleteVID(true);\n                        },\n                        children: \"Delete Video\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            showPDF && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uploadPDF_uploadPDF__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n                lineNumber: 105,\n                columnNumber: 19\n            }, this),\n            showImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uploadIMG_uploadIMG__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n                lineNumber: 106,\n                columnNumber: 21\n            }, this),\n            showVideo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uploadVID_uploadVID__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n                lineNumber: 107,\n                columnNumber: 21\n            }, this),\n            showDeletePDF && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_deletePDF_deletePDF__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n                lineNumber: 108,\n                columnNumber: 25\n            }, this),\n            showDeleteIMG && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_deleteIMG_deleteIMG__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n                lineNumber: 109,\n                columnNumber: 25\n            }, this),\n            showDeleteVID && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_deleteVID_deleteVID__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n                lineNumber: 110,\n                columnNumber: 25\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/akulrajeevan/Internship/Web/CAM-project/components/uploadForm/uploadForm.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n};\n_s(UploadForm, \"YRIP/4yCyrF4pcFERDKI/In0AVU=\");\n_c = UploadForm;\nvar _c;\n$RefreshReg$(_c, \"UploadForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VwbG9hZEZvcm0vdXBsb2FkRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDSjtBQUNFO0FBQ0s7QUFDRTtBQUNBO0FBQ0Y7QUFDRDtBQUNKO0FBRzNCLFNBQVNVLFVBQVUsR0FBRzs7SUFDbkMsSUFBOEJWLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBckNXLE9BQU8sR0FBZ0JYLEdBQWMsR0FBOUIsRUFBRVksVUFBVSxHQUFJWixHQUFjLEdBQWxCO0lBQzFCLElBQWtDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFDYSxTQUFTLEdBQWtCYixJQUFlLEdBQWpDLEVBQUVjLFlBQVksR0FBSWQsSUFBZSxHQUFuQjtJQUM5QixJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ2UsU0FBUyxHQUFrQmYsSUFBZSxHQUFqQyxFQUFFZ0IsWUFBWSxHQUFJaEIsSUFBZSxHQUFuQjtJQUM5QixJQUEwQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUFsRGlCLGFBQWEsR0FBc0JqQixJQUFlLEdBQXJDLEVBQUVrQixnQkFBZ0IsR0FBSWxCLElBQWUsR0FBbkI7SUFDdEMsSUFBMENBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBbERtQixhQUFhLEdBQXNCbkIsSUFBZSxHQUFyQyxFQUFFb0IsZ0JBQWdCLEdBQUlwQixJQUFlLEdBQW5CO0lBQ3RDLElBQTBDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQWxEcUIsYUFBYSxHQUFzQnJCLElBQWUsR0FBckMsRUFBRXNCLGdCQUFnQixHQUFJdEIsSUFBZSxHQUFuQjtJQUV0QyxxQkFDRSw4REFBQ3VCLEtBQUc7UUFBQ0MsU0FBUyxFQUFFckIscUZBQStCOzswQkFDN0MsOERBQUNvQixLQUFHO2dCQUFDQyxTQUFTLEVBQUVyQiw4RUFB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SyxDQUFDLENBQUM7NEJBQ3BCRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDeEJFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUN4QkUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3pCLENBQUM7a0NBQ0YsY0FFRDs7Ozs7NEJBQVM7Ozs7OztvQkFDTDtZQUNMWCxPQUFPLGtCQUFJLDhEQUFDUCw0REFBUzs7OztvQkFBRztZQUN4QlMsU0FBUyxrQkFBSSw4REFBQ1IsNERBQVc7Ozs7b0JBQUc7WUFDNUJVLFNBQVMsa0JBQUksOERBQUNULDREQUFXOzs7O29CQUFHO1lBQzVCVyxhQUFhLGtCQUFJLDhEQUFDVCw0REFBUTs7OztvQkFBRztZQUM3QlcsYUFBYSxrQkFBSSw4REFBQ1YsNERBQUk7Ozs7b0JBQUc7WUFDekJZLGFBQWEsa0JBQUksOERBQUNkLDREQUFTOzs7O29CQUFHOzs7Ozs7WUFDM0IsQ0FDTjtBQUNKLENBQUM7R0FyR3VCRyxVQUFVO0FBQVZBLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91cGxvYWRGb3JtL3VwbG9hZEZvcm0uanM/OWE2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdXBsb2FkLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgVXBsb2FkUERGIGZyb20gXCIuLi91cGxvYWRQREYvdXBsb2FkUERGXCI7XG5pbXBvcnQgVXBsb2FkSW1hZ2UgZnJvbSBcIi4uL3VwbG9hZElNRy91cGxvYWRJTUdcIjtcbmltcG9ydCBVcGxvYWRWaWRlbyBmcm9tIFwiLi4vdXBsb2FkVklEL3VwbG9hZFZJRFwiO1xuaW1wb3J0IFZpZGVvR3JpZCBmcm9tIFwiLi4vZGVsZXRlVklEL2RlbGV0ZVZJRFwiO1xuaW1wb3J0IEZpbGVMaXN0IGZyb20gXCIuLi9kZWxldGVQREYvZGVsZXRlUERGXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi4vZGVsZXRlSU1HL2RlbGV0ZUlNR1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZEZvcm0oKSB7XG4gIGNvbnN0IFtzaG93UERGLCBzZXRTaG93UERGXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2hvd0ltYWdlLCBzZXRTaG93SW1hZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd1ZpZGVvLCBzZXRTaG93VmlkZW9dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0RlbGV0ZVBERiwgc2V0U2hvd0RlbGV0ZVBERl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93RGVsZXRlSU1HLCBzZXRTaG93RGVsZXRlSU1HXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dEZWxldGVWSUQsIHNldFNob3dEZWxldGVWSURdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInVwbG9hZC1mb3JtLWNvbnRhaW5lclwiXX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1widG9nZ2xlLWJ1dHRvbnNcIl19PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzaG93UERGID8gc3R5bGVzW1wiYWN0aXZlXCJdIDogXCJcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93UERGKHRydWUpO1xuICAgICAgICAgICAgc2V0U2hvd0ltYWdlKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFNob3dWaWRlbyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRTaG93RGVsZXRlUERGKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFNob3dEZWxldGVJTUcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVZJRChmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFVwbG9hZCBQREZcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3Nob3dJbWFnZSA/IHN0eWxlc1tcImFjdGl2ZVwiXSA6IFwiXCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd1BERihmYWxzZSk7XG4gICAgICAgICAgICBzZXRTaG93SW1hZ2UodHJ1ZSk7XG4gICAgICAgICAgICBzZXRTaG93VmlkZW8oZmFsc2UpO1xuICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVBERihmYWxzZSk7XG4gICAgICAgICAgICBzZXRTaG93RGVsZXRlSU1HKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFNob3dEZWxldGVWSUQoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBVcGxvYWQgSW1hZ2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3Nob3dWaWRlbyA/IHN0eWxlc1tcImFjdGl2ZVwiXSA6IFwiXCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd1BERihmYWxzZSk7XG4gICAgICAgICAgICBzZXRTaG93SW1hZ2UoZmFsc2UpO1xuICAgICAgICAgICAgc2V0U2hvd1ZpZGVvKHRydWUpO1xuICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVBERihmYWxzZSk7XG4gICAgICAgICAgICBzZXRTaG93RGVsZXRlSU1HKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFNob3dEZWxldGVWSUQoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBVcGxvYWQgVmlkZW9cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c2hvd1ZpZGVvID8gc3R5bGVzW1wiYWN0aXZlXCJdIDogXCJcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93UERGKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFNob3dJbWFnZShmYWxzZSk7XG4gICAgICAgICAgICBzZXRTaG93VmlkZW8oZmFsc2UpO1xuICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVBERih0cnVlKTtcbiAgICAgICAgICAgIHNldFNob3dEZWxldGVJTUcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVZJRChmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIERlbGV0ZSBQREZcbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c2hvd1ZpZGVvID8gc3R5bGVzW1wiYWN0aXZlXCJdIDogXCJcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93UERGKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFNob3dJbWFnZShmYWxzZSk7XG4gICAgICAgICAgICBzZXRTaG93VmlkZW8oZmFsc2UpO1xuICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVBERihmYWxzZSk7XG4gICAgICAgICAgICBzZXRTaG93RGVsZXRlSU1HKHRydWUpO1xuICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVZJRChmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIERlbGV0ZSBJbWFnZVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzaG93VmlkZW8gPyBzdHlsZXNbXCJhY3RpdmVcIl0gOiBcIlwifVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldFNob3dQREYoZmFsc2UpO1xuICAgICAgICAgICAgc2V0U2hvd0ltYWdlKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFNob3dWaWRlbyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRTaG93RGVsZXRlUERGKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFNob3dEZWxldGVJTUcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVZJRCh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgRGVsZXRlIFZpZGVvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd1BERiAmJiA8VXBsb2FkUERGIC8+fVxuICAgICAge3Nob3dJbWFnZSAmJiA8VXBsb2FkSW1hZ2UgLz59XG4gICAgICB7c2hvd1ZpZGVvICYmIDxVcGxvYWRWaWRlbyAvPn1cbiAgICAgIHtzaG93RGVsZXRlUERGICYmIDxGaWxlTGlzdCAvPn1cbiAgICAgIHtzaG93RGVsZXRlSU1HICYmIDxHcmlkIC8+fVxuICAgICAge3Nob3dEZWxldGVWSUQgJiYgPFZpZGVvR3JpZCAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInN0eWxlcyIsIlVwbG9hZFBERiIsIlVwbG9hZEltYWdlIiwiVXBsb2FkVmlkZW8iLCJWaWRlb0dyaWQiLCJGaWxlTGlzdCIsIkdyaWQiLCJVcGxvYWRGb3JtIiwic2hvd1BERiIsInNldFNob3dQREYiLCJzaG93SW1hZ2UiLCJzZXRTaG93SW1hZ2UiLCJzaG93VmlkZW8iLCJzZXRTaG93VmlkZW8iLCJzaG93RGVsZXRlUERGIiwic2V0U2hvd0RlbGV0ZVBERiIsInNob3dEZWxldGVJTUciLCJzZXRTaG93RGVsZXRlSU1HIiwic2hvd0RlbGV0ZVZJRCIsInNldFNob3dEZWxldGVWSUQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/uploadForm/uploadForm.js\n"));

/***/ })

});