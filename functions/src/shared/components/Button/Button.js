"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _types = require("../../utils/types");

var _styles = _interopRequireDefault(require("./styles.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
function Button(_ref) {
  var path = _ref.path,
      searchString = _ref.searchString,
      label = _ref.label,
      handleClick = _ref.handleClick;
  var hasPath = path;

  if (hasPath) {
    return _react.default.createElement(_reactRouterDom.Link, {
      className: _styles.default.btnLink,
      to: {
        pathname: path,
        search: searchString
      }
    }, label);
  }

  return _react.default.createElement("button", {
    type: "button",
    className: _styles.default.btn,
    onClick: handleClick
  }, label);
}

Button.defaultProps = {
  searchString: '',
  path: '',
  handleClick: function handleClick() {}
};
Button.propTypes = _types.buttonType;