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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // Ensure you have bcryptjs installed\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nconst SECRET_KEY = process.env.SECRET_KEY;\nconst BACKEND_URL = \"http://localhost:8080\";\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    const { username , password  } = req.body;\n    try {\n        const response = await node_fetch__WEBPACK_IMPORTED_MODULE_2___default()(`${BACKEND_URL}/login/fetch/${username}`);\n        if (!response.ok) {\n            return res.status(response.status).json({\n                message: \"Error fetching user data\"\n            });\n        }\n        const user = await response.json();\n        if (!user) {\n            return res.status(404).json({\n                message: \"User doesn't exist\"\n            });\n        }\n        const passwordMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(password, user.password);\n        if (passwordMatch) {\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n                username\n            }, SECRET_KEY, {\n                expiresIn: \"5s\"\n            });\n            return res.status(200).json({\n                token\n            });\n        } else {\n            return res.status(401).json({\n                message: \"Invalid credentials\"\n            });\n        }\n    } catch (error) {\n        console.error(\"Error during login:\", error);\n        return res.status(500).json({\n            message: \"Internal Server Error\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0g7QUFDRztBQUNELENBQUMscUNBQXFDO0FBRXBFQyxvREFBYSxFQUFFLENBQUM7QUFFaEIsTUFBTUksVUFBVSxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsVUFBVTtBQUN6QyxNQUFNRyxXQUFXLEdBQUcsdUJBQXVCO0FBRTVCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLG9CQUFvQjtTQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsTUFBTSxFQUFFQyxRQUFRLEdBQUVDLFFBQVEsR0FBRSxHQUFHUCxHQUFHLENBQUNRLElBQUk7SUFFdkMsSUFBSTtRQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNakIsaURBQUssQ0FBQyxDQUFDLEVBQUVNLFdBQVcsQ0FBQyxhQUFhLEVBQUVRLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDRyxRQUFRLENBQUNDLEVBQUUsRUFBRTtZQUNoQixPQUFPVCxHQUFHLENBQ1BFLE1BQU0sQ0FBQ00sUUFBUSxDQUFDTixNQUFNLENBQUMsQ0FDdkJDLElBQUksQ0FBQztnQkFBRUMsT0FBTyxFQUFFLDBCQUEwQjthQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsTUFBTU0sSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0wsSUFBSSxFQUFFO1FBQ2xDLElBQUksQ0FBQ08sSUFBSSxFQUFFO1lBQ1QsT0FBT1YsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsT0FBTyxFQUFFLG9CQUFvQjthQUFFLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBRUQsTUFBTU8sYUFBYSxHQUFHLE1BQU1uQix1REFBYyxDQUFDYyxRQUFRLEVBQUVJLElBQUksQ0FBQ0osUUFBUSxDQUFDO1FBQ25FLElBQUlLLGFBQWEsRUFBRTtZQUNqQixNQUFNRSxLQUFLLEdBQUd4Qix3REFBUSxDQUFDO2dCQUFFZ0IsUUFBUTthQUFFLEVBQUVYLFVBQVUsRUFBRTtnQkFBRXFCLFNBQVMsRUFBRSxJQUFJO2FBQUUsQ0FBQztZQUNyRSxPQUFPZixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFVSxLQUFLO2FBQUUsQ0FBQyxDQUFDO1FBQ3pDLE9BQU87WUFDTCxPQUFPYixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUscUJBQXFCO2FBQUUsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7SUFDSCxFQUFFLE9BQU9ZLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxxQkFBcUIsRUFBRUEsS0FBSyxDQUFDLENBQUM7UUFDNUMsT0FBT2hCLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLHVCQUF1QjtTQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25nby8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7IC8vIEVuc3VyZSB5b3UgaGF2ZSBiY3J5cHRqcyBpbnN0YWxsZWRcblxuZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCBTRUNSRVRfS0VZID0gcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWTtcbmNvbnN0IEJBQ0tFTkRfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pO1xuICB9XG5cbiAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vbG9naW4vZmV0Y2gvJHt1c2VybmFtZX1gKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKVxuICAgICAgICAuanNvbih7IG1lc3NhZ2U6IFwiRXJyb3IgZmV0Y2hpbmcgdXNlciBkYXRhXCIgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBkb2Vzbid0IGV4aXN0XCIgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFzc3dvcmRNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICBpZiAocGFzc3dvcmRNYXRjaCkge1xuICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IHVzZXJuYW1lIH0sIFNFQ1JFVF9LRVksIHsgZXhwaXJlc0luOiBcIjVzXCIgfSk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyB0b2tlbiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgbG9naW46XCIsIGVycm9yKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiand0IiwiZG90ZW52IiwiZmV0Y2giLCJiY3J5cHQiLCJjb25maWciLCJTRUNSRVRfS0VZIiwicHJvY2VzcyIsImVudiIsIkJBQ0tFTkRfVVJMIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJyZXNwb25zZSIsIm9rIiwidXNlciIsInBhc3N3b3JkTWF0Y2giLCJjb21wYXJlIiwidG9rZW4iLCJzaWduIiwiZXhwaXJlc0luIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();