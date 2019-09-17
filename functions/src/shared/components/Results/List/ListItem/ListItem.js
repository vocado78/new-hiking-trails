"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListItem;

var _react = _interopRequireDefault(require("react"));

var _types = require("../../../../utils/types");

var _styles = _interopRequireDefault(require("../../../../../../public/styles.css"));

var _content = _interopRequireDefault(require("../../../../utils/content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListItem(_ref) {
  var data = _ref.data;
  // eslint-disable-next-line
  var name = data.name,
      distance = data.distance,
      title = data.title;
  var bullet1 = _content.default.results.listItem.bullet1;
  return _react.default.createElement("div", {
    className: _styles.default.listItem
  }, _react.default.createElement("span", null, "\u2663"), _react.default.createElement("h3", null, name), _react.default.createElement("p", null, bullet1, ' ', distance), _react.default.createElement("p", null, title));
}

ListItem.propTypes = {
  data: _types.listItemDataType.isRequired
};