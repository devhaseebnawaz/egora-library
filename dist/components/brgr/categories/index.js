"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AllCategoriesPage;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _categories = require("../data/categories");
var _Banner = _interopRequireDefault(require("./Banner"));
var _CategoryLayout = _interopRequireDefault(require("./CategoryLayout"));
var _ItemCard = _interopRequireDefault(require("./ItemCard"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function AllCategoriesPage(_ref) {
  var categories = _ref.categories;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, categories.map(function (category) {
    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      key: category.id,
      style: {
        margin: "48px 0px"
      }
    }, /*#__PURE__*/_react["default"].createElement(_CategoryLayout["default"]
    // banner={<Banner img={category.bannerImg} />}
    , null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "h3",
      style: {
        marginBottom: "16px"
      }
    }, category.title), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
      container: true,
      spacing: 2
    }, category.items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        item: true,
        xs: 12,
        sm: 6,
        md: 3,
        key: item.id
      }, /*#__PURE__*/_react["default"].createElement(_ItemCard["default"], {
        item: item
      }));
    }))));
  }));
}