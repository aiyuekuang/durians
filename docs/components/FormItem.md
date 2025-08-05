# FormItem 组件

FormItem 组件是一组增强的表单项组件，提供了更丰富的功能和更好的用户体验。

## 组件列表

### TreeSelectPro

树形选择器组件，支持多选、搜索、异步加载等功能。

#### 基本用法

```tsx
import { TreeSelectPro } from 'durians';

const Demo = () => {
  return (
    <TreeSelectPro
      placeholder="请选择"
      treeData={[
        {
          title: '父节点1',
          value: '0-0',
          children: [
            {
              title: '子节点1',
              value: '0-0-0',
            },
          ],
        },
      ]}
    />
  );
};
```

#### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| treeData | 树形数据 | `TreeNode[]` | `[]` |
| placeholder | 占位符 | `string` | - |
| multiple | 是否支持多选 | `boolean` | `false` |
| searchable | 是否支持搜索 | `boolean` | `true` |
| async | 是否异步加载 | `boolean` | `false` |
| onLoadData | 异步加载数据的回调 | `(node) => Promise<void>` | - |

### UploadPro

文件上传组件，支持拖拽上传、图片预览、进度条等功能。

#### 基本用法

```tsx
import { UploadPro } from 'durians';

const Demo = () => {
  return (
    <UploadPro
      action="/api/upload"
      listType="picture-card"
      maxCount={5}
      accept="image/*"
    />
  );
};
```

#### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| action | 上传地址 | `string` | - |
| listType | 上传列表的内建样式 | `'text' \| 'picture' \| 'picture-card'` | `'text'` |
| maxCount | 最大上传数量 | `number` | - |
| accept | 接受上传的文件类型 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| onSuccess | 上传成功回调 | `(response, file) => void` | - |
| onError | 上传失败回调 | `(error, file) => void` | - |

### TableSelect

表格选择器组件，支持从表格中选择数据。

#### 基本用法

```tsx
import { TableSelect } from 'durians';

const Demo = () => {
  return (
    <TableSelect
      placeholder="请选择用户"
      columns={[
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          key: 'email',
        },
      ]}
      dataSource={[
        { id: 1, name: '张三', email: 'zhangsan@example.com' },
        { id: 2, name: '李四', email: 'lisi@example.com' },
      ]}
      rowKey="id"
    />
  );
};
```

#### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 表格列配置 | `ColumnType[]` | `[]` |
| dataSource | 数据源 | `any[]` | `[]` |
| rowKey | 行数据的 key | `string` | `'id'` |
| placeholder | 占位符 | `string` | - |
| multiple | 是否支持多选 | `boolean` | `false` |
| searchable | 是否支持搜索 | `boolean` | `true` |
| onSelect | 选择回调 | `(selectedRows, selectedRowKeys) => void` | - |

## 在 ProProvider 中使用

这些组件已经集成到 ProProvider 中，可以直接在 ProForm 中使用：

```tsx
import { ProProvider } from 'durians';

const App = () => {
  return (
    <ProProvider>
      <ProForm>
        <ProForm.Item
          name="tree"
          label="树形选择"
          valueType="treeSelectPro"
        />
        <ProForm.Item
          name="upload"
          label="文件上传"
          valueType="uploadPro"
        />
        <ProForm.Item
          name="table"
          label="表格选择"
          valueType="tableSelect"
        />
      </ProForm>
    </ProProvider>
  );
};
``` 