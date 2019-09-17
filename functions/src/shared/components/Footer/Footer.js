"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = _interopRequireDefault(require("react"));

var _content = _interopRequireDefault(require("../../utils/content"));

var _styles = _interopRequireDefault(require("../../../../public/styles.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer() {
  var text = _content.default.footer.text;
  return _react.default.createElement("footer", {
    className: _styles.default.footer
  }, _react.default.createElement("div", null, text));
}