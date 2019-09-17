"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("../../../../public/styles.css"));

var _RegionSelect = _interopRequireDefault(require("./RegionSelect/RegionSelect"));

var _RegionMap = _interopRequireDefault(require("./RegionMap/RegionMap"));

var _BannerText = _interopRequireDefault(require("./BannerText/BannerText"));

var _Welcome = _interopRequireDefault(require("./Welcome/Welcome"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: _styles.default.banner
  }, _react.default.createElement("div", {
    className: _styles.default.bannerContentContainer
  }, _react.default.createElement("div", {
    className: _styles.default.bannerText
  }, _react.default.createElement(_BannerText.default, null), _react.default.createElement(_RegionSelect.default, null)), _react.default.createElement(_RegionMap.default, null))), _react.default.createElement(_Welcome.default, null));
}