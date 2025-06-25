"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ScrollCategoryBar;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _react2 = require("@iconify/react");
var _chevronLeft = _interopRequireDefault(require("@iconify-icons/mdi/chevron-left"));
var _chevronRight = _interopRequireDefault(require("@iconify-icons/mdi/chevron-right"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var categories = ["SMASH BRGR", "SWISS MUSHROOM", "CRISPY ZING BRGR", "NUGGETS", "CHKN TENDERS", "FILLET BRGR", "CHAMP CHKN BRGR", "LOADED FRIES", "FISH & CHIPS", "WRAP", "SANDWICH", "ADD ONS", "MARGARITA", "ICE CREAM SHAKES", "JUICES", "FIZZY DRINKS", "BEVERAGES"];
function ScrollCategoryBar() {
  var scrollRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showLeft = _useState2[0],
    setShowLeft = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    showRight = _useState4[0],
    setShowRight = _useState4[1];
  var scrollAmount = 300;
  var handleScroll = function handleScroll(direction) {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };
  var updateArrows = function updateArrows() {
    var el = scrollRef.current;
    if (el) {
      var scrollLeft = el.scrollLeft,
        scrollWidth = el.scrollWidth,
        clientWidth = el.clientWidth;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };
  (0, _react.useEffect)(function () {
    var el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updateArrows);
      updateArrows();
    }
    return function () {
      if (el) el.removeEventListener("scroll", updateArrows);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 1100,
      backgroundColor: "#000",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "8px 16px",
      position: "relative",
      overflow: "hidden"
    }
  }, showLeft && /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: function onClick() {
      return handleScroll("left");
    },
    style: {
      color: "#fff",
      position: "absolute",
      left: 0,
      zIndex: 2,
      backgroundColor: "rgba(0,0,0,0.5)"
    },
    onMouseOver: function onMouseOver(e) {
      return e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.7)";
    },
    onMouseOut: function onMouseOut(e) {
      return e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    icon: _chevronLeft["default"]
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    ref: scrollRef,
    style: {
      display: "flex",
      flexWrap: "nowrap",
      overflowX: "auto",
      gap: "16px",
      padding: "0 40px",
      width: "100%",
      scrollbarWidth: "none"
    }
  }, /*#__PURE__*/_react["default"].createElement("style", null, "\n            ::-webkit-scrollbar {\n              display: none;\n            }\n          "), categories.map(function (cat, idx) {
    return /*#__PURE__*/_react["default"].createElement(_material.Button, {
      key: idx,
      style: {
        flex: "0 0 auto",
        whiteSpace: "nowrap",
        color: "#fff",
        fontWeight: 600,
        fontSize: "0.9rem",
        padding: "8px 16px",
        minWidth: "120px",
        maxWidth: "160px",
        borderRadius: "8px",
        textTransform: "none",
        backgroundColor: "transparent"
      },
      onMouseOver: function onMouseOver(e) {
        return e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      },
      onMouseOut: function onMouseOut(e) {
        return e.currentTarget.style.backgroundColor = "transparent";
      }
    }, cat);
  })), showRight && /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: function onClick() {
      return handleScroll("right");
    },
    style: {
      color: "#fff",
      position: "absolute",
      right: 0,
      zIndex: 2,
      backgroundColor: "rgba(0,0,0,0.5)"
    },
    onMouseOver: function onMouseOver(e) {
      return e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.7)";
    },
    onMouseOut: function onMouseOut(e) {
      return e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    icon: _chevronRight["default"]
  }))));
}