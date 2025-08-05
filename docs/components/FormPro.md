# FormPro 高级表单组件

## 概述

FormPro 是一个基于 Ant Design Pro Components 的高级表单组件，支持模态框和抽屉两种布局方式。它封装了表单的增删改查操作，提供了完整的 CRUD 功能。

## 特性

- 🎯 **基于 Ant Design Pro Components**: 使用 `@ant-design/pro-components` 的 `BetaSchemaForm`
- 📝 **支持多种布局**: 模态框（ModalForm）和抽屉（DrawerForm）
- 🔄 **完整的 CRUD 操作**: 支持新增、编辑、详情查看
- 🎨 **自定义触发方式**: 支持任意组件作为表单触发器
- ⚡ **异步数据处理**: 支持详情数据获取和表单提交
- 🛡️ **错误处理**: 内置错误处理和用户提示

## 基础用法

### 简单表单

<code src="./demo/simpleForm.tsx"></code>

### 编辑表单

<code src="./demo/editForm.tsx"></code>

### 抽屉布局

<code src="./demo/drawerForm.tsx"></code>

## API 文档

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| layoutType | 表单布局类型 | `'ModalForm' \| 'DrawerForm'` | `'ModalForm'` | 否 |
| fieldProps | 表单字段配置 | `object` | `{}` | 否 |
| url | 表单提交的 URL | `string` | - | 是 |
| detailUrl | 获取详情数据的 URL | `string` | - | 否 |
| record | 表单初始数据 | `object` | `{}` | 否 |
| ajax | 自定义 AJAX 请求函数 | `function` | `ajaxCommon` | 否 |
| finishFun | 表单提交成功后的回调 | `function` | `() => {}` | 否 |
| detailSetData | 详情数据处理函数 | `function` | - | 否 |
| setMsg | 成功消息处理函数 | `function` | `(data) => data?.msg \|\| '操作成功'` | 否 |
| isEdit | 是否为编辑模式 | `boolean` | `false` | 否 |
| beforeSubmit | 提交前的数据处理函数 | `function` | `(data) => data` | 否 |
| children | 触发表单的组件 | `ReactNode` | `<Button>点击我</Button>` | 否 |

### fieldProps 配置

FormPro 的 `fieldProps` 继承自 `BetaSchemaForm` 的所有属性，主要包括：

```js
const fieldProps = {
  // 表单列配置
  columns: [
    {
      title: '字段标题',
      dataIndex: 'fieldName',
      valueType: 'text', // 字段类型
      formItemProps: {
        rules: [{ required: true, message: '必填项' }],
      },
      // 在搜索表单中隐藏
      hideInSearch: true,
      // 在表格中隐藏
      hideInTable: true,
    },
  ],
  // 表单标题
  title: '表单标题',
  // 表单宽度
  width: 800,
  // 表单标签宽度
  labelWidth: 120,
  // 表单布局
  layout: 'horizontal',
  // 表单提交按钮文本
  submitter: {
    submitButtonProps: {
      children: '提交',
    },
  },
};
```

## 字段类型支持

FormPro 支持 Ant Design Pro Components 的所有字段类型：

### 基础字段类型

```js
const basicColumns = [
  { title: '文本', dataIndex: 'text', valueType: 'text' },
  { title: '数字', dataIndex: 'number', valueType: 'digit' },
  { title: '密码', dataIndex: 'password', valueType: 'password' },
  { title: '邮箱', dataIndex: 'email', valueType: 'text' },
  { title: '手机号', dataIndex: 'phone', valueType: 'text' },
  { title: '网址', dataIndex: 'url', valueType: 'text' },
  { title: '日期', dataIndex: 'date', valueType: 'date' },
  { title: '日期时间', dataIndex: 'datetime', valueType: 'dateTime' },
  { title: '时间', dataIndex: 'time', valueType: 'time' },
  { title: '选择器', dataIndex: 'select', valueType: 'select' },
  { title: '多选', dataIndex: 'multiple', valueType: 'select' },
  { title: '单选框', dataIndex: 'radio', valueType: 'radio' },
  { title: '复选框', dataIndex: 'checkbox', valueType: 'checkbox' },
  { title: '开关', dataIndex: 'switch', valueType: 'switch' },
  { title: '滑块', dataIndex: 'slider', valueType: 'slider' },
  { title: '评分', dataIndex: 'rate', valueType: 'rate' },
  { title: '上传', dataIndex: 'upload', valueType: 'upload' },
  { title: '富文本', dataIndex: 'richtext', valueType: 'richtext' },
  { title: '代码', dataIndex: 'code', valueType: 'code' },
];
```

### 自定义字段类型

FormPro 还支持自定义字段类型，通过 ProProviderPro 组件注册：

```js
// 树形选择器
{ title: '部门', dataIndex: 'department', valueType: 'treeSelectPro' }

// 表格选择器
{ title: '用户', dataIndex: 'users', valueType: 'tableSelect' }

// 文件上传
{ title: '附件', dataIndex: 'files', valueType: 'uploadPro' }

// 验证码
{ title: '验证码', dataIndex: 'captcha', valueType: 'captcha' }
```

## 完整示例

### 用户管理表单

<code src="./demo/userForm.tsx"></code>

### 产品管理表单

<code src="./demo/productForm.tsx"></code>

## 注意事项

1. **URL 配置**: 必须提供 `url` 参数用于表单提交
2. **字段验证**: 建议为重要字段配置验证规则
3. **数据处理**: 使用 `beforeSubmit` 处理提交前的数据转换
4. **错误处理**: 组件内置了错误处理，会自动显示错误消息
5. **性能优化**: 对于大量数据的表单，建议使用 `DrawerForm` 布局

## 常见问题

### Q: 如何自定义表单提交逻辑？

A: 可以通过 `beforeSubmit` 属性自定义提交前的数据处理：

<code src="./demo/beforeSubmitDemo.tsx"></code>

### Q: 如何获取表单实例？

A: 可以通过 `fieldProps.formRef` 获取表单实例：

<code src="./demo/formRefDemo.tsx"></code>

### Q: 如何动态显示/隐藏字段？

A: 可以通过 `fieldProps.columns` 的 `hidden` 属性控制：

<code src="./demo/hiddenFieldDemo.tsx"></code> 