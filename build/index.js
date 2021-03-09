/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalStyle */ \"./src/GlobalStyle.js\");\n/* harmony import */ var _Templates_Default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Templates/Default */ \"./src/Templates/Default/index.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Context */ \"./src/Context/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n\n\n\n\n\n\n\n\nfunction App() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localStorage.getItem('jwt')),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      token = _useState2[0],\n      setToken = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('dark'),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),\n      tema = _useState4[0],\n      setTema = _useState4[1];\n\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(localStorage.getItem('jwt'));\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),\n      itemPlay = _useState6[0],\n      setItemPlay = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    items: [0, 1, 2, 3, 4]\n  }),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState7, 2),\n      data = _useState8[0],\n      setData = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState9, 2),\n      visitedAlbum = _useState10[0],\n      setVisitedAlbum = _useState10[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setToken(localStorage.getItem('jwt'));\n  }, [ref.current]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Context__WEBPACK_IMPORTED_MODULE_5__.ContextTheme.Provider, {\n    value: {\n      tema: tema,\n      setTema: setTema\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Context__WEBPACK_IMPORTED_MODULE_5__.ContextAuth.Provider, {\n    value: {\n      token: token,\n      setToken: setToken\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Context__WEBPACK_IMPORTED_MODULE_5__.ContextData.Provider, {\n    value: {\n      data: data,\n      setData: setData,\n      visitedAlbum: visitedAlbum,\n      setVisitedAlbum: setVisitedAlbum\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Context__WEBPACK_IMPORTED_MODULE_5__.ContextPlay.Provider, {\n    value: {\n      itemPlay: itemPlay,\n      setItemPlay: setItemPlay\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Templates_Default__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__.Global, null))))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://spotify-xp/./src/App.js?");

/***/ }),

/***/ "./src/Components/ArtistContainer/index.js":
/*!*************************************************!*\
  !*** ./src/Components/ArtistContainer/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/Components/ArtistContainer/styles.js\");\n\n\n\nfunction ArtistContainer(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {\n    key: children === null || children === void 0 ? void 0 : children.key\n  }, children);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArtistContainer);\n\n//# sourceURL=webpack://spotify-xp/./src/Components/ArtistContainer/index.js?");

/***/ }),

/***/ "./src/Components/ArtistContainer/styles.js":
/*!**************************************************!*\
  !*** ./src/Components/ArtistContainer/styles.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  width: 100%;\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  @media(max-width: 800px) {\\n    flex-direction: row;\\n    flex-wrap: nowrap;\\n    position: relative;\\n    overflow-x: scroll;\\n  }\\n\"])));\n\n//# sourceURL=webpack://spotify-xp/./src/Components/ArtistContainer/styles.js?");

/***/ }),

/***/ "./src/Components/ArtistItem/index.js":
/*!********************************************!*\
  !*** ./src/Components/ArtistItem/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Title */ \"./src/Components/Title/index.js\");\n/* harmony import */ var _Subtitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subtitle */ \"./src/Components/Subtitle/index.js\");\n/* harmony import */ var _Imagem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Imagem */ \"./src/Components/Imagem/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/Components/ArtistItem/styles.js\");\n/* harmony import */ var _utils_slugFy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/slugFy */ \"./src/utils/slugFy.js\");\n\n\n\n\n\n\n\nfunction ArtistItem(_ref) {\n  var album = _ref.album,\n      data = _ref.data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.ContainerLink, {\n    to: {\n      pathname: \"/albums/\".concat((album === null || album === void 0 ? void 0 : album.artists) && (0,_utils_slugFy__WEBPACK_IMPORTED_MODULE_5__.default)(album === null || album === void 0 ? void 0 : album.artists[0].name) || (0,_utils_slugFy__WEBPACK_IMPORTED_MODULE_5__.default)('Nome do artista')),\n      state: {\n        idAlbum: album === null || album === void 0 ? void 0 : album.id\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Imagem__WEBPACK_IMPORTED_MODULE_3__.default, {\n    data: {\n      url: (album === null || album === void 0 ? void 0 : album.images) && album.images[0].url || \"https://via.placeholder.com/\".concat((data === null || data === void 0 ? void 0 : data.imgSize) || '160'),\n      size: (data === null || data === void 0 ? void 0 : data.size) || 'smallbox'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_1__.default, {\n    data: {\n      text: (album === null || album === void 0 ? void 0 : album.name) || 'Nome do álbum',\n      size: (data === null || data === void 0 ? void 0 : data.size) || 'smallbox',\n      font: (data === null || data === void 0 ? void 0 : data.font) || 'extrasmall',\n      align: 'center'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Subtitle__WEBPACK_IMPORTED_MODULE_2__.default, {\n    data: {\n      text: (album === null || album === void 0 ? void 0 : album.artists) && (album === null || album === void 0 ? void 0 : album.artists[0].name) || 'Nome do artista',\n      size: (data === null || data === void 0 ? void 0 : data.size) || 'smallbox',\n      font: (data === null || data === void 0 ? void 0 : data.font) || 'extrasmall',\n      align: 'center'\n    }\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArtistItem);\n\n//# sourceURL=webpack://spotify-xp/./src/Components/ArtistItem/index.js?");

/***/ }),

/***/ "./src/Components/ArtistItem/styles.js":
/*!*********************************************!*\
  !*** ./src/Components/ArtistItem/styles.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContainerLink\": () => (/* binding */ ContainerLink)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\nvar _templateObject;\n\n\n\nvar ContainerLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  cursor: pointer;\\n  text-decoration: none;\\n  margin: 1.875rem 0px;\\n  margin-right: 4.6875rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  &:nth-child(5){\\n    margin-right: 0px;\\n  }\\n  &:nth-child(10){\\n    margin-right: 0px;\\n  }\\n\"])));\n\n//# sourceURL=webpack://spotify-xp/./src/Components/ArtistItem/styles.js?");

/***/ }),

/***/ "./src/Components/Button/index.js":
/*!****************************************!*\
  !*** ./src/Components/Button/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/Components/Button/styles.js\");\n\n\n\n\nfunction Button(props) {\n  function handleOnChange(e) {\n    setButton(e.target.value);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Buttonbox, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {\n    type: props.type || 'button'\n  }), props.value || 'Enviar'));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Button/index.js?");

/***/ }),

/***/ "./src/Components/Button/styles.js":
/*!*****************************************!*\
  !*** ./src/Components/Button/styles.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Buttonbox\": () => (/* binding */ Buttonbox)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  display: flex;\\n  width: 100%;\\n  height: 3.3125rem;\\n  justify-content: center;\\n  align-items: center;\\n\"])));\nvar Buttonbox = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  cursor: pointer;\\n  border: 0px;\\n  border: 2px solid var(--primary);\\n  width: 60%;\\n  height: 2.5rem;\\n  padding: 5px 10px;\\n  font-size: var(--\", \");\\n  line-height: var(--extralarge);\\n  color:var(--white);\\n  font-weight: bold;\\n  background-color: transparent;\\n  outline: 0;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"])), function (props) {\n  return props.fontSize || 'medium';\n});\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Button/styles.js?");

/***/ }),

/***/ "./src/Components/Imagem/index.js":
/*!****************************************!*\
  !*** ./src/Components/Imagem/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/Components/Imagem/styles.js\");\n\n\n\nfunction Imagem(_ref) {\n  var data = _ref.data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {\n    size: data.size\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Img, {\n    src: data.url\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Imagem);\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Imagem/index.js?");

/***/ }),

/***/ "./src/Components/Imagem/styles.js":
/*!*****************************************!*\
  !*** ./src/Components/Imagem/styles.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Img\": () => (/* binding */ Img)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  width: var(--\", \");\\n  height: var(--\", \");\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"])), function (props) {\n  return props.size;\n}, function (props) {\n  return props.size;\n});\nvar Img = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  max-width: 100%;\\n  align-self: center;\\n  transition: all 0.3s;\\n  &:hover{\\n    opacity: 50%;\\n  }\\n\"])));\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Imagem/styles.js?");

/***/ }),

/***/ "./src/Components/Input/index.js":
/*!***************************************!*\
  !*** ./src/Components/Input/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/Components/Input/styles.js\");\n\n\n\n\n\nfunction Input(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),\n      input = _useState2[0],\n      setInput = _useState2[1];\n\n  function handleOnChange(e) {\n    setInput(e.target.value);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.InputText, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {\n    type: props.type || 'text',\n    placeholder: props.placeholder || 'Digite aqui',\n    value: props.value || input,\n    onChange: props.onChange || handleOnChange\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Input/index.js?");

/***/ }),

/***/ "./src/Components/Input/styles.js":
/*!****************************************!*\
  !*** ./src/Components/Input/styles.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"InputText\": () => (/* binding */ InputText)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  display: flex;\\n  width: 100%;\\n  height: 3.3125rem;\\n  justify-content: center;\\n  align-items: center;\\n\"])));\nvar InputText = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.input(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  border: 0px;\\n  border-bottom: 2px solid var(--primary);\\n  width: 100%;\\n  height: 2.5rem;\\n  padding: 5px 10px;\\n  font-size: var(--\", \");\\n  line-height: var(--extralarge);\\n  color:var(--white);\\n  font-weight: normal;\\n  background-color: transparent;\\n  outline: 0;\\n  &:placeholder{\\n    color: var(--white);\\n    font-weight: normal;\\n  }\\n\"])), function (props) {\n  return props.fontSize || 'medium';\n});\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Input/styles.js?");

/***/ }),

/***/ "./src/Components/Link/index.js":
/*!**************************************!*\
  !*** ./src/Components/Link/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/Components/Link/styles.js\");\n\n\n\nfunction Link(_ref) {\n  var data = _ref.data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.LinkTo, {\n    to: data.link,\n    align: data.align,\n    font: data.font,\n    size: data.size\n  }, data.text);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Link/index.js?");

/***/ }),

/***/ "./src/Components/Link/styles.js":
/*!***************************************!*\
  !*** ./src/Components/Link/styles.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LinkTo\": () => (/* binding */ LinkTo)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\n\nvar LinkTo = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  padding: 0.625rem 0px;\\n  margin: 0px;\\n  text-decoration: none;\\n  font-size: var(--\", \");\\n  font-weight: normal;\\n  max-width: var(--\", \");\\n  text-align: \", \";\\n  color: var(--secondary)\\n\"])), function (props) {\n  return props.font;\n}, function (props) {\n  return props.size;\n}, function (props) {\n  return props.align;\n});\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Link/styles.js?");

/***/ }),

/***/ "./src/Components/Loading/index.js":
/*!*****************************************!*\
  !*** ./src/Components/Loading/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _static_images_loading_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/images/loading.gif */ \"./src/static/images/loading.gif\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/Components/Loading/styles.js\");\n\n\n\n\nfunction Loading() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: _static_images_loading_gif__WEBPACK_IMPORTED_MODULE_1__.default\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Loading/index.js?");

/***/ }),

/***/ "./src/Components/Loading/styles.js":
/*!******************************************!*\
  !*** ./src/Components/Loading/styles.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  img{\\n    max-width: 6.25rem;\\n  }\\n\"])));\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Loading/styles.js?");

/***/ }),

/***/ "./src/Components/Menu/index.js":
/*!**************************************!*\
  !*** ./src/Components/Menu/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/Components/Menu/styles.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context */ \"./src/Context/index.js\");\n\n\n\n\nfunction MenuContainer(_ref) {\n  var openMenu = _ref.openMenu;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_2__.ContextAuth),\n      token = _useContext.token,\n      setToken = _useContext.setToken;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_2__.ContextTheme),\n      tema = _useContext2.tema,\n      setTema = _useContext2.setTema;\n\n  function handleLogout() {\n    setToken('');\n    localStorage.removeItem('jwt');\n  }\n\n  function handleTema() {\n    if (tema === 'dark') {\n      setTema('light');\n    }\n\n    if (tema === 'light') {\n      setTema('dark');\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Menu, {\n    openMenu: openMenu\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {\n    openMenu: openMenu,\n    onClick: handleTema\n  }, \"Tema: \", tema), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {\n    onClick: handleLogout,\n    openMenu: openMenu\n  }, \"Sair\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuContainer);\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Menu/index.js?");

/***/ }),

/***/ "./src/Components/Menu/styles.js":
/*!***************************************!*\
  !*** ./src/Components/Menu/styles.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": () => (/* binding */ Menu),\n/* harmony export */   \"MenuItem\": () => (/* binding */ MenuItem)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2;\n\n\nvar Menu = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.ul(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  display: flex;\\n  padding: \", \";\\n  list-style: none;\\n  background-color: var(--primary);\\n  position: absolute;\\n  width: \", \";\\n  right: 5rem;\\n  top: 1.375rem;\\n  justify-content: space-around;\\n  align-items: center;\\n  color: var(--white);\\n  transition: all 0.3s;\\n\"])), function (props) {\n  return props.openMenu ? '0 1.25rem' : '0 0';\n}, function (props) {\n  return props.openMenu ? '12.75rem' : '0';\n});\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.li(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n   cursor: pointer;\\n  padding: \", \";\\n  font-size: \", \";\\n  transition: all 0.1s;\\n  text-transform: capitalize;\\n  &:hover{\\n    opacity: 70%;\\n  }\\n\"])), function (props) {\n  return props.openMenu ? '0.625rem 0' : '0 0';\n}, function (props) {\n  return props.openMenu ? '1rem' : '0';\n});\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Menu/styles.js?");

/***/ }),

/***/ "./src/Components/PlayerMusic/index.js":
/*!*********************************************!*\
  !*** ./src/Components/PlayerMusic/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/Components/PlayerMusic/styles.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context */ \"./src/Context/index.js\");\n\n\n\n\nfunction PlayerMusic(_ref) {\n  var item = _ref.item;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_2__.ContextAuth),\n      token = _useContext.token;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, null, token && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"audio\", {\n    controls: \"controls\",\n    id: \"player\",\n    autoPlay: true,\n    src: item === null || item === void 0 ? void 0 : item.preview_url\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerMusic);\n\n//# sourceURL=webpack://spotify-xp/./src/Components/PlayerMusic/index.js?");

/***/ }),

/***/ "./src/Components/PlayerMusic/styles.js":
/*!**********************************************!*\
  !*** ./src/Components/PlayerMusic/styles.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  height: 5rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 0 1.25rem;\\n  audio {\\n    height: 2.5rem;\\n    width: 100%;\\n  }\\n\"])));\n\n//# sourceURL=webpack://spotify-xp/./src/Components/PlayerMusic/styles.js?");

/***/ }),

/***/ "./src/Components/SearchBar/index.js":
/*!*******************************************!*\
  !*** ./src/Components/SearchBar/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/Components/SearchBar/styles.js\");\n\n\n\n\n\nfunction SearchBar(_ref) {\n  var setAlbum = _ref.setAlbum,\n      album = _ref.album,\n      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, [\"setAlbum\", \"album\"]);\n\n  function handleOnChange(e) {\n    setAlbum(e.target.value);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.InputText, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {\n    type: \"search\",\n    value: album,\n    onChange: handleOnChange,\n    placeholder: \"Comece a escrever...\"\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);\n\n//# sourceURL=webpack://spotify-xp/./src/Components/SearchBar/index.js?");

/***/ }),

/***/ "./src/Components/SearchBar/styles.js":
/*!********************************************!*\
  !*** ./src/Components/SearchBar/styles.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"InputText\": () => (/* binding */ InputText)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  display: flex;\\n  width: 100%;\\n  height: 3.3125rem;\\n  justify-content: center;\\n  align-items: center;\\n\"])));\nvar InputText = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.input(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  border: 0px;\\n  border-bottom: 2px solid var(--primary);\\n  width: 100%;\\n  height: 3.3125rem;\\n  padding: 0.9375rem 0.3125rem 1.4375rem;\\n  font-size: var(--extralarge);\\n  line-height: var(--extralarge);\\n  color:var(--white);\\n  font-weight: bold;\\n  background-color: transparent;\\n  outline: 0;\\n  @media(max-width: 800px) {\\n    padding: 0.9rem 0.3rem 0.3rem;\\n    font-size: var(--large);\\n  }\\n  &:placeholder{\\n    color:var(--primary);\\n    font-weight: normal;\\n  }\\n\"])));\n\n//# sourceURL=webpack://spotify-xp/./src/Components/SearchBar/styles.js?");

/***/ }),

/***/ "./src/Components/Spacer/index.js":
/*!****************************************!*\
  !*** ./src/Components/Spacer/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/Components/Spacer/styles.js\");\n\n\n\nfunction Spacer(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, props);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spacer);\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Spacer/index.js?");

/***/ }),

/***/ "./src/Components/Spacer/styles.js":
/*!*****************************************!*\
  !*** ./src/Components/Spacer/styles.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  width: \", \";\\n  height: \", \";\\n\"])), function (props) {\n  return props.width;\n}, function (props) {\n  return props.height;\n});\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Spacer/styles.js?");

/***/ }),

/***/ "./src/Components/Subtitle/index.js":
/*!******************************************!*\
  !*** ./src/Components/Subtitle/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/Components/Subtitle/styles.js\");\n\n\n\nfunction Title(_ref) {\n  var data = _ref.data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.HeadingH3, {\n    align: data.align,\n    font: data.font,\n    size: data.size\n  }, data.text);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Subtitle/index.js?");

/***/ }),

/***/ "./src/Components/Subtitle/styles.js":
/*!*******************************************!*\
  !*** ./src/Components/Subtitle/styles.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeadingH3\": () => (/* binding */ HeadingH3)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\nvar HeadingH3 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.h3(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  padding: 0px 0px;\\n  margin: 0px;\\n  font-size: var(--\", \");\\n  font-weight: normal;\\n  text-align: \", \";\\n  max-width: var(--\", \");\\n  color: var(--primary)\\n\"])), function (props) {\n  return props.font;\n}, function (props) {\n  return props.align;\n}, function (props) {\n  return props.size;\n});\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Subtitle/styles.js?");

/***/ }),

/***/ "./src/Components/Title/index.js":
/*!***************************************!*\
  !*** ./src/Components/Title/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/Components/Title/styles.js\");\n\n\n\nfunction Title(_ref) {\n  var data = _ref.data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.HeadingH2, {\n    align: data.align,\n    font: data.font,\n    size: data.size\n  }, data.text);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Title/index.js?");

/***/ }),

/***/ "./src/Components/Title/styles.js":
/*!****************************************!*\
  !*** ./src/Components/Title/styles.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeadingH2\": () => (/* binding */ HeadingH2)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\nvar HeadingH2 = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.h2(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  padding: 0.625rem 0px;\\n  margin: 0px;\\n  font-size: var(--\", \");\\n  font-weight: normal;\\n  max-width: var(--\", \");\\n  text-align: \", \";\\n  color: var(--secondary)\\n\"])), function (props) {\n  return props.font;\n}, function (props) {\n  return props.size;\n}, function (props) {\n  return props.align;\n});\n\n//# sourceURL=webpack://spotify-xp/./src/Components/Title/styles.js?");

/***/ }),

/***/ "./src/Context/ContextAuth.js":
/*!************************************!*\
  !*** ./src/Context/ContextAuth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar ContextAuth = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextAuth);\n\n//# sourceURL=webpack://spotify-xp/./src/Context/ContextAuth.js?");

/***/ }),

/***/ "./src/Context/ContextData.js":
/*!************************************!*\
  !*** ./src/Context/ContextData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar ContextData = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextData);\n\n//# sourceURL=webpack://spotify-xp/./src/Context/ContextData.js?");

/***/ }),

/***/ "./src/Context/ContextPlay.js":
/*!************************************!*\
  !*** ./src/Context/ContextPlay.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar ContextPlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextPlay);\n\n//# sourceURL=webpack://spotify-xp/./src/Context/ContextPlay.js?");

/***/ }),

/***/ "./src/Context/ContextTheme.js":
/*!*************************************!*\
  !*** ./src/Context/ContextTheme.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext('light');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);\n\n//# sourceURL=webpack://spotify-xp/./src/Context/ContextTheme.js?");

/***/ }),

/***/ "./src/Context/index.js":
/*!******************************!*\
  !*** ./src/Context/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContextAuth\": () => (/* reexport safe */ _ContextAuth__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"ContextTheme\": () => (/* reexport safe */ _ContextTheme__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"ContextPlay\": () => (/* reexport safe */ _ContextPlay__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"ContextData\": () => (/* reexport safe */ _ContextData__WEBPACK_IMPORTED_MODULE_3__.default)\n/* harmony export */ });\n/* harmony import */ var _ContextAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextAuth */ \"./src/Context/ContextAuth.js\");\n/* harmony import */ var _ContextTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextTheme */ \"./src/Context/ContextTheme.js\");\n/* harmony import */ var _ContextPlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextPlay */ \"./src/Context/ContextPlay.js\");\n/* harmony import */ var _ContextData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextData */ \"./src/Context/ContextData.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://spotify-xp/./src/Context/index.js?");

/***/ }),

/***/ "./src/GlobalStyle.js":
/*!****************************!*\
  !*** ./src/GlobalStyle.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Global\": () => (/* binding */ Global)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\nvar Global = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  *{\\n    font-family: 'Roboto', sans-serif;\\n    box-sizing: border-box;\\n    padding: 0;\\n    margin: 0;\\n    font-size: 16px;\\n  }\\n  body,html,button,textarea{\\n    font-family: 'Roboto', sans-serif;\\n  }\\n\"])));\n\n//# sourceURL=webpack://spotify-xp/./src/GlobalStyle.js?");

/***/ }),

/***/ "./src/Pages/Album/index.js":
/*!**********************************!*\
  !*** ./src/Pages/Album/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Components_ArtistItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/ArtistItem */ \"./src/Components/ArtistItem/index.js\");\n/* harmony import */ var _Components_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/Title */ \"./src/Components/Title/index.js\");\n/* harmony import */ var _Components_Spacer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Components/Spacer */ \"./src/Components/Spacer/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ \"./src/Pages/Album/styles.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Context */ \"./src/Context/index.js\");\n/* harmony import */ var _helpers_makeRequest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/makeRequest */ \"./src/helpers/makeRequest.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../__Config */ \"./src/__Config/index.js\");\n/* harmony import */ var _utils_millisToTime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/millisToTime */ \"./src/utils/millisToTime.js\");\n/* harmony import */ var _utils_noNameBig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/noNameBig */ \"./src/utils/noNameBig.js\");\n/* harmony import */ var _Components_PlayerMusic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Components/PlayerMusic */ \"./src/Components/PlayerMusic/index.js\");\n/* harmony import */ var _Components_Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Components/Link */ \"./src/Components/Link/index.js\");\n/* harmony import */ var _Components_Loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Components/Loading */ \"./src/Components/Loading/index.js\");\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Album(props) {\n  var _ref;\n\n  var idAlbum = props.location.state.idAlbum;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n    items: [0, 1, 2, 3]\n  }),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState3, 2),\n      detailAlbum = _useState4[0],\n      setDetailAlbum = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState5, 2),\n      sourceInfo = _useState6[0],\n      setSourceInfo = _useState6[1];\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_10__.ContextAuth),\n      token = _useContext.token;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_10__.ContextData),\n      visitedAlbum = _useContext2.visitedAlbum,\n      setVisitedAlbum = _useContext2.setVisitedAlbum;\n\n  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_10__.ContextPlay),\n      setItemPlay = _useContext3.setItemPlay;\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState7, 2),\n      isError = _useState8[0],\n      setIsError = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),\n      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState9, 2),\n      isLoading = _useState10[0],\n      setIsLoading = _useState10[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    function getData() {\n      return _getData.apply(this, arguments);\n    }\n\n    function _getData() {\n      _getData = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {\n        var response, dataAlbum;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setIsError(false);\n                setIsLoading(true);\n                _context.prev = 2;\n                _context.next = 5;\n                return (0,_helpers_makeRequest__WEBPACK_IMPORTED_MODULE_11__.default)('', sourceInfo, setSourceInfo, token, 'tracksAlbumEndPoint', idAlbum, 0);\n\n              case 5:\n                response = _context.sent;\n                _context.next = 8;\n                return (0,_helpers_makeRequest__WEBPACK_IMPORTED_MODULE_11__.default)('', sourceInfo, setSourceInfo, token, 'detailAlbumEndPoint', idAlbum, idAlbum);\n\n              case 8:\n                dataAlbum = _context.sent;\n                setVisitedAlbum([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(visitedAlbum), [dataAlbum]));\n                setData(response || {\n                  items: [0, 1, 2, 3, 4]\n                });\n                setDetailAlbum(dataAlbum || {});\n                setIsLoading(false);\n                _context.next = 19;\n                break;\n\n              case 15:\n                _context.prev = 15;\n                _context.t0 = _context[\"catch\"](2);\n                setIsError(true);\n                setIsLoading(false);\n\n              case 19:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[2, 15]]);\n      }));\n      return _getData.apply(this, arguments);\n    }\n\n    getData();\n    return function () {\n      isError === true && null;\n    };\n  }, [token, idAlbum]);\n\n  function playMusic(item) {\n    setItemPlay(item);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_styles__WEBPACK_IMPORTED_MODULE_9__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Components_Link__WEBPACK_IMPORTED_MODULE_16__.default, {\n    data: {\n      link: '/home',\n      text: '< Voltar',\n      size: 'largebox',\n      font: 'small',\n      align: 'left'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Components_Spacer__WEBPACK_IMPORTED_MODULE_8__.default, {\n    width: \"100%\",\n    height: \"0.5rem\"\n  }), !isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_styles__WEBPACK_IMPORTED_MODULE_9__.AlbumContainer, null, (_ref = [detailAlbum]) === null || _ref === void 0 ? void 0 : _ref.map(function (item, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Components_ArtistItem__WEBPACK_IMPORTED_MODULE_6__.default, {\n      data: {\n        size: 'mediumbox',\n        font: 'medium',\n        imgSize: '240'\n      },\n      album: _objectSpread(_objectSpread({\n        images: item === null || item === void 0 ? void 0 : item.images\n      }, item), {}, {\n        name: (item === null || item === void 0 ? void 0 : item.name) || 'Nome do álbum grande de duas linhas'\n      }),\n      key: index\n    });\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_styles__WEBPACK_IMPORTED_MODULE_9__.PlaylistContainer, null, data === null || data === void 0 ? void 0 : data.items.map(function (item, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_styles__WEBPACK_IMPORTED_MODULE_9__.PlaylistMusic, {\n      key: index + 1\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"span\", null, index + 1, \".\"), item !== null && item !== void 0 && item.name ? (0,_utils_noNameBig__WEBPACK_IMPORTED_MODULE_14__.default)(item.name, 60) : 'Nome da faixa'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"span\", null, item !== null && item !== void 0 && item.duration_ms ? (0,_utils_millisToTime__WEBPACK_IMPORTED_MODULE_13__.default)(item.duration_ms) : '0:00', \"\\xA0-\\xA0\", (item === null || item === void 0 ? void 0 : item.duration_ms) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"button\", {\n      onClick: function onClick() {\n        return playMusic(item);\n      }\n    }, \"[Preview]\")));\n  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Components_Loading__WEBPACK_IMPORTED_MODULE_17__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Components_Spacer__WEBPACK_IMPORTED_MODULE_8__.default, {\n    width: \"100%\",\n    height: \"6.25rem\"\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Album);\n\n//# sourceURL=webpack://spotify-xp/./src/Pages/Album/index.js?");

/***/ }),

/***/ "./src/Pages/Album/styles.js":
/*!***********************************!*\
  !*** ./src/Pages/Album/styles.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"AlbumContainer\": () => (/* binding */ AlbumContainer),\n/* harmony export */   \"PlaylistContainer\": () => (/* binding */ PlaylistContainer),\n/* harmony export */   \"PlaylistMusic\": () => (/* binding */ PlaylistMusic)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  margin: 0 auto;\\n  display: flex;\\n  margin-top: 40px;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  width: 75%;\\n  flex-direction: column;\\n  @media(max-width: 800px) {\\n    width: 100%;\\n    margin-top: 5rem;\\n  }\\n\"])));\nvar AlbumContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  @media(max-width: 800px) {\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    a{\\n      margin-right: 0px;\\n    }\\n  }\\n\"])));\nvar PlaylistContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.ul(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  width: 100%;\\n  margin-top: 1.875rem;\\n  color: var(--primary);\\n\"])));\nvar PlaylistMusic = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.li(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n @media(max-width: 800px) {\\n      margin: 0.5rem 0px;\\n  }\\n  >span{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n  audio{\\n    width: 300px;\\n    height: 30px;\\n  }\\n  audio::-webkit-media-controls-panel {\\n    width: 100px;\\n    height: 30px;\\n    background-color: var(--primary);\\n    font-size: 10px;\\n}\\n  >span>span{\\n    margin-right: 1rem;\\n  }\\n  list-style-type: decimal;\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 1.1rem;\\n\"])));\n\n//# sourceURL=webpack://spotify-xp/./src/Pages/Album/styles.js?");

/***/ }),

/***/ "./src/Pages/Home/index.js":
/*!*********************************!*\
  !*** ./src/Pages/Home/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Components_ArtistItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/ArtistItem */ \"./src/Components/ArtistItem/index.js\");\n/* harmony import */ var _Components_ArtistContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/ArtistContainer */ \"./src/Components/ArtistContainer/index.js\");\n/* harmony import */ var _Components_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/SearchBar */ \"./src/Components/SearchBar/index.js\");\n/* harmony import */ var _Components_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/Title */ \"./src/Components/Title/index.js\");\n/* harmony import */ var _Components_Spacer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Components/Spacer */ \"./src/Components/Spacer/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ \"./src/Pages/Home/styles.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Context */ \"./src/Context/index.js\");\n/* harmony import */ var _helpers_makeRequest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/makeRequest */ \"./src/helpers/makeRequest.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),\n      album = _useState2[0],\n      setAlbum = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState3, 2),\n      sourceInfo = _useState4[0],\n      setSourceInfo = _useState4[1];\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_10__.ContextAuth),\n      token = _useContext.token;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_10__.ContextData),\n      data = _useContext2.data,\n      setData = _useContext2.setData,\n      visitedAlbum = _useContext2.visitedAlbum,\n      setVisitedAlbum = _useContext2.setVisitedAlbum;\n\n  function handleSearch(_x) {\n    return _handleSearch.apply(this, arguments);\n  }\n\n  function _handleSearch() {\n    _handleSearch = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(value) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setAlbum(value);\n              _context.next = 3;\n              return (0,_helpers_makeRequest__WEBPACK_IMPORTED_MODULE_11__.default)(value, sourceInfo, setSourceInfo, token);\n\n            case 3:\n              response = _context.sent;\n              setData((response === null || response === void 0 ? void 0 : response.albums) || {\n                items: [0, 1, 2, 3, 4]\n              });\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSearch.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_styles__WEBPACK_IMPORTED_MODULE_9__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Components_Title__WEBPACK_IMPORTED_MODULE_7__.default, {\n    data: {\n      text: 'Busque por artistas, álbuns ou músicas',\n      size: 'largebox',\n      font: 'small',\n      align: 'left'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Components_SearchBar__WEBPACK_IMPORTED_MODULE_6__.default, {\n    setAlbum: handleSearch,\n    album: album\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Components_Spacer__WEBPACK_IMPORTED_MODULE_8__.default, {\n    width: \"100%\",\n    height: \"2.8125rem\"\n  }), album ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Components_Title__WEBPACK_IMPORTED_MODULE_7__.default, {\n    data: {\n      text: \"Resultado encontrados para \\\"\".concat(album, \"\\\"\"),\n      size: 'largebox',\n      font: 'small',\n      align: 'left'\n    }\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Components_Title__WEBPACK_IMPORTED_MODULE_7__.default, {\n    data: {\n      text: 'Álbuns buscados recentemente',\n      size: 'largebox',\n      font: 'medium',\n      align: 'left'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Components_ArtistContainer__WEBPACK_IMPORTED_MODULE_5__.default, null, data === null || data === void 0 ? void 0 : data.items.map(function (item, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Components_ArtistItem__WEBPACK_IMPORTED_MODULE_4__.default, {\n      album: item,\n      key: (item === null || item === void 0 ? void 0 : item.id) && item.id || index\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Components_Spacer__WEBPACK_IMPORTED_MODULE_8__.default, {\n    width: \"100%\",\n    height: \"2.8125rem\"\n  }), visitedAlbum.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Components_Title__WEBPACK_IMPORTED_MODULE_7__.default, {\n    data: {\n      text: 'Álbuns acessados recentemente',\n      size: 'largebox',\n      font: 'medium',\n      align: 'left'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Components_ArtistContainer__WEBPACK_IMPORTED_MODULE_5__.default, null, visitedAlbum.reverse().map(function (item, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Components_ArtistItem__WEBPACK_IMPORTED_MODULE_4__.default, {\n      album: item,\n      key: (item === null || item === void 0 ? void 0 : item.id) && item.id || index\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Components_Spacer__WEBPACK_IMPORTED_MODULE_8__.default, {\n    width: \"100%\",\n    height: \"6.25rem\"\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://spotify-xp/./src/Pages/Home/index.js?");

/***/ }),

/***/ "./src/Pages/Home/styles.js":
/*!**********************************!*\
  !*** ./src/Pages/Home/styles.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  margin: 0 auto;\\n  display: flex;\\n  margin-top: 2.5rem;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  width: 75%;\\n  flex-direction: column;\\n  @media(max-width: 800px) {\\n    width: 100%;\\n    margin-top: 5rem;\\n  }\\n\"])));\n\n//# sourceURL=webpack://spotify-xp/./src/Pages/Home/styles.js?");

/***/ }),

/***/ "./src/Pages/Login/index.js":
/*!**********************************!*\
  !*** ./src/Pages/Login/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/Pages/Login/styles.js\");\n/* harmony import */ var _Components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Input */ \"./src/Components/Input/index.js\");\n/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Button */ \"./src/Components/Button/index.js\");\n/* harmony import */ var _Components_Spacer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/Spacer */ \"./src/Components/Spacer/index.js\");\n/* harmony import */ var _static_images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/images/logo.png */ \"./src/static/images/logo.png\");\n/* harmony import */ var _Components_Imagem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/Imagem */ \"./src/Components/Imagem/index.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../__Config */ \"./src/__Config/index.js\");\n/* harmony import */ var _utils_getToken__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/getToken */ \"./src/utils/getToken.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Context */ \"./src/Context/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Login() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_10__.ContextAuth),\n      setToken = _useContext.setToken;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_Config__WEBPACK_IMPORTED_MODULE_8__.clientId),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      idCliente = _useState2[0],\n      setidCliente = _useState2[1];\n\n  var jwToken = (0,_utils_getToken__WEBPACK_IMPORTED_MODULE_9__.default)();\n\n  if (jwToken) {\n    localStorage.setItem('jwt', jwToken);\n  }\n\n  function onChange(e) {\n    setidCliente(e.target.value);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.LoginForm, {\n    method: \"get\",\n    action: \"\".concat(_Config__WEBPACK_IMPORTED_MODULE_8__.authEndpoint)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_Imagem__WEBPACK_IMPORTED_MODULE_7__.default, {\n    data: {\n      size: 'extrasmallbox',\n      url: _static_images_logo_png__WEBPACK_IMPORTED_MODULE_6__.default\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_Spacer__WEBPACK_IMPORTED_MODULE_5__.default, {\n    width: \"100%\",\n    height: \"20px\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_Spacer__WEBPACK_IMPORTED_MODULE_5__.default, {\n    width: \"100%\",\n    height: \"30px\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_Input__WEBPACK_IMPORTED_MODULE_3__.default, {\n    type: \"password\",\n    name: \"clientId\",\n    value: idCliente,\n    placeholder: \"Seu IdClient\",\n    onChange: onChange,\n    fontSize: \"extralarge\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_Input__WEBPACK_IMPORTED_MODULE_3__.default, {\n    type: \"hidden\",\n    name: \"client_id\",\n    value: idCliente,\n    fontSize: \"medium\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_Input__WEBPACK_IMPORTED_MODULE_3__.default, {\n    type: \"hidden\",\n    name: \"redirect_uri\",\n    value: _Config__WEBPACK_IMPORTED_MODULE_8__.redirectUri,\n    fontSize: \"medium\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_Input__WEBPACK_IMPORTED_MODULE_3__.default, {\n    type: \"hidden\",\n    name: \"response_type\",\n    value: \"token\",\n    fontSize: \"medium\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_Input__WEBPACK_IMPORTED_MODULE_3__.default, {\n    type: \"hidden\",\n    name: \"show_dialog\",\n    value: \"true\",\n    fontSize: \"medium\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_Input__WEBPACK_IMPORTED_MODULE_3__.default, {\n    type: \"hidden\",\n    name: \"scope\",\n    value: _Config__WEBPACK_IMPORTED_MODULE_8__.scopes.join(\"%20\"),\n    fontSize: \"medium\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_Spacer__WEBPACK_IMPORTED_MODULE_5__.default, {\n    width: \"100%\",\n    height: \"30px\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_4__.default, {\n    type: \"submit\",\n    value: \"Efetuar Login\",\n    fontSize: \"medium\"\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://spotify-xp/./src/Pages/Login/index.js?");

/***/ }),

/***/ "./src/Pages/Login/styles.js":
/*!***********************************!*\
  !*** ./src/Pages/Login/styles.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"LoginForm\": () => (/* binding */ LoginForm)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  width: 100%;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"])));\nvar LoginForm = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.form(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  box-shadow: inset -1px 0px 3px 0px var(--white);\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  flex-direction: column;\\n  padding: 30px;\\n  width: 400px;\\n  height: 300px;\\n  background-color: rgba(0,0,0,0.5);\\n  border-radius: 10px;\\n  h2{\\n    color: rgba(255,255,255,0.9);\\n    font-weight: bold;\\n  }\\n\"])));\n\n//# sourceURL=webpack://spotify-xp/./src/Pages/Login/styles.js?");

/***/ }),

/***/ "./src/Pages/index.js":
/*!****************************!*\
  !*** ./src/Pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"Login\": () => (/* reexport safe */ _Login__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"Album\": () => (/* reexport safe */ _Album__WEBPACK_IMPORTED_MODULE_2__.default)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/Pages/Home/index.js\");\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ \"./src/Pages/Login/index.js\");\n/* harmony import */ var _Album__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Album */ \"./src/Pages/Album/index.js\");\n\n\n\n\n\n//# sourceURL=webpack://spotify-xp/./src/Pages/index.js?");

/***/ }),

/***/ "./src/Templates/Default/index.js":
/*!****************************************!*\
  !*** ./src/Templates/Default/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/Templates/Default/styles.js\");\n/* harmony import */ var _static_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/logo.png */ \"./src/static/images/logo.png\");\n/* harmony import */ var _static_images_iconMenu_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/images/iconMenu.png */ \"./src/static/images/iconMenu.png\");\n/* harmony import */ var _Components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/Menu */ \"./src/Components/Menu/index.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Context */ \"./src/Context/index.js\");\n/* harmony import */ var _Components_PlayerMusic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/PlayerMusic */ \"./src/Components/PlayerMusic/index.js\");\n\n\n\n\n\n\n\n\n\nfunction Template(_ref) {\n  var children = _ref.children;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_6__.ContextAuth),\n      token = _useContext.token,\n      setToken = _useContext.setToken;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      openMenu = _useState2[0],\n      setOpenMenu = _useState2[1];\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_6__.ContextTheme),\n      tema = _useContext2.tema,\n      setTema = _useContext2.setTema;\n\n  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_6__.ContextPlay),\n      itemPlay = _useContext3.itemPlay,\n      setItemPlay = _useContext3.setItemPlay;\n\n  function handleOpenMenu() {\n    setOpenMenu(!openMenu);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Theme, {\n    theme: tema\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Logo, {\n    src: _static_images_logo_png__WEBPACK_IMPORTED_MODULE_3__.default\n  }), token && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n    onClick: handleOpenMenu\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: _static_images_iconMenu_png__WEBPACK_IMPORTED_MODULE_4__.default\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_Menu__WEBPACK_IMPORTED_MODULE_5__.default, {\n    openMenu: openMenu\n  })), children, itemPlay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_PlayerMusic__WEBPACK_IMPORTED_MODULE_7__.default, {\n    item: itemPlay\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Template);\n\n//# sourceURL=webpack://spotify-xp/./src/Templates/Default/index.js?");

/***/ }),

/***/ "./src/Templates/Default/styles.js":
/*!*****************************************!*\
  !*** ./src/Templates/Default/styles.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Theme\": () => (/* binding */ Theme),\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Logo\": () => (/* binding */ Logo),\n/* harmony export */   \"Profile\": () => (/* binding */ Profile)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme */ \"./src/theme/index.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4;\n\n\n\nvar Theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n:root{\\n    \", \"\\n    \", \"\\n  }\\n\"])), function (props) {\n  return props.theme === 'dark' && _theme__WEBPACK_IMPORTED_MODULE_1__.Dark;\n}, function (props) {\n  return props.theme === 'light' && _theme__WEBPACK_IMPORTED_MODULE_1__.Light;\n});\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  min-height: 100vh;\\n  height: 100%;\\n  width: 100%;\\n  background-color: var(--background);\\n  padding: 10px 20px;\\n\"])));\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.img(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  cursor: pointer;\\n  max-width: 2.8125rem;\\n  max-height: 2.8125rem;\\n  position: absolute;\\n  top: 20px;\\n  left: 20px;\\n\"])));\nvar Profile = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 2.8125rem;\\n  height: 2.8125rem;\\n  position: absolute;\\n  border-radius: 100%;\\n  background-color: var(--secondary);\\n  top: 20px;\\n  right: 20px;\\n  transition: background 0.3s;\\n  >img{\\n    max-width: 2rem;\\n    max-height: 2rem;\\n  }\\n  &:hover{\\n    opacity: 50%;\\n  }\\n\"])));\n\n//# sourceURL=webpack://spotify-xp/./src/Templates/Default/styles.js?");

/***/ }),

/***/ "./src/__Config/index.js":
/*!*******************************!*\
  !*** ./src/__Config/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authEndpoint\": () => (/* binding */ authEndpoint),\n/* harmony export */   \"clientId\": () => (/* binding */ clientId),\n/* harmony export */   \"redirectUri\": () => (/* binding */ redirectUri),\n/* harmony export */   \"scopes\": () => (/* binding */ scopes),\n/* harmony export */   \"endPoints\": () => (/* binding */ endPoints)\n/* harmony export */ });\nvar authEndpoint = 'https://accounts.spotify.com/authorize';\nvar clientId = \"8a17a7a4ea2b484db4454a21acf8ca5c\";\nvar redirectUri = \"http://localhost:8080\";\nvar scopes = [\"user-read-currently-playing\", \"user-read-playback-state\"];\n\nvar endPoints = function endPoints(_ref) {\n  var _ref$idAlbumTracks = _ref.idAlbumTracks,\n      idAlbumTracks = _ref$idAlbumTracks === void 0 ? 0 : _ref$idAlbumTracks,\n      _ref$idAlbum = _ref.idAlbum,\n      idAlbum = _ref$idAlbum === void 0 ? 0 : _ref$idAlbum,\n      _ref$searchTerm = _ref.searchTerm,\n      searchTerm = _ref$searchTerm === void 0 ? '' : _ref$searchTerm;\n  return {\n    AlbumEndPoint: \"https://api.spotify.com/v1/search?q=\".concat(searchTerm, \"&type=album&market=BR&limit=10&offset=5\"),\n    tracksAlbumEndPoint: \"https://api.spotify.com/v1/albums/\".concat(idAlbumTracks, \"/tracks?market=BR\"),\n    detailAlbumEndPoint: \"https://api.spotify.com/v1/albums/\".concat(idAlbum, \"/\")\n  };\n};\n\n\n\n//# sourceURL=webpack://spotify-xp/./src/__Config/index.js?");

/***/ }),

/***/ "./src/helpers/makeRequest.js":
/*!************************************!*\
  !*** ./src/helpers/makeRequest.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../__Config */ \"./src/__Config/index.js\");\n\n\n\n\n\n\nvar search = /*#__PURE__*/function () {\n  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(value, sourceInfo, setsourceInfo, token) {\n    var TypeEndPoint,\n        idAlbumTracks,\n        idAlbum,\n        searchTerm,\n        CancelToken,\n        source,\n        loading,\n        finallyEndpoint,\n        res,\n        _args = arguments;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            TypeEndPoint = _args.length > 4 && _args[4] !== undefined ? _args[4] : 'AlbumEndPoint';\n            idAlbumTracks = _args.length > 5 && _args[5] !== undefined ? _args[5] : 0;\n            idAlbum = _args.length > 6 && _args[6] !== undefined ? _args[6] : 0;\n            searchTerm = value;\n\n            if (sourceInfo) {\n              sourceInfo.cancel('Operation canceled by the user.');\n            }\n\n            CancelToken = _services_api__WEBPACK_IMPORTED_MODULE_3__.default.CancelToken;\n            source = CancelToken.source();\n            loading = true;\n            setsourceInfo(source);\n            finallyEndpoint = (0,_Config__WEBPACK_IMPORTED_MODULE_4__.endPoints)({\n              idAlbumTracks: idAlbumTracks,\n              idAlbum: idAlbum,\n              searchTerm: searchTerm\n            });\n            _context.prev = 10;\n            _context.next = 13;\n            return _services_api__WEBPACK_IMPORTED_MODULE_3__.default.get(finallyEndpoint[TypeEndPoint], {\n              cancelToken: source.token,\n              method: 'get',\n              headers: {\n                \"Authorization\": \"Bearer \" + token\n              }\n            });\n\n          case 13:\n            res = _context.sent;\n            setsourceInfo(undefined);\n            _context.next = 17;\n            return res.data;\n\n          case 17:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 20:\n            _context.prev = 20;\n            _context.t0 = _context[\"catch\"](10);\n\n          case 22:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[10, 20]]);\n  }));\n\n  return function search(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://spotify-xp/./src/helpers/makeRequest.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\n\n(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://spotify-xp/./src/index.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pages */ \"./src/Pages/index.js\");\n/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route */ \"./src/routes/route.js\");\n\n\n\n\nfunction Routes() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_route__WEBPACK_IMPORTED_MODULE_2__.default, {\n    exact: true,\n    path: \"/\",\n    component: _Pages__WEBPACK_IMPORTED_MODULE_1__.Login\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_route__WEBPACK_IMPORTED_MODULE_2__.default, {\n    path: \"/home\",\n    noPublic: true,\n    component: _Pages__WEBPACK_IMPORTED_MODULE_1__.Home\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_route__WEBPACK_IMPORTED_MODULE_2__.default, {\n    path: \"/albums/:artist\",\n    noPublic: true,\n    component: _Pages__WEBPACK_IMPORTED_MODULE_1__.Album\n  }));\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);\n\n//# sourceURL=webpack://spotify-xp/./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/route.js":
/*!*****************************!*\
  !*** ./src/routes/route.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n\n\n\n\n\nfunction RouteContainer(_ref) {\n  var Component = _ref.component,\n      history = _ref.history,\n      noPublic = _ref.noPublic,\n      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, [\"component\", \"history\", \"noPublic\"]);\n\n  var logged = false;\n\n  if (localStorage.getItem('jwt')) {\n    logged = true;\n  }\n\n  if (!logged && noPublic) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {\n      to: \"/\"\n    });\n  }\n\n  if (logged && !noPublic) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {\n      to: \"/home\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {\n    noPublic: true,\n    history: true,\n    component: Component\n  }));\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RouteContainer);\n\n//# sourceURL=webpack://spotify-xp/./src/routes/route.js?");

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar api = (axios__WEBPACK_IMPORTED_MODULE_0___default());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n//# sourceURL=webpack://spotify-xp/./src/services/api.js?");

/***/ }),

/***/ "./src/theme/dark.js":
/*!***************************!*\
  !*** ./src/theme/dark.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar dark = {\n  '--background': '#161616',\n  '--white': '#ffffff',\n  '--primary': '#999999',\n  '--secondary': '#FAFAFA',\n  '--extralarge': '3rem',\n  '--large': '1.5rem',\n  '--medium': '1.125rem',\n  '--small': '1rem',\n  '--extrasmall': '0.875rem',\n  '--extrasmallbox': '5rem',\n  '--smallbox': '10rem',\n  '--mediumbox': '15rem',\n  '--largebox': '20rem'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dark);\n\n//# sourceURL=webpack://spotify-xp/./src/theme/dark.js?");

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dark\": () => (/* reexport safe */ _dark__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"Light\": () => (/* reexport safe */ _light__WEBPACK_IMPORTED_MODULE_1__.default)\n/* harmony export */ });\n/* harmony import */ var _dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark */ \"./src/theme/dark.js\");\n/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light */ \"./src/theme/light.js\");\n\n\n\n\n//# sourceURL=webpack://spotify-xp/./src/theme/index.js?");

/***/ }),

/***/ "./src/theme/light.js":
/*!****************************!*\
  !*** ./src/theme/light.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar light = {\n  '--background': '#ffffff',\n  '--white': '#000000',\n  '--primary': '#aaaaaa',\n  '--secondary': '#404040',\n  '--extralarge': '3rem',\n  '--large': '1.5rem',\n  '--medium': '1.125rem',\n  '--small': '1rem',\n  '--extrasmall': '0.875rem',\n  '--extrasmallbox': '5rem',\n  '--smallbox': '10rem',\n  '--mediumbox': '15rem',\n  '--largebox': '20rem'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (light);\n\n//# sourceURL=webpack://spotify-xp/./src/theme/light.js?");

/***/ }),

/***/ "./src/utils/getToken.js":
/*!*******************************!*\
  !*** ./src/utils/getToken.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ \"./src/Context/index.js\");\n\n\n\nfunction getToken() {\n  var hash = window.location.hash.substring(1).split(\"&\").reduce(function (initial, item) {\n    if (item) {\n      var parts = item.split(\"=\");\n      initial[parts[0]] = decodeURIComponent(parts[1]);\n    }\n\n    return initial;\n  }, {});\n  window.location.hash = \"\"; // Set token\n\n  var _token = hash.access_token;\n\n  if (_token) {\n    return _token;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getToken);\n\n//# sourceURL=webpack://spotify-xp/./src/utils/getToken.js?");

/***/ }),

/***/ "./src/utils/millisToTime.js":
/*!***********************************!*\
  !*** ./src/utils/millisToTime.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction millisToTime(ms) {\n  var minutes = Math.floor(ms / 60000);\n  var seconds = (ms % 60000 / 1000).toFixed(0);\n  return minutes + \":\" + (seconds < 10 ? '0' : '') + seconds;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (millisToTime);\n\n//# sourceURL=webpack://spotify-xp/./src/utils/millisToTime.js?");

/***/ }),

/***/ "./src/utils/noNameBig.js":
/*!********************************!*\
  !*** ./src/utils/noNameBig.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction noNameBig(value, size) {\n  return value && value.length > size ? value.substr(0, size) + '...' : value;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noNameBig);\n\n//# sourceURL=webpack://spotify-xp/./src/utils/noNameBig.js?");

/***/ }),

/***/ "./src/utils/slugFy.js":
/*!*****************************!*\
  !*** ./src/utils/slugFy.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar convertToSlug = function convertToSlug(text) {\n  var a = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';\n  var b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';\n  var p = new RegExp(a.split('').join('|'), 'g');\n  return text.toString().toLowerCase().trim().replace(p, function (c) {\n    return b.charAt(a.indexOf(c));\n  }) // Replace special chars\n  .replace(/&/g, '-and-') // Replace & with 'and'\n  .replace(/[\\s\\W-]+/g, '-'); // Replace spaces, non-word characters and dashes with a single dash (-)\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertToSlug);\n\n//# sourceURL=webpack://spotify-xp/./src/utils/slugFy.js?");

/***/ }),

/***/ "./src/static/images/iconMenu.png":
/*!****************************************!*\
  !*** ./src/static/images/iconMenu.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"4b64f1d2f254f24ed17ce77342220b82.png\");\n\n//# sourceURL=webpack://spotify-xp/./src/static/images/iconMenu.png?");

/***/ }),

/***/ "./src/static/images/loading.gif":
/*!***************************************!*\
  !*** ./src/static/images/loading.gif ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"696cd6cc8b3126c6f7709dfc1947ada6.gif\");\n\n//# sourceURL=webpack://spotify-xp/./src/static/images/loading.gif?");

/***/ }),

/***/ "./src/static/images/logo.png":
/*!************************************!*\
  !*** ./src/static/images/logo.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"95a26c13d446d378086490a53efbe6ba.png\");\n\n//# sourceURL=webpack://spotify-xp/./src/static/images/logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/index.js","vendors-node_modules_babel_runtime_helpers_esm_asyncToGenerator_js-node_modules_babel_runtime-9e4e37"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkspotify_xp"] = self["webpackChunkspotify_xp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;