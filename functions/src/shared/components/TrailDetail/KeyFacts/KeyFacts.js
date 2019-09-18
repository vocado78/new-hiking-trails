"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = KeyFacts;

var _react = _interopRequireDefault(require("react"));

var _types = require("../../../utils/types");

var _styles = _interopRequireDefault(require("./styles.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function KeyFacts(_ref) {
  var connect = _ref.connect,
      distance = _ref.distance,
      duration = _ref.duration,
      finish = _ref.finish,
      level = _ref.level,
      province = _ref.province,
      stageDistances = _ref.stageDistances,
      stages = _ref.stages,
      start = _ref.start,
      comfort = _ref.comfort;
  var keyFacts = [{
    title: 'Province',
    data: province
  }, {
    title: 'Start',
    data: start
  }, {
    title: 'Finish',
    data: finish
  }, {
    title: 'Total distance',
    data: distance
  }, {
    title: 'Time needed',
    data: duration.map(function (option) {
      return "".concat(option, " ");
    })
  }, {
    title: 'Level of difficulty',
    data: level
  }, {
    title: 'Comfort',
    data: comfort.map(function (option) {
      return "".concat(option, " ");
    })
  }, {
    title: 'Major connecting trails',
    data: connect
  }, {
    title: 'Stage distances',
    data: stageDistances
  }, {
    title: 'Number of stages',
    data: stages
  }];
  return _react.default.createElement("div", {
    className: _styles.default.keyFacts
  }, _react.default.createElement("h3", null, "Key Facts"), _react.default.createElement("ul", null, keyFacts.map(function (fact) {
    return _react.default.createElement("li", {
      key: fact.title
    }, _react.default.createElement("span", null, fact.title), _react.default.createElement("br", null), fact.data);
  })));
}

KeyFacts.propTypes = _types.keyFactsType.isRequired;