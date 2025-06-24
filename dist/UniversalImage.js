"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UniversalImage;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var NextImage;
try {
  NextImage = require('next/image')["default"];
} catch (e) {
  NextImage = null;
}
function UniversalImage(_ref) {
  var src = _ref.src,
    _ref$alt = _ref.alt,
    alt = _ref$alt === void 0 ? "image" : _ref$alt,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? '100%' : _ref$height,
    _ref$objectFit = _ref.objectFit,
    objectFit = _ref$objectFit === void 0 ? 'contain' : _ref$objectFit,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  var commonStyle = _objectSpread({
    width: width,
    height: height,
    objectFit: objectFit
  }, style);
  if (NextImage) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        position: 'relative',
        width: width,
        height: height
      }
    }, /*#__PURE__*/_react["default"].createElement(NextImage, {
      src: src,
      alt: alt,
      layout: "fill",
      objectFit: objectFit
    }));
  }
  return /*#__PURE__*/_react["default"].createElement("img", {
    src: src,
    alt: alt,
    style: commonStyle
  });
}