"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles.css"));

var _PageTitle = _interopRequireDefault(require("../PageTitle/PageTitle"));

var _Button = _interopRequireDefault(require("../Button/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react.default.createElement("div", {
    className: _styles.default.notFound
  }, _react.default.createElement(_PageTitle.default, {
    title: "Sorry, the page you're looking for doesn't exist",
    page: "Not Found"
  }), _react.default.createElement(_Button.default, {
    path: "/ssr",
    label: "Go to Home"
  }));
}