"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import { Icon } from "@iconify/react";
// import closeIcon from "@iconify-icons/mdi/close";
// import cartEmpty from "@iconify-icons/mdi/bag-personal-outline";

var CartDrawer = function CartDrawer(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement(_material.Drawer, {
    anchor: "right",
    open: open,
    onClose: onClose,
    PaperProps: {
      style: {
        width: "100%",
        maxWidth: 380,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 32,
        paddingBottom: 32,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h4",
    fontWeight: "bold",
    gutterBottom: true
  }, "Your Cart is Empty"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    align: "center",
    color: "text.secondary",
    style: {
      marginBottom: 24
    }
  }, "Looks like you haven\u2019t added anything to your cart yet. Start exploring and shop your favorite items!"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: onClose,
    style: {
      textTransform: "none",
      borderRadius: 16
    }
  }, "Browse Product"));
};
var _default = exports["default"] = CartDrawer;