"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeroCarousel;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _react2 = require("@iconify/react");
var _chevronLeft = _interopRequireDefault(require("@iconify-icons/mdi/chevron-left"));
var _chevronRight = _interopRequireDefault(require("@iconify-icons/mdi/chevron-right"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function HeroCarousel(_ref) {
  var prop = _ref.prop;
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    transitionEnabled = _useState4[0],
    setTransitionEnabled = _useState4[1];
  var slideInterval = (0, _react.useRef)(null);
  var isJumpingRef = (0, _react.useRef)(false);
  var hasMountedRef = (0, _react.useRef)(false);
  var _ref2 = prop !== null && prop !== void 0 ? prop : {},
    editable = _ref2.editable;
  var _ref3 = editable !== null && editable !== void 0 ? editable : {},
    carouselImages = _ref3.carouselImages;
  var totalSlides = carouselImages.length;
  var fullSlides = [carouselImages[totalSlides - 1]].concat(_toConsumableArray(carouselImages), [carouselImages[0]]);
  var goToIndex = function goToIndex(index) {
    setCurrentIndex(index + 1);
  };
  var goToPrev = function goToPrev() {
    setCurrentIndex(function (prev) {
      return prev - 1;
    });
  };
  var goToNext = function goToNext() {
    setCurrentIndex(function (prev) {
      return prev + 1;
    });
  };
  var realIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex === totalSlides + 1 ? 0 : currentIndex - 1;
  (0, _react.useEffect)(function () {
    startSlide();
    return function () {
      return stopSlide();
    };
  }, []);
  var startSlide = function startSlide() {
    stopSlide();
    slideInterval.current = setInterval(function () {
      if (!hasMountedRef.current) {
        hasMountedRef.current = true;
        return;
      }
      if (!isJumpingRef.current) {
        setCurrentIndex(function (prev) {
          return prev - 1;
        });
      }
    }, 5000);
  };
  var stopSlide = function stopSlide() {
    clearInterval(slideInterval.current);
  };
  (0, _react.useEffect)(function () {
    if (currentIndex === 0) {
      isJumpingRef.current = true;
      setTimeout(function () {
        setTransitionEnabled(false);
        setCurrentIndex(totalSlides);
        isJumpingRef.current = false;
      }, 800);
    } else if (currentIndex === totalSlides + 1) {
      isJumpingRef.current = true;
      setTimeout(function () {
        setTransitionEnabled(false);
        setCurrentIndex(1);
        isJumpingRef.current = false;
      }, 800);
    } else {
      setTransitionEnabled(true);
    }
  }, [currentIndex, totalSlides]);
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    onMouseEnter: stopSlide,
    onMouseLeave: startSlide,
    style: {
      position: "relative",
      width: "100%",
      height: "600px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      display: "flex",
      transition: transitionEnabled ? "transform 0.8s ease-in-out" : "none",
      transform: "translateX(-".concat(currentIndex * 100, "%)"),
      width: "100%",
      height: "100%"
    }
  }, fullSlides.map(function (img, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      key: index,
      component: "img",
      src: img,
      alt: "slide-".concat(index),
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        flexShrink: 0
      }
    });
  })), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: goToPrev,
    style: {
      position: "absolute",
      top: "50%",
      left: "20px",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "#fff",
      zIndex: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    icon: _chevronLeft["default"],
    width: 24,
    height: 24
  })), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: goToNext,
    style: {
      position: "absolute",
      top: "50%",
      right: "20px",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "#fff",
      zIndex: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    icon: _chevronRight["default"],
    width: 24,
    height: 24
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      position: "absolute",
      bottom: 20,
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "8px",
      zIndex: 2
    }
  }, carouselImages === null || carouselImages === void 0 ? void 0 : carouselImages.map(function (_, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      key: index,
      onClick: function onClick() {
        return goToIndex(index);
      },
      style: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: index === realIndex ? "#fff" : "rgba(255,255,255,0.5)",
        cursor: "pointer",
        transition: "background-color 0.3s ease"
      }
    });
  })));
}
;