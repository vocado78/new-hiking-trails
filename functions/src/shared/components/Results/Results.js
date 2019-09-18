"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles.css"));

var _helpers = require("../../utils/helpers");

var _Filter = _interopRequireDefault(require("./Filter/Filter"));

var _List = _interopRequireDefault(require("./List/List"));

var _PageTitle = _interopRequireDefault(require("../PageTitle/PageTitle"));

var _content = _interopRequireDefault(require("../../utils/content"));

var _TrailContext = require("../../../client/TrailStore/TrailContext");

var _NotFound = _interopRequireDefault(require("../NotFound/NotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Results =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Results, _React$Component);

  function Results(props) {
    var _this;

    _classCallCheck(this, Results);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Results).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSelects", function (event) {
      var keys = Object.keys(_this.state.selections);
      var inputName = (0, _helpers.capitalize)(event.target.name);
      var key = keys.filter(function (k) {
        return k === "selected".concat(inputName);
      });
      var selections = _this.state.selections;

      if (key[0] === 'selectedLevel') {
        _this.handleLevelSelect(event);
      } else {
        _this.setState({
          selections: _objectSpread({}, selections, _defineProperty({}, key, event.target.value))
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleLevelSelect", function (event) {
      var selectedLevel = _this.state.selections.selectedLevel;
      var newLevel = event.target.value;
      var newSelectedLevel;

      if (selectedLevel.includes(newLevel)) {
        newSelectedLevel = selectedLevel.filter(function (level) {
          return level !== newLevel;
        });
      } else {
        newSelectedLevel = [].concat(_toConsumableArray(selectedLevel), [newLevel]);
      }

      _this.setState(function (prevState) {
        return {
          selections: _objectSpread({}, prevState.selections, {
            selectedLevel: newSelectedLevel
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var region = window.location.pathname.split('/').pop();
      var trails = (0, _helpers.showTrails)(_this.context, region);
      var provinces = (0, _helpers.showProvinces)(region);
      var services = _helpers.filterOptions.services,
          duration = _helpers.filterOptions.duration,
          level = _helpers.filterOptions.level,
          comfort = _helpers.filterOptions.comfort;

      _this.setState({
        results: trails,
        name: region,
        options: {
          provinces: provinces,
          services: services,
          duration: duration,
          level: level,
          comfort: comfort
        },
        selections: {
          selectedProvince: '',
          selectedService: '',
          selectedDay: '',
          selectedLevel: [],
          selectedComfort: ''
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateData", function () {
      var region = window.location.pathname.split('/').pop();
      var trails = (0, _helpers.showTrails)(_this.context, region);
      var provinces = (0, _helpers.showProvinces)(region);

      _this.setState(function (prevState) {
        return {
          results: trails,
          name: region,
          options: _objectSpread({}, prevState.options, {
            provinces: provinces
          })
        };
      });
    });

    var _services = _helpers.filterOptions.services,
        _duration = _helpers.filterOptions.duration,
        _level = _helpers.filterOptions.level,
        _comfort = _helpers.filterOptions.comfort; // eslint-disable-next-line prefer-destructuring

    var _region = _this.props.match.params.region; // eslint-disable-next-line no-underscore-dangle

    var _trails = __isBrowser__ ? (0, _helpers.showTrails)(window.__INITIAL_DATA__, _region) : (0, _helpers.showTrails)(_this.props.staticContext.data, _region);

    var _provinces = (0, _helpers.showProvinces)(_region);

    _this.state = {
      results: _trails || [],
      name: _region || '',
      options: {
        provinces: _provinces,
        services: _services,
        duration: _duration,
        level: _level,
        comfort: _comfort
      },
      selections: {
        selectedProvince: '',
        selectedService: '',
        selectedDay: '',
        selectedLevel: [],
        selectedComfort: ''
      }
    };
    return _this;
  }

  _createClass(Results, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.results) {
        this.updateData();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.match.params.region !== this.props.match.params.region) {
        this.updateData();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          results = _this$state.results,
          name = _this$state.name,
          options = _this$state.options,
          selections = _this$state.selections;

      if (!results.length) {
        return _react.default.createElement(_NotFound.default, null);
      }

      var region = (0, _helpers.unSanitize)(name);
      var title = _content.default.results.title;
      return _react.default.createElement("div", {
        className: _styles.default.results
      }, _react.default.createElement(_PageTitle.default, {
        title: "".concat(title, " ").concat(region),
        page: "Results"
      }), _react.default.createElement("div", {
        className: _styles.default.container
      }, _react.default.createElement(_Filter.default, {
        region: region,
        options: options,
        selections: selections,
        onSelect: this.handleSelects,
        handleClick: this.handleClick
      }), _react.default.createElement(_List.default, {
        results: results,
        selections: selections
      })));
    }
  }]);

  return Results;
}(_react.default.Component);

Results.contextType = _TrailContext.TrailContext;
var _default = Results;
exports.default = _default;