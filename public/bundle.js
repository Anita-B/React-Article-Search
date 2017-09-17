/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\n// Include the Main React Dependencies\nvar React = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"react\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"react-dom\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\n// Grabs the Routes\nvar routes = __webpack_require__(1);\n\n// Renders the contents according to the route page.\nReactDOM.render(routes, document.getElementById(\"app\"));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzPzg2YTkiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiUmVhY3RET00iLCJyb3V0ZXMiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSUEsUUFBUSxtQkFBQUMsQ0FBUSxpSUFBUixDQUFaO0FBQ0EsSUFBSUMsV0FBVyxtQkFBQUQsQ0FBUSxxSUFBUixDQUFmOztBQUVBO0FBQ0EsSUFBSUUsU0FBUyxtQkFBQUYsQ0FBUSxDQUFSLENBQWI7O0FBRUE7QUFDQUMsU0FBU0UsTUFBVCxDQUFnQkQsTUFBaEIsRUFBd0JFLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBeEIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgdGhlIE1haW4gUmVhY3QgRGVwZW5kZW5jaWVzXG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG4vLyBHcmFicyB0aGUgUm91dGVzXG52YXIgcm91dGVzID0gcmVxdWlyZShcIi4vY29uZmlnL3JvdXRlc1wiKTtcblxuLy8gUmVuZGVycyB0aGUgY29udGVudHMgYWNjb3JkaW5nIHRvIHRoZSByb3V0ZSBwYWdlLlxuUmVhY3RET00ucmVuZGVyKHJvdXRlcywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\n// Inclue the React library\nvar React = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"react\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\n// Include the react-router module\nvar router = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"react-router\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\n// Include the Route component for displaying individual routes\nvar Route = router.Route;\n\n// Include the Router component to contain all our Routes\n// Here where we can pass in some configuration as props\nvar Router = router.Router;\n\n// Include the hashHistory prop to handle routing client side without a server\n// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory\nvar hashHistory = router.hashHistory;\n\n// Include the IndexRoute (catch-all route)\nvar IndexRoute = router.IndexRoute;\n\n// Reference the high-level components\n// var Main = require(\"../components/Main\");\n// var Child1 = require(\"../components/children/Child1\");\n// var Child2 = require(\"../components/children/Child2\");\n// var GrandChild1 = require(\"../components/children/grandchildren/GrandChild1\");\n// var GrandChild2 = require(\"../components/children/grandchildren/GrandChild2\");\n\n// Export the Routes\n//module.exports = (\n\n// The high level component is the Router component\n//<Router history={hashHistory}>\n\n//<Route path=\"/\" component={Main}>\n\n//{/* If user selects Child1 then show the appropriate component*/}\n//<Route path=\"Child1\" component={Child1} >\n\n//{/* Child1 has its own Grandchildren options */}\n//<Route path=\"GrandChild1\" component={GrandChild1} />\n//<Route path=\"GrandChild2\" component={GrandChild2} />\n\n// <IndexRoute component={GrandChild1} />\n\n// </Route>\n\n//{/* If user selects Child2 then show the appropriate component*/}\n// <Route path=\"Child2\" component={Child2} />\n\n//{/* If user selects any other path... we get the Home Route */}\n//<IndexRoute component={Child1} />\n\n//</Route>\n// </Router>\n//);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlnL3JvdXRlcy5qcz8wNDMwIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsInJvdXRlciIsIlJvdXRlIiwiUm91dGVyIiwiaGFzaEhpc3RvcnkiLCJJbmRleFJvdXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSUEsUUFBUSxtQkFBQUMsQ0FBUSxpSUFBUixDQUFaOztBQUVBO0FBQ0EsSUFBSUMsU0FBUyxtQkFBQUQsQ0FBUSx3SUFBUixDQUFiOztBQUVBO0FBQ0EsSUFBSUUsUUFBUUQsT0FBT0MsS0FBbkI7O0FBRUE7QUFDQTtBQUNBLElBQUlDLFNBQVNGLE9BQU9FLE1BQXBCOztBQUVBO0FBQ0E7QUFDQSxJQUFJQyxjQUFjSCxPQUFPRyxXQUF6Qjs7QUFFQTtBQUNBLElBQUlDLGFBQWFKLE9BQU9JLFVBQXhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVFO0FBQ0E7O0FBRUU7O0FBRUU7QUFDQTs7QUFFRTtBQUNBO0FBQ0E7O0FBRUQ7O0FBRUY7O0FBRUM7QUFDRDs7QUFFQztBQUNBOztBQUVGO0FBQ0g7QUFDRCIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5jbHVlIHRoZSBSZWFjdCBsaWJyYXJ5XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbi8vIEluY2x1ZGUgdGhlIHJlYWN0LXJvdXRlciBtb2R1bGVcbnZhciByb3V0ZXIgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xuXG4vLyBJbmNsdWRlIHRoZSBSb3V0ZSBjb21wb25lbnQgZm9yIGRpc3BsYXlpbmcgaW5kaXZpZHVhbCByb3V0ZXNcbnZhciBSb3V0ZSA9IHJvdXRlci5Sb3V0ZTtcblxuLy8gSW5jbHVkZSB0aGUgUm91dGVyIGNvbXBvbmVudCB0byBjb250YWluIGFsbCBvdXIgUm91dGVzXG4vLyBIZXJlIHdoZXJlIHdlIGNhbiBwYXNzIGluIHNvbWUgY29uZmlndXJhdGlvbiBhcyBwcm9wc1xudmFyIFJvdXRlciA9IHJvdXRlci5Sb3V0ZXI7XG5cbi8vIEluY2x1ZGUgdGhlIGhhc2hIaXN0b3J5IHByb3AgdG8gaGFuZGxlIHJvdXRpbmcgY2xpZW50IHNpZGUgd2l0aG91dCBhIHNlcnZlclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0VHJhaW5pbmcvcmVhY3Qtcm91dGVyL2Jsb2IvbWFzdGVyL2RvY3MvZ3VpZGVzL0hpc3Rvcmllcy5tZCNoYXNoaGlzdG9yeVxudmFyIGhhc2hIaXN0b3J5ID0gcm91dGVyLmhhc2hIaXN0b3J5O1xuXG4vLyBJbmNsdWRlIHRoZSBJbmRleFJvdXRlIChjYXRjaC1hbGwgcm91dGUpXG52YXIgSW5kZXhSb3V0ZSA9IHJvdXRlci5JbmRleFJvdXRlO1xuXG4vLyBSZWZlcmVuY2UgdGhlIGhpZ2gtbGV2ZWwgY29tcG9uZW50c1xuLy8gdmFyIE1haW4gPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9NYWluXCIpO1xuLy8gdmFyIENoaWxkMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL2NoaWxkcmVuL0NoaWxkMVwiKTtcbi8vIHZhciBDaGlsZDIgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9jaGlsZHJlbi9DaGlsZDJcIik7XG4vLyB2YXIgR3JhbmRDaGlsZDEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9jaGlsZHJlbi9ncmFuZGNoaWxkcmVuL0dyYW5kQ2hpbGQxXCIpO1xuLy8gdmFyIEdyYW5kQ2hpbGQyID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHMvY2hpbGRyZW4vZ3JhbmRjaGlsZHJlbi9HcmFuZENoaWxkMlwiKTtcblxuLy8gRXhwb3J0IHRoZSBSb3V0ZXNcbi8vbW9kdWxlLmV4cG9ydHMgPSAoXG5cbiAgLy8gVGhlIGhpZ2ggbGV2ZWwgY29tcG9uZW50IGlzIHRoZSBSb3V0ZXIgY29tcG9uZW50XG4gIC8vPFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XG5cbiAgICAvLzxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0+XG5cbiAgICAgIC8vey8qIElmIHVzZXIgc2VsZWN0cyBDaGlsZDEgdGhlbiBzaG93IHRoZSBhcHByb3ByaWF0ZSBjb21wb25lbnQqL31cbiAgICAgIC8vPFJvdXRlIHBhdGg9XCJDaGlsZDFcIiBjb21wb25lbnQ9e0NoaWxkMX0gPlxuXG4gICAgICAgIC8vey8qIENoaWxkMSBoYXMgaXRzIG93biBHcmFuZGNoaWxkcmVuIG9wdGlvbnMgKi99XG4gICAgICAgIC8vPFJvdXRlIHBhdGg9XCJHcmFuZENoaWxkMVwiIGNvbXBvbmVudD17R3JhbmRDaGlsZDF9IC8+XG4gICAgICAgIC8vPFJvdXRlIHBhdGg9XCJHcmFuZENoaWxkMlwiIGNvbXBvbmVudD17R3JhbmRDaGlsZDJ9IC8+XG5cbiAgICAgICAvLyA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0dyYW5kQ2hpbGQxfSAvPlxuXG4gICAgIC8vIDwvUm91dGU+XG5cbiAgICAgIC8vey8qIElmIHVzZXIgc2VsZWN0cyBDaGlsZDIgdGhlbiBzaG93IHRoZSBhcHByb3ByaWF0ZSBjb21wb25lbnQqL31cbiAgICAgLy8gPFJvdXRlIHBhdGg9XCJDaGlsZDJcIiBjb21wb25lbnQ9e0NoaWxkMn0gLz5cblxuICAgICAgLy97LyogSWYgdXNlciBzZWxlY3RzIGFueSBvdGhlciBwYXRoLi4uIHdlIGdldCB0aGUgSG9tZSBSb3V0ZSAqL31cbiAgICAgIC8vPEluZGV4Um91dGUgY29tcG9uZW50PXtDaGlsZDF9IC8+XG5cbiAgICAvLzwvUm91dGU+XG4gLy8gPC9Sb3V0ZXI+XG4vLyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29uZmlnL3JvdXRlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);