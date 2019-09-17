"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trailDetailType = exports.keyFactsType = exports.descriptionType = exports.listType = exports.listItemDataType = exports.filterType = exports.provinceSelectType = exports.checkOrRadioButtonType = exports.pageTitleType = exports.buttonType = void 0;

var _propTypes = require("prop-types");

var buttonType = {
  path: _propTypes.string,
  searchString: _propTypes.string,
  label: _propTypes.string.isRequired,
  handleClick: _propTypes.func
};
exports.buttonType = buttonType;
var pageTitleType = {
  title: _propTypes.string.isRequired,
  page: _propTypes.string.isRequired
};
exports.pageTitleType = pageTitleType;
var checkOrRadioButtonType = {
  handleChange: _propTypes.func.isRequired,
  options: (0, _propTypes.arrayOf)(_propTypes.string).isRequired,
  selectedOption: (0, _propTypes.oneOfType)([_propTypes.string, (0, _propTypes.arrayOf)(_propTypes.string)]).isRequired,
  name: _propTypes.string.isRequired,
  title: _propTypes.string.isRequired,
  type: _propTypes.string.isRequired
};
exports.checkOrRadioButtonType = checkOrRadioButtonType;
var provinceSelectType = {
  handleChange: _propTypes.func.isRequired,
  options: (0, _propTypes.arrayOf)(_propTypes.string).isRequired,
  placeholder: _propTypes.string.isRequired,
  selectedOption: (0, _propTypes.oneOfType)([_propTypes.string, (0, _propTypes.arrayOf)(_propTypes.string)]).isRequired,
  title: _propTypes.string.isRequired
};
exports.provinceSelectType = provinceSelectType;
var filterType = {
  region: _propTypes.string.isRequired,
  options: (0, _propTypes.objectOf)((0, _propTypes.arrayOf)(_propTypes.string)).isRequired,
  selections: (0, _propTypes.shape)({
    selectedProvince: _propTypes.string,
    selectedComfort: _propTypes.string,
    selectedDay: _propTypes.string,
    selectedLevel: (0, _propTypes.arrayOf)(_propTypes.string),
    selectedService: _propTypes.string
  }).isRequired,
  onSelect: _propTypes.func.isRequired,
  handleClick: _propTypes.func.isRequired
};
exports.filterType = filterType;
var listItemDataType = (0, _propTypes.shape)({
  name: _propTypes.string,
  region: _propTypes.string,
  province: _propTypes.string,
  start: _propTypes.string,
  finish: _propTypes.string,
  startLat: _propTypes.number,
  startLon: _propTypes.number,
  middleLat: _propTypes.number,
  middleLon: _propTypes.number,
  finLat: _propTypes.number,
  finLon: _propTypes.number,
  distance: _propTypes.string,
  duration: (0, _propTypes.arrayOf)(_propTypes.string),
  complete: _propTypes.string,
  level: _propTypes.string,
  comfort: (0, _propTypes.arrayOf)(_propTypes.string),
  title: _propTypes.string,
  description: _propTypes.string,
  landscape: _propTypes.string,
  connect: _propTypes.string,
  stageDistances: _propTypes.string,
  services: _propTypes.string,
  stages: _propTypes.number,
  access: _propTypes.string,
  moreInfo: _propTypes.string
});
exports.listItemDataType = listItemDataType;
var listType = {
  results: (0, _propTypes.arrayOf)(listItemDataType),
  selections: filterType.selections
};
exports.listType = listType;
var descriptionType = {
  access: _propTypes.string.isRequired,
  complete: _propTypes.string.isRequired,
  description: _propTypes.string.isRequired,
  landscape: _propTypes.string.isRequired,
  moreInfo: _propTypes.string.isRequired
};
exports.descriptionType = descriptionType;
var keyFactsType = {
  connect: _propTypes.string.isRequired,
  distance: _propTypes.string.isRequired,
  duration: (0, _propTypes.arrayOf)(_propTypes.string).isRequired,
  finish: _propTypes.string.isRequired,
  level: _propTypes.string.isRequired,
  province: _propTypes.string.isRequired,
  stageDistances: _propTypes.string.isRequired,
  stages: _propTypes.number.isRequired,
  start: _propTypes.string.isRequired,
  comfort: (0, _propTypes.arrayOf)(_propTypes.string).isRequired
};
exports.keyFactsType = keyFactsType;
var trailDetailType = {
  location: (0, _propTypes.shape)({
    state: listItemDataType
  })
};
exports.trailDetailType = trailDetailType;