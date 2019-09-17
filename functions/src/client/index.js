"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("../shared/components/App/App"));

var _TrailStore = _interopRequireDefault(require("./TrailStore/TrailStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = function Wrap() {
  return _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_TrailStore.default, null, _react.default.createElement(_App.default, null)));
};

_reactDom.default.hydrate(_react.default.createElement(Wrap, null), document.getElementById('app'));