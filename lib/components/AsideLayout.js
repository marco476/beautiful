"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ChevronLeft = _interopRequireDefault(require("@material-ui/icons/ChevronLeft"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AsideLayout =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AsideLayout, _PureComponent);

  function AsideLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AsideLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AsideLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: _this.props.isOpen
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpenAside", function () {
      return _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseAside", function () {
      return _this.setState({
        isOpen: false
      });
    });

    return _this;
  }

  _createClass(AsideLayout, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var isOpen = this.props.isOpen;

      if (isOpen !== prevProps.isOpen) {
        this.setState({
          isOpen: isOpen
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          aside = _this$props.aside,
          collapsible = _this$props.collapsible,
          children = _this$props.children,
          className = _this$props.className;
      var isOpen = this.state.isOpen;
      var childrenBreakpoints = {
        xs: 12
      };

      if (isOpen) {
        childrenBreakpoints = _objectSpread({}, childrenBreakpoints, {
          md: 8,
          lg: 9,
          xl: 10
        });
      }

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Grid["default"], {
        spacing: 3,
        container: true,
        className: className
      }, isOpen && _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 12,
        md: 4,
        lg: 3,
        xl: 2
      }, _react["default"].createElement(_Grid["default"], {
        container: true,
        direction: "column"
      }, collapsible && _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 12
      }, _react["default"].createElement(_Grid["default"], {
        container: true,
        justify: "flex-end"
      }, _react["default"].createElement(_Grid["default"], {
        item: true
      }, _react["default"].createElement(_IconButton["default"], {
        onClick: this.handleCloseAside
      }, _react["default"].createElement(_ChevronLeft["default"], null))))), _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 12
      }, aside))), _react["default"].createElement(_Grid["default"], _extends({
        item: true
      }, childrenBreakpoints), _react["default"].createElement(_Grid["default"], {
        container: true,
        direction: "column"
      }, !isOpen && collapsible && _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 12
      }, _react["default"].createElement(_IconButton["default"], {
        onClick: this.handleOpenAside
      }, _react["default"].createElement(_Menu["default"], null))), _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 12
      }, children)))));
    }
  }]);

  return AsideLayout;
}(_react.PureComponent);

AsideLayout.propTypes = {
  className: _propTypes.string,
  aside: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.string]),
  children: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.string]),
  isOpen: _propTypes.bool,
  collapsible: _propTypes.bool
};
AsideLayout.defaultProps = {
  isOpen: true,
  collapsible: true
};
var _default = AsideLayout;
exports["default"] = _default;