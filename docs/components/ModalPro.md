# ModalPro 高级模态框组件

## 概述

ModalPro 是一个基于 Ant Design 的高级模态框组件，提供了丰富的功能和更好的用户体验。它封装了模态框的常用操作，支持拖拽、调整大小、键盘导航等高级功能。

## 特性

- 🎯 **基于 Ant Design**: 使用 `antd` 的 `Modal` 组件
- 🎨 **自定义触发方式**: 支持任意组件作为模态框触发器
- ⌨️ **键盘导航**: 支持键盘快捷键操作
- 🖱️ **拖拽功能**: 支持模态框拖拽（可选）
- 📏 **调整大小**: 支持模态框大小调整（可选）
- 🖥️ **全屏支持**: 支持模态框全屏显示
- 🎭 **动画效果**: 支持自定义动画效果
- 🛡️ **确认关闭**: 支持关闭前的确认提示
- 🎯 **自动聚焦**: 支持自动聚焦到指定元素

## 基础用法

### 简单模态框

<code src="./demo/simpleModal.tsx"></code>

### 带确认操作的模态框

<code src="./demo/confirmModal.tsx"></code>

### 复杂内容模态框

<code src="./demo/complexModal.tsx"></code>

## API 文档

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| title | 模态框标题 | `string` | `'模态框'` | 否 |
| handleOk | 点击确定按钮的回调 | `function` | `(callback) => callback()` | 否 |
| Content | 模态框内容 | `ReactNode \| Component` | `() => <div>示例</div>` | 否 |
| children | 触发模态框的组件 | `ReactNode` | `<div>点击</div>` | 否 |
| fieldProps | antd Modal的props | `object` | `{}` | 否 |
| keyboardNavigation | 是否启用键盘导航 | `boolean` | `true` | 否 |
| onKeyDown | 自定义键盘事件处理 | `function` | - | 否 |
| draggable | 是否可拖拽 | `boolean` | `false` | 否 |
| resizable | 是否可调整大小 | `boolean` | `false` | 否 |
| maximizable | 是否支持最大化 | `boolean` | `false` | 否 |
| fullscreen | 是否全屏显示 | `boolean` | `false` | 否 |
| animation | 动画配置 | `object` | - | 否 |
| maskClosable | 点击遮罩层是否关闭 | `boolean` | `true` | 否 |
| autoFocus | 自动聚焦元素选择器 | `string` | - | 否 |
| confirmOnClose | 关闭时是否显示确认 | `boolean` | `false` | 否 |
| confirmCloseText | 确认关闭的提示文本 | `string` | `'确定要关闭吗？'` | 否 |

### fieldProps 配置

ModalPro 的 `fieldProps` 继承自 Ant Design `Modal` 的所有属性：

<code src="./demo/fieldPropsDemo.tsx"></code>

## 高级功能

### 键盘导航

<code src="./demo/keyboardModal.tsx"></code>

### 拖拽和调整大小

<code src="./demo/draggableModal.tsx"></code>

### 全屏模态框

<code src="./demo/fullscreenModal.tsx"></code>

### 确认关闭

<code src="./demo/confirmCloseModal.tsx"></code>

### 自动聚焦

<code src="./demo/autoFocusModal.tsx"></code>

## 完整示例

### 表单模态框

<code src="./demo/formModal.tsx"></code>

### 图片预览模态框

<code src="./demo/imagePreviewModal.tsx"></code>

### 确认删除模态框

<code src="./demo/deleteConfirmModal.tsx"></code>

## 注意事项

1. **Content 组件**: `Content` 可以是 React 组件或 JSX 元素
2. **状态管理**: 如果需要访问模态框状态，可以通过 `Content` 组件的 props 获取
3. **键盘导航**: 启用键盘导航后，支持 Enter 和空格键打开模态框
4. **拖拽功能**: 拖拽功能需要额外的 CSS 样式支持
5. **性能优化**: 对于复杂内容，建议使用 `destroyOnClose` 属性

## 常见问题

### Q: 如何在模态框中获取外部数据？

A: 可以通过 `Content` 组件的 props 传递数据：

<code src="./demo/dataModal.tsx"></code>

### Q: 如何自定义模态框的样式？

A: 可以通过 `fieldProps` 的 `style` 或 `className` 属性自定义样式：

<code src="./demo/customStyleModal.tsx"></code>

### Q: 如何禁用模态框的某些功能？

A: 可以通过相应的属性禁用功能：

<code src="./demo/disabledFeaturesModal.tsx"></code>

### Q: 如何在模态框中处理异步操作？

A: 可以在 `handleOk` 中处理异步操作：

<code src="./demo/asyncOperationModal.tsx"></code> 