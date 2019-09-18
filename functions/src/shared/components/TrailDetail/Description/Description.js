"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Description;

var _react = _interopRequireDefault(require("react"));

var _types = require("../../../utils/types");

var _styles = _interopRequireDefault(require("./styles.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Description(_ref) {
  var access = _ref.access,
      complete = _ref.complete,
      description = _ref.description,
      landscape = _ref.landscape,
      moreInfo = _ref.moreInfo;
  return _react.default.createElement("div", {
    className: _styles.default.description
  }, _react.default.createElement("h3", null, "Description"), _react.default.createElement("p", null, description), _react.default.createElement("p", null, "Landscape: ".concat(landscape)), _react.default.createElement("p", null, "Access the trail from: ".concat(access)), _react.default.createElement("p", null, complete), _react.default.createElement("p", null, "For more information, please visit the", _react.default.createElement("a", {
    href: moreInfo
  }, " trail website"), "."));
}

Description.propTypes = _types.descriptionType.isRequired;