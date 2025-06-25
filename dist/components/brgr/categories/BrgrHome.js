"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Header = _interopRequireDefault(require("./header/Header"));
var _PopularMenuSection = _interopRequireDefault(require("./PopularItemSections/PopularMenuSection"));
var _categories = _interopRequireDefault(require("./categories"));
var _HeroCarousel = _interopRequireDefault(require("./header/HeroCarousel"));
var _BRGRInfoBlock = _interopRequireDefault(require("./BRGRInfo/BRGRInfoBlock"));
var _Footer = _interopRequireDefault(require("./footer/Footer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var BrgrHome = function BrgrHome() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Header["default"], null), /*#__PURE__*/React.createElement(_HeroCarousel["default"], null), /*#__PURE__*/React.createElement(_PopularMenuSection["default"], null), /*#__PURE__*/React.createElement(_categories["default"], null), /*#__PURE__*/React.createElement(_BRGRInfoBlock["default"], null), /*#__PURE__*/React.createElement(_Footer["default"], null));
};
var _default = exports["default"] = BrgrHome;