"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = About;

var _react = _interopRequireDefault(require("react"));

var _PageTitle = _interopRequireDefault(require("../PageTitle/PageTitle"));

var _styles = _interopRequireDefault(require("./styles.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function About() {
  return _react.default.createElement("div", {
    className: _styles.default.about
  }, _react.default.createElement(_PageTitle.default, {
    title: "About this Website",
    page: "About"
  }), _react.default.createElement("p", null, "Some text goes here."));
}