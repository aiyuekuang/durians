import { Layout, Row, Typography } from 'antd';
import React from 'react';
// 脚手架示例组件
var Index = function Index(_ref) {
  var _ref$name = _ref.name,
    name = _ref$name === void 0 ? "1111" : _ref$name;
  return /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "\u6B22\u8FCE\u4F7F\u7528 ", /*#__PURE__*/React.createElement("strong", null, name), " \uFF01")));
};
export default Index;