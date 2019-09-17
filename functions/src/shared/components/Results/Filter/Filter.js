"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Filter;

var _react = _interopRequireDefault(require("react"));

var _types = require("../../../utils/types");

var _styles = _interopRequireDefault(require("../../../../../public/styles.css"));

var _CheckOrRadionButton = _interopRequireDefault(require("./CheckOrRadioButton/CheckOrRadionButton"));

var _ProvinceSelect = _interopRequireDefault(require("./ProvinceSelect/ProvinceSelect"));

var _Button = _interopRequireDefault(require("../../Button/Button"));

var _content = _interopRequireDefault(require("../../../utils/content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Filter(_ref) {
  var region = _ref.region,
      options = _ref.options,
      selections = _ref.selections,
      handleClick = _ref.handleClick,
      onSelect = _ref.onSelect;
  var provinces = options.provinces,
      services = options.services,
      duration = options.duration,
      level = options.level,
      comfort = options.comfort;
  var selectedProvince = selections.selectedProvince,
      selectedService = selections.selectedService,
      selectedDay = selections.selectedDay,
      selectedLevel = selections.selectedLevel,
      selectedComfort = selections.selectedComfort;
  var _content$results$filt = _content.default.results.filter,
      title = _content$results$filt.title,
      subtitle = _content$results$filt.subtitle;
  return _react.default.createElement("form", {
    className: _styles.default.filter
  }, _react.default.createElement("p", null, title), _react.default.createElement("p", null, subtitle, ' ', region), _react.default.createElement(_ProvinceSelect.default, {
    title: "Province",
    placeholder: "Please select",
    handleChange: onSelect,
    options: provinces,
    selectedOption: selectedProvince
  }), _react.default.createElement(_CheckOrRadionButton.default, {
    title: "Number of days I want to hike",
    name: "day",
    type: "radio",
    handleChange: onSelect,
    options: duration,
    selectedOption: selectedDay
  }), _react.default.createElement(_CheckOrRadionButton.default, {
    title: "Level of Difficulty",
    name: "level",
    type: "checkbox",
    handleChange: onSelect,
    options: level,
    selectedOption: selectedLevel
  }), _react.default.createElement(_CheckOrRadionButton.default, {
    title: "Comfort",
    name: "comfort",
    type: "radio",
    handleChange: onSelect,
    options: comfort,
    selectedOption: selectedComfort
  }), _react.default.createElement(_CheckOrRadionButton.default, {
    title: "Services availability",
    name: "service",
    type: "radio",
    handleChange: onSelect,
    options: services,
    selectedOption: selectedService
  }), _react.default.createElement(_Button.default, {
    label: "Clear All Filters",
    handleClick: handleClick
  }));
}

Filter.propTypes = _types.filterType;