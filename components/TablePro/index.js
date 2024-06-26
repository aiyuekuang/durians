function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { BetaSchemaForm, ProTable } from '@ant-design/pro-components';
import { Button, Divider, message, Popconfirm, Space, Table } from 'antd';
import React, { Fragment, useRef } from 'react';
import { ajaxCommon } from "../../utils/common";
import { ModalPro } from "../..";
var columns_ = [{
  dataIndex: 'index',
  valueType: 'indexBorder',
  width: 48
}, {
  title: '标题',
  dataIndex: 'title',
  copyable: true,
  ellipsis: true,
  tooltip: '标题过长会自动收缩',
  formItemProps: {
    rules: [{
      required: true,
      message: '此项为必填项'
    }]
  }
}];
var TablePro = function TablePro(_ref) {
  var _ref$ajax = _ref.ajax,
    ajax = _ref$ajax === void 0 ? ajaxCommon : _ref$ajax,
    _ref$url = _ref.url,
    url = _ref$url === void 0 ? 'https://proapi.azurewebsites.net/github/issues' : _ref$url,
    addUrl = _ref.addUrl,
    editUrl = _ref.editUrl,
    deleteUrl = _ref.deleteUrl,
    _ref$deleteFieldUrl = _ref.deleteFieldUrl,
    deleteFieldUrl = _ref$deleteFieldUrl === void 0 ? "idList" : _ref$deleteFieldUrl,
    _ref$fieldPropsAdd = _ref.fieldPropsAdd,
    fieldPropsAdd = _ref$fieldPropsAdd === void 0 ? {} : _ref$fieldPropsAdd,
    _ref$actionWidth = _ref.actionWidth,
    actionWidth = _ref$actionWidth === void 0 ? 100 : _ref$actionWidth,
    _ref$fieldProps = _ref.fieldProps,
    fieldProps = _ref$fieldProps === void 0 ? {
      search: {},
      columns: columns_
    } : _ref$fieldProps,
    _ref$setData = _ref.setData,
    setData = _ref$setData === void 0 ? function (data) {
      return data.data.records;
    } : _ref$setData,
    _ref$setTotal = _ref.setTotal,
    setTotal = _ref$setTotal === void 0 ? function (data) {
      return data.data.total;
    } : _ref$setTotal,
    _ref$setMsg = _ref.setMsg,
    setMsg = _ref$setMsg === void 0 ? function (data) {
      return data.msg;
    } : _ref$setMsg,
    _ref$actionBar = _ref.actionBar,
    actionBar = _ref$actionBar === void 0 ? [] : _ref$actionBar;
  var actionRef = useRef();
  var id_ = fieldProps.rowKey || "id";
  var actionBarComponent = [].concat(_toConsumableArray(deleteUrl ? [function (_ref2) {
    var record = _ref2.record;
    return /*#__PURE__*/React.createElement(BaseForm, {
      record: record
    }, /*#__PURE__*/React.createElement("a", null, "\u7F16\u8F91"));
  }] : []), _toConsumableArray(actionBar), _toConsumableArray(deleteUrl ? [function (_ref3) {
    var record = _ref3.record;
    return /*#__PURE__*/React.createElement(Popconfirm, {
      title: "\u5220\u9664",
      description: "\u786E\u5B9A\u5220\u9664\u8FD9\u6761\u6570\u636E\u5417\uFF1F",
      onConfirm: function onConfirm() {
        deleteHandle([record[id_]]);
      },
      okText: "\u662F",
      cancelText: "\u5426"
    }, /*#__PURE__*/React.createElement("a", {
      style: {
        color: "red"
      }
    }, "\u5220\u9664"));
  }] : []));
  var BaseForm = function BaseForm(_ref4) {
    var children = _ref4.children,
      record = _ref4.record;
    return /*#__PURE__*/React.createElement(BetaSchemaForm, _extends({
      initialValues: record,
      columns: fieldProps.columns.map(function (data) {
        return _objectSpread(_objectSpread({}, data), {}, {
          width: 'md'
        });
      }),
      trigger: children,
      onFinish: ( /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
          var isSuccess, url_, values_;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                isSuccess = false;
                url_ = addUrl;
                values_ = values;
                if (record !== null && record !== void 0 && record[id_] && editUrl) {
                  values_[id_] = record === null || record === void 0 ? void 0 : record[id_];
                  url_ = editUrl;
                }
                _context.next = 6;
                return ajax(url_, values_, function (data) {
                  var _actionRef$current;
                  // 刷新页面
                  (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 || _actionRef$current.reload();
                  message.success(setMsg(data));
                  isSuccess = true;
                });
              case 6:
                return _context.abrupt("return", isSuccess);
              case 7:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref5.apply(this, arguments);
        };
      }()),
      layoutType: "ModalForm",
      rowProps: {
        gutter: [16, 16]
      },
      colProps: {
        span: 12
      },
      grid: true
    }, fieldPropsAdd));
  };
  var action = function action(_, record) {
    return /*#__PURE__*/React.createElement("div", {
      className: "durians_table_pro_action"
    }, actionBarComponent.map(function (Comp, i) {
      return /*#__PURE__*/React.createElement(Fragment, {
        key: i
      }, /*#__PURE__*/React.createElement(Comp, {
        record: record
      }), actionBarComponent.length > 1 && i < actionBarComponent.length - 1 ? /*#__PURE__*/React.createElement(Divider, {
        type: "vertical"
      }) : null);
    }));
  };

  //删除的执行函数
  var deleteHandle = function deleteHandle(selectedRowKeys) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var params_ = {};
    params_[deleteFieldUrl] = selectedRowKeys;
    ajax(deleteUrl, params_, function (data) {
      var _actionRef$current2;
      message.success(setMsg(data));
      (_actionRef$current2 = actionRef.current) === null || _actionRef$current2 === void 0 || _actionRef$current2.reload();
      actionRef.current.clearSelected();
      callback();
    });
  };
  return /*#__PURE__*/React.createElement(ProTable, _extends({
    defaultSize: "small",
    scroll: {
      x: "100%"
    },
    rowSelection: {
      // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
      // 注释该行则默认不显示下拉选项
      selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT]
    },
    tableAlertRender: function tableAlertRender(_ref6) {
      var selectedRowKeys = _ref6.selectedRowKeys,
        selectedRows = _ref6.selectedRows,
        onCleanSelected = _ref6.onCleanSelected;
      console.log(selectedRowKeys, selectedRows);
      return /*#__PURE__*/React.createElement(Space, {
        size: 24
      }, /*#__PURE__*/React.createElement("span", null, "\u5DF2\u9009 ", selectedRowKeys.length, " \u9879", /*#__PURE__*/React.createElement("a", {
        style: {
          marginInlineStart: 8
        },
        onClick: onCleanSelected
      }, "\u53D6\u6D88\u9009\u62E9")));
    },
    tableAlertOptionRender: function tableAlertOptionRender(_ref7) {
      var selectedRowKeys = _ref7.selectedRowKeys,
        selectedRows = _ref7.selectedRows,
        onCleanSelected = _ref7.onCleanSelected;
      return /*#__PURE__*/React.createElement(Space, {
        size: 16
      }, deleteUrl ? /*#__PURE__*/React.createElement(ModalPro, {
        title: "\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",
        Content: function Content() {
          return "确定删除？";
        },
        handleOk: function handleOk(callback) {
          deleteHandle(selectedRowKeys, function () {
            callback();
          });
        }
      }, /*#__PURE__*/React.createElement(Button, {
        size: "small",
        key: "danger",
        icon: /*#__PURE__*/React.createElement(DeleteOutlined, null),
        danger: true
      }, "\u6279\u91CF\u5220\u9664")) : null);
    },
    actionRef: actionRef,
    request: ( /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params, sort, filter) {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              console.log(777, sort, params, filter);
              result = null;
              _context2.next = 4;
              return ajax(url, _objectSpread({
                pageIndex: params.current,
                pageSize: params.pageSize
              }, params), function (data) {
                console.log(data);
                result = data;
              });
            case 4:
              return _context2.abrupt("return", Promise.resolve({
                data: setData(result),
                success: true,
                total: setTotal(result)
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2, _x3, _x4) {
        return _ref8.apply(this, arguments);
      };
    }()),
    editable: {
      type: 'multiple'
    },
    columnsState: {
      persistenceKey: 'pro-table-singe-demos',
      persistenceType: 'localStorage',
      defaultValue: {
        option: {
          fixed: 'right',
          disable: true
        }
      },
      onChange: function onChange(value) {
        console.log('value: ', value);
      }
    },
    rowKey: "id",
    options: {
      setting: {
        listsHeight: 400
      }
    },
    form: {
      // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
      syncToUrl: function syncToUrl(values, type) {
        if (type === 'get') {
          return _objectSpread({}, values);
        }
        return values;
      }
    },
    pagination: {
      pageSize: 10,
      onChange: function onChange(page) {
        return console.log(page);
      }
    },
    dateFormatter: "string"
  }, fieldProps, {
    columns: [].concat(_toConsumableArray(fieldProps.columns), _toConsumableArray(actionBarComponent.length ? [{
      title: "操作",
      dataIndex: "actionTablePro",
      fixed: "right",
      actionWidth: actionWidth,
      render: action
    }] : [])),
    search: fieldProps.search ? _objectSpread({
      labelWidth: 'auto',
      span: 4,
      defaultCollapsed: false
    }, fieldProps.search || {}) : {
      labelWidth: 'auto'
    },
    toolBarRender: function toolBarRender() {
      return [].concat(_toConsumableArray(addUrl ? [/*#__PURE__*/React.createElement(BaseForm, null, /*#__PURE__*/React.createElement(Button, {
        key: "button",
        icon: /*#__PURE__*/React.createElement(PlusOutlined, null),
        type: "primary"
      }, "\u65B0\u5EFA"))] : []), _toConsumableArray(fieldProps.toolBarRender || []));
    }
  }));
};
export default TablePro;