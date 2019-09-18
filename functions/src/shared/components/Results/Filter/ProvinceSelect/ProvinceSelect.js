"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProvinceSelect;

var _react = _interopRequireDefault(require("react"));

var _types = require("../../../../utils/types");

var _styles = _interopRequireDefault(require("./styles.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProvinceSelect(_ref) {
  var handleChange = _ref.handleChange,
      options = _ref.options,
      placeholder = _ref.placeholder,
      selectedOption = _ref.selectedOption,
      title = _ref.title;
  return _react.default.createElement("div", {
    className: _styles.default.formRow
  }, _react.default.createElement("label", {
    htmlFor: title,
    className: _styles.default.labelTitle
  }, title), _react.default.createElement("select", {
    value: selectedOption,
    onChange: handleChange,
    name: title
  }, _react.default.createElement("option", {
    value: ""
  }, placeholder), options.map(function (province) {
    return _react.default.createElement("option", {
      key: province,
      value: province
    }, province);
  })));
}

ProvinceSelect.propTypes = _types.provinceSelectType;