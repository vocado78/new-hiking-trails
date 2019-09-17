"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = _interopRequireDefault(require("../../../../public/styles.css"));

var _Navbar = _interopRequireDefault(require("../Navbar/Navbar"));

var _Home = _interopRequireDefault(require("../Home/Home"));

var _About = _interopRequireDefault(require("../About/About"));

var _Contact = _interopRequireDefault(require("../Contact/Contact"));

var _Footer = _interopRequireDefault(require("../Footer/Footer"));

var _Results = _interopRequireDefault(require("../Results/Results"));

var _TrailDetail = _interopRequireDefault(require("../TrailDetail/TrailDetail"));

var _NotFound = _interopRequireDefault(require("../NotFound/NotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react.default.createElement("div", {
    className: _styles.default.app
  }, _react.default.createElement(_Navbar.default, null), _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: _Home.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/about",
    component: _About.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/contact",
    component: _Contact.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/results/:region",
    component: _Results.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/results/trail-details/:id",
    component: _TrailDetail.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    component: _NotFound.default
  })), _react.default.createElement(_Footer.default, null));
}