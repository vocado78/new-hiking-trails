"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Welcome;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles.css"));

var _content = _interopRequireDefault(require("../../../utils/content"));

var _Button = _interopRequireDefault(require("../../Button/Button"));

var _PageTitle = _interopRequireDefault(require("../../PageTitle/PageTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Welcome() {
  var _content$home$welcome = _content.default.home.welcome,
      title = _content$home$welcome.title,
      first = _content$home$welcome.first,
      second = _content$home$welcome.second;
  return _react.default.createElement("div", {
    className: _styles.default.welcome
  }, _react.default.createElement(_PageTitle.default, {
    title: title,
    page: "Home"
  }), _react.default.createElement("div", {
    className: _styles.default.welcomeText
  }, _react.default.createElement("p", null, first), _react.default.createElement("p", null, second), _react.default.createElement(_Button.default, {
    path: "/about",
    label: "Read More"
  })), _react.default.createElement("div", {
    className: _styles.default.welcomeImage
  }));
}