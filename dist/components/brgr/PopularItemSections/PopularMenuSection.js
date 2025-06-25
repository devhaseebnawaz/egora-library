"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PopularMenuSection;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _ItemCard = _interopRequireDefault(require("./ItemCard"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function PopularMenuSection(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    mb: 4,
    mt: 4
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h4",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: 1
  }, "Popular Items"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1",
    color: "text.secondary"
  }, "Most ordered right now")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 3
  }, items === null || items === void 0 ? void 0 : items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
      item: true,
      xs: 12,
      sm: 6,
      md: 3,
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_ItemCard["default"], {
      item: item
    }));
  })));
}
;