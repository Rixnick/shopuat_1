module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apollo/Client.ts":
/*!******************************!*\
  !*** ./src/apollo/Client.ts ***!
  \******************************/
/*! exports provided: client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"client\", function() { return client; });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n  uri: 'http://localhost:5000/graphql',\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"InMemoryCache\"]({\n    typePolicies: {\n      User: {\n        fields: {\n          roles: {\n            merge(_ignored, incoming) {\n              return incoming;\n            }\n\n          }\n        }\n      },\n      Query: {\n        fields: {\n          users: {\n            merge(_ignored, incoming) {\n              return incoming;\n            }\n\n          }\n        }\n      }\n    }\n  }),\n  credentials: 'include'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBvbGxvL0NsaWVudC50cz8zNjJkIl0sIm5hbWVzIjpbImNsaWVudCIsIkFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlVzZXIiLCJmaWVsZHMiLCJyb2xlcyIsIm1lcmdlIiwiX2lnbm9yZWQiLCJpbmNvbWluZyIsIlF1ZXJ5IiwidXNlcnMiLCJjcmVkZW50aWFscyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLE1BQU0sR0FBRyxJQUFJQywyREFBSixDQUFpQjtBQUNuQ0MsS0FBRyxFQUFFLCtCQUQ4QjtBQUVuQ0MsT0FBSyxFQUFFLElBQUlDLDREQUFKLENBQWtCO0FBQ3JCQyxnQkFBWSxFQUFFO0FBQ1ZDLFVBQUksRUFBRTtBQUNGQyxjQUFNLEVBQUU7QUFDSkMsZUFBSyxFQUFFO0FBQ0hDLGlCQUFLLENBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUFvQjtBQUNyQixxQkFBT0EsUUFBUDtBQUNIOztBQUhFO0FBREg7QUFETixPQURJO0FBVVZDLFdBQUssRUFBRTtBQUNITCxjQUFNLEVBQUU7QUFDSk0sZUFBSyxFQUFFO0FBQ0hKLGlCQUFLLENBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUFvQjtBQUNyQixxQkFBT0EsUUFBUDtBQUNIOztBQUhFO0FBREg7QUFETDtBQVZHO0FBRE8sR0FBbEIsQ0FGNEI7QUF3Qm5DRyxhQUFXLEVBQUM7QUF4QnVCLENBQWpCLENBQWYiLCJmaWxlIjoiLi9zcmMvYXBvbGxvL0NsaWVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dyYXBocWwnLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgICAgIHR5cGVQb2xpY2llczoge1xuICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICByb2xlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2UoX2lnbm9yZWQsIGluY29taW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5jb21pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBRdWVyeToge1xuICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICB1c2Vyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2UoX2lnbm9yZWQsIGluY29taW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5jb21pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgY3JlZGVudGlhbHM6J2luY2x1ZGUnLFxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apollo/Client.ts\n");

/***/ }),

/***/ "./src/components/Layouts.tsx":
/*!************************************!*\
  !*** ./src/components/Layouts.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/loki/Desktop/Projects/Shoppin/shoppin-client/src/components/Layouts.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Layouts = ({\n  children\n}) => {\n  const {\n    pathname\n  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 19\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 25\n    }\n  }, pathname === \"/\" ? \"HOME\" : pathname.split(\"/\")[1].toUpperCase()), __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 25\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 25\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Noto+Sans&family=Roboto&display=swap\",\n    rel: \"stylesheet\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 25\n    }\n  })), children, __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"../assets/js/index.jsg\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 19\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layouts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzLnRzeD9kY2Y3Il0sIm5hbWVzIjpbIkxheW91dHMiLCJjaGlsZHJlbiIsInBhdGhuYW1lIiwidXNlUm91dGVyIiwic3BsaXQiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU1BLE1BQU1BLE9BQXdCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDN0MsUUFBTTtBQUFFQztBQUFGLE1BQWVDLDZEQUFTLEVBQTlCO0FBQ0EsU0FDTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ00sTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNPRCxRQUFRLEtBQUssR0FBYixHQUNPLE1BRFAsR0FFT0EsUUFBUSxDQUFDRSxLQUFULENBQWUsR0FBZixFQUFvQixDQUFwQixFQUF1QkMsV0FBdkIsRUFIZCxDQUROLEVBTU07QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTk4sRUFPTTtBQUNNLFFBQUksRUFBQyxVQURYO0FBRU0sV0FBTyxFQUFDLHVDQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQTixFQVdNO0FBQ00sUUFBSSxFQUFDLCtFQURYO0FBRU0sT0FBRyxFQUFDLFlBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhOLENBRE4sRUFrQk9KLFFBbEJQLEVBbUJNO0FBQVEsUUFBSSxFQUFDLGlCQUFiO0FBQStCLE9BQUcsRUFBQyx3QkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CTixDQUROO0FBdUJMLENBekJEOztBQTJCZUQsc0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgICAgdGl0bGU/OiBTdHJpbmc7XG59XG5cbmNvbnN0IExheW91dHM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXRobmFtZSA9PT0gXCIvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJIT01FXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi4uL2Fzc2V0cy9qcy9pbmRleC5qc2dcIj48L3NjcmlwdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layouts.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layouts */ \"./src/components/Layouts.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apollo/Client */ \"./src/apollo/Client.ts\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global.scss */ \"./src/styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/loki/Desktop/Projects/Shoppin/shoppin-client/src/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n // import \"../styles/_home.scss\";\n// import \"../styles/admin/styles.scss\";\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n    client: _apollo_Client__WEBPACK_IMPORTED_MODULE_3__[\"client\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Layouts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 19\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 25\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUFpRDtBQUMzQyxTQUNNLE1BQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFQyxxREFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNLE1BQUMsU0FBRCxlQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FETixDQUROLENBRE47QUFPTDs7QUFFY0Ysa0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRzXCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uL2Fwb2xsby9DbGllbnRcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuc2Nzc1wiXG4vLyBpbXBvcnQgXCIuLi9zdHlsZXMvX2hvbWUuc2Nzc1wiO1xuLy8gaW1wb3J0IFwiLi4vc3R5bGVzL2FkbWluL3N0eWxlcy5zY3NzXCI7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFsLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/global.scss\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });