"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SearchableMenuSection;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _SearchBar = _interopRequireDefault(require("../search/SearchBar"));
var _PopularMenuSection = _interopRequireDefault(require("../PopularItemSections/PopularMenuSection"));
var _categories = _interopRequireDefault(require("../categories"));
var _categories2 = require("../data/categories");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function SearchableMenuSection(_ref) {
  var searchTerm = _ref.searchTerm,
    setSearchTerm = _ref.setSearchTerm;
  var lowercasedTerm = searchTerm.toLowerCase();
  var filteredPopularItems = _categories2.popularItems.filter(function (item) {
    return item.name.toLowerCase().includes(lowercasedTerm);
  });
  var filteredCategories = _categories2.categories.map(function (category) {
    var matchedItems = category.items.filter(function (item) {
      return item.name.toLowerCase().includes(lowercasedTerm);
    });
    return matchedItems.length ? _objectSpread(_objectSpread({}, category), {}, {
      items: matchedItems
    }) : null;
  }).filter(Boolean);
  var noResults = filteredPopularItems.length === 0 && filteredCategories.length === 0;
  return /*#__PURE__*/_react["default"].createElement(_material.Container, {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    mt: 4
  }, /*#__PURE__*/_react["default"].createElement(_SearchBar["default"], {
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm
  }), noResults ? /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h5",
    align: "center",
    mt: 6,
    color: "text.secondary"
  }, "No items found matching your search.") : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_PopularMenuSection["default"], {
    items: filteredPopularItems
  }), /*#__PURE__*/_react["default"].createElement(_categories["default"], {
    categories: filteredCategories
  }))));
}
;