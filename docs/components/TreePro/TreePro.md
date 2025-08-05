# TreePro 高级树形组件

## 概述

TreePro 是一个基于 Ant Design 的高级树形组件，集成了完整的 CRUD 操作功能。它基于 `Tree` 组件构建，支持树形数据的展示、新增、编辑、删除等操作，并且支持右键菜单和按需加载。

## 特性

- 🎯 **基于 Ant Design**: 使用 `antd` 的 `Tree` 组件
- 🔄 **完整的 CRUD 操作**: 支持增删改查、右键菜单操作
- 🌳 **树形结构**: 支持无限层级的树形数据展示
- 📱 **按需加载**: 支持懒加载子节点数据
- 🖱️ **右键菜单**: 支持右键菜单操作
- 🎨 **自定义渲染**: 支持自定义节点渲染
- ⚡ **异步数据**: 支持异步数据加载
- 🛡️ **错误处理**: 内置错误处理和加载状态

## 基础用法

### 简单树形组件

<code src="./demo/simpleTree.tsx"></code>

### 带增删改查的树形组件

<code src="./demo/treeWithCRUD.tsx"></code>

### 按需加载的树形组件

<code src="./demo/lazyLoadTree.tsx"></code>

## API 文档

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| title | 树形组件标题 | `string` | `'树形结构'` | 否 |
| ajax | 通用ajax实现方法 | `function` | `ajaxCommon` | 否 |
| url | 获取数据的URL | `string` | - | 是 |
| params | 请求参数 | `function \| object` | `() => ({})` | 否 |
| addUrl | 新增数据的URL | `string` | - | 否 |
| editUrl | 编辑数据的URL | `string` | - | 否 |
| deleteUrl | 删除数据的URL | `string` | - | 否 |
| deleteField | 批量删除数据的字段名 | `string` | `'idList'` | 否 |
| deleteFields | 批量删除需要传递的字段 | `string` | `'idLists'` | 否 |
| deleteFieldIsArr | 单个删除时是否传递数组 | `boolean` | `false` | 否 |
| deleteParams | 删除需要传递的额外参数 | `object` | `{}` | 否 |
| addFormProFieldProps | 表单配置 | `object` | `{}` | 否 |
| setData | 数据处理中间件 | `function` | `(data) => data?.data \|\| []` | 否 |
| setMsg | 消息处理函数 | `function` | `(data) => data?.msg \|\| '操作成功'` | 否 |
| editField | 编辑字段 | `string` | `'id'` | 否 |
| fieldProps | 树形组件配置 | `object` | `{}` | 否 |
| isSelect | 是否支持选择 | `boolean` | `false` | 否 |
| detail | 是否显示详情 | `boolean` | `true` | 否 |
| rowKey | 行的唯一标识字段 | `string` | `'id'` | 否 |
| isLoadData | 是否按需加载数据 | `boolean` | `false` | 否 |

### fieldProps 配置

TreePro 的 `fieldProps` 继承自 Ant Design `Tree` 的所有属性：

<code src="./demo/fieldPropsDemo.tsx"></code>

## 数据格式

### 标准数据格式

<code src="./demo/standardDataFormat.tsx"></code>

### 自定义字段映射

<code src="./demo/customFieldMapping.tsx"></code>

## 完整示例

### 部门管理树形组件

<code src="./demo/departmentTree.tsx"></code>

### 文件管理树形组件

<code src="./demo/fileTree.tsx"></code>

### 权限管理树形组件

<code src="./demo/permissionTree.tsx"></code>

## 高级功能

### 自定义右键菜单

<code src="./demo/customContextMenuTree.tsx"></code>

### 拖拽排序

<code src="./demo/draggableTree.tsx"></code>

### 搜索功能

<code src="./demo/searchableTree.tsx"></code>

## 注意事项

1. **数据格式**: 确保数据格式符合 `fieldNames` 配置
2. **异步加载**: 使用 `isLoadData` 时，需要后端支持按需加载接口
3. **性能优化**: 对于大量数据，建议使用虚拟滚动
4. **错误处理**: 组件内置了错误处理，会自动显示错误消息
5. **权限控制**: 可以通过 `detail`、`addUrl`、`editUrl`、`deleteUrl` 控制操作权限

## 常见问题

### Q: 如何自定义节点渲染？

A: 可以通过 `fieldProps.titleRender` 自定义节点渲染：

<code src="./demo/customTitleRender.tsx"></code>

### Q: 如何获取选中的节点？

A: 可以通过 `fieldProps.onSelect` 获取选中的节点：

<code src="./demo/selectableTree.tsx"></code>

### Q: 如何控制节点的展开状态？

A: 可以通过 `fieldProps.expandedKeys` 控制展开状态：

<code src="./demo/expandedKeysTree.tsx"></code>

### Q: 如何禁用某些操作？

A: 可以通过不传递相应的 URL 来禁用操作：

<code src="./demo/disabledOperationsTree.tsx"></code> 