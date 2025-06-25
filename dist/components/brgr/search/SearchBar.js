"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SearchBar;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _iconify = _interopRequireDefault(require("../iconify"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function SearchBar(_ref) {
  var query = _ref.query,
    setQuery = _ref.setQuery;
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    // You can trigger a search action here if needed (e.g. analytics or navigation)
  };
  return /*#__PURE__*/_react["default"].createElement(_material.Paper, {
    component: "form",
    onSubmit: handleSubmit,
    sx: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid black',
      borderRadius: '999px',
      padding: '6px 12px',
      width: '100%',
      boxShadow: 'none',
      mx: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.InputBase, {
    sx: {
      ml: 2,
      flex: 1
    },
    placeholder: "Search for item by title...",
    inputProps: {
      'aria-label': 'search items'
    },
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    type: "submit",
    sx: {
      backgroundColor: 'black',
      color: 'white',
      p: 1,
      '&:hover': {
        backgroundColor: '#333'
      }
    },
    "aria-label": "search"
  }, /*#__PURE__*/_react["default"].createElement(_iconify["default"], {
    icon: "eva:arrow-forward-fill",
    width: 14,
    height: 14,
    color: "#eac7aa"
  })));
}
;