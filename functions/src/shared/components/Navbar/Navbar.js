"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = _interopRequireDefault(require("./styles.css"));

var _content = _interopRequireDefault(require("../../utils/content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navbar() {
  var title = _content.default.navbar.title;
  return _react.default.createElement("div", {
    className: _styles.default.navbar
  }, _react.default.createElement("h1", null, title), _react.default.createElement("ul", {
    className: _styles.default.navList
  }, _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
    exact: true,
    activeStyle: {
      background: '#ffffff',
      color: '#ffc814'
    },
    to: "/ssr"
  }, "Home")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
    activeStyle: {
      background: '#ffffff',
      color: '#ffc814'
    },
    to: "/ssr/about"
  }, "About")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
    activeStyle: {
      background: '#ffffff',
      color: '#ffc814'
    },
    to: "/ssr/contact"
  }, "Contact"))));
}