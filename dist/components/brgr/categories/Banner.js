"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Banner;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Banner(_ref) {
  var img = _ref.img;
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      height: 250,
      backgroundImage: "url(".concat(img, ")"),
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      borderRadius: '20px'
    }
  });
}