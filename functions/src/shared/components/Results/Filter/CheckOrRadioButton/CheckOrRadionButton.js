"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CheckOrRadioButton;

var _react = _interopRequireDefault(require("react"));

var _types = require("../../../../utils/types");

var _styles = _interopRequireDefault(require("./styles.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckOrRadioButton(_ref) {
  var handleChange = _ref.handleChange,
      options = _ref.options,
      selectedOption = _ref.selectedOption,
      name = _ref.name,
      title = _ref.title,
      type = _ref.type;
  return _react.default.createElement("div", {
    className: _styles.default.formRow
  }, _react.default.createElement("label", {
    htmlFor: name,
    className: _styles.default.labelTitle
  }, title), options.map(function (option) {
    return _react.default.createElement("div", {
      key: option
    }, _react.default.createElement("input", {
      name: name,
      onChange: handleChange,
      value: option,
      checked: selectedOption.indexOf(option) > -1,
      type: type
    }), ' ', option);
  }));
}

CheckOrRadioButton.propTypes = _types.checkOrRadioButtonType;