"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ItemCard;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _ItemDetailModal = _interopRequireDefault(require("../categories/ItemDetailModal"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ItemCard(_ref) {
  var item = _ref.item;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)("5"),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedQty = _useState4[0],
    setSelectedQty = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    instructions = _useState6[0],
    setInstructions = _useState6[1];
  var handleOpen = function handleOpen() {
    return setOpen(true);
  };
  var handleClose = function handleClose() {
    return setOpen(false);
  };
  var fallbackImage = "https://brgr.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1743256920-smashsingle.jpeg%3Fq%3D10&w=640&q=75";
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Card, {
    style: {
      position: "relative",
      borderRadius: 24,
      overflow: "hidden",
      textAlign: "center",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      height: "100%"
    },
    onClick: handleOpen
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    component: "img",
    src: item !== null && item !== void 0 && item.photoURL ? "https://api.dev.egora.pk/v1/images/".concat(item.photoURL) : fallbackImage,
    alt: (item === null || item === void 0 ? void 0 : item.name) || "Menu Item",
    loading: "lazy",
    onError: function onError(e) {
      e.target.onerror = null;
      e.target.src = fallbackImage;
    },
    sx: {
      width: "100%",
      objectFit: "cover",
      aspectRatio: "1 / 1",
      height: {
        sm: "270px"
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1",
    style: {
      position: "absolute",
      top: 16,
      left: 16,
      zIndex: 2,
      fontWeight: "bold",
      color: "#fff",
      textShadow: "0 1px 3px rgba(0,0,0,0.6)"
    }
  }, item === null || item === void 0 ? void 0 : item.name), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      position: "absolute",
      bottom: 12,
      right: 12,
      backgroundColor: "#fff",
      padding: "4px 12px",
      borderRadius: 20,
      fontWeight: 600,
      fontSize: 14,
      boxShadow: "rgba(0, 0, 0, 0.14) 0px 1px 4px"
    }
  }, "Rs. ", item === null || item === void 0 ? void 0 : item.price)), /*#__PURE__*/_react["default"].createElement(_ItemDetailModal["default"], {
    open: open,
    onClose: handleClose,
    item: item,
    selectedQty: selectedQty,
    setSelectedQty: setSelectedQty,
    instructions: instructions,
    setInstructions: setInstructions
  }));
}
;