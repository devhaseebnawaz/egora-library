"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomNavbar;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _react2 = require("@iconify/react");
var _mapMarker = _interopRequireDefault(require("@iconify-icons/mdi/map-marker"));
var _phone = _interopRequireDefault(require("@iconify-icons/mdi/phone"));
var _cart = _interopRequireDefault(require("@iconify-icons/mdi/cart"));
var _CartDrawer = _interopRequireDefault(require("./CartDrawer"));
var _UniversalImage = _interopRequireDefault(require("../../../UniversalImage"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import Image from 'next/image';
function CustomNavbar(_ref) {
  var prop = _ref.prop;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    cartOpen = _useState2[0],
    setCartOpen = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_material.AppBar, {
    position: "static",
    style: {
      backgroundColor: "#121212",
      boxShadow: "none",
      position: "relative",
      zIndex: 10,
      paddingLeft: "14px",
      paddingRight: "14px",
      paddingTop: "4px",
      paddingBottom: "4px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Toolbar, {
    style: {
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "24px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    icon: _mapMarker["default"],
    width: "20",
    height: "20",
    color: "#f6e6d6"
  }), /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    fontWeight: "bold",
    style: {
      color: "#f6e6d6"
    }
  }, "Change Location"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "caption",
    style: {
      color: "#f6e6d6"
    }
  }, prop.editable.address))), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    icon: _phone["default"],
    width: "20",
    height: "20",
    color: "#f6e6d6"
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    fontWeight: "bold",
    style: {
      color: "#f6e6d6"
    }
  }, prop.editable.phone))), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: function onClick() {
      return setCartOpen(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    icon: _cart["default"],
    width: 24,
    height: 24,
    color: "#f6e6d6"
  })), /*#__PURE__*/_react["default"].createElement(_CartDrawer["default"], {
    open: cartOpen,
    onClose: function onClose() {
      return setCartOpen(false);
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      position: "absolute",
      top: 2,
      right: 2,
      width: 18,
      height: 20,
      fontSize: "0.8rem",
      fontWeight: "bold",
      backgroundColor: "black",
      color: "white",
      borderRadius: "50%",
      border: "2px solid #f6e6d6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "0"))), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 100,
      height: 100,
      borderRadius: "50%",
      overflow: "hidden",
      backgroundColor: "#121212"
    }
  }, prop.editable.logoImage ? /*#__PURE__*/_react["default"].createElement(_UniversalImage["default"], {
    src: prop.editable.logoImage,
    alt: "BRGR Logo",
    layout: "fill",
    objectFit: "contain",
    onError: function onError() {
      return console.log("Image failed to load");
    },
    width: "100%",
    height: "100%"
  }) : /*#__PURE__*/_react["default"].createElement("div", null, "No logo found")));
}