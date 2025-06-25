"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LocationModal;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  backgroundColor: "#fff",
  borderRadius: "16px",
  boxShadow: 24,
  padding: 0,
  overflow: "hidden"
};
function LocationModal(_ref) {
  var open = _ref.open,
    handleClose = _ref.handleClose;
  var _useState = (0, _react.useState)("delivery"),
    _useState2 = _slicedToArray(_useState, 2),
    orderType = _useState2[0],
    setOrderType = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_material.Modal, {
    open: open,
    onClose: handleClose
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: modalStyle
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      position: "absolute",
      top: 4,
      left: "50%",
      transform: "translateX(-50%)",
      width: 80,
      height: 80,
      borderRadius: "50%",
      backgroundColor: "black",
      zIndex: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/brgr/logo/logo.webp",
    alt: "BRGR",
    style: {
      width: "50px",
      height: "50px",
      objectFit: "contain"
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      flex: 1,
      padding: "32px",
      paddingTop: "48px",
      marginTop: "40px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h6",
    align: "center",
    style: {
      fontWeight: "bold",
      marginBottom: "16px",
      alignItems: "center"
    }
  }, "Select your order type"), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "24px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: "flex",
      backgroundColor: "#E0E0E0",
      borderRadius: "999px",
      padding: "4px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return setOrderType("delivery");
    },
    style: {
      borderRadius: "999px",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingTop: "8px",
      paddingBottom: "8px",
      fontWeight: "bold",
      fontSize: "0.75rem",
      backgroundColor: orderType === "delivery" ? "#121212" : "transparent",
      color: orderType === "delivery" ? "#f6e6d6" : "#333",
      boxShadow: "none"
    }
  }, "DELIVERY"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return setOrderType("pickup");
    },
    style: {
      borderRadius: "999px",
      paddingLeft: "24px",
      paddingRight: "24px",
      paddingTop: "8px",
      paddingBottom: "8px",
      fontWeight: "bold",
      fontSize: "0.75rem",
      backgroundColor: orderType === "pickup" ? "#121212" : "transparent",
      color: orderType === "pickup" ? "#f6e6d6" : "#333",
      boxShadow: "none"
    }
  }, "PICKUP"))), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    style: {
      marginBottom: "8px",
      textAlign: "center",
      fontWeight: "600"
    }
  }, "Please select your location"), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #ccc",
      borderRadius: "8px",
      paddingLeft: "16px",
      paddingRight: "16px",
      paddingTop: "12px",
      paddingBottom: "12px",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    fullWidth: true,
    placeholder: "Search Location",
    variant: "standard",
    InputProps: {
      disableUnderline: true,
      style: {
        color: "#555",
        fontSize: "0.95rem"
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    style: {
      marginLeft: "8px"
    }
  }, "\u2192")), /*#__PURE__*/_react["default"].createElement(_material.Divider, {
    style: {
      marginBottom: "16px"
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    style: {
      fontWeight: "bold",
      marginBottom: "4px"
    }
  }, "\uD83D\uDCCD Use Current Location"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "caption"
  }, "DHA Phase 5, Rehman Villas, Chung Khurad, Lahore, Lahore..."), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    style: {
      color: "blue",
      textAlign: "right",
      marginTop: "8px",
      marginBottom: "16px"
    }
  }, "change"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    fullWidth: true,
    style: {
      backgroundColor: "#000",
      color: "#fff",
      textTransform: "none",
      fontWeight: "bold",
      borderRadius: "8px",
      paddingTop: "12px",
      paddingBottom: "12px"
    }
  }, "Confirm Selection")))));
}