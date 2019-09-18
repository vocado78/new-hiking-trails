"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _types = require("../../../utils/types");

var _styles = _interopRequireDefault(require("./styles.css"));

var _ListItem = _interopRequireDefault(require("./ListItem/ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function List(_ref) {
  var results = _ref.results,
      _ref$selections = _ref.selections,
      selectedProvince = _ref$selections.selectedProvince,
      selectedService = _ref$selections.selectedService,
      selectedDay = _ref$selections.selectedDay,
      selectedLevel = _ref$selections.selectedLevel,
      selectedComfort = _ref$selections.selectedComfort;
  var data = results;
  var listing = data;

  if (selectedProvince && selectedProvince.length >= 1) {
    listing = listing.filter(function (trail) {
      return trail.province === selectedProvince;
    });
  }

  if (selectedDay && selectedDay.length >= 1) {
    listing = listing.filter(function (trail) {
      return trail.duration.includes(selectedDay);
    });
  }

  if (selectedLevel && selectedLevel.length >= 1) {
    listing = listing.filter(function (trail) {
      return selectedLevel.includes(trail.level);
    });
  }

  if (selectedComfort && selectedComfort.length >= 1) {
    listing = listing.filter(function (trail) {
      return trail.comfort.includes(selectedComfort);
    });
  }

  if (selectedService && selectedService.length >= 1) {
    listing = listing.filter(function (trail) {
      return trail.services === selectedService;
    });
  }

  return _react.default.createElement("div", {
    className: _styles.default.list
  }, _react.default.createElement("ul", null, listing.filter(function (item, i, ar) {
    return ar.indexOf(item) === i;
  }).map(function (trail) {
    return _react.default.createElement(_reactRouterDom.Link, {
      to: {
        pathname: "/ssr/results/trail-details/".concat(trail.name.replace(' ', '').replace('ö', 'o').toLowerCase()),
        state: trail
      },
      key: trail.name
    }, _react.default.createElement("li", null, _react.default.createElement(_ListItem.default, {
      data: trail
    })));
  })));
}

List.propTypes = _types.listType.isRequired;