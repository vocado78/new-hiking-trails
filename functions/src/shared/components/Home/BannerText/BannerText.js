"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BannerText;

var _react = _interopRequireDefault(require("react"));

var _content = _interopRequireDefault(require("../../../utils/content"));

var _styles = _interopRequireDefault(require("./styles.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BannerText() {
  var _content$home$banner = _content.default.home.banner,
      title = _content$home$banner.title,
      intro = _content$home$banner.intro;
  return _react.default.createElement("div", null, _react.default.createElement("h1", {
    className: _styles.default.title
  }, title), _react.default.createElement("p", {
    className: _styles.default.intro
  }, intro));
}