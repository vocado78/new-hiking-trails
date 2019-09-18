"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _types = require("../../utils/types");

var _map = _interopRequireDefault(require("./Map/map"));

var _PageTitle = _interopRequireDefault(require("../PageTitle/PageTitle"));

var _Description = _interopRequireDefault(require("./Description/Description"));

var _KeyFacts = _interopRequireDefault(require("./KeyFacts/KeyFacts"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _styles = _interopRequireDefault(require("./styles.css"));

var _TrailContext = require("../../../client/TrailStore/TrailContext");

var _NotFound = _interopRequireDefault(require("../NotFound/NotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TrailDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(TrailDetail, _Component);

  function TrailDetail(props) {
    var _this;

    _classCallCheck(this, TrailDetail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TrailDetail).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      event.preventDefault();

      _this.props.history.goBack();
    });

    _defineProperty(_assertThisInitialized(_this), "updateData", function () {
      var trail = _this.context[_this.props.match.params.id];

      _this.setState({
        trailData: trail
      });
    });

    var trailName = _this.props.match.params.id; // eslint-disable-next-line no-underscore-dangle

    var trailData = __isBrowser__ ? window.__INITIAL_DATA__[trailName] : _this.props.staticContext.data[trailName];
    _this.state = {
      trailData: trailData
    };
    return _this;
  }

  _createClass(TrailDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.trailData) {
        this.updateData();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.updateData();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.trailData) {
        return _react.default.createElement(_NotFound.default, null);
      }

      var _this$state$trailData = this.state.trailData,
          name = _this$state$trailData.name,
          access = _this$state$trailData.access,
          complete = _this$state$trailData.complete,
          connect = _this$state$trailData.connect,
          description = _this$state$trailData.description,
          distance = _this$state$trailData.distance,
          duration = _this$state$trailData.duration,
          finish = _this$state$trailData.finish,
          landscape = _this$state$trailData.landscape,
          level = _this$state$trailData.level,
          moreInfo = _this$state$trailData.moreInfo,
          province = _this$state$trailData.province,
          stageDistances = _this$state$trailData.stageDistances,
          stages = _this$state$trailData.stages,
          start = _this$state$trailData.start,
          comfort = _this$state$trailData.comfort,
          startLat = _this$state$trailData.startLat,
          startLon = _this$state$trailData.startLon,
          finLat = _this$state$trailData.finLat,
          finLon = _this$state$trailData.finLon,
          middleLat = _this$state$trailData.middleLat,
          middleLon = _this$state$trailData.middleLon;
      return _react.default.createElement("div", {
        className: _styles.default.detailContainer
      }, _react.default.createElement(_PageTitle.default, {
        page: "Trail Details",
        title: name
      }), _react.default.createElement("div", {
        className: _styles.default.detailTextMapContainer
      }, _react.default.createElement(_Description.default, {
        access: access,
        complete: complete,
        description: description,
        landscape: landscape,
        moreInfo: moreInfo
      }), _react.default.createElement(_map.default, {
        startLat: startLat,
        startLon: startLon,
        finLat: finLat,
        finLon: finLon,
        midLat: middleLat,
        midLon: middleLon
      })), _react.default.createElement(_KeyFacts.default, {
        connect: connect,
        distance: distance,
        duration: duration,
        finish: finish,
        level: level,
        province: province,
        stageDistances: stageDistances,
        stages: stages,
        start: start,
        comfort: comfort
      }), _react.default.createElement(_Button.default, {
        label: "<- Back to Results",
        handleClick: this.handleClick
      }));
    }
  }]);

  return TrailDetail;
}(_react.Component);

exports.default = TrailDetail;

_defineProperty(TrailDetail, "propTypes", _types.trailDetailType.isRequired);

TrailDetail.contextType = _TrailContext.TrailContext;