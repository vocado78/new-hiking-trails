"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageTitle;

var _react = _interopRequireDefault(require("react"));

var _types = require("../../utils/types");

var _styles = _interopRequireDefault(require("./styles.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PageTitle(_ref) {
  var title = _ref.title,
      page = _ref.page;
  return _react.default.createElement("h2", {
    className: _styles.default.pageTitle
  }, _react.default.createElement("span", null, page), _react.default.createElement("br", null), title);
}

PageTitle.propTypes = _types.pageTitleType;