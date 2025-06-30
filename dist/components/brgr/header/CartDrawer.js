"use strict";
'use client';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _react2 = require("@iconify/react");
var _arrowRight = _interopRequireDefault(require("@iconify-icons/mdi/arrow-right"));
var _delete = _interopRequireDefault(require("@iconify-icons/mdi/delete"));
var _plus = _interopRequireDefault(require("@iconify-icons/mdi/plus"));
var _close = _interopRequireDefault(require("@iconify-icons/mdi/close"));
var _navigation = require("next/navigation");
var _useSession = _interopRequireDefault(require("src/utils/useSession"));
var _store = require("src/redux/store");
var _cardSlice = require("src/redux/slices/cardSlice");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CartDrawer = function CartDrawer(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose;
  var _useState = (0, _react.useState)('delivery'),
    _useState2 = _slicedToArray(_useState, 2),
    orderType = _useState2[0],
    setOrderType = _useState2[1];
  var navigate = (0, _navigation.useRouter)();
  var dispatch = (0, _store.useDispatch)();
  var _useSelector = (0, _store.useSelector)(function (state) {
      return state.cardSlice;
    }),
    cardItems = _useSelector.cardItems;
  var sessionInfo = (0, _useSession["default"])();
  var getCartItem = (0, _react.useCallback)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var _response$response, response, _orderType, errorMessage, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          if (sessionInfo !== null && sessionInfo !== void 0 && sessionInfo.sessionId) {
            _context.n = 1;
            break;
          }
          console.warn('Session ID does not exist. Skipping API calls.');
          return _context.a(2);
        case 1:
          _context.n = 2;
          return dispatch((0, _cardSlice.getCartByCustomerId)(sessionInfo === null || sessionInfo === void 0 ? void 0 : sessionInfo.sessionId));
        case 2:
          response = _context.v;
          if (!((response === null || response === void 0 || (_response$response = response.response) === null || _response$response === void 0 || (_response$response = _response$response.data) === null || _response$response === void 0 ? void 0 : _response$response.message) == 'Venue is InActive')) {
            _context.n = 4;
            break;
          }
          _orderType = localStorage.getItem('mode');
          _context.n = 3;
          return selectedVenue(dispatch, _orderType, true);
        case 3:
          localStorage.setItem('VenueNotAvailableMessageSeen', false);
          errorMessage = 'Venue Not Available';
          navigate("/venue", {
            replace: true,
            state: {
              errorMessage: errorMessage
            }
          });
          return _context.a(2);
        case 4:
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.error('Error fetching data:', _t);
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[0, 5]]);
  })), [cardItems]);
  (0, _react.useEffect)(function () {
    getCartItem();
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_material.Drawer, {
    anchor: "right",
    open: open,
    onClose: onClose,
    PaperProps: {
      style: {
        width: '100%',
        maxWidth: 400,
        padding: 16,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      position: 'relative',
      height: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    style: {
      fontWeight: 'bold',
      fontSize: 20
    }
  }, "Your Cart"), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: onClose,
    style: {
      backgroundColor: '#000',
      color: '#fff',
      width: 32,
      height: 32,
      borderRadius: '50%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    icon: _close["default"],
    width: 18,
    height: 18
  }))), cardItems.length === 0 ? /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80%',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    icon: "mdi:bag-personal-outline",
    width: 80,
    height: 80
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    style: {
      fontWeight: 'bold',
      marginTop: 16
    },
    variant: "h6"
  }, "Your Cart is Empty"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "text.secondary",
    style: {
      marginTop: 8,
      marginBottom: 16,
      maxWidth: 240
    }
  }, "Looks like you haven\u2019t added anything to your cart yet. Start exploring and shop your favorite items!"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: onClose,
    style: {
      borderRadius: 16,
      textTransform: 'none',
      paddingLeft: 24,
      paddingRight: 24
    }
  }, "Browse Products")) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, cardItems.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      key: item.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
      }
    }, /*#__PURE__*/_react["default"].createElement(_material.Avatar, {
      variant: "rounded",
      src: item.image,
      alt: item.name,
      style: {
        width: 64,
        height: 64,
        borderRadius: 8,
        marginRight: 16
      }
    }), /*#__PURE__*/_react["default"].createElement(_material.Box, {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      style: {
        fontSize: 15,
        fontWeight: 500
      }
    }, item.name), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      style: {
        fontSize: 13,
        color: '#888'
      }
    }, "(Single)"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      style: {
        fontSize: 15,
        fontWeight: 'bold'
      }
    }, "Rs. ", item.price)), /*#__PURE__*/_react["default"].createElement(_material.Box, {
      style: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: 30,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4,
        minWidth: 110,
        justifyContent: 'space-between',
        marginLeft: 8
      }
    }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      size: "small",
      onClick: function onClick() {
        return removeFromCart(item.id);
      },
      style: {
        color: '#f44336'
      }
    }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
      icon: _delete["default"],
      width: 18,
      height: 18
    })), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      style: {
        fontWeight: 500,
        fontSize: 14
      }
    }, item.quantity), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      size: "small"
    }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
      icon: _plus["default"],
      width: 18,
      height: 18
    }))));
  }), /*#__PURE__*/_react["default"].createElement(_material.Divider, {
    style: {
      margin: '16px 0'
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    fullWidth: true,
    disableRipple: true,
    disableElevation: true,
    startIcon: /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
      icon: "mdi:plus",
      width: 18,
      height: 18,
      style: {
        marginRight: 4
      }
    }),
    style: {
      color: '#888',
      fontWeight: 500,
      textTransform: 'none',
      justifyContent: 'flex-start',
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: 8,
      backgroundColor: 'transparent'
    }
  }, "Add more items"), /*#__PURE__*/_react["default"].createElement(_material.Divider, {
    style: {
      margin: '16px 0'
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, null, "Total"), /*#__PURE__*/_react["default"].createElement(_material.Typography, null, "Rs. ", total)), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, null, "Delivery Fee"), /*#__PURE__*/_react["default"].createElement(_material.Typography, null, "Rs. ", deliveryFee)), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 'bold',
      marginTop: 8
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, null, "Grand Total"), /*#__PURE__*/_react["default"].createElement(_material.Typography, null, "Rs. ", grandTotal))), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    fullWidth: true,
    onClick: function onClick() {
      return navigate('/checkout');
    },
    endIcon: /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
      icon: _arrowRight["default"],
      width: 20,
      height: 20
    }),
    style: {
      textTransform: 'none',
      fontWeight: 'bold',
      marginTop: 16,
      paddingTop: 12,
      paddingBottom: 12,
      borderRadius: 10,
      backgroundColor: '#111',
      color: '#f5d0a9',
      fontSize: 16,
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16
    }
  }, "Checkout"), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
      borderRadius: 30,
      backgroundColor: '#e0e0e0',
      width: 'fit-content',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '4px 8px'
    }
  }, ['delivery', 'pickup'].map(function (type) {
    return /*#__PURE__*/_react["default"].createElement(_material.Button, {
      key: type,
      onClick: function onClick() {
        return setOrderType(type);
      },
      size: "small",
      disableElevation: true,
      style: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        backgroundColor: orderType === type ? '#000' : 'transparent',
        color: orderType === type ? '#fff' : '#000',
        borderRadius: 20,
        padding: '4px 8px',
        fontSize: 12,
        minWidth: 'auto'
      }
    }, type);
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      backgroundColor: '#f1f8ff',
      padding: 16,
      marginTop: 16,
      borderRadius: 8,
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    style: {
      fontSize: 14
    }
  }, "Your order will be delivered approximately in 45 minutes on", ' ', /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      color: '#0071f8'
    }
  }, "June 25, 2025 at 12:10 PM"))))));
};
var _default = exports["default"] = CartDrawer;