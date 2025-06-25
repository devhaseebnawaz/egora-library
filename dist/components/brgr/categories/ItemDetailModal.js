"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ItemDetailModal;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _Iconify = _interopRequireDefault(require("src/components/iconify/Iconify"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ItemDetailModal(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose,
    item = _ref.item,
    selectedQty = _ref.selectedQty,
    setSelectedQty = _ref.setSelectedQty,
    instructions = _ref.instructions,
    setInstructions = _ref.setInstructions;
  var price = selectedQty === '5' ? item === null || item === void 0 ? void 0 : item.price : (item === null || item === void 0 ? void 0 : item.price) * 2;
  var _React$useState = _react["default"].useState(1),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    quantity = _React$useState2[0],
    setQuantity = _React$useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_material.Dialog, {
    open: open,
    onClose: onClose,
    maxWidth: "lg",
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: 'flex',
      height: '90vh',
      backgroundColor: '#fff'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      width: '45%',
      backgroundColor: '#f4f4f4',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 32
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    component: "img",
    src: item.img || item.image,
    alt: item.name,
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      borderRadius: 8
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      width: '1px',
      backgroundColor: '#e0e0e0'
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      width: '54%',
      padding: 32,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 24
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h6",
    fontWeight: "bold"
  }, item.name), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: onClose,
    style: {
      backgroundColor: '#121212',
      color: '#fff',
      width: 36,
      height: 36
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.backgroundColor = '#000';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.backgroundColor = '#121212';
    }
  }, /*#__PURE__*/_react["default"].createElement(_Iconify["default"], {
    icon: "mdi:close",
    width: 20,
    height: 20
  })))), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h6",
    color: "text.secondary",
    gutterBottom: true
  }, "Rs. ", price), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    color: "gray",
    style: {
      marginBottom: 24
    }
  }, item.description || 'Crispy Golden Nuggets Made With Muscle Meat Served With Any 1 OF Our House Sauce.'), /*#__PURE__*/_react["default"].createElement(_material.RadioGroup, {
    value: selectedQty,
    onChange: function onChange(e) {
      return setSelectedQty(e.target.value);
    },
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
    value: "5",
    control: /*#__PURE__*/_react["default"].createElement(_material.Radio, null),
    label: "5 Pcs - Rs. ".concat(item === null || item === void 0 ? void 0 : item.price)
  }), /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
    value: "10",
    control: /*#__PURE__*/_react["default"].createElement(_material.Radio, null),
    label: "10 Pcs - Rs. ".concat((item === null || item === void 0 ? void 0 : item.price) * 2)
  })), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    fontWeight: "bold",
    gutterBottom: true
  }, "Special Instructions"), /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    fullWidth: true,
    multiline: true,
    rows: 3,
    variant: "outlined",
    placeholder: "Please enter instructions about this item",
    value: instructions,
    onChange: function onChange(e) {
      return setInstructions(e.target.value);
    },
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid #eee',
      paddingTop: 16,
      gap: 16
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return setQuantity(function (prev) {
        return Math.max(1, prev - 1);
      });
    },
    style: {
      minWidth: 36,
      height: 36,
      borderRadius: 12,
      backgroundColor: '#ccc',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: '20px',
      padding: 0
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.backgroundColor = '#b0b0b0';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.backgroundColor = '#ccc';
    }
  }, "\u2013"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    fontWeight: "bold"
  }, quantity), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return setQuantity(function (prev) {
        return prev + 1;
      });
    },
    style: {
      minWidth: 36,
      height: 36,
      borderRadius: 12,
      backgroundColor: '#121212',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: '20px',
      padding: 0
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.backgroundColor = '#000';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.backgroundColor = '#121212';
    }
  }, "+")), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    fullWidth: true,
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#121212',
      color: '#f4e3d3',
      borderRadius: 12,
      padding: '12px 24px',
      fontWeight: 'bold',
      fontSize: 16,
      textTransform: 'none'
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.backgroundColor = '#000';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.backgroundColor = '#121212';
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Rs. ", price * quantity), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, "Add to Cart", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      transform: 'rotate(-45deg)',
      display: 'inline-block'
    }
  }, "\u279C")))))));
}