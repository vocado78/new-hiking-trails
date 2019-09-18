"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchTrails;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchTrails() {
  var req = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // eslint-disable-next-line no-undef
  var root = __isBrowser__ ? "".concat(window.location.protocol, "//").concat(window.location.host) : 'https://us-central1-hiking-sweden.cloudfunctions.net';
  console.log('----------------from fetch trails-------------', root, __isBrowser__);
  return (0, _isomorphicFetch.default)("".concat(root, "/ssr/api/trails")).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error('There was a network failure reading from the db.');
  }).then(function (trailData) {
    console.log('-----------------trailData from .then return-------------', trailData);
    return trailData;
  }).catch(function (error) {
    console.warn("An error occurred fetching trail data: ".concat(error.message));
    return null;
  });
}