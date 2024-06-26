function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { Modal } from 'antd';
import "./index.less";
var App = function App(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "基础" : _ref$title,
    _ref$handleOk = _ref.handleOk,
    handleOk = _ref$handleOk === void 0 ? function (callback) {
      callback();
    } : _ref$handleOk,
    _ref$Content = _ref.Content,
    Content = _ref$Content === void 0 ? function () {
      return /*#__PURE__*/React.createElement("div", null, "\u793A\u4F8B");
    } : _ref$Content,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? /*#__PURE__*/React.createElement("div", null, "\u70B9\u51FB") : _ref$children,
    _ref$fieldProps = _ref.fieldProps,
    fieldProps = _ref$fieldProps === void 0 ? {} : _ref$fieldProps;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isModalOpen = _useState2[0],
    setIsModalOpen = _useState2[1];
  var showModal = function showModal() {
    setIsModalOpen(true);
  };
  var handleOk_ = function handleOk_() {
    handleOk(function () {
      setIsModalOpen(false);
    });
  };
  var handleCancel = function handleCancel() {
    setIsModalOpen(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: showModal
  }, children), /*#__PURE__*/React.createElement(Modal, _extends({
    title: title,
    open: isModalOpen,
    onOk: handleOk_,
    onCancel: handleCancel
  }, fieldProps), /*#__PURE__*/React.createElement(Content, {
    isModalOpen: isModalOpen,
    setIsModalOpen: setIsModalOpen
  })));
};
export default App;