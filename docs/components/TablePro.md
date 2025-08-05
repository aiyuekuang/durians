# TablePro 高级表格组件

## 概述

TablePro 是一个基于 Ant Design Pro Components 的高级表格组件，集成了完整的 CRUD 操作功能。它基于 `ProTable` 构建，支持搜索、分页、排序、筛选、新增、编辑、删除等操作，并且可以集成左侧树形结构。

## 特性

- 🎯 **基于 Ant Design Pro Components**: 使用 `@ant-design/pro-components` 的 `ProTable`
- 🔄 **完整的 CRUD 操作**: 支持增删改查、批量操作
- 🌳 **树形结构支持**: 可配置左侧树形选择器
- 🔍 **高级搜索**: 支持多种搜索方式和关键词搜索
- 📊 **数据导出**: 支持数据导出功能
- 🎨 **自定义操作**: 支持自定义操作按钮和批量操作
- ⚡ **性能优化**: 支持虚拟滚动和缓存机制
- 🛡️ **错误处理**: 内置错误处理和重试机制

## 基础用法

### 简单表格

<code src="./demo/simpleTable.tsx"></code>

### 带增删改查的表格

<code src="./demo/crudTable.tsx"></code>

### 带树形结构的表格

<code src="./demo/treeTable.tsx"></code>

## API 文档

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| ajax | 通用ajax实现方法 | `function` | `ajaxCommon` | 否 |
| url | 获取数据的URL | `string` | - | 是 |
| addUrl | 新增数据的URL | `string` | - | 否 |
| editUrl | 编辑数据的URL | `string` | - | 否 |
| deleteUrl | 删除数据的URL | `string` | - | 否 |
| deleteField | 批量删除数据的字段名 | `string` | `'idList'` | 否 |
| deleteFields | 批量删除需要传递的字段 | `string` | `'idLists'` | 否 |
| deleteFieldIsArr | 单个删除时是否传递数组 | `boolean` | `false` | 否 |
| deleteParams | 删除需要传递的额外参数 | `object` | `{}` | 否 |
| deleteBatchHidden | 隐藏批量删除 | `boolean` | `false` | 否 |
| fieldProps | pro-table的props参数 | `object` | `{}` | 否 |
| addFormProFieldProps | BetaSchemaForm的props参数 | `object` | `{}` | 否 |
| setData | 数据处理中间件 | `function` | `(data) => data?.data?.records \|\| data?.data?.list \|\| data?.data` | 否 |
| setTotal | 总数处理中间件 | `function` | `(data) => data?.data?.total \|\| data?.data?.length \|\| 0` | 否 |
| setMsg | 消息处理函数 | `function` | `(data) => data?.msg \|\| data?.message \|\| '操作成功'` | 否 |
| actionBar | 表格操作组 | `array` | `[]` | 否 |
| actionWidth | 操作列宽度 | `number` | `100` | 否 |
| paginationAlias | 分页参数别名 | `object` | `{pageIndex: "pageIndex", pageSize: "pageSize"}` | 否 |
| tableAlertOptionRenderPro | 表格警告选项渲染 | `array` | `[]` | 否 |
| treeFieldProps | 树形组件配置 | `object` | `null` | 否 |
| paramsFun | 请求参数处理函数 | `function` | `(data) => data` | 否 |
| treeParamsFun | 树形参数处理函数 | `function` | `(data) => ({treeId: data})` | 否 |
| treeWidth | 树形组件宽度 | `number` | `200` | 否 |
| value | 选中的值 | `any` | `null` | 否 |
| onSelectChange | 选中值变化回调 | `function` | `null` | 否 |
| keywordField | 关键词字段 | `string` | `null` | 否 |
| keywordPlaceholder | 关键词占位符 | `string` | `null` | 否 |

### fieldProps 配置

TablePro 的 `fieldProps` 继承自 `ProTable` 的所有属性：

<code src="./demo/fieldPropsDemo.tsx"></code>

## 列配置详解

### 基础列类型

<code src="./demo/basicColumns.tsx"></code>

### 自定义列类型

<code src="./demo/customColumns.tsx"></code>

## 完整示例

### 用户管理表格

<code src="./demo/userTable.tsx"></code>

### 产品管理表格

<code src="./demo/productTable.tsx"></code>

## 高级功能

### 自定义操作按钮

<code src="./demo/customActionTable.tsx"></code>

### 批量操作

<code src="./demo/batchOperationTable.tsx"></code>

### 关键词搜索

<code src="./demo/keywordSearchTable.tsx"></code>

## 注意事项

1. **URL 配置**: 必须提供 `url` 参数用于数据获取
2. **列配置**: 建议为重要字段配置验证规则
3. **数据处理**: 使用 `setData` 和 `setTotal` 处理返回数据
4. **错误处理**: 组件内置了错误处理，会自动显示错误消息
5. **性能优化**: 对于大量数据，建议配置分页和虚拟滚动

## 常见问题

### Q: 如何自定义表格的请求参数？

A: 可以通过 `paramsFun` 属性自定义请求参数处理：

```js
<TablePro
  paramsFun={(params) => ({
    ...params,
    customField: 'customValue',
  })}
/>
```

### Q: 如何获取表格实例？

A: 可以通过 `fieldProps.actionRef` 获取表格实例：

```js
const actionRef = useRef();

<TablePro
  fieldProps={{
    actionRef,
    // 其他配置
  }}
/>
```

### Q: 如何动态显示/隐藏列？

A: 可以通过 `fieldProps.columnsState` 控制列的显示状态：

```js
<TablePro
  fieldProps={{
    columnsState: {
      persistenceKey: 'table-columns',
      persistenceType: 'localStorage',
    },
  }}
/>
```

### Q: 如何自定义表格的样式？

A: 可以通过 `fieldProps.className` 或 `fieldProps.style` 自定义样式：

```js
<TablePro
  fieldProps={{
    className: 'custom-table',
    style: { backgroundColor: '#f5f5f5' },
  }}
/>
```

