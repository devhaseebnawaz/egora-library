"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ItemCard;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _ItemDetailModal = _interopRequireDefault(require("./ItemDetailModal"));
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
  var _useState3 = (0, _react.useState)('5'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedQty = _useState4[0],
    setSelectedQty = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    instructions = _useState6[0],
    setInstructions = _useState6[1];
  var handleOpen = function handleOpen() {
    return setOpen(true);
  };
  var handleClose = function handleClose() {
    return setOpen(false);
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Card, {
    style: {
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      padding: '0'
    },
    onClick: handleOpen
  }, /*#__PURE__*/_react["default"].createElement(_material.CardMedia, {
    component: "img",
    image: item.img,
    alt: item.name,
    style: {
      height: '250px',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.CardContent, {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h6",
    style: {
      fontWeight: 'bold'
    }
  }, item.name), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1",
    style: {
      color: '#555',
      marginBottom: '16px'
    }
  }, item.type), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      marginBottom: '16px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    disableRipple: true,
    style: {
      backgroundColor: '#f4e3d3',
      color: '#000',
      padding: '4px 16px',
      fontWeight: 'bold',
      borderRadius: '12px',
      textTransform: 'none',
      boxShadow: 'none'
    }
  }, "Rs. ", item.price)), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    style: {
      backgroundColor: '#121212',
      color: '#fff',
      borderRadius: '20px',
      padding: '8px 32px',
      fontWeight: 'bold',
      textTransform: 'none'
    }
  }, "Add to Cart"))), /*#__PURE__*/_react["default"].createElement(_ItemDetailModal["default"], {
    open: open,
    onClose: handleClose,
    item: item,
    selectedQty: selectedQty,
    setSelectedQty: setSelectedQty,
    instructions: instructions,
    setInstructions: setInstructions
  }));
}