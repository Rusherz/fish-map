webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/fish/action.ts":
/*!******************************!*\
  !*** ./store/fish/action.ts ***!
  \******************************/
/*! exports provided: fishActionTypes, addFish, getFish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fishActionTypes\", function() { return fishActionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFish\", function() { return addFish; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFish\", function() { return getFish; });\n/* harmony import */ var _classes_Plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Plugins */ \"./classes/Plugins.ts\");\n\nvar fishActionTypes = {\n  ADD_FISH: \"ADD_FISH\"\n};\nvar addFish = function addFish() {\n  return function (dispatch) {\n    return dispatch({\n      type: fishActionTypes.ADD_FISH\n    });\n  };\n};\nvar getFish = function getFish() {\n  return function (dispatch) {\n    Object(_classes_Plugins__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(\"/v1/posts\").then(function (posts) {\n      dispatch({\n        type: fishActionTypes.GET_FISH,\n        payload: posts\n      });\n    });\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvZmlzaC9hY3Rpb24udHM/M2M0MCJdLCJuYW1lcyI6WyJmaXNoQWN0aW9uVHlwZXMiLCJBRERfRklTSCIsImFkZEZpc2giLCJkaXNwYXRjaCIsInR5cGUiLCJnZXRGaXNoIiwiZ2V0IiwidGhlbiIsInBvc3RzIiwiR0VUX0ZJU0giLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxlQUFlLEdBQUc7QUFDOUJDLFVBQVEsRUFBRTtBQURvQixDQUF4QjtBQUlBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBTSxVQUFDQyxRQUFELEVBQWM7QUFDMUMsV0FBT0EsUUFBUSxDQUFDO0FBQUVDLFVBQUksRUFBRUosZUFBZSxDQUFDQztBQUF4QixLQUFELENBQWY7QUFDQSxHQUZzQjtBQUFBLENBQWhCO0FBSUEsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFNLFVBQUNGLFFBQUQsRUFBYztBQUMxQ0csZ0VBQUcsQ0FBQyxXQUFELENBQUgsQ0FBaUJDLElBQWpCLENBQXNCLFVBQUFDLEtBQUssRUFBSTtBQUM5QkwsY0FBUSxDQUFDO0FBQ1JDLFlBQUksRUFBRUosZUFBZSxDQUFDUyxRQURkO0FBRVJDLGVBQU8sRUFBRUY7QUFGRCxPQUFELENBQVI7QUFJQSxLQUxEO0FBTUEsR0FQc0I7QUFBQSxDQUFoQiIsImZpbGUiOiIuL3N0b3JlL2Zpc2gvYWN0aW9uLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0IH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvUGx1Z2luc1wiXG5cbmV4cG9ydCBjb25zdCBmaXNoQWN0aW9uVHlwZXMgPSB7XG5cdEFERF9GSVNIOiBcIkFERF9GSVNIXCIsXG59XG5cbmV4cG9ydCBjb25zdCBhZGRGaXNoID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cdHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IGZpc2hBY3Rpb25UeXBlcy5BRERfRklTSCB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RmlzaCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuXHRnZXQoXCIvdjEvcG9zdHNcIikudGhlbihwb3N0cyA9PiB7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogZmlzaEFjdGlvblR5cGVzLkdFVF9GSVNILFxuXHRcdFx0cGF5bG9hZDogcG9zdHNcblx0XHR9KVxuXHR9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/fish/action.ts\n");

/***/ })

})