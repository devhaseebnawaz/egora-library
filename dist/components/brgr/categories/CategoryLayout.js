"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CategoryLayout;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function CategoryLayout(_ref) {
  var banner = _ref.banner,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_material.Box, null, children);
}