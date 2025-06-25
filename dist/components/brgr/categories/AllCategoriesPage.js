"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AllCategoriesPage;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _categories = require("../data/categories");
var _Banner = _interopRequireDefault(require("./Banner"));
var _CategoryLayout = _interopRequireDefault(require("./CategoryLayout"));
var _ItemCard = _interopRequireDefault(require("./ItemCard"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function AllCategoriesPage(_ref) {
  var prop = _ref.prop,
    actions = _ref.actions,
    styles = _ref.styles,
    states = _ref.states;
  var _useState = useState(prop.displayitems || []),
    _useState2 = _slicedToArray(_useState, 2),
    products = _useState2[0],
    setProducts = _useState2[1];
  var _ref2 = states !== null && states !== void 0 ? states : {},
    query = _ref2.query;
  useEffect(function () {
    if (query && query.trim() !== "") {
      var filtered = prop.displayitems.filter(function (p) {
        return p.name.toLowerCase().includes(states.query.toLowerCase());
      });
      setProducts(filtered);
    } else {
      setProducts(prop.displayitems || []);
    }
  }, [states.query, prop.displayitems]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, products.map(function (category) {
    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      key: category.id,
      style: {
        margin: "48px 0px"
      }
    }, /*#__PURE__*/_react["default"].createElement(_CategoryLayout["default"]
    // banner={<Banner img={category.bannerImg} />}
    , null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "h3",
      style: {
        marginBottom: "16px"
      }
    }, category.title), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
      container: true,
      spacing: 2
    }, category.items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        item: true,
        xs: 12,
        sm: 6,
        md: 3,
        key: item.id
      }, /*#__PURE__*/_react["default"].createElement(_ItemCard["default"], {
        item: item
      }));
    }))));
  }));
}