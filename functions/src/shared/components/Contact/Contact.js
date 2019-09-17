"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Contact;

var _react = _interopRequireDefault(require("react"));

var _PageTitle = _interopRequireDefault(require("../PageTitle/PageTitle"));

var _styles = _interopRequireDefault(require("../../../../public/styles.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Contact() {
  return _react.default.createElement("div", {
    className: _styles.default.contact
  }, _react.default.createElement(_PageTitle.default, {
    title: "Get in Touch",
    page: "Contact"
  }), _react.default.createElement("p", null, "Some text goes here."));
}