"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PopularMenuSection;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _ItemCard = _interopRequireDefault(require("./ItemCard"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function PopularMenuSection(_ref) {
  var _prop$static;
  var prop = _ref.prop,
    actions = _ref.actions,
    styles = _ref.styles,
    states = _ref.states;
  var displayItems = (prop === null || prop === void 0 || (_prop$static = prop["static"]) === null || _prop$static === void 0 ? void 0 : _prop$static.displayitems) || [];
  var _useState = (0, _react.useState)(displayItems),
    _useState2 = _slicedToArray(_useState, 2),
    products = _useState2[0],
    setProducts = _useState2[1];
  var _ref2 = states !== null && states !== void 0 ? states : {},
    query = _ref2.query;
  (0, _react.useEffect)(function () {
    if (query && query.trim() !== "") {
      var filtered = displayItems.filter(function (p) {
        return p.name.toLowerCase().includes(query.toLowerCase());
      });
      setProducts(filtered);
    } else {
      setProducts(displayItems);
    }
  }, [query, displayItems]);
  return /*#__PURE__*/_react["default"].createElement(_material.Container, {
    style: {
      marginTop: "30px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    mb: 4,
    mt: 4
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h4",
    style: {
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, "Popular Items"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1",
    color: "textSecondary"
  }, "Most ordered right now")), products.length === 0 ? /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1",
    style: {
      textAlign: "center",
      marginTop: 40,
      color: "#666"
    }
  }, "No items found.") : /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 3
  }, products.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
      key: item.id || item.name,
      item: true,
      xs: 12,
      sm: 6,
      md: 3,
      lg: 3
    }, /*#__PURE__*/_react["default"].createElement(_ItemCard["default"], {
      item: item
    }));
  })));
}